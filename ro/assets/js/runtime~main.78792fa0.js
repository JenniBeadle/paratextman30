(()=>{"use strict";var e,a,t,f,r,c={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=c,b.c=d,e=[],b.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var d=!0,o=0;o<t.length;o++)(!1&r||c>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(r,c),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",400:"118a9a7c",461:"1de926c6",709:"95d2782a",780:"a2e2a6ef",1566:"94c1c5f5",1671:"844e8154",2024:"f58ac6a9",2094:"10ae4e2f",2357:"902d88ee",2487:"5f5fcb63",2562:"6e755901",2641:"b7d2af09",2653:"892fb73a",2658:"0a36724e",3220:"7adca5a1",3332:"9a4d4190",3437:"0cf73350",3667:"d1727341",3668:"3e4a8c33",3989:"d9c8d500",4006:"9cacdc20",4102:"baa1d5bf",4121:"22a201bb",4310:"b0f7120f",4711:"43819284",4958:"55145e57",5715:"ee6e2833",5745:"218979a3",5932:"7b9ba7a6",6466:"87af8c0d",6590:"766be276",6626:"975ec8ab",6885:"d311ccf8",6991:"635fb14e",7229:"04847427",7367:"052f7eb7",7395:"44ade08c",7918:"17896441",7920:"1a4e3797",8009:"ddb1eec6",8282:"eff0a87a",8820:"00bf44a2",8845:"4c68c810",9096:"606f0e11",9500:"6dbfc69f",9514:"1be78505",9671:"0e384e19",9693:"9ff645a7",9706:"83689511",9817:"14eb3368",9833:"ecb74136"}[e]||e)+"."+{53:"e2ef46fb",400:"551c2482",461:"9a513c0e",709:"1b4fb5af",780:"b8f02710",1566:"0a20c5f8",1671:"b488b185",2024:"4a6dd9ed",2094:"a9f19e30",2357:"036c28ee",2487:"ec927e39",2562:"9592c97f",2641:"cd7bc385",2653:"97e8df7f",2658:"19f2a642",3220:"0071b3e8",3332:"23ebb25c",3437:"39501562",3667:"4442d7a5",3668:"0eb1f334",3989:"69038b0d",4006:"b3b2a2c8",4102:"7324fd27",4121:"d402ae43",4310:"cf26e66a",4711:"dc738740",4958:"4bce0854",4972:"8e031120",5352:"8c505cc1",5715:"09d87cf4",5745:"51d49ead",5932:"f5571eec",6466:"59664199",6590:"6d5120eb",6626:"75fb6884",6885:"a17586f1",6991:"bc2886d5",7229:"cb4b7eef",7367:"a37d1f61",7395:"f29ba59d",7918:"d8ad29ad",7920:"f9442652",8009:"9fff1a24",8282:"4e6d9bb7",8495:"df7c5059",8820:"8e5f6124",8845:"5994e297",9096:"27f08efa",9500:"453a39d8",9514:"50d6590c",9671:"f310d8f7",9693:"d1ba235e",9706:"c5e55e32",9817:"c84357ce",9833:"cd807aae"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="paratextman-30:",b.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var d,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+t),d.src=e),f[e]=[a];var l=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/paratextman30/ro/",b.gca=function(e){return e={17896441:"7918",43819284:"4711",83689511:"9706","935f2afb":"53","118a9a7c":"400","1de926c6":"461","95d2782a":"709",a2e2a6ef:"780","94c1c5f5":"1566","844e8154":"1671",f58ac6a9:"2024","10ae4e2f":"2094","902d88ee":"2357","5f5fcb63":"2487","6e755901":"2562",b7d2af09:"2641","892fb73a":"2653","0a36724e":"2658","7adca5a1":"3220","9a4d4190":"3332","0cf73350":"3437",d1727341:"3667","3e4a8c33":"3668",d9c8d500:"3989","9cacdc20":"4006",baa1d5bf:"4102","22a201bb":"4121",b0f7120f:"4310","55145e57":"4958",ee6e2833:"5715","218979a3":"5745","7b9ba7a6":"5932","87af8c0d":"6466","766be276":"6590","975ec8ab":"6626",d311ccf8:"6885","635fb14e":"6991","04847427":"7229","052f7eb7":"7367","44ade08c":"7395","1a4e3797":"7920",ddb1eec6:"8009",eff0a87a:"8282","00bf44a2":"8820","4c68c810":"8845","606f0e11":"9096","6dbfc69f":"9500","1be78505":"9514","0e384e19":"9671","9ff645a7":"9693","14eb3368":"9817",ecb74136:"9833"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,t)=>{var f=b.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=b.p+b.u(a),d=new Error;b.l(c,(t=>{if(b.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,f[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],d=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in d)b.o(d,f)&&(b.m[f]=d[f]);if(o)var i=o(b)}for(a&&a(t);n<c.length;n++)r=c[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkparatextman_30=self.webpackChunkparatextman_30||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();