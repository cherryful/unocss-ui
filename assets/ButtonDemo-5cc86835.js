import{r as x,d as z,k as e,a as c,y as t,C as a,A as s,t as r,b as o,c as m,i as y,F as U,l as _}from"./index-4ad6cd95.js";import{_ as V,P as w}from"./Playground-d4a03015.js";import{_ as u}from"./Sample.vue_vue_type_script_setup_true_lang-2886308f.js";const h={class:"flex gap-2"},k={class:"flex flex-wrap items-center gap-2"},C=o("div",{class:"w-16"}," type ",-1),L={class:"flex flex-wrap items-center gap-2"},N=o("div",{class:"w-16"}," size ",-1),$={class:"flex items-center gap-2"},j=o("div",{class:"w-16"}," content ",-1),D={class:"flex flex-wrap gap-4"},F={class:"flex flex-wrap gap-4"},I=o("div",{class:"flex items-center justify-center"},[o("span",{class:"i-mdi:lightning-bolt text-4"}),o("span",null," Lightning ")],-1),T={__name:"ButtonDemo",setup(P){const n=x({content:"button",type:"default",size:"md",disabled:!1,custom:""}),i={size:['<UButton size="sm">sm</UButton>','<UButton size="md">md</UButton>','<UButton size="lg">lg</UButton>'],type:["<UButton>default</UButton>",'<UButton type="primary">primary</UButton>','<UButton type="secondary">secondary</UButton>','<UButton type="accent">accent</UButton>','<UButton type="success">success</UButton>','<UButton type="info">info</UButton>','<UButton type="warning">warning</UButton>','<UButton type="error">error</UButton>'],disabled:["<UButton disabled> disabled </UButton>"],icon:[`<UButton>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UButton>`]},v=["default","primary","secondary","accent","success","info","warning","error"],B=["sm","md","lg"];return(R,d)=>{const g=_("UCheckbox"),f=_("URadio"),b=_("UInput");return c(),z(V,null,{default:e(()=>[t(w,null,{preview:e(()=>[t(a,{type:n.value.type,size:n.value.size,disabled:n.value.disabled,custom:n.value.custom},{default:e(()=>[s(r(n.value.content),1)]),_:1},8,["type","size","disabled","custom"])]),props:e(()=>[o("div",h,[t(g,{modelValue:n.value.disabled,"onUpdate:modelValue":d[0]||(d[0]=l=>n.value.disabled=l)},{default:e(()=>[s(" disabled ")]),_:1},8,["modelValue"])]),o("div",k,[C,(c(),m(U,null,y(v,l=>t(f,{key:l,modelValue:n.value.type,"onUpdate:modelValue":d[1]||(d[1]=p=>n.value.type=p),type:l,value:l},{default:e(()=>[s(r(l),1)]),_:2},1032,["modelValue","type","value"])),64))]),o("div",L,[N,(c(),m(U,null,y(B,l=>t(f,{key:l,modelValue:n.value.size,"onUpdate:modelValue":d[2]||(d[2]=p=>n.value.size=p),type:l,value:l},{default:e(()=>[s(r(l),1)]),_:2},1032,["modelValue","type","value"])),64))]),o("div",$,[j,t(b,{modelValue:n.value.content,"onUpdate:modelValue":d[3]||(d[3]=l=>n.value.content=l),placeholder:"content"},null,8,["modelValue"])])]),_:1}),t(u,{title:"size",snippets:i.size},{default:e(()=>[o("div",D,[t(a,{size:"sm"},{default:e(()=>[s(" sm ")]),_:1}),t(a,{size:"md"},{default:e(()=>[s(" md ")]),_:1}),t(a,{size:"lg"},{default:e(()=>[s(" lg ")]),_:1})])]),_:1},8,["snippets"]),t(u,{title:"type",snippets:i.type},{default:e(()=>[o("div",F,[t(a,null,{default:e(()=>[s("default")]),_:1}),t(a,{type:"primary"},{default:e(()=>[s(" primary ")]),_:1}),t(a,{type:"secondary"},{default:e(()=>[s(" secondary ")]),_:1}),t(a,{type:"accent"},{default:e(()=>[s(" accent ")]),_:1}),t(a,{type:"success"},{default:e(()=>[s(" success ")]),_:1}),t(a,{type:"info"},{default:e(()=>[s(" info ")]),_:1}),t(a,{type:"warning"},{default:e(()=>[s(" warning ")]),_:1}),t(a,{type:"error"},{default:e(()=>[s(" error ")]),_:1})])]),_:1},8,["snippets"]),t(u,{title:"disabled",snippets:i.disabled},{default:e(()=>[t(a,{disabled:""},{default:e(()=>[s(" disabled ")]),_:1})]),_:1},8,["snippets"]),t(u,{title:"icon",snippets:i.icon},{default:e(()=>[t(a,null,{default:e(()=>[I]),_:1})]),_:1},8,["snippets"])]),_:1})}}};export{T as default};