import{r as v,d as A,k as t,a as f,y as s,b as o,t as n,a1 as c,K as x,A as u,c as U,i as g,F as w,l as _}from"./index-86feeedd.js";import{_ as y,P}from"./Playground-d950f940.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-37fccdd2.js";const T={class:"w-full"},C={class:"mb-3"},E={class:"flex items-center gap-1"},N=o("span",{class:"i-mdi:lightning-bolt h-4 w-4"},null,-1),$={class:"flex flex-wrap gap-2"},D={class:"flex flex-wrap items-center gap-2"},F=o("div",{class:"w-40"}," associate-parent ",-1),R={class:"flex items-center gap-1"},S=o("span",{class:"i-mdi:lightning-bolt h-4 w-4"},null,-1),G={__name:"TreeDemo",setup(K){const m=v([]),B=v([]),V=v([]),a=v({checkedValues:[],selectable:!0,cascade:!0,custom:!1,associateParent:"auto"}),i={base:[`const options = [
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
</UTree>`]},d=[{label:"1",value:1,children:[{label:"11",value:11},{label:"12",value:12},{label:"13",value:13}]},{label:"A",value:"A",children:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3",disabled:!0}]},{label:"B",value:"B",children:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3",children:[{label:"B31",value:"B31"},{label:"B32",value:"B32"},{label:"B33",value:"B33",children:[{label:"B331",value:"B331"},{label:"B332",value:"B332"},{label:"B333",value:"B333",children:[{label:"B3331",value:"B3331"},{label:"B3332",value:"B3332"},{label:"B3333",value:"B3333"}]}]}]}]}],h=["auto","check","uncheck"];return(L,l)=>{const b=_("UCheckbox"),k=_("URadio");return f(),A(y,null,{default:t(()=>[s(P,null,{preview:t(()=>[o("div",T,[o("div",C," checkedValues: "+n(a.value.checkedValues),1),s(c,{modelValue:a.value.checkedValues,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value.checkedValues=e),options:d,cascade:a.value.cascade,selectable:a.value.selectable,"associate-parent":a.value.associateParent},x({_:2},[a.value.custom?{name:"option",fn:t(({item:e})=>[o("div",E,[N,u(" "+n(e.label),1)])]),key:"0"}:void 0]),1032,["modelValue","cascade","selectable","associate-parent"])])]),props:t(()=>[o("div",$,[s(b,{modelValue:a.value.selectable,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.selectable=e)},{default:t(()=>[u(" selectable ")]),_:1},8,["modelValue"]),s(b,{modelValue:a.value.cascade,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value.cascade=e)},{default:t(()=>[u(" cascade ")]),_:1},8,["modelValue"]),s(b,{modelValue:a.value.custom,"onUpdate:modelValue":l[3]||(l[3]=e=>a.value.custom=e)},{default:t(()=>[u(" custom ")]),_:1},8,["modelValue"])]),o("div",D,[F,(f(),U(w,null,g(h,e=>s(k,{key:e,modelValue:a.value.associateParent,"onUpdate:modelValue":l[4]||(l[4]=r=>a.value.associateParent=r),value:e},{default:t(()=>[u(n(e),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),s(p,{title:"base",snippets:i.base},{default:t(()=>[s(c,{options:d})]),_:1},8,["snippets"]),s(p,{title:"selectable & cascade",snippets:i.selectableAndCascade},{default:t(()=>[s(c,{modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),options:d,selectable:"",cascade:""},null,8,["modelValue"])]),_:1},8,["snippets"]),s(p,{title:"default-expanded-keys",snippets:i.defaultExpanded},{default:t(()=>[s(c,{modelValue:B.value,"onUpdate:modelValue":l[6]||(l[6]=e=>B.value=e),options:d,"default-expanded-keys":["A","B","B3","B33"]},null,8,["modelValue"])]),_:1},8,["snippets"]),s(p,{title:"custom",snippets:i.custom},{default:t(()=>[s(c,{modelValue:V.value,"onUpdate:modelValue":l[7]||(l[7]=e=>V.value=e),options:d,cascade:"",selectable:""},{option:t(({item:e,level:r})=>[o("div",R,[S,u(" "+n(r)+" - "+n(e.label),1)])]),_:1},8,["modelValue"])]),_:1},8,["snippets"])]),_:1})}}};export{G as default};
