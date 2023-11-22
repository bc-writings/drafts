(function(g){var window=this;'use strict';var C6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ue=!1;this.player=a;this.T(a,"minimized",this.ag);this.T(a,"onStateChange",this.PG)},D6=function(a){g.FM.call(this,a);
this.i=new C6(this.player);this.i.hide();g.sM(this.player,this.i.element,4);a.Pe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(C6,g.W);g.k=C6.prototype;
g.k.JE=function(){this.tooltip=new g.hQ(this.player,this);g.I(this,this.tooltip);g.sM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.yN(this.player);g.I(this,this.zc);this.Fg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Fg);this.Fg.Ea(this.element);this.T(this.Fg.element,"click",this.yA);var a=new g.W({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.wK()]});g.I(this,a);a.Ea(this.Fg.element);this.T(a.element,"click",this.Li);
a=new g.R1(this.player,this);g.I(this,a);a.Ea(this.Fg.element);this.Hp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Hp);this.Hp.Ea(this.Fg.element);this.T(this.Hp.element,"click",this.yA);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Ea(this.Hp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ea(this.Hp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Ea(this.Hp.element);this.wN=new g.YO(this.player,
this,!1);g.I(this,this.wN);this.wN.Ea(b.element);b=new g.WO(this.player,this);g.I(this,b);b.Ea(a.element);this.nextButton=new g.YO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ea(c.element);this.Ig=new g.TP(this.player,this);g.I(this,this.Ig);this.Ig.Ea(this.Fg.element);this.Lc=new g.fP(this.player,this);g.I(this,this.Lc);g.sM(this.player,this.Lc.element,4);this.mA=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.mA);g.sM(this.player,this.mA.element,4);a=new g.W({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.wK()]});g.I(this,a);a.Ea(this.mA.element);this.T(a.element,"click",this.Li);a=new g.W({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.BK()]});g.I(this,a);a.Ea(this.mA.element);this.T(a.element,"click",this.UV);this.T(this.player,"presentingplayerstatechange",this.Rc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Pd=new g.Ar(this.wq,null,this);this.Pd.start();this.ue||(this.JE(),this.ue=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Lc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.W.prototype.hide.call(this);this.player.Pe()||(this.ue&&this.Lc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Pd&&(this.Pd.dispose(),this.Pd=void 0);g.W.prototype.ya.call(this)};
g.k.Li=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.UV=function(){this.player.playVideo()};
g.k.yA=function(a){if(a.target===this.Fg.element||a.target===this.Hp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.zJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.ag=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Pe())};
g.k.xd=function(){this.Lc.Xb();this.Ig.Xb()};
g.k.wq=function(){this.xd();this.Pd&&this.Pd.start()};
g.k.Rc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.sP(this.Lc,0,this.player.eb().getPlayerSize().width,!1);g.gP(this.Lc)};
g.k.PG=function(a){this.player.Pe()&&(0===a?this.hide():this.show())};
g.k.lc=function(){return this.tooltip};
g.k.We=function(){return!1};
g.k.yf=function(){return!1};
g.k.Ei=function(){return!1};
g.k.lB=function(){};
g.k.Dn=function(){};
g.k.As=function(){};
g.k.Rn=function(){return null};
g.k.yj=function(){return new g.Bm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Dq=function(a,b,c,d,e){var f=0,h=d=0,l=g.Um(a);if(b){c=g.Ir(b,"ytp-prev-button")||g.Ir(b,"ytp-next-button");var m=g.Ir(b,"ytp-play-button"),n=g.Ir(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Sm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Ir(b,"ytp-miniplayer-button-top-left"),f=g.Sm(b,this.element),b=g.Um(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.qg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.rl=function(){};
g.k.Hk=function(){return!1};g.w(D6,g.FM);D6.prototype.create=function(){};
D6.prototype.Wi=function(){return!1};
D6.prototype.load=function(){this.player.hideControls();this.i.show()};
D6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.EM("miniplayer",D6);})(_yt_player);
