import{r as C,f as q,w as n,o as d,l as e,K as c,c as m,b as o,n as _,m as a,t as T,g as V,e as h,s as g,u as v,F as w,h as y}from"./index-dd9b691d.js";import{_ as N}from"./PageWrap.vue_vue_type_script_setup_true_lang-560f32b6.js";import{_ as p}from"./Sample.vue_vue_type_script_setup_true_lang-aff07f86.js";import{P as D,r as k}from"./helper-45c5dd62.js";const I={key:0,class:"pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},A={class:"p-4"},P={class:"flex items-start"},F={class:"shrink-0"},z={class:"ml-3 w-0 flex-1 pt-0.5"},E={class:"text-sm font-medium text-gray-900"},K=o("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),L={class:"flex flex-wrap gap-2"},Q={class:"flex flex-wrap items-center gap-2"},R=o("div",{class:"w-20"}," type ",-1),S={class:"flex flex-wrap items-center gap-2"},j=o("div",{class:"w-20"}," position ",-1),G={class:"flex flex-wrap items-center gap-2"},H=o("div",{class:"w-20"}," align ",-1),J={class:"flex items-center gap-2"},M=o("div",{class:"w-20"}," content ",-1),O={class:"flex items-center"},W=o("div",{class:"w-20"}," timeout ",-1),X={class:"w-36"},Y={class:"space-x-4 space-y-3"},Z={class:"space-x-4 space-y-3"},tt={class:"pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},st={class:"flex items-start p-4"},et={class:"shrink-0"},ot={class:"ml-3 w-0 flex-1 pt-0.5"},it={class:"text-sm font-medium text-gray-900"},nt=o("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),at={class:"space-x-4 space-y-3"},lt={class:"space-x-4 space-y-3"},rt={class:"space-x-4 space-y-3"},ut={class:"space-x-4 space-y-3"},_t={__name:"ToastDemo",setup(ct){const f={base:[`<UToast ref="toast_basic" />
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
</UButton>`]},l=C({type:"success",timeout:2500,position:"top",align:"left",content:"This toast is very simple and easy to use.",queue:!0,custom:!1}),x=["success","info","warning","error"],b=["top","bottom"],B=["left","center","right"];return(r,s)=>{const u=y("UButton"),U=y("UCheckbox"),$=y("UInput");return d(),q(N,{title:"Toast Demo"},{default:n(()=>[e(D,null,{preview:n(()=>[e(c,{ref:"toast",type:l.value.type,timeout:l.value.timeout,queue:l.value.queue,position:l.value.position,align:l.value.align},{default:n(({type:t})=>[l.value.custom?(d(),m("div",I,[o("div",A,[o("div",P,[o("div",F,[o("div",{class:_(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),o("div",z,[o("p",E,[a(" This is the custom "),o("span",{class:_(["font-bold",{"text-success-400":t==="success","text-info-400":t==="info","text-warning-400":t==="warning","text-error-400":t==="error"}])},T(t),3),a(" toast. ")]),K])])])])):V("",!0)]),_:1},8,["type","timeout","queue","position","align"]),e(u,{onClick:s[0]||(s[0]=t=>r.$refs.toast.show(l.value.type,l.value.content))},{default:n(()=>[a(" show ")]),_:1})]),props:n(()=>[o("div",L,[e(U,{modelValue:l.value.queue,"onUpdate:modelValue":s[1]||(s[1]=t=>l.value.queue=t)},{default:n(()=>[a(" queue ")]),_:1},8,["modelValue"]),e(U,{modelValue:l.value.custom,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value.custom=t)},{default:n(()=>[a(" custom content ")]),_:1},8,["modelValue"])]),o("div",Q,[R,(d(),m(w,null,h(x,t=>e(g(v(k)(l.value,"type",t)),{key:t})),64))]),o("div",S,[j,(d(),m(w,null,h(b,t=>e(g(v(k)(l.value,"position",t)),{key:t})),64))]),o("div",G,[H,(d(),m(w,null,h(B,t=>e(g(v(k)(l.value,"align",t)),{key:t})),64))]),o("div",J,[M,e($,{modelValue:l.value.content,"onUpdate:modelValue":s[3]||(s[3]=t=>l.value.content=t),placeholder:"content",clearable:""},null,8,["modelValue"])]),o("div",O,[W,o("div",X,[e($,{modelValue:l.value.timeout,"onUpdate:modelValue":s[4]||(s[4]=t=>l.value.timeout=t),placeholder:"timeout",type:"number"},null,8,["modelValue"])])])]),_:1}),e(p,{title:"Base",snippets:f.base},{default:n(()=>[e(c,{ref:"toast_basic"},null,512),o("div",Y,[e(u,{onClick:s[5]||(s[5]=t=>{var i;return(i=r.$refs.toast_basic)==null?void 0:i.show("success","It is simple to use the toast.")})},{default:n(()=>[a(" show ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"Type",snippets:f.type},{default:n(()=>[e(c,{ref:"toast_type"},null,512),o("div",Z,[e(u,{type:"success",onClick:s[6]||(s[6]=t=>{var i;return(i=r.$refs.toast_type)==null?void 0:i.success("This is the success toast.")})},{default:n(()=>[a(" success ")]),_:1}),e(u,{type:"info",onClick:s[7]||(s[7]=t=>{var i;return(i=r.$refs.toast_type)==null?void 0:i.info("This is the info toast.")})},{default:n(()=>[a(" info ")]),_:1}),e(u,{type:"warning",onClick:s[8]||(s[8]=t=>{var i;return(i=r.$refs.toast_type)==null?void 0:i.warning("This is the warning toast.")})},{default:n(()=>[a(" warning ")]),_:1}),e(u,{type:"error",onClick:s[9]||(s[9]=t=>{var i;return(i=r.$refs.toast_type)==null?void 0:i.error("This is the error toast.")})},{default:n(()=>[a(" error ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"Custom",snippets:f.custom},{default:n(()=>[e(c,{ref:"toast_custom"},{default:n(({type:t})=>[o("div",tt,[o("div",st,[o("div",et,[o("div",{class:_(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),o("div",ot,[o("p",it," This is the custom "+T(t)+" toast. ",1),nt])])])]),_:1},512),o("div",at,[e(u,{type:"success",onClick:s[10]||(s[10]=t=>r.$refs.toast_custom.success("This is the success toast."))},{default:n(()=>[a(" success ")]),_:1}),e(u,{type:"info",onClick:s[11]||(s[11]=t=>r.$refs.toast_custom.info("This is the info toast."))},{default:n(()=>[a(" info ")]),_:1}),e(u,{type:"warning",onClick:s[12]||(s[12]=t=>r.$refs.toast_custom.warning("This is the warning toast."))},{default:n(()=>[a(" warning ")]),_:1}),e(u,{type:"error",onClick:s[13]||(s[13]=t=>r.$refs.toast_custom.error("This is the error toast."))},{default:n(()=>[a(" error ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"Timeout",snippets:f.timeout},{default:n(()=>[e(c,{ref:"toast_timeout",timeout:500},null,512),o("div",lt,[e(u,{onClick:s[14]||(s[14]=t=>{var i;return(i=r.$refs.toast_timeout)==null?void 0:i.info("This toast will disappear after 500ms.")})},{default:n(()=>[a(" 500 ms ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"No Queue",snippets:f.queue},{default:n(()=>[e(c,{ref:"toast_queue",queue:!1},null,512),o("div",rt,[e(u,{onClick:s[15]||(s[15]=t=>r.$refs.toast_queue.success("This is the no queue toast."))},{default:n(()=>[a(" no queue ")]),_:1})])]),_:1},8,["snippets"]),e(p,{title:"Placement",snippets:f.placement},{default:n(()=>[o("div",ut,[e(c,{ref:"toast_top_left",position:"top",align:"left"},null,512),e(u,{onClick:s[16]||(s[16]=t=>{var i;return(i=r.$refs.toast_top_left)==null?void 0:i.success("This is the top left toast.")})},{default:n(()=>[a(" top-left ")]),_:1}),e(c,{ref:"toast_top_right",position:"top",align:"right"},null,512),e(u,{onClick:s[17]||(s[17]=t=>{var i;return(i=r.$refs.toast_top_right)==null?void 0:i.info("This is the top right toast.")})},{default:n(()=>[a(" top-right ")]),_:1}),e(c,{ref:"toast_bottom_left",position:"bottom",align:"left"},null,512),e(u,{onClick:s[18]||(s[18]=t=>{var i;return(i=r.$refs.toast_bottom_left)==null?void 0:i.warning("This is the bottom left toast.")})},{default:n(()=>[a(" bottom-left ")]),_:1}),e(c,{ref:"toast_bottom_right",position:"bottom",align:"right"},null,512),e(u,{onClick:s[19]||(s[19]=t=>{var i;return(i=r.$refs.toast_bottom_right)==null?void 0:i.error("This is the bottom right toast.")})},{default:n(()=>[a(" bottom-right ")]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{_t as default};
