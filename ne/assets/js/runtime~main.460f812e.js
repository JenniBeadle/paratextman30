(()=>{"use strict";var e,a,t,f,r,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var d=!0,n=0;n<t.length;n++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](t[n])))?t.splice(n--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var b=f();void 0!==b&&(a=b)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(r,c),r},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",400:"118a9a7c",461:"1de926c6",709:"95d2782a",780:"a2e2a6ef",1397:"4d1871a1",1489:"6a4a3f5e",1566:"94c1c5f5",1671:"844e8154",1907:"391349ff",2024:"f58ac6a9",2094:"10ae4e2f",2312:"a321160f",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4121:"22a201bb",4519:"03964566",4711:"43819284",4958:"55145e57",5094:"f6d8b94e",5715:"ee6e2833",5745:"218979a3",5932:"7b9ba7a6",6466:"87af8c0d",6590:"766be276",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7241:"4c4d97f7",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8282:"eff0a87a",8820:"00bf44a2",9514:"1be78505",9605:"a2718de5",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368"}[e]||e)+"."+{53:"78b5066b",400:"551c2482",461:"31d66167",709:"0a3ea9f2",780:"68a073e2",1397:"50dd2e09",1489:"8d916bf8",1566:"1a441306",1671:"b6e0b2b4",1907:"6e4bee8a",2024:"b98ccdd1",2094:"772c537d",2312:"4f90feee",2487:"81168712",2562:"50529036",2641:"f8e8d67e",2653:"e9614064",2658:"e4d9e04d",3220:"8ec3b087",3332:"b376445f",3437:"76cbd10f",3667:"7fdebf7d",3668:"dfa46e3e",3989:"8ba2cb51",4006:"eb6bcb29",4121:"72807115",4519:"5e515035",4711:"db989628",4958:"fd54469c",4972:"8e031120",5094:"4aa718c8",5352:"8c505cc1",5715:"b6f86dcb",5745:"e8369ac1",5932:"a21e0b5a",6466:"59664199",6590:"d76bc583",6626:"f070db4b",6885:"84341713",6991:"832a8758",7229:"5082f320",7241:"a220158b",7367:"55017e56",7395:"2d8e929a",7918:"d8ad29ad",7920:"f9442652",8282:"2216c737",8495:"df7c5059",8820:"1f2158d9",9514:"50d6590c",9605:"adebd22e",9671:"46e560fc",9693:"0e7a6f5a",9706:"4870e0cc",9817:"c84357ce"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="paratextman-30:",o.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var d,n;if(void 0!==t)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){d=u;break}}d||(n=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+t),d.src=e),f[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),n&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/paratextman30/ne/",o.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","118a9a7c":"400","1de926c6":"461","95d2782a":"709",a2e2a6ef:"780","4d1871a1":"1397","6a4a3f5e":"1489","94c1c5f5":"1566","844e8154":"1671","391349ff":"1907",f58ac6a9:"2024","10ae4e2f":"2094",a321160f:"2312","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006","22a201bb":"4121","03964566":"4519","55145e57":"4958",f6d8b94e:"5094",ee6e2833:"5715","218979a3":"5745","7b9ba7a6":"5932","87af8c0d":"6466","766be276":"6590","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","4c4d97f7":"7241","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920",eff0a87a:"8282","00bf44a2":"8820","1be78505":"9514",a2718de5:"9605","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,f[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],d=t[1],n=t[2],b=0;if(c.some((a=>0!==e[a]))){for(f in d)o.o(d,f)&&(o.m[f]=d[f]);if(n)var i=n(o)}for(a&&a(t);b<c.length;b++)r=c[b],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},t=self.webpackChunkparatextman_30=self.webpackChunkparatextman_30||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();