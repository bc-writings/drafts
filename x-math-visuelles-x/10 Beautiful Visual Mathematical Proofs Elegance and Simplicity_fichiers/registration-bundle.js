!function(t){function e(e){for(var n,r,i=e[0],a=e[1],u=0,s=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);s.length;)s.shift()()}var n={},r={2:0},o={2:0};function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[];r[t]?e.push(r[t]):0!==r[t]&&{1:1}[t]&&e.push(r[t]=new Promise((function(e,n){for(var o=t+".css",a=i.p+o,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var l=(d=u[s]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===a))return e()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){var d;if((l=(d=c[s]).getAttribute("data-href"))===o||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(t){return i.p+""+({0:"vendors~main-bootstrap~registration-disqus-login~registration-logout~registration-start-sso~registra~5961887e",1:"main-bootstrap",3:"registration-disqus-login",4:"registration-logout",5:"registration-start-sso",6:"registration-start-sso-for-provider",7:"vendors~main-bootstrap"}[t]||t)+"-bundle.js"}(t);var l=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://static-cdn.spot.im/production/registration/tags/v1.10.2/",i.oe=function(t){throw console.error(t),t};var a=window.webpackJsonp_spotim_registration=window.webpackJsonp_spotim_registration||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;i(i.s=5)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=function(){return window.top!==window&&!!window.$sf};function o(t,e){void 0===e&&(e={});var n=new CustomEvent(t,{detail:e});document.dispatchEvent(n),r()&&window.spotimSafeframe&&window.spotimSafeframe.sendMessageToHost({action:"spotim_event",args:{type:t,params:e}})}var i=function(){if(!r())return window.location;try{var t,e;return new URL((null===(t=window)||void 0===t||null===(e=t.spotimSafeframe)||void 0===e?void 0:e.hostUrl)||document.referrer)}catch(t){return window.location}}},function(t,e){t.exports=window.__SPOTIM__.lib.currentUser},function(t,e){t.exports=window.__SPOTIM__.SERVICES.configProvider},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(6),o=n(7),i=n(8),a=n(10);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||a()}},function(t,e,n){"use strict";n.r(e),n.d(e,"SHOW_LOGIN_MODAL_EVENT_NAME",(function(){return v}));var r=n(4),o=n.n(r),i=n(3),a=n.n(i),u=n(2),s=n.n(u),l=n(1),c=n.n(l),d=n(0);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w,_=s.a.get("init_data.config.sso_enabled"),v="show-login-modal";function g(t){switch(t.mode){case"start-sso":return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,23)).then((function(e){return e.startSso({callback:null==t?void 0:t.callback,onError:null==t?void 0:t.onError})}));case"start-sso-for-provider":return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,22)).then((function(e){return e.startSsoForProvider({provider:null==t?void 0:t.provider,token:null==t?void 0:t.token})}));case"logout":return Object(d.a)("spot-im-user-logout"),Promise.all([n.e(0),n.e(4)]).then(n.bind(null,17)).then((function(t){return t.default()}));case"init-disqus-login":return Object(d.a)("spot-im-login-start"),Promise.all([n.e(0),n.e(3)]).then(n.bind(null,18)).then((function(t){return t.default()}));default:return Object(d.a)("spot-im-login-start"),_?void 0:Promise.all([n.e(0),n.e(7),n.e(1)]).then(n.bind(null,19)).then((function(e){e.mountApp(t)}))}}document.addEventListener(v,(function(){g({mode:"signin"})})),window.showReg=function(){return g({mode:"signin"})},window.__SPOTIM__||(window.__SPOTIM__={}),window.__SPOTIM__=p(p({},null!==(w=window.__SPOTIM__)&&void 0!==w?w:{}),{},{showRegistration:g,initRegistration:function(t,e){return g(e)}}),function(){if(window.__SPOTIM__.deferredRegistrations){var t,e,n,r,i,a,u,s=null!==(t=null===(e=window)||void 0===e||null===(n=e.__SPOTIM__)||void 0===n||null===(r=n.deferredRegistrations)||void 0===r?void 0:r.slice(-1))&&void 0!==t?t:[{}],l=o()(s,1)[0];(null===(i=window)||void 0===i||null===(a=i.__SPOTIM__)||void 0===a||null===(u=a.deferredRegistrations)||void 0===u?void 0:u.length)>0&&(window.__SPOTIM__.deferredRegistrations=void 0),g(null==l?void 0:l.options)}}(),c.a.getAsyncToken().then((function(){var t;window.SPOTIM||(window.SPOTIM={}),window.SPOTIM=p(p({},null!==(t=window.SPOTIM)&&void 0!==t?t:{}),{},{startSSO:function(t,e){return g({mode:"start-sso",callback:t,onError:e})},startSSOForProvider:function(t){return g({mode:"start-sso-for-provider",provider:t.provider,token:t.token})},logout:function(){return g({mode:"logout"})}}),Object(d.a)("spot-im-api-ready")}))},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}},function(t,e,n){var r=n(9);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=window.__SPOTIM__.lib.react},function(t,e){t.exports=window.__SPOTIM__.lib.styledComponents},function(t,e){t.exports=window.__SPOTIM__.SERVICES.i18n},function(t,e){t.exports=window.__SPOTIM__.lib.errorReporting},function(t,e){t.exports=window.__SPOTIM__.lib.ReactDom},function(t,e){t.exports=window.__SPOTIM__.lib.ab},,,,function(t,e){t.exports=window.__SPOTIM__.lib.classnames},function(t,e){t.exports=window.__SPOTIM__.lib.metricsReporting}]);
//# sourceMappingURL=registration-bundle.js.map