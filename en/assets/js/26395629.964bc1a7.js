"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[9276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:30},c="\u30d5\u30a3\u30eb\u30bf\u5f0f",a={unversionedId:"functions/filterExpression",id:"functions/filterExpression",title:"\u30d5\u30a3\u30eb\u30bf\u5f0f",description:"teigi \u306e Lodget \u5185\u3067\u30d5\u30a3\u30eb\u30bf\u5f0f\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002",source:"@site/docs/functions/filterExpression.md",sourceDirName:"functions",slug:"/functions/filterExpression",permalink:"/en/docs/functions/filterExpression",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/filterExpression.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"documentationSidebar",previous:{title:"\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0",permalink:"/en/docs/functions/provisioning"},next:{title:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",permalink:"/en/docs/functions/object"}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u30d5\u30a3\u30eb\u30bf\u5f0f"},"\u30d5\u30a3\u30eb\u30bf\u5f0f"),(0,o.kt)("p",null,"teigi \u306e Lodget \u5185\u3067\u30d5\u30a3\u30eb\u30bf\u5f0f\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30a4\u30d9\u30f3\u30c8\u5b9a\u7fa9\u3067\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5909\u66f4\u304c\u30a4\u30d9\u30f3\u30c8\u306e\u5bfe\u8c61\u30d5\u30a3\u30eb\u30bf\u3001\u767a\u706b\u6761\u4ef6\u30d5\u30a3\u30eb\u30bf"),(0,o.kt)("li",{parentName:"ul"},"\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9\u5b9a\u7fa9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u7d5e\u308a\u8fbc\u307f\u30d5\u30a3\u30eb\u30bf\uff08\uff1dACL\u306b\u304a\u3051\u308b\u5bfe\u8c61\u30d5\u30a3\u30eb\u30bf\uff09")),(0,o.kt)("p",null,"\u30d5\u30a3\u30eb\u30bf\u5f0f\u306f\u57fa\u672c\u7684\u306b Mongo \u306e\u30d5\u30a3\u30eb\u30bf\u5f0f\u306b\u6e96\u3058\u3066\u304a\u308a\u3001\u30d5\u30a3\u30eb\u30bf\u5f0f\u30a8\u30c7\u30a3\u30bf\u3067\u7de8\u96c6\u3067\u304d\u307e\u3059\u3002\n\u30d5\u30a3\u30eb\u30bf\u5f0f\u306e\u4e2d\u306e\u5c5e\u6027\u53c2\u7167\u306f\u30b0\u30ed\u30fc\u30d0\u30eb\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30c1\u30a7\u30c3\u30af\u306e\u5bfe\u8c61\u3068\u306a\u308a\u307e\u3059\u3002"))}p.isMDXComponent=!0}}]);