(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[12],{105:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[K]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[W]||!!e.constructor[W]||s(e)||d(e))}function o(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:U)(e).forEach((function(n){return t(n,e[n],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[K];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:s(e)?2:d(e)?3:0}function u(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){return 2===c(e)?e.get(t):e[t]}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function s(e){return I&&e instanceof Map}function d(e){return _&&e instanceof Set}function p(e){return e.o||e.t}function b(e,t){if(void 0===t&&(t=!1),Array.isArray(e))return e.slice();var n=Object.create(Object.getPrototypeOf(e));return o(e,(function(i){if(i!==K){var a=Object.getOwnPropertyDescriptor(e,i),o=a.value;a.get&&(t||r(1),o=a.get.call(e)),a.enumerable?n[i]=o:Object.defineProperty(n,i,{value:o,writable:!0,configurable:!0})}})),n}function h(e,t){i(e)||y(e)||!a(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=v),Object.freeze(e),t&&o(e,(function(e,t){return h(t,!0)}),!0))}function v(){r(2)}function y(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function O(e){var t=V[e];return t||r(19,e),t}function m(){return N}function g(e,t){t&&(O("Patches"),e.u=[],e.s=[],e.v=t)}function j(e){P(e),e.p.forEach(S),e.p=null}function P(e){e===N&&(N=e.l)}function E(e){return N={p:[],l:N,h:e,m:!0,_:0}}function S(e){var t=e[K];0===t.i||1===t.i?t.j():t.O=!0}function w(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.g||O("ES5").S(t,e,i),i?(n[K].P&&(j(t),r(4)),a(e)&&(e=A(t,e),t.l||D(t,e)),t.u&&O("Patches").M(n[K],e,t.u,t.s)):e=A(t,n,[]),j(t),t.u&&t.v(t.u,t.s),e!==M?e:void 0}function A(e,t,n){if(y(t))return t;var r=t[K];if(!r)return o(t,(function(i,a){return k(e,r,t,i,a,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return D(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=b(r.k,!0):r.o;o(i,(function(t,a){return k(e,r,i,t,a,n)})),D(e,i,!1),n&&e.u&&O("Patches").R(r,n,e.u,e.s)}return r.o}function k(e,t,n,r,o,s){if(i(o)){var d=A(e,o,s&&t&&3!==t.i&&!u(t.D,r)?s.concat(r):void 0);if(b=r,h=d,2===(v=c(p=n))?p.set(b,h):3===v?(p.delete(b),p.add(h)):p[b]=h,!i(d))return;e.m=!1}var p,b,h,v;if((!t||!f(o,l(t.t,r)))&&a(o)){if(!e.h.N&&e._<1)return;A(e,o),t&&t.A.l||D(e,o)}}function D(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&h(t,n)}function T(e,t){var n=e[K],r=Reflect.getOwnPropertyDescriptor(n?p(n):e,t);return r&&r.value}function z(e){if(!e.P){if(e.P=!0,0===e.i||1===e.i){var t=e.o=b(e.t);o(e.p,(function(e,n){t[e]=n})),e.p=void 0}e.l&&z(e.l)}}function x(e){e.o||(e.o=b(e.t))}function R(e,t,n){var r=s(t)?O("MapSet").T(t,n):d(t)?O("MapSet").F(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:m(),P:!1,I:!1,D:{},l:t,t:e,k:null,p:{},o:null,j:null,C:!1},i=r,a=J;n&&(i=[r],a=$);var o=Proxy.revocable(i,a),c=o.revoke,u=o.proxy;return r.k=u,r.j=c,u}(t,n):O("ES5").J(t,n);return(n?n.A:m()).p.push(r),r}var F,N,C="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),I="undefined"!=typeof Map,_="undefined"!=typeof Set,H="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,M=C?Symbol("immer-nothing"):((F={})["immer-nothing"]=!0,F),W=C?Symbol("immer-draftable"):"__$immer_draftable",K=C?Symbol("immer-state"):"__$immer_state",U=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),V={},J={get:function(e,t){if(t===K)return e;var n=e.p;if(!e.P&&u(n,t))return n[t];var r=p(e)[t];if(e.I||!a(r))return r;if(e.P){if(r!==T(e.t,t))return r;n=e.o}return n[t]=R(e.A.h,r,e)},has:function(e,t){return t in p(e)},ownKeys:function(e){return Reflect.ownKeys(p(e))},set:function(e,t,n){if(!e.P){var r=T(e.t,t);if(n?f(r,n)||n===e.p[t]:f(r,n)&&t in e.t)return!0;x(e),z(e)}return e.D[t]=!0,e.o[t]=n,!0},deleteProperty:function(e,t){return void 0!==T(e.t,t)||t in e.t?(e.D[t]=!1,x(e),z(e)):e.D[t]&&delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=p(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&(r.writable=!0,r.configurable=1!==e.i||"length"!==t),r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},$={};o(J,(function(e,t){$[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),$.deleteProperty=function(e,t){return J.deleteProperty.call(this,e[0],t)},$.set=function(e,t,n){return J.set.call(this,e[0],t,n,e[0])};var L=new(function(){function e(e){this.g=H,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var o=this;return function(e){var n=this;void 0===e&&(e=i);for(var r=arguments.length,a=Array(r>1?r-1:0),c=1;c<r;c++)a[c-1]=arguments[c];return o.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(a))}))}}var c;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),a(e)){var u=E(this),l=R(this,e,void 0),f=!0;try{c=t(l),f=!1}finally{f?j(u):P(u)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(e){return g(u,n),w(e,u)}),(function(e){throw j(u),e})):(g(u,n),w(c,u))}if((c=t(e))!==M)return void 0===c&&(c=e),this.N&&h(c,!0),c},t.produceWithPatches=function(e,t){var n,r,i=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){a(e)||r(8);var t=E(this),n=R(this,e,void 0);return n[K].C=!0,P(t),n},t.finishDraft=function(e,t){var n=(e&&e[K]).A;return g(n,t),w(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){H||r(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var a=O("Patches").U;return i(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(n+1))}))},e}()),X=L.produce;L.produceWithPatches.bind(L),L.setAutoFreeze.bind(L),L.setUseProxies.bind(L),L.applyPatches.bind(L),L.createDraft.bind(L),L.finishDraft.bind(L);t.a=X},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(27);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},174:function(e,t,n){"use strict";var r=n(7);t.a=function(e,t){var n=function(){var e=Object(r.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(r.useEffect)((function(){if(!n)return e()}),t)}},306:function(e,t,n){"use strict";n.r(t);var r=n(117),i=n(90),a=n(17),o=n(133);function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=n(105),l=n(7),f=n.n(l),s=n(174),d=n(125);var p=function(e,t,n){for(var r=Object(l.useState)(n),a=Object(i.a)(r,2),f=a[0],p=a[1],b=arguments.length,h=new Array(b>3?b-3:0),v=3;v<b;v++)h[v-3]=arguments[v];var y=d.a.apply(void 0,[e,t,f].concat(h)),O=y.data,m=y.isValidating,g=y.error,j=c(y,["data","isValidating","error"]);return Object(s.a)((function(){p(Object(u.a)(f,(function(e){e.initialData=O})))}),[O]),Object(o.a)(Object(o.a)({},j),{},{isValidating:m,error:g,data:O})},b=n(24),h=(n(155),n(110)),v=n(135),y=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(22)]).then(n.bind(null,309))})),O=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(32),n.e(15)]).then(n.bind(null,316))})),m=Object(l.lazy)((function(){return Promise.all([n.e(2),n.e(7)]).then(n.bind(null,313))})),g=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(20)]).then(n.bind(null,282))})),j=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(17)]).then(n.bind(null,284))})),P=Object(l.lazy)((function(){return n.e(11).then(n.bind(null,158))})),E=Object(l.lazy)((function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,286))}));t.default=function(e){var t=Object(l.useState)({stateCode:"TT",districtName:null}),n=Object(i.a)(t,2),o=n[0],c=n[1],u=Object(l.useState)(null),s=Object(i.a)(u,2),d=s[0],S=s[1],w=Object(l.useState)("active"),A=Object(i.a)(w,2),k=A[0],D=A[1],T=Object(l.useState)(""),z=Object(i.a)(T,2),x=z[0],R=z[1],F=p("https://vics-core.github.io/covid-api/predictions.json",b.c,{revalidateOnFocus:!1}).data,N=p("https://api.covid19india.org/v3/min/data".concat(x?"-".concat(x):"",".min.json"),b.c,{revalidateOnMount:!0,refreshInterval:1e5,revalidateOnFocus:!1}).data,C=Object(l.useRef)(),I=Object(v.useIsVisible)(C,{once:!0}),_=["TT"].concat(Object(r.a)(Object(r.a)(new Set([].concat(Object(r.a)(Object.keys(a.f).filter((function(e){return"TT"!==e}))),Object(r.a)(Object.keys(N||{}).filter((function(e){return"TT"!==e})))))).sort()));return f.a.createElement(f.a.Fragment,null,f.a.createElement(h.a,null,f.a.createElement("title",null,"Coronavirus Outbreak in India - covid19india.org"),f.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in India: Latest Map and Case Count"})),f.a.createElement("div",{className:"Home"},f.a.createElement("div",{className:"home-left"},f.a.createElement("div",{className:"header"},f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)}),F&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",{style:{minHeight:"56px"}})},f.a.createElement(m,{setDate:R,dates:Object.keys(F.TT).reverse(),date:x}))),N&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(E,{data:N.TT})),f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},F&&f.a.createElement(j,Object.assign({timeseries:F.TT},{date:x}))),f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},N&&f.a.createElement(g,{data:N,regionHighlighted:o,setRegionHighlighted:c}))),f.a.createElement("div",{className:"home-right",ref:C},I&&f.a.createElement(f.a.Fragment,null,N&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(O,Object.assign({stateCode:"TT"},{data:N},{mapStatistic:k,setMapStatistic:D},{regionHighlighted:o,setRegionHighlighted:c},{anchor:d,setAnchor:S}))),F&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(y,Object.assign({timeseries:F[o.stateCode]},{date:x,stateCodes:_},{regionHighlighted:o,setRegionHighlighted:c},{anchor:d,setAnchor:S})))))),I&&f.a.createElement(l.Suspense,{fallback:f.a.createElement("div",null)},f.a.createElement(P,null)))}}}]);