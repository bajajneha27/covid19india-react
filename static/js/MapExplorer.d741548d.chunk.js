(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[15],{316:function(e,t,a){"use strict";a.r(t);var o=a(27),n=a(90),i=a(17),c=a(7),l=a.n(c),d=a(112),r=function(e){var t=e.width,a=e.statistic,o=window.innerWidth;t||(t=o>769?480:o);var n=(o>769?.9:1)*t/.885,c=42+i.e+n;return l.a.createElement(d.a,{viewBox:"0 0 ".concat(t," ").concat(c),height:c,width:t,speed:2,backgroundColor:i.a[a]},l.a.createElement("circle",{cx:.4*t,cy:c/2,r:"5"}),l.a.createElement("circle",{cx:.5*t,cy:c/2,r:"5"}),l.a.createElement("circle",{cx:.6*t,cy:c/2,r:"5"}))},s=a(24),u=a(113),p=a(98),m=a.n(p),T=a(101),v=a.n(T),E=a(105),O=a(33),f=a.n(O),h=a(280),j=a(281),S=a(317),g=a(93),b=a(100),N=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(28),a.e(16)]).then(a.bind(null,314))}));t.default=l.a.memo((function(e){var t,a,d=e.stateCode,p=e.data,T=e.regionHighlighted,v=e.setRegionHighlighted,O=e.anchor,C=e.setAnchor,I=e.mapStatistic,w=e.setMapStatistic,R=e.isCountryLoaded,y=void 0===R||R,L=Object(S.a)().t,_=Object(g.g)(),A=Object(c.useRef)(),M=Object(c.useState)({code:d,view:i.j.DISTRICTS,option:i.f[d].mapType===i.i.COUNTRY?i.g.HOTSPOTS:i.g.TOTAL}),k=Object(n.a)(M,2),P=k[0],D=k[1],H=i.f[P.code],U=H.mapType===i.i.COUNTRY?p:Object(o.a)({},P.code,p[P.code]);Object(c.useEffect)((function(){if(T.districtName){if(P.code!==T.stateCode&&(H.mapType!==i.i.COUNTRY||P.view!==i.j.DISTRICTS)){if(!i.f[T.stateCode])return;D({code:T.stateCode,view:i.j.DISTRICTS,option:P.option===i.g.PER_MILLION?i.g.TOTAL:P.option})}}else y&&H.mapType===i.i.STATE&&D({code:"TT",view:P.option===i.g.ZONES?i.j.DISTRICTS:i.j.STATES,option:P.option})}),[y,T.stateCode,T.districtName,P.code,P.option,P.view,H.mapType]);var x=Object(c.useCallback)((function(e){var t=i.f[e];if(t)if(t.mapType===i.i.STATE){var a=p[e].districts||{},o=Object.keys(a).sort((function(e,t){return Object(s.j)(a[t],"total",I)-Object(s.j)(a[e],"total",I)}))[0];f.a.unstable_batchedUpdates((function(){v({stateCode:e,districtName:o}),D({code:e,view:i.j.DISTRICTS,option:P.option===i.g.PER_MILLION?i.g.TOTAL:P.option})}))}else f.a.unstable_batchedUpdates((function(){D({code:"TT",view:P.option===i.g.HOTSPOTS?i.j.DISTRICTS:i.j.STATES,option:P.option}),v({stateCode:"TT",districtName:null})}))}),[p,P.option,I,v]);Object(c.useEffect)((function(){x(d)}),[d,x]);var Y=Object(c.useMemo)((function(){var e=P.view===i.j.STATES?T.stateCode:P.code,t=p[e]||{};return Object(E.a)(t,(function(t){t.state=i.p[e]}))}),[p,T.stateCode,P.view,P.code]),Z=Object(c.useMemo)((function(){var e,t,a=(T.districtName?null===(e=p[T.stateCode])||void 0===e||null===(t=e.districts)||void 0===t?void 0:t[T.districtName]:p[T.stateCode])||{};return Object(E.a)(a,(function(e){e.name=T.districtName||i.p[T.stateCode],T.districtName||(e.population_millions=i.r[T.stateCode])}))}),[p,T.stateCode,T.districtName]),W=Object(b.d)(i.h.length,i.h.map((function(e){return{total:Object(s.j)(Y,"total",e),delta:Object(s.j)(Y,"delta",e),from:{total:Object(s.j)(Y,"total",e),delta:Object(s.j)(Y,"delta",e)},config:{tension:500,clamp:!0}}})));return l.a.createElement("div",{className:m()("MapExplorer",{stickied:"mapexplorer"===O},{hidden:O&&"mapexplorer"!==O})},window.innerWidth>769&&l.a.createElement("div",{className:m()("anchor",{stickied:"mapexplorer"===O}),onClick:function(){C("mapexplorer"===O?null:"mapexplorer")}},l.a.createElement(u.g,null)),l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"TT"===P.code?L("India"):L(i.p[P.code])," ",L("Map")),l.a.createElement("h6",null,L("{{action}} over a {{mapType}} for more details",{action:L(window.innerWidth<=769?"Tap":"Hover"),mapType:L(H.mapType===i.i.COUNTRY?"state/UT":"District")}))),l.a.createElement("div",{className:"map-stats"},i.h.map((function(e,t){var a,o;return l.a.createElement("div",{key:e,className:m()("stats",e,{focused:e===I}),onClick:function(){return w(e)}},l.a.createElement("h5",null,L(Object(s.a)(e))),l.a.createElement("div",{className:"stats-bottom"},l.a.createElement(b.a.h1,null,W[t].total.interpolate((function(e){return Object(s.f)(Math.floor(e))}))),"tested"!==e&&"active"!==e&&l.a.createElement(b.a.h6,null,W[t].delta.interpolate((function(e){return e>0?"+".concat(Object(s.f)(Math.floor(e))):"\xa0"}))),"tested"===e&&l.a.createElement("h6",null,(null===Y||void 0===Y||null===(a=Y.total)||void 0===a?void 0:a.tested)&&L("As of {{date}}",{date:Object(s.d)(Y.meta.tested.last_updated,"dd MMM")}))),"tested"===e&&(null===Y||void 0===Y||null===(o=Y.total)||void 0===o?void 0:o.tested)&&l.a.createElement("a",{href:Y.meta.tested.source,target:"_noblank"},l.a.createElement(h.a,null)))}))),l.a.createElement("div",{className:"meta"},H.mapType===i.i.STATE&&l.a.createElement("div",{className:"map-button",onClick:function(){return _.push("state/".concat(P.code))}},L("Visit state page"),l.a.createElement(j.a,null)),H.mapType!==i.i.STATE&&(null===Y||void 0===Y||null===(t=Y.meta)||void 0===t?void 0:t.last_updated)&&l.a.createElement("div",{className:"last-update"},l.a.createElement("h6",null,L("Last updated")),l.a.createElement("h3",null,"".concat(Object(s.e)(Y.meta.last_updated)," ").concat(L("ago")))),l.a.createElement("h2",{className:m()(I,Object(o.a)({},null===Z||void 0===Z?void 0:Z.zone,P.option===i.g.ZONES))},L(Z.name),Z.name===i.v&&" (".concat(L(i.p[T.stateCode]),")")),H.mapType===i.i.STATE&&l.a.createElement("div",{className:"map-button",onClick:function(){return x("TT")}},L("Back")),P.option!==i.g.ZONES&&(P.view===i.j.DISTRICTS&&T.districtName||P.view===i.j.STATES&&P.option!==i.g.TOTAL)&&l.a.createElement("h1",{className:m()("district",I)},Object(s.f)(Object(s.j)(Z,"total",I,P.option===i.g.PER_MILLION?Z.population_millions:1)),l.a.createElement("br",null),l.a.createElement("span",null,L(I),P.option===i.g.PER_MILLION&&" ".concat(L("per million"))))),l.a.createElement("div",{ref:A},I&&l.a.createElement(c.Suspense,{fallback:l.a.createElement(r,Object.assign({className:"map-loader"},{width:null===(a=A.current)||void 0===a?void 0:a.clientWidth,statistic:I}))},l.a.createElement(N,{currentMap:P,data:U,changeMap:x,regionHighlighted:T,setRegionHighlighted:v,statistic:I,isCountryLoaded:y}))),l.a.createElement("div",{className:"tabs-map"},Object.values(i.g).map((function(e){return l.a.createElement("div",{key:e,className:m()("tab",{focused:P.option===e}),onClick:function(){return function(e){switch(e){case i.g.TOTAL:return D({code:P.code,view:H.mapType===i.i.COUNTRY?i.j.STATES:i.j.DISTRICTS,option:i.g.TOTAL}),void(H.mapType===i.i.COUNTRY&&v({stateCode:T.stateCode,districtName:null}));case i.g.PER_MILLION:if(H.mapType===i.i.STATE)return;return D({code:P.code,view:i.j.STATES,option:i.g.PER_MILLION}),void v({stateCode:T.stateCode,districtName:null});case i.g.HOTSPOTS:return void D({code:P.code,view:i.j.DISTRICTS,option:i.g.HOTSPOTS});case i.g.ZONES:return D({code:P.code,view:i.j.DISTRICTS,option:i.g.ZONES}),void(H.mapType===i.i.COUNTRY&&v({stateCode:"TT",districtName:null}));default:return}}(e)}},l.a.createElement("h4",null,L(e),e===i.g.PER_MILLION&&l.a.createElement("sup",null,"\u2020")))}))),l.a.createElement("h6",{className:m()("footnote")},"\u2020 ","".concat(L("Based on 2019 population projection by NCP, see ")),l.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",style:{color:"#6c757d"}},L("source"))))}),(function(e,t){var a,o,n,i,c,l,d,r,s,u;return!!v()(e.stateCode,t.stateCode)&&(!!v()(e.regionHighlighted,t.regionHighlighted)&&(!!v()(e.mapStatistic,t.mapStatistic)&&(!!v()(e.anchor,t.anchor)&&(!!v()(null===(a=e.data)||void 0===a||null===(o=a.TT)||void 0===o||null===(n=o.meta)||void 0===n?void 0:n.last_updated,null===(i=t.data)||void 0===i||null===(c=i.TT)||void 0===c||null===(l=c.meta)||void 0===l?void 0:l.last_updated)&&!!v()(null===(d=e.data)||void 0===d||null===(r=d.TT)||void 0===r?void 0:r.total,null===(s=t.data)||void 0===s||null===(u=s.TT)||void 0===u?void 0:u.total)))))}))}}]);