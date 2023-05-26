import{a as s,c as t,b as o,A as n}from"./index-e0617cbe.js";const r={class:"markdown-body"},c=o("h1",null,"Customization",-1),l=o("p",null,[n("You can customize the theme of the component library by passing in the "),o("code",null,"theme"),n(" option.")],-1),i=o("blockquote",null,[o("p",null,"Currently, only customization of colors is supported, and you must use the colors of the palette.")],-1),a=o("pre",null,[o("code",{class:"language-ts"},`// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { colors } from 'unocss/preset-mini'

import { presetUnocssUI } from 'unocss-ui'

export default defineConfig({
  theme: {
    colors: {
      primary: colors.red,
      secondary: colors.orange,
      accent: colors.yellow,
      success: colors.green,
      info: colors.blue,
      warning: colors.indigo,
      error: colors.violet,
    },
  },
  presets: [
    presetUno(),
    presetUnocssUI(),
  ],
})
`)],-1),u=[c,l,i,a],h={__name:"Customization",setup(p,{expose:e}){return e({frontmatter:{}}),(d,_)=>(s(),t("div",r,u))}};export{h as default};
