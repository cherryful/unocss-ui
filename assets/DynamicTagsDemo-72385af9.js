import{d as _,r,B as g,c as V,m as v,b as l,l as n,w as i,F as f,x,h as C,o as T,k as y,C as B,D as U,E as w}from"./index-dd9b691d.js";const h={class:"flex items-center gap-4"},b=l("span",null," Basic Usage ",-1),D={class:"flex items-center gap-4"},k=l("span",null," Max 3 ",-1),N={class:"flex items-center gap-4"},A=l("span",null," Custom Render ",-1),I={class:"flex items-center gap-4"},K=l("span",null," Not Closeable ",-1),R={class:"flex items-center gap-4"},E=l("span",null," Custom Trigger ",-1),F=l("button",{class:"h-4 w-4 flex items-center rounded-full bg-red-500"},null,-1),M={class:"flex items-center gap-4"},j=l("span",null," Custom Input ",-1),q=["onKeyup","onBlur"],H=_({__name:"DynamicTagsDemo",setup(z){const s=r(["AAAA","BBBB","CCCC"]);function p(o,e){return x("div",{type:e%2===0?"primary":"success",closeable:!0,onClose:()=>s.value.splice(e,1)},{default:()=>o})}const u=r(""),m=r(null);return g(m,o=>{w(()=>o==null?void 0:o.focus())}),(o,e)=>{const a=C("UDynamicTags");return T(),V(f,null,[v(" UDynamicTags Demo: "),l("div",h,[b,n(a,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t)},null,8,["modelValue"])]),l("div",D,[k,n(a,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t),max:3},null,8,["modelValue"])]),l("div",N,[A,n(a,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=t=>s.value=t),"render-tag":p},null,8,["modelValue"])]),l("div",I,[K,n(a,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value=t),closeable:!1},null,8,["modelValue"])]),l("div",R,[E,n(a,{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value=t)},{trigger:i(()=>[F]),_:1},8,["modelValue"])]),l("div",M,[j,n(a,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=t=>s.value=t)},{input:i(({submit:t,deactive:c})=>[y(l("input",{ref_key:"newTagInputRef",ref:m,"onUpdate:modelValue":e[5]||(e[5]=d=>u.value=d),class:"h-7 w-20 border border-gray-300 rounded px-2 text-sm",onKeyup:U(d=>{t(d),u.value=""},["enter"]),onBlur:c},null,40,q),[[B,u.value]])]),_:1},8,["modelValue"])])],64)}}});export{H as default};