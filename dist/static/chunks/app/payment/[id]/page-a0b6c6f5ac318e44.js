(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{72:function(n,e,t){Promise.resolve().then(t.bind(t,2854))},2854:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return J}});var i,r,o=t(2805),s=t(9268),a=t(5846),l=t.n(a),u=t(6006),c=t(9700),d=t(8945),g=t(5416);let h=()=>{let n=new Date;return(n.getHours()>9?n.getHours():"0"+n.getHours())+":"+(n.getMinutes()>9?n.getMinutes():"0"+n.getMinutes())+":"+(n.getSeconds()>9?n.getSeconds():"0"+n.getSeconds())+" "+(n.getDate()>9?n.getDate():"0"+n.getDate())+"."+(n.getMonth()+1>9?n.getMonth():"0"+(n.getMonth()+1))+"."+n.getFullYear()};function x(){let n=(0,o._)(["\n  background-color: #fff;\n  padding: 32px;\n  width: 456px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 22px;\n  border-radius: 12px;\n  position: relative;\n  text-align: center;\n\n  @media "," {\n    width: 90%;\n  }\n\n  @media "," {\n    font-size: 14px;\n  }\n"]);return x=function(){return n},n}function p(){let n=(0,o._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 13;\n"]);return p=function(){return n},n}function f(){let n=(0,o._)(["\n  font-size: 48px;\n  text-align: center;\n  margin-top: 1em;\n"]);return f=function(){return n},n}function m(){let n=(0,o._)([""]);return m=function(){return n},n}function v(){let n=(0,o._)(["\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n"]);return v=function(){return n},n}function j(){let n=(0,o._)(["\n  width: 64px;\n  height: 64px;\n  border: 8px solid;\n  border-color: #3d5af1 transparent #3d5af1 transparent;\n  border-radius: 50%;\n  animation: "," 1.5s linear infinite;\n"]);return j=function(){return n},n}let b=d.zo.div(x(),g.U.md,g.U.xs),_=d.zo.div(p()),w=d.zo.div(f()),z=d.zo.div(m()),S=(0,d.F4)(v()),y=d.zo.div(j(),S);var E=n=>{let{heading:e,button:t,isOpen:i,rejected:r,isLoading:o,phone:a,cash:l,provider:u}=n;return(0,s.jsx)(s.Fragment,{children:i?(0,s.jsx)(_,{children:(0,s.jsx)(b,{children:o?(0,s.jsx)(z,{children:(0,s.jsx)(y,{})}):(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:e}),r?(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"Повторите попытку"}),(0,s.jsx)(w,{children:"\uD83E\uDEE5"})]}):(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:["Номер телефона: ",a]}),(0,s.jsxs)("div",{children:["Сумма пополнения: ",l,"₽"]}),(0,s.jsxs)("div",{children:["Провайдер: ",u]}),(0,s.jsxs)("div",{children:["Время: ",h()]}),(0,s.jsx)(w,{children:"\uD83D\uDE42"})]}),(0,s.jsx)("div",{children:t})]})})}):null})};let k=()=>{let n=n=>{let e="";if(["1","2","3","4","5","6","7","8","9","0"].includes(n[0])){switch(n[0]){case"1":case"2":case"3":case"4":case"5":case"6":case"9":case"0":e="+7 ("+n;break;case"7":case"8":e="+7 "}n.length>1&&(e+="("+n.substring(1,4)),n.length>=5&&(e+=") "+n.substring(4,7)),n.length>=8&&(e+="-"+n.substring(7,9)),n.length>=10&&(e+="-"+n.substring(9,11))}else e="+"+n.substring(0,16);return e},e=n=>n.replace(/\D/g,"");return{onChange:t=>{let i=t.target,r=e(i.value),o=i.selectionStart;if(i.value){if(i.value.length!==o&&r.length<11){let{data:n}=t.nativeEvent;n&&/\D/.test(n)&&(i.value=r);return}i.value=n(r),i.value.length>=18&&i.setSelectionRange(o,o)}},onKeyDown:n=>{let t=n.target;"Backspace"===n.key&&1===e(t.value).length&&(t.value="")}}};(i=r||(r={})).FAILED="FAILED",i.SUCCESS="SUCCESS";let D=async()=>await new Promise(n=>{let e=Math.floor(Math.random()*Object.keys(r).length),t=Object.values(r)[e];setTimeout(()=>{r[t]===r.SUCCESS?n({success:!0}):r[t]===r.FAILED&&n({success:!1})},2e3)});var C=t(9940);function M(){let n=(0,o._)(["\n  color: gray;\n  font-size: 12px;\n  margin-left: 8px;\n"]);return M=function(){return n},n}function U(){let n=(0,o._)(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]);return U=function(){return n},n}function F(){let n=(0,o._)(["\n  border: 1px solid gray;\n  border-radius: 4px;\n  width: 80%;\n  margin: 0 auto;\n  height: 100%;\n\n  animation: "," 0.7s ease;\n"]);return F=function(){return n},n}function R(){let n=(0,o._)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2em;\n\n  @media "," {\n    font-size: 14px;\n  }\n\n  @media "," {\n    font-size: 12px;\n  }\n"]);return R=function(){return n},n}function I(){let n=(0,o._)(["\n  width: 200px;\n  height: 70px;\n  object-fit: scale-down;\n\n  @media "," {\n    width: 180px;\n  }\n"]);return I=function(){return n},n}function O(){let n=(0,o._)(["\n  display: block;\n  margin: 0 auto;\n  width: 70%;\n  margin-top: 1em;\n  position: relative;\n"]);return O=function(){return n},n}function N(){let n=(0,o._)(["\n  display: block;\n  margin: 8px auto 0 auto;\n  width: 70%;\n  height: 100%;\n  font-size: 14px;\n  padding: 1em;\n"]);return N=function(){return n},n}function B(){let n=(0,o._)(["\n  display: block;\n  margin: 2em auto 2em auto;\n  font-size: 16px;\n  padding: 8px;\n  background-color: #5558fa;\n  color: #fff;\n  border: 1px solid;\n  border-radius: 4px;\n  cursor: pointer;\n"]);return B=function(){return n},n}function A(){let n=(0,o._)(["\n  font-size: 12px;\n  color: red;\n  margin: 0 auto;\n  width: 70%;\n  margin-top: 4px;\n"]);return A=function(){return n},n}function H(){let n=(0,o._)(["\n  position: absolute;\n  bottom: -41px;\n  right: 3%;\n"]);return H=function(){return n},n}let L=d.zo.span(M()),P=(0,d.F4)(U()),Q=d.zo.div(F(),P),T=d.zo.div(R(),g.U.xm,g.U.xs),q=d.zo.img(I(),g.U.xs),G=d.zo.label(O()),K=d.zo.input(N()),X=d.zo.button(B()),Y=d.zo.div(A()),$=d.zo.div(H());function J(n){var e,t;let{params:{id:i}}=n,[r,o]=(0,u.useState)(!1),[a,d]=(0,u.useState)(!1),[g,h]=(0,u.useState)({success:!1}),[x,p]=(0,u.useState)(""),[f,m]=(0,u.useState)(0),[v,j]=(0,u.useState)(!1),b=C.a[i-1],{onChange:_,onKeyDown:w}=k(),{register:z,handleSubmit:S,formState:{errors:y}}=(0,c.cI)(),M=async n=>{j(!0),o(!0);try{await D().then(n=>h(n)),g.success?(d(!1),p(n.phone),m(n.cash),o(!0)):g.success||(o(!1),d(!0)),j(!1)}catch(n){console.error(n)}};return(0,s.jsxs)(Q,{children:[(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)(L,{children:"Назад"})}),(0,s.jsxs)(T,{children:[(0,s.jsx)(q,{src:b.img,alt:"logo"}),(0,s.jsxs)("div",{children:["Выбранный провайдер: ",b.name]})]}),(0,s.jsxs)("form",{onSubmit:S(M),children:[(0,s.jsx)(G,{htmlFor:"phone",children:"Номер телефона"}),(0,s.jsx)(K,{type:"tel",onKeyDown:w,placeholder:"+7 (999) 999-99-99",id:"phone",...z("phone",{required:C.C.REQUIRED,validate:{phone:n=>n.replace(/\D/g,"").length>=11||C.C.PHONE},onChange:_,max:{value:11,message:"Введите корректный номер"},min:{value:11,message:"Слишком короткое значение"}})}),(0,s.jsx)(Y,{children:null==y?void 0:null===(e=y.phone)||void 0===e?void 0:e.message}),(0,s.jsxs)(G,{htmlFor:"cash",children:["Сумма пополнения ",(0,s.jsx)($,{children:"₽"})]}),(0,s.jsx)(K,{placeholder:"0",type:"text",id:"cash",...z("cash",{required:C.C.REQUIRED,pattern:{value:/^[0-9]+$/,message:"Введите числовое значение"},max:{value:1e3,message:C.C.MAX},min:{value:1,message:C.C.MIN}})}),(0,s.jsx)(Y,{children:null==y?void 0:null===(t=y.cash)||void 0===t?void 0:t.message}),(0,s.jsx)(X,{children:"Отправить"})]}),r?(0,s.jsx)(E,{heading:"Операция прошла успешно",button:(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)(X,{children:"На главную"})}),isOpen:r,phone:x,cash:f,provider:b.name,rejected:!1,onClose:()=>o(!1),isLoading:v}):null,a?(0,s.jsx)(E,{heading:"Возникла ошибка",onClose:()=>d(!1),button:(0,s.jsx)(X,{onClick:()=>d(!1),children:"Закрыть"}),isOpen:a,rejected:!0,isLoading:v}):null]})}},5416:function(n,e,t){"use strict";t.d(e,{U:function(){return r}});let i={xs:"319px",xm:"326px",md:"708px",tb:"800px"},r={xs:"(max-width: ".concat(i.xs,")"),xm:"(max-width: ".concat(i.xm,")"),md:"(max-width: ".concat(i.md,")"),tb:"(max-width: ".concat(i.tb,")")}},9940:function(n,e,t){"use strict";var i,r;t.d(e,{C:function(){return i},a:function(){return o}});let o=[{id:0,name:"МТС",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/MTS_logo_2015.svg/2560px-MTS_logo_2015.svg.png"},{id:1,name:"Билайн",img:"https://upload.wikimedia.org/wikipedia/commons/7/74/Beeline_logo.jpg"},{id:2,name:"Мегафон",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg/2560px-MegaFon_sign%2Blogo_horiz_green_RU_%28RGB%29.svg.png"}];(r=i||(i={})).REQUIRED="Обязательное поле",r.PHONE="Слишком короткое значение",r.MAX="Максимальное значение 1000",r.MIN="Минимальное значение 1"}},function(n){n.O(0,[439,406,700,253,769,744],function(){return n(n.s=72)}),_N_E=n.O()}]);