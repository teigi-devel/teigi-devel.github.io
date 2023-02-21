"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[1551],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:20},a="CI/CD",l={unversionedId:"dev/CI-CD",id:"dev/CI-CD",title:"CI/CD",description:"CI/CD \u306b\u306f\u539f\u5247\u3068\u3057\u3066\u30d1\u30d6\u30ea\u30c3\u30af\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3002",source:"@site/docs/dev/CI-CD.md",sourceDirName:"dev",slug:"/dev/CI-CD",permalink:"/docs/dev/CI-CD",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/dev/CI-CD.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"documentationSidebar",previous:{title:"\u958b\u767a\u8981\u4ef6",permalink:"/docs/dev/develop"},next:{title:"github flow",permalink:"/docs/dev/GITHUB-FLOW-ja"}},c={},p=[{value:"github",id:"github",level:2},{value:"dockerhub",id:"dockerhub",level:2},{value:"npmjs",id:"npmjs",level:2},{value:"pypi",id:"pypi",level:2},{value:"domain",id:"domain",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cicd"},"CI/CD"),(0,i.kt)("p",null,"CI/CD \u306b\u306f\u539f\u5247\u3068\u3057\u3066\u30d1\u30d6\u30ea\u30c3\u30af\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("h2",{id:"github"},"github"),(0,i.kt)("p",null,"CI \u306f github \u4e0a\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089 github action \u3092\u4f7f\u7528\u3057\u3066\u884c\u3046\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"github \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u306f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/teigi-devel"},"https://github.com/teigi-devel")," \u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("li",{parentName:"ul"},"dependabot \u3092\u5229\u7528\u3057\u3066\u8106\u5f31\u6027\u3092\u6392\u9664\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"GITHUB-FLOW-ja"},"GITHUB-FLOW"),"\u306b\u5f93\u3063\u3066\u7ba1\u7406\u3059\u308b")),(0,i.kt)("h2",{id:"dockerhub"},"dockerhub"),(0,i.kt)("p",null,"2023/2/19 \u6642\u70b9\u3067 teigi \u306f\u7a7a\u3044\u3066\u3044\u306a\u3044\u3002\u5fc5\u8981\u306b\u306a\u3063\u305f\u6642\u70b9\u3067\u53d6\u5f97\u3059\u308b\u3002"),(0,i.kt)("h2",{id:"npmjs"},"npmjs"),(0,i.kt)("p",null,"teigi organization \u3092\u4f7f\u7528\u3059\u308b\u3002"),(0,i.kt)("h2",{id:"pypi"},"pypi"),(0,i.kt)("p",null,"pypi \u306f\u7d44\u7e54\u306f\u306a\u3044\u306e\u3067\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u540d\u306b _teigi \u3092\u4ed8\u4e0e\u3059\u308b\u3002"),(0,i.kt)("h2",{id:"domain"},"domain"),(0,i.kt)("p",null,"teigi.dev \u3092\u53d6\u5f97\u6e08\u307f\u3002"))}d.isMDXComponent=!0}}]);