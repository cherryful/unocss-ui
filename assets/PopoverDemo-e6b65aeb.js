import{r as b,d as T,k as e,a as h,y as t,V as p,A as l,t as f,b as n,c as m,i as _,F as P,l as c}from"./index-c6c3da0b.js";import{_ as k,P as $}from"./Playground-9949f396.js";import{_ as v}from"./Sample.vue_vue_type_script_setup_true_lang-05a08275.js";const w=n("div",{class:"px-4 py-2"}," The content of the UPopover. ",-1),A={class:"flex gap-3"},B={class:"flex flex-wrap items-center gap-2"},C=n("div",{class:"w-16"}," position ",-1),N={class:"flex flex-wrap items-center gap-2"},D=n("div",{class:"w-16"}," trigger ",-1),F={class:"flex gap-4"},O=n("div",{class:"px-4 py-2"}," The content of the UPopover. ",-1),R=n("div",{class:"px-4 py-2"}," The content of the UPopover. ",-1),W={class:"flex gap-4"},E=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),L=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),S=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),Y=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),j=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),q=n("div",{class:"px-4 py-2"}," You can close the popover by clicking inside. ",-1),z=n("div",{class:"px-4 py-2"}," When hover, you need to click outside to close it. ",-1),G=n("div",{class:"px-4 py-2"}," When hover, you can use the mouse to access this panel. ",-1),H=n("div",{class:"px-4 py-2"}," The content of the Popover. ",-1),Q={__name:"PopoverDemo",setup(I){const s=b({position:"auto",trigger:"click",dissmissable:!1,sustain:!1,hoverAlive:!1,event:!1}),r={trigger:[`<UPopover trigger="hover">
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
</UPopover>`],dissmissable:[],sustain:[],hoverAlive:[],events:[]},U=["auto","left","right","top","bottom"],y=["click","hover"];return(d,i)=>{const x=c("UButton"),u=c("UCheckbox"),g=c("URadio"),V=c("UToast");return h(),T(k,null,{default:e(()=>[t($,null,{preview:e(()=>[t(p,{position:s.value.position,trigger:s.value.trigger,dissmissable:s.value.dissmissable,sustain:s.value.sustain,"hover-alive":s.value.hoverAlive,onOpen:i[0]||(i[0]=o=>{var a;return s.value.event&&((a=d.$refs.toast)==null?void 0:a.info("open"))}),onClose:i[1]||(i[1]=o=>{var a;return s.value.event&&((a=d.$refs.toast)==null?void 0:a.info("close"))})},{content:e(()=>[w]),default:e(()=>[t(x,null,{default:e(()=>[l(f(s.value.trigger),1)]),_:1})]),_:1},8,["position","trigger","dissmissable","sustain","hover-alive"])]),props:e(()=>[n("div",A,[t(u,{modelValue:s.value.dissmissable,"onUpdate:modelValue":i[2]||(i[2]=o=>s.value.dissmissable=o)},{default:e(()=>[l(" dissmissable ")]),_:1},8,["modelValue"]),t(u,{modelValue:s.value.sustain,"onUpdate:modelValue":i[3]||(i[3]=o=>s.value.sustain=o)},{default:e(()=>[l(" sustain ")]),_:1},8,["modelValue"]),t(u,{modelValue:s.value.hoverAlive,"onUpdate:modelValue":i[4]||(i[4]=o=>s.value.hoverAlive=o)},{default:e(()=>[l(" hover-alive ")]),_:1},8,["modelValue"]),t(u,{modelValue:s.value.event,"onUpdate:modelValue":i[5]||(i[5]=o=>s.value.event=o)},{default:e(()=>[l(" with event ")]),_:1},8,["modelValue"])]),n("div",B,[C,(h(),m(P,null,_(U,o=>t(g,{key:o,modelValue:s.value.position,"onUpdate:modelValue":i[6]||(i[6]=a=>s.value.position=a),type:o,value:o},{default:e(()=>[l(f(o),1)]),_:2},1032,["modelValue","type","value"])),64))]),n("div",N,[D,(h(),m(P,null,_(y,o=>t(g,{key:o,modelValue:s.value.trigger,"onUpdate:modelValue":i[7]||(i[7]=a=>s.value.trigger=a),type:o,value:o},{default:e(()=>[l(f(o),1)]),_:2},1032,["modelValue","type","value"])),64))])]),_:1}),t(v,{title:"trigger",snippets:r.trigger},{default:e(()=>[n("div",F,[t(p,{trigger:"hover"},{content:e(()=>[O]),default:e(()=>[l(" hover ")]),_:1}),t(p,{trigger:"click"},{content:e(()=>[R]),default:e(()=>[l(" click ")]),_:1})])]),_:1},8,["snippets"]),t(v,{title:"position",snippets:r.position},{default:e(()=>[n("div",W,[t(p,{trigger:"hover"},{content:e(()=>[E]),default:e(()=>[l(" auto ")]),_:1}),t(p,{trigger:"hover",position:"left"},{content:e(()=>[L]),default:e(()=>[l(" left ")]),_:1}),t(p,{trigger:"hover",position:"right"},{content:e(()=>[S]),default:e(()=>[l(" right ")]),_:1}),t(p,{trigger:"hover",position:"top"},{content:e(()=>[Y]),default:e(()=>[l(" top ")]),_:1}),t(p,{trigger:"hover",position:"bottom"},{content:e(()=>[j]),default:e(()=>[l(" bottom ")]),_:1})])]),_:1},8,["snippets"]),t(v,{title:"dissmissable",snippets:r.dissmissable},{default:e(()=>[t(p,{trigger:"click",dissmissable:""},{content:e(()=>[q]),default:e(()=>[l(" dissmissable ")]),_:1})]),_:1},8,["snippets"]),t(v,{title:"sustain",snippets:r.sustain},{default:e(()=>[t(p,{trigger:"hover",sustain:""},{content:e(()=>[z]),default:e(()=>[l(" hover & sustain ")]),_:1})]),_:1},8,["snippets"]),t(v,{title:"hover-alive",snippets:r.sustain},{default:e(()=>[t(p,{trigger:"hover","hover-alive":""},{content:e(()=>[G]),default:e(()=>[l(" hover & hover-alive ")]),_:1})]),_:1},8,["snippets"]),t(v,{title:"events",snippets:r.events},{default:e(()=>[t(V,{ref:"toast"},null,512),t(p,{onOpen:i[8]||(i[8]=o=>{var a;return(a=d.$refs.toast)==null?void 0:a.info("open")}),onClose:i[9]||(i[9]=o=>{var a;return(a=d.$refs.toast)==null?void 0:a.info("close")})},{content:e(()=>[H]),default:e(()=>[l(" events ")]),_:1})]),_:1},8,["snippets"])]),_:1})}}};export{Q as default};
