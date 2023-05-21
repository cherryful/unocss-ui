import{r as b,f as T,w as e,o as h,l as t,J as p,q as l,t as f,b as n,c as m,e as _,F as U,i as c}from"./index-1c61a7e1.js";import{_ as k,P as $}from"./Playground-8262a633.js";import{_ as v}from"./Sample.vue_vue_type_script_setup_true_lang-f964f82c.js";const w=n("div",{class:"px-4 py-2"}," The content of the UPopover. ",-1),B={class:"flex gap-3"},C={class:"flex flex-wrap items-center gap-2"},A=n("div",{class:"w-16"}," position ",-1),N={class:"flex flex-wrap items-center gap-2"},D=n("div",{class:"w-16"}," trigger ",-1),F={class:"flex gap-4"},O=n("div",{class:"px-4 py-2"}," The content of the UPopover. ",-1),R=n("div",{class:"px-4 py-2"}," The content of the UPopover. ",-1),W={class:"flex gap-4"},q=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),E=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),J=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),L=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),S=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),Y=n("div",{class:"px-4 py-2"}," You can close the popover by clicking inside. ",-1),j=n("div",{class:"px-4 py-2"}," When hover, you need to click outside to close it. ",-1),z=n("div",{class:"px-4 py-2"}," When hover, you can use the mouse to access this panel. ",-1),G=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),Q={__name:"PopoverDemo",setup(H){const s=b({position:"auto",trigger:"click",dissmissable:!1,sustain:!1,hoverAlive:!1,event:!1}),r={trigger:[`<UPopover trigger="hover">
  hover
  <template #content>
    <div class="px-4 py-2">
      The content of the UPopover.
    </div>
  </template>
</UPopover>`,`<UPopover trigger="click">
  click
  <template #content>
    <div class="px-4 py-2">
      The content of the UPopover.
    </div>
  </template>
</UPopover>`],position:[`<UPopover trigger="hover">
  auto
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,`<UPopover trigger="hover" position="left">
  left
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,`<UPopover trigger="hover" position="right">
  right
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,`<UPopover trigger="hover" position="top">
  top
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,`<UPopover trigger="hover" position="bottom">
  bottom
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`],dissmissable:[],sustain:[],hoverAlive:[],events:[]},P=["auto","left","right","top","bottom"],y=["click","hover"];return(d,i)=>{const x=c("UButton"),u=c("UCheckbox"),g=c("URadio"),V=c("UToast");return h(),T(k,null,{default:e(()=>[t($,null,{preview:e(()=>[t(p,{position:s.value.position,trigger:s.value.trigger,dissmissable:s.value.dissmissable,sustain:s.value.sustain,"hover-alive":s.value.hoverAlive,onOpen:i[0]||(i[0]=o=>{var a;return s.value.event&&((a=d.$refs.toast)==null?void 0:a.info("open"))}),onClose:i[1]||(i[1]=o=>{var a;return s.value.event&&((a=d.$refs.toast)==null?void 0:a.info("close"))})},{content:e(()=>[w]),default:e(()=>[t(x,null,{default:e(()=>[l(f(s.value.trigger),1)]),_:1})]),_:1},8,["position","trigger","dissmissable","sustain","hover-alive"])]),props:e(()=>[n("div",B,[t(u,{modelValue:s.value.dissmissable,"onUpdate:modelValue":i[2]||(i[2]=o=>s.value.dissmissable=o)},{default:e(()=>[l(" dissmissable ")]),_:1},8,["modelValue"]),t(u,{modelValue:s.value.sustain,"onUpdate:modelValue":i[3]||(i[3]=o=>s.value.sustain=o)},{default:e(()=>[l(" sustain ")]),_:1},8,["modelValue"]),t(u,{modelValue:s.value.hoverAlive,"onUpdate:modelValue":i[4]||(i[4]=o=>s.value.hoverAlive=o)},{default:e(()=>[l(" hover-alive ")]),_:1},8,["modelValue"]),t(u,{modelValue:s.value.event,"onUpdate:modelValue":i[5]||(i[5]=o=>s.value.event=o)},{default:e(()=>[l(" with event ")]),_:1},8,["modelValue"])]),n("div",C,[A,(h(),m(U,null,_(P,o=>t(g,{key:o,modelValue:s.value.position,"onUpdate:modelValue":[i[6]||(i[6]=a=>s.value.position=a),a=>s.value.position=o],type:o,value:o},{default:e(()=>[l(f(o),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),n("div",N,[D,(h(),m(U,null,_(y,o=>t(g,{key:o,modelValue:s.value.trigger,"onUpdate:modelValue":[i[7]||(i[7]=a=>s.value.trigger=a),a=>s.value.trigger=o],type:o,value:o},{default:e(()=>[l(f(o),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))])]),_:1}),t(v,{title:"trigger",snippets:r.trigger},{default:e(()=>[n("div",F,[t(p,{trigger:"hover"},{content:e(()=>[O]),default:e(()=>[l(" hover ")]),_:1}),t(p,{trigger:"click"},{content:e(()=>[R]),default:e(()=>[l(" click ")]),_:1})])]),_:1},8,["snippets"]),t(v,{title:"position",snippets:r.position},{default:e(()=>[n("div",W,[t(p,{trigger:"hover"},{content:e(()=>[q]),default:e(()=>[l(" auto ")]),_:1}),t(p,{trigger:"hover",position:"left"},{content:e(()=>[E]),default:e(()=>[l(" left ")]),_:1}),t(p,{trigger:"hover",position:"right"},{content:e(()=>[J]),default:e(()=>[l(" right ")]),_:1}),t(p,{trigger:"hover",position:"top"},{content:e(()=>[L]),default:e(()=>[l(" top ")]),_:1}),t(p,{trigger:"hover",position:"bottom"},{content:e(()=>[S]),default:e(()=>[l(" bottom ")]),_:1})])]),_:1},8,["snippets"]),t(v,{title:"dissmissable",snippets:r.dissmissable},{default:e(()=>[t(p,{trigger:"click",dissmissable:""},{content:e(()=>[Y]),default:e(()=>[l(" dissmissable ")]),_:1})]),_:1},8,["snippets"]),t(v,{title:"sustain",snippets:r.sustain},{default:e(()=>[t(p,{trigger:"hover",sustain:""},{content:e(()=>[j]),default:e(()=>[l(" hover & sustain ")]),_:1})]),_:1},8,["snippets"]),t(v,{title:"hover-alive",snippets:r.sustain},{default:e(()=>[t(p,{trigger:"hover","hover-alive":""},{content:e(()=>[z]),default:e(()=>[l(" hover & hover-alive ")]),_:1})]),_:1},8,["snippets"]),t(v,{title:"events",snippets:r.events},{default:e(()=>[t(V,{ref:"toast"},null,512),t(p,{onOpen:i[8]||(i[8]=o=>{var a;return(a=d.$refs.toast)==null?void 0:a.info("open")}),onClose:i[9]||(i[9]=o=>{var a;return(a=d.$refs.toast)==null?void 0:a.info("close")})},{content:e(()=>[G]),default:e(()=>[l(" events ")]),_:1})]),_:1},8,["snippets"])]),_:1})}}};export{Q as default};
