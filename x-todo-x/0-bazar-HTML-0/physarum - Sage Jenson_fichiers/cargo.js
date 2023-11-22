//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

/*
 *	Handlebars v1.0.rs.1
 *	https://github.com/wycats/handlebars.js/
 * 	http://handlebarsjs.com/
 */

/* 
 * jQuery NDD
 * Copyright 2010 Guillaume Bort
 * http://github.com/guillaumebort/jquery-ndd
 *
 * Updated by Cargo 2013/02/08
 */

/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */

 /*
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 */

/* 
 * jQuery loadFiles Plugin
 * Usage:
 * $.loadFiles('/this.js', '/that.js', '/other.js').done(function(data) {
 * 	console.log('Multiple files have finished loading.');
 * }).fail(function(xhr, text_status) {
 * 	console.log('One of the files could not be loaded.');
 * });
 */

/*
 * touchSwipe - jQuery Plugin
 * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * http://labs.skinkers.com/touchSwipe/
 * http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson (www.skinkers.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * $version: 1.3.3
 */

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

/*
* FastClick v1.0.6
* https://github.com/ftlabs/fastclick
*
* No restrictions licence 
*/

/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 */

/*! mobile-detect - v0.4.3-snapshot - 2014-11-12
github.com/hgoebl/mobile-detect.js */

/*
 *	Cargo slideshow 2.0
 */

 /*
  *	requestAnimationFrame polyfill https://gist.github.com/paulirish/1579671
  * Stakach's version with cancellation support 
  */
 
/*
 *
 *  indexOf polyfill
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 *  
 */

 if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
      if ( this === undefined || this === null ) {
        throw new TypeError( '"this" is null or not defined' );
      }

      var length = this.length >>> 0; // Hack to convert object.length to a UInt32

      fromIndex = +fromIndex || 0;

      if (Math.abs(fromIndex) === Infinity) {
        fromIndex = 0;
      }

      if (fromIndex < 0) {
        fromIndex += length;
        if (fromIndex < 0) {
          fromIndex = 0;
        }
      }

      for (;fromIndex < length; fromIndex++) {
        if (this[fromIndex] === searchElement) {
          return fromIndex;
        }
      }

      return -1;
    };
  }



/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

/* Add the browser functionality back into jQuery because it was deprocated by 1.9 */
jQuery.browser = {}; jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()); jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase()); jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase()); jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase()); 

// Underscore.js 1.4.4
// ===================

// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);



//     Backbone.js 1.0.0

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
(function(){var root=this;var previousBackbone=root.Backbone;var array=[];var push=array.push;var slice=array.slice;var splice=array.splice;var Backbone;if(typeof exports!=="undefined")Backbone=exports;else Backbone=root.Backbone={};Backbone.VERSION="1.0.0";var _=root._;if(!_&&typeof require!=="undefined")_=require("underscore");Backbone.$=root.jQuery||root.Zepto||root.ender||root.$;Backbone.noConflict=function(){root.Backbone=previousBackbone;return this};Backbone.emulateHTTP=false;Backbone.emulateJSON=
false;var Events=Backbone.Events={on:function(name,callback,context){if(!eventsApi(this,"on",name,[callback,context])||!callback)return this;this._events||(this._events={});var events=this._events[name]||(this._events[name]=[]);events.push({callback:callback,context:context,ctx:context||this});return this},once:function(name,callback,context){if(!eventsApi(this,"once",name,[callback,context])||!callback)return this;var self=this;var once=_.once(function(){self.off(name,once);callback.apply(this,arguments)});
once._callback=callback;return this.on(name,once,context)},off:function(name,callback,context){var retain,ev,events,names,i,l,j,k;if(!this._events||!eventsApi(this,"off",name,[callback,context]))return this;if(!name&&!callback&&!context){this._events={};return this}names=name?[name]:_.keys(this._events);for(i=0,l=names.length;i<l;i++){name=names[i];if(events=this._events[name]){this._events[name]=retain=[];if(callback||context)for(j=0,k=events.length;j<k;j++){ev=events[j];if(callback&&callback!==
ev.callback&&callback!==ev.callback._callback||context&&context!==ev.context)retain.push(ev)}if(!retain.length)delete this._events[name]}}return this},trigger:function(name){if(!this._events)return this;var args=slice.call(arguments,1);if(!eventsApi(this,"trigger",name,args))return this;var events=this._events[name];var allEvents=this._events.all;if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,arguments);return this},stopListening:function(obj,name,callback){var listeners=
this._listeners;if(!listeners)return this;var deleteListener=!name&&!callback;if(typeof name==="object")callback=this;if(obj)(listeners={})[obj._listenerId]=obj;for(var id in listeners){listeners[id].off(name,callback,this);if(deleteListener)delete this._listeners[id]}return this}};var eventSplitter=/\s+/;var eventsApi=function(obj,action,name,rest){if(!name)return true;if(typeof name==="object"){for(var key in name)obj[action].apply(obj,[key,name[key]].concat(rest));return false}if(eventSplitter.test(name)){var names=
name.split(eventSplitter);for(var i=0,l=names.length;i<l;i++)obj[action].apply(obj,[names[i]].concat(rest));return false}return true};var triggerEvents=function(events,args){var ev,i=-1,l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l)(ev=events[i]).callback.call(ev.ctx);return;case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1);return;case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2);return;case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,
a1,a2,a3);return;default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args)}};var listenMethods={listenTo:"on",listenToOnce:"once"};_.each(listenMethods,function(implementation,method){Events[method]=function(obj,name,callback){var listeners=this._listeners||(this._listeners={});var id=obj._listenerId||(obj._listenerId=_.uniqueId("l"));listeners[id]=obj;if(typeof name==="object")callback=this;obj[implementation](name,callback,this);return this}});Events.bind=Events.on;Events.unbind=Events.off;
_.extend(Backbone,Events);var Model=Backbone.Model=function(attributes,options){var defaults;var attrs=attributes||{};options||(options={});this.cid=_.uniqueId("c");this.attributes={};if(options.collection)this.collection=options.collection;if(options.parse)attrs=this.parse(attrs,options)||{};options._attrs||(options._attrs=attrs);if(defaults=_.result(this,"defaults"))attrs=_.defaults({},attrs,defaults);this.set(attrs,options);this.changed={};this.initialize.apply(this,arguments)};_.extend(Model.prototype,
Events,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(options){return _.clone(this.attributes)},sync:function(){return Backbone.sync.apply(this,arguments)},get:function(attr){return this.attributes[attr]},escape:function(attr){return _.escape(this.get(attr))},has:function(attr){return this.get(attr)!=null},set:function(key,val,options){var attr,attrs,unset,changes,silent,changing,prev,current;if(key==null)return this;if(typeof key==="object"){attrs=key;
options=val}else(attrs={})[key]=val;options||(options={});if(!this._validate(attrs,options))return false;unset=options.unset;silent=options.silent;changes=[];changing=this._changing;this._changing=true;if(!changing){this._previousAttributes=_.clone(this.attributes);this.changed={}}current=this.attributes,prev=this._previousAttributes;if(this.idAttribute in attrs)this.id=attrs[this.idAttribute];for(attr in attrs){val=attrs[attr];if(!_.isEqual(current[attr],val))changes.push(attr);if(!_.isEqual(prev[attr],
val))this.changed[attr]=val;else delete this.changed[attr];unset?delete current[attr]:current[attr]=val}if(!silent){if(changes.length)this._pending=true;for(var i=0,l=changes.length;i<l;i++)this.trigger("change:"+changes[i],this,current[changes[i]],options)}if(changing)return this;if(!silent)while(this._pending){this._pending=false;this.trigger("change",this,options)}this._pending=false;this._changing=false;return this},unset:function(attr,options){return this.set(attr,void 0,_.extend({},options,
{unset:true}))},clear:function(options){var attrs={};for(var key in this.attributes)attrs[key]=void 0;return this.set(attrs,_.extend({},options,{unset:true}))},hasChanged:function(attr){if(attr==null)return!_.isEmpty(this.changed);return _.has(this.changed,attr)},changedAttributes:function(diff){if(!diff)return this.hasChanged()?_.clone(this.changed):false;var val,changed=false;var old=this._changing?this._previousAttributes:this.attributes;for(var attr in diff){if(_.isEqual(old[attr],val=diff[attr]))continue;
(changed||(changed={}))[attr]=val}return changed},previous:function(attr){if(attr==null||!this._previousAttributes)return null;return this._previousAttributes[attr]},previousAttributes:function(){return _.clone(this._previousAttributes)},fetch:function(options){options=options?_.clone(options):{};if(options.parse===void 0)options.parse=true;var model=this;var success=options.success;options.success=function(resp){if(!model.set(model.parse(resp,options),options))return false;if(success)success(model,
resp,options);model.trigger("sync",model,resp,options)};wrapError(this,options);return this.sync("read",this,options)},save:function(key,val,options){var attrs,method,xhr,attributes=this.attributes;if(key==null||typeof key==="object"){attrs=key;options=val}else(attrs={})[key]=val;options=_.extend({validate:true},options);if(attrs&&!options.wait){if(!this.set(attrs,options))return false}else if(!this._validate(attrs,options))return false;if(attrs&&options.wait)this.attributes=_.extend({},attributes,
attrs);if(options.parse===void 0)options.parse=true;var model=this;var success=options.success;options.success=function(resp){model.attributes=attributes;var serverAttrs=model.parse(resp,options);if(options.wait)serverAttrs=_.extend(attrs||{},serverAttrs);if(_.isObject(serverAttrs)&&!model.set(serverAttrs,options))return false;if(success)success(model,resp,options);model.trigger("sync",model,resp,options)};wrapError(this,options);method=this.isNew()?"create":options.patch?"patch":"update";if(method===
"patch")options.attrs=attrs;xhr=this.sync(method,this,options);if(attrs&&options.wait)this.attributes=attributes;return xhr},destroy:function(options){options=options?_.clone(options):{};var model=this;var success=options.success;var destroy=function(){model.trigger("destroy",model,model.collection,options)};options.success=function(resp){if(options.wait||model.isNew())destroy();if(success)success(model,resp,options);if(!model.isNew())model.trigger("sync",model,resp,options)};if(this.isNew()){options.success();
return false}wrapError(this,options);var xhr=this.sync("delete",this,options);if(!options.wait)destroy();return xhr},url:function(){var base=_.result(this,"urlRoot")||_.result(this.collection,"url")||urlError();if(this.isNew())return base;return base+(base.charAt(base.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(resp,options){return resp},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(options){return this._validate({},
_.extend(options||{},{validate:true}))},_validate:function(attrs,options){if(!options.validate||!this.validate)return true;attrs=_.extend({},this.attributes,attrs);var error=this.validationError=this.validate(attrs,options)||null;if(!error)return true;this.trigger("invalid",this,error,_.extend(options||{},{validationError:error}));return false}});var modelMethods=["keys","values","pairs","invert","pick","omit"];_.each(modelMethods,function(method){Model.prototype[method]=function(){var args=slice.call(arguments);
args.unshift(this.attributes);return _[method].apply(_,args)}});var Collection=Backbone.Collection=function(models,options){options||(options={});if(options.model)this.model=options.model;if(options.comparator!==void 0)this.comparator=options.comparator;this._reset();this.initialize.apply(this,arguments);if(models)this.reset(models,_.extend({silent:true},options))};var setOptions={add:true,remove:true,merge:true};var addOptions={add:true,remove:false};_.extend(Collection.prototype,Events,{model:Model,
initialize:function(){},toJSON:function(options){return this.map(function(model){return model.toJSON(options)})},sync:function(){return Backbone.sync.apply(this,arguments)},add:function(models,options){return this.set(models,_.extend({merge:false},options,addOptions))},remove:function(models,options){models=_.isArray(models)?models.slice():[models];options||(options={});var i,l,index,model;for(i=0,l=models.length;i<l;i++){model=this.get(models[i]);if(!model)continue;delete this._byId[model.id];delete this._byId[model.cid];
index=this.indexOf(model);this.models.splice(index,1);this.length--;if(!options.silent){options.index=index;model.trigger("remove",model,this,options)}this._removeReference(model)}return this},set:function(models,options){options=_.defaults({},options,setOptions);if(options.parse)models=this.parse(models,options);if(!_.isArray(models))models=models?[models]:[];var i,l,model,attrs,existing,sort;var at=options.at;var sortable=this.comparator&&at==null&&options.sort!==false;var sortAttr=_.isString(this.comparator)?
this.comparator:null;var toAdd=[],toRemove=[],modelMap={};var add=options.add,merge=options.merge,remove=options.remove;var order=!sortable&&add&&remove?[]:false;for(i=0,l=models.length;i<l;i++){if(!(model=this._prepareModel(attrs=models[i],options)))continue;if(existing=this.get(model)){if(remove)modelMap[existing.cid]=true;if(merge){attrs=attrs===model?model.attributes:options._attrs;existing.set(attrs,options);if(sortable&&!sort&&existing.hasChanged(sortAttr))sort=true}}else if(add){toAdd.push(model);
model.on("all",this._onModelEvent,this);this._byId[model.cid]=model;if(model.id!=null)this._byId[model.id]=model}if(order)order.push(existing||model);delete options._attrs}if(remove){for(i=0,l=this.length;i<l;++i)if(!modelMap[(model=this.models[i]).cid])toRemove.push(model);if(toRemove.length)this.remove(toRemove,options)}if(toAdd.length||order&&order.length){if(sortable)sort=true;this.length+=toAdd.length;if(at!=null)splice.apply(this.models,[at,0].concat(toAdd));else{if(order)this.models.length=
0;push.apply(this.models,order||toAdd)}}if(sort)this.sort({silent:true});if(options.silent)return this;for(i=0,l=toAdd.length;i<l;i++)(model=toAdd[i]).trigger("add",model,this,options);if(sort||order&&order.length)this.trigger("sort",this,options);return this},reset:function(models,options){options||(options={});for(var i=0,l=this.models.length;i<l;i++)this._removeReference(this.models[i]);options.previousModels=this.models;this._reset();this.add(models,_.extend({silent:true},options));if(!options.silent)this.trigger("reset",
this,options);return this},push:function(model,options){model=this._prepareModel(model,options);this.add(model,_.extend({at:this.length},options));return model},pop:function(options){var model=this.at(this.length-1);this.remove(model,options);return model},unshift:function(model,options){model=this._prepareModel(model,options);this.add(model,_.extend({at:0},options));return model},shift:function(options){var model=this.at(0);this.remove(model,options);return model},slice:function(){return slice.apply(this.models,
arguments)},get:function(obj){if(obj==null)return void 0;return this._byId[obj.id]||this._byId[obj.cid]||this._byId[obj]},at:function(index){return this.models[index]},where:function(attrs,first){if(_.isEmpty(attrs))return first?void 0:[];return this[first?"find":"filter"](function(model){for(var key in attrs)if(attrs[key]!==model.get(key))return false;return true})},findWhere:function(attrs){return this.where(attrs,true)},sort:function(options){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");
options||(options={});if(_.isString(this.comparator)||this.comparator.length===1)this.models=this.sortBy(this.comparator,this);else this.models.sort(_.bind(this.comparator,this));if(!options.silent)this.trigger("sort",this,options);return this},sortedIndex:function(model,value,context){value||(value=this.comparator);var iterator=_.isFunction(value)?value:function(model){return model.get(value)};return _.sortedIndex(this.models,model,iterator,context)},pluck:function(attr){return _.invoke(this.models,
"get",attr)},fetch:function(options){options=options?_.clone(options):{};if(options.parse===void 0)options.parse=true;var success=options.success;var collection=this;options.success=function(resp){var method=options.reset?"reset":"set";collection[method](resp,options);if(success)success(collection,resp,options);collection.trigger("sync",collection,resp,options)};wrapError(this,options);return this.sync("read",this,options)},create:function(model,options){options=options?_.clone(options):{};if(!(model=
this._prepareModel(model,options)))return false;if(!options.wait)this.add(model,options);var collection=this;var success=options.success;options.success=function(model,resp,options){if(options.wait)collection.add(model,options);if(success)success(model,resp,options)};model.save(null,options);return model},parse:function(resp,options){return resp},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(attrs,options){if(attrs instanceof
Model){if(!attrs.collection)attrs.collection=this;return attrs}options||(options={});options.collection=this;var model=new this.model(attrs,options);if(!model.validationError)return model;this.trigger("invalid",this,attrs,options);return false},_removeReference:function(model){if(this===model.collection)delete model.collection;model.off("all",this._onModelEvent,this)},_onModelEvent:function(event,model,collection,options){if((event==="add"||event==="remove")&&collection!==this)return;if(event==="destroy")this.remove(model,
options);if(model&&event==="change:"+model.idAttribute){delete this._byId[model.previous(model.idAttribute)];if(model.id!=null)this._byId[model.id]=model}this.trigger.apply(this,arguments)}});var methods=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf",
"shuffle","lastIndexOf","isEmpty","chain"];_.each(methods,function(method){Collection.prototype[method]=function(){var args=slice.call(arguments);args.unshift(this.models);return _[method].apply(_,args)}});var attributeMethods=["groupBy","countBy","sortBy"];_.each(attributeMethods,function(method){Collection.prototype[method]=function(value,context){var iterator=_.isFunction(value)?value:function(model){return model.get(value)};return _[method](this.models,iterator,context)}});var View=Backbone.View=
function(options){this.cid=_.uniqueId("view");options||(options={});_.extend(this,_.pick(options,viewOptions));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var delegateEventSplitter=/^(\S+)\s*(.*)$/;var viewOptions=["model","collection","el","id","attributes","className","tagName","events"];_.extend(View.prototype,Events,{tagName:"div",$:function(selector){return this.$el.find(selector)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();
this.stopListening();return this},setElement:function(element,delegate){if(this.$el)this.undelegateEvents();this.$el=element instanceof Backbone.$?element:Backbone.$(element);this.el=this.$el[0];if(delegate!==false)this.delegateEvents();return this},delegateEvents:function(events){if(!(events||(events=_.result(this,"events"))))return this;this.undelegateEvents();for(var key in events){var method=events[key];if(!_.isFunction(method))method=this[events[key]];if(!method)continue;var match=key.match(delegateEventSplitter);
var eventName=match[1],selector=match[2];method=_.bind(method,this);eventName+=".delegateEvents"+this.cid;if(selector==="")this.$el.on(eventName,method);else this.$el.on(eventName,selector,method)}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var attrs=_.extend({},_.result(this,"attributes"));if(this.id)attrs.id=_.result(this,"id");if(this.className)attrs["class"]=_.result(this,"className");var $el=Backbone.$("<"+
_.result(this,"tagName")+">").attr(attrs);this.setElement($el,false)}else this.setElement(_.result(this,"el"),false)}});Backbone.sync=function(method,model,options){var type=methodMap[method];_.defaults(options||(options={}),{emulateHTTP:Backbone.emulateHTTP,emulateJSON:Backbone.emulateJSON});var params={type:type,dataType:"json"};if(!options.url)params.url=_.result(model,"url")||urlError();if(options.data==null&&model&&(method==="create"||method==="update"||method==="patch")){params.contentType=
"application/json";params.data=JSON.stringify(options.attrs||model.toJSON(options))}if(options.emulateJSON){params.contentType="application/x-www-form-urlencoded";params.data=params.data?{model:params.data}:{}}if(options.emulateHTTP&&(type==="PUT"||type==="DELETE"||type==="PATCH")){params.type="POST";if(options.emulateJSON)params.data._method=type;var beforeSend=options.beforeSend;options.beforeSend=function(xhr){xhr.setRequestHeader("X-HTTP-Method-Override",type);if(beforeSend)return beforeSend.apply(this,
arguments)}}if(params.type!=="GET"&&!options.emulateJSON)params.processData=false;if(params.type==="PATCH"&&noXhrPatch)params.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")};var xhr=options.xhr=Backbone.ajax(_.extend(params,options));model.trigger("request",model,xhr,options);return xhr};var noXhrPatch=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var methodMap={"create":"POST","update":"PUT","patch":"PATCH","delete":"DELETE",
"read":"GET"};Backbone.ajax=function(){return Backbone.$.ajax.apply(Backbone.$,arguments)};var Router=Backbone.Router=function(options){options||(options={});if(options.routes)this.routes=options.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var optionalParam=/\((.*?)\)/g;var namedParam=/(\(\?)?:\w+/g;var splatParam=/\*\w+/g;var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;_.extend(Router.prototype,Events,{initialize:function(){},route:function(route,name,callback){if(!_.isRegExp(route))route=
this._routeToRegExp(route);if(_.isFunction(name)){callback=name;name=""}if(!callback)callback=this[name];var router=this;Backbone.history.route(route,function(fragment){var args=router._extractParameters(route,fragment);callback&&callback.apply(router,args);router.trigger.apply(router,["route:"+name].concat(args));router.trigger("route",name,args);Backbone.history.trigger("route",router,name,args)});return this},navigate:function(fragment,options){Backbone.history.navigate(fragment,options);return this},
_bindRoutes:function(){if(!this.routes)return;this.routes=_.result(this,"routes");var route,routes=_.keys(this.routes);while((route=routes.pop())!=null)this.route(route,this.routes[route])},_routeToRegExp:function(route){route=route.replace(escapeRegExp,"\\$&").replace(optionalParam,"(?:$1)?").replace(namedParam,function(match,optional){return optional?match:"([^/]+)"}).replace(splatParam,"(.*?)");return new RegExp("^"+route+"$")},_extractParameters:function(route,fragment){var params=route.exec(fragment).slice(1);
return _.map(params,function(param){return param?decodeURIComponent(param):null})}});var History=Backbone.History=function(){this.handlers=[];_.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var routeStripper=/^[#\/]|\s+$/g;var rootStripper=/^\/+|\/+$/g;var isExplorer=/msie [\w.]+/;var trailingSlash=/\/$/;History.started=false;_.extend(History.prototype,Events,{interval:50,getHash:function(window){var match=(window||this).location.href.match(/#(.*)$/);
return match?match[1]:""},getFragment:function(fragment,forcePushState){if(fragment==null)if(this._hasPushState||!this._wantsHashChange||forcePushState){fragment=this.location.pathname;var root=this.root.replace(trailingSlash,"");if(!fragment.indexOf(root))fragment=fragment.slice(root.length)}else fragment=this.getHash();return fragment.replace(routeStripper,"")},start:function(options){if(History.started)throw new Error("Backbone.history has already been started");History.started=true;this.options=
_.extend({},{root:"/"},this.options,options);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var fragment=this.getFragment();var docMode=document.documentMode;var oldIE=isExplorer.exec(navigator.userAgent.toLowerCase())&&(!docMode||docMode<=7);this.root=("/"+this.root+"/").replace(rootStripper,"/");if(oldIE&&this._wantsHashChange){this.iframe=
Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(fragment)}if(this._hasPushState)Backbone.$(window).on("popstate",this.checkUrl);else if(this._wantsHashChange&&"onhashchange"in window&&!oldIE)Backbone.$(window).on("hashchange",this.checkUrl);else if(this._wantsHashChange)this._checkUrlInterval=setInterval(this.checkUrl,this.interval);this.fragment=fragment;var loc=this.location;var atRoot=loc.pathname.replace(/[^\/]$/,"$&/")===this.root;
if(this._wantsHashChange&&this._wantsPushState)if(!this._hasPushState&&!atRoot){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._hasPushState&&atRoot&&loc.hash){this.fragment=this.getHash().replace(routeStripper,"");this.history.replaceState({},document.title,this.root+this.fragment+loc.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){Backbone.$(window).off("popstate",this.checkUrl).off("hashchange",
this.checkUrl);clearInterval(this._checkUrlInterval);History.started=false},route:function(route,callback){this.handlers.unshift({route:route,callback:callback})},checkUrl:function(e){var current=this.getFragment();if(current===this.fragment&&this.iframe)current=this.getFragment(this.getHash(this.iframe));if(current===this.fragment)return false;if(this.iframe)this.navigate(current);this.loadUrl()},loadUrl:function(fragmentOverride){var fragment=this.fragment=this.getFragment(fragmentOverride);return _.any(this.handlers,
function(handler){if(handler.route.test(fragment)){handler.callback(fragment);return true}})},navigate:function(fragment,options){if(!History.started)return false;if(!options||options===true)options={trigger:!!options};fragment=this.getFragment(fragment||"");if(this.fragment===fragment)return;this.fragment=fragment;var url=this.root+fragment;if(fragment===""&&url!=="/")url=url.slice(0,-1);if(this._hasPushState)this.history[options.replace?"replaceState":"pushState"]({},document.title,url);else if(this._wantsHashChange){this._updateHash(this.location,
fragment,options.replace);if(this.iframe&&fragment!==this.getFragment(this.getHash(this.iframe))){if(!options.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,fragment,options.replace)}}else return this.location.assign(url);if(options.trigger)return this.loadUrl(fragment)},_updateHash:function(location,fragment,replace){if(replace){var href=location.href.replace(/(javascript:|#).*$/,"");location.replace(href+"#"+fragment)}else location.hash="#"+fragment}});Backbone.history=
new History;var extend=function(protoProps,staticProps){var parent=this;var child;if(protoProps&&_.has(protoProps,"constructor"))child=protoProps.constructor;else child=function(){return parent.apply(this,arguments)};_.extend(child,parent,staticProps);var Surrogate=function(){this.constructor=child};Surrogate.prototype=parent.prototype;child.prototype=new Surrogate;if(protoProps)_.extend(child.prototype,protoProps);child.__super__=parent.prototype;return child};Model.extend=Collection.extend=Router.extend=
View.extend=History.extend=extend;var urlError=function(){throw new Error('A "url" property or function must be specified');};var wrapError=function(model,options){var error=options.error;options.error=function(resp){if(error)error(model,resp,options);model.trigger("error",model,resp,options)}}}).call(this);


/**
 * http://www.openjs.com/scripts/events/keyboard_shortcuts/
 * Version : 2.01.B
 * By Binny V A
 * License : BSD
 */

shortcut={all_shortcuts:{},add:function(shortcut_combination,callback,opt){var default_options={type:"keydown",propagate:false,disable_in_input:false,target:document,keycode:false};if(!opt){opt=default_options;}else{for(var dfo in default_options){if(typeof opt[dfo]=="undefined"){opt[dfo]=default_options[dfo];}}}var ele=opt.target;if(typeof opt.target=="string"){ele=document.getElementById(opt.target);}var ths=this;shortcut_combination=shortcut_combination.toLowerCase();var func=function(e){e=e||window.event;if(opt.disable_in_input){var element;if(e.target){element=e.target;}else{if(e.srcElement){element=e.srcElement;}}if(element.nodeType==3){element=element.parentNode;}if(element.tagName=="INPUT"||element.tagName=="TEXTAREA"){return;}}if(e.keyCode){code=e.keyCode;}else{if(e.which){code=e.which;}}var character=String.fromCharCode(code);if(code==188){character=",";}if(code==190){character=".";}var keys=shortcut_combination.split("+");var kp=0;var shift_nums={"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"};
var special_keys={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123};var modifiers={shift:{wanted:false,pressed:false},ctrl:{wanted:false,pressed:false},alt:{wanted:false,pressed:false},meta:{wanted:false,pressed:false}};if(e.ctrlKey){modifiers.ctrl.pressed=true;}if(e.shiftKey){modifiers.shift.pressed=true;}if(e.altKey){modifiers.alt.pressed=true;}if(e.metaKey){modifiers.meta.pressed=true;}for(var i=0;k=keys[i],i<keys.length;i++){if(k=="ctrl"||k=="control"){kp++;modifiers.ctrl.wanted=true;}else{if(k=="shift"){kp++;modifiers.shift.wanted=true;}else{if(k=="alt"){kp++;modifiers.alt.wanted=true;}else{if(k=="meta"){kp++;modifiers.meta.wanted=true;
}else{if(k.length>1){if(special_keys[k]==code){kp++;}}else{if(opt.keycode){if(opt.keycode==code){kp++;}}else{if(character==k){kp++;}else{if(shift_nums[character]&&e.shiftKey){character=shift_nums[character];if(character==k){kp++;}}}}}}}}}}if(kp==keys.length&&modifiers.ctrl.pressed==modifiers.ctrl.wanted&&modifiers.shift.pressed==modifiers.shift.wanted&&modifiers.alt.pressed==modifiers.alt.wanted&&modifiers.meta.pressed==modifiers.meta.wanted){callback(e);if(!opt.propagate){e.cancelBubble=true;e.returnValue=false;if(e.stopPropagation){e.stopPropagation();e.preventDefault();}return false;}}};this.all_shortcuts[shortcut_combination]={callback:func,target:ele,event:opt.type};if(ele.addEventListener){ele.addEventListener(opt.type,func,false);}else{if(ele.attachEvent){ele.attachEvent("on"+opt.type,func);}else{ele["on"+opt.type]=func;}}},remove:function(shortcut_combination){shortcut_combination=shortcut_combination.toLowerCase();var binding=this.all_shortcuts[shortcut_combination];delete (this.all_shortcuts[shortcut_combination]);
if(!binding){return;}var type=binding.event;var ele=binding.target;var callback=binding.callback;if(ele.removeEventListener){ele.removeEventListener(type,callback,false);}else{if(ele.detachEvent){ele.detachEvent("on"+type,callback);}else{ele["on"+type]=false;}}}};

/*
 *	Handlebars
 */
this.Handlebars={},function(e){e.VERSION="1.0.rc.1",e.helpers={},e.partials={},e.registerHelper=function(e,t,n){n&&(t.not=n),this.helpers[e]=t},e.registerPartial=function(e,t){this.partials[e]=t},e.registerHelper("helperMissing",function(e){if(arguments.length===2)return undefined;throw new Error("Could not find property '"+e+"'")});var t=Object.prototype.toString,n="[object Function]";e.registerHelper("blockHelperMissing",function(r,i){var s=i.inverse||function(){},o=i.fn,u="",a=t.call(r);return a===n&&(r=r.call(this)),r===!0?o(this):r===!1||r==null?s(this):a==="[object Array]"?r.length>0?e.helpers.each(r,i):s(this):o(r)}),e.K=function(){},e.createFrame=Object.create||function(t){e.K.prototype=t;var n=new e.K;return e.K.prototype=null,n},e.registerHelper("each",function(t,n){var r=n.fn,i=n.inverse,s="",o;n.data&&(o=e.createFrame(n.data));if(t&&t.length>0)for(var u=0,a=t.length;u<a;u++)o&&(o.index=u),s+=r(t[u],{data:o});else s=i(this);return s}),e.registerHelper("if",function(r,i){var s=t.call(r);return s===n&&(r=r.call(this)),!r||e.Utils.isEmpty(r)?i.inverse(this):i.fn(this)}),e.registerHelper("unless",function(t,n){var r=n.fn,i=n.inverse;return n.fn=i,n.inverse=r,e.helpers["if"].call(this,t,n)}),e.registerHelper("with",function(e,t){return t.fn(e)}),e.registerHelper("log",function(t){e.log(t)})}(this.Handlebars);var handlebars=function(){function n(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,DATA:27,param:28,STRING:29,INTEGER:30,BOOLEAN:31,hashSegments:32,hashSegment:33,ID:34,EQUALS:35,pathSegments:36,SEP:37,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",27:"DATA",29:"STRING",30:"INTEGER",31:"BOOLEAN",34:"ID",35:"EQUALS",37:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[17,1],[25,2],[25,1],[28,1],[28,1],[28,1],[28,1],[28,1],[26,1],[32,2],[32,1],[33,3],[33,3],[33,3],[33,3],[33,3],[21,1],[36,3],[36,1]],performAction:function(t,n,r,i,s,o,u){var a=o.length-1;switch(s){case 1:return o[a-1];case 2:this.$=new i.ProgramNode(o[a-2],o[a]);break;case 3:this.$=new i.ProgramNode(o[a]);break;case 4:this.$=new i.ProgramNode([]);break;case 5:this.$=[o[a]];break;case 6:o[a-1].push(o[a]),this.$=o[a-1];break;case 7:this.$=new i.BlockNode(o[a-2],o[a-1].inverse,o[a-1],o[a]);break;case 8:this.$=new i.BlockNode(o[a-2],o[a-1],o[a-1].inverse,o[a]);break;case 9:this.$=o[a];break;case 10:this.$=o[a];break;case 11:this.$=new i.ContentNode(o[a]);break;case 12:this.$=new i.CommentNode(o[a]);break;case 13:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1]);break;case 14:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1]);break;case 15:this.$=o[a-1];break;case 16:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1]);break;case 17:this.$=new i.MustacheNode(o[a-1][0],o[a-1][1],!0);break;case 18:this.$=new i.PartialNode(o[a-1]);break;case 19:this.$=new i.PartialNode(o[a-2],o[a-1]);break;case 20:break;case 21:this.$=[[o[a-2]].concat(o[a-1]),o[a]];break;case 22:this.$=[[o[a-1]].concat(o[a]),null];break;case 23:this.$=[[o[a-1]],o[a]];break;case 24:this.$=[[o[a]],null];break;case 25:this.$=[[new i.DataNode(o[a])],null];break;case 26:o[a-1].push(o[a]),this.$=o[a-1];break;case 27:this.$=[o[a]];break;case 28:this.$=o[a];break;case 29:this.$=new i.StringNode(o[a]);break;case 30:this.$=new i.IntegerNode(o[a]);break;case 31:this.$=new i.BooleanNode(o[a]);break;case 32:this.$=new i.DataNode(o[a]);break;case 33:this.$=new i.HashNode(o[a]);break;case 34:o[a-1].push(o[a]),this.$=o[a-1];break;case 35:this.$=[o[a]];break;case 36:this.$=[o[a-2],o[a]];break;case 37:this.$=[o[a-2],new i.StringNode(o[a])];break;case 38:this.$=[o[a-2],new i.IntegerNode(o[a])];break;case 39:this.$=[o[a-2],new i.BooleanNode(o[a])];break;case 40:this.$=[o[a-2],new i.DataNode(o[a])];break;case 41:this.$=new i.IdNode(o[a]);break;case 42:o[a-2].push(o[a]),this.$=o[a-2];break;case 43:this.$=[o[a]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,27:[1,24],34:[1,26],36:25},{17:27,21:23,27:[1,24],34:[1,26],36:25},{17:28,21:23,27:[1,24],34:[1,26],36:25},{17:29,21:23,27:[1,24],34:[1,26],36:25},{21:30,34:[1,26],36:25},{1:[2,1]},{6:31,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,32],21:23,27:[1,24],34:[1,26],36:25},{10:33,20:[1,34]},{10:35,20:[1,34]},{18:[1,36]},{18:[2,24],21:41,25:37,26:38,27:[1,45],28:39,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,25]},{18:[2,41],27:[2,41],29:[2,41],30:[2,41],31:[2,41],34:[2,41],37:[1,48]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],37:[2,43]},{18:[1,49]},{18:[1,50]},{18:[1,51]},{18:[1,52],21:53,34:[1,26],36:25},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:54,34:[1,26],36:25},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:41,26:55,27:[1,45],28:56,29:[1,42],30:[1,43],31:[1,44],32:40,33:46,34:[1,47],36:25},{18:[2,23]},{18:[2,27],27:[2,27],29:[2,27],30:[2,27],31:[2,27],34:[2,27]},{18:[2,33],33:57,34:[1,58]},{18:[2,28],27:[2,28],29:[2,28],30:[2,28],31:[2,28],34:[2,28]},{18:[2,29],27:[2,29],29:[2,29],30:[2,29],31:[2,29],34:[2,29]},{18:[2,30],27:[2,30],29:[2,30],30:[2,30],31:[2,30],34:[2,30]},{18:[2,31],27:[2,31],29:[2,31],30:[2,31],31:[2,31],34:[2,31]},{18:[2,32],27:[2,32],29:[2,32],30:[2,32],31:[2,32],34:[2,32]},{18:[2,35],34:[2,35]},{18:[2,43],27:[2,43],29:[2,43],30:[2,43],31:[2,43],34:[2,43],35:[1,59],37:[2,43]},{34:[1,60]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,61]},{18:[1,62]},{18:[2,21]},{18:[2,26],27:[2,26],29:[2,26],30:[2,26],31:[2,26],34:[2,26]},{18:[2,34],34:[2,34]},{35:[1,59]},{21:63,27:[1,67],29:[1,64],30:[1,65],31:[1,66],34:[1,26],36:25},{18:[2,42],27:[2,42],29:[2,42],30:[2,42],31:[2,42],34:[2,42],37:[2,42]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,36],34:[2,36]},{18:[2,37],34:[2,37]},{18:[2,38],34:[2,38]},{18:[2,39],34:[2,39]},{18:[2,40],34:[2,40]}],defaultActions:{16:[2,1],24:[2,25],38:[2,23],55:[2,21]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e,i.length=i.length-e,s.length=s.length-e}function m(){var e;return e=n.lexer.lex()||1,typeof e!="number"&&(e=n.symbols_[e]||e),e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var g,y,b,w,E,S,x={},T,N,C,k;for(;;){b=r[r.length-1];if(this.defaultActions[b])w=this.defaultActions[b];else{if(g===null||typeof g=="undefined")g=m();w=o[b]&&o[b][g]}if(typeof w=="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])this.terminals_[T]&&T>2&&k.push("'"+this.terminals_[T]+"'");this.lexer.showPosition?L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'":L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g);switch(w[0]){case 1:r.push(g),i.push(this.lexer.yytext),s.push(this.lexer.yylloc),r.push(w[1]),g=null,y?(g=y,y=null):(f=this.lexer.yyleng,u=this.lexer.yytext,a=this.lexer.yylineno,p=this.lexer.yylloc,l>0&&l--);break;case 2:N=this.productions_[w[1]][1],x.$=i[i.length-N],x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column},d&&(x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]),S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!="undefined")return S;N&&(r=r.slice(0,-1*N*2),i=i.slice(0,-1*N),s=s.slice(0,-1*N)),r.push(this.productions_[w[1]][0]),i.push(x.$),s.push(x._$),C=o[r[r.length-2]][r[r.length-1]],r.push(C);break;case 3:return!0}}return!0}},t=function(){var e={EOF:1,parseError:function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)},setInput:function(e){return this._input=e,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);return t?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t-1),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this},more:function(){return this._more=!0,this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r,i,s;this._more||(this.yytext="",this.match="");var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n,r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g),s&&(this.yylineno+=s.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1);if(e)return e;return}return this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return typeof t!="undefined"?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};return e.options={},e.performAction=function(t,n,r,i){var s=i;switch(r){case 0:n.yytext.slice(-1)!=="\\"&&this.begin("mu"),n.yytext.slice(-1)==="\\"&&(n.yytext=n.yytext.substr(0,n.yyleng-1),this.begin("emu"));if(n.yytext)return 14;break;case 1:return 14;case 2:return n.yytext.slice(-1)!=="\\"&&this.popState(),n.yytext.slice(-1)==="\\"&&(n.yytext=n.yytext.substr(0,n.yyleng-1)),14;case 3:return 24;case 4:return 16;case 5:return 20;case 6:return 19;case 7:return 19;case 8:return 23;case 9:return 23;case 10:return n.yytext=n.yytext.substr(3,n.yyleng-5),this.popState(),15;case 11:return 22;case 12:return 35;case 13:return 34;case 14:return 34;case 15:return 37;case 16:break;case 17:return this.popState(),18;case 18:return this.popState(),18;case 19:return n.yytext=n.yytext.substr(1,n.yyleng-2).replace(/\\"/g,'"'),29;case 20:return n.yytext=n.yytext.substr(1,n.yyleng-2).replace(/\\"/g,'"'),29;case 21:return n.yytext=n.yytext.substr(1),27;case 22:return 31;case 23:return 31;case 24:return 30;case 25:return 34;case 26:return n.yytext=n.yytext.substr(1,n.yyleng-2),34;case 27:return"INVALID";case 28:return 5}},e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:\{\{>)/,/^(?:\{\{#)/,/^(?:\{\{\/)/,/^(?:\{\{\^)/,/^(?:\{\{\s*else\b)/,/^(?:\{\{\{)/,/^(?:\{\{&)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{)/,/^(?:=)/,/^(?:\.(?=[} ]))/,/^(?:\.\.)/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}\}\})/,/^(?:\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@[a-zA-Z]+)/,/^(?:true(?=[}\s]))/,/^(?:false(?=[}\s]))/,/^(?:[0-9]+(?=[}\s]))/,/^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],e.conditions={mu:{rules:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],inclusive:!1},emu:{rules:[2],inclusive:!1},INITIAL:{rules:[0,1,28],inclusive:!0}},e}();return e.lexer=t,n.prototype=e,e.Parser=n,new n}();typeof require!="undefined"&&typeof exports!="undefined"&&(exports.parser=handlebars,exports.Parser=handlebars.Parser,exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)},exports.main=function(t){if(!t[1])throw new Error("Usage: "+t[0]+" FILE");var n,r;return typeof process!="undefined"?n=require("fs").readFileSync(require("path").resolve(t[1]),"utf8"):n=require("file").path(require("file").cwd()).join(t[1]).read({charset:"utf-8"}),exports.parser.parse(n)},typeof module!="undefined"&&require.main===module&&exports.main(typeof process!="undefined"?process.argv.slice(1):require("system").args)),Handlebars.Parser=handlebars,Handlebars.parse=function(e){return Handlebars.Parser.yy=Handlebars.AST,Handlebars.Parser.parse(e)},Handlebars.print=function(e){return(new Handlebars.PrintVisitor).accept(e)},Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){}},Handlebars.log=function(e,t){Handlebars.logger.log(e,t)},function(){Handlebars.AST={},Handlebars.AST.ProgramNode=function(e,t){this.type="program",this.statements=e,t&&(this.inverse=new Handlebars.AST.ProgramNode(t))},Handlebars.AST.MustacheNode=function(e,t,n){this.type="mustache",this.escaped=!n,this.hash=t;var r=this.id=e[0],i=this.params=e.slice(1),s=this.eligibleHelper=r.isSimple;this.isHelper=s&&(i.length||t)},Handlebars.AST.PartialNode=function(e,t){this.type="partial",this.id=e,this.context=t};var e=function(e,t){if(e.original!==t.original)throw new Handlebars.Exception(e.original+" doesn't match "+t.original)};Handlebars.AST.BlockNode=function(t,n,r,i){e(t.id,i),this.type="block",this.mustache=t,this.program=n,this.inverse=r,this.inverse&&!this.program&&(this.isInverse=!0)},Handlebars.AST.ContentNode=function(e){this.type="content",this.string=e},Handlebars.AST.HashNode=function(e){this.type="hash",this.pairs=e},Handlebars.AST.IdNode=function(e){this.type="ID",this.original=e.join(".");var t=[],n=0;for(var r=0,i=e.length;r<i;r++){var s=e[r];s===".."?n++:s==="."||s==="this"?this.isScoped=!0:t.push(s)}this.parts=t,this.string=t.join("."),this.depth=n,this.isSimple=e.length===1&&!this.isScoped&&n===0},Handlebars.AST.DataNode=function(e){this.type="DATA",this.id=e},Handlebars.AST.StringNode=function(e){this.type="STRING",this.string=e},Handlebars.AST.IntegerNode=function(e){this.type="INTEGER",this.integer=e},Handlebars.AST.BooleanNode=function(e){this.type="BOOLEAN",this.bool=e},Handlebars.AST.CommentNode=function(e){this.type="comment",this.comment=e}}(),Handlebars.Exception=function(e){var t=Error.prototype.constructor.apply(this,arguments);for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);this.message=t.message},Handlebars.Exception.prototype=new Error,Handlebars.SafeString=function(e){this.string=e},Handlebars.SafeString.prototype.toString=function(){return this.string.toString()},function(){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},t=/[&<>"'`]/g,n=/[&<>"'`]/,r=function(t){return e[t]||"&amp;"};Handlebars.Utils={escapeExpression:function(e){return e instanceof Handlebars.SafeString?e.toString():e==null||e===!1?"":n.test(e)?e.replace(t,r):e},isEmpty:function(e){return typeof e=="undefined"?!0:e===null?!0:e===!1?!0:Object.prototype.toString.call(e)==="[object Array]"&&e.length===0?!0:!1}}}(),Handlebars.Compiler=function(){},Handlebars.JavaScriptCompiler=function(){},function(e,t){e.prototype={compiler:e,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE")n.push("DECLARE "+t.name+"="+t.value);else{r=[];for(var u=0;u<t.args.length;u++)i=t.args[u],typeof i=="string"&&(i='"'+i.replace("\n","\\n")+'"'),r.push(i);n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},guid:0,compile:function(e,t){this.children=[],this.depths={list:[]},this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0};if(n)for(var r in n)this.options.knownHelpers[r]=n[r];return this.program(e)},accept:function(e){return this[e.type](e)},program:function(e){var t=e.statements,n;this.opcodes=[];for(var r=0,i=t.length;r<i;r++)n=t[r],this[n.type](n);return this.isSimple=i===1,this.depths.list=this.depths.list.sort(function(e,t){return e-t}),this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options),n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial,this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2)continue;this.addDepth(r-1)}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;n&&(n=this.compileProgram(n)),r&&(r=this.compileProgram(r));var i=this.classifyMustache(t);i==="helper"?this.helperMustache(t,n,r):i==="simple"?(this.simpleMustache(t),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("pushLiteral","{}"),this.opcode("blockValue")):(this.ambiguousMustache(t,n,r),this.opcode("pushProgram",n),this.opcode("pushProgram",r),this.opcode("pushLiteral","{}"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("push","{}");for(var i=0,s=t.length;i<s;i++)n=t[i],r=n[1],this.accept(r),this.opcode("assignToHash",n[0])},partial:function(e){var t=e.id;this.usePartial=!0,e.context?this.ID(e.context):this.opcode("push","depth0"),this.opcode("invokePartial",t.original),this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){var t=this.options,n=this.classifyMustache(e);n==="simple"?this.simpleMustache(e):n==="helper"?this.helperMustache(e):this.ambiguousMustache(e),e.escaped&&!t.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousMustache:function(e,t,n){var r=e.id,i=r.parts[0];this.opcode("getContext",r.depth),this.opcode("pushProgram",t),this.opcode("pushProgram",n),this.opcode("invokeAmbiguous",i)},simpleMustache:function(e,t,n){var r=e.id;r.type==="DATA"?this.DATA(r):r.parts.length?this.ID(r):(this.addDepth(r.depth),this.opcode("getContext",r.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperMustache:function(e,t,n){var r=this.setupFullMustacheParams(e,t,n),i=e.id.parts[0];if(this.options.knownHelpers[i])this.opcode("invokeKnownHelper",r.length,i);else{if(this.knownHelpersOnly)throw new Error("You specified knownHelpersOnly, but used the unknown helper "+i);this.opcode("invokeHelper",r.length,i)}},ID:function(e){this.addDepth(e.depth),this.opcode("getContext",e.depth);var t=e.parts[0];t?this.opcode("lookupOnContext",e.parts[0]):this.opcode("pushContext");for(var n=1,r=e.parts.length;n<r;n++)this.opcode("lookup",e.parts[n])},DATA:function(e){this.options.data=!0,this.opcode("lookupData",e.id)},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(isNaN(e))throw new Error("EWOT");if(e===0)return;this.depths[e]||(this.depths[e]=!0,this.depths.list.push(e))},classifyMustache:function(e){var t=e.isHelper,n=e.eligibleHelper,r=this.options;if(n&&!t){var i=e.id.parts[0];r.knownHelpers[i]?t=!0:r.knownHelpersOnly&&(n=!1)}return t?"helper":n?"ambiguous":"simple"},pushParams:function(e){var t=e.length,n;while(t--)n=e[t],this.options.stringParams?(n.depth&&this.addDepth(n.depth),this.opcode("getContext",n.depth||0),this.opcode("pushStringParam",n.string)):this[n.type](n)},setupMustacheParams:function(e){var t=e.params;return this.pushParams(t),e.hash?this.hash(e.hash):this.opcode("pushLiteral","{}"),t},setupFullMustacheParams:function(e,t,n){var r=e.params;return this.pushParams(r),this.opcode("pushProgram",t),this.opcode("pushProgram",n),e.hash?this.hash(e.hash):this.opcode("pushLiteral","{}"),r}};var n=function(e){this.value=e};t.prototype={nameLookup:function(e,n,r){return/^[0-9]+$/.test(n)?e+"["+n+"]":t.isValidJavaScriptVariableName(n)?e+"."+n:e+"['"+n+"']"},appendToBuffer:function(e){return this.environment.isSimple?"return "+e+";":"buffer += "+e+";"},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e,this.options=t||{},Handlebars.log(Handlebars.logger.DEBUG,this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!n,this.context=n||{programs:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.compileStack=[],this.compileChildren(e,t);var i=e.opcodes,s;this.i=0;for(o=i.length;this.i<o;this.i++)s=i[this.i],s.opcode==="DECLARE"?this[s.name]=s.value:this[s.opcode].apply(this,s.args);return this.createFunctionContext(r)},nextOpcode:function(){var e=this.environment.opcodes,t=e[this.i+1];return e[this.i+1]},eat:function(e){this.i=this.i+1},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace,n="helpers = helpers || "+t+".helpers;";this.environment.usePartial&&(n=n+" partials = partials || "+t+".partials;"),this.options.data&&(n+=" data = data || {};"),e.push(n)}else e.push("");this.environment.isSimple?e.push(""):e.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);t.length>0&&(this.source[1]=this.source[1]+", "+t.join(", "));if(!this.isChild){var n=[];for(var r in this.context.aliases)this.source[1]=this.source[1]+", "+r+"="+this.context.aliases[r]}this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.source.push("return buffer;");var i=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var s=0,o=this.environment.depths.list.length;s<o;s++)i.push("depth"+this.environment.depths.list[s]);if(e)return i.push(this.source.join("\n  ")),Function.apply(this,i);var u="function "+(this.name||"")+"("+i.join(",")+") {\n  "+this.source.join("\n  ")+"}";return Handlebars.log(Handlebars.logger.DEBUG,u+"\n\n"),u},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e),this.replaceStack(function(t){return e.splice(1,0,t),t+" = blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t),this.source.push("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){this.source.push(this.appendToBuffer(this.quotedString(e)))},append:function(){var e=this.popStack();this.source.push("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }"),this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){var e=this.nextOpcode(),t="";this.context.aliases.escapeExpression="this.escapeExpression",e&&e.opcode==="appendContent"&&(t=" + "+this.quotedString(e.args[0]),this.eat(e)),this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+t))},getContext:function(e){this.lastContext!==e&&(this.lastContext=e)},lookupOnContext:function(e){this.pushStack(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+"() : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(e){this.pushStack(this.nameLookup("data",e,"data"))},pushStringParam:function(e){this.pushStackLiteral("depth"+this.lastContext),this.pushString(e)},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.pushStack(e)},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){e!=null?this.pushStackLiteral(this.programExpression(e)):this.pushStackLiteral(null)},invokeHelper:function(e,t){this.context.aliases.helperMissing="helpers.helperMissing";var n=this.lastHelper=this.setupHelper(e,t);this.register("foundHelper",n.name),this.pushStack("foundHelper ? foundHelper.call("+n.callParams+") "+": helperMissing.call("+n.helperMissingParams+")")},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.pushStack(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e){this.context.aliases.functionType='"function"',this.pushStackLiteral("{}");var t=this.setupHelper(0,e),n=this.lastHelper=this.nameLookup("helpers",e,"helper");this.register("foundHelper",n);var r=this.nameLookup("depth"+this.lastContext,e,"context"),i=this.nextStack();this.source.push("if (foundHelper) { "+i+" = foundHelper.call("+t.callParams+"); }"),this.source.push("else { "+i+" = "+r+"; "+i+" = typeof "+i+" === functionType ? "+i+"() : "+i+"; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];this.options.data&&t.push("data"),this.context.aliases.self="this",this.pushStack("self.invokePartial("+t.join(", ")+");")},assignToHash:function(e){var t=this.popStack(),n=this.topStack();this.source.push(n+"['"+e+"'] = "+t+";")},compiler:t,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s],i=new this.compiler,this.context.programs.push("");var u=this.context.programs.length;r.index=u,r.name="program"+u,this.context.programs[u]=i.compile(r,t,this.context)}},programExpression:function(e){this.context.aliases.self="this";if(e==null)return"self.noop";var t=this.environment.children[e],n=t.depths.list,r,i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++)r=n[s],r===1?i.push("depth0"):i.push("depth"+(r-1));return n.length===0?"self.program("+i.join(", ")+")":(i.shift(),"self.programWithDepth("+i.join(", ")+")")},register:function(e,t){this.useRegister(e),this.source.push(e+" = "+t+";")},useRegister:function(e){this.registers[e]||(this.registers[e]=!0,this.registers.list.push(e))},pushStackLiteral:function(e){return this.compileStack.push(new n(e)),e},pushStack:function(e){return this.source.push(this.incrStack()+" = "+e+";"),this.compileStack.push("stack"+this.stackSlot),"stack"+this.stackSlot},replaceStack:function(e){var t=e.call(this,this.topStack());return this.source.push(this.topStack()+" = "+t+";"),"stack"+this.stackSlot},nextStack:function(e){var t=this.incrStack();return this.compileStack.push("stack"+this.stackSlot),t},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),"stack"+this.stackSlot},popStack:function(){var e=this.compileStack.pop();return e instanceof n?e.value:(this.stackSlot--,e)},topStack:function(){var e=this.compileStack[this.compileStack.length-1];return e instanceof n?e.value:e},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'},setupHelper:function(e,t){var n=[];this.setupParams(e,n);var r=this.nameLookup("helpers",t,"helper");return{params:n,name:r,callParams:["depth0"].concat(n).join(", "),helperMissingParams:["depth0",this.quotedString(t)].concat(n).join(", ")}},setupParams:function(e,t){var n=[],r=[],i,s,o;n.push("hash:"+this.popStack()),s=this.popStack(),o=this.popStack();if(o||s)o||(this.context.aliases.self="this",o="self.noop"),s||(this.context.aliases.self="this",s="self.noop"),n.push("inverse:"+s),n.push("fn:"+o);for(var u=0;u<e;u++)i=this.popStack(),t.push(i),this.options.stringParams&&r.push(this.popStack());return this.options.stringParams&&n.push("contexts:["+r.join(",")+"]"),this.options.data&&n.push("data:data"),t.push("{"+n.join(",")+"}"),t.join(", ")}};var r="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),i=t.RESERVED_WORDS={};for(var s=0,o=r.length;s<o;s++)i[r[s]]=!0;t.isValidJavaScriptVariableName=function(e){return!t.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e)?!0:!1}}(Handlebars.Compiler,Handlebars.JavaScriptCompiler),Handlebars.precompile=function(e,t){t=t||{};var n=Handlebars.parse(e),r=(new Handlebars.Compiler).compile(n,t);return(new Handlebars.JavaScriptCompiler).compile(r,t)},Handlebars.compile=function(e,t){function r(){var n=Handlebars.parse(e),r=(new Handlebars.Compiler).compile(n,t),i=(new Handlebars.JavaScriptCompiler).compile(r,t,undefined,!0);return Handlebars.template(i
)}t=t||{};var n;return function(e,t){return n||(n=r()),n.call(this,e,t)}},Handlebars.VM={template:function(e){var t={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(e,t,n){var r=this.programs[e];return n?Handlebars.VM.program(t,n):r?r:(r=this.programs[e]=Handlebars.VM.program(t),r)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(n,r){return r=r||{},e.call(t,Handlebars,n,r.helpers,r.partials,r.data)}},programWithDepth:function(e,t,n){var r=Array.prototype.slice.call(arguments,2);return function(n,i){return i=i||{},e.apply(this,[n,i.data||t].concat(r))}},program:function(e,t){return function(n,r){return r=r||{},e(n,r.data||t)}},noop:function(){return""},invokePartial:function(e,t,n,r,i,s){var o={helpers:r,partials:i,data:s};if(e===undefined)throw new Handlebars.Exception("The partial "+t+" could not be found");if(e instanceof Function)return e(n,o);if(!Handlebars.compile)throw new Handlebars.Exception("The partial "+t+" could not be compiled when running in runtime-only mode");return i[t]=Handlebars.compile(e,{data:s!==undefined}),i[t](n,o)}},Handlebars.template=Handlebars.VM.template;

/* 
 * jQuery NDD
 * Copyright 2010 Guillaume Bort
 * http://github.com/guillaumebort/jquery-ndd
 *
 * Updated by Cargo 2013/02/08
 */
$(function(){$("head").append('<style type="text/css">[draggable=true] {-webkit-user-drag: element; -webkit-user-select: none; -moz-user-select: none;}</style>')});var originalFix=jQuery.event.fix;jQuery.event.fix=function(event){event=originalFix.apply(this,[event]);if(event.type.indexOf("drag")==0||event.type.indexOf("drop")==0)if(event.originalEvent)event.dataTransfer=event.originalEvent.dataTransfer;return event};
jQuery.each("drag dragenter dragleave dragover dragend drop dragstart".split(" "),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name)};if(jQuery.attrFn)jQuery.attrFn[name]=true});
jQuery.fn.extend({draggable:function(start,end){this.on("dragstart dragend",function(e){if(e.type=="dragstart"&&start){var data=start.apply(this,[e]);if(data)for(var k in data)if(k=="effect")e.dataTransfer.effectAllowed=data[k];else e.dataTransfer.setData(k,data[k])}if(e.type=="dragend"&&end)end.apply(this,[e])})},droppable:function(accept,enter,leave,drop){var uuid=0;this.on("dragenter dragleave dragover drop",function(e){if(!this.currents)this.currents=[];if(!this.uuid){this.uuid=++uuid;this.currents[this.uuid]=
{hover:false,leaveTimeout:null}}if(!e.dataTransfer.dropEffect&&e.dataTransfer.effectAllowed)switch(e.dataTransfer.effectAllowed){case "none":e.dataTransfer.dropEffect="none";break;case "copy":e.dataTransfer.dropEffect="copy";break;case "move":e.dataTransfer.dropEffect="move";break;case "link":e.dataTransfer.dropEffect="link";break;case "copyMove":e.dataTransfer.dropEffect="copy";break;case "copyLink":e.dataTransfer.dropEffect="copy";break;case "linkMove":e.dataTransfer.dropEffect="move";break;case "all":e.dataTransfer.dropEffect=
"copy";break}if(e.type=="dragenter"||e.type=="dragover"){if(this.currents[this.uuid].leaveTimeout!=null)clearTimeout(this.currents[this.uuid].leaveTimeout);if(!this.currents[this.uuid].hover){var accepted=false;if(jQuery.isFunction(accept))accepted=accept.apply(this,[e]);else{var types=accept.toString().split(" ");for(var i=0;i<types.length;i++){var type=types[i];if(type.toLowerCase()=="text")type="text/plain";if(type.toLowerCase()=="url")type="text/uri-list";if(type=="*"){accepted=true;break}if(type==
"Files")for(var ii=0;ii<e.dataTransfer.types.length;ii++)if("public.file-url"==e.dataTransfer.types[ii]){accepted=true;break}if(e.dataTransfer.types)for(var ii=0;ii<e.dataTransfer.types.length;ii++)if(type==e.dataTransfer.types[ii]){accepted=true;break}}}if(accepted){e.preventDefault();if(enter)enter.apply(this,[e]);this.currents[this.uuid].hover=true}}else e.preventDefault()}if(e.type=="dragleave")if(this.currents[this.uuid].hover){var self=this;this.currents[this.uuid].leaveTimeout=setTimeout(function(){if(leave)leave.apply(self,
[e]);self.currents[self.uuid].hover=false},50)}if(e.type=="drop")if(this.currents[this.uuid].hover){if(leave)leave.apply(this,[e]);this.currents[this.uuid].hover=false;if(drop)drop.apply(this,[e]);e.preventDefault()}})}});


/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function(a){a.cookie=function(b,c,d){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(c))||c===null||c===undefined)){d=a.extend({},d);if(c===null||c===undefined)d.expires=-1;if(typeof d.expires=="number"){var e=d.expires,f=d.expires=new Date;f.setDate(f.getDate()+e)}return c=String(c),document.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}d=c||{};var g=d.raw?function(a){return a}:decodeURIComponent,h=document.cookie.split("; ");for(var i=0,j;j=h[i]&&h[i].split("=");i++)if(g(j[0])===b)return g(j[1]||"");return null}})(jQuery); 


/* !jQuery loadFiles Plugin 
 * Written by Franklin, Cargo
 */ 
(function($){var Filer=function(files_to_load){this.init();this.addFilesFromConstructor(files_to_load);return this;};$.extend(Filer.prototype,{init:function(files_to_load){this.Data={files:[],done_callback:null,fail_callback:null};},addFilesFromConstructor:function(files){$.each(files,$.proxy(function(index,value){if($.isArray(value)){this.addFilesFromConstructor(value);}else{this.addFile(this.Data.files.length,value);}},this));},addFile:function(index,value){var base=(typeof value==='object')?value:{url:value};var options=$.extend(base,{cache:true,dataType:this.dataTypeForFile(base.url),success:$.proxy(function(data,text_status,xhr){this.handleFileLoad(index,data);},this),error:$.proxy(function(xhr,text_status,error_thrown){this.handleFileError(index,xhr,text_status);},this)});this.trackFileState(index,value,$.ajax(options));},dataTypeForFile:function(url){return/\.js$/.test(url)?'script':'text';},trackFileState:function(index,url,xhr){this.Data.files[index]={complete:false,index:index,url:url,xhr:xhr};},handleFileLoad:function(index,data){if(this.has_exited_on_error!==undefined)
return;this.Data.files[index].complete=true;if(/\.css$/.test(this.Data.files[index].url))
$('head').append('<style>'+data+'</style>');var completed=0;$.each(this.Data.files,function(index,file){if(file.complete)
completed++;});if(this.Data.files.length==completed)
this.complete(data);},handleFileError:function(index,xhr,text_status){this.error(xhr,text_status);this.Data.files[index].complete=true;$.each(this.Data.files,function(index,file){if(!file.complete)
file.xhr.abort();});},complete:function(data){if($.isFunction(this.Data.done_callback))
this.Data.done_callback.apply(this,[data]);},error:function(xhr,text_status){if(this.has_exited_on_error!==undefined)
return;this.has_exited_on_error=true;if($.isFunction(this.Data.fail_callback))
this.Data.fail_callback.apply(this,[xhr,text_status]);},done:function(callback){this.Data.done_callback=callback;return this;},fail:function(callback){this.Data.fail_callback=callback;return this;}});$.extend({loadFiles:function(){return new Filer($.makeArray(arguments));}});})(jQuery);


/*
* touchSwipe - jQuery Plugin
* https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* http://labs.skinkers.com/touchSwipe/
* http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson (www.skinkers.com)
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* $version: 1.6
*/

(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));

/*! Hammer.JS - v1.0.5 - 2013-04-07
* http://eightmedia.github.com/hammer.js
*
* Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
* Licensed under the MIT license */
(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);

/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);

/*
* requestAnimationFrame polyfill for older browsers
* https://gist.github.com/paulirish/1579671
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
* http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
*
* MIT license
*/
(function(b){var c=0,d=["moz","webkit","o","ms"],a;for(a=0;a<d.length&&!b.requestAnimationFrame;a+=1){b.requestAnimationFrame=b[d[a]+"RequestAnimationFrame"];b.cancelAnimationFrame=b[d[a]+"CancelAnimationFrame"]||b[d[a]+"CancelRequestAnimationFrame"];}if(!b.cancelAnimationFrame){if(!b.requestAnimationFrame){b.requestAnimationFrame=function(g){var f=new Date().getTime(),e=Math.max(c+16,f);return b.setTimeout(function(){g(c=e);},e-f);};b.cancelAnimationFrame=b.clearTimeout;}else{d=b.requestAnimationFrame;c={};b.requestAnimationFrame=function(f){var e=a;a+=1;c[e]=f;d(function(h){if(c.hasOwnProperty(e)){var g;try{c[e](h);}catch(i){g=i;}finally{delete c[e];if(g){throw g;}}}});return e;};b.cancelAnimationFrame=function(e){delete c[e];};}}}(this));

/*! mobile-detect - v0.4.3-snapshot - 2014-11-12
github.com/hgoebl/mobile-detect.js */!function(a,b){a(function(){"use strict";function a(a){for(var b in a)o.call(a,b)&&(a[b]=new RegExp(a[b],"i"))}function c(a,b){for(var c in a)if(o.call(a,c)&&a[c].test(b))return c;return null}function d(a,b){var c,d,e,f,g=m.props;if(o.call(g,a))for(c=g[a],e=c.length,d=0;e>d;++d)if(f=c[d].exec(b),null!==f)return f[1];return null}function e(a,b){var c=d(a,b);return c?f(c):0/0}function f(a){var b;return b=a.split(/[a-z._ \/\-]/i),1===b.length&&(a=b[0]),b.length>1&&(a=b[0]+".",b.shift(),a+=b.join("")),Number(a)}function g(a,b){return null!=a&&null!=b&&a.toLowerCase()===b.toLowerCase()}function h(a){return n.fullPattern.test(a)||n.shortPattern.test(a.substr(0,4))}function i(a,d,e){if(a.mobile===b){var f,g,i;return(g=c(m.tablets,d))?(a.mobile=a.tablet=g,a.phone=null,void 0):(f=c(m.phones,d))?(a.mobile=a.phone=f,a.tablet=null,void 0):(h(d)?(i=k.isPhoneSized(e),i===b?a.mobile=a.tablet=a.phone=r:i?(a.mobile=a.phone=p,a.tablet=null):(a.mobile=a.tablet=q,a.phone=null)):a.mobile=a.tablet=a.phone=null,void 0)}}function j(a){var b=null!==a.mobile();return a.os("iOS")&&a.version("iPad")>=4.3||a.os("iOS")&&a.version("iPhone")>=3.1||a.os("iOS")&&a.version("iPod")>=3.1||a.version("Android")>2.1&&a.is("Webkit")||a.version("Windows Phone OS")>=7||a.is("BlackBerry")&&a.version("BlackBerry")>=6||a.match("Playbook.*Tablet")||a.version("webOS")>=1.4&&a.match("Palm|Pre|Pixi")||a.match("hp.*TouchPad")||a.is("Firefox")&&a.version("Firefox")>=12||a.is("Chrome")&&a.is("AndroidOS")&&a.version("Android")>=4||a.is("Skyfire")&&a.version("Skyfire")>=4.1&&a.is("AndroidOS")&&a.version("Android")>=2.3||a.is("Opera")&&a.version("Opera Mobi")>11&&a.is("AndroidOS")||a.is("MeeGoOS")||a.is("Tizen")||a.is("Dolfin")&&a.version("Bada")>=2||(a.is("UC Browser")||a.is("Dolfin"))&&a.version("Android")>=2.3||a.match("Kindle Fire")||a.is("Kindle")&&a.version("Kindle")>=3||a.is("AndroidOS")&&a.is("NookTablet")||a.version("Chrome")>=11&&!b||a.version("Safari")>=5&&!b||a.version("Firefox")>=4&&!b||a.version("MSIE")>=7&&!b||a.version("Opera")>=10&&!b?"A":a.os("iOS")&&a.version("iPad")<4.3||a.os("iOS")&&a.version("iPhone")<3.1||a.os("iOS")&&a.version("iPod")<3.1||a.is("Blackberry")&&a.version("BlackBerry")>=5&&a.version("BlackBerry")<6||a.version("Opera Mini")>=5&&a.version("Opera Mini")<=6.5&&(a.version("Android")>=2.3||a.is("iOS"))||a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3")||a.version("Opera Mobi")>=11&&a.is("SymbianOS")?"B":a.version("BlackBerry")<5||a.match("MSIEMobile|Windows CE.*Mobile")||a.version("Windows Mobile")<=5.2?"C":"C"}function k(a,b){this.ua=a||"",this._cache={},this.maxPhoneWidth=b||650}var l,m={phones:{iPhone:"\\biPhone\\b|\\biPod\\b",BlackBerry:"BlackBerry|\\bBB10\\b|rim[0-9]+",HTC:"HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",Nexus:"Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",Dell:"Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",Motorola:"Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",Samsung:"Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750",LG:"\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",Sony:"SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C6902|C6903|C6906|C6943|D2533",Asus:"Asus.*Galaxy|PadFone.*Mobile",Micromax:"Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",Palm:"PalmSource|Palm",Vertu:"Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",Pantech:"PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",Fly:"IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",iMobile:"i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",SimValley:"\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",Wolfgang:"AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",Alcatel:"Alcatel",Nintendo:"Nintendo 3DS",Amoi:"Amoi",INQ:"INQ",GenericPhone:"Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"},tablets:{iPad:"iPad|iPad.*Mobile",NexusTablet:"Android.*Nexus[\\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",SamsungTablet:"SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700",Kindle:"Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE)\\b",SurfaceTablet:"Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",HPTablet:"HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",AsusTablet:"^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG",BlackBerryTablet:"PlayBook|RIM Tablet",HTCtablet:"HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",MotorolaTablet:"xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",NookTablet:"Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",AcerTablet:"Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b",ToshibaTablet:"Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",LGTablet:"\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",FujitsuTablet:"Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",PrestigioTablet:"PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",LenovoTablet:"Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",DellTablet:"Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",YarvikTablet:"Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",MedionTablet:"Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",ArnovaTablet:"AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT",IntensoTablet:"INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",IRUTablet:"M702pro",MegafonTablet:"MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",EbodaTablet:"E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",AllViewTablet:"Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",ArchosTablet:"\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",AinolTablet:"NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",SonyTablet:"Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551",PhilipsTablet:"\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",CubeTablet:"Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",CobyTablet:"MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",MIDTablet:"M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",MSITablet:"MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",SMiTTablet:"Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",RockChipTablet:"Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",FlyTablet:"IQ310|Fly Vision",bqTablet:"bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus",HuaweiTablet:"MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",NecTablet:"\\bN-06D|\\bN-08D",PantechTablet:"Pantech.*P4100",BronchoTablet:"Broncho.*(N701|N708|N802|a710)",VersusTablet:"TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",ZyncTablet:"z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",PositivoTablet:"TB07STA|TB10STA|TB07FTA|TB10FTA",NabiTablet:"Android.*\\bNabi",KoboTablet:"Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",DanewTablet:"DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",TexetTablet:"NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",PlaystationTablet:"Playstation.*(Portable|Vita)",TrekstorTablet:"ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",PyleAudioTablet:"\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",AdvanTablet:"Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",DanyTechTablet:"Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",GalapadTablet:"Android.*\\bG1\\b",MicromaxTablet:"Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",KarbonnTablet:"Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",AllFineTablet:"Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",PROSCANTablet:"\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",YONESTablet:"BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",ChangJiaTablet:"TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",GUTablet:"TX-A1301|TX-M9002|Q702|kf026",PointOfViewTablet:"TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",OvermaxTablet:"OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",HCLTablet:"HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",DPSTablet:"DPS Dream 9|DPS Dual 7",VistureTablet:"V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",CrestaTablet:"CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",MediatekTablet:"\\bMT8125|MT8389|MT8135|MT8377\\b",ConcordeTablet:"Concorde([ ]+)?Tab|ConCorde ReadMan",GoCleverTablet:"GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",ModecomTablet:"FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",VoninoTablet:"\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",ECSTablet:"V07OT2|TM105A|S10OT1|TR10CS1",StorexTablet:"eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",VodafoneTablet:"SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",EssentielBTablet:"Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",RossMoorTablet:"RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",iMobileTablet:"i-mobile i-note",TolinoTablet:"tolino tab [0-9.]+|tolino shine",AudioSonicTablet:"\\bC-22Q|T7-QC|T-17B|T-17P\\b",AMPETablet:"Android.* A78 ",SkkTablet:"Android.* (SKYPAD|PHOENIX|CYCLOPS)",TecnoTablet:"TECNO P9",JXDTablet:"Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",iJoyTablet:"Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",FX2Tablet:"FX2 PAD7|FX2 PAD10",XoroTablet:"KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",ViewsonicTablet:"ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",OdysTablet:"LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",CaptivaTablet:"CAPTIVA PAD",IconbitTablet:"NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",TeclastTablet:"\\(Linux;\\sAndroid\\s[\\d\\.]+;\\s[PXGAT]\\d{2,}.*\\sBuild/.*?\\)",JaytechTablet:"TPC-PA762",BlaupunktTablet:"Endeavour 800NG|Endeavour 1010",DigmaTablet:"\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",EvolioTablet:"ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",NexoTablet:"NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",UbislateTablet:"UbiSlate[\\s]?7C",PocketBookTablet:"Pocketbook",Hudl:"Hudl HT7S3",TelstraTablet:"T-Hub2",GenericTablet:"Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD"},oss:{AndroidOS:"Android",BlackBerryOS:"blackberry|\\bBB10\\b|rim tablet os",PalmOS:"PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",SymbianOS:"Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",WindowsMobileOS:"Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",WindowsPhoneOS:"Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",iOS:"\\biPhone.*Mobile|\\biPod|\\biPad",MeeGoOS:"MeeGo",MaemoOS:"Maemo",JavaOS:"J2ME/|\\bMIDP\\b|\\bCLDC\\b",webOS:"webOS|hpwOS",badaOS:"\\bBada\\b",BREWOS:"BREW"},uas:{Chrome:"\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",Dolfin:"\\bDolfin\\b",Opera:"Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",Skyfire:"Skyfire",IE:"IEMobile|MSIEMobile",Firefox:"fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",Bolt:"bolt",TeaShark:"teashark",Blazer:"Blazer",Safari:"Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",Tizen:"Tizen",UCBrowser:"UC.*Browser|UCWEB",baiduboxapp:"baiduboxapp",baidubrowser:"baidubrowser",DiigoBrowser:"DiigoBrowser",Puffin:"Puffin",Mercury:"\\bMercury\\b",ObigoBrowser:"Obigo",NetFront:"NF-Browser",GenericBrowser:"NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"},props:{Mobile:"Mobile/[VER]",Build:"Build/[VER]",Version:"Version/[VER]",VendorID:"VendorID/[VER]",iPad:"iPad.*CPU[a-z ]+[VER]",iPhone:"iPhone.*CPU[a-z ]+[VER]",iPod:"iPod.*CPU[a-z ]+[VER]",Kindle:"Kindle/[VER]",Chrome:["Chrome/[VER]","CriOS/[VER]","CrMo/[VER]"],Coast:["Coast/[VER]"],Dolfin:"Dolfin/[VER]",Firefox:"Firefox/[VER]",Fennec:"Fennec/[VER]",IE:["IEMobile/[VER];","IEMobile [VER]","MSIE [VER];"],NetFront:"NetFront/[VER]",NokiaBrowser:"NokiaBrowser/[VER]",Opera:[" OPR/[VER]","Opera Mini/[VER]","Version/[VER]"],"Opera Mini":"Opera Mini/[VER]","Opera Mobi":"Version/[VER]","UC Browser":"UC Browser[VER]",MQQBrowser:"MQQBrowser/[VER]",MicroMessenger:"MicroMessenger/[VER]",baiduboxapp:"baiduboxapp/[VER]",baidubrowser:"baidubrowser/[VER]",Safari:["Version/[VER]","Safari/[VER]"],Skyfire:"Skyfire/[VER]",Tizen:"Tizen/[VER]",Webkit:"webkit[ /][VER]",Gecko:"Gecko/[VER]",Trident:"Trident/[VER]",Presto:"Presto/[VER]",iOS:" \\bOS\\b [VER] ",Android:"Android [VER]",BlackBerry:["BlackBerry[\\w]+/[VER]","BlackBerry.*Version/[VER]","Version/[VER]"],BREW:"BREW [VER]",Java:"Java/[VER]","Windows Phone OS":["Windows Phone OS [VER]","Windows Phone [VER]"],"Windows Phone":"Windows Phone [VER]","Windows CE":"Windows CE/[VER]","Windows NT":"Windows NT [VER]",Symbian:["SymbianOS/[VER]","Symbian/[VER]"],webOS:["webOS/[VER]","hpwOS/[VER];"]},utils:{DesktopMode:"WPDesktop",TV:"SonyDTV|HbbTV",WebKit:"(webkit)[ /]([\\w.]+)",Bot:"Googlebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|facebookexternalhit",MobileBot:"Googlebot-Mobile|YahooSeeker/M1A1-R2D2",Console:"\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",Watch:"SM-V700"}},n={fullPattern:/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,shortPattern:/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i},o=Object.prototype.hasOwnProperty,p="UnknownPhone",q="UnknownTablet",r="UnknownMobile";return l="isArray"in Array?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},function(){var b,c,d,e,f,g;for(b in m.props)if(o.call(m.props,b)){for(c=m.props[b],l(c)||(c=[c]),f=c.length,e=0;f>e;++e)d=c[e],g=d.indexOf("[VER]"),g>=0&&(d=d.substring(0,g)+"([\\w._\\+]+)"+d.substring(g+5)),c[e]=new RegExp(d,"i");m.props[b]=c}a(m.oss),a(m.phones),a(m.tablets),a(m.uas),a(m.utils),m.oss0={WindowsPhoneOS:m.oss.WindowsPhoneOS,WindowsMobileOS:m.oss.WindowsMobileOS}}(),k.prototype={constructor:k,mobile:function(){return i(this._cache,this.ua,this.maxPhoneWidth),this._cache.mobile},phone:function(){return i(this._cache,this.ua,this.maxPhoneWidth),this._cache.phone},tablet:function(){return i(this._cache,this.ua,this.maxPhoneWidth),this._cache.tablet},userAgent:function(){return this._cache.userAgent===b&&(this._cache.userAgent=c(m.uas,this.ua)),this._cache.userAgent},os:function(){return this._cache.os===b&&(this._cache.os=c(m.oss0,this.ua)||c(m.oss,this.ua)),this._cache.os},version:function(a){return e(a,this.ua)},versionStr:function(a){return d(a,this.ua)},is:function(a){return g(a,this.userAgent())||g(a,this.os())||g(a,this.phone())||g(a,this.tablet())||g(a,c(m.utils,this.ua))},match:function(a){return a instanceof RegExp||(a=new RegExp(a,"i")),a.test(this.ua)},isPhoneSized:function(a){return k.isPhoneSized(a||this.maxPhoneWidth)},mobileGrade:function(){return this._cache.grade===b&&(this._cache.grade=j(this)),this._cache.grade}},k.isPhoneSized="undefined"!=typeof window&&window.screen&&window.screen.width?function(a){if(0>a)return b;var c=window.screen.width,d=window.devicePixelRatio||1,e=c/d;return a>=e}:function(){},k})}(function(){if("function"==typeof define&&define.amd)return define;if("undefined"!=typeof module&&module.exports)return function(a){module.exports=a()};if("undefined"!=typeof window)return function(a){window.MobileDetect=a()};throw new Error("unknown environment")}());

/*
* FastClick v1.0.6
* https://github.com/ftlabs/fastclick
*
* No restrictions licence 
*/
!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();

/**
 * Cargo Slideshow 2.0 
 */

(function( $ ) {
	$.fn.cargoSlideshow = function( options ) {

		// Reference
		var $this = this;

		// Structure
		var cS = {

			defaults : {
				
				// Transitions
				"transition" : "left-right",
				"transition_duration"   : 0.3,

				// Autoplay
				"autoplay"          : false,
				"autoplay_duration" : 3,

				// Positioning
				"responsive" : false,
				"center"     : false,

				// Display
				"navigation"         : true,
				"thumbnails"         : false,
				"square_thumbnails"  : false,
				"toggle_thumbnails"  : false,
				"default_thumbnails" : false,
				"captions"           : true,

				// Callbacks
				on : function() {
					Cargo.Event.trigger("slideshow_on", $this, cS);
				},

				startTransition  : function() {
					Cargo.Event.trigger("slideshow_transition_start", $this, cS); 
				},

				endTransition : function() {
					Cargo.Event.trigger("slideshow_transition_finish", $this, cS);
				},

				resize : function() {
					Cargo.Event.trigger("slideshow_resize", $this, cS);
				}

			},

			ticking : false,
			options : null,

			setOptions : function() {

				// Extend the defaults
				cS.options = $.extend(cS.defaults, options);

				// Fix the durations
				if ( cS.options.transition == "none" ) {
					cS.options.transition_duration = 0;
				}

				// Custom options for the design JS
				Cargo.Event.trigger("slideshow_custom_options", $this, cS);

			},


			/**
			 * Global data
			 */

			data : {

				"browser" : null,
				"mobile"  : true,

				"autoplay"  : null,
				"direction" : "forwards",
				"hover"     : false,
        "first_load": true,

				// Transition function
				"transition" : null,

				"custom_resize_parent" : null,

				container : {
					"height" : 0,
					"width"  : 0
				},

				slides : {
					"active" : 0,
					"prev"   : -1,
					"count"  : -1
				},

				parent : {
					"height" : 0,
					"width"  : 0
				},

				"thumb_margin" : 0

			},

			/**
			 * Master
			 */

			on : function( ) {

				// If initialized ignore
				if ( $this.attr("data-slideshow-initialized") !== undefined) {
					return false;
				}

				Cargo.Core.Slideshow.SlideshowObjects[$this.attr('data-id')] = cS;

				cS.setOptions();
				cS.setElements();
				cS.setSlides();

				// Activate if there are images
				// slides.count starts at 0 instead of 1
				if ( cS.data.slides.count >= 0 ) {

					// Data
					cS.setBrowser();
					cS.setData();

					// Interface
					cS.setThumbnails();
					cS.setTransition();

					// Mobile
					if ( cS.data.mobile ) { 
						cS.setMobile();
					} else {
						cS.setEvents();
					}

					// Start at the begining
					cS.setFirstSlide();

					// Navigation
					if ( cS.options.navigation || cS.options.toggle_thumbnails ) { 
						cS.setNavigation();
						cS.showNavigation();
					}

					// Options
					if ( cS.options.autoplay )   { cS.setupAutoplay() }
					if ( cS.options.responsive ) { cS.enableResponsive() }

					// Thumbnails
					if ( cS.options.thumbnails ) {
						 cS.showThumbnails();
					} 

					// Toggle link
					if ( cS.options.toggle_thumbnails ) { 
						cS.setToggleThumbnails();
						cS.hideThumbnails();
					}

					// If toggle is shown and thumbs are enabled
					if ( cS.options.toggle_thumbnails && cS.options.thumbnails ) {
						cS.showThumbnails();
					}

					// Thumbs by default
					if ( cS.options.default_thumbnails ) {
						cS.showThumbnails();
						cS.hideContainer();
						cS.hideNavigation();
						cS.stopAutoplay();
					}

				}

				// Mark as initialized
				$this.attr("data-slideshow-initialized", "true")

				// Callback
				cS.options.on($this, cS);


				// Re-attach navigation behavior after inspector closes.
				Cargo.Event.on('inspector_unload', function(){
					cS.setNavigation();
				});

			},

			off : function( ) {
				// console.log("off");
			},

			requestTick: function() {
				if (!self.vars.ticking) {
					requestAnimationFrame(cS.animationFrameUpdate);
					cS.ticking = true;
				}
			},

			animationFrameUpdate: function(){
				cS.ticking = false;
			},

			/**
			 * Browers
			 * - Returns the proper browser prefix for the css transitions
			 */
			setBrowser : function() {

				var thisBody = document.body || document.documentElement,
					thisStyle = thisBody.style;

				// Check for default
				if ( thisStyle.transition !== undefined ) {
					cS.data.browser = "";
				}

				// Check for browsers
				if ( thisStyle.WebkitTransition !== undefined ) {
					cS.data.browser = "-webkit-";
				} else if ( thisStyle.MozTransition !== undefined ) {
					cS.data.browser = "-moz-";
				} else if ( thisStyle.MsTransition !== undefined ) {
					cS.data.browser = "-ms-";
				}

				// Mobile check
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
					cS.data.mobile = true;
				} else {
					cS.data.mobile = false;
				}

			},

			setData : function( ) {
				cS.elements.$thumbnails.find("> *:first").css("marginRight");
			},

			/**
			 * Elements
			 * - Caches the elements for future use
			 */

			elements : {

				"$parent"     : null,
				"$container"  : null,
				"$navigation" : null,
				"$thumbnails" : null,
				"$widestSlide": null

			},

			setElements : function() {

				// Parent for resizing
				if ( $("[data-resize-parent]").length > 0 ) {
					cS.data.custom_resize_parent = true;
					cS.elements.$parent          = $("[data-resize-parent]");
				} else {
					cS.elements.$parent = $this.parent();
				}

				cS.elements.$container  = $this.find( $(".slideshow_container") );
				cS.elements.$navigation = $this.find( $(".slideshow_navigation") );
				cS.elements.$thumbnails = $this.find( $(".slideshow_thumbnails") );
				cS.elements.$caption    = $this.find( $(".slideshow_caption") );
			},

			/**
			 * Slides
			 * - Setup and cache the slides
			 */

			slides : [ ],

			setSlides : function( ) {

				// Reset
				cS.slides = [ ];

				// Cleanup unwanted elements
				$this.find("br").remove();

				// Loop
				$this.find($(".slideshow_container")).children().each(function(i) {

					// Update the data
					cS.data.slides.count = i;

					// Store the slide
					var $slide = $(this);

					if($slide.is('.video_component')){
						$slide.attr('data-elementresizer-no-centering', '');
					}

					// Update the data attr
					$slide.attr("data-id", i);

					// Push to cache
					cS.slides.push( $slide );

				});

				cS.getWidestSlide();
			},

			/**
			 * Autoplay
			 */

			setupAutoplay : function() {

				// Hover pause
				cS.elements.$container.mouseenter(function() {
					clearInterval(cS.data.autoplay);
				});

				cS.elements.$container.mouseleave(function() {
					cS.startAutoplay();
				});

				// Start
				cS.startAutoplay();

			},

			startAutoplay : function() {

				// Setup
				cS.data.autoplay = setInterval(function() {
					cS.setNext();
				}, cS.options.autoplay_duration * 1000 , "autoplay");

			},

			stopAutoplay : function() {
				cS.elements.$container.unbind("mouseenter mouseleave");
				clearInterval(cS.data.autoplay);
			},

			resizeContainer : function() {

				if(cS.data.slides.count === -1){
					return 0;
				}

				var $slide = cS.slides[cS.data.slides.active];

				cS.getWidestSlide();

				var height = $slide.height(),
					width  = $slide.width(),
					maxWidth = cS.elements.$widestSlide.width();

				// Resize the container
				cS.elements.$container.css({
					"height" : height,
					"width"  : width
				});

				if(maxWidth === null || maxWidth === 0){
					maxWidth = width;
				}

				// set slideshow width
				$this.width(maxWidth);

				// recheck after the image has loaded.
				if($slide.is('img')){
					var self = this;
					if($slide[0].complete === false) {
						$slide[0].onload = function(){
							self.resizeContainer();
						}
					}
				}

				return maxWidth;
			},

			setFirstSlide : function() {

				cS.data.slides.prev   = 0;
				cS.data.slides.active = 0;

				cS.data.transition();
				// Options
				if ( cS.options.captions)    { cS.setCaption() }

				cS.setClasses();
				cS.resizeContainer();

				if ( cS.options.navigation ) { cS.updateNavigation() }

				// Active slide
				if ( cS.options.thumbnails ) {
					cS.elements.$thumbnails.children().removeClass("slideshow_active");
					cS.elements.$thumbnails.find("[data-id='" + cS.data.slides.active + "']").addClass("slideshow_active");
				}

			},

			getWidestSlide : function(){
				/*var validSelectors = ['img', 'object', 'iframe', 'video'];
					widestSlideRatio = 0,
					result = $();

				$.each(cS.slides, function(){
					if(validSelectors.indexOf(this[0].nodeName.toLowerCase()) !== -1){
						var w = this.width(),
							h = this.height(),
							ratio = w / h;
						
						if(!isNaN(ratio) && w !== 0 && h !== 0){
							if(ratio > widestSlideRatio){
								widestSlideRatio = ratio;
								result = this;
							}
						}
					}
				});*/

				var validSelectors = ['img', 'object', 'iframe', 'video'];
					maxWidth = 0,
					result = $();

				$.each(cS.slides, function(){
					if(validSelectors.indexOf(this[0].nodeName.toLowerCase()) !== -1){
						var w = this.width();

						if(w > maxWidth){
							maxWidth = w;
							result = this;
						}
					}
				});


				cS.elements.$widestSlide = result;
				
				return result;
			},

			/**
			 * Slide methods
			 */

			setNext : function( ) {
				cS.setActive( cS.data.slides.active + 1 );
			},

			setPrev : function( ) {
				cS.setActive( cS.data.slides.active - 1 );
			},

			getNextSlide : function() {
				return cS.elements.$container.find("[data-id='" + (cS.data.slides.active + 1) + "']");
			},

			getPrevSlide : function() {
				return cS.elements.$container.find("[data-id='" + (cS.data.slides.active - 1) + "']");
			},

			getActiveSlide : function() {
				return cS.elements.$container.find("[data-id='" + (cS.data.slides.active) + "']");
			},

			setActive : function( slide ) {

        var do_transition = ( slide != cS.data.slides.active );

        if ( ( $this.hasClass("slideshow_transitioning") && ! cS.data.mobile ) ) {
					return false;
				}

				// Transition
				if(do_transition) {
            // Set data
          cS.setDirection(slide);
          cS.setScope(slide);

          cS.data.transition();

  				if ( cS.options.captions) { 
  					cS.setCaption();
  				}

  				// Update the interface
  				cS.setClasses();
  				cS.resizeContainer();

  				// Options
  				if ( cS.options.navigation ) { 
  					cS.updateNavigation();
  				}

  				// Callback
  				cS.options.startTransition($this, cS);

  				// Active slide
  				if ( cS.options.thumbnails ) {
  					cS.elements.$thumbnails.children().removeClass("slideshow_active");
  					cS.elements.$thumbnails.find("[data-id='" + cS.data.slides.active + "']").addClass("slideshow_active");
  				}
        } // end do transition

				// Hide thumbnails if togglable
				if ( cS.options.toggle_thumbnails ) {
					cS.hideThumbnails();
				}

				// If toggle is shown and thumbs are enabled
				if ( cS.options.toggle_thumbnails && cS.options.thumbnails ) {
					cS.showThumbnails();
				}

        var _this = this;
        // Chain ended
        cS.delay(function() {

          cS.endTransition();
          if(_this.data.first_load === false) {
            _this.data.first_load = false;
            cS.removeClasses();
          }
        }, ( cS.options.transition_duration * 1000 ), "delay_transition");

			},

			setDirection : function ( slide ) {

				if ( slide > cS.data.slides.active ) {
					cS.data.direction = "forwards";
				} else if ( slide < cS.data.slides.active ) {
					cS.data.direction = "backwards";
				}

			},

			setScope : function( slide ) {

				// Set the previous slide
				cS.data.slides.prev = cS.data.slides.active;

				// Check slide against the scope
				if ( slide > cS.data.slides.count ) {
					slide = 0;
				} else if ( slide < 0 ) {
					slide = cS.data.slides.count;
				}

				// Set active
				cS.data.slides.active = slide;

			},

			setClasses : function() {

				// Reset classes
				cS.elements.$container.children().removeClass("slideshow_inactive slideshow_active slideshow_prev slideshow_next");

				// Set new slide classes
				cS.slides[cS.data.slides.active].addClass("slideshow_active");
				cS.slides[cS.data.slides.prev].addClass("slideshow_prev");

				// Set inactive class
				cS.elements.$container.children().not(".slideshow_prev, .slideshow_active").addClass("slideshow_inactive");

			},

			removeClasses : function() {

				// Reset classes
				cS.slides[cS.data.slides.prev].removeClass("slideshow_prev").addClass("slideshow_inactive");

			},  

			/**
			 * Navigation
			 */

			setNavigation : function() {

				// Prev
				cS.elements.$navigation.find(".slideshow_prev").click(function(e) {
					e.preventDefault();
					cS.setPrev();
					cS.showContainer();
					cS.stopAutoplay();
				});

				// Next
				cS.elements.$navigation.find(".slideshow_next").click(function(e) {
					e.preventDefault();
					cS.setNext();
					cS.showContainer();
					cS.stopAutoplay();
				});

				cS.elements.$navigation.find(".slideshow_toggle_thumbnails").click(function(e) {
					e.preventDefault();

					// Hide the nav if default to thumbs
					if ( cS.options.default_thumbnails ) {
						cS.hideNavigation();
					}

					cS.toggleThumbnails();
					cS.stopAutoplay();

				});

			},

			showNavigation : function() {
				$this.removeClass("navigation_hidden");
			},

			hideNavigation : function() {
				$this.addClass("navigation_hidden");
			},

			updateNavigation : function() {

				var text = ( cS.data.slides.active + 1 ) + " of " + ( cS.data.slides.count + 1 );
				cS.elements.$navigation.find(".slideshow_position").text(text);

			},

			/**
			 * Thumbnails
			 */

			setThumbnails : function() {

				// Add each image to thumbs
				$.each( cS.slides, function(i, $slide) {

					// If not an image
					if ( ! $slide.is("img") && ($slide.is("iframe") || $slide.is(".video_component")) ) {

						// Some data
						var title = "Video",
							id    = $slide.attr("data-id");

						// If there is a title
						if ( $slide.attr("alt") !== undefined ) {
							title = $slide.attr("alt");
						}

						var img = $( '<img src="" data-id="' + id + '" align="left">' );

						cS.elements.$thumbnails.append(img.css('visibility', 'hidden'));

						cS.getVideoThumbnail( $slide, img );

					// Image
					} else if ( $slide.is("img") ) {

						// Clone and append to thumbs
						$slide
							.clone()
							.attr('data-no-elementresizer', '')
							.removeAttr('style')
							.appendTo(cS.elements.$thumbnails);

					}

				});

				cS.elements.$thumbnails.children().click(function() {

					var duration = cS.options.transition_duration;

					// Adjust the transition
					if ( $this.hasClass("container_hidden") ) {
						
						cS.removeTransitionStyle();
						cS.options.transition_duration = 0;
						cS.setTransitionStyle();

						// Reset the transition
						setTimeout(function() {
							cS.options.transition_duration = duration;
							cS.removeTransitionStyle();
							cS.setTransitionStyle();
						}, 100);

					}

					cS.setActive( parseInt($(this).attr("data-id")) );

					cS.showContainer();
					cS.showNavigation();

					// Toggle the container if togglable
					if (cS.options.default_thumbnails && !cS.options.thumbnails) {
						cS.hideThumbnails();
					}

					// If toggle is shown and thumbs are enabled
					if ( cS.options.toggle_thumbnails && cS.options.thumbnails ) {
						cS.showThumbnails();
					}

					// If the top of the slideshow is past the top of the window
					if ( $(window).scrollTop() > $this.offset().top ) {
						$(window).scrollTop( $this.offset().top - 35);
					}

					cS.stopAutoplay();

				});

			},

			setToggleThumbnails : function() {
				$this.addClass("slideshow_toggle_active");
			},

			toggleThumbnails : function() {

				// If thumbnails are always visible and toggle is enabled
				if ( cS.options.toggle_thumbnails && cS.options.thumbnails ) {
						
					if ( $this.hasClass("container_hidden") ) {
						cS.showContainer();
					} else {
						cS.hideContainer();
					}

				} else {

					if ( $this.hasClass("thumbnails_active") ) {
						cS.showContainer();
						cS.hideThumbnails();
					} else {
						cS.hideContainer();
						cS.showThumbnails();
					}

				}

			},

			showThumbnails : function() {
				$this.addClass("thumbnails_active");
				if ( $this.hasClass("container_hidden") ) {
					cS.hideCaption();
				}
				Cargo.Event.trigger("slideshow_thumbnails_toggle", $this, cS);

			},

			hideThumbnails : function() {
				$this.removeClass("thumbnails_active");
				cS.showCaption();
				Cargo.Event.trigger("slideshow_thumbnails_toggle", $this, cS);
			},

			/**
			 *  Retrieves video data for Youtube & Vimeo urls. Modified by Aart Röst.
			 *  
			 *  @param  {String} url
			 *  @return {Object|Boolean} Object with provider & id fields or false if no match.
			 *  
			 *  @author Shawn Delano - http://shawndelano.com/extract-and-validate-youtube-or-vimeo-id/
			 *  
			 */
			
			getVideoThumbnail : function( slide, thumbnail ) {

				var url = slide.attr("src");

				if(url === undefined) {
					url = '';
				}

				var result = url.match(/\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be))\/(video\/|embed\/|watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/);
			 	
				var match = {
					provider: null,
					url: (result !== null ? result[2] : null ),
					id: (result !== null ? result[5] : null ),
					thumb: '/_gfx/default-posterframe.jpg'
				}

				if(result === null) {
					// check if we're dealing with a cargo video
					var cargoPoster = slide.find('#poster');

					if(cargoPoster.length > 0){
						match.provider = 'cargo';
						match.thumb =cargoPoster.attr('value');
					}
				}

				if(match.url == 'youtube.com' || match.url == 'youtu.be'){
					var request = $.ajax({
						url: 'http://gdata.youtube.com/feeds/api/videos/'+match.id+'?alt=json',
						timeout: 2000,
						success: function(data){
							match.provider = 'youtube';
							match.thumb = data.entry['media$group']['media$thumbnail'][0].url;
						}
					});
				}

				if(match.url == 'vimeo.com'){
					var request = $.ajax({
						url: 'http://vimeo.com/api/v2/video/'+match.id+'.json',
						timeout: 2000,
						dataType: 'jsonp',
						success: function(data){
							match.provider = 'vimeo';
							match.thumb = data[0].thumbnail_medium;
						}
					});
				}

				if(request){
					request.always(function(){
						if(match.provider) {
							thumbnail.attr('src', match.thumb).css('visibility', '');
						} else {
							thumbnail.attr('src', match.thumb).css('visibility', '');
						}
					});
				} else {
					thumbnail.attr('src', match.thumb).css('visibility', '');
				}

			},

			/**
			 * Captions
			 */

			setCaption : function() {

				var caption = cS.slides[cS.data.slides.active].attr("caption");

				// If there is a caption
				if ( caption !== undefined ) {
					cS.elements.$caption.html( caption );
					cS.showCaption();
				} else {
					cS.elements.$caption.empty();
					cS.hideCaption();
				}
			},

			showCaption : function() {
				$this.addClass("caption_active");
				cS.elements.$caption.addClass("slideshow_active");
			},

			hideCaption : function() {
				$this.removeClass("caption_active");
				cS.elements.$caption.removeClass("slideshow_active");
			},

			/**
			 * Container
			 */

			showContainer : function() {
				$this.removeClass("container_hidden");
				this.resizeContainer();
			},

			hideContainer : function() {
				$this.addClass("container_hidden");
			},

			/**
			 * Events
			 */

			setEvents : function() {
				
					$.each( cS.slides, function(i, $slide) {
            if ( $(this).is("img") ) {
							$(this).on("click", function(e) {
                // If the lightbox is enabled, and we have a src_o image, the don't progress
                if ( ! Cargo.Model.DisplayOptions.GetLightboxView() || typeof $(this).attr("src_o") == "undefined" ) {
  								cS.setNext();
  								cS.stopAutoplay();
                  return false;
                }
							});
						}

					});

			},

			endTransition : function() {

				$this.removeClass("slideshow_transitioning");

				// Callback
				cS.options.endTransition($this, cS);

			},

			setTransition : function ( ) {

				// Store the transition
				var transition;

				// Mobile transition
				if ( cS.data.mobile ) {
					if ( cS.options.transition == "left-right" || cS.options.transition == "right-left" ) {
						cS.options.transition = "left-right";
					}
				}

				// Set the transition
				if ( cS.options.transition == "left-right" || cS.options.transition == "right-left" ) {
					transition = cS.transitionHorizontal;
				} else if ( cS.options.transition == "top-bottom" || cS.options.transition == "bottom-top" ) {
					transition = cS.transitionVertical;
				} else if ( cS.options.transition == "fade" ) {
					transition = cS.transitionFade;
				} else {
					transition = cS.transitionNone;
				}

				// Set the transition
				cS.data.transition = transition;

				// Delay transition class to allow init position without transition
				cS.delay(function() {

					// Add the related class to the container
					$this.addClass("transition_" + cS.options.transition);

					// Add the related styles
					cS.setTransitionStyle();
					cS.endTransition();

				}, 10, "set-transition");

			},

			removeTransitionStyle : function() {
				$('style[data-id=' + $this.attr("data-id") +']').remove();
			},

			setTransitionStyle : function() {

				// Slideshow ID
				var id           = $this.attr("data-id"),
					style_head   = '<style data-id="' + id + '" data-transition="' + cS.options.transition + '"> ',
					style_footer = '</style>',
					duration     = cS.options.transition_duration,
					transition, style;

				if ( cS.options.transition == "fade" ) {

					style =
						// Stack
						// Hide inactive
						'.slideshow .slideshow_container > *.slideshow_active { ' +
							'z-index: 9; ' +
						'} ' +
						'.slideshow .slideshow_container > *.slideshow_inactive { ' +
							'visibility: hidden; ' +
							'opacity: 0; ' +
							'z-index: 1; ' +
						'} ' +
						// Transition
						'.slideshow[data-id="' + id + '"].slideshow_transitioning .slideshow_container > *:not(.slideshow_inactive) { ' +
							cS.data.browser + 'transition: opacity ' + duration + 's ease; ' +
						'} ';

				} else if ( cS.options.transition == "left-right" || cS.options.transition == "right-left" || cS.options.transition == "top-bottom" || cS.options.transition == "bottom-top" ) {

					style =
						// Container overflow
						'.slideshow[data-id="' + id + '"] .slideshow_container {' + 
							'overflow: hidden; ' +
						'} ' +
						// Stack
						'.slideshow .slideshow_container > *.slideshow_active { ' +
							'z-index: 9; ' +
						'} ' +
						// Hide inactive
						'.slideshow .slideshow_container > *.slideshow_inactive { ' +
							'visibility: hidden; ' +
							'opacity: 0; ' +
							'z-index: 1; ' +
						'} ' +
						// Transition
						'.slideshow[data-id="' + id + '"].slideshow_transitioning .slideshow_container > *:not(.slideshow_inactive) { ' +
							cS.data.browser + 'transition: ' + cS.data.browser + 'transform ' + duration + 's ease; ' +
						'} ';

				}

				// Resize transition on container
				if ( cS.options.transition !== "none" ) {
				
					transition = 
						// '.slideshow[data-id="' + id + '"]' +' { background: black }';
						'.slideshow[data-id="' + id + '"].slideshow_resize .slideshow_container { ' +
							cS.data.browser + 'transition: height ' + duration + 's ease, width ' + duration + 's ease; ' +
						'} ';

				}

				$(style_head + transition + style + style_footer).appendTo($this);

			},

			/**
			 * Transitions
			 */

			transitionNone : function() {

				var $active = cS.slides[cS.data.slides.active];

				$.each( cS.slides, function(i, $slide) {
					$slide.hide();
				});

				$active.show();

			},

			transitionFade : function() {

				var $active = cS.slides[cS.data.slides.active];

				$this.addClass("slideshow_transitioning");

				$.each( cS.slides, function(i, $slide) {
					$slide.css("opacity", 0);
				});

				$active.css("opacity", 1);

			},

			transitionHorizontal : function() {

				// Elements
				var $prev   = cS.slides[cS.data.slides.prev],
					$active = cS.slides[cS.data.slides.active],
					transform = cS.data.browser + "transform";

				// Set the start position for the active slide
				cS.transitionHorizontalStart();

				// Set the new position
				setTimeout(function() {
					cS.transitionHorizontalFinish();
				}, 1);

			},

				transitionHorizontalStart : function() {

					var $prev   = cS.slides[cS.data.slides.prev],
						$active = cS.slides[cS.data.slides.active],
						transform = cS.data.browser + "transform";

					if ( cS.data.direction == "forwards" ) {

						if ( cS.options.transition == "left-right" ) {
							$active.css( transform, "translate(" + $prev.width() + "px, 0)" );
						} else if ( cS.options.transition == "right-left" ) {
							$active.css( transform, "translate(-" + $active.width() + "px, 0)" );
						}

					} else if ( cS.data.direction == "backwards" ) {

						if ( cS.options.transition == "right-left" ) {
							$active.css( transform, "translate(" + $prev.width() + "px, 0)" );
						} else if ( cS.options.transition == "left-right" ) {
							$active.css( transform, "translate(-" + $active.width() + "px, 0)" );
						}

					}

				},

				transitionHorizontalFinish : function() {

					var $prev   = cS.slides[cS.data.slides.prev],
						$active = cS.slides[cS.data.slides.active],
						transform = cS.data.browser + "transform";

					$this.addClass("slideshow_transitioning");

					if ( cS.data.direction == "forwards" ) {

						if ( cS.options.transition == "right-left" ) {
							$prev.css( transform, "translate(" + $active.width() + "px, 0)" );
						} else if ( cS.options.transition == "left-right" ) {
							$prev.css( transform, "translate(-" + $prev.width() + "px, 0)" );
						}

					} else if ( cS.data.direction == "backwards" ) {

						if ( cS.options.transition == "left-right" ) {
							$prev.css( transform, "translate(" + $active.width() + "px, 0)" );
						} else if ( cS.options.transition == "right-left" ) {
							$prev.css( transform, "translate(-" + $prev.width() + "px, 0)" );
						}

					}

					/**
					 *
					 *	keeping this bug around for the archives. Don't use
					 *	variables as object literal keys.
					 *
					 *	$active.css({
					 *		transform : "translate(0 , 0)"
					 *	});
					 *
					 *	>>>>
					 *	
					 *	$active.css( transform, "translate(0 , 0)" );
					 *	
					 */

					$active.css( transform, "translate(0 , 0)" );

				},

			transitionVertical : function() {

				// Elements
				var $prev   = cS.slides[cS.data.slides.prev],
					$active = cS.slides[cS.data.slides.active],
					transform = cS.data.browser + "transform";

				// Set the start position for the active slide
				cS.transitionVerticalStart();

				// Set the new position
				setTimeout(function() {
					cS.transitionVerticalFinish();
				}, 1);

			},

				transitionVerticalStart : function() {

					var $prev   = cS.slides[cS.data.slides.prev],
						$active = cS.slides[cS.data.slides.active],
						transform = cS.data.browser + "transform";

					if ( cS.data.direction == "forwards" ) {

						if ( cS.options.transition == "bottom-top" ) {
							$active.css( transform, "translate(0, " + $prev.height() + "px)" );
						} else if ( cS.options.transition == "top-bottom" ) {
							$active.css( transform, "translate(0, -" + $active.height() + "px)" );
						}

					} else if ( cS.data.direction == "backwards" ) {

						if ( cS.options.transition == "top-bottom" ) {
							$active.css( transform, "translate(0, " + $prev.height() + "px)" );
						} else if ( cS.options.transition == "bottom-top" ) {
							$active.css( transform, "translate(0, -" + $active.height() + "px)" );
						}

					}

				},

				transitionVerticalFinish : function() {

					var $prev   = cS.slides[cS.data.slides.prev],
						$active = cS.slides[cS.data.slides.active],
						transform = cS.data.browser + "transform";

					$this.addClass("slideshow_transitioning");

					if ( cS.data.direction == "forwards" ) {

						if ( cS.options.transition == "top-bottom" ) {
							$prev.css( transform, "translate(0, " + $active.height() + "px)" );
						} else if ( cS.options.transition == "bottom-top" ) {
							$prev.css( transform, "translate(0, -" + $prev.height() + "px)" );
						}

					} else if ( cS.data.direction == "backwards" ) {

						if ( cS.options.transition == "bottom-top" ) {
							$prev.css( transform, "translate(0, " + $active.height() + "px)" );
						} else if ( cS.options.transition == "top-bottom" ) {
							$prev.css( transform, "translate(0, -" + $prev.height() + "px)" );
						}

					}

					$active.css( transform, "translate(0 , 0)" );

				},

			/**
			 * Mobile
			 */

			setMobile : function() {

				Hammer(cS.elements.$container).on('swipeleft', function(e){

					cS.setNext();
					cS.stopAutoplay();

				}).on('swiperight', function(e){

					cS.setPrev();
					cS.stopAutoplay();

				}).on('tap', function(e){

					if ( ! Cargo.Model.DisplayOptions.GetLightboxView() ) {	
						cS.setNext();
						cS.stopAutoplay();
					}

				});

			},

			/**
			 * Timeouts stores debounced events
			 * - Used to debounce events which are triggered often, like window resize
			 */
			timeouts : { },

			delay : function (callback, ms, uniqueId) {

				// Does it have an ID?
				if ( !uniqueId ) {
					uniqueId = "Don't call this twice without a uniqueId";
				}

				// If it already exists, clear it
				if ( cS.timeouts[uniqueId] ) {
					clearTimeout ( cS.timeouts[uniqueId] );
				}

				// Add the timeout
				cS.timeouts[uniqueId] = setTimeout(callback, ms);

			}

		};

		// Public methods
		return {

			// Init
			init : cS.on(),

			// Helpers
			data    : cS.data,
			options : cS.options,

			on  : cS.on,
			off : cS.off,

			setNext : cS.setNext,
			setPrev : cS.setPrev,

			resizeContainer : cS.resizeContainer,
			setPrevious : cS.setPrevious
		};

	};
})(jQuery);

// requestAnimationFrame polyfill

(function(window) {
	'use strict';

	var lastTime = 0,
		vendors = ['moz', 'webkit', 'o', 'ms'],
		x;

	// Remove vendor prefixing if prefixed and break early if not
	for (x = 0; x < vendors.length && !window.requestAnimationFrame; x += 1) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
								   || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	// Check if full standard supported
	if (!window.cancelAnimationFrame) {
		// Check if standard partially supported
		if (!window.requestAnimationFrame) {
			// No support, emulate standard
			window.requestAnimationFrame = function(callback) {
				var now = new Date().getTime(),
					nextTime = Math.max(lastTime + 16, now);

				return window.setTimeout(function() { callback(lastTime = nextTime); }, nextTime - now);
			};

			window.cancelAnimationFrame = window.clearTimeout;
		} else {
			// Emulate cancel for browsers that don't support it
			vendors = window.requestAnimationFrame;
			lastTime = {};

			window.requestAnimationFrame = function(callback) {
				var id = x; // Generate the id (x is initialized in the for loop above)
				x += 1;
				lastTime[id] = callback;

				// Call the vendors requestAnimationFrame implementation
				vendors(function(timestamp) {
					if (lastTime.hasOwnProperty(id)) {
						var error;
						try {
							lastTime[id](timestamp);
						} catch (e) {
							error = e;
						} finally {
							delete lastTime[id];
							if (error) { throw error; }         // re-throw the error if an error occurred
						}
					}
				});

				// return the id for cancellation capabilities
				return id;
			};

			window.cancelAnimationFrame = function(id) {
				delete lastTime[id];
			};
		}
	}

}(this));

/*! lightbox - v1.0.0 - Build date: 2016-06-16 */ 

(function(a,b){"use strict";!function(a,b){a.PhotoSwipe=b()}(this,function(){var c=function(c,e,f,g){var h={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var c=a.clientYOffset;return c!==b?c:document.documentElement.scrollTop},unbind:function(a,b,c){h.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){h.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(h.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(h.features)return h.features;var b=h.createEl(),c=b.style,d="",e={};if(e.oldIE=document.all&&!document.addEventListener,e.touch="ontouchstart"in a,a.requestAnimationFrame&&(e.raf=a.requestAnimationFrame,e.caf=a.cancelAnimationFrame),e.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!e.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(e.isOldIOSPhone=!0))}var i=f.match(/Android\s([0-9\.]*)/),j=i?i[1]:0;j=parseFloat(j),j>=1&&(4.4>j&&(e.isOldAndroid=!0),e.androidVersion=j),e.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var k,l,m=["transform","perspective","animationName"],n=["","webkit","Moz","ms","O"],o=0;4>o;o++){d=n[o];for(var p=0;3>p;p++)k=m[p],l=d+(d?k.charAt(0).toUpperCase()+k.slice(1):k),!e[k]&&l in c&&(e[k]=l);d&&!e.raf&&(d=d.toLowerCase(),e.raf=a[d+"RequestAnimationFrame"],e.raf&&(e.caf=a[d+"CancelAnimationFrame"]||a[d+"CancelRequestAnimationFrame"]))}if(!e.raf){var q=0;e.raf=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-q)),e=a.setTimeout(function(){b(c+d)},d);return q=c+d,e},e.caf=function(a){clearTimeout(a)}}return e.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,h.features=e,e}};h.detectFeatures(),h.features.oldIE&&(h.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var i=this,j=25,k=3,l={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};h.extend(l,g);var m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa=function(){return{x:0,y:0}},pa=oa(),qa=oa(),ra=oa(),sa={},ta=0,ua={},va=oa(),wa=0,xa=!0,ya=[],za={},Aa=!1,Ba=function(a,b){h.extend(i,b.publicMethods),ya.push(a)},Ca=function(a){var b=cc();return a>b-1?a-b:0>a?b+a:a},Da={},Ea=function(a,b){return Da[a]||(Da[a]=[]),Da[a].push(b)},Fa=function(a){var b=Da[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(i,c)}},Ga=function(){return(new Date).getTime()},Ha=function(a){la=a,i.bg.style.opacity=a*l.bgOpacity},Ia=function(a,b,c,d,e){(!Aa||e&&e!==i.currItem)&&(d/=e?e.fitRatio:i.currItem.fitRatio),a[H]=x+b+"px, "+c+"px"+y+" scale("+d+")"},Ja=function(a){ga&&(a&&(v>i.currItem.fitRatio?Aa||(oc(i.currItem,!1,!0),Aa=!0):Aa&&(oc(i.currItem),Aa=!1)),Ia(ga,ra.x,ra.y,v))},Ka=function(a){a.container&&Ia(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},La=function(a,b){b[H]=x+a+"px, 0px"+y},Ma=function(a,b){if(!l.loop&&b){var c=p+(va.x*ta-a)/va.x,d=Math.round(a-vb.x);(0>c&&d>0||c>=cc()-1&&0>d)&&(a=vb.x+d*l.mainScrollEndFriction)}vb.x=a,La(a,q)},Na=function(a,b){var c=wb[a]-ua[a];return qa[a]+pa[a]+c-c*(b/w)},Oa=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Pa=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Qa=null,Ra=function(){Qa&&(h.unbind(document,"mousemove",Ra),h.addClass(c,"pswp--has_mouse"),l.mouseUsed=!0,Fa("mouseUsed")),Qa=setTimeout(function(){Qa=null},100)},Sa=function(){h.bind(document,"keydown",i),Q.transform&&h.bind(i.scrollWrap,"click",i),l.mouseUsed||h.bind(document,"mousemove",Ra),h.bind(a,"resize scroll",i),Fa("bindEvents")},Ta=function(){h.unbind(a,"resize",i),h.unbind(a,"scroll",u.scroll),h.unbind(document,"keydown",i),h.unbind(document,"mousemove",Ra),Q.transform&&h.unbind(i.scrollWrap,"click",i),X&&h.unbind(a,s,i),Fa("unbindEvents")},Ua=function(a,b){var c=kc(i.currItem,sa,a);return b&&(fa=c),c},Va=function(a){return a||(a=i.currItem),a.initialZoomLevel},Wa=function(a){return a||(a=i.currItem),a.w>0?l.maxSpreadZoom:1},Xa=function(a,b,c,d){return d===i.currItem.initialZoomLevel?(c[a]=i.currItem.initialPosition[a],!0):(c[a]=Na(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Ya=function(){if(H){var a=Q.perspective&&!J;return x="translate"+(a?"3d(":"("),void(y=Q.perspective?", 0px)":")")}H="left",h.addClass(c,"pswp--ie"),La=function(a,b){b.left=a+"px"},Ka=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ja=function(){if(ga){var a=ga,b=i.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=ra.x+"px",a.top=ra.y+"px"}}},Za=function(a){var b="";l.escKey&&27===a.keyCode?b="close":l.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,i[b]()))},$a=function(a){a&&($||Z||ha||V)&&(a.preventDefault(),a.stopPropagation())},_a=function(){i.setScrollOffset(0,h.getScrollY())},ab={},bb=0,cb=function(a){ab[a]&&(ab[a].raf&&L(ab[a].raf),bb--,delete ab[a])},db=function(a){ab[a]&&cb(a),ab[a]||(bb++,ab[a]={})},eb=function(){for(var a in ab)ab.hasOwnProperty(a)&&cb(a)},fb=function(a,b,c,d,e,f,g){var h,i=Ga();db(a);var j=function(){if(ab[a]){if(h=Ga()-i,h>=d)return cb(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),ab[a].raf=K(j)}};j()},gb={shout:Fa,listen:Ea,viewportSize:sa,options:l,isMainScrollAnimating:function(){return ha},getZoomLevel:function(){return v},getCurrentIndex:function(){return p},isDragging:function(){return X},isZooming:function(){return ca},setScrollOffset:function(a,b){ua.x=a,P=ua.y=b,Fa("updateScrollOffset",ua)},applyZoomPan:function(a,b,c,d){ra.x=b,ra.y=c,v=a,Ja(d)},init:function(){if(!m&&!n){d("init",i);var a;i.framework=h,i.template=c,i.bg=h.getChildByClass(c,"pswp__bg"),M=c.className,m=!0,Q=h.detectFeatures(),K=Q.raf,L=Q.caf,H=Q.transform,O=Q.oldIE,i.scrollWrap=h.getChildByClass(c,"pswp__scroll-wrap"),i.container=h.getChildByClass(i.scrollWrap,"pswp__container"),q=i.container.style,i.itemHolders=B=[{el:i.container.children[0],wrap:0,index:-1},{el:i.container.children[1],wrap:0,index:-1},{el:i.container.children[2],wrap:0,index:-1}],B[0].el.style.display=B[2].el.style.display="none",Ya(),u={resize:i.updateSize,scroll:_a,keydown:Za,click:$a};var f=Q.isOldIOSPhone||Q.isOldAndroid||Q.isMobileOpera;for(Q.animationName&&Q.transform&&!f||(l.showAnimationDuration=l.hideAnimationDuration=0),a=0;a<ya.length;a++)i["init"+ya[a]]();if(e){var g=i.ui=new e(i,h);g.init()}Fa("firstUpdate"),p=p||l.index||0,(isNaN(p)||0>p||p>=cc())&&(p=0),i.currItem=bc(p),(Q.isOldIOSPhone||Q.isOldAndroid)&&(xa=!1),c.setAttribute("aria-hidden","false"),l.modal&&(xa?c.style.position="fixed":(c.style.position="absolute",c.style.top=h.getScrollY()+"px")),P===b&&(Fa("initialLayout"),P=N=h.getScrollY());var j="pswp--open ";for(l.mainClass&&(j+=l.mainClass+" "),l.showHideOpacity&&(j+="pswp--animate_opacity "),j+=J?"pswp--touch":"pswp--notouch",j+=Q.animationName?" pswp--css_animation":"",j+=Q.svg?" pswp--svg":"",h.addClass(c,j),i.updateSize(),r=-1,wa=null,a=0;k>a;a++)La((a+r)*va.x,B[a].el.style);O||h.bind(i.scrollWrap,t,i),Ea("initialZoomInEnd",function(){i.setContent(B[0],p-1),i.setContent(B[2],p+1),B[0].el.style.display=B[2].el.style.display="block",l.focus&&c.focus(),Sa()}),i.setContent(B[1],p),i.updateCurrItem(),Fa("afterInit"),d("after-init",i),xa||(z=setInterval(function(){bb||X||ca||v!==i.currItem.initialZoomLevel||i.updateSize()},1e3)),h.addClass(c,"pswp--visible")}},close:function(){m&&(m=!1,n=!0,Fa("close"),d("closing",i),Ta(),ec(i.currItem,null,!0,i.destroy))},destroy:function(){Fa("destroy"),d("destroy",i),Zb&&clearTimeout(Zb),c.setAttribute("aria-hidden","true"),c.className=M,z&&clearInterval(z),h.unbind(i.scrollWrap,t,i),h.unbind(a,"scroll",i),Bb(),eb(),Da=null},panTo:function(a,b,c){c||(a>fa.min.x?a=fa.min.x:a<fa.max.x&&(a=fa.max.x),b>fa.min.y?b=fa.min.y:b<fa.max.y&&(b=fa.max.y)),ra.x=a,ra.y=b,Ja()},handleEvent:function(b){b=b||a.event,u[b.type]&&u[b.type](b)},goTo:function(a){a=Ca(a);var b=a-p;wa=b,p=a,i.currItem=bc(p),ta-=b,Ma(va.x*ta),eb(),ha=!1,i.updateCurrItem()},next:function(){i.goTo(p+1)},prev:function(){i.goTo(p-1)},updateCurrZoomItem:function(a){if(a&&(Fa("beforeChange",0),d("before-slide-change",i,0)),B[1].el.children.length){var b=B[1].el.children[0];ga=h.hasClass(b,"pswp__zoom-wrap")?b.style:null}else ga=null;fa=i.currItem.bounds,w=v=i.currItem.initialZoomLevel,ra.x=fa.center.x,ra.y=fa.center.y,a&&(Fa("afterChange"),d("after-slide-change",i))},invalidateCurrItems:function(){A=!0;for(var a=0;k>a;a++)B[a].item&&(B[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==wa){var b,c=Math.abs(wa);if(!(a&&2>c)){i.currItem=bc(p),Aa=!1,Fa("beforeChange",wa);var e=wa;null===e&&(e=0),d("slide-change",i,e),c>=k&&(r+=wa+(wa>0?-k:k),c=k);for(var f=0;c>f;f++)wa>0?(b=B.shift(),B[k-1]=b,r++,La((r+2)*va.x,b.el.style),i.setContent(b,p-c+f+1+1)):(b=B.pop(),B.unshift(b),r--,La(r*va.x,b.el.style),i.setContent(b,p+c-f-1-1));if(ga&&1===Math.abs(wa)){var g=bc(C);g.initialZoomLevel!==v&&(kc(g,sa),oc(g),Ka(g))}wa=0,i.updateCurrZoomItem(),C=p,Fa("afterChange")}}},updateSize:function(d){if(!xa&&l.modal){var e=h.getScrollY();if(P!==e&&(c.style.top=e+"px",P=e),!d&&za.x===a.innerWidth&&za.y===a.innerHeight)return;za.x=a.innerWidth,za.y=a.innerHeight,c.style.height=za.y+"px"}if(sa.x=i.scrollWrap.clientWidth,sa.y=i.scrollWrap.clientHeight,_a(),va.x=sa.x+Math.round(sa.x*l.spacing),va.y=sa.y,Ma(va.x*ta),Fa("beforeResize"),r!==b){for(var f,g,j,m=0;k>m;m++)f=B[m],La((m+r)*va.x,f.el.style),j=p+m-1,l.loop&&cc()>2&&(j=Ca(j)),g=bc(j),g&&(A||g.needsUpdate||!g.bounds)?(i.cleanSlide(g),i.setContent(f,j),1===m&&(i.currItem=g,i.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===f.index&&j>=0&&i.setContent(f,j),g&&g.container&&(kc(g,sa),oc(g),Ka(g));A=!1}w=v=i.currItem.initialZoomLevel,fa=i.currItem.bounds,fa&&(ra.x=fa.center.x,ra.y=fa.center.y,Ja(!0)),Fa("resize")},zoomTo:function(a,b,c,d,e){b&&(w=v,wb.x=Math.abs(b.x)-ra.x,wb.y=Math.abs(b.y)-ra.y,Oa(qa,ra));var f=Ua(a,!1),g={};Xa("x",f,g,a),Xa("y",f,g,a);var i=v,j={x:ra.x,y:ra.y};Pa(g);var k=function(b){1===b?(v=a,ra.x=g.x,ra.y=g.y):(v=(a-i)*b+i,ra.x=(g.x-j.x)*b+j.x,ra.y=(g.y-j.y)*b+j.y),e&&e(b),Ja(1===b)};c?fb("customZoomTo",0,1,c,d||h.easing.sine.inOut,k):k(1)}},hb=30,ib=10,jb={},kb={},lb={},mb={},nb={},ob=[],pb={},qb=[],rb={},sb=0,tb=oa(),ub=0,vb=oa(),wb=oa(),xb=oa(),yb=function(a,b){return a.x===b.x&&a.y===b.y},zb=function(a,b){return Math.abs(a.x-b.x)<j&&Math.abs(a.y-b.y)<j},Ab=function(a,b){return rb.x=Math.abs(a.x-b.x),rb.y=Math.abs(a.y-b.y),Math.sqrt(rb.x*rb.x+rb.y*rb.y)},Bb=function(){_&&(L(_),_=null)},Cb=function(){X&&(_=K(Cb),Sb())},Db=function(){return!("fit"===l.scaleMode&&v===i.currItem.initialZoomLevel)},Eb=function(a,b){return a&&a!==document?a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Eb(a.parentNode,b):!1},Fb={},Gb=function(a,b){return Fb.prevent=!Eb(a.target,l.isClickableElement),Fa("preventDragEvent",a,b,Fb),Fb.prevent},Hb=function(a,b){return b.x=a.clientX,b.y=a.clientY,b.id=a.identifier,b},Ib=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Jb=function(a,b,c){if(a-S>50){var d=qb.length>2?qb.shift():{};d.x=b,d.y=c,qb.push(d),S=a}},Kb=function(){var a=ra.y-i.currItem.initialPosition.y;return Math.min(1.2-Math.abs(a/(sa.y/2)),1)},Lb={},Mb={},Nb=[],Ob=function(a){for(;Nb.length>0;)Nb.pop();return I?(na=0,ob.forEach(function(a){0===na?Nb[0]=a:1===na&&(Nb[1]=a),na++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Nb[0]=Hb(a.touches[0],Lb),a.touches.length>1&&(Nb[1]=Hb(a.touches[1],Mb))):(Lb.x=a.clientX,Lb.y=a.clientY,Lb.id="",Nb[0]=Lb),Nb},Pb=function(a,c){var d,e,f,g,h=0,j=ra[a]+c[a],k=c[a]>0,m=vb.x+c.x,n=vb.x-pb.x;return d=j>fa.min[a]||j<fa.max[a]?l.panEndFriction:1,j=ra[a]+c[a]*d,!l.allowPanToNext&&v!==i.currItem.initialZoomLevel||(ga?"h"!==ia||"x"!==a||Z||(k?(j>fa.min[a]&&(d=l.panEndFriction,h=fa.min[a]-j,e=fa.min[a]-qa[a]),(0>=e||0>n)&&cc()>1?(g=m,0>n&&m>pb.x&&(g=pb.x)):fa.min.x!==fa.max.x&&(f=j)):(j<fa.max[a]&&(d=l.panEndFriction,h=j-fa.max[a],e=qa[a]-fa.max[a]),(0>=e||n>0)&&cc()>1?(g=m,n>0&&m<pb.x&&(g=pb.x)):fa.min.x!==fa.max.x&&(f=j))):g=m,"x"!==a)?void(ha||aa||v>i.currItem.fitRatio&&(ra[a]+=c[a]*d)):(g!==b&&(Ma(g,!0),aa=g!==pb.x),fa.min.x!==fa.max.x&&(f!==b?ra.x=f:aa||(ra.x+=c.x*d)),g!==b)},Qb=function(b){if(!("mousedown"===b.type&&b.button>0)){if(ac)return void b.preventDefault();if(!W||"mousedown"!==b.type){if(Gb(b,!0)&&b.preventDefault(),Fa("pointerDown"),I){var c=h.arraySearch(ob,b.pointerId,"id");0>c&&(c=ob.length),ob[c]={x:b.clientX,y:b.clientY,id:b.pointerId}}var d=Ob(b),e=d.length;ba=null,eb(),X&&1!==e||(X=ja=!0,h.bind(a,s,i),U=ma=ka=V=aa=$=Y=Z=!1,ia=null,Fa("firstTouchStart",d),Oa(qa,ra),pa.x=pa.y=0,Oa(mb,d[0]),Oa(nb,mb),pb.x=va.x*ta,qb=[{x:mb.x,y:mb.y}],S=R=Ga(),Ua(v,!0),Bb(),Cb()),!ca&&e>1&&!ha&&!aa&&(w=v,Z=!1,ca=Y=!0,pa.y=pa.x=0,Oa(qa,ra),Oa(jb,d[0]),Oa(kb,d[1]),Ib(jb,kb,xb),wb.x=Math.abs(xb.x)-ra.x,wb.y=Math.abs(xb.y)-ra.y,da=ea=Ab(jb,kb))}}},Rb=function(a){if(a.preventDefault(),I){var b=h.arraySearch(ob,a.pointerId,"id");if(b>-1){var c=ob[b];c.x=a.clientX,c.y=a.clientY}}if(X){var d=Ob(a);if(ia||$||ca)ba=d;else if(vb.x!==va.x*ta)ia="h";else{var e=Math.abs(d[0].x-mb.x)-Math.abs(d[0].y-mb.y);Math.abs(e)>=ib&&(ia=e>0?"h":"v",ba=d)}}},Sb=function(){if(ba){var a=ba.length;if(0!==a)if(Oa(jb,ba[0]),lb.x=jb.x-mb.x,lb.y=jb.y-mb.y,ca&&a>1){if(mb.x=jb.x,mb.y=jb.y,!lb.x&&!lb.y&&yb(ba[1],kb))return;Oa(kb,ba[1]),Z||(Z=!0,Fa("zoomGestureStarted"));var b=Ab(jb,kb),c=Xb(b);c>i.currItem.initialZoomLevel+i.currItem.initialZoomLevel/15&&(ma=!0);var d=1,e=Va(),f=Wa();if(e>c)if(l.pinchToClose&&!ma&&w<=i.currItem.initialZoomLevel){var g=e-c,h=1-g/(e/1.2);Ha(h),Fa("onPinchClose",h),ka=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>f&&(d=(c-f)/(6*e),d>1&&(d=1),c=f+d*e);0>d&&(d=0),da=b,Ib(jb,kb,tb),pa.x+=tb.x-xb.x,pa.y+=tb.y-xb.y,Oa(xb,tb),ra.x=Na("x",c),ra.y=Na("y",c),U=c>v,v=c,Ja()}else{if(!ia)return;if(ja&&(ja=!1,Math.abs(lb.x)>=ib&&(lb.x-=ba[0].x-nb.x),Math.abs(lb.y)>=ib&&(lb.y-=ba[0].y-nb.y)),mb.x=jb.x,mb.y=jb.y,0===lb.x&&0===lb.y)return;if("v"===ia&&l.closeOnVerticalDrag&&!Db()){pa.y+=lb.y,ra.y+=lb.y;var j=Kb();return V=!0,Fa("onVerticalDrag",j),Ha(j),void Ja()}Jb(Ga(),jb.x,jb.y),$=!0,fa=i.currItem.bounds;var k=Pb("x",lb);k||(Pb("y",lb),Pa(ra),Ja())}}},Tb=function(b){if(Q.isOldAndroid){if(W&&"mouseup"===b.type)return;b.type.indexOf("touch")>-1&&(clearTimeout(W),W=setTimeout(function(){W=0},600))}Fa("pointerUp"),Gb(b,!1)&&b.preventDefault();var c;if(I){var d=h.arraySearch(ob,b.pointerId,"id");if(d>-1)if(c=ob.splice(d,1)[0],navigator.pointerEnabled)c.type=b.pointerType||"mouse";else{var e={4:"mouse",2:"touch",3:"pen"};c.type=e[b.pointerType],c.type||(c.type=b.pointerType||"mouse")}}var f,g=Ob(b),j=g.length;if("mouseup"===b.type&&(j=0),2===j)return ba=null,!0;1===j&&Oa(nb,g[0]),0!==j||ia||ha||(c||("mouseup"===b.type?c={x:b.clientX,y:b.clientY,type:"mouse"}:b.changedTouches&&b.changedTouches[0]&&(c={x:b.changedTouches[0].clientX,y:b.changedTouches[0].clientY,type:"touch"})),Fa("touchRelease",b,c));var k=-1;if(0===j&&(X=!1,h.unbind(a,s,i),Bb(),ca?k=0:-1!==ub&&(k=Ga()-ub)),ub=1===j?Ga():-1,f=-1!==k&&150>k?"zoom":"swipe",ca&&2>j&&(ca=!1,1===j&&(f="zoomPointerUp"),Fa("zoomGestureEnded")),ba=null,$||Z||ha||V)if(eb(),T||(T=Ub()),T.calculateSwipeSpeed("x"),V){var m=Kb();if(m<l.verticalDragRange)i.close();else{var n=ra.y,o=la;fb("verticalDrag",0,1,300,h.easing.cubic.out,function(a){ra.y=(i.currItem.initialPosition.y-n)*a+n,Ha((1-o)*a+o),Ja()}),Fa("onVerticalDrag",1)}}else{if((aa||ha)&&0===j){var p=Wb(f,T);if(p)return;f="zoomPointerUp"}if(!ha)return"swipe"!==f?void Yb():void(!aa&&v>i.currItem.fitRatio&&Vb(T))}},Ub=function(){var a,c,d={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(b){qb.length>1?(a=Ga()-S+50,c=qb[qb.length-2][b]):(a=Ga()-R,c=nb[b]),d.lastFlickOffset[b]=mb[b]-c,d.lastFlickDist[b]=Math.abs(d.lastFlickOffset[b]),d.lastFlickDist[b]>20?d.lastFlickSpeed[b]=d.lastFlickOffset[b]/a:d.lastFlickSpeed[b]=0,Math.abs(d.lastFlickSpeed[b])<.1&&(d.lastFlickSpeed[b]=0),d.slowDownRatio[b]=.95,d.slowDownRatioReverse[b]=1-d.slowDownRatio[b],d.speedDecelerationRatio[b]=1},calculateOverBoundsAnimOffset:function(a,c){d.backAnimStarted[a]||(ra[a]>fa.min[a]?d.backAnimDestination[a]=fa.min[a]:ra[a]<fa.max[a]&&(d.backAnimDestination[a]=fa.max[a]),d.backAnimDestination[a]!==b&&(d.slowDownRatio[a]=.7,d.slowDownRatioReverse[a]=1-d.slowDownRatio[a],d.speedDecelerationRatioAbs[a]<.05&&(d.lastFlickSpeed[a]=0,d.backAnimStarted[a]=!0,fb("bounceZoomPan"+a,ra[a],d.backAnimDestination[a],c||300,h.easing.sine.out,function(b){ra[a]=b,Ja()}))))},calculateAnimOffset:function(a){d.backAnimStarted[a]||(d.speedDecelerationRatio[a]=d.speedDecelerationRatio[a]*(d.slowDownRatio[a]+d.slowDownRatioReverse[a]-d.slowDownRatioReverse[a]*d.timeDiff/10),d.speedDecelerationRatioAbs[a]=Math.abs(d.lastFlickSpeed[a]*d.speedDecelerationRatio[a]),d.distanceOffset[a]=d.lastFlickSpeed[a]*d.speedDecelerationRatio[a]*d.timeDiff,ra[a]+=d.distanceOffset[a])},panAnimLoop:function(){return ab.zoomPan&&(ab.zoomPan.raf=K(d.panAnimLoop),d.now=Ga(),d.timeDiff=d.now-d.lastNow,d.lastNow=d.now,d.calculateAnimOffset("x"),d.calculateAnimOffset("y"),Ja(),d.calculateOverBoundsAnimOffset("x"),d.calculateOverBoundsAnimOffset("y"),d.speedDecelerationRatioAbs.x<.05&&d.speedDecelerationRatioAbs.y<.05)?(ra.x=Math.round(ra.x),ra.y=Math.round(ra.y),Ja(),void cb("zoomPan")):void 0}};return d},Vb=function(a){return a.calculateSwipeSpeed("y"),fa=i.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(db("zoomPan"),a.lastNow=Ga(),void a.panAnimLoop())},Wb=function(a,b){var c;ha||(sb=p);var d;if("swipe"===a){var e=mb.x-nb.x,f=b.lastFlickDist.x<10;e>hb&&(f||b.lastFlickOffset.x>20)?d=-1:-hb>e&&(f||b.lastFlickOffset.x<-20)&&(d=1)}var g;d&&(p+=d,0>p?(p=l.loop?cc()-1:0,g=!0):p>=cc()&&(p=l.loop?0:cc()-1,g=!0),g&&!l.loop||(wa+=d,ta-=d,c=!0));var j,k=va.x*ta,m=Math.abs(k-vb.x);return c||k>vb.x==b.lastFlickSpeed.x>0?(j=Math.abs(b.lastFlickSpeed.x)>0?m/Math.abs(b.lastFlickSpeed.x):333,j=Math.min(j,400),j=Math.max(j,250)):j=333,sb===p&&(c=!1),ha=!0,Fa("mainScrollAnimStart"),fb("mainScroll",vb.x,k,j,h.easing.cubic.out,Ma,function(){eb(),ha=!1,sb=-1,(c||sb!==p)&&i.updateCurrItem(),Fa("mainScrollAnimComplete")}),c&&i.updateCurrItem(!0),c},Xb=function(a){return 1/ea*a*w},Yb=function(){var a=v,b=Va(),c=Wa();b>v?a=b:v>c&&(a=c);var d,e=1,f=la;return ka&&!U&&!ma&&b>v?(i.close(),!0):(ka&&(d=function(a){Ha((e-f)*a+f)}),i.zoomTo(a,0,200,h.easing.cubic.out,d),!0)};Ba("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){D=a+b,E=a+c,F=a+d,G=e?a+e:""};I=Q.pointerEvent,I&&Q.touch&&(Q.touch=!1),I?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):Q.touch?(a("touch","start","move","end","cancel"),J=!0):a("mouse","down","move","up"),s=E+" "+F+" "+G,t=D,I&&!J&&(J=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),i.likelyTouchDevice=J,u[D]=Qb,u[E]=Rb,u[F]=Tb,G&&(u[G]=u[F]),Q.touch&&(t+=" mousedown",s+=" mousemove mouseup",u.mousedown=u[D],u.mousemove=u[E],u.mouseup=u[F]),J||(l.allowPanToNext=!1)}}});var Zb,$b,_b,ac,bc,cc,dc,ec=function(a,d,e,f){Zb&&clearTimeout(Zb),ac=!0,_b=!0;var g;a.initialLayout?(g=a.initialLayout,a.initialLayout=null):g=l.getThumbBoundsFn&&l.getThumbBoundsFn(p);var j=e?l.hideAnimationDuration:l.showAnimationDuration,k=function(){cb("initialZoom"),e?(i.template.removeAttribute("style"),i.bg.removeAttribute("style")):(Ha(1),d&&(d.style.display="block"),h.addClass(c,"pswp--animated-in"),Fa("initialZoom"+(e?"OutEnd":"InEnd"))),f&&f(),ac=!1};if(!j||!g||g.x===b)return Fa("initialZoom"+(e?"Out":"In")),v=a.initialZoomLevel,Oa(ra,a.initialPosition),Ja(),c.style.opacity=e?0:1,Ha(1),void(j?setTimeout(function(){k()},j):k());var m=function(){var b=o,d=!i.currItem.src||i.currItem.loadError||l.showHideOpacity;a.miniImg&&(a.miniImg.style.webkitBackfaceVisibility="hidden"),e||(v=g.w/a.w,ra.x=g.x,ra.y=g.y-N,i[d?"template":"bg"].style.opacity=.001,Ja()),db("initialZoom"),e&&!b&&h.removeClass(c,"pswp--animated-in"),d&&(e?h[(b?"remove":"add")+"Class"](c,"pswp--animate_opacity"):setTimeout(function(){h.addClass(c,"pswp--animate_opacity")},30)),Zb=setTimeout(function(){if(Fa("initialZoom"+(e?"Out":"In")),e){var f=g.w/a.w,i={x:ra.x,y:ra.y},l=v,m=la,n=function(a){1===a?(v=f,ra.x=g.x,ra.y=g.y-P):(v=(f-l)*a+l,ra.x=(g.x-i.x)*a+i.x,ra.y=(g.y-P-i.y)*a+i.y),Ja(),d?c.style.opacity=1-a:Ha(m-a*m)};b?fb("initialZoom",0,1,j,h.easing.cubic.out,n,k):(n(1),Zb=setTimeout(k,j+20))}else v=a.initialZoomLevel,Oa(ra,a.initialPosition),Ja(),Ha(1),d?c.style.opacity=1:Ha(1),Zb=setTimeout(k,j+20)},e?25:90)};m()},fc={},gc=[],hc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return $b.length}},ic=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},jc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((fc.x-b)/2)+a.hGap.left,d.center.y=Math.round((fc.y-c)/2)+a.vGap.top,d.max.x=b>fc.x?Math.round(fc.x-b)+a.hGap.left:d.center.x,d.max.y=c>fc.y?Math.round(fc.y-c)+a.vGap.top:d.center.y,d.min.x=b>fc.x?a.hGap.left:d.center.x,d.min.y=c>fc.y?a.vGap.top:d.center.y},kc=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),a.hGap||(a.hGap={left:0,right:0}),Fa("parseVerticalMargin",a)),fc.x=b.x-a.hGap.left-a.hGap.right,fc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=fc.x/a.w,f=fc.y/a.h;a.fitRatio=f>e?e:f;var g=l.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=ic())}if(!c)return;return jc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=ic(),a.initialPosition=a.bounds.center,a.bounds},lc=function(a,b,c,d,e,f){b.loadError||d&&(b.imageAppended=!0,oc(b,d,b===i.currItem&&Aa),c.appendChild(d),f&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},mc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=h.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},nc=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=l.errorMsg.replace("%url%",a.src),!0):void 0},oc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},pc=function(){if(gc.length){for(var a,b=0;b<gc.length;b++)a=gc[b],a.holder.index===a.index&&lc(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);gc=[]}};Ba("Controller",{publicMethods:{lazyLoadItem:function(a){a=Ca(a);var b=bc(a);b&&(!b.loaded&&!b.loading||A)&&(Fa("gettingData",a,b),b.src&&mc(b))},initController:function(){h.extend(l,hc,!0),i.items=$b=f,bc=i.getItemAt,cc=l.getNumItemsFn,dc=l.loop,cc()<3&&(l.loop=!1),Ea("beforeChange",function(a){var b,c=l.preload,d=null===a?!0:a>=0,e=Math.min(c[0],cc()),f=Math.min(c[1],cc());for(b=1;(d?f:e)>=b;b++)i.lazyLoadItem(p+b);for(b=1;(d?e:f)>=b;b++)i.lazyLoadItem(p-b)}),Ea("initialLayout",function(){i.currItem.initialLayout=l.getThumbBoundsFn&&l.getThumbBoundsFn(p)}),Ea("mainScrollAnimComplete",pc),Ea("initialZoomInEnd",pc),Ea("destroy",function(){for(var a,b=0;b<$b.length;b++)a=$b[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);gc=null})},getItemAt:function(a){return a>=0&&$b[a]!==b?$b[a]:!1},allowProgressiveImg:function(){return l.forceProgressiveLoading||!J||l.mouseUsed||screen.width>1200},setContent:function(a,b){l.loop&&(b=Ca(b));var c=i.getItemAt(a.index);c&&(c.container=null);var d,e=i.getItemAt(b);if(!e)return void(a.el.innerHTML="");Fa("gettingData",b,e),a.index=b,a.item=e;var f=e.container=h.createEl("pswp__zoom-wrap");if(!e.src&&e.html&&(e.html.tagName?f.appendChild(e.html):f.innerHTML=e.html),nc(e),kc(e,sa),!e.src||e.loadError||e.loaded)e.src&&!e.loadError&&(d=h.createEl("pswp__img","img"),d.style.opacity=1,d.src=e.src,oc(e,d),lc(b,e,f,d,!0));else{if(e.loadComplete=function(c){if(m){if(a&&a.index===b){if(nc(c,!0))return c.loadComplete=c.img=null,kc(c,sa),Ka(c),void(a.index===p&&i.updateCurrZoomItem());c.imageAppended?!ac&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):Q.transform&&(ha||ac)?gc.push({item:c,baseDiv:f,img:c.img,index:b,holder:a,clearPlaceholder:!0}):lc(b,c,f,c.img,ha||ac,!0)}c.loadComplete=null,c.img=null,Fa("imageLoadComplete",b,c)}},h.features.transform){var g="pswp__img pswp__img--placeholder";g+=e.msrc?"":" pswp__img--placeholder--blank";var j=h.createEl(g,e.msrc?"img":"");e.msrc&&(j.src=e.msrc),oc(e,j),f.appendChild(j),e.placeholder=j}e.loading||mc(e),i.allowProgressiveImg()&&(!_b&&Q.transform?gc.push({item:e,baseDiv:f,img:e.img,index:b,holder:a}):lc(b,e,f,e.img,!0,!0))}_b||b!==p?Ka(e):(ga=f.style,ec(e,d||e.img)),a.el.innerHTML="",a.el.appendChild(f)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var qc,rc={},sc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};Ba("Tap",{publicMethods:{initTap:function(){Ea("firstTouchStart",i.onTapStart),Ea("touchRelease",i.onTapRelease),Ea("destroy",function(){rc={},qc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(qc),qc=null)},onTapRelease:function(a,b){if(b&&!$&&!Y&&!bb){var c=b;if(qc&&(clearTimeout(qc),qc=null,zb(c,rc)))return void Fa("doubleTap",c);if("mouse"===b.type)return void sc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||h.hasClass(a.target,"pswp__single-tap"))return void sc(a,b);Oa(rc,c),qc=setTimeout(function(){sc(a,b),qc=null},300)}}}});var tc;Ba("DesktopZoom",{publicMethods:{initDesktopZoom:function(){O||(J?Ea("mouseUsed",function(){i.setupDesktopZoom()}):i.setupDesktopZoom(!0))},setupDesktopZoom:function(a){tc={};var b="wheel mousewheel DOMMouseScroll";Ea("bindEvents",function(){h.bind(c,b,i.handleMouseWheel)}),Ea("unbindEvents",function(){tc&&h.unbind(c,b,i.handleMouseWheel)}),i.mouseZoomedIn=!1;var d,e=function(){i.mouseZoomedIn&&(h.removeClass(c,"pswp--zoomed-in"),i.mouseZoomedIn=!1),1>v?h.addClass(c,"pswp--zoom-allowed"):h.removeClass(c,"pswp--zoom-allowed"),f()},f=function(){d&&(h.removeClass(c,"pswp--dragging"),d=!1)};Ea("resize",e),Ea("afterChange",e),Ea("pointerDown",function(){i.mouseZoomedIn&&(d=!0,h.addClass(c,"pswp--dragging"))}),Ea("pointerUp",f),a||e()},handleMouseWheel:function(a){if(v<=i.currItem.fitRatio)return l.modal&&(!l.closeOnScroll||bb||X?a.preventDefault():H&&Math.abs(a.deltaY)>2&&(o=!0,i.close())),!0;if(a.stopPropagation(),tc.x=0,"deltaX"in a)1===a.deltaMode?(tc.x=18*a.deltaX,tc.y=18*a.deltaY):(tc.x=a.deltaX,tc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(tc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?tc.y=-.16*a.wheelDeltaY:tc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;tc.y=a.detail}Ua(v,!0);var b=ra.x-tc.x,c=ra.y-tc.y;(l.modal||b<=fa.min.x&&b>=fa.max.x&&c<=fa.min.y&&c>=fa.max.y)&&a.preventDefault(),i.panTo(b,c)},toggleDesktopZoom:function(a){a=a||{x:sa.x/2+ua.x,y:sa.y/2+ua.y};var b=l.getDoubleTapZoom(!0,i.currItem),d=v===b;i.mouseZoomedIn=!d,i.zoomTo(d?i.currItem.initialZoomLevel:b,a,333),h[(d?"remove":"add")+"Class"](c,"pswp--zoomed-in")}}}),h.extend(i,gb)};return c}),this.template='<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">     <!-- Background of PhotoSwipe.          It\'s a separate element as animating opacity is faster than rgba(). -->     <div class="pswp__bg"></div>     <!-- Slides wrapper with overflow:hidden. -->     <div class="pswp__scroll-wrap">         <!-- Container that holds slides.             PhotoSwipe keeps only 3 of them in the DOM to save memory.            Don\'t modify these 3 pswp__item elements, data is added later on. -->         <div class="pswp__container">             <div class="pswp__item"></div>             <div class="pswp__item"></div>             <div class="pswp__item"></div>         </div>         <div class="pswp__ui pswp__ui--hidden pswp__custom_nav">             <div class="pswp__group">                 <div class="pswp__button pswp__button-prev">                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M10 15l10 5V10z"/></svg>                 </div>                 <div class="pswp__button pswp__button-close">                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path d="M15 1.667L13.333 0 7.5 5.834 1.667 0 0 1.667 5.833 7.5 0 13.334 1.667 15 7.5 9.167 13.333 15 15 13.334 9.167 7.5z"/></svg>                 </div>                 <div class="pswp__button pswp__button-next">                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path d="M20 15l-10 5V10z"/></svg>                 </div>             </div>         </div>     </div><div id="freshbox" style="display: none; width: 0; height: 0;"><!-- legacy support --></div> </div>';var c=function(){var a=document.createElement("div");for(a.innerHTML=this.template;a.childNodes.length>0;)document.body.appendChild(a.childNodes[0]);a=null}.bind(this),d=function(){};this.setEventProxy=function(a){"function"==typeof a&&(d=a)},this.isActive=!1,this.activeGallery=b,this.openImageArray=function(a,d,e){if(a!==b&&this.activeGallery===b){var f=document.querySelectorAll(".pswp")[0];f===b&&(c(),f=document.querySelectorAll(".pswp")[0]);
var g=[],h=0;if(Array.prototype.forEach.call(a,function(a){a.hasAttribute("src")&&a.hasAttribute("src_o")&&a.hasAttribute("width_o")&&a.hasAttribute("height_o")&&(a===d&&(h=g.length),g.push({src:a.getAttribute("src_o"),msrc:a.getAttribute("src"),w:a.getAttribute("width_o"),h:a.getAttribute("height_o"),el:a}))}),0==g.length)return!1;var i=this,j={index:h,maxSpreadZoom:1,getThumbBoundsFn:function(a){return!1},closeEl:!0,arrowEl:g.length>1,tapToClose:!0,closeOnScroll:!1};if(e!==b&&"object"==typeof e)for(var k in e)e.hasOwnProperty(k)&&(j[k]=e[k]);return this.activeGallery=new this.PhotoSwipe(f,this.PhotoSwipeUI_Default,g,j),this.activeGallery.init(),this.isActive=!0,this.activeGallery.listen("destroy",function(){null!==f.parentNode&&f.parentNode.removeChild(f),i.isActive=!1,i.activeGallery=b}),this.activeGallery}},function(a,b){a.PhotoSwipeUI_Default=b()}(this,function(){var b=function(b,c){var d,e,f,g,h,i,j,k,l,m,n=this,o=!1,p=!0,q={closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:2e3,timeToIdleOutside:1e3,closeEl:!0,fullscreenEl:!0,zoomEl:!0,counterEl:!0,arrowEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,fitControlsWidth:1200},r=function(b){if(j)return!0;b=b||a.event,i.timeToIdle&&i.mouseUsed&&!g&&v();for(var d=b.target||b.srcElement;"svg"===d.nodeName||"path"===d.nodeName;)d=d.parentNode;for(var e,f,h=d.getAttribute("class")||"",l=0;l<A.length;l++)e=A[l],e.onTap&&h.indexOf("pswp__"+e.name)>-1&&(e.onTap(),f=!0);if(f){b.stopPropagation&&b.stopPropagation(),j=!0;var m=c.features.isOldAndroid?600:30;k=setTimeout(function(){j=!1},m)}},s=function(a,b,d){c[(d?"add":"remove")+"Class"](a,"pswp__"+b)},t=function(a){for(var b=0;b<i.closeElClasses.length;b++)if(c.hasClass(a,"pswp__"+i.closeElClasses[b]))return!0},u=0,v=function(){clearTimeout(m),u=0,g&&n.setIdle(!1)},w=function(b){b=b?b:a.event;var c=b.relatedTarget||b.toElement;c&&"HTML"!==c.nodeName||(clearTimeout(m),m=setTimeout(function(){n.setIdle(!0)},i.timeToIdleOutside))},x=function(){i.fullscreenEl&&!c.features.isOldAndroid&&(d||(d=n.getFullscreenAPI()),d?(c.bind(document,d.eventK,n.updateFullscreen),n.updateFullscreen(),c.addClass(b.template,"pswp--supports-fs")):c.removeClass(b.template,"pswp--supports-fs"))},y=function(){i.timeToIdle&&h("mouseUsed",function(){c.bind(document,"mousemove",v),c.bind(document,"mouseout",w),l=setInterval(function(){u++,2===u&&n.setIdle(!0)},i.timeToIdle/2)})},z=function(){h("onVerticalDrag",function(a){p&&.95>a?n.hideControls():!p&&a>=.95&&n.showControls()});var a;h("onPinchClose",function(b){p&&.9>b?(n.hideControls(),a=!0):a&&!p&&b>.9&&n.showControls()}),h("zoomGestureEnded",function(){a=!1,a&&!p&&n.showControls()})},A=[{name:"button--zoom",option:"zoomEl",onTap:b.toggleDesktopZoom},{name:"button-close",option:"closeEl",onTap:b.close},{name:"button-prev",option:"arrowEl",onTap:b.prev},{name:"button-next",option:"arrowEl",onTap:b.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){d.isFullscreen()?d.exit():d.enter()}}],B=function(){var a,b,d,f=function(e){if(e){for(var f=e.length,g=[],h=0;f>h;h++){a=e[h],b=a.className;for(var j=0;j<A.length;j++)d=A[j],b.indexOf("pswp__"+d.name)>-1&&(i[d.option]?(c.removeClass(a,"pswp__element--disabled"),g.push(a),d.onInit&&d.onInit(a)):c.addClass(a,"pswp__element--disabled"))}g.length>0&&(c.addClass(g[0],"pswp__first-group-element"),c.addClass(g[g.length-1],"pswp__last-group-element"))}};f(e.children);for(var g=e.querySelectorAll(".pswp__group"),h=0;h<g.length;h++)f(g[h].children)};n.init=function(){c.extend(b.options,q,!0),i=b.options,e=c.getChildByClass(b.scrollWrap,"pswp__ui"),h=b.listen,z(),h("beforeChange",n.update),h("doubleTap",function(a){var c=b.currItem.initialZoomLevel;b.getZoomLevel()!==c?b.zoomTo(c,a,333):b.zoomTo(i.getDoubleTapZoom(!1,b.currItem),a,333)}),h("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),h("bindEvents",function(){c.bind(e,"pswpTap click",r),c.bind(b.scrollWrap,"pswpTap",n.onGlobalTap),b.likelyTouchDevice||c.bind(b.scrollWrap,"mouseover",n.onMouseOver)}),h("unbindEvents",function(){l&&clearInterval(l),c.unbind(document,"mouseout",w),c.unbind(document,"mousemove",v),c.unbind(e,"pswpTap click",r),c.unbind(b.scrollWrap,"pswpTap",n.onGlobalTap),c.unbind(b.scrollWrap,"mouseover",n.onMouseOver),d&&(c.unbind(document,d.eventK,n.updateFullscreen),d.isFullscreen()&&(i.hideAnimationDuration=0,d.exit()),d=null)}),h("destroy",function(){i.captionEl&&(_fakeCaptionContainer&&e.removeChild(_fakeCaptionContainer),c.removeClass(_captionContainer,"pswp__caption--empty")),c.removeClass(e,"pswp__ui--over-close"),c.addClass(e,"pswp__ui--hidden"),n.setIdle(!1)}),i.showAnimationDuration||c.removeClass(e,"pswp__ui--hidden"),h("initialZoomIn",function(){i.showAnimationDuration&&c.removeClass(e,"pswp__ui--hidden")}),h("initialZoomOut",function(){c.addClass(e,"pswp__ui--hidden")}),B(),y(),n.setIdle(!0),x()},n.setIdle=function(a){g=a,s(e,"ui--idle",a)},n.update=function(){o=!(!p||!b.currItem)},n.updateFullscreen=function(a){a&&setTimeout(function(){b.setScrollOffset(0,c.getScrollY())},50),c[(d.isFullscreen()?"add":"remove")+"Class"](b.template,"pswp--fs")},n.onGlobalTap=function(d){d=d||a.event;var e=d.target||d.srcElement;if(!j)if(d.detail&&"mouse"===d.detail.pointerType){if(t(e))return void b.close();c.hasClass(e,"pswp__img")&&(1===b.getZoomLevel()&&b.getZoomLevel()<=b.currItem.fitRatio?i.clickToCloseNonZoomable&&b.close():b.toggleDesktopZoom(d.detail.releasePoint))}else if(i.tapToToggleControls&&(p?n.hideControls():n.showControls()),i.tapToClose&&(c.hasClass(e,"pswp__img")||t(e)))return void b.close()},n.onMouseOver=function(b){b=b||a.event;var c=b.target||b.srcElement;s(e,"ui--over-close",t(c))},n.hideControls=function(){c.addClass(e,"pswp__ui--hidden"),p=!1},n.showControls=function(){p=!0,o||n.update(),c.removeClass(e,"pswp__ui--hidden")},n.toggleFullscreen=function(){d.isFullscreen()?d.exit():d.enter()},n.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},n.getFullscreenAPI=function(){var a,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?a={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?a={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?a={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(a={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),a&&(a.enter=function(){return f=i.closeOnScroll,i.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?b.template[this.enterK]():void b.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},a.exit=function(){return i.closeOnScroll=f,document[this.exitK]()},a.isFullscreen=function(){return document[this.elementK]}),a}};return b})}).call(window.lightbox={},window);


lightbox.setEventProxy(function(){
    arguments[0] = 'lightbox-' + arguments[0];

    if(typeof Cargo !== "undefined") {
        Cargo.Event.trigger.apply(Cargo.Event, arguments);
    }
});
