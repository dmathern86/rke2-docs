"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[577],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2168:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_label:"Subcommands",sidebar_position:11,title:""},i="Subcommands",l={unversionedId:"subcommands",id:"subcommands",title:"",description:"The rke2 binary comes packaged with multiple subcommands. This page gives information on the options that come with those.",source:"@site/docs/subcommands.md",sourceDirName:".",slug:"/subcommands",permalink:"/rke2-docs/subcommands",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/subcommands.md",tags:[],version:"current",lastUpdatedAt:1664191865,formattedLastUpdatedAt:"9/26/2022",sidebarPosition:11,frontMatter:{sidebar_label:"Subcommands",sidebar_position:11,title:""},sidebar:"mySidebar",previous:{title:"Known Issues and Limitations",permalink:"/rke2-docs/known_issues"}},d={},u=[{value:"etcd-snapshot",id:"etcd-snapshot",level:2},{value:"certificate",id:"certificate",level:2},{value:"secrets-encrypt",id:"secrets-encrypt",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subcommands"},"Subcommands"),(0,o.kt)("p",null,"The rke2 binary comes packaged with multiple subcommands. This page gives information on the options that come with those."),(0,o.kt)("h2",{id:"etcd-snapshot"},"etcd-snapshot"),(0,o.kt)("p",null,"This subcommand is used to take snapshots manually, list any snapshots currently available, and manually delete any unwanted or older snapshots."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'NAME:\n   rke2 etcd-snapshot - Trigger an immediate etcd snapshot\n\nUSAGE:\n   rke2 etcd-snapshot command [command options] [arguments...]\n\nCOMMANDS:\n   delete       Delete given snapshot(s)\n   ls, list, l  List snapshots\n   prune        Remove snapshots that exceed the configured retention count\n   save         Trigger an immediate etcd snapshot\n\nOPTIONS:\n   --debug                                              (logging) Turn on debug logs [$RKE2_DEBUG]\n   --config FILE, -c FILE                               (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [$RKE2_CONFIG_FILE]\n   --log value, -l value                                (logging) Log to file\n   --alsologtostderr                                    (logging) Log to standard error as well as file (if set)\n   --node-name value                                    (agent/node) Node name [$RKE2_NODE_NAME]\n   --data-dir value, -d value                           (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --dir value, --etcd-snapshot-dir value               (db) Directory to save etcd on-demand snapshot. (default: ${data-dir}/db/snapshots)\n   --name value                                         (db) Set the base name of the etcd on-demand snapshot (appended with UNIX timestamp). (default: "on-demand")\n   --snapshot-compress, --etcd-snapshot-compress        (db) Compress etcd snapshot\n   --s3, --etcd-s3                                      (db) Enable backup to S3\n   --s3-endpoint value, --etcd-s3-endpoint value        (db) S3 endpoint url (default: "s3.amazonaws.com")\n   --s3-endpoint-ca value, --etcd-s3-endpoint-ca value  (db) S3 custom CA cert to connect to S3 endpoint\n   --s3-skip-ssl-verify, --etcd-s3-skip-ssl-verify      (db) Disables S3 SSL certificate validation\n   --s3-access-key value, --etcd-s3-access-key value    (db) S3 access key [$AWS_ACCESS_KEY_ID]\n   --s3-secret-key value, --etcd-s3-secret-key value    (db) S3 secret key [$AWS_SECRET_ACCESS_KEY]\n   --s3-bucket value, --etcd-s3-bucket value            (db) S3 bucket name\n   --s3-region value, --etcd-s3-region value            (db) S3 region / bucket location (optional) (default: "us-east-1")\n   --s3-folder value, --etcd-s3-folder value            (db) S3 folder\n   --s3-insecure, --etcd-s3-insecure                    (db) Disables S3 over HTTPS\n   --s3-timeout value, --etcd-s3-timeout value          (db) S3 timeout (default: 30s)\n   --help, -h                                           show help\n')),(0,o.kt)("h2",{id:"certificate"},"certificate"),(0,o.kt)("p",null,"This subcommand can be used to rotate the expiry of certificates of the services running in the cluster, such as the kubelet, etcd, and api-server. These are rotated automatically before they expire each year, but this allows for the cases where one might want to rotate them earlier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'NAME:\n   rke2 certificate - Certificates management\n\nUSAGE:\n   rke2 certificate command [command options] [arguments...]\n\nCOMMANDS:\n   rotate  Certificate Rotatation\n\nOPTIONS:\n   --debug                     (logging) Turn on debug logs [$RKE2_DEBUG]\n   --config FILE, -c FILE      (config) Load configuration from FILE (default: "/etc/rancher/rke2/config.yaml") [$RKE2_CONFIG_FILE]\n   --log value, -l value       (logging) Log to file\n   --alsologtostderr           (logging) Log to standard error as well as file (if set)\n   --data-dir value, -d value  (data) Folder to hold state (default: "/var/lib/rancher/rke2")\n   --service value, -s value   List of services to rotate certificates for. Options include (admin, api-server, controller-manager, scheduler, rke2-controller, rke2-server, cloud-controller, etcd, auth-proxy, kubelet, kube-proxy)\n   --help, -h                  show help\n')),(0,o.kt)("h2",{id:"secrets-encrypt"},"secrets-encrypt"),(0,o.kt)("p",null,"RKE2 has secrets encryption enabled by default. This subcommand allows for disabling that, as well as rotating the encryption key used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME:\n   rke2 secrets-encrypt - Control secrets encryption and keys rotation\n\nUSAGE:\n   rke2 secrets-encrypt command [command options] [arguments...]\n\nCOMMANDS:\n   status     Print current status of secrets encryption\n   enable     Enable secrets encryption\n   disable    Disable secrets encryption\n   prepare    Prepare for encryption keys rotation\n   rotate     Rotate secrets encryption keys\n   reencrypt  Reencrypt all data with new encryption key\n\nOPTIONS:\n   --help, -h  show help\n")))}m.isMDXComponent=!0}}]);