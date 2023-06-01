import{r as i,d as f,k as t,a as _,y as a,b as u,t as v,a1 as d,K as h,A as n,l as A}from"./index-676d8611.js";import{_ as k,P as x}from"./Playground-88bc61ef.js";import{_ as b}from"./Sample.vue_vue_type_script_setup_true_lang-f242cf4b.js";const U={class:"w-full"},g={class:"mb-3"},y={class:"flex items-center gap-1"},T=u("span",{class:"i-mdi:lightning-bolt h-4 w-4"},null,-1),w={class:"flex gap-2"},C={class:"flex items-center gap-1"},N=u("span",{class:"i-mdi:lightning-bolt h-4 w-4"},null,-1),K={__name:"TreeDemo",setup($){const B=i([]),m=i([]),r=i([]),s=i({checkedValues:[],selectable:!0,cascade:!0,custom:!1}),c={base:[`const options = [
  {
    label: '1',
    value: 1,
    children: [
      { label: '11', value: 11 },
      { label: '12', value: 12 },
      { label: '13', value: 13, disabled: true },
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
</UTree>`]},o=[{label:"1",value:1,children:[{label:"11",value:11},{label:"12",value:12},{label:"13",value:13,disabled:!0}]},{label:"A",value:"A",children:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3",disabled:!0}]},{label:"B",value:"B",children:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3",children:[{label:"B31",value:"B31"},{label:"B32",value:"B32"},{label:"B33",value:"B33",children:[{label:"B331",value:"B331"},{label:"B332",value:"B332"},{label:"B333",value:"B333",children:[{label:"B3331",value:"B3331"},{label:"B3332",value:"B3332"},{label:"B3333",value:"B3333"}]}]}]}]}];return(D,l)=>{const p=A("UCheckbox");return _(),f(k,null,{default:t(()=>[a(x,null,{preview:t(()=>[u("div",U,[u("div",g," checkedValues: "+v(s.value.checkedValues),1),a(d,{modelValue:s.value.checkedValues,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value.checkedValues=e),options:o,cascade:s.value.cascade,selectable:s.value.selectable},h({_:2},[s.value.custom?{name:"option",fn:t(({item:e})=>[u("div",y,[T,n(" "+v(e.label),1)])]),key:"0"}:void 0]),1032,["modelValue","cascade","selectable"])])]),props:t(()=>[u("div",w,[a(p,{modelValue:s.value.selectable,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.selectable=e)},{default:t(()=>[n(" selectable ")]),_:1},8,["modelValue"]),a(p,{modelValue:s.value.cascade,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value.cascade=e)},{default:t(()=>[n(" cascade ")]),_:1},8,["modelValue"]),a(p,{modelValue:s.value.custom,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value.custom=e)},{default:t(()=>[n(" custom ")]),_:1},8,["modelValue"])])]),_:1}),a(b,{title:"base",snippets:c.base},{default:t(()=>[a(d,{options:o})]),_:1},8,["snippets"]),a(b,{title:"selectable & cascade",snippets:c.selectableAndCascade},{default:t(()=>[a(d,{modelValue:B.value,"onUpdate:modelValue":l[4]||(l[4]=e=>B.value=e),options:o,selectable:"",cascade:""},null,8,["modelValue"])]),_:1},8,["snippets"]),a(b,{title:"default-expanded-keys",snippets:c.defaultExpanded},{default:t(()=>[a(d,{modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),options:o,"default-expanded-keys":["A","B","B3","B33"]},null,8,["modelValue"])]),_:1},8,["snippets"]),a(b,{title:"custom",snippets:c.custom},{default:t(()=>[a(d,{modelValue:r.value,"onUpdate:modelValue":l[6]||(l[6]=e=>r.value=e),options:o,cascade:"",selectable:""},{option:t(({item:e,level:V})=>[u("div",C,[N,n(" "+v(V)+" - "+v(e.label),1)])]),_:1},8,["modelValue"])]),_:1},8,["snippets"])]),_:1})}}};export{K as default};
