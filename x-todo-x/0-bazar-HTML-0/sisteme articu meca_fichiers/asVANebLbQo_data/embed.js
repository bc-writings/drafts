(function(g){var window=this;var j4=function(a,b){g.hf(a.o,8*b+2);var c=a.o.end();a.A.push(c);a.u+=c.length;c.push(a.u);return c},k4=function(a,b){var c=b.pop();
for(c=a.u+a.o.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.u++;b.push(c);a.u++},KCa=function(a,b,c){null!=c&&(g.hf(a.o,8*b+1),a=a.o,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.tf=b,g.uf=c,g.jf(a,g.tf),g.jf(a,g.uf))},l4=function(a,b,c){null!=c&&(g.hf(a.o,8*b),a.o.o.push(c?1:0))},m4=function(a,b,c){if(null!=c){b=j4(a,b);
for(var d=a.o,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.o.push(f);else if(2048>f)d.o.push(f>>6|192),d.o.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.o.push(f>>18|240),d.o.push(f>>12&63|128),d.o.push(f>>6&63|128),d.o.push(f&63|128),e++)}else d.o.push(f>>12|224),d.o.push(f>>6&63|128),d.o.push(f&63|128)}k4(a,b)}},n4=function(a,b,c,d){null!=c&&(b=j4(a,b),d(c,a),k4(a,b))},o4=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=j4(a,b);
d(c[e],a);k4(a,f)}},LCa=function(a,b){var c=(b-a.o)/(a.u-a.o);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.Hn(a,c);var l=(g.Hn(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.Hn(a,c);return c},p4=function(a,b,c){a.o||(a.o={});
if(!a.o[c]){var d=g.Df(a,c);d&&(a.o[c]=new b(d))}return a.o[c]},q4=function(a,b,c){g.Hf(a,b,c);
b=a.o[c];b==g.zf&&(b=a.o[c]=[]);return b},MCa=function(a,b,c){a.o||(a.o={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].de;a.o[b]=c;g.Ff(a,b,d)},r4=function(a,b,c,d){(c=g.Bf(a,c))&&c!==b&&void 0!==d&&(a.o&&c in a.o&&(a.o[c]=void 0),g.Ff(a,c,void 0));
g.Ff(a,b,d)},NCa=function(){return{D:"svg",
P:{height:"100%",viewBox:"0 0 16 16",width:"100%"},L:[{D:"path",P:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}},s4=function(){return{D:"svg",
P:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},L:[{D:"path",Xa:!0,J:"ytp-svg-fill",P:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
OCa=function(a){this.By=a},t4=function(a,b,c){this.B=a;
this.u=b;this.o=c||[];this.Lk=new Map},u4=function(a,b){t4.call(this,a,3,b)},v4=function(){this.N=new PCa;
this.u=new Map;this.G=new Set;this.A=0;this.B=100;this.flushInterval=3E4;this.o=new g.Pm(this.flushInterval);this.o.ma("tick",this.C,!1,this)},QCa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},RCa=function(){if(!w4){w4=new v4;
var a=g.no("client_streamz_web_flush_count",-1);-1!==a&&(w4.B=a)}this.o=w4;this.o.F("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe")},TCa=function(a){g.Cf(this,a,SCa,null)},UCa=function(a){g.Cf(this,a,null,null)},WCa=function(a,b){var c=q4(a,UCa,1);
0<c.length&&o4(b,1,c,VCa)},VCa=function(a,b){var c=g.Df(a,1);
null!=c&&g.wf(b,1,c);c=g.Df(a,2);null!=c&&g.vf(b,2,c)},YCa=function(a){g.Cf(this,a,XCa,null)},$Ca=function(a){g.Cf(this,a,null,ZCa)},aDa=function(a){g.Cf(this,a,null,null)},bDa=function(a){g.Cf(this,a,null,null)},x4=function(a){g.Cf(this,a,cDa,null)},z4=function(a){g.Cf(this,a,null,y4)},B4=function(a){g.Cf(this,a,null,A4)},fDa=function(a,b){var c=p4(a,aDa,1);
null!=c&&n4(b,1,c,dDa);c=p4(a,bDa,2);null!=c&&n4(b,2,c,eDa)},dDa=function(a,b){var c=g.Df(a,1);
null!=c&&m4(b,1,c);c=g.Df(a,2);null!=c&&m4(b,2,c);c=g.Df(a,3);null!=c&&l4(b,3,c)},eDa=function(a,b){var c=g.Df(a,1);
null!=c&&m4(b,1,c);c=g.Df(a,2);null!=c&&m4(b,2,c);c=g.Df(a,3);null!=c&&g.sf(b,3,c);c=g.Df(a,4);null!=c&&l4(b,4,c)},iDa=function(a,b){var c=q4(a,z4,1);
0<c.length&&o4(b,1,c,gDa);c=p4(a,B4,2);null!=c&&n4(b,2,c,hDa)},gDa=function(a,b){var c=g.Df(a,1);
null!=c&&m4(b,1,c);c=g.Df(a,2);null!=c&&g.sf(b,2,c);c=g.Df(a,3);null!=c&&l4(b,3,c)},hDa=function(a,b){var c=g.Df(a,1);
null!=c&&g.vf(b,1,c);c=g.Df(a,2);null!=c&&g.wf(b,2,c);c=p4(a,TCa,3);null!=c&&n4(b,3,c,WCa)},PCa=function(){},C4=function(a){g.C.call(this);
this.callback=a;this.u=new g.Gn(0,0,.4,0,.2,1,1,1);this.delay=new g.mn(this.next,window,this);this.startTime=this.duration=this.o=this.from=NaN;g.E(this,this.delay)},D4=function(a){g.T.call(this,{D:"div",
J:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.F=this.u=0;this.animationDelay=1E3;this.I=new g.Xr(this);this.B=[];this.o=[];this.C=0;this.title=new g.T({D:"h2",J:"ytp-related-title",V:"{{title}}"});this.previous=new g.T({D:"button",da:["ytp-button","ytp-previous"],P:{"aria-label":"Afficher les suggestions de vid\u00e9os pr\u00e9c\u00e9dentes"},L:[g.cO()]});this.S=new C4(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.A=0;this.G=!0;this.next=new g.T({D:"button",da:["ytp-button","ytp-next"],P:{"aria-label":"Afficher plus de suggestions de vid\u00e9os"},L:[g.dO()]});g.E(this,this.I);a=a.O();this.N=a.u;g.E(this,this.title);this.title.aa(this.element);this.suggestions=new g.T({D:"div",J:"ytp-suggestions"});g.E(this,this.suggestions);this.suggestions.aa(this.element);g.E(this,this.previous);this.previous.aa(this.element);this.previous.ma("click",this.ZH,this);g.E(this,this.S);for(var c=0;16>c;c++){var d=
new g.T({D:"a",J:"ytp-suggestion-link",P:{href:"{{link}}",target:a.F,"aria-label":"{{aria_label}}"},L:[{D:"div",J:"ytp-suggestion-image",L:[{D:"div",P:{"data-is-live":"{{is_live}}"},J:"ytp-suggestion-duration",V:"{{duration}}"}]},{D:"div",J:"ytp-suggestion-title",P:{title:"{{hover_title}}"},V:"{{title}}"},{D:"div",J:"ytp-suggestion-author",V:"{{views_or_author}}"}]});g.E(this,d);d.aa(this.suggestions.element);var e=d.ba("ytp-suggestion-link");g.kg(e,"transitionDelay",c/20+"s");this.I.K(e,"click",
g.Ua(this.aI,c));this.B.push(d)}g.E(this,this.next);this.next.aa(this.element);this.next.ma("click",this.YH,this);this.I.K(this.api,"videodatachange",this.Ma);this.resize(g.bN(this.api).getPlayerSize());this.Ma();this.show()},E4=function(a){a.next.element.style.bottom=a.F+"px";
a.previous.element.style.bottom=a.F+"px";var b=a.A,c=a.C-a.o.length*(a.tileWidth+a.u);g.J(a.element,"ytp-scroll-min",0<=b);g.J(a.element,"ytp-scroll-max",b<=c)},jDa=function(a){for(var b=0;b<a.o.length;b++){var c=b,d=a.o[b].Aa();
c=a.B[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.mi();g.Hy(a.api.O())&&(f=g.Gd(f,g.jJ({},"emb_rel_err")));c.element.style.display="";var h=c.ba("ytp-suggestion-title");g.En.test(d.title)?h.dir="rtl":g.Nya.test(d.title)&&(h.dir="ltr");h=c.ba("ytp-suggestion-author");g.En.test(e)?h.dir="rtl":g.Nya.test(e)&&(h.dir="ltr");h=void 0;d.xa?h="En direct":h=d.lengthSeconds?g.bD(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,aria_label:d.tm||
null,is_live:d.xa});c=c.ba("ytp-suggestion-image");d=d.Lc();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display="none";E4(a)},F4=function(a){g.LO.call(this,a);
var b=this,c=a.O();c=new g.T({D:"a",J:"ytp-small-redirect",P:{href:g.rz(c),target:c.F,"aria-label":"Acc\u00e9der \u00e0 YouTube pour rechercher plus de vid\u00e9os"},L:[{D:"svg",P:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},L:[{D:"path",P:{d:"M0 0h24v24H0V0z",fill:"none"}},{D:"path",P:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.aa(this.element);g.E(this,c);this.o=new D4(a);this.o.aa(this.element);g.E(this,this.o);this.K(a,"videodatachange",function(){b.show()});
this.resize(g.bN(this.api).getPlayerSize())},kDa=function(a,b){a.ba("ytp-error-content").style.paddingTop="0px";
var c=a.ba("ytp-error-content"),d=c.clientHeight;a.o.resize(b,b.height-d);c.style.paddingTop=(b.height-a.o.element.clientHeight)/2-d/2+"px"},lDa=function(a,b){var c=a.api.O(),d;
b.reason&&(G4(b.reason)?d=g.Sz(b.reason):d=g.MO(g.S(b.reason)),a.Mb(d,"content"));var e;b.subreason&&(G4(b.subreason)?e=g.Sz(b.subreason):e=g.MO(g.S(b.subreason)),a.Mb(e,"subreason"));if(g.P(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ba("ytp-error-content-wrap-subreason"),d=g.De("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},G4=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},H4=function(a,b){g.T.call(this,{D:"button",
da:["ytp-impression-link","ytp-button"]});this.api=a;this.A=b;this.u=!1;this.o=null;var c=this.api.O();this.hide();g.uN(this.api,this.element,this,96714);var d=this.api.O(),e=this.api.getVideoData().fc,f=d.za,h=d.le;d=!d.Ea;var l=this.A.rf();f||h||l||e||d||(g.P(c.experiments,"embeds_impression_link_call_to_action")&&(g.H(this.element,"show-cta-button"),(new g.T({D:"div",J:"ytp-impression-link-content",L:[{D:"div",J:"ytp-impression-link-text",V:"Regarder sur"},{D:"div",J:"ytp-impression-link-logo",
L:[s4()]}]})).aa(this.element),this.show()),g.P(c.experiments,"embeds_impression_link_video_thumbnail")&&mDa(this),g.P(c.experiments,"embeds_impression_link_channel_thumbnail")&&nDa(this),g.P(c.experiments,"embeds_impression_link_occlusion")&&oDa(this),g.P(c.experiments,"embeds_impression_link_hover")&&pDa(this),this.K(this.api,"presentingplayerstatechange",this.tf),this.K(this.api,"videoplayerreset",this.B),this.K(this.element,"click",this.onClick))},mDa=function(a){g.Re(a,function c(){var d=this,
e,f,h,l,m;
return g.za(c,function(n){if(1==n.o)return e=d.api.getVideoData(),g.ra(n,I4(d,e),2);f=n.u;if(!f)return n["return"]();h=f[0];d.o=h;g.H(d.element,"show-video-thumbnail-button");l=new g.T({D:"div",J:"ytp-impression-link-header",V:"Autres contenus YouTube"});l.aa(d.element);m=new g.T({D:"div",J:"ytp-impression-link-content",L:[{D:"div",J:"ytp-impression-link-metadata",L:[{D:"div",J:"ytp-impression-link-title",V:h.title},{D:"div",J:"ytp-impression-link-views-and-duration",V:"{{views_and_duration}}"}]},
{D:"div",J:"ytp-impression-link-thumbnail"}]});m.aa(d.element);J4(d,m,h);K4(d,m,h);d.show();n.o=0})})},nDa=function(a){g.Re(a,function c(){var d=this,e,f,h;
return g.za(c,function(l){if(1==l.o)return g.ra(l,qDa(d),2);e=l.u;if(!e)return l["return"]();d.o=e;g.H(d.element,"show-channel-thumbnail-button");f=new g.T({D:"div",J:"ytp-impression-link-header",V:"Autres contenus YouTube"});f.aa(d.element);h=new g.T({D:"div",J:"ytp-impression-link-content",L:[{D:"div",J:"ytp-impression-link-metadata",L:[{D:"div",J:"ytp-impression-link-title",V:e.Om},{D:"div",J:"ytp-impression-link-subscribers",V:e.expandedSubtitle}]},{D:"div",J:"ytp-impression-link-thumbnail"}]});
h.aa(d.element);J4(d,h,e);d.show();l.o=0})})},oDa=function(a){g.Re(a,function c(){var d=this,e,f,h,l,m,n,p,r,u,w,y;
return g.za(c,function(z){if(1==z.o)return e=d,f=d.api.getVideoData(),g.ra(z,I4(d,f),2);h=z.u;if(!h)return z["return"]();l=h[0];d.o=l;g.H(d.element,"show-occlusion-video-thumbnail-button");m=new g.T({D:"div",J:"ytp-impression-link-header",V:"Autres contenus YouTube"});m.aa(d.element);n=new g.T({D:"div",J:"ytp-impression-link-content",L:[{D:"div",J:"ytp-impression-link-metadata",L:[{D:"div",J:"ytp-impression-link-title",V:l.title},{D:"div",J:"ytp-impression-link-author",V:l.author},{D:"div",J:"ytp-impression-link-views",
V:"{{views}}"}]},{D:"div",J:"ytp-impression-link-thumbnail-and-duration",L:[{D:"div",J:"ytp-impression-link-thumbnail"},{D:"div",J:"ytp-impression-link-duration",V:"{{duration}}"}]}]});n.aa(d.element);J4(d,n,l);K4(d,n,l);p=new g.T({D:"button",da:["ytp-button","ytp-impression-link-close"],L:[{D:"div",da:["ytp-impression-link-close-icon"],L:[NCa()]}]});p.aa(d.element);p.ma("click",function(D){e.hide();g.wN(e.api,e.element,!1);D.stopPropagation()},d);
r=function(D){!g.q(D).next().value.isIntersecting&&e.element&&e.show()};
try{u={threshold:.8},w=new IntersectionObserver(r,u),y=document.querySelector("body"),w.observe(y)}catch(D){g.L(D)}z.o=0})})},pDa=function(a){g.Re(a,function c(){var d=this,e,f,h,l,m,n;
return g.za(c,function(p){if(1==p.o)return e=d,f=d.api.getVideoData(),g.ra(p,I4(d,f),2);h=p.u;if(!h)return p["return"]();l=h[0];d.o=l;g.H(d.element,"show-video-thumbnail-expanding-button");d.K(d.element,"mouseenter",function(){g.H(e.element,"show-expanded-metadata");g.xn(e.element,"show-collapsed-metadata")});
d.K(d.element,"mouseleave",function(){g.xn(e.element,"show-expanded-metadata");g.H(e.element,"show-collapsed-metadata")});
m=new g.T({D:"div",J:"ytp-impression-link-header",V:"Plus de vid\u00e9os"});m.aa(d.element);n=new g.T({D:"div",J:"ytp-impression-link-content",L:[{D:"div",J:"ytp-impression-link-metadata",L:[{D:"div",J:"ytp-impression-link-title",V:l.title},{D:"div",J:"ytp-impression-link-views-and-duration",V:"{{views_and_duration}}"}]},{D:"div",J:"ytp-impression-link-thumbnail"}]});n.aa(d.element);J4(d,n,l);K4(d,n,l);d.show();p.o=0})})},J4=function(a,b,c){a=g.P(a.api.O().experiments,"embeds_impression_link_channel_thumbnail")?
c.Md:c.Lc();
b.ba("ytp-impression-link-thumbnail").style.backgroundImage=a?"url("+a+")":""},K4=function(a,b,c){a=a.api.O();
var d="";c.xa?d="En direct":c.lengthSeconds&&(d=g.bD(c.lengthSeconds));c=c.shortViewCount?c.shortViewCount:"";var e="";c&&d?e=c+" \u2022 "+d:c?e=c:d&&(e=d);g.P(a.experiments,"embeds_impression_link_occlusion")?b.update({views:c,duration:d}):b.update({views_and_duration:e})},rDa=function(a,b){return g.Re(a,function d(){var e,f,h,l;
return g.za(d,function(m){if(1==m.o)return e=g.KK(),f={isEmbedPreview:!0,videoId:b.videoId},h=g.xK(g.yL),g.ra(m,g.AK(e,f,h),2);l=m.u;return m["return"](l)})})},I4=function(a,b){return g.Re(a,function d(){var e=this,f,h,l,m,n,p;
return g.za(d,function(r){if(1==r.o)return f=e,g.ra(r,rDa(e,b),2);h=r.u;if(!h)return r["return"](null);l=e.api.O();m=new g.AB(l,{raw_watch_next_response:h});n=g.Ie(m.suggestions,function(u){return u&&!u.list});
return(p=g.Mc(n,function(u){u=g.dD(l,u);g.E(f,u);return u}))&&0!==p.length?r["return"](p):r["return"](null)})})},qDa=function(a){return g.Re(a,function c(){var d=this,e,f,h,l,m,n,p;
return g.za(c,function(r){if(1==r.o)return e=d.api.getVideoData(),g.ra(r,I4(d,e),2);if(3!=r.o){f=r.u;if(!f)return r["return"](null);h=e.Om;l=f.filter(function(u){return null!==u&&u.author!==h});
return(m=l[0])?g.ra(r,rDa(d,m),3):r["return"](null)}n=r.u;if(!n)return r["return"](null);p=new g.AB(d.api.O(),{raw_watch_next_response:n});return r["return"](p)})})},L4=function(a){g.T.call(this,{D:"div",
J:"ytp-muted-autoplay-endscreen-overlay",L:[{D:"div",J:"ytp-muted-autoplay-end-panel",L:[{D:"div",J:"ytp-muted-autoplay-end-text",V:"{{text}}"}]}]});this.api=a;this.u=this.ba("ytp-muted-autoplay-end-panel");this.o=new g.zO(this.api);g.E(this,this.o);this.o.aa(this.u,0);g.uN(this.api,this.element,this,52428);this.K(this.api,"presentingplayerstatechange",this.A);this.ma("click",this.onClick);this.hide()},M4=function(a){g.T.call(this,{D:"div",
J:"ytp-muted-autoplay-overlay",L:[{D:"div",J:"ytp-muted-autoplay-bottom-buttons",L:[{D:"button",da:["ytp-muted-autoplay-equalizer","ytp-button"],L:[{D:"div",da:["ytp-muted-autoplay-equalizer-icon"],L:[{D:"svg",P:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},L:[{D:"g",P:{fill:"#fff"},L:[{D:"rect",J:"ytp-equalizer-bar-left",P:{height:"9",width:"4",x:"1",y:"7"}},{D:"rect",J:"ytp-equalizer-bar-middle",P:{height:"14",width:"4",x:"6",y:"2"}},{D:"rect",J:"ytp-equalizer-bar-right",P:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ba("ytp-muted-autoplay-bottom-buttons");this.ba("ytp-muted-autoplay-equalizer");this.A=new g.G(this.u,4E3,this);g.uN(a,this.element,this,39306);this.K(a,"presentingplayerstatechange",this.o);this.K(a,"onMutedAutoplayStarts",this.o);this.ma("click",this.onClick);this.hide()},N4=function(a,b){g.T.call(this,{D:"div",
J:"ytp-pause-overlay"});var c=this;this.api=a;this.I=b;this.animationDelay=1E3;this.u=new g.Xr(this);this.F=new g.ZN(this,1E3,!1,100);this.B=[];this.o=[];this.C=0;this.G=!1;this.T=0;this.title=new g.T({D:"h2",J:"ytp-related-title",V:"{{title}}"});this.previous=new g.T({D:"button",da:["ytp-button","ytp-previous"],P:{"aria-label":"Afficher les suggestions de vid\u00e9os pr\u00e9c\u00e9dentes"},L:[g.cO()]});this.S=new C4(function(m){c.suggestions.element.scrollLeft=-m});
this.U=this.tileWidth=this.A=0;this.next=new g.T({D:"button",da:["ytp-button","ytp-next"],P:{"aria-label":"Afficher plus de suggestions de vid\u00e9os"},L:[g.dO()]});this.expandButton=new g.T({D:"button",da:["ytp-button","ytp-expand"],V:"Plus de vid\u00e9os"});g.E(this,this.u);g.E(this,this.F);var d=a.O();"0"===d.controlsType&&g.H(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.N=d.u;g.E(this,this.title);this.title.aa(this.element);this.suggestions=new g.T({D:"div",J:"ytp-suggestions"});
g.E(this,this.suggestions);this.suggestions.aa(this.element);g.E(this,this.previous);this.previous.aa(this.element);this.previous.ma("click",this.WH,this);var e=g.sx||g.ng?{style:"will-change: opacity"}:void 0;g.E(this,this.S);for(var f=0;16>f;f++){var h=new g.T({D:"a",J:"ytp-suggestion-link",P:{href:"{{link}}",target:d.F,"aria-label":"{{aria_label}}"},L:[{D:"div",J:"ytp-suggestion-image"},{D:"div",J:"ytp-suggestion-overlay",P:e,L:[{D:"div",J:"ytp-suggestion-title",V:"{{title}}"},{D:"div",J:"ytp-suggestion-author",
V:"{{author_and_views}}"},{D:"div",P:{"data-is-live":"{{is_live}}"},J:"ytp-suggestion-duration",V:"{{duration}}"}]}]});g.E(this,h);h.aa(this.suggestions.element);var l=h.ba("ytp-suggestion-link");g.kg(l,"transitionDelay",f/20+"s");this.u.K(l,"click",g.Ua(this.XH,f));this.B.push(h)}g.E(this,this.next);this.next.aa(this.element);this.next.ma("click",this.VH,this);d=new g.T({D:"button",da:["ytp-button","ytp-collapse"],P:{"aria-label":'Masquer la section "Plus de vid\u00e9os"'},L:[NCa()]});g.E(this,d);
d.aa(this.element);d.ma("click",this.IK,this);g.E(this,this.expandButton);this.expandButton.aa(this.element);this.expandButton.ma("click",this.JK,this);this.u.K(this.api,"appresize",this.Na);this.u.K(this.api,"fullscreentoggled",this.Ih);this.u.K(this.api,"presentingplayerstatechange",this.Cb);this.u.K(this.api,"videodatachange",this.Ma);this.Na(g.bN(this.api).getPlayerSize());this.Ma()},O4=function(a){var b=a.I.Mc()?32:16;
b=a.U/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.A;var c=a.C-a.o.length*(a.tileWidth+8);g.J(a.element,"ytp-scroll-min",0<=b);g.J(a.element,"ytp-scroll-max",b<=c)},sDa=function(a){for(var b=0;b<a.o.length;b++){var c=a.o[b].Aa(),d=a.B[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.Mya.test(c.title)&&(d.ba("ytp-suggestion-title").dir="rtl");g.Mya.test(e)&&(d.ba("ytp-suggestion-author").dir="rtl");var f=void 0;c.xa?f="En direct":f=c.lengthSeconds?g.bD(c.lengthSeconds):"";var h=c.mi();g.Hy(a.api.O())&&(h=g.Gd(h,g.jJ({},"emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.tm||null,is_live:c.xa});d=d.ba("ytp-suggestion-image");c=c.Lc();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.B.length;b++)a.B[b].element.style.display=
"none";O4(a)},P4=function(a){var b=a.O();
g.T.call(this,{D:"a",da:["ytp-watermark","yt-uix-sessionlink"],P:{target:b.F,href:"{{url}}","aria-label":g.aD("Regarder sur $WEBSITE",{WEBSITE:g.bz(b)}),"data-sessionlink":"feature=player-watermark"},L:[s4()]});this.api=a;this.o=null;this.u=!1;this.state=g.zD(a);g.uN(a,this.element,this,76758);this.K(a,"videodatachange",this.lx);this.K(a,"videodatachange",this.Ma);this.K(a,"presentingplayerstatechange",this.bI);this.K(a,"appresize",this.Na);b=this.state;this.state!==b&&(this.state=b);this.lx();this.Ma();
this.Na(g.bN(a).getPlayerSize())},Q4=function(a){g.EN.call(this,a);
this.H=a;this.u=new g.Xr(this);g.E(this,this.u);this.load()};g.k=t4.prototype;g.k.mO=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Lk.set(this.Az(c),[new OCa(a)])};
g.k.rz=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.Az(b);return this.Lk.has(b)?this.Lk.get(b):void 0};
g.k.hG=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.rz(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.Lk.clear()};
g.k.Az=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.t(u4,t4);u4.prototype.A=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.hG(c);e&&(d=e.By);this.mO(d+a,c)};v4.prototype.C=function(){var a=this.u.values();a=[].concat(g.la(a)).filter(function(b){return b.Lk.size});
a.length&&this.N.flush(a);QCa(a);this.A=0;this.o.enabled&&this.o.stop()};
v4.prototype.F=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.u.has(a)||this.u.set(a,new u4(a,c))};
v4.prototype.I=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.M.apply(this,[a,1].concat(g.la(c)))};
v4.prototype.M=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.G.has(a)?void 0:this.u.get(a))&&e instanceof u4&&(e.A(b,d),this.o.enabled||this.o.start(),this.A++,this.A>=this.B&&this.C())};g.Wa(TCa,g.xf);g.Wa(UCa,g.xf);var SCa=[1];g.Wa(YCa,g.xf);g.Wa($Ca,g.xf);g.Wa(aDa,g.xf);g.Wa(bDa,g.xf);g.Wa(x4,g.xf);g.Wa(z4,g.xf);g.Wa(B4,g.xf);var XCa=[3,6,4],ZCa=[[1,2]],cDa=[1],y4=[[1,2,3]],A4=[[1,2,3]];PCa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.mo("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new YCa;c=g.Ff(c,1,b.B);for(var d=b,e=[],f=0;f<d.o.length;f++)e.push(d.o[f].nT);c=g.Ff(c,3,e||[]);d=[];e=[];f=g.q(b.Lk.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.u;for(var m=b.rz(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.By;var u=new B4;switch(l){case 3:r4(u,1,A4[0],Number(r));
break;case 2:r4(u,2,A4[0],Number(r))}n.push(u)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new x4;n.o||(n.o={});r=p?p.de:p;n.o[2]=p;n=g.Ff(n,2,r);p=h;r=[];u=b;for(var w=[],y=0;y<u.o.length;y++)w.push(u.o[y].oT);u=w;for(w=0;w<u.length;w++){y=u[w];var z=p[w],D=new z4;switch(y){case 3:r4(D,1,y4[0],String(z));break;case 2:r4(D,2,y4[0],Number(z));break;case 1:r4(D,3,y4[0],"true"==z)}r.push(D)}MCa(n,1,r);d.push(n)}}MCa(c,4,d);d=b=new g.qf;e=g.Df(c,1);null!=e&&m4(d,1,e);e=g.Df(c,5);null!=e&&KCa(d,5,e);e=p4(c,$Ca,
2);null!=e&&n4(d,2,e,fDa);e=g.Df(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)m4(d,3,e[f]);e=g.Df(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)KCa(d,6,e[f]);e=q4(c,x4,4);0<e.length&&o4(d,4,e,iDa);b=g.rf(b);b={serializedIncrementBatch:g.mf(b)};g.lr("streamzIncremented",b)}}};var w4;g.t(C4,g.C);C4.prototype.start=function(a,b,c){this.from=a;this.o=b;this.duration=c;this.startTime=(0,g.M)();this.next()};
C4.prototype.next=function(){var a=(0,g.M)()-this.startTime;var b=this.u;a=LCa(b,a/this.duration);if(0==a)b=b.C;else if(1==a)b=b.I;else{var c=g.$d(b.C,b.F,a),d=g.$d(b.F,b.G,a);b=g.$d(b.G,b.I,a);c=g.$d(c,d,a);d=g.$d(d,b,a);b=g.$d(c,d,a)}b=g.Yd(b,0,1);this.callback((this.o-this.from)*b+this.from);1>b&&this.delay.start()};g.t(D4,g.T);g.k=D4.prototype;g.k.hide=function(){this.G=!0;g.T.prototype.hide.call(this)};
g.k.show=function(){this.G=!1;g.T.prototype.show.call(this)};
g.k.isHidden=function(){return this.G};
g.k.YH=function(){this.scrollTo(this.A-this.C)};
g.k.ZH=function(){this.scrollTo(this.A+this.C)};
g.k.aI=function(a,b){var c=this.o[a],d=c.tc;if(g.GO(b,this.api,this.N,d||void 0)){var e=c.Aa().videoId;c=c.getPlaylistId();g.LU(this.api.app,e,d,c,void 0,void 0)}};
g.k.resize=function(a,b){var c=this.api.O(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.o.length,this.B.length);if(150>=Math.min(a.width,a.height)||0===h||!c.Ea)this.hide();else{var l;if(e){var m=l=28;this.u=16}else this.u=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.u;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.u)),m=l/m-this.u,r=Math.floor(m/
d));50>m||g.dN(this.api)?this.hide():this.show();for(d=0;d<h;d++){var u=this.B[d],w=u.ba("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";u.ba("ytp-suggestion-title").style.width=m+"px";u.ba("ytp-suggestion-author").style.width=m+"px";u=u.ba("ytp-suggestion-duration");u.style.display=u&&100>m?"none":""}h=e+n+p+4;this.F=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.C=l;this.A=0;this.suggestions.element.scrollLeft=-0;E4(this)}};
g.k.Ma=function(){var a=this,b=this.api.getVideoData(),c=this.api.O();this.N=b.fc?!1:c.u;if(b.suggestions){var d=g.Ie(b.suggestions,function(e){return e&&!e.list});
this.o=g.Mc(d,function(e){e=g.dD(c,e);g.E(a,e);return e})}else this.o.length=0;
jDa(this);b.fc?this.title.update({title:g.aD("Autres vid\u00e9os de $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"Plus de vid\u00e9os sur YouTube"})};
g.k.scrollTo=function(a){a=g.Yd(a,this.C-this.o.length*(this.tileWidth+this.u),0);this.S.start(this.A,a,this.animationDelay);this.A=a;E4(this)};g.t(F4,g.LO);F4.prototype.show=function(){g.LO.prototype.show.call(this);kDa(this,g.bN(this.api).getPlayerSize())};
F4.prototype.resize=function(a){g.LO.prototype.resize.call(this,a);kDa(this,a);g.J(this.element,"related-on-error-overlay-visible",!this.o.isHidden())};
F4.prototype.u=function(a){g.LO.prototype.u.call(this,a);var b=this.api.getVideoData();if(g.P(this.api.O().experiments,"embed_parse_error_renderer_killswitch")||!b.Yy&&!b.playerErrorMessageRenderer){var c;a.lh&&(b.Ep?G4(b.Ep)?c=g.Sz(b.Ep):c=g.MO(g.S(b.Ep)):c=g.MO(a.lh),this.Mb(c,"subreason"))}else(a=b.Yy)?lDa(this,a):b.playerErrorMessageRenderer&&lDa(this,b.playerErrorMessageRenderer)};g.t(H4,g.T);H4.prototype.tf=function(){g.zD(this.api).isCued()||(this.hide(),g.wN(this.api,this.element,!1))};
H4.prototype.B=function(){this.u=!0;this.hide();g.wN(this.api,this.element,!1)};
H4.prototype.onClick=function(a){var b=this.api.O(),c;g.P(b.experiments,"embeds_impression_link_channel_thumbnail")?c=g.rz(b)+this.o.eh:g.P(b.experiments,"embeds_impression_link_call_to_action")?c=this.api.getVideoUrl():c=this.o.mi();b=this.api.O();b=g.P(b.experiments,"embeds_impression_link_call_to_action")?"emb_imp_woyt":g.P(b.experiments,"embeds_impression_link_video_thumbnail")?"emb_imp_rv":g.P(b.experiments,"embeds_impression_link_channel_thumbnail")?"emb_imp_rc":g.P(b.experiments,"embeds_impression_link_occlusion")?
"emb_imp_rv_oc":"emb_imp_rv_ex";c=g.Gd(c,g.jJ({},b));g.HO(c,this.api,a);g.vN(this.api,this.element)};
H4.prototype.show=function(){g.zD(this.api).isCued()&&!this.u&&(g.T.prototype.show.call(this),g.xN(this.api,this.element)&&g.wN(this.api,this.element,!0))};g.t(L4,g.T);L4.prototype.A=function(){var a=g.zD(this.api),b=this.api.getVideoData();g.P(this.api.O().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.W(a,2)&&!this.Qa?(this.show(),this.o.show(),a=this.api.getVideoData(),this.ra("text",a.FB),g.J(this.element,"ytp-muted-autoplay-show-end-panel",!0),g.wN(this.api,this.element,this.Qa),this.api.oa("onMutedAutoplayEnds")):this.hide())};
L4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.Qd();this.api.loadVideoById(a.videoId,b);g.vN(this.api,this.element);this.hide()};g.t(M4,g.T);M4.prototype.o=function(){var a=g.zD(this.api),b=this.api.getVideoData();g.P(this.api.O().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.W(a,2)?this.Qa||(g.T.prototype.show.call(this),this.A.start(),g.wN(this.api,this.element,this.Qa)):this.hide()};
M4.prototype.u=function(){g.J(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
M4.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;a.Qd();this.api.loadVideoById(a.videoId,b);g.vN(this.api,this.element)};g.t(N4,g.T);g.k=N4.prototype;g.k.hide=function(){g.xn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.T.prototype.hide.call(this)};
g.k.IK=function(){this.G=!0;g.xn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.JK=function(){this.G=!1;g.H(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.VH=function(){this.scrollTo(this.A-this.C)};
g.k.WH=function(){this.scrollTo(this.A+this.C)};
g.k.XH=function(a,b){if(1E3>(0,g.M)()-this.T)g.bp(b),document.activeElement.blur();else{var c=this.o[a],d=c.tc;if(g.GO(b,this.api,this.N,d||void 0)){var e=c.Aa().videoId;c=c.getPlaylistId();g.LU(this.api.app,e,d,c,void 0,void 0)}}};
g.k.Ih=function(){this.Na(g.bN(this.api).getPlayerSize())};
g.k.Cb=function(a){if(!(g.W(a.state,1)||g.W(a.state,16)||g.W(a.state,32))){var b=!g.P(this.api.O().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.W(a.state,2048);!g.W(a.state,4)||g.W(a.state,2)||b?this.F.hide():this.o.length&&(this.G||(g.H(this.api.getRootNode(),"ytp-expand-pause-overlay"),O4(this)),this.F.show(),this.T=(0,g.M)())}};
g.k.Na=function(a){var b=16/9,c=this.I.Mc();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.B.length;d++){var e=this.B[d].ba("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.U=b;this.C=a;this.A=0;this.suggestions.element.scrollLeft=-0;O4(this)};
g.k.Ma=function(){var a=this,b=this.api.O(),c=this.api.getVideoData();this.N=c.fc?!1:b.u;if(c.suggestions){var d=g.Ie(c.suggestions,function(e){return e&&!e.list});
this.o=g.Mc(d,function(e){e=g.dD(b,e);g.E(a,e);return e})}else this.o.length=0;
sDa(this);c.fc?this.title.update({title:g.aD("Autres vid\u00e9os de $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"Plus de vid\u00e9os"})};
g.k.scrollTo=function(a){a=g.Yd(a,this.C-this.o.length*(this.tileWidth+8),0);this.S.start(this.A,a,this.animationDelay);this.A=a;O4(this)};g.t(P4,g.T);g.k=P4.prototype;g.k.lx=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).fc,c=this.api.O();a=(a.mutedAutoplay||c.za&&!g.W(this.state,2))&&!(b&&c.ca);g.nD(this,a);g.wN(this.api,this.element,a)};
g.k.bI=function(a){a=a.state;this.state!==a&&(this.state=a);this.lx()};
g.k.Ma=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.ra("url",a);this.o||(this.o=this.ma("click",this.onClick))}else this.o&&(this.ra("url",null),this.rb(this.o),this.o=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.cD(a),!1,!0,!0);g.HO(b,this.api,a);g.vN(this.api,this.element)};
g.k.Na=function(a){if((a=480>a.width)&&!this.u||!a&&this.u){var b=new g.T(s4()),c=this.ba("ytp-watermark");g.J(c,"ytp-watermark-small",a);g.Fe(c);b.aa(c);this.u=a}};g.t(Q4,g.EN);g.k=Q4.prototype;g.k.hg=function(){return!1};
g.k.create=function(){var a=this.H.O(),b=g.TM(this.H);a.Ea&&(this.C=new N4(this.H,b),g.E(this,this.C),g.sN(this.H,this.C.element,4));g.P(a.experiments,"embeds_enable_muted_autoplay")&&(this.o=new M4(this.H),g.E(this,this.o),g.sN(this.H,this.o.element,4),this.B=new L4(this.H),g.E(this,this.B),g.sN(this.H,this.B.element,4));if(a.za||this.o)this.watermark=new P4(this.H),g.E(this,this.watermark),g.sN(this.H,this.watermark.element,7);g.P(a.experiments,"embeds_impression_link")&&(this.A=new H4(this.H,b),
g.E(this,this.A),g.sN(this.H,this.A.element,7));this.u.K(this.H,"appresize",this.Na);this.u.K(this.H,"presentingplayerstatechange",this.tf);this.u.K(this.H,"videodatachange",this.QO);this.u.K(this.H,"onMutedAutoplayStarts",this.LL);this.Oc(g.zD(this.H));g.pN(this.player,"embed");g.P(a.experiments,"enable_cookie_reissue_iframe")&&a.wc&&!g.sq("__Secure-3PAPISID")&&((new RCa).o.I("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe"),a=g.De("IFRAME"),a.src="/signin?go=true",a.style.display=
"none",document.body.appendChild(a))};
g.k.Na=function(){var a=g.bN(this.H).getPlayerSize();this.zc&&this.zc.resize(a)};
g.k.tf=function(a){this.Oc(a.state)};
g.k.Oc=function(a){g.W(a,128)?(this.zc||(this.zc=new F4(this.H),g.E(this,this.zc),g.sN(this.H,this.zc.element,4)),this.zc.u(a.stateData),this.zc.show(),g.H(this.H.getRootNode(),"ytp-embed-error")):this.zc&&(this.zc.dispose(),this.zc=null,g.xn(this.H.getRootNode(),"ytp-embed-error"))};
g.k.LL=function(){this.H.getVideoData().mutedAutoplay&&this.o&&this.watermark&&this.watermark.aa(this.o.bottomButtons,0)};
g.k.QO=function(){var a=this.H.getVideoData();this.watermark&&this.o&&!a.mutedAutoplay&&g.Ke(this.o.element,this.watermark.element)&&g.sN(this.H,this.watermark.element,7)};g.PN.embed=Q4;})(_yt_player);