import{r as z,f as w,w as n,o,l as t,z as l,m,t as k,b as s,c as u,e as d,s as c,u as v,F as p,y as B,h as b}from"./index-cee64ba4.js";import{_ as V,P as C,r as x}from"./helper-d50f91ad.js";import{_ as r}from"./Sample.vue_vue_type_script_setup_true_lang-2c870790.js";const D={class:"flex gap-2"},L={class:"flex flex-wrap items-center gap-2"},N=s("div",{class:"w-16"}," type ",-1),$={class:"flex flex-wrap items-center gap-2"},j=s("div",{class:"w-16"}," size ",-1),F={class:"flex items-center gap-2"},I=s("div",{class:"w-16"}," content ",-1),P={class:"space-x-4 space-y-3"},E={class:"space-x-4 space-y-3"},R={class:"space-x-4 space-y-3"},S={class:"space-x-4 space-y-3"},T={class:"space-x-4 space-y-3"},q=s("div",{class:"flex items-center justify-center"},[s("span",{class:"i-mdi:lightning-bolt text-4"}),s("span",null," Lightning ")],-1),M={__name:"ButtonDemo",setup(A){const i={size:['<UButton size="sm">button</UButton>','<UButton size="base">button</UButton>','<UButton size="lg">button</UButton>'],type:["<UButton>default</UButton>",'<UButton type="primary">primary</UButton>','<UButton type="secondary">secondary</UButton>','<UButton type="accent">accent</UButton>','<UButton type="success">success</UButton>','<UButton type="info">info</UButton>','<UButton type="warning">warning</UButton>','<UButton type="error">error</UButton>'],disabled:["<UButton disabled> disabled </UButton>"],icon:[`<UButton>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UButton>`]},a=z({content:"button",type:"default",size:"base",disabled:!1,custom:""}),y=["default","primary","secondary","accent","success","info","warning","error"],U=["sm","base","lg"];return(G,_)=>{const g=b("UCheckbox"),h=b("UInput");return o(),w(V,{title:"Button Demo"},{default:n(()=>[t(C,null,{preview:n(()=>[t(l,{type:a.value.type,size:a.value.size,disabled:a.value.disabled,custom:a.value.custom},{default:n(()=>[m(k(a.value.content),1)]),_:1},8,["type","size","disabled","custom"])]),props:n(()=>[s("div",D,[t(g,{modelValue:a.value.disabled,"onUpdate:modelValue":_[0]||(_[0]=e=>a.value.disabled=e)},{default:n(()=>[m(" disabled ")]),_:1},8,["modelValue"])]),s("div",L,[N,(o(),u(p,null,d(y,e=>t(c(v(x)(a.value,"type",e)),{key:e})),64))]),s("div",$,[j,(o(),u(p,null,d(U,e=>t(c(v(x)(a.value,"size",e)),{key:e})),64))]),s("div",F,[I,t(h,{modelValue:a.value.content,"onUpdate:modelValue":_[1]||(_[1]=e=>a.value.content=e),placeholder:"content"},null,8,["modelValue"])])]),_:1}),t(r,{title:"size",snippets:i.size},{default:n(()=>[s("div",P,[(o(),u(p,null,d(U,e=>t(c(B(l,{size:e},{default:()=>e})),{key:e})),64))])]),_:1},8,["snippets"]),t(r,{title:"type",snippets:i.type},{default:n(()=>[s("div",E,[(o(),u(p,null,d(y,(e,f)=>t(c(B(l,{type:e},{default:()=>e})),{key:f})),64))])]),_:1},8,["snippets"]),t(r,{title:"rounded",snippets:i.type},{default:n(()=>[s("div",R,[(o(),u(p,null,d(y,(e,f)=>t(c(B(l,{type:e},{default:()=>e})),{key:f})),64))])]),_:1},8,["snippets"]),t(r,{title:"disabled",snippets:i.disabled},{default:n(()=>[s("div",S,[t(l,{disabled:""},{default:n(()=>[m(" disabled ")]),_:1})])]),_:1},8,["snippets"]),t(r,{title:"icon",snippets:i.icon},{default:n(()=>[s("div",T,[t(l,null,{default:n(()=>[q]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{M as default};
