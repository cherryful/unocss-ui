import{_ as k,P as b}from"./Playground-b7a95378.js";import{_ as V}from"./Sample.vue_vue_type_script_setup_true_lang-d87805c9.js";import{E as U,c as f,y as l,k as o,F as m,l as w,a as p,b as s,t as c,i as _,A as a}from"./index-5b38dc66.js";const $={class:"h-full w-full flex items-center justify-center"},C={class:"flex gap-4"},P={class:"flex flex-wrap items-center gap-2"},B=s("div",{class:"w-24"}," placement ",-1),T={class:"flex flex-wrap items-center gap-2"},R=s("div",{class:"w-24"}," width ",-1),L={class:"flex flex-wrap items-center gap-2"},N=s("div",{class:"w-24"}," duration ",-1),E={class:"flex gap-4"},F=s("div",{class:"h-full w-full flex items-center justify-center"}," duration-600 ",-1),A=s("div",{class:"h-full w-full flex items-center justify-center"}," width-1/2 ",-1),S=s("div",{class:"h-full w-full flex items-center justify-center"}," width-90% ",-1),q={class:"flex gap-4"},z=s("div",{class:"h-full w-full flex items-center justify-center"}," Left Placement ",-1),G=s("div",{class:"h-full w-full flex items-center justify-center"}," Right Placement ",-1),H=s("div",{class:"h-full w-full flex items-center justify-center"}," Top Placement ",-1),I=s("div",{class:"h-full w-full flex items-center justify-center"}," Bottom Placement ",-1),Q={__name:"DrawerDemo",setup(J){const v={placement:[`<UDrawer v-model="drawer.left" placement="left">
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
</UDrawer>`]},n=U({show:!1,placement:"left",width:"md",duration:"200",content:"drawer content"}),d=U({left:!1,right:!1,top:!1,bottom:!1,duration:!1,width:!1,width2:!1}),x=["left","right","top","bottom"],y=["sm","md","lg","1/2","1/3","1/4","full"],g=["100","200","300","400","500","600"];return(D,e)=>{const j=w("UToast"),i=w("UDrawer"),h=w("URadio"),u=w("UButton");return p(),f(m,null,[l(k,null,{default:o(()=>[l(b,null,{preview:o(()=>[l(j,{ref:"toast"},null,512),l(i,{modelValue:n.show,"onUpdate:modelValue":[e[1]||(e[1]=t=>n.show=t),e[2]||(e[2]=t=>{var r;return(r=D.$refs.toast)==null?void 0:r.info(t)})],placement:n.placement,width:n.width,duration:n.duration},{default:o(()=>[s("div",$,[s("button",{class:"i-mdi:close h-6 w-6",onClick:e[0]||(e[0]=t=>n.show=!1)})])]),_:1},8,["modelValue","placement","width","duration"]),s("div",C,[s("button",{class:"rounded-md bg-indigo-500 px-2 py-1 text-white",onClick:e[3]||(e[3]=t=>n.show=!0)},c(n.placement),1)])]),props:o(()=>[s("div",P,[B,(p(),f(m,null,_(x,t=>l(h,{key:t,modelValue:n.placement,"onUpdate:modelValue":e[4]||(e[4]=r=>n.placement=r),value:t},{default:o(()=>[a(c(t),1)]),_:2},1032,["modelValue","value"])),64))]),s("div",T,[R,(p(),f(m,null,_(y,t=>l(h,{key:t,modelValue:n.width,"onUpdate:modelValue":e[5]||(e[5]=r=>n.width=r),value:t},{default:o(()=>[a(c(t),1)]),_:2},1032,["modelValue","value"])),64))]),s("div",L,[N,(p(),f(m,null,_(g,t=>l(h,{key:t,modelValue:n.duration,"onUpdate:modelValue":e[6]||(e[6]=r=>n.duration=r),value:t},{default:o(()=>[a(c(t),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),l(V,{title:"placement",snippets:v.placement},{default:o(()=>[s("div",E,[l(u,{onClick:e[7]||(e[7]=t=>d.left=!0)},{default:o(()=>[a(" left ")]),_:1}),l(u,{onClick:e[8]||(e[8]=t=>d.right=!0)},{default:o(()=>[a(" right ")]),_:1}),l(u,{onClick:e[9]||(e[9]=t=>d.top=!0)},{default:o(()=>[a(" top ")]),_:1}),l(u,{onClick:e[10]||(e[10]=t=>d.bottom=!0)},{default:o(()=>[a(" bottom ")]),_:1})])]),_:1},8,["snippets"]),l(V,{title:"duration",snippets:v.duration},{default:o(()=>[l(i,{modelValue:d.duration,"onUpdate:modelValue":e[11]||(e[11]=t=>d.duration=t),duration:"600"},{default:o(()=>[F]),_:1},8,["modelValue"]),l(u,{onClick:e[12]||(e[12]=t=>d.duration=!0)},{default:o(()=>[a(" duration-600 ")]),_:1})]),_:1},8,["snippets"]),l(V,{title:"width",snippets:v.width},{default:o(()=>[l(i,{modelValue:d.width,"onUpdate:modelValue":e[13]||(e[13]=t=>d.width=t),width:"1/2"},{default:o(()=>[A]),_:1},8,["modelValue"]),l(i,{modelValue:d.width2,"onUpdate:modelValue":e[14]||(e[14]=t=>d.width2=t),style:{width:"90%"}},{default:o(()=>[S]),_:1},8,["modelValue"]),s("div",q,[l(u,{onClick:e[15]||(e[15]=t=>d.width=!0)},{default:o(()=>[a(" width-1/2 ")]),_:1}),l(u,{onClick:e[16]||(e[16]=t=>d.width2=!0)},{default:o(()=>[a(" width-90% ")]),_:1})])]),_:1},8,["snippets"])]),_:1}),l(i,{modelValue:d.left,"onUpdate:modelValue":e[17]||(e[17]=t=>d.left=t),placement:"left"},{default:o(()=>[z]),_:1},8,["modelValue"]),l(i,{modelValue:d.right,"onUpdate:modelValue":e[18]||(e[18]=t=>d.right=t),placement:"right"},{default:o(()=>[G]),_:1},8,["modelValue"]),l(i,{modelValue:d.top,"onUpdate:modelValue":e[19]||(e[19]=t=>d.top=t),placement:"top"},{default:o(()=>[H]),_:1},8,["modelValue"]),l(i,{modelValue:d.bottom,"onUpdate:modelValue":e[20]||(e[20]=t=>d.bottom=t),placement:"bottom"},{default:o(()=>[I]),_:1},8,["modelValue"])],64)}}};export{Q as default};
