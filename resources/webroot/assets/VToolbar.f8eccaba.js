import{z as se,c as W,u as Y,m as ie,a as ue,b as re,e as ce,d as de,f as ve,g as fe,j as D,A as me,k as ye}from"./VAvatar.e4fefd39.js";import{M,a1 as U,c as i,r as E,a8 as z,j as T,I as G,o as ge,a3 as be,a2 as J,a9 as pe,aa as he,l as xe,ab as Ie,g as Q,b as r,n as Se,t as Te,q as Ve,y as ke,a5 as we}from"./index.4b0b5bea.js";const H=Symbol.for("vuetify:layout"),ee=Symbol.for("vuetify:layout-item"),F=1e3,Ne=M({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ee=M({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function He(){const e=U(H);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Me(e){var v;const s=U(H);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${be()}`,u=G("useLayoutItem");J(ee,{id:t});const o=E(!1);pe(()=>o.value=!0),he(()=>o.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:d}=s.register(u,{...e,active:i(()=>o.value?!1:e.active.value),id:t});return xe(()=>s.unregister(t)),{layoutItemStyles:c,layoutRect:s.layoutRect,layoutItemScrimStyles:d}}const $e=(e,s,t,u)=>{let o={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...o}}];for(const d of e){const v=s.get(d),p=t.get(d),h=u.get(d);if(!v||!p||!h)continue;const g={...o,[v.value]:parseInt(o[v.value],10)+(h.value?parseInt(p.value,10):0)};c.push({id:d,layer:g}),o=g}return c};function Oe(e){const s=U(H,null),t=i(()=>s?s.rootZIndex.value-100:F),u=E([]),o=z(new Map),c=z(new Map),d=z(new Map),v=z(new Map),p=z(new Map),{resizeRef:h,contentRect:g}=se(),$=i(()=>{var a;const n=new Map,f=(a=e.overlaps)!=null?a:[];for(const b of f.filter(l=>l.includes(":"))){const[l,m]=b.split(":");if(!u.value.includes(l)||!u.value.includes(m))continue;const k=o.get(l),L=o.get(m),P=c.get(l),N=c.get(m);!k||!L||!P||!N||(n.set(m,{position:k.value,amount:parseInt(P.value,10)}),n.set(l,{position:L.value,amount:-parseInt(N.value,10)}))}return n}),x=i(()=>{const n=[...new Set([...d.values()].map(a=>a.value))].sort((a,b)=>a-b),f=[];for(const a of n){const b=u.value.filter(l=>{var m;return((m=d.get(l))==null?void 0:m.value)===a});f.push(...b)}return $e(f,o,c,v)}),_=i(()=>!Array.from(p.values()).some(n=>n.value)),V=i(()=>x.value[x.value.length-1].layer),B=i(()=>({"--v-layout-left":T(V.value.left),"--v-layout-right":T(V.value.right),"--v-layout-top":T(V.value.top),"--v-layout-bottom":T(V.value.bottom),..._.value?void 0:{transition:"none"}})),I=i(()=>x.value.slice(1).map((n,f)=>{let{id:a}=n;const{layer:b}=x.value[f],l=c.get(a),m=o.get(a);return{id:a,...b,size:Number(l.value),position:m.value}})),S=n=>I.value.find(f=>f.id===n),w=G("createLayout"),C=E(!1);ge(()=>{C.value=!0}),J(H,{register:(n,f)=>{let{id:a,order:b,position:l,layoutSize:m,elementSize:k,active:L,disableTransitions:P,absolute:N}=f;d.set(a,b),o.set(a,l),c.set(a,m),v.set(a,L),P&&p.set(a,P);const Z=Ie(ee,w==null?void 0:w.vnode).indexOf(n);Z>-1?u.value.splice(Z,0,a):u.value.push(a);const q=i(()=>I.value.findIndex(R=>R.id===a)),O=i(()=>t.value+x.value.length*2-q.value*2),oe=i(()=>{const R=l.value==="left"||l.value==="right",A=l.value==="right",le=l.value==="bottom",X={[l.value]:0,zIndex:O.value,transform:`translate${R?"X":"Y"}(${(L.value?0:-110)*(A||le?-1:1)}%)`,position:N.value||t.value!==F?"absolute":"fixed",..._.value?void 0:{transition:"none"}};if(!C.value)return X;const y=I.value[q.value];if(!y)throw new Error(`[Vuetify] Could not find layout item "${a}"`);const j=$.value.get(a);return j&&(y[j.position]+=j.amount),{...X,height:R?`calc(100% - ${y.top}px - ${y.bottom}px)`:k.value?`${k.value}px`:void 0,left:A?void 0:`${y.left}px`,right:A?`${y.right}px`:void 0,top:l.value!=="bottom"?`${y.top}px`:void 0,bottom:l.value!=="top"?`${y.bottom}px`:void 0,width:R?k.value?`${k.value}px`:void 0:`calc(100% - ${y.left}px - ${y.right}px)`}}),ne=i(()=>({zIndex:O.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:O}},unregister:n=>{d.delete(n),o.delete(n),c.delete(n),v.delete(n),p.delete(n),u.value=u.value.filter(f=>f!==n)},mainRect:V,mainStyles:B,getLayoutItem:S,items:I,layoutRect:g,rootZIndex:t});const te=i(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ae=i(()=>({zIndex:t.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:te,layoutStyles:ae,getLayoutItem:S,items:I,layoutRect:g,layoutRef:h}}const Ce=M({text:String,...W()},"v-toolbar-title"),Le=Q()({name:"VToolbarTitle",props:Ce(),setup(e,s){let{slots:t}=s;return Y(()=>{const u=!!(t.default||t.text||e.text);return r(e.tag,{class:"v-toolbar-title"},{default:()=>{var o;return[u&&r("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Pe=[null,"prominent","default","comfortable","compact"],Re=M({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Pe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ie(),...ue(),...re(),...W({tag:"header"}),...Se()},"v-toolbar"),K=Q()({name:"VToolbar",props:Re(),setup(e,s){var x;let{slots:t}=s;const{backgroundColorClasses:u,backgroundColorStyles:o}=ce(Te(e,"color")),{borderClasses:c}=de(e),{elevationClasses:d}=ve(e),{roundedClasses:v}=fe(e),{themeClasses:p}=Ve(e),h=E(!!(e.extended||((x=t.extension)==null?void 0:x.call(t)))),g=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),$=i(()=>h.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),Y(()=>{var I;const _=!!(e.title||t.title),V=!!(t.image||e.image),B=(I=t.extension)==null?void 0:I.call(t);return h.value=!!(e.extended||B),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,c.value,d.value,v.value,p.value],style:[o.value]},{default:()=>[V&&r("div",{key:"image",class:"v-toolbar__image"},[r(D,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var S;return[t.image?(S=t.image)==null?void 0:S.call(t):r(me,null,null)]}})]),r(D,{defaults:{VTabs:{height:T(g.value)}}},{default:()=>{var S,w,C;return[r("div",{class:"v-toolbar__content",style:{height:T(g.value)}},[t.prepend&&r("div",{class:"v-toolbar__prepend"},[(S=t.prepend)==null?void 0:S.call(t)]),_&&r(Le,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&r("div",{class:"v-toolbar__append"},[(C=t.append)==null?void 0:C.call(t)])])]}}),r(D,{defaults:{VTabs:{height:T($.value)}}},{default:()=>[r(ye,null,{default:()=>[h.value&&r("div",{class:"v-toolbar__extension",style:{height:T($.value)}},[B])]})]})]})}),{contentHeight:g,extensionHeight:$}}});function Ae(e){var s;return we(e,Object.keys((s=K==null?void 0:K.props)!=null?s:{}))}export{K as V,Ee as a,Ce as b,Le as c,He as d,Ne as e,Ae as f,Oe as g,Re as m,Me as u};
