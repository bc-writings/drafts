;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="9662a3abe7128b30d0d83c48cb1a1120";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["Qn9ZibApRpxD"]={appId:"ngqhM7rZolNP",scope:{}};;CloudflareApps.installs["Qn9ZibApRpxD"].options={"close":false,"colors":{"colorBackground":"#ff0000","colorText":"#ffffff"},"fontSize":50,"once":false,"proColors":false,"proTranslation":false,"style":"block","translation":{"translationRefresh":"I understand, I have disabled my ad blocker.  Let me in!","translationText":"But without advertising-income, we can't keep making this site awesome.","translationTitle":"It looks like you're using an ad blocker."},"warningSize":59};;CloudflareApps.installs["Qn9ZibApRpxD"].product={"id":"basic"};;CloudflareApps.installs["T1F2fP3uWdgJ"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["T1F2fP3uWdgJ"].options={"anonymizeIp":false,"domain":"","id":"UA-45296257-1","showDomain":false,"social":true};;CloudflareApps.installs["VpL2JGJqFWYQ"]={appId:"ZCDIXCYkgZ6P",scope:{}};;CloudflareApps.installs["VpL2JGJqFWYQ"].options={"behavior":{"automaticallyHide":false,"showCloseButton":true},"cta":{"label":"","newWindow":true,"show":true,"url":"https://www.vultr.com/?ref=8570228-6G"},"message":"Limited $100 Free Cloud VPS Credit","messagePlan":"single","messages":[{"cta":{"label":"","newWindow":false,"show":true},"endDate":"Wed Jan 1 2020 18:30","useEndDate":false}],"theme":{"backgroundColor":"#0099ff","buttonBackgroundColor":"#ffffff","buttonTextColor":"#0099ff","buttonTextColorStrategy":"auto","style":"prominent","textColor":"#ffffff"}};;CloudflareApps.installs["VpL2JGJqFWYQ"].product={"id":"basic"};;CloudflareApps.installs["yCEu4HqiqP1I"]={appId:"fRLxx0cn-Ae-",scope:{}};;CloudflareApps.installs["yCEu4HqiqP1I"].options={"account":{"accountId":"KGytV9Tg58GT","service":"viglink-service","userId":"140622"},"campaignKey":"60430423fdd47c16de0d1b741b15f71d"};;if(CloudflareApps.matchPage(CloudflareApps.installs['T1F2fP3uWdgJ'].URLPatterns)){(function(){var options=CloudflareApps.installs['T1F2fP3uWdgJ'].options;var id;if(options.account&&options.organization){id=options["web-properties-for-"+options.organization];}else{id=(options.id||"").trim();}
if(!id){console.log("Cloudflare Google Analytics: Disabled. UA-ID not present.");return;}else if("T1F2fP3uWdgJ"==="preview"){console.log("Cloudflare Google Analytics: Enabled",id);}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split("#")[0].match(/[^?=&]+=([^&]*)?/g);for(var i=0,chunk;(chunk=parameters[i]);++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split("=")[1]);}}}}
window.dataLayer=window.dataLayer||[];function gtag(){window.dataLayer.push(arguments);}
gtag("js",new Date());gtag("config",id);gtag("set",{anonymizeIp:options.anonymizeIp});var vendorScript=document.createElement("script");vendorScript.src="https://www.googletagmanager.com/gtag/js?id="+id;document.head.appendChild(vendorScript);if(options.social){window.addEventListener("load",function googleAnalyticsSocialTracking(){var FB=window.FB;var twttr=window.twttr;if("FB"in window&&"Event"in FB&&"subscribe"in window.FB.Event){FB.Event.subscribe("edge.create",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"like",content_id:targetUrl});});FB.Event.subscribe("edge.remove",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"unlike",content_id:targetUrl});});FB.Event.subscribe("message.send",function(targetUrl){gtag("event","share",{method:"facebook",event_action:"send",content_id:targetUrl});});}
if("twttr"in window&&"events"in twttr&&"bind"in twttr.events){twttr.events.bind("tweet",function(event){if(event){var targetUrl;if(event.target&&event.target.nodeName==="IFRAME"){targetUrl=resolveParameter(event.target.src,"url");}
gtag("event","share",{method:"twitter",event_action:"tweet",content_id:targetUrl});}});}},false);}})();}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/emkjA9C39SG9A_pLAKx3bQlHqa4.js';document.head.appendChild(script);})();