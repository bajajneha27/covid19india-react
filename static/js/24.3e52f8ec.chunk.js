(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24],{262:function(e,t,a){"use strict";a.r(t);var n=a(79),r=a(20),i=a(71),c={title:{text:"COVID-19 Predictions"},chart:{type:"spline",height:600},series:[{name:"AN",data:[]}],legend:{align:"right",verticalAlign:"top",layout:"vertical",x:-10,y:50,floating:!0},tooltip:{formatter:function(){return"<b>"+Object(r.e)(this.y)+"</b><br/>"+Object(i.a)(this.x,"dd MMM, yyyy")}},credits:{enabled:!1},xAxis:{type:"datetime",tickInterval:2592e6,range:31104e6},yAxis:{title:{text:"Daily Reported Cases"},min:0,tickAmount:10}},l={0:"Top Seven States",1:"Second Highest Seven States",2:"Third Highest Seven States"},s=a(97),o=a(27),m=a.n(o),d=a(141),u=a.n(d),h=a(116),f=a.n(h),v=a(117),p=a(7),b=a.n(p),E=a(142),y=a.n(E),g=a(95);t.default=b.a.memo((function(){var e=Object(p.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(p.useState)({}),o=Object(n.a)(i,2),d=o[0],h=o[1],E=y.a.parse(window.location.search),j=E&&E.model;return Object(p.useEffect)((function(){m.a.get("https://vics-core.github.io/covid-api/predictions.json").then((function(e){var t;t=e.data,Object(v.each)(t,(function(e,t){var a=0;if("TT"===t){var n=Object(v.cloneDeep)(c),r=Object(v.map)(e,(function(e,t){var n=e.delta.confirmed||0;return a=a>n?a:n,{x:new Date(t),y:n}}));n.title.text="Aggregated Prediction",n.series={name:t,data:r,max:a},h(n)}var i=Object(v.map)(e,(function(e,t){var n=e.delta.confirmed||0;return a=a>n?a:n,{x:new Date(t),y:n}}));c.series.push({name:t,data:i,max:a})})),function(){c.series=Object(v.orderBy)(c.series,"max","desc");var e=[];Object(v.times)(3,(function(t){var a=Object(v.cloneDeep)(c);a.title.text=l[t],a.series=c.series.slice(7*t,7*(t+1)),e.push(a)})),r(e)}()}))}),[]),b.a.createElement("div",{className:"States"},b.a.createElement(g.a,null,b.a.createElement("title",null,"States Predictions - seva.ml"),b.a.createElement("meta",{name:"title",content:"States Predictions - seva.ml"}),b.a.createElement("meta",{name:"description",content:"Charts to show state wise prediction."})),b.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.3s"}},b.a.createElement("h1",null,"States Predictions")),b.a.createElement("div",{className:"charts"},a.map((function(e,t){return b.a.createElement("div",{className:"chart",key:t},b.a.createElement(u.a,{options:e,highcharts:f.a}))}))),b.a.createElement(u.a,{options:d,highcharts:f.a}),b.a.createElement("div",null,"Model: ",j),b.a.createElement(s.default,null))}))},97:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(194),c=a(195),l=a(196),s=a(197),o=a(263);t.default=r.a.memo((function(e){var t=Object(o.a)().t;return r.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},r.a.createElement("h3",null,t("Look forward and drive!")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.facebook.com/indiacovidseva",target:"_blank",rel:"noopener noreferrer",className:"facebook",style:{justifyContent:"center"}},r.a.createElement(i.a,null)),r.a.createElement("a",{href:"https://twitter.com/indiacovidseva",target:"_blank",rel:"noopener noreferrer",className:"twitter",style:{justifyContent:"center"}},r.a.createElement(c.a,null)),r.a.createElement("a",{href:"https://www.linkedin.com/company/indiacovidseva",target:"_blank",rel:"noopener noreferrer",className:"linkedin",style:{justifyContent:"center"}},r.a.createElement(l.a,null)),r.a.createElement("a",{href:"https://github.com/VICS-CORE/covid19india-react",className:"github",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,null))),r.a.createElement("h5",null,"Built on covid19india.org"))}))}}]);
//# sourceMappingURL=24.3e52f8ec.chunk.js.map