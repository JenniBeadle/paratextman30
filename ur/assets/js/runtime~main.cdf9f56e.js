(()=>{"use strict";var e,a,f,t,r,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var f=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,o),f.loaded=!0,f.exports}o.m=c,o.c=d,e=[],o.O=(a,f,t,r)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,b=0;b<f.length;b++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](f[b])))?f.splice(b--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[f,t,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};a=a||[null,f({}),f([]),f(f)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=f(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(r,c),r},o.d=(e,a)=>{for(var f in a)o.o(a,f)&&!o.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,f)=>(o.f[f](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",400:"118a9a7c",461:"1de926c6",709:"95d2782a",780:"a2e2a6ef",1566:"94c1c5f5",1671:"844e8154",1860:"391fffb0",2024:"f58ac6a9",2094:"10ae4e2f",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4121:"22a201bb",4445:"25cf05cb",4711:"43819284",4958:"55145e57",5024:"f2e5a658",5715:"ee6e2833",5745:"218979a3",5932:"7b9ba7a6",6466:"87af8c0d",6590:"766be276",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8025:"1ca577a9",8157:"2c2f1dab",8282:"eff0a87a",8729:"e62a3206",8820:"00bf44a2",8941:"91c69bd8",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9792:"caacfb62",9817:"14eb3368"}[e]||e)+"."+{53:"42a3e979",400:"551c2482",461:"049a6130",709:"87343e94",780:"01090b3e",1566:"ea4a5e72",1671:"5285a160",1860:"d71013dc",2024:"261d7e75",2094:"8b00bb99",2487:"1130733f",2562:"419f1549",2641:"e656329a",2653:"f956ef94",2658:"bca0a1e4",3220:"de422e1b",3332:"66200949",3437:"da8d1c1c",3667:"86261c14",3668:"6e26df97",3989:"620c1e75",4006:"a0d69abe",4121:"370cfb64",4445:"a3ffe27d",4711:"2899541b",4958:"4fc9210a",4972:"8e031120",5024:"74972091",5352:"8c505cc1",5715:"a382cf0b",5745:"2e049bac",5932:"ae5efbfc",6466:"59664199",6590:"db686a74",6626:"ab7fb7bf",6885:"9a8001a4",6991:"ec766715",7229:"40992cfa",7367:"9dd1b8d3",7395:"48124b29",7918:"d8ad29ad",7920:"f9442652",8025:"206c0a10",8157:"92645239",8282:"7ef79eb7",8495:"df7c5059",8729:"c01b2171",8820:"e0912f1c",8941:"38104c16",9514:"50d6590c",9671:"cca53c3d",9693:"b415ae88",9706:"e9f76efb",9792:"51faf455",9817:"c84357ce"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="paratextman-30:",o.l=(e,a,f,c)=>{if(t[e])t[e].push(a);else{var d,b;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+f){d=u;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+f),d.src=e),t[e]=[a];var l=(a,f)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/paratextman30/ur/",o.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","118a9a7c":"400","1de926c6":"461","95d2782a":"709",a2e2a6ef:"780","94c1c5f5":"1566","844e8154":"1671","391fffb0":"1860",f58ac6a9:"2024","10ae4e2f":"2094","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006","22a201bb":"4121","25cf05cb":"4445","55145e57":"4958",f2e5a658:"5024",ee6e2833:"5715","218979a3":"5745","7b9ba7a6":"5932","87af8c0d":"6466","766be276":"6590","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920","1ca577a9":"8025","2c2f1dab":"8157",eff0a87a:"8282",e62a3206:"8729","00bf44a2":"8820","91c69bd8":"8941","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693",caacfb62:"9792","14eb3368":"9817"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,f)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((f,r)=>t=e[a]=[f,r]));f.push(t[2]=r);var c=o.p+o.u(a),d=new Error;o.l(c,(f=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,t[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,f)=>{var t,r,c=f[0],d=f[1],b=f[2],n=0;if(c.some((a=>0!==e[a]))){for(t in d)o.o(d,t)&&(o.m[t]=d[t]);if(b)var i=b(o)}for(a&&a(f);n<c.length;n++)r=c[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},f=self.webpackChunkparatextman_30=self.webpackChunkparatextman_30||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();