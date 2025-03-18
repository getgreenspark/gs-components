(function(h,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("vue"),require("vuetify")):typeof define=="function"&&define.amd?define(["exports","vue","vuetify"],i):(h=typeof globalThis<"u"?globalThis:h||self,i(h.GsComponents={},h.Vue,h.Vuetify))})(this,function(h,i,Re){"use strict";function y(e,t){return n=>Object.keys(e).reduce((r,s)=>{const a=typeof e[s]=="object"&&e[s]!=null&&!Array.isArray(e[s])?e[s]:{type:e[s]};return n&&s in n?r[s]={...a,default:n[s]}:r[s]=a,t&&!r[s].source&&(r[s].source=t),r},{})}const H=y({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component"),U=typeof window<"u",Fe=U&&"IntersectionObserver"in window;function b(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ie(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Y(e){let t;return e!==null&&typeof e=="object"&&((t=Object.getPrototypeOf(e))===Object.prototype||t===null)}function Oe(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const q=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function L(e,t){return t.every(n=>e.hasOwnProperty(n))}function ze(e,t){const n={};for(const r of t)Object.hasOwn(e,r)&&(n[r]=e[r]);return n}function X(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<e.length;)n.push(e.substr(r,t)),r+=t;return n}function K(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in e)r[s]=e[s];for(const s in t){const o=e[s],a=t[s];if(Y(o)&&Y(a)){r[s]=K(o,a,n);continue}if(n&&Array.isArray(o)&&Array.isArray(a)){r[s]=n(o,a);continue}r[s]=a}return r}function Z(e){return e.map(t=>t.type===i.Fragment?Z(t.children):t).flat()}function C(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(C.cache.has(e))return C.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return C.cache.set(e,t),t}C.cache=new Map;function J(e){const t=i.reactive({}),n=i.computed(e);return i.watchEffect(()=>{for(const r in n.value)t[r]=n.value[r]},{flush:"sync"}),i.toRefs(t)}function Le(e,t){return e.includes(t)}function Pe(){const e=i.shallowRef(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>Oe(e.value)}),t}const w=2.4,Q=.2126729,ee=.7151522,te=.072175,Ae=.55,De=.58,Me=.57,je=.62,R=.03,ne=1.45,We=5e-4,Ge=1.25,He=1.25,Ue=.078,re=12.82051282051282,F=.06,Ye=.001;function se(e,t){const n=(e.r/255)**w,r=(e.g/255)**w,s=(e.b/255)**w,o=(t.r/255)**w,a=(t.g/255)**w,d=(t.b/255)**w;let c=n*Q+r*ee+s*te,l=o*Q+a*ee+d*te;if(c<=R&&(c+=(R-c)**ne),l<=R&&(l+=(R-l)**ne),Math.abs(l-c)<We)return 0;let f;if(l>c){const u=(l**Ae-c**De)*Ge;f=u<Ye?0:u<Ue?u-u*re*F:u-F}else{const u=(l**je-c**Me)*He;f=u>-.001?0:u>-.078?u-u*re*F:u+F}return f*100}function k(e){i.warn(`Vuetify: ${e}`)}function P(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function qe(e){return P(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const ie=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Xe={rgb:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),rgba:(e,t,n,r)=>({r:e,g:t,b:n,a:r}),hsl:(e,t,n,r)=>oe({h:e,s:t,l:n,a:r}),hsla:(e,t,n,r)=>oe({h:e,s:t,l:n,a:r}),hsv:(e,t,n,r)=>x({h:e,s:t,v:n,a:r}),hsva:(e,t,n,r)=>x({h:e,s:t,v:n,a:r})};function S(e){if(typeof e=="number")return(isNaN(e)||e<0||e>16777215)&&k(`'${e}' is not a valid hex color`),{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&ie.test(e)){const{groups:t}=e.match(ie),{fn:n,values:r}=t,s=r.split(/,\s*/).map(o=>o.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(o)/100:parseFloat(o));return Xe[n](...s)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map(r=>r+r).join(""):[6,8].includes(t.length)||k(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&k(`'${e}' is not a valid hex(a) color`),Ke(t)}else if(typeof e=="object"){if(L(e,["r","g","b"]))return e;if(L(e,["h","s","l"]))return x(ae(e));if(L(e,["h","s","v"]))return x(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function x(e){const{h:t,s:n,v:r,a:s}=e,o=d=>{const c=(d+t/60)%6;return r-r*n*Math.max(Math.min(c,4-c,1),0)},a=[o(5),o(3),o(1)].map(d=>Math.round(d*255));return{r:a[0],g:a[1],b:a[2],a:s}}function oe(e){return x(ae(e))}function ae(e){const{h:t,s:n,l:r,a:s}=e,o=r+n*Math.min(r,1-r),a=o===0?0:2-2*r/o;return{h:t,s:a,v:o,a:s}}function Ke(e){e=Ze(e);let[t,n,r,s]=$e(e,2).map(o=>parseInt(o,16));return s=s===void 0?s:s/255,{r:t,g:n,b:r,a:s}}function Ze(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=X(X(e,6),8,"F")),e}function Je(e){const t=Math.abs(se(S(0),S(e)));return Math.abs(se(S(16777215),S(e)))>Math.min(t,50)?"#fff":"#000"}function E(e,t){const n=i.getCurrentInstance();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function Qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=E(e).type;return C((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:E("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const A=Symbol.for("vuetify:defaults");function ce(){const e=i.inject(A);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function tt(e,t){var n,r;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((r=e.props)==null?void 0:r[C(t)])<"u"}function nt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ce();const r=E("useDefaults");if(t=t??r.type.name??r.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const s=i.computed(()=>{var c;return(c=n.value)==null?void 0:c[e._as??t]}),o=new Proxy(e,{get(c,l){var u,p,g,v,$,B,_;const f=Reflect.get(c,l);return l==="class"||l==="style"?[(u=s.value)==null?void 0:u[l],f].filter(V=>V!=null):typeof l=="string"&&!tt(r.vnode,l)?((p=s.value)==null?void 0:p[l])!==void 0?(g=s.value)==null?void 0:g[l]:(($=(v=n.value)==null?void 0:v.global)==null?void 0:$[l])!==void 0?(_=(B=n.value)==null?void 0:B.global)==null?void 0:_[l]:f:f}}),a=i.shallowRef();i.watchEffect(()=>{if(s.value){const c=Object.entries(s.value).filter(l=>{let[f]=l;return f.startsWith(f[0].toUpperCase())});a.value=c.length?Object.fromEntries(c):void 0}else a.value=void 0});function d(){const c=et(A,r);i.provide(A,i.computed(()=>a.value?K((c==null?void 0:c.value)??{},a.value):c==null?void 0:c.value))}return{props:o,provideSubDefaults:d}}function I(e){if(e._setup=e._setup??e.setup,!e.name)return k("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=y(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(r){return ze(r,t)},e.props._as=String,e.setup=function(r,s){const o=ce();if(!o.value)return e._setup(r,s);const{props:a,provideSubDefaults:d}=nt(r,r._as??e.name,o),c=e._setup(a,s);return d(),c}}return e}function D(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?I:i.defineComponent)(t)}function le(e){const t=E("useRender");t.render=e}function rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=Pe(),r=i.ref();if(U){const s=new ResizeObserver(o=>{o.length&&(t==="content"?r.value=o[0].contentRect:r.value=o[0].target.getBoundingClientRect())});i.onBeforeUnmount(()=>{s.disconnect()}),i.watch(()=>n.el,(o,a)=>{a&&(s.unobserve(a),r.value=void 0),o&&s.observe(o)},{flush:"post"})}return{resizeRef:n,contentRect:i.readonly(r)}}const ue=Symbol.for("vuetify:theme"),de=y({theme:String},"theme");function fe(e){E("provideTheme");const t=i.inject(ue,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=i.computed(()=>e.theme??t.name.value),r=i.computed(()=>t.themes.value[n.value]),s=i.computed(()=>t.isDisabled?void 0:`v-theme--${n.value}`),o={...t,name:n,current:r,themeClasses:s};return i.provide(ue,o),o}const me=y({tag:{type:String,default:"div"}},"tag");function st(e){return J(()=>{const t=[],n={};if(e.value.background)if(P(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&qe(e.value.background)){const r=S(e.value.background);if(r.a==null||r.a===1){const s=Je(r);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(P(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function M(e,t){const n=i.computed(()=>({text:i.isRef(e)?e.value:null})),{colorClasses:r,colorStyles:s}=st(n);return{textColorClasses:r,textColorStyles:s}}const it={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper",upload:"mdi-cloud-upload"},ot={component:e=>i.h(lt,{...e,class:"mdi"})},pe=[String,Function,Object,Array],at=Symbol.for("vuetify:icons"),O=y({icon:{type:pe},tag:{type:String,required:!0}},"icon"),ge=D()({name:"VComponentIcon",props:O(),setup(e,t){let{slots:n}=t;return()=>{const r=e.icon;return i.createVNode(e.tag,null,{default:()=>{var s;return[e.icon?i.createVNode(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),ct=I({name:"VSvgIcon",inheritAttrs:!1,props:O(),setup(e,t){let{attrs:n}=t;return()=>i.createVNode(e.tag,i.mergeProps(n,{style:null}),{default:()=>[i.createVNode("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(r=>Array.isArray(r)?i.createVNode("path",{d:r[0],"fill-opacity":r[1]},null):i.createVNode("path",{d:r},null)):i.createVNode("path",{d:e.icon},null)])]})}});I({name:"VLigatureIcon",props:O(),setup(e){return()=>i.createVNode(e.tag,null,{default:()=>[e.icon]})}});const lt=I({name:"VClassIcon",props:O(),setup(e){return()=>i.createVNode(e.tag,{class:e.icon},null)}}),ut=e=>{const t=i.inject(at);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:i.computed(()=>{var c;const r=i.unref(e);if(!r)return{component:ge};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(c=t.aliases)==null?void 0:c[s.slice(1)])),s||k(`Could not find aliased icon "${r}"`),Array.isArray(s))return{component:ct,icon:s};if(typeof s!="string")return{component:ge,icon:s};const o=Object.keys(t.sets).find(l=>typeof s=="string"&&s.startsWith(`${l}:`)),a=o?s.slice(o.length+1):s;return{component:t.sets[o??t.defaultSet].component,icon:a}})}},dt=["x-small","small","default","large","x-large"],he=y({size:{type:[String,Number],default:"default"}},"size");function ye(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qe();return J(()=>{let n,r;return Le(dt,e.size)?n=`${t}--size-${e.size}`:e.size&&(r={width:b(e.size),height:b(e.size)}),{sizeClasses:n,sizeStyles:r}})}const ft=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:pe,...H(),...he(),...me({tag:"i"}),...de()},"VIcon"),mt=D()({name:"VIcon",props:ft(),setup(e,t){let{attrs:n,slots:r}=t;const s=i.ref(),{themeClasses:o}=fe(e),{iconData:a}=ut(i.computed(()=>s.value||e.icon)),{sizeClasses:d}=ye(e),{textColorClasses:c,textColorStyles:l}=M(i.toRef(e,"color"));return le(()=>{var p,g;const f=(p=r.default)==null?void 0:p.call(r);f&&(s.value=(g=Z(f).filter(v=>v.type===i.Text&&v.children&&typeof v.children=="string")[0])==null?void 0:g.children);const u=!!(n.onClick||n.onClickOnce);return i.createVNode(a.value.component,{tag:e.tag,icon:a.value.icon,class:["v-icon","notranslate",o.value,d.value,c.value,{"v-icon--clickable":u,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},l.value,e.style],role:u?"button":void 0,"aria-hidden":!u,tabindex:u?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}});function pt(e,t){const n=i.ref(),r=i.shallowRef(!1);if(Fe){const s=new IntersectionObserver(o=>{r.value=!!o.find(a=>a.isIntersecting)},t);i.onBeforeUnmount(()=>{s.disconnect()}),i.watch(n,(o,a)=>{a&&(s.unobserve(a),r.value=!1),o&&s.observe(o)},{flush:"post"})}return{intersectionRef:n,isIntersecting:r}}const gt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...H(),...he(),...me({tag:"div"}),...de()},"VProgressCircular"),ht=D()({name:"VProgressCircular",props:gt(),setup(e,t){let{slots:n}=t;const r=20,s=2*Math.PI*r,o=i.ref(),{themeClasses:a}=fe(e),{sizeClasses:d,sizeStyles:c}=ye(e),{textColorClasses:l,textColorStyles:f}=M(i.toRef(e,"color")),{textColorClasses:u,textColorStyles:p}=M(i.toRef(e,"bgColor")),{intersectionRef:g,isIntersecting:v}=pt(),{resizeRef:$,contentRect:B}=rt(),_=i.computed(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),V=i.computed(()=>Number(e.width)),Be=i.computed(()=>c.value?Number(e.size):B.value?B.value.width:Math.max(V.value,32)),G=i.computed(()=>r/(1-V.value/Be.value)*2),Ve=i.computed(()=>V.value/Be.value*G.value),Bt=i.computed(()=>b((100-_.value)/100*s));return i.watchEffect(()=>{g.value=o.value,$.value=o.value}),le(()=>i.createVNode(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":v.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},a.value,d.value,l.value,e.class],style:[c.value,f.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[i.createVNode("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${G.value} ${G.value}`},[i.createVNode("circle",{class:["v-progress-circular__underlay",u.value],style:p.value,fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":Ve.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),i.createVNode("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r,"stroke-width":Ve.value,"stroke-dasharray":s,"stroke-dashoffset":Bt.value},null)]),n.default&&i.createVNode("div",{class:"v-progress-circular__content"},[n.default({value:_.value})])]})),{}}}),j=Symbol("rippleStop"),yt=80;function ve(e,t){e.style.transform=t,e.style.webkitTransform=t}function W(e){return e.constructor.name==="TouchEvent"}function be(e){return e.constructor.name==="KeyboardEvent"}const vt=function(e,t){var u;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!be(e)){const p=t.getBoundingClientRect(),g=W(e)?e.touches[e.touches.length-1]:e;r=g.clientX-p.left,s=g.clientY-p.top}let o=0,a=.3;(u=t._ripple)!=null&&u.circle?(a=.15,o=t.clientWidth/2,o=n.center?o:o+Math.sqrt((r-o)**2+(s-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-o*2)/2}px`,c=`${(t.clientHeight-o*2)/2}px`,l=n.center?d:`${r-o}px`,f=n.center?c:`${s-o}px`;return{radius:o,scale:a,x:l,y:f,centerX:d,centerY:c}},z={show(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((g=t==null?void 0:t._ripple)!=null&&g.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:o,scale:a,x:d,y:c,centerX:l,centerY:f}=vt(e,t,n),u=`${o*2}px`;s.className="v-ripple__animation",s.style.width=u,s.style.height=u,t.appendChild(r);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ve(s,`translate(${d}, ${c}) scale3d(${a},${a},${a})`),s.dataset.activated=String(performance.now()),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ve(s,`translate(${l}, ${f}) scale3d(1,1,1)`)})})},hide(e){var o;if(!((o=e==null?void 0:e._ripple)!=null&&o.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=n.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Ce(e){return typeof e>"u"||!!e}function T(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[j])){if(e[j]=!0,W(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||be(e),n._ripple.class&&(t.class=n._ripple.class),W(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{z.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var r;(r=n==null?void 0:n._ripple)!=null&&r.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},yt)}else z.show(e,n,t)}}function we(e){e[j]=!0}function m(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{m(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),z.hide(t)}}function _e(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let N=!1;function ke(e){!N&&(e.keyCode===q.enter||e.keyCode===q.space)&&(N=!0,T(e))}function Se(e){N=!1,m(e)}function xe(e){N&&(N=!1,m(e))}function Ee(e,t,n){const{value:r,modifiers:s}=t,o=Ce(r);if(o||z.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=o,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ie(r)&&r.class&&(e._ripple.class=r.class),o&&!n){if(s.stop){e.addEventListener("touchstart",we,{passive:!0}),e.addEventListener("mousedown",we);return}e.addEventListener("touchstart",T,{passive:!0}),e.addEventListener("touchend",m,{passive:!0}),e.addEventListener("touchmove",_e,{passive:!0}),e.addEventListener("touchcancel",m),e.addEventListener("mousedown",T),e.addEventListener("mouseup",m),e.addEventListener("mouseleave",m),e.addEventListener("keydown",ke),e.addEventListener("keyup",Se),e.addEventListener("blur",xe),e.addEventListener("dragstart",m,{passive:!0})}else!o&&n&&Te(e)}function Te(e){e.removeEventListener("mousedown",T),e.removeEventListener("touchstart",T),e.removeEventListener("touchend",m),e.removeEventListener("touchmove",_e),e.removeEventListener("touchcancel",m),e.removeEventListener("mouseup",m),e.removeEventListener("mouseleave",m),e.removeEventListener("keydown",ke),e.removeEventListener("keyup",Se),e.removeEventListener("dragstart",m),e.removeEventListener("blur",xe)}function bt(e,t){Ee(e,t,!1)}function Ct(e){delete e._ripple,Te(e)}function wt(e,t){if(t.value===t.oldValue)return;const n=Ce(t.oldValue);Ee(e,t,n)}const _t={mounted:bt,unmounted:Ct,updated:wt},kt={key:1,class:"text"},Ne=((e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n})(i.defineComponent({__name:"GsButton",props:{tag:{default:"button"},type:{default:"primary"},size:{},icon:{},disabled:{type:Boolean},loading:{type:Boolean},fullWidth:{type:Boolean},href:{},width:{},target:{default:"_self"},rounded:{type:Boolean}},setup(e){const t=e,n=i.computed(()=>t.href?"a":t.tag||"button"),r=i.computed(()=>n.value==="a"?!1:{class:"ripple-effect"}),s=i.computed(()=>["gs-button",`gs-${t.type}`,t.size,{"full-width":t.fullWidth,"is-loading":t.loading,"with-icon":t.icon,rounded:t.rounded}]),o=i.computed(()=>{switch(t.size){case"small":return 20;case"large":return 32;default:return 26}});return(a,d)=>i.withDirectives((i.openBlock(),i.createBlock(i.resolveDynamicComponent(n.value),{class:i.normalizeClass(s.value),disabled:t.disabled||t.loading,href:t.href,target:t.target,style:i.normalizeStyle({width:a.width+"px"}),type:"button"},{default:i.withCtx(()=>[t.icon&&!t.loading?(i.openBlock(),i.createBlock(i.unref(mt),{key:0,class:"icon"},{default:i.withCtx(()=>[i.createTextVNode(i.toDisplayString(t.icon),1)]),_:1})):i.createCommentVNode("",!0),a.$slots.default?(i.openBlock(),i.createElementBlock("span",kt,[i.renderSlot(a.$slots,"default",{},void 0,!0)])):i.createCommentVNode("",!0),t.loading?(i.openBlock(),i.createBlock(i.unref(ht),{key:2,class:"loader",size:o.value,indeterminate:"",color:"gray"},null,8,["size"])):i.createCommentVNode("",!0)]),_:3},8,["class","disabled","href","target","style"])),[[_t,r.value]])}}),[["__scopeId","data-v-40483b6f"]]),St={dark:!1,colors:{primary:"#3B755F",secondary:"#E57066",black:"#212121",green:"#3B755F",lightGreen:"#AFC6BD",red:"#E57066",error:"#E57066",white:"#F9F9F9",grey:"#BBBBBB",beige:"#F2EBDB"}},xt=Re.createVuetify({icons:{defaultSet:"mdi",aliases:it,sets:{mdi:ot}},theme:{defaultTheme:"greenspark",themes:{greenspark:St}}});function Et(e){e.use(xt)}const Tt={GsButton:Ne},Nt={install(e){Et(e);for(const[t,n]of Object.entries(Tt))e.component(t,n)}};h.GsButton=Ne,h.default=Nt,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
