import{g as y,r as p,b as e,e as w,h as E,w as t,f as A,i as V,ar as B}from"./index.659a0629.js";import{V as C,f as h,a as D,b as x,g as v,d as R,h as L}from"./VSpacer.a8cd8785.js";import{e as k,g as S,V as T,c as P}from"./VToolbar.5c0c5a6b.js";import{i as q,j as z,e as M,h as b,g as U}from"./VTextField.4042dc98.js";import{u as _}from"./VAvatar.e55b210c.js";const Z=y()({name:"VForm",props:{...q()},emits:{"update:modelValue":i=>!0,submit:i=>!0},setup(i,m){let{slots:u,emit:r}=m;const l=z(i),n=p();function o(a){a.preventDefault(),l.reset()}function s(a){const f=a,d=l.validate();f.then=d.then.bind(d),f.catch=d.catch.bind(d),f.finally=d.finally.bind(d),r("submit",f),f.defaultPrevented||d.then(g=>{var c;let{valid:F}=g;F&&((c=n.value)==null||c.submit())}),f.preventDefault()}return _(()=>{var a;return e("form",{ref:n,class:"v-form",novalidate:!0,onReset:o,onSubmit:s},[(a=u.default)==null?void 0:a.call(u,l)])}),M(l,n)}});const j=y()({name:"VLayout",props:k(),setup(i,m){let{slots:u}=m;const{layoutClasses:r,layoutStyles:l,getLayoutItem:n,items:o,layoutRef:s}=S(i);return _(()=>{var a;return e("div",{ref:s,class:r.value,style:l.value},[(a=u.default)==null?void 0:a.call(u)])}),{getLayoutItem:n,items:o}}}),J=w({__name:"login",setup(i){const m=p(""),u=p(""),r=p(),l={required:o=>o?!0:"\u6B64\u9879\u4E0D\u80FD\u4E3A\u7A7A",pwdMin:o=>o.length>=6?!0:"\u8FD9\u5E94\u8BE5\u662F\u4E00\u4E2A\u81F3\u5C116\u4F4D\u7684\u5BC6\u7801",emailReg:o=>/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(o)?!0:"\u8FD9\u4E0D\u662F\u4E00\u4E2A\u6B63\u786E\u7684\u7535\u5B50\u90AE\u7BB1"};function n(){console.log(r.value)}return(o,s)=>(A(),E(C,{class:"fill-height",fluid:""},{default:t(()=>[e(j,{fullHeight:!0},{default:t(()=>[e(h,{justify:"center"},{default:t(()=>[e(D,{"align-self":"center",cols:"12",sm:"8",md:"4"},{default:t(()=>[e(x,{class:"elevation-12"},{default:t(()=>[e(T,{dark:"",flat:""},{default:t(()=>[e(P,null,{default:t(()=>[V("\u767B\u5F55")]),_:1}),e(v)]),_:1}),e(R,null,{default:t(()=>[e(Z,{"fast-fail":"",onSubmit:B(n,["prevent"]),modelValue:r.value,"onUpdate:modelValue":s[2]||(s[2]=a=>r.value=a)},{default:t(()=>[e(b,{label:"username",name:"username",modelValue:m.value,"onUpdate:modelValue":s[0]||(s[0]=a=>m.value=a),"prepend-icon":"mdi-account",type:"text",rules:[l.required]},null,8,["modelValue","rules"]),e(b,{id:"password",label:"Password",name:"password",modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=a=>u.value=a),"prepend-icon":"mdi-lock",type:"password",rules:[l.required,l.pwdMin]},null,8,["modelValue","rules"]),e(L,null,{default:t(()=>[e(v),e(U,{type:"submit",variant:"text",disabled:!r.value},{default:t(()=>[V("\u63D0\u4EA4")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["onSubmit","modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{J as default};
