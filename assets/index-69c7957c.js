import{d as b,n as r,o as p,a as v,c as _,A as u,B as d,h as f,l,C as m}from"./index-e37d92ea.js";const k={class:"number-auth-demo"},w=l("h3",{class:"title"},"一键登录",-1),x=l("a",{id:"J_loginPhone",class:"submit-btn"},"点击按钮一键登录",-1),V=b({__name:"index",setup(T){let t=r(""),s=r("");return p(()=>{const c=window;new c.VConsole;var n=document.getElementById("J_loginPhone"),e=new c.PhoneNumberServer;function g(){e.getLoginToken({success:function(o){console.log(o,"resss")},error:function(o){console.log(o,"error")},watch:function(o,i){console.log(o,i,"data")},authPageOption:{navText:"一键登录",subtitle:"",btnText:"立即登录",agreeSymbol:"、",showCustomView:!0,customView:{element:'<div class="btn_box other" onclick="clickEvent()">切换其他登录方式</div>',style:".btn_box.other{background: #fff; color: #f00}",js:"function clickEvent(){alert(666666)}"},privacyBefore:"我已阅读并同意",isDialog:!0,manualClose:!0}})}function h(o,i){e.checkLoginAvailable({accessToken:i,jwtToken:o,success:function(a){console.log("身份鉴权成功, 可唤起登录界面",a),g()},error:function(a){console.log("身份鉴权失败",a)}})}n.onclick=function(){h(t,s)}}),(c,n)=>(v(),_("div",k,[w,x,u(l("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>m(t)?t.value=e:t=e)},null,512),[[d,f(t)]]),u(l("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>m(s)?s.value=e:s=e)},null,512),[[d,f(s)]])]))}});export{V as default};
