(this["webpackJsonpreact-custom-popup"]=this["webpackJsonpreact-custom-popup"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),c=n(8),l=n.n(c),r=n(4),s=n(2),u=n(1),m=(n(14),n(15),function(){return i.a.createElement("svg",{color:"#484848",height:20,width:20,"aria-hidden":"true","data-prefix":"fas","data-icon":"times",className:"svg-inline--fa fa-times fa-w-11",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},i.a.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))}),p={warning:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M256 0C115.2 0 0 115.2 0 256s115.2 256 256 256 256-115.2 256-256S396.8 0 256 0zm0 51.2c28.16 0 48.64 23.04 46.08 51.2L281.6 307.2h-51.2l-20.48-204.8c-2.56-28.16 17.92-51.2 46.08-51.2zm0 409.6c-28.16 0-51.2-23.04-51.2-51.2 0-28.16 23.04-51.2 51.2-51.2s51.2 23.04 51.2 51.2c0 28.16-23.04 51.2-51.2 51.2z"})),info:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 450.56 450.56"},i.a.createElement("path",{d:"M225.28 0C101.376 0 0 101.376 0 225.28s101.376 225.28 225.28 225.28 225.28-101.376 225.28-225.28S349.184 0 225.28 0zm23.552 321.024h-48.128V183.296h48.128v137.728zm0-167.424h-48.128v-30.208h48.128V153.6z"})),success:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 477.867 477.867"},i.a.createElement("path",{d:"M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm131.533 165.666L199.799 336.333c-6.665 6.663-17.468 6.663-24.132 0L107.4 268.066c-6.78-6.548-6.968-17.352-.42-24.132 6.548-6.78 17.352-6.968 24.132-.42.142.138.282.277.42.42l56.201 56.201 158.601-158.601c6.78-6.548 17.584-6.36 24.132.419 6.388 6.614 6.388 17.099 0 23.713z"})),danger:i.a.createElement("svg",{width:20,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("path",{d:"M501.362 383.95L320.497 51.474c-29.059-48.921-99.896-48.986-128.994 0L10.647 383.95c-29.706 49.989 6.259 113.291 64.482 113.291h361.736c58.174 0 94.203-63.251 64.497-113.291zM256 437.241c-16.538 0-30-13.462-30-30s13.462-30 30-30 30 13.462 30 30-13.462 30-30 30zm30-120c0 16.538-13.462 30-30 30s-30-13.462-30-30v-150c0-16.538 13.462-30 30-30s30 13.462 30 30v150z"}))};!function(e){e.TOP_RIGHT="top-right",e.BOTTOM_RIGHT="bottom-right",e.BOTTOM_CENTER="bottom-center"}(a||(a={}));var d=a.BOTTOM_RIGHT;function f(e){var t=e.toasts,n=e.hideToast;return i.a.createElement("div",{className:"toast-container toast-".concat(d)},t&&t.map((function(e){return i.a.createElement(h,{key:e.id,toast:e,hideToast:n})})))}function h(e){var t,n=e.toast,c=e.hideToast,l=Object(o.useState)(null),s=Object(r.a)(l,2),f=s[0],h=s[1],E=Object(o.useState)({in:"",out:""}),v=Object(r.a)(E,2),b=v[0],g=v[1];Object(o.useEffect)((function(){return f&&!n?_():n&&!f&&(y(),n.timeoutDuration&&(t=setTimeout(_,n.timeoutDuration))),function(){return clearTimeout(t)}}),[n]),Object(o.useEffect)((function(){b.in&&n&&h(n),b.out&&(t=setTimeout((function(){h(null),c(n.id)}),500))}),[b]);var _=Object(o.useCallback)((function(){d===a.BOTTOM_CENTER?g({out:"animate__animated animate__slideOutDown animate__faster",in:""}):g({out:"animate__animated animate__slideOutRight animate__faster",in:""})}),[]),y=Object(o.useCallback)((function(){d===a.BOTTOM_CENTER?g({in:"animate__animated animate__slideInUp animate__faster",out:""}):g({in:"animate__animated animate__slideInRight animate__faster",out:""})}),[]);return f?i.a.createElement("div",{className:"toast-".concat(f.type," toast ").concat(b.in," ").concat(b.out),style:Object(u.a)({},n.containerStyle)},i.a.createElement("div",{style:{width:"90%",display:"flex",flexDirection:"row",alignItems:"center"}},i.a.createElement("div",null,p[f.type]),i.a.createElement("div",{className:"toast-text",style:Object(u.a)({},n.textStyle)},n.id," ",i.a.createElement("br",null),f.text)),i.a.createElement("div",{style:{width:"10%",cursor:"pointer"},onClick:_},m())):null}function E(e){var t=e.hideModal,n=e.animationType,a=e.Component,o=e.ComponentJSX,c=e.componentProps,l="";switch(n){case C.FADE_IN:l="animate__animated animate__fadeIn animate__faster";break;case C.HEART_BEAT:l="animate__animated animate__heartBeat animate__faster";break;case C.FLASH:l="animate__animated animate__flash animate__faster";break;case C.SWING:l="animate__animated animate__swing animate__faster";break;case C.ZOOM_IN:l="animate__animated animate__zoomIn animate__faster";break;case C.SLIDE_IN_LEFT:l="animate__animated animate__slideInLeft animate__faster";break;case C.SLIDE_IN_RIGHT:l="animate__animated animate__slideInRight animate__faster"}return a||o?i.a.createElement(b,null,i.a.createElement(v,{onClick:t}),i.a.createElement("div",{className:l},o&&o,a&&i.a.createElement(a,Object.assign({hideModal:t},c)))):null}var v=function(e){var t=e.onClick;return Object(o.useEffect)((function(){return document.body.classList.add("srm-modal-open"),function(){document.body.classList.remove("srm-modal-open")}}),[]),i.a.createElement("div",{onClick:t,className:"srm-modal-backdrop"})},b=function(e){var t=e.children;return i.a.createElement("div",{className:"srm-modal-wrapper"},t)},g=function(){var e=A(),t=e.componentJSX,n=e.component,a=e.toasts,o=e.componentProps,c=e.hideModal,l=e.hideToast;return o=Object(u.a)({},o),i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{componentProps:o,Component:n,ComponentJSX:t,hideModal:c,animationType:o.animationType}),i.a.createElement(f,{hideToast:l,toasts:a}))},_=n(3),y=(n(16),function(e){var t=e.showCloseButton,n=e.type,a=e.hideModal,o=e.title;return i.a.createElement("div",{className:"header header-".concat(n)},p[n],t&&i.a.createElement("div",{style:{position:"absolute",right:20,cursor:"pointer"},onClick:a},m()),i.a.createElement("div",{className:"title ".concat(p[n]?"title-margin":"")},o))});function O(e){var t=e.optionsToRender;return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"options-container"},t.map((function(e,t){return i.a.createElement("button",{key:"option".concat(t),className:"option-button",onClick:e.onClick},e.name)}))))}function w(e){var t=e.item,n=e.setInputValues,a=e.inputValues;return i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("label",{style:{display:"block",marginBottom:5}},t.label),t.inputType&&"textarea"!==t.inputType?i.a.createElement("input",{className:"input-item",onChange:function(e){n(Object(u.a)(Object(u.a)({},a),{},Object(_.a)({},t.name,e.nativeEvent.target.value)))},value:a[t.name]?a[t.name]:null,id:t.name,placeholder:t.placeholder,type:t.inputType||"text"}):null,"textarea"===t.inputType?i.a.createElement("textarea",{onChange:function(e){n(Object(u.a)(Object(u.a)({},a),{},Object(_.a)({},t.name,e.nativeEvent.target.value)))},value:a[t.name]?a[t.name]:null,className:"input-item",id:t.name,placeholder:t.placeholder}):null)}function T(e){var t=e.setInputValues,n=e.inputValues,a=e.item,c=Object(o.useRef)(null);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{textAlign:"left"}},i.a.createElement("label",{style:{display:"block"}},a.label||""),i.a.createElement("div",{style:{padding:10,textAlign:"center",cursor:"pointer",width:"90%",borderRadius:5,boxShadow:"#00000075 0px 0px 2px 0px",display:"inline-block"},onClick:function(){c.current&&c.current.click()}},"Select Image"),n&&a.multiple&&n.images&&n.images.length>0?i.a.createElement("div",{style:{margin:5}},n.images.length," images selected"):null,i.a.createElement("input",{ref:function(e){c.current=e},value:c.current?c.current.value:"",multiple:a.multiple||!1,className:"input-item",onChange:function(e){return function(e){if(e.target.files){var a=[],o=[];Array.from(e.target.files).forEach((function(e){a.push(new Promise((function(t){var n=new FileReader;n.onload=function(n){o.push({src:n.target.result,value:e}),t()},n.readAsDataURL(e)})))})),Promise.all(a).then((function(){t(Object(u.a)(Object(u.a)({},n),{},{images:n.images?[].concat(Object(s.a)(n.images),o):[].concat(o)})),c.current.value=""}))}}(e)},style:{display:"none"},id:"image",type:"file"})),i.a.createElement("div",{style:{textAlign:"left"}},n&&n.images&&n.images.map((function(e,a){return i.a.createElement("div",{style:{margin:5,display:"inline-block",position:"relative"}},i.a.createElement("img",{alt:"",style:{maxHeight:100},src:e.src}),i.a.createElement("div",{onClick:function(){return t(Object(u.a)(Object(u.a)({},n),{},{images:[].concat(Object(s.a)(n.images.slice(0,a)),Object(s.a)(n.images.slice(a+1)))}))},style:{borderRadius:5,position:"absolute",top:5,right:5}},m()))}))))}var C,I,j=function(e){var t=e.title,n=e.text,a=e.type,c=e.hideModal,l=e.optionButtons,s=void 0===l?null:l,u=e.onConfirm,m=void 0===u?null:u,p=e.onCancel,d=void 0===p?null:p,f=e.isAlert,h=void 0===f||f,E=e.showCloseButton,v=void 0!==E&&E,b=e.isInput,g=void 0!==b&&b,C=e.confirmText,I=void 0===C?"Ok":C,j=e.cancelText,N=void 0===j?"Cancel":j,S=e.inputs,k=void 0===S?null:S,x=e.onDismissed,L=void 0===x?null:x,M=e.input,A=Object(o.useState)(M&&M.default?Object(_.a)({},M.name,M.default):{}),D=Object(r.a)(A,2),R=D[0],B=D[1],F=[];F=h?[{name:I,onClick:function(){c()}}]:s||[{name:N,onClick:function(){c(),d&&d(),L&&g&&L(R)}},{name:I,onClick:function(){c(),m&&m(R),L&&g&&L(R)}}];var P=[];return g&&(P=k||[M]),i.a.createElement("div",{className:"dialog-wrapper"},i.a.createElement(y,{showCloseButton:v,type:a,hideModal:c,title:t}),n&&""!==n?i.a.createElement("div",{className:"body-text"},n):null,g&&i.a.createElement("div",{className:"inputs-container"},i.a.createElement(i.a.Fragment,null,P.map((function(e,t){return i.a.createElement("div",{key:"input".concat(t),className:"input-container"},"image"!==e.inputType?i.a.createElement(w,{item:e,setInputValues:B,inputValues:R}):i.a.createElement(T,{item:e,setInputValues:B,inputValues:R}))})))),i.a.createElement(O,{optionsToRender:F}))};!function(e){e.ZOOM_IN="ZOOM_IN",e.FADE_IN="FADE_IN",e.FLASH="FLASH",e.SWING="SWING",e.HEART_BEAT="HEART_BEAT",e.SLIDE_IN_LEFT="SLIDE_IN_LEFT",e.SLIDE_IN_RIGHT="SLIDE_IN_RIGHT"}(C||(C={})),function(e){e.WARNING="warning",e.INFO="info",e.DANGER="danger",e.SUCCESS="success"}(I||(I={}));var N={showModal:function(e){return null},hideModal:function(){return null},showAlert:function(e){return null},hideAlert:function(){return null},showOptionDialog:function(e){return null},showInputDialog:function(e){return null},showToast:function(e){return null},hideToast:function(e){return null}},S=Object(u.a)({},N),k=Object(o.createContext)(N),x=k.Provider,L=(k.Consumer,function(e,t){var n=t.type,a=t.component,o=t.componentProps,i=t.componentJSX,c=t.toast,l=t.id;switch(n){case"openModal":return Object(u.a)(Object(u.a)({},e),{},{component:a,componentProps:o,componentJSX:i});case"hideModal":return Object(u.a)(Object(u.a)({},e),{},{component:null,modalProps:{},componentJSX:null});case"showToast":return Object(u.a)(Object(u.a)({},e),{},{toasts:[].concat(Object(s.a)(e.toasts),[c]),componentProps:o});case"hideToast":var r=e.toasts.findIndex((function(e){return e.id===l}));return Object(u.a)(Object(u.a)({},e),{},{toasts:[].concat(Object(s.a)(e.toasts.slice(0,r)),Object(s.a)(e.toasts.slice(r+1)))});default:throw new Error("Unspecified reducer action")}}),M=function(e){var t=e.children,n={componentJSX:void 0,component:void 0,componentProps:{},toasts:[],showModal:function(e){s({type:"openModal",componentJSX:e})},hideModal:function(){s({type:"hideModal"})},showAlert:function(e){s({type:"openModal",component:j,componentProps:Object(u.a)({isAlert:!0,isInputDialog:!1},e)})},hideAlert:function(){s({type:"hideModal"})},showOptionDialog:function(e){s({type:"openModal",component:j,componentProps:Object(u.a)({isAlert:!1,isInput:!1},e)})},showInputDialog:function(e){s({type:"openModal",component:j,componentProps:Object(u.a)({isAlert:!1,isInput:!0},e)})},showToast:function(e){s({type:"showToast",toast:Object(u.a)(Object(u.a)({},e),{},{id:Math.random().toString(36).substring(7)}),componentProps:Object(u.a)({},e)})},hideToast:function(e){s({type:"hideToast",id:e})}};S=n;var a=Object(o.useReducer)(L,n),c=Object(r.a)(a,2),l=c[0],s=c[1],m=Object(o.useCallback)((function(e){"Escape"===e.key&&l.hideModal()}),[l]);return Object(o.useEffect)((function(){null===l.component?document.addEventListener("keydown",m):document.removeEventListener("keydown",m)}),[m,l.component]),i.a.createElement("div",{onKeyDown:m,className:"simple-react-modals"},i.a.createElement(x,{value:l},i.a.createElement(g,null),t))},A=function(){return Object(o.useContext)(k)};function D(){S.showToast({text:"test",type:I.DANGER})}var R=function(){var e=function(e){var t=A().hideModal;return i.a.createElement("div",{style:{background:"white",height:200,width:400,borderRadius:5}},"Received Props: ",JSON.stringify(e),i.a.createElement("button",{onClick:t},"Hide Me"))},t=A(),n=t.showAlert,a=t.showOptionDialog,o=t.showInputDialog,c=t.showModal,l=t.showToast,r={display:"block",marginTop:5};return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{style:r,onClick:function(){return c(i.a.createElement(e,{a:"test"}))}},"Show Modal"),i.a.createElement("button",{style:r,onClick:function(){return n({type:I.DANGER,text:"test",title:"test",animationType:C.FADE_IN})}},"Show Danger Alert"),i.a.createElement("button",{style:r,onClick:function(){return n({type:I.WARNING,text:"test",title:"test",animationType:C.ZOOM_IN})}},"Show Warning Alert"),i.a.createElement("button",{style:r,onClick:function(){return n({type:I.SUCCESS,text:"test",title:"test"})}},"Show Success Alert"),i.a.createElement("button",{style:r,onClick:function(){return n({type:I.INFO,text:"test",title:"test"})}},"Show Info Alert"),i.a.createElement("button",{style:r,onClick:function(){return a({text:"test",title:"test"})}},"Show Option Dialog"),i.a.createElement("button",{style:r,onClick:function(){return l({text:"Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum Lorem Lipsum",type:I.INFO,timeoutDuration:5e3})}},"Show Toast"),i.a.createElement("button",{style:r,onClick:function(){return o({title:"test",input:{inputType:"image",name:"testinput"},onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Show Input Dialog"),i.a.createElement("button",{style:r,onClick:function(){return o({title:"test",inputs:[{inputType:"text",name:"test"},{inputType:"image",name:"image",multiple:!0}],onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Show Input Dialog"),i.a.createElement("button",{style:r,onClick:function(){return o({title:"test",inputs:[{inputType:"date",name:"test"}],onConfirm:function(e){n({title:"Result",text:JSON.stringify(e)})}})}},"Show Input Dialog"),i.a.createElement("button",{style:r,onClick:D},"Show Toast Outside of Component"))},B=function(){return i.a.createElement(R,null)},F=function(){return i.a.createElement(M,null,i.a.createElement(B,null))};l.a.render(i.a.createElement(F,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4899080.chunk.js.map