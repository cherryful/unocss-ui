import{r as m,c as p,b as n,l as u,w as d,C as r,F as i,i as V,o as v,m as t}from"./index-fb05ba34.js";const f={class:"w-72"},U={class:"w-72 space-y-3"},b={class:"w-72"},x={__name:"InputDemo",setup(g){const e=m("");function s(){console.log(e.value)}return(w,l)=>{const a=V("UInput");return v(),p(i,null,[n("div",f,[u(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value=o),placeholder:"Custom placeholder",label:"placeholder"},null,8,["modelValue"]),u(a,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value=o),label:"required",required:""},null,8,["modelValue"]),u(a,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value=o)},{default:d(()=>[t(" Template: ")]),_:1},8,["modelValue"])]),n("div",U,[u(a,{modelValue:e.value,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value=o),label:"pre-icon & suff-icon","pre-icon":"i-mdi:lightning-bolt","suff-icon":"i-mdi:apple"},null,8,["modelValue"]),u(a,{modelValue:e.value,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value=o),label:"#prepend & #append"},{prepend:d(()=>[t(" https:// ")]),append:d(()=>[t(" .com ")]),_:1},8,["modelValue"]),u(a,{modelValue:e.value,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value=o),"error-message":"oh!!!!",label:"error-message"},null,8,["modelValue"])]),n("div",b,[u(a,{modelValue:e.value,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value=o),onKeyup:r(s,["enter"])},null,8,["modelValue","onKeyup"])])],64)}}};export{x as default};