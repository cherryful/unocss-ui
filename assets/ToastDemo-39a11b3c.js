import{r as b,d as B,k as i,a as d,y as s,Z as c,c as _,b as n,n as v,A as l,t as m,j as V,i as w,F as y,l as h}from"./index-726212d7.js";import{_ as C,P as q}from"./Playground-62943b75.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-df62f94e.js";const N={key:0,class:"pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},A={class:"p-4"},I={class:"flex items-start"},P={class:"shrink-0"},D={class:"ml-3 w-0 flex-1 pt-0.5"},F={class:"text-sm font-medium text-gray-900"},R=n("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),j={class:"flex flex-wrap gap-2"},z={class:"flex flex-wrap items-center gap-2"},E=n("div",{class:"w-20"}," type ",-1),L={class:"flex flex-wrap items-center gap-2"},Q=n("div",{class:"w-20"}," position ",-1),S={class:"flex flex-wrap items-center gap-2"},Z=n("div",{class:"w-20"}," align ",-1),G={class:"flex items-center gap-2"},H=n("div",{class:"w-20"}," content ",-1),J={class:"flex items-center"},K=n("div",{class:"w-20"}," timeout ",-1),M={class:"w-36"},O={class:"flex gap-4"},W={class:"pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},X={class:"flex items-start p-4"},Y={class:"shrink-0"},tt={class:"ml-3 w-0 flex-1 pt-0.5"},et={class:"text-sm font-medium text-gray-900"},st=n("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),ot={class:"flex gap-4"},it={class:"flex gap-4"},nt={class:"flex gap-4"},lt={class:"flex gap-4"},ft={__name:"ToastDemo",setup(at){const f={base:[`<UToast ref="toast_basic" />
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
</UButton>`]},a=b({type:"success",timeout:2500,position:"top",align:"left",content:"This toast is very simple and easy to use.",queue:!0,custom:!1}),$=["success","info","warning","error"],T=["top","bottom"],x=["left","center","right"];return(r,e)=>{const u=h("UButton"),U=h("UCheckbox"),g=h("URadio"),k=h("UInput");return d(),B(C,null,{default:i(()=>[s(q,null,{preview:i(()=>[s(c,{ref:"toast",type:a.value.type,timeout:a.value.timeout,queue:a.value.queue,position:a.value.position,align:a.value.align},{default:i(({type:t})=>[a.value.custom?(d(),_("div",N,[n("div",A,[n("div",I,[n("div",P,[n("div",{class:v(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),n("div",D,[n("p",F,[l(" This is the custom "),n("span",{class:v(["font-bold",{"text-success-400":t==="success","text-info-400":t==="info","text-warning-400":t==="warning","text-error-400":t==="error"}])},m(t),3),l(" toast. ")]),R])])])])):V("",!0)]),_:1},8,["type","timeout","queue","position","align"]),s(u,{onClick:e[0]||(e[0]=t=>r.$refs.toast.show(a.value.type,a.value.content))},{default:i(()=>[l(" show ")]),_:1})]),props:i(()=>[n("div",j,[s(U,{modelValue:a.value.queue,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.queue=t)},{default:i(()=>[l(" queue ")]),_:1},8,["modelValue"]),s(U,{modelValue:a.value.custom,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.custom=t)},{default:i(()=>[l(" custom content ")]),_:1},8,["modelValue"])]),n("div",z,[E,(d(),_(y,null,w($,t=>s(g,{key:t,modelValue:a.value.type,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.type=o),type:t,value:t},{default:i(()=>[l(m(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),n("div",L,[Q,(d(),_(y,null,w(T,t=>s(g,{key:t,modelValue:a.value.position,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value.position=o),type:t,value:t},{default:i(()=>[l(m(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),n("div",S,[Z,(d(),_(y,null,w(x,t=>s(g,{key:t,modelValue:a.value.align,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value.align=o),type:t,value:t},{default:i(()=>[l(m(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),n("div",G,[H,s(k,{modelValue:a.value.content,"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.content=t),placeholder:"content",clearable:""},null,8,["modelValue"])]),n("div",J,[K,n("div",M,[s(k,{modelValue:a.value.timeout,"onUpdate:modelValue":e[7]||(e[7]=t=>a.value.timeout=t),placeholder:"timeout",type:"number"},null,8,["modelValue"])])])]),_:1}),s(p,{title:"Base",snippets:f.base},{default:i(()=>[s(c,{ref:"toast_basic"},null,512),s(u,{onClick:e[8]||(e[8]=t=>{var o;return(o=r.$refs.toast_basic)==null?void 0:o.show("success","It is simple to use the toast.")})},{default:i(()=>[l(" show ")]),_:1})]),_:1},8,["snippets"]),s(p,{title:"Type",snippets:f.type},{default:i(()=>[s(c,{ref:"toast_type"},null,512),n("div",O,[s(u,{type:"success",onClick:e[9]||(e[9]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.success("This is the success toast.")})},{default:i(()=>[l(" success ")]),_:1}),s(u,{type:"info",onClick:e[10]||(e[10]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.info("This is the info toast.")})},{default:i(()=>[l(" info ")]),_:1}),s(u,{type:"warning",onClick:e[11]||(e[11]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.warning("This is the warning toast.")})},{default:i(()=>[l(" warning ")]),_:1}),s(u,{type:"error",onClick:e[12]||(e[12]=t=>{var o;return(o=r.$refs.toast_type)==null?void 0:o.error("This is the error toast.")})},{default:i(()=>[l(" error ")]),_:1})])]),_:1},8,["snippets"]),s(p,{title:"Custom",snippets:f.custom},{default:i(()=>[s(c,{ref:"toast_custom"},{default:i(({type:t})=>[n("div",W,[n("div",X,[n("div",Y,[n("div",{class:v(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),n("div",tt,[n("p",et," This is the custom "+m(t)+" toast. ",1),st])])])]),_:1},512),n("div",ot,[s(u,{type:"success",onClick:e[13]||(e[13]=t=>r.$refs.toast_custom.success("This is the success toast."))},{default:i(()=>[l(" success ")]),_:1}),s(u,{type:"info",onClick:e[14]||(e[14]=t=>r.$refs.toast_custom.info("This is the info toast."))},{default:i(()=>[l(" info ")]),_:1}),s(u,{type:"warning",onClick:e[15]||(e[15]=t=>r.$refs.toast_custom.warning("This is the warning toast."))},{default:i(()=>[l(" warning ")]),_:1}),s(u,{type:"error",onClick:e[16]||(e[16]=t=>r.$refs.toast_custom.error("This is the error toast."))},{default:i(()=>[l(" error ")]),_:1})])]),_:1},8,["snippets"]),s(p,{title:"Timeout",snippets:f.timeout},{default:i(()=>[s(c,{ref:"toast_timeout",timeout:500},null,512),n("div",it,[s(u,{onClick:e[17]||(e[17]=t=>{var o;return(o=r.$refs.toast_timeout)==null?void 0:o.info("This toast will disappear after 500ms.")})},{default:i(()=>[l(" 500 ms ")]),_:1})])]),_:1},8,["snippets"]),s(p,{title:"No Queue",snippets:f.queue},{default:i(()=>[s(c,{ref:"toast_queue",queue:!1},null,512),n("div",nt,[s(u,{onClick:e[18]||(e[18]=t=>r.$refs.toast_queue.success("This is the no queue toast."))},{default:i(()=>[l(" no queue ")]),_:1})])]),_:1},8,["snippets"]),s(p,{title:"Placement",snippets:f.placement},{default:i(()=>[n("div",lt,[s(c,{ref:"toast_top_left",position:"top",align:"left"},null,512),s(u,{onClick:e[19]||(e[19]=t=>{var o;return(o=r.$refs.toast_top_left)==null?void 0:o.success("This is the top left toast.")})},{default:i(()=>[l(" top-left ")]),_:1}),s(c,{ref:"toast_top_right",position:"top",align:"right"},null,512),s(u,{onClick:e[20]||(e[20]=t=>{var o;return(o=r.$refs.toast_top_right)==null?void 0:o.info("This is the top right toast.")})},{default:i(()=>[l(" top-right ")]),_:1}),s(c,{ref:"toast_bottom_left",position:"bottom",align:"left"},null,512),s(u,{onClick:e[21]||(e[21]=t=>{var o;return(o=r.$refs.toast_bottom_left)==null?void 0:o.warning("This is the bottom left toast.")})},{default:i(()=>[l(" bottom-left ")]),_:1}),s(c,{ref:"toast_bottom_right",position:"bottom",align:"right"},null,512),s(u,{onClick:e[22]||(e[22]=t=>{var o;return(o=r.$refs.toast_bottom_right)==null?void 0:o.error("This is the bottom right toast.")})},{default:i(()=>[l(" bottom-right ")]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{ft as default};
