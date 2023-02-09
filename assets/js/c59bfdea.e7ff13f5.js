"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:20},a="\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0",c={unversionedId:"functions/provisioning",id:"functions/provisioning",title:"\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0",description:"teigi \u306e Lodget \u3067\u306f\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002teigi \u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u6a5f\u80fd\u3067\u306f ansible \u306e\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3067\u304d\u3001 dadget \u3092\u30a4\u30f3\u30d9\u30f3\u30c8\u30ea\u3068\u3057\u3066 playbook \u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u6a5f\u80fd\u306f lodget \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u30bf\u30b9\u30af\u306e\u4e00\u3064\u3067\u3042\u308a\u3001\u30c7\u30fc\u30bf\u306e\u5909\u66f4\u3084\u30e6\u30fc\u30b6\u306e\u64cd\u4f5c\u306b\u3088\u308a\u30a2\u30af\u30c6\u30a3\u30d9\u30fc\u30c8\u3057\u307e\u3059\u3002",source:"@site/docs/functions/provisioning.md",sourceDirName:"functions",slug:"/functions/provisioning",permalink:"/teigi.github.io/docs/functions/provisioning",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/provisioning.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"documentationSidebar",previous:{title:"KVS",permalink:"/teigi.github.io/docs/functions/kvs"},next:{title:"\u30d5\u30a3\u30eb\u30bf\u5f0f",permalink:"/teigi.github.io/docs/functions/filterExpression"}},l={},s=[{value:"\u30a4\u30f3\u30d9\u30f3\u30c8\u30ea\u5b9a\u7fa9",id:"\u30a4\u30f3\u30d9\u30f3\u30c8\u30ea\u5b9a\u7fa9",level:2},{value:"\u5909\u66f4\u691c\u77e5",id:"\u5909\u66f4\u691c\u77e5",level:3},{value:"playbook",id:"playbook",level:2},{value:"\u5931\u6557\u3068\u518d\u8a66\u884c",id:"\u5931\u6557\u3068\u518d\u8a66\u884c",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"},"\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"),(0,o.kt)("p",null,"teigi \u306e Lodget \u3067\u306f\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u3092\u5b9a\u7fa9\u3067\u304d\u307e\u3059\u3002teigi \u306e\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u6a5f\u80fd\u3067\u306f ansible \u306e\u30b3\u30fc\u30c9\u3092\u8a18\u8ff0\u3067\u304d\u3001 dadget \u3092\u30a4\u30f3\u30d9\u30f3\u30c8\u30ea\u3068\u3057\u3066 playbook \u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u6a5f\u80fd\u306f lodget \u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u306e\u30bf\u30b9\u30af\u306e\u4e00\u3064\u3067\u3042\u308a\u3001\u30c7\u30fc\u30bf\u306e\u5909\u66f4\u3084\u30e6\u30fc\u30b6\u306e\u64cd\u4f5c\u306b\u3088\u308a\u30a2\u30af\u30c6\u30a3\u30d9\u30fc\u30c8\u3057\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"\u30a4\u30f3\u30d9\u30f3\u30c8\u30ea\u5b9a\u7fa9"},"\u30a4\u30f3\u30d9\u30f3\u30c8\u30ea\u5b9a\u7fa9"),(0,o.kt)("p",null,"\u672a\u57f7\u7b46"),(0,o.kt)("h3",{id:"\u5909\u66f4\u691c\u77e5"},"\u5909\u66f4\u691c\u77e5"),(0,o.kt)("h2",{id:"playbook"},"playbook"),(0,o.kt)("p",null,"\u672a\u57f7\u7b46"),(0,o.kt)("h3",{id:"\u5931\u6557\u3068\u518d\u8a66\u884c"},"\u5931\u6557\u3068\u518d\u8a66\u884c"))}p.isMDXComponent=!0}}]);