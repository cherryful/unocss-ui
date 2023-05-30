import{a as o,c as s,z as t}from"./index-c8a07d28.js";const n={class:"markdown-body"},c=t(`<h1>Getting Started</h1><p>This is a Vue3 component library based on Unocss. Its simplicity is its biggest feature, as almost all components rely only on a single <code>.vue</code> file, without depending on too much other code.</p><blockquote><p>⚠️ This component library is still under construction and is currently only suitable for learning purposes.</p></blockquote><h2>Usage</h2><pre><code>pnpm add unocss unocss-ui @unocss/reset
</code></pre><p>Add <code>unocss-ui</code> in your main entry file.</p><pre><code class="language-ts">import &#39;@unocss/reset/tailwind.css&#39;
import &#39;unocss-ui/style.css&#39;
import &#39;uno.css&#39;

import unocssui from &#39;unocss-ui&#39;
import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;

createApp(App).use(unocssui).mount(&#39;#app&#39;)
</code></pre>`,7),r=[c],l={__name:"GettingStarted",setup(i,{expose:e}){return e({frontmatter:{}}),(a,u)=>(o(),s("div",n,r))}};export{l as default};
