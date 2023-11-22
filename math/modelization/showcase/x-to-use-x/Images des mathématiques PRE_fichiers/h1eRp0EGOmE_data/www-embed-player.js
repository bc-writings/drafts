(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ba(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function t(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ka(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ma=ka(this);function u(a,b){if(b){for(var c=ma,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function oa(){oa=function(){};
ma.Symbol||(ma.Symbol=pa)}
function qa(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=ma.Symbol.iterator;a||(a=ma.Symbol.iterator=ma.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[ma.Symbol.iterator]=function(){return this};
return a}
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ta});
u("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=ma.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.A),reject:g(this.j)}};
b.prototype.A=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.D(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.w(g):this.l(g)}};
b.prototype.w=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.F(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.B()};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.D=function(g){var h=this.i();g.aa(h.resolve,h.reject)};
b.prototype.F=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,q){return"function"==typeof v?function(B){try{l(v(B))}catch(K){m(K)}}:q}
var l,m,r=new b(function(v,q){l=v;m=q});
this.aa(k(g,l),k(h,m));return r};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.aa=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=p(g),m=l.next();!m.done;m=l.next())d(m.value).aa(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(l,m){function r(B){return function(K){v[B]=K;q--;0==q&&l(v)}}
var v=[],q=0;do v.push(void 0),q++,d(k.value).aa(r(v.length-1),m),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=p(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!w(k,g)){var l=new c;ja(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!w(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&w(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)?delete k[g][this.f]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return sa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&w(h.g,l))for(var r=0;r<m.length;r++){var v=m[r];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:m,index:r,u:v}}return{id:l,list:m,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
u("Set",function(a){function b(c){this.f=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
u("Reflect.construct",function(){return ua});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function xa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&va.test(a)?a:""}
function z(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ba(a){return"array"==Aa(a)}
function Ca(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function A(a){return"function"==Aa(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ha:C=Ia;return C.apply(null,arguments)}
function Ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now||function(){return+new Date};
function La(a,b){y(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function Ma(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;var d=b?c.index:a.length;try{return{xa:a.slice(0,d)+"&act=1"+a.slice(d),za:decodeURIComponent(c[1])}}catch(f){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;d="";if(b){var e=a.indexOf("&adurl=");0<e&&(c=a.slice(0,e),d=a.slice(e))}return{xa:c+"&act=1"+d,za:c+"&dct=1"+d}}return null}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";function Na(a){var b=a.url,c=a.vb;this.j=!!a.bb;this.g=Ma(b,c);a=/[?&]dsh=1(&|$)/.test(b);this.h=!a&&/[?&]ae=1(&|$)/.test(b);this.i=!a&&/[?&]ae=2(&|$)/.test(b);this.f=/[?&]adurl=([^&]*)/.exec(b)}
;var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Qa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ra=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Sa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ta(a,b){var c=Oa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ua(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Va(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a,b){var c=Ca(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Za(a){var b=$a,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ab(a){for(var b in a)return!1;return!0}
function bb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function cb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function db(a){var b={},c;for(c in a)b[c]=a[c];return b}
function eb(a){var b=Aa(a);if("object"==b||"array"==b){if(A(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=eb(a[c]);return b}return a}
var fb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fb.length;f++)c=fb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function hb(a,b){this.f=a===ib&&b||"";this.g=jb}
hb.prototype.K=!0;hb.prototype.J=function(){return this.f.toString()};
hb.prototype.ha=!0;hb.prototype.ea=function(){return 1};
function kb(a){if(a instanceof hb&&a.constructor===hb&&a.g===jb)return a.f;Aa(a);return"type_error:TrustedResourceUrl"}
var jb={},ib={};var lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function mb(a,b){if(b)a=a.replace(nb,"&amp;").replace(ob,"&lt;").replace(pb,"&gt;").replace(qb,"&quot;").replace(rb,"&#39;").replace(sb,"&#0;");else{if(!tb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(nb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ob,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(pb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(qb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(rb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(sb,"&#0;"))}return a}
var nb=/&/g,ob=/</g,pb=/>/g,qb=/"/g,rb=/'/g,sb=/\x00/g,tb=/[\x00&<>"']/;function H(a,b){this.f=a===ub&&b||"";this.g=vb}
H.prototype.K=!0;H.prototype.J=function(){return this.f.toString()};
H.prototype.ha=!0;H.prototype.ea=function(){return 1};
function wb(a){if(a instanceof H&&a.constructor===H&&a.g===vb)return a.f;Aa(a);return"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof H)return a;a="object"==typeof a&&a.K?a.J():String(a);xb.test(a)||(a="about:invalid#zClosurez");return new H(ub,a)}
var vb={},ub={};var zb;a:{var Ab=x.navigator;if(Ab){var Bb=Ab.userAgent;if(Bb){zb=Bb;break a}}zb=""}function I(a){return-1!=zb.indexOf(a)}
;function Cb(){this.f="";this.h=Db;this.g=null}
Cb.prototype.ha=!0;Cb.prototype.ea=function(){return this.g};
Cb.prototype.K=!0;Cb.prototype.J=function(){return this.f.toString()};
var Db={};function Eb(a,b){var c=new Cb;c.f=a;c.g=b;return c}
Eb("<!DOCTYPE html>",0);Eb("",0);Eb("<br>",0);function Fb(a,b){var c=b instanceof H?b:yb(b);a.href=wb(c)}
function Gb(a,b){a.src=kb(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=x?c=xa(c.document):(null===wa&&(wa=xa(x.document)),c=wa);c&&a.setAttribute("nonce",c)}
;function Hb(a){return a=mb(a,void 0)}
function Jb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Kb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a?decodeURI(a):a}
function L(a,b){return b.match(Kb)[a]||null}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
function Nb(a,b){var c=Mb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Ob=/#|$/;function Pb(a,b){var c=a.search(Ob);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var Qb=I("Opera"),Rb=I("Trident")||I("MSIE"),Sb=I("Edge"),Tb=I("Gecko")&&!(-1!=zb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Ub=-1!=zb.toLowerCase().indexOf("webkit")&&!I("Edge");function Vb(){var a=x.document;return a?a.documentMode:void 0}
var Wb;a:{var Xb="",Yb=function(){var a=zb;if(Tb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Sb)return/Edge\/([\d\.]+)/.exec(a);if(Rb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ub)return/WebKit\/(\S+)/.exec(a);if(Qb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Yb&&(Xb=Yb?Yb[1]:"");if(Rb){var Zb=Vb();if(null!=Zb&&Zb>parseFloat(Xb)){Wb=String(Zb);break a}}Wb=Xb}var $b=Wb,ac;if(x.document&&Rb){var bc=Vb();ac=bc?bc:parseInt($b,10)||void 0}else ac=void 0;var cc=ac;var dc={},ec=null;var M=window;function fc(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,gc[b]?b=gc[b]:(b=String(b),gc[b]||(c=/function\s+([^\(]+)/m.exec(b),gc[b]=c?c[1]:"[Anonymous]"),b=gc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var gc={};function hc(a){this.f=a||{cookie:""}}
n=hc.prototype;n.isEnabled=function(){return navigator.cookieEnabled};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.xb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
n.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=lb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.f.cookie};
n.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ic=new hc("undefined"==typeof document?null:document);var jc=!Rb||9<=Number(cc);function kc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=kc.prototype;n.clone=function(){return new kc(this.x,this.y)};
n.equals=function(a){return a instanceof kc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function lc(a,b){this.width=a;this.height=b}
n=lc.prototype;n.clone=function(){return new lc(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function mc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function nc(a,b){Xa(b,function(c,d){c&&"object"==typeof c&&c.K&&(c=c.J());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:oc.hasOwnProperty(d)?a.setAttribute(oc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var oc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function pc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!jc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Hb(g.name),'"');if(g.type){f.push(' type="',Hb(g.type),'"');var h={};gb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=qc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):nc(f,g));2<d.length&&rc(e,f,d);return f}
function rc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ca(f)||Da(f)&&0<f.nodeType?d(f):G(sc(f)?Ua(f):f,d)}}
function qc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function sc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(A(a))return"function"==typeof a.item}return!1}
function tc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function uc(a){vc();return new hb(ib,a)}
var vc=ya;function wc(a){var b=xc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function yc(){var a=[];wc(function(b){a.push(b)});
return a}
var xc={cb:"allow-forms",eb:"allow-modals",fb:"allow-orientation-lock",gb:"allow-pointer-lock",hb:"allow-popups",ib:"allow-popups-to-escape-sandbox",jb:"allow-presentation",kb:"allow-same-origin",lb:"allow-scripts",mb:"allow-top-navigation",nb:"allow-top-navigation-by-user-activation"},zc=Wa(function(){return yc()});
function Ac(){var a=qc(document,"IFRAME"),b={};G(zc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Bc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Cc=(new Date).getTime();function Dc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ec(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(r){for(var v=g,q=0;64>q;q+=4)v[q/4]=r[q]<<24|r[q+1]<<16|r[q+2]<<8|r[q+3];for(q=16;80>q;q++)r=v[q-3]^v[q-8]^v[q-14]^v[q-16],v[q]=(r<<1|r>>>31)&4294967295;r=e[0];var B=e[1],K=e[2],la=e[3],Tc=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Ja=la^B&(K^la);var Ib=1518500249}else Ja=B^K^la,Ib=1859775393;else 60>q?(Ja=B&K|la&(B|K),Ib=2400959708):(Ja=B^K^la,Ib=3395469782);Ja=((r<<5|r>>>27)&4294967295)+Ja+Tc+Ib+v[q]&4294967295;Tc=la;la=K;K=(B<<30|B>>>2)&4294967295;B=r;r=Ja}e[0]=e[0]+r&4294967295;e[1]=
e[1]+B&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+la&4294967295;e[4]=e[4]+Tc&4294967295}
function c(r,v){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var q=[],B=0,K=r.length;B<K;++B)q.push(r.charCodeAt(B));r=q}v||(v=r.length);q=0;if(0==l)for(;q+64<v;)b(r.slice(q,q+64)),q+=64,m+=64;for(;q<v;)if(f[l++]=r[q++],m++,64==l)for(l=0,b(f);q+64<v;)b(r.slice(q,q+64)),q+=64,m+=64}
function d(){var r=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=v&255,v>>>=8;b(f);for(q=v=0;5>q;q++)for(var B=24;0<=B;B-=8)r[v++]=e[q]>>B&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ya:function(){for(var r=d(),v="",q=0;q<r.length;q++)v+="0123456789ABCDEF".charAt(Math.floor(r[q]/16))+"0123456789ABCDEF".charAt(r[q]%16);return v}}}
;function Fc(a,b,c){var d=[],e=[];if(1==(Ba(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Gc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Gc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Gc(a){var b=Ec();b.update(a);return b.ya().toLowerCase()}
;function Hc(a){var b=Dc(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new hc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new hc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Fc(Dc(d),c,a||null)].join(" "):null}return null}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function Ic(){this.g=[];this.f=-1}
Ic.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Ic.prototype.get=function(a){return!!this.g[a]};
function Jc(a){-1==a.f&&(a.f=Ra(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Kc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Kc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Lc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Mc(a){x.setTimeout(function(){throw a;},0)}
var Nc;
function Oc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=qc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.la;c.la=null;e()}};
return function(e){d.next={la:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Pc(){this.g=this.f=null}
var Rc=new Kc(function(){return new Qc},function(a){a.reset()});
Pc.prototype.add=function(a,b){var c=Rc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Pc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Qc(){this.next=this.scope=this.f=null}
Qc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Qc.prototype.reset=function(){this.next=this.scope=this.f=null};function Sc(a,b){Uc||Vc();Wc||(Uc(),Wc=!0);Xc.add(a,b)}
var Uc;function Vc(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Uc=function(){a.then(Yc)}}else Uc=function(){var b=Yc;
!A(x.setImmediate)||x.Window&&x.Window.prototype&&!I("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Nc||(Nc=Oc()),Nc(b)):x.setImmediate(b)}}
var Wc=!1,Xc=new Pc;function Yc(){for(var a;a=Xc.remove();){try{a.f.call(a.scope)}catch(b){Mc(b)}Lc(Rc,a)}Wc=!1}
;function Zc(){this.g=-1}
;function $c(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E($c,Zc);$c.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function ad(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
$c.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)ad(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){ad(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){ad(this,e);f=0;break}}this.h=f;this.j+=b}};
$c.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;ad(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function N(){this.g=this.g;this.B=this.B}
N.prototype.g=!1;N.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function bd(a,b){a.g?b():(a.B||(a.B=[]),a.B.push(b))}
N.prototype.o=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function cd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function dd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ca(d)?dd.apply(null,d):cd(d)}}
;function ed(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function fd(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function gd(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:ed(a).match(/\S+/g)||[],c=0<=Oa(c,b);return c}
function hd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):gd(a,"inverted-hdpi")&&fd(a,Pa(a.classList?a.classList:ed(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var id="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function jd(){}
jd.prototype.next=function(){throw id;};
jd.prototype.G=function(){return this};
function kd(a){if(a instanceof jd)return a;if("function"==typeof a.G)return a.G(!1);if(Ca(a)){var b=0,c=new jd;c.next=function(){for(;;){if(b>=a.length)throw id;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ld(a,b){if(Ca(a))try{G(a,b,void 0)}catch(c){if(c!==id)throw c;}else{a=kd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==id)throw c;}}}
function md(a){if(Ca(a))return Ua(a);a=kd(a);var b=[];ld(a,function(c){b.push(c)});
return b}
;function nd(a,b){this.h={};this.f=[];this.H=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof nd)for(c=od(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function od(a){pd(a);return a.f.concat()}
n=nd.prototype;n.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||qd;pd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function qd(a,b){return a===b}
n.isEmpty=function(){return 0==this.g};
n.clear=function(){this.h={};this.H=this.g=this.f.length=0};
n.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.H++,this.f.length>2*this.g&&pd(this),!0):!1};
function pd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
n.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
n.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.H++);this.h[a]=b};
n.forEach=function(a,b){for(var c=od(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new nd(this)};
n.G=function(a){pd(this);var b=0,c=this.H,d=this,e=new jd;e.next=function(){if(c!=d.H)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw id;var f=d.f[b++];return a?f:d.h[f]};
return e};function rd(a){var b=[];sd(new td,a,b);return b.join("")}
function td(){}
function sd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),sd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ud(d,c),c.push(":"),sd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ud(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var vd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},wd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ud(a,b){b.push('"',a.replace(wd,function(c){var d=vd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),vd[c]=d);return d}),'"')}
;function xd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=ya)try{var b=this;a.call(void 0,function(c){yd(b,2,c)},function(c){yd(b,3,c)})}catch(c){yd(this,3,c)}}
function zd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
zd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Ad=new Kc(function(){return new zd},function(a){a.reset()});
function Bd(a,b,c){var d=Ad.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Cd(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Dd(this,A(a)?a:null,A(b)?b:null,c)};
O.prototype.$goog_Thenable=!0;function Ed(a,b){return Dd(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.f){var b=new Fd(a);Sc(function(){Gd(this,b)},this)}};
function Gd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Gd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Hd(c),Id(c,e,3,b)))}a.h=null}else yd(a,3,b)}
function Jd(a,b){a.g||2!=a.f&&3!=a.f||Kd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Dd(a,b,c,d){var e=Bd(null,null,null);e.f=new O(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Fd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Jd(a,e);return e.f}
O.prototype.w=function(a){this.f=0;yd(this,2,a)};
O.prototype.A=function(a){this.f=0;yd(this,3,a)};
function yd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof O){Jd(d,Bd(e||ya,f||null,a));var g=!0}else if(xd(d))d.then(e,f,a),g=!0;else{if(Da(d))try{var h=d.then;if(A(h)){Ld(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Kd(a),3!=b||c instanceof Fd||Md(a,c))}}
function Ld(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Kd(a){a.l||(a.l=!0,Sc(a.B,a))}
function Hd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
O.prototype.B=function(){for(var a;a=Hd(this);)Id(this,a,this.f,this.m);this.l=!1};
function Id(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Nd(b,c,d);else try{b.h?b.g.call(b.context):Nd(b,c,d)}catch(e){Od.call(null,e)}Lc(Ad,b)}
function Nd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Md(a,b){a.j=!0;Sc(function(){a.j&&Od.call(null,b)})}
var Od=Mc;function Fd(a){F.call(this,a)}
E(Fd,F);Fd.prototype.name="cancel";function P(a){N.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(P,N);n=P.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Pd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Sa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
n.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=ya):(c&&Ta(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
n.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Qd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Qd(a,b,c){Sc(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
n.o=function(){P.L.o.call(this);this.clear();this.i.length=0};function Rd(a){this.f=a}
Rd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,rd(b))};
Rd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Rd.prototype.remove=function(a){this.f.remove(a)};function Sd(a){this.f=a}
E(Sd,Rd);function Td(a){this.data=a}
function Ud(a){return void 0===a||a instanceof Td?a:new Td(a)}
Sd.prototype.set=function(a,b){Sd.L.set.call(this,a,Ud(b))};
Sd.prototype.g=function(a){a=Sd.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Sd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Vd(a){this.f=a}
E(Vd,Sd);Vd.prototype.set=function(a,b,c){if(b=Ud(b)){if(c){if(c<D()){Vd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}Vd.L.set.call(this,a,b)};
Vd.prototype.g=function(a){var b=Vd.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())Vd.prototype.remove.call(this,a);else return b}};function Wd(){}
;function Xd(){}
E(Xd,Wd);Xd.prototype.clear=function(){var a=md(this.G(!0)),b=this;G(a,function(c){b.remove(c)})};function Yd(a){this.f=a}
E(Yd,Xd);n=Yd.prototype;n.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeItem(a)};
n.G=function(a){var b=0,c=this.f,d=new jd;d.next=function(){if(b>=c.length)throw id;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){this.f.clear()};
n.key=function(a){return this.f.key(a)};function Zd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Zd,Yd);function $d(a,b){this.g=a;this.f=null;if(Rb&&!(9<=Number(cc))){ae||(ae=new nd);this.f=ae.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ae.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E($d,Xd);var be={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ae=null;function ce(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return be[b]})}
n=$d.prototype;n.isAvailable=function(){return!!this.f};
n.set=function(a,b){this.f.setAttribute(ce(a),b);de(this)};
n.get=function(a){a=this.f.getAttribute(ce(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.f.removeAttribute(ce(a));de(this)};
n.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new jd;d.next=function(){if(b>=c.length)throw id;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
n.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);de(this)};
function de(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ee(a,b){this.g=a;this.f=b+"::"}
E(ee,Xd);ee.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ee.prototype.get=function(a){return this.g.get(this.f+a)};
ee.prototype.remove=function(a){this.g.remove(this.f+a)};
ee.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new jd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function fe(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ge=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",ge,void 0);function Q(a){fe(ge,arguments)}
function R(a,b){return a in ge?ge[a]:b}
function he(){return R("PLAYER_CONFIG",{})}
function ie(a){var b=ge.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function je(){var a=ke;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function le(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var me=[];function ne(a){me.forEach(function(b){return b(a)})}
function oe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){pe(b),ne(b)}}:a}
function pe(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Q("ERRORS",b))}
function qe(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Q("ERRORS",b))}
;function re(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ba(b[f])?Va(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};pe(h)}}}return b}
function se(a){var b=[];Xa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Ba(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function te(a){"?"==a.charAt(0)&&(a=a.substr(1));return re(a)}
function ue(a,b){return ve(a,b||{},!0)}
function ve(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=te(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Nb(a,e)+d}
;function we(a){var b=xe;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ye(b),ze(b));b.ca_type="image";a&&(b.bid=a);return b}
function ye(a){var b={};b.dt=Cc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?M:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!M.navigator&&"unknown"!==typeof M.navigator.javaEnabled&&!!M.navigator.javaEnabled&&M.navigator.javaEnabled();M.screen&&(b.u_h=M.screen.height,b.u_w=M.screen.width,b.u_ah=M.screen.availHeight,b.u_aw=M.screen.availWidth,b.u_cd=M.screen.colorDepth);
M.navigator&&M.navigator.plugins&&(b.u_nplug=M.navigator.plugins.length);M.navigator&&M.navigator.mimeTypes&&(b.u_nmime=M.navigator.mimeTypes.length);return b}
function ze(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(r){}try{var e=b.outerWidth;var f=b.outerHeight}catch(r){}try{var g=b.innerWidth;var h=b.innerHeight}catch(r){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new lc(l.clientWidth,l.clientHeight)).round()}catch(r){m=new lc(-12245933,-12245933)}k=m;m={};l=new Ic;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=Ac();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Jc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!M.WebGLRenderingContext,m}
var xe=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return se(we(a))},void 0);D();function S(a){a=Ae(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Be(a,b){var c=Ae(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Ae(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;var Ce=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function De(){if(!Ce)return null;var a=Ce();return"open"in a?a:null}
function Ee(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){A(a)&&(a=oe(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;var Fe={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ge="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
He=!1;
function Ie(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(1,a),e=J(L(3,a));d&&e?(d=c,c=a.match(Kb),d=d.match(Kb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(L(3,c))==e&&(Number(L(4,c))||null)==(Number(L(4,a))||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in Fe)e=R(Fe[f]),!e||!c&&!Je(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Je(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Je(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Je(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=se(we(void 0));return b}
function Ke(a){var b=window.location.search,c=J(L(3,a)),d=J(L(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=te(b),f={};G(Ge,function(g){e[g]&&(f[g]=e[g])});
return ve(a,f||{},!1)}
function Je(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=J(L(3,a));return d?(c=c[d])?0<=Oa(c,b):!1:!0}
function Le(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Me(a,b);var d=Ne(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&U(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||x;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.ja&&b.ja.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.qa&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.qa.call(b.context||x))},b.timeout))}else Oe(a,b)}
function Oe(a,b){var c=b.format||"JSON";a=Me(a,b);var d=Ne(a,b),e=!1,f,g=Pe(a,function(h){if(!e){e=!0;f&&U(f);var k=Ee(h),l=null,m=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(k||m||r)l=Qe(c,h,b.rb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};m=b.context||x;k?b.onSuccess&&b.onSuccess.call(m,h,l):b.onError&&b.onError.call(m,h,l);b.ja&&b.ja.call(m,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.O.call(b.context||x,g))},b.timeout));
return g}
function Me(a,b){b.ub&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.ab;d&&(d[c]&&delete d[c],a=ue(a,d));return a}
function Ne(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.tb||J(L(3,a))&&!b.withCredentials&&J(L(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=te(e),gb(e,f),e=b.ra&&"JSON"==b.ra?JSON.stringify(e):Mb(e));f=e||f&&!ab(f);!He&&f&&"POST"!=b.method&&(He=!0,pe(Error("AJAX request with postData should use POST")));
return e}
function Qe(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Re(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Se(e)})}c&&Te(d);
return d}
function Te(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Eb(a[b],null);a[c]=d}else Te(a[b])}}
function Re(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Se(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pe(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&oe(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=De();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=Ke(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ie(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ue={},Ve=0;
function We(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=zb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.K?a.J():String(a),xb.test(a)||(a="about:invalid#zClosurez"),a=new H(ub,a)),b=wb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Cb?a=b:(d="object"==typeof b,a=null,d&&b.ha&&(a=b.ea()),b=mb(d&&b.K?b.J():String(b)),a=Eb(b,a)),a instanceof Cb&&a.constructor===Cb&&a.h===Db?a=a.f:(Aa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(rd(a.toString())))),/^[\s\xa0]*$/.test(a)||
(a=pc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Pe(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Pe(a,b,"GET","",d):Xe(a,b)||Ye(a,b))}
function Xe(a,b){if(!ie("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(ie("use_sonic_js_library_for_v4_support")){a:{try{var c=new Na({url:a,bb:!0});if(c.j?c.h&&c.f&&c.f[1]||c.i:c.g){var d=J(L(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==Pb(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=J(L(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==Pb(a,"ae")||"1"!==Pb(a,"act"))return!1;return Ze(a)?(b&&b(),!0):!1}
function Ze(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Ye(a,b){var c=new Image,d=""+Ve++;Ue[d]=c;c.onload=c.onerror=function(){b&&Ue[d]&&b();delete Ue[d]};
c.src=a}
;var $e=z("ytPubsubPubsubInstance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.N;P.prototype.publish=P.prototype.M;P.prototype.clear=P.prototype.clear;y("ytPubsubPubsubInstance",$e,void 0);var af=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",af,void 0);var bf=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",bf,void 0);var cf=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",cf,void 0);
function df(a,b){var c=ef();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){af[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{cf[a]?f():T(f,0)}catch(g){pe(g)}},void 0);
af[d]=!0;bf[a]||(bf[a]=[]);bf[a].push(d);return d}return 0}
function ff(a){var b=ef();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete af[c]}))}
function gf(a,b){var c=ef();c&&c.publish.apply(c,arguments)}
function hf(a){var b=ef();if(b)if(b.clear(a),a)jf(a);else for(var c in bf)jf(c)}
function ef(){return z("ytPubsubPubsubInstance")}
function jf(a){bf[a]&&(a=bf[a],G(a,function(b){af[b]&&delete af[b]}),a.length=0)}
;var kf=window,V=kf.ytcsi&&kf.ytcsi.now?kf.ytcsi.now:kf.performance&&kf.performance.timing&&kf.performance.now&&kf.performance.timing.navigationStart?function(){return kf.performance.timing.navigationStart+kf.performance.now()}:function(){return(new Date).getTime()};var lf=Be("initial_gel_batch_timeout",1E3),mf=Math.pow(2,16)-1,nf=null,of=0,pf=void 0,qf=0,rf=0,sf=0,tf=!0,uf=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",uf,void 0);var vf=z("ytLoggingTransportGELQueue_")||new Map;y("ytLoggingTransportGELQueue_",vf,void 0);var wf=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",wf,void 0);
function xf(){U(qf);U(rf);rf=0;pf&&pf.isReady()?(yf(vf),"log_event"in uf&&yf(Object.entries(uf.log_event)),vf.clear(),delete uf.log_event):zf()}
function zf(){S("web_gel_timeout_cap")&&!rf&&(rf=T(xf,6E4));U(qf);var a=R("LOGGING_BATCH_TIMEOUT",Be("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&tf&&(a=lf);qf=T(xf,a)}
function yf(a){var b=pf,c=Math.round(V());a=p(a);for(var d=a.next();!d.done;d=a.next()){var e=p(d.value);d=e.next().value;var f=e.next().value;e=eb({context:Af(b.f||Bf())});e.events=f;(f=wf[d])&&Cf(e,d,f);delete wf[d];Df(e,c);Ef(b,"log_event",e,{retry:!0,onSuccess:function(){of=Math.round(V()-c)}});
tf=!1}}
function Df(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*mf/2));d++;d>mf&&(d=1);Q("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;nf&&of&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:nf,roundtripMs:String(of)});nf=c;of=0}}
function Cf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Ff=Be("initial_gel_batch_timeout",1E3),Gf=Math.pow(2,16)-1,Hf=null,If=0,Jf={log_event:"events",log_interaction:"interactions"},Kf=new Set(["log_event"]),Lf={},Mf=0,Nf=0,Of=0,Pf=!0,W=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",W,void 0);var Qf=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",Qf,void 0);
function Rf(){if(S("use_typescript_transport"))xf();else if(U(Mf),U(Nf),Nf=0,!ab(W)){for(var a in W){var b=Lf[a];if(b&&b.isReady()){var c=void 0,d=a,e=Jf[d],f=Math.round(V());for(c in W[d]){var g=eb({context:Af(b.f||Bf())});g[e]=Sf(d,c);var h=Qf[c];if(h)a:{var k=g,l=c;if(h.videoId)var m="VIDEO";else if(h.playlistId)m="PLAYLIST";else break a;k.credentialTransferTokenTargetId=h;k.context=k.context||{};k.context.user=k.context.user||{};k.context.user.credentialTransferTokens=[{token:l,scope:m}]}delete Qf[c];
h=g;h.requestTimeMs=f;S("unsplit_gel_payloads_in_logs")&&(h.unsplitGelPayloadsInLogs=!0);if(m=R("EVENT_ID",void 0))k=R("BATCH_CLIENT_COUNTER",void 0)||0,!k&&S("web_client_counter_random_seed")&&(k=Math.floor(Math.random()*Gf/2)),k++,k>Gf&&(k=1),Q("BATCH_CLIENT_COUNTER",k),m={serializedEventId:m,clientCounter:k},h.serializedClientEventId=m,Hf&&If&&S("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:Hf,roundtripMs:If}),Hf=m,If=0;Ef(b,d,g,{retry:Kf.has(d),onSuccess:Ka(Tf,V())})}delete W[a];
Pf=!1}}ab(W)||Uf()}}
function Uf(){S("web_gel_timeout_cap")&&!Nf&&(Nf=T(Rf,6E4));U(Mf);var a=R("LOGGING_BATCH_TIMEOUT",Be("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Pf&&(a=Ff);Mf=T(Rf,a)}
function Sf(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function Tf(a){If=Math.round(V()-a)}
;var Vf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Vf},void 0);var Wf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Xf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Wf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Yf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Xf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Xf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Xf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var $a=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",$a,void 0);var Zf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Zf,void 0);
function $f(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Za(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Da(e[4])&&Da(d)&&cb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ag=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function X(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=$f(a,b,c,d);if(e)return e;e=++Zf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Xf(h);if(!tc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Xf(h);
h.currentTarget=a;return c.call(a,h)};
g=oe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ag()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);$a[e]=[a,b,c,g,d];return e}
function bg(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in $a){var c=$a[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ag()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete $a[b]}}))}
;var cg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function dg(a){this.w=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=X(window,"mousemove",C(this.F,this));a=C(this.A,this);A(a)&&(a=oe(a));this.I=window.setInterval(a,25)}
E(dg,N);dg.prototype.F=function(a){void 0===a.f&&Yf(a);var b=a.f;void 0===a.g&&Yf(a);this.f=new kc(b,a.g)};
dg.prototype.A=function(){if(this.f){var a=cg();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.w();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
dg.prototype.o=function(){window.clearInterval(this.I);bg(this.D)};function eg(){}
function fg(a,b){return gg(a,1,b)}
;function hg(){}
t(hg,eg);function gg(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
hg.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
hg.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
za(hg);hg.getInstance();var ig={};
function jg(a){var b=void 0===a?{}:a;a=void 0===b.Ea?!0:b.Ea;b=void 0===b.Pa?!1:b.Pa;if(null==z("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&kg();X(document,"keydown",kg);X(document,"keyup",kg);X(document,"mousedown",kg);X(document,"mouseup",kg);a&&(b?X(window,"touchmove",function(){lg("touchmove",200)},{passive:!0}):(X(window,"resize",function(){lg("resize",200)}),X(window,"scroll",function(){lg("scroll",200)})));
new dg(function(){lg("mouse",100)});
X(document,"touchstart",kg,{passive:!0});X(document,"touchend",kg,{passive:!0})}}
function lg(a,b){ig[a]||(ig[a]=!0,fg(function(){kg();ig[a]=!1},b))}
function kg(){null==z("_lact",window)&&jg();var a=D();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function mg(){var a=z("_lact",window);return null==a?-1:Math.max(D()-a,0)}
;var ng=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",ng,void 0);
function og(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||V());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:mg())};S("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,ng[b]=b in ng?ng[b]+1:0,a.sequence={index:ng[b],groupKey:b},d.sb&&delete ng[d.P]);d=d.da;S("use_typescript_transport")?(a="",d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),wf[d.token]=a,a=d.token),d=vf.get(a)||[],vf.set(a,d),d.push(e),c&&(pf=new c),c=Be("web_logging_max_batch")||
100,e=V(),d.length>=c?xf():10<=e-sf&&(zf(),sf=e)):(d?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Qf[d.token]=a,d=Sf("log_event",d.token)):d=Sf("log_event"),d.push(e),c&&(Lf.log_event=new c),c=Be("web_logging_max_batch")||100,e=V(),d.length>=c?Rf():10<=e-Of&&(Uf(),Of=e))}
;function pg(){for(var a={},b=p(Object.entries(te(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=p(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function qg(){return"INNERTUBE_API_KEY"in ge&&"INNERTUBE_API_VERSION"in ge}
function Bf(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Fa:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ga:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ia:R("INNERTUBE_CONTEXT_HL",void 0),Ha:R("INNERTUBE_CONTEXT_GL",void 0),Ja:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ka:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Af(a){a={client:{hl:a.Ia,gl:a.Ha,clientName:a.Ga,clientVersion:a.innertubeContextClientVersion,configInfo:a.Fa}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});S("enable_device_forwarding_from_xhr_client")&&(a.client=Object.assign(a.client,pg()));return a}
function rg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.pb||R("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().ob:b=Hc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function sg(a){a=Object.assign({},a);delete a.Authorization;var b=Hc();if(b){var c=new $c;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ca(b);void 0===c&&(c=0);if(!ec){ec={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));dc[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===ec[k]&&(ec[k]=h)}}}c=dc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function tg(a,b,c,d){ic.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function ug(){var a=new Zd;(a=a.isAvailable()?new ee(a,"yt.innertube"):null)||(a=new $d("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Vd(a):null;this.g=document.domain||window.location.hostname}
ug.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rd(b))}catch(f){return}else e=escape(b);tg(a,e,c,this.g)};
ug.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=ic.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ug.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;ic.remove(""+a,"/",void 0===b?"youtube.com":b)};var vg=new ug;function wg(a,b,c,d){if(d)return null;d=vg.get("nextId",!0)||1;var e=vg.get("requests",!0)||{};e[d]={method:a,request:b,authState:sg(c),requestTime:Math.round(V())};vg.set("nextId",d+1,86400,!0);vg.set("requests",e,86400,!0);return d}
function xg(a){var b=vg.get("requests",!0)||{};delete b[a];vg.set("requests",b,86400,!0)}
function yg(a){var b=vg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=sg(rg(!1));cb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Ef(a,d.method,e,{}));delete b[c]}}vg.set("requests",b,86400,!0)}}
;function zg(a){var b=this;this.f=null;a?this.f=a:qg()&&(this.f=Bf());gg(function(){yg(b)},0,5E3)}
zg.prototype.isReady=function(){!this.f&&qg()&&(this.f=Bf());return!!this.f};
function Ef(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&qe(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ra:"JSON",O:function(){d.O()},
qa:d.O,onSuccess:function(v,q){if(d.onSuccess)d.onSuccess(q)},
oa:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,q){if(d.onError)d.onError(q)},
wb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ja;g&&(f=g);g=a.f.Ka||!1;var h=rg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ue(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=wg(b,c,h,g))){var m=e.onSuccess,r=e.oa;e.onSuccess=function(v,q){xg(l);m(v,q)};
c.oa=function(v,q){xg(l);r(v,q)}}try{S("use_fetch_for_op_xhr")?Le(k,e):(e.method="POST",e.C||(e.C={}),Oe(k,e))}catch(v){if("InvalidAccessError"==v)l&&(xg(l),l=0),qe(Error("An extension is blocking network request."));
else throw v;}l&&gg(function(){yg(a)},0,5E3)}
;function Ag(a,b,c){c=void 0===c?{}:c;var d=zg;R("ytLoggingEventsDefaultDisabled",!1)&&zg==zg&&(d=null);og(a,b,d,c)}
;function Bg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ba(p(c)))}
t(Bg,Error);var Cg=new Set,Dg=0;function Eg(a){Fg(a,"WARNING")}
function Fg(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=Dg)&&(S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),
a)),0!==a.f)){d=a.g;e=a.columnNumber;if(a.args&&a.args.length)for(var f=0,g=0;g<a.args.length;g++){var h=a.args[g],k="params."+g;f+=k.length;if(h)if(Array.isArray(h))for(var l=c,m=0;m<h.length&&!(h[m]&&(f+=Gg(m,h[m],k,l),500<f));m++);else if("object"===typeof h)for(l in l=void 0,m=c,h){if(h[l]&&(f+=Gg(l,h[l],k,m),500<f))break}else c[k]=String(JSON.stringify(h)).substring(0,500),f+=c[k].length;else c[k]=String(JSON.stringify(h)).substring(0,500),f+=c[k].length;if(500<=f)break}else if(a.hasOwnProperty("params"))if(h=
a.params,"object"===typeof a.params)for(g in k=0,h){if(h[g]&&(f="params."+g,l=String(JSON.stringify(h[g])).substr(0,500),c[f]=l,k+=f.length+l.length,500<k))break}else c.params=String(JSON.stringify(h)).substr(0,500);a=fc(a);(d=d||a.stack)||(d="Not available");h={stackTrace:d};a.fileName&&(h.filename=a.fileName);g=a.lineNumber.toString();isNaN(g)||!e||isNaN(e)||(h.lineNumber=Number(g),h.columnNumber=Number(e),g=g+":"+e);window.yterr&&A(window.yterr)&&(a.params=c,window.yterr(a));if(!(Cg.has(a.message)||
0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){if(S("kevlar_gel_error_routing")){k=b;e={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===k?e.level="ERROR_LEVEL_ERROR":"WARNING"===k&&(e.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};k={pageUrl:window.location.href,kvPairs:[]};f=p(Object.keys(c));for(l=f.next();!l.done;l=f.next())l=l.value,k.kvPairs.push({key:"client."+l,value:String(c[l])});Ag("clientError",{errorMetadata:k,stackTrace:h,logMessage:e});
Rf()}b={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:g,level:b,"client.name":c.name},C:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.C){d&&(b.C.stack=d);d=p(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.C["client."+e]=c[e];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.C[e]=c[e]}Oe(R("ECATCHER_REPORT_HOST",
"")+"/error_204",b);Cg.add(a.message);Dg++}}}
function Gg(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Hg(a,b,c,d,e,f){Fg(a,void 0===b?"ERROR":b,c,d,f)}
;var Ig=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Ig,void 0);function Jg(a){fe(Ig,arguments)}
;function Kg(a){a&&(a.dataset?a.dataset[Lg("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Mg(a,b){return a?a.dataset?a.dataset[Lg(b)]:a.getAttribute("data-"+b):null}
var Ng={};function Lg(a){return Ng[a]||(Ng[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Og=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Pg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Qg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Og,""),c=c.replace(Pg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Rg(a,b,c)}
function Rg(a,b,c){c=void 0===c?null:c;var d=Sg(a),e=document.getElementById(d),f=e&&Mg(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=df(d,b),b=""+Ea(b),Tg[b]=f),g||(e=Ug(a,d,function(){Mg(e,"loaded")||(Kg(e),gf(d),T(Ka(hf,d),0))},c)))}
function Ug(a,b,c,d){d=void 0===d?null:d;var e=qc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gb(e,uc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Vg(a){a=Sg(a);var b=document.getElementById(a);b&&(hf(a),b.parentNode.removeChild(b))}
function Wg(a,b){if(a&&b){var c=""+Ea(b);(c=Tg[c])&&ff(c)}}
function Sg(a){var b=document.createElement("a");Fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Jb(a)}
var Tg={};var Xg=[],Yg=!1;function Zg(){if("1"!=Ya(he(),"args","privembed")){var a=function(){Yg=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
Qg("//static.doubleclick.net/instream/ad_status.js",a);Xg.push(fg(function(){Yg||"google_ad_status"in window||(Wg("//static.doubleclick.net/instream/ad_status.js",a),Yg=!0,Q("DCLKSTAT",3))},5E3))}}
function $g(){return parseInt(R("DCLKSTAT",0),10)}
;function ah(){this.g=!1;this.f=null}
ah.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,Qg(b,function(){g.g=!1;window.botguard?bh(g,c,d,f):(Vg(b),Eg(new Bg("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?bh(this,c,d,f):Eg(Error("Unable to load Botguard from JS")))};
function bh(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:ya)}catch(e){Eg(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){Eg(e)}c&&c(b)}}
ah.prototype.dispose=function(){this.f=null};var ch=new ah,dh=!1,eh=0,fh="";function gh(a){S("botguard_periodic_refresh")?eh=V():S("botguard_always_refresh")&&(fh=a)}
function hh(a){if(a){if(ch.g)return!1;if(S("botguard_periodic_refresh"))return 72E5<V()-eh;if(S("botguard_always_refresh"))return fh!=a}else return!1;return!dh}
function ih(){return!!ch.f}
function jh(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return ch.f?ch.f.invoke(void 0,void 0,a):null}
;var kh=D().toString();
function lh(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(kh)for(a=1,b=0;b<kh.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^kh.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var mh=z("ytLoggingDocDocumentNonce_")||lh();y("ytLoggingDocDocumentNonce_",mh,void 0);var nh=1;function oh(a){this.f=a}
function ph(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,void 0!==a.f.veCounter&&(b.veCounter=a.f.veCounter),void 0!==a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=ph(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
oh.prototype.toString=function(){return JSON.stringify(ph(this))};function qh(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function rh(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function sh(a){return R(rh(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",sh,void 0);function th(){var a=sh(0),b;a?b=new oh({veType:a,youtubeData:void 0}):b=null;return b}
function uh(){var a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function vh(a){a=void 0===a?0:a;var b=R(qh(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(S("kevlar_client_side_screens")||S("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",vh,void 0);function wh(a,b,c){var d=uh();(c=vh(c))&&delete d[c];b&&(d[a]=b)}
function xh(a){return uh()[a]}
y("yt_logging_screen.getCttAuthInfo",xh,void 0);function yh(a,b,c,d){c=void 0===c?0:c;if(a!==R(qh(c))||b!==R(rh(c)))if(wh(a,d,c),Q(qh(c),a),Q(rh(c),b),0==c||S("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&og("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:mh,clientScreenNonce:a},zg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",yh,void 0);function zh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(L(3,window.location.href));g&&f.push(g);g=J(L(3,d));if(0<=Oa(f,g)||!g&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(f=document.createElement("a"),Fb(f,d),d=f.href),d){g=d.match(Kb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:vh()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Jb(d).toString(36),e=e?Mb(e):"",tg(b,e,k||5))}else k=b,e="ST-"+Jb(d).toString(36),k=k?Mb(k):"",tg(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var r=void 0===r?window:r;c=r.location;a=Nb(a,l)+m;a=a instanceof H?a:yb(a);c.href=wb(a)}return!0}
;function Ah(a,b){this.version=a;this.args=b}
;function Bh(a,b){this.topic=a;this.f=b}
Bh.prototype.toString=function(){return this.topic};var Ch=z("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.N;P.prototype.publish=P.prototype.M;P.prototype.clear=P.prototype.clear;y("ytPubsub2Pubsub2Instance",Ch,void 0);var Dh=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Dh,void 0);var Eh=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Eh,void 0);var Fh=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Fh,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Gh(a,b){var c=Hh();c&&c.publish.call(c,a.toString(),a,b)}
function Ih(a){var b=Jh,c=Hh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Dh[d])try{if(f&&b instanceof Bh&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.H){var l=new h;h.H=l.version}var m=h.H}catch(r){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Ua(k.args))}catch(r){throw r.message="yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+r.message,r;}a.call(window,f)}catch(r){pe(r)}},Fh[b.toString()]?z("yt.scheduler.instance")?fg(g):T(g,0):g())});
Dh[d]=!0;Eh[b.toString()]||(Eh[b.toString()]=[]);Eh[b.toString()].push(d);return d}
function Kh(){var a=Lh,b=Ih(function(c){a.apply(void 0,arguments);Mh(b)});
return b}
function Mh(a){var b=Hh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete Dh[c]}))}
function Hh(){return z("ytPubsub2Pubsub2Instance")}
;function Nh(a){Ah.call(this,1,arguments);this.csn=a}
t(Nh,Ah);var Jh=new Bh("screen-created",Nh),Oh=[],Ph=0;function Qh(a,b,c){var d=S("use_default_events_client")?void 0:zg;b={csn:a,parentVe:ph(b),childVes:Qa(c,function(f){return ph(f)})};
c=p(c);for(var e=c.next();!e.done;e=c.next())e=ph(e.value),(ab(e)||!e.trackingParams&&!e.veType)&&Hg(Error("Child VE logged with no data"),"WARNING");c={da:xh(a),P:a};"UNDEFINED_CSN"==a?Rh("visualElementAttached",b,c):d?og("visualElementAttached",b,d,c):Ag("visualElementAttached",b,c)}
function Rh(a,b,c){Oh.push({payloadName:a,payload:b,options:c});Ph||(Ph=Kh())}
function Lh(a){if(Oh){for(var b=p(Oh),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,og(c.payloadName,c.payload,null,c.options));Oh.length=0}Ph=0}
;function Sh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||db(b);this.assets=a.assets||{};this.attrs=a.attrs||db(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Sh.prototype.clone=function(){var a=new Sh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Aa(c)?a[b]=db(c):a[b]=c}return a};function Th(){N.call(this);this.f=[]}
t(Th,N);Th.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.qb)}N.prototype.o.call(this)};var Uh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Vh(a){a=a||"";if(window.spf){var b=a.match(Uh);spf.style.load(a,b?b[1]:"",void 0)}else Wh(a)}
function Wh(a){var b=Xh(a),c=document.getElementById(b),d=c&&Mg(c,"loaded");d||c&&!d||(c=Yh(a,b,function(){Mg(c,"loaded")||(Kg(c),gf(b),T(Ka(hf,b),0))}))}
function Yh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=uc(a);d.rel="stylesheet";d.href=kb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Xh(a){var b=qc(document,"A");Fb(b,new H(ub,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Jb(a)}
;function Zh(a,b,c,d){N.call(this);var e=this;this.m=this.X=a;this.U=b;this.w=!1;this.api={};this.V=this.D=null;this.F=new P;bd(this,Ka(cd,this.F));this.j={};this.R=this.W=this.h=this.ca=this.f=null;this.I=!1;this.l=this.A=null;this.Y={};this.ua=["onReady"];this.ba=null;this.ka=NaN;this.S={};this.i=d;$h(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ma.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Na.bind(this));this.Z("onAdAnnounce",this.wa.bind(this));this.va=new Th(this);bd(this,Ka(cd,this.va));
this.T=0;c?this.T=T(function(){e.loadNewVideoConfig(c)},0):d&&(ai(this),bi(this))}
t(Zh,N);n=Zh.prototype;n.getId=function(){return this.U};
n.loadNewVideoConfig=function(a){if(!this.g){this.T&&(U(this.T),this.T=0);a instanceof Sh||(a=new Sh(a));this.ca=a;this.f=a.clone();ai(this);this.W||(this.W=ci(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=Bc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=Bc(Number(a)||a);bi(this);this.w&&di(this)}};
function ai(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
n.Ba=function(){return this.ca};
function di(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function ei(a){var b=!0,c=fi(a);c&&a.f&&(a=gi(a),b=Mg(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function bi(a){if(!a.g&&!a.I){var b=ei(a);if(b&&"html5"==(fi(a)?"html5":null))a.R="html5",a.w||hi(a);else if(ii(a),a.R="html5",b&&a.l)a.X.appendChild(a.l),hi(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.A=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==re(d||"").player_bootstrap_method?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.X,e,a.i);hi(a)};
a.I=!0;b?a.A():(Qg(gi(a),a.A),(b=a.i?a.i.cssUrl:a.f.assets.css)&&Vh(b),ji(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function fi(a){var b=mc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function hi(a){if(!a.g){var b=fi(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.I=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||ki(a)):a.ka=T(function(){hi(a)},50)}}
function ki(a){$h(a);a.w=!0;var b=fi(a);b.addEventListener&&(a.D=li(a,b,"addEventListener"));b.removeEventListener&&(a.V=li(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=li(a,b,e))}for(var f in a.j)a.D(f,a.j[f]);di(a);a.W&&a.W(a.api);a.F.M("onReady",a.api)}
function li(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ba=e,qe(e))}}}
function $h(a){a.w=!1;if(a.V)for(var b in a.j)a.V(b,a.j[b]);for(var c in a.S)U(parseInt(c,10));a.S={};a.D=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Ra.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ca.bind(a);a.api.getPlayerType=a.Da.bind(a);a.api.getCurrentVideoConfig=a.Ba.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.La.bind(a)}
n.La=function(){return this.w};
n.Z=function(a,b){var c=this,d=ci(this,b);if(d){if(!(0<=Oa(this.ua,a)||this.j[a])){var e=mi(this,a);this.D&&this.D(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.w&&T(function(){d(c.api)},0)}};
n.Ra=function(a,b){if(!this.g){var c=ci(this,b);c&&Pd(this.F,a,c)}};
function ci(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(x,arguments)};
a.Y[b]=c}return c?c:null}
function mi(a,b){var c="ytPlayer"+b+a.U;a.j[b]=c;x[c]=function(d){var e=T(function(){if(!a.g){a.F.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
bb(a.S,String(e))};
return c}
n.wa=function(a){gf("a11y-announce",a)};
n.Ma=function(a){gf("WATCH_LATER_VIDEO_ADDED",a)};
n.Na=function(a){gf("WATCH_LATER_VIDEO_REMOVED",a)};
n.Da=function(){return this.R||(fi(this)?"html5":null)};
n.Ca=function(){return this.ba};
function ii(a){a.cancel();$h(a);a.R=null;a.f&&(a.f.loaded=!1);var b=fi(a);b&&(ei(a)||!ji(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
n.cancel=function(){this.A&&Wg(gi(this),this.A);U(this.ka);this.I=!1};
n.o=function(){ii(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){pe(b)}this.Y=null;for(var a in this.j)x[this.j[a]]=null;this.ca=this.f=this.api=null;delete this.X;delete this.m;N.prototype.o.call(this)};
function ji(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function gi(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var ni={},oi="player_uid_"+(1E9*Math.random()>>>0);function pi(a){delete ni[a.getId()]}
;function qi(a,b){Ah.call(this,1,arguments)}
t(qi,Ah);function ri(a,b){Ah.call(this,1,arguments)}
t(ri,Ah);var si=new Bh("aft-recorded",qi),ti=new Bh("timing-sent",ri);var ui=window;function vi(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var wi=ui.performance||ui.mozPerformance||ui.msPerformance||ui.webkitPerformance||new vi;var xi=!1;function yi(a){var b=zi(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Ai(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},La("ytcsi."+(a||"")+"data_",b));return b}
function Bi(a){a=Ai(a);a.info||(a.info={});return a.info}
function zi(a){a=Ai(a);a.tick||(a.tick={});return a.tick}
function Ci(a){var b=Ai(a).nonce;b||(b=lh(),Ai(a).nonce=b);return b}
function Di(a){var b=zi(a||""),c=yi(a);c&&!xi&&(Gh(si,new qi(Math.round(c-b._start),a)),xi=!0)}
;function Ei(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Fi(a)||c.some(function(e){return!Fi(e)}))throw Error("Only objects may be merged.");
c=p(c);for(d=c.next();!d.done;d=c.next())Gi(a,d.value);return a}
function Gi(a,b){for(var c in b)if(Fi(b[c])){if(c in a&&!Fi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Gi(a[c],b[c])}else if(Hi(b[c])){if(c in a&&!Hi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ii(a[c],b[c])}else a[c]=b[c];return a}
function Ii(a,b){for(var c=p(b),d=c.next();!d.done;d=c.next())d=d.value,Fi(d)?a.push(Gi({},d)):Hi(d)?a.push(Ii([],d)):a.push(d);return a}
function Fi(a){return"object"===typeof a&&!Array.isArray(a)}
function Hi(a){return"object"===typeof a&&Array.isArray(a)}
;function Ji(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function Ki(a){a=a||"";var b=z("ytcsi.reference");b||(Ji(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=Ji(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Li=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",Li,void 0);function Mi(){this.f=0}
function Ni(){Mi.instance||(Mi.instance=new Mi);return Mi.instance}
Mi.prototype.tick=function(a,b,c){Oi(this,"tick_"+a+"_"+b)||Ag("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Mi.prototype.info=function(a,b){var c=Object.keys(a).join("");Oi(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,Ag("latencyActionInfo",a))};
Mi.prototype.span=function(a,b){var c=Object.keys(a).join("");Oi(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,Ag("latencyActionSpan",a))};
function Oi(a,b){Li[b]=Li[b]||{count:0};var c=Li[b];c.count++;c.time=V();a.f||(a.f=gg(function(){var d=V(),e;for(e in Li)Li[e]&&6E4<d-Li[e].time&&delete Li[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Bg("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?Eg(c):Fg(c)),!0):!1}
;var Y={},Pi=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",
Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid=
"requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Qi="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ri={},Si=(Ri.ccs="CANARY_STATE_",Ri.mver="MEASUREMENT_VERSION_",Ri.pis="PLAYER_INITIALIZED_STATE_",
Ri.yt_pt="LATENCY_PLAYER_",Ri.pa="LATENCY_ACTION_",Ri.yt_vst="VIDEO_STREAM_TYPE_",Ri),Ti="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function Ui(a){return!!R("FORCE_CSI_ON_GEL",!1)||S("csi_on_gel")||!!Ai(a).useGel}
function Vi(a){a=Ai(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function Wi(a,b,c){if(null!==b)if(Bi(c)[a]=b,Ui(c)){var d=b;b=Vi(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a in Pi){if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}b=Pi[a];0<=Oa(Qi,b)&&(d=!!d);a in Si&&"string"===typeof d&&(d=Si[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Ei({},e)}else 0<=Oa(Ti,a)||Eg(new Bg("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Ui(c)&&(b=Ki(c||""),Ei(b.info,f),b=Vi(c),"gelInfos"in b||(b.gelInfos={}),Ei(b.gelInfos,f),c=Ci(c),Ni().info(f,c))}else Ki(c||"").info[a]=b}
function Xi(a,b,c){var d=zi(c);if(S("use_first_tick")&&Yi(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;wi.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),wi.mark(e))}e=b||V();d[a]=e;e=Vi(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||V();if(Ui(c)){Ki(c||"").tick[a]=b||V();e=Ci(c);if("_start"===a){var f=Ni();Oi(f,"baseline_"+e)||Ag("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Ni().tick(a,e,b);Di(c);e=!0}else e=!1;if(!e){if(!z("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=zi(c),z("ytglobal.timing"+(c||"")+"ready_")&&f&&Yi("_start")&&yi(c)))if(Di(c),c)Zi(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Zi(c)}Ki(c||"").tick[a]=b||V()}return d[a]}
function Yi(a,b){var c=zi(b);return a in c}
function Zi(a){if(!Ui(a)){var b=zi(a),c=Bi(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=yi(a);var h=zi(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Bi(a).yt_pvis&&"youtube"===e&&(Wi("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=V();m={};e=[];for(var r in b)"_"!==r.charAt(0)&&(k=Math.round(b[r]-d),m[r]=k,e.push(r+"."+k));f.rt=
e.join(",");b=!!c.ap;S("debug_csi_data")&&(c=z("yt.timing.csiData"),c||(c=[],La("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var v in f)f.hasOwnProperty(v)&&(c+="&"+v+"="+f[v]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;Ze(f,q)||We(f,void 0,void 0,void 0,q)}else We(f);y("yt.timing."+(a||"")+"pingSent_",!0,void 0);Gh(ti,new ri(m.aft+(Number(g)||0),a))}}
if(S("overwrite_polyfill_on_logging_lib_loaded")){var $i=window;$i.ytcsi&&($i.ytcsi.info=Wi,$i.ytcsi.tick=Xi)};C(wi.clearResourceTimings||wi.webkitClearResourceTimings||wi.mozClearResourceTimings||wi.msClearResourceTimings||wi.oClearResourceTimings||ya,wi);function aj(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function bj(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return cj(a)}
function cj(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function dj(a,b,c,d){if(Da(a)&&!Ba(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ej(a){a=void 0===a?!1:a;N.call(this);this.f=new P(a);bd(this,Ka(cd,this.f))}
E(ej,N);ej.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
ej.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function fj(a,b,c){ej.call(this);this.h=a;this.i=b;this.l=c}
t(fj,ej);function gj(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(rd(a),d.i))}}
fj.prototype.o=function(){this.i=this.h=null;ej.prototype.o.call(this)};function hj(a){N.call(this);this.f=a;this.f.subscribe("command",this.sa,this);this.h={};this.j=!1}
t(hj,N);n=hj.prototype;n.start=function(){this.j||this.g||(this.j=!0,gj(this.f,"RECEIVING"))};
n.sa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.Ta,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&ij(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=jj(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=kj(a,c))&&this.j&&!this.g&&gj(this.f,a,c))}}};
n.Ta=function(a,b){this.j&&!this.g&&gj(this.f,a,this.fa(a,b))};
n.fa=function(a,b){if(null!=b)return{value:b}};
function ij(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
n.o=function(){var a=this.f;a.g||Pd(a.f,"command",this.sa,this);this.f=null;for(var b in this.h)ij(this,b);N.prototype.o.call(this)};function lj(a,b){hj.call(this,b);this.i=a;this.start()}
t(lj,hj);lj.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
lj.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function jj(a,b){switch(a){case "loadVideoById":return b=cj(b),[b];case "cueVideoById":return b=cj(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=dj(b),[b];case "cuePlaylist":return b=dj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function kj(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
lj.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return hj.prototype.fa.call(this,a,b)};
lj.prototype.o=function(){hj.prototype.o.call(this);delete this.i};function mj(a,b,c){N.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.w="*";this.i=c;this.sessionId=null;this.channel="widget";this.A=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.A&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.w=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Oa(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
t(mj,N);mj.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.w)}catch(e){qe(e)}}};
mj.prototype.o=function(){window.removeEventListener("message",this.m);N.prototype.o.call(this)};function nj(){var a=this.g=new mj(!!R("WIDGET_ID_ENFORCE")),b=C(this.Qa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
n=nj.prototype;n.Qa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,oj(this,a)),this.j[a]=!0)):this.na(a,b,c)};
n.na=function(){};
function oj(a,b){return C(function(c){this.sendMessage(b,c)},a)}
n.addEventListener=function(){};
n.Aa=function(){this.l=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");G(this.i,this.ta,this);this.i=[]};
n.ga=function(){return null};
function pj(a,b){a.sendMessage("infoDelivery",b)}
n.ta=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
n.sendMessage=function(a,b){this.ta({event:a,info:void 0==b?null:b})};
n.dispose=function(){this.g=null};function qj(a){nj.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Oa,this));this.addEventListener("onVideoProgress",C(this.Xa,this));this.addEventListener("onVolumeChange",C(this.Ya,this));this.addEventListener("onApiChange",C(this.Sa,this));this.addEventListener("onPlaybackQualityChange",C(this.Ua,this));this.addEventListener("onPlaybackRateChange",C(this.Va,this));this.addEventListener("onStateChange",C(this.Wa,this));this.addEventListener("onWebglSettingsChanged",C(this.Za,
this))}
t(qj,nj);n=qj.prototype;n.na=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&aj(a)){var d=b;if(Da(d[0])&&!Ba(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=cj.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=bj.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=dj.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);aj(a)&&pj(this,this.ga())}};
n.Oa=function(){var a=C(this.Aa,this);this.g.f=a};
n.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
n.ga=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ta(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
n.Wa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());pj(this,a)};
n.Ua=function(a){pj(this,{playbackQuality:a})};
n.Va=function(a){pj(this,{playbackRate:a})};
n.Sa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.Ya=function(){pj(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
n.Xa=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());pj(this,a)};
n.Za=function(){var a={sphericalProperties:this.f.getSphericalProperties()};pj(this,a)};
n.dispose=function(){nj.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function rj(a,b,c){N.call(this);this.f=a;this.i=c;this.j=X(window,"message",C(this.l,this));this.h=new fj(this,a,b);bd(this,Ka(cd,this.h))}
t(rj,N);rj.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
rj.prototype.o=function(){bg(this.j);this.f=null;N.prototype.o.call(this)};function sj(){var a=db(tj),b;return Ed(new O(function(c,d){a.onSuccess=function(e){Ee(e)?c(e):d(new uj("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new uj("Unknown request error","net.unknown",e))};
a.O=function(e){d(new uj("Request timed out","net.timeout",e))};
b=Oe("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Fd&&b.abort();
return Cd(c)})}
function uj(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(uj,F);function vj(){this.g=0;this.f=null}
vj.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),xd(a)?a:wj(a)):2===this.g&&b?(a=b.call(c,this.f),xd(a)?a:xj(a)):this};
vj.prototype.getValue=function(){return this.f};
vj.prototype.$goog_Thenable=!0;function xj(a){var b=new vj;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function wj(a){var b=new vj;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function yj(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof zj;this.isTimeout=a instanceof uj&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Fd}
t(yj,F);yj.prototype.name="BiscottiError";function zj(){F.call(this,"Biscotti ID is missing from server")}
t(zj,F);zj.prototype.name="BiscottiMissingError";var tj={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Aj=null;function ke(){if("1"===Ya(he(),"args","privembed"))return Cd(Error("Biscotti ID is not available in private embed mode"));Aj||(Aj=Ed(sj().then(Bj),function(a){return Cj(2,a)}));
return Aj}
function Bj(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new zj;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new zj;a=a.id;le(a);Aj=wj(a);Dj(18E5,2);return a}
function Cj(a,b){var c=new yj(b);le("");Aj=xj(c);0<a&&Dj(12E4,a-1);throw c;}
function Dj(a,b){T(function(){Ed(sj().then(Bj,function(c){return Cj(b,c)}),ya)},a)}
function Ej(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ke()}catch(b){return Cd(b)}}
;function Fj(a){if("1"!==Ya(he(),"args","privembed")){a&&je();try{Ej().then(function(){},function(){}),T(Fj,18E5)}catch(b){pe(b)}}}
;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Gj(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=ic.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
n=Gj.prototype;n.get=function(a,b){Hj(a);Ij(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
n.set=function(a,b){Hj(a);Ij(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
n.remove=function(a){Hj(a);Ij(a);delete Z[a]};
n.save=function(){tg(this.f,this.dump(),63072E3)};
n.clear=function(){for(var a in Z)delete Z[a]};
n.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ij(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Hj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Jj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
za(Gj);var Kj=null,Lj=null,Mj=null,Nj={};function Oj(a){var b=a.id;a=a.ve_type;var c=nh++;a=new oh({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Nj[b]=a;b=vh();c=th();b&&c&&Qh(b,c,[a])}
function Pj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(yh(b,a),a=th()))for(var c in Nj){var d=Nj[c];d&&Qh(b,a,[d])}}
function Qj(a){Nj[a.id]=new oh({trackingParams:a.tracking_params})}
function Rj(a){var b=vh(),c=Nj[a.id];if(b&&c){a=S("use_default_events_client")?void 0:zg;c={csn:b,ve:ph(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={da:xh(b),P:b};"UNDEFINED_CSN"==b?Rh("visualElementGestured",c,d):a?og("visualElementGestured",c,a,d):Ag("visualElementGestured",c,d)}}
function Sj(a){a=a.ids;var b=vh();if(b)for(var c=0;c<a.length;c++){var d=Nj[a[c]];if(d){var e=b,f=S("use_default_events_client")?void 0:zg;d={csn:e,ve:ph(d),eventType:1};var g={da:xh(e),P:e};"UNDEFINED_CSN"==e?Rh("visualElementShown",d,g):f?og("visualElementShown",d,f,g):Ag("visualElementShown",d,g)}}}
;y("yt.setConfig",Q,void 0);y("yt.config.set",Q,void 0);y("yt.setMsg",Jg,void 0);y("yt.msgs.set",Jg,void 0);y("yt.logging.errors.log",Hg,void 0);
y("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Fj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?mc(b):b;var e=oi+"_"+Ea(b),f=ni[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Zh(b,e,a,void 0),ni[e]=f,gf("player-added",f.api),bd(f,Ka(pi,f)));a=f.api;Kj=a;a.addEventListener("onScreenChanged",Pj);a.addEventListener("onLogClientVeCreated",Oj);a.addEventListener("onLogServerVeCreated",Qj);a.addEventListener("onLogVeClicked",Rj);a.addEventListener("onLogVesShown",Sj);d=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Mj=new qj(a):R("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(Lj=new rj(window.parent,d,c),Mj=new lj(a,Lj.h));
c=R("BG_P",void 0);hh(c)&&(R("BG_I")||R("BG_IU"))&&(dh=!0,ch.initialize(R("BG_I",null),R("BG_IU",null),c,gh,void 0,!!R("BG_CE",!1)));Zg()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){We(a+"mac_204?action_fcts=1");return!0},void 0);
var Tj=oe(function(){Xi("ol",void 0,void 0);var a=Gj.getInstance(),b=!!((Jj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&gd(document.body,"exp-invert-logo"))if(c&&!gd(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!gd(d,"inverted-hdpi")){var e=ed(d);fd(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&gd(document.body,"inverted-hdpi")&&hd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Jj(b)||
0,d=c?d|67108864:d&-67108865,0==d?delete Z[b]:(c=d.toString(16),Z[b]=c.toString()),a.save())}),Uj=oe(function(){var a=Kj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&ch.dispose();a=0;for(var b=Xg.length;a<b;a++){var c=Xg[a];if(!isNaN(c)){var d=z("yt.scheduler.instance.cancelJob");d?d(c):U(c)}}Xg.length=0;Vg("//static.doubleclick.net/instream/ad_status.js");Yg=!1;Q("DCLKSTAT",0);dd(Mj,Lj);if(a=Kj)a.removeEventListener("onScreenChanged",Pj),a.removeEventListener("onLogClientVeCreated",Oj),a.removeEventListener("onLogServerVeCreated",Qj),a.removeEventListener("onLogVeClicked",Rj),a.removeEventListener("onLogVesShown",
Sj),a.destroy();Nj={}});
window.addEventListener?(window.addEventListener("load",Tj),window.addEventListener("unload",Uj)):window.attachEvent&&(window.attachEvent("onload",Tj),window.attachEvent("onunload",Uj));La("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||ih);La("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||jh);La("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||$g);
La("yt.player.exports.navigate",z("yt.player.exports.navigate")||zh);La("yt.util.activity.init",z("yt.util.activity.init")||jg);La("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||mg);La("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||kg);}).call(this);
