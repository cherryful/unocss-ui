import{r as v,c as V,b as r,t as i,l as u,w as d,F as g,i as f,o as C,m as t,n as s}from"./index-fb05ba34.js";const b={class:"space-x-5"},y={class:"flex gap-4"},U=r("div",null," apple ",-1),w={class:"flex gap-4"},h={class:"flex gap-4"},k={__name:"RadioDemo",setup(x){const a=v("durian"),m=v("");function o(p){m.value=`onChange: ${p}`}return(p,l)=>{const n=f("URadio");return C(),V(g,null,[r("div",b," checked: "+i(a.value)+" | "+i(m.value),1),r("div",y,[u(n,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),type:"success",value:"apple",onChange:o},{default:d(()=>[U]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),type:"info",value:"banana",onChange:o},{default:d(()=>[t(" banana ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[2]||(l[2]=e=>a.value=e),type:"warning",value:"orange",onChange:o},{default:d(()=>[t(" orange ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[3]||(l[3]=e=>a.value=e),type:"error",value:"pear",onChange:o},{default:d(()=>[t(" pear ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[4]||(l[4]=e=>a.value=e),type:"primary",value:"graph",onChange:o},{default:d(()=>[t(" graph ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[5]||(l[5]=e=>a.value=e),type:"secondary",value:"mongo",onChange:o},{default:d(()=>[t(" mongo ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[6]||(l[6]=e=>a.value=e),type:"accent",value:"watermelon",onChange:o},{default:d(()=>[t(" watermelon ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[7]||(l[7]=e=>a.value=e),disabled:"",value:"durian",onChange:o},{default:d(()=>[t(" durian ")]),_:1},8,["modelValue"])]),r("div",w,[u(n,{modelValue:a.value,"onUpdate:modelValue":l[8]||(l[8]=e=>a.value=e),bordered:"",type:"success",value:"apple",onChange:o},{default:d(()=>[t(" apple ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[9]||(l[9]=e=>a.value=e),bordered:"",type:"info",value:"banana",onChange:o},{default:d(()=>[t(" banana ")]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[10]||(l[10]=e=>a.value=e),bordered:"",type:"warning",value:"orange",onChange:o},{default:d(()=>[t(" orange ")]),_:1},8,["modelValue"])]),r("div",h,[u(n,{modelValue:a.value,"onUpdate:modelValue":l[11]||(l[11]=e=>a.value=e),hidden:"",type:"success",value:"apple",onChange:o},{default:d(({checked:e})=>[r("div",{class:s(["h-8 w-8 border-2 rounded-full border-white bg-success-500",{"ring-2 ring-success-500":e}])},null,2)]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[12]||(l[12]=e=>a.value=e),hidden:"",type:"info",value:"banana",onChange:o},{default:d(({checked:e})=>[r("div",{class:s(["h-8 w-8 border-2 border-white rounded-full bg-info-500",{"ring-2 ring-info-500":e}])},null,2)]),_:1},8,["modelValue"]),u(n,{modelValue:a.value,"onUpdate:modelValue":l[13]||(l[13]=e=>a.value=e),hidden:"",type:"warning",value:"orange",onChange:o},{default:d(({checked:e})=>[r("div",{class:s(["h-8 w-8 border-2 border-white rounded-full bg-warning-500",{"ring-2 ring-warning-500":e}])},null,2)]),_:1},8,["modelValue"])])],64)}}};export{k as default};