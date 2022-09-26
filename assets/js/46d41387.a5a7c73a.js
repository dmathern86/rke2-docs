"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[675],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=l,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],i={title:"Windows Uninstall"},s="Windows Uninstall",u={unversionedId:"install/windows_uninstall",id:"install/windows_uninstall",title:"Windows Uninstall",description:"Note:  Uninstalling the RKE2 Windows Agent deletes all of the node data.",source:"@site/docs/install/windows_uninstall.md",sourceDirName:"install",slug:"/install/windows_uninstall",permalink:"/rke2-docs/install/windows_uninstall",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/install/windows_uninstall.md",tags:[],version:"current",lastUpdatedAt:1664191865,formattedLastUpdatedAt:"9/26/2022",frontMatter:{title:"Windows Uninstall"},sidebar:"mySidebar",previous:{title:"Linux Uninstall",permalink:"/rke2-docs/install/linux_uninstall"},next:{title:"Upgrading RKE2 Clusters",permalink:"/rke2-docs/upgrade/"}},c={},d=[{value:"Tarball Method",id:"tarball-method",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows-uninstall"},"Windows Uninstall"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),"  Uninstalling the RKE2 Windows Agent deletes all of the node data.")),(0,o.kt)("p",null,"Depending on the method used to install RKE2, the uninstallation process varies."),(0,o.kt)("h2",{id:"tarball-method"},"Tarball Method"),(0,o.kt)("p",null,"To uninstall the RKE2 Windows Agent installed via the tarball method from your system, simply run the command below. This will shutdown all RKE2 Windows processes, remove the RKE2 Windows binary, and clean up the files used by RKE2."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"c:/usr/local/bin/rke2-uninstall.ps1\n")))}f.isMDXComponent=!0}}]);