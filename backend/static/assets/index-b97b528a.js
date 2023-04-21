import{j as L,r as h,a as J}from"./react-92fe003e.js";import{c as Q}from"./react-dom-1ef96aba.js";import{L as W,N as X,H as Y}from"./react-router-dom-73a71a57.js";import{O as Z,d as ee,e as T}from"./react-router-0f7b1f7b.js";import{l as te}from"./react-quill-70a36966.js";import{u as ae,P as re,a as w,L as oe,S as ne,b as ie,T as B,I as se,c as f,d as ce,D as le,M as de,e as he,f as D,g as v,h as M,i as I,C as ue,j as ge,k as me,l as pe}from"./@fluentui-d84411b4.js";import"./lodash-b9ab1447.js";import"./@remix-run-65e438cc.js";import"./quill-b1a40b40.js";import"./tslib-14a4c710.js";import"./@microsoft-31b40247.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}})();const b=L.Fragment,e=L.jsx,c=L.jsxs;const ye="/assets/github-fab00c2d.svg",_e="_layout_11xba_1",ke="_header_11xba_13",xe="_headerContainer_11xba_23",fe="_headerTitleContainer_11xba_39",ve="_headerLogo_11xba_55",be="_headerTitle_11xba_39",Le="_headerNavList_11xba_73",Ce="_headerNavPageLink_11xba_85",Ne="_headerNavPageLinkActive_11xba_113",Pe="_headerNavLeftMargin_11xba_123",Se="_headerRightText_11xba_131",Ae="_microsoftLogo_11xba_141",Te="_githubLogo_11xba_151",s={layout:_e,header:ke,headerContainer:xe,headerTitleContainer:fe,headerLogo:ve,headerTitle:be,headerNavList:Le,headerNavPageLink:Ce,headerNavPageLinkActive:Ne,headerNavLeftMargin:Pe,headerRightText:Se,microsoftLogo:Ae,githubLogo:Te},we=()=>c("div",{className:s.layout,children:[e("header",{className:s.header,role:"banner",children:c("div",{className:s.headerContainer,children:[e(W,{to:"/",className:s.headerTitleContainer,children:e("h3",{className:s.headerTitle,children:"GPT + Dalle2 | Sample"})}),e("nav",{children:c("ul",{className:s.headerNavList,children:[e("li",{children:e(X,{to:"/",className:({isActive:o})=>o?s.headerNavPageLinkActive:s.headerNavPageLink,children:"Copywriting"})}),e("li",{className:s.headerNavLeftMargin,children:e("a",{href:"https://github.com/richardeee/CopywriteGPT",target:"_blank",title:"Github repository link",children:e("img",{src:ye,alt:"Github logo","aria-label":"Link to github repository",width:"20px",height:"20px",className:s.githubLogo})})})]})}),e("h3",{className:s.headerRightText,children:"Azure ChatGPT + Dall-E2"})]})}),e(Z,{})]}),Be="_ck_15cr4_1",De="_ckeditor_15cr4_41",Me={ck:Be,"ck-word-count":"_ck-word-count_15cr4_1","ck-word-count__words":"_ck-word-count__words_15cr4_23","ck-rounded-corners":"_ck-rounded-corners_15cr4_31","ck-editor__main":"_ck-editor__main_15cr4_31","ck-editor__editable":"_ck-editor__editable_15cr4_31","ck-source-editing-area":"_ck-source-editing-area_15cr4_33",ckeditor:De},Ie={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},Re=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],Ee=({data:o,onChange:i})=>e("div",{className:Me.ckeditor,children:e(te,{value:o,onChange:i,theme:"snow",modules:Ie,formats:Re})}),Oe="_container_9s6yc_1",Fe="_loadingLogo_9s6yc_11",je="_commandsContainer_9s6yc_19",Ge="_commandButton_9s6yc_29",He="_generateButton_9s6yc_37",qe="_editorContainer_9s6yc_49",Ke="_editor_9s6yc_49",Ue="_preview_9s6yc_73",n={container:Oe,loadingLogo:Fe,commandsContainer:je,commandButton:Ge,generateButton:He,editorContainer:qe,editor:Ke,preview:Ue};async function ze(o){var d,t,r,g;const i=await fetch("/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({approach:o.approach,title:o.title,title_description:o.titleDescription,overrides:{paragraphs:(d=o.overrides)==null?void 0:d.paragraphs,max_paragraph_length:(t=o.overrides)==null?void 0:t.maxParagraphLength,use_dalle:(r=o.overrides)==null?void 0:r.useDalle,art_style:(g=o.overrides)==null?void 0:g.artStyle}})}),u=await i.json();if(i.status>299||!i.ok)throw Error(u.error||"Unknown error");return u}const Ve={root:{marginRight:8}},$e={childrenGap:10,padding:10},Je=()=>{const[o,{setTrue:i,setFalse:u}]=ae(!1),[d,t]=h.useState(""),[r,g]=h.useState(""),[C,R]=h.useState(5),[N,E]=h.useState(100),[k,O]=h.useState(!0),[P,_]=h.useState(!1),[m,p]=h.useState(),[S,x]=h.useState(""),[y,F]=h.useState(["Landscape Photography"]),j=[{key:"Baroque",text:"巴洛克风格"},{key:"Rococo",text:"洛可可风格"},{key:"Romanticism",text:"浪漫主义"},{key:"Realism",text:"现实主义"},{key:"Impressionism",text:"印象派"},{key:"Post-Impressionism",text:"后印象派"},{key:"Expressionism",text:"表现主义"},{key:"Fauvism",text:"野兽派"},{key:"Cubism",text:"立体主义"},{key:"Futurism",text:"未来主义"},{key:"Dadaism",text:"达达主义"},{key:"Surrealism",text:"超现实主义"},{key:"Abstract Expressionism",text:"抽象表现主义"},{key:"Pop Art",text:"波普艺术"},{key:"Op Art",text:"视觉艺术"},{key:"Minimalism",text:"极简主义"},{key:"Conceptual Art",text:"观念艺术"},{key:"Photorealism",text:"超写实主义"},{key:"Neo-Expressionism",text:"新表现主义"},{key:"Neo-Pop Art",text:"新波普艺术"},{key:"Hyperrealism",text:"超现实主义"},{key:"Graffiti Art",text:"涂鸦艺术"},{key:"Street Art",text:"街头艺术"},{key:"Outsider Art",text:"非主流艺术"},{key:"Feminist Art",text:"女性主义艺术"},{key:"Environmental Art",text:"环境艺术"},{key:"Land Art",text:"土地艺术"},{key:"Body Art",text:"身体艺术"},{key:"Performance Art",text:"行为艺术"},{key:"New Media Art",text:"新媒体艺术"},{key:"Installations Art",text:"装置艺术"},{key:"Video Art",text:"录像艺术"},{key:"Conceptual Photography",text:"观念摄影"},{key:"Documentary Photography",text:"纪实摄影"},{key:"Fine Art Photography",text:"艺术摄影"},{key:"Street Photography",text:"街头摄影"},{key:"Portrait Photography",text:"肖像摄影"},{key:"Landscape Photography",text:"风景摄影"},{key:"Still Life Photography",text:"静物摄影"},{key:"Graphic Design",text:"平面设计"},{key:"Motion Graphics",text:"动态图形设计"},{key:"Art Deco",text:"装饰艺术"},{key:"Arts and Crafts",text:"艺术与手工艺"},{key:"Bauhaus",text:"包豪斯"},{key:"Art Nouveau",text:"新艺术"},{key:"Ukiyo-e",text:"浮世绘"},{key:"Haida Art",text:"海达艺术"},{key:"African Art",text:"非洲艺术"},{key:"Indigenous Art",text:"土著艺术"},{key:"Renaissance",text:"文艺复兴"}],G=l=>{x(l)},H=(l,a,We)=>{a&&F(a.selected?[...y,a.key]:y.filter($=>$!==a.key)),console.log("artStyle:"+y)},q=(l,a)=>{console.log("title:"+a),t(a||"")},K=(l,a)=>{console.log("titleDescription:"+a),g(a||"")},U=(l,a)=>{R(parseInt(a||"5"))},z=(l,a)=>{E(parseInt(a||"100"))},V=(l,a)=>{O(!!a)},A=async()=>{if(m&&p(void 0),_(!0),x(""),!d){p("标题不能为空"),_(!1);return}if(!r){p("标题描述不能为空"),_(!1);return}u();try{const a=await ze({approach:"gpt_with_dalle2",title:d,titleDescription:r,overrides:{paragraphs:C,maxParagraphLength:N,useDalle:k,artStyle:y}});console.log(a.copywriteHTML),x(a.copywriteHTML)}catch(l){p(l)}finally{_(!1)}};return c("div",{className:n.container,children:[e("div",{className:n.editorContainer,children:c(re,{className:n.editor,children:[c(w,{headerText:"编辑器",itemIcon:"Edit",itemKey:"editor",children:[P&&c(b,{children:[e(oe,{children:"正在生成文案，请稍候"}),e(ne,{label:"正在生成文案，请稍候"})]}),!P&&e(b,{children:e(Ee,{data:S,onChange:G})})]}),e(w,{headerText:"预览",itemIcon:"Globe",itemKey:"preview",children:m?e("div",{className:n.previewContainer,children:c(ie,{tokens:$e,children:[c(B,{variant:"xLarge",children:[e(se,{iconName:"Error"})," 生成失败"]}),e(B,{children:m.toString()}),e(f,{onClick:A,children:"重试"})]})}):e("div",{className:n.previewContainer,children:e("div",{dangerouslySetInnerHTML:{__html:S}})})})]})}),e("div",{className:n.commandsContainer,children:e(f,{className:n.commandButton,iconProps:{iconName:"Lightbulb"},onClick:()=>i(),children:"文案配置"})}),e("div",{children:e("div",{className:n.chatRoot,children:c(ce,{headerText:"配置",isOpen:o,isBlocking:!1,closeButtonAriaLabel:"Close",onRenderFooterContent:()=>c("div",{children:[e(f,{onClick:A,styles:Ve,iconProps:{iconName:"Lightbulb"},children:"生成"}),e(le,{onClick:u,children:"取消"})]}),onDismiss:u,isFooterAtBottom:!0,children:[m?e(b,{children:e(de,{messageBarType:he.error,isMultiline:!1,onDismiss:()=>p(void 0),dismissButtonAriaLabel:"Close",children:m.toString()})}):null,e(D,{className:n.chatSettingsSeparator,defaultValue:d,label:"文案标题",multiline:!0,autoAdjustHeight:!0,onChange:q,required:!0}),e(D,{className:n.chatSettingsSeparator,defaultValue:r,label:"文案主要内容",multiline:!0,autoAdjustHeight:!0,onChange:K,required:!0}),e(v,{}),e(M,{className:n.chatSettingsSeparator,labelPosition:I.top,label:"文案分为几段",min:1,max:50,defaultValue:C.toString(),onChange:U}),e(v,{}),e(M,{className:n.chatSettingsSeparator,labelPosition:I.top,label:"每一段最多多少字",min:10,max:500,defaultValue:N.toString(),onChange:z}),e(v,{}),e(ue,{className:n.chatSettingsSeparator,checked:k,label:"是否生成图片",onChange:V}),k&&e(ge,{placeholder:"选择图片风格",label:"图片风格",selectedKeys:y,onChange:H,multiSelect:!0,options:j})]})})})]})};me();pe();function Qe(){return e(Y,{children:e(ee,{children:e(T,{path:"/",element:e(we,{}),children:e(T,{index:!0,element:e(Je,{})})})})})}Q.createRoot(document.getElementById("root")).render(e(J.StrictMode,{children:e(Qe,{})}));
//# sourceMappingURL=index-b97b528a.js.map
