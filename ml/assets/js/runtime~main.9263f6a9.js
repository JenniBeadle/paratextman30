(()=>{"use strict";var e,a,c,t,f,d={},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var c=r[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=d,o.c=r,e=[],o.O=(a,c,t,f)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],f=e[i][2];for(var r=!0,b=0;b<c.length;b++)(!1&f||d>=f)&&Object.keys(o.O).every((e=>o.O[e](c[b])))?c.splice(b--,1):(r=!1,f<d&&(d=f));if(r){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[c,t,f]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var f=Object.create(null);o.r(f);var d={};a=a||[null,c({}),c([]),c(c)];for(var r=2&t&&e;"object"==typeof r&&!~a.indexOf(r);r=c(r))Object.getOwnPropertyNames(r).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,o.d(f,d),f},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",269:"8d15507c",400:"118a9a7c",411:"175e29d3",434:"d74c7ba9",622:"12c3f5e2",794:"90a167ca",849:"170e68c2",979:"730983ee",1149:"e06df560",1306:"99841b1e",1654:"d2248b4b",2069:"dc7a8169",2313:"b4347d67",2369:"e0ab34b6",3143:"56f6ca4c",3391:"15c9093f",3440:"2d141b04",4227:"dd76ff70",4312:"a62e1ea5",4641:"331cdec8",4853:"d9b0ef60",4856:"e0acf37c",5139:"935c2265",5203:"cbd02f78",6249:"e820eaab",6466:"87af8c0d",6890:"a4ccc84a",7060:"c950c8c4",7158:"525ff62e",7256:"5fc94a87",7267:"81ee9333",7395:"ee2284dd",7536:"db0fa8f7",7689:"1036f257",7715:"329d4104",7843:"4e7665df",7918:"17896441",7920:"1a4e3797",8019:"92b9dde9",8312:"13ae0065",8466:"22b47e6f",8567:"d1a81231",8643:"c052735b",8707:"fae3e11a",9117:"8b9c3f26",9487:"09a052d4",9489:"c1fc05fd",9514:"1be78505",9778:"899776fc",9817:"14eb3368",9860:"115dc7c1"}[e]||e)+"."+{53:"fb6b3b94",269:"19f57ef5",400:"551c2482",411:"3bd62564",434:"6f34e1b3",622:"acc7b978",794:"fb991cf4",849:"b9892855",979:"7659ff1e",1149:"dda63df3",1306:"cb3bd5d0",1654:"b0ea6cd4",2069:"3084cbd4",2313:"1680ec0d",2369:"b7922338",3143:"fc89210f",3391:"7cc296a0",3440:"ee826440",4227:"7ce582a9",4312:"1ceb13d5",4641:"acfc2d61",4853:"82a6c526",4856:"d2562e1a",4972:"8e031120",5139:"021f7675",5203:"48dc3737",5352:"8c505cc1",6249:"c7e4f326",6466:"59664199",6890:"b406a606",7060:"106e8694",7158:"5e41112a",7256:"c42e0426",7267:"383cfe7a",7395:"59841666",7536:"20121e7a",7689:"9b5bdc5b",7715:"e1ddc34d",7843:"7c339f0d",7918:"d8ad29ad",7920:"f9442652",8019:"e76699b3",8312:"47fd797a",8466:"cdd05284",8495:"a5a4ed77",8567:"ec29588f",8643:"5a340878",8707:"a14831d4",9117:"22c9357e",9487:"f2a0335b",9489:"d0041263",9514:"50d6590c",9778:"730cc369",9817:"c84357ce",9860:"aab2abb3"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},f="paratextman-30:",o.l=(e,a,c,d)=>{if(t[e])t[e].push(a);else{var r,b;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+c){r=u;break}}r||(b=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",f+c),r.src=e),t[e]=[a];var l=(a,c)=>{r.onerror=r.onload=null,clearTimeout(s);var f=t[e];if(delete t[e],r.parentNode&&r.parentNode.removeChild(r),f&&f.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),b&&document.head.appendChild(r)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/paratextman30/ml/",o.gca=function(e){return e={17896441:"7918","935f2afb":"53","8d15507c":"269","118a9a7c":"400","175e29d3":"411",d74c7ba9:"434","12c3f5e2":"622","90a167ca":"794","170e68c2":"849","730983ee":"979",e06df560:"1149","99841b1e":"1306",d2248b4b:"1654",dc7a8169:"2069",b4347d67:"2313",e0ab34b6:"2369","56f6ca4c":"3143","15c9093f":"3391","2d141b04":"3440",dd76ff70:"4227",a62e1ea5:"4312","331cdec8":"4641",d9b0ef60:"4853",e0acf37c:"4856","935c2265":"5139",cbd02f78:"5203",e820eaab:"6249","87af8c0d":"6466",a4ccc84a:"6890",c950c8c4:"7060","525ff62e":"7158","5fc94a87":"7256","81ee9333":"7267",ee2284dd:"7395",db0fa8f7:"7536","1036f257":"7689","329d4104":"7715","4e7665df":"7843","1a4e3797":"7920","92b9dde9":"8019","13ae0065":"8312","22b47e6f":"8466",d1a81231:"8567",c052735b:"8643",fae3e11a:"8707","8b9c3f26":"9117","09a052d4":"9487",c1fc05fd:"9489","1be78505":"9514","899776fc":"9778","14eb3368":"9817","115dc7c1":"9860"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,c)=>{var t=o.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((c,f)=>t=e[a]=[c,f]));c.push(t[2]=f);var d=o.p+o.u(a),r=new Error;o.l(d,(c=>{if(o.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var f=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;r.message="Loading chunk "+a+" failed.\n("+f+": "+d+")",r.name="ChunkLoadError",r.type=f,r.request=d,t[1](r)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var t,f,d=c[0],r=c[1],b=c[2],n=0;if(d.some((a=>0!==e[a]))){for(t in r)o.o(r,t)&&(o.m[t]=r[t]);if(b)var i=b(o)}for(a&&a(c);n<d.length;n++)f=d[n],o.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return o.O(i)},c=self.webpackChunkparatextman_30=self.webpackChunkparatextman_30||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();