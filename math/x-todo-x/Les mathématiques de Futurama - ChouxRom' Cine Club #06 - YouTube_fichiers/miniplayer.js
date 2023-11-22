(function(g){var window=this;'use strict';var B6=function(a){g.X.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.oe=!1;this.player=a;this.T(a,"minimized",this.xg);this.T(a,"onStateChange",this.BG)},C6=function(a){g.LM.call(this,a);
this.i=new B6(this.player);this.i.hide();g.yM(this.player,this.i.element,4);a.Je()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(B6,g.X);g.k=B6.prototype;
g.k.zE=function(){this.tooltip=new g.lQ(this.player,this);g.H(this,this.tooltip);g.yM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.wc=new g.EN(this.player);g.H(this,this.wc);this.Cg=new g.X({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Cg);this.Cg.Ea(this.element);this.T(this.Cg.element,"click",this.mA);var a=new g.X({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.FK()]});g.H(this,a);a.Ea(this.Cg.element);this.T(a.element,"click",this.Fi);
a=new g.U1(this.player,this);g.H(this,a);a.Ea(this.Cg.element);this.vp=new g.X({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.vp);this.vp.Ea(this.Cg.element);this.T(this.vp.element,"click",this.mA);var b=new g.X({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ea(this.vp.element);a=new g.X({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ea(this.vp.element);var c=new g.X({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ea(this.vp.element);this.hN=new g.cP(this.player,
this,!1);g.H(this,this.hN);this.hN.Ea(b.element);b=new g.aP(this.player,this);g.H(this,b);b.Ea(a.element);this.nextButton=new g.cP(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ea(c.element);this.Fg=new g.XP(this.player,this);g.H(this,this.Fg);this.Fg.Ea(this.Cg.element);this.Hc=new g.jP(this.player,this);g.H(this,this.Hc);g.yM(this.player,this.Hc.element,4);this.aA=new g.X({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.aA);g.yM(this.player,this.aA.element,4);a=new g.X({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.FK()]});g.H(this,a);a.Ea(this.aA.element);this.T(a.element,"click",this.Fi);a=new g.X({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Fermer"},U:[g.KK()]});g.H(this,a);a.Ea(this.aA.element);this.T(a.element,"click",this.vV);this.T(this.player,"presentingplayerstatechange",this.Nc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Ld=new g.Yq(this.kq,null,this);this.Ld.start();this.oe||(this.zE(),this.oe=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Hc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ld&&(this.Ld.dispose(),this.Ld=void 0);g.X.prototype.hide.call(this);this.player.Je()||(this.oe&&this.Hc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Ld&&(this.Ld.dispose(),this.Ld=void 0);g.X.prototype.xa.call(this)};
g.k.Fi=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.vV=function(){this.player.playVideo()};
g.k.mA=function(a){if(a.target===this.Cg.element||a.target===this.vp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.IJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.xg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Je())};
g.k.rd=function(){this.Hc.Xb();this.Fg.Xb()};
g.k.kq=function(){this.rd();this.Ld&&this.Ld.start()};
g.k.Nc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.wP(this.Hc,0,this.player.eb().getPlayerSize().width,!1);g.kP(this.Hc)};
g.k.BG=function(a){this.player.Je()&&(0===a?this.hide():this.show())};
g.k.hc=function(){return this.tooltip};
g.k.Se=function(){return!1};
g.k.uf=function(){return!1};
g.k.xi=function(){return!1};
g.k.ZA=function(){};
g.k.hn=function(){};
g.k.ds=function(){};
g.k.Fn=function(){return null};
g.k.nj=function(){return new g.bm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.uq=function(a,b,c,d,e){var f=0,h=d=0,l=g.um(a);if(b){c=g.ir(b,"ytp-prev-button")||g.ir(b,"ytp-next-button");var m=g.ir(b,"ytp-play-button"),n=g.ir(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.sm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.ir(b,"ytp-miniplayer-button-top-left"),f=g.sm(b,this.element),b=g.um(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.dg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Zk=function(){};
g.k.Ak=function(){return!1};g.w(C6,g.LM);C6.prototype.create=function(){};
C6.prototype.Pi=function(){return!1};
C6.prototype.load=function(){this.player.hideControls();this.i.show()};
C6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.KM("miniplayer",C6);})(_yt_player);
