import{r as x,d as B,k as i,a as m,y as s,a0 as c,c as _,b as l,n as w,A as a,t as p,j as V,i as y,F as b,l as g}from"./index-676d8611.js";import{_ as C,P as q}from"./Playground-88bc61ef.js";import{_ as d}from"./Sample.vue_vue_type_script_setup_true_lang-f242cf4b.js";const N={key:0,class:"pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},I={class:"p-4"},P={class:"flex items-start"},A={class:"shrink-0"},D={class:"ml-3 w-0 flex-1 pt-0.5"},F={class:"text-sm font-medium text-gray-900"},R=l("p",{class:"mt-1 text-sm text-gray-500"}," Anyone with a link can now view this file. ",-1),j={class:"flex flex-wrap gap-2"},z={class:"flex flex-wrap items-center gap-2"},E=l("div",{class:"w-20"}," type ",-1),L={class:"flex flex-wrap items-center gap-2"},Q=l("div",{class:"w-20"}," position ",-1),S={class:"flex flex-wrap items-center gap-2"},G=l("div",{class:"w-20"}," align ",-1),H={class:"flex items-center gap-2"},J=l("div",{class:"w-20"}," content ",-1),K={class:"flex items-center"},M=l("div",{class:"w-20"}," timeout ",-1),O={class:"w-36"},W={class:"flex gap-4"},X={class:"pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},Y={class:"flex items-start p-4"},Z={class:"shrink-0"},tt={class:"ml-3 w-0 flex-1 pt-0.5"},et={class:"text-sm font-medium text-gray-900"},st={class:"mt-1 text-sm text-gray-500"},ot={class:"flex gap-4"},it={class:"flex gap-4"},lt={class:"flex gap-4"},nt={class:"flex gap-4"},ft={__name:"ToastDemo",setup(at){const f={base:[`<UToast ref="toast_basic" />
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
</div>`],closeable:[`<UToast ref="toast_closeable" closeable />
<UButton @click="$refs.toast_closeable?.info('This toast can be closed manually.')">
  closeable
</UButton>`],timeout:[`<UToast ref="toast_timeout" :timeout="500" />
<UButton @click="$refs.toast_timeout?.info('This toast will disappear after 500ms.')">
  500ms
</UButton>`],queue:[`<UToast ref="toast_queue" :queue="false" />
<UButton @click="$refs.toast_queue.success('This is the no queue toast.')">
  no queue
</UButton>`],custom:[`<UToast ref="toast_custom" v-slot="{ type, content }">
<div class="pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
  <div class="flex items-start p-4">
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
        {{ content }}
      </p>
    </div>
  </div>
</div>
</UToast>
<div class="flex gap-4">
<UButton
  type="success"
  @click="$refs.toast_custom.success('This is the custom success toast content.')"
>
  success
</UButton>
<UButton
  type="info"
  @click="$refs.toast_custom.info('This is the custom info toast content.')"
>
  info
</UButton>
<UButton
  type="warning"
  @click="$refs.toast_custom.warning('This is the custom warning toast content.')"
>
  warning
</UButton>
<UButton
  type="error"
  @click="$refs.toast_custom.error('This is the custom error toast content.')"
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
</UButton>`]},n=x({type:"success",timeout:2500,position:"top",align:"left",content:"This toast is very simple and easy to use.",queue:!0,closeable:!1,custom:!1}),k=["success","info","warning","error"],$=["top","bottom"],T=["left","center","right"];return(u,e)=>{const r=g("UButton"),v=g("UCheckbox"),h=g("URadio"),U=g("UInput");return m(),B(C,null,{default:i(()=>[s(q,null,{preview:i(()=>[s(c,{ref:"toast",type:n.value.type,timeout:n.value.timeout,queue:n.value.queue,position:n.value.position,align:n.value.align,closeable:n.value.closeable},{default:i(({type:t})=>[n.value.custom?(m(),_("div",N,[l("div",I,[l("div",P,[l("div",A,[l("div",{class:w(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),l("div",D,[l("p",F,[a(" This is the custom "),l("span",{class:w(["font-bold",{"text-success-400":t==="success","text-info-400":t==="info","text-warning-400":t==="warning","text-error-400":t==="error"}])},p(t),3),a(" toast. ")]),R])])])])):V("",!0)]),_:1},8,["type","timeout","queue","position","align","closeable"]),s(r,{onClick:e[0]||(e[0]=t=>u.$refs.toast.show(n.value.type,n.value.content))},{default:i(()=>[a(" show ")]),_:1})]),props:i(()=>[l("div",j,[s(v,{modelValue:n.value.queue,"onUpdate:modelValue":e[1]||(e[1]=t=>n.value.queue=t)},{default:i(()=>[a(" queue ")]),_:1},8,["modelValue"]),s(v,{modelValue:n.value.closeable,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value.closeable=t)},{default:i(()=>[a(" closeable ")]),_:1},8,["modelValue"]),s(v,{modelValue:n.value.custom,"onUpdate:modelValue":e[3]||(e[3]=t=>n.value.custom=t)},{default:i(()=>[a(" custom content ")]),_:1},8,["modelValue"])]),l("div",z,[E,(m(),_(b,null,y(k,t=>s(h,{key:t,modelValue:n.value.type,"onUpdate:modelValue":e[4]||(e[4]=o=>n.value.type=o),type:t,value:t},{default:i(()=>[a(p(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),l("div",L,[Q,(m(),_(b,null,y($,t=>s(h,{key:t,modelValue:n.value.position,"onUpdate:modelValue":e[5]||(e[5]=o=>n.value.position=o),type:t,value:t},{default:i(()=>[a(p(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),l("div",S,[G,(m(),_(b,null,y(T,t=>s(h,{key:t,modelValue:n.value.align,"onUpdate:modelValue":e[6]||(e[6]=o=>n.value.align=o),type:t,value:t},{default:i(()=>[a(p(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),l("div",H,[J,s(U,{modelValue:n.value.content,"onUpdate:modelValue":e[7]||(e[7]=t=>n.value.content=t),placeholder:"content",clearable:""},null,8,["modelValue"])]),l("div",K,[M,l("div",O,[s(U,{modelValue:n.value.timeout,"onUpdate:modelValue":e[8]||(e[8]=t=>n.value.timeout=t),placeholder:"timeout",type:"number"},null,8,["modelValue"])])])]),_:1}),s(d,{title:"Base",snippets:f.base},{default:i(()=>[s(c,{ref:"toast_basic"},null,512),s(r,{onClick:e[9]||(e[9]=t=>{var o;return(o=u.$refs.toast_basic)==null?void 0:o.show("success","It is simple to use the toast.")})},{default:i(()=>[a(" show ")]),_:1})]),_:1},8,["snippets"]),s(d,{title:"Type",snippets:f.type},{default:i(()=>[s(c,{ref:"toast_type"},null,512),l("div",W,[s(r,{type:"success",onClick:e[10]||(e[10]=t=>{var o;return(o=u.$refs.toast_type)==null?void 0:o.success("This is the success toast.")})},{default:i(()=>[a(" success ")]),_:1}),s(r,{type:"info",onClick:e[11]||(e[11]=t=>{var o;return(o=u.$refs.toast_type)==null?void 0:o.info("This is the info toast.")})},{default:i(()=>[a(" info ")]),_:1}),s(r,{type:"warning",onClick:e[12]||(e[12]=t=>{var o;return(o=u.$refs.toast_type)==null?void 0:o.warning("This is the warning toast.")})},{default:i(()=>[a(" warning ")]),_:1}),s(r,{type:"error",onClick:e[13]||(e[13]=t=>{var o;return(o=u.$refs.toast_type)==null?void 0:o.error("This is the error toast.")})},{default:i(()=>[a(" error ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Custom",snippets:f.custom},{default:i(()=>[s(c,{ref:"toast_custom"},{default:i(({type:t,content:o})=>[l("div",X,[l("div",Y,[l("div",Z,[l("div",{class:w(["h-6 w-6",{"i-mdi:check-circle text-success-400":t==="success","i-mdi:information-outline text-info-400":t==="info","i-mdi:alert-outline text-warning-400":t==="warning","i-mdi:alert-circle-outline text-error-400":t==="error"}])},null,2)]),l("div",tt,[l("p",et," This is the custom "+p(t)+" toast. ",1),l("p",st,p(o),1)])])])]),_:1},512),l("div",ot,[s(r,{type:"success",onClick:e[14]||(e[14]=t=>u.$refs.toast_custom.success("This is the custom success toast content."))},{default:i(()=>[a(" success ")]),_:1}),s(r,{type:"info",onClick:e[15]||(e[15]=t=>u.$refs.toast_custom.info("This is the custom info toast content."))},{default:i(()=>[a(" info ")]),_:1}),s(r,{type:"warning",onClick:e[16]||(e[16]=t=>u.$refs.toast_custom.warning("This is the custom warning toast content."))},{default:i(()=>[a(" warning ")]),_:1}),s(r,{type:"error",onClick:e[17]||(e[17]=t=>u.$refs.toast_custom.error("This is the custom error toast content."))},{default:i(()=>[a(" error ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Timeout",snippets:f.timeout},{default:i(()=>[s(c,{ref:"toast_timeout",timeout:500},null,512),l("div",it,[s(r,{onClick:e[18]||(e[18]=t=>{var o;return(o=u.$refs.toast_timeout)==null?void 0:o.info("This toast will disappear after 500ms.")})},{default:i(()=>[a(" 500 ms ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Closeable",snippets:f.closeable},{default:i(()=>[s(c,{ref:"toast_closeable",closeable:""},null,512),s(r,{onClick:e[19]||(e[19]=t=>{var o;return(o=u.$refs.toast_closeable)==null?void 0:o.info("This toast can be closed manually.")})},{default:i(()=>[a(" closeable ")]),_:1})]),_:1},8,["snippets"]),s(d,{title:"No Queue",snippets:f.queue},{default:i(()=>[s(c,{ref:"toast_queue",queue:!1},null,512),l("div",lt,[s(r,{onClick:e[20]||(e[20]=t=>u.$refs.toast_queue.success("This is the no queue toast."))},{default:i(()=>[a(" no queue ")]),_:1})])]),_:1},8,["snippets"]),s(d,{title:"Placement",snippets:f.placement},{default:i(()=>[l("div",nt,[s(c,{ref:"toast_top_left",position:"top",align:"left"},null,512),s(r,{onClick:e[21]||(e[21]=t=>{var o;return(o=u.$refs.toast_top_left)==null?void 0:o.success("This is the top left toast.")})},{default:i(()=>[a(" top-left ")]),_:1}),s(c,{ref:"toast_top_right",position:"top",align:"right"},null,512),s(r,{onClick:e[22]||(e[22]=t=>{var o;return(o=u.$refs.toast_top_right)==null?void 0:o.info("This is the top right toast.")})},{default:i(()=>[a(" top-right ")]),_:1}),s(c,{ref:"toast_bottom_left",position:"bottom",align:"left"},null,512),s(r,{onClick:e[23]||(e[23]=t=>{var o;return(o=u.$refs.toast_bottom_left)==null?void 0:o.warning("This is the bottom left toast.")})},{default:i(()=>[a(" bottom-left ")]),_:1}),s(c,{ref:"toast_bottom_right",position:"bottom",align:"right"},null,512),s(r,{onClick:e[24]||(e[24]=t=>{var o;return(o=u.$refs.toast_bottom_right)==null?void 0:o.error("This is the bottom right toast.")})},{default:i(()=>[a(" bottom-right ")]),_:1})])]),_:1},8,["snippets"])]),_:1})}}};export{ft as default};
