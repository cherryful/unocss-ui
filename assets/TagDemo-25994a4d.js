import{r as w,i as V,w as t,o as r,l as e,H as n,m as p,t as C,b as a,c as u,e as g,F as _,h,s as m,u as f,y}from"./index-75278803.js";import{_ as B}from"./PageWrap.vue_vue_type_script_setup_true_lang-097a3ba3.js";import{P as D,_ as c,r as U}from"./helper-5983850c.js";const L={class:"flex gap-3"},N={class:"flex items-center gap-2 flex-wrap"},$=a("div",{class:"w-16"}," type ",-1),j={class:"flex items-center gap-2 flex-wrap"},F=a("div",{class:"w-16"}," size ",-1),I={class:"flex items-center gap-2 flex-wrap"},P=a("div",{class:"w-16"}," rounded ",-1),E={class:"flex items-center gap-2"},H=a("div",{class:"w-16"}," content ",-1),R={class:"space-y-3 sm:space-x-4"},S={class:"space-y-3 sm:space-x-4"},q={class:"space-y-3 sm:space-x-4"},A={class:"space-y-3 sm:space-x-4"},G={class:"space-y-3 sm:space-x-4"},J={class:"space-y-3 sm:space-x-4"},K=a("div",{class:"flex items-center justify-center"},[a("span",{class:"i-mdi:lightning-bolt text-4"}),a("span",null," Lightning ")],-1),M={class:"space-y-3 sm:space-x-4"},Z={__name:"TagDemo",setup(O){function k(){alert("close")}const d={size:['<UTag size="sm">sm</UTag>','<UTag size="base">base</UTag>','<UTag size="lg">lg</UTag>'],type:["<UTag>default</UTag>",'<UTag type="primary">primary</UTag>','<UTag type="secondary">secondary</UTag>','<UTag type="accent">accent</UTag>','<UTag type="success">success</UTag>','<UTag type="info">info</UTag>','<UTag type="warning">warning</UTag>','<UTag type="error">error</UTag>'],rounded:['<UTag rounded="sm">sm</UTag>','<UTag rounded="base">base</UTag>','<UTag rounded="lg">lg</UTag>','<UTag rounded="full">full</UTag>'],closeable:['<UTag closeable @close="onClose">closeable</UTag>'],border:["<UTag border>border</UTag>"],icon:[`<UTag>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UTag>`],custom:[`<UTag custom="bg-pink-200 text-pink-600 px-4 py-2 border-2 border-pink-600 rounded-xl">
  custom
</UTag>`]},l=w({content:"tag",type:"default",size:"md",closeable:!1,border:!1,rounded:"md"}),b=["default","primary","secondary","accent","success","info","warning","error"],T=["sm","md","lg"],v=["sm","md","lg","full"];return(Q,i)=>{const x=h("UCheckbox"),z=h("UInput");return r(),V(B,{title:"Tag Demo"},{default:t(()=>[e(D,null,{preview:t(()=>[e(n,{type:l.value.type,size:l.value.size,rounded:l.value.rounded,border:l.value.border,closeable:l.value.closeable},{default:t(()=>[p(C(l.value.content),1)]),_:1},8,["type","size","rounded","border","closeable"])]),props:t(()=>[a("div",L,[e(x,{modelValue:l.value.closeable,"onUpdate:modelValue":i[0]||(i[0]=s=>l.value.closeable=s)},{default:t(()=>[p(" closeable ")]),_:1},8,["modelValue"]),e(x,{modelValue:l.value.border,"onUpdate:modelValue":i[1]||(i[1]=s=>l.value.border=s)},{default:t(()=>[p(" border ")]),_:1},8,["modelValue"])]),a("div",N,[$,(r(),u(_,null,g(b,(s,o)=>e(m(f(U)(l.value,"type",s)),{key:o})),64))]),a("div",j,[F,(r(),u(_,null,g(T,(s,o)=>e(m(f(U)(l.value,"size",s)),{key:o})),64))]),a("div",I,[P,(r(),u(_,null,g(v,(s,o)=>e(m(f(U)(l.value,"rounded",s)),{key:o})),64))]),a("div",E,[H,e(z,{modelValue:l.value.content,"onUpdate:modelValue":i[2]||(i[2]=s=>l.value.content=s),placeholder:"content"},null,8,["modelValue"])])]),_:1}),e(c,{title:"type",snippets:d.type},{default:t(()=>[a("div",R,[(r(),u(_,null,g(b,(s,o)=>e(m(y(n,{type:s},{default:()=>s})),{key:o})),64))])]),_:1},8,["snippets"]),e(c,{title:"size",snippets:d.size},{default:t(()=>[a("div",S,[(r(),u(_,null,g(T,(s,o)=>e(m(y(n,{size:s},{default:()=>s})),{key:o})),64))])]),_:1},8,["snippets"]),e(c,{title:"rounded",snippets:d.rounded},{default:t(()=>[a("div",q,[(r(),u(_,null,g(v,(s,o)=>e(m(y(n,{rounded:s},{default:()=>s})),{key:o})),64))])]),_:1},8,["snippets"]),e(c,{title:"closeable",snippets:d.closeable},{default:t(()=>[a("div",A,[e(n,{closeable:"",onClose:k},{default:t(()=>[p(" closeable ")]),_:1})])]),_:1},8,["snippets"]),e(c,{title:"border",snippets:d.border},{default:t(()=>[a("div",G,[e(n,{border:""},{default:t(()=>[p(" border ")]),_:1})])]),_:1},8,["snippets"]),e(c,{title:"icon",snippets:d.icon},{default:t(()=>[a("div",J,[e(n,null,{default:t(()=>[K]),_:1})])]),_:1},8,["snippets"]),e(c,{title:"custom",snippets:d.custom},{default:t(()=>[a("div",M,[e(n,{custom:"bg-pink-200 text-pink-600 px-4 py-2 border-2 border-pink-600 rounded-xl"},{default:t(()=>[p(" custom ")]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{Z as default};
