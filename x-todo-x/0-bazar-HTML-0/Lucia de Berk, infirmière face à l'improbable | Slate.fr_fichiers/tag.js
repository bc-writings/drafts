/*
 Copyright 2016-2020 Impactify. All Rights Reserved.
 ----------------------
 Want to join the Impactify Team? jobs@impactify.io
 ----------------------
*/
(function(e){e._impactify_req_||(e._impactify_req_=function(e,f,n){function r(a,d,c){var b=a.createElement("script");b.type="text/javascript";"undefined"!==typeof c&&(b.readyState?b.onreadystatechange=function(){if("loaded"===b.readyState||"complete"===b.readyState)b.onreadystatechange=null,c()}:b.onload=function(){c()});b.src=d;a.getElementsByTagName("body")[0].appendChild(b)}var p="5",g="5r26",k="5r26",h=Math.floor(Date.now()/1E3),l=!1,m=!1,q="https://ad.impactify.io",t=function(a){var d=function(){var b=
function(a){return a.parent===f.top?a:b(a.parent)};return b(f)}().frameElement||e.currentScript||null;if(d){var c=e.createElement("div");c.id=a;c.style.display="none";d.parentNode.insertBefore(c,d)}};try{(function(){var a=!!n.getItem("_im_dvn"),d=n.getItem("_im_rs")||!1,c=n.getItem("_im_dv")||!1,b=g;a&&(g=g+"."+h,k=k+"."+h);d&&(p=parseInt(d));c&&(l=!0,q="https://app.impactify.it");f.impactifyTag&&f.impactifyTag.length&&(a=f.impactifyTag[0].appId||"auto",m=/impactify/i.test(a),g+=l||m?"."+h:"",k+=
l||m?"."+h:"",top._impactify_=top._impactify_||{appId:a,inDev:l,isDemo:m,baseUrl:q,release:p,version:g,versionName:b,iVersion:k,TIME:h},f.impactifyTag.forEach(function(a){if("screen"===a.format&&1!==a.called){a.called=1;var b,c=void 0,c=c&&c.toLowerCase();b="";for(var d=0,e="a"==c?10:0,c="n"==c?10:62;"6">d++;){var f=Math.random()*(c-e)+e<<0;b+=String.fromCharCode(f+(9<f?36>f?55:61:48))}d="ph-"+b;top._impactify_tags=top._impactify_tags||{};top._impactify_tags.screen=top._impactify_tags.screen||[];
top._impactify_tags.screen.push({id:b,config:a});top.document.getElementById(d)||t(d);r(top.document,q+"/static/ad/v"+p+"/screen.js?v="+g)}}))})()}catch(a){}});e._impactify_req_(document,e,sessionStorage)})(window);
