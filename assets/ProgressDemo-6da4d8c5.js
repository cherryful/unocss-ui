import{r as f,d as C,k as n,a as c,y as a,b as o,W as r,n as U,c as v,i as g,A as p,t as y,F as _,j as B,l as w}from"./index-811f0df6.js";import{_ as L,P as $}from"./Playground-740e0377.js";import{_ as x}from"./Sample.vue_vue_type_script_setup_true_lang-b0022a58.js";const N={class:"flex flex-wrap items-center gap-2"},b=o("div",{class:"w-30"}," type ",-1),P={class:"flex flex-wrap items-center gap-2"},D=o("div",{class:"w-30"}," variant ",-1),F={key:0,class:"flex flex-wrap items-center gap-2"},R=o("div",{class:"w-30"}," score-length ",-1),j={class:"flex flex-wrap items-center gap-2"},z=o("div",{class:"w-30"}," percentage ",-1),A={class:"flex gap-5"},E={class:"max-w-96 w-full space-y-6"},I={class:"max-w-96 w-full space-y-6"},H={__name:"ProgressDemo",setup(S){const s=f({type:"primary",variant:"bar",scoreLength:10}),m={type:[],variant:[]},V=["primary","secondary","accent","success","info","warning","error"],k=["bar","score","circle"],h=[5,10,15,20],e=f(0);return setInterval(()=>{e.value<=100?e.value+=1:e.value=0},1e3),(T,l)=>{const d=w("URadio"),i=w("UButton");return c(),C(L,null,{default:n(()=>[a($,null,{preview:n(()=>[o("div",{class:U(["w-full",s.value.variant==="circle"?"max-w-32":"max-w-96"])},[a(r,{type:s.value.type,variant:s.value.variant,percentage:e.value,"score-length":s.value.scoreLength},null,8,["type","variant","percentage","score-length"])],2)]),props:n(()=>[o("div",N,[b,(c(),v(_,null,g(V,t=>a(d,{key:t,modelValue:s.value.type,"onUpdate:modelValue":l[0]||(l[0]=u=>s.value.type=u),type:t,value:t},{default:n(()=>[p(y(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),o("div",P,[D,(c(),v(_,null,g(k,t=>a(d,{key:t,modelValue:s.value.variant,"onUpdate:modelValue":l[1]||(l[1]=u=>s.value.variant=u),type:t,value:t},{default:n(()=>[p(y(t),1)]),_:2},1032,["modelValue","type","value"])),64))]),s.value.variant==="score"?(c(),v("div",F,[R,(c(),v(_,null,g(h,t=>a(d,{key:t,modelValue:s.value.scoreLength,"onUpdate:modelValue":l[2]||(l[2]=u=>s.value.scoreLength=u),value:t},{default:n(()=>[p(y(t),1)]),_:2},1032,["modelValue","value"])),64))])):B("",!0),o("div",j,[z,o("div",A,[a(i,{type:"warning",onClick:l[3]||(l[3]=t=>e.value=0)},{default:n(()=>[p(" reset ")]),_:1}),a(i,{type:"success",onClick:l[4]||(l[4]=t=>e.value=100)},{default:n(()=>[p(" finish ")]),_:1}),a(i,{type:"primary",onClick:l[5]||(l[5]=()=>{e.value<=90?e.value+=10:e.value=100})},{default:n(()=>[p(" plus 10 ")]),_:1}),a(i,{type:"primary",onClick:l[6]||(l[6]=()=>{e.value>=10?e.value-=10:e.value=0})},{default:n(()=>[p(" minus 10 ")]),_:1})])])]),_:1}),a(x,{title:"type",snippets:m.type},{default:n(()=>[o("div",E,[a(r,{type:"primary",percentage:e.value},null,8,["percentage"]),a(r,{type:"secondary",percentage:e.value},null,8,["percentage"]),a(r,{type:"accent",percentage:e.value},null,8,["percentage"]),a(r,{type:"success",percentage:e.value},null,8,["percentage"]),a(r,{type:"info",percentage:e.value},null,8,["percentage"]),a(r,{type:"warning",percentage:e.value},null,8,["percentage"]),a(r,{type:"error",percentage:e.value},null,8,["percentage"])])]),_:1},8,["snippets"]),a(x,{title:"variant",snippets:m.variant},{default:n(()=>[o("div",I,[a(r,{percentage:e.value},null,8,["percentage"]),a(r,{percentage:e.value,variant:"score","score-length":15},null,8,["percentage"]),a(r,{percentage:e.value,variant:"circle",class:"w-25"},null,8,["percentage"])])]),_:1},8,["snippets"])]),_:1})}}};export{H as default};
