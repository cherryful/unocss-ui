import{r as m,c,y as l,k as e,F as V,l as s,a as f,b as o,t as d,A as v}from"./index-726212d7.js";const x={__name:"TabsDemo",setup(p){const a=m(0),i=m("vue");return(_,t)=>{const u=s("UTabPane"),r=s("UTabs");return f(),c(V,null,[l(r,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=n=>a.value=n),class:"my-1 border rounded-lg bg-white"},{default:e(()=>[l(u,{title:"Vue",icon:"i-mdi:vuejs"},{default:e(()=>[o("div",null,"modelValue: "+d(a.value),1)]),_:1}),l(u,{title:"React",icon:"i-mdi:react"},{default:e(()=>[o("div",null,"modelValue: "+d(a.value),1)]),_:1})]),_:1},8,["modelValue"]),l(r,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=n=>a.value=n),type:"flex",class:"my-1 border rounded-lg bg-white"},{default:e(()=>[l(u,{title:"Vue",icon:"i-mdi:vuejs"},{default:e(()=>[o("div",null,"modelValue: "+d(a.value),1)]),_:1}),l(u,{title:"React",icon:"i-mdi:react"},{default:e(()=>[o("div",null,"modelValue: "+d(a.value),1)]),_:1})]),_:1},8,["modelValue"]),l(r,{modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n)},{prefix:e(()=>[v(" Prefix ")]),suffix:e(()=>[v(" Suffix ")]),default:e(()=>[l(u,{title:"Vue",value:"vue",icon:"i-mdi:vuejs"},{default:e(()=>[o("div",null,"modelValue: "+d(i.value),1)]),_:1}),l(u,{title:"React",value:"react",icon:"i-mdi:react"},{default:e(()=>[o("div",null,"modelValue: "+d(i.value),1)]),_:1})]),_:1},8,["modelValue"])],64)}}};export{x as default};