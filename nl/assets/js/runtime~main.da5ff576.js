(()=>{"use strict";var e,a,t,f,r,d={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=d,b.c=c,e=[],b.O=(a,t,f,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var c=!0,o=0;o<t.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(c=!1,r<d&&(d=r));if(c){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var c=2&f&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",400:"118a9a7c",461:"1de926c6",709:"95d2782a",780:"a2e2a6ef",1566:"94c1c5f5",1671:"844e8154",2024:"f58ac6a9",2094:"10ae4e2f",2119:"bfc3cdce",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4121:"22a201bb",4711:"43819284",4958:"55145e57",5257:"486bc147",5411:"cad0d055",5715:"ee6e2833",5745:"218979a3",5905:"cfdae960",5932:"7b9ba7a6",6466:"87af8c0d",6590:"766be276",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7365:"ab17d2b9",7367:"052f7eb7",7395:"44ade08c",7546:"fbe5be64",7918:"17896441",7920:"1a4e3797",8282:"eff0a87a",8820:"00bf44a2",9224:"7d9c97aa",9289:"61d4fb9e",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368"}[e]||e)+"."+{53:"5437f549",400:"551c2482",461:"89b190c9",709:"274afcd2",780:"72fa59dc",1566:"ede1520d",1671:"dee2ce06",2024:"893f526c",2094:"801efdae",2119:"f90bf79a",2487:"0229b62f",2562:"e9d5c970",2641:"ed499146",2653:"19ed4b26",2658:"5a4b7d8e",3220:"cdb38377",3332:"6860a707",3437:"019f0aa7",3667:"ed61f62a",3668:"1d6c4b58",3989:"fdccd7f1",4006:"d9b823a1",4121:"7248c19c",4711:"455820fc",4958:"975e0966",4972:"8e031120",5257:"e2886170",5352:"8c505cc1",5411:"f3c923bc",5715:"ed4bf4dd",5745:"50125c66",5905:"0ba575f8",5932:"b637e223",6466:"59664199",6590:"18d6b2f8",6626:"f724cfb9",6885:"5e5a2ad6",6991:"b4595eeb",7229:"fe5ccfda",7365:"d1a95e12",7367:"f984f4f5",7395:"f314ac16",7546:"561299d0",7918:"d8ad29ad",7920:"f9442652",8282:"404ed1a1",8495:"df7c5059",8820:"41ad866a",9224:"0522e5e9",9289:"938b2f8a",9514:"50d6590c",9671:"be63cf8f",9693:"3adfca40",9706:"0a77d7e7",9817:"c84357ce"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="paratextman-30:",b.l=(e,a,t,d)=>{if(f[e])f[e].push(a);else{var c,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",r+t),c.src=e),f[e]=[a];var l=(a,t)=>{c.onerror=c.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/paratextman30/nl/",b.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","118a9a7c":"400","1de926c6":"461","95d2782a":"709",a2e2a6ef:"780","94c1c5f5":"1566","844e8154":"1671",f58ac6a9:"2024","10ae4e2f":"2094",bfc3cdce:"2119","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006","22a201bb":"4121","55145e57":"4958","486bc147":"5257",cad0d055:"5411",ee6e2833:"5715","218979a3":"5745",cfdae960:"5905","7b9ba7a6":"5932","87af8c0d":"6466","766be276":"6590","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229",ab17d2b9:"7365","052f7eb7":"7367","44ade08c":"7395",fbe5be64:"7546","1a4e3797":"7920",eff0a87a:"8282","00bf44a2":"8820","7d9c97aa":"9224","61d4fb9e":"9289","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var d=b.p+b.u(a),c=new Error;b.l(d,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",c.name="ChunkLoadError",c.type=r,c.request=d,f[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,d=t[0],c=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(f in c)b.o(c,f)&&(b.m[f]=c[f]);if(o)var i=o(b)}for(a&&a(t);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkparatextman_30=self.webpackChunkparatextman_30||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();