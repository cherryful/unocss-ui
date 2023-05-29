import{r as b,B as c,d as h,k as e,a as _,y as t,I as i,A as l,b as d,c as w,i as B,t as y,F as k,l as p}from"./index-4ad6cd95.js";import{_ as D,P as V}from"./Playground-d4a03015.js";import{_ as m}from"./Sample.vue_vue_type_script_setup_true_lang-2886308f.js";const $={class:"flex flex-wrap items-center gap-2"},C=d("div",{class:"w-16"}," trigger ",-1),P={class:"flex gap-8"},F={__name:"DropdownDemo",setup(A){const n=b({trigger:"click",optionSlot:!1}),u={base:[`const options = [
  {
    label: 'Apple',
    value: 'apple',
    icon: 'i-mdi:apple text-red-600 text-xl',
  },
  {
    label: 'Pear',
    value: 'pear',
    icon: 'i-mdi:fruit-pear text-green-600 text-xl',
  },
  {
    label: 'Cherry',
    value: 'cherry',
    icon: h('div', { class: 'i-mdi:fruit-cherries text-red-600 text-xl' }),
  },
  {
    label: 'Watermelon',
    value: 'watermelon',
    icon: h('div', { class: 'i-mdi:fruit-watermelon text-red-600 text-xl' }),
    disabled: true,
  },
]`,`<UDropdown :options="options">
  <UButton> base </UButton>
</UDropdown>`],trigger:[`<UDropdown :options="options">
  <UButton>
    click
  </UButton>
</UDropdown>`,`<UDropdown trigger="hover" :options="options">
  <UButton>
    hover
  </UButton>
</UDropdown>`]},r=[{label:"Apple",value:"apple",icon:"i-mdi:apple text-red-600 text-xl"},{label:"Pear",value:"pear",icon:"i-mdi:fruit-pear text-green-600 text-xl"},{label:"Cherry",value:"cherry",icon:c("div",{class:"i-mdi:fruit-cherries text-red-600 text-xl"})},{label:"Watermelon",value:"watermelon",icon:c("div",{class:"i-mdi:fruit-watermelon text-red-600 text-xl"}),disabled:!0}],f=["click","hover"];return(g,a)=>{const x=p("UToast"),s=p("UButton"),v=p("URadio");return _(),h(D,null,{default:e(()=>[t(V,null,{preview:e(()=>[t(x,{ref:"toast"},null,512),t(i,{trigger:n.value.trigger,options:r,onSelect:a[0]||(a[0]=o=>g.$refs.toast.info(`select: ${o.value}`))},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(" Base ")]),_:1})]),_:1},8,["trigger"])]),props:e(()=>[d("div",$,[C,(_(),w(k,null,B(f,o=>t(v,{key:o,modelValue:n.value.trigger,"onUpdate:modelValue":a[1]||(a[1]=U=>n.value.trigger=U),value:o},{default:e(()=>[l(y(o),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),t(m,{title:"base",snippets:u.base},{default:e(()=>[t(i,{options:r},{default:e(()=>[t(s,null,{default:e(()=>[l(" base ")]),_:1})]),_:1})]),_:1},8,["snippets"]),t(m,{title:"trigger",snippets:u.trigger},{default:e(()=>[d("div",P,[t(i,{options:r},{default:e(()=>[t(s,null,{default:e(()=>[l(" click ")]),_:1})]),_:1}),t(i,{trigger:"hover",options:r},{default:e(()=>[t(s,null,{default:e(()=>[l(" hover ")]),_:1})]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{F as default};
