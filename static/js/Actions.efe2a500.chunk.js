(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[7],{310:function(e,t,a){"use strict";a.r(t);var n=a(90),r=a(24),o=a(83),c=a(7),i=a.n(c),l=a(159),s=a.n(l),u=a(89),p=a.n(u);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=Object(c.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,c=f(e,["color","size"]);return i.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),i.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}))}));m.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},m.displayName="Bell";var b=m;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=Object(c.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,o=void 0===r?24:r,c=v(e,["color","size"]);return i.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.a.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"}),i.a.createElement("path",{d:"M18.63 13A17.89 17.89 0 0 1 18 8"}),i.a.createElement("path",{d:"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"}),i.a.createElement("path",{d:"M18 8a6 6 0 0 0-9.33-5"}),i.a.createElement("line",{x1:"1",y1:"1",x2:"23",y2:"23"}))}));y.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},y.displayName="BellOff";var h=y,g=a(273),j=a(214),w=a(316),E=a(100),k=a(161),M=a(125),x=Object(c.lazy)((function(){return a.e(23).then(a.bind(null,296))})),S=(t.default=i.a.memo((function(e){var t=e.setDate,a=e.dates,o=Object(c.useState)(!1),l=Object(n.a)(o,2),s=l[0],u=l[1],p=Object(k.a)("newUpdate",!1),d=Object(n.a)(p,2),f=d[0],m=d[1],b=Object(k.a)("lastViewedLog",0),O=Object(n.a)(b,2),v=O[0],y=O[1],h=Object(c.useState)(!1),g=Object(n.a)(h,2),j=g[0],w=g[1],E=Object(M.a)("https://api.covid19india.org/updatelog/log.json",r.c,{revalidateOnFocus:!1}).data;return Object(c.useEffect)((function(){if(void 0!==E){var e=1e3*E.slice().reverse()[0].timestamp;e!==v&&(m(!0),y(e))}}),[v,E,y,m]),i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{lastViewedLog:v,newUpdate:f,isTimelineMode:j,setIsTimelineMode:w,showUpdates:s,setDate:t,dates:a,setNewUpdate:m,setShowUpdates:u}),s&&i.a.createElement(c.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement(x,{updates:E})))}),(function(e,t){return!0})),function(e){e.lastViewedLog;var t=e.newUpdate,a=e.isTimelineMode,r=(e.setIsTimelineMode,e.showUpdates),l=e.setDate,u=(e.dates,e.setNewUpdate),p=e.setShowUpdates,d=new Date,f=Object(c.useState)(d),m=Object(n.a)(f,2),O=m[0],v=m[1],y=d,k=new Date("31-DEC-2020"),M=Object(w.a)().t,x=Object(c.useMemo)((function(){return i.a.createElement(b,{onClick:function(){p(!r),u(!1)}})}),[u,p,r]),S=Object(c.useMemo)((function(){return i.a.createElement(h,{onClick:function(){p(!r)}})}),[p,r]),U=Object(E.c)({opacity:a?1:0,transform:"perspective(600px) rotateX(".concat(a?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),D=U.transform,N=U.opacity,T=Object(E.e)(3,{from:{transform:"translate3d(0, 10px, 0)",opacity:0},to:{transform:"translate3d(0, 0px, 0)",opacity:1},config:E.b.stiff});return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a.div,{className:"actions",style:{opacity:N.interpolate((function(e){return 1-e})),transform:D,pointerEvents:a?"none":""}},r&&S,i.a.createElement(E.a.h5,{style:T[0]},M("Select a future date"),":"),i.a.createElement(E.a.div,{className:"date-picker"},i.a.createElement(s.a,{value:O,minDate:y,maxDate:k,calendarIcon:i.a.createElement(g.a,null),clearIcon:i.a.createElement(j.a,null),format:"dd/MM/y",onChange:function(e){l(Object(o.a)(e,"yyyy-MM-dd")),v(e)}})),!r&&i.a.createElement(E.a.div,{className:"bell-icon",style:T[1]},x,t&&i.a.createElement("div",{className:"indicator"}))))})}}]);
//# sourceMappingURL=Actions.efe2a500.chunk.js.map