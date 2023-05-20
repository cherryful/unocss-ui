import{r as x,f as z,w as e,o as c,l as t,y as l,m as s,t as r,b as o,c as m,e as y,F as U,i as _}from"./index-5b65cb62.js";import{_ as V,P as w}from"./Playground-035b9713.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-4546a778.js";const h={class:"flex gap-2"},k={class:"flex flex-wrap items-center gap-2"},$=o("div",{class:"w-16"}," type ",-1),C={class:"flex flex-wrap items-center gap-2"},L=o("div",{class:"w-16"}," size ",-1),N={class:"flex items-center gap-2"},j=o("div",{class:"w-16"}," content ",-1),D={class:"flex flex-wrap gap-4"},F={class:"flex flex-wrap gap-4"},I=o("div",{class:"flex items-center justify-center"},[o("span",{class:"i-mdi:lightning-bolt text-4"}),o("span",null," Lightning ")],-1),q={__name:"ButtonDemo",setup(P){const i={size:['<UButton size="sm">sm</UButton>','<UButton size="md">md</UButton>','<UButton size="lg">lg</UButton>'],type:["<UButton>default</UButton>",'<UButton type="primary">primary</UButton>','<UButton type="secondary">secondary</UButton>','<UButton type="accent">accent</UButton>','<UButton type="success">success</UButton>','<UButton type="info">info</UButton>','<UButton type="warning">warning</UButton>','<UButton type="error">error</UButton>'],disabled:["<UButton disabled> disabled </UButton>"],icon:[`<UButton>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UButton>`]},a=x({content:"button",type:"default",size:"md",disabled:!1,custom:""}),v=["default","primary","secondary","accent","success","info","warning","error"],B=["sm","md","lg"];return(R,d)=>{const g=_("UCheckbox"),f=_("URadio"),b=_("UInput");return c(),z(V,null,{default:e(()=>[t(w,null,{preview:e(()=>[t(l,{type:a.value.type,size:a.value.size,disabled:a.value.disabled,custom:a.value.custom},{default:e(()=>[s(r(a.value.content),1)]),_:1},8,["type","size","disabled","custom"])]),props:e(()=>[o("div",h,[t(g,{modelValue:a.value.disabled,"onUpdate:modelValue":d[0]||(d[0]=n=>a.value.disabled=n)},{default:e(()=>[s(" disabled ")]),_:1},8,["modelValue"])]),o("div",k,[$,(c(),m(U,null,y(v,n=>t(f,{key:n,modelValue:a.value.type,"onUpdate:modelValue":[d[1]||(d[1]=u=>a.value.type=u),u=>a.value.type=n],type:n,value:n},{default:e(()=>[s(r(n),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),o("div",C,[L,(c(),m(U,null,y(B,n=>t(f,{key:n,modelValue:a.value.size,"onUpdate:modelValue":[d[2]||(d[2]=u=>a.value.size=u),u=>a.value.size=n],type:n,value:n},{default:e(()=>[s(r(n),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),o("div",N,[j,t(b,{modelValue:a.value.content,"onUpdate:modelValue":d[3]||(d[3]=n=>a.value.content=n),placeholder:"content"},null,8,["modelValue"])])]),_:1}),t(p,{title:"size",snippets:i.size},{default:e(()=>[o("div",D,[t(l,{size:"sm"},{default:e(()=>[s(" sm ")]),_:1}),t(l,{size:"md"},{default:e(()=>[s(" md ")]),_:1}),t(l,{size:"lg"},{default:e(()=>[s(" lg ")]),_:1})])]),_:1},8,["snippets"]),t(p,{title:"type",snippets:i.type},{default:e(()=>[o("div",F,[t(l,null,{default:e(()=>[s("default")]),_:1}),t(l,{type:"primary"},{default:e(()=>[s(" primary ")]),_:1}),t(l,{type:"secondary"},{default:e(()=>[s(" secondary ")]),_:1}),t(l,{type:"accent"},{default:e(()=>[s(" accent ")]),_:1}),t(l,{type:"success"},{default:e(()=>[s(" success ")]),_:1}),t(l,{type:"info"},{default:e(()=>[s(" info ")]),_:1}),t(l,{type:"warning"},{default:e(()=>[s(" warning ")]),_:1}),t(l,{type:"error"},{default:e(()=>[s(" error ")]),_:1})])]),_:1},8,["snippets"]),t(p,{title:"disabled",snippets:i.disabled},{default:e(()=>[t(l,{disabled:""},{default:e(()=>[s(" disabled ")]),_:1})]),_:1},8,["snippets"]),t(p,{title:"icon",snippets:i.icon},{default:e(()=>[t(l,null,{default:e(()=>[I]),_:1})]),_:1},8,["snippets"])]),_:1})}}};export{q as default};
