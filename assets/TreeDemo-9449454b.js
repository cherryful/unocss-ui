import{r as v,d as f,k as t,a as _,y as s,b as o,t as p,a1 as n,K as h,A as u,l as A}from"./index-62f6a56a.js";import{_ as k,P as x}from"./Playground-6a48de0e.js";import{_ as b}from"./Sample.vue_vue_type_script_setup_true_lang-477c84ee.js";const U={class:"w-full"},g={class:"mb-3"},w={class:"flex items-center gap-1"},y=o("span",{class:"i-mdi:lightning-bolt h-4 w-4"},null,-1),T={class:"flex flex-wrap gap-2"},C={class:"flex items-center gap-1"},P=o("span",{class:"i-mdi:lightning-bolt h-4 w-4"},null,-1),K={__name:"TreeDemo",setup(N){const m=v([]),B=v([]),r=v([]),a=v({checkedValues:[],selectable:!0,cascade:!0,custom:!1,associateParent:!0}),c={base:[`const options = [
  {
    label: '1',
    value: 1,
    children: [
      { label: '11', value: 11 },
      { label: '12', value: 12 },
      { label: '13', value: 13 },
    ],
  },
  {
    label: 'A',
    value: 'A',
    children: [
      { label: 'A1', value: 'A1' },
      { label: 'A2', value: 'A2' },
      { label: 'A3', value: 'A3', disabled: true },
    ],
  },
  {
    label: 'B',
    value: 'B',
    children: [
      { label: 'B1', value: 'B1' },
      { label: 'B2', value: 'B2' },
      {
        label: 'B3',
        value: 'B3',
        children: [
          { label: 'B31', value: 'B31' },
          { label: 'B32', value: 'B32' },
          {
            label: 'B33',
            value: 'B33',
            children: [
              { label: 'B331', value: 'B331' },
              { label: 'B332', value: 'B332' },
              {
                label: 'B333',
                value: 'B333',
                children: [
                  { label: 'B3331', value: 'B3331' },
                  { label: 'B3332', value: 'B3332' },
                  { label: 'B3333', value: 'B3333' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]`,'<UTree :options="options" />'],selectableAndCascade:['<UTree v-model="checkedValues2" :options="options" selectable cascade />'],defaultExpanded:[`<UTree
  v-model="checkedValues3"
  :options="options"
  :default-expanded-keys="['A', 'B', 'B3', 'B33']"
/>`],custom:[`<UTree v-model="checkedValues4" :options="options" cascade selectable>
  <template #option="{ item, level }">
    <div class="flex items-center gap-1">
      <span class="i-mdi:lightning-bolt h-4 w-4" />
      {{ level }} - {{ item.label }}
    </div>
  </template>
</UTree>`]},d=[{label:"1",value:1,children:[{label:"11",value:11},{label:"12",value:12},{label:"13",value:13}]},{label:"A",value:"A",children:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3",disabled:!0}]},{label:"B",value:"B",children:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3",children:[{label:"B31",value:"B31"},{label:"B32",value:"B32"},{label:"B33",value:"B33",children:[{label:"B331",value:"B331"},{label:"B332",value:"B332"},{label:"B333",value:"B333",children:[{label:"B3331",value:"B3331"},{label:"B3332",value:"B3332"},{label:"B3333",value:"B3333"}]}]}]}]}];return($,l)=>{const i=A("UCheckbox");return _(),f(k,null,{default:t(()=>[s(x,null,{preview:t(()=>[o("div",U,[o("div",g," checkedValues: "+p(a.value.checkedValues),1),s(n,{modelValue:a.value.checkedValues,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value.checkedValues=e),options:d,cascade:a.value.cascade,selectable:a.value.selectable,"associate-parent":a.value.associateParent},h({_:2},[a.value.custom?{name:"option",fn:t(({item:e})=>[o("div",w,[y,u(" "+p(e.label),1)])]),key:"0"}:void 0]),1032,["modelValue","cascade","selectable","associate-parent"])])]),props:t(()=>[o("div",T,[s(i,{modelValue:a.value.selectable,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.selectable=e)},{default:t(()=>[u(" selectable ")]),_:1},8,["modelValue"]),s(i,{modelValue:a.value.cascade,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value.cascade=e)},{default:t(()=>[u(" cascade ")]),_:1},8,["modelValue"]),s(i,{modelValue:a.value.associateParent,"onUpdate:modelValue":l[3]||(l[3]=e=>a.value.associateParent=e)},{default:t(()=>[u(" associate-parent ")]),_:1},8,["modelValue"]),s(i,{modelValue:a.value.custom,"onUpdate:modelValue":l[4]||(l[4]=e=>a.value.custom=e)},{default:t(()=>[u(" custom ")]),_:1},8,["modelValue"])])]),_:1}),s(b,{title:"base",snippets:c.base},{default:t(()=>[s(n,{options:d})]),_:1},8,["snippets"]),s(b,{title:"selectable & cascade",snippets:c.selectableAndCascade},{default:t(()=>[s(n,{modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),options:d,selectable:"",cascade:""},null,8,["modelValue"])]),_:1},8,["snippets"]),s(b,{title:"default-expanded-keys",snippets:c.defaultExpanded},{default:t(()=>[s(n,{modelValue:B.value,"onUpdate:modelValue":l[6]||(l[6]=e=>B.value=e),options:d,"default-expanded-keys":["A","B","B3","B33"]},null,8,["modelValue"])]),_:1},8,["snippets"]),s(b,{title:"custom",snippets:c.custom},{default:t(()=>[s(n,{modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=e=>r.value=e),options:d,cascade:"",selectable:""},{option:t(({item:e,level:V})=>[o("div",C,[P,u(" "+p(V)+" - "+p(e.label),1)])]),_:1},8,["modelValue"])]),_:1},8,["snippets"])]),_:1})}}};export{K as default};
