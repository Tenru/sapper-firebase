import{s as e,n as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as p,h as f,j as m,k as h,m as g,l as d,o as v,p as $,q as b,r as y,u as w,v as E,w as S,x,y as _,z as R,A as P}from"./chunk.4bbe8861.js";function L(s,r=t){let n;const a=[];function o(t){if(e(s,t)){if(s=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](s))}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return a.push(c),1===a.length&&(n=r(o)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}const A={},k=()=>({});function C(e){var s,r,h,g,d,v,$,b,y,w,E,S,x,_,R,P;return{c(){s=n("nav"),r=n("ul"),h=n("li"),g=n("a"),d=a("home"),$=o(),b=n("li"),y=n("a"),w=a("about"),S=o(),x=n("li"),_=n("a"),R=a("blog"),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);h=l(n,"LI",{class:!0},!1);var a=c(h);g=l(a,"A",{class:!0,href:!0},!1);var o=c(g);d=i(o,"home"),o.forEach(u),a.forEach(u),$=i(n,"\n\t\t"),b=l(n,"LI",{class:!0},!1);var p=c(b);y=l(p,"A",{class:!0,href:!0},!1);var f=c(y);w=i(f,"about"),f.forEach(u),p.forEach(u),S=i(n,"\n\n\t\t\n\t\t"),x=l(n,"LI",{class:!0},!1);var m=c(x);_=l(m,"A",{rel:!0,class:!0,href:!0},!1);var v=c(_);R=i(v,"blog"),v.forEach(u),m.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){p(g,"class",v=(void 0===e.segment?"selected":"")+" svelte-11kwxiv"),p(g,"href","."),p(h,"class","svelte-11kwxiv"),p(y,"class",E=("about"===e.segment?"selected":"")+" svelte-11kwxiv"),p(y,"href","about"),p(b,"class","svelte-11kwxiv"),p(_,"rel","prefetch"),p(_,"class",P=("blog"===e.segment?"selected":"")+" svelte-11kwxiv"),p(_,"href","blog"),p(x,"class","svelte-11kwxiv"),p(r,"class","svelte-11kwxiv"),p(s,"class","svelte-11kwxiv")},m(e,t){f(e,s,t),m(s,r),m(r,h),m(h,g),m(g,d),m(r,$),m(r,b),m(b,y),m(y,w),m(r,S),m(r,x),m(x,_),m(_,R)},p(e,t){e.segment&&v!==(v=(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&p(g,"class",v),e.segment&&E!==(E=("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(y,"class",E),e.segment&&P!==(P=("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(_,"class",P)},i:t,o:t,d(e){e&&u(s)}}}function j(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class U extends s{constructor(t){super(),r(this,t,j,C,e,["segment"])}}function q(e){var t,s,r,a=new U({props:{segment:e.segment}});const m=e.$$slots.default,w=h(m,e,null);return{c(){a.$$.fragment.c(),t=o(),s=n("main"),w&&w.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);w&&w.l(r),r.forEach(u),this.h()},h(){p(s,"class","svelte-1uhnsl8")},m(e,n){g(a,e,n),f(e,t,n),f(e,s,n),w&&w.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),a.$set(s),w&&w.p&&e.$$scope&&w.p(d(m,t,e,null),v(m,t,null))},i(e){r||($(a.$$.fragment,e),$(w,e),r=!0)},o(e){b(a.$$.fragment,e),b(w,e),r=!1},d(e){y(a,e),e&&(u(t),u(s)),w&&w.d(e)}}}function N(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class O extends s{constructor(t){super(),r(this,t,N,q,e,["segment"])}}function I(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){f(e,t,r),m(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&w(s,r)},d(e){e&&u(t)}}}function D(e){var s,r,h,g,d,v,$,b,y,S=e.error.message;document.title=s=e.status;var x=e.dev&&e.error.stack&&I(e);return{c(){r=o(),h=n("h1"),g=a(e.status),d=o(),v=n("p"),$=a(S),b=o(),x&&x.c(),y=E(),this.h()},l(t){r=i(t,"\n\n"),h=l(t,"H1",{class:!0},!1);var s=c(h);g=i(s,e.status),s.forEach(u),d=i(t,"\n\n"),v=l(t,"P",{class:!0},!1);var n=c(v);$=i(n,S),n.forEach(u),b=i(t,"\n\n"),x&&x.l(t),y=E(),this.h()},h(){p(h,"class","svelte-8od9u6"),p(v,"class","svelte-8od9u6")},m(e,t){f(e,r,t),f(e,h,t),m(h,g),f(e,d,t),f(e,v,t),m(v,$),f(e,b,t),x&&x.m(e,t),f(e,y,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&w(g,t.status),e.error&&S!==(S=t.error.message)&&w($,S),t.dev&&t.error.stack?x?x.p(e,t):((x=I(t)).c(),x.m(y.parentNode,y)):x&&(x.d(1),x=null)},i:t,o:t,d(e){e&&(u(r),u(h),u(d),u(v),u(b)),x&&x.d(e),e&&u(y)}}}function H(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class J extends s{constructor(t){super(),r(this,t,H,D,e,["status","error"])}}function V(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=S(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=E()},l(e){o&&o.$$.fragment.l(e),t=E()},m(e,r){o&&g(o,e,r),f(e,t,r),s=!0},p(e,s){var l=e.level1?x(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){R();const e=o;b(e.$$.fragment,1,()=>{y(e)}),P()}n?((o=new n(a())).$$.fragment.c(),$(o.$$.fragment,1),g(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||($(o.$$.fragment,e),s=!0)},o(e){o&&b(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&y(o,e)}}}function B(e){var t,s=new J({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){g(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||($(s.$$.fragment,e),t=!0)},o(e){b(s.$$.fragment,e),t=!1},d(e){y(s,e)}}}function K(e){var t,s,r,n,a=[B,V],o=[];function l(e){return e.error?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=E()},l(e){s.l(e),r=E()},m(e,s){o[t].m(e,s),f(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(R(),b(o[c],1,()=>{o[c]=null}),P(),(s=o[t])||(s=o[t]=a[t](n)).c(),$(s,1),s.m(r.parentNode,r))},i(e){n||($(s),n=!0)},o(e){b(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function T(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[K]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=S(r,s[n]);var a=new O({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){g(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?x(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||($(a.$$.fragment,e),t=!0)},o(e){b(a.$$.fragment,e),t=!1},d(e){y(a,e)}}}function z(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return _(A,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class G extends s{constructor(t){super(),r(this,t,z,T,e,["stores","error","status","segments","level0","level1"])}}const M=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],W=[{js:()=>import("./index.4f595076.js"),css:["index.4f595076.css"]},{js:()=>import("./about.5db16ddd.js"),css:[]},{js:()=>import("./index.44109b90.js"),css:["index.44109b90.css"]},{js:()=>import("./[slug].ccd082fd.js"),css:["[slug].ccd082fd.css"]}],X=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const Y="undefined"!=typeof __SAPPER__&&__SAPPER__;let F,Q,Z,ee=!1,te=[],se="{}";const re={page:L({}),preloading:L(null),session:L(Y&&Y.session)};let ne,ae;re.session.subscribe(async e=>{if(ne=e,!ee)return;ae=!0;const t=me(new URL(location.href)),s=Q={},{redirect:r,props:n,branch:a}=await ve(t);s===Q&&await de(r,a,n,t.page)});let oe,le=null;let ce,ie=1;const ue="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},pe={};function fe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function me(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Y.baseUrl))return null;let t=e.pathname.slice(Y.baseUrl.length);if(""===t&&(t="/"),!M.some(e=>e.test(t)))for(let s=0;s<X.length;s+=1){const r=X[s],n=r.pattern.exec(t);if(n){const s=fe(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function he(){return{x:pageXOffset,y:pageYOffset}}async function ge(e,t,s,r){if(t)ce=t;else{const e=he();pe[ce]=e,t=ce=++ie,pe[ce]=s?e:{x:0,y:0}}ce=t,F&&re.preloading.set(!0);const n=le&&le.href===e.href?le.promise:ve(e);le=null;const a=Q={},{redirect:o,props:l,branch:c}=await n;if(a===Q&&(await de(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=pe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}pe[ce]=e,e&&scrollTo(e.x,e.y)}}async function de(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=me(new URL(e,document.baseURI));return s?(ue[t.replaceState?"replaceState":"pushState"]({id:ce},"",e),ge(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(re.page.set(r),re.preloading.set(!1),F)F.$set(s);else{s.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},s.level0={props:await Z};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)be(e.nextSibling);be(e),be(t)}F=new G({target:oe,props:s,hydrate:!0})}te=t,se=JSON.stringify(r.query),ee=!0,ae=!1}async function ve(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;Z||(Z=Y.preloaded[0]||k.call(o,{path:s.path,query:s.query,params:{}},ne));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==se)return!0;const n=te[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!ae&&!u&&te[l]&&te[l].part===t.i)return te[l];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map($e);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(W[t.i]);let g;return g=ee||!Y.preloaded[l+1]?h?await h.call(o,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ne):{}:Y.preloaded[l+1],a[`level${f}`]={component:m,props:g,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function $e(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function be(e){e.parentNode.removeChild(e)}function ye(e){const t=me(new URL(e,document.baseURI));if(t)return le&&e===le.href||function(e,t){le={href:e,promise:t}}(e,ve(t)),le.promise}let we;function Ee(e){clearTimeout(we),we=setTimeout(()=>{Se(e)},20)}function Se(e){const t=_e(e.target);t&&"prefetch"===t.rel&&ye(t.href)}function xe(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=_e(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=me(n);if(a){ge(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ue.pushState({id:ce},"",n.href)}}function _e(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Re(e){if(pe[ce]=he(),e.state){const t=me(new URL(location.href));t?ge(t,e.state.id):location.href=location.href}else(function(e){ce=e})(ie=ie+1),ue.replaceState({id:ce},"",location.href)}!function(e){var t;"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),t=e.target,oe=t,addEventListener("click",xe),addEventListener("popstate",Re),addEventListener("touchstart",Se),addEventListener("mousemove",Ee),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ue.replaceState({id:ie},"",t);const s=new URL(location.href);if(Y.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:o}=Y;Z||(Z=n&&n[0]),de(null,[],{error:o,status:a,session:r,level0:{props:Z},level1:{props:{status:a,error:o},component:J},segments:n},{path:t,query:fe(s),params:{}})}();const r=me(s);return r?ge(r,ie,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.982440e3.js.map
