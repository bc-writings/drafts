// Phorum object. Other JavaScript code for Phorum can extend
// this one to implement functionality without risking
// name space collissions.
Phorum = {};

/* Added by module "core", file "include/ajax/json2.js.php" */
/*
    http://www.JSON.org/json2.js
    2009-09-29

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


/* Added by module "core", file "include/javascript/jquery-1.4.4.min.js" */
/*!
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */
(function(E,B){function ka(a,b,d){if(d===B&&a.nodeType===1){d=a.getAttribute("data-"+b);if(typeof d==="string"){try{d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d}catch(e){}c.data(a,b,d)}else d=B}return d}function U(){return false}function ca(){return true}function la(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function Ka(a){var b,d,e,f,h,l,k,o,x,r,A,C=[];f=[];h=c.data(this,this.nodeType?"events":"__events__");if(typeof h==="function")h=
h.events;if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){if(a.namespace)A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");a.liveFired=this;var J=h.live.slice(0);for(k=0;k<J.length;k++){h=J[k];h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1)}f=c(a.target).closest(f,a.currentTarget);o=0;for(x=f.length;o<x;o++){r=f[o];for(k=0;k<J.length;k++){h=J[k];if(r.selector===h.selector&&(!A||A.test(h.namespace))){l=r.elem;e=null;if(h.preType==="mouseenter"||
h.preType==="mouseleave"){a.type=h.preType;e=c(a.relatedTarget).closest(h.selector)[0]}if(!e||e!==l)C.push({elem:l,handleObj:h,level:r.level})}}}o=0;for(x=C.length;o<x;o++){f=C[o];if(d&&f.level>d)break;a.currentTarget=f.elem;a.data=f.handleObj.data;a.handleObj=f.handleObj;A=f.handleObj.origHandler.apply(f.elem,arguments);if(A===false||a.isPropagationStopped()){d=f.level;if(A===false)b=false;if(a.isImmediatePropagationStopped())break}}return b}}function Y(a,b){return(a&&a!=="*"?a+".":"")+b.replace(La,
"`").replace(Ma,"&")}function ma(a,b,d){if(c.isFunction(b))return c.grep(a,function(f,h){return!!b.call(f,h,f)===d});else if(b.nodeType)return c.grep(a,function(f){return f===b===d});else if(typeof b==="string"){var e=c.grep(a,function(f){return f.nodeType===1});if(Na.test(b))return c.filter(b,e,!d);else b=c.filter(b,e)}return c.grep(a,function(f){return c.inArray(f,b)>=0===d})}function na(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var e=c.data(a[d++]),f=c.data(this,
e);if(e=e&&e.events){delete f.handle;f.events={};for(var h in e)for(var l in e[h])c.event.add(this,h,e[h][l],e[h][l].data)}}})}function Oa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function oa(a,b,d){var e=b==="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return e;c.each(b==="width"?Pa:Qa,function(){d||(e-=parseFloat(c.css(a,"padding"+this))||0);if(d==="margin")e+=parseFloat(c.css(a,
"margin"+this))||0;else e-=parseFloat(c.css(a,"border"+this+"Width"))||0});return e}function da(a,b,d,e){if(c.isArray(b)&&b.length)c.each(b,function(f,h){d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e)});else if(!d&&b!=null&&typeof b==="object")c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){da(a+"["+f+"]",h,d,e)});else e(a,b)}function S(a,b){var d={};c.each(pa.concat.apply([],pa.slice(0,b)),function(){d[this]=a});return d}function qa(a){if(!ea[a]){var b=c("<"+
a+">").appendTo("body"),d=b.css("display");b.remove();if(d==="none"||d==="")d="block";ea[a]=d}return ea[a]}function fa(a){return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var t=E.document,c=function(){function a(){if(!b.isReady){try{t.documentElement.doScroll("left")}catch(j){setTimeout(a,1);return}b.ready()}}var b=function(j,s){return new b.fn.init(j,s)},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};b.fn=b.prototype={init:function(j,
s){var v,z,H;if(!j)return this;if(j.nodeType){this.context=this[0]=j;this.length=1;return this}if(j==="body"&&!s&&t.body){this.context=t;this[0]=t.body;this.selector="body";this.length=1;return this}if(typeof j==="string")if((v=h.exec(j))&&(v[1]||!s))if(v[1]){H=s?s.ownerDocument||s:t;if(z=A.exec(j))if(b.isPlainObject(s)){j=[t.createElement(z[1])];b.fn.attr.call(j,s,true)}else j=[H.createElement(z[1])];else{z=b.buildFragment([v[1]],[H]);j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes}return b.merge(this,
j)}else{if((z=t.getElementById(v[2]))&&z.parentNode){if(z.id!==v[2])return f.find(j);this.length=1;this[0]=z}this.context=t;this.selector=j;return this}else if(!s&&!x.test(j)){this.selector=j;this.context=t;j=t.getElementsByTagName(j);return b.merge(this,j)}else return!s||s.jquery?(s||f).find(j):b(s).find(j);else if(b.isFunction(j))return f.ready(j);if(j.selector!==B){this.selector=j.selector;this.context=j.context}return b.makeArray(j,this)},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},
toArray:function(){return N.call(this,0)},get:function(j){return j==null?this.toArray():j<0?this.slice(j)[0]:this[j]},pushStack:function(j,s,v){var z=b();b.isArray(j)?M.apply(z,j):b.merge(z,j);z.prevObject=this;z.context=this.context;if(s==="find")z.selector=this.selector+(this.selector?" ":"")+v;else if(s)z.selector=this.selector+"."+s+"("+v+")";return z},each:function(j,s){return b.each(this,j,s)},ready:function(j){b.bindReady();if(b.isReady)j.call(t,b);else q&&q.push(j);return this},eq:function(j){return j===
-1?this.slice(j):this.slice(j,+j+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","))},map:function(j){return this.pushStack(b.map(this,function(s,v){return j.call(s,v,s)}))},end:function(){return this.prevObject||b(null)},push:M,sort:[].sort,splice:[].splice};b.fn.init.prototype=b.fn;b.extend=b.fn.extend=function(){var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
if(typeof G==="boolean"){ga=G;G=arguments[1]||{};K=2}if(typeof G!=="object"&&!b.isFunction(G))G={};if(Q===K){G=this;--K}for(;K<Q;K++)if((j=arguments[K])!=null)for(s in j){v=G[s];z=j[s];if(G!==z)if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){if(H){H=false;v=v&&b.isArray(v)?v:[]}else v=v&&b.isPlainObject(v)?v:{};G[s]=b.extend(ga,v,z)}else if(z!==B)G[s]=z}return G};b.extend({noConflict:function(j){E.$=e;if(j)E.jQuery=d;return b},isReady:false,readyWait:1,ready:function(j){j===true&&b.readyWait--;
if(!b.readyWait||j!==true&&!b.isReady){if(!t.body)return setTimeout(b.ready,1);b.isReady=true;if(!(j!==true&&--b.readyWait>0))if(q){var s=0,v=q;for(q=null;j=v[s++];)j.call(t,b);b.fn.trigger&&b(t).trigger("ready").unbind("ready")}}},bindReady:function(){if(!p){p=true;if(t.readyState==="complete")return setTimeout(b.ready,1);if(t.addEventListener){t.addEventListener("DOMContentLoaded",u,false);E.addEventListener("load",b.ready,false)}else if(t.attachEvent){t.attachEvent("onreadystatechange",u);E.attachEvent("onload",
b.ready);var j=false;try{j=E.frameElement==null}catch(s){}t.documentElement.doScroll&&j&&a()}}},isFunction:function(j){return b.type(j)==="function"},isArray:Array.isArray||function(j){return b.type(j)==="array"},isWindow:function(j){return j&&typeof j==="object"&&"setInterval"in j},isNaN:function(j){return j==null||!r.test(j)||isNaN(j)},type:function(j){return j==null?String(j):R[y.call(j)]||"object"},isPlainObject:function(j){if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j))return false;if(j.constructor&&
!F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf"))return false;for(var s in j);return s===B||F.call(j,s)},isEmptyObject:function(j){for(var s in j)return false;return true},error:function(j){throw j;},parseJSON:function(j){if(typeof j!=="string"||!j)return null;j=b.trim(j);if(C.test(j.replace(J,"@").replace(w,"]").replace(I,"")))return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();else b.error("Invalid JSON: "+j)},noop:function(){},globalEval:function(j){if(j&&
l.test(j)){var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");v.type="text/javascript";if(b.support.scriptEval)v.appendChild(t.createTextNode(j));else v.text=j;s.insertBefore(v,s.firstChild);s.removeChild(v)}},nodeName:function(j,s){return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase()},each:function(j,s,v){var z,H=0,G=j.length,K=G===B||b.isFunction(j);if(v)if(K)for(z in j){if(s.apply(j[z],v)===false)break}else for(;H<G;){if(s.apply(j[H++],v)===false)break}else if(K)for(z in j){if(s.call(j[z],
z,j[z])===false)break}else for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]);return j},trim:O?function(j){return j==null?"":O.call(j)}:function(j){return j==null?"":j.toString().replace(k,"").replace(o,"")},makeArray:function(j,s){var v=s||[];if(j!=null){var z=b.type(j);j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j)}return v},inArray:function(j,s){if(s.indexOf)return s.indexOf(j);for(var v=0,z=s.length;v<z;v++)if(s[v]===j)return v;return-1},merge:function(j,
s){var v=j.length,z=0;if(typeof s.length==="number")for(var H=s.length;z<H;z++)j[v++]=s[z];else for(;s[z]!==B;)j[v++]=s[z++];j.length=v;return j},grep:function(j,s,v){var z=[],H;v=!!v;for(var G=0,K=j.length;G<K;G++){H=!!s(j[G],G);v!==H&&z.push(j[G])}return z},map:function(j,s,v){for(var z=[],H,G=0,K=j.length;G<K;G++){H=s(j[G],G,v);if(H!=null)z[z.length]=H}return z.concat.apply([],z)},guid:1,proxy:function(j,s,v){if(arguments.length===2)if(typeof s==="string"){v=j;j=v[s];s=B}else if(s&&!b.isFunction(s)){v=
s;s=B}if(!s&&j)s=function(){return j.apply(v||this,arguments)};if(j)s.guid=j.guid=j.guid||s.guid||b.guid++;return s},access:function(j,s,v,z,H,G){var K=j.length;if(typeof s==="object"){for(var Q in s)b.access(j,Q,s[Q],z,H,v);return j}if(v!==B){z=!G&&z&&b.isFunction(v);for(Q=0;Q<K;Q++)H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);return j}return K?H(j[0],s):B},now:function(){return(new Date).getTime()},uaMatch:function(j){j=j.toLowerCase();j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||
[];return{browser:j[1]||"",version:j[2]||"0"}},browser:{}});b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){R["[object "+s+"]"]=s.toLowerCase()});m=b.uaMatch(m);if(m.browser){b.browser[m.browser]=true;b.browser.version=m.version}if(b.browser.webkit)b.browser.safari=true;if(D)b.inArray=function(j,s){return D.call(s,j)};if(!/\s/.test("\u00a0")){k=/^[\s\xA0]+/;o=/[\s\xA0]+$/}f=b(t);if(t.addEventListener)u=function(){t.removeEventListener("DOMContentLoaded",u,
false);b.ready()};else if(t.attachEvent)u=function(){if(t.readyState==="complete"){t.detachEvent("onreadystatechange",u);b.ready()}};return E.jQuery=E.$=b}();(function(){c.support={};var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),
k=l.appendChild(t.createElement("option"));if(!(!f||!f.length||!h)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,
scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};l.disabled=true;c.support.optDisabled=!k.disabled;b.type="text/javascript";try{b.appendChild(t.createTextNode("window."+e+"=1;"))}catch(o){}a.insertBefore(b,a.firstChild);if(E[e]){c.support.scriptEval=true;delete E[e]}try{delete b.test}catch(x){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function r(){c.support.noCloneEvent=
false;d.detachEvent("onclick",r)});d.cloneNode(true).fireEvent("onclick")}d=t.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=t.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var r=t.createElement("div");r.style.width=r.style.paddingLeft="1px";t.body.appendChild(r);c.boxModel=c.support.boxModel=r.offsetWidth===2;if("zoom"in r.style){r.style.display="inline";r.style.zoom=
1;c.support.inlineBlockNeedsLayout=r.offsetWidth===2;r.style.display="";r.innerHTML="<div style='width:4px;'></div>";c.support.shrinkWrapBlocks=r.offsetWidth!==2}r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var A=r.getElementsByTagName("td");c.support.reliableHiddenOffsets=A[0].offsetHeight===0;A[0].style.display="";A[1].style.display="none";c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;r.innerHTML="";t.body.removeChild(r).style.display=
"none"});a=function(r){var A=t.createElement("div");r="on"+r;var C=r in A;if(!C){A.setAttribute(r,"return;");C=typeof A[r]==="function"}return C};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=f=h=null}})();var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){if(c.acceptData(a)){a=a==E?ra:a;var e=a.nodeType,f=e?a[c.expando]:null,h=
c.cache;if(!(e&&!f&&typeof b==="string"&&d===B)){if(e)f||(a[c.expando]=f=++c.uuid);else h=a;if(typeof b==="object")if(e)h[f]=c.extend(h[f],b);else c.extend(h,b);else if(e&&!h[f])h[f]={};a=e?h[f]:h;if(d!==B)a[b]=d;return typeof b==="string"?a[b]:a}}},removeData:function(a,b){if(c.acceptData(a)){a=a==E?ra:a;var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;if(b){if(h){delete h[b];d&&c.isEmptyObject(h)&&c.removeData(a)}}else if(d&&c.support.deleteExpando)delete a[c.expando];else if(a.removeAttribute)a.removeAttribute(c.expando);
else if(d)delete f[e];else for(var l in a)delete a[l]}},acceptData:function(a){if(a.nodeName){var b=c.noData[a.nodeName.toLowerCase()];if(b)return!(b===true||a.getAttribute("classid")!==b)}return true}});c.fn.extend({data:function(a,b){var d=null;if(typeof a==="undefined"){if(this.length){var e=this[0].attributes,f;d=c.data(this[0]);for(var h=0,l=e.length;h<l;h++){f=e[h].name;if(f.indexOf("data-")===0){f=f.substr(5);ka(this[0],f,d[f])}}}return d}else if(typeof a==="object")return this.each(function(){c.data(this,
a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(b===B){d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);if(d===B&&this.length){d=c.data(this[0],a);d=ka(this[0],a,d)}return d===B&&k[1]?this.data(k[0]):d}else return this.each(function(){var o=c(this),x=[k[0],b];o.triggerHandler("setData"+k[1]+"!",x);c.data(this,a,b);o.triggerHandler("changeData"+k[1]+"!",x)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var e=
c.data(a,b);if(!d)return e||[];if(!e||c.isArray(d))e=c.data(a,b,c.makeArray(d));else e.push(d);return e}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),e=d.shift();if(e==="inprogress")e=d.shift();if(e){b==="fx"&&d.unshift("inprogress");e.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===B)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,
a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",
colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};c.fn.extend({attr:function(a,b){return c.access(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(x){var r=c(this);r.addClass(a.call(this,x,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===
1)if(f.className){for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++)if(h.indexOf(" "+b[k]+" ")<0)l+=" "+b[k];f.className=c.trim(l)}else f.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(o){var x=c(this);x.removeClass(a.call(this,o,x.attr("class")))});if(a&&typeof a==="string"||a===B)for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){var f=this[d];if(f.nodeType===1&&f.className)if(a){for(var h=(" "+f.className+" ").replace(sa," "),
l=0,k=b.length;l<k;l++)h=h.replace(" "+b[l]+" "," ");f.className=c.trim(h)}else f.className=""}return this},toggleClass:function(a,b){var d=typeof a,e=typeof b==="boolean";if(c.isFunction(a))return this.each(function(f){var h=c(this);h.toggleClass(a.call(this,f,h.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){k=e?k:!l.hasClass(f);l[k?"addClass":"removeClass"](f)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,
"__className__",this.className);this.className=this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1)return true;return false},val:function(a){if(!arguments.length){var b=this[0];if(b){if(c.nodeName(b,"option")){var d=b.attributes.value;return!d||d.specified?b.value:b.text}if(c.nodeName(b,"select")){var e=b.selectedIndex;d=[];var f=b.options;b=b.type==="select-one";
if(e<0)return null;var h=b?e:0;for(e=b?e+1:f.length;h<e;h++){var l=f[h];if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){a=c(l).val();if(b)return a;d.push(a)}}return d}if(ta.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Sa,"")}return B}var k=c.isFunction(a);return this.each(function(o){var x=c(this),r=a;if(this.nodeType===1){if(k)r=
a.call(this,o,x.val());if(r==null)r="";else if(typeof r==="number")r+="";else if(c.isArray(r))r=c.map(r,function(C){return C==null?"":C+""});if(c.isArray(r)&&ta.test(this.type))this.checked=c.inArray(x.val(),r)>=0;else if(c.nodeName(this,"select")){var A=c.makeArray(r);c("option",this).each(function(){this.selected=c.inArray(c(this).val(),A)>=0});if(!A.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},
attr:function(a,b,d,e){if(!a||a.nodeType===3||a.nodeType===8)return B;if(e&&b in c.attrFn)return c(a)[b](d);e=a.nodeType!==1||!c.isXMLDoc(a);var f=d!==B;b=e&&c.props[b]||b;var h=Ta.test(b);if((b in a||a[b]!==B)&&e&&!h){if(f){b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");if(d===null)a.nodeType===1&&a.removeAttribute(b);else a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&
b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;return a[b]}if(!c.support.style&&e&&b==="style"){if(f)a.style.cssText=""+d;return a.style.cssText}f&&a.setAttribute(b,""+d);if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b))return B;a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);return a===null?B:a}});var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){return a.replace(Xa,"\\$&")},ua={focusin:0,focusout:0};
c.event={add:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(c.isWindow(a)&&a!==E&&!a.frameElement)a=E;if(d===false)d=U;else if(!d)return;var f,h;if(d.handler){f=d;d=f.handler}if(!d.guid)d.guid=c.guid++;if(h=c.data(a)){var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;if(typeof k==="function"){o=k.handle;k=k.events}else if(!k){a.nodeType||(h[l]=h=function(){});h.events=k={}}if(!o)h.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,
arguments):B};o.elem=a;b=b.split(" ");for(var x=0,r;l=b[x++];){h=f?c.extend({},f):{handler:d,data:e};if(l.indexOf(".")>-1){r=l.split(".");l=r.shift();h.namespace=r.slice(0).sort().join(".")}else{r=[];h.namespace=""}h.type=l;if(!h.guid)h.guid=d.guid;var A=k[l],C=c.event.special[l]||{};if(!A){A=k[l]=[];if(!C.setup||C.setup.call(a,e,r,o)===false)if(a.addEventListener)a.addEventListener(l,o,false);else a.attachEvent&&a.attachEvent("on"+l,o)}if(C.add){C.add.call(a,h);if(!h.handler.guid)h.handler.guid=
d.guid}A.push(h);c.event.global[l]=true}a=null}}},global:{},remove:function(a,b,d,e){if(!(a.nodeType===3||a.nodeType===8)){if(d===false)d=U;var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];if(w&&I){if(typeof I==="function"){w=I;I=I.events}if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(f in I)c.event.remove(a,f+b)}else{for(b=b.split(" ");f=b[l++];){r=f;k=f.indexOf(".")<0;o=[];if(!k){o=f.split(".");f=o.shift();x=RegExp("(^|\\.)"+
c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(A=I[f])if(d){r=c.event.special[f]||{};for(h=e||0;h<A.length;h++){C=A[h];if(d.guid===C.guid){if(k||x.test(C.namespace)){e==null&&A.splice(h--,1);r.remove&&r.remove.call(a,C)}if(e!=null)break}}if(A.length===0||e!=null&&A.length===1){if(!r.teardown||r.teardown.call(a,o)===false)c.removeEvent(a,f,w.handle);delete I[f]}}else for(h=0;h<A.length;h++){C=A[h];if(k||x.test(C.namespace)){c.event.remove(a,r,C.handler,h);A.splice(h--,1)}}}if(c.isEmptyObject(I)){if(b=
w.handle)b.elem=null;delete w.events;delete w.handle;if(typeof w==="function")c.removeData(a,J);else c.isEmptyObject(w)&&c.removeData(a)}}}}},trigger:function(a,b,d,e){var f=a.type||a;if(!e){a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[f]&&c.each(c.cache,function(){this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===
8)return B;a.result=B;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);e=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+f]&&d["on"+f].apply(d,b)===false){a.result=false;a.preventDefault()}}catch(h){}if(!a.isPropagationStopped()&&e)c.event.trigger(a,b,e,true);else if(!a.isDefaultPrevented()){var l;e=a.target;var k=f.replace(X,""),o=c.nodeName(e,"a")&&k===
"click",x=c.event.special[k]||{};if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){try{if(e[k]){if(l=e["on"+k])e["on"+k]=null;c.event.triggered=true;e[k]()}}catch(r){}if(l)e["on"+k]=l;c.event.triggered=false}}},handle:function(a){var b,d,e,f;d=[];var h=c.makeArray(arguments);a=h[0]=c.event.fix(a||E.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;if(!b){e=a.type.split(".");a.type=e.shift();d=e.slice(0).sort();e=RegExp("(^|\\.)"+
d.join("\\.(?:.*\\.)?")+"(\\.|$)")}a.namespace=a.namespace||d.join(".");f=c.data(this,this.nodeType?"events":"__events__");if(typeof f==="function")f=f.events;d=(f||{})[a.type];if(f&&d){d=d.slice(0);f=0;for(var l=d.length;f<l;f++){var k=d[f];if(b||e.test(k.namespace)){a.handler=k.handler;a.data=k.data;a.handleObj=k;k=k.handler.apply(this,h);if(k!==B){a.result=k;if(k===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[c.expando])return a;var b=a;a=c.Event(b);for(var d=this.props.length,e;d;){e=this.props[--d];a[e]=b[e]}if(!a.target)a.target=a.srcElement||t;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=t.documentElement;d=t.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(a.which==null&&(a.charCode!=null||a.keyCode!=null))a.which=a.charCode!=null?a.charCode:a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==B)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}))},remove:function(a){c.event.remove(this,
Y(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,d){if(c.isWindow(this))this.onbeforeunload=d},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};c.removeEvent=t.removeEventListener?function(a,b,d){a.removeEventListener&&a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent&&a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=
c.now();this[c.expando]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ca;var a=this.originalEvent;if(a)if(a.preventDefault)a.preventDefault();else a.returnValue=false},stopPropagation:function(){this.isPropagationStopped=ca;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ca;this.stopPropagation()},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
var va=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},wa=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?wa:va,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?wa:va)}}});if(!c.support.submitBubbles)c.event.special.submit={setup:function(){if(this.nodeName.toLowerCase()!==
"form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length){a.liveFired=B;return la("submit",this,arguments)}});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){a.liveFired=B;return la("submit",this,arguments)}})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};if(!c.support.changeBubbles){var V,
xa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(e){return e.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},Z=function(a,b){var d=a.target,e,f;if(!(!ia.test(d.nodeName)||d.readOnly)){e=c.data(d,"_change_data");f=xa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",f);if(!(e===B||f===e))if(e!=null||f){a.type="change";a.liveFired=
B;return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return Z.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return Z.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,"_change_data",xa(a))}},setup:function(){if(this.type===
"file")return false;for(var a in V)c.event.add(this,a+".specialChange",V[a]);return ia.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return ia.test(this.nodeName)}};V=c.event.special.change.filters;V.focus=V.beforeactivate}t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.trigger(e,null,e.target)}c.event.special[b]={setup:function(){ua[b]++===0&&t.addEventListener(a,d,true)},teardown:function(){--ua[b]===
0&&t.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,e,f){if(typeof d==="object"){for(var h in d)this[b](h,e,d[h],f);return this}if(c.isFunction(e)||e===false){f=e;e=B}var l=b==="one"?c.proxy(f,function(o){c(this).unbind(o,l);return f.apply(this,arguments)}):f;if(d==="unload"&&b!=="one")this.one(d,e,f);else{h=0;for(var k=this.length;h<k;h++)c.event.add(this[h],d,l,e)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&!a.preventDefault)for(var d in a)this.unbind(d,
a[d]);else{d=0;for(var e=this.length;d<e;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,e){return this.live(b,d,e,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var d=c.Event(a);d.preventDefault();d.stopPropagation();c.event.trigger(d,b,this[0]);return d.result}},toggle:function(a){for(var b=arguments,d=
1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(e){var f=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,f+1);e.preventDefault();return b[f].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,e,f,h){var l,k=0,o,x,r=h||this.selector;h=h?this:c(this.context);if(typeof d===
"object"&&!d.preventDefault){for(l in d)h[b](l,e,d[l],r);return this}if(c.isFunction(e)){f=e;e=B}for(d=(d||"").split(" ");(l=d[k++])!=null;){o=X.exec(l);x="";if(o){x=o[0];l=l.replace(X,"")}if(l==="hover")d.push("mouseenter"+x,"mouseleave"+x);else{o=l;if(l==="focus"||l==="blur"){d.push(ya[l]+x);l+=x}else l=(ya[l]||l)+x;if(b==="live"){x=0;for(var A=h.length;x<A;x++)c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o})}else h.unbind("live."+Y(l,r),f)}}return this}});
c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){c.fn[b]=function(d,e){if(e==null){e=d;d=null}return arguments.length>0?this.bind(b,d,e):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});
(function(){function a(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1&&!q){y.sizcache=n;y.sizset=p}if(y.nodeName.toLowerCase()===i){F=y;break}y=y[g]}m[p]=F}}}function b(g,i,n,m,p,q){p=0;for(var u=m.length;p<u;p++){var y=m[p];if(y){var F=false;for(y=y[g];y;){if(y.sizcache===n){F=m[y.sizset];break}if(y.nodeType===1){if(!q){y.sizcache=n;y.sizset=p}if(typeof i!=="string"){if(y===i){F=true;break}}else if(k.filter(i,
[y]).length>0){F=y;break}}y=y[g]}m[p]=F}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;[0,0].sort(function(){l=false;return 0});var k=function(g,i,n,m){n=n||[];var p=i=i||t;if(i.nodeType!==1&&i.nodeType!==9)return[];if(!g||typeof g!=="string")return n;var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;do{d.exec("");if(q=d.exec(R)){R=q[3];D.push(q[1]);if(q[2]){F=q[3];
break}}}while(q);if(D.length>1&&x.exec(g))if(D.length===2&&o.relative[D[0]])u=L(D[0]+D[1],i);else for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){g=D.shift();if(o.relative[g])g+=D.shift();u=L(g,u)}else{if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){q=k.find(D.shift(),i,O);i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]}if(i){q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);u=q.expr?k.filter(q.expr,
q.set):q.set;if(D.length>0)y=C(u);else N=false;for(;D.length;){q=M=D.pop();if(o.relative[M])q=D.pop();else M="";if(q==null)q=i;o.relative[M](y,q,O)}}else y=[]}y||(y=u);y||k.error(M||g);if(f.call(y)==="[object Array]")if(N)if(i&&i.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g])))n.push(u[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&n.push(u[g]);else n.push.apply(n,y);else C(y,n);if(F){k(F,p,n,m);k.uniqueSort(n)}return n};k.uniqueSort=function(g){if(w){h=
l;g.sort(w);if(h)for(var i=1;i<g.length;i++)g[i]===g[i-1]&&g.splice(i--,1)}return g};k.matches=function(g,i){return k(g,null,null,i)};k.matchesSelector=function(g,i){return k(i,null,null,[g]).length>0};k.find=function(g,i,n){var m;if(!g)return[];for(var p=0,q=o.order.length;p<q;p++){var u,y=o.order[p];if(u=o.leftMatch[y].exec(g)){var F=u[1];u.splice(1,1);if(F.substr(F.length-1)!=="\\"){u[1]=(u[1]||"").replace(/\\/g,"");m=o.find[y](u,i,n);if(m!=null){g=g.replace(o.match[y],"");break}}}}m||(m=i.getElementsByTagName("*"));
return{set:m,expr:g}};k.filter=function(g,i,n,m){for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){for(var N in o.filter)if((p=o.leftMatch[N].exec(g))!=null&&p[2]){var O,D,R=o.filter[N];D=p[1];q=false;p.splice(1,1);if(D.substr(D.length-1)!=="\\"){if(F===y)y=[];if(o.preFilter[N])if(p=o.preFilter[N](p,F,n,y,m,M)){if(p===true)continue}else q=O=true;if(p)for(var j=0;(D=F[j])!=null;j++)if(D){O=R(D,p,j,F);var s=m^!!O;if(n&&O!=null)if(s)q=true;else F[j]=false;else if(s){y.push(D);q=true}}if(O!==
B){n||(F=y);g=g.replace(o.match[N],"");if(!q)return[];break}}}if(g===u)if(q==null)k.error(g);else break;u=g}return F};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},relative:{"+":function(g,i){var n=typeof i==="string",m=n&&!/\W/.test(i);n=n&&!m;if(m)i=i.toLowerCase();m=0;for(var p=g.length,q;m<p;m++)if(q=g[m]){for(;(q=q.previousSibling)&&q.nodeType!==1;);g[m]=n||q&&q.nodeName.toLowerCase()===
i?q||false:q===i}n&&k.filter(i,g,true)},">":function(g,i){var n,m=typeof i==="string",p=0,q=g.length;if(m&&!/\W/.test(i))for(i=i.toLowerCase();p<q;p++){if(n=g[p]){n=n.parentNode;g[p]=n.nodeName.toLowerCase()===i?n:false}}else{for(;p<q;p++)if(n=g[p])g[p]=m?n.parentNode:n.parentNode===i;m&&k.filter(i,g,true)}},"":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=i=i.toLowerCase();q=a}q("parentNode",i,p,g,m,n)},"~":function(g,i,n){var m,p=e++,q=b;if(typeof i==="string"&&!/\W/.test(i)){m=
i=i.toLowerCase();q=a}q("previousSibling",i,p,g,m,n)}},find:{ID:function(g,i,n){if(typeof i.getElementById!=="undefined"&&!n)return(g=i.getElementById(g[1]))&&g.parentNode?[g]:[]},NAME:function(g,i){if(typeof i.getElementsByName!=="undefined"){for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++)m[p].getAttribute("name")===g[1]&&n.push(m[p]);return n.length===0?null:n}},TAG:function(g,i){return i.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,i,n,m,p,q){g=" "+g[1].replace(/\\/g,
"")+" ";if(q)return g;q=0;for(var u;(u=i[q])!=null;q++)if(u)if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))n||m.push(u);else if(n)i[q]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},CHILD:function(g){if(g[1]==="nth"){var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=i[1]+(i[2]||1)-0;g[3]=i[3]-0}g[0]=e++;return g},ATTR:function(g,i,n,
m,p,q){i=g[1].replace(/\\/g,"");if(!q&&o.attrMap[i])g[1]=o.attrMap[i];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,i,n,m,p){if(g[1]==="not")if((d.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,i);else{g=k.filter(g[3],i,n,true^p);n||m.push.apply(m,g);return false}else if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===
true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,i,n){return!!k(n[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===
g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},setFilters:{first:function(g,i){return i===0},last:function(g,i,n,m){return i===m.length-1},even:function(g,i){return i%2===0},odd:function(g,i){return i%2===1},lt:function(g,i,n){return i<n[3]-0},gt:function(g,i,n){return i>n[3]-0},nth:function(g,i,n){return n[3]-
0===i},eq:function(g,i,n){return n[3]-0===i}},filter:{PSEUDO:function(g,i,n,m){var p=i[1],q=o.filters[p];if(q)return q(g,n,i,m);else if(p==="contains")return(g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;else if(p==="not"){i=i[3];n=0;for(m=i.length;n<m;n++)if(i[n]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+p)},CHILD:function(g,i){var n=i[1],m=g;switch(n){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(n===
"first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":n=i[2];var p=i[3];if(n===1&&p===0)return true;var q=i[0],u=g.parentNode;if(u&&(u.sizcache!==q||!g.nodeIndex)){var y=0;for(m=u.firstChild;m;m=m.nextSibling)if(m.nodeType===1)m.nodeIndex=++y;u.sizcache=q}m=g.nodeIndex-p;return n===0?m===0:m%n===0&&m/n>=0}},ID:function(g,i){return g.nodeType===1&&g.getAttribute("id")===i},TAG:function(g,i){return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===
i},CLASS:function(g,i){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1},ATTR:function(g,i){var n=i[1];n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);var m=n+"",p=i[2],q=i[4];return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false},POS:function(g,i,n,m){var p=o.setFilters[i[2]];
if(p)return p(g,n,i,m)}}},x=o.match.POS,r=function(g,i){return"\\"+(i-0+1)},A;for(A in o.match){o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r))}var C=function(g,i){g=Array.prototype.slice.call(g,0);if(i){i.push.apply(i,g);return i}return g};try{Array.prototype.slice.call(t.documentElement.childNodes,0)}catch(J){C=function(g,i){var n=0,m=i||[];if(f.call(g)==="[object Array]")Array.prototype.push.apply(m,
g);else if(typeof g.length==="number")for(var p=g.length;n<p;n++)m.push(g[n]);else for(;g[n];n++)m.push(g[n]);return m}}var w,I;if(t.documentElement.compareDocumentPosition)w=function(g,i){if(g===i){h=true;return 0}if(!g.compareDocumentPosition||!i.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(i)&4?-1:1};else{w=function(g,i){var n,m,p=[],q=[];n=g.parentNode;m=i.parentNode;var u=n;if(g===i){h=true;return 0}else if(n===m)return I(g,i);else if(n){if(!m)return 1}else return-1;
for(;u;){p.unshift(u);u=u.parentNode}for(u=m;u;){q.unshift(u);u=u.parentNode}n=p.length;m=q.length;for(u=0;u<n&&u<m;u++)if(p[u]!==q[u])return I(p[u],q[u]);return u===n?I(g,q[u],-1):I(p[u],i,1)};I=function(g,i,n){if(g===i)return n;for(g=g.nextSibling;g;){if(g===i)return-1;g=g.nextSibling}return 1}}k.getText=function(g){for(var i="",n,m=0;g[m];m++){n=g[m];if(n.nodeType===3||n.nodeType===4)i+=n.nodeValue;else if(n.nodeType!==8)i+=k.getText(n.childNodes)}return i};(function(){var g=t.createElement("div"),
i="script"+(new Date).getTime(),n=t.documentElement;g.innerHTML="<a name='"+i+"'/>";n.insertBefore(g,n.firstChild);if(t.getElementById(i)){o.find.ID=function(m,p,q){if(typeof p.getElementById!=="undefined"&&!q)return(p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[]};o.filter.ID=function(m,p){var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&q&&q.nodeValue===p}}n.removeChild(g);
n=g=null})();(function(){var g=t.createElement("div");g.appendChild(t.createComment(""));if(g.getElementsByTagName("*").length>0)o.find.TAG=function(i,n){var m=n.getElementsByTagName(i[1]);if(i[1]==="*"){for(var p=[],q=0;m[q];q++)m[q].nodeType===1&&p.push(m[q]);m=p}return m};g.innerHTML="<a href='#'></a>";if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")o.attrHandle.href=function(i){return i.getAttribute("href",2)};g=null})();t.querySelectorAll&&
function(){var g=k,i=t.createElement("div");i.innerHTML="<p class='TEST'></p>";if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){k=function(m,p,q,u){p=p||t;m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!u&&!k.isXML(p))if(p.nodeType===9)try{return C(p.querySelectorAll(m),q)}catch(y){}else if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){var F=p.getAttribute("id"),M=F||"__sizzle__";F||p.setAttribute("id",M);try{return C(p.querySelectorAll("#"+M+" "+m),q)}catch(N){}finally{F||
p.removeAttribute("id")}}return g(m,p,q,u)};for(var n in g)k[n]=g[n];i=null}}();(function(){var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;try{i.call(t.documentElement,"[test!='']:sizzle")}catch(m){n=true}if(i)k.matchesSelector=function(p,q){q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(p))try{if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q))return i.call(p,q)}catch(u){}return k(q,null,null,[p]).length>0}})();(function(){var g=
t.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){o.order.splice(1,0,"CLASS");o.find.CLASS=function(i,n,m){if(typeof n.getElementsByClassName!=="undefined"&&!m)return n.getElementsByClassName(i[1])};g=null}}})();k.contains=t.documentElement.contains?function(g,i){return g!==i&&(g.contains?g.contains(i):true)}:t.documentElement.compareDocumentPosition?
function(g,i){return!!(g.compareDocumentPosition(i)&16)}:function(){return false};k.isXML=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false};var L=function(g,i){for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){p+=n[0];g=g.replace(o.match.PSEUDO,"")}g=o.relative[g]?g+"*":g;n=0;for(var u=q.length;n<u;n++)k(g,q[n],m);return k.filter(p,m)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=k.getText;c.isXMLDoc=k.isXML;
c.contains=k.contains})();var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){d=b.length;c.find(a,this[e],b);if(e>0)for(var h=d;h<b.length;h++)for(var l=0;l<d;l++)if(b[l]===b[h]){b.splice(h--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,e=b.length;d<e;d++)if(c.contains(this,b[d]))return true})},
not:function(a){return this.pushStack(ma(this,a,false),"not",a)},filter:function(a){return this.pushStack(ma(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){var d=[],e,f,h=this[0];if(c.isArray(a)){var l,k={},o=1;if(h&&a.length){e=0;for(f=a.length;e<f;e++){l=a[e];k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l)}for(;h&&h.ownerDocument&&h!==b;){for(l in k){e=k[l];if(e.jquery?e.index(h)>-1:c(h).is(e))d.push({selector:l,elem:h,level:o})}h=
h.parentNode;o++}}return d}l=cb.test(a)?c(a,b||this.context):null;e=0;for(f=this.length;e<f;e++)for(h=this[e];h;)if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){d.push(h);break}else{h=h.parentNode;if(!h||!h.ownerDocument||h===b)break}d=d.length>1?c.unique(d):d;return this.pushStack(d,"closest",a)},index:function(a){if(!a||typeof a==="string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var d=typeof a==="string"?c(a,b||this.context):
c.makeArray(a),e=c.merge(this.get(),d);return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,
2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,
b){c.fn[a]=function(d,e){var f=c.map(this,b,d);Za.test(a)||(e=d);if(e&&typeof e==="string")f=c.filter(e,f);f=this.length>1?c.unique(f):f;if((this.length>1||ab.test(e))&&$a.test(a))f=f.reverse();return this.pushStack(f,a,bb.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b)},dir:function(a,b,d){var e=[];for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){a.nodeType===1&&
e.push(a);a=a[b]}return e},nth:function(a,b,d){b=b||1;for(var e=0;a;a=a[d])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,
"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};P.optgroup=P.option;P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;P.th=P.td;if(!c.support.htmlSerialize)P._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==B)return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,e;(e=this[d])!=null;d++)if(!a||c.filter(a,[e]).length){if(!b&&e.nodeType===1){c.cleanData(e.getElementsByTagName("*"));c.cleanData([e])}e.parentNode&&e.parentNode.removeChild(e)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,e=this.ownerDocument;if(!d){d=e.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(za,"").replace(fb,'="$1">').replace($,"")],e)[0]}else return this.cloneNode(true)});if(a===true){na(this,b);na(this.find("*"),b.find("*"))}return b},html:function(a){if(a===B)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
else if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Aa,"<$1></$2>");try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(e){this.empty().append(a)}}else c.isFunction(a)?this.each(function(f){var h=c(this);h.html(a.call(this,f,h.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=
c(this),e=d.html();d.replaceWith(a.call(this,b,e))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){var e,f,h,l=a[0],k=[];if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l))return this.each(function(){c(this).domManip(a,
b,d,true)});if(c.isFunction(l))return this.each(function(x){var r=c(this);a[0]=l.call(this,x,b?r.html():B);r.domManip(a,b,d)});if(this[0]){e=l&&l.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);h=e.fragment;if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){b=b&&c.nodeName(f,"tr");f=0;for(var o=this.length;f<o;f++)d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):
this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h)}k.length&&c.each(k,Oa)}return this}});c.buildFragment=function(a,b,d){var e,f,h;b=b&&b[0]?b[0].ownerDocument||b[0]:t;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){f=true;if(h=c.fragments[a[0]])if(h!==1)e=h}if(!e){e=b.createDocumentFragment();c.clean(a,b,e,d)}if(f)c.fragments[a[0]]=h?e:1;return{fragment:e,cacheable:f}};c.fragments={};c.each({appendTo:"append",
prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var e=[];d=c(d);var f=this.length===1&&this[0].parentNode;if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){d[b](this[0]);return this}else{f=0;for(var h=d.length;f<h;f++){var l=(f>0?this.clone(true):this).get();c(d[f])[b](l);e=e.concat(l)}return this.pushStack(e,a,d.selector)}}});c.extend({clean:function(a,b,d,e){b=b||t;if(typeof b.createElement==="undefined")b=b.ownerDocument||
b[0]&&b[0].ownerDocument||t;for(var f=[],h=0,l;(l=a[h])!=null;h++){if(typeof l==="number")l+="";if(l){if(typeof l==="string"&&!eb.test(l))l=b.createTextNode(l);else if(typeof l==="string"){l=l.replace(Aa,"<$1></$2>");var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");for(r.innerHTML=o[1]+l+o[2];x--;)r=r.lastChild;if(!c.support.tbody){x=db.test(l);k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];for(o=k.length-
1;o>=0;--o)c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o])}!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);l=r.childNodes}if(l.nodeType)f.push(l);else f=c.merge(f,l)}}if(d)for(h=0;f[h];h++)if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript"))e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);else{f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
d.appendChild(f[h])}return f},cleanData:function(a){for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++)if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()]))if(d=k[c.expando]){if((b=e[d])&&b.events)for(var o in b.events)f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);if(h)delete k[c.expando];else k.removeAttribute&&k.removeAttribute(c.expando);delete e[d]}}});var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,
jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){if(arguments.length===2&&b===B)return this;return c.access(this,a,b,true,function(d,e,f){return f!==B?c.style(d,e,f):c.css(d,e)})};c.extend({cssHooks:{opacity:{get:function(a,b){if(b){var d=W(a,"opacity","opacity");return d===""?"1":d}else return a.style.opacity}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,
zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];b=c.cssProps[h]||h;if(d!==B){if(!(typeof d==="number"&&isNaN(d)||d==null)){if(typeof d==="number"&&!c.cssNumber[h])d+="px";if(!k||!("set"in k)||(d=k.set(a,d))!==B)try{l[b]=d}catch(o){}}}else{if(k&&"get"in k&&(f=k.get(a,false,e))!==B)return f;return l[b]}}},css:function(a,b,d){var e,f=c.camelCase(b),
h=c.cssHooks[f];b=c.cssProps[f]||f;if(h&&"get"in h&&(e=h.get(a,true,d))!==B)return e;else if(W)return W(a,b,f)},swap:function(a,b,d){var e={},f;for(f in b){e[f]=a.style[f];a.style[f]=b[f]}d.call(a);for(f in b)a.style[f]=e[f]},camelCase:function(a){return a.replace(hb,lb)}});c.curCSS=c.css;c.each(["height","width"],function(a,b){c.cssHooks[b]={get:function(d,e,f){var h;if(e){if(d.offsetWidth!==0)h=oa(d,b,f);else c.swap(d,kb,function(){h=oa(d,b,f)});if(h<=0){h=W(d,b,b);if(h==="0px"&&aa)h=aa(d,b,b);
if(h!=null)return h===""||h==="auto"?"0px":h}if(h<0||h==null){h=d.style[b];return h===""||h==="auto"?"0px":h}return typeof h==="string"?h:h+"px"}},set:function(d,e){if(Fa.test(e)){e=parseFloat(e);if(e>=0)return e+"px"}else return e}}});if(!c.support.opacity)c.cssHooks.opacity={get:function(a,b){return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var d=a.style;d.zoom=1;var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=
d.filter||"";d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e}};if(t.defaultView&&t.defaultView.getComputedStyle)Ga=function(a,b,d){var e;d=d.replace(ib,"-$1").toLowerCase();if(!(b=a.ownerDocument.defaultView))return B;if(b=b.getComputedStyle(a,null)){e=b.getPropertyValue(d);if(e===""&&!c.contains(a.ownerDocument.documentElement,a))e=c.style(a,d)}return e};if(t.documentElement.currentStyle)aa=function(a,b){var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;if(!Fa.test(f)&&jb.test(f)){d=h.left;
e=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;h.left=b==="fontSize"?"1em":f||0;f=h.pixelLeft+"px";h.left=d;a.runtimeStyle.left=e}return f===""?"auto":f};W=Ga||aa;if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=a.offsetHeight;return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!=="string"&&Ha)return Ha.apply(this,arguments);else if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}e="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b===
"object"){b=c.param(b,c.ajaxSettings.traditional);e="POST"}var h=this;c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){if(k==="success"||k==="notmodified")h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);d&&h.each(d,[l.responseText,k,l])}});return this},serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&
!this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type))}).map(function(a,b){var d=c(this).val();return d==null?null:c.isArray(d)?c.map(d,function(e){return{name:b.name,value:e}}):{name:b.name,value:d}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e})},
getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,e){if(c.isFunction(b)){e=e||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new E.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",
script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);b.url=b.url.replace(ub,"");b.context=a&&a.context!=null?a.context:b;if(b.data&&b.processData&&typeof b.data!=="string")b.data=c.param(b.data,b.traditional);if(b.dataType==="jsonp"){if(h==="GET")T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");else if(!b.data||
!T.test(b.data))b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";b.dataType="json"}if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){d=b.jsonpCallback||"jsonp"+mb++;if(b.data)b.data=(b.data+"").replace(T,"="+d+"$1");b.url=b.url.replace(T,"="+d+"$1");b.dataType="script";var k=E[d];E[d]=function(m){if(c.isFunction(k))k(m);else{E[d]=B;try{delete E[d]}catch(p){}}f=m;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);r&&r.removeChild(A)}}if(b.dataType==="script"&&b.cache===null)b.cache=
false;if(b.cache===false&&l){var o=c.now(),x=b.url.replace(rb,"$1_="+o);b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"")}if(b.data&&l)b.url+=(ja.test(b.url)?"&":"?")+b.data;b.global&&c.active++===0&&c.event.trigger("ajaxStart");o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);if(b.dataType==="script"&&h==="GET"&&o){var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");if(b.scriptCharset)A.charset=b.scriptCharset;
A.src=b.url;if(!d){var C=false;A.onload=A.onreadystatechange=function(){if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){C=true;c.handleSuccess(b,w,e,f);c.handleComplete(b,w,e,f);A.onload=A.onreadystatechange=null;r&&A.parentNode&&r.removeChild(A)}}}r.insertBefore(A,r.firstChild);return B}var J=false,w=b.xhr();if(w){b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);try{if(b.data!=null&&!l||a&&a.contentType)w.setRequestHeader("Content-Type",
b.contentType);if(b.ifModified){c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url])}o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default)}catch(I){}if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){b.global&&c.active--===1&&c.event.trigger("ajaxStop");w.abort();return false}b.global&&
c.triggerGlobal(b,"ajaxSend",[w,b]);var L=w.onreadystatechange=function(m){if(!w||w.readyState===0||m==="abort"){J||c.handleComplete(b,w,e,f);J=true;if(w)w.onreadystatechange=c.noop}else if(!J&&w&&(w.readyState===4||m==="timeout")){J=true;w.onreadystatechange=c.noop;e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";var p;if(e==="success")try{f=c.httpData(w,b.dataType,b)}catch(q){e="parsererror";p=q}if(e==="success"||e==="notmodified")d||
c.handleSuccess(b,w,e,f);else c.handleError(b,w,e,p);d||c.handleComplete(b,w,e,f);m==="timeout"&&w.abort();if(b.async)w=null}};try{var g=w.abort;w.abort=function(){w&&Function.prototype.call.call(g,w);L("abort")}}catch(i){}b.async&&b.timeout>0&&setTimeout(function(){w&&!J&&L("timeout")},b.timeout);try{w.send(l||b.data==null?null:b.data)}catch(n){c.handleError(b,w,null,n);c.handleComplete(b,w,e,f)}b.async||L();return w}},param:function(a,b){var d=[],e=function(h,l){l=c.isFunction(l)?l():l;d[d.length]=
encodeURIComponent(h)+"="+encodeURIComponent(l)};if(b===B)b=c.ajaxSettings.traditional;if(c.isArray(a)||a.jquery)c.each(a,function(){e(this.name,this.value)});else for(var f in a)da(f,a[f],b,e);return d.join("&").replace(tb,"+")}});c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){a.error&&a.error.call(a.context,b,d,e);a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e])},handleSuccess:function(a,b,d,e){a.success&&a.success.call(a.context,e,d,b);a.global&&c.triggerGlobal(a,"ajaxSuccess",
[b,a])},handleComplete:function(a,b,d){a.complete&&a.complete.call(a.context,b,d);a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);a.global&&c.active--===1&&c.event.trigger("ajaxStop")},triggerGlobal:function(a,b,d){(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d)},httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),
e=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(e)c.etag[b]=e;return a.status===304},httpData:function(a,b,d){var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;a=f?a.responseXML:a.responseText;f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b==="json"||!b&&e.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&e.indexOf("javascript")>=0)c.globalEval(a);return a}});
if(E.ActiveXObject)c.ajaxSettings.xhr=function(){if(E.location.protocol!=="file:")try{return new E.XMLHttpRequest}catch(a){}try{return new E.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}};c.support.ajax=!!c.ajaxSettings.xhr();var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b,d){if(a||a===0)return this.animate(S("show",
3),a,b,d);else{d=0;for(var e=this.length;d<e;d++){a=this[d];b=a.style.display;if(!c.data(a,"olddisplay")&&b==="none")b=a.style.display="";b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName))}for(d=0;d<e;d++){a=this[d];b=a.style.display;if(b===""||b==="none")a.style.display=c.data(a,"olddisplay")||""}return this}},hide:function(a,b,d){if(a||a===0)return this.animate(S("hide",3),a,b,d);else{a=0;for(b=this.length;a<b;a++){d=c.css(this[a],"display");d!=="none"&&c.data(this[a],"olddisplay",
d)}for(a=0;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b,d){var e=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||e?this.each(function(){var f=e?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(S("toggle",3),a,b,d);return this},fadeTo:function(a,b,d,e){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e)},animate:function(a,b,d,e){var f=c.speed(b,
d,e);if(c.isEmptyObject(a))return this.each(f.complete);return this[f.queue===false?"each":"queue"](function(){var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;for(l in a){var r=c.camelCase(l);if(l!==r){a[r]=a[l];delete a[l];l=r}if(a[l]==="hide"&&o||a[l]==="show"&&!o)return h.complete.call(this);if(k&&(l==="height"||l==="width")){h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none")if(c.support.inlineBlockNeedsLayout)if(qa(this.nodeName)===
"inline")this.style.display="inline-block";else{this.style.display="inline";this.style.zoom=1}else this.style.display="inline-block"}if(c.isArray(a[l])){(h.specialEasing=h.specialEasing||{})[l]=a[l][1];a[l]=a[l][0]}}if(h.overflow!=null)this.style.overflow="hidden";h.curAnim=c.extend({},a);c.each(a,function(A,C){var J=new c.fx(x,h,A);if(vb.test(C))J[C==="toggle"?o?"show":"hide":C](a);else{var w=wb.exec(C),I=J.cur()||0;if(w){var L=parseFloat(w[2]),g=w[3]||"px";if(g!=="px"){c.style(x,A,(L||1)+g);I=(L||
1)/J.cur()*I;c.style(x,A,I+g)}if(w[1])L=(w[1]==="-="?-1:1)*L+I;J.custom(I,L,g)}else J.custom(I,C,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);this.each(function(){for(var e=d.length-1;e>=0;e--)if(d[e].elem===this){b&&d[e](true);d.splice(e,1)}});b||this.dequeue();return this}});c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){c.fn[a]=function(d,e,f){return this.animate(b,
d,e,f)}});c.extend({speed:function(a,b,d){var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;e.old=e.complete;e.complete=function(){e.queue!==false&&c(this).dequeue();c.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,d,e){return d+e*a},swing:function(a,b,d,e){return(-Math.cos(a*
Math.PI)/2+0.5)*e+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||c.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(c.css(this.elem,this.prop));return a&&a>-1E4?a:0},custom:function(a,b,d){function e(l){return f.step(l)}
var f=this,h=c.fx;this.startTime=c.now();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;e.elem=this.elem;if(e()&&c.timers.push(e)&&!ba)ba=setInterval(h.tick,h.interval)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;
this.custom(this.cur(),0)},step:function(a){var b=c.now(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var e in this.options.curAnim)if(this.options.curAnim[e]!==true)d=false;if(d){if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){var f=this.elem,h=this.options;c.each(["","X","Y"],function(k,o){f.style["overflow"+o]=h.overflow[k]})}this.options.hide&&c(this.elem).hide();if(this.options.hide||
this.options.show)for(var l in this.options.curAnim)c.style(this.elem,l,this.options.orig[l]);this.options.complete.call(this.elem)}return false}else{a=b-this.startTime;this.state=a/this.options.duration;b=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=
c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||c.fx.stop()},interval:13,stop:function(){clearInterval(ba);ba=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===
b.elem}).length};var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;c.fn.offset="getBoundingClientRect"in t.documentElement?function(a){var b=this[0],d;if(a)return this.each(function(l){c.offset.setOffset(this,a,l)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);try{d=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,h=f.documentElement;if(!d||!c.contains(h,b))return d||{top:0,left:0};b=f.body;f=fa(f);return{top:d.top+(f.pageYOffset||c.support.boxModel&&
h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)}}:function(a){var b=this[0];if(a)return this.each(function(x){c.offset.setOffset(this,a,x)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){if(c.offset.supportsFixedPosition&&d.position==="fixed")break;d=f?f.getComputedStyle(b,null):b.currentStyle;k-=b.scrollTop;o-=b.scrollLeft;if(b===e){k+=b.offsetTop;o+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){k+=parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}e=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){k+=
parseFloat(d.borderTopWidth)||0;o+=parseFloat(d.borderLeftWidth)||0}d=d}if(d.position==="relative"||d.position==="static"){k+=l.offsetTop;o+=l.offsetLeft}if(c.offset.supportsFixedPosition&&d.position==="fixed"){k+=Math.max(h.scrollTop,l.scrollTop);o+=Math.max(h.scrollLeft,l.scrollLeft)}return{top:k,left:o}};c.offset={initialize:function(){var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",
height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";a.insertBefore(b,a.firstChild);d=b.firstChild;e=d.firstChild;f=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=e.offsetTop!==5;this.doesAddBorderForTableAndCells=
f.offsetTop===5;e.style.position="fixed";e.style.top="20px";this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;e.style.position=e.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;a.removeChild(b);c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.css(a,
"marginTop"))||0;d+=parseFloat(c.css(a,"marginLeft"))||0}return{top:b,left:d}},setOffset:function(a,b,d){var e=c.css(a,"position");if(e==="static")a.style.position="relative";var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;e={};var x={};if(o)x=f.position();l=o?x.top:parseInt(l,10)||0;k=o?x.left:parseInt(k,10)||0;if(c.isFunction(b))b=b.call(a,d,h);if(b.top!=null)e.top=b.top-h.top+l;if(b.left!=null)e.left=b.left-h.left+k;"using"in b?b.using.call(a,
e):f.css(e)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.css(a,"marginTop"))||0;d.left-=parseFloat(c.css(a,"marginLeft"))||0;e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;return{top:d.top-e.top,left:d.left-e.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&
c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(e){var f=this[0],h;if(!f)return null;if(e!==B)return this.each(function(){if(h=fa(this))h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());else this[d]=e});else return(h=fa(f))?"pageXOffset"in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();
c.fn["inner"+b]=function(){return this[0]?parseFloat(c.css(this[0],d,"padding")):null};c.fn["outer"+b]=function(e){return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null};c.fn[d]=function(e){var f=this[0];if(!f)return e==null?null:this;if(c.isFunction(e))return this.each(function(l){var k=c(this);k[d](e.call(this,l,k[d]()))});if(c.isWindow(f))return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];else if(f.nodeType===9)return Math.max(f.documentElement["client"+
b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);else if(e===B){f=c.css(f,d);var h=parseFloat(f);return c.isNaN(h)?f:h}else return this.css(d,typeof e==="string"?e:e+"px")}})})(window);


/* Added by module "core", file "include/javascript/jquery.json-1.3.min.js" */

(function($){function toIntegersAtLease(n)
{return n<10?'0'+n:n;}
Date.prototype.toJSON=function(date)
{return this.getUTCFullYear()+'-'+
toIntegersAtLease(this.getUTCMonth())+'-'+
toIntegersAtLease(this.getUTCDate());};var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.quoteString=function(string)
{if(escapeable.test(string))
{return'"'+string.replace(escapeable,function(a)
{var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};$.toJSON=function(o,compact)
{var type=typeof(o);if(type=="undefined")
return"undefined";else if(type=="number"||type=="boolean")
return o+"";else if(o===null)
return"null";if(type=="string")
{return $.quoteString(o);}
if(type=="object"&&typeof o.toJSON=="function")
return o.toJSON(compact);if(type!="function"&&typeof(o.length)=="number")
{var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i],compact));}
if(compact)
return"["+ret.join(",")+"]";else
return"["+ret.join(", ")+"]";}
if(type=="function"){throw new TypeError("Unable to convert object of type 'function' to json.");}
var ret=[];for(var k in o){var name;type=typeof(k);if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;var val=$.toJSON(o[k],compact);if(typeof(val)!="string"){continue;}
if(compact)
ret.push(name+":"+val);else
ret.push(name+": "+val);}
return"{"+ret.join(", ")+"}";};$.compactJSON=function(o)
{return $.toJSON(o,true);};$.evalJSON=function(src)
{return eval("("+src+")");};$.secureEvalJSON=function(src)
{var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};})(jQuery);

/* Added by module "core", file "include/javascript/jquery.bgiframe-2.1.2.min.js" */
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */
(function(a){a.fn.bgiframe=(a.browser.msie&&/msie 6\.0/i.test(navigator.userAgent)?function(d){d=a.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},d);var c='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+d.src+'"style="display:block;position:absolute;z-index:-1;'+(d.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(d.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":b(d.top))+";left:"+(d.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":b(d.left))+";width:"+(d.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":b(d.width))+";height:"+(d.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":b(d.height))+';"/>';return this.each(function(){if(a(this).children("iframe.bgiframe").length===0){this.insertBefore(document.createElement(c),this.firstChild)}})}:function(){return this});a.fn.bgIframe=a.fn.bgiframe;function b(c){return c&&c.constructor===Number?c+"px":c}})(jQuery);

/* Added by module "core", file "include/javascript/phorum-javascript-library.php" */
////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//   Copyright (C) 2010  Phorum Development Team                              //
//   http://www.phorum.org                                                    //
//                                                                            //
//   This program is free software. You can redistribute it and/or modify     //
//   it under the terms of either the current Phorum License (viewable at     //
//   phorum.org) or the Phorum License that was distributed with this file    //
//                                                                            //
//   This program is distributed in the hope that it will be useful,          //
//   but WITHOUT ANY WARRANTY, without even the implied warranty of           //
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                     //
//                                                                            //
//   You should have received a copy of the Phorum License                    //
//   along with this program.                                                 //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

/**
 * A non-conflicting jQuery library for use by Phorum. This way, our jQuery
 * library will not conflict with existing javascript libraries (e.g. when
 * Phorum is embedded in another application that uses a javascript library
 * or when a module is loaded that also loads a library of its own).
 *
 * @var jQuery
 */
var $PJ = jQuery.noConflict();



/* Added by module "core", file "include/posting/form_objects.js.php" */
// Valid object ids for textarea objects to handle. The first object
// that can be matched will be use as the object to work with.
// This is done to arrange for backward compatibility between
// Phorum versions.
Phorum.textarea_ids = new Array(
    'phorum_textarea',  // Phorum 5.1
    'body',             // Phorum 5.2
    'message'           // PM interface
);

// Valid object ids for subject text field objects to handle.
Phorum.subject_ids = new Array(
    'phorum_subject',   // Phorum 5.1
    'subject'           // Phorum 5.2
);

// Some variables for storing objects that we need globally.
Phorum.textarea_obj = null;
Phorum.subject_obj = null;

// A variable for storing the current selection range of the 
// textarea. Needed for working around an MSIE problem.
Phorum.textarea_range = null;

// ----------------------------------------------------------------------
// Uitilty functions
// ----------------------------------------------------------------------

// Find the Phorum textarea object and return it. In case of
// problems, null will be returned.
Phorum.get_textarea = function()
{
    if (Phorum.textarea_obj != null) {
        return Phorum.textarea_obj;
    }

    for (var i=0; Phorum.textarea_ids[i]; i++) {
        Phorum.textarea_obj =
            document.getElementById(Phorum.textarea_ids[i]);
        if (Phorum.textarea_obj) break;
    }

    if (! Phorum.textarea_obj) {
        alert('No textarea found on the current page.');
        return null;
    }

    return Phorum.textarea_obj;
}

// Find the Phorum subject field object and return it. In case of
// problems, null will be returned.
Phorum.get_subjectfield = function()
{
    if (Phorum.subject_obj != null) {
        return Phorum.subject_obj;
    }

    for (var i=0; Phorum.subject_ids[i]; i++) {
        Phorum.subject_obj =
            document.getElementById(Phorum.subject_ids[i]);
        if (Phorum.subject_obj) break;
    }

    if (! Phorum.subject_obj) {
        return null;
    }

    return Phorum.subject_obj;
}

// Strip whitespace from the start and end of a string.
Phorum.strip_whitespace = function(str, return_stripped)
{
    var strip_pre = '';
    var strip_post = '';

    // Strip whitespace from end of string.
    for (;;) {
        var lastchar = str.substring(str.length-1, str.length);
        if (lastchar == ' '  || lastchar == '\r' ||
            lastchar == '\n' || lastchar == '\t') {
            strip_post = lastchar + strip_post;

            str = str.substring(0, str.length-1);
        } else {
            break;
        }
    }

    // Strip whitespace from start of string.
    for (;;) {
        var firstchar = str.substring(0,1);
        if (firstchar == ' '  || firstchar == '\r' ||
            firstchar == '\n' || firstchar == '\t') {
            strip_pre += firstchar;
            str = str.substring(1);
        } else {
            break;
        }
    }

    if (return_stripped) {
        return new Array(str, strip_pre, strip_post);
    } else {
        return str;
    }
} 

// Save the selection range of the textarea. This is needed because
// sometimes clicking in a popup can clear the selection in MSIE.
Phorum.store_range = function()
{
    var ta = Phorum.get_textarea();
    if (ta == null || ta.setSelectionRange || ! document.selection) return;
    ta.focus();
    Phorum.textarea_range = document.selection.createRange();
}

// Restored a saved textarea selection range.
Phorum.restore_range = function()
{
    if (Phorum.textarea_range != null)
    {
        Phorum.textarea_range.select();
        Phorum.textarea_range = null;
    }
}

// Move the focus to the textarea.
Phorum.focus_textarea = function()
{
    var textarea_obj = Phorum.get_textarea();
    if (textarea_obj == null) return;
    textarea_obj.focus();
}

// Move the focus to the subject field.
Phorum.focus_subjectfield = function()
{
    var subjectfield_obj = Phorum.get_subjectfield();
    if (subjectfield_obj == null) return;

    subjectfield_obj.focus();
}

// ----------------------------------------------------------------------
// Textarea manipulation
// ----------------------------------------------------------------------

// Add tags to the textarea. If some text is selected, then place the
// tags around the selected text. If no text is selected and a prompt_str
// is provided, then prompt the user for the data to place inside
// the tags.
Phorum.add_tags = function(pre, post, target, prompt_str)
{
    var text;
    var pretext;
    var posttext;
    var range;
    var ta = target ? target : Phorum.get_textarea();
    if (ta == null) return;

    // Store the current scroll offset, so we can restore it after
    // adding the tags to its contents.
    var offset = ta.scrollTop;

    if (ta.setSelectionRange)
    {
        // Get the currently selected text.
        pretext = ta.value.substring(0, ta.selectionStart);
        text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
        posttext = ta.value.substring(ta.selectionEnd, ta.value.length);

        // Prompt for input if no text was selected and a prompt is set.
        if (text == '' && prompt_str) {
            text = prompt(prompt_str, '');
            if (text == null) return;
        }

        // Strip whitespace from text selection and move it to the
        // pre- and post.
        var res = Phorum.strip_whitespace(text, true);
        text = res[0];
        pre = res[1] + pre;
        post = post + res[2];

        ta.value = pretext + pre + text + post + posttext;

        // Reselect the selected text.
        var cursorpos1 = pretext.length + pre.length;
        var cursorpos2 = cursorpos1 + text.length;
        ta.setSelectionRange(cursorpos1, cursorpos2);
        ta.focus();
    }
    else if (document.selection) /* MSIE support */
    {
        // Get the currently selected text.
        ta.focus();
        range = document.selection.createRange();

        // Fumbling to work around newline selections at the end of
        // the text selection. MSIE does not include them in the
        // range.text, but it does replace them when setting range.text
        // to a new value :-/
        var virtlen = range.text.length;
        if (virtlen > 0) {
            while (range.text.length == virtlen) {
                range.moveEnd('character', -1);
            }
            range.moveEnd('character', +1);
        }

        // Prompt for input if no text was selected and a prompt is set.
        text = range.text;
        if (text == '' && prompt_str) {
            text = prompt(prompt_str, '');
            if (text == null) return;
        }

        // Strip whitespace from text selection and move it to the
        // pre- and post.
        var res = Phorum.strip_whitespace(text, true);
        text = res[0];
        pre = res[1] + pre;
        post = post + res[2];

        // Add pre and post to the text.
        range.text = pre + text + post;

        // Reselect the selected text. Another MSIE anomaly has to be
        // taken care of here. MSIE will include carriage returns
        // in the text.length, but it does not take them into account
        // when using selection range moving methods :-/
        // By setting the range.text before, the cursor is now after
        // the replaced code, so we will move the start and the end
        // back in the text.
        var mvstart = post.length + text.length -
                      ((text + post).split('\r').length - 1);
        var mvend   = post.length +
                      (post.split('\r').length - 1);
        range.moveStart('character', -mvstart);
        range.moveEnd('character', -mvend);
        range.select();
    }
    else /* Support for really limited browsers, e.g. MSIE5 on MacOS */
    {
        ta.value = ta.value + pre + post;
    }

    ta.scrollTop = offset;
}


/* Added by module "core", file "include/ajax/client.js.php" */
// Setup the Phorum.Ajax namespace if it has not yet been setup.
if (Phorum === undefined) Phorum = {};
if (Phorum.Ajax === undefined) Phorum.Ajax = {};

// The version of this lib
Phorum.Ajax.version = '1.0.0';

// The URL that we use to access the Phorum Ajax layer.
Phorum.Ajax.URL = 'http://www.les-mathematiques.net/phorum/ajax.php';

// Storage for Ajax call return data. This acts as a local cache
// for keeping track of already retrieved items.
Phorum.Ajax.cache = {};

/**
 * Create an XMLHttpRequest object.
 * Used internally by Phorum.Ajax.call().
 * Raise an onFailure event in case no object can be created.
 * Return either an object or null if the object creation failed.
 */
Phorum.Ajax.getXMLHttpRequest = function(req)
{
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versions = [
            'MSXML2.XMLHttp.5.0',
            'MSXML2.XMLHttp.4.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp',
            'Microsoft.XMLHttp'
        ];
        for (var i=0; i < versions.length; i++) {
            try { xhr = new ActiveXObject(versions[i]); } catch (e) { }
        }
    }

    if (xhr) {
        return xhr;
    }

    if (req.onFailure) req.onFailure(
        'Phorum: Unable to create an XMLHttpRequest object',
        -1, null
    );
    return null;
};

/**
 * Execute an Ajax Phorum call.
 */
Phorum.Ajax.call = function(req)
{
    // If the store property is set for the request, then check
    // if the data for the request is already available in the
    // local cache. If yes, then return the data immediately.
    if (req.store) {
        if (req.store != null && Phorum.Ajax.cache[req.store]) {
            if (req.onSuccess) {
                // true = data retrieved from cache.
                req.onSuccess(Phorum.Ajax.cache[req.store], true);
            }
            return;
        }
    }

    // Check the request data.
    if (! req['call']) {
        if (req.onFailure) req.onFailure(
            'Phorum.Ajax.call() error: missing property ' +
            '"call" for the request object.',
            -1, null
        );
        return;
    }

    // Check if there is an XMLHttpRequest object available.
    var xhr = Phorum.Ajax.getXMLHttpRequest(req);
    if (! xhr) return;

    // Convert the request object to JSON.
    var json = Phorum.JSON.encode(req);

    // Notify the start of the request loading stage.
    if (req.onRequest) req.onRequest(json);

    xhr.open("post", Phorum.Ajax.URL, true);
    xhr.setRequestHeader("Content-Type", "text/x-json");
    xhr.onreadystatechange = function()
    {
      if (req.onReadStateChange) req.onReadyStateChange(req);

      switch (xhr.readyState)
      {
          case 1:

              if (req.onLoading) req.onLoading(xhr);
              break;

          case 2:

              if (req.onLoaded) req.onLoaded(xhr);
              break;

          case 3:

              if (req.onInteractive) req.onInteractive(xhr);
              break;

          case 4:

              if (req.onComplete)req.onComplete(xhr);

              if (req.onResponse) req.onResponse(xhr.responseText);

              if (xhr.status == 200) {

                  // Evaluate the returned JSON code. If evaluation fails,
                  // then run the onFailure event for the Phorum.Ajax.call.
                  try {
                      var res = Phorum.JSON.decode(xhr.responseText);
                  } catch (e) {
                      if (req.onFailure) req.onFailure(
                        'Ajax Phorum API call succeeded, but the return ' +
                        'data could not be parsed as JSON data.',
                        xhr.status, xhr.responseText
                      );
                      return;
                  }

                  // If the req.store property is set, then we store
                  // the result data in the Phorum cache.
                  if (req.store) Phorum.Ajax.cache[req.store] = res;

                  // false = data not retrieved from store.
                  if (req.onSuccess) req.onSuccess(res, false);

              } else {

                  if (req.onFailure) req.onFailure(xhr.responseText);
              }

              break;
      }
    };
    xhr.send(json);
};

// Invalidate a single cache item of the full cache.
Phorum.Ajax.invalidateCache = function(key)
{
    if (key) {
        Phorum.Ajax.cache[key] = null;
    } else {
        Phorum.Ajax.cache = new Array();
    }
};

// Parse out javascript blocks from the data to eval them. Adding them
// to the page using innerHTML does not invoke parsing by the browser.
Phorum.Ajax.evalJavaScript = function(data)
{
    var cursor = 0;
    var start  = 1;
    var end    = 1;

    while (cursor < data.length && start > 0 && end > 0) {
        start = data.indexOf('<script', cursor);
        end   = data.indexOf('</script', cursor);
        if (end > start && end > -1) {
            if (start > -1) {
                var res = data.substring(start, end);
                start = res.indexOf('>') + 1;
                res = res.substring(start);
                if (res.length != 0) {
                    eval(res);
                }
            }
            cursor = end + 1;
        }
    }
};

// ======================================================================
// JSON encoder and decoder
// Based on byteson by Andrea Giammarchi
// (http://www.devpro.it/byteson/)
// ======================================================================

Phorum.JSON = {};

Phorum.JSON.common =
{
  // characters object, useful to convert some char in a JSON compatible way
  c:{'\b':'b','\t':'t','\n':'n','\f':'f','\r':'r','"':'"','\\':'\\','/':'/'},

  // decimal function, returns a string with length === 2 for date convertion
  d:function(n){return n < 10 ? '0'.concat(n) : n},

  // integer function, returns integer value from a piece of string
  i:function(e, p, l){return parseInt(e.substr(p, l))},

  // slash function, add a slash before a common.c char
  s:function(i,d){return '\\'.concat(Phorum.JSON.common.c[d])},

  // unicode function, return respective unicode string
  u:function(i,d){var n = d.charCodeAt(0).toString(16);return '\\u'.concat(n.length < 2 ? '000' : '00', n)}
};

Phorum.JSON.convert = function(params, result)
{
    switch(params.constructor) {
        case Number:
            result = isFinite(params) ? String(params) : 'null';
            break;
        case Boolean:
            result = String(params);
            break;
        case Date:
            result = concat(
                '"',
                params.getFullYear(), '-',
                Phorum.JSON.common.d(params.getMonth() + 1), '-',
                Phorum.JSON.common.d(params.getDate()), 'T',
                Phorum.JSON.common.d(params.getHours()), ':',
                Phorum.JSON.common.d(params.getMinutes()), ':',
                Phorum.JSON.common.d(params.getSeconds()),
                '"'
            );
            break;
        case String:
            if(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(params)){
                result = new Date;
                result.setHours(Phorum.JSON.common.i(params, 11, 2));
                result.setMinutes(Phorum.JSON.common.i(params, 14, 2));
                result.setSeconds(Phorum.JSON.common.i(params, 17, 2));
                result.setMonth(Phorum.JSON.common.i(params, 5, 2) - 1);
                result.setDate(Phorum.JSON.common.i(params, 9, 2));
                result.setFullYear(Phorum.JSON.common.i(params, 0, 4));
            };
            break;
        default:
            var n, tmp = [];
            if(result) {
                for(n in params) result[n] = params[n];
            } else {
                for(n in params) {
                    if(params.hasOwnProperty(n) && !!(result = Phorum.JSON.encode(params[n])))
                        tmp.push(Phorum.JSON.encode(n).concat(':', result));
                };
                result = '{'.concat(tmp.join(','), '}');
            };
            break;
    };
    return result;
};

Phorum.JSON.encode = function(params)
{
    var result = '';

    if(params === null)
    {
        result = 'null';
    }
    else if(!{'function':1,'undefined':1,'unknown':1}[typeof(params)])
    {
        switch(params.constructor)
        {
            case Array:
                for(var i = 0, j = params.length, tmp = []; i < j; i++) {
                    if(!!(result = Phorum.JSON.encode(params[i])))
                        tmp.push(result);
                };
                result = '['.concat(tmp.join(','), ']');
                break;

            case String:
                result = '"'.concat(params.replace(
                        /(\x5c|\x2F|\x22|[\x0c-\x0d]|[\x08-\x0a])/g, Phorum.JSON.common.s
                    ).replace(
                        /([\x00-\x07]|\x0b|[\x0e-\x1f])/g, Phorum.JSON.common.u
                    ), '"');
                break;

            default:
                result = Phorum.JSON.convert(params);
                break;
        };
    };
    return result;
};

Phorum.JSON.decode = function(json)
{
    var res = JSON.parse(json);
    if (res === undefined) {
        throw new SyntaxError('The Phorum JSON data cannot be parsed');
    }
    return res;
};



/* Added by module "editor_tools", file "mods/editor_tools/editor_tools.js" */
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// Copyright (C) 2010  Phorum Development Team                               //
// http://www.phorum.org                                                     //
//                                                                           //
// This program is free software. You can redistribute it and/or modify      //
// it under the terms of either the current Phorum License (viewable at      //
// phorum.org) or the Phorum License that was distributed with this file     //
//                                                                           //
// This program is distributed in the hope that it will be useful,           //
// but WITHOUT ANY WARRANTY, without even the implied warranty of            //
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                      //
//                                                                           //
// You should have received a copy of the Phorum License                     //
// along with this program.                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// Javascript code for the Phorum editor_tools module.

// Valid object ids for textarea objects to handle. The first object
// that can be matched will be use as the object to work with.
// This is done to arrange for backward compatibility between
// Phorum versions.
var editor_tools_textarea_ids = new Array(
    'phorum_textarea',  // Phorum 5.1
    'body',             // Phorum 5.2
    'message'           // PM interface
);

// Valid object ids for subject text field objects to handle.
var editor_tools_subject_ids = new Array(
    'phorum_subject',   // Phorum 5.1
    'subject'           // Phorum 5.2
);

// Storage for language translation strings from the Phorum language system.
var editor_tools_lang = new Array();

// Some variables for storing objects that we need globally.
var editor_tools_textarea_obj = null;
var editor_tools_subject_obj = null;
var editor_tools_help_picker_obj = null;

// A variable for storing the current selection range of the 
// textarea. Needed for working around an MSIE problem.
var editor_tools_textarea_range = null;

// A variable for storing all popup objects that we have, so we
// can hide them all at once.
var editor_tools_popup_objects = new Array();

// Storage for the tools that have to be added to the editor tools panel.
// The array value contains the following fields:
//
// 1) the id for the tool (must be unique)
// 2) a description to use as the tooltip title for the button
// 3) the icon image to display as a button.
// 4) the javascript action to run when the user clicks the button
// 5) optional: the width of the icon image
// 6) optional: the height of the icon image (presumed 20px by default)
//
// This array will be filled from PHP-generated javascript.
var editor_tools = new Array();

// Storage for help chapters that must be put under the editor tools
// help button. The array value contains the following fields:
//
// 1) a description that will be used as the clickable link text.
// 2) the url for the help page (absolute or relative to the Phorum dir).
//
// This array will be filled from PHP-generated javascript.
var editor_tools_help_chapters = new Array();

// The dimensions of the help window.
var editor_tools_help_width = '400px';
var editor_tools_help_height = '400px';

// The default height for our icons.
// This one is filled from PHP-generated javascript.
var editor_tools_default_iconheight;

// A simple browser check. We need to know the browser version, because
// the color picker won't work on at least MacOS MSIE 5.
var OLD_MSIE =
    navigator.userAgent.indexOf('MSIE')>=0 &&
    navigator.appVersion.replace(/.*MSIE (\d\.\d).*/g,'$1')/1 < 6;

// ----------------------------------------------------------------------
// Uitilty functions
// ----------------------------------------------------------------------

// Find the Phorum textarea object and return it. In case of
// problems, null will be returned.
function editor_tools_get_textarea()
{
    if (editor_tools_textarea_obj != null) {
        return editor_tools_textarea_obj;
    }

    for (var i=0; editor_tools_textarea_ids[i]; i++) {
        editor_tools_textarea_obj =
            document.getElementById(editor_tools_textarea_ids[i]);
        if (editor_tools_textarea_obj) break;
    }

    if (! editor_tools_textarea_obj) {
        alert('editor_tools.js library reports: ' +
              'no textarea found on the current page.');
        return null;
    }

    return editor_tools_textarea_obj;
}

// Find the Phorum subject field object and return it. In case of
// problems, null will be returned.
function editor_tools_get_subjectfield()
{
    if (editor_tools_subject_obj != null) {
        return editor_tools_subject_obj;
    }

    for (var i=0; editor_tools_subject_ids[i]; i++) {
        editor_tools_subject_obj =
            document.getElementById(editor_tools_subject_ids[i]);
        if (editor_tools_subject_obj) break;
    }

    if (! editor_tools_subject_obj) {
        return null;
    }

    return editor_tools_subject_obj;
}

// Return a translated string, based on the Phorum language system.
function editor_tools_translate(str)
{
    if (editor_tools_lang[str]) {
        return editor_tools_lang[str];
    } else {
        return str;
    }
}

// Strip whitespace from the start and end of a string.
function editor_tools_strip_whitespace(str, return_stripped)
{
    var strip_pre = '';
    var strip_post = '';

    // Strip whitespace from end of string.
    for (;;) {
        var lastchar = str.substring(str.length-1, str.length);
        if (lastchar == ' '  || lastchar == '\r' ||
            lastchar == '\n' || lastchar == '\t') {
            strip_post = lastchar + strip_post;

            str = str.substring(0, str.length-1);
        } else {
            break;
        }
    }

    // Strip whitespace from start of string.
    for (;;) {
        var firstchar = str.substring(0,1);
        if (firstchar == ' '  || firstchar == '\r' ||
            firstchar == '\n' || firstchar == '\t') {
            strip_pre += firstchar;
            str = str.substring(1);
        } else {
            break;
        }
    }

    if (return_stripped) {
        return new Array(str, strip_pre, strip_post);
    } else {
        return str;
    }
} 

// Close all popup windows and move the focus to the textarea.
function editor_tools_focus_textarea()
{
    var textarea_obj = editor_tools_get_textarea();
    if (textarea_obj == null) return;
    editor_tools_hide_all_popups();
    textarea_obj.focus();
}

// Close all popup windows and move the focus to the subject field.
function editor_tools_focus_subjectfield()
{
    var subjectfield_obj = editor_tools_get_subjectfield();
    if (subjectfield_obj == null) return;
    editor_tools_hide_all_popups();
    subjectfield_obj.focus();
}

// ----------------------------------------------------------------------
// Construction of the editor tools
// ----------------------------------------------------------------------

// Add the editor tools panel to the page.
function editor_tools_construct()
{
    var textarea_obj;
    var div_obj;
    var parent_obj;
    var a_obj;
    var img_obj;

    // If the browser does not support document.getElementById,
    // then the javascript code won't run. Do not display the
    // editor tools at all in that case.
    if (! document.getElementById) return;

    // No editor tools selected to display? Then we're done.
    if (editor_tools.length == 0) return;

    // Find the textarea and subject field object.
    textarea_obj = editor_tools_get_textarea();
    if (textarea_obj == null) return; // we consider this fatal.
    var subjectfield_obj = editor_tools_get_subjectfield();

    // Insert a <div> for containing the buttons, just before the textarea,
    // unless there is already an object with id "editor-tools". In that
    // case, the existing object is used instead.
    div_obj = document.getElementById('editor-tools');
    if (! div_obj) {
        parent_obj = textarea_obj.parentNode;
        div_obj = document.createElement('div');
        div_obj.id = 'editor-tools';
        parent_obj.insertBefore(div_obj, textarea_obj);
    }

    // Add the buttons to the new <div> for the editor tools.
    for (var i = 0; i < editor_tools.length; i++)
    {
        var toolinfo    = editor_tools[i];
        var tool        = toolinfo[0];
        var description = toolinfo[1];
        var icon        = toolinfo[2];
        var jsaction    = toolinfo[3];
        var iwidth      = toolinfo[4];
        var iheight     = toolinfo[5];
        var target      = toolinfo[6];

        // Do not use the color picker on MSIE 5. I tested this on a
        // Macintosh OS9 system and the color picker about hung MSIE.
        if (tool == 'color' && OLD_MSIE) continue;

        a_obj = document.createElement('a');
        a_obj.id = 'editor-tools-a-' + tool;
        a_obj.href = 'javascript:' + jsaction;

        img_obj = document.createElement('img');
        img_obj.id = 'editor-tools-img-' + tool;
        img_obj.className = 'editor-tools-button';
        img_obj.src = icon;
        img_obj.width = iwidth;
        img_obj.height = iheight;
        img_obj.style.padding = '2px';
        img_obj.alt = description;
        img_obj.title = description;

        // Skip over the editor tool buttons in the first tabbing run.
        // This makes it a lot quicker for the user to jump from the
        // subject field to the message body textarea when writing
        // a message.
        $PJ(a_obj).attr('tabindex', 1);
        $PJ(img_obj).attr('tabindex', 1);

        // If an icon is added that is less high than our default icon
        // height, we try to make the button the same height as the
        // others by adding some dynamic padding to it.
        if (iheight < editor_tools_default_iconheight) {
            var fill = editor_tools_default_iconheight - iheight;
            var addbottom = Math.round(fill / 2);
            var addtop = fill - addbottom;
            img_obj.style.paddingTop = (addtop + 2) + 'px';
            img_obj.style.paddingBottom = (addbottom + 2) + 'px';
        }
        a_obj.appendChild(img_obj);

        // Add the button to the page.
        // target = subject is a feature that was added for supporting
        // the subjectsmiley tool. This one is added to the subject field
        // instead of the textarea. 
        if (target == 'subject') {
            // Find the subject text field. If we can't find one,
            // then simply ignore this tool.
            if (subjectfield_obj) {
                img_obj.style.verticalAlign = 'top';
                var parent = subjectfield_obj.parentNode;
                var sibling = subjectfield_obj.nextSibling;
                parent.insertBefore(a_obj, sibling);
            }
        } else {
            div_obj.appendChild(a_obj);
        }
    }

    // Hide any open popup when the user clicks the textarea or subject field.
    textarea_obj.onclick = function() {
        editor_tools_hide_all_popups();
    };
    if (subjectfield_obj) {
        subjectfield_obj.onclick = function() {
            editor_tools_hide_all_popups();
        }
    }
}

// ----------------------------------------------------------------------
// Popup window utilities
// ----------------------------------------------------------------------

// Create a popup window.
function editor_tools_construct_popup(create_id, anchor)
{
    // Create the outer div for the popup window.
    var popup_obj = document.createElement('div');
    popup_obj.id = create_id;
    popup_obj.className = 'editor-tools-popup';
    popup_obj.style.display = 'none';
    document.body.appendChild(popup_obj);

    popup_obj._anchor = anchor;

    // Create the inner content div.
    var content_obj = document.createElement('div');
    content_obj.id = create_id + '-content';
    popup_obj.appendChild(content_obj);

    return new Array(popup_obj, content_obj);
}

// Toggle a popup window.
function editor_tools_toggle_popup(popup_obj, button_obj, width, leftoffset)
{
    // Determine where to show the popup on screen.
    var $button_obj = $PJ(button_obj);
    var pos  = $button_obj.offset();
    var top  = pos.top + 2 + $button_obj.outerHeight();
    var left = pos.left;

    if (leftoffset) left -= leftoffset;
    if (width) popup_obj.style.width = width;

    // Move the popup window to the right place.
    if (popup_obj._anchor == 'r')
    {
        // Determine the screen width.
        var scrwidth = null;
        if (document.documentElement.clientWidth) {
            // Firefox screen width.
            scrwidth = document.documentElement.clientWidth;
        } else {
            scrwidth = document.body.clientWidth;
            // -16 for scrollbar that is counted in in some browsers.
            if (document.getElementById && !document.all) {
                scrwidth -= 16;
            }
        }

        var right = scrwidth - left - button_obj.offsetWidth;

        popup_obj.style.right = right + 'px';
        popup_obj.style.top = top + 'px';
    } else {
        popup_obj.style.left = left + 'px';
        popup_obj.style.top = top + 'px';
    }

    // Toggle the popup window's visibility.
    if (popup_obj.style.display == 'none') {
        editor_tools_hide_all_popups();
        popup_obj.style.display = 'block';
    } else {
        popup_obj.style.display = 'none';
        editor_tools_focus_textarea();
    }
}

// Register an object as a popup, so editor_tools_hide_all_popups() 
// can hide it.
function editor_tools_register_popup_object(object)
{
    if (! object) return;
    editor_tools_popup_objects[editor_tools_popup_objects.length] = object;
}

// Hide all objects that were registered as a popup.
function editor_tools_hide_all_popups()
{
    for (var i = 0; i < editor_tools_popup_objects.length; i++) {
        var object = editor_tools_popup_objects[i];
        object.style.display = 'none';
    }
}

// Save the selection range of the textarea. This is needed because
// sometimes clicking in a popup can clear the selection in MSIE.
function editor_tools_store_range()
{
    var ta = editor_tools_get_textarea();
    if (ta == null || ta.setSelectionRange || ! document.selection) return;
    ta.focus();
    editor_tools_textarea_range = document.selection.createRange();
}

// Restored a saved textarea selection range.
function editor_tools_restore_range()
{
    if (editor_tools_textarea_range != null)
    {
        editor_tools_textarea_range.select();
        editor_tools_textarea_range = null;
    }
}

// ----------------------------------------------------------------------
// Textarea manipulation
// ----------------------------------------------------------------------

// Add tags to the textarea. If some text is selected, then place the
// tags around the selected text. If no text is selected and a prompt_str
// is provided, then prompt the user for the data to place inside
// the tags.
function editor_tools_add_tags(pre, post, target, prompt_str)
{
    var text;
    var pretext;
    var posttext;
    var range;
    var ta = target ? target : editor_tools_get_textarea();
    if (ta == null) return;

    // Store the current scroll offset, so we can restore it after
    // adding the tags to its contents.
    var offset = ta.scrollTop;

    if (ta.setSelectionRange)
    {
        // Get the currently selected text.
        pretext = ta.value.substring(0, ta.selectionStart);
        text = ta.value.substring(ta.selectionStart, ta.selectionEnd);
        posttext = ta.value.substring(ta.selectionEnd, ta.value.length);

        // Prompt for input if no text was selected and a prompt is set.
        if (text == '' && prompt_str) {
            text = prompt(prompt_str, '');
            if (text == null) return;
        }

        // Strip whitespace from text selection and move it to the
        // pre- and post.
        var res = editor_tools_strip_whitespace(text, true);
        text = res[0];
        pre = res[1] + pre;
        post = post + res[2];

        ta.value = pretext + pre + text + post + posttext;

        // Reselect the selected text.
        var cursorpos1 = pretext.length + pre.length;
        var cursorpos2 = cursorpos1 + text.length;
        ta.setSelectionRange(cursorpos1, cursorpos2);
        ta.focus();
    }
    else if (document.selection) /* MSIE support */
    {
        // Get the currently selected text.
        ta.focus();
        range = document.selection.createRange();

        // Fumbling to work around newline selections at the end of
        // the text selection. MSIE does not include them in the
        // range.text, but it does replace them when setting range.text
        // to a new value :-/
        var virtlen = range.text.length;
        if (virtlen > 0) {
            while (range.text.length == virtlen) {
                range.moveEnd('character', -1);
            }
            range.moveEnd('character', +1);
        }

        // Prompt for input if no text was selected and a prompt is set.
        text = range.text;
        if (text == '' && prompt_str) {
            text = prompt(prompt_str, '');
            if (text == null) return;
        }

        // Strip whitespace from text selection and move it to the
        // pre- and post.
        var res = editor_tools_strip_whitespace(text, true);
        text = res[0];
        pre = res[1] + pre;
        post = post + res[2];

        // Add pre and post to the text.
        range.text = pre + text + post;

        // Reselect the selected text. Another MSIE anomaly has to be
        // taken care of here. MSIE will include carriage returns
        // in the text.length, but it does not take them into account
        // when using selection range moving methods :-/
        // By setting the range.text before, the cursor is now after
        // the replaced code, so we will move the start and the end
        // back in the text.
        var mvstart = post.length + text.length -
                      ((text + post).split('\r').length - 1);
        var mvend   = post.length +
                      (post.split('\r').length - 1);
        range.moveStart('character', -mvstart);
        range.moveEnd('character', -mvend);
        range.select();
    }
    else /* Support for really limited browsers, e.g. MSIE5 on MacOS */
    {
        ta.value = ta.value + pre + post;
    }

    ta.scrollTop = offset;
}

// ----------------------------------------------------------------------
// Tool: Help
// ----------------------------------------------------------------------

function editor_tools_handle_help()
{
    var c = editor_tools_help_chapters;

    // Shouldn't happen.
    if (c.length == 0) {
        alert('No help chapters available');
        return;
    }

    // Exactly one help chapter available. Immediately open the chapter.
    if (c.length == 1) {
        editor_tools_handle_help_select(c[0][1]);
        return;
    }

    // Multiple chapters available. Show a help picker menu with some
    // choices. Create the help picker on first access.
    if (!editor_tools_help_picker_obj)
    {
        // Create a new popup.
        var popup = editor_tools_construct_popup('editor-tools-help-picker','r');
        editor_tools_help_picker_obj = popup[0];
        var content_obj = popup[1];

        // Populate the new popup.
        for (var i = 0; i < editor_tools_help_chapters.length; i++) 
        {
            var helpinfo = editor_tools_help_chapters[i];
            var a_obj = document.createElement('a');
            a_obj.href = 'javascript:editor_tools_handle_help_select("' + helpinfo[1] + '")';
            a_obj.innerHTML = helpinfo[0];
            content_obj.appendChild(a_obj);
            content_obj.appendChild(document.createElement('br'));
        }

        // Register the popup with the editor tools.
        editor_tools_register_popup_object(editor_tools_help_picker_obj);
    }

    // Display the popup.
    var button_obj = document.getElementById('editor-tools-img-help');
    editor_tools_toggle_popup(editor_tools_help_picker_obj, button_obj);
}

function editor_tools_handle_help_select(url)
{
    var help_window = window.open(
        url,
        'editor_tools_help',
        'resizable=yes,' +
        'menubar=no,' +
        'directories=no,' +
        'scrollbars=yes,' +
        'toolbar=no,' +
        'status=no,' +
        'width=' + editor_tools_help_width + ',' +
        'height=' + editor_tools_help_height
    );

    editor_tools_focus_textarea();
    help_window.focus();
}



/* Added by module "smileys", file "mods/smileys/smileys_editor_tools.js.php" */
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// Copyright (C) 2010  Phorum Development Team                               //
// http://www.phorum.org                                                     //
//                                                                           //
// This program is free software. You can redistribute it and/or modify      //
// it under the terms of either the current Phorum License (viewable at      //
// phorum.org) or the Phorum License that was distributed with this file     //
//                                                                           //
// This program is distributed in the hope that it will be useful,           //
// but WITHOUT ANY WARRANTY, without even the implied warranty of            //
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                      //
//                                                                           //
// You should have received a copy of the Phorum License                     //
// along with this program.                                                  //
///////////////////////////////////////////////////////////////////////////////

// Javascript code for Smileys support in the Phorum editor_tools module.

// Some variables for storing objects that we need globally.
var editor_tools_smiley_picker_obj = null;
var editor_tools_subjectsmiley_picker_obj = null;

// Smileys for the smiley picker.
// *_s = search strings (smileys)
// *_r = replace strings (image urls)
var editor_tools_smileys = new Array();
var editor_tools_smileys_r = new Array();
var editor_tools_smileys_a = new Array();
var editor_tools_subjectsmileys = new Array();
var editor_tools_subjectsmileys_r = new Array();
var editor_tools_subjectsmileys_a = new Array();

// The width and offset to the left for the smiley picker popup menus.
// These values can be tweaked from the smiley module settings page.
var editor_tools_smileys_popupwidth = '150px';
var editor_tools_smileys_popupoffset = 0;
var editor_tools_subjectsmileys_popupwidth = '150px';
var editor_tools_subjectsmileys_popupoffset = 0;

// The available smileys.
editor_tools_smileys[0] = '(:P)';
editor_tools_smileys_r[0] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smiley25.gif';
editor_tools_smileys_a[0] = 'spinning smiley sticking its tongue out';
editor_tools_smileys[1] = '(td)';
editor_tools_smileys_r[1] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smiley23.gif';
editor_tools_smileys_a[1] = 'thumbs up';
editor_tools_smileys[2] = '(tu)';
editor_tools_smileys_r[2] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smiley24.gif';
editor_tools_smileys_a[2] = 'thumbs down';
editor_tools_smileys[3] = 'B-)-';
editor_tools_smileys_r[3] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie7.gif';
editor_tools_smileys_a[3] = 'smoking smiley';
editor_tools_smileys[4] = 'X:-(';
editor_tools_smileys_r[4] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/hot.gif';
editor_tools_smileys_a[4] = 'hot smiley';
editor_tools_smileys[5] = '(:D';
editor_tools_smileys_r[5] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smiley12.gif';
editor_tools_smileys_a[5] = 'smiling bouncing smiley';
editor_tools_smileys[6] = '8-)';
editor_tools_smileys_r[6] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie8.gif';
editor_tools_smileys_a[6] = 'eye rolling smiley';
editor_tools_smileys[7] = ':)o';
editor_tools_smileys_r[7] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smiley16.gif';
editor_tools_smileys_a[7] = 'drinking smiley';
editor_tools_smileys[8] = ':-(';
editor_tools_smileys_r[8] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie2.gif';
editor_tools_smileys_a[8] = 'sad smiley';
editor_tools_smileys[9] = ':-)';
editor_tools_smileys_r[9] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie1.gif';
editor_tools_smileys_a[9] = 'smiling smiley';
editor_tools_smileys[10] = ':-?';
editor_tools_smileys_r[10] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smiley17.gif';
editor_tools_smileys_a[10] = 'moody smiley';
editor_tools_smileys[11] = ':-D';
editor_tools_smileys_r[11] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie5.gif';
editor_tools_smileys_a[11] = 'grinning smiley';
editor_tools_smileys[12] = ':-P';
editor_tools_smileys_r[12] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie6.gif';
editor_tools_smileys_a[12] = 'tongue sticking out smiley';
editor_tools_smileys[13] = ':-S';
editor_tools_smileys_r[13] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie11.gif';
editor_tools_smileys_a[13] = 'confused smiley';
editor_tools_smileys[14] = ':-X';
editor_tools_smileys_r[14] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie9.gif';
editor_tools_smileys_a[14] = 'angry smiley';
editor_tools_smileys[15] = ':-o';
editor_tools_smileys_r[15] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie4.gif';
editor_tools_smileys_a[15] = 'yawning smiley';
editor_tools_smileys[16] = '::o';
editor_tools_smileys_r[16] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie10.gif';
editor_tools_smileys_a[16] = 'eye popping smiley';
editor_tools_smileys[17] = ';-)';
editor_tools_smileys_r[17] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/smilie3.gif';
editor_tools_smileys_a[17] = 'winking smiley';
editor_tools_smileys[18] = 'B-)';
editor_tools_smileys_r[18] = 'http://www.les-mathematiques.net/phorum/./mods/smileys/images/cool.gif';
editor_tools_smileys_a[18] = 'cool smiley';

// ----------------------------------------------------------------------
// Tool: smiley
// ----------------------------------------------------------------------

function editor_tools_handle_smiley()
{
    // Create the smiley picker on first access.
    if (!editor_tools_smiley_picker_obj)
    {
        // Create a new popup.
        var popup = editor_tools_construct_popup('editor-tools-smiley-picker','r');
        editor_tools_smiley_picker_obj = popup[0];
        var content_obj = popup[1];

        editor_tools_smiley_picker_obj.style.width = editor_tools_smileys_popupwidth;

        // Populate the new popup.
        for (var i = 0; i < editor_tools_smileys.length; i++)
        {
            var s = editor_tools_smileys[i];
            var r = editor_tools_smileys_r[i];
            var a = editor_tools_smileys_a[i];
            var a_obj = document.createElement('a');
            a_obj.href = 'javascript:editor_tools_handle_smiley_select("'+s+'")';
            var img_obj = document.createElement('img');
            img_obj.src = r;
            img_obj.title = a;
            img_obj.alt = a;
            a_obj.appendChild(img_obj);

            content_obj.appendChild(a_obj);
        }

        // Register the popup with the editor tools.
        editor_tools_register_popup_object(editor_tools_smiley_picker_obj);
    }

    // Display the popup.
    var button_obj = document.getElementById('editor-tools-img-smiley');
    editor_tools_toggle_popup(
        editor_tools_smiley_picker_obj,
        button_obj,
        editor_tools_smileys_popupwidth,
        editor_tools_smileys_popupoffset
    );
}

// Called by the smiley picker.
function editor_tools_handle_smiley_select(smiley)
{
    smiley = editor_tools_strip_whitespace(smiley);
    editor_tools_add_tags(smiley, '');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: subject smiley
// ----------------------------------------------------------------------

function editor_tools_handle_subjectsmiley()
{
    // Create the smiley picker on first access.
    if (!editor_tools_subjectsmiley_picker_obj)
    {
        // Create a new popup.
        var popup = editor_tools_construct_popup('editor-tools-subjectsmiley-picker','r');
        editor_tools_subjectsmiley_picker_obj = popup[0];
        var content_obj = popup[1];

        // Populate the new popup.
        for (var i = 0; i < editor_tools_subjectsmileys.length; i++)
        {
            var s = editor_tools_subjectsmileys[i];
            var r = editor_tools_subjectsmileys_r[i];
            var a = editor_tools_subjectsmileys_a[i];

            var a_obj = document.createElement('a');
            a_obj.href = 'javascript:editor_tools_handle_subjectsmiley_select("'+s+'")';
            var img_obj = document.createElement('img');
            img_obj.src = r;
            img_obj.alt = a;
            img_obj.title = a;
            a_obj.appendChild(img_obj);
            content_obj.appendChild(a_obj);
        }

        // Register the popup with the editor tools.
        editor_tools_register_popup_object(editor_tools_subjectsmiley_picker_obj);
    }

    // Display the popup.
    var button_obj = document.getElementById('editor-tools-img-subjectsmiley');
    editor_tools_toggle_popup(
        editor_tools_subjectsmiley_picker_obj,
        button_obj,
        editor_tools_subjectsmileys_popupwidth,
        editor_tools_subjectsmileys_popupoffset
    );
}

// Called by the subject smiley picker.
function editor_tools_handle_subjectsmiley_select(smiley)
{
    smiley = editor_tools_strip_whitespace(smiley);
    editor_tools_add_tags(smiley, '', editor_tools_subject_obj);
    editor_tools_focus_subjectfield();
}



/* Added by module "spamhurdles", file "mods/spamhurdles/spamhurdles.js" */
function spamhurdles_eval_javascript(data)
{
    var cursor = 0; var start = 1; var end = 1;
    while (cursor < data.length && start > 0 && end > 0) {
        start = data.indexOf('<script', cursor);
        end   = data.indexOf('</script', cursor);
        if (end > start && end > -1) {
            if (start > -1) {
                var res = data.substring(start, end);
                start = res.indexOf('>') + 1;
                res = res.substring(start);
                if (res.length != 0) {
                    eval(res);
                }
            }
            cursor = end + 1;
        }
    }
}

function spamhurdles_find_form(form_id)
{
    var field = document.getElementById('spamhurdles_'+form_id);
    if (!field || !field.form) return null;
    return field.form;
}


/* Added by module "spamhurdles", file "mods/spamhurdles/hurdles/javascript_signature.js" */
/**
 * This function is called by the javascript_signature spam hurdle for
 * md5 hashing a random key that was added to a form.
 */
function spamhurdle_javascript_signature(id)
{
    // Extract the signing key from the page. The signing key is
    // stored as the alt tag of an image.
    var image_id = 'javascript_signature_data_'+id;
    var image = document.getElementById(image_id);
    if (!image && !image.alt) return;
    var signkey = image.alt;

    // Create the MD5 hash for the signing key.
    var signature = hex_md5(signkey);

    // Create hidden form field on the fly for storing the signature.
    var fld = document.createElement('input');
    fld.type = 'hidden';
    fld.name = 'javascript_signature_'+id;
    fld.value = signature;
    image.parentNode.appendChild(fld);
}

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}


/* Added by module "spamhurdles", file "mods/spamhurdles/hurdles/block_quick_submit.js" */
function spamhurdles_block_quick_submit(form_id, seconds_left)
{
    var button = null;

    // Find the form that is protected by this hurdle.
    var f = spamhurdles_find_form(form_id);
    if (!f) return;

    // The button with name="finish" or name="post" is the submit button on
    // the message posting form.
    if (f.finish) {
        button = f.finish;
    }
    else if (f.post) {
        button = f.post;
    }
    // On other forms we check if there is only one submit button available.
    // If yes, then we use that button for implementing the count down.
    else
    {
        var buttons = f.getElementsByTagName('input');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].type === 'submit')
            {
                // If we found more than one button, then we are not sure
                // on what button to show the timeout.
                if (button) {
                    button = null;
                    break;
                }

                button = buttons[i];
            }
        }
    }

    // Return if we found no usable button.
    if (!button) return;

    // Display a count down on the button.
    button.orig_value = button.value;
    spamhurdles_block_quick_submit_countdown(button, seconds_left);
}

function spamhurdles_block_quick_submit_countdown(button, seconds_left)
{
    if (seconds_left <= 0) {
        button.value = button.orig_value;
        button.disabled = false;
    } else {
        button.value = button.orig_value + "(" + seconds_left + ")";
        button.disabled = true;
        setTimeout(function(){
            spamhurdles_block_quick_submit_countdown(button, --seconds_left);
        }, 1000);
    }
}



/* Added by module "jumpmenu", file "mods/jumpmenu/jumpmenu.js" */
var PhorumJumpMenu =
{
    'active'      : {},
    'visible'     : {},
    'menuspacing' : -1,
    'timer'       : null,

    'init': function()
    {
        // Make sure that events will not fire at unload time, because that
        // generates JavaScript warnings in Firefox about PhorumJumpMenu
        // that does not exist anymore at that time.
        var oldunload = window.onunload;
        window.onunload = function()
        {
            if (oldunload) oldunload();
            var root = document.getElementById('mod_jumpmenu_root');
            if (root) {
                root.onmouseover = null;
                root.onmouseout  = null;
            }
            var ahrefs = document.getElementsByTagName('a');
            for (var i=0; i<ahrefs.length; i++)
            {
                if (!ahrefs[i].rel) continue;
                var obj = ahrefs[i];

                if (obj.rel.indexOf('mod_jumpmenu_') == 0) {
                    obj.onmouseover = null;
                    obj.onmouseout  = null;
                }
            }
        }

        // Events for the root jumpmenu item.
        var r = document.getElementById('mod_jumpmenu_root');
        if (!r) return;
        r.onmouseover = function() {
            PhorumJumpMenu.stopCloseTimer();
            PhorumJumpMenu.openSubMenu(null);
        };
        r.onmouseout  = function() {
            PhorumJumpMenu.startCloseTimer();
        };

        // Events for the folders and forums.
        var ahrefs = document.getElementsByTagName('a');
        for (var i=0; i<ahrefs.length; i++)
        {
            if (!ahrefs[i].rel) continue;
            var obj = ahrefs[i];

            if (obj.rel == 'mod_jumpmenu_forum')
            {
                obj.onmouseover = function() {
                    PhorumJumpMenu.stopCloseTimer();
                    PhorumJumpMenu.openSubMenu(this);
                };
                obj.onmouseout  = function() {
                    PhorumJumpMenu.startCloseTimer();
                };
            }
            else if (obj.rel.substring(0,19) == 'mod_jumpmenu_folder')
            {
                var info = obj.rel.substring(20, obj.rel.length-1).split(',');
                obj.menu_id   = info[0];
                obj.parent_id = info[1];

                obj.onmouseover = function() {
                    PhorumJumpMenu.stopCloseTimer();
                    PhorumJumpMenu.openSubMenu(this);
                };
                obj.onmouseout  = function() {
                    PhorumJumpMenu.startCloseTimer();
                };
            }
        }
    },

    'hideAll': function()
    {
        for (var depth in PhorumJumpMenu.visible) {
            for (var idx in PhorumJumpMenu.visible[depth]) {
                var o = PhorumJumpMenu.visible[depth][idx];
                o.style.display = 'none';

                if (o.work_around_iframe) {
                    o.work_around_iframe.style.display = 'none';
                }
            }
        }

        PhorumJumpMenu.active = {};
        PhorumJumpMenu.visible = {};
    },

    'startCloseTimer': function()
    {
        if (PhorumJumpMenu.timer != null) {
            clearTimeout(PhorumJumpMenu.timer);
        }
        PhorumJumpMenu.timer = setTimeout(function() {
            PhorumJumpMenu.timer = null;
            PhorumJumpMenu.hideAll();
        }, 500);
    },

    'stopCloseTimer': function()
    {
        if (PhorumJumpMenu.timer != null) {
            clearTimeout(PhorumJumpMenu.timer);
            PhorumJumpMenu.timer = null;
        }
    },

    // Thanks to www.quirksmode.org for info on viewport properties:
    // http://www.quirksmode.org/viewport/compatibility.html
    'getScreenInfo': function()
    {
        var width, height;
        // All, except Explorer.
        if (self.innerHeight) {
            width  = self.innerWidth;
            height = self.innerHeight;
        }
        // Explorer 6 Strict Mode.
        else if (document.documentElement &&
                 document.documentElement.clientHeight) {
            width  = document.documentElement.clientWidth;
            height = document.documentElement.clientHeight;
        }
        // Other Explorers.
        else if (document.body) {
            width  = document.body.clientWidth;
            height = document.body.clientHeight;
        }

        // -16 for scrollbar that is counted in in some browsers.
        width  -= 16;
        height -= 16;

        var scroll_x, scroll_y;
        // All, except Explorer.
        if (self.pageYOffset) {
                scroll_x = self.pageXOffset;
                scroll_y = self.pageYOffset;
        }
        // Explorer 6 Strict.
        else if (document.documentElement && document.documentElement.scrollTop) {
                scroll_x = document.documentElement.scrollLeft;
                scroll_y = document.documentElement.scrollTop;
        }
        // All other Explorers.
        else if (document.body) {
                scroll_x = document.body.scrollLeft;
                scroll_y = document.body.scrollTop;
        }

        return {
            'width'     : width,
            'height'    : height,
            'scroll_x'  : scroll_x,
            'scroll_y'  : scroll_y,
            'visible_x' : width + scroll_x,
            'visible_y' : height + scroll_y
        };
    },

    'getStyle': function(obj, element)
    {
        if (obj.currentStyle) {
            return obj.currentStyle[element];
        } else if (window.getComputedStyle) {
            var s = document.defaultView.getComputedStyle(obj, null);
            return s.getPropertyValue(element);
        } else {
            return null;
        }
    },

    'getScreenPos': function(obj)
    {
        var top = left = 0;
        var rel_top = rel_left = null;

        do {
            top  += obj.offsetTop;
            left += obj.offsetLeft;
            if (obj && rel_top == null) {
                var pos = PhorumJumpMenu.getStyle(obj, 'position');
                if (pos == 'relative' || pos == 'absolute') {
                    rel_top  = top;
                    rel_left = left;
                }
            }
            obj = obj.offsetParent;
        } while (obj);

        if (rel_left == null) {
            rel_left = left;
            rel_top  = top;
        }

        return {
            'top'      : top,
            'left'     : left,
            'rel_left' : rel_left,
            'rel_top'  : rel_top
        };
    },

    'openSubMenu': function(menu)
    {
        // If the menu is a menu item, then find its parent menu.
        // This way, deeper submenus that are possible opened
        // will be collapsed.
        if (menu && menu.className.indexOf('mod_jumpmenu_forum') !== -1) {
            var n = menu.parentNode.id;
            if (n.indexOf('mod_jumpmenu_menu_content_') == 0) {
                var menu_id = n.substr(26);
                if (menu_id == 0) {
                    menu = null;
                } else {
                    var pid = 'mod_jumpmenu_item_' + menu_id;
                    var p = document.getElementById(pid);
                    if (p) menu = p;
                }
            }
        }

        // Find the parent menu, parent item and child menu.
        var menu_id   = menu == null ? 0 : menu.menu_id;
        var parent_id = menu == null ? null : menu.parent_id;
        var p_menu = menu_id == 0
              ? null
              : document.getElementById('mod_jumpmenu_menu_' + parent_id);
        var p_item = menu_id == 0
              ? document.getElementById('mod_jumpmenu_root')
              : document.getElementById('mod_jumpmenu_item_' + menu_id);
        var c_menu = document.getElementById('mod_jumpmenu_menu_' + menu_id);

        // If we did not find the required objects, then silently ignore
        // the problem and stop processing.
        if (!p_item || !c_menu) return;
        if (menu_id != 0 && !p_menu) return;

        // Do some dimension handling and storage the first time that the
        // menu is opened.
        if (!c_menu.jumpmenu_init_done)
        {
            // Without making the menu visible, we don't know the width/height
            // of the menu div, because those are only available after rendering
            // the menu HTML code. So for positioning the menu, we have a
            // chicken/egg problem to fix. I fix it by moving the egg out of
            // the visible screen area before making it visible.
            c_menu.style.top  = '-500px';
            c_menu.style.left = '-500px';
            c_menu.style.display = 'block';

            // This should put the menus on top at most pages.
            c_menu.style.zIndex = 1000;

            // force the widths for the <a href="..."> tags. this is needed to
            // make the links hoverable and clickable over the full menu width
            // in msie6 :(
            // the "var w" is used to prevent variable tag widths due to
            // accidental resizing of the menu while setting the tag widths
            // (i've seen that happening in opera).
            var ahrefs = c_menu.getElementsByTagName('a');
            var w = null;
            for (var i=0; i<ahrefs.length; i++) {
                var a = ahrefs[i];
                if (!w) w = a.offsetWidth;
                a.style.width = w;
            }

            // store the displaying dimensions in the div object.
            c_menu.jumpmenu_width  = c_menu.offsetWidth;
            c_menu.jumpmenu_height = c_menu.offsetHeight;

            // In MSIE, we have to fix the problem that windowed controls
            // like <select> will always be on top of <div>s. We can use
            // some special behavior of <iframe> for this. It's ugly but
            // the only way to make this work cleanly.
            // We do a check for MSIE here. It's no problem if other browsers
            // use a modified userAgent for some reason, triggering this code.
            // I only want to make sure that it is at least used in MSIE.
            if (navigator.userAgent && navigator.userAgent.indexOf('MSIE')>=0)
            {
                var i = document.createElement('iframe');
                i.scrolling      = 'no';
                i.frameborder    = '0';
                i.src            = 'javascript:false';
                i.style.border   = 'none';
                i.style.display  = 'block';
                i.style.left     = '0px';
                i.style.top      = '0px';
                i.style.width    = c_menu.jumpmenu_width + 'px';
                i.style.height   = c_menu.jumpmenu_height + 'px';
                i.style.position = 'absolute';
                i.style.zIndex  = c_menu.style.zIndex - 1;

                c_menu.parentNode.appendChild(i);

                c_menu.work_around_iframe = i;
            }

            c_menu.jumpmenu_init_done = 1;
            c_menu.style.display = 'none';
        }

        // keep track of the menu depth and menu drawing direction.
        // first level menu.
        if (menu_id == 0)
        {
            c_menu.depth = 1;

            // at the first level, we look at the main menu item. if that one
            // uses rel="mod_jumpmenu_left", then the direction of the whole
            // menu structure will be left. by default, this direction is right.
            c_menu.direction = 'right';
            if (p_item.rel && p_item.rel == 'mod_jumpmenu_left') {
                c_menu.direction = 'left';
            }
        }
        // second level and deeper.
        else
        {
            c_menu.depth = p_menu.depth + 1;

            // inherit the parent's menu direction.
            c_menu.direction = p_menu.direction;
        }

        // determine the screen dimensions.
        var scr = PhorumJumpMenu.getScreenInfo();

        // determine the top-left of the parent menu item.
        var p_item_pos = PhorumJumpMenu.getScreenPos(p_item);
        var top  = p_item_pos.rel_top;
        var left = p_item_pos.rel_left;

        // determine the location of the child menu.
        // the first level menu is placed directly beneath the main menu object.
        if (menu_id == 0)
        {
            top  = top + p_item.offsetHeight;

            if (c_menu.direction == 'left')
            {
                left = left - (c_menu.jumpmenu_width - p_item.offsetWidth);
                if (left < scr.scroll_x) left = scr.scroll_x + 2;
            }
            else
            {
                left = left;
                if ((left + c_menu.jumpmenu_width) > scr.width) {
                    left = scr.width - c_menu.jumpmenu_width - 2;
                }
            }
        }
        // second level and deeper levels are handled as standard menu popups
        // (placed to the right or left of the selected item).
        else
        {
            var dir = c_menu.direction;

            var left_pos =
                left // the left side of the parent menu item
                - PhorumJumpMenu.menuspacing // handle menu spacing
                - p_item.parentNode.offsetLeft // adjustment for padding;
                - c_menu.jumpmenu_width; // add child menu width;

            var right_pos =
                left // the left side of the parent menu item
                + PhorumJumpMenu.menuspacing  // handle menu spacing
                - p_item.parentNode.offsetLeft // adjustment for padding;
                + p_menu.offsetWidth; // add parent menu width

            if (dir == 'left') {
                if (left_pos < scr.scroll_x) {
                    dir = 'right';
                } else {
                    left = left_pos;
                }
            }

            if (dir == 'right') {
                if ((right_pos + c_menu.jumpmenu_width) > scr.visible_x) {
                    left = left_pos;
                } else {
                    left = right_pos;
                }
            }
        }

        // take extra vertical space into account for adjusting for
        // padding of the menu div.
        if (menu_id) {
            top -= p_item.parentNode.offsetTop;
        }

        // move the menu up if needed.
        if ((top + c_menu.jumpmenu_height) > scr.visible_y) {
            top = scr.visible_y - c_menu.jumpmenu_height - 2;
            if (top < scr.scroll_y) top = scr.scroll_y + 2;
        }

        // move the menu into position and make it visible.
        c_menu.style.top  = top  + 'px';
        c_menu.style.left = left + 'px';
        c_menu.style.display = 'block';

        // If we have an iframe for working around an MSIE problem, then
        // place that one as well. This one needs different placement in
        // case the menu is running within some absolute or relative div.
        if (c_menu.work_around_iframe) {
            i = c_menu.work_around_iframe;
            i.style.top  = top + 'px';
            i.style.left = left + 'px';
            i.style.display = 'block';
        }

        // keep track of the active menu for the current menu level.
        PhorumJumpMenu.active[c_menu.depth] = c_menu;

        // cleanup the menus that should not be visible anymore.
        for (var depth in PhorumJumpMenu.visible) {
            for (var idx in PhorumJumpMenu.visible[depth]) {
                var o = PhorumJumpMenu.visible[depth][idx];
                if (depth > c_menu.depth ||
                    o.id != PhorumJumpMenu.active[depth].id) {
                    o.style.display = 'none';

                    if (o.work_around_iframe) {
                        o.work_around_iframe.style.display = 'none';
                    }
                }
            }
        }

        // keep track of visible menus.
        PhorumJumpMenu.visible[c_menu.depth] = {};
        PhorumJumpMenu.visible[c_menu.depth][c_menu.id] = c_menu;
    }

};


/* Added by module "embed_images", file "mods/embed_images/embed_images.js" */
function mod_embed_images_loadimage(
    viewer_id, thumbnail_url, fullimage_url, ajax_url, target_url,
    message_id, max_w, max_h, loading_txt, rescheduled)
{
    var container = document.getElementById('imagediv_'+viewer_id);
    if (!container) return;

    // If the image for the viewer id is already on the page, then we are
    // handling a cached thumbnail for which no Ajax magic is required,
    // but which is already loaded in the page. We'll only use this function
    // for setting up a full size image viewer.
    var image = document.getElementById('image_'+viewer_id);
    if (image)
    {
        // If a function was loaded for a viewer to initialize the
        // viewer, then hand over the image data to that function.
        // Don't do this in case we have a target_url.
        if (window.mod_embed_images_initviewer && !target_url) {
            var link  = document.getElementById('link_'+viewer_id);
            mod_embed_images_initviewer(
                container, image, link, fullimage_url, message_id
            );
        }

        return;
    }

    if (!rescheduled)
    {
        // We use a bit of a strange hack here, by checking for readyState.
        // This is not availble in all browsers. That's no problem though.
        // We mainly want MSIE to check it and to let it postpone image
        // loading till after the page is fully loaded. When doing things
        // earlier in MSIE from script code that is not a direct descendant
        // of <body>, we might get "operation aborted" errors.
        if (document.readyState &&
            document.readyState != 'loaded' &&
            document.readyState != 'complete' &&
            window.attachEvent &&
            !window.opera) {
          window.attachEvent('onload', function() {
              mod_embed_images_loadimage(
                  viewer_id, thumbnail_url, fullimage_url,
                  ajax_url, target_url, message_id,
                  max_w, max_h, loading_txt, true
              );
          });
          return;
        }

        // Display a "Loading ..." message to the user.
        container.innerHTML =
            '<div class="mod_embed_images_loading">' +
            loading_txt +
            '<\/div>';
    }

    // Create the XMLHttpRequest object that we can use to send an
    // Ajax request to the server.
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versions = [
            "MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0",
            "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp",
            "Microsoft.XMLHttp"
        ];
        for (var i=0; i < versions.length; i++)
          try { xhr = new ActiveXObject(versions[i]); } catch (e) { }
    }

    // No XMLHttpRequest object found? Fallback to a simpler way of
    // displaying the thumbnail image. This way we won't have
    // loading or error feedback and full size viewer support,
    // but at least we do show the image. This should't happen for
    // modern browsers.
    if (!xhr)
    {
        target.innerHTML =
            (target_url ? '<a href="'+target_url+'">' : '') +
            '<img id="image_'+viewer_id+'" src="'+thumbnail_url+'"/>' +
            (target_url ? '<\/a>' : '');
        return;
    }

    // Setup the XMLHttpRequest object for the request.
    xhr.open("get", ajax_url, true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var res = xhr.responseText;

            // An "OK <w>x<h> <scw>x<sch>" message was returned.
            if (res.substr(0,2) == 'OK')
            {
                // Parse the respones message.
                // I know... a bit old school parsing.
                var dim   = res.substr(3);
                var xpos  = dim.indexOf('x');
                var spos  = dim.indexOf(' ');
                var origw = dim.substr(0,xpos);
                var origh = dim.substr(xpos+1, spos-xpos-1);
                    dim   = dim.substr(spos+1);
                    xpos  = dim.indexOf('x');
                var w     = dim.substr(0,xpos);
                var h     = dim.substr(xpos+1);

                var origsize  = origw+"x"+origh;
                var scalesize = w+"x"+h;
                var is_scaled = (origsize != scalesize);

                // Opera does not seem to load images that are not visible :(
                // So for those, we never get an onload event. Therefore,
                // we make the image 0x0 pixels and resize it to the real
                // size after loading.
                var html =
                    (target_url ? '<a href="'+target_url+'">' : '') +
                    '<img style="width:0px;height:0px" ' +
                    'id="image_'+viewer_id+'" ' +
                    'onload="' +
                    'mod_embed_images_image_loaded(this,'+w+','+h+')" ' +
                    'src="'+thumbnail_url+'"/>' +
                    (target_url ? '<\/a>' : '');

                container.innerHTML += html;

                // Go to extended viewer mode if the image was scaled down
                // or if a target URL was provided.
                if (is_scaled || target_url)
                {
                    var info = document.getElementById('info_'+viewer_id);
                    if (info) info.style.display = 'block';

                    var div = document.getElementById('div_'+viewer_id);
                    if (div) div.className = 'mod_embed_images_extended';
                }

                // If a function was loaded for a viewer to initialize the
                // viewer, then hand over the image data to that function.
                if (window.mod_embed_images_initviewer && !target_url) {
                    var image = document.getElementById('image_'+viewer_id);
                    var link  = document.getElementById('link_'+viewer_id);
                    mod_embed_images_initviewer(
                        container, image, link, fullimage_url,
                        message_id
                    );
                }
            }

            // Some error message was returned. Show the error to the user.
            else container.innerHTML =
                '<div class="mod_embed_images_error">' +
                '<strong>Image error<\/strong><br\/>' +
                res + '<br/>' +
                '<a href="' + fullimage_url + '">open image URL<\/a>' +
                '<\/div>';
        }
    }

    // Send the request to the server.
    xhr.send('');
}

function mod_embed_images_image_loaded(image, w, h)
{
    image.style.width = w+'px';
    image.style.height = h+'px';

    var container = image.parentNode;
    while (container.className != 'mod_embed_images_image') {
        container = container.parentNode;
        if (!container) return; // Should not happen.
    }

    container.style.width = image.width + 'px';
    container.parentNode.style.width = parseInt(image.width) + 'px';
    container.style.height = image.height + 'px';
    for (var i = 0; i < container.childNodes.length; i++) {
        if (container.childNodes[i].className == 'mod_embed_images_loading') {
            container.childNodes[i].style.display = 'none';
        }
    }
}



/* Added by module "embed_images/viewer:fancybox", file "mods/embed_images/viewers/fancybox/code/jquery.fancybox-1.3.4.pack.js" */
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
'"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
"function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
"image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);

/* Added by module "embed_images/viewer:fancybox", file "mods/embed_images/viewers/fancybox/viewer.js" */
// Settings for the FancyBox as used in Phorum. When other options are
// needed, then these can be overridden.
// For an overview of the possible settings, see http://fancybox.net/api
var phorum_fancybox_settings = {
    type               : 'image',
    titlePosition      : 'inside',
    autoScale          : true,
    margin             : 30,
    transitionIn       : 'elastic',
    transitionOut      : 'elastic',
    hideOnOverlayClick : true,
    hideOnContentClick : true
};

function mod_embed_images_initviewer(container, image, link, url, message_id)
{
    var a = document.createElement('a');
    a.href = url;
    a.rel = 'fancybox_' + message_id;
    container.appendChild(a);
    a.appendChild(image);
    $PJ(a).fancybox(phorum_fancybox_settings);

    if (link) {
        $PJ(link).fancybox(phorum_fancybox_settings);
    }
}



/* Added by module "bbcode", file "mods/bbcode/bbcode_editor_tools.js" */
///////////////////////////////////////////////////////////////////////////////
//                                                                           //
// Copyright (C) 2010  Phorum Development Team                               //
// http://www.phorum.org                                                     //
//                                                                           //
// This program is free software. You can redistribute it and/or modify      //
// it under the terms of either the current Phorum License (viewable at      //
// phorum.org) or the Phorum License that was distributed with this file     //
//                                                                           //
// This program is distributed in the hope that it will be useful,           //
// but WITHOUT ANY WARRANTY, without even the implied warranty of            //
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                      //
//                                                                           //
// You should have received a copy of the Phorum License                     //
// along with this program.                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

// Javascript code for BBcode support in the Phorum editor_tools module.

// Some variables for storing objects that we need globally.
var editor_tools_size_picker_obj = null;
var editor_tools_list_picker_obj = null;

// Valid sizes to select from for the size picker. If you add or change sizes,
// remember to change the module language file to supply some display strings.
var editor_tools_size_picker_sizes = new Array(
    'x-large',
    'large',
    'medium',
    'small',
    'x-small'
);

// Valid list types to select from for the list picker. If you add or change
// types, remember to change the module language file to supply some
// display strings.
var editor_tools_list_picker_types = new Array(
    'b', // bullets
    '1', // numbers
    'a', // letters
    'A', // capital letters
    'i', // roman numbers
    'I'  // capital roman numbers
);

// Helper function: quote a bbcode argument if needed.
function quote_bbcode_argument(str)
{
    // Check if quoting is required.
    if (str.indexOf(' ') != -1 ||
        str.indexOf('"') != -1 ||
        str.indexOf(']') != -1)
    {
        var quoted = '';
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
            if (c == '\\' || c == '"') {
                quoted += '\\';
            }
            quoted += c;
        }

        return '"' + quoted + '"';
    }
    else
    {
        return str;
    }
}

// ----------------------------------------------------------------------
// Tool: [hr] or [hline] (horizontal line)
// ----------------------------------------------------------------------

function editor_tools_handle_hr() {
    editor_tools_add_tags('\n[hr]\n', '');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [b]...[/b] (bold)
// ----------------------------------------------------------------------

function editor_tools_handle_b() {
    editor_tools_add_tags('[b]', '[/b]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [s]...[/s] (strike through)
// ----------------------------------------------------------------------

function editor_tools_handle_s() {
    editor_tools_add_tags('[s]', '[/s]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [u]...[/u] (underline)
// ----------------------------------------------------------------------

function editor_tools_handle_u() {
    editor_tools_add_tags('[u]', '[/u]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [i]...[/i] (italic)
// ----------------------------------------------------------------------

function editor_tools_handle_i() {
    editor_tools_add_tags('[i]', '[/i]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [center]...[/center] (center text)
// ----------------------------------------------------------------------

function editor_tools_handle_center() {
    editor_tools_add_tags('[center]', '[/center]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [sub]...[/sub] (subscript)
// ----------------------------------------------------------------------

function editor_tools_handle_sub() {
    editor_tools_add_tags('[sub]', '[/sub]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [sup]...[/sup] (superscript)
// ----------------------------------------------------------------------

function editor_tools_handle_sup() {
    editor_tools_add_tags('[sup]', '[/sup]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [small]...[/small] (small font)
// ----------------------------------------------------------------------

function editor_tools_handle_small() {
    editor_tools_add_tags('[small]', '[/small]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [large]...[/large] (large font)
// ----------------------------------------------------------------------

function editor_tools_handle_large() {
    editor_tools_add_tags('[large]', '[/large]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [code]...[/code] (formatted code)
// ----------------------------------------------------------------------

function editor_tools_handle_code() {
    editor_tools_add_tags('[code]\n', '\n[/code]\n');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [email]...[/email] (email address link)
// ----------------------------------------------------------------------

function editor_tools_handle_email()
{
    var email = prompt(editor_tools_translate("enter email"), '');
    if (email == null) return;
    email = editor_tools_strip_whitespace(email);

    var subject = prompt(editor_tools_translate("enter subject"), '');
    if (subject == null) return;
    subject = editor_tools_strip_whitespace(subject);
    if (subject != '') {
        subject = ' subject=' + quote_bbcode_argument(subject);
    }

    if (email == '') {
        editor_tools_add_tags('[email'+subject+']', '[/email]');
    } else {
        editor_tools_add_tags('[email'+subject+']'+email+'[/email]', '');
    }

    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [url=...]...[/url] (URL link)
// ----------------------------------------------------------------------

function editor_tools_handle_url()
{
    var url = 'http://';

    for (;;)
    {
        // Read input.
        url = prompt(editor_tools_translate("enter url"), url);
        // Cancel clicked? Empty string is also handled as cancel here,
        // because Safari returns an empty string for cancel. Without this
        // check, this loop would never end.
        if (url == '' || url == null) return;
        url = editor_tools_strip_whitespace(url);

        // Check the URL scheme (http, https, ftp and mailto are allowed).
        copy = url.toLowerCase();
        if (copy == 'http://' || (
            copy.substring(0,7) != 'http://' &&
            copy.substring(0,8) != 'https://' &&
            copy.substring(0,6) != 'ftp://' &&
            copy.substring(0,7) != 'mailto:')) {
            alert(editor_tools_translate("invalid url"));
            continue;
        }

        break;
    }

    editor_tools_add_tags('[url=' + url + ']', '[/url]', null, editor_tools_translate("enter url description"));
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [color=...]...[/color] (text color)
// ----------------------------------------------------------------------

function editor_tools_handle_color()
{
    editor_tools_store_range();

    // Display the color picker.
    var img_obj = document.getElementById('editor-tools-img-color');
    showColorPicker(img_obj);
    return;
}

// Called by the color picker library.
function editor_tools_handle_color_select(color)
{
    editor_tools_restore_range();

    editor_tools_add_tags('[color=' + color + ']', '[/color]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [size=...]...[/size] (text size)
// ----------------------------------------------------------------------

function editor_tools_handle_size()
{
    editor_tools_store_range();

    // Create the size picker on first access.
    if (!editor_tools_size_picker_obj)
    {
        // Create a new popup.
        var popup = editor_tools_construct_popup('editor-tools-size-picker','l');
        editor_tools_size_picker_obj = popup[0];
        var content_obj = popup[1];

        // Populate the new popup.
        for (var i = 0; i < editor_tools_size_picker_sizes.length; i++)
        {
            var size = editor_tools_size_picker_sizes[i];
            var a_obj = document.createElement('a');
            a_obj.href = 'javascript:editor_tools_handle_size_select("' + size + '")';
            a_obj.style.fontSize = size;
            a_obj.innerHTML = editor_tools_translate(size);
            content_obj.appendChild(a_obj);

            var br_obj = document.createElement('br');
            content_obj.appendChild(br_obj);
        }

        // Register the popup with the editor tools.
        editor_tools_register_popup_object(editor_tools_size_picker_obj);
    }

    // Display the popup.
    var button_obj = document.getElementById('editor-tools-img-size');
    editor_tools_toggle_popup(editor_tools_size_picker_obj, button_obj);
}

function editor_tools_handle_size_select(size)
{
    editor_tools_hide_all_popups();
    editor_tools_restore_range();
    size = editor_tools_strip_whitespace(size);
    editor_tools_add_tags('[size=' + size + ']', '[/size]');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [img]...[/img] (Image URL)
// ----------------------------------------------------------------------

function editor_tools_handle_img()
{
    var url = 'http://';

    for (;;)
    {
        // Read input.
        url = prompt(editor_tools_translate("enter image url"), url);
        // Cancel clicked? Empty string is also handled as cancel here,
        // because Safari returns an empty string for cancel. Without this
        // check, this loop would never end.
        if (url == '' || url == null) return;
        url = editor_tools_strip_whitespace(url);

        // Check the URL scheme (http, https, ftp and mailto are allowed).
        var copy = url.toLowerCase();
        if (copy == 'http://' || (
            copy.substring(0,7) != 'http://' &&
            copy.substring(0,8) != 'https://' &&
            copy.substring(0,6) != 'ftp://')) {
            alert(editor_tools_translate("invalid image url"));
            continue;
        }

        break;
    }

    editor_tools_add_tags('[img]' + url + '[/img]', '');
    editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [quote]...[/quote] (add a quote)
// ----------------------------------------------------------------------

function editor_tools_handle_quote()
{
    // Read input.
    var who = prompt(editor_tools_translate("enter who you quote"), '');
    if (who == null) return;
    who = editor_tools_strip_whitespace(who);

    if (who == '') {
        editor_tools_add_tags('[quote]', '[/quote]');
    }
    else
    {
        who = quote_bbcode_argument(who);
        editor_tools_add_tags('[quote=' + who + "]\n", "\n[/quote]");
    }

    editor_tools_focus_textarea();
}

//----------------------------------------------------------------------
//Tool: [left]...[/left] (add left aligned content)
//----------------------------------------------------------------------

function editor_tools_handle_left() {
    editor_tools_add_tags('[left]', '[/left]');
    editor_tools_focus_textarea();
}

//----------------------------------------------------------------------
//Tool: [right]...[/right] (add right aligned content)
//----------------------------------------------------------------------

function editor_tools_handle_right() {
  editor_tools_add_tags('[right]', '[/right]');
  editor_tools_focus_textarea();
}

// ----------------------------------------------------------------------
// Tool: [list] [*]item1 [*]item2 [/list]
// ----------------------------------------------------------------------

function editor_tools_handle_list()
{
    // Create the list picker on first access.
    if (!editor_tools_list_picker_obj)
    {
        // Create a new popup.
        var popup = editor_tools_construct_popup('editor-tools-list-picker', 'l');
        editor_tools_list_picker_obj = popup[0];
        var content_obj = popup[1];

        // Populate the new popup.
        var wrapper = document.createElement('div');
        wrapper.style.marginLeft = '1em';
        for (var i = 0; i < editor_tools_list_picker_types.length; i++)
        {
            var type = editor_tools_list_picker_types[i];

            var list;
            if (type == 'b') {
                list = document.createElement('ul');
            } else {
                list = document.createElement('ol');
                list.type = type;
            }
            list.style.padding = 0;
            list.style.margin = 0;
            var item = document.createElement('li');

            var a_obj = document.createElement('a');
            a_obj.href = 'javascript:editor_tools_handle_list_select("' + type + '")';
            a_obj.innerHTML = editor_tools_translate('list type ' + type);

            item.appendChild(a_obj);
            list.appendChild(item);
            wrapper.appendChild(list);
        }
        content_obj.appendChild(wrapper);

        // Register the popup with the editor tools.
        editor_tools_register_popup_object(editor_tools_list_picker_obj);
    }

    // Display the popup.
    var button_obj = document.getElementById('editor-tools-img-list');
    editor_tools_toggle_popup(editor_tools_list_picker_obj, button_obj);
}

function editor_tools_handle_list_select(type)
{
    editor_tools_hide_all_popups();

    var items = new Array();
    var idx = 0;

    // Read items.
    for (;;)
    {
        var item = prompt(editor_tools_translate('enter new list item'), '');
        if (item == null) return;
        item = editor_tools_strip_whitespace(item);
        if (item == '') break;
        items[idx++] = item;
    }

    if (items.length == 0) {
        items = new Array(
            '...',
            '...'
        );
    }

    var itemlist = '';
    for (var i = 0; i < items.length; i++) {
        itemlist += '[*] ' + items[i] + "\n";
    }

    if (type == 'b') {
        type = '';
    } else {
        type = '='+type;
    }

    editor_tools_add_tags("[list"+type+"]\n"+itemlist+"[/list]\n", '');
}


/* Added by module "bbcode", file "mods/bbcode/colorpicker/js_color_picker_v2.js.php" */
	/************************************************************************************************************
	(C) www.dhtmlgoodies.com, October 2005
	
	This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	
	
	Terms of use:
	You are free to use this script as long as the copyright message is kept intact. However, you may not
	redistribute, sell or repost it without our permission.
	
	Thank you!
	
	www.dhtmlgoodies.com
	Alf Magne Kalleland
	
	************************************************************************************************************/	

	var MSIE = navigator.userAgent.indexOf('MSIE')>=0?true:false;
	var navigatorVersion = navigator.appVersion.replace(/.*MSIE (\d\.\d).*/g,'$1')/1;

    /* Changed for Phorum editor tools */
	var form_widget_amount_slider_handle = 'http://www.les-mathematiques.net/phorum/mods/bbcode/colorpicker/images/slider_handle.gif';
	var slider_handle_image_obj = false;
	var sliderObjectArray = new Array();
	var slider_counter = 0;
	var slideInProgress = false;
	var handle_start_x;
	var event_start_x;
	var currentSliderIndex;
	
	function form_widget_cancel_event()
	{
		return false;		
	}
	
	function getImageSliderHeight(){
		if(!slider_handle_image_obj){
			slider_handle_image_obj = new Image();
			slider_handle_image_obj.src = form_widget_amount_slider_handle;
		}
		if(slider_handle_image_obj.width>0){
			return;
		}else{
			setTimeout('getImageSliderHeight()',50);
		}
	}
	
	function positionSliderImage(e,theIndex,inputObj)
	{
		if(this)inputObj = this;
		if(!theIndex)theIndex = inputObj.getAttribute('sliderIndex');
		var handleImg = document.getElementById('slider_handle' + theIndex);
		var ratio = sliderObjectArray[theIndex]['width'] / (sliderObjectArray[theIndex]['max']-sliderObjectArray[theIndex]['min']);
		var currentValue = sliderObjectArray[theIndex]['formTarget'].value-sliderObjectArray[theIndex]['min'];		
		handleImg.style.left = currentValue * ratio + 'px';			
		setColorByRGB();
	}
	
	function adjustFormValue(theIndex)
	{
		var handleImg = document.getElementById('slider_handle' + theIndex);	
		var ratio = sliderObjectArray[theIndex]['width'] / (sliderObjectArray[theIndex]['max']-sliderObjectArray[theIndex]['min']);
		var currentPos = handleImg.style.left.replace('px','');
		sliderObjectArray[theIndex]['formTarget'].value = Math.round(currentPos / ratio) + sliderObjectArray[theIndex]['min'];
		
	}
		
	function initMoveSlider(e)
	{
	
		if(document.all)e = event;	
		slideInProgress = true;
		event_start_x = e.clientX;
		handle_start_x = this.style.left.replace('px','');
		currentSliderIndex = this.id.replace(/[^\d]/g,'');
		return false;
	}
	
	function startMoveSlider(e)
	{
		if(document.all)e = event;	
		if(!slideInProgress)return;	
		var leftPos = handle_start_x/1 + e.clientX/1 - event_start_x;
		if(leftPos<0)leftPos = 0;
		if(leftPos/1>sliderObjectArray[currentSliderIndex]['width'])leftPos = sliderObjectArray[currentSliderIndex]['width'];
		document.getElementById('slider_handle' + currentSliderIndex).style.left = leftPos + 'px';
		adjustFormValue(currentSliderIndex);
		if(sliderObjectArray[currentSliderIndex]['onchangeAction']){
			eval(sliderObjectArray[currentSliderIndex]['onchangeAction']);
		}
	}
	
	function stopMoveSlider()
	{
		slideInProgress = false;
	}
	
	
	function form_widget_amount_slider(targetElId,formTarget,width,min,max,onchangeAction)
	{
		if(!slider_handle_image_obj){
			getImageSliderHeight();
		}
				
		slider_counter = slider_counter +1;
		sliderObjectArray[slider_counter] = new Array();
		sliderObjectArray[slider_counter] = {"width":width - 9,"min":min,"max":max,"formTarget":formTarget,"onchangeAction":onchangeAction};
		
		formTarget.setAttribute('sliderIndex',slider_counter);
		formTarget.onchange = positionSliderImage;
		var parentObj = document.createElement('DIV');
		parentObj.style.width = width + 'px';
		parentObj.style.height = '12px';	// The height of the image
		parentObj.style.position = 'relative';
		parentObj.id = 'slider_container' + slider_counter;
		document.getElementById(targetElId).appendChild(parentObj);
		
		var obj = document.createElement('DIV');
		obj.className = 'form_widget_amount_slider';
		obj.innerHTML = '<span></span>';
		obj.style.width = width + 'px';
		obj.id = 'slider_slider' + slider_counter;
		obj.style.position = 'absolute';
		obj.style.bottom = '0px';
		parentObj.appendChild(obj);
		
		var handleImg = document.createElement('IMG');
		handleImg.style.position = 'absolute';
		handleImg.style.left = '0px';
		handleImg.style.zIndex = 5;
		handleImg.src = slider_handle_image_obj.src;
		handleImg.id = 'slider_handle' + slider_counter;
		handleImg.onmousedown = initMoveSlider;
		if(document.body.onmouseup){
			if(document.body.onmouseup.toString().indexOf('stopMoveSlider')==-1){
				alert('You allready have an onmouseup event assigned to the body tag');
			}
		}else{
			document.body.onmouseup = stopMoveSlider;	
			document.body.onmousemove = startMoveSlider;	
		}
		handleImg.ondragstart = form_widget_cancel_event;
		parentObj.appendChild(handleImg);
		positionSliderImage(false,slider_counter);
	}
		

	
	var namedColors = new Array('AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown',
	'BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray',
	'DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','Darkorange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray',
	'DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DodgerBlue','Feldspar','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro',
	'GhostWhite','Gold','GoldenRod','Gray','Green','GreenYellow','HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush',
	'LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen',
	'LightSkyBlue','LightSlateBlue','LightSlateGray','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine',
	'MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue',
	'MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen',
	'PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','Red','RosyBrown','RoyalBlue','SaddleBrown',
	'Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle',
	'Tomato','Turquoise','Violet','VioletRed','Wheat','White','WhiteSmoke','Yellow','YellowGreen');
	
	 var namedColorRGB = new Array('#F0F8FF','#FAEBD7','#00FFFF','#7FFFD4','#F0FFFF','#F5F5DC','#FFE4C4','#000000','#FFEBCD','#0000FF','#8A2BE2','#A52A2A','#DEB887',
	'#5F9EA0','#7FFF00','#D2691E','#FF7F50','#6495ED','#FFF8DC','#DC143C','#00FFFF','#00008B','#008B8B','#B8860B','#A9A9A9','#006400','#BDB76B','#8B008B',
	'#556B2F','#FF8C00','#9932CC','#8B0000','#E9967A','#8FBC8F','#483D8B','#2F4F4F','#00CED1','#9400D3','#FF1493','#00BFFF','#696969','#1E90FF','#D19275',
	'#B22222','#FFFAF0','#228B22','#FF00FF','#DCDCDC','#F8F8FF','#FFD700','#DAA520','#808080','#008000','#ADFF2F','#F0FFF0','#FF69B4','#CD5C5C','#4B0082',
	'#FFFFF0','#F0E68C','#E6E6FA','#FFF0F5','#7CFC00','#FFFACD','#ADD8E6','#F08080','#E0FFFF','#FAFAD2','#D3D3D3','#90EE90','#FFB6C1','#FFA07A','#20B2AA',
	'#87CEFA','#8470FF','#778899','#B0C4DE','#FFFFE0','#00FF00','#32CD32','#FAF0E6','#FF00FF','#800000','#66CDAA','#0000CD','#BA55D3','#9370D8','#3CB371',
	'#7B68EE','#00FA9A','#48D1CC','#C71585','#191970','#F5FFFA','#FFE4E1','#FFE4B5','#FFDEAD','#000080','#FDF5E6','#808000','#6B8E23','#FFA500','#FF4500',
	'#DA70D6','#EEE8AA','#98FB98','#AFEEEE','#D87093','#FFEFD5','#FFDAB9','#CD853F','#FFC0CB','#DDA0DD','#B0E0E6','#800080','#FF0000','#BC8F8F','#4169E1',
	'#8B4513','#FA8072','#F4A460','#2E8B57','#FFF5EE','#A0522D','#C0C0C0','#87CEEB','#6A5ACD','#708090','#FFFAFA','#00FF7F','#4682B4','#D2B48C','#008080',
	'#D8BFD8','#FF6347','#40E0D0','#EE82EE','#D02090','#F5DEB3','#FFFFFF','#F5F5F5','#FFFF00','#9ACD32');	
	
	
	var color_picker_div = false;
	var color_picker_active_tab = false;
	var color_picker_form_field = false;
	var color_picker_active_input = false;
	function baseConverter (number,ob,nb) {
		number = number + "";
		number = number.toUpperCase();
		var list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var dec = 0;
		for (var i = 0; i <=  number.length; i++) {
			dec += (list.indexOf(number.charAt(i))) * (Math.pow(ob , (number.length - i - 1)));
		}
		number = "";
		var magnitude = Math.floor((Math.log(dec))/(Math.log(nb)));
		for (var i = magnitude; i >= 0; i--) {
			var amount = Math.floor(dec/Math.pow(nb,i));
			number = number + list.charAt(amount); 
			dec -= amount*(Math.pow(nb,i));
		}
		if(number.length==0)number=0;
		return number;
	}
	
	function colorPickerGetTopPos(inputObj)
	{
		
	  var returnValue = inputObj.offsetTop;
	  while((inputObj = inputObj.offsetParent) != null){
	  	returnValue += inputObj.offsetTop;
	  }
	  return returnValue;
	}
	
	function colorPickerGetLeftPos(inputObj)
	{
	  var returnValue = inputObj.offsetLeft;
	  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetLeft;
	  return returnValue;
	}
	
	function cancelColorPickerEvent(){
		return false;
	}
	
	function showHideColorOptions(e,inputObj)
	{
		

		var thisObj = this;
		if(inputObj){
			var parentNode = inputObj.parentNode; 
			thisObj = inputObj;
		}else var parentNode = this.parentNode;
		var activeColorDiv = false;
		var subDiv = parentNode.getElementsByTagName('DIV')[0];
		counter=0;	
		var initZIndex = 10;	
		var contentDiv = document.getElementById('color_picker_content').getElementsByTagName('DIV')[0];
		do{			
			if(subDiv.tagName=='DIV' && subDiv.className!='colorPickerCloseButton'){
				if(subDiv==thisObj){
					thisObj.className='colorPickerTab_active';
					thisObj.style.zIndex = 50;
					var img = thisObj.getElementsByTagName('IMG')[0];
                    /* Changed for Phorum editor tools */
					img.src = "http://www.les-mathematiques.net/phorum/mods/bbcode/colorpicker/images/tab_right_active.gif";
					img.src = img.src.replace(/inactive/,'active');							
					contentDiv.style.display='block';
					activeColorDiv = contentDiv;
				}else{
					subDiv.className = 'colorPickerTab_inactive';	
					var img = subDiv.getElementsByTagName('IMG')[0];
                    /* Changed for Phorum editor tools */
					img.src = "http://www.les-mathematiques.net/phorum/mods/bbcode/colorpicker/images/tab_right_inactive.gif";
					if(activeColorDiv)
						subDiv.style.zIndex = initZIndex - counter;
					else
						subDiv.style.zIndex = counter;
					contentDiv.style.display='none';
				}
				counter++;
			}
			subDiv = subDiv.nextSibling;
			if(contentDiv.nextSibling)contentDiv = contentDiv.nextSibling;
		}while(subDiv);
		
		
		document.getElementById('colorPicker_statusBarTxt').innerHTML = '&nbsp;';


	}
	
	function createColorPickerTopRow(inputObj){
    /* Changed for Phorum editor tools */
    var tabs = [editor_tools_lang['rgb'],editor_tools_lang['named'],editor_tools_lang['slides']];
    var tabWidths = [
        parseInt(editor_tools_lang['rgb_size']),
        parseInt(editor_tools_lang['named_size']),
        parseInt(editor_tools_lang['slides_size'])
    ];

		var div = document.createElement('DIV');
		div.className='colorPicker_topRow';
	
		inputObj.appendChild(div);	
		var currentWidth = 0;
		for(var no=0;no<tabs.length;no++){
			
			var tabDiv = document.createElement('DIV');
			tabDiv.onselectstart = cancelColorPickerEvent;
			tabDiv.ondragstart = cancelColorPickerEvent;
			if(no==0){
				suffix = 'active'; 
				color_picker_active_tab = this;
			}else suffix = 'inactive';
			
			tabDiv.id = 'colorPickerTab' + no;
			tabDiv.onclick = showHideColorOptions;
			if(no==0)tabDiv.style.zIndex = 50; else tabDiv.style.zIndex = 1 + (tabs.length-no);
			tabDiv.style.left = currentWidth + 'px';
			tabDiv.style.position = 'absolute';
			tabDiv.className='colorPickerTab_' + suffix;
			var tabSpan = document.createElement('SPAN');
			tabSpan.innerHTML = tabs[no];
			tabDiv.appendChild(tabSpan);
			var tabImg = document.createElement('IMG');
            /* Changed for Phorum editor tools */
			tabImg.src = "http://www.les-mathematiques.net/phorum/mods/bbcode/colorpicker/images/tab_right_" + suffix + ".gif";
			tabDiv.appendChild(tabImg);
			div.appendChild(tabDiv);
			if(navigatorVersion<6 && MSIE){	/* Lower IE version fix */
				tabSpan.style.position = 'relative';
				tabImg.style.position = 'relative';
				tabImg.style.left = '-3px';		
				tabDiv.style.cursor = 'hand';	
			}			
			currentWidth = currentWidth + tabWidths[no];
		}
		
		var closeButton = document.createElement('DIV');
		closeButton.className='colorPickerCloseButton';
		closeButton.innerHTML = 'x';
		closeButton.onclick = closeColorPicker;
		closeButton.onmouseover = toggleCloseButton;
		closeButton.onmouseout = toggleOffCloseButton;
		div.appendChild(closeButton);
		
	}
	
	function toggleCloseButton()
	{
		this.style.color='#FFF';
		this.style.backgroundColor = '#317082';	
	}
	function toggleOffCloseButton()
	{
		this.style.color='';
		this.style.backgroundColor = '';			
		
	}
	function closeColorPicker()
	{
		
		color_picker_div.style.display='none';
	}
	function createWebColors(inputObj){
		var webColorDiv = document.createElement('DIV');
		webColorDiv.style.paddingTop = '1px';
		inputObj.appendChild(webColorDiv);
		for(var r=15;r>=0;r-=3){
			for(var g=0;g<=15;g+=3){
				for(var b=0;b<=15;b+=3){
					var red = baseConverter(r,10,16) + '';
					var green = baseConverter(g,10,16) + '';
					var blue = baseConverter(b,10,16) + '';
					
					var color = '#' + red + red + green + green + blue + blue;
					var div = document.createElement('DIV');
					div.style.backgroundColor=color;
					div.innerHTML = '<span></span>';
					div.className='colorSquare';
					div.title = color;	
					div.onclick = chooseColor;
					div.setAttribute('rgbColor',color);
					div.onmouseover = colorPickerShowStatusBarText;
					div.onmouseout = colorPickerHideStatusBarText;
					webColorDiv.appendChild(div);
				}
			}
		}
	}
		
	function createNamedColors(inputObj){
		var namedColorDiv = document.createElement('DIV');
		namedColorDiv.style.paddingTop = '1px';
		namedColorDiv.style.display='none';
		inputObj.appendChild(namedColorDiv);
		for(var no=0;no<namedColors.length;no++){
			var color = namedColorRGB[no];
			var div = document.createElement('DIV');
			div.style.backgroundColor=color;
			div.innerHTML = '<span></span>';
			div.className='colorSquare';
			div.title = namedColors[no];	
			div.onclick = chooseColor;
			div.onmouseover = colorPickerShowStatusBarText;
			div.onmouseout = colorPickerHideStatusBarText;
			div.setAttribute('rgbColor',color);
			namedColorDiv.appendChild(div);				
		}	
	
	}
	
	function colorPickerHideStatusBarText()
	{
		document.getElementById('colorPicker_statusBarTxt').innerHTML = '&nbsp;';
	}
	
	function colorPickerShowStatusBarText()
	{
		var txt = this.getAttribute('rgbColor');
		if(this.title.indexOf('#')<0)txt = txt + " (" + this.title + ")";
		document.getElementById('colorPicker_statusBarTxt').innerHTML = txt;	
	}
	
	function createAllColorDiv(inputObj){
		var allColorDiv = document.createElement('DIV');
		allColorDiv.style.display='none';
		allColorDiv.className = 'js_color_picker_allColorDiv';
		allColorDiv.style.paddingLeft = '3px';
		allColorDiv.style.paddingTop = '5px';
		allColorDiv.style.paddingBottom = '5px';
		inputObj.appendChild(allColorDiv);	
		
		var labelDiv = document.createElement('DIV');
		labelDiv.className='colorSliderLabel';
		labelDiv.innerHTML = 'R';
		allColorDiv.appendChild(labelDiv);	
		
		var innerDiv = document.createElement('DIV');
		innerDiv.className = 'colorSlider';
		innerDiv.id = 'sliderRedColor';		
		allColorDiv.appendChild(innerDiv);		
		
		var innerDivInput = document.createElement('DIV');
		innerDivInput.className='colorInput';
		
		var input = document.createElement('INPUT');
		input.id = 'js_color_picker_red_color';
		input.maxlength = 3;
		input.style.width = '48px';
		input.style.fontSize = '11px';
		input.name = 'redColor';
		input.value = 0;
		
		innerDivInput.appendChild(input);
		allColorDiv.appendChild(innerDivInput);

		var labelDiv = document.createElement('DIV');
		labelDiv.className='colorSliderLabel';
		labelDiv.innerHTML = 'G';
		allColorDiv.appendChild(labelDiv);	
				
		var innerDiv = document.createElement('DIV');
		innerDiv.className = 'colorSlider';
		innerDiv.id = 'sliderGreenColor';		
		allColorDiv.appendChild(innerDiv);		
		
		var innerDivInput = document.createElement('DIV');
		innerDivInput.className='colorInput';
		
		var input = document.createElement('INPUT');
		input.id = 'js_color_picker_green_color';
		input.maxlength = 3;
		input.style.width = '48px';
		input.style.fontSize = '11px';
		input.name = 'GreenColor';
		input.value = 0;
		
		innerDivInput.appendChild(input);
		allColorDiv.appendChild(innerDivInput);
		
		var labelDiv = document.createElement('DIV');
		labelDiv.className='colorSliderLabel';
		labelDiv.innerHTML = 'B';
		allColorDiv.appendChild(labelDiv);			
		var innerDiv = document.createElement('DIV');
		innerDiv.className = 'colorSlider';
		innerDiv.id = 'sliderBlueColor';		
		allColorDiv.appendChild(innerDiv);		
		
		var innerDivInput = document.createElement('DIV');
		innerDivInput.className='colorInput';
		
		var input = document.createElement('INPUT');
		input.id = 'js_color_picker_blue_color';
		input.maxlength = 3;
		input.style.width = '48px';
		input.style.fontSize = '11px';
		input.name = 'BlueColor';
		input.value = 0;
		
		innerDivInput.appendChild(input);
		allColorDiv.appendChild(innerDivInput);

	
		var colorPreview = document.createElement('DIV');
		colorPreview.className='colorPreviewDiv';
		colorPreview.id = 'colorPreview';
		colorPreview.style.backgroundColor = '#000000';
		colorPreview.innerHTML = '<span></span>';	
		colorPreview.title = 'Click on me to assign color';	
		allColorDiv.appendChild(colorPreview);
		colorPreview.onclick = chooseColorSlider;
		
		var colorCodeDiv = document.createElement('DIV');
		colorCodeDiv.className='colorCodeDiv';		
		var input = document.createElement('INPUT');
		input.id = 'js_color_picker_color_code';
		
		colorCodeDiv.appendChild(input);
		input.maxLength = 7;
		input.style.fontSize = '11px';
		input.style.width = '48px';		
		input.value = '#000000';
		input.onchange = setPreviewColorFromTxt;
		input.onblur = setPreviewColorFromTxt;
		allColorDiv.appendChild(colorCodeDiv);
		
		var clearingDiv = document.createElement('DIV');
		clearingDiv.style.clear = 'both';
		allColorDiv.appendChild(clearingDiv);
		
		
		form_widget_amount_slider('sliderRedColor',document.getElementById('js_color_picker_red_color'),170,0,255,"setColorByRGB()");
		form_widget_amount_slider('sliderGreenColor',document.getElementById('js_color_picker_green_color'),170,0,255,"setColorByRGB()");
		form_widget_amount_slider('sliderBlueColor',document.getElementById('js_color_picker_blue_color'),170,0,255,"setColorByRGB()");
	}
	
	function setPreviewColorFromTxt()
	{
		if(this.value.match(/\#[0-9A-F]{6}/g)){
			document.getElementById('colorPreview').style.backgroundColor=this.value;
			var r = this.value.substr(1,2);
			var g = this.value.substr(3,2);
			var b = this.value.substr(5,2);
			document.getElementById('js_color_picker_red_color').value = baseConverter(r,16,10);
			document.getElementById('js_color_picker_green_color').value = baseConverter(g,16,10);
			document.getElementById('js_color_picker_blue_color').value = baseConverter(b,16,10);
			
			positionSliderImage(false,1,document.getElementById('js_color_picker_red_color'));
			positionSliderImage(false,2,document.getElementById('js_color_picker_green_color'));
			positionSliderImage(false,3,document.getElementById('js_color_picker_blue_color'));
		}
		
	}
	
	function chooseColor()
	{
        /* Changed for Phorum editor tools */
		//color_picker_form_field.value = this.getAttribute('rgbColor');
        editor_tools_handle_color_select(this.getAttribute('rgbColor'));
		color_picker_div.style.display='none';
	}
	
	function createStatusBar(inputObj)
	{
		var div = document.createElement('DIV');
		div.className='colorPicker_statusBar';	
		var innerSpan = document.createElement('SPAN');
		innerSpan.id = 'colorPicker_statusBarTxt';
		div.appendChild(innerSpan);
		inputObj.appendChild(div);
	}
	
	function chooseColorSlider()
	{
        /* Changed for Phorum editor tools */
		//color_picker_form_field.value = document.getElementById('js_color_picker_color_code').value;
        editor_tools_handle_color_select(document.getElementById('js_color_picker_color_code').value);
		color_picker_div.style.display='none';		
	}
	
	
  /* Changed for Phorum editor tools */
	function showColorPicker(inputObj)
	{
		if (!color_picker_div)
    {
			color_picker_div = document.createElement('div');
			color_picker_div.id = 'dhtmlgoodies_colorPicker';
			color_picker_div.style.display='none';
			document.body.appendChild(color_picker_div);
			createColorPickerTopRow(color_picker_div);			
			var contentDiv = document.createElement('div');
			contentDiv.id = 'color_picker_content';
			color_picker_div.appendChild(contentDiv);			
			createWebColors(contentDiv);
			createNamedColors(contentDiv);
			createAllColorDiv(contentDiv);
			createStatusBar(color_picker_div);			

      editor_tools_register_popup_object(color_picker_div);
		}		

    editor_tools_toggle_popup(color_picker_div, inputObj);
		color_picker_active_input = inputObj;		
	}

	function setColorByRGB()
	{
		var formObj = document.forms[0];	
		var r = document.getElementById('js_color_picker_red_color').value.replace(/[^\d]/,'');
		var g = document.getElementById('js_color_picker_green_color').value.replace(/[^\d]/,'');
		var b = document.getElementById('js_color_picker_blue_color').value.replace(/[^\d]/,'');		
		if(r/1>255)r=255;
		if(g/1>255)g=255;
		if(b/1>255)b=255;
		r = baseConverter(r,10,16) + '';
		g = baseConverter(g,10,16) + '';
		b = baseConverter(b,10,16) + '';
		if(r.length==1)r = '0' + r;
		if(g.length==1)g = '0' + g;
		if(b.length==1)b = '0' + b;

		document.getElementById('colorPreview').style.backgroundColor = '#' + r + g + b;
		document.getElementById('js_color_picker_color_code').value = '#' + r + g + b;		
	}	


/* Added by module "bbcode", file "mods/bbcode/colorpicker/color_functions.js" */
function baseConverter (number,ob,nb) {
	number = number + "";
	number = number.toUpperCase();
	var list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var dec = 0;
	for (var i = 0; i <=  number.length; i++) {
		dec += (list.indexOf(number.charAt(i))) * (Math.pow(ob , (number.length - i - 1)));
	}
	number = "";
	var magnitude = Math.floor((Math.log(dec))/(Math.log(nb)));
	for (var i = magnitude; i >= 0; i--) {
		var amount = Math.floor(dec/Math.pow(nb,i));
		number = number + list.charAt(amount); 
		dec -= amount*(Math.pow(nb,i));
	}
	if(number.length==0)number=0;
	return number;
}

// Converts a RGB color to HSV
function toHSV(rgbColor){
	rgbColor = rgbColor.replace('#','');		
	
	red = baseConverter(rgbColor.substr(0,2),16,10);
	green = baseConverter(rgbColor.substr(2,2),16,10);
	blue = baseConverter(rgbColor.substr(4,2),16,10);
	if(red.length==0)red=0;
	if(green.length==0)green=0;
	if(blue.length==0)blue=0;
	red = red/255;
	green = green/255;
	blue = blue/255;
	
	maxValue = Math.max(red,green,blue);
	minValue = Math.min(red,green,blue);
	
	var hue = 0;
	
	if(maxValue==minValue){
		hue = 0;
		saturation=0;
	}else{
		if(red == maxValue){
			hue = (green - blue) / (maxValue-minValue)/1;	
		}else if(green == maxValue){
			hue = 2 + (blue - red)/1 / (maxValue-minValue)/1;	
		}else if(blue == maxValue){
			hue = 4 + (red - green) / (maxValue-minValue)/1;	
		}
		saturation = (maxValue-minValue) / maxValue;
	}
	hue = hue * 60; 
	valueBrightness = maxValue;
	
	if(valueBrightness/1<0.5){
		//saturation = (maxValue - minValue) / (maxValue + minValue);
	}
	if(valueBrightness/1>= 0.5){
		//saturation = (maxValue - minValue) / (2 - maxValue - minValue);
	}	
		
	
	returnArray = [hue,saturation,valueBrightness];
	return returnArray;
}

function toRgb(hue,saturation,valueBrightness){
	Hi = Math.floor(hue / 60);
	if(hue==360)Hi=0;
	f = hue/60 - Hi;
	p = (valueBrightness * (1- saturation)).toPrecision(2);
	q = (valueBrightness * (1 - (f * saturation))).toPrecision(2);
	t = (valueBrightness * (1 - ((1-f)*saturation))).toPrecision(2);

	switch(Hi){
		case 0:
			red = valueBrightness;
			green = t;
			blue = p;				
			break;
		case 1: 
			red = q;
			green = valueBrightness;
			blue = p;
			break;
		case 2: 
			red = q;
			green = valueBrightness;
			blue = t;
			break;
		case 3: 
			red = p;
			green = q;;
			blue = valueBrightness;
			break;
		case 4:
			red = t;
			green = p;
			blue = valueBrightness;
			break;
		case 5:
			red = valueBrightness;
			green = p;
			blue = q;
			break;
	}
	
	if(saturation==0){
		red = valueBrightness;
		green = valueBrightness;
		blue = valueBrightness;		
	}
	
	red*=255;
	green*=255;
	blue*=255;

	red = Math.round(red);
	green = Math.round(green);
	blue = Math.round(blue);	
	
	red = baseConverter(red,10,16);
	green = baseConverter(green,10,16);
	blue = baseConverter(blue,10,16);
	
	red = red + "";
	green = green + "";
	blue = blue + "";

	while(red.length<2){
		red = "0" + red;
	}	
	while(green.length<2){
		green = "0" + green;
	}	
	while(blue.length<2){
		blue = "0" + "" + blue;
	}
	rgbColor = "#" + red + "" + green + "" + blue;
	return rgbColor.toUpperCase();
}

function findColorByDegrees(rgbColor,degrees){
	rgbColor = rgbColor.replace('#','');
	myArray = toHSV(rgbColor);
	myArray[0]+=degrees;
	if(myArray[0]>=360)myArray[0]-=360;
	if(myArray[0]<0)myArray[0]+=360;	
	return toRgb(myArray[0],myArray[1],myArray[2]);
}

function findColorByBrightness(rgbColor,brightness){
	
	rgbColor = rgbColor.replace('#','');
	myArray = toHSV(rgbColor);
	
	myArray[2]+=brightness/100;
	if(myArray[2]>1)myArray[2]=1;
	if(myArray[2]<0)myArray[2]=0;	
	
	myArray[1]+=brightness/100;
	if(myArray[1]>1)myArray[1]=1;
	if(myArray[1]<0)myArray[1]=0;		
	
	return toRgb(myArray[0],myArray[1],myArray[2]);	
	
}


