(function(g){var window=this;'use strict';var o6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.fg=!1;this.player=a;this.N(a,"minimized",this.pg);this.N(a,"onStateChange",this.eF)},p6=function(a){g.fN.call(this,a);
this.i=new o6(this.player);this.i.hide();g.VM(this.player,this.i.element,4);a.Ee()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(o6,g.V);g.k=o6.prototype;
g.k.rD=function(){this.tooltip=new g.BQ(this.player,this);g.J(this,this.tooltip);g.VM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.qc=new g.aO(this.player);g.J(this,this.qc);this.yg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.yg);this.yg.Ba(this.element);this.N(this.yg.element,"click",this.jz);var a=new g.V({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Fermer"},S:[g.gL()]});g.J(this,a);a.Ba(this.yg.element);this.N(a.element,"click",this.zi);
a=new g.M1(this.player,this);g.J(this,a);a.Ba(this.yg.element);this.Zo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Zo);this.Zo.Ba(this.yg.element);this.N(this.Zo.element,"click",this.jz);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ba(this.Zo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ba(this.Zo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ba(this.Zo.element);this.wL=new g.yP(this.player,
this,!1);g.J(this,this.wL);this.wL.Ba(b.element);b=new g.vP(this.player,this);g.J(this,b);b.Ba(a.element);this.nextButton=new g.yP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ba(c.element);this.Bg=new g.oQ(this.player,this);g.J(this,this.Bg);this.Bg.Ba(this.yg.element);this.Kc=new g.DP(this.player,this);g.J(this,this.Kc);g.VM(this.player,this.Kc.element,4);this.Vy=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.Vy);g.VM(this.player,this.Vy.element,4);a=new g.V({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],V:{"aria-label":"Fermer"},S:[g.gL()]});g.J(this,a);a.Ba(this.Vy.element);this.N(a.element,"click",this.zi);a=new g.V({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],V:{"aria-label":"Fermer"},S:[g.lL()]});g.J(this,a);a.Ba(this.Vy.element);this.N(a.element,"click",this.kU);this.N(this.player,"presentingplayerstatechange",this.Jc);this.N(this.player,"appresize",this.ub);this.N(this.player,"fullscreentoggled",this.ub);this.ub()};
g.k.show=function(){this.zd=new g.Bq(this.Rp,null,this);this.zd.start();this.fg||(this.rD(),this.fg=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.V.prototype.hide.call(this);this.player.Ee()||(this.fg&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.V.prototype.va.call(this)};
g.k.zi=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.kU=function(){this.player.playVideo()};
g.k.jz=function(a){if(a.target===this.yg.element||a.target===this.Zo.element)g.T(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.jK(this.player.vb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.pg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Ee())};
g.k.jd=function(){this.Kc.Sb();this.Bg.Sb()};
g.k.Rp=function(){this.jd();this.zd&&this.zd.start()};
g.k.Jc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.ub=function(){g.OP(this.Kc,0,this.player.Za().getPlayerSize().width,!1);g.FP(this.Kc)};
g.k.eF=function(a){this.player.Ee()&&(0===a?this.hide():this.show())};
g.k.fc=function(){return this.tooltip};
g.k.Ne=function(){return!1};
g.k.lf=function(){return!1};
g.k.gi=function(){return!1};
g.k.Qz=function(){};
g.k.Qm=function(){};
g.k.zr=function(){};
g.k.jn=function(){return null};
g.k.hj=function(){return new g.ol(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Zp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Kl(a);if(b){c=g.Lq(b,"ytp-prev-button")||g.Lq(b,"ytp-next-button");var m=g.Lq(b,"ytp-play-button"),n=g.Lq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Il(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Lq(b,"ytp-miniplayer-button-top-left"),f=g.Il(b,this.element),b=g.Kl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Of(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Uk=function(){};
g.k.xk=function(){return!1};g.w(p6,g.fN);p6.prototype.create=function(){};
p6.prototype.Ki=function(){return!1};
p6.prototype.load=function(){this.player.hideControls();this.i.show()};
p6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.qN.miniplayer=p6;})(_yt_player);
