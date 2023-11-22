(function(g){var window=this;'use strict';var B4=function(a){g.U.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Xf=!1;this.player=a;this.N(a,"minimized",this.eg);this.N(a,"onStateChange",this.wC)},C4=function(a){g.fM.call(this,a);
this.i=new B4(this.player);this.i.hide();g.TL(this.player,this.i.element,4);a.Fe()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(B4,g.U);g.k=B4.prototype;
g.k.TA=function(){this.tooltip=new g.EP(this.player,this);g.F(this,this.tooltip);g.TL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.kc=new g.aN(this.player);g.F(this,this.kc);this.pg=new g.U({D:"div",K:"ytp-miniplayer-scrim"});g.F(this,this.pg);this.pg.Aa(this.element);this.N(this.pg.element,"click",this.Uw);var a=new g.U({D:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.hK()]});g.F(this,a);a.Aa(this.pg.element);this.N(a.element,"click",this.Oh);
a=new g.g0(this.player,this);g.F(this,a);a.Aa(this.pg.element);this.Pn=new g.U({D:"div",K:"ytp-miniplayer-controls"});g.F(this,this.Pn);this.Pn.Aa(this.pg.element);this.N(this.Pn.element,"click",this.Uw);var b=new g.U({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,b);b.Aa(this.Pn.element);a=new g.U({D:"div",K:"ytp-miniplayer-play-button-container"});g.F(this,a);a.Aa(this.Pn.element);var c=new g.U({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,c);c.Aa(this.Pn.element);this.GI=new g.BO(this.player,
this,!1);g.F(this,this.GI);this.GI.Aa(b.element);b=new g.yO(this.player,this);g.F(this,b);b.Aa(a.element);this.nextButton=new g.BO(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.Aa(c.element);this.rg=new g.rP(this.player,this);g.F(this,this.rg);this.rg.Aa(this.pg.element);this.Ec=new g.GO(this.player,this);g.F(this,this.Ec);g.TL(this.player,this.Ec.element,4);this.Hw=new g.U({D:"div",K:"ytp-miniplayer-buttons"});g.F(this,this.Hw);g.TL(this.player,this.Hw.element,4);a=new g.U({D:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.hK()]});g.F(this,a);a.Aa(this.Hw.element);this.N(a.element,"click",this.Oh);a=new g.U({D:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.mK()]});g.F(this,a);a.Aa(this.Hw.element);this.N(a.element,"click",this.fR);this.N(this.player,"presentingplayerstatechange",this.Dc);this.N(this.player,"appresize",this.qb);this.N(this.player,"fullscreentoggled",this.qb);this.qb()};
g.k.show=function(){this.rd=new g.cn(this.Lo,null,this);this.rd.start();this.Xf||(this.TA(),this.Xf=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.rd&&(this.rd.dispose(),this.rd=void 0);g.U.prototype.hide.call(this);this.player.Fe()||(this.Xf&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.rd&&(this.rd.dispose(),this.rd=void 0);g.U.prototype.va.call(this)};
g.k.Oh=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.fR=function(){this.player.playVideo()};
g.k.Uw=function(a){if(a.target===this.pg.element||a.target===this.Pn.element)g.R(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.kJ(this.player.rb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.eg=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Fe())};
g.k.Jc=function(){this.Ec.Tb();this.rg.Tb()};
g.k.Lo=function(){this.Jc();this.rd&&this.rd.start()};
g.k.Dc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.qb=function(){g.RO(this.Ec,0,this.player.Xa().getPlayerSize().width,!1);g.IO(this.Ec)};
g.k.wC=function(a){this.player.Fe()&&(0===a?this.hide():this.show())};
g.k.ac=function(){return this.tooltip};
g.k.ue=function(){return!1};
g.k.He=function(){return!1};
g.k.Jh=function(){return!1};
g.k.vx=function(){};
g.k.Sl=function(){};
g.k.aq=function(){};
g.k.hm=function(){return null};
g.k.Ai=function(){return new g.ag(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Uo=function(a,b,c,d,e){var f=0,h=d=0,l=g.yg(a);if(b){c=g.pn(b,"ytp-prev-button")||g.pn(b,"ytp-next-button");var m=g.pn(b,"ytp-play-button"),n=g.pn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.wg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.pn(b,"ytp-miniplayer-button-top-left"),f=g.wg(b,this.element),b=g.yg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.hk=function(){};
g.k.Hj=function(){return!1};g.v(C4,g.fM);C4.prototype.create=function(){};
C4.prototype.Xh=function(){return!1};
C4.prototype.load=function(){this.player.hideControls();this.i.show()};
C4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.qM.miniplayer=C4;})(_yt_player);
