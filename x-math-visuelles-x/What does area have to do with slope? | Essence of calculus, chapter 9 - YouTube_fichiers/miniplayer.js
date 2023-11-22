(function(g){var window=this;var y4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Ouvrir la page de la vid\u00e9o";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Agrandir");g.X.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.za("click",this.onClick,this);this.Ba("title",g.cO(a,e,"i"));g.Ri(this,g.AO(b.Qb(),this.element))},z4=function(a){g.X.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.bi=!1;this.player=a;this.N(a,"minimized",this.Ug);this.N(a,"onStateChange",this.wQ)},A4=function(a){g.GN.call(this,a);
this.i=new z4(this.player);this.i.hide();g.wN(this.player,this.i.element,4);a.pe()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(y4,g.X);y4.prototype.onClick=function(){this.G.ya("onExpandMiniplayer")};g.u(z4,g.X);g.k=z4.prototype;
g.k.show=function(){this.de=new g.hn(this.Fr,null,this);this.de.start();if(!this.bi){this.tooltip=new g.AR(this.player,this);g.I(this,this.tooltip);g.wN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Sb=new g.vO(this.player);g.I(this,this.Sb);this.zj=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.I(this,this.zj);this.zj.fa(this.element);this.N(this.zj.element,"click",this.NF);var a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.GL()]});
g.I(this,a);a.fa(this.zj.element);this.N(a.element,"click",this.oj);a=new y4(this.player,this);g.I(this,a);a.fa(this.zj.element);g.T(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.mR(this.player,this),g.I(this,a),a.fa(this.zj.element),a=new g.RP(this.player,this),g.I(this,a),a.fa(this.zj.element));this.Tm=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.I(this,this.Tm);this.Tm.fa(this.zj.element);this.N(this.Tm.element,"click",this.NF);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});
g.I(this,b);b.fa(this.Tm.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.I(this,a);a.fa(this.Tm.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.I(this,c);c.fa(this.Tm.element);this.gG=new g.WP(this.player,this,!1);g.I(this,this.gG);this.gG.fa(b.element);b=new g.TP(this.player,this);g.I(this,b);b.fa(a.element);this.nextButton=new g.WP(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.fa(c.element);this.Ai=new g.nR(this.player,this);g.I(this,
this.Ai);this.Ai.fa(this.zj.element);this.cd=new g.aQ(this.player,this);g.I(this,this.cd);g.wN(this.player,this.cd.element,4);this.Au=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.I(this,this.Au);g.wN(this.player,this.Au.element,4);a=new g.X({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fermer"},S:[g.GL()]});g.I(this,a);a.fa(this.Au.element);this.N(a.element,"click",this.oj);a=new g.X({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fermer"},
S:[g.LL()]});g.I(this,a);a.fa(this.Au.element);this.N(a.element,"click",this.IO);this.N(this.player,"presentingplayerstatechange",this.Yb);this.N(this.player,"appresize",this.Ua);this.N(this.player,"fullscreentoggled",this.Ua);this.Ua();this.bi=!0}0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.cd.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.de&&(this.de.dispose(),this.de=void 0);g.X.prototype.hide.call(this);this.player.pe()||(this.bi&&this.cd.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.de&&(this.de.dispose(),this.de=void 0);g.X.prototype.da.call(this)};
g.k.oj=function(){this.player.stopVideo();this.player.ya("onCloseMiniplayer")};
g.k.IO=function(){this.player.playVideo()};
g.k.NF=function(a){if(a.target===this.zj.element||a.target===this.Tm.element)g.T(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.JK(this.player.Ya())?this.player.pauseVideo():this.player.playVideo():this.player.ya("onExpandMiniplayer")};
g.k.Ug=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.pe())};
g.k.re=function(){this.cd.Cb();this.Ai.Cb()};
g.k.Fr=function(){this.re();this.de&&this.de.start()};
g.k.Yb=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.Ua=function(){g.lQ(this.cd,0,this.player.La().getPlayerSize().width,!1);g.cQ(this.cd)};
g.k.wQ=function(a){this.player.pe()&&(0===a?this.hide():this.show())};
g.k.Qb=function(){return this.tooltip};
g.k.Ae=function(){return!1};
g.k.Oe=function(){return!1};
g.k.ci=function(){return!1};
g.k.Yz=function(){};
g.k.Xm=function(){};
g.k.Eq=function(){};
g.k.gn=function(){return null};
g.k.Yi=function(){return new g.cg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.lp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Kg(a);if(b){c=g.qn(b,"ytp-prev-button")||g.qn(b,"ytp-next-button");var m=g.qn(b,"ytp-play-button"),n=g.qn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ig(b,this.element),h=b.x,f=b.y-12):n&&(h=g.qn(b,"ytp-miniplayer-button-top-left"),f=g.Ig(b,this.element),b=g.Kg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.La().getPlayerSize().width;e=f+(e||0);l=g.ee(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Ak=function(){};
g.k.bk=function(){return!1};g.u(A4,g.GN);A4.prototype.create=function(){};
A4.prototype.wi=function(){return!1};
A4.prototype.load=function(){this.player.hideControls();this.i.show()};
A4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.MN.miniplayer=A4;})(_yt_player);
