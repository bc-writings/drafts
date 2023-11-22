(function(){
var container, button, menu;
container=document.getElementById('site-navigation');
if(! container){
return;
}
button=container.getElementsByTagName('button')[0];
if('undefined'===typeof button){
return;
}
menu=container.getElementsByTagName('ul')[0];
if('undefined'===typeof menu){
button.style.display='none';
return;
}
menu.setAttribute('aria-expanded', 'false');
if(-1===menu.className.indexOf('nav-menu')){
menu.className +=' nav-menu';
}
button.onclick=function(){
if(-1!==container.className.indexOf('toggled')){
container.className=container.className.replace(' toggled', '');
button.setAttribute('aria-expanded', 'false');
menu.setAttribute('aria-expanded', 'false');
}else{
container.className +=' toggled';
button.setAttribute('aria-expanded', 'true');
menu.setAttribute('aria-expanded', 'true');
}};})();
(function(){
var is_webkit=navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
is_opera=navigator.userAgent.toLowerCase().indexOf('opera')  > -1,
is_ie=navigator.userAgent.toLowerCase().indexOf('msie')   > -1;
if(( is_webkit||is_opera||is_ie)&&document.getElementById&&window.addEventListener){
window.addEventListener('hashchange', function(){
var element=document.getElementById(location.hash.substring(1));
if(element){
if(! /^(?:a|select|input|button|textarea)$/i.test(element.tagName))
element.tabIndex=-1;
element.focus();
}}, false);
}})();
(function (factory){
if(typeof define==='function'&&define.amd){
define(['jquery'], factory);
}else{
factory(jQuery);
}}(function ($){
$.timeago=function(timestamp){
if(timestamp instanceof Date){
return inWords(timestamp);
}else if(typeof timestamp==="string"){
return inWords($.timeago.parse(timestamp));
}else if(typeof timestamp==="number"){
return inWords(new Date(timestamp));
}else{
return inWords($.timeago.datetime(timestamp));
}};
var $t=$.timeago;
$.extend($.timeago, {
settings: {
refreshMillis: 60000,
allowPast: true,
allowFuture: false,
localeTitle: false,
cutoff: 0,
strings: {
prefixAgo: null,
prefixFromNow: null,
suffixAgo: "ago",
suffixFromNow: "from now",
inPast: 'any moment now',
seconds: "less than a minute",
minute: "about a minute",
minutes: "%d minutes",
hour: "about an hour",
hours: "about %d hours",
day: "a day",
days: "%d days",
month: "about a month",
months: "%d months",
year: "about a year",
years: "%d years",
wordSeparator: " ",
numbers: []
}},
inWords: function(distanceMillis){
if(!this.settings.allowPast&&! this.settings.allowFuture){
throw 'timeago allowPast and allowFuture settings can not both be set to false.';
}
var $l=this.settings.strings;
var prefix=$l.prefixAgo;
var suffix=$l.suffixAgo;
if(this.settings.allowFuture){
if(distanceMillis < 0){
prefix=$l.prefixFromNow;
suffix=$l.suffixFromNow;
}}
if(!this.settings.allowPast&&distanceMillis >=0){
return this.settings.strings.inPast;
}
var seconds=Math.abs(distanceMillis) / 1000;
var minutes=seconds / 60;
var hours=minutes / 60;
var days=hours / 24;
var years=days / 365;
function substitute(stringOrFunction, number){
var string=$.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis):stringOrFunction;
var value=($l.numbers&&$l.numbers[number])||number;
return string.replace(/%d/i, value);
}
var words=seconds < 45&&substitute($l.seconds, Math.round(seconds)) ||
seconds < 90&&substitute($l.minute, 1) ||
minutes < 45&&substitute($l.minutes, Math.round(minutes)) ||
minutes < 90&&substitute($l.hour, 1) ||
hours < 24&&substitute($l.hours, Math.round(hours)) ||
hours < 42&&substitute($l.day, 1) ||
days < 30&&substitute($l.days, Math.round(days)) ||
days < 45&&substitute($l.month, 1) ||
days < 365&&substitute($l.months, Math.round(days / 30)) ||
years < 1.5&&substitute($l.year, 1) ||
substitute($l.years, Math.round(years));
var separator=$l.wordSeparator||"";
if($l.wordSeparator===undefined){ separator=" "; }
return $.trim([prefix, words, suffix].join(separator));
},
parse: function(iso8601){
var s=$.trim(iso8601);
s=s.replace(/\.\d+/,"");
s=s.replace(/-/,"/").replace(/-/,"/");
s=s.replace(/T/," ").replace(/Z/," UTC");
s=s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");
s=s.replace(/([\+\-]\d\d)$/," $100");
return new Date(s);
},
datetime: function(elem){
var iso8601=$t.isTime(elem) ? $(elem).attr("datetime"):$(elem).attr("title");
return $t.parse(iso8601);
},
isTime: function(elem){
return $(elem).get(0).tagName.toLowerCase()==="time";
}});
var functions={
init: function(){
var refresh_el=$.proxy(refresh, this);
refresh_el();
var $s=$t.settings;
if($s.refreshMillis > 0){
this._timeagoInterval=setInterval(refresh_el, $s.refreshMillis);
}},
update: function(time){
var parsedTime=$t.parse(time);
$(this).data('timeago', { datetime: parsedTime });
if($t.settings.localeTitle) $(this).attr("title", parsedTime.toLocaleString());
refresh.apply(this);
},
updateFromDOM: function(){
$(this).data('timeago', { datetime: $t.parse($t.isTime(this) ? $(this).attr("datetime"):$(this).attr("title")) });
refresh.apply(this);
},
dispose: function (){
if(this._timeagoInterval){
window.clearInterval(this._timeagoInterval);
this._timeagoInterval=null;
}}
};
$.fn.timeago=function(action, options){
var fn=action ? functions[action]:functions.init;
if(!fn){
throw new Error("Unknown function name '"+ action +"' for timeago");
}
this.each(function(){
fn.call(this, options);
});
return this;
};
function refresh(){
if(!$.contains(document.documentElement,this)){
$(this).timeago("dispose");
return this;
}
var data=prepareData(this);
var $s=$t.settings;
if(!isNaN(data.datetime)){
if($s.cutoff==0||Math.abs(distance(data.datetime)) < $s.cutoff){
$(this).text(inWords(data.datetime));
}}
return this;
}
function prepareData(element){
element=$(element);
if(!element.data("timeago")){
element.data("timeago", { datetime: $t.datetime(element) });
var text=$.trim(element.text());
if($t.settings.localeTitle){
element.attr("title", element.data('timeago').datetime.toLocaleString());
}else if(text.length > 0&&!($t.isTime(element)&&element.attr("title"))){
element.attr("title", text);
}}
return element.data("timeago");
}
function inWords(date){
return $t.inWords(distance(date));
}
function distance(date){
return (new Date().getTime() - date.getTime());
}
document.createElement("abbr");
document.createElement("time");
}));
jQuery.timeago.settings.strings={
prefixAgo: "il y a",
prefixFromNow: "d'ici",
seconds: "moins d'une minute",
minute: "environ une minute",
minutes: "environ %d minutes",
hour: "environ une heure",
hours: "environ %d heures",
day: "environ un jour",
days: "environ %d jours",
month: "environ un mois",
months: "environ %d mois",
year: "un an",
years: "%d ans"
};
(function($){
$('.comment-metadata time').timeago();
})(jQuery);
window.addComment=function(v){var I,C,h,E=v.document,b={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},e=v.MutationObserver||v.WebKitMutationObserver||v.MozMutationObserver,r="querySelector"in E&&"addEventListener"in v,n=!!E.documentElement.dataset;function t(){d(),e&&new e(o).observe(E.body,{childList:!0,subtree:!0})}function d(e){if(r&&(I=g(b.cancelReplyId),C=g(b.commentFormId),I)){I.addEventListener("touchstart",l),I.addEventListener("click",l);var t=function(e){if((e.metaKey||e.ctrlKey)&&13===e.keyCode)return C.removeEventListener("keydown",t),e.preventDefault(),C.submit.click(),!1};C&&C.addEventListener("keydown",t);for(var n,d=function(e){var t=b.commentReplyClass;e&&e.childNodes||(e=E);t=E.getElementsByClassName?e.getElementsByClassName(t):e.querySelectorAll("."+t);return t}(e),o=0,i=d.length;o<i;o++)(n=d[o]).addEventListener("touchstart",a),n.addEventListener("click",a)}}function l(e){var t,n,d=g(b.temporaryFormId);d&&h&&(g(b.parentIdFieldId).value="0",t=d.textContent,d.parentNode.replaceChild(h,d),this.style.display="none",n=(d=(n=g(b.commentReplyTitleId))&&n.firstChild)&&d.nextSibling,d&&d.nodeType===Node.TEXT_NODE&&t&&(n&&"A"===n.nodeName&&n.id!==b.cancelReplyId&&(n.style.display=""),d.textContent=t),e.preventDefault())}function a(e){var t=g(b.commentReplyTitleId),n=t&&t.firstChild.textContent,d=this,o=m(d,"belowelement"),i=m(d,"commentid"),r=m(d,"respondelement"),t=m(d,"postid"),n=m(d,"replyto")||n;o&&i&&r&&t&&!1===v.addComment.moveForm(o,i,r,t,n)&&e.preventDefault()}function o(e){for(var t=e.length;t--;)if(e[t].addedNodes.length)return void d()}function m(e,t){return n?e.dataset[t]:e.getAttribute("data-"+t)}function g(e){return E.getElementById(e)}return r&&"loading"!==E.readyState?t():r&&v.addEventListener("DOMContentLoaded",t,!1),{init:d,moveForm:function(e,t,n,d,o){var i=g(e);h=g(n);var r,l,a,m,c,s=g(b.parentIdFieldId),y=g(b.postIdFieldId),p=(c=g(b.commentReplyTitleId))&&c.firstChild,u=p&&p.nextSibling;if(i&&h&&s){void 0===o&&(o=p&&p.textContent),m=h,e=b.temporaryFormId,n=g(e),c=(c=g(b.commentReplyTitleId))?c.firstChild.textContent:"",n||((n=E.createElement("div")).id=e,n.style.display="none",n.textContent=c,m.parentNode.insertBefore(n,m)),d&&y&&(y.value=d),s.value=t,I.style.display="",i.parentNode.insertBefore(h,i.nextSibling),p&&p.nodeType===Node.TEXT_NODE&&(u&&"A"===u.nodeName&&u.id!==b.cancelReplyId&&(u.style.display="none"),p.textContent=o),I.onclick=function(){return!1};try{for(var f=0;f<C.elements.length;f++)if(r=C.elements[f],l=!1,"getComputedStyle"in v?a=v.getComputedStyle(r):E.documentElement.currentStyle&&(a=r.currentStyle),(r.offsetWidth<=0&&r.offsetHeight<=0||"hidden"===a.visibility)&&(l=!0),"hidden"!==r.type&&!r.disabled&&!l){r.focus();break}}catch(e){}return!1}}}}(window);
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);
var ak_js=document.getElementById("ak_js");
if(! ak_js){
ak_js=document.createElement('input');
ak_js.setAttribute('id', 'ak_js');
ak_js.setAttribute('name', 'ak_js');
ak_js.setAttribute('type', 'hidden');
}else{
ak_js.parentNode.removeChild(ak_js);
}
ak_js.setAttribute('value',(new Date()).getTime());
var commentForm=document.getElementById('commentform');
if(commentForm){
commentForm.appendChild(ak_js);
}else{
var replyRowContainer=document.getElementById('replyrow');
if(replyRowContainer){
var children=replyRowContainer.getElementsByTagName('td');
if(children.length > 0){
children[0].appendChild(ak_js);
}}
};