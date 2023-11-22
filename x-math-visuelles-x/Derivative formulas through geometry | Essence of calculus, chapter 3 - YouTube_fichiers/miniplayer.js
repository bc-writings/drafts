(function(g){var window=this;var s4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Ouvrir la page de la vid\u00e9o";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Agrandir");g.X.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.ya("click",this.onClick,this);this.Aa("title",g.gO(a,e,"i"));g.Ri(this,g.EO(b.Nb(),this.element))},t4=function(a){g.X.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.ai=!1;this.player=a;this.N(a,"minimized",this.wh);this.N(a,"onStateChange",this.wQ)},u4=function(a){g.KN.call(this,a);
this.i=new t4(this.player);this.i.hide();g.AN(this.player,this.i.element,4);a.ne()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(s4,g.X);s4.prototype.onClick=function(){this.G.xa("onExpandMiniplayer")};g.u(t4,g.X);g.k=t4.prototype;
g.k.show=function(){this.ce=new g.hn(this.Er,null,this);this.ce.start();if(!this.ai){this.tooltip=new g.ER(this.player,this);g.J(this,this.tooltip);g.AN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Pb=new g.zO(this.player);g.J(this,this.Pb);this.zj=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.J(this,this.zj);this.zj.fa(this.element);this.N(this.zj.element,"click",this.MF);var a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.AL()]});
g.J(this,a);a.fa(this.zj.element);this.N(a.element,"click",this.oj);a=new s4(this.player,this);g.J(this,a);a.fa(this.zj.element);g.T(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.qR(this.player,this),g.J(this,a),a.fa(this.zj.element),a=new g.VP(this.player,this),g.J(this,a),a.fa(this.zj.element));this.Qm=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.J(this,this.Qm);this.Qm.fa(this.zj.element);this.N(this.Qm.element,"click",this.MF);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});
g.J(this,b);b.fa(this.Qm.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.J(this,a);a.fa(this.Qm.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.J(this,c);c.fa(this.Qm.element);this.gG=new g.$P(this.player,this,!1);g.J(this,this.gG);this.gG.fa(b.element);b=new g.XP(this.player,this);g.J(this,b);b.fa(a.element);this.nextButton=new g.$P(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.fa(c.element);this.yi=new g.rR(this.player,this);g.J(this,
this.yi);this.yi.fa(this.zj.element);this.Yc=new g.eQ(this.player,this);g.J(this,this.Yc);g.AN(this.player,this.Yc.element,4);this.yu=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.J(this,this.yu);g.AN(this.player,this.yu.element,4);a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.AL()]});g.J(this,a);a.fa(this.yu.element);this.N(a.element,"click",this.oj);a=new g.X({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},
S:[g.FL()]});g.J(this,a);a.fa(this.yu.element);this.N(a.element,"click",this.GO);this.N(this.player,"presentingplayerstatechange",this.Xb);this.N(this.player,"appresize",this.Sa);this.N(this.player,"fullscreentoggled",this.Sa);this.Sa();this.ai=!0}0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Yc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.X.prototype.hide.call(this);this.player.ne()||(this.ai&&this.Yc.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.X.prototype.da.call(this)};
g.k.oj=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.GO=function(){this.player.playVideo()};
g.k.MF=function(a){if(a.target===this.zj.element||a.target===this.Qm.element)g.T(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.DK(this.player.Wa())?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.wh=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.ne())};
g.k.qe=function(){this.Yc.Bb();this.yi.Bb()};
g.k.Er=function(){this.qe();this.ce&&this.ce.start()};
g.k.Xb=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.Sa=function(){g.pQ(this.Yc,0,this.player.La().getPlayerSize().width,!1);g.gQ(this.Yc)};
g.k.wQ=function(a){this.player.ne()&&(0===a?this.hide():this.show())};
g.k.Nb=function(){return this.tooltip};
g.k.ye=function(){return!1};
g.k.Me=function(){return!1};
g.k.bi=function(){return!1};
g.k.Wz=function(){};
g.k.Tm=function(){};
g.k.Dq=function(){};
g.k.cn=function(){return null};
g.k.Yi=function(){return new g.cg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.lp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Kg(a);if(b){c=g.qn(b,"ytp-prev-button")||g.qn(b,"ytp-next-button");var m=g.qn(b,"ytp-play-button"),n=g.qn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ig(b,this.element),h=b.x,f=b.y-12):n&&(h=g.qn(b,"ytp-miniplayer-button-top-left"),f=g.Ig(b,this.element),b=g.Kg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.La().getPlayerSize().width;e=f+(e||0);l=g.ee(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.yk=function(){};
g.k.Yj=function(){return!1};g.u(u4,g.KN);u4.prototype.create=function(){};
u4.prototype.ti=function(){return!1};
u4.prototype.load=function(){this.player.hideControls();this.i.show()};
u4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.QN.miniplayer=u4;})(_yt_player);
