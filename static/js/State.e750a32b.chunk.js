(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[19],{101:function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var a,r,c;if(Array.isArray(e)){if((a=e.length)!=n.length)return!1;for(r=a;0!==r--;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((a=(c=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(r=a;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,c[r]))return!1;for(r=a;0!==r--;){var i=c[r];if(!t(e[i],n[i]))return!1}return!0}return e!==e&&n!==n}},118:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d}));var a=Array.prototype.slice,r=function(t){return t};function c(t){return"translate("+(t+.5)+",0)"}function i(t){return"translate(0,"+(t+.5)+")"}function o(t){return function(e){return+t(e)}}function l(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function s(){return!this.__axis}function u(t,e){var n=[],u=null,f=null,d=6,m=6,p=3,v=1===t||4===t?-1:1,h=4===t||2===t?"x":"y",b=1===t||3===t?c:i;function O(a){var c=null==u?e.ticks?e.ticks.apply(e,n):e.domain():u,i=null==f?e.tickFormat?e.tickFormat.apply(e,n):r:f,O=Math.max(d,0)+p,j=e.range(),g=+j[0]+.5,y=+j[j.length-1]+.5,E=(e.bandwidth?l:o)(e.copy()),w=a.selection?a.selection():a,M=w.selectAll(".domain").data([null]),k=w.selectAll(".tick").data(c,e).order(),x=k.exit(),N=k.enter().append("g").attr("class","tick"),S=k.select("line"),C=k.select("text");M=M.merge(M.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),k=k.merge(N),S=S.merge(N.append("line").attr("stroke","currentColor").attr(h+"2",v*d)),C=C.merge(N.append("text").attr("fill","currentColor").attr(h,v*O).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),a!==w&&(M=M.transition(a),k=k.transition(a),S=S.transition(a),C=C.transition(a),x=x.transition(a).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=E(t))?b(t):this.getAttribute("transform")})),N.attr("opacity",1e-6).attr("transform",(function(t){var e=this.parentNode.__axis;return b(e&&isFinite(e=e(t))?e:E(t))}))),x.remove(),M.attr("d",4===t||2==t?m?"M"+v*m+","+g+"H0.5V"+y+"H"+v*m:"M0.5,"+g+"V"+y:m?"M"+g+","+v*m+"V0.5H"+y+"V"+v*m:"M"+g+",0.5H"+y),k.attr("opacity",1).attr("transform",(function(t){return b(E(t))})),S.attr(h+"2",v*d),C.attr(h,v*O).text(i),w.filter(s).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),w.each((function(){this.__axis=E}))}return O.scale=function(t){return arguments.length?(e=t,O):e},O.ticks=function(){return n=a.call(arguments),O},O.tickArguments=function(t){return arguments.length?(n=null==t?[]:a.call(t),O):n.slice()},O.tickValues=function(t){return arguments.length?(u=null==t?null:a.call(t),O):u&&u.slice()},O.tickFormat=function(t){return arguments.length?(f=t,O):f},O.tickSize=function(t){return arguments.length?(d=m=+t,O):d},O.tickSizeInner=function(t){return arguments.length?(d=+t,O):d},O.tickSizeOuter=function(t){return arguments.length?(m=+t,O):m},O.tickPadding=function(t){return arguments.length?(p=+t,O):p},O}function f(t){return u(2,t)}function d(t){return u(3,t)}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(104),r=n(99),c=Symbol("implicit");function i(){var t=new Map,e=[],n=[],o=c;function l(a){var r=a+"",i=t.get(r);if(!i){if(o!==c)return o;t.set(r,i=e.push(a))}return n[(i-1)%n.length]}return l.domain=function(n){if(!arguments.length)return e.slice();e=[],t=new Map;var r,c=Object(a.a)(n);try{for(c.s();!(r=c.n()).done;){var i=r.value,o=i+"";t.has(o)||t.set(o,e.push(i))}}catch(s){c.e(s)}finally{c.f()}return l},l.range=function(t){return arguments.length?(n=Array.from(t),l):n.slice()},l.unknown=function(t){return arguments.length?(o=t,l):o},l.copy=function(){return i(e,n).unknown(o)},r.b.apply(l,arguments),l}},143:function(t,e,n){"use strict";var a=n(90),r=n(7),c=n.n(r),i=n(100),o={opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"},l={opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999,position:"absolute",pointerEvents:"none"};e.a=function(t){var e=t.data,n=t.children,s=Object(r.useState)(!1),u=Object(a.a)(s,2),f=u[0],d=u[1],m=Object(i.f)(f,null,{from:l,enter:o,leave:l,config:{mass:1,tension:210,friction:20}});return c.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},n,m.map((function(t){var n=t.item,a=t.key,r=t.props;return n?c.a.createElement(i.a.div,{key:a,style:r},c.a.createElement("div",{className:"message"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.replace(/\n/g,"<br/>")}}))):c.a.createElement(i.a.div,{key:a})})))}},144:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(3),r=n(1),c=n(0);function i(t,e){Object(c.a)(2,arguments);var n=Object(r.a)(t),i=Object(a.a)(e);if(isNaN(i))return new Date(NaN);if(!i)return n;var o=n.getDate(),l=new Date(n.getTime());l.setMonth(n.getMonth()+i+1,0);var s=l.getDate();return o>=s?l:(n.setFullYear(l.getFullYear(),l.getMonth(),o),n)}},233:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(90),r=n(234),c=n(99),i=n(140);function o(){var t,e,n=Object(i.a)().unknown(void 0),l=n.domain,s=n.range,u=0,f=1,d=!1,m=0,p=0,v=.5;function h(){var n=l().length,a=f<u,c=a?f:u,i=a?u:f;t=(i-c)/Math.max(1,n-m+2*p),d&&(t=Math.floor(t)),c+=(i-c-t*(n-m))*v,e=t*(1-m),d&&(c=Math.round(c),e=Math.round(e));var o=Object(r.a)(n).map((function(e){return c+t*e}));return s(a?o.reverse():o)}return delete n.unknown,n.domain=function(t){return arguments.length?(l(t),h()):l()},n.range=function(t){var e,n;return arguments.length?(e=t,n=Object(a.a)(e,2),u=n[0],f=n[1],u=+u,f=+f,h()):[u,f]},n.rangeRound=function(t){var e,n;return e=t,n=Object(a.a)(e,2),u=n[0],f=n[1],u=+u,f=+f,d=!0,h()},n.bandwidth=function(){return e},n.step=function(){return t},n.round=function(t){return arguments.length?(d=!!t,h()):d},n.padding=function(t){return arguments.length?(m=Math.min(1,p=+t),h()):m},n.paddingInner=function(t){return arguments.length?(m=Math.min(1,t),h()):m},n.paddingOuter=function(t){return arguments.length?(p=+t,h()):p},n.align=function(t){return arguments.length?(v=Math.max(0,Math.min(1,t)),h()):v},n.copy=function(){return o(l(),[u,f]).round(d).paddingInner(m).paddingOuter(p).align(v)},c.b.apply(h(),arguments)}},234:function(t,e,n){"use strict";e.a=function(t,e,n){t=+t,e=+e,n=(r=arguments.length)<2?(e=t,t=0,1):r<3?1:+n;for(var a=-1,r=0|Math.max(0,Math.ceil((e-t)/n)),c=new Array(r);++a<r;)c[a]=t+a*n;return c}},239:function(t,e,n){"use strict";var a=n(7),r=n(102),c=["mousedown","touchstart"];e.a=function(t,e,n){void 0===n&&(n=c);var i=Object(a.useRef)(e);Object(a.useEffect)((function(){i.current=e}),[e]),Object(a.useEffect)((function(){for(var e=function(e){var n=t.current;n&&!n.contains(e.target)&&i.current(e)},a=0,c=n;a<c.length;a++){var o=c[a];Object(r.c)(document,o,e)}return function(){for(var t=0,a=n;t<a.length;t++){var c=a[t];Object(r.b)(document,c,e)}}}),[n,t])}},240:function(t,e,n){"use strict";var a=n(7),r=n.n(a),c=n(89),i=n.n(c);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=Object(a.forwardRef)((function(t,e){var n=t.color,a=void 0===n?"currentColor":n,c=t.size,i=void 0===c?24:c,s=l(t,["color","size"]);return r.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Info",e.a=s},241:function(t,e,n){"use strict";var a=n(7),r=n.n(a),c=n(89),i=n.n(c);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=Object(a.forwardRef)((function(t,e){var n=t.color,a=void 0===n?"currentColor":n,c=t.size,i=void 0===c?24:c,s=l(t,["color","size"]);return r.a.createElement("svg",o({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));s.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},s.displayName="Compass",e.a=s},255:function(t,e,n){"use strict";var a=n(7),r="undefined"!==typeof window?a.useLayoutEffect:a.useEffect,c=n(102),i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};e.a=c.a&&window.ResizeObserver?function(){var t=Object(a.useState)(null),e=t[0],n=t[1],c=Object(a.useState)(i),o=c[0],l=c[1],s=Object(a.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,n=e.x,a=e.y,r=e.width,c=e.height,i=e.top,o=e.left,s=e.bottom,u=e.right;l({x:n,y:a,width:r,height:c,top:i,left:o,bottom:s,right:u})}}))}),[]);return r((function(){if(e)return s.observe(e),function(){s.disconnect()}}),[e]),[n,o]}:function(){return[function(){},i]}},300:function(t,e,n){"use strict";n.r(e);var a=n(90),r=n(17),c=n(24),i=n(237),o=n(238),l=n(118),s=n(233),u=n(148),f=n(274),d=(n(124),n(101)),m=n.n(d),p=n(7),v=n.n(p),h=function(t,e){return Object(c.j)(t,"delta",e)},b=50,O=0,j=50,g=0;var y=v.a.memo((function(t){var e=t.timeseries,n=t.statistic,a=Object(p.useRef)(),d=Object.keys(e||{}).filter((function(t){return t<=Object(c.i)()})).slice(-r.l);return Object(p.useEffect)((function(){var t=Object(f.a)(a.current),m=250-O,p=250-j,v=Object(s.a)().domain(d).range([g,m]).paddingInner(.33),y=Object(u.a)().domain([Math.min(0,Object(i.a)(d,(function(t){return h(e[t],n)}))),Math.max(1,Object(o.a)(d,(function(t){return h(e[t],n)})))]).range([p,b]),w=Object(l.a)(v).tickSize(0).tickFormat((function(t){return Object(c.d)(t,"dd MMM")})),M=t.transition().duration(r.b);t.select(".x-axis").transition(M).style("transform","translateY(".concat(y(0),"px)")).call(w).on("start",(function(){return t.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(t,a){return h(e[t],n)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",r.a[n]),t.selectAll(".bar").data(d).join((function(t){return t.append("path").attr("class","bar").attr("d",(function(t){return E(v(t),y(0),v.bandwidth(),0,5)}))})).transition(M).attr("d",(function(t){return E(v(t),y(0),v.bandwidth(),y(0)-y(h(e[t],n)),5)})).attr("fill",(function(t,e){return e<t.length-1?r.a[n]+"90":r.a[n]}));var k=t.selectAll(".label").data(d).join("text").attr("class","label").attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t){return Object(c.f)(h(e[t],n))}));k.transition(M).attr("fill",r.a[n]).attr("y",(function(t){var a=h(e[t],n);return y(a)+(a<0?15:-6)})),k.append("tspan").attr("dy",(function(t){return"".concat(h(e[t],n)<0?1.2:-1.2,"em")})).attr("x",(function(t){return v(t)+v.bandwidth()/2})).text((function(t,a){if(0===a)return"";var r=h(e[d[a-1]],n);if(!r)return"";var i=h(e[t],n)-r;return"".concat(i>0?"+":"").concat(Object(c.f)(100*i/Math.abs(r)),"%")})).transition(M).attr("fill",r.a[n]+"90")}),[d,e,n]),v.a.createElement("div",{className:"DeltaBarGraph"},v.a.createElement("svg",{ref:a,width:"250",height:"250",viewBox:"0 0 250 250",preserveAspectRatio:"xMidYMid meet"},v.a.createElement("g",{className:"x-axis",transform:"translate(0, ".concat(250-j,")")}),v.a.createElement("g",{className:"y-axis"})))}),(function(t,e){return!!m()(t.stateCode,e.stateCode)&&!!m()(t.statistic,e.statistic)}));function E(t,e,n,a,r){return r=Math.sign(a)*Math.min(Math.abs(a),r),["M ".concat(t," ").concat(e),"v ".concat(-a+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(n-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(a-r),"Z"].join(" ")}var w=n(317),M=n(93),k=n(100),x=n(239),N=function(t){var e=t.stateCode,n=Object(p.useState)(!1),c=Object(a.a)(n,2),i=c[0],o=c[1],l=Object(p.useRef)(),s=Object(M.g)(),u=Object(w.a)().t;Object(x.a)(l,(function(){o(!1)}));var f=Object(k.f)(i,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}});return v.a.createElement("div",{className:"StateDropdown"},v.a.createElement("h1",{className:"state-name",onClick:function(){o((function(t){return!t}))},ref:l},u(r.p[e])),f.map((function(t){var n=t.item,a=t.key,c=t.props;return n?v.a.createElement(k.a.div,{className:"dropdown",style:c,key:a},Object.keys(r.f).filter((function(t){return"TT"!==t&&t!==e})).sort().map((function(t){return v.a.createElement("h1",{key:t,className:"item",onClick:function(){o(!1),s.push("/state/".concat(t))}},u(r.p[t]))}))):v.a.createElement(k.a.div,{key:e,style:c})})),i&&v.a.createElement("div",{className:"backdrop"}))},S=n(143),C=n(240);var z=function(t){var e=t.title,n=t.statistic,a=t.total,r=t.formula,c=t.date,i=t.description,o=t.className;return v.a.createElement("div",{className:"meta-item ".concat(o)},v.a.createElement("div",{className:"meta-item-top"},v.a.createElement("h3",null,e),v.a.createElement(S.a,{data:r},v.a.createElement(C.a,null))),v.a.createElement("h1",null,n),v.a.createElement("h5",null,c),a&&v.a.createElement("h5",null,"India has ".concat(a," CPM")),v.a.createElement("p",null,i))},T=n(83),P=n(77),I=n(3),R=n(144),F=n(0);function _(t,e){Object(F.a)(2,arguments);var n=Object(I.a)(e);return Object(R.a)(t,-n)}var A=n(1);var D=n(241);var L=function(t){var e,n,a,i,o=t.stateCode,l=t.data,s=t.timeseries,u=Object(c.j)(l[o],"total","confirmed"),f=Object(c.j)(l[o],"total","active"),d=Object(c.j)(l[o],"total","deceased"),m=Object(c.j)(l[o],"total","recovered"),p=Object(c.j)(l[o],"total","tested"),h=Object(c.j)(l.TT,"total","confirmed"),b=Object(T.a)(Object(c.g)(),"yyyy-MM-dd"),O=Object(T.a)(function(t,e){if(Object(F.a)(2,arguments),!e||"object"!==typeof e)return new Date(NaN);var n="years"in e?Object(I.a)(e.years):0,a="months"in e?Object(I.a)(e.months):0,r="weeks"in e?Object(I.a)(e.weeks):0,c="days"in e?Object(I.a)(e.days):0,i="hours"in e?Object(I.a)(e.hours):0,o="minutes"in e?Object(I.a)(e.minutes):0,l="seconds"in e?Object(I.a)(e.seconds):0,s=_(Object(A.a)(t),a+12*n),u=Object(P.a)(s,c+7*r),f=o+60*i,d=l+60*f,m=1e3*d,p=new Date(u.getTime()-m);return p}(Object(c.g)(),{weeks:1}),"yyyy-MM-dd"),j=Object(c.j)(null===(e=s[o])||void 0===e?void 0:e[O],"total","confirmed"),g=u/r.r[o],y=p/r.r[o],E=h/r.r.TT,w=m/u*100,M=f/u*100,k=d/u*100,x=(u-j)/j*100;return v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"StateMeta population"},v.a.createElement("div",{className:"meta-item population fadeInUp"},v.a.createElement("h3",null,"Population"),v.a.createElement("h1",null,Object(c.f)(r.q[o]))),v.a.createElement("div",{className:"alert"},v.a.createElement(D.a,null),v.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",v.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),v.a.createElement("div",{className:"StateMeta"},v.a.createElement(z,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(c.f)(g),total:Object(c.f)(E),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Object(c.f)(Math.round(g))," out of every 1 million people in ").concat(r.p[o]," have tested positive for the virus.\n            ")}),v.a.createElement(z,{className:"active",title:"Active",statistic:"".concat(Object(c.f)(M),"%"),formula:"(active / confirmed) * 100",description:M>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(M))," are currently infected."):"Currently, there are no active cases in this state."}),v.a.createElement(z,{className:"recovery",title:"Recovery Rate",statistic:"".concat(Object(c.f)(w),"%"),formula:"(recovered / confirmed) * 100",description:w>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(w))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),v.a.createElement(z,{className:"mortality",title:"Mortality Rate",statistic:"".concat(Object(c.f)(k),"%"),formula:"(deceased / confirmed) * 100",description:k>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(k))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),v.a.createElement(z,{className:"gr",title:"Avg. Growth Rate",statistic:x>0?"".concat(Object(c.f)(Math.round(x/7)),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(c.d)(O,"dd MMM")," - ").concat(Object(c.d)(b,"dd MMM")),description:x>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(c.f)(Math.round(x/7)),"%\n              every day."):"There has been no growth in the number of infections in last one week."}),v.a.createElement(z,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Object(c.f)(Math.round(y))),formula:"(total tests in state / total population of state) * 1 Million",date:p?"As of ".concat(Object(c.e)(null===(n=l[o])||void 0===n||null===(a=n.meta)||void 0===a||null===(i=a.tested)||void 0===i?void 0:i.last_updated)," ago"):"",description:y>0?"For every 1 million people in ".concat(r.p[o],",\n                ").concat(Object(c.f)(Math.round(y))," people were tested."):"No tests have been conducted in this state yet."})))},H=n(89),B=n.n(H);function U(){return(U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function V(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var W=Object(p.forwardRef)((function(t,e){var n=t.color,a=void 0===n?"currentColor":n,r=t.size,c=void 0===r?24:r,i=V(t,["color","size"]);return v.a.createElement("svg",U({ref:e,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),v.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),v.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),v.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),v.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));W.propTypes={color:B.a.string,size:B.a.oneOfType([B.a.string,B.a.number])},W.displayName="Smile";var Y=W,q=n(110),G=n(255),J=n(125),X=Object(p.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(22)]).then(n.bind(null,309))})),Z=Object(p.lazy)((function(){return Promise.all([n.e(1),n.e(32),n.e(15)]).then(n.bind(null,316))})),K=Object(p.lazy)((function(){return n.e(11).then(n.bind(null,158))})),Q=Object(p.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(17)]).then(n.bind(null,284))})),$=Object(p.lazy)((function(){return Promise.all([n.e(1),n.e(14)]).then(n.bind(null,286))}));e.default=v.a.memo((function(t){var e,n,i,o,l=Object(w.a)().t,s=Object(M.i)().stateCode.toUpperCase(),u=Object(p.useState)("confirmed"),f=Object(a.a)(u,2),d=f[0],m=f[1],h=Object(G.a)(),b=Object(a.a)(h,2),O=b[0],j=b[1].width,g=Object(p.useState)(!1),E=Object(a.a)(g,2),x=E[0],S=E[1],C=Object(p.useState)({stateCode:s,districtName:null}),z=Object(a.a)(C,2),T=z[0],P=z[1],I=Object(J.a)("https://api.covid19india.org/v3/min/timeseries.min.json",c.c,{suspense:!0,revalidateOnFocus:!1}).data,R=Object(J.a)("https://api.covid19india.org/v3/min/data.min.json",c.c,{suspense:!0,revalidateOnMount:!0,refreshInterval:1e5,revalidateOnFocus:!1}).data,F=Object(p.useMemo)((function(){var t,e=window.innerWidth>=540?3:2,n=(null===(t=R[s])||void 0===t?void 0:t.districts)?Object.keys(R[s].districts).filter((function(t){return"Unknown"!==t})).length:0;return Math.ceil(n/e)}),[R,s]),_=Object(k.c)((function(){return{transform:"translateX(".concat(0*j,"px)"),opacity:0,config:k.b.stiff}})),A=Object(a.a)(_,2),D=A[0],H=A[1];return setTimeout((function(){H({opacity:1})}),1500),v.a.createElement(v.a.Fragment,null,v.a.createElement(q.a,null,v.a.createElement("title",null,"Coronavirus Outbreak in ",r.p[s]," - covid19india.org"),v.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(r.p[s],": Latest Map and Case Count")})),v.a.createElement("div",{className:"State"},v.a.createElement("div",{className:"state-left"},v.a.createElement("div",{className:"header"},v.a.createElement("div",{className:"header-left"},v.a.createElement(N,{stateCode:s}),v.a.createElement("h5",null,"Last Updated on ".concat(Object(c.d)(R[s].meta.last_updated,"dd MMM, p")," IST"))),v.a.createElement("div",{className:"header-right"},v.a.createElement("h5",null,l("Tested")),(null===(e=R[s])||void 0===e||null===(n=e.total)||void 0===n?void 0:n.tested)&&v.a.createElement(v.a.Fragment,null,v.a.createElement("h2",null,Object(c.f)(R[s].total.tested)),v.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(c.d)(R[s].meta.tested.last_updated,"dd MMMM"))),v.a.createElement("h5",null,"per ",v.a.createElement("a",{href:R[s].meta.tested.source,target:"_noblank"},"source"))))),v.a.createElement("div",{className:"map-switcher",ref:O},v.a.createElement(k.a.div,{className:"highlight",style:D}),r.m.map((function(t,e){return v.a.createElement("div",{key:e,className:"clickable",onClick:function(){m(t),H({background:"".concat(r.a[t],"20"),transform:"translateX(".concat(j*e*.25,"px)")})}})}))),v.a.createElement($,{data:R[s]}),v.a.createElement(Q,Object.assign({timeseries:I[s]},{stateCode:s})),v.a.createElement(p.Suspense,{fallback:v.a.createElement("div",null)},v.a.createElement(Z,Object.assign({isCountryLoaded:!1},{stateCode:s,data:R,regionHighlighted:T,setRegionHighlighted:P,mapStatistic:d,setMapStatistic:m}))),v.a.createElement(L,{stateCode:s,data:R,timeseries:I})),v.a.createElement("div",{className:"state-right"},v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"district-bar",style:x?{}:{display:"flex"}},v.a.createElement("div",{className:"district-bar-left fadeInUp"},v.a.createElement("h2",{className:d},"Top districts"),v.a.createElement("div",{className:"districts ".concat(x?"is-grid":""),style:x?{gridTemplateRows:"repeat(".concat(F,", 2rem)")}:{}},Object.keys((null===(i=R[s])||void 0===i?void 0:i.districts)||{}).filter((function(t){return"Unknown"!==t})).sort((function(t,e){return function(t,e){var n=R[s].districts[t],a=R[s].districts[e];return Object(c.j)(a,"total",d)-Object(c.j)(n,"total",d)}(t,e)})).slice(0,x?void 0:5).map((function(t){var e=Object(c.j)(R[s].districts[t],"total",d),n=Object(c.j)(R[s].districts[t],"delta",d);return v.a.createElement("div",{key:t,className:"district"},v.a.createElement("h2",null,Object(c.f)(e)),v.a.createElement("h5",null,l(t)),"active"!==d&&v.a.createElement("div",{className:"delta"},v.a.createElement("h6",{className:d},n>0?"\u2191"+Object(c.f)(n):"")))}))),Object.keys((null===(o=R[s])||void 0===o?void 0:o.districts)||{}).length>5&&v.a.createElement("button",{className:"button",onClick:function(){S(!x)}},v.a.createElement("span",null,x?"View less":"View all"))),v.a.createElement("div",{className:"district-bar-right"},("confirmed"===d||"deceased"===d)&&v.a.createElement("div",{className:"happy-sign"},Object.keys(I[s]||{}).slice(-r.l).every((function(t){return 0===Object(c.j)(I[s][t],"delta",d)}))&&v.a.createElement("div",{className:"alert ".concat("confirmed"===d?"is-green":"")},v.a.createElement(Y,null),v.a.createElement("div",{className:"alert-right"},"No new ",d," cases in the past five days"))),v.a.createElement(y,Object.assign({timeseries:I[s]||{}},{stateCode:s},{statistic:d})))),v.a.createElement(p.Suspense,{fallback:v.a.createElement("div",null)},v.a.createElement(X,Object.assign({timeseries:I[s]},{regionHighlighted:T,setRegionHighlighted:P})))))),v.a.createElement(K,null))}))}}]);
//# sourceMappingURL=State.e750a32b.chunk.js.map