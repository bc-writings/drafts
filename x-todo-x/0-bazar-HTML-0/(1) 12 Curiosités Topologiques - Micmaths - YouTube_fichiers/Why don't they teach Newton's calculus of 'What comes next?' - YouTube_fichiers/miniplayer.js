(function(g){var window=this;'use strict';var C6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ge=!1;this.player=a;this.T(a,"minimized",this.ag);this.T(a,"onStateChange",this.OG)},D6=function(a){g.EM.call(this,a);
this.i=new C6(this.player);this.i.hide();g.rM(this.player,this.i.element,4);a.Pe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(C6,g.V);g.k=C6.prototype;
g.k.IE=function(){this.tooltip=new g.gQ(this.player,this);g.I(this,this.tooltip);g.rM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.xN(this.player);g.I(this,this.zc);this.Fg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Fg);this.Fg.Ea(this.element);this.T(this.Fg.element,"click",this.vA);var a=new g.V({G:"button",Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.uK()]});g.I(this,a);a.Ea(this.Fg.element);this.T(a.element,"click",this.Li);
a=new g.Q1(this.player,this);g.I(this,a);a.Ea(this.Fg.element);this.Ip=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Ip);this.Ip.Ea(this.Fg.element);this.T(this.Ip.element,"click",this.vA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Ea(this.Ip.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ea(this.Ip.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Ea(this.Ip.element);this.wN=new g.XO(this.player,
this,!1);g.I(this,this.wN);this.wN.Ea(b.element);b=new g.VO(this.player,this);g.I(this,b);b.Ea(a.element);this.nextButton=new g.XO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ea(c.element);this.Ig=new g.SP(this.player,this);g.I(this,this.Ig);this.Ig.Ea(this.Fg.element);this.Lc=new g.eP(this.player,this);g.I(this,this.Lc);g.rM(this.player,this.Lc.element,4);this.jA=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.jA);g.rM(this.player,this.jA.element,4);a=new g.V({G:"button",
Ja:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.uK()]});g.I(this,a);a.Ea(this.jA.element);this.T(a.element,"click",this.Li);a=new g.V({G:"button",Ja:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.zK()]});g.I(this,a);a.Ea(this.jA.element);this.T(a.element,"click",this.UV);this.T(this.player,"presentingplayerstatechange",this.Rc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Pd=new g.fs(this.xq,null,this);this.Pd.start();this.ge||(this.IE(),this.ge=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Lc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.hide.call(this);this.player.Pe()||(this.ge&&this.Lc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.V.prototype.ya.call(this)};
g.k.Li=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.UV=function(){this.player.playVideo()};
g.k.vA=function(a){if(a.target===this.Fg.element||a.target===this.Ip.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.xJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.ag=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Pe())};
g.k.xd=function(){this.Lc.Xb();this.Ig.Xb()};
g.k.xq=function(){this.xd();this.Pd&&this.Pd.start()};
g.k.Rc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.rP(this.Lc,0,this.player.eb().getPlayerSize().width,!1);g.fP(this.Lc)};
g.k.OG=function(a){this.player.Pe()&&(0===a?this.hide():this.show())};
g.k.lc=function(){return this.tooltip};
g.k.We=function(){return!1};
g.k.yf=function(){return!1};
g.k.Ei=function(){return!1};
g.k.iB=function(){};
g.k.Dn=function(){};
g.k.As=function(){};
g.k.Rn=function(){return null};
g.k.zj=function(){return new g.Wm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Eq=function(a,b,c,d,e){var f=0,h=d=0,l=g.pn(a);if(b){c=g.ns(b,"ytp-prev-button")||g.ns(b,"ytp-next-button");var m=g.ns(b,"ytp-play-button"),n=g.ns(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.nn(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ns(b,"ytp-miniplayer-button-top-left"),f=g.nn(b,this.element),b=g.pn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.pg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.rl=function(){};
g.k.Hk=function(){return!1};g.w(D6,g.EM);D6.prototype.create=function(){};
D6.prototype.Wi=function(){return!1};
D6.prototype.load=function(){this.player.hideControls();this.i.show()};
D6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.DM("miniplayer",D6);})(_yt_player);
