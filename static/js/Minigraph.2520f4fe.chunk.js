/*! For license information please see Minigraph.2520f4fe.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[17],{101:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,a,c;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(a=n;0!==a--;)if(!t(e[a],r[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(c=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(a=n;0!==a--;)if(!Object.prototype.hasOwnProperty.call(r,c[a]))return!1;for(a=n;0!==a--;){var i=c[a];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}},284:function(t,e,r){"use strict";r.r(e);var n=r(17),a=r(24),c=r(98),i=r.n(c),o=r(237),u=r(238),f=r(168),s=r(298),l=r(148),d=r(274),j=r(303),p=r(285),b=(r(124),r(25)),O=r(77),h=r(101),v=r.n(h),y=r(7),g=r.n(y);e.default=g.a.memo((function(t){var e=t.timeseries,r=t.date,c=Object(y.useRef)([]),h=Object(y.useMemo)((function(){var t=r||Object(a.i)(),c=Object.keys(e||{}).filter((function(e){return e<=t})),i=Object(b.a)(Object(O.a)(Object(a.l)(t),n.k),{representation:"date"});return c.filter((function(t){return t>=i}))}),[e,r]);return Object(y.useEffect)((function(){var t=h.length,r=10,i=5,b=100-5,O=100-20,v=Object(s.a)().clamp(!0).domain([Object(a.l)(h[0]),Object(a.l)(h[t-1])]).range([i,b]),y=Object(o.a)(h,(function(t){return Object(a.j)(e[t],"delta","active")})),g=Object(u.a)(h,(function(t){return Math.max(Object(a.j)(e[t],"delta","confirmed"),Object(a.j)(e[t],"delta","recovered"),Object(a.j)(e[t],"delta","deceased"))})),m=Math.max(-y,g),k=Object(l.a)().clamp(!0).domain([-m,m]).range([O,r]);c.current.forEach((function(r,c){var i,o=Object(d.a)(r),u=n.m[c],s=n.a[u],l=Object(j.a)().curve(p.a).x((function(t){return v(Object(a.l)(t))})).y((function(t){return k(Object(a.j)(e[t],"delta",u))}));o.selectAll("path").data(t?[h]:[]).join((function(t){return t.append("path").attr("fill","none").attr("stroke",s+"99").attr("stroke-width",2.5).attr("d",l).attr("stroke-dasharray",(function(){return i=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",i).transition().delay(100).duration(2500).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition().duration(500).attrTween("d",(function(t){var e=Object(d.a)(this).attr("d"),r=l(t);return Object(f.interpolatePath)(e,r)}))})),o.selectAll("circle").data(t?[h[t-1]]:[]).join((function(t){return t.append("circle").attr("fill",s).attr("r",2.5).attr("cx",(function(t){return v(Object(a.l)(t))})).attr("cy",(function(t){return k(Object(a.j)(e[t],"delta",u))})).style("opacity",0).call((function(t){return t.transition().delay(2100).duration(500).style("opacity",1).attr("cx",(function(t){return v(Object(a.l)(t))})).attr("cy",(function(t){return k(Object(a.j)(e[t],"delta",u))}))}))}),(function(t){return t.transition().duration(500).attr("cx",(function(t){return v(Object(a.l)(t))})).attr("cy",(function(t){return k(Object(a.j)(e[t],"delta",u))}))}))}))}),[h,e]),g.a.createElement("div",{className:"Minigraph"},n.m.map((function(t,e){return g.a.createElement("div",{key:t,className:i()("svg-parent")},g.a.createElement("svg",{ref:function(t){c.current[e]=t},width:"100",height:"75",viewBox:"0 0 100 75",preserveAspectRatio:"xMidYMid meet"}))})))}),(function(t,e){return!!v()(e.stateCode,t.stateCode)&&!!v()(e.date,t.date)}))},98:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var c=typeof n;if("string"===c||"number"===c)t.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&t.push(i)}else if("object"===c)for(var o in n)r.call(n,o)&&n[o]&&t.push(o)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()}}]);