import{r as w,d as k,k as e,a as p,y as l,K as t,A as a,t as c,b as d,c as _,i as m,F as U,l as f}from"./index-f706390b.js";import{_ as h,P as C}from"./Playground-3e3641de.js";import{_ as i}from"./Sample.vue_vue_type_script_setup_true_lang-66402b51.js";const $={class:"flex gap-3"},B={class:"flex flex-wrap items-center gap-2"},L=d("div",{class:"w-16"}," type ",-1),N={class:"flex flex-wrap items-center gap-2"},j=d("div",{class:"w-16"}," size ",-1),D={class:"flex flex-wrap items-center gap-2"},F=d("div",{class:"w-16"}," rounded ",-1),I={class:"flex items-center gap-2"},P=d("div",{class:"w-16"}," content ",-1),R={class:"flex flex-wrap gap-4"},A={class:"flex gap-4"},E={class:"flex gap-4"},K=d("div",{class:"flex items-center justify-center"},[d("span",{class:"i-mdi:lightning-bolt text-4"}),d("span",null," Lightning ")],-1),J={__name:"TagDemo",setup(S){const u={size:['<UTag size="sm">sm</UTag>','<UTag size="md">md</UTag>','<UTag size="lg">lg</UTag>'],type:["<UTag>default</UTag>",'<UTag type="primary">primary</UTag>','<UTag type="secondary">secondary</UTag>','<UTag type="accent">accent</UTag>','<UTag type="success">success</UTag>','<UTag type="info">info</UTag>','<UTag type="warning">warning</UTag>','<UTag type="error">error</UTag>'],rounded:['<UTag rounded="sm">sm</UTag>','<UTag rounded="md">md</UTag>','<UTag rounded="lg">lg</UTag>','<UTag rounded="full">full</UTag>'],closeable:['<UTag closeable @close="onClose">closeable</UTag>'],border:["<UTag border>border</UTag>"],icon:[`<UTag>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UTag>`]},o=w({content:"tag",type:"default",size:"md",closeable:!1,border:!1,rounded:"md"}),v=["default","primary","secondary","accent","success","info","warning","error"],T=["sm","md","lg"],b=["sm","md","lg","full"];return(x,n)=>{const y=f("UCheckbox"),g=f("URadio"),V=f("UInput"),z=f("UToast");return p(),k(h,null,{default:e(()=>[l(C,null,{preview:e(()=>[l(t,{type:o.value.type,size:o.value.size,rounded:o.value.rounded,border:o.value.border,closeable:o.value.closeable},{default:e(()=>[a(c(o.value.content),1)]),_:1},8,["type","size","rounded","border","closeable"])]),props:e(()=>[d("div",$,[l(y,{modelValue:o.value.closeable,"onUpdate:modelValue":n[0]||(n[0]=s=>o.value.closeable=s)},{default:e(()=>[a(" closeable ")]),_:1},8,["modelValue"]),l(y,{modelValue:o.value.border,"onUpdate:modelValue":n[1]||(n[1]=s=>o.value.border=s)},{default:e(()=>[a(" border ")]),_:1},8,["modelValue"])]),d("div",B,[L,(p(),_(U,null,m(v,s=>l(g,{key:s,modelValue:o.value.type,"onUpdate:modelValue":n[2]||(n[2]=r=>o.value.type=r),type:s,value:s},{default:e(()=>[a(c(s),1)]),_:2},1032,["modelValue","type","value"])),64))]),d("div",N,[j,(p(),_(U,null,m(T,s=>l(g,{key:s,modelValue:o.value.size,"onUpdate:modelValue":n[3]||(n[3]=r=>o.value.size=r),type:s,value:s},{default:e(()=>[a(c(s),1)]),_:2},1032,["modelValue","type","value"])),64))]),d("div",D,[F,(p(),_(U,null,m(b,s=>l(g,{key:s,modelValue:o.value.rounded,"onUpdate:modelValue":n[4]||(n[4]=r=>o.value.rounded=r),type:s,value:s},{default:e(()=>[a(c(s),1)]),_:2},1032,["modelValue","type","value"])),64))]),d("div",I,[P,l(V,{modelValue:o.value.content,"onUpdate:modelValue":n[5]||(n[5]=s=>o.value.content=s),placeholder:"content"},null,8,["modelValue"])])]),_:1}),l(i,{title:"type",snippets:u.type},{default:e(()=>[d("div",R,[l(t,null,{default:e(()=>[a(" default ")]),_:1}),l(t,{type:"primary"},{default:e(()=>[a(" primary ")]),_:1}),l(t,{type:"secondary"},{default:e(()=>[a(" secondary ")]),_:1}),l(t,{type:"accent"},{default:e(()=>[a(" accent ")]),_:1}),l(t,{type:"success"},{default:e(()=>[a(" success ")]),_:1}),l(t,{type:"info"},{default:e(()=>[a(" info ")]),_:1}),l(t,{type:"warning"},{default:e(()=>[a(" warning ")]),_:1}),l(t,{type:"error"},{default:e(()=>[a(" error ")]),_:1})])]),_:1},8,["snippets"]),l(i,{title:"size",snippets:u.size},{default:e(()=>[d("div",A,[l(t,{size:"sm"},{default:e(()=>[a(" sm ")]),_:1}),l(t,{size:"md"},{default:e(()=>[a(" md ")]),_:1}),l(t,{size:"lg"},{default:e(()=>[a(" lg ")]),_:1})])]),_:1},8,["snippets"]),l(i,{title:"rounded",snippets:u.rounded},{default:e(()=>[d("div",E,[l(t,{rounded:"sm"},{default:e(()=>[a(" sm ")]),_:1}),l(t,{rounded:"md"},{default:e(()=>[a(" md ")]),_:1}),l(t,{rounded:"lg"},{default:e(()=>[a(" lg ")]),_:1}),l(t,{rounded:"full"},{default:e(()=>[a(" full ")]),_:1})])]),_:1},8,["snippets"]),l(i,{title:"closeable",snippets:u.closeable},{default:e(()=>[l(z,{ref:"toast"},null,512),l(t,{closeable:"",onClose:n[6]||(n[6]=s=>{var r;return(r=x.$refs.toast)==null?void 0:r.info("click close")})},{default:e(()=>[a(" closeable ")]),_:1})]),_:1},8,["snippets"]),l(i,{title:"border",snippets:u.border},{default:e(()=>[l(t,{border:""},{default:e(()=>[a(" border ")]),_:1})]),_:1},8,["snippets"]),l(i,{title:"icon",snippets:u.icon},{default:e(()=>[l(t,null,{default:e(()=>[K]),_:1})]),_:1},8,["snippets"])]),_:1})}}};export{J as default};
