import{f as d,r as n,c as r,b as c,t as v,A as t,y as o,ad as s,a as b}from"./index-66b3137e.js";const B=d({__name:"TreeDemo",setup(m){const u=[{label:"A",value:"A",children:[{label:"A1",value:"A1"},{label:"A2",value:"A2"},{label:"A3",value:"A3",disabled:!0}]},{label:"B",value:"B",children:[{label:"B1",value:"B1"},{label:"B2",value:"B2"},{label:"B3",value:"B3"}]},{label:"C",value:"C"}],e=n([]);return(p,l)=>(b(),r("div",null,[c("p",null," checked Values : "+v(e.value),1),t(" Cascade Selectable Tree "),o(s,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a),options:u,cascade:"",selectable:"","default-expanded-keys":["A"]},null,8,["modelValue"]),t(" Not Selectable: "),o(s,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value=a),options:u},null,8,["modelValue"])]))}});export{B as default};
