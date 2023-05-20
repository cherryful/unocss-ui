import{_ as A,P as v}from"./Playground-035b9713.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-4546a778.js";import{r as b,c as y,l as e,w as t,F as m,o as g,m as l,t as h,b as s,e as V,i as u}from"./index-5b65cb62.js";const $={class:"flex flex-wrap gap-2"},k={class:"flex flex-wrap items-center gap-2"},x=s("div",{class:"w-16"}," type ",-1),C={class:"flex items-center gap-2"},T=s("div",{class:"w-16"}," content ",-1),B={class:"space-y-3"},N={class:"space-y-3"},D={class:"space-y-3"},F={class:"space-y-3"},P={class:"space-y-3"},j={__name:"AlertDemo",setup(R){const c={type:[`<UAlert type="primary">
  I'm an alert with the type of primary
</UAlert>`,`<UAlert type="secondary">
  I'm an alert with the type of secondary
</UAlert>`,`<UAlert type="accent">
  I'm an alert with the type of accent
</UAlert>`,`<UAlert type="success">
  I'm an alert with the type of success
</UAlert>`,`<UAlert type="info">
  I'm an alert with the type of info
</UAlert>`,`<UAlert type="warning">
  I'm an alert with the type of warning
</UAlert>`,`<UAlert type="error">
  I'm an alert with the type of error
</UAlert>`],colorful:[`<UAlert type="primary" colorful>
  I'm an alert with the type of primary
</UAlert>`,`<UAlert type="secondary" colorful>
  I'm an alert with the type of secondary
</UAlert>`,`<UAlert type="accent" colorful>
  I'm an alert with the type of accent
</UAlert>`,`<UAlert type="success" colorful>
  I'm an alert with the type of success
</UAlert>`,`<UAlert type="info" colorful>
  I'm an alert with the type of info
</UAlert>`,`<UAlert type="warning" colorful>
  I'm an alert with the type of warning
</UAlert>`,`<UAlert type="error" colorful>
  I'm an alert with the type of error
</UAlert>`],icon:[`<UAlert icon="i-mdi:lightning-bolt">
  I'm an alert with the custom icon
</UAlert>`,`<UAlert no-icon>
  I'm an alert without the icon
</UAlert>`],bordered:[`<UAlert type="primary" bordered>
  I'm an alert with the type of primary
</UAlert>`,`<UAlert type="primary" colorful bordered>
  I'm an alert with the type of primary
</UAlert>`],closeable:['<UToast ref="toast" />',`<UAlert closeable @close="$refs.toast.success('you click the close!')">
  I'm an alert with the close icon and event
</UAlert>`,`<UAlert closeable @close="$refs.toast.success('you click the close!')">
  I'm an alert with the so lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang text.
</UAlert>`],custom:[]},a=b({content:"This is the content of the alert!",type:"primary",colorful:!1,bordered:!1,noIcon:!1,closeable:!1,customIcon:!1}),U=["primary","secondary","accent","success","info","warning","error"];return(d,n)=>{const o=u("UAlert"),i=u("UCheckbox"),w=u("URadio"),_=u("UInput"),I=u("UToast");return g(),y(m,null,[e(A,null,{default:t(()=>[e(v,null,{preview:t(()=>[e(o,{type:a.value.type,closeable:a.value.closeable,"no-icon":a.value.noIcon,bordered:a.value.bordered,colorful:a.value.colorful,icon:a.value.customIcon&&"i-mdi:lightning-bolt",onClose:n[0]||(n[0]=r=>d.$refs.toast.success("you click the close!"))},{default:t(()=>[l(h(a.value.content),1)]),_:1},8,["type","closeable","no-icon","bordered","colorful","icon"])]),props:t(()=>[s("div",$,[e(i,{modelValue:a.value.colorful,"onUpdate:modelValue":n[1]||(n[1]=r=>a.value.colorful=r)},{default:t(()=>[l(" colorful ")]),_:1},8,["modelValue"]),e(i,{modelValue:a.value.bordered,"onUpdate:modelValue":n[2]||(n[2]=r=>a.value.bordered=r)},{default:t(()=>[l(" bordered ")]),_:1},8,["modelValue"]),e(i,{modelValue:a.value.noIcon,"onUpdate:modelValue":n[3]||(n[3]=r=>a.value.noIcon=r)},{default:t(()=>[l(" no-icon ")]),_:1},8,["modelValue"]),e(i,{modelValue:a.value.closeable,"onUpdate:modelValue":n[4]||(n[4]=r=>a.value.closeable=r)},{default:t(()=>[l(" closeable ")]),_:1},8,["modelValue"]),e(i,{modelValue:a.value.customIcon,"onUpdate:modelValue":n[5]||(n[5]=r=>a.value.customIcon=r)},{default:t(()=>[l(" customIcon ")]),_:1},8,["modelValue"])]),s("div",k,[x,(g(),y(m,null,V(U,r=>e(w,{key:r,modelValue:a.value.type,"onUpdate:modelValue":[n[6]||(n[6]=f=>a.value.type=f),f=>a.value.type=r],type:r,value:r},{default:t(()=>[l(h(r),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),s("div",C,[T,e(_,{modelValue:a.value.content,"onUpdate:modelValue":n[7]||(n[7]=r=>a.value.content=r),placeholder:"content"},null,8,["modelValue"])])]),_:1}),e(p,{title:"type",snippets:c.type},{default:t(()=>[s("div",B,[e(o,{type:"primary"},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1}),e(o,{type:"secondary"},{default:t(()=>[l(" I'm an alert with the type of secondary ")]),_:1}),e(o,{type:"accent"},{default:t(()=>[l(" I'm an alert with the type of accent ")]),_:1}),e(o,{type:"success"},{default:t(()=>[l(" I'm an alert with the type of success ")]),_:1}),e(o,{type:"info"},{default:t(()=>[l(" I'm an alert with the type of info ")]),_:1}),e(o,{type:"warning"},{default:t(()=>[l(" I'm an alert with the type of warning ")]),_:1}),e(o,{type:"error"},{default:t(()=>[l(" I'm an alert with the type of error ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"colorful",snippets:c.colorful},{default:t(()=>[s("div",N,[e(o,{type:"primary",colorful:""},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1}),e(o,{type:"secondary",colorful:""},{default:t(()=>[l(" I'm an alert with the type of secondary ")]),_:1}),e(o,{type:"accent",colorful:""},{default:t(()=>[l(" I'm an alert with the type of accent ")]),_:1}),e(o,{type:"success",colorful:""},{default:t(()=>[l(" I'm an alert with the type of success ")]),_:1}),e(o,{type:"info",colorful:""},{default:t(()=>[l(" I'm an alert with the type of info ")]),_:1}),e(o,{type:"warning",colorful:""},{default:t(()=>[l(" I'm an alert with the type of warning ")]),_:1}),e(o,{type:"error",colorful:""},{default:t(()=>[l(" I'm an alert with the type of error ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"bordered",snippets:c.bordered},{default:t(()=>[s("div",D,[e(o,{type:"primary",bordered:""},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1}),e(o,{type:"primary",colorful:"",bordered:""},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"icon",snippets:c.icon},{default:t(()=>[s("div",F,[e(o,{icon:"i-mdi:lightning-bolt"},{default:t(()=>[l(" I'm an alert with the custom icon ")]),_:1}),e(o,{"no-icon":""},{default:t(()=>[l(" I'm an alert without the icon ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"closeable",snippets:c.closeable},{default:t(()=>[s("div",P,[e(o,{closeable:"",onClose:n[8]||(n[8]=r=>d.$refs.toast.success("you click the close!"))},{default:t(()=>[l(" I'm an alert with the close icon and event ")]),_:1}),e(o,{closeable:"",onClose:n[9]||(n[9]=r=>d.$refs.toast.success("you click the close!"))},{default:t(()=>[l(" I'm an alert with the so lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang text. ")]),_:1})])]),_:1},8,["snippets"])]),_:1}),e(I,{ref:"toast"},null,512)],64)}}};export{j as default};
