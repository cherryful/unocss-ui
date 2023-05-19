import{r as m,f as U,w as t,o as x,l as s,I as f,m as o,t as C,b as i,c as $,e as B,F as T,h as v}from"./index-c02a5245.js";import{_ as c,P as D}from"./Playground-9b535ff2.js";import{_ as V}from"./Sample.vue_vue_type_script_setup_true_lang-acd05173.js";const S={class:"flex gap-2"},I={class:"flex flex-wrap items-center gap-2"},N=i("div",{class:"w-16"}," width ",-1),j={class:"flex items-center gap-2"},F=i("div",{class:"w-16"}," content ",-1),H={class:"space-x-4 space-y-3"},M={class:"space-x-4"},P={class:"space-x-4"},R=i("div",{class:"text-lg font-bold"}," Header ",-1),E=i("div",{class:"my-5 text-sm"}," Hello World! ",-1),L={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},G={__name:"ModalDemo",setup(W){const u=m(!1),p=m(!1),r=m(!1),w=m(!1),n=m("base"),b={width:[],dismissible:[],slot:[]},d=m({show:!1,content:"This is the content of the modal",width:"base",padded:!0,dismissible:!0,dismissButton:!0}),k=["sm","base","md","lg","xl","full"];return(Y,e)=>{const a=v("UButton"),y=v("UCheckbox"),_=v("URadio"),h=v("UInput");return x(),U(c,{title:"Modal Demo"},{default:t(()=>[s(D,null,{preview:t(()=>[s(f,{modelValue:d.value.show,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value.show=l),width:d.value.width,padded:d.value.padded,dismissible:d.value.dismissible,"dismiss-button":d.value.dismissButton},{default:t(()=>[o(C(d.value.content),1)]),_:1},8,["modelValue","width","padded","dismissible","dismiss-button"]),s(a,{onClick:e[1]||(e[1]=l=>d.value.show=!0)},{default:t(()=>[o(" show ")]),_:1})]),props:t(()=>[i("div",S,[s(y,{modelValue:d.value.dismissible,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value.dismissible=l)},{default:t(()=>[o(" dismissible ")]),_:1},8,["modelValue"]),s(y,{modelValue:d.value.dismissButton,"onUpdate:modelValue":e[3]||(e[3]=l=>d.value.dismissButton=l)},{default:t(()=>[o(" dismiss-button ")]),_:1},8,["modelValue"]),s(y,{modelValue:d.value.padded,"onUpdate:modelValue":e[4]||(e[4]=l=>d.value.padded=l)},{default:t(()=>[o(" padded ")]),_:1},8,["modelValue"])]),i("div",I,[N,(x(),$(T,null,B(k,l=>s(_,{key:l,modelValue:d.value.width,"onUpdate:modelValue":[e[5]||(e[5]=g=>d.value.width=g),g=>d.value.width=l],type:l,value:l},{default:t(()=>[o(C(l),1)]),_:2},1032,["modelValue","type","value","onUpdate:modelValue"])),64))]),i("div",j,[F,s(h,{modelValue:d.value.content,"onUpdate:modelValue":e[6]||(e[6]=l=>d.value.content=l),placeholder:"content"},null,8,["modelValue"])])]),_:1}),s(V,{title:"width",snippets:b.width},{default:t(()=>[i("div",H,[s(a,{type:"primary",onClick:e[7]||(e[7]=()=>{n.value="sm",u.value=!0})},{default:t(()=>[o(" sm ")]),_:1}),s(a,{type:"primary",onClick:e[8]||(e[8]=()=>{n.value="base",u.value=!0})},{default:t(()=>[o(" base ")]),_:1}),s(a,{type:"primary",onClick:e[9]||(e[9]=()=>{n.value="md",u.value=!0})},{default:t(()=>[o(" md ")]),_:1}),s(a,{type:"primary",onClick:e[10]||(e[10]=()=>{n.value="lg",u.value=!0})},{default:t(()=>[o(" lg ")]),_:1}),s(a,{type:"primary",onClick:e[11]||(e[11]=()=>{n.value="xl",u.value=!0})},{default:t(()=>[o(" xl ")]),_:1}),s(a,{type:"primary",onClick:e[12]||(e[12]=()=>{n.value="full",u.value=!0})},{default:t(()=>[o(" full ")]),_:1}),s(f,{modelValue:u.value,"onUpdate:modelValue":e[14]||(e[14]=l=>u.value=l),width:n.value},{header:t(()=>[o(" This is the header ")]),footer:t(()=>[s(a,{type:"error",onClick:e[13]||(e[13]=l=>u.value=!1)},{default:t(()=>[o(" Close ")]),_:1})]),default:t(()=>[o(" This is the content ")]),_:1},8,["modelValue","width"])])]),_:1},8,["snippets"]),s(V,{title:"dismissible",snippets:b.dismissible},{default:t(()=>[i("div",M,[s(f,{modelValue:p.value,"onUpdate:modelValue":e[16]||(e[16]=l=>p.value=l),dismissible:!1,"dismiss-button":!1},{header:t(()=>[o(" This is the header ")]),footer:t(()=>[s(a,{type:"error",onClick:e[15]||(e[15]=l=>p.value=!1)},{default:t(()=>[o(" Close ")]),_:1})]),default:t(()=>[o(" You can only dismiss this modal by clicking the buttons below. ")]),_:1},8,["modelValue"]),s(a,{type:"warning",onClick:e[17]||(e[17]=()=>{p.value=!0})},{default:t(()=>[o(" not dismissible ")]),_:1})])]),_:1},8,["snippets"]),s(V,{title:"slot",snippets:b.slot},{default:t(()=>[i("div",P,[s(a,{onClick:e[18]||(e[18]=()=>{r.value=!0})},{default:t(()=>[o(" #header, #footer ")]),_:1}),s(a,{onClick:e[19]||(e[19]=()=>{w.value=!0})},{default:t(()=>[o(" custom ")]),_:1})]),s(f,{modelValue:r.value,"onUpdate:modelValue":e[22]||(e[22]=l=>r.value=l),width:n.value},{header:t(()=>[o(" This is the header ")]),footer:t(()=>[s(a,{type:"warning",onClick:e[20]||(e[20]=l=>r.value=!1)},{default:t(()=>[o(" Cancel ")]),_:1}),s(a,{type:"error",onClick:e[21]||(e[21]=l=>r.value=!1)},{default:t(()=>[o(" Deactivate ")]),_:1})]),default:t(()=>[o(" This is the dialog content ")]),_:1},8,["modelValue","width"]),s(f,{modelValue:w.value,"onUpdate:modelValue":e[25]||(e[25]=l=>w.value=l),width:n.value},{default:t(()=>[R,E,i("div",L,[i("button",{type:"button",class:"w-full inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:e[23]||(e[23]=l=>u.value=!1)}," Deactivate "),i("button",{class:"mt-3 w-full inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:e[24]||(e[24]=l=>u.value=!1)}," Cancel ")])]),_:1},8,["modelValue","width"])]),_:1},8,["snippets"])]),_:1})}}};export{G as default};
