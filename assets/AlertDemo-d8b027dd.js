import{r as U,c as f,l as e,w as t,F as y,o as m,x as a,m as l,t as I,b as s,e as A,s as v,u as b,h as d}from"./index-cee64ba4.js";import{_ as V,P as x,r as $}from"./helper-d50f91ad.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-2c870790.js";const k={class:"flex flex-wrap gap-2"},C={class:"flex flex-wrap items-center gap-2"},T=s("div",{class:"w-16"}," type ",-1),D={class:"flex items-center gap-2"},B=s("div",{class:"w-16"}," content ",-1),N={class:"space-y-3"},F={class:"space-y-3"},P={class:"space-y-3"},E={class:"space-y-3"},L={class:"space-y-3"},z={__name:"AlertDemo",setup(R){const c={type:[`<UAlert type="primary">
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
</UAlert>`],custom:[]},o=U({content:"This is the content of the alert!",type:"primary",colorful:!1,bordered:!1,noIcon:!1,closeable:!1,customIcon:!1}),h=["primary","secondary","accent","success","info","warning","error"];return(u,n)=>{const i=d("UCheckbox"),g=d("UInput"),w=d("UToast");return m(),f(y,null,[e(V,{title:"Alert Demo"},{default:t(()=>[e(x,null,{preview:t(()=>[e(a,{type:o.value.type,closeable:o.value.closeable,"no-icon":o.value.noIcon,bordered:o.value.bordered,colorful:o.value.colorful,icon:o.value.customIcon&&"i-mdi:lightning-bolt",onClose:n[0]||(n[0]=r=>u.$refs.toast.success("you click the close!"))},{default:t(()=>[l(I(o.value.content),1)]),_:1},8,["type","closeable","no-icon","bordered","colorful","icon"])]),props:t(()=>[s("div",k,[e(i,{modelValue:o.value.colorful,"onUpdate:modelValue":n[1]||(n[1]=r=>o.value.colorful=r)},{default:t(()=>[l(" colorful ")]),_:1},8,["modelValue"]),e(i,{modelValue:o.value.bordered,"onUpdate:modelValue":n[2]||(n[2]=r=>o.value.bordered=r)},{default:t(()=>[l(" bordered ")]),_:1},8,["modelValue"]),e(i,{modelValue:o.value.noIcon,"onUpdate:modelValue":n[3]||(n[3]=r=>o.value.noIcon=r)},{default:t(()=>[l(" no-icon ")]),_:1},8,["modelValue"]),e(i,{modelValue:o.value.closeable,"onUpdate:modelValue":n[4]||(n[4]=r=>o.value.closeable=r)},{default:t(()=>[l(" closeable ")]),_:1},8,["modelValue"]),e(i,{modelValue:o.value.customIcon,"onUpdate:modelValue":n[5]||(n[5]=r=>o.value.customIcon=r)},{default:t(()=>[l(" customIcon ")]),_:1},8,["modelValue"])]),s("div",C,[T,(m(),f(y,null,A(h,(r,_)=>e(v(b($)(o.value,"type",r)),{key:_})),64))]),s("div",D,[B,e(g,{modelValue:o.value.content,"onUpdate:modelValue":n[6]||(n[6]=r=>o.value.content=r),placeholder:"content"},null,8,["modelValue"])])]),_:1}),e(p,{title:"type",snippets:c.type},{default:t(()=>[s("div",N,[e(a,{type:"primary"},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1}),e(a,{type:"secondary"},{default:t(()=>[l(" I'm an alert with the type of secondary ")]),_:1}),e(a,{type:"accent"},{default:t(()=>[l(" I'm an alert with the type of accent ")]),_:1}),e(a,{type:"success"},{default:t(()=>[l(" I'm an alert with the type of success ")]),_:1}),e(a,{type:"info"},{default:t(()=>[l(" I'm an alert with the type of info ")]),_:1}),e(a,{type:"warning"},{default:t(()=>[l(" I'm an alert with the type of warning ")]),_:1}),e(a,{type:"error"},{default:t(()=>[l(" I'm an alert with the type of error ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"colorful",snippets:c.colorful},{default:t(()=>[s("div",F,[e(a,{type:"primary",colorful:""},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1}),e(a,{type:"secondary",colorful:""},{default:t(()=>[l(" I'm an alert with the type of secondary ")]),_:1}),e(a,{type:"accent",colorful:""},{default:t(()=>[l(" I'm an alert with the type of accent ")]),_:1}),e(a,{type:"success",colorful:""},{default:t(()=>[l(" I'm an alert with the type of success ")]),_:1}),e(a,{type:"info",colorful:""},{default:t(()=>[l(" I'm an alert with the type of info ")]),_:1}),e(a,{type:"warning",colorful:""},{default:t(()=>[l(" I'm an alert with the type of warning ")]),_:1}),e(a,{type:"error",colorful:""},{default:t(()=>[l(" I'm an alert with the type of error ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"bordered",snippets:c.bordered},{default:t(()=>[s("div",P,[e(a,{type:"primary",bordered:""},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1}),e(a,{type:"primary",colorful:"",bordered:""},{default:t(()=>[l(" I'm an alert with the type of primary ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"icon",snippets:c.icon},{default:t(()=>[s("div",E,[e(a,{icon:"i-mdi:lightning-bolt"},{default:t(()=>[l(" I'm an alert with the custom icon ")]),_:1}),e(a,{"no-icon":""},{default:t(()=>[l(" I'm an alert without the icon ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"closeable",snippets:c.closeable},{default:t(()=>[s("div",L,[e(a,{closeable:"",onClose:n[7]||(n[7]=r=>u.$refs.toast.success("you click the close!"))},{default:t(()=>[l(" I'm an alert with the close icon and event ")]),_:1}),e(a,{closeable:"",onClose:n[8]||(n[8]=r=>u.$refs.toast.success("you click the close!"))},{default:t(()=>[l(" I'm an alert with the so lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang text. ")]),_:1})])]),_:1},8,["snippets"])]),_:1}),e(w,{ref:"toast"},null,512)],64)}}};export{z as default};
