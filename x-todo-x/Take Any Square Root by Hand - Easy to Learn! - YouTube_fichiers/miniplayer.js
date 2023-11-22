(function(g){var window=this;'use strict';var L6=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.qe=!1;this.player=a;this.T(a,"minimized",this.eg);this.T(a,"onStateChange",this.rH)},M6=function(a){g.sM.call(this,a);
this.i=new L6(this.player);this.i.hide();g.eM(this.player,this.i.element,4);a.Te()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(L6,g.V);g.k=L6.prototype;
g.k.hF=function(){this.tooltip=new g.hQ(this.player,this);g.H(this,this.tooltip);g.eM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Bc=new g.lN(this.player);g.H(this,this.Bc);this.Ig=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Ig);this.Ig.Ea(this.element);this.T(this.Ig.element,"click",this.MA);var a=new g.V({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},V:[g.eK()]});g.H(this,a);a.Ea(this.Ig.element);this.T(a.element,"click",this.Mi);
a=new g.X1(this.player,this);g.H(this,a);a.Ea(this.Ig.element);this.Qp=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.Qp);this.Qp.Ea(this.Ig.element);this.T(this.Qp.element,"click",this.MA);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ea(this.Qp.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ea(this.Qp.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ea(this.Qp.element);this.cO=new g.KO(this.player,
this,!1);g.H(this,this.cO);this.cO.Ea(b.element);b=new g.IO(this.player,this);g.H(this,b);b.Ea(a.element);this.nextButton=new g.KO(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ea(c.element);this.Lg=new g.UP(this.player,this);g.H(this,this.Lg);this.Lg.Ea(this.Ig.element);this.Kc=new g.SO(this.player,this);g.H(this,this.Kc);g.eM(this.player,this.Kc.element,4);this.CA=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.CA);g.eM(this.player,this.CA.element,4);a=new g.V({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},V:[g.eK()]});g.H(this,a);a.Ea(this.CA.element);this.T(a.element,"click",this.Mi);a=new g.V({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Fermer"},V:[g.lK()]});g.H(this,a);a.Ea(this.CA.element);this.T(a.element,"click",this.OW);this.T(this.player,"presentingplayerstatechange",this.Tc);this.T(this.player,"appresize",this.Ab);this.T(this.player,"fullscreentoggled",this.Ab);this.Ab()};
g.k.show=function(){this.Td=new g.hr(this.Dq,null,this);this.Td.start();this.qe||(this.hF(),this.qe=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Td&&(this.Td.dispose(),this.Td=void 0);g.V.prototype.hide.call(this);this.player.Te()||(this.qe&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Td&&(this.Td.dispose(),this.Td=void 0);g.V.prototype.xa.call(this)};
g.k.Mi=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.OW=function(){this.player.playVideo()};
g.k.MA=function(a){if(a.target===this.Ig.element||a.target===this.Qp.element)this.player.U().N("kevlar_miniplayer_play_pause_on_scrim")?g.fJ(this.player.Bb())?this.player.pauseVideo():this.player.playVideo():this.player.Qa("onExpandMiniplayer")};
g.k.eg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Te())};
g.k.qd=function(){this.Kc.Sb();this.Lg.Sb()};
g.k.Dq=function(){this.qd();this.Td&&this.Td.start()};
g.k.Tc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Ab=function(){g.fP(this.Kc,0,this.player.fb().getPlayerSize().width,!1);g.TO(this.Kc)};
g.k.rH=function(a){this.player.Te()&&(0===a?this.hide():this.show())};
g.k.kc=function(){return this.tooltip};
g.k.Ze=function(){return!1};
g.k.Cf=function(){return!1};
g.k.Fi=function(){return!1};
g.k.Ix=function(){};
g.k.In=function(){};
g.k.Is=function(){};
g.k.Xn=function(){return null};
g.k.lw=function(){return null};
g.k.Ej=function(){return new g.en(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Kq=function(a,b,c,d,e){var f=0,h=d=0,l=g.Cn(a);if(b){c=g.pr(b,"ytp-prev-button")||g.pr(b,"ytp-next-button");var m=g.pr(b,"ytp-play-button"),n=g.pr(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.An(b,this.element),h=b.x,f=b.y-12):n&&(h=g.pr(b,"ytp-miniplayer-button-top-left"),f=g.An(b,this.element),b=g.Cn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.Dg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Cl=function(){};
g.k.Rk=function(){return!1};g.v(M6,g.sM);M6.prototype.create=function(){};
M6.prototype.aj=function(){return!1};
M6.prototype.load=function(){this.player.hideControls();this.i.show()};
M6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.rM("miniplayer",M6);})(_yt_player);
