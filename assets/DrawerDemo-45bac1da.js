import{G as U,c as f,y as l,k as o,H as u,F as m,a as w,b as d,t as p,i as h,A as a,l as V}from"./index-66b3137e.js";import{_ as k,P as $}from"./Playground-8d1b6587.js";import{_}from"./Sample.vue_vue_type_script_setup_true_lang-9489adb4.js";const b={class:"h-full w-full flex items-center justify-center"},C={class:"flex gap-4"},P={class:"flex flex-wrap items-center gap-2"},B=d("div",{class:"w-24"}," placement ",-1),T={class:"flex flex-wrap items-center gap-2"},R=d("div",{class:"w-24"}," width ",-1),L={class:"flex flex-wrap items-center gap-2"},N=d("div",{class:"w-24"}," duration ",-1),F={class:"flex gap-4"},A=d("div",{class:"h-full w-full flex items-center justify-center"}," duration-600 ",-1),E=d("div",{class:"h-full w-full flex items-center justify-center"}," width-1/2 ",-1),G=d("div",{class:"h-full w-full flex items-center justify-center"}," width-90% ",-1),H={class:"flex gap-4"},S=d("div",{class:"h-full w-full flex items-center justify-center"}," Left Placement ",-1),q=d("div",{class:"h-full w-full flex items-center justify-center"}," Right Placement ",-1),z=d("div",{class:"h-full w-full flex items-center justify-center"}," Top Placement ",-1),I=d("div",{class:"h-full w-full flex items-center justify-center"}," Bottom Placement ",-1),Q={__name:"DrawerDemo",setup(J){const c={placement:[`<UDrawer v-model="drawer.left" placement="left">
  <div class="h-full w-full flex items-center justify-center">
    Left Placement
  </div>
</UDrawer>`,`<UDrawer v-model="drawer.right" placement="right">
  <div class="h-full w-full flex items-center justify-center">
    Right Placement
  </div>
</UDrawer>`,`<UDrawer v-model="drawer.top" placement="top">
  <div class="h-full w-full flex items-center justify-center">
    Top Placement
  </div>
</UDrawer>`,`<UDrawer v-model="drawer.bottom" placement="bottom">
  <div class="h-full w-full flex items-center justify-center">
    Bottom Placement
  </div>
</UDrawer>`],duration:[`<UDrawer v-model="drawer.duration" duration="600">
  <div class="h-full w-full flex items-center justify-center">
    duration-600
  </div>
</UDrawer>`],width:[`<UDrawer v-model="drawer.width" width="1/2">
  <div class="h-full w-full flex items-center justify-center">
    width-1/2
  </div>
</UDrawer>`,`<UDrawer v-model="drawer.width2" style="width: 90%;">
  <div class="h-full w-full flex items-center justify-center">
    width-90%
  </div>
</UDrawer>`]},n=U({show:!1,placement:"left",width:"md",duration:"200",content:"drawer content"}),s=U({left:!1,right:!1,top:!1,bottom:!1,duration:!1,width:!1,width2:!1}),x=["left","right","top","bottom"],y=["sm","md","lg","1/2","1/3","1/4","full"],g=["100","200","300","400","500","600"];return(D,e)=>{const j=V("UToast"),v=V("URadio"),r=V("UButton");return w(),f(m,null,[l(k,null,{default:o(()=>[l($,null,{preview:o(()=>[l(j,{ref:"toast"},null,512),l(u,{modelValue:n.show,"onUpdate:modelValue":e[1]||(e[1]=t=>n.show=t),placement:n.placement,width:n.width,duration:n.duration,onClose:e[2]||(e[2]=t=>{var i;return(i=D.$refs.toast)==null?void 0:i.success("close")})},{default:o(()=>[d("div",b,[d("button",{class:"i-mdi:close h-6 w-6",onClick:e[0]||(e[0]=t=>n.show=!1)})])]),_:1},8,["modelValue","placement","width","duration"]),d("div",C,[d("button",{class:"rounded-md bg-indigo-500 px-2 py-1 text-white",onClick:e[3]||(e[3]=t=>n.show=!0)},p(n.placement),1)])]),props:o(()=>[d("div",P,[B,(w(),f(m,null,h(x,t=>l(v,{key:t,modelValue:n.placement,"onUpdate:modelValue":e[4]||(e[4]=i=>n.placement=i),value:t},{default:o(()=>[a(p(t),1)]),_:2},1032,["modelValue","value"])),64))]),d("div",T,[R,(w(),f(m,null,h(y,t=>l(v,{key:t,modelValue:n.width,"onUpdate:modelValue":e[5]||(e[5]=i=>n.width=i),value:t},{default:o(()=>[a(p(t),1)]),_:2},1032,["modelValue","value"])),64))]),d("div",L,[N,(w(),f(m,null,h(g,t=>l(v,{key:t,modelValue:n.duration,"onUpdate:modelValue":e[6]||(e[6]=i=>n.duration=i),value:t},{default:o(()=>[a(p(t),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),l(_,{title:"placement",snippets:c.placement},{default:o(()=>[d("div",F,[l(r,{onClick:e[7]||(e[7]=t=>s.left=!0)},{default:o(()=>[a(" left ")]),_:1}),l(r,{onClick:e[8]||(e[8]=t=>s.right=!0)},{default:o(()=>[a(" right ")]),_:1}),l(r,{onClick:e[9]||(e[9]=t=>s.top=!0)},{default:o(()=>[a(" top ")]),_:1}),l(r,{onClick:e[10]||(e[10]=t=>s.bottom=!0)},{default:o(()=>[a(" bottom ")]),_:1})])]),_:1},8,["snippets"]),l(_,{title:"duration",snippets:c.duration},{default:o(()=>[l(u,{modelValue:s.duration,"onUpdate:modelValue":e[11]||(e[11]=t=>s.duration=t),duration:"600"},{default:o(()=>[A]),_:1},8,["modelValue"]),l(r,{onClick:e[12]||(e[12]=t=>s.duration=!0)},{default:o(()=>[a(" duration-600 ")]),_:1})]),_:1},8,["snippets"]),l(_,{title:"width",snippets:c.width},{default:o(()=>[l(u,{modelValue:s.width,"onUpdate:modelValue":e[13]||(e[13]=t=>s.width=t),width:"1/2"},{default:o(()=>[E]),_:1},8,["modelValue"]),l(u,{modelValue:s.width2,"onUpdate:modelValue":e[14]||(e[14]=t=>s.width2=t),style:{width:"90%"}},{default:o(()=>[G]),_:1},8,["modelValue"]),d("div",H,[l(r,{onClick:e[15]||(e[15]=t=>s.width=!0)},{default:o(()=>[a(" width-1/2 ")]),_:1}),l(r,{onClick:e[16]||(e[16]=t=>s.width2=!0)},{default:o(()=>[a(" width-90% ")]),_:1})])]),_:1},8,["snippets"])]),_:1}),l(u,{modelValue:s.left,"onUpdate:modelValue":e[17]||(e[17]=t=>s.left=t),placement:"left"},{default:o(()=>[S]),_:1},8,["modelValue"]),l(u,{modelValue:s.right,"onUpdate:modelValue":e[18]||(e[18]=t=>s.right=t),placement:"right"},{default:o(()=>[q]),_:1},8,["modelValue"]),l(u,{modelValue:s.top,"onUpdate:modelValue":e[19]||(e[19]=t=>s.top=t),placement:"top"},{default:o(()=>[z]),_:1},8,["modelValue"]),l(u,{modelValue:s.bottom,"onUpdate:modelValue":e[20]||(e[20]=t=>s.bottom=t),placement:"bottom"},{default:o(()=>[I]),_:1},8,["modelValue"])],64)}}};export{Q as default};
