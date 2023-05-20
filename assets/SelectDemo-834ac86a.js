import{r as c,f as x,w as s,o as U,l as a,J as d,H as w,b as v,n as g,q as i,t as b,c as $,F as C,g as y,i as V}from"./index-1e3a3670.js";import{_,P as T}from"./Playground-b5d7abc2.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-6114c00b.js";const B={class:"flex flex-wrap gap-2"},N={class:"flex items-center gap-2"},A={__name:"SelectDemo",setup(J){const t=c("vue"),o=c({selectedValue:null,disabled:!1,placeholder:"Oh, please select",filterable:!1,clearable:!1,custom:!1}),n={options:[`const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  // ...
]`,'<USelect v-model="selectedValue" :options="options" />'],label:['<USelect v-model="selectedValue" label="favorite" :options="options" />'],placeholder:['<USelect v-model="selectedValue" placeholder="Yooooo~" :options="options" />'],disabled:['<USelect v-model="selectedValue" :options="options" disabled />'],filterable:['<USelect v-model="selectedValue" :options="options" filterable />'],clearable:['<USelect v-model="selectedValue" :options="options" clearable />'],errorMessage:['<USelect v-model="selectedValue" :options="options" error-message="Some errors have occurred." />'],custom:[`<USelect v-model="selectedValue" :options="options">
  <template #option="{ item, active }">
    <span
      class="mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full"
      :class="[active ? 'bg-green-400' : 'bg-red-400']"
    />
    {{ item.label }}
  </template>
</USelect>`],other:[`<UToast ref="toast" />
<USelect
  v-model="selectedValue"
  :options="options"
  @update:model-value="$refs.toast.info(selectedValue)"
/>`]},u=[{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"React",value:"react"},{label:"Svelte",value:"svelte"},{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"UnoCSS",value:"unocss"},{label:"TailwindCSS",value:"tailwindcss"},{label:"JQuery",value:"jquery"}];return(f,l)=>{const S=V("UToast"),m=V("UCheckbox"),k=V("UInput");return U(),x(_,null,{default:s(()=>[a(T,null,{preview:s(()=>[a(S,{ref:"toast"},null,512),a(d,{modelValue:o.value.selectedValue,"onUpdate:modelValue":[l[0]||(l[0]=e=>o.value.selectedValue=e),l[1]||(l[1]=e=>{var r;return(r=f.$refs.toast)==null?void 0:r.info(`select the option value: ${o.value.selectedValue}`)})],disabled:o.value.disabled,placeholder:o.value.placeholder,filterable:o.value.filterable,clearable:o.value.clearable,custom:o.value.custom,options:u},w({default:s(()=>[o.value.custom?y("",!0):(U(),$(C,{key:0},[i(b(o.value.selectedValue),1)],64))]),_:2},[o.value.custom?{name:"option",fn:s(({item:e,active:r})=>[v("span",{class:g(["mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full",[r?"bg-green-400":"bg-red-400"]])},null,2),i(" "+b(e.label),1)]),key:"0"}:void 0]),1032,["modelValue","disabled","placeholder","filterable","clearable","custom"])]),props:s(()=>[v("div",B,[a(m,{modelValue:o.value.disabled,"onUpdate:modelValue":l[2]||(l[2]=e=>o.value.disabled=e)},{default:s(()=>[i(" disabled ")]),_:1},8,["modelValue"]),a(m,{modelValue:o.value.filterable,"onUpdate:modelValue":l[3]||(l[3]=e=>o.value.filterable=e)},{default:s(()=>[i(" filterable ")]),_:1},8,["modelValue"]),a(m,{modelValue:o.value.clearable,"onUpdate:modelValue":l[4]||(l[4]=e=>o.value.clearable=e)},{default:s(()=>[i(" clearable ")]),_:1},8,["modelValue"]),a(m,{modelValue:o.value.custom,"onUpdate:modelValue":l[5]||(l[5]=e=>o.value.custom=e)},{default:s(()=>[i(" custom option ")]),_:1},8,["modelValue"])]),v("div",N,[i(" placeholder "),a(k,{modelValue:o.value.placeholder,"onUpdate:modelValue":l[6]||(l[6]=e=>o.value.placeholder=e),placeholder:"placeholder"},null,8,["modelValue"])])]),_:1}),a(p,{title:"options",snippets:n.options},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[7]||(l[7]=e=>t.value=e),options:u},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"label",snippets:n.label},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[8]||(l[8]=e=>t.value=e),label:"favorite",options:u},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"placeholder",snippets:n.placeholder},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[9]||(l[9]=e=>t.value=e),placeholder:"Yooooo~",options:u},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"disabled",snippets:n.disabled},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[10]||(l[10]=e=>t.value=e),options:u,disabled:""},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"filterable",snippets:n.filterable},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[11]||(l[11]=e=>t.value=e),options:u,filterable:""},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"clearable",snippets:n.clearable},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[12]||(l[12]=e=>t.value=e),options:u,clearable:""},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"errorMessage",snippets:n.errorMessage},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[13]||(l[13]=e=>t.value=e),options:u,"error-message":"Some errors have occurred."},null,8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"",snippets:n.custom},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":l[14]||(l[14]=e=>t.value=e),options:u},{option:s(({item:e,active:r})=>[v("span",{class:g(["mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full",[r?"bg-green-400":"bg-red-400"]])},null,2),i(" "+b(e.label),1)]),_:1},8,["modelValue"])]),_:1},8,["snippets"]),a(p,{title:"@update:model-value",snippets:n.other},{default:s(()=>[a(d,{modelValue:t.value,"onUpdate:modelValue":[l[15]||(l[15]=e=>t.value=e),l[16]||(l[16]=e=>f.$refs.toast.info(t.value))],options:u},null,8,["modelValue"])]),_:1},8,["snippets"])]),_:1})}}};export{A as default};