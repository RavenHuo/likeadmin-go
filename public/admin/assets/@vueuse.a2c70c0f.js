import{g as _e,f as ge,i as oe,j as ye,n as se,k as we,r as w,w as $,s as le,l as ie,m as Oe,u as he,e as C}from"./@vue.a137a740.js";var be=Object.defineProperty,Pe=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fe=(e,t)=>{for(var r in t||(t={}))Ee.call(t,r)&&Q(e,r,t[r]);if(W)for(var r of W(t))$e.call(t,r)&&Q(e,r,t[r]);return e},je=(e,t)=>Pe(e,Se(t));function $t(e,t){var r;const n=le();return ie(()=>{n.value=e()},je(Fe({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),Oe(n)}var q;const N=typeof window<"u",Ie=e=>typeof e<"u",Ft=e=>typeof e=="boolean",ue=e=>typeof e=="function",jt=e=>typeof e=="number",Te=e=>typeof e=="string",D=()=>{};N&&((q=window==null?void 0:window.navigator)==null?void 0:q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E(e){return typeof e=="function"?e():he(e)}function k(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const ce=e=>e();function Ce(e,t={}){let r,n,a=D;const o=s=>{clearTimeout(s),a(),a=D};return s=>{const u=E(e),f=E(t.maxWait);return r&&o(r),u<=0||f!==void 0&&f<=0?(n&&(o(n),n=null),Promise.resolve(s())):new Promise((d,_)=>{a=t.rejectOnCancel?_:d,f&&!n&&(n=setTimeout(()=>{r&&o(r),n=null,d(s())},f)),r=setTimeout(()=>{n&&o(n),n=null,d(s())},u)})}}function Ne(e,t=!0,r=!0,n=!1){let a=0,o,l=!0,s=D,u;const f=()=>{o&&(clearTimeout(o),o=void 0,s(),s=D)};return _=>{const p=E(e),i=Date.now()-a,c=()=>u=_();if(f(),p<=0)return a=Date.now(),c();if(i>p&&(r||!l))a=Date.now(),c();else if(t)return new Promise((v,y)=>{s=n?y:v,o=setTimeout(()=>{a=Date.now(),l=!0,v(c()),f()},p-i)});return!r&&!o&&(o=setTimeout(()=>l=!0,p)),l=!1,u}}function De(e=ce){const t=w(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function xe(e){return e}function x(e){return _e()?(ge(e),!0):!1}function Ae(e,t=200,r={}){return k(Ce(t,r),e)}function It(e,t=200,r={}){const n=w(e.value),a=Ae(()=>{n.value=e.value},t,r);return $(e,()=>a()),n}function Tt(e,t=200,r=!1,n=!0,a=!1){return k(Ne(t,r,n,a),e)}function Re(e){return typeof e=="function"?C(e):w(e)}function z(e,t=!0){oe()?ye(e):t?e():se(e)}function Me(e,t,r={}){const{immediate:n=!0}=r,a=w(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function s(){a.value=!1,l()}function u(...f){l(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...f)},E(t))}return n&&(a.value=!0,N&&u()),x(s),{isPending:a,start:u,stop:s}}function Ct(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=we(e),o=w(e);function l(s){if(arguments.length)return o.value=s,o.value;{const u=E(r);return o.value=o.value===u?E(n):u,o.value}}return a?l:[o,l]}var J=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ke=(e,t)=>{var r={};for(var n in e)Ve.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r};function ze(e,t,r={}){const n=r,{eventFilter:a=ce}=n,o=ke(n,["eventFilter"]);return $(e,k(a,t),o)}var We=Object.defineProperty,Qe=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Je=(e,t)=>{for(var r in t||(t={}))fe.call(t,r)&&H(e,r,t[r]);if(R)for(var r of R(t))de.call(t,r)&&H(e,r,t[r]);return e},He=(e,t)=>Qe(e,qe(t)),Be=(e,t)=>{var r={};for(var n in e)fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&de.call(e,n)&&(r[n]=e[n]);return r};function Ue(e,t,r={}){const n=r,{eventFilter:a}=n,o=Be(n,["eventFilter"]),{eventFilter:l,pause:s,resume:u,isActive:f}=De(a);return{stop:ze(e,t,He(Je({},o),{eventFilter:l})),pause:s,resume:u,isActive:f}}function I(e){var t;const r=E(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=N?window:void 0,pe=N?window.document:void 0,Ge=N?window.navigator:void 0;N&&window.location;function P(...e){let t,r,n,a;if(Te(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=S):[t,r,n,a]=e,!t)return D;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(d=>d()),o.length=0},s=(d,_,p)=>(d.addEventListener(_,p,a),()=>d.removeEventListener(_,p,a)),u=$(()=>I(t),d=>{l(),d&&o.push(...r.flatMap(_=>n.map(p=>s(d,_,p))))},{immediate:!0,flush:"post"}),f=()=>{u(),l()};return x(f),f}function Nt(e,t,r={}){const{window:n=S,ignore:a=[],capture:o=!0,detectIframe:l=!1}=r;if(!n)return;let s=!0,u;const f=i=>a.some(c=>{if(typeof c=="string")return Array.from(n.document.querySelectorAll(c)).some(v=>v===i.target||i.composedPath().includes(v));{const v=I(c);return v&&(i.target===v||i.composedPath().includes(v))}}),d=i=>{n.clearTimeout(u);const c=I(e);if(!(!c||c===i.target||i.composedPath().includes(c))){if(i.detail===0&&(s=!f(i)),!s){s=!0;return}t(i)}},_=[P(n,"click",d,{passive:!0,capture:o}),P(n,"pointerdown",i=>{const c=I(e);c&&(s=!i.composedPath().includes(c)&&!f(i))},{passive:!0}),P(n,"pointerup",i=>{if(i.button===0){const c=i.composedPath();i.composedPath=()=>c,u=n.setTimeout(()=>d(i),50)}},{passive:!0}),l&&P(n,"blur",i=>{var c;const v=I(e);((c=n.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(v!=null&&v.contains(n.document.activeElement))&&t(i)})].filter(Boolean);return()=>_.forEach(i=>i())}function M(e,t=!1){const r=w(),n=()=>r.value=Boolean(e());return n(),z(n,t),r}function Ke(e,t={}){const{window:r=S}=t,n=M(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=w(!1),l=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{!n.value||(l(),a=r.matchMedia(Re(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return ie(s),x(()=>l()),o}function Dt(e={}){const{navigator:t=Ge,read:r=!1,source:n,copiedDuring:a=1500,legacy:o=!1}=e,l=["copy","cut"],s=M(()=>t&&"clipboard"in t),u=C(()=>s.value||o),f=w(""),d=w(!1),_=Me(()=>d.value=!1,a);function p(){s.value?t.clipboard.readText().then(y=>{f.value=y}):f.value=v()}if(u.value&&r)for(const y of l)P(y,p);async function i(y=E(n)){u.value&&y!=null&&(s.value?await t.clipboard.writeText(y):c(y),f.value=y,d.value=!0,_.start())}function c(y){const g=document.createElement("textarea");g.value=y!=null?y:"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function v(){var y,g,O;return(O=(g=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:g.toString())!=null?O:""}return{isSupported:u,text:f,copied:d,copy:i}}function Xe(e){return JSON.parse(JSON.stringify(e))}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";V[L]=V[L]||{};const Ye=V[L];function ve(e,t){return Ye[e]||t}function Ze(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var et=Object.defineProperty,B=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,G=(e,t)=>{for(var r in t||(t={}))tt.call(t,r)&&U(e,r,t[r]);if(B)for(var r of B(t))rt.call(t,r)&&U(e,r,t[r]);return e};const nt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function at(e,t,r,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,mergeDefaults:f=!1,shallow:d,window:_=S,eventFilter:p,onError:i=m=>{console.error(m)}}=n,c=(d?le:w)(t);if(!r)try{r=ve("getDefaultStorage",()=>{var m;return(m=S)==null?void 0:m.localStorage})()}catch(m){i(m)}if(!r)return c;const v=E(t),y=Ze(v),g=(a=n.serializer)!=null?a:nt[y],{pause:O,resume:h}=Ue(c,()=>F(c.value),{flush:o,deep:l,eventFilter:p});return _&&s&&P(_,"storage",A),A(),c;function F(m){try{if(m==null)r.removeItem(e);else{const b=g.write(m),j=r.getItem(e);j!==b&&(r.setItem(e,b),_&&(_==null||_.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:j,newValue:b,storageArea:r}))))}}catch(b){i(b)}}function T(m){const b=m?m.newValue:r.getItem(e);if(b==null)return u&&v!==null&&r.setItem(e,g.write(v)),v;if(!m&&f){const j=g.read(b);return ue(f)?f(j,v):y==="object"&&!Array.isArray(j)?G(G({},v),j):j}else return typeof b!="string"?b:g.read(b)}function A(m){if(!(m&&m.storageArea!==r)){if(m&&m.key==null){c.value=v;return}if(!(m&&m.key!==e)){O();try{c.value=T(m)}catch(b){i(b)}finally{m?se(h):h()}}}}}function me(e){return Ke("(prefers-color-scheme: dark)",e)}var ot=Object.defineProperty,K=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,X=(e,t,r)=>t in e?ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,it=(e,t)=>{for(var r in t||(t={}))st.call(t,r)&&X(e,r,t[r]);if(K)for(var r of K(t))lt.call(t,r)&&X(e,r,t[r]);return e};function ut(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=S,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:u,emitAuto:f}=e,d=it({auto:"",light:"light",dark:"dark"},e.modes||{}),_=me({window:a}),p=C(()=>_.value?"dark":"light"),i=u||(l==null?w(n):at(l,n,o,{window:a,listenToStorageChanges:s})),c=C({get(){return i.value==="auto"&&!f?p.value:i.value},set(O){i.value=O}}),v=ve("updateHTMLAttrs",(O,h,F)=>{const T=a==null?void 0:a.document.querySelector(O);if(!!T)if(h==="class"){const A=F.split(/\s/g);Object.values(d).flatMap(m=>(m||"").split(/\s/g)).filter(Boolean).forEach(m=>{A.includes(m)?T.classList.add(m):T.classList.remove(m)})}else T.setAttribute(h,F)});function y(O){var h;const F=O==="auto"?p.value:O;v(t,r,(h=d[F])!=null?h:F)}function g(O){e.onChanged?e.onChanged(O,y):y(O)}return $(c,g,{flush:"post",immediate:!0}),f&&$(p,()=>g(c.value),{flush:"post"}),z(()=>g(c.value)),c}var ct=Object.defineProperty,ft=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,mt=(e,t)=>{for(var r in t||(t={}))pt.call(t,r)&&Z(e,r,t[r]);if(Y)for(var r of Y(t))vt.call(t,r)&&Z(e,r,t[r]);return e},_t=(e,t)=>ft(e,dt(t));function xt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=S}=e,a=ut(_t(mt({},e),{onChanged:(s,u)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,s==="dark"):u(s)},modes:{dark:t,light:r}})),o=me({window:n});return C({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}function At({document:e=pe}={}){if(!e)return w("visible");const t=w(e.visibilityState);return P(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var ee=Object.getOwnPropertySymbols,gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,wt=(e,t)=>{var r={};for(var n in e)gt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ee)for(var n of ee(e))t.indexOf(n)<0&&yt.call(e,n)&&(r[n]=e[n]);return r};function Rt(e,t,r={}){const n=r,{window:a=S}=n,o=wt(n,["window"]);let l;const s=M(()=>a&&"ResizeObserver"in a),u=()=>{l&&(l.disconnect(),l=void 0)},f=$(()=>I(e),_=>{u(),s.value&&a&&_&&(l=new ResizeObserver(t),l.observe(_,o))},{immediate:!0,flush:"post"}),d=()=>{u(),f()};return x(d),{isSupported:s,stop:d}}const te=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Mt(e,t={}){const{document:r=pe,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=w(!1);let l=te[0];const s=M(()=>{if(r){for(const v of te)if(v[1]in r)return l=v,!0}else return!1;return!1}),[u,f,d,,_]=l;async function p(){!s.value||(r!=null&&r[d]&&await r[f](),o.value=!1)}async function i(){if(!s.value)return;await p();const v=I(a);v&&(await v[u](),o.value=!0)}async function c(){o.value?await p():await i()}return r&&P(r,_,()=>{o.value=!!(r!=null&&r[d])},!1),n&&x(p),{isSupported:s,isFullscreen:o,enter:i,exit:p,toggle:c}}var re;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(re||(re={}));var Ot=Object.defineProperty,ne=Object.getOwnPropertySymbols,ht=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,ae=(e,t,r)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Pt=(e,t)=>{for(var r in t||(t={}))ht.call(t,r)&&ae(e,r,t[r]);if(ne)for(var r of ne(t))bt.call(t,r)&&ae(e,r,t[r]);return e};const St={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Pt({linear:xe},St);function Vt(e,t,r,n={}){var a,o,l;const{clone:s=!1,passive:u=!1,eventName:f,deep:d=!1,defaultValue:_}=n,p=oe(),i=r||(p==null?void 0:p.emit)||((a=p==null?void 0:p.$emit)==null?void 0:a.bind(p))||((l=(o=p==null?void 0:p.proxy)==null?void 0:o.$emit)==null?void 0:l.bind(p==null?void 0:p.proxy));let c=f;t||(t="modelValue"),c=f||c||`update:${t.toString()}`;const v=g=>s?ue(s)?s(g):Xe(g):g,y=()=>Ie(e[t])?v(e[t]):_;if(u){const g=y(),O=w(g);return $(()=>e[t],h=>O.value=v(h)),$(O,h=>{(h!==e[t]||d)&&i(c,h)},{deep:d}),O}else return C({get(){return y()},set(g){i(c,g)}})}function Lt({window:e=S}={}){if(!e)return w(!1);const t=w(e.document.hasFocus());return P(e,"blur",()=>{t.value=!1}),P(e,"focus",()=>{t.value=!0}),t}function kt(e={}){const{window:t=S,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,l=w(r),s=w(n),u=()=>{t&&(o?(l.value=t.innerWidth,s.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return u(),z(u),P("resize",u,{passive:!0}),a&&P("orientationchange",u,{passive:!0}),{width:l,height:s}}export{jt as a,Ft as b,P as c,I as d,Me as e,Tt as f,At as g,Lt as h,N as i,$t as j,Vt as k,Mt as l,xt as m,Ct as n,Nt as o,kt as p,Dt as q,It as r,x as t,Rt as u};