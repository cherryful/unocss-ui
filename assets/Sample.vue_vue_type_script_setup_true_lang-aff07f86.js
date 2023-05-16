import{N as z,r as g,O as A,P as B,Q as T,B as L,R as w,S as O,V as N,W as E,d as V,A as $,X as D,Y as F,c as h,b as c,t as U,L as W,n as b,Z as j,F as S,e as I,m as H,g as M,l as R,o as x,u as P,h as Q,$ as X}from"./index-dd9b691d.js";function Y(t){var o;const n=w(t);return(o=n==null?void 0:n.$el)!=null?o:n}const Z=B?window:void 0,q=B?window.navigator:void 0;function G(...t){let o,n,s,y;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,s,y]=t,o=Z):[o,n,s,y]=t,!o)return T;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],m=()=>{r.forEach(l=>l()),r.length=0},e=(l,d,f,u)=>(l.addEventListener(d,f,u),()=>l.removeEventListener(d,f,u)),p=L(()=>[Y(o),w(y)],([l,d])=>{m(),l&&r.push(...n.flatMap(f=>s.map(u=>e(l,f,u,d))))},{immediate:!0,flush:"post"}),i=()=>{p(),m()};return O(i),i}function J(){const t=g(!1);return N()&&E(()=>{t.value=!0}),t}function K(t){const o=J();return z(()=>(o.value,!!t()))}function ee(t={}){const{navigator:o=q,read:n=!1,source:s,copiedDuring:y=1500,legacy:r=!1}=t,m=["copy","cut"],e=K(()=>o&&"clipboard"in o),p=z(()=>e.value||r),i=g(""),l=g(!1),d=A(()=>l.value=!1,y);function f(){e.value?o.clipboard.readText().then(a=>{i.value=a}):i.value=_()}if(p.value&&n)for(const a of m)G(a,f);async function u(a=w(s)){p.value&&a!=null&&(e.value?await o.clipboard.writeText(a):C(a),i.value=a,l.value=!0,d.start())}function C(a){const v=document.createElement("textarea");v.value=a??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function _(){var a,v,k;return(k=(v=(a=document==null?void 0:document.getSelection)==null?void 0:a.call(document))==null?void 0:v.toString())!=null?k:""}return{isSupported:p,text:i,copied:l,copy:u}}const te={class:"text-info-500 mb-2 text-lg"},oe={class:"flex justify-center border-2 rounded-md border-dashed p-4 shadow-sm"},ne=c("code",{class:"whitespace-pre-wrap text-sm"}," ​ ​ ​ ​ ",-1),se=[ne],ae=["onClick"],ie=c("div",{class:"i-mdi:content-copy"},null,-1),le=[ie],ue=V({__name:"Sample",props:{title:{default:""},snippets:null},setup(t){const{copy:o}=ee(),n=g(null),s=g(null),y=g(null),r=g(null),m=g(null),e=$({collapsed:!0,isSnippetCodeOverflow:!1,codeSnippetMaxHeight:0,mounted:!1,toggleCollapse(){e.collapsed=!e.collapsed,e.resizeSnippetContent()},setSnippetContentHeight(){r.value&&s.value&&(e.codeSnippetMaxHeight=r.value.offsetHeight,e.isSnippetCodeOverflow=s.value.offsetHeight>e.codeSnippetMaxHeight)},resizeSnippetContent(){s.value&&r.value&&m.value&&(e.collapsed?e.codeSnippetMaxHeight=r.value.offsetHeight:e.codeSnippetMaxHeight=s.value.offsetHeight+m.value.offsetHeight)},onCopy(p){var i;o(p),(i=n.value)==null||i.success("copy code successfully!")}});return D(()=>{window.addEventListener("resize",e.resizeSnippetContent)}),F(()=>{window.removeEventListener("resize",e.resizeSnippetContent)}),E(()=>{e.setSnippetContentHeight(),e.resizeSnippetContent(),setTimeout(()=>e.mounted=!0,100)}),(p,i)=>{var d,f;const l=Q("UToast");return x(),h("section",null,[c("div",{class:b(["border-x border-t border-gray-100 bg-white p-3 shadow sm:p-4",(d=t.snippets)!=null&&d.length?"rounded-t-lg":"rounded-lg border-b"])},[c("div",te,U(t.title),1),c("div",oe,[W(p.$slots,"default")])],2),(f=t.snippets)!=null&&f.length?(x(),h("div",{key:0,class:b(["relative overflow-y-hidden rounded-b-lg bg-gray-800",{"transition-all duration-500 ease-out":e.mounted}]),style:j([e.isSnippetCodeOverflow?{maxHeight:`${e.codeSnippetMaxHeight}px`}:{}])},[c("div",{ref_key:"sampleRef",ref:y,class:"p-4"},[c("div",{ref_key:"dummyCodeRef",ref:r,class:"invisible absolute p-4"},se,512),c("div",{ref_key:"snippetRef",ref:s,class:b(["overflow-x-auto py-2 space-y-5",{"pb-4":e.isSnippetCodeOverflow}])},[(x(!0),h(S,null,I(t.snippets,(u,C)=>(x(),h("div",{key:C,class:"group relative"},[R(P(X).component,{language:"xml",code:u},null,8,["code"]),c("button",{class:"absolute right-0 top-0 inline-flex items-center text-white opacity-50 transition-opacity duration-100 ease-in-out group-hover:opacity-100",onClick:_=>e.onCopy(u)},le,8,ae)]))),128))],2)],512),e.isSnippetCodeOverflow?(x(),h("div",{key:0,ref_key:"expandButtonRef",ref:m,class:"absolute bottom-0 w-full from-gray-800 bg-gradient-to-t p-2 text-center"},[c("button",{class:"rounded-full bg-gray-700 px-2 py-1 text-sm leading-tight text-gray-100 focus:outline-none",onClick:i[0]||(i[0]=u=>e.toggleCollapse())},[e.collapsed?(x(),h(S,{key:0},[H(" expand ")],64)):(x(),h(S,{key:1},[H(" collapse ")],64))])],512)):M("",!0)],6)):M("",!0),R(l,{ref_key:"toastRef",ref:n,position:"top",align:"right"},null,512)])}}});export{ue as _};