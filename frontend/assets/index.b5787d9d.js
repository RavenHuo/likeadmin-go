import{Z as z,C as J,D as M,Q as X,R as Z,w as G,F as H,I as W,J as Y,K as ee,L as te}from"./element-plus.de1a1f40.js";import{f as $,b as oe}from"./index.fc436213.js";import{d as L,s as F,r as g,a1 as ae,j as le,n as h,an as ne,o as p,c as se,X as e,P as t,u as s,a9 as ie,U as i,a as ue,Q as E,O as c,V as re,T as K}from"./@vue.a137a740.js";import{_ as pe}from"./edit.vue_vue_type_script_setup_true_lang.0fb1b651.js";import{d as me,e as de}from"./department.56dd43eb.js";import"./@vueuse.a2c70c0f.js";import"./@element-plus.3660753f.js";import"./lodash-es.7718a1e4.js";import"./dayjs.bd523028.js";import"./axios.d8168cfd.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.48927ea5.js";import"./vue-router.9605b890.js";import"./pinia.706f3ea9.js";import"./css-color-function.b4c88e1a.js";import"./color.a9016252.js";import"./clone.73d1916b.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.0f0f7ca7.js";import"./vue-clipboard3.4e164ffd.js";import"./clipboard.7c3d630c.js";import"./echarts.098cf7d6.js";import"./zrender.0646a922.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";import"./index.eb574d2d.js";import"./useDictOptions.3732b548.js";const ce={class:"dept-lists"},_e=L({name:"department"}),We=L({..._e,setup(fe){const B=F(),_=F(),x=F();let k=!1;const C=g(!1),b=g([]),m=ae({isStop:"",name:""}),v=g(!1),d=async()=>{C.value=!0,b.value=await me(m),C.value=!1},N=()=>{var a;(a=x.value)==null||a.resetFields(),d()},D=async a=>{var o,n;v.value=!0,await h(),a&&((o=_.value)==null||o.setFormData({pid:a})),(n=_.value)==null||n.open("add")},P=async a=>{var o,n;v.value=!0,await h(),(o=_.value)==null||o.open("edit"),(n=_.value)==null||n.getDetail(a)},I=async a=>{await $.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await de({id:a}),$.msgSuccess("\u5220\u9664\u6210\u529F"),d()},S=()=>{k=!k,V(b.value,k)},V=(a,o=!0)=>{var n;for(const u in a)(n=B.value)==null||n.toggleRowExpansion(a[u],o),a[u].children&&V(a[u].children,o)};return le(async()=>{await d(),h(()=>{S()})}),(a,o)=>{const n=J,u=M,w=X,U=Z,r=G,A=H,R=W,O=oe,f=Y,Q=z,j=ee,y=ne("perms"),q=te;return p(),se("div",ce,[e(R,{class:"!border-none",shadow:"never"},{default:t(()=>[e(A,{ref_key:"formRef",ref:x,class:"mb-[-16px]",model:s(m),inline:!0},{default:t(()=>[e(u,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:t(()=>[e(n,{class:"w-[280px]",modelValue:s(m).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(m).name=l),clearable:"",onKeyup:ie(d,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(u,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop"},{default:t(()=>[e(U,{class:"w-[280px]",modelValue:s(m).isStop,"onUpdate:modelValue":o[1]||(o[1]=l=>s(m).isStop=l)},{default:t(()=>[e(w,{label:"\u5168\u90E8",value:""}),e(w,{label:"\u6B63\u5E38",value:"0"}),e(w,{label:"\u505C\u7528",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(r,{type:"primary",onClick:d},{default:t(()=>[i("\u67E5\u8BE2")]),_:1}),e(r,{onClick:N},{default:t(()=>[i("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(R,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[ue("div",null,[E((p(),c(r,{type:"primary",onClick:o[2]||(o[2]=l=>D())},{icon:t(()=>[e(O,{name:"el-icon-Plus"})]),default:t(()=>[i(" \u65B0\u589E ")]),_:1})),[[y,["system:dept:add"]]]),e(r,{onClick:S},{default:t(()=>[i(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1})]),E((p(),c(j,{ref_key:"tableRef",ref:B,class:"mt-4",size:"large",data:s(b),"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(f,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),e(f,{label:"\u90E8\u95E8\u72B6\u6001",prop:"isStop","min-width":"100"},{default:t(({row:l})=>[e(Q,{class:"ml-2",type:l.isStop?"danger":""},{default:t(()=>[i(re(l.isStop?"\u505C\u7528":"\u6B63\u5E38"),1)]),_:2},1032,["type"])]),_:1}),e(f,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(f,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(f,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:l})=>[E((p(),c(r,{type:"primary",link:"",onClick:T=>D(l.id)},{default:t(()=>[i(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[y,["system:dept:add"]]]),E((p(),c(r,{type:"primary",link:"",onClick:T=>P(l)},{default:t(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["system:dept:edit"]]]),l.pid!==0?E((p(),c(r,{key:0,type:"danger",link:"",onClick:T=>I(l.id)},{default:t(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["system:dept:del"]]]):K("",!0)]),_:1})]),_:1},8,["data"])),[[q,s(C)]])]),_:1}),s(v)?(p(),c(pe,{key:0,ref_key:"editRef",ref:_,onSuccess:d,onClose:o[3]||(o[3]=l=>v.value=!1)},null,512)):K("",!0)])}}});export{We as default};
