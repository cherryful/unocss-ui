import{f as k,r as f,w as B,d as C,k as l,a as x,y as t,J as m,K as D,v as y,L as _,b as u,M as T,A as c,c as R,i as A,t as K,F as $,B as I,N as F,O as L,l as U}from"./index-4ad6cd95.js";import{_ as M,P}from"./Playground-d4a03015.js";import{_ as g}from"./Sample.vue_vue_type_script_setup_true_lang-2886308f.js";const S=u("button",{class:"h-4 w-4 flex items-center rounded-full bg-red-500"},null,-1),E=["onKeyup","onBlur"],J={class:"flex gap-2"},O={class:"flex flex-wrap items-center gap-2"},j=u("div",{class:"w-16"}," max ",-1),q=u("button",{class:"h-4 w-4 flex items-center rounded-full bg-red-500"},null,-1),z=["onKeyup","onBlur"],X=k({__name:"DynamicTagsDemo",setup(G){const o=f(["Vue","React","Angular"]);function b(r,e){return I(F,{type:e%2?"primary":"success",closeable:!0,onClose:()=>o.value.splice(e,1)},{default:()=>r})}const d=f(""),v=f(null);B(v,r=>{L(()=>r==null?void 0:r.focus())});const i={base:["const tagNames = ref(['Vue', 'React', 'Angular'])",'<UDynamicTags v-model="tagNames" />'],max:['<UDynamicTags v-model="tagNames" :max="3" />'],closeable:['<UDynamicTags v-model="tagNames" :closeable="false" />'],renderTag:[`function renderTag(tag: string, index: number) {
  return h(UTag, {
    type: index % 2 ? 'primary' : 'success',
    closeable: true,
    onClose: () => tagNames.value.splice(index, 1),
  }, {
    default: () => tag,
  })
}`,'<UDynamicTags v-model="tagNames" :render-tag="renderTag" />'],custom:[`<UDynamicTags v-model="tagNames">
  <template #trigger>
    <button class="h-4 w-4 flex items-center rounded-full bg-red-500" />
  </template>
  <template #input="{ submit, deactive }">
    <input
      ref="newTagInputRef"
      v-model="newTagValue"
      class="h-7 w-20 border border-gray-300 rounded px-2 text-sm focus:outline-none"
      @keyup.enter="$event => {
        submit($event)
        newTagValue = ''
      }"
      @blur="deactive"
    >
  </template>
</UDynamicTags>`]},s=f({tagNames:["AAAA","BBBB","CCCC"],max:5,closeable:!0,render:!1,custom:!1}),w=[1,3,5,7];return(r,e)=>{const V=U("UCheckbox"),N=U("URadio");return x(),C(M,null,{default:l(()=>[t(P,null,{preview:l(()=>[t(m,{modelValue:s.value.tagNames,"onUpdate:modelValue":e[1]||(e[1]=a=>s.value.tagNames=a),closeable:s.value.closeable,max:s.value.max,"render-tag":s.value.render?b:void 0},D({_:2},[s.value.custom?{name:"trigger",fn:l(()=>[S]),key:"0"}:void 0,s.value.custom?{name:"input",fn:l(({submit:a,deactive:p})=>[y(u("input",{ref_key:"newTagInputRef",ref:v,"onUpdate:modelValue":e[0]||(e[0]=n=>d.value=n),class:"h-7 w-20 border border-gray-300 rounded px-2 text-sm",onKeyup:T(n=>{a(n),d.value=""},["enter"]),onBlur:p},null,40,E),[[_,d.value]])]),key:"1"}:void 0]),1032,["modelValue","closeable","max","render-tag"])]),props:l(()=>[u("div",J,[t(V,{modelValue:s.value.closeable,"onUpdate:modelValue":e[2]||(e[2]=a=>s.value.closeable=a)},{default:l(()=>[c(" closeable ")]),_:1},8,["modelValue"]),t(V,{modelValue:s.value.render,"onUpdate:modelValue":e[3]||(e[3]=a=>s.value.render=a)},{default:l(()=>[c(" render-tag ")]),_:1},8,["modelValue"]),t(V,{modelValue:s.value.custom,"onUpdate:modelValue":e[4]||(e[4]=a=>s.value.custom=a)},{default:l(()=>[c(" custom ")]),_:1},8,["modelValue"])]),u("div",O,[j,(x(),R($,null,A(w,a=>t(N,{key:a,modelValue:s.value.max,"onUpdate:modelValue":e[5]||(e[5]=p=>s.value.max=p),value:a},{default:l(()=>[c(K(a),1)]),_:2},1032,["modelValue","value"])),64))])]),_:1}),t(g,{title:"basic",snippets:i.base},{default:l(()=>[t(m,{modelValue:o.value,"onUpdate:modelValue":e[6]||(e[6]=a=>o.value=a)},null,8,["modelValue"])]),_:1},8,["snippets"]),t(g,{title:"max",snippets:i.max},{default:l(()=>[t(m,{modelValue:o.value,"onUpdate:modelValue":e[7]||(e[7]=a=>o.value=a),max:3},null,8,["modelValue"])]),_:1},8,["snippets"]),t(g,{title:"closeable",snippets:i.closeable},{default:l(()=>[t(m,{modelValue:o.value,"onUpdate:modelValue":e[8]||(e[8]=a=>o.value=a),closeable:!1},null,8,["modelValue"])]),_:1},8,["snippets"]),t(g,{title:"renderTag",snippets:i.renderTag},{default:l(()=>[t(m,{modelValue:o.value,"onUpdate:modelValue":e[9]||(e[9]=a=>o.value=a),"render-tag":b},null,8,["modelValue"])]),_:1},8,["snippets"]),t(g,{title:"custom",snippets:i.custom},{default:l(()=>[t(m,{modelValue:o.value,"onUpdate:modelValue":e[11]||(e[11]=a=>o.value=a)},{trigger:l(()=>[q]),input:l(({submit:a,deactive:p})=>[y(u("input",{ref_key:"newTagInputRef",ref:v,"onUpdate:modelValue":e[10]||(e[10]=n=>d.value=n),class:"h-7 w-20 border border-gray-300 rounded px-2 text-sm focus:outline-none",onKeyup:T(n=>{a(n),d.value=""},["enter"]),onBlur:p},null,40,z),[[_,d.value]])]),_:1},8,["modelValue"])]),_:1},8,["snippets"])]),_:1})}}});export{X as default};
