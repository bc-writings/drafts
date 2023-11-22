(function(g){var window=this;var N5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={G:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{G:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{G:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{G:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{G:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Ouvrir la page de la vid\u00e9o";a.T().ca("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={G:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{G:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{G:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{G:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Agrandir");g.V.call(this,{G:"button",ia:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.J=a;this.ua("click",this.onClick,this);this.wa("title",g.EX(a,e,"i"));g.dg(this,g.cY(b.Jb(),this.element))},O5=function(a){g.V.call(this,{G:"div",
L:"ytp-miniplayer-ui"});this.hh=!1;this.player=a;this.R(a,"minimized",this.yi);this.R(a,"onStateChange",this.SQ)},P5=function(a){g.pS.call(this,a);
this.u=new O5(this.player);this.u.hide();g.oP(this.player,this.u.element,4);a.app.visibility.u&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(N5,g.V);N5.prototype.onClick=function(){this.J.va("onExpandMiniplayer")};g.u(O5,g.V);g.k=O5.prototype;
g.k.show=function(){this.Cd=new g.qn(this.Op,null,this);this.Cd.start();if(!this.hh){this.tooltip=new g.r_(this.player,this);g.C(this,this.tooltip);g.oP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Kb=new g.XX(this.player);g.C(this,this.Kb);this.Jk=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.C(this,this.Jk);this.Jk.fa(this.element);this.R(this.Jk.element,"click",this.NE);var a=new g.V({G:"button",ia:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.pN()]});
g.C(this,a);a.fa(this.Jk.element);this.R(a.element,"click",this.xn);a=new N5(this.player,this);g.C(this,a);a.fa(this.Jk.element);this.jl=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.C(this,this.jl);this.jl.fa(this.Jk.element);this.R(this.jl.element,"click",this.NE);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.C(this,b);b.fa(this.jl.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.C(this,a);a.fa(this.jl.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});
g.C(this,c);c.fa(this.jl.element);this.lF=new g.sZ(this.player,this,!1);g.C(this,this.lF);this.lF.fa(b.element);b=new g.pZ(this.player,this);g.C(this,b);b.fa(a.element);this.nextButton=new g.sZ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.fa(c.element);this.Ih=new g.g_(this.player,this);g.C(this,this.Ih);this.Ih.fa(this.Jk.element);this.Oc=new g.wZ(this.player,this);g.C(this,this.Oc);g.oP(this.player,this.Oc.element,4);this.it=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.C(this,
this.it);g.oP(this.player,this.it.element,4);a=new g.V({G:"button",ia:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.pN()]});g.C(this,a);a.fa(this.it.element);this.R(a.element,"click",this.xn);a=new g.V({G:"button",ia:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.CN()]});g.C(this,a);a.fa(this.it.element);this.R(a.element,"click",this.XO);this.R(this.player,"presentingplayerstatechange",this.Vb);this.R(this.player,"appresize",this.Ra);this.R(this.player,
"fullscreentoggled",this.Ra);this.Ra();this.hh=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Oc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Cd&&(this.Cd.dispose(),this.Cd=void 0);g.V.prototype.hide.call(this);this.player.app.visibility.u||(this.hh&&this.Oc.hide(),this.player.loadModule("annotations_module"))};
g.k.aa=function(){this.Cd&&(this.Cd.dispose(),this.Cd=void 0);g.V.prototype.aa.call(this)};
g.k.xn=function(){this.player.stopVideo();this.player.va("onCloseMiniplayer")};
g.k.XO=function(){this.player.playVideo()};
g.k.NE=function(a){if(a.target===this.Jk.element||a.target===this.jl.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.hL(g.lI(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.va("onExpandMiniplayer")};
g.k.yi=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.u)};
g.k.Vd=function(){this.Oc.Gc();this.Ih.Gc()};
g.k.Op=function(){this.Vd();this.Cd&&this.Cd.start()};
g.k.Vb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Ra=function(){this.Oc.setPosition(0,g.pG(this.player).getPlayerSize().width,!1);g.yZ(this.Oc)};
g.k.SQ=function(a){this.player.app.visibility.u&&(0===a?this.hide():this.show())};
g.k.Jb=function(){return this.tooltip};
g.k.Hd=function(){return!1};
g.k.Lf=function(){return!1};
g.k.kh=function(){return!1};
g.k.Hy=function(){};
g.k.ll=function(){};
g.k.Jo=function(){};
g.k.wl=function(){return null};
g.k.ci=function(){return new g.ig(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.En=function(a,b,c,d,e){var f=0,h=d=0,l=g.Eg(a);if(b){c=g.zn(b,"ytp-prev-button")||g.zn(b,"ytp-next-button");var m=g.zn(b,"ytp-play-button"),n=g.zn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Cg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.zn(b,"ytp-miniplayer-button-top-left"),f=g.Cg(b,this.element),b=g.Eg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.pG(this.player).getPlayerSize().width;e=f+(e||0);l=g.be(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Fj=function(){};
g.k.cj=function(){return!1};g.u(P5,g.pS);P5.prototype.create=function(){};
P5.prototype.Eh=function(){return!1};
P5.prototype.load=function(){this.player.hideControls();this.u.show()};
P5.prototype.unload=function(){this.player.showControls();this.u.hide()};g.qX.miniplayer=P5;})(_yt_player);
