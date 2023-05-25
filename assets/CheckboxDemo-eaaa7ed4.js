import{r as v,d as _,k as s,a as r,y as a,D as o,A as n,t as p,b as t,c as U,i as h,F as y,l as x}from"./index-7b657caa.js";import{_ as z,P as w}from"./Playground-fffca84d.js";import{_ as m}from"./Sample.vue_vue_type_script_setup_true_lang-b37f74b7.js";const B={class:"flex gap-3"},L={class:"flex flex-wrap items-center gap-2"},A=t("div",{class:"w-16"}," type ",-1),D={class:"flex flex-wrap items-center gap-2"},N=t("div",{class:"w-16"}," size ",-1),$={class:"flex items-center gap-2"},F=t("div",{class:"w-16"}," custom ",-1),I={class:"flex gap-4"},P={class:"flex gap-4"},R={class:"flex gap-4"},E={class:"mr-4"},S={class:"flex gap-4"},J={__name:"CheckboxDemo",setup(T){const u=v(!0),i=v("checked"),V=v([]),d=v({checkValue:!0,checkedValue:"",uncheckedValue:"",type:"primary",size:"md",disabled:!1,labelLeft:!1}),c={size:['<UCheckbox v-model="checksValue" size="sm" />','<UCheckbox v-model="checksValue" size="md" />','<UCheckbox v-model="checksValue" size="lg" />'],type:['<UCheckbox v-model="checkValue" type="primary" />','<UCheckbox v-model="checkValue" type="secondary" />','<UCheckbox v-model="checkValue" type="accent" />','<UCheckbox v-model="checkValue" type="success" />','<UCheckbox v-model="checkValue" type="info" />','<UCheckbox v-model="checkValue" type="warning" />','<UCheckbox v-model="checkValue" type="error" />'],disabled:["<UCheckbox disabled />","<UCheckbox checked disabled />"],customValue:[`<UCheckbox v-model="customValue" checked-value="checked" unchecked-value="unchecked">
  {{ customValue }}
</UCheckbox>`],labelLeft:[`<UCheckbox v-model="checkValue" label-left>
  {{ checkValue }}
</UCheckbox>`],group:["const checkValues = ref([])",`<div class="flex gap-4">
  <UCheckbox v-model="checkValues" value="A">
    A
  </UCheckbox>
  <UCheckbox v-model="checkValues" value="B">
    B
  </UCheckbox>
</div>`]},C=["primary","secondary","accent","success","info","warning","error"],g=["sm","md","lg"];return(j,l)=>{const f=x("URadio"),b=x("UInput");return r(),_(z,null,{default:s(()=>[a(w,null,{preview:s(()=>[a(o,{modelValue:d.value.checkValue,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value.checkValue=e),type:d.value.type,size:d.value.size,disabled:d.value.disabled,"label-left":d.value.labelLeft,"checked-value":d.value.checkedValue,"unchecked-value":d.value.uncheckedValue},{default:s(()=>[n(p(d.value.checkValue),1)]),_:1},8,["modelValue","type","size","disabled","label-left","checked-value","unchecked-value"])]),props:s(()=>[t("div",B,[a(o,{modelValue:d.value.disabled,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value.disabled=e)},{default:s(()=>[n(" disabled ")]),_:1},8,["modelValue"]),a(o,{modelValue:d.value.labelLeft,"onUpdate:modelValue":l[2]||(l[2]=e=>d.value.labelLeft=e)},{default:s(()=>[n(" label-left ")]),_:1},8,["modelValue"])]),t("div",L,[A,(r(),U(y,null,h(C,e=>a(f,{key:e,modelValue:d.value.type,"onUpdate:modelValue":l[3]||(l[3]=k=>d.value.type=k),type:e,value:e},{default:s(()=>[n(p(e),1)]),_:2},1032,["modelValue","type","value"])),64))]),t("div",D,[N,(r(),U(y,null,h(g,e=>a(f,{key:e,modelValue:d.value.size,"onUpdate:modelValue":l[4]||(l[4]=k=>d.value.size=k),type:e,value:e},{default:s(()=>[n(p(e),1)]),_:2},1032,["modelValue","type","value"])),64))]),t("div",$,[F,a(b,{modelValue:d.value.checkedValue,"onUpdate:modelValue":l[5]||(l[5]=e=>d.value.checkedValue=e),clearable:"",placeholder:"checkedVal"},null,8,["modelValue"]),a(b,{modelValue:d.value.uncheckedValue,"onUpdate:modelValue":l[6]||(l[6]=e=>d.value.uncheckedValue=e),clearable:"",placeholder:"uncheckedVal"},null,8,["modelValue"])])]),_:1}),a(m,{title:"size",snippets:c.size},{default:s(()=>[t("div",I,[a(o,{modelValue:u.value,"onUpdate:modelValue":l[7]||(l[7]=e=>u.value=e),size:"sm"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[8]||(l[8]=e=>u.value=e),size:"md"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[9]||(l[9]=e=>u.value=e),size:"lg"},null,8,["modelValue"])])]),_:1},8,["snippets"]),a(m,{title:"type",snippets:c.type},{default:s(()=>[t("div",P,[a(o,{modelValue:u.value,"onUpdate:modelValue":l[10]||(l[10]=e=>u.value=e),type:"primary"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[11]||(l[11]=e=>u.value=e),type:"secondary"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[12]||(l[12]=e=>u.value=e),type:"accent"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[13]||(l[13]=e=>u.value=e),type:"success"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[14]||(l[14]=e=>u.value=e),type:"info"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[15]||(l[15]=e=>u.value=e),type:"warning"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":l[16]||(l[16]=e=>u.value=e),type:"error"},null,8,["modelValue"])])]),_:1},8,["snippets"]),a(m,{title:"disabled",snippets:c.disabled},{default:s(()=>[t("div",R,[a(o,{disabled:""}),a(o,{disabled:"",checked:""})])]),_:1},8,["snippets"]),a(m,{title:"custom value",snippets:c.customValue},{default:s(()=>[a(o,{modelValue:i.value,"onUpdate:modelValue":l[17]||(l[17]=e=>i.value=e),"checked-value":"checked","unchecked-value":"unchecked"},{default:s(()=>[n(p(i.value),1)]),_:1},8,["modelValue"])]),_:1},8,["snippets"]),a(m,{title:"label left",snippets:c.labelLeft},{default:s(()=>[a(o,{modelValue:u.value,"onUpdate:modelValue":l[18]||(l[18]=e=>u.value=e),"label-left":""},{default:s(()=>[n(p(u.value),1)]),_:1},8,["modelValue"])]),_:1},8,["snippets"]),a(m,{title:"checkbox group",snippets:c.group},{default:s(()=>[t("p",E," checkValues: "+p(V.value),1),t("div",S,[a(o,{modelValue:V.value,"onUpdate:modelValue":l[19]||(l[19]=e=>V.value=e),value:"A"},{default:s(()=>[n(" A ")]),_:1},8,["modelValue"]),a(o,{modelValue:V.value,"onUpdate:modelValue":l[20]||(l[20]=e=>V.value=e),value:"B"},{default:s(()=>[n(" B ")]),_:1},8,["modelValue"])])]),_:1},8,["snippets"])]),_:1})}}};export{J as default};
