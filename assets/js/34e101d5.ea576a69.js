"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[126],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2889:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={title:"About Hardened Images"},u=void 0,c={unversionedId:"security/about_hardened_images",id:"security/about_hardened_images",title:"About Hardened Images",description:"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:",source:"@site/docs/security/about_hardened_images.md",sourceDirName:"security",slug:"/security/about_hardened_images",permalink:"/security/about_hardened_images",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/about_hardened_images.md",tags:[],version:"current",lastUpdatedAt:1669142828,formattedLastUpdatedAt:"11/22/2022",frontMatter:{title:"About Hardened Images"},sidebar:"mySidebar",previous:{title:"Automated Upgrades",permalink:"/upgrade/automated_upgrade"},next:{title:"CIS Hardening Guide",permalink:"/security/hardening_guide"}},l={},d=[],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"RKE2 hardened images are scanned for vulnerabilities at build time, and additional security protections have been added to decrease potential weaknesses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Images are not simply mirrored from upstream builds. The images are built from source on top of a hardened minimal base image, which is currently Red Hat Universal Base Image (UBI)."),(0,i.kt)("li",{parentName:"ul"},"Any binaries that are written in Go are compiled using a FIPS 140-2 compliant build process. For more information on this compiler, refer ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rke2.io/security/fips_support/#use-of-fips-compatible-go-compiler"},"here"),".")),(0,i.kt)("p",null,"You will know if an image has been hardened as above by the image name. RKE2 publishes image lists with each release. Refer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/download/v1.22.3-rc1%2Brke2r1/rke2-images-all.linux-amd64.txt"},"here")," for an example of a published image list."),(0,i.kt)("p",null,'!!! note "Note:"\nCurrently, RKE2 hardened images are multi-architecture. Only the Linux AMD64 architecture is FIPS compliant. Windows and the soon-to-come s390x architectures are not FIPS compliant.'))}m.isMDXComponent=!0}}]);