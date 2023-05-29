import{s as y,r as f,d as v,k as s,a as V,y as c,$ as n,K as w,A as i,b as t,t as l,l as k,p as U,q as A}from"./index-4ad6cd95.js";import{_ as T,P as N}from"./Playground-d4a03015.js";import{_ as h}from"./Sample.vue_vue_type_script_setup_true_lang-2886308f.js";const a=_=>(U("data-v-7314d981"),_=_(),A(),_),S=a(()=>t("th",{scope:"col",class:"table-th font-bold"}," Name ",-1)),C=a(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),E=a(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),D=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),B={class:"table-td font-bold"},I={class:"table-td"},P={class:"table-td"},$={class:"table-td"},j={class:"flex flex-wrap gap-2"},q=a(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),F=a(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),H=a(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),K=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),L={class:"table-td"},M={class:"table-td"},R={class:"table-td"},z={class:"table-td"},G=a(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),J=a(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),O=a(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),Q=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),W={class:"table-td"},X={class:"table-td"},Y={class:"table-td"},Z={class:"table-td"},tt=a(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),et=a(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),st=a(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),at=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),lt={class:"table-td"},ot={class:"table-td"},ct={class:"table-td"},dt={class:"table-td"},it=a(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),pt=a(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),nt=a(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),mt=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),ht={class:"table-td"},rt={class:"table-td"},_t={class:"table-td"},ut={class:"table-td"},bt=a(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),xt=a(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),gt=a(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),yt=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),ft=a(()=>t("th",{scope:"col",class:"table-th"},null,-1)),vt={class:"table-td"},Vt={class:"table-td"},wt={class:"table-td"},kt={class:"table-td"},Ut=a(()=>t("td",{class:"table-td"},[t("div",{class:"flex items-center justify-center gap-3 text-lg lg:px-4"},[t("span",{class:"i-mdi:apple inline-block cursor-pointer"}),t("span",{class:"i-mdi:lightning-bolt cursor-pointer"}),t("span",{class:"i-mdi:mail cursor-pointer"})])],-1)),At=a(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),Tt=a(()=>t("th",{scope:"col",class:"table-th"}," Price ",-1)),Nt=a(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),St={colspan:"5",scope:"colgroup",class:"table-td"},Ct={class:"table-sub first"},Et={class:"table-sub other"},Dt={class:"table-sub other"},Bt={__name:"TableDemo",setup(_){const m={base:[`const list = [
{
  id: 1,
  name: 'Alice',
  age: 18,
  email: 'alice@example.com',
  status: 'active',
},
{
  id: 2,
  name: 'Bob',
  age: 20,
  email: 'bob@example.com',
  status: 'active',
},
{
  id: 3,
  name: 'Cindy',
  age: 22,
  email: 'cindy@example.com',
  status: 'inactive',
}]`,`<UTable :data="list">
  <template #headers>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Name
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Age
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Email
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Status
    </th>
  </template>
  <template #rows="{ row }">
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.name }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.age }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.email }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.status }}
    </td>
  </template>
</UTable>`],empty:["const list = []",`<UTable :data="list">
  ...
</UTable>`],loading:[`<UTable :data="list" loading>
  ...
</UTable>`],bulkActions:[`const bulkActions = [
  {
    name: 'Delete All',
    clicked: keys => alert(keys),
  },
]`,`<UTable :data="list" :actions="bulkActions">
  ...
</UTable>
`],icon:[`<UTable :data="list">
  <template #headers>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Name
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Age
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Email
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Status
    </th>
    <th scope="col" class="col-span-3 px-4 py-3.5 text-sm font-semibold text-gray-900" />
  </template>
  <template #rows="{ row }">
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.name }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.age }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.email }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.status }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-base text-gray-500 sm:pl-6">
      <div class="flex items-center justify-center gap-3 lg:px-4">
        <span class="i-mdi:apple inline-block cursor-pointer" />
        <span class="i-mdi:lightning-bolt cursor-pointer" />
        <span class="i-mdi:mail cursor-pointer" />
      </div>
    </td>
  </template>
</UTable>`],tree:[]},o=f({loading:!1,empty:!1,bulk:!1,divided:!1,striped:!1,bordered:!1,caption:!1,headerColor:!1}),r=[{id:1,name:"Alice",age:18,email:"alice@example.com",status:"active"},{id:2,name:"Bob",age:20,email:"bob@example.com",status:"active"},{id:3,name:"Cindy",age:22,email:"cindy@example.com",status:"inactive"}],x=[{id:1,name:"Fruit",children:[{name:"apple",price:15,status:"canEat"},{name:"orange",price:18,status:"canEat"},{name:"pear",price:12,status:"canNotEat"},{name:"cherry",price:20,status:"canNotEat"}]},{id:2,name:"Toys",children:[{name:"Bear",price:18,status:"good"},{name:"Cat",price:15,status:"good"},{name:"Dog",price:28,status:"bad"}]}],b=[{name:"Delete All",clicked:u=>alert(u)}];function g(u){console.log("mouse hover: ",u)}return(u,d)=>{const p=k("UCheckbox");return V(),v(T,null,{default:s(()=>[c(N,null,{preview:s(()=>[c(n,{loading:o.value.loading,divided:o.value.divided,bordered:o.value.bordered,striped:o.value.striped,data:o.value.empty?[]:r,actions:o.value.bulk?b:[],"header-color":o.value.headerColor,onHoverRow:d[0]||(d[0]=e=>g(e))},w({headers:s(()=>[S,C,E,D]),rows:s(({row:e})=>[t("td",B,l(e.name),1),t("td",I,l(e.age),1),t("td",P,l(e.email),1),t("td",$,l(e.status),1)]),_:2},[o.value.caption?{name:"top",fn:s(()=>[i(" This is the caption with the class `caption-top` ")]),key:"0"}:void 0,o.value.caption?{name:"bottom",fn:s(()=>[i(" This is the caption with the class `caption-bottom` ")]),key:"1"}:void 0]),1032,["loading","divided","bordered","striped","data","actions","header-color"])]),props:s(()=>[t("div",j,[c(p,{modelValue:o.value.caption,"onUpdate:modelValue":d[1]||(d[1]=e=>o.value.caption=e)},{default:s(()=>[i(" caption ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.loading,"onUpdate:modelValue":d[2]||(d[2]=e=>o.value.loading=e)},{default:s(()=>[i(" loading ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.divided,"onUpdate:modelValue":d[3]||(d[3]=e=>o.value.divided=e)},{default:s(()=>[i(" divided ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.bordered,"onUpdate:modelValue":d[4]||(d[4]=e=>o.value.bordered=e)},{default:s(()=>[i(" bordered ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.striped,"onUpdate:modelValue":d[5]||(d[5]=e=>o.value.striped=e)},{default:s(()=>[i(" striped ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.headerColor,"onUpdate:modelValue":d[6]||(d[6]=e=>o.value.headerColor=e)},{default:s(()=>[i(" headerColor ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.empty,"onUpdate:modelValue":d[7]||(d[7]=e=>o.value.empty=e)},{default:s(()=>[i(" empty ")]),_:1},8,["modelValue"]),c(p,{modelValue:o.value.bulk,"onUpdate:modelValue":d[8]||(d[8]=e=>o.value.bulk=e)},{default:s(()=>[i(" bulk ")]),_:1},8,["modelValue"])])]),_:1}),c(h,{title:"base",snippets:m.base},{default:s(()=>[c(n,{data:r},{headers:s(()=>[q,F,H,K]),rows:s(({row:e})=>[t("td",L,l(e.name),1),t("td",M,l(e.age),1),t("td",R,l(e.email),1),t("td",z,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),c(h,{title:"empty",snippets:m.empty},{default:s(()=>[c(n,{data:[]},{headers:s(()=>[G,J,O,Q]),rows:s(({row:e})=>[t("td",W,l(e.name),1),t("td",X,l(e.age),1),t("td",Y,l(e.email),1),t("td",Z,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),c(h,{title:"loading",snippets:m.loading},{default:s(()=>[c(n,{data:r,loading:""},{headers:s(()=>[tt,et,st,at]),rows:s(({row:e})=>[t("td",lt,l(e.name),1),t("td",ot,l(e.age),1),t("td",ct,l(e.email),1),t("td",dt,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),c(h,{title:"bulkActions",snippets:m.bulkActions},{default:s(()=>[c(n,{data:r,actions:b},{headers:s(()=>[it,pt,nt,mt]),rows:s(({row:e})=>[t("td",ht,l(e.name),1),t("td",rt,l(e.age),1),t("td",_t,l(e.email),1),t("td",ut,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),c(h,{title:"icon",snippets:m.icon},{default:s(()=>[c(n,{data:r},{headers:s(()=>[bt,xt,gt,yt,ft]),rows:s(({row:e})=>[t("td",vt,l(e.name),1),t("td",Vt,l(e.age),1),t("td",wt,l(e.email),1),t("td",kt,l(e.status),1),Ut]),_:1})]),_:1},8,["snippets"]),c(h,{title:"tree",snippets:m.tree},{default:s(()=>[c(n,{data:x,tree:"",actions:b,"default-expand-all":""},{headers:s(()=>[At,Tt,Nt]),rows:s(({row:e})=>[t("th",St,l(e.name),1)]),subs:s(({sub:e})=>[t("td",Ct,l(e.name),1),t("td",Et,l(e.price),1),t("td",Dt,l(e.status),1)]),_:1})]),_:1},8,["snippets"])]),_:1})}}},jt=y(Bt,[["__scopeId","data-v-7314d981"]]);export{jt as default};
