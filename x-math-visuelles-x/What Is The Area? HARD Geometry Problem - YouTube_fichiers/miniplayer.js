(function(g){var window=this;var Q5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={G:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},R:[{G:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",U:{transform:"translate(-1.000000, -3.000000)"},R:[{G:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{G:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Ouvrir la page de la vid\u00e9o";a.T().aa("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={G:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},R:[{G:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},R:[{G:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Agrandir");g.V.call(this,{G:"button",la:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},R:[d]});this.J=a;this.wa("click",this.onClick,this);this.ya("title",g.HU(a,e,"i"));g.eg(this,g.fV(b.Rb(),this.element))},R5=function(a){g.V.call(this,{G:"div",
L:"ytp-miniplayer-ui"});this.Mh=!1;this.player=a;this.N(a,"minimized",this.lj);this.N(a,"onStateChange",this.lS)},S5=function(a){g.LS.call(this,a);
this.u=new R5(this.player);this.u.hide();g.CP(this.player,this.u.element,4);a.app.visibility.u&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(Q5,g.V);Q5.prototype.onClick=function(){this.J.xa("onExpandMiniplayer")};g.u(R5,g.V);g.k=R5.prototype;
g.k.show=function(){this.Zd=new g.gn(this.zr,null,this);this.Zd.start();if(!this.Mh){this.tooltip=new g.fY(this.player,this);g.D(this,this.tooltip);g.CP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Tb=new g.$U(this.player);g.D(this,this.Tb);this.Jl=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.D(this,this.Jl);this.Jl.ga(this.element);this.N(this.Jl.element,"click",this.uG);var a=new g.V({G:"button",la:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},R:[g.YN()]});
g.D(this,a);a.ga(this.Jl.element);this.N(a.element,"click",this.No);a=new Q5(this.player,this);g.D(this,a);a.ga(this.Jl.element);this.mm=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.D(this,this.mm);this.mm.ga(this.Jl.element);this.N(this.mm.element,"click",this.uG);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.D(this,b);b.ga(this.mm.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.D(this,a);a.ga(this.mm.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});
g.D(this,c);c.ga(this.mm.element);this.UG=new g.zW(this.player,this,!1);g.D(this,this.UG);this.UG.ga(b.element);b=new g.wW(this.player,this);g.D(this,b);b.ga(a.element);this.nextButton=new g.zW(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.ga(c.element);this.ri=new g.VX(this.player,this);g.D(this,this.ri);this.ri.ga(this.Jl.element);this.rd=new g.kX(this.player,this);g.D(this,this.rd);g.CP(this.player,this.rd.element,4);this.Vu=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.D(this,
this.Vu);g.CP(this.player,this.Vu.element,4);a=new g.V({G:"button",la:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},R:[g.YN()]});g.D(this,a);a.ga(this.Vu.element);this.N(a.element,"click",this.No);a=new g.V({G:"button",la:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},R:[g.cO()]});g.D(this,a);a.ga(this.Vu.element);this.N(a.element,"click",this.tQ);this.N(this.player,"presentingplayerstatechange",this.lc);this.N(this.player,"appresize",this.Va);this.N(this.player,
"fullscreentoggled",this.Va);this.Va();this.Mh=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.rd.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.V.prototype.hide.call(this);this.player.app.visibility.u||(this.Mh&&this.rd.hide(),this.player.loadModule("annotations_module"))};
g.k.ba=function(){this.Zd&&(this.Zd.dispose(),this.Zd=void 0);g.V.prototype.ba.call(this)};
g.k.No=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.tQ=function(){this.player.playVideo()};
g.k.uG=function(a){if(a.target===this.Jl.element||a.target===this.mm.element)g.Q(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.IM(g.wK(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.lj=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.u)};
g.k.ie=function(){this.rd.sc();this.ri.sc()};
g.k.zr=function(){this.ie();this.Zd&&this.Zd.start()};
g.k.lc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Va=function(){this.rd.setPosition(0,g.dG(this.player).getPlayerSize().width,!1);g.mX(this.rd)};
g.k.lS=function(a){this.player.app.visibility.u&&(0===a?this.hide():this.show())};
g.k.Rb=function(){return this.tooltip};
g.k.ge=function(){return!1};
g.k.Ke=function(){return!1};
g.k.Qh=function(){return!1};
g.k.DA=function(){};
g.k.om=function(){};
g.k.mq=function(){};
g.k.Sk=function(){return null};
g.k.Qi=function(){return new g.jg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Xo=function(a,b,c,d,e){var f=0,h=d=0,l=g.Kg(a);if(b){c=g.qn(b,"ytp-prev-button")||g.qn(b,"ytp-next-button");var m=g.qn(b,"ytp-play-button"),n=g.qn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ig(b,this.element),h=b.x,f=b.y-12):n&&(h=g.qn(b,"ytp-miniplayer-button-top-left"),f=g.Ig(b,this.element),b=g.Kg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.dG(this.player).getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.wk=function(){};
g.k.Kj=function(){return!1};g.u(S5,g.LS);S5.prototype.create=function(){};
S5.prototype.li=function(){return!1};
S5.prototype.load=function(){this.player.hideControls();this.u.show()};
S5.prototype.unload=function(){this.player.showControls();this.u.hide()};g.tU.miniplayer=S5;})(_yt_player);
