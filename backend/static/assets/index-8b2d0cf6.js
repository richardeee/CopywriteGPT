import{j as P,r as l,a as Z}from"./react-92fe003e.js";import{c as ee}from"./react-dom-1ef96aba.js";import{L as te,N as ae,H as re}from"./react-router-dom-73a71a57.js";import{O as oe,d as ie,e as R}from"./react-router-0f7b1f7b.js";import{l as ne}from"./react-quill-70a36966.js";import{u as se,a as ce,P as le,b as M,L as E,S as de,c as he,T as G,I as ue,d as C,e as ge,D as me,M as pe,f as ye,g as N,h as S,i as O,j as H,C as _e,k as ke,R as xe,l as F,m as fe,n as ve}from"./@fluentui-61e81305.js";import"./lodash-b9ab1447.js";import"./@remix-run-65e438cc.js";import"./quill-b1a40b40.js";import"./tslib-14a4c710.js";import"./@microsoft-31b40247.js";import"./@griffel-69ea1929.js";import"./@emotion-8a8e73f6.js";import"./keyborg-a20a2715.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))h(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&h(g)}).observe(document,{childList:!0,subtree:!0});function u(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(a){if(a.ep)return;a.ep=!0;const r=u(a);fetch(a.href,r)}})();const k=P.Fragment,e=P.jsx,n=P.jsxs;const be="/assets/github-fab00c2d.svg",Le="_layout_11xba_1",Ce="_header_11xba_13",Ne="_headerContainer_11xba_23",Se="_headerTitleContainer_11xba_39",Pe="_headerLogo_11xba_55",Ae="_headerTitle_11xba_39",Te="_headerNavList_11xba_73",we="_headerNavPageLink_11xba_85",Be="_headerNavPageLinkActive_11xba_113",De="_headerNavLeftMargin_11xba_123",Ie="_headerRightText_11xba_131",Re="_microsoftLogo_11xba_141",Me="_githubLogo_11xba_151",d={layout:Le,header:Ce,headerContainer:Ne,headerTitleContainer:Se,headerLogo:Pe,headerTitle:Ae,headerNavList:Te,headerNavPageLink:we,headerNavPageLinkActive:Be,headerNavLeftMargin:De,headerRightText:Ie,microsoftLogo:Re,githubLogo:Me},Ee=()=>n("div",{className:d.layout,children:[e("header",{className:d.header,role:"banner",children:n("div",{className:d.headerContainer,children:[e(te,{to:"/",className:d.headerTitleContainer,children:e("h3",{className:d.headerTitle,children:"GPT + Dalle2 | Sample"})}),e("nav",{children:n("ul",{className:d.headerNavList,children:[e("li",{children:e(ae,{to:"/",className:({isActive:o})=>o?d.headerNavPageLinkActive:d.headerNavPageLink,children:"Copywriting"})}),e("li",{className:d.headerNavLeftMargin,children:e("a",{href:"https://github.com/richardeee/CopywriteGPT",target:"_blank",title:"Github repository link",children:e("img",{src:be,alt:"Github logo","aria-label":"Link to github repository",width:"20px",height:"20px",className:d.githubLogo})})})]})}),e("h3",{className:d.headerRightText,children:"Azure ChatGPT + Dall-E2"})]})}),e(oe,{})]}),Ge="_ck_15cr4_1",Oe="_ckeditor_15cr4_41",He={ck:Ge,"ck-word-count":"_ck-word-count_15cr4_1","ck-word-count__words":"_ck-word-count__words_15cr4_23","ck-rounded-corners":"_ck-rounded-corners_15cr4_31","ck-editor__main":"_ck-editor__main_15cr4_31","ck-editor__editable":"_ck-editor__editable_15cr4_31","ck-source-editing-area":"_ck-source-editing-area_15cr4_33",ckeditor:Oe},Fe={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},je=["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image"],qe=({data:o,onChange:s})=>e("div",{className:He.ckeditor,children:e(ne,{value:o,onChange:s,theme:"snow",modules:Fe,formats:je})}),Ke="_container_9s6yc_1",Ue="_loadingLogo_9s6yc_11",Ve="_commandsContainer_9s6yc_19",ze="_commandButton_9s6yc_29",$e="_generateButton_9s6yc_37",Je="_editorContainer_9s6yc_49",Qe="_editor_9s6yc_49",We="_preview_9s6yc_73",i={container:Ke,loadingLogo:Ue,commandsContainer:Ve,commandButton:ze,generateButton:$e,editorContainer:Je,editor:Qe,preview:We};async function Xe(o){var h,a,r,g,m,x;const s=await fetch("/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({approach:o.approach,title:o.title,title_description:o.titleDescription,overrides:{paragraphs:(h=o.overrides)==null?void 0:h.paragraphs,max_paragraph_length:(a=o.overrides)==null?void 0:a.maxParagraphLength,use_dalle:(r=o.overrides)==null?void 0:r.useDalle,art_style:(g=o.overrides)==null?void 0:g.artStyle,image_generator:(m=o.overrides)==null?void 0:m.imageGenerator,sd_host:(x=o.overrides)==null?void 0:x.sdHost}})}),u=await s.json();if(s.status>299||!s.ok)throw Error(u.error||"Unknown error");return u}const Ye={root:{marginRight:8}},Ze={childrenGap:10,padding:10},et=()=>{const[o,{setTrue:s,setFalse:u}]=se(!1),[h,a]=l.useState(""),[r,g]=l.useState(""),[m,x]=l.useState(5),[A,j]=l.useState(100),[v,q]=l.useState(!0),[T,f]=l.useState(!1),[p,y]=l.useState(),[w,b]=l.useState(""),[_,K]=l.useState(["Landscape Photography"]),[L,U]=l.useState("dalle"),B=ce("imageGenerator");l.useState("");const V=[{key:"Baroque",text:"巴洛克风格"},{key:"Rococo",text:"洛可可风格"},{key:"Romanticism",text:"浪漫主义"},{key:"Realism",text:"现实主义"},{key:"Impressionism",text:"印象派"},{key:"Post-Impressionism",text:"后印象派"},{key:"Expressionism",text:"表现主义"},{key:"Fauvism",text:"野兽派"},{key:"Cubism",text:"立体主义"},{key:"Futurism",text:"未来主义"},{key:"Dadaism",text:"达达主义"},{key:"Surrealism",text:"超现实主义"},{key:"Abstract Expressionism",text:"抽象表现主义"},{key:"Pop Art",text:"波普艺术"},{key:"Op Art",text:"视觉艺术"},{key:"Minimalism",text:"极简主义"},{key:"Conceptual Art",text:"观念艺术"},{key:"Photorealism",text:"超写实主义"},{key:"Neo-Expressionism",text:"新表现主义"},{key:"Neo-Pop Art",text:"新波普艺术"},{key:"Hyperrealism",text:"超现实主义"},{key:"Graffiti Art",text:"涂鸦艺术"},{key:"Street Art",text:"街头艺术"},{key:"Outsider Art",text:"非主流艺术"},{key:"Feminist Art",text:"女性主义艺术"},{key:"Environmental Art",text:"环境艺术"},{key:"Land Art",text:"土地艺术"},{key:"Body Art",text:"身体艺术"},{key:"Performance Art",text:"行为艺术"},{key:"New Media Art",text:"新媒体艺术"},{key:"Installations Art",text:"装置艺术"},{key:"Video Art",text:"录像艺术"},{key:"Conceptual Photography",text:"观念摄影"},{key:"Documentary Photography",text:"纪实摄影"},{key:"Fine Art Photography",text:"艺术摄影"},{key:"Street Photography",text:"街头摄影"},{key:"Portrait Photography",text:"肖像摄影"},{key:"Landscape Photography",text:"风景摄影"},{key:"Still Life Photography",text:"静物摄影"},{key:"Graphic Design",text:"平面设计"},{key:"Motion Graphics",text:"动态图形设计"},{key:"Art Deco",text:"装饰艺术"},{key:"Arts and Crafts",text:"艺术与手工艺"},{key:"Bauhaus",text:"包豪斯"},{key:"Art Nouveau",text:"新艺术"},{key:"Ukiyo-e",text:"浮世绘"},{key:"Haida Art",text:"海达艺术"},{key:"African Art",text:"非洲艺术"},{key:"Indigenous Art",text:"土著艺术"},{key:"Renaissance",text:"文艺复兴"}],z=c=>{b(c)},$=(c,t,at)=>{t&&K(t.selected?[..._,t.key]:_.filter(Y=>Y!==t.key)),console.log("artStyle:"+_)},D=(c,t)=>{console.log("title:"+t),a(t||"")},J=(c,t)=>{console.log("titleDescription:"+t),g(t||"")},Q=(c,t)=>{x(parseInt(t||"5"))},W=(c,t)=>{j(parseInt(t||"100"))},X=(c,t)=>{q(!!t)},I=async()=>{if(p&&y(void 0),f(!0),b(""),!h){y("标题不能为空"),f(!1);return}if(!r){y("标题描述不能为空"),f(!1);return}u();try{const t=await Xe({approach:"gpt_with_dalle2",title:h,titleDescription:r,overrides:{paragraphs:m,maxParagraphLength:A,useDalle:v,artStyle:_,imageGenerator:L}});console.log(t.copywriteHTML),b(t.copywriteHTML)}catch(c){y(c)}finally{f(!1)}};return n("div",{className:i.container,children:[e("div",{className:i.editorContainer,children:n(le,{className:i.editor,children:[n(M,{headerText:"编辑器",itemIcon:"Edit",itemKey:"editor",children:[T&&n(k,{children:[e(E,{children:"正在生成文案，请稍候"}),e(de,{label:"正在生成文案，请稍候"})]}),!T&&e(k,{children:e(qe,{data:w,onChange:z})})]}),e(M,{headerText:"预览",itemIcon:"Globe",itemKey:"preview",children:p?e("div",{className:i.previewContainer,children:n(he,{tokens:Ze,children:[n(G,{variant:"xLarge",children:[e(ue,{iconName:"Error"})," 生成失败"]}),e(G,{children:p.toString()}),e(C,{onClick:I,children:"重试"})]})}):e("div",{className:i.previewContainer,children:e("div",{dangerouslySetInnerHTML:{__html:w}})})})]})}),e("div",{className:i.commandsContainer,children:e(C,{className:i.commandButton,iconProps:{iconName:"Lightbulb"},onClick:()=>s(),children:"文案配置"})}),e("div",{children:e("div",{className:i.chatRoot,children:n(ge,{headerText:"配置",isOpen:o,isBlocking:!1,closeButtonAriaLabel:"Close",onRenderFooterContent:()=>n("div",{children:[e(C,{onClick:I,styles:Ye,iconProps:{iconName:"Lightbulb"},children:"生成"}),e(me,{onClick:u,children:"取消"})]}),onDismiss:u,isFooterAtBottom:!0,children:[p?e(k,{children:e(pe,{messageBarType:ye.error,isMultiline:!1,onDismiss:()=>y(void 0),dismissButtonAriaLabel:"Close",children:p.toString()})}):null,e(N,{className:i.chatSettingsSeparator,defaultValue:h,label:"文案标题",multiline:!0,autoAdjustHeight:!0,onChange:D,required:!0}),e(N,{className:i.chatSettingsSeparator,defaultValue:r,label:"文案主要内容",multiline:!0,autoAdjustHeight:!0,onChange:J,required:!0}),e(S,{}),e(O,{className:i.chatSettingsSeparator,labelPosition:H.top,label:"文案分为几段",min:1,max:50,defaultValue:m.toString(),onChange:Q}),e(S,{}),e(O,{className:i.chatSettingsSeparator,labelPosition:H.top,label:"每一段最多多少字",min:10,max:500,defaultValue:A.toString(),onChange:W}),e(S,{}),e(_e,{className:i.chatSettingsSeparator,checked:v,label:"是否生成图片",onChange:X}),v&&n(k,{children:[e(ke,{placeholder:"选择图片风格",label:"图片风格",selectedKeys:_,onChange:$,multiSelect:!0,options:V}),e(E,{id:B,children:"图片生成器"}),n(xe,{className:i.chatSettingsSeparator,onChange:(c,t)=>U(t.value),"aria-labelledby":B,value:L,children:[e(F,{value:"dalle",label:"Dall-E2"}),e(F,{value:"sd",label:"Stable Diffusion"})]}),L==="sd"&&e(k,{children:e(N,{className:i.chatSettingsSeparator,defaultValue:h,label:"Host",onChange:D,required:!0})})]})]})})})]})};fe();ve();function tt(){return e(re,{children:e(ie,{children:e(R,{path:"/",element:e(Ee,{}),children:e(R,{index:!0,element:e(et,{})})})})})}ee.createRoot(document.getElementById("root")).render(e(Z.StrictMode,{children:e(tt,{})}));
//# sourceMappingURL=index-8b2d0cf6.js.map