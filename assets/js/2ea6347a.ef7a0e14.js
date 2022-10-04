"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[146],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=l,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6156:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Linux Uninstall"},o="Linux Uninstall",u={unversionedId:"install/linux_uninstall",id:"install/linux_uninstall",title:"Linux Uninstall",description:"Note:  Uninstalling RKE2 deletes the cluster data and all of the scripts.",source:"@site/docs/install/linux_uninstall.md",sourceDirName:"install",slug:"/install/linux_uninstall",permalink:"/rke2-docs/install/linux_uninstall",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/install/linux_uninstall.md",tags:[],version:"current",lastUpdatedAt:1664891078,formattedLastUpdatedAt:"10/4/2022",frontMatter:{title:"Linux Uninstall"},sidebar:"mySidebar",previous:{title:"Windows Air-Gap Install",permalink:"/rke2-docs/install/windows_airgap"},next:{title:"Windows Uninstall",permalink:"/rke2-docs/install/windows_uninstall"}},c={},p=[{value:"RPM Method",id:"rpm-method",level:2},{value:"Tarball Method",id:"tarball-method",level:2}],d={toc:p};function h(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux-uninstall"},"Linux Uninstall"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:"),"  Uninstalling RKE2 deletes the cluster data and all of the scripts.")),(0,a.kt)("p",null,"Depending on the method used to install RKE2, the uninstallation process varies."),(0,a.kt)("h2",{id:"rpm-method"},"RPM Method"),(0,a.kt)("p",null,"To uninstall RKE2 installed via the RPM method from your system, simply run the commands corresponding to the version of RKE2 you have installed, either as the root user or through ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo"),". This will shutdown RKE2 process, remove the RKE2 RPMs, and clean up files used by RKE2."),(0,a.kt)("p",null,'=== "RKE2 v1.18.13+rke2r1 and newer"\nStarting with RKE2 ',(0,a.kt)("inlineCode",{parentName:"p"},"v1.18.13+rke2r1"),", the bundled ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-uninstall.sh")," script will remove the corresponding RPM packages during the uninstall process. Simply run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```bash\n/usr/bin/rke2-uninstall.sh\n```\n")),(0,a.kt)("p",null,'=== "RKE2 Prior to v1.18.13+rke2r1"\nIf you are running a version of RKE2 that is older than ',(0,a.kt)("inlineCode",{parentName:"p"},"v1.18.13+rke2r1"),", you will need to manually remove the RKE2 RPMs after calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-uninstall.sh")," script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"```sh\n/usr/bin/rke2-uninstall.sh\nyum remove -y 'rke2-*'\nrm -rf /run/k3s\n```\n")),(0,a.kt)("p",null,'=== "RKE2 Prior to v1.18.11+rke2r1"\nRPM based installs older than and including ',(0,a.kt)("inlineCode",{parentName:"p"},"v1.18.10+rke2r1")," did not package the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-uninstall.sh")," script. These instructions provide guidance on how to download and use the necessary scripts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First, remove the corresponding RKE2 packages and `/run/k3s` directory.\n\n```bash\nyum remove -y 'rke2-*'\nrm -rf /run/k3s\n```\n\nOnce those commands are run, the rke2-uninstall.sh and rke2-killall.sh scripts should be downloaded. These two scripts will stop any running containers and processes, clean up used processes, and ultimately remove RKE2 from the system. Run the commands below.\n\n```bash\ncurl -sL https://raw.githubusercontent.com/rancher/rke2/master/bundle/bin/rke2-uninstall.sh --output rke2-uninstall.sh\nchmod +x rke2-uninstall.sh\nmv rke2-uninstall.sh /usr/local/bin\n\ncurl -sL https://raw.githubusercontent.com/rancher/rke2/master/bundle/bin/rke2-killall.sh --output rke2-killall.sh\nchmod +x rke2-killall.sh\nmv rke2-killall.sh /usr/local/bin\n\n```\n\nNow run the rke2-uninstall.sh script. This will also call the rke2-killall.sh.\n\n```bash\n/usr/local/bin/rke2-uninstall.sh\n```\n")),(0,a.kt)("h2",{id:"tarball-method"},"Tarball Method"),(0,a.kt)("p",null,"To uninstall RKE2 installed via the Tarball method from your system, simply run the command below. This will shutdown process, remove the RKE2 binary, and clean up files used by RKE2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/bin/rke2-uninstall.sh\n")))}h.isMDXComponent=!0}}]);