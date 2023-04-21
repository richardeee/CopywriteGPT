/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const W="popstate";function ie(e){e===void 0&&(e={});function t(a,i){let{pathname:l="/",search:s="",hash:o=""}=S(a.location.hash.substr(1));return I("",{pathname:l,search:s,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){let l=a.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let o=a.location.href,c=o.indexOf("#");s=c===-1?o:o.slice(0,c)}return s+"#"+(typeof i=="string"?i:j(i))}function r(a,i){R(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return V(t,n,r,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function R(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function T(){return Math.random().toString(36).substr(2,8)}function L(e,t){return{usr:e.state,key:e.key,idx:t}}function I(e,t,n,r){return n===void 0&&(n=null),x({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?S(t):t,{state:n,key:t&&t.key||r||T()})}function j(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function S(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function V(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,s=y.Pop,o=null,c=u();c==null&&(c=0,l.replaceState(x({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function d(){s=y.Pop;let h=u(),f=h==null?null:h-c;c=h,o&&o({action:s,location:m.location,delta:f})}function g(h,f){s=y.Push;let p=I(m.location,h,f);n&&n(p,h),c=u()+1;let b=L(p,c),P=m.createHref(p);try{l.pushState(b,"",P)}catch{a.location.assign(P)}i&&o&&o({action:s,location:m.location,delta:1})}function B(h,f){s=y.Replace;let p=I(m.location,h,f);n&&n(p,h),c=u();let b=L(p,c),P=m.createHref(p);l.replaceState(b,"",P),i&&o&&o({action:s,location:m.location,delta:0})}function E(h){let f=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof h=="string"?h:j(h);return v(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let m={get action(){return s},get location(){return e(a,l)},listen(h){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(W,d),o=h,()=>{a.removeEventListener(W,d),o=null}},createHref(h){return t(a,h)},createURL:E,encodeLocation(h){let f=E(h);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:B,go(h){return l.go(h)}};return m}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));function le(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?S(t):t,a=Y(r.pathname||"/",n);if(a==null)return null;let i=H(e);k(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=G(i[s],Q(a));return l}function H(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,s)=>{let o={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=w([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),H(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:D(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,l);else for(let o of C(i.path))a(i,l,o)}),t}function C(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=C(r.join("/")),s=[];return s.push(...l.map(o=>o===""?i:[i,o].join("/"))),a&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function k(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A=/^:\w+$/,M=3,z=2,N=1,_=10,q=-2,U=e=>e==="*";function D(e,t){let n=e.split("/"),r=n.length;return n.some(U)&&(r+=q),t&&(r+=z),n.filter(a=>!U(a)).reduce((a,i)=>a+(A.test(i)?M:i===""?N:_),r)}function J(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function G(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],o=l===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",u=K({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},c);if(!u)return null;Object.assign(r,u.params);let d=s.route;i.push({params:r,pathname:w([a,u.pathname]),pathnameBase:te(w([a,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(a=w([a,u.pathnameBase]))}return i}function K(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let g=s[d]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[u]=X(s[d]||"",u),c},{}),pathname:i,pathnameBase:l,pattern:e}}function F(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),R(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Q(e){try{return decodeURI(e)}catch(t){return R(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function X(e,t){try{return decodeURIComponent(e)}catch(n){return R(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Y(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Z(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?S(e):e;return{pathname:n?n.startsWith("/")?n:ee(n,t):t,search:ne(r),hash:ae(a)}}function ee(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function $(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function se(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oe(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=S(e):(a=x({},e),v(!a.pathname||!a.pathname.includes("?"),$("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),$("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),$("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,s;if(r||l==null)s=n;else{let d=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;a.pathname=g.join("/")}s=d>=0?t[d]:"/"}let o=Z(a,s),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const w=e=>e.join("/").replace(/\/\/+/g,"/"),te=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ne=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ae=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ce(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}export{y as A,ce as a,j as b,ie as c,se as g,v as i,w as j,le as m,S as p,oe as r,Y as s};
//# sourceMappingURL=@remix-run-65e438cc.js.map
