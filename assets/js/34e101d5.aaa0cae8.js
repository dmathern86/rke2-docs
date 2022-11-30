"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[126],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2889:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"About Hardened Images"},c=void 0,u={unversionedId:"security/about_hardened_images",id:"security/about_hardened_images",title:"About Hardened Images",description:"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:",source:"@site/docs/security/about_hardened_images.md",sourceDirName:"security",slug:"/security/about_hardened_images",permalink:"/security/about_hardened_images",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/about_hardened_images.md",tags:[],version:"current",lastUpdatedAt:1669845632,formattedLastUpdatedAt:"11/30/2022",frontMatter:{title:"About Hardened Images"},sidebar:"mySidebar",previous:{title:"Automated Upgrades",permalink:"/upgrade/automated_upgrade"},next:{title:"CIS Hardening Guide",permalink:"/security/hardening_guide"}},d={},l=[],p={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Images are not simply mirrored from upstream builds. The images are built from source on top of a hardened minimal base image, which is currently ",(0,i.kt)("a",{parentName:"li",href:"https://www.suse.com/products/base-container-images/"},"SLE Base Container Image (BCI)"),"."),(0,i.kt)("li",{parentName:"ul"},"Any binaries that are written in Go are compiled using a FIPS 140-2 compliant build process. For more information on this compiler, refer ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rke2.io/security/fips_support/#use-of-fips-compatible-go-compiler"},"here"),".")),(0,i.kt)("p",null,"You will know if an image has been hardened as above by the image name. RKE2 publishes image lists with each release. Refer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/download/v1.23.14%2Brke2r1/rke2-images-all.linux-amd64.txt"},"here")," for an example of a published image list."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, RKE2 hardened images are multi-architecture. Only the Linux AMD64 architecture is FIPS compliant. Windows and s390x architectures are not FIPS compliant."))))}m.isMDXComponent=!0}}]);