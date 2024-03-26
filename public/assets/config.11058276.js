import{_ as g}from"./index.f0008794.js";import{H as I,O as k,P as U,I as S,C as x,D as T,w as j,F as q}from"./element-plus.078d4249.js";import{_ as K}from"./picker.26c88e51.js";import{g as O,s as R}from"./wx_oa.02c6d3fa.js";import{f as N}from"./index.1eff73d9.js";import{q as J}from"./@vueuse.07613b64.js";import{d as f,a1 as L,an as C,o as i,c as P,X as u,P as l,a as e,u as t,Q as r,O as _,U as n}from"./@vue.a137a740.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.bd523028.js";import"./axios.d8168cfd.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.0b0483de.js";import"./index.7f4255c7.js";import"./usePaging.dfd0c037.js";import"./index.ee2b7eb3.js";import"./index.vue_vue_type_script_setup_true_lang.6e80abd6.js";import"./vue3-video-play.b1eef99b.js";import"./vuedraggable.0ab4ab66.js";import"./vue.e5a65d9e.js";import"./sortablejs.fd7ddf86.js";import"./lodash.48927ea5.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.b4c88e1a.js";import"./color.a9016252.js";import"./clone.73d1916b.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.0f0f7ca7.js";import"./vue-clipboard3.4e164ffd.js";import"./clipboard.7c3d630c.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";const z=e("div",{class:"font-medium mb-7"},"\u5FAE\u4FE1\u516C\u4F17\u53F7",-1),G={class:"w-80"},H={class:"w-80"},Q=e("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A\u5BBD400px*\u9AD8400px\u3002jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),X=e("div",{class:"font-medium mb-7"},"\u516C\u4F17\u53F7\u5F00\u53D1\u8005\u4FE1\u606F",-1),Z={class:"w-80"},M={class:"w-80"},W=e("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u5F00\u53D1\u8005ID\uFF0C\u8BBE\u7F6EAppID\u548CAppSecret ",-1),Y=e("div",{class:"font-medium mb-7"},"\u670D\u52A1\u5668\u914D\u7F6E",-1),$={class:"flex"},uu={class:"mr-4 w-80"},eu=e("div",{class:"form-tips"}," \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u57FA\u672C\u914D\u7F6E>\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u586B\u5199\u670D\u52A1\u5668\u5730\u5740\uFF08URL\uFF09 ",-1),ou={class:"w-80"},lu=e("div",{class:"form-tips"}," \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u57FA\u672C\u914D\u7F6E>\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u4EE4\u724CToken\u3002\u4E0D\u586B\u9ED8\u8BA4\u4E3A\u201Clikeshop\u201D ",-1),tu={class:"w-80"},su=e("div",{class:"form-tips"}," \u6D88\u606F\u52A0\u5BC6\u5BC6\u94A5\u753143\u4F4D\u5B57\u7B26\u7EC4\u6210\uFF0C\u5B57\u7B26\u8303\u56F4\u4E3AA-Z,a-z,0-9 ",-1),Fu=e("div",{class:"font-medium mb-7"},"\u529F\u80FD\u8BBE\u7F6E",-1),au={class:"flex"},du={class:"mr-4 w-80"},nu=e("div",{class:"form-tips"}," \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u8BBE\u7F6E>\u516C\u4F17\u53F7\u8BBE\u7F6E>\u529F\u80FD\u8BBE\u7F6E\uFF0C\u586B\u5199\u4E1A\u52A1\u57DF\u540D ",-1),iu={class:"flex"},mu={class:"mr-4 w-80"},pu=e("div",{class:"form-tips"}," \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u8BBE\u7F6E>\u516C\u4F17\u53F7\u8BBE\u7F6E>\u529F\u80FD\u8BBE\u7F6E\uFF0C\u586B\u5199JS\u63A5\u53E3\u5B89\u5168\u57DF\u540D ",-1),ru={class:"flex"},_u={class:"mr-4 w-80"},Bu=e("div",{class:"form-tips"}," \u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u8BBE\u7F6E>\u516C\u4F17\u53F7\u8BBE\u7F6E>\u529F\u80FD\u8BBE\u7F6E\uFF0C\u586B\u5199\u7F51\u9875\u6388\u6743\u57DF\u540D ",-1),Eu=f({name:"wxOaConfig"}),de=f({...Eu,setup(cu){const o=L({name:"",primaryId:" ",qrCode:"",appId:"",appSecret:"",url:"",token:"",encodingAesKey:"",encryptionType:1,businessDomain:"",jsDomain:"",webDomain:""});J();const c=async()=>{const D=await O();for(const s in o)o[s]=D[s]},A=async()=>{await R(o),c(),N.msgSuccess("\u64CD\u4F5C\u6210\u529F")};return c(),(D,s)=>{const v=I,m=S,d=x,a=T,b=K,p=j,E=k,V=U,w=q,y=g,B=C("copy"),h=C("perms");return i(),P("div",null,[u(m,{class:"!border-none",shadow:"never"},{default:l(()=>[u(v,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u516C\u4F17\u53F7\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u7533\u8BF7\u670D\u52A1\u53F7\u5E76\u5B8C\u6210\u8BA4\u8BC1",closable:!1,"show-icon":""})]),_:1}),u(w,{ref:"formRef",model:t(o),"label-width":"160px"},{default:l(()=>[u(m,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[z,u(a,{label:"\u516C\u4F17\u53F7\u540D\u79F0",prop:"name"},{default:l(()=>[e("div",G,[u(d,{modelValue:t(o).name,"onUpdate:modelValue":s[0]||(s[0]=F=>t(o).name=F),placeholder:"\u8BF7\u8F93\u5165\u516C\u4F17\u53F7\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u(a,{label:"\u539F\u59CBID",prop:"primaryId"},{default:l(()=>[e("div",H,[u(d,{modelValue:t(o).primaryId,"onUpdate:modelValue":s[1]||(s[1]=F=>t(o).primaryId=F),placeholder:"\u8BF7\u8F93\u5165\u539F\u59CBID"},null,8,["modelValue"])])]),_:1}),u(a,{label:"\u516C\u4F17\u53F7\u4E8C\u7EF4\u7801",prop:"qrCode"},{default:l(()=>[e("div",null,[e("div",null,[u(b,{modelValue:t(o).qrCode,"onUpdate:modelValue":s[2]||(s[2]=F=>t(o).qrCode=F),limit:1},null,8,["modelValue"])]),Q])]),_:1})]),_:1}),u(m,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[X,u(a,{label:"AppID",prop:"appId"},{default:l(()=>[e("div",Z,[u(d,{modelValue:t(o).appId,"onUpdate:modelValue":s[3]||(s[3]=F=>t(o).appId=F),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),u(a,{label:"AppSecret",prop:"appSecret"},{default:l(()=>[e("div",null,[e("div",M,[u(d,{modelValue:t(o).appSecret,"onUpdate:modelValue":s[4]||(s[4]=F=>t(o).appSecret=F),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])])]),_:1}),u(a,null,{default:l(()=>[W]),_:1})]),_:1}),u(m,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[Y,u(a,{label:"URL"},{default:l(()=>[e("div",null,[e("div",$,[e("div",uu,[u(d,{modelValue:t(o).url,"onUpdate:modelValue":s[5]||(s[5]=F=>t(o).url=F),disabled:""},null,8,["modelValue"])]),r((i(),_(p,null,{default:l(()=>[n("\u590D\u5236")]),_:1})),[[B,t(o).url]])]),eu])]),_:1}),u(a,{label:"Token",prop:"Token"},{default:l(()=>[e("div",null,[e("div",ou,[u(d,{modelValue:t(o).token,"onUpdate:modelValue":s[6]||(s[6]=F=>t(o).token=F),placeholder:"\u8BF7\u8F93\u5165Token"},null,8,["modelValue"])]),lu])]),_:1}),u(a,{label:"EncodingAESKey",prop:"EncodingAESKey"},{default:l(()=>[e("div",null,[e("div",tu,[u(d,{modelValue:t(o).encodingAesKey,"onUpdate:modelValue":s[7]||(s[7]=F=>t(o).encodingAesKey=F),placeholder:"\u8BF7\u8F93\u5165EncodingAESKey"},null,8,["modelValue"])]),su])]),_:1}),u(a,{label:"\u6D88\u606F\u52A0\u5BC6\u65B9\u5F0F",required:"",prop:"status"},{default:l(()=>[e("div",null,[u(V,{class:"flex-col !items-start",modelValue:t(o).encryptionType,"onUpdate:modelValue":s[8]||(s[8]=F=>t(o).encryptionType=F)},{default:l(()=>[u(E,{label:1},{default:l(()=>[n(" \u660E\u6587\u6A21\u5F0F (\u4E0D\u4F7F\u7528\u6D88\u606F\u4F53\u52A0\u89E3\u5BC6\u529F\u80FD\uFF0C\u5B89\u5168\u7CFB\u6570\u8F83\u4F4E) ")]),_:1}),u(E,{label:2},{default:l(()=>[n(" \u517C\u5BB9\u6A21\u5F0F (\u660E\u6587\u3001\u5BC6\u6587\u5C06\u5171\u5B58\uFF0C\u65B9\u4FBF\u5F00\u53D1\u8005\u8C03\u8BD5\u548C\u7EF4\u62A4) ")]),_:1}),u(E,{label:3},{default:l(()=>[n(" \u5B89\u5168\u6A21\u5F0F\uFF08\u63A8\u8350\uFF09 (\u6D88\u606F\u5305\u4E3A\u7EAF\u5BC6\u6587\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u52A0\u5BC6\u548C\u89E3\u5BC6\uFF0C\u5B89\u5168\u7CFB\u6570\u9AD8) ")]),_:1})]),_:1},8,["modelValue"])])]),_:1})]),_:1}),u(m,{class:"!border-none mt-4",shadow:"never"},{default:l(()=>[Fu,u(a,{label:"\u4E1A\u52A1\u57DF\u540D"},{default:l(()=>[e("div",null,[e("div",au,[e("div",du,[u(d,{modelValue:t(o).businessDomain,"onUpdate:modelValue":s[9]||(s[9]=F=>t(o).businessDomain=F),disabled:""},null,8,["modelValue"])]),r((i(),_(p,null,{default:l(()=>[n("\u590D\u5236")]),_:1})),[[B,t(o).businessDomain]])]),nu])]),_:1}),u(a,{label:"JS\u63A5\u53E3\u5B89\u5168\u57DF\u540D"},{default:l(()=>[e("div",null,[e("div",iu,[e("div",mu,[u(d,{modelValue:t(o).jsDomain,"onUpdate:modelValue":s[10]||(s[10]=F=>t(o).jsDomain=F),disabled:""},null,8,["modelValue"])]),r((i(),_(p,null,{default:l(()=>[n("\u590D\u5236")]),_:1})),[[B,t(o).jsDomain]])]),pu])]),_:1}),u(a,{label:"\u7F51\u9875\u6388\u6743\u57DF\u540D"},{default:l(()=>[e("div",null,[e("div",ru,[e("div",_u,[u(d,{modelValue:t(o).webDomain,"onUpdate:modelValue":s[11]||(s[11]=F=>t(o).webDomain=F),disabled:""},null,8,["modelValue"])]),r((i(),_(p,null,{default:l(()=>[n("\u590D\u5236")]),_:1})),[[B,t(o).webDomain]])]),Bu])]),_:1})]),_:1})]),_:1},8,["model"]),r((i(),_(y,null,{default:l(()=>[u(p,{type:"primary",onClick:A},{default:l(()=>[n("\u4FDD\u5B58")]),_:1})]),_:1})),[[h,["channel:h5:save"]]])])}}});export{de as default};
