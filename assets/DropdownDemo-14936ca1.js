import{d as m,x as u,c as d,b as l,l as t,w as e,h as p,o as _,m as c,F as h,e as f,t as y}from"./index-dd9b691d.js";const b={class:"mb-4 h-32 flex flex-col border p-4"},x=l("div",{class:"mb-2"}," Basic ",-1),k={class:"flex justify-center gap-x-4"},g=["onClick"],D=m({__name:"DropdownDemo",setup(v){const o=[{label:"Action",key:"Action",icon:"i-mdi:lightning-bolt"},{label:"Another action",key:"Another action",icon:"i-mdi:apple"},{label:"Something else here",key:"Something else here",icon:u("div",{class:"i-mdi:abacus text-red-500"})}];function i(r){alert(r.key)}return(r,B)=>{const n=p("UButton"),s=p("UDropdown");return _(),d("div",b,[x,l("div",k,[t(s,{options:o},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[c(" Base ")]),_:1})]),_:1}),t(s,{options:o,onSelect:i},{default:e(()=>[t(n,{type:"primary"},{default:e(()=>[c(" @select ")]),_:1})]),_:1}),t(s,{options:o},{options:e(()=>[(_(),d(h,null,f(o,a=>l("div",{key:a.key,class:"mx-1 cursor-pointer rounded-md px-2 py-1 hover:bg-amber-500",onClick:w=>i(a)},y(a.label),9,g)),64))]),default:e(()=>[t(n,{type:"primary"},{default:e(()=>[c(" options slot ")]),_:1})]),_:1})])])}}});export{D as default};