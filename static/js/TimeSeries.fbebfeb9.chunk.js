(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[22],{144:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a(90),c=a(146),r=a(7),i=function(t){var e=Object(r.useState)(null),a=Object(n.a)(e,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){var e=t.current,a=new c.a((function(t,e){t.forEach((function(t,e){o(t.contentRect)}))}));return a.observe(e),function(){a.unobserve(e)}}),[t]),i}},301:function(t,e,a){"use strict";a.r(e);var n=a(90),c=a(17),r=a(144),i=a(24),o=a(96),s=a.n(o),l=a(236),u=a(237),f=a(235),j=a(118),b=a(173),d=a(311),m=a(148),O=a(174),v=a(321),h=a(292),x=a(317),p=a(300),y=(a(125),a(25)),g=a(58),E=a(99),k=a.n(E),M=a(7),N=a.n(M),A=a(325);e.default=N.a.memo((function(t){var e=t.timeseries,a=t.dates,o=t.chartType,E=t.isUniform,k=t.isLog,w=t.timelineDate,T=Object(A.a)().t,R=Object(M.useRef)([]),C=Object(M.useRef)(),L=Object(r.a)(C),S=Object(M.useState)(w),U=Object(n.a)(S,2),Y=U[0],F=U[1];Object(M.useEffect)((function(){var t=a.length,n=L||C.current.getBoundingClientRect(),r=n.width,s=n.height,y=15,g=25,M=r-35,N=s-25,A=Object(d.a)().clamp(!0).domain([Object(i.l)(a[0]),Object(i.l)(a[t-1])]).range([g,M]),w=r<480?4:7,T=function(t){return t.attr("class","x-axis").call(Object(j.a)(A).ticks(w).tickFormat((function(t){return Object(i.d)(t,"dd MMM")})))},S=function(t,e){t.attr("class","x-axis2").call(Object(j.a)(A).tickValues([]).tickSize(0)).select(".domain").style("transform","translateY(".concat(e(0),"px)")),e(0)!==N?t.select(".domain").attr("opacity",.4):t.select(".domain").attr("opacity",0)},U=function(t,e){return t.attr("class","y-axis").call(Object(j.b)(e).ticks(4,"0~s").tickPadding(4))},Y=Object(l.a)(a,(function(t){return Object(i.j)(e[t],o,"active")})),J=Object(u.a)(a,(function(t){return Math.max(Object(i.j)(e[t],o,"confirmed"),Object(i.j)(e[t],o,"recovered"),Object(i.j)(e[t],o,"deceased"))})),P=Object(m.a)().clamp(!0).domain([Y,Math.max(1,1.2*J)]).nice(4).range([N,y]),z=Object(O.a)().clamp(!0).domain([Math.max(1,Y),Math.max(10,1.2*J)]).nice(4).range([N,y]);function B(){var t=Object(v.a)(this)[0],e=A.invert(t),n=(0,Object(f.a)((function(t){return Object(i.l)(t)})).left)(a,e,1),c=a[n-1],r=a[n];F(e-Object(i.l)(c)<Object(i.l)(r)-e?c:r)}function D(){F(a[t-1])}R.current.forEach((function(n,r){var s=Object(h.a)(n),f=s.transition().duration(c.b),j=c.u[r],d=function(t){return E&&"total"===o&&k&&"tested"!==t?z:E&&"tested"!==t?P:"total"===o&&k?Object(O.a)().clamp(!0).domain([Math.max(1,Object(l.a)(a,(function(a){return Object(i.j)(e[a],o,t)}))),Math.max(10,1.2*Object(u.a)(a,(function(a){return Object(i.j)(e[a],o,t)})))]).nice(4).range([N,y]):Object(m.a)().clamp(!0).domain([1.1*Math.min(0,Object(l.a)(a,(function(a){return Object(i.j)(e[a],o,t)}))),Math.max(1,1.2*Object(u.a)(a,(function(a){return Object(i.j)(e[a],o,t)})))]).nice(4).range([N,y])}(j),v=c.a[j];if(s.select(".x-axis").style("transform","translateY(".concat(N,"px)")).transition(f).call(T),s.select(".x-axis2").transition(f).call(S,d),s.select(".y-axis").style("transform","translateX(".concat(M,"px)")).transition(f).call(U,d),s.selectAll("circle").data(a,(function(t){return t})).join((function(t){return t.append("circle").attr("fill",v).attr("stroke",v).attr("r",2).attr("cy",N).attr("cx",(function(t){return A(Object(i.l)(t))}))})).transition(f).attr("cx",(function(t){return A(Object(i.l)(t))})).attr("cy",(function(t){return d(Object(i.j)(e[t],o,j))})),"total"===o){s.selectAll(".stem").transition(f).attr("y1",d(0)).attr("y2",d(0)).remove();var g,w=Object(x.a)().curve(p.a).x((function(t){return A(Object(i.l)(t))})).y((function(t){return d(Object(i.j)(e[t],o,j))}));s.selectAll(".trend").data(t?[a]:[]).join((function(t){return t.append("path").attr("class","trend").attr("fill","none").attr("stroke",v+"50").attr("stroke-width",4).attr("d",w).attr("stroke-dasharray",(function(){return g=this.getTotalLength()})).call((function(t){return t.attr("stroke-dashoffset",g).transition(f).attr("stroke-dashoffset",0)}))}),(function(t){return t.attr("stroke-dasharray",null).transition(f).attrTween("d",(function(t){var e=Object(h.a)(this).attr("d"),a=w(t);return Object(b.interpolatePath)(e,a)}))}))}else s.selectAll(".trend").remove(),s.selectAll(".stem").data(a,(function(t){return t})).join((function(t){return t.append("line").attr("class","stem").style("stroke",v+"99").style("stroke-width",4).attr("x1",(function(t){return A(Object(i.l)(t))})).attr("y1",N).attr("x2",(function(t){return A(Object(i.l)(t))})).attr("y2",N)})).transition(f).attr("x1",(function(t){return A(Object(i.l)(t))})).attr("y1",d(0)).attr("x2",(function(t){return A(Object(i.l)(t))})).attr("y2",(function(t){return d(Object(i.j)(e[t],o,j))}));s.selectAll("*").attr("pointer-events","none"),s.on("mousemove",B).on("touchmove",B).on("mouseout",D).on("touchend",D)}))}),[o,L,E,k,e,a]),Object(M.useEffect)((function(){R.current.forEach((function(t){Object(h.a)(t).selectAll("circle").attr("r",(function(t){return t===Y?4:2}))}))}),[Y]),Object(M.useEffect)((function(){F(w)}),[w]);var J=Object(M.useCallback)((function(t){if(Y){var a=Object(i.j)(null===e||void 0===e?void 0:e[Y],"delta",t);if("total"===o)return a;var n=Object(y.a)(Object(g.a)(Object(i.l)(Y),1),{representation:"date"});return a-Object(i.j)(null===e||void 0===e?void 0:e[n],"delta",t)}}),[e,Y,o]);return N.a.createElement(N.a.Fragment,null,N.a.createElement("div",{className:"TimeSeries"},c.u.map((function(t,a){var n=J(t);return N.a.createElement("div",{key:t,className:s()("svg-parent","is-".concat(t)),ref:C},Y&&N.a.createElement("div",{className:s()("stats","is-".concat(t))},N.a.createElement("h5",{className:"title"},T(Object(i.a)(t))),N.a.createElement("h5",{className:"title"},Object(i.d)(Y,"dd MMMM")),N.a.createElement("div",{className:"stats-bottom"},N.a.createElement("h2",null,Object(i.f)(Object(i.j)(null===e||void 0===e?void 0:e[Y],o,t))),N.a.createElement("h6",null,"".concat(n>=0?"+":"").concat(Object(i.f)(n))))),N.a.createElement("svg",{ref:function(t){R.current[a]=t},preserveAspectRatio:"xMidYMid meet"},N.a.createElement("g",{className:"x-axis"}),N.a.createElement("g",{className:"x-axis2"}),N.a.createElement("g",{className:"y-axis"})))}))))}),(function(t,e){return!!k()(e.chartType,t.chartType)&&(!!k()(e.isUniform,t.isUniform)&&(!!k()(e.isLog,t.isLog)&&(!!k()(e.stateCode,t.stateCode)&&!!k()(e.dates,t.dates))))}))}}]);
//# sourceMappingURL=TimeSeries.fbebfeb9.chunk.js.map