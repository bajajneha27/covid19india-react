(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[25],{17:function(a,t,e){"use strict";e.d(t,"d",(function(){return n})),e.d(t,"m",(function(){return i})),e.d(t,"h",(function(){return r})),e.d(t,"u",(function(){return c})),e.d(t,"b",(function(){return o})),e.d(t,"k",(function(){return s})),e.d(t,"l",(function(){return d})),e.d(t,"v",(function(){return u})),e.d(t,"c",(function(){return l})),e.d(t,"a",(function(){return h})),e.d(t,"s",(function(){return p})),e.d(t,"t",(function(){return T})),e.d(t,"g",(function(){return g})),e.d(t,"j",(function(){return m})),e.d(t,"i",(function(){return j})),e.d(t,"w",(function(){return D})),e.d(t,"f",(function(){return b})),e.d(t,"e",(function(){return A})),e.d(t,"p",(function(){return v})),e.d(t,"o",(function(){return O})),e.d(t,"q",(function(){return E})),e.d(t,"r",(function(){return k})),e.d(t,"n",(function(){return w}));var n={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},i=["confirmed","active","recovered","deceased"],r=([].concat(i,["tested"]),[].concat(i,["tested"])),c=[].concat(i),o=300,s=20,d=5,u="Unknown",l="T00:00:00+05:30",h={confirmed:"#ff073a",active:"#007bff",recovered:"#28a745",deceased:"#6c757d",tested:"#4b1eaa"},p={total:"Cumulative",delta:"Daily"},T={past:{BEGINNING:{label:"Bgn",constraint:{},past:!0},PAST_MONTH:{label:"< 1M",constraint:{months:1},past:!0},PAST_TWO_WEEKS:{label:"< 2W",constraint:{weeks:2},past:!0}},future:{FUTURE_TWO_WEEKS:{label:"2W >",constraint:{weeks:2},future:!0},FUTURE_MONTH:{label:"1M >",constraint:{months:1},future:!0},END:{label:"End",constraint:{},future:!0}}},g={TOTAL:"Total",PER_MILLION:"Per million",HOTSPOTS:"Hotspots"},m={STATES:0,DISTRICTS:1},j={COUNTRY:0,STATE:1},D={Red:"#d73027",Orange:"#fee08b",Green:"#66bd63"},f="".concat("","/mini_maps"),b={AP:{geoDataFile:"".concat(f,"/andhrapradesh.json"),mapType:j.STATE,graphObjectDistricts:"andhrapradesh_district"},AR:{geoDataFile:"".concat(f,"/arunachalpradesh.json"),mapType:j.STATE,graphObjectDistricts:"arunachalpradesh_district"},AS:{geoDataFile:"".concat(f,"/assam.json"),mapType:j.STATE,graphObjectDistricts:"assam_district"},BR:{geoDataFile:"".concat(f,"/bihar.json"),mapType:j.STATE,graphObjectDistricts:"bihar_district"},CT:{name:"Chhattisgarh",geoDataFile:"".concat(f,"/chhattisgarh.json"),mapType:j.STATE,graphObjectDistricts:"chhattisgarh_district"},GA:{geoDataFile:"".concat(f,"/goa.json"),mapType:j.STATE,graphObjectDistricts:"goa_district"},GJ:{geoDataFile:"".concat(f,"/gujarat.json"),mapType:j.STATE,graphObjectDistricts:"gujarat_district"},HR:{geoDataFile:"".concat(f,"/haryana.json"),mapType:j.STATE,graphObjectDistricts:"haryana_district"},HP:{geoDataFile:"".concat(f,"/himachalpradesh.json"),mapType:j.STATE,graphObjectDistricts:"himachalpradesh_district"},JK:{geoDataFile:"".concat(f,"/jammukashmir.json"),mapType:j.STATE,graphObjectDistricts:"jammukashmir_district"},JH:{geoDataFile:"".concat(f,"/jharkhand.json"),mapType:j.STATE,graphObjectDistricts:"jharkhand_district"},KA:{geoDataFile:"".concat(f,"/karnataka.json"),mapType:j.STATE,graphObjectDistricts:"karnataka_district"},KL:{geoDataFile:"".concat(f,"/kerala.json"),mapType:j.STATE,graphObjectDistricts:"kerala_district"},MP:{geoDataFile:"".concat(f,"/madhyapradesh.json"),mapType:j.STATE,graphObjectDistricts:"madhyapradesh_district"},MH:{geoDataFile:"".concat(f,"/maharashtra.json"),mapType:j.STATE,graphObjectDistricts:"maharashtra_district"},MN:{geoDataFile:"".concat(f,"/manipur.json"),mapType:j.STATE,graphObjectDistricts:"manipur_district"},ML:{geoDataFile:"".concat(f,"/meghalaya.json"),mapType:j.STATE,graphObjectDistricts:"meghalaya_district"},MZ:{geoDataFile:"".concat(f,"/mizoram.json"),mapType:j.STATE,graphObjectDistricts:"mizoram_district"},NL:{geoDataFile:"".concat(f,"/nagaland.json"),mapType:j.STATE,graphObjectDistricts:"nagaland_district"},OR:{geoDataFile:"".concat(f,"/odisha.json"),mapType:j.STATE,graphObjectDistricts:"odisha_district"},PB:{geoDataFile:"".concat(f,"/punjab.json"),mapType:j.STATE,graphObjectDistricts:"punjab_district"},RJ:{geoDataFile:"".concat(f,"/rajasthan.json"),mapType:j.STATE,graphObjectDistricts:"rajasthan_district"},SK:{geoDataFile:"".concat(f,"/sikkim.json"),mapType:j.STATE,graphObjectDistricts:"sikkim_district"},TN:{geoDataFile:"".concat(f,"/tamilnadu.json"),mapType:j.STATE,graphObjectDistricts:"tamilnadu_district"},TG:{geoDataFile:"".concat(f,"/telangana.json"),mapType:j.STATE,graphObjectDistricts:"telangana_district"},TR:{geoDataFile:"".concat(f,"/tripura.json"),mapType:j.STATE,graphObjectDistricts:"tripura_district"},UT:{geoDataFile:"".concat(f,"/uttarakhand.json"),mapType:j.STATE,graphObjectDistricts:"uttarakhand_district"},UP:{geoDataFile:"".concat(f,"/uttarpradesh.json"),mapType:j.STATE,graphObjectDistricts:"uttarpradesh_district"},WB:{geoDataFile:"".concat(f,"/westbengal.json"),mapType:j.STATE,graphObjectDistricts:"westbengal_district"},AN:{name:"Andaman and Nicobar Islands",geoDataFile:"".concat(f,"/andamannicobarislands.json"),mapType:j.STATE,graphObjectDistricts:"andamannicobarislands_district"},CH:{geoDataFile:"".concat(f,"/chandigarh.json"),mapType:j.STATE,graphObjectDistricts:"chandigarh_district"},DN:{geoDataFile:"".concat(f,"/dnh-and-dd.json"),mapType:j.STATE,graphObjectDistricts:"dnh-and-dd"},DL:{geoDataFile:"".concat(f,"/delhi.json"),mapType:j.STATE,graphObjectDistricts:"delhi_district"},LA:{geoDataFile:"".concat(f,"/ladakh.json"),mapType:j.STATE,graphObjectDistricts:"ladakh_district"},LD:{geoDataFile:"".concat(f,"/lakshadweep.json"),mapType:j.STATE,graphObjectDistricts:"lakshadweep_district"},PY:{geoDataFile:"".concat(f,"/puducherry.json"),mapType:j.STATE,graphObjectDistricts:"puducherry_district"},TT:{geoDataFile:"".concat(f,"/india.json"),mapType:j.COUNTRY,graphObjectStates:"india-states",graphObjectDistricts:"india-districts-2019-734"}},A=50,v={AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"Total",UN:"Unassigned"},S=[],y={};Object.keys(v).map((function(a,t){return y[v[a]]=a,S.push({code:a,name:v[a]}),null}));var O=y,E={AP:52221e3,AR:1504e3,AS:34293e3,BR:11952e4,CT:28724e3,GA:154e4,GJ:67936e3,HR:28672e3,HP:73e5,JH:37403e3,KA:65798e3,KL:35125e3,MP:82232e3,MH:122153e3,MN:3103e3,ML:3224e3,MZ:1192e3,NL:215e4,OR:43671e3,PB:29859e3,RJ:77264e3,SK:664e3,TN:75695e3,TG:3722e4,TR:3992e3,UP:224979e3,UT:11141e3,WB:96906e3,AN:397e3,CH:1179e3,DN:959e3,DL:19814e3,JK:13203e3,LA:293e3,LD:68e3,PY:1504e3,TT:13329e5},k=Object.keys(E).reduce((function(a,t){return a[t]=1e-6*E[t],a}),{}),w={v1:{start:new Date(2020,0,1),end:new Date(2020,3,19)},v2:{start:new Date(2020,3,20),end:new Date(2020,3,26)},v3:{start:new Date(2020,3,27),end:new Date(2020,4,9)},v4:{start:new Date(2020,4,10),end:new Date(2020,4,23)},v5:{start:new Date(2020,4,24),end:new Date(2020,5,4)},v6:{start:new Date(2020,5,5),end:new Date}}},24:function(a,t,e){"use strict";e.d(t,"k",(function(){return p})),e.d(t,"g",(function(){return T})),e.d(t,"i",(function(){return g})),e.d(t,"h",(function(){return m})),e.d(t,"e",(function(){return j})),e.d(t,"l",(function(){return D})),e.d(t,"d",(function(){return f})),e.d(t,"f",(function(){return b})),e.d(t,"a",(function(){return A})),e.d(t,"b",(function(){return v})),e.d(t,"j",(function(){return S})),e.d(t,"c",(function(){return y}));var n=e(17),i=e(28),r=e.n(i),c=e(25),o=e(58),s=e(82),d=e(83),u=e(56),l=e(15),h=null,p=function(){return!1},T=function(){return Object(u.a)(new Date,"Asia/Kolkata")},g=function(){return Object(c.a)(Object(o.a)(T(),1),{representation:"date"})},m=function(){return Object(c.a)(T(),{representation:"date"})},j=function(a){return e.e(34).then(e.bind(null,87)).then((function(a){h=a[n.d[l.a.language||window.localStorage.i18nextLng]]})),Object(s.a)(new Date(a),new Date,{locale:h})},D=function(a){return new Date(a+n.c)},f=function(a,t){"string"===typeof a&&a.match(/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g)&&(a+=n.c);var e=Object(u.a)(new Date(a),"Asia/Kolkata");return Object(d.a)(e,t,{locale:h})};var b=function(a){var t=new Intl.NumberFormat("en-IN",{maximumFractionDigits:2});return isNaN(a)?"-":t.format(a)},A=function(a){return"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)},v=function(a){if("string"!==typeof a)return"";for(var t=a.toLowerCase().split(" "),e=0;e<t.length;e++)t[e]=A(t[e]);return t.join(" ")},S=function(a,t,e){var n,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("active"===e){var r,c,o,s,d=(null===a||void 0===a||null===(r=a[t])||void 0===r?void 0:r.confirmed)||0,u=(null===a||void 0===a||null===(c=a[t])||void 0===c?void 0:c.deceased)||0,l=(null===a||void 0===a||null===(o=a[t])||void 0===o?void 0:o.recovered)||0,h=(null===a||void 0===a||null===(s=a[t])||void 0===s?void 0:s.migrated)||0;n=d-u-l-h}else{var p;n=(null===a||void 0===a||null===(p=a[t])||void 0===p?void 0:p[e])||0}return n/i},y=function(a){return r()(a).then((function(a){return a.data}))}},59:function(a,t,e){a.exports=e(81)},81:function(a,t,e){"use strict";e.r(t);var n=e(7),i=e.n(n),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(a,t){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var e=a.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(a)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var o=e(24),s=e(15),d=e(53),u=e(54),l=e(86);s.a.use(u.a).use(d.a).use(l.e).init({debug:Object(o.k)()&&!1,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"https://api.covid19india.org/locales/locale_{{lng}}.json",addPath:"http://localhost:9999/"},saveMissing:Object(o.k)()&&!1,interpolation:{escapeValue:!1}});s.a;var h=e(32),p=e.n(h),T=Object(n.lazy)((function(){return Promise.all([e.e(28),e.e(9)]).then(e.bind(null,319))}));p.a.render(i.a.createElement(n.Suspense,{fallback:i.a.createElement("div",null)},i.a.createElement(T,null)),document.getElementById("root")),function(a){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var t="".concat("","/service-worker.js");r?(!function(a,t){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(e){var n=e.headers.get("content-type");404===e.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):c(a,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(t,a)}),3e3)}))}}()}},[[59,26,27]]]);
//# sourceMappingURL=main.5486bb06.chunk.js.map