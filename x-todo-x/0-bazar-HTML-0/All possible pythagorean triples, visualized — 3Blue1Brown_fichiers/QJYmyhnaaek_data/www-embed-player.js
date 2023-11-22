(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.K=b.prototype}
function oa(){this.o=!1;this.i=null;this.l=void 0;this.f=1;this.j=this.m=0;this.u=this.h=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.l=a};
function qa(a,b){a.h={ya:b,za:!0};a.f=a.m||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function x(a,b,c){a.f=c;return{value:b}}
oa.prototype.N=function(a){this.f=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.j=c)}
function sa(a){a.m=0;var b=a.h.ya;a.h=null;return b}
function ta(a){this.f=new oa;this.h=a}
function va(a,b){pa(a.f);var c=a.f.i;if(c)return wa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return xa(a)}
function wa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.o=!1,e;var f=e.value}catch(g){return a.f.i=null,qa(a.f,g),xa(a)}a.f.i=null;d.call(a.f,f);return xa(a)}
function xa(a){for(;a.f.f;)try{var b=a.h(a.f);if(b)return a.f.o=!1,{value:b.value,done:!1}}catch(c){a.f.l=void 0,qa(a.f,c)}a.f.o=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.za)throw b.ya;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function ya(a){this.next=function(b){pa(a.f);a.f.i?b=wa(a,a.f.i.next,b,a.f.B):(a.f.B(b),b=xa(a));return b};
this["throw"]=function(b){pa(a.f);a.f.i?b=wa(a,a.f.i["throw"],b,a.f.B):(qa(a.f,b),b=xa(a));return b};
this["return"]=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function za(a,b){var c=new ya(new ta(b));na&&a.prototype&&na(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
function Aa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Aa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||na});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ba="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)y(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ba});
t("Promise",function(a){function b(g){this.f=0;this.i=void 0;this.h=[];this.o=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.I),reject:g(this.l)}};
b.prototype.I=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.T(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.H(g):this.m(g)}};
b.prototype.H=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.U(h,g):this.m(g)};
b.prototype.l=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.i=h;2===this.f&&this.J();this.u()};
b.prototype.J=function(){var g=this;e(function(){if(g.C()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.C=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.u=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.T=function(g){var h=this.j();g.ia(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(B){m(B)}}:r}
var l,m,p=new b(function(q,r){l=q;m=r});
this.ia(k(g,l),k(h,m));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ia=function(g,h){function k(){switch(l.f){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).ia(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(w){return function(B){q[w]=B;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).ia(p(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ca(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ca(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ca(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ca(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Aa(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!y(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!y(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&y(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.h[l];if(m&&y(h.h,l))for(var p=0;p<m.length;p++){var q=m[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:p,D:q}}return{id:l,list:m,index:-1,D:void 0}}
function e(h){this.h={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.h[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.D),this.f.previous.next=l.D,this.f.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.h[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.h={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push(b[d]);return c}});
var z=this||self;function A(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Da(a){if(a&&a!=z)return Ea(a.document);null===Fa&&(Fa=Ea(z.document));return Fa}
var Ga=/^[\w+/_-]+[=]{0,2}$/,Fa=null;function Ea(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ga.test(a)?a:""}
function C(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ha(){}
function Ia(a){a.ra=void 0;a.getInstance=function(){return a.ra?a.ra:a.ra=new a}}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function La(a){return Object.prototype.hasOwnProperty.call(a,Ma)&&a[Ma]||(a[Ma]=++Na)}
var Ma="closure_uid_"+(1E9*Math.random()>>>0),Na=0;function Oa(a,b,c){return a.call.apply(a.bind,arguments)}
function Pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?F=Oa:F=Pa;return F.apply(null,arguments)}
function Qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function G(){return Date.now()}
function Ra(a,b){A(a,b,void 0)}
function H(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ek=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ta);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
H(Ta,Error);Ta.prototype.name="CustomError";function Ua(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.h=c}}
;function Va(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},I=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Xa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ya=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
I(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function ab(a,b){var c=Wa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function bb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function cb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function db(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function eb(a,b){var c=Ka(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function fb(a){var b=gb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function hb(a){for(var b in a)return!1;return!0}
function ib(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function kb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function lb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=lb(a[c]);return b}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ob;function pb(){if(void 0===ob){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(c){z.console&&z.console.error(c.message)}ob=a}else ob=a}return ob}
;function qb(a,b){this.f=b===rb?a:""}
qb.prototype.W=!0;qb.prototype.V=function(){return this.f.toString()};
qb.prototype.qa=!0;qb.prototype.ma=function(){return 1};
function sb(a){if(a instanceof qb&&a.constructor===qb)return a.f;Ja(a);return"type_error:TrustedResourceUrl"}
var rb={};var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ub(a,b){if(b)a=a.replace(vb,"&amp;").replace(wb,"&lt;").replace(xb,"&gt;").replace(yb,"&quot;").replace(zb,"&#39;").replace(Ab,"&#0;");else{if(!Bb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(vb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(wb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(xb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(yb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(zb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ab,"&#0;"))}return a}
var vb=/&/g,wb=/</g,xb=/>/g,yb=/"/g,zb=/'/g,Ab=/\x00/g,Bb=/[\x00&<>"']/;function Cb(a,b){return a<b?-1:a>b?1:0}
;function J(a,b){this.f=b===Db?a:""}
J.prototype.W=!0;J.prototype.V=function(){return this.f.toString()};
J.prototype.qa=!0;J.prototype.ma=function(){return 1};
function Eb(a){if(a instanceof J&&a.constructor===J)return a.f;Ja(a);return"type_error:SafeUrl"}
var Gb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Hb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Jb(a){if(a instanceof J)return a;a="object"==typeof a&&a.W?a.V():String(a);Ib.test(a)||(a="about:invalid#zClosurez");return new J(a,Db)}
var Db={},Kb=new J("about:invalid#zClosurez",Db);var Lb;a:{var Mb=z.navigator;if(Mb){var Nb=Mb.userAgent;if(Nb){Lb=Nb;break a}}Lb=""}function K(a){return-1!=Lb.indexOf(a)}
;function Ob(a,b,c){this.f=c===Pb?a:"";this.h=b}
Ob.prototype.qa=!0;Ob.prototype.ma=function(){return this.h};
Ob.prototype.W=!0;Ob.prototype.V=function(){return this.f.toString()};
var Pb={};function Qb(a,b){var c=pb();c=c?c.createHTML(a):a;return new Ob(c,b,Pb)}
;function Rb(a,b){var c=b instanceof J?b:Jb(b);a.href=Eb(c)}
function Sb(a,b){a.src=sb(b);var c=Da(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Tb(a){return a=ub(a,void 0)}
function Ub(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Vb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Zb(a){var b=[],c;for(c in a)Yb(c,a[c],b);return b.join("&")}
function $b(a,b){var c=Zb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ac=/#|$/;function bc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function cc(a){cc[" "](a);return a}
cc[" "]=Ha;var dc=K("Opera"),ec=K("Trident")||K("MSIE"),fc=K("Edge"),gc=K("Gecko")&&!(-1!=Lb.toLowerCase().indexOf("webkit")&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),hc=-1!=Lb.toLowerCase().indexOf("webkit")&&!K("Edge");function ic(){var a=z.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Lb;if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,pc={},qc;if(z.document&&ec){var rc=ic();qc=rc?rc:parseInt(nc,10)||void 0}else qc=void 0;var sc=qc;var tc=K("Firefox")||K("FxiOS"),uc=K("iPhone")&&!K("iPod")&&!K("iPad")||K("iPod"),vc=K("iPad");var wc={},xc=null;
function yc(a){var b=3;Ka(a);void 0===b&&(b=0);if(!xc){xc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));wc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===xc[h]&&(xc[h]=g)}}}b=wc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var L=window;function zc(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Bc[c])c=Bc[c];else{c=String(c);if(!Bc[c]){var f=/function\s+([^\(]+)/m.exec(c);Bc[c]=f?f[1]:"[Anonymous]"}c=Bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function Ac(a,b){b||(b={});b[Cc(a)]=!0;var c=a.stack||"",d=a.fk;d&&!b[Cc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Ac(d,b));return c}
function Cc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Bc={};function Dc(a){this.f=a||{cookie:""}}
n=Dc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.pk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Aa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Aa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ec=new Dc("undefined"==typeof document?null:document);var Fc=!ec||9<=Number(sc);function Gc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=Gc.prototype;n.clone=function(){return new Gc(this.x,this.y)};
n.equals=function(a){return a instanceof Gc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Hc(a,b){this.width=a;this.height=b}
n=Hc.prototype;n.clone=function(){return new Hc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ic(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Jc(a,b){db(b,function(c,d){c&&"object"==typeof c&&c.W&&(c=c.V());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Kc.hasOwnProperty(d)?a.setAttribute(Kc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Kc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Lc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Fc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Tb(g.name),'"');if(g.type){f.push(' type="',Tb(g.type),'"');var h={};nb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Mc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Jc(f,g));2<d.length&&Nc(e,f,d);return f}
function Nc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ka(f)||D(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(D(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}I(g?bb(f):f,d)}}}
function Mc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pc(a){var b=Qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Rc(){var a=[];Pc(function(b){a.push(b)});
return a}
var Qc={Gb:"allow-forms",Hb:"allow-modals",Ib:"allow-orientation-lock",Jb:"allow-pointer-lock",Kb:"allow-popups",Lb:"allow-popups-to-escape-sandbox",Mb:"allow-presentation",Nb:"allow-same-origin",Ob:"allow-scripts",Pb:"allow-top-navigation",Qb:"allow-top-navigation-by-user-activation"},Sc=Va(function(){return Rc()});
function Tc(){var a=Mc(document,"IFRAME"),b={};I(Sc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function M(){this.h=this.h;this.B=this.B}
M.prototype.h=!1;M.prototype.dispose=function(){this.h||(this.h=!0,this.A())};
function Uc(a,b){a.h?b():(a.B||(a.B=[]),a.B.push(b))}
M.prototype.A=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function Vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?Wc.apply(null,d):Vc(d)}}
;var Xc={};function Yc(){}
function Zc(a,b){if(b!==Xc)throw Error("Bad secret");this.f=a}
v(Zc,Yc);Zc.prototype.toString=function(){return this.f};new Zc("about:blank",Xc);new Zc("about:invalid#zTSz",Xc);function $c(a){ad();var b=pb();a=b?b.createScriptURL(a):a;return new qb(a,rb)}
var ad=Ha;function bd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var cd=(new Date).getTime();function dd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function ed(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],B=e[2],E=e[3],Fb=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var ua=E^w&(B^E);var oc=1518500249}else ua=w^B^E,oc=1859775393;else 60>r?(ua=w&B|E&(w|B),oc=2400959708):(ua=w^B^E,oc=3395469782);ua=((p<<5|p>>>27)&4294967295)+ua+Fb+oc+q[r]&4294967295;Fb=E;E=B;B=(w<<30|w>>>2)&4294967295;w=p;p=ua}e[0]=e[0]+p&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+B&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+Fb&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,B=p.length;w<B;++w)r.push(p.charCodeAt(w));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64;for(;r<q;)if(f[l++]=p[r++],m++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,m+=64}
function d(){var p=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)p[q++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ma:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function fd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],I(d,function(h){e.push(h)}),gd(e.join(" "));
var f=[],g=[];I(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];I(d,function(h){e.push(h)});
a=gd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function gd(a){var b=ed();b.update(a);return b.Ma().toLowerCase()}
;function hd(a){var b=dd(String(z.location.href)),c;(c=z.__SAPISID||z.__APISID||z.__OVERRIDE_SID)?c=!0:(c=new Dc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,c||(c=new Dc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(z.location.href);return d&&c&&b?[b,fd(dd(d),
c,a||null)].join(" "):null}return null}
;function id(){this.h=[];this.f=-1}
id.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.f=-1)};
id.prototype.get=function(a){return!!this.h[a]};
function jd(a){-1==a.f&&(a.f=Za(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function kd(a,b){this.i=a;this.j=b;this.h=0;this.f=null}
kd.prototype.get=function(){if(0<this.h){this.h--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function ld(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.f,a.f=b)}
;function md(a){z.setTimeout(function(){throw a;},0)}
var nd;
function od(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!K("Presto")&&(a=function(){var e=Mc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=F(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!K("Trident")&&!K("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.va;c.va=null;e()}};
return function(e){d.next={va:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function pd(){this.h=this.f=null}
var rd=new kd(function(){return new qd},function(a){a.reset()});
pd.prototype.add=function(a,b){var c=rd.get();c.set(a,b);this.h?this.h.next=c:this.f=c;this.h=c};
pd.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function qd(){this.next=this.scope=this.f=null}
qd.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
qd.prototype.reset=function(){this.next=this.scope=this.f=null};function sd(a,b){td||ud();vd||(td(),vd=!0);wd.add(a,b)}
var td;function ud(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);td=function(){a.then(xd)}}else td=function(){var b=xd;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!K("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(nd||(nd=od()),nd(b)):z.setImmediate(b)}}
var vd=!1,wd=new pd;function xd(){for(var a;a=wd.remove();){try{a.f.call(a.scope)}catch(b){md(b)}ld(rd,a)}vd=!1}
;function yd(){this.h=-1}
;function zd(){this.h=64;this.f=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.h;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
H(zd,yd);zd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Ad(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
zd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.h,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Ad(this,a,d),d+=this.h;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.h){Ad(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.h){Ad(this,e);f=0;break}}this.i=f;this.l+=b}};
zd.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.h-(this.i-56));for(var c=this.h-1;56<=c;c--)this.m[c]=b&255,b/=256;Ad(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Bd="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function Cd(){}
Cd.prototype.next=function(){throw Bd;};
Cd.prototype.L=function(){return this};
function Dd(a){if(a instanceof Cd)return a;if("function"==typeof a.L)return a.L(!1);if(Ka(a)){var b=0,c=new Cd;c.next=function(){for(;;){if(b>=a.length)throw Bd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ed(a,b){if(Ka(a))try{I(a,b,void 0)}catch(c){if(c!==Bd)throw c;}else{a=Dd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Bd)throw c;}}}
function Fd(a){if(Ka(a))return bb(a);a=Dd(a);var b=[];Ed(a,function(c){b.push(c)});
return b}
;function Gd(a,b){this.i={};this.f=[];this.P=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Gd)for(c=Hd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Hd(a){Id(a);return a.f.concat()}
n=Gd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||Jd;Id(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Jd(a,b){return a===b}
n.isEmpty=function(){return 0==this.h};
n.clear=function(){this.i={};this.P=this.h=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.h--,this.P++,this.f.length>2*this.h&&Id(this),!0):!1};
function Id(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.h++,this.f.push(a),this.P++);this.i[a]=b};
n.forEach=function(a,b){for(var c=Hd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Gd(this)};
n.L=function(a){Id(this);var b=0,c=this.P,d=this,e=new Cd;e.next=function(){if(c!=d.P)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Bd;var f=d.f[b++];return a?f:d.i[f]};
return e};function Kd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ld(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Md(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Kd(a).match(/\S+/g)||[],c=0<=Wa(c,b);return c}
function Nd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Md(a,"inverted-hdpi")&&Ld(a,Xa(a.classList?a.classList:Kd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Od=!ec||9<=Number(sc),Pd;
if(Pd=ec){var Qd;if(Object.prototype.hasOwnProperty.call(pc,"9"))Qd=pc["9"];else{for(var Rd=0,Sd=tb(String(nc)).split("."),Td=tb("9").split("."),Ud=Math.max(Sd.length,Td.length),Vd=0;0==Rd&&Vd<Ud;Vd++){var Wd=Sd[Vd]||"",Xd=Td[Vd]||"";do{var Yd=/(\d*)(\D*)(.*)/.exec(Wd)||["","","",""],Zd=/(\d*)(\D*)(.*)/.exec(Xd)||["","","",""];if(0==Yd[0].length&&0==Zd[0].length)break;Rd=Cb(0==Yd[1].length?0:parseInt(Yd[1],10),0==Zd[1].length?0:parseInt(Zd[1],10))||Cb(0==Yd[2].length,0==Zd[2].length)||Cb(Yd[2],Zd[2]);
Wd=Yd[3];Xd=Zd[3]}while(0==Rd)}Qd=pc["9"]=0<=Rd}Pd=!Qd}var $d=Pd,ae=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Ha,b),z.removeEventListener("test",Ha,b)}catch(c){}return a}();function be(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.h=!1}
be.prototype.stopPropagation=function(){this.h=!0};
be.prototype.preventDefault=function(){this.defaultPrevented=!0};function ce(a,b){be.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
H(ce,be);var de={2:"touch",3:"pen",4:"mouse"};
ce.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(gc){a:{try{cc(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:de[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&this.preventDefault()};
ce.prototype.stopPropagation=function(){ce.K.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ce.prototype.preventDefault=function(){ce.K.preventDefault.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,$d)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ee="closure_listenable_"+(1E6*Math.random()|0),fe=0;function ge(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.ja=e;this.key=++fe;this.X=this.ha=!1}
function he(a){a.X=!0;a.listener=null;a.f=null;a.src=null;a.ja=null}
;function ie(a){this.src=a;this.listeners={};this.f=0}
ie.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=je(a,b,d,e);-1<g?(b=a[g],c||(b.ha=!1)):(b=new ge(b,this.src,f,!!d,e),b.ha=c,a.push(b));return b};
ie.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=je(e,b,c,d);return-1<b?(he(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function ke(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(he(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function je(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.capture==!!c&&f.ja==d)return e}return-1}
;var le="closure_lm_"+(1E6*Math.random()|0),me={},ne=0;function oe(a,b,c,d,e){if(d&&d.once)pe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.f.add(String(b),c,!1,D(d)?!!d.capture:!!d,e):re(a,b,c,!1,d,e)}
function re(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=se(a);h||(a[le]=h=new ie(a));c=h.add(b,c,d,g,f);if(!c.f){d=te();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)ae||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ue(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ne++}}
function te(){var a=ve,b=Od?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.f.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):re(a,b,c,!0,d,e)}
function we(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)we(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=qe(c),a&&a[ee])?a.f.remove(String(b),c,d,e):a&&(a=se(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=je(b,c,d,e)),(c=-1<a?b[a]:null)&&xe(c))}
function xe(a){if("number"!==typeof a&&a&&!a.X){var b=a.src;if(b&&b[ee])ke(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ue(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ne--;(c=se(b))?(ke(c,a),0==c.f&&(c.src=null,b[le]=null)):he(a)}}}
function ue(a){return a in me?me[a]:me[a]="on"+a}
function ye(a,b,c,d){var e=!0;if(a=se(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.X&&(f=ze(f,d),e=e&&!1!==f)}return e}
function ze(a,b){var c=a.listener,d=a.ja||a.src;a.ha&&xe(a);return c.call(d,b)}
function ve(a,b){if(a.X)return!0;if(!Od){var c=b||C("window.event"),d=new ce(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.h&&0<=g;g--){d.f=c[g];var h=ye(c[g],f,!0,d);e=e&&h}for(g=0;!d.h&&g<c.length;g++)d.f=c[g],h=ye(c[g],f,!1,d),e=e&&h}return e}return ze(a,new ce(b,this))}
function se(a){a=a[le];return a instanceof ie?a:null}
var Ae="__closure_events_fn_"+(1E9*Math.random()>>>0);function qe(a){if("function"===typeof a)return a;a[Ae]||(a[Ae]=function(b){return a.handleEvent(b)});
return a[Ae]}
;function Be(){M.call(this);this.f=new ie(this);this.m=this;this.j=null}
H(Be,M);Be.prototype[ee]=!0;Be.prototype.addEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
Be.prototype.removeEventListener=function(a,b,c,d){we(this,a,b,c,d)};
Be.prototype.dispatchEvent=function(a){var b=this.j;if(b){var c=[];for(var d=1;b;b=b.j)c.push(b),++d}b=this.m;d=a.type||a;if("string"===typeof a)a=new be(a,b);else if(a instanceof be)a.target=a.target||b;else{var e=a;a=new be(d,b);nb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.h&&0<=f;f--){var g=a.f=c[f];e=Ce(g,d,!0,a)&&e}a.h||(g=a.f=b,e=Ce(g,d,!0,a)&&e,a.h||(e=Ce(g,d,!1,a)&&e));if(c)for(f=0;!a.h&&f<c.length;f++)g=a.f=c[f],e=Ce(g,d,!1,a)&&e;return e};
Be.prototype.A=function(){Be.K.A.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,he(d[e]);delete a.listeners[c];a.f--}}this.j=null};
function Ce(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.X&&g.capture==c){var h=g.listener,k=g.ja||g.src;g.ha&&ke(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function De(a){var b=[];Ee(new Fe,a,b);return b.join("")}
function Fe(){}
function Ee(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ee(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ge(d,c),c.push(":"),Ee(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ge(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var He={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ie=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ge(a,b){b.push('"',a.replace(Ie,function(c){var d=He[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),He[c]=d);return d}),'"')}
;function Je(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ke(a){this.f=0;this.o=void 0;this.j=this.h=this.i=null;this.l=this.m=!1;if(a!=Ha)try{var b=this;a.call(void 0,function(c){Le(b,2,c)},function(c){Le(b,3,c)})}catch(c){Le(this,3,c)}}
function Me(){this.next=this.context=this.onRejected=this.h=this.f=null;this.i=!1}
Me.prototype.reset=function(){this.context=this.onRejected=this.h=this.f=null;this.i=!1};
var Ne=new kd(function(){return new Me},function(a){a.reset()});
function Oe(a,b,c){var d=Ne.get();d.h=a;d.onRejected=b;d.context=c;return d}
function Pe(a){return new Ke(function(b,c){c(a)})}
Ke.prototype.then=function(a,b,c){return Qe(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ke.prototype.$goog_Thenable=!0;function Re(a,b){return Qe(a,null,b,void 0)}
Ke.prototype.cancel=function(a){if(0==this.f){var b=new Se(a);sd(function(){Te(this,b)},this)}};
function Te(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Te(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Ue(c),Ve(c,e,3,b)))}a.i=null}else Le(a,3,b)}
function We(a,b){a.h||2!=a.f&&3!=a.f||Xe(a);a.j?a.j.next=b:a.h=b;a.j=b}
function Qe(a,b,c,d){var e=Oe(null,null,null);e.f=new Ke(function(f,g){e.h=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Se?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;We(a,e);return e.f}
Ke.prototype.u=function(a){this.f=0;Le(this,2,a)};
Ke.prototype.C=function(a){this.f=0;Le(this,3,a)};
function Le(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.u,f=a.C;if(d instanceof Ke){We(d,Oe(e||Ha,f||null,a));var g=!0}else if(Je(d))d.then(e,f,a),g=!0;else{if(D(d))try{var h=d.then;if("function"===typeof h){Ye(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.f=b,a.i=null,Xe(a),3!=b||c instanceof Se||Ze(a,c))}}
function Ye(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Xe(a){a.m||(a.m=!0,sd(a.B,a))}
function Ue(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
Ke.prototype.B=function(){for(var a;a=Ue(this);)Ve(this,a,this.f,this.o);this.m=!1};
function Ve(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,$e(b,c,d);else try{b.i?b.h.call(b.context):$e(b,c,d)}catch(e){af.call(null,e)}ld(Ne,b)}
function $e(a,b,c){2==b?a.h.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ze(a,b){a.l=!0;sd(function(){a.l&&af.call(null,b)})}
var af=md;function Se(a){Ta.call(this,a)}
H(Se,Ta);Se.prototype.name="cancel";function N(a){M.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.i={};this.o=!!a}
H(N,M);n=N.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function bf(a,b,c,d){if(b=a.i[b]){var e=a.f;(b=$a(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Y(b)}}
n.Y=function(a){var b=this.f[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.f[a+1]=Ha):(c&&ab(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.R=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];cf(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Y(c)}}return 0!=e}return!1};
function cf(a,b,c){sd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(I(b,this.Y,this),delete this.i[a])}else this.f.length=0,this.i={}};
n.A=function(){N.K.A.call(this);this.clear();this.j.length=0};function df(a){this.f=a}
df.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,De(b))};
df.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
df.prototype.remove=function(a){this.f.remove(a)};function ef(a){this.f=a}
H(ef,df);function ff(a){this.data=a}
function gf(a){return void 0===a||a instanceof ff?a:new ff(a)}
ef.prototype.set=function(a,b){ef.K.set.call(this,a,gf(b))};
ef.prototype.h=function(a){a=ef.K.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ef.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function hf(a){this.f=a}
H(hf,ef);hf.prototype.set=function(a,b,c){if(b=gf(b)){if(c){if(c<G()){hf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}hf.K.set.call(this,a,b)};
hf.prototype.h=function(a){var b=hf.K.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())hf.prototype.remove.call(this,a);else return b}};function jf(){}
;function kf(){}
H(kf,jf);kf.prototype.clear=function(){var a=Fd(this.L(!0)),b=this;I(a,function(c){b.remove(c)})};function lf(a){this.f=a}
H(lf,kf);n=lf.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.L=function(a){var b=0,c=this.f,d=new Cd;d.next=function(){if(b>=c.length)throw Bd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function mf(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
H(mf,lf);function nf(a,b){this.h=a;this.f=null;if(ec&&!(9<=Number(sc))){of||(of=new Gd);this.f=of.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),of.set(a,this.f));try{this.f.load(this.h)}catch(c){this.f=null}}}
H(nf,kf);var pf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},of=null;function qf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return pf[b]})}
n=nf.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(qf(a),b);rf(this)};
n.get=function(a){a=this.f.getAttribute(qf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(qf(a));rf(this)};
n.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Cd;d.next=function(){if(b>=c.length)throw Bd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);rf(this)};
function rf(a){try{a.f.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function sf(a,b){this.h=a;this.f=b+"::"}
H(sf,kf);sf.prototype.set=function(a,b){this.h.set(this.f+a,b)};
sf.prototype.get=function(a){return this.h.get(this.f+a)};
sf.prototype.remove=function(a){this.h.remove(this.f+a)};
sf.prototype.L=function(a){var b=this.h.L(!0),c=this,d=new Cd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.h.get(e)};
return d};function tf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var uf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};A("yt.config_",uf,void 0);function O(a){tf(uf,arguments)}
function P(a,b){return a in uf?uf[a]:b}
function vf(){return P("PLAYER_CONFIG",{})}
;var wf=[];function xf(a){wf.forEach(function(b){return b(a)})}
function yf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zf(b),xf(b)}}:a}
function zf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),O("ERRORS",b))}
function Af(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),O("ERRORS",b))}
;var Bf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Bf,void 0);function Cf(a){tf(Bf,arguments)}
;function Df(a,b,c,d){Ec.set(""+a,b,{Aa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Q(a){a=Ef(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ff(a,b){var c=Ef(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ef(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function Gf(a){a&&(a.dataset?a.dataset[Hf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function If(a,b){return a?a.dataset?a.dataset[Hf(b)]:a.getAttribute("data-"+b):null}
var Jf={};function Hf(a){return Jf[a]||(Jf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function R(a,b){"function"===typeof a&&(a=yf(a));return window.setTimeout(a,b)}
function Kf(a){window.clearTimeout(a)}
;var Lf=z.ytPubsubPubsubInstance||new N,Mf=z.ytPubsubPubsubSubscribedKeys||{},Nf=z.ytPubsubPubsubTopicToKeys||{},Of=z.ytPubsubPubsubIsSynchronous||{};function Pf(a,b){var c=Qf();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Mf[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Of[a]?f():R(f,0)}catch(g){zf(g)}},void 0);
Mf[d]=!0;Nf[a]||(Nf[a]=[]);Nf[a].push(d);return d}return 0}
function Rf(a){var b=Qf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),I(a,function(c){b.unsubscribeByKey(c);delete Mf[c]}))}
function Sf(a,b){var c=Qf();c&&c.publish.apply(c,arguments)}
function Tf(a){var b=Qf();if(b)if(b.clear(a),a)Uf(a);else for(var c in Nf)Uf(c)}
function Qf(){return z.ytPubsubPubsubInstance}
function Uf(a){Nf[a]&&(a=Nf[a],I(a,function(b){Mf[b]&&delete Mf[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Y;N.prototype.publish=N.prototype.R;N.prototype.clear=N.prototype.clear;A("ytPubsubPubsubInstance",Lf,void 0);A("ytPubsubPubsubTopicToKeys",Nf,void 0);A("ytPubsubPubsubIsSynchronous",Of,void 0);A("ytPubsubPubsubSubscribedKeys",Mf,void 0);var Vf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Wf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Xf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Vf,""),c=c.replace(Wf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Yf(a,b,c)}
function Yf(a,b,c){c=void 0===c?null:c;var d=Zf(a),e=document.getElementById(d),f=e&&If(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Pf(d,b),b=""+La(b),$f[b]=f),g||(e=ag(a,d,function(){If(e,"loaded")||(Gf(e),Sf(d),R(Qa(Tf,d),0))},c)))}
function ag(a,b,c,d){d=void 0===d?null:d;var e=Mc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,$c(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function bg(a){a=Zf(a);var b=document.getElementById(a);b&&(Tf(a),b.parentNode.removeChild(b))}
function cg(a,b){if(a&&b){var c=""+La(b);(c=$f[c])&&Rf(c)}}
function Zf(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ub(a)}
var $f={};function dg(){}
function eg(a,b){return fg(a,1,b)}
;function gg(){}
v(gg,dg);function fg(a,b,c){isNaN(c)&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
gg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
gg.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};
Ia(gg);gg.getInstance();var hg=[],ig=!1;function jg(){if(!Q("disable_ad_status_on_html5_clients")&&(!Q("condition_ad_status_fetch_on_consent_cookie_html5_clients")||Ec.get("CONSENT","").startsWith("YES+"))&&"1"!=eb(vf(),"args","privembed")){var a=function(){ig=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
try{Xf("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}hg.push(eg(function(){ig||"google_ad_status"in window||(cg("//static.doubleclick.net/instream/ad_status.js",a),ig=!0,O("DCLKSTAT",3))},5E3))}}
function kg(){return parseInt(P("DCLKSTAT",0),10)}
;var lg=0;A("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++lg},void 0);var mg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ng(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in mg||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.h=a.pageY}}catch(e){}}
function og(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.h=a.clientY+b}}
ng.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ng.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ng.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var gb=z.ytEventsEventsListeners||{};A("ytEventsEventsListeners",gb,void 0);var pg=z.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",pg,void 0);
function qg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return fb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var rg=Va(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function sg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=qg(a,b,c,d);if(e)return e;e=++pg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ng(h);if(!Oc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ng(h);
h.currentTarget=a;return c.call(a,h)};
g=yf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),rg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);gb[e]=[a,b,c,g,d];return e}
function tg(a){a&&("string"==typeof a&&(a=[a]),I(a,function(b){if(b in gb){var c=gb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?rg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete gb[b]}}))}
;var ug=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function vg(a){this.u=a;this.f=null;this.l=0;this.o=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.H=sg(window,"mousemove",F(this.I,this));a=F(this.C,this);"function"===typeof a&&(a=yf(a));this.J=window.setInterval(a,25)}
H(vg,M);vg.prototype.I=function(a){void 0===a.f&&og(a);var b=a.f;void 0===a.h&&og(a);this.f=new Gc(b,a.h)};
vg.prototype.C=function(){if(this.f){var a=ug();if(0!=this.l){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.u();this.m=d}this.l=a;this.o=this.f;this.j=(this.j+1)%4}};
vg.prototype.A=function(){window.clearInterval(this.J);tg(this.H)};var wg={};
function xg(a){var b=void 0===a?{}:a;a=void 0===b.Sa?!0:b.Sa;b=void 0===b.hb?!1:b.hb;if(null==C("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?G()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&yg();sg(document,"keydown",yg);sg(document,"keyup",yg);sg(document,"mousedown",yg);sg(document,"mouseup",yg);a&&(b?sg(window,"touchmove",function(){zg("touchmove",200)},{passive:!0}):(sg(window,"resize",function(){zg("resize",200)}),sg(window,"scroll",function(){zg("scroll",200)})));
new vg(function(){zg("mouse",100)});
sg(document,"touchstart",yg,{passive:!0});sg(document,"touchend",yg,{passive:!0})}}
function zg(a,b){wg[a]||(wg[a]=!0,eg(function(){yg();wg[a]=!1},b))}
function yg(){null==C("_lact",window)&&xg();var a=G();A("_lact",a,window);-1==C("_fact",window)&&A("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ag(){var a=C("_lact",window),b;null==a?b=-1:b=Math.max(G()-a,0);return b}
;var Bg=window,S=Bg.ytcsi&&Bg.ytcsi.now?Bg.ytcsi.now:Bg.performance&&Bg.performance.timing&&Bg.performance.now&&Bg.performance.timing.navigationStart?function(){return Bg.performance.timing.navigationStart+Bg.performance.now()}:function(){return(new Date).getTime()};var Cg=Ff("initial_gel_batch_timeout",1E3),Dg=Math.pow(2,16)-1,Eg=null,Fg=0,Gg=void 0,Hg=0,Ig=0,Jg=0,Kg=!0,Lg=z.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",Lg,void 0);var Mg=z.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Mg,void 0);function Ng(a){a=void 0===a?!1:a;return new Ke(function(b){Kf(Hg);Kf(Ig);Ig=0;Gg&&Gg.isReady()?(Og(b,a),Lg.clear()):(Pg(),b())})}
function Pg(){Q("web_gel_timeout_cap")&&!Ig&&(Ig=R(Ng,6E4));Kf(Hg);var a=P("LOGGING_BATCH_TIMEOUT",Ff("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Kg&&(a=Cg);Hg=R(Ng,a)}
function Og(a,b){var c=Gg;b=void 0===b?!1:b;for(var d=Math.round(S()),e=Lg.size,f=u(Lg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=lb({context:Qg(c.G||Rg())});h.events=k;(k=Mg[g])&&Sg(h,g,k);delete Mg[g];Tg(h,d);Ug(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Fg=Math.round(S()-d)},
onError:function(){e--;e||a()},
ub:b});Kg=!1}}
function Tg(a,b){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&Q("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Dg/2));d++;d>Dg&&(d=1);O("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Eg&&Fg&&Q("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Eg,roundtripMs:String(Fg)});Eg=c;Fg=0}}
function Sg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Vg=z.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Vg,void 0);
function Wg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||S());e[a]=b;a=Ag();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.O&&(a=e.context,b=d.O,Vg[b]=b in Vg?Vg[b]+1:0,a.sequence={index:Vg[b],groupKey:b},d.Na&&delete Vg[d.O]);d=d.M;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Mg[d.token]=a,a=d.token);d=Lg.get(a)||[];Lg.set(a,d);d.push(e);c&&(Gg=new c);c=Ff("web_logging_max_batch")||
100;e=S();d.length>=c?Ng(!0):10<=e-Jg&&(Pg(),Jg=e)}
;function Xg(){var a=Yg;C("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a,void 0)}
function Zg(a){A("yt.ads.biscotti.lastId_",a,void 0)}
;var $g={q:!0,search_query:!0};function ah(a){for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?cb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){$g.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],zf(k))}}return c}
function bh(a){var b=[];db(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];I(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ch(a){"?"==a.charAt(0)&&(a=a.substr(1));return ah(a)}
function dh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ch(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return $b(a,e)+d}
;function eh(a){var b=fh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(gh(b),hh(b));b.ca_type="image";a&&(b.bid=a);return b}
function gh(a){var b={};b.dt=cd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.h.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?L:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!L.navigator&&"unknown"!==typeof L.navigator.javaEnabled&&!!L.navigator.javaEnabled&&L.navigator.javaEnabled();L.screen&&(b.u_h=L.screen.height,b.u_w=L.screen.width,b.u_ah=L.screen.availHeight,b.u_aw=L.screen.availWidth,b.u_cd=L.screen.colorDepth);
L.navigator&&L.navigator.plugins&&(b.u_nplug=L.navigator.plugins.length);L.navigator&&L.navigator.mimeTypes&&(b.u_nmime=L.navigator.mimeTypes.length);return b}
function hh(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Hc(l.clientWidth,l.clientHeight)).round()}catch(p){m=new Hc(-12245933,-12245933)}k=m;m={};l=new id;z.SVGElement&&
z.document.createElementNS&&l.set(0);c=Tc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);z.crypto&&z.crypto.subtle&&l.set(3);z.TextDecoder&&z.TextEncoder&&l.set(4);l=jd(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.h;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!L.WebGLRenderingContext,m}
var fh=new function(){var a=window.document;this.f=window;this.h=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return bh(eh(a))},void 0);var ih="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function jh(){if(!ih)return null;var a=ih();return"open"in a?a:null}
function kh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var lh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},mh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
nh=!1;
function oh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Vb)[1]||null,e=Xb(a);d&&e?(d=c,c=a.match(Vb),d=d.match(Vb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Xb(c)==e&&(Number(c.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;d=Q("web_ajax_ignore_global_headers_if_set");for(var f in lh)e=P(lh[f]),!e||!c&&Xb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Xb(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Xb(a))b["X-YouTube-Ad-Signals"]=bh(eh(void 0));return b}
function ph(a){var b=window.location.search,c=Xb(a),d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ch(b),f={};I(mh,function(g){e[g]&&(f[g]=e[g])});
return dh(a,f||{},!1)}
function qh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=rh(a,b);var d=sh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Kf(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||z;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.sa&&b.sa.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Ea&&0<b.timeout&&(f=R(function(){e||(e=!0,Kf(f),b.Ea.call(b.context||z))},b.timeout))}else th(a,b)}
function th(a,b){var c=b.format||"JSON";a=rh(a,b);var d=sh(a,b),e=!1,f=uh(a,function(k){if(!e){e=!0;h&&Kf(h);var l=kh(k),m=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)m=vh(a,c,k,b.gk);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.sa&&b.sa.call(p,k,m)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Z&&0<b.timeout){var g=b.Z;var h=R(function(){e||(e=!0,f.abort(),Kf(h),g.call(b.context||z,f))},b.timeout)}return f}
function rh(a,b){b.jk&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.tb;d&&(d[c]&&delete d[c],a=dh(a,d||{},!0));return a}
function sh(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.F,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.ik||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.F&&b.F[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ch(e),nb(e,f),e=b.Fa&&"JSON"==b.Fa?JSON.stringify(e):Zb(e));f=e||f&&!hb(f);!nh&&f&&"POST"!=b.method&&(nh=!0,zf(Error("AJAX request with postData should use POST")));
return e}
function vh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Af(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?wh(a):null)e={},I(a.getElementsByTagName("*"),function(g){e[g.tagName]=xh(g)})}d&&yh(e);
return e}
function yh(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else yh(a[b])}}
function wh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function xh(a){var b="";I(a.childNodes,function(c){b+=c.nodeValue});
return b}
function uh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&yf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=jh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=ph(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=oh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function zh(){for(var a={},b=u(Object.entries(ch(P("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Ah(){return"INNERTUBE_API_KEY"in uf&&"INNERTUBE_API_VERSION"in uf}
function Rg(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ta:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ua:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Wa:P("INNERTUBE_CONTEXT_HL",void 0),Va:P("INNERTUBE_CONTEXT_GL",void 0),Xa:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Za:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ya:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Qg(a){var b={client:{hl:a.Wa,gl:a.Va,clientName:a.Ua,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ta}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=P("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=P("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&Q("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,zh());return b}
function Bh(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.dk||P("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().ck:b=hd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Ch(a){a=Object.assign({},a);delete a.Authorization;var b=hd();if(b){var c=new zd;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=yc(c.digest())}return a}
;function Dh(){var a=new mf;(a=a.isAvailable()?new sf(a,"yt.innertube"):null)||(a=new nf("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new hf(a):null;this.h=document.domain||window.location.hostname}
Dh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,G()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(De(b))}catch(f){return}else e=escape(b);Df(a,e,c,this.h)};
Dh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ec.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Dh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.h;Ec.remove(""+a,"/",void 0===b?"youtube.com":b)};var Eh;function Fh(){Eh||(Eh=new Dh);return Eh}
function Gh(a,b,c,d){if(d)return null;d=Fh().get("nextId",!0)||1;var e=Fh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ch(c),requestTime:Math.round(S())};Fh().set("nextId",d+1,86400,!0);Fh().set("requests",e,86400,!0);return d}
function Hh(a){var b=Fh().get("requests",!0)||{};delete b[a];Fh().set("requests",b,86400,!0)}
function Ih(a){var b=Fh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=Ch(Bh(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),Ug(a,d.method,e,{}));delete b[c]}}Fh().set("requests",b,86400,!0)}}
;var Jh=[],Kh=!1;function Lh(a,b){Kh||(Jh.push({type:"EVENT",eventType:a,payload:b}),10<Jh.length&&Jh.shift())}
;function Mh(a){if(!a)throw Error();throw a;}
function Nh(a){return a}
function T(a){var b=this;this.h=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.h(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={S:0};f.S<a.length;f={S:f.S},++f.S)Oh(T.resolve(a[f.S]).then(function(g){return function(h){d[g.S]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Nh,e=null!==b&&void 0!==b?b:Mh;return new T(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Ph(c,c,d,f,g)}),c.onRejected.push(function(){Qh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ph(c,c,d,f,g):"REJECTED"===c.state.status&&Qh(c,c,e,f,g)})};
function Oh(a,b){a.then(void 0,b)}
function Ph(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?Rh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?Rh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?Rh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Sh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Th(a){return new Promise(function(b,c){Sh(a,b,c)})}
function U(a){return new T(function(b,c){Sh(a,b,c)})}
;function Uh(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function V(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(V,Error);var Vh={},Wh=(Vh.AUTH_INVALID="No user identifier specified.",Vh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Vh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Vh.MISSING_OBJECT_STORE="Object store not created.",Vh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Vh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Vh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Vh);
function Xh(a,b,c){b=void 0===b?{}:b;c=void 0===c?Wh[a]:c;V.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,Xh.prototype);Kh||(Jh.push({type:"ERROR",payload:this}),10<Jh.length&&Jh.shift())}
v(Xh,V);function Yh(a,b,c){Xh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,Yh.prototype)}
v(Yh,Xh);function Zh(a){Xh.call(this,"MISSING_OBJECT_STORE",{kk:a},Wh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Zh.prototype)}
v(Zh,Xh);function $h(a,b){this.f=a;this.options=b;this.transactionCount=0;this.i=Math.round(S());this.h=!1}
n=$h.prototype;n.add=function(a,b,c){return ai(this,[a],"readwrite",function(d){return bi(d,a).add(b,c)})};
n.clear=function(a){return ai(this,[a],"readwrite",function(b){return bi(b,a).clear()})};
n.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return ai(this,[a],"readonly",function(c){return bi(c,a).count(b)})};
n["delete"]=function(a,b){return ai(this,[a],"readwrite",function(c){return bi(c,a)["delete"](b)})};
n.get=function(a,b){return ai(this,[a],"readwrite",function(c){return bi(c,a).get(b)})};
function ai(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new ci(e);d=di(e,d);ei(a,d,b.join(),c);return d}
function ei(a,b,c,d){bc(a,function f(){var g,h,k=this,l,m,p;return za(f,function(q){if(1==q.f)return g=Math.round(S()),ra(q,2),x(q,b,4);if(2!=q.f)h=Math.round(S()),fi(k,!0,c,h-g),q.f=0,q.m=0;else{l=sa(q);m=Math.round(S());var r=l,w=k.f.name,B=k.transactionCount,E;"QuotaExceededError"===r.name?E=new Xh("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:w,mode:d}):"UnknownError"===r.name&&(E=new Xh("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:w,mode:d}));E&&Lh("QUOTA_EXCEEDED",{dbName:w,objectStoreNames:c,
transactionCount:B,transactionMode:d});p=m-g;l instanceof Yh&&(Lh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:p,transactionCount:k.transactionCount,dbDuration:m-k.i}),k.h=!0);fi(k,!1,c,p);q.f=0}})})}
function fi(a,b,c,d){Lh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.h,duration:d,isSuccessful:b})}
function gi(a){this.f=a}
n=gi.prototype;n.add=function(a,b){return U(this.f.add(a,b))};
n.clear=function(){return U(this.f.clear()).then(function(){})};
n.count=function(a){return U(this.f.count(a))};
function hi(a,b){return ii(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
n["delete"]=function(a){return a instanceof IDBKeyRange?hi(this,a):U(this.f["delete"](a))};
n.get=function(a){return U(this.f.get(a))};
n.index=function(a){return new ji(this.f.index(a))};
n.getName=function(){return this.f.name};
function ii(a,b,c){a=a.f.openCursor(b.query,b.direction);return ki(a).then(function(d){return Uh(d,c)})}
function ci(a){var b=this;this.f=a;this.h=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=Yh;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function di(a,b){var c=new Promise(function(d,e){Oh(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
ci.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new Xh("EXPLICIT_ABORT");};
ci.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function bi(a,b){var c=a.f.objectStore(b),d=a.h.get(c);d||(d=new gi(c),a.h.set(c,d));return d}
function ji(a){this.f=a}
ji.prototype.count=function(a){return U(this.f.count(a))};
ji.prototype["delete"]=function(a){return li(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
ji.prototype.get=function(a){return U(this.f.get(a))};
ji.prototype.getKey=function(a){return U(this.f.getKey(a))};
function li(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ki(a).then(function(d){return Uh(d,c)})}
function mi(a,b){this.request=a;this.cursor=b}
function ki(a){return U(a).then(function(b){return null===b?null:new mi(a,b)})}
n=mi.prototype;n.advance=function(a){this.cursor.advance(a);return ki(this.request)};
n["continue"]=function(a){this.cursor["continue"](a);return ki(this.request)};
n["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.getValue=function(){return this.cursor.value};
n.update=function(a){return U(this.cursor.update(a))};function ni(a,b,c){return bc(this,function e(){var f,g,h,k,l,m,p,q,r,w;return za(e,function(B){if(1==B.f)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.sb,m=g.upgrade,p=g.closed,r=function(){q||(q=new $h(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(E){if(null===E.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");E.dataLoss&&"none"!==E.dataLoss&&Lh("IDB_DATA_CORRUPTED",{reason:E.dataLossMessage||"unknown reason",dbName:a});var Fb=r(),ua=new ci(f.transaction);m&&m(Fb,E.oldVersion,E.newVersion,ua)}),h&&f.addEventListener("blocked",function(){h()}),x(B,Th(f),2);
w=B.l;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){Lh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return B["return"](r())})})}
function oi(a,b,c){c=void 0===c?{}:c;return ni(a,b,c)}
function pi(a,b){b=void 0===b?{}:b;return bc(this,function d(){var e,f,g;return za(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return x(h,Th(e),0)})})}
;var qi=uc||vc;function ri(a){var b=Lb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function si(a){this.name="YtIdbMeta";this.options=a;this.h=!1}
function ti(a,b,c){c=void 0===c?{}:c;return oi(a,b,c)}
si.prototype["delete"]=function(a){a=void 0===a?{}:a;return pi(this.name,a)};
si.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,sb:c,upgrade:this.options.upgrade},e=function(){return bc(a,function g(){var h=this,k,l,m;return za(g,function(p){switch(p.f){case 1:return ra(p,2),x(p,ti(h.name,h.options.version,d),4);case 4:k=p.l;if(!tc){p.N(5);break}a:{var q=u(Object.keys(h.options.bb));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.f.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.N(5);break}if(!tc||h.h){p.N(7);break}h.h=!0;return x(p,h["delete"](),8);case 8:return p["return"](e());case 7:throw new Zh(l);
case 5:return p["return"](k);case 2:m=sa(p);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return p["return"](ti(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.f=b=e()}return this.f};var ui=new si({bb:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function vi(a){return bc(this,function c(){var d;return za(c,function(e){if(1==e.f)return x(e,ui.open(),2);d=e.l;return e["return"](ai(d,["databases"],"readwrite",function(f){var g=bi(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.f.put(a,void 0)).then(function(){})})}))})})}
function wi(){return bc(this,function b(){var c;return za(b,function(d){if(1==d.f)return x(d,ui.open(),2);c=d.l;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new Be;var xi;
function yi(){return bc(this,function b(){var c,d,e;return za(b,function(f){switch(f.f){case 1:var g;if(g=qi)g=/WebKit\/([0-9]+)/.exec(Lb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Lb),g=!(g&&602<=parseInt(g[1],10)));if(g&&!Q("ytidb_allow_on_ios_safari_v8_and_v9")||fc)return f["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return f["return"](!1)}catch(h){return f["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return f["return"](!1);if(!Q("ytidb_new_supported_check_with_delete")){f.N(2);
break}ra(f,3);return x(f,wi(),5);case 5:return f["return"](!0);case 3:return sa(f),f["return"](!1);case 2:if(!Q("ytidb_new_supported_check_with_add_and_delete")){f.N(6);break}ra(f,7);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return x(f,vi(d),9);case 9:return x(f,wi(),10);case 10:return f["return"](!0);case 7:return sa(f),f["return"](!1);case 6:return ra(f,11,12),x(f,oi("yt-idb-test-do-not-use"),14);case 14:if(e=f.l,!e)return f["return"](!1);
case 12:f.u=[f.h];f.m=0;f.j=0;if(e)try{e.close()}catch(h){}g=f.u.splice(0)[0];(g=f.h=f.h||g)?g.za?f.f=f.m||f.j:void 0!=g.N&&f.j<g.N?(f.f=g.N,f.h=null):f.f=f.j:f.f=13;break;case 11:return sa(f),f["return"](!1);case 13:return f["return"](!0)}})})}
function zi(){if(void 0!==xi)return xi;var a=S();Kh=!0;return xi=yi().then(function(b){Kh=!1;Lh("IS_SUPPORTED_COMPLETED",{duration:Math.round(S()-a),isSupported:b});return b})}
;function Ai(){Be.call(this);this.l=!1;this.i=Bi();Ci(this);Di(this)}
v(Ai,Be);function Bi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Di(a){window.addEventListener("online",function(){a.i=!0;Ei(a)})}
function Ci(a){window.addEventListener("offline",function(){a.i=!1;Ei(a)})}
function Ei(a){a.l&&(Af(new V("NetworkStatusManager state did not match poll",S()-0)),a.l=!1)}
;function Fi(a,b){b=void 0===b?{}:b;zi().then(function(){Ai.f||(Ai.f=new Ai);Ai.f.i!==Bi()&&Af(new V("NetworkStatusManager isOnline does not match window status"));th(a,b)})}
function Gi(a,b){b=void 0===b?{}:b;zi().then(function(){th(a,b)})}
;function Hi(a){var b=this;this.G=null;a?this.G=a:Ah()&&(this.G=Rg());fg(function(){Ih(b)},0,5E3)}
Hi.prototype.isReady=function(){!this.G&&Ah()&&(this.G=Rg());return!!this.G};
function Ug(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Af(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new V("innertube xhrclient not ready",b,c,d);zf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",F:c,Fa:"JSON",Z:function(){d.Z()},
Ea:d.Z,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
Da:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
lk:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.G.Xa)&&(g=e);var h=a.G.Za||!1,k=Bh(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.G.innertubeApiVersion+"/"+b;var l={alt:"json"};a.G.Ya&&f.headers.Authorization||(l.key=a.G.innertubeApiKey);var m=dh(""+g+e,l||{},!0);zi().then(function(p){if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(Q("networkless_gel")&&!p||!Q("networkless_gel"))var q=Gh(b,
c,k,h);if(q){var r=f.onSuccess,w=f.Da;f.onSuccess=function(B,E){Hh(q);r(B,E)};
c.Da=function(B,E){Hh(q);w(B,E)}}}try{Q("use_fetch_for_op_xhr")?qh(m,f):Q("networkless_gel")&&d.retry?(f.method="POST",!d.ub&&Q("nwl_send_fast_on_unload")?Gi(m,f):Fi(m,f)):(f.method="POST",f.F||(f.F={}),th(m,f))}catch(B){if("InvalidAccessError"==B.name)q&&(Hh(q),q=0),Af(Error("An extension is blocking network request."));
else throw B;}q&&fg(function(){Ih(a)},0,5E3)})}
;function Ii(a,b,c){c=void 0===c?{}:c;var d=Hi;P("ytLoggingEventsDefaultDisabled",!1)&&Hi==Hi&&(d=null);Wg(a,b,d,c)}
;var Ji=[{Ba:function(a){return"Cannot read property '"+a.key+"'"},
ta:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Ba:function(a){return"Cannot call '"+a.key+"'"},
ta:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function Ki(){this.f=[];this.h=[]}
var Li;var Mi=new N;function Ni(a,b,c,d){c+="."+a;a=Oi(b);d[c]=a;return c.length+a.length}
function Oi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Pi=new Set,Qi=0,Ri=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Si(a){Ti(a,"WARNING")}
function Ti(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;var g=void 0===g?!1:g;if(a&&(Q("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),
(window&&window.yterr||g)&&!(5<=Qi)&&0!==a.sampleWeight)){f=zc(a);g=f.message||"Unknown Error";d=f.name||"UnknownError";var h=f.stack||a.f||"Not available";Q("kevlar_js_fixes")&&h.startsWith(d+": "+g)&&(e=h.split("\n"),e.shift(),h=e.join("\n"));e=f.lineNumber||"Not available";f=f.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],p="params."+l;k+=p.length;if(m)if(Array.isArray(m))for(var q=c,r=0;r<m.length&&!(m[r]&&(k+=
Ni(r,m[r],p,q),500<k));r++);else if("object"===typeof m)for(q in q=void 0,r=c,m){if(m[q]&&(k+=Ni(q,m[q],p,r),500<k))break}else c[p]=Oi(m),k+=c[p].length;else c[p]=Oi(m),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in p=0,m){if(m[l]&&(k="params."+l,q=Oi(m[l]),c[k]=q,p+=k.length+q.length,500<p))break}else c.params=Oi(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);c={message:g,name:d,lineNumber:e,
fileName:f,stack:h,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(Ji);for(g=a.next();!g.done;g=a.next())if(g=g.value,g.ta[c.name])for(e=u(g.ta[c.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=c.message.match(f.regexp)){c.params["error.original"]=d[0];e=f.groups;f={};for(h=0;h<e.length;h++)f[e[h]]=d[h+1],c.params["error."+e[h]]=d[h+1];c.message=g.Ba(f);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(Pi.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||
0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?Mi.R("handleError",c):"WARNING"===b&&Mi.R("handleWarning",c);if(Q("kevlar_gel_error_routing")){a=b;a:{g=u(Ri);for(d=g.next();!d.done;d=g.next())if(ri(d.value.toLowerCase())){g=!0;break a}g=!1}if(!g){d={stackTrace:c.stack};c.fileName&&(d.filename=c.fileName);g=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==g.length&&(1!==g.length||isNaN(Number(g[0]))?2!==g.length||isNaN(Number(g[0]))||isNaN(Number(g[1]))||(d.lineNumber=Number(g[0]),d.columnNumber=
Number(g[1])):d.lineNumber=Number(g[0]));Li||(Li=new Ki);g=Li;e=c.message;f=c.name;a:{h=u(g.h);for(l=h.next();!l.done;l=h.next())if(l=l.value,c.message&&c.message.match(l.f)){h=l.weight;break a}h=u(g.f);for(l=h.next();!l.done;l=h.next())if(l=l.value,l.La(c)){h=l.weight;break a}h=1}e={level:"ERROR_LEVEL_UNKNOWN",message:e,errorClassName:f,sampleWeight:h};"ERROR"===a?e.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(e.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:d};d={pageUrl:window.location.href};
P("FEXP_EXPERIMENTS")&&(d.experimentIds=P("FEXP_EXPERIMENTS"));d.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+g.h.length+"&cb="+g.f.length},{key:"client.params.serviceWorker",value:"false"}];if(g=c.params)for(f=u(Object.keys(g)),h=f.next();!h.done;h=f.next())h=h.value,d.kvPairs.push({key:"client."+h,value:String(g[h])});g=P("SERVER_NAME",void 0);f=P("SERVER_VERSION",void 0);g&&f&&(d.kvPairs.push({key:"server.name",value:g}),d.kvPairs.push({key:"server.version",value:f}));Ii("clientError",
{errorMetadata:d,stackTrace:a,logMessage:e});Ng()}}if(!Q("suppress_error_204_logging")){a=c.params||{};b={tb:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},F:{url:P("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.F){c.stack&&(b.F.stack=c.stack);g=u(Object.keys(a));for(d=g.next();!d.done;d=g.next())d=d.value,b.F["client."+d]=a[d];if(a=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0))for(g=u(Object.keys(a)),d=g.next();!d.done;d=g.next())d=d.value,b.F[d]=a[d];a=P("SERVER_NAME",void 0);g=P("SERVER_VERSION",void 0);a&&g&&(b.F["server.name"]=a,b.F["server.version"]=g)}th(P("ECATCHER_REPORT_HOST","")+"/error_204",b)}Pi.add(c.message);Qi++}}}
function Ui(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:fa(u(c)))}
;function Vi(){this.h=!1;this.f=null}
Vi.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.h=!0,Xf(b,function(){g.h=!1;window.botguard?Wi(g,c,d,f):(bg(b),Si(new V("Unable to load Botguard","from "+b)))},e)):a&&(e=Mc(document,"SCRIPT"),e.textContent=a,e.nonce=Da(),document.head.appendChild(e),document.head.removeChild(e),window.botguard?Wi(this,c,d,f):Si(Error("Unable to load Botguard from JS")))};
function Wi(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:Ha)}catch(e){Si(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Si(e)}c&&c(b)}}
Vi.prototype.dispose=function(){this.f=null};var Xi=new Vi;function Yi(){return!!Xi.f}
function Zi(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Xi.f?Xi.f.invoke(void 0,void 0,a):null}
;var $i=G().toString();
function aj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=G();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if($i)for(a=1,b=0;b<$i.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^$i.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var bj=z.ytLoggingDocDocumentNonce_||aj();A("ytLoggingDocDocumentNonce_",bj,void 0);var cj=1;function dj(a){this.f=a}
function ej(a){return new dj({trackingParams:a})}
function fj(a){var b=cj++;return new dj({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0})}
dj.prototype.getAsJson=function(){var a={};void 0!==this.f.trackingParams?a.trackingParams=this.f.trackingParams:(a.veType=this.f.veType,void 0!==this.f.veCounter&&(a.veCounter=this.f.veCounter),void 0!==this.f.elementIndex&&(a.elementIndex=this.f.elementIndex));void 0!==this.f.dataElement&&(a.dataElement=this.f.dataElement.getAsJson());void 0!==this.f.youtubeData&&(a.youtubeData=this.f.youtubeData);return a};
dj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
dj.prototype.isClientVe=function(){return!this.f.trackingParams&&!!this.f.veType};function gj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function hj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ij(a){return P(hj(void 0===a?0:a),void 0)}
A("yt_logging_screen.getRootVeType",ij,void 0);function jj(a){return(a=ij(void 0===a?0:a))?new dj({veType:a,youtubeData:void 0}):null}
function kj(){var a=P("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=P(gj(a));if(!b&&!P("USE_CSN_FALLBACK",!0))return null;b||0!=a||(Q("kevlar_client_side_screens")||Q("c3_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
A("yt_logging_screen.getCurrentCsn",W,void 0);function lj(a,b,c){var d=kj();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function mj(a){return kj()[a]}
A("yt_logging_screen.getCttAuthInfo",mj,void 0);function nj(a,b,c,d){c=void 0===c?0:c;if(a!==P(gj(c))||b!==P(hj(c)))if(lj(a,d,c),O(gj(c),a),O(hj(c),b),0==c||Q("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Wg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:bj,clientScreenNonce:a},Hi)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
A("yt_logging_screen.setCurrentScreen",nj,void 0);function oj(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Xb(window.location.href);g&&f.push(g);g=Xb(d);if(0<=Wa(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Rb(f,d),d=f.href),d){g=d.match(Vb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Ub(d).toString(36),e=e?Zb(e):"",Df(b,e,k||5))}else k=b,e="ST-"+Ub(d).toString(36),k=k?Zb(k):"",Df(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=$b(a,l)+m;a=a instanceof J?a:Jb(a);c.href=Eb(a)}return!0}
;function pj(a,b){this.version=a;this.args=b}
;function qj(a,b){this.topic=a;this.f=b}
qj.prototype.toString=function(){return this.topic};var rj=C("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.Y;N.prototype.publish=N.prototype.R;N.prototype.clear=N.prototype.clear;A("ytPubsub2Pubsub2Instance",rj,void 0);var sj=C("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",sj,void 0);var tj=C("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",tj,void 0);var uj=C("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",uj,void 0);
A("ytPubsub2Pubsub2SkipSubKey",null,void 0);function vj(a,b){var c=wj();c&&c.publish.call(c,a.toString(),a,b)}
function xj(a,b,c){var d=wj();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=C("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(sj[e])try{if(g&&a instanceof qj&&a!=f)try{var k=a.f,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.P){var m=new k;k.P=m.version}var p=k.P}catch(q){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,bb(l.args))}catch(q){throw q.message=
"yt.pubsub2.Data.deserialize(): "+q.message,q;}}catch(q){throw q.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+q.message,q;}b.call(c||window,g)}catch(q){zf(q)}},uj[a.toString()]?C("yt.scheduler.instance")?eg(h):R(h,0):h())});
sj[e]=!0;tj[a.toString()]||(tj[a.toString()]=[]);tj[a.toString()].push(e);return e}
function yj(){var a=zj,b=xj(Aj,function(c){a.apply(void 0,arguments);Bj(b)},void 0);
return b}
function Bj(a){var b=wj();b&&("number"===typeof a&&(a=[a]),I(a,function(c){b.unsubscribeByKey(c);delete sj[c]}))}
function wj(){return C("ytPubsub2Pubsub2Instance")}
;function Cj(a){pj.call(this,1,arguments);this.csn=a}
v(Cj,pj);var Aj=new qj("screen-created",Cj),Dj=[],Fj=Ej,Gj=0;function Hj(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:Ya(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(hb(e)||!e.trackingParams&&!e.veType)&&Si(Error("Child VE logged with no data"));d={M:mj(b),O:b};"UNDEFINED_CSN"==b?Ij("visualElementAttached",c,d):a?Wg("visualElementAttached",c,a,d):Ii("visualElementAttached",c,d)}
function Jj(a,b){var c=Q("use_default_events_client")?void 0:Hi,d={csn:a,ve:b.getAsJson(),eventType:1},e={M:mj(a),O:a};"UNDEFINED_CSN"==a?Ij("visualElementShown",d,e):c?Wg("visualElementShown",d,c,e):Ii("visualElementShown",d,e)}
function Kj(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={M:mj(b),O:b};"UNDEFINED_CSN"==b?Ij("visualElementGestured",c,d):a?Wg("visualElementGestured",c,a,d):Ii("visualElementGestured",c,d)}
function Ej(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return yc(b)}
function Ij(a,b,c){Dj.push({payloadName:a,payload:b,options:c});Gj||(Gj=yj())}
function zj(a){if(Dj){for(var b=u(Dj),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Wg(c.payloadName,c.payload,null,c.options));Dj.length=0}Gj=0}
;function Lj(a,b,c){Hj(Q("use_default_events_client")?void 0:Hi,a,b,[c])}
;var Mj={ac:29434,dc:3611,Ae:3854,Qf:42993,vi:4724,bj:96370,vb:27686,wb:85013,xb:23462,zb:42016,Ab:62407,Bb:26926,yb:43781,Cb:51236,Db:79148,Eb:50160,Fb:77504,Rb:87907,Sb:18630,Tb:54445,Ub:80935,Vb:105675,Wb:37521,Xb:47786,Yb:98349,Zb:6827,cc:7282,fc:32276,ec:76278,hc:93911,ic:106531,jc:27259,kc:27262,lc:27263,mc:21759,nc:27107,oc:62936,pc:49568,qc:38408,sc:80637,tc:68727,uc:68728,wc:80353,xc:80356,yc:74610,zc:45707,Ac:83962,Bc:83970,Cc:46713,Dc:89711,Ec:74612,Fc:93265,Gc:74611,Ic:113533,Jc:93252,
Kc:99357,Mc:94521,Nc:114252,Oc:113532,Pc:94522,Lc:94583,Qc:88E3,Rc:93253,Sc:93254,Tc:94387,Uc:94388,Vc:93255,Wc:97424,Hc:72502,Xc:110111,Yc:76019,Zc:89431,bd:110466,cd:77240,dd:60508,ed:105350,fd:73393,gd:113534,hd:92098,jd:84517,kd:83759,ld:80357,md:86113,nd:72598,od:72733,pd:107349,qd:97615,rd:31402,sd:84774,td:95117,ud:98930,vd:98931,wd:98932,xd:43347,yd:45474,zd:100352,Ad:84758,Bd:98443,Cd:74613,Dd:74614,Ed:64502,Fd:74615,Gd:74616,Hd:74617,Id:77820,Jd:74618,Kd:93278,Ld:93274,Md:93275,Nd:93276,
Od:22110,Pd:29433,Qd:82047,Rd:113550,Sd:75836,Td:75837,Ud:42352,Vd:84512,Wd:76065,Xd:75989,Yd:16623,Zd:32594,ae:27240,be:32633,ce:74858,ee:3945,de:16989,ge:45520,he:25488,ie:25492,je:25494,ke:55760,le:14057,me:18451,ne:57204,oe:57203,pe:17897,qe:57205,re:18198,se:17898,te:17909,ue:43980,we:46220,xe:11721,ye:49954,ze:96369,Be:56251,Ce:25624,De:16906,Ee:99999,Fe:68172,Ge:27068,He:47973,Ie:72773,Je:26970,Ke:26971,Le:96805,Me:17752,Ne:73233,Oe:109512,Pe:22256,Qe:14115,Re:22696,Se:89278,Te:89277,Ue:109513,
Ve:43278,We:43459,Xe:43464,Ye:89279,Ze:43717,af:55764,bf:22255,cf:89281,df:40963,ef:43277,ff:43442,gf:91824,hf:96367,jf:36850,kf:72694,lf:37414,mf:36851,nf:73491,pf:54473,qf:43375,rf:46674,sf:32473,tf:72901,uf:72906,vf:50947,wf:50612,xf:50613,yf:50942,zf:84938,Af:84943,Bf:84939,Cf:84941,Df:84944,Ef:84940,Ff:84942,Gf:35585,Hf:51926,If:79983,Jf:63238,Kf:18921,Lf:63241,Mf:57893,Nf:41182,Of:33424,Pf:22207,Rf:36229,Sf:22206,Tf:22205,Uf:18993,Vf:19001,Wf:18990,Xf:18991,Yf:18997,Zf:18725,ag:19003,cg:36874,
dg:44763,eg:33427,fg:67793,gg:22182,hg:37091,jg:34650,kg:50617,lg:47261,mg:22287,ng:25144,og:97917,pg:62397,qg:36961,rg:108035,sg:27426,tg:27857,ug:27846,vg:27854,wg:69692,xg:61411,yg:39299,zg:38696,Ag:62520,Bg:36382,Cg:108701,Dg:50663,Eg:36387,Fg:14908,Gg:37533,Hg:105443,Ig:61635,Jg:62274,Kg:65702,Lg:65703,Mg:65701,Ng:76256,Og:37671,Pg:49953,Qg:36216,Rg:28237,Sg:39553,Tg:29222,Ug:26107,Vg:38050,Wg:26108,Xg:26109,Yg:26110,Zg:66881,ah:28236,bh:14586,dh:57929,eh:74723,fh:44098,gh:44099,hh:23528,ih:61699,
jh:59149,kh:101951,lh:97346,mh:95102,nh:64882,oh:63595,ph:63349,qh:95101,rh:75240,sh:27039,uh:68823,vh:21537,wh:83464,xh:75707,yh:83113,zh:101952,Ah:101953,Bh:79610,Ch:24402,Dh:24400,Eh:32925,Fh:57173,Gh:64423,Hh:64424,Ih:33986,Jh:100828,Kh:21409,Lh:11070,Mh:11074,Nh:17880,Oh:14001,Qh:30709,Rh:30707,Sh:30711,Th:30710,Uh:30708,Ph:26984,Vh:63648,Wh:63649,Xh:51879,Yh:111059,Zh:5754,ai:20445,bi:110386,ci:113746,di:66557,fi:17310,gi:28631,hi:21589,ii:68012,ji:60480,ki:31571,li:76980,mi:41577,ni:45469,
oi:38669,ri:13768,si:13777,ti:62985,wi:59369,xi:43927,yi:43928,zi:12924,Ai:100355,Ci:56219,Di:27669,Ei:10337,Bi:47896,Fi:107598,Gi:96639,Hi:107536,Ii:96661,Ji:96658,Ki:96660,Li:104443,Mi:96659,Ni:106442,Oi:63667,Pi:63668,Qi:63669,Ri:78314,Si:55761,Ti:96368,Ui:67374,Vi:48992,Wi:49956,Xi:31961,Yi:26388,Zi:23811,aj:5E4,cj:47355,dj:47356,ej:37935,fj:45521,gj:21760,hj:83769,ij:49977,jj:49974,kj:93497,lj:93498,mj:34325,nj:100081,oj:35309,pj:68314,qj:25602,rj:100339,sj:59018,tj:18248,uj:50625,vj:9729,wj:37168,
xj:37169,yj:21667,zj:16749,Aj:18635,Bj:39305,Cj:18046,Dj:53969,Ej:8213,Fj:93926,Gj:102852,Hj:110099,Ij:22678,Jj:69076,Kj:100856,Lj:17736,Mj:3832,Nj:55759,Oj:64031,Pj:93044,Qj:93045,Rj:34388,Sj:17657,Tj:17655,Uj:39579,Vj:39578,Wj:77448,Xj:8196,Yj:11357,Zj:69877,ak:8197,bk:82039};function Nj(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||kb(b);this.assets=a.assets||{};this.attrs=a.attrs||kb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Nj.prototype.clone=function(){var a=new Nj,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ja(c)?a[b]=kb(c):a[b]=c}return a};function Oj(){M.call(this);this.f=[]}
v(Oj,M);Oj.prototype.A=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.La)}M.prototype.A.call(this)};var Pj=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Qj(a){a=a||"";if(window.spf){var b=a.match(Pj);spf.style.load(a,b?b[1]:"",void 0)}else Rj(a)}
function Rj(a){var b=Sj(a),c=document.getElementById(b),d=c&&If(c,"loaded");d||c&&!d||(c=Tj(a,b,function(){If(c,"loaded")||(Gf(c),Sf(b),R(Qa(Tf,b),0))}))}
function Tj(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=$c(a);d.rel="stylesheet";d.href=sb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Sj(a){var b=Mc(document,"A");Rb(b,new J(a,Db));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ub(a)}
;function Uj(a,b,c,d){M.call(this);var e=this;this.o=this.ea=a;this.I=b;this.u=!1;this.api={};this.ca=this.H=null;this.J=new N;Uc(this,Qa(Vc,this.J));this.l={};this.U=this.da=this.j=this.la=this.f=null;this.T=!1;this.m=this.C=null;this.fa={};this.Ia=["onReady"];this.ka=null;this.ua=NaN;this.aa={};this.i=d;Vj(this);this.ga("WATCH_LATER_VIDEO_ADDED",this.cb.bind(this));this.ga("WATCH_LATER_VIDEO_REMOVED",this.eb.bind(this));this.ga("onAdAnnounce",this.Ka.bind(this));this.Ja=new Oj(this);Uc(this,Qa(Vc,
this.Ja));this.ba=0;c?this.ba=R(function(){e.loadNewVideoConfig(c)},0):d&&(Wj(this),Xj(this))}
v(Uj,M);n=Uj.prototype;n.getId=function(){return this.I};
n.loadNewVideoConfig=function(a){if(!this.h){this.ba&&(Kf(this.ba),this.ba=0);a instanceof Nj||(a=new Nj(a));this.la=a;this.f=a.clone();Wj(this);this.da||(this.da=Yj(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.o.style.width=bd(Number(a)||String(a));if(a=this.f.attrs.height)this.o.style.height=bd(Number(a)||String(a));Xj(this);this.u&&Zj(this)}};
function Wj(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.j=b||a.j;"video-player"==a.j&&(a.j=a.I,a.i?a.i.rootElementId=a.I:a.f.attrs.id=a.I);a.o.id==a.j&&(a.j+="-player",a.i?a.i.rootElementId=a.j:a.f.attrs.id=a.j)}
n.Pa=function(){return this.la};
function Zj(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function ak(a){var b=!0,c=bk(a);c&&a.f&&(a=ck(a),b=If(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Xj(a){if(!a.h&&!a.T){var b=ak(a);if(b&&"html5"==(bk(a)?"html5":null))a.U="html5",a.u||dk(a);else if(ek(a),a.U="html5",b&&a.m)a.ea.appendChild(a.m),dk(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.C=function(){c=!0;var d=fk(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.ea,e,a.i);dk(a)};
a.T=!0;b?a.C():(Xf(ck(a),a.C),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Qj(b),gk(a)&&!c&&A("yt.player.Application.create",null,void 0))}}}
function bk(a){var b=Ic(a.j);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.j));return b}
function dk(a){if(!a.h){var b=bk(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.T=!1,!fk(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||hk(a)):a.ua=R(function(){dk(a)},50)}}
function hk(a){Vj(a);a.u=!0;var b=bk(a);b.addEventListener&&(a.H=ik(a,b,"addEventListener"));b.removeEventListener&&(a.ca=ik(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=ik(a,b,e))}for(var f in a.l)a.H(f,a.l[f]);Zj(a);a.da&&a.da(a.api);a.J.R("onReady",a.api)}
function ik(a,b,c){var d=b[c];return function(){try{return a.ka=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ka=e,Af(e))}}}
function Vj(a){a.u=!1;if(a.ca)for(var b in a.l)a.ca(b,a.l[b]);for(var c in a.aa)Kf(parseInt(c,10));a.aa={};a.H=null;a.ca=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.ga.bind(a);a.api.removeEventListener=a.jb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Qa.bind(a);a.api.getPlayerType=a.Ra.bind(a);a.api.getCurrentVideoConfig=a.Pa.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.ab.bind(a)}
n.ab=function(){return this.u};
n.ga=function(a,b){var c=this,d=Yj(this,b);if(d){if(!(0<=Wa(this.Ia,a)||this.l[a])){var e=jk(this,a);this.H&&this.H(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.u&&R(function(){d(c.api)},0)}};
n.jb=function(a,b){if(!this.h){var c=Yj(this,b);c&&bf(this.J,a,c)}};
function Yj(a,b){var c=b;if("string"==typeof b){if(a.fa[b])return a.fa[b];c=function(){var d=C(b);d&&d.apply(z,arguments)};
a.fa[b]=c}return c?c:null}
function jk(a,b){var c="ytPlayer"+b+a.I;a.l[b]=c;z[c]=function(d){var e=R(function(){if(!a.h){a.J.R(b,d);var f=a.aa,g=String(e);g in f&&delete f[g]}},0);
ib(a.aa,String(e))};
return c}
n.Ka=function(a){Sf("a11y-announce",a)};
n.cb=function(a){Sf("WATCH_LATER_VIDEO_ADDED",a)};
n.eb=function(a){Sf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Ra=function(){return this.U||(bk(this)?"html5":null)};
n.Qa=function(){return this.ka};
function ek(a){a.cancel();Vj(a);a.U=null;a.f&&(a.f.loaded=!1);var b=bk(a);b&&(ak(a)||!gk(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));for(a=a.ea;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){if(this.C){var a=ck(this);cg(a,this.C)}Kf(this.ua);this.T=!1};
n.A=function(){ek(this);if(this.m&&this.f&&this.m.destroy)try{this.m.destroy()}catch(b){zf(b)}this.fa=null;for(var a in this.l)z[this.l[a]]=null;this.la=this.f=this.api=null;delete this.ea;delete this.o;M.prototype.A.call(this)};
function gk(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function ck(a){return a.i?a.i.jsUrl:a.f.assets.js}
function fk(a,b){if(a.i)var c=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(c=a.f.args.fflags);return"true"==ah(c||"")[b]}
;var kk={},lk="player_uid_"+(1E9*Math.random()>>>0);
function mk(a,b,c){var d="player";c=void 0===c?!0:c;var e;"string"===typeof d?e=Ic(d):e=d;d=e;e=lk+"_"+La(d);var f=kk[e];if(f&&c)return(b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true"))?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Uj(d,e,a,b);kk[e]=f;Sf("player-added",f.api);Uc(f,Qa(nk,f));return f.api}
function nk(a){delete kk[a.getId()]}
;function ok(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function pk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return qk(a)}
function qk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function rk(a,b,c,d){if(D(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function sk(a){a=void 0===a?!1:a;M.call(this);this.f=new N(a);Uc(this,Qa(Vc,this.f))}
H(sk,M);sk.prototype.subscribe=function(a,b,c){return this.h?0:this.f.subscribe(a,b,c)};
sk.prototype.l=function(a,b){this.h||this.f.R.apply(this.f,arguments)};function tk(a,b,c){sk.call(this);this.i=a;this.j=b;this.m=c}
v(tk,sk);function uk(a,b,c){if(!a.h){var d=a.i;d.h||a.j!=d.f||(a={id:a.m,command:b},c&&(a.data=c),d.f.postMessage(De(a),d.j))}}
tk.prototype.A=function(){this.j=this.i=null;sk.prototype.A.call(this)};function vk(a){M.call(this);this.f=a;this.f.subscribe("command",this.Ga,this);this.i={};this.l=!1}
v(vk,M);n=vk.prototype;n.start=function(){this.l||this.h||(this.l=!0,uk(this.f,"RECEIVING"))};
n.Ga=function(a,b,c){if(this.l&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.i||(c=F(this.lb,this,a),this.i[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&wk(this,d.event);break;default:this.j.isReady()&&this.j.isExternalMethodAvailable(a,c||null)&&(b=xk(a,b||{}),c=this.j.handleExternalCall(a,b,c||null),(c=yk(a,c))&&this.l&&!this.h&&uk(this.f,a,c))}}};
n.lb=function(a,b){this.l&&!this.h&&uk(this.f,a,this.na(a,b))};
n.na=function(a,b){if(null!=b)return{value:b}};
function wk(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
n.A=function(){var a=this.f;a.h||bf(a.f,"command",this.Ga,this);this.f=null;for(var b in this.i)wk(this,b);M.prototype.A.call(this)};function zk(a,b){vk.call(this,b);this.j=a;this.start()}
v(zk,vk);zk.prototype.addEventListener=function(a,b){this.j.addEventListener(a,b)};
zk.prototype.removeEventListener=function(a,b){this.j.removeEventListener(a,b)};
function xk(a,b){switch(a){case "loadVideoById":return b=qk(b),[b];case "cueVideoById":return b=qk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=rk(b),[b];case "cuePlaylist":return b=rk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function yk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
zk.prototype.na=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return vk.prototype.na.call(this,a,b)};
zk.prototype.A=function(){vk.prototype.A.call(this);delete this.j};function Ak(a,b,c){M.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.u="*";this.j=c;this.sessionId=null;this.channel="widget";this.C=!!a;this.o=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.C&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.u=e.origin);d.i=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.l&&(!d.m||0<=Wa(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.f=this.l=null;window.addEventListener("message",this.o)}
v(Ak,M);Ak.prototype.sendMessage=function(a,b){var c=b||this.i;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.u)}catch(e){Af(e)}}};
Ak.prototype.A=function(){window.removeEventListener("message",this.o);M.prototype.A.call(this)};function Bk(){var a=this.h=new Ak(!!P("WIDGET_ID_ENFORCE")),b=F(this.ib,this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a;this.j=[];this.m=!1;this.l={}}
n=Bk.prototype;n.ib=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.l[a]||"onReady"==a||(this.addEventListener(a,Ck(this,a)),this.l[a]=!0)):this.Ca(a,b,c)};
n.Ca=function(){};
function Ck(a,b){return F(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Oa=function(){this.m=!0;this.sendMessage("initialDelivery",this.oa());this.sendMessage("onReady");I(this.j,this.Ha,this);this.j=[]};
n.oa=function(){return null};
function Dk(a,b){a.sendMessage("infoDelivery",b)}
n.Ha=function(a){this.m?this.h.sendMessage(a):this.j.push(a)};
n.sendMessage=function(a,b){this.Ha({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.h=null};function Ek(a){Bk.call(this);this.f=a;this.i=[];this.addEventListener("onReady",F(this.fb,this));this.addEventListener("onVideoProgress",F(this.pb,this));this.addEventListener("onVolumeChange",F(this.qb,this));this.addEventListener("onApiChange",F(this.kb,this));this.addEventListener("onPlaybackQualityChange",F(this.mb,this));this.addEventListener("onPlaybackRateChange",F(this.nb,this));this.addEventListener("onStateChange",F(this.ob,this));this.addEventListener("onWebglSettingsChanged",F(this.rb,
this))}
v(Ek,Bk);n=Ek.prototype;n.Ca=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ok(a)){var d=b;if(D(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=qk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=pk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=rk.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);ok(a)&&Dk(this,this.oa())}};
n.fb=function(){var a=F(this.Oa,this);this.h.f=a};
n.addEventListener=function(a,b){this.i.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.oa=function(){if(!this.f)return null;var a=this.f.getApiInterface();ab(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=G()/1E3;return b};
n.ob=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:G()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Dk(this,a)};
n.mb=function(a){Dk(this,{playbackQuality:a})};
n.nb=function(a){Dk(this,{playbackRate:a})};
n.kb=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.qb=function(){Dk(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.pb=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:G()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Dk(this,a)};
n.rb=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Dk(this,a)};
n.dispose=function(){Bk.prototype.dispose.call(this);for(var a=0;a<this.i.length;a++){var b=this.i[a];this.f.removeEventListener(b.eventType,b.listener)}this.i=[]};function Fk(a,b,c){M.call(this);this.f=a;this.j=c;this.l=sg(window,"message",F(this.m,this));this.i=new tk(this,a,b);Uc(this,Qa(Vc,this.i))}
v(Fk,M);Fk.prototype.m=function(a){var b;if(b=!this.h)if(b=a.origin==this.j)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.i,c.h||c.l("command",b.command,b.data,a.origin))}};
Fk.prototype.A=function(){tg(this.l);this.f=null;M.prototype.A.call(this)};function Gk(){var a=kb(Hk),b;return Re(new Ke(function(c,d){a.onSuccess=function(e){kh(e)?c(e):d(new Ik("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ik("Unknown request error","net.unknown",e))};
a.Z=function(e){d(new Ik("Request timed out","net.timeout",e))};
b=th("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Se&&b.abort();
return Pe(c)})}
function Ik(a,b,c){Ta.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Ik,Ta);function Jk(){this.h=0;this.f=null}
Jk.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.f),Je(a)?a:Kk(a)):2===this.h&&b?(a=b.call(c,this.f),Je(a)?a:Lk(a)):this};
Jk.prototype.getValue=function(){return this.f};
Jk.prototype.$goog_Thenable=!0;function Lk(a){var b=new Jk;a=void 0===a?null:a;b.h=2;b.f=void 0===a?null:a;return b}
function Kk(a){var b=new Jk;a=void 0===a?null:a;b.h=1;b.f=void 0===a?null:a;return b}
;function Mk(a){Ta.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Nk;this.isTimeout=a instanceof Ik&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Se}
v(Mk,Ta);Mk.prototype.name="BiscottiError";function Nk(){Ta.call(this,"Biscotti ID is missing from server")}
v(Nk,Ta);Nk.prototype.name="BiscottiMissingError";var Hk={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ok=null;
function Yg(){if(Q("disable_biscotti_fetch_on_html5_clients"))return Pe(Error("Fetching biscotti ID is disabled."));if(Q("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!Ec.get("CONSENT","").startsWith("YES+"))return Pe(Error("User has not consented - not fetching biscotti id."));if("1"===eb(vf(),"args","privembed"))return Pe(Error("Biscotti ID is not available in private embed mode"));Ok||(Ok=Re(Gk().then(Pk),function(a){return Qk(2,a)}));
return Ok}
function Pk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Nk;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Nk;a=a.id;Zg(a);Ok=Kk(a);Rk(18E5,2);return a}
function Qk(a,b){var c=new Mk(b);Zg("");Ok=Lk(c);0<a&&Rk(12E4,a-1);throw c;}
function Rk(a,b){R(function(){Re(Gk().then(Pk,function(c){return Qk(b,c)}),Ha)},a)}
function Sk(){try{var a=C("yt.ads.biscotti.getId_");return a?a():Yg()}catch(b){return Pe(b)}}
;function Tk(a){if("1"!==eb(vf(),"args","privembed")){a&&Xg();try{Sk().then(function(){},function(){}),R(Tk,18E5)}catch(b){zf(b)}}}
;var X=C("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",X,void 0);function Uk(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=Ec.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
n=Uk.prototype;n.get=function(a,b){Vk(a);Wk(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Vk(a);Wk(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
n.remove=function(a){Vk(a);Wk(a);delete X[a]};
n.save=function(){Df(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in X)delete X[a]};
n.dump=function(){var a=[],b;for(b in X)a.push(b+"="+encodeURIComponent(String(X[b])));return a.join("&")};
function Wk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Vk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Xk(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ia(Uk);function Yk(){this.h=new Set;this.f=new Set;this.i=new Map}
Yk.prototype.clear=function(){this.h.clear();this.f.clear();this.i.clear()};
Ia(Yk);var Zk={},$k=(Zk[0]=[],Zk[1]=[],Zk);function al(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!bl(a)||c.some(function(e){return!bl(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())cl(a,d.value);return a}
function cl(a,b){for(var c in b)if(bl(b[c])){if(c in a&&!bl(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});cl(a[c],b[c])}else if(dl(b[c])){if(c in a&&!dl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);el(a[c],b[c])}else a[c]=b[c];return a}
function el(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,bl(d)?a.push(cl({},d)):dl(d)?a.push(el([],d)):a.push(d);return a}
function bl(a){return"object"===typeof a&&!Array.isArray(a)}
function dl(a){return"object"===typeof a&&Array.isArray(a)}
;var fl={},gl=0;
function hl(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!ri("cobalt")){if(a){a instanceof J||(a="object"==typeof a&&a.W?a.V():String(a),Ib.test(a)?a=new J(a,Db):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Hb))&&Gb.test(b[1])?new J(a,Db):null));a=Eb(a||Kb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Ob)){b="object"==typeof a;var f=null;b&&a.qa&&(f=a.ma());a=Qb(ub(b&&a.W?a.V():String(a)),f)}a instanceof Ob&&a.constructor===Ob?a=a.f:(Ja(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(De(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Lc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)uh(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)uh(a,b,"GET","",d);else{b:{try{var g=new Ua({url:a});if(g.i&&g.h||g.j){var h=Wb(a.match(Vb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(ac);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(B){}f=!1}f?il(a)?(b&&b(),f=!0):f=!1:f=!1;f||jl(a,b)}}
function il(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function jl(a,b){var c=new Image,d=""+gl++;fl[d]=c;c.onload=c.onerror=function(){b&&fl[d]&&b();delete fl[d]};
c.src=a}
;function kl(a,b){pj.call(this,1,arguments)}
v(kl,pj);function ll(a,b){pj.call(this,1,arguments)}
v(ll,pj);var ml=new qj("aft-recorded",kl),nl=new qj("timing-sent",ll);var ol=window;function pl(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var ql=ol.performance||ol.mozPerformance||ol.msPerformance||ol.webkitPerformance||new pl;var rl=!1;F(ql.clearResourceTimings||ql.webkitClearResourceTimings||ql.mozClearResourceTimings||ql.msClearResourceTimings||ql.oClearResourceTimings||Ha,ql);function sl(a){var b=tl(a);if(b.aft)return b.aft;a=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function ul(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ra("ytcsi."+(a||"")+"data_",b));return b}
function vl(a){a=ul(a);a.info||(a.info={});return a.info}
function tl(a){a=ul(a);a.tick||(a.tick={});return a.tick}
function wl(a){var b=ul(a).nonce;b||(b=aj(),ul(a).nonce=b);return b}
function xl(a){var b=tl(a||""),c=sl(a);c&&!rl&&(vj(ml,new kl(Math.round(c-b._start),a)),rl=!0)}
;function yl(){var a=C("ytcsi.debug");a||(a=[],A("ytcsi.debug",a,void 0),A("ytcsi.reference",{},void 0));return a}
function zl(a){a=a||"";var b=C("ytcsi.reference");b||(yl(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=yl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Al=z.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Al,void 0);function Bl(){this.f=0}
function Cl(){Bl.f||(Bl.f=new Bl);return Bl.f}
Bl.prototype.tick=function(a,b,c){Dl(this,"tick_"+a+"_"+b)||Ii("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Bl.prototype.info=function(a,b){var c=Object.keys(a).join("");Dl(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,Ii("latencyActionInfo",c))};
Bl.prototype.span=function(a,b){var c=Object.keys(a).join("");Dl(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Ii("latencyActionSpan",a))};
function Dl(a,b){Al[b]=Al[b]||{count:0};var c=Al[b];c.count++;c.time=S();a.f||(a.f=fg(function(){var d=S(),e;for(e in Al)Al[e]&&6E4<d-Al[e].time&&delete Al[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Si(c)),!0):!1}
;var Y={},El=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid=
"requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",
Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",
Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Fl="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Gl={},Hl=(Gl.ccs="CANARY_STATE_",
Gl.mver="MEASUREMENT_VERSION_",Gl.pis="PLAYER_INITIALIZED_STATE_",Gl.yt_pt="LATENCY_PLAYER_",Gl.pa="LATENCY_ACTION_",Gl.yt_vst="VIDEO_STREAM_TYPE_",Gl),Il="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Jl(a){return!!P("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!ul(a).useGel}
function Kl(a){a=ul(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Ll(a,b,c){if(null!==b)if(vl(c)[a]=b,Jl(c)){var d=b;b=Kl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in El){b=El[a];0<=Wa(Fl,b)&&(d=!!d);a in Hl&&"string"===typeof d&&(d=Hl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=al({},e)}else 0<=Wa(Il,a)||Si(new V("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Jl(c)&&(b=zl(c||""),al(b.info,f),b=Kl(c),"gelInfos"in b||(b.gelInfos={}),al(b.gelInfos,f),c=wl(c),Cl().info(f,c))}else zl(c||"").info[a]=b}
function Ml(a,b,c){var d=tl(c);if(Q("use_first_tick")&&Nl(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;ql.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),ql.mark(e))}e=b||S();d[a]=e;e=Kl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||S();if(Jl(c)){zl(c||"").tick[a]=b||S();e=wl(c);if("_start"===a){var f=Cl();Dl(f,"baseline_"+e)||Ii("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Cl().tick(a,e,b);xl(c);e=!0}else e=!1;if(!e){if(!C("yt.timing."+(c||"")+"pingSent_")&&
(f=P((c||"")+"TIMING_ACTION",void 0),e=tl(c),C("ytglobal.timing"+(c||"")+"ready_")&&f&&Nl("_start")&&sl(c)))if(xl(c),c)Ol(c);else{f=!0;var g=P("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Ol(c)}zl(c||"").tick[a]=b||S()}return d[a]}
function Nl(a,b){var c=tl(b);return a in c}
function Ol(a){if(!Jl(a)){var b=tl(a),c=vl(a),d=b._start,e=P("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:P((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=sl(a);var h=tl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&vl(a).yt_pvis&&"youtube"===e&&(Ll("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=S();m={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),m[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;Q("debug_csi_data")&&(c=C("yt.timing.csiData"),c||(c=[],Ra("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var r=void 0===r?"":r;il(f,r)||hl(f,void 0,void 0,void 0,r)}else hl(f);A("yt.timing."+(a||"")+"pingSent_",!0,void 0);vj(nl,new ll(m.aft+(Number(g)||0),a))}}
var Pl=window;Pl.ytcsi&&(Pl.ytcsi.info=Ll,Pl.ytcsi.tick=Ml);function Ql(){var a=this;this.j=[];this.l=[];this.f=[];this.B=!1;this.m=[];this.h=this.o=!1;this.u=new Map;Q("screen_manager_wait_for_csn")&&(Q("web_lifecycles")&&$k[0].push(this.C),xj("loggingScreenCreated",function(){a.C()}),xj("clearWaitForNavigationJobs",function(){a.m=[]}))}
function Rl(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.h&&a.i&&a.i();var g=W(c),h=jj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&Hj(a.client,g,h,[ej(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&Hj(a.client,g,h,[ej(d.playerResponse.trackingParams)]))})}
function Sl(a,b,c,d){if(a.h&&!d)a.j.push([b,c]);else{var e=W(d);c=c||jj(d);e&&c&&Hj(a.client,e,c,[b])}}
function Tl(a,b){var c=void 0===c?0:c;a.u.set(b,c);"UNDEFINED_CSN"===W(c)||a.h||Sl(a,b,void 0,c)}
Ql.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;Kj(this.client,b,ej(a.clickTrackingParams));return!0};
function Ul(a,b,c){c=void 0===c?{}:c;a.h=!0;a.i=function(){Vl(a,b,c);var f=jj(c.layer);if(f){for(var g=u(a.j),h=g.next();!h.done;h=g.next())h=h.value,Sl(a,h[0],h[1]||f,c.layer);f=u(a.l);for(g=f.next();!g.done;g=f.next()){h=g.value;g=h[0];var k=h[1];if(a.h)a.l.push([g,k]);else{var l=ej(g);if(h=W())g=a.client,k={csn:h,ve:l.getAsJson(),clientData:k},l={M:mj(h),O:h},"UNDEFINED_CSN"==h?Ij("visualElementStateChanged",k,l):g?Wg("visualElementStateChanged",k,g,l):Ii("visualElementStateChanged",k,l)}}}};
W(c.layer)||a.i();if(c.xa)for(var d=u(c.xa),e=d.next();!e.done;e=d.next())Rl(a,e.value,c.layer);else Ti(Error("Delayed screen needs a data promise."))}
function Vl(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.gb?c.gb:c.layer;var e=W(d);d=jj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));if(e&&"UNDEFINED_CSN"!==e&&d){var g=a.client,h=!0,k=(h=void 0===h?!1:h)?16:8;k={csn:e,ve:d.getAsJson(),eventType:k};h={M:mj(e),O:e,Na:h};"UNDEFINED_CSN"==e?Ij("visualElementHidden",k,h):g?Wg("visualElementHidden",k,g,h):Ii("visualElementHidden",
k,h)}try{var l=a.client;g=f;var m=c.wa,p=c.M,q=Fj(),r={csn:q,pageVe:(new dj({veType:b,youtubeData:void 0})).getAsJson()};g&&g.visualElement?r.implicitGesture={parentCsn:g.clientScreenNonce,gesturedVe:g.visualElement.getAsJson()}:g&&Si(new V("newScreen() parent element does not have a VE - rootVe",b));m&&(r.cloneCsn=m);m={M:p,O:q};l?Wg("screenCreated",r,l,m):Ii("screenCreated",r,m);vj(Aj,new Cj(q));var w=q}catch(B){Ui(B,{nk:b,rootVe:d,parentVisualElement:void 0,hk:e,mk:f,wa:c.wa});Ti(B);return}nj(w,
b,c.layer,c.M);a.f[a.f.length-1]&&!a.f[a.f.length-1].csn&&(a.f[a.f.length-1].csn=w||"");Q("screen_manager_wait_for_csn")&&(A("midTransition",!1,void 0),vj("loggingScreenCreated"),a.o=!1);Ll("csn",w);Yk.getInstance().clear();b=jj(c.layer);e&&"UNDEFINED_CSN"!==e&&b&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&Jj(w,b);a.h=!1;a.i=void 0;e=u(a.u);for(w=e.next();!w.done;w=e.next())w=u(w.value),f=w.next().value,w.next().value===c.layer&&b&&Sl(a,f,b,c.layer);Q("c3_client_side_screens")&&
!a.B&&(c=fj(49980),e=fj(49981),Ra("historyVes",{backButtonVe:c,forwardButtonVe:e}),Tl(a,c),Tl(a,e),a.B=!0)}
Ql.prototype.C=function(){for(var a=u(this.m),b=a.next();!b.done;b=a.next())b=b.value,b();this.m=[]};var Z=null,Wl=null,Xl=null,Yl={};function Zl(a){var b=a.id;a=fj(a.ve_type);Yl[b]=a;b=W();var c=jj();b&&c&&Lj(b,c,a)}
function $l(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function am(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(nj(b,a),a=jj()))for(var c in Yl){var d=Yl[c];d&&Lj(b,a,d)}}
function bm(a){Yl[a.id]=ej(a.tracking_params)}
function cm(a){var b=W();a=Yl[a.id];b&&a&&Kj(Q("use_default_events_client")?void 0:Hi,b,a)}
function dm(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=Yl[a[c]];d&&Jj(b,d)}}
;A("yt.setConfig",O,void 0);A("yt.config.set",O,void 0);A("yt.setMsg",Cf,void 0);A("yt.msgs.set",Cf,void 0);A("yt.logging.errors.log",Ti,void 0);
A("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);if(!a){var b=P("PLAYER_VARS",void 0);b&&(a={args:b})}Tk(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!=window.top&&c&&c!=document.URL&&(a.args.loaderUrl=c);if((c=P("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){if(!c.serializedForcedExperimentIds){var d=
window.location.href;-1!=d.indexOf("?")?(d=(d||"").split("#")[0],d=d.split("?",2),d=ch(1<d.length?d[1]:d[0])):d={};d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Z=mk(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=mk(a);Z.addEventListener("onScreenChanged",am);Z.addEventListener("onLogClientVeCreated",Zl);Z.addEventListener("onLogServerVeCreated",bm);Z.addEventListener("onLogVeClicked",cm);Z.addEventListener("onLogVesShown",dm);Z.addEventListener("onVideoDataChange",
$l);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Xl=new Ek(Z):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Wl=new Fk(window.parent,a,b),Xl=new zk(Z,Wl.i));jg()},void 0);
var em=yf(function(){Ml("ol");var a=Uk.getInstance(),b=!!((Xk("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Md(document.body,"exp-invert-logo"))if(c&&!Md(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Md(d,"inverted-hdpi")){var e=Kd(d);Ld(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Md(document.body,"inverted-hdpi")&&Nd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Xk(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());Ql.f||(Ql.f=new Ql);a=Ql.f;c=16623;var f=void 0===f?{}:f;Object.values(Mj).includes(c)||(Si(new V("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.f.push({rootVe:c,key:f.key||""});a.j=[];a.l=[];Q("screen_manager_wait_for_csn")&&(a.o||vj("clearWaitForNavigationJobs"),Ra("midTransition",!0));f.xa?Ul(a,c,f):Vl(a,c,f)}),fm=yf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
P("PL_ATT")&&Xi.dispose();for(var a=0,b=hg.length;a<b;a++){var c=hg[a];if(!isNaN(c)){var d=C("yt.scheduler.instance.cancelJob");d?d(c):Kf(c)}}hg.length=0;bg("//static.doubleclick.net/instream/ad_status.js");ig=!1;O("DCLKSTAT",0);Wc(Xl,Wl);Z&&(Z.removeEventListener("onScreenChanged",am),Z.removeEventListener("onLogClientVeCreated",Zl),Z.removeEventListener("onLogServerVeCreated",bm),Z.removeEventListener("onLogVeClicked",cm),Z.removeEventListener("onLogVesShown",dm),Z.removeEventListener("onVideoDataChange",
$l),Z.destroy());Yl={}});
window.addEventListener?(window.addEventListener("load",em),window.addEventListener("unload",fm)):window.attachEvent&&(window.attachEvent("onload",em),window.attachEvent("onunload",fm));Ra("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||Yi);Ra("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||Zi);Ra("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||kg);
Ra("yt.player.exports.navigate",C("yt.player.exports.navigate")||oj);Ra("yt.util.activity.init",C("yt.util.activity.init")||xg);Ra("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||Ag);Ra("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||yg);}).call(this);
