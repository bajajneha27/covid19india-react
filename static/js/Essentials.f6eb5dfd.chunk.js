(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[10],{319:function(e,t,a){"use strict";a.r(t);var r=a(90),n=a(28),s=a.n(n),i=a(98),l=a.n(i),c=a(105),o=a(242),u=a(243),d=a(7),p=a.n(d),m=a(277),f=a(278),y=a(184);function h(e){return e.properties.priority}function v(e){return!e.properties.priority}function E(e,t){var a=e[0]*Math.PI/180,r=t[0]*Math.PI/180,n=(t[1]-e[1])*Math.PI/180,s=6371e3*Math.acos(Math.sin(a)*Math.sin(r)+Math.cos(a)*Math.cos(r)*Math.cos(n));return Number((s/1e3).toFixed(2))}var g=function(e){var t=e.userLocation,a=e.userState,n=Object(d.useState)([]),i=Object(r.a)(n,2),g=i[0],N=i[1],b=Object(d.useState)(),w=Object(r.a)(b,2),O=w[0],j=w[1],k=Object(d.useState)([]),S=Object(r.a)(k,2),I=S[0],x=S[1];Object(y.a)((function(){M()}),[]);var M=Object(d.useCallback)((function(){s.a.get("https://api.covid19india.org/resources/geoResources.json").then((function(e){N(e.data)})).catch((function(e){console.log(e)}))}),[]);return Object(d.useEffect)((function(){var e,r,n,s;t&&(e=new u(o.layer.geoJSON(g,{filter:h})).nearestLayer([t[1],t[0]],5),r=new u(o.layer.geoJSON(g,{filter:v})).nearestLayer([t[1],t[0]],100,1e4),n=null===g||void 0===g||null===(s=g.features)||void 0===s?void 0:s.filter((function(e){return"PAN India"===e.properties.state||e.properties.state.includes("PAN")&&e.properties.state.includes(a)})));var i={name:"NearestK-Essentials",type:"FeatureCollection",features:[]};if(e){var l=0;for(l=0;l<e.length;l++)i.features.push({type:"Feature",geometry:{type:"Point",coordinates:e[l].layer.feature.geometry.coordinates},properties:{name:e[l].layer.feature.properties.name,desc:e[l].layer.feature.properties.desc,addr:e[l].layer.feature.properties.addr,phone:e[l].layer.feature.properties.phone,contact:e[l].layer.feature.properties.contact,icon:e[l].layer.feature.properties.icon,recordid:e[l].layer.feature.properties.recordid,dist:E(t,e[l].layer.feature.geometry.coordinates.reverse())}})}if(r){var c=0;for(c=0;c<r.length;c++)i.features.push({type:"Feature",geometry:{type:"Point",coordinates:r[c].layer.feature.geometry.coordinates},properties:{name:r[c].layer.feature.properties.name,desc:r[c].layer.feature.properties.desc,addr:r[c].layer.feature.properties.addr,phone:r[c].layer.feature.properties.phone,contact:r[c].layer.feature.properties.contact,icon:r[c].layer.feature.properties.icon,recordid:r[c].layer.feature.properties.recordid,dist:E(t,r[c].layer.feature.geometry.coordinates.reverse())}})}if(n){var d=0;for(d=0;d<n.length;d++)i.features.push(n[d])}j(i)}),[g,t,a]),Object(d.useEffect)((function(){var e={};O&&O.features.map((function(e){var t;return null===e||void 0===e||null===(t=e.properties)||void 0===t?void 0:t.icon})).reduce((function(e,t){return e.set(t,(e.get(t)||0)+1)}),new Map).forEach((function(t,a,r){var n={count:t,isSelected:!0};e[a]=n})),x(e)}),[O]),O?p.a.createElement("div",{className:"results fadeInUp",style:{animationDelay:"0.5s"}},p.a.createElement("div",{className:"labels"},Object.keys(I).map((function(e){return p.a.createElement("div",{key:e,className:l()("label",{"is-selected":I[e].isSelected}),onClick:function(){return function(e,t){x(Object(c.a)((function(a){a[e].isSelected=t})))}(e,!I[e].isSelected)}},e,p.a.createElement("div",{className:"count"},I[e].count))}))),null===O||void 0===O?void 0:O.features.filter((function(e){return Object.keys(I).filter((function(e){return!0===I[e].isSelected})).includes(e.properties.icon)&&e.properties.dist})).map((function(e,t){return p.a.createElement("div",{key:e.properties.recordid?e.properties.recordid:t,className:"essential-result"},p.a.createElement("div",{className:"result-top"},p.a.createElement("div",{className:"result-top-left"},p.a.createElement("div",{className:"result-name"},e.properties.name),p.a.createElement("div",{className:"result-location"},e.properties.addr),e.properties.dist&&p.a.createElement("div",{className:"result-distance"},e.properties.dist+" km away")),p.a.createElement("a",{className:"result-category",href:e.properties.contact,target:"_noblank"},p.a.createElement("span",null,e.properties.icon),p.a.createElement(m.a,null))),p.a.createElement("div",{className:"result-description"},e.properties.desc),p.a.createElement("div",{className:"result-contacts"},e.properties.phone.split("\n").map((function(e){return p.a.createElement("div",{key:e,className:"result-contact"},p.a.createElement(f.a,null),p.a.createElement("a",{href:"tel:".concat(e)},e.replace(",","")))}))))})),p.a.createElement("div",null,p.a.createElement("h3",{className:"pan-divider"},"Throughout ".concat(a," and India"))),null===O||void 0===O?void 0:O.features.filter((function(e){return Object.keys(I).filter((function(e){return!0===I[e].isSelected})).includes(e.properties.icon)&&!e.properties.dist})).map((function(e,t){return p.a.createElement("div",{key:e.properties.recordid?e.properties.recordid:t,className:"essential-result"},p.a.createElement("div",{className:"result-top"},p.a.createElement("div",{className:"result-top-left"},p.a.createElement("div",{className:"result-name"},e.properties.name),p.a.createElement("div",{className:"result-location"},e.properties.addr),e.properties.dist&&p.a.createElement("div",{className:"result-distance"},e.properties.dist+" km away")),p.a.createElement("a",{className:"result-category",href:e.properties.contact,target:"_noblank"},p.a.createElement("span",null,e.properties.icon),p.a.createElement(m.a,null))),p.a.createElement("div",{className:"result-description"},e.properties.desc),p.a.createElement("div",{className:"result-contacts"},e.properties.phone.split("\n").map((function(e){return p.a.createElement("div",{key:e,className:"result-contact"},p.a.createElement(f.a,null),p.a.createElement("a",{href:"tel:".concat(e)},e.replace(",","")))}))))}))):null},N=a(112),b=a(241),w=a(279),O=a(214),j=a(255);function k(){var e=Object(j.a)(),t=Object(r.a)(e,2),a=t[0],n=t[1].width;return Object(d.useEffect)((function(){}),[n]),p.a.createElement(p.a.Fragment,null,p.a.createElement("span",{ref:a,style:{width:"100%"}}),n&&p.a.createElement(N.a,{speed:1.5,width:n,height:325,viewBox:"0 0 ".concat(n," 325"),position:"absolute",className:"fadeInUp"},p.a.createElement("rect",{x:n/2-60,y:"10",rx:"5",ry:"5",width:"120",height:"32"}),p.a.createElement("rect",{x:n/2+70,y:"18",rx:"100",ry:"100",width:"15",height:"15"}),p.a.createElement("rect",{x:"10",y:"80",rx:"5",ry:"5",width:"85",height:"32"}),p.a.createElement("rect",{x:"100",y:"80",rx:"5",ry:"5",width:"65",height:"32"}),p.a.createElement("rect",{x:"10",y:"130",rx:"5",ry:"5",width:n-20,height:"172"})))}t.default=function(e){var t=Object(d.useState)(null),a=Object(r.a)(t,2),n=a[0],i=a[1],l=Object(d.useState)(null),c=Object(r.a)(l,2),o=c[0],u=c[1],m=Object(d.useState)(null),f=Object(r.a)(m,2),y=f[0],h=f[1],v=function(e,t){try{s.a.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+e+"&longitude="+t+"&localityLanguage=en").then((function(e){u(e.data.locality),h(e.data.principalSubdivision)}))}catch(a){console.log(a),u("Error fetching name of your location"),h(null)}};return p.a.createElement("div",{className:"Essentials"},p.a.createElement("img",{src:"/essentials_1.svg",alt:"essentials platform",className:"fadeInUp",style:{animationDelay:"0.3s"}}),p.a.createElement("img",{src:"/essentials_2.svg",alt:"essentials woman pushing cart",className:"fadeInUp",style:{position:"absolute",animationDelay:"0.1s"}}),!n&&p.a.createElement(p.a.Fragment,null,p.a.createElement("button",{className:"button fadeInUp",style:{animationDelay:"0.6s"},onClick:function(){navigator.geolocation.getCurrentPosition((function(e){i([e.coords.latitude,e.coords.longitude]),v(e.coords.latitude,e.coords.longitude)}))}},p.a.createElement("span",null,"View Nearby Essentials"),p.a.createElement(b.a,{size:16})),p.a.createElement("div",{className:"alert fadeInUp",style:{animationDelay:"0.7s"}},p.a.createElement(w.a,{size:16}),p.a.createElement("div",{className:"alert-right is-full"},"We do not collect any location data; they're all stored \n              inside your browser and are inaccessible to us.")),p.a.createElement("div",{className:"alert fadeInUp",style:{animationDelay:"0.8s"}},p.a.createElement(w.a,{size:16}),p.a.createElement("div",{className:"alert-right is-full"},"We are a community sourced listing platform and are not associated\n              with any of the organizations listed below. Although we verify all\n              our listings, we request you to follow all the guidelines and take\n              the necessary precautions. We encourage you to report any error or\n              suspicious activity so that we can take immediate action."))),n&&!o&&p.a.createElement(k,null),o&&p.a.createElement("div",{className:"address fadeInUp"},p.a.createElement("h3",null,o+", "+y),p.a.createElement(O.a,{size:16,onClick:function(){i(null),u(null),h(null)}})),p.a.createElement("div",{className:"Search"},o&&p.a.createElement(g,{userLocation:n,userState:y})))}}}]);