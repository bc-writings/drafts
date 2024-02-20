(function(g){var window=this;'use strict';var J6=function(a){g.W.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.pe=!1;this.player=a;this.S(a,"minimized",this.dg);this.S(a,"onStateChange",this.DH)},K6=function(a){g.tM.call(this,a);
this.i=new J6(this.player);this.i.hide();g.fM(this.player,this.i.element,4);a.Se()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(J6,g.W);g.h=J6.prototype;
g.h.sF=function(){this.tooltip=new g.jQ(this.player,this);g.J(this,this.tooltip);g.fM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ac=new g.mN(this.player);g.J(this,this.Ac);this.Hg=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.Hg);this.Hg.Ca(this.element);this.S(this.Hg.element,"click",this.UA);var a=new g.W({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Fermer"},U:[g.hK()]});g.J(this,a);a.Ca(this.Hg.element);this.S(a.element,"click",this.Pi);
a=new g.$1(this.player,this);g.J(this,a);a.Ca(this.Hg.element);this.Vp=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Vp);this.Vp.Ca(this.Hg.element);this.S(this.Vp.element,"click",this.UA);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ca(this.Vp.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ca(this.Vp.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ca(this.Vp.element);this.oO=new g.LO(this.player,
this,!1);g.J(this,this.oO);this.oO.Ca(b.element);b=new g.JO(this.player,this);g.J(this,b);b.Ca(a.element);this.nextButton=new g.LO(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ca(c.element);this.Kg=new g.WP(this.player,this);g.J(this,this.Kg);this.Kg.Ca(this.Hg.element);this.Jc=new g.UO(this.player,this);g.J(this,this.Jc);g.fM(this.player,this.Jc.element,4);this.KA=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.KA);g.fM(this.player,this.KA.element,4);a=new g.W({D:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Fermer"},U:[g.hK()]});g.J(this,a);a.Ca(this.KA.element);this.S(a.element,"click",this.Pi);a=new g.W({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Fermer"},U:[g.oK()]});g.J(this,a);a.Ca(this.KA.element);this.S(a.element,"click",this.TW);this.S(this.player,"presentingplayerstatechange",this.Sc);this.S(this.player,"appresize",this.yb);this.S(this.player,"fullscreentoggled",this.yb);this.yb()};
g.h.show=function(){this.Sd=new g.xq(this.Gq,null,this);this.Sd.start();this.pe||(this.sF(),this.pe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Sd&&(this.Sd.dispose(),this.Sd=void 0);g.W.prototype.hide.call(this);this.player.Se()||(this.pe&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.h.ra=function(){this.Sd&&(this.Sd.dispose(),this.Sd=void 0);g.W.prototype.ra.call(this)};
g.h.Pi=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.h.TW=function(){this.player.playVideo()};
g.h.UA=function(a){if(a.target===this.Hg.element||a.target===this.Vp.element)this.player.T().L("kevlar_miniplayer_play_pause_on_scrim")?g.iJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.h.dg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Se())};
g.h.Cd=function(){this.Jc.Sb();this.Kg.Sb()};
g.h.Gq=function(){this.Cd();this.Sd&&this.Sd.start()};
g.h.Sc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.yb=function(){g.hP(this.Jc,0,this.player.bb().getPlayerSize().width,!1);g.VO(this.Jc)};
g.h.DH=function(a){this.player.Se()&&(0===a?this.hide():this.show())};
g.h.hc=function(){return this.tooltip};
g.h.Ye=function(){return!1};
g.h.Bf=function(){return!1};
g.h.Gi=function(){return!1};
g.h.Px=function(){};
g.h.Jn=function(){};
g.h.Ks=function(){};
g.h.Yn=function(){return null};
g.h.uw=function(){return null};
g.h.Ej=function(){return new g.$m(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Nq=function(a,b,c,d,e){var f=0,k=d=0,l=g.Dn(a);if(b){c=g.Fq(b,"ytp-prev-button")||g.Fq(b,"ytp-next-button");var m=g.Fq(b,"ytp-play-button"),n=g.Fq(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Bn(b,this.element),k=b.x,f=b.y-12):n&&(k=g.Fq(b,"ytp-miniplayer-button-top-left"),f=g.Bn(b,this.element),b=g.Dn(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Wg(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Cl=function(){};
g.h.Tk=function(){return!1};g.v(K6,g.tM);K6.prototype.create=function(){};
K6.prototype.dj=function(){return!1};
K6.prototype.load=function(){this.player.hideControls();this.i.show()};
K6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.sM("miniplayer",K6);})(_yt_player);
