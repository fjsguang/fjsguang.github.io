<template>
  <div class="number-auth-demo">
    <h3 class="title">一键登录</h3>
    <a id="J_loginPhone" class="submit-btn">点击按钮一键登录</a>
    <input v-model="JwtToken" />
    <input v-model="AccessToken" />
  </div>
</template>

<script setup lang="ts">
let JwtToken = ref("");
let AccessToken = ref("");

onMounted(() => {
  const Window = window as any;
  new Window.VConsole();

  var loginPhoneEle = document.getElementById("J_loginPhone") as any;
  var phoneNumberServer = new Window.PhoneNumberServer();

  phoneNumberServer.setLoggerEnable(true);

  function getToken() {
    phoneNumberServer.getLoginToken({
      // 成功回调
      success: function (res) {
        // 一键登录: 可发请求到服务端调用 GetPhoneWithToken API, 获取用户手机号, 完成登录
        console.log(res, "resss");
      },

      // 失败回调
      error: function (res) {
        console.log(res, "error");
      },
      // 授权页状态监听函数
      watch: function (status, data) {
        console.log(status, data, "data");
      },
      // 配置选项
      authPageOption: {
        navText: "一键登录",
        subtitle: "", // 副标题
        btnText: "立即登录",
        agreeSymbol: "、",
        showCustomView: true,
        customView: {
          element:
            '<div class="btn_box other" onclick="clickEvent()">切换其他登录方式</div>',
          style: ".btn_box.other{background: #fff; color: #f00}",
          js: "function clickEvent(){alert(666666)}",
        },
        privacyBefore: "我已阅读并同意",
        isDialog: true, // 是否是弹窗样式
        manualClose: true, // 是否手动关闭弹窗/授权页
      },
    });
  }

  function checkLogin(jwtToken, accessToken) {
    phoneNumberServer.checkLoginAvailable({
      accessToken: accessToken,
      jwtToken: jwtToken,
      success: function (res) {
        console.log("身份鉴权成功, 可唤起登录界面", res);
        getToken();
      },

      error: function (res) {
        console.log("身份鉴权失败", res);
      },
    });
  }

  loginPhoneEle.onclick = function () {
    // 调用之前先去用户服务端获取AccessToken和jwtToken
    checkLogin(JwtToken.value, AccessToken.value);
  };
});
</script>
