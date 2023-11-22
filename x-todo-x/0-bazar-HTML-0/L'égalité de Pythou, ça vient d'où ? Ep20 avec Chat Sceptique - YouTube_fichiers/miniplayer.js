(function(g){var window=this;'use strict';var o6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.ag=!1;this.player=a;this.N(a,"minimized",this.fg);this.N(a,"onStateChange",this.RE)},p6=function(a){g.rN.call(this,a);
this.i=new o6(this.player);this.i.hide();g.hN(this.player,this.i.element,4);a.Ce()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(o6,g.V);g.k=o6.prototype;
g.k.dD=function(){this.tooltip=new g.OQ(this.player,this);g.J(this,this.tooltip);g.hN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.pc=new g.mO(this.player);g.J(this,this.pc);this.qg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.qg);this.qg.Ba(this.element);this.N(this.qg.element,"click",this.Zy);var a=new g.V({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.rL()]});g.J(this,a);a.Ba(this.qg.element);this.N(a.element,"click",this.wi);
a=new g.O1(this.player,this);g.J(this,a);a.Ba(this.qg.element);this.Wo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Wo);this.Wo.Ba(this.qg.element);this.N(this.Wo.element,"click",this.Zy);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,b);b.Ba(this.Wo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ba(this.Wo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.Ba(this.Wo.element);this.kL=new g.LP(this.player,
this,!1);g.J(this,this.kL);this.kL.Ba(b.element);b=new g.IP(this.player,this);g.J(this,b);b.Ba(a.element);this.nextButton=new g.LP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ba(c.element);this.vg=new g.BQ(this.player,this);g.J(this,this.vg);this.vg.Ba(this.qg.element);this.Jc=new g.QP(this.player,this);g.J(this,this.Jc);g.hN(this.player,this.Jc.element,4);this.Ny=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.Ny);g.hN(this.player,this.Ny.element,4);a=new g.V({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.rL()]});g.J(this,a);a.Ba(this.Ny.element);this.N(a.element,"click",this.wi);a=new g.V({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.wL()]});g.J(this,a);a.Ba(this.Ny.element);this.N(a.element,"click",this.ZT);this.N(this.player,"presentingplayerstatechange",this.Ic);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.zd=new g.Cq(this.Pp,null,this);this.zd.start();this.ag||(this.dD(),this.ag=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.V.prototype.hide.call(this);this.player.Ce()||(this.ag&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.zd&&(this.zd.dispose(),this.zd=void 0);g.V.prototype.va.call(this)};
g.k.wi=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.ZT=function(){this.player.playVideo()};
g.k.Zy=function(a){if(a.target===this.qg.element||a.target===this.Wo.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.uK(this.player.ub())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.fg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Ce())};
g.k.jd=function(){this.Jc.Rb();this.vg.Rb()};
g.k.Pp=function(){this.jd();this.zd&&this.zd.start()};
g.k.Ic=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.aQ(this.Jc,0,this.player.Za().getPlayerSize().width,!1);g.SP(this.Jc)};
g.k.RE=function(a){this.player.Ce()&&(0===a?this.hide():this.show())};
g.k.hc=function(){return this.tooltip};
g.k.Me=function(){return!1};
g.k.jf=function(){return!1};
g.k.di=function(){return!1};
g.k.Hz=function(){};
g.k.Mm=function(){};
g.k.rr=function(){};
g.k.cn=function(){return null};
g.k.dj=function(){return new g.rl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Wp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ql(a);if(b){c=g.Mq(b,"ytp-prev-button")||g.Mq(b,"ytp-next-button");var m=g.Mq(b,"ytp-play-button"),n=g.Mq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ol(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Mq(b,"ytp-miniplayer-button-top-left"),f=g.Ol(b,this.element),b=g.Ql(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Za().getPlayerSize().width;e=f+(e||0);l=g.Of(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Qk=function(){};
g.k.pk=function(){return!1};g.w(p6,g.rN);p6.prototype.create=function(){};
p6.prototype.Hi=function(){return!1};
p6.prototype.load=function(){this.player.hideControls();this.i.show()};
p6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.CN.miniplayer=p6;})(_yt_player);
