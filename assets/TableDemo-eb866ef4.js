import{s as S,r as k,d as B,k as a,a as g,y as d,$ as r,K as U,A as n,b as t,t as l,c as A,i as T,F as E,l as C,p as D,q as P}from"./index-c8a07d28.js";import{_ as R,P as N}from"./Playground-3098c67f.js";import{_ as u}from"./Sample.vue_vue_type_script_setup_true_lang-406ec9f8.js";const o=_=>(D("data-v-82e4c074"),_=_(),P(),_),F=o(()=>t("th",{scope:"col",class:"table-th font-bold"}," Name ",-1)),I=o(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),L=o(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),$=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),j={class:"table-td font-bold"},q={class:"table-td"},J={class:"table-td"},K={class:"table-td"},O={class:"flex flex-wrap gap-2"},z={class:"flex flex-wrap items-center gap-2"},G=o(()=>t("div",{class:"w-16"}," rounded ",-1)),H=o(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),M=o(()=>t("th",{scope:"col",class:"table-th"}," Price ",-1)),Q=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),W={colspan:"5",scope:"colgroup",class:"table-td"},X={class:"table-sub first"},Y={class:"table-sub other"},Z={class:"table-sub other"},ee={class:"flex flex-wrap gap-2"},te={class:"flex flex-wrap items-center gap-2"},ae=o(()=>t("div",{class:"w-16"}," rounded ",-1)),se=o(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),le=o(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),oe=o(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),de=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),pe={class:"table-td"},ce={class:"table-td"},ne={class:"table-td"},ie={class:"table-td"},re=o(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),me=o(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),ue=o(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),he=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),_e={class:"table-td"},be={class:"table-td"},xe={class:"table-td"},fe={class:"table-td"},ge=o(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),ye=o(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),ve=o(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),we=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),Ve={class:"table-td"},ke={class:"table-td"},Ue={class:"table-td"},Ae={class:"table-td"},Te=o(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),Ee=o(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),Ce=o(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),Ne=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),Se={class:"table-td"},Be={class:"table-td"},De={class:"table-td"},Pe={class:"table-td"},Re=o(()=>t("th",{scope:"col",class:"table-th"}," Name ",-1)),Fe=o(()=>t("th",{scope:"col",class:"table-th"}," Age ",-1)),Ie=o(()=>t("th",{scope:"col",class:"table-th"}," Email ",-1)),Le=o(()=>t("th",{scope:"col",class:"table-th"}," Status ",-1)),$e=o(()=>t("th",{scope:"col",class:"table-th"},null,-1)),je={class:"table-td"},qe={class:"table-td"},Je={class:"table-td"},Ke={class:"table-td"},Oe=o(()=>t("td",{class:"table-td"},[t("div",{class:"flex items-center justify-center gap-3 text-lg lg:px-4"},[t("span",{class:"i-mdi:apple inline-block cursor-pointer"}),t("span",{class:"i-mdi:lightning-bolt cursor-pointer"}),t("span",{class:"i-mdi:mail cursor-pointer"})])],-1)),ze=o(()=>t("th",{scope:"col",class:"col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6"}," Name ",-1)),Ge=o(()=>t("th",{scope:"col",class:"col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6"}," Price ",-1)),He=o(()=>t("th",{scope:"col",class:"col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6"}," Status ",-1)),Me={colspan:"5",scope:"colgroup",class:"whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6"},Qe={class:"whitespace-nowrap px-3.5 py-2 pl-6 text-left text-gray-500 sm:pl-9"},We={class:"whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6"},Xe={class:"whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6"},Ye={__name:"TableDemo",setup(_){const m={base:[`const list = [
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
</UTable>`],tree:[`const treeList = [
  {
    id: 1,
    name: 'Fruit',
    children: [
      { name: 'apple', price: 15, status: 'canEat' },
      { name: 'orange', price: 18, status: 'canEat' },
      { name: 'pear', price: 12, status: 'canNotEat' },
      { name: 'cherry', price: 20, status: 'canNotEat' },
    ],
  },
  {
    id: 2,
    name: 'Toys',
    children: [
      { name: 'Bear', price: 18, status: 'good' },
      { name: 'Cat', price: 15, status: 'good' },
      { name: 'Dog', price: 28, status: 'bad' },
    ],
  },
]`,`<UTable :data="treeList" tree :actions="bulkActions" default-expand-all>
  <template #headers>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
      Name
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
      Price
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
      Status
    </th>
  </template>
  <template #rows="{ row }">
    <th colspan="5" scope="colgroup" class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
      {{ row.name }}
    </th>
  </template>
  <template #subs="{ sub }">
    <td class="whitespace-nowrap px-3.5 py-2 pl-6 text-left text-gray-500 sm:pl-9">
      {{ sub.name }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
      {{ sub.price }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
      {{ sub.status }}
    </td>
  </template>
</UTable>`]},p=k({loading:!1,empty:!1,bulk:!1,divided:!1,striped:!1,bordered:!1,caption:!1,headerColor:!1,rounded:"sm"}),c=k({caption:!1,loading:!1,bordered:!1,headerColor:!1,empty:!1,bulk:!1,defaultExpandAll:!1,rounded:"sm"}),h=[{id:1,name:"Alice",age:18,email:"alice@example.com",status:"active"},{id:2,name:"Bob",age:20,email:"bob@example.com",status:"active"},{id:3,name:"Cindy",age:22,email:"cindy@example.com",status:"inactive"}],y=[{id:1,name:"Fruit",children:[{name:"apple",price:15,status:"canEat"},{name:"orange",price:18,status:"canEat"},{name:"pear",price:12,status:"canNotEat"},{name:"cherry",price:20,status:"canNotEat"}]},{id:2,name:"Toys",children:[{name:"Bear",price:18,status:"good"},{name:"Cat",price:15,status:"good"},{name:"Dog",price:28,status:"bad"}]}],b=[{name:"Delete All",clicked:x=>alert(x)}];function v(x){alert(JSON.stringify(x))}const w=["sm","md","lg"];return(x,s)=>{const i=C("UCheckbox"),V=C("URadio");return g(),B(R,null,{default:a(()=>[d(N,null,{preview:a(()=>[d(r,{loading:p.value.loading,divided:p.value.divided,bordered:p.value.bordered,striped:p.value.striped,data:p.value.empty?[]:h,actions:p.value.bulk?b:[],"header-color":p.value.headerColor,rounded:p.value.rounded,onClickRow:s[0]||(s[0]=e=>v(e))},U({headers:a(()=>[F,I,L,$]),rows:a(({row:e})=>[t("td",j,l(e.name),1),t("td",q,l(e.age),1),t("td",J,l(e.email),1),t("td",K,l(e.status),1)]),_:2},[p.value.caption?{name:"top",fn:a(()=>[n(" This is the caption with the class `caption-top` ")]),key:"0"}:void 0,p.value.caption?{name:"bottom",fn:a(()=>[n(" This is the caption with the class `caption-bottom` ")]),key:"1"}:void 0]),1032,["loading","divided","bordered","striped","data","actions","header-color","rounded"])]),props:a(()=>[t("div",O,[d(i,{modelValue:p.value.caption,"onUpdate:modelValue":s[1]||(s[1]=e=>p.value.caption=e)},{default:a(()=>[n(" caption ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.loading,"onUpdate:modelValue":s[2]||(s[2]=e=>p.value.loading=e)},{default:a(()=>[n(" loading ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.divided,"onUpdate:modelValue":s[3]||(s[3]=e=>p.value.divided=e)},{default:a(()=>[n(" divided ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.bordered,"onUpdate:modelValue":s[4]||(s[4]=e=>p.value.bordered=e)},{default:a(()=>[n(" bordered ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.striped,"onUpdate:modelValue":s[5]||(s[5]=e=>p.value.striped=e)},{default:a(()=>[n(" striped ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.headerColor,"onUpdate:modelValue":s[6]||(s[6]=e=>p.value.headerColor=e)},{default:a(()=>[n(" headerColor ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.empty,"onUpdate:modelValue":s[7]||(s[7]=e=>p.value.empty=e)},{default:a(()=>[n(" empty ")]),_:1},8,["modelValue"]),d(i,{modelValue:p.value.bulk,"onUpdate:modelValue":s[8]||(s[8]=e=>p.value.bulk=e)},{default:a(()=>[n(" bulk ")]),_:1},8,["modelValue"])]),t("div",z,[G,(g(),A(E,null,T(w,e=>d(V,{key:e,modelValue:p.value.rounded,"onUpdate:modelValue":s[9]||(s[9]=f=>p.value.rounded=f),value:e},{default:a(()=>[n(l(e),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),d(N,null,{preview:a(()=>[d(r,{tree:"",loading:c.value.loading,bordered:c.value.bordered,rounded:c.value.rounded,data:c.value.empty?[]:y,actions:c.value.bulk?b:[],"header-color":c.value.headerColor,"default-expand-all":c.value.defaultExpandAll,onClickRow:s[10]||(s[10]=e=>v(e))},U({headers:a(()=>[H,M,Q]),rows:a(({row:e})=>[t("th",W,l(e.name),1)]),subs:a(({sub:e})=>[t("td",X,l(e.name),1),t("td",Y,l(e.price),1),t("td",Z,l(e.status),1)]),_:2},[c.value.caption?{name:"top",fn:a(()=>[n(" This is the caption with the class `caption-top` ")]),key:"0"}:void 0,c.value.caption?{name:"bottom",fn:a(()=>[n(" This is the caption with the class `caption-bottom` ")]),key:"1"}:void 0]),1032,["loading","bordered","rounded","data","actions","header-color","default-expand-all"])]),props:a(()=>[t("div",ee,[d(i,{modelValue:c.value.caption,"onUpdate:modelValue":s[11]||(s[11]=e=>c.value.caption=e)},{default:a(()=>[n(" caption ")]),_:1},8,["modelValue"]),d(i,{modelValue:c.value.loading,"onUpdate:modelValue":s[12]||(s[12]=e=>c.value.loading=e)},{default:a(()=>[n(" loading ")]),_:1},8,["modelValue"]),d(i,{modelValue:c.value.bordered,"onUpdate:modelValue":s[13]||(s[13]=e=>c.value.bordered=e)},{default:a(()=>[n(" bordered ")]),_:1},8,["modelValue"]),d(i,{modelValue:c.value.headerColor,"onUpdate:modelValue":s[14]||(s[14]=e=>c.value.headerColor=e)},{default:a(()=>[n(" headerColor ")]),_:1},8,["modelValue"]),d(i,{modelValue:c.value.empty,"onUpdate:modelValue":s[15]||(s[15]=e=>c.value.empty=e)},{default:a(()=>[n(" empty ")]),_:1},8,["modelValue"]),d(i,{modelValue:c.value.bulk,"onUpdate:modelValue":s[16]||(s[16]=e=>c.value.bulk=e)},{default:a(()=>[n(" bulk ")]),_:1},8,["modelValue"]),d(i,{modelValue:c.value.defaultExpandAll,"onUpdate:modelValue":s[17]||(s[17]=e=>c.value.defaultExpandAll=e),disabled:""},{default:a(()=>[n(" defaultExpandAll ")]),_:1},8,["modelValue"])]),t("div",te,[ae,(g(),A(E,null,T(w,e=>d(V,{key:e,modelValue:c.value.rounded,"onUpdate:modelValue":s[18]||(s[18]=f=>c.value.rounded=f),value:e},{default:a(()=>[n(l(e),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),d(u,{title:"base",snippets:m.base},{default:a(()=>[d(r,{data:h},{headers:a(()=>[se,le,oe,de]),rows:a(({row:e})=>[t("td",pe,l(e.name),1),t("td",ce,l(e.age),1),t("td",ne,l(e.email),1),t("td",ie,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),d(u,{title:"empty",snippets:m.empty},{default:a(()=>[d(r,{data:[]},{headers:a(()=>[re,me,ue,he]),rows:a(({row:e})=>[t("td",_e,l(e.name),1),t("td",be,l(e.age),1),t("td",xe,l(e.email),1),t("td",fe,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),d(u,{title:"loading",snippets:m.loading},{default:a(()=>[d(r,{data:h,loading:""},{headers:a(()=>[ge,ye,ve,we]),rows:a(({row:e})=>[t("td",Ve,l(e.name),1),t("td",ke,l(e.age),1),t("td",Ue,l(e.email),1),t("td",Ae,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),d(u,{title:"bulkActions",snippets:m.bulkActions},{default:a(()=>[d(r,{data:h,actions:b},{headers:a(()=>[Te,Ee,Ce,Ne]),rows:a(({row:e})=>[t("td",Se,l(e.name),1),t("td",Be,l(e.age),1),t("td",De,l(e.email),1),t("td",Pe,l(e.status),1)]),_:1})]),_:1},8,["snippets"]),d(u,{title:"icon",snippets:m.icon},{default:a(()=>[d(r,{data:h},{headers:a(()=>[Re,Fe,Ie,Le,$e]),rows:a(({row:e})=>[t("td",je,l(e.name),1),t("td",qe,l(e.age),1),t("td",Je,l(e.email),1),t("td",Ke,l(e.status),1),Oe]),_:1})]),_:1},8,["snippets"]),d(u,{title:"tree",snippets:m.tree},{default:a(()=>[d(r,{data:y,tree:"",actions:b,"default-expand-all":""},{headers:a(()=>[ze,Ge,He]),rows:a(({row:e})=>[t("th",Me,l(e.name),1)]),subs:a(({sub:e})=>[t("td",Qe,l(e.name),1),t("td",We,l(e.price),1),t("td",Xe,l(e.status),1)]),_:1})]),_:1},8,["snippets"])]),_:1})}}},at=S(Ye,[["__scopeId","data-v-82e4c074"]]);export{at as default};
