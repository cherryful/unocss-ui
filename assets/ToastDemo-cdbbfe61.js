import{r as b,f as B,w as n,o as f,l as s,L as c,c as _,b as i,n as g,m as l,t as m,g as V,e as w,F as y,h as v}from"./index-c02a5245.js";import{_ as C,P as q}from"./Playground-9b535ff2.js";import{_ as d}from"./Sample.vue_vue_type_script_setup_true_lang-acd05173.js";const N={key:0,class:"pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},I={class:"p-4"},A={class:"flex items-start"},D={class:"shrink-0"},P={class:"ml-3 w-0 flex-1 pt-0.5"},F={class:"text-sm font-medium text-gray-900"},L=i("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),R={class:"flex flex-wrap gap-2"},z={class:"flex flex-wrap items-center gap-2"},E=i("div",{class:"w-20"}," type ",-1),Q={class:"flex flex-wrap items-center gap-2"},S=i("div",{class:"w-20"}," position ",-1),j={class:"flex flex-wrap items-center gap-2"},G=i("div",{class:"w-20"}," align ",-1),H={class:"flex items-center gap-2"},J=i("div",{class:"w-20"}," content ",-1),K={class:"flex items-center"},M=i("div",{class:"w-20"}," timeout ",-1),O={class:"w-36"},W={class:"space-x-4 space-y-3"},X={class:"space-x-4 space-y-3"},Y={class:"pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},Z={class:"flex items-start p-4"},tt={class:"shrink-0"},et={class:"ml-3 w-0 flex-1 pt-0.5"},st={class:"text-sm font-medium text-gray-900"},ot=i("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),it={class:"space-x-4 space-y-3"},nt={class:"space-x-4 space-y-3"},at={class:"space-x-4 space-y-3"},lt={class:"space-x-4 space-y-3"},dt={__name:"ToastDemo",setup(rt){const p={base:[`<UToast ref="toast_basic" />
<UButton @click="$refs.toast_basic?.show('success', 'It is simple to use the toast.')">
  show
</UButton>`],type:[`<UToast ref="toast_type" />

<div class="space-x-4 space-y-3">
  <UButton type="success" @click="$refs.toast_type?.success('This is the success toast.')">
    success
  </UButton>
  <UButton type="info" @click="$refs.toast_type?.info('This is the info toast.')">
    info
  </UButton>
  <UButton type="warning" @click="$refs.toast_type?.warning('This is the warning toast.')">
    warning
  </UButton>
  <UButton type="error" @click="$refs.toast_type?.error('This is the error toast.')">
    error
  </UButton>
</div>`],timeout:[`<UToast ref="toast_timeout" :timeout="500" />
<UButton @click="$refs.toast_timeout?.info('This toast will disappear after 500ms.')">
  500ms
</UButton>`],queue:[`<UToast ref="toast_queue" :queue="false" />
<UButton @click="$refs.toast_queue.success('This is the no queue toast.')">
  no queue
</UButton>`],custom:[`<UToast ref="toast_custom" v-slot="{ type }">
  <div class="pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    <div class="p-4">
      <div class="flex items-start">
        <div class="shrink-0">
          <div
            class="h-6 w-6"
            :class="{
              'i-mdi:check-circle text-success-400': type === 'success',
              'i-mdi:information-outline text-info-400': type === 'info',
              'i-mdi:alert-outline text-warning-400': type === 'warning',
              'i-mdi:alert-circle-outline text-error-400': type === 'error',
            }"
          />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-900">
            This is the custom {{ type }}  toast.
          </p>
          <p class="mt-1 text-sm text-gray-500">
            Anyone with a link can now view this file.
          </p>
        </div>
      </div>
    </div>
  </div>
</UToast>
<div class="space-x-4 space-y-3">
  <UButton
    type="success"
    @click="$refs.toast_custom.success('This is the success toast.')"
  >
    success
  </UButton>
  <UButton
    type="info"
    @click="$refs.toast_custom.info('This is the info toast.')"
  >
    info
  </UButton>
  <UButton
    type="warning"
    @click="$refs.toast_custom.warning('This is the warning toast.')"
  >
    warning
  </UButton>
  <UButton
    type="error"
    @click="$refs.toast_custom.error('This is the error toast.')"
  >
    error
  </UButton>
</div>`],placement:[`<UToast ref="toast_top_left" position="top" align="left" />
<UButton @click="$refs.toast_top_left?.success('This is the top left toast.')">
  top-left
</UButton>`,`<UToast ref="toast_top_right" position="top" align="right" />
<UButton @click="$refs.toast_top_right?.info('This is the top right toast.')">
  top-right
</UButton>`,`<UToast ref="toast_bottom_left" position="bottom" align="left" />
<UButton @click="$refs.toast_bottom_left?.warning('This is the bottom left toast.')">
  bottom-left
</UButton>`,`<UToast ref="toast_bottom_right" position="bottom" align="right" />
<UButton @click="$refs.toast_bottom_right?.error('This is the bottom right toast.')">
  bottom-right
</UButton>`]},a=b({type:"success",timeout:2500,position:"top",align:"left",content:"This toast is very simple and easy to use.",queue:!0,custom:!1}),k=["success","info","warning","error"],T=["top","bottom"],x=["left","center","right"];return(r,e)=>{const u=v("UButton"),U=v("UCheckbox"),h=v("URadio"),$=v("UInput");return f(),B(C,{title:"Toast Demo"},{default:n(()=>[s(q,null,{preview:n(()=>[s(c,{ref:"toast",type:a.value.type,timeout:a.value.timeout,queue:a.value.queue,position:a.value.position,align:a.value.align},{default:n(({type:t})=>[a.value.custom?(f(),_("div",N,[i("div",I,[i("div",A,[i("div",D,[i("div",{class:g(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),i("div",P,[i("p",F,[l(" This is the custom "),i("span",{class:g(["font-bold",{"text-success-400":t==="success","text-info-400":t==="info","text-warning-400":t==="warning","text-error-400":t==="error"}])},m(t),3),l(" toast. ")]),L])])])])):V("",!0)]),_:1},8,["type","timeout","queue","position","align"]),s(u,{onClick:e[0]||(e[0]=t=>r.$refs.toast.show(a.value.type,a.value.content))},{default:n(()=>[l(" show ")]),_:1})]),props:n(()=>[i("div",R,[s(U,{modelValue:a.value.queue,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.queue=t)},{default:n(()=>[l(" queue ")]),_:1},8,["modelValue"]),s(U,{modelValue:a.value.custom,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.custom=t)},{default:n(()=>[l(" custom content ")]),_:1},8,["modelValue"])]),i("div",z,[E,(f(),_(y,null,w(k,t=>s(h,{key:t,modelValue:a.value.type,"onUpdate:modelValue":[e[3]||(e[3]=o=>a.value.type=o),o=>a.value.type=t],type:t,value:t},{default:n(()=>[l(m(t),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),i("div",Q,[S,(f(),_(y,null,w(T,t=>s(h,{key:t,modelValue:a.value.position,"onUpdate:modelValue":[e[4]||(e[4]=o=>a.value.position=o),o=>a.value.position=t],type:t,value:t},{default:n(()=>[l(m(t),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),i("div",j,[G,(f(),_(y,null,w(x,t=>s(h,{key:t,modelValue:a.value.align,"onUpdate:modelValue":[e[5]||(e[5]=o=>a.value.align=o),o=>a.value.align=t],type:t,value:t},{default:n(()=>[l(m(t),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),i("div",H,[J,s($,{modelValue:a.value.content,"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.content=t),placeholder:"content",clearable:""},null,8,["modelValue"])]),i("div",K,[M,i("div",O,[s($,{modelValue:a.value.timeout,"onUpdate:modelValue":e[7]||(e[7]=t=>a.value.timeout=t),placeholder:"timeout",type:"number"},null,8,["modelValue"])])])]),_:1}),s(d,{title:"Base",snippets:p.base},{default:n(()=>[s(c,{ref:"toast_basic"},null,512),i("div",W,[s(u,{onClick:e[8]||(e[8]=t=>{var o;return(o=r.$refs.toast_basic)==null?void 0:o.show("success","It is simple to use the toast.")})},{default:n(()=>[l(" show ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Type",snippets:p.type},{default:n(()=>[s(c,{ref:"toast_type"},null,512),i("div",X,[s(u,{type:"success",onClick:e[9]||(e[9]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.success("This is the success toast.")})},{default:n(()=>[l(" success ")]),_:1}),s(u,{type:"info",onClick:e[10]||(e[10]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.info("This is the info toast.")})},{default:n(()=>[l(" info ")]),_:1}),s(u,{type:"warning",onClick:e[11]||(e[11]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.warning("This is the warning toast.")})},{default:n(()=>[l(" warning ")]),_:1}),s(u,{type:"error",onClick:e[12]||(e[12]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.error("This is the error toast.")})},{default:n(()=>[l(" error ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Custom",snippets:p.custom},{default:n(()=>[s(c,{ref:"toast_custom"},{default:n(({type:t})=>[i("div",Y,[i("div",Z,[i("div",tt,[i("div",{class:g(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),i("div",et,[i("p",st," This is the custom "+m(t)+" toast. ",1),ot])])])]),_:1},512),i("div",it,[s(u,{type:"success",onClick:e[13]||(e[13]=t=>r.$refs.toast_custom.success("This is the success toast."))},{default:n(()=>[l(" success ")]),_:1}),s(u,{type:"info",onClick:e[14]||(e[14]=t=>r.$refs.toast_custom.info("This is the info toast."))},{default:n(()=>[l(" info ")]),_:1}),s(u,{type:"warning",onClick:e[15]||(e[15]=t=>r.$refs.toast_custom.warning("This is the warning toast."))},{default:n(()=>[l(" warning ")]),_:1}),s(u,{type:"error",onClick:e[16]||(e[16]=t=>r.$refs.toast_custom.error("This is the error toast."))},{default:n(()=>[l(" error ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Timeout",snippets:p.timeout},{default:n(()=>[s(c,{ref:"toast_timeout",timeout:500},null,512),i("div",nt,[s(u,{onClick:e[17]||(e[17]=t=>{var o;return(o=r.$refs.toast_timeout)==null?void 0:o.info("This toast will disappear after 500ms.")})},{default:n(()=>[l(" 500 ms ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"No Queue",snippets:p.queue},{default:n(()=>[s(c,{ref:"toast_queue",queue:!1},null,512),i("div",at,[s(u,{onClick:e[18]||(e[18]=t=>r.$refs.toast_queue.success("This is the no queue toast."))},{default:n(()=>[l(" no queue ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Placement",snippets:p.placement},{default:n(()=>[i("div",lt,[s(c,{ref:"toast_top_left",position:"top",align:"left"},null,512),s(u,{onClick:e[19]||(e[19]=t=>{var o;return(o=r.$refs.toast_top_left)==null?void 0:o.success("This is the top left toast.")})},{default:n(()=>[l(" top-left ")]),_:1}),s(c,{ref:"toast_top_right",position:"top",align:"right"},null,512),s(u,{onClick:e[20]||(e[20]=t=>{var o;return(o=r.$refs.toast_top_right)==null?void 0:o.info("This is the top right toast.")})},{default:n(()=>[l(" top-right ")]),_:1}),s(c,{ref:"toast_bottom_left",position:"bottom",align:"left"},null,512),s(u,{onClick:e[21]||(e[21]=t=>{var o;return(o=r.$refs.toast_bottom_left)==null?void 0:o.warning("This is the bottom left toast.")})},{default:n(()=>[l(" bottom-left ")]),_:1}),s(c,{ref:"toast_bottom_right",position:"bottom",align:"right"},null,512),s(u,{onClick:e[22]||(e[22]=t=>{var o;return(o=r.$refs.toast_bottom_right)==null?void 0:o.error("This is the bottom right toast.")})},{default:n(()=>[l(" bottom-right ")]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{dt as default};
