import{r as s}from"./react-92fe003e.js";import{R as j,N as x,u as H,a as U,b as E,D as W,c as K}from"./react-router-0f7b1f7b.js";import{c as A,s as B,b as S}from"./@remix-run-65e438cc.js";/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},w.apply(this,arguments)}function N(e,t){if(e==null)return{};var i={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function D(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F(e,t){return e.button===0&&(!t||t==="_self")&&!D(e)}const _=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],z=["aria-current","caseSensitive","className","end","style","to","children"];function Q(e){let{basename:t,children:i,window:n}=e,r=s.useRef();r.current==null&&(r.current=A({window:n,v5Compat:!0}));let a=r.current,[c,u]=s.useState({action:a.action,location:a.location});return s.useLayoutEffect(()=>a.listen(u),[a]),s.createElement(j,{basename:t,children:i,location:c.location,navigationType:c.action,navigator:a})}const I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=s.forwardRef(function(t,i){let{onClick:n,relative:r,reloadDocument:a,replace:c,state:u,target:p,to:o,preventScrollReset:m}=t,y=N(t,_),{basename:C}=s.useContext(x),v,R=!1;if(typeof o=="string"&&T.test(o)&&(v=o,I)){let l=new URL(window.location.href),d=o.startsWith("//")?new URL(l.protocol+o):new URL(o),L=B(d.pathname,C);d.origin===l.origin&&L!=null?o=L+d.search+d.hash:R=!0}let f=H(o,{relative:r}),g=M(o,{replace:c,state:u,target:p,preventScrollReset:m,relative:r});function h(l){n&&n(l),l.defaultPrevented||g(l)}return s.createElement("a",w({},y,{href:v||f,onClick:R||a?n:h,ref:i,target:p}))}),V=s.forwardRef(function(t,i){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:c=!1,style:u,to:p,children:o}=t,m=N(t,z),y=U(p,{relative:m.relative}),C=E(),v=s.useContext(W),{navigator:R}=s.useContext(x),f=R.encodeLocation?R.encodeLocation(y).pathname:y.pathname,g=C.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(g=g.toLowerCase(),h=h?h.toLowerCase():null,f=f.toLowerCase());let l=g===f||!c&&g.startsWith(f)&&g.charAt(f.length)==="/",d=h!=null&&(h===f||!c&&h.startsWith(f)&&h.charAt(f.length)==="/"),L=l?n:void 0,b;typeof a=="function"?b=a({isActive:l,isPending:d}):b=[a,l?"active":null,d?"pending":null].filter(Boolean).join(" ");let O=typeof u=="function"?u({isActive:l,isPending:d}):u;return s.createElement(G,w({},m,{"aria-current":L,className:b,ref:i,style:O,to:p}),typeof o=="function"?o({isActive:l,isPending:d}):o)});var P;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(P||(P={}));var k;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(k||(k={}));function M(e,t){let{target:i,replace:n,state:r,preventScrollReset:a,relative:c}=t===void 0?{}:t,u=K(),p=E(),o=U(e,{relative:c});return s.useCallback(m=>{if(F(m,i)){m.preventDefault();let y=n!==void 0?n:S(p)===S(o);u(e,{replace:y,state:r,preventScrollReset:a,relative:c})}},[p,u,o,n,r,i,e,a,c])}export{Q as H,G as L,V as N};
//# sourceMappingURL=react-router-dom-73a71a57.js.map