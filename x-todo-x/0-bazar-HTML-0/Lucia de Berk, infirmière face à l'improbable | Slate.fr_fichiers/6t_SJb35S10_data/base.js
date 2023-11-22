var _yt_player={};(function(g){var window=this;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ea,aaa,ia,ka,la,pa,qa,ra,ta,ua,va,baa,caa,wa,daa,xa,ya,za,eaa,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ja,Na,haa,iaa,Wa,Ya,jaa,kaa,laa,maa,naa,pb,ub,rb,oaa,sb,paa,qaa,Bb,Eb,Lb,Vb,cc,dc,pc,sc,yc,Ic,uaa,xaa,yaa,Qc,Rc,Uc,Xc,zaa,Aaa,Wc,Zc,ed,gd,id,md,od,Daa,qd,ud,wd,xd,yd,zd,Ad,Cd,Fd,Hd,Id,Jd,Faa,Gaa,Kd,Ld,Qd,Sd,Ud,Vd,Jaa,Zd,ae,be,de,Laa,ee,fe,ge,he,je,le,Maa,ie,re,se,oe,ve,ue,Oaa,me,ke,ye,ze,Ae,Ge,Je,Ue,Ve,$e,Ze,Raa,of,mf,nf,qf,Ke,rf,Taa,uf,vf,Uaa,Af,Cf,Ff,Hf,Vaa,Qf,Mf,Of,Df,Kf,Xaa,Tf,Rf,Sf,Vf,Waa,ag,Yaa,Zaa,$aa,
aba,bba,cba,eg,gg,dg,ig,jg,kg,lg,mg,ng,og,pg,qg,rg,dba,wg,sg,zg,Ag,Gg,Ig,Jg,Kg,Lg,eba,Ug,Qg,Vg,Xg,Wg,Yg,Zg,$g,ah,bh,ch,fh,gba,iba,kh,jba,mh,nh,uh,yh,Bh,vh,kba,Jh,lba,mba,Kh,Nh,Oh,Ph,Qh,pba,oba,Rh,Sh,Th,Uh,Vh,Xh,Zh,vba,tba,uba,yba,wba,xba,$h,zba,di,ei,gi,ii,Aba,mi,li,ni,oi,pi,Fba,wi,yi,Hba,Ei,Fi,Jba,Ii,Ji,Ki,Li,Kba,Oi,Pi,Qi,Ri,Ti,Ui,Vi,Wi,Yi,Zi,$i,aj,fj,gj,ij,Oba,hj,kj,mj,lj,Mba,oj,pj,Qba,Rba,rj,sj,wj,tj,xj,zj,Aj,yj,Sba,Gj,Qj,Pj,Vba,Wba,Sj,Vj,Xj,Yj,Zj,Yba,gk,hk,ik,ok,Zba,qk,sk,pk,vk,yk,xk,wk,Ik,Hk,
Ek,bca,aca,Uk,Vk,Yk,$k,cca,eca,kl,fca,ol,nl,hca,pl,ql,ica,ul,jca,kca,sl,lca,wl,xl,yl,mca,Dl,Fl,nca,Gl,Hl,Il,Jl,Kl,Ll,Ml,Ol,Pl,Rl,Sl,Tl,Vl,Wl,Xl,Zl,$l,Nl,am,bm,oca,cm,dm,fm,pca,gm,em,hm,jm,qca,im,km,sca,lm,rca,tca,mm,nm,uca,vca,wca,zca,rm,Aca,Bca,Cca,sm,um,Dca,Eca,Fca,Gca,Hca,wm,vm,xm,ym,Bm,Jca,Ica,Kca,zm,Am,Dm,Mca,Cm,Oca,Pca,Qca,Nm,Pm,Qm,Tca,Tm,Xm,dn,en,bn,Xca,Vca,fn,jn,Zca,gn,mn,on,pn,sn,qn,un,tn,vn,$ca,xn,$f,An,bda,Cn,Dn,En,Gn,cda,Kn,Ln,Mn,On,Sn,Tn,Nn,Vn,Zn,eda,bg,no,lo,fda,ro,qo,to,po,so,hda,uo,
wo,xo,yo,zo,Ao,Bo,Co,Do,ida,Eo,Ho,Io,Go,jda,Jo,Ko,Mo,Oo,kda,Po,To,Ro,No,Uo,Qo,So,Vo,Wo,Xo,lda,Zo,$o,ap,bp,hp,mda,dp,jp,lp,op,np,fp,kp,ip,nda,pp,rp,sp,oda,tp,up,cp,ep,gp,mp,vp,wp,xp,zp,yp,pda,Ap,Bp,Cp,Dp,Ep,qda,Hp,Gp,Jp,Kp,Lp,Mp,Np,Op,Pp,Qp,Rp,Sp,Tp,Up,Vp,Wp,Xp,Yp,Zp,aq,cq,bq,dq,eq,fq,gq,hq,rda,sda,tda,kq,mq,nq,oq,qq,rq,tq,yda,uq,vq,wq,xq,zq,Aq,Bq,Cq,Dq,yq,Ada,Eq,Fq,Gq,Hq,Iq,Bda,Jq,Cda,Lq,Dda,Kq,Mq,Oq,Pq,Qq,Sq,Eda,Tq,Wq,Xq,Yq,Uq,ar,Ip,br,cr,dr,er,fr,$q,gr,hr,ir,jr,kr,lr,mr,or,nr,pr,Gda,qr,rr,sr,tr,
ur,Hda,Ida,Mda,Nda,Jda,Kda,Lda,vr,wr,Oda,yr,zr,Ar,Br,Cr,Pda,Dr,Rda,Fr,Gr,Hr,Sda,Tda,Ir,Jr,Uda,Vda,Wda,Kr,Xda,Lr,Rr,Yda,Zda,Sr,cea,dea,Tr,Ur,eea,Vr,Wr,Xr,fea,gea,Pr,hea,Yr,Zr,as,iea,bs,cs,ds,es,jea,fs,kea,gs,hs,is,js,ks,lea,ls,ms,ns,os,qs,rs,ts,us,vs,ws,mea,ys,zs,xs,As,Bs,Cs,Ds,Es,nea,Js,Fs,oea,pea,qea,Ms,rea,sea,Ns,Os,Ps,Qs,Rs,Ss,Ts,Us,Vs,Xs,Ws,Ys,tea,$s,at,bt,ct,dt,et,ft,gt,uea,Q,ht,jt,kt,lt,Lt,Mt,Qt,Dt,Ht,Tt,$t,ut,tt,bu,Ft,fu,Cea,Dea,Eea,Fea,iu,ju,lu,mu,nu,ou,pu,ku,qu,Gea,tu,uu,vu,wu,xu,zu,Au,Bu,
Cu,Du,Kea,Mea,Lea,Fu,Jea,Iea,Eu,Nea,Iu,Ku,Lu,Ou,Nu,Oea,Qu,Ru,Pea,Tu,Uu,Vu,Xu,Yu,Su,Zu,Wu,av,bv,dv,cv,ev,fv,hv,iv,jv,kv,mv,vv,yv,wv,zv,ov,Uea,Av,lv,Cv,Dv,Vea,Xea,Wea,Ev,Fv,Yea,Gv,Hv,Zea,$ea,afa,bfa,Iv,Jv,cfa,efa,Kv,dfa,Lv,Mv,ffa,Nv,Pv,Qv,Rv,Sv,Tv,Uv,Vv,Xv,Yv,gfa,Zv,jfa,hfa,ifa,kfa,lfa,bw,mfa,nfa,ofa,pfa,cw,dw,qfa,$v,aw,rfa,ew,hw,gw,sfa,jw,kw,fw,lw,mw,nw,ow,pw,vfa,qw,wfa,xfa,yfa,zfa,Afa,tw,Bfa,Cfa,Dfa,Efa,Ffa,Gfa,Mfa,Nfa,Ofa,Qfa,Aw,xw,Bw,Ufa,Hw,Wfa,Mw,Jw,Kw,Ow,Vfa,Xfa,Pw,Rw,Sw,Qw,Cw,Yfa,Zfa,Uw,Nw,Ww,
$fa,Yw,Zw,$w,bx,cx,Lw,Tfa,Dw,Sfa,Ew,fx,Vw,kx,lx,mx,nx,ox,Fw,px,Tw,Iw,qx,dx,rx,Gw,aga,zw,ww,vw,rw,wx,xx,yx,zx,cga,dga,Ax,Bx,Dx,Ex,Fx,ega,Gx,Hx,Ix,Jx,Kx,Mx,Ox,Nx,gga,hga,Qx,Rx,iga,jga,Ux,Wx,Vx,kga,Sx,Tx,lga,mga,nga,oga,pga,Xx,qga,rga,Yx,Zx,$x,dy,cy,fy,ay,gy,hy,iy,by,jy,ey,ky,ny,ly,my,oy,py,vga,qy,ry,sy,wga,zy,Ay,yy,Cy,vy,By,ty,xga,Ey,Dy,Fy,yga,Gy,uy,zga,Hy,Iy,Jy,Ky,Ly,My,Ny,Oy,Vy,Ry,Aga,Xy,Yy,Sy,Ty,Qy,Uy,Py,Wy,bz,az,$y,dz,ez,fz,gz,iz,hz,jz,kz,lz,pz,rz,sz,tz,uz,wz,xz,yz,qz,nz,mz,oz,zz,Az,Bz,Cz,vz,Dz,
Ez,Fz,Gz,Iz,Hz,Cga,Jz,Kz,Lz,Mz,Nz,Fga,Ega,Pz,Qz,Oz,Rz,Sz,Tz,Gga,Jga,Kga,Lga,Zz,$z,Mga,aA,Nga,Vz,Uz,Hga,bA,Wz,Xz,Iga,Yz,Oga,Pga,cA,dA,Qga,eA,Rga,iA,fA,hA,gA,Sga,Tga,kA,Uga,jA,lA,mA,nA,oA,pA,qA,rA,sA,Xga,Wga,Vga,Yga,uA,Zga,sga,tga,$ga,xA,bha,yA,zA,AA,CA,EA,GA,HA,JA,dha,fha,gha,hha,IA,LA,MA,iha,NA,RA,jha,QA,TA,UA,PA,SA,vA,aha,OA,FA,cha,kha,wA,VA,DA,BA,WA,lha,XA,YA,mha,ZA,$A,nha,bB,dB,fB,eB,gB,hB,cB,aB,oha,iB,kB,lB,jB,mB,pha,pB,qB,rB,sB,tA,rha,wB,CB,BB,DB,FB,EB,AB,sha,KB,uha,MB,OB,PB,HB,NB,RB,IB,wha,
SB,TB,JB,UB,LB,vha,xha,GB,tha,VB,WB,yha,YB,zha,Aha,Bha,Dha,ZB,Cha,Eha,$B,aC,bC,Fha,cC,dC,Gha,eC,Hha,Iha,fC,Kha,gC,iC,Oha,Lha,Pha,Mha,Qha,Nha,oC,lC,Rha,Sha,qC,nC,rC,sC,tC,hC,Tha,mC,pC,kC,uC,vC,Vha,jC,wC,xC,yC,Wha,Xha,Yha,Zha,AC,zC,BC,CC,FC,$ha,IC,JC,cia,bia,GC,aia,LC,HC,KC,dia,EC,MC,SC,NC,RC,PC,QC,eia,fia,TC,gia,UC,hia,iia,VC,OC,WC,XC,ZC,YC,jia,kia,$C,bD,lia,aD,cD,eD,fD,gD,mia,hD,iD,kD,mD,pD,oD,qD,nia,tD,uD,rD,lD,wD,xD,yD,zD,pia,AD,BD,CD,ED,HD,GD,KD,LD,MD,uia,PD,RD,QD,TD,WD,YD,XD,ZD,VD,UD,$D,via,wia,
bE,dE,eE,nD,vD,xia,hE,iE,jE,lE,mE,nE,kE,oE,tE,sE,qE,yia,zia,wE,xE,yE,zE,AE,BE,CE,Aia,KE,LE,ME,NE,PE,OE,Cia,QE,TE,Dia,UE,VE,WE,XE,YE,ZE,$E,aF,bF,cF,dF,eF,fF,gF,hF,Eia,Fia,iF,Gia,jF,kF,lF,mF,nF,Hia,oF,pF,qF,Iia,Kia,Jia,Lia,Qia,Oia,Mia,Nia,Pia,sF,Sia,rF,Tia,xF,vF,wF,AF,CF,DF,Via,Wia,Yia,EF,KF,IF,uF,GF,PF,NF,RF,LF,UF,TF,QF,YF,bG,$F,dG,fG,Uia,zF,VF,kG,Zia,lG,jG,yF,gG,iG,nG,HF,SF,pG,oG,rG,mG,$ia,aG,JF,tG,FF,XF,aja,uG,wG,xG,yG,zG,sG,MF,AG,cG,WF,eG,Xia,bja,CG,cja,IG,GG,EG,FG,BG,DG,HG,JG,eja,dja,KG,OG,NG,
PG,SG,QG,TG,RG,YG,fja,$G,bH,gja,cH,gH,hja,jH,lH,mH,kH,iH,pH,rH,uH,vH,wH,yH,zH,EH,FH,IH,JH,KH,LH,OH,PH,QH,RH,SH,TH,ija,WH,VH,XH,X,ZH,$H,aI,eI,dI,fI,iI,uI,vI,nja,PI,pja,TI,UI,oja,VI,rja,RI,qja,YI,ZI,$I,aJ,bI,bJ,tI,XI,dJ,eJ,cJ,gJ,iJ,jJ,nJ,qJ,rJ,wJ,tja,uja,yJ,xJ,zJ,AJ,BJ,DJ,CJ,GJ,HJ,JJ,KJ,IJ,NJ,PJ,QJ,LJ,RJ,SJ,vja,TJ,UJ,VJ,YJ,aK,bK,$J,cK,eK,dK,gK,jK,lK,mK,pK,xja,sK,qK,uK,yK,zK,yja,CK,DK,EK,GK,IK,FK,LK,MK,zja,KK,OK,PK,RK,SK,Aja,Cja,Bja,VK,WK,$K,aL,XK,bL,cL,dL,eL,fL,gL,hL,iL,jL,mL,Dja,oL,nL,qL,rL,uL,vL,
xL,yL,zL,BL,CL,DL,EL,FL,JL,HL,GL,IL,KL,LL,ML,NL,QL,OL,TL,UL,VL,RL,WL,XL,YL,ZL,$L,bM,fM,hM,iM,jM,dM,kM,cM,oM,rM,sM,gM,nM,qM,pM,mM,eM,lM,tM,uM,wM,xM,yM,zM,BM,DM,EM,FM,GM,HM,JM,IM,KM,LM,MM,NM,PM,RM,QM,OM,TM,SM,UM,VM,Hja,XM,WM,YM,Ija,ZM,$M,dN,cN,eN,bN,hN,iN,kN,jN,lN,nN,oN,nK,tN,TK,pN,gN,sN,UK,rN,vN,wN,Jja,Kja,xN,AN,yN,BN,CN,DN,EN,FN,IN,KN,HN,LN,eha,RN,Lja,UN,WN,ZN,$N,QN,cO,dO,aO,VN,fO,Nja,kO,iO,mO,Oja,jO,lO,nO,oO,lja,mja,pO,qO,rO,sO,tO,AO,Vja,Qja,Pja,DO,FO,GO,JI,JO,Wja,HO,KI,zO,OO,PO,QO,SO,Tja,Uja,XO,
WO,VO,CO,aP,bP,BO,cP,dP,Yja,kI,eP,gP,UO,TO,jP,kP,KO,TN,$O,LG,LO,eO,mP,nP,Xja,iP,hP,qP,wI,YH,tP,ZO,uP,wP,MO,lP,xP,yP,zP,AP,Sja,fP,yO,BP,Rja,CP,DP,fH,EP,FP,cka,KP,aa,ha,fa,faa,cd,Ra,gaa;ba=function(a){return function(){return aa[a].apply(this,arguments)}};
g.da=function(a,b){return aa[a]=b};
ea=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};
aaa=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};
ia=function(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}};
ka=function(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a};
g.p=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}};
la=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
g.ma=function(a){return a instanceof Array?a:la(g.p(a))};
g.t=function(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.oc=b.prototype};
pa=function(){this.C=!1;this.o=null;this.i=void 0;this.g=1;this.u=this.B=0;this.J=this.l=null};
qa=function(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0};
ra=function(a,b){a.l={uy:b,Dz:!0};a.g=a.B||a.u};
g.sa=function(a,b,c){a.g=c;return{value:b}};
ta=function(a,b,c){a.B=b;void 0!=c&&(a.u=c)};
ua=function(a,b){a.g=b;a.B=0};
va=function(a){a.B=0;var b=a.l.uy;a.l=null;return b};
baa=function(a){a.J=[a.l];a.B=0;a.u=0};
caa=function(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Dz?a.g=a.B||a.u:void 0!=b.Ic&&a.u<b.Ic?(a.g=b.Ic,a.l=null):a.g=a.u:a.g=0};
wa=function(a){this.g=new pa;this.i=a};
daa=function(a,b){qa(a.g);var c=a.g.o;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g["return"]);
a.g["return"](b);return ya(a)};
xa=function(a,b,c,d){try{var e=b.call(a.g.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.C=!1,e;var f=e.value}catch(h){return a.g.o=null,ra(a.g,h),ya(a)}a.g.o=null;d.call(a.g,f);return ya(a)};
ya=function(a){for(;a.g.g;)try{var b=a.i(a.g);if(b)return a.g.C=!1,{value:b.value,done:!1}}catch(c){a.g.i=void 0,ra(a.g,c)}a.g.C=!1;if(a.g.l){b=a.g.l;a.g.l=null;if(b.Dz)throw b.uy;return{value:b["return"],done:!0}}return{value:void 0,done:!0}};
za=function(a){this.next=function(b){qa(a.g);a.g.o?b=xa(a,a.g.o.next,b,a.g.F):(a.g.F(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.g);a.g.o?b=xa(a,a.g.o["throw"],b,a.g.F):(ra(a.g,b),b=ya(a));return b};
this["return"]=function(b){return daa(a,b)};
this[Symbol.iterator]=function(){return this}};
g.Aa=function(a,b){var c=new za(new wa(b));oa&&a.prototype&&oa(c,a.prototype);return c};
eaa=function(a){function b(d){return a.next(d)}
function c(d){return a["throw"](d)}
return new Promise(function(d,e){function f(h){h.done?d(h.value):Promise.resolve(h.value).then(b,c).then(f,e)}
f(a.next())})};
Ba=function(a){return eaa(new za(new wa(a)))};
Ca=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{sz:e,QD:f}}return{sz:-1,QD:void 0}};
Da=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
Ea=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
Fa=function(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d};
Ga=function(a){return a?a:Array.prototype.fill};
Ha=function(a){return a?a:Array.prototype.copyWithin};
g.Ia=function(a,b,c){a=a.split(".");c=c||g.v;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};
Ja=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&faa.test(a)?a:""};
g.Ka=function(a,b){for(var c=a.split("."),d=b||g.v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d};
g.La=function(){};
g.Ma=function(a){a.Gd=void 0;a.getInstance=function(){return a.Gd?a.Gd:a.Gd=new a}};
Na=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"};
g.Oa=function(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length};
g.Pa=function(a){return"function"==Na(a)};
g.Qa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};
g.Sa=function(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++gaa)};
haa=function(a,b,c){return a.call.apply(a.bind,arguments)};
iaa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};
g.x=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g.x=haa:g.x=iaa;return g.x.apply(null,arguments)};
g.Ta=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};
g.Ua=function(a,b){for(var c in b)a[c]=b[c]};
g.Va=function(a,b){function c(){}
c.prototype=b.prototype;a.oc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tf=function(d,e,f){for(var h=Array(arguments.length-2),l=2;l<arguments.length;l++)h[l-2]=arguments[l];return b.prototype[e].apply(d,h)}};
Wa=function(a){return a};
g.Xa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,g.Xa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};
Ya=function(a,b){g.Xa.call(this,jaa(a,b))};
jaa=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");return d+c[e]};
kaa=function(){};
laa=function(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}};
maa=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};
g.Za=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};
naa=function(a,b){var c=0;return function(d){g.v.clearTimeout(c);var e=arguments;c=g.v.setTimeout(function(){a.apply(b,e)},50)}};
g.$a=function(a){return a[a.length-1]};
g.bb=function(a,b,c){b=g.ab(a,b,c);return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};
g.ab=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};
g.cb=function(a,b,c){var d=a.length,e="string"===typeof a?a.split(""):a;for(--d;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};
g.eb=function(a,b){return 0<=db(a,b)};
g.fb=function(a){return 0==a.length};
g.gb=function(a){if(!Array.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};
g.jb=function(a,b){var c=db(a,b),d;(d=0<=c)&&g.ib(a,c);return d};
g.ib=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length};
g.kb=function(a,b){var c=g.ab(a,b,void 0);0<=c&&g.ib(a,c)};
g.lb=function(a){return Array.prototype.concat.apply([],arguments)};
g.nb=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
g.ob=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(g.Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}};
g.qb=function(a,b,c,d){Array.prototype.splice.apply(a,pb(arguments,1))};
pb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};
g.tb=function(a,b,c){return rb(a,c||sb,!1,b)};
ub=function(a,b){return rb(a,b,!0,void 0,void 0)};
rb=function(a,b,c,d,e){for(var f=0,h=a.length,l;f<h;){var m=f+(h-f>>>1),n;c?n=b.call(e,a[m],m,a):n=b(d,a[m]);0<n?f=m+1:(h=m,l=!n)}return l?f:-f-1};
g.vb=function(a,b){a.sort(b||sb)};
oaa=function(a,b){var c=sb;g.vb(a,function(d,e){return c(b(d),b(e))})};
g.wb=function(a,b){if(!g.Oa(a)||!g.Oa(b)||a.length!=b.length)return!1;for(var c=a.length,d=paa,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0};
sb=function(a,b){return a>b?1:a<b?-1:0};
paa=function(a,b){return a===b};
g.xb=function(a,b,c){c=g.tb(a,b,c);0>c&&g.qb(a,-(c+1),0,b)};
g.yb=function(a,b,c){var d={};(0,g.y)(a,function(e,f){d[b.call(c,e,f,a)]=e});
return d};
qaa=function(a,b){var c=Array.prototype.splice.call(a,b,1);Array.prototype.splice.call(a,0,0,c[0])};
g.zb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};
g.Ab=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};
Bb=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c};
g.Cb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};
g.Db=function(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0};
Eb=function(a){for(var b in a)return a[b]};
g.Fb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};
g.Gb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
g.Hb=function(a,b){var c=g.Oa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a};
g.Ib=function(a,b){return null!==a&&b in a};
g.Jb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};
g.Kb=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};
Lb=function(a,b){var c=g.Kb(a,b,void 0);return c&&a[c]};
g.Mb=function(a){for(var b in a)return!1;return!0};
g.Nb=function(a){for(var b in a)delete a[b]};
g.Ob=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0};
g.Pb=function(a){var b={},c;for(c in a)b[c]=a[c];return b};
g.Qb=function(a){var b=Na(a);if("object"==b||"array"==b){if(g.Pa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=g.Qb(a[c]);return b}return a};
g.Sb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Rb.length;f++)c=Rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
g.Tb=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};
Vb=function(){if(void 0===Ub){var a=null,b=g.v.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){g.v.console&&g.v.console.error(c.message)}Ub=a}else Ub=a}return Ub};
g.Yb=function(a,b){this.g=a===Wb&&b||"";this.i=Xb};
g.Zb=function(a){return a instanceof g.Yb&&a.constructor===g.Yb&&a.i===Xb?a.g:"type_error:Const"};
g.$b=function(a){return new g.Yb(Wb,a)};
cc=function(a,b){this.i=a===ac&&b||"";this.l=bc};
dc=function(a){return a instanceof cc&&a.constructor===cc&&a.l===bc?a.i:"type_error:TrustedResourceUrl"};
g.ec=function(a){var b=Vb();a=b?b.createScriptURL(a):a;return new cc(ac,a)};
g.fc=function(a,b){return 0==a.lastIndexOf(b,0)};
g.gc=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};
g.hc=function(a){return/^[\s\xa0]*$/.test(a)};
pc=function(a,b){if(b)a=a.replace(ic,"&amp;").replace(jc,"&lt;").replace(kc,"&gt;").replace(mc,"&quot;").replace(nc,"&#39;").replace(oc,"&#0;");else{if(!raa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ic,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(jc,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(kc,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(mc,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(nc,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(oc,"&#0;"))}return a};
g.qc=function(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())};
g.tc=function(a,b){for(var c=0,d=(0,g.rc)(String(a)).split("."),e=(0,g.rc)(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var l=d[h]||"",m=e[h]||"";do{l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==l[0].length&&0==m[0].length)break;c=sc(0==l[1].length?0:parseInt(l[1],10),0==m[1].length?0:parseInt(m[1],10))||sc(0==l[2].length,0==m[2].length)||sc(l[2],m[2]);l=l[3];m=m[3]}while(0==c)}return c};
sc=function(a,b){return a<b?-1:a>b?1:0};
g.wc=function(a,b){this.i=a===uc&&b||"";this.l=vc};
g.xc=function(a){return a instanceof g.wc&&a.constructor===g.wc&&a.l===vc?a.i:"type_error:SafeUrl"};
yc=function(a){a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(saa);return b&&taa.test(b[1])?new g.wc(uc,a):null};
g.Bc=function(a){a instanceof g.wc||(a="object"==typeof a&&a.jh?a.af():String(a),a=zc.test(a)?new g.wc(uc,a):yc(a));return a||Ac};
g.Cc=function(a,b){if(a instanceof g.wc)return a;a="object"==typeof a&&a.jh?a.af():String(a);if(b&&/^data:/i.test(a)){var c=yc(a)||Ac;if(c.af()==a)return c}zc.test(a)||(a="about:invalid#zClosurez");return new g.wc(uc,a)};
g.Ec=function(){this.g="";this.i=Dc};
g.Fc=function(a){return a instanceof g.Ec&&a.constructor===g.Ec&&a.i===Dc?a.g:"type_error:SafeStyle"};
g.Gc=function(a){var b=new g.Ec;b.g=a;return b};
g.Kc=function(a){var b="",c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){if(!/^[-_a-zA-Z0-9]+$/.test(c))throw Error("Name allows only [-_a-zA-Z0-9], got: "+c);var d=a[c];null!=d&&(d=Array.isArray(d)?(0,g.Hc)(d,Ic).join(" "):Ic(d),b+=c+":"+d+";")}return b?g.Gc(b):g.Jc};
Ic=function(a){if(a instanceof g.wc)return'url("'+g.xc(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof g.Yb?g.Zb(a):uaa(String(a));if(/[{;}]/.test(a))throw new Ya("Value does not allow [{;}], got: %s.",[a]);return a};
uaa=function(a){var b=a.replace(Mc,"$1").replace(Mc,"$1").replace(Nc,"url");if(vaa.test(b)){if(waa.test(a))return"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c||!xaa(a))return"zClosurez"}else return"zClosurez";return yaa(a)};
xaa=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b};
yaa=function(a){return a.replace(Nc,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,l,m){f=l;return m});
b=g.Bc(d).af();return c+f+b+f+e})};
g.Pc=function(a){return-1!=g.Oc.indexOf(a)};
Qc=function(){return g.Pc("Firefox")||g.Pc("FxiOS")};
g.Sc=function(){return g.Pc("Safari")&&!(Rc()||g.Pc("Coast")||g.Pc("Opera")||g.Pc("Edge")||g.Pc("Edg/")||g.Pc("OPR")||Qc()||g.Pc("Silk")||g.Pc("Android"))};
Rc=function(){return(g.Pc("Chrome")||g.Pc("CriOS"))&&!g.Pc("Edge")};
Uc=function(){this.i="";this.o=Tc;this.l=null};
g.Vc=function(a){return a instanceof Uc&&a.constructor===Uc&&a.o===Tc?a.i:"type_error:SafeHtml"};
Xc=function(a){if(a instanceof Uc)return a;var b="object"==typeof a,c=null;b&&a.Pt&&(c=a.g());return Wc(pc(b&&a.jh?a.af():String(a)),c)};
zaa=function(a){function b(f){Array.isArray(f)?(0,g.y)(f,b):(f=Xc(f),e.push(g.Vc(f).toString()),f=f.g(),0==d?d=f:0!=f&&d!=f&&(d=null))}
var c=Xc(Yc),d=c.g(),e=[];(0,g.y)(a,b);return Wc(e.join(g.Vc(c).toString()),d)};
Aaa=function(a){return zaa(Array.prototype.slice.call(arguments))};
Wc=function(a,b){return Zc(a,b)};
Zc=function(a,b){var c=new Uc,d=Vb();c.i=d?d.createHTML(a):a;c.l=b;return c};
g.$c=function(a,b){g.Zb(a);g.Zb(a);return Zc(b,null)};
g.ad=function(a,b){if(Baa())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=g.Vc(b)};
g.bd=function(a,b){var c=b instanceof g.wc?b:g.Cc(b);a.href=g.xc(c)};
g.dd=function(a,b){a.src=dc(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=g.v?c=Ja(c.document):(null===cd&&(cd=Ja(g.v.document)),c=cd);c&&a.setAttribute("nonce",c)};
ed=function(a,b,c,d){a=a instanceof g.wc?a:g.Cc(a);b=b||g.v;c=c instanceof g.Yb?g.Zb(c):c||"";return b.open(g.xc(a),c,d,void 0)};
gd=function(a){return encodeURIComponent(String(a))};
id=function(a){return decodeURIComponent(a.replace(/\+/g," "))};
g.jd=function(a){return a=pc(a,void 0)};
g.kd=function(a,b){var c=String(a),d=c.indexOf(".");-1==d&&(d=c.length);return Caa("0",Math.max(0,b-d))+c};
g.ld=function(a){return null==a?"":String(a)};
md=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b};
g.nd=function(a){var b=Number(a);return 0==b&&g.hc(a)?NaN:b};
od=function(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};
Daa=function(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})};
g.pd=function(a,b,c,d,e,f,h){var l="";a&&(l+=a+":");c&&(l+="//",b&&(l+=b+"@"),l+=c,d&&(l+=":"+d));e&&(l+=e);f&&(l+="?"+f);h&&(l+="#"+h);return l};
qd=function(a){return a?decodeURI(a):a};
g.sd=function(a,b){return b.match(g.rd)[a]||null};
g.td=function(a){return qd(g.sd(3,a))};
ud=function(a){a=a.match(g.rd);return g.pd(null,null,null,null,a[5],a[6],a[7])};
g.vd=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var h=c[d].substring(0,e);f=c[d].substring(e+1)}else h=c[d];b(h,f?id(f):"")}};
wd=function(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.substr(0,c),d,a.substr(b)]};
xd=function(a,b){return b?a?a+"&"+b:b:a};
yd=function(a,b){if(!b)return a;var c=wd(a);c[1]=xd(c[1],b);return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
zd=function(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+gd(b)))};
Ad=function(a,b){for(var c=[],d=b||0;d<a.length;d+=2)zd(a[d],a[d+1],c);return c.join("&")};
g.Bd=function(a){var b=[],c;for(c in a)zd(c,a[c],b);return b.join("&")};
Cd=function(a,b){var c=2==arguments.length?Ad(arguments[1],0):Ad(arguments,1);return yd(a,c)};
g.Dd=function(a,b){var c=g.Bd(b);return yd(a,c)};
g.Ed=function(a,b,c){c=null!=c?"="+gd(c):"";return yd(a,b+c)};
Fd=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1};
Hd=function(a,b){var c=a.search(Gd),d=Fd(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return id(a.substr(d,e-d))};
Id=function(a,b){for(var c=a.search(Gd),d=0,e,f=[];0<=(e=Fd(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(Eaa,"$1")};
Jd=function(a,b,c){return g.Ed(Id(a,b),b,c)};
Faa=function(a,b){var c=wd(a),d=c[1],e=[];d&&d.split("&").forEach(function(f){var h=f.indexOf("=");b.hasOwnProperty(0<=h?f.substr(0,h):f)||e.push(f)});
c[1]=xd(e.join("&"),g.Bd(b));return c[0]+(c[1]?"?"+c[1]:"")+c[2]};
Gaa=function(a){this.Qx=a};
Kd=function(a,b,c){this.o=a;this.i=b;this.g=c||[];this.kk=new Map};
Ld=function(a,b){Kd.call(this,a,3,b)};
g.A=function(){this.Oc=this.Oc;this.Jj=this.Jj};
g.C=function(a,b){g.Md(a,g.Ta(g.Nd,b))};
g.Md=function(a,b){a.Oc?b():(a.Jj||(a.Jj=[]),a.Jj.push(b))};
g.Nd=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
g.Od=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];g.Oa(d)?g.Od.apply(null,d):g.Nd(d)}};
g.Pd=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.g=!1};
Qd=function(){return g.Pc("iPhone")&&!g.Pc("iPod")&&!g.Pc("iPad")};
g.Rd=function(){return Qd()||g.Pc("iPad")||g.Pc("iPod")};
Sd=function(a){Sd[" "](a);return a};
g.Td=function(a,b){try{return Sd(a[b]),!0}catch(c){}return!1};
Ud=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};
Vd=function(){var a=g.v.document;return a?a.documentMode:void 0};
g.Xd=function(a){return Ud(Haa,a,function(){return 0<=g.tc(Wd,a)})};
g.Yd=function(a){return Number(Iaa)>=a};
Jaa=function(a){var b=g.Ka("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(h){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||g.v.$googDebugFname||b}catch(h){e="Not available",c=!0}b=Zd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;
if(null==c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,$d[c])c=$d[c];else{c=String(c);if(!$d[c]){var f=/function\s+([^\(]+)/m.exec(c);$d[c]=f?f[1]:"[Anonymous]"}c=$d[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a};
Zd=function(a,b){b||(b={});b[ae(a)]=!0;var c=a.stack||"",d=a.fT;d&&!b[ae(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=Zd(d,b));return c};
ae=function(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack};
be=function(a,b){g.Pd.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)};
de=function(a){return!(!a||!a[ce])};
Laa=function(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.Cp=e;this.key=++Kaa;this.rl=this.Fo=!1};
ee=function(a){a.rl=!0;a.listener=null;a.g=null;a.src=null;a.Cp=null};
fe=function(a){this.src=a;this.listeners={};this.g=0};
ge=function(a,b){var c=b.type;c in a.listeners&&g.jb(a.listeners[c],b)&&(ee(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))};
he=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.rl&&f.listener==b&&f.capture==!!c&&f.Cp==d)return e}return-1};
je=function(a,b,c,d,e){if(d&&d.once)return ie(a,b,c,d,e);if(Array.isArray(b)){for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);return null}c=ke(c);return de(a)?a.ia(b,c,g.Qa(d)?!!d.capture:!!d,e):le(a,b,c,!1,d,e)};
le=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=g.Qa(e)?!!e.capture:!!e,l=me(a);l||(a[ne]=l=new fe(a));c=l.add(b,c,d,h,f);if(c.g)return c;d=Maa();c.g=d;d.src=a;d.listener=c;if(a.addEventListener)Naa||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pe++;return c};
Maa=function(){var a=Oaa,b=qe?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b};
ie=function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)ie(a,b[f],c,d,e);return null}c=ke(c);return de(a)?a.ku(b,c,g.Qa(d)?!!d.capture:!!d,e):le(a,b,c,!0,d,e)};
re=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else d=g.Qa(d)?!!d.capture:!!d,c=ke(c),de(a)?a.gb(b,c,d,e):a&&(a=me(a))&&(b=a.pm(b,c,d,e))&&se(b)};
se=function(a){if("number"!==typeof a&&a&&!a.rl){var b=a.src;if(de(b))ge(b.i,a);else{var c=a.type,d=a.g;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pe--;(c=me(b))?(ge(c,a),0==c.g&&(c.src=null,b[ne]=null)):ee(a)}}};
oe=function(a){return a in te?te[a]:te[a]="on"+a};
ve=function(a,b,c,d){var e=!0;if(a=me(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.rl&&(f=ue(f,d),e=e&&!1!==f)}return e};
ue=function(a,b){var c=a.listener,d=a.Cp||a.src;a.Fo&&se(a);return c.call(d,b)};
Oaa=function(a,b){if(a.rl)return!0;if(!qe){var c=b||g.Ka("window.event"),d=new be(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(m){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var h=c.length-1;!d.g&&0<=h;h--){d.currentTarget=c[h];var l=ve(c[h],f,!0,d);e=e&&l}for(h=0;!d.g&&h<c.length;h++)d.currentTarget=c[h],l=ve(c[h],f,!1,d),e=e&&l}return e}return ue(a,new be(b,
this))};
me=function(a){a=a[ne];return a instanceof fe?a:null};
ke=function(a){if(g.Pa(a))return a;a[we]||(a[we]=function(b){return a.handleEvent(b)});
return a[we]};
g.xe=function(){g.A.call(this);this.i=new fe(this);this.ma=this;this.ca=null};
ye=function(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.rl&&h.capture==c){var l=h.listener,m=h.Cp||h.src;h.Fo&&ge(a.i,h);e=!1!==l.call(m,d)&&e}}return e&&!d.defaultPrevented};
ze=function(a,b){this.l=a;this.o=b;this.i=0;this.g=null};
Ae=function(a,b){a.o(b);100>a.i&&(a.i++,b.next=a.g,a.g=b)};
g.Be=function(a,b,c){return Math.min(Math.max(a,b),c)};
g.Ce=function(a,b){var c=a%b;return 0>c*b?c+b:c};
g.De=function(a,b,c){return a+c*(b-a)};
g.Ee=function(a,b){return 1E-6>=Math.abs(a-b)};
g.Fe=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};
Ge=function(a,b){return a==b?!0:a&&b?a.x==b.x&&a.y==b.y:!1};
g.He=function(a,b){this.width=a;this.height=b};
g.Ie=function(a,b){return a==b?!0:a&&b?a.width==b.width&&a.height==b.height:!1};
Je=function(a){return a.width*a.height};
g.Ne=function(a){return a?new Ke(g.Le(a)):Me||(Me=new Ke)};
g.Oe=function(a,b){return"string"===typeof b?a.getElementById(b):b};
g.Qe=function(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):g.Pe(document,"*",a,b)};
g.Re=function(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):g.Pe(c,"*",a,b)[0]||null}return c||null};
g.Pe=function(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&g.eb(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a};
g.Te=function(a,b){g.zb(b,function(c,d){c&&"object"==typeof c&&c.jh&&(c=c.af());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Se.hasOwnProperty(d)?a.setAttribute(Se[d],c):g.fc(d,"aria-")||g.fc(d,"data-")?a.setAttribute(d,c):a[d]=c})};
Ue=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new g.He(a.clientWidth,a.clientHeight)};
g.Xe=function(a){var b=Ve(a);a=a.parentWindow||a.defaultView;return g.We&&g.Xd("10")&&a.pageYOffset!=b.scrollTop?new g.Fe(b.scrollLeft,b.scrollTop):new g.Fe(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)};
Ve=function(a){return a.scrollingElement?a.scrollingElement:g.Ye||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement};
g.af=function(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!Paa&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',g.jd(h.name),'"');if(h.type){f.push(' type="',g.jd(h.type),'"');var l={};g.Sb(l,h);delete l.type;h=l}f.push(">");f=f.join("")}f=Ze(e,f);h&&("string"===typeof h?f.className=h:Array.isArray(h)?f.className=h.join(" "):g.Te(f,h));2<d.length&&$e(e,f,d,2);return f};
$e=function(a,b,c,d){function e(l){l&&b.appendChild("string"===typeof l?a.createTextNode(l):l)}
for(;d<c.length;d++){var f=c[d];if(!g.Oa(f)||g.Qa(f)&&0<f.nodeType)e(f);else{a:{if(f&&"number"==typeof f.length){if(g.Qa(f)){var h="function"==typeof f.item||"string"==typeof f.item;break a}if(g.Pa(f)){h="function"==typeof f.item;break a}}h=!1}(0,g.y)(h?g.nb(f):f,e)}}};
g.bf=function(a){return Ze(document,a)};
Ze=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)};
g.cf=function(a){return document.createTextNode(String(a))};
g.df=function(a,b){a.appendChild(b)};
g.ef=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};
g.ff=function(a,b,c){a.insertBefore(b,a.childNodes[c]||null)};
g.gf=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};
Raa=function(a){return Qaa&&void 0!=a.children?a.children:(0,g.hf)(a.childNodes,function(b){return 1==b.nodeType})};
g.jf=function(a){var b;if(Saa&&!(g.We&&g.Xd("9")&&!g.Xd("10")&&g.v.SVGElement&&a instanceof g.v.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return g.Qa(b)&&1==b.nodeType?b:null};
g.kf=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
g.Le=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document};
g.lf=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{g.ef(a);var c=g.Le(a);a.appendChild(c.createTextNode(String(b)))}};
of=function(a){var b;"A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?b=!a.disabled&&(!mf(a)||nf(a)):b=mf(a)&&nf(a);if(b&&g.We){var c;!g.Pa(a.getBoundingClientRect)||g.We&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a};
mf=function(a){return g.We&&!g.Xd("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")};
nf=function(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a};
qf=function(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return g.pf(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&g.eb(f.className.split(/\s+/),c))},!0,d)};
g.pf=function(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null};
Ke=function(a){this.g=a||g.v.document||document};
rf=function(a){g.v.setTimeout(function(){throw a;},0)};
g.tf=function(a){!g.Pa(g.v.setImmediate)||g.v.Window&&g.v.Window.prototype&&!g.Pc("Edge")&&g.v.Window.prototype.setImmediate==g.v.setImmediate?(sf||(sf=Taa()),sf(a)):g.v.setImmediate(a)};
Taa=function(){var a=g.v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!g.Pc("Presto")&&(a=function(){var e=g.bf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var h="callImmediate"+Math.random(),l="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,g.x)(function(m){if(("*"==l||m.origin==l)&&m.data==h)this.port1.onmessage()},
this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,l)}}});
if("undefined"!==typeof a&&!g.Pc("Trident")&&!g.Pc("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Nx;c.Nx=null;e()}};
return function(e){d.next={Nx:e};d=d.next;b.port2.postMessage(0)}}return function(e){g.v.setTimeout(e,0)}};
uf=function(){this.i=this.g=null};
vf=function(){this.next=this.scope=this.g=null};
g.zf=function(a,b){wf||Uaa();xf||(wf(),xf=!0);yf.add(a,b)};
Uaa=function(){if(g.v.Promise&&g.v.Promise.resolve){var a=g.v.Promise.resolve(void 0);wf=function(){a.then(Af)}}else wf=function(){g.tf(Af)}};
Af=function(){for(var a;a=yf.remove();){try{a.g.call(a.scope)}catch(b){rf(b)}Ae(Bf,a)}xf=!1};
Cf=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};
g.Ef=function(a){this.g=0;this.C=void 0;this.o=this.i=this.l=null;this.u=this.B=!1;if(a!=g.La)try{var b=this;a.call(void 0,function(c){Df(b,2,c)},function(c){Df(b,3,c)})}catch(c){Df(this,3,c)}};
Ff=function(){this.next=this.context=this.onRejected=this.l=this.g=null;this.i=!1};
Hf=function(a,b,c){var d=Gf.get();d.l=a;d.onRejected=b;d.context=c;return d};
g.If=function(a){if(a instanceof g.Ef)return a;var b=new g.Ef(g.La);Df(b,2,a);return b};
g.Jf=function(a){return new g.Ef(function(b,c){c(a)})};
g.Lf=function(a,b,c){Kf(a,b,c,null)||g.zf(g.Ta(b,a))};
Vaa=function(a){return new g.Ef(function(b,c){var d=a.length,e=[];if(d)for(var f=function(n,q){d--;e[n]=q;0==d&&b(e)},h=function(n){c(n)},l=0,m;l<a.length;l++)m=a[l],g.Lf(m,g.Ta(f,l),h);
else b(e)})};
g.Nf=function(a,b){var c=Hf(b,b,void 0);c.i=!0;Mf(a,c);return a};
g.Pf=function(a,b){return Of(a,null,b,void 0)};
Qf=function(a,b){if(0==a.g)if(a.l){var c=a.l;if(c.i){for(var d=0,e=null,f=null,h=c.i;h&&(h.i||(d++,h.g==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.g&&1==d?Qf(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Rf(c),Sf(c,e,3,b)))}a.l=null}else Df(a,3,b)};
Mf=function(a,b){a.i||2!=a.g&&3!=a.g||Tf(a);a.o?a.o.next=b:a.i=b;a.o=b};
Of=function(a,b,c,d){var e=Hf(null,null,null);e.g=new g.Ef(function(f,h){e.l=b?function(l){try{var m=b.call(d,l);f(m)}catch(n){h(n)}}:f;
e.onRejected=c?function(l){try{var m=c.call(d,l);void 0===m&&l instanceof g.Uf?h(l):f(m)}catch(n){h(n)}}:h});
e.g.l=a;Mf(a,e);return e.g};
Df=function(a,b,c){0==a.g&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.g=1,Kf(c,a.J,a.K,a)||(a.C=c,a.g=b,a.l=null,Tf(a),3!=b||c instanceof g.Uf||Waa(a,c)))};
Kf=function(a,b,c,d){if(a instanceof g.Ef)return Mf(a,Hf(b||g.La,c||null,d)),!0;if(Cf(a))return a.then(b,c,d),!0;if(g.Qa(a))try{var e=a.then;if(g.Pa(e))return Xaa(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1};
Xaa=function(a,b,c,d,e){function f(m){l||(l=!0,d.call(e,m))}
function h(m){l||(l=!0,c.call(e,m))}
var l=!1;try{b.call(a,h,f)}catch(m){f(m)}};
Tf=function(a){a.B||(a.B=!0,g.zf(a.F,a))};
Rf=function(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b};
Sf=function(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.u;a=a.l)a.u=!1;if(b.g)b.g.l=null,Vf(b,c,d);else try{b.i?b.l.call(b.context):Vf(b,c,d)}catch(e){Wf.call(null,e)}Ae(Gf,b)};
Vf=function(a,b,c){2==b?a.l.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)};
Waa=function(a,b){a.u=!0;g.zf(function(){a.u&&Wf.call(null,b)})};
g.Uf=function(a){g.Xa.call(this,a)};
g.Xf=function(a,b){g.xe.call(this);this.Hd=a||1;this.Nn=b||g.v;this.Ix=(0,g.x)(this.yd,this);this.Qz=(0,g.E)()};
g.Yf=function(a,b,c){if(g.Pa(a))c&&(a=(0,g.x)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:g.v.setTimeout(a,b||0)};
g.Zf=function(a,b){var c=null;return g.Pf(new g.Ef(function(d,e){c=g.Yf(function(){d(b)},a);
-1==c&&e(Error("Failed to schedule timer."))}),function(d){g.v.clearTimeout(c);
throw d;})};
ag=function(){this.K=new $f;this.l=new Map;this.F=new Set;this.u=0;this.B=100;this.flushInterval=3E4;this.g=new g.Xf(this.flushInterval);this.g.ia("tick",this.C,!1,this)};
Yaa=function(a){for(var b=0;b<a.length;b++)a[b].clear()};
Zaa=function(){this.g=bg();this.g.i("/client_streamz/youtube/web/network/one_platform_requests",{bj:3,aj:"request_url"})};
$aa=function(){this.g=bg();this.g.i("/client_streamz/youtube/web/network/one_platform_redirects",{bj:2,aj:"response_code"},{bj:3,aj:"request_url"},{bj:3,aj:"response_url"})};
aba=function(a,b,c,d){a.g.o("/client_streamz/youtube/web/network/one_platform_redirects",b,c,d)};
bba=function(){this.g=bg();this.g.i("/client_streamz/youtube/web/network/one_platform_request_success",{bj:3,aj:"request_url"})};
cba=function(){this.g=bg();this.g.i("/client_streamz/youtube/web/network/one_platform_request_failed",{bj:2,aj:"response_code"},{bj:3,aj:"request_url"})};
g.cg=function(a){for(var b=[],c=0,d=0;c<a.length;){var e=a[c++];if(128>e)b[d++]=String.fromCharCode(e);else if(191<e&&224>e){var f=a[c++];b[d++]=String.fromCharCode((e&31)<<6|f&63)}else if(239<e&&365>e){f=a[c++];var h=a[c++],l=a[c++];e=((e&7)<<18|(f&63)<<12|(h&63)<<6|l&63)-65536;b[d++]=String.fromCharCode(55296+(e>>10));b[d++]=String.fromCharCode(56320+(e&1023))}else f=a[c++],h=a[c++],b[d++]=String.fromCharCode((e&15)<<12|(f&63)<<6|h&63)}return b.join("")};
eg=function(a,b,c){this.i=null;this.g=this.l=this.o=0;this.u=!1;a&&dg(this,a,b,c)};
gg=function(a,b,c){if(fg.length){var d=fg.pop();a&&dg(d,a,b,c);return d}return new eg(a,b,c)};
dg=function(a,b,c,d){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?g.hg(b):new Uint8Array(0);a.i=b;a.o=void 0!==c?c:0;a.l=void 0!==d?a.o+d:a.i.length;a.g=a.o};
ig=function(a){for(var b=128,c=0,d=0,e=0;4>e&&128<=b;e++)b=a.i[a.g++],c|=(b&127)<<7*e;128<=b&&(b=a.i[a.g++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(e=0;5>e&&128<=b;e++)b=a.i[a.g++],d|=(b&127)<<7*e+3;if(128>b){a=c>>>0;b=d>>>0;if(d=b&2147483648)a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0);a=4294967296*b+(a>>>0);return d?-a:a}a.u=!0};
jg=function(a){var b=a.i;var c=b[a.g+0];var d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=5;128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&a.g++;return d};
kg=function(a){this.g=gg(a,void 0,void 0);this.u=this.g.g;this.i=this.l=-1;this.o=!1};
lg=function(a){var b=a.g;(b=b.g==b.l)||(b=a.o)||(b=a.g,b=b.u||0>b.g||b.g>b.l);if(b)return!1;a.u=a.g.g;b=jg(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.o=!0,!1;a.l=b>>>3;a.i=c;return!0};
mg=function(a){switch(a.i){case 0:if(0!=a.i)mg(a);else{for(a=a.g;a.i[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.i?mg(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.i)mg(a);else{var b=jg(a.g);a=a.g;a.g+=b}break;case 5:5!=a.i?mg(a):(a=a.g,a.g+=4);break;case 3:b=a.l;do{if(!lg(a)){a.o=!0;break}if(4==a.i){a.l!=b&&(a.o=!0);break}mg(a)}while(1);break;default:a.o=!0}};
ng=function(a){var b=jg(a.g);a=a.g;var c=a.i,d=a.g,e=d+b;b=[];for(var f="";d<e;){var h=c[d++];if(128>h)b.push(h);else if(192>h)continue;else if(224>h){var l=c[d++];b.push((h&31)<<6|l&63)}else if(240>h){l=c[d++];var m=c[d++];b.push((h&15)<<12|(l&63)<<6|m&63)}else if(248>h){l=c[d++];m=c[d++];var n=c[d++];h=(h&7)<<18|(l&63)<<12|(m&63)<<6|n&63;h-=65536;b.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=b.length&&(f+=String.fromCharCode.apply(null,b),b.length=0)}c=f;if(8192>=b.length)b=String.fromCharCode.apply(null,
b);else{e="";for(f=0;f<b.length;f+=8192)h=pb(b,f,f+8192),e+=String.fromCharCode.apply(null,h);b=e}a.g=d;return c+b};
og=function(a){var b=jg(a.g);a=a.g;if(0>b||a.g+b>a.i.length)a.u=!0,b=new Uint8Array(0);else{var c=a.i.subarray(a.g,a.g+b);a.g+=b;b=c}return b};
pg=function(){this.g=[]};
qg=function(a,b){for(;127<b;)a.g.push(b&127|128),b>>>=7;a.g.push(b)};
rg=function(a,b){a.g.push(b>>>0&255);a.g.push(b>>>8&255);a.g.push(b>>>16&255);a.g.push(b>>>24&255)};
g.ug=function(a,b){void 0===b&&(b=0);sg();for(var c=tg[b],d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,l=h?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,q=f>>2;f=(f&3)<<4|l>>4;l=(l&15)<<2|n>>6;n&=63;m||(n=64,h||(l=64));d.push(c[q],c[f],c[l]||"",c[n]||"")}return d.join("")};
g.vg=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return g.ug(b,3)};
dba=function(a){var b=[];wg(a,function(c){b.push(c)});
return b};
g.hg=function(a){!g.We||g.Xd("10");var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;wg(a,function(f){d[e++]=f});
return d.subarray(0,e)};
wg=function(a,b){function c(m){for(;d<a.length;){var n=a.charAt(d++),q=xg[n];if(null!=q)return q;if(!g.hc(n))throw Error("Unknown base64 encoding at char: "+n);}return m}
sg();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=l&&b(h<<6&192|l))}};
sg=function(){if(!xg){xg={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));tg[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===xg[f]&&(xg[f]=e)}}}};
g.yg=function(){this.l=[];this.i=0;this.g=new pg};
zg=function(a,b){qg(a.g,8*b+2);var c=a.g.end();a.l.push(c);a.i+=c.length;c.push(a.i);return c};
Ag=function(a,b){var c=b.pop();for(c=a.i+a.g.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++};
g.Bg=function(a){for(var b=new Uint8Array(a.i+a.g.length()),c=a.l,d=c.length,e=0,f=0;f<d;f++){var h=c[f];b.set(h,e);e+=h.length}c=a.g.end();b.set(c,e);a.l=[b];return b};
g.Cg=function(a,b,c){if(null!=c&&null!=c)if(qg(a.g,8*b),a=a.g,0<=c)qg(a,c);else{for(b=0;9>b;b++)a.g.push(c&127|128),c>>=7;a.g.push(1)}};
g.Fg=function(a,b,c){if(null!=c&&null!=c){qg(a.g,8*b);a=a.g;var d=c;c=0>d;d=Math.abs(d);b=d>>>0;d=Math.floor((d-b)/4294967296);d>>>=0;c&&(d=~d>>>0,b=(~b>>>0)+1,4294967295<b&&(b=0,d++,4294967295<d&&(d=0)));Dg=b;Eg=d;c=Dg;for(b=Eg;0<b||127<c;)a.g.push(c&127|128),c=(c>>>7|b<<25)>>>0,b>>>=7;a.g.push(c)}};
Gg=function(a,b,c){null!=c&&(qg(a.g,8*b+1),a=a.g,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,Dg=b,Eg=c,rg(a,Dg),rg(a,Eg))};
g.Hg=function(a,b,c){if(null!=c){qg(a.g,8*b+1);a=a.g;var d=c;d=(c=0>d?1:0)?-d:d;if(0===d)Eg=0<1/d?0:2147483648,Dg=0;else if(isNaN(d))Eg=2147483647,Dg=4294967295;else if(1.7976931348623157E308<d)Eg=(c<<31|2146435072)>>>0,Dg=0;else if(2.2250738585072014E-308>d)d/=Math.pow(2,-1074),Eg=(c<<31|d/4294967296)>>>0,Dg=d>>>0;else{var e=d;b=0;if(2<=e)for(;2<=e&&1023>b;)b++,e/=2;else for(;1>e&&-1022<b;)e*=2,b--;d*=Math.pow(2,-b);Eg=(c<<31|b+1023<<20|1048576*d&1048575)>>>0;Dg=4503599627370496*d>>>0}rg(a,Dg);rg(a,
Eg)}};
Ig=function(a,b,c){null!=c&&(qg(a.g,8*b),a.g.g.push(c?1:0))};
Jg=function(a,b,c){if(null!=c){b=zg(a,b);for(var d=a.g,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.g.push(f);else if(2048>f)d.g.push(f>>6|192),d.g.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.g.push(f>>18|240),d.g.push(f>>12&63|128),d.g.push(f>>6&63|128),d.g.push(f&63|128),e++)}else d.g.push(f>>12|224),d.g.push(f>>6&63|128),d.g.push(f&63|128)}Ag(a,b)}};
Kg=function(a,b,c,d){null!=c&&(b=zg(a,b),d(c,a),Ag(a,b))};
Lg=function(a,b,c,d){if(null!=c)for(var e=0;e<c.length;e++){var f=zg(a,b);d(c[e],a);Ag(a,f)}};
g.Mg=function(){};
g.Rg=function(a,b,c,d){a.g=null;b||(b=[]);a.B=void 0;a.l=-1;a.Rd=b;a:{if(b=a.Rd.length){--b;var e=a.Rd[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||Ng&&e instanceof Uint8Array)){a.o=b-a.l;a.i=e;break a}}a.o=Number.MAX_VALUE}a.u={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.o?(e+=a.l,a.Rd[e]=a.Rd[e]||Og):(g.Pg(a),a.i[e]=a.i[e]||Og);if(d&&d.length)for(b=0;b<d.length;b++)Qg(a,d[b])};
g.Pg=function(a){var b=a.o+a.l;a.Rd[b]||(a.i=a.Rd[b]={})};
g.Sg=function(a,b){if(b<a.o){var c=b+a.l,d=a.Rd[c];return d===Og?a.Rd[c]=[]:d}if(a.i)return d=a.i[b],d===Og?a.i[b]=[]:d};
eba=function(a){return null==a||a instanceof Uint8Array?a:"string"===typeof a?g.hg(a):null};
g.Tg=function(a,b,c){b<a.o?a.Rd[b+a.l]=c:(g.Pg(a),a.i[b]=c);return a};
Ug=function(a,b,c,d){(c=Qg(a,c))&&c!==b&&void 0!==d&&(a.g&&c in a.g&&(a.g[c]=void 0),g.Tg(a,c,void 0));g.Tg(a,b,d)};
Qg=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=g.Sg(a,f);null!=h&&(c=f,d=h,g.Tg(a,f,void 0))}return c?(g.Tg(a,c,d),c):0};
Vg=function(a,b,c){a.g||(a.g={});if(!a.g[c]){var d=g.Sg(a,c);d&&(a.g[c]=new b(d))}return a.g[c]};
Xg=function(a,b,c){Wg(a,b,c);b=a.g[c];b==Og&&(b=a.g[c]=[]);return b};
Wg=function(a,b,c){a.g||(a.g={});if(!a.g[c]){for(var d=g.Sg(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.g[c]=e}};
Yg=function(a,b,c){a.g||(a.g={});c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=c[e].Rd;a.g[b]=c;g.Tg(a,b,d)};
Zg=function(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Zg(d):d)}return b}if(Ng&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Zg(d):d);return b};
$g=function(a){this.g=a||{cookie:""}};
ah=function(a){a=(a.g.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=(0,g.rc)(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
g.dh=function(a){"number"===typeof a?(this.date=bh(a,0,1),ch(this,1)):g.Qa(a)?(this.date=bh(a.getFullYear(),a.getMonth(),a.getDate()),ch(this,a.getDate())):(this.date=new Date((0,g.E)()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),ch(this,a))};
bh=function(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b};
ch=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))};
fh=function(a){eh();return g.ec(a)};
g.gh=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};
gba=function(){var a=[];g.gh(fba,function(b){a.push(b)});
return a};
iba=function(){var a=g.bf("IFRAME"),b={};(0,g.y)(hba(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b};
g.hh=function(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(m){try{l(b.next(m))}catch(n){e(n)}}
function h(m){try{l(b["throw"](m))}catch(n){e(n)}}
function l(m){m.done?d(m.value):(new c(function(n){n(m.value)})).then(f,h)}
l((b=b.apply(a,void 0)).next())})};
g.ih=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};
g.jh=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};
kh=function(a,b){return a==b?!0:a&&b?a.left==b.left&&a.width==b.width&&a.top==b.top&&a.height==b.height:!1};
jba=function(){};
mh=function(a,b){if(b!==lh)throw Error("Bad secret");this.g=a};
g.oh=function(a,b,c){if("string"===typeof b)(b=nh(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=nh(c,d);f&&(c.style[f]=e)}};
nh=function(a,b){var c=ph[b];if(!c){var d=od(b);c=d;void 0===a.style[d]&&(d=(g.Ye?"Webkit":qh?"Moz":g.We?"ms":g.rh?"O":null)+Daa(d),void 0!==a.style[d]&&(c=d));ph[b]=c}return c};
g.sh=function(a,b){var c=a.style[od(b)];return"undefined"!==typeof c?c:a.style[nh(a,b)]||""};
g.th=function(a,b){var c=g.Le(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""};
uh=function(a,b){return g.th(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]};
g.wh=function(a,b,c){if(b instanceof g.Fe){var d=b.x;b=b.y}else d=b,b=c;a.style.left=vh(d,!1);a.style.top=vh(b,!1)};
g.xh=function(a){return new g.Fe(a.offsetLeft,a.offsetTop)};
yh=function(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}};
g.zh=function(a){if(g.We&&!g.Yd(8))return a.offsetParent;var b=g.Le(a),c=uh(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=uh(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null};
g.Ah=function(a){var b=g.Le(a),c=new g.Fe(0,0);var d=b?g.Le(b):document;d=!g.We||g.Yd(9)||"CSS1Compat"==g.Ne(d).g.compatMode?d.documentElement:d.body;if(a==d)return c;a=yh(a);b=g.Xe(g.Ne(b).g);c.x=a.left+b.x;c.y=a.top+b.y;return c};
g.Ch=function(a,b){var c=Bh(a),d=Bh(b);return new g.Fe(c.x-d.x,c.y-d.y)};
g.Dh=function(a){a=yh(a);return new g.Fe(a.left,a.top)};
Bh=function(a){if(1==a.nodeType)return g.Dh(a);a=a.changedTouches?a.changedTouches[0]:a;return new g.Fe(a.clientX,a.clientY)};
g.Fh=function(a,b,c){if(b instanceof g.He)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");g.Eh(a,b);a.style.height=vh(c,!0)};
vh=function(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a};
g.Eh=function(a,b){a.style.width=vh(b,!0)};
g.Gh=function(a){var b=kba;if("none"!=uh(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a};
kba=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=g.Ye&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=yh(a),new g.He(a.right-a.left,a.bottom-a.top)):new g.He(b,c)};
g.Hh=function(a,b){a.style.display=b?"":"none"};
g.Ih=function(a,b,c){a&&null!==b&&b!=b.top&&(b=b.top);try{return(void 0===c?0:c)?(new g.He(b.innerWidth,b.innerHeight)).round():Ue(b||window).round()}catch(d){return new g.He(-12245933,-12245933)}};
Jh=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
lba=function(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=n=0}
function b(r){for(var u=h,w=0;64>w;w+=4)u[w/4]=r[w]<<24|r[w+1]<<16|r[w+2]<<8|r[w+3];for(w=16;80>w;w++)r=u[w-3]^u[w-8]^u[w-14]^u[w-16],u[w]=(r<<1|r>>>31)&4294967295;r=e[0];var B=e[1],z=e[2],D=e[3],F=e[4];for(w=0;80>w;w++){if(40>w)if(20>w){var H=D^B&(z^D);var V=1518500249}else H=B^z^D,V=1859775393;else 60>w?(H=B&z|D&(B|z),V=2400959708):(H=B^z^D,V=3395469782);H=((r<<5|r>>>27)&4294967295)+H+F+V+u[w]&4294967295;F=D;D=z;z=(B<<30|B>>>2)&4294967295;B=r;r=H}e[0]=e[0]+r&4294967295;e[1]=e[1]+B&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+F&4294967295}
function c(r,u){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var w=[],B=0,z=r.length;B<z;++B)w.push(r.charCodeAt(B));r=w}u||(u=r.length);w=0;if(0==n)for(;w+64<u;)b(r.slice(w,w+64)),w+=64,q+=64;for(;w<u;)if(f[n++]=r[w++],q++,64==n)for(n=0,b(f);w+64<u;)b(r.slice(w,w+64)),w+=64,q+=64}
function d(){var r=[],u=8*q;56>n?c(l,56-n):c(l,64-(n-56));for(var w=63;56<=w;w--)f[w]=u&255,u>>>=8;b(f);for(w=u=0;5>w;w++)for(var B=24;0<=B;B-=8)r[u++]=e[w]>>B&255;return r}
for(var e=[],f=[],h=[],l=[128],m=1;64>m;++m)l[m]=0;var n,q;a();return{reset:a,update:c,digest:d,CF:function(){for(var r=d(),u="",w=0;w<r.length;w++)u+="0123456789ABCDEF".charAt(Math.floor(r[w]/16))+"0123456789ABCDEF".charAt(r[w]%16);return u}}};
mba=function(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],(0,g.y)(d,function(l){e.push(l)}),Kh(e.join(" "));
var f=[],h=[];(0,g.y)(c,function(l){h.push(l.key);f.push(l.value)});
c=Math.floor((new Date).getTime()/1E3);e=g.fb(f)?[c,b,a]:[f.join(":"),c,b,a];(0,g.y)(d,function(l){e.push(l)});
a=Kh(e.join(" "));a=[c,a];g.fb(h)||a.push(h.join(""));return a.join("_")};
Kh=function(a){var b=lba();b.update(a);return b.CF().toLowerCase()};
g.Lh=function(a){var b=Jh(String(g.v.location.href)),c;(c=g.v.__SAPISID||g.v.__APISID||g.v.__OVERRIDE_SID)?c=!0:(c=new $g(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?g.v.__SAPISID:g.v.__APISID,c||(c=new $g(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(g.v.location.href);return d&&c&&b?[b,mba(Jh(d),c,a||null)].join(" "):
null}return null};
g.Mh=function(){this.i=-1};
Nh=function(){this.i=64;this.g=[];this.B=[];this.C=[];this.u=[];this.u[0]=128;for(var a=1;a<this.i;++a)this.u[a]=0;this.o=this.l=0;this.reset()};
Oh=function(a,b,c){c||(c=0);var d=a.C;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var h=a.g[2],l=a.g[3],m=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=l^c&(h^l);var n=1518500249}else f=c^h^l,n=1859775393;else 60>e?(f=c&h|l&(c|h),n=2400959708):
(f=c^h^l,n=3395469782);f=(b<<5|b>>>27)+f+m+n+d[e]&4294967295;m=l;l=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+h&4294967295;a.g[3]=a.g[3]+l&4294967295;a.g[4]=a.g[4]+m&4294967295};
Ph=function(a){g.Rg(this,a,nba,null)};
Qh=function(a){g.Rg(this,a,null,null)};
pba=function(a,b){var c=Xg(a,Qh,1);0<c.length&&Lg(b,1,c,oba)};
oba=function(a,b){var c=g.Sg(a,1);null!=c&&g.Hg(b,1,c);c=g.Sg(a,2);null!=c&&g.Fg(b,2,c)};
Rh=function(a){g.Rg(this,a,qba,null)};
Sh=function(a){g.Rg(this,a,null,rba)};
Th=function(a){g.Rg(this,a,null,null)};
Uh=function(a){g.Rg(this,a,null,null)};
Vh=function(a){g.Rg(this,a,sba,null)};
Xh=function(a){g.Rg(this,a,null,Wh)};
Zh=function(a){g.Rg(this,a,null,Yh)};
vba=function(a,b){var c=Vg(a,Th,1);null!=c&&Kg(b,1,c,tba);c=Vg(a,Uh,2);null!=c&&Kg(b,2,c,uba)};
tba=function(a,b){var c=g.Sg(a,1);null!=c&&Jg(b,1,c);c=g.Sg(a,2);null!=c&&Jg(b,2,c);c=g.Sg(a,3);null!=c&&Ig(b,3,c)};
uba=function(a,b){var c=g.Sg(a,1);null!=c&&Jg(b,1,c);c=g.Sg(a,2);null!=c&&Jg(b,2,c);c=g.Sg(a,3);null!=c&&g.Cg(b,3,c);c=g.Sg(a,4);null!=c&&Ig(b,4,c)};
yba=function(a,b){var c=Xg(a,Xh,1);0<c.length&&Lg(b,1,c,wba);c=Vg(a,Zh,2);null!=c&&Kg(b,2,c,xba)};
wba=function(a,b){var c=g.Sg(a,1);null!=c&&Jg(b,1,c);c=g.Sg(a,2);null!=c&&g.Cg(b,2,c);c=g.Sg(a,3);null!=c&&Ig(b,3,c)};
xba=function(a,b){var c=g.Sg(a,1);null!=c&&g.Fg(b,1,c);c=g.Sg(a,2);null!=c&&g.Hg(b,2,c);c=Vg(a,Ph,3);null!=c&&Kg(b,3,c,pba)};
$h=function(){this.i=[];this.g=-1};
zba=function(a){-1==a.g&&(a.g=(0,g.ai)(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g};
g.bi=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0};
g.ci=function(a,b,c){g.A.call(this);this.g=null;this.o=!1;this.B=a;this.u=c;this.i=b||window;this.l=(0,g.x)(this.bz,this)};
di=function(a){a=a.i;return a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||null};
ei=function(a){a=a.i;return a.cancelAnimationFrame||a.cancelRequestAnimationFrame||a.webkitCancelRequestAnimationFrame||a.mozCancelRequestAnimationFrame||a.oCancelRequestAnimationFrame||a.msCancelRequestAnimationFrame||null};
g.G=function(a,b,c){g.A.call(this);this.g=a;this.Hd=b||0;this.i=c;this.l=(0,g.x)(this.cz,this)};
g.fi=function(a){a.stop();a.cz()};
gi=function(){};
ii=function(a){if(a instanceof gi)return a;if("function"==typeof a.Og)return a.Og(!1);if(g.Oa(a)){var b=0,c=new gi;c.next=function(){for(;;){if(b>=a.length)throw hi;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");};
g.ji=function(a,b,c){if(g.Oa(a))try{(0,g.y)(a,b,c)}catch(d){if(d!==hi)throw d;}else{a=ii(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(d){if(d!==hi)throw d;}}};
Aba=function(a){if(g.Oa(a))return g.nb(a);a=ii(a);var b=[];g.ji(a,function(c){b.push(c)});
return b};
g.ki=function(a,b){this.i={};this.g=[];this.Mi=this.l=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof g.ki)for(c=a.Ze(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};
mi=function(a){if(a.l!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];li(a.i,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.l!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],li(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}};
li=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
ni=function(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""};
oi=function(a){return a.classList?a.classList:ni(a).match(/\S+/g)||[]};
pi=function(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)};
g.qi=function(a,b){return a.classList?a.classList.contains(b):g.eb(oi(a),b)};
g.I=function(a,b){if(a.classList)a.classList.add(b);else if(!g.qi(a,b)){var c=ni(a);pi(a,c+(0<c.length?" "+b:b))}};
g.ri=function(a,b){if(a.classList)(0,g.y)(b,function(f){g.I(a,f)});
else{var c={};(0,g.y)(oi(a),function(f){c[f]=!0});
(0,g.y)(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;pi(a,d)}};
g.si=function(a,b){a.classList?a.classList.remove(b):g.qi(a,b)&&pi(a,(0,g.hf)(oi(a),function(c){return c!=b}).join(" "))};
g.ti=function(a,b){a.classList?(0,g.y)(b,function(c){g.si(a,c)}):pi(a,(0,g.hf)(oi(a),function(c){return!g.eb(b,c)}).join(" "))};
g.J=function(a,b,c){c?g.I(a,b):g.si(a,b)};
g.vi=function(a){var b,c=b=0,d=!1;a=a.split(Bba);for(var e=0;e<a.length;e++){var f=a[e];g.ui.test(f)?(b++,c++):Cba.test(f)?d=!0:Dba.test(f)?c++:Eba.test(f)&&(d=!0)}b=0==c?d?1:0:.4<b/c?-1:1;return-1==(0==b?null:b)?"rtl":"ltr"};
g.xi=function(a){var b=[];wi(new Fba,a,b);return b.join("")};
Fba=function(){};
wi=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yi(d,c),c.push(":"),wi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}};
yi=function(a,b){b.push('"',a.replace(Gba,function(c){var d=zi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),zi[c]=d);return d}),'"')};
g.Ai=function(a,b,c,d,e,f,h,l){this.g=a;this.u=b;this.l=c;this.B=d;this.o=e;this.C=f;this.i=h;this.F=l};
g.Bi=function(a,b){if(0==b)return a.g;if(1==b)return a.i;var c=g.De(a.g,a.l,b),d=g.De(a.l,a.o,b),e=g.De(a.o,a.i,b);c=g.De(c,d,b);d=g.De(d,e,b);return g.De(c,d,b)};
g.Ci=function(a,b,c){this.o=a;this.u=b;this.g=this.l=a;this.B=c||0};
g.Di=function(a){a.g=Math.min(a.u,2*a.g);a.l=Math.min(a.u,a.g+(a.B?Math.round(a.B*(Math.random()-.5)*2*a.g):0));a.i++};
Hba=function(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")};
Ei=function(a){return(a=a.exec(g.Oc))?a[1]:""};
Fi=function(a){return 0<=g.tc(Iba,a)};
g.Gi=function(a){g.A.call(this);this.u=1;this.l=[];this.o=0;this.g=[];this.i={};this.B=!!a};
Jba=function(a,b,c){g.zf(function(){a.apply(b,c)})};
g.Hi=function(a){this.g=a};
Ii=function(a){this.g=a};
Ji=function(a){this.data=a};
Ki=function(a){return void 0===a||a instanceof Ji?a:new Ji(a)};
Li=function(a){this.g=a};
g.Mi=function(a){var b=a.creation;a=a.expiration;return!!a&&a<(0,g.E)()||!!b&&b>(0,g.E)()};
g.Ni=function(a){this.g=a};
Kba=function(){};
Oi=function(){};
Pi=function(a){this.g=a};
Qi=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a};
Ri=function(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.g=a};
Ti=function(a,b){this.i=a;this.g=null;if(g.We&&!g.Yd(9)){Si||(Si=new g.ki);this.g=Si.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Si.set(a,this.g));try{this.g.load(this.i)}catch(c){this.g=null}}};
Ui=function(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Lba[b]})};
Vi=function(a){try{a.g.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}};
Wi=function(a,b){this.i=a;this.g=b+"::"};
g.Xi=function(a){var b=new Qi;return b.isAvailable()?a?new Wi(b,a):b:null};
Yi=function(a,b){this.g=a;this.i=b};
Zi=function(a){this.g=[];if(a)a:{if(a instanceof Zi){var b=a.Ze();a=a.ge();if(0>=this.g.length){for(var c=this.g,d=0;d<b.length;d++)c.push(new Yi(b[d],a[d]));break a}}else b=g.Gb(a),a=g.Fb(a);for(d=0;d<b.length;d++)$i(this,b[d],a[d])}};
$i=function(a,b,c){var d=a.g;d.push(new Yi(b,c));b=d.length-1;a=a.g;for(c=a[b];0<b;)if(d=b-1>>1,a[d].g>c.g)a[b]=a[d],b=d;else break;a[b]=c};
aj=function(){Zi.call(this)};
g.bj=function(a,b){this.g=this.F=this.u="";this.o=null;this.B=this.i="";this.C=!1;var c;a instanceof g.bj?(this.C=void 0!==b?b:a.C,g.cj(this,a.u),this.F=a.F,g.dj(this,a.g),g.ej(this,a.o),this.i=a.i,fj(this,a.l.clone()),this.B=a.B):a&&(c=String(a).match(g.rd))?(this.C=!!b,g.cj(this,c[1]||"",!0),this.F=gj(c[2]||""),g.dj(this,c[3]||"",!0),g.ej(this,c[4]),this.i=gj(c[5]||"",!0),fj(this,c[6]||"",!0),this.B=gj(c[7]||"")):(this.C=!!b,this.l=new hj(null,this.C))};
g.cj=function(a,b,c){a.u=c?gj(b,!0):b;a.u&&(a.u=a.u.replace(/:$/,""))};
g.dj=function(a,b,c){a.g=c?gj(b,!0):b};
g.ej=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.o=b}else a.o=null};
fj=function(a,b,c){b instanceof hj?(a.l=b,Mba(a.l,a.C)):(c||(b=ij(b,Nba)),a.l=new hj(b,a.C))};
g.jj=function(a){return a instanceof g.bj?a.clone():new g.bj(a,void 0)};
gj=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""};
ij=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Oba),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};
Oba=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};
hj=function(a,b){this.i=this.g=null;this.l=a||null;this.o=!!b};
kj=function(a){a.g||(a.g=new g.ki,a.i=0,a.l&&g.vd(a.l,function(b,c){a.add(id(b),c)}))};
mj=function(a,b){kj(a);b=lj(a,b);return li(a.g.i,b)};
g.nj=function(a,b,c){a.remove(b);0<c.length&&(a.l=null,a.g.set(lj(a,b),g.nb(c)),a.i=a.i+c.length)};
lj=function(a,b){var c=String(b);a.o&&(c=c.toLowerCase());return c};
Mba=function(a,b){b&&!a.o&&(kj(a),a.l=null,a.g.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),g.nj(this,e,c))},a));
a.o=b};
oj=function(a){g.Rg(this,a,Pba,null)};
pj=function(a){g.Rg(this,a,null,null)};
Qba=function(a,b){for(;lg(b)&&4!=b.i;)switch(b.l){case 1:var c=og(b);g.Tg(a,1,c);break;case 2:c=og(b);g.Tg(a,2,c);break;case 3:c=og(b);g.Tg(a,3,c);break;case 4:c=og(b);g.Tg(a,4,c);break;case 5:c=jg(b.g);g.Tg(a,5,c);break;default:mg(b)}return a};
Rba=function(a){a=a.split("");var b=[-193583013,719535720,-1361822093,function(c,d){d=(d%c.length+c.length)%c.length;c.splice(d,1)},
null,null,1685925531,-2048985355,-2032762175,1443866765,function(c,d){for(var e=64,f=[];++e-f.length-32;)switch(e){case 58:e=96;continue;case 91:e=44;break;case 65:e=47;continue;case 46:e=153;case 123:e-=58;default:f.push(String.fromCharCode(e))}c.forEach(function(h,l,m){this.push(m[l]=f[(f.indexOf(h)-f.indexOf(this[l])+l-32+e--)%f.length])},d.split(""))},
974798383,a,1026980114,1547754910,567571172,-954930841,a,1006356724,function(c,d){d=(d%c.length+c.length)%c.length;var e=c[0];c[0]=c[d];c[d]=e},
-1421327205,function(c,d){d=(d%c.length+c.length)%c.length;c.splice(0,1,c.splice(d,1,c[0])[0])},
function(c,d){c.push(d)},
1093166775,-1980619810,-2048985355,1974113295,null,-1545927512,68662842,function(c,d){for(d=(d%c.length+c.length)%c.length;d--;)c.unshift(c.pop())},
-696580063,159529443,-214306215,"B6aPXo",function(c){c.reverse()},
function(c,d){d=(d%c.length+c.length)%c.length;c.splice(-d).reverse().forEach(function(e){c.unshift(e)})},
function(c){for(var d=c.length;d;)c.push(c.splice(--d,1)[0])},
1964719671,-1992209995,-1093709883,a,"u-30",33292333,-411772684,1286550046,261445575,1974113295,1371943141,-465237502,-1171078643,function(c,d){for(var e=64,f=[];++e-f.length-32;){switch(e){case 91:e=44;continue;case 123:e=65;break;case 65:e-=18;continue;case 58:e=96;continue;case 46:e=95}f.push(String.fromCharCode(e))}c.forEach(function(h,l,m){this.push(m[l]=f[(f.indexOf(h)-f.indexOf(this[l])+l-32+e--)%f.length])},d.split(""))}];
b[4]=b;b[5]=b;b[27]=b;b[36](b[5],b[23]);b[18](b[3],b[46]);b[35](b[40],b[48]);b[29](b[40],b[27]);b[29](b[4],b[7]);b[21](b[25]);b[14](b[11],b[13]);b[17](b[3],b[18]);b[1](b[39],b[14]);b[20](b[25],b[30]);b[35](b[2]);b[33](b[27],b[36]);b[24](b[27],b[15]);b[44](b[5],b[1]);b[42](b[6],b[49]);b[12](b[46],b[21]);b[42](b[5],b[17]);b[26](b[46]);b[42](b[6],b[39]);b[33](b[6],b[18]);b[50](b[14],b[43]);b[17](b[19],b[38]);b[51](b[14],b[24]);b[35](b[15]);b[11](b[51],b[40]);b[24](b[8],b[21]);b[24](b[8],b[33]);b[2](b[34],
b[12]);b[16](b[8]);b[29](b[19],b[8]);b[42](b[19],b[40]);b[36](b[2],b[43]);b[42](b[19],b[9]);b[36](b[31],b[7]);b[29](b[31],b[47]);b[42](b[19],b[34]);b[42](b[19],b[39]);b[29](b[2],b[28]);b[42](b[2],b[4]);b[51](b[31],b[6]);b[51](b[2],b[22]);return a.join("")};
rj=function(a){var b=arguments,c=qj;1<b.length?c[b[0]]=b[1]:1===b.length&&Object.assign(c,b[0])};
g.K=function(a,b){return a in qj?qj[a]:b};
sj=function(a){return g.K(a,void 0)};
g.uj=function(a){a=tj(a);return"string"===typeof a&&"false"===a?!1:!!a};
wj=function(a,b){var c=tj(a);return void 0===c&&void 0!==b?b:Number(c||0)};
tj=function(a){var b=g.K("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:g.K("EXPERIMENT_FLAGS",{})[a]};
xj=function(){var a=[],b=g.K("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=g.K("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a};
zj=function(a,b,c){a&&(a.dataset?a.dataset[yj(b)]=String(c):a.setAttribute("data-"+b,c))};
Aj=function(a){return a?a.dataset?a.dataset[yj("loaded")]:a.getAttribute("data-loaded"):null};
yj=function(a){return Bj[a]||(Bj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))};
Sba=function(a){Cj.forEach(function(b){return b(a)})};
g.Dj=function(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){g.L(b),Sba(b)}}:a};
g.L=function(a,b,c,d){var e=g.Ka("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=g.K("ERRORS",[]),e.push([a,"ERROR",b,c,d]),rj("ERRORS",e))};
g.Ej=function(a){var b=g.Ka("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=g.K("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),rj("ERRORS",b))};
g.Fj=function(a,b){"function"===typeof a&&(a=g.Dj(a));return window.setTimeout(a,b)};
Gj=function(a,b){"function"===typeof a&&(a=g.Dj(a));return window.setInterval(a,b)};
g.Hj=function(a){window.clearTimeout(a)};
g.Mj=function(a,b,c){var d=g.Ij();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){Jj[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{g.Kj[a]?h():g.Fj(h,0)}catch(l){g.L(l)}},c);
Jj[e]=!0;Lj[a]||(Lj[a]=[]);Lj[a].push(e);return e}return 0};
g.Nj=function(a){var b=g.Ij();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),(0,g.y)(a,function(c){b.unsubscribeByKey(c);delete Jj[c]}))};
g.Oj=function(a,b){var c=g.Ij();return c?c.publish.apply(c,arguments):!1};
Qj=function(a){var b=g.Ij();if(b)if(b.clear(a),a)Pj(a);else for(var c in Lj)Pj(c)};
g.Ij=function(){return g.v.ytPubsubPubsubInstance};
Pj=function(a){Lj[a]&&(a=Lj[a],(0,g.y)(a,function(b){Jj[b]&&delete Jj[b]}),a.length=0)};
g.Rj=function(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Tba,""),c=c.replace(Uba,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Vba(a,b,c)};
Vba=function(a,b,c){c=void 0===c?null:c;var d=Sj(a),e=document.getElementById(d),f=e&&Aj(e),h=e&&!f;f?b&&b():(b&&(f=g.Mj(d,b),b=""+g.Sa(b),Tj[b]=f),h||(e=Wba(a,d,function(){Aj(e)||(zj(e,"loaded","true"),g.Oj(d),g.Fj(g.Ta(Qj,d),0))},c)))};
Wba=function(a,b,c,d){d=void 0===d?null:d;var e=g.bf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);g.dd(e,fh(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e};
Sj=function(a){var b=document.createElement("a");g.bd(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+md(a)};
Vj=function(){var a=document;if("visibilityState"in a)return a.visibilityState;var b=Uj+"VisibilityState";if(b in a)return a[b]};
Xj=function(a,b){var c;(0,g.Wj)(a,function(d){c=b[d];return!!c});
return c};
Yj=function(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Xba||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.i=a.pageY}}catch(e){}};
Zj=function(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.g=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}};
Yba=function(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return g.Kb(ak,function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=g.Qa(e[4])&&g.Qa(d)&&g.Ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})};
g.dk=function(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Yba(a,b,c,d);if(e)return e;e=++bk.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(l){l=new Yj(l);if(!g.pf(l.relatedTarget,function(m){return m==a},!0))return l.currentTarget=a,l.type=b,c.call(a,l)}:function(l){l=new Yj(l);
l.currentTarget=a;return c.call(a,l)};
h=g.Dj(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ck()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);ak[e]=[a,b,c,h,d];return e};
g.ek=function(a){a&&("string"==typeof a&&(a=[a]),(0,g.y)(a,function(b){if(b in ak){var c=ak[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ck()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ak[b]}}))};
g.fk=function(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a};
gk=function(a){a=a||window.event;var b;a.composedPath&&"function"===typeof a.composedPath?b=a.composedPath():b=a.path;return b&&b.length?b[0]:g.fk(a)};
hk=function(a){a=a||window.event;var b=a.relatedTarget;b||("mouseover"==a.type?b=a.fromElement:"mouseout"==a.type&&(b=a.toElement));return b};
ik=function(a){a=a||window.event;var b=a.pageX,c=a.pageY;document.body&&document.documentElement&&("number"!==typeof b&&(b=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft),"number"!==typeof c&&(c=a.clientY+document.body.scrollTop+document.documentElement.scrollTop));return new g.Fe(b,c)};
g.jk=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
g.kk=function(a){a=a||window.event;return!1===a.returnValue||a.Bz&&a.Bz()};
g.lk=function(a){a=a||window.event;return a.keyCode?a.keyCode:a.which};
g.mk=function(a,b,c){var d=void 0===d?{}:d;var e;return e=g.dk(a,b,function(){g.ek(e);c.apply(a,arguments)},d)};
g.nk=function(a){for(var b in ak)ak[b][0]==a&&g.ek(b)};
ok=function(a){this.J=a;this.g=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.l=0;this.F=g.dk(window,"mousemove",(0,g.x)(this.N,this));this.K=Gj((0,g.x)(this.C,this),25)};
Zba=function(){};
qk=function(a,b){return pk(a,0,b)};
g.rk=function(a,b){return pk(a,1,b)};
sk=function(){};
g.tk=function(){return!!g.Ka("yt.scheduler.instance")};
pk=function(a,b,c){isNaN(c)&&(c=void 0);var d=g.Ka("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):g.Fj(a,c||0)};
g.uk=function(a){if(!isNaN(a)){var b=g.Ka("yt.scheduler.instance.cancelJob");b?b(a):g.Hj(a)}};
vk=function(a){var b=g.Ka("yt.scheduler.instance.setPriorityThreshold");b&&b(a)};
yk=function(){var a={},b=void 0===a.KG?!0:a.KG;a=void 0===a.IN?!1:a.IN;if(null==g.Ka("_lact",window)){var c=parseInt(g.K("LACT"),10);c=isFinite(c)?(0,g.E)()-Math.max(c,0):-1;g.Ia("_lact",c,window);g.Ia("_fact",c,window);-1==c&&wk();g.dk(document,"keydown",wk);g.dk(document,"keyup",wk);g.dk(document,"mousedown",wk);g.dk(document,"mouseup",wk);b&&(a?g.dk(window,"touchmove",function(){xk("touchmove",200)},{passive:!0}):(g.dk(window,"resize",function(){xk("resize",200)}),g.dk(window,"scroll",function(){xk("scroll",
200)})));
new ok(function(){xk("mouse",100)});
g.dk(document,"touchstart",wk,{passive:!0});g.dk(document,"touchend",wk,{passive:!0})}};
xk=function(a,b){zk[a]||(zk[a]=!0,g.rk(function(){wk();zk[a]=!1},b))};
wk=function(){null==g.Ka("_lact",window)&&(yk(),g.Ka("_lact",window));var a=(0,g.E)();g.Ia("_lact",a,window);-1==g.Ka("_fact",window)&&g.Ia("_fact",a,window);(a=g.Ka("ytglobal.ytUtilActivityCallback_"))&&a()};
g.Ak=function(){var a=g.Ka("_lact",window),b;null==a?b=-1:b=Math.max((0,g.E)()-a,0);return b};
Ik=function(){g.Hj(Bk);g.Hj(Ck);Ck=0;Dk&&Dk.isReady()?(Ek(Fk),"log_event"in Gk&&Ek(Object.entries(Gk.log_event)),Fk.clear(),delete Gk.log_event):Hk()};
Hk=function(){g.uj("web_gel_timeout_cap")&&!Ck&&(Ck=g.Fj(Ik,6E4));g.Hj(Bk);var a=g.K("LOGGING_BATCH_TIMEOUT",wj("web_gel_debounce_ms",1E4));g.uj("shorten_initial_gel_batch_timeout")&&Jk&&(a=$ba);Bk=g.Fj(Ik,a)};
Ek=function(a){var b=Dk,c=Math.round((0,g.M)());a=g.p(a);for(var d=a.next();!d.done;d=a.next()){var e=g.p(d.value);d=e.next().value;var f=e.next().value;e=g.Qb(g.Kk(b.me||g.Lk()));e.events=f;(f=Mk[d])&&aca(e,d,f);delete Mk[d];bca(e,c);g.Nk(b,"log_event",e,{retry:!0,onSuccess:function(){Ok=Math.round((0,g.M)()-c)}});
Jk=!1}};
bca=function(a,b){a.requestTimeMs=String(b);g.uj("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=g.K("EVENT_ID",void 0);if(c){var d=g.K("BATCH_CLIENT_COUNTER",void 0)||0;!d&&g.uj("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Pk/2));d++;d>Pk&&(d=1);rj("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Qk&&Ok&&g.uj("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Qk,roundtripMs:String(Ok)});Qk=
c;Ok=0}};
aca=function(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]};
g.Tk=function(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||(0,g.M)());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:g.Ak())};g.uj("log_sequence_info_on_gel_web")&&d.Uj&&(a=e.context,b=d.Uj,Rk[b]=b in Rk?Rk[b]+1:0,a.sequence={index:Rk[b],groupKey:b},d.IF&&delete Rk[d.Uj]);d=d.nk;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Mk[d.token]=a,a=d.token);d=Fk.get(a)||[];Fk.set(a,d);d.push(e);c&&(Dk=new c);c=wj("web_logging_max_batch")||
100;e=(0,g.M)();d.length>=c?Ik():10<=e-Sk&&(Hk(),Sk=e)};
Uk=function(){return g.Ka("yt.ads.biscotti.lastId_")||""};
Vk=function(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=id(e[0]||""),h=id(e[1]||"");f in b?Array.isArray(b[f])?g.ob(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(m){if("q"!=e[0]){var l=Error("Error decoding URL component");l.params={key:e[0],value:e[1]};g.L(l)}}}return b};
g.Wk=function(a){var b=[];g.zb(a,function(c,d){var e=gd(d),f;Array.isArray(c)?f=c:f=[c];(0,g.y)(f,function(h){""==h?b.push(e):b.push(e+"="+gd(h))})});
return b.join("&")};
g.Xk=function(a){"?"==a.charAt(0)&&(a=a.substr(1));return Vk(a)};
Yk=function(a){a=a.split(",");return a=a.map(function(b){return g.Xk(b)})};
g.Zk=function(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),g.Xk(1<a.length?a[1]:a[0])):{}};
g.al=function(a,b){return $k(a,b||{},!0)};
g.bl=function(a,b){return $k(a,b||{},!1)};
$k=function(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=g.Xk(e[1]||"");for(var f in b)if(c||!g.Ib(e,f))e[f]=b[f];return g.Dd(a,e)+d};
g.cl=function(a){if(!b)var b=window.location.href;var c=g.sd(1,a),d=g.td(a);c&&d?(a=a.match(g.rd),b=b.match(g.rd),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?g.td(b)==d&&(Number(g.sd(4,b))||null)==(Number(g.sd(4,a))||null):!0;return a};
g.dl=function(a){a||(a=document.location.href);a=g.sd(1,a);return null!==a&&"https"==a};
g.el=function(a){a=g.td(a);a=null!==a?a.split(".").reverse():null;return null===a?!1:"com"==a[0]&&a[1].match(/^youtube(?:kids|-nocookie)?$/)?!0:!1};
g.hl=function(a){var b=g.fl;a=void 0===a?Uk():a;b=Object.assign(g.gl(b),cca(b));b.ca_type="image";a&&(b.bid=a);return b};
g.gl=function(a){var b={};b.dt=dca;b.flash="0";a:{try{var c=a.g.top.location.href}catch(f){a=2;break a}a=c?c===a.i.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?g.il:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!g.il.navigator&&"unknown"!==typeof g.il.navigator.javaEnabled&&!!g.il.navigator.javaEnabled&&g.il.navigator.javaEnabled();g.il.screen&&(b.u_h=g.il.screen.height,b.u_w=g.il.screen.width,b.u_ah=g.il.screen.availHeight,b.u_aw=g.il.screen.availWidth,
b.u_cd=g.il.screen.colorDepth);g.il.navigator&&g.il.navigator.plugins&&(b.u_nplug=g.il.navigator.plugins.length);g.il.navigator&&g.il.navigator.mimeTypes&&(b.u_nmime=g.il.navigator.mimeTypes.length);return b};
cca=function(a){var b=a.g;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var h=b.innerWidth;var l=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,l];c=g.Ih(!1,a.g.top);d={};e=new $h;g.v.SVGElement&&g.v.document.createElementNS&&e.set(0);f=iba();f["allow-top-navigation-by-user-activation"]&&e.set(1);f["allow-popups-to-escape-sandbox"]&&e.set(2);g.v.crypto&&g.v.crypto.subtle&&
e.set(3);g.v.TextDecoder&&g.v.TextEncoder&&e.set(4);e=zba(e);return d.bc=e,d.bih=c.height,d.biw=c.width,d.brdim=b.join(),d.vis=g.bi(a.i),d.wgl=!!g.il.WebGLRenderingContext,d};
eca=function(){if(!jl)return null;var a=jl();return"open"in a?a:null};
g.ll=function(a){switch(kl(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}};
kl=function(a){return a&&"status"in a?a.status:-1};
fca=function(a,b){b=void 0===b?{}:b;var c=g.cl(a),d=g.uj("web_ajax_ignore_global_headers_if_set"),e;for(e in ml){var f=g.K(ml[e]);!f||!c&&!nl(a,e)||d&&void 0!==b[e]||(b[e]=f)}if(c||nl(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||nl(a,"X-YouTube-Time-Zone"))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||nl(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=g.Wk(g.hl(void 0));
return b};
ol=function(a,b){var c=g.td(a),d=qd(g.sd(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=g.Xk(b),f={};(0,g.y)(gca,function(h){e[h]&&(f[h]=e[h])});
return g.bl(a,f)};
nl=function(a){return g.td(a)?!1:!0};
hca=function(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=pl(a,b);var d=ql(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&g.Hj(f);var l=h.ok,m=function(n){n=n||{};var q=b.context||g.v;l?b.onSuccess&&b.onSuccess.call(q,n,h):b.onError&&b.onError.call(q,n,h);b.ud&&b.ud.call(q,n,h)};
"JSON"==(b.format||"JSON")&&(l||400<=h.status&&500>h.status)?h.json().then(m,function(){m(null)}):m(null)}});
b.xB&&0<b.timeout&&(f=g.Fj(function(){e||(e=!0,g.Hj(f),b.xB.call(b.context||g.v))},b.timeout))}else g.rl(a,b)};
g.rl=function(a,b){var c=b.format||"JSON";a=pl(a,b);var d=ql(a,b),e=!1,f=sl(a,function(m){if(!e){e=!0;l&&g.Hj(l);var n=g.ll(m),q=null,r=400<=m.status&&500>m.status,u=500<=m.status&&600>m.status;if(n||r||u)q=ica(a,c,m,b.gT);if(n)a:if(m&&204==m.status)n=!0;else{switch(c){case "XML":n=0==parseInt(q&&q.return_code,10);break a;case "RAW":n=!0;break a}n=!!q}q=q||{};r=b.context||g.v;n?b.onSuccess&&b.onSuccess.call(r,m,q):b.onError&&b.onError.call(r,m,q);b.ud&&b.ud.call(r,m,q)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
if(b.Ne&&0<b.timeout){var h=b.Ne;var l=g.Fj(function(){e||(e=!0,f.abort(),g.Hj(l),h.call(b.context||g.v,f))},b.timeout)}return f};
pl=function(a,b){b.jT&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=g.K("XSRF_FIELD_NAME",void 0),d=b.Re;d&&(d[c]&&delete d[c],a=g.al(a,d));return a};
ql=function(a,b){var c=g.K("XSRF_FIELD_NAME",void 0),d=g.K("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.yb,h=sj("XSRF_FIELD_NAME"),l;b.headers&&(l=b.headers["Content-Type"]);b.ct||g.td(a)&&!b.withCredentials&&g.td(a)!=document.location.hostname||"POST"!=b.method||l&&"application/x-www-form-urlencoded"!=l||b.yb&&b.yb[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=g.Xk(e),g.Sb(e,f),e=b.pC&&"JSON"==b.pC?JSON.stringify(e):g.Bd(e));f=e||f&&!g.Mb(f);!tl&&f&&"POST"!=b.method&&(tl=!0,g.L(Error("AJAX request with postData should use POST")));
return e};
ica=function(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(h){throw d=Error("Error reading responseText"),d.params=a,g.Ej(d),h;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?jca(a):null)e={},(0,g.y)(a.getElementsByTagName("*"),function(h){e[h.tagName]=kca(h)})}d&&ul(e);
return e};
ul=function(a){if(g.Qa(a))for(var b in a)"html_content"==b||g.gc(b,"_html")?a[b]=g.$c(g.$b("HTML that is escaped and sanitized server-side and passed through yt.net.ajax"),a[b]):ul(a[b])};
jca=function(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null};
kca=function(a){var b="";(0,g.y)(a.childNodes,function(c){b+=c.nodeValue});
return b};
g.vl=function(a,b){b.method="POST";b.yb||(b.yb={});g.rl(a,b)};
sl=function(a,b,c,d,e,f,h){function l(){4==(m&&"readyState"in m?m.readyState:0)&&b&&g.Dj(b)(m)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var m=eca();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;g.uj("debug_forward_web_query_parameters")&&(a=ol(a,window.location.search));m.open(c,a,!0);f&&(m.responseType=f);h&&(m.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=fca(a,e))for(var n in e)m.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
m.send(d);return m};
lca=function(){for(var a={},b=g.p(Object.entries(g.Xk(g.K("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=g.p(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a};
wl=function(){return"INNERTUBE_API_KEY"in qj&&"INNERTUBE_API_VERSION"in qj};
g.Lk=function(){return{innertubeApiKey:g.K("INNERTUBE_API_KEY",void 0),innertubeApiVersion:g.K("INNERTUBE_API_VERSION",void 0),xz:g.K("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Mk:g.K("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:g.K("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Cm:g.K("INNERTUBE_CONTEXT_HL",void 0),Bm:g.K("INNERTUBE_CONTEXT_GL",void 0),Jp:g.K("INNERTUBE_HOST_OVERRIDE",void 0)||"",zz:!!g.K("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),NG:!!g.K("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}};
xl=function(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||g.K("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Cx||g.K("AUTHORIZATION"))||(a?b="Bearer "+g.Ka("gapi.auth.getToken")().dT:b=g.Lh([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=g.K("SESSION_INDEX",0),g.uj("pageid_as_header_web")&&(d["X-Goog-PageId"]=g.K("DELEGATED_SESSION_ID")));return d};
g.Kk=function(a){a={client:{hl:a.Cm,gl:a.Bm,clientName:a.Mk,clientVersion:a.innertubeContextClientVersion,configInfo:a.xz}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=g.K("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=xj();0<b.length&&(a.request={internalExperimentFlags:b});g.K("DELEGATED_SESSION_ID")&&!g.uj("pageid_as_header_web")&&(a.user={onBehalfOfUser:g.K("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,lca());return{context:a}};
yl=function(a){a=Object.assign({},a);delete a.Authorization;var b=g.Lh();if(b){var c=new Nh;c.update(g.K("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=g.ug(c.digest(),3)}return a};
mca=function(a){a=yl(a);var b=new Nh;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b};
g.Al=function(a,b,c,d,e){zl.set(""+a,b,{Wz:c,path:"/",domain:void 0===d?"youtube.com":d,dO:void 0===e?!1:e})};
g.Bl=function(a,b){return zl.get(""+a,b)};
g.Cl=function(a,b,c){zl.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)};
Dl=function(){var a;(a=g.Xi("yt.innertube"))||(a=new Ti("yt.innertube"),a=a.isAvailable()?a:null);this.g=a?new Li(a):null;this.i=document.domain||window.location.hostname};
Fl=function(){El||(El=new Dl);return El};
nca=function(a,b,c,d){if(d)return null;d=Fl().get("nextId",!0)||1;var e=Fl().get("requests",!0)||{};e[d]={method:a,request:b,authState:yl(c),requestTime:Math.round((0,g.M)())};Fl().set("nextId",d+1,86400,!0);Fl().set("requests",e,86400,!0);return d};
Gl=function(a){var b=Fl().get("requests",!0)||{};delete b[a];Fl().set("requests",b,86400,!0)};
Hl=function(a){var b=Fl().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round((0,g.M)())-d.requestTime)){var e=d.authState,f=yl(xl(!1));g.Ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round((0,g.M)())),g.Nk(a,d.method,e,{}));delete b[c]}}Fl().set("requests",b,86400,!0)}};
Il=function(){};
Jl=function(){Il.g||(Il.g=new Il);return Il.g};
Kl=function(){var a={},b=g.Lh([]);b&&(a.Authorization=b,a["X-Goog-AuthUser"]=g.K("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in qj||(a["X-Origin"]=window.location.origin),g.uj("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in qj&&(a["X-Goog-PageId"]=g.K("DELEGATED_SESSION_ID")));return g.If(a)};
Ll=function(){var a=/Chrome\/(\d+)/.exec(g.Oc);return a?parseFloat(a[1]):NaN};
Ml=function(){var a=/\sCobalt\/(\S+)\s/.exec(g.Oc);if(!a)return NaN;var b=[];a=g.p(a[1].split("."));for(var c=a.next();!c.done;c=a.next())c=parseInt(c.value,10),0<=c&&b.push(c);return parseFloat(b.join("."))};
Ol=function(){return Nl("android")&&Nl("chrome")&&!(Nl("trident/")||Nl("edge/"))&&!Nl("cobalt")};
Pl=function(){return Nl("armv7")||Nl("aarch64")||Nl("android")};
g.Ql=function(){return Nl("cobalt")};
Rl=function(){return Nl("cobalt")&&Nl("appletv")};
Sl=function(){return Nl("(ps3; leanback shell)")||Nl("ps3")&&g.Ql()};
Tl=function(){return Nl("(ps4; leanback shell)")||Nl("ps4")&&g.Ql()};
g.Ul=function(){return g.Ql()&&(Nl("ps4 vr")||Nl("ps4 pro vr"))};
Vl=function(){var a=/WebKit\/([0-9]+)/.exec(g.Oc);return!!(a&&600<=parseInt(a[1],10))};
Wl=function(){var a=/WebKit\/([0-9]+)/.exec(g.Oc);return!!(a&&602<=parseInt(a[1],10))};
Xl=function(){return Nl("iemobile")||Nl("windows phone")&&Nl("edge")};
Zl=function(){return Yl&&Nl("applewebkit")&&!Nl("version")&&(!Nl("safari")||Nl("gsa/"))};
$l=function(){return Nl("smart-tv")&&Nl("samsung")};
Nl=function(a){var b=g.Oc;return b?0<=b.toLowerCase().indexOf(a):!1};
am=function(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,am.prototype)};
bm=function(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1};
oca=function(a,b){return new g.Ef(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(h){a=h;e()},d):c()}
e()})};
cm=function(a){return new g.Ef(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})};
dm=function(a){this.g=a};
fm=function(a,b,c){a=a.g.createObjectStore(b,c);return new em(a)};
pca=function(a,b){return gm(a,["databases"],"readwrite",function(c){return hm(im(c,"databases"),b,void 0)})};
gm=function(a,b,c,d){c=void 0===c?"readonly":c;return new g.Ef(function(e,f){var h=a.g.transaction(b,c),l=new jm(h,b);g.Pf(d(l).then(function(m){g.Pf(qca(l).then(function(){e(m)}),function(n){f(n)})}),function(m){f(m)})})};
em=function(a){this.g=a};
hm=function(a,b,c){a=c?a.g.put(b,c):a.g.put(b);return cm(a)};
jm=function(a){var b=this;this.g=a;this.i=new Map;this.done=new g.Ef(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;e?("QuotaExceededError"===e.name?g.Ej(Error("The current transaction exceeded its quota limitations.")):"UnknownError"===e.name&&g.Ej(Error("The current transaction may have failed because of exceeding quota limitations.")),d(e)):d(new am)})})};
qca=function(a){var b=a.g;b.commit&&b.commit();return a.done};
im=function(a,b){var c=a.g.objectStore(b),d=a.i.get(c);d||(d=new em(c),a.i.set(c,d));return d};
km=function(a){this.g=a};
sca=function(a,b,c){var d=b.query;b=b.direction;a=d&&b?a.g.openCursor(d,b):d?a.g.openCursor(d):a.g.openCursor();return rca(a).then(function(e){return oca(e,c)})};
lm=function(a,b){this.request=a;this.g=b};
rca=function(a){return cm(a).then(function(b){return null===b?null:new lm(a,b)})};
tca=function(a,b,c){function d(){q||(q=new dm(f.result));return q}
var e=jm;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,l=c.blocking,m=c.g,n=c.upgrade,q;n&&f.addEventListener("upgradeneeded",function(r){if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var u=d(),w=new e(f.transaction);n(u,r.oldVersion,r.newVersion,w)});
h&&f.addEventListener("blocked",function(){h()});
return cm(f).then(function(r){l&&r.addEventListener("versionchange",function(){l(d())});
m&&r.addEventListener("close",function(){m()});
return d()})};
mm=function(a,b,c){c=void 0===c?{}:c;return tca(a,b,c)};
nm=function(){return Yl&&Vl()&&!Wl()&&!g.uj("ytidb_allow_on_ios_safari_v8_and_v9")?!1:!!self.indexedDB};
uca=function(){return new Promise(function(a){setTimeout(a,50)})};
vca=function(){return g.hh(this,function b(){var c,d,e;return g.Aa(b,function(f){switch(f.g){case 1:if(!nm())return f["return"](!1);ta(f,2,3);d=!1;return g.sa(f,mm("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.i,e=mm("yt-idb-test-do-not-use",c.g.version+1).then(function(h){try{h.close()}catch(l){}}),g.sa(f,Promise.race([e,
uca()]),6);case 6:return f["return"](d);case 3:baa(f);if(c)try{c.close()}catch(h){}caa(f);break;case 2:return va(f),f["return"](!1)}})})};
wca=function(){return void 0!==om?g.If(om):new g.Ef(function(a){vca().then(function(b){om=b;a(b)})})};
zca=function(){return void 0!==pm?g.If(pm):wca().then(function(a){if(!a)return!1;var b=g.p(xca);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=g.p(yca);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return pm=a})};
rm=function(){function a(b){b.close();qm=void 0}
qm||(qm=g.Pf(mm("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&fm(b,"databases",{keyPath:"actualName"})}}),function(b){return bm(b)?mm("YtIdbMeta",void 0,{blocking:a}):g.Jf(b)}));
return qm};
Aca=function(a){return rm().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return pca(b,a)})})};
Bca=function(a){return rm().then(function(b){return b["delete"]("databases",a)})};
Cca=function(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return g.Jf(c)}return g.Pf(Aca(b).then(function(){return a(b)}),function(c){return g.Pf(Bca(b.actualName),function(){}).then(function(){return g.Jf(c)})})};
sm=function(a,b){b=void 0===b?{}:b;return Cca(function(c){return mm(c.actualName,a,b)})};
um=function(){return g.hh(this,function b(){return g.Aa(b,function(c){if(!tm)try{tm=sm(1,{upgrade:function(d,e){1>e&&(fm(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).g.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),fm(d,"sapisid"))}})}catch(d){if(!bm(d))return g.L(d),c["return"](Promise.reject(d));
tm=sm()}return c["return"](tm)})})};
Dca=function(a){return g.hh(this,function c(){var d,e,f;return g.Aa(c,function(h){if(1==h.g)return g.sa(h,vm(),2);if(3!=h.g)return d=h.i,g.sa(h,um(),3);e=h.i;f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:d});return h["return"](e.add("LogsRequestsStore",f))})})};
Eca=function(){return g.hh(this,function b(){var c,d,e,f,h,l;return g.Aa(b,function(m){switch(m.g){case 1:return g.sa(m,vm(),2);case 2:return c=m.i,d=["NEW",c,0],e=["NEW",c,(0,g.M)()],f=IDBKeyRange.bound(d,e),g.sa(m,um(),3);case 3:return h=m.i,l=void 0,g.sa(m,gm(h,["LogsRequestsStore"],"readwrite",function(n){return sca(im(n,"LogsRequestsStore").index("newRequest"),{query:f,direction:"prev"},function(q){q.getValue()&&(l=q.getValue(),l.status="QUEUED",q.update(l))})}),4);
case 4:return m["return"](l)}})})};
Fca=function(a){return g.hh(this,function c(){var d;return g.Aa(c,function(e){if(1==e.g)return g.sa(e,um(),2);d=e.i;return e["return"](gm(d,["LogsRequestsStore"],"readwrite",function(f){var h=im(f,"LogsRequestsStore");return h.get(a).then(function(l){if(l)return l.status="QUEUED",hm(h,l).then(function(){return l})})}))})})};
Gca=function(a){return g.hh(this,function c(){var d;return g.Aa(c,function(e){if(1==e.g)return g.sa(e,um(),2);d=e.i;return e["return"](gm(d,["LogsRequestsStore"],"readwrite",function(f){var h=im(f,"LogsRequestsStore");return h.get(a).then(function(l){if(l)return l.status="NEW",l.sendCount+=1,hm(h,l).then(function(){return l})})}))})})};
Hca=function(){return g.hh(this,function b(){var c,d;return g.Aa(b,function(e){if(1==e.g)return g.sa(e,um(),2);if(3!=e.g)return c=e.i,g.sa(e,c.count("LogsRequestsStore"),3);d=e.i;return e["return"](!d)})})};
wm=function(a){return g.hh(this,function c(){var d;return g.Aa(c,function(e){if(1==e.g)return g.sa(e,um(),2);d=e.i;return e["return"](d["delete"]("LogsRequestsStore",a))})})};
vm=function(){return g.hh(this,function b(){var c;return g.Aa(b,function(d){if(1==d.g)return g.sa(d,Kl(Jl()),2);c=d.i;return d["return"](mca(c))})})};
xm=function(){this.u=0;this.g=window.navigator.onLine;Ica(this);Jca(this)};
ym=function(){xm.g||(xm.g=new xm);return xm.g};
Bm=function(a){var b=zm,c=Am;Kca(a);(new g.Ef(function(d){a.i=d})).then(function(){b();
c&&(a.o=c)})};
Jca=function(a){window.addEventListener("online",function(){a.g=!0;a.i&&a.i()})};
Ica=function(a){window.addEventListener("offline",function(){a.g=!1;a.o&&a.o()})};
Kca=function(a){a.u||(a.l(),window.navigator.onLine&&a.i&&a.i())};
g.Em=function(a,b){b=void 0===b?{}:b;Cm().then(function(c){if(c&&!g.uj("networkless_bypass_write")){var d={url:a,options:b,timestamp:(0,g.M)(),status:"NEW",sendCount:0};Dca(d).then(function(e){d.id=e;e=ym();e.g&&!g.uj("networkless_always_offline")?Dm(d):Bm(e)})["catch"](function(e){Dm(d);
g.L(e)})}else g.rl(a,b)})};
zm=function(){Fm||(Fm=g.rk(function(){Dm();Fm=0;zm()},Lca))};
Am=function(){g.uk(Fm);Fm=0};
Dm=function(a){g.hh(this,function c(){var d=this,e,f,h,l;return g.Aa(c,function(m){switch(m.g){case 1:e=d;if(!a)return g.sa(m,Eca(),6);if(!a.id){m.Ic(3);break}return g.sa(m,Fca(a.id),5);case 5:a=m.i;if(!a)throw Error("The request cannot be found in the database.");m.Ic(3);break;case 6:if(a=m.i){m.Ic(3);break}return g.sa(m,Hca(),8);case 8:return(f=m.i)&&Am(),m["return"]();case 3:if(Mca(a))h=a.options.onError?a.options.onError:function(){},l=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=
function(n,q){return g.hh(e,function u(){return g.Aa(u,function(w){if(1==w.g)return a&&a.id?a.sendCount<Nca?g.sa(w,Gca(a.id),6):g.sa(w,wm(a.id),2):w.Ic(2);
2!=w.g&&(Fm||Bm(ym()),h(n,q));h(n,q);w.g=0})})},a.options.onSuccess=function(n,q){return g.hh(e,function u(){return g.Aa(u,function(w){if(1==w.g)return a&&a.id?g.sa(w,wm(a.id),2):w.Ic(2);
l(n,q);w.g=0})})},g.rl(a.url,a.options);
else if(g.Ej(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return g.sa(m,wm(a.id),0);m.Ic(0)}})})};
Mca=function(a){a=a.timestamp;return 2592E6<=(0,g.M)()-a?!1:!0};
Cm=function(){return g.uj("networkless_logging")?2===wj("networkless_ytidb_version")?zca():g.If(nm()):g.If(!1)};
g.Gm=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(g.ma(c))};
g.Hm=function(a){var b=this;this.me=null;a?this.me=a:wl()&&(this.me=g.Lk());qk(function(){Hl(b)},5E3)};
g.Nk=function(a,b,c,d){!g.K("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&g.Ej(new g.Gm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new g.Gm("innertube xhrclient not ready",b,c,d);g.L(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",yb:c,pC:"JSON",Ne:function(){d.Ne()},
xB:d.Ne,onSuccess:function(r,u){if(d.onSuccess)d.onSuccess(u)},
wB:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,u){if(d.onError)d.onError(u)},
sT:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},h="";(e=a.me.Jp)&&(h=e);var l=a.me.zz||!1,m=xl(l,h,d);Object.assign(f.headers,m);f.headers.Authorization&&!h&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.me.innertubeApiVersion+"/"+b;var n={alt:"json"};a.me.NG&&f.headers.Authorization||(n.key=a.me.innertubeApiKey);var q=g.al(""+h+e,n);Cm().then(function(r){if(d.retry&&g.uj("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=h){if(g.uj("networkless_gel")&&!r||!g.uj("networkless_gel"))var u=
nca(b,c,m,l);if(u){var w=f.onSuccess,B=f.wB;f.onSuccess=function(z,D){Gl(u);w(z,D)};
c.wB=function(z,D){Gl(u);B(z,D)}}}try{g.uj("use_fetch_for_op_xhr")?hca(q,f):g.uj("networkless_gel")&&d.retry?(f.method="POST",g.Em(q,f)):g.vl(q,f)}catch(z){if("InvalidAccessError"==z.name)u&&(Gl(u),u=0),g.Ej(Error("An extension is blocking network request."));
else throw z;}u&&qk(function(){Hl(a)},5E3)})};
g.Im=function(a,b,c){c=void 0===c?{}:c;var d=g.Hm;g.K("ytLoggingEventsDefaultDisabled",!1)&&g.Hm==g.Hm&&(d=null);g.Tk(a,b,d,c)};
Oca=function(){this.g=[];this.i=[];this.l=[];this.o=[]};
Pca=function(a){for(var b=Jm,c=g.p(b.i),d=c.next();!d.done;d=c.next())if(d=d.value,a.message&&a.message.match(d.g))return d.weight;c=g.p(b.l);for(d=c.next();!d.done;d=c.next())if(d=d.value,a.stack&&a.stack.match(d.g))return d.weight;c=g.p(b.g);for(d=c.next();!d.done;d=c.next())if(d=d.value,d.Va(a))return d.weight;a=g.p(b.o);for(b=a.next();!b.done;b=a.next())if(b=b.value,Nl(b.userAgent.toLowerCase()))return b.weight;return 1};
Qca=function(a){g.Km(a)};
g.Lm=function(a){g.Km(a,"WARNING")};
g.Km=function(a,b){var c=void 0===c?{}:c;c.name=g.K("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=g.K("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(g.uj("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),
a)}if((window&&window.yterr||e)&&!(5<=Mm)&&0!==a.sampleWeight){var h=Jaa(a);e=h.message||"Unknown Error";f=h.name||"UnknownError";var l=h.lineNumber||"Not available",m=h.fileName||"Not available";h=h.stack||a.g||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var n=0,q=0;q<a.args.length;q++){var r=a.args[q],u="params."+q;n+=u.length;if(r)if(Array.isArray(r))for(var w=d,B=0;B<r.length&&!(r[B]&&(n+=Nm(B,r[B],u,w),500<n));B++);else if("object"===typeof r)for(w in w=void 0,B=d,
r){if(r[w]&&(n+=Nm(w,r[w],u,B),500<n))break}else d[u]=String(JSON.stringify(r)).substring(0,500),n+=d[u].length;else d[u]=String(JSON.stringify(r)).substring(0,500),n+=d[u].length;if(500<=n)break}else if(a.hasOwnProperty("params")&&a.params)if(r=a.params,"object"===typeof a.params)for(q in u=0,r){if(r[q]&&(n="params."+q,w=String(JSON.stringify(r[q])).substr(0,500),d[n]=w,u+=n.length+w.length,500<u))break}else d.params=String(JSON.stringify(r)).substr(0,500);navigator.vendor&&!d.hasOwnProperty("vendor")&&
(d.vendor=navigator.vendor);d={message:e,name:f,lineNumber:l,fileName:m,stack:h,params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+":"+e);e=g.p(Rca);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.cv[d.name])for(m=g.p(f.cv[d.name]),l=m.next();!l.done;l=m.next())if(h=l.value,l=d.message.match(h.Rf)){d.params["error.original"]=l[0];m=h.groups;h={};for(q=0;q<m.length;q++)h[m[q]]=l[q+1],d.params["error."+m[q]]=l[q+1];d.message=f.Yz(h);break}window.yterr&&"function"===typeof window.yterr&&
window.yterr(d);if(!(Om.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||0<=d.stack.indexOf("/mytube.js"))){if(g.uj("kevlar_gel_error_routing")){e=c;a:{f=g.p(Sca);for(l=f.next();!l.done;l=f.next())if(Nl(l.value.toLowerCase())){f=!0;break a}f=!1}if(!f){l={stackTrace:d.stack};d.fileName&&(l.filename=d.fileName);f=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(l.lineNumber=Number(f[0]),
l.columnNumber=Number(f[1])):l.lineNumber=Number(f[0]));f=d.message;m=d.name;Jm||(Jm=new Oca);f={level:"ERROR_LEVEL_UNKNOWN",message:f,errorClassName:m,sampleWeight:Pca(d)};"ERROR"===e?f.level="ERROR_LEVEL_ERROR":"WARNING"===e&&(f.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:l};l={pageUrl:window.location.href,kvPairs:[]};if(m=d.params)for(h=g.p(Object.keys(m)),q=h.next();!q.done;q=h.next())q=q.value,l.kvPairs.push({key:"client."+q,value:String(m[q])});g.Im("clientError",{errorMetadata:l,
stackTrace:e,logMessage:f});Ik()}}e=d.params||{};c={Re:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},yb:{url:g.K("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&(c["client.version"]=e.version);if(c.yb){d.stack&&(c.yb.stack=d.stack);f=g.p(Object.keys(e));for(l=f.next();!l.done;l=f.next())l=l.value,c.yb["client."+l]=e[l];if(e=g.K("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=g.p(Object.keys(e)),
l=f.next();!l.done;l=f.next())l=l.value,c.yb[l]=e[l];e=g.K("SERVER_NAME",void 0);f=g.K("SERVER_VERSION",void 0);e&&f&&(c.yb["server.name"]=e,c.yb["server.version"]=f)}g.rl(g.K("ECATCHER_REPORT_HOST","")+"/error_204",c);Om.add(d.message);Mm++}}}};
Nm=function(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length};
Pm=function(){this.uc=!1;this.g=null};
Qm=function(a,b,c,d){if(d)try{a.g=new window.botguard.bg(b,c?function(){return c(b)}:g.La)}catch(e){g.Lm(e)}else{try{a.g=new window.botguard.bg(b)}catch(e){g.Lm(e)}c&&c(b)}};
Tca=function(a){var b=Rm;a=void 0===a?{}:a;return b.g?Promise.race([new Promise(function(c,d){setTimeout(d,wj("botguard_async_snapshot_timeout_ms",3E3),null)}),
new Promise(function(c){b.g.invoke(function(d){return c(d)},!0,a)})]):Promise.resolve(null)};
Tm=function(){if(!g.uj("disable_ad_status_on_html5_clients")&&(!g.uj("condition_ad_status_fetch_on_consent_cookie_html5_clients")||g.Bl("CONSENT","").startsWith("YES+"))&&"1"!=g.Hb(g.K("PLAYER_CONFIG",{}),"args","privembed")){var a=function(){Sm=!0;"google_ad_status"in window?rj("DCLKSTAT",1):rj("DCLKSTAT",2)};
g.Rj("//static.doubleclick.net/instream/ad_status.js",a);Uca.push(g.rk(function(){if(!(Sm||"google_ad_status"in window)){if(a){var b=""+g.Sa(a);(b=Tj[b])&&g.Nj(b)}Sm=!0;rj("DCLKSTAT",3)}},5E3))}};
g.Vm=function(a,b){var c=g.Pb(b),d;return g.Pf(new g.Ef(function(e,f){c.onSuccess=function(h){g.ll(h)?e(h):f(new g.Um("Request failed, status="+kl(h),"net.badstatus",h))};
c.onError=function(h){f(new g.Um("Unknown request error","net.unknown",h))};
c.Ne=function(h){f(new g.Um("Request timed out","net.timeout",h))};
d=g.rl(a,c)}),function(e){e instanceof g.Uf&&d.abort();
return g.Jf(e)})};
g.Wm=function(a,b,c,d){function e(h,l,m){return g.Pf(h,function(n){return 0>=l||403===kl(n.Cj)?g.Jf(new g.Um("Request retried too many times","net.retryexhausted",n.Cj)):f(m).then(function(){return e(g.Vm(a,b),l-1,Math.pow(2,c-l+1)*m)})})}
function f(h){return new g.Ef(function(l){setTimeout(l,h)})}
return e(g.Vm(a,b),c-1,d)};
g.Um=function(a,b,c){g.Xa.call(this,a+", errorCode="+b);this.errorCode=b;this.Cj=c;this.name="PromiseAjaxError"};
Xm=function(){this.i=0;this.g=null};
g.Ym=function(a){var b=new Xm;a=void 0===a?null:a;b.i=2;b.g=void 0===a?null:a;return b};
g.Zm=function(a){var b=new Xm;a=void 0===a?null:a;b.i=1;b.g=void 0===a?null:a;return b};
g.an=function(){this.g=g.K("ALT_PREF_COOKIE_NAME","PREF");var a=g.Bl(this.g);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&($m[d]=c.toString())}}};
g.cn=function(a,b){return!!((bn("f"+(Math.floor(b/31)+1))||0)&1<<b%31)};
dn=function(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);};
en=function(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);};
bn=function(a){a=void 0!==$m[a]?$m[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null};
Xca=function(){var a=void 0===a?window.location.href:a;if(g.uj("kevlar_disable_theme_param"))return null;var b=qd(g.sd(5,a));if(Vca(b))return"USER_INTERFACE_THEME_DARK";a=g.Zk(a).theme;return Wca.get(a)||null};
Vca=function(a){var b=Yca.map(function(c){return c.toLowerCase()});
return!g.uj("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1};
fn=function(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()};
jn=function(a){var b;gn()?g.hn()==a&&(b=document):b=a;return b&&(a=Xj(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],b))?(b=a.call(b),b instanceof Promise?b:Promise.resolve()):Promise.resolve()};
g.kn=function(a){return g.bb(["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(b){return"on"+b.toLowerCase()in a})};
Zca=function(){var a=document;return g.bb(["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"],function(b){return"on"+b.toLowerCase()in a})};
gn=function(){return!!Xj(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)};
g.hn=function(a){a=void 0===a?!1:a;var b=Xj(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null};
g.ln=function(a){g.A.call(this);this.B=[];this.da=a||this};
mn=function(a,b,c,d){for(var e=0;e<c.length;e++)a.I(b,c[e],d)};
g.nn=function(a){for(;a.B.length;){var b=a.B.pop();b.target.removeEventListener(b.name,b.Va)}};
g.N=function(a){a=void 0===a?!1:a;g.A.call(this);this.Aa=new g.Gi(a);g.C(this,this.Aa)};
on=function(a,b,c){for(var d in b)a.subscribe(d,b[d],c)};
pn=function(a,b,c){for(var d in b)a.unsubscribe(d,b[d],c)};
g.rn=function(a,b,c,d){g.N.call(this);this.l=!!b;this.B=a;this.J=c||a;this.F=!!d;this.g=new g.ln(this);g.C(this,this.g);this.u=this.C=null;this.o=this.i=!1;b&&(g.Ye&&a.setAttribute("draggable","true"),a.style.touchAction="none");qn(this)};
sn=function(a,b,c){a.g.I(a.J,b,c,void 0,!a.l)};
qn=function(a){a.u=null;a.C=null;sn(a,tn("over"),a.WA);sn(a,"touchstart",a.mw);a.l&&sn(a,tn("down"),a.FJ)};
un=function(a,b){for(var c=0;c<b.changedTouches.length;c++){var d=b.changedTouches[c];if(d.identifier==a.C)return d}return null};
tn=function(a){return window.navigator.msPointerEnabled?"MSPointer"+a.charAt(0).toUpperCase()+a.substr(1):"mouse"+a};
vn=function(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||g.Pb(b);this.assets=a.assets||{};this.attrs=a.attrs||g.Pb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}};
$ca=function(a){a instanceof vn||(a=new vn(a));return a};
xn=function(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(e){}a=Array(16);for(b=0;16>b;b++){c=(0,g.E)();for(var d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(wn)for(b=1,c=0;c<wn.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^wn.charCodeAt(c),b++;return a};
g.yn=function(){for(var a=xn(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")};
g.zn=function(){return(0,g.Hc)(xn(),function(a){return(a&15).toString(16)}).join("")};
$f=function(){};
An=function(a){this.g=a};
g.Bn=function(a){return new An({trackingParams:a})};
bda=function(a){var b=ada++;return new An({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0})};
Cn=function(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a};
Dn=function(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a};
En=function(a){return g.K(Dn(void 0===a?0:a),void 0)};
g.Fn=function(a){a=En(void 0===a?0:a);var b;a?b=new An({veType:a,youtubeData:void 0}):b=null;return b};
Gn=function(){var a=g.K("csn-to-ctt-auth-info");a||(a={},rj("csn-to-ctt-auth-info",a));return a};
g.Hn=function(a){a=void 0===a?0:a;var b=g.K(Cn(a));if(!b&&!g.K("USE_CSN_FALLBACK",!0))return null;b||0!=a||(g.uj("kevlar_client_side_screens")||g.uj("c3_client_side_screens")?b="UNDEFINED_CSN":b=g.K("EVENT_ID"));return b?b:null};
cda=function(a,b,c){var d=Gn();(c=g.Hn(c))&&delete d[c];b&&(d[a]=b)};
g.In=function(a){return Gn()[a]};
Kn=function(a,b,c,d){c=void 0===c?0:c;if(a!==g.K(Cn(c))||b!==g.K(Dn(c)))if(cda(a,d,c),rj(Cn(c),a),rj(Dn(c),b),0==c||g.uj("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&g.Tk("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Jn,clientScreenNonce:a},g.Hm)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()};
Ln=function(a,b){this.version=a;this.args=b};
Mn=function(a,b){this.topic=a;this.g=b};
On=function(a,b){var c=Nn();c&&c.publish.call(c,a.toString(),a,b)};
Sn=function(a,b,c){var d=Nn();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var l=g.Ka("ytPubsub2Pubsub2SkipSubKey");l&&l==e||(l=function(){if(Pn[e])try{if(h&&a instanceof Mn&&a!=f)try{var m=a.g,n=h;if(!n.args||!n.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!m.Mi){var q=new m;m.Mi=q.version}var r=m.Mi}catch(u){}if(!r||n.version!=r)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(m,
g.nb(n.args))}catch(u){throw u.message="yt.pubsub2.Data.deserialize(): "+u.message,u;}}catch(u){throw u.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+u.message,u;}b.call(c||window,h)}catch(u){g.L(u)}},Qn[a.toString()]?g.tk()?g.rk(l):g.Fj(l,0):l())});
Pn[e]=!0;Rn[a.toString()]||(Rn[a.toString()]=[]);Rn[a.toString()].push(e);return e};
g.Un=function(a,b,c){var d=Sn(a,function(e){b.apply(c,arguments);Tn(d)},c);
return d};
Tn=function(a){var b=Nn();b&&("number"===typeof a&&(a=[a]),(0,g.y)(a,function(c){b.unsubscribeByKey(c);delete Pn[c]}))};
Nn=function(){return g.Ka("ytPubsub2Pubsub2Instance")};
Vn=function(a){Ln.call(this,1,arguments);this.csn=a};
g.Xn=function(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:(0,g.Hc)(d,function(f){return f.getAsJson()})};
d=g.p(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(g.Mb(e)||!e.trackingParams&&!e.veType)&&g.Lm(Error("Child VE logged with no data"));d={nk:g.In(b),Uj:b};"UNDEFINED_CSN"==b?g.Wn("visualElementAttached",c,d):a?g.Tk("visualElementAttached",c,a,d):g.Im("visualElementAttached",c,d)};
g.Yn=function(a,b){var c=g.uj("use_default_events_client")?void 0:g.Hm,d={csn:a,ve:b.getAsJson(),eventType:1},e={nk:g.In(a),Uj:a};"UNDEFINED_CSN"==a?g.Wn("visualElementShown",d,e):c?g.Tk("visualElementShown",d,c,e):g.Im("visualElementShown",d,e)};
Zn=function(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={nk:g.In(b),Uj:b};"UNDEFINED_CSN"==b?g.Wn("visualElementGestured",c,d):a?g.Tk("visualElementGestured",c,a,d):g.Im("visualElementGestured",c,d)};
g.Wn=function(a,b,c){$n.push({payloadName:a,payload:b,options:c});ao||(ao=g.Un(dda,eda))};
eda=function(a){if($n){for(var b=g.p($n),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,g.Tk(c.payloadName,c.payload,null,c.options));$n.length=0}ao=0};
g.bo=function(a,b,c){g.Xn(g.uj("use_default_events_client")?void 0:g.Hm,a,b,[c])};
g.co=function(a,b){Zn(g.uj("use_default_events_client")?void 0:g.Hm,a,b)};
bg=function(){if(!eo){eo=new ag;var a=wj("client_streamz_web_flush_count",-1);-1!==a&&(eo.B=a)}return eo};
g.ho=function(a,b,c){var d=c&&0<c?c:0;c=d?(0,g.E)()+1E3*d:0;if((d=d?(0,g.fo)():go())&&window.JSON){"string"!==typeof b&&(b=JSON.stringify(b,void 0));try{d.set(a,b,c)}catch(e){d.remove(a)}}};
g.io=function(a){var b=go(),c=(0,g.fo)();if(!b&&!c||!window.JSON)return null;try{var d=b.get(a)}catch(e){}if("string"!==typeof d)try{d=c.get(a)}catch(e){}if("string"!==typeof d)return null;try{d=JSON.parse(d,void 0)}catch(e){}return d};
g.jo=function(a){try{var b=go(),c=(0,g.fo)();b&&b.remove(a);c&&c.remove(a)}catch(d){}};
g.ko=function(){return g.io("yt-remote-session-screen-id")};
g.mo=function(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!g.Ql())a&&(a=g.xc(g.Bc(a)),"about:invalid#zClosurez"===a||a.startsWith("data")?a="":(a=g.Vc(Xc(a)).toString(),a=gd(g.xi(a))),g.hc(a)||(a=g.af("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),g.Le(a).body.appendChild(a)));else if(e)sl(a,b,"POST",e,d);else if(g.K("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)sl(a,b,"GET","",d);else{b:{try{var f=new laa({url:a});if(f.l&&f.i||f.o){var h=qd(g.sd(5,a));var l=!(!h||
!h.endsWith("/aclk")||"1"!==Hd(a,"ri"));break b}}catch(m){}l=!1}l?lo(a)?(b&&b(),c=!0):c=!1:c=!1;c||fda(a,b)}};
no=function(a,b,c){c=void 0===c?"":c;lo(a,c)?b&&b():g.mo(a,b,void 0,void 0,c)};
lo=function(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1};
fda=function(a,b){var c=new Image,d=""+gda++;oo[d]=c;c.onload=c.onerror=function(){b&&oo[d]&&b();delete oo[d]};
c.src=a};
ro=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!po(a)||c.some(function(e){return!po(e)}))throw Error("Only objects may be merged.");
c=g.p(c);for(d=c.next();!d.done;d=c.next())qo(a,d.value);return a};
qo=function(a,b){for(var c in b)if(po(b[c])){if(c in a&&!po(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qo(a[c],b[c])}else if(so(b[c])){if(c in a&&!so(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);to(a[c],b[c])}else a[c]=b[c];return a};
to=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next())d=d.value,po(d)?a.push(qo({},d)):so(d)?a.push(to([],d)):a.push(d);return a};
po=function(a){return"object"===typeof a&&!Array.isArray(a)};
so=function(a){return"object"===typeof a&&Array.isArray(a)};
hda=function(a,b){this.ids=a;this.g=b};
uo=function(a,b,c,d,e,f,h,l,m){this.duration=c;this.endTime=b+c;this.ingestionTime=d;this.Oa=a;this.i=e;this.startTime=b;this.g=h||0;this.range=f||null;this.pending=l||!1;this.l=void 0===m?null:m};
g.vo=function(){this.segments=[]};
wo=function(a,b){if(b>a.qb())a.segments=[];else{var c=g.ab(a.segments,function(d){return d.Oa>=b},a);
0<c&&a.segments.splice(0,c)}};
xo=function(a,b,c,d,e){e=void 0===e?!1:e;this.data=a;this.offset=b;this.size=c;this.type=d;this.g=e?0:8;this.dataOffset=this.offset+this.g;this.i=e};
yo=function(a){var b=a.data.getUint8(a.offset+a.g);a.g+=1;return b};
zo=function(a){var b=a.data.getUint16(a.offset+a.g);a.g+=2;return b};
Ao=function(a){var b=a.data.getInt32(a.offset+a.g);a.g+=4;return b};
Bo=function(a){var b=a.data.getUint32(a.offset+a.g);a.g+=4;return b};
Co=function(a){var b=a.data;var c=a.offset+a.g;b=4294967296*b.getUint32(c)+b.getUint32(c+4);a.g+=8;return b};
Do=function(a,b){b=void 0===b?NaN:b;if(isNaN(b))var c=a.size;else for(c=a.g;c<a.size&&a.data.getUint8(a.offset+c)!=b;)++c;var d=new Uint8Array(a.data.buffer,a.offset+a.g+a.data.byteOffset,c-a.g);a.g=Math.min(c+1,a.size);return String.fromCharCode.apply(String,d)};
ida=function(a){this.data=new DataView(new ArrayBuffer(a));this.g=0};
Eo=function(a,b,c,d){(new Uint8Array(a.data.buffer,a.g,d)).set(new Uint8Array(b.buffer,c+b.byteOffset,d));a.g+=d};
g.Fo=function(a,b,c,d,e,f){this.startSecs=a;this.durationSecs=b;this.context=c;this.identifier=d;this.event=e;this.g=f};
Ho=function(a,b){this.g=a;this.uri=b||"http://youtube.com/streaming/metadata/segment/102015";this.i=Go(this,"Sequence-Number");this.C=Go(this,"Segment-Count");this.F=this.g["Segment-Durations-Ms"]||"";this.ingestionTime=Go(this,"Ingestion-Walltime-Us")/1E6;this.l=(Go(this,"First-Frame-Time-Us")+Go(this,"First-Frame-Uncertainty-Us"))/1E6;this.lf=Go(this,"Target-Duration-Us")/1E6;this.B="T"==this.g["Stream-Finished"];this.o="T"==this.g.Streamable;this.cryptoPeriodIndex=Go(this,"Crypto-Period-Index");
this.u=Go(this,"Crypto-Period-Seconds")};
Io=function(a){return parseInt(a.g["Start-Media-Time-Us"],10)/1E6||0};
Go=function(a,b){return parseInt(a.g[b],10)||0};
jda=function(a,b){this.g=a;this.duration=b};
Jo=function(a,b,c,d,e){this.i=a||0;this.pitch=b||0;this.yaw=c||0;this.roll=d||0;this.g=e;e.getUint32(4)};
Ko=function(a){var b={};a=a.split("\r\n");for(var c=0;c<a.length;c++){if(0===a[c].length)return b;var d=a[c].match(/([^:]+):\s+([\S\s]+)/);null!=d&&(b[d[1]]=d[2])}return null};
Mo=function(a,b){var c=g.Lo(a,0,1952868452),d=g.Lo(a,0,1953658222);if(c&&d){c.skip(1);var e=yo(c)<<16|zo(c);c.skip(4);e&1&&c.skip(8);e&2&&c.skip(4);if(e&8){e=c.g;var f=Bo(c);c.data.setUint32(c.offset+e,1<b?Math.ceil(f*b):Math.floor(f*b))}d.skip(1);c=yo(d)<<16|zo(d);if(c&256){e=c&1;f=c&4;var h=c&512,l=c&1024,m=c&2048;c=Bo(d);e&&d.skip(4);f&&d.skip(4);e=(h?4:0)+(l?4:0)+(m?4:0);for(f=0;f<c;f++)h=d.g,l=Bo(d),d.data.setUint32(d.offset+h,1<b?Math.ceil(l*b):Math.floor(l*b)),d.skip(e)}}};
Oo=function(a){a=new DataView(a.buffer,a.byteOffset,a.byteLength);return(a=g.Lo(a,0,1836476516))?No(a):NaN};
kda=function(a){var b=g.Lo(a,0,1937011556);if(!b)return null;b=Po(a,b.dataOffset+8,1635148593);if(!b)return null;var c=Po(a,b.dataOffset+78,1936995172),d=Po(a,b.dataOffset+78,1937126244);if(!d)return null;b=null;if(c)switch(c.skip(4),yo(c)){default:b=0;break;case 1:b=2;break;case 2:b=1;break;case 3:b=255}var e=c=null,f=null;if(d=Po(a,d.dataOffset,1886547818)){var h=Po(a,d.dataOffset,1886546020),l=Po(a,d.dataOffset,2037673328);if(!l&&(l=Po(a,d.dataOffset,1836279920),!l))return null;h&&(h.skip(4),c=
Ao(h)/65536,f=Ao(h)/65536,e=Ao(h)/65536);a=new DataView(l.data.buffer,l.dataOffset,l.size-8);return new Jo(b,c,f,e,a)}return null};
Po=function(a,b,c){for(;Qo(a,b);){var d=Ro(a,b);if(d.type==c)return d;b+=d.size}return null};
g.Lo=function(a,b,c){for(;Qo(a,b);){var d=Ro(a,b);if(d.type==c)return d;b=So(d.type)?b+8:b+d.size}return null};
To=function(a){if(a.data.getUint8(a.dataOffset)){var b=a.data;a=a.dataOffset+4;return 4294967296*b.getUint32(a)+b.getUint32(a+4)}return a.data.getUint32(a.dataOffset+4)};
Ro=function(a,b){var c=a.getUint32(b),d=a.getUint32(b+4);return new xo(a,b,c,d)};
No=function(a){var b=a.data.getUint8(a.dataOffset)?20:12;return a.data.getUint32(a.dataOffset+b)};
Uo=function(a){a=new xo(a.data,a.offset,a.size,a.type,a.i);var b=yo(a);a.skip(7);var c=Bo(a);if(0==b){b=Bo(a);var d=Bo(a)}else b=Co(a),d=Co(a);a.skip(2);for(var e=zo(a),f=[],h=[],l=0;l<e;l++){var m=Bo(a);f.push(m);h.push(Bo(a));a.skip(4)}return{xr:c,FF:b,yy:d,xv:f,tr:h}};
Qo=function(a,b){if(8>a.byteLength-b)return!1;var c=a.getUint32(b);if(8>c||a.byteLength-b<c)return!1;c=a.getUint32(b+4);if(1635148593==c||1635148611==c||1937126244==c||1936995172==c)return!0;for(c=4;8>c;c++){var d=a.getInt8(b+c);if(97>d||122<d)return!1}return!0};
So=function(a){return 1701082227==a||1836019558==a||1836019574==a||1835297121==a||1835626086==a||1937007212==a||1953653094==a||1953653099==a||1836475768==a};
Vo=function(a){a.skip(4);var b=Do(a,0),c=Do(a,0),d=Bo(a),e=Bo(a),f=Bo(a),h=Bo(a),l=Do(a);return{cO:b,value:c,xr:d,wT:e,iT:f,id:h,Zz:l,offset:a.offset}};
Wo=function(a,b){for(var c=Po(a,0,b);c;)c.markAsSkip(),c=Po(a,c.offset+c.size,b)};
Xo=function(a,b){for(var c=0,d=[];Qo(a,c);){var e=Ro(a,c);e.type==b&&d.push(e);c=So(e.type)?c+8:c+e.size}return d};
lda=function(a,b){var c=g.Lo(a,0,1937011556),d=g.Lo(a,0,1953654136);if(!c||!d||2<=a.getUint32(c.offset+12))return null;var e=new DataView(b.buffer,b.byteOffset,b.length),f=g.Lo(e,0,1937011556);if(!f)return null;d=e.getUint32(f.dataOffset+8);var h=e.getUint32(f.dataOffset+12);if(1701733217!=h&&1701733238!=h)return null;h=new ida(a.byteLength+d);Eo(h,a,0,c.offset+12);h.data.setInt32(h.g,2);h.g+=4;Eo(h,a,c.offset+16,c.size-16);Eo(h,e,e.byteOffset+f.dataOffset+8,d);Eo(h,a,c.offset+c.size,a.byteLength-
(c.offset+c.size));c=g.p([1836019574,1953653099,1835297121,1835626086,1937007212,1937011556]);for(e=c.next();!e.done;e=c.next())e=g.Lo(a,0,e.value),h.data.setUint32(e.offset,e.size+d);if(Yo)return h.data;d=g.Lo(h.data,0,1953654136);h.data.setUint32(d.offset+16,2);return h.data};
Zo=function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b};
$o=function(a){return String.fromCharCode.apply(null,a)};
ap=function(a,b){this.i=a;this.g=0;this.l=b||0};
bp=function(a){return a.g>=a.i.byteLength};
hp=function(a,b,c){var d=new ap(c);if(!cp(d,a))return!1;d=dp(d);if(!ep(d,b))return!1;for(a=0;b;)b>>>=8,a++;b=d.l+d.g;var e=fp(d,!0);d=a+(d.l+d.g-b)+e;d=9<d?gp(d-9,8):gp(d-2,1);a=b-a;c.setUint8(a++,236);for(b=0;b<d.length;b++)c.setUint8(a++,d[b]);return!0};
mda=function(a){var b=new ap(a);ip(b);if(cp(b,[408125543,374648427,174,224]))b=dp(b);else return null;for(var c=a=null;!bp(b);){var d=fp(b,!1);if(21432==d)switch(jp(b)){default:a=0;break;case 1:a=1;break;case 3:a=2;break;case 15:a=255}else 30320==d?c=dp(b):kp(b)}if(!c)return null;for(var e,f=d=b=null;!bp(c);)switch(fp(c,!1)){case 30321:if(3!=jp(c))return null;break;case 30324:b=lp(c);break;case 30323:f=lp(c);break;case 30325:d=lp(c);break;case 30322:e=fp(c,!0);e=mp(c,e);e=new DataView(e.buffer,e.byteOffset,
e.byteLength);break;default:kp(c)}return e?new Jo(a,b,f,d,e):null};
dp=function(a){var b=fp(a,!0),c=a.i.byteOffset+a.g;c=new DataView(a.i.buffer,c,Math.min(b,a.i.buffer.byteLength-c));c=new ap(c,a.l+a.g);a.g+=b;return c};
jp=function(a){for(var b=fp(a,!0),c=np(a),d=1;d<b;d++)c=256*c+np(a);return c};
lp=function(a){var b=fp(a,!0),c=0;4==b?c=a.i.getFloat32(a.g):8==b&&(c=a.i.getFloat64(a.g));a.g+=b;return c};
op=function(a){var b=fp(a,!0);return $o(mp(a,b))};
np=function(a){return a.i.getUint8(a.g++)};
fp=function(a,b){var c=np(a);if(1==c){for(var d=c=0;7>d;d++)c=256*c+np(a);return c}d=128;for(var e=0;6>e&&d>c;e++)c=256*c+np(a),d*=128;return b?c-d:c};
kp=function(a){var b=fp(a,!0);a.g+=b};
ip=function(a){var b=a.g;a.g=0;var c=!1;try{ep(a,440786851)&&(a.g=0,ep(a,408125543)&&(c=!0))}catch(d){if(d instanceof RangeError)a.g=0,c=!1,g.Ej(d);else throw d;}a.g=b;return c};
nda=function(a){if(!ep(a,440786851,!0))return null;var b=a.g;fp(a,!1);var c=fp(a,!0)+a.g-b;a.g=b+c;if(!ep(a,408125543,!1))return null;fp(a,!0);if(!ep(a,357149030,!0))return null;var d=a.g;fp(a,!1);var e=fp(a,!0)+a.g-d;a.g=d+e;if(!ep(a,374648427,!0))return null;var f=a.g;fp(a,!1);var h=fp(a,!0)+a.g-f,l=new Uint8Array(c+12+e+h),m=new DataView(l.buffer);l.set(new Uint8Array(a.i.buffer,a.i.byteOffset+b,c));m.setUint32(c,408125543);m.setUint32(c+4,33554431);m.setUint32(c+8,4294967295);l.set(new Uint8Array(a.i.buffer,
a.i.byteOffset+d,e),c+12);l.set(new Uint8Array(a.i.buffer,a.i.byteOffset+f,h),c+12+e);return l};
pp=function(a){var b=a.g,c={Zv:1E6,bw:1E9,duration:0,Dv:0,Bn:0};if(!ep(a,408125543))return a.g=b,null;c.Dv=fp(a,!0);c.Bn=a.l+a.g;if(ep(a,357149030))for(var d=dp(a);!bp(d);){var e=fp(d,!1);2807729==e?c.Zv=jp(d):2807730==e?c.bw=jp(d):17545==e?c.duration=lp(d):kp(d)}else return a.g=b,null;a.g=b;return c};
rp=function(a,b,c){var d=a.g,e=[];if(!ep(a,475249515))return a.g=d,null;for(var f=dp(a);ep(f,187);){var h=dp(f);if(ep(h,179)){var l=jp(h);if(ep(h,183)){h=dp(h);for(var m=b;ep(h,241);)m=jp(h)+b;e.push({Vi:m,Ro:l})}}}if(0<e.length&&c==e[0].Vi)for(qp&&g.Ej(Error("opus_oboe")),b=0;b<e.length;b++)e[b].Vi+=1;a.g=d;return e};
sp=function(a){var b=a.g;a.g=0;var c=1E6;cp(a,[408125543,357149030,2807729])&&(c=jp(a));a.g=b;return c};
oda=function(a,b){var c=a.g;a.g=0;if(160!=a.i.getUint8(a.g)&&!tp(a)||!ep(a,160))return a.g=c,NaN;fp(a,!0);var d=a.g;if(!ep(a,161))return a.g=c,NaN;fp(a,!0);np(a);var e=np(a)<<8|np(a);a.g=d;if(!ep(a,155))return a.g=c,NaN;d=jp(a);a.g=c;return(e+d)*b/1E9};
tp=function(a){if(!up(a)||!ep(a,524531317))return!1;fp(a,!0);return!0};
up=function(a){if(ip(a)){if(!ep(a,408125543))return!1;fp(a,!0)}return!0};
cp=function(a,b){for(var c=0;c<b.length;c++){if(!ep(a,b[c]))return!1;c!=b.length-1&&fp(a,!0)}return!0};
ep=function(a,b,c){c=void 0===c?!1:c;if(bp(a))return!1;for(var d=a.g;fp(a,!1)!=b;)if(kp(a),d=a.g,bp(a))return!1;c&&(a.g=d);return!0};
gp=function(a,b){b||(b=Math.ceil(Math.log(a+2)/Math.log(2)/7));for(var c=1<<8-b,d=[];d.length<b-1;)d.unshift(a%256),a=Math.floor(a/256);d.unshift(a|c);return d};
mp=function(a,b){var c=new Uint8Array(a.i.buffer,a.i.byteOffset+a.g,b);a.g+=b;return c};
vp=function(a,b){this.start=a;this.end=b;this.length=b-a+1};
wp=function(a){a=a.split("-");var b=Number(a[0]),c=Number(a[1]);return isNaN(b)||isNaN(c)?null:2===a.length&&(a=new vp(b,c),!isNaN(a.start)&&!isNaN(a.end)&&!isNaN(a.length)&&0<a.length)?a:null};
xp=function(a,b){return new vp(a,a+b-1)};
zp=function(a,b,c,d,e,f,h,l,m,n,q){this.g=b;this.range=c;this.type=a;this.F="";this.i=-1;this.F=d;this.i=0<=e?e:-1;this.startTime=f||0;this.duration=h||0;this.l=l||0;this.Ra=0<=m?m:this.range?this.range.length:NaN;this.B=!!n;a=this.range?this.l+this.Ra==this.range.length:void 0===q?!!this.Ra:q;this.o=a;this.range?(this.C=this.startTime+this.duration*this.l/this.range.length,this.J=this.duration*this.Ra/this.range.length,this.u=this.C+this.J):yp(this);this.K=[]};
yp=function(a){a.C=a.startTime;a.J=a.duration;a.u=a.C+a.J};
pda=function(a,b,c){var d=!(!b||b.g!=a.g||b.type!=a.type||b.i!=a.i);return c?d&&!!b&&(a.range&&b.range?b.range.end==a.range.end:b.range==a.range)&&b.l+b.Ra==a.l+a.Ra:d};
Ap=function(a){return 1==a.type||2==a.type};
Bp=function(a){return 3==a.type||6==a.type};
Cp=function(a,b){return a.g==b.g?a.range&&b.range?a.range.start+a.l+a.Ra==b.range.start+b.l:a.i==b.i?a.l+a.Ra==b.l:a.i+1==b.i&&0==b.l&&a.o:!1};
Dp=function(a,b){return Cp(a,b)||g.Ee(a.u,b.C)||a.i+1==b.i&&0==b.l&&a.o?!0:!1};
Ep=function(a){return a.i+(a.o?1:0)};
qda=function(a){1==a.length||(0,g.Fp)(a,function(c){return!!c.range});
for(var b=1;b<a.length;b++);b=a[a.length-1];return new vp(a[0].range.start+a[0].l,b.range.start+b.l+b.Ra-1)};
Hp=function(a){a=Gp(a);var b="";g.zb(a,function(c,d){b+=d+"="+c+","});
return b.slice(0,-1)};
Gp=function(a){var b={};b.itag=Ip(a.g.info);b.type=a.type;b.seg=String(a.i);a.range&&(b.range=""+(a.range.start+a.l)+"-"+(a.range.start+a.l+a.Ra-1));b.time=""+a.C.toFixed(1)+"-"+(a.C+a.J).toFixed(1);b.off=String(a.l);b.len=String(a.Ra);a.o&&(b.end="1");a.B&&(b.eos="1");return b};
Jp=function(a,b){var c=b.i;a.F="updateWithEmsg";a.i=c;b.B&&(a.B=b.B)};
Kp=function(a,b){var c=b.Oa;a.F="updateWithSegmentInfo";a.i=c;if(a.startTime!=b.startTime||a.duration!=b.duration)a.startTime=b.startTime,a.duration=b.duration,yp(a)};
Lp=function(a){var b=this;a=void 0===a?[]:a;this.g=[];this.l=this.i=0;this.o=void 0;this.totalLength=0;a.forEach(function(c){b.append(c)})};
Mp=function(a,b){if(0===a.g.length)return!1;var c=a.g[a.g.length-1];return c&&c.buffer===b.buffer&&c.byteOffset+c.length===b.byteOffset};
Np=function(a,b){for(var c=g.p(b.g),d=c.next();!d.done;d=c.next())a.append(d.value)};
Op=function(a){a.o=void 0;a.i=0;a.l=0};
Pp=function(a,b,c){a.isFocused(b);return b-a.l+c<=a.g[a.i].length};
Qp=function(a){if(!a.o){var b=a.g[a.i];a.o=new DataView(b.buffer,b.byteOffset,b.length)}return a.o};
Rp=function(a,b,c){b=void 0===b?0:b;c=void 0===c?-1:c;if(!a.totalLength)return new DataView(new ArrayBuffer(0));0>c&&(c=a.totalLength-b);a.focus(b);if(!Pp(a,b,c)){var d=a.i,e=a.l;a.focus(b+c-1);e=new Uint8Array(a.l+a.g[a.i].length-e);for(var f=0,h=d;h<=a.i;h++)e.set(a.g[h],f),f+=a.g[h].length;a.g.splice(d,a.i-d+1,e);Op(a);a.focus(b)}d=a.g[a.i];return new DataView(d.buffer,d.byteOffset+b-a.l,c)};
Sp=function(a,b,c){a=Rp(a,void 0===b?0:b,void 0===c?-1:c);return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)};
Tp=function(a){a=Sp(a,0,-1);var b=new Uint8Array(a.length);b.set(a);return b};
Up=function(a,b){a.focus(b);return a.g[a.i][b-a.l]};
Vp=function(a,b){a.focus(b);return Pp(a,b,4)?Qp(a).getUint32(b-a.l):256*(256*(256*Up(a,b)+Up(a,b+1))+Up(a,b+2))+Up(a,b+3)};
Wp=function(a,b,c){this.info=a;this.g=b instanceof Lp?b:new Lp([b]);this.g.getLength();this.l=c;this.i=null;this.o=-1;this.u=0};
Xp=function(a){return Rp(a.g)};
Yp=function(a,b){if(1!=a.info.g.info.containerType||0!=a.info.l||!a.info.o)return!0;for(var c=Xp(a),d=0,e=0;d+4<c.byteLength;){e=c.getUint32(d);if(!e)return!1;d+=e}return d!==c.byteLength?(b&&(b.lastboxlen=e.toString(),4<=c.byteLength&&(b.lastbytes=c.getUint32(c.byteLength-4).toString()),b.boxlen=d.toString(),b.bytelen=c.byteLength.toString()),!1):!0};
Zp=function(a,b,c){var d;if(!(d=!Cp(a.info,b.info)||a.info.o)){if(c=void 0===c?!1:c)c=b.g,c=!(c.g.length?Mp(a.g,c.g[0]):1);d=c}if(d)return null;c=new zp(a.info.type,a.info.g,a.info.range,a.info.F,a.info.i,a.info.startTime,a.info.duration,a.info.l,a.info.Ra,a.info.B,a.info.o);d=b.info;c.Ra+=d.Ra;c.range&&(c.J+=d.J);c.u=d.u;c.o=d.o;c.B=c.B||d.B;d=new Lp;Np(d,a.g);Np(d,b.g);c=new Wp(c,d,a.l);c.i=b.i||a.i;if(a=c.info.range)a=c.g,a=!(1===a.g.length&&0<a.g[0].byteOffset);a&&(c.l=!1);return c};
aq=function(a){g.$p(a.info.g.info)||a.info.g.info.Qc();if(-1!=a.o)return a.o;if(a.i&&Io(a.i))return a.o=Io(a.i),a.o;if(g.$p(a.info.g.info)){var b=Xp(a);for(var c=a.info.g.g,d=NaN,e=NaN,f=0;Qo(b,f);){var h=Ro(b,f);1936286840==h.type?e=h.data.getUint32(h.dataOffset+8):1836476516==h.type?e=No(h):1952867444==h.type&&isNaN(d)&&(d=To(h));f=So(h.type)?f+8:f+h.size}!e&&c&&(e=Oo(c));b=d/e}else b=new ap(Xp(a)),c=a.l?b:new ap(new DataView(a.info.g.g.buffer)),d=sp(c),c=b.g,b.g=0,tp(b)?ep(b,231)?(d=jp(b)*d/1E9,
b.g=c,b=d):(b.g=c,b=NaN):(b.g=c,b=NaN);a.o=b||a.info.C;return a.o};
cq=function(a,b){0<a.u&&(b-=a.u);var c=aq(a)+b;bq(a,c);a.u=b};
bq=function(a,b){g.$p(a.info.g.info)||a.info.g.info.Qc();a.o=b;if(g.$p(a.info.g.info)){for(var c=Xp(a),d=a.info.g.g,e=NaN,f=NaN,h=0;Qo(c,h);){var l=Ro(c,h);isNaN(e)&&(1936286840==l.type?e=l.data.getUint32(l.dataOffset+8):1836476516==l.type&&(e=No(l)));if(1952867444==l.type){!e&&d&&(e=Oo(d));var m=To(l);isNaN(f)&&(f=Math.round(b*e)-m);m+=f;if(l.data.getUint8(l.dataOffset)){var n=l.data,q=l.dataOffset+4;n.setUint32(q,Math.floor(m/4294967296));n.setUint32(q+4,m&4294967295)}else l.data.setUint32(l.dataOffset+
4,m)}h=So(l.type)?h+8:h+l.size}return!0}c=new ap(Xp(a));e=a.l?c:new ap(new DataView(a.info.g.g.buffer));d=b;f=sp(e);e=c.g;c.g=0;if(tp(c)&&ep(c,231))if(h=fp(c,!0),d=Math.floor(1E9*d/f),Math.ceil(Math.log(d)/Math.log(2)/8)>h)c=!1;else{for(f=h-1;0<=f;f--)c.i.setUint8(c.g+f,d&255),d>>>=8;c.g=e;c=!0}else c=!1;return c};
dq=function(a){g.$p(a.info.g.info)||a.info.g.info.Qc();if(a.i&&6==a.info.type)return a.i.lf;if(g.$p(a.info.g.info)){var b=Xp(a);var c=0;b=Xo(b,1936286840);b=g.p(b);for(var d=b.next();!d.done;d=b.next())d=Uo(d.value),c+=d.tr[0]/d.xr;c=c||NaN;if(!(0<=c))a:{c=Xp(a);b=a.info.g.g;d=0;for(var e,f=0;Qo(c,d);){var h=Ro(c,d);if(1836476516==h.type)e=No(h);else if(1836019558==h.type){!e&&b&&(e=Oo(b));if(!e){c=NaN;break a}var l=Po(h.data,h.dataOffset,1953653094),m=e,n=Po(l.data,l.dataOffset,1952868452);l=Po(l.data,
l.dataOffset,1953658222);var q=Ao(n);Ao(n);q&2&&Ao(n);n=q&8?Ao(n):0;var r=Ao(l),u=r&1;q=r&4;var w=r&256,B=r&512,z=r&1024;r&=2048;var D=Bo(l);u&&Ao(l);q&&Ao(l);for(var F=u=0;F<D;F++){var H=w?Ao(l):n;B&&Ao(l);q&&0==F||!z||Ao(l);r&&Ao(l);u+=H}f+=u/m}d=So(h.type)?d+8:d+h.size}c=f||NaN}}else e=new ap(Xp(a)),c=a.l?e:new ap(new DataView(a.info.g.g.buffer)),c=oda(e,sp(c));return c||a.info.J};
eq=function(a){var b=Xp(a);var c=(c=g.Lo(b,0,1936286840))?c.data.getUint32(c.dataOffset+8):NaN;isNaN(c)&&(a=a.info.g.g,c=(b=g.Lo(b,0,1836476516))?No(b):a?Oo(a):NaN);return c};
fq=function(a){if(!a.i){g.$p(a.info.g.info)||a.info.g.info.Qc();if(g.$p(a.info.g.info)){var b=Xp(a),c=Po(b,0,1701671783);if(c){var d=Vo(c);var e=d.cO;d=Ko(d.Zz);if(b=Po(b,c.offset+c.size,1701671783)){b=Vo(b);for(var f in b)if(c=Ko(b.Zz),d&&c)for(var h in c)d[h]=c[h]}e=d?new Ho(d,e):null}else e=null}else{e=new ap(Xp(a));f=e.g;e.g=0;d=h=null;if(cp(e,[408125543,307544935,29555,26568]))for(b=dp(e);!bp(b);)c=fp(b,!1),17543==c?d=Ko(op(b)):17827==c?h=op(b):kp(b);e.g=f;e=d?new Ho(d,h):null}a.i=e}};
gq=function(){this.g=!1;this.i=0;this.Bd=!1};
hq=function(a,b){var c=void 0===b?{}:b,d=void 0===c.hasSubfragmentedFmp4?!1:c.hasSubfragmentedFmp4;c=void 0===c.Ik?!1:c.Ik;var e=new gq;e.g=a.aa("html5_streaming_xhr_no_mp4_holdback_chunk");e.i=g.O(a.experiments,"html5_time_based_consolidation_ms");e.Bd=d||c;return e};
rda=function(a,b){this.experimentIds=a?a.split(","):[];this.flags=Vk(b||"");var c={};(0,g.y)(this.experimentIds,function(d){c[d]=!0});
this.experiments=c};
g.P=function(a,b){return"true"===a.flags[b]};
g.O=function(a,b){return Number(a.flags[b])||0};
g.iq=function(a,b){var c=a.flags[b];return c?c.toString():""};
g.jq=function(){this.u=new gq;this.zD=this.mD=!1;this.Lz=2;this.B=20971520;this.F=8388608;this.o=120;this.va=3145728;this.P=62914560;this.Aa=10485760;this.Mz=this.Ca=0;this.K=NaN;this.Ng=0;this.Kh=this.Zw=2;this.Te=3;this.Iw=2;this.V=2097152;this.Hw=1048576;this.ea=!1;this.N=1800;this.Ad=5;this.Yd=10;this.J=15;this.Ec=1;this.g=1.15;this.i=1.05;this.HC=!0;this.X=!1;this.Jw=.8;this.so=this.Wa=!1;this.za=6;this.zo=this.na=!1;this.Mg=.5;this.Ve=0;this.Ih=this.Xa=!1;this.Zd=this.Xd=0;this.Xw=2;this.Ka=
5E3;this.ae=0;this.ro=6;this.la=!1;this.R=.5;this.kb=2;this.ab=this.Tw=0;this.Vw=1.5;this.Ww=this.Kg=.5;this.jd=15;this.kp=1;this.Lw=this.LC=this.Ga=!1;this.Ip=0;this.po=this.Wg=this.Rw=this.XD=this.wo=this.VD=this.UD=this.XC=!1;this.Ae=0;this.Nw=this.To=this.Pw=this.Zb=!1;this.kd=0;this.tb=this.Da=this.Zo=this.ax=this.Be=this.da=this.Sw=this.ye=this.Ow=!1;this.ca=!0;this.ze=this.W=this.RD=this.Ci=!1;this.oo=!0;this.Ue=!1;this.l="";this.OE=1048576;this.uo=this.eB=this.zb=this.C=!1;this.Wd=46800;this.La=
this.mo=this.Jh=this.Kc=this.ua=!1;this.Yw=!0;this.ma=this.lo=this.fE=this.Kw=this.Lg=this.ko=this.Lh=this.Qw=!1;this.Gb=0;this.no=!1;this.aB=0;this.qo="";this.Kl=!1};
sda=function(a,b){1080<b.xa().Rb&&!a.mD&&(a.B=36700160,a.F=5242880,a.va=10485760,a.V=4194304,a.mD=!0);2160<b.xa().Rb&&!a.zD&&(a.B=104857600,a.K=13107200,a.zD=!0);a.Hw=Math.max(65536,Math.min(a.V,5*b.g))};
tda=function(){this.l=this.g=this.i=this.started=this.o=0};
kq=function(a,b){a[b]||(a[b]=new tda);return a[b]};
mq=function(a){a=a.split("");lq.tX(a,1);lq.yI(a,31);lq.tX(a,1);lq.aY(a,47);return a.join("")};
nq=function(a,b,c,d){!a&&(void 0===c?0:c)&&g.Lm(Error("Player URL validator detects invalid url. "+(void 0===d?"":d)+": "+b));return a};
oq=function(a,b){return b&&b.test(a)?!0:!1};
qq=function(a){return(a=pq&&pq.exec(a))?a[0]:""};
rq=function(a){var b=void 0===b?!1:b;return nq(oq(a,uda),a,b,"Trusted Stream URL")};
g.sq=function(a){var b=void 0===b?!1:b;return nq(oq(a,vda),a,b,"Trusted Image URL")};
tq=function(a){var b=void 0===b?!1:b;return nq(oq(a,wda),a,b,"Trusted Promoted Video Domain URL")};
yda=function(a){var b=void 0===b?!1:b;return nq(oq(a,xda),a,b,"Drm Licensor URL")};
uq=function(a,b){b=void 0===b?!1:b;return nq(oq(a,zda),a,b,"Captions URL")};
vq=function(a){a=new g.bj(a);g.cj(a,document.location.protocol);g.dj(a,document.location.hostname);document.location.port&&g.ej(a,document.location.port);return a.toString()};
wq=function(a){a=new g.bj(a);g.cj(a,document.location.protocol);return a.toString()};
xq=function(a){this.i=a;this.l=this.path=this.scheme="";this.g={};this.url=""};
zq=function(a){yq(a);return a.l};
Aq=function(a){yq(a);return"local"===a.scheme};
Bq=function(a){yq(a);return g.Cb(a.g,function(b){return null!==b})};
Cq=function(a){var b=a.get("n");b&&(b=Rba(b),a.set("n",b))};
Dq=function(a){yq(a);if("/videoplayback"!==a.path){var b=a.clone();b.set("playerfallback","1");return b}var c=a.sc();b=new g.bj(c);var d=a.get("fvip");a=decodeURIComponent(a.get("mn")||"").split(",");if(d&&a&&1<a.length&&a[1])return c=b.g.replace(/^[^.]*/,""),g.dj(b,"r"+d+"---"+a[1]+c),b=new xq(b.toString()),b.set("fallback_count","1"),b;d=b.g.match("\\.a1\\.googlevideo\\.com$");b.g.match("\\.googlevideo\\.com$")?(g.dj(b,"redirector.googlevideo.com"),c=b.toString()):b.g.match("r[1-9].*\\.c\\.youtube\\.com$")?
(g.dj(b,"www.youtube.com"),c=b.toString()):c=vq(c);b=new xq(c);b.set("cmo=pf","1");d&&b.set("cmo=td","a1.googlevideo.com");return b};
yq=function(a){if(a.i){if(!rq(a.i)&&!a.i.startsWith("local"))throw Error("Untrusted URL: "+a.i);var b=g.jj(a.i);a.scheme=b.u;a.l=b.g+(null!=b.o?":"+b.o:"");var c=b.i;if(c.startsWith("/videoplayback"))a.path="/videoplayback",c=c.substr(14);else if(c.startsWith("/initplayback"))a.path="/initplayback",c=c.substr(13);else if(c.startsWith("/api/manifest")){var d=c.indexOf("/",12),e=c.indexOf("/",d+1);0<d&&0<e?(a.path=c.substr(0,e),c=c.substr(e+1)):(a.path=c,c="")}else a.path=c,c="";d=a.g;a.g=Eq(c);g.Ua(a.g,
Fq(b.l.toString()));g.Ua(a.g,d);"index.m3u8"===a.g.file&&(delete a.g.file,a.path+="/file/index.m3u8");a.i="";a.url=""}};
Ada=function(a){yq(a);var b=a.scheme+(a.scheme?"://":"//")+a.l+a.path;if(Bq(a)){var c=[];g.zb(a.g,function(d,e){null!==d&&c.push(e+"="+d)});
b+="?"+c.join("&")}return b};
Eq=function(a){a=a.split("/");var b=0;a[0]||b++;for(var c={};b<a.length;b+=2)a[b]&&Gq(c,a[b],a[b+1]);return c};
Fq=function(a){a=a.split("&");for(var b={},c=0;c<a.length;c++){var d=a[c],e=d.indexOf("=");0<e?Gq(b,d.substr(0,e),d.substr(e+1)):d&&(b[d]="")}return b};
Gq=function(a,b,c){if("cmo"===b){var d;0<=(d=c.indexOf("="))?(b="cmo="+c.substr(0,d),c=c.substr(d+1)):0<=(d=c.indexOf("%3D"))&&(b="cmo="+c.substr(0,d),c=c.substr(d+3))}a[b]=c};
Hq=function(a){this.tf=a;this.g={};this.url=""};
Iq=function(a,b){var c=b.indexOf("?");if(0<c){var d=Fq(b.substr(c+1));g.zb(d,function(e,f){this.set(f,e)},a);
b=b.substr(0,c)}c=Eq(b);g.zb(c,function(e,f){this.set(f,e)},a)};
Bda=function(a){var b=a.tf.sc(),c=[];g.zb(a.g,function(e,f){c.push(f+"="+e)});
if(!c.length)return b;var d=c.join("&");a=Bq(a.tf)?"&":"?";return b+a+d};
Jq=function(a,b){var c=new xq(b),d=c.get("req_id");d&&a.set("req_id",d);g.zb(a.g,function(e,f){c.set(f,null)});
return c};
Cda=function(a){this.o=a.clone();this.g=a;this.l=null;this.u=this.i=0};
Lq=function(a,b,c){var d=kq(c,zq(a.g));if(d.i>=b.Xw||1<=d.g)if(a=Kq(a),c=kq(c,zq(a)),c.i+c.g<=d.i+d.g)return!0;return!1};
Dda=function(a,b){var c=b?Kq(a):a.g;return new Hq(c)};
Kq=function(a){a.l||(a.l=Dq(a.o));return a.l};
Mq=function(a){return 1<a.i?a.u+1E3*Math.pow(1.6,a.i-1)<(0,g.M)():!0};
g.Nq=function(a,b,c){b.tf===a.g&&(a.g=Jq(b,c));b.tf===a.l&&(a.l=Jq(b,c))};
Oq=function(a,b){this.i=a[0].g.i;this.l=b||"";this.u="";this.g=a;this.range=this.g[0].range&&0<this.g[0].Ra?qda(this.g):null;this.o=this.Fd=NaN;this.B=this.requestId=null};
Pq=function(a){return!Ap(a.g[a.g.length-1])};
Qq=function(a){return 4==a.g[a.g.length-1].type};
g.Rq=function(a,b,c,d){if(a.u){var e=new Hq(new xq(a.u));a.l&&Iq(e,a.l)}else/http[s]?:\/\//.test(a.l)?e=new Hq(new xq(a.l)):(b=null===a.B?Lq(a.i,b,c):a.B,e=Dda(a.i,b),a.l&&Iq(e,a.l));(d=d||a.range)&&e.set("range",d.toString());a.requestId&&e.set("req_id",a.requestId);isNaN(a.Fd)||e.set("headm",a.Fd.toString());isNaN(a.o)||e.set("mffa",a.o+"ms");a.C&&g.zb(a.C,function(f,h){e.set(h,f)});
return e};
Sq=function(a){if(a.range)return a.range.length;a=a.g[0];return Math.round(a.J*a.g.info.g)};
Eda=function(a,b,c){return a.range?new vp(a.range.start+b,a.range.end):xp(b,c)};
Tq=function(a,b,c){this.sampleRate=a||0;this.g=b||0;this.spatialAudioType=c||0};
Wq=function(a,b,c,d,e,f,h,l,m,n){this.width=a;this.height=b;this.isAccelerated=!1;this.quality=f||Uq(a,b);this.Rb=g.Vq[this.quality];this.fps=c||0;this.stereoLayout=!e||null!=d&&0!==d&&1!==d?0:e;this.projectionType=d?2===d&&2===e?3:d:0;(a=h)||(a=g.Vq[this.quality],0===a?a="Auto":(b=this.fps,c=this.projectionType,a=a.toString()+(2===c||3===c||4===c?"s":"p")+(55<b?"60":49<b?"50":39<b?"48":"")));this.qualityLabel=a;this.g=l||"";this.primaries=m||"";this.streamType=n||0};
Xq=function(a){return 1280<=a.width||720<=a.height};
Yq=function(a){return"smpte2084"===a.g||"arib-std-b67"===a.g};
Uq=function(a,b){for(var c=Math.max(a,b),d=Math.min(a,b),e=Zq[0],f=0;f<Zq.length;f++){var h=Zq[f],l=g.Vq[h];if(c>=1.3*Math.floor(16*l/9)||d>=1.3*l)return e;e=h}return"tiny"};
ar=function(a,b,c,d,e,f,h,l,m){this.id=a;this.mimeType=b;this.audio=void 0===c?null:c;this.video=void 0===d?null:d;this.Ab=void 0===e?null:e;this.Fc=void 0===f?null:f;this.captionTrack=void 0===m?null:m;this.l=!0;this.containerType=$q(b);this.g=h||0;this.i=l||0;this.ob=Fda[Ip(this)]||""};
Ip=function(a){return a.id.split(";",1)[0]};
br=function(a){return"9"===a.ob||"("===a.ob||"9h"===a.ob||"(h"===a.ob};
cr=function(a){return"9h"===a.ob||"(h"===a.ob};
g.$p=function(a){return 1===a.containerType};
dr=function(a){return"application/x-mpegURL"===a.mimeType};
er=function(a){return/(opus|vorbis|mp4a|dtse|ac-3|ec-3)/.test(a)};
fr=function(a){return a.includes("vtt")||a.includes("text/mp4")};
$q=function(a){return 0<=a.indexOf("/mp4")?1:0<=a.indexOf("/webm")?2:0<=a.indexOf("/x-flv")?3:0<=a.indexOf("/vtt")?4:0};
gr=function(a,b,c,d,e){var f=new Tq;b in g.Vq||(b="small");d&&e?(e=Number(e),d=Number(d)):(e=g.Vq[b],d=Math.round(16*e/9));d=new Wq(d,e,0,null,void 0,b,void 0,void 0,void 0);a=unescape(a.replace(/&quot;/g,'"'));return new ar(c,a,f,d)};
hr=function(a,b,c,d){this.info=b;this.initRange=c||null;this.indexRange=d||null;this.g=null;this.u=!1;this.B=null;this.J=0;this.i=new Cda(a);this.o=null;this.K=NaN;this.l=null};
ir=function(a,b,c,d,e,f){f=void 0===f?0:f;hr.call(this,a,b,d);this.index=e||new g.vo;this.lf=f;this.N=c;this.F=!0;if(this.C=!c)this.u=!0};
jr=function(){return!("function"!==typeof window.fetch||!window.ReadableStream)};
kr=function(a){if(a.mm())return!1;a=a.Tc("content-type");return"audio/mp4"===a||"video/mp4"===a||"video/webm"===a};
lr=function(a){return a.u.Bd||a.u.Bd?a.X&&jr()?3:2:a.Wg?-1:1};
mr=function(a){var b=void 0===a?{}:a;a=void 0===b.lf?0:b.lf;var c=void 0===b.Ax?!1:b.Ax,d=void 0===b.py?0:b.py,e=void 0===b.Sc?0:b.Sc,f=void 0===b.Ke?Infinity:b.Ke,h=void 0===b.Xz?0:b.Xz;b=void 0===b.ff?!1:b.ff;this.segments=[];this.g=a;this.l=d;this.i=c;this.o=this.B=-1;this.F=e;this.K=f;this.C=null;this.J=h;this.u=b};
or=function(a,b,c){b=nr(a,b);return 0<=b&&(c||!a.segments[b].pending)};
nr=function(a,b){return ub(a.segments,function(c){return b-c.Oa})};
pr=function(a,b,c){c=void 0===c?{}:c;ir.call(this,a,b,"",void 0,void 0,c.lf||0);this.index=new mr(c)};
Gda=function(a,b,c,d,e){this.Oa=a;this.startSecs=b;this.durationSecs=c;this.g=d||NaN;this.i=e||NaN};
qr=function(a,b,c){for(;a;a=a.parentNode)if(a.attributes&&(!c||a.nodeName===c)){var d=a.getAttribute(b);if(d)return d}return""};
rr=function(a,b){for(var c=a;c;c=c.parentNode){var d=c.getElementsByTagName(b);if(0<d.length)return d[0]}return null};
sr=function(a){if(!a)return 0;var b=a.match(/PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/);return b?3600*(Number(b[2])|0)+60*(Number(b[4])|0)+(Number(b[6])|0):Number(a)|0};
tr=function(a){return a.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})$/)?a+"Z":a};
ur=function(){this.g=[];this.i=null;this.B=0;this.o=[];this.l=!1;this.C="";this.u=-1};
Hda=function(a){var b=a.o;a.o=[];return b};
Ida=function(){this.o=[];this.g=null;this.i={};this.l={}};
Mda=function(a,b,c){var d=[];b=Array.from(b.getElementsByTagName("SegmentTimeline"));b=g.p(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=e.parentNode.parentNode,h=null;"Period"==f.nodeName?h=Jda(a):"AdaptationSet"==f.nodeName?h=Kda(a,f.attributes.id?f.attributes.id.value:f.attributes.mimetype.value):"Representation"==f.nodeName&&(h=Lda(a,f.attributes.id.value));if(null==h)return;h.update(e,c);g.ob(d,Hda(h))}g.ob(a.o,d);oaa(a.o,function(l){return 1E3*l.startSecs+l.g})};
Nda=function(a){a.g&&(a.g.g=[]);g.zb(a.i,function(b){b.g=[]});
g.zb(a.l,function(b){b.g=[]})};
Jda=function(a){a.g||(a.g=new ur);return a.g};
Kda=function(a,b){a.i[b]||(a.i[b]=new ur);return a.i[b]};
Lda=function(a,b){a.l[b]||(a.l[b]=new ur);return a.l[b]};
vr=function(a,b,c,d,e){hr.call(this,a,b,d||void 0,e||void 0);this.index=new g.vo;this.C=c};
wr=function(a,b,c){var d=a.index.zt(b),e=a.index.td(b),f=a.index.getDuration(b),h;c?f=h=0:0<a.info.g&&(h=a.info.g*f);c=b==a.index.qb()&&0<h;a=new zp(3,a,null,"otfCreateRequestInfoForSegment",b,e,f,0,h,c);return new Oq([a],d)};
Oda=function(a,b){if(!a.index.Nb()){for(var c=[],d=b.C,e=b.F.split(",").filter(function(r){return 0<r.length}),f=0,h=0,l=0,m=/^(\d+)/,n=/r=(\d+)/,q=0;q<d;q++){if(0>=l)if(l=e.shift(),h=(h=m.exec(l))?+h[1]/1E3:0)l=(l=n.exec(l))?+l[1]:0,l+=1;
else return;c.push(new uo(q,f,h,NaN,"sq/"+(q+1)));f+=h;l--}a.index.append(c)}};
g.xr=function(){this.g=0;this.i=new Float64Array(128);this.l=new Float64Array(128);this.u=1;this.o=!1};
yr=function(a){a.i.length<a.g+1&&a.resize(2*a.i.length)};
zr=function(a,b,c,d,e,f){hr.call(this,a,b,c||void 0,d||void 0);this.F=null;this.index=new g.xr;this.C=e;this.lastModified=f};
Ar=function(a,b,c,d){for(var e=[];b<=a.index.qb();b++){var f=a.index,h=b;f=xp(f.zq(h),h+1<f.g||f.o?f.i[h+1]-f.i[h]:-1);h=a.index.td(b);var l=a.index.getDuration(b),m=Math.max(0,c-f.start),n=Math.min(f.end+1,c+d)-(f.start+m),q=b==a.index.qb()&&m+n==f.length;e.push(new zp(3,a,f,"getRequestInfoForRange_",b,h,l,m,n,q));if(f.start+m+n>=c+d)break}return new Oq(e)};
Br=function(){this.length=1};
Cr=function(){this.buffered=new Br};
Pda=function(a,b){return Dr(function(c,d){return g.Wm(c,d,4,1E3)},a,b)};
g.Er=function(a){var b;a.responseType&&"text"!==a.responseType?"arraybuffer"===a.responseType&&(b=$o(new Uint8Array(a.response))):b=a.responseText;return!b||2048<b.length?"":0===b.indexOf("https://")?b:""};
Dr=function(a,b,c){b.match(Qda);return a(b,c).then(function(d){var e=g.Er(d);return e?Dr(a,e,c):d})};
Rda=function(a,b,c,d){this.displayName=a;this.vssId=b;this.languageCode=c;this.kind=void 0===d?"":d};
Fr=function(a,b,c){this.name=a;this.id=b;this.isDefault=c};
Gr=function(a,b,c){a=void 0===a?"":a;b=void 0===b?null:b;c=void 0===c?!1:c;g.N.call(this);this.X=this.duration=0;this.ff=this.C=this.isLive=this.o=!1;this.Ke=this.Sc=0;this.isOtf=this.ug=!1;this.R=(0,g.M)();this.J=Infinity;this.g={};this.sourceUrl=a||"";this.F=this.V=0;this.B=null;this.ma=!!b&&g.P(b,"html5_live_nonzero_first_segment_start_time");this.i=!1;this.P=[];this.la=!!b&&g.P(b,"html5_live_self_init_segments");this.u=null;this.na=c;this.ea=!b||!g.P(b,"html5_manifest_without_credentials");this.K=
0;this.W=!!b&&g.P(b,"disable_html5_manifest_namespace_redux");this.ca="";this.N=NaN;this.da=b&&g.P(b,"disable_html5_duration_caching")?Infinity:10;this.rh=this.uj=this.l=0};
Hr=function(a){return g.Cb(a.g,function(b){return!!b.info.Fc})};
Sda=function(a){return g.Cb(a.g,function(b){return fr(b.info.mimeType)})};
Tda=function(a){return g.Db(a.g,function(b){return b.info.video?b.Qq():!0})};
Ir=function(a){return g.Cb(a.g,function(b){return Aq(b.i.g)})};
Jr=function(a,b){a.g[b.info.id]=b};
Uda=function(a,b,c,d){c=void 0===c?0:c;var e=new Gr("",d,!1);e.duration=c||0;(0,g.y)(a,function(f){var h=Kr(f,b,e.duration),l=wp(f.init),m=wp(f.index),n=parseInt(f.clen,10),q=Lr(f.url,f.sp,f.s);f=parseInt(f.lmt,10);q&&Jr(e,new zr(q,h,l,m,n,f))});
return e};
Vda=function(a,b,c,d){c=void 0===c?0:c;var e=new Gr("",d,!1);e.duration=c||0;(0,g.y)(a,function(f){var h=Kr(f,b,e.duration),l=Lr(f.url,f.sp,f.s);if(!g.$p(h)){var m=d&&g.P(d,"html5_manifestless_vp9_otf"),n=d&&g.P(d,"html5_otf_webm_audio_killswitch");if(!m||!h.isVideo()&&n)return}l&&(h.video&&3==h.video.streamType?Jr(e,new vr(l,h,"sq/0",null,null)):(m=wp(f.init),f=wp(f.index),Jr(e,new vr(l,h,"",m,f))))});
e.isOtf=!0;return e};
Wda=function(a,b,c,d){var e=new Gr("",d,!0);(0,g.y)(a,function(f){var h=Kr(f,c),l=Lr(f.url,f.sp,f.s),m=parseInt(f.target_duration_sec,10)||5;f=parseInt(f.max_dvr_duration_sec,10)||14400;var n=parseInt(l.get("mindsq"),10)||parseInt(l.get("min_sq"),10)||0,q=parseInt(l.get("maxdsq"),10)||parseInt(l.get("max_sq"),10)||Infinity;e.Sc=e.Sc||n;e.Ke=e.Ke||q;var r=!fr(h.mimeType),u=d&&g.O(d,"html5_manifestless_max_segment_history");l&&Jr(e,new pr(l,h,{lf:m,Ax:r,py:f,Sc:n,Ke:q,Xz:u,ff:b}))});
e.o=!b;e.ug=!0;e.i=!0;e.isLive=!b;e.ff=b;e.C=!!e.Sc&&!!e.Ke&&isFinite(e.Ke);return e};
Kr=function(a,b,c){c=void 0===c?0:c;var d=a.type;var e=a.itag;var f=a.xtags;f&&(e=a.itag+";"+f);var h=null;f=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){h=(a.size||"640x360").split("x");h=new Wq(+h[0],+h[1],+a.fps,+a.projection_type,+a.stereo_layout,void 0,a.quality_label,a.eotf,a.primaries,+a.stream_type);var l=h;null===Mr&&(Mr=window.MediaSource&&MediaSource.isTypeSupported&&MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.16.09.00"')&&!MediaSource.isTypeSupported('video/webm; codecs="vp09.02.51.10.01.09.99.99.00"'));
if((Mr||Nr)&&('video/webm; codecs="vp9"'==d||'video/webm; codecs="vp9.2"'==d)){var m="00",n="08",q="01",r="01",u="01";'video/webm; codecs="vp9.2"'==d&&(m="02",n="10","bt2020"===l.primaries&&(u=q="09"),"smpte2084"==l.g&&(r="16"),"arib-std-b67"==l.g&&(r="18"));d='video/webm; codecs="'+["vp09",m,"51",n,"01",q,r,u,"00"].join(".")+'"'}}m=l=null;er(d)&&(l=new Tq(+a.audio_sample_rate||void 0,+a.audio_channels||0,+a.spatial_audio_type),a.name&&(m=new Fr(a.name,a.audio_track_id,"1"==a.isDefault)));a.caption_display_name&&
a.caption_vss_id&&a.caption_language_code&&(f=new Rda(a.caption_display_name,a.caption_vss_id,a.caption_language_code,a.caption_kind));n=parseInt(a.bitrate,10)/8;q=parseInt(a.clen,10);c=c&&q?q/c:0;q=null;if(b&&a.drm_families)for(q={},a=g.p(a.drm_families.split(",")),r=a.next();!r.done;r=a.next())r=r.value,q[r]=b[r];return new ar(e,d,l,h,m,q,n,c,f)};
Xda=function(a){return(0,g.Wj)(a,function(b){return 3==+b.stream_type})?3:0};
g.Or=function(a,b){return a.B?pb(a.B.o,b):a.P.length?pb(a.P,b):[]};
Lr=function(a,b,c){b=void 0===b?"":b;c=void 0===c?"":c;a=new xq(a);a.set("alr","yes");c&&(c=mq(decodeURIComponent(c)),a.set(b,encodeURIComponent(c)));Cq(a);return a};
Rr=function(a,b){var c=qr(b,"id");c=c.replace(":",";");var d=qr(b,"mimeType"),e=qr(b,"codecs");d=e?d+'; codecs="'+e+'"':d;e=parseInt(qr(b,"bandwidth"),10)/8;var f=parseInt(rr(b,"BaseURL").getAttribute(Pr(a,"contentLength")),10);f=a.duration&&f?f/a.duration:0;var h=null;if(/(vp9|vp09|vp8|avc1|av01)/.test(d)){h=parseInt(qr(b,"width"),10);var l=parseInt(qr(b,"height"),10),m=parseInt(qr(b,"frameRate"),10),n=Yda(qr(b,Pr(a,"projectionType")));a:switch(qr(b,Pr(a,"stereoLayout"))){case "layout_left_right":var q=
1;break a;case "layout_top_bottom":q=2;break a;default:q=0}qr(b,"video_level");h=new Wq(h,l,m,n,q,void 0,void 0,void 0,void 0)}m=l=null;if(er(d))if(l=parseInt(qr(b,"audioSamplingRate"),10),m=parseInt(qr(b.getElementsByTagName("AudioChannelConfiguration")[0],"value"),10),n=Zda(qr(b,Pr(a,"spatialAudioType"))),l=new Tq(l,m,n),m=qr(b,"lang")||"und",n=rr(b,"Role")){var r=qr(n,"value")||"";g.Ib(Qr,r)?(n=m+"."+Qr[r],q="main"==r,m=qr(b,Pr(a,"langName"))||m+" - "+r,m=new Fr(m,n,q)):m=null}else m=null;q=null;
if(n=rr(b,"ContentProtection"))if(g.Ql())if((q=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==q.value)for(q={},n=n.firstChild;null!=n;n=n.nextSibling)"yt:SystemURL"==n.nodeName&&(q[n.attributes.type.value]=n.textContent.trim());else q=null;else if((q=n.attributes.schemeIdUri)&&"http://youtube.com/drm/2012/10/10"==q.textContent)for(q={},n=n.firstChild;null!=n;n=n.nextSibling)"SystemURL"==n.localName&&"http://youtube.com/yt/2012/10/10"==n.namespaceURI&&(q[n.attributes.type.textContent]=
n.textContent.trim());else q=null;return new ar(c,d,l,h,m,q,e,f)};
Yda=function(a){switch(a){case "equirectangular":return 2;case "equirectangular_threed_top_bottom":return 3;case "mesh":return 4;case "rectangular":return 1;default:return 0}};
Zda=function(a){switch(a){case "spatial_audio_type_ambisonics_5_1":return 1;case "spatial_audio_type_ambisonics_quad":return 2;case "spatial_audio_type_foa_with_non_diegetic":return 3;default:return 0}};
Sr=function(a,b){b=void 0===b?"":b;a.F=1;a.R=(0,g.M)();return g.Pf(Pda(b||a.sourceUrl,{format:"RAW",method:"GET",withCredentials:a.ea}).then((0,g.x)(a.lG,a)),(0,g.x)(a.nG,a))};
cea=function(a,b,c){return Sr(new Gr(a,b,c),a)};
dea=function(a,b,c){var d=a.getAttribute("media"),e=null;c||(a=a.getAttribute("mediaRange"),null!=a&&(c=a.split("-"),0<=parseInt(c[1],10)?e=wp(a):d=d+"?range="+a));return new uo(b.Oa,b.startSecs,b.durationSecs,b.g,d,e,b.i)};
Tr=function(a){return a.isLive&&(0,g.M)()-a.R>=a.J};
Ur=function(a){var b=a.J;isFinite(b)&&(Tr(a)?a.refresh():(b=Math.max(0,a.R+b-(0,g.M)()),a.u||(a.u=new g.G(a.refresh,b,a),g.C(a,a.u)),a.u.start(b)))};
eea=function(a){a=a.g;for(var b in a){var c=a[b].index;if(c.Nb())return c.qb()+1}return 0};
Vr=function(a){return a.uj&&a.l?a.uj-a.l:0};
Wr=function(a){if(!isNaN(a.N))return a.N;var b=a.g,c;for(c in b){var d=b[c].index;if(d.Nb()){b=0;for(c=d.Cf();c<=d.qb();c++)b+=d.getDuration(c);b/=d.Bk();b=.5*Math.round(b/.5);d.Bk()>a.da&&(a.N=b);return b}if(a.isLive&&(d=b[c],d.lf))return d.lf}return NaN};
Xr=function(a,b){for(var c in a.g){var d=a.g[c].index;if(d.Nb()){var e=d.Df(b),f=d.Iu(e);if(f)return f+b-d.td(e)}}return NaN};
fea=function(a,b){var c=Lb(a.g,function(e){return e.index.Nb()});
if(!c)return NaN;c=c.index;var d=c.Df(b);return c.td(d)==b?b:d<c.qb()?c.td(d+1):NaN};
gea=function(a,b){g.zb(a.g,function(c){g.zb(b,function(d,e){var f=c.i;f.g.set(e,d);f.o.set(e,d);f.l&&f.l.set(e,d)})})};
Pr=function(a,b){return a.W?"yt:"+b:a.ca+":"+b};
hea=function(a){return g.bb(Object.values(a.g),function(b){return b.info.Fc&&b.info.video?480<b.info.video.Rb&&"H"==b.info.ob:!1})};
Yr=function(){var a=g.Ka("yt.player.utils.videoElement_");a||(a=g.bf("VIDEO"),g.Ia("yt.player.utils.videoElement_",a,void 0));return a};
Zr=function(a){var b=Yr();return!!(b&&b.canPlayType&&b.canPlayType(a))};
as=function(a){if(/opus/.test(a)&&(g.$r&&!Fi("38")||g.$r&&Nl("crkey")))return!1;if(window.MediaSource&&window.MediaSource.isTypeSupported)return window.MediaSource.isTypeSupported(a);if(/webm/.test(a)&&!Tl())return!1;'audio/mp4; codecs="mp4a.40.2"'===a&&(a='video/mp4; codecs="avc1.4d401f"');return!!Zr(a)};
iea=function(a){try{var b=as('video/mp4; codecs="avc1.42001E"')||as('video/webm; codecs="vp9"');return(as('audio/mp4; codecs="mp4a.40.2"')||as('audio/webm; codecs="opus"'))&&(b||!a)||Zr('video/mp4; codecs="avc1.42001E, mp4a.40.2"')?null:"fmt.noneavailable"}catch(c){return"html5.missingapi"}};
bs=function(){var a=Yr();return!!a.webkitSupportsPresentationMode&&"function"===typeof a.webkitSetPresentationMode};
cs=function(){return"pictureInPictureEnabled"in window.document&&!!window.document.pictureInPictureEnabled};
ds=function(){var a=Yr();try{var b=a.muted;a.muted=!b;return a.muted!==b}catch(c){}return!1};
es=function(){g.N.call(this);this.g={}};
jea=function(){this.g=0};
fs=function(a,b){this.g=a;this.i=b;this.l=0;Object.defineProperty(this,"timestampOffset",{get:this.OO,set:this.SO});Object.defineProperty(this,"buffered",{get:this.MO})};
kea=function(){this.length=0};
gs=function(a){this.activeSourceBuffers=this.sourceBuffers=[];this.g=a;this.i=NaN;this.l=0;Object.defineProperty(this,"duration",{get:this.NO,set:this.RO});Object.defineProperty(this,"readyState",{get:this.PO});this.g.addEventListener("webkitsourceclose",(0,g.x)(this.QO,this),!0)};
hs=function(a,b){return{start:function(c){return a[c]},
end:function(c){return b[c]},
length:a.length}};
is=function(a,b,c){b=void 0===b?",":b;c=void 0===c?a?a.length:0:c;var d=[];if(a)for(c=Math.max(a.length-c,0);c<a.length;c++)d.push(a.start(c).toFixed(3)+"-"+a.end(c).toFixed(3));return d.join(b)};
js=function(a,b){if(!a)return-1;try{for(var c=0;c<a.length;c++)if(a.start(c)<=b&&a.end(c)>=b)return c}catch(d){}return-1};
ks=function(a,b){return 0<=js(a,b)};
lea=function(a,b){if(!a)return NaN;var c=js(a,b);return 0<=c?a.start(c):NaN};
ls=function(a,b){if(!a)return NaN;var c=js(a,b);return 0<=c?a.end(c):NaN};
ms=function(a){return a&&a.length?a.end(a.length-1):NaN};
ns=function(a,b){var c=ls(a,b);return 0<=c?c-b:0};
os=function(a,b,c){for(var d=[],e=[],f=0;f<a.length;f++)a.end(f)<b||a.start(f)>c||(d.push(Math.max(b,a.start(f))-b),e.push(Math.min(c,a.end(f))-b));return hs(d,e)};
g.ps=function(a,b,c){this.errorCode=a;this.g=b;this.details=c||{}};
qs=function(a){var b;for(b in a)if(a.hasOwnProperty(b)){var c=(""+a[b]).replace(/[:,=]/g,"_");var d=(d?d+";":"")+b+"."+c}return d||""};
rs=function(a){var b=void 0===b?!1:b;if(a instanceof g.ps)return a;a=a&&a instanceof Error?a:Error(""+a);b?g.Km(a):g.Lm(a);return new g.ps(b?"player.fatalexception":"player.exception",b,{name:""+a.name,message:""+a.message})};
ts=function(a,b,c){g.N.call(this);var d=this;this.g=a;this.J=b;this.F=c;this.K=this.l=this.u=null;this.B=0;this.o=function(e){return d.O(e.type,d)};
this.supports(3)&&(this.g.addEventListener("updateend",this.o),this.g.addEventListener("error",this.o));this.N=0;this.C=hs([],[]);this.i=!1};
us=function(a,b,c,d){g.N.call(this);var e=this;this.g=a;this.J={error:function(){!e.ba()&&e.isActive()&&e.O("error",e)},
updateend:function(){!e.ba()&&e.isActive()&&e.O("updateend",e)}};
on(this.g,this.J);this.i=b;this.F=c;this.B=0;this.u=Infinity;this.o=0;this.C=this.l=d};
vs=function(a,b){this.g=a;this.i=void 0===b?!1:b;this.l=!1};
ws=function(a,b){b=void 0===b?!1:b;g.A.call(this);this.u=new g.ln(this);g.C(this,this.u);this.i=this.g=null;this.l=a;var c=this.l;c=c.iJ?c.g.webkitMediaSourceURL:window.URL.createObjectURL(c);this.Mm=new vs(c,!0);this.B=b;this.o=null;mn(this.u,this.l,["sourceopen","webkitsourceopen"],this.QM);mn(this.u,this.l,["sourceclose","webkitsourceclose"],this.PM)};
mea=function(a,b){xs(a)?g.zf(function(){return b(a)}):a.o=b};
ys=function(a,b){try{a.l.duration=b}catch(c){}};
zs=function(a){return!!a.g||!!a.i};
xs=function(a){try{return"open"==a.l.readyState}catch(b){return!1}};
As=function(a){try{return"closed"==a.l.readyState}catch(b){return!0}};
Bs=function(){return!(!window.MediaSource||!window.MediaSource.isTypeSupported)};
Cs=function(a){return a.g?!!a.g.supports(0):Bs()};
Ds=function(a,b,c,d){if(!a.g||!a.i)return null;var e=a.g.isView()?a.g.g:a.g,f=a.i.isView()?a.i.g:a.i,h=new ws(a.l,!0);h.Mm=a.Mm;e=new us(e,b,c,d);b=new us(f,b,c,d);h.g=e;h.i=b;g.C(h,e);g.C(h,b);xs(a)||a.g.lr(a.g.Fb());return h};
Es=function(a,b,c){this.experiments=a;this.K=b;this.N=void 0===c?!1:c;this.u=!!g.Ka("cast.receiver.platform.canDisplayType");this.o={};this.C=!1;this.F=new Set;this.B=!0;this.i=!g.P(this.experiments,"html5_disable_protected_hdr");this.l=!1;this.J=g.P(this.experiments,"html5_disable_vp9_encrypted");a=g.Ka("cast.receiver.platform.getValue");this.g=!this.u&&a&&a("max-video-resolution-vpx")||null};
nea=function(a,b){var c=Ip(b);if("0"===c)return!0;var d=b.mimeType;if(g.P(a.experiments,"html5_disable_codec_on_platform_errors")){if(a.F.has(b.ob))return!1}else if("1"===b.ob&&a.C)return!1;var e;if(e=b.video&&(Yq(b.video)||"bt2020"===b.video.primaries)){a:if(Fs(a,Gs.EOTF))var f=!0;else{try{if(Hs&&g.$r&&3E3>window.screen.width*window.devicePixelRatio){f=!1;break a}}catch(m){}f=window.matchMedia?window.matchMedia("(dynamic-range: high)").matches||24<window.screen.pixelDepth&&window.matchMedia("(color-gamut: p3)").matches:
!1}e=!f}if(e||"338"===c&&!(g.$r?Fi(53):g.Is&&Fi(64)))return!1;e={};b.video&&(b.video.width&&(e[Gs.WIDTH.name]=b.video.width),b.video.height&&(e[Gs.HEIGHT.name]=b.video.height),b.video.fps&&(e[Gs.FRAMERATE.name]=b.video.fps),b.video.g&&(e[Gs.EOTF.name]=b.video.g),b.g&&(e[Gs.BITRATE.name]=8*b.g),"("===b.ob&&(e[Gs.CRYPTOBLOCKFORMAT.name]="subsample"),2===b.video.projectionType||3===b.video.projectionType||4===b.video.projectionType)&&(e[Gs.DECODETOTEXTURE.name]="true");b.audio&&b.audio.g&&(e[Gs.CHANNELS.name]=
b.audio.g);a.l&&br(b)&&(e[Gs.EXPERIMENTAL.name]="allowed");f=g.p(Object.keys(Gs));for(var h=f.next();!h.done;h=f.next()){h=Gs[h.value];var l;if(l=e[h.name])(l=h===Gs.EOTF&&0<b.mimeType.indexOf("vp09.02"))||(l=b,l=g.P(a.experiments,"html5_ignore_h264_framerate_cap")&&h===Gs.FRAMERATE&&("H"===l.ob||"h"===l.ob)),l=!(l||h===Gs.DECODETOTEXTURE&&!g.P(a.experiments,"html5_decode_to_texture_cap"));if(l)if(Fs(a,h))if(a.g){if(a.g[h.name]<e[h.name])return!1}else d=d+"; "+h.name+"="+e[h.name];else if(cr(b)&&
h===Gs.EOTF)return!1}!g.P(a.experiments,"disable_html5_cast_hdcp_filter2")&&a.u&&b.video&&1080<b.video.Rb&&b.Fc&&(d+="; hdcp=2.2");return"227"===c&&!g.P(a.experiments,"html5_enable_1080p_hq_cenc")||("585"===c||"588"===c||"583"===c||"586"===c||"584"===c||"587"===c||"591"===c||"592"===c)&&!g.P(a.experiments,"html5_enable_new_hvc_enc")?!1:a.isTypeSupported(d)};
Js=function(){var a=Ol()&&!Fi(29),b=Nl("google tv")&&Nl("chrome")&&!Fi(30),c=Rl();return a||b||c?!1:!!(window.MediaSource||window.WebKitMediaSource||window.HTMLMediaElement&&HTMLMediaElement.prototype.webkitSourceAddId)};
g.Ks=function(a,b){b=void 0===b?!1:b;return Js()&&a.isTypeSupported('audio/mp4; codecs="mp4a.40.2"')||!b&&a.canPlayType(Yr(),"application/x-mpegURL")?!0:!1};
Fs=function(a,b){b.name in a.o||(a.o[b.name]=oea(a,b));return a.o[b.name]};
oea=function(a,b){if(a.g)return!!a.g[b.name];if(b===Gs.BITRATE&&g.P(a.experiments,"html5_ignore_bad_bitrates")&&a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=2000000')&&!a.isTypeSupported('video/webm; codecs="vp9"; width=3840; height=2160; bitrate=20000000'))return!1;if(b===Gs.AV1_CODECS)return a.isTypeSupported("video/mp4; codecs="+b.valid)&&!a.isTypeSupported("video/mp4; codecs="+b.invalid);if(b.video){var c='video/webm; codecs="vp9"';a.isTypeSupported(c)||(c='video/mp4; codecs="avc1.4d401e"')}else c=
'audio/webm; codecs="opus"',a.isTypeSupported(c)||(c='audio/mp4; codecs="mp4a.40.2"');return a.isTypeSupported(c+"; "+b.name+"="+b.valid)&&!a.isTypeSupported(c+"; "+b.name+"="+b.invalid)};
pea=function(a){return g.Ls||$l()&&!a?!1:!0};
qea=function(a,b){this.encryptedClientKey=b;this.g=new Uint8Array(a.buffer,0,16);this.i=new Uint8Array(a.buffer,16)};
Ms=function(a){try{return g.hg(a)}catch(b){return null}};
rea=function(a){try{var b=JSON.parse(a)}catch(e){}if(b){a=b.clientKey?Ms(b.clientKey):null;var c=b.encryptedClientKey?Ms(b.encryptedClientKey):null,d=b.keyExpiresInSeconds?1E3*Number(b.keyExpiresInSeconds)+(0,g.M)():null;a&&c&&d&&(this.g=new qea(a,c));b.onesieUstreamerConfig&&(this.onesieUstreamerConfig=Ms(b.onesieUstreamerConfig));this.baseUrl=b.baseUrl}};
sea=function(){var a=g.io("yt-player-volume")||{},b=a.volume;return{volume:isNaN(b)?100:g.Be(Math.floor(b),0,100),muted:!!a.muted}};
Ns=function(a){g.ho("yt-player-bandwidth",a,2592E3)};
Os=function(){return g.io("yt-player-quality")||"auto"};
Ps=function(a,b){var c="";49<b?c="p60":32<b&&(c="p48");return a+c};
Qs=function(){return g.io("yt-player-performance-cap")||{}};
Rs=function(a){g.ho("yt-player-watch-later-pending",a)};
Ss=function(){return g.io("yt-player-headers-readable")||!1};
Ts=function(a){g.ho("yt-player-playback-on-reload",a)};
Us=function(){try{return+(window.localStorage&&window.localStorage["yt-player-av1-pref"])||0}catch(a){return 0}};
Vs=function(a){this.i=this.o=0;this.alpha=Math.exp(Math.log(.5)/a)};
Xs=function(a,b,c,d){c=void 0===c?.5:c;d=void 0===d?0:d;this.resolution=b;this.valueIndex=0;this.o=!1;this.B=!0;this.i=Math.round(a*this.resolution);this.values=Array(this.i);for(a=0;a<this.i;a++)this.values[a]=Infinity;this.F=Ws(this);this.u=c;this.C=d};
Ws=function(a){for(var b=Array(a.i),c=0;c<a.i;c++)b[c]=c;return b};
Ys=function(a,b){if(!a.o&&0===a.valueIndex)return 0;a.B&&(g.vb(a.F,function(c,d){return a.values[c]-a.values[d]}),a.B=!1);
return a.values[a.F[Math.round(b*((a.o?a.i:a.valueIndex)-1))]]||0};
tea=function(a){var b=new jea;this.policy=a;this.K=b;this.F=this.N=0;this.o=-1;this.B=this.C=Zs();this.u=new Xs(4,1,.6,.4);this.g=new Xs(10,1,.5,.4);this.i=a.i?new Vs(a.g):new Xs(a.g,20,.5,.4);this.J=new Xs(5,1,.25);this.l=new Xs(30,1,.5);a=g.io("yt-player-bandwidth")||{};this.i.l(this.policy.o,0<a.byterate?a.byterate:this.policy.l);0<a.delay&&this.u.l(1,Math.min(+a.delay,2));0<a.stall&&this.g.l(1,+a.stall);0<a.init&&(this.B=Math.min(a.init,this.B));this.o=Zs()};
$s=function(a,b,c,d,e,f){f=void 0===f?!1:f;a.J.l(b,c/b);f||(a.C=Zs());e||a.l.l(1,b-d)};
at=function(a){a=a.u.g();a=isNaN(a)?.5:a;return a=Math.min(a,5)};
bt=function(a,b,c){isNaN(c)||(a.F+=c);isNaN(b)||(a.N+=b)};
ct=function(a){a=a.i.g();return 0<a?a:1};
dt=function(a){var b=ct(a);b=1/((a.g.g()||0)+1/b);a=a.J.g();return Math.max(b,0<a?a:1)};
et=function(a){return{delay:at(a),stall:a.g.g()||0,byterate:ct(a),init:a.B}};
ft=function(a){-1<a.o&&3E4<Zs()-a.o&&(Ns(et(a)),a.o=Zs())};
gt=function(a){return 4E3<=Zs()-a.C};
uea=function(){this.g=17;this.l=13E4;this.o=.5;this.i=!1};
Q=function(a,b){return void 0===b||null===b?a:"1"===b||!0===b||1===b||"True"===b?!0:!1};
ht=function(a,b,c){for(var d in c)if(c[d]==b)return c[d];return a};
g.it=function(a,b){return void 0===b||null===b?a:Number(b)};
jt=function(a,b){return void 0===b||null===b?a:b.toString()};
kt=function(a,b){if(b){if("fullwidth"===a)return Infinity;if("fullheight"===a)return 0}if(a){var c=a.match(vea);if(c){var d=Number(c[2]);c=Number(c[1]);if(!isNaN(d)&&!isNaN(c)&&0<d)return c/d}}return NaN};
lt=function(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||g.uj("parse_video_id_from_serialized_player_response_killswitch")||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null};
Lt=function(a,b){g.A.call(this);a=a?g.Pb(a):{};this.Gb=this.Ka="";this.cspNonce=jt("",a.csp_nonce);this.experiments=new rda(b?b.serializedExperimentIds:a.fexp,b?b.serializedExperimentFlags:a.fflags);this.jd=b?b.serializedForcedExperimentIds:a.forced_experiments||void 0;this.aa("web_player_deprecated_uvr_killswitch");try{var c=document.location.toString()}catch(m){c=""}this.Ec=c;this.Ve=(c=window.location.ancestorOrigins)?Array.from(c):[];this.i=Q(!1,a.is_embed);this.deviceParams={};b&&b.device?(c=
b.device,c.brand&&(this.deviceParams.cbrand=c.brand),c.browser&&(this.deviceParams.cbr=c.browser),c.browserVersion&&(this.deviceParams.cbrver=c.browserVersion),this.deviceParams.c=c.interfaceName||"WEB",this.deviceParams.cver=c.interfaceVersion||"html5",c.interfaceTheme&&(this.deviceParams.ctheme=c.interfaceTheme),this.deviceParams.cplayer=c.interfacePlayerType||"UNIPLAYER",c.model&&(this.deviceParams.cmodel=c.model),c.network&&(this.deviceParams.cnetwork=c.network),c.os&&(this.deviceParams.cos=c.os),
c.osVersion&&(this.deviceParams.cosver=c.osVersion),c.platform&&(this.deviceParams.cplatform=c.platform)):(this.deviceParams.c=a.c||"web",this.deviceParams.cver=a.cver||"html5",this.deviceParams.cplayer="UNIPLAYER");this.loaderUrl=this.i||"TVHTML5_SIMPLY_EMBEDDED_PLAYER"==this.deviceParams.c&&a.loaderUrl?jt("",a.loaderUrl):this.Ec;this.l=oq(this.loaderUrl,wea);c=this.loaderUrl;var d=void 0===d?!1:d;this.so=nq(oq(c,xea),c,d,"Trusted Ad Domain URL");this.da=Q(!1,a.privembed);this.protocol=0==this.Ec.indexOf("http:")?
"http":"https";this.F=qq((b?b.customBaseYoutubeUrl:a.BASE_YT_URL)||"")||qq(this.Ec)||this.protocol+"://www.youtube.com/";d=b?b.eventLabel:a.el;c="detailpage";"adunit"==d?c=this.i?"embedded":"detailpage":"embedded"==d||this.l?c=ht(c,d,yea):d&&(c="embedded");this.X=c;yk();d=null;c=b?b.playerStyle:a.ps;var e=g.eb(mt,c);!c||e&&!this.l||(d=c);this.playerStyle=d;this.J=(this.u=g.eb(mt,this.playerStyle))&&"area120-boutique"!=this.playerStyle&&"play"!=this.playerStyle&&"jamboard"!=this.playerStyle;this.ro=
!this.J;this.N=Q(!1,a.disableplaybackui);this.La=(!this.N||!this.aa("web_player_disable_ui_speed_killswitch"))&&(Yr().defaultPlaybackRate?nt||g.ot||g.pt?g.Is&&Fi("20")||g.$r&&Fi("4")||g.rh&&Fi("11")||Wl():!(g.rh&&!Nl("chrome")||nt||Nl("android")||Nl("silk")):!1);this.g=Q("blazer"==this.playerStyle,a.is_html5_mobile_device||b&&b.isMobileDevice);this.g?d=!0:(d=parseInt((0,g.E)()/1E3,10),c=g.an.getInstance(),d=this.aa("block_desktop_background_playback_with_mobile_cookie")&&c&&d>parseInt(c.get("dhmu",
d.toString()),10));this.qo=d;this.za="3"==this.controlsType||this.g||Q(!1,a.use_media_volume);this.R=ds();this.To=g.qt;this.Lg=Q(!1,a.opt_out_deprecation);this.ea=Q(!1,a.pfp_chazal_ui);var f;b?void 0!=b.hideInfo&&(f=!b.hideInfo):f=a.showinfo;this.Ih=g.rt(this)&&!this.Lg||Q(!tt(this)&&!ut(this)&&!this.u,f);this.Mg=b?!!b.mobileIphoneSupportsInlinePlayback:Q(!1,a.playsinline);f=this.g&&vt&&0<wt&&2.3>=wt;d=b?b.useNativeControls:a.use_native_controls;c=this.g;d=g.xt(this)||!f&&Q(c,d)?"3":"1";this.controlsType=
"0"!=(b?b.controlsType:a.controls)?d:"0";this.kb=this.g;this.color=ht("red",a.color,zea);this.wo="3"==this.controlsType||Q(!1,a.modestbranding)&&"red"==this.color;this.ua=!this.i;this.Jh=(d=!this.ua&&!ut(this)&&!this.J&&!this.u&&!tt(this))&&!this.wo&&"1"==this.controlsType;this.Ga=g.zt(this)&&d&&"0"==this.controlsType&&!this.Jh;this.Ip=this.zo=f;this.Kh=At&&!g.Xd(601)?!1:!0;this.po=this.i||!1;this.va=ut(this)?"":(this.loaderUrl||a.post_message_origin||"").substring(0,128);this.widgetReferrer=jt("",
a.widget_referrer);this.Kc=(!this.l||Q(!0,a.enablecastapi))&&"1"==this.controlsType&&!this.g&&(ut(this)||g.zt(this)||g.Bt(this))&&!g.Ct(this)&&!Dt(this);this.kp=cs()||bs();f=b?!!b.supportsAutoplayOverride:Q(!1,a.autoplayoverride);this.Zd=!this.g&&!Nl("nintendo wiiu")&&!Nl("nintendo 3ds")||f;f=this.aa("embeds_enable_muted_autoplay")&&g.rt(this);this.ae=(b?!!b.enableMutedAutoplay:Q(!1,a.mutedautoplay)||f)&&f&&this.R&&!g.xt(this);f=(ut(this)||tt(this))&&"blazer"==this.playerStyle;this.kd=b?!!b.disableFullscreen:
!Q(!0,a.fs);this.la=!this.kd&&(f||gn());this.Ae=this.aa("uniplayer_block_pip")&&(Ol()&&Fi(58)&&!(g.ot&&Nl("version/"))||Yl);f=g.rt(this)&&!this.Lg;var h;b?void 0!=b.disableRelatedVideos&&(h=!b.disableRelatedVideos):h=a.rel;this.Da=f||Q(!this.u,h);this.ye=Q(!1,a.co_rel);this.B=g.ot&&Nl("version/")&&0<wt&&4.4>=wt?"_top":"_blank";this.ab=g.Bt(this);this.Yd="blazer"==this.playerStyle;switch(this.playerStyle){case "blogger":h="bl";break;case "gmail":h="gm";break;case "books":h="gb";break;case "docs":h=
"gd";break;case "duo":h="gu";break;case "google-live":h="gl";break;case "google-one":h="go";break;case "play":h="gp";break;case "chat":h="hc";break;case "hangouts-meet":h="hm";break;case "photos-edu":case "picasaweb":h="pw";break;default:h="yt"}this.P=h;this.yc=jt("",a.authuser);var l;b?void 0!=b.disableWatchLater&&(l=!b.disableWatchLater):l=a.showwatchlater;this.Ki=(this.i&&!this.da||!!this.yc)&&Q(!this.J,this.l?l:void 0);this.Zb=b?!!b.disableKeyboardControls:Q(!1,a.disablekb);this.loop=Q(!1,a.loop);
this.pageId=jt("",a.pageid);this.Zo=Q(!0,a.canplaylive);this.rg=Q(!1,a.livemonitor);this.disableSharing=Q(this.u,b?b.disableSharing:a.ss);(l=a.video_container_override)?(h=l.split("x"),2!==h.length?l=null:(l=Number(h[0]),h=Number(h[1]),l=isNaN(l)||isNaN(h)||0>=l*h?null:new g.He(l,h))):l=null;this.Lh=l;this.mute=b?!!b.startMuted:Q(!1,a.mute);this.ze=!this.mute&&Q("0"!=this.controlsType,a.store_user_volume);l=b?b.annotationsLoadPolicy:a.iv_load_policy;this.annotationsLoadPolicy="3"==this.controlsType?
3:ht(void 0,l,Et);this.captionsLanguagePreference=b?b.captionsLanguagePreference||"":jt("",a.cc_lang_pref);l=ht(2,a.cc_load_policy,Et);"3"==this.controlsType&&2==l&&(l=3);this.Ph=l;this.Wd=b?b.hl||"en_US":jt("en_US",a.hl);this.region=b?b.contentRegion||"US":jt("US",a.cr);this.hostLanguage=b?b.hostLanguage||"en":jt("en",a.host_language);this.ko=!this.da&&Math.random()<g.O(this.experiments,"web_player_api_logging_fraction");this.ca=!this.da;this.Te=new Set;this.deviceHasDisplay=Q(!0,a.deviceHasDisplay);
this.ji=g.it(this.ji,a.ismb);l=a;g.iq(this.experiments,"html5_qoe_intercept")?l=g.iq(this.experiments,"html5_qoe_intercept"):this.ro?(l=l.vss_host||"s.youtube.com",this.aa("www_for_videostats")&&"s.youtube.com"==l&&(l=Ft(this.F)||"www.youtube.com")):l="video.google.com";this.Kl=l;this.Ld(a,!0);this.K=new es;g.C(this,this.K);this.C=this.g&&!this.aa("enable_svg_mode_on_embed_mobile");l=b?b.innertubeApiKey:jt("",a.innertube_api_key);h=b?b.innertubeApiVersion:jt("",a.innertube_api_version);f=b?b.innertubeContextClientVersion:
jt("",a.innertube_context_client_version);this.V={innertubeApiKey:sj("INNERTUBE_API_KEY")||l,innertubeApiVersion:sj("INNERTUBE_API_VERSION")||h,xz:g.K("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Mk:this.deviceParams.c,innertubeContextClientVersion:sj("INNERTUBE_CONTEXT_CLIENT_VERSION")||f,Cm:this.hostLanguage,Bm:this.region,Jp:sj("INNERTUBE_HOST_OVERRIDE")||"",zz:!!g.K("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};this.Ng=void 0!=window.WebKitPlaybackTargetAvailabilityEvent;this.o=new Es(this.experiments,this.aa("html5_force_hfr_support")?
!0:g.Gt(this)||Sl()||Tl()||Ht(this),g.$r&&g.Xd(56)||g.Is&&g.Xd(54)||Ht(this));l=this.ji;h=this.experiments;f=new uea;g.It(this)&&(f.i=!0,f.o=.1);g.P(h,"html5_ewma_bandwidth_estimator")&&(f.i=!0);g.P(h,"html5_pctile_bandwidth_estimator")&&(f.i=!1);l&&(f.l=l/8);f.g=g.O(h,"html5_bandwidth_window_size")||f.g;this.schedule=new tea(f);this.enableSafetyMode=Q(!1,a.enable_safety_mode);this.tb=Q(this.N?!1:ut(this)&&"blazer"!=this.playerStyle,a.allow_autonav);this.sendVisitorIdHeader=b?!!b.sendVisitorIdHeader:
Q(!1,a.send_visitor_id_header);this.Xa=!1;this.Aa=(0,g.M)();this.na=0;this.Ye=!1;this.mo=Q(!1,"docs"==this.playerStyle?a.disable_native_context_menu:void 0);this.oo=g.Gt(this)&&this.aa("enable_skip_intro_button");this.embedConfig=jt("",a.embed_config);this.Ue=!1;this.Ad=Q(!1,a.full_window);this.no=Q(!1,a.embedding_app);this.Ca=!g.Jt(this)&&!g.Kt(this)&&!g.Ct(this)&&!Dt(this)&&!0;this.livingRoomAppMode=a.living_room_app_mode;this.transparentBackground=b?!!b.transparentBackground:Q(!1,a.transparent_background);
this.useFastSizingOnWatchDefault=Q(!0,b?b.useFastSizingOnWatchDefault:a.use_fast_sizing_on_watch_default);this.showMiniplayerButton=b?!!b.showMiniplayerButton:Q(!1,a.show_miniplayer_button);this.externalFullscreen=b?!!b.externalFullscreen:Q(!1,a.external_fullscreen);this.showMiniplayerUiWhenMinimized=b?!!b.showMiniplayerUiWhenMinimized:Q(!1,a.use_miniplayer_ui);this.showBackButton=Q(!1,a.showbackbutton);this.Wa=!1;this.uo=1E-4>Math.random();this.Xd=a.onesie_hot_config?new rea(a.onesie_hot_config):
void 0;this.isTectonic=!!a.isTectonic};
Mt=function(a,b){return!a.u&&Ol()&&Fi(55)&&"3"==a.controlsType&&!b};
g.Nt=function(a){a=Ft(a.F);return"www.youtube-nocookie.com"==a?"www.youtube.com":a};
g.Ot=function(a){return g.Ct(a)?"music.youtube.com":g.Nt(a)};
g.Pt=function(a,b,c){return a.protocol+"://i1.ytimg.com/vi/"+b+"/"+(c||"hqdefault.jpg")};
Qt=function(a){return ut(a)&&!g.Jt(a)};
g.xt=function(a){return At&&!a.Mg||Nl("nintendo wiiu")||Nl("nintendo 3ds")?!0:!1};
Dt=function(a){return"area120-boutique"==a.playerStyle};
g.Ct=function(a){return"music-embed"==a.playerStyle};
g.It=function(a){return/^TVHTML5/.test(a.deviceParams.c)?!0:"TV"==a.deviceParams.cplatform};
Ht=function(a){return"CHROMECAST ULTRA/STEAK"==a.deviceParams.cmodel||"CHROMECAST/STEAK"==a.deviceParams.cmodel};
g.Rt=function(){return 1<window.devicePixelRatio?window.devicePixelRatio:1};
g.Gt=function(a){return"web"==a.deviceParams.c.toLowerCase().substr(0,3)};
g.St=function(a){return"WEB"==a.deviceParams.c.toUpperCase()};
g.Kt=function(a){return"WEB_KIDS"==a.deviceParams.c};
g.Jt=function(a){return"WEB_UNPLUGGED"==a.deviceParams.c};
Tt=function(a){return"TVHTML5_UNPLUGGED"==a.deviceParams.c};
g.Ut=function(a){return g.Jt(a)||"TV_UNPLUGGED_CAST"==a.deviceParams.c||Tt(a)};
g.Vt=function(a){return"WEB_REMIX"==a.deviceParams.c};
g.Wt=function(a){return"WEB_EMBEDDED_PLAYER"==a.deviceParams.c};
g.Zt=function(a){return(a.deviceHasDisplay&&g.$r&&!Yl&&"3"!==a.controlsType?g.ot?a.i&&g.Xd(51):!0:!1)||(a.deviceHasDisplay&&g.Is&&!Yl&&"3"!==a.controlsType?g.ot?a.i&&g.Xd(48):g.Xd(38):!1)||(a.deviceHasDisplay&&g.rh&&!Yl&&"3"!==a.controlsType?g.ot?a.i&&g.Xd(37):g.Xd(27):!1)||a.deviceHasDisplay&&g.Xt&&!Xl()&&g.Xd(11)||a.deviceHasDisplay&&g.Yt&&g.Xd("604.4")};
$t=function(a){if(g.zt(a)&&vt)return!1;if(g.Is){if(!g.Xd(47)||!g.Xd(52)&&g.Xd(51))return!1}else if(g.Yt)return!1;return window.AudioContext||window.webkitAudioContext?!0:!1};
ut=function(a){return"detailpage"==a.X};
g.zt=function(a){return"embedded"==a.X};
g.au=function(a){return"leanback"==a.X};
tt=function(a){return"adunit"==a.X||"gvn"==a.playerStyle};
g.Bt=function(a){return"profilepage"==a.X};
g.rt=function(a){return a.i&&g.zt(a)&&!tt(a)&&!a.u};
bu=function(a){if(!a.W)return"";var b=a.W.split("/");if(5==b.length)return a=b[b.length-1].split("="),a[1]="s20-c",b[b.length-1]=a.join("="),b.join("/");if(8==b.length)return b.splice(7,0,"s20-c"),b.join("/");if(9==b.length)return b[7]+="-s20-c",b.join("/");g.Lm(new g.Gm("Profile image not a FIFE URL.",a.W));return a.W};
g.cu=function(a){var b=g.Ot(a);!a.aa("yt_embeds_disable_new_error_lozenge_url")&&Aea.includes(b)&&(b="www.youtube.com");return a.protocol+"://"+b};
Ft=function(a){var b=g.td(a);return(a=Number(g.sd(4,a))||null)?b+":"+a:b};
g.eu=function(a,b,c){this.start=a;this.end=b;this.active=!0;this.color="";this.o=Bea++;a=c||{};this.id=a.id||"";this.priority=a.priority||7;this.visible=a.visible||!1;this.style=a.style||du.AD_MARKER;this.namespace=a.namespace||"";if(b=a.color)b=b.toString(16),this.color="#"+Array(7-b.length).join("0")+b;this.tooltip=a.tooltip;this.icons=a.icons?a.icons.filter(function(d){return(0,g.Fp)(d.thumbnails,function(e){return g.sq(e.url)})}):null;
this.visible=this.visible;this.style=this.style;this.start=this.start};
fu=function(a){return-0x8000000000000===a?"BEFORE_MEDIA_START":0===a?"MEDIA_START":0x7ffffffffffff===a?"MEDIA_END":0x8000000000000===a?"AFTER_MEDIA_END":a.toString()};
Cea=function(a,b){switch(a.style){case du.CHAPTER_MARKER:return b?8:5;case du.AD_MARKER:return 6;case du.TIME_MARKER:return Number.POSITIVE_INFINITY;default:return 0}};
g.gu=function(a,b){return a.start-b.start||a.priority-b.priority||a.o-b.o};
g.hu=function(a){return"crn_"+a};
Dea=function(){this.P=this.X=this.i=this.o=this.l=this.B=this.C=this.N=this.K=!1;this.R=!0;this.u=0;this.W=!1;this.V=Infinity;this.J=!1;this.ca=!0;this.F=!1;this.g={}};
Eea=function(a){if(a.N)return["f"];var b="19 9h 9 h 8 (h ( H *".split(" ");a.W&&b.unshift("1");a.i&&b.unshift("h");return b};
Fea=function(a){var b=["o","a","v","A","V"];a.B&&(b=["m","M"].concat(b));a.l&&(b=["mac3","MAC3"].concat(b));a.o&&(b=["meac3","MEAC3"].concat(b));a.K&&(b=["so","sa"].concat(b));a.X&&b.unshift("a");a.C&&b.unshift("ah");return b};
iu=function(a,b){b=void 0===b?{}:b;if(Fs(a.o,Gs.AV1_CODECS)&&Fs(a.o,Gs.HEIGHT)&&Fs(a.o,Gs.BITRATE))return b.isCapabilityUsable=!0,8192;try{var c=Us();if(c)return b.localPref=c}catch(e){}c=g.O(a.experiments,"html5_av1_thresh");var d=g.O(a.experiments,"html5_av1_thresh_lcc");d&&2>=navigator.hardwareConcurrency&&(c=d);(d=g.O(a.experiments,"html5_av1_thresh_hcc"))&&4<navigator.hardwareConcurrency&&(c=d);b.coreCount=navigator.hardwareConcurrency;(d=g.O(a.experiments,"html5_av1_thresh_arm"))&&Pl()&&(b.isArm=
!0,c=d);if(d=+Qs()[Ps("1",30)]||0)b.perfCap30=d,c=Math.min(c,d);if(d=+Qs()[Ps("1",60)]||0)b.perfCap60=d,c=Math.min(c,d);return b.av1Threshold=c};
ju=function(a,b,c,d){this.flavor=a;this.g=b;this.l=c;this.experiments=d;this.i={};this.zf=this.keySystemAccess=null;this.Xo=this.Yo=-1;this.Un=null;this.o="";this.u=!!d&&g.P(d,"edge_nonprefixed_eme");this.o=d?g.iq(d,"html5_hdcp_probing_stream_url"):""};
lu=function(a){return a.u?!1:!a.keySystemAccess&&!!ku()&&"com.microsoft.playready"===a.g};
mu=function(a){return"com.microsoft.playready"===a.g};
nu=function(a){return g.Ls&&"com.microsoft.playready"===a.g&&!!navigator.requestMediaKeySystemAccess};
ou=function(a){return!a.keySystemAccess&&!!ku()&&"com.apple.fps.1_0"===a.g};
pu=function(a){return"fairplay"===a.flavor};
ku=function(){var a=window,b=a.MSMediaKeys;Vl()&&!b&&(b=a.WebKitMediaKeys);return b&&b.isTypeSupported?b:null};
qu=function(a){if(!navigator.requestMediaKeySystemAccess)return!1;if(g.$r&&!g.Ql())return Fi("45");if(g.Ls||g.We)return g.P(a,"edge_nonprefixed_eme");if(g.Is)return Fi("47");if(g.Yt){var b=g.O(a,"html5_safari_desktop_eme_min_version");if(b)return Fi(b)}return!g.P(a,"html5_disable_nonprefixed_eme_for_other")};
Gea=function(a,b,c){var d=Rl(),e=d?["com.youtube.fairplay"]:["com.widevine.alpha"];b&&(e.unshift("com.youtube.widevine.l3"),d&&c&&e.unshift("com.youtube.widevine.forcehdcp"));return d?e:a?[].concat(g.ma(e),g.ma(ru.playready)):[].concat(g.ma(ru.playready),g.ma(e))};
tu=function(a,b){this.id=a;this.Ab=b;this.captionTracks=[];this.ep=this.Qs=this.g=null;this.Cs="UNKNOWN"};
uu=function(a,b,c,d){this.l=c;this.reason=d;this.i=a||0;this.g=b||0};
vu=function(a,b){return a.i===b.i&&a.g===b.g&&a.l===b.l&&a.reason===b.reason};
wu=function(a,b,c,d){return new uu(g.Vq[a]||0,g.Vq[b]||0,c,d)};
xu=function(a){var b=g.Vq.auto;return a.i===b&&a.g===b};
zu=function(a,b){if(b.l&&xu(b))return yu;if(b.l||xu(a))return b;if(a.l||xu(b))return a;var c=a.i&&b.i?Math.max(a.i,b.i):a.i||b.i,d=a.g&&b.g?Math.min(a.g,b.g):a.g||b.g;c=Math.min(c,d);return c===a.i&&d===a.g?a:new uu(c,d,!1,d===a.g?a.reason:b.reason)};
Au=function(a){var b=a.g||a.i;return Lb(Hea,function(c){return g.Vq[c]===b})||"auto"};
Bu=function(a,b){var c=g.Vq[b];return a.i<=c&&(!a.g||a.g>=c)};
Cu=function(a,b,c){this.videoInfos=a;this.audioTracks=[];this.i=b||null;this.l=c||null;if(this.i)for(a=new Set,b=g.p(this.i),c=b.next();!c.done;c=b.next())if(c=c.value,c.Ab&&!a.has(c.Ab.id)){var d=new tu(c.id,c.Ab);a.add(c.Ab.id);this.audioTracks.push(d)}};
Du=function(a,b,c){var d={},e;for(e in c.g){var f=c.g[e],h=Ip(f.info);""==f.info.ob||("304"==h||"266"==h)&&a.R||a.P&&"h"==f.info.ob&&f.info.video&&1080<f.info.video.Rb||!nea(b,f.info)||"(h"==f.info.ob&&!b.i||(h="MAC3"==f.info.ob||"MEAC3"==f.info.ob||"M"==f.info.ob,c.isLive&&h&&!a.F||(d[f.info.ob]=d[f.info.ob]||[],d[f.info.ob].push(f.info)))}c=g.p(Object.keys(d));for(e=c.next();!e.done;e=c.next())e=e.value,d[e]&&d[e][0].isVideo()&&(d[e]=Iea(a,d[e]),d[e]=Jea(b,d[e]));return g.Ab(d,function(l){return!!l.length})};
Kea=function(a,b,c){var d={};g.zb(b,function(e,f){var h=e.filter(function(l){var m;if(m=l.Fc&&c&&l.Fc[c.flavor]&&c.i[l.mimeType])(l="("!=l.ob&&"(h"!=l.ob)||(l=(Fs(a,Gs.CRYPTOBLOCKFORMAT)||a.N)&&!a.J),m=l;return m?!0:!1});
h.length&&(d[f]=h)});
return d};
Mea=function(a,b,c,d,e){function f(u){return!!h[u]}
e=void 0===e?!1:e;var h=Du(a,b,c),l=h["9h"]?"9h":"9";if(0<a.u&&h[l]&&h["1"]){if(e){e=h["1"];var m=h[l]}else{var n=Math.min(a.u,Eu(h["1"])),q=Eu(h[l]),r=function(u){return u<=n||u>q};
e=h["1"].filter(function(u){return r(u.xa().Rb)});
e.length&&(a.g.highestAv1Resolution=e[e.length-1].xa().Rb);m=h[l].filter(function(u){return!r(u.xa().Rb)});
m.length&&(a.g.higestVp9Resolution=m[m.length-1].xa().Rb)}e=m.concat(e);e.length&&(h["19"]=e)}Hr(c)&&(h=Kea(b,h,d));b=Eea(a);d=Fea(a);b=g.bb(b,f);d=g.bb(d,f);if(!b||!d)return g.Ym();a.ca&&"1"==b&&h[l]&&(e=Eu(h["1"]),Eu(h[l])>e&&(b=l));"9"==b&&h.h&&(l=Eu(h["9"]),Eu(h.h)>1.5*l&&(b="h"),c.ug&&!pea(a.J)&&(b="h"));a=h[b];c=h[d];if(!a.length)return g.Ym();Fu(a,c);return g.Zm(new Cu(a,c,Lea(h,b,d)))};
Lea=function(a,b,c){var d=a.h;"f"==b&&(d=a[b]);var e=a.a;b=a[b]!=d;a=a[c]!=e;return d&&e&&(b||a)?(Fu(d,e),new Cu(d,e)):null};
Fu=function(a,b){g.vb(a,function(c,d){return d.xa().height*d.xa().width-c.xa().height*c.xa().width||d.g-c.g});
g.vb(b,function(c,d){return d.g-c.g})};
Jea=function(a,b){var c=(0,g.ai)(b,function(d,e){return 32<e.xa().fps?Math.min(d,e.xa().width):d},Infinity);
Infinity>c&&(b=a.B&&(a.K||Fs(a,Gs.FRAMERATE))?(0,g.hf)(b,function(d){return 32<d.xa().fps||d.xa().width<c}):(0,g.hf)(b,function(d){return!(32<d.xa().fps)}));
Sl()&&(b=(0,g.hf)(b,function(d){return"299"!=Ip(d)}));
return b};
Iea=function(a,b){return b=(0,g.hf)(b,function(c){return c.xa().Rb<=a.V})};
Eu=function(a){return(0,g.ai)(a,function(b,c){return Math.max(b,c.xa().Rb)},0)};
g.Gu=function(a){a=void 0===a?{}:a;this.languageCode=a.languageCode||"";this.languageName=a.languageName||null;this.kind=a.kind||"";this.name=a.name||null;this.id=a.id||null;this.g=a.is_servable||!1;this.isTranslateable=a.is_translateable||!1;this.url=a.url||null;this.vssId=a.vss_id||"";this.isDefault=a.is_default||!1;this.translationLanguage=a.translationLanguage||null};
g.Hu=function(a){var b=a.languageName||"",c=[b];"asr"===a.kind&&-1===b.indexOf("(")&&c.push(" (Automatic Captions)");a.name&&c.push(" - "+a.name);a.translationLanguage&&c.push(" >> "+a.translationLanguage.languageName);return c.join("")};
Nea=function(a){return navigator.mediaCapabilities?Iu(a.videoInfos).then(function(){return a},function(){return a}):g.Zm(a)};
Iu=function(a){var b=navigator.mediaCapabilities;if(!b)return g.Zm(a);var c=a.map(function(d){return b&&b.decodingInfo({type:"media-source",video:d.video?{contentType:d.mimeType,width:d.video.width||640,height:d.video.height||360,bitrate:8*d.g||1E6,framerate:d.video.fps||30}:null})});
return Vaa(c).then(function(d){for(var e=0;e<d.length;e++)a[e].l=d[e].smooth;return a},function(){return a})};
Ku=function(a){for(var b={},c=g.p(Object.keys(Ju)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[Ju[d]];e&&(b[d]=e)}return b};
Lu=function(a,b){for(var c={},d=g.p(Object.keys(Ju)),e=d.next();!e.done;e=d.next()){e=e.value;var f=b?b+e:e;f=a[f+"_webp"]||a[f];g.sq(f)&&(c[Ju[e]]=f)}return c};
Ou=function(a){var b={};if(!a||!a.thumbnails)return b;a=a.thumbnails.filter(function(l){return!!l.url});
a.sort(function(l,m){return l.width-m.width||l.height-m.height});
for(var c=g.p(Object.keys(Mu)),d=c.next();!d.done;d=c.next()){var e=Number(d.value);d=Mu[e];for(var f=g.p(a),h=f.next();!h.done;h=f.next())if(h=h.value,h.width>=e){e=Nu(h.url);g.sq(e)&&(b[d]=e);break}}(a=a.pop())&&1280<=a.width&&(a=Nu(a.url),g.sq(a)&&(b["maxresdefault.jpg"]=a));return b};
Nu=function(a){return a.startsWith("//")?"https:"+a:a};
g.R=function(a){if(a.simpleText)return a.simpleText;if(a.runs){var b=[];a=g.p(a.runs);for(var c=a.next();!c.done;c=a.next())c=c.value,c.text&&b.push(c.text);return b.join("")}return""};
g.Pu=function(a){if(a.simpleText)return a=document.createTextNode(a.simpleText),a;var b=[];if(a.runs)for(var c=0;c<a.runs.length;c++){var d=a.runs[c];d.text&&b.push(Oea(d))}return 1==b.length?b[0]:g.af("SPAN",null,b)};
Oea=function(a){var b=null,c=a.text;a.bold&&(b=g.af("B",null,b||c));a.italics&&(b=g.af("I",null,b||c));a.strikethrough&&(b=g.af("STRIKE",null,b||c));a.navigationEndpoint&&a.navigationEndpoint.urlEndpoint&&(a=a.navigationEndpoint.urlEndpoint,b=g.af("A",null,b||c),g.bd(b,a.url),"TARGET_NEW_WINDOW"==a.target&&(b.target="_blank"));return b||g.af("SPAN",null,c)};
Qu=function(a,b){Ln.call(this,1,arguments)};
Ru=function(a,b){Ln.call(this,1,arguments);this.g=a};
Pea=function(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}};
Tu=function(a){var b=Su(a);if(b.aft)return b.aft;a=g.K((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN};
Uu=function(a){return!!g.Ka("yt.timing."+(a||"")+"pingSent_")};
Vu=function(a,b){g.Ia("yt.timing."+(b||"")+"pingSent_",a,void 0)};
Xu=function(a){return g.Ka("ytcsi."+(a||"")+"data_")||Wu(a)};
Yu=function(a){a=Xu(a);a.info||(a.info={});return a.info};
Su=function(a){a=Xu(a);a.tick||(a.tick={});return a.tick};
Zu=function(a){var b=Xu(a).nonce;b||(b=g.yn(),Xu(a).nonce=b);return b};
Wu=function(a){var b={tick:{},info:{}};g.Ia("ytcsi."+(a||"")+"data_",b,void 0);return b};
av=function(a){var b=Su(a||""),c=Tu(a);c&&!$u&&(On(Qea,new Qu(Math.round(c-b._start),a)),$u=!0)};
bv=function(){var a=g.Ka("ytcsi.debug");a||(a=[],g.Ia("ytcsi.debug",a,void 0),g.Ia("ytcsi.reference",{},void 0));return a};
dv=function(a){a=a||"";var b=cv();if(b[a])return b[a];var c=bv(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d};
cv=function(){var a=g.Ka("ytcsi.reference");if(a)return a;bv();return g.Ka("ytcsi.reference")};
ev=function(){this.g=0};
fv=function(){ev.g||(ev.g=new ev);return ev.g};
hv=function(a,b){gv[b]=gv[b]||{count:0};var c=gv[b];c.count++;c.time=(0,g.M)();a.g||(a.g=qk(function(){var d=(0,g.M)(),e;for(e in gv)gv[e]&&6E4<d-gv[e].time&&delete gv[e];a&&(a.g=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new g.Gm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||g.Lm(c)),!0):!1};
iv=function(a){return!!g.K("FORCE_CSI_ON_GEL",!1)||g.uj("csi_on_gel")||!!Xu(a).useGel};
jv=function(a){a=Xu(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel};
kv=function(a){Wu(a);Rea();Vu(!1,a);a||(g.K("TIMING_ACTION")&&rj("PREVIOUS_ACTION",g.K("TIMING_ACTION")),rj("TIMING_ACTION",""))};
g.pv=function(a,b,c){c=c?c:a;lv(c);var d=c||"",e=cv();e[d]&&delete e[d];var f=bv(),h={timerName:d,info:{},tick:{},span:{}};f.push(h);e[d]=h;dv(c||"").info.actionType=a;kv(c);Xu(c).useGel=!0;rj(c+"TIMING_AFT_KEYS",b);rj(c+"TIMING_ACTION",a);mv("c",c);if(iv(c)){a={actionType:nv[sj((c||"")+"TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN",previousAction:nv[sj("PREVIOUS_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(b=g.Hn())a.clientScreenNonce=b;b=Zu(c);fv().info(a,b)}g.Ia("ytglobal.timing"+(c||"")+"ready_",!0,void 0);
ov(c)};
mv=function(a,b){g.qv("yt_sts",a,b);g.rv("_start",void 0,b)};
g.qv=function(a,b,c){if(null!==b)if(Yu(c)[a]=b,iv(c)){var d=b;b=jv(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in tv){b=tv[a];g.eb(Sea,b)&&(d=!!d);a in uv&&"string"===typeof d&&(d=uv[a]+d.toUpperCase());a=d;d=b.split(".");for(var h=e={},l=0;l<d.length-1;l++){var m=d[l];h[m]={};h=h[m]}h[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;b=ro({},e)}else g.eb(Tea,a)||g.Lm(new g.Gm("Unknown label logged with GEL CSI",
a)),b=void 0;b&&vv(b,c)}else dv(c||"").info[a]=b};
vv=function(a,b){if(iv(b)){var c=dv(b||"");ro(c.info,a);c=jv(b);"gelInfos"in c||(c.gelInfos={});ro(c.gelInfos,a);c=Zu(b);fv().info(a,c)}};
g.rv=function(a,b,c){var d=Su(c);if(g.uj("use_first_tick")&&wv(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;xv.mark&&(g.fc(e,"mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),xv.mark(e))}e=b||(0,g.M)();d[a]=e;e=jv(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||(0,g.M)();if(iv(c)){dv(c||"").tick[a]=b||(0,g.M)();e=Zu(c);if("_start"===a){var f=fv();hv(f,"baseline_"+e)||g.Im("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else fv().tick(a,e,b);av(c);e=!0}else e=!1;e||(ov(c),dv(c||"").tick[a]=b||
(0,g.M)());return d[a]};
yv=function(a){var b="above_the_fold";xv&&xv.measure&&(g.fc(b,"measure_")||(b="measure_"+b),a?xv.measure(b,a):xv.measure(b))};
wv=function(a,b){var c=Su(b);return a in c};
zv=function(a){wv("_start","video_to_ad")&&!wv(a,"video_to_ad")&&g.rv(a,void 0,"video_to_ad")};
ov=function(a){if(!Uu(a)){var b=g.K((a||"")+"TIMING_ACTION",void 0),c=Su(a);if(g.Ka("ytglobal.timing"+(a||"")+"ready_")&&b&&wv("_start")&&Tu(a))if(av(a),a)Av(a);else{b=!0;var d=g.K("TIMING_WAIT",[]);if(d.length)for(var e=0,f=d.length;e<f;++e)if(!(d[e]in c)){b=!1;break}b&&Av(a)}}};
Uea=function(){switch(Vj()){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}};
Av=function(a){if(!iv(a)){var b=Su(a),c=Yu(a),d=b._start,e=g.K("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:g.K((a||"")+"TIMING_ACTION",void 0)},h=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Tu(a);var l=Su(a),m=l.pbr,n=l.vc;l=l.pbs;m&&n&&l&&m<n&&n<l&&Yu(a).yt_pvis&&"youtube"===e&&(g.qv("yt_lt","hot_bg",a),e=b.vc,m=b.pbs,delete b.aft,c.aft=Math.round(m-e));for(var q in c)"_"!==q.charAt(0)&&(f[q]=c[q]);b.ps=(0,g.M)();q={};e=[];for(var r in b)"_"!==r.charAt(0)&&(m=Math.round(b[r]-d),q[r]=m,e.push(r+
"."+m));f.rt=e.join(",");b=!!c.ap;g.uj("debug_csi_data")&&(c=g.Ka("yt.timing.csiData"),c||(c=[],g.Ia("yt.timing.csiData",c,void 0)),c.push({page:location.href,time:new Date,args:f}));c="";for(var u in f)f.hasOwnProperty(u)&&(c+="&"+u+"="+f[u]);f="/csi_204?"+c.substring(1);window.navigator&&window.navigator.sendBeacon&&b?no(f):g.mo(f);Vu(!0,a);On(g.Bv,new Ru(q.aft+(Number(h)||0),a))}};
lv=function(a){if(iv(a))wv("_start",a)&&g.rv("aa",void 0,a);else if(!Uu(a)){var b=g.K("CSI_SERVICE_NAME","youtube");g.K((a||"")+"TIMING_ACTION",void 0)&&b&&(g.rv("aa",void 0,a),g.qv("ap",1,a),g.qv("yt_fss","c",a),Av(a))}};
Cv=function(a,b,c,d){d=void 0===d?!1:d;g.A.call(this);this.experiments=b;this.useCobaltWidevine=d;this.g=[];this.i={};this.o={};this.Va=null;this.u=!1;this.l=[];this.initialize(a,!c)};
Dv=function(a){if(!a.ba())if(0===a.g.length)a.Va(a.l);else{var b=a.g[0],c=a.i[b],d=Vea(a,c);navigator.requestMediaKeySystemAccess(b,d).then(g.Dj(function(e){if(!a.ba()){c.keySystemAccess=e;if(mu(c)){e=Yr();for(var f=g.p(Object.keys(a.o[c.flavor])),h=f.next();!h.done;h=f.next())h=h.value,c.i[h]=!!e.canPlayType(h)}else{e=c.keySystemAccess.getConfiguration();if(e.audioCapabilities)for(f=g.p(e.audioCapabilities),h=f.next();!h.done;h=f.next())c.i[h.value.contentType]=!0;if(e.videoCapabilities)for(e=g.p(e.videoCapabilities),
f=e.next();!f.done;f=e.next())c.i[f.value.contentType]=!0}a.l.push(c);a.aa("html5_drm_fallback_to_playready_on_retry")||a.useCobaltWidevine?(a.g.shift(),Dv(a)):a.Va(a.l)}}),g.Dj(function(){a.u=!a.u&&"widevine"===a.i[a.g[0]].flavor;
a.u||a.g.shift();Dv(a)}))}};
Vea=function(a,b){var c={initDataTypes:["cenc","webm"],audioCapabilities:[],videoCapabilities:[]};mu(b)&&(c.initDataTypes=["keyids","cenc"]);for(var d=g.p(Object.keys(a.o[b.flavor])),e=d.next();!e.done;e=d.next()){e=e.value;var f=0===e.indexOf("audio/"),h=f?c.audioCapabilities:c.videoCapabilities;"widevine"!==b.flavor||a.u?h.push({contentType:e}):f?h.push({contentType:e,robustness:"SW_SECURE_CRYPTO"}):(h.push({contentType:e,robustness:"HW_SECURE_ALL"}),h.push({contentType:e,robustness:"SW_SECURE_DECODE"}))}return[c]};
Xea=function(a){if(ku()&&g.Yt)a.l.push(new ju("fairplay","com.apple.fps.1_0","",a.experiments));else{var b=Wea(),c=g.bb(a.g,function(d){var e=a.i[d],f=!1,h=!1,l;for(l in a.o[e.flavor])b(l,d)&&(e.i[l]=!0,f=f||0===l.indexOf("audio/"),h=h||0===l.indexOf("video/"));return f&&h});
c&&a.l.push(a.i[c]);a.g=[]}a.Va(a.l)};
Wea=function(){var a=ku();if(a){var b=a.isTypeSupported;return function(d,e){return b(e,d)}}var c=Yr();
return c&&(c.addKey||c.webkitAddKey)?function(d,e){return!!c.canPlayType(d,e)}:function(){return!1}};
Ev=function(a){this.ya=a};
Fv=function(a,b,c){if(c)return g.Ym();var d={};c=Yr();b=g.p(b);for(var e=b.next();!e.done;e=b.next())if(e=e.value,a.canPlayType(c,e.Pd().mimeType)){var f=e.ya.xa().quality;if(!d[f]||d[f].Pd().Qc())d[f]=e}var h=[];d.auto&&h.push(d.auto);(0,g.y)(Zq,function(l){(l=d[l])&&h.push(l)});
return h.length?g.Zm(h):g.Ym()};
Yea=function(a,b,c,d){this.l=a;this.i=b;this.cpn=c;this.experiments=void 0===d?null:d;this.o=0;this.g=""};
Gv=function(a,b,c){a.cpn&&(b=g.Dd(b,{cpn:a.cpn}));c&&(b=g.Dd(b,{tT:c}));return b};
Hv=function(a,b){var c=a.itag.toString();null!==b&&(c+=b.itag.toString());return c};
Zea=function(a,b,c){var d="#EXT-X-MEDIA:TYPE=AUDIO,",e="YES",f="audio";if(b.Ab){f=b.Ab;var h=f.getId().split(".")[0];h&&(d+='LANGUAGE="'+h+'",');a.g||f.getIsDefault()||(e="NO");f=f.getName()}h="";null!==c&&(h=c.itag.toString());a=Gv(a,b.url,h);return d=d+('NAME="'+f+'",DEFAULT='+(e+',AUTOSELECT=YES,GROUP-ID="'))+(Hv(b,c)+'",URI="'+(a+'"'))};
$ea=function(a,b,c){var d;c="#EXT-X-STREAM-INF:BANDWIDTH="+(b.bitrate+c.bitrate)+',CODECS="'+(b.codecs+","+c.codecs+'",RESOLUTION=')+(b.width+"x"+b.height+',AUDIO="')+(Hv(c,b)+'",CLOSED-CAPTIONS=NONE');(null===(d=a.experiments)||void 0===d?0:g.P(d,"html5_hls_frame_rate"))&&1<b.fps&&(c+=",FRAME-RATE="+b.fps);a.experiments&&g.P(a.experiments,"html5_hls_video_range")&&b.g&&(c+=",VIDEO-RANGE="+b.g);return c};
afa=function(a){for(var b=[],c=[],d=g.p(a.i),e=d.next();!e.done;e=d.next())e=e.value,e.bitrate<=a.o?b.push(e):c.push(e);b.sort(function(f,h){return h.bitrate-f.bitrate});
c.sort(function(f,h){return f.bitrate-h.bitrate});
a.i=b.concat(c)};
bfa=function(a,b,c,d,e,f,h,l,m,n,q){this.itag=a;this.url=b;this.codecs=c;this.width=d;this.height=e;this.fps=f;this.bitrate=h;this.Ab=void 0===q?null:q;this.audioItag=l||null;this.g=m||null;this.Fc=n||""};
Iv=function(a){var b={};a=g.p(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d={bt709:"SDR",bt2020:"SDR",smpte2084:"PQ","arib-std-b67":"HLG"},e=c.type.match(/codecs="([^"]*)"/);e=e?e[1]:"";var f=null;c.audio_track_id&&(f=new Fr(c.name,c.audio_track_id,!!c.is_default));var h=c.eotf;c=new bfa(c.itag,c.url,e,+c.width,+c.height,+c.fps,+c.bitrate,c.audio_itag,h?d[h]:void 0,c.drm_families,f);b[c.itag]=b[c.itag]||[];b[c.itag].push(c)}return b};
Jv=function(a,b,c){this.ya=a;this.i=b;this.expiration=c;this.g=null};
cfa=function(a){if(!(Yl||Vl()||Rl()))return null;a=Iv(a);if(!a)return null;for(var b=[],c={},d=g.p(Object.keys(a)),e=d.next();!e.done;e=d.next()){e=g.p(a[e.value]);for(var f=e.next();!f.done;f=e.next()){var h=f.value;h.Ab&&(f=h.Ab.getId(),c[f]||(h=new tu(f,h.Ab),c[f]=h,b.push(h)))}}return 0<b.length?b:null};
efa=function(a,b,c,d,e){if(!(Yl||Vl()||Rl()))return g.Ym();var f=dfa(c),h=Iv(c);if(!h)return g.Ym();c={};var l=(c.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",c),m;c=[];var n=[],q=[],r=g.O(a.experiments,"html5_hls_min_video_height"),u=null;for(D in h)if(!g.P(a.experiments,"html5_disable_drm_hfr_1080")||"383"!==D&&"373"!==D){var w=g.p(h[D]);for(m=w.next();!m.done;m=w.next()){var B=m.value;if(B.width){if(!(B.height<r)){var z=h[B.audioItag];z&&(c.push(B),m="fairplay"===B.Fc?l:null,q.push(Kv(z,
[B],e,B.itag,B.width,B.height,B.fps,f,a.experiments,void 0,void 0,m)),!u||B.width*B.height*B.fps>u.width*u.height*u.fps)&&(u=B)}}else n.push(B)}}m=q.reduce(function(F,H){return!!H.Pd().Fc&&F},!0)?l:null;
d=Math.max(d,g.O(a.experiments,"html5_hls_initial_bitrate"));var D=u||{};q.push(Kv(n,c,e,"93",void 0===D.width?0:D.width,void 0===D.height?0:D.height,void 0===D.fps?0:D.fps,f,a.experiments,"auto",d,m));return Fv(a.o,q,Mt(a,b))};
Kv=function(a,b,c,d,e,f,h,l,m,n,q,r){d=new ar(d,"application/x-mpegURL",new Tq,new Wq(e,f,h,null,void 0,n),void 0,r);a=new Yea(a,b,c,m);a.o=q?q:1369843;return new Jv(d,a,l)};
dfa=function(a){a=g.p(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.url&&(b=b.url.split("expire/"),!(1>=b.length)))return+b[1].split("/")[0];return NaN};
Lv=function(a,b){this.ya=a;this.g=b};
Mv=function(a,b){this.ya=a;this.g=b};
ffa=function(a){var b=[];(0,g.y)(a,function(c){if(c&&c.url){var d=gr(c.type,"medium","0");b.push(new Mv(d,c.url))}});
return b};
Nv=function(a,b,c){var d=void 0===c?{}:c;c=void 0===d.isBackground?!1:d.isBackground;var e=void 0===d.ll?!1:d.ll,f=void 0===d.Lp?!1:d.Lp;d=void 0===d.videoDuration?0:d.videoDuration;this.videoId=a;this.status=b;this.isBackground=c;this.ll=e;this.Lp=f;this.videoDuration=d};
Pv=function(a){if(!Ov||(void 0===a?0:a)){a=window.localStorage["yt-player-lv"];try{Ov=JSON.parse(a||"{}")}catch(b){Ov={}}}return Ov};
Qv=function(a){var b=JSON.stringify(a);window.localStorage["yt-player-lv"]=b;Ov=a};
Rv=function(a){return Pv()[a]||0};
Sv=function(){var a=Pv();return Object.keys(a)};
Tv=function(a){var b=Pv();return Object.keys(b).filter(function(c){return b[c]===a})};
Uv=function(a,b,c){c=void 0===c?!1:c;var d=Pv(!0);c&&delete d[a];b!==d[a]&&(0!==b?d[a]=b:delete d[a],Qv(d))};
Vv=function(a){return!!a&&1===Rv(a)};
Xv=function(){return g.hh(this,function b(){return g.Aa(b,function(c){Wv||(Wv=new Promise(function(d,e){var f=indexedDB.open("yt-player-local-media",3);f.onerror=function(h){var l=h.target;"VersionError"===l.error.name?(h=indexedDB.open("yt-player-local-media"),h.onsuccess=function(){return void d(l.result)},h.onerror=e):e()};
f.onsuccess=function(h){var l=h.target.result;l.onversionchange=function(){l.close();Wv=null};
d(l)};
f.onupgradeneeded=function(h){var l=h.target.result;2>h.oldVersion&&(l.createObjectStore("index"),l.createObjectStore("media"));3>h.oldVersion&&l.createObjectStore("metadata")}}));
return c["return"](Wv)})})};
Yv=function(a,b){return g.hh(this,function d(){var e,f;return g.Aa(d,function(h){e=IDBKeyRange.bound(b+"|",b+"~");f=a.objectStore("index").getAll(e);return h["return"](new Promise(function(l,m){f.onsuccess=function(n){return void l(n.target.result.join(","))};
f.onerror=m}))})})};
gfa=function(){return g.hh(this,function b(){var c;return g.Aa(b,function(d){if(1==d.g)return Wv?g.sa(d,Wv,3):d.Ic(2);2!=d.g&&(c=d.i,c.close(),Wv=null);return d["return"](new Promise(function(e,f){var h=indexedDB.deleteDatabase("yt-player-local-media");h.onsuccess=function(){return void e()};
h.onerror=function(){return void f()}}))})})};
Zv=function(a,b){return g.hh(this,function d(){var e,f,h,l;return g.Aa(d,function(m){if(1==m.g)return g.sa(m,Xv(),2);e=m.i;f=["index","media"];b&&f.push("metadata");h=e.transaction(f,"readwrite");l=IDBKeyRange.bound(a+"|",a+"~");h.objectStore("index")["delete"](l);h.objectStore("media")["delete"](l);b&&h.objectStore("metadata")["delete"](a);return m["return"](new Promise(function(n,q){h.oncomplete=function(){return void n()};
h.onabort=q}))})})};
jfa=function(){return g.hh(this,function b(){var c,d,e,f;return g.Aa(b,function(h){switch(h.g){case 1:return g.sa(h,Xv(),2);case 2:return c=h.i,d=c.transaction(["index","media"],"readwrite"),g.sa(h,hfa(d),3);case 3:e=h.i;var l=Pv(!0);l=Object.assign({},l);var m=Object.assign({},e),n;for(n in l)m[n]?(4!==l[n]&&(l[n]=m[n]),delete m[n]):3!==l[n]&&2!==l[n]&&(l[n]=4);Object.assign(l,m);Qv(l);JSON.stringify(l);f=l;return g.sa(h,ifa(d,f),4);case 4:return h["return"](f)}})})};
hfa=function(a){return g.hh(this,function c(){var d;return g.Aa(c,function(e){d=a.objectStore("index").openCursor();return e["return"](new Promise(function(f,h){var l={};d.onsuccess=function(m){if(m=m.target.result){var n=m.key.match(/^([\w\-_]+)\|(a|v)$/);if(n){var q=n[1];n=n[2];l[q]=l[q]||{};l[q][n]=$v(m.value)}else a.objectStore("index")["delete"](m.key);m["continue"]()}else{m={};q=g.p(Object.keys(l));for(n=q.next();!n.done;n=q.next()){n=n.value;var r=l[n].v;m[n]=l[n].a&&r?1:2}f(m)}};
d.onerror=h}))})})};
ifa=function(a,b){return g.hh(this,function d(){var e;return g.Aa(d,function(f){e=a.objectStore("media").openKeyCursor();return f["return"](new Promise(function(h,l){e.onsuccess=function(m){m=m.target.result;if(!m)return h();var n=m.key.match(/^([\w\-_]+)\|(\d+)\|(\d+)$/);n&&b[n[1]]||a.objectStore("media")["delete"](m.key);m["continue"]()};
e.onerror=l}))})})};
kfa=function(a,b,c){g.hh(this,function e(){var f,h,l,m,n,q,r,u;return g.Aa(e,function(w){if(1==w.g)return g.sa(w,Xv(),2);if(3!=w.g)return f=w.i,h=f.transaction(["index","media"],"readwrite"),l=h.objectStore("index").openCursor(),m={},n=b,g.sa(w,new Promise(function(B,z){l.onsuccess=function(D){if(D=D.target.result){var F=D.key.match(/^([\w\-_]+)\|(a|v)$/);if(F){F=F[1];var H=Yk(D.value);!m[F]&&0<H.length&&(H=+H[0].mket,isNaN(H)||(m[F]=H,n+=H))}D["continue"]()}else B(m)};
l.onerror=z}),3);
for(q=Sv();0<q.length&&n>c;)r=q.shift(),r!==a&&(n-=m[r]||0,delete m[r],u=IDBKeyRange.bound(r+"|",r+"~"),h.objectStore("index")["delete"](u),h.objectStore("media")["delete"](u),Uv(r,0));return w["return"](new Promise(function(B,z){h.oncomplete=function(){return B()};
h.onabort=z}))})})};
lfa=function(a,b){g.hh(this,function d(){var e,f;return g.Aa(d,function(h){if(1==h.g)return g.sa(h,Xv(),2);e=h.i;f=e.transaction(["metadata"],"readwrite");f.objectStore("metadata").put(b,a);return h["return"](new Promise(function(l,m){f.oncomplete=function(){return void l()};
f.onabort=m}))})})};
bw=function(a,b,c,d,e){return g.hh(this,function h(){var l,m,n,q,r,u,w,B;return g.Aa(h,function(z){if(1==z.g)return l=Rv(a),4===l?z["return"](Promise.resolve(4)):g.sa(z,Xv(),2);m=z.i;void 0!==d&&void 0!==e?(n=m.transaction(["index","media"],"readwrite"),q=""+a+"|"+b.id+"|"+d,n.objectStore("media").put(e,q)):n=m.transaction(["index"],"readwrite");r=aw(a,b.isVideo());u=aw(a,!b.isVideo());n.objectStore("index").put(c,r);B=(w=$v(c))?n.objectStore("index").get(u):null;return z["return"](new Promise(function(D,
F){n.oncomplete=function(){var H=Rv(a);4!==H&&w&&B&&$v(B.result)&&(H=1,Uv(a,H));D(H)};
n.onabort=function(H){var V=Rv(a);4===V?D(V):(Uv(a,4),F(H))}}))})})};
mfa=function(a){return g.hh(this,function c(){var d,e;return g.Aa(c,function(f){if(1==f.g)return g.sa(f,Xv(),2);d=f.i;e=d.transaction("index");return f["return"](Yv(e,a))})})};
nfa=function(a,b,c){return g.hh(this,function e(){var f,h,l,m;return g.Aa(e,function(n){if(1==n.g)return g.sa(n,Xv(),2);f=n.i;h=f.transaction("media");l=""+a+"|"+b+"|"+c;m=h.objectStore("media").get(l);return n["return"](new Promise(function(q,r){h.oncomplete=function(){return void q(m.result)};
h.onabort=r}))})})};
ofa=function(a){return g.hh(this,function c(){var d,e;return g.Aa(c,function(f){if(1==f.g)return g.sa(f,Xv(),2);d=f.i;e=d.transaction(["index","metadata"]);return f["return"](cw(e,a))})})};
pfa=function(){return g.hh(this,function b(){var c,d;return g.Aa(b,function(e){if(1==e.g)return g.sa(e,Xv(),2);c=e.i;d=c.transaction(["index","metadata"]);return e["return"](Promise.all(Sv().map(function(f){return cw(d,f)})))})})};
cw=function(a,b){return g.hh(this,function d(){var e,f,h,l,m,n,q,r,u;return g.Aa(d,function(w){if(1==w.g)return e=a.objectStore("metadata").get(b),f=new Promise(function(B,z){e.onsuccess=function(){return void B(e.result)};
e.onerror=z}),g.sa(w,Yv(a,b),2);
if(3!=w.g){h=w.i;l={videoId:b,totalSize:0,downloadedSize:0,status:Rv(b),details:null};if(!h.length)return w["return"](l);m=Yk(h);n=g.p(m);for(q=n.next();!q.done;q=n.next())r=q.value,l.totalSize+=+r.mket*+r.avbr,l.downloadedSize+=r.hasOwnProperty("dlt")?(+r.dlt||0)*+r.avbr:+r.mket*+r.avbr;u=l;return g.sa(w,f,3)}u.details=w.i||null;return w["return"](l)})})};
dw=function(a){return g.hh(this,function c(){return g.Aa(c,function(d){Uv(a,0);return d["return"](Zv(a,!0))})})};
qfa=function(){return g.hh(this,function b(){return g.Aa(b,function(c){delete window.localStorage["yt-player-lv"];Ov=null;return c["return"](gfa())})})};
$v=function(a){return!!a&&-1===a.indexOf("dlt")};
aw=function(a,b){return""+a+"|"+(b?"v":"a")};
rfa=function(a){if(a=a.commonConfig)this.url=a.url,this.urlQueryOverride=a.urlQueryOverride,a.ustreamerConfig&&(this.ustreamerConfig=Ms(a.ustreamerConfig))};
ew=function(a){g.N.call(this);this.g=null;this.l=new aj;this.g=null;this.B=new Set;this.crossOrigin=a||""};
hw=function(a,b,c){c=fw(a,c);for(var d,e;0<=c;c--)if(d=a.levels[c],e=Math.floor(b/(d.columns*d.rows)),!d.Nb(e)){d=a;var f=c,h=f+"-"+e;d.B.has(h)||(d.B.add(h),$i(d.l,f,{Sz:f,SA:e}))}gw(a)};
gw=function(a){if(!a.g&&!a.l.isEmpty()){var b=a.l.remove();a.g=sfa(a,b)}};
sfa=function(a,b){var c=document.createElement("img");a.crossOrigin&&(c.crossOrigin=a.crossOrigin);c.src=a.levels[b.Sz].sc(b.SA);c.onload=function(){var d=b.Sz,e=b.SA;null!==a.g&&(a.g.onload=null,a.g=null);d=a.levels[d];d.loaded.add(e);gw(a);var f=d.columns*d.rows;e*=f;d=Math.min(e+f-1,d.ot()-1);e=[e,d];a.O("l",e[0],e[1])};
return c};
g.iw=function(a,b,c,d){this.level=a;this.u=b;this.loaded=new Set;this.level=a;this.u=b;a=c.split("#");this.width=Math.floor(Number(a[0]));this.height=Math.floor(Number(a[1]));this.l=Math.floor(Number(a[2]));this.columns=Math.floor(Number(a[3]));this.rows=Math.floor(Number(a[4]));this.g=Math.floor(Number(a[5]));this.o=a[6];this.signature=a[7];this.videoLength=d};
jw=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;ew.call(this,c);this.isLive=d;this.C=!!e;this.levels=this.i(a,b);this.o=new Map;1<this.levels.length&&this.levels[0].isDefault()&&this.levels.splice(0,1)};
kw=function(a,b,c){return(a=a.levels[b])?a.wq(c):-1};
fw=function(a,b){var c=a.o.get(b);if(c)return c;c=a.levels.length;for(var d=0;d<c;d++)if(a.levels[d].od()>=b)return a.o.set(b,d),d;a.o.set(b,c-1);return c-1};
lw=function(a,b,c,d){c=c.split("#");c=[c[1],c[2],0,c[3],c[4],-1,c[0],""].join("#");g.iw.call(this,a,b,c,0);this.i=null;this.B=d?3:0};
mw=function(a,b,c,d){jw.call(this,a,0,void 0,b,!(void 0===d||!d));for(a=0;a<this.levels.length;a++)this.levels[a].uA(c)};
nw=function(a){if(a=a.colorInfo)if(a=a.transferCharacteristics)return tfa[a];return null};
ow=function(a){return a&&a.baseUrl||""};
pw=function(a){a=g.Zk(a);for(var b=g.p(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=a[c];a[c]=Array.isArray(d)?d[0]:d}return a};
vfa=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next())if(d=d.value.playerAnnotationsUrlsRenderer){d.adsOnly&&(a.xo=!0);d.allowInPlaceSwitch&&(a.rs=!0);if(c=d.loadPolicy)a.annotationsLoadPolicy=ufa[c];if(c=d.invideoUrl)a.We=wq(c);a.Np=!0;break}};
qw=function(a,b){a.botguardData=b.playerAttestationRenderer.botguardData;var c=b.playerAttestationRenderer.challenge;null!=c&&(a.sf=c)};
wfa=function(a,b){a.captionTracks=[];if(b.captionTracks)for(var c=g.p(b.captionTracks),d=c.next();!d.done;d=c.next()){d=d.value;var e=rw(d.baseUrl);if(!e)return;d=new g.Gu({is_translateable:!!d.isTranslatable,languageCode:d.languageCode,languageName:d.name&&g.R(d.name),url:e,vss_id:d.vssId,kind:d.kind});a.captionTracks.push(d)}a.zs=b.audioTracks||[];a.Mx=b.defaultAudioTrackIndex||0;b.translationLanguages?a.As=(0,g.Hc)(b.translationLanguages,function(f){return{languageCode:f.languageCode,languageName:g.R(f.languageName)}}):
a.As=[];
a.Io=!!b.contribute&&!!b.contribute.captionsMetadataRenderer};
xfa=function(a,b,c){var d=b.errorScreen;if(!(d&&(d.playerLegacyDesktopYpcOfferRenderer||d.playerLegacyDesktopYpcTrailerRenderer||d.ypcTrailerRenderer)||c&&c.isUpcoming||["OK","LIVE_STREAM_OFFLINE","FULLSCREEN_ONLY"].includes(b.status))){a.errorCode="150";if(c=d&&d.playerErrorMessageRenderer){if(d=c.reason)a.errorReason=g.R(d);if(c=c.subreason)a.Yg=g.R(c),a.fp=c}else a.errorReason=b.reason||null;c=b.status;"LOGIN_REQUIRED"===c?a.errorDetail="1":"CONTENT_CHECK_REQUIRED"===c?a.errorDetail="2":"AGE_CHECK_REQUIRED"===
c?(b=(b=b.errorScreen)&&b.playerKavRenderer,a.errorDetail=b&&b.kavUrl?"4":"3"):a.errorDetail=b.isBlockedInRestrictedMode?"5":"0"}};
yfa=function(a,b){var c=b.heartbeatToken;c&&(a.drmSessionId=b.drmSessionId||"",a.heartbeatToken=c,a.oz=Number(b.intervalMilliseconds),a.pz=Number(b.maxRetries),a.qz=!!b.softFailOnError,a.yz=!!b.useInnertubeHeartbeatsForDrm,a.Yn=!0)};
zfa=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.interstitials.map(function(l){var m=l.unserializedPlayerResponse;if(m&&!a.aa("web_player_unserialized_interstitial_killswitch"))return{is_yto_interstitial:!0,raw_player_response:m};if(l=l.playerVars)return Object.assign({is_yto_interstitial:!0},g.Xk(l))});
e=g.p(e);for(var f=e.next();!f.done;f=e.next())switch(f=f.value,d.podConfig.playbackPlacement){case "INTERSTITIAL_PLAYBACK_PLACEMENT_PRE":a.interstitials=a.interstitials.concat({time:0,playerVars:f,Kr:5});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_POST":a.interstitials=a.interstitials.concat({time:0x7ffffffffffff,playerVars:f,Kr:6});break;case "INTERSTITIAL_PLAYBACK_PLACEMENT_INSERT_AT_VIDEO_TIME":var h=Number(d.podConfig.timeToInsertAtMillis);a.interstitials=a.interstitials.concat({time:h,playerVars:f,
Kr:0===h?5:7})}}};
Afa=function(a,b){var c=b.find(function(d){return!(!d||!d.tooltipRenderer)});
c&&(a.tooltipRenderer=c.tooltipRenderer)};
tw=function(a,b){b.subscribeCommand&&(a.subscribeCommand=b.subscribeCommand);b.unsubscribeCommand&&(a.unsubscribeCommand=b.unsubscribeCommand);b.addToWatchLaterCommand&&(a.addToWatchLaterCommand=b.addToWatchLaterCommand);b.removeFromWatchLaterCommand&&(a.removeFromWatchLaterCommand=b.removeFromWatchLaterCommand);b.getSharePanelCommand&&(a.getSharePanelCommand=b.getSharePanelCommand)};
Bfa=function(a,b){var c=b.playerLegacyMulticameraRenderer;c&&(c=c.metadataList)&&(a.XA=c,a.Oi=Yk(c))};
Cfa=function(a,b){var c=b.playerControlsOverlayRenderer;if(c){var d=c.controlBgHtml;null!=d?(a.xf=d,a.Yb=!0):(a.xf="",a.Yb=!1);c.mutedAutoplay?(c=c.mutedAutoplay.playerMutedAutoplayOverlayRenderer)&&c.endScreen&&(c=c.endScreen.playerMutedAutoplayEndScreenRenderer)&&c.text&&(a.ZA=g.R(c.text)):a.mutedAutoplay=!1}};
Dfa=function(a,b){var c=b.backgroundability;c&&c.backgroundabilityRenderer.backgroundable&&(a.backgroundable=!0);if(c=b.contextParams)a.contextParams=c;(c=b.pictureInPicture)&&c.pictureInPictureRenderer.playableInPip&&(a.pipable=!0);b.playableInEmbed&&(a.allowEmbed=!0);var d=b.ypcClickwrap;d&&(c=d.playerLegacyDesktopYpcClickwrapRenderer,d=d.ypcRentalActivationRenderer,c?(a.Wn=c.durationMessage||"",a.Gl=!0):d&&(c=d.durationMessage,a.Wn=c?g.R(c):"",a.Gl=!0))};
Efa=function(a,b,c){var d=ow(b.googleRemarketingUrl);d&&(a.googleRemarketingUrl=d);if(d=ow(b.youtubeRemarketingUrl))a.youtubeRemarketingUrl=d;if(d=ow(b.ptrackingUrl)){d=pw(d);var e=d.oid;e&&(a.kC=e);if(e=d.pltype)a.lC=e;if(e=d.ptchn)a.jC=e;if(d=d.ptk)a.Pq=encodeURIComponent(d)}if(d=ow(b.ppvRemarketingUrl))a.ppvRemarketingUrl=d;if(d=ow(b.qoeUrl)){d=g.Zk(d);e=g.p(Object.keys(d));for(var f=e.next();!f.done;f=e.next()){f=f.value;var h=d[f];d[f]=Array.isArray(h)?h.join(","):h}if(e=d.cat)a.sn=e;if(d=d.live)a.lu=
d}if(d=ow(b.remarketingUrl)){a.remarketingUrl=d;e=pw(d);e.foc_id&&(a.cd.focEnabled=!0);if(e=e.data)a.cd.rmktEnabled=!0,e.engaged&&(a.cd.engaged="1");e=a.cd;f=d.match(g.rd);e.baseUrl=g.pd(f[1],null,f[3],f[4])+qd(g.sd(5,d))}if(d=ow(b.videostatsPlaybackUrl)){d=pw(d);if(e=d.adformat)c.adformat=e;if(c=d.autoplay)a.Bi="1"==c;if(c=d.autonav)a.pj="1"==c;if(c=d.delay)a.wf=g.nd(c);if(c=d.ei)a.eventId=c;"adunit"===d.el&&(a.Bi=!0);if(c=d.feature)a.vn=c;if(c=d.list)a.playlistId=c;if(c=d.of)a.bv=c;if(c=d.osid)a.osid=
c;if(c=d.referrer)a.referrer=c;if(c=d.sdetail)a.Xq=c;if(c=d.sourceid)a.g=c;if(c=d.ssrt)a.Fn="1"==c;if(c=d.subscribed)a.subscribed="1"==c,a.cd.subscribed=c;if(c=d.uga)a.userGenderAge=c;if(c=d.upt)a.Dr=c;if(c=d.vm)a.videoMetadata=c}b.promotedPlaybackTracking&&(b=b.promotedPlaybackTracking,b.startUrls&&(a.Sq=b.startUrls[0],a.Tq=b.startUrls),b.firstQuartileUrls&&(a.lv=b.firstQuartileUrls[0],a.ov=b.firstQuartileUrls),b.secondQuartileUrls&&(a.qv=b.secondQuartileUrls[0],a.tv=b.secondQuartileUrls),b.thirdQuartileUrls&&
(a.uv=b.thirdQuartileUrls[0],a.vv=b.thirdQuartileUrls),b.completeUrls&&(a.jv=b.completeUrls[0],a.kv=b.completeUrls))};
Ffa=function(a,b,c){b=g.p(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value)if(d=d.playerLegacyDesktopWatchAdsRenderer)if(d=d.playerAdParams){"1"==d.autoplay&&(a.Bi=!0);a.adSafetyReason=d.encodedAdSafetyReason||null;void 0!==d.showContentThumbnail&&(a.Gn=!!d.showContentThumbnail);c.enabled_engage_types=d.enabledEngageTypes;break}};
Gfa=function(a,b){var c=b.manifestlessWindowedLiveConfig;if(c){var d=Number(c.minDvrSequence),e=Number(c.maxDvrSequence),f=Number(c.minDvrMediaTimeMs);c=Number(c.maxDvrMediaTimeMs);d&&(a.Sc=d);f&&(a.rh=f/1E3);e&&(a.Ke=e);c&&(a.uj=c/1E3)}if(d=b.daiConfig)if(d.enableDai&&(a.Vb=!0),d=d.enableServerStitchedDai)a.enableServerStitchedDai=d;if(d=b.audioConfig)e=d.loudnessDb,null!=e&&(a.yn=e),d.audioMuted&&(a.Ri=!0),d.muteOnStart&&(a.Ri=!0);(d=b.playbackEndConfig)&&(d=d.endSeconds)&&a.mutedAutoplay&&(a.endSeconds=
d);if(d=b.fairPlayConfig){if(e=d.certificate)a.zf=Ms(e);e=Number(d.keyRotationPeriodMs);0<e&&(a.Yo=e);d=Number(d.keyPrefetchMarginMs);0<d&&(a.Xo=d)}if(d=b.playbackStartConfig){a.fv=Number(d.startSeconds);if(e=d.liveUtcStartSeconds)a.liveUtcStartSeconds=Number(e);if(d=d.startPosition){if(e=d.utcTimeMillis)a.liveUtcStartSeconds=.001*Number(e);if(d=d.streamTimeMillis)a.sr=.001*Number(d)}}else if(d=b.skippableSegmentsConfig){if(e=d.introSkipDurationMs)a.Ut=Number(e)/1E3;if(d=d.outroSkipDurationMs)a.av=
Number(d)/1E3}if(e=b.skippableIntroConfig)d=Number(e.startMs),e=Number(e.endMs),isNaN(d)||isNaN(e)||(a.nj=d,a.ki=e);if(d=b.streamSelectionConfig)a.ji=Number(d.maxBitrate);(d=b.visualizerConfig)&&d.isVisualizerEligible&&(a.isVisualizerEligible=!0);if(d=b.vrConfig)a.sj="1"==d.partialSpherical;if(d=b.webDrmConfig){d.skipWidevine&&(a.fD=!0);if(e=d.widevineServiceCert)a.Un=Ms(e);d.useCobaltWidevine&&(a.useCobaltWidevine=!0);d.startWithNoQualityConstraint&&(a.dm=!0)}if(d=b.mediaCommonConfig)if(d=d.dynamicReadaheadConfig)a.maxReadAheadMediaTimeMs=
d.maxReadAheadMediaTimeMs||NaN,a.minReadAheadMediaTimeMs=d.minReadAheadMediaTimeMs||NaN,a.readAheadGrowthRateMs=d.readAheadGrowthRateMs||NaN};
Mfa=function(a,b,c){var d=b.adaptiveFormats;if(d){var e=[];d=g.p(d);for(var f=d.next();!f.done;f=d.next()){var h=f.value;f=h.indexRange;var l=h.initRange;f={itag:h.itag,url:h.url,index:f?f.start+"-"+f.end:"0-0",bitrate:h.bitrate,init:l?l.start+"-"+l.end:"0-0",type:h.mimeType,clen:h.contentLength,lmt:h.lastModified,xtags:h.xtags};if(l=h.audioTrack){var m=l.displayName;m&&(f.name=m,f.audio_track_id=l.id,l.audioIsDefault&&(f.isDefault="1"))}if(l=h.captionTrack)f.caption_display_name=l.displayName,f.caption_vss_id=
l.vssId,f.caption_language_code=l.languageCode,f.caption_kind=l.kind;(l=h.cipher||h.signatureCipher)?(l=g.Xk(l),f.sp=l.sp,f.s=l.s,f.url=l.url):f.url=h.url;l=h.width;m=h.height;null!=l&&null!=m&&(f.size=l+"x"+m);(l=h.fps)&&(f.fps=l);(l=h.type)&&(f.stream_type=Hfa[l]);(l=h.projectionType)&&(f.projection_type=Ifa[l]);(l=h.stereoLayout)&&(f.stereo_layout=Jfa[l]);(l=h.spatialAudioType)&&(f.spatial_audio_type=Kfa[l]);if(m=h.drmFamilies){l=[];m=g.p(m);for(var n=m.next();!n.done;n=m.next())l.push(uw[n.value]);
f.drm_families=l.join(",")}(l=h.qualityLabel)&&(f.quality_label=l);(l=h.targetDurationSec)&&(f.target_duration_sec=l);(l=h.maxDvrDurationSec)&&(f.max_dvr_duration_sec=l);(l=h.audioSampleRate)&&(f.audio_sample_rate=l);(l=h.audioChannels)&&(f.audio_channels=l);(l=nw(h))&&(f.eotf=l);(h=h.colorInfo)&&(h=h.primaries)&&(h=Lfa[h])&&(f.primaries=h);e.push(g.Bd(f))}a.adaptiveFormats=e.join(",")}if(d=b.formats){e=[];h=g.p(d);for(f=h.next();!f.done;f=h.next())f=f.value,e.push(f.itag+"/"+f.width+"x"+f.height);
a.lt=e.join(",");e=[];d=g.p(d);for(f=d.next();!f.done;f=d.next()){h=f.value;f={itag:h.itag,type:h.mimeType,quality:h.quality};(l=h.url)&&(f.url=l);if(h=h.cipher||h.signatureCipher)h=g.Xk(h),f.sp=h.sp,f.s=h.s,f.url=h.url;e.push(g.Bd(f))}a.Tn=e.join(",")}if(f=b.hlsFormats){e={};if(c&&(c=c.audioPairingConfig)&&c.pairs)for(c=g.p(c.pairs),d=c.next();!d.done;d=c.next())d=d.value,e[d.videoItag]=d.audioItag;c={};d=g.p(f);for(h=d.next();!h.done;h=d.next())h=h.value,c[h.itag]=h.bitrate;d=[];f=g.p(f);for(h=
f.next();!h.done;h=f.next()){l=h.value;h={itag:l.itag,type:l.mimeType,url:l.url,bitrate:l.bitrate,width:l.width,height:l.height,fps:l.fps};if(m=l.audioTrack)if(n=m.displayName)h.name=n,h.audio_track_id=m.id,m.audioIsDefault&&(h.is_default="1");if(l.drmFamilies){m=[];n=g.p(l.drmFamilies);for(var q=n.next();!q.done;q=n.next())m.push(uw[q.value]);h.drm_families=m.join(",")}m=e[l.itag];n=c[m];m&&n&&(h.audio_itag=m,h.bitrate+=n);(l=nw(l))&&(h.eotf=l);d.push(g.Bd(h))}a.hlsFormats=d.join(",")}if((e=b.licenseInfos)&&
0<e.length){c={};e=g.p(e);for(d=e.next();!d.done;d=e.next())f=d.value,d=f.drmFamily,f=f.url,d&&f&&(c[uw[d]]=f);a.Fc=c}if(c=b.drmParams)a.drmParams=c;if(c=b.dashManifestUrl)a.Fe=g.Dd(c,{cpn:a.clientPlaybackNonce});if(c=b.hlsManifestUrl)a.hlsvp=c;if(b=b.probeUrl)a.probeUrl=wq(g.Dd(b,{cpn:a.clientPlaybackNonce}))};
Nfa=function(a,b,c){var d=b.videoId;d&&(a.videoId=d,c.video_id||(c.video_id=d));a.aa("web_player_uid_killswitch")||(d=b.channelId)&&(a.cd.uid=d.substr(2));if(d=b.title)a.title=d,c.title||(c.title=d);if(d=b.lengthSeconds)a.lengthSeconds=Number(d),c.length_seconds||(c.length_seconds=d);if(d=b.keywords)a.keywords=vw(d);if(d=b.channelId)a.qf=d,c.ucid||(c.ucid=d);if(d=b.viewCount)a.rawViewCount=Number(d);if(d=b.author)a.author=d,c.author||(c.author=d);if(c=b.shortDescription)a.shortDescription=c;if(c=
b.isCrawlable)a.isListed=c;if(c=b.musicVideoType)a.musicVideoType=c;c=b.isLive;null!=c&&(a.ra=c);if(c||b.isUpcoming)a.isPremiere=!b.isLiveContent;if(b=b.thumbnail)a.Zf=Ou(b)};
Ofa=function(a,b){if(b.playerLegacyDesktopYpcTrailerRenderer){var c=b.playerLegacyDesktopYpcTrailerRenderer;a.Sr=c.trailerVideoId||"";var d=(d=b.playerLegacyDesktopYpcTrailerRenderer.ypcTrailer)&&d.ypcTrailerRenderer}else if(b.playerLegacyDesktopYpcOfferRenderer)c=b.playerLegacyDesktopYpcOfferRenderer;else if(b.ypcTrailerRenderer){d=b.ypcTrailerRenderer;var e=d.fullVideoMessage;a.Xn=e?g.R(e):""}c&&(a.Nr=c.itemTitle||"",c.itemUrl&&(a.Or=c.itemUrl),c.itemBuyUrl&&(a.Lr=c.itemBuyUrl),a.Mr=c.itemThumbnail||
"",a.Qr=c.offerHeadline||"",a.Zn=c.offerDescription||"",a.Rr=c.offerId||"",a.Pr=c.offerButtonText||"",a.Dw=c.offerButtonFormattedText||null,a.ao=c.overlayDurationMsec||NaN,a.Xn=c.fullVideoMessage||"",a.fk=!0);d&&((c=d.unserializedPlayerResponse)?a.Hl={raw_player_response:c}:(c=d.playerVars,a.Hl=c?g.Xk(c):null),a.fk=!0)};
Qfa=function(a,b,c,d){b.isLiveDefaultBroadcast&&(a.isLiveDefaultBroadcast=!0);b.isUpcoming&&(a.isUpcoming=!0);if(b.isPostLiveDvr)a.ff=!0;else{var e=!1;if(a.rg)a.allowLiveDvr=ww(!0),a.ra=!0;else if(b.isLive){d.livestream="1";a.allowLiveDvr=ww(!!b.isLiveDvrEnabled);a.jf=27;b.isLowLatencyLiveStream&&(a.isLowLatencyLiveStream=!0);if(e=b.latencyClass)a.latencyClass=Pfa[e]||"UNKNOWN";a.fm=!0;if(b=b.liveChunkReadahead)a.liveChunkReadahead=b;if(c=c&&c.livePlayerConfig)if(c.hasSubfragmentedFmp4&&(a.hasSubfragmentedFmp4=
!0),c.hasSubfragmentedWebm&&(a.Ik=!0),c.defraggedFromSubfragments&&(a.defraggedFromSubfragments=!0),c=c.liveExperimentalContentId)a.liveExperimentalContentId=Number(c);e=!0}else b.isUpcoming&&(e=!0);e&&(a.ra=!0,d.adformat&&"8"!==d.adformat.split("_")[1]||(a.aa("live_fresca_v2")?a.hd.push("heartbeat"):(a.hp=!0,a.hd.push("fresca"))),a.Yn=!0,a.Vo=!0)}};
g.yw=function(a,b){g.N.call(this);this.Sa=a;this.adModule=!1;this.Ol=this.adaptiveFormats="";this.Fc=null;this.drmParams="";this.allowEmbed=!0;this.allowLiveDvr=this.backgroundable=!1;this.We="";this.rs=this.xo=!1;this.Kz=null;this.Ri=this.Gl=this.fk=this.Yn=this.hp=this.Np=!1;this.yn=NaN;this.author="";this.Sh=0;this.Co=this.ly=this.Bs=!1;this.clientScreenNonce=this.clientPlaybackNonce=this.videoCountText=this.channelBanner=this.Tg=this.Sl="";this.contentCheckOk=!1;this.wf=0;this.Vo=this.fm=!1;this.endSeconds=
0;this.zf=null;this.lt="";this.uc=!1;this.ji=this.Kk=0;this.qs=this.pipable=this.pj=!1;this.iC=0;this.ra=this.rg=this.isPrivate=this.isListed=this.Yt=this.mutedAutoplay=this.Bi=!1;this.lu="";this.isLowLatencyLiveStream=this.isLivingRoomDeeplink=this.isLiveDefaultBroadcast=this.Mp=this.Hm=this.ff=!1;this.latencyClass="UNKNOWN";this.enableServerStitchedDai=this.Vb=this.isMdxPlayback=this.isUpcoming=this.isPremiere=!1;this.mdxControlMode=null;this.isPharma=!1;this.Dg=0;this.reloadReason="";this.fu=this.Hz=
this.lh=!1;this.keywords={};this.Jf="";this.Op=0;this.Sn=!1;this.liveChunkReadahead=NaN;this.Sp=0;this.Tk=null;this.Lm=this.lengthSeconds=0;this.playerParams=this.musicVideoType=null;this.paygated=!1;this.hd=[];this.wd=void 0;this.racyCheckOk=!1;this.ir=0;this.wa=null;this.autonavState=1;this.Gx=null;this.shortDescription="";this.Ye=this.Sv=!1;this.sr=this.ii=this.startSeconds=0;this.Hr=this.Jx=this.PD=yu;this.wl=this.suggestions=null;this.Xv=!1;this.hlsFormats=this.Tn=this.expandedSubtitle=this.im=
this.subtitle=this.title="";this.Tp=this.rr=this.El=this.zh=this.kf=this.Cn=this.Hp=null;this.Fh="vvt";this.dd=!1;this.Dw=null;this.YD="";this.ao=NaN;this.Sr=this.Or=this.Nr=this.Mr=this.Lr=this.Rr=this.Xn=this.Qr=this.Zn=this.Pr="";this.Hl=null;this.SC=!1;this.cd={};this.clipStart=0;this.clipEnd=Infinity;this.heartbeatToken="";this.pz=this.oz=NaN;this.Sj=this.Im=this.Qi=this.yz=this.qz=!1;this.Gn=!0;this.Zf={};this.captionTracks=[];this.zs=[];this.Mx=0;this.As=[];this.Io=!1;this.Yl=new tu("und",
new Fr("Default","und",!0));this.gu=0;this.fc=null;this.ql=[];this.Oi=[];this.Aw=this.tn="";this.slotPosition=-1;this.breakType=0;this.Hg=this.Ea=this.em=this.Xg=null;this.Ts=!1;this.Yc=null;this.Xt=this.dm=this.useCobaltWidevine=this.fD=this.sj=this.kh=!1;this.ki=this.nj=NaN;this.defraggedFromSubfragments=this.Ik=this.hasSubfragmentedFmp4=!1;this.liveExperimentalContentId=NaN;this.Ci=this.Bw=this.ek=!1;this.interstitials=[];this.Yb=this.Zt=!1;this.sn=this.ZA=this.xf="";this.isVisualizerEligible=
!1;this.Mq=null;this.Bb="";this.tg=this.wz=!1;this.XA=this.Wn="";this.fv=this.av=this.Ut=this.readAheadGrowthRateMs=this.minReadAheadMediaTimeMs=this.maxReadAheadMediaTimeMs=NaN;this.showShareButton=!0;this.In=!1;this.vl=this.Ki=!0;this.errorDetail=this.userGenderAge="";this.cw=this.dw=this.getSharePanelCommand=this.removeFromWatchLaterCommand=this.addToWatchLaterCommand=this.unsubscribeCommand=this.subscribeCommand=this.contextParams=this.Yg=this.errorReason=this.errorCode=null;this.No=this.Mo="";
this.lk=void 0;this.aa("web_player_ux_module_wait")&&this.Sa.Ca&&this.hd.push("ux");this.Vs=this.uk=!1;this.rh=this.uj=this.Ke=this.Sc=0;this.Km=this.fetchType=null;this.oC={};xw(this,b)};
Aw=function(a,b){a.kt=jt(a.kt,b.fflags);var c=b.iv_invideo_url;c&&(a.We=wq(c));a.xo=Q(a.xo,b.iv_ads_only);a.rs=Q(a.rs,b.iv_allow_in_place_switch);a.isPharma=Q(a.isPharma,b.is_pharma);a.author=jt(a.author,b.author);a.Sl=rw(b.ttsurl)||a.Sl;a.Bs=Q(a.Bs,b.cc_asr);a.Tg=jt(a.Tg,b.channel_path);a.channelBanner=jt(a.channelBanner,b.channel_banner);a.videoCountText=jt(a.videoCountText,b.video_count_text);a.autonavState=ht(a.autonavState,b.autonav_state,Rfa);a.clientPlaybackNonce=jt(a.clientPlaybackNonce,b.cpn);
a.subscribed=Q(a.subscribed,b.subscribed);a.rawViewCount=g.it(a.rawViewCount,b.view_count);a.shortViewCount=jt(a.shortViewCount,b.short_view_count_text);a.title=jt(a.title,b.title);a.subtitle=jt(a.subtitle,b.subtitle);a.im=jt(a.im,b.expanded_title);a.expandedSubtitle=jt(a.expandedSubtitle,b.expanded_subtitle);a.Ol=jt(a.Ol,b.aria_label);a.ypcPreview=jt(a.ypcPreview,b.ypc_preview);a.Ew=jt(a.Ew,b.ypc_origin);a.dd=Q(a.dd,b.ypc_is_premiere_trailer);a.Wn=jt(a.Wn,b.ypc_clickwrap_message);a.paygated=Q(a.paygated,
b.paygated);a.SC=Q(a.SC,b.requires_purchase);a.showShareButton=!Q(!a.showShareButton,b.ss);a.Ki=Q(a.Ki,b.showwatchlater);a.vl=Q(a.vl,b.shownotifybutton);a.In=Q(a.In,b.copy_share);if(c=b.keywords)a.keywords=vw(c.split(","));if(c=b.rvs)a.suggestions=Yk(c);a.contentCheckOk=Q(a.contentCheckOk,b.cco);a.racyCheckOk=Q(a.racyCheckOk,b.rco);a.isLivingRoomDeeplink=Q(a.isLivingRoomDeeplink,b.is_living_room_deeplink);a.oauthToken=jt(a.oauthToken,b.oauth_token);a.Jf=jt(a.Jf,b.kpt);a.visitorData=jt(a.visitorData,
b.visitor_data);if(c=b.session_data)a.xc=Vk(c);if(c=b.endscreen_autoplay_session_data)a.sy=Vk(c);a.Wo=jt(a.Wo,b.endscreen_ad_tracking_data);a.TD=Q(a.TD,b.wait_for_vast_info_cards_xml);a.Vv=Q(a.Vv,b.suppress_creator_endscreen);a.Gz=Q(a.Gz,b.is_trueview_action);a.vD=jt(a.vD,b.tracking_list);a.Mo=jt(a.Mo,b.clip);a.No=jt(a.No,b.clipt);zw(a,b)};
xw=function(a,b){b=b||{};var c=b.errordetail;null!=c&&(a.errorDetail=c);c=b.errorcode;null!=c?a.errorCode=c:"fail"==b.status&&(a.errorCode="150");c=b.reason;null!=c&&(a.errorReason=c);c=b.subreason;null!=c&&(a.Yg=c);a.clientPlaybackNonce||(a.clientPlaybackNonce=b.cpn||g.yn());a.rg=Q(a.Sa.rg,b.livemonitor);c=b.raw_embedded_player_response;if(!c){var d=b.embedded_player_response;d&&(c=JSON.parse(d))}c&&(a.Xg=c);a.Xg&&((c=a.Xg.videoFlags)&&c.playableInEmbed&&(a.allowEmbed=!0),(c=a.Xg.embedPreview)&&
Sfa(a,b,c),a.Xg.playabilityStatus&&(a.em=a.Xg.playabilityStatus,Tfa(a)),(c=a.Xg.attestation)&&qw(a,c));c=b.raw_player_response;c||(d=b.player_response)&&(c=JSON.parse(d));c&&(a.Ea=c);if(a.Ea){(c=a.Ea.annotations)&&vfa(a,c);(c=a.Ea.attestation)&&qw(a,c);(c=a.Ea.heartbeatParams)&&yfa(a,c);(c=a.Ea.messages)&&Afa(a,c);(c=a.Ea.multicamera)&&Bfa(a,c);(c=a.Ea.overlay)&&Cfa(a,c);if(c=a.Ea.playabilityStatus)Dfa(a,c),(d=c.errorScreen)&&Ofa(a,d);(d=a.Ea.playbackTracking)&&Efa(a,d,b);(d=a.Ea.playerAds)&&Ffa(a,
d,b);(d=a.Ea.playerConfig)&&Gfa(a,d);var e=a.Ea.streamingData;e&&Mfa(a,e,d||null);if(e=a.Ea.trackingParams)a.df=e;if(e=a.Ea.videoDetails)if(Nfa(a,e,b),Qfa(a,e,d||null,b),d=e.isPrivate)a.isPrivate=Q(a.isPrivate,d);c&&xfa(a,c,e||null);(c=a.Ea.interstitialPods)&&zfa(a,c);a.We&&a.eventId&&(a.We=g.bl(a.We,{ei:a.eventId}));(c=a.Ea.captions)&&c.playerCaptionsTracklistRenderer&&wfa(a,c.playerCaptionsTracklistRenderer);a.lk=a.Ea.clipConfig;a.lk&&null!=a.lk.startTimeMs&&(a.fv=.001*parseInt(a.lk.startTimeMs,
10));a.aa("web_player_include_innertube_commands")&&a.Ea&&a.Ea.playerConfig&&a.Ea.playerConfig.webPlayerConfig&&a.Ea.playerConfig.webPlayerConfig.webPlayerActionsPorting&&tw(a,a.Ea.playerConfig.webPlayerConfig.webPlayerActionsPorting)}Bw(a,b);b.queue_info&&(a.queueInfo=b.queue_info);c=b.hlsdvr;null!=c&&(a.allowLiveDvr=ww("1"==c));a.adQueryId=b.ad_query_id||null;a.adSafetyReason||(a.adSafetyReason=b.encoded_ad_safety_reason||null);a.eF=b.agcid||null;a.sx=b.ad_id||null;a.xx=b.ad_sys||null;a.ry=b.encoded_ad_playback_context||
null;a.Ri=Q(a.Ri,b.infringe||b.muted);a.authKey=b.authkey;a.yc=b.authuser;a.Gx=b.autonav_watch_endpoint||null;a.mutedAutoplay=Q(a.mutedAutoplay,b&&b.playmuted)&&a.aa("embeds_enable_muted_autoplay");a.fm=Q(a.fm,b.enable_cardio);a.Vo=Q(a.Vo,b.enable_cardio_before_playback);a.endSeconds=g.it(a.endSeconds,a.av||b.end||b.endSeconds);a.df=jt(a.df,b.itct);a.Yt=Q(a.Yt,b.noiba);a.Mp=Q(a.Mp,b.is_live_destination);a.ra=Q(a.ra,b.live_playback);a.isMdxPlayback=Q(a.isMdxPlayback,b.mdx);if(c=b.mdx_control_mode)a.mdxControlMode=
"number"===typeof c?c:g.nd(c);a.Xt=Q(a.Xt,b.is_inline_playback_no_ad);a.Dg=g.it(a.Dg,b.reload_count);a.reloadReason=jt(a.reloadReason,b.reload_reason);a.Gn=Q(a.Gn,b.show_content_thumbnail);a.fu=Q(a.fu,b.utpsa);a.Xv=Q(a.Xv,b.third_party_remapped_ad);a.cycToken=b.cyc||null;a.rD=b.tkn||null;c=Lu(b);0<Object.keys(c).length&&(a.Zf=c);a.ue=jt(a.ue,b.vvt);a.mdxEnvironment=jt(a.mdxEnvironment,b.mdx_environment);a.PJ=b.osig;a.eventId||(a.eventId=b.eventid);a.osid||(a.osid=b.osid);a.playlistId=jt(a.playlistId,
b.list);a.uC=b.pyv_view_beacon_url;a.xC=b.pyv_quartile25_beacon_url;a.yC=b.pyv_quartile50_beacon_url;a.zC=b.pyv_quartile75_beacon_url;a.wC=b.pyv_quartile100_beacon_url;if(c=b.remarketing_url)a.remarketingUrl=c;if(c=b.ppv_remarketing_url)a.ppvRemarketingUrl=c;c=b.session_data;!a.MC&&c&&(a.MC=Vk(c).feature);a.Wt=1==g.it(a.Wt?1:0,b.is_fling);a.vnd=g.it(a.vnd,b.vnd);a.xk=jt(a.xk,b.force_ads_url);a.Eg=jt(a.Eg,b.ctrl);a.Uf=jt(a.Uf,b.ytr);a.Vl=b.ytrcc;a.OC=b.ytrexp;a.PC=b.ytrext;a.tn=jt(a.tn,b.adformat);
a.Aw=jt(a.Aw,b.attrib);a.slotPosition=g.it(a.slotPosition,b.slot_pos);a.breakType=b.break_type;a.Fn=Q(a.Fn,b.ssrt);a.videoId=lt(b)||a.videoId;a.fg=jt(a.fg,b.vss_credentials_token);a.Fh=jt(a.Fh,b.vss_credentials_token_type);a.ek=Q(a.ek,b.audio_only);a.Bw=Q(a.Bw,b.aac_high);a.Ci=Q(a.Ci,b.prefer_low_quality_audio);a.sn=jt(a.sn,b.qoe_cat);a.uk=Q(a.uk,b.download_media);a.Vs=Q(a.Vs,b.download_media_in_bg);a.tg=Q(a.tg,b.prefer_gapless);Ufa(a.Ea)&&(a.adModule=!0,a.hd.push("ad"));if(c=b.adaptive_fmts)a.adaptiveFormats=
c;if(c=b.allow_embed)a.allowEmbed="1"==c;if(c=b.backgroundable)a.backgroundable="1"==c;if(c=b.autonav)a.pj="1"==c;if(c=b.autoplay)a.Bi="1"==c;if(c=b.iv_load_policy)a.annotationsLoadPolicy=ht(a.annotationsLoadPolicy,c,Et);if(c=b.cc_lang_pref)a.captionsLanguagePreference=jt(c,a.captionsLanguagePreference);if(c=b.cc_load_policy)a.Ph=ht(a.Ph,c,Et);if(c=b.cached_load)a.Co=Q(a.Co,c);"0"==b.dash&&(a.ly=!0);if(c=b.dashmpd)a.Fe=g.Dd(c,{cpn:a.clientPlaybackNonce});if(c=b.delay)a.wf=g.nd(c);c=a.av||b.end;void 0!=
c&&(a.clipEnd=g.it(a.clipEnd,c));if(c=b.fmt_list)a.lt=c;b.fresca_preroll&&a.hd.push("fresca");b.heartbeat_preroll&&a.hd.push("heartbeat");a.Kk=-Math.floor(10*Math.random());a.Lm=-Math.floor(40*Math.random());if(c=b.is_listed)a.isListed=Q(a.isListed,c);if(c=b.is_private)a.isPrivate=Q(a.isPrivate,c);if(c=b.pipable)a.pipable=Q(a.pipable,c);a.qs=a.pipable&&a.Sa.kp;a.Sv=a.qs&&(!a.Sa.showMiniplayerButton||a.aa("web_player_pip"));if(c=b.paid_content_overlay_duration_ms)a.iC=g.nd(c);if(c=b.paid_content_overlay_text)a.AN=
c;if(c=b.url_encoded_fmt_stream_map)a.Tn=c;if(c=b.hls_formats)a.hlsFormats=c;if(c=b.hlsvp)a.hlsvp=c;if(c=b.length_seconds)a.lengthSeconds="string"===typeof c?g.nd(c):c;if(c=b.live_start_walltime)a.Sp="number"===typeof c?c:g.nd(c);if(c=b.live_manifest_duration)a.Tk="number"===typeof c?c:g.nd(c);if(c=b.player_params)a.playerParams=c;if(c=b.partnerid)a.jf=g.it(a.jf,c);if(c=b.probe_url)a.probeUrl=wq(g.Dd(c,{cpn:a.clientPlaybackNonce}));if(c=b.profile_picture)a.wd=jt(c,a.wd);(c=b.pyv_billable_url)&&tq(c)&&
(a.pn=c);(c=b.pyv_conv_url)&&tq(c)&&(a.vC=c);zw(a,b);0<a.startSeconds||(a.startSeconds=g.it(a.startSeconds,a.fv||a.Ut||b.start||b.startSeconds),a.ii=a.startSeconds);c=b.live_utc_start;null!=c&&(a.liveUtcStartSeconds=parseInt(c,10));if(c=b.utc_start_millis)a.liveUtcStartSeconds=.001*parseInt(c,10);if(c=b.stream_time_start_millis)a.sr=.001*parseInt(c,10);c=a.Ut||b.start;void 0==c||"1"==b.resume||a.ra||(a.clipStart=g.it(a.clipStart,c));if(c=b.url_encoded_third_party_media)a.wl=Yk(c);if(c=b.ypc_offer_button_formatted_text)d=
JSON.parse(c),a.Dw=null!=d?d:null,a.YD=c;if(c=b.ypc_offer_button_text)a.Pr=c;if(c=b.ypc_offer_description)a.Zn=c;if(c=b.ypc_offer_headline)a.Qr=c;if(c=b.ypc_full_video_message)a.Xn=c;if(c=b.ypc_offer_id)a.Rr=c;if(c=b.ypc_buy_url)a.Lr=c;if(c=b.ypc_item_thumbnail)a.Mr=c;if(c=b.ypc_item_title)a.Nr=c;if(c=b.ypc_item_url)a.Or=c;if(c=b.ypc_vid)a.Sr=c;b.ypc_overlay_timeout&&(a.ao=parseInt(b.ypc_overlay_timeout,10));if(c=b.ypc_trailer_player_vars)a.Hl=g.Xk(c);if(c=b.ypc_original_itct)a.TO=c;a.qf=jt(a.qf,
b.ucid);(0,g.y)("baseUrl uid oeid ieid ppe engaged subscribed".split(" "),function(f){b[f]&&(this.cd[f]=b[f])},a);
a.cd.focEnabled=Q(a.cd.focEnabled,b.focEnabled);a.cd.rmktEnabled=Q(a.cd.rmktEnabled,b.rmktEnabled);a.rr=b.storyboard_spec||null;a.Tp=b.live_storyboard_spec||null;a.Kz=b.iv_endscreen_url||null;a.Np=Q(a.Np,b.iv3_module);a.hp=Q(a.hp,b.fresca_module);a.Yn=Q(a.Yn,b.ypc_license_checker_module);a.fk=Q(a.fk,b.ypc_module);a.Gl=Q(a.Gl,b.ypc_clickwrap_module);a.fk&&a.hd.push("ypc");a.Gl&&a.hd.push("ypc_clickwrap");a.oC={video_id:b.video_id,eventid:b.eventid,cbrand:b.cbrand,cbr:b.cbr,cbrver:b.cbrver,c:b.c,cver:b.cver,
ctheme:b.ctheme,cplayer:b.cplayer,cmodel:b.cmodel,cnetwork:b.cnetwork,cos:b.cos,cosver:b.cosver,cplatform:b.cplatform,user_age:b.user_age,user_display_image:b.user_display_image,user_display_name:b.user_display_name,user_gender:b.user_gender,csi_page_type:b.csi_page_type,csi_service_name:b.csi_service_name,enablecsi:b.enablecsi,enabled_engage_types:b.enabled_engage_types};Aw(a,b);Cw(a)?Vfa(a):Wfa(a);if(c=b.adpings)a.tx=c?g.Xk(c):null;if(c=b.feature)a.vn=c;if(c=b.referrer)a.referrer=c;a.clientScreenNonce=
jt(a.clientScreenNonce,b.csn);a.ir=g.it(a.ir,b.root_ve_type);a.Op=g.it(a.Op,b.kids_age_up_mode);void 0!=b.kids_app_info&&(a.kidsAppInfo=b.kids_app_info);a.Sn=Q(a.Sn,b.upg_content_filter_mode);if(c=b.unplugged_location_info)a.Yc=c;if(c=b.unplugged_partner_opt_out)a.Al=jt("",c);a.Ts=Q(a.Ts,b.disable_watch_next);a.Em=jt(a.Em,b.internal_ip_override);a.Zt=!!b.is_yto_interstitial;(a.interstitials.length||a.Zt)&&a.hd.push("yto")};
Bw=function(a,b){var c=b.raw_watch_next_response;if(!c){var d=b.watch_next_response;d&&(c=JSON.parse(d))}if(c){a.Hg=c;c=a.Hg.contents;var e;if(c){if(e=c.singleColumnWatchNextResults){var f=g.it(0,b.autoplay_count);if(e.autoplay&&e.autoplay.autoplay&&!e.playlist){var h=e.autoplay.autoplay.sets;e={};d={};var l=null;if(h){for(var m=g.p(h),n=m.next();!n.done;n=m.next())if((n=n.value.autoplayVideoRenderer)&&n.compactVideoRenderer){l=n.compactVideoRenderer;break}if(h=h[0].autoplayVideo)(h=h.clickTrackingParams)&&
(e.itct=h),e.autonav="1",e.playnext=String(f)}else e.feature="related-auto";if(l){d.autonav="1";d.video_id=l.videoId;if(f=l.shortBylineText)d.author=g.R(f);if(f=l.title)d.title=g.R(f)}d.endscreen_autoplay_session_data=g.Bd(e);a.suggestions=[d]}}e=c.twoColumnWatchNextResults}c=a.Hg.playerOverlays;if(c&&(d=c.playerOverlayRenderer)){if(f=d.endScreen)if(f=f.watchNextEndScreenRenderer)var q=f.results;if(f=d.videoDetails){var r=f.embeddedPlayerOverlayVideoDetailsRenderer;if(f=f.musicEmbeddedPlayerOverlayVideoDetailsRenderer)a.jt=
f.title,a.it=f.byline}if(f=d.actions)for(f=g.p(f),l=f.next();!l.done;l=f.next())l=l.value,l.likeButtonRenderer&&(a.likeButtonRenderer=l.likeButtonRenderer);if(f=d.decoratedPlayerBarRenderer)if(f=f.decoratedPlayerBarRenderer)if(f.playerBar&&(l=f.playerBar.chapteredPlayerBarRenderer)&&l.chapters&&(a.Ux=l.chapters),f.playerBarActionButton&&(f=f.playerBarActionButton))a.EN=f.buttonRenderer;g.zt(a.Sa)&&(a.Ki=!!d.addToMenu);Dw(a,d.shareButton)}!q&&e&&(d=e.endScreen&&e.endScreen.endScreen)&&(q=d.results);
e&&(d=e.desktopOverlay&&e.desktopOverlay.desktopOverlayConfigRenderer)&&(d.suppressShareButton&&(a.showShareButton=!1),d.suppressWatchLaterButton&&(a.Ki=!1));r&&Ew(a,b,r);if(q){r=e||null;e=c||null;c=g.it(0,b.autoplay_count);d=[];l=!0;q=g.p(q);for(f=q.next();!f.done;f=q.next()){m=f.value;h=void 0;f=null;if(m.endScreenVideoRenderer){m=m.endScreenVideoRenderer;n=m.title;f={id:m.videoId,length_seconds:m.lengthInSeconds};var u=m.shortBylineText;u&&(f.author=g.R(u));if(u=m.shortViewCountText)f.short_view_count_text=
g.R(u);n&&(f.title=g.R(n),(n=n.accessibility)&&(n=n.accessibilityData)&&n.label&&(f.aria_label=n.label));if(n=m.navigationEndpoint)h=n.clickTrackingParams;if(n=m.thumbnailOverlays)for(n=g.p(n),u=n.next();!u.done;u=n.next())if((u=u.value.thumbnailOverlayTimeStatusRenderer)&&"LIVE"==u.style){f.live_playback="1";break}m=Ou(m.thumbnail);m=Ku(m);m.iurlmq&&(m={iurlmq:m.iurlmq,iurlhq:m.iurlmq});Object.assign(f,m)}else if(m.endScreenPlaylistRenderer){m=m.endScreenPlaylistRenderer;h=m.navigationEndpoint;if(!h)continue;
f=h.watchEndpoint;if(!f)continue;f=f.videoId;f={list:m.playlistId,video_id:f,playlist_length:m.videoCount,thumbnail_ids:f};if(n=m.title)f.playlist_title=g.R(n);if(n=m.shortBylineText)f.playlist_author=g.R(n);h=h.clickTrackingParams;m=Ou(m.thumbnail);Object.assign(f,Ku(m))}if(f)if(f.session_data=g.Bd({itct:h}),l){l={autonav:1,playnext:c};f.list&&(l.autoplay="1");if(r){if(h=r.autoplay)if(h=h.autoplay)if(h=h.sets)if(h=h[0])if(h=h.autoplayVideo)if((m=h.clickTrackingParams)&&(l.itct=m),h=h.watchEndpoint)f.autonav_watch_endpoint=
h}else e&&(h=e.playerOverlayAutoplayRenderer)&&(h=h.nextButton)&&(h=h.buttonRenderer)&&(h=h.navigationEndpoint)&&h.clickTrackingParams&&(l.itct=h.clickTrackingParams);l.itct||(l.feature="related-auto");f.endscreen_autoplay_session_data=g.Bd(l);d.splice(0,0,f);l=!1}else d.push(f)}a.suggestions=d}a.Hg.currentVideoThumbnail&&(a.Zf=Ou(a.Hg.currentVideoThumbnail))}};
Ufa=function(a){if(!a||!a.adPlacements)return!1;a=g.p(a.adPlacements);for(var b=a.next();!b.done;b=a.next())if(b=b.value.adPlacementRenderer,null!=b&&"AD_PLACEMENT_KIND_START"==(b.config&&b.config.adPlacementConfig&&b.config.adPlacementConfig.kind))return!0;return!1};
Hw=function(a){var b=a.tg,c=!!a.fa&&(a.fa.mh()||a.fa.nh()||a.fa.ih()),d=a.Sa,e=!!a.fa&&a.fa.ug,f=Fw(a),h=a.Bw;a.isAd();var l=a.isOtf(),m=Gw(a,"html5_samsung_vp9_live"),n=new Dea;n.N=f;n.C=h&&d.l;Nl("windows nt 5.1")&&!g.Is&&(n.i=!0);c&&vt&&6>=wt&&(n.i=!0);if(f=c)f=d.aa("disable_html5_ambisonic_audio")||!(g.Zt(d)||d.aa("html5_enable_spherical")||d.aa("html5_enable_spherical3d"))?!1:$t(d);f&&(n.K=!0);b&&(n.i=!0,n.X=!0);l&&!g.P(d.experiments,"html5_otf_prefer_vp9")&&(n.i=!0);Fs(d.o,Gs.CHANNELS)&&(g.P(d.experiments,
"html5_enable_aac51")&&(n.B=!0),g.P(d.experiments,"html5_enable_ac3")&&(n.l=!0),g.P(d.experiments,"html5_enable_eac3")&&(n.o=!0));!g.P(d.experiments,"html5_kaios_hd_killswitch")&&g.pt&&(n.V=480);if(e||c)n.R=!1;n.P=!1;b=iu(d,n.g);0<b&&2160>b&&window.SourceBuffer&&SourceBuffer.prototype.changeType&&(n.g.supportsChangeType=!0,n.u=b);2160<=b&&(n.W=!0);Us()&&(n.g.serveVp9OverAv1IfHigherRes=!1,n.ca=!1);n.J=m;/^av/.test(a.clientPlaybackNonce)&&a.O("ctmp","av1",qs(n.g));Rl()&&a.Ea&&a.Ea.playerConfig&&a.Ea.playerConfig.webPlayerConfig&&
a.Ea.playerConfig.webPlayerConfig.useCobaltTvosDogfoodFeatures&&(n.l=!0,n.o=!0);a.ra&&(m=a.Vb&&a.Sa.aa("html5_enable_audio_51_for_live_dai"),a=!a.Vb&&a.Sa.aa("html5_enable_audio_51_for_live_non_dai"),n.F=m||a);return n};
Wfa=function(a){Iw(a)?a.Qi=!0:!Jw(a,a.adaptiveFormats)&&a.Fe&&(a.Qi=!0)};
Mw=function(a,b){var c;(c=!b)||(c=!(!Kw(a)&&a.adaptiveFormats));if(c)return null;Gw(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(Nr=!0);c=Lw(b);var d=a.Fc;var e=a.lengthSeconds,f=a.ra,h=a.ff,l=a.Sa.experiments,m=Xda(c);d=f||h?Wda(c,h,d,l):3==m?Vda(c,d,e,l):Uda(c,d,e,l);0<c.length&&(c=c[0],c.url&&c.sp&&c.s&&(c=Lr(c.url,c.sp,c.s),c=parseInt(c.get("max_sq"),10)||Infinity,isFinite(c)&&(a.Hm=!0)));if(c=d.i)c=!(a.aa("html5_manifestless_vp9")||a.aa("html5_manifestless_vp9_normal_latency")&&(!a.isLowLatencyLiveStream||
"NORMAL"==a.latencyClass)||!Xfa(d));return c?(d.dispose(),null):d};
Jw=function(a,b){var c=Mw(a,b);if(!c)return!1;Nw(a,c);return!0};
Kw=function(a){return Rl()&&!Ow(a)};
Ow=function(a){return Gw(a,"html5_enable_tvos_dash_dogfood")||a.aa("html5_enable_tvos_dash")&&MediaSource.isTypeSupported('audio/webm; codecs="opus"')};
Vfa=function(a){Kw(a)&&(a.ra&&a.Fe?a.Qi=!0:a.zf&&(a.Im=!0))};
Xfa=function(a){return a.i&&as('video/webm; codecs="vp9"')&&g.Cb(a.g,function(b){return br(b.info)})};
Pw=function(a){return!(!a.fa||!a.fa.i)};
Rw=function(a){if(!jr())return!1;if(a.aa("html5_streaming_debug"))return!0;if(g.Ls)return!1;if(g.Ql()){var b=Ml();if(16<=b&&17>b)return!1}return!Pw(a)||"ULTRALOW"!=a.latencyClass&&21530001!=Qw(a)?window.AbortController?a.aa("html5_streaming_xhr")||a.aa("html5_streaming_xhr_manifestless")&&Pw(a)?!0:!1:!1:!0};
Sw=function(a){var b=Pw(a),c=Rw(a);return(a.hasSubfragmentedFmp4||a.Ik)&&b?c&&jr()?3:2:a.defraggedFromSubfragments&&b?-1:1};
Qw=function(a){return a.isLowLatencyLiveStream&&void 0!=a.fa&&5<=Wr(a.fa)?21530001:a.liveExperimentalContentId};
Cw=function(a){return Rl()&&Ow(a)?!1:!Js()||a.ly?!0:!1};
Yfa=function(a){a.uc=!0;a.Qi=!1;if(!a.Fe&&Iw(a))mfa(a.videoId).then(function(d){var e;a:{if(e=Mw(a,a.adaptiveFormats))if(d=Mw(a,d)){if(0<g.O(a.Sa.experiments,"hoffle_cache_size_secs")){var f=a.videoId,h=Rv(f);0!==h&&Uv(f,h,!0)}for(var l in d.g)if(f=d.g[l],h=e.g[l],!h||f.lastModified<h.lastModified){Tw(a,!0);a.Km=new Nv(a.videoId,2,{ll:!0});d.dispose();Nw(a,e);e=void 0;break a}e.dispose();Nw(a,d)}else Nw(a,e);e=void 0}return e},function(){return Jw(a,a.adaptiveFormats)}).then(function(){return Uw(a)});
else{rq(a.Fe)||g.Lm(new g.Gm("DASH MPD Origin invalid: ",a.Fe));var b=a.Fe,c=g.O(a.Sa.experiments,"dash_manifest_version")||4;b=g.Dd(b,{mpd_version:c});a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||(b=g.Dd(b,{pacing:0}));cea(b,a.Sa.experiments,a.ra).then(a.GK,a.FK,a);g.rv("mrs")}};
Zfa=function(a,b){a.Km=b};
Uw=function(a){a.ba()||(a.uc=!1,a.O("dataloaded"))};
Nw=function(a,b,c){c=void 0===c?!1:c;a.fa=b;g.C(a,b);b.Sc=a.Sc;b.Ke=a.Ke;b.rh=a.rh;b.uj=a.uj;Vw(a)&&a.hd.push("webgl");a.fa.isLive||(a.ra=!1);var d=b.sourceUrl.split("/");-1!=d.indexOf("manifest_duration")&&(a.Tk=parseInt(d[d.indexOf("manifest_duration")+1],10));b.o&&(c?b.subscribe("refresh",a.tB,a):b.subscribe("cuepointsadded",a.Vx,a));Hr(b)&&(a.Im=!0)};
Ww=function(a){return a.Fc?!0:!!a.fa&&Hr(a.fa)};
$fa=function(a,b){var c=b||Cw(a);if(a.fa&&!c){if(Fw(a)){c=a.fa;var d=a.ra;if(!c.g["0"]){var e=new ar("0","fakesb",void 0,new Wq(0,0,0,void 0,void 0,"auto"),null,null,1);c.g["0"]=d?new ir(new xq("http://www.youtube.com/videoplayback"),e,"fake"):new zr(new xq("http://www.youtube.com/videoplayback"),e,new vp(0,0),new vp(0,0),0,NaN)}}Gw(a,"html5_enable_cobalt_experimental_vp9_decoder")&&(a.Sa.o.l=!0);return Mea(Hw(a),a.Sa.o,a.fa,a.fc,a.aa("html5_dynamic_av1_hybrid_threshold")).then(a.Mv,void 0,a)}return g.Ym()};
g.Xw=function(a){return Kw(a)&&a.zf?(a={},a.fairplay="https://youtube.com/api/drm/fps?ek=uninitialized",a):a.ya&&a.ya.Fc||null};
Yw=function(a){var b=a.Ea&&a.Ea.paidContentOverlay&&a.Ea.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.text?g.R(b.text):a.AN};
Zw=function(a){var b=a.Ea&&a.Ea.paidContentOverlay&&a.Ea.paidContentOverlay.paidContentOverlayRenderer||null;return b&&b.durationMs?g.nd(b.durationMs):a.iC};
$w=function(a){var b="";if(a.lu)return a.lu;a.ra&&(b=a.allowLiveDvr?"dvr":"live");return b};
g.ax=function(a,b){return"string"!==typeof a.keywords[b]?null:a.keywords[b]};
bx=function(a){return!!(a.Fe||a.adaptiveFormats||a.Tn||a.wl||a.hlsvp)};
cx=function(a){var b=g.eb(a.hd,"ypc");a.ypcPreview&&(b=!1);return a.isValid()&&!a.uc&&(bx(a)||g.eb(a.hd,"fresca")||g.eb(a.hd,"heartbeat")||b)};
Lw=function(a,b){var c=Yk(a),d={};if(b)for(var e=g.p(b.split(",")),f=e.next();!f.done;f=e.next())(f=f.value.match(/^([0-9]+)\/([0-9]+)x([0-9]+)(\/|$)/))&&(d[f[1]]={width:f[2],height:f[3]});e=g.p(c);for(f=e.next();!f.done;f=e.next()){f=f.value;var h=d[f.itag];h&&(f.width=h.width,f.height=h.height)}return c};
Tfa=function(a){if(dx(a)&&(a.errorDetail="0",a.em)){var b=a.em.embeddedPlayerErrorMessageRenderer;b&&(a.GF=b.embeddedPlayerErrorMessageRenderer)}};
Dw=function(a,b){a.showShareButton=!!b;if(b){var c=b.buttonRenderer&&b.buttonRenderer.navigationEndpoint;c&&(a.In=!!c.copyTextEndpoint)}};
Sfa=function(a,b,c){c=c.thumbnailPreviewRenderer;var d=c.controlBgHtml;null!=d?(a.xf=d,a.Yb=!0):(a.xf="",a.Yb=!1);if(d=c.defaultThumbnail)a.Zf=Ou(d);(d=c.videoDetails&&c.videoDetails.embeddedPlayerOverlayVideoDetailsRenderer)&&Ew(a,b,d);if(b=c.videoDetails&&c.videoDetails.musicEmbeddedPlayerOverlayVideoDetailsRenderer)a.jt=b.title,a.it=b.byline,b.musicVideoType&&(a.musicVideoType=b.musicVideoType);a.Ki=!!c.addToWatchLaterButton;Dw(a,c.shareButton);c.playButton&&c.playButton.buttonRenderer&&c.playButton.buttonRenderer.navigationEndpoint&&
(b=c.playButton.buttonRenderer.navigationEndpoint,b.watchEndpoint&&(b=b.watchEndpoint,b.watchEndpointSupportedOnesieConfig&&b.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig&&(a.Mq=new rfa(b.watchEndpointSupportedOnesieConfig.html5PlaybackOnesieConfig))));c.videoDurationSeconds&&(a.lengthSeconds=g.nd(c.videoDurationSeconds));a.aa("web_player_include_innertube_commands")&&c.webPlayerActionsPorting&&tw(a,c.webPlayerActionsPorting);if(a.aa("embeds_wexit_list_ajax_migration")&&c.playlist&&
c.playlist.playlistPanelRenderer){a=c.playlist.playlistPanelRenderer;c=[];if(a.contents)for(b=0,d=a.contents.length;b<d;b++){var e=a.contents[b].playlistPanelVideoRenderer;if(e){var f=e.shortBylineText?g.R(e.shortBylineText):"",h=e.title?g.R(e.title):"";c.push({author:f,video_id:e.videoId,title:h})}}a.titleText&&g.R(a.titleText);a.ownerName&&g.R(a.ownerName)}};
Ew=function(a,b,c){var d=c.channelThumbnail;d&&(d=d.thumbnails)&&(d=d[0])&&(b.profile_picture=d.url);if(d=c.channelThumbnailEndpoint&&c.channelThumbnailEndpoint.channelThumbnailEndpoint)if(d=d.urlEndpoint&&d.urlEndpoint.urlEndpoint)b.channel_path=d.url;if(d=c.collapsedRenderer)if(d=d.embeddedPlayerOverlayVideoDetailsCollapsedRenderer){var e=d.title;e&&(b.title=g.R(e));if(d=d.subtitle)b.subtitle=g.R(d)}if(c=c.expandedRenderer)if(c=c.embeddedPlayerOverlayVideoDetailsExpandedRenderer){if(d=c.title)b.expanded_title=
g.R(d);if(d=c.subtitle)b.expanded_subtitle=g.R(d);if(c=c.subscribeButton)if(c=c.subscribeButtonRenderer)b.ucid=c.channelId,b.subscribed=c.subscribed,a.vl=!!c.notificationPreferenceToggleButton,c.notificationPreferenceToggleButton&&c.notificationPreferenceToggleButton.toggleButtonRenderer&&(b=c.notificationPreferenceToggleButton.toggleButtonRenderer,b.isToggled?(a.dw=b.toggledServiceEndpoint||null,a.cw=b.defaultServiceEndpoint||null):(a.dw=b.defaultServiceEndpoint||null,a.cw=b.toggledServiceEndpoint||
null))}};
g.ex=function(a){return a.ra&&!a.allowLiveDvr};
fx=function(a){return a.ra&&a.allowLiveDvr};
Vw=function(a){return a.nh()||a.mh()||a.Nk()||a.ih()};
g.gx=function(a){if(a.Vv)return null;var b=a.Kz;b||(b=a.Ea&&a.Ea.endscreen&&a.Ea.endscreen.endscreenUrlRenderer&&a.Ea.endscreen.endscreenUrlRenderer.url);return b||null};
g.hx=function(a){return a.Vv?null:a.Ea&&a.Ea.endscreen&&a.Ea.endscreen.endscreenRenderer||null};
g.ix=function(a){return a.Ea&&a.Ea.cards&&a.Ea.cards.cardCollectionRenderer||null};
g.jx=function(a){if(!a.Ea||!a.Ea.annotations)return null;a=g.p(a.Ea.annotations);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.playerAnnotationsExpandedRenderer&&b.playerAnnotationsExpandedRenderer.featuredChannel)return b.playerAnnotationsExpandedRenderer;return null};
kx=function(a){return a.adFormat&&"1_5"!=a.adFormat?"adunit":a.Sa.X};
lx=function(a){if(a.isAd()&&a.videoId!=a.Sa.Ka)return a.Sa.Ka};
mx=function(a){return a.Bi||"detailpage"==kx(a)||a.mutedAutoplay};
nx=function(a){if(mx(a)){if("detailpage"==kx(a))return a.pj||0<a.Dg;if("adunit"!=kx(a)||!a.pn)return!0}return!1};
ox=function(a){var b=1,c=g.O(a.Sa.experiments,"html5_default_ad_gain");c&&a.isAd()&&(b=c);return Math.min(1,Math.pow(10,-a.yn/20))||b};
Fw=function(a){var b=["MUSIC_VIDEO_TYPE_ATV","MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"],c="TVHTML5_SIMPLY"==a.Sa.deviceParams.c&&"MUSIC"==a.Sa.deviceParams.ctheme;!a.ek&&(g.Vt(a.Sa)||c)&&b.includes(a.musicVideoType)&&(a.ek=!0);if(b=g.Ql())b=/Starboard\/([0-9]+)/.exec(g.Oc),b=10>(b?parseInt(b[1],10):NaN);c=a.Sa;c=("TVHTML5_CAST"==c.deviceParams.c||"TVHTML5"==c.deviceParams.c&&(c.deviceParams.cver.startsWith("6.20130725")||c.deviceParams.cver.startsWith("6.20130726")))&&"MUSIC"==a.Sa.deviceParams.ctheme;
var d;if(d=!a.ek)c||(c=a.Sa,c="TVHTML5"===c.deviceParams.c&&c.deviceParams.cver.startsWith("7")),d=c;d&&!b&&(b="MUSIC_VIDEO_TYPE_PRIVATELY_OWNED_TRACK"===a.musicVideoType,c=(a.aa("cast_prefer_audio_only_for_atv_and_uploads")||a.aa("kabuki_pangea_prefer_audio_only_for_atv_and_uploads"))&&"MUSIC_VIDEO_TYPE_ATV"===a.musicVideoType,b||c)&&(a.ek=!0);return!a.Sa.deviceHasDisplay||a.ek&&a.Sa.l};
px=function(a){return!!(a.aa("hoffle_save")&&a.adaptiveFormats&&a.uk&&a.Sa.l)};
Tw=function(a,b){if(a.uk!=b&&(a.uk=b)&&a.fa){var c=a.fa,d;for(d in c.g){var e=c.g[d];e.u=!1;e.g=null}}};
Iw=function(a){return!(!(a.aa("hoffle_load")&&a.adaptiveFormats&&Vv(a.videoId))||a.uk)};
qx=function(a){if(!a.fa||!a.ya||!a.kc)return!1;var b=a.fa.g;return!!b[a.ya.id]&&Aq(b[a.ya.id].i.g)&&!!b[a.kc.id]&&Aq(b[a.kc.id].i.g)};
dx=function(a){return(a=a.em)&&a.showError?a.showError:!1};
rx=function(a){return a.aa("disable_rqs")?!1:Gw(a,"html5_high_res_logging")};
Gw=function(a,b){return a.aa(b)?!0:(a.kt||"").includes(b+"=true")};
aga=function(a){return(a=/html5_log_experiment_id_from_player_response_to_ctmp=([0-9]+)/.exec(a.kt))?a[1]:null};
zw=function(a,b){var c=b.video_masthead_ad_quartile_urls;c&&(a.Sq=c.quartile_0_url,a.lv=c.quartile_25_url,a.qv=c.quartile_50_url,a.uv=c.quartile_75_url,a.jv=c.quartile_100_url,a.Tq=c.quartile_0_urls,a.ov=c.quartile_25_urls,a.tv=c.quartile_50_urls,a.vv=c.quartile_75_urls,a.kv=c.quartile_100_urls)};
ww=function(a){return a?Js()?!0:sx&&5>tx?!1:!0:!1};
vw=function(a){var b={};(0,g.y)(a,function(c){var d=c.split("=");2==d.length?b[d[0]]=d[1]:b[c]=!0});
return b};
rw=function(a){if(a){if(uq(a))return a;a=vq(a);if(uq(a,!0))return a}return""};
g.ux=function(a,b){this.type=a||"";this.id=b||""};
g.vx=function(a,b){g.N.call(this);this.Ac=a;this.startSeconds=0;this.shuffle=!1;this.index=0;this.title="";this.length=0;this.items=[];this.uc=this.loaded=!1;this.xc=this.sy=this.un=null;this.views=0;this.order=[];this.author="";this.Zf={};this.Qp=0;var c=b.session_data;c&&(this.xc=Vk(c));this.hF=0!==b.fetch;this.index=Math.max(0,Number(b.index)||0);this.loop=!!b.loop;this.startSeconds=Number(b.startSeconds)||0;this.KJ="1"===b.mob;this.title=b.playlist_title||"";this.description=b.playlist_description||
"";this.author=b.author||b.playlist_author||"";b.video_id&&(this.items[this.index]=b);if(c=b.api)"string"===typeof c&&16===c.length?b.list="PL"+c:b.playlist=c;if(c=b.list)switch(b.listType){case "user_uploads":this.uc||(this.listId=new g.ux("UU","PLAYER_"+c),this.loadPlaylist("/list_ajax?style=json&action_get_user_uploads_by_user=1",{username:c}));break;case "search":cga(this,c);break;default:var d=b.playlist_length;d&&(this.length=Number(d)||0);this.listId=new g.ux(c.substr(0,2),c.substr(2));(c=
b.video)?(this.items=c.slice(0),this.loaded=!0):dga(this)}else if(b.playlist){c=b.playlist.toString().split(",");0<this.index&&(this.items=[]);c=g.p(c);for(d=c.next();!d.done;d=c.next())(d=d.value)&&this.items.push({video_id:d});this.length=this.items.length;c=this.items.map(function(e){return e.video_id});
this.loadPlaylist("/list_ajax?style=json&action_get_templist=1",{video_ids:c.join(",")});this.loaded=!0}this.setShuffle(!!b.shuffle);if(c=b.suggestedQuality)this.quality=c;this.Zf=Lu(b,"playlist_");this.oD=(c=b.thumbnail_ids)?c.split(","):[]};
wx=function(a){return!!(a.playlist||a.list||a.api)};
xx=function(a){var b=a.index+1;return b>=a.length?0:b};
yx=function(a){var b=a.index-1;return 0>b?a.length-1:b};
zx=function(a,b){a.index=g.Be(b,0,a.length-1);a.startSeconds=0};
cga=function(a,b){if(!a.uc){a.listId=new g.ux("SR",b);var c={search_query:b};a.KJ&&(c.mob="1");a.loadPlaylist("/search_ajax?style=json&embeddable=1",c)}};
dga=function(a){if(!a.uc){var b=b||a.listId;b={list:b};var c=a.xa();c&&c.videoId&&(b.v=c.videoId);a.loadPlaylist("/list_ajax?style=json&action_get_list=1",b)}};
Ax=function(a,b){if(b.video&&b.video.length){a.title=b.title||"";a.description=b.description;a.views=b.views;a.author=b.author||"";var c=b.loop;c&&(a.loop=c);c=a.xa();a.items=[];for(var d=g.p(b.video),e=d.next();!e.done;e=d.next())if(e=e.value)e.video_id=e.encrypted_id,a.items.push(e);a.length=a.items.length;(d=b.index)?a.index=d:a.findIndex(c);a.setShuffle(!1);a.uc=!1;a.loaded=!0;a.Qp++;a.un&&a.un()}};
Bx=function(){};
g.Cx=function(){g.A.call(this);this.l=null;this.C=this.B=!1;this.u=new g.xe;g.C(this,this.u)};
Dx=function(a){a=a.rm();return 1>a.length?NaN:a.end(a.length-1)};
Ex=function(a,b){a.l&&null!==b&&b.g===a.l.g||(a.l&&a.l.dispose(),a.l=b)};
Fx=function(a){return ns(a.Od(),a.getCurrentTime())};
ega=function(a,b){if(0==a.Le()||0<a.Mf())return!1;var c=0<a.getCurrentTime();if(0<=b){var d=a.rm();if(d.length||!c)return ks(d,b)}return c};
Gx=function(a){var b=a.Od();return 0<ms(b)&&a.getDuration()?ls(b,a.getCurrentTime()):0};
Hx=function(a){var b=a.Od();return 0<ms(b)&&a.getDuration()?b.end(b.length-1):0};
Ix=function(a){var b=a.getDuration();return Infinity==b?1:b?Gx(a)/b:0};
Jx=function(a){switch(a.Mf()){case 2:return"progressive.net.retryexhausted";case 3:return"fmt.decode";case 4:return"fmt.unplayable";case 5:return"drm.unavailable";case 1E3:return"capability.changed";default:return null}};
Kx=function(a,b,c){g.Pd.call(this,b,a);this.i=c||null};
g.Lx=function(a){g.Cx.call(this);this.g=a;this.i={}};
Mx=function(){this.g=[];this.i=[];this.l=[]};
Ox=function(a,b,c){c=g.bf(c?"AUDIO":"VIDEO");g.Ua(c,fga);g.dk(c,"loadeddata",(0,g.x)(c.jF,c));At&&6<=tx&&g.dk(c,"webkitbeginfullscreen",(0,g.x)(c.play,c));a.i.push(c);b?a.l.push(c):Nx(a,c);return c};
Nx=function(a,b){g.eb(a.i,b)&&!g.eb(a.g,b)&&(b.src||b.load(),g.jb(a.l,b)||a.g.push(b))};
gga=function(){this.i=200;this.g=12};
hga=function(a){var b=new gga;b.i=g.O(a.experiments,"html5_gapless_ended_transition_buffer_ms");b.g=g.O(a.experiments,"html5_gapless_max_played_ranges");return b};
g.Px=function(a,b,c,d){d=void 0===d?!1:d;g.Cx.call(this);this.g=a;this.i=b;this.o=c;this.F=d};
Qx=function(a,b,c){this.audio=a;this.video=b;this.reason=c};
Rx=function(){var a=this;this.i=this.l=kaa;this.g=new g.Ef(function(b,c){a.l=b;a.i=c})};
iga=function(a,b){this.C=a;this.i=b;this.u=a.OE;this.B=new Uint8Array(this.u);this.o=this.l=0;this.g=null;this.F=[];this.K=this.N=null;this.J=new Rx};
jga=function(a){var b=Sx(a);b=bw(a.C.l,a.i.info,b);Tx(a,b)};
Ux=function(a){return!!a.g&&a.g.B};
Wx=function(a,b){if(!Ux(a)){if(1==b.info.type)a.N=xp(0,b.g.getLength());else if(2==b.info.type){if(!a.g||1!=a.g.type)return;a.K=xp(a.o*a.u+a.l,b.g.getLength())}else if(3==b.info.type){if(3==a.g.type&&!Cp(a.g,b.info)&&(a.F=[],b.info.i!=Ep(a.g)||0!=b.info.l))return;if(b.info.o)a.F.map(function(c){return Vx(a,c)}),a.F=[];
else{a.F.push(b);a.g=b.info;return}}a.g=b.info;Vx(a,b);kga(a)}};
Vx=function(a,b){for(var c=0,d=Sp(b.g);c<d.length;){var e=Math.min(d.length-c,a.B.byteLength-a.l),f=new Uint8Array(d.buffer,d.byteOffset+c,e);a.B.set(f,a.l);a.l+=e;c+=e;if(a.l==a.B.length){if(b.info===a.g&&Ux(a)&&c===d.length)break;e=Sx(a);e=bw(a.C.l,a.i.info,e,a.o,a.B);Tx(a,e);a.B=new Uint8Array(a.u);a.l=0;a.o+=1}}};
kga=function(a){if(Ux(a)){var b=new Uint8Array(a.B.buffer,0,a.l);var c={lmt:a.i.lastModified,docid:a.C.l,fmtid:a.i.info.id,type:a.i.info.mimeType.split(";")[0],csz:a.u,clen:a.o*a.u+a.l};c="local://localhost/videoplayback?"+g.Wk(c);c={itag:Ip(a.i.info),type:a.i.info.mimeType,bitrate:8*a.i.info.g,lmt:""+a.i.lastModified,init:a.N.toString(),index:a.K.toString(),mket:Math.round(a.i.index.Xh()).toString(),avbr:Math.round(a.i.info.i).toString(),url:c};c=g.Wk(c);b=bw(a.C.l,a.g.g.info,c,a.o,b);Tx(a,b,!0)}};
Sx=function(a){a={itag:a.i.info.id,dlt:Math.round(a.g?a.g.u:0),mket:Math.round(a.i.index.Xh()),avbr:Math.round(a.i.info.i),csz:a.u,lmt:a.i.lastModified};return g.Wk(a)};
Tx=function(a,b,c){c=void 0===c?!1:c;b.then(function(d){(c||4===d)&&a.J.resolve(d)},function(d){a.J.reject(d)})};
lga=function(a){for(var b=new Uint8Array(0),c=new DataView(a.buffer,a.byteOffset,a.length),d=0;d<a.length-8;){var e=c.getUint32(d);if(1>=e)break;var f=c.getUint32(d+4);if(1836019574==f)d+=8;else{if(1886614376==f){f=a.subarray(d,d+e);var h=new Uint8Array(b.length+f.length);h.set(b);h.set(f,b.length);b=h}d+=e}}return b};
mga=function(a){a=Xo(a,1886614376);(0,g.y)(a,function(b){return!b.i});
return(0,g.Hc)(a,function(b){return new Uint8Array(b.data.buffer,b.offset+b.data.byteOffset,b.size)})};
nga=function(a){var b=(0,g.ai)(a,function(e,f){return e+f.length},0),c=new Uint8Array(b),d=0;
(0,g.y)(a,function(e){c.set(e,d);d+=e.length});
return c};
oga=function(a,b){this.l=a;this.C=this.B=!1;this.length=b?b:0;this.i=0;this.o=null;this.g=[];this.u=null;this.length?1!=this.l.length||this.l[0].Ra||(this.l[0].Ra=this.length):1==this.l.length||(0,g.Fp)(this.l,function(c){return!!c.range})};
pga=function(a){return a.length-a.i+a.g.reduce(function(b,c){return b+c.g.getLength()},0)};
Xx=function(a,b,c,d){var e=this;this.i=a;this.Wc=c;this.loaded=this.status=0;this.error="";a=wp(this.i.get("range")||"");if(!a)throw Error("bad range");this.range=a;this.g=new Lp;qga(this).then(d,function(f){e.error=""+f||"unknown_err";d()});
b()};
qga=function(a){return g.hh(a,function c(){var d=this,e,f,h,l,m,n,q,r,u,w,B,z,D;return g.Aa(c,function(F){if(1==F.g){d.status=200;e=d.i.get("docid");f=d.i.get("fmtid");h=+(d.i.get("csz")||0);if(!e||!f||!h)throw Error("Invalid local URL");l=d.range;m=Math.floor(l.start/h);n=Math.floor(l.end/h);q=m}if(5!=F.g)return q<=n?g.sa(F,nfa(e,f,q),5):F.Ic(0);r=F.i;u=q*h;w=(q+1)*h;B=Math.max(0,l.start-u);z=Math.min(l.end+1,w)-(B+u);D=new Uint8Array(r.buffer,B,z);d.g.append(D);d.loaded+=z;d.loaded<l.length&&d.Wc((0,g.E)(),
d.loaded);q++;return F.Ic(2)})})};
rga=function(a){this.schedule=a;this.g=NaN;this.i=[];this.totalBytes=0};
Yx=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.Ee?!1:e.Ee;var f=void 0===e.sg?!1:e.sg,h=void 0===e.qj?!1:e.qj,l=e.wg,m=e.Oa;e=e.Fd;this.V=null;this.P=this.g=NaN;this.ma=0;this.N=this.W=this.i=this.o=NaN;this.da=this.X=this.isActive=!1;this.l=0;this.R=NaN;this.F=this.B=Infinity;this.K=NaN;this.ea=!1;this.C=this.J=NaN;this.u=this.ca=void 0;this.Ee=d;this.sg=f;this.qj=h;this.wg=l;this.Oa=m;this.Fd=e;this.schedule=a;this.la=b;this.na=c;this.snapshot=et(this.schedule)};
Zx=function(a){return{rt:((0,g.E)()-a.g).toFixed(),lb:a.i.toFixed(),pt:(1E3*a.R).toFixed(),pb:a.la.toFixed(),stall:(1E3*a.l).toFixed(),elbowTime:(a.P-a.g).toFixed(),elbowBytes:a.ma.toFixed()}};
$x=function(a){!a.C&&a.V&&(a.C=a.V(),3===a.C&&(a.ca=new rga(a.schedule)));return a.C};
dy=function(a,b,c,d){var e=(b-a.o)/1E3,f=c-a.i,h=$x(a);if(3===h&&f){var l=a.ca;l.i.push({qT:f,GT:isNaN(l.g)?NaN:d-l.g,uT:d});l.g=d}a.isActive?1===h&&0<f&&(.2<e||1024>f?(a.l+=e,.2<e&&cy(a,.05,f)):cy(a,e,f),a.da=!0):ay(a,c)&&(1===h&&(d=(b-a.g)/1E3,by(a)||a.sg||(h=a.schedule,h.u.l(1,d),ft(h))),a.P=b,a.ma=c,a.isActive=!0);a.sg||bt(a.schedule,e,f);a.o=b;a.i=c};
cy=function(a,b,c){if(!a.sg){b=Math.max(b,.05);var d=a.schedule,e=b;a=a.qj;a=void 0===a?!1:a;d.i.l(void 0===b?e:b,c/e);a||(d.C=Zs())}};
fy=function(a,b,c){c=Math.round(c/1024);a.u&&a.u.push(ey(b-a.W,c-a.N));a.W=b;a.N=c};
ay=function(a,b){return b?a.wg&&1!==$x(a)?!0:2048<=b:!1};
gy=function(a){return ay(a,a.i)};
hy=function(a){a.K=a.g+1E3*a.snapshot.delay;a.ea=!1};
iy=function(a,b){a.wg&&void 0!==a.Oa&&void 0!==a.Fd&&(a.B=Math.min(a.B,sga(a.wg,a.Oa,a.g,b)),a.F=Math.min(a.F,tga(a.wg,a.Oa,a.g,b,a.Fd)),a.B<=a.g?hy(a):(a.K=a.B,a.ea=!0))};
by=function(a){a.wg&&iy(a,(0,g.E)());return a.ea};
jy=function(a,b){b=void 0===b?(0,g.E)():b;if(a.wg){iy(a,b);var c=a.C?a.wg?1!==$x(a):!1:a.B!==a.F;if(c){if(c=a.F,b<c){a.J=a.F;return}}else c=a.B;c=Math.max(c,a.K)}else c=a.K;var d=a.la-a.i;0>d&&(d=0);d=1E3*(d*a.snapshot.stall+d/a.snapshot.byterate);d=gy(a)?d+b:d+Math.max(b,c);a.J=d};
ey=function(a,b){for(var c="";4095<a;)c+=ey(4095,0),a-=4095;for(;4095<b;)c+=ey(a,4095),b-=4095,a=0;return c+("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b>>6&63)+"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b&63))};
ky=function(a,b,c,d,e,f,h){var l=void 0===h?{}:h;h=void 0===l.method?"GET":l.method;var m=l.headers,n=l.body;l=void 0===l.credentials?"include":l.credentials;this.R=c;this.N=d;this.P=e;this.policy=f;this.status=0;this.response=void 0;this.K=!1;this.i=0;this.F=NaN;this.aborted=this.B=this.J=!1;this.errorMessage="";this.method=h;this.headers=m;this.body=n;this.credentials=l;this.g=new Lp;this.id=uga++;this.o=window.AbortController?new AbortController:void 0;this.start(a);this.startTime=Date.now();b()};
ny=function(a){a.l.read().then(function(b){if(!a.ba()){var c;window.performance&&window.performance.now&&(c=window.performance.now());var d=Date.now(),e=b.value?b.value:void 0;a.u&&(a.g.append(a.u),a.u=void 0);b.done?(a.l=void 0,ly(a)):(a.i+=e.length,my(a)?a.g.append(e):a.u=e,a.R(d,a.i,c),ny(a))}},function(b){a.onError(b)}).then(void 0,g.L)};
ly=function(a){if(!a.ba()){a.J=!0;if(my(a)&&!a.g.getLength()&&!a.B&&a.i){kr(a);var b=new Uint8Array(8),c=new DataView(b.buffer);c.setUint32(0,8);c.setUint32(4,1936419184);a.g.append(b);a.i+=b.length}a.N()}};
my=function(a){var b=a.Tc("content-type");b="audio/mp4"===b||"video/mp4"===b;return a.policy.g&&a.policy.Bd&&kr(a)&&b};
oy=function(a,b,c,d,e){var f=this;this.status=0;this.ba=this.l=!1;this.i=NaN;this.g=new XMLHttpRequest;this.g.open("GET",a);this.g.responseType="arraybuffer";this.g.withCredentials=!0;this.g.onreadystatechange=function(){2===f.g.readyState&&f.B()};
this.o=d;this.u=c;this.B=e;a=g.Dj(function(){if(!f.ba){f.status=f.g.status;try{f.response=f.g.response,f.i=f.response.byteLength}catch(h){}f.l=!0;f.o()}});
this.g.addEventListener("load",a,!1);this.g.addEventListener("error",a,!1);this.g.send();b();this.g.addEventListener("progress",g.Dj(function(h){f.Wc(h)}),!1)};
py=function(a,b,c,d){this.i=a;this.info=b;this.timing=c;this.ca=d;this.state=1;this.g=this.da=null;this.C=this.K=0;this.X=new g.G(this.WN,a.N,this);this.u=this.o=this.F=null;this.B=0;this.R=this.l=null;this.P=0;this.ma=this.N=!1;this.J=this.i.Ga&&(Qq(this.info)||this.info.Ee());this.ea=!1;this.W=this.V=null};
vga=function(a,b){a.ba();a.F=b};
qy=function(a){return a.o?zq(a.o.tf):""};
ry=function(a){var b=Zx(a.timing);b.shost=qy(a);b.rn=a.K.toString();a.B&&(b.rc=a.B.toString());b.itag=""+Ip(a.info.g[0].g.info);b.ml=""+ +a.info.g[0].g.rd();b.sq=""+a.info.g[0].i;if(a.o){var c=a.o.tf;yq(c);var d=decodeURIComponent(c.get("mn")||"").split(",");b.ifi=""+ +("/videoplayback"===c.path&&1<d.length&&!!d[1])}410!=a.B&&500!=a.B&&503!=a.B||(b.fmt_unav="true");a.g&&a.g.Wk()&&(b.msg=a.g.Wk());a.ea&&(b.smb="1");a.l&&(a=a.l.g,a.length&&Yp(a[0],b));return b};
sy=function(a){qy(a);return kq(a.ca,qy(a))};
wga=function(a,b){if(400<=b.status)return a.u="net.badstatus",7;if(!b.Dp())return a.u=204==b.status?"net.nocontent":"net.connect",7;var c="";if(ty(a)){var d=b.pu();2048>=d.getLength()&&(c=Sp(d),c=$o(c),c=rq(c)?c:"")}if(c){d=sy(a);(0,g.M)();d.started=0;d.i=0;d.g=0;d=a.info;var e=a.o;g.Nq(d.i,e,c);d.requestId=e.get("req_id");return 5}c=b.lq();if((d=!!a.R&&a.R.length)&&d!=c||b.wv())return a.u="net.closed",7;uy(a,!0);if(a.i.Yw&&!d&&a.l&&(d=a.l.g,d.length&&!Yp(d[0])))return a.u="net.closed",7;var f=vy(a)?
b.Tc("X-Bandwidth-Est"):0;if(d=vy(a)?b.Tc("X-Bandwidth-Est3"):0)a.ma=!0,a.i.UD&&(f=d);d=a.timing;e=(0,g.E)();f=f?parseInt(f,10):0;if(!d.X){d.X=!0;if(!d.sg){e=e>d.g&&4E12>e?e:(0,g.E)();fy(d,e,c);dy(d,e,c);var h=$x(d);if(2===h&&f)cy(d,d.i/f,d.i);else if(2===h||1===h)f=(e-d.g)/1E3,(f<=d.schedule.K.g||!d.schedule.K.g)&&!d.da&&gy(d)&&cy(d,f,c),gy(d)&&(f=d.schedule,c=Math.max(c,2048),f.g.l(1,d.l/c),ft(f));$s(d.schedule,(e-d.g)/1E3,d.i,d.R,d.Ee,d.qj)}d.deactivate()}c=sy(a);(0,g.M)();c.started=0;c.i=0;c.g=
0;a.info.i.i=0;(0,g.M)()<wy+3E5||!a.o||Aq(a.o.tf)||!(c=qy(a))||0>c.indexOf("googlevideo.com")||(g.ho("yt-player-bandaid-host",{JN:c},432E3),wy=(0,g.M)());return 6};
zy=function(a){if("net.timeout"==a.u){var b=a.timing,c=(0,g.E)();if(!b.sg){c=c>b.g&&4E12>c?c:(0,g.E)();fy(b,c,1024*b.N);var d=(c-b.g)/1E3;if(2!==$x(b))if(gy(b)){b.l+=(c-b.o)/1E3;var e=b.schedule,f=b.i;f=Math.max(f,2048);e.g.l(1,b.l/f);ft(e)}else by(b)||b.sg||(e=b.schedule,e.u.l(1,d),ft(e)),b.P=c;$s(b.schedule,d,b.i,b.R,b.Ee,b.qj);bt(b.schedule,(c-b.o)/1E3,0)}}else(0,g.E)();"net.nocontent"!=a.u&&("net.timeout"==a.u||"net.connect"==a.u?(b=sy(a),b.i+=1):(b=sy(a),b.g+=1),a.info.i.i++);yy(a,7)};
Ay=function(a){a.ba();if(1==a.state)return!0;var b=sy(a);return 100>b.i&&b.g<a.i.ro};
yy=function(a,b){a.state=b;5<=a.state&&(a.i.Kc?By(a):a.timing.deactivate());a.F&&a.F(a)};
Cy=function(a,b){if(b){var c=sy(a);c.l+=1}By(a);a.u="net.timeout";zy(a)};
vy=function(a){return(0,g.Fp)(a.info.g,function(b){return 3==b.type})};
By=function(a){if(a.g){var b=a.g;a.g=null;b.abort()}a.timing.deactivate()};
ty=function(a){var b=a.g.Tc("content-type"),c=a.g.mm();return(!Dy(a)||!b||-1!=b.indexOf("text/plain"))&&(!c||2048>=c)};
xga=function(a,b){var c=(0,g.x)(a.pN,a),d=(0,g.x)(a.sN,a),e=(0,g.x)(a.rN,a),f=(0,g.x)(a.qN,a);return Aq(a.o.tf)?new Xx(a.o,d,e,c):Ey(a)?new ky(b,d,e,c,f,a.i.u):new oy(b,d,e,c,f)};
Ey=function(a){return a.i.X?a.i.Lw&&!isNaN(a.info.Fd)&&a.info.Fd>a.i.Ip?!1:jr():!1};
Dy=function(a){return a.g?a.g.vr():!1};
Fy=function(a){return 2>a.state||!a.l?!1:a.l.g.length||a.i.ma&&a.g&&a.g.Gf()?!0:!1};
yga=function(a){Gy(a);return a.l.g};
Gy=function(a){a.i.ma&&a.g&&a.g.Gf()&&uy(a,!1)};
uy=function(a,b){if(b||Dy(a)&&!ty(a)){if(!a.l){if(Dy(a))a.info.range&&(c=a.info.range.length);else var c=a.g.lq();a.l=new oga(a.info.g,c)}for(;a.g.Gf();)a:{c=a.l;var d=a.g.mq(),e=b&&!a.g.Gf();c.o&&(Np(c.o,d),d=c.o,c.o=null);for(var f=0,h=0,l=g.p(c.l),m=l.next();!m.done;m=l.next())if(m=m.value,m.range&&f+m.Ra<=c.i)f+=m.Ra;else{d.getLength();if(Ap(m)&&!e&&c.i+d.getLength()-h<f+m.Ra){c.o=d.split(h).bk;break a}var n=c.i-f;var q=c,r=m;if(1==r.type){q.B=!0;var u=!1}else 3==r.type||4==r.type?(r=q.B&&!q.C,
q.C=!0,u=r):u=!1;q=c;var w=m,B=n;r=h;var z=d;n=u||m.g.iA()&&!n;var D=!!e;u=z.getLength()-r;w.range&&(u=Math.min(w.Ra-B,u));D=w.range?w.l+B+u==w.range.length:D;w=new zp(w.type,w.g,w.range,"reslice_"+w.F,w.i,w.startTime,w.duration,w.l+B,u,D&&w.B,D);B=u;r=z.split(r).bk.split(B).Fp;q.g.push(new Wp(w,r,n));q=u;c.i+=q;h+=q;f+=m.Ra;if(h==d.getLength())break}d.getLength()}}};
zga=function(a){if(!a.i.u.Bd||!isNaN(a.info.Fd)&&0<a.info.Fd)return!1;if(!a.g||!a.g.Hk())return!0;if(!kr(a.g))return!1;if(isNaN(a.info.Fd)){var b=a.g.Tc("x-head-seqnum");if(b&&parseInt(b,10)>a.info.g[0].i)return!1}return!0};
Hy=function(a,b,c){this.initData=a;this.contentType=b;this.isPrefetch=c;this.g=this.cryptoPeriodIndex=NaN;this.i=[];this.Qc=!1};
Iy=function(a){a:{var b=a.initData;try{for(var c=0,d=new DataView(b.buffer);c<d.byteLength-8;){var e=d.getUint32(c);if(1>=e)break;if(1886614376==d.getUint32(c+4)){var f=32;if(0<d.getUint8(c+8)){var h=d.getUint32(c+28);f+=16*h+4}var l=d.getUint32(c+f-4);try{var m=new kg(b.subarray(c+f,c+f+l)),n=new oj;for(f=m;lg(f)&&4!=f.i;)switch(f.l){case 2:var q=og(f),r=q;g.Sg(n,2).push(r);break;case 4:q=og(f);g.Tg(n,4,q);break;case 7:q=jg(f.g);g.Tg(n,7,q);break;case 9:q=jg(f.g);g.Tg(n,9,q);break;case 10:q=jg(f.g);
g.Tg(n,10,q);break;case 11:q=ig(f.g);g.Tg(n,11,q);break;case 12:q=jg(f.g);g.Tg(n,12,q);break;case 13:r=q=og(f);g.Sg(n,13).push(r);break;case 14:q=new pj;r=f;var u=q,w=Qba,B=r.g.l,z=jg(r.g),D=r.g.g+z;r.g.l=D;w(u,r);r.g.g=D;r.g.l=B;r=n;u=q;w=pj;Wg(r,w,14);var F=r.g[14];F||(F=r.g[14]=[]);var H=u?u:new w,V=g.Sg(r,14);F.push(H);V.push(H.Rd);break;case 15:q=ng(f);g.Tg(n,15,q);break;case 1:q=ig(f.g);g.Tg(n,1,q);break;case 3:q=ng(f);g.Tg(n,3,q);break;case 5:q=ng(f);g.Tg(n,5,q);break;case 6:q=ng(f);g.Tg(n,
6,q);break;case 8:q=og(f);g.Tg(n,8,q);break;default:mg(f)}f=n;if(null!=f){var ca=f;break a}}catch(fd){}}c+=e}ca=null}catch(fd){ca=null}}if(null!=ca)for(b=g.Sg(ca,7),a.cryptoPeriodIndex||null==b||(a.cryptoPeriodIndex=b),b=g.Sg(ca,10),null!=b&&0<b&&!a.Qc&&a.g!==b&&(a.g=b),ca=g.Sg(ca,2),ca=!ca.length||ca[0]instanceof Uint8Array?ca:(0,g.Hc)(ca,eba),ca=g.p(ca),b=ca.next();!b.done;b=ca.next())a.i.push(g.ug(b.value,4))};
Jy=function(a){this.g=a;this.offset=0};
Ky=function(a){if(a.offset>=a.g.getLength())throw Error();return Up(a.g,a.offset++)};
Ly=function(a,b){b=void 0===b?!1:b;var c=Ky(a);if(1===c){c=-1;for(var d=0;7>d;d++){var e=Ky(a);-1===c&&255!==e&&(c=0);-1<c&&(c=256*c+e)}return c}d=128;for(e=0;6>e&&d>c;e++)c=256*c+Ky(a),d*=128;return b?c:c-d};
My=function(a,b,c){g.N.call(this);var d=this;this.u=a;this.i=[];this.g=null;this.N=-1;this.F=0;this.V=NaN;this.J=0;this.l=b;this.la=c;this.B=NaN;this.ca=0;this.da=-1;this.o=this.K=this.ea=this.R=this.W=this.C=this.P=null;this.u.l&&(this.o=new iga(this.u,this.l),this.o.J.g.then(function(e){d.o=null;1==e&&d.O("localmediachange",e)},function(){d.o=null;
d.O("localmediachange",4)}),jga(this.o));
this.ma=!1;this.X=0};
Ny=function(a){return a.i.length?a.i[0]:null};
Oy=function(a){return a.i.length?a.i[a.i.length-1]:null};
Vy=function(a,b,c){if(a.W){if(a.u.Kl){var d=a.W;var e=c.info;d=d.i!=e.i&&e.i!=d.i+1||g.Ee(d.C,e.C)&&g.Ee(d.u,e.u)&&d.i===e.i?!1:Dp(d,e)}else d=Dp(a.W,c.info);d||(a.B=NaN,a.ca=0,a.da=-1)}a.W=c.info;a.l=c.info.g;0==c.info.l?Py(a):!a.l.De()&&a.C&&Jp(c.info,a.C);a.g?(c=Zp(a.g,c),a.g=c):a.g=c;a:{c=g.$p(a.g.info.g.info);if(3!=a.g.info.type){if(!a.g.info.o)break a;6==a.g.info.type?Qy(a,b,a.g):Ry(a,a.g);a.g=null}for(;a.g;){d=a.g.g.getLength();if(0>=a.N&&0==a.F){var f=a.g.g,h=-1;e=-1;if(c){for(var l=0;l+8<
f.getLength();){var m=Vp(f,l),n=Vp(f,l+4);l+=m||1;if(1836019558===n)h=l;else if(1835295092===n){e=l;break}}0>e&&(h=-1)}else{f=new Jy(f);for(m=l=!1;;){n=f.offset;var q=f;try{var r=Ly(q,!0),u=Ly(q,!1);var w=r;var B=u}catch(D){B=w=-1}q=w;var z=B;if(0>q)break;if(408125543!==q)if(524531317===q)l=!0,0<=z&&(e=f.offset+z,m=!0);else{if(l&&(160===q||163===q)&&(0>h&&(h=n),m))break;163===q&&(h=Math.max(0,h),e=f.offset+z);if(160===q){0>h&&(e=h=f.offset+z);break}f.skip(z)}}0>h&&(e=-1)}if(0>h)break;a.N=h;a.F=e-
h}if(a.N>d)break;a.N?(d=Sy(a,a.N),d.l&&!a.l.De()&&Ty(a,d),Qy(a,b,d),Uy(a,d),a.N=0):a.F&&(d=Sy(a,0>a.F?Infinity:a.F),a.F-=d.g.getLength(),Uy(a,d))}}a.g&&a.g.info.o&&(Uy(a,a.g),a.g=null)};
Ry=function(a,b){!a.l.De()&&0==b.info.l&&(g.$p(b.info.g.info)||b.info.g.info.Qc())&&fq(b);if(1==b.info.type)try{Ty(a,b),Wy(a,b)}catch(d){g.L(d);var c=Gp(b.info);c.hms="1";a.O("error",c||{})}b.info.g.Bp(b);a.o&&Wx(a.o,b)};
Aga=function(a){var b=a.i.reduce(function(c,d){return c+d.g.getLength()},0);
a.g&&(b+=a.g.g.getLength());return b};
Xy=function(a){return(0,g.Hc)(a.i,function(b){return b.info})};
Yy=function(a){a.K&&!a.u.ye&&a.O("placeholderrollback",a.K);a.K=null;a.C=null;a.W=a.ea;a.B-=a.J;Py(a)};
Sy=function(a,b){var c=a.g,d=Math.min(b,c.g.getLength());if(d==c.g.getLength())return a.g=null,c;c.g.getLength();d=Math.min(d,c.info.Ra);var e=c.g.split(d),f=e.Fp;e=e.bk;var h=new zp(c.info.type,c.info.g,c.info.range,c.info.F,c.info.i,c.info.startTime,c.info.duration,c.info.l,d,!1,!1);f=new Wp(h,f,c.l);c=new zp(c.info.type,c.info.g,c.info.range,c.info.F,c.info.i,c.info.startTime,c.info.duration,c.info.l+d,c.info.Ra-d,c.info.B,c.info.o);c=new Wp(c,e,!1);c=[f,c];a.g=c[1];return c[0]};
Ty=function(a,b){b.g.getLength();var c=Xp(b);if(!a.u.XD&&cr(b.info.g.info)&&"bt2020"===b.info.g.info.xa().primaries){var d=new ap(c);cp(d,[408125543,374648427,174,224,21936,21937])&&(d=d.l+d.g,129==c.getUint8(d)&&1==c.getUint8(d+1)&&c.setUint8(d+1,9))}d=b.info.g.info;br(d)&&!cr(d)&&(d=Xp(b),ip(new ap(d)),hp([408125543,374648427,174,224],21936,d));b.info.g.info.isVideo()&&(d=b.info.g,d.info&&d.info.video&&4==d.info.video.projectionType&&!d.o&&(g.$p(d.info)?d.o=kda(c):d.info.Qc()&&(d.o=mda(c))));b.info.g.info.Qc()&&
b.info.isVideo()&&(c=Xp(b),ip(new ap(c)),hp([408125543,374648427,174,224],30320,c)&&hp([408125543,374648427,174,224],21432,c));if(a.l.info.audio&&g.$p(b.info.g.info)){d=Xp(b);c=g.Lo(d,0,1701606260);var e=g.Lo(d,0,1836476516);if(c&&e){c.skip(2);var f=zo(c),h=Bo(c);d=[];var l=[],m=[],n=[];if(f)for(f=0;f<h;++f)d.push(Co(c)),l.push(Co(c)),m.push(zo(c)),n.push(zo(c));else for(f=0;f<h;++f)d.push(Ao(c)),l.push(Ao(c)),m.push(zo(c)),n.push(zo(c));c=No(e);c=new jda(l[0]/c,d[0]/c)}else c=null;if(c){if(g.$p(b.info.g.info))for(d=
Xp(b),l=g.Lo(d,0,1701082227);l;)l.markAsSkip(),l=g.Lo(d,l.offset+l.size,1701082227);a.ma=!0;a.u.oo&&a.O("gaplessinfo",c)}}a.l.De()||b.info.g.g||b.info.g.indexRange||(g.$p(b.info.g.info)?(c=Xp(b),(d=Po(c,0,1836019574))?(d=d.offset+d.size,l=new Uint8Array(d),l.set(new Uint8Array(c.buffer,c.byteOffset,d)),c=l):c=null):c=nda(new ap(Xp(b))),c&&(b.info.g.g=c))};
Qy=function(a,b,c){if(a.l.De()){if(a.ma&&a.l.De()&&c.info.i==c.info.g.index.qb()&&(b=Xp(c),b=g.Lo(b,0,1953658222))){b.skip(1);var d=yo(b)<<16|zo(b),e=d&1,f=d&4;if(d&256){var h=d&512,l=d&1024;d&=2048;var m=Bo(b);2>m||(e&&b.skip(4),f&&b.skip(4),e=Bo(b),b.skip((m-1)*(4+(h?4:0)+(l?4:0)+(d?4:0))-4),b.data.setUint32(b.offset+b.g,e))}}if(b=a.P&&!!a.P.l.l)if(b=c.info.isVideo())b=eq(c),h=a.P,Zy?(l=1/b,b=$y(a,b)>=$y(h)+l):b=a.getDuration()>=h.getDuration(),b=!b;b&&a.l.De()&&c.info.i==c.info.g.index.qb()&&(b=
a.P,Zy?(l=eq(c),h=1/l,l=$y(a,l),b=$y(b)+h-l):b=b.getDuration()-a.getDuration(),b=1+b/c.info.duration,Mo(Xp(c),b))}else{h=!1;a.C||(fq(c),c.i&&(a.C=c.i,h=!0,Jp(c.info,c.i),e=c.info.g.info,d=Xp(c),g.$p(e)?Wo(d,1701671783):e.Qc()&&hp([408125543],307544935,d)));if(d=e=dq(c))d=c.info.g.info.Qc()&&160==Up(c.g,0);if(d)a.J+=e,a.B=l+e;else{if(a.u.Pw){if(l=f=a.la(aq(c),1),0<=a.B&&6!=c.info.type){f-=a.B;m=f-a.ca;d=c.info.i;var n=c.info.C;var q=a.R?a.R.i:-1;var r=a.R?a.R.C:-1,u=a.R?a.R.duration:-1;1E-4<Math.abs(m)&&
(a.u.To&&a.O("avsyncissue",{audio:""+ +!!a.l.info.audio,sq:d.toFixed(),sliceStart:n,lastSq:q.toFixed(),lastSliceStart:r,lastSliceDuration:u,totalDrift:(1E3*f).toFixed(),segDrift:(1E3*m).toFixed()}),a.da=d);m=0;a.u.Nw&&(a.u.kd&&f>a.u.kd||(l=a.B),a.u.Ow&&a.P&&!a.l.info.audio&&g.$p(c.info.g.info)&&(q=a.P,n=q.da,q=q.ca,r=.02<Math.abs(q-f),(d==n||d>n&&d>a.da)&&r&&(d=Math.max(.95,Math.min(1.05,(e-(q-f))/e)),Mo(Xp(c),d),d=dq(c),m=e-d,e=d)));a.ca=f+m}}else isNaN(a.B)?f=c.info.startTime:f=a.B,l=f;bq(c,l)?
(isNaN(a.V)&&(a.V=l),a.J+=e,a.B=l+e):(l=Gp(c.info),l.smst="1",a.O("error",l||{}))}if(h&&a.C){h=az(a,!0);Kp(c.info,h);a.g&&Kp(a.g.info,h);b=g.p(b.info.g);for(l=b.next();!l.done;l=b.next())Kp(l.value,h);(c.info.o||a.g&&a.g.info.o)&&6!=c.info.type||(a.K=h,a.O("placeholderinfo",h),bz(a))}}Wy(a,c);a.X&&cq(c,a.X);a.R=c.info};
Uy=function(a,b){if(b.info.o){a.ea=b.info;if(a.C){var c=az(a,!1);a.O("segmentinfo",c);a.K||bz(a);a.K=null}Py(a)}a.o&&Wx(a.o,b);if(c=Oy(a))if(c=Zp(c,b,a.u.Lh)){a.i.pop();a.i.push(c);return}a.i.push(b)};
Py=function(a){a.g=null;a.N=-1;a.F=0;a.C=null;a.V=NaN;a.J=0;a.K=null};
Wy=function(a,b){if(a.l.info.Fc){if(b.info.g.info.Qc()){var c=new ap(Xp(b));if(cp(c,[408125543,374648427,174,28032,25152,20533,18402])){var d=fp(c,!0);c=16!=d?null:mp(c,d)}else c=null;d="webm"}else b.info.K=mga(Xp(b)),c=nga(b.info.K),d="cenc";c&&c.length&&(c=new Hy(c,d),c.Qc=b.info.g.info.Qc(),b.i&&b.i.cryptoPeriodIndex&&(c.cryptoPeriodIndex=b.i.cryptoPeriodIndex),a.u.lo&&b.i&&b.i.u&&(c.g=b.i.u),a.O("needkeyinfo",c))}};
bz=function(a){var b=a.C,c;b.g["Cuepoint-Type"]?c=new g.Fo(cz?parseFloat(b.g["Cuepoint-Playhead-Time-Sec"])||0:-(parseFloat(b.g["Cuepoint-Playhead-Time-Sec"])||0),parseFloat(b.g["Cuepoint-Total-Duration-Sec"])||0,b.g["Cuepoint-Context"],b.g["Cuepoint-Identifier"]||"",Bga[b.g["Cuepoint-Event"]||""]||"unknown",1E3*(parseFloat(b.g["Cuepoint-Playhead-Time-Sec"])||0)):c=null;c&&(c.startSecs+=a.V,a.O("cuepoint",c,b.i))};
az=function(a,b){var c=a.C;if(c.g["Stitched-Video-Id"]||c.g["Stitched-Video-Duration-Us"]||c.g["Stitched-Video-Start-Frame-Index"]||c.g["Serialized-State"]){var d=c.g["Stitched-Video-Id"]?c.g["Stitched-Video-Id"].split(",").slice(0,-1):[];var e=[];if(c.g["Stitched-Video-Duration-Us"])for(var f=g.p(c.g["Stitched-Video-Duration-Us"].split(",").slice(0,-1)),h=f.next();!h.done;h=f.next())e.push((parseInt(h.value,10)||0)/1E6);e=[];if(c.g["Stitched-Video-Start-Frame-Index"])for(f=g.p(c.g["Stitched-Video-Start-Frame-Index"].split(",").slice(0,
-1)),h=f.next();!h.done;h=f.next())e.push(parseInt(h.value,10)||0);d=new hda(d,c.g["Serialized-State"]?c.g["Serialized-State"]:"")}return new uo(c.i,a.V,b?c.lf:a.J,c.ingestionTime,"sq/"+c.i,void 0,void 0,b,d)};
$y=function(a,b){b=void 0===b?0:b;var c=b?Math.round(a.X*b)/b:a.X;a.l.l&&c&&(c+=a.l.l.g);return c+a.getDuration()};
dz=function(a,b){0>b||(a.i.forEach(function(c){return cq(c,b)}),a.X=b)};
ez=function(a,b,c){this.W=a;this.g=b;this.o=[];this.l=new My(a,b,c);this.i=this.C=null;this.P=0;this.N=b.info.g;this.R=0;this.F=b.Pk();this.B=-1;this.X=b.Pk();this.u=this.F;this.J=!1;this.V=this.K=-1};
fz=function(a,b){b&&Zy&&dz(a.l,b.At());a.C=b};
gz=function(a){return a.C&&a.C.np()};
iz=function(a){for(;a.o.length&&6==a.o[0].state;){var b=a.o.shift();hz(a,b);b=b.timing;a.P=(b.o-b.g)/1E3}a.o.length&&Fy(a.o[0])&&!a.o[0].info.Ee()&&hz(a,a.o[0])};
hz=function(a,b){if(Fy(b)){b.N=!0;Gy(b);var c=b.l,d=c.g;c.g=[];c.u=g.$a(d).info;c=g.p(d);for(d=c.next();!d.done;d=c.next())jz(a,b,d.value)}};
jz=function(a,b,c){switch(c.info.type){case 1:case 2:Ry(a.l,c);break;case 4:var d=c.info.g.jA(c);c=c.info;var e=a.i;e&&e.g==c.g&&e.type==c.type&&(c.range&&e.range?e.range.start==c.range.start&&e.range.end==c.range.end:e.range==c.range)&&e.i==c.i&&e.l==c.l&&e.Ra==c.Ra&&(a.i=g.$a(d).info);d=g.p(d);for(c=d.next();!c.done;c=d.next())jz(a,b,c.value);break;case 3:Vy(a.l,b,c);break;case 6:Vy(a.l,b,c),a.i=c.info}};
kz=function(a){return Ny(a.l)};
lz=function(a,b){var c=b.info;c.g.info.g>=a.N&&(a.N=c.g.info.g)};
pz=function(a,b,c){c=void 0===c?!1:c;if(a.C){var d=a.C.Dd(),e=ls(d,b),f=NaN,h=gz(a);h&&(f=ls(d,h.g.index.td(h.i)));if(e==f&&a.i&&a.i.Ra&&mz(nz(a),0))return b}a=oz(a,b,c);return 0<=a?a:NaN};
rz=function(a,b){a.g.rd();var c=oz(a,b);if(0<=c)return c;c=a.l;c.o?(c=c.o,c=c.g&&3==c.g.type?c.g.startTime:0):c=Infinity;b=Math.min(b,c);a.i=a.g.dh(b).g[0];qz(a)&&a.C&&a.C.abort();a.R=0;return a.i.startTime};
sz=function(a){a.F=!0;a.u=!0;a.B=-1;rz(a,Infinity)};
tz=function(a){var b=0;(0,g.y)(a.o,function(c){var d=b;c=c.l&&c.l.length?pga(c.l):Sq(c.info);b=d+c},a);
return b+=Aga(a.l)};
uz=function(a,b){if(!a.C)return 0;var c=gz(a);if(c&&c.B)return c.u;c=a.C.Dd(!0);return ns(c,b)};
wz=function(a){vz(a);a=a.l;a.i=[];Py(a)};
xz=function(a,b){if(a.o.length){if(a.o[0].info.g[0].startTime<=b)return;vz(a)}for(var c=a.l,d=c.i.length-1;0<=d;d--)c.i[d].info.startTime>b&&c.i.pop();a.o.length?a.i=g.$a(g.$a(a.o).info.g):a.l.i.length?a.i=Oy(a.l).info:a.i=gz(a);a.i&&b<a.i.startTime&&(a.R=0,a.i=a.g.dh(b,!0).g[0])};
yz=function(a,b){var c;for(c=0;c<a.o.length&&b!==a.o[c];c++);if(c==a.o.length)b.N&&Yy(a.l),b.dispose();else{for(;c<a.o.length;){var d=a.o.pop();d.N&&Yy(a.l);d.dispose()}Bp(b.info.g[0])?(b.l&&b.l.u?(c=b.l.u,c=new zp(c.type,c.g,c.range,"getEmptyStubAfter_"+c.F,c.i,c.startTime+c.duration,0,c.l+c.Ra,0,!1)):(c=b.info.g[0],c=new zp(c.type,c.g,c.range,"getEmptyStubBefore_"+c.F,c.i,c.startTime,0,c.l,0,!1)),a.i=c):a.i=null}};
qz=function(a){var b;!(b=!a.W.Jh&&"f"===a.g.info.ob)&&(b=a.W.C)&&(b=a.l,b=!!b.o&&Ux(b.o));if(b)return!0;b=gz(a);if(!b)return!1;var c=b.B&&b.o;return a.X&&0<a.K?c||b.i>=a.K:c};
nz=function(a){var b=[],c=gz(a);c&&b.push(c);b=g.lb(b,Xy(a.l));(0,g.y)(a.o,function(d){(0,g.y)(d.info.g,function(e){d.N&&(b=(0,g.hf)(b,function(f){return!(f.g!=e.g?0:f.range&&e.range?f.range.start+f.l>=e.range.start+e.l&&f.range.start+f.l+f.Ra<=e.range.start+e.l+e.Ra:f.i==e.i&&f.l>=e.l&&(f.l+f.Ra<=e.l+e.Ra||e.o))}));
(Bp(e)||4==e.type)&&b.push(e)})});
a.i&&!pda(a.i,g.$a(b),a.i.g.De())&&b.push(a.i);return b};
mz=function(a,b){if(!a.length)return!1;for(var c=b+1;c<a.length;c++)if(!Dp(a[c-1],a[c]))return!1;return!0};
oz=function(a,b,c){c=void 0===c?!1:c;if(!a.i||!a.i.Ra)return NaN;a=nz(a);a:{var d=c;d=void 0===d?!1:d;for(var e=-1,f=0;f<a.length;++f){var h=a[f];if(h.C<=b)if(d)e=f;else if(h.startTime+h.duration>=b){b=f;break a}}b=e}return 0>b?NaN:mz(a,c?b:0)?a[b].startTime:NaN};
zz=function(a){return(0,g.Wj)(a.o,function(b){return 4<=b.state})};
Az=function(a){return!(!a.i||a.i.g==a.g)};
Bz=function(a){return Az(a)&&a.g.rd()&&a.i.g.info.g<a.g.info.g};
Cz=function(a,b,c){var d=Oy(a.l);return(a=d?d.info:gz(a))&&!a.B?a.u>b&&a.u<b+c:!1};
vz=function(a){(0,g.y)(a.o,function(b){b.N&&Yy(this.l);b.dispose()},a);
a.o=[];a.i=null};
Dz=function(a){return!!a.i&&-1!=a.i.i&&a.i.i<a.g.index.Cf()};
Ez=function(a){var b=a.i;b&&-1==b.i&&(a=Oy(a.l))&&Bp(a.info)&&(a=a.info.i,b.F="updateLastSliceRequested",b.i=a)};
Fz=function(a){return(0,g.Wj)(a.o,function(b){return b.J})};
Gz=function(a,b){this.i=a;this.g=b;this.l=1};
Iz=function(a,b,c,d,e){e=void 0===e?!1:e;a.g.zb&&(d=Math.abs(d));d/=a.l;var f=1/dt(a.i);var h=.9*(d-a.g.Te);h=Math.max(h,at(a.i)+2048*f);c=h/f*a.g.Jw/(b+c);c=Math.min(c,d);a.g.jd&&e&&(c=Math.max(c,a.g.jd));return Hz(a,c,b)};
Hz=function(a,b,c){return Math.ceil(Math.max(Math.max(65536,a.g.Iw*c),Math.min(Math.min(a.g.V,31*c),Math.ceil(b*c))))};
Cga=function(a,b){var c=Hz(a,b.video?a.g.Zw:a.g.Kh,b.g);return a.g.Ng&&b.video?Math.max(c,a.g.Ng):c};
Jz=function(a){var b=dt(a.i);if(a.g.so)return b;var c=a.g.Hw,d=1E-9+at(a.i);b*=Math.min(1,c/(b*d));a.g.Mg&&(c=((Ys(a.i.l,.98)||0)-1)/2,c=Math.max(0,Math.min(1,c)),b*=1-a.g.Mg*c);return b};
Kz=function(a){return Jz(a)/a.l};
Lz=function(a,b,c,d){g.N.call(this);this.o=0;this.i=b;this.g=c;this.u=a;this.J=d;this.B=0;this.C=this.u.i&&!this.u.ff;this.l=!1;this.F=null};
Mz=function(a,b){var c=a.g.index,d=a.i.i;or(c,d)||b&&b.i==d?(a.u=!or(c,d),a.J=!or(c,d)):(a.u=!0,a.J=!0)};
Nz=function(a,b,c){if(!a.g.rd())return 0!=b&&vz(a),b;var d=pz(a,b);if(!isNaN(d))return d;wz(a);return c&&(c=ls(c.Dd(),b),!isNaN(c))?(rz(a,c+Dga),b):rz(a,b)};
Fga=function(a,b,c,d){if(a.l&&a.o){var e=Ega(a,b,c);if(-1!=e){a.i.u=!1;a.g.u=!1;a.C=!0;g.zf(function(){Oz(a,"seekreason","behindMinSq");Pz(a,e)});
return}}c?a.i.J=!1:a.g.J=!1;0<=pz(a.i,a.o)&&0<=pz(a.g,a.o)?((a.i.u||a.g.u)&&Oz(a,"iterativeSeeking","done;count."+a.B,!1),a.i.u=!1,a.g.u=!1):d&&g.zf(function(){if(a.C||!a.J.ca)a.J.Lg?Qz(a):c&&Pz(a,b.startTime);else{var f=b.startTime,h=b.duration,l=c?a.i.u:a.g.u;l=!a.ba()&&l;var m=-1!=a.i.B&&-1!=a.g.B,n=!a.i.J&&!a.g.J;l&&m&&n&&(a.o>=f&&a.o<f+h+.1?((c?a.i:a.g).u=!1,a.i.u||a.g.u||(Oz(a,"iterativeSeeking","done;count."+a.B,!1),a.B=0)):8>a.B?(a.B++,Oz(a,"iterativeSeeking","inprogress;count."+a.B+";target."+
a.o+";actual."+f+";duration."+h+";isVideo."+c,!1),a.seek(a.o)):(Oz(a,"iterativeSeeking","incomplete;count."+a.B+";target."+a.o+";actual."+f,!1),a.B=0,a.i.u=!1,a.g.u=!1,a.O("seekplayerrequired",f+.1,!0)))}})};
Ega=function(a,b,c){if(!a.l)return-1;c=(c?a.i:a.g).g.index;var d=c.Df(a.o);return(or(c,a.u.Sc)||b.Oa==a.u.Sc)&&d<a.u.Sc?a.u.Ib():-1};
Pz=function(a,b){!a.ba()&&a.C&&-1!=a.i.B&&-1!=a.g.B&&(a.C=!1,a.O("seekplayerrequired",b+.1,a.J.Lg))};
Qz=function(a){var b=-1!=a.i.B,c=-1!=a.g.B;if(!b||!c)if(b=!b&&kz(a.i),c=!c&&kz(a.g),b||c)if(c=b?a.i:a.g,b=b?a.g:a.i,c.B=kz(c).info.i,-1!=b.B){var d=Math.max(b.g.index.td(b.B),c.g.index.td(c.B));Oz(a,"seekreason","initManifestlessSync");g.zf(function(){return Pz(a,d)});
a.F&&(a.F.resolve(d+.1),a.F=null)}};
Oz=function(a,b,c,d){a.O("ctmp",b,c,void 0===d?!1:d)};
Rz=function(){this.i=this.l=0;this.u={}};
Sz=function(a,b,c){g.N.call(this);this.i=this.g=null;this.o=!1;this.l=0;this.u=b;this.C=a;this.B=c;this.B.l.subscribe("cuepoint",this.F,this)};
Tz=function(a,b){if(a.g){a.i=null;a.o=!1;var c=b.startTime+a.l-a.g.Cd.startSecs;0>=c||(c=new g.Fo(a.g.Cd.startSecs-(a.u.tb&&!isNaN(a.l)?a.l:0),c,a.g.Cd.context,a.g.Cd.identifier,"stop",a.g.Cd.g+1E3*b.duration),a.O("ctmp","cuepointdiscontinuity","segNum."+b.Oa,!1),a.F(c,b.Oa))}};
Gga=function(a,b,c,d){this.W=a;this.u=b;this.C=c;this.F=d;this.o=yu;this.B=this.K=null;this.R=-1;this.i=this.l=null;this.g=[];this.V={};this.J=0;this.N=this.X=!1;this.P=0};
Jga=function(a,b,c){Uz(a,b);Hga(a,c);a.K=a.l;Iga(a);a.B=a.i;return Vz(a)};
Kga=function(a,b){if(vu(a.o,b))return null;if("m"==b.reason&&b.isLocked())return Uz(a,b),a.J=a.g.length-1,Wz(a),Xz(a),a.N=a.N||a.B!=a.i,a.B=a.i,new Qx(a.l,a.B,b.reason);"r"==b.reason&&(a.R=-1);Uz(a,b);Xz(a);if("r"==b.reason&&a.i==a.B)return new Qx(a.l,a.i,b.reason);if(a.B&&a.i&&Yz(a,a.B.info)<Yz(a,a.i.info)){var c=a.o.reason;a.X=a.X||"r"==c||"u"==c||"v"==c}return null};
Lga=function(a,b){if(b.info.video){if(a.B!=b)return a.B=b,Vz(a)}else a.K=b;return null};
Zz=function(a,b){b.K=(0,g.M)();a.R=-1;Uz(a,a.o)};
$z=function(a){for(var b=(0,g.M)()-6E4,c=g.p(a.F.videoInfos),d=c.next();!d.done;d=c.next())if(a.C.g[d.value.id].K>b)return!0;return!1};
Mga=function(a){return new Qx(a.K,a.B,a.o.reason)};
aA=function(a){return a.o.isLocked()};
Nga=function(a){return 0<a.g.length&&0==a.J};
Vz=function(a){a.R=(0,g.M)();a.X=!1;return new Qx(a.K,a.B,a.o.reason)};
Uz=function(a,b){a.o=b;var c=a.F.videoInfos;if(!aA(a)){var d=(0,g.M)()-6E4;c=(0,g.hf)(c,function(m){if(m.g>this.u.K)return!1;m=this.C.g[m.id];return m.K>d?!1:4<m.i.i||4<m.J||m.B?!1:!0},a);
if($z(a)){var e=(0,g.hf)(c,function(m){m=Ip(m);return"140"===m||"134"===m||"243"===m});
e.length&&(c=e)}}c.length||(c=a.F.videoInfos);e=(0,g.hf)(c,b.o,b);if(a.u.no){for(var f={},h=g.p(e),l=h.next();!l.done;l=h.next())!(l=l.value)||!l.video||f[l.video.Rb]&&"1"===l.ob!=l.video.Rb<=a.u.aB||(f[l.video.Rb]=l.ob);e=e.filter(function(m){return!!m&&!!m.video&&m.ob==f[m.video.Rb]})}e.length||(e=[c[0]]);
e.sort((0,g.x)(function(m,n){return Yz(this,m)-Yz(this,n)},a));
for(c=1;c<e.length;c++)h=e[c-1],l=e[c],h.video.width>l.video.width?(g.ib(e,c),c--):Yz(a,h)*a.u.g>Yz(a,l)&&(g.ib(e,c-1),c--);c=e[e.length-1];a.g=e;sda(a.u,c)};
Hga=function(a,b){if(b)a.l=a.C.g[b];else{var c=g.bb(a.F.i,function(d){return!!d.Ab&&d.Ab.isDefault});
c=c||a.F.i[0];a.l=a.C.g[c.id]}Wz(a)};
bA=function(a,b){for(var c=0;c+1<a.g.length&&"tiny"==a.g[c].xa().quality;)c++;var d=Kz(a.W)/a.u.g;return Yz(a,b.info)+Yz(a,a.g[c])>d};
Wz=function(a){if(!a.l||!a.u.l)if(!a.l||!a.l.info.Ab)if(a.l=a.C.g[a.F.i[0].id],1<a.F.i.length){var b=!1;if(a.u.Ci){if(b=!0,a.u.RD){var c=g.ab(a.F.i,function(d){return"250"===Ip(d)});
0<=c&&(a.l=a.C.g[a.F.i[c].id],b=bA(a,a.l))}}else b=a.o.isLocked()?240>a.o.g:bA(a,a.l);b&&(a.l=a.C.g[g.$a(a.F.i).id])}};
Xz=function(a){if(!a.i||!a.u.l)if(aA(a))a.i=360>=a.o.g?a.C.g[a.g[0].id]:a.C.g[g.$a(a.g).id];else{for(var b=Math.min(a.J,a.g.length-1),c=Kz(a.W),d=Yz(a,a.l.info),e=c/a.u.i-d;0<b&&!(Yz(a,a.g[b])<=e);b--);for(c=c/a.u.g-d;b<a.g.length-1&&!(Yz(a,a.g[b+1])>=c);b++);a.i=a.C.g[a.g[b].id];a.J=b}};
Iga=function(a){var b=a.u.i,c=Kz(a.W)/b-Yz(a,a.l.info);b=g.cb(a.g,function(d){return Yz(this,d)<c},a);
0>b&&(b=0);a.J=b;a.i=a.C.g[a.g[b].id]};
Yz=function(a,b){if(!a.V[b.id]){var c=a.C.g[b.id].index.Ty(a.P,15);c=b.i&&a.B&&a.B.index.Nb()?c||b.i:c||b.g;a.V[b.id]=c}c=a.V[b.id];a.u.Ve&&b.video&&b.video.Rb>a.u.Ve&&(c*=1.5);return c};
Oga=function(a,b){var c=Lb(a.C.g,function(d){return Ip(d.info)==b});
if(!c)throw Error("Itag "+b+" from server not known.");return c};
Pga=function(a){var b=[];if("m"==a.o.reason||"s"==a.o.reason)return b;var c=!1;if(Tda(a.C)){for(var d=Math.max(0,a.J-2);d<a.J;d++){var e=Ip(a.g[d]);Xq(a.g[d].xa())||(c=!0);b.push(e)}b.reverse();if(!c&&a.u.LC)for(d=Math.max(0,a.J-3);0<=d&&!c;d--)Xq(a.g[d].xa())||(c=!0,b.push(Ip(a.g[d])))}return b};
cA=function(a,b,c,d){this.g=a;this.B=b;this.u=d;this.o=c;this.l=0};
dA=function(a,b,c,d){g.N.call(this);this.g=a;this.W=b;this.V=c;this.R=d;this.P=NaN;this.o=this.K=this.B=null;this.i=this.F=this.J=this.C=NaN;this.u=!1;this.N=NaN};
Qga=function(a,b,c,d){return a.la&&a.da&&3==lr(a)?new dA(a,b,c,d):null};
eA=function(a,b){if(a.g.Sw){var c=b.info.g;if(0>=c)a.N=NaN;else{var d=dt(a.W),e=b.index.g;c=Math.max(1,d/c);a.N=Math.round(1E3*Math.max(((c-1)*e+a.g.R)/c,e-a.g.kb))}}};
Rga=function(a,b){var c=(0,g.E)()/1E3,d=c-a.C,e=c-a.J,f=e>=a.g.Kg,h=!1;if(f){var l=0;!isNaN(b)&&b>a.F&&(l=b-a.F,a.F=b);l/e<a.g.Vw&&(h=!0);a.J=c}c=d>=a.g.kb&&!a.u;if(!f&&!c&&fA(a,b))return NaN;c&&(a.u=!0);a:{d=h;c=(0,g.E)()/1E3-(a.V.g()||0)-a.K.l-a.g.R;f=a.o.startTime;c=f+c;if(d){if(isNaN(b)){gA(a,NaN,"n",b);f=NaN;break a}d=b-a.g.ab;d<c&&(c=d)}else a.u&&(d=c+a.g.R-a.P+a.g.Ww,isNaN(b)||(d=Math.max(d,Math.min(c,b-a.g.ab))),c=d);f=c=Math.max(c,f)}a.i=f;if(isNaN(a.i))return hA(a),NaN;if(!h&&fA(a,b))return iA(a,
b),NaN;if(a.i<=a.o.startTime)return gA(a,NaN,"y",b),hA(a),NaN;if(!a.R(a.i,!1))return!iA(a,b)&&h&&(gA(a,NaN,"t",b),hA(a)),NaN;h=a.i;gA(a,h,"s",b);hA(a);return h};
iA=function(a,b){return a.R(a.i,!0)?!1:(gA(a,NaN,"ns",b),hA(a),!0)};
fA=function(a,b){return isNaN(b)?!0:isNaN(a.i)?!1:b<a.i+(a.u?a.g.ab:a.g.Tw)};
hA=function(a){a.B=null;a.K=null;a.o=null;a.C=NaN;a.J=NaN;a.F=NaN;a.i=NaN;a.u=!1};
gA=function(a,b,c,d){var e=ry(a.B);e.ssr_sk=(1E3*b).toFixed(0);e.ssr_t=(1E3*a.i).toFixed(0);e.ssr_r=c;e.ssr_st=(1E3*a.C).toFixed(0);e.ssr_n=(0,g.E)().toFixed(0);e.ssr_f=(1E3*a.K.l).toFixed(0);e.ssr_fa=a.u?"1":"0";e.ssr_o=(1E3*a.V.g()||0).toFixed(0);e.ssr_v=(1E3*d).toFixed(0);b=a.o.g.index;or(b,a.o.i,!0)&&(e.ssr_ist=(1E3*b.td(a.o.i)).toFixed(0),e.ssr_id=(1E3*b.getDuration(a.o.i)).toFixed(0));e=qs(e);a.O("ctmp","ssr",e,!1)};
Sga=function(){this.i=g.gu;this.g=[]};
Tga=function(a,b,c){var d=[];for(b=jA(a,b);b<a.g.length;++b){var e=a.g[b];(e.end<=c||e.contains(c))&&d.push(e);if(e.start>c)break}return d};
kA=function(a,b){for(var c=[],d=g.p(a.g),e=d.next();!e.done&&!(e=e.value,e.contains(b)&&c.push(e),e.start>b);e=d.next());return c};
Uga=function(a){return a.g.slice(jA(a,0x7ffffffffffff),a.g.length)};
jA=function(a,b){var c=ub(a.g,function(d){return b-d.start||1});
return 0>c?-(c+1):c};
lA=function(a,b){for(var c=NaN,d=g.p(a.g),e=d.next();!e.done;e=d.next())if(e=e.value,e.contains(b)&&(isNaN(c)||e.end<c)&&(c=e.end),e.start>b&&(isNaN(c)||e.start<c)){c=e.start;break}return c};
mA=function(a,b){if(1<b.length&&b.length>a.g.length)a.g=a.g.concat(b),a.g.sort(a.i);else for(var c=g.p(b),d=c.next();!d.done;d=c.next())d=d.value,!a.g.length||0<a.i(d,a.g[a.g.length-1])?a.g.push(d):g.xb(a.g,d,a.i)};
nA=function(a,b,c,d){g.A.call(this);this.N=a;this.R=b;this.F=c;this.J=d;this.o=NaN;this.B=this.C=this.started=!1;this.l=[];this.K=new g.G(this.i,250,this);g.C(this,this.K);this.u=new g.G(this.i,0,this);g.C(this,this.u);this.g=new Sga};
oA=function(a,b){if(!a.ba()){for(var c=g.p(b),d=c.next();!d.done;d=c.next())if(d=d.value){var e=a.l.indexOf(d);0<=e&&a.l.splice(e,1);var f=a.g;e=f.g;d=g.tb(e,d,f.i);0<=d&&g.ib(e,d)}a.i()}};
pA=function(a){return a.ba()?[]:a.g.g};
qA=function(a,b){var c=pA(a).filter(function(d){return d.namespace===b});
oA(a,c);return c};
rA=function(a,b){var c=[];if(!b.length)return c;for(var d=0;d<b.length;d++){var e=b[d];e.active&&-1===a.l.indexOf(e)&&(a.l.push(e),c.push([1,e]))}return c};
sA=function(a,b){var c=[];if(!b.length)return c;b.sort(g.gu);for(var d=g.p(b),e=d.next();!e.done;e=d.next())e=e.value,a.l.splice(a.l.indexOf(e),1),c.push([2,e]);return c};
Xga=function(a){if(a.started&&!a.ba()){a.u.stop();var b=a.F();g.S(b,32)&&a.K.start();for(var c=Vga(a),d=g.S(b,2),e=[],f=[],h=g.p(a.l),l=h.next();!l.done;l=h.next())l=l.value,l.active&&(d?0x8000000000000>l.end:!l.contains(c))&&f.push(l);e=e.concat(sA(a,f));h=f=null;d?(b=kA(a.g,0x7ffffffffffff),f=b.filter(function(m){return 0x8000000000000>m.end}),h=Uga(a.g)):b=a.o<=c&&tA(b)?Tga(a.g,a.o,c):kA(a.g,c);
e=e.concat(rA(a,b));f&&(e=e.concat(sA(a,f)));h&&(e=e.concat(rA(a,h)));a.o=c;Wga(a,e)}};
Wga=function(a,b){for(var c=g.p(b),d=c.next();!d.done;d=c.next()){d=d.value;var e=d[1];1===d[0]?a.J(g.hu(e.namespace),e):a.J("crx_"+e.namespace,e)}};
Vga=function(a){return g.S(a.F(),2)?0x8000000000000:1E3*a.N()};
Yga=function(a){a=void 0===a?{}:a;var b=a.Bd,c=a.Ln,d=a.qb,e=a.Ak;this.Wg=a.Wg;this.Bd=b;this.Ln=c;this.qb=d;this.Ak=e};
uA=function(a,b){if(0>b)return!0;var c=a.qb();return b<c||b===c&&!a.Wg||b===c&&(c=a.Ak())&&b===c.Oa?!0:!1};
Zga=function(a,b,c){if(!uA(a,b))return 0;if(!a.Bd||!isNaN(c)&&0<c)return 2;if(0>b)return 1;c=a.qb();return b<c||b===c&&(a=a.Ak())&&b===a.Oa&&!a.pending?2:1};
sga=function(a,b,c,d){if(uA(a,b))return d;b=0;a.Bd&&(b=.2);return c+1E3*(a.Ln+b)};
tga=function(a,b,c,d,e){b=Zga(a,b,e);if(2===b)return d;c=b?d:c+1E3*a.Ln;a.Bd&&(c+=1E3*a.Ln);return c};
$ga=function(){this.i=0;this.B=this.u=this.l=this.o=NaN;this.g="";this.bandwidthEstimate=NaN};
xA=function(a,b,c,d,e,f,h){g.N.call(this);var l=this;this.R=a;this.g=b;this.u=c;this.ea=new Rz;this.ab=h||null;this.N=new Gz(a,b);this.C=new Gga(this.N,b,this.u,d);a=Jga(this.C,e,f&&f.id);this.o=new ez(this.g,a.audio,(0,g.x)(this.Bx,this));this.i=new ez(this.g,a.video,(0,g.x)(this.Bx,this));vA(this,this.o);vA(this,this.i);this.i.l.P=this.o.l;this.l=null;this.va={updateend:this.hJ,error:this.hK};this.ca=new g.G(this.zg,0,this);g.C(this,this.ca);this.Ka=new g.G(this.zg,1E3,this);g.C(this,this.Ka);this.zb=
new g.G(this.zg,void 0,this);g.C(this,this.zb);this.Xa=new g.G(this.zg,1E4,this);g.C(this,this.Xa);this.K=this.B=NaN;this.Ga=0;this.da=this.za=this.X=!1;this.la="";this.ua=new Vs(5);this.ma={};this.Ca=NaN;(this.F=Qga(this.g,this.R,this.ua,function(m,n){return wA(l,m,n)}))&&this.F.subscribe("ctmp",this.Uc,this);
this.J=new Lz(this.u,this.i,this.o,this.g);g.C(this,this.J);this.W=new Sz(this.u,this.g,this.i);g.C(this,this.W);this.W.subscribe("ctmp",this.Uc,this);aha(this,this.J);this.kb=NaN;this.La=null;this.V=NaN;this.Gb=this.tb=!1;this.Da=0;this.P=!1;this.na=0};
bha=function(a){var b=a.i.g.index;a.La=new Yga({Wg:a.g.Wg,Bd:a.g.u.Bd,Ln:b.g,qb:function(){return b.qb()},
Ak:function(){return b.Ak()}})};
yA=function(a,b){b=b||a.i&&a.i.i&&a.i.i.startTime||a.B;var c=a.i;var d=a.C;var e=d.i&&d.i.index.Df(b)||0;d.P!=e&&(d.V={},d.P=e,Uz(d,d.o));e=!aA(d)&&-1<d.R&&8E3>(0,g.M)()-d.R;var f=d.i&&3*Yz(d,d.i.info)<Kz(d.W);if(!e||f)Wz(d),Xz(d),d.N=d.N||d.i!=d.B;d.i&&!d.i.index.Nb()&&(d.P=-1);d=d.i;c.g!=d&&(c.g=d);c=a.o;d=a.C.l;c.g!=d&&(c.g=d)};
zA=function(a,b){a.za=b;a.P||(a.X=!0)};
AA=function(a){a.l&&a.l.g&&a.l.i&&(pn(a.l.g,a.va,a),pn(a.l.i,a.va,a));fz(a.o,null);fz(a.i,null);a.l=null};
CA=function(a,b){b=void 0===b?!1:b;AA(a);b?a.P=!0:a.g.ze?zA(a,a.tb):zA(a,!1);BA(a)};
EA=function(a){a.l&&As(a.l)&&(CA(a),a.g.Kw&&DA(a,!0,"fmt.unplayable",{unexpected:1}))};
GA=function(a,b,c){if(a.X&&(!gt(a.R)||a.za)||a.g.C&&!gt(a.R))return!1;if(a.u.i){if(0<b.o.length&&b.i&&-1==b.i.i||b.o.length>=a.g.kp&&!a.g.Xa||!a.g.XC&&0<b.o.length&&!a.g.u.Bd)return!1;if(b.F)return!a.u.isLive||!isNaN(a.Ca)}if(Fz(b))return!1;if(!(b.i||a.u.i&&a.g.Xa&&b.F)){if(!b.g.rd())return!1;rz(b,a.B)}var d=b.o.length+c.o.length;(zz(b)||zz(c)||a.u.isLive&&(!a.g.Xa||!b.o.length))&&--d;if(d+1>=a.g.Lz)return!1;d=b.i;if(!d)return!0;if(!Mq(d.g.i))return!1;4==d.type&&d.g.rd()&&(b.i=g.$a(d.g.gr(d)),d=b.i);
if(!d.B&&!d.g.uh(d))return!1;var e=a.u.ff||a.u.C;if(a.u.i&&e){e=b.g.index.qb();var f=c.g.index.qb();e=Math.min(e,f);if(0<b.g.index.B&&0<e&&d.i>=e)return b.K=e,c.K=e,!1}if(d.g.info.audio&&4==d.type)return!1;if(Bz(b)&&!a.g.ea)return!0;if(d.B||tz(b)&&tz(b)+tz(c)>a.g.va)return!1;e=!b.u&&!c.u;f=b==a.i&&a.P;if(!(c=!!(c.i&&!c.i.B&&c.i.u<d.u)&&(!a.u.i||c.i&&c.i.u&&d.u)&&e&&!f||a.g.ca&&!b.u&&c.u)&&(c=Bp(d))){d=d.u;a:if(c=a.W,c=c.g?c.g.Cd:null,a.P&&c)a=c.startSecs+c.durationSecs;else{c=FA(a,b,!0);!aA(a.C)&&
0<a.g.J&&(e=((0,g.M)()-a.Ga)/1E3,c=Math.min(c,a.g.J+a.g.Ec*e));c=a.B+c;if(a.g.Zd&&(e=cha(a)+a.g.Zd,e<c)){a.Uc("mrl","ori."+c+";mod."+e,!0);a.g.uo&&(a.Ga=(0,g.M)());a=e;break a}a=c}c=d>a}return c?!1:(b=b.C)&&b.isLocked()?!1:!0};
HA=function(a,b,c){if((!a.l||xs(a.l)||Cs(a.l))&&!a.J.l&&a.C.X){var d=a.B;a=a.N;c=Iz(a,b.g.info.g,c.g.info.g,0);var e=at(a.i)+c/dt(a.i);xz(b,d+Math.max(e,e+a.g.Yd-c/b.g.info.g))}};
JA=function(a,b,c){if(GA(a,b,c)){var d=dha(a,b,c);if(a.g.Qw&&a.u.i&&!b.F&&0>d.g[0].i)a.Uc("invalidsq",Hp(d.g[0]));else{if(a.Wa){var e=d.g[0].i,f=eha(a.Wa.g,d.g[0].C,e,d.g[0].g.info.id);f&&e>c.V?d.u=f:b.V=e}a.g.ko&&-1!=d.g[0].i&&d.g[0].i<a.u.Sc&&(d=b.g.Fj(a.u.Sc,!1));a=IA(a,d);b.o.push(a);b.i=g.$a(a.info.g)}}};
dha=function(a,b,c){if(b.F){if(a.u.isLive){var d=a.u.Sc&&a.u.C?b.g.Fj(a.u.Sc,!1):b.g.dh(Infinity);d.Fd=a.Ca}else d=b.g.Fj(0,!1);a.F?0==d.Fd&&(d.o=a.F.N):d.o=a.kb;return d}d=b.i;if(!d.g.rd())return d.g.De()?(a=Iz(a.N,b.g.info.g,c.g.info.g,0),a=d.g.Ej(d,a)):a=d.Yh(),a;!Bz(b)||a.g.ea||a.u.i||(HA(a,b,c),b.i||rz(b,a.B));d=b.i;var e=d.u-a.B,f=!d.range||0==d.Ra&&0==d.l?0:d.range.length-(d.l+d.Ra),h=d.g;fha(a,b,e)&&0==f&&(a.u.i?h=b.g:(h=d.startTime+KA,d.Ra&&(h+=d.duration),rz(b,h),d=b.i,h=d.g));h.De()?(c=
Iz(a.N,h.info.g,c.g.info.g,e,Nga(a.C)&&a.da),d=gha(d,c,Az(b))):(0>d.i&&(c=Gp(d),c.pr=""+b.o.length,a.J.l&&(c.sk="1"),a.Uc("nosq",d.F+";"+qs(c))),d=h.Yh(d));a.P&&d.g.forEach(function(l){l.type=6});
return d};
fha=function(a,b,c){if(!Az(b)||!b.g.rd())return!1;a=Math.min(15,.5*FA(a,b,!0));return Bz(b)||c<=a};
gha=function(a,b,c){b=a.g.Ej(a,b);if(b.range&&1<b.g.length)if(c||b.i.i||b.g[0].g!=a.g)b=a.g.Ej(a,b.g[0].Ra);else{c=b.g[b.g.length-1];var d=c.Ra/b.range.length;!c.o&&.4>d&&(b=a.g.Ej(a,b.range.length-c.Ra))}return b};
hha=function(a,b){var c=Sq(b),d=a.N;var e=Math.min(2.5,at(d.i));d=Jz(d);e=c-e*d;d=Ap(b.g[0]);var f=Aq(b.i.g),h=a.g.C,l;a.La?l={Ee:d,sg:f,qj:h,wg:a.La,Oa:b.g[0].i,Fd:b.Fd}:l={Ee:d,sg:f,qj:h};return new Yx(a.R,c,e,l)};
IA=function(a,b){Bp(b.g[b.g.length-1])&&LA(a,Lga(a.C,b.g[0].g));var c=hha(a,b);a.g.zo&&(c.u=[]);var d=new py(a.g,b,c,a.ma);c.V=function(){var e;if(zga(d)){if(e=d.i.po&&!(!window.performance||!window.performance.now)&&d.g&&d.g.Hk()&&Dy(d))e=d.g,e=e.policy.Bd&&kr(e);e=e?d.info.g[0].g.info.video?3:4:2}else e=1;return e};
vga(d,(0,g.x)(a.sM,a));3==b.g.length&&1==b.g[0].type&&2==b.g[1].type&&4==b.g[2].type&&b.g[0].g.info.video&&(d.da=Pga(a.C));a.P&&(d.ea=!0);d.start(Math.max(0,b.g[0].C-a.B));return d};
LA=function(a,b){b&&a.O("videoformatchange",b)};
MA=function(a,b){var c=b.info.g[0].g,d=c.info.video?a.i:a.o;iha(a,d,b);b.info.Ee()&&!Pq(b.info)&&((0,g.y)(yga(b),function(e){Ry(d.l,e)}),a.O("metadata",c));
iz(d);return!!kz(d)};
iha=function(a,b,c){if(a.u.i&&b){b.F&&(c.ba(),5<=c.state||Dy(c)||Fy(c),b.F=!1);c.P&&a.ua.l(1,c.P);c.g&&(c.V=parseInt(c.g.Tc("X-Head-Seqnum"),10));b=c.V;c.g&&(c.W=parseInt(c.g.Tc("X-Head-Time-Millis"),10));c=c.W;a=a.u;for(var d in a.g){var e=a.g[d].index,f=c;e.i&&(b&&(e.B=Math.max(e.B,b)),f&&(e.o=Math.max(e.o,f)))}}};
NA=function(a,b,c){a:{b=b.info;var d=a.g.VD,e=null,f=b.g[0];if(b.range)e=xp(b.range.start,Math.min(4096,b.range.length));else if(d){if(b.l&&0<=b.l.indexOf("/range/")||"1"==b.i.o.get("defrag")||"1"==b.i.o.get("otf")){c=null;break a}e=xp(0,4096)}else if(f.g.info.video){c=null;break a}d=new zp(5,f.g,e,"createProbeRequestInfo_"+f.F,f.i);b=new Oq([d],b.l);b.B=c;c=b}c&&IA(a,c)};
RA=function(a){var b=a.l.g,c=a.l.i;a.o.g.l&&OA(a,b,a.o.g.l);if(jha(a)){if(a.g.Ih){if(!b.fj()){var d=kz(a.o);d&&PA(a,b,d)}c.fj()||(d=kz(a.i))&&PA(a,c,d)}}else a.F&&(d=a.F.l(a.o,ms(a.l.i.Dd())))&&a.O("seekplayerrequired",d,!0),d=!1,QA(a,a.i,c)&&(d=!0,c=a.ea,c.l||(c.l=(0,g.E)(),c.yd("vda"),zv("vda"),c.i&&vk(4))),c=kz(a.i),a.g.ua&&!d&&c&&(a.Gb||a.Uc("sbp",a.l.i.Ta({ns:Hp(c.info)})),a.Gb=!0),a.l&&!As(a.l)&&(QA(a,a.o,b)&&(d=a.ea,d.i||(d.i=(0,g.E)(),d.yd("ada"),zv("ada"),d.l&&vk(4)),d=!0),!a.ba()&&a.l&&
(!a.g.W&&qz(a.i)&&qz(a.o)&&xs(a.l)&&!a.l.ie()&&(b=gz(a.o).g,b==a.u.g[b.info.id]&&(b=a.l,xs(b)&&b.l.endOfStream(),b=a.R,Ns(et(b)),b.o=Zs())),d&&!Cs(a.l)&&a.ca.fb()))};
jha=function(a){if(a.g.Da)return!1;var b;if(!(b=Fz(a.i))&&(b=a.J.l)){b=a.N;var c=a.i,d=a.o;if(0==c.o.length&&0==d.o.length)b=!0;else{var e=0,f=Xy(c.l).concat(Xy(d.l));f=g.p(f);for(var h=f.next();!h.done;h=f.next())e+=h.value.Ra;c=c.g.info.g+d.g.info.g;e/=c;b=10<e?!0:10>c*(10-e)/Kz(b)}(b=!b)||(b=a.i,b=0<b.o.length&&1==b.l.i.length&&Ny(b.l).info.J<b.P)}if(b)return!0;if(!a.da||!a.g.za||10>a.B||360<a.i.g.info.xa().Rb)return!1;b=Cz(a.i,a.B,a.g.za)||Cz(a.o,a.B,a.g.za);return(0<a.i.o.length||0<a.o.o.length||
GA(a,a.i,a.o)||GA(a,a.o,a.i))&&b};
QA=function(a,b,c){if(c.ie())return!0;if(!c.ys())return!1;var d=kz(b);if(!d||6==d.info.type)return!1;var e=d.info,f=gz(b);!f||f.o||Cp(f,e)||c.abort();c.ww(e.g.info.containerType,e.g.info.mimeType);if(e=a.g.Wa&&a.u.o&&0==d.info.l&&(g.$p(d.info.g.info)||a.g.ax)){if(null==c.fj()){e=gz(b);if(!(f=!e||e.g!=d.info.g)){b:if(e=e.K,f=d.info.K,e.length!=f.length)e=!1;else{for(var h=0;h<e.length;h++)if(!g.wb(e[h],f[h])){e=!1;break b}e=!0}f=!e}e=f}else e=c.fj(),f=d.info.g.g,e=e!==f&&!g.wb(e,f);e=!e}e&&(g.$p(d.info.g.info)?
(Wo(Xp(d),1836019574),Wo(Xp(d),1718909296)):(e=new ap(Xp(d)),up(e),ep(e,524531317,!0),d.g=d.g.split(e.l+e.g).bk),d.l=!1);a.g.Ue&&d.l&&(d.l=!1);e=a.F&&!!a.F.B&&b.g.info.audio;f=a.u.i||d.l;if(!(a.u.o&&0!=d.info.l||f&&!e)&&PA(a,c,d))return!0;if(e)return!1;e=a.B+FA(a,b,!1);if(!(e=d.info.C>e)){a:if(a.g.ua&&(!d.info.l||d.info.o)&&a.Uc("sba",c.Ta({as:Hp(d.info)})),e=d.l?d.info.g.g:null,f=Sp(d.g),d.l&&(f=new Uint8Array(f.buffer,0,f.byteOffset+f.length)),e=SA(a,c,f,d.info,e),"s"==e){a.Da=0;var l=!0}else{a.g.mo||
(c.abort(),wz(b));if("i"==e||"x"==e)TA(a,"checked",e,d.info);else{if("q"==e&&(d.info.isVideo()?(e=a.g,e.B=Math.floor(.8*e.B),e.P=Math.floor(.8*e.P),e.o=Math.floor(.8*e.o)):(e=a.g,e.F=Math.floor(.8*e.F),e.Aa=Math.floor(.8*e.Aa),e.o=Math.floor(.8*e.o)),c.supports(2)&&!c.ie()&&!a.l.isView())){e=!1;f=c.Dd();try{for(h=0;!e&&h<f.length;h++)f.start(h)>d.info.u&&(c.remove(f.start(h),f.end(f.length-1)),e=!0);var m=Math.max(0,Math.min(a.B,d.info.startTime)-5);!e&&m&&c.remove(0,m);l=!1;break a}catch(n){}}a.O("reattachrequired")}l=
!1}e=!l}if(e)return!1;b.l.i.shift();lz(b,d);return!0};
TA=function(a,b,c,d){var e="fmt.unplayable",f=!0;"x"==c||"m"==c?(e="fmt.unparseable",d.g.B=e,d.g.info.video&&!$z(a.C)&&Zz(a.C,d.g)):"i"==c&&(15>a.Da?(a.Da++,e="html5.invalidstate",f=!1):e="fmt.unplayable");d=Gp(d);d.mrs=a.l.l.readyState;d.origin=b;d.reason=c;DA(a,f,e,d)};
UA=function(a,b,c){if(c){var d=a.W;if(d.u.La){var e=d.g&&d.i&&d.g.Oa==d.i.Oa-1;e=d.g&&e&&"stop"!=d.g.Cd.event&&"predictStart"!=d.g.Cd.event;d.i&&d.i.Oa<b.Oa&&(e?Tz(d,d.i):d.o=!0);d.i=b}}d=a.u;e=!1;for(var f in d.g){var h=fr(d.g[f].info.mimeType)||d.g[f].info.isVideo();c==h&&(h=d.g[f].index,or(h,b.Oa)||(h.FA(b),e=!0))}Fga(a.J,b,c,e)};
PA=function(a,b,c){c.info.g.rd();var d=c.info.g.g;if(null==d||b.fj()==d)return!1;var e=d,f=b.mp();if(a.g.Ue&&f&&b.isView()&&g.$p(c.info.g.info)){var h=new DataView(d.buffer,d.byteOffset,d.byteLength);(f=lda(h,f))?e=new Uint8Array(f.buffer,f.byteOffset,f.byteLength):a.Uc("fenc","1")}f=null;h=c.info.g.gj(0);h.length&&(f=h[0].g[0]);d=SA(a,b,e,f,d);return"s"!=d?(TA(a,"sepInit",d,c.info),!0):b.ie()};
SA=function(a,b,c,d,e){try{b.appendBuffer(c,d,e)}catch(f){if(11==f.code)return"i";if(12==f.code)return"x";if(22!=f.code&&0!=f.message.indexOf("Not enough storage"))return g.L(f),"u";c=is(b.Dd()).replace(/,/g,"_");d=g.vg(f.message);a.Uc("quex","br."+c+";t."+(a.l?b==a.l.i?"v":"a":"u")+";e."+d);return"q"}return As(a.l)?"m":"s"};
vA=function(a,b){b.l.subscribe("needkeyinfo",a.OJ,a);b.l.subscribe("error",a.qL,a);b.l.subscribe("avsyncissue",a.pL,a);var c=(0,g.x)(a.tL,a,b);b.l.subscribe("placeholderinfo",c,void 0);c=(0,g.x)(a.uL,a,b);b.l.subscribe("placeholderrollback",c,void 0);c=(0,g.x)(a.vL,a,b);b.l.subscribe("segmentinfo",c,void 0);c=a.rL.bind(a);b.l.subscribe("gaplessinfo",c,void 0);c=a.sL.bind(a);b.l.subscribe("localmediachange",c,void 0)};
aha=function(a,b){b.subscribe("seekplayerrequired",function(c,d){a.P||a.O("seekplayerrequired",c,d)});
b.subscribe("ctmp",function(c,d){a.Uc(c,d,!1)});
b.subscribe("error",function(c,d,e){DA(a,c,d,e)});
b.subscribe("setcurrenttime",function(c){a.B=c})};
OA=function(a,b,c){var d=0+c.duration;c=-c.g;0==b.lp()&&d==b.mt()||b.Hv(0,d);c!=b.Fb()&&(b.lr(c),Zy&&dz(a.o.l,b.At()))};
FA=function(a,b,c){if(a.X)return 1;var d=b.g.info.audio?a.g.F:a.g.B;!a.g.ea&&aA(a.C)&&(d=Math.max(d,b.g.info.audio?a.g.Aa:a.g.P));c&&(d+=a.g.va);var e=aA(a.C)?b.i?b.i.g.info.g:b.g.info.g:b.N;d/=e;0<a.g.Ca&&a.l&&xs(a.l)&&(b=b.g.info.video?a.l.i:a.l.g)&&!b.ie()&&(b=b.Dd(),e=js(b,a.B),0<=e&&(b=a.B-b.start(e),d+=Math.max(0,Math.min(b-a.g.Ca,a.g.Mz))));0<a.g.o&&(d=Math.min(d,a.g.o));a.g.Xd&&c&&!aA(a.C)&&(c=a.C,c=Yz(c,g.$a(c.g))+Yz(c,c.F.i[0]),c=a.g.Xd*(c/Jz(a.N)),c<d&&15>c&&a.Uc("bwcapped","1",!0),c=Math.max(c,
15),d=Math.min(d,c));return d};
cha=function(a){if(!a.ab)return Infinity;var b=(0,g.hf)(pA(a.ab),function(d){return"ad"==d.namespace});
b=g.p(b);for(var c=b.next();!c.done;c=b.next())if(c=c.value,c.start/1E3>a.B)return c.start/1E3;return Infinity};
kha=function(a,b){var c=nz(a.i).find(function(d){return d.startTime>=b&&wA(a,d.startTime,!1)});
return c&&c.startTime<b+1.5*c.duration?c.startTime+.1:0};
wA=function(a,b,c){if(!(a.i.g.rd()&&a.o.g.rd()&&a.l&&a.l.i&&a.l.g))return!1;if(c&&a.u.i&&(-1==a.i.B||-1==a.o.B))return!0;var d=pz(a.i,b,c);if(isNaN(d))return!1;a=pz(a.o,a.g.da?b:d,c);return isNaN(a)?!1:!0};
VA=function(a,b,c,d){c.rd()||c.u||!Mq(c.i)||(d=c.gj(d?Cga(a.N,c.info):0),(0,g.y)(d,function(e){if("f"!=e.g[0].g.info.ob){var f=IA(this,e);Pq(e)&&(b.o.push(f),b.i=g.$a(f.info.g))}},a),c.u=!0)};
DA=function(a,b,c,d){a.ba()||(d=new g.ps(c,b,d),g.Sa(a),qs(d.details),a.O("error",d),"html5.invalidstate"!=c&&"fmt.unplayable"!=d.errorCode&&"fmt.unparseable"!=c&&b&&a.dispose())};
BA=function(a){wz(a.o);wz(a.i)};
WA=function(a){a.o.l.o=null;a.i.l.o=null;a.g.l="";a.g.C=!1};
lha=function(a,b){var c=b.info.video?a.i:a.o;null!=c&&VA(a,c,b,!1)};
XA=function(a){this.g=a};
YA=function(a,b){this.videoData=a;this.wa=b};
mha=function(a,b,c){return b.Ao(c).then(function(){return(a.aa("disable_index_range_auth")||!b.Ep||!b.wa.g()||b.ug()||b.isOtf()?0:/(&|,|^)init=0-0(&|,|$)/.test(b.adaptiveFormats))?g.Ym(new g.ps("auth",!0,{init:"1"})):g.Zm(new YA(b,b.wa))},function(d){d instanceof Error&&g.Ej(d);
d=b.ra&&!g.Ks(a.o,!0)?"html5.unsupportedlive":"fmt.noneavailable";var e={buildRej:"1",a:""+ +!!b.adaptiveFormats,d:""+ +!!b.Fe,drm:""+ +Ww(b),f18:""+ +(0<=b.Tn.indexOf("itag=18")),c18:""+ +Zr('video/mp4; codecs="avc1.42001E, mp4a.40.2"')};b.fa&&(Ww(b)?(e.f142=""+ +!!b.fa.g["142"],e.f149=""+ +!!b.fa.g["149"],e.f279=""+ +!!b.fa.g["279"]):(e.f133=""+ +!!b.fa.g["133"],e.f140=""+ +!!b.fa.g["140"],e.f242=""+ +!!b.fa.g["242"]),e.cAVC=""+ +as('video/mp4; codecs="avc1.42001E"'),e.cAAC=""+ +as('audio/mp4; codecs="mp4a.40.2"'),
e.cVP9=""+ +as('video/webm; codecs="vp9"'));if(b.fc){e.drmsys=b.fc.g;var f=0;b.fc.i&&(f=Object.keys(b.fc.i).length);e.drmst=""+f}return new g.ps(d,!0,e)})};
ZA=function(a){this.data=window.Float32Array?new Float32Array(a):Array(a);this.i=this.g=a-1};
$A=function(a){return a.data[a.g]||0};
nha=function(a){this.o=new ZA(50);this.g=null;this.l=this.i=0;this.u=a};
bB=function(a,b,c){g.N.call(this);var d=new oha;"ULTRALOW"==a.latencyClass&&(d.o=!1);a.rg?d.i=3:g.ex(a)&&(d.i=2);g.P(b,"html5_adaptive_seek_to_head_killswitch")||"NORMAL"!=a.latencyClass||(d.B=!0);var e=Sw(a);d.u=2==e||-1==e;d.u&&(d.K++,21530001==Qw(a)&&(d.C=g.O(b,"html5_jumbo_ull_nonstreaming_mffa_ms")||NaN));if(Nl("trident/")||Nl("edge/"))e=g.O(b,"html5_platform_minimum_readahead_seconds")||3,d.l=Math.max(d.l,e);g.O(b,"html5_minimum_readahead_seconds")&&(d.l=g.O(b,"html5_minimum_readahead_seconds"));
g.O(b,"html5_maximum_readahead_seconds")&&(d.F=g.O(b,"html5_maximum_readahead_seconds"));g.P(b,"html5_force_adaptive_readahead")&&(d.o=!0);g.O(b,"html5_allowable_liveness_drift_chunks")&&(d.g=g.O(b,"html5_allowable_liveness_drift_chunks"));g.O(b,"html5_readahead_ratelimit")&&(d.J=g.O(b,"html5_readahead_ratelimit"));switch(Qw(a)){case 21530001:d.g=(d.g+1)/5,"LOW"==a.latencyClass&&(d.g*=2),d.N=g.P(b,"html5_live_smoothly_extend_max_seekable_time")}this.g=d;this.o=a;this.N=b;this.K=c;this.l=[];this.B=
0;this.u=!0;this.C=1!=this.g.i;this.F=!1;this.J=0;b=isNaN(a.liveChunkReadahead)?3:a.liveChunkReadahead;a.rg&&b--;a.isLowLatencyLiveStream&&"NORMAL"!=a.latencyClass||b++;switch(Qw(a)){case 21530001:b=1;break;case 2153E4:b=2}this.g.u&&b++;this.i=aB(this,b)};
dB=function(a,b){var c=a.i;(void 0===b?0:b)&&a.g.N&&3==Sw(a.o)&&--c;return cB(a)*c};
fB=function(a,b){var c=eB(a);var d=a.g.g;a.F||(d=Math.max(d-1,0));d*=cB(a);return b>=c-d};
eB=function(a){return Math.max(a.K()-dB(a,!0),a.o.Ib())};
gB=function(a,b,c){b=fB(a,b);c||b?b&&(a.u=!0):a.u=!1;a.C=2==a.g.i||3==a.g.i&&a.u};
hB=function(a,b){var c=fB(a,b);a.F!=c&&a.O("livestatusshift",c);a.F=c};
cB=function(a){return a.o.fa?Wr(a.o.fa)||5:5};
aB=function(a,b){if(g.P(a.N,"web_player_halftime_dai"))return 1;b=Math.max(Math.max(a.g.K,Math.ceil(a.g.l/cB(a))),b);return Math.min(Math.min(8,Math.floor(a.g.F/cB(a))),b)};
oha=function(){this.K=1;this.l=0;this.F=Infinity;this.J=0;this.o=!0;this.g=2;this.i=1;this.u=!1;this.C=NaN;this.N=this.B=!1};
iB=function(){var a=Vj();return!(!a||"visible"===a)};
kB=function(a){var b=jB();b&&document.addEventListener(b,a,!1)};
lB=function(a){var b=jB();b&&document.removeEventListener(b,a,!1)};
jB=function(){if(document.visibilityState)var a="visibilitychange";else{if(!document[Uj+"VisibilityState"])return"";a=Uj+"visibilitychange"}return a};
mB=function(){g.N.call(this);this.l=0;this.o=this.u=this.i=this.g=this.B=!1;this.C=(0,g.x)(this.Gj,this);kB(this.C);this.F=this.getVisibilityState(this.i,this.isFullscreen(),this.g,this.isInline(),this.u,this.o)};
pha=function(a,b){a.i!=b&&(a.i=b,a.Gj())};
g.nB=function(a){return(a=qha[a.toString()])?a:"LICENSE"};
g.oB=function(a,b){this.stateData=void 0===b?null:b;this.state=a||64};
pB=function(a,b,c){return b===a.state&&c===a.stateData||void 0!==b&&(b&128&&!c||b&2&&b&16)?a:new g.oB(b,c)};
qB=function(a,b){return pB(a,a.state|b)};
rB=function(a,b){return pB(a,a.state&~b)};
sB=function(a,b,c){return pB(a,(a.state|b)&~c)};
g.S=function(a,b){return!!(a.state&b)};
g.tB=function(a,b){return b.state===a.state&&b.stateData===a.stateData};
g.uB=function(a){return g.S(a,8)&&!g.S(a,2)&&!g.S(a,1024)};
tA=function(a){return a.sb()&&!g.S(a,16)&&!g.S(a,32)};
rha=function(a){return g.S(a,8)&&g.S(a,16)};
g.vB=function(a){return g.S(a,1)&&!g.S(a,2)};
wB=function(a){return g.S(a,128)?-1:g.S(a,2)?0:g.S(a,64)?-1:g.S(a,1)&&!g.S(a,32)?3:g.S(a,8)?1:g.S(a,4)?2:-1};
g.xB=function(a,b){this.state=a;this.zi=b};
g.yB=function(a,b){return g.S(a.state,b)&&!g.S(a.zi,b)?1:!g.S(a.state,b)&&g.S(a.zi,b)?-1:0};
g.zB=function(a,b){return 0<g.yB(a,b)};
CB=function(a,b,c,d){g.A.call(this);this.u=a;this.B=b;this.N=c;this.W=d;this.l=new g.oB;this.i=this.o=null;this.J=this.K=this.g=0;this.F=new g.G(this.X,1E3,this);g.C(this,this.F);this.ma=new AB({delayMs:g.O(this.u.experiments,"html5_seek_timeout_delay_ms")});this.V=new AB({delayMs:g.O(this.u.experiments,"html5_long_rebuffer_threshold_ms")});this.la=BB(this,"html5_seek_set_cmt");this.da=BB(this,"html5_seek_jiggle_cmt");this.ea=BB(this,"html5_seek_new_elem");this.P=BB(this,"html5_decoder_freeze_timeout");
this.na=BB(this,"html5_unreported_seek_reseek");this.ca=BB(this,"html5_reload_element_long_rebuffer");this.R=BB(this,"html5_ads_preroll_lock_timeout");this.C={}};
BB=function(a,b){var c=g.O(a.u.experiments,b+"_delay_ms"),d=g.P(a.u.experiments,b+"_cfl");return new AB({delayMs:c,dy:d})};
DB=function(a,b){(a.o=b)&&a.F.fb()};
FB=function(a,b,c,d,e,f,h){sha(b,c)?(d=EB(a,b),d.wn=h,d.wdup=a.C[e]?"1":"0",a.B("qoeerror",e,d),a.C[e]=!0,b.F||f()):(b.u&&b.i&&!b.B?(f=(0,g.M)(),d?b.g||(b.g=f):b.g=0,c=!d&&f-b.i>b.u,f=b.g&&f-b.g>b.J||c?b.B=!0:!1):f=!1,f&&(f=EB(a,b),f.wn=h,f.we=e,f.wsuc=""+ +d,h=qs(f),a.B("ctmp","workaroundReport",h),d&&(b.reset(),a.C[e]=!1)))};
EB=function(a,b){var c=b.Ta();a.g&&(c.stt=a.g.toFixed(3));a.i&&Object.assign(c,a.i.Ta());a.o&&Object.assign(c,a.o.Ta());return c};
AB=function(a){a=void 0===a?{}:a;var b=void 0===a.UN?1E3:a.UN,c=void 0===a.VN?3E4:a.VN,d=void 0===a.dy?!1:a.dy;this.C=Math.ceil((void 0===a.delayMs?0:a.delayMs)/1E3);this.J=b;this.u=c;this.F=d;this.reset()};
sha=function(a,b){if(!a.C||a.i)return!1;if(!b)return a.reset(),!1;var c=(0,g.M)();if(!a.l)a.l=c,a.o=0;else if(a.o>=a.C)return a.i=c,!0;a.o+=1;return!1};
KB=function(a,b,c,d){g.N.call(this);var e=this;this.V=b;this.g=a;this.W=new tha(b);this.Ga=c;this.Da=d;this.K=new CB(this.V,function(f){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];return e.O.apply(e,g.ma(h))},this.Ga,this.Da);
a={};this.ca=(a.seekplayerrequired=this.eO,a.videoformatchange=this.jJ,a);GB(this,"html5_unrewrite_timestamps")?this.ca.timestamp=this.lO:this.ca.timestamp=this.kO;this.va=null;this.na=new g.ln;g.C(this,this.na);this.N=this.l=this.B=this.i=null;this.o=NaN;this.F=0;this.C=null;this.da=NaN;this.J=this.R=null;this.la=this.P=!1;this.X=new g.G(function(){return HB(e,!1)},this.W.g);
g.C(this,this.X);this.ma=new g.G(function(){e.P=!0;IB(e)});
g.C(this,this.ma);this.Ka=new g.G(function(){return JB(e)});
g.C(this,this.Ka);this.ua=this.u=0;this.ea=!0;this.za=0;this.Ca=NaN};
uha=function(a,b){a.va=b;a.g.ra&&(a.N=new nha(function(){a:{if(a.va&&a.va.wa.g()){if(Pw(a.g)&&a.B){var c=a.B.ua.g()||0;break a}if(a.g.fa){c=a.g.fa.K;break a}}c=0}return c}),a.l=new bB(a.g,a.V.experiments,function(){return a.Bc(!0)}));
a.g.startSeconds&&isFinite(a.g.startSeconds)&&1E9<a.g.startSeconds||(a.F=a.F||a.g.startSeconds||0)};
MB=function(a,b){g.nn(a.na);(a.i=b)?(vha(a),JB(a)):LB(a);DB(a.K,b)};
OB=function(a,b){a.B&&pn(a.B,a.ca,a);(a.B=b)?(on(b,a.ca,a),NB(a,!0)):LB(a);a.K.i=b};
PB=function(a){return a.getCurrentTime()-a.Fb()};
g.QB=function(a){return!!a.l&&a.l.C};
HB=function(a,b){if(a.l){var c=a.l;var d=a.getCurrentTime();!fB(c,d)&&c.C?(c.g.B&&(c.g.g=Math.max(c.g.g+1,10)),c=Infinity):c=d<c.o.Ib()?Math.min(c.o.Ib()+10,eB(c)):NaN;if(!isNaN(c)){if(GB(a,"html5_in_buffer_ptl")&&a.B&&b){d=a.X.isActive();var e=eB(a.l);if((e=kha(a.B,e-a.Fb()))&&!d){a.W.g&&a.X.start();a.O("ctmp","inBufferPtl","cmt."+a.getCurrentTime()+";seekTo"+(e+a.Fb()));a.seekTo(e+a.Fb());return}}GB(a,"html5_peg_to_live_logging")&&a.O("ctmp","ptl","cmt."+a.getCurrentTime()+";seekTo"+(c+a.Fb()));
a.seekTo(c)}}};
NB=function(a,b){if(a.l&&a.B){var c=!1;if(b)c=!0;else if(a.g.isLowLatencyLiveStream||"LOW"==a.g.latencyClass||"ULTRALOW"==a.g.latencyClass)if(c=a.l,c.l.length){var d=c.i;b:{if(c.l.length){if(1<Math.min.apply(null,c.l)){var e=aB(c,c.i-1);break b}if(c.g.o){e=aB(c,c.i+1);break b}}e=c.i}c.i=e;if(d=d!=c.i)c.l=[],c.B=0;c=d}else c=!1;c&&a.O("livereadaheadchanged",dB(a.l));c=a.B;d=a.l.i;e=a.l;e=(e.i-1+e.g.g)*cB(e);var f=a.l.g.C;c.Ca=Math.max(d-1,0);c.F&&(c.F.P=e);c.kb=f}};
RB=function(a){return a.g.ra&&!!a.g.wa&&!a.g.wa.g()};
IB=function(a){wha(a).then(void 0,function(){LB(a)});
SB(a).then(function(b){a.J&&(a.J.resolve(b),a.O("seekend"));LB(a)},function(){LB(a)});
a.O("seekstart")};
wha=function(a){if(!a.R)if(a.B)if(isFinite(a.o))a.R=a.B.seek(a.o-a.u);else{var b=a.B;BA(b);b.F&&eA(b.F,b.i.g);b.ca.fb();b=b.J;var c=Math.max(b.i.l.B||0,b.g.l.B||0);sz(b.i);sz(b.g);var d=b.u,e;for(e in d.g)wo(d.g[e].index,Infinity);b.u.i&&(b.C=!0);b.O("setcurrenttime",c);b.l=!0;b.F=new Rx;a.R=b.F;a.o=a.B.getCurrentTime()+a.u}else a.R=g.If(a.o-a.u);return a.R};
SB=function(a){var b=a.C;b||(a.C=new Rx,b=a.C,JB(a));return b};
TB=function(a,b,c){return isNaN(b)?NaN:g.Be(b,a.Ib(),a.Bc(c))};
JB=function(a){if(a.C)if(!GB(a,"html5_nondash_live_seek_killswitch")&&RB(a)&&a.i&&0<a.i.Le()&&0<Dx(a.i)&&(a.o=TB(a,a.o,!1)),!a.i||!UB(a))a.Ka.start(750);else if(!isNaN(a.o)&&isFinite(a.o)&&a.da!=a.o-a.u){var b=a.i.getCurrentTime()-a.o;if(Math.abs(b)<=a.za)a.C&&a.C.resolve(a.i.getCurrentTime());else if(!a.g.ra&&a.o>=a.Bc()-.1)a.o=a.Bc(),a.C.resolve(a.Bc()),a.O("ended");else try{var c=a.o-a.u;a.i.seekTo(c);a.K.g=c;a.da=c;a.F=a.o}catch(d){}}};
UB=function(a){if(!a.i||0==a.i.Le()||0<a.i.Mf())return!1;var b=0<a.i.getCurrentTime();if(!(GB(a,"html5_nondash_mediaelementready_killswitch")||a.g.wa&&a.g.wa.g()||a.g.ra)&&Ww(a.g))return b;if(0<=a.o){var c=a.i.rm();if(c.length||!b)return ks(c,a.o-a.u)}return b};
LB=function(a){a.o=NaN;a.da=NaN;a.C=null;a.R=null;a.J=null;a.P=!1;a.la=!1;a.za=0;a.X.stop();a.ma.stop()};
vha=function(a){if(a.i){for(var b=g.p(["loadedmetadata","progress","seeked","seeking"]),c=b.next();!c.done;c=b.next())a.na.I(a.i,c.value,function(d){switch(d.type){case "seeking":d=a.i.getCurrentTime()+a.u;if(!a.C||a.la&&d!=a.o){a.C=new Rx;a.da=d;var e=a.i.getCurrentTime();a.K.g=e;a.seekTo(d);a.la=!0}break;case "seeked":a.C&&a.C.resolve(a.i.getCurrentTime());break;case "loadedmetadata":if(a.ea){d="ss.";e=0;if((fx(a.g)||a.g.liveUtcStartSeconds)&&(a.g.liveUtcStartSeconds||a.g.startSeconds&&isFinite(a.g.startSeconds)&&
1E9<a.g.startSeconds)&&a.g.fa){e=a.g.liveUtcStartSeconds||a.g.ii;d="utc.";var f=a.Bc();var h=a.Bc();h=Xr(a.g.fa,h-a.u);e=f-h+e}else a.g.fa&&a.g.fa.i&&a.g.ii?(d="mss.",e=a.g.ii+a.Fb()):GB(a,"html5_unrewrite_timestamps")&&a.g.sr&&(d="stss.",e=a.g.sr);e?(a.seekTo(e),a.O("ctmp","startSeconds",d+e),a.ea=!1):a.g.ii&&a.O("ctmp","startSeconds",d+(a.g.ii+a.Fb()));d=!!e}else d=!1;GB(a,"html5_nondash_live_seek_killswitch")&&!d&&RB(a)&&(a.o=isFinite(a.o)?g.Be(a.o,a.Ib(),a.Bc()):a.Bc());case "progress":JB(a)}});
a.J||a.F||a.W.l||!a.i.er()||a.seekTo(.01)}};
xha=function(a){if(!a.i)return 0;if(fx(a.g)){var b=Hx(a.i)+a.u-a.Ib();a=a.Bc()-a.Ib();return Math.max(0,Math.min(1,b/a))}return Ix(a.i)};
GB=function(a,b){return a.V&&g.P(a.V.experiments,b)};
tha=function(a){this.g=g.O(a.experiments,"html5_in_buffer_ptl_timeout_ms");this.i=g.P(a.experiments,"html5_live_smoothly_extend_max_seekable_time");this.o=a.aa("html5_seek_over_discontinuities");this.l=a.aa("html5_requires_seek_for_playback_at_zero_killswitch")};
VB=function(){this.g=this.started=!1};
WB=function(){this.keys=[];this.values=[]};
yha=function(){XB=(0,g.M)()};
YB=function(a){a=void 0===a?{}:a;var b=Rm;a=void 0===a?{}:a;return b.g?b.g.invoke(void 0,void 0,a):null};
zha=function(a){a=void 0===a?{}:a;return Tca(a)};
Aha=function(a,b){var c=this;this.videoData=a;this.l=b;var d={};this.i=(d.c1a=function(){if(ZB(c)){var e="";c.videoData&&c.videoData.sf&&(e=c.videoData.sf+("&r1b="+c.videoData.clientPlaybackNonce));var f={};e=(f.atr_challenge=e,f);e=(e=c.l?YB(e):g.Ka("yt.abuse.player.invokeBotguard")(e))?"r1a="+e:"r1c=2"}else e="r1c=1";return e},d.c3a=function(e){return"r3a="+Math.floor(c.videoData.lengthSeconds%Number(e.c3a)).toString()},d.c6a=function(e){e=Number(e.c);
var f=c.l?parseInt(g.K("DCLKSTAT",0),10):(f=g.Ka("yt.abuse.dclkstatus.checkDclkStatus"))?f():NaN;return"r6a="+(e^f)},d);
this.videoData&&this.videoData.sf?this.g=g.Xk(this.videoData.sf):this.g={}};
Bha=function(a){if(a.videoData&&a.videoData.sf){for(var b=[a.videoData.sf],c=g.p(Object.keys(a.i)),d=c.next();!d.done;d=c.next())d=d.value,a.g[d]&&a.i[d]&&(d=a.i[d](a.g))&&b.push(d);return b.join("&")}return null};
Dha=function(a){var b={};Object.assign(b,a.i);"c1b"in a.g&&(b.c1a=function(){return Cha(a)});
if(a.videoData&&a.videoData.sf){for(var c=[a.videoData.sf],d=g.p(Object.keys(b)),e=d.next();!e.done;e=d.next())e=e.value,a.g[e]&&b[e]&&(e=b[e](a.g))&&c.push(e);return new Promise(function(f){Promise.all(c).then(function(h){f(h.filter(function(l){return!!l}).join("&"))})})}return Promise.resolve(null)};
ZB=function(a){return a.l?Rm.Dc():(a=g.Ka("yt.abuse.player.botguardInitialized"))&&a()};
Cha=function(a){if(!ZB(a))return Promise.resolve("r1c=1");var b="";a.videoData&&a.videoData.sf&&(b=a.videoData.sf+("&r1b="+a.videoData.clientPlaybackNonce));var c={},d=(c.atr_challenge=b,c),e=a.l?zha:g.Ka("yt.abuse.player.invokeBotguardAsync");return new Promise(function(f){e(d).then(function(h){h?f("r1a="+h):f("r1c=2")},function(){f("r1c=3")})})};
Eha=function(a,b,c){this.url=a;this.interval=b;this.g=c};
$B=function(){g.N.apply(this,arguments)};
aC=function(a,b,c,d){$B.call(this);var e=this;this.l=-1;this.g={};this.o=new g.G(this.u,0,this);g.C(this,this.o);this.i=new g.G(function(){e.ba()||(e.o.start(Math.random()*c),e.i.start(b))},a,this);
g.C(this,this.i);d.subscribe("fairplay_next_need_key_info",this.B,this)};
bC=function(a){a=a.subarray(4);a=new Uint16Array(a.buffer,a.byteOffset,a.byteLength/2);return String.fromCharCode.apply(null,a)};
Fha=function(a,b,c){a=a.match(g.rd);for(var d=[],e=g.p(a[6].split("&")),f=e.next();!f.done;f=e.next())f=f.value,0===f.indexOf("cpi=")?d.push("cpi="+b.toString()):0===f.indexOf("ek=")?d.push("ek="+gd(c)):d.push(f);a[6]="?"+d.join("&");b="skd://"+a.slice(2).join("");a=2*b.length;c=new Uint8Array(a+4);c[0]=a%256;c[1]=(a-c[0])/256;for(a=0;a<b.length;++a)c[2*a+4]=b.charCodeAt(a);return c};
cC=function(a,b){this.statusCode=a;this.message=b;this.g=this.heartbeatParams=this.errorMessage=null;this.i={};this.nextFairplayKeyId=null};
dC=function(a){var b=$o(a.subarray(0,16384)),c=b.indexOf("\r\n\r\n");if(-1===c)return null;var d=b.indexOf("\r\n"),e=b.slice(0,d).match(/^GLS\/1.\d ([0-9]{1,3}) (\w+)$/);if(null==e)return null;e=e[1];isFinite(e)&&(e=String(e));e="string"===typeof e?/^\s*-?0x/i.test(e)?parseInt(e,16):parseInt(e,10):NaN;b=Ko(b.slice(d+2));if(null==b)return null;a=new cC(e,a.subarray(c+4));0!==a.statusCode&&(a.errorMessage=g.nB(a.statusCode));if(c=b["Heartbeat-Url"])a.heartbeatParams=new Eha(c,Number(b["Heartbeat-Interval-Secs"])||
60,Number(b["Heartbeat-Num-Retries"])||4);if(c=b["Authorized-Format-Types"])a.g=c.split(",");if(c=b["Key-Ids"])a.i=Gha(c);a.nextFairplayKeyId=b["Next-Key-Id"];return a};
Gha=function(a){if(!a)return{};a=a.split(";");var b={};(0,g.y)(a,function(c){c=c.split(",");2===c.length&&(b[c[1]]=c[0])});
return b};
eC=function(a,b){g.A.call(this);this.message=a;this.requestNumber=b;this.onError=this.onSuccess=null;this.g=new g.Ci(5E3,2E4,.2)};
Hha=function(a,b,c){a.onSuccess=b;a.onError=c};
Iha=function(a,b,c){var d={format:"RAW",method:"POST",postBody:a.message,responseType:"arraybuffer",withCredentials:!0,timeout:3E4,onSuccess:function(e){if(!a.ba())if(0!==e.status&&e.response)if(g.rv("drm_net_r"),e=new Uint8Array(e.response),e=dC(e))a.onSuccess(e);else a.onError(a,"drm.net","t.p");else fC(a,e)},
onError:function(e){fC(a,e)}};
c&&(b=Jd(b,"access_token",c));g.rl(b,d)};
fC=function(a,b){if(!a.ba()){var c;b.status?c=gC(b.status):c="drm.net.connect";a.onError(a,c,"t.r;c."+String(b.status))}};
Kha=function(a,b,c,d){var e={onSuccess:function(f){if(!a.ba()){g.rv("drm_net_r");var h="LICENSE_STATUS_OK"===f.status?0:9999,l=null;if(f.license)try{l=g.hg(f.license)}catch(B){}if(0!==h||l){l=new cC(h,l);0!==h&&f.reason&&(l.errorMessage=f.reason);if(f.authorizedFormats){h={};for(var m=[],n={},q=g.p(f.authorizedFormats),r=q.next();!r.done;r=q.next())if(r=r.value,r.trackType&&r.keyId){var u=Jha[r.trackType];if(u){"HD"===u&&f.isHd720&&(u="HD720");h[u]||(m.push(u),h[u]=!0);var w=null;try{w=g.hg(r.keyId)}catch(B){}w&&
(n[g.ug(w,4)]=u)}}l.g=m;l.i=n}f.nextFairplayKeyId&&(l.nextFairplayKeyId=f.nextFairplayKeyId);f=l}else f=null;if(f)a.onSuccess(f);else a.onError(a,"drm.net","t.p;p.i")}},
onError:function(f){a.ba()||(f=f.error,a.onError(a,gC(f.code),"t.r;p.i;c."+f.code+";s."+f.status))}};
d&&(e.Cx="Bearer "+d);g.Nk(c,"player/get_drm_license",b,e)};
gC=function(a){return 400<=a&&500>a?"drm.net.retryexhausted":"drm.net.badstatus"};
iC=function(a,b,c,d){g.N.call(this);this.videoData=a;this.l=b;this.V=c;this.sessionId=d;this.u={};this.cryptoPeriodIndex=NaN;this.url="";this.requestNumber=0;this.C=this.J=!1;this.o=null;this.R=[];this.B=[];this.K=!1;this.g={};this.N=NaN;this.status="";this.i=a.fc;this.cryptoPeriodIndex=c.cryptoPeriodIndex;a={};Object.assign(a,this.l.deviceParams);a.cpn=this.videoData.clientPlaybackNonce;this.videoData.ue&&(a.vvt=this.videoData.ue,this.videoData.mdxEnvironment&&(a.mdx_environment=this.videoData.mdxEnvironment));
this.l.yc&&(a.authuser=this.l.yc);this.l.pageId&&(a.pageid=this.l.pageId);isNaN(this.cryptoPeriodIndex)||(a.cpi=this.cryptoPeriodIndex.toString());if(g.P(this.l.experiments,"html5_send_device_type_in_drm_license_request")){var e;(e=(e=/_(TV|STB|GAME|OTT|ATV|BDP)_/.exec(g.Oc))?e[1]:"")&&(a.cdt=e)}this.u=a;this.u.session_id=d;this.F=!0;"widevine"===this.i.flavor&&(this.u.hdr="1");"playready"===this.i.flavor&&(d=Number(g.iq(b.experiments,"playready_first_play_expiration")),!isNaN(d)&&0<=d&&(this.u.mfpe=
""+d),this.F=!1,g.P(b.experiments,"html5_playready_enable_non_persist_license")&&(this.u.pst="0"));d=pu(this.i)?bC(c.initData).replace("skd://","https://"):this.i.l;g.P(this.l.experiments,"enable_shadow_yttv_channels")&&(d=new g.bj(d),document.location.origin&&document.location.origin.includes("green")?g.dj(d,"web-green-qa.youtube.com"):g.dj(d,"www.youtube.com"),d=d.toString());this.baseUrl=d;this.fairplayKeyId=Hd(this.baseUrl,"ek")||"";this.P=g.P(b.experiments,"html5_use_drm_retry");this.R=c.i;hC(this,
"sessioninit."+c.cryptoPeriodIndex);this.status="in"};
Oha=function(a,b){hC(a,"createkeysession");a.status="gr";g.rv("drm_gk_s");a.url=Lha(a);try{a.o=b.createSession(a.V,function(d){hC(a,d)})}catch(d){var c="t.g";
d instanceof DOMException&&(c+=";c."+d.code);a.O("licenseerror","drm.unavailable",!0,c,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK");return}a.o&&(jC(a.o,function(d,e){Mha(a,d,e)},function(d){a.ba()||a.error("drm.keyerror",!0,d)},function(){a.ba()||(hC(a,"onkyadd"),a.C||(a.O("sessionready"),a.C=!0))},function(d){Nha(a,d)}),g.C(a,a.o))};
Lha=function(a){var b=a.baseUrl;yda(b)||a.error("drm.net",!0,"t.x");if(!Hd(b,"fexp")){var c=["23898307","23914062","23916106","23883098"].filter(function(e){return a.l.experiments.experiments[e]});
0<c.length&&(a.u.fexp=c.join())}c=g.p(Object.keys(a.u));for(var d=c.next();!d.done;d=c.next())d=d.value,b=Jd(b,d,a.u[d]);return b};
Pha=function(a){var b={};Object.assign(b,a.u);return b};
Mha=function(a,b,c){if(!a.ba())if(b){hC(a,"onkmtyp."+c);a.status="km";if(!g.P(a.l.experiments,"html5_provisioning_killswitch"))switch(c){case "license-request":case "license-renewal":case "license-release":break;case "individualization-request":Qha(a,b);return;default:a.O("ctmp","message_type","t."+c+";l."+b.byteLength)}a.J||(g.rv("drm_gk_f"),a.J=!0,a.O("newsession",a));if(mu(a.i)&&(b=kC(b),!b))return;pu(a.i)&&!a.videoData.useInnertubeDrmService()&&(b=Zo(g.ug(b)));b=new eC(b,++a.requestNumber);Hha(b,
function(d){Rha(a,d)},function(d,e,f){if(!a.ba()){var h=!1,l;
(l="drm.net.retryexhausted"===e||3<=d.g.i)||(l=a.P&&36E4<(0,g.M)()-a.N);l&&(h=!0,e="drm.net.retryexhausted");hC(a,"onlcsrqerr."+e+";"+f);a.error(e,h,f);a.shouldRetry(h,d)&&Sha(a,d)}});
g.C(a,b);lC(a,b)}else a.error("drm.unavailable",!1,"km.empty")};
Qha=function(a,b){hC(a,"sdpvrq");if("widevine"!==a.i.flavor)a.error("drm.provision",!0,"e.flavor;f."+a.i.flavor+";l."+b.byteLength);else{var c={cpn:a.videoData.clientPlaybackNonce};Object.assign(c,a.l.deviceParams);c=g.Dd("https://www.googleapis.com/certificateprovisioning/v1/devicecertificates/create?key=AIzaSyB-5OLKTx2iU5mko18DfdwK5611JIjbUhE",c);var d={format:"RAW",headers:{"content-type":"application/json"},method:"POST",postBody:JSON.stringify({signedRequest:$o(b)}),responseType:"arraybuffer"};
g.Wm(c,d,3,500).then(g.Dj(function(e){if(!a.ba()){e=new Uint8Array(e.response);var f=$o(e);try{var h=JSON.parse(f)}catch(l){}h&&h.signedResponse?(a.O("ctmp","drminfo","provisioning"),a.o&&a.o.update(e)):(h=h&&h.error&&h.error.message,e="e.parse",h&&(e+=";m."+h),a.error("drm.provision",!0,e))}}),g.Dj(function(e){a.ba()||a.error("drm.provision",!0,"e."+e.errorCode+";c."+(e.Cj&&e.Cj.status))}))}};
Nha=function(a,b){a.ba()||0>=b.size||(b.forEach(function(c,d){var e=mu(a.i)?d:c,f=new Uint8Array(mu(a.i)?c:d);mu(a.i)&&mC(f);var h=g.ug(f,4);mC(f);f=g.ug(f,4);a.g[h]?a.g[h].status=e:a.g[f]?a.g[f].status=e:a.g[h]={type:"",status:e}}),Tha("Key statuses changed: "+nC(a,",")),hC(a,"onkeystatuschange"),a.status="kc",a.O("keystatuseschange",a))};
oC=function(a){var b;if(b=a.F&&null!=a.o)a=a.o,b=!(!a.g||!a.g.keyStatuses);return b};
lC=function(a,b){a.status="km";g.rv("drm_net_s");if(a.videoData.useInnertubeDrmService()){var c=new g.Hm(a.l.V),d=g.Kk(c.me||g.Lk());d.drmSystem=Uha[a.i.flavor];d.videoId=a.videoData.videoId;d.cpn=a.videoData.clientPlaybackNonce;d.sessionId=a.sessionId;d.licenseRequest=g.ug(b.message);d.drmParams=a.videoData.drmParams;isNaN(a.cryptoPeriodIndex)||(d.isKeyRotated=!0,d.cryptoPeriodIndex=a.cryptoPeriodIndex);if(!d.context||!d.context.client){a.error("drm.net",!0,"t.r;ic.0");return}var e=a.l.deviceParams;
e&&(d.context.client.deviceMake=e.cbrand,d.context.client.deviceModel=e.cmodel,d.context.client.browserName=e.cbr,d.context.client.browserVersion=e.cbrver,d.context.client.osName=e.cos,d.context.client.osVersion=e.cosver);d.context.user=d.context.user||{};d.context.request=d.context.request||{};a.videoData.ue&&(d.context.user.credentialTransferTokens=[{token:a.videoData.ue,scope:"VIDEO"}]);d.context.request.mdxEnvironment=a.videoData.mdxEnvironment||d.context.request.mdxEnvironment;a.videoData.Jf&&
(d.context.user.kidsParent={oauthToken:a.videoData.Jf});if(pu(a.i)){e=a.fairplayKeyId;for(var f=[],h=0;h<e.length;h+=2)f.push(parseInt(e.substring(h,h+2),16));d.fairplayKeyId=g.ug(f)}Kha(b,d,c,a.videoData.Qd())}else Iha(b,a.url,a.videoData.oauthToken);a.status="rs"};
Rha=function(a,b){if(!a.ba())if(hC(a,"onlcsrsp"),a.status="rr",0!==b.statusCode)a.error("drm.auth",!0,"t.f;c."+b.statusCode,b.errorMessage||void 0);else{g.rv("drm_kr_s");if(g.P(a.l.experiments,"outertube_streaming_data_always_use_staging_license_service")&&b.heartbeatParams&&b.heartbeatParams.url){var c=a.i.l.match(/(.*)youtube.com/g);c&&(b.heartbeatParams.url=c[0]+b.heartbeatParams.url)}b.heartbeatParams&&a.O("newlicense",b.heartbeatParams);b.g&&(a.B=b.g,a.K=(0,g.Wj)(a.B,function(d){return d.includes("HDR")}));
b.i&&(a.g=Bb(b.i,function(d){return{type:d,status:"unknown"}}));
ou(a.i)&&!a.videoData.useInnertubeDrmService()&&(b.message=g.hg($o(b.message)));a.o&&(hC(a,"updtks"),a.status="ku",a.o.update(b.message).then(function(){g.rv("drm_kr_f");if(!oC(a))if(hC(a,"ksApiUnsup"),nu(a.i)){var d=pC(a.B);480<g.Vq[d]&&a.O("hdentitled",a)}else a.O("keystatuseschange",a)}));
a.C&&(a.N=(0,g.M)());pu(a.i)&&a.O("fairplay_next_need_key_info",a.baseUrl,b.nextFairplayKeyId)}};
Sha=function(a,b){var c=b.g.getValue();c=new g.G(function(){lC(a,b)},c);
g.C(a,c);c.start();g.Di(b.g);hC(a,"rtyrq")};
qC=function(a,b){if(!oC(a)&&nu(a.i)&&!b)return"large";var c=[],d=!0;if(oC(a))for(var e=g.p(Object.keys(a.g)),f=e.next();!f.done;f=e.next())f=f.value,"usable"===a.g[f].status&&c.push(a.g[f].type),"unknown"!==a.g[f].status&&(d=!1);if(!oC(a)||d)c=a.B;return pC(c)};
nC=function(a,b){for(var c=[],d=g.p(Object.keys(a.g)),e=d.next();!e.done;e=d.next())e=e.value,c.push.apply(c,[e,a.g[e].type,a.g[e].status]);return c.join(b)};
rC=function(a){var b=a.status+";";return oC(a)?b+nC(a,";"):b+a.B.join(";")};
sC=function(a,b,c){a:{switch(b){case "highres":case "hd2880":b="UHD2";break;case "hd2160":case "hd1440":b="UHD1";break;case "hd1080":case "hd720":b="HD";break;case "large":case "medium":case "small":case "light":case "tiny":b="SD";break;default:c="";break a}c&&(b+="HDR");c=b}for(var d in a.g)if("output-restricted"===a.g[d].status&&(b=a.g[d].type,""===c||"AUDIO"===b||c===b))return!0;return!1};
tC=function(a,b){for(var c in a.g)if("usable"===a.g[c].status&&a.g[c].type===b)return!0;return!1};
hC=function(a,b){rx(a.videoData)&&a.O("ctmp","drmlog",b)};
Tha=function(){};
mC=function(a){var b=a[0];a[0]=a[3];a[3]=b;b=a[1];a[1]=a[2];a[2]=b;b=a[4];a[4]=a[5];a[5]=b;b=a[6];a[6]=a[7];a[7]=b};
pC=function(a){return g.eb(a,"UHD2")?"highres":g.eb(a,"UHD1")?"hd2160":g.eb(a,"HD")?"hd1080":g.eb(a,"HD720")?"hd720":"large"};
kC=function(a){for(var b="",c=0;c<a.length;c+=2)b+=String.fromCharCode(a[c]);a=(new DOMParser).parseFromString(b,"text/xml");return a?(a=a.querySelector("Challenge"))&&a.childNodes&&0!==a.childNodes.length?new Uint8Array(dba(a.childNodes[0].nodeValue)):null:null};
uC=function(a,b,c,d,e){var f;"playready"===e?f=kC(a):"fairplay"===e&&(f=Zo(g.ug(a)));f&&(a={format:"RAW",method:"POST",postBody:f,responseType:"arraybuffer",withCredentials:!0,timeout:3E4},c=Faa(c,d),g.Wm(c,a,3,500).then(function(h){h=new Uint8Array(h.response);(h=dC(h))&&h.message&&b.update(h.message)}))};
vC=function(a,b,c,d,e){g.A.call(this);this.element=a;this.F=b;this.initData=c;this.g=d;this.i=e;this.sessionId="";this.C=this.B=this.l=this.u=null;this.o=new g.ln(this);g.C(this,this.o);Vha(this)};
Vha=function(a){a.g?(a.o.I(a.g,"message",a.JH),a.o.I(a.g,"keystatuseschange",a.KH),a.g.closed&&a.g.closed.then(g.Dj(function(){a.ba()||Nl("xboxone")&&a.l&&a.l("closed")}),null)):a.i&&(mn(a.o,a.i,["mskeymessage",
"webkitkeymessage"],a.OB),mn(a.o,a.i,["mskeyerror","webkitkeyerror"],a.NB),mn(a.o,a.i,["mskeyadded","webkitkeyadded"],a.MB))};
jC=function(a,b,c,d,e){a.u=b;a.l=c;a.B=d;a.C=e};
wC=function(a,b,c){g.L(c);a.l&&(c instanceof DOMException&&(b+=";n.$(exc.name);m.$(exc.message)"),a.l(b))};
xC=function(a,b){g.A.call(this);this.element=a;this.g=b;this.B={};this.l=null;this.o=new g.ln(this);this.i=this.u=null;g.C(this,this.o)};
yC=function(a){if(a.g.keySystemAccess)return a.g.keySystemAccess.createMediaKeys().then(function(b){a.ba()||(a.u=b,a.element.setMediaKeys(b))});
lu(a.g)?a.i=new (ku())(a.g.g):ou(a.g)?(a.i=new (ku())(a.g.g),a.element.webkitSetMediaKeys(a.i)):Wha(a);return null};
Wha=function(a){mn(a.o,a.element,["keymessage","webkitkeymessage"],a.NH);mn(a.o,a.element,["keyerror","webkitkeyerror"],a.MH);mn(a.o,a.element,["keyadded","webkitkeyadded"],a.LH)};
Xha=function(a){return"widevine"===a.g.flavor&&a.g.Un&&a.u.setServerCertificate?a.u.setServerCertificate(a.g.Un):null};
Yha=function(a,b){var c=zC(b,a.g.zf);c=a.i.createSession("video/mp4",c);return new vC(null,null,null,null,c)};
Zha=function(a,b){for(var c=new Uint8Array(270),d=0;135>d;d++)c[2*d]='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="true"></LicenseAcquisition></PlayReadyCDMData>'.charCodeAt(d);c=a.i.createSession("video/mp4",b,c);return new vC(null,null,null,null,c)};
AC=function(a,b){var c=a.B[b.sessionId];!c&&a.l&&(c=a.l,a.l=null,c.sessionId=b.sessionId,a.B[b.sessionId]=c);return c};
zC=function(a,b){var c=a.subarray(4);c=new Uint16Array(c.buffer,c.byteOffset,c.byteLength/2);c=String.fromCharCode.apply(null,c).match(/ek=([0-9a-f]+)/)[1];for(var d="",e=0;e<c.length;e+=2)d+=String.fromCharCode(parseInt(c.substr(e,2),16));c=d;d=new ArrayBuffer(2*c.length);e=new Uint16Array(d);for(var f=0;f<c.length;f++)e[f]=c.charCodeAt(f);c=new Uint8Array(d);d=0;f=new ArrayBuffer(a.byteLength+4+c.byteLength+4+b.byteLength);e=new Uint8Array(f);f=new DataView(f);e.set(a);d+=a.byteLength;f.setUint32(d,
c.length,!0);d+=4;e.set(c,d);d+=c.length;f.setUint32(d,b.byteLength,!0);e.set(b,d+4);return e};
BC=function(a,b){g.A.call(this);this.g=g.bf("video");this.i=null;this.o=[];this.u=new g.ln(this);this.l=new ju("fairplay","com.youtube.fairplay","",b);this.l.zf=a;g.C(this,this.u);this.init()};
CC=function(a,b,c){$B.call(this);var d=this;this.o=a;this.l=b;this.g=[];this.i=new g.G(function(){var e=d.g.shift().info;a:{var f=e.cryptoPeriodIndex;if(isNaN(f)&&0<d.l.values.length)f=!0;else{for(var h=g.p(d.l.values),l=h.next();!l.done;l=h.next())if(l.value.cryptoPeriodIndex===f){f=!0;break a}f=!1}}f||d.O("rotated_need_key_info_ready",e);0<d.g.length&&(e=d.g[0].time-(0,g.M)(),d.i.start(Math.max(0,e)))},0);
g.C(this,this.i);c.subscribe("widevine_set_need_key_info",this.u,this)};
FC=function(a,b,c){g.N.call(this);this.element=a;this.videoData=b;this.i=c;this.g=this.videoData.fc;this.drmSessionId=this.videoData.drmSessionId||g.zn();this.l=new WB;this.B=new WB;this.F=new WB;this.o=[];this.da=2;this.P=new g.ln(this);this.ea=this.X=!1;this.heartbeatParams=null;this.R=this.W=this.V=this.J=!1;this.u=null;(a=this.element)&&(a.addKey||a.webkitAddKey)||ku()||qu(c.experiments);c=g.P(this.i.experiments,"html5_drm_initial_constraint_from_config")?this.videoData.dm:g.P(this.i.experiments,
"html5_drm_start_from_null_constraint");this.C="fairplay"===this.g.flavor||c?yu:DC;this.K=new xC(this.element,this.g);g.C(this,this.K);lu(this.g)&&(this.N=new xC(this.element,this.g),g.C(this,this.N));g.C(this,this.P);c=this.element;this.g.keySystemAccess?this.P.I(c,"encrypted",this.OH):mn(this.P,c,lu(this.g)?["msneedkey"]:["needkey","webkitneedkey"],this.FL);$ha(this);a:switch(c=this.g,a=this.i.experiments,b=this.l,c.flavor){case "fairplay":19.2999<Ml()?(a=c.Yo,c=c.Xo,c>=a&&(c=.75*a),b=.5*(a-c),
c=new aC(b,a,a-b-c,this)):c=null;break a;case "widevine":c=new CC(g.P(a,"disable_license_delay"),b,this);break a;default:c=null}if(this.u=c)g.C(this,this.u),this.u.subscribe("rotated_need_key_info_ready",this.yx,this);qu(this.i.experiments);EC(this,"cks"+this.g.Pd());c=this.g;"com.youtube.widevine.forcehdcp"===c.g&&c.o&&(this.ma=new BC(this.videoData.zf,this.i.experiments),g.C(this,this.ma))};
$ha=function(a){var b=yC(a.K);b?b.then(g.Dj(function(){aia(a)}),g.Dj(function(c){if(!a.ba()){g.L(c);
var d="t.a";c instanceof DOMException&&(d+=";n."+c.name+";m."+c.message);a.O("licenseerror","drm.unavailable",!0,d,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK")}})):(EC(a,"mdkrdy"),a.J=!0);
a.N&&(b=yC(a.N))};
IC=function(a,b,c){a.ea=!0;c=new Hy(b,c);g.P(a.i.experiments,"html5_eme_loader_sync")?(a.B.get(b)||a.B.set(b,c),GC(a,c)):0!==a.o.length&&a.videoData.wa&&a.videoData.wa.g()?HC(a):GC(a,c)};
JC=function(a,b){EC(a,"onneedkeyinfo");g.P(a.i.experiments,"html5_eme_loader_sync")&&(a.F.get(b.initData)||a.F.set(b.initData,b));GC(a,b)};
cia=function(a,b){if(lu(a.g)&&!a.V){var c=lga(b);if(0!==c.length){var d=new Hy(c);a.V=!0;navigator.requestMediaKeySystemAccess("com.microsoft.playready",[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}]).then(function(e){e.createMediaKeys().then(function(f){bia(a,f,d)})},null)}}};
bia=function(a,b,c){var d=b.createSession(),e=a.l.values[0],f=Pha(e);d.addEventListener("message",function(h){h=new Uint8Array(h.message);uC(h,d,a.g.l,f,"playready")});
d.addEventListener("keystatuseschange",function(){"usable"in d.keyStatuses&&(a.W=!0,KC(a,qC(e,a.W)))});
d.generateRequest("cenc",c.initData)};
GC=function(a,b){if(!a.ba()){EC(a,"onInitData");if(g.P(a.i.experiments,"html5_eme_loader_sync")&&a.videoData.wa&&a.videoData.wa.g()){var c=a.F.get(b.initData),d=a.B.get(b.initData);if(!c||!d)return;b=c;c=b.initData;a.B.remove(c);a.F.remove(c)}EC(a,"initd."+b.initData.length+";ct."+b.contentType);"widevine"===a.g.flavor?a.X&&!a.videoData.ra||g.P(a.i.experiments,"vp9_drm_live")&&a.videoData.ra&&b.Qc||(a.X=!0,c=b.g,Iy(b),c&&!b.Qc&&b.g!==c&&a.O("ctmp","cpsmm","emsg."+c+";pssh."+b.g),a.O("widevine_set_need_key_info",
b)):a.yx(b)}};
aia=function(a){if(!a.ba())if(g.P(a.i.experiments,"html5_drm_set_server_cert")&&!g.It(a.i)){var b=Xha(a.K);b?b.then(g.Dj(function(c){rx(a.videoData)&&a.O("ctmp","ssc",c)}),g.Dj(function(c){a.O("ctmp","ssce","n."+c.name+";m."+c.message)})).then(g.Dj(function(){LC(a)})):LC(a)}else LC(a)};
LC=function(a){a.ba()||(a.J=!0,EC(a,"onmdkrdy"),HC(a))};
HC=function(a){if(a.ea&&a.J&&!a.R){for(;a.o.length;){var b=a.o[0];if(a.l.get(b.initData))if("fairplay"===a.g.flavor)a.l.remove(b.initData);else{a.o.shift();continue}Iy(b);break}a.o.length&&a.createSession(a.o[0])}};
KC=function(a,b){var c=wu("auto",b,!1,"l");if(g.P(a.i.experiments,"html5_drm_initial_constraint_from_config")?a.videoData.dm:g.P(a.i.experiments,"html5_drm_start_from_null_constraint")){if(vu(a.C,c))return}else if(Bu(a.C,b))return;a.C=c;a.O("qualitychange");EC(a,"updtlq"+b)};
dia=function(a){if(0>=a.l.values.length){var b="ns;";a.J||(b+="nr;");return b+="ql."+a.o.length}return rC(a.l.values[0])};
EC=function(a,b){a.ba()||rx(a.videoData)&&a.O("ctmp","drmlog",b)};
MC=function(a,b,c){g.N.call(this);this.videoData=a;this.Ac=b;this.playerVisibility=c;this.u=0;this.i=this.g=null;this.B=this.o=this.l=!1};
SC=function(a,b,c){var d=!1,e=a.u+3E4<(0,g.M)()||!1,f;if(f=a.videoData.aa("html5_pause_on_nonforeground_platform_errors")&&!e)f=a.playerVisibility,f=!!(f.g||f.isInline()||f.isBackground()||f.u||f.o);f&&(c.nonfg="paused",e=!0,a.O("pausevideo"));a.videoData.aa("html5_disable_codec_on_platform_errors")&&!e&&(f=a.videoData.ya)&&("1"===f.ob||br(f))&&(d=e=!0,c.cfall=f.ob,a.Ac.o.F.add(f.ob));if(!e)return NC(a,c);a.u=(0,g.M)();e=a.videoData;e.kf?(e=e.kf.Ky(),f=Date.now()/1E3+1800,e=e<f):e=!1;c.e=b;e&&(c.staleprog=
"1");OC(a,"qoe.restart",c);if(e&&PC(a))return QC(a),!0;Nl("philips")&&RC(a);b=a.videoData.ya;!a.videoData.aa("html5_disable_codec_on_platform_errors")&&b&&"1"===b.ob?(a.Ac.o.disableAv1(),d=!0):a.g?(b=a.g,c=(c=gz(b.i)||b.i.i)?c.g:b.i.g,c.J+=1,Zz(b.C,c)):a.videoData.kf&&a.videoData.kf.Ev();a.O("newelementrequired",d);return!0};
NC=function(a,b){if(a.videoData.Ye)return!1;a.Ac.na+=1;if(10>=a.Ac.na)return!1;b.exiled=""+a.Ac.na;OC(a,"qoe.start15s",b);a.O("playbackstalledatstart");return!0};
RC=function(a){if("GAME_CONSOLE"!=a.Ac.deviceParams.cplatform)try{window.close()}catch(b){}};
PC=function(a){return a.l||"yt"!==a.Ac.P?!1:a.videoData.Ye?25>a.videoData.Dg:!a.videoData.Dg};
QC=function(a){a.l||(a.l=!0,a.O("signatureexpiredreloadrequired"))};
eia=function(a,b){if(a.i&&("fmt.unplayable"===b.errorCode||"html5.invalidstate"===b.errorCode)){var c=a.i.Mf();b.details.merr=c?c.toString():"0";b.details.msg=a.i.Yk()}};
fia=function(a,b){return"html5.invalidstate"===b.errorCode&&a.Ac.aa("html5_new_element_on_invalid_state")||"fmt.unplayable"===b.errorCode||"fmt.unparseable"===b.errorCode?SC(a,b.errorCode,b.details):!1};
TC=function(a){return"net.retryexhausted"===a.errorCode||"net.badstatus"===a.errorCode&&!!a.details.fmt_unav};
gia=function(a,b,c){if("403"===b.details.rc){var d=b.errorCode;d="net.badstatus"===d||"manifest.net.retryexhausted"===d}else d=!1;if(!d)return!1;d=18484;a.Ac.aa("ipp_signature_cipher_killswitch")||(d=g.K("STS",void 0)?g.K("STS",void 0):d);b.details.sts=""+d;if(PC(a))return c?(a.o=!0,a.O("releaseloader")):(b.g&&(b.details.e=b.errorCode,b.errorCode="qoe.restart",b.g=!1),OC(a,b.errorCode,b.details),QC(a)),!0;6048E5<(0,g.M)()-a.Ac.Aa&&UC(a,"signature");return!1};
UC=function(a,b){try{window.location.reload();OC(a,"qoe.restart",{detail:"pr."+b});return}catch(c){}a.Ac.aa("tvhtml5_retire_old_players")&&g.It(a.Ac)&&RC(a)};
hia=function(a){VC(a,"highrepfallback","1",{Tv:!0});!a.videoData.aa("html5_hr_logging_killswitch")&&/^hr/.test(a.videoData.clientPlaybackNonce)&&btoa&&VC(a,"afmts",btoa(a.videoData.adaptiveFormats),{Tv:!0});var b=a.videoData;b.wa=b.wa.l;a.O("highrepfallback")};
iia=function(a,b,c){eia(a,b);if(!fia(a,b)&&!gia(a,b,c))if(TC(b)&&a.videoData.wa&&a.videoData.wa.l)OC(a,b.errorCode,b.details),hia(a);else if(b.g){c=a.g?a.g.C.o:null;if(TC(b)&&c&&c.isLocked())var d="FORMAT_UNAVAILABLE";else if(!a.Ac.u&&"auth"===b.errorCode&&"429"===b.details.rc){d="TOO_MANY_REQUESTS";var e="6"}a.O("playererror",b.errorCode,d,qs(b.details),e)}else d=/^pp/.test(a.videoData.clientPlaybackNonce),OC(a,b.errorCode,b.details),d&&"manifest.net.connect"===b.errorCode&&(b="https://www.youtube.com/generate_204?cpn="+
a.videoData.clientPlaybackNonce+"&t="+(0,g.M)(),(new cA(b,"manifest",function(f){a.B=!0;VC(a,"pathprobe",f)},function(f){OC(a,f.errorCode,f.details)})).send())};
VC=function(a,b,c,d){a.O("clienttemp",b,c,(void 0===d?{Tv:!1}:d).Tv)};
OC=function(a,b,c){a.O("qoeerror",b,c)};
WC=function(a,b,c,d){this.videoData=a;this.g=b;this.reason=c;this.i=d};
XC=function(a,b){g.N.call(this);this.g=a;this.K=b;this.J=this.B=this.C=this.l=this.i=this.u=this.F=this.o=0;this.playbackRate=1};
ZC=function(a,b,c){!g.P(a.g.experiments,"html5_tv_ignore_capable_constraint")&&g.It(a.g)&&(c=zu(c,YC(a,b)));return c};
YC=function(a,b){if(g.It(a.g)&&Fs(a.g.o,Gs.HEIGHT))var c=b.wa.videoInfos[0].xa().Rb;else{c=b.wa.g();var d;g.xt(a.g)&&(d=window.screen&&window.screen.width?new g.He(window.screen.width,window.screen.height):null);d||(d=a.g.Lh?a.g.Lh.clone():a.K.getPlayerSize());(At||Hs||c)&&d.scale(g.Rt());c=d;Fw(b.videoData)||px(b.videoData);var e=b.wa.videoInfos;if(e.length){d=.85;var f=e[0].xa();4!==f.projectionType&&2!==f.projectionType&&3!==f.projectionType||vt||(d=.45);f=e[0];var h=f.xa();e=g.p(e);for(var l=
e.next();!l.done&&!(f=h=l.value,h=h.xa(),null===c||h.width*d<c.width&&h.height*d<c.height);l=e.next());c="93"===Ip(f)?Uq(h.width,h.height):h.quality;c=wu("auto",c,!1,"r")}else c=yu;c=c.g}c&&(c=Math.max(c,360));return new uu(0,c,!1,"r")};
jia=function(a,b){return g.hh(a,function d(){var e;return g.Aa(d,function(f){if(!b.wa.g())return f["return"](void 0);e=b.wa.videoInfos;return f["return"](Iu(e))})})};
kia=function(a,b,c,d){if(!b||!c||!b.videoData.ya)return!1;var e=g.O(a.g.experiments,"html5_df_downgrade_thresh"),f=a.aa("html5_log_media_perf_info"),h=g.O(a.g.experiments,"hfr_dropped_framerate_fallback_threshold");if(!(5E3>(0,g.M)()-a.u?0:f||0<e||0<h))return!1;a.u=(0,g.M)();c=c.getVideoPlaybackQuality();if(!c)return!1;var l=c.droppedVideoFrames-a.B,m=c.totalVideoFrames-a.J;a.B=c.droppedVideoFrames;a.J=c.totalVideoFrames;f&&b.videoData.kh&&a.O("ctmp","ddf","dr."+c.droppedVideoFrames+";de."+c.totalVideoFrames);
if(d)return a.i=0,a.l=0,!1;d=60<m?l/m:0;0<d&&(a.C=d);a.l=0<h&&60*d>h?a.l+1:0;if(!e||g.It(a.g))return!1;a.i=d>e?a.i+1:0;if(3!==a.i)return!1;$C(b.videoData.ya);a.O("ctmp","dfd",aD());return!0};
$C=function(a){var b=a.xa().Rb-1,c=a.ob;a=a.xa().fps;var d=Qs();c=Ps(c,a);0<+d[c]&&(b=Math.min(+d[c],b));d[c]!==b&&(d[c]=b,g.ho("yt-player-performance-cap",d,604800))};
bD=function(a,b){if(!b.wa.g())return yu;var c=0,d=g.O(a.g.experiments,"html5_performance_cap_floor");d=a.g.g?240:d;for(var e=g.p(b.wa.videoInfos),f=e.next();!f.done;f=e.next()){f=f.value;var h=f.ob,l=f.xa().fps;h=+Qs()[Ps(h,l)]||0;f=f.xa().Rb;if(!h||Math.max(h,d)>=f){c=f;break}}return new uu(0,c,!1,"b")};
lia=function(a,b){a.aa("html5_log_media_perf_info")&&(a.O("ctmp","perfdb",aD()),a.O("ctmp","hwc",""+navigator.hardwareConcurrency,!0),b&&a.O("ctmp","mcdb",b.wa.videoInfos.filter(function(c){return!1===c.l}).map(function(c){return Ip(c)}).join("-")))};
aD=function(){var a=Bb(Qs(),function(b){return""+b});
return qs(a)};
cD=function(a,b){g.A.call(this);this.provider=a;this.B=b;this.g=-1;this.u=!1;this.i=-1;this.playerState=new g.oB;this.seekCount=this.nonNetworkErrorCount=this.networkErrorCount=this.rebufferTimeSecs=this.playTimeSecs=this.l=0;this.delay=new g.G(this.send,6E4,this);this.o=!1;g.C(this,this.delay)};
eD=function(a){0<=a.g||(3===a.provider.getVisibilityState()?a.u=!0:(a.g=g.dD(a.provider),a.delay.start()))};
fD=function(a){if(!(0>a.i)){var b=g.dD(a.provider),c=b-a.l;a.l=b;8===a.playerState.state?a.playTimeSecs+=c:g.vB(a.playerState)&&!g.S(a.playerState,16)&&(a.rebufferTimeSecs+=c)}};
gD=function(a){var b=g.iq(a.g.experiments,"web_player_ipp_canary_type_for_logging");if("control"===b)return"HTML5_PLAYER_CANARY_TYPE_CONTROL";if("experiment"===b)return"HTML5_PLAYER_CANARY_TYPE_EXPERIMENT";a=a.g.experiments.experimentIds;return a.includes("21561000")?"HTML5_PLAYER_CANARY_TYPE_SMALL_EXPERIMENT":a.includes("21561001")?"HTML5_PLAYER_CANARY_TYPE_SMALL_CONTROL":"HTML5_PLAYER_CANARY_TYPE_UNSPECIFIED"};
mia=function(a){return(!a.aa("html5_health_to_gel")||a.g.Aa+36E5<(0,g.M)())&&(a.aa("html5_health_to_gel_canary_killswitch")||a.g.Aa+36E5<(0,g.M)()||"HTML5_PLAYER_CANARY_TYPE_UNSPECIFIED"===gD(a))?a.aa("html5_health_to_qoe"):!0};
hD=function(a,b,c,d,e){var f={format:"RAW"},h={};g.cl(a)&&g.dl()&&(c&&(h["X-Goog-Visitor-Id"]=c),b&&(h["X-Goog-PageId"]=b),d&&(h.Authorization="Bearer "+d),c||d||b)&&(f.withCredentials=!0);0<Object.keys(h).length&&(f.headers=h);e&&(f.ud=e);return 1<Object.keys(f).length?f:null};
iD=function(a,b,c,d,e){g.dl()&&c.token&&(a=g.Dd(a,{ctt:c.token,cttype:c.gw,mdx_environment:c.mdxEnvironment}));e?(null==b?b={}:(c=g.Zk(a),Object.keys(c).includes("cpn")),g.Em(a,b)):b?(c=g.Zk(a),Object.keys(c).includes("cpn"),g.rl(a,b)):g.mo(a,d)};
kD=function(a){g.A.call(this);var b=this;this.provider=a;this.g={};this.sequenceNumber=1;this.ca=NaN;this.Ob="N";this.B=this.na=this.ea=this.W=this.o=0;this.K=this.ua="";this.ma=this.N=NaN;this.da=0;this.va=-1;this.la=1;this.playTimeSecs=this.rebufferTimeSecs=0;this.P=this.J=!1;this.za=[];this.C=null;this.F=this.R=this.i=!1;this.l=-1;this.X=!1;this.Aa=new g.G(this.vG,750,this);g.C(this,this.Aa);(a=navigator.getBattery?navigator.getBattery():null)&&a.then&&a.then(function(c){b.C=c});
g.jD(this,0,"vps",["N"])};
g.jD=function(a,b,c,d){var e=a.g[c];e||(e=[],a.g[c]=e);e.push(b.toFixed(3)+":"+d.join(":"))};
mD=function(a,b){var c=a.provider.i();g.jD(a,b,"cmt",[c.toFixed(3)]);c=a.provider.F();if(a.u&&1E3*c>a.u.dB+100&&a.u){var d=a.u,e=d.isAd;a.V=1E3*b-d.aO-(1E3*c-d.dB)-d.QN;lD(a,"gllat","l."+a.V.toFixed()+";prev_ad."+ +e);delete a.u}};
pD=function(a,b){b=void 0===b?NaN:b;b=0<=b?b:g.dD(a.provider);var c=a.provider.o();if(!isNaN(a.N)&&!isNaN(c.l)){var d=c.l-a.N;0<d&&g.jD(a,b,"bwm",[d,(c.u-a.ma).toFixed(3)])}a.N=c.l;a.ma=c.u;isNaN(c.bandwidthEstimate)||g.jD(a,b,"bwe",[c.bandwidthEstimate.toFixed(0)]);a.provider.videoData.kh&&c.g&&lD(a,"bwinfo",c.g);a.C&&g.jD(a,b,"bat",[a.C.level,a.C.charging?"1":"0"]);d=a.provider.getVisibilityState();a.va!==d&&(g.jD(a,b,"vis",[d]),a.va=d);mD(a,b);(d=nD(a.provider))&&d!==a.da&&(g.jD(a,b,"conn",[d]),
a.da=d);oD(a,b,c)};
oD=function(a,b,c){if(!isNaN(c.i)){var d=c.i;c.o<d&&(d=c.o);g.jD(a,b,"bh",[d.toFixed(3)])}};
qD=function(a){for(var b=0,c=g.p(Object.keys(a.g)),d=c.next();!d.done;d=c.next())d=d.value,b+=d.length+Number((0,g.ai)(a.g[d],function(e,f){return e+f.length},0));
96E3<b&&(new g.G(a.reportStats,0,a)).start()};
nia=function(a){a.provider.videoData.Sj?rD(a,"prefetch"):a.provider.aa("html5_qoe_user_intent_match_health")||(a.g.user_intent=["0"],a.i=!0);a.provider.videoData.Dg&&lD(a,"reload","r."+a.provider.videoData.reloadReason+";ct."+a.provider.videoData.Dg);a.provider.videoData.rg&&rD(a,"monitor");a.provider.videoData.ra&&rD(a,"live");a.provider.videoData.Eg&&lD(a,"ctrl",a.provider.videoData.Eg,!0);if(a.provider.videoData.Uf){var b=a.provider.videoData.Uf.replace(/,/g,"_");lD(a,"ytp",b,!0)}a.provider.videoData.OC&&
(b=a.provider.videoData.OC.replace(/,/g,"."),lD(a,"ytrexp",b,!0));if(!g.P(a.provider.g.experiments,"html5_disable_gpu_reporting")){var c=a.provider.g.experiments;b=a.provider.videoData;c=g.P(c,"enable_white_noise")||g.P(c,"enable_webgl_noop")||g.P(c,"enable_gpu_logging");var d=b.Nk()||b.mh()||b.nh()||b.ih(),e=b.wa&&"1"===g.$a(b.wa.videoInfos).ob&&/^g/.test(b.clientPlaybackNonce);b=/^gp/.test(b.clientPlaybackNonce);(c||d||b||e)&&(b=(0,g.sD)())&&(a.g.gpu=[b])}a.ca=Gj(function(){a.reportStats()},1E4)};
tD=function(a,b,c,d){var e=a.provider.i();c=[c,e.toFixed(3)];d&&c.push(d);g.jD(a,b,"error",c);a.F=!0};
uD=function(a){!a.provider.aa("html5_qoe_user_intent_match_health")||0<=a.l||(a.provider.g.Wa||3!==a.provider.getVisibilityState()?a.l=g.dD(a.provider):a.X=!0)};
rD=function(a,b){var c=a.g.cat||[];c.push(b);a.g.cat=c};
lD=function(a,b,c,d){var e=a.g.ctmp||[],f=-1!==a.za.indexOf(b);f||a.za.push(b);if(!d||!f){!a.provider.aa("html5_censor_ctmp_killswitch")&&/[^a-zA-Z0-9;.!_-]/.test(c)&&(c=c.replace(/[+]/g,"-").replace(/[^a-zA-Z0-9;.!_-]/g,"_"));if(!d){var h=1E3*g.dD(a.provider);c="t."+h.toFixed()+";"+c}oia(b,c);e.push(b+":"+c);a.g.ctmp=e;qD(a);return h}};
wD=function(a){this.provider=a;this.C=!1;this.g=0;this.o=-1;this.lastUpdateTime=NaN;this.i=0;this.segments=[];this.B=this.u=0;this.J=this.provider.md().volume;this.F=this.provider.md().muted;this.l=vD(this.provider)};
xD=function(a){a.l.startTime=a.i;a.l.endTime=a.g;a.segments.length&&g.$a(a.segments).isEmpty()?a.segments[a.segments.length-1]=a.l:a.segments.length&&a.l.isEmpty()||a.segments.push(a.l);a.u+=a.g-a.i;a.l=vD(a.provider);a.i=a.g};
yD=function(a){return a.u+a.provider.i()-a.i};
zD=function(a){a.segments.length&&a.g===a.i||xD(a);var b=a.segments;a.segments=[];return b};
pia=function(a){AD(a);a.B=Gj(function(){a.update()},100);
a.lastUpdateTime=g.dD(a.provider);a.l=vD(a.provider)};
AD=function(a){window.clearInterval(a.B);a.B=NaN};
BD=function(a,b,c){c-=a.lastUpdateTime;return b===a.g&&.5<c};
CD=function(a,b,c,d){this.segments=[];this.experimentIds=[];this.lh=this.W=this.isFinal=this.Aa=this.R=this.autoplay=this.autonav=!1;this.la="yt";this.i=this.o=null;this.sendVisitorIdHeader=this.ea=!1;this.pageId="";this.l="watchtime"===c;this.F="playback"===c;this.V="delayplay"===c;this.P="atr"===c;this.za="engage"===c;this.sendVisitorIdHeader=!1;this.uri=this.P?"/api/stats/"+c:"//"+b.Kl+"/api/stats/"+c;d&&(this.W=d.fs,d.rtn&&(this.i=d.rtn),this.l?(this.playerState=d.state,0<d.rti&&(this.o=d.rti)):
(this.Ca=d.mos,this.Ga=d.volume,d.at&&(this.adType=d.at)),d.autonav&&(this.autonav=d.autonav),d.inview&&(this.ua=d.inview),d.size&&(this.na=d.size));this.deviceParams=g.Pb(b.deviceParams);this.va=b.va;this.experimentIds=b.experiments.experimentIds;this.da=b.Wd;this.la=b.P;this.region=b.region;this.userAge=b.userAge;this.ma=b.Kg;this.La=g.Ak();this.sendVisitorIdHeader=b.sendVisitorIdHeader;this.C=g.P(b.experiments,"vss_pings_using_networkless");this.pageId=b.pageId;this.accessToken=a.Qd();this.adFormat=
a.adFormat;this.adQueryId=a.adQueryId;this.autoplay=nx(a);this.autonav=a.pj||this.autonav;this.contentVideoId=lx(a);this.clientPlaybackNonce=a.clientPlaybackNonce;this.R=a.Yb;a.fg&&(this.u=a.fg,this.N=a.Fh);a.mdxEnvironment&&(this.mdxEnvironment=a.mdxEnvironment);this.Sh=a.Sh;this.wf=a.wf;a.ya&&(this.videoFormat=Ip(a.ya),a.kc&&Ip(a.kc)!==this.videoFormat&&(this.K=Ip(a.kc)));a.fa&&Ir(a.fa)&&(this.offlineDownloadUserChoice="1");this.eventLabel=kx(a);this.lh=a.lh;this.Kk=a.Kk;if(b=$w(a))this.Da=b;this.Lm=
a.Lm;this.jf=a.jf;this.eventId=a.eventId;this.playlistId=a.vD||a.playlistId;this.Xq=a.Xq;this.Eg=a.Eg;this.Uf=a.Uf;this.Fn=a.Fn;this.subscribed=a.subscribed;this.videoId=a.videoId;this.videoMetadata=a.videoMetadata;this.visitorData=a.visitorData;this.osid=a.osid;this.bv=a.bv;this.referrer=a.referrer;this.vn=a.MC||a.vn;this.Al=a.Al;this.Dr=a.Dr;this.userGenderAge=a.userGenderAge};
g.DD=function(a,b){return hD(a.uri,a.pageId,a.sendVisitorIdHeader?a.visitorData:void 0,a.accessToken,b)};
g.FD=function(a){var b={ns:a.la,el:a.eventLabel,cpn:a.clientPlaybackNonce,docid:a.videoId,ver:2,referrer:a.referrer,cmt:a.g(a.Sh),ei:a.eventId,fmt:a.videoFormat,fs:a.W?"1":"0",rt:a.g(a.Ka),of:a.bv,adformat:a.adFormat,content_v:a.contentVideoId,euri:a.va,lact:a.La,live:a.Da,cl:(325714852).toString(),mos:a.Ca,osid:a.osid,state:a.playerState,vm:a.videoMetadata,volume:a.Ga};a.adQueryId&&(b.aqi=a.adQueryId);a.subscribed&&(b.subscribed="1");g.Ua(b,a.deviceParams);a.autonav&&(b.autonav="1");a.autoplay&&
(b.autoplay="1");a.R&&(b.dni="1");a.isFinal&&(b["final"]="1");a.lh&&(b.splay="1");a.wf&&(b.delay=a.wf);a.da&&(b.hl=a.da);a.region&&(b.cr=a.region);a.userGenderAge&&(b.uga=a.userGenderAge);void 0!==a.userAge&&a.ma&&(b.uga=a.ma+a.userAge);void 0!==a.ca&&(b.len=a.g(a.ca));!a.l&&0<a.experimentIds.length&&(b.fexp=a.experimentIds.toString());null!==a.i&&(b.rtn=a.g(a.i));a.vn&&(b.feature=a.vn);a.playlistId&&(b.list=a.playlistId);a.Eg&&(b.ctrl=a.Eg);a.Uf&&(b.ytr=a.Uf);a.Fn&&(b.ssrt="1");a.K&&(b.afmt=a.K);
a.offlineDownloadUserChoice&&(b.ODUC=a.offlineDownloadUserChoice);a.X&&(b.lio=a.g(a.X));a.l?(b.idpj=a.Kk,b.ldpj=a.Lm,null!=a.o&&(b.rti=a.g(a.o))):void 0!==a.adType&&(b.at=a.adType);a.na&&(a.F||a.V)&&(b.size=a.na);null!==a.ua&&(a.F||a.V)&&(b.inview=a.g(a.ua));a.l&&(b.volume=ED(a,(0,g.Hc)(a.segments,function(d){return d.volume})),b.muted=ED(a,(0,g.Hc)(a.segments,function(d){return d.muted?1:0})),b.st=ED(a,(0,g.Hc)(a.segments,function(d){return d.startTime})),b.et=ED(a,(0,g.Hc)(a.segments,function(d){return d.endTime})),
(0,g.Wj)(a.segments,function(d){return 1!==d.playbackRate})&&(b.rate=ED(a,(0,g.Hc)(a.segments,function(d){return d.playbackRate}))),(0,g.Wj)(a.segments,function(d){return"-"!==d.Ml})&&(b.als=(0,g.Hc)(a.segments,function(d){return d.Ml}).join(",")));
(0,g.Wj)(a.segments,function(d){return 0!==d.visibilityState})&&(b.vis=ED(a,(0,g.Hc)(a.segments,function(d){return d.visibilityState})));
(0,g.Wj)(a.segments,function(d){return 0!==d.connectionType})&&(b.conn=ED(a,(0,g.Hc)(a.segments,function(d){return d.connectionType})));
(0,g.Wj)(a.segments,function(d){return 0!==d.l})&&(b.blo=ED(a,(0,g.Hc)(a.segments,function(d){return d.l})));
(0,g.Wj)(a.segments,function(d){return"-"!==d.i})&&(b.cc=(0,g.Hc)(a.segments,function(d){return d.i}).join(","));
(0,g.Wj)(a.segments,function(d){return"-"!==d.clipId})&&(b.clipid=(0,g.Hc)(a.segments,function(d){return d.clipId}).join(","));
if((0,g.Wj)(a.segments,function(d){return!!d.g})){var c="au";
a.F&&(c="au_d");b[c]=(0,g.Hc)(a.segments,function(d){return d.g}).join(",")}g.dl()&&a.u&&(b.ctt=a.u,b.cttype=a.N,b.mdx_environment=a.mdxEnvironment);
a.za&&(b.etype=void 0!==a.B?a.B:0);a.Al&&(b.uoo=a.Al);a.Dr&&(b.upt=a.Dr);return b};
ED=function(a,b){return(0,g.Hc)(b,a.g).join(",")};
HD=function(){this.g={};var a=g.Bl("CONSISTENCY");a&&GD(this,{encryptedTokenJarContents:a})};
GD=function(a,b){if(b.encryptedTokenJarContents&&(a.g[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.g[b.encryptedTokenJarContents]},1E3*c);
g.Al("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}};
g.JD=function(a,b){b=void 0===b?!0:b;var c=g.K("INNERTUBE_CONTEXT");if(!c)return g.Km(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};c=g.Qb(c);var d=b;c.client||(c.client={});var e=c.client;"MWEB"===e.clientName&&(e.clientFormFactor=g.K("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;e.screenPixelDensity=Math.round(window.devicePixelRatio)||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());
var f=void 0===f?!1:f;g.an.getInstance();var h=g.cn(0,165)?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT";g.uj("kevlar_apply_prefers_color_theme")&&(h=g.cn(0,165)?"USER_INTERFACE_THEME_DARK":g.cn(0,174)?"USER_INTERFACE_THEME_LIGHT":window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches?"USER_INTERFACE_THEME_DARK":"USER_INTERFACE_THEME_LIGHT");f=f?h:Xca()||h;e.userInterfaceTheme=f;if(g.uj("web_log_connection")){a:{if(h=
(f=window.navigator)?f.connection:void 0){f=ID[h.type||"unknown"]||"CONN_UNKNOWN";h=ID[h.g||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===f&&"CONN_UNKNOWN"!==h&&(f=h);if("CONN_UNKNOWN"!==f)break a;if("CONN_UNKNOWN"!==h){f=h;break a}}f=void 0}f&&(e.connectionType=f)}(f=g.Bl("EXPERIMENTS_DEBUG"))?e.experimentsToken="ZERO"===f?"GgIQAQ%3D%3D":f:delete e.experimentsToken;e=xj();HD.g||(HD.g=new HD);f=g.Fb(HD.g.g);c.request=Object.assign(Object.assign({},c.request),{internalExperimentFlags:e,consistencyTokenJars:f});
f=g.an.getInstance();e=g.cn(0,58);f=f.get("gsml","");c.user=Object.assign({},c.user);e&&(c.user.enableSafetyMode=e);f&&(c.user.lockedSafetyMode=!0);(e=g.K("DELEGATED_SESSION_ID"))&&!g.uj("pageid_as_header_web")&&(c.user.onBehalfOfUser=e);d&&(d=g.Hn())&&(c.clientScreenNonce=d);a&&(c.clickTracking={clickTrackingParams:a});return c};
KD=function(a){var b=g.JD(),c=a.df;c&&(b.clickTracking={clickTrackingParams:c});var d=b.client||{},e="EMBED",f=kx(a);c=a.L();"leanback"===f?e="WATCH":c.aa("gvi_channel_client_screen")&&"profilepage"===f?e="CHANNEL":a.rg?e="LIVE_MONITOR":"detailpage"===f?e="WATCH_FULL_SCREEN":"adunit"===f?e="ADUNIT":"sponsorshipsoffer"===f&&(e="UNKNOWN");d.clientScreen=e;if(e=c.getPlayerType())d.playerType=e;if(e=c.deviceParams.ctheme)d.theme=e;a.Sn&&(d.unpluggedAppInfo={enableFilterMode:!0});if(e=a.Yc)d.unpluggedLocationInfo=
e;b.client=d;d=b.request||{};if(e=a.mdxEnvironment)d.mdxEnvironment=e;b.request=d;d=b.user||{};if(e=a.ue)d.credentialTransferTokens=[{token:e,scope:"VIDEO"}];if(e=a.Jf)d.delegatePurchases={oauthToken:e},d.kidsParent={oauthToken:e};b.user=d;if(d=a.contextParams)b.activePlayers=[{playerContextParams:d}];if(a=a.clientScreenNonce)b.clientScreenNonce=a;if(a=c.va)b.thirdParty={embedUrl:a};return b};
LD=function(a,b,c){var d=a.videoId,e=KD(a),f=a.L(),h={html5Preference:"HTML5_PREF_WANTS",lactMilliseconds:String(g.Ak()),referer:document.location.toString(),signatureTimestamp:18484};a.pj&&(h.autonav=!0);nx(a)&&(h.autoplay=!0);f.l&&a.cycToken&&(h.cycToken=a.cycToken);a.Wt&&(h.fling=!0);var l=a.xk;if(l){var m={},n=l.split("|");3===n.length?(m.breakType=qia[n[0]],m.offset={kind:"OFFSET_MILLISECONDS",value:String(Number(n[1])||0)},m.url=n[2]):m.url=l;h.forceAdParameters={videoAds:[m]}}a.isLivingRoomDeeplink&&
(h.isLivingRoomDeeplink=!0);l=a.Sp;if(null!=l){l={startWalltime:String(l)};if(m=a.Tk)l.manifestDuration=String(m||14400);h.liveContext=l}a.mutedAutoplay&&(h.mutedAutoplay=!0);a.lh&&(h.splay=!0);l=a.vnd;5===l&&(h.vnd=l);if(a.isMdxPlayback){l={triggeredByMdx:!0};if(n=a.Uf)m=n.startsWith("!"),n=n.split("-"),3===n.length?(m&&(n[0]=n[0].substr(1)),m={clientName:ria[n[0]]||"UNKNOWN_INTERFACE",platform:sia[n[1]]||"UNKNOWN_PLATFORM",applicationState:m?"INACTIVE":"ACTIVE",clientVersion:n[2]||""},f.aa("use_remote_context_in_populate_remote_client_info")?
l.remoteContexts=[{remoteClient:m}]:l.remoteClients=[m]):(m={clientName:"UNKNOWN_INTERFACE"},f.aa("use_remote_context_in_populate_remote_client_info")?l.remoteContexts=[{remoteClient:m}]:l.remoteClients=[m]);if(m=a.Vl)l.skippableAdsSupported=m.split(",").includes("ska");h.mdxContext=l}l=b.width;0<l&&(h.playerWidthPixels=l);if(b=b.height)h.playerHeightPixels=b;0!==c&&(h.vis=c);if(c=f.widgetReferrer)h.widgetReferrer=c.substring(0,128);d={videoId:d,context:e,playbackContext:{contentPlaybackContext:h}};
a.contentCheckOk&&(d.contentCheckOk=!0);if(e=a.clientPlaybackNonce)d.cpn=e;if(e=a.playerParams)d.params=e;if(e=a.playlistId)d.playlistId=e;a.racyCheckOk&&(d.racyCheckOk=!0);if(a=a.L().embedConfig)d.serializedThirdPartyEmbedConfig=a;return d};
MD=function(a){var b=a.L(),c={context:KD(a),videoId:a.videoId,racyCheckOk:a.racyCheckOk,contentCheckOk:a.contentCheckOk,autonavState:"STATE_NONE"};"adunit"===kx(a)&&(c.isAdPlayback=!0);b.embedConfig&&(c.serializedThirdPartyEmbedConfig=b.embedConfig);b.ye&&(c.showContentOwnerOnly=!0);1===a.autonavState&&(c.autonavState="STATE_OFF");return c};
uia=function(a,b,c,d){var e=window.location.search;if(38===b.jf&&"books"===a.playerStyle)return e=b.videoId.indexOf(":"),g.Dd("//play.google.com/books/volumes/"+b.videoId.slice(0,e)+"/content/media",{aid:b.videoId.slice(e+1),sig:b.PJ});if(30===b.jf&&"docs"===a.playerStyle)return g.Dd("https://docs.google.com/get_video_info",{docid:b.videoId,authuser:b.yc,authkey:b.authKey,eurl:a.va});if(33===b.jf&&"google-live"===a.playerStyle)return g.Dd("//google-liveplayer.appspot.com/get_video_info",{key:b.videoId});
g.P(a.experiments,"log_invalid_namespame_killswitch")||"yt"===a.P||g.Km(Error("getVideoInfoUrl for invalid namespace: "+a.P));var f=18484;a.aa("ipp_signature_cipher_killswitch")||(f=g.K("STS",void 0)?g.K("STS",void 0):f);f={html5:"1",video_id:b.videoId,cpn:b.clientPlaybackNonce,eurl:a.va,ps:a.playerStyle,el:kx(b),hl:a.Wd,list:b.playlistId,agcid:b.eF,aqi:b.adQueryId,sts:f,lact:g.Ak()};g.Ua(f,a.deviceParams);a.jd&&(f.forced_experiments=a.jd);b.ue?(f.vvt=b.ue,b.mdxEnvironment&&(f.mdx_environment=b.mdxEnvironment)):
b.Qd()&&(f.access_token=b.Qd());b.adFormat&&(f.adformat=b.adFormat);0<=b.slotPosition&&(f.slot_pos=b.slotPosition);b.breakType&&(f.break_type=b.breakType);null!==b.sx&&(f.ad_id=b.sx);null!==b.xx&&(f.ad_sys=b.xx);null!==b.ry&&(f.encoded_ad_playback_context=b.ry);b.Xv&&(f.tpra="1");a.captionsLanguagePreference&&(f.cc_lang_pref=a.captionsLanguagePreference);a.Ph&&2!==a.Ph&&(f.cc_load_policy=a.Ph);a.mute&&(f.mute=a.mute);b.annotationsLoadPolicy&&2!==a.annotationsLoadPolicy&&(f.iv_load_policy=b.annotationsLoadPolicy);
b.Wo&&(f.endscreen_ad_tracking=b.Wo);var h=a.K.get(b.videoId);h&&h.Qn&&(f.ic_track=h.Qn);b.df&&(f.itct=b.df);nx(b)&&(f.autoplay="1");b.mutedAutoplay&&(f.mutedautoplay=b.mutedAutoplay);b.pj&&(f.autonav="1");b.Yt&&(f.noiba="1");b.isMdxPlayback&&(f.mdx="1",f.ytr=b.Uf);b.mdxControlMode&&(f.mdx_control_mode=b.mdxControlMode);b.Vl&&(f.ytrcc=b.Vl);b.fu&&(f.utpsa="1");b.Wt&&(f.is_fling="1");b.Xt&&(f.mute="1");b.vnd&&(f.vnd=b.vnd);b.xk&&(h=3===b.xk.split("|").length,f.force_ad_params=h?b.xk:"||"+b.xk);b.Sj&&
(f.preload=b.Sj);c.width&&(f.width=c.width);c.height&&(f.height=c.height);b.lh&&(f.splay="1");b.ypcPreview&&(f.ypc_preview="1");lx(b)&&(f.content_v=lx(b));b.rg&&(f.livemonitor=1);a.yc&&(f.authuser=a.yc);a.pageId&&(f.pageid=a.pageId);a.zb&&(f.ei=a.zb);a.i&&(f.iframe="1");b.contentCheckOk&&(f.cco="1");b.racyCheckOk&&(f.rco="1");a.l&&b.Sp&&(f.live_start_walltime=b.Sp);a.l&&b.Tk&&(f.live_manifest_duration=b.Tk);a.l&&b.playerParams&&(f.player_params=b.playerParams);a.l&&b.cycToken&&(f.cyc=b.cycToken);
a.l&&b.rD&&(f.tkn=b.rD);0!==d&&(f.vis=d);a.enableSafetyMode&&(f.enable_safety_mode="1");b.Jf&&(f.kpt=b.Jf);b.Op&&(f.kids_age_up_mode=b.Op);b.kidsAppInfo&&(f.kids_app_info=b.kidsAppInfo);b.Sn&&(f.upg_content_filter_mode="1");a.widgetReferrer&&(f.widget_referrer=a.widgetReferrer.substring(0,128));(h=a.no)&&(f.embedding_app=h);b.Yc?(h=null!=b.Yc.latitudeE7&&null!=b.Yc.longitudeE7?b.Yc.latitudeE7+","+b.Yc.longitudeE7:",",h+=","+(b.Yc.clientPermissionState||0)+","+(b.Yc.locationRadiusMeters||"")+","+(b.Yc.locationOverrideToken||
"")):h=null;h&&(f.uloc=h);b.Em&&(f.internalipoverride=b.Em);a.embedConfig&&(f.embed_config=a.embedConfig);a.ye&&(f.co_rel="1");0<a.Ve.length&&(f.ancestor_origins=Array.from(a.Ve).join(","));void 0!==a.homeGroupInfo&&(f.home_group_info=a.homeGroupInfo);void 0!==a.livingRoomAppMode&&(f.living_room_app_mode=a.livingRoomAppMode);a.enablePrivacyFilter&&(f.enable_privacy_filter="1");b.isLivingRoomDeeplink&&(f.is_living_room_deeplink="1");b.Mo&&b.No&&(f.clip=b.Mo,f.clipt=b.No);b.Ts&&(f.disable_watch_next=
"1");a.aa("web_player_gvi_wexit_diff")&&(f.player_request=JSON.stringify(LD(b,c,d)));a.aa("html5_onesie_watch_next_diff")&&(f.watch_next_request=JSON.stringify(MD(b)));for(var l in f)!tia.has(l)&&f[l]&&512<String(f[l]).length&&(g.Km(Error("GVI param too long: "+l)),f[l]="");b=a.F;g.Jt(a)&&(b=qq(b.replace(/\b(?:www|web)([.-])/,"tv$1"))||a.F);a=g.Dd(b+"get_video_info",f);e&&(a=ol(a,e));return a};
g.ND=function(a,b){return a.F+"timedtext_video?ref=player&v="+b.videoId};
g.OD=function(a,b){a.feature=b;return a};
PD=function(a){g.A.call(this);this.provider=a;this.currentPlayerState="paused";this.o=NaN;this.u=[10,10,10,40];this.C=this.B=0;this.N=this.K=this.P=this.R=this.J=this.F=this.i=!1;this.l=NaN;this.g=new wD(a)};
RD=function(a,b,c){c=void 0===c?NaN:c;var d=g.dD(a.provider);c=isNaN(c)?d:c;c=Math.ceil(c);var e=a.u[a.B];a.B+1<a.u.length&&a.B++;var f=c+e;a.o=g.Fj(function(){if(!a.ba()){a.o=NaN;a.g.update();var h=zD(a.g),l=QD(a,h);b&&(l.o=f);var m=a.provider.aa("html5_expanded_max_vss_pings")?1E3:400;m=a.C>m;!(1<h.length)&&h[0].isEmpty()||m||(l.i=RD(a,!0,f));l.send();a.C++}},1E3*(f-d));
return f};
g.SD=function(a,b){var c=a.provider,d=c.md();g.Ua(d,c.videoData.md());g.Ua(d,{state:a.currentPlayerState});c=new CD(a.provider.videoData,a.provider.g,b,d);c.Sh=a.provider.i();a.provider.videoData.ra||(c.ca=a.provider.u());a.provider.videoData.fa&&(d=Xr(a.provider.videoData.fa,c.Sh))&&(c.X=d-c.Sh);c.Ka=g.dD(a.provider);c.segments=[vD(a.provider)];return c};
QD=function(a,b){var c=g.SD(a,"watchtime");c.segments=b;c.Sh=a.g.g;return c};
TD=function(a){a.g.update();return QD(a,zD(a.g))};
WD=function(a){a.provider.videoData.remarketingUrl&&!a.R&&(UD(a,a.provider.videoData.remarketingUrl),a.R=!0);a.provider.videoData.youtubeRemarketingUrl&&!a.P&&(UD(a,a.provider.videoData.youtubeRemarketingUrl),a.P=!0);a.provider.videoData.googleRemarketingUrl&&!a.K&&(UD(a,a.provider.videoData.googleRemarketingUrl),a.K=!0);a.provider.videoData.ppvRemarketingUrl&&!a.N&&(UD(a,a.provider.videoData.ppvRemarketingUrl),a.N=!0);VD(a)};
YD=function(a){a.l=Gj(function(){XD(a,"heartbeat")},3E4)};
XD=function(a,b){var c=a.provider.g,d=a.provider.videoData,e={ns:c.P,el:kx(d),eurl:c.va,fmt:d.ya?Ip(d.ya):0,html5:1,list:d.playlistId,cpn:d.clientPlaybackNonce,ei:d.eventId,ps:c.playerStyle,noflv:1,st:a.provider.i(),video_id:d.videoId,metric:b};nx(d)&&(e.autoplay="1");"heartbeat"===b&&(e.tpmt=yD(a.g));g.Ua(e,c.deviceParams);UD(a,g.Dd(g.P(c.experiments,"cardio_base_url_killswitch")?(c.g?c.protocol+"://www.youtube.com/":c.F)+"live_204":c.F+"live_204",e))};
ZD=function(a,b,c){a.F||(c||(c=g.SD(a,"atr")),c.J=b,c.send(),a.F=!0)};
VD=function(a){a.provider.videoData.cd.eventLabel=kx(a.provider.videoData);a.provider.videoData.cd.playerStyle=a.provider.g.playerStyle;a.provider.videoData.pn&&(a.provider.videoData.cd.feature="pyv");a.provider.videoData.cd.vid=a.provider.videoData.videoId;var b=a.provider.videoData.cd;a=a.provider.videoData;a=a.isAd()||!!a.pn;b.isAd=a};
UD=function(a,b){var c=a.provider.videoData.Qd(),d=a.provider.aa("web_player_vss_pageid_header")?a.provider.g.pageId:void 0,e=a.provider.g.sendVisitorIdHeader?a.provider.videoData.visitorData:void 0,f=g.P(a.provider.g.experiments,"vss_pings_using_networkless");c=hD(b,d,e,c,void 0);iD(b,c,{token:a.provider.videoData.fg,gw:a.provider.videoData.Fh,mdxEnvironment:a.provider.videoData.mdxEnvironment},void 0,f)};
$D=function(a){g.A.call(this);var b=this;this.provider=a;this.i=this.qoe=this.g=null;this.provider.videoData.isValid()&&!this.provider.videoData.wl&&(this.g=new PD(this.provider),g.C(this,this.g),this.qoe=new kD(this.provider),g.C(this,this.qoe));mia(this.provider)&&(this.i=new cD(this.provider,function(c){b.qoe&&lD(b.qoe,"h5h",c,void 0)}),g.C(this,this.i))};
g.aE=function(a){a.g&&xD(a.g.g)};
via=function(a,b){a.g&&ZD(a.g,b)};
wia=function(a){if(!a.g)return null;var b=g.SD(a.g,"atr");return function(c){a.g&&ZD(a.g,c,b)}};
bE=function(a,b){this.l=a;this.timerName="";this.i=!1;this.g=b||null;this.i=!1};
g.cE=function(a,b,c){var d=g.zt(b.Sa)&&b.Sa.Zd&&mx(b);if(b.Sa.Yd&&(ut(b.Sa)||g.au(b.Sa)||d)&&!a.i){a.i=!0;g.K("TIMING_ACTION")||rj("TIMING_ACTION",a.l.Be);a.l.csiServiceName&&rj("CSI_SERVICE_NAME",a.l.csiServiceName);if(a.g){b=a.g.i;d=g.p(Object.keys(b));for(var e=d.next();!e.done;e=d.next())e=e.value,g.rv(e,b[e],a.timerName);b=a.g.g;d=g.p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,g.qv(e,b[e],a.timerName);b=a.g;b.i={};b.g={}}g.qv("yt_pvis",Uea(),a.timerName);g.qv("yt_pt","html5",
a.timerName);c&&!wv("pbs",a.timerName)&&a.tick("pbs",c);c=a.l;!g.au(c)&&!ut(c)&&wv("_start",a.timerName)&&Av(a.timerName)}};
dE=function(){this.endTime=this.startTime=-1;this.i="-";this.playbackRate=1;this.visibilityState=0;this.g="";this.volume=this.connectionType=this.l=0;this.muted=!1;this.Ml=this.clipId="-"};
eE=function(a,b,c,d,e,f,h,l,m,n,q,r,u,w){this.videoData=a;this.g=b;this.l=void 0;this.md=c;this.u=d;this.i=e;this.o=f;this.J=h;this.getAudioTrack=l;this.getPlaybackRate=m;this.B=n;this.getVisibilityState=q;this.C=r||function(){};
this.K=u||function(){};
this.F=w||function(){return-1}};
g.dD=function(a){return g.fE(a)()};
g.fE=function(a){if(!a.l){var b=g.Ta(function(d){var e=(0,g.M)();d&&631152E6>=e&&(g.L(Error("invalid coreTime.now value: "+e)),e=(new Date).getTime()+2);return e},g.P(a.g.experiments,"html5_validate_yt_now")),c=b();
a.l=function(){return Math.round(b()-c)/1E3};
a.K()}return a.l};
nD=function(a){if(navigator.connection&&navigator.connection.type)return gE[navigator.connection.type]||gE.other;if(g.It(a.g)){a=navigator.userAgent;if(/[Ww]ireless[)]/.test(a))return 3;if(/[Ww]ired[)]/.test(a))return 1}return 0};
vD=function(a){var b=new dE;b.i=a.md().cc||"-";b.playbackRate=a.getPlaybackRate();var c=a.getVisibilityState();0!==c&&(b.visibilityState=c);a.g.Xa&&(b.l=1);c=a.getAudioTrack();c.Ab&&c.Ab.id&&"und"!==c.Ab.id&&(b.g=c.Ab.id);b.connectionType=nD(a);b.volume=a.md().volume;b.muted=a.md().muted;b.clipId=a.md().clipid||"-";b.Ml=a.videoData.Ml||"-";return b};
xia=function(){this.i=this.mediaTime=NaN;this.g=this.seeking=!1};
hE=function(a,b){return b>a.mediaTime+.001&&b<a.mediaTime+5};
iE=function(a,b,c,d){if(d=1<d)a.g=!0;if(a.seeking)b!==a.mediaTime&&(a.seeking=!1);else if(0<b&&a.mediaTime===b)return c-a.i>(d||!a.g?1500:400);a.mediaTime=b;a.i=c;return!1};
jE=function(){g.A.call(this);this.l={};this.g={};this.i=new g.G(this.o,250,this);g.C(this,this.i)};
lE=function(a,b,c,d){a.l[b]=c;a.g[b]=new kE(void 0===d?!1:d)};
mE=function(a,b){if(a.g[b]){var c=a.g[b].g;for(var d=[];c.i!==c.g;)c.i=(c.i+1)%c.data.length,d.push(c.data[c.i]);c=d}else c=[];return c};
nE=function(a,b){return a.g[b]?$A(a.g[b].g):0};
kE=function(a){this.l=a;this.i=NaN;this.g=new ZA(100)};
oE=function(a,b,c){this.g=a;this.l=b;this.i=c};
tE=function(a,b,c){var d=void 0===d?pE:d;a:{var e,f;if((null===(e=b.signalServiceEndpoint)||void 0===e?0:e.signal)&&a.g.oO&&(e=a.g.oO[b.signalServiceEndpoint.signal])){var h=new e;break a}if((null===(f=b.continuationCommand)||void 0===f?0:f.request)&&a.g.qF&&(f=a.g.qF[b.continuationCommand.request])){h=new f;break a}for(h in b)if(a.g.Ls[h]&&(f=a.g.Ls[h])){h=new f;break a}h=void 0}if(!h)return a.i(new g.Gm("Error: No request builder found for command.",b)),g.If({});c=void 0===c?{}:c;f={context:g.JD(b.clickTrackingParams)};
(e=h.l(b))?(h.g(f,e,c),c=f):(g.Km(new g.Gm("Error: Failed to create Request from Command.",b)),c=void 0);if(!c)return a.i(new g.Gm("Error: Failed to build request for command.",b)),g.If({});f=qE(g.rE(h.i()));var l;var m=(b=null===(l=null===(m=b.commandMetadata)||void 0===m?void 0:m.webCommandMetadata)||void 0===l?void 0:l.apiUrl)?qE(b):void 0;m&&(f=m);return sE(a,c,f,d,h.o())};
g.uE=function(a,b,c){var d=void 0===d?pE:d;var e=void 0===e?!0:e;b.context||(b.context=g.JD(void 0,e));c=qE(c);return sE(a,b,c,d,void 0)};
sE=function(a,b,c,d,e){d=void 0===d?pE:d;var f=JSON.stringify(b),h=g.cl(c)?"same-origin":"cors",l=g.cl(c)?"same-origin":"include";return yia().then(function(m){m={method:"POST",mode:h,credentials:l,headers:m,body:f};var n;e&&(n=Object.assign({yT:c,zT:m,identity:d,requestTime:(0,g.M)(),AT:0},e));return a.l.fetch(c,m,n)}).then(function(m){return g.If(m)})};
qE=function(a){a=g.bl(a,{key:g.K("INNERTUBE_API_KEY")});var b=g.K("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(ud(a)));return a};
yia=function(){return Kl().then(function(a){a=Object.assign({"Content-Type":"application/json","X-Goog-Visitor-Id":g.K("VISITOR_DATA")},a);return g.If(a)})};
zia=function(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=vE[b];if(c){var d=new RegExp(c),e=g.p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(vE).forEach(function(h){var l=g.p(h);h=l.next().value;l=l.next().value;b!==h&&f.push(l)});
d=new RegExp(f.join("|"));a.sort(function(h,l){return h.length-l.length});
e=g.p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]};
g.rE=function(a){return"/youtubei/v1/"+zia(a)};
wE=function(){};
xE=function(){};
yE=function(){};
zE=function(){};
AE=function(){};
BE=function(){this.o=new Zaa;this.i=new $aa;this.l=new bba;this.g=new cba};
CE=function(){BE.g||(BE.g=new BE);return BE.g};
Aia=function(a,b,c){var d=b.json();b.redirected?aba(a.i,b.status,c,qd(g.sd(5,b.url))):b.ok?a.l.g.o("/client_streamz/youtube/web/network/one_platform_request_success",c):(a.g.g.o("/client_streamz/youtube/web/network/one_platform_request_failed",b.status,c),d.then(function(e){g.Lm(new g.Gm("Error: API fetch failed",b.status,b.url,e))}));
return d};
g.EE=function(){if(!DE){var a={Ls:{playlistEditEndpoint:AE,subscribeEndpoint:xE,unsubscribeEndpoint:yE,modifyChannelNotificationPreferenceEndpoint:zE}},b=CE();Jl();oE.g=new oE(a,b,Qca);DE=oE.g}return DE};
KE=function(a){if(!FE){var b,c=new Uint8Array(256),d=new Uint8Array(256);var e=1;for(b=0;256>b;b++)c[e]=b,d[b]=e,e^=e<<1^(e>>7&&283);FE=new Uint8Array(256);GE=[];HE=[];IE=[];JE=[];for(var f=0;256>f;f++){e=f?d[255^c[f]]:0;e^=e<<1^e<<2^e<<3^e<<4;e=e&255^e>>>8^99;FE[f]=e;b=e<<1^(e>>7&&283);var h=b^e;GE.push(b<<24|e<<16|e<<8|h);HE.push(h<<24|GE[f]>>>8);IE.push(e<<24|HE[f]>>>8);JE.push(e<<24|IE[f]>>>8)}}this.g=[0,0,0,0];this.l=new Uint8Array(16);e=[];for(c=0;4>c;c++)e.push(a[4*c]<<24|a[4*c+1]<<16|a[4*
c+2]<<8|a[4*c+3]);for(d=1;44>c;c++)a=e[c-1],c%4||(a=(FE[a>>16&255]^d)<<24|FE[a>>8&255]<<16|FE[a&255]<<8|FE[a>>>24],d=d<<1^(d>>7&&283)),e.push(e[c-4]^a);this.o=e;this.i=16};
LE=function(a){for(var b=a.o,c=a.g[0]^b[0],d=a.g[1]^b[1],e=a.g[2]^b[2],f=a.g[3]^b[3],h=3;0<=h&&!(a.g[h]=-~a.g[h]);h--);for(h=4;40>h;){var l=GE[c>>>24]^HE[d>>16&255]^IE[e>>8&255]^JE[f&255]^b[h++];var m=GE[d>>>24]^HE[e>>16&255]^IE[f>>8&255]^JE[c&255]^b[h++];var n=GE[e>>>24]^HE[f>>16&255]^IE[c>>8&255]^JE[d&255]^b[h++];f=GE[f>>>24]^HE[c>>16&255]^IE[d>>8&255]^JE[e&255]^b[h++];c=l;d=m;e=n}a=a.l;c=[c,d,e,f];for(d=0;16>d;)a[d++]=FE[c[0]>>>24]^b[h]>>>24,a[d++]=FE[c[1]>>16&255]^b[h]>>16&255,a[d++]=FE[c[2]>>
8&255]^b[h]>>8&255,a[d++]=FE[c[3]&255]^b[h++]&255,c.push(c.shift())};
ME=function(a){this.u=new Uint8Array(64);this.l=new Uint8Array(64);this.o=0;this.B=new Uint8Array(64);this.i=0;this.u.set(a);this.l.set(a);for(a=0;64>a;a++)this.u[a]^=92,this.l[a]^=54;this.reset()};
NE=function(a,b,c){for(var d=[],e=0;16>e;e++)d.push(b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3]),c+=4;for(b=16;64>b;b++)c=d[b-7]+d[b-16],e=d[b-2],c+=(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10,e=d[b-15],c+=(e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3,d.push(c);b=a.g[0];c=a.g[1];e=a.g[2];for(var f=a.g[3],h=a.g[4],l=a.g[5],m=a.g[6],n=a.g[7],q,r,u=0;64>u;u++)q=n+Bia[u]+d[u]+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&l^~h&m),r=((b>>>2|b<<30)^(b>>>13|b<<19)^(b>>>22|b<<10))+(b&c^b&e^c&e),n=m,m=l,l=h,h=f+q,f=e,e=c,c=b,b=q+
r;a.g[0]=b+a.g[0]|0;a.g[1]=c+a.g[1]|0;a.g[2]=e+a.g[2]|0;a.g[3]=f+a.g[3]|0;a.g[4]=h+a.g[4]|0;a.g[5]=l+a.g[5]|0;a.g[6]=m+a.g[6]|0;a.g[7]=n+a.g[7]|0};
PE=function(a){var b=new Uint8Array(32),c=64-a.i;55<a.i&&(c+=64);var d=new Uint8Array(c);d[0]=128;for(var e=8*a.o,f=1;9>f;f++){var h=e%256;d[c-f]=h;e=(e-h)/256}a.update(d);for(c=0;8>c;c++)b[4*c]=a.g[c]>>>24,b[4*c+1]=a.g[c]>>>16&255,b[4*c+2]=a.g[c]>>>8&255,b[4*c+3]=a.g[c]&255;OE(a);return b};
OE=function(a){a.g=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];a.o=0;a.i=0};
Cia=function(a,b,c){return g.hh(this,function e(){var f,h,l,m,n,q,r,u;return g.Aa(e,function(w){switch(w.g){case 1:if(!(window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey)){w.Ic(2);break}h=window.crypto.subtle;l={name:"HMAC",hash:{name:"SHA-256"}};m=["sign"];n=new Uint8Array(b.length+c.length);n.set(b);n.set(c,b.length);ta(w,3);return g.sa(w,h.importKey("raw",a,l,!1,m),5);case 5:return q=w.i,g.sa(w,h.sign(l,q,n),6);case 6:r=w.i;f=new Uint8Array(r);ua(w,2);break;case 3:va(w);case 2:if(!f){u=
new ME(a);u.update(b);u.update(c);var B=PE(u);u.update(u.u);u.update(B);B=PE(u);u.reset();f=B}return w["return"](f)}})})};
QE=function(a,b,c){return g.hh(this,function e(){var f,h,l,m,n,q,r,u;return g.Aa(e,function(w){switch(w.g){case 1:if(!(window.crypto&&window.crypto.subtle&&window.crypto.subtle.importKey)){w.Ic(2);break}h=window.crypto.subtle;l={name:"AES-CTR",length:a.length};m=["encrypt"];n={name:"AES-CTR",counter:c,length:128};ta(w,3);return g.sa(w,h.importKey("raw",a,l,!1,m),5);case 5:return q=w.i,g.sa(w,h.encrypt(n,q,b),6);case 6:r=w.i;f=new Uint8Array(r);ua(w,2);break;case 3:va(w);case 2:if(!f){u=new KE(a);
for(var B=0;4>B;B++)u.g[B]=c[4*B]<<24|c[4*B+1]<<16|c[4*B+2]<<8|c[4*B+3];u.i=16;f=u.encrypt(b)}return w["return"](f)}})})};
TE=function(a){this.g=a;this.iv=RE(xn())};
Dia=function(a,b){return g.hh(a,function d(){var e=this;return g.Aa(d,function(f){return f["return"](Cia(e.g.i,b,e.iv))})})};
UE=function(){this.g=0;this.l=void 0;this.i=new Uint8Array(4096);this.view=new DataView(this.i.buffer);g.v.TextEncoder&&(this.l=new TextEncoder)};
VE=function(a,b){var c=a.g+b;if(!(a.i.length>=c)){for(var d=2*a.i.length;d<c;)d*=2;c=new Uint8Array(d);c.set(a.i);a.i=c;a.view=new DataView(a.i.buffer)}};
WE=function(a,b){if(268435455<b){VE(a,4);for(var c=b&1073741823,d=0;4>d;d++)a.view.setUint8(a.g,c&127|128),c>>=7,a.g+=1;b=Math.floor(b/268435456)}for(VE(a,4);127<b;)a.view.setUint8(a.g,b&127|128),b>>=7,a.g+=1;a.view.setUint8(a.g,b);a.g+=1};
XE=function(a,b,c){WE(a,b<<3|2);b=c.length;WE(a,b);VE(a,b);a.i.set(c,a.g);a.g+=b};
YE=function(a,b,c){if(a.l)c=a.l.encode(c);else{for(var d=[],e=0,f=0;f<c.length;f++){var h=c.charCodeAt(f);128>h?d[e++]=h:(2048>h?d[e++]=h>>6|192:(55296==(h&64512)&&f+1<c.length&&56320==(c.charCodeAt(f+1)&64512)?(h=65536+((h&1023)<<10)+(c.charCodeAt(++f)&1023),d[e++]=h>>18|240,d[e++]=h>>12&63|128):d[e++]=h>>12|224,d[e++]=h>>6&63|128),d[e++]=h&63|128)}c=new Uint8Array(RE(d).buffer)}XE(a,b,c)};
ZE=function(a){return new Uint8Array(a.i.buffer,0,a.g)};
$E=function(a){var b=a.gl,c=a.deviceId,d=a.userAgent,e=a.clientName,f=a.clientVersion;this.hl=a.hl;this.gl=b;this.deviceId=c;this.userAgent=d;this.clientName=e;this.clientVersion=f};
aF=function(){this.referrer=document.location.toString();this.signatureTimestamp=18484};
bF=function(a){var b=a.encryptedOnesiePlayerRequest,c=a.encryptedClientKey,d=a.iv;a=a.hmac;this.serializeResponseAsJson=!0;this.encryptedOnesiePlayerRequest=b;this.encryptedClientKey=c;this.iv=d;this.hmac=a};
cF=function(a){var b=a.value;this.name=a.name;this.value=b};
dF=function(a){this.client=a.client};
eF=function(a){this.i=a;this.o=this.g=0;this.l=-1};
fF=function(a){var b=Up(a.i,a.g);++a.g;if(128>b)return b;for(var c=b&127,d=1;128<=b;)b=Up(a.i,a.g),++a.g,d*=128,c+=(b&127)*d;return c};
gF=function(a,b){for(a.o=b;a.g+1<=a.i.totalLength;){var c=a.l;0>c&&(c=fF(a));var d=c>>3,e=c&7;if(d===b)return!0;if(d>b){a.l=c;break}switch(e){case 0:fF(a);break;case 1:a.g+=8;break;case 2:c=fF(a);a.g+=c;break;case 5:a.g+=4}}return!1};
hF=function(a,b){var c=void 0===c?null:c;if(!gF(a,b))return c;c=fF(a);var d=Sp(a.i,a.g,c);a.g+=c;return d};
Eia=function(a){this.iv=hF(new eF(a),5)};
Fia=function(a){this.i=null;a=new eF(a);var b=-1;b=void 0===b?0:b;this.g=gF(a,1)?fF(a):b;0===this.g&&(a=hF(a,4),this.i=new Eia(new Lp([a])))};
iF=function(a){var b=a.httpHeaders,c=a.postBody;this.url=a.url;this.httpHeaders=b;this.postBody=c};
Gia=function(a){this.body=null;this.body=hF(new eF(a),4)};
jF=function(a){this.Xs=a.Xs};
kF=function(){this.contentPlaybackContext=new aF};
lF=function(a){var b=a.videoId,c=a.playbackContext;this.Tt=a.Tt;this.videoId=b;this.playbackContext=c};
mF=function(a,b){if(b+1<=a.totalLength){var c=Up(a,b);c=128>c?1:192>c?2:224>c?3:240>c?4:5}else c=0;if(1>c||!(b+c<=a.totalLength))return[-1,b];if(1===c)c=Up(a,b++);else if(2===c){c=Up(a,b++);var d=Up(a,b++);c=(c&63)+64*d}else if(3===c){c=Up(a,b++);d=Up(a,b++);var e=Up(a,b++);c=(c&31)+32*(d+256*e)}else if(4===c){c=Up(a,b++);d=Up(a,b++);e=Up(a,b++);var f=Up(a,b++);c=(c&15)+16*(d+256*(e+256*f))}else c=b+1,a.focus(c),Pp(a,c,4)?c=Qp(a).getUint32(c-a.l,!0):(d=Up(a,c+2)+256*Up(a,c+3),c=Up(a,c)+256*(Up(a,
c+1)+256*d)),b+=5;return[c,b]};
nF=function(a){this.i=a;this.g=new Lp};
Hia=function(a){var b,c;a:{var d,e=a.L().Xd;if(e){var f=null===(c=g.io("yt-player-bandaid-host"))||void 0===c?void 0:c.JN;if(f&&e.baseUrl){c=new xq("https://"+f+e.baseUrl);if(e=null===(d=a.Mq)||void 0===d?void 0:d.urlQueryOverride)for(d=Fq(e),d=g.p(Object.entries(d)),e=d.next();!e.done;e=d.next())f=g.p(e.value),e=f.next().value,f=f.next().value,c.set(e,f);if(!c.get("id")){e=Ms(a.videoId);d=[];if(e)for(e=g.p(e),f=e.next();!f.done;f=e.next())d.push(f.value.toString(16).padStart(2,"0"));d=d.join("");
if(!d){c=void 0;break a}c.set("id",d)}break a}}c=void 0}!c&&(null===(b=a.Mq)||void 0===b?0:b.url)&&(c=new xq(a.Mq.url));if(!c)return"";c.set("ack","1");c.set("cpn",a.clientPlaybackNonce);c.set("opr","1");c.set("pvi","135");c.set("pai","140");c.set("oad","0");c.set("ovd","0");c.set("oaad","0");c.set("oavd","0");return c.sc()};
oF=function(a,b){var c=this;this.videoData=a;this.g=b;this.playerResponse=this.iv=this.u=this.i=null;this.o=new Rx;this.C=!1;this.B=new g.G(this.F,1E4,this);this.l=new TE(a.L().Xd.g);this.J=new nF(function(d,e){e.getLength();switch(d){case 10:var f=new Fia(e);switch(f.g){case 5:c.g.tick("orfb");break;case 0:c.iv=f.i.iv}c.u=f.g;break;case 11:switch(c.u){case 0:Iia(c,e)}c.u=null}})};
pF=function(a,b){a.o.reject(b);a.B.stop();a.g.tick("ore");a.i&&a.i.abort()};
qF=function(a){for(var b=a.i;b.Gf();){var c=b.mq();c.getLength();a.J.feed(c)}};
Iia=function(a,b){g.hh(a,function d(){var e=this,f,h,l,m;return g.Aa(d,function(n){if(1==n.g)return e.g.tick("orpr"),e.C=!0,f=Sp(b),g.sa(n,e.l.decrypt(f,e.iv),2);h=n.i;l=new Gia(new Lp([h]));m=l.body;e.playerResponse=g.v.TextDecoder?(new TextDecoder).decode(m):g.cg(m);e.g.tick("oprr");e.o.resolve(e.playerResponse);e.B.stop();n.g=0})})};
Kia=function(a){return g.hh(a,function c(){var d=this,e,f;return g.Aa(c,function(h){if(1==h.g)return g.sa(h,Jia(d),2);e=h.i;f={Xs:e};return h["return"](new jF(f))})})};
Jia=function(a){return g.hh(a,function c(){var d=this,e,f,h,l,m;return g.Aa(c,function(n){if(1==n.g)return g.sa(n,Lia(d),2);if(3!=n.g)return e=n.i,f=d.l.g.encryptedClientKey,h=d.l.iv,g.sa(n,Dia(d.l,e),3);l=n.i;m={encryptedOnesiePlayerRequest:e,encryptedClientKey:f,iv:h,hmac:l};return n["return"](new bF(m))})})};
Lia=function(a){return g.hh(a,function c(){var d=this,e,f,h;return g.Aa(c,function(l){switch(l.g){case 1:var m=d.videoData.L().V;m="https://youtubei.googleapis.com/youtubei/"+m.innertubeApiVersion+"/player?key="+m.innertubeApiKey;var n=[new cF({name:"Content-Type",value:"application/x-protobuf"})],q=d.videoData.Qd();q&&n.push(new cF({name:"Authorization",value:"Bearer "+q}));q=d.videoData.L().V;var r=q.Cm,u=q.Bm,w=g.Oc;switch(q.Mk){case "TVHTML5":var B=7;break;default:B=56}e=new iF({url:m,httpHeaders:n,
postBody:new lF({Tt:new dF({client:new $E({hl:r,gl:u,deviceId:"Rory",userAgent:w,clientName:B,clientVersion:q.innertubeContextClientVersion})}),videoId:d.videoData.videoId,playbackContext:new kF})});ta(l,2);return g.sa(l,d.l.encrypt(e.zd()),4);case 4:f=l.i;ua(l,3);break;case 2:return va(l),h=new g.ps("onesie.request.encrypt",!1),l["return"](Promise.reject(h));case 3:return l["return"](f)}})})};
Qia=function(a,b,c,d,e,f){a.ba();a.uc=!0;var h=a.L();return g.P(h.experiments,"html5_onesie")&&g.P(h.experiments,"html5_onesie_player_config")&&"yt"===h.P?Mia(a).then(function(){return Nia(a,d)}).then(function(){rF(a)},function(l){l=rs(l);
if(l.g)return Promise.reject(l);c(l);return sF(a,b,c,"onesie")}):Oia(h,a)?Pia(a,e,f).then(function(){rF(a)},function(l){l=rs(l);
if(l.g)return rF(a),Promise.reject(l);c(l);return sF(a,b,c,"op")}):sF(a,b,c,"gvi")};
Oia=function(a,b){return g.P(a.experiments,"web_player_gvi_wexit")&&"yt"===a.P&&"adunit"!==kx(b)?!0:!1};
Mia=function(a){a=a.L().Xd;if(!a||!a.g)return Promise.reject(new g.ps("onesie.unavailable.hotconfig",!1,{key:"0"}));a={};window.fetch||(a.fetch="0");window.Uint8Array||(a.uint8="0");return 0<Object.keys(a).length?(a.onesie="0",Promise.reject(new g.ps("html5.missingapi",!1,a))):Promise.resolve()};
Nia=function(a,b){return g.hh(this,function d(){var e,f,h,l,m;return g.Aa(d,function(n){if(1==n.g)return a.fetchType="onesie",e=new oF(a,b),g.sa(n,e.fetch(),2);f=n.i;h={player_response:f};a.uc=!1;a.Ld(h,!0);if(a.uc||cx(a))return n["return"](Promise.resolve());l={};a.errorCode?(l.ec=a.errorCode,l.ed=a.errorDetail,l.es=a.Yg||""):l.successButUnplayable="1";m=new g.ps("onesie.response",!1,l);return n["return"](Promise.reject(m))})})};
Pia=function(a,b,c){return g.hh(this,function e(){var f,h,l,m,n,q;return g.Aa(e,function(r){if(1==r.g)return f=g.EE(),h=LD(a,b,c),l=g.rE(Ria),g.sa(r,g.uE(f,h,l),2);m=r.i;a.uc=!1;a.Ld({raw_player_response:m},!0);if(a.errorCode)return n={ec:a.errorCode,ed:a.errorDetail,es:a.Yg||""},r["return"](Promise.reject(new g.ps("auth",!0,n)));if(!a.uc&&!cx(a))return q=a.isAd()?"auth":"manifest.net.retryexhausted",r["return"](Promise.reject(new g.ps(q,!0,{successButUnplayable:"1"})));r.g=0})})};
sF=function(a,b,c,d){return g.hh(this,function f(){var h,l,m,n,q,r,u,w,B;return g.Aa(f,function(z){switch(z.g){case 1:h=function(){return!0},l=function(D){D=rs(D);
if(D.g)return Promise.reject(D);c(D);return!1},n=(m=a.isAd())?1:3,q=0;
case 2:if(!(q<n)){z.Ic(4);break}r=b;if(!(0<q)){z.Ic(5);break}return g.sa(z,g.Zf(5E3),6);case 6:u={playerretry:q,playerretrysrc:d},m||(u.recover="embedded"),r=g.bl(b,u);case 5:return g.sa(z,Sia(a,r).then(h,l),7);case 7:if(w=z.i)return z["return"]();q++;z.Ic(2);break;case 4:B=m?"auth":"manifest.net.retryexhausted";if(!m&&1E-4>Math.random())try{g.Lm(new g.Gm("b/152131571",btoa(b)))}catch(D){}return z["return"](Promise.reject(new g.ps(B,!0,{backend:"gvi"})))}})})};
Sia=function(a,b){return g.hh(this,function d(){var e,f,h,l,m,n,q,r,u,w,B,z,D,F;return g.Aa(d,function(H){if(1==H.g){a.fetchType="gvi";e=a.L();if(g.P(e.experiments,"enable_gvi_via_post")){f={format:"RAW",method:"POST",withCredentials:!0,timeout:3E4};h=g.bl(b,{action_display_post:1});var V=a.PC?{ytrext:a.PC}:void 0;if(l=V)f.yb=l}else f={format:"RAW",method:"GET",withCredentials:!0,timeout:3E4},h=b;m={};e.sendVisitorIdHeader&&a.visitorData&&(m["X-Goog-Visitor-Id"]=a.visitorData);(n=g.iq(e.experiments,
"debug_dapper_trace_id"))&&(m["X-Google-DapperTraceInfo"]=n);(q=g.iq(e.experiments,"debug_sherlog_username"))&&(m["X-Youtube-Sherlog-Username"]=q);0<Object.keys(m).length&&(f.headers=m);r=(0,g.M)();u=function(ca){if(!a.ba()){ca=ca?ca.status:-1;var fd=400===ca||429===ca,hd=((0,g.M)()-r).toFixed();hd={backend:"gvi",rc:""+ca,rt:hd};var Lc="manifest.net.connect";429===ca?Lc="auth":200<ca&&(Lc="manifest.net.badstatus");return Promise.reject(new g.ps(Lc,fd,hd))}};
w=function(ca){return u(ca.Cj)};
return g.sa(H,Dr(g.Vm,h,f).then(void 0,w),2)}B=H.i;if(!B||!B.responseText)return H["return"](u(B));a.uc=!1;z=g.Xk(B.responseText);a.Ld(z,!0);if(a.errorCode)return D={ec:a.errorCode,ed:a.errorDetail,es:a.Yg||""},H["return"](Promise.reject(new g.ps("auth",!0,D)));if(!a.uc&&!cx(a))return F=a.isAd()?"auth":"manifest.net.retryexhausted",H["return"](Promise.reject(new g.ps(F,!0,{successButUnplayable:"1"})));H.g=0})})};
rF=function(a){g.hh(this,function c(){var d,e,f,h;return g.Aa(c,function(l){if(1==l.g)return ta(l,2),d=g.EE(),e=MD(a),f=g.rE(g.tF),g.sa(l,g.uE(d,e,f),4);if(2!=l.g)return h=l.i,a.Ld({raw_watch_next_response:h},!1),ua(l,0);va(l);l.g=0})})};
Tia=function(a,b,c,d,e,f){function h(){g.rv("virc");zv("virc")}
g.rv("vir");zv("vir");a=Qia(a,b,c,d,e,f);a.then(h,h);return a};
xF=function(a,b,c,d,e,f,h){g.N.call(this);var l=this;this.u=a;this.La=new xia;this.N=c;this.Ec=d;this.Kg=f;this.R=h;this.V=new nA((0,g.x)(this.getCurrentTime,this),(0,g.x)(this.getPlaybackRate,this),(0,g.x)(this.getPlayerState,this),function(m,n){m!=g.hu("endcr")||g.S(l.l,32)||uF(l);e(m,n,l.Wa)});
g.C(this,this.V);this.F=null;this.Da=new WB;this.da=null;this.W=new XC(a,this.Ec);g.C(this,this.W);this.W.subscribe("ctmp",this.Ya,this);this.Ad=!0;this.K=this.o=null;this.X=[];this.ca=new VB;this.P=this.Ca=null;this.ea=new VB;this.ab=null;this.Lg=this.ua=!1;this.Gb=NaN;this.Be=new g.G(this.WM,500,this);g.C(this,this.Be);this.l=new g.oB;this.Zb=[];this.Wa=b;this.Ga=new g.ln;g.C(this,this.Ga);this.g=new g.yw(a);vF(this,function(){return{}});
wF(this);this.i=null;this.va=new g.G((0,g.x)(this.hL,this),15E3);g.C(this,this.va);a=g.O(this.u.experiments,"html5_source_buffer_attach_delay_time")||15E3;this.Ae=new g.G((0,g.x)(this.OM,this),a);g.C(this,this.Ae);this.Kh=0;this.ae=this.Xa=!1;this.na=NaN;this.za=!1;this.Ka=0;this.jd=new g.G(this.Fv,4500,this);g.C(this,this.jd);this.Wd=!1;this.kb=NaN;this.ma=new jE;g.C(this,this.ma);lE(this.ma,"bufferhealth",function(){var m=l.C;return m.i?Fx(m.i):0});
lE(this.ma,"bandwidth",(0,g.x)(this.TF,this));lE(this.ma,"networkactivity",(0,g.x)(this.WF,this),!0);lE(this.ma,"livelatency",(0,g.x)(this.Sy,this));lE(this.ma,"rawlivelatency",(0,g.x)(this.Wy,this));this.ma.start();this.kd=!0;this.Ih=0;this.Yd=!1;this.zb=1;this.tb=(0,g.x)(this.wH,this);kB(this.tb);this.R.subscribe("visibilitystatechange",this.tb);this.Ng=this.Ve=this.Ue=0;Uia(this);g.C(this,this.C);this.la=null;this.Te=!1;this.ze=[];this.Xd=this.Jh=0;this.Zd=this.Lh=!1;this.Kc=new g.G(function(){l.Jc("ad.rebuftimeout",
"RETRYABLE_ERROR","vps."+l.l.state.toString(16))});
g.C(this,this.Kc);this.ye=null;this.Mg=0};
vF=function(a,b){!a.B||a.B.ba();var c=new eE(a.g,a.u,b,(0,g.x)(a.getDuration,a),(0,g.x)(a.getCurrentTime,a),(0,g.x)(a.aG,a),(0,g.x)(a.Ec.getPlayerSize,a.Ec),(0,g.x)(a.getAudioTrack,a),(0,g.x)(a.getPlaybackRate,a),(0,g.x)(a.Ct,a),a.Kg,(0,g.x)(a.mG,a),function(){return a.N.tick("qoes")},function(){return PB(a.C)});
a.B=new $D(c)};
wF=function(a){!a.J||a.J.ba();a.J=new MC(a.g,a.u,a.R);a.J.subscribe("newelementrequired",function(b){return yF(a,b)});
a.J.subscribe("qoeerror",a.hA,a);a.J.subscribe("playbackstalledatstart",function(){return a.O("playbackstalledatstart")});
a.J.subscribe("signatureexpiredreloadrequired",function(){return a.O("signatureexpired")});
a.J.subscribe("releaseloader",function(){return zF(a)});
a.J.subscribe("pausevideo",function(){return a.pauseVideo()});
a.J.subscribe("clienttemp",a.Ya,a);a.J.subscribe("highrepfallback",a.RK);a.J.subscribe("playererror",a.Jc,a)};
AF=function(a){var b=a.B;b.i&&b.i.send();if(b.g){var c=b.g;if(!c.ba()&&c.i){c.currentPlayerState="paused";var d=TD(c);d.isFinal=!0;d.send();g.Hj(c.l);c.dispose()}}b.qoe&&(c=b.qoe,c.provider.aa("html5_stopVideo_ping_block_killswitch")||c.F)&&("PL"===c.Ob&&(c.Ob="N"),d=g.dD(c.provider),g.jD(c,d,"vps",[c.Ob]),c.provider.aa("html5_qoe_user_intent_match_health")&&!c.i&&(0<=c.l&&(c.g.user_intent=[c.l.toString()]),c.i=!0),c.reportStats(d));b.dispose();g.Nd(a.B)};
g.BF=function(a){return a.i&&a.i.ti()?a.i.sa():null};
CF=function(a){if(a.g.isValid())return!0;a.Jc("api.invalidparam",void 0,"invalidVideodata.1");return!1};
DF=function(a,b){a.ua=void 0===b?!1:b;if(!CF(a)||a.ca.started)g.It(a.u)&&a.g.ra&&a.ca.started&&!a.ca.isFinished()&&!a.ua&&a.Hs();else{a.ca.start();var c=a.B;g.dD(c.provider);c.qoe&&nia(c.qoe);a.Hs()}};
Via=function(a){var b=a.g,c=a.Ec.getPlayerSize(),d=a.Kg(),e=uia(a.u,a.g,c,d,a.R.isFullscreen());Tia(a.g,e,function(f){return a.Dj(f)},a.N,c,d).then(void 0,function(f){a.g!=b||b.ba()||(f=rs(f),"auth"==f.errorCode&&a.g.errorDetail?a.Jc("auth",unescape(a.g.errorReason),qs(f.details),a.g.errorDetail,a.g.Yg||void 0):a.Dj(f))})};
Wia=function(a,b){a.o?a.o.Wa=new XA(b):a.ye=b};
Yia=function(a){if(!g.S(a.l,128))if(a.g.Nb(),a.kd=!0,4!=a.Wa&&(a.X=g.nb(a.g.hd)),bx(a.g)){EF(a).then(function(){a.ba()||(a.ua&&FF(a),GF(a,a.g),a.ca.g=!0,HF(a,"dataloaded"),a.ea.started?IF(a):a.ua&&JF(a,qB(qB(a.l,512),1)),lia(a.W,a.P))});
a.Ya("loudness",""+a.g.yn.toFixed(3),!0);var b=aga(a.g);b&&a.Ya("playerResponseExperiment",b,!0);Xia(a)}else HF(a,"dataloaded")};
EF=function(a){zF(a);a.P=null;var b=mha(a.u,a.g,a.R.i);a.Ca=b;a.Ca.then((0,g.x)(a.RL,a),(0,g.x)(a.SL,a));return b};
KF=function(a){a.i&&a.i.Xk();DF(a);CF(a)&&!g.S(a.l,128)&&(a.ea.started||(a.ea.start(),JF(a,qB(qB(a.l,8),1))),IF(a))};
IF=function(a){a.ba();if(!a.ea.isFinished()&&a.ca.isFinished()&&!g.S(a.l,128)&&!a.X.length){if(!a.V.started){var b=a.V;b.started=!0;b.i()}if(!LF(a)){a.o&&(b=a.o.ea,a.Lg=!!b.g&&!!b.o);a.ea.isFinished()||(a.ea.g=!0);!a.g.ra||0<a.g.ii&&!Pw(a.g)||(a.seekTo(Infinity),MF(a,"readying"),a.R.isBackground()&&(a.ae=!0));b=a.B;if(b.g){var c=b.g;c.provider.videoData.fm&&c.provider.videoData.Vo&&(XD(c,"connected"),YD(c))}b.qoe&&(b=b.qoe,b.provider.videoData.sn&&rD(b,b.provider.videoData.sn),b.provider.videoData.ra&&
(c=b.provider.videoData.fa,Pw(b.provider.videoData)&&rD(b,"manifestless"),c&&Wr(c)&&rD(b,"live-segment-"+Wr(c).toFixed(1))),"yt"!==b.provider.g.P&&(b.g.len=[b.provider.videoData.lengthSeconds.toFixed(2)]));a.O("playbackready",a);wv("pbr",a.N.timerName)||(a.N.tick("pbr"),zv("pbr"))}}};
uF=function(a,b,c){b=void 0===b?!0:b;(void 0===c||c)&&a.i&&a.i.pause();b=b?new g.oB(14):new g.oB;JF(a,b)};
GF=function(a,b){if(b.endSeconds&&b.endSeconds>b.startSeconds){var c=b.endSeconds;a.da&&(a.removeCueRange(a.da),a.da=null);a.da=new g.eu(1E3*c,0x7ffffffffffff);a.da.namespace="endcr";a.addCueRange(a.da)}};
PF=function(a,b,c,d){a.g.ya=c;d&&NF(a,b,d);var e=(d=g.OF(a))?Ip(d):"";d=a.B;e=new WC(a.g,c,b,e);if(d.qoe){c=d.qoe;d=g.dD(c.provider);g.jD(c,d,"vfs",[e.g.id,e.i,c.ua,e.reason]);c.ua=e.g.id;e=c.provider.J();if(0<e.width&&0<e.height){e=[Math.round(e.width),Math.round(e.height)];var f=g.Rt();1<f&&e.push(f);g.jD(c,d,"view",e)}c.R||(c.provider.videoData.kh&&rD(c,"rqs"),c.provider.videoData.fa&&Ir(c.provider.videoData.fa)&&(c.g.preload=["1"]));c.R=!0;c.F=!0;g.jD(c,d,"vps",[c.Ob]);c.reportStats(d)}c=a.W;
c.o=0;c.i=0;a.O("internalvideoformatchange",a.g,"m"==b)};
g.OF=function(a){var b=QF(a);return xu(b)||!a.P?null:g.bb(a.P.wa.videoInfos,(0,g.x)(b.o,b))};
NF=function(a,b,c){if(c!=a.g.kc){var d=!a.g.kc;a.g.kc=c;"m"!=b&&(b=d?"i":"a");var e=a.B;c=new WC(a.g,c,b,"");if(e.qoe){e=e.qoe;var f=g.dD(e.provider);c.g.id!==e.K&&(g.jD(e,f,"afs",[c.g.id,e.K,c.reason]),e.K=c.g.id)}d||a.O("internalaudioformatchange",a.g,"m"==b)}};
RF=function(a,b){a.X=a.X.filter(function(c){return b!=c});
a.ea.started&&IF(a)};
LF=function(a){var b;(b=!!a.X.length)||(a=a.V.g.g[0],b=!!a&&-0x8000000000000>=a.start);return b};
UF=function(a,b){if(a.i&&b.sa()==a.i.sa()&&(b.isView()||a.i.isView())){if(b.isView()||!a.i.isView())g.nn(a.Ga),a.i=b,SF(a),MB(a.C,a.i),a.J.i=a.i}else{a.i&&TF(a);if(!a.l.isError()){var c=rB(a.l,512);g.S(c,8)&&!g.S(c,2)&&(c=qB(c,1));b.isView()&&(c=rB(c,64));JF(a,c)}a.i=b;a.i.setLoop(a.Yd);a.i.setPlaybackRate(a.zb);SF(a);MB(a.C,a.i);a.J.i=a.i}};
TF=function(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;if(a.i){var d=a.getCurrentTime();0<d&&(a.C.F=d);MB(a.C,null);a.J.i=null;VF(a);a.o&&(a.o.ca.fb(),WF(a,c));a.va.stop();if(a.i){!a.ea.started||a.l.isError()||g.S(a.l,2)||JF(a,qB(a.l,512));g.nn(a.Ga);if(b||!a.i.isView())a.i.stopVideo(),XF(a);a.i=null}}};
QF=function(a){if(a.P){var b=a.W;var c=a.P,d=YF(a);a=a.R.isBackground();var e=Os();e=wu("auto",e,!1,"s");if(xu(e)){e=YC(b,c);var f;a:if((f=c.wa)&&f.videoInfos.length){for(var h=g.p(f.videoInfos),l=h.next();!l.done;l=h.next())if(l=l.value,l.l){f=l.xa().Rb;break a}f=f.videoInfos[0].xa().Rb}else f=0;Pl()&&!g.It(b.g)&&br(c.wa.videoInfos[0])&&(f=Math.min(f,g.Vq.large));f=new uu(0,f,!1,"o");e=zu(e,f);f=0;!b.g.g||g.zt(b.g)||Xl()||g.P(b.g.experiments,"mweb_uniplayer_auto_quality")||g.P(b.g.experiments,"hls_for_vod")||
(f=g.Vq.medium);if(h=g.O(b.g.experiments,"html5_default_quality_cap")){var m=c.wa.g()&&!c.videoData.Eg&&!c.videoData.Fc;l=g.O(b.g.experiments,"html5_quality_cap_min_age_secs");m&&l&&(m=b.g.schedule.B,m=(0,g.M)()-m>1E3*l);m&&(f=f?Math.min(f,h):h)}h=g.O(b.g.experiments,"html5_random_playback_cap");l=/[a-h]$/;h&&l.test(c.videoData.clientPlaybackNonce)&&(f=f?Math.min(f,h):h);(h=g.O(b.g.experiments,"html5_not_vp9_supported_quality_cap"))&&!as('video/webm; codecs="vp9"')&&(f=f?Math.min(f,h):h);if(l=h=g.O(b.g.experiments,
"html5_hfr_quality_cap"))a:{l=c.wa;if(l.g())for(l=g.p(l.videoInfos),m=l.next();!m.done;m=l.next())if(32<m.value.xa().fps){l=!0;break a}l=!1}l&&(f=f?Math.min(f,h):h);(h=g.O(b.g.experiments,"html5_live_quality_cap"))&&c.videoData.ra&&(f=f?Math.min(f,h):h);f=new uu(0,f,!1,"d");e=zu(e,f);f=g.O(b.g.experiments,"html5_background_quality_cap");h=g.O(b.g.experiments,"html5_background_cap_idle_secs");a=!f||"auto"!==Os()||g.Ak()/1E3<h?yu:a?new uu(0,f,!1,"v"):yu;a=zu(e,a);e=g.O(b.g.experiments,"html5_autonav_quality_cap");
f=g.O(b.g.experiments,"html5_autonav_cap_idle_secs");e=e&&c.videoData.pj&&g.Ak()/1E3>f?new uu(0,e,!1,"e"):yu;a=zu(zu(zu(a,e),bD(b,c)),c.videoData.PD);e=new uu(0,0,!1,"o");1<b.playbackRate&&(e=new uu(0,480,!0,"o"));e=zu(a,e)}else b.aa("html5_perf_cap_override_sticky")&&(e=zu(e,bD(b,c)));b=zu(zu(zu(c.videoData.Hr,e),c.videoData.Jx),d)}else b=yu;return b};
YF=function(a,b){if(a.F){var c=a.F;var d=void 0===b?!1:b;c=(void 0===d?0:d)&&c.ca?c.ca:c.C}else c=a.g.Ep()&&a.g.fa&&Hr(a.g.fa)?(g.P(a.u.experiments,"html5_drm_initial_constraint_from_config")?a.g.dm:g.P(a.u.experiments,"html5_drm_start_from_null_constraint"))?yu:DC:yu;a.Zd&&(c=zu(c,ZF));return c};
bG=function(a){if(!a.ba()&&!g.S(a.l,128)&&a.g.wa){if(a.g.wa.g())$F(a);else{var b=QF(a),c=a.g;a:{var d=a.g.zh;if(b.g){for(var e=g.p(d),f=e.next();!f.done;f=e.next()){f=f.value;var h=f.Pd(),l=g.Vq[h.xa().quality];if((!b.l||"auto"!==h.xa().quality)&&l<=b.g){d=f;break a}}d=d[d.length-1]}else d=d[0]}c.kf=d;PF(a,b.reason,aG(a,a.g.kf))}a.l.sb()&&(a.C.ea=!1,a.playVideo())}};
$F=function(a){if(a.g.wa&&a.g.wa.g()){var b=QF(a),c=a.g.ya;if(!cG(a,"html5_dynamic_av1_hybrid_threshold")&&c&&"1"===c.ob){var d=iu(a.u);if(d&&d<c.xa().Rb&&d!=a.Mg){a.Mg=d;EF(a);return}}if(a.o&&(a=a.o,!a.ba()&&!vu(a.C.o,b)&&a.i)){var e=a.C.o;LA(a,Kga(a.C,b));yA(a);c=aA(a.C)&&"m"==b.reason&&a.C.N;d=a.g.Zb&&"l"==b.reason&&Az(a.i);b=("b"==b.reason||"o"==b.reason)&&e.g>b.g;c||d||b?a.O("reattachrequired"):(Bz(a.i)&&HA(a,a.i,a.o),a.ca.fb())}}};
dG=function(a){cG(a,"html5_nonblocking_media_capabilities")?$F(a):bG(a)};
fG=function(a){gea(a.g.fa,{cpn:a.g.clientPlaybackNonce,c:a.u.deviceParams.c,cver:a.u.deviceParams.cver});var b=a.u,c=a.g,d=new g.jq,e=hq(b,{hasSubfragmentedFmp4:c.hasSubfragmentedFmp4,Ik:c.Ik});d.u=e;d.Kl=b.aa("html5_max_drift_per_track_secs")||b.aa("html5_rewrite_manifestless_for_sync")||b.aa("html5_check_segnum_discontinuity");d.Lg=b.aa("html5_unify_sqless_flow");d.tb=b.aa("html5_unrewrite_timestamps");d.Xa=b.aa("html5_stop_overlapping_requests");d.Ca=g.O(b.experiments,"html5_min_readbehind_secs");
d.Mz=g.O(b.experiments,"html5_min_readbehind_cap_secs");g.It(b)&&(d.Ca=g.O(b.experiments,"tvhtml5_min_readbehind_secs"));d.Ih=b.aa("html5_append_init_while_paused");d.Xd=g.O(b.experiments,"html5_max_readahead_bandwidth_cap");d.Zd=g.O(b.experiments,"html5_post_interrupt_readahead");d.R=g.O(b.experiments,"html5_subsegment_readahead_target_buffer_health_secs");d.kb=g.O(b.experiments,"html5_subsegment_readahead_timeout_secs");d.Tw=g.O(b.experiments,"html5_subsegment_readahead_min_buffer_health_secs");
d.ab=g.O(b.experiments,"html5_subsegment_readahead_min_buffer_health_secs_on_timeout");d.Vw=g.O(b.experiments,"html5_subsegment_readahead_min_load_speed");d.Kg=g.O(b.experiments,"html5_subsegment_readahead_load_speed_check_interval");d.Ww=g.O(b.experiments,"html5_subsegment_readahead_seek_latency_fudge");d.Ga=b.aa("html5_peak_shave");d.LC=b.aa("html5_peak_shave_always_include_sd");d.Lw=b.aa("html5_restrict_streaming_xhr_on_sqless_requests");d.Ip=g.O(b.experiments,"html5_max_headm_for_streaming_xhr");
d.XC=b.aa("html5_pipeline_manifestless_allow_nonstreaming");d.UD=b.aa("html5_prefer_server_bwe3");d.Ng=1024*g.O(b.experiments,"html5_video_tbd_min_kb");d.VD=b.aa("html5_probe_live_using_range");d.wo=b.aa("html5_last_slice_transition");d.Rw=b.aa("html5_store_xhr_headers_readable");d.po=b.aa("html5_enable_packet_train_response_rate");if(e=g.O(b.experiments,"html5_probe_secondary_during_timeout_miss_count"))d.Ae=e,d.Xw=1;d.Ka=g.O(b.experiments,"html5_probe_primary_delay_base_ms")||d.Ka;d.ye=b.aa("html5_no_placeholder_rollbacks");
d.Sw=b.aa("html5_subsegment_readahead_enable_mffa");b.aa("html5_allow_video_keyframe_without_audio")&&(d.da=!0);d.Be=b.aa("html5_reattach_on_stuck");d.ax=b.aa("html5_webm_init_skipping");d.Te=g.O(b.experiments,"html5_request_size_padding_secs")||d.Te;d.Zo=b.aa("html5_log_timestamp_offset");d.zb=b.aa("html5_abs_buffer_health");d.uo=b.aa("html5_interruption_resets_seeked_time");d.Wd=g.O(b.experiments,"html5_max_live_dvr_window_plus_margin_secs")||d.Wd;d.Kc=b.aa("html5_explicitly_dispose_xhr");d.ae=
g.O(b.experiments,"html5_probe_primary_failure_factor");d.Qw=b.aa("html5_skip_invalid_sq");d.Kw=b.aa("html5_restart_on_unexpected_detach");d.To=b.aa("html5_log_live_discontinuity");d.Nw=b.aa("html5_rewrite_manifestless_for_continuity");d.kd=g.O(b.experiments,"html5_max_drift_per_track_secs");d.Ow=b.aa("html5_rewrite_manifestless_for_sync");d.Ve=g.O(b.experiments,"html5_static_abr_resolution_shelf");d.Lh=!b.aa("html5_encourage_array_coalescing");d.lo=b.aa("html5_crypto_period_secs_from_emsg");d.ma=
b.aa("html5_defer_slicing");d.Gb=g.O(b.experiments,"html5_buffer_health_to_defer_slice_processing");d.mo=b.aa("html5_disable_reset_on_append_error");b.aa("html5_dynamic_av1_hybrid_threshold")&&(d.no=!0,d.aB=iu(b));b.aa("html5_media_common_config_killswitch")||(d.o=c.maxReadAheadMediaTimeMs/1E3||d.o,e=b.schedule,e.i.g()===e.policy.l?d.J=10:d.J=c.minReadAheadMediaTimeMs/1E3||d.J,b.aa("web_player_halftime_dai")&&(d.o=5,d.J=5),d.Ec=c.readAheadGrowthRateMs/1E3||d.Ec);qh&&(d.P=41943040);d.ea=!Bs();g.It(b)||
!Bs()?(e=b.experiments,d.B=8388608,d.F=524288,d.Kh=5,d.va=2097152,d.V=1048576,d.Iw=1.5,d.HC=!1,d.K=4587520,Sl()&&(d.K=786432),d.g*=1.1,d.i*=1.1,d.Wa=!0,d.P=d.B,d.Aa=d.F,d.ze=g.P(e,"persist_disable_player_preload_on_tv")||g.P(e,"persist_disable_player_preload_on_tv_for_living_room")||!1):b.g&&(d.g*=1.3,d.i*=1.3);g.$r&&Nl("crkey")&&(e="CHROMECAST/ANCHOVY"==b.deviceParams.cmodel,d.B=20971520,d.F=1572864,e&&(d.K=812500,d.N=1E3,d.Zw=5,d.V=2097152));!b.aa("html5_disable_firefox_init_skipping")&&g.Is&&(d.Wa=
!0);b.supportsGaplessAudio()||(d.oo=!1);g.pt&&(d.Ci=!0);if(Pw(c)){d.so=!0;d.Pw=!0;if("ULTRALOW"==c.latencyClass||"LOW"==c.latencyClass&&!b.aa("html5_disable_low_pipeline"))d.kp=2,d.Lz=4;d.Wg=c.defraggedFromSubfragments;c.Vb&&(d.La=!0);g.ex(c)&&(d.ca=!1);d.ko=g.Ut(b)}c.isAd()&&(d.za=0,d.jd=0);Rw(c)&&(d.X=!0);d.la=b.aa("html5_enable_subsegment_readahead_v3")||b.aa("html5_ultra_low_latency_subsegment_readahead")&&"ULTRALOW"==c.latencyClass;d.na=c.kh;d.zo=d.na&&(/^rq[a-f]/.test(c.clientPlaybackNonce)||
rx(c));$l()&&/(K\d{3}|KS\d{3}|KU\d{3})/.test(b.deviceParams.cmodel)&&!b.aa("html5_disable_move_pssh_to_moov")&&Hr(c.fa)&&(d.Wa=!1);Hr(c.fa)&&(d.Be=!1);if(c.ra){e=Wr(c.fa);var f=g.O(b.experiments,"html5_live_abr_head_miss_fraction"),h=g.O(b.experiments,"html5_live_abr_repredict_fraction");f&&e&&(d.Ad=Math.min(e*f,d.Ad));h&&e&&(d.N=Math.min(1E3*e*h,d.N))}f=0;b.aa("html5_live_use_alternate_bandwidth_window_sizes")&&(f=b.schedule.policy.g,c.ra&&(f=g.O(b.experiments,"ULTRALOW"==c.latencyClass?"html5_live_ultra_low_latency_bandwidth_window":
c.isLowLatencyLiveStream?"html5_live_low_latency_bandwidth_window":"html5_live_normal_latency_bandwidth_window")||f));e=b.schedule;e.K.g=Pw(c)?.5:0;if(!e.policy.i&&f&&(e=e.i,f=Math.round(f*e.resolution),f!==e.i)){h=Array(f);var l=Math.min(f,e.o?e.i:e.valueIndex),m=e.valueIndex-l;0>m&&(m+=e.i);for(var n=0;n<l;++n)h[n]=e.values[(m+n)%e.i];for(;n<f;++n)h[n]=Infinity;e.i=f;e.values=h;e.valueIndex=l%f;e.o=l===f;e.B=!0;e.F=Ws(e)}d.Da=c.ra;switch(Qw(c)){case 21530001:d.eB=b.aa("html5_live_smoothly_extend_max_seekable_time");
d.la=!0;"LOW"==c.latencyClass?d.R=g.O(b.experiments,"html5_jumbo_mobile_subsegment_readahead_target"):"ULTRALOW"==c.latencyClass&&(d.R=g.O(b.experiments,"html5_jumbo_ull_subsegment_readahead_target"));d.ye=!0;break;case 2153E4:d.la=!1}d.Ci=d.Ci||c.Ci;d.W=c.tg;rx(c)&&(d.ua=!0);c.tg&&!Hr(c.fa)&&b.aa("html5_hack_gapless_init")&&(d.Ue=!0);(e=g.O(b.experiments,"html5_gapless_ad_byterate_multiplier"))&&c.tg&&c.isAd()&&(d.g*=e,d.i*=e);px(c)&&(d.l=c.videoId,d.zb=!0,px(c)&&c.Vs&&(d.C=!0));b.aa("html5_drm_initial_constraint_from_config")?
d.Zb=c.dm:d.Zb=b.aa("html5_drm_start_from_null_constraint");c=g.O(b.experiments,"html5_deadzone_multiplier")||1;(e=g.O(b.experiments,"html5_sticky_reduces_discount_by"))&&"auto"!==Os()&&(c-=e);d.g*=c;d.i*=c;if(c=g.O(b.experiments,"html5_request_sizing_multiplier"))d.Jw=c;d.Yd=g.O(b.experiments,"html5_min_upgrade_health")||d.Yd;Fs(b.o,Gs.BITRATE)&&(d.K=NaN);b.o.l&&(d.qo="; "+Gs.EXPERIMENTAL.name+"=allowed");"auto"!==Os()&&(d.Mg=0);d.XD=b.aa("html5_rec_2020_matrix_correction_killswitch");c=d.Da&&!b.aa("html5_pause_appends_killswitch");
d.Da=c||b.aa("html5_never_pause_appends");g.P(b.experiments,"html5_prefer_low_quality_audio_means_64k")&&g.pt&&(d.RD=!0);b=b.experiments;g.P(b,"html5_validate_lengthless_slices_killswitch")&&(d.Yw=!1);g.P(b,"html5_audio_only_eos_fix_killswitch")&&(d.Jh=!0);g.P(b,"html5_reject_promise_if_seeking_to_head_killswitch")&&(d.fE=!0);b=a.getAudioTrack();b=b.Ab.isDefault?void 0:b;c=a.Da;c.keys=[];c.values=[];a.o=new xA(a.u.schedule,d,a.g.fa,a.g.wa,QF(a),b,a.V);a.o.subscribe("needkeyinfo",a.JB,a);a.o.subscribe("newDrmInfo",
a.GL,a);a.o.subscribe("videoformatchange",a.uH,a);a.o.subscribe("audioformatchange",a.jL,a);a.o.subscribe("error",a.Dj,a);a.o.subscribe("ctmp",a.Ya,a);a.o.subscribe("reattachrequired",a.YN,a);a.o.subscribe("metadata",a.DB,a);a.o.subscribe("constraint",a.eN,a);a.o.subscribe("timestamp",a.dH,a);a.o.subscribe("localmediachange",a.kL,a);a.o.subscribe("localplaybackfailed",a.XE,a);d=eG(a)?!0:a.ua&&g.It(a.u)&&a.g.ra;a.o.initialize(a.getCurrentTime(),QF(a),d);a.g.probeUrl&&(a.o.la=a.g.probeUrl);(a.X.length||
a.ua)&&WF(a,!1);OB(a.C,a.o);a.J.g=a.o;a.ye&&(a.o.Wa=new XA(a.ye));qx(a.g)&&(a.o.g.ro=2)};
Uia=function(a){a.C=new KB(a.g,a.u,a.R,function(){return g.eb(a.X,"ad")});
a.C.subscribe("seekto",function(b,c){a.C.F=b;var d=a.La;d.mediaTime=b;d.seeking=!0;c||gG(a);a.da&&b>a.g.endSeconds&&isFinite(b)&&(a.removeCueRange(a.da),a.da=null);b<g.hG(a)-.01&&(d=rB(a.l,2),g.S(d,8)&&(d=rB(d,4)),JF(a,d));a.O("SEEK_TO",a,b)});
a.C.subscribe("seekstart",function(){return iG(a)});
a.C.subscribe("seekend",function(){return a.O("SEEK_COMPLETE")});
a.C.subscribe("newmediaelementrequired",function(){return yF(a)});
a.C.subscribe("ended",function(){return uF(a)});
a.C.subscribe("ctmp",a.Ya,a);a.C.subscribe("qoeerror",a.hA,a);a.C.subscribe("livereadaheadchanged",function(b){var c=a.B;c.qoe&&(c=c.qoe,g.jD(c,g.dD(c.provider),"lra",[b]),lD(c,"live-readahead-seconds",b.toString()))});
a.C.subscribe("releaseadsprerolllock",function(){return RF(a,"ad")})};
zF=function(a){a.o&&(a.o.dispose(),a.o=null,OB(a.C,null),a.J.g=null);VF(a)};
VF=function(a){if(a.K){if(a.o){var b=Pw(a.g)&&a.g.Vb&&!a.g.isAd();CA(a.o,b)}a.K.dispose();a.K=null}};
kG=function(a){if(a.K)return a.K.Mm;cG(a,"html5_disable_loader_reorder")&&jG(a);Zia(a);return a.K?a.K.Mm:null};
Zia=function(a){if(cG(a,"html5_application_media_source"))a.O("requestmediasource",a);else{var b=g.O(a.u.experiments,"html5_source_buffer_attach_retry_limit")||0;a.Kh<b&&a.Ae.start();try{var c=a.i.qq()}catch(d){if(SC(a.J,"html5.missingapi",{updateMs:"1"}))return;g.Lm(d);d.message="window.URL object overwritten by external code";window.setTimeout(function(){throw d;},0);
a.Jc("html5.missingapi","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","updateMs.1")}lG(a,c)}};
lG=function(a,b){cG(a,"html5_disable_loader_reorder")||jG(a);a.K=b;mea(a.K,function(c){try{if(a.K&&(!c||a.K==c)){var d=a.getDuration();!d&&Pw(a.g)&&(d=g.O(a.u.experiments,"html5_manifestless_media_source_duration")||3600);a.K.isView()?(c=d,c>a.K.getDuration()&&ys(a.K,c)):ys(a.K,d);var e=a.o,f=a.K;e.P&&(BA(e),e.P=!1);AA(e);if(!zs(f)){var h=e.i.g.info.mimeType+e.g.qo,l=e.o.g.info.mimeType,m=new ts("fakesb"==l?new Cr:f.l.addSourceBuffer(l),$q(l),!1),n=new ts("fakesb"==h?new Cr:f.l.addSourceBuffer(h),
$q(h),!0);f.g=m;f.i=n;g.C(f,m);g.C(f,n)}fz(e.i,f.i);fz(e.o,f.g);e.l=f;e.resume();on(f.g,e.va,e);on(f.i,e.va,e);e.g.Zo&&1E-4>=Math.random()&&e.Uc("toff",""+f.g.supports(1),!0);e.zg();a.O("mediasourceattached");a.Ae.stop()}}catch(q){g.Lm(q),a.Dj(new g.ps("fmt.unplayable",!0,{msi:"1",ename:q.name}))}})};
jG=function(a){a.o?g.Pf(a.o.seek(a.getCurrentTime()-a.Fb()),function(){}):fG(a)};
yF=function(a,b){b=void 0===b?!1:b;return Ba(function(c){if(1==c.g)return a.o&&a.o.ba()&&zF(a),a.O("newelementrequired"),b?g.sa(c,EF(a),2):c.Ic(2);g.S(a.l,8)&&a.playVideo();c.g=0})};
gG=function(a){g.S(a.l,32)||(JF(a,qB(a.l,32)),g.S(a.l,8)&&a.pauseVideo(!0),a.O("beginseeking",a));mG(a)};
iG=function(a){g.S(a.l,32)?(JF(a,sB(a.l,16,32)),a.O("endseeking",a)):g.S(a.l,2)||JF(a,qB(a.l,16))};
nG=function(a){if(a.g.fa)return Xr(a.g.fa,a.getCurrentTime()-a.Fb());if((!cG(a,"html5_disable_limit_ingestion_tvos")||Rl())&&a.i){var b=a.i.getStartDate();if(b&&(b=b.getTime(),!isNaN(b)))return b/1E3+a.getCurrentTime()}return NaN};
HF=function(a,b){a.O("internalvideodatachange",void 0===b?"dataupdated":b,a,a.g)};
SF=function(a){(0,g.y)("loadstart loadeddata loadedmetadata play playing progress pause ended suspend seeking seeked timeupdate durationchange ratechange error waiting resize".split(" "),function(b){this.Ga.I(this.i,b,this.vH,this)},a);
a.u.Ng&&a.i.ti()&&(a.Ga.I(a.i,"webkitplaybacktargetavailabilitychanged",a.bK,a),a.Ga.I(a.i,"webkitcurrentplaybacktargetiswirelesschanged",a.cK,a))};
pG=function(a){cG(a,"html5_enable_timeupdate_timeout")&&!a.g.ra&&oG(a)&&a.Be.start()};
oG=function(a){if(!a.i)return!1;var b=a.i.getCurrentTime();a=a.i.getDuration();return!!(1<b&&b>a-.3)};
rG=function(a){window.clearInterval(a.Gb);a.va.stop();a.g.Ye=!0;a.u.Ye=!0;a.u.na=0;g.qG(a);g.S(a.l,8)&&JF(a,rB(a.l,65));var b=a.B;if(b.g){var c=b.g;if(!c.i){g.P(c.provider.g.experiments,"disable_embedpage_playback_logging")||16623!==c.provider.videoData.ir||g.Ej(Error("Playback for EmbedPage"));var d=g.SD(c,"playback");c.u=[10+c.provider.videoData.Kk,10,10,40+c.provider.videoData.Lm-c.provider.videoData.Kk,40];pia(c.g);d.i=RD(c,!0);d.send();if(c.provider.videoData.Pq){d=c.provider.g;var e=c.provider.videoData;
e={html5:"1",video_id:e.videoId,cpn:e.clientPlaybackNonce,ei:e.eventId,ptk:e.Pq,oid:e.kC,ptchn:e.jC,pltype:e.lC,content_v:lx(e)};d=g.Dd(d.F+"ptracking",e);UD(c,d)}c.provider.videoData.fm&&(XD(c,"playback"),c.l||YD(c));c.provider.videoData.wf||WD(c);c.i=!0;c=c.g;c.g=c.provider.i();c.lastUpdateTime=g.dD(c.provider);!(0===c.i&&5>c.g)&&2<c.g-c.i&&(c.i=c.g);c.C=!0}}b.i&&(b=b.i,c=g.dD(b.provider),0>b.g&&(b.g=c,b.delay.start()),b.i=c,b.l=c);a.jd.fb();a.O("playbackstarted");g.tk()&&((a=g.Ka("yt.scheduler.instance.clearPriorityThreshold"))?
a():vk(0))};
g.qG=function(a){var b=a.getCurrentTime(),c=a.g;!wv("pbs",a.N.timerName)&&xv.measure&&xv.getEntriesByName&&(xv.getEntriesByName("mark_nr")[0]?yv("mark_nr"):yv());c.videoId&&a.N.info("docid",c.videoId);c.eventId&&a.N.info("ei",c.eventId);c.clientPlaybackNonce&&a.N.info("cpn",c.clientPlaybackNonce);0<c.startSeconds&&a.N.info("start",c.startSeconds.toString());a.i&&a.i.vi()&&a.N.info("paused",1);c.ya?a.N.info("fmt",Ip(c.ya)):a.N.info("fmt","-1");c.Sj&&a.N.info("yt_pre",a.Lg?"2":"1");a.R.isFullscreen()&&
a.N.info("yt_fs","1");a.N.info("cmt",b.toFixed(3));if(a.o){b=a.o.ea;window&&window.performance&&window.performance.getEntriesByName&&(c=window.performance.getEntriesByName(b.o),c.length&&(c=c[0],b.yd("vri",c.fetchStart),b.yd("vdns",c.domainLookupEnd),b.yd("vreq",c.requestStart),b.yd("fvb",c.responseStart),b.yd("vrc",c.responseEnd)),c=window.performance.getEntriesByName(b.g),c.length&&(c=c[0],b.yd("ari",c.fetchStart),b.yd("adns",c.domainLookupEnd),b.yd("areq",c.requestStart),b.yd("avb",c.responseStart),
b.yd("arc",c.responseEnd)));b=b.u;for(var d in b)a.N.tick(d,b[d])}};
mG=function(a,b){b=void 0===b?!1:b;if(a.i&&a.g){var c=a.C,d=a.l.sb(),e=c.getCurrentTime(),f=c.isAtLiveHead(e);if(c.N&&f){var h=c.N;if(h.g&&!(e>=h.i&&e<h.l)){var l=h.g.Df(e);-1!=l&&(h.i=h.g.td(l),h.l=h.i+h.g.getDuration(l),l=(0,g.E)()/1E3-h.g.Iu(l),l-=h.u(),h.o.add(l))}}c.l&&(f&&(f=c.l,h=c.i?Fx(c.i):0,f.B++,3>f.B||(0,g.E)()-f.J<f.g.J||(f.J=(0,g.E)(),f.l.push(h),50<f.l.length&&f.l.shift())),f=c.l,gB(f,e,void 0===d?!0:d),hB(f,e),d&&HB(c,!0));c=a.getCurrentTime();!a.o||g.S(a.l,4)&&g.ex(a.g)||(d=a.o,e=
c,d.l&&d.l.i&&(e-=!isNaN(d.V)&&d.g.tb?d.V:0,d.B!=e&&d.resume(),d.J.l&&!As(d.l)&&(f=d.B<=e&&e<d.B+10,h=ks(d.l.i.Dd(),d.B+KA),f&&h&&(d.J.l=!1)),d.J.l||(d.B=e),d.Ka.fb()));5<c&&(a.C.F=c);(d=g.tk())?g.uk(a.na):g.Hj(a.na);!g.vB(a.l)&&a.i.vi()||g.S(a.l,128)||(e=(0,g.x)(a.uG,a),0==a.i.hj().length?a.na=d?g.rk(e,100):g.Fj(e,100):a.na=d?g.rk(e,500):g.Fj(e,500));a.g.Sh=c;!b&&a.l.sb()&&(a.B.Wc(),a.g.ra&&(0,g.E)()>a.Ng+6283&&(!a.isAtLiveHead()||a.g.fa&&Tr(a.g.fa)||(c=a.B,c.qoe&&(c=c.qoe,e=c.provider.o(),d=g.dD(c.provider),
oD(c,d,e),e=e.B,isNaN(e)||g.jD(c,d,"e2el",[e.toFixed(3)]))),g.Ut(a.u)&&a.Ya("rawlat","l."+nE(a.ma,"rawlivelatency").toFixed(3)),a.Ng=(0,g.E)()),a.g.ya&&dr(a.g.ya)&&(c=g.BF(a))&&c.videoHeight!=a.Xd&&(a.Xd=c.videoHeight,PF(a,"a",aG(a,a.g.kf))));kia(a.W,a.P,a.i,a.R.isBackground())&&dG(a);c=a.W;d=a.g.ya;0>=g.O(c.g.experiments,"hfr_dropped_framerate_fallback_threshold")||!(d&&d.xa()&&32<d.xa().fps)?c=!1:3<=c.l?(c.l=0,c=!0):c=!1;c&&$ia(a);a.O("progresssync",a,b)}};
$ia=function(a){a.B.onError("qoe.restart","droprate."+a.W.C);a.u.o.B=!1;EF(a).then(function(){return FF(a)})};
aG=function(a,b){if("auto"==b.ya.xa().quality&&dr(b.Pd())&&a.g.zh)for(var c=g.p(a.g.zh),d=c.next();!d.done;d=c.next())if(d=d.value,d.getHeight()==a.Xd&&"auto"!=d.ya.xa().quality)return d.Pd();return b.Pd()};
JF=function(a,b){if(!g.tB(a.l,b)){var c=new g.xB(b,a.l);a.l=b;var d=!a.Zb.length;a.Zb.push(c);var e=a.i&&a.i.Sm();if(g.zB(c,1)&&!g.S(c.zi,16)&&!e&&g.S(a.l,8)&&!g.S(a.l,64)&&a.o&&(a.o.da=!0,sG(a),a.i&&5<=Fx(a.i))){e=a.W;var f=a.P;f.videoData.ya?(6E4<(0,g.E)()-e.F&&(e.o=0),e.o++,e.F=(0,g.E)(),4!==e.o?e=!1:($C(f.videoData.ya),e=!0)):e=!1;e&&dG(a)}(e=g.O(a.u.experiments,"html5_ad_timeout_ms"))&&a.g.isAd()&&g.S(b,1)&&(g.S(b,8)||g.S(b,16))?a.Kc.start(e):a.Kc.stop();(0>g.yB(c,8)||g.zB(c,1024))&&a.va.stop();
!g.zB(c,8)||a.g.Ye||g.S(c.state,1024)||a.va.start();g.S(c.state,8)&&0>g.yB(c,16)&&!g.S(c.state,32)&&!g.S(c.state,2)&&a.playVideo();g.S(c.state,2)&&fx(a.g)&&(e=a.getCurrentTime(),a.g.lengthSeconds!=e&&(a.g.lengthSeconds=e,HF(a)),mG(a,!0));g.zB(c,2)&&(a.Fv(!0),sG(a));g.zB(c,128)&&(sG(a),cG(a,"html5_release_on_error")&&a.Tf());a.g.fa&&a.g.ra&&!a.Lh&&(0>g.yB(c,8)?(e=a.g.fa,e.u&&e.u.stop()):g.zB(c,8)&&a.g.fa.resume());a.C.Pb(c);a.B.Pb(c);if(d&&!a.ba())try{for(var h=g.p(a.Zb),l=h.next();!l.done;l=h.next()){var m=
l.value;a.V.Pb(m);a.O("statechange",m)}}finally{a.Zb.length=0}}};
tG=function(a,b){g.S(a.l,128)||(JF(a,sB(a.l,1028,9)),a.Ya("dompaused",b),a.O("onDompaused"))};
FF=function(a){if(!a.i||!a.g.wa)return!1;var b=null;a.g.wa.g()?(b=kG(a),a.o.resume()):(zF(a),a.g.kf&&(b=a.g.kf.Um()));var c=b;var d=a.i.rq();b=!1;d&&null!==c&&c.g===d.g||(a.N.tick("vta"),zv("vta"),0<a.getCurrentTime()&&(b=a.getCurrentTime(),a.C.F=b),a.i.Xk(c),a.K&&vk(4),!a.g.Ye&&g.uB(a.l)&&a.va.start(),b=!0);g.S(a.l,2)||(c=a.C,c.J||!(0<c.F)||c.i&&0<c.i.getCurrentTime()||c.seekTo(c.F));a:if(c=b,g.Xw(a.g)&&a.i)if((d=a.g.fc)&&a.i.ti()){var e=a.i.sa();if(a.F)if(e!=a.F.element)XF(a);else if(c&&"fairplay"==
d.flavor&&!Rl())XF(a);else break a;a.F=new FC(e,a.g,a.u);a.F.subscribe("licenseerror",a.bL,a);a.F.subscribe("qualitychange",a.dL,a);a.F.subscribe("heartbeatparams",a.tH,a);a.F.subscribe("keystatuseschange",a.ZK,a);a.F.subscribe("hdproberequired",a.cL,a);a.F.subscribe("ctmp",a.Ya,a);c=g.p(a.Da.keys);for(d=c.next();!d.done;d=c.next())d=a.Da.get(d.value),JC(a.F,d);cG(a,"html5_eme_loader_sync")||(a=a.Da,a.keys=[],a.values=[])}else a.Jc("fmt.unplayable","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","drm.1");return b};
XF=function(a){a.F&&(a.F.dispose(),a.F=null)};
aja=function(a){a.u.o.i=!1;a.B.onError("qoe.restart",qs({e:"fmt.noneavailable",detail:"hdr"}));EF(a).then(function(){return FF(a)})};
uG=function(a,b){b=void 0===b?!1:b;return a.g.ra&&(a.isAtLiveHead()&&(cG(a,"html5_videoplayer_getmaxseekabletimeforux_check_pause_killswitch")||!g.S(a.l,4))||g.QB(a.C)||g.ex(a.g))?a.getCurrentTime():g.hG(a,b)};
g.hG=function(a,b){return a.C.Bc(void 0===b?!1:b)};
g.vG=function(a,b){(a.Ad=b)||a.va.stop();if(a.g.fa)if(b)a.g.fa.resume();else{var c=a.g.fa;c.u&&c.u.stop()}g.P(a.u.experiments,"html5_suspend_loader")&&a.o&&(b?a.o.resume():WF(a,!0));g.P(a.u.experiments,"html5_fludd_suspend")&&(g.S(a.l,2)||b?g.S(a.l,512)&&b&&JF(a,rB(a.l,512)):JF(a,qB(a.l,512)));c=a.B;c.qoe&&(c=c.qoe,g.jD(c,g.dD(c.provider),"stream",[b?"A":"I"]))};
wG=function(a){return a.i?a.i.oq():a.Yd};
xG=function(a){a.i&&(a.K?(XF(a),VF(a),kG(a)):(a.g.kf&&a.g.kf.Ev(),a.i.stopVideo()),a.playVideo())};
yG=function(a,b){g.P(a.u.experiments,"html5_log_rebuffer_reason")&&a.Ya("bufreason","r."+b+";lact."+g.Ak())};
zG=function(a,b){if(a.g.kh){var c=g.O(a.u.experiments,"html5_log_rebuffer_events");if(c&&a.i){var d=a.i.Ta();d.rt=g.dD(a.B.provider).toFixed(3);d.e=b.substr(0,3);a.ze[a.Jh++%c]=qs(d)}}};
sG=function(a){if(a.g.kh){for(var b=g.p(a.ze),c=b.next();!c.done;c=b.next())a.Ya("vpe",c.value);a.ze=[];a.Jh=0}};
MF=function(a,b){a.Ya("seekreason",b)};
AG=function(a){if(Nl("cobalt")&&Nl("nintendo switch")){var b=!window.matchMedia("screen and (max-height: 720px) and (min-resolution: 200dpi)").matches;a.Ya("nxdock",""+ +b)}};
cG=function(a,b){return g.P(a.u.experiments,b)};
WF=function(a,b){zA(a.o,b||eG(a))};
eG=function(a){var b=cG(a,"disable_prefetch_when_ad_pending_for_living_room")&&g.It(a.u),c=cG(a,"disable_prefetch_when_ad_pending_for_web");return(b||c)&&g.eb(a.X,"ad")};
Xia=function(a){if(Gw(a.g,"html5_set_debugging_opt_in")&&(a=g.an.getInstance(),!g.cn(0,183))){var b="f"+(Math.floor(183/31)+1),c=bn(b)||0;c|=268435456;0==c?delete $m[b]:(c=c.toString(16),$m[b]=c.toString());a.save()}};
bja=function(a,b,c,d){var e=c.getVideoData(),f=b.getVideoData();if(c.getPlayerState().isError())return"player-error";if(PB(b.C)>d/1E3+1)return"in-the-past";if(f.ra&&!isFinite(d))return"live-infinite";if(a.g&&((b=b.i)&&b.isView()&&(b=b.g),b&&b.hj().length>a.g&&g.Xw(e)))return"played-ranges";if(!e.wa)return null;if(!e.wa.g()||!f.wa.g())return"non-dash";if(e.wa.videoInfos[0].containerType!=f.wa.videoInfos[0].containerType)return"container";if(g.Xw(f)&&g.Xw(e))return"content-protection";a=f.wa.i[0].audio;
e=e.wa.i[0].audio;return a.sampleRate==e.sampleRate||g.$r?(a.g||2)!=(e.g||2)?"channel-count":null:"sample-rate"};
CG=function(a,b,c,d){g.A.call(this);var e=this;this.R=a;this.g=b;this.i=c;this.u=this.o=null;this.C=d-1E3*b.Fb();this.F=-1;this.J=!1;this.B=new Rx;this.B.then(void 0,function(){});
this.K=new g.G(function(){return BG(e,"timeout")},1E4);
g.C(this,this.K);this.N=isFinite(d);this.l={status:0,error:null}};
cja=function(a){var b,c,d,e,f,h;return Ba(function(l){if(1==l.g){if(a.ba())return l["return"](Promise.reject(Error(a.l.error||"disposed")));a.K.start();return g.sa(l,a.B,2)}b=a.g.i;if(b.pg())return BG(a,"ended_in_finishTransition"),l["return"](Promise.reject(Error(a.l.error)));if(!a.u||!xs(a.u))return BG(a,"next_mse_closed"),l["return"](Promise.reject(Error(a.l.error)));if(a.i.K!=a.u)return BG(a,"next_mse_mismatch"),l["return"](Promise.reject(Error(a.l.error)));c=DG(a);d=c.cB;e=c.bB;TF(a.g,!1,!0);
f=EG(b,d,e,!a.i.getVideoData().isAd());UF(a.i,f);a.N&&(a.i.seekTo(a.i.getCurrentTime()+.001,{Am:!0,hw:3}),f.play());h=b.Ta();h.cpn=a.g.getVideoData().clientPlaybackNonce;h.st=""+d;h.et=""+e;a.i.Ya("gapless",qs(h));a.g.Ya("gaplessTo",a.i.getVideoData().clientPlaybackNonce);g.zf(function(){!a.i.getVideoData().Ye&&g.uB(a.i.getPlayerState())&&rG(a.i)});
FG(a,6);a.dispose();return l["return"](Promise.resolve())})};
IG=function(a){if(a.i.getVideoData().wa){lG(a.i,a.u);FG(a,3);GG(a);var b=HG(a),c=b.cD;b=b.mO;c.subscribe("updateend",a.fl,a);b.subscribe("updateend",a.fl,a);a.fl(c);a.fl(b)}};
GG=function(a){a.g.unsubscribe("internalvideodatachange",a.Pi,a);a.i.unsubscribe("internalvideodatachange",a.Pi,a);a.g.unsubscribe("mediasourceattached",a.Pi,a);a.i.unsubscribe("statechange",a.GA,a)};
EG=function(a,b,c,d){return new g.Px(a.isView()?a.g:a,b,c,d)};
FG=function(a,b){b<=a.l.status||(a.l={status:b,error:null},5==b&&a.B.resolve(void 0))};
BG=function(a,b){if(!a.ba()&&!a.isFinished()){var c=4<=a.l.status&&"player-reload-after-handoff"!==b;a.l={status:Infinity,error:b};if(a.g&&a.i){var d=a.i.getVideoData().clientPlaybackNonce;a.g.Ya("gaplessError","cpn."+d+";msg."+b);d=a.g;d.g.tg=!1;c&&yF(d);d.o&&(c=d.o,c.g.W=!1,c.l&&RA(c))}a.B.reject(void 0);a.dispose()}};
DG=function(a){var b=a.g.i;b=b.isView()?b.i:0;var c=a.g.getVideoData().ra?Infinity:uG(a.g,!0);c=Math.min(a.C/1E3,c)+b;var d=a.N?100:0;a=c-PB(a.i.C)+d;return{zF:b,cB:a,yF:c,bB:Infinity}};
HG=function(a){return{cD:a.o.g.g,mO:a.o.i.g}};
JG=function(a){g.A.call(this);var b=this;this.l=a;this.B=this.i=this.g=null;this.F=!1;this.u=null;this.J=hga(this.l.L());this.o=null;this.C=function(){return g.zf(function(){return dja(b)})}};
eja=function(a,b,c,d){d=void 0===d?0:d;a.g&&KG(a);a.u=new Rx;a.g=b;var e=c,f=a.l.wb(),h=f.getVideoData().ra?Infinity:1E3*uG(f,!0);e>h&&(e=h-a.J.i,a.F=!0);f.getCurrentTime()>=e/1E3?a.C():(a.i=f,a.l.addEventListener(g.hu("vqueued"),a.C),e=isFinite(e)||e/1E3>a.i.getDuration()?e:0x8000000000000,a.B=new g.eu(e,0x8000000000000,{namespace:"vqueued"}),a.i.addCueRange(a.B));f=d/=1E3;e=b.getVideoData().fa;if(d&&e&&a.i){h=d;var l=0;b.getVideoData().ra&&(f=Math.min(c/1E3,uG(a.i,!0)),l=Math.max(0,f-a.i.getCurrentTime()),
h=Math.min(d,uG(b)+l));f=fea(e,h)||d;f!=d&&a.g.Ya("qvaln","st."+d+";at."+f+";rm."+(l+";ct."+h))}b=f;a.g.getVideoData().Sj=!0;a.g.getVideoData().tg=!0;DF(a.g,!0);d="";a.i&&(d=g.dD(a.i.B.provider),e=a.i.getVideoData().clientPlaybackNonce,d="crt."+(1E3*d).toFixed()+";cpn."+e);a.g.Ya("queued",d);0!=b&&a.g.seekTo(b+.01,{Am:!0,hw:3});a.o=new CG(a.J,a.l.wb(),a.g,c);c=a.o;Infinity!=c.l.status&&(FG(c,1),c.g.subscribe("internalvideodatachange",c.Pi,c),c.i.subscribe("internalvideodatachange",c.Pi,c),c.g.subscribe("mediasourceattached",
c.Pi,c),c.i.subscribe("statechange",c.GA,c),c.g.subscribe("newelementrequired",c.HB,c),c.Pi());return a.u};
dja=function(a){var b,c,d;return Ba(function(e){switch(e.g){case 1:if(a.ba()||!a.u||!a.g)return e["return"]();a.F&&uF(a.l.wb(),!0,!1);b=null;if(!a.o){e.Ic(2);break}ta(e,3);return g.sa(e,cja(a.o),5);case 5:ua(e,2);break;case 3:b=c=va(e);case 2:LG(a.l.app,a.g);var f=a.g.getPlayerType();g.MG(a.l.app,f);a.l.playVideo();b&&(f=a.g,f.Ya("newelem",b.message),yF(f));d=a.u;KG(a);return e["return"](d.resolve(void 0))}})};
KG=function(a){a.i&&(a.l.removeEventListener(g.hu("vqueued"),a.C),a.i.removeCueRange(a.B),a.i=null,a.B=null);if(a.o){if(!a.o.isFinished()){var b=a.o;Infinity!=b.l.status&&BG(b,"Canceled")}a.o=null}a.u=null;a.g=null;a.F=!1};
OG=function(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return NG(a)};
NG=function(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c};
PG=function(a,b,c,d){if(g.Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b};
SG=function(a,b){g.A.call(this);var c=this;this.data=[];this.l=a||NaN;this.i=b||null;this.g=new g.G(function(){QG(c);RG(c)});
g.C(this,this.g)};
QG=function(a){var b=(0,g.M)();a.data.forEach(function(c){c.expire<b&&TG(a,c,!0)});
a.data=(0,g.hf)(a.data,function(c){return!(c.expire<b)})};
TG=function(a,b,c){c&&a.i&&a.i(b.value)};
RG=function(a){a.g.stop();var b=Infinity;for(var c=g.p(a.data),d=c.next();!d.done;d=c.next())d=d.value,d.expire<b&&(b=d.expire);b&&isFinite(b)&&(b=Math.max(b-(0,g.E)(),0),a.g.start(b))};
g.UG=function(a,b){for(var c={},d=g.p(Object.keys(b)),e=d.next();!e.done;c={Wr:c.Wr},e=d.next())e=e.value,c.Wr=b[e],a=a.replace(new RegExp("\\$"+e,"gi"),function(f){return function(){return f.Wr}}(c));
return a};
g.VG=function(a,b){var c=Math.abs(Math.floor(a)),d=Math.floor(c/86400),e=Math.floor(c%86400/3600),f=Math.floor(c%3600/60);c=Math.floor(c%60);if(b){var h="";0<d&&(h+=" "+d+" Days");if(0<d||0<e)h+=" "+e+" Hours";d=(h+(" "+f+" Minutes ")+(c+" Seconds")).trim()}else{h="";0<d&&(h+=d+":",10>e&&(h+="0"));if(0<d||0<e)h+=e+":",10>f&&(h+="0");h+=f+":";10>c&&(h+="0");d=h+c}return 0<=a?d:"-"+d};
g.WG=function(a){return(!("button"in a)||"number"!==typeof a.button||0===a.button)&&!("shiftKey"in a&&a.shiftKey)&&!("altKey"in a&&a.altKey)&&!("metaKey"in a&&a.metaKey)&&!("ctrlKey"in a&&a.ctrlKey)};
g.XG=function(a,b){return wx(b)?(b.fetch=0,new g.vx(a,b)):new g.yw(a,b)};
YG=function(a){g.A.call(this);var b=this;this.i=null;for(var c=[],d=0;100>=d;d++)c.push(d/100);c={threshold:c};(this.g=window.IntersectionObserver?new IntersectionObserver(function(e){b.i=e[e.length-1].intersectionRatio},c):null)&&this.g.observe(a)};
fja=function(a,b){zj(a,"version",b)};
$G=function(){var a="ytp-id-"+ZG.toString();ZG++;return a};
g.aH=function(a){g.A.call(this);this.ma={};this.Ka={};this.element=this.createElement(a)};
bH=function(a,b,c,d){if("{{"===d.substr(0,2))a.Ka[d]=[b,c];else return d};
gja=function(a,b){var c=[];if(!b)return c;for(var d=g.p(b),e=d.next();!e.done;e=d.next())if(e=e.value,null!=e){var f=e.nodeType;1===f||3===f?c.push(e):e&&"string"===typeof e.A?c.push(a.createElement(e)):e.element?c.push(e.element):"string"===typeof e&&-1!==e.indexOf("\n")?e.split("\n").forEach(function(h,l){0<l&&c.push(g.bf("BR"));c.push(g.cf(h))}):c.push(g.cf(e))}return c};
cH=function(a,b,c,d){if("child"===c){g.ef(b);var e;void 0===d?e=void 0:!Array.isArray(d)||d&&"string"===typeof d.A?e=[d]:e=d;c=gja(a,e);c=g.p(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?g.oh(b,"cssText",d?d:""):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=g.xc(g.Bc(a))),b.setAttribute(c,a))};
g.T=function(a){g.aH.call(this,a);this.ca=!0;this.J=!1;this.listeners=[]};
g.dH=function(a,b){b?a.show():a.hide()};
gH=function(a){g.T.call(this,{A:"div",T:["html5-video-player"],M:{tabindex:"-1",id:a.zb?a.zb.rootElementId:a.Aa.attrs.id},H:[{A:"div",G:g.eH.VIDEO_CONTAINER,M:{"data-layer":"0"}}]});var b=this;this.app=a;this.l=this.Z(g.eH.VIDEO_CONTAINER);this.i=new g.jh(0,0,0,0);this.g=null;this.C=new g.jh(0,0,0,0);this.N=this.V=this.P=NaN;this.u=this.da=!1;this.K=NaN;this.R=!1;this.B=null;this.dispatchEvent=function(){};
this.W=function(){b.element.focus()};
this.F=null;var c=this.element.addEventListener,d=this.element.removeEventListener;this.addEventListener=function(f,h,l){c.apply(b.element,[f,h,l])};
this.removeEventListener=function(f,h,l){d.apply(b.element,[f,h,l])};
var e=a.L();e.transparentBackground&&this.Wm("ytp-transparent");"0"===e.controlsType&&this.Wm("ytp-hide-controls");e.aa("web_wn_macro_markers")&&g.I(this.element,"ytp-exp-marker-tooltip");e.aa("html5_ux_control_flexbox_killswitch")||g.I(this.element,"ytp-exp-bottom-control-flexbox");e.aa("html5_player_bottom_linear_gradient")&&g.I(this.element,"ytp-linear-gradient-bottom-experiment");g.St(e)&&(e.aa("web_player_bigger_buttons")?g.I(this.element,"ytp-exp-bigger-button"):e.aa("web_player_bigger_buttons_like_mobile")&&
g.I(this.element,"ytp-exp-bigger-button-like-mobile"));fja(this.element,fH(a));Qt(e)&&"blazer"!==e.playerStyle&&window.matchMedia&&(this.F="desktop-polymer"===e.playerStyle?[{query:window.matchMedia("(max-width: 656px)"),size:new g.He(426,240)},{query:window.matchMedia("(max-width: 856px)"),size:new g.He(640,360)},{query:window.matchMedia("(max-width: 999px)"),size:new g.He(854,480)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.He(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),
size:new g.He(854,480)},{query:window.matchMedia("(min-width: 1000px)"),size:new g.He(640,360)}]:[{query:window.matchMedia("(max-width: 656px)"),size:new g.He(426,240)},{query:window.matchMedia("(min-width: 1720px) and (min-height: 980px)"),size:new g.He(1280,720)},{query:window.matchMedia("(min-width: 1294px) and (min-height: 630px)"),size:new g.He(854,480)},{query:window.matchMedia("(min-width: 657px)"),size:new g.He(640,360)}]);this.X=e.useFastSizingOnWatchDefault;this.o=new g.He(NaN,NaN);hja(this);
this.I(a.i,"onMutedAutoplayChange",this.ln)};
hja=function(a){function b(){a.g&&g.hH(a);iH(a)!==a.R&&a.resize()}
function c(h,l){a.updateVideoData(l)}
function d(h){h.getVideoData()&&a.updateVideoData(h.getVideoData())}
function e(){a.C=new g.jh(0,0,0,0);a.i=new g.jh(0,0,0,0)}
var f=a.app.i;f.addEventListener("initializingmode",e);f.addEventListener("videoplayerreset",d);f.addEventListener("videodatachange",c);f.addEventListener("presentingplayerstatechange",b);g.Md(a,function(){f.removeEventListener("initializingmode",e);f.removeEventListener("videoplayerreset",d);f.removeEventListener("videodatachange",c);f.removeEventListener("presentingplayerstatechange",b)})};
jH=function(a){a.g&&(a.g.removeEventListener("focus",a.W),g.gf(a.g),a.g=null)};
lH=function(a){var b=g.P(a.app.L().experiments,"html5_aspect_from_adaptive_format"),c=g.U(a.app);if(c=c?c.getVideoData():null){if(c.mh()||c.nh()||c.ih())return 16/9;if(b&&c.Ep()&&c.wa.g())return b=c.wa.videoInfos[0].video,kH(b.width,b.height)}return(a=a.g)?kH(a.videoWidth,a.videoHeight):b?16/9:NaN};
mH=function(a,b,c,d){var e=c,f=kH(b.width,b.height);a.da?e=c<f?Infinity:0:isNaN(a.N)?isNaN(a.V)||(e=a.V):e=a.N;isFinite(e)||(e=Math.max(c,f));var h;e>f?h={width:b.width,height:b.width/e,aspectRatio:e}:e<f?h={width:b.height*e,height:b.height,aspectRatio:e}:h={width:b.width,height:b.height,aspectRatio:f};d||isNaN(c)||(c>e?h.width=h.height*c:c<e&&(h.height=h.width/c),h.aspectRatio=c);return h};
kH=function(a,b){return 1>Math.abs(nH*b-a)||1>Math.abs(nH/a-b)?nH:a/b};
iH=function(a){if(1===a.app.getAppState())return!1;if(6===a.app.getAppState())return!0;var b=g.U(a.app);if(!b||LF(b))return!1;var c=g.oH(a.app.i);a=!g.S(c,2)||!g.P(a.app.L().experiments,"html5_leanback_gapless_elem_display_killswitch")&&b&&b.getVideoData().tg;b=g.S(c,1024);return c&&a&&!b&&!c.isCued()};
g.hH=function(a){var b="3"===a.app.L().controlsType&&!a.u&&iH(a)&&!a.app.La||!1;a.g.controls=b;a.g.tabIndex=b?0:-1;b?a.g.removeEventListener("focus",a.W):g.P(a.app.L().experiments,"disable_focus_redirect")||a.g.addEventListener("focus",a.W)};
pH=function(a){var b=a.getPlayerSize(),c=1,d=!1,e=mH(a,b,a.getVideoAspectRatio()),f=Xl();if(iH(a)){var h=lH(a);var l=isNaN(h)||g.Ls||Hs&&g.Yt;Yl&&!g.Xd(601)?h=e.aspectRatio:l=l||"3"===a.app.L().controlsType;l?l=new g.jh(0,0,b.width,b.height):(c=e.aspectRatio/h,l=new g.jh((b.width-e.width/c)/2,(b.height-e.height)/2,e.width/c,e.height),1===c&&g.Yt&&(h=l.width-b.height*h,0<h&&(l.width+=h,l.height+=h)));f&&(a.g.style.display="");a.R=!0}else l=-b.height,Yl?l*=window.devicePixelRatio:g.Xt&&(l-=window.screen.height),
l=new g.jh(0,l,b.width,b.height),f&&(a.g.style.display="none"),a.R=!1;kh(a.C,l)||(a.C=l,g.Jt(a.app.L())?(a.g.style.setProperty("width",l.width+"px","important"),a.g.style.setProperty("height",l.height+"px","important")):g.Fh(a.g,new g.He(l.width,l.height)),g.wh(a.g,new g.Fe(l.left,l.top)),d=!0);b=new g.jh((b.width-e.width)/2,(b.height-e.height)/2,e.width,e.height);kh(a.i,b)||(a.i=b,d=!0);g.oh(a.g,"transform",1===c?"":"scaleX("+c+")");return d};
g.qH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-cast-desktop-on"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M25,13 L11,13 L11,14.63 C14.96,15.91 18.09,19.04 19.37,23 L25,23 L25,13 L25,13 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",
fill:"#fff"}}]}};
rH=function(){return{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",M:{d:"m 14.8,21.9 -4.2,-4.2 -1.4,1.4 5.6,5.6 12,-12 -1.4,-1.4 -10.6,10.6 z",fill:"#fff"}}]}};
g.sH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-chevron-back"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},H:[{A:"path",M:{d:"M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z",fill:"#fff"}}]}};
g.tH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-chevron-forward"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 32 32",width:"100%"},H:[{A:"path",M:{d:"m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z",fill:"#fff"}}]}};
uH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-clip-clear"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},H:[{A:"path",M:{d:"M14,14 L14,0 L0,0 L0,14 L14,14 Z"}},{A:"path",M:{d:"M7.15,8.35 L9.25,10.45 L10.65,9.05 L8.55,6.95 L10.7,4.8 L9.3,3.4 L7.15,5.55 L5,3.4 L3.6,4.8 L5.75,6.95 L3.65,9.05 L5.05,10.45 L7.15,8.35 Z",fill:"#fff"}}]}};
vH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-clip-end"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M2,14 L5,11 L5,3 L2,0 L9,0 L9,14 L2,14 L2,14 Z",fill:"#eaeaea"}}]}};
wH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-clip-start"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M12,14 L9,11 L9,3 L12,0 L5,0 L5,14 L12,14 Z",fill:"#eaeaea"}}]}};
g.xH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-close"]}:{A:"svg",M:{height:"100%",viewBox:"0 0 24 24",width:"100%"},H:[{A:"path",M:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",fill:"#fff"}}]}};
yH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-closed-captioning"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z",
fill:"#fff"}}]}};
zH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-code"]}:{A:"svg",M:{height:"100%",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",M:{d:"M14.1 24.9L7.2 18.0l6.9-6.9L12.0 9.0l-9.0 9.0 9.0 9.0 2.1-2.1zm7.8 .0l6.9-6.9-6.9-6.9L24.0 9.0l9.0 9.0-9.0 9.0-2.1-2.1z",fill:"#fff"}}]}};
g.AH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-dislike"]}:{A:"svg",M:{viewBox:"0 0 24 24"},H:[{A:"path",M:{d:"M0 0h24v24H0z",fill:"none"}},{A:"path",M:{d:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",fill:"#fff"}}]}};
g.BH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-error-exclamation"]}:{A:"svg",M:{fill:"#fff",viewBox:"0 0 48 48"},H:[{A:"path",M:{d:"M0 0h48v48H0V0z",fill:"none"}},{A:"path",M:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z","fill-opacity":"0.7"}}]}};
g.CH=function(){return{A:"svg",M:{fill:"#fff",height:"100%",version:"1.1",viewBox:"0 0 48 48",width:"100%"},H:[{A:"path",M:{d:"M0 0h48v48H0z",fill:"none"}},{A:"path",M:{d:"M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"}}]}};
g.DH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-like"]}:{A:"svg",M:{viewBox:"0 0 24 24"},H:[{A:"path",M:{d:"M0 0h24v24H0z",fill:"none"}},{A:"path",M:{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z",fill:"#fff"}}]}};
EH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-link"]}:{A:"svg",M:{height:"100%",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",M:{d:"M5.85 18.0c0.0-2.56 2.08-4.65 4.65-4.65h6.0V10.5H10.5c-4.14 .0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h6.0v-2.85H10.5c-2.56 .0-4.65-2.08-4.65-4.65zM12.0 19.5h12.0v-3.0H12.0v3.0zm13.5-9.0h-6.0v2.85h6.0c2.56 .0 4.65 2.08 4.65 4.65s-2.08 4.65-4.65 4.65h-6.0V25.5h6.0c4.14 .0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5z",fill:"#fff"}}]}};
FH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-loop-range"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 14 14",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M5,0 L9,0 L9,14 L5,14 L5,0 Z",fill:"#eaeaea"}}]}};
g.GH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-next"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"}}]}};
g.HH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-notifications-active"]}:{A:"svg",M:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},H:[{A:"path",M:{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}};
IH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-pause"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}};
JH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-pip"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z",fill:"#fff"}}]}};
KH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-play"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}};
LH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-prev"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z"}}]}};
g.MH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-replay"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z"}}]}};
g.NH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-settings"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z",
fill:"#fff"}}]}};
OH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-stop"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 12,25 19,25 19,11 12,11 z M 19,25 26,25 26,11 19,11 z"}}]}};
PH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-volume-high"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}};
QH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-volume-low"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}}]}};
RH=function(){return g.W?{A:"div",T:["ytp-icon","ytp-icon-volume-muted"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}};
SH=function(){};
TH=function(){var a=this;this.g=[];Sn("loggingScreenCreated",function(){for(var b=g.p(a.g),c=b.next();!c.done;c=b.next())c=c.value,c();a.g=[]});
Sn("clearWaitForNavigationJobs",function(){a.g=[]})};
g.UH=function(){TH.g||(TH.g=new TH);return TH.g};
ija=function(a){var b=g.UH();g.Ka("midTransition")?b.g.push(a):a()};
WH=function(a,b){g.A.call(this);var c=this;this.app=a;this.playerType=b;this.g=!0;this.element=null;this.u={};this.C={};this.i={};this.F=[];this.B={};this.o={};this.l=null;this.K=new Set;VH(this,"cueVideoById",this.cueVideoById);VH(this,"loadVideoById",this.loadVideoById);VH(this,"cueVideoByUrl",this.cueVideoByUrl);VH(this,"loadVideoByUrl",this.loadVideoByUrl);VH(this,"playVideo",this.playVideo);VH(this,"pauseVideo",this.pauseVideo);VH(this,"stopVideo",this.stopVideo);VH(this,"clearVideo",this.clearVideo);
VH(this,"getVideoBytesLoaded",this.getVideoBytesLoaded);VH(this,"getVideoBytesTotal",this.getVideoBytesTotal);VH(this,"getVideoLoadedFraction",this.getVideoLoadedFraction);VH(this,"getVideoStartBytes",this.getVideoStartBytes);VH(this,"cuePlaylist",this.cuePlaylist);VH(this,"loadPlaylist",this.loadPlaylist);VH(this,"nextVideo",this.nextVideo);VH(this,"previousVideo",this.previousVideo);VH(this,"playVideoAt",this.playVideoAt);VH(this,"setShuffle",this.setShuffle);VH(this,"setLoop",this.setLoop);VH(this,
"getPlaylist",this.YF);VH(this,"getPlaylistIndex",this.getPlaylistIndex);VH(this,"getPlaylistId",this.getPlaylistId);VH(this,"loadModule",this.loadModule);VH(this,"unloadModule",this.unloadModule);VH(this,"setOption",this.setOption);VH(this,"getOption",this.getOption);VH(this,"getOptions",this.getOptions);VH(this,"mute",this.mute);VH(this,"unMute",this.unMute);VH(this,"isMuted",this.isMuted);VH(this,"setVolume",this.setVolume);VH(this,"getVolume",this.getVolume);VH(this,"seekTo",this.seekTo);VH(this,
"getPlayerState",this.getPlayerState);VH(this,"getPlaybackRate",this.getPlaybackRate);VH(this,"setPlaybackRate",this.setPlaybackRate);VH(this,"getAvailablePlaybackRates",this.getAvailablePlaybackRates);VH(this,"getPlaybackQuality",function(){return c.getPlaybackQuality(1)});
VH(this,"setPlaybackQuality",this.setPlaybackQuality);VH(this,"getAvailableQualityLevels",this.getAvailableQualityLevels);VH(this,"getCurrentTime",this.getCurrentTime);VH(this,"getDuration",this.getDuration);VH(this,"addEventListener",this.fF);VH(this,"removeEventListener",this.RN);VH(this,"getDebugText",this.getDebugText);VH(this,"getVideoData",function(){return c.yp()});
VH(this,"addCueRange",this.addCueRange);VH(this,"removeCueRange",this.removeCueRange);VH(this,"setSize",this.setSize);VH(this,"getApiInterface",this.getApiInterface);VH(this,"destroy",this.destroy);VH(this,"showVideoInfo",this.showVideoInfo);VH(this,"hideVideoInfo",this.hideVideoInfo);VH(this,"isVideoInfoVisible",this.isVideoInfoVisible);VH(this,"getSphericalProperties",this.getSphericalProperties);VH(this,"setSphericalProperties",this.setSphericalProperties);this.app.L().u||(VH(this,"getVideoEmbedCode",
this.getVideoEmbedCode),VH(this,"getVideoUrl",this.getVideoUrl));VH(this,"getMediaReferenceTime",this.getMediaReferenceTime);X(this,"getInternalApiInterface",this.getInternalApiInterface);X(this,"cueVideoByPlayerVars",this.cueVideoByPlayerVars);X(this,"loadVideoByPlayerVars",this.loadVideoByPlayerVars);X(this,"preloadVideoByPlayerVars",this.preloadVideoByPlayerVars);X(this,"getAdState",this.getAdState);X(this,"sendAbandonmentPing",this.sendAbandonmentPing);X(this,"setLoopRange",this.setLoopRange);
X(this,"getLoopRange",this.getLoopRange);X(this,"setAutonavState",this.setAutonavState);X(this,"seekToLiveHead",this.seekToLiveHead);X(this,"seekToStreamTime",this.seekToStreamTime);X(this,"getStreamTimeOffset",this.getStreamTimeOffset);X(this,"getVideoData",this.yp);X(this,"setIsExternalPlaylist",this.setIsExternalPlaylist);X(this,"deleteLocalMediaById",this.deleteLocalMediaById);X(this,"deleteAllLocalMedia",this.deleteAllLocalMedia);X(this,"cancelPendingLocalMediaById",this.cancelPendingLocalMediaById);
X(this,"fetchLocalMedia",this.fetchLocalMedia);X(this,"fetchLocalMediaById",this.fetchLocalMediaById);X(this,"getLocalMediaInfoById",this.getLocalMediaInfoById);X(this,"getAllLocalMediaInfo",this.getAllLocalMediaInfo);X(this,"getAppState",this.getAppState);X(this,"addInfoCardXml",this.addInfoCardXml);X(this,"updateLastActiveTime",this.updateLastActiveTime);X(this,"setBlackout",this.setBlackout);X(this,"setAccountLinkState",this.setAccountLinkState);X(this,"setUserEngagement",this.setUserEngagement);
X(this,"updateSubtitlesUserSettings",this.updateSubtitlesUserSettings);X(this,"setFauxFullscreen",this.setFauxFullscreen);X(this,"setUseFastSizingOnWatch",this.setUseFastSizingOnWatch);X(this,"getPresentingPlayerType",this.getPresentingPlayerType);X(this,"canPlayType",this.canPlayType);X(this,"updatePlaylist",this.updatePlaylist);X(this,"updateVideoData",this.updateVideoData);X(this,"updateEnvironmentData",this.updateEnvironmentData);X(this,"sendVideoStatsEngageEvent",this.sendVideoStatsEngageEvent);
X(this,"setCardsVisible",this.setCardsVisible);X(this,"setSafetyMode",this.setSafetyMode);X(this,"isAtLiveHead",function(d){c.isAtLiveHead(void 0,d)});
X(this,"getVideoAspectRatio",this.getVideoAspectRatio);X(this,"getPreferredQuality",this.getPreferredQuality);X(this,"setPlaybackQualityRange",this.setPlaybackQualityRange);X(this,"onAdUxClicked",this.onAdUxClicked);X(this,"getFeedbackProductData",this.getFeedbackProductData);X(this,"setAutonav",this.setAutonav);X(this,"isNotServable",this.isNotServable);X(this,"channelSubscribed",this.channelSubscribed);X(this,"channelUnsubscribed",this.channelUnsubscribed);X(this,"isPictureInPictureAllowed",this.isPictureInPictureAllowed);
X(this,"togglePictureInPicture",this.togglePictureInPicture);X(this,"supportsGaplessAudio",this.supportsGaplessAudio);X(this,"enqueueVideoByPlayerVars",function(d){return void c.enqueueVideoByPlayerVars(d)});
X(this,"clearQueue",this.clearQueue);X(this,"isFastLoad",function(){return!1});
X(this,"getPlayerResponse",this.getPlayerResponse);X(this,"getStoryboardFrame",this.getStoryboardFrame);X(this,"getStoryboardFrameIndex",this.getStoryboardFrameIndex);X(this,"getStoryboardLevel",this.getStoryboardLevel);X(this,"getNumberOfStoryboardLevels",this.getNumberOfStoryboardLevels);X(this,"getAudioTrack",this.KF);X(this,"setAudioTrack",this.setAudioTrack);X(this,"getAvailableAudioTracks",this.LF);X(this,"getMaxPlaybackQuality",this.getMaxPlaybackQuality);X(this,"getUserPlaybackQualityPreference",
this.getUserPlaybackQualityPreference);X(this,"getSubtitlesUserSettings",this.getSubtitlesUserSettings);X(this,"resetSubtitlesUserSettings",this.resetSubtitlesUserSettings);X(this,"setMinimized",this.setMinimized);X(this,"handleExternalCall",this.handleExternalCall);X(this,"isExternalMethodAvailable",this.isExternalMethodAvailable);X(this,"getStatsForNerds",this.getStatsForNerds);X(this,"setScreenLayer",this.setScreenLayer);X(this,"getCurrentPlaylistSequence",this.getCurrentPlaylistSequence);X(this,
"getPlaylistSequenceForTime",this.getPlaylistSequenceForTime);X(this,"forceFrescaUpdate",this.forceFrescaUpdate);X(this,"shouldSendVisibilityState",this.shouldSendVisibilityState);X(this,"updateFullerscreenEduButtonVisibility",this.updateFullerscreenEduButtonVisibility);X(this,"updateFullerscreenEduButtonSubtleModeState",this.updateFullerscreenEduButtonSubtleModeState);X(this,"setGlobalCrop",this.setGlobalCrop);X(this,"getVisibilityState",this.getVisibilityState);X(this,"isMutedByMutedAutoplay",this.isMutedByMutedAutoplay);
X(this,"setInternalSize",this.setInternalSize)};
VH=function(a,b,c){a.u[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return c.apply(a,e)};
a.i.hasOwnProperty(b)||X(a,b,c);a.F.push(b)};
XH=function(a,b,c){a.C[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return c.apply(a,e)};
a.i.hasOwnProperty(b)||X(a,b,c);a.F.push(b)};
X=function(a,b,c){a.i[b]=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return c.apply(a,e)}};
ZH=function(a,b,c){b=g.Be(Math.floor(b),0,100);isFinite(b)&&YH(a.app,{volume:b,muted:a.isMuted()},c)};
$H=function(a,b){YH(a.app,{muted:!0,volume:a.getVolume()},b)};
aI=function(a,b){YH(a.app,{muted:!1,volume:Math.max(5,a.getVolume())},b)};
g.cI=function(a){var b=bI(a.app.o);if(b)return b.chrome;a=a.app.o;a=g.Ct(a.D.L())?a.Xb.get("music"):void 0;return a?a.chrome:null};
eI=function(a,b){WH.call(this,a,b);var c=this;this.g=!1;XH(this,"cueVideoByPlayerVars",function(d,e){c.cueVideoByPlayerVars(dI(c,d),e)});
XH(this,"loadVideoByPlayerVars",function(d,e,f,h){c.loadVideoByPlayerVars(dI(c,d),e,f,h)});
XH(this,"preloadVideoByPlayerVars",function(d,e,f,h){return void c.preloadVideoByPlayerVars(dI(c,d),e,f,h)});
XH(this,"seekBy",this.seekBy);XH(this,"mutedAutoplay",this.mutedAutoplay);XH(this,"showControls",this.showControls);XH(this,"hideControls",this.hideControls);XH(this,"cancelPlayback",this.cancelPlayback);XH(this,"getProgressState",this.getProgressState);XH(this,"isInline",this.isInline);XH(this,"setInline",this.setInline);XH(this,"getStoryboardFormat",this.getStoryboardFormat);XH(this,"getVideoContentRect",this.getVideoContentRect);XH(this,"toggleFullscreen",this.toggleFullscreen);XH(this,"isFullscreen",
this.isFullscreen);XH(this,"getVideoStats",this.getVideoStats);XH(this,"getPlayerSize",this.getPlayerSize);XH(this,"toggleSubtitles",this.toggleSubtitles);XH(this,"setCenterCrop",this.setCenterCrop);XH(this,"handleGlobalKeyDown",this.handleGlobalKeyDown);XH(this,"handleGlobalKeyUp",this.handleGlobalKeyUp);XH(this,"setSizeStyle",this.setSizeStyle);XH(this,"wakeUpControls",this.wakeUpControls)};
dI=function(a,b){var c={};if(a.app.L().J)for(var d=g.p(jja),e=d.next();!e.done;e=d.next())e=e.value,b.hasOwnProperty(e)&&(c[e]=b[e]);else for(d=g.p(kja),e=d.next();!e.done;e=d.next())e=e.value,b.hasOwnProperty(e)&&(c[e]=b[e]);return c};
fI=function(a){eI.call(this,a);this.J=null};
g.gI=function(a){return a.app.o};
g.hI=function(a){a=g.gI(a).Xb.get("endscreen");return!!a&&a.fA()};
iI=function(a){a=g.gI(a);var b=a.Xb.get("endscreen");return b&&b.gA()?!0:a.En()||g.Ct(a.D.L())};
g.jI=function(a,b){3===a.getPresentingPlayerType()?a.O("mdxautoplaycancel"):a.O("autonavcancel",b)};
g.oH=function(a,b){return kI(a.app,b)};
g.lI=function(a){return a.app.F};
g.nI=function(a){var b=g.mI(g.gI(a));return a.app.da&&!a.isFullscreen()||3===a.getPresentingPlayerType()&&b&&b.hasNext()&&b.ng()||!!a.getPlaylist()};
g.pI=function(a){return(a=g.oI(g.gI(a)))?a.nH():{}};
g.rI=function(a){a=g.qI(g.gI(a));return!!a&&a.Rm()};
g.sI=function(a){a=g.qI(g.gI(a));return!!a&&a.eA()};
uI=function(a){a=tI(g.gI(a));return!!a&&a.kH()};
vI=function(a){a=g.gI(a).Xb.get("heartbeat");return!!a&&a.lH()};
g.xI=function(a,b,c){wI(a.app,b,c)};
g.yI=function(a,b,c){(a=g.U(a.app,c))&&RF(a,b)};
g.zI=function(a){a=(a=a.getVideoData())&&a.ya;return!!a&&!(!a.audio||!a.video)&&"application/x-mpegURL"!==a.mimeType};
g.AI=function(a){a=a.getVideoData();return!!a&&!!(a.adaptiveFormats||a.hlsFormats||a.Fe)};
g.BI=function(a,b,c){a=g.lI(a).element;var d=ub(a.children,function(e){e=Number(e.getAttribute("data-layer"));return c-e||1});
0>d&&(d=-(d+1));g.ff(a,b,d);b.setAttribute("data-layer",String(c))};
g.CI=function(a){var b=a.L();if(!b.tb)return!1;var c=a.getVideoData();if(!c||3===a.getPresentingPlayerType())return!1;var d=!c.isLiveDefaultBroadcast||g.P(b.experiments,"allow_poltergust_autoplay");d=c.ra&&(!g.P(b.experiments,"allow_live_autoplay")||!d);var e=c.ra&&g.P(b.experiments,"allow_live_autoplay_on_mweb"),f=!!a.getPlaylist();g.P(b.experiments,"player_allow_autonav_after_playlist")&&(f=a.getPlaylist(),f=!!f&&f.hasNext());a=c.Hg&&c.Hg.playerOverlays||null;a=!!(a&&a.playerOverlayRenderer&&a.playerOverlayRenderer.autoplay);
a=c.Yb&&a;return!c.ypcPreview&&(!d||e)&&!g.eb(c.hd,"ypc")&&!f&&(!g.rt(b)||a)};
g.DI=function(a,b,c,d){a.L().ca&&lja(a.app.ua,b,c,d)};
g.EI=function(a,b,c){a.L().ca&&mja(a.app.ua,b,c)};
g.FI=function(a,b,c){a.L().ca&&(a.app.ua.elements.has(b),c&&(b.visualElement=g.Bn(c)))};
g.GI=function(a,b){a.L().ca&&a.app.ua.click(b)};
g.HI=function(a,b,c){if(a.L().ca&&(a=a.app.ua,a.elements.has(b),c?a.g.add(b):a.g["delete"](b),c&&!a.i.has(b))){c=g.Hn();var d=b.visualElement;c&&d&&g.Yn(c,d);a.i.add(b)}};
g.II=function(a,b){return a.L().ca?a.app.ua.elements.has(b):!1};
g.LI=function(a,b){if(a.app.getPresentingPlayerType()===b){var c=a.app,d=g.U(c,b);d&&(d!=c.l?JI(c,c.l):KI(c))}};
nja=function(a){if(!a.aa("html5_inline_video_quality_survey"))return!1;var b=g.U(a.app);if(!b)return!1;var c=b.getVideoData();if(!c.ya||!c.ya.video||1080>c.ya.video.Rb||c.wz)return!1;var d=/^qsa/.test(c.clientPlaybackNonce),e="r";0<=c.ya.id.indexOf(";")&&(d=/^[a-p]/.test(c.clientPlaybackNonce),e="x");a.aa("html5_inline_video_quality_survey_always")&&(d=!0,e="a");return d?(b.Ya("iqss",e,!0),!0):!1};
g.MI=function(a){g.N.call(this);this.loaded=!1;this.player=a};
g.NI=function(a,b){return fr(a.info.mimeType)?b?Ip(a.info)===b:!0:!1};
g.OI=function(a,b){if(null!=a.fa&&g.Ut(b.L())&&!a.fa.i&&null!=a.fa.g.rawcc)return!0;if(!a.ug())return!1;var c=!!a.fa&&a.fa.i&&Object.values(a.fa.g).some(function(e){return g.NI(e,"386")}),d=!!a.fa&&!a.fa.i&&Sda(a.fa);
return c||d};
PI=function(a,b){g.A.call(this);this.D=a;this.u=b;this.g={};this.i={};this.l=null;this.Xb=new Map;this.o=g.P(a.L().experiments,"web_player_defer_modules")};
g.QI=function(a){return a.Xb.get("captions")};
pja=function(a,b){switch(b){case "ad":return RI(a);case "annotations_module":return a.dD();case "attribution":var c=a.D.L();return g.P(c.experiments,"web_player_show_music_in_this_video")&&"desktop-polymer"===c.playerStyle;case "creatorendscreen":return c=a.D.L(),"3"===c.controlsType?c=!1:"creator-endscreen-editor"===c.playerStyle?c=!0:(c=a.D.getVideoData(),c=!!c&&(!!g.gx(c)||!!g.hx(c))),c;case "embed":return g.rt(a.D.L());case "endscreen":return g.SI(a);case "fresca":return a.Pv();case "heartbeat":return a.Qv();
case "kids":return g.Kt(a.D.L());case "remote":return a.D.L().Kc;case "miniplayer":return a.D.L().showMiniplayerUiWhenMinimized;case "music":return g.Ct(a.D.L());case "captions":return c=a.D.getVideoData(),!!c.Sl||!!c.captionTracks.length||g.OI(c,a.D);case "unplugged":return g.Jt(a.D.L());case "ux":return a.D.L().Ca;case "visualizer":return c=a.D.L(),a.D.getVideoData().isVisualizerEligible&&$t(c)&&g.P(c.experiments,"web_player_music_visualizer")&&"desktop-polymer"===c.playerStyle&&g.Zt(c)&&!(g.Ls&&
!g.Xd(42));case "webgl":return oja(a);case "ypc":return a.En();case "ypc_clickwrap":return c=a.D.getVideoData(),c.Gl&&!c.Zt;case "yto":return!!a.D.getVideoData().hd.includes("yto");default:return g.Km(Error("Module descriptor "+b+" does not match")),!1}};
TI=function(a,b,c,d,e){d=void 0===d?!1:d;e=void 0===e?!1:e;var f=a.Xb.get(b);if(!f||e)if(c||(c=function(){TI(a,b,void 0,d,e)}),f=f||qja(a,b,c,pja(a,b)))a.Xb.set(b,f),f.create(),d&&a.D.ka("onApiChange")};
UI=function(a){a.o&&(TI(a,"endscreen"),a.Os(),TI(a,"creatorendscreen",void 0,!0))};
g.SI=function(a){var b=a.D.L();if(g.au(b)||b.u||!b.Da&&!b.ab)return!1;var c=a.D.getPresentingPlayerType();if(2===c)return!1;if(3===c)return g.P(b.experiments,"desktop_enable_autoplay");a=a.D.getVideoData();if(!a)return!1;c=!a.isLiveDefaultBroadcast||g.P(b.experiments,"allow_poltergust_autoplay");c=a.ra&&(!g.P(b.experiments,"allow_live_autoplay")||!c);b=a.ra&&g.P(b.experiments,"allow_live_autoplay_on_mweb");return!c||b};
g.oI=function(a){return a.Xb.get("webgl")};
oja=function(a){var b=a.D.getVideoData(),c=a.D.L().experiments,d=g.Ul(),e=g.P(c,"enable_spherical_kabuki");a=g.Zt(a.D.L());if(b.ih())return d||e||a||g.P(c,"html5_enable_spherical");if(b.mh())return a||d||e||g.P(c,"html5_enable_spherical");if(b.nh())return a||d||g.P(c,"html5_enable_spherical3d");if(b.Nk())return a||g.P(c,"html5_enable_anaglyph3d")||!1;d=b.ya&&b.ya.video&&Yq(b.ya.video);return a&&!g.Xw(b)&&!b.isVisualizerEligible&&!d&&(g.P(c,"enable_webgl_noop")||g.P(c,"html5_enable_bicubicsharp")||
g.P(c,"html5_enable_smartsharp"))};
VI=function(a){g.P(a.D.L().experiments,"web_player_ux_module_wait")&&a.Xb.get("ux")&&g.yI(a.D,"ux")};
rja=function(a){VI(a);TI(a,"ux",void 0,!0)};
RI=function(a){if(a=a.D.getVideoData(1).getPlayerResponse())if(a=a.adPlacements)for(var b=0;b<a.length;b++)if(a[b].adPlacementRenderer)return!0;return!1};
qja=function(a,b,c,d){try{if(d){var e=g.WI[b];if(e)return new e(a.D);"creatorendscreen"===b?XI(a,"annotations_module",c):XI(a,b,c)}else g.yI(a.D,b)}catch(f){g.yI(a.D,b),g.Km(f)}return null};
YI=function(a,b,c){for(var d=g.p(a.Xb),e=d.next();!e.done;e=d.next()){var f=g.p(e.value);e=f.next().value;(f=f.next().value)&&(c||f.Wf(b))&&(g.Nd(f),a.Xb["delete"](e))}};
ZI=function(a){return a.Xb.get("ad")};
$I=function(a){if(g.Kt(a.D.L()))return a.Xb.get("kids")};
g.mI=function(a){if(a.D.L().Kc)return a.Xb.get("remote")};
aJ=function(a){if(g.Jt(a.D.L()))return a.Xb.get("unplugged")};
bI=function(a){if(a.D.L().Ca)return a.Xb.get("ux")};
g.qI=function(a){return a.Xb.get("annotations_module")};
bJ=function(a){return a.Xb.get("creatorendscreen")};
tI=function(a){return a.Xb.get("fresca")};
XI=function(a,b,c){if(a.u){for(var d=a.u+b+".js",e=document.getElementsByTagName("SCRIPT"),f=!1,h,l=0;l<e.length;l++){var m=e[l];if(m.src===d||m.getAttribute("data-original-src")===d)h=m}h||(h=g.bf("SCRIPT"),h.setAttribute("data-original-src",d),f=!0);var n=function(){a.ba()||c.call(a)},q=function(){a.ba()||g.yI(a.D,b)},r=h.onload;
h.onload=function(z){g.tf(n);r&&r.apply(window,[z])};
var u=h.onerror;h.onerror=function(z){if(.01>Math.random()){var D=new g.Gm("Unable to load player module",b+".js from "+d+" on "+(document.location&&document.location.origin)+".");g.Km(D)}g.tf(q);u&&u(z)};
var w=h,B=w.onreadystatechange;w.onreadystatechange=function(z){switch(w.readyState){case "loaded":case "complete":g.tf(n)}B&&B(z)};
f&&((e=a.D.L().cspNonce)&&h.setAttribute("nonce",e),g.dd(h,fh(d)),e=document.getElementsByTagName("HEAD")[0]||document.body,e.insertBefore(h,e.firstChild),g.Md(a,function(){h.parentNode&&h.parentNode.removeChild(h);g.WI[b]=null;"annotations_module"===b&&(g.WI.creatorendscreen=null)}))}};
dJ=function(a,b,c,d){g.N.call(this);var e=this;this.target=a;this.Ho=b;this.i=0;this.B=!1;this.o=new g.Fe(NaN,NaN);this.g=new g.ln(this);this.P=this.l=this.C=null;g.C(this,this.g);b=d?4E3:3E3;this.J=new g.G(function(){cJ(e,1,!1)},b,this);
g.C(this,this.J);this.K=new g.G(function(){cJ(e,2,!1)},b,this);
g.C(this,this.K);this.N=new g.G(function(){cJ(e,512,!1)},b,this);
g.C(this,this.N);this.R=c&&0<c.Oi.length?5E3:3E3;d||(this.l=this.g.I(a,"mouseover",this.Eq),this.g.I(a,"mousemove",this.GJ),this.g.I(a,"mouseleave",this.HJ));qh?this.g.I(a,"keypress",this.XG):this.g.I(a,"focusin",this.MF);this.u=this.g.I(a,"mousedown",this.TA);this.F=this.g.I(a,"touchstart",this.tD,void 0,!0);cJ(this,640,!0)};
eJ=function(a){cJ(a,4,!1);a.C&&(a.g.gb(a.C),a.C=null,a.l=a.g.I(a.target,"mouseover",a.Eq));a.l&&(a.g.gb(a.l),a.l=a.g.I(a.target,"mouseover",a.Eq))};
cJ=function(a,b,c){a.ba();var d=!a.i;c?(a.i|=b,b&1&&a.J.start(),b&2&&a.K.start()):(a.i&=~b,b&1&&a.J.stop(),b&2&&a.K.stop(),b&512&&a.N.stop());a.i&512&&!(a.i&128)&&a.N.fb(a.R);b=!a.i;d!==b&&a.O("autohideupdate",b)};
g.fJ=function(a,b,c,d,e,f){g.A.call(this);this.element=a;this.state=null;c||a.hide();this.l=b;this.o=void 0===d?b:d;this.g=f;this.i=e;this.delay=new g.G(this.Fr,0,this);g.C(this,this.delay)};
gJ=function(a,b){var c=a.element.element;b?c.setAttribute("aria-hidden","true"):c.removeAttribute("aria-hidden")};
g.hJ=function(a){g.T.call(this,{A:"button",T:["ytp-large-play-button","ytp-button"],M:{"aria-label":"Play"},H:["{{largePlayButtonChildren}}"]});this.api=a;this.I(a,"videodatachange",this.ga);this.ga()};
iJ=function(a){var b=a.L(),c=["ytp-cued-thumbnail-overlay"];(g.P(b.experiments,"web_player_contain_thumbnail")||b.u)&&c.push("ytp-exp-contain-thumbnail");g.T.call(this,{A:"div",T:c,H:[{A:"div",G:"ytp-cued-thumbnail-overlay-image"}]});b=this.Z("ytp-cued-thumbnail-overlay");c=new g.hJ(a);g.C(this,c);c.Y(b);this.l=new g.ln(this);g.C(this,this.l);this.api=a;this.u=this.Z("ytp-cued-thumbnail-overlay-image");this.o=c;this.i=new g.fJ(this,250);g.C(this,this.i);this.g=new g.G(this.ga,0,this);g.C(this,this.g);
this.ga();this.I(a,"appresize",this.Qa);this.I(a,"presentingplayerstatechange",this.HI);this.I(a,"ypcStateChanged",this.uN);ut(a.L())&&this.I(a,"videoplayerreset",this.GI)};
jJ=function(a,b){var c=void 0===c?!0:c;var d=g.K("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=g.td(window.location.href);e&&d.push(e);e=g.td(a);if(g.eb(d,e)||!e&&g.fc(a,"/"))if(g.uj("autoescape_tempdata_url")&&(d=document.createElement("a"),g.bd(d,a),a=d.href),a&&(d=ud(a),e=d.indexOf("#"),d=0>e?d:d.substr(0,e)))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:g.Hn()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&(c=b,d="ST-"+md(d).toString(36),c=c?g.Bd(c):"",g.Al(d,c,f||5))}else f=b,c="ST-"+md(d).toString(36),
f=f?g.Bd(f):"",g.Al(c,f,5)};
g.kJ=function(a){var b=void 0===b?{}:b;var c=void 0===c?"":c;var d=void 0===d?window:d;d=d.location;a=g.Dd(a,b)+c;a=a instanceof g.wc?a:g.Cc(a);d.href=g.xc(a)};
g.lJ=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=g.K("EVENT_ID");d&&(b.ei||(b.ei=d));b&&jJ(a,b);c||((window.ytspf||{}).enabled?spf.navigate(a):g.kJ(a))};
g.mJ=function(a,b,c){c&&jJ(a,c);c=g.Bc(a);c=g.xc(c);a!=c&&g.Ej(Error("Unsafe window.open URL: "+a));a=c;window.open(a,b||md(a).toString(36))};
nJ=function(a){var b=!a.L().kd&&3!==a.getPresentingPlayerType();return a.isFullscreen()||b};
g.oJ=function(a,b,c,d){var e=a.currentTarget;if((void 0===c||!c)&&g.WG(a))return g.jk(a),!0;b.pauseVideo();a=e.getAttribute("href");g.lJ(a,d,!0);return!1};
g.pJ=function(a,b,c){if(Qt(b.L())&&2!==b.getPresentingPlayerType()){if(g.WG(c))return b.isFullscreen()&&!b.L().externalFullscreen&&b.toggleFullscreen(),g.jk(c),!0}else{var d=g.WG(c);d&&b.pauseVideo();g.lJ(a,void 0,!0);d&&(g.mJ(a),g.jk(c))}return!1};
qJ=function(){return{A:"div",G:"ytp-spinner-container",H:[{A:"div",G:"ytp-spinner-rotator",H:[{A:"div",G:"ytp-spinner-left",H:[{A:"div",G:"ytp-spinner-circle"}]},{A:"div",G:"ytp-spinner-right",H:[{A:"div",G:"ytp-spinner-circle"}]}]}]}};
rJ=function(a){if(document.createRange){var b=document.createRange();b&&(b.selectNodeContents(a),a=window.getSelection())&&(a.removeAllRanges(),a.addRange(b))}};
g.sJ=function(a,b,c){a=a.L();return g.P(a.experiments,"desktop_player_button_tooltip_with_shortcut")&&!a.Zb?g.UG("$DESCRIPTION ($SHORTCUT)",{DESCRIPTION:b,SHORTCUT:c}):b};
g.tJ=function(a){g.T.call(this,{A:"div",T:["ytp-error"],M:{role:"alert"},H:[{A:"div",G:"ytp-error-content",H:[{A:"div",G:"ytp-error-icon-container",H:[g.BH()]},{A:"div",G:"ytp-error-content-wrap",H:[{A:"div",G:"ytp-error-content-wrap-reason",S:"{{content}}"},{A:"div",G:"ytp-error-content-wrap-subreason",S:"{{subreason}}"}]}]}]});this.api=a;this.keys=[]};
g.uJ=function(a){a=a.split(sja);for(var b=[],c=0;c<a.length;c+=3){var d=a[c++].split("\n");b.push(d[0]);for(var e=1;e<d.length;e++)b.push({A:"br"}),b.push(d[e]);c<a.length&&b.push({A:"a",M:{href:a[c],target:a[c+1]},S:a[c+2]})}return{A:"span",H:b}};
wJ=function(a,b,c,d,e,f,h){d=void 0===d?!1:d;e=void 0===e?!1:e;h=void 0===h?!0:h;e||(e=a.api.L().i);a=a.api.getVideoData();b=g.UG(g.vJ[b]||"",d?{CPN:a.clientPlaybackNonce}:{}).split(/\$(BEGIN|END)_LINK/);d=[];f&&d.push({A:"h2",S:f});d.push(b[0]);h&&d.push({A:"br"});d.push({A:"a",M:{href:c,target:e?"_blank":null},S:b[2]});d.push(b[4]);return{A:"span",H:d}};
tja=function(a,b){for(var c=a.element.getElementsByTagName("a"),d=0;d<c.length;d++){var e=a.I(c[d],"click",b);a.keys.push(e)}};
uja=function(a){for(var b=0;b<a.keys.length;b++)a.gb(a.keys[b]);a.keys=[]};
yJ=function(a){g.ln.call(this);this.D=a;this.g=new Set;this.mediaSession=navigator.mediaSession;xJ(this,"play",function(){a.playVideo()});
xJ(this,"pause",function(){a.pauseVideo()});
xJ(this,"seekbackward",function(){a.seekBy(-5*a.getPlaybackRate())});
xJ(this,"seekforward",function(){a.seekBy(5*a.getPlaybackRate())});
this.I(a,"videodatachange",this.Ia);this.I(a,"presentingplayerstatechange",this.hf);this.Ia()};
xJ=function(a,b,c){a.mediaSession.setActionHandler(b,c?function(){c()}:null);
a.g.add(b)};
zJ=function(a){g.T.call(this,{A:"div",G:"ytp-paid-content-overlay",M:{"aria-live":"assertive","aria-atomic":"true"}});this.D=a;this.B=new g.T({A:"div",T:["ytp-button","ytp-paid-content-overlay-text"]});this.videoId=null;this.o=!1;this.l=new g.fJ(this.B,250,!1,100);this.Ob=this.g=null;this.i={};this.u=0;g.C(this,this.B);this.B.Y(this.element);g.C(this,this.l);this.I(a,"videodatachange",this.Ia);this.I(a,"presentingplayerstatechange",this.Pb)};
AJ=function(a,b){var c=Yw(b),d=Zw(b);a.g?b.videoId&&b.videoId!==a.videoId&&(a.g.Af(),a.videoId=b.videoId,c=a.i[b.videoId]||0,a.o=!!d&&3E3>c):c&&d&&(a.g=new g.G(a.Na,d,a),g.C(a,a.g),g.lf(g.Re("ytp-paid-content-overlay-text",a.element),c))};
BJ=function(a,b){a.g&&g.S(b,8)&&a.o&&(a.o=!1,a.Tb(),a.g.start())};
DJ=function(a){g.T.call(this,{A:"div",G:"ytp-spinner",H:[qJ(),{A:"div",G:"ytp-spinner-message",S:"If playback doesn't begin shortly, try restarting your device."}]});this.api=a;this.message=this.Z("ytp-spinner-message");this.g=new g.G(this.show,500,this);g.C(this,this.g);this.I(a,"presentingplayerstatechange",this.i);this.I(a,"onFrescaStateChange",this.l);this.I(a,"playbackstalledatstart",this.o);CJ(this,g.oH(a))};
CJ=function(a,b){if(g.S(b,128))var c=0;else!(c=g.S(b,16))&&(c=g.S(b,1))&&(c=tI(g.gI(a.api)),c=!(c&&c.loaded));c?a.g.start():a.hide()};
g.EJ=function(a){g.T.call(this,a);this.V=new g.N;g.C(this,this.V)};
g.FJ=function(a,b,c,d){d=void 0===d?!1:d;g.EJ.call(this,b);var e=this;this.D=a;this.N=d;this.C=new g.ln(this);this.K=new g.fJ(this,c,!0,void 0,void 0,function(){e.g&&(e.g.getAttribute("aria-haspopup"),e.g.setAttribute("aria-expanded","true"),g.P(e.D.L().experiments,"embeds_enable_new_playlist_killswitch")?document.activeElement&&g.kf(e.g,document.activeElement)&&e.focus():e.focus())});
g.C(this,this.C);g.C(this,this.K)};
GJ=function(a){a.g&&(document.activeElement&&g.kf(a.element,document.activeElement)&&(of(a.g),a.g.focus()),a.g.removeAttribute("aria-expanded"),a.g=void 0);g.nn(a.C);a.F=void 0};
HJ=function(a,b,c){a.Id()?a.Na():a.Tb(b,c)};
JJ=function(a){var b=g.iq(a.L().experiments,"mweb_muted_autoplay_animation"),c=[],d=[{A:"div",T:["ytp-unmute-icon"],H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-volume-muted-dark"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]}]},
{A:"div",T:["ytp-unmute-text"],S:"Tap to unmute"}];"none"!==b&&(c.push("ytp-unmute-animated"),d.push({A:"div",T:["ytp-unmute-box"],H:[]}),"expand"===b?c.push("ytp-unmute-expand"):"shrink"===b&&c.push("ytp-unmute-shrink"));g.FJ.call(this,a,{A:"button",T:["ytp-unmute","ytp-popup","ytp-button"].concat(c),H:[{A:"div",G:"ytp-unmute-inner",H:d}]},100);this.seen=this.i=!1;this.api=a;g.DI(this.api,this.element,this,51663);this.I(a,"onMutedAutoplayChange",this.ln,this);this.I(a,"presentingplayerstatechange",
this.hf);this.ia("click",this.onClick,this);a=a.isMutedByMutedAutoplay()&&!g.rt(this.api.L());g.dH(this,a);a&&IJ(this);this.l=a};
KJ=function(a){a.i||(a.i=!0,g.GI(a.api,a.element))};
IJ=function(a){a.seen||(a.seen=!0,g.HI(a.api,a.element,!0))};
g.MJ=function(a){g.ln.call(this);var b=this;this.api=a;this.Ov=!1;this.og=null;this.Po=!1;this.qc=null;this.Ns=this.zr=!1;this.lw=this.nw=null;this.Pz=NaN;this.kw=this.cm=!1;this.cn=0;this.gs=[];var c=a.L(),d=g.lI(a);this.Ex=new g.G(this.mK,0,this);g.C(this,this.Ex);g.Ct(c)||(this.pk=new iJ(a),g.C(this,this.pk),g.BI(a,this.pk.element,4));if(vja()){var e=new DJ(a);g.C(this,e);e=e.element;g.BI(a,e,4)}var f=a.getVideoData();this.Lb=new dJ(d,function(l){return b.Ho(l)},f,c.kb);
g.C(this,this.Lb);this.Lb.subscribe("autohideupdate",this.Qf,this);var h=new zJ(a);g.C(this,h);g.BI(a,h.element,4);this.Cr=new JJ(a);g.C(this,this.Cr);g.BI(this.api,this.Cr.element,2);this.Mt=this.api.isMutedByMutedAutoplay();this.I(a,"onMutedAutoplayChange",this.ln);this.yr=new g.G(this.yl,200,this);g.C(this,this.yr);this.hu=f.videoId;this.UC=new g.G(function(){b.cn=0},350);
g.C(this,this.UC);this.So=new g.G(function(){b.kw||LJ(b)},350,this);
g.C(this,this.So);f=a.getRootNode();f.setAttribute("aria-label","YouTube Video Player");switch(c.color){case "white":g.I(f,"ytp-color-white")}g.Ct(c)&&g.I(f,"ytp-music-player");!g.P(a.L().experiments,"disable_mediasession2")&&navigator.mediaSession&&!navigator.mediaSession.metadata&&navigator.mediaSession.setActionHandler&&(f=new yJ(a),g.C(this,f));this.I(a,"appresize",this.Qa);this.I(a,"presentingplayerstatechange",this.hf);this.I(a,"videodatachange",this.Ia);this.I(a,"videoplayerreset",this.UL);
this.I(a,"autonavvisibility",this.Eh,this);this.I(a,"sizestylechange",this.Eh,this);this.I(a,"onFrescaStateChange",this.Qe,this);this.I(d,"click",this.wM,this);this.I(d,"dblclick",this.xM,this);c.la&&(this.I(d,"gesturechange",this.yM,this),this.I(d,"gestureend",this.zM,this));this.xi=[d.l];this.pk&&this.xi.push(this.pk.element);e&&this.xi.push(e)};
NJ=function(a,b){if(!b)return!1;var c=a.api.app.u;if(c.ti()&&(c=c.sa())&&g.kf(c,b))return c.controls;for(c=0;c<a.xi.length;c++)if(g.kf(a.xi[c],b))return!1;return g.qi(b,"ytp-player-content")||g.qi(b,"html5-endscreen")||b===a.api.getRootNode()?!1:!0};
PJ=function(a){return!!(2===a.api.getPresentingPlayerType()&&g.lI(a.api).u&&a.api.L().g&&OJ&&11<=tx)};
QJ=function(a,b){return!NJ(a,gk(b))&&g.WG(b)};
LJ=function(a){a.Lb.Ch();if(g.P(a.api.L().experiments,"web_player_touch_mode_improvements")&&a.zr&&a.Ns)a.Ns=!1;else if(!a.api.L().N&&!a.Zg()){var b=g.oH(a.api);g.S(b,2)&&iI(a.api)||a.Yj(b);if(!a.api.L().la||b.isCued()||g.S(b,1024)){var c=a.api.app.Da;g.Im("embedsShouldRequestStorageAccessResult",{result:!!c,returnsUndefined:void 0===c});var d=g.S(b,2048);c&&(b.isCued()||d)?(g.Im("embedsRequestStorageAccessState",{isCued:b.isCued(),isAutoplayBlocked:d}),a.requestStorageAccess()):(!c||b.isCued()&&
d||g.Im("embedsRequestStorageAccessFailedState",{state:b.state}),a.yl())}else a.yr.isActive()?(a.Gp(),a.yr.stop()):a.yr.start()}};
RJ=function(a,b){if(g.WG(b)&&a.api.isMutedByMutedAutoplay()){a.api.unMute();2===a.api.getPresentingPlayerType()&&a.api.playVideo();var c=g.oH(a.api);!g.S(c,4)||g.S(c,8)||g.S(c,2)||a.yl();return!0}return!1};
SJ=function(a,b,c){a.api.isFullscreen()?c<1-b&&a.api.toggleFullscreen():c>1+b&&a.api.toggleFullscreen()};
vja=function(){var a=Ol()&&67<=Ll();return!Nl("tizen")&&!g.pt&&!a&&!0};
TJ=function(a,b){this.i=a;this.g=b};
UJ=function(a,b){return a.i+b*a.getLength()};
VJ=function(a,b,c){if(!a.getLength())return null!=c?c:Infinity;a=(b-a.i)/a.getLength();return g.Be(a,0,1)};
g.WJ=function(a,b){g.EJ.call(this,{A:"div",G:"ytp-ad-persistent-progress-bar-container",H:[{A:"div",G:"ytp-ad-persistent-progress-bar"}]});this.l=a;this.i=b;g.C(this,this.i);this.B=this.Z("ytp-ad-persistent-progress-bar");this.g=-1;this.I(a,"presentingplayerstatechange",this.u);this.hide();this.u()};
g.XJ=function(a,b){b=void 0===b?2:b;g.N.call(this);this.g=a;this.l=new g.ln(this);g.C(this,this.l);this.u=wja;this.o=null;this.l.I(this.g,"presentingplayerstatechange",this.oJ);this.o=this.l.I(this.g,"progresssync",this.NA);this.i=b;1===this.i&&this.NA()};
YJ=function(a){g.T.call(this,{A:"button",T:["ytp-button","ytp-back-button"],H:[{A:"div",G:"ytp-arrow-back-icon",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-arrow-back"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 -12 36 36",width:"100%"},H:[{A:"path",M:{d:"M0 0h24v24H0z",fill:"none"}},{A:"path",Pa:!0,M:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",fill:"#fff"}}]}]}]});this.D=a;g.dH(this,a.L().showBackButton);this.ia("click",this.onClick)};
g.ZJ=function(a){g.T.call(this,{A:"div",H:[{A:"div",G:"ytp-bezel-text-wrapper",H:[{A:"div",G:"ytp-bezel-text",S:"{{title}}"}]},{A:"div",G:"ytp-bezel",M:{role:"status","aria-label":"{{label}}"},H:[{A:"div",G:"ytp-bezel-icon",S:"{{icon}}"}]}]});this.D=a;this.i=new g.G(this.show,10,this);this.g=new g.G(this.hide,500,this);g.C(this,this.i);g.C(this,this.g);this.hide()};
aK=function(a,b,c){if(0>=b){c=RH();b="muted";var d=0}else c=c?QH():PH(),d=Math.floor(b),b=d+"volume";$J(a,c,b,d+"%")};
bK=function(a,b){var c=b?g.W?{A:"div",T:["ytp-icon","ytp-icon-fast-rewind"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 17,24 V 12 l -8.5,6 8.5,6 z m .5,-6 8.5,6 V 12 l -8.5,6 z"}}]}:g.W?{A:"div",T:["ytp-icon","ytp-icon-fast-forward"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 10,24 18.5,18 10,12 V 24 z M 19,12 V 24 L 27.5,18 19,12 z"}}]},d=a.D.getPlaybackRate(),
e=g.UG("Speed is $RATE",{RATE:String(d)});$J(a,c,e,d+"x")};
$J=function(a,b,c,d){d=void 0===d?"":d;a.ha("label",void 0===c?"":c);a.ha("icon",b);a.g.Af();a.i.start();a.ha("title",d);g.J(a.element,"ytp-bezel-text-hide",!d)};
cK=function(a,b,c){g.T.call(this,{A:"div",G:"ytp-cards-teaser",H:[{A:"div",G:"ytp-cards-teaser-box"},{A:"div",G:"ytp-cards-teaser-text",H:[{A:"span",G:"ytp-cards-teaser-label",S:"{{text}}"}]}]});var d=this;this.D=a;this.K=b;this.hg=c;this.o=new g.fJ(this,250,!1,250);this.g=null;this.C=new g.G(this.AL,300,this);this.B=new g.G(this.zL,2E3,this);this.u=[];this.i=null;this.F=new g.G(function(){d.element.style.margin="0"},250);
this.l=null;g.C(this,this.o);g.C(this,this.C);g.C(this,this.B);g.C(this,this.F);this.I(c.element,"mouseover",this.wA);this.I(c.element,"mouseout",this.vA);this.I(a,"cardsteasershow",this.TM);this.I(a,"cardsteaserhide",this.Na);this.I(a,"cardstatechange",this.ED);this.I(a,"presentingplayerstatechange",this.ED);this.I(a,"appresize",this.Du);this.I(a,"onShowControls",this.Du);this.I(a,"onHideControls",this.mF);this.ia("click",this.vO);this.ia("mouseenter",this.yL)};
eK=function(a,b,c){g.T.call(this,{A:"button",T:["ytp-button","ytp-cards-button"],M:{"aria-label":"Show cards","aria-owns":"iv-drawer","aria-haspopup":"true","data-tooltip-opaque":String(g.rt(a.L()))},H:[{A:"span",G:"ytp-cards-button-icon-default",H:[{A:"div",G:"ytp-cards-button-icon",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-info-card"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M17,16 L19,16 L19,24 L17,24 L17,16 Z M17,12 L19,12 L19,14 L17,14 L17,12 Z"}}]}]},
{A:"div",G:"ytp-cards-button-title",S:"Info"}]},{A:"span",G:"ytp-cards-button-icon-shopping",H:[{A:"div",G:"ytp-cards-button-icon",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-shopping-card"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",G:"ytp-svg-shadow",M:{d:"M 27.99,18 A 9.99,9.99 0 1 1 8.00,18 9.99,9.99 0 1 1 27.99,18 z"}},{A:"path",G:"ytp-svg-fill",M:{d:"M 18,8 C 12.47,8 8,12.47 8,18 8,23.52 12.47,28 18,28 23.52,28 28,23.52 28,18 28,12.47 23.52,8 18,8 z m -4.68,4 4.53,0 c .35,0 .70,.14 .93,.37 l 5.84,5.84 c .23,.23 .37,.58 .37,.93 0,.35 -0.13,.67 -0.37,.90 L 20.06,24.62 C 19.82,24.86 19.51,25 19.15,25 c -0.35,0 -0.70,-0.14 -0.93,-0.37 L 12.37,18.78 C 12.13,18.54 12,18.20 12,17.84 L 12,13.31 C 12,12.59 12.59,12 13.31,12 z m .96,1.31 c -0.53,0 -0.96,.42 -0.96,.96 0,.53 .42,.96 .96,.96 .53,0 .96,-0.42 .96,-0.96 0,-0.53 -0.42,-0.96 -0.96,-0.96 z",
"fill-opacity":"1"}},{A:"path",G:"ytp-svg-shadow-fill",M:{d:"M 24.61,18.22 18.76,12.37 C 18.53,12.14 18.20,12 17.85,12 H 13.30 C 12.58,12 12,12.58 12,13.30 V 17.85 c 0,.35 .14,.68 .38,.92 l 5.84,5.85 c .23,.23 .55,.37 .91,.37 .35,0 .68,-0.14 .91,-0.38 L 24.61,20.06 C 24.85,19.83 25,19.50 25,19.15 25,18.79 24.85,18.46 24.61,18.22 z M 14.27,15.25 c -0.53,0 -0.97,-0.43 -0.97,-0.97 0,-0.53 .43,-0.97 .97,-0.97 .53,0 .97,.43 .97,.97 0,.53 -0.43,.97 -0.97,.97 z",fill:"#000","fill-opacity":"0.15"}}]}]},{A:"div",
G:"ytp-cards-button-title",S:"Shopping"}]}]});this.D=a;this.o=b;this.l=c;this.g=null;this.i=new g.fJ(this,250,!0,100);g.C(this,this.i);g.J(this.l,"ytp-show-cards-title",g.rt(a.L()));this.hide();this.ia("click",this.onClicked);this.ia("mouseover",this.XK);dK(this,!0)};
dK=function(a,b){b?a.g=g.fK(a.o.rb(),a.element):(a.g=a.g,a.g(),a.g=null)};
g.hK=function(a,b,c){b=gK(null,b,c);if(b=window.open(b,"loginPopup","width=800,height=600,resizable=yes,scrollbars=yes",!0))c=g.Mj("LOGGED_IN",function(d){g.Nj(g.K("LOGGED_IN_PUBSUB_KEY",void 0));rj("LOGGED_IN",!0);a(d)}),rj("LOGGED_IN_PUBSUB_KEY",c),b.moveTo((screen.width-800)/2,(screen.height-600)/2)};
gK=function(a,b,c){var d="/signin?context=popup";c&&(d=document.location.protocol+"//"+c+d);c=document.location.protocol+"//"+document.domain+"/post_login";a&&(c=Cd(c,"mode",a));a=Cd(d,"next",c);b&&(a=Cd(a,"feature",b));return a};
jK=function(a,b){g.T.call(this,{A:"button",T:[iK.BUTTON,iK.TITLE_NOTIFICATIONS],M:{"aria-pressed":"{{pressed}}","aria-label":"{{label}}"},H:[{A:"div",G:iK.TITLE_NOTIFICATIONS_ON,M:{title:"Stop getting notified about every new video","aria-label":"Notify subscriptions"},H:[g.HH()]},{A:"div",G:iK.TITLE_NOTIFICATIONS_OFF,M:{title:"Get notified about every new video","aria-label":"Notify subscriptions"},H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-notifications-inactive"]}:{A:"svg",M:{fill:"#fff",height:"24px",
viewBox:"0 0 24 24",width:"24px"},H:[{A:"path",M:{d:"M18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"}}]}]}]});this.api=a;this.channelId=b;this.g=!1;g.DI(a,this.element,this,36927);this.ia("click",this.onClick,this);this.ha("pressed",!1);this.ha("label","Get notified about every new video")};
lK=function(a,b){a.g=b;a.element.classList.toggle(iK.NOTIFICATIONS_ENABLED,a.g);if(g.P(a.api.L().experiments,"web_player_innertube_subscription_update")){var c=a.api.getVideoData();if(c)if(c=b?c.dw:c.cw){var d=g.kK(a.api.app);d?tE(d,c):g.L(Error("No innertube service available when updating notification preferences."))}else g.L(Error("No update preferences command available."));else g.L(Error("No video data when updating notification preferences."))}else g.rl("/subscription_ajax?action_update_subscription_preferences=1",
{method:"POST",yb:{channel_id:a.channelId,receive_all_updates:!a.g}})};
mK=function(a,b,c){return b?a.F+"subscription_ajax":c?"/subscription_service":""};
g.oK=function(a,b,c,d,e,f,h,l,m,n,q,r,u){u=void 0===u?null:u;f&&(a=a.charAt(0)+a.substring(1).toLowerCase(),c=c.charAt(0)+c.substring(1).toLowerCase());if("0"===b||"-1"===b)b=null;if("0"===d||"-1"===d)d=null;var w=r.L();if(q){c={href:q,"aria-label":"Subscribe to channel"};if(g.zt(w)||g.Bt(w))c.target=w.B;g.T.call(this,{A:"div",T:["ytp-button","ytp-sb"],H:[{A:"a",G:"ytp-sb-subscribe",M:c,H:[{A:"div",G:"ytp-sb-text",H:[{A:"div",G:"ytp-sb-icon"},a]},b?{A:"div",G:"ytp-sb-count",S:b}:""]}]});f&&g.I(this.element,
"ytp-sb-classic");this.channelId=h;this.g=u}else{q=w.ma&&g.zt(w)&&!g.P(w.experiments,"subscribe_tooltipkillswitch");g.T.call(this,{A:"div",T:["ytp-button","ytp-sb"],H:[{A:"div",G:"ytp-sb-subscribe",M:q?{title:g.UG("Subscribe as $USER_NAME",{USER_NAME:w.ma}),"aria-label":"Subscribe to channel","data-tooltip-image":bu(w),"data-tooltip-opaque":String(g.rt(w)),tabindex:"0",role:"button"}:{"aria-label":"Subscribe to channel"},H:[{A:"div",G:"ytp-sb-text",H:[{A:"div",G:"ytp-sb-icon"},a]},b?{A:"div",G:"ytp-sb-count",
S:b}:""]},{A:"div",G:"ytp-sb-unsubscribe",M:q?{title:g.UG("Subscribed as $USER_NAME",{USER_NAME:w.ma}),"aria-label":"Unsubscribe to channel","data-tooltip-image":bu(w),"data-tooltip-opaque":String(g.rt(w)),tabindex:"0",role:"button"}:{"aria-label":"Unsubscribe to channel"},H:[{A:"div",G:"ytp-sb-text",H:[{A:"div",G:"ytp-sb-icon"},c]},d?{A:"div",G:"ytp-sb-count",S:d}:""]}]});var B=this;this.channelId=h;this.g=u;var z=this.Z("ytp-sb-subscribe"),D=this.Z("ytp-sb-unsubscribe");f&&g.I(this.element,"ytp-sb-classic");
if(e){l&&g.I(this.element,"ytp-sb-subscribed");var F=function(){a:{var V=B.channelId;if(m||n){var ca=r.L();var fd={c:V};if(g.P(ca.experiments,"embeds_botguard_with_subscribe_killswitch"))fd="";else{var hd;Rm.Dc()&&(hd=YB(fd));fd=hd||""}if(g.P(ca.experiments,"web_player_innertube_subscription_update")){ca=r.getVideoData();if(!ca){g.L(Error("No video data available when updating subscription."));break a}ca=ca.subscribeCommand;if(!ca){g.L(Error("No subscribe command in videoData."));break a}hd=g.kK(r.app);
if(!hd){g.L(Error("No innertube service available when updating subscriptions."));break a}tE(hd,ca,{botguardResponse:fd,feature:m})}else g.rl(mK(ca,!!m,!!n),m?{method:"POST",Re:{action_create_subscription_to_channel:1,c:V},yb:{feature:m,silo_name:null,r2b:fd},withCredentials:!0}:n?{method:"POST",Re:{action_subscribe:1},yb:{channel_ids:V,itct:n}}:{});r.ka("SUBSCRIBE",V)}}D.focus();D.removeAttribute("aria-hidden");z.setAttribute("aria-hidden","true")},H=function(){var V=B.channelId;
if(m||n){var ca=r.L();g.P(ca.experiments,"web_player_innertube_subscription_update")?(ca=r.getVideoData(),tE(g.kK(r.app),ca.unsubscribeCommand,{feature:m})):g.rl(mK(ca,null!=m,null!=n),m?{method:"POST",Re:{action_remove_subscriptions:1},yb:{c:V,silo_name:null,feature:m},withCredentials:!0}:n?{method:"POST",Re:{action_unsubscribe:1},yb:{channel_ids:V,itct:n}}:{});r.ka("UNSUBSCRIBE",V)}z.focus();z.removeAttribute("aria-hidden");D.setAttribute("aria-hidden","true")};
this.I(z,"click",F);this.I(D,"click",H);this.I(z,"keypress",function(V){13===V.keyCode&&F(V)});
this.I(D,"keypress",function(V){13===V.keyCode&&H(V)});
this.I(r,"SUBSCRIBE",this.i);this.I(r,"UNSUBSCRIBE",this.l);this.g&&q&&(this.tooltip=this.g.rb(),nK(this.tooltip),g.Md(this,g.fK(this.tooltip,z)),g.Md(this,g.fK(this.tooltip,D)))}else g.I(z,"ytp-sb-disabled"),g.I(D,"ytp-sb-disabled")}};
pK=function(a,b){g.T.call(this,{A:"div",G:"ytp-title-channel",H:[{A:"div",G:"ytp-title-beacon"},{A:"a",G:"ytp-title-channel-logo",M:{href:"{{channelLink}}",target:a.L().B,"aria-label":"{{channelLogoLabel}}"}},{A:"div",G:"ytp-title-expanded-overlay",H:[{A:"div",G:"ytp-title-expanded-heading",H:[{A:"h2",G:"ytp-title-expanded-title",H:[{A:"a",S:"{{expandedTitle}}",M:{href:"{{channelTitleLink}}",target:a.L().B,tabIndex:"{{channelTitleFocusable}}"}}]},{A:"h3",G:"ytp-title-expanded-subtitle",S:"{{expandedSubtitle}}"}]}]}]});
this.api=a;this.B=b;this.channel=this.Z("ytp-title-channel");this.g=this.Z("ytp-title-channel-logo");this.o=this.Z("ytp-title-expanded-overlay");this.l=this.i=this.subscribeButton=null;this.u=g.rt(this.api.L());g.DI(a,this.g,this,36925);this.u&&xja(this);this.I(a,"videodatachange",this.ga);this.I(a,"videoplayerreset",this.ga);this.ga()};
xja=function(a){var b=a.api.L(),c=a.api.getVideoData();if(!b.da){var d=b.yc?null:gK(),e=new g.oK("Subscribe",null,"Subscribed",null,!0,!1,c.qf,c.subscribed,"channel_avatar",null,d,a.api,a.B);a.subscribeButton=e;g.C(a,e);e.Y(a.o);g.DI(a.api,e.element,a,36926);e.hide();a.I(e.element,"click",function(){g.GI(a.api,e.element)});
var f=new jK(a.api,c.qf);a.i=f;g.C(a,f);f.Y(a.o);f.hide();a.I(a.api,"SUBSCRIBE",function(){c.vl&&f.show()});
a.I(a.api,"UNSUBSCRIBE",function(){c.vl&&(f.hide(),lK(f,!1))})}a.ha("channelTitleFocusable","-1");
b.g?a.I(a.g,"click",function(h){qK(a)&&(h.preventDefault(),a.isExpanded()?a.Ks():a.ht());g.GI(a.api,a.g)}):(a.I(a.channel,"mouseenter",a.ht),a.I(a.channel,"mouseleave",a.Ks),a.I(a.channel,"focusin",a.ht),a.I(a.channel,"focusout",function(h){a.channel.contains(h.relatedTarget)||a.Ks()}),a.I(a.g,"click",function(){g.GI(a.api,a.g)}));
a.l=new g.G(function(){a.isExpanded()&&(a.subscribeButton&&(a.subscribeButton.hide(),g.HI(a.api,a.subscribeButton.element,!1)),a.i&&(a.i.hide(),g.HI(a.api,a.i.element,!1)),a.channel.classList.remove("ytp-title-expanded"),a.channel.classList.add("ytp-title-show-collapsed"))},500);
g.C(a,a.l);a.I(a.channel,rK,function(){sK(a)});
a.I(a.api,"onHideControls",a.Av);a.I(a.api,"appresize",a.Av);a.I(a.api,"fullscreentoggled",a.Av)};
sK=function(a){a.channel.classList.remove("ytp-title-show-collapsed");a.channel.classList.remove("ytp-title-show-expanded")};
qK=function(a){var b=a.api.getPlayerSize();return a.u&&524<=b.width};
g.tK=function(){g.ln.apply(this,arguments)};
uK=function(a,b,c){var d={};b&&(d.v=b);c&&(d.list=c);a={name:a,locale:void 0,feature:void 0};for(var e in d)a[e]=d[e];d=g.Dd("/sharing_services",a);g.mo(d)};
g.wK=function(a,b,c,d){g.EJ.call(this,a);this.priority=b;c&&g.vK(this,c);d&&this.xb(d)};
g.xK=function(a,b,c){a=void 0===a?{}:a;b=void 0===b?[]:b;c=void 0===c?!1:c;b.push("ytp-menuitem");"role"in a||(a.role="menuitem");c||"tabindex"in a||(a.tabindex="0");return{A:c?"a":"div",T:b,M:a,H:[{A:"div",G:"ytp-menuitem-icon",S:"{{icon}}"},{A:"div",G:"ytp-menuitem-label",S:"{{label}}"},{A:"div",G:"ytp-menuitem-content",S:"{{content}}"}]}};
yK=function(a,b){a.ha("icon",b)};
g.vK=function(a,b){a.ha("label",b)};
zK=function(a,b,c,d,e){var f={A:"div",G:"ytp-panel"};if(c){var h="ytp-panel-title";var l={A:"div",G:"ytp-panel-header",H:[{A:"button",T:["ytp-button",h],H:[c]}]};if(e){var m="ytp-panel-options";l.H.unshift({A:"button",T:["ytp-button",m],H:[d]})}f.H=[l]}g.EJ.call(this,f);this.content=b;b.Y(this.element);this.nz=!1;c&&(c=this.Z(h),this.I(c,"click",this.oK),this.nz=!0,e&&(m=this.Z(m),this.I(m,"click",e)));b.subscribe("size-change",this.pB,this);this.I(a,"fullscreentoggled",this.pB)};
g.AK=function(a,b,c,d,e){b=void 0===b?null:b;var f={role:"menu"};b&&(f.id=b);b=new g.EJ({A:"div",G:"ytp-panel-menu",M:f});zK.call(this,a,b,c,d,e);this.menuItems=b;this.items=[];g.C(this,this.menuItems)};
g.BK=function(a){for(var b=g.p(a.items),c=b.next();!c.done;c=b.next())c.value.unsubscribe("size-change",a.Xu,a);a.items=[];g.ef(a.menuItems.element);a.menuItems.O("size-change")};
yja=function(a,b){return b.priority-a.priority};
CK=function(a){var b=g.xK({"aria-haspopup":"true"});g.wK.call(this,b,a);this.ia("keydown",this.g)};
DK=function(a,b){a.element.setAttribute("aria-haspopup",String(b))};
EK=function(a,b){g.wK.call(this,g.xK({role:"menuitemcheckbox","aria-checked":"false"}),b,a,{A:"div",G:"ytp-menuitem-toggle-checkbox"});this.checked=!1;this.ia("click",this.onClick)};
GK=function(a,b,c,d){g.AK.call(this,a);this.D=a;this.Ja=c;this.nb=d;this.Lf=new EK("Loop",7);this.getVideoUrl=new CK(6);this.Ef=new CK(5);this.Bf=new CK(4);this.Ta=new CK(3);this.An=new g.wK(g.xK({href:"{{href}}",target:this.D.L().B},void 0,!0),2,"Troubleshoot playback issue");this.mk=new g.EJ({A:"div",T:["ytp-copytext","ytp-no-contextmenu"],M:{draggable:"false",tabindex:"1"},S:"{{text}}"});this.by=new zK(this.D,this.mk);this.hi=null;g.C(this,this.Lf);this.vb(this.Lf,!0);this.Lf.ia("click",this.zN,
this);g.DI(a,this.Lf.element,this.Lf,28661);g.C(this,this.getVideoUrl);this.vb(this.getVideoUrl,!0);this.getVideoUrl.ia("click",this.xN,this);g.DI(a,this.getVideoUrl.element,this.getVideoUrl,28659);g.C(this,this.Ef);this.vb(this.Ef,!0);this.Ef.ia("click",this.yN,this);g.DI(a,this.Ef.element,this.Ef,28660);g.C(this,this.Bf);this.vb(this.Bf,!0);this.Bf.ia("click",this.wN,this);g.DI(a,this.Bf.element,this.Bf,28658);g.C(this,this.Ta);this.vb(this.Ta,!0);this.Ta.ia("click",this.vN,this);g.C(this,this.An);
this.vb(this.An,!0);this.An.ia("click",this.qM,this);b=new g.wK(g.xK(),1,"Stats for nerds");g.C(this,b);this.vb(b,!0);b.ia("click",this.JM,this);g.C(this,this.mk);this.mk.ia("click",this.EK,this);g.C(this,this.by);c=document.queryCommandSupported&&document.queryCommandSupported("copy");g.$r&&g.Xd(43)&&(c=!0);g.Is&&!g.Xd(41)&&(c=!1);c&&(this.hi=new g.T({A:"textarea",G:"ytp-html5-clipboard",M:{readonly:""}}),g.C(this,this.hi),this.hi.Y(this.element));yK(this.Lf,g.W?{A:"div",T:["ytp-icon","ytp-icon-repeat"]}:
{A:"svg",M:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},H:[{A:"path",M:{d:"M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z",fill:"white"}}]});yK(this.Ta,g.W?{A:"div",T:["ytp-icon","ytp-icon-bug-report"]}:{A:"svg",M:{height:"24",viewBox:"0 0 24 24",width:"24"},H:[{A:"path",M:{"clip-rule":"evenodd",d:"M20 10V8H17.19C16.74 7.22 16.12 6.54 15.37 6.04L17 4.41L15.59 3L13.42 5.17C13.39 5.16 13.37 5.16 13.34 5.16C13.18 5.12 13.02 5.1 12.85 5.07C12.79 5.06 12.74 5.05 12.68 5.04C12.46 5.02 12.23 5 12 5C11.51 5 11.03 5.07 10.58 5.18L10.6 5.17L8.41 3L7 4.41L8.62 6.04H8.63C7.88 6.54 7.26 7.22 6.81 8H4V10H6.09C6.03 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20ZM16 15C16 17.21 14.21 19 12 19C9.79 19 8 17.21 8 15V11C8 8.79 9.79 7 12 7C14.21 7 16 8.79 16 11V15ZM10 14H14V16H10V14ZM10 10H14V12H10V10Z",
fill:"white","fill-rule":"evenodd"}}]});yK(this.An,g.W?{A:"div",T:["ytp-icon","ytp-icon-help-outline"]}:{A:"svg",M:{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24"},H:[{A:"path",M:{"clip-rule":"evenodd",d:"M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 16V18H11V16H13ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 11.28 15.21 11.97 14.44 12.64C13.71 13.28 13 13.90 13 15H11C11 13.17 11.94 12.45 12.77 11.82C13.42 11.32 14 10.87 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10H8Z",
fill:"white","fill-rule":"evenodd"}}]});yK(b,g.CH());this.I(a,"loopchange",this.CB);this.I(a,"videodatachange",this.Ia);FK(this);this.Vf(this.D.getVideoData())};
IK=function(a,b){var c=!1;if(a.hi){var d=a.hi.element;d.value=b;d.select();try{c=document.execCommand("copy")}catch(e){}}c?a.Ja.Na():(a.mk.xb(b,"text"),g.HK(a.Ja,a.by),rJ(a.mk.element),a.hi&&(a.hi=null,FK(a)));return c};
FK=function(a){var b=!!a.hi;g.vK(a.Ta,b?"Copy debug info":"Get debug info");DK(a.Ta,!b);g.vK(a.Bf,b?"Copy embed code":"Get embed code");DK(a.Bf,!b);g.vK(a.getVideoUrl,b?"Copy video URL":"Get video URL");DK(a.getVideoUrl,!b);g.vK(a.Ef,b?"Copy video URL at current time":"Get video URL at current time");DK(a.Ef,!b);yK(a.Bf,b?zH():null);yK(a.getVideoUrl,b?EH():null);yK(a.Ef,b?EH():null)};
g.JK=function(a,b){g.FJ.call(this,a,{A:"div",T:["ytp-popup",b||""]},100,!0);this.i=[];this.l=this.u=null;this.xq=this.maxWidth=0;this.size=new g.He(0,0);this.ia("keydown",this.LI)};
LK=function(a){var b=KK(a);if(b){g.Fh(a.element,a.maxWidth||"100%",a.xq||"100%");g.oh(b.element,"minWidth","250px");g.oh(b.element,"width","");g.oh(b.element,"height","");g.oh(b.element,"maxWidth","100%");g.oh(b.element,"maxHeight","100%");g.oh(b.content.element,"height","");var c=g.Gh(b.element);c.width+=1;c.height+=1;g.oh(b.element,"width",c.width+"px");g.oh(b.element,"height",c.height+"px");g.oh(b.element,"maxWidth","");g.oh(b.element,"maxHeight","");var d=0;b.nz&&(d=b.Z("ytp-panel-header"),d=
g.Gh(d).height);g.oh(b.content.element,"height",c.height-d+"px");if(b.element instanceof HTMLElement){d=b.element;var e=d.scrollWidth-d.clientWidth;0<d.offsetWidth-d.clientWidth&&0<e&&(c.width+=e,g.oh(b.element,"width",c.width+"px"))}a.size=c}};
g.HK=function(a,b){var c=a.i[a.i.length-1];a.i.push(b);MK(a,c,b)};
g.NK=function(a){var b=a.i.pop(),c=a.i[0];a.i=[c];MK(a,b,c,!0)};
MK=function(a,b,c,d){OK(a);KK(a);g.qi(c.element,"ytp-panel-animate-back")||g.qi(c.element,"ytp-panel-animate-forward");b&&(b.unsubscribe("size-change",a.Cl,a),b.unsubscribe("back",a.pe,a));c.subscribe("size-change",a.Cl,a);c.subscribe("back",a.pe,a);if(a.Ha()){g.I(c.element,d?"ytp-panel-animate-back":"ytp-panel-animate-forward");c.Y(a.element);c.focus();a.element.scrollLeft=0;a.element.scrollTop=0;var e=a.size;LK(a);g.Fh(a.element,e);a.u=new g.G(function(){zja(a,b,c,d)},20,a);
a.u.start()}else c.Y(a.element),b&&b.detach()};
zja=function(a,b,c,d){a.u.dispose();a.u=null;g.I(a.element,"ytp-popup-animating");d?(g.I(b.element,"ytp-panel-animate-forward"),g.si(c.element,"ytp-panel-animate-back")):(g.I(b.element,"ytp-panel-animate-back"),g.si(c.element,"ytp-panel-animate-forward"));g.Fh(a.element,a.size);a.l=new g.G(function(){g.si(a.element,"ytp-popup-animating");b.detach();g.ti(b.element,["ytp-panel-animate-back","ytp-panel-animate-forward"]);a.l.dispose();a.l=null},250,a);
a.l.start()};
KK=function(a){return a.i[a.i.length-1]};
OK=function(a){a.u&&g.fi(a.u);a.l&&g.fi(a.l)};
g.QK=function(a,b,c){g.JK.call(this,a);this.R=b;this.nb=c;this.B=new g.tK(this);this.o=null;g.C(this,this.B);g.DI(a,this.element,this,28656);g.I(this.element,"ytp-contextmenu");PK(this);this.hide()};
PK=function(a){g.nn(a.B);"gvn"!==a.D.L().playerStyle&&a.B.I(g.lI(a.D),"contextmenu",a.DK)};
RK=function(a){a.D.isFullscreen()?g.BI(a.D,a.element,9):a.Y(document.body)};
SK=function(a,b){g.T.call(this,{A:"button",T:["ytp-button","ytp-copylink-button"],M:{title:"{{title-attr}}","data-tooltip-opaque":String(g.rt(a.L()))},H:[{A:"div",G:"ytp-copylink-icon",S:"{{icon}}"},{A:"div",G:"ytp-copylink-title",S:"Copy link",M:{"aria-hidden":"true"}}]});this.api=a;this.g=b;this.visible=!1;this.tooltip=this.g.rb();var c=a.L();nK(this.tooltip);g.J(this.element,"ytp-show-copylink-title",g.rt(c)&&!g.Ct(c));g.DI(a,this.element,this,86570);this.ia("click",this.onClick);this.I(a,"videodatachange",
this.ga);this.I(a,"videoplayerreset",this.ga);this.I(a,"appresize",this.ga);this.ga();g.Md(this,g.fK(this.tooltip,this.element))};
Aja=function(a){a.ha("icon",rH());a.api.L().g?TK(a.tooltip,a.element,"Link copied to clipboard"):(a.ha("title-attr","Link copied to clipboard"),UK(a.tooltip),TK(a.tooltip,a.element));var b=a.ia("mouseleave",function(){a.gb(b);a.ga();a.tooltip.gg()})};
Cja=function(a,b){return g.hh(a,function d(){var e=this,f;return g.Aa(d,function(h){if(1==h.g){f=e.api.L();if(!g.P(f.experiments,"embeds_enable_clipboard_api"))return h["return"](Bja(e,b));ta(h,2);return g.sa(h,navigator.clipboard.writeText(b),4)}if(2!=h.g)return h["return"](!0);va(h);return h["return"](!1)})})};
Bja=function(a,b){var c=!1,d=g.bf("TEXTAREA");d.value=b;d.setAttribute("readonly","");var e=a.api.getRootNode();e.appendChild(d);if(Yl){var f=window.getSelection();f.removeAllRanges();var h=document.createRange();h.selectNodeContents(d);f.addRange(h);d.setSelectionRange(0,b.length)}else d.select();try{c=document.execCommand("copy")}catch(l){}e.removeChild(d);return c};
VK=function(a){g.T.call(this,{A:"div",G:"ytp-doubletap-ui",H:[{A:"div",G:"ytp-doubletap-fast-forward-ve"},{A:"div",G:"ytp-doubletap-rewind-ve"},{A:"div",G:"ytp-doubletap-static-circle",H:[{A:"div",G:"ytp-doubletap-ripple"}]},{A:"div",G:"ytp-doubletap-overlay-a11y"},{A:"div",G:"ytp-doubletap-seek-info-container",H:[{A:"div",G:"ytp-doubletap-arrows-container",H:[{A:"span",G:"ytp-doubletap-base-arrow"},{A:"span",G:"ytp-doubletap-base-arrow"},{A:"span",G:"ytp-doubletap-base-arrow"}]},{A:"div",G:"ytp-doubletap-tooltip",
H:[{A:"div",G:"ytp-doubletap-tooltip-label",S:"{{seekTime}}"}]}]}]});this.D=a;this.l=new g.G(this.show,10,this);this.i=new g.G(this.hide,700,this);g.C(this,this.l);g.C(this,this.i);this.hide();this.g=this.Z("ytp-doubletap-fast-forward-ve");this.o=this.Z("ytp-doubletap-rewind-ve");g.DI(this.D,this.g,this,28240);g.DI(this.D,this.o,this,28239);g.HI(this.D,this.g,!0);g.HI(this.D,this.o,!0)};
WK=function(a){var b=null;try{b=a.toLocaleString("en",{style:"percent"})}catch(c){b=a.toLocaleString(void 0,{style:"percent"})}return b};
g.YK=function(a,b,c,d,e,f){g.ln.call(this);var h=this;this.api=a;this.contextMenu=c;this.Lb=d;this.nb=e;this.l=f;this.i=new g.G(function(){XK(h,!1)},1E3);
this.g="";g.C(this,this.i);a=g.Ta(this.Kv,!1);this.I(b,"mousedown",a);this.I(c.element,"mousedown",a);this.I(b,"keydown",this.lz);this.I(c.element,"keydown",this.lz);this.I(b,"keyup",this.mz);this.I(c.element,"keyup",this.mz)};
$K=function(a,b,c,d){var e=g.QI(g.gI(a.api));if(e&&e.loaded){var f=a.api.getSubtitlesUserSettings();e=void 0;for(var h=0;h<g.ZK.length;h++){var l=g.ZK[h];if(l.option===b){e=l.options;break}}h=void 0;for(l=0;l<e.length;l++)e[l].option===f[b]&&(h=l);if(d)if(c){if(0===h)return}else if(h===e.length-1)return;d={};d[b]=e[(h+(c?e.length-1:1))%e.length].option;a.api.updateSubtitlesUserSettings(d);XK(a,!0);a.i.start()}};
aL=function(a,b){a.api.fd();if(g.S(g.oH(a.api),4)){var c=a.api.getVideoData().ya;c&&(c=c.video)&&a.api.seekBy(b/(c.fps||30))}};
XK=function(a,b){g.QI(g.gI(a.api))&&a.api.setOption("captions","sampleSubtitles",b)};
bL=function(a,b,c){g.T.call(this,{A:"button",T:["ytp-button","ytp-overflow-button"],M:{title:"More","aria-haspopup":"true","aria-owns":c.element.id},H:[{A:"div",G:"ytp-overflow-icon",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-more-vert"]}:{A:"svg",M:{height:"100%",viewBox:"-5 -5 36 36",width:"100%"},H:[{A:"path",M:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",fill:"#fff"}}]}]}]});var d=this;this.D=
a;this.g=b;this.visible=!1;this.tooltip=this.g.rb();g.DI(a,this.element,this,16499);this.I(a,"appresize",this.ga);this.I(a,"fullscreentoggled",this.ga);this.I(a,"presentingplayerstatechange",this.ga);this.ga();g.Md(this,g.fK(this.tooltip,this.element));this.ia("click",function(){g.GI(a,d.element);HJ(c,d.element,!1)})};
cL=function(a,b){g.FJ.call(this,a,{A:"div",G:"ytp-overflow-panel",M:{id:$G(),role:"dialog"},H:[{A:"div",G:"ytp-overflow-panel-content",H:[{A:"div",G:"ytp-overflow-panel-action-buttons",S:"{{buttons}}"}]},{A:"button",T:["ytp-overflow-panel-close","ytp-button"],M:{title:"Close"},H:[g.xH()]}]},250);this.actionButtons=[];this.tooltip=b.rb();this.i=this.Z("ytp-overflow-panel-content");this.closeButton=this.Z("ytp-overflow-panel-close");this.I(this.closeButton,"click",this.Na);g.Md(this,g.fK(this.tooltip,
this.closeButton));this.ia("click",this.KI);this.I(a,"videoplayerreset",this.hide);this.I(a,"fullscreentoggled",this.JI);this.hide()};
dL=function(a,b){a.actionButtons.includes(b)||(a.actionButtons.push(b),a.ha("buttons",a.actionButtons))};
eL=function(a,b){for(var c=g.p(a.actionButtons),d=c.next();!d.done;d=c.next())d.value.eb(b)};
fL=function(a,b,c){var d=b.xa(c),e=a.L(),f=d.Gc("default.jpg");g.T.call(this,{A:"a",T:["ytp-video-menu-item","ytp-button"],M:{role:"menuitemradio","aria-label":d.title,href:e.getVideoUrl(d.videoId,b.listId?b.listId.toString():null)},H:[{A:"div",G:"ytp-video-menu-item-index",S:String(c+1)},{A:"div",G:"ytp-video-menu-item-now-playing",S:"\u25b6"},{A:"div",G:"ytp-video-menu-item-thumbnail",M:{style:f?"background-image: url("+f+");":void 0}},{A:"div",G:"ytp-video-menu-item-title",S:d.title},{A:"div",
G:"ytp-video-menu-item-author",S:d.author}]});this.api=a;this.index=c;this.ia("click",this.onClick)};
gL=function(a){g.FJ.call(this,a,{A:"div",G:"ytp-playlist-menu",M:{role:"dialog",id:$G()},H:[{A:"div",G:"ytp-playlist-menu-header",H:[{A:"div",G:"ytp-playlist-menu-title",H:[{A:"a",G:"ytp-playlist-menu-title-name",M:{href:"{{playlisturl}}"},S:"{{title}}"},{A:"button",T:["ytp-playlist-menu-close","ytp-button"],M:{"aria-label":"Close"},H:[g.xH()]}]},{A:"div",G:"ytp-playlist-menu-subtitle",S:"{{subtitle}}"}]},{A:"div",G:"ytp-playlist-menu-items",M:{role:"menu"}}]},250);this.api=a;this.selected=this.o=
this.playlist=null;this.items=this.Z("ytp-playlist-menu-items");this.l=new g.ln(this);this.i=[];a=this.Z("ytp-playlist-menu-close");this.I(a,"click",this.Na);a=this.Z("ytp-playlist-menu-title-name");this.I(a,"click",this.XM);g.C(this,this.l);this.hide()};
hL=function(a,b,c){g.T.call(this,{A:"button",T:["ytp-playlist-menu-button","ytp-button"],M:{title:"{{title}}","aria-owns":String(c.element.id),"aria-haspopup":"true","aria-label":"Playlist"},H:[{A:"div",G:"ytp-playlist-menu-button-icon",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-playlist"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"m 22.53,21.42 0,6.85 5.66,-3.42 -5.66,-3.42 0,0 z m -11.33,0 9.06,0 0,2.28 -9.06,0 0,-2.28 0,0 z m 0,-9.14 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z m 0,4.57 13.6,0 0,2.28 -13.6,0 0,-2.28 0,0 z",
fill:"#fff"}}]}]},{A:"div",G:"ytp-playlist-menu-button-text",S:"{{text}}"}]});var d=this;this.api=a;this.playlist=null;this.visible=!1;this.tooltip=b.rb();g.DI(a,this.element,this,70344);this.I(a,"videodatachange",this.g);this.I(a,"onPlaylistUpdate",this.g);this.I(a,"presentingplayerstatechange",this.ga);this.I(a,"appresize",this.ga);this.hide();this.g();g.Md(this,g.fK(this.tooltip,this.element));this.ia("click",function(){g.GI(a,d.element);HJ(c,d.element,!1)})};
iL=function(a,b,c){g.T.call(this,{A:"div",G:"ytp-promotooltip-wrapper",H:[{A:"div",G:"ytp-promotooltip-container",H:[{A:"div",G:"ytp-promotooltip-content",H:[{A:"div",G:"ytp-promotooltip-title",S:"{{title}}"},{A:"div",G:"ytp-promotooltip-details",S:"{{details}}"}]},{A:"div",G:"ytp-promotooltip-buttons",H:[{A:"div",G:"ytp-promotooltip-dismiss-button",S:"{{dismissButtonText}}"},{A:"div",G:"ytp-promotooltip-accept-button",S:"{{acceptButtonText}}"}]}]},{A:"div",G:"ytp-promotooltip-pointer"}]});this.tooltipRenderer=
a;this.o=b;this.D=c;this.g=null;this.title=this.Z("ytp-promotooltip-title");this.details=this.Z("ytp-promotooltip-details");this.acceptButton=this.Z("ytp-promotooltip-accept-button");this.dismissButton=this.Z("ytp-promotooltip-dismiss-button");this.visible=!1;g.dH(this,this.visible);this.I(c,"onShowControls",this.l);this.I(c,"onHideControls",this.i)};
jL=function(a,b){g.T.call(this,{A:"button",T:["ytp-replay-button","ytp-button"],M:{title:"Replay"},H:[g.MH()]});this.D=a;this.I(a,"presentingplayerstatechange",this.g);this.ia("click",this.onClick,this);var c=g.oH(a);g.dH(this,g.S(c,2));g.fK(b.rb(),this.element)};
g.kL=function(a,b,c,d){d=void 0===d?240:d;g.T.call(this,{A:"button",T:["ytp-button","ytp-share-button"],M:{title:"Share","aria-haspopup":"true","aria-owns":c.element.id,"data-tooltip-opaque":String(g.rt(a.L()))},H:[{A:"div",G:"ytp-share-icon",S:"{{icon}}"},{A:"div",G:"ytp-share-title",S:"Share"}]});this.api=a;this.g=b;this.l=c;this.i=d;this.visible=!1;this.tooltip=this.g.rb();b=a.L();g.DI(a,this.element,this,28664);this.ia("click",this.onClick);this.I(a,"videodatachange",this.ga);this.I(a,"videoplayerreset",
this.ga);this.I(a,"appresize",this.ga);this.I(a,"presentingplayerstatechange",this.ga);this.ga();g.J(this.element,"ytp-show-share-title",g.rt(b)&&!g.Ct(b));g.Md(this,g.fK(this.tooltip,this.element))};
g.lL=function(a,b){var c=$G(),d=a.L();c={A:"div",G:"ytp-share-panel",M:{id:$G(),role:"dialog","aria-labelledby":c},H:[{A:"div",G:"ytp-share-panel-inner-content",H:[{A:"div",G:"ytp-share-panel-title",M:{id:c},S:"Share"},{A:"a",T:["ytp-share-panel-link","ytp-no-contextmenu"],M:{href:"{{link}}",target:d.B,title:"Share link","aria-label":"{{shareLinkWithUrl}}"},S:"{{linkText}}"},{A:"label",G:"ytp-share-panel-include-playlist",H:[{A:"input",G:"ytp-share-panel-include-playlist-checkbox",M:{type:"checkbox",
checked:!0}},"Include playlist"]},{A:"div",G:"ytp-share-panel-loading-spinner",H:[qJ()]},{A:"div",G:"ytp-share-panel-service-buttons",S:"{{buttons}}"},{A:"div",G:"ytp-share-panel-error",S:"An error occurred while retrieving sharing information. Please try again later."}]},{A:"button",T:["ytp-share-panel-close","ytp-button"],M:{title:"Close"},H:[g.xH()]}]};g.FJ.call(this,a,c,250);this.api=a;this.tooltip=b.rb();this.i=[];this.u=this.Z("ytp-share-panel-inner-content");this.closeButton=this.Z("ytp-share-panel-close");
this.I(this.closeButton,"click",this.Na);g.Md(this,g.fK(this.tooltip,this.closeButton));this.o=this.Z("ytp-share-panel-include-playlist-checkbox");this.I(this.o,"click",this.ga);this.l=this.Z("ytp-share-panel-link");g.Md(this,g.fK(this.tooltip,this.l));this.ia("click",this.SI);this.I(a,"videoplayerreset",this.hide);this.I(a,"fullscreentoggled",this.RI);this.I(a,"onLoopRangeChange",this.ga);this.hide()};
mL=function(a,b){a.ba()||(g.si(a.element,"ytp-share-panel-loading"),Dja(a,b))};
Dja=function(a,b){nL(a);for(var c=b.links||b.shareTargets,d=0,e={},f=0;f<c.length&&2>d;e={Hh:e.Hh},f++){e.Hh=c[f];a:switch(e.Hh.img||e.Hh.iconId){case "facebook":var h=g.W?{A:"div",T:["ytp-icon","ytp-icon-share-facebook"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},H:[{A:"rect",M:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{A:"path",M:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z m -1.9,3.8 0,5.7 -3.8,0 c -1.04,0 -1.9,.84 -1.9,1.9 l 0,3.8 5.7,0 0,5.7 -5.7,0 0,13.3 -5.7,0 0,-13.3 -3.8,0 0,-5.7 3.8,0 0,-4.75 c 0,-3.67 2.97,-6.65 6.65,-6.65 l 4.75,0 z",
fill:"#39579b"}}]};break a;case "twitter":h=g.W?{A:"div",T:["ytp-icon","ytp-icon-share-twitter"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},H:[{A:"rect",M:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{A:"path",M:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 l 0,0 z M 29.84,13.92 C 29.72,22.70 24.12,28.71 15.74,29.08 12.28,29.24 9.78,28.12 7.6,26.75 c 2.55,.40 5.71,-0.60 7.41,-2.06 -2.50,-0.24 -3.98,-1.52 -4.68,-3.56 .72,.12 1.48,.09 2.17,-0.05 -2.26,-0.76 -3.86,-2.15 -3.95,-5.07 .63,.28 1.29,.56 2.17,.60 C 9.03,15.64 7.79,12.13 9.21,9.80 c 2.50,2.75 5.52,4.99 10.47,5.30 -1.24,-5.31 5.81,-8.19 8.74,-4.62 1.24,-0.23 2.26,-0.71 3.23,-1.22 -0.39,1.23 -1.17,2.09 -2.11,2.79 1.03,-0.14 1.95,-0.38 2.73,-0.77 -0.47,.99 -1.53,1.9 -2.45,2.66 l 0,0 z",
fill:"#01abf0"}}]};break a;default:h=null}h&&(h=new g.T({A:"a",T:["ytp-share-panel-service-button","ytp-button"],M:{href:e.Hh.url,target:"_blank",title:e.Hh.sname||e.Hh.serviceName},H:[h]}),h.ia("click",function(m){return function(n){if(g.WG(n)){var q=m.Hh.url;var r=void 0===r?{}:r;r.target=r.target||"YouTube";r.width=r.width||"600";r.height=r.height||"600";r||(r={});var u=window;var w=q instanceof g.wc?q:g.Bc("undefined"!=typeof q.href?q.href:String(q));q=r.target||q.target;var B=[];for(z in r)switch(z){case "width":case "height":case "top":case "left":B.push(z+
"="+r[z]);break;case "target":case "noopener":case "noreferrer":break;default:B.push(z+"="+(r[z]?1:0))}var z=B.join(",");if(g.Rd()&&u.navigator&&u.navigator.standalone&&q&&"_self"!=q)z=g.bf("A"),g.bd(z,w),z.setAttribute("target",q),r.noreferrer&&z.setAttribute("rel","noreferrer"),r=document.createEvent("MouseEvent"),r.initMouseEvent("click",!0,!0,u,1),z.dispatchEvent(r),u={};else if(r.noreferrer){if(u=ed("",u,q,z),r=g.xc(w),u&&(g.Xt&&-1!=r.indexOf(";")&&(r="'"+r.replace(/'/g,"%27")+"'"),u.opener=
null,r=g.$c(g.$b("b/12014412, meta tag with sanitized URL"),'<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+g.jd(r)+'">'),w=u.document))w.write(g.Vc(r)),w.close()}else(u=ed(w,u,q,z))&&r.noopener&&(u.opener=null);if(r=u)r.opener||(r.opener=window),r.focus();g.jk(n)}}}(e)),g.Md(h,g.fK(a.tooltip,h.element)),a.i.push(h),d++)}var l=b.more||b.moreLink;
c=new g.T({A:"a",T:["ytp-share-panel-service-button","ytp-button"],H:[{A:"span",G:"ytp-share-panel-service-button-more",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-share-more"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 38 38",width:"100%"},H:[{A:"rect",M:{fill:"#fff",height:"34",width:"34",x:"2",y:"2"}},{A:"path",M:{d:"M 34.2,0 3.8,0 C 1.70,0 .01,1.70 .01,3.8 L 0,34.2 C 0,36.29 1.70,38 3.8,38 l 30.4,0 C 36.29,38 38,36.29 38,34.2 L 38,3.8 C 38,1.70 36.29,0 34.2,0 Z m -5.7,21.85 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z m -9.5,0 c 1.57,0 2.85,-1.27 2.85,-2.85 0,-1.57 -1.27,-2.85 -2.85,-2.85 -1.57,0 -2.85,1.27 -2.85,2.85 0,1.57 1.27,2.85 2.85,2.85 z",
fill:"#4e4e4f","fill-rule":"evenodd"}}]}]}],M:{href:l,target:"_blank",title:"More"}});c.ia("click",function(m){g.pJ(l,a.api,m)&&a.api.ka("SHARE_CLICKED")});
g.Md(c,g.fK(a.tooltip,c.element));a.i.push(c);a.ha("buttons",a.i)};
oL=function(a){g.si(a.element,"ytp-share-panel-loading");g.I(a.element,"ytp-share-panel-fail")};
nL=function(a){for(var b=g.p(a.i),c=b.next();!c.done;c=b.next())c=c.value,c.detach(),g.Nd(c);a.i=[]};
qL=function(a){g.FJ.call(this,a,{A:"button",T:["ytp-skip-intro-button","ytp-popup","ytp-button"],H:[{A:"div",G:"ytp-skip-intro-button-text",S:"Skip Intro"}]},100);var b=this;this.l=!1;this.i=new g.G(function(){b.hide()},5E3);
this.ki=this.nj=NaN;g.C(this,this.i);this.B=function(){b.show()};
this.u=function(){b.hide()};
this.o=function(){var c=b.D.getCurrentTime();c>b.nj/1E3&&c<b.ki/1E3&&b.show()};
this.I(this.D,"videodatachange",function(c,d){if("dataloaded"===c)if(b.nj=d.nj,b.ki=d.ki,isNaN(b.nj)||isNaN(b.ki))b.l&&(g.pL(b.D.app,"intro",void 0),b.D.removeEventListener(g.hu("intro"),b.B),b.D.removeEventListener("crx_intro",b.u),b.D.removeEventListener("onShowControls",b.o),b.hide(),b.l=!1);else{b.D.addEventListener(g.hu("intro"),b.B);b.D.addEventListener("crx_intro",b.u);b.D.addEventListener("onShowControls",b.o);var e=new g.eu(b.nj,b.ki,{priority:7,namespace:"intro"});g.xI(b.D,[e]);b.l=!0}});
this.I(this.element,"click",function(){b.D.seekTo(b.ki/1E3)});
this.hide()};
rL=function(a,b){g.T.call(this,{A:"button",T:["ytp-airplay-button","ytp-button"],M:{title:"AirPlay"},S:"{{icon}}"});this.D=a;this.ia("click",this.onClick);this.I(a,"airplayactivechange",this.ga);this.I(a,"airplayavailabilitychange",this.ga);this.ga();g.Md(this,g.fK(b.rb(),this.element))};
g.tL=function(a){g.T.call(this,{A:"div",G:"ytp-gradient-bottom"});this.i=g.bf("CANVAS");this.g=this.i.getContext("2d");this.l=NaN;this.i.width=1;this.o=g.Ct(a.L());g.sL(this,g.lI(a).getPlayerSize().height)};
g.sL=function(a,b){if(a.g){var c=Math.floor(b*(a.o?1:.4));c=Math.max(c,47);var d=c+2;if(a.l!==d){a.l=d;a.i.height=d;a.g.clearRect(0,0,1,d);var e=a.g.createLinearGradient(0,2,0,2+c);if(a.o)e.addColorStop(.133,"rgba(0, 0, 0, 0.2)"),e.addColorStop(.44,"rgba(0, 0, 0, 0.243867)"),e.addColorStop(1,"rgba(0, 0, 0, 0.8)");else{var f=c-42;e.addColorStop(0,"rgba(0, 0, 0, 0)");e.addColorStop(f/c,"rgba(0, 0, 0, 0.3)");e.addColorStop(1,"rgba(0, 0, 0, 0.68)")}a.g.fillStyle=e;a.g.fillRect(0,2,1,c);a.element.style.height=
d+"px";a.element.style.backgroundImage="url("+a.i.toDataURL()+")"}}};
uL=function(a,b,c,d,e){g.T.call(this,{A:"div",G:"ytp-chapter-container",H:[{A:"button",T:["ytp-chapter-title","ytp-button"],M:{title:"View chapter","aria-label":"View chapter"},H:[{A:"span",M:{"aria-hidden":"true"},G:"ytp-chapter-title-prefix",S:"\u2022"},{A:"div",G:"ytp-chapter-title-content",S:"{{title}}"},{A:"div",G:"ytp-chapter-title-chevron",H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-chevron-right"]}:{A:"svg",M:{height:"100%",viewBox:"0 0 24 24",width:"100%"},H:[{A:"path",M:{d:"M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z",
fill:"#fff"}}]}]}]}]});this.D=a;this.F=b;this.B=c;this.C=d;this.K=e;this.u="";this.currentIndex=0;this.l=void 0;this.i=!0;this.o=this.Z("ytp-chapter-container");this.g=this.Z("ytp-chapter-title");this.updateVideoData("newdata",this.D.getVideoData());this.I(a,"videodatachange",this.updateVideoData);this.I(this.o,"click",this.onClick);a.L().aa("html5_ux_control_flexbox_killswitch")&&this.I(a,"resize",this.N);this.I(a,"onVideoProgress",this.Sb);this.I(a,"SEEK_TO",this.Sb)};
vL=function(a,b,c,d,e){var f=b.Cq/b.rows,h=Math.min(c/(b.Dq/b.columns),d/f),l=b.Dq*h,m=b.Cq*h;l=Math.floor(l/b.columns)*b.columns;m=Math.floor(m/b.rows)*b.rows;var n=l/b.columns,q=m/b.rows,r=-b.column*n,u=-b.row*q;e&&45>=f&&(q-=1/h);n-=2/h;a=a.style;a.width=n+"px";a.height=q+"px";e||(d=(d-q)/2,c=(c-n)/2,a.marginTop=Math.floor(d)+"px",a.marginBottom=Math.ceil(d)+"px",a.marginLeft=Math.floor(c)+"px",a.marginRight=Math.ceil(c)+"px");a.background="url("+b.url+") "+r+"px "+u+"px/"+l+"px "+m+"px"};
g.wL=function(a){g.T.call(this,{A:"div",G:"ytp-storyboard-framepreview",H:[{A:"div",G:"ytp-storyboard-framepreview-img"}]});this.api=a;this.u=this.Z("ytp-storyboard-framepreview-img");this.i=null;this.l=NaN;this.events=new g.ln(this);this.g=new g.fJ(this,100);g.C(this,this.events);g.C(this,this.g);this.I(this.api,"presentingplayerstatechange",this.Pb)};
xL=function(a,b){var c=!!a.i;a.i=b;a.i?(c||(a.events.I(a.api,"videodatachange",function(){xL(a,a.api.Ie())}),a.events.I(a.api,"progresssync",a.Wc),a.events.I(a.api,"appresize",a.o)),a.l=NaN,yL(a),a.g.show(200)):(c&&g.nn(a.events),a.g.hide(),a.g.stop())};
yL=function(a){var b=a.i,c=a.api.getCurrentTime(),d=g.lI(a.api).getPlayerSize(),e=fw(b,d.width);c=kw(b,e,c);c!==a.l&&(a.l=c,hw(b,c,d.width),b=b.ej(c,d.width),vL(a.u,b,d.width,d.height))};
zL=function(a,b){g.T.call(this,{A:"button",T:["ytp-fullerscreen-edu-button","ytp-button"],H:[{A:"div",T:["ytp-fullerscreen-edu-text"],S:"Scroll for details"},{A:"div",T:["ytp-fullerscreen-edu-chevron"],H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-chevron-down"]}:{A:"svg",M:{height:"100%",viewBox:"0 0 24 24",width:"100%"},H:[{A:"path",M:{d:"M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z",fill:"#fff"}}]}]}]});this.g=a;this.u=b;this.l=new g.fJ(this,250,void 0,100);this.o=this.i=!1;g.DI(a,this.element,
this,61214);this.u=b;g.C(this,this.l);this.I(a,"fullscreentoggled",this.ga);this.I(a,"presentingplayerstatechange",this.ga);this.ia("click",this.onClick);this.ga()};
g.AL=function(a,b){g.T.call(this,{A:"button",T:["ytp-fullscreen-button","ytp-button"],M:{title:"{{title}}"},S:"{{icon}}"});this.D=a;this.l=b;this.message=null;this.g=g.fK(this.l.rb(),this.element);this.i=new g.G(this.kF,2E3,this);g.C(this,this.i);this.I(a,"fullscreentoggled",this.xA);this.I(a,"presentingplayerstatechange",this.ga);this.ia("click",this.onClick);if(gn()){var c=g.lI(this.D);this.I(c,Zca(),this.Wu);this.I(c,g.kn(document),this.xh)}a.L().la||this.disable();this.ga();this.xA(a.isFullscreen())};
BL=function(a,b){g.T.call(this,{A:"button",T:["ytp-miniplayer-button","ytp-button"],M:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-button"},H:[JH()]});this.D=a;this.visible=!1;this.ia("click",this.onClick);this.I(a,"fullscreentoggled",this.ga);this.ha("title",g.sJ(a,"Miniplayer","i"));g.Md(this,g.fK(b.rb(),this.element));g.DI(a,this.element,this,62946);this.ga()};
CL=function(a,b,c){g.T.call(this,{A:"button",T:["ytp-multicam-button","ytp-button"],M:{title:"Switch camera","aria-haspopup":"true","data-preview":"{{preview}}","data-tooltip-text":"{{text}}"},H:[g.W?{A:"div",T:["ytp-icon","ytp-icon-switch-camera"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M 26,10 22.83,10 21,8 15,8 13.17,10 10,10 c -1.1,0 -2,.9 -2,2 l 0,12 c 0,1.1 .9,2 2,2 l 16,0 c 1.1,0 2,-0.9 2,-2 l 0,-12 c 0,-1.1 -0.9,-2 -2,-2 l 0,0 z m -5,11.5 0,-2.5 -6,0 0,2.5 -3.5,-3.5 3.5,-3.5 0,2.5 6,0 0,-2.5 3.5,3.5 -3.5,3.5 0,0 z",
fill:"#fff"}}]}]});var d=this;this.D=a;this.g=!1;this.i=new g.G(this.l,400,this);this.tooltip=b.rb();nK(this.tooltip);g.C(this,this.i);this.ia("click",function(){HJ(c,d.element,!1)});
this.I(a,"presentingplayerstatechange",function(){d.ga(!1)});
this.I(a,"videodatachange",this.Ia);this.ga(!0);g.Md(this,g.fK(this.tooltip,this.element))};
DL=function(a){g.FJ.call(this,a,{A:"div",G:"ytp-multicam-menu",M:{role:"dialog"},H:[{A:"div",G:"ytp-multicam-menu-header",H:[{A:"div",G:"ytp-multicam-menu-title",H:["Switch camera",{A:"button",T:["ytp-multicam-menu-close","ytp-button"],M:{"aria-label":"Close"},H:[g.xH()]}]}]},{A:"div",G:"ytp-multicam-menu-items"}]},250);this.api=a;this.l=new g.ln(this);this.items=this.Z("ytp-multicam-menu-items");this.i=[];g.C(this,this.l);a=this.Z("ytp-multicam-menu-close");this.I(a,"click",this.Na);this.hide()};
EL=function(){g.A.call(this);this.i=null;this.startTime=this.duration=0;this.delay=new g.ci(this.g,null,this);g.C(this,this.delay)};
FL=function(a,b){if("path"===b.A)return b.M.d;if(b.H)for(var c=0;c<b.H.length;c++){var d=b.H[c];if(d&&"string"!==typeof d&&(d=FL(a,d)))return d}};
JL=function(a,b,c){c=FL(a,c);var d=b.getElementsByTagName("path")[0],e=d.getAttribute("d");if(d.getAttribute("id")){var f=$G();b=b.getElementsByTagName("use");for(var h=0;h<b.length;h++)b[h].setAttributeNS("http://www.w3.org/1999/xlink","href","#"+f);d.setAttribute("id",f)}var l=GL(e),m=GL(c);HL(a,function(n){d.setAttribute("d",IL(l,m,n))},200)};
HL=function(a,b,c){a.i=b;a.startTime=(0,g.M)();a.duration=c;a.g()};
GL=function(a){var b=[];a=a.match(Eja);for(var c=0;c<a.length;c++){var d=" "===a[c]?NaN:Number(a[c]);b.push(isNaN(d)?a[c]:d)}return b};
IL=function(a,b,c){for(var d="",e=0;e<a.length;e++){var f=a[e];d="number"===typeof f?d+(f+(b[e]-f)*c):d+f}return d};
KL=function(a,b){g.T.call(this,{A:"button",T:["ytp-mute-button","ytp-button"],M:a.L().R?{title:"{{title}}","aria-label":"{{label}}"}:{"aria-disabled":"true","aria-haspopup":"true"},S:"{{icon}}"});this.D=a;this.g=null;this.u=this.F=this.B=this.N=NaN;this.R=this.C=null;this.o=[];this.l=[];this.visible=!1;this.i=null;var c=this.D.L();this.ha("icon",RH());this.tooltip=b.rb();c.C||(this.g=new g.aH({A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"defs",H:[{A:"clipPath",M:{id:"ytp-svg-volume-animation-mask"},
H:[{A:"path",M:{d:"m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"}},{A:"path",M:{d:"M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"}},{A:"path",G:"ytp-svg-volume-animation-mover",M:{d:"M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"}}]},{A:"clipPath",M:{id:"ytp-svg-volume-animation-slash-mask"},H:[{A:"path",G:"ytp-svg-volume-animation-mover",M:{d:"m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"}}]}]},{A:"path",Pa:!0,T:["ytp-svg-fill","ytp-svg-volume-animation-speaker"],M:{"clip-path":"url(#ytp-svg-volume-animation-mask)",
d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z",fill:"#fff"}},{A:"path",Pa:!0,T:["ytp-svg-fill","ytp-svg-volume-animation-hider"],M:{"clip-path":"url(#ytp-svg-volume-animation-slash-mask)",d:"M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z",fill:"#fff"}}]}),g.C(this,this.g),this.C=this.g.Z("ytp-svg-volume-animation-speaker"),this.R=this.C.getAttribute("d"),this.o=g.Qe("ytp-svg-volume-animation-mover",this.g.element),this.l=
g.Qe("ytp-svg-volume-animation-hider",this.g.element));this.P=new EL;g.C(this,this.P);this.K=new EL;g.C(this,this.K);this.ia("click",this.BL);this.I(a,"appresize",this.yA);this.I(a,"onVolumeChange",this.II);var d=null;if(c.R)g.Md(this,g.fK(b.rb(),this.element));else{var e="Your browser doesn't support changing the volume. $BEGIN_LINKLearn More$END_LINK".split(/\$(BEGIN|END)_LINK/);d=new g.FJ(a,{A:"span",T:["ytp-popup","ytp-generic-popup"],M:{tabindex:"0"},H:[e[0],{A:"a",M:{href:"https://support.google.com/youtube/?p=noaudio",
target:c.B},S:e[2]},e[4]]},100,!0);g.C(this,d);d.hide();d.subscribe("show",function(f){b.gm(d,f)});
g.BI(a,d.element,4)}this.message=d;g.DI(a,this.element,this,28662);this.yA(g.lI(a).getPlayerSize());this.setVolume(a.getVolume(),a.isMuted())};
LL=function(a,b){a.N=b;var c=a.R;b&&(c+=IL(Fja,Gja,b));a.C.setAttribute("d",c)};
ML=function(a,b){a.F=b;for(var c=20*b,d=0;d<a.o.length;d++)a.o[d].setAttribute("transform","translate("+c+", "+c+")");var e;1===b?e=RH():e=a.g;for(c=0;c<a.l.length;c++)a.l[c].style.display=0===b?"none":"";e!==a.i&&(a.ha("icon",e),a.i=e)};
NL=function(a,b){g.T.call(this,{A:"button",T:["ytp-pip-button","ytp-button"],M:{title:"{{title}}","data-tooltip-target-id":"ytp-pip-button"},H:[JH()]});this.D=a;this.ha("title","Picture in Picture");this.ia("click",this.onClick);g.Md(this,g.fK(b.rb(),this.element))};
g.PL=function(a,b){g.T.call(this,{A:"button",T:["ytp-play-button","ytp-button"],M:{title:"{{title}}","aria-label":"{{label}}"},S:"{{icon}}"});this.D=a;this.g=null;this.transition=new EL;this.tooltip=b.rb();g.C(this,this.transition);this.I(a,"fullscreentoggled",this.Ia);this.I(a,"presentingplayerstatechange",this.i);this.I(a,"videodatachange",this.Ia);OL(this,g.oH(a));this.ia("click",this.yl,this);g.Md(this,g.fK(b.rb(),this.element))};
QL=function(a){switch(a){case 1:return KH();case 2:return IH();case 3:return g.MH();case 4:return OH();default:return null}};
OL=function(a,b){var c=g.ex(a.D.getVideoData()),d=!1;if(g.uB(b))var e=c?4:2;else g.S(b,2)?(e=3,d=c):e=1;a.element.disabled=d;if(a.g!==e){c=null;switch(e){case 2:c=g.sJ(a.D,"Pause","k");break;case 3:c="Replay";break;case 1:c=g.sJ(a.D,"Play","k");break;case 4:c="Stop live playback"}3===e?a.update({title:c,label:null,icon:QL(e)}):(a.update({title:c,label:c}),(c=QL(e))&&a.g&&3!==a.g&&!a.D.L().C?JL(a.transition,a.element,c):a.ha("icon",c));UK(a.tooltip);a.g=e}};
g.SL=function(a,b,c){g.T.call(this,{A:"a",T:[c?"ytp-next-button":"ytp-prev-button","ytp-button"],M:{role:"button",title:"{{title}}",href:"{{url}}","data-preview":"{{preview}}","data-tooltip-text":"{{text}}","data-duration":"{{duration}}","aria-disabled":"{{disabled}}","data-next":"{{next}}","data-prev":"{{prev}}"},H:[c?g.GH():LH()]});var d=this;this.D=a;this.g=c;this.playlist=this.videoData=null;this.B=!1;this.o=this.u=this.i=null;this.l=!1;this.tooltip=b.rb();this.I(a,"fullscreentoggled",this.Ia);
this.I(a,"videodatachange",this.Ia);this.I(a,"onPlaylistUpdate",this.Ia);this.g||this.I(a,"appresize",this.Eu);this.I(a,"mdxpreviousnextchange",function(){RL(d);d.Eu()});
this.Ia()};
TL=function(a){a.playlist&&a.playlist.unsubscribe("shuffle",a.Ia,a)};
UL=function(a){return!!a.playlist&&!a.g&&!!a.videoData&&!a.videoData.ra&&3<=a.D.getCurrentTime()&&2!==a.D.getPresentingPlayerType()};
VL=function(a){var b=g.mI(g.gI(a.D));return b?a.g?b.hasNext():b.ng():!1};
RL=function(a){var b={duration:null,preview:null,text:null,title:null,url:null},c=a.D.L(),d=!0;g.P(c.experiments,"player_allow_autonav_after_playlist")&&(d=null!=a.playlist&&a.playlist.hasNext());d=g.nI(a.D)&&(!a.g||d);var e=a.g&&g.CI(a.D),f=VL(a),h=a.g&&5===a.D.getPresentingPlayerType(),l=g.sJ(a.D,"Next","SHIFT+n"),m=g.sJ(a.D,"Previous","SHIFT+p");if(h)b.title="Start video";else if(a.l)b.title="Replay";else if(d){var n=null;a.playlist&&(n=a.playlist.xa(a.g?xx(a.playlist):yx(a.playlist)));if(n){if(n.videoId){var q=
a.playlist.listId;b.url=c.getVideoUrl(n.videoId,q?q.toString():void 0)}b.text=n.title;b.duration=n.lengthSeconds?g.VG(n.lengthSeconds):null;b.preview=n.Gc("mqdefault.jpg")}b.title=a.g?l:m}else e&&(a.videoData&&a.videoData.suggestions&&a.videoData.suggestions.length&&(c=g.XG(c,a.videoData.suggestions[0]),b.url=c.bi(),b.text=c.title,b.duration=c instanceof g.yw?g.VG(c.lengthSeconds):null,b.preview=c.Gc("mqdefault.jpg")),b.title=l);b.disabled=!e&&!d&&!f&&!h;a.update(b);a.B=!!b.url;e||d||a.l||f||h?a.i||
(a.i=g.fK(a.tooltip,a.element),a.u=a.ia("click",a.onClick,a)):a.i&&(a.i(),a.i=null,a.gb(a.u),a.u=null);UK(a.tooltip)};
WL=function(){g.T.call(this,{A:"div",G:"ytp-chapter-hover-container",H:[{A:"div",G:"ytp-progress-bar-padding"},{A:"div",G:"ytp-progress-list",H:[{A:"div",T:["ytp-play-progress","ytp-swatch-background-color"]},{A:"div",G:"ytp-load-progress"},{A:"div",G:"ytp-hover-progress"},{A:"div",G:"ytp-ad-progress-list"}]}]});this.startTime=NaN;this.title="";this.width=0;this.u=this.Z("ytp-ad-progress-list");this.l=this.Z("ytp-load-progress");this.o=this.Z("ytp-play-progress");this.i=this.Z("ytp-hover-progress");
this.g=this.Z("ytp-chapter-hover-container")};
XL=function(a,b){g.oh(a.g,"width",b)};
YL=function(a,b){g.oh(a.g,"margin-right",b+"px")};
ZL=function(){this.l=this.position=this.o=this.g=this.u=this.i=this.width=NaN};
g.aM=function(a,b){g.EJ.call(this,{A:"div",G:"ytp-progress-bar-container",M:{"aria-disabled":"true"},H:[{A:"div",T:["ytp-progress-bar",a.L().g?"ytp-mobile":""],M:{tabindex:"0",role:"slider","aria-label":"Seek slider","aria-valuemin":"{{ariamin}}","aria-valuemax":"{{ariamax}}","aria-valuenow":"{{arianow}}","aria-valuetext":"{{arianowtext}}"},H:[{A:"div",G:"ytp-chapters-container"},{A:"div",G:"ytp-marker-crenellation-list"},{A:"div",G:"ytp-clip-start-exclude"},{A:"div",G:"ytp-clip-end-exclude"},{A:"div",
G:"ytp-scrubber-container",H:[{A:"div",T:["ytp-scrubber-button","ytp-swatch-background-color"],H:[{A:"div",G:"ytp-scrubber-pull-indicator"}]}]}]},{A:"div",G:"ytp-bound-time-left",S:"{{boundTimeLeft}}"},{A:"div",G:"ytp-bound-time-right",S:"{{boundTimeRight}}"},{A:"div",G:"ytp-clip-start",M:{title:"{{clipstarttitle}}"},S:"{{clipstarticon}}"},{A:"div",G:"ytp-clip-end",M:{title:"{{clipendtitle}}"},S:"{{clipendicon}}"}]});this.api=a;this.Wa=!1;this.o=this.zb=0;this.W=1;this.Gb=this.K=0;this.u=null;this.N=
this.Aa=0;this.ab=this.Z("ytp-marker-crenellation-list");this.P={};this.va={};this.clipEnd=Infinity;this.la=this.Z("ytp-clip-end");this.Ca=new g.rn(this.la,!0);this.Xa=this.Z("ytp-clip-end-exclude");this.Ec=this.Z("ytp-clip-start-exclude");this.clipStart=0;this.na=this.Z("ytp-clip-start");this.Da=new g.rn(this.na,!0);this.B=this.da=0;this.ac=this.Z("ytp-progress-bar");this.za=this.Z("ytp-chapters-container");this.g=[];this.X=-1;this.Ga=g.O(this.api.L().experiments,"web_macro_markers_snapping_threshold");
this.ea=this.R=0;this.C=null;this.Zb=this.Z("ytp-scrubber-button");this.Kc=this.Z("ytp-scrubber-container");this.ua=new g.Fe;this.kb=new ZL;this.i=new TJ(0,0);this.F=null;this.l=this.La=!1;this.tb=null;this.tooltip=b.rb();g.Md(this,g.fK(this.tooltip,this.la));g.C(this,this.Ca);this.Ca.subscribe("hoverstart",this.nB,this);this.Ca.subscribe("hoverend",this.mB,this);this.I(this.la,"click",this.Yq);g.Md(this,g.fK(this.tooltip,this.na));g.C(this,this.Da);this.Da.subscribe("hoverstart",this.nB,this);this.Da.subscribe("hoverend",
this.mB,this);this.I(this.na,"click",this.Yq);$L(this);this.api.L().aa("web_wn_macro_markers")&&this.I(a,"resize",this.uw);this.I(a,"presentingplayerstatechange",this.NI);this.I(a,"videodatachange",this.zA);this.I(a,"videoplayerreset",this.sG);this.I(a,"cuerangesadded",this.ID);this.I(a,"cuerangesremoved",this.SN);this.I(a,"cuerangemarkersupdated",this.ID);this.I(a,"onLoopRangeChange",this.HD);this.updateVideoData(a.getVideoData(),!0);this.HD(a.getLoopRange())};
$L=function(a){if(0===a.g.length){var b=new WL;a.g.push(b);g.C(a,b);b.Y(a.za,0)}for(;1<a.g.length;)a.g.pop().dispose();XL(a.g[0],"100%");a.g[0].startTime=0;a.g[0].title=""};
bM=function(a,b){var c=0,d=!1,e=a.g.length,f=1E3*a.i.g;0===f&&(f=1E3*a.api.getProgressState().seekableEnd);if(0<f&&0<a.o){for(var h=a.o-(a.l?3:2)*a.R,l=0===a.ea?3:h*a.ea,m=g.p(a.g),n=m.next();!n.done;n=m.next())n.value.width=0;for(;c<e;){m=f-a.g[c].startTime;c<e-1&&(m=a.g[c+1].startTime-a.g[c].startTime,YL(a.g[c],a.l?3:2));a.api.L().aa("web_wn_macro_markers")&&g.J(a.g[c].g,"ytp-exp-chapter-hover-container",1<a.g.length);n=(0===f?0:m/f*h)+a.g[c].width;if(n>l)a.g[c].width=n;else{a.g[c].width=0;var q=
a,r=c,u=q.g[r-1];void 0!==u&&0<u.width?u.width+=n:r<q.g.length-1&&(q.g[r+1].width+=n);YL(q.g[r],0);b&&(a.R--,m/f>a.ea&&(a.ea=m/f),d=!0)}c++}}return d};
fM=function(a){if(a.o){var b=a.api.getProgressState(),c=new TJ(b.seekableStart,b.seekableEnd),d=VJ(c,b.loaded,0);b=VJ(c,b.current,0);var e=a.i.i!==c.i||a.i.g!==c.g;a.i=c;cM(a,b,d);e&&dM(a);eM(a)}};
hM=function(a,b){var c=UJ(a.i,b.l);if(1<a.g.length){c=gM(a,b.o,!0);for(var d=0,e=0;e<c;e++)0<a.g[e].width&&(d+=a.g[e].width,d+=a.l?3:2);c=(a.g[c].startTime+(b.o-d)/a.g[c].width*((c===a.g.length-1?1E3*a.i.g:a.g[c+1].startTime)-a.g[c].startTime))/1E3}return c};
iM=function(a,b,c){return c>=a.g.length?!1:Math.abs(b-a.g[c].startTime/1E3)/a.i.g*(a.o-(a.l?3:2)*a.R)<a.Ga};
jM=function(a,b,c,d){b=g.Be(b,0,a.l?60:40);a.K=b;var e=a.W,f=Math.max(a.i.getLength()/a.o,1);a.W=b/(a.l?60:40)*(f-1)+1;b=a.o*a.W;a.N=g.Be(d*b-c,0,b-a.o);e!==a.W&&dM(a)};
dM=function(a){var b=kM(a),c=-b.i/b.g,d=(-b.i+b.width)/b.g,e=Raa(a.ab),f=0;if(a.K>.2*(a.l?60:40)&&1===a.g.length){var h=c*(a.i.getLength()/60),l=d*(a.i.getLength()/60);for(h=Math.ceil(h);h<l;h++){var m=e[f];m||(m=g.bf("DIV"),a.ab.appendChild(m));f++;0===h%60?pi(m,"ytp-60m-progress"):0===h%30?pi(m,"ytp-30m-progress"):0===h%15?pi(m,"ytp-15m-progress"):pi(m,"ytp-1m-progress");var n=(60*h/a.i.getLength()-c)*b.g;m.style.left=n+"px"}}b=a.La?a.i.g:0;a.update({boundTimeLeft:g.VG(UJ(a.i,c)-b),boundTimeRight:g.VG(UJ(a.i,
d)-b)});for(c=e.length-1;c>=f;c--)g.gf(e[c]);a.element.style.height=a.K+(a.l?8:5)+"px";a.O("height-change",a.K);a.Zb.style.height=a.K+(a.l?20:13)+"px";e=g.p(Object.keys(a.P));for(f=e.next();!f.done;f=e.next())lM(a,f.value);mM(a);cM(a,a.B,a.da)};
kM=function(a){var b=a.ua.x,c=a.o*a.W;b=g.Be(b,0,a.o);a.kb.update(b,a.o,-a.N,-(c-a.N-a.o));return a.kb};
cM=function(a,b,c){a.B=b;a.da=c;var d=kM(a),e=a.i.g,f=UJ(a.i,a.B),h=g.UG("$PLAY_PROGRESS of $DURATION",{PLAY_PROGRESS:g.VG(f,!0),DURATION:g.VG(e,!0)});if(a.api.L().aa("web_wn_macro_markers")){var l=nM(a,1E3*f);h=(l=a.g[l].title)?l+" "+h:h}a.update({ariamin:Math.floor(a.i.i),ariamax:Math.floor(e),arianow:Math.floor(f),arianowtext:h});e=a.clipStart;f=a.clipEnd;a.F&&2!==a.api.getPresentingPlayerType()&&(e=a.F.startTimeMs/1E3,f=a.F.endTimeMs/1E3);e=VJ(a.i,e,0);h=VJ(a.i,f,1);f=g.Be(b,e,h);c=g.Be(c,e,h);
h=b*d.g+d.i;if(a.api.L().aa("web_wn_macro_markers")){h=b*a.i.g*1E3;l=-1;for(var m=g.p(a.g),n=m.next();!n.done;n=m.next())n=n.value,h>n.startTime&&0<n.width&&l++;h=b*(d.g-(a.l?3:2)*a.R)+(a.l?3:2)*(0>l?0:l)+d.i}g.oh(a.Kc,"transform","translateX("+h+"px)");a.api.L().aa("web_wn_macro_markers")?(oM(a,d,e,f,"PLAY_PROGRESS"),oM(a,d,e,c,"LOAD_PROGRESS")):(pM(a,a.g[0].o,d,e,f),pM(a,a.g[0].l,d,e,c))};
oM=function(a,b,c,d,e){var f=a.g.length,h=b.g-a.R*(a.l?3:2),l=c*h;c=gM(a,l);var m=d*h;h=gM(a,m);"HOVER_PROGRESS"===e&&(h=gM(a,b.g*d,!0),m=b.g*d-qM(a,b.g*d)*(a.l?3:2));b=Math.max(l-rM(a,c),0);for(d=c;d<f;d++)a.g[d].sa(e).style.left=c===d?b+"px":"0";for(f=c;f<h;f++)d=a.g[f].width,sM(a,a.g[f].sa(e),f===c?d-b:d,d);f=a.g[h].width;m=g.Be(m-rM(a,h),0,f);c===h&&(m-=b);sM(a,a.g[h].sa(e),m,f);m=a.g.length;for(h+=1;h<m;h++)sM(a,a.g[h].sa(e),0,a.g[h].width);for(h=0;h<c;h++)sM(a,a.g[h].sa(e),0,a.g[h].width)};
rM=function(a,b){if(b>=a.g.length)return a.o;for(var c=0,d=0;d<b;)c+=a.g[d].width,d++;return c};
sM=function(a,b,c,d,e){e||a.api.L().g?b.style.width=c+"px":g.oh(b,"transform","scalex("+(d?c/d:0)+")")};
gM=function(a,b,c){var d=0;(void 0===c?0:c)&&(b-=qM(a,b)*(a.l?3:2));c=g.p(a.g);for(var e=c.next();!e.done;e=c.next()){e=e.value;if(b>e.width)b-=e.width;else break;d++}return d===a.g.length?d-1:d};
nM=function(a,b){for(var c=0,d=g.p(a.g),e=d.next();!(e.done||e.value.startTime>b);e=d.next())c++;return 0===c?c:c-1};
qM=function(a,b){for(var c=a.g.length,d=0,e=g.p(a.g),f=e.next();!f.done;f=e.next())if(f=f.value,0!==f.width)if(b>f.width)b-=f.width,b-=a.l?3:2,d++;else break;return d===c?c-1:d};
pM=function(a,b,c,d,e,f){b.style.left=Math.max(d*c.g+c.i,0)+"px";sM(a,b,g.Be((e-d)*c.g+c.i,0,c.width),c.width,void 0===f?!1:f)};
mM=function(a){var b=!!a.F&&2!==a.api.getPresentingPlayerType(),c=a.clipStart,d=a.clipEnd,e=!0,f=!0;b&&a.F?(c=a.F.startTimeMs/1E3,d=a.F.endTimeMs/1E3):(e=c>a.i.i,f=0<a.i.g&&d<a.i.g);g.J(a.element,"ytp-loop-range-enabled",b);g.J(a.element,"ytp-clip-start-enabled",e);g.J(a.element,"ytp-clip-end-enabled",f);b=e?VJ(a.i,c,0):0;d=f?VJ(a.i,d,1):1;a.na.style.left=Math.round(1E3*b)/10+"%";a.la.style.left=Math.round(1E3*d)/10+"%";a.Ec.style.width=Math.round(1E3*b)/10+"%";a.Xa.style.left=Math.round(1E3*d)/10+
"%";a.Xa.style.width=Math.round(1E3*(1-d))/10+"%"};
eM=function(a){var b=kM(a);if(a.api.L().aa("web_wn_macro_markers")){oM(a,b,a.B,Math.max(b.l,a.B),"HOVER_PROGRESS");for(var c=gM(a,b.g*a.B,!0),d=gM(a,b.o,!0),e=c;e<=d;)g.J(a.g[e].i,"ytp-hover-progress-light",b.l>a.B),e++;g.J(a.Zb,"ytp-scrubber-button-hover",c===d&&1<a.g.length)}else pM(a,a.g[0].i,b,a.B,b.l),g.J(a.g[0].i,"ytp-hover-progress-light",b.l>a.B)};
lM=function(a,b){var c=a.P[b],d=a.va[b],e=kM(a),f=VJ(a.i,c.start/1E3,0),h=Cea(c,a.l)/e.width;var l=VJ(a.i,c.end/1E3,1);h!==Number.POSITIVE_INFINITY&&(f=g.Be(f,0,l-h));l=Math.min(l,f+h);c.color&&(d.style.background=c.color);pM(a,d,e,f,l,!0)};
tM=function(a,b){var c=b.getId();a.P[c]===b&&(g.gf(a.va[c]),delete a.P[c],delete a.va[c])};
uM=function(a,b){b?a.C||(a.element.removeAttribute("aria-disabled"),a.C=new g.rn(a.ac,!0),a.C.subscribe("hovermove",a.bM,a),a.C.subscribe("hoverend",a.aM,a),a.C.subscribe("dragstart",a.ZL,a),a.C.subscribe("dragmove",a.dM,a),a.C.subscribe("dragend",a.cM,a),a.tb=a.ia("keydown",a.OI)):a.C&&(a.element.setAttribute("aria-disabled","true"),a.gb(a.tb),a.C.cancel(),a.C.dispose(),a.C=null)};
g.vM=function(a){var b=2*a.o*g.Rt();return 1E3*a.i.getLength()/a.api.getPlaybackRate()/b};
wM=function(a,b,c){g.T.call(this,{A:"button",G:"ytp-button",M:{title:"Play on TV","aria-haspopup":"true"},S:"{{icon}}"});this.D=a;this.Ja=c;this.g=null;this.I(a,"onMdxReceiversChange",this.ga);this.I(a,"presentingplayerstatechange",this.ga);this.I(a,"appresize",this.ga);this.ga();this.ia("click",this.i,this);g.Md(this,g.fK(b.rb(),this.element))};
xM=function(a,b,c){g.T.call(this,{A:"button",T:["ytp-button","ytp-settings-button"],M:{"aria-haspopup":"true","aria-owns":$G(),title:"Settings","data-tooltip-target-id":"ytp-settings-button"},H:[g.NH()]});this.D=a;this.Ja=c;this.i=!0;this.ia("click",this.l);this.I(a,"onPlaybackQualityChange",this.updateBadge);this.I(a,"videodatachange",this.updateBadge);this.I(a,"webglsettingschanged",this.updateBadge);this.I(a,"appresize",this.g);g.Md(this,g.fK(b.rb(),this.element));g.DI(this.D,this.element,this,
28663);this.updateBadge();this.g(g.lI(a).getPlayerSize())};
yM=function(a,b){a.i=!!b;a.g(g.lI(a.D).getPlayerSize())};
zM=function(a,b){EK.call(this,"Annotations",5);this.D=a;this.Ja=b;this.g=!1;this.I(a,"videodatachange",this.ga);this.I(a,"onApiChange",this.ga);this.subscribe("select",this.i,this);this.ga()};
g.AM=function(a,b,c,d,e,f){g.wK.call(this,g.xK({"aria-haspopup":"true"}),b,a);this.Ja=d;this.u=!1;this.i=null;this.options={};this.l=new g.AK(c,void 0,a,e,f);g.C(this,this.l);this.ia("keydown",this.QI);this.ia("click",this.open)};
BM=function(a){if(a.i){var b=a.options[a.i];b.element.getAttribute("aria-checked");b.element.removeAttribute("aria-checked");a.i=null}};
g.CM=function(a,b){g.BK(a.l);for(var c={},d=!1,e=0;e<b.length;e++){var f=b[e],h=a.options[f],l=f===a.i;l&&(d=!0);h&&h.priority===-e?(l=a,g.vK(l.options[f],l.Nf(f,!0)),delete a.options[f]):h=a.xs(f,-e,l);c[f]=h;a.l.vb(h,!0)}d||(a.i=null);d=g.p(Object.keys(a.options));for(e=d.next();!e.done;e=d.next())a.options[e.value].dispose();a.options=c};
DM=function(a,b){g.AM.call(this,"Audio track",2,a,b);this.D=a;this.tracks={};this.g=new g.T({A:"div",H:[{A:"span",S:"Audio track"},{A:"span",G:"ytp-menuitem-label-count",S:"{{content}}"}]});g.C(this,this.g);g.vK(this,this.g);this.I(a,"videodatachange",this.ga);this.I(a,"onPlaybackAudioChange",this.ga);this.ga()};
EM=function(a,b){EK.call(this,"Autoplay",6);this.D=a;this.Ja=b;this.i=!1;this.g=[];this.I(a,"presentingplayerstatechange",this.l);this.subscribe("select",this.u,this);this.l()};
FM=function(a,b){g.AM.call(this,"Quality",1,a,b);this.D=a;this.o={};this.g="unknown";g.I(this.l.element,"ytp-quality-menu");this.I(a,"videodatachange",this.Xm);this.I(a,"videoplayerreset",this.Xm);this.I(a,"onPlaybackQualityChange",this.AA);this.Xm()};
GM=function(a,b,c){a=a.o[b];var d=g.Vq[b];c={A:"span",T:c,H:[a?a.qualityLabel:d?d+"p":"Auto"]};var e;"highres"===b?e="8K":"hd2880"===b?e="5K":"hd2160"===b?e="4K":0===b.indexOf("hd")&&"hd720"!==b&&(e="HD");e&&(c.H.push(" "),c.H.push({A:"sup",G:"ytp-swatch-color",S:e}));return c};
HM=function(a,b,c,d,e,f,h){g.T.call(this,{A:"div",G:"ytp-slider-section",M:{role:"slider","aria-valuemin":"{{minvalue}}","aria-valuemax":"{{maxvalue}}","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:"0"},H:[{A:"div",G:"ytp-slider",H:[{A:"div",G:"ytp-slider-handle"}]}]});this.B=a;this.u=b;this.minimumValue=c;this.maximumValue=d;this.C=e;this.F=f;this.range=this.maximumValue-this.minimumValue;this.R=this.Z("ytp-slider-section");this.i=this.Z("ytp-slider");this.K=this.Z("ytp-slider-handle");
this.o=new g.rn(this.i,!0);this.g=h?h:c;g.C(this,this.o);this.o.subscribe("dragmove",this.UI,this);this.I(this.element,"keydown",this.VI);this.I(this.element,"wheel",this.TI);this.init()};
JM=function(a){HM.call(this,.05,.05,a.getAvailablePlaybackRates()[0],a.getAvailablePlaybackRates()[a.getAvailablePlaybackRates().length-1],150,20,a.getPlaybackRate());this.D=a;this.l=g.bf("P");this.P=naa(this.N,this);g.I(this.i,"ytp-speedslider");g.I(this.l,"ytp-speedslider-text");a=this.l;var b=this.i;b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling);IM(this);this.I(this.D,"onPlaybackRateChange",this.V)};
IM=function(a){a.l.textContent=KM(a,a.g)+"x"};
KM=function(a,b){var c=Number(g.Be(b,a.minimumValue,a.maximumValue).toFixed(2)),d=Math.floor(100*(c+.001)%5+2E-15),e=c;0!==d&&(e=c-.01*d);return Number(e.toFixed(2))};
LM=function(a){g.EJ.call(this,{A:"div",G:"ytp-speedslider-component"});this.g=new JM(a);g.C(this,this.g);this.element.appendChild(this.g.element)};
MM=function(a){var b=new LM(a);zK.call(this,a,b,"Custom");g.C(this,b)};
NM=function(a,b){var c=new MM(a);g.AM.call(this,"Playback speed",4,a,b,"Custom",function(){g.HK(b,c)});
g.C(this,c);this.D=a;this.o=this.g=this.C=null;this.B=this.D.getAvailablePlaybackRates();this.I(a,"presentingplayerstatechange",this.ga);this.ga()};
PM=function(a,b){var c=OM(b);a.options[c]?a.Jb(c):b===a.o&&a.g&&(a.Jb(a.g),a.xb(b.toString()))};
RM=function(a){g.CM(a,a.B.map(OM));a.g=null;a.o=null;var b=a.D.getPlaybackRate();a.B.includes(b)||(QM(a,b),g.AM.prototype.sd.call(a,a.g))};
QM=function(a,b){a.o=b;a.g=g.UG("Custom ($CURRENT_CUSTOM_SPEED)",{CURRENT_CUSTOM_SPEED:b.toString()});var c=a.B.map(OM);c.unshift(a.g);g.CM(a,c)};
OM=function(a){return a.toString()};
TM=function(a,b,c,d){var e=new g.AK(b,void 0,"Video Override");g.AM.call(this,d.text||"",a,b,c,"Video Override",function(){g.HK(c,e)});
var f=this;g.I(this.element,"ytp-subtitles-options-menu-item");this.setting=d.option.toString();a=d.options;this.settings=g.yb(a,this.CA,this);this.B=e;g.C(this,this.B);b=new g.wK({A:"div",G:"ytp-menuitemtitle",S:"Allow for a different caption style if specified by the video."},0);g.C(this,b);this.B.vb(b,!0);this.o=new g.wK({A:"div",G:"ytp-menuitem",M:{role:"menuitemradio",tabindex:"0"},H:[{A:"div",G:"ytp-menuitem-label",S:"On"}]},-1);g.C(this,this.o);this.B.vb(this.o,!0);this.I(this.o.element,"click",
function(){SM(f,!0)});
this.g=new g.wK({A:"div",G:"ytp-menuitem",M:{role:"menuitemradio",tabindex:"0"},H:[{A:"div",G:"ytp-menuitem-label",S:"Off"}]},-2);g.C(this,this.g);this.B.vb(this.g,!0);this.I(this.g.element,"click",function(){SM(f,!1)});
g.CM(this,(0,g.Hc)(a,this.CA))};
SM=function(a,b){a.O("settingChange",a.setting+"Override",!b);a.Ja.pe()};
UM=function(a,b){g.AK.call(this,a,void 0,"Options");var c=this;this.ni={};for(var d=0;d<g.ZK.length;d++){var e=g.ZK[d],f=new TM(-d,a,b,e);g.C(this,f);f.subscribe("settingChange",this.ne,this);this.ni[e.option.toString()]=f;this.vb(f,!0)}d=new g.wK(g.xK(),-g.ZK.length,"Reset");g.C(this,d);d.ia("click",function(){c.ne("reset",!0)});
this.vb(d,!0)};
VM=function(a,b){g.AM.call(this,"Auto-translate",0,a,b);this.languages={}};
Hja=function(a,b){a.languages=g.yb(b,a.g,a);g.CM(a,(0,g.Hc)(b,a.g))};
XM=function(a,b){g.AM.call(this,"Subtitles/CC",3,a,b,"Options",function(){g.HK(b,c.o)});
var c=this;this.D=a;this.tracks={};this.B=new g.G(function(){WM(c,!1)},3E3);
this.g=new VM(this.D,this.Ja);this.o=new UM(this.D,this.Ja);this.C=new g.T({A:"div",H:[{A:"span",S:"Subtitles/CC"},{A:"span",G:"ytp-menuitem-label-count",S:"{{content}}"}]});g.C(this,this.B);g.C(this,this.C);g.vK(this,this.C);g.C(this,this.g);this.g.subscribe("select",this.aJ,this);g.C(this,this.o);this.o.subscribe("settingChange",this.ne,this);b.subscribe("show",this.IM,this);this.I(a,"videodatachange",this.ga);this.I(a,"onApiChange",this.ga);this.I(a,"onCaptionsTrackListChanged",this.ga);this.I(a,
"captionschanged",this.ga);this.ga()};
WM=function(a,b){a.D.setOption("captions","sampleSubtitles",b)};
YM=function(a){g.JK.call(this,a,"ytp-settings-menu");this.dc=new g.AK(this.D);this.settingsButton=null;this.Dc=!1;g.C(this,this.dc);this.hide();g.HK(this,this.dc)};
Ija=function(a,b){a.settingsButton=b;a.element.id=b.element.getAttribute("aria-owns")};
ZM=function(a,b){g.T.call(this,{A:"button",T:["ytp-size-button","ytp-button"],M:{title:"{{title}}"},S:"{{icon}}"});this.D=a;this.isWidescreen=null;this.transition=new EL;this.tooltip=b.rb();g.C(this,this.transition);this.I(a,"sizestylechange",this.ga);this.I(a,"fullscreentoggled",this.ga);this.I(a,"presentingplayerstatechange",this.ga);this.ga();this.ia("click",this.onClick);g.Md(this,g.fK(this.tooltip,this.element))};
$M=function(a,b){g.T.call(this,{A:"button",T:["ytp-subtitles-button","ytp-button"],M:{"aria-pressed":"{{pressed}}",title:g.sJ(a,"Subtitles/closed captions","c")},H:[yH()]});this.D=a;this.I(a,"videodatachange",this.ga);this.I(a,"appresize",this.ga);this.I(a,"onApiChange",this.ga);this.I(a,"onCaptionsTrackListChanged",this.ga);this.I(a,"captionschanged",this.ga);this.ga();this.ia("click",this.onClick);g.Md(this,g.fK(b.rb(),this.element))};
g.aN=function(a,b,c){c=void 0===c?350:c;g.T.call(this,{A:"div",T:["ytp-time-display","notranslate"],H:[{A:"span",G:"ytp-time-current",S:"{{currenttime}}"},{A:"span",G:"ytp-time-separator",S:" / "},{A:"span",G:"ytp-time-duration",S:"{{duration}}"}]});this.api=a;this.C=c;this.liveBadge=new g.T({A:"button",T:["ytp-live-badge","ytp-button"],M:{disabled:"true"},S:"{{content}}"});this.g=null;this.i=!1;this.B=this.u=null;this.isPremiere=!1;this.o=this.l=null;this.liveBadge.xb("Live");g.C(this,this.liveBadge);
this.liveBadge.Y(this.element);this.tooltip=b.rb();this.ia("click",this.onClick);this.I(a,"presentingplayerstatechange",this.Sb);this.I(a,"appresize",this.Sb);this.I(a,"videodatachange",this.Ia);(a=a.getVideoData())&&this.updateVideoData(a);this.Sb()};
dN=function(a,b,c){g.T.call(this,{A:"div",G:"ytp-volume-panel",M:{role:"slider","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"{{valuenow}}","aria-valuetext":"{{valuetext}}",tabindex:"0"},H:[{A:"div",G:"ytp-volume-slider",H:[{A:"div",G:"ytp-volume-slider-handle"}]}]});var d=this;this.api=a;this.i=b;this.C=c;this.Hf=!1;this.N=this.volume=0;this.F=null;this.o=this.g=this.l=!1;this.i=b;this.C=c;this.u=b.Hc();this.K=this.Z("ytp-volume-slider");this.R=this.Z("ytp-volume-slider-handle");this.B=
new g.rn(this.K,!0);g.C(this,this.B);this.B.subscribe("dragstart",this.MM,this);this.B.subscribe("dragmove",this.dJ,this);this.B.subscribe("dragend",this.LM,this);this.I(a,"onVolumeChange",this.fJ);this.I(a,"appresize",this.DA);this.I(a,"fullscreentoggled",this.xh);this.I(a,"onShowControls",this.Wx);this.I(a,"onHideControls",this.Wx);this.I(this.element,"keydown",this.eJ);this.I(this.element,"focus",function(){bN(d,d.g,d.l,!0,d.i.Hf())});
this.I(this.element,"blur",function(){bN(d,d.g,d.l,!1,d.i.Hf())});
this.DA(g.lI(a).getPlayerSize());cN(this,a.getVolume(),a.isMuted())};
cN=function(a,b,c){var d=Math.floor(b),e=d+"% volume"+(c?" muted":"");c=c?0:b/100;a.ha("valuenow",d);a.ha("valuetext",e);a.R.style.left=(a.u?60:40)*c+"px";a.volume=b};
eN=function(a,b){g.J(a.element,"ytp-volume-control-hover",b);bN(a,b,a.l,a.o,a.i.Hf())};
bN=function(a,b,c,d,e){var f=a.g||a.l||a.o||a.Hf;a.g=b;a.l=c;a.o=d;a.Hf=e;b=a.g||a.l||a.o||a.Hf;f!==b&&(b?a.F=a.I(a.element,"wheel",a.cJ):(a.gb(a.F),a.F=null),g.J(a.C,"ytp-volume-slider-active",b))};
g.fN=function(a,b){var c=a.L(),d=g.Ot(c);0===d.indexOf("www.")&&(d=d.substring(4));var e=["ytp-youtube-button","ytp-button","yt-uix-sessionlink"],f=g.Ct(c);f&&e.push("ytp-youtube-music-button");g.T.call(this,{A:"a",T:e,M:{href:"{{url}}",target:c.B,title:g.UG("Watch on $WEBSITE",{WEBSITE:d}),"data-sessionlink":"feature=player-button"},H:[f?g.W?{A:"div",T:["ytp-icon","ytp-icon-youtube-music-logo"]}:{A:"svg",M:{viewBox:"0 0 77 20"},H:[{A:"g",M:{fill:"none"},H:[{A:"path",M:{d:"M27.71 3.30a3.53 3.53 0 0 0-2.49-2.49c-2.19-.59-11.00-.59-11.00-.59s-8.81 0-11.00.59A3.53 3.53 0 0 0 .71 3.30c-.59 2.20-.59 6.8-.59 6.8s0 4.59.59 6.8a3.53 3.53 0 0 0 2.49 2.49c2.19.59 11.00.59 11.00.59s8.81 0 11.00-.59a3.53 3.53 0 0 0 2.49-2.49c.59-2.20.59-6.8.59-6.8s-.00-4.59-.59-6.8z",
fill:"red"}},{A:"path",M:{d:"M11.39 14.34l7.32-4.23-7.32-4.24zM40.69 7.88c-.50 2.56-.88 5.69-1.08 6.98h-.14c-.16-1.33-.54-4.44-1.06-6.97l-1.29-6.28h-3.92v16.95h2.43V4.60l.24 1.30 2.47 12.66h2.43L43.21 5.91l.26-1.31v13.97h2.43V1.62h-3.96L40.7 7.88zm11.80 8.14c-.22.46-.70.78-1.19.78-.56 0-.78-.44-.78-1.53V6.19h-2.78v9.25c0 2.28.74 3.33 2.39 3.33 1.12 0 2.03-.50 2.66-1.71h.06l.24 1.51h2.17V6.19h-2.78v9.84h.00zm8.15-4.94c-.90-.66-1.47-1.11-1.47-2.08 0-.68.32-1.07 1.08-1.07.78 0 1.04.54 1.06 2.40l2.33-.1c.18-3.01-.80-4.26-3.36-4.26-2.37 0-3.54 1.07-3.54 3.27 0 2 .96 2.91 2.53 4.1 1.35 1.05 2.13 1.63 2.13 2.48 0 .64-.40 1.09-1.10 1.09-.82 0-1.31-.78-1.18-2.16l-2.35.04c-.36 2.56.66 4.06 3.40 4.06 2.39 0 3.64-1.11 3.64-3.33.00-2.02-1.00-2.82-3.18-4.44zm4.71-4.88h2.66v12.38h-2.66zm1.35-4.88c-1.02 0-1.51.38-1.51 1.71 0 1.37.48 1.71 1.51 1.71 1.04 0 1.51-.34 1.51-1.71 0-1.27-.46-1.71-1.51-1.71zm10.25 12.80l-2.43-.12c0 2.18-.24 2.88-1.06 2.88s-.96-.78-.96-3.35V11.12c0-2.48.16-3.27.98-3.27.76 0 .96.74.96 3.05l2.41-.16c.16-1.92-.08-3.23-.82-3.98-.54-.54-1.37-.80-2.51-.80-2.7 0-3.80 1.45-3.80 5.53v1.73c0 4.20.94 5.55 3.70 5.55 1.17 0 1.97-.24 2.51-.76.78-.73 1.08-1.98 1.02-3.90z",
fill:"#fff"}}]}]}:g.W?{A:"div",T:["ytp-icon","ytp-icon-logo"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 67 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 45.09 10 L 45.09 25.82 L 47.16 25.82 L 47.41 24.76 L 47.47 24.76 C 47.66 25.14 47.94 25.44 48.33 25.66 C 48.72 25.88 49.16 25.99 49.63 25.99 C 50.48 25.99 51.1 25.60 51.5 24.82 C 51.9 24.04 52.09 22.82 52.09 21.16 L 52.09 19.40 C 52.12 18.13 52.05 17.15 51.90 16.44 C 51.75 15.74 51.50 15.23 51.16 14.91 C 50.82 14.59 50.34 14.44 49.75 14.44 C 49.29 14.44 48.87 14.57 48.47 14.83 C 48.27 14.96 48.09 15.11 47.93 15.29 C 47.78 15.46 47.64 15.65 47.53 15.86 L 47.51 15.86 L 47.51 10 L 45.09 10 z M 8.10 10.56 L 10.96 20.86 L 10.96 25.82 L 13.42 25.82 L 13.42 20.86 L 16.32 10.56 L 13.83 10.56 L 12.78 15.25 C 12.49 16.62 12.31 17.59 12.23 18.17 L 12.16 18.17 C 12.04 17.35 11.84 16.38 11.59 15.23 L 10.59 10.56 L 8.10 10.56 z M 30.10 10.56 L 30.10 12.58 L 32.59 12.58 L 32.59 25.82 L 35.06 25.82 L 35.06 12.58 L 37.55 12.58 L 37.55 10.56 L 30.10 10.56 z M 19.21 14.46 C 18.37 14.46 17.69 14.63 17.17 14.96 C 16.65 15.29 16.27 15.82 16.03 16.55 C 15.79 17.28 15.67 18.23 15.67 19.43 L 15.67 21.06 C 15.67 22.24 15.79 23.19 16 23.91 C 16.21 24.62 16.57 25.15 17.07 25.49 C 17.58 25.83 18.27 26 19.15 26 C 20.02 26 20.69 25.83 21.19 25.5 C 21.69 25.17 22.06 24.63 22.28 23.91 C 22.51 23.19 22.63 22.25 22.63 21.06 L 22.63 19.43 C 22.63 18.23 22.50 17.28 22.27 16.56 C 22.04 15.84 21.68 15.31 21.18 14.97 C 20.68 14.63 20.03 14.46 19.21 14.46 z M 56.64 14.47 C 55.39 14.47 54.51 14.84 53.99 15.61 C 53.48 16.38 53.22 17.60 53.22 19.27 L 53.22 21.23 C 53.22 22.85 53.47 24.05 53.97 24.83 C 54.34 25.40 54.92 25.77 55.71 25.91 C 55.97 25.96 56.26 25.99 56.57 25.99 C 57.60 25.99 58.40 25.74 58.96 25.23 C 59.53 24.72 59.81 23.94 59.81 22.91 C 59.81 22.74 59.79 22.61 59.78 22.51 L 57.63 22.39 C 57.62 23.06 57.54 23.54 57.40 23.83 C 57.26 24.12 57.01 24.27 56.63 24.27 C 56.35 24.27 56.13 24.18 56.00 24.02 C 55.87 23.86 55.79 23.61 55.75 23.25 C 55.71 22.89 55.68 22.36 55.68 21.64 L 55.68 21.08 L 59.86 21.08 L 59.86 19.16 C 59.86 17.99 59.77 17.08 59.58 16.41 C 59.39 15.75 59.07 15.25 58.61 14.93 C 58.15 14.62 57.50 14.47 56.64 14.47 z M 23.92 14.67 L 23.92 23.00 C 23.92 24.03 24.11 24.79 24.46 25.27 C 24.82 25.76 25.35 26.00 26.09 26.00 C 27.16 26.00 27.97 25.49 28.5 24.46 L 28.55 24.46 L 28.76 25.82 L 30.73 25.82 L 30.73 14.67 L 28.23 14.67 L 28.23 23.52 C 28.13 23.73 27.97 23.90 27.77 24.03 C 27.57 24.16 27.37 24.24 27.15 24.24 C 26.89 24.24 26.70 24.12 26.59 23.91 C 26.48 23.70 26.43 23.35 26.43 22.85 L 26.43 14.67 L 23.92 14.67 z M 36.80 14.67 L 36.80 23.00 C 36.80 24.03 36.98 24.79 37.33 25.27 C 37.60 25.64 37.97 25.87 38.45 25.96 C 38.61 25.99 38.78 26.00 38.97 26.00 C 40.04 26.00 40.83 25.49 41.36 24.46 L 41.41 24.46 L 41.64 25.82 L 43.59 25.82 L 43.59 14.67 L 41.09 14.67 L 41.09 23.52 C 40.99 23.73 40.85 23.90 40.65 24.03 C 40.45 24.16 40.23 24.24 40.01 24.24 C 39.75 24.24 39.58 24.12 39.47 23.91 C 39.36 23.70 39.31 23.35 39.31 22.85 L 39.31 14.67 L 36.80 14.67 z M 56.61 16.15 C 56.88 16.15 57.08 16.23 57.21 16.38 C 57.33 16.53 57.42 16.79 57.47 17.16 C 57.52 17.53 57.53 18.06 57.53 18.78 L 57.53 19.58 L 55.69 19.58 L 55.69 18.78 C 55.69 18.05 55.71 17.52 55.75 17.16 C 55.79 16.81 55.87 16.55 56.00 16.39 C 56.13 16.23 56.32 16.15 56.61 16.15 z M 19.15 16.19 C 19.50 16.19 19.75 16.38 19.89 16.75 C 20.03 17.12 20.09 17.7 20.09 18.5 L 20.09 21.97 C 20.09 22.79 20.03 23.39 19.89 23.75 C 19.75 24.11 19.51 24.29 19.15 24.30 C 18.80 24.30 18.54 24.11 18.41 23.75 C 18.28 23.39 18.22 22.79 18.22 21.97 L 18.22 18.5 C 18.22 17.7 18.28 17.12 18.42 16.75 C 18.56 16.38 18.81 16.19 19.15 16.19 z M 48.63 16.22 C 48.88 16.22 49.08 16.31 49.22 16.51 C 49.36 16.71 49.45 17.05 49.50 17.52 C 49.55 17.99 49.58 18.68 49.58 19.55 L 49.58 21 L 49.59 21 C 49.59 21.81 49.57 22.45 49.5 22.91 C 49.43 23.37 49.32 23.70 49.16 23.89 C 49.00 24.08 48.78 24.17 48.51 24.17 C 48.30 24.17 48.11 24.12 47.94 24.02 C 47.76 23.92 47.62 23.78 47.51 23.58 L 47.51 17.25 C 47.59 16.95 47.75 16.70 47.96 16.50 C 48.17 16.31 48.39 16.22 48.63 16.22 z "}}]}]});
this.api=a;this.visible=!1;g.DI(a,this.element,this,28666);this.ia("click",this.onClick);this.I(a,"videodatachange",this.Ia);this.I(a,"onLoopRangeChange",this.Ia);this.Ia();g.Md(this,g.fK(b.rb(),this.element))};
hN=function(a,b,c){g.ln.call(this);var d=this;this.D=a;this.i=b;this.Lb=c;this.ca=NaN;this.V=this.X=null;this.g=new YM(this.D);this.ac=new g.aM(this.D,this.i);this.muteButton=null;this.ag=new g.aN(this.D,this.i);this.o=this.u=this.J=this.F=null;this.N=new NL(this.D,this.i);this.W=new g.AL(this.D,this.i);this.Cc=new g.ci(this.jn,null,this);this.C=null;c=a.L();this.Lb.subscribe("autohideupdate",this.Qf,this);var e=!g.oH(a).isCued(),f=this.D.L().aa("html5_player_bottom_linear_gradient");f||!g.Ct(c)&&
!g.P(a.L().experiments,"html5_player_dynamic_bottom_gradient")?f=f?new g.T({A:"div",G:"ytp-gradient-bottom-container",H:[{A:"div",G:"ytp-gradient-bottom-extension"},{A:"div",G:"ytp-gradient-bottom"}]}):new g.T({A:"div",G:"ytp-gradient-bottom"}):this.V=f=new g.tL(a);g.C(this,f);g.BI(a,f.element,8);this.P=new g.fJ(f,250,e,100);g.C(this,this.P);this.l=new g.T({A:"div",G:"ytp-chrome-bottom",H:[{A:"div",G:"ytp-chrome-controls"}]});g.C(this,this.l);g.BI(a,this.l.element,8);this.R=new g.fJ(this.l,250,e,
100);g.C(this,this.R);this.K=this.l.element.children[0];g.Md(this.g,function(){a.Ck()===d.g&&(a.J=null)});
g.C(this,this.g);a.J=this.g;g.BI(a,this.g.element,6);this.g.subscribe("show",function(m){var n=d.i.rb(),q=!m;if(null!=n.type)if(q)switch(n.type){case 3:case 2:gN(n);n.B.show();break;default:n.B.show()}else n.B.hide();n.C=q;b.Nv(d.g,m)});
g.C(this,this.ac);this.ac.Y(this.l.element,0);e=new g.wL(a);g.C(this,e);g.BI(a,e.element,4);f=new g.aH({A:"div",G:"ytp-left-controls"});g.C(this,f);f.Y(this.K);e=new g.SL(a,b,!1);g.C(this,e);e.Y(f.element);c.N||(e=new g.PL(a,b),g.C(this,e),e.Y(f.element));e=new g.SL(a,b,!0);g.C(this,e);e.Y(f.element);e=new g.T({A:"span",G:"ytp-volume-area"});g.C(this,e);e.Y(f.element);if(!c.za&&(this.muteButton=new KL(a,b),g.C(this,this.muteButton),this.muteButton.Y(e.element),c.R)){var h=new dN(a,b,this.l.element);
g.C(this,h);h.Y(e.element);e=new g.rn(e.element);g.C(this,e);e.subscribe("hoverstart",function(){eN(h,!0)});
e=new g.rn(f.element);g.C(this,e);e.subscribe("hoverend",function(){eN(h,!1)})}g.C(this,this.ag);
this.ag.Y(f.element);e=new g.aH({A:"div",G:"ytp-right-controls"});g.C(this,e);g.P(a.L().experiments,"web_wn_macro_markers")&&(this.F=new uL(a,b,this.ac,f.element,e.element),g.C(this,this.F),a.L().aa("html5_ux_control_flexbox_killswitch")?this.F.Y(this.K):this.F.Y(f.element));e.Y(this.K);g.P(c.experiments,"external_fullscreen_with_edu")&&c.externalFullscreen&&Qt(c)&&(this.J=new zL(a,b),g.C(this,this.J),this.J.Y(e.element));f=new $M(a,b);g.C(this,f);f.Y(e.element);f=new xM(a,b,this.g);g.C(this,f);Ija(this.g,
f);f.Y(e.element);var l=new DL(a);g.C(this,l);g.BI(a,l.element,5);l.subscribe("show",function(m){b.Zi(l,m)});
f=new CL(a,b,l);g.C(this,f);f.Y(e.element);f=a.getVideoData();if(c.Jh||f.Yb&&"1"===c.controlsType)this.u=new g.fN(a,b),g.C(this,this.u),this.u.Y(e.element);c.showMiniplayerButton&&!g.P(a.L().experiments,"web_player_pip")&&(this.o=new BL(a,b),g.C(this,this.o),this.o.Y(e.element));g.C(this,this.N);this.N.Y(e.element);f.Sv||this.N.hide();c.Ad||(f=new ZM(a,b),g.C(this,f),f.Y(e.element));c.Kc&&(f=new wM(a,b,this.g),g.C(this,f),f.Y(e.element));c.Ng&&(c=new rL(a,b),g.C(this,c),c.Y(e.element));g.C(this,this.W);
this.W.Y(e.element);g.C(this,this.Cc);this.I(a,"appresize",this.Qa);this.I(a,"fullscreentoggled",this.Qa);this.I(a,"presentingplayerstatechange",this.Gu);this.I(a,"videodatachange",this.Ia);this.Qa()};
iN=function(a,b){g.oH(a.D).isCued()||b?b&&(a.R.hide(),a.P.hide(),a.muteButton&&a.muteButton.eb(!1),a.u&&a.u.eb(!1),a.o&&a.o.eb(!1),a.i.rb().gg(a.sa())):b||(a.R.show(),a.P.show(),a.muteButton&&a.muteButton.eb(!0),a.u&&a.u.eb(!0),a.o&&a.o.eb(!0),a.Qf())};
kN=function(a){var b=g.lI(a.D).getPlayerSize().width;return Math.max(b-2*jN(a),100)};
jN=function(a){var b=a.i.Hc();return 12*(a.D.getVideoData().Yb?0:b?2:1)};
lN=function(a){var b=a.i.Hc()?72:50;a=a.D.L();g.St(a)&&(g.P(a.experiments,"web_player_bigger_buttons")?b=54:g.P(a.experiments,"web_player_bigger_buttons_like_mobile")&&(b=62));return b};
nN=function(a){g.T.call(this,{A:"div",G:mN.TITLE,H:[{A:"div",G:mN.TEXT,H:[{A:"a",T:[mN.LINK,mN.SESSIONLINK],M:{target:a.L().B,href:"{{url}}","data-sessionlink":"feature=player-title"},S:"{{title}}"},{A:"div",G:mN.SUBTEXT,H:[{A:"a",G:mN.CHANNEL_NAME,M:{href:"{{channelLink}}",target:"_blank"},S:"{{channelName}}"}]}]}]});this.api=a;this.g=null;this.link=this.Z(mN.LINK);g.DI(a,this.element,this,23851);this.I(a,"videodatachange",this.ga);this.I(a,"videoplayerreset",this.ga);this.ga()};
oN=function(a){a.ha("channelLink","");a.ha("channelName","")};
g.qN=function(a,b){g.T.call(this,{A:"div",H:[{A:"div",G:"ytp-tooltip-text-wrapper",H:[{A:"div",G:"ytp-tooltip-image"},{A:"div",G:"ytp-tooltip-title",S:"{{title}}"},{A:"span",G:"ytp-tooltip-text",S:"{{text}}"}]},{A:"div",G:"ytp-tooltip-bg",H:[{A:"div",G:"ytp-tooltip-duration",S:"{{duration}}"}]}]});var c=this;this.api=a;this.da=b;this.X=this.api.L();this.W=this.X.g;this.bg=this.Z("ytp-tooltip-bg");this.image=this.Z("ytp-tooltip-image");this.text=this.Z("ytp-tooltip-text");this.title=this.Z("ytp-tooltip-title");
this.K=function(e){(e=hk(e))&&g.kf(c.i,e)||c.yg()};
this.o=function(e){3===c.type&&c.yg();(e=e.currentTarget)&&1===e.nodeType&&!c.type&&(e.removeEventListener("mouseover",c.o),e.addEventListener("mouseout",c.K),e.removeEventListener("focus",c.o),e.addEventListener("blur",c.K),pN(c,e,2))};
this.N=function(){c.yg()};
this.i=null;this.B=new g.fJ(this,100);this.type=null;this.F=!1;this.g=null;this.l=NaN;this.u="";this.P=g.lI(this.api).getPlayerSize().width;this.C=!0;this.scale=1;this.R=new g.G(this.ZG,250,this);this.V=new g.G(this.yg,5E3,this);g.C(this,this.B);g.C(this,this.R);g.C(this,this.V);if(nt){var d=this.Z("ytp-tooltip-text");d.setAttribute("role","text");d.setAttribute("aria-live","polite")}};
nK=function(a){a.element.setAttribute("aria-live","polite")};
tN=function(a,b,c,d,e,f,h,l){if(!a.W){3===a.type&&a.yg();1!==a.type&&(pi(a.element,"ytp-tooltip ytp-bottom"),a.type=1,a.C&&a.B.show(),a.g&&a.g.dispose(),a.g=a.api.Ie(),a.g&&a.g.subscribe("l",a.yB,a));a.update({text:d,title:h?h:""});g.P(a.api.L().experiments,"web_wn_macro_markers")&&g.J(a.text,"ytp-tooltip-text-no-title",1===a.type&&!h);g.J(a.element,"ytp-text-detail",!!e);d=-1;a.g&&(d=fw(a.g,160*a.scale),g.P(a.X.experiments,"web_l3_storyboard")&&4===a.g.levels.length&&(d=a.g.levels.length-1),d=kw(a.g,
d,c));rN(a,d);if(l)switch(c=g.Gh(a.element).width,l){case 1:a.title.style.right="0";a.title.style.textAlign="left";break;case 2:a.title.style.right=c+"px";a.title.style.textAlign="right";break;case 3:a.title.style.right=c/2+"px",a.title.style.textAlign="center"}sN(a,!!e,b,f)}};
g.uN=function(a){1===a.type&&a.yg()};
g.fK=function(a,b){if(a.W)return g.La;b.addEventListener("mouseover",a.o);b.addEventListener("focus",a.o);var c=b.getAttribute("title");c&&!b.hasAttribute("aria-label")&&b.setAttribute("aria-label",c);return function(){a.i===b&&a.yg();b.removeEventListener("mouseover",a.o);b.removeEventListener("focus",a.o)}};
TK=function(a,b,c){if(a.type)if(3===a.type)a.yg();else return;pN(a,b,3,c)};
pN=function(a,b,c,d){if(b&&!b.hasAttribute)a=new g.Gm("showElementTooltip called with non-element.",b.toString()),g.Km(a);else{isNaN(a.l)||(a.l=NaN,a.bg.style.background="");a.i=b;a.F=!!d;d?a.u=d:(a.u=b.getAttribute("title"),b.removeAttribute("title"));pi(a.element,"ytp-tooltip");if(d=b.getAttribute("data-tooltip-image"))a.image.style.backgroundImage="url("+d+")";g.J(a.element,"ytp-tooltip-image-enabled",!!d);b=b.getAttribute("data-tooltip-opaque");g.J(a.element,"ytp-tooltip-opaque",!!b);a.type=c;
a.api.addEventListener("appresize",a.N);a.C&&(gN(a),a.B.show(0))}};
gN=function(a){var b;a.i&&(b=a.i.getAttribute("data-tooltip-text"));if(b&&!a.F){var c=a.i;a.ha("text",b);var d=c.getAttribute("data-duration");a.update({title:a.u,duration:d});c=c.getAttribute("data-preview");var e=160*a.scale,f=90*a.scale,h=160*a.scale,l=90*a.scale;a.bg.style.width=e+"px";a.bg.style.height=f+"px";a.bg.style.backgroundImage=c?"url("+c+")":"";a.bg.style.backgroundPosition=(e-h)/2+"px "+(f-l)/2+"px";a.bg.style.backgroundSize=h+"px "+l+"px";g.ri(a.element,["ytp-text-detail","ytp-preview"]);
g.J(a.element,"ytp-has-duration",!!d)}else a.ha("text",a.u),g.ti(a.element,["ytp-text-detail","ytp-preview","ytp-has-duration"]);sN(a,!!b)};
sN=function(a,b,c,d){var e=Math.min(a.P,300*a.scale);a.element.style.maxWidth=b?"":e+"px";a.da.ol(a.element,a.i,c,1===a.type,d);a.element.style.top?g.I(a.element,"ytp-bottom"):a.element.style.bottom&&g.I(a.element,"ytp-top");3===a.type&&a.V.start()};
UK=function(a){a.i&&!a.F&&a.i.hasAttribute("title")&&(a.u=a.i.getAttribute("title")||"",a.i.removeAttribute("title"),a.C&&gN(a))};
rN=function(a,b){g.J(a.element,"ytp-preview",0<=b);if(!(0>b||b===a.l)){a.l=b;var c=160*a.scale,d=160*a.scale,e=a.g.ej(a.l,c);vL(a.bg,e,c,d,!0);a.R.start()}};
vN=function(a){var b=a.i;3===a.type&&a.V.stop();a.api.removeEventListener("appresize",a.N);a.F||b.setAttribute("title",a.u);a.u="";a.i=null};
wN=function(a,b){var c={commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/browse/edit_playlist",url:"/service_ajax",sendPost:!0}},playlistEditEndpoint:{playlistId:"WL",actions:b}},d={list_id:"WL"};c=tE(g.EE(),c);g.Nf(c.then(function(e){if(e&&"STATUS_SUCCEEDED"===e.status){if(a.onSuccess)a.onSuccess({},d)}else if(a.onError)a.onError({},d)}),function(){a.ud&&a.ud({},d)})};
Jja=function(a,b,c){g.uj("web_classic_playlist_one_platform_update")?wN(a,[{addedVideoId:a.videoIds,action:"ACTION_ADD_VIDEO"}]):xN("add_to_watch_later_list",a,b,c)};
Kja=function(a,b,c){g.uj("web_classic_playlist_one_platform_update")?wN(a,[{removedVideoId:a.videoIds,action:"ACTION_REMOVE_VIDEO_BY_VIDEO_ID"}]):xN("delete_from_watch_later_list",a,b,c)};
xN=function(a,b,c,d){g.rl(c?c+"playlist_video_ajax?action_"+a+"=1":"/playlist_video_ajax?action_"+a+"=1",{method:"POST",Re:{feature:b.feature||null,authuser:b.yc||null,pageid:b.pageId||null},yb:{video_ids:b.videoIds||null,source_playlist_id:b.sourcePlaylistId||null,full_list_id:b.fullListId||null,delete_from_playlists:b.xT||null,add_to_playlists:b.eT||null,plid:g.K("PLAYBACK_ID")||null},context:b.context,onError:b.onError,onSuccess:function(e,f){b.onSuccess.call(this,e,f)},
ud:b.ud,withCredentials:!!d})};
g.zN=function(a,b){g.T.call(this,{A:"button",T:["ytp-watch-later-button","ytp-button"],M:{title:"{{title}}","data-tooltip-image":"{{image}}","data-tooltip-opaque":String(g.rt(a.L()))},H:[{A:"div",G:"ytp-watch-later-icon",S:"{{icon}}"},{A:"div",G:"ytp-watch-later-title",S:"Watch later"}]});this.D=a;this.l=b;this.icon=null;this.visible=this.i=this.g=!1;this.tooltip=b.rb();nK(this.tooltip);g.DI(a,this.element,this,28665);this.ia("click",this.onClick,this);this.I(a,"videoplayerreset",this.gJ);this.I(a,
"appresize",this.yq);this.I(a,"videodatachange",this.yq);this.I(a,"presentingplayerstatechange",this.yq);this.yq();var c=this.D.L(),d=g.io("yt-player-watch-later-pending");c.i&&d?(Rs(),yN(this,d.videoId)):this.ga(2);g.J(this.element,"ytp-show-watch-later-title",g.rt(c));g.Md(this,g.fK(b.rb(),this.element))};
AN=function(a,b){g.hK(function(){Rs({videoId:b});window.location.reload()},"wl_button",g.Nt(a.D.L()))};
yN=function(a,b){if(!a.i)if(a.i=!0,a.ga(4),g.P(a.D.L().experiments,"web_player_innertube_playlist_update")){var c=a.D.getVideoData();c=a.g?c.removeFromWatchLaterCommand:c.addToWatchLaterCommand;var d=g.kK(a.D.app),e=a.g?function(){a.hC()}:function(){a.gC()};
tE(d,c).then(e,function(){a.i=!1;BN(a,"An error occurred. Please try again later.")})}else c=a.D.L(),(a.g?Kja:Jja)({videoIds:b,
yc:c.yc,pageId:c.pageId,onError:a.lN,onSuccess:a.g?a.hC:a.gC,context:a},c.F,!0)};
BN=function(a,b){a.ga(5,b);a.D.L().l&&a.D.ka("WATCH_LATER_ERROR",b)};
CN=function(a,b){var c=a.D.L(),d=a.l.he()&&g.rt(c);!c.C||2!==b&&3!==b||(b=d?3:2);if(b!==a.icon){switch(b){case 4:var e=qJ();break;case 1:e=rH();break;case 2:e=g.W?{A:"div",T:["ytp-icon","ytp-icon-watch-later"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M18,8 C12.47,8 8,12.47 8,18 C8,23.52 12.47,28 18,28 C23.52,28 28,23.52 28,18 C28,12.47 23.52,8 18,8 L18,8 Z M16,19.02 L16,12.00 L18,12.00 L18,17.86 L23.10,20.81 L22.10,22.54 L16,19.02 Z"}}]};
break;case 3:e={A:"div",T:["ytp-icon","ytp-icon-watch-later-large"]};break;case 5:e=g.P(c.experiments,"watch_later_iconchange_killswitch")?g.W?{A:"div",T:["ytp-icon","ytp-icon-alert"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M21,7.91 L19.60,20.91 L16.39,20.91 L15,7.91 L21,7.91 Z M18,27.91 C16.61,27.91 15.5,26.79 15.5,25.41 C15.5,24.03 16.61,22.91 18,22.91 C19.38,22.91 20.5,24.03 20.5,25.41 C20.5,26.79 19.38,27.91 18,27.91 Z"}}]}:
g.W?{A:"div",T:["ytp-icon","ytp-icon-warning"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M7,27.5h22L18,8.5L7,27.5z M19,24.5h-2v-2h2V24.5z M19,20.5h-2V16.5h2V20.5z",fill:"#fff"}}]}}a.ha("icon",e);a.icon=b}};
DN=function(a){g.MJ.call(this,a);var b=this;this.Fm=g.rt(this.api.L());this.Is=48;this.Js=69;this.jg=null;this.yi=[];this.nb=new g.ZJ(this.api);this.Us=new VK(this.api);this.Oe=new g.T({A:"div",G:"ytp-chrome-top"});this.On=[];this.tooltip=new g.qN(this.api,this);this.backButton=this.nl=null;this.channelAvatar=new pK(this.api,this);this.title=new nN(this.api,this);this.Td=new g.aH({A:"div",G:"ytp-chrome-top-buttons"});this.xe=null;this.hg=new eK(this.api,this,this.Oe.element);this.overflowButton=this.oe=
null;this.Kd="1"===this.api.L().controlsType?new hN(this.api,this,this.Lb):null;this.contextMenu=new g.QK(this.api,this,this.nb);this.us=!1;this.jp=new g.T({A:"div",M:{tabindex:"0"}});this.ip=new g.T({A:"div",M:{tabindex:"0"}});this.qn=null;this.Ov=this.Po=!1;var c=g.lI(a),d=a.L(),e=a.getVideoData();this.Fm&&(g.I(a.getRootNode(),"ytp-embed"),g.I(a.getRootNode(),"ytp-embed-playlist"),this.Is=60,this.Js=89);this.qy=e&&e.Xg;g.C(this,this.nb);g.BI(a,this.nb.element,4);g.C(this,this.Us);g.BI(a,this.Us.element,
4);e=new g.T({A:"div",G:"ytp-gradient-top"});g.C(this,e);g.BI(a,e.element,1);this.jw=new g.fJ(e,250,!0,100);g.C(this,this.jw);g.C(this,this.Oe);g.BI(a,this.Oe.element,1);this.iw=new g.fJ(this.Oe,250,!0,100);g.C(this,this.iw);g.C(this,this.tooltip);g.BI(a,this.tooltip.element,4);var f=new gL(a);g.C(this,f);g.BI(a,f.element,5);f.subscribe("show",function(l){b.Zi(f,l)});
this.On.push(f);this.nl=new hL(a,this,f);g.C(this,this.nl);d.showBackButton&&(this.backButton=new YJ(a),g.C(this,this.backButton),this.backButton.Y(this.Oe.element));this.Fm||this.nl.Y(this.Oe.element);this.channelAvatar.Y(this.Oe.element);g.C(this,this.channelAvatar);g.C(this,this.title);this.title.Y(this.Oe.element);g.C(this,this.Td);this.Td.Y(this.Oe.element);this.xe=new g.zN(a,this);g.C(this,this.xe);this.xe.Y(this.Td.element);var h=new g.lL(a,this);g.C(this,h);g.BI(a,h.element,5);h.subscribe("show",
function(l){b.Zi(h,l)});
this.On.push(h);this.shareButton=new g.kL(a,this,h);g.C(this,this.shareButton);this.shareButton.Y(this.Td.element);this.Vg=new SK(a,this);g.C(this,this.Vg);this.Vg.Y(this.Td.element);d.oo&&(e=new qL(a),g.C(this,e),g.BI(a,e.element,4));this.Fm&&this.nl.Y(this.Td.element);g.C(this,this.hg);this.hg.Y(this.Td.element);e=new cK(a,this,this.hg);g.C(this,e);e.Y(this.Td.element);this.oe=new cL(a,this);g.C(this,this.oe);g.BI(a,this.oe.element,5);this.oe.subscribe("show",function(){b.Zi(b.oe,b.oe.Id())});
this.On.push(this.oe);this.overflowButton=new bL(a,this,this.oe);g.C(this,this.overflowButton);this.overflowButton.Y(this.Td.element);this.Kd&&g.C(this,this.Kd);"3"===d.controlsType&&(e=new jL(a,this),g.C(this,e),g.BI(a,e.element,8));g.C(this,this.contextMenu);this.contextMenu.subscribe("show",this.ND,this);e=new g.WJ(a,new g.XJ(a));g.C(this,e);g.BI(a,e.element,4);this.jp.ia("focus",this.NF,this);g.C(this,this.jp);this.ip.ia("focus",this.OF,this);g.C(this,this.ip);(this.oh=d.kb?null:new g.YK(a,c,
this.contextMenu,this.Lb,this.nb,function(){return b.Zg()}))&&g.C(this,this.oh);
this.xi.push(this.nb.element);this.I(a,"fullscreentoggled",this.xh);this.I(a,"offlineslatestatechange",this.JL,this);this.I(a,"cardstatechange",this.Qe,this)};
EN=function(a){var b=a.api.L(),c=g.S(g.oH(a.api),128);return b.i&&c&&!a.api.isFullscreen()};
FN=function(a,b,c){b=c?b.lastElementChild:b.firstElementChild;for(var d=null;b;){if("none"!==g.th(b,"display")&&"true"!==b.getAttribute("aria-hidden")){var e=void 0;0<=b.tabIndex?e=b:e=FN(a,b,c);e&&(d?c?e.tabIndex>d.tabIndex&&(d=e):e.tabIndex<d.tabIndex&&(d=e):d=e)}b=c?b.previousElementSibling:b.nextElementSibling}return d};
g.GN=function(a){g.MI.call(this,a);this.chrome=null;this.load()};
IN=function(a,b,c){g.A.call(this);var d=this;this.api=a;this.F=b;this.g=c;this.B=new Map;this.i=[];this.C=NaN;this.o=this.l=null;this.u=new g.G(function(){HN(d,d.C)});
this.events=new g.ln(this);this.g.getPlayerType();Wia(this.g,this);g.C(this,this.u);g.C(this,this.events);this.events.I(this.api,g.hu("serverstitchedcuerange"),this.J)};
g.JN=function(a,b){return new g.eu(Math.max(0,a-5E3),b?0x8000000000000:a-1,{namespace:"serverstitchedcuerange",priority:7})};
KN=function(a,b){for(var c=0,d=g.p(a.i),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.Mb/1E3+c,h=f+e.durationMs/1E3;if(f>b+6)break;if(h>b)return{Ug:e,Hj:b-f};c=h-e.Qb/1E3}return{Ug:null,Hj:b-c}};
HN=function(a,b){var c=a.o||a.api.wb().getPlayerState();LN(a,!0);var d=KN(a,b).Hj;a.g.seekTo(d);d=a.api.wb();var e=d.getPlayerState();g.uB(c)&&!g.uB(e)?d.playVideo():g.S(c,4)&&!g.S(e,4)&&d.pauseVideo()};
LN=function(a,b){a.C=NaN;a.u.stop();a.l&&b&&iG(a.l);a.o=null;a.l=null};
g.PN=function(a,b,c){b=void 0===b?-1:b;c=void 0===c?Infinity:c;for(var d=b,e=c,f=g.p(a.B),h=f.next();!h.done;h=f.next()){var l=g.p(h.value);h=l.next().value;l=l.next().value;l.nf>=d&&l.target&&l.target.Qb<=e&&(a.g.removeCueRange(h),a.B["delete"](h))}d=b;e=c;f=[];h=g.p(a.i);for(l=h.next();!l.done;l=h.next())l=l.value,(l.Mb<d||l.Qb>e)&&f.push(l);a.i=f;d=KN(a,b/1E3);b=d.Ug;d=d.Hj;b&&(d*=1E3,g.MN(b,d,b.Mb+d));(b=KN(a,c/1E3).Ug)&&g.NN(a,"Invalid clearEndTimeMs="+c+" that falls during "+g.ON(b)+".Child playbacks can only have duration updated not their start.")};
g.MN=function(a,b,c){a.durationMs=b;a.Qb=c;b={pc:g.JN(b,!0),nf:b,target:null};a.yf=b};
g.ON=function(a){return"playback={timelinePlaybackId="+a.Bb+" video_id="+a.playerVars.video_id+" durationMs="+a.durationMs+" enterTimeMs="+a.Mb+" parentReturnTimeMs="+a.Qb+"}"};
eha=function(a,b,c,d){var e=0===a.g.getStreamTimeOffset()?a.g.Fb():a.g.getStreamTimeOffset();b=KN(a,b+e).Ug;var f=Number(d.split(";")[0]);return b&&b.playerResponse&&b.playerResponse.streamingData&&(b=b.playerResponse.streamingData.adaptiveFormats)&&(b=b.find(function(h){return h.itag===f}))&&b.url?(a=a.g.getVideoData(),c=a.fa.g[d].index.Zy(c-1),d=b.url,c&&c.g&&(d=d.concat("&daistate="+c.g)),(c=a.clientPlaybackNonce)&&(d=d.concat("&cpn="+c)),d):null};
g.NN=function(a,b){a.g.Ya("timelineerror",b)};
RN=function(a,b,c){g.A.call(this);var d=this;this.api=a;this.u=b;this.i=c;this.B=new Map;this.g=[];this.l=this.F=null;this.N=NaN;this.C=this.o=null;this.K=new g.G(function(){QN(d,d.N)});
this.J=[];this.R=new g.G(function(){var e=d.J.pop();if(e){var f=e.Bb,h=e.playerVars;e=e.playerType;h.prefer_gapless=!0;d.api.preloadVideoByPlayerVars(h,e,NaN,"",f);d.J.length&&d.R.fb(4500)}});
this.events=new g.ln(this);c.getPlayerType();g.C(this,this.K);g.C(this,this.R);g.C(this,this.events);this.events.I(this.api,g.hu("childplayback"),this.DI);this.events.I(this.api,"onQueuedVideoLoaded",this.hM);this.events.I(this.api,"presentingplayerstatechange",this.hf)};
g.SN=function(a,b){return new g.eu(Math.max(0,a-5E3),b?0x8000000000000:a-1,{namespace:"childplayback",priority:7})};
Lja=function(a,b,c,d){a.l=d;TN(a.api.app,a.i,c,void 0===b?0:b)};
UN=function(a,b,c,d){a.l=d;d=b.Bb;var e=b.playerVars,f=b.playerType;a.F=b;a.api.enqueueVideoByPlayerVars(e,f,c,d)};
g.XN=function(a,b,c){var d=b.yf;b.yf=c;VN(a,b)&&(c=a.api.wb(),d.pc===a.l&&WN(a),c.removeCueRange(d.pc),c.addCueRange(b.yf.pc))};
WN=function(a){a.F=null;a.l=null;!a.api.app.Ga.g||a.api.clearQueue()};
ZN=function(a,b){VN(a,b)||g.YN(a,"e.childPlaybackIsNotPresenting");return b.Qb===b.Mb+b.durationMs?b.Mb+1E3*a.api.wb().getCurrentTime():b.Qb};
$N=function(a,b){for(var c=0,d=g.p(a.g),e=d.next();!e.done;e=d.next()){e=e.value;var f=e.Mb/1E3+c,h=f+e.durationMs/1E3;if(f>b)break;if(h>b)return{Ug:e,Hj:b-f};c=h-e.Qb/1E3}return{Ug:null,Hj:b-c}};
QN=function(a,b){var c=a.C||a.api.wb().getPlayerState();aO(a,!0);if(g.P(a.u.experiments,"html5_playbacktimeline_seektoinf_killswitch")||isFinite(b))var d=b;else d=a.i.C,d=d.l?eB(d.l):Infinity;var e=$N(a,d);d=e.Ug;e=e.Hj;var f=d&&!VN(a,d)||!d&&a.i!==a.api.wb(),h=1E3*e;h=a.l&&a.l.start<=h&&h<=a.l.end;!f&&h||WN(a);d?g.bO(a,d,e,c):cO(a,e,c)};
cO=function(a,b,c){var d=a.i;if(d!==a.api.wb()){var e=d.getPlayerType();g.MG(a.api.app,e)}d.seekTo(b);dO(a,c)};
g.bO=function(a,b,c,d){var e=VN(a,b);if(!e){g.MG(a.api.app,b.playerType);b.playerVars.prefer_gapless=!0;var f=new g.yw(a.u,b.playerVars);f.Bb=b.Bb;eO(a.api.app,f,b.playerType,void 0)}f=a.api.wb();e||f.addCueRange(b.yf.pc);f.seekTo(c);dO(a,d)};
dO=function(a,b){var c=a.api.wb(),d=c.getPlayerState();g.uB(b)&&!g.uB(d)?c.playVideo():g.S(b,4)&&!g.S(d,4)&&c.pauseVideo()};
aO=function(a,b){a.N=NaN;a.K.stop();a.o&&b&&iG(a.o);a.C=null;a.o=null};
VN=function(a,b){var c=a.api.wb();return!!c&&c.getVideoData().Bb===b.Bb};
fO=function(a){var b=a.g.find(function(d){return VN(a,d)});
if(b){WN(a);var c=new g.oB(8);b=ZN(a,b)/1E3;cO(a,b,c)}};
g.hO=function(a,b,c){b=void 0===b?-1:b;c=void 0===c?Infinity:c;for(var d=b,e=c,f=g.p(a.B),h=f.next();!h.done;h=f.next()){var l=g.p(h.value);h=l.next().value;l=l.next().value;l.nf>=d&&l.target&&l.target.Qb<=e&&(a.i.removeCueRange(h),a.B["delete"](h))}d=b;e=c;f=[];h=g.p(a.g);for(l=h.next();!l.done;l=h.next())if(l=l.value,l.Mb>=d&&l.Qb<=e){var m=a;m.F===l&&WN(m);VN(m,l)&&g.LI(m.api,l.playerType)}else f.push(l);a.g=f;d=$N(a,b/1E3);b=d.Ug;d=d.Hj;b&&(d*=1E3,g.gO(a,b,d,b.Qb===b.Mb+b.durationMs?b.Mb+d:b.Qb));
(b=$N(a,c/1E3).Ug)&&g.YN(a,"Invalid clearEndTimeMs="+c+" that falls during playback={timelinePlaybackId="+(b.Bb+" video_id="+b.playerVars.video_id+" durationMs="+b.durationMs+" enterTimeMs="+b.Mb+" parentReturnTimeMs="+b.Qb+"}.Child playbacks can only have duration updated not their start."))};
g.gO=function(a,b,c,d){b.durationMs=c;b.Qb=d;d={pc:g.SN(c,!0),nf:c,target:null};g.XN(a,b,d);VN(a,b)&&1E3*a.api.wb().getCurrentTime()>c&&(b=ZN(a,b)/1E3,c=a.api.wb().getPlayerState(),cO(a,b,c))};
g.YN=function(a,b){a.i.Ya("timelineerror",b)};
Nja=function(a){a&&"web"!==a&&Mja.includes(a)};
kO=function(a,b,c){var d=this;this.api=a;this.player=b;this.player.subscribe("localmediachange",this.g,this);this.i=c;jfa().then(function(){var e=Tv(2);e=g.p(e);for(var f=e.next();!f.done;f=e.next())f=f.value,iO(d,f)||Uv(f,3);jO(d)})};
iO=function(a,b){var c=a.api.wb(),d=c?c.getVideoData():null;return c&&(null===d||void 0===d?0:px(d))&&d.videoId===b?c:a.player.getVideoData().videoId===b?a.player:null};
mO=function(a,b){Uv(b,2);var c=Oja(a,{videoId:b,download_media:!0,download_media_in_bg:!0,start:Infinity});c.subscribe("dataloaded",function(){return void lO(a,c)});
a.player.Vf(c,a.i);DF(a.player,!1)};
Oja=function(a,b){return new g.yw(a.player.L(),b)};
jO=function(a){if(g.P(a.api.L().experiments,"hoffle_api"))0<Tv(2).length||(b=Tv(3),0<b.length&&mO(a,b[0]));else{a=g.p(Tv(3));for(var b=a.next();!b.done;b=a.next())dw(b.value)}};
lO=function(a,b){if(g.P(a.api.L().experiments,"hoffle_api")){var c=b.getPlayerResponse();if(c&&c.videoDetails&&c.videoDetails.videoId){var d=c.videoDetails;c={videoId:c.videoDetails.videoId,title:d.title,lengthSeconds:d.lengthSeconds,thumbnail:d.thumbnail,viewCount:d.viewCount,author:d.author};lfa(c.videoId,c)}}};
nO=function(a){var b=/codecs="([^"]*)"/.exec(a.mimeType);return b&&b[1]?b[1]+" ("+Ip(a)+")":Ip(a)};
oO=function(){this.csn=g.Hn();this.elements=new Set;this.i=new Set;this.g=new Set};
lja=function(a,b,c,d){a.elements.has(b);a.elements.add(b);d=bda(d);b.visualElement=d;var e=g.Hn(),f=g.Fn();e&&f&&g.bo(e,f,d);g.Md(c,function(){pO(a,b)})};
mja=function(a,b,c){a.elements.has(b);a.elements.add(b);g.Md(c,function(){pO(a,b)})};
pO=function(a,b){a.elements.has(b);a.elements["delete"](b);a.i["delete"](b);a.g["delete"](b)};
qO=function(a){if(a.csn!==g.Hn())if("UNDEFINED_CSN"===a.csn)a.csn=g.Hn();else{var b=g.Hn(),c=g.Fn();if(b&&c){a.csn=b;for(var d=g.p(a.elements),e=d.next();!e.done;e=d.next())(e=e.value.visualElement)&&e.isClientVe()&&g.bo(b,c,e)}if(b)for(a=g.p(a.g),e=a.next();!e.done;e=a.next())(c=e.value.visualElement)&&c.isClientVe()&&g.Yn(b,c)}};
rO=function(a,b,c,d,e){g.T.call(this,{A:"div",G:"ytp-horizonchart"});this.B=b;this.sampleCount=c;this.o=d;this.u=e;this.index=0;this.heightPx=-1;this.l=this.i=null;this.g=Math.round(a/c);this.element.style.width=this.g*this.sampleCount+"px";this.element.style.height=this.B+"em"};
sO=function(a,b){if(-1===a.heightPx){var c=null;try{c=g.bf("CANVAS"),a.i=c.getContext("2d")}catch(e){}if(a.i){var d=a.g*a.sampleCount;a.l=c;a.l.width=d;a.l.style.width=d+"px";a.element.appendChild(a.l)}else for(a.sampleCount=Math.floor(a.sampleCount/4),a.g*=4,c=0;c<a.sampleCount;c++)d=g.bf("SPAN"),d.style.width=a.g+"px",d.style.left=a.g*c+"px",a.element.appendChild(d)}c=a.element.clientHeight||24;c!==a.heightPx&&(a.heightPx=c,a.i&&(c=1<(window.devicePixelRatio||1)?2:1,a.l.height=a.heightPx*c,a.l.style.height=
a.heightPx+"px",a.i.scale(1,c)));c=g.p(b);for(d=c.next();!d.done;d=c.next())a.setValue(a.index,d.value),a.index=(a.index+1)%a.sampleCount;c=a.index;a.i?a.i.clearRect(c*a.g,0,a.g,a.heightPx):(c=a.element.children[c],c.style.height="0px",c.style.borderTop="")};
tO=function(a){var b=null;b={A:"button",T:["html5-video-info-panel-close","ytp-button"],M:{title:"close"},S:"[x]"};g.T.call(this,{A:"div",G:"html5-video-info-panel",H:[b,{A:"div",G:"html5-video-info-panel-content",H:[{A:"div",H:[{A:"div",S:"Video ID / sCPN"},{A:"span",S:"{{video_id_and_cpn}}"}]},{A:"div",H:[{A:"div",S:"Viewport / Frames"},{A:"span",S:"{{dims_and_frames}}"}]},{A:"div",H:[{A:"div",S:"Current / Optimal Res"},{A:"span",S:"{{resolution}}"}]},{A:"div",H:[{A:"div",S:"Volume / Normalized"},
{A:"span",S:"{{volume}}"}]},{A:"div",H:[{A:"div",S:"Codecs"},{A:"span",S:"{{codecs}}"}]},{A:"div",M:{style:"{{shader_info_style}}"},H:[{A:"div",S:"Shader Info"},{A:"span",S:"{{shader_info}}"}]},{A:"div",M:{style:"{{color_style}}"},H:[{A:"div",S:"Color"},{A:"span",S:"{{color}}"}]},{A:"div",M:{style:"{{drm_style}}"},H:[{A:"div",S:"Protected"},{A:"span",S:"{{drm}}"}]},{A:"div",M:{style:"{{bandwidth_style}}"},H:[{A:"div",S:"Connection Speed"},{A:"span",H:[{A:"span",S:"{{bandwidth_chart}}"},{A:"span",
S:"{{bandwidth_kbps}}"}]}]},{A:"div",M:{style:"{{network_activity_style}}"},H:[{A:"div",S:"Network Activity"},{A:"span",H:[{A:"span",S:"{{network_activity_chart}}"},{A:"span",S:"{{network_activity_bytes}}"}]}]},{A:"div",H:[{A:"div",S:"Buffer Health"},{A:"span",H:[{A:"span",S:"{{buffer_health_chart}}"},{A:"span",S:"{{buffer_health_seconds}}"}]}]},{A:"div",M:{style:"{{live_latency_style}}"},H:[{A:"div",S:"Live Latency"},{A:"span",H:[{A:"span",S:"{{live_latency_chart}}"},{A:"span",S:"{{live_latency_secs}}"}]}]},
{A:"div",M:{style:"{{live_mode_style}}"},H:[{A:"div",S:"Live Mode"},{A:"span",S:"{{live_mode}}"}]},{A:"div",M:{style:"{{playback_categories_style}}"},H:[{A:"div",S:"Playback Categories"},{A:"span",S:"{{playback_categories}}"}]},{A:"div",H:[{A:"div",S:"Mystery Text"},{A:"span",S:"{{debug_info}}"}]},{A:"div",M:{style:"{{release_style}}"},H:[{A:"div",S:"Player Release"},{A:"span",S:"{{release_name}}"}]}]}]});b&&(b=this.Z("html5-video-info-panel-close"),this.I(b,"click",this.hide));b=[0,18750,37500,81250,
128E3,256E3,512E3,2048E3,8192E3,32768E3,131072E3];var c="#000 #d53e4f #f46d43 #fdae61 #fee08b #e6f598 #abdda4 #66c2a5 #3288bd #124588 #fff".split(" "),d=b.map(function(e){return e/4});
this.g=new rO(300,1,150,b,c);g.C(this,this.g);this.ha("bandwidth_chart",this.g);this.l=new rO(300,1,150,[0,3,10,15,30,60,90],"#000 #66c2a5 #abdda4 #e6f598 #fdae61 #f46d43 #a8330f".split(" "));g.C(this,this.l);this.ha("live_latency_chart",this.l);this.i=new rO(300,1,150,[0,15,30,60,90,120],"#000 #fdae61 #e6f598 #66c2a5 #3288bd #fff".split(" "));g.C(this,this.i);this.ha("buffer_health_chart",this.i);this.o=new rO(300,1,150,d,c);g.C(this,this.o);this.ha("network_activity_chart",this.o);this.delay=new g.G(this.ga,
500,this);g.C(this,this.delay);this.u=a};
AO=function(a,b,c){g.A.call(this);var d=this;this.Aa=$ca(b||{});this.zb=c;b=this.Aa.args||{};this.g=new Lt(b,c);g.C(this,this.g);g.P(this.g.experiments,"html5_vp9_new_mime")&&void 0!=navigator.mediaCapabilities&&(Nr=!0);g.P(this.g.experiments,"html5_disable_subtract_cuepoint_offset")&&(cz=!0);g.P(this.g.experiments,"html5_log_opus_oboe_killswitch")&&(qp=!1);g.P(this.g.experiments,"html5_skip_empty_load")&&(uO=!0);vO=g.P(this.g.experiments,"html5_ios_force_seek_to_zero_on_stop");wO=g.P(this.g.experiments,
"html5_ios7_force_play_on_stall");xO=g.P(this.g.experiments,"html5_ios4_seek_above_zero");g.P(this.g.experiments,"html5_mediastream_applies_timestamp_offset")&&(Zy=!0);g.P(this.g.experiments,"html5_dont_override_default_sample_desc_index")&&(Yo=!0);this.Ue=Q(ut(this.g)&&!0,b.enablesizebutton);this.kd=Q(!1,b.player_wide);this.J=new mB;g.C(this,this.J);this.da=!1;this.setIsExternalPlaylist(b.external_list);this.W=new g.ln(this);g.C(this,this.W);this.X=null;this.ea=new g.Gi;g.C(this,this.ea);this.na=
new g.Gi;g.C(this,this.na);this.ua=new oO;this.jd=null;this.i=new fI(this);g.C(this,this.i);this.F=new gH(this);g.C(this,this.F);this.ca=1;this.Gb={};this.R=this.g.ze?sea():{volume:100,muted:this.g.mute};this.Ae=this.g.l?new eI(this,1):new WH(this,1);g.C(this,this.Ae);this.u=null;this.Xd={};c={};this.Zb=(c.internalvideodatachange=this.gK,c.playbackready=this.iK,c.playbackstarted=this.jK,c.statechange=this.pH,c);this.o=Pja(this);this.Wd=new g.ln(this);g.C(this,this.Wd);this.K=new bE(this.g,this.o);
this.l=Qja(this);c={};this.Be=(c.airplayactivechange=this.ZJ,c.airplayavailabilitychange=this.aK,c.beginseeking=this.qK,c.endseeking=this.OK,c.internalAbandon=this.YK,c.internalaudioformatchange=this.kK,c.internalvideodatachange=this.ru,c.internalvideoformatchange=this.hN,c.liveviewshift=this.fL,c.playbackstalledatstart=this.RM,c.progresssync=this.eM,c.onLoadProgress=this.gL,c.SEEK_COMPLETE=this.FM,c.SEEK_TO=this.GM,c.onVideoProgress=this.sH,c.onLoadedMetadata=this.iL,c.onDompaused=this.MK,c.playbackready=
this.TL,c.statechange=this.fC,c.connectionissue=this.CK,c.newelementrequired=this.GB,c.heartbeatparams=this.qH,c.videoelementevent=this.rH,c.drmoutputrestricted=this.NK,c.requestmediasource=this.rM,c.signatureexpired=this.KM,c.localmediachange=this.mL,c);this.va=new g.ln(this);g.C(this,this.va);this.B=null;c=10;g.It(this.g)&&(c=3);Tt(this.g)&&(c=g.O(this.g.experiments,"tvhtml5_unplugged_preload_cache_size"));this.Xa=new SG(c,function(e){e!=g.U(d,e.getPlayerType())&&(lv("prefetch_"+e.getVideoData().videoId),
e.dispose())});
g.C(this,this.Xa);this.Ec=this.Kc=-1;this.tb=new g.G(this.F.resize,16,this.F);g.C(this,this.tb);this.kb=!1;this.Ca=!0;this.Ka=this.ab=this.C=null;this.ye=!1;this.Ad=this.Zd=null;this.za=0;this.La=this.Wa=!1;this.la=null;this.ze=!1;this.ae=!0;this.Da=void 0;Rja(this);this.ma=new RN(this.i,this.g,this.l);this.Te=null;this.Ga=new JG(this.i);g.C(this,this.Ga);Nja(this.g.deviceParams.c);this.W.I(this.i,g.hu("appapi"),this.eK);this.W.I(this.i,"crx_appapi",this.fK);this.W.I(this.i,g.hu("appad"),this.hB);
this.W.I(this.i,"crx_appad",this.hB);this.W.I(this.i,"crx_applooprange",this.Cv);this.W.I(this.i,"presentingplayerstatechange",this.WL);this.W.I(this.i,"resize",this.tM);this.F.Y(g.Oe(document,a));this.W.I(this.i,"offlineslatestatechange",this.IL);this.Yd=Sja(this,this.F.element);g.C(this,this.Yd);this.V=this.N=null;yO(this,"hoffle_save")&&(this.V=new kO(this.i,zO(this,1),function(){return d.md()}));
g.W=this.g.C;this.g.Ca&&(g.WI.ux=g.GN);Tja(this);this.K.tick("fs");Uja(this);this.P=this.getVideoData().enableServerStitchedDai?new IN(this.i,this.g,this.l):null;this.g.Ca&&rja(this.o);g.Ct(this.o.D.L())&&TI(this.o,"music");g.rt(this.o.D.L())&&TI(this.o,"embed");yO(this,"web_player_sentinel_is_uniplayer")||g.Ej(Error("Player flag missing: web_player_sentinel_is_uniplayer"));this.Ve=Vja(this)};
Vja=function(a){function b(c){if(-1!==c.stack.indexOf("player"))(a.B||a.l).B.onError("player.exception",qs({n:c.name,m:c.message}))}
Cj.push(b);return function(){var c=Cj.indexOf(b);-1!==c&&Cj.splice(c,1)}};
Qja=function(a){var b=new xF(a.g,1,a.K,a.F,(0,g.x)(a.ea.O,a.ea),(0,g.x)(a.i.getVisibilityState,a.i),a.J);b.setPlaybackRate(a.g.i?1:BO(a,Number(g.io("yt-player-playback-rate"))||1));on(b,a.Zb,a);return b};
g.kK=function(a){if(!a.jd){var b={Ls:{subscribeEndpoint:xE,unsubscribeEndpoint:yE,playlistEditEndpoint:AE,webPlayerShareEntityServiceEndpoint:SH,modifyChannelNotificationPreferenceEndpoint:zE}},c=CE();Jl();oE.g=new oE(b,c,g.L);a.jd=oE.g}return a.jd};
Pja=function(a){var b="",c=fH(a);0==c.indexOf("//")&&(c=a.g.protocol+":"+c);var d=c.lastIndexOf("/base.js");-1!=d&&(b=c.substring(0,d+1));if(c=Error().stack)if(c=c.match(/\((.*?\/(debug-)?player-.*?):\d+:\d+\)/))c=c[1],c.includes(b)||g.Ej(Error("Player module URL mismatch: "+(c+" vs "+b+".")));b=new PI(a.i,b);c={};a=(c.destroyed=(0,g.x)(a.dK,a),c);b.l=a;return b};
DO=function(a,b){var c=a.isVideoInfoVisible();a.X||(a.X=new tO(a.i),g.C(a,a.X),g.BI(a.i,a.X.element,4));g.dH(a.X,b);CO(a)&&c!=b&&g.mI(a.o).ew();c=a.B;b&&c&&c.Ya("sfn","1",!0)};
FO=function(a){var b=EO.getTag(!0,!a.g.deviceHasDisplay);a.u=new g.Lx(b);g.C(a,a.u);a.B&&UF(a.B,a.u);try{a.g.za?(a.Ka&&a.W.gb(a.Ka),a.Ka=a.W.I(a.u,"volumechange",a.wL)):yO(a,"web_player_mute_then_volume_killswitch")?(a.u.setVolume(a.R.volume/100),a.u.Ii(a.R.muted)):(a.u.Ii(a.R.muted),a.u.setVolume(a.R.volume/100))}catch(d){var c="setvolume.1;emsg."+(d.message&&d.message.replace(/[;:,]/g,"_"));a.l.Jc("html5.missingapi","UNSUPPORTED_DEVICE",c,void 0);return}g.nn(a.va);Wja(a);c=a.F;c.g=b;c.u=!1;c.g.parentNode||
g.ff(c.l,c.g,0);c.C=new g.jh(0,0,0,0);pH(c);g.hH(c);g.I(c.g,"video-stream");g.I(c.g,g.eH.MAIN_VIDEO);b=c.app.L();b.kd&&c.g.setAttribute("data-no-fullscreen","true");b.Mg&&(c.g.setAttribute("webkit-playsinline",""),c.g.setAttribute("playsinline",""));b.zo&&c.g&&c.I(c.g,"click",c.g.play,c.g);try{a.u.Xk()}catch(d){c="activate.1;emsg."+(d.message&&d.message.replace(/[;:,]/g,"_")),a.l.Jc("html5.missingapi","UNSUPPORTED_DEVICE",c,void 0)}};
GO=function(a){if(a.u){a.Ka&&(a.W.gb(a.Ka),a.Ka=null);g.nn(a.va);a.B&&TF(a.B,!0);jH(a.F);a.u.ti()&&EO.releaseTag(a.u.sa());if(!yO(a,"html5_unset_src_on_remove_killswitch"))try{a.u.Zq()}catch(b){}a.u=null}};
g.MG=function(a,b){var c=g.U(a,b);c||(c=zO(a,b),HO(a,c));JI(a,c)};
JI=function(a,b){if(a.B!=b){var c=null;a.B&&(c=a.B.getPlayerState(),YI(a.o,3),g.IO(a,"cuerangesremoved",pA(a.B.V)||[]),a.Ga&&!b.isGapless()&&a.B.isGapless()&&a.u&&a.u.stopVideo(),KI(a));HO(a,b);a.B=b;a.u&&UF(b,a.u);on(b,a.Be,a);a.ru("newdata",b,b.getVideoData());c&&!g.tB(c,b.getPlayerState())&&a.fC(new g.xB(b.getPlayerState(),c));b.ca.isFinished()&&a.ru("dataloaded",b,b.getVideoData());(c=(c=b.getVideoData().ya)&&c.video)&&a.i.ka("onPlaybackQualityChange",c.quality);g.IO(a,"cuerangesadded",pA(a.B.V)||
[]);c=b.getPlayerState();g.S(c,2)?JO(a):g.S(c,8)&&b.playVideo()}};
JO=function(a){if(!Xja(a)){var b=a.l.i;b&&(b=b.hm(),b instanceof Promise&&b["catch"](function(){}));
KO(a,wB(kI(a)))}};
Wja=function(a){var b=a.u;bs()?a.va.I(b,"webkitpresentationmodechanged",a.CM):cs()&&(a.va.I(b,"enterpictureinpicture",function(){LO(a,!0)}),a.va.I(b,"leavepictureinpicture",function(){LO(a,!1)}));
At&&(a.va.I(b,"webkitbeginfullscreen",function(){MO(a,3)}),a.va.I(b,"webkitendfullscreen",function(){MO(a,0)}))};
HO=function(a,b){if(b!=a.l){var c=b.getPlayerType();a.Xd[c]=b}};
KI=function(a){var b;if(b=a.la)b=a.u,b=!!b&&b===a.la.l;b&&(GO(a),FO(a));a.B&&(TF(a.B),pn(a.B,a.Be,a));a.B=null};
g.U=function(a,b){return b?1==b?a.l:a.Xd[b]||null:a.B};
zO=function(a,b){var c=a.K;2==b&&(c=new bE(a.g));return new xF(a.g,b,c,a.F,(0,g.x)(a.ea.O,a.ea),(0,g.x)(a.i.getVisibilityState,a.i),a.J)};
g.NO=function(a,b){return a.Vb(b)?a.l:b};
OO=function(a,b){var c=a.B;return c&&b==a.l&&a.Vb(b)&&a.Vb(c)?c:b};
PO=function(a){var b=a.getVideoData(),c=10<b.lengthSeconds,d=a.o;d.ey();TI(d,"attribution",void 0,!1,!0);TI(d,"embed");TI(d,"fresca",void 0,!1,!0);TI(d,"kids");TI(d,"remote");TI(d,"miniplayer");TI(d,"music");TI(d,"captions",void 0,!0);TI(d,"unplugged");TI(d,"visualizer",void 0,!1,!0);TI(d,"ypc",void 0,!1,!0);TI(d,"ypc_clickwrap",void 0,!1,!0);TI(d,"yto",void 0,!1,!0);TI(d,"webgl",void 0,!1,!0);d.o&&c?g.yI(d.D,"endscreen"):TI(d,"endscreen");d.o&&c?(g.yI(d.D,"annotations_module"),g.yI(d.D,"creatorendscreen")):
(d.Os(),TI(d,"creatorendscreen",void 0,!0));d.gy();VI(d);c&&mx(b)?a.Wd.I(a.i,"presentingplayerstatechange",a.VL):UI(a.o);a.i.O("videoready",b)};
QO=function(a){return a.l.getVideoData()};
g.RO=function(a,b){var c=g.U(a,1);c&&uF(c,b)};
SO=function(a){a=QO(a);a.isValid();return mx(a)};
Tja=function(a){var b=new g.yw(a.g,a.Aa.args);g.ko()&&b.hd.push("remote");b.isValid()&&(a.l.Vf(b,(0,g.x)(a.md,a)),yO(a,"html5_androidtv_quic")&&"h5vcc"in window&&"settings"in window.hG&&window.hG.settings.set("QUIC",1),!g.P(a.g.experiments,"html5_delay_initial_loading")&&SO(a)&&(a.g.Zd||a.g.ae)&&DF(a.l))};
Uja=function(a){Yja(a);var b=a.Aa.args;FO(a);var c=QO(a);a.i.ka("onVolumeChange",a.R);if(b&&wx(b)){var d=Qt(a.g);d&&!a.da&&(b.fetch=0);TO(a,b);if(d&&!a.da)UO(a);else if(!c.isValid())a.C.onReady((0,g.x)(a.Iq,a))}JI(a,a.l);g.S(a.l.getPlayerState(),128)||(b=iea(a.g.deviceHasDisplay),"fmt.noneavailable"==b?a.l.Jc("html5.missingapi","HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nocodecs.1",void 0):"html5.missingapi"==b?a.l.Jc(b,"UNSUPPORTED_DEVICE","nocanplaymedia.1",void 0):c&&c.isValid()&&SO(a)&&(a.g.Zd||a.g.ae)?
VO(a):g.io("yt-player-playback-on-reload")?(g.Im("embedsItpPlayedOnReload",{playedOnReload:!0,isLoggedIn:!!a.g.yc}),Ts(!1),VO(a)):g.au(a.g)||WO(a),yO(a,"web_player_inline_botguard")&&(g.St(a.g)?(qk(function(){XO(a)}),qk(function(){Tm()})):(XO(a),Tm())))};
XO=function(a){if(yO(a,"web_player_botguard_inline_skip_config_killswitch")){var b=g.K("BG_I",null);var c=g.K("BG_IU",null);var d=g.K("BG_P",null)}else{var e=a.getVideoData().botguardData;if(!e)return;b=e.interpreterScript;c=e.interpreterUrl;d=e.program}e=a.getVideoData().sf||"";a=a.g.cspNonce;e=e?"c1b"in g.Xk(e):!1;d&&(Rm.uc?0:!XB||72E5<(0,g.M)()-XB)&&(b||c)&&Rm.initialize(b,c,d,yha,a,e)};
WO=function(a){a.i.O("initializingmode");g.YO(a,2);TI(a.o,"remote");g.P(a.g.experiments,"player_cued_miniplayer_module_killswitch")||TI(a.o,"miniplayer")};
VO=function(a){if(g.S(a.l.getPlayerState(),128))return!1;SO(a)&&a.g.ae&&(EO.hasTags(void 0)&&a.La?(YH(a,{muted:!1,volume:a.R.volume},!1),ZO(a,!1)):EO.hasTags(void 0)||a.R.muted||(YH(a,{muted:!0,volume:a.R.volume},!1),ZO(a,!0)));$O(a,1,a.l.getVideoData(),!1);a.i.O("initializingmode");JI(a,a.l);g.YO(a,3);var b;if(!(b=!a.g.Kh)){if(b=a.la)b=a.u,b=!!b&&b===a.la.l;b=b&&a.ye}b&&(GO(a),FO(a),UF(a.l,a.u));KF(a.l);if(g.S(a.l.getPlayerState(),128))return!1;KO(a,3);return a.ye=!0};
CO=function(a){a=g.mI(a.o);return!!a&&a.loaded};
aP=function(a,b){a.B==a.l&&wG(a.B)!=b&&(a.B.setLoop(b),a.i.O("loopchange",b))};
bP=function(a,b){if(!a.N)return!1;var c=.001*a.N.startTimeMs,d=.001*a.N.endTimeMs;return g.Ee(b,c)||g.Ee(b,d)||b>=c&&b<=d};
BO=function(a,b){var c=a.i.getAvailablePlaybackRates();b=parseFloat(b.toFixed(2));var d=c[0];c=c[c.length-1];b<=d||(b>=c?d=c:(d=Math.floor(100*b+.001)%5,d=0==d?b:Math.floor(100*(b-.01*d)+.001)/100));return d};
cP=function(a,b){var c=g.U(a,b);return c?a.Vb(c)?(c=g.NO(a,c),nG(c)-c.getCurrentTime()+a.getCurrentTime(b)):nG(c):0};
dP=function(a,b,c){if(a.Vb(c)){c=c.getVideoData();if(a.P){a=a.P;for(var d=g.p(a.i),e=d.next();!e.done;e=d.next())if(e=e.value,c.Bb===e.Bb){b+=e.Mb/1E3;break}d=b;a=g.p(a.i);for(e=a.next();!e.done;e=a.next()){e=e.value;if(c.Bb===e.Bb)break;var f=e.Mb/1E3;if(f<b)d+=e.durationMs/1E3+f-e.Qb/1E3;else break}c=d}else{a=a.ma;d=g.p(a.g);for(e=d.next();!e.done;e=d.next())if(e=e.value,c.Bb===e.Bb){b+=e.Mb/1E3;break}d=b;a=g.p(a.g);for(e=a.next();!e.done;e=a.next()){e=e.value;if(c.Bb===e.Bb)break;f=e.Mb/1E3;if(f<
b)d+=e.durationMs/1E3+f-e.Qb/1E3;else break}c=d}return c}return b};
Yja=function(a){var b=a.F;b.ba();var c=b.app.L();c.Kh||b.Wm("tag-pool-enabled");c.u&&b.Wm(g.eH.HOUSE_BRAND);"gvn"===c.playerStyle&&(b.Wm("ytp-gvn"),b.element.style.backgroundColor="transparent");c.ua&&(b.K=g.Mj("yt-dom-content-change",b.resize,b));g.P(c.experiments,"web_player_ios_mweb_resizing")&&b.I(window,"orientationchange",b.resize,b);b.I(window,"resize",b.resize,b);b=a.Ae;b.element=a.F.element;c=b.element;for(var d in b.i)b.i.hasOwnProperty(d)&&(c[d]=b.i[d]);(d=g.kn(a.F.element))&&a.W.I(a.F,
d,a.TK);a.W.I(window,"resize",a.uM)};
kI=function(a,b){return 3==a.getPresentingPlayerType()?g.mI(a.o).Ob:g.U(a,b).getPlayerState()};
eP=function(a,b){return 3==a.getPresentingPlayerType()?wB(g.mI(a.o).Ob):2!=b||a.Vb()?a.Kc:a.Ec};
gP=function(a){fP(a);aP(a,!1);a.setLoopRange(null);a.Gb={};var b=a.K;if(b.g){var c=b.g;c.i={};c.g={}}b.i=!1;a.P?(b=a.P,a=a.l,a.getPlayerType(),LN(b,!1),g.PN(b),b.g=a):(b=a.ma,a=a.l,1!==a.getPlayerType()&&g.YN(b,"e.invalidParentVideoPlayerType"),aO(b,!1),g.hO(b),b.i=a)};
UO=function(a){var b=hP();if(b)if(b.list){if(a.C&&a.C.getPlaylistId()==b.list)if(0<=b.index){var c=b.video;a.i.isFullscreen()&&((c=c[a.C.index])&&c.encrypted_id!=a.C.xa().videoId||(b.index=a.C.index));Ax(a.C,b);a.ab&&iP(a,a.ab)}else a.ab=null}else a.Lo()};
TO=function(a,b){a.C&&(a.C.unsubscribe("error",a.Lo,a),g.Nd(a.C),a.C=null);b&&(a.da&&(b.fetch=0),a.C=new g.vx(a.g,b),a.C.subscribe("error",a.Lo,a))};
jP=function(a,b,c,d){b in a.Gb||(c=new g.eu(c,d,{id:b,priority:1,namespace:"appad"}),a.l.addCueRange(c),a.Gb[b]=c)};
kP=function(a,b){if(!(b in a))return!1;var c=a[b];Array.isArray(c)||(c=[c]);c.forEach(function(d){var e=void 0===e?!1:e;if(!(e=nq(oq(d,Zja),d,e,"Active View 3rd Party Integration URL"))){var f=void 0===f?!1:f;e=nq(oq(d,$ja),d,f,"Google/YouTube Brand Lift URL")}if(!(f=e)){var h=void 0===h?!1:h;f=nq(oq(d,aka),d,h,"Nielsen OCR URL")}g.mo(d,void 0,f)});
return!0};
g.YO=function(a,b){b!=a.ca&&(2==b&&1==a.getPresentingPlayerType()&&(KO(a,-1),KO(a,5)),a.ca=b,a.i.O("appstatechange",b))};
KO=function(a,b){if(a.B){var c=a.B.getPlayerType();if(2==c&&!a.Vb()){a.Ec!=b&&(a.Ec=b,a.i.ka("onAdStateChange",b));return}if(2==c&&a.Vb()||5==c||6==c||7==c)if(-1==b||0==b||5==b)return}a.Kc!=b&&(a.Kc=b,a.i.ka("onStateChange",b))};
TN=function(a,b,c,d){d=void 0===d?0:d;var e=g.U(a);e&&(g.NO(a,e).Lh=!0);eja(a.Ga,b,c,d).then(function(){a.i.ka("onQueuedVideoLoaded")},function(){})};
$O=function(a,b,c,d){if(!f){var e=b+"_"+c.videoId+"_"+c.Bb;var f=a.Xa.get(e);if(!f)return null;a.Xa.remove(e);if(g.S(f.getPlayerState(),128))return f.dispose(),null}if(f==g.U(a,b))return f;if((f.getVideoData().oauthToken||c.oauthToken)&&f.getVideoData().oauthToken!=c.oauthToken)return null;d||LG(a,f);return f};
LG=function(a,b){var c=b.getPlayerType();b!=g.U(a,c)&&(1==b.getPlayerType()?(b.getVideoData().autonavState=a.l.getVideoData().autonavState,pn(a.l,a.Zb,a),c=a.l.getPlaybackRate(),a.l.dispose(),a.l=b,a.l.setPlaybackRate(c),on(b,a.Zb,a),gP(a)):(c=g.U(a,c))&&c.dispose(),a.B.getPlayerType()==b.getPlayerType()?JI(a,b):HO(a,b))};
LO=function(a,b){if(b&&a.g.Ae&&g.P(a.g.experiments,"html5_block_pip_with_events")&&a.getVideoData()&&!a.getVideoData().backgroundable&&a.u){var c=a.u.sa();if(c){jn(c);return}}c=a.J;c.u!=b&&(c.u=b,c.Gj())};
eO=function(a,b,c,d){wv("_start",a.K.timerName)||(mv("p",a.K.timerName),a.K.info("srt",0));var e=$O(a,c||a.B.getPlayerType(),b,!1);e&&g.rv("pfp",void 0,"prefetch_"+b.videoId);if(!e){e=g.U(a,c);if(!e)return!1;a.tb.stop();lP(a,4,c);e.Vf(b,(0,g.x)(a.md,a),d)}e==a.l&&(a.g.Gb=b.oauthToken);if(!CF(e))return!1;a.kb&&(e.J.l=!1,a.kb=!1);if(e==a.l)return g.YO(a,1),VO(a);KF(e);return!0};
mP=function(a,b,c){c=g.U(a,c);b&&c==a.l&&(c.getVideoData().lh=!0)};
nP=function(a,b,c){var d=g.U(a,c);if(d){lP(a,4,c);d.Vf(b,(0,g.x)(a.md,a));if(2==c&&a.l&&(c=a.l.B,c.qoe)){c=c.qoe;var e=b.clientPlaybackNonce,f=b.tn||"";b=b.breakType||0;g.jD(c,g.dD(c.provider),"ad_playback",[e,f,b])}d==a.l&&(g.YO(a,1),WO(a))}};
g.oP=function(a,b,c,d,e,f){if(!b&&!d)throw Error("Playback source is invalid");if(ut(a.g)||g.Ut(a.g))return c=c||{},c.lact=g.Ak(),c.vis=a.i.getVisibilityState(),a.i.ka("onPlayVideo",{videoId:b,watchEndpoint:f,sessionData:c,listId:d}),!1;c=a.K;c.g&&(f=c.g,f.i={},f.g={});c.i=!1;a.K.reset();b={video_id:b};e&&(b.autoplay="1");e&&(b.autonav="1");d?(b.list=d,a.loadPlaylist(b)):a.loadVideoByPlayerVars(b,1);return!0};
g.pP=function(a){if(a.i.isMutedByMutedAutoplay())return!1;if(3==a.getPresentingPlayerType())return!0;Qt(a.g)&&!a.da&&UO(a);return!(!a.C||!a.C.hasNext())};
Xja=function(a){if(a.C&&g.zt(a.g)&&g.pP(a)){var b=g.P(a.g.experiments,"html5_player_autonav_logging");a.nextVideo(!1,b);return!0}return!1};
iP=function(a,b){var c=g.Ka(b);if(c){var d=hP();d&&d.list&&c();a.ab=null}else a.ab=b};
hP=function(){var a=g.Ka("yt.www.watch.lists.getState");return a?a():null};
qP=function(a,b,c,d,e,f){b={id:b,namespace:"appapi"};"chapter"==f?(b.style=du.CHAPTER_MARKER,b.visible=!0):isNaN(e)||("ad"==f?b.style=du.AD_MARKER:(b.style=du.TIME_MARKER,b.color=e),b.visible=!0);wI(a,[new g.eu(1E3*c,1E3*d,b)],1);return!0};
wI=function(a,b,c){var d=g.U(a,c);d&&(d=d.V,d.i(),mA(d.g,b),d.o=NaN,d.i(),c&&a.getPresentingPlayerType()!=c||g.IO(a,"cuerangesadded",b))};
g.rP=function(a,b,c){var d=g.U(a,c);d&&(oA(d.V,b),c&&a.getPresentingPlayerType()!=c||g.IO(a,"cuerangesremoved",b))};
g.pL=function(a,b,c){var d=g.U(a,c);d&&(b=qA(d.V,b),c&&a.getPresentingPlayerType()!=c||g.IO(a,"cuerangesremoved",b))};
g.sP=function(a){var b=(0,g.M)(),c=a.getCurrentTime();a=a.getVideoData();c=1E3*(c-a.startSeconds);a.ra&&(c=0);return b-Math.max(c,0)};
YH=function(a,b,c){a.g.R&&(a.R=b,b.muted||ZO(a,!1),c&&a.g.ze&&!a.g.za&&(c={volume:Math.floor(b.volume),muted:b.muted},c.unstorable||(g.ho("yt-player-volume",c),g.ho("yt-player-volume",c,2592E3))),tP(a),c=g.$r&&a.u&&!a.u.nd(),!a.g.za||c)&&(b=g.Pb(b),a.g.ze||(b.unstorable=!0),a.i.ka("onVolumeChange",b))};
tP=function(a){var b=a.getVideoData();if(!b.Ri){b=a.g.za?1:ox(b);var c=a.u;yO(a,"web_player_mute_then_volume_killswitch")?(c.setVolume(a.R.volume*b/100),c.Ii(a.R.muted)):(c.Ii(a.R.muted),c.setVolume(a.R.volume*b/100))}};
ZO=function(a,b){b!=a.La&&(a.La=b,a.i.ka("onMutedAutoplayChange",b))};
uP=function(a){var b=g.hn(!yO(a,"web_player_fullscreen_shadow_killswitch"));return b&&(b==a.F.element||a.u&&b==a.u.sa())?b:null};
wP=function(a,b){var c=window.screen&&window.screen.orientation;if(g.P(a.g.experiments,"lock_fullscreen2")&&c&&c.lock&&(!g.$r||!vP))if(b){var d=0==c.type.indexOf("portrait"),e=a.F.getVideoAspectRatio(),f=d;1>e?f=!0:1<e&&(f=!1);if(!a.Wa||f!=d){if(c=c.lock(f?"portrait":"landscape"))c["catch"](g.La);a.Wa=!0}}else a.Wa&&(a.Wa=!1,c.unlock())};
MO=function(a,b){var c=!!b,d=!!a.J.l!=c,e=a.J;e.l!=b&&(e.l=b,e.Gj());yO(a,"html5_media_fullscreen")&&!c&&a.u&&uP(a)==a.u.sa()&&a.u.hm();a.F.resize();d&&a.K.tick("fsc");d&&(a.i.O("fullscreentoggled",c),d=QO(a),c={fullscreen:c,videoId:d.Ew||d.videoId,time:a.getCurrentTime()},a.i.getPlaylistId()&&(c.listId=a.i.getPlaylistId()),a.i.ka("onFullscreenChange",c))};
g.IO=function(a,b,c){a.i.O(b,c);var d=g.It(a.g)||g.Jt(a.g)||g.Vt(a.g);if(c&&d){switch(b){case "cuerangemarkersupdated":var e="onCueRangeMarkersUpdated";break;case "cuerangesadded":e="onCueRangesAdded";break;case "cuerangesremoved":e="onCueRangesRemoved"}e&&a.i.ka(e,c)}};
lP=function(a,b,c){Tn(a.za);a.za=0;var d=g.U(a,c);d&&1!=a.ca&&2!=a.ca&&(d==a.B&&YI(a.o,b),1==c&&(g.P(a.g.experiments,"html5_stop_video_in_cancel_playback")&&d.stopVideo(),fP(a)),d.Tf(),g.IO(a,"cuerangesremoved",pA(d.V)||[]),d.V.reset(),a.Ga&&d.isGapless()&&(TF(d,!0),UF(d,a.u)))};
xP=function(a,b,c,d,e,f){c=void 0===c?!0:c;f=void 0===f?!1:f;var h=g.U(a,e);if(!h||(2!=h.getPlayerType()||a.Vb(h)||f)&&!g.ex(h.getVideoData()))3==a.getPresentingPlayerType()?g.mI(a.o).Ag("control_seek",b,c):(h==a.l&&a.N&&!bP(a,b)&&a.setLoopRange(null),a.seekTo(b,c,d,e))};
yP=function(a,b,c,d){if(!a.kb){c&&(GO(a),FO(a));a.kb=!0;c=g.U(a);c.J.l=!0;c.Ya("reloading","reason."+b);var e=a.getVideoData(),f={};f.video_id=e.videoId;f.adformat=e.adFormat;e.ra?Pw(e)&&g.Ut(a.g)&&(f.live_utc_start=nG(c),f.resume="1"):(f.start=c.getCurrentTime(),f.resume="1");e.ue&&(f.vvt=e.ue);e.fg&&(f.vss_credentials_token=e.fg,f.vss_credentials_token_type=e.Fh);e.oauthToken&&(f.oauth_token=e.oauthToken);f.autoplay=1;f.reload_count=e.Dg+1;f.reload_reason=b;e.Al&&(f.unplugged_partner_opt_out=e.Al);
e.dd&&(f.ypc_is_premiere_trailer=e.dd);a.loadVideoByPlayerVars(f,void 0,d)}};
zP=function(a,b){QO(a).autonavState=b;g.ho("yt-player-autonavstate",b);a.i.O("autonavchange",b)};
AP=function(a){var b=a.getVideoData().Ri,c=a.g.Xa,d=a.u;b||c?d.Ss():(d.Ws(),YH(a,a.R))};
Sja=function(a,b){return g.P(a.g.experiments,"html5_enable_embedded_player_visibility_signals")&&a.g.i?new YG(b):null};
fP=function(a){(a=ZI(a.o))&&a.created&&a.destroy()};
yO=function(a,b){return g.P(a.g.experiments,b)};
BP=function(a,b){b.bounds=a.getBoundingClientRect();for(var c=g.p(["display","opacity","visibility","zIndex"]),d=c.next();!d.done;d=c.next())d=d.value,b[d]=g.th(a,d);b.hidden=!!a.hidden};
Rja=function(a){var b=a.g,c=document.requestStorageAccess&&document.hasStorageAccess;g.P(b.experiments,"embeds_enable_request_storage_access_safari_itp")&&g.Yt&&c&&b.i?Zl()||b.da?(g.Im("embedsStorageAccessNotChecked",{isIosWebview:Zl(),isPemPlayer:b.da}),a.Da=!1):document.hasStorageAccess().then(function(d){g.Im("embedsHasStorageAccessResult",{hasCookieAccess:d,resultedInError:!1});a.Da=!d},function(d){g.Im("embedsHasStorageAccessResult",{hasCookieAccess:!1,
resultedInError:!0});g.Ej(Error("Embeds ITP Error: "+d));a.Da=!1}):a.Da=!1};
CP=function(a,b){var c=void 0;if(g.It(a.g)&&g.el(b)&&g.dl(b)){var d=a.getVideoData().Qd();d&&(c={Authorization:"Bearer "+d})}g.mo(b,void 0,void 0,c)};
DP=function(a,b){b.forEach(function(c){CP(a,c)})};
fH=function(a){return a.zb?a.zb.jsUrl:a.Aa.assets&&a.Aa.assets.js?a.Aa.assets.js:""};
EP=function(a){a=(a=bI(a.o))?a.chrome:null;return a?(a=a.Yy())?a.J:null:null};
FP=function(a,b,c){for(var d in b)a[c+d]=b[d];return a};
g.GP=function(a,b){return a.replace(bka,function(c,d){try{var e=null!==b&&d in b?b[d]:void 0;if(null==e)return c;e=e.toString();if(""==e||!g.hc(g.ld(e)))return encodeURIComponent(e).replace(/%2C/g,",")}catch(f){}return c})};
g.HP=function(){g.xe.call(this);this.g=0;this.endTime=this.startTime=null};
cka=function(){if(!g.We)return!1;try{return new ActiveXObject("MSXML2.DOMDocument"),!0}catch(a){return!1}};
g.IP=function(a){if("undefined"!=typeof DOMParser){var b=new DOMParser;eh();a=Zc(a,null);return b.parseFromString(g.Vc(a),"application/xml")}if(dka){b=new ActiveXObject("MSXML2.DOMDocument");b.resolveExternals=!1;b.validateOnParse=!1;try{b.setProperty("ProhibitDTD",!0),b.setProperty("MaxXMLSize",2048),b.setProperty("MaxElementDepth",256)}catch(c){}b.loadXML(a);return b}throw Error("Your browser does not support loading xml documents");};
g.JP=function(a){g.A.call(this);this.i=a;this.g={}};
KP=function(a,b,c,d,e,f){if(Array.isArray(c))for(var h=0;h<c.length;h++)KP(a,b,c[h],d,e,f);else{b=ie(b,c,d||a.handleEvent,e,f||a.i||a);if(!b)return a;a.g[b.key]=b}return a};
g.LP=function(a){g.zb(a.g,function(b,c){this.g.hasOwnProperty(c)&&se(b)},a);
a.g={}};
aa=[];ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
fa=aaa(this);ia("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.g=e;ha(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d=0;return b});
ia("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ha(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(ea(this))}})}return a});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},eka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),MP;
if("function"==typeof Object.setPrototypeOf)MP=Object.setPrototypeOf;else{var NP;a:{var fka={a:!0},OP={};try{OP.__proto__=fka;NP=OP.a;break a}catch(a){}NP=!1}MP=NP?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=MP;
pa.prototype.F=function(a){this.i=a};
pa.prototype["return"]=function(a){this.l={"return":a};this.g=this.u};
pa.prototype.Ic=function(a){this.g=a};
ia("Reflect",function(a){return a?a:{}});
ia("Reflect.construct",function(){return eka});
ia("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
ia("Promise",function(a){function b(h){this.i=0;this.l=void 0;this.g=[];var l=this.o();try{h(l.resolve,l.reject)}catch(m){l.reject(m)}}
function c(){this.g=null}
function d(h){return h instanceof b?h:new b(function(l){l(h)})}
if(a)return a;c.prototype.i=function(h){if(null==this.g){this.g=[];var l=this;this.l(function(){l.u()})}this.g.push(h)};
var e=fa.setTimeout;c.prototype.l=function(h){e(h,0)};
c.prototype.u=function(){for(;this.g&&this.g.length;){var h=this.g;this.g=[];for(var l=0;l<h.length;++l){var m=h[l];h[l]=null;try{m()}catch(n){this.o(n)}}}this.g=null};
c.prototype.o=function(h){this.l(function(){throw h;})};
b.prototype.o=function(){function h(n){return function(q){m||(m=!0,n.call(l,q))}}
var l=this,m=!1;return{resolve:h(this.K),reject:h(this.u)}};
b.prototype.K=function(h){if(h===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(h instanceof b)this.N(h);else{a:switch(typeof h){case "object":var l=null!=h;break a;case "function":l=!0;break a;default:l=!1}l?this.J(h):this.B(h)}};
b.prototype.J=function(h){var l=void 0;try{l=h.then}catch(m){this.u(m);return}"function"==typeof l?this.R(l,h):this.B(h)};
b.prototype.u=function(h){this.C(2,h)};
b.prototype.B=function(h){this.C(1,h)};
b.prototype.C=function(h,l){if(0!=this.i)throw Error("Cannot settle("+h+", "+l+"): Promise already settled in state"+this.i);this.i=h;this.l=l;this.F()};
b.prototype.F=function(){if(null!=this.g){for(var h=0;h<this.g.length;++h)f.i(this.g[h]);this.g=null}};
var f=new c;b.prototype.N=function(h){var l=this.o();h.Go(l.resolve,l.reject)};
b.prototype.R=function(h,l){var m=this.o();try{h.call(l,m.resolve,m.reject)}catch(n){m.reject(n)}};
b.prototype.then=function(h,l){function m(u,w){return"function"==typeof u?function(B){try{n(u(B))}catch(z){q(z)}}:w}
var n,q,r=new b(function(u,w){n=u;q=w});
this.Go(m(h,n),m(l,q));return r};
b.prototype["catch"]=function(h){return this.then(void 0,h)};
b.prototype.Go=function(h,l){function m(){switch(n.i){case 1:h(n.l);break;case 2:l(n.l);break;default:throw Error("Unexpected state: "+n.i);}}
var n=this;null==this.g?f.i(m):this.g.push(m)};
b.resolve=d;b.reject=function(h){return new b(function(l,m){m(h)})};
b.race=function(h){return new b(function(l,m){for(var n=g.p(h),q=n.next();!q.done;q=n.next())d(q.value).Go(l,m)})};
b.all=function(h){var l=g.p(h),m=l.next();return m.done?d([]):new b(function(n,q){function r(B){return function(z){u[B]=z;w--;0==w&&n(u)}}
var u=[],w=0;do u.push(void 0),w++,d(m.value).Go(r(u.length-1),q),m=l.next();while(!m.done)})};
return b});
ia("Array.prototype.findIndex",function(a){return a?a:function(b,c){return Ca(this,b,c).sz}});
ia("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ia("Array.prototype.find",function(a){return a?a:function(b,c){return Ca(this,b,c).QD}});
ia("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Da(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),l=0;l<f&&h<e;)if(d[h++]!=b[l++])return!1;return l>=f}});
ia("String.prototype.repeat",function(a){return a?a:function(b){var c=Da(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});
ia("WeakMap",function(a){function b(m){this.g=(l+=Math.random()+1).toString();if(m){m=g.p(m);for(var n;!(n=m.next()).done;)n=n.value,this.set(n[0],n[1])}}
function c(){}
function d(m){var n=typeof m;return"object"===n&&null!==m||"function"===n}
function e(m){if(!Ea(m,h)){var n=new c;ha(m,h,{value:n})}}
function f(m){var n=Object[m];n&&(Object[m]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return n(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var m=Object.seal({}),n=Object.seal({}),q=new a([[m,2],[n,3]]);if(2!=q.get(m)||3!=q.get(n))return!1;q["delete"](m);q.set(n,4);return!q.has(m)&&4==q.get(n)}catch(r){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0;b.prototype.set=function(m,n){if(!d(m))throw Error("Invalid WeakMap key");e(m);if(!Ea(m,h))throw Error("WeakMap key fail: "+m);m[h][this.g]=n;return this};
b.prototype.get=function(m){return d(m)&&Ea(m,h)?m[h][this.g]:void 0};
b.prototype.has=function(m){return d(m)&&Ea(m,h)&&Ea(m[h],this.g)};
b.prototype["delete"]=function(m){return d(m)&&Ea(m,h)&&Ea(m[h],this.g)?delete m[h][this.g]:!1};
return b});
ia("Map",function(a){function b(){var l={};return l.previous=l.next=l.head=l}
function c(l,m){var n=l.g;return ka(function(){if(n){for(;n.head!=l.g;)n=n.previous;for(;n.next!=n.head;)return n=n.next,{done:!1,value:m(n)};n=null}return{done:!0,value:void 0}})}
function d(l,m){var n=m&&typeof m;"object"==n||"function"==n?f.has(m)?n=f.get(m):(n=""+ ++h,f.set(m,n)):n="p_"+m;var q=l.i[n];if(q&&Ea(l.i,n))for(var r=0;r<q.length;r++){var u=q[r];if(m!==m&&u.key!==u.key||m===u.key)return{id:n,list:q,index:r,Nd:u}}return{id:n,list:q,index:-1,Nd:void 0}}
function e(l){this.i={};this.g=b();this.size=0;if(l){l=g.p(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var l=Object.seal({x:4}),m=new a(g.p([[l,"s"]]));if("s"!=m.get(l)||1!=m.size||m.get({x:4})||m.set({x:4},"t")!=m||2!=m.size)return!1;var n=m.entries(),q=n.next();if(q.done||q.value[0]!=l||"s"!=q.value[1])return!1;q=n.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!n.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(l,m){l=0===l?0:l;var n=d(this,l);n.list||(n.list=this.i[n.id]=[]);n.Nd?n.Nd.value=m:(n.Nd={next:this.g,previous:this.g.previous,head:this.g,key:l,value:m},n.list.push(n.Nd),this.g.previous.next=n.Nd,this.g.previous=n.Nd,this.size++);return this};
e.prototype["delete"]=function(l){l=d(this,l);return l.Nd&&l.list?(l.list.splice(l.index,1),l.list.length||delete this.i[l.id],l.Nd.previous.next=l.Nd.next,l.Nd.next.previous=l.Nd.previous,l.Nd.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(l){return!!d(this,l).Nd};
e.prototype.get=function(l){return(l=d(this,l).Nd)&&l.value};
e.prototype.entries=function(){return c(this,function(l){return[l.key,l.value]})};
e.prototype.keys=function(){return c(this,function(l){return l.key})};
e.prototype.values=function(){return c(this,function(l){return l.value})};
e.prototype.forEach=function(l,m){for(var n=this.entries(),q;!(q=n.next()).done;)q=q.value,l.call(m,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
ia("Array.prototype.keys",function(a){return a?a:function(){return Fa(this,function(b){return b})}});
ia("Set",function(a){function b(c){this.g=new Map;if(c){c=g.p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(g.p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype["delete"]=function(c){c=this.g["delete"](c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ia("Array.prototype.values",function(a){return a?a:function(){return Fa(this,function(b,c){return c})}});
var gka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ea(d,e)&&(a[e]=d[e])}return a};
ia("Object.assign",function(a){return a||gka});
ia("Object.setPrototypeOf",function(a){return a||oa});
ia("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
ia("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var h=d[f];if(h===b||Object.is(h,b))return!0}return!1}});
ia("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Da(this,b,"includes").indexOf(b,c||0)}});
ia("Array.prototype.entries",function(a){return a?a:function(){return Fa(this,function(b,c){return[b,c]})}});
ia("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push([d,b[d]]);return c}});
ia("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(l){return l};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var h=0;!(f=b.next()).done;)e.push(c.call(d,f.value,h++))}else for(f=b.length,h=0;h<f;h++)e.push(c.call(d,b[h],h));return e}});
ia("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push(b[d]);return c}});
ia("String.prototype.padStart",function(a){return a?a:function(b,c){var d=Da(this,null,"padStart"),e=b-d.length,f=void 0!==c?String(c):" ";return(0<e&&f?f.repeat(Math.ceil(e/f.length)).substring(0,e):"")+d}});
ia("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
ia("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
ia("Int8Array.prototype.fill",Ga);ia("Uint8Array.prototype.fill",Ga);ia("Uint8ClampedArray.prototype.fill",Ga);ia("Int16Array.prototype.fill",Ga);ia("Uint16Array.prototype.fill",Ga);ia("Int32Array.prototype.fill",Ga);ia("Uint32Array.prototype.fill",Ga);ia("Float32Array.prototype.fill",Ga);ia("Float64Array.prototype.fill",Ga);ia("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
ia("Object.fromEntries",function(a){return a?a:function(b){var c={};if(!(Symbol.iterator in b))throw new TypeError(""+b+" is not iterable");b=b[Symbol.iterator].call(b);for(var d=b.next();!d.done;d=b.next()){d=d.value;if(Object(d)!==d)throw new TypeError("iterable for fromEntries should yield objects");c[d[0]]=d[1]}return c}});
ia("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
ia("WeakSet",function(a){function b(c){this.g=new WeakMap;if(c){c=g.p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}}
if(function(){if(!a||!Object.seal)return!1;try{var c=Object.seal({}),d=Object.seal({}),e=new a([c]);if(!e.has(c)||e.has(d))return!1;e["delete"](c);e.add(d);return!e.has(c)&&e.has(d)}catch(f){return!1}}())return a;
b.prototype.add=function(c){this.g.set(c,!0);return this};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype["delete"]=function(c){return this.g["delete"](c)};
return b});
ia("Number.parseInt",function(a){return a||parseInt});
ia("Array.prototype.copyWithin",function(a){function b(c){c=Number(c);return Infinity===c||-Infinity===c?c:c|0}
return a?a:function(c,d,e){var f=this.length;c=b(c);d=b(d);e=void 0===e?f:b(e);c=0>c?Math.max(f+c,0):Math.min(c,f);d=0>d?Math.max(f+d,0):Math.min(d,f);e=0>e?Math.max(f+e,0):Math.min(e,f);if(c<d)for(;d<e;)d in this?this[c++]=this[d++]:(delete this[c++],d++);else for(e=Math.min(e,f+d-c),c+=e-d;e>d;)--e in this?this[--c]=this[e]:delete this[--c];return this}});
ia("Int8Array.prototype.copyWithin",Ha);ia("Uint8Array.prototype.copyWithin",Ha);ia("Uint8ClampedArray.prototype.copyWithin",Ha);ia("Int16Array.prototype.copyWithin",Ha);ia("Uint16Array.prototype.copyWithin",Ha);ia("Int32Array.prototype.copyWithin",Ha);ia("Uint32Array.prototype.copyWithin",Ha);ia("Float32Array.prototype.copyWithin",Ha);ia("Float64Array.prototype.copyWithin",Ha);ia("Math.log2",function(a){return a?a:function(b){return Math.log(b)/Math.LN2}});
g.PP=g.PP||{};g.v=this||self;faa=/^[\w+/_-]+[=]{0,2}$/;cd=null;Ra="closure_uid_"+(1E9*Math.random()>>>0);gaa=0;g.E=Date.now;g.Va(g.Xa,Error);g.Xa.prototype.name="CustomError";var Me;g.Va(Ya,g.Xa);Ya.prototype.name="AssertionError";var db;db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
g.hka=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;
0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
g.y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
g.hf=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h="string"===typeof a?a.split(""):a,l=0;l<d;l++)if(l in h){var m=h[l];
b.call(c,m,l,a)&&(e[f++]=m)}return e};
g.Hc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));
return e};
g.ai=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
(0,g.y)(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
g.Wj=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
g.Fp=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;
return!0};var Rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");var ika={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var Ub;g.Yb.prototype.jh=!0;g.Yb.prototype.af=function(){return this.g};
var Xb={},Wb={};var Dba,Cba,Bba,Eba;Dba=RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");g.QP=RegExp("^[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");g.RP=RegExp("^[^\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
g.ui=RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]");Cba=/^http:\/\/.*/;Bba=/\s+/;Eba=/[\d\u06f0-\u06f9]/;cc.prototype.jh=!0;cc.prototype.af=function(){return this.i.toString()};
cc.prototype.Pt=!0;cc.prototype.g=function(){return 1};
var bc={},ac={};var ic,jc,kc,mc,nc,oc,raa;g.rc=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
ic=/&/g;jc=/</g;kc=/>/g;mc=/"/g;nc=/'/g;oc=/\x00/g;raa=/[\x00&<>"']/;g.wc.prototype.jh=!0;g.wc.prototype.af=function(){return this.i.toString()};
g.wc.prototype.Pt=!0;g.wc.prototype.g=function(){return 1};
var taa=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,saa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,zc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,vc={},Ac=new g.wc(uc,"about:invalid#zClosurez"),uc={};var vaa,Nc,Mc,waa;g.Ec.prototype.jh=!0;var Dc={};g.Ec.prototype.af=function(){return this.g};
g.Jc=g.Gc("");vaa=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/;Nc=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g");Mc=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g");waa=/\/\*/;a:{var SP=g.v.navigator;if(SP){var TP=SP.userAgent;if(TP){g.Oc=TP;break a}}g.Oc=""};Uc.prototype.Pt=!0;Uc.prototype.g=function(){return this.l};
Uc.prototype.jh=!0;Uc.prototype.af=function(){return this.i.toString()};
var UP=/^[a-zA-Z0-9-]+$/,jka={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},kka={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Tc={},VP=new Uc;VP.i=g.v.trustedTypes&&g.v.trustedTypes.emptyHTML?g.v.trustedTypes.emptyHTML:"";VP.l=0;var Yc=VP;var Baa=g.Za(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=g.Vc(Yc);return!b.parentElement});var Caa=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};var Gd,Eaa;g.rd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;Gd=/#|$/;Eaa=/[?&]($|#)/;g.k=Kd.prototype;g.k.gO=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.kk.set(this.Ry(c),[new Gaa(a)])};
g.k.Hy=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.Ry(b);return this.kk.has(b)?this.kk.get(b):void 0};
g.k.UF=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.Hy(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.kk.clear()};
g.k.Ry=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.t(Ld,Kd);Ld.prototype.l=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.UF(c);e&&(d=e.Qx);this.gO(d+a,c)};g.A.prototype.Oc=!1;g.A.prototype.ba=function(){return this.Oc};
g.A.prototype.dispose=function(){this.Oc||(this.Oc=!0,this.U())};
g.A.prototype.U=function(){if(this.Jj)for(;this.Jj.length;)this.Jj.shift()()};g.Pd.prototype.stopPropagation=function(){this.g=!0};
g.Pd.prototype.preventDefault=function(){this.defaultPrevented=!0};Sd[" "]=g.La;var qh,Hs,vP,lka,WP,mka,nt,XP;g.rh=g.Pc("Opera");g.We=g.Pc("Trident")||g.Pc("MSIE");g.Ls=g.Pc("Edge");g.Xt=g.Ls||g.We;qh=g.Pc("Gecko")&&!(g.qc(g.Oc,"WebKit")&&!g.Pc("Edge"))&&!(g.Pc("Trident")||g.Pc("MSIE"))&&!g.Pc("Edge");g.Ye=g.qc(g.Oc,"WebKit")&&!g.Pc("Edge");Hs=g.Pc("Macintosh");vP=g.Pc("Windows");g.ot=g.Pc("Android");lka=Qd();WP=g.Pc("iPad");mka=g.Pc("iPod");nt=g.Rd();g.pt=g.qc(g.Oc,"KaiOS");
a:{var YP="",ZP=function(){var a=g.Oc;if(qh)return/rv:([^\);]+)(\)|;)/.exec(a);if(g.Ls)return/Edge\/([\d\.]+)/.exec(a);if(g.We)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(g.Ye)return/WebKit\/(\S+)/.exec(a);if(g.rh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ZP&&(YP=ZP?ZP[1]:"");if(g.We){var $P=Vd();if(null!=$P&&$P>parseFloat(YP)){XP=String($P);break a}}XP=YP}var Wd=XP,Haa={},aQ;if(g.v.document&&g.We){var bQ=Vd();aQ=bQ?bQ:parseInt(Wd,10)||void 0}else aQ=void 0;var Iaa=aQ;var $d={};var qe=!g.We||g.Yd(9),nka=g.We&&!g.Xd("9");!g.Ye||g.Xd("528");qh&&g.Xd("1.9b")||g.We&&g.Xd("8")||g.rh&&g.Xd("9.5")||g.Ye&&g.Xd("528");qh&&!g.Xd("8")||g.We&&g.Xd("9");var Naa=function(){if(!g.v.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{g.v.addEventListener("test",g.La,b),g.v.removeEventListener("test",g.La,b)}catch(c){}return a}();var rK;rK=g.Ye?"webkitAnimationEnd":g.rh?"oanimationend":"animationend";g.Va(be,g.Pd);var oka={2:"touch",3:"pen",4:"mouse"};
be.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?qh&&(g.Td(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==
a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:oka[a.pointerType]||"";this.state=a.state;this.i=a;a.defaultPrevented&&
this.preventDefault()};
be.prototype.stopPropagation=function(){be.oc.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
be.prototype.preventDefault=function(){be.oc.preventDefault.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,nka)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ce="closure_listenable_"+(1E6*Math.random()|0),Kaa=0;fe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var h=he(a,b,d,e);-1<h?(b=a[h],c||(b.Fo=!1)):(b=new Laa(b,this.src,f,!!d,e),b.Fo=c,a.push(b));return b};
fe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=he(e,b,c,d);return-1<b?(ee(e[b]),g.ib(e,b),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
fe.prototype.pm=function(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=he(a,b,c,d));return-1<e?a[e]:null};var ne="closure_lm_"+(1E6*Math.random()|0),te={},pe=0,we="__closure_events_fn_"+(1E9*Math.random()>>>0);g.Va(g.xe,g.A);g.xe.prototype[ce]=!0;g.k=g.xe.prototype;g.k.addEventListener=function(a,b,c,d){je(this,a,b,c,d)};
g.k.removeEventListener=function(a,b,c,d){re(this,a,b,c,d)};
g.k.dispatchEvent=function(a){var b=this.ca;if(b){var c=[];for(var d=1;b;b=b.ca)c.push(b),++d}b=this.ma;d=a.type||a;if("string"===typeof a)a=new g.Pd(a,b);else if(a instanceof g.Pd)a.target=a.target||b;else{var e=a;a=new g.Pd(d,b);g.Sb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.g&&0<=f;f--){var h=a.currentTarget=c[f];e=ye(h,d,!0,a)&&e}a.g||(h=a.currentTarget=b,e=ye(h,d,!0,a)&&e,a.g||(e=ye(h,d,!1,a)&&e));if(c)for(f=0;!a.g&&f<c.length;f++)h=a.currentTarget=c[f],e=ye(h,d,!1,a)&&e;return e};
g.k.U=function(){g.xe.oc.U.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ee(d[e]);delete a.listeners[c];a.g--}}this.ca=null};
g.k.ia=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
g.k.ku=function(a,b,c,d){return this.i.add(String(a),b,!0,c,d)};
g.k.gb=function(a,b,c,d){this.i.remove(String(a),b,c,d)};
g.k.pm=function(a,b,c,d){return this.i.pm(String(a),b,c,d)};ze.prototype.get=function(){if(0<this.i){this.i--;var a=this.g;this.g=a.next;a.next=null}else a=this.l();return a};try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var Paa=!g.We||g.Yd(9),Qaa=!qh&&!g.We||g.We&&g.Yd(9)||qh&&g.Xd("1.9.1");g.We&&g.Xd("9");var Saa=g.We||g.rh||g.Ye;g.k=g.Fe.prototype;g.k.clone=function(){return new g.Fe(this.x,this.y)};
g.k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
g.k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
g.k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
g.k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};g.k=g.He.prototype;g.k.clone=function(){return new g.He(this.width,this.height)};
g.k.aspectRatio=function(){return this.width/this.height};
g.k.isEmpty=function(){return!Je(this)};
g.k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};var Se={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};g.k=Ke.prototype;g.k.sa=function(a){return g.Oe(this.g,a)};
g.k.getElementsByTagName=function(a,b){return(b||this.g).getElementsByTagName(String(a))};
g.k.Z=function(a){return g.Re(a,this.g)};
g.k.createElement=function(a){return Ze(this.g,a)};
g.k.appendChild=g.df;g.k.append=function(a,b){$e(g.Le(a),a,arguments,1)};
g.k.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
g.k.removeNode=g.gf;g.k.contains=g.kf;var sf;var Bf=new ze(function(){return new vf},function(a){a.reset()});
uf.prototype.add=function(a,b){var c=Bf.get();c.set(a,b);this.i?this.i.next=c:this.g=c;this.i=c};
uf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.i=null),a.next=null);return a};
vf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
vf.prototype.reset=function(){this.next=this.scope=this.g=null};var wf,xf=!1,yf=new uf;Ff.prototype.reset=function(){this.context=this.onRejected=this.l=this.g=null;this.i=!1};
var Gf=new ze(function(){return new Ff},function(a){a.reset()});
g.Ef.prototype.then=function(a,b,c){return Of(this,g.Pa(a)?a:null,g.Pa(b)?b:null,c)};
g.Ef.prototype.$goog_Thenable=!0;g.Ef.prototype.cancel=function(a){if(0==this.g){var b=new g.Uf(a);g.zf(function(){Qf(this,b)},this)}};
g.Ef.prototype.J=function(a){this.g=0;Df(this,2,a)};
g.Ef.prototype.K=function(a){this.g=0;Df(this,3,a)};
g.Ef.prototype.F=function(){for(var a;a=Rf(this);)Sf(this,a,this.g,this.C);this.B=!1};
var Wf=rf;g.Va(g.Uf,g.Xa);g.Uf.prototype.name="cancel";g.Va(g.Xf,g.xe);g.k=g.Xf.prototype;g.k.enabled=!1;g.k.Fa=null;g.k.setInterval=function(a){this.Hd=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
g.k.yd=function(){if(this.enabled){var a=(0,g.E)()-this.Qz;0<a&&a<.8*this.Hd?this.Fa=this.Nn.setTimeout(this.Ix,this.Hd-a):(this.Fa&&(this.Nn.clearTimeout(this.Fa),this.Fa=null),this.dispatchEvent("tick"),this.enabled&&(this.stop(),this.start()))}};
g.k.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.Nn.setTimeout(this.Ix,this.Hd),this.Qz=(0,g.E)())};
g.k.stop=function(){this.enabled=!1;this.Fa&&(this.Nn.clearTimeout(this.Fa),this.Fa=null)};
g.k.U=function(){g.Xf.oc.U.call(this);this.stop();delete this.Nn};ag.prototype.C=function(){var a=this.l.values();a=[].concat(g.ma(a)).filter(function(b){return b.kk.size});
a.length&&this.K.flush(a);Yaa(a);this.u=0;this.g.enabled&&this.g.stop()};
ag.prototype.i=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.l.has(a)||this.l.set(a,new Ld(a,c))};
ag.prototype.o=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.J.apply(this,[a,1].concat(g.ma(c)))};
ag.prototype.J=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=this.F.has(a)?void 0:this.l.get(a))&&e instanceof Ld&&(e.l(b,d),this.g.enabled||this.g.start(),this.u++,this.u>=this.B&&this.C())};var Dg=0,Eg=0;eg.prototype.clone=function(){return gg(this.i,this.o,this.l-this.o)};
eg.prototype.clear=function(){this.i=null;this.g=this.l=this.o=0;this.u=!1};
eg.prototype.reset=function(){this.g=this.o};
var fg=[];kg.prototype.reset=function(){this.g.reset();this.i=this.l=-1};pg.prototype.length=function(){return this.g.length};
pg.prototype.end=function(){var a=this.g;this.g=[];return a};var At,sx;g.Is=Qc();At=Qd()||g.Pc("iPod");sx=g.Pc("iPad");g.qt=g.Pc("Android")&&!(Rc()||Qc()||g.Pc("Opera")||g.Pc("Silk"));g.$r=Rc();g.Yt=g.Sc()&&!g.Rd();var tg={},xg=null;g.yg.prototype.reset=function(){this.l=[];this.g.end();this.i=0};var Ng="function"==typeof Uint8Array,Og=[];g.Mg.prototype.toString=function(){return this.Rd.toString()};
g.Mg.prototype.clone=function(){return new this.constructor(Zg(this.Rd))};g.cQ=document;g.il=window;g.k=$g.prototype;g.k.isEnabled=function(){return navigator.cookieEnabled};
g.k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.BT;d=c.dO||!1;var f=c.domain||void 0;var h=c.path||void 0;var l=c.Wz}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===l&&(l=-1);c=f?";domain="+f:"";h=h?";path="+h:"";d=d?";secure":"";l=0>l?"":0==l?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,g.E)()+1E3*l)).toUTCString();this.g.cookie=a+"="+b+c+h+l+d+(null!=e?";samesite="+
e:"")};
g.k.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=(0,g.rc)(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
g.k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Wz:0,path:b,domain:c});return d};
g.k.Ze=function(){return ah(this).keys};
g.k.ge=function(){return ah(this).values};
g.k.isEmpty=function(){return!this.g.cookie};
g.k.clear=function(){for(var a=ah(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
var zl=new $g("undefined"==typeof document?null:document);g.pka=g.Za(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
g.v.addEventListener("test",null,b)}catch(c){}return a});var dQ;
dQ={uE:["BC","AD"],tE:["Before Christ","Anno Domini"],FE:"JFMAMJJASOND".split(""),KE:"JFMAMJJASOND".split(""),Uw:"January February March April May June July August September October November December".split(" "),fx:"January February March April May June July August September October November December".split(" "),dx:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),gx:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),mx:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ix:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ex:"Sun Mon Tue Wed Thu Fri Sat".split(" "),hx:"Sun Mon Tue Wed Thu Fri Sat".split(" "),xR:"SMTWTFS".split(""),LE:"SMTWTFS".split(""),IE:["Q1","Q2","Q3","Q4"],GE:["1st quarter","2nd quarter","3rd quarter","4th quarter"],Gw:["AM","PM"],Yr:["EEEE, MMMM d, y","MMMM d, y","MMM d, y","M/d/yy"],lx:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],qE:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],ho:6,UE:[5,6],jo:5};g.eQ=dQ;g.eQ=dQ;g.k=g.dh.prototype;g.k.wy=g.eQ.ho;g.k.zy=g.eQ.jo;g.k.clone=function(){var a=new g.dh(this.date);a.wy=this.wy;a.zy=this.zy;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.add=function(a){if(a.g||a.months){var b=this.getMonth()+a.months+12*a.g,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),ch(this,a.getDate()))};
g.k.toString=function(){return[this.getFullYear(),g.kd(this.getMonth()+1,2),g.kd(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var eh=g.La;var fba={oP:"allow-forms",pP:"allow-modals",qP:"allow-orientation-lock",rP:"allow-pointer-lock",sP:"allow-popups",tP:"allow-popups-to-escape-sandbox",uP:"allow-presentation",vP:"allow-same-origin",wP:"allow-scripts",xP:"allow-top-navigation",yP:"allow-top-navigation-by-user-activation"},hba=g.Za(function(){return gba()});g.k=g.ih.prototype;g.k.od=function(){return this.right-this.left};
g.k.getHeight=function(){return this.bottom-this.top};
g.k.clone=function(){return new g.ih(this.top,this.right,this.bottom,this.left)};
g.k.contains=function(a){return this&&a?a instanceof g.ih?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
g.k.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
g.k.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
g.k.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};
g.k.scale=function(a,b){var c="number"===typeof b?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};g.k=g.jh.prototype;g.k.clone=function(){return new g.jh(this.left,this.top,this.width,this.height)};
g.k.contains=function(a){return a instanceof g.Fe?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
g.k.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
g.k.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
g.k.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
g.k.scale=function(a,b){var c="number"===typeof b?b:a;this.left*=a;this.width*=a;this.top*=c;this.height*=c;return this};var lh={};g.t(mh,jba);mh.prototype.toString=function(){return this.g};new mh("about:blank",lh);new mh("about:invalid#zTSz",lh);var ph={};g.fQ=!!window.google_async_iframe_id;g.gQ=g.fQ&&window.parent||window;var dca=(new Date).getTime();g.Va(Nh,g.Mh);Nh.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.o=this.l=0};
Nh.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.B,f=this.l;d<b;){if(0==f)for(;d<=c;)Oh(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Oh(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Oh(this,e);f=0;break}}this.l=f;this.o+=b}};
Nh.prototype.digest=function(){var a=[],b=8*this.o;56>this.l?this.update(this.u,56-this.l):this.update(this.u,this.i-(this.l-56));for(var c=this.i-1;56<=c;c--)this.B[c]=b&255,b/=256;Oh(this,this.B);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};g.Va(Ph,g.Mg);g.Va(Qh,g.Mg);var nba=[1];g.Va(Rh,g.Mg);g.Va(Sh,g.Mg);g.Va(Th,g.Mg);g.Va(Uh,g.Mg);g.Va(Vh,g.Mg);g.Va(Xh,g.Mg);g.Va(Zh,g.Mg);var qba=[3,6,4],rba=[[1,2]],sba=[1],Wh=[[1,2,3]],Yh=[[1,2,3]];$h.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.g=-1)};
$h.prototype.get=function(a){return!!this.i[a]};g.Va(g.ci,g.A);g.k=g.ci.prototype;g.k.start=function(){this.stop();this.o=!1;var a=di(this),b=ei(this);a&&!b&&this.i.mozRequestAnimationFrame?(this.g=je(this.i,"MozBeforePaint",this.l),this.i.mozRequestAnimationFrame(null),this.o=!0):this.g=a&&b?a.call(this.i,this.l):this.i.setTimeout(maa(this.l),20)};
g.k.fb=function(){this.isActive()||this.start()};
g.k.stop=function(){if(this.isActive()){var a=di(this),b=ei(this);a&&!b&&this.i.mozRequestAnimationFrame?se(this.g):a&&b?b.call(this.i,this.g):this.i.clearTimeout(this.g)}this.g=null};
g.k.Af=function(){this.isActive()&&(this.stop(),this.bz())};
g.k.isActive=function(){return null!=this.g};
g.k.bz=function(){this.o&&this.g&&se(this.g);this.g=null;this.B.call(this.u,(0,g.E)())};
g.k.U=function(){this.stop();g.ci.oc.U.call(this)};g.Va(g.G,g.A);g.k=g.G.prototype;g.k.tm=0;g.k.U=function(){g.G.oc.U.call(this);this.stop();delete this.g;delete this.i};
g.k.start=function(a){this.stop();this.tm=g.Yf(this.l,void 0!==a?a:this.Hd)};
g.k.fb=function(a){this.isActive()||this.start(a)};
g.k.stop=function(){this.isActive()&&g.v.clearTimeout(this.tm);this.tm=0};
g.k.Af=function(){this.isActive()&&g.fi(this)};
g.k.isActive=function(){return 0!=this.tm};
g.k.cz=function(){this.tm=0;this.g&&this.g.call(this.i)};var hi="StopIteration"in g.v?g.v.StopIteration:{message:"StopIteration",stack:""};gi.prototype.next=function(){throw hi;};
gi.prototype.Og=function(){return this};g.k=g.ki.prototype;g.k.ge=function(){mi(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.i[this.g[b]]);return a};
g.k.Ze=function(){mi(this);return this.g.concat()};
g.k.isEmpty=function(){return 0==this.l};
g.k.clear=function(){this.i={};this.Mi=this.l=this.g.length=0};
g.k.remove=function(a){return li(this.i,a)?(delete this.i[a],this.l--,this.Mi++,this.g.length>2*this.l&&mi(this),!0):!1};
g.k.get=function(a,b){return li(this.i,a)?this.i[a]:b};
g.k.set=function(a,b){li(this.i,a)||(this.l++,this.g.push(a),this.Mi++);this.i[a]=b};
g.k.forEach=function(a,b){for(var c=this.Ze(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
g.k.clone=function(){return new g.ki(this)};
g.k.Og=function(a){mi(this);var b=0,c=this.Mi,d=this,e=new gi;e.next=function(){if(c!=d.Mi)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)throw hi;var f=d.g[b++];return a?f:d.i[f]};
return e};var zi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gba=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;g.Ai.prototype.clone=function(){return new g.Ai(this.g,this.u,this.l,this.B,this.o,this.C,this.i,this.F)};g.Ci.prototype.i=0;g.Ci.prototype.reset=function(){this.g=this.l=this.o;this.i=0};
g.Ci.prototype.getValue=function(){return this.l};var hQ=new WeakMap;(function(){if(vP){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(g.Oc))?a[1]:"0"}return Hs?(a=/10[_.][0-9_.]+/,(a=a.exec(g.Oc))?a[0].replace(/_/g,"."):"10"):g.ot?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(g.Oc))?a[1]:""):lka||WP||mka?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(g.Oc))?a[1].replace(/_/g,"."):""):""})();var Iba=function(){if(g.Is)return Ei(/Firefox\/([0-9.]+)/);if(g.We||g.Ls||g.rh)return Wd;if(g.$r)return g.Rd()?Ei(/CriOS\/([0-9.]+)/):Ei(/Chrome\/([0-9.]+)/);if(g.Yt&&!g.Rd())return Ei(/Version\/([0-9.]+)/);if(At||sx){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(g.Oc);if(a)return a[1]+"."+a[2]}else if(g.qt)return(a=Ei(/Android\s+([0-9.]+)/))?a:Ei(/Version\/([0-9.]+)/);return""}();g.Va(g.Gi,g.A);g.k=g.Gi.prototype;g.k.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
g.k.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.g;if(a=g.bb(a,function(e){return d[e+1]==b&&d[e+2]==c}))return this.mj(a)}return!1};
g.k.mj=function(a){var b=this.g[a];if(b){var c=this.i[b];0!=this.o?(this.l.push(a),this.g[a+1]=g.La):(c&&g.jb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
g.k.O=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var h=c[e];Jba(this.g[h+1],this.g[h+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.g[h+1].apply(this.g[h+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.mj(c)}}return 0!=e}return!1};
g.k.clear=function(a){if(a){var b=this.i[a];b&&((0,g.y)(b,this.mj,this),delete this.i[a])}else this.g.length=0,this.i={}};
g.k.U=function(){g.Gi.oc.U.call(this);this.clear();this.l.length=0};g.Hi.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,g.xi(b))};
g.Hi.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
g.Hi.prototype.remove=function(a){this.g.remove(a)};g.Va(Ii,g.Hi);Ii.prototype.set=function(a,b){Ii.oc.set.call(this,a,Ki(b))};
Ii.prototype.i=function(a){a=Ii.oc.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ii.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};g.Va(Li,Ii);Li.prototype.set=function(a,b,c){if(b=Ki(b)){if(c){if(c<(0,g.E)()){Li.prototype.remove.call(this,a);return}b.expiration=c}b.creation=(0,g.E)()}Li.oc.set.call(this,a,b)};
Li.prototype.i=function(a,b){var c=Li.oc.i.call(this,a);if(c)if(!b&&g.Mi(c))Li.prototype.remove.call(this,a);else return c};g.Va(g.Ni,Li);g.Va(Oi,Kba);Oi.prototype.clear=function(){var a=Aba(this.Og(!0)),b=this;(0,g.y)(a,function(c){b.remove(c)})};g.Va(Pi,Oi);g.k=Pi.prototype;g.k.isAvailable=function(){if(!this.g)return!1;try{return this.g.setItem("__sak","1"),this.g.removeItem("__sak"),!0}catch(a){return!1}};
g.k.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
g.k.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.k.remove=function(a){this.g.removeItem(a)};
g.k.Og=function(a){var b=0,c=this.g,d=new gi;d.next=function(){if(b>=c.length)throw hi;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.k.clear=function(){this.g.clear()};
g.k.key=function(a){return this.g.key(a)};g.Va(Qi,Pi);g.Va(Ri,Pi);g.Va(Ti,Oi);var Lba={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Si=null;g.k=Ti.prototype;g.k.isAvailable=function(){return!!this.g};
g.k.set=function(a,b){this.g.setAttribute(Ui(a),b);Vi(this)};
g.k.get=function(a){a=this.g.getAttribute(Ui(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
g.k.remove=function(a){this.g.removeAttribute(Ui(a));Vi(this)};
g.k.Og=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new gi;d.next=function(){if(b>=c.length)throw hi;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
g.k.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Vi(this)};g.Va(Wi,Oi);Wi.prototype.set=function(a,b){this.i.set(this.g+a,b)};
Wi.prototype.get=function(a){return this.i.get(this.g+a)};
Wi.prototype.remove=function(a){this.i.remove(this.g+a)};
Wi.prototype.Og=function(a){var b=this.i.Og(!0),c=this,d=new gi;d.next=function(){for(var e=b.next();e.substr(0,c.g.length)!=c.g;)e=b.next();return a?e.substr(c.g.length):c.i.get(e)};
return d};Yi.prototype.getValue=function(){return this.i};
Yi.prototype.clone=function(){return new Yi(this.g,this.i)};g.k=Zi.prototype;g.k.remove=function(){var a=this.g,b=a.length,c=a[0];if(!(0>=b)){if(1==b)g.gb(a);else{a[0]=a.pop();a=0;b=this.g;for(var d=b.length,e=b[a];a<d>>1;){var f=2*a+1,h=2*a+2;f=h<d&&b[h].g<b[f].g?h:f;if(b[f].g>e.g)break;b[a]=b[f];a=f}b[a]=e}return c.getValue()}};
g.k.ge=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].getValue());return b};
g.k.Ze=function(){for(var a=this.g,b=[],c=a.length,d=0;d<c;d++)b.push(a[d].g);return b};
g.k.clone=function(){return new Zi(this)};
g.k.isEmpty=function(){return g.fb(this.g)};
g.k.clear=function(){g.gb(this.g)};g.Va(aj,Zi);g.qka=g.Za(function(){if(g.We)return g.Xd("10.0");var a=g.bf("DIV"),b=g.Ye?"-webkit":qh?"-moz":g.We?"-ms":g.rh?"-o":null,c={transition:"opacity 1s linear"};b&&(c[b+"-transition"]="opacity 1s linear");b={style:c};if(!UP.test("div"))throw Error("");if("DIV"in kka)throw Error("");c=null;var d="";if(b)for(h in b)if(Object.prototype.hasOwnProperty.call(b,h)){if(!UP.test(h))throw Error("");var e=b[h];if(null!=e){var f=h;if(e instanceof g.Yb)e=g.Zb(e);else if("style"==f.toLowerCase()){if(!g.Qa(e))throw Error("");
e instanceof g.Ec||(e=g.Kc(e));e=g.Fc(e)}else{if(/^on/i.test(f))throw Error("");if(f.toLowerCase()in jka)if(e instanceof cc)e=dc(e).toString();else if(e instanceof g.wc)e=g.xc(e);else if("string"===typeof e)e=g.Bc(e).af();else throw Error("");}e.jh&&(e=e.af());f=f+'="'+pc(String(e))+'"';d+=" "+f}}var h="<div"+d;d=void 0;null==d?d=[]:Array.isArray(d)||(d=[d]);!0===ika.div?h+=">":(c=Aaa(d),h+=">"+g.Vc(c).toString()+"</div>",c=c.g());(b=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(b)?c=0:c=null);b=Zc(h,c);g.ad(a,
b);return""!=g.sh(a.firstChild,"transition")});g.bj.prototype.toString=function(){var a=[],b=this.u;b&&a.push(ij(b,iQ,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.F)&&a.push(ij(b,iQ,!0),"@"),a.push(gd(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.o,null!=c&&a.push(":",String(c));if(c=this.i)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(ij(c,"/"==c.charAt(0)?rka:ska,!0));(c=this.l.toString())&&a.push("?",c);(c=this.B)&&a.push("#",ij(c,tka));return a.join("")};
g.bj.prototype.resolve=function(a){var b=this.clone(),c=!!a.u;c?g.cj(b,a.u):c=!!a.F;c?b.F=a.F:c=!!a.g;c?g.dj(b,a.g):c=null!=a.o;var d=a.i;if(c)g.ej(b,a.o);else if(c=!!a.i){if("/"!=d.charAt(0))if(this.g&&!this.i)d="/"+d;else{var e=b.i.lastIndexOf("/");-1!=e&&(d=b.i.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=g.fc(e,"/");e=e.split("/");for(var f=[],h=0;h<e.length;){var l=e[h++];"."==l?d&&h==e.length&&f.push(""):".."==l?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?b.i=d:c=""!==a.l.toString();c?fj(b,a.l.clone()):c=!!a.B;c&&(b.B=a.B);return b};
g.bj.prototype.clone=function(){return new g.bj(this)};
var iQ=/[#\/\?@]/g,ska=/[#\?:]/g,rka=/[#\?]/g,Nba=/[#\?@]/g,tka=/#/g;g.k=hj.prototype;g.k.add=function(a,b){kj(this);this.l=null;a=lj(this,a);var c=this.g.get(a);c||this.g.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
g.k.remove=function(a){kj(this);a=lj(this,a);return li(this.g.i,a)?(this.l=null,this.i=this.i-this.g.get(a).length,this.g.remove(a)):!1};
g.k.clear=function(){this.g=this.l=null;this.i=0};
g.k.isEmpty=function(){kj(this);return 0==this.i};
g.k.forEach=function(a,b){kj(this);this.g.forEach(function(c,d){(0,g.y)(c,function(e){a.call(b,e,d,this)},this)},this)};
g.k.Ze=function(){kj(this);for(var a=this.g.ge(),b=this.g.Ze(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.k.ge=function(a){kj(this);var b=[];if("string"===typeof a)mj(this,a)&&(b=g.lb(b,this.g.get(lj(this,a))));else{a=this.g.ge();for(var c=0;c<a.length;c++)b=g.lb(b,a[c])}return b};
g.k.set=function(a,b){kj(this);this.l=null;a=lj(this,a);mj(this,a)&&(this.i=this.i-this.g.get(a).length);this.g.set(a,[b]);this.i=this.i+1;return this};
g.k.get=function(a,b){if(!a)return b;var c=this.ge(a);return 0<c.length?String(c[0]):b};
g.k.toString=function(){if(this.l)return this.l;if(!this.g)return"";for(var a=[],b=this.g.Ze(),c=0;c<b.length;c++){var d=b[c],e=gd(d);d=this.ge(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+gd(d[f]));a.push(h)}}return this.l=a.join("&")};
g.k.clone=function(){var a=new hj;a.l=this.l;this.g&&(a.g=this.g.clone(),a.i=this.i);return a};g.Va(oj,g.Mg);g.Va(pj,g.Mg);var Pba=[2,13,14];var qj=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};g.Ia("yt.config_",qj,void 0);var Bj={};var Cj=[];var uka,Jj,Lj;uka=g.v.ytPubsubPubsubInstance||new g.Gi;Jj=g.v.ytPubsubPubsubSubscribedKeys||{};Lj=g.v.ytPubsubPubsubTopicToKeys||{};g.Kj=g.v.ytPubsubPubsubIsSynchronous||{};g.Gi.prototype.subscribe=g.Gi.prototype.subscribe;g.Gi.prototype.unsubscribeByKey=g.Gi.prototype.mj;g.Gi.prototype.publish=g.Gi.prototype.O;g.Gi.prototype.clear=g.Gi.prototype.clear;g.Ia("ytPubsubPubsubInstance",uka,void 0);g.Ia("ytPubsubPubsubTopicToKeys",Lj,void 0);g.Ia("ytPubsubPubsubIsSynchronous",g.Kj,void 0);
g.Ia("ytPubsubPubsubSubscribedKeys",Jj,void 0);var Tba=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Uba=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,Tj={};var vka={SR:"PLAYBACK_TYPE_UNKNOWN",MR:"PLAYBACK_TYPE_APPLICATION",LR:"PLAYBACK_TYPE_ADS",QR:"PLAYBACK_TYPE_REMOTE",RR:"PLAYBACK_TYPE_SECONDARY_CAMERA",PR:"PLAYBACK_TYPE_PREROLL_INTERSTITIAL",OR:"PLAYBACK_TYPE_POSTROLL_INTERSTITIAL",NR:"PLAYBACK_TYPE_MIDROLL_INTERSTITIAL"};var wka=0,Uj=g.Ye?"webkit":qh?"moz":g.We?"ms":g.rh?"o":"",xka=g.Ka("ytDomDomGetNextId")||function(){return++wka};
g.Ia("ytDomDomGetNextId",xka,void 0);var Xba={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};Yj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Yj.prototype.Bz=function(){return this.event?!1===this.event.returnValue:!1};
Yj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Yj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ak=g.v.ytEventsEventsListeners||{};g.Ia("ytEventsEventsListeners",ak,void 0);var bk=g.v.ytEventsEventsCounter||{count:0};g.Ia("ytEventsEventsCounter",bk,void 0);var yka=g.Za(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a}),ck=g.Za(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});var Zs=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};g.Va(ok,g.A);ok.prototype.N=function(a){void 0===a.g&&Zj(a);var b=a.g;void 0===a.i&&Zj(a);this.g=new g.Fe(b,a.i)};
ok.prototype.Zh=function(){return this.g||new g.Fe};
ok.prototype.C=function(){if(this.g){var a=Zs();if(0!=this.o){var b=this.B,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.J();this.u=d}this.o=a;this.B=this.g;this.l=(this.l+1)%4}};
ok.prototype.U=function(){window.clearInterval(this.K);g.ek(this.F)};g.t(sk,Zba);sk.prototype.start=function(){var a=g.Ka("yt.scheduler.instance.start");a&&a()};
sk.prototype.pause=function(){var a=g.Ka("yt.scheduler.instance.pause");a&&a()};
g.Ma(sk);sk.getInstance();var zk={};var jQ;jQ=window;g.M=jQ.ytcsi&&jQ.ytcsi.now?jQ.ytcsi.now:jQ.performance&&jQ.performance.timing&&jQ.performance.now&&jQ.performance.timing.navigationStart?function(){return jQ.performance.timing.navigationStart+jQ.performance.now()}:function(){return(new Date).getTime()};var $ba=wj("initial_gel_batch_timeout",1E3),Pk=Math.pow(2,16)-1,Qk=null,Ok=0,Dk=void 0,Bk=0,Ck=0,Sk=0,Jk=!0,Gk=g.v.ytLoggingTransportLogPayloadsQueue_||{};g.Ia("ytLoggingTransportLogPayloadsQueue_",Gk,void 0);var Fk=g.v.ytLoggingTransportGELQueue_||new Map;g.Ia("ytLoggingTransportGELQueue_",Fk,void 0);var Mk=g.v.ytLoggingTransportTokensToCttTargetIds_||{};g.Ia("ytLoggingTransportTokensToCttTargetIds_",Mk,void 0);var Rk=g.v.ytLoggingGelSequenceIdObj_||{};g.Ia("ytLoggingGelSequenceIdObj_",Rk,void 0);g.fl=new function(){var a=window.document;this.g=window;this.i=a};
g.Ia("yt.ads_.signals_.getAdSignalsString",function(a){return g.Wk(g.hl(a))},void 0);(0,g.E)();var jl="XMLHttpRequest"in g.v?function(){return new XMLHttpRequest}:null;var ml,gca,tl;ml={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};gca="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ");
tl=!1;g.kQ=nl;Dl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,(0,g.E)()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(g.xi(b))}catch(f){return}else e=escape(b);g.Al(a,e,c,this.i)};
Dl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=g.Bl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Dl.prototype.remove=function(a){this.g&&this.g.remove(a);g.Cl(a,"/",this.i)};var El;var pE={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Yl=At||sx;g.t(am,Error);g.k=dm.prototype;g.k.add=function(a,b,c){return gm(this,[a],"readwrite",function(d){return im(d,a).add(b,c)})};
g.k.clear=function(a){return gm(this,[a],"readwrite",function(b){return im(b,a).clear()})};
g.k.close=function(){this.g.close()};
g.k.count=function(a,b){return gm(this,[a],"readonly",function(c){return im(c,a).count(b)})};
g.k["delete"]=function(a,b){return gm(this,[a],"readwrite",function(c){return im(c,a)["delete"](b)})};
g.k.get=function(a,b){return gm(this,[a],"readwrite",function(c){return im(c,a).get(b)})};
g.k=em.prototype;g.k.add=function(a,b){var c=b?this.g.add(a,b):this.g.add(a);return cm(c)};
g.k.clear=function(){return cm(this.g.clear()).then(function(){})};
g.k.count=function(a){a=a?this.g.count(a):this.g.count();return cm(a)};
g.k["delete"]=function(a){return cm(this.g["delete"](a))};
g.k.get=function(a){return cm(this.g.get(a))};
g.k.index=function(a){return new km(this.g.index(a))};
g.k.getName=function(){return this.g.name};
jm.prototype.abort=function(){this.g.abort();return this.done};
km.prototype.count=function(a){a=a?this.g.count(a):this.g.count();return cm(a)};
km.prototype.get=function(a){return cm(this.g.get(a))};
lm.prototype["delete"]=function(){return cm(this.g["delete"]()).then(function(){})};
lm.prototype.getValue=function(){return this.g.value};
lm.prototype.update=function(a){return cm(this.g.update(a))};var om,pm,xca=["getAll","getAllKeys","getKey","openKeyCursor"],yca=["getAll","getAllKeys","getKey","openKeyCursor"];var qm;var tm;var zka=wj("network_polling_interval",3E4);xm.prototype.l=function(){var a=this;this.u=qk(function(){window.navigator.onLine?(!1===a.g&&g.L(Error("NetworkStatusManager missed online event.")),a.g=!0,a.i&&a.i()):(!0===a.g&&g.L(Error("NetworkStatusManager missed offline event.")),a.g=!1,a.o&&a.o());a.l()},zka)};var Lca=wj("networkless_throttle_timeout")||100,Nca=wj("networkless_retry_attempts")||1,Fm=0;g.t(g.Gm,Error);g.Hm.prototype.isReady=function(){!this.me&&wl()&&(this.me=g.Lk());return!!this.me};var Rca=[{Yz:function(a){return"Cannot read property '"+a.key+"'"},
cv:{TypeError:[{Rf:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{Rf:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{Rf:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{Rf:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{Rf:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{Rf:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Yz:function(a){return"Cannot call '"+a.key+"'"},
cv:{TypeError:[{Rf:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{Rf:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{Rf:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{Rf:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{Rf:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var Jm;var Om=new Set,Mm=0,Sca=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];Pm.prototype.initialize=function(a,b,c,d,e,f){var h=this;f=void 0===f?!1:f;b?(this.uc=!0,g.Rj(b,function(){h.uc=!1;if(window.botguard)Qm(h,c,d,f);else{var l=Sj(b),m=document.getElementById(l);m&&(Qj(l),m.parentNode.removeChild(m));g.Lm(new g.Gm("Unable to load Botguard","from "+b))}},e)):a&&(eval(a),window.botguard?Qm(this,c,d,f):g.Lm(Error("Unable to load Botguard from JS")))};
Pm.prototype.Dc=function(){return!!this.g};
Pm.prototype.dispose=function(){this.g=null};var Uca=[],Sm=!1;g.t(g.Um,g.Xa);Xm.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.g),Cf(a)?a:g.Zm(a)):2===this.i&&b?(a=b.call(c,this.g),Cf(a)?a:g.Ym(a)):this};
Xm.prototype.getValue=function(){return this.g};
Xm.prototype.$goog_Thenable=!0;var $m=g.Ka("ytglobal.prefsUserPrefsPrefs_")||{};g.Ia("ytglobal.prefsUserPrefsPrefs_",$m,void 0);g.k=g.an.prototype;g.k.get=function(a,b){en(a);dn(a);var c=void 0!==$m[a]?$m[a].toString():null;return null!=c?c:b?b:""};
g.k.set=function(a,b){en(a);dn(a);if(null==b)throw Error("ExpectedNotNull");$m[a]=b.toString()};
g.k.remove=function(a){en(a);dn(a);delete $m[a]};
g.k.save=function(){g.Al(this.g,this.dump(),63072E3)};
g.k.clear=function(){g.Nb($m)};
g.k.dump=function(){var a=[],b;for(b in $m)a.push(b+"="+encodeURIComponent(String($m[b])));return a.join("&")};
g.Ma(g.an);var Wca=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Yca=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];g.t(g.ln,g.A);g.ln.prototype.I=function(a,b,c,d,e){c=g.Dj((0,g.x)(c,d||this.da));c={target:a,name:b,Va:c};var f;e&&yka()&&(f={passive:!0});a.addEventListener(b,c.Va,f);this.B.push(c);return c};
g.ln.prototype.gb=function(a){for(var b=0;b<this.B.length;b++)if(this.B[b]==a){this.B.splice(b,1);a.target.removeEventListener(a.name,a.Va);break}};
g.ln.prototype.U=function(){g.nn(this);g.A.prototype.U.call(this)};g.Va(g.N,g.A);g.N.prototype.subscribe=function(a,b,c){return this.ba()?0:this.Aa.subscribe(a,b,c)};
g.N.prototype.unsubscribe=function(a,b,c){return this.ba()?!1:this.Aa.unsubscribe(a,b,c)};
g.N.prototype.wi=function(a){return this.ba()?!1:this.Aa.mj(a)};
g.N.prototype.O=function(a,b){return this.ba()?!1:this.Aa.O.apply(this.Aa,arguments)};g.t(g.rn,g.N);g.k=g.rn.prototype;g.k.cancel=function(){this.o&&(this.o=!1,this.O("dragend",0,0,null));this.i&&(this.i=!1,this.O("hoverend",0,0,null),g.nn(this.g),qn(this))};
g.k.WA=function(a){g.nn(this.g);sn(this,tn("move"),this.UA);sn(this,tn("out"),this.VA);sn(this,"touchstart",this.mw);this.l&&sn(this,tn("down"),this.Ou);var b=g.fk(a);a=ik(a);this.i=!0;this.O("hoverstart",a.x,a.y,b);this.O("hovermove",a.x,a.y,b)};
g.k.UA=function(a){var b=g.fk(a);a=ik(a);if(this.u){var c=this.u;this.u=null;if(hk(c)==b&&Ge(ik(c),a))return}this.O("hovermove",a.x,a.y,b)};
g.k.VA=function(a){var b=ik(a),c=hk(a);try{if(c&&g.kf(this.B,c)){this.u=a;this.O("hovermove",b.x,b.y,c);return}}catch(d){}g.nn(this.g);qn(this);this.i=!1;this.O("hoverend",b.x,b.y,c)};
g.k.FJ=function(a){this.WA(a);this.Ou(a)};
g.k.Ou=function(a){if("number"!==typeof a.button||0==a.button){g.nn(this.g);this.g.I(document,tn("move"),this.EJ);this.g.I(document,tn("up"),this.JJ);var b=g.fk(a);if(g.Ye)sn(this,"dragstart",this.DF);else if(g.jk(a),(g.Xt||qh)&&b)a:{for(var c=b;c;){if(of(c)||"-1"===c.getAttribute("tabindex")){c.focus();break a}c=c.parentElement}document.activeElement.blur()}this.o=!0;a=ik(a);this.O("dragstart",a.x,a.y,b);this.O("dragmove",a.x,a.y,b)}};
g.k.DF=function(a){g.jk(a)};
g.k.EJ=function(a){var b=g.fk(a);b==document&&(b=null);a=ik(a);this.O("hovermove",a.x,a.y,b);this.O("dragmove",a.x,a.y,b)};
g.k.JJ=function(a){g.nn(this.g);this.o=!1;var b=gk(a),c=g.fk(a);a=ik(a);b&&g.kf(this.B,b)?(sn(this,tn("move"),this.UA),sn(this,tn("out"),this.VA),sn(this,tn("down"),this.Ou),sn(this,"touchstart",this.mw),this.O("dragend",a.x,a.y,c)):(qn(this),this.i=!1,this.O("dragend",a.x,a.y,c),this.O("hoverend",a.x,a.y,c))};
g.k.mw=function(a){var b=a.changedTouches[0];b&&(g.nn(this.g),sn(this,"touchmove",this.AO),sn(this,"touchend",this.sD),sn(this,"touchcancel",this.sD),this.C=b.identifier,a=g.fk(a),this.i||(this.i=!0,this.O("hoverstart",b.pageX,b.pageY,a)),this.O("hovermove",b.pageX,b.pageY,a),this.l&&(this.o=!0,this.O("dragstart",b.pageX,b.pageY,a),this.O("dragmove",b.pageX,b.pageY,a)))};
g.k.AO=function(a){var b=un(this,a);b&&(this.l&&g.jk(a),a=g.fk(a),this.O("hovermove",b.pageX,b.pageY,a),this.l&&this.O("dragmove",b.pageX,b.pageY,a))};
g.k.sD=function(a){var b=un(this,a);if(b){g.nn(this.g);qn(this);this.i=!1;var c=g.fk(a);this.l&&(this.F||g.jk(a),this.o=!1,this.O("dragend",b.pageX,b.pageY,c));this.O("hoverend",b.pageX,b.pageY,c)}};
g.k.U=function(){this.l&&(g.Ye&&this.B.removeAttribute("draggable"),this.B.style.touchAction="");g.nn(this.g);g.N.prototype.U.call(this)};vn.prototype.clone=function(){var a=new vn,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==Na(c)?g.Pb(c):c}return a};var Aka,Bka,Ria,Cka,Dka,Eka;Aka=["share/get_web_player_share_panel"];Bka=["notification/modify_channel_preference"];Ria=["player"];Cka=["browse/edit_playlist"];Dka=["subscription/subscribe"];Eka=["subscription/unsubscribe"];g.tF=["next","unplugged/watch_next"];var wn=(0,g.E)().toString();var Jn=g.v.ytLoggingDocDocumentNonce_||g.yn();g.Ia("ytLoggingDocDocumentNonce_",Jn,void 0);$f.prototype.flush=function(a){a=void 0===a?[]:a;if(g.uj("enable_client_streamz_web")){a=g.p(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new Rh;c=g.Tg(c,1,b.o);for(var d=b,e=[],f=0;f<d.g.length;f++)e.push(d.g[f].aj);c=g.Tg(c,3,e||[]);d=[];e=[];f=g.p(b.kk.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.i;for(var m=b.Hy(h)||[],n=[],q=0;q<m.length;q++){var r=m[q];r=r&&r.Qx;var u=new Zh;switch(l){case 3:Ug(u,1,Yh[0],Number(r));
break;case 2:Ug(u,2,Yh[0],Number(r))}n.push(u)}l=n;for(m=0;m<l.length;m++){q=l[m];n=new Vh;n.g||(n.g={});r=q?q.Rd:q;n.g[2]=q;n=g.Tg(n,2,r);q=h;r=[];u=b;for(var w=[],B=0;B<u.g.length;B++)w.push(u.g[B].bj);u=w;for(w=0;w<u.length;w++){B=u[w];var z=q[w],D=new Xh;switch(B){case 3:Ug(D,1,Wh[0],String(z));break;case 2:Ug(D,2,Wh[0],Number(z));break;case 1:Ug(D,3,Wh[0],"true"==z)}r.push(D)}Yg(n,1,r);d.push(n)}}Yg(c,4,d);d=b=new g.yg;e=g.Sg(c,1);null!=e&&Jg(d,1,e);e=g.Sg(c,5);null!=e&&Gg(d,5,e);e=Vg(c,Sh,2);
null!=e&&Kg(d,2,e,vba);e=g.Sg(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)Jg(d,3,e[f]);e=g.Sg(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)Gg(d,6,e[f]);e=Xg(c,Vh,4);0<e.length&&Lg(d,4,e,yba);b=g.Bg(b);b={serializedIncrementBatch:g.ug(b)};g.Im("streamzIncremented",b)}}};var ada=1;An.prototype.getAsJson=function(){var a={};void 0!==this.g.trackingParams?a.trackingParams=this.g.trackingParams:(a.veType=this.g.veType,void 0!==this.g.veCounter&&(a.veCounter=this.g.veCounter),void 0!==this.g.elementIndex&&(a.elementIndex=this.g.elementIndex));void 0!==this.g.dataElement&&(a.dataElement=this.g.dataElement.getAsJson());void 0!==this.g.youtubeData&&(a.youtubeData=this.g.youtubeData);return a};
An.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
An.prototype.isClientVe=function(){return!this.g.trackingParams&&!!this.g.veType};g.Ia("yt_logging_screen.getRootVeType",En,void 0);g.Ia("yt_logging_screen.getCurrentCsn",g.Hn,void 0);g.Ia("yt_logging_screen.getCttAuthInfo",g.In,void 0);g.Ia("yt_logging_screen.setCurrentScreen",Kn,void 0);Mn.prototype.toString=function(){return this.topic};var Fka=g.Ka("ytPubsub2Pubsub2Instance")||new g.Gi;g.Gi.prototype.subscribe=g.Gi.prototype.subscribe;g.Gi.prototype.unsubscribeByKey=g.Gi.prototype.mj;g.Gi.prototype.publish=g.Gi.prototype.O;g.Gi.prototype.clear=g.Gi.prototype.clear;g.Ia("ytPubsub2Pubsub2Instance",Fka,void 0);var Pn=g.Ka("ytPubsub2Pubsub2SubscribedKeys")||{};g.Ia("ytPubsub2Pubsub2SubscribedKeys",Pn,void 0);var Rn=g.Ka("ytPubsub2Pubsub2TopicToKeys")||{};g.Ia("ytPubsub2Pubsub2TopicToKeys",Rn,void 0);
var Qn=g.Ka("ytPubsub2Pubsub2IsAsync")||{};g.Ia("ytPubsub2Pubsub2IsAsync",Qn,void 0);g.Ia("ytPubsub2Pubsub2SkipSubKey",null,void 0);g.t(Vn,Ln);var dda=new Mn("screen-created",Vn),$n=[],ao=0;var eo;var go;g.fo=g.Za(function(){var a=new Qi;return a.isAvailable()?new g.Ni(a):null});
go=g.Za(function(){var a=new Ri;return a.isAvailable()?new g.Ni(a):null});var oo={},gda=0;var Rfa={gQ:1,mQ:2,PAUSED:3,1:"DISABLED",2:"ENABLED",3:"PAUSED"};g.k=g.vo.prototype;g.k.FA=function(a){this.segments.push(a)};
g.k.getDuration=function(a){return(a=this.kg(a))?a.duration:0};
g.k.Jy=function(a){return this.getDuration(a)};
g.k.Cf=function(){return this.segments.length?this.segments[0].Oa:-1};
g.k.Iu=function(a){return(a=this.kg(a))?a.ingestionTime:NaN};
g.k.Zy=function(a){return(a=this.kg(a))?a.l:null};
g.k.qb=function(){return this.segments.length?this.segments[this.segments.length-1].Oa:-1};
g.k.Xh=function(){var a=this.segments[this.segments.length-1];return a?a.endTime:NaN};
g.k.Ib=function(){return this.segments[0].startTime};
g.k.Bk=function(){return this.segments.length};
g.k.zq=function(){return 0};
g.k.Df=function(a){return(a=this.wk(a))?a.Oa:-1};
g.k.zt=function(a){return(a=this.kg(a))?a.i:""};
g.k.td=function(a){return(a=this.kg(a))?a.startTime:0};
g.k.wp=ba(1);g.k.Nb=function(){return 0<this.segments.length};
g.k.kg=function(a){a=g.tb(this.segments,new uo(a,0,0,0,""),function(b,c){return b.Oa-c.Oa});
return 0<=a?this.segments[a]:null};
g.k.wk=function(a){a=g.tb(this.segments,{startTime:a},function(b,c){return b.startTime-c.startTime});
return 0<=a?this.segments[a]:this.segments[Math.max(0,-a-2)]};
g.k.append=function(a){if(0!=a.length)if(a=g.nb(a),0==this.segments.length)this.segments=a;else{var b=this.segments.length?g.$a(this.segments).endTime:0,c=a[0].Oa-this.qb();1<c&&g.gb(this.segments);for(c=0<c?0:-c+1;c<a.length;c++){var d=a[c];d.startTime=b;d.endTime=d.startTime+d.duration;b+=a[c].duration;this.segments.push(a[c])}}};
g.k.Ty=function(){return 0};xo.prototype.skip=function(a){this.g+=a};
xo.prototype.markAsSkip=function(){this.type=1936419184;this.data.setUint32(this.offset+4,1936419184)};var cz=!1;var lQ={},Gka=(lQ.predictStart="predictStart",lQ.start="start",lQ["continue"]="continue",lQ.stop="stop",lQ),Bga={EVENT_PREDICT_START:"predictStart",EVENT_START:"start",EVENT_CONTINUE:"continue",EVENT_STOP:"stop"};var Yo=!1;var RE=function(){function a(d){for(var e=new Uint8Array(d.length),f=0;f<d.length;f++)e[f]=d[f];return e}
function b(d){return new Uint8Array(d)}
var c=new Uint8Array([1]);return 1===c.length&&1===c[0]?b:a}();var qp=!0;vp.prototype.toString=function(){return this.start+"-"+(null==this.end?"":this.end)};zp.prototype.isVideo=function(){return!!this.g.info.video};
zp.prototype.Yh=function(){return this.g.Yh(this)};g.k=Lp.prototype;g.k.getLength=function(){return this.totalLength};
g.k.append=function(a){if(Mp(this,a)){var b=this.g[this.g.length-1];this.g[this.g.length-1]=new Uint8Array(b.buffer,b.byteOffset,b.length+a.length);Op(this)}else this.g.push(a);this.totalLength+=a.length};
g.k.split=function(a){for(var b=new Lp,c=new Lp,d=g.p(this.g),e=d.next();!e.done;e=d.next())e=e.value,a>=e.length?(b.append(e),a-=e.length):a?(b.append(new Uint8Array(e.buffer,e.byteOffset,a)),c.append(new Uint8Array(e.buffer,e.byteOffset+a,e.length-a)),a=0):c.append(e);return{Fp:b,bk:c}};
g.k.isFocused=function(a){return a>=this.l&&a<this.l+this.g[this.i].length};
g.k.focus=function(a){if(!this.isFocused(a)){for(a<this.l&&Op(this);this.l+this.g[this.i].length<=a&&this.i<this.g.length;)this.l+=this.g[this.i].length,this.i+=1;this.o=void 0}};Wp.prototype.verify=function(a){if(this.info.Ra!=this.g.getLength())return a.slength=this.info.Ra.toString(),a.range=this.g.getLength().toString(),!1;if(1==this.info.g.info.containerType){if(8>this.info.Ra||4==this.info.type)return!0;var b=Xp(this),c=b.getUint32(0,!1);b=b.getUint32(4,!1);a.infotype=this.info.type.toString();a.slicesize=c.toString();a.boxtype=b.toString();if(2==this.info.type)return c==this.info.Ra&&1936286840==b;if(3==this.info.type&&0==this.info.l)return 1836019558==b||1936286840==
b||1937013104==b||1718909296==b||1701671783==b||1936419184==b}else if(2==this.info.g.info.containerType){if(4>this.info.Ra||4==this.info.type)return!0;c=Xp(this).getUint32(0,!1);a.ebm=c.toString();if(3==this.info.type&&0==this.info.l)return 524531317==c||440786851==c}return!0};var lq={tX:function(a,b){a.splice(0,b)},
yI:function(a){a.reverse()},
aY:function(a,b){var c=a[0];a[0]=a[b%a.length];a[b%a.length]=c}};var Zja=/^https?:\/\/([^.]*\.moatads\.com\/|e[0-9]+\.yt\.srs\.doubleverify\.com|pagead2\.googlesyndication\.com\/pagead\/gen_204\?id=yt3p&sr=1&|pm\.adsafeprotected\.com\/youtube|pm\.test-adsafeprotected\.com\/youtube|youtube[0-9]+\.moatpixel\.com\/)/,pq=/^http:\/\/0\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.l2gfe\.[a-z0-9_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|^https:\/\/([a-z]+\.)?[0-9a-f]{1,63}\.sslproxy\.corp\.google\.com\/|^https:\/\/([a-z]+\.)?[a-z0-9\-]{1,63}\.demos\.corp\.google\.com\/|^https:\/\/[0-9a-f]{1,63}\.proxy\.googleprod\.com\/|^https?:\/\/((?:uytfe\.corp|dev-uytfe\.corp|uytfe\.sandbox)\.google\.com\/|([-\w]*www[-\w]*\.|[-\w]*web[-\w]*\.|[-\w]*canary[-\w]*\.|[-\w]*dev[-\w]*\.|[-\w]{1,3}\.)+youtube(-nocookie|kids)?\.com\/|([A-Za-z0-9-]{1,63}\.)*(youtube\.googleapis\.com)[.]?(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com(:[0-9]+)?\/|([a-z]+\.)?[a-z0-9\-]{1,63}\.c\.googlers\.com(:[0-9]+)?\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|(tv|tv-green-qa|tv-release-qa)\.youtube\.com\/|[A-Za-z0-9-]+\.prod\.google\.com(:[0-9]+)?\/|m?web-ppg\.corp\.google\.com\/)/,
$ja=/^https?:\/\/(www\.google\.com\/pagead\/xsul|www\.youtube\.com\/pagead\/slav)/,zda=/^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|docs\.google\.com|drive\.google\.com|prod\.google\.com|plus\.google\.com|currents\.google\.com|mail\.google\.com|youtube\.com|youtube\-nocookie\.com|youtubekids\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$))/,
xda=/^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|borg\.google\.com|prod\.google\.com|youtube\.com|youtubekids\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$))/,vda=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(gz0\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|plus\.google\.com|currents\.google\.com|video\.google\.com|youtube\.com|ytimg\.com|ytimg\.sandbox\.google\.com|chat\.google\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$)|s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/)/,
aka=/^https?.*#ocr$|^https?:\/\/(aksecure\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|secure\-..\.imrworldwide\.com\/)/,wda=/^https?:\/\/(googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion)|www\.google\.com\/(aclk|pagead\/conversion)|www\.googleadservices\.com\/(aclk|pagead\/(aclk|conversion))|www\.youtube\.com\/pagead\/conversion)/,uda=/^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(gz0\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(dp4\.googleusercontent\.com)|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|prod\.google\.com|lh3\.photos\.google\.com|plus\.google\.com|currents\.google\.com|mail\.google\.com|youtube\.com|xfx7\.com|yt\.akamaized\.net|chat\.google\.com)[.]?(:[0-9]+)?\/|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$)|([A-Za-z0-9-]{1,63}\.)*c\.lh3(-d[a-gz]|-testonly)?\.(googleusercontent|photos\.google)\.com\/.*$)/,
xea=/^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubekids\.com|ytimg\.com|ytimg\.sandbox\.google\.com)[.]?(:[0-9]+)?\/|lightbox-(demos|builder)\.appspot\.com\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer)/,
wea=/^https:\/\/([A-Za-z0-9-]{1,63}\.)*(crowdsource|datacompute)\.google\.com\/|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com(\/(?!url\b)|$)|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com(\/|$)|^https:\/\/canvastester-3fd0b\.appspot\.com(\/|$)|^https:\/\/narrative-news-cast-receiver-d\.appspot\.com(\/|$)|^https:\/\/narrative-news-cast-receiver-f\.appspot\.com(\/|$)|^https:\/\/one\.google\.com(\/|$)|^https:\/\/www\.gstatic\.com\/aog_howto|^https:\/\/www\.gstatic\.com\/narrative_cast_receiver\/news|^https?:\/\/(([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|corp\.google\.com|proxy\.googleprod\.com|c\.googlers\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleads\.g\.doubleclick\.net|googleplex\.com|play\.google\.com|prod\.google\.com|photos\.google\.com|get\.google\.com|class\.photos\.google\.com|plus\.google\.com|currents\.google\.com|books\.googleusercontent\.com|play\-books\-autopush\-sandbox\.googleusercontent\.com|play\-books\-canary\-sandbox\.googleusercontent\.com|play\-books\-internal\-sandbox\.googleusercontent\.com|play\-books\-staging\-sandbox\.googleusercontent\.com|blogger\.com|mail\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube\-nocookie\.com|youtubekids\.com|vevo\.com|chat\.google\.com|meet\.google\.com|stadia\.google\.com|shoploop\.area120\.google\.com)[.]?(:[0-9]+)?(\/|$)|([A-Za-z0-9-]{1,63}\.)*(sandbox\.google\.com)(:[0-9]+)?(\/(?!url\b)|$)|(www\.|encrypted\.)?google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))\/(search|webhp)\?|lightbox-(demos|builder)\.appspot\.com\/|s0\.2mdn\.net\/instream\/html5\/native\/|s[01](qa)?\.2mdn\.net\/ads\/richmedia\/studio\/mu\/templates\/tetris|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris)/,
mQ=/^(https\:\/\/photos\.google\.com|https\:\/\/get\.google\.com|https\:\/\/class\.photos\.google\.com|https\:\/\/plus\.google\.com|https\:\/\/currents\.google\.com|https\:\/\/mail\.google\.com|https\:\/\/chat\.google\.com|https\:\/\/stadia\.google\.com|https\:\/\/one\.google\.com|https\:\/\/shoploop\.area120\.google\.com)$|^http:\/\/[0-9]+\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.[a-z0-9\-_]+\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?$|^https:\/\/((staging|stream|today)\.)?meet\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)*(crowdsource|datacompute)\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)*youtube\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+demos\.corp\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sandbox\.google\.com$|^https:\/\/([A-Za-z0-9-]{1,63}\.)+sslproxy\.corp\.google\.com$|^https:\/\/(books|play-books-(autopush|canary|internal|staging)-sandbox)\.googleusercontent\.com$|^https:\/\/(draft|www|(www\.)?daily\.alpha|(www\.)?weekly\.alpha|(www\.)?dev\.sandbox|(www\.)?autopush\.sandbox|(www\.)?restore\.sandbox)\.blogger\.com$|^https:\/\/[0-9a-f]{1,63}\.proxy\.googleprod\.com$|^https?:\/\/(((docs|m|sing|ss|sss|www)\.)?drive\.google\.com$|([A-Za-z0-9-]{1,63}\.)*c\.googlers\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\.)*corp\.google\.com(:[0-9]+)?$|([A-Za-z0-9-]{1,63}\.)*googleplex\.com(:[0-9]+)?$|(www\.|encrypted\.)google\.(cat|com(\.(a[fgiru]|b[dhnorz]|c[ouy]|do|e[cgt]|fj|g[hit]|hk|jm|kh|kw|l[bcy]|m[mtxy]|n[afgip]|om|p[aeghkry]|qa|s[abglv]|t[jnrw]|ua|uy|vc|vn))?|a[cdelmstz]|c[acdfghilmnvz]|b[aefgijsty]|ee|es|d[ejkmz]|g[aefglmpry]|f[imr]|i[emoqrst]|h[nrtu]|k[giz]|je|jo|m[degklnsuvw]|l[aiktuv]|n[eloru]|p[lnst]|s[cehikmnort]|r[osuw]|us|t[dgklmnot]|ws|vg|vu|co\.(ao|bw|ck|cr|i[dln]|jp|ke|kr|ls|ma|mz|nz|th|tz|u[gkz]|ve|vi|z[amw]))$|[A-Za-z0-9-]+\.prod\.google\.com(:[0-9]+)?$|docs\.google\.com$)/;xq.prototype.set=function(a,b){this.g[a]!==b&&(this.g[a]=b,this.url="")};
xq.prototype.get=function(a){yq(this);return this.g[a]||null};
xq.prototype.sc=function(){this.url||(this.url=Ada(this));return this.url};
xq.prototype.clone=function(){var a=new xq(this.i);a.scheme=this.scheme;a.path=this.path;a.l=this.l;a.g=g.Pb(this.g);a.url=this.url;return a};Hq.prototype.set=function(a,b){this.tf.get(a);this.g[a]=b;this.url=""};
Hq.prototype.get=function(a){return this.g[a]||this.tf.get(a)};
Hq.prototype.sc=function(){this.url||(this.url=Bda(this));return this.url};Oq.prototype.Ee=function(){return Ap(this.g[0])};var nQ={},Gs=(nQ.WIDTH={name:"width",video:!0,valid:640,invalid:99999},nQ.HEIGHT={name:"height",video:!0,valid:360,invalid:99999},nQ.FRAMERATE={name:"framerate",video:!0,valid:30,invalid:9999},nQ.BITRATE={name:"bitrate",video:!0,valid:3E5,invalid:2E9},nQ.EOTF={name:"eotf",video:!0,valid:"bt709",invalid:"catavision"},nQ.CHANNELS={name:"channels",video:!1,valid:2,invalid:99},nQ.CRYPTOBLOCKFORMAT={name:"cryptoblockformat",video:!0,valid:"subsample",invalid:"invalidformat"},nQ.DECODETOTEXTURE={name:"decode-to-texture",
video:!0,valid:"false",invalid:"nope"},nQ.AV1_CODECS={name:"codecs",video:!0,valid:"av01.0.05M.08",invalid:"av99.0.05M.08"},nQ.EXPERIMENTAL={name:"experimental",video:!0,valid:"allowed",invalid:"invalid"},nQ);var Fda={0:"f",160:"h",133:"h",134:"h",135:"h",136:"h",137:"h",264:"h",266:"h",138:"h",298:"h",299:"h",304:"h",305:"h",214:"h",216:"h",374:"h",375:"h",140:"a",141:"ah",327:"sa",258:"m",380:"mac3",328:"meac3",161:"H",142:"H",143:"H",144:"H",222:"H",223:"H",145:"H",224:"H",225:"H",146:"H",226:"H",227:"H",147:"H",384:"H",376:"H",385:"H",377:"H",149:"A",261:"M",381:"MAC3",329:"MEAC3",598:"9",278:"9",242:"9",243:"9",244:"9",247:"9",248:"9",353:"9",355:"9",271:"9",313:"9",272:"9",302:"9",303:"9",407:"9",
408:"9",308:"9",315:"9",330:"9h",331:"9h",332:"9h",333:"9h",334:"9h",335:"9h",336:"9h",337:"9h",171:"v",338:"so",600:"o",250:"o",251:"o",194:"*",195:"*",220:"*",221:"*",196:"*",197:"*",198:"V",279:"(",280:"(",317:"(",318:"(",273:"(",274:"(",357:"(",358:"(",275:"(",359:"(",360:"(",276:"(",583:"(",584:"(",314:"(",585:"(",561:"(",277:"(",362:"(h",363:"(h",364:"(h",365:"(h",366:"(h",591:"(h",592:"(h",367:"(h",586:"(h",587:"(h",368:"(h",588:"(h",562:"(h",409:"(",410:"(",411:"(",412:"(",557:"(",558:"(",
394:"1",395:"1",396:"1",397:"1",398:"1",399:"1",400:"1",401:"1",571:"1",402:"1",386:"3",387:"w",406:"6"};var Hea={EP:"auto",KS:"tiny",gR:"light",yS:"small",pR:"medium",eR:"large",JQ:"hd720",FQ:"hd1080",GQ:"hd1440",HQ:"hd2160",IQ:"hd2880",OQ:"highres",UNKNOWN:"unknown"};var oQ;oQ={};g.Vq=(oQ.auto=0,oQ.tiny=144,oQ.light=144,oQ.small=240,oQ.medium=360,oQ.large=480,oQ.hd720=720,oQ.hd1080=1080,oQ.hd1440=1440,oQ.hd2160=2160,oQ.hd2880=2880,oQ.highres=4320,oQ);var Zq="highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");ar.prototype.xa=function(){return this.video};
ar.prototype.Qc=function(){return 2===this.containerType};
ar.prototype.isVideo=function(){return!!this.video};g.k=hr.prototype;g.k.De=function(){};
g.k.Pk=function(){};
g.k.rd=function(){return!!this.g&&this.index.Nb()};
g.k.uh=function(){};
g.k.iA=function(){return!1};
g.k.gj=function(){};
g.k.Ej=function(){};
g.k.Yh=function(){};
g.k.dh=function(){};
g.k.Bp=function(){};
g.k.jA=function(a){return[a]};
g.k.gr=function(a){return[a]};
g.k.Qq=function(){};
g.k.pp=function(){};g.t(ir,hr);g.k=ir.prototype;g.k.De=function(){return!1};
g.k.Pk=function(){return!1};
g.k.iA=function(){return this.C};
g.k.gj=function(){if(this.C)return[];var a=new zp(1,this,this.initRange,"getMetadataRequestInfos");return[new Oq([a],this.N)]};
g.k.Ej=function(){return null};
g.k.Yh=function(a){this.uh(a);return this.Fj(a.o?a.i+1:a.i,!1)};
g.k.dh=function(a,b){b=void 0===b?!1:b;var c=this.index.Df(a);b&&(c=Math.min(this.index.qb(),c+1));return this.Fj(c,!0)};
g.k.Bp=function(a){this.g=new Uint8Array(Xp(a).buffer)};
g.k.uh=function(a){return 0==a.Ra?!0:this.index.qb()>a.i&&this.index.Cf()<=a.i+1};
g.k.update=function(a,b,c){this.index.append(a);wo(this.index,c);this.F=b};
g.k.rd=function(){return this.C?!0:hr.prototype.rd.call(this)};
g.k.Fj=function(a,b){var c=this.index.zt(a),d=this.index.td(a),e=this.index.getDuration(a),f;b?e=f=0:f=0<this.info.g?this.info.g*e:1E3;var h=!b,l=f;f=a==this.index.qb()&&!this.F&&0<f;d=new zp(3,this,null,"liveCreateRequestInfoForSegment",a,d,e,0,l,f,h);return new Oq([d],c)};
g.k.pp=function(){return this.C?0:this.initRange.length};
g.k.Qq=function(){return!1};g.t(mr,g.vo);g.k=mr.prototype;g.k.Cf=function(){return this.i?this.segments.length?this.wk(this.Ib()).Oa:-1:g.vo.prototype.Cf.call(this)};
g.k.Ib=function(){if(this.u)return 0;if(!this.i)return g.vo.prototype.Ib.call(this);if(!this.segments.length)return 0;var a=Math.max(g.$a(this.segments).endTime-this.l,0);return 0<this.F&&this.wk(a).Oa<this.F?this.kg(this.F).startTime:a};
g.k.Xh=function(){if(!this.segments.length)return g.vo.prototype.Xh.call(this);var a=this.qb();if(!this.i||a<=this.segments[this.segments.length-1].Oa)a=this.segments[this.segments.length-1];else{var b=this.segments[this.segments.length-1];a=new uo(a,Math.max(0,b.startTime-(b.Oa-a)*this.g),this.g,0,"sq/"+a,void 0,void 0,!0)}return null!=this.C&&a.pending&&3==this.C?this.u?Math.min(this.l,a.startTime):a.startTime:this.u?Math.min(this.l,a.endTime):a.endTime};
g.k.Bk=function(){return this.i?this.segments.length?this.qb()-this.Cf()+1:0:g.vo.prototype.Bk.call(this)};
g.k.qb=function(){var a=Math.min(this.K,Math.max(g.vo.prototype.qb.call(this),this.B)),b=1E3*this.l;b=0<this.o&&this.o<b;this.u&&0<this.l&&0<this.B&&!b&&(b=this.wk(this.l))&&(a=Math.min(b.Oa-1,a));return a};
g.k.Ak=function(){return this.segments.length?this.segments[this.segments.length-1]:null};
g.k.FA=function(a){var b=nr(this,a.Oa);if(0<=b)this.segments[b]=a;else if(this.segments.splice(-(b+1),0,a),this.J&&0==a.Oa%(300/this.g)){var c=this.segments[0].Oa,d=Math.floor(this.J/this.g);a=a.Oa-d;b=-(b+1)-d;0<b&&a>c&&(this.segments=this.segments.slice(b))}};
g.k.wk=function(a){if(!this.i)return g.vo.prototype.wk.call(this,a);if(!this.segments.length)return null;var b=this.segments[this.segments.length-1];if(a<this.segments[0].startTime)b=Math.max(0,this.segments[0].Oa-Math.ceil((this.segments[0].startTime-a)/this.g));else if(a>=b.endTime)b=b.Oa+Math.floor((a-b.endTime)/this.g+1);else{b=ub(this.segments,function(d){return a<d.startTime?-1:a>=d.endTime?1:0});
if(0<=b)return this.segments[b];var c=-(b+1);b=this.segments[c-1];c=this.segments[c];b=Math.floor((a-b.endTime)/((c.startTime-b.endTime)/(c.Oa-b.Oa-1))+1)+b.Oa}return this.kg(b)};
g.k.kg=function(a){if(!this.i)return g.vo.prototype.kg.call(this,a);if(!this.segments.length)return null;var b=nr(this,a);if(0<=b)return this.segments[b];var c=-(b+1);b=this.g;if(0==c)var d=Math.max(0,this.segments[0].startTime-(this.segments[0].Oa-a)*b);else c==this.segments.length?(d=this.segments[this.segments.length-1],d=d.endTime+(a-d.Oa-1)*b):(d=this.segments[c-1],c=this.segments[c],d=d.endTime+(c.startTime-d.endTime)/(c.Oa-d.Oa-1)*(a-d.Oa-1));return new uo(a,d,b,0,"sq/"+a,void 0,void 0,!0)};g.t(pr,ir);g.k=pr.prototype;g.k.Pk=function(){return!0};
g.k.rd=function(){return!0};
g.k.uh=function(a){return!a.B};
g.k.gj=function(){return[]};
g.k.dh=function(a,b){if("number"===typeof a&&!isFinite(a)){var c=new zp(3,this,null,"mlLiveGetReqInfoStubForTime",-1,void 0,this.lf,void 0,this.lf*this.info.g);return new Oq([c],"")}return ir.prototype.dh.call(this,a,b)};
g.k.Fj=function(a,b){var c=void 0===c?!1:c;if(or(this.index,a))return ir.prototype.Fj.call(this,a,b);var d=this.index.td(a),e=b?0:this.lf*this.info.g,f=!b;c=new zp(c?6:3,this,null,"mlLiveCreateReqInfoForSeg",a,d,void 0,void 0,e,a==this.index.qb()&&!this.F&&0<e,f);return new Oq([c],0<=a?"sq/"+a:"")};ur.prototype.update=function(a,b){var c=void 0;this.i&&(c=this.i);var d=new ur,e=Array.from(a.getElementsByTagName("S"));if(e.length){var f=+qr(a,"timescale")||1,h=(+e[0].getAttribute("t")||0)/f,l=+qr(a,"startNumber")||0;d.u=h;var m=h;var n=+qr(a,"presentationTimeOffset")||0;m=c?c.startSecs+c.durationSecs:b?m-n/f:0;n=Date.parse(tr(qr(a,"yt:segmentIngestTime")))/1E3;d.l="SegmentTemplate"==a.parentNode.tagName;d.l&&(d.C=qr(a,"media"));var q=c?l-c.Oa:1;d.B=0<q?0:-q+1;e=g.p(e);for(q=e.next();!q.done;q=
e.next()){q=q.value;for(var r=+q.getAttribute("d")/f,u=(+q.getAttribute("yt:sid")||0)/f,w=+q.getAttribute("r")||0,B=0;B<=w;B++)if(c&&l<=c.Oa)l++;else{var z=new Gda(l,m,r,n+u,h);d.g.push(z);var D=z.startSecs;z=q.getAttribute("yt:cuepointTimeOffset");var F=q.getAttribute("yt:cuepointDuration");if(z&&F){z=parseFloat(z);D=(cz?+z/f:-z/f)+D;F=parseFloat(F)/f;var H=q.getAttribute("yt:cuepointContext")||null,V=q.getAttribute("yt:cuepointIdentifier");var ca=q.getAttribute("yt:cuepointEvent");ca=Gka[ca]||"unknown";
z=new g.Fo(D,F,H,V,ca,z)}else z=null;z&&d.o.push(z);l++;m+=r;h+=r;n+=r+u}}d.g.length&&(d.i=g.$a(d.g))}this.B=d.B;this.i=d.i||this.i;g.ob(this.g,d.g);g.ob(this.o,d.o);this.l=d.l;this.C=d.C;-1===this.u&&(this.u=d.getStreamTimeOffset())};
ur.prototype.getStreamTimeOffset=function(){return-1===this.u?0:this.u};g.t(vr,hr);g.k=vr.prototype;g.k.De=function(){return!1};
g.k.Pk=function(){return!1};
g.k.gj=function(){if(this.C){var a=new zp(1,this,null,"otfInit");return[new Oq([a],this.C)]}a=new zp(1,this,this.initRange,"otfInitInfo");var b=new zp(2,this,this.indexRange,"otfIndexInfo");return[new Oq([a,b])]};
g.k.Ej=function(){return null};
g.k.Yh=function(a){this.uh(a);return wr(this,Ep(a),!1)};
g.k.dh=function(a,b){b=void 0===b?!1:b;var c=this.index.Df(a);b&&(c=Math.min(this.index.qb(),c+1));return wr(this,c,!0)};
g.k.Bp=function(a){if(1==a.info.type)this.g||(this.g=Tp(a.g)),a.i&&"http://youtube.com/streaming/otf/durations/112015"==a.i.uri&&Oda(this,a.i);else if(2==a.info.type)if(g.$p(this.info)){if(!this.index.Nb()&&(a=g.Lo(Xp(a),0,1936286840))){var b=[],c=Uo(a);a=c.xv.length;var d=c.xr,e=c.xv,f=c.tr;c=this.indexRange.end+c.yy+1;for(var h=0,l=0;l<a;l++){var m=f[l]/d,n=e[l];b.push(new uo(l,h,m,NaN,"range/"+c+"-"+(c+n-1)));h+=m;c+=n}this.index.append(b)}}else if(this.info.Qc()&&this.g&&(d=new ap(new DataView(this.g.buffer)),
b=pp(d))&&(d=new ap(Xp(a)),a=rp(d,b.Bn,this.indexRange.end))){d=[];e=b.Zv/b.bw;f=a.length-1;for(c=0;c<f;c++)h=a[c],l=a[c+1],m=h.Ro*e,d.push(new uo(c,m,l.Ro*e-m,NaN,"range/"+h.Vi+"-"+(l.Vi-1)));c=a[f].Ro*e;d.push(new uo(f,c,b.duration*e-c,NaN,"range/"+a[f].Vi+"-"+(b.Dv+b.Bn)));this.index.append(d)}};
g.k.uh=function(a){return 0==a.Ra?!0:this.index.qb()>a.i&&this.index.Cf()<=a.i+1};
g.k.pp=function(){return this.initRange&&this.indexRange?this.initRange.length+this.indexRange.length:0};
g.k.Qq=function(){return!1};g.k=g.xr.prototype;g.k.zq=function(a){return this.i[a]};
g.k.td=function(a){return this.l[a]/this.u};
g.k.wp=ba(0);g.k.Iu=function(){return NaN};
g.k.Zy=function(){return null};
g.k.getDuration=function(a){a=this.Jy(a);return 0<=a?a/this.u:-1};
g.k.Jy=function(a){return a+1<this.g||this.o?this.l[a+1]-this.l[a]:-1};
g.k.Cf=function(){return 0};
g.k.qb=function(){return this.g-1};
g.k.Xh=function(){return this.o?this.l[this.g]/this.u:NaN};
g.k.Ib=function(){return 0};
g.k.Bk=function(){return this.g};
g.k.zt=function(){return""};
g.k.Df=function(a){a=g.tb(this.l.subarray(0,this.g),a*this.u);return 0<=a?a:Math.max(0,-a-2)};
g.k.Nb=function(){return 0<=this.qb()};
g.k.Ty=function(a,b){if(a>=this.qb())return 0;for(var c=0,d=this.td(a)+b,e=a;e<this.qb()&&d>this.td(e);e++)c=Math.max(c,(e+1<this.g||this.o?this.i[e+1]-this.i[e]:-1)/this.getDuration(e));return c};
g.k.resize=function(a){a+=2;var b=this.i;this.i=new Float64Array(a+1);var c=this.l;this.l=new Float64Array(a+1);for(a=0;a<this.g+1;a++)this.i[a]=b[a],this.l[a]=c[a]};
g.k.cap=function(a,b){yr(this);this.o=!0;this.l[this.g]=b;this.i[this.g]=a};g.t(zr,hr);g.k=zr.prototype;g.k.gj=function(a){var b=new zp(1,this,this.initRange,"initInfo"),c=new zp(2,this,this.indexRange,"indexInfo"),d=[],e=[b];Cp(b,c)?e.push(c):(d.push(new Oq([c])),a=0);isNaN(this.C)&&(a=0);b=e[e.length-1];a=Math.min(a,this.C-(b.range.end-e[0].range.start+1));0<a&&(a=xp(b.range.end+1,a),e.push(new zp(4,this,a,"tbdRange")));d.push(new Oq(e));return d};
g.k.Bp=function(a){if(1==a.info.type){if(this.g)return;this.g=Tp(a.g)}else if(2==a.info.type){if(this.F||0<=this.index.qb())return;if(g.$p(this.info)){var b=this.index,c=Xp(a);a=a.info.range.start;var d=g.Lo(c,0,1936286840);c=Uo(d);b.u=c.xr;var e=c.FF;b.i[0]=c.yy+a+d.size;b.l[0]=e;b.o=!0;a=c.tr.length;for(d=0;d<a;d++){e=b;var f=c.xv[d],h=c.tr[d];e.g++;yr(e);e.i[e.g]=e.i[e.g-1]+f;e.l[e.g]=e.l[e.g-1]+h}}else this.F=Xp(a)}if(this.info.Qc()&&this.g&&this.F){c=new DataView(this.g.buffer);b=this.index;
a=this.F;d=this.indexRange.end;e=new ap(c);c=pp(e);if(null!=c&&(b.u=c.bw/c.Zv,e=new ap(a),a=rp(e,c.Bn,d),null!=a)){a=g.p(a);for(d=a.next();!d.done;d=a.next())f=d.value,d=b,e=f.Vi,f=f.Ro,yr(d),d.i[d.g]=e,d.l[d.g]=f,d.g++;b.cap(c.Dv+c.Bn,c.duration)}this.F=null}};
g.k.jA=function(a){for(var b=this.gr(a.info),c=a.info.range.start+a.info.l,d=a.l,e=[],f=0;f<b.length;f++){var h=b[f].Ra;h=a.g.split(b[f].range.start+b[f].l-c).bk.split(h).Fp;e.push(new Wp(b[f],h,d));d=!1}return e};
g.k.gr=function(a){for(var b=a.range.start+a.l,c=0;c<this.index.qb()&&b>=this.index.zq(c+1);)c++;return Ar(this,c,b,a.Ra).g};
g.k.uh=function(a){return this.rd()?!0:isNaN(this.C)?!1:a.range.end+1<this.C};
g.k.Ej=function(a,b){this.uh(a);if(!this.rd()){var c=xp(a.range.end+1,b);c.end+1>this.C&&(c=new vp(c.start,this.C-1));c=[new zp(4,a.g,c,"getNextRequestInfoByLength")];return new Oq(c)}4==a.type&&(c=this.gr(a),a=c[c.length-1]);c=0;var d=a.range.start+a.l+a.Ra;3==a.type&&(c=a.i,d==a.range.end+1&&(c+=1));return Ar(this,c,d,b)};
g.k.Yh=function(){return null};
g.k.dh=function(a,b){var c=this.index.Df(a);b&&(c=Math.min(this.index.qb(),c+1));return Ar(this,c,this.index.zq(c),0)};
g.k.De=function(){return!0};
g.k.Pk=function(){return!1};
g.k.pp=function(){return this.indexRange.length+this.initRange.length};
g.k.Qq=function(){return this.indexRange&&this.initRange&&this.initRange.end+1==this.indexRange.start?!0:!1};Br.prototype.start=function(){return 0};
Br.prototype.end=function(){return Infinity};g.k=Cr.prototype;g.k.addEventListener=function(){};
g.k.removeEventListener=function(){};
g.k.dispatchEvent=function(){return!1};
g.k.abort=function(){};
g.k.remove=function(){};
g.k.appendBuffer=function(){};var Qda=/action_display_post/;Fr.prototype.getName=function(){return this.name};
Fr.prototype.getId=function(){return this.id};
Fr.prototype.getIsDefault=function(){return this.isDefault};
Fr.prototype.toString=function(){return this.name};
Fr.prototype.getName=Fr.prototype.getName;Fr.prototype.getId=Fr.prototype.getId;Fr.prototype.getIsDefault=Fr.prototype.getIsDefault;g.t(Gr,g.N);g.k=Gr.prototype;g.k.mh=function(){return g.Cb(this.g,function(a){return a.info.video?2==a.info.video.projectionType:!1})};
g.k.nh=function(){return g.Cb(this.g,function(a){return a.info.video?3==a.info.video.projectionType:!1})};
g.k.ih=function(){return g.Cb(this.g,function(a){return a.info.video?4==a.info.video.projectionType:!1})};
g.k.Nk=function(){return g.Cb(this.g,function(a){return a.info.video?1==a.info.video.stereoLayout:!1})};
g.k.BN=function(a){var b=a.getElementsByTagName("Representation");if(0<a.getElementsByTagName("SegmentList").length||0<a.getElementsByTagName("SegmentTemplate").length){this.ug=this.o=!0;this.B||(this.B=new Ida);Mda(this.B,a,this.ma);this.O("refresh");for(a=0;a<b.length;a++){var c=Rr(this,b[a]),d=this.isLive&&g.$p(c)&&this.la;if(!this.g[c.id]){var e=Lr(rr(b[a],"BaseURL").textContent),f=rr(b[a],"Initialization"),h=qr(f,"sourceURL");f=wp(qr(f,"range"));d&&(h="",f=void 0);this.g[c.id]=new ir(e,c,h,null===
f?void 0:f)}c=this.g[c.id];e=qr(b[a],"id","AdaptationSet");e=""!=e?e:qr(b[a],"mimetype","AdaptationSet");h=this.B;e=h.l[c.info.id]||h.i[e]||h.g||null;h=e.g;!this.l&&e.getStreamTimeOffset()&&(this.l=e.getStreamTimeOffset());if(e.l)for(d=[],h=g.p(h),f=h.next();!f.done;f=h.next()){f=f.value;for(var l=c.info.id,m=8*c.info.g,n=f.Oa,q=f.startSecs,r=e.C.split("$$"),u=0;u<r.length;u++)r[u]=r[u].replace("$RepresentationID$",l),r[u]=r[u].replace("$Number$",n.toString()),r[u]=r[u].replace("$Bandwidth$",m.toString()),
r[u]=r[u].replace("$Time$",q.toString());d.push(new uo(f.Oa,f.startSecs,f.durationSecs,f.g,r.join("$"),null,f.i))}else{e=pb(rr(b[a],"SegmentList").getElementsByTagName("SegmentURL"),e.B);f=[];for(l=0;l<e.length;l++)f.push(dea(e[l],h[l],d));d=f}c.update(d,this.isLive,this.X)}Nda(this.B);return!0}this.duration=sr(qr(a,"mediaPresentationDuration"));a:{for(a=0;a<b.length;a++){h=b[a];c=Rr(this,h);e=rr(h,"BaseURL");d=Lr(e.textContent);f=rr(h,"SegmentBase");h=wp(f.attributes.indexRange.value);f=wp(f.getElementsByTagName("Initialization")[0].attributes.range.value);
e=parseInt(e.getAttribute(Pr(this,"contentLength")),10);c=new zr(d,c,f,h,e,NaN);if(!c){b=!1;break a}Jr(this,c)}b=!0}return b};
g.k.lG=function(a){if(this.ba())return this;this.V=a.status;a=a.responseText;a=(new DOMParser).parseFromString(a,"text/xml").getElementsByTagName("MPD")[0];this.J=1E3*sr(qr(a,"minimumUpdatePeriod"))||Infinity;if(!this.W){var b;a:{if(a.attributes)for(b=0;b<a.attributes.length;b++)if("http://youtube.com/yt/2012/10/10"===a.attributes[b].value){b=a.attributes[b].name.split(":")[1];break a}b=""}this.ca=b}this.isLive=Infinity>this.J&&this.na;this.X=parseInt(qr(a,Pr(this,"earliestMediaSequence")),10)||0;
if(b=Date.parse(tr(qr(a,Pr(this,"mpdResponseTime")))))this.K=((0,g.E)()-b)/1E3;this.isLive&&0>=a.getElementsByTagName("SegmentTimeline").length||(0,g.Fp)(a.getElementsByTagName("Period"),this.BN,this);this.F=2;this.O("loaded");Ur(this);return this};
g.k.nG=function(a){this.V=a.Cj.status;this.F=3;this.O("loaderror");return g.Jf(a.Cj)};
g.k.refresh=function(){if(1!=this.F&&!this.ba()){var a=g.Dd(this.sourceUrl,{start_seq:eea(this).toString()});g.Pf(Sr(this,a),function(){})}};
g.k.resume=function(){Ur(this)};
g.k.Bc=function(){if(this.i&&this.C&&Vr(this))return Vr(this);var a=this.g,b=!1,c=NaN,d=NaN,e;for(e in a){var f=a[e],h=f.index;h.Nb()&&(f.l&&(b=!0),h=h.Xh(),f.info.audio&&(isNaN(c)||h<c)?c=h:f.info.isVideo()&&(isNaN(d)||h<d)&&(d=h))}return b||isNaN(d)?c:Math.min(c,d)};
g.k.Ib=function(){if(this.i&&this.rh&&this.l&&this.rh-this.l)return this.rh&&this.l?this.rh-this.l:0;var a=this.g,b;for(b in a){var c=a[b].index;if(c.Nb())return c.Ib()}return 0};
g.k.getStreamTimeOffset=function(){return this.l};
var Mr=null,Nr=!1,Qr={commentary:1,alternate:2,dub:3,main:4};var Et={iR:1,jR:2,kR:3,1:"LOAD_POLICY_ALWAYS",2:"LOAD_POLICY_BY_PREFERENCE",3:"LOAD_POLICY_BY_REQUEST"};g.t(es,g.N);es.prototype.add=function(a,b){!this.g[a]&&(b.Jo||b.Ko||b.Qn)&&(this.g[a]=g.Tb(b),this.O("vast_info_card_add",a))};
es.prototype.remove=function(a){var b=this.get(a);delete this.g[a];return b};
es.prototype.get=function(a){return this.g[a]||null};
es.prototype.isEmpty=function(){return g.Mb(this.g)};var pQ={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},qQ;a:{var rQ=g.Oc;rQ=rQ.toLowerCase();if(-1!=rQ.indexOf("android")){var sQ=rQ.match(/android\s*(\d+(\.\d+)?)[^;|)]*[;)]/);if(sQ){var tQ=parseFloat(sQ[1]);if(100>tQ){qQ=tQ;break a}}var uQ=rQ.match("("+g.Gb(pQ).join("|")+")");qQ=uQ?pQ[uQ[0]]:0}else qQ=void 0}var wt=qQ,vt=0<=wt;var zea={RED:"red",aT:"white"};var yea={mP:"adunit",eQ:"detailpage",jQ:"editpage",lQ:"embedded",fR:"leanback",bS:"previewpage",cS:"profilepage",QS:"unplugged",XR:"playlistoverview",AS:"sponsorshipsoffer"};g.k=fs.prototype;g.k.append=function(a){this.g.webkitSourceAppend(this.i,a)};
g.k.abort=function(){this.g.webkitSourceAbort(this.i)};
g.k.MO=function(){return this.g.webkitSourceState==this.g.SOURCE_CLOSED?new kea:this.g.webkitSourceBuffered(this.i)};
g.k.OO=function(){return this.l};
g.k.SO=function(a){this.l=a;this.g.webkitSourceTimestampOffset(this.i,a)};g.k=gs.prototype;g.k.addEventListener=function(a,b,c){this.g.addEventListener(a,b,c)};
g.k.removeEventListener=function(a,b,c){this.g.removeEventListener(a,b,c)};
g.k.iJ=function(){return this.g.webkitMediaSourceURL};
g.k.addSourceBuffer=function(a){var b=(this.l++).toString();this.g.webkitSourceAddId(b,a);a=new fs(this.g,b);this.sourceBuffers.push(a);return a};
g.k.removeSourceBuffer=function(a){for(var b=0;b<this.sourceBuffers.length;b++)if(a===this.sourceBuffers[b]){this.g.webkitSourceRemoveId(a.i);for(a=b+1;a<this.sourceBuffers.length;a++)this.sourceBuffers[a-1]=this.sourceBuffers[a];this.sourceBuffers.pop();break}};
g.k.PO=function(){switch(this.g.webkitSourceState){case this.g.SOURCE_CLOSED:return"closed";case this.g.SOURCE_OPEN:return"open";case this.g.SOURCE_ENDED:return"ended"}return""};
g.k.endOfStream=function(){this.g.webkitSourceEndOfStream(this.g.EOS_NO_ERROR)};
g.k.QO=function(){g.gb(this.sourceBuffers)};
g.k.NO=function(){return this.i};
g.k.RO=function(a){this.i=a;this.g.webkitSourceSetDuration&&this.g.webkitSourceSetDuration(a)};var Zy=!1;g.t(ts,g.N);g.k=ts.prototype;g.k.appendBuffer=function(a,b,c){this.i=!1;c&&(this.l=c);b&&(b.g.info.Fc&&(this.K=this.l),3==b.type&&(this.u=b));this.supports(0)?this.g.appendBuffer(a):this.g.append(a)};
g.k.abort=function(){try{this.g.abort()}catch(a){}this.l=this.u=null};
g.k.remove=function(a,b){this.i=!1;this.g.remove(a,b)};
g.k.lp=function(){return Zy&&this.F?this.N:this.g.appendWindowStart};
g.k.mt=function(){return this.g.appendWindowEnd};
g.k.Hv=function(a,b){Zy&&this.F?(this.N=a,this.g.appendWindowEnd=b):a>this.lp()?(this.g.appendWindowEnd=b,this.g.appendWindowStart=a):(this.g.appendWindowStart=a,this.g.appendWindowEnd=b)};
g.k.At=function(){return this.B};
g.k.lr=function(a){Zy?this.B=a:this.supports(1)&&(this.g.timestampOffset=a)};
g.k.Fb=function(){return Zy?this.B:this.supports(1)?this.g.timestampOffset:0};
g.k.Dd=function(a){if(void 0===a?0:a)return this.i||this.ie()||(this.C=this.Dd(!1),this.i=!0),this.C;try{return this.g.buffered}catch(b){return hs([],[])}};
g.k.ie=function(){return this.g.updating};
g.k.fj=function(){return this.l};
g.k.mp=function(){return this.K};
g.k.ww=function(a,b){this.J!=a&&(this.supports(4),this.g.changeType(b));this.J=a};
g.k.np=function(){return this.u};
g.k.isView=function(){return!1};
g.k.supports=function(a){switch(a){case 1:return void 0!=this.g.timestampOffset;case 0:return!!this.g.appendBuffer;case 2:return!!this.g.remove;case 3:return!(!this.g.addEventListener||!this.g.removeEventListener);case 4:return!!this.g.changeType;default:return!1}};
g.k.ys=function(){return!this.ie()};
g.k.isLocked=function(){return!1};
g.k.Ta=function(a){a.to=""+this.g.timestampOffset;a.up=""+ +this.ie();a.aw=(this.g.appendWindowStart||0).toFixed(3)+"-"+(this.g.appendWindowEnd||Infinity).toFixed(3);try{a.bu=is(this.g.buffered)}catch(b){}return qs(a)};
g.k.U=function(){this.supports(3)&&(this.g.removeEventListener("updateend",this.o),this.g.removeEventListener("error",this.o));g.N.prototype.U.call(this)};g.t(us,g.N);g.k=us.prototype;g.k.appendBuffer=function(a,b,c){if(this.g.lp()!=this.B+this.i||this.g.mt()!=this.u+this.i||this.g.Fb()!=this.o+this.i)this.g.supports(1),this.g.Hv(this.B+this.i,this.u+this.i),this.g.lr(this.o+this.i);this.g.appendBuffer(a,b,c)};
g.k.abort=function(){this.g.abort()};
g.k.remove=function(a,b){this.g.remove(a+this.i,b+this.i)};
g.k.Hv=function(a,b){this.B=a;this.u=b};
g.k.At=function(){return this.o+this.i};
g.k.lp=function(){return this.B};
g.k.mt=function(){return this.u};
g.k.lr=function(a){this.o=a};
g.k.Fb=function(){return this.o};
g.k.Dd=function(a){a=this.g.Dd(void 0===a?!1:a);return os(a,this.i,this.F)};
g.k.ie=function(){return this.g.ie()};
g.k.fj=function(){return this.g.fj()};
g.k.mp=function(){return this.g.mp()};
g.k.ww=function(a,b){return this.g.ww(a,b)};
g.k.supports=function(a){return this.g.supports(a)};
g.k.np=function(){return this.g.np()};
g.k.isView=function(){return!0};
g.k.ys=function(){return this.g.ys()?this.l:!1};
g.k.isLocked=function(){return this.C&&!this.l};
g.k.Ta=function(a){return this.g.Ta(a)+(";vw."+this.i+"-"+this.F)};
g.k.U=function(){pn(this.g,this.J);g.N.prototype.U.call(this)};
g.k.isActive=function(){return this.l};
g.k.setActive=function(a){this.l=a;this.C=this.C||this.l};vs.prototype.dispose=function(){if(!this.ba){if(this.i)try{URL.revokeObjectURL(this.g)}catch(a){}this.l=!0}};
vs.prototype.ba=function(){return this.l};
vs.prototype.toString=function(){return"MediaResource {"+this.g+"}"};g.t(ws,g.A);g.k=ws.prototype;g.k.getDuration=function(){return this.l.duration};
g.k.isView=function(){return this.B};
g.k.ie=function(){return!!(this.g&&this.g.ie()||this.i&&this.i.ie())};
g.k.QM=function(){!this.ba()&&xs(this)&&this.o&&(this.o(this),this.o=null)};
g.k.PM=function(){this.dispose()};Es.prototype.canPlayType=function(a,b){var c=a.canPlayType?a.canPlayType(b):!1;Yl?c=c||Hka[b]:2.2===wt?c=c||Ika[b]:Ol()&&(c=c||Jka[b]);return!!c};
Es.prototype.isTypeSupported=function(a){return this.u?window.cast.receiver.platform.canDisplayType(a):as(a)};
Es.prototype.disableAv1=function(){this.C=!0};
var Ika={'video/mp4; codecs="avc1.42001E, mp4a.40.2"':"maybe"},Jka={"application/x-mpegURL":"maybe"},Hka={"application/x-mpegURL":"maybe"};Vs.prototype.l=function(a,b){var c=Math.pow(this.alpha,a);this.i=b*(1-c)+c*this.i;this.o+=a};
Vs.prototype.g=function(){return this.i/(1-Math.pow(this.alpha,this.o))};Xs.prototype.l=function(a,b){var c=Math.min(this.i,Math.max(1,Math.round(a*this.resolution)));c+this.valueIndex>=this.i&&(this.o=!0);for(;c--;)this.values[this.valueIndex]=b,this.valueIndex=(this.valueIndex+1)%this.i;this.B=!0};
Xs.prototype.g=function(){return this.C?(Ys(this,this.u-this.C)+Ys(this,this.u)+Ys(this,this.u+this.C))/3:Ys(this,this.u)};var vea=/^([0-9\.]+):([0-9\.]+)$/;var mt="area120-boutique blogger books docs duo google-live google-one play chat hangouts-meet photos-edu picasaweb gmail jamboard".split(" ");g.t(Lt,g.A);g.k=Lt.prototype;g.k.aa=function(a){return g.P(this.experiments,a)};
g.k.Ld=function(a,b){b=void 0===b?!1:b;this.Ka=jt(this.Ka,a.video_id);this.zb=jt(this.zb,a.eventid);var c=[],d;for(d in vQ){var e=vQ[d],f=a[e];void 0!=f&&(f!=this.deviceParams[e]&&c.push(e),this.deviceParams[e]=f)}!b&&0<c.length&&this.uo&&(c.sort(),g.Lm(new g.Gm("Player client parameters changed after startup",c)));this.userAge=g.it(this.userAge,a.user_age);this.W=jt(this.W,a.user_display_image);g.sq(this.W)||(this.W="");this.ma=jt(this.ma,a.user_display_name);this.Kg=jt(this.Kg,a.user_gender);this.Be=
jt(this.Be,a.csi_page_type);this.csiServiceName=jt(this.csiServiceName,a.csi_service_name);this.Yd=Q(this.Yd,a.enablecsi);this.pageId=jt(this.pageId,a.pageid);if(c=a.enabled_engage_types)this.Te=new Set(c.split(","))};
g.k.getVideoUrl=function(a,b,c,d,e){b={list:b};c&&(e?b.time_continue=c:b.t=c);c=g.Ot(this);d&&"www.youtube.com"==c?d="https://youtu.be/"+a:g.Jt(this)?(d="https://"+c+"/fire",b.v=a):(d=this.protocol+"://"+c+"/watch",b.v=a,Yl&&(a=Uk())&&(b.ebc=a));return g.Dd(d,b)};
g.k.getVideoEmbedCode=function(a,b,c){a="https://"+g.Ot(this)+"/embed/"+a;c&&(a=g.Dd(a,{list:c}));c=b.width;b=b.height;a=g.jd(a);return'<iframe width="'+c+'" height="'+b+'" src="'+a+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
g.k.supportsGaplessAudio=function(){return g.$r&&!Yl&&74<=Ll()||g.Is&&g.Xd(68)?!0:!1};
g.k.getPlayerType=function(){return this.deviceParams.cplayer};
var vQ={HP:"cbrand",IP:"cbr",JP:"cbrver",UQ:"c",XQ:"cver",WQ:"ctheme",VQ:"cplayer",uR:"cmodel",yR:"cnetwork",DR:"cos",ER:"cosver",KR:"cplatform"},Aea=["www.youtube-nocookie.com","youtube.googleapis.com"];var wQ={},du=(wQ.AD_MARKER="ytp-ad-progress",wQ.CHAPTER_MARKER="ytp-chapter-marker",wQ.TIME_MARKER="ytp-time-marker",wQ);g.eu.prototype.getId=function(){return this.id};
g.eu.prototype.toString=function(){return"CueRange{"+this.namespace+":"+this.id+"}["+fu(this.start)+", "+fu(this.end)+"]"};
g.eu.prototype.contains=function(a,b){return a>=this.start&&(a<this.end||a===this.end&&this.start===this.end)&&(null==b||a<b&&b<=this.end)};
var Bea=1;g.eu.prototype.getId=g.eu.prototype.getId;ju.prototype.clone=function(a){return new ju(this.flavor,a,this.l,this.experiments)};
ju.prototype.Ta=function(){return{flavor:this.flavor,keySystem:this.g}};
ju.prototype.Pd=function(){switch(this.g){case "com.youtube.playready":return"PRY";case "com.microsoft.playready":return"PRM";case "com.widevine.alpha":return"WVA";case "com.youtube.widevine.l3":return"WVY";case "com.youtube.widevine.forcehdcp":return"WVYF";case "com.youtube.fairplay":return"FPY";case "com.apple.fps.1_0":return"FPA";default:return this.g}};
var xQ={},ru=(xQ.playready=["com.youtube.playready","com.microsoft.playready"],xQ.widevine=["com.youtube.widevine.forcehdcp","com.youtube.widevine.l3","com.widevine.alpha"],xQ);tu.prototype.getLanguageInfo=function(){return this.Ab};
tu.prototype.toString=function(){return this.Ab.name};
tu.prototype.getLanguageInfo=tu.prototype.getLanguageInfo;uu.prototype.isLocked=function(){return this.l&&!!this.i&&this.i===this.g};
uu.prototype.o=function(a){return a.video?Bu(this,a.video.quality):!1};
var ZF=wu("auto","hd1080",!1,"l"),DC=wu("auto","large",!1,"l"),yu=wu("auto","auto",!1,"p");wu("small","auto",!1,"p");Cu.prototype.cj=function(a){a=a||yu;for(var b=(0,g.hf)(this.videoInfos,function(h){return a.o(h)}),c=[],d={},e=0;e<b.length;e++){var f=b[e].xa();
d[f.quality]||(c.push(f),d[f.quality]=!0)}return c};
Cu.prototype.getAvailableAudioTracks=function(){return this.audioTracks};
Cu.prototype.g=function(){return!!this.i};g.k=g.Gu.prototype;g.k.getId=function(){return this.id};
g.k.getName=function(){return this.name};
g.k.isServable=function(){return this.g};
g.k.sc=function(){return this.url};
g.k.toString=function(){return this.languageCode+": "+g.Hu(this)+" - "+this.vssId};
g.k.isValid=function(){return!(!this.languageCode||this.translationLanguage&&!this.translationLanguage.languageCode)};var Ju={iurl:"default.jpg",iurlmq:"mqdefault.jpg",iurlhq:"hqdefault.jpg",iurlsd:"sddefault.jpg",iurlpop1:"pop1.jpg",iurlpop2:"pop2.jpg",iurlhq720:"hq720.jpg",iurlmaxres:"maxresdefault.jpg"},Mu={120:"default.jpg",320:"mqdefault.jpg",480:"hqdefault.jpg",560:"pop1.jpg",640:"sddefault.jpg",854:"pop2.jpg",1280:"hq720.jpg"};var yQ;var zQ=g.Oc,AQ=zQ.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!AQ||2>AQ.length)yQ=void 0;else{var BQ=zQ.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);yQ=BQ&&6==BQ.length?Number(BQ[5].replace("_",".")):0}var tx=yQ,OJ=0<=tx;OJ&&0<=g.Oc.search("Safari")&&g.Oc.search("Version");var Qea;g.t(Qu,Ln);g.t(Ru,Ln);Qea=new Mn("aft-recorded",Qu);g.Bv=new Mn("timing-sent",Ru);var CQ=window,xv=CQ.performance||CQ.mozPerformance||CQ.msPerformance||CQ.webkitPerformance||new Pea;var $u=!1,Rea=(0,g.x)(xv.clearResourceTimings||xv.webkitClearResourceTimings||xv.mozClearResourceTimings||xv.msClearResourceTimings||xv.oClearResourceTimings||g.La,xv);var gv=g.v.ytLoggingLatencyUsageStats_||{};g.Ia("ytLoggingLatencyUsageStats_",gv,void 0);ev.prototype.tick=function(a,b,c){hv(this,"tick_"+a+"_"+b)||g.Im("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ev.prototype.info=function(a,b){var c=Object.keys(a).join("");hv(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,g.Im("latencyActionInfo",c))};
ev.prototype.span=function(a,b){var c=Object.keys(a).join("");hv(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,g.Im("latencyActionSpan",a))};var DQ={},nv=(DQ.ad_to_ad="LATENCY_ACTION_AD_TO_AD",DQ.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",DQ.app_startup="LATENCY_ACTION_APP_STARTUP",DQ["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",DQ["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",DQ["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",DQ.browse="LATENCY_ACTION_BROWSE",DQ.channels="LATENCY_ACTION_CHANNELS",DQ.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",DQ["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
DQ["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",DQ["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",DQ["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",DQ["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",DQ["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",DQ["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",DQ["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",DQ["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",
DQ["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",DQ.chips="LATENCY_ACTION_CHIPS",DQ["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",DQ["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",DQ.embed="LATENCY_ACTION_EMBED",DQ.home="LATENCY_ACTION_HOME",DQ.library="LATENCY_ACTION_LIBRARY",DQ.live="LATENCY_ACTION_LIVE",DQ.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",DQ.onboarding="LATENCY_ACTION_KIDS_ONBOARDING",DQ.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
DQ.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",DQ.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",DQ["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",DQ["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",DQ.prebuffer="LATENCY_ACTION_PREBUFFER",DQ.prefetch="LATENCY_ACTION_PREFETCH",DQ.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",DQ.profile_switcher="LATENCY_ACTION_KIDS_PROFILE_SWITCHER",DQ.results="LATENCY_ACTION_RESULTS",DQ.search_ui="LATENCY_ACTION_SEARCH_UI",
DQ.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",DQ.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",DQ.settings="LATENCY_ACTION_SETTINGS",DQ.tenx="LATENCY_ACTION_TENX",DQ.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",DQ.watch="LATENCY_ACTION_WATCH",DQ.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",DQ["watch,watch7"]="LATENCY_ACTION_WATCH",DQ["watch,watch7_html5"]="LATENCY_ACTION_WATCH",DQ["watch,watch7ad"]="LATENCY_ACTION_WATCH",DQ["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",DQ.wn_comments=
"LATENCY_ACTION_LOAD_COMMENTS",DQ.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",DQ["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",DQ["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",DQ["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",DQ["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",DQ["video.video_editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",DQ["video.video_editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",DQ["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
DQ.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",DQ.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",DQ),EQ={},tv=(EQ.ad_allowed="adTypesAllowed",EQ.yt_abt="adBreakType",EQ.ad_cpn="adClientPlaybackNonce",EQ.ad_docid="adVideoId",EQ.yt_ad_an="adNetworks",EQ.ad_at="adType",EQ.browse_id="browseId",EQ.p="httpProtocol",EQ.t="transportProtocol",EQ.cpn="clientPlaybackNonce",EQ.ccs="creatorInfo.creatorCanaryState",EQ.cseg="creatorInfo.creatorSegment",EQ.csn="clientScreenNonce",
EQ.docid="videoId",EQ.GetHome_rid="requestIds",EQ.GetSearch_rid="requestIds",EQ.GetPlayer_rid="requestIds",EQ.GetWatchNext_rid="requestIds",EQ.GetBrowse_rid="requestIds",EQ.GetLibrary_rid="requestIds",EQ.is_continuation="isContinuation",EQ.is_nav="isNavigation",EQ.b_p="kabukiInfo.browseParams",EQ.is_prefetch="kabukiInfo.isPrefetch",EQ.is_secondary_nav="kabukiInfo.isSecondaryNav",EQ.prev_browse_id="kabukiInfo.prevBrowseId",EQ.query_source="kabukiInfo.querySource",EQ.voz_type="kabukiInfo.vozType",EQ.yt_lt=
"loadType",EQ.mver="creatorInfo.measurementVersion",EQ.yt_ad="isMonetized",EQ.nr="webInfo.navigationReason",EQ.nrsu="navigationRequestedSameUrl",EQ.ncnp="webInfo.nonPreloadedNodeCount",EQ.pnt="performanceNavigationTiming",EQ.prt="playbackRequiresTap",EQ.plt="playerInfo.playbackType",EQ.pis="playerInfo.playerInitializedState",EQ.paused="playerInfo.isPausedOnLoad",EQ.yt_pt="playerType",EQ.fmt="playerInfo.itag",EQ.yt_pl="watchInfo.isPlaylist",EQ.yt_pre="playerInfo.preloadType",EQ.yt_ad_pr="prerollAllowed",
EQ.pa="previousAction",EQ.yt_red="isRedSubscriber",EQ.rce="mwebInfo.responseContentEncoding",EQ.scrh="screenHeight",EQ.scrw="screenWidth",EQ.st="serverTimeMs",EQ.ssdm="shellStartupDurationMs",EQ.aq="tvInfo.appQuality",EQ.br_trs="tvInfo.bedrockTriggerState",EQ.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",EQ.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",EQ.label="tvInfo.label",EQ.is_mdx="tvInfo.isMdx",EQ.preloaded="tvInfo.isPreloaded",EQ.upg_player_vis="playerInfo.visibilityState",
EQ.query="unpluggedInfo.query",EQ.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",EQ.yt_vst="videoStreamType",EQ.vph="viewportHeight",EQ.vpw="viewportWidth",EQ.yt_vis="isVisible",EQ.rcl="mwebInfo.responseContentLength",EQ.GetSettings_rid="requestIds",EQ.GetTrending_rid="requestIds",EQ.GetMusicSearchSuggestions_rid="requestIds",EQ.REQUEST_ID="requestIds",EQ),Sea="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
FQ={},uv=(FQ.ccs="CANARY_STATE_",FQ.mver="MEASUREMENT_VERSION_",FQ.pis="PLAYER_INITIALIZED_STATE_",FQ.yt_pt="LATENCY_PLAYER_",FQ.pa="LATENCY_ACTION_",FQ.yt_vst="VIDEO_STREAM_TYPE_",FQ),Tea="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");var GQ=window;GQ.ytcsi&&(GQ.ytcsi.info=g.qv,GQ.ytcsi.tick=g.rv);var nH=16/9,HQ=[.25,.5,.75,1,1.25,1.5,1.75,2],Kka=HQ.concat([3,4,5,6,7,8,9,10,15]);g.t(Cv,g.A);
Cv.prototype.initialize=function(a,b){for(var c=this,d=g.p(Object.keys(a)),e=d.next();!e.done;e=d.next()){e=g.p(a[e.value]);for(var f=e.next();!f.done;f=e.next())if(f=f.value,f.Fc)for(var h=g.p(Object.keys(f.Fc)),l=h.next();!l.done;l=h.next())if(l=l.value,ru[l])for(var m=g.p(ru[l]),n=m.next();!n.done;n=m.next())n=n.value,this.i[n]=this.i[n]||new ju(l,n,f.Fc[l],this.experiments),this.o[l]=this.o[l]||{},this.o[l][f.mimeType]=!0}Rl()&&(this.i["com.youtube.fairplay"]=new ju("fairplay","com.youtube.fairplay","",
this.experiments),this.o.fairplay={"audio/mp4":!0,"video/mp4":!0});this.g=Gea(b,this.useCobaltWidevine,g.iq(this.experiments,"html5_hdcp_probing_stream_url")).filter(function(q){return!!c.i[q]})};
Cv.prototype.aa=function(a){return g.P(this.experiments,a)};g.k=Ev.prototype;g.k.Pd=function(){return this.ya};
g.k.Um=function(){return null};
g.k.Ky=function(){var a=this.Um();return a?(a=g.Zk(a.g),Number(a.expire)):NaN};
g.k.Ev=function(){};
g.k.getHeight=function(){return this.ya.xa().height};g.t(Jv,Ev);Jv.prototype.Ky=function(){return this.expiration};
Jv.prototype.Um=function(){if(!this.g||this.g.ba()){var a=this.i;afa(a);var b=["#EXTM3U","#EXT-X-INDEPENDENT-SEGMENTS"],c={};a:if(a.g)var d=a.g;else{d="";for(var e=g.p(a.l),f=e.next();!f.done;f=e.next())if(f=f.value,f.Ab){if(f.Ab.getIsDefault()){d=f.Ab.getId();break a}d||(d=f.Ab.getId())}}e=g.p(a.l);for(f=e.next();!f.done;f=e.next())f=f.value,f.Ab&&f.Ab.getId()!==d||(c[f.itag]=f);d=g.p(a.i);for(e=d.next();!e.done;e=d.next())e=e.value,e.audioItag&&b.push(Zea(a,c[e.audioItag],e));d=g.p(a.i);for(e=d.next();!e.done;e=
d.next())e=e.value,e.audioItag&&(f=a,b.push($ea(f,e,c[e.audioItag])),b.push(Gv(f,e.url,"")));a="data:application/x-mpegurl;charset=utf-8,"+encodeURIComponent(b.join("\n"));this.g=new vs(a)}return this.g};g.t(Lv,Ev);Lv.prototype.Um=function(){return new vs(this.g.sc())};
Lv.prototype.Ev=function(){this.g=Dq(this.g)};g.t(Mv,Ev);Mv.prototype.Um=function(){return new vs(this.g)};var Ov=null;var Wv=null;g.t(ew,g.N);ew.prototype.ej=function(a,b){for(var c=fw(this,b);0<=c;){var d=this.levels[c];if(d.Nb(Math.floor(a/(d.columns*d.rows)))&&(d=d.ej(a)))return d;c--}return this.levels[0].ej(a)};
ew.prototype.U=function(){this.g&&(this.g=this.g.onload=null);g.N.prototype.U.call(this)};g.k=g.iw.prototype;g.k.od=function(){return this.width};
g.k.getHeight=function(){return this.height};
g.k.Py=ba(2);g.k.ot=function(){return this.l};
g.k.isDefault=function(){return-1!==this.o.indexOf("default")};
g.k.Nb=function(a){return this.loaded.has(a)};
g.k.sc=function(a){var b=this.u;b=b.replace("$N",this.o);b=b.replace("$L",this.level.toString());b=b.replace("$M",a.toString());this.signature&&(b=g.Dd(b,{sigh:this.signature}));return wq(b)};
g.k.ej=function(a){a>=this.Cu()&&this.Vm();var b=Math.floor(a/(this.columns*this.rows)),c=this.columns*this.rows,d=a%c;a=d%this.columns;d=Math.floor(d/this.columns);var e=this.Vm()+1-c*b;if(e<this.columns){var f=e;c=1}else f=this.columns,c=e<c?Math.ceil(e/this.columns):this.rows;return{url:this.sc(b),column:a,columns:f,row:d,rows:c,Dq:this.width*f,Cq:this.height*c}};
g.k.wq=function(a){var b=this.ot()-1;return g.Be(0===this.g?Math.round(a*this.l/this.videoLength):Math.round(1E3*a/this.g),0,b)};
g.k.Vm=function(){return this.l-1};
g.k.Cu=function(){return this.l?0:-1};
g.k.uA=function(){};g.t(jw,ew);jw.prototype.i=function(a,b){for(var c=[],d=a.split("|"),e=d[0],f=1;f<d.length;f++){var h=this.u(f-1,e,d[f],b);(this.C||180>h.getHeight())&&c.push(h)}return c};
jw.prototype.u=function(a,b,c,d){return new g.iw(a,b,c,d)};g.t(lw,g.iw);g.k=lw.prototype;g.k.ot=function(){return this.i.Bk()};
g.k.wq=function(a){var b=this.rows*this.columns*this.B,c=this.i,d=c.qb();a=c.Df(a);return a>d-b?-1:a};
g.k.Vm=function(){return this.i.qb()};
g.k.Cu=function(){return this.i.Cf()};
g.k.uA=function(a){this.i=a};g.t(mw,jw);mw.prototype.i=function(a,b){return jw.prototype.i.call(this,"$N|"+a,b)};
mw.prototype.u=function(a,b,c){return new lw(a,b,c,this.isLive)};var IQ={},ufa=(IQ.ALWAYS=1,IQ.BY_REQUEST=3,IQ.UNKNOWN=void 0,IQ),JQ={},Lfa=(JQ.COLOR_PRIMARIES_BT709="bt709",JQ.COLOR_PRIMARIES_BT2020="bt2020",JQ.COLOR_PRIMARIES_UNKNOWN=null,JQ.COLOR_PRIMARIES_UNSPECIFIED=null,JQ),KQ={},tfa=(KQ.COLOR_TRANSFER_CHARACTERISTICS_BT709="bt709",KQ.COLOR_TRANSFER_CHARACTERISTICS_BT2020_10="bt2020",KQ.COLOR_TRANSFER_CHARACTERISTICS_SMPTEST2084="smpte2084",KQ.COLOR_TRANSFER_CHARACTERISTICS_ARIB_STD_B67="arib-std-b67",KQ.COLOR_TRANSFER_CHARACTERISTICS_UNKNOWN=null,KQ.COLOR_TRANSFER_CHARACTERISTICS_UNSPECIFIED=
null,KQ),LQ={},uw=(LQ.FAIRPLAY="fairplay",LQ.PLAYREADY="playready",LQ.WIDEVINE="widevine",LQ.CLEARKEY=null,LQ.FLASHACCESS=null,LQ.UNKNOWN=null,LQ.WIDEVINE_CLASSIC=null,LQ),MQ={},Pfa=(MQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_UNKNOWN="UNKNOWN",MQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_NORMAL="NORMAL",MQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_LOW="LOW",MQ.MDE_STREAM_OPTIMIZATIONS_RENDERER_LATENCY_ULTRA_LOW="ULTRALOW",MQ),NQ={},Ifa=(NQ.UNKNOWN=0,NQ.RECTANGULAR=1,NQ.EQUIRECTANGULAR=2,NQ.EQUIRECTANGULAR_THREED_TOP_BOTTOM=
3,NQ.MESH=4,NQ),OQ={},Kfa=(OQ.SPATIAL_AUDIO_TYPE_NONE=0,OQ.SPATIAL_AUDIO_TYPE_AMBISONICS_5_1=1,OQ.SPATIAL_AUDIO_TYPE_AMBISONICS_QUAD=2,OQ.SPATIAL_AUDIO_TYPE_FOA_WITH_NON_DIEGETIC=3,OQ),PQ={},Jfa=(PQ.STEREO_LAYOUT_UNKNOWN=0,PQ.STEREO_LAYOUT_LEFT_RIGHT=1,PQ.STEREO_LAYOUT_TOP_BOTTOM=2,PQ),QQ={},Hfa=(QQ.FORMAT_STREAM_TYPE_UNKNOWN=0,QQ.FORMAT_STREAM_TYPE_OTF=3,QQ);g.t(g.yw,g.N);g.k=g.yw.prototype;g.k.Ld=function(a,b){b?(lt(a),xw(this,a),cx(this)&&Uw(this)):(a=a||{},Bw(this,a),Aw(this,a),this.O("dataupdated"))};
g.k.L=function(){return this.Sa};
g.k.aa=function(a){return g.P(this.Sa.experiments,a)};
g.k.fd=function(){return!this.ra||this.allowLiveDvr};
g.k.Ep=function(){return!!(this.wa&&this.wa.videoInfos&&this.wa.videoInfos.length)};
g.k.YG=function(a){for(var b=g.p(a),c=b.next();!c.done;c=b.next())switch(c=c.value,c.flavor){case "fairplay":c.zf=this.zf;c.Yo=this.Yo;c.Xo=this.Xo;break;case "widevine":c.Un=this.Un}this.ql=a;0<this.ql.length&&(this.fc=this.ql[0]);Uw(this)};
g.k.GK=function(a){this.ba()||(Nw(this,a,!0),g.rv("mrc"),Uw(this))};
g.k.FK=function(a){this.ba()||(this.uc=!1,this.O("dataloaderror",new g.ps("manifest.net.retryexhausted",!0,{backend:"manifest",rc:a.status})))};
g.k.tB=function(){this.ba()||(this.fa.o||this.fa.unsubscribe("refresh",this.tB,this),this.Vx())};
g.k.Vx=function(){if(!this.ra||!this.fc||"fairplay"!=this.fc.flavor){var a=g.Or(this.fa,this.gu);0<a.length&&(this.O("cuepointupdated",a),this.gu+=a.length)}};
g.k.Ao=function(a){var b=this;if(this.ba())return g.Ym();this.zh=this.kf=this.wa=null;var c=this.Sa.deviceParams.c;this.aa("disable_rqs")||(this.kh=/^rq/.test(this.clientPlaybackNonce)||/^r/.test(this.clientPlaybackNonce)&&/UNPLUGGED/.test(c)||rx(this));return $fa(this,a).then(void 0,(0,g.x)(this.fH,this,a)).then(void 0,(0,g.x)(this.hH,this)).then(void 0,(0,g.x)(this.gH,this)).then(function(){if(b.aa("html5_probe_media_capabilities")&&b.wa)return Nea(b.wa).then(b.Mv,void 0,b)})};
g.k.fH=function(a){if(a&&this.hlsvp)return g.Ym();if(this.hlsFormats){a=Lw(this.hlsFormats);Gw(this,"html5_filter_fmp4_in_hls")&&MediaSource&&MediaSource.isTypeSupported&&(a=a.filter(function(c){return MediaSource.isTypeSupported(c.type)}));
this.Hp=cfa(a);var b=this.clientPlaybackNonce;return efa(this.Sa,this.isAd(),a,this.ji,b).then(this.Lv,void 0,this)}return g.Ym()};
g.k.hH=function(){if(this.wl&&this.Hz){var a=this.Sa;var b=this.isAd(),c=ffa(this.wl);a=Fv(a.o,c,Mt(a,b)).then(this.Lv,void 0,this)}else a=g.Ym();return a};
g.k.gH=function(){var a=Lw(this.Tn,this.lt);if(this.hlsvp){var b=this.hlsvp;var c=this.ji,d={cpn:this.clientPlaybackNonce};-1===b.indexOf("/ibw/")&&(d.ibw=c?String(c):"1369843");b={url:g.Dd(b,d),type:"application/x-mpegURL",quality:"auto",itag:"93"};a.push(b)}b=this.Sa;c=this.isAd();d={cpn:this.clientPlaybackNonce,c:this.Sa.deviceParams.c,cver:this.Sa.deviceParams.cver};this.Pq&&(d.ptk=this.Pq,d.oid=this.kC,d.ptchn=this.jC,d.pltype=this.lC);var e=[];a=g.p(a);for(var f=a.next();!f.done;f=a.next()){var h=
f.value;if(h.url){f=new xq(h.url);if(h.s){var l=h.sp,m=mq(decodeURIComponent(h.s));f.set(l,encodeURIComponent(m))}Cq(f);l=g.p(Object.keys(d));for(m=l.next();!m.done;m=l.next())m=m.value,f.set(m,d[m]);h=gr(h.type,h.quality,h.itag,h.width,h.height);e.push(new Lv(h,f))}}return Fv(b.o,e,Mt(b,c)).then(this.Lv,void 0,this)};
g.k.Mv=function(a){this.wa=a;a=this.getAvailableAudioTracks();a=a.concat(this.Yl);for(var b=0;b<this.zs.length;b++)for(var c=this.zs[b],d=0;d<a.length;d++){var e=a[d],f=e.Ab.id==c.audioTrackId;if(e.Ab.isDefault&&b==this.Mx||f){if(c.captionTrackIndices)for(f=0;f<c.captionTrackIndices.length;f++)e.captionTracks[f]=this.captionTracks[c.captionTrackIndices[f]];void 0!==c.defaultCaptionTrackIndex&&(e.Qs=this.captionTracks[c.defaultCaptionTrackIndex]);void 0!==c.forcedCaptionTrackIndex&&(e.ep=this.captionTracks[c.forcedCaptionTrackIndex]);
e.Cs=c.visibility||"UNKNOWN"}}if(this.fc&&this.wa&&this.wa.videoInfos&&!(0>=this.wa.videoInfos.length)&&(a=dr(this.wa.videoInfos[0]),a!=("fairplay"==this.fc.flavor)))for(b=g.p(this.ql),c=b.next();!c.done;c=b.next())if(c=c.value,a==("fairplay"==c.flavor)){this.fc=c;break}};
g.k.Lv=function(a){this.zh=a;this.Mv(new Cu((0,g.Hc)(this.zh,function(b){return b.Pd()})))};
g.k.md=function(){var a={};this.ya&&(a.fmt=Ip(this.ya),this.kc&&Ip(this.kc)!=Ip(this.ya)&&(a.afmt=Ip(this.kc)));a.ei=this.eventId;a.list=this.playlistId;a.cpn=this.clientPlaybackNonce;this.videoId&&(a.v=this.videoId);this.Ri&&(a.infringe=1);this.lh&&(a.splay=1);var b=$w(this);b&&(a.live=b);this.Bi&&(a.autoplay=1);this.Xq&&(a.sdetail=this.Xq);this.jf&&(a.partnerid=this.jf);this.osid&&(a.osid=this.osid);return a};
g.k.Ie=function(){var a=g.Ut(this.Sa)||this.aa("web_l3_storyboard");if(!this.El)if(this.Ea&&this.Ea.storyboards){var b=this.Ea.storyboards,c=b.playerStoryboardSpecRenderer;c&&c.spec?this.El=new jw(c.spec,this.lengthSeconds,void 0,!1,a):(b=b.playerLiveStoryboardSpecRenderer)&&b.spec&&this.fa&&(c=Eb(this.fa.g).index)&&(this.El=new mw(b.spec,this.fa.isLive,c,a))}else this.rr?this.El=new jw(this.rr,this.lengthSeconds,void 0,!1,a):this.Tp&&this.fa&&(b=Eb(this.fa.g).index)&&(this.El=new mw(this.Tp,this.fa.isLive,
b,a));return this.El};
g.k.getStoryboardFormat=function(){if(this.Ea&&this.Ea.storyboards){var a=this.Ea.storyboards;return(a=a.playerStoryboardSpecRenderer||a.playerLiveStoryboardSpecRenderer)&&a.spec||null}return this.rr||this.Tp};
g.k.Bc=function(){return this.fa&&!isNaN(this.fa.Bc())?this.fa.Bc():Pw(this)?0:this.lengthSeconds};
g.k.Ib=function(){return this.fa&&!isNaN(this.fa.Ib())?this.fa.Ib():0};
g.k.getPlaylistSequenceForTime=function(a){if(this.fa&&this.ya){var b=this.fa.g[this.ya.id];if(!b)return null;var c=b.index.Df(a);b=b.index.td(c);return{sequence:c,elapsed:Math.floor(1E3*(a-b))}}return null};
g.k.isValid=function(){return!this.ba()&&!(!this.videoId&&!this.wl)};
g.k.Nb=function(){return cx(this)&&!this.Qi&&!this.Im};
g.k.Gc=function(a){if(30==this.jf)return(a=this.Zf["default.jpg"])?a:this.videoId?g.Dd("//docs.google.com/vt",{id:this.videoId,authuser:this.yc,authkey:this.authKey}):"//docs.google.com/images/doclist/cleardot.gif";a||(a="hqdefault.jpg");var b=this.Zf[a];return b||this.Sa.J||"pop1.jpg"==a||"pop2.jpg"==a||"sddefault.jpg"==a||"hq720.jpg"==a||"maxresdefault.jpg"==a?b:g.Pt(this.Sa,this.videoId,a)};
g.k.ug=function(){return this.ra||this.ff||this.Hm||!(!this.liveUtcStartSeconds||!this.Tk)};
g.k.isOtf=function(){return!!this.fa&&(this.fa.isOtf||!this.ff&&!this.ra&&this.fa.o)};
g.k.getAvailableAudioTracks=function(){return this.wa?0<this.wa.getAvailableAudioTracks().length?this.wa.getAvailableAudioTracks():this.Hp||[]:[]};
g.k.getAudioTrack=function(){var a=this;if(this.kc&&!dr(this.kc))return g.bb(this.getAvailableAudioTracks(),function(d){return d.id==a.kc.id})||this.Yl;
if(this.Hp){if(!this.Cn)for(var b=g.p(this.Hp),c=b.next();!c.done;c=b.next())if(c=c.value,c.Ab.getIsDefault()){this.Cn=c;break}return this.Cn||this.Yl}return this.Yl};
g.k.getPlayerResponse=function(){return this.Ea};
g.k.getPlaylistId=function(){return null};
g.k.xa=function(){return this};
g.k.bi=function(){return this.Sa.getVideoUrl(this.videoId)};
g.k.mh=function(){return!!this.fa&&this.fa.mh()};
g.k.nh=function(){return!!this.fa&&this.fa.nh()};
g.k.ih=function(){return!!this.fa&&this.fa.ih()};
g.k.Nk=function(){return!!this.fa&&this.fa.Nk()};
g.k.isAd=function(){return!!this.adFormat};
g.k.Qd=function(){return this.oauthToken||this.Sa.Gb};
g.k.Az=function(){return!!(this.Ea&&this.Ea.playerConfig&&this.Ea.playerConfig.daiConfig&&this.Ea.playerConfig.daiConfig.enableDai)};
g.k.dD=function(){return this.Np};
g.k.Pv=function(){return this.hp};
g.k.Qv=function(){return this.Yn||this.dd};
g.k.En=function(){return this.fk||this.dd};
g.k.useInnertubeDrmService=function(){if(!(this.fc&&this.Ea&&this.Ea.playerConfig&&this.Ea.playerConfig.webDrmConfig))return!1;var a="playready"===this.fc.flavor&&this.Ea.playerConfig.webDrmConfig.useItdrmForPlayready,b="fairplay"===this.fc.flavor&&this.Ea.playerConfig.webDrmConfig.useItdrmForFairplay;return!!("widevine"===this.fc.flavor&&this.Ea.playerConfig.webDrmConfig.useInnertubeDrmService||a||b)};g.ux.prototype.toString=function(){return this.type+this.id};g.t(g.vx,g.N);g.k=g.vx.prototype;g.k.hasNext=function(a){return this.loop||!!a||this.index+1<this.length};
g.k.ng=function(a){return this.loop||!!a||0<=this.index-1};
g.k.xa=function(a,b,c){a=void 0!==a?a:this.index;a=this.items&&a in this.items?this.items[this.order[a]]:null;var d=null;a&&(b&&(a.autoplay="1"),c&&(a.autonav="1"),d=new g.yw(this.Ac,a),g.C(this,d),d.startSeconds=this.startSeconds||d.clipStart||0,this.listId&&(d.playlistId=this.listId.toString()));return d};
g.k.setShuffle=function(a){this.shuffle=a;a=this.order&&null!=this.order[this.index]?this.order[this.index]:this.index;this.order=[];for(var b=0;b<this.items.length;b++)this.order.push(b);this.index=a;this.Qp++;if(this.shuffle){a=this.order[this.index];for(b=1;b<this.order.length;b++){var c=Math.floor(Math.random()*(b+1)),d=this.order[b];this.order[b]=this.order[c];this.order[c]=d}for(b=0;b<this.order.length;b++)this.order[b]===a&&(this.index=b);this.Qp++}this.O("shuffle")};
g.k.Gc=function(a){a=a||"hqdefault.jpg";var b=this.Zf[a];if(b||this.Ac.J||"sddefault.jpg"===a||"hq720.jpg"===a||"maxresdefault.jpg"===a)return b;if(this.oD.length)return g.Pt(this.Ac,this.oD[0],a)};
g.k.getLength=function(){return this.length};
g.k.loadPlaylist=function(a,b){var c=this;this.hF&&g.rl(g.Dd(a,b),{format:"JSON",onSuccess:function(d,e){Ax(c,e)},
onError:function(){return c.O("error")}})};
g.k.findIndex=function(a){if(a&&(a=a.videoId,!this.items[this.index]||this.items[this.index].video_id!==a))for(var b=0;b<this.items.length;b++)if(this.items[b].video_id===a){this.index=b;break}};
g.k.onReady=function(a){this.un=a;this.loaded&&g.Fj(this.un,0)};
g.k.getPlaylistId=function(){return this.listId?this.listId.toString():null};
g.k.bi=function(){return this.Ac.getVideoUrl(this.xa().videoId,this.getPlaylistId())};
g.k.U=function(){this.un=null;g.Od(this.items);g.N.prototype.U.call(this)};g.WI={};var Lka=OJ&&4>tx?.1:0,fga=new Bx;g.k=Bx.prototype;g.k.bo=null;g.k.getDuration=function(){return this.duration||0};
g.k.getCurrentTime=function(){return this.currentTime||0};
g.k.Tf=function(){this.src&&(Yl&&0<this.readyState&&(this.currentTime=Math.max(Lka,0)),this.removeAttribute("src"),this.load(),this.bo&&this.bo.i&&(this.bo&&this.bo.dispose(),this.bo=null))};
g.k.jF=function(){this.hasAttribute("controls")&&this.setAttribute("controls","true")};g.t(g.Cx,g.A);g.k=g.Cx.prototype;g.k.er=function(){};
g.k.ak=ba(5);g.k.rq=function(){return this.l};
g.k.Xk=function(a){var b="";a&&(Ex(this,a),b=a.g);this.nd()&&""==b||(b&&this.nd()!=b&&this.kr(b),uO||a&&a.i||this.load(),this.C||(this.addEventListener("volumechange",this.Xx),this.C=!0))};
g.k.qq=function(){var a=this.sa();a=window.MediaSource?new window.MediaSource:window.WebKitMediaSource?new window.WebKitMediaSource:new gs(a);a=new ws(a);this.Xk(a.Mm);return a};
g.k.playVideo=function(){this.pg()&&this.seekTo(0);!this.nd()&&this.l&&(g.L(Error("playVideo without src")),this.kr(this.l.g),this.l.i||this.load());var a=this.play();!a&&wO&&OJ&&7<=tx&&g.mk(this,"playing",(0,g.x)(function(){g.Fj((0,g.x)(this.Ay,this,this.getCurrentTime(),0),500)},this));
return a};
g.k.Ay=function(a,b){this.vi()||this.getCurrentTime()>a||10<b||(this.play(),g.Fj((0,g.x)(this.Ay,this,this.getCurrentTime(),b+1),500))};
g.k.seekTo=function(a){0<this.Le()&&(xO&&OJ&&4>tx&&(a=Math.max(.1,a)),this.jr(a))};
g.k.stopVideo=function(){this.nd()&&(vO&&Yl&&0<this.getCurrentTime()&&this.seekTo(0),this.Zq(),this.load(),Ex(this,null))};
g.k.Ta=function(){try{var a=this.Zk();return{vct:this.getCurrentTime().toFixed(3),vd:this.getDuration().toFixed(3),vpl:is(this.hj(),",",3),vbu:is(this.Od()),vpa:""+ +this.vi(),vsk:""+ +this.Sm(),ven:""+ +this.pg(),vpr:""+this.getPlaybackRate(),vrs:""+this.Le(),vns:""+this.rp(),vec:""+this.Mf(),vemsg:this.Yk(),vvol:""+this.getVolume(),vdom:""+ +this.Vt(),vsrc:""+ +!!this.nd(),vw:a.width,vh:a.height}}catch(b){return{}}};
g.k.addEventListener=function(a,b){this.u.ia(a,b,!1,this);this.Ys(a)};
g.k.removeEventListener=function(a,b){this.u.gb(a,b,!1,this)};
g.k.dispatchEvent=function(a){return this.u.dispatchEvent(a)};
g.k.Ws=function(){this.B=!1};
g.k.Ss=function(){this.B=!0;this.Ii(!0)};
g.k.Xx=function(){this.B&&!this.qp()&&this.Ii(!0)};
g.k.U=function(){this.C&&this.removeEventListener("volumechange",this.Xx);g.A.prototype.U.call(this)};
var uO=!1,vO=!0,wO=!0,xO=!0;g.t(Kx,g.Pd);Kx.prototype.preventDefault=function(){g.Pd.prototype.preventDefault.call(this);this.i&&this.i.preventDefault()};
Kx.prototype.stopPropagation=function(){g.Pd.prototype.stopPropagation.call(this);this.i&&this.i.stopPropagation()};g.t(g.Lx,g.Cx);g.k=g.Lx.prototype;g.k.ti=function(){return!0};
g.k.isView=function(){return!1};
g.k.er=function(){return!1};
g.k.sa=function(){return this.g};
g.k.nd=function(){return this.g.src};
g.k.kr=function(a){var b=this.getPlaybackRate();this.g.src=a;this.setPlaybackRate(b)};
g.k.Zq=function(){this.g.removeAttribute("src")};
g.k.getPlaybackRate=function(){try{return 0<=this.g.playbackRate?this.g.playbackRate:1}catch(a){return 1}};
g.k.setPlaybackRate=function(a){this.getPlaybackRate()!=a&&(this.g.playbackRate=a);return a};
g.k.oq=function(){return this.g.loop};
g.k.setLoop=function(a){this.g.loop=a};
g.k.canPlayType=function(a,b){return this.g.canPlayType(a,b)};
g.k.vi=function(){return this.g.paused};
g.k.Sm=function(){return this.g.seeking};
g.k.pg=function(){return this.g.ended};
g.k.qp=function(){return this.g.muted};
g.k.Ii=function(a){ds();this.g.muted=a};
g.k.hj=function(){return this.g.played||hs([],[])};
g.k.Od=function(){try{var a=this.g.buffered}catch(b){}return a||hs([],[])};
g.k.rm=function(){return this.g.seekable||hs([],[])};
g.k.getStartDate=function(){return this.g.getStartDate?this.g.getStartDate():null};
g.k.getCurrentTime=function(){return this.g.currentTime};
g.k.jr=function(a){this.g.currentTime=a};
g.k.getDuration=function(){return this.g.duration};
g.k.load=function(){var a=this.g.playbackRate;this.g.load&&this.g.load();this.g.playbackRate=a};
g.k.pause=function(){this.g.pause()};
g.k.play=function(){var a=this.g.play();if(!a||!a.then)return null;a.then(void 0,function(){});
return a};
g.k.Le=function(){return this.g.readyState};
g.k.rp=function(){return this.g.networkState};
g.k.Mf=function(){return this.g.error?this.g.error.code:null};
g.k.Yk=function(){return this.g.error?this.g.error.message:""};
g.k.getVideoPlaybackQuality=function(){var a={};if(this.g){if(this.g.getVideoPlaybackQuality)return this.g.getVideoPlaybackQuality();this.g.webkitDecodedFrameCount&&(a.totalVideoFrames=this.g.webkitDecodedFrameCount,a.droppedVideoFrames=this.g.webkitDroppedFrameCount)}return a};
g.k.Aj=function(){return!!this.g.webkitCurrentPlaybackTargetIsWireless};
g.k.uu=function(){return!!this.g.webkitShowPlaybackTargetPicker()};
g.k.togglePictureInPicture=function(){cs()?this.g!=window.document.pictureInPictureElement?this.g.requestPictureInPicture():window.document.exitPictureInPicture():bs()&&this.g.webkitSetPresentationMode("picture-in-picture"==this.g.webkitPresentationMode?"inline":"picture-in-picture")};
g.k.Zh=function(){return g.xh(this.g)};
g.k.setPosition=function(a){return g.wh(this.g,a)};
g.k.Zk=function(){return g.Gh(this.g)};
g.k.setSize=function(a){return g.Fh(this.g,a)};
g.k.getVolume=function(){return this.g.volume};
g.k.setVolume=function(a){ds();this.g.volume=a};
g.k.Ys=function(a){if(!this.i[a]){var b=(0,g.x)(this.FH,this);this.g.addEventListener(a,b);this.i[a]=b}};
g.k.FH=function(a){this.dispatchEvent(new Kx(this,a.type,a))};
g.k.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.g.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.k.Nl=ba(7);g.k.Kn=ba(9);g.k.ak=ba(4);g.k.Ul=ba(11);g.k.hm=function(){return jn(this.g)};
g.k.sm=function(a){return g.sh(this.g,a)};
g.k.Vt=function(){return g.kf(document.body,this.g)};
g.k.U=function(){for(var a in this.i)this.g.removeEventListener(a,this.i[a]);g.Cx.prototype.U.call(this)};g.Ma(Mx);var EO=g.v.ytPlayerUtilsVideoTagPoolInstance||Mx.getInstance();g.Ia("ytPlayerUtilsVideoTagPoolInstance",EO,void 0);g.k=Mx.prototype;g.k.vy=function(a){if(!(this.g.length>=a)){a-=this.g.length;for(var b=0;b<a;b++)Ox(this)}};
g.k.cG=function(a,b){if(this.g.length)return this.g.pop();var c=Ox(this,a,b);a||g.jb(this.g,c);return c};
g.k.PN=function(a){a&&g.eb(this.i,a)&&(a.Tf(),g.nk(a),g.jb(this.i,a),g.jb(this.l,a))};
g.k.HG=function(a){return this.g.length>=(a||1)};
g.k.YE=function(){for(var a=this.l.length-1;0<=a;a--)Nx(this,this.l[a]);this.g.length==this.i.length&&4<=this.g.length||(4>this.i.length?this.vy(4):(this.g=[],(0,g.y)(this.i,function(b){Nx(this,b)},this)))};
Mx.prototype.fillPool=Mx.prototype.vy;Mx.prototype.getTag=Mx.prototype.cG;Mx.prototype.releaseTag=Mx.prototype.PN;Mx.prototype.hasTags=Mx.prototype.HG;Mx.prototype.activateTags=Mx.prototype.YE;g.sD=g.Za(function(){var a="";try{var b=g.bf("CANVAS").getContext("webgl");b&&(b.getExtension("WEBGL_debug_renderer_info"),a=b.getParameter(37446),a=a.replace(/[ :]/g,"_"))}catch(c){}return a});g.t(g.Px,g.Cx);g.k=g.Px.prototype;g.k.isView=function(){return!0};
g.k.er=function(){var a=this.g.getCurrentTime();if(a<this.i)try{var b=this.g.Od(),c=ls(b,a);return!(this.i<c)}catch(d){}return!1};
g.k.hj=function(){return os(this.g.hj(),this.i,this.o)};
g.k.Od=function(){return os(this.g.Od(),this.i,this.o)};
g.k.rm=function(){return os(this.g.rm(),this.i,this.o)};
g.k.getCurrentTime=function(){return this.g.getCurrentTime()-this.i};
g.k.jr=function(a){this.g.jr(a+this.i)};
g.k.getDuration=function(){return isFinite(this.o)&&!this.F?this.o-this.i:this.g.getDuration()-this.i};
g.k.play=function(){if(this.er()){this.g.getCurrentTime();try{this.g.jr(this.i)}catch(a){}}return this.g.play()};
g.k.Ta=function(){var a=g.Cx.prototype.Ta.call(this);a.view=this.i+"-"+this.o;return a};
g.k.addEventListener=function(a,b){this.g.addEventListener(a,b)};
g.k.removeEventListener=function(a,b){this.g.removeEventListener(a,b)};
g.k.rq=function(){return this.g.rq()};
g.k.Xk=function(a){this.g.Xk(a)};
g.k.qq=function(){return this.g.qq()};
g.k.playVideo=function(){return this.g.playVideo()};
g.k.Ws=function(){this.g.Ws()};
g.k.Ss=function(){this.g.Ss()};
g.k.ti=function(){return this.g.ti()};
g.k.sa=function(){return this.g.sa()};
g.k.nd=function(){return this.g.nd()};
g.k.kr=function(a){this.g.kr(a)};
g.k.Zq=function(){this.g.Zq()};
g.k.getPlaybackRate=function(){return this.g.getPlaybackRate()};
g.k.setPlaybackRate=function(a){return this.g.setPlaybackRate(a)};
g.k.oq=function(){return this.g.oq()};
g.k.setLoop=function(a){this.g.setLoop(a)};
g.k.canPlayType=function(a,b){return this.g.canPlayType(a,b)};
g.k.vi=function(){return this.g.vi()};
g.k.Sm=function(){return this.g.Sm()};
g.k.pg=function(){return this.g.pg()};
g.k.qp=function(){return this.g.qp()};
g.k.Ii=function(a){this.g.Ii(a)};
g.k.getStartDate=function(){return this.g.getStartDate()};
g.k.load=function(){this.g.load()};
g.k.pause=function(){this.g.pause()};
g.k.Le=function(){return this.g.Le()};
g.k.rp=function(){return this.g.rp()};
g.k.Mf=function(){return this.g.Mf()};
g.k.Yk=function(){return this.g.Yk()};
g.k.getVideoPlaybackQuality=function(){return this.g.getVideoPlaybackQuality()};
g.k.Aj=function(){return this.g.Aj()};
g.k.uu=function(){return this.g.uu()};
g.k.togglePictureInPicture=function(){this.g.togglePictureInPicture()};
g.k.Zh=function(){return this.g.Zh()};
g.k.setPosition=function(a){return this.g.setPosition(a)};
g.k.Zk=function(){return this.g.Zk()};
g.k.setSize=function(a){return this.g.setSize(a)};
g.k.getVolume=function(){return this.g.getVolume()};
g.k.setVolume=function(a){this.g.setVolume(a)};
g.k.setAttribute=function(a,b){this.g.setAttribute(a,b)};
g.k.removeAttribute=function(a){this.g.removeAttribute(a)};
g.k.hasAttribute=function(a){return this.g.hasAttribute(a)};
g.k.Nl=ba(6);g.k.Kn=ba(8);g.k.ak=ba(3);g.k.Ul=ba(10);g.k.hm=function(){return this.g.hm()};
g.k.sm=function(a){return this.g.sm(a)};
g.k.Vt=function(){return this.g.Vt()};
g.k.stopVideo=function(){this.g.stopVideo()};
g.k.Ys=function(a){this.g.Ys(a)};Rx.prototype.then=function(a,b){return this.g.then(a,b)};
Rx.prototype.resolve=function(a){this.l(a)};
Rx.prototype.reject=function(a){this.i(a)};g.k=Xx.prototype;g.k.Tc=function(a){return"content-type"===a?this.i.get("type"):""};
g.k.abort=function(){};
g.k.Hk=function(){return!0};
g.k.mm=function(){return this.range.length};
g.k.lq=function(){return this.loaded};
g.k.Dp=function(){return!!this.g.getLength()};
g.k.Gf=function(){return!!this.g.getLength()};
g.k.mq=function(){var a=this.g;this.g=new Lp;return a};
g.k.pu=function(){return this.g};
g.k.vr=function(){return!0};
g.k.wv=function(){return!!this.error};
g.k.Wk=function(){return this.error};Yx.prototype.deactivate=function(){this.isActive&&(this.isActive=!1)};var uga=0;g.k=ky.prototype;g.k.start=function(a){var b=this,c={method:this.method,credentials:this.credentials};this.headers&&(c.headers=new Headers(this.headers));this.body&&(c.body=this.body);this.o&&(c.signal=this.o.signal);a=new Request(a,c);fetch(a).then(function(d){b.status=d.status;d.ok&&d.body?(b.l=d.body.getReader(),b.ba()?b.l.cancel("Cancelling"):(b.C=d.headers,b.P(),ny(b))):ly(b)},function(d){b.onError(d)}).then(void 0,g.L)};
g.k.onError=function(a){this.errorMessage=String(a);this.B=!0;ly(this)};
g.k.Tc=function(a){return this.C?this.C.get(a):null};
g.k.Hk=function(){return!!this.C};
g.k.lq=function(){return this.i};
g.k.mm=function(){return+this.Tc("content-length")};
g.k.Dp=function(){return 200<=this.status&&300>this.status&&!!this.i};
g.k.Gf=function(){if(this.J)return!!this.g.getLength();var a=this.policy.i;if(a&&this.F+a>Date.now())return!1;a=this.mm()||0;a=Math.max(16384,.125*a);this.K||(a=Math.max(a,16384));this.policy.Bd&&kr(this)&&(a=1);return this.g.getLength()>=a};
g.k.mq=function(){this.Gf();this.F=Date.now();this.K=!0;var a=this.g;this.g=new Lp;return a};
g.k.pu=function(){this.Gf();return this.g};
g.k.ba=function(){return this.aborted};
g.k.abort=function(){this.l&&this.l.cancel("Cancelling");this.o&&this.o.abort();this.aborted=!0};
g.k.vr=function(){return!0};
g.k.wv=function(){return this.B};
g.k.Wk=function(){return this.errorMessage};g.k=oy.prototype;g.k.Wc=function(a){this.ba||(this.status=this.g.status,this.u(a.timeStamp,a.loaded))};
g.k.Hk=function(){return 2<=this.g.readyState};
g.k.Tc=function(a){try{return this.g.getResponseHeader(a)}catch(b){return g.L(b),""}};
g.k.mm=function(){return+this.Tc("content-length")};
g.k.lq=function(){return this.i};
g.k.Dp=function(){return 200<=this.status&&300>this.status&&!!this.response&&!!this.response.byteLength};
g.k.Gf=function(){return this.l&&!!this.response&&!!this.response.byteLength};
g.k.mq=function(){this.Gf();var a=this.response;this.response=void 0;return new Lp([new Uint8Array(a)])};
g.k.pu=function(){this.Gf();return new Lp([new Uint8Array(this.response)])};
g.k.abort=function(){this.ba=!0;this.g.abort()};
g.k.vr=function(){return!1};
g.k.wv=function(){return!1};
g.k.Wk=function(){return""};g.k=py.prototype;g.k.sc=function(){return this.o?this.o.sc():""};
g.k.start=function(a){yy(this,2);this.K=++py.g;this.l?(this.R=Eda(this.info,this.l.i,this.l.length),this.o=g.Rq(this.info,this.i,this.ca,this.R)):(this.R=this.info.range,this.o=g.Rq(this.info,this.i,this.ca));var b=!1;if(this.i.Ga&&2>this.info.i.i&&this.J){var c=this.o.get("aitags");if(c&&(Qq(this.info)||this.info.Ee())&&this.da&&"auto"===Os()&&Ss()){var d=id(c).split(","),e=[];(0,g.y)(this.da,function(f){g.eb(d,f)&&e.push(f)});
0<e.length&&(this.o.set("altitags",gd(e.join(","))),b=!0)}}b||(this.J=!1);this.o.set("rn",this.K.toString());0<=a&&this.o.set("rbuf",(1E3*a).toFixed().toString());this.ea&&this.o.set("smb","1");a=this.o.sc();try{this.g=xga(this,a)}catch(f){g.Ej(f);this.u="net.ssl";zy(this);return}0<this.i.N&&this.X.start()};
g.k.sN=function(){this.C=0;this.info.i.u=(0,g.M)();var a=sy(this);a.o=(0,g.M)();a.started+=1;a=this.timing;a.g=(0,g.E)();a.o=a.g;a.i=0;a.W=a.g;a.N=0;a.u&&(a.u=[]);a.X=!1;a.da=!1;a.l=0;a.snapshot=et(a.schedule);a.B=Infinity;a.F=Infinity;hy(a);jy(a,a.g);a.R=(a.J-a.g)/1E3;a.C=NaN;a.ca=void 0};
g.k.rN=function(a,b,c){if(!this.ba()&&this.g){this.B=this.g.status;this.i.ma||uy(this,!1);var d=this.timing;a=a>d.g&&4E12>a?a:(0,g.E)();fy(d,a,b);50>a-d.o&&gy(d)&&3!==$x(d)||dy(d,a,b,c);b=this.timing;b.i>b.na&&ay(b,b.i)&&4>this.state?yy(this,4):Dy(this)&&Fy(this)&&yy(this,Math.max(3,this.state))}};
g.k.qN=function(){if(!this.ba()&&this.g){if(!this.P&&this.g.Hk()&&this.g.Tc("X-Walltime-Ms")){var a=parseInt(this.g.Tc("X-Walltime-Ms"),10);this.P=((0,g.E)()-a)/1E3}this.g.Hk()&&this.g.Tc("X-Restrict-Formats-Hint")&&this.i.Rw&&!Ss()&&g.ho("yt-player-headers-readable",!0,2592E3);a=parseInt(this.g.Tc("X-Head-Seqnum"),10);var b=parseInt(this.g.Tc("X-Head-Time-Millis"),10);this.V=a||this.V;this.W=b||this.W}};
g.k.pN=function(){var a=this.g;!this.ba()&&a&&(this.X.stop(),this.B=a.status,a=wga(this,a),7==a?zy(this):yy(this,a))};
g.k.WN=function(){if(!this.ba()){var a=(0,g.E)(),b=!1;gy(this.timing)?(a=this.timing.J,jy(this.timing),this.timing.J-a>=.8*this.i.N?(this.C++,b=5<=this.C):this.C=0):(b=this.timing,b.wg&&iy(b,(0,g.E)()),a-=b.K,this.i.Ae&&0<a&&(this.C+=1),b=a>1E3*this.i.Ad);this.C&&this.F&&this.F(this);b?Cy(this,!1):this.X.start()}};
g.k.ba=function(){return-1==this.state};
g.k.dispose=function(){this.info.Ee()&&6!=this.state&&(this.info.g[0].g.u=!1);yy(this,-1);this.F=null;this.X.dispose();this.i.Kc||By(this)};
py.DEBUG=!1;py.g=0;var wy=-1;Jy.prototype.skip=function(a){this.offset+=a};g.t(My,g.N);My.prototype.getDuration=function(){return this.l.index.Xh()};ez.prototype.getDuration=function(){return this.g.index.Xh()};Gz.prototype.setPlaybackRate=function(a){this.l=Math.max(1,a)};
Gz.prototype.getPlaybackRate=function(){return this.l};g.t(Lz,g.N);Lz.prototype.seek=function(a){a!=this.o&&(this.B=0);this.o=a;var b=this.i.i,c=this.g.i,d=this.g.C,e=Nz(this.i,a,this.i.C);d=Nz(this.g,this.J.da?a:e,d);a=Math.max(a,e,d);this.l=!0;this.u.i&&(Mz(this.i,b),Mz(this.g,c));return a};
var Dga=2/24;Rz.prototype.xa=function(){this.yd("gv")};
Rz.prototype.yd=function(a,b){this.u[a]=b?window.performance.timing.navigationStart+b:(0,g.M)()};g.t(Sz,g.N);Sz.prototype.F=function(a,b){var c=this.B.g.index.qb()<=b,d=this.C.i&&this.u.La;this.g={Cd:a,Oa:b};this.u.La&&this.o&&this.i&&(this.o=!1,"continue"!=a.event&&"stop"!=a.event||Tz(this,this.i));this.i&&this.i.Oa==b&&(this.i=null);if(c||d)this.u.tb&&(a.startSecs+=isNaN(this.l)?0:this.l),c=this.C,c.P.push(a),c.O("cuepointsadded")};cA.prototype.send=function(){g.rl(this.g,{format:"RAW",responseType:"arraybuffer",timeout:1E4,ud:this.i,Ne:this.i,context:this});this.l=(0,g.M)()};
cA.prototype.i=function(a){var b={rc:a.status,lb:a.response?a.response.byteLength:0,rt:(((0,g.M)()-this.l)/1E3).toFixed(3),shost:g.td(this.g),trigger:this.B};204==a.status||a.response?this.o&&this.o(qs(b)):this.u(new g.ps("pathprobe.net",!1,b))};g.t(dA,g.N);dA.prototype.l=function(a,b){if(this.B)return Rga(this,b);var c=kz(a);if(c){var d=c.i;if(d&&d.o&&d.l){var e=a.o.length?a.o[0]:null;e&&3<=e.state&&7!=e.state&&0==e.info.Fd&&Dy(e)&&(this.B=e,this.K=d,this.o=c.info,this.J=this.C=(0,g.E)()/1E3,this.F=this.o.startTime)}}return NaN};g.t(nA,g.A);nA.prototype.reset=function(){this.started=!1;this.u.stop();this.g.g=[];this.l=[];this.i()};
nA.prototype.Pb=function(a){this.started&&(this.i(),g.S(a.zi,16)&&(a=lA(this.g,Math.max(this.o-2E3,0)),!isNaN(a)&&0x7ffffffffffff>a&&this.u.start()))};
nA.prototype.i=function(){this.B=!0;if(!this.C){for(var a=3;this.B&&a;)this.B=!1,this.C=!0,Xga(this),this.C=!1,a--;this.F().sb()&&(a=lA(this.g,this.o),!isNaN(a)&&0x7ffffffffffff>a&&(a=(a-this.o)/this.R(),this.u.start(a)))}};
nA.prototype.U=function(){this.l=[];this.g.g=[];g.A.prototype.U.call(this)};g.t(xA,g.N);g.k=xA.prototype;
g.k.initialize=function(a,b,c){a=a||0;this.O("videoformatchange",Mga(this.C));if(this.u.i){if(this.g.eB){b=lr(this.g);for(var d in this.u.g)this.u.g[d].index.C=b}bha(this)}this.F&&eA(this.F,this.i.g);this.g.X&&jr()&&this.Uc("streaming","ac."+!!window.AbortController,!0);d=isNaN(this.B)?0:this.B;this.B=this.u.i?d:a;c?(this.g.ze?(this.tb=c,zA(this,c)):zA(this,!1),this.Ka.fb()):(a=0==this.B,VA(this,this.i,this.i.g,a),VA(this,this.o,this.o.g,a),g.Pf(this.seek(this.B),function(){}),this.ea.xa());
(this.u.Sc||this.u.Ke)&&this.Uc("minMaxSq","minSq."+this.u.Sc+";maxSq."+this.u.Ke+";minDvrTime."+this.u.rh+";maxDvrTime."+this.u.uj)};
g.k.resume=function(){if(this.X||this.da)this.za=this.da=this.X=!1,this.zg()};
g.k.setAudioTrack=function(a){if(!this.ba()){var b=this.C;b.l=b.C.g[a.id];b.K=b.l;this.O("audioformatchange",new Qx(b.K,b.B,"m"));this.O("reattachrequired")}};
g.k.setPlaybackRate=function(a){a!=this.N.getPlaybackRate()&&this.N.setPlaybackRate(a)};
g.k.sM=function(a){if(3!=a.state||!this.g.Gb||!(!this.l||this.X||uz(a.info.g[0].g.info.video?this.i:this.o,this.B)>this.g.Gb)){var b=this.g.Ae;if(!(!(b&&2<=a.state)||5<=a.state||a.C<b||Lq(a.info.i,this.g,this.ma))){b=this.ma;var c=zq(Kq(a.info.i));b=kq(b,c);b.g||b.i||b.started||NA(this,a,!0)}if(!this.ba()&&3<=a.state){b=this.ea;var d=a.info.g[0].g;c=!b.o&&d.info.video;d=!b.g&&d.info.audio;5==a.state?c?b.yd("vrr"):d&&b.yd("arr"):6==a.state?c?(b.o=a.sc(),vk(4)):d&&(b.g=a.sc()):4==a.state&&c&&vk(4);
5<=a.state&&(this.g.na&&(b=Zx(a.timing),c=a.timing,this.Uc("rqs",qs({rn:a.K.toString(),rt:b.rt,pt:b.pt,stall:b.stall,elt:b.elbowTime,elb:b.elbowBytes,strm:""+ +(a.g?a.g.vr():Ey(a)),d:c.u?c.u.join(""):""}))),a.ma&&this.Uc("sbwe3","1",!0));if(5==a.state)a.start(Math.max(0,a.info.g[0].C-this.B));else if(5<=a.state&&5==a.info.g[0].type)6==a.state&&(b=(a.info.g[0].g.info.video?this.i:this.o).o[0]||null)&&b.C&&Cy(b,!0),a.dispose();else{if(this.g.Ga&&a.J&&4<=a.state&&5!=a.state)if(b=a.g?a.g.Tc("X-Response-Itag"):
null){b=Oga(this.C,b);c=a.info.range.length-b.pp();b.u=!0;a.info.g[0].g.u=!1;d=b.gj(c)[0];a.info=d;if(a.l){c=a.l;d=d.g;c.l=d;var e=d[0].range,f=Sp(c.g[0].g);Sp(g.$a(c.g).g);for(var h=0;h<c.g.length;h++){c.g[h].info=d[h];var l=d[h].range;c.g[h].g=new Lp([new Uint8Array(f.buffer,l.start-e.start,l.length)])}}a.J=!1;c=this.i;c.g!=b&&(c.g=b);c=this.i;c.i&&(c.i.g=b);this.O("constraint",b.info.xa().quality);(c=a.g?a.g.Tc("X-Segment-Lmt"):null)&&b instanceof zr&&(isNaN(b.lastModified)||b.lastModified==c||
yz(this.i,a))}else a.J=!1;if(6==a.state)MA(this,a);else if(!this.g.X||!Fy(a)||5<=a.state)7==a.state&&(b=a.info.g[0].g,Ay(a)?(c=(b.info.video&&1<b.i.i||410==a.B||500==a.B||503==a.B)&&!$z(this.C),d=ry(a),e=b.info.video?this.i:this.o,c&&(d.stun="1"),DA(this,!1,a.u,d),this.ba()||(c&&Zz(this.C,b),this.g.Be&&1==a.info.g.length&&0<a.info.g[0].l&&b!=e.g&&this.da?this.O("reattachrequired"):(yz(e,a),this.zg()))):Aq(b.i.g)?(this.O("localplaybackfailed"),DA(this,!1,"net.closed",{err:a.u,rn:a.K.toString()})):
(DA(this,!1,a.u,ry(a)),a.info.Ee()?(b.B=a.u,this.zg()):DA(this,!0,"net.retryexhausted",{err:a.u,rn:a.K.toString()})));else if(!MA(this,a))return;this.zg();a:if(this.g.Ka&&5<=a.state&&Ay(a)&&Lq(a.info.i,this.g,this.ma)){b=this.ma;c=zq(a.info.i.g);b=kq(b,c);c=b.started+b.l;if(this.g.ae)c+=b.g*this.g.ae;else if(b.g)break a;b.o+this.g.Ka*Math.pow(1.6,c)>(0,g.M)()||NA(this,a,!1)}}}}};
g.k.zg=function(){EA(this);if(this.l&&xs(this.l)&&!this.l.ie()){var a=gz(this.i);a=this.g.wo&&a&&a.B;this.u.i&&this.u.C&&Vr(this.u)?(this.K=Vr(this.u),ys(this.l,this.K)):this.u.isLive&&!a?isNaN(this.K)?(this.K=this.B+3600,ys(this.l,this.K)):this.K<=this.B+1800&&(this.K=Math.max(this.K+1800,this.B+3600),ys(this.l,this.K)):this.l.isView()||(a=Math.max(this.o.getDuration(),this.i.getDuration()),(!isFinite(this.K)||this.K!=a)&&0<a&&(ys(this.l,a),this.K=a))}if(!this.ba())if(Tr(this.u)&&3==this.u.F)DA(this,
!0,"manifest.net.retryexhausted",{rc:this.u.V.toString()});else if(!this.u.o||!Dz(this.i)&&!Dz(this.o)||(this.i.u||this.o.u)&&this.g.ca?a=!1:(BA(this),this.O("seekplayerrequired",Infinity),a=!0),!a&&(EA(this),iz(this.i),!this.ba()&&(iz(this.o),!this.ba()))){this.u.i&&(Ez(this.i),Ez(this.o),Qz(this.J),(a=kz(this.i))&&a.i&&(a=a.i.o&&!this.g.Wg,this.Uc(a==this.g.u.Bd?"strm":"strmbug","strm."+(a?"1":"0")+";sfmp4."+(this.g.u.Bd?"1":"0")+";dfs."+(this.g.Wg?"1":"0"),!0)));if(this.l)RA(this);else if(this.g.C){if(a=
kz(this.i)){var b=this.i;b.l.i.shift();lz(b,a)}if(b=kz(this.o)){var c=this.o;c.l.i.shift();lz(c,b)}qz(this.i)&&qz(this.o)||(a||b)&&this.ca.fb()}yA(this);VA(this,this.i,this.i.g,!1);VA(this,this.o,this.o.g,!1);a=this.o.g.B;b=this.i.g.B;if(a||b){c="net.retryexhausted";if("fmt.unparseable"==a||"fmt.unparseable"==b)c="fmt.unparseable";DA(this,!0,c,{metadata:"1",video:this.i.g.B||"",audio:this.o.g.B||""})}else JA(this,this.i,this.o),JA(this,this.o,this.i),this.g.HC&&this.la&&!this.X&&gt(this.R)&&(a=this.la,
b=(0,g.x)(this.O,this,"error"),(new cA(a,"cms",null,b)).send(),this.la=""),this.F&&(a=this.F,a.B?(b=a.J+a.g.Kg,a.u||(b=Math.min(b,a.C+a.g.kb)),a=Math.max(0,1E3*b-(0,g.E)())):a=NaN,isNaN(a)||this.zb.fb(a)),this.Xa.fb()}};
g.k.hJ=function(a){if(this.g.ua&&this.l){var b=a==this.l.g,c=a.np();c&&(!c.l||c.o)&&this.Uc("sbu",a.Ta({a:""+ +b}))}this.zg()};
g.k.hK=function(a){if(this.l){a=gz(a==this.l.g?this.o:this.i);var b=void 0;a&&(b=Gp(a));DA(this,!0,"fmt.unplayable",b)}};
g.k.qL=function(a){DA(this,!0,"fmt.unparseable",a)};
g.k.OJ=function(a){this.O("needkeyinfo",a)};
g.k.rL=function(a){this.o.g.l=a;this.l&&OA(this,this.l.g,a)};
g.k.pL=function(a){DA(this,!1,"qoe.avsync",a)};
g.k.tL=function(a,b){this.u.i&&UA(this,b,a==this.i)};
g.k.uL=function(a,b){if(this.u.i){var c=this.u,d=b.Oa,e=a==this.i,f;for(f in c.g){var h=fr(c.g[f].info.mimeType)||c.g[f].info.isVideo();if(e==h){h=c.g[f].index;var l=nr(h,d);0<=l&&h.segments.splice(l,1)}}}};
g.k.vL=function(a,b){this.u.i&&UA(this,b,a==this.i)};
g.k.sL=function(a){this.O("localmediachange",new Nv(this.g.l,a,{isBackground:this.g.C}))};
g.k.seek=function(a){if(this.ba())return g.Jf();if(this.i.F||this.o.F)return this.g.fE?g.If():g.Jf("seeking to head");EA(this);this.Ga=(0,g.M)();yA(this,a);this.l&&this.l.g&&this.l.i&&(this.l.g.isLocked()||this.l.i.isLocked())&&this.O("reattachrequired");this.B=this.J.seek(a);a=this.W;a.i=null;a.o=!1;this.ca.fb();return g.If(this.B)};
g.k.getCurrentTime=function(){return this.B};
g.k.U=function(){this.W.unsubscribe("ctmp",this.Uc,this);CA(this);vz(this.o);vz(this.i);g.N.prototype.U.call(this)};
g.k.Ta=function(){var a=gz(this.o),b=gz(this.i);a={lct:this.B.toFixed(3),lsk:this.J.l,lmf:aA(this.C),lbw:ct(this.R).toFixed(3),lhd:at(this.R).toFixed(3),lst:(1E9*(this.R.g.g()||0)).toFixed(3),laa:a?Hp(a):"",lva:b?Hp(b):"",lar:this.o.i?Hp(this.o.i):"",lvr:this.i.i?Hp(this.i.i):""};this.l&&!As(this.l)&&this.l.g&&this.l.i&&(a.lab=is(this.l.g.Dd()),a.lvb=is(this.l.i.Dd()));return a};
g.k.Uc=function(a,b,c){this.O("ctmp",a,b,void 0===c?!1:c)};
g.k.Bx=function(a,b){var c=a/b;isNaN(this.V)&&(this.V=c-Math.min(c,this.g.Wd),this.W.l=this.V,this.O("timestamp",this.V),this.u.i&&(this.u.l=this.V));return(c-this.V)*b};
var KA=2/24;YA.prototype.g=function(){return this.wa.g()};ZA.prototype.add=function(a){this.g=(this.g+1)%this.data.length;this.data[this.g]=a};
ZA.prototype.forEach=function(a){for(var b=this.g+1;b<this.data.length;b++)a(this.data[b]||0);for(b=0;b<=this.g;b++)a(this.data[b]||0)};
ZA.prototype.clear=function(){for(var a=this.data.length,b=0;b<a;b++)this.data[b]=0;this.i=this.g=this.data.length-1};g.t(bB,g.N);g.t(mB,g.N);g.k=mB.prototype;g.k.getVisibilityState=function(a,b,c,d,e,f){return a?4:iB()?3:b?2:c?1:d?5:e?7:f?8:0};
g.k.setMinimized=function(a){this.g!=a&&(this.g=a,this.Gj())};
g.k.setInline=function(a){this.B!=a&&(this.B=a,this.Gj())};
g.k.setImmersivePreview=function(a){this.o!=a&&(this.o=a,this.Gj())};
g.k.isFullscreen=function(){return 0!=this.l};
g.k.isInline=function(){return this.B};
g.k.isBackground=function(){return iB()};
g.k.Gj=function(){this.O("visibilitychange");var a=this.getVisibilityState(this.i,this.isFullscreen(),this.g,this.isInline(),this.u,this.o);a!=this.F&&this.O("visibilitystatechange");this.F=a};
g.k.U=function(){lB(this.C);g.N.prototype.U.call(this)};var RQ={},SQ=(RQ.BUFFERING="buffering-mode",RQ.CUED="cued-mode",RQ.ENDED="ended-mode",RQ.PAUSED="paused-mode",RQ.PLAYING="playing-mode",RQ.SEEKING="seeking-mode",RQ.UNSTARTED="unstarted-mode",RQ);var Mka,TQ,qha;
Mka={zP:"ALREADY_PINNED_ON_A_DEVICE",AUTHENTICATION_EXPIRED:"AUTHENTICATION_EXPIRED",CP:"AUTHENTICATION_MALFORMED",DP:"AUTHENTICATION_MISSING",GP:"BAD_REQUEST",LP:"CAST_SESSION_DEVICE_MISMATCHED",MP:"CAST_SESSION_VIDEO_MISMATCHED",NP:"CAST_TOKEN_EXPIRED",OP:"CAST_TOKEN_FAILED",PP:"CAST_TOKEN_MALFORMED",QP:"CGI_PARAMS_MALFORMED",RP:"CGI_PARAMS_MISSING",fQ:"DEVICE_FALLBACK",oQ:"GENERIC_WITH_LINK_AND_CPN",pQ:"LICENSE",rQ:"VIDEO_UNAVAILABLE",wQ:"FORMAT_UNAVAILABLE",yQ:"GEO_FAILURE",PQ:"HTML5_AUDIO_RENDERER_ERROR",QQ:"GENERIC_WITHOUT_LINK",
RQ:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",SQ:"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK",ZQ:"INVALID_DRM_MESSAGE",fS:"PURCHASE_NOT_FOUND",gS:"PURCHASE_REFUNDED",jS:"RENTAL_EXPIRED",lS:"RETRYABLE_ERROR",qS:"SERVER_ERROR",CS:"STOPPED_BY_ANOTHER_PLAYBACK",DS:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",ES:"STREAMING_NOT_ALLOWED",FS:"STREAM_LICENSE_NOT_FOUND",MS:"TOO_MANY_REQUESTS",NS:"TOO_MANY_REQUESTS_WITH_LINK",OS:"TOO_MANY_STREAMS_PER_ENTITLEMENT",PS:"TOO_MANY_STREAMS_PER_USER",RS:"UNSUPPORTED_DEVICE",
SS:"VIDEO_FORBIDDEN",US:"VIDEO_NOT_FOUND"};TQ={};
g.vJ=(TQ.ALREADY_PINNED_ON_A_DEVICE="This video has already been downloaded on the maximum number of devices allowed by the copyright holder. Before you can play the video here, it needs to be unpinned on another device.",TQ.DEVICE_FALLBACK="Sorry, this video is not available on this device.",TQ.GENERIC_WITH_LINK_AND_CPN="An error occurred. Please try again later. (Playback ID: $CPN) $BEGIN_LINKLearn More$END_LINK",TQ.LICENSE="Sorry, there was an error licensing this video.",TQ.VIDEO_UNAVAILABLE=
"Video unavailable",TQ.FORMAT_UNAVAILABLE="This video isn't available at the selected quality. Please try again later.",TQ.GEO_FAILURE="This video isn't available in your country.",TQ.HTML5_AUDIO_RENDERER_ERROR="Audio renderer error. Please restart your computer.",TQ.GENERIC_WITHOUT_LINK="An error occurred. Please try again later.",TQ.HTML5_NO_AVAILABLE_FORMATS_FALLBACK="This video format is not supported.",TQ.HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK="Your browser does not currently recognize any of the video formats available. $BEGIN_LINKClick here to visit our frequently asked questions about HTML5 video.$END_LINK",
TQ.INVALID_DRM_MESSAGE="The DRM system specific message is invalid.",TQ.PURCHASE_NOT_FOUND="This video requires payment.",TQ.PURCHASE_REFUNDED="This video's purchase has been refunded.",TQ.RENTAL_EXPIRED="This video's rental has expired.",TQ.CAST_SESSION_DEVICE_MISMATCHED="The device in the cast session doesn't match the requested one.",TQ.CAST_SESSION_VIDEO_MISMATCHED="The video in the cast session doesn't match the requested one.",TQ.CAST_TOKEN_FAILED="Cast session not available. Please refresh or try again later.",
TQ.CAST_TOKEN_EXPIRED="Cast session was expired. Please refresh.",TQ.CAST_TOKEN_MALFORMED="Invalid cast session. Please refresh or try again later.",TQ.SERVER_ERROR="There was an internal server error. Please try again later.",TQ.STOPPED_BY_ANOTHER_PLAYBACK="Your account is playing this video in another location. Please reload this page to resume watching.",TQ.STREAM_LICENSE_NOT_FOUND="Video playback interrupted. Please try again.",TQ.STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED="Too many devices/IP addresses have been used over the 24 hour period.",
TQ.STREAMING_NOT_ALLOWED="Playback not allowed because this video is pinned on another device.",TQ.RETRYABLE_ERROR="There was a temporary server error. Please try again later.",TQ.TOO_MANY_REQUESTS="Please log in to watch this video.",TQ.TOO_MANY_REQUESTS_WITH_LINK="Please $BEGIN_LINKclick here$END_LINK to watch this video on YouTube.",TQ.TOO_MANY_STREAMS_PER_USER="Playback stopped because too many videos belonging to the same account are playing.",TQ.TOO_MANY_STREAMS_PER_ENTITLEMENT="Playback stopped because this video has been played on too many devices.",
TQ.UNSUPPORTED_DEVICE="Playback isn't supported on this device.",TQ.VIDEO_FORBIDDEN="Access to this video is forbidden.",TQ.VIDEO_NOT_FOUND="This video can not be found.",TQ);
qha={300:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"ALREADY_PINNED_ON_A_DEVICE",303:"STOPPED_BY_ANOTHER_PLAYBACK",304:"TOO_MANY_STREAMS_PER_USER",305:"TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"VIDEO_NOT_FOUND",401:"GEO_FAILURE",402:"STREAMING_NOT_ALLOWED",403:"UNSUPPORTED_DEVICE",405:"VIDEO_FORBIDDEN",500:"PURCHASE_NOT_FOUND",501:"RENTAL_EXPIRED",502:"PURCHASE_REFUNDED",5E3:"BAD_REQUEST",5001:"CGI_PARAMS_MISSING",5002:"CGI_PARAMS_MALFORMED",5100:"AUTHENTICATION_MISSING",5101:"AUTHENTICATION_MALFORMED",
5102:"AUTHENTICATION_EXPIRED",5200:"CAST_TOKEN_MALFORMED",5201:"CAST_TOKEN_EXPIRED",5202:"CAST_TOKEN_FAILED",5203:"CAST_SESSION_VIDEO_MISMATCHED",5204:"CAST_SESSION_DEVICE_MISMATCHED",6E3:"INVALID_DRM_MESSAGE",7E3:"SERVER_ERROR",8E3:"RETRYABLE_ERROR"};g.k=g.oB.prototype;g.k.sb=function(){return g.S(this,8)&&!g.S(this,512)&&!g.S(this,64)&&!g.S(this,2)};
g.k.isCued=function(){return g.S(this,64)&&!g.S(this,8)&&!g.S(this,4)};
g.k.isError=function(){return g.S(this,128)};
g.k.isSuspended=function(){return g.S(this,512)};
g.k.toString=function(){return"PSt."+this.state.toString(16)};g.t(CB,g.A);CB.prototype.Pb=function(a){this.l=a.state};
CB.prototype.X=function(){var a=this;if(this.o){var b=this.o,c=b.getCurrentTime(),d=8===this.l.state&&c>this.g,e=rha(this.l),f=this.N.isBackground()||this.l.isSuspended();FB(this,this.ma,e&&!f,d,"qoe.slowseek",function(){},"timeout");
e=e&&isFinite(this.g)&&0<this.g&&ega(b,this.g);var h=!c||10<Math.abs(c-this.g);FB(this,this.la,e&&h&&!f,d,"qoe.slowseek",function(){return b.seekTo(a.g)},"set_cmt");
h=e&&ks(b.Od(),this.g);e=!this.i||!this.i.g.W;FB(this,this.da,h&&e&&!f,d,"qoe.slowseek",function(){return b.seekTo(a.g+.001)},"jiggle_cmt");
e=function(){return a.B("newmediaelementrequired")};
FB(this,this.ea,h&&!f,d,"qoe.slowseek",e,"new_elem");(d=b.getVideoPlaybackQuality().totalVideoFrames)&&!this.N.isBackground()&&(h=d==this.J,FB(this,this.P,c>this.K&&h&&!f,!h,"qoe.longrebuffer",e,"decoder_freeze"),this.J=d);this.K=c;d=tA(this.l);h=g.vB(this.l);var l=d&&h&&ks(b.Od(),c+5);FB(this,this.ca,l&&!f,d&&!h,"qoe.longrebuffer",e,"new_elem_nnr");if(this.i){var m=this.i.getCurrentTime();e=b.hj();e=lea(e,m);c=!this.i.J.l&&c==e;FB(this,this.na,d&&h&&c&&!f,d&&!h&&!c,"qoe.longrebuffer",function(){return b.seekTo(m)},
"seek_to_loader")}FB(this,this.V,d&&h&&!f,d&&!h,"qoe.longrebuffer",function(){},"timeout");
f=this.l.isSuspended();f=this.W()&&!f;FB(this,this.R,f,!f,"qoe.start15s",function(){return a.B("releaseadsprerolllock")},"ads_preroll_timeout");
this.F.start()}};
AB.prototype.reset=function(){this.g=this.i=this.o=this.l=0;this.B=!1};
AB.prototype.Ta=function(){var a={},b=(0,g.M)();this.l&&(a.wsd=(b-this.l).toFixed());this.i&&(a.wtd=(b-this.i).toFixed());this.g&&(a.wssd=(b-this.g).toFixed());return a};g.t(KB,g.N);g.k=KB.prototype;g.k.Vf=function(a){var b=this;LB(this);this.g=a;this.N=this.l=null;this.F=this.ua=this.u=0;this.ea=!0;this.K.dispose();this.K=new CB(this.V,function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];return b.O.apply(b,g.ma(d))},this.Ga,this.Da);
DB(this.K,this.i);this.K.i=this.B};
g.k.Pb=function(a){this.K.Pb(a);var b;if(b=this.i)b=8===a.zi.state&&tA(a.state)&&g.vB(a.state)&&this.W.o;if(b){a=this.i.getCurrentTime();b=this.i.Od();var c=GB(this,"manifestless_post_live_ufph")||GB(this,"manifestless_post_live")?js(b,Math.max(a-3.5,0)):js(b,a-3.5);0<=c&&a>b.end(c)-1.1&&c+1<b.length&&11>b.start(c+1)-b.end(c)&&(c=b.start(c+1)+.2,.2>Math.abs(this.Ca-c)||(this.O("ctmp","seekover","b."+is(b,"_")+";cmt."+a),this.Ca=c,this.seekTo(c,{Am:!0})))}};
g.k.getCurrentTime=function(){return!isNaN(this.o)&&isFinite(this.o)?this.o:this.i&&UB(this)?this.i.getCurrentTime()+this.u:this.F||0};
g.k.isAtLiveHead=function(a){if(!this.l)return!1;void 0==a&&(a=this.getCurrentTime());return fB(this.l,a)};
g.k.seekTo=function(a,b){var c=void 0===b?{}:b,d=void 0===c.AD?!1:c.AD,e=void 0===c.BD?0:c.BD,f=void 0===c.Am?!1:c.Am;c=void 0===c.hw?0:c.hw;var h=a,l=!isFinite(h)||(this.l?fB(this.l,h):h>=this.Bc())||!g.ex(this.g);l||this.O("ctmp","seeknotallowed",h+";"+this.Bc());if(!l)return this.C&&(this.C=null,SB(this)),g.If(this.getCurrentTime());if(a==this.o&&this.P)return this.J;this.P&&LB(this);this.J||(this.J=new Rx);a&&!isFinite(a)&&NB(this,!1);h=a;(RB(this)&&!(this.i&&0<this.i.Le()&&0<Dx(this.i))||Pw(this.g)&&
this.Ib()==this.Bc(!1)?0:isFinite(h)||!Pw(this.g))&&(a=TB(this,a,f));a&&!isFinite(a)&&NB(this,!1);this.F=a;this.za=c;this.o=a;this.l&&(f=this.l,c=a,gB(f,c,!1),hB(f,c));this.O("seekto",a,!d);this.J&&(d?e&&this.ma.start(e):(this.P=!0,IB(this)));return this.J};
g.k.Bc=function(a){if(!this.g.ra)return this.g.Bc();if(Pw(this.g)&&this.g.Hm&&this.g.fa)return this.g.fa.Bc();if(this.g.wa&&this.g.wa.g()){if(!a&&this.l)return eB(this.l);a=this.g.Bc();this.W.i&&this.i&&(a=Math.max(a,Hx(this.i)));return a+this.u}this.i?Rl()?(a=this.i.getStartDate().getTime(),a=isNaN(a)?0:Math.max(((0,g.E)()-a)/1E3-30,0)):a=Dx(this.i)+this.u||this.u:a=this.u;return a};
g.k.Ib=function(){return this.g?this.g.Ib()+this.u:this.u};
g.k.U=function(){OB(this,null);this.K.dispose();g.N.prototype.U.call(this)};
g.k.eO=function(a,b){b=void 0===b?!1:b;this.seekTo(a+this.Fb(),{Am:b})};
g.k.Ta=function(){var a={};this.B&&Object.assign(a,this.B.Ta());this.i&&Object.assign(a,this.i.Ta());return a};
g.k.lO=function(a){this.u=a};
g.k.kO=function(a){this.ua=a};
g.k.getStreamTimeOffset=function(){return Pw(this.g)?this.ua:this.g.fa?this.g.fa.getStreamTimeOffset():0};
g.k.Fb=function(){return this.u};
g.k.jJ=function(a){this.N&&(this.N.g=a.audio.index)};var UQ={"ad-trueview-indisplay-pv":6,"ad-trueview-insearch":7},VQ={"ad-trueview-indisplay-pv":2,"ad-trueview-insearch":2},WQ=/^(\d*)_((\d*)_?(\d*))$/;VB.prototype.isFinished=function(){return this.g};
VB.prototype.start=function(){this.started=!0};
VB.prototype.reset=function(){this.g=this.started=!1};WB.prototype.get=function(a){a=this.findIndex(a);return-1!==a?this.values[a]:null};
WB.prototype.remove=function(a){a=this.findIndex(a);-1!==a&&(this.keys.splice(a,1),this.values.splice(a,1))};
WB.prototype.set=function(a,b){var c=this.findIndex(a);-1!==c?this.values[c]=b:(this.keys.push(a),this.values.push(b))};
WB.prototype.findIndex=function(a){return g.cb(this.keys,function(b){return g.wb(a,b)})};var Rm=new Pm,XB=0;g.t($B,g.N);g.t(aC,$B);aC.prototype.B=function(a,b){if(a&&b){var c=1*Number(Hd(a,"cpi"))+1;isNaN(c)||0>=c||c<this.l?(this.o.stop(),this.i.stop(),this.l=-1,this.g={}):(c>this.l&&(this.l=c,g.Mb(this.g)||(this.g={},this.o.stop(),this.i.stop())),this.g[b]=a,this.i.fb())}};
aC.prototype.u=function(){for(var a=g.p(Object.keys(this.g)),b=a.next();!b.done;b=a.next())b=b.value,this.O("rotated_need_key_info_ready",new Hy(Fha(this.g[b],this.l,b),"fairplay",!0));this.g={}};var XQ={},Jha=(XQ.DRM_TRACK_TYPE_AUDIO="AUDIO",XQ.DRM_TRACK_TYPE_SD="SD",XQ.DRM_TRACK_TYPE_HD="HD",XQ.DRM_TRACK_TYPE_UHD1="UHD1",XQ);g.t(eC,g.A);g.t(iC,g.N);g.k=iC.prototype;g.k.error=function(a,b,c,d){this.ba()||this.O("licenseerror",a,b,c,d);b&&this.dispose()};
g.k.shouldRetry=function(a,b){return this.P&&this.C?!1:!a&&this.requestNumber===b.requestNumber};
g.k.U=function(){g.N.prototype.U.call(this)};
g.k.Ta=function(){var a={requestedKeyIds:this.R,cryptoPeriodIndex:this.cryptoPeriodIndex};this.o&&(a.keyStatuses=this.g);return a};
g.k.Pd=function(){var a=this.B.join();if(oC(this)){var b=[],c;for(c in this.g)"usable"!==this.g[c].status&&b.push(this.g[c].type);a+="/UKS."+b}return a+="/"+this.cryptoPeriodIndex};
g.k.sc=function(){return this.url};
var YQ={},Uha=(YQ.widevine="DRM_SYSTEM_WIDEVINE",YQ.fairplay="DRM_SYSTEM_FAIRPLAY",YQ.playready="DRM_SYSTEM_PLAYREADY",YQ);g.t(vC,g.A);g.k=vC.prototype;g.k.JH=function(a){if(this.u){var b=a.messageType||"license-request";this.u(new Uint8Array(a.message),b)}};
g.k.KH=function(){this.C&&this.C(this.g.keyStatuses)};
g.k.OB=function(a){this.u&&this.u(a.message,"license-request")};
g.k.NB=function(a){if(this.l){if(this.i){var b=this.i.error.code;a=this.i.error.g}else b=a.errorCode,a=a.systemCode;this.l("t.prefixedKeyError;c."+b+";sc."+a)}};
g.k.MB=function(){this.B&&this.B()};
g.k.update=function(a){var b=this;if(this.g)return this.g.update(a).then(null,g.Dj(function(c){wC(b,"t.update",c)}));
this.i?this.i.update(a):this.element.addKey?this.element.addKey(this.F.g,a,this.initData,this.sessionId):this.element.webkitAddKey&&this.element.webkitAddKey(this.F.g,a,this.initData,this.sessionId);return g.Zm()};
g.k.U=function(){this.g&&this.g.close();this.element=null;g.A.prototype.U.call(this)};g.t(xC,g.A);g.k=xC.prototype;g.k.createSession=function(a,b){var c=a.initData;if(this.g.keySystemAccess){b&&b("createsession");var d=this.u.createSession();"com.youtube.fairplay"===this.g.g&&(c=zC(c,this.g.zf));b&&b("genreq");c=d.generateRequest(a.contentType,c);var e=new vC(null,null,null,d,null);c.then(function(){b&&b("genreqsuccess")},g.Dj(function(f){wC(e,"t.generateRequest",f)}));
return e}if(lu(this.g))return Zha(this,c);if(ou(this.g))return Yha(this,c);this.element.generateKeyRequest?this.element.generateKeyRequest(this.g.g,c):this.element.webkitGenerateKeyRequest(this.g.g,c);return this.l=new vC(this.element,this.g,c,null,null)};
g.k.NH=function(a){var b=AC(this,a);b&&b.OB(a)};
g.k.MH=function(a){var b=AC(this,a);b&&b.NB(a)};
g.k.LH=function(a){var b=AC(this,a);b&&b.MB(a)};
g.k.U=function(){g.A.prototype.U.call(this);delete this.element};g.t(BC,g.A);
BC.prototype.init=function(){return g.hh(this,function b(){var c=this,d,e;return g.Aa(b,function(f){if(1==f.g)return g.oh(c.g,{position:"absolute",width:"1px",height:"1px",display:"block"}),c.g.src=c.l.o,document.body.appendChild(c.g),c.u.I(c.g,"encrypted",c.B),d=[{initDataTypes:["keyids","cenc"],audioCapabilities:[{contentType:'audio/mp4; codecs="mp4a"'}],videoCapabilities:[{contentType:'video/mp4; codecs="avc1"'}]}],g.sa(f,navigator.requestMediaKeySystemAccess("com.youtube.fairplay",d),2);e=f.i;
c.l.keySystemAccess=e;c.i=new xC(c.g,c.l);g.C(c,c.i);yC(c.i);f.g=0})})};
BC.prototype.B=function(a){if(!this.ba()){var b=new Uint8Array(a.initData);a=new Hy(b,a.initDataType);var c=bC(b).replace("skd://","https://"),d={},e=this.i.createSession(a,function(){});
e&&(g.C(this,e),this.o.push(e),jC(e,function(f){uC(f,e.g,c,d,"fairplay")},function(){},function(){},function(){}))}};
BC.prototype.U=function(){this.o=[];this.g&&this.g.parentNode&&this.g.parentNode.removeChild(this.g);g.A.prototype.U.call(this)};g.t(CC,$B);CC.prototype.u=function(a){var b=(0,g.M)(),c;if(!(c=this.o)){a:{c=a.cryptoPeriodIndex;if(!isNaN(c))for(var d=g.p(this.l.values),e=d.next();!e.done;e=d.next())if(1>=Math.abs(e.value.cryptoPeriodIndex-c)){c=!0;break a}c=!1}c=!c}c?c=0:(c=a.g,c=1E3*Math.max(0,Math.random()*((isNaN(c)?120:c)-30)));this.g.push({time:b+c,info:a});this.i.fb(c)};g.t(FC,g.N);g.k=FC.prototype;g.k.OH=function(a){EC(this,"onecpt");a.initData&&IC(this,new Uint8Array(a.initData),a.initDataType)};
g.k.FL=function(a){EC(this,"onndky");IC(this,a.initData,a.contentType)};
g.k.yx=function(a){this.o.push(a);HC(this)};
g.k.createSession=function(a){this.l.get(a.initData);this.R=!0;var b=new iC(this.videoData,this.i,a,this.drmSessionId);this.l.set(a.initData,b);b.subscribe("ctmp",this.lB,this);b.subscribe("hdentitled",this.zB,this);b.subscribe("keystatuseschange",this.pA,this);b.subscribe("licenseerror",this.AB,this);b.subscribe("newlicense",this.IB,this);b.subscribe("newsession",this.KB,this);b.subscribe("sessionready",this.YB,this);b.subscribe("fairplay_next_need_key_info",this.vB,this);Oha(b,this.K)};
g.k.IB=function(a){this.ba()||(EC(this,"onnelcswhb"),a&&!this.heartbeatParams&&(this.heartbeatParams=a,this.O("heartbeatparams",a)))};
g.k.KB=function(){this.ba()||(EC(this,"newlcssn"),this.o.shift(),this.R=!1,HC(this))};
g.k.YB=function(){if(lu(this.g)&&(EC(this,"onsnrdy"),this.da--,0===this.da)){var a=this.N;a.element.msSetMediaKeys(a.i)}};
g.k.pA=function(a){this.ba()||(EC(this,"onksch"),KC(this,qC(a,this.W)),this.O("keystatuseschange",a))};
g.k.zB=function(){this.ba()||this.V||!nu(this.g)||(EC(this,"onhdet"),this.ca=ZF,this.O("hdproberequired"),this.O("qualitychange"))};
g.k.lB=function(a,b){this.ba()||this.O("ctmp",a,b)};
g.k.vB=function(a,b){this.ba()||this.O("fairplay_next_need_key_info",a,b)};
g.k.AB=function(a,b,c,d){this.ba()||this.O("licenseerror",a,b,c,d)};
g.k.U=function(){this.g.keySystemAccess&&this.element.setMediaKeys(null);this.element=null;this.o=[];for(var a=g.p(this.l.values),b=a.next();!b.done;b=a.next())b=b.value,b.unsubscribe("ctmp",this.lB,this),b.unsubscribe("hdentitled",this.zB,this),b.unsubscribe("keystatuseschange",this.pA,this),b.unsubscribe("licenseerror",this.AB,this),b.unsubscribe("newlicense",this.IB,this),b.unsubscribe("newsession",this.KB,this),b.unsubscribe("sessionready",this.YB,this),b.unsubscribe("fairplay_next_need_key_info",
this.vB,this),b.dispose();a=this.l;a.keys=[];a.values=[];g.N.prototype.U.call(this)};
g.k.Ta=function(){for(var a={systemInfo:this.g.Ta(),sessions:[]},b=g.p(this.l.values),c=b.next();!c.done;c=b.next())a.sessions.push(c.value.Ta());return a};
g.k.Pd=function(){return 0>=this.l.values.length?"no session":this.l.values[0].Pd()+(this.u?"/KR":"")};g.t(MC,g.N);MC.prototype.U=function(){this.i=this.g=null;g.N.prototype.U.call(this)};g.t(XC,g.N);XC.prototype.setPlaybackRate=function(a){this.playbackRate=a};
XC.prototype.aa=function(a){return g.P(this.g.experiments,a)};g.t(cD,g.A);cD.prototype.Pb=function(a){fD(this);this.playerState=a.state;0<=this.i&&g.zB(a,16)&&this.seekCount++;a.state.isError()&&this.send()};
cD.prototype.onError=function(a){"player.fatalexception"!==a&&(a.match(Nka)?this.networkErrorCount++:this.nonNetworkErrorCount++)};
cD.prototype.send=function(){if(!(this.o||0>this.g)){fD(this);var a=g.dD(this.provider)-this.g,b="PLAYER_PLAYBACK_STATE_UNKNOWN",c=this.playerState.stateData;this.playerState.isError()?b=c&&"auth"===c.errorCode?"PLAYER_PLAYBACK_STATE_UNKNOWN":"PLAYER_PLAYBACK_STATE_ERROR":g.S(this.playerState,2)?b="PLAYER_PLAYBACK_STATE_ENDED":g.S(this.playerState,64)?b="PLAYER_PLAYBACK_STATE_UNSTARTED":g.S(this.playerState,16)||g.S(this.playerState,32)?b="PLAYER_PLAYBACK_STATE_SEEKING":g.S(this.playerState,1)&&g.S(this.playerState,
4)?b="PLAYER_PLAYBACK_STATE_PAUSED_BUFFERING":g.S(this.playerState,1)?b="PLAYER_PLAYBACK_STATE_BUFFERING":g.S(this.playerState,4)?b="PLAYER_PLAYBACK_STATE_PAUSED":g.S(this.playerState,8)&&(b="PLAYER_PLAYBACK_STATE_PLAYING");var d=$w(this.provider.videoData);c="LIVE_STREAM_MODE_UNKNOWN";"live"===d?c="LIVE_STREAM_MODE_LIVE":"dvr"===d&&(c="LIVE_STREAM_MODE_DVR");d=gD(this.provider);var e=0>this.i?a:this.i-this.g;a=this.provider.g.Aa+36E5<(0,g.M)();b={started:0<=this.i,stateAtSend:b,joinLatencySecs:e,
playTimeSecs:this.playTimeSecs,rebufferTimeSecs:this.rebufferTimeSecs,seekCount:this.seekCount,networkErrorCount:this.networkErrorCount,nonNetworkErrorCount:this.nonNetworkErrorCount,playerCanaryType:d,isAd:this.provider.videoData.isAd(),liveMode:c,hasDrm:!!g.Xw(this.provider.videoData),isGapless:this.provider.videoData.tg};!a&&this.provider.aa("html5_health_to_gel")&&g.Im("html5PlayerHealthEvent",b);this.provider.aa("html5_health_to_qoe")&&(b.muted=a,this.B(qs(b)));this.o=!0;this.dispose()}};
cD.prototype.U=function(){this.o||this.send();g.A.prototype.U.call(this)};
var Nka=/\bnet\b/;g.t(kD,g.A);g.k=kD.prototype;g.k.vG=function(){var a=g.dD(this.provider);mD(this,a)};
g.k.reportStats=function(a){a=void 0===a?NaN:a;if(!this.ba()&&(a=0<=a?a:g.dD(this.provider),-1<["PL","B","S"].indexOf(this.Ob)&&(!g.Mb(this.g)||a>=this.o+30)&&(g.jD(this,a,"vps",[this.Ob]),this.o=a),!g.Mb(this.g)))if(7E3===this.sequenceNumber&&g.Lm(Error("Sent over 7000 pings")),7E3<=this.sequenceNumber)this.g={};else{pD(this,a);var b=a,c=this.provider.B(),d=c.droppedVideoFrames||0,e=c.totalVideoFrames||0,f=d-this.ea,h=e&&!this.na;if(d>c.totalVideoFrames||5E3<f)this.onError("html5.badframedropcount",
"df."+d+";tf."+c.totalVideoFrames);else(0<f||h)&&g.jD(this,b,"df",[f]);this.ea=d;this.na=e;!g.P(this.provider.g.experiments,"disable_webgl_reporting")&&0<this.B&&(g.jD(this,a,"glf",[this.B]),this.B=0);a={event:"streamingstats"};this.provider.videoData.ya&&(a.fmt=Ip(this.provider.videoData.ya),(b=this.provider.videoData.kc)&&Ip(b)!==a.fmt&&(a.afmt=Ip(b)));a.cpn=this.provider.videoData.clientPlaybackNonce;a.ei=this.provider.videoData.eventId;a.el=kx(this.provider.videoData);a.docid=this.provider.videoData.videoId;
a.content_v=lx(this.provider.videoData);a.ns=this.provider.g.P;a.fexp=this.provider.g.experiments.experimentIds.toString();a.cl=(325714852).toString();this.provider.videoData.adFormat&&(a.adformat=this.provider.videoData.adFormat);(b=$w(this.provider.videoData))&&(a.live=b);Ww(this.provider.videoData)&&(a.drm=1);g.dl()&&this.provider.videoData.fg&&(a.ctt=this.provider.videoData.fg,a.cttype=this.provider.videoData.Fh,this.provider.videoData.mdxEnvironment&&(a.mdx_environment=this.provider.videoData.mdxEnvironment));
a.seq=this.sequenceNumber++;g.Sb(a,this.provider.g.deviceParams);b=g.Dd("//"+this.provider.g.Kl+"/api/stats/qoe",a);a=c="";d=g.p(Object.keys(this.g));for(e=d.next();!e.done;e=d.next())e=e.value,null===this.g[e]?g.Lm(new g.Gm("Stats report key has invalid value",e)):(e="&"+e+"="+this.g[e].join(","),100<e.length?a+=e:c+=e);b+=c;a=a.replace(/ /g,"%20");d=this.provider.videoData.Qd();c=g.P(this.provider.g.experiments,"qoe_with_networkless");e=this.provider.aa("web_player_vss_pageid_header")?this.provider.g.pageId:
void 0;(d=hD(b,e,this.provider.g.sendVisitorIdHeader?this.provider.videoData.visitorData:void 0,d))?(d.method="POST",d.postBody=a,iD(b,d,{token:this.provider.videoData.fg,gw:this.provider.videoData.Fh,mdxEnvironment:this.provider.videoData.mdxEnvironment},void 0,c)):c?g.Em(b):no(b,void 0,a);this.g={}}};
g.k.bD=function(){if(this.provider.videoData.fc){var a=this.provider.videoData.fc;rD(this,"drm-"+a.flavor);rD(this,"eme-"+(a.keySystemAccess?"final":lu(a)?"ms":"com.youtube.fairplay"===a.g?"ytfp":ou(a)?"safarifp":"nonfinal"))}};
g.k.onError=function(a,b){var c=g.dD(this.provider);tD(this,c,a,b);pD(this,c);qD(this)};
g.k.Pb=function(a){var b=a.state,c=g.dD(this.provider);a=this.getPlayerState(a.state);if(a!==this.Ob){if(!(c<this.o)){if("PL"===this.Ob)this.playTimeSecs+=c-this.o;else if("B"===this.Ob&&this.J){this.J=!1;var d=g.O(this.provider.g.experiments,"html5_disable_last_state_change")?this.o:this.W;this.rebufferTimeSecs+=c-d;!this.P&&10<=this.rebufferTimeSecs&&180>=this.playTimeSecs&&(this.provider.C(),this.g.qoealert=["1"],this.P=!0)}"B"!==a||"PL"!==this.Ob&&"PB"!==this.Ob||(this.J=!0);this.o=c}"B"===a&&
"PL"===this.Ob||this.provider.videoData.kh?pD(this,c):mD(this,c);"PL"===a&&this.Aa.fb();g.jD(this,c,"vps",[a]);this.Ob=a;this.o=this.W=c;this.F=!0}a=b.stateData;g.S(b,128)&&a&&tD(this,c,a.errorCode,a.IC);(g.S(b,2)||g.S(b,128))&&this.reportStats(c);this.provider.aa("html5_qoe_user_intent_match_health")?b.sb()&&!this.i&&(0<=this.l&&(this.g.user_intent=[this.l.toString()]),this.i=!0):g.S(b,8)&&this.provider.videoData.Sj&&!this.i&&(this.g.user_intent=[c.toString()],this.i=!0);qD(this)};
g.k.getPlayerState=function(a){if(g.S(a,128))return"ER";if(g.S(a,512))return"SU";if(g.S(a,16)||g.S(a,32))return"S";var b=Oka[wB(a)];g.It(this.provider.g)&&"B"===b&&3===this.provider.getVisibilityState()&&(b="SU");"B"===b&&g.S(a,4)&&(b="PB");return b};
g.k.U=function(){g.A.prototype.U.call(this);window.clearInterval(this.ca)};
var oia=g.La,ZQ={},Oka=(ZQ[5]="N",ZQ[-1]="N",ZQ[3]="B",ZQ[0]="EN",ZQ[2]="PA",ZQ[1]="PL",ZQ);wD.prototype.update=function(){if(this.C){var a=this.provider.i()||0,b=g.dD(this.provider);if(a!==this.g||BD(this,a,b)){var c;if(!(c=a<this.g||a-this.g>b-this.lastUpdateTime+2||BD(this,a,b))){var d=this.provider.md();c=d.volume;var e=c!==this.J;d=d.muted;d!==this.F?(this.F=d,c=!0):(!e||0<=this.o||(this.J=c,this.o=b),c=b-this.o,0<=this.o&&2<c?(this.o=-1,c=!0):c=!1)}c&&(xD(this),this.i=a);this.lastUpdateTime=b;this.g=a}}};CD.prototype.send=function(a){if(!this.ea){var b=g.FD(this);b=g.Dd(this.uri,b);if(this.P)this.J&&(a=g.DD(this)||{},a.method="POST",a.yb={atr:this.J},this.C?g.Em(b,a):g.rl(b,a));else{var c=g.DD(this,a);iD(b,c,{token:this.u,gw:this.N,mdxEnvironment:this.mdxEnvironment},a,this.C)}this.ea=!0}};
CD.prototype.g=function(a){void 0===a&&(a=NaN);return Number(a.toFixed(3)).toString()};HD.prototype.replace=function(a,b){for(var c=g.p(a),d=c.next();!d.done;d=c.next())delete this.g[d.value.encryptedTokenJarContents];GD(this,b)};var ID={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};var ria={android:"ANDROID","android.k":"ANDROID_KIDS","android.m":"ANDROID_MUSIC","android.up":"ANDROID_UNPLUGGED",youtube:"WEB",ytios:"IOS","ytios.k":"IOS_KIDS","ytios.m":"IOS_MUSIC","ytios.up":"IOS_UNPLUGGED"},sia={desktop:"DESKTOP",phone:"MOBILE",tablet:"TABLET"},qia={preroll:"BREAK_PREROLL",midroll:"BREAK_MIDROLL",postroll:"BREAK_POSTROLL"};var tia=new Set("embed_config endscreen_ad_tracking home_group_info ic_track player_request watch_next_request".split(" "));g.t(PD,g.A);PD.prototype.Wc=function(){this.g.update();if(this.provider.videoData.Nb()&&this.provider.videoData.wf&&this.i&&!this.J&&yD(this.g)>=this.provider.videoData.wf){if(this.i&&this.provider.videoData.wf){var a=g.SD(this,"delayplay");a.Aa=!0;a.send();this.J=!0}WD(this)}};
PD.prototype.Pb=function(a){this.ba()||(g.S(a.state,2)?(this.currentPlayerState="paused",g.zB(a,2)&&this.i&&TD(this).send()):g.S(a.state,8)?(this.currentPlayerState="playing",this.i&&isNaN(this.o)&&RD(this,!1)):this.currentPlayerState="paused",this.l&&g.S(a.state,128)&&(XD(this,"error-100"),g.Hj(this.l)))};
PD.prototype.U=function(){g.A.prototype.U.call(this);g.Hj(this.o);this.o=NaN;AD(this.g);g.Hj(this.l)};
PD.prototype.Ta=function(){return g.FD(g.SD(this,"playback"))};g.t($D,g.A);$D.prototype.Pb=function(a){if(g.zB(a,1024)||g.zB(a,2048)||g.zB(a,512)||g.zB(a,4)){if(this.i){var b=this.i;0<=b.i||(b.g=-1,b.delay.stop())}this.qoe&&(b=this.qoe,b.provider.aa("html5_qoe_user_intent_match_health")&&!b.i&&(b.l=-1))}this.g&&this.g.Pb(a);this.qoe&&this.qoe.Pb(a);this.i&&this.i.Pb(a)};
$D.prototype.Wc=function(){this.g&&this.g.Wc()};
$D.prototype.onError=function(a,b){if(this.qoe)this.qoe.onError(a,b);if(this.i)this.i.onError(a)};
$D.prototype.Ta=function(){return this.g?this.g.Ta():{}};bE.prototype.reset=function(){kv(this.timerName)};
bE.prototype.tick=function(a,b){g.rv(a,b,this.timerName)};
bE.prototype.info=function(a,b){g.qv(a,b,this.timerName)};dE.prototype.isEmpty=function(){return this.endTime===this.startTime};eE.prototype.aa=function(a){return g.P(this.g.experiments,a)};
var gE={other:1,none:2,wifi:3,cellular:7};g.t(jE,g.A);jE.prototype.start=function(){this.i.start()};
jE.prototype.stop=function(){this.i.stop()};
jE.prototype.clear=function(){for(var a=g.p(Object.keys(this.g)),b=a.next();!b.done;b=a.next())this.g[b.value].clear()};
jE.prototype.o=function(){for(var a=g.p(Object.keys(this.l)),b=a.next();!b.done;b=a.next())b=b.value,this.g[b].update(this.l[b]());this.i.start()};
kE.prototype.update=function(a){this.l?(this.g.add(a-this.i||0),this.i=a):this.g.add(a)};
kE.prototype.clear=function(){this.g.clear();this.i=0};var $Q={},vE=($Q.WEB_UNPLUGGED="^unplugged/",$Q.WEB_UNPLUGGED_ONBOARDING="^unplugged/",$Q.WEB_UNPLUGGED_OPS="^unplugged/",$Q.WEB_UNPLUGGED_PUBLIC="^unplugged/",$Q.WEB_CREATOR="^creator/",$Q.WEB_KIDS="^kids/",$Q.WEB_EXPERIMENTS="^experiments/",$Q.WEB_MUSIC="^music/",$Q.WEB_REMIX="^music/",$Q.WEB_MUSIC_EMBEDDED_PLAYER="^music/",$Q.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",$Q);wE.prototype.o=function(){};g.t(xE,wE);xE.prototype.i=function(){return Dka};
xE.prototype.o=function(){return{}};
xE.prototype.l=function(a){return a.subscribeEndpoint};
xE.prototype.g=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};g.t(yE,wE);yE.prototype.i=function(){return Eka};
yE.prototype.o=function(){return{}};
yE.prototype.l=function(a){return a.unsubscribeEndpoint};
yE.prototype.g=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};g.t(zE,wE);zE.prototype.i=function(){return Bka};
zE.prototype.l=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
zE.prototype.g=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};g.t(AE,wE);AE.prototype.i=function(){return Cka};
AE.prototype.l=function(a){return a.playlistEditEndpoint};
AE.prototype.g=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};BE.prototype.fetch=function(a,b){var c=this,d=new Request(a,b),e=qd(g.sd(5,Id(d.url,"key")));this.o.g.o("/client_streamz/youtube/web/network/one_platform_requests",e);return g.If(fetch(d).then(function(f){return Aia(c,f,e)})["catch"](function(f){g.Lm(f)}))};var DE;var FE,GE,HE,IE,JE;KE.prototype.encrypt=function(a){var b=a.length;a=new Uint8Array(a.buffer.slice(a.byteOffset,a.byteOffset+b));for(var c=this.l,d=0;d<b&&16>this.i;)a[d++]^=c[this.i++];for(var e=b-(b-d)%16;d<e;)LE(this),a[d++]^=c[0],a[d++]^=c[1],a[d++]^=c[2],a[d++]^=c[3],a[d++]^=c[4],a[d++]^=c[5],a[d++]^=c[6],a[d++]^=c[7],a[d++]^=c[8],a[d++]^=c[9],a[d++]^=c[10],a[d++]^=c[11],a[d++]^=c[12],a[d++]^=c[13],a[d++]^=c[14],a[d++]^=c[15];if(d<b)for(LE(this),this.i=0;d<b;)a[d++]^=c[this.i++];return a};ME.prototype.reset=function(){OE(this);this.update(this.l)};
ME.prototype.update=function(a){var b=0,c=a.length;this.o+=c;this.i&&64<=this.i+c&&(this.B.set(a.subarray(0,64-this.i),this.i),b=64-this.i,this.i=0,NE(this,this.B,0));for(;b+64<=c;b+=64)NE(this,a,b);b<c&&(a=a.subarray(b),this.B.set(a,this.i),this.i+=a.length)};
var Bia=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];TE.prototype.encrypt=function(a){return g.hh(this,function c(){var d=this,e;return g.Aa(c,function(f){if(1==f.g)return g.sa(f,QE(d.g.g,a,d.iv),2);e=f.i;return f["return"](e)})})};
TE.prototype.decrypt=function(a,b){return g.hh(this,function d(){var e=this,f;return g.Aa(d,function(h){if(1==h.g)return g.sa(h,QE(e.g.g,a,b),2);f=h.i;return h["return"](f)})})};$E.prototype.zd=function(){var a=new UE;YE(a,1,this.hl);YE(a,2,this.gl);YE(a,6,this.deviceId);YE(a,15,this.userAgent);var b=this.clientName;WE(a,128);WE(a,b);YE(a,17,this.clientVersion);return ZE(a)};aF.prototype.zd=function(){var a=new UE;YE(a,16,this.referrer);var b=this.signatureTimestamp;WE(a,384);WE(a,b);return ZE(a)};bF.prototype.zd=function(){var a=new UE;XE(a,2,this.encryptedOnesiePlayerRequest);XE(a,5,this.encryptedClientKey);XE(a,6,this.iv);XE(a,7,this.hmac);var b=this.serializeResponseAsJson?1:0;WE(a,80);WE(a,b);return ZE(a)};cF.prototype.zd=function(){var a=new UE;YE(a,1,this.name);YE(a,2,this.value);return ZE(a)};dF.prototype.zd=function(){var a=new UE;XE(a,1,this.client.zd());return ZE(a)};iF.prototype.zd=function(){var a=new UE;YE(a,1,this.url);for(var b=g.p(this.httpHeaders),c=b.next();!c.done;c=b.next())XE(a,2,c.value.zd());XE(a,3,this.postBody.zd());return ZE(a)};jF.prototype.zd=function(){var a=new UE;XE(a,3,this.Xs.zd());return ZE(a)};kF.prototype.zd=function(){var a=new UE;XE(a,1,this.contentPlaybackContext.zd());return ZE(a)};lF.prototype.zd=function(){var a=new UE;XE(a,1,this.Tt.zd());YE(a,2,this.videoId);XE(a,4,this.playbackContext.zd());return ZE(a)};nF.prototype.feed=function(a){Np(this.g,a);this.l()};
nF.prototype.l=function(){var a=g.p(mF(this.g,0));var b=a.next().value;var c=a.next().value;c=g.p(mF(this.g,c));a=c.next().value;c=c.next().value;!(0>b||0>a)&&c+a<=this.g.totalLength&&(c=this.g.split(c).bk.split(a),a=c.Fp,c=c.bk,this.i(b,a),this.g=c,this.l())};oF.prototype.fetch=function(){return g.hh(this,function b(){var c=this,d,e,f,h,l,m,n,q,r,u,w,B,z,D;return g.Aa(b,function(F){switch(F.g){case 1:return d=c,c.B.start(),c.g.tick("ogpd"),ta(F,2),g.sa(F,Kia(c),4);case 4:e=F.i;ua(F,3);break;case 2:return f=va(F),f instanceof g.ps?pF(c,f):(h=new g.ps("onesie.request",!1),pF(c,h)),F["return"](c.o);case 3:c.g.tick("osor");l=hq(c.videoData.L());m=e.zd();n={method:"POST",body:m,headers:{"Content-Type":"text/plain"}};q=g.La;r=function(){qF(d)};
u=function(){qF(d);var H,V=d.i;V.Wk()?H=new g.ps("onesie.net",!1,{msg:V.Wk()}):400<=V.status?H=new g.ps("onesie.net.badstatus",!1):V.Dp()?d.C||(H=new g.ps("onesie.response.noplayerresponse",!1)):H=new g.ps(204===V.status?"onesie.net.nocontent":"onesie.net.connect",!1);H?pF(d,H):d.g.tick("orf")};
w=g.La;B=Hia(c.videoData);if(!B)return z={url:"0"},D=new g.ps("onesie.unavailable.hotconfig",!1,z),pF(c,D),F["return"](c.o);c.g.tick("ocs");c.i=new ky(B,q,r,u,w,l,n);return F["return"](c.o)}})})};
oF.prototype.F=function(){pF(this,new g.ps("onesie.request",!1,{timeout:"1"}))};g.t(xF,g.N);g.k=xF.prototype;g.k.U=function(){window.clearInterval(this.Gb);lB(this.tb);this.R.unsubscribe("visibilitystatechange",this.tb);AF(this);zF(this);g.uk(this.na);TF(this);delete this.P;g.Nd(this.g);g.Nd(this.J);this.da=null;this.za=!1;this.Ka=0;g.N.prototype.U.call(this)};
g.k.Vf=function(a,b,c){c=void 0===c?!0:c;this.X.length=0;this.Ca=null;this.ca.reset();this.ea.reset();this.Xa=!1;this.Ih=0;this.Ad=!0;this.ab=null;this.i&&this.i.stopVideo();XF(this);AF(this);zF(this);g.uk(this.na);this.ma.clear();g.Nd(this.g);g.Nd(this.J);if(2==this.Wa||this.u.so)a.Hz=!0;var d=this.u.i;var e=this.u.l,f;(f=a.tn)||(f=(f=a.Aw)&&UQ.hasOwnProperty(f)&&VQ.hasOwnProperty(f)?VQ[f]+"_"+UQ[f]:void 0);if(f){var h=f.match(WQ);if(h&&5===h.length){if(h=f.match(WQ)){var l=Number(h[3]),m=[7,8,10,
5,6];h=!(1===Number(h[1])&&8===l)&&0<=m.indexOf(l)}else h=!1;d=d||e||h?f:null}else d=null}else d=null;d&&(a.adFormat=d);2==this.Wa&&(a.Bi=!0);if(this.R.isFullscreen()||this.u.i)d=g.io("yt-player-autonavstate"),a.autonavState=d||(this.u.i?2:this.g.autonavState);this.kd=c;this.g=a;this.g.subscribe("dataupdated",this.gN,this);this.g.subscribe("dataloaded",this.Hs,this);this.g.subscribe("dataloaderror",this.Dj,this);GF(this,a);vF(this,b);wF(this);this.za=!1;this.Ka=0;HF(this,"newdata");JF(this,new g.oB);
this.C.Vf(this.g);dx(a)&&(a=this.g.errorDetail,b=this.g.em,this.Jc("auth",unescape(b.reason),a,a,b.subreason||void 0))};
g.k.getVideoData=function(){return this.g};
g.k.L=function(){return this.u};
g.k.Hs=function(){if(this.g.Nb()){var a=this.J;0<g.O(a.Ac.experiments,"html5_player_min_build_cl")&&325714852<g.O(a.Ac.experiments,"html5_player_min_build_cl")&&UC(a,"oldplayer");Yia(this)}else if(this.g.Qi||this.g.Im){if(!this.ua||!g.It(this.u)||!this.g.ra)if(this.g.Qi)Yfa(this.g);else{a=this.B;a.qoe&&(a=a.qoe,rD(a,"protected"),a.provider.videoData.fc?a.bD():a.provider.videoData.subscribe("dataloaded",a.bD,a));a=this.g;a.zf||a.fa&&Hr(a.fa);var b={};a.fa&&(b=Du(Hw(a),a.Sa.o,a.fa));var c=a.Sa.experiments,
d=a.fD;var e=a.useCobaltWidevine?a.aa("html5_enable_tvos_widevine")&&Rl()?Ow(a):Gw(a,"html5_enable_androidtv_cobalt_widevine")&&Nl("cobalt")&&Nl("android")?!0:!1:!1;b=new Cv(b,c,d,e);g.C(a,b);a.Im=!1;a.uc=!0;a=(0,g.x)(a.YG,a);b.Va=a;b.l=[];qu(b.experiments)?Dv(b):Xea(b)}}else!this.g.uc&&this.kd&&Via(this)};
g.k.RL=function(a){var b=this;if(!this.ba()&&!a.videoData.ba()&&(this.P=a,uha(this.C,this.P),!this.g.ra||0<this.g.ii&&!Pw(this.g)||(this.seekTo(g.hG(this)),MF(this,"playbackData")),this.g.wa.g()&&(g.P(this.u.experiments,"hoffle_save")&&this.u.l&&this.g.lengthSeconds<=g.O(this.u.experiments,"hoffle_max_video_duration_secs")&&0===this.g.startSeconds&&!Vv(this.g.videoId)&&(Tw(this.g,!0),Zfa(this.g,new Nv(this.g.videoId,2,{ll:!0,Lp:!0,videoDuration:this.g.lengthSeconds}))),this.o?g.Lm(Error("Duplicated Loader")):
fG(this)),bG(this),cG(this,"html5_nonblocking_media_capabilities"))){var c=Date.now();(a=jia(this.W,a))&&a.then(function(){var d=Date.now();b.Ya("mclatency",(d-c).toString())})}};
g.k.SL=function(a){this.ba()||(a=rs(a),this.R.isBackground()?(tG(this,"vp_none_avail"),this.Ca=null,this.ca.reset()):(this.ca.g=!0,this.Jc(a.errorCode,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",qs(a.details))))};
g.k.sendAbandonmentPing=function(){g.S(this.getPlayerState(),128)||(this.O("internalAbandon"),this.Fv(!0),AF(this),g.uk(this.na))};
g.k.Jc=function(a,b,c,d,e){var f,h;g.Jb(Mka,b)?f=b:b?h=b:f="GENERIC_WITHOUT_LINK";c=(c||"")+(";a6s."+parseInt(g.K("DCLKSTAT",0),10));a={errorCode:a,errorDetail:d,errorMessage:h||g.vJ[f]||"",Zs:f,Yg:e||"",IC:c};HF(this,"dataloaderror");JF(this,pB(this.l,128,a));g.uk(this.na);zF(this);this.Tf()};
g.k.getPlayerState=function(){return this.l};
g.k.getPlayerType=function(){return this.Wa};
g.k.getPreferredQuality=function(){if(this.P){var a=this.P;a=zu(a.videoData.Hr,a.videoData.Jx);a=Au(a)}else a="auto";return a};
g.k.isGapless=function(){return!!this.i&&this.i.isView()};
g.k.playVideo=function(){var a=this,b,c,d,e;return Ba(function(f){if(1==f.g){var h;(h=g.S(a.l,128))||(h=a.J,h.o?(h.o=!1,QC(h),h=!0):h=!1);if(h)return f["return"]();a.i&&(h=a.B,h.i&&eD(h.i),h.qoe&&uD(h.qoe));KF(a);g.S(a.l,64)&&JF(a,qB(a.l,8));return a.ea.isFinished()&&a.i?a.P||!a.Ca?f.Ic(2):g.sa(f,a.Ca,2):f["return"]()}if(!a.g.wa)return b=a.g.ra&&!g.Ks(a.u.o,!0)?"html5.unsupportedlive":Ww(a.g)?"fmt.unplayable":"fmt.noneavailable",g.Lm(Error("selectableFormats")),a.Jc(b,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
"selectableFormats.1"),f["return"]();if(a.R.i&&a.g.wa.g())return EF(a),f["return"]();if(a.g.ra){c=a.getCurrentTime()<a.Ib()-15;d=g.ex(a.g)&&g.S(a.l,4);e=!cG(a,"html5_dompaused_unpause_killswitch")&&g.S(a.l,1024);e||!c&&!d||(d?(a.seekTo(Infinity),MF(a,"unpauseLiveOnly")):(a.seekTo(a.Ib()),MF(a,"outOfWindow")));!a.isAtLiveHead(void 0,!0)&&g.QB(a.C)&&(a.seekTo(Infinity),MF(a,"peggedToLive"));if(h=g.S(a.l,256)&&a.g.Ye)h=a.C,h=h.P&&!isFinite(h.o);if(h)return JF(a,sB(a.l,8,4)),f["return"]()}g.S(a.l,4)&&
g.S(a.l,16)&&JF(a,sB(a.l,9,4));if(FF(a))return!cG(a,"html5_ignore_airplay_events_on_new_video_killswitch")&&a.i&&a.i.Aj()&&(a.kb=(0,g.M)()),a.u.To?g.Fj((0,g.x)(a.ev,a),0):a.ev(),f["return"]();a.ev();f.g=0})};
g.k.XE=function(){var a=this.g;qx(a);a.fa.dispose();a.fa=void 0;Jw(a,a.adaptiveFormats);yF(this,!0);this.O("localmediachange",new Nv(this.g.videoId,4,{ll:!0}))};
g.k.YN=function(){VF(this);var a=this.g.fa&&Hr(this.g.fa),b=this.i&&this.i.isView();a||b?(this.o&&(a=this.o,a.g.W=!1,a.l&&RA(a)),yF(this)):(JF(this,qB(this.l,16)),FF(this),g.uB(this.l)&&this.playVideo())};
g.k.RK=function(){XF(this);zF(this);kG(this);this.playVideo()};
g.k.cj=function(){if(!this.P)return[];var a=ZC(this.W,this.P,YF(this,!0));return this.P.wa.cj(a)};
g.k.getUserPlaybackQualityPreference=function(){return this.g.wa&&!this.g.wa.g()?Au(this.g.Hr):Os()};
g.k.getAvailableAudioTracks=function(){return this.g.getAvailableAudioTracks()};
g.k.getAudioTrack=function(){return this.g.getAudioTrack()};
g.k.wH=function(){var a=this.B;a.provider.g.Wa||3===a.provider.getVisibilityState()||(a.provider.g.Wa=!0);g.aE(a);if(a.i){var b=a.i;b.u&&0>b.g&&3!==b.provider.getVisibilityState()&&eD(b)}a.qoe&&(a=a.qoe,a.provider.aa("html5_qoe_user_intent_match_health")&&a.X&&0>a.l&&a.provider.g.Wa&&uD(a));g.O(this.u.experiments,"html5_background_quality_cap")&&this.o&&dG(this);this.u.qo&&!this.g.backgroundable&&this.i&&!this.R.i&&(this.R.isBackground()&&this.i.rq()?(this.Ya("bgmobile","suspend"),this.Tf(!0)):this.R.isBackground()||
FF(this)&&this.Ya("bgmobile","resume"))};
g.k.GL=function(a,b){this.JB(new Hy(b,a))};
g.k.JB=function(a){this.Da.set(a.initData,a);this.F&&(JC(this.F,a),cG(this,"html5_eme_loader_sync")||this.Da.remove(a.initData))};
g.k.DB=function(){g.Ls&&this.la&&this.la.g&&this.F&&(cia(this.F,this.la.g),this.la=null)};
g.k.eN=function(a){this.g.PD=wu("auto",a,!1,"u");dG(this)};
g.k.uH=function(a){PF(this,a.reason,a.video.info,a.audio.info)};
g.k.jL=function(a){NF(this,a.reason,a.audio.info)};
g.k.kL=function(a){this.O("localmediachange",a)};
g.k.Dj=function(a){iia(this.J,a,g.S(this.l,4)||g.S(this.l,512))};
g.k.pauseVideo=function(a){a=void 0===a?!1:a;if((g.S(this.l,64)||g.S(this.l,2))&&!a)if(g.S(this.l,8))JF(this,sB(this.l,4,8));else return;g.S(this.l,128)||(a?JF(this,qB(this.l,256)):JF(this,sB(this.l,4,8)));this.i&&this.i.pause();g.ex(this.g)&&this.o&&WF(this,!1)};
g.k.stopVideo=function(){this.pauseVideo();this.o&&(WF(this,!1),BA(this.o))};
g.k.Tf=function(a){a=void 0===a?!1:a;this.i&&(this.i.stopVideo(),XF(this),zF(this),g.S(this.l,128)||(a?JF(this,rB(rB(qB(this.l,4),8),16)):JF(this,pB(this.l))),this.u.K.remove(this.g.videoId))};
g.k.seekTo=function(a,b){b=void 0===b?{}:b;g.S(this.l,2)&&FF(this);this.C.seekTo(a,b)};
g.k.getCurrentTime=function(){return this.C.getCurrentTime()};
g.k.getPlaylistSequenceForTime=function(a){return this.g.getPlaylistSequenceForTime(a-this.Fb())};
g.k.getDuration=function(){return this.g.lengthSeconds?this.g.lengthSeconds+this.Fb():g.hG(this)?g.hG(this):0};
g.k.aG=function(){var a=new $ga;if(this.o){var b=this.u.schedule;a.l=b.F;a.u=b.N;a.bandwidthEstimate=dt(b);a.g="d."+at(b).toFixed(2)+";st."+(1E9*(b.g.g()||0)).toFixed(2)+";bw."+b.i.g().toFixed(0)+";abw."+b.J.g().toFixed(0)+";v50."+Ys(b.l,.5).toFixed(2)+";v92."+Ys(b.l,.92).toFixed(2)+";v96."+Ys(b.l,.96).toFixed(2)+";v98."+Ys(b.l,.98).toFixed(2);b=this.o;if(b.l&&!As(b.l)&&(a.i=uz(b.i,b.B),a.o=uz(b.o,b.B),b.g.na)){var c=tz(b.i),d=tz(b.o),e=is(b.l.i.Dd(),"_",5),f=is(b.l.g.Dd(),"_",5);a.g=(a.g||"")+(";lvq."+
c+";laq."+d+";lvb."+e+";lab."+f)}a.bandwidthEstimate=Jz(b.N)}else this.i&&(a.i=Fx(this.i));a.B=this.Sy();return a};
g.k.Ta=function(a){var b={};if(void 0===a?0:a){g.Ua(b,this.B.Ta());this.i&&(g.Ua(b,this.i.Ta()),g.Ua(b,this.Ct()));this.o&&g.Ua(b,this.o.Ta());this.F&&(b.drm=this.F.Ta());b.state=this.l.state.toString(16);g.S(this.l,128)&&(b.debug_error=this.l.stateData);LF(this)&&(b.prerolls=this.X.join(","));this.g.ji&&(b.ismb=this.g.ji);"UNKNOWN"!=this.g.latencyClass&&(b.latency_class=this.g.latencyClass);this.g.isLowLatencyLiveStream&&(b.lowlatency="1");this.g.ra&&(this.g.fa&&Wr(this.g.fa)&&(b.segduration=Wr(this.g.fa)),
a=this.C,b.lat=a.N?$A(a.N.o):0,b.liveutcstart=this.g.liveUtcStartSeconds);b.relative_loudness=this.g.yn.toFixed(3);if(a=g.OF(this))b.optimal_format=a.xa().qualityLabel;b.user_qual=Os()}b.debug_videoId=this.g.videoId;return b};
g.k.addCueRange=function(a){var b=this.V;a=[a];b.i();mA(b.g,a);b.o=NaN;b.i();this.g.enableServerStitchedDai&&this.o&&(b=this.o,a=b.B,0<a&&30<Math.abs(a-b.na)&&(b.na=a,b.o&&xz(b.o,b.na),b.i&&xz(b.i,b.na)))};
g.k.removeCueRange=function(a){oA(this.V,[a])};
g.k.gN=function(){HF(this)};
g.k.togglePictureInPicture=function(){this.i&&this.i.togglePictureInPicture()};
g.k.vH=function(a){this.Be.stop();var b=a.target.nd();if(this.i&&this.i.nd()&&this.i.nd()==b){zG(this,a.type);switch(a.type){case "error":var c=Jx(this.i)||"";if("capability.changed"==c){EF(this);return}if(0<this.i.Mf()&&SC(this.J,c,{msg:this.i.Yk()}))return;if(this.R.isBackground()&&4==this.i.Mf()){this.Tf();tG(this,"unplayable");return}break;case "durationchange":c=this.i.getDuration();(!this.K||isFinite(c)&&0<c)&&1!=c&&this.g.lengthSeconds!=c&&(this.g.lengthSeconds=c,HF(this));break;case "ratechange":this.o&&
this.o.setPlaybackRate(this.i.getPlaybackRate());c=this.V;c.started=!0;c.i();var d=this.B;c=this.getPlaybackRate();if(d.qoe){d=d.qoe;var e=g.dD(d.provider);c&&c!==d.la&&(g.jD(d,e,"rate",[c]),d.la=c);d.reportStats(e)}break;case "loadedmetadata":AG(this),this.O("onLoadedMetadata");case "loadstart":window.clearInterval(this.Gb);this.Gs()||(this.Gb=Gj((0,g.x)(this.Gs,this),100));break;case "progress":case "suspend":mG(this);this.O("onLoadProgress",this,this.i?g.ex(this.g)?1:fx(this.g)?this.isAtLiveHead()||
g.QB(this.C)?1:xha(this.C):Ix(this.i):0);break;case "playing":this.N.tick("plev");pG(this);zv("plev");this.ae&&(this.ae=!1,this.isAtLiveHead()||(this.seekTo(Infinity),MF(this,"onPlaying")));break;case "timeupdate":pG(this);c=this.i&&!this.i.getCurrentTime();d=this.i&&0==this.i.Le();if(c&&(!this.Xa||d))return;this.Xa=this.Xa||!!this.i.getCurrentTime();this.Gs();mG(this);if(!this.i||this.i.nd()!=b)return;this.O("onVideoProgress",this,this.getCurrentTime());break;case "waiting":if(0<this.i.hj().length&&
0==this.i.Od().length&&0<this.i.getCurrentTime()&&5>this.i.getCurrentTime()&&this.o)return;break;case "resize":AG(this);this.g.ya&&"auto"==this.g.ya.xa().quality&&this.O("internalvideoformatchange",this.g,!1);break;case "pause":if(this.Te&&g.S(this.l,8)&&!g.S(this.l,1024)&&0==this.getCurrentTime()&&g.Yt){tG(this,"safari_autoplay_disabled");return}}if(this.i&&this.i.nd()==b){this.O("videoelementevent",a);b=this.l;if(!g.S(b,128)){c=this.La;e=this.i;var f=this.u.experiments;d=b.state;e=e?e:a.target;
var h=e.getCurrentTime();if(!g.S(b,64)||"ended"!==a.type&&"pause"!==a.type){var l=e.pg()||1<h&&1.1>Math.abs(h-e.getDuration());h="ended"===a.type||"waiting"===a.type||"timeupdate"===a.type&&!g.S(b,4)&&!hE(c,h);if("pause"===a.type&&e.pg()||l&&h)0<e.rp()&&e.nd()&&(d=14);else switch(a.type){case "error":Jx(e)&&(d|=128);break;case "pause":g.S(b,256)?(d^=256)||(d=64):g.S(b,32)||g.S(b,2)||g.S(b,4)||(d=4,g.S(b,1)&&g.S(b,8)&&(d|=1));break;case "playing":d=(d|8)&-3077;f&&g.P(f,"html5_playing_clears_unstarted_killswitch")||
(d&=-65);hE(c,e.getCurrentTime())&&(d&=-2);g.S(b,1)&&iE(c,e.getCurrentTime(),(0,g.M)(),Fx(e))&&(d|=1);break;case "seeking":d|=16;g.S(b,8)&&(d|=1);d&=-3;break;case "seeked":d&=-17;break;case "waiting":g.S(b,2)||(d|=1);iE(c,e.getCurrentTime(),(0,g.M)(),Fx(e));break;case "timeupdate":f=g.S(b,16),l=g.S(b,4),(g.S(b,8)||f)&&!l&&hE(c,e.getCurrentTime())&&(d=8),iE(c,e.getCurrentTime(),(0,g.M)(),Fx(e))&&(d|=1)}}c=d;d=null;c&128&&(d=a.target,(e=Jx(d))?(f="GENERIC_WITHOUT_LINK",l=d.Ta(),l.mediaElem="1",/AUDIO_RENDERER/.test(d.Yk())&&
(f="HTML5_AUDIO_RENDERER_ERROR"),d={errorCode:e,errorMessage:g.vJ[f]||"",Zs:f,IC:qs(l)}):d=null);b=pB(b,c,d)}!g.S(this.l,1)&&g.S(b,1)&&yG(this,"evt_"+a.type);JF(this,b)}}};
g.k.WM=function(){this.Ya("misstimeupdate","");oG(this)&&!g.S(this.l,2)&&uF(this,!0,!1)};
g.k.bK=function(a){a="available"==a.i.availability;a!=this.Wd&&(this.Wd=a,this.O("airplayavailabilitychange"))};
g.k.cK=function(){var a=this,b=(0,g.M)();if(isNaN(this.kb)||!(2E3>b-this.kb)){var c=this.i.Aj();this.kb=b;c!=this.R.i&&(pha(this.R,c),EF(this).then(function(){return FF(a)}));
this.O("airplayactivechange")}};
g.k.Gs=function(){var a=this.i;a&&this.Xa&&!this.g.Ye&&!wv("vfp",this.N.timerName)&&2<=a.Le()&&!a.pg()&&0<ms(a.Od())&&this.N.tick("vfp");return(a=this.i)&&!this.g.Ye&&0<a.getDuration()&&(!wv("pbp",this.N.timerName)&&a.vi()&&2<=a.Le()&&0<ms(a.Od())&&this.N.tick("pbp"),a=a.getCurrentTime(),hE(this.La,a))?(rG(this),!0):!1};
g.k.uG=function(){if(this.i&&!g.S(this.l,128)){this.g.kh&&g.O(this.u.experiments,"html5_log_rebuffer_events")&&zG(this,"pfx");var a=this.getCurrentTime(),b=Fx(this.i),c=g.S(this.l,8),d=hE(this.La,a),e=iE(this.La,a,(0,g.M)(),b);c&&d?JF(this,rB(this.l,1)):c&&e?(c=this.getDuration(),d=this.g.ra,(cG(this,"html5_set_ended_in_pfx_live")||!d)&&c&&1.1>Math.abs(c-a)?(this.Ya("setended","ct."+a+";bh."+b+";dur."+c+";live."+ +d),d&&cG(this,"html5_set_ended_in_pfx_live_cfl")||(this.i.oq()?this.seekTo(0):uF(this))):
(g.vB(this.l)||yG(this,"progress_fix"),JF(this,qB(this.l,1)))):(c&&!d&&!e&&0<a&&(c=(Date.now()-this.Ih)/1E3,d=this.getDuration().toFixed(2),a>d-1&&this.Ya("misspg","t:"+a.toFixed(2)+";d:"+d+";r:"+c.toFixed(2)+";bh:"+b.toFixed(2))),g.S(this.l,4)&&g.vB(this.l)&&5<Fx(this.i)&&JF(this,rB(this.l,1)));mG(this)}};
g.k.TF=function(){return this.o?Jz(this.o.N):dt(this.u.schedule)};
g.k.WF=function(){return this.u.schedule.F};
g.k.Sy=function(){return this.isAtLiveHead()&&this.l.sb()?this.Wy():NaN};
g.k.Wy=function(){if(!this.g.ra||!this.g.fa||!this.o)return NaN;var a=Pw(this.g)?this.o.ua.g()||0:this.g.fa.K;return(0,g.E)()/1E3-nG(this)-a};
g.k.mG=function(){this.g.ra||this.O("connectionissue")};
g.k.ev=function(){var a=this;this.i&&(this.ab=this.i.playVideo());if(this.ab){var b=this.ab;b.then(void 0,function(c){if(!(g.S(a.l,4)||g.S(a.l,256)||a.ab!=b||c&&"AbortError"==c.name&&c.message&&c.message.includes("load"))){var d="promise";c&&c.name&&(d+=";m."+c.name);try{JF(a,qB(a.l,2048))}catch(e){}tG(a,d);a.Te=!0}})}};
g.k.bL=function(a,b,c,d){var e=this;d=void 0===d?"LICENSE":d;c=c.substr(0,256);if("drm.keyerror"==a&&this.F&&1<this.F.l.keys.length&&96>this.Ue)a="drm.sessionlimitexhausted",b=!1;else if(cG(this,"html5_drm_fallback_to_playready_on_retry")&&"drm.keyerror"==a&&2>this.Ve&&(this.Ve++,XF(this),1<this.g.ql.length&&(this.g.fc=this.g.ql[1]),SC(this.J,a,{detail:c})))return;if(b)if(this.g.ya&&Yq(this.g.ya.xa()))this.u.o.i=!1,this.B.onError("qoe.restart",qs({e:a,detail:c,r:"hdr"})),EF(this).then(function(){return FF(e)});
else{if(this.Jc(a,d,c),cG(this,"html5_exile_on_drm_fatal")&&NC(this.J,{detail:c}))return}else this.B.onError(a,c);"drm.sessionlimitexhausted"==a&&(this.Ya("retrydrm","s"),this.Ue++,xG(this))};
g.k.dL=function(){var a=this,b=g.O(this.u.experiments,"html5_license_constraint_delay"),c=$l();b&&c?(b=new g.G(function(){bG(a);HF(a)},b),g.C(this,b),b.start()):(bG(this),HF(this))};
g.k.cL=function(){var a=this;g.Ls&&(this.la=hea(this.g.fa))&&(this.la.g?g.zf(function(){a.DB()}):lha(this.o,this.la))};
g.k.tH=function(a){this.O("heartbeatparams",a)};
g.k.ZK=function(a){this.Ya("keystatuses",rC(a));var b="auto";this.g.ya&&(b=this.g.ya.xa().quality);!sC(a,b,!1)||tC(a,"AUDIO")&&tC(a,"SD")?this.g.ya&&Yq(this.g.ya.xa())&&(!a.K||sC(a,b,!0))&&aja(this):this.Zd?this.O("drmoutputrestricted"):(this.Zd=!0,this.Ya("retrydrm","o"),$F(this),xG(this))};
g.k.hL=function(){if(!this.g.Ye&&this.i&&!this.R.isBackground()){var a="0";0<this.i.Le()&&5<=Fx(this.i)&&this.g.wa&&this.g.wa.g()&&(JF(this,qB(this.l,1)),yG(this,"load_soft_timeout"),this.O("playbackstalledatstart"),a="1");sG(this);if(cG(this,"html5_new_video_qoe_restart_info_killswitch"))a={restartmsg:a},LF(this)&&(a.prerolls=this.X.join(",")),this.o&&g.Ua(a,this.o.Ta()),this.i&&g.Ua(a,this.i.Ta());else{var b=this.g.wa;a={restartmsg:a,mfmt:this.g.Ep()?"0":"1",mdrm:b&&b.videoInfos&&b.videoInfos.length&&
b.videoInfos[0].Fc&&!this.F?"1":"0",mfmtinfo:this.g.ya?"0":"1",prerolls:LF(this)?this.X.join(","):"0"};this.F&&(a.drmp=dia(this.F));b=[this.o,this.i].filter(function(d){return!!d});
b=g.p(b);for(var c=b.next();!c.done;c=b.next())g.Ua(a,c.value.Ta())}this.B.onError("qoe.start15s",qs(a));this.O("loadsofttimeout")}};
g.k.OM=function(){g.S(this.l,128)||this.K&&zs(this.K)||(this.B.onError("qoe.restart",qs({detail:"bufferattach"})),this.Kh++,yF(this))};
g.k.Fv=function(a){var b=this;a=void 0===a?!1:a;if(!this.za){var c=new Aha(this.g,cG(this,"web_player_inline_botguard"));if("c1a"in c.g&&!ZB(c)&&(2==this.Ka&&.01>Math.random()&&g.Lm(Error("Botguard not available after 2 attempts")),!a&&5>this.Ka)){this.jd.fb();this.Ka++;return}if("c1b"in c.g){var d=wia(this.B);d&&Dha(c).then(function(e){e&&!b.za&&d&&(d(e),b.za=!0)})}else if(a=Bha(c))via(this.B,a),this.za=!0}};
g.k.Ib=function(){return this.C.Ib()};
g.k.Fb=function(){return this.C?this.C.Fb():0};
g.k.getStreamTimeOffset=function(){return this.C?this.C.getStreamTimeOffset():0};
g.k.setPlaybackRate=function(a){var b=this.g.wa&&this.g.wa.videoInfos&&32<this.g.wa.videoInfos[0].xa().fps&&g.It(this.u);this.zb!=a&&b&&(this.W.setPlaybackRate(a),$F(this));this.zb=a;this.i&&this.i.setPlaybackRate(a)};
g.k.getPlaybackRate=function(){return this.zb};
g.k.getPlaybackQuality=function(){var a="unknown";if(this.g.ya&&(a=this.g.ya.xa().quality,"auto"==a&&this.i)){var b=g.BF(this);b&&0<b.videoHeight&&(a=Uq(b.videoWidth,b.videoHeight))}return a};
g.k.sendVideoStatsEngageEvent=function(a,b){var c=this.B;c.g?(c=g.SD(c.g,"engage"),c.B=a,c.send(b)):b&&b()};
g.k.isAtLiveHead=function(a,b){return this.g.ra&&(this.Ad||(void 0===b?0:b))?this.C.isAtLiveHead(a):!1};
g.k.Ct=function(){return this.i?this.i.getVideoPlaybackQuality():{}};
g.k.setLoop=function(a){this.Yd=a;this.i&&this.i.setLoop(a)};
g.k.dH=function(a){var b=cG(this,"html5_unrewrite_timestamps");this.Ya("timestamp","enabled."+b+";t."+a.toString())};
g.k.Ya=function(a,b,c){var d=this.B;d.qoe&&lD(d.qoe,a,b,void 0===c?!1:c)};
g.k.hA=function(a,b){this.B.onError(a,qs(b))};g.t(CG,g.A);g.k=CG.prototype;g.k.isFinished=function(){return 6==this.l.status};
g.k.getStatus=function(){return this.l};
g.k.Pi=function(){var a=this.g.getVideoData(),b=this.i.getVideoData(),c;if((c=a.wa)&&!(c=!a.fa)){c=a.fa;for(var d=!1,e=!1,f=g.p(Object.values(c.g)),h=f.next();!h.done;h=f.next())h=h.value,h.info.audio&&h.index.Nb()&&(d=!0),h.info.video&&h.index.Nb()&&(e=!0);c.g["0"]&&(e=!0);c=d&&e}if(c)if(this.g.i){h=bja(this.R,this.g,this.i,this.C);f=DG(this);c=f.zF;e=f.cB;d=f.yF;f=f.bB;if(!this.J){var l=1E3*PB(this.i.C),m=PB(this.g.C);m=1E3*(d-c-m);h&&"in-the-past"==h&&(m=0);a=a.isAd();var n=this.i.B;n.qoe&&(n=
n.qoe,n.u={aO:Number(lD(n,"glrem","nst."+l.toFixed()+";rem."+m.toFixed()+";ca."+ +a)),dB:l,QN:m,isAd:a});this.J=!0}h?BG(this,"cannot_apply_"+h+";transitionTimeMs."+this.C):2==this.l.status?IG(this):(a=this.g.K)&&zs(a)&&(!xs(a)&&g.Ql()?BG(this,"mse_closed"):b.fa&&Hr(b.fa)&&a.i&&!a.i.mp()?BG(this,"encr_upgrade"):(b=this.g.i,b.pg()?BG(this,"elem_ended"):0>e?BG(this,"next_player_future"):(this.F=d,this.o=Ds(a,c,d,!0),this.u=Ds(a,e,f,!1),a=this.i.getVideoData().clientPlaybackNonce,this.g.Ya("gaplessPrep",
"cpn."+a),lG(this.g,this.o),UF(this.g,EG(b,c,d,!this.g.getVideoData().isAd())),FG(this,2),IG(this))))}else BG(this,"no-elem")};
g.k.fl=function(a){var b=HG(this),c=a==b.cD;b=c?this.o.g:this.o.i;c=c?this.u.g:this.u.i;if(b.isActive()&&!c.isActive()){var d=this.F;ks(a.Dd(),d-.01)&&(FG(this,4),b.setActive(!1),this.i.Ya("sbh","1"),c.setActive(!0));a=this.u.i;this.u.g.isActive()&&a.isActive()&&FG(this,5)}};
g.k.HB=function(){4<=this.l.status&&6>this.l.status&&BG(this,"player-reload-after-handoff")};
g.k.U=function(){GG(this);this.g.unsubscribe("newelementrequired",this.HB,this);if(this.o){var a=this.o.i;this.o.g.g.unsubscribe("updateend",this.fl,this);a.g.unsubscribe("updateend",this.fl,this)}g.A.prototype.U.call(this)};
g.k.GA=function(a){g.zB(a,128)&&BG(this,"player-error-event")};g.t(JG,g.A);JG.prototype.clearQueue=function(){this.u&&this.u.reject("Queue cleared");KG(this)};
JG.prototype.U=function(){KG(this);g.A.prototype.U.call(this)};g.t(SG,g.A);SG.prototype.get=function(a){QG(this);var b=this.data.find(function(c){return c.key===a});
return b?b.value:null};
SG.prototype.set=function(a,b,c){this.remove(a,!0);QG(this);a={key:a,value:b,expire:Infinity};c&&isFinite(c)&&(c*=1E3,a.expire=(0,g.M)()+c);for(this.data.push(a);this.data.length>this.l;)(c=this.data.shift())&&TG(this,c,!0);RG(this)};
SG.prototype.remove=function(a,b){b=void 0===b?!1:b;var c=this.data.find(function(d){return d.key===a});
c&&(TG(this,c,b),g.kb(this.data,function(d){return d.key===a}),RG(this))};
SG.prototype.U=function(){var a=this;g.A.prototype.U.call(this);this.data.forEach(function(b){TG(a,b,!0)});
this.data=[]};g.t(YG,g.A);YG.prototype.U=function(){g.A.prototype.U.call(this);this.i=null;this.g&&this.g.disconnect()};var aR;aR={};g.eH=(aR.STOP_EVENT_PROPAGATION="html5-stop-propagation",aR.IV_DRAWER_ENABLED="ytp-iv-drawer-enabled",aR.IV_DRAWER_OPEN="ytp-iv-drawer-open",aR.MAIN_VIDEO="html5-main-video",aR.VIDEO_CONTAINER="html5-video-container",aR.HOUSE_BRAND="house-brand",aR);var ZG=1;g.t(g.aH,g.A);g.k=g.aH.prototype;
g.k.createElement=function(a,b){b=b||"svg"===a.A;var c=a.G,d=a.T;if(b){var e=document.createElementNS("http://www.w3.org/2000/svg",a.A);g.Xt&&(a.M||(a.M={}),a.M.focusable="false")}else e=g.bf(a.A);if(c){if(c=bH(this,e,"class",c))cH(this,e,"class",c),this.ma[c]=e}else if(d){c=g.p(d);for(var f=c.next();!f.done;f=c.next())this.ma[f.value]=e;cH(this,e,"class",d.join(" "))}d=a.S;c=a.H;if(d)d=bH(this,e,"child",d),void 0!==d&&e.appendChild(g.cf(d));else if(c)for(d=0,c=g.p(c),f=c.next();!f.done;f=c.next())if(f=
f.value)if("string"===typeof f)f=bH(this,e,"child",f),null!=f&&e.appendChild(g.cf(f));else if(f.element)e.appendChild(f.element);else{var h=f;f=this.createElement(h,b);e.appendChild(f);h.Pa&&(h=$G(),f.id=h,f=document.createElementNS("http://www.w3.org/2000/svg","use"),f.setAttribute("class","ytp-svg-shadow"),f.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+h),g.ff(e,f,d++))}if(d=a.M)for(c=e,f=g.p(Object.keys(d)),h=f.next();!h.done;h=f.next()){h=h.value;var l=d[h];cH(this,c,h,"string"===
typeof l?bH(this,c,h,l):l)}return e};
g.k.Z=function(a){return this.ma[a]};
g.k.Y=function(a,b){"number"===typeof b?g.ff(a,this.element,b):a.appendChild(this.element)};
g.k.detach=function(){g.gf(this.element)};
g.k.update=function(a){for(var b=g.p(Object.keys(a)),c=b.next();!c.done;c=b.next())c=c.value,this.ha(c,a[c])};
g.k.ha=function(a,b){var c=this.Ka["{{"+a+"}}"];c&&cH(this,c[0],c[1],b)};
g.k.U=function(){this.ma={};this.Ka={};this.detach();g.A.prototype.U.call(this)};g.t(g.T,g.aH);g.k=g.T.prototype;g.k.xb=function(a,b){this.ha(b||"content",a)};
g.k.show=function(){this.ca||(g.oh(this.element,"display",""),this.ca=!0)};
g.k.hide=function(){this.ca&&(g.oh(this.element,"display","none"),this.ca=!1)};
g.k.eb=function(a){this.J=a};
g.k.Ha=function(){return this.ca};
g.k.ia=function(a,b,c){return this.I(this.element,a,b,c)};
g.k.I=function(a,b,c,d){c=(0,g.x)(c,d||this);d={target:a,type:b,listener:c};this.listeners.push(d);a.addEventListener(b,c);return d};
g.k.gb=function(a){var b=this;this.listeners.forEach(function(c,d){if(c===a){var e=b.listeners.splice(d,1)[0];e.target.removeEventListener(e.type,e.listener)}})};
g.k.focus=function(){of(this.element);this.element.focus()};
g.k.U=function(){for(;this.listeners.length;){var a=this.listeners.pop();a&&a.target.removeEventListener(a.type,a.listener)}g.aH.prototype.U.call(this)};g.t(gH,g.T);g.k=gH.prototype;g.k.Wm=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];g.ri(this.element,b)};
g.k.resize=function(){if(this.g){var a=this.getPlayerSize();if(!a.isEmpty()){var b=this.i;b=!g.Ie(a,new g.He(b.width,b.height));var c=pH(this);b&&(this.i.width=a.width,this.i.height=a.height);a=this.app.L();(c||b||a.ua)&&this.app.i.O("resize",this.getPlayerSize())}}};
g.k.updateVideoData=function(a){if(this.g){var b=this.app.L();Yl&&(this.g.setAttribute("x-webkit-airplay","allow"),a.title?this.g.setAttribute("title",a.title):this.g.removeAttribute("title"));Vw(a)?this.g.setAttribute("disableremoteplayback",""):this.g.removeAttribute("disableremoteplayback");this.g.setAttribute("controlslist","nodownload");b.Ip&&a.videoId&&(this.g.poster=a.Gc("default.jpg"));g.P(b.experiments,"html5_send_origin_for_progressive")&&a.wa&&!a.wa.g()&&this.g.setAttribute("crossorigin",
"anonymous")}b=g.ax(a,"yt:bgcolor");this.l.style.backgroundColor=b?b:"";this.P=kt(g.ax(a,"yt:stretch"));this.V=kt(g.ax(a,"yt:crop"),!0);g.J(this.element,"ytp-dni",a.Yb);this.resize()};
g.k.setGlobalCrop=function(a){this.N=kt(a,!0);this.resize()};
g.k.setCenterCrop=function(a){this.da=a;this.resize()};
g.k.getPlayerSize=function(){var a=this.app.L(),b=this.app.i.isFullscreen();if(b&&Ol())return new g.He(window.outerWidth,window.outerHeight);if(b||a.po){if(window.matchMedia){a="(width: "+window.innerWidth+"px) and (height: "+window.innerHeight+"px)";this.B&&this.B.media===a||(this.B=window.matchMedia(a));var c=this.B&&this.B.matches}if(c)return new g.He(window.innerWidth,window.innerHeight)}else{if(!isNaN(this.o.width)&&!isNaN(this.o.height))return this.o.clone();if(this.F&&this.X&&!this.app.isWidescreen())for(a=
0;a<this.F.length;a++)if(b=this.F[a],b.query.matches)return new g.He(b.size.width,b.size.height)}return new g.He(this.element.clientWidth,this.element.clientHeight)};
g.k.getVideoAspectRatio=function(){return isNaN(this.P)?lH(this):this.P};
g.k.getVideoContentRect=function(a){var b=this.getPlayerSize();a=mH(this,b,this.getVideoAspectRatio(),a);return new g.jh((b.width-a.width)/2,(b.height-a.height)/2,a.width,a.height)};
g.k.ln=function(){g.hH(this)};
g.k.setUseFastSizingOnWatch=function(a){this.X!==a&&(this.X=a,this.resize())};
g.k.setInternalSize=function(a){g.Ie(this.o,a)||(this.o=a,this.resize())};
g.k.U=function(){this.K&&g.Nj(this.K);jH(this);g.T.prototype.U.call(this)};g.t(SH,wE);SH.prototype.i=function(){return Aka};
SH.prototype.l=function(a){return a.webPlayerShareEntityServiceEndpoint};
SH.prototype.g=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity)};TH.prototype.clickCommand=function(a){var b=g.Hn();if(!a.clickTrackingParams||!b)return!1;Zn(this.client,b,g.Bn(a.clickTrackingParams));return!0};var bR={},cR=(bR["api.invalidparam"]=2,bR.auth=150,bR["drm.auth"]=150,bR["heartbeat.net"]=150,bR["heartbeat.servererror"]=150,bR["heartbeat.stop"]=150,bR["html5.unsupportedads"]=5,bR["fmt.noneavailable"]=5,bR["fmt.decode"]=5,bR["fmt.unplayable"]=5,bR["html5.missingapi"]=5,bR["html5.unsupportedlive"]=5,bR["drm.unavailable"]=5,bR);g.t(WH,g.A);g.k=WH.prototype;
g.k.handleExternalCall=function(a,b,c){var d=this.u[a],e=this.C[a],f=d;if(e)if(c&&oq(c,mQ))f=this.aa("web_player_tapi_split_killswitch")&&d?d:e;else if(!d)throw Error('API call from an untrusted origin: "'+c+'"');d=this.app.L();d.ko&&!this.K.has(a)&&(this.K.add(a),g.Im("webPlayerApiCalled",{callerUrl:d.loaderUrl,methodName:a,origin:c||void 0,playerStyle:d.playerStyle||void 0}));if(f){c=!1;d=g.p(b);for(e=d.next();!e.done;e=d.next())if(String(e.value).includes("javascript:")){c=!0;break}c&&g.Lm(Error('Dangerous call to "'+
a+'" with ['+b+"]."));return f.apply(this,b)}throw Error('Unknown API method: "'+a+'".');};
g.k.isExternalMethodAvailable=function(a,b){return this.u[a]?!0:!!(this.C[a]&&b&&oq(b,mQ))};
g.k.getBandwidthEstimate=function(){return dt(this.app.L().schedule)};
g.k.reportPlaybackIssue=function(a){a=void 0===a?"":a;var b=g.U(this.app);b&&(a={gpu:(0,g.sD)(),d:a},b.Dj(new g.ps("feedback",!1,a)))};
g.k.getApiInterface=function(){return this.F.slice()};
g.k.getInternalApiInterface=function(){return g.Gb(this.i)};
g.k.fF=function(a,b){if("string"===typeof b){var c=function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];g.Ka(b).apply(window,e)};
this.B[b]=c}else c=b;this.app.na.subscribe(a,c)};
g.k.RN=function(a,b){if("string"===typeof b){var c=this.B[b],d=this.B;b in d&&delete d[b];b=c}this.app.na.unsubscribe(a,b)};
g.k.getPlayerState=function(){return eP(this.app)};
g.k.cueVideoByPlayerVars=function(a,b){this.app.cueVideoByPlayerVars(a,b||this.playerType)};
g.k.loadVideoByPlayerVars=function(a,b,c,d){this.app.loadVideoByPlayerVars(a,c||this.playerType,b,d)};
g.k.preloadVideoByPlayerVars=function(a,b,c,d,e){c=void 0===c?NaN:c;this.app.preloadVideoByPlayerVars(a,b||this.playerType,c,void 0===d?"":d,void 0===e?"":e)};
g.k.seekTo=function(a,b,c){this.g&&mP(this.app,!0,this.playerType);xP(this.app,a,b,c,this.playerType)};
g.k.seekToStreamTime=function(a,b,c){this.g&&mP(this.app,!0,this.playerType);var d=this.app,e=this.playerType;b=void 0===b?!0:b;var f=void 0===f?!1:f;var h=g.U(d,e),l=0;h&&h.getStreamTimeOffset()&&!h.Fb()&&(l=h.getStreamTimeOffset());xP(d,a-l,b,c,e,f)};
g.k.getStreamTimeOffset=function(){var a=g.U(this.app,1);return a?a.getStreamTimeOffset():0};
g.k.seekToLiveHead=function(a,b){var c=g.U(this.app,this.playerType);c&&(c=c.getVideoData())&&c.ra&&xP(this.app,Infinity,a,b,this.playerType)};
g.k.getCurrentTime=function(){return this.app.getCurrentTime(this.playerType)};
g.k.getMediaReferenceTime=function(){var a=cP(this.app,this.playerType);return isNaN(a)?this.getCurrentTime():a};
g.k.getDuration=function(){return this.app.getDuration(this.playerType)};
g.k.getVolume=function(){return this.app.R.volume};
g.k.setVolume=function(a){ZH(this,a)};
g.k.isMuted=function(){return this.app.R.muted};
g.k.mute=function(){$H(this)};
g.k.unMute=function(){aI(this)};
g.k.playVideo=function(){this.g&&mP(this.app,!0,this.playerType);var a=this.app.getPresentingPlayerType();2!==a||this.app.Vb()?3===a?g.mI(this.app.o).Ag("control_play"):this.app.playVideo(a):(a=ZI(this.app.o))&&a.Ag("control_play")};
g.k.pauseVideo=function(){var a=this.app.getPresentingPlayerType();2!==a||this.app.Vb()?3===a?g.mI(this.app.o).Ag("control_pause"):this.app.pauseVideo(a):(a=ZI(this.app.o))&&a.Ag("control_pause")};
g.k.stopVideo=function(){var a=this.app;a.g.ua&&a.i.O("pageTransition");a.stopVideo()};
g.k.clearVideo=function(){};
g.k.getPlaybackRate=function(){return g.U(this.app,1).getPlaybackRate()};
g.k.setPlaybackRate=function(a){"number"===typeof a&&this.app.setPlaybackRate(a)};
g.k.getAvailablePlaybackRates=function(){var a=this.app.L();a.La?(a=a.i||window.location.origin,a="https://admin.youtube.com"==a||"https://viacon.corp.google.com"==a?Kka:HQ):a=[1];return a};
g.k.getPlaybackQuality=function(a){return(a=g.U(this.app,a))?a.getPlaybackQuality():"unknown"};
g.k.setPlaybackQuality=function(){};
g.k.getAvailableQualityLevels=function(){var a=g.U(this.app,this.playerType);return a?(a=(0,g.Hc)(a.cj(),function(b){return b.quality}),a.length&&("auto"===a[0]&&a.shift(),a=a.concat(["auto"])),a):[]};
g.k.getVideoBytesLoaded=function(){return this.getVideoLoadedFraction()};
g.k.getVideoBytesTotal=function(){return 1};
g.k.getVideoLoadedFraction=function(){return this.app.getVideoLoadedFraction()};
g.k.getVideoStartBytes=function(){return 0};
g.k.setSize=function(){this.app.F.resize()};
g.k.channelSubscribed=function(){this.ka("SUBSCRIBE",QO(this.app).qf)};
g.k.channelUnsubscribed=function(){this.ka("UNSUBSCRIBE",QO(this.app).qf)};
g.k.getStatsForNerds=function(){return this.app.getStatsForNerds()};
g.k.setScreenLayer=function(a){this.app.setScreenLayer(a)};
g.k.getCurrentPlaylistSequence=function(){return g.U(this.app).getPlaylistSequenceForTime(this.app.getCurrentTime())};
g.k.getPlaylistSequenceForTime=function(a){return g.U(this.app).getPlaylistSequenceForTime(a)};
g.k.forceFrescaUpdate=function(){var a=tI(this.app.o);a&&a.PF()};
g.k.shouldSendVisibilityState=function(){return!0};
g.k.updateFullerscreenEduButtonVisibility=function(a){var b=EP(this.app);b&&(b.i=a,b.ga())};
g.k.updateFullerscreenEduButtonSubtleModeState=function(a){var b=EP(this.app);b&&(g.J(b.element,"ytp-fullerscreen-edu-button-subtle",a),a&&!b.o&&(b.element.setAttribute("title","Scroll for details"),g.Md(b,g.fK(b.u.rb(),b.element)),b.o=!0))};
g.k.confirmYpcRental=function(){var a=g.U(this.app,this.playerType);a&&RF(a,"ypc_clickwrap")};
g.k.setHomeGroupInfo=function(a){this.app.L().homeGroupInfo=a};
g.k.setConnectedRemoteApps=function(a){this.app.L().lo=a};
g.k.setLivingRoomAppMode=function(a){this.app.L().livingRoomAppMode=a};
g.k.setEnablePrivacyFilter=function(a){this.app.L().enablePrivacyFilter=void 0===a?!1:a};
g.k.isPictureInPictureAllowed=function(){return QO(this.app).qs};
g.k.togglePictureInPicture=function(){this.app.togglePictureInPicture()};
g.k.loadModule=function(a){"captions"===a&&(a=g.QI(this.app.o))&&!a.loaded&&a.load()};
g.k.unloadModule=function(a){"captions"===a&&(a=g.QI(this.app.o))&&a.loaded&&a.FO()};
g.k.loadVideoById=function(a,b,c){a&&(a=this.app.loadVideoByPlayerVars(NG(a,b,c),this.playerType),this.g&&mP(this.app,a,this.playerType))};
g.k.cueVideoById=function(a,b,c){this.app.cueVideoByPlayerVars(NG(a,b,c),this.playerType)};
g.k.loadVideoByUrl=function(a,b,c){a=OG(a,b,c);a=this.app.loadVideoByPlayerVars(a,this.playerType);this.g&&mP(this.app,a,this.playerType)};
g.k.cueVideoByUrl=function(a,b,c){a=OG(a,b,c);this.app.cueVideoByPlayerVars(a,this.playerType)};
g.k.getVideoUrl=function(){var a=this.app.L();if(a.J)return"";var b=QO(this.app),c=void 0;b.ra||(c=Math.floor(this.app.getCurrentTime(1)));return a.getVideoUrl(b.videoId,this.getPlaylistId()||void 0,c)};
g.k.getDebugText=function(){return this.app.getDebugText()};
g.k.getVideoEmbedCode=function(){var a=this.app.L();return a.J?"":a.getVideoEmbedCode(QO(this.app).videoId,this.app.F.getPlayerSize(),this.getPlaylistId()||void 0)};
g.k.addCueRange=function(a,b,c){return qP(this.app,a,b,c)};
g.k.removeCueRange=function(a){a:{for(var b=this.app,c=pA(b.l.V)||[],d=0;d<c.length;d++){var e=c[d];if(e.getId()==a){b.l.removeCueRange(e);g.IO(b,"cuerangesremoved",[e]);a=!0;break a}}a=!1}return a};
g.k.loadPlaylist=function(a,b,c,d){this.app.loadPlaylist(a,b,c,d);this.g&&mP(this.app,!0,this.playerType)};
g.k.cuePlaylist=function(a,b,c,d){this.app.cuePlaylist(a,b,c,d)};
g.k.nextVideo=function(){this.app.nextVideo();this.g&&mP(this.app,!0,this.playerType)};
g.k.previousVideo=function(){this.app.previousVideo();this.g&&mP(this.app,!0,this.playerType)};
g.k.playVideoAt=function(a){this.app.playVideoAt(a);this.g&&mP(this.app,!0,this.playerType)};
g.k.setShuffle=function(a){var b=this.app.getPlaylist();b&&b.setShuffle(a)};
g.k.setLoop=function(a){var b=this.app.getPlaylist();b&&(b.loop=a)};
g.k.YF=function(){var a=this.app.getPlaylist();if(!a)return null;for(var b=[],c=0;c<a.getLength();c++){var d=a.xa(c);d&&b.push(d.videoId)}return b};
g.k.getPlaylistIndex=function(){var a=this.app.getPlaylist();return a?a.index:-1};
g.k.getPlaylistId=function(){var a=this.app.getPlaylist();return a&&a.listId?a.listId.toString():null};
g.k.setOption=function(a,b,c){if(!b)return null;var d=this.app.o;return"captions"===a?(a=g.QI(d))&&a.bd(b,c):null};
g.k.getOption=function(a,b,c){var d=g.U(this.app,this.playerType);return d&&d.getVideoData().isPrivate&&this.app.L().i?{}:this.setOption(a,b,c)};
g.k.getOptions=function(a){var b=this.app.o;if("captions"===a)return(b=g.QI(b))&&b.getOptions();if(!a)return a=[],g.QI(b)&&a.push("captions"),a};
g.k.yp=function(a){a=void 0===a?this.playerType:a;var b={};if(a=g.U(this.app,a)){a=a.getVideoData();if(a.isPrivate&&!this.aa("embeds_prevent_metadata_leaking_killswitch"))return{};b.video_id=a.videoId;b.author=a.author;b.title=a.title;if(a.ya&&a.ya.video){b.video_quality=a.ya.video.quality;a=a.ya.video;var c=[];32<a.fps&&c.push("hfr");Yq(a)&&c.push("hdr");"bt2020"===a.primaries&&c.push("wcg");b.video_quality_features=c}}if(a=this.getPlaylistId())b.list=a;return b};
g.k.showVideoInfo=function(){DO(this.app,!0)};
g.k.hideVideoInfo=function(){DO(this.app,!1)};
g.k.isVideoInfoVisible=function(){return this.app.isVideoInfoVisible()};
g.k.getAdState=function(){return this.app.getAdState()};
g.k.isNotServable=function(a){if(a!==this.app.Aa.args.video_id)return!1;var b=(a=(a=g.U(this.app,1))?a.getPlayerState():null)?a.stateData:null;return!!(a&&b&&g.S(a,128)&&5===cR[b.errorCode])};
g.k.getSphericalProperties=function(){var a=g.oI(this.app.o);return a?2===this.playerType?{}:a.getSphericalProperties():{}};
g.k.setSphericalProperties=function(a){if(a&&2!==this.playerType){var b=g.oI(this.app.o);b&&b.setSphericalProperties(a,!0)}};
g.k.supportsGaplessAudio=function(){return this.app.L().supportsGaplessAudio()};
g.k.enqueueVideoByPlayerVars=function(a,b,c,d){c=void 0===c?Infinity:c;this.app.enqueueVideoByPlayerVars(a,b,c,void 0===d?"":d)};
g.k.clearQueue=function(){this.app.clearQueue()};
g.k.destroy=function(){this.app.dispose()};
g.k.sendAbandonmentPing=function(){var a=g.U(this.app);a&&a.sendAbandonmentPing()};
g.k.deleteLocalMediaById=function(a){return dw(a)};
g.k.deleteAllLocalMedia=function(){return qfa()};
g.k.cancelPendingLocalMediaById=function(a){return this.app.cancelPendingLocalMediaById(a)};
g.k.fetchLocalMedia=function(){this.app.fetchLocalMedia()};
g.k.fetchLocalMediaById=function(a){this.app.fetchLocalMediaById(a)};
g.k.getLocalMediaInfoById=function(a){return this.app.getLocalMediaInfoById(a)};
g.k.getAllLocalMediaInfo=function(){return this.app.getAllLocalMediaInfo()};
g.k.setAutonavState=function(a){zP(this.app,a)};
g.k.setAutonav=function(a){this.setAutonavState(a?2:1)};
g.k.setLoopRange=function(a){this.app.setLoopRange(a)};
g.k.getLoopRange=function(){return this.app.getLoopRange()};
g.k.setImmersivePreview=function(a){this.app.setImmersivePreview(a)};
g.k.setIsExternalPlaylist=function(a){this.app.setIsExternalPlaylist(a)};
g.k.getAppState=function(){return this.app.getAppState()};
g.k.addInfoCardXml=function(a,b,c){this.app.L().K.add(a,{Ko:b,Qn:c})};
g.k.updateLastActiveTime=function(){wk()};
g.k.setBlackout=function(a){this.app.setBlackout(a)};
g.k.setAccountLinkState=function(a){this.app.setAccountLinkState(a)};
g.k.setUserEngagement=function(a){this.app.L().Ue!==a&&(this.app.L().Ue=a,(a=g.U(this.app,this.playerType))&&bG(a))};
g.k.updateSubtitlesUserSettings=function(a){g.QI(this.app.o).LD(a,!0)};
g.k.setFauxFullscreen=function(a){gn();MO(this.app,a?2:0)};
g.k.setUseFastSizingOnWatch=function(a){this.app.F.setUseFastSizingOnWatch(a)};
g.k.getPresentingPlayerType=function(){var a=this.app.getPresentingPlayerType();2===a&&this.app.Vb()&&(a=1);return a};
g.k.getPlayerResponse=function(){var a=g.U(this.app,this.playerType);return a?a.getVideoData().getPlayerResponse():null};
g.k.getStoryboardFrame=function(a,b){var c=this.app.Ie();if(!c)return null;c=c.levels[b];return c?(c=c.ej(a))?{column:c.column,columns:c.columns,height:c.Cq,row:c.row,rows:c.rows,url:c.url,width:c.Dq}:null:null};
g.k.getStoryboardFrameIndex=function(a,b){var c=this.app.Ie();if(!c)return-1;c=c.levels[b];if(!c)return-1;a-=this.Fb();return c.wq(a)};
g.k.getStoryboardLevel=function(a){var b=this.app.Ie();return b?(b=b.levels[a])?{index:a,intervalMs:b.g,maxFrameIndex:b.Vm(),minFrameIndex:b.Cu()}:null:null};
g.k.getNumberOfStoryboardLevels=function(){var a=this.app.Ie();return a?a.levels.length:0};
g.k.KF=function(){return this.getAudioTrack()};
g.k.getAudioTrack=function(){var a=g.U(this.app,this.playerType);return a?a.getAudioTrack():this.app.getVideoData().Yl};
g.k.setAudioTrack=function(a){3===this.getPresentingPlayerType()&&g.mI(this.app.o).Ag("control_set_audio_track",a);var b=g.U(this.app,this.playerType);if(b&&!b.ba()&&!g.S(b.l,128))if(b.g.wa.g())b.o.setAudioTrack(a);else{a:{var c=b.g;if(c.kc&&!dr(c.kc)||a==c.Cn||!c.zh||0>=c.zh.length)c=!1;else{for(var d=g.p(c.zh),e=d.next();!e.done;e=d.next()){e=e.value;if(!(e instanceof Jv)){c=!1;break a}var f=a.Ab.getId();e.i&&(e.i.g=f,e.g=null)}c.Cn=a;c=!0}}c&&(b.O("internalaudioformatchange",b.g,!0),FF(b)&&b.Ya("hlsaudio",
a.id))}};
g.k.LF=function(){return this.getAvailableAudioTracks()};
g.k.getAvailableAudioTracks=function(){return g.U(this.app,this.playerType).getAvailableAudioTracks()};
g.k.getMaxPlaybackQuality=function(){var a=g.U(this.app,this.playerType);return a&&a.getVideoData().ya?Au(a.P?ZC(a.W,a.P,YF(a)):yu):"unknown"};
g.k.getUserPlaybackQualityPreference=function(){var a=g.U(this.app,this.playerType);return a?a.getUserPlaybackQualityPreference():"auto"};
g.k.getSubtitlesUserSettings=function(){var a=g.QI(this.app.o);return a?a.dG():null};
g.k.resetSubtitlesUserSettings=function(){g.QI(this.app.o).ZN()};
g.k.setMinimized=function(a){this.app.setMinimized(a)};
g.k.setGlobalCrop=function(a){this.app.F.setGlobalCrop(a)};
g.k.getVisibilityState=function(){var a=this.app.L();a=this.app.J.g&&!g.P(a.experiments,"kevlar_miniplayer_disable_vis");return this.app.getVisibilityState(this.Aj(),this.isFullscreen()||g.xt(this.app.L()),a,this.isInline(),this.app.J.u,this.app.J.o)};
g.k.isMutedByMutedAutoplay=function(){return this.app.La};
g.k.isInline=function(){return this.app.isInline()};
g.k.setInternalSize=function(a,b){this.app.F.setInternalSize(new g.He(a,b))};
g.k.Fb=function(){var a=g.U(this.app,void 0);return a?a.Fb():0};
g.k.Aj=function(){var a=g.U(this.app,this.playerType);return!!a&&a.R.i};
g.k.isFullscreen=function(){return this.app.isFullscreen()};
g.k.setSafetyMode=function(a){this.app.L().enableSafetyMode=a};
g.k.canPlayType=function(a){return this.app.canPlayType(a)};
g.k.updatePlaylist=function(a){if(a){var b=this.getPlaylistId(),c=!1;if(b&&b!==a.list)if(this.aa("player_enable_playback_playlist_change"))c=!0;else return;void 0!==a.external_list&&this.app.setIsExternalPlaylist(a.external_list);var d=a.video;(b=this.app.getPlaylist())&&!c?this.isFullscreen()&&((c=d[b.index])&&c.encrypted_id!==b.xa().videoId||(a.index=b.index)):TO(this.app,{list:a.list,index:a.index,playlist_length:d.length});Ax(this.app.getPlaylist(),a);this.ka("onPlaylistUpdate")}else this.app.updatePlaylist()};
g.k.updateVideoData=function(a,b){var c=g.U(this.app,this.playerType||1);c&&c.getVideoData().Ld(a,b)};
g.k.updateEnvironmentData=function(a){this.app.L().Ld(a,!1)};
g.k.sendVideoStatsEngageEvent=function(a){this.app.sendVideoStatsEngageEvent(a,this.playerType)};
g.k.setCardsVisible=function(a,b,c){var d=g.qI(this.app.o);d&&d.Rm()&&d.setCardsVisible(a,b,c)};
g.k.setInline=function(a){this.app.setInline(a)};
g.k.isAtLiveHead=function(a,b){return this.app.isAtLiveHead(a,void 0===b?!0:b)};
g.k.getVideoAspectRatio=function(){return this.app.F.getVideoAspectRatio()};
g.k.getPreferredQuality=function(){var a=g.U(this.app);return a?a.getPreferredQuality():"unknown"};
g.k.setPlaybackQualityRange=function(a,b){var c=g.U(this.app,this.playerType);if(c){var d=wu(a,b||a,!0,"m");c.g.Hr=d;if(c.P){var e=c.W,f=c.P;if(f.wa.g()){var h=g.Vq[Os()];f=f.wa.videoInfos[0].xa().Rb;h>f&&0!==f&&d.g===f||(g.ho("yt-player-quality",Au(d),2592E3),e.aa("html5_perf_cap_override_sticky")&&g.jo("yt-player-performance-cap"))}}bG(c)}};
g.k.onAdUxClicked=function(a){this.O("aduxclicked",a)};
g.k.O=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.app.L().l&&("videodatachange"===a||"resize"===a||"cardstatechange"===a)&&this.app.na.O.apply(this.app.na,[a].concat(g.ma(c)));this.app.ea.O.apply(this.app.ea,[a].concat(g.ma(c)))};
g.k.ka=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.app.na.O.apply(this.app.na,[a].concat(g.ma(c)));this.app.ea.O.apply(this.app.ea,[a].concat(g.ma(c)))};
g.k.getFeedbackProductData=function(){return this.app.getFeedbackProductData()};
g.k.aa=function(a){return g.P(this.app.L().experiments,a)};
g.k.U=function(){if(this.element){var a=this.element,b;for(b in this.i)this.i.hasOwnProperty(b)&&(a[b]=null);this.element=null}this.o={};this.B={};g.A.prototype.U.call(this)};g.t(eI,WH);g.k=eI.prototype;g.k.addCueRange=function(a,b,c,d,e){return qP(this.app,a,b,c,d,e)};
g.k.getPlayerState=function(a){return eP(this.app,a)};
g.k.nextVideo=function(a,b){this.app.nextVideo(a,b)};
g.k.previousVideo=function(a){this.app.previousVideo(a)};
g.k.seekBy=function(a,b,c){xP(this.app,this.app.getCurrentTime()+a,b,c,this.playerType)};
g.k.seekTo=function(a,b,c,d){xP(this.app,a,b,c,d||this.playerType)};
g.k.getStoryboardFormat=function(){return this.app.getStoryboardFormat()};
g.k.yp=function(a){a=void 0===a?this.playerType:a;var b=WH.prototype.yp.call(this,a)||{};if(a=g.U(this.app,a))a=a.getVideoData(),b.backgroundable=a.backgroundable,b.eventId=a.eventId,b.cpn=a.clientPlaybackNonce,b.isLive=a.ra,b.isWindowedLive=a.Hm,b.allowLiveDvr=a.allowLiveDvr,b.isListed=a.isListed,b.itct=a.df,b.ypcOriginalItct=a.TO,b.ypcPreview=a.ypcPreview,b.paidContentOverlayText=Yw(a),b.paidContentOverlayDurationMs=Zw(a),null!=a.liveUtcStartSeconds&&(b.liveUtcStartSeconds=a.liveUtcStartSeconds),
a.fa&&Ir(a.fa)&&(b.usingLocalMedia="true");return b};
g.k.getCurrentTime=function(a,b){return a?this.app.getCurrentTime(a,b):WH.prototype.getCurrentTime.call(this)};
g.k.getDuration=function(a,b){return a?this.app.getDuration(a,b):WH.prototype.getDuration.call(this)};
g.k.getProgressState=function(a){if(3===this.getPresentingPlayerType())return g.mI(this.app.o).getProgressState();var b=this.app.getVideoData(),c=(g.U(this.app,a)||g.U(this.app)).getPlayerType(),d=this.getCurrentTime(a);a=this.getDuration(a);var e=cP(this.app,c),f=this.app.isAtLiveHead(c);var h=this.app;var l=g.U(h,void 0);if(l){l=OO(h,l);var m=NaN;l.i&&(m=Gx(l.i));m=0<=m?m:l.getCurrentTime();h=dP(h,m,l)}else h=0;l=this.app.Ib(c);m=this.app;(c=g.U(m,c))?(c=g.NO(m,c),c=dP(m,uG(c),c)):c=0;return{allowSeeking:this.app.fd(),
clipEnd:b.clipEnd,clipStart:b.clipStart,current:d,displayedStart:-1,duration:a,ingestionTime:e,isAtLiveHead:f,loaded:h,seekableStart:l,seekableEnd:c}};
g.k.getVideoLoadedFraction=function(a){return this.app.getVideoLoadedFraction(a)};
g.k.getCurrentBroadcastId=function(){var a=tI(this.app.o);return a?a.Gy():null};
g.k.handleGlobalKeyDown=function(a,b,c,d,e,f,h){b=void 0===b?!1:b;c=void 0===c?!1:c;d=void 0===d?!1:d;e=void 0===e?!1:e;var l=g.cI(this);l&&l.handleGlobalKeyDown(a,b,c,d,e,f,h)};
g.k.handleGlobalKeyUp=function(a,b,c,d,e,f,h){b=void 0===b?!1:b;c=void 0===c?!1:c;d=void 0===d?!1:d;e=void 0===e?!1:e;var l=g.cI(this);l&&l.handleGlobalKeyUp(a,b,c,d,e,f,h)};
g.k.setSizeStyle=function(a,b){this.app.setSizeStyle(a,b)};
g.k.showControls=function(){var a=g.cI(this);a&&a.showControls(!0)};
g.k.hideControls=function(){var a=g.cI(this);a&&a.showControls(!1)};
g.k.getVideoContentRect=function(a){a=this.app.F.getVideoContentRect(a);return{left:a.left,top:a.top,width:a.width,height:a.height}};
g.k.toggleFullscreen=function(){var a=this.app.L();if(a.externalFullscreen)return this.isFullscreen()?jn(window.document.documentElement):fn(window.document.documentElement);if(gn())return this.isFullscreen()?jn(g.hn()):"3"===a.controlsType?(a=this.app.u.sa())?fn(a):Promise.reject(Error("Media element missing")):fn(this.app.F.element);this.ka("onFullscreenToggled",this.isFullscreen());return Promise.resolve(void 0)};
g.k.cancelPlayback=function(){var a=ZI(this.app.o);a&&a.created&&a.destroy();(a=g.U(this.app))&&a.stopVideo();(a=this.app.o.Xb.get("endscreen"))&&a.PG()&&g.jI(this.app.i,!0)};
g.k.stopVideo=function(){var a=this.app.L();!g.P(a.experiments,"disable_new_pause_state3")&&Qt(a)&&"blazer"!==a.playerStyle?this.cancelPlayback():WH.prototype.stopVideo.call(this)};
g.k.getVideoStats=function(){return g.U(this.app,this.playerType).Ta(!0)};
g.k.toggleSubtitles=function(){var a=g.QI(this.app.o);a&&a.yO()};
g.k.getDebugText=function(a){return this.app.getDebugText(a)};
g.k.setSphericalProperties=function(a){if(a){var b=g.oI(this.app.o);b&&b.setSphericalProperties(a,!0)}};
g.k.getSphericalProperties=function(){var a=g.oI(this.app.o);return a?a.getSphericalProperties():{}};
g.k.setVolume=function(a,b){ZH(this,a,b)};
g.k.mute=function(a){$H(this,a)};
g.k.unMute=function(a){aI(this,a)};
g.k.mutedAutoplay=function(){this.aa("embeds_enable_muted_autoplay")&&this.app.mutedAutoplay()};
g.k.loadModule=function(a){if("annotations_module"===a){var b=g.qI(this.app.o);b&&!b.loaded&&b.load()}WH.prototype.loadModule.call(this,a)};
g.k.unloadModule=function(a){if("annotations_module"===a){var b=g.qI(this.app.o);b&&b.loaded&&b.unload()}WH.prototype.unloadModule.call(this,a)};
g.k.setOption=function(a,b,c){if(!b)return null;var d=this.app.o;switch(a){case "ad":return(a=ZI(d))&&a.bd&&a.bd(b,c);case "kids":return(a=$I(d))&&a.bd(b,c);case "remote":return(a=g.mI(d))&&a.bd(b,c);case "unplugged":return(a=aJ(d))&&a.bd(b,c);case "annotations_module":return(a=g.qI(d))&&a.bd(b,c);case "creatorendscreen":return(a=bJ(d))&&a.bd(b,c)}return WH.prototype.setOption.call(this,a,b,c)};
g.k.getOptions=function(a){var b=this.app.o;switch(a){case "ad":return(b=ZI(b))&&b.getOptions&&b.getOptions();case "remote":return(b=g.mI(b))&&b.getOptions();case "annotations_module":return(b=g.qI(b))&&b.getOptions();case "creatorendscreen":return(b=bJ(b))&&b.getOptions();case "unplugged":return(b=aJ(b))&&b.getOptions();case "kids":return(b=$I(b))&&b.getOptions()}if(!a){a=WH.prototype.getOptions.call(this);if(!a)return a;ZI(b)&&a.push("ad");g.mI(b)&&a.push("remote");g.qI(b)&&a.push("annotations_module");
bJ(b)&&a.push("creatorendscreen");aJ(b)&&a.push("unplugged");$I(b)&&a.push("kids");return a}return WH.prototype.getOptions.call(this,a)};
g.k.getPlayerSize=function(){var a=this.app.F.getPlayerSize();return{width:a.width,height:a.height}};
g.k.wakeUpControls=function(){var a=g.cI(this);a&&a.Ch()};
g.k.setCenterCrop=function(a){this.app.F.setCenterCrop(a)};
var jja="BASE_URL BASE_YT_URL adformat allow_embed authuser autoplay cc_load_policy cpn dash dashmpd disable_native_context_menu disablekb docid el enable_cardio enablecastapi end fmt_list hl hlsdvr hlsvp iurl iurlhq iurlmq length_seconds live_playback osig override_hl partnerid pipable playsinline plid postid ps public rel start startSeconds status suggestedQuality timestamp title token ttsurl use_native_controls url_encoded_fmt_stream_map video_id videoId".split(" "),kja="adformat allow_embed authuser autohide autonav autoplay c cbr cbrver cc_load_policy controls cos cosver cr csi_page_type cver cyc dash dashmpd disablekb el enable_cardio enablecastapi enablecsi end external_fullscreen external_list fs hl host_language innertube_api_key innertube_api_version innertube_context_client_version iurl iurlhq iurlmq iv_load_policy jsapicallback length_seconds live_storyboard_spec loaderUrl osig override_hl pageid partnerid pipable player_params player_wide playsinline plid postid profile_picture ps rel show_miniplayer_button showinfo showwatchlater start startSeconds status storyboard_spec suggestedQuality timestamp title tkn token transparent_background ucid url_encoded_fmt_stream_map use_fast_sizing_on_watch_default use_miniplayer_ui use_native_controls videoId video_id vss_host watermark".split(" ");g.t(fI,eI);g.k=fI.prototype;g.k.getRootNode=function(){return g.lI(this).element};
g.k.L=function(){return this.app.L()};
g.k.Ck=function(){return this.J};
g.k.getPlaylist=function(){return this.app.getPlaylist()};
g.k.getVideoData=function(a){return(a=g.U(this.app,a))&&a.getVideoData()};
g.k.Ie=function(a){return this.app.Ie(a)};
g.k.isWidescreen=function(){return this.app.isWidescreen()};
g.k.playVideo=function(a){try{if(3===this.getPresentingPlayerType()){g.mI(this.app.o).Ag("control_play");return}if(2===this.getPresentingPlayerType()){var b=ZI(this.app.o);if(b&&b.jH())return}}catch(c){g.Km(c)}this.app.playVideo(a)};
g.k.stopVideo=function(a){g.U(this.app,a).stopVideo()};
g.k.Tf=function(a){g.U(this.app,a).Tf()};
g.k.addEventListener=function(a,b){this.app.ea.subscribe(a,b)};
g.k.removeEventListener=function(a,b){this.app.ea.unsubscribe(a,b)};
g.k.setPlaybackQuality=function(a){this.setPlaybackQualityRange(a,a)};
g.k.cj=function(){var a={},b=g.U(this.app).cj();b=g.p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,a[c.quality]=c;return a};
g.k.getDebugText=function(a){return this.app.getDebugText(a)};
g.k.getVideoUrl=function(a,b,c,d){var e=this.getPresentingPlayerType(),f=2===e;if(d&&f||3===e)f=!1,e=1;d=this.getVideoData(e);if(!d)return"";var h;a||d.ra||(h=Math.floor(this.getCurrentTime(e)));return this.app.getVideoUrl(d.videoId,f?void 0:this.getPlaylistId()||void 0,h,b,c)};
g.k.setCardsVisible=function(a,b,c){var d=g.qI(g.gI(this));d&&d.setCardsVisible(a,b,c)};
g.k.Fk=function(a,b){var c=g.cI(this);if(c)return c.Fk(a,b);c=this.app.F.getPlayerSize();return new g.jh(0,0,c.width,c.height)};
g.k.fd=function(){if(this.L().N)return!1;var a=g.U(this.app);if(!a)return!1;var b=a.getVideoData();return!b.isValid()||g.ex(b)||2===this.getPresentingPlayerType()&&!this.app.Vb()||LF(a)&&3!==this.getPresentingPlayerType()?!1:!0};
g.k.sendVideoStatsEngageEvent=function(a,b,c){this.app.sendVideoStatsEngageEvent(a,c,b)};
g.k.setPlaybackRate=function(a,b){this.app.setPlaybackRate(a,b)};
g.k.setVolume=function(a){a=g.Be(a,0,100);YH(this.app,{volume:a,muted:this.isMuted()},!0)};
g.k.mute=function(){YH(this.app,{muted:!0,volume:this.getVolume()},!0)};
g.k.unMute=function(){YH(this.app,{muted:!1,volume:Math.max(5,this.getVolume())},!0)};
g.k.getBandwidthEstimate=function(){return dt(this.L().schedule)};
g.k.wb=function(){return g.U(this.app)};
g.k.getPresentingPlayerType=function(){return this.app.getPresentingPlayerType()};
g.k.clearQueue=function(){this.app.clearQueue()};
g.k.Vb=function(){return this.app.Vb()};
g.k.requestStorageAccess=function(a,b){this.app.requestStorageAccess(a,b)};g.t(g.MI,g.N);g.k=g.MI.prototype;g.k.create=function(){};
g.k.load=function(){this.loaded=!0};
g.k.unload=function(){this.loaded=!1};
g.k.bd=function(){};
g.k.Wf=function(){return!0};
g.k.U=function(){this.loaded&&this.unload();g.N.prototype.U.call(this)};
g.k.Ta=function(){return{}};
g.k.getOptions=function(){return[]};g.t(PI,g.A);g.k=PI.prototype;g.k.En=function(){return this.D.getVideoData().En()};
g.k.Qv=function(){return this.D.getVideoData().Qv()};
g.k.gy=function(){var a=this.Xb.get("heartbeat");TI(this,"heartbeat",this.gy,!1,!0);!a&&this.Xb.has("heartbeat")&&this.D.O("offlineslatestatechange")};
g.k.dD=function(){var a=this.D.L();if(Dt(a))return!1;var b=this.D.getVideoData();return b.Gz||"3"===a.controlsType?!1:a.K.isEmpty()&&"annotation-editor"!==a.playerStyle&&"live-dashboard"!==a.playerStyle?!!b.We||!!g.ix(b)||!!g.jx(b):!0};
g.k.Os=function(){TI(this,"annotations_module",this.Os,!0);var a=this.Xb.get("annotations_module");if(a)for(var b in this.l)if(this.l.hasOwnProperty(b)){var c=b;a.subscribe(c,this.l[c])}};
g.k.Pv=function(){return this.D.getVideoData().Pv()};
g.k.ey=function(){if(!this.Xb.get("ad"))try{RI(this)?TI(this,"ad",this.ey,!1,!0):g.yI(this.D,"ad")}catch(a){g.yI(this.D,"ad"),g.Km(a)}};
g.k.U=function(){g.A.prototype.U.call(this);YI(this,1,!0)};g.t(dJ,g.N);g.k=dJ.prototype;g.k.GJ=function(a){a=ik(a);if(!Ge(a,this.o)){var b=2;this.B&&(b|=8);this.o=a;cJ(this,b,!0)}};
g.k.HJ=function(){this.B&&cJ(this,8,!0);cJ(this,2,!1)};
g.k.Eq=function(a){var b=ik(a);Ge(b,this.o)||(this.o=b,(a=g.fk(a))&&this.Ho(a)&&(cJ(this,4,!0),this.g.gb(this.l),this.l=this.g.I(this.target,"mouseover",this.Qu),this.C=this.g.I(this.target,"mouseout",this.Qu)))};
g.k.Qu=function(a){a=hk(a);a&&this.Ho(a)||(this.o=new g.Fe(NaN,NaN),eJ(this))};
g.k.XG=function(){cJ(this,1,!0)};
g.k.MF=function(a){a=g.fk(a);a instanceof Element&&!(0<a.tabIndex)||cJ(this,1,!0)};
g.k.TA=function(){this.B=!0;this.g.gb(this.u);this.u=this.g.I(document,"mouseup",this.IJ)};
g.k.IJ=function(){this.B=!1;cJ(this,8,!1);this.g.gb(this.u);this.u=this.g.I(this.target,"mousedown",this.TA)};
g.k.tD=function(a){if(a=(a=a.changedTouches)&&a[0])this.P=a.identifier,this.g.gb(this.F),this.F=this.g.I(this.target,"touchend",this.zO,void 0,!0),cJ(this,1024,!0)};
g.k.zO=function(a){if(a=a.changedTouches)for(var b=0;b<a.length;b++){var c=a[b];if(c.identifier===this.P){var d=c;break}}d&&(this.g.gb(this.F),this.F=this.g.I(this.target,"touchstart",this.tD,void 0,!0),cJ(this,1024,!1))};
g.k.Ch=function(){cJ(this,2,!0)};
g.k.resize=function(){g.$r&&eJ(this)};
g.k.toString=function(){return g.N.prototype.toString.call(this)};(function(a,b){function c(f){var h=g.p(f);f=h.next().value;h=la(h);return a.apply(f,h)}
function d(f){f=g.p(f);f.next();f=la(f);return b(e,f)}
b=void 0===b?Hba:b;var e=g.Sa(a);return function(f){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];l=this||g.v;var m=hQ.get(l);m||(m={},hQ.set(l,m));return Ud(m,[this].concat(g.ma(h)),c,d)}})(function(a){var b=g.bf("DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=g.bf("DIV");g.Fh(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;g.gf(b);return a});g.t(g.fJ,g.A);g.k=g.fJ.prototype;g.k.show=function(a){1!==this.state&&2!==this.state&&(4===this.state&&this.Fr(),5===this.state?(this.element.show(),this.state=null,this.delay.stop(),this.g&&this.g()):this.element.Ha()||(gJ(this,!0),this.state=1,a?this.delay.start(a):this.Fr()))};
g.k.hide=function(){4!==this.state&&(1===this.state||2===this.state?(this.element.hide(),this.state=null,this.delay.stop()):this.element.Ha()&&(gJ(this,!0),this.state=4,this.delay.start(this.o)))};
g.k.Fr=function(){switch(this.state){case 1:this.element.show();this.state=2;this.delay.start(10);break;case 2:gJ(this,!1);this.state=3;this.delay.start(this.l);break;case 3:this.state=null;this.g&&this.g();break;case 4:this.element.hide();gJ(this,!1);this.state=5;this.delay.start(0);break;case 5:this.state=null,this.i&&this.i()}};
g.k.stop=function(){for(;null!==this.state&&5!==this.state;)this.delay.stop(),this.Fr()};
g.k.U=function(){this.element.ba()||this.element.element.removeAttribute("aria-hidden");g.A.prototype.U.call(this)};g.t(g.hJ,g.T);
g.hJ.prototype.ga=function(){var a=this.api.getVideoData(),b=this.api.L(),c;a.Yb&&(a.xf||b.ea)?b.C?c=[{A:"div",G:"ytp-large-play-button-circle",M:{style:"background-color: "+(a.xf?a.xf:"#1f1f1f")}},g.W?{A:"div",T:["ytp-icon","ytp-icon-dni-large-play-button"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"4 -6 60 60",width:"100%"},H:[{A:"path",M:{d:"m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z",fill:"#fff"}}]}]:c=b.ea?[g.W?{A:"div",T:["ytp-icon","ytp-icon-dni-chazal-large-play-button"]}:{A:"svg",
M:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},H:[{A:"path",G:"ytp-dni-large-play-button-bg",M:{d:"M30,0A30,30,0,1,0,60,30,30,30,0,0,0,30,0Z",fill:"#1f1f1f"}},{A:"path",M:{d:"M21,41.65V18L43.7,29.85Z",fill:"#fff"}}]}]:[g.W?{A:"div",T:["ytp-icon","ytp-icon-dni-large-lozenge-play-button"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},H:[{A:"path",G:"ytp-dni-large-play-button-bg",M:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#212121","fill-opacity":"0.8"}},{A:"path",M:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:b.C&&!b.u?c=[g.W?{A:"div",T:["ytp-icon","ytp-icon-large-play-button-hover"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 68 48",width:"100%"},H:[{A:"path",G:"ytp-large-play-button-bg",M:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
fill:"#f00"}},{A:"path",M:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]:(g.J(this.element,"ytp-touch-device",b.g),c=[b.u?g.W?{A:"div",T:["ytp-icon","ytp-icon-house-brand-large-play-button"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 60 60",width:"100%"},H:[{A:"path",G:"ytp-large-play-button-bg",M:{d:"M30,0A30,30,0,1,0,60,30,30,30,0,0,0,30,0Z",fill:"#1f1f1f"}},{A:"path",M:{d:"M21,41.65V18L43.7,29.85Z",fill:"#fff"}}]}:g.W?{A:"div",T:["ytp-icon","ytp-icon-large-play-button"]}:{A:"svg",M:{height:"100%",
version:"1.1",viewBox:"0 0 68 48",width:"100%"},H:[{A:"path",G:"ytp-large-play-button-bg",M:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#212121","fill-opacity":"0.8"}},{A:"path",M:{d:"M 45,24 27,14 27,34",fill:"#fff"}}]}]);this.ha("largePlayButtonChildren",
c);a.Yb&&(a.xf||b.ea)&&!b.C&&(a=a.xf?a.xf:"#1f1f1f",this.Z("ytp-dni-large-play-button-bg").setAttribute("fill",a))};g.t(iJ,g.T);g.k=iJ.prototype;g.k.show=function(){var a=this;this.Ha()||(this.l.I(this.api,"videodatachange",function(){a.g.fb()}),this.l.I(this.api,"videoplayerreset",function(){a.g.fb()}));
g.T.prototype.show.call(this)};
g.k.hide=function(){this.l&&g.nn(this.l);g.T.prototype.hide.call(this)};
g.k.Qa=function(){this.g.fb()};
g.k.HI=function(a){var b=this.api.L();g.P(b.experiments,"disable_new_pause_state3")&&Qt(b)&&(a=a.state.isCued()&&!a.zi.isCued()||g.nI(this.api)&&g.S(a.state,2),g.oh(this.element,"transition-delay",a?"2s":""));this.g.fb()};
g.k.uN=function(){this.g.fb()};
g.k.GI=function(){this.i.stop();this.hide();this.g.fb()};
g.k.ga=function(){var a=g.oH(this.api);if(3===this.api.getPresentingPlayerType()&&(a.sb()||g.S(a,4)))var b=!0;else(b=g.gI(this.api).Xb.get("ypc"))&&b.Nq?b=!0:(b=this.api.L(),b=g.S(a,2)&&iI(this.api)&&b.ab?!0:!1);b?(b=!0,this.o.hide()):(this.o.show(),a.isCued()&&2!==this.api.getPresentingPlayerType()?b=!0:(b=!g.P(this.api.L().experiments,"disable_new_pause_state3"),b=!(!g.S(a,2)||iI(this.api)||b&&g.pP(this.api.app))||g.S(a,1024)?!0:!1));b?(this.i.show(),a=this.api.getVideoData(),this.HO(this.api.getPlaylist(),
a)):(this.i.hide(),g.S(a,1)||this.i.stop())};
g.k.HO=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=g.p(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,!(!c||c instanceof g.yw&&!c.videoId)){var d=g.lI(this.api).getPlayerSize();var e=g.Rt(),f=d.width*e;e*=d.height;if(1280<f||720<e)if(d=c.Gc("maxresdefault.jpg"))break;if(640<f||480<e)if(d=c.Gc("maxresdefault.jpg"))break;if(320<f||180<e)if(d=c.Gc("sddefault.jpg")||c.Gc("hqdefault.jpg")||c.Gc("mqdefault.jpg"))break;if(d=c.Gc("default.jpg"))break}this.u.style.backgroundImage=
d?"url("+d+")":""};g.t(g.tJ,g.T);g.tJ.prototype.resize=function(){};
g.tJ.prototype.i=function(a){var b=this;uja(this);var c=a.Zs,d=this.api.L();"GENERIC_WITHOUT_LINK"!==c||d.u?"TOO_MANY_REQUESTS"===c?(d=this.api.getVideoData(),this.xb(wJ(this,"TOO_MANY_REQUESTS_WITH_LINK",d.bi(),void 0,void 0,void 0,!1))):"HTML5_NO_AVAILABLE_FORMATS_FALLBACK"!==c||d.u?this.xb(g.uJ(a.errorMessage)):this.xb(wJ(this,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK_WITH_LINK","//www.youtube.com/supported_browsers")):(a=d.hostLanguage,c="//support.google.com/youtube/?p=player_error1",a&&(c=g.Dd(c,
{hl:a})),this.xb(wJ(this,"GENERIC_WITH_LINK_AND_CPN",c,!0)),d.ua&&!d.i&&tja(this,function(e){if(g.oJ(e,b.api,!Qt(b.api.L()))){e={as3:!1,html5:!0,player:!0,cpn:b.api.getVideoData().clientPlaybackNonce};var f=b.api;f.ka("onFeedbackArticleRequest",{articleId:3037019,helpContext:"player_error",productData:e});f.isFullscreen()&&f.toggleFullscreen()}}))};
var sja=/<a\s+href=["']([^"']+)["'](?:\s+target=["']([^"']+)["'])?>([^<>]+)<\/a>/;g.t(yJ,g.ln);yJ.prototype.Ia=function(){var a=this;this.hf();var b=this.D.getVideoData();if(b.isValid()){var c=[];this.D.L().J||c.push({src:b.Gc("mqdefault.jpg")||"",sizes:"320x180"});this.mediaSession.metadata=new MediaMetadata({title:b.title,artist:b.author,artwork:c});c=b=null;g.nI(this.D)&&(this.g["delete"]("nexttrack"),this.g["delete"]("previoustrack"),b=function(){a.D.nextVideo()},c=function(){a.D.previousVideo()});
xJ(this,"nexttrack",b);xJ(this,"previoustrack",c)}};
yJ.prototype.hf=function(){var a=g.oH(this.D);a=a.isError()?"none":g.uB(a)?"playing":"paused";this.mediaSession.playbackState=a};
yJ.prototype.U=function(){this.mediaSession.playbackState="none";this.mediaSession.metadata=null;for(var a=g.p(this.g),b=a.next();!b.done;b=a.next())xJ(this,b.value,null);g.ln.prototype.U.call(this)};g.t(zJ,g.T);zJ.prototype.Ia=function(a,b){AJ(this,b);this.Ob&&BJ(this,this.Ob)};
zJ.prototype.Pb=function(a){var b=this.D.getVideoData();this.videoId!==b.videoId&&AJ(this,b);this.g&&BJ(this,a.state);this.Ob=a.state};
zJ.prototype.Tb=function(){this.l.show();this.u=(0,g.E)()};
zJ.prototype.Na=function(){this.l.hide();this.videoId&&(this.i[this.videoId]=(this.i[this.videoId]||0)+((0,g.E)()-this.u));this.u=0};g.t(DJ,g.T);DJ.prototype.hide=function(){this.g.stop();this.message.style.display="none";g.T.prototype.hide.call(this)};
DJ.prototype.i=function(a){CJ(this,a.state)};
DJ.prototype.l=function(){CJ(this,g.oH(this.api))};
DJ.prototype.o=function(){this.message.style.display="block"};g.t(g.EJ,g.T);g.EJ.prototype.subscribe=function(a,b,c){return this.V.subscribe(a,b,c)};
g.EJ.prototype.unsubscribe=function(a,b,c){return this.V.unsubscribe(a,b,c)};
g.EJ.prototype.wi=function(a){return this.V.wi(a)};
g.EJ.prototype.O=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];return this.V.O.apply(this.V,[a].concat(g.ma(c)))};g.t(g.FJ,g.EJ);g.k=g.FJ.prototype;g.k.show=function(){var a=this.Id();g.EJ.prototype.show.call(this);this.N&&(this.C.I(window,"blur",this.Na),this.C.I(document,"click",this.JK));a||this.O("show",!0)};
g.k.hide=function(){var a=this.Id();g.EJ.prototype.hide.call(this);GJ(this);a&&this.O("show",!1)};
g.k.Tb=function(a,b){this.g=a;this.K.show();b?(this.F||(this.F=this.C.I(this.D,"appresize",this.zx)),this.zx()):this.F&&(this.C.gb(this.F),this.F=void 0)};
g.k.zx=function(){var a=g.cI(this.D);this.g&&a.ol(this.element,this.g)};
g.k.Na=function(){var a=this.Id();GJ(this);this.K.hide();a&&this.O("show",!1)};
g.k.JK=function(a){var b=gk(a);b&&(g.kf(this.element,b)||this.g&&g.kf(this.g,b)||!g.WG(a))||this.Na()};
g.k.Id=function(){return this.Ha()&&4!==this.K.state};g.t(JJ,g.FJ);JJ.prototype.ln=function(a){if(this.api.L().C||this.l)a?(IJ(this),this.Tb()):(this.seen&&KJ(this),this.Na())};
JJ.prototype.hf=function(a){this.api.isMutedByMutedAutoplay()&&g.zB(a,2)&&this.Na()};
JJ.prototype.onClick=function(){this.api.unMute();KJ(this)};g.t(g.MJ,g.ln);g.k=g.MJ.prototype;g.k.init=function(){var a=g.oH(this.api);this.Lc(a);this.Eh();this.Qa()};
g.k.Ia=function(a,b){if(this.hu!==b.videoId){this.hu=b.videoId;var c=this.Lb;c.R=b&&0<b.Oi.length?5E3:3E3;cJ(c,512,!0);this.Eh();g.P(this.api.L().experiments,"web_player_nitrate_promo_tooltip")&&this.gD()}};
g.k.UL=function(){this.Ia("newdata",this.api.getVideoData())};
g.k.Ji=function(){var a=g.rI(this.api)&&g.sI(this.api);uI(this.api);return this.Po||a||uI(this.api)||this.Mt};
g.k.Qe=function(){var a=!this.Ji();g.J(this.api.getRootNode(),"ytp-menu-shown",!a)};
g.k.Ho=function(a){try{if(!g.kf(this.api.getRootNode(),a))return!1}catch(b){return!1}for(;a&&!of(a);)a=a===this.api.getRootNode()?null:g.jf(a);return!!a};
g.k.Qf=function(a){var b=this.api.getRootNode();g.J(b,"ytp-autohide",a);g.J(b,"ytp-autohide-active",!0);this.Ex.start(a?250:100);a&&(this.zr=!1,g.si(b,"ytp-touch-mode"));this.Ns=!a;b=this.api;a=!a;b.ka("onVideoAreaChange");b.ka(a?"onShowControls":"onHideControls")};
g.k.mK=function(){var a=this.api.getRootNode();g.J(a,"ytp-autohide-active",!1)};
g.k.BM=function(){this.kw=!0};
g.k.AM=function(a){g.P(this.api.L().experiments,"player_doubletap_to_seek")&&(this.kw=!1,this.lw&&this.gb(this.lw),0===this.cn&&QJ(this,a)?(this.Gp(),this.So.start(),this.lw=this.I(g.lI(this.api),"touchmove",this.BM,void 0,!0)):this.So.stop());PJ(this)&&QJ(this,a)&&LJ(this);var b=this.Cr.Id();if(nt&&RJ(this,a))b&&g.jk(a);else if(this.Lb.i||NJ(this,gk(a))||this.Cr.Id()||(g.oH(this.api).isCued(),g.jk(a)),this.zr=!0,g.I(this.api.getRootNode(),"ytp-touch-mode"),this.Lb.Ch(),g.P(this.api.L().experiments,
"player_doubletap_to_seek")&&(b=g.oH(this.api),this.api.fd()&&(!g.S(b,2)||!iI(this.api)))){b=Date.now()-this.Pz;this.cn+=1;if(350>=b){this.cm=!0;b=this.api.getPlayerSize().width/3;var c=this.api.getRootNode().getBoundingClientRect(),d=a.targetTouches[0].clientX-c.left;c=a.targetTouches[0].clientY-c.top;var e=10*(this.cn-1);0<d&&d<b?(this.zn(-1,d,c,e),this.api.seekBy(-10*this.api.getPlaybackRate())):d>2*b&&d<3*b&&(this.zn(1,d,c,e),this.api.seekBy(10*this.api.getPlaybackRate()));g.jk(a)}this.Pz=Date.now();
this.UC.start()}};
g.k.wM=function(a){RJ(this,a)||(PJ(this)||!QJ(this,a)||this.So.isActive()||(LJ(this),g.jk(a)),this.cm&&(this.cm=!1))};
g.k.requestStorageAccess=function(){var a=this;this.api.requestStorageAccess(function(){g.Im("embedsRequestStorageAccessResult",{resolved:!0});Ts(!0);Ik();window.location.reload()},function(){g.Im("embedsRequestStorageAccessResult",{resolved:!1});
a.yl()})};
g.k.Gp=function(){};
g.k.Yj=function(){};
g.k.zn=function(){};
g.k.gD=function(){};
g.k.yl=function(){var a=g.oH(this.api);g.S(a,2)&&iI(this.api)||(g.uB(a)?this.api.pauseVideo():(this.api.app.ze=!0,this.api.playVideo(),this.pk&&document.activeElement===this.pk.o.element&&this.api.getRootNode().focus()))};
g.k.xM=function(a){var b=this,c=this.api.getPresentingPlayerType();if(!NJ(this,gk(a)))if(a=this.api.L(),g.P(a.experiments,"player_doubletap_to_seek")&&this.cm)this.cm=!1;else if((a.la||g.P(a.experiments,"player_fullscreen_disabled_killswitch"))&&3!==c)try{this.api.toggleFullscreen()["catch"](function(d){b.ym(d)})}catch(d){this.ym(d)}};
g.k.ym=function(a){String(a).includes("fullscreen error")?g.Lm(a):g.Km(a)};
g.k.yM=function(a){SJ(this,.3,a.scale);g.jk(a)};
g.k.zM=function(a){SJ(this,.1,a.scale)};
g.k.Qa=function(){var a=g.lI(this.api).getPlayerSize(),b=this.api.getRootNode(),c=650<=a.width;this.Lb.resize();g.J(b,"ytp-fullscreen",this.api.isFullscreen());g.J(b,"ytp-large-width-mode",c);g.J(b,"ytp-small-mode",this.he());g.J(b,"ytp-big-mode",this.Hc());this.qc&&this.qc.resize(a)};
g.k.hf=function(a){this.Lc(a.state);this.Eh()};
g.k.qt=function(){var a=!!this.hu&&!g.hI(this.api),b=2===this.api.getPresentingPlayerType(),c=this.api.L(),d=this.api.getVideoData(1).Yb&&c.ea;if(b){if(WP&&g.P(c.experiments,"enable_visit_advertiser_support_on_ipad_mweb"))return!1;b=ZI(g.gI(this.api));return a&&b.Rv()&&!d}return a&&(c.Ih||this.api.isFullscreen()||c.Ad)&&!d};
g.k.Eh=function(){var a=this.qt();this.og!==a&&(this.og=a,g.J(this.api.getRootNode(),"ytp-hide-info-bar",!a))};
g.k.Lc=function(a){var b;(b=a.isCued())||(b=((b=g.U(this.api.app,void 0))?LF(b):!0)&&3!==this.api.getPresentingPlayerType());b!==this.isCued&&(this.isCued=b,this.nw&&this.gb(this.nw),this.nw=this.I(g.lI(this.api),"touchstart",this.AM,void 0,b));var c=a.sb()&&!g.S(a,32)||vI(this.api);cJ(this.Lb,128,!c);c=3===this.api.getPresentingPlayerType();cJ(this.Lb,256,c);c=this.api.getRootNode();if(g.S(a,2))var d=[SQ.ENDED];else d=[],g.S(a,8)?d.push(SQ.PLAYING):g.S(a,4)&&d.push(SQ.PAUSED),g.S(a,1)&&!g.S(a,32)&&
d.push(SQ.BUFFERING),g.S(a,32)&&d.push(SQ.SEEKING),g.S(a,64)&&d.push(SQ.UNSTARTED);g.wb(this.gs,d)||(g.ti(c,this.gs),this.gs=d,g.ri(c,d));d=this.api.L();var e=g.S(a,2);g.J(c,"ytp-hide-controls",("3"===d.controlsType?!e:"1"!==d.controlsType)||b);g.J(c,"ytp-native-controls","3"===d.controlsType&&!b&&!e&&!this.Mt);g.S(a,128)&&!g.rt(d)?(this.qc||(this.qc=new g.tJ(this.api),g.C(this,this.qc),g.BI(this.api,this.qc.element,4)),this.qc.i(a.stateData),this.qc.show()):this.qc&&(this.qc.dispose(),this.qc=null)};
g.k.Zg=function(){return g.rI(this.api)&&g.sI(this.api)?(this.api.setCardsVisible(!1,!1),!0):g.hI(this.api)?(g.jI(this.api,!0),!0):!1};
g.k.ln=function(a){this.Mt=a;this.Qe()};
g.k.Hc=function(){return!1};
g.k.he=function(){return!this.Hc()&&(480>this.api.getPlayerSize().width||290>this.api.getPlayerSize().height)};
g.k.Hf=function(){return this.zr};
g.k.Ck=function(){return null};
g.k.Fk=function(){var a=g.lI(this.api).getPlayerSize();return new g.jh(0,0,a.width,a.height)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.ol=function(){};
g.k.showControls=function(a){if(void 0!==a){var b=g.lI(this.api);g.xt(b.app.L());b.u=!a;g.hH(b)}};
g.k.Ch=function(){};
g.k.Yy=function(){return null};var wja={seekableStart:0,seekableEnd:1,current:0};TJ.prototype.getLength=function(){return this.g-this.i};g.t(g.WJ,g.EJ);g.WJ.prototype.o=function(){var a=this.i.getProgressState();a=VJ(new TJ(a.seekableStart,a.seekableEnd),a.current,0);this.B.style.width=100*a+"%"};
g.WJ.prototype.u=function(){g.Jt(this.l.L())||(2==this.l.getPresentingPlayerType()?-1===this.g&&(this.show(),this.g=this.i.subscribe("b",this.o,this),this.o()):-1!==this.g&&(this.hide(),this.i.wi(this.g),this.g=-1))};g.t(g.XJ,g.N);g.k=g.XJ.prototype;g.k.Lu=ba(12);g.k.stop=function(){this.o&&this.l.gb(this.o)};
g.k.NA=function(){var a=this.g.getProgressState(this.i);this.u={seekableStart:a.seekableStart,seekableEnd:a.seekableEnd,current:g.P(this.g.L().experiments,"halftime_ux_killswitch")?a.current:this.g.getCurrentTime(this.i,!1)};this.O("b")};
g.k.getProgressState=function(){return this.u};
g.k.oJ=function(a){g.zB(a,2)&&this.O("a")};g.t(YJ,g.T);YJ.prototype.onClick=function(){this.D.ka("BACK_CLICKED")};g.t(g.ZJ,g.T);g.ZJ.prototype.show=function(){g.T.prototype.show.call(this);this.g.fb()};
g.ZJ.prototype.hide=function(){this.i.stop();g.T.prototype.hide.call(this)};
g.ZJ.prototype.Yj=function(a){a?g.S(g.oH(this.D),64)||$J(this,KH(),"Play"):(a=this.D.getVideoData(),a.ra&&!a.allowLiveDvr?$J(this,OH(),"Stop live playback"):$J(this,IH(),"Pause"))};g.t(cK,g.T);g.k=cK.prototype;g.k.ED=function(){g.rI(this.D)&&g.sI(this.D)&&this.Id()&&this.Na()};
g.k.vO=function(){this.Na();g.Oj("iv-teaser-clicked",null!=this.g);this.D.setCardsVisible(!0,!1,"YOUTUBE_DRAWER_MANUAL_OPEN")};
g.k.yL=function(){g.Oj("iv-teaser-mouseover");this.g&&this.g.stop()};
g.k.TM=function(a){this.g||!a||g.sI(this.D)||this.i&&this.i.isActive()||(this.Tb(a),g.Oj("iv-teaser-shown"))};
g.k.Tb=function(a){this.ha("text",a.teaserText);this.element.setAttribute("dir",g.vi(a.teaserText));this.o.show();this.i=new g.G(function(){g.I(this.D.getRootNode(),"ytp-cards-teaser-shown");this.Du()},0,this);
this.i.start();dK(this.hg,!1);this.g=new g.G(this.Na,580+a.durationMs,this);this.g.start();this.u.push(this.ia("mouseover",this.wA,this));this.u.push(this.ia("mouseout",this.vA,this))};
g.k.Du=function(){if(g.rt(this.D.L())&&this.Ha()){var a=this.hg.element.offsetLeft,b=g.Re("ytp-cards-button-icon"),c=this.D.isFullscreen()?54:36;if(b){var d=a+b.offsetLeft;this.element.style.marginRight=this.hg.element.offsetParent.offsetWidth-a-b.offsetLeft-c+"px";this.element.style.marginLeft=d+"px"}}};
g.k.mF=function(){g.rt(this.D.L())&&this.K.he()&&this.Ha()&&this.F.start()};
g.k.wA=function(){this.B.stop();this.g&&this.g.isActive()&&this.C.start()};
g.k.vA=function(){this.C.stop();this.g&&!this.g.isActive()&&this.B.start()};
g.k.AL=function(){this.g&&this.g.stop()};
g.k.zL=function(){this.Na()};
g.k.Na=function(){!this.g||this.l&&this.l.isActive()||(g.Oj("iv-teaser-hidden"),this.o.hide(),g.si(this.D.getRootNode(),"ytp-cards-teaser-shown"),this.l=new g.G(function(){for(var a=g.p(this.u),b=a.next();!b.done;b=a.next())this.gb(b.value);this.u=[];this.g&&(this.g.dispose(),this.g=null);dK(this.hg,!0)},330,this),this.l.start())};
g.k.Id=function(){return this.Ha()&&4!==this.o.state};
g.k.U=function(){var a=this.D.getRootNode();a&&g.si(a,"ytp-cards-teaser-shown");g.Od(this.i,this.l,this.g);g.T.prototype.U.call(this)};g.t(eK,g.T);g.k=eK.prototype;g.k.Tb=function(){this.i.show();g.Oj("iv-button-shown")};
g.k.Na=function(){g.Oj("iv-button-hidden");this.i.hide()};
g.k.Id=function(){return this.Ha()&&4!==this.i.state};
g.k.U=function(){this.g&&this.g();g.T.prototype.U.call(this)};
g.k.XK=function(){g.Oj("iv-button-mouseover")};
g.k.onClicked=function(a){g.rI(this.D);var b=g.qi(this.D.getRootNode(),"ytp-cards-teaser-shown");g.Oj("iv-teaser-clicked",b);a=0===a.screenX&&0===a.screenY;this.D.setCardsVisible(!g.sI(this.D),a,"YOUTUBE_DRAWER_MANUAL_OPEN")};g.Ia("yt.pubsub.publish",g.Oj,void 0);var dR={},iK=(dR.BUTTON="ytp-button",dR.TITLE_NOTIFICATIONS="ytp-title-notifications",dR.TITLE_NOTIFICATIONS_ON="ytp-title-notifications-on",dR.TITLE_NOTIFICATIONS_OFF="ytp-title-notifications-off",dR.NOTIFICATIONS_ENABLED="ytp-notifications-enabled",dR);g.t(jK,g.T);jK.prototype.onClick=function(){g.GI(this.api,this.element);var a=!this.g;this.ha("label",a?"Stop getting notified about every new video":"Get notified about every new video");this.ha("pressed",a);lK(this,a)};g.t(g.oK,g.T);g.oK.prototype.i=function(){g.I(this.element,"ytp-sb-subscribed")};
g.oK.prototype.l=function(){g.si(this.element,"ytp-sb-subscribed")};g.t(pK,g.T);g.k=pK.prototype;g.k.Av=function(){sK(this);this.channel.classList.remove("ytp-title-expanded")};
g.k.isExpanded=function(){return this.channel.classList.contains("ytp-title-expanded")};
g.k.ht=function(){if(qK(this)&&!this.isExpanded()){this.ha("channelTitleFocusable","0");this.l&&this.l.stop();this.subscribeButton&&(this.subscribeButton.show(),g.HI(this.api,this.subscribeButton.element,!0));var a=this.api.getVideoData();this.i&&a.vl&&a.subscribed&&(this.i.show(),g.HI(this.api,this.i.element,!0));this.channel.classList.add("ytp-title-expanded");this.channel.classList.add("ytp-title-show-expanded")}};
g.k.Ks=function(){this.ha("channelTitleFocusable","-1");this.l&&this.l.start()};
g.k.ga=function(){var a=this.api.getVideoData(),b=this.api.L(),c=!1;2===this.api.getPresentingPlayerType()?c=!!a.videoId&&!!a.isListed&&!!a.author&&!!a.Tg&&!!a.wd:g.rt(b)&&(c=!!a.videoId&&!!a.Tg&&!!a.wd);b=g.cu(this.api.L())+a.Tg;g.rt(this.api.L())&&(b=g.Dd(b,g.OD({},"emb_ch_name_ex")));var d=a.Tg,e=a.wd,f=a.author;d=void 0===d?"":d;e=void 0===e?"":e;f=void 0===f?"":f;c?(d=g.cu(this.api.L())+d,this.g.style.backgroundImage="url("+e+")",this.ha("channelLink",d),this.ha("channelLogoLabel",g.UG("Photo image of $CHANNEL_NAME",
{CHANNEL_NAME:f})),g.I(this.api.getRootNode(),"ytp-title-enable-channel-logo")):g.si(this.api.getRootNode(),"ytp-title-enable-channel-logo");g.HI(this.api,this.g,c&&this.J);this.subscribeButton&&(this.subscribeButton.channelId=a.qf);this.ha("expandedTitle",a.im);this.ha("channelTitleLink",b);this.ha("expandedSubtitle",a.expandedSubtitle)};g.t(g.tK,g.ln);g.tK.prototype.I=function(a,b,c){return g.ln.prototype.I.call(this,a,b,c)};g.t(g.wK,g.EJ);g.wK.prototype.ha=function(a,b){g.EJ.prototype.ha.call(this,a,b);this.O("size-change")};g.t(zK,g.EJ);zK.prototype.pB=function(){this.O("size-change")};
zK.prototype.focus=function(){this.content.focus()};
zK.prototype.oK=function(){this.O("back")};g.t(g.AK,zK);g.AK.prototype.vb=function(a,b){if(void 0===b?0:b)this.items.push(a),this.menuItems.element.appendChild(a.element);else{var c=g.tb(this.items,a,yja);if(0<=c)return;c=~c;g.qb(this.items,c,0,a);g.ff(this.menuItems.element,a.element,c)}a.subscribe("size-change",this.Xu,this);this.menuItems.O("size-change")};
g.AK.prototype.Jd=function(a){a.unsubscribe("size-change",this.Xu,this);this.ba()||(g.jb(this.items,a),this.menuItems.element.removeChild(a.element),this.menuItems.O("size-change"))};
g.AK.prototype.Xu=function(){this.menuItems.O("size-change")};
g.AK.prototype.focus=function(){for(var a=0,b=0;b<this.items.length;b++)if("true"===this.items[b].element.getAttribute("aria-checked")){a=b;break}this.items[a].focus()};g.t(CK,g.wK);CK.prototype.g=function(a){g.kk(a)||39!==g.lk(a)||(this.element.click(),g.jk(a))};g.t(EK,g.wK);EK.prototype.onClick=function(){this.setValue(!this.checked);this.O("select",this.checked)};
EK.prototype.getValue=function(){return this.checked};
EK.prototype.setValue=function(a){this.checked=a;this.element.setAttribute("aria-checked",String(this.checked))};g.t(GK,g.AK);g.k=GK.prototype;g.k.EK=function(){rJ(this.mk.element)};
g.k.vN=function(){IK(this,this.D.getDebugText(!0))&&$J(this.nb,rH())};
g.k.wN=function(){IK(this,this.D.getVideoEmbedCode())&&$J(this.nb,zH());g.GI(this.D,this.Bf.element);uK("EMBED",this.D.getVideoData().videoId,this.D.getPlaylistId()||"")};
g.k.xN=function(){IK(this,this.D.getVideoUrl(!0,!0))&&$J(this.nb,EH());g.GI(this.D,this.getVideoUrl.element);uK("COPY_PASTE",this.D.getVideoData().videoId,this.D.getPlaylistId()||"")};
g.k.yN=function(){IK(this,this.D.getVideoUrl(!1,!0))&&$J(this.nb,EH());g.GI(this.D,this.Ef.element);uK("COPY_PASTE",this.D.getVideoData().videoId,this.D.getPlaylistId()||"")};
g.k.CB=function(a){this.Lf.setValue(a)};
g.k.zN=function(){var a=this.Lf.getValue();aP(this.D.app,a);this.Ja.Na();g.GI(this.D,this.Lf.element)};
g.k.qM=function(a){this.D.reportPlaybackIssue();if(g.oJ(a,this.D,!Qt(this.D.L()))){a=this.D;var b=a.app.getFeedbackProductData();a.ka("onFeedbackStartRequest",b);a.isFullscreen()&&a.toggleFullscreen()}this.Ja.Na()};
g.k.JM=function(){this.D.showVideoInfo();this.Ja.Na()};
g.k.Ia=function(a,b){this.Vf(b)};
g.k.Vf=function(a){var b=this.D.L(),c=2===this.D.getPresentingPlayerType(),d=!c||a.isListed;d=!b.J&&!!a.videoId&&d;"play"!==b.playerStyle?b="https://support.google.com/youtube/?p=report_playback":(b={contact_type:"playbackissue",html5:1,ei:a.eventId,v:a.videoId,p:"movies_playback"},a.ya&&(b.fmt=Ip(a.ya)),a.clientPlaybackNonce&&(b.cpn=a.clientPlaybackNonce),a.jf&&(b.partnerid=a.jf),b=g.Dd("//support.google.com/googleplay/",b));g.dH(this.Bf,d&&a.allowEmbed);g.dH(this.getVideoUrl,d);g.dH(this.Ef,d&&
!a.ra);this.An.xb(b,"href");g.dH(this.Lf,!a.ra&&!c)};
g.k.eb=function(a){g.AK.prototype.eb.call(this,a);g.HI(this.D,this.Bf.element,a);g.HI(this.D,this.getVideoUrl.element,a);g.HI(this.D,this.Ef.element,a);g.HI(this.D,this.Lf.element,a)};g.t(g.JK,g.FJ);g.k=g.JK.prototype;g.k.show=function(){g.FJ.prototype.show.call(this);this.Cl()};
g.k.hide=function(){g.FJ.prototype.hide.call(this);1<this.i.length&&g.NK(this)};
g.k.Cl=function(){OK(this);this.Ha()&&(LK(this),g.Fh(this.element,this.size))};
g.k.pe=function(){var a=this.i.pop(),b=KK(this);MK(this,a,b,!0)};
g.k.LI=function(a){if(!g.kk(a))switch(g.lk(a)){case 27:this.Na();g.jk(a);break;case 37:1<this.i.length&&this.pe();g.jk(a);break;case 39:g.jk(a)}};
g.k.focus=function(){KK(this).focus()};
g.k.U=function(){g.FJ.prototype.U.call(this);this.u&&this.u.dispose();this.l&&this.l.dispose()};g.t(g.QK,g.JK);g.k=g.QK.prototype;g.k.show=function(){this.o||(this.o=new GK(this.D,this.R,this,this.nb),g.C(this,this.o),g.HK(this,this.o));this.o.CB(wG(this.D.app.B));g.JK.prototype.show.call(this);g.HI(this.D,this.element,!0);this.o.eb(!0)};
g.k.hide=function(){PK(this);g.JK.prototype.hide.call(this);g.HI(this.D,this.element,!1);this.o&&this.o.eb(!1)};
g.k.DK=function(a){var b=gk(a);if(!(this.Ha()||b&&(qf(b,"a")||qf(b,null,"ytp-no-contextmenu",void 0)))){g.jk(a);RK(this);b=this.D.getVideoData();g.J(this.element,"ytp-dni",b.Yb);this.element.style.left="";this.element.style.top="";a=ik(a);a.x++;a.y++;this.Tb();var c=document.body;b=new g.ih(0,Infinity,Infinity,0);var d=g.Ne(c);for(var e=d.g.body,f=d.g.documentElement,h=Ve(d.g);c=g.zh(c);)if(!(g.We&&0==c.clientWidth||g.Ye&&0==c.clientHeight&&c==e)&&c!=e&&c!=f&&"visible"!=uh(c,"overflow")){var l=g.Ah(c),
m=new g.Fe(c.clientLeft,c.clientTop);l.x+=m.x;l.y+=m.y;b.top=Math.max(b.top,l.y);b.right=Math.min(b.right,l.x+c.clientWidth);b.bottom=Math.min(b.bottom,l.y+c.clientHeight);b.left=Math.max(b.left,l.x)}e=h.scrollLeft;h=h.scrollTop;b.left=Math.max(b.left,e);b.top=Math.max(b.top,h);d=d.g;d=Ue(d.parentWindow||d.defaultView||window);b.right=Math.min(b.right,e+d.width);b.bottom=Math.min(b.bottom,h+d.height);d=0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null;b=this.size;a=a.clone();b=b.clone();
d&&(h=a,e=b,f=5,65==(f&65)&&(h.x<d.left||h.x>=d.right)&&(f&=-2),132==(f&132)&&(h.y<d.top||h.y>=d.bottom)&&(f&=-5),h.x<d.left&&f&1&&(h.x=d.left),f&16&&(c=h.x,h.x<d.left&&(h.x=d.left),h.x+e.width>d.right&&(e.width=Math.min(d.right-h.x,c+e.width-d.left),e.width=Math.max(e.width,0))),h.x+e.width>d.right&&f&1&&(h.x=Math.max(d.right-e.width,d.left)),h.y<d.top&&f&4&&(h.y=d.top),f&32&&(c=h.y,h.y<d.top&&(h.y=d.top),h.y+e.height>d.bottom&&(e.height=Math.min(d.bottom-h.y,c+e.height-d.top),e.height=Math.max(e.height,
0))),h.y+e.height>d.bottom&&f&4&&(h.y=Math.max(d.bottom-e.height,d.top)));d=new g.jh(0,0,0,0);d.left=a.x;d.top=a.y;d.width=b.width;d.height=b.height;g.wh(this.element,new g.Fe(d.left,d.top));g.nn(this.B);this.B.I(document,"contextmenu",this.LK);this.B.I(this.D,"fullscreentoggled",this.FI);this.B.I(this.D,"pageTransition",this.ML)}};
g.k.LK=function(a){if(!g.kk(a)){var b=gk(a);g.kf(this.element,b)||this.Na();this.D.L().mo&&g.jk(a)}};
g.k.FI=function(){this.Na();RK(this)};
g.k.ML=function(){this.Na()};g.t(SK,g.T);SK.prototype.onClick=function(){return g.hh(this,function b(){var c=this,d,e,f,h;return g.Aa(b,function(l){if(1==l.g)return d=c.api.L(),e=c.api.getVideoData(),f=c.api.getPlaylistId(),h=d.getVideoUrl(e.videoId,f,void 0,!0),g.sa(l,Cja(c,h),2);l.i&&Aja(c);g.GI(c.api,c.element);l.g=0})})};
SK.prototype.ga=function(){var a=this.api.L(),b=this.api.getVideoData();this.g.he()&&g.rt(a)&&a.C?this.ha("icon",{A:"div",T:["ytp-icon","ytp-icon-share-copylink-large"]}):this.ha("icon",g.W?{A:"div",T:["ytp-icon","ytp-icon-share-copylink"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M21.9,8.3H11.3c-0.9,0-1.7,.8-1.7,1.7v12.3h1.7V10h10.6V8.3z M24.6,11.8h-9.7c-1,0-1.8,.8-1.8,1.8v12.3  c0,1,.8,1.8,1.8,1.8h9.7c1,0,1.8-0.8,1.8-1.8V13.5C26.3,12.6,25.5,11.8,24.6,11.8z M24.6,25.9h-9.7V13.5h9.7V25.9z"}}]});
this.ha("title-attr","Copy link");a=g.lI(this.api).getPlayerSize().width;this.visible=!!b.videoId&&240<=a&&b.In;g.J(this.element,"ytp-copylink-button-visible",this.visible);g.dH(this,this.visible);UK(this.tooltip);g.HI(this.api,this.element,this.visible&&this.J)};
SK.prototype.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.api,this.element,this.visible&&a)};
SK.prototype.U=function(){g.T.prototype.U.call(this);g.si(this.element,"ytp-copylink-button-visible")};g.t(VK,g.T);VK.prototype.show=function(){g.T.prototype.show.call(this);this.i.fb()};
VK.prototype.hide=function(){this.l.stop();g.T.prototype.hide.call(this)};
VK.prototype.zn=function(a,b,c,d){var e=-1===a?this.o:this.g;e&&g.GI(this.D,e);this.i.Af();this.l.start();this.element.setAttribute("data-side",-1===a?"back":"forward");var f=3*g.lI(this.D).getPlayerSize().height;e=g.lI(this.D).getPlayerSize();e=e.width/3-3*e.height;var h=this.Z("ytp-doubletap-static-circle");h.style.width=f+"px";h.style.height=f+"px";1===a?(h.style.left="",h.style.right=e+"px"):-1===a&&(h.style.right="",h.style.left=e+"px");var l=2.5*f;f=l/2;h=this.Z("ytp-doubletap-ripple");h.style.width=
l+"px";h.style.height=l+"px";1===a?(a=g.lI(this.D).getPlayerSize().width-b+Math.abs(e),h.style.left="",h.style.right=a-f+"px"):-1===a&&(a=Math.abs(e)+b,h.style.right="",h.style.left=a-f+"px");h.style.top="calc((33% + "+Math.round(c)+"px) - "+f+"px)";if(c=this.Z("ytp-doubletap-ripple"))c.classList.remove("ytp-doubletap-ripple"),c.classList.add("ytp-doubletap-ripple");d=g.UG("$TOTAL_SEEK_TIME seconds",{TOTAL_SEEK_TIME:d.toString()});this.ha("seekTime",d)};var eR={"default":0,monoSerif:1,propSerif:2,monoSans:3,propSans:4,casual:5,cursive:6,smallCaps:7};Object.keys(eR).reduce(function(a,b){a[eR[b]]=b;return a},{});
var fR={none:0,raised:1,depressed:2,uniform:3,dropShadow:4};Object.keys(fR).reduce(function(a,b){a[fR[b]]=b;return a},{});
var gR={normal:0,bold:1,italic:2,bold_italic:3};Object.keys(gR).reduce(function(a,b){a[gR[b]]=b;return a},{});var hR,iR;hR=[{option:"#fff",text:"White"},{option:"#ff0",text:"Yellow"},{option:"#0f0",text:"Green"},{option:"#0ff",text:"Cyan"},{option:"#00f",text:"Blue"},{option:"#f0f",text:"Magenta"},{option:"#f00",text:"Red"},{option:"#080808",text:"Black"}];iR=[{option:0,text:WK(0)},{option:.25,text:WK(.25)},{option:.5,text:WK(.5)},{option:.75,text:WK(.75)},{option:1,text:WK(1)}];
g.ZK=[{option:"fontFamily",text:"Font family",options:[{option:1,text:"Monospaced Serif"},{option:2,text:"Proportional Serif"},{option:3,text:"Monospaced Sans-Serif"},{option:4,text:"Proportional Sans-Serif"},{option:5,text:"Casual"},{option:6,text:"Cursive"},{option:7,text:"Small Capitals"}]},{option:"color",text:"Font color",options:hR},{option:"fontSizeIncrement",text:"Font size",options:[{option:-2,text:WK(.5)},{option:-1,text:WK(.75)},{option:0,text:WK(1)},{option:1,text:WK(1.5)},{option:2,text:WK(2)},
{option:3,text:WK(3)},{option:4,text:WK(4)}]},{option:"background",text:"Background color",options:hR},{option:"backgroundOpacity",text:"Background opacity",options:iR},{option:"windowColor",text:"Window color",options:hR},{option:"windowOpacity",text:"Window opacity",options:iR},{option:"charEdgeStyle",text:"Character edge style",options:[{option:0,text:"None"},{option:4,text:"Drop Shadow"},{option:1,text:"Raised"},{option:2,text:"Depressed"},{option:3,text:"Outline"}]},{option:"textOpacity",text:"Font opacity",
options:[{option:.25,text:WK(.25)},{option:.5,text:WK(.5)},{option:.75,text:WK(.75)},{option:1,text:WK(1)}]}];g.t(g.YK,g.ln);g.k=g.YK.prototype;
g.k.lz=function(a){var b=!1,c=g.lk(a),d=gk(a),e=!a.altKey&&!a.ctrlKey&&!a.metaKey,f=!1,h=!1,l=this.api.L();g.kk(a)?(e=!1,h=!0):l.Zb&&(e=!1);if(9===c)b=!0;else{if(d)switch(c){case 32:case 13:if("BUTTON"===d.tagName||"A"===d.tagName||"INPUT"===d.tagName)b=!0,e=!1;else if(e){var m=d.getAttribute("role");!m||"option"!==m&&"button"!==m&&0!==m.indexOf("menuitem")||(b=!0,d.click(),f=!0)}break;case 37:case 39:case 36:case 35:b="slider"===d.getAttribute("role");break;case 38:case 40:m=d.getAttribute("role"),
d=38===c?d.previousSibling:d.nextSibling,"slider"===m?b=!0:e&&("option"===m?(d&&"option"===d.getAttribute("role")&&d.focus(),f=b=!0):m&&0===m.indexOf("menuitem")&&(d&&d.hasAttribute("role")&&0===d.getAttribute("role").indexOf("menuitem")&&d.focus(),f=b=!0))}if(e&&!f)switch(c){case 38:f=Math.min(this.api.getVolume()+5,100);aK(this.nb,f,!1);this.api.setVolume(f);h=f=!0;break;case 40:f=Math.max(this.api.getVolume()-5,0);aK(this.nb,f,!0);this.api.setVolume(f);h=f=!0;break;case 36:this.api.fd()&&(this.api.seekTo(0),
h=f=!0);break;case 35:this.api.fd()&&(this.api.seekTo(Infinity),h=f=!0)}}b&&this.Kv(!0);(b||h)&&this.Lb.Ch();(f||e&&this.handleGlobalKeyDown(c,a.shiftKey,a.ctrlKey,a.altKey,a.metaKey,a.key,a.code))&&g.jk(a);l.l&&(a={keyCode:g.lk(a),altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,handled:g.kk(a),fullscreen:this.api.isFullscreen()},this.api.ka("onKeyPress",a))};
g.k.mz=function(a){this.handleGlobalKeyUp(g.lk(a),a.shiftKey,a.ctrlKey,a.altKey,a.metaKey,a.key,a.code)};
g.k.handleGlobalKeyUp=function(a){var b=!1,c=g.oI(g.gI(this.api));c&&(c=c.Li)&&c.Ha()&&(c.jz(a),b=!0);9===a&&(this.Kv(!0),b=!0);return b};
g.k.handleGlobalKeyDown=function(a,b,c,d,e,f){d=!1;c=this.api.L();if(c.Zb)return d;if((e=g.oI(g.gI(this.api)))&&(e=e.Li)&&e.Ha())switch(a){case 65:case 68:case 87:case 83:case 107:case 221:case 109:case 219:d=e.iz(a)}c.u||d||(f=f||String.fromCharCode(a).toLowerCase(),this.g+=f,0==="awesome".indexOf(this.g)?(d=!0,7===this.g.length&&(f=this.api.getRootNode(),e=!g.qi(f,"ytp-color-party"),g.J(f,"ytp-color-party",e))):(this.g=f,d=0==="awesome".indexOf(this.g)));if(!d){switch(a){case 80:b&&!c.N&&($J(this.nb,
LH(),"Previous"),this.api.previousVideo(),d=!0);break;case 78:b&&!c.N&&($J(this.nb,g.GH(),"Next"),this.api.nextVideo(),d=!0);break;case 74:this.api.fd()&&($J(this.nb,g.W?{A:"div",T:["ytp-icon","ytp-icon-rewind-ten-seconds"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z M 16.9,22 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 -0.2,0 -0.4,.1 -0.6,.1 -0.2,0 -0.4,0 -0.6,-0.1 -0.2,-0.1 -0.3,-0.2 -0.5,-0.3 -0.2,-0.1 -0.2,-0.3 -0.3,-0.6 -0.1,-0.3 -0.1,-0.5 -0.1,-0.8 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.9,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
this.api.seekBy(-10*this.api.getPlaybackRate()),d=!0);break;case 76:this.api.fd()&&($J(this.nb,g.W?{A:"div",T:["ytp-icon","ytp-icon-forward-ten-seconds"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.8,3 H 16 V 18.7 L 15,19 v -0.7 l 1.8,-0.6 h .1 V 22 z m 4.3,-1.8 c 0,.3 0,.6 -0.1,.8 l -0.3,.6 c 0,0 -0.3,.3 -0.5,.3 C 20,21.9 19.8,22 19.6,22 19.4,22 19.2,22 19,21.9 18.8,21.8 18.7,21.7 18.5,21.6 18.3,21.5 18.3,21.3 18.2,21 18.1,20.7 18.1,20.5 18.1,20.2 v -0.7 c 0,-0.3 0,-0.6 .1,-0.8 l .3,-0.6 c 0,0 .3,-0.3 .5,-0.3 .2,0 .4,-0.1 .6,-0.1 .2,0 .4,0 .6,.1 .2,.1 .3,.2 .5,.3 .2,.1 .2,.3 .3,.6 .1,.3 .1,.5 .1,.8 v .7 z m -0.8,-0.8 v -0.5 c 0,0 -0.1,-0.2 -0.1,-0.3 0,-0.1 -0.1,-0.1 -0.2,-0.2 -0.1,-0.1 -0.2,-0.1 -0.3,-0.1 -0.1,0 -0.2,0 -0.3,.1 l -0.2,.2 c 0,0 -0.1,.2 -0.1,.3 v 2 c 0,0 .1,.2 .1,.3 0,.1 .1,.1 .2,.2 .1,.1 .2,.1 .3,.1 .1,0 .2,0 .3,-0.1 l .2,-0.2 c 0,0 .1,-0.2 .1,-0.3 v -1.5 z"}}]}),
this.api.seekBy(10*this.api.getPlaybackRate()),d=!0);break;case 37:this.api.fd()&&($J(this.nb,g.W?{A:"div",T:["ytp-icon","ytp-icon-rewind-five-seconds"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z m -1.3,8.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.4,.3 C 18.5,22 18.2,22 18,22 17.8,22 17.6,22 17.5,21.9 17.4,21.8 17.2,21.8 17,21.7 16.8,21.6 16.8,21.5 16.7,21.3 16.6,21.1 16.6,21 16.6,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.5,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.7 z"}}]}),
this.api.seekBy(-5*this.api.getPlaybackRate()),d=!0);break;case 39:this.api.fd()&&($J(this.nb,g.W?{A:"div",T:["ytp-icon","ytp-icon-forward-five-seconds"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 10,19 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 h -2 c 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 0,-3.3 2.7,-6 6,-6 v 4 l 5,-5 -5,-5 v 4 c -4.4,0 -8,3.6 -8,8 z m 6.7,.9 .2,-2.2 h 2.4 v .7 h -1.7 l -0.1,.9 c 0,0 .1,0 .1,-0.1 0,-0.1 .1,0 .1,-0.1 0,-0.1 .1,0 .2,0 h .2 c .2,0 .4,0 .5,.1 .1,.1 .3,.2 .4,.3 .1,.1 .2,.3 .3,.5 .1,.2 .1,.4 .1,.6 0,.2 0,.4 -0.1,.5 -0.1,.1 -0.1,.3 -0.3,.5 -0.2,.2 -0.3,.2 -0.5,.3 C 18.3,22 18.1,22 17.9,22 17.7,22 17.5,22 17.4,21.9 17.3,21.8 17.1,21.8 16.9,21.7 16.7,21.6 16.7,21.5 16.6,21.3 16.5,21.1 16.5,21 16.5,20.8 h .8 c 0,.2 .1,.3 .2,.4 .1,.1 .2,.1 .4,.1 .1,0 .2,0 .3,-0.1 L 18.4,21 c 0,0 .1,-0.2 .1,-0.3 v -0.6 l -0.1,-0.2 -0.2,-0.2 c 0,0 -0.2,-0.1 -0.3,-0.1 h -0.2 c 0,0 -0.1,0 -0.2,.1 -0.1,.1 -0.1,0 -0.1,.1 0,.1 -0.1,.1 -0.1,.1 h -0.6 z"}}]}),
this.api.seekBy(5*this.api.getPlaybackRate()),d=!0);break;case 77:this.api.isMuted()?(this.api.unMute(),aK(this.nb,this.api.getVolume(),!1)):(this.api.mute(),aK(this.nb,0,!0));d=!0;break;case 32:case 75:c.N||(b=!g.uB(g.oH(this.api)),this.nb.Yj(b),b?this.api.playVideo():this.api.pauseVideo(),d=!0);break;case 190:b?c.La&&(b=this.api.getPlaybackRate(),this.api.setPlaybackRate(b+.25,!0),bK(this.nb,!1),d=!0):this.api.fd()&&(aL(this,1),d=!0);break;case 188:b?c.La&&(b=this.api.getPlaybackRate(),this.api.setPlaybackRate(b-
.25,!0),bK(this.nb,!0),d=!0):this.api.fd()&&(aL(this,-1),d=!0);break;case 70:nJ(this.api)&&(this.api.toggleFullscreen(),d=!0);break;case 27:this.l()&&(d=!0)}if("3"!==c.controlsType)switch(a){case 67:g.QI(g.gI(this.api))&&(b=this.api.getOption("captions","track"),this.api.toggleSubtitles(),b=!b||b&&!b.displayName?"Subtitles/closed captions on":"Subtitles/closed captions off",$J(this.nb,yH(),b),d=!0);break;case 79:$K(this,"textOpacity");break;case 87:$K(this,"windowOpacity");break;case 187:case 61:$K(this,
"fontSizeIncrement",!1,!0);break;case 189:case 173:$K(this,"fontSizeIncrement",!0,!0)}var h;48<=a&&57>=a?h=a-48:96<=a&&105>=a&&(h=a-96);null!=h&&this.api.fd()&&(a=this.api.getProgressState(),this.api.seekTo(h/10*(a.seekableEnd-a.seekableStart)+a.seekableStart),d=!0);d&&this.Lb.Ch()}return d};
g.k.Kv=function(a){g.J(this.api.getRootNode(),"ytp-probably-keyboard-focus",a);g.J(this.contextMenu.element,"ytp-probably-keyboard-focus",a)};
g.k.U=function(){this.i.Af();g.ln.prototype.U.call(this)};g.t(bL,g.T);bL.prototype.ga=function(){var a=g.rt(this.D.L())&&g.nI(this.D)&&g.S(g.oH(this.D),128),b=this.D.getPlayerSize();this.visible=this.g.he()&&!a&&240<=b.width;g.J(this.element,"ytp-overflow-button-visible",this.visible);this.visible&&UK(this.tooltip);g.HI(this.D,this.element,this.visible&&this.J)};
bL.prototype.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.D,this.element,this.visible&&a)};
bL.prototype.U=function(){g.T.prototype.U.call(this);g.si(this.element,"ytp-overflow-button-visible")};g.t(cL,g.FJ);g.k=cL.prototype;g.k.KI=function(a){a=gk(a);g.kf(this.element,a)&&(g.kf(this.i,a)||g.kf(this.closeButton,a)||HJ(this))};
g.k.Na=function(){g.FJ.prototype.Na.call(this);this.tooltip.gg(this.element)};
g.k.show=function(){this.Ha()&&this.D.O("OVERFLOW_PANEL_OPENED");g.FJ.prototype.show.call(this);eL(this,!0)};
g.k.hide=function(){g.FJ.prototype.hide.call(this);eL(this,!1)};
g.k.JI=function(a){!a&&this.Id()&&HJ(this)};
g.k.focus=function(){for(var a=g.p(this.actionButtons),b=a.next();!b.done;b=a.next())if(b=b.value,b.Ha()){b.focus();break}};g.t(fL,g.T);fL.prototype.Jb=function(a){this.element.setAttribute("aria-checked",String(a))};
fL.prototype.onClick=function(a){g.oJ(a,this.api)&&this.api.playVideoAt(this.index)};g.t(gL,g.FJ);g.k=gL.prototype;g.k.show=function(){g.FJ.prototype.show.call(this);this.l.I(this.api,"videodatachange",this.Fu);this.l.I(this.api,"onPlaylistUpdate",this.Fu);this.Fu()};
g.k.hide=function(){g.FJ.prototype.hide.call(this);g.nn(this.l);this.updatePlaylist(null)};
g.k.Fu=function(){this.updatePlaylist(this.api.getPlaylist())};
g.k.fr=function(){var a=this.playlist,b=a.Qp;if(b===this.o)this.selected.Jb(!1),this.selected=this.i[a.index];else{for(var c=g.p(this.i),d=c.next();!d.done;d=c.next())d.value.dispose();c=a.getLength();this.i=[];for(d=0;d<c;d++){var e=new fL(this.api,a,d);this.i.push(e);e.Y(this.items)}this.selected=this.i[a.index];this.o=b}this.selected&&this.selected.Jb(!0)};
g.k.XM=function(a){var b=this.api.getVideoUrl(!0);g.pJ(b,this.api,a)};
g.k.updatePlaylist=function(a){if(this.playlist!==a)if(this.playlist&&this.playlist.unsubscribe("shuffle",this.fr,this),this.playlist=a,this.o=null,a){a.subscribe("shuffle",this.fr,this);var b=a.author,c=b?"by $AUTHOR \u2022 $CURRENT_POSITION/$PLAYLIST_LENGTH":"$CURRENT_POSITION/$PLAYLIST_LENGTH",d={CURRENT_POSITION:String(a.index+1),PLAYLIST_LENGTH:String(a.getLength())};b&&(d.AUTHOR=b);this.update({title:a.title,subtitle:g.UG(c,d),playlisturl:this.api.getVideoUrl(!0)});this.fr()}else this.Ha()&&
this.hide();else this.playlist&&this.fr()};
g.k.focus=function(){this.selected.focus()};
g.k.U=function(){this.hide();g.FJ.prototype.U.call(this)};g.t(hL,g.T);
hL.prototype.ga=function(){var a=g.rt(this.api.L());g.J(this.element,"ytp-playlist-menu-button-tiny",400>g.lI(this.api).getPlayerSize().width&&!a);this.playlist&&2!==this.api.getPresentingPlayerType()?(this.update({text:g.UG("$CURRENT_POSITION/$PLAYLIST_LENGTH",{CURRENT_POSITION:String(this.playlist.index+1),PLAYLIST_LENGTH:String(this.playlist.getLength())}),title:g.UG("Playlist: $PLAYLIST_NAME",{PLAYLIST_NAME:this.playlist.title})}),this.Ha()||(this.show(),UK(this.tooltip)),this.visible=!0):this.Ha()&&
(this.hide(),UK(this.tooltip))};
hL.prototype.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.api,this.element,this.visible&&a)};
hL.prototype.g=function(){this.playlist&&this.playlist.unsubscribe("shuffle",this.ga,this);(this.playlist=this.api.getPlaylist())&&this.playlist.subscribe("shuffle",this.ga,this);this.ga()};g.t(iL,g.T);
iL.prototype.l=function(a){if(a){this.tooltipRenderer=a;a=this.tooltipRenderer.text;var b=!1;a&&(this.update({title:a.toString()}),b=!0);g.Hh(this.title,b);a=this.tooltipRenderer.detailsText;b=!1;a&&(this.update({details:a.toString()}),b=!0);g.Hh(this.details,b);a=this.tooltipRenderer.acceptButton;b=!1;a&&a.buttonRenderer&&(this.update({acceptButtonText:a.buttonRenderer.text.toString()}),b=!0);g.Hh(this.acceptButton,b);a=this.tooltipRenderer.dismissButton;b=!1;a&&a.buttonRenderer&&(this.update({dismissButtonText:a.buttonRenderer.text.toString()}),b=
!0);g.Hh(this.dismissButton,b)}a=document.querySelectorAll('[data-tooltip-target-id="'+this.tooltipRenderer.targetId+'"]');this.g=0<a.length?a[0]:null;this.visible=!0;g.dH(this,this.visible);this.g?(a=g.Gh(this.g),a.width&&a.height?(this.o.ol(this.element,this.g),b=g.lI(this.D).getPlayerSize().height-g.Gh(this.element).height-a.height-12,this.element.style.top=b+"px",b=this.Z("ytp-promotooltip-pointer"),a=g.Ch(this.g,this.D.getRootNode()).x-Number(this.element.style.left.replace(/[^\d\.]/g,""))+a.width/
2-12,b.style.left=a+"px"):this.i()):this.i()};
iL.prototype.i=function(){this.visible=!1;g.dH(this,this.visible)};g.t(jL,g.T);jL.prototype.g=function(a){g.dH(this,g.S(a.state,2))};
jL.prototype.onClick=function(){g.oH(this.D);this.D.playVideo()};g.t(g.kL,g.T);g.kL.prototype.onClick=function(){var a=this.api.L(),b=this.api.getVideoData(this.api.getPresentingPlayerType()),c=this.api.getPlaylistId();a=a.getVideoUrl(b.videoId,c,void 0,!0);navigator.share?navigator.share({title:b.title,url:a}):(this.g.Zg(),HJ(this.l,this.element,!1));g.GI(this.api,this.element)};
g.kL.prototype.ga=function(){var a=this.api.L(),b=this.api.getVideoData(),c=this.g.he()&&g.rt(a),d=g.rt(a)&&g.nI(this.api)&&g.S(g.oH(this.api),128);this.ha("icon",c&&a.C?{A:"div",T:["ytp-icon","ytp-icon-sharrow-large"]}:g.W?{A:"div",T:["ytp-icon","ytp-icon-sharrow"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 20.20,14.19 0,-4.45 7.79,7.79 -7.79,7.79 0,-4.56 C 16.27,20.69 12.10,21.81 9.34,24.76 8.80,25.13 7.60,27.29 8.12,25.65 9.08,21.32 11.80,17.18 15.98,15.38 c 1.33,-0.60 2.76,-0.98 4.21,-1.19 z"}}]});
a=a.disableSharing&&2!==this.api.getPresentingPlayerType()||!b.showShareButton||b.In||d;c=g.lI(this.api).getPlayerSize().width;this.visible=!!b.videoId&&c>=this.i&&!a;g.J(this.element,"ytp-share-button-visible",this.visible);g.dH(this,this.visible);UK(this.tooltip);g.HI(this.api,this.element,this.visible&&this.J)};
g.kL.prototype.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.api,this.element,this.visible&&a)};
g.kL.prototype.U=function(){g.T.prototype.U.call(this);g.si(this.element,"ytp-share-button-visible")};g.t(g.lL,g.FJ);g.k=g.lL.prototype;g.k.SI=function(a){a=gk(a);g.kf(this.u,a)||g.kf(this.closeButton,a)||HJ(this)};
g.k.Na=function(){g.FJ.prototype.Na.call(this);this.tooltip.gg(this.element)};
g.k.show=function(){var a=this.Ha();g.FJ.prototype.show.call(this);this.ga();a||this.api.ka("onSharePanelOpened")};
g.k.ga=function(){var a=this;g.I(this.element,"ytp-share-panel-loading");g.si(this.element,"ytp-share-panel-fail");var b=this.api.getVideoData(),c=this.api.getPlaylistId(),d=c&&this.o.checked;g.J(this.element,"ytp-share-panel-has-playlist",!!c);var e=this.api.L();g.P(e.experiments,"web_player_innertube_share_panel")?tE(g.kK(this.api.app),b.getSharePanelCommand).then(function(f){mL(a,f)}):(b={action_get_share_info:1,
video_id:b.videoId},e.yc&&(b.authuser=e.yc),e.pageId&&(b.pageid=e.pageId),g.rt(e)&&g.OD(b,"emb_share"),d&&(b.list=c),g.rl(e.F+"share_ajax",{method:"GET",onError:function(){oL(a)},
onSuccess:function(f,h){h?mL(a,h):oL(a)},
Re:b,withCredentials:!0}));c=this.api.getVideoUrl(!0,!0,!1,!1);this.ha("link",c);this.ha("linkText",c);this.ha("shareLinkWithUrl",g.UG("Share link $URL",{URL:c}));rJ(this.l)};
g.k.RI=function(a){!a&&this.Id()&&HJ(this)};
g.k.focus=function(){this.l.focus()};
g.k.U=function(){g.FJ.prototype.U.call(this);nL(this)};g.t(qL,g.FJ);qL.prototype.show=function(){g.FJ.prototype.show.call(this);this.i.start()};
qL.prototype.hide=function(){g.FJ.prototype.hide.call(this);this.i.stop()};g.t(rL,g.T);rL.prototype.onClick=function(){var a=g.U(this.D.app);a&&a.i&&a.i.uu()};
rL.prototype.ga=function(){var a=g.U(this.D.app);g.dH(this,!!a&&a.Wd);this.ha("icon",this.D.Aj()?g.W?{A:"div",T:["ytp-icon","ytp-icon-airplay-on"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M11,13 L25,13 L25,21 L11,21 L11,13 Z M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z",fill:"#fff"}}]}:
g.W?{A:"div",T:["ytp-icon","ytp-icon-airplay-off"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M12,28 L24,28 L18,22 L12,28 Z M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,23 C7,24.1 7.9,25 9,25 L13,25 L13,23 L9,23 L9,11 L27,11 L27,23 L23,23 L23,25 L27,25 C28.1,25 29,24.1 29,23 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z"}}]})};g.t(g.tL,g.T);g.tL.prototype.U=function(){this.g=null;g.T.prototype.U.call(this)};g.t(uL,g.T);uL.prototype.N=function(a){var b=g.Gh(this.C).width,c=g.Gh(this.K).width,d=this.F.Hc()?3:1;a=a.width-b-c-40*d-52;0<a&&(this.o.style.maxWidth=a+"px")};
uL.prototype.onClick=function(){this.D.ka("innertubeCommand",this.l)};
uL.prototype.updateVideoData=function(a,b){var c=b.EN;this.l=null===c||void 0===c?void 0:c.command;this.g.disabled=null==this.l;g.J(this.g,"ytp-chapter-container-disabled",this.g.disabled);this.Sb()};
uL.prototype.Sb=function(){var a="",b=this.B.g;if(1<b.length){a=1E3*this.D.getProgressState().current;var c=nM(this.B,a);a=b[c].title;null==a&&(a="");if(c!==this.currentIndex||this.i)this.D.ka("innertubeCommand",b[c].onActiveCommand),this.currentIndex=c;this.i=!1}else this.i=!0;a!==this.u&&(this.update({title:a}),this.u=a);a?this.show():this.hide()};g.t(g.wL,g.T);g.wL.prototype.Pb=function(a){g.S(a.state,32)?xL(this,this.api.Ie()):this.Ha()&&(g.S(a.state,16)||g.S(a.state,1))||this.g.hide()};
g.wL.prototype.Wc=function(){var a=g.oH(this.api);(g.S(a,32)||g.S(a,16))&&yL(this)};
g.wL.prototype.o=function(){this.l=NaN;yL(this)};
g.wL.prototype.hide=function(){this.i&&xL(this,null);g.T.prototype.hide.call(this)};g.t(zL,g.T);zL.prototype.onClick=function(){g.GI(this.g,this.element);this.g.ka("onFullerscreenEduClicked")};
zL.prototype.ga=function(){this.g.isFullscreen()?this.i?this.l.hide():this.l.show():this.hide();g.HI(this.g,this.element,this.g.isFullscreen()&&!this.i)};g.t(g.AL,g.T);g.k=g.AL.prototype;g.k.onClick=function(){var a=this;if(this.D.L().la)try{this.D.toggleFullscreen()["catch"](function(b){a.ym(b)})}catch(b){this.ym(b)}else HJ(this.message,this.element,!0)};
g.k.ym=function(a){String(a).includes("fullscreen error")?g.Lm(a):g.Km(a);this.Wu()};
g.k.Wu=function(){this.disable();this.message.Tb(this.element,!0)};
g.k.xh=function(){g.hn()===this.D.getRootNode()?this.i.start():(this.i.stop(),this.message&&this.message.hide())};
g.k.kF=function(){if(window.screen&&window.outerWidth&&window.outerHeight){var a=.9*window.screen.width,b=.9*window.screen.height,c=Math.max(window.outerWidth,window.innerWidth),d=Math.max(window.outerHeight,window.innerHeight);if(c>d!==a>b){var e=c;c=d;d=e}a>c&&b>d&&this.Wu()}};
g.k.disable=function(){var a=this;if(!this.message){var b=(null!=Xj(["requestFullscreen","webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen"],document.body)?"Full screen is unavailable. $BEGIN_LINKLearn More$END_LINK":"Your browser doesn't support full screen. $BEGIN_LINKLearn More$END_LINK").split(/\$(BEGIN|END)_LINK/);this.message=new g.FJ(this.D,{A:"div",T:["ytp-popup","ytp-generic-popup"],M:{role:"alert",tabindex:"0"},H:[b[0],{A:"a",M:{href:"https://support.google.com/youtube/answer/6276924",
target:this.D.L().B},S:b[2]},b[4]]},100,!0);this.message.hide();g.C(this,this.message);this.message.subscribe("show",function(c){a.l.gm(a.message,c)});
g.BI(this.D,this.message.element,4);this.element.setAttribute("aria-disabled","true");this.element.setAttribute("aria-haspopup","true");(0,this.g)();this.g=null}};
g.k.ga=function(){g.dH(this,nJ(this.D))};
g.k.xA=function(a){if(a){var b=g.W?{A:"div",T:["ytp-icon","ytp-icon-full-screen-close"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"g",G:"ytp-fullscreen-button-corner-2",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{A:"g",G:"ytp-fullscreen-button-corner-3",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{A:"g",G:"ytp-fullscreen-button-corner-0",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",
M:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{A:"g",G:"ytp-fullscreen-button-corner-1",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]};a=g.sJ(this.D,"Exit full screen","f");document.activeElement===this.element&&this.D.getRootNode().focus()}else b=g.W?{A:"div",T:["ytp-icon","ytp-icon-full-screen"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"g",G:"ytp-fullscreen-button-corner-0",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",
M:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{A:"g",G:"ytp-fullscreen-button-corner-1",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{A:"g",G:"ytp-fullscreen-button-corner-2",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{A:"g",G:"ytp-fullscreen-button-corner-3",H:[{A:"path",Pa:!0,G:"ytp-svg-fill",M:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]},a=g.sJ(this.D,"Full screen","f");this.ha("icon",
b);this.ha("title",this.message?null:a);UK(this.l.rb())};
g.k.U=function(){this.message||((0,this.g)(),this.g=null);g.T.prototype.U.call(this)};g.t(BL,g.T);BL.prototype.onClick=function(){this.D.ka("onCollapseMiniplayer");g.GI(this.D,this.element)};
BL.prototype.ga=function(){this.visible=!this.D.isFullscreen();g.dH(this,this.visible);g.HI(this.D,this.element,this.visible&&this.J)};
BL.prototype.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.D,this.element,this.visible&&a)};g.t(CL,g.T);CL.prototype.Ia=function(a){this.ga("newdata"===a)};
CL.prototype.ga=function(a){var b=this.D.getVideoData(),c=b.Oi,d=g.oH(this.D);d=(g.uB(d)||g.S(d,4))&&0<c.length;g.dH(this,d);a&&(this.g=!0);if(d){this.g&&this.i.fb();a=null;d="";for(var e=0;e<c.length;e++)if(c[e].id===b.videoId){a=c[e].title;d=g.UG("Viewing $CAMERA_INDEX of $CAMERA_COUNT",{CAMERA_INDEX:String(e+1),CAMERA_COUNT:String(c.length)})+"\n";break}this.update({text:d+a,preview:b.Gc("default.jpg")});UK(this.tooltip)}else this.i.stop()};
CL.prototype.l=function(){TK(this.tooltip,this.element,"More cameras available");this.g=!1};g.t(DL,g.FJ);g.k=DL.prototype;g.k.show=function(){var a=this.Ha();g.FJ.prototype.show.call(this);a||(this.l.I(this.api,"presentingplayerstatechange",this.ga),this.l.I(this.api,"videodatachange",this.ga),this.ga())};
g.k.hide=function(){this.l&&(g.nn(this.l),g.FJ.prototype.hide.call(this))};
g.k.ga=function(){var a=this,b=this.api.getVideoData(),c=b.Oi,d,e={};for(d=0;d<c.length;e={Tr:e.Tr},d++){var f=this.i[d];f||(f=new g.T({A:"button",T:["ytp-multicam-menu-item","ytp-button"],M:{"aria-checked":"{{selected}}","data-id":"{{videoId}}"},H:[{A:"div",G:"ytp-multicam-menu-item-title",S:"{{cameraName}}"}]}),e.Tr=d,f.ia("click",function(n){return function(){var q=n.Tr,r=a.api.getVideoData(),u=a.api;q=r.Oi[q];r=g.U(u.app,1).getVideoData();var w=u.getCurrentTime();q.id===r.videoId?g.U(u.app)!==
g.U(u.app,1)&&(g.MG(u.app,1),r.ra||u.seekTo(w)):(g.MG(u.app,4),u.app.loadVideoByPlayerVars({videoId:q.id,title:r.title,start:r.ra?null:w,raw_player_response:{multicamera:{playerLegacyMulticameraRenderer:{metadataList:r.XA}}}},4))}}(e)),f.Y(this.items),this.i[d]=f);
var h=c[d],l=h.id;if(l!==f.element.getAttribute("data-id")){var m=h.thumbnail_url;!m&&l&&(m=g.Pt(this.api.L(),l,"default.jpg"));f.element.style.backgroundImage=m?"url("+m+")":""}f.update({cameraName:h.title,videoId:l,selected:l===b.videoId?!0:null})}for(;d<this.i.length;)this.i.pop().dispose();d=g.oH(this.api);b=c.length||!b.Nb();g.uB(d)||g.S(d,4)||b||!this.Id()||HJ(this)};
g.k.focus=function(){for(var a=this.api.getVideoData(),b=a.Oi,c=0;c<b.length;c++)if(b[c].id===a.videoId){this.i[c].focus();break}};
g.k.U=function(){g.Od(this.i);g.FJ.prototype.U.call(this)};g.t(EL,g.A);EL.prototype.g=function(){var a=(0,g.M)()-this.startTime;a=a<this.duration?a/this.duration:1;this.i(g.Bi(Pka,a));1>a&&this.delay.start()};
var Pka=new g.Ai(0,0,.4,0,.2,1,1,1),Eja=/[0-9.-]+|[^0-9.-]+/g;g.t(KL,g.T);g.k=KL.prototype;g.k.yA=function(a){this.visible=300<=a.width;g.dH(this,this.visible);g.HI(this.D,this.element,this.visible&&this.J)};
g.k.BL=function(){this.D.L().R?this.D.isMuted()?this.D.unMute():this.D.mute():HJ(this.message,this.element,!0);g.GI(this.D,this.element)};
g.k.II=function(a){this.setVolume(a.volume,a.muted)};
g.k.setVolume=function(a,b){var c=this,d=b?0:a/100,e=this.D.L();if(e.C)d=0===d?RH():0<d&&.5>d?QH():PH(),d!==this.i&&(this.ha("icon",d),this.i=d);else{var f=0===d?1:50<a?1:0;if(this.B!==f){var h=this.N;isNaN(h)?LL(this,f):HL(this.P,function(m){LL(c,h+(c.B-h)*m)},250);
this.B=f}d=0===d?1:0;if(this.u!==d){var l=this.F;isNaN(l)?ML(this,d):HL(this.K,function(m){ML(c,l+(c.u-l)*m)},250);
this.u=d}}e.R&&(e=g.sJ(this.D,"Mute","m"),d=g.sJ(this.D,"Unmute","m"),e=b?d:e,this.ha("title",e),this.ha("label",e),UK(this.tooltip))};
g.k.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.D,this.element,this.visible&&a)};
var Fja=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",24.77," C",21.89,",",23.85," ",24,",",21.17," ",24,",",18," C",24,",",14.83," ",21.89,",",12.15," ",19,",",11.29," L",19,",",11.29," Z"],Gja=["M",19,",",11.29," C",21.89,",",12.15," ",24,",",14.83," ",24,",",18," C",24,",",21.17," ",21.89,",",23.85," ",19,",",24.71," L",19,",",26.77," C",23.01,",",25.86," ",26,",",22.28," ",26,",",18," C",26,",",13.72," ",
23.01,",",10.14," ",19,",",9.23," L",19,",",11.29," Z"];g.t(NL,g.T);NL.prototype.onClick=function(){this.D.togglePictureInPicture()};g.t(g.PL,g.T);g.PL.prototype.i=function(a){OL(this,a.state)};
g.PL.prototype.Ia=function(){g.J(this.element,"ytp-play-button-playlist",g.nI(this.D))};
g.PL.prototype.yl=function(){g.uB(g.oH(this.D))?this.D.pauseVideo():this.D.playVideo()};g.t(g.SL,g.T);g.k=g.SL.prototype;g.k.Ia=function(){TL(this);this.o&&(this.gb(this.o),this.o=null);this.videoData=this.D.getVideoData(1);if(this.playlist=this.D.getPlaylist())this.playlist.subscribe("shuffle",this.Ia,this),this.o=this.I(this.D,"progresssync",this.MI);this.l=UL(this);RL(this);this.Eu(g.lI(this.D).getPlayerSize())};
g.k.Eu=function(a){a=void 0===a?g.lI(this.D).getPlayerSize():a;var b=g.nI(this.D)||this.g&&g.CI(this.D)||VL(this);g.dH(this,b&&(this.g||400<=a.width))};
g.k.onClick=function(a){var b=!0;this.B?b=g.oJ(a,this.D):g.jk(a);b&&(this.g&&5===this.D.getPresentingPlayerType()?this.D.O("ytoprerollinternstitialnext"):this.g?this.D.nextVideo(!0):this.l?this.D.seekTo(0):this.D.previousVideo(!0))};
g.k.MI=function(){var a=UL(this);a!==this.l&&(this.l=a,RL(this))};
g.k.U=function(){this.i&&(this.i(),this.i=null);TL(this);g.T.prototype.U.call(this)};g.t(WL,g.T);WL.prototype.sa=function(a){return"PLAY_PROGRESS"===a?this.o:"LOAD_PROGRESS"===a?this.l:this.i};ZL.prototype.update=function(a,b,c,d){this.width=b;this.i=c;this.u=d;this.g=b-c-d;this.position=g.Be(a,c,c+this.g);this.o=this.position-c;this.l=this.o/this.g};g.t(g.aM,g.EJ);g.k=g.aM.prototype;g.k.uw=function(){this.R=this.g.length-1;this.ea=0;bM(this,!0)&&bM(this,!1);for(var a=0,b=0;b<this.g.length;b++)if(0===this.g[b].width){if(b===this.g.length-1)for(var c=this.g.length-1;0<=c;c--)if(0<this.g[c].width){YL(this.g[c],0);XL(this.g[c],Math.floor(this.g[c].width)+"px");break}XL(this.g[b],"0")}else b===this.g.length-1?XL(this.g[b],Math.floor(this.g[b].width+a)+"px"):(a=this.g[b].width+a,c=Math.round(a),a-=c,XL(this.g[b],c+"px"));fM(this)};
g.k.Sb=function(){fM(this);var a=this.api.getCurrentTime();(a<this.clipStart||a>this.clipEnd)&&this.Yq()};
g.k.OI=function(a){if(!g.kk(a)){var b=!1;switch(g.lk(a)){case 36:this.api.seekTo(0);b=!0;break;case 35:this.api.seekTo(Infinity);b=!0;break;case 34:this.api.seekBy(-60);b=!0;break;case 33:this.api.seekBy(60);b=!0;break;case 38:this.api.seekBy(5);b=!0;break;case 40:this.api.seekBy(-5),b=!0}b&&g.jk(a)}};
g.k.zA=function(a,b){this.updateVideoData(b,"newdata"===a)};
g.k.sG=function(){this.zA("newdata",this.api.getVideoData())};
g.k.updateVideoData=function(a,b){b=void 0===b?!1:b;var c=!!a&&a.isValid();this.La=c&&a.allowLiveDvr;uM(this,this.api.fd());b&&(c?(c=a.clipEnd,this.clipStart=a.clipStart,this.clipEnd=c,mM(this),cM(this,this.B,this.da)):this.Yq(),g.uN(this.tooltip));if(this.api.L().aa("web_wn_macro_markers")&&a){c=a.Hg;if(c=!a.ra&&c)c=this.api.getVideoData().Ux,c=null!=c&&0<c.length;if(c){var d=this.api.getVideoData().Ux;if(null!=d){c=0;d=g.p(d);for(var e=d.next();!e.done;e=d.next()){e=e.value;if(e.chapterRenderer){e=
e.chapterRenderer;var f={startTime:NaN,title:null,onActiveCommand:void 0},h=e.title;h&&h.simpleText&&(f.title=h.simpleText);h=e.timeRangeStartMillis;null!=h&&(f.startTime=h);f.onActiveCommand=e.onActiveCommand;e=f;0===c&&0!==e.startTime&&(this.g[c].startTime=0,this.g[c].title="",this.g[c].onActiveCommand=e.onActiveCommand,c++);this.g.length<=c&&(f=new WL,this.g.push(f),g.C(this,f),f.Y(this.za,this.za.children.length));this.g[c].startTime=e.startTime;this.g[c].title=e.title?e.title:"";this.g[c].onActiveCommand=
e.onActiveCommand}c++}for(;c<this.g.length;)this.g.pop().dispose();this.uw()}}else $L(this)}fM(this)};
g.k.NI=function(a){this.C&&!g.S(a.state,32)&&3!==this.api.getPresentingPlayerType()&&this.C.cancel()};
g.k.HD=function(a){(this.F=a)?(this.ha("clipstarticon",FH()),this.ha("clipendicon",FH()),this.ha("clipstarttitle",null),this.ha("clipendtitle",null)):(this.ha("clipstarticon",wH()),this.ha("clipendicon",vH()),this.ha("clipstarttitle","Watch entire video"),this.ha("clipendtitle","Watch entire video"));mM(this);cM(this,this.B,this.da)};
g.k.bM=function(a,b,c){var d=g.Ah(this.element),e=kM(this).g,f=c?c.getAttribute("data-tooltip"):void 0,h=c?c.getAttribute("data-position"):void 0,l=c?c.getAttribute("data-offset-y"):void 0;l=l?Number(l):0;h&&(a=VJ(this.i,Number(c.getAttribute("data-position")),0)*e+g.Ah(this.ac).x);this.ua.x=a-d.x;this.ua.y=b-d.y;a=kM(this);d=hM(this,a);b=f||g.VG(this.La?d-this.i.g:d);c=a.position+this.zb;d-=this.api.Fb();if(this.api.L().aa("web_wn_macro_markers")&&this.api.Ie()){if(1<this.g.length)for(e=gM(this,
this.ua.x,!0),h=0;h<this.g.length;)g.J(this.g[h].g,"ytp-exp-chapter-hover-effect",h===e),h++;h=this.tooltip.scale;l=(isNaN(l)?0:l)-45*h;e=nM(this,1E3*d);(e=this.g[e].title)||(l+=16*h);.6===this.tooltip.scale&&(l=e?110:126);h=nM(this,1E3*d);this.X=iM(this,d,h)?h:iM(this,d,h+1)?h+1:-1;g.J(this.api.getRootNode(),"ytp-progress-bar-snap",-1!==this.X&&1<this.g.length);h=320*this.tooltip.scale;var m=e.length*(this.l?8.55:5.7);h=m<=h?m:h;m=h<160*this.tooltip.scale;var n=3;!m&&h/2>a.position&&(n=1);!m&&h/
2>this.o-a.position&&(n=2);tN(this.tooltip,c,d,b,!!f,l,e,n)}else tN(this.tooltip,c,d,b,!!f,l);g.J(this.api.getRootNode(),"ytp-progress-bar-hover",!g.S(g.oH(this.api),64));eM(this)};
g.k.aM=function(){g.uN(this.tooltip);g.si(this.api.getRootNode(),"ytp-progress-bar-hover")};
g.k.ZL=function(a,b){this.u&&(this.u.dispose(),this.u=null);this.Gb=b;this.api.L().aa("web_wn_macro_markers")&&1<this.g.length&&0<this.Ga&&-1!==this.X?this.api.seekTo(this.g[this.X].startTime/1E3,!1):this.api.seekTo(hM(this,kM(this)),!1);g.I(this.element,"ytp-drag");(this.Wa=g.uB(g.oH(this.api)))&&this.api.pauseVideo()};
g.k.cM=function(){var a=this;this.Aa=0;g.si(this.element,"ytp-pull-ui");g.si(this.element,"ytp-pulling");this.u&&(this.u.dispose(),this.u=null);if(0<this.K){var b=(0,g.M)();this.u=new g.ci(function(){var c=a.K,d=kM(a).position,e=1-Math.pow(1-((0,g.M)()-b)/200,3);d+=e*(a.B*a.o-d);if(0>e||1<e)e=1;jM(a,(1-e)*c,d,a.B);1>e&&a.u.start()});
this.u.start()}if(g.S(g.oH(this.api),32)||3===this.api.getPresentingPlayerType())this.api.L().aa("web_wn_macro_markers")&&1<this.g.length&&0<this.Ga&&-1!==this.X?this.api.seekTo(this.g[this.X].startTime/1E3):this.api.seekTo(hM(this,kM(this))),g.si(this.element,"ytp-drag"),this.Wa&&!g.S(g.oH(this.api),2)&&this.api.playVideo()};
g.k.dM=function(a,b){var c=this,d=!1,e=!1,f=kM(this);3600<=this.i.getLength()&&1===this.g.length&&(jM(this,this.Gb-b-10,f.position,f.l),e=!0,d=this.K>.1*(this.l?60:40),f=kM(this));g.J(this.element,"ytp-pull-ui",e);d&&g.I(this.element,"ytp-pulling");d=0;f.i&&0>=f.position&&1===this.g.length?d=-1:f.u&&f.position>=f.width&&1===this.g.length&&(d=1);if(this.Aa!==d&&1===this.g.length&&(this.Aa=d,this.u&&(this.u.dispose(),this.u=null),d)){var h=(0,g.M)();this.u=new g.ci(function(){var l=c.o*(c.W-1);c.N=
g.Be(c.N+c.Aa*((0,g.M)()-h)*.3,0,l);dM(c);c.api.seekTo(hM(c,kM(c)),!1);0<c.N&&c.N<l&&c.u.start()});
this.u.start()}this.api.seekTo(hM(this,f),!1)};
g.k.setPosition=function(a,b,c){this.zb=a;this.o=b;this.l=c;dM(this);this.api.L().aa("web_wn_macro_markers")&&1===this.g.length&&(this.g[0].width=b||0)};
g.k.nB=function(){this.F||(this.ha("clipstarticon",uH()),this.ha("clipendicon",uH()),g.I(this.element,"ytp-clip-hover"))};
g.k.mB=function(){this.F||(this.ha("clipstarticon",wH()),this.ha("clipendicon",vH()),g.si(this.element,"ytp-clip-hover"))};
g.k.Yq=function(){this.clipStart=0;this.clipEnd=Infinity;mM(this);cM(this,this.B,this.da)};
g.k.ID=function(a){a=g.p(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,b.visible){var c=b.getId();if(!this.P[c]){var d=g.bf("DIV");b.tooltip&&d.setAttribute("data-tooltip",b.tooltip);this.P[c]=b;this.va[c]=d;pi(d,b.style);lM(this,c);g.P(this.api.L().experiments,"disable_ad_markers_on_content_progress_bar")||this.g[0].u.appendChild(d)}}else tM(this,b)};
g.k.SN=function(a){a=g.p(a);for(var b=a.next();!b.done;b=a.next())tM(this,b.value)};
g.k.U=function(){uM(this,!1);g.EJ.prototype.U.call(this)};g.t(wM,g.T);wM.prototype.isActive=function(){return!!this.D.getOption("remote","casting")};
wM.prototype.ga=function(){var a=!1;this.D.getOptions().includes("remote")&&(a=1<this.D.getOption("remote","receivers").length);g.dH(this,a&&400<=g.lI(this.D).getPlayerSize().width);var b=1;a&&this.isActive()&&(b=2);if(this.g!==b){this.g=b;switch(b){case 1:this.ha("icon",g.W?{A:"div",T:["ytp-icon","ytp-icon-cast-desktop-off"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"M27,9 L9,9 C7.9,9 7,9.9 7,11 L7,14 L9,14 L9,11 L27,11 L27,25 L20,25 L20,27 L27,27 C28.1,27 29,26.1 29,25 L29,11 C29,9.9 28.1,9 27,9 L27,9 Z M7,24 L7,27 L10,27 C10,25.34 8.66,24 7,24 L7,24 Z M7,20 L7,22 C9.76,22 12,24.24 12,27 L14,27 C14,23.13 10.87,20 7,20 L7,20 Z M7,16 L7,18 C11.97,18 16,22.03 16,27 L18,27 C18,20.92 13.07,16 7,16 L7,16 Z",
fill:"#fff"}}]});break;case 2:this.ha("icon",g.qH())}g.J(this.element,"ytp-remote-button-active",this.isActive())}};
wM.prototype.i=function(){if(this.D.getOption("remote","quickCast"))this.D.setOption("remote","quickCast",!0);else{var a=this.Ja,b=this.element;if(a.Id())a.Na();else{a.initialize();a:{var c=g.p(a.dc.items);for(var d=c.next();!d.done;d=c.next())if(d=d.value,0===d.priority){c=d;break a}c=null}c&&(c.open(),a.Tb(b));a.Tb(b)}}};g.t(xM,g.T);xM.prototype.g=function(a){a=this.i&&400<=a.width;g.dH(this,a);g.HI(this.D,this.element,a)};
xM.prototype.l=function(){if(this.Ja.Ha())this.Ja.Na();else{var a=g.QI(g.gI(this.D));a&&!a.loaded&&(a.bd("tracklist",{includeAsr:!0}).length||a.load());g.GI(this.D,this.element);this.Ja.Tb(this.element)}};
xM.prototype.updateBadge=function(){var a=(a=g.U(this.D.app))?!!(a.g.ya&&a.g.ya.video&&Yq(a.g.ya.video)):!1;var b=this.D.getPresentingPlayerType(),c=2!==b&&3!==b,d=g.pI(this.D),e=c&&!!g.oI(g.gI(this.D));b=e&&1===d.displayMode;d=e&&2===d.displayMode;c=(e=b||d)||!c?null:this.D.getPlaybackQuality();g.J(this.element,"ytp-hdr-quality-badge",a);g.J(this.element,"ytp-hd-quality-badge",!a&&("hd1080"===c||"hd1440"===c));g.J(this.element,"ytp-4k-quality-badge",!a&&"hd2160"===c);g.J(this.element,"ytp-5k-quality-badge",
!a&&"hd2880"===c);g.J(this.element,"ytp-8k-quality-badge",!a&&"highres"===c);g.J(this.element,"ytp-3d-badge-grey",!a&&e&&b);g.J(this.element,"ytp-3d-badge",!a&&e&&d)};g.t(zM,EK);zM.prototype.Nb=function(){var a=g.qI(g.gI(this.D));return void 0!==a&&a.loaded};
zM.prototype.ga=function(){void 0!==g.qI(g.gI(this.D))&&3!==this.D.getPresentingPlayerType()?this.g||(this.Ja.vb(this),this.g=!0):this.g&&(this.Ja.Jd(this),this.g=!1);this.setValue(this.Nb())};
zM.prototype.i=function(a){this.Nb();a?this.D.loadModule("annotations_module"):this.D.unloadModule("annotations_module")};
zM.prototype.U=function(){this.g&&this.Ja.Jd(this);EK.prototype.U.call(this)};g.t(g.AM,g.wK);g.k=g.AM.prototype;g.k.open=function(){g.HK(this.Ja,this.l)};
g.k.Jb=function(a){BM(this);this.options[a].element.setAttribute("aria-checked","true");this.xb(this.Nf(a));this.i=a};
g.k.xs=function(a,b,c){var d=this;b=new g.wK({A:"div",T:["ytp-menuitem"],M:{tabindex:"0",role:"menuitemradio","aria-checked":c?"true":void 0},H:[{A:"div",T:["ytp-menuitem-label"],S:"{{label}}"}]},b,this.Nf(a,!0));b.ia("click",function(){d.sd(a)});
return b};
g.k.enable=function(a){this.u?a||(this.u=!1,this.dl(!1)):a&&(this.u=!0,this.dl(!0))};
g.k.dl=function(a){a?this.Ja.vb(this):this.Ja.Jd(this)};
g.k.sd=function(a){this.O("select",a)};
g.k.Nf=function(a){return a.toString()};
g.k.QI=function(a){g.kk(a)||39!==g.lk(a)||(this.open(),g.jk(a))};
g.k.U=function(){this.u&&this.Ja.Jd(this);g.wK.prototype.U.call(this);for(var a=g.p(Object.keys(this.options)),b=a.next();!b.done;b=a.next())this.options[b.value].dispose()};g.t(DM,g.AM);DM.prototype.ga=function(){var a=this.D.getAvailableAudioTracks();1<a.length?(g.CM(this,(0,g.Hc)(a,this.o)),this.tracks=g.yb(a,this.o,this),this.g.xb(a.length?" ("+a.length+")":""),this.O("size-change"),this.Jb(this.o(this.D.getAudioTrack())),this.enable(!0)):this.enable(!1)};
DM.prototype.sd=function(a){g.AM.prototype.sd.call(this,a);this.D.setAudioTrack(this.tracks[a]);this.Ja.pe()};
DM.prototype.o=function(a){return a.toString()};g.t(EM,EK);EM.prototype.l=function(){var a=this.D.getPresentingPlayerType();if(2!==a&&3!==a&&g.CI(this.D))this.i||(this.Ja.vb(this),this.i=!0,this.g.push(this.I(this.D,"videodatachange",this.l)),this.g.push(this.I(this.D,"videoplayerreset",this.l)),this.g.push(this.I(this.D,"onPlaylistUpdate",this.l)),this.g.push(this.I(this.D,"autonavchange",this.o)),a=this.D.getVideoData(),this.o(a.autonavState));else if(this.i){this.Ja.Jd(this);this.i=!1;a=g.p(this.g);for(var b=a.next();!b.done;b=a.next())this.gb(b.value)}};
EM.prototype.o=function(a){this.setValue(1!==a)};
EM.prototype.u=function(a){var b=this.D;a=a?2:1;b.app.i.ka("onAutonavChangeRequest",1!=a);a&&zP(b.app,a)};
EM.prototype.U=function(){this.i&&this.Ja.Jd(this);EK.prototype.U.call(this)};g.t(FM,g.AM);g.k=FM.prototype;g.k.Xm=function(){var a=this.D.getPresentingPlayerType();if(2!==a&&3!==a&&(this.o=this.D.cj(),a=this.D.getAvailableQualityLevels(),g.zI(this.D)&&g.AI(this.D)&&a.unshift("missing-qualities"),nja(this.D)&&a.unshift("inline-survey"),g.CM(this,a),a.length)){this.AA();this.enable(!0);return}this.enable(!1)};
g.k.AA=function(){var a=this.D.getPreferredQuality();this.options[a]&&(this.g=this.D.getPlaybackQuality(),this.Jb(a),"auto"===a&&this.xb(this.Nf(a)))};
g.k.sd=function(a){"missing-qualities"!==a&&(g.AM.prototype.sd.call(this,a),this.D.setPlaybackQuality(a),this.Ja.Na(),this.Xm())};
g.k.xs=function(a,b,c){var d=this;if("inline-survey"!==a)return g.AM.prototype.xs.call(this,a,b,c);a=[{A:"span",S:"Looks good?"}];c={};for(var e=g.p([!0,!1]),f=e.next();!f.done;c={fo:c.fo},f=e.next())c.fo=f.value,f=new g.T({A:"span",G:"ytp-menuitem-inline-survey-response",H:[c.fo?g.DH():g.AH()],M:{tabindex:"0",role:"button"}}),f.ia("click",function(h){return function(){var l=g.U(d.D.app);l&&(l.Ya("iqsr",h.fo?"0":"1"),l.getVideoData().wz=!0);d.Ja.Na();d.Xm()}}(c)),a.push(f);
return new g.wK({A:"div",G:"ytp-menuitem",M:{"aria-disabled":"true"},H:[{A:"div",T:["ytp-menuitem-label"],H:a}]},b)};
g.k.Nf=function(a,b){b=void 0===b?!1:b;if("missing-qualities"===a)return{A:"a",M:{href:"https://support.google.com/youtube/?p=missing_quality",target:this.D.L().B},S:"Missing options?"};if("inline-survey"===a)return"";var c=[GM(this,a)],d=this.D.getPreferredQuality();b||"auto"!==d||"auto"!==a||(c.push(" "),c.push(GM(this,this.g,["ytp-menu-label-secondary"])));return{A:"div",H:c}};g.t(HM,g.T);g.k=HM.prototype;g.k.init=function(){this.Wj(this.g);this.ha("minvalue",this.minimumValue);this.ha("maxvalue",this.maximumValue)};
g.k.VI=function(a){if(!g.kk(a)){switch(g.lk(a)){case 37:case 40:var b=-this.B;break;case 39:case 38:b=this.B;break;default:return}this.Wj(this.g+b);g.jk(a)}};
g.k.TI=function(a){var b=this.g;b+=0>(a.deltaX||-a.deltaY)?-this.u:this.u;this.Wj(b);g.jk(a)};
g.k.UI=function(a){a=(a-g.Ah(this.i).x)/this.C*this.range+this.minimumValue;this.Wj(a)};
g.k.Wj=function(a,b){b=void 0===b?"":b;var c=g.Be(a,this.minimumValue,this.maximumValue);""===b&&(b=c.toString());this.ha("valuenow",c);this.ha("valuetext",b);this.K.style.left=(c-this.minimumValue)/this.range*(this.C-this.F)+"px";this.g=c};
g.k.focus=function(){this.R.focus()};g.t(JM,HM);JM.prototype.N=function(){this.D.setPlaybackRate(this.g,!0)};
JM.prototype.Wj=function(a){HM.prototype.Wj.call(this,a,KM(this,a).toString());this.l&&(IM(this),this.P())};
JM.prototype.V=function(){var a=this.D.getPlaybackRate();KM(this,this.g)!==a&&(this.Wj(a),IM(this))};g.t(LM,g.EJ);LM.prototype.focus=function(){this.g.focus()};g.t(MM,zK);g.t(NM,g.AM);g.k=NM.prototype;g.k.Nf=function(a){return"1"===a?"Normal":a.toLocaleString()};
g.k.ga=function(){var a=this.D.getPresentingPlayerType();this.enable(2!==a&&3!==a);RM(this)};
g.k.dl=function(a){g.AM.prototype.dl.call(this,a);a?(this.C=this.I(this.D,"onPlaybackRateChange",this.WI),RM(this),PM(this,this.D.getPlaybackRate())):(this.gb(this.C),this.C=null)};
g.k.WI=function(a){var b=this.D.getPlaybackRate();this.B.includes(b)||QM(this,b);PM(this,a)};
g.k.sd=function(a){g.AM.prototype.sd.call(this,a);a===this.g?this.D.setPlaybackRate(this.o,!0):this.D.setPlaybackRate(Number(a),!0);this.Ja.pe()};g.t(TM,g.AM);g.k=TM.prototype;g.k.Jb=function(a){g.AM.prototype.Jb.call(this,a)};
g.k.CA=function(a){return a.option.toString()};
g.k.getOption=function(a){return this.settings[a]};
g.k.Nf=function(a){return this.getOption(a).text||""};
g.k.sd=function(a){g.AM.prototype.sd.call(this,a);this.O("settingChange",this.setting,this.settings[a].option)};g.t(UM,g.AK);UM.prototype.Xc=function(a){for(var b=g.p(Object.keys(a)),c=b.next();!c.done;c=b.next()){var d=c.value;if(c=this.ni[d]){var e=a[d].toString();d=!!a[d+"Override"];c.options[e]&&(c.Jb(e),c.o.element.setAttribute("aria-checked",String(!d)),c.g.element.setAttribute("aria-checked",String(d)))}}};
UM.prototype.ne=function(a,b){this.O("settingChange",a,b)};g.t(VM,g.AM);VM.prototype.g=function(a){return a.languageCode};
VM.prototype.Nf=function(a){return this.languages[a].languageName||""};
VM.prototype.sd=function(a){this.O("select",a);g.NK(this.Ja)};g.t(XM,g.AM);g.k=XM.prototype;g.k.Hu=function(a){return g.Mb(a)?"__off__":a.displayName};
g.k.Nf=function(a){return"__off__"===a?"Off":"__translate__"===a?"Auto-translate":"__contribute__"===a?"Add subtitles/CC":("__off__"===a?{}:this.tracks[a]).displayName};
g.k.sd=function(a){"__translate__"===a?this.g.open():"__contribute__"===a?(this.D.pauseVideo(),this.D.isFullscreen()&&this.D.toggleFullscreen(),a=g.ND(this.D.L(),this.D.getVideoData()),g.mJ(a)):(this.D.setOption("captions","track","__off__"===a?{}:this.tracks[a]),g.AM.prototype.sd.call(this,a),this.Ja.pe())};
g.k.ga=function(){var a=this.D.getOptions();a=a&&-1!==a.indexOf("captions");var b=this.D.getVideoData();b=b&&b.Io;var c={};if(a||b){if(a){var d=this.D.getOption("captions","track");c=this.D.getOption("captions","tracklist",{includeAsr:!0});var e=this.D.getOption("captions","translationLanguages");this.tracks=g.yb(c,this.Hu,this);var f=(0,g.Hc)(c,this.Hu);if(e.length&&!g.Mb(d)){var h=d.translationLanguage;if(h&&h.languageName){var l=h.languageName;h=e.findIndex(function(m){return m.languageName===
l});
qaa(e,h)}Hja(this.g,e);f.push("__translate__")}e=this.Hu(d)}else this.tracks={},f=[],e="__off__";f.unshift("__off__");this.tracks.__off__={};b&&f.unshift("__contribute__");this.tracks[e]||(this.tracks[e]=d,f.push(e));g.CM(this,f);this.Jb(e);d&&d.translationLanguage?this.g.Jb(this.g.g(d.translationLanguage)):BM(this.g);a&&this.o.Xc(this.D.getSubtitlesUserSettings());this.C.xb(c&&c.length?" ("+c.length+")":"");this.O("size-change");this.enable(!0)}else this.enable(!1)};
g.k.aJ=function(a){var b=this.D.getOption("captions","track");b=g.Pb(b);b.translationLanguage=this.g.languages[a];this.D.setOption("captions","track",b)};
g.k.ne=function(a,b){if("reset"===a)this.D.resetSubtitlesUserSettings();else{var c={};c[a]=b;this.D.updateSubtitlesUserSettings(c)}WM(this,!0);this.B.start();this.o.Xc(this.D.getSubtitlesUserSettings())};
g.k.IM=function(a){a||this.B.Af()};
g.k.U=function(){this.B.Af();g.AM.prototype.U.call(this)};g.t(YM,g.JK);g.k=YM.prototype;g.k.initialize=function(){if(!this.Dc){this.Dc=!0;var a=new FM(this.D,this);g.C(this,a);a=new XM(this.D,this);g.C(this,a);a=new zM(this.D,this);g.C(this,a);this.D.L().La&&(a=new NM(this.D,this),g.C(this,a));this.D.L().tb&&(a=new EM(this.D,this),g.C(this,a));a=new DM(this.D,this);g.C(this,a);yM(this.settingsButton,this.dc.items.length)}};
g.k.vb=function(a){this.initialize();this.dc.vb(a);yM(this.settingsButton,this.dc.items.length)};
g.k.Jd=function(a){this.Ha()&&1>=this.dc.items.length&&this.hide();this.dc.Jd(a);yM(this.settingsButton,this.dc.items.length)};
g.k.Tb=function(a){this.initialize();0<this.dc.items.length&&g.JK.prototype.Tb.call(this,a)};
g.k.show=function(){g.JK.prototype.show.call(this);g.I(this.D.getRootNode(),"ytp-settings-shown")};
g.k.hide=function(){g.JK.prototype.hide.call(this);g.si(this.D.getRootNode(),"ytp-settings-shown")};g.t(ZM,g.T);ZM.prototype.onClick=function(){var a=this.D.app;a.i.ka("SIZE_CLICKED",!a.kd)};
ZM.prototype.ga=function(){g.dH(this,this.D.app.Ue&&!this.D.isFullscreen()&&3!==this.D.getPresentingPlayerType());if(this.Ha()){var a=this.D.isWidescreen();if(this.isWidescreen!==a){var b=a?g.W?{A:"div",T:["ytp-icon","ytp-icon-default-view"]}:{A:"svg",M:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"m 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z",fill:"#fff","fill-rule":"evenodd"}}]}:g.W?{A:"div",T:["ytp-icon","ytp-icon-theater-mode"]}:{A:"svg",M:{height:"100%",
version:"1.1",viewBox:"0 0 36 36",width:"100%"},H:[{A:"path",Pa:!0,M:{d:"m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z",fill:"#fff","fill-rule":"evenodd"}}]};this.D.L().C||null==this.isWidescreen?this.ha("icon",b):JL(this.transition,this.element,b);this.isWidescreen=a;b=g.sJ(this.D,"Default view","t");var c=g.sJ(this.D,"Theater mode","t");this.ha("title",a?b:c);UK(this.tooltip)}}};g.t($M,g.T);$M.prototype.onClick=function(){this.D.toggleSubtitles()};
$M.prototype.isEnabled=function(){return!!this.D.getOption("captions","track").displayName};
$M.prototype.ga=function(){var a=null!=g.QI(g.gI(this.D));g.dH(this,a&&300<=g.lI(this.D).getPlayerSize().width);a&&this.ha("pressed",this.isEnabled())};g.t(g.aN,g.T);g.k=g.aN.prototype;
g.k.Sb=function(){var a=g.lI(this.api).getPlayerSize().width,b=a>=this.C&&(!this.i||!g.S(g.oH(this.api),64));g.dH(this,b);g.J(this.element,"ytp-time-display-allow-autohide",b&&400>a);a=this.api.getProgressState();if(b){b=this.api.getPresentingPlayerType();var c=g.VG(g.P(this.api.L().experiments,"halftime_ux_killswitch")?a.current:this.api.getCurrentTime(b,!1));this.l!==c&&(this.ha("currenttime",c),this.l=c);b=g.VG(g.P(this.api.L().experiments,"halftime_ux_killswitch")?a.duration:this.api.getDuration(b,
!1));this.o!==b&&(this.ha("duration",b),this.o=b)}this.i&&(a=a.isAtLiveHead,this.B!==a||this.u!==this.isPremiere)&&(this.B=a,this.u=this.isPremiere,this.Sb(),b=this.liveBadge.element,b.disabled=a,this.liveBadge.xb(this.isPremiere?"Premiere":"Live"),a?this.g&&(this.g(),this.g=null,b.removeAttribute("title")):(b.title="Skip ahead to live broadcast.",this.g=g.fK(this.tooltip,this.liveBadge.element)))};
g.k.Ia=function(a,b){this.updateVideoData(b);this.Sb()};
g.k.updateVideoData=function(a){this.i=a.ra&&!a.rg;this.isPremiere=a.isPremiere;g.J(this.element,"ytp-live",this.i)};
g.k.onClick=function(a){a.target===this.liveBadge.element&&(this.api.seekTo(Infinity),this.api.playVideo())};
g.k.U=function(){this.g&&this.g();g.T.prototype.U.call(this)};g.t(dN,g.T);g.k=dN.prototype;g.k.xh=function(){var a=this.i.Hc();this.u!==a&&(this.u=a,cN(this,this.api.getVolume(),this.api.isMuted()))};
g.k.DA=function(a){g.dH(this,350<=a.width)};
g.k.eJ=function(a){if(!g.kk(a)){var b=g.lk(a),c=null;37===b?c=this.volume-5:39===b?c=this.volume+5:36===b?c=0:35===b&&(c=100);null!==c&&(c=g.Be(c,0,100),0===c?this.api.mute():(this.api.isMuted()&&this.api.unMute(),this.api.setVolume(c)),g.jk(a))}};
g.k.cJ=function(a){var b=a.deltaX||-a.deltaY;a.deltaMode?this.api.setVolume(this.volume+(0>b?-10:10)):this.api.setVolume(this.volume+g.Be(b/10,-10,10));g.jk(a)};
g.k.MM=function(){bN(this,this.g,!0,this.o,this.i.Hf());this.N=this.volume;this.api.isMuted()&&this.api.unMute()};
g.k.dJ=function(a){var b=this.u?78:52,c=this.u?18:12;a-=g.Ah(this.K).x;this.api.setVolume(100*g.Be((a-c/2)/(b-c),0,1))};
g.k.LM=function(){bN(this,this.g,!1,this.o,this.i.Hf());0===this.volume&&(this.api.mute(),this.api.setVolume(this.N))};
g.k.fJ=function(a){cN(this,a.volume,a.muted)};
g.k.Wx=function(){bN(this,this.g,this.l,this.o,this.i.Hf())};
g.k.U=function(){g.T.prototype.U.call(this);g.si(this.C,"ytp-volume-slider-active")};g.t(g.fN,g.T);g.fN.prototype.Ia=function(){var a=this.api.getVideoData(1).Yb,b=this.api.L();this.visible=!!this.api.getVideoData().videoId&&!(a&&b.ea);g.dH(this,this.visible);g.HI(this.api,this.element,this.visible&&this.J);this.visible&&(a=this.api.getVideoUrl(!0,!1,!1,!0),this.ha("url",a))};
g.fN.prototype.onClick=function(a){var b=this.api.getVideoUrl(!g.WG(a),!1,!0,!0);g.rt(this.api.L())&&(b=g.Dd(b,g.OD({},"emb_logo")));g.pJ(b,this.api,a);g.GI(this.api,this.element)};
g.fN.prototype.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.api,this.element,this.visible&&a)};g.t(hN,g.ln);g.k=hN.prototype;g.k.Wc=function(){this.ac.Sb();this.ag.Sb()};
g.k.Qf=function(){this.Gu();this.Lb.i?this.Wc():g.uN(this.ac.tooltip)};
g.k.jn=function(){this.Wc();this.Cc.start()};
g.k.Gu=function(){var a=!this.D.L().g&&300>g.vM(this.ac)&&g.oH(this.D).sb()&&!!window.requestAnimationFrame,b=!a;this.Lb.i||(a=b=!1);b?this.C||(this.C=this.I(this.D,"progresssync",this.Wc)):this.C&&(this.gb(this.C),this.C=null);a?this.Cc.isActive()||this.Cc.start():this.Cc.stop()};
g.k.Qa=function(){var a=this.i.Hc(),b=g.lI(this.D).getPlayerSize(),c=jN(this),d=Math.max(b.width-2*c,100);if(this.ca!==b.width||this.X!==a){this.ca=b.width;this.X=a;var e=kN(this);this.l.element.style.width=e+"px";this.l.element.style.left=c+"px";this.ac.setPosition(c,e,a);this.i.rb().P=e}c=this.g;e=Math.min(413*(a?1.5:1),Math.round(.82*(b.height-lN(this))));c.maxWidth=Math.min(570*(a?1.5:1),d);c.xq=e;c.Cl();this.Gu();!this.D.L().aa("html5_player_bottom_linear_gradient")&&g.P(this.D.L().experiments,
"html5_player_dynamic_bottom_gradient")&&g.sL(this.V,b.height)};
g.k.Ia=function(){var a=this.D.getVideoData();this.K.style.background=a.Yb?a.xf:"";g.dH(this.N,a.Sv)};
g.k.sa=function(){return this.l.element};var jR={},mN=(jR.CHANNEL_NAME="ytp-title-channel-name",jR.FULLERSCREEN_LINK="ytp-title-fullerscreen-link",jR.LINK="ytp-title-link",jR.SESSIONLINK="yt-uix-sessionlink",jR.SUBTEXT="ytp-title-subtext",jR.TEXT="ytp-title-text",jR.TITLE="ytp-title",jR);g.t(nN,g.T);nN.prototype.onClick=function(a){g.GI(this.api,this.element);var b=this.api.getVideoUrl(!g.WG(a),!1,!0);g.rt(this.api.L())&&(b=g.Dd(b,g.OD({},"emb_title")));g.pJ(b,this.api,a)};
nN.prototype.ga=function(){var a=this.api.getVideoData(),b=this.api.L();this.ha("title",a.title);oN(this);if(2===this.api.getPresentingPlayerType()){var c=this.api.getVideoData();c.videoId&&c.isListed&&c.author&&c.Tg&&c.wd?(this.ha("channelLink",c.Tg),this.ha("channelName",c.author)):oN(this)}c=b.externalFullscreen||!this.api.isFullscreen()&&b.Ad;g.J(this.link,mN.FULLERSCREEN_LINK,c);b.J||!a.videoId||c?this.g&&(this.ha("url",null),this.gb(this.g),this.g=null):(this.ha("url",this.api.getVideoUrl(!0)),
this.g||(this.g=this.I(this.link,"click",this.onClick)))};g.t(g.qN,g.T);g.k=g.qN.prototype;g.k.yB=function(a,b){if(a<=this.l&&this.l<=b){var c=this.l;this.l=NaN;rN(this,c)}};
g.k.ZG=function(){hw(this.g,this.l,160*this.scale)};
g.k.yg=function(){switch(this.type){case 2:var a=this.i;a.removeEventListener("mouseout",this.K);a.addEventListener("mouseover",this.o);a.removeEventListener("blur",this.K);a.addEventListener("focus",this.o);vN(this);break;case 3:vN(this);break;case 1:this.g&&(this.g.unsubscribe("l",this.yB,this),this.g=null),this.api.removeEventListener("videoready",this.N),this.R.stop()}this.type=null;this.C&&this.B.hide()};
g.k.gg=function(a){for(var b=0;b<arguments.length;++b);if(this.i)for(b=0;b<arguments.length;b++)g.kf(arguments[b],this.i)&&this.yg()};
g.k.U=function(){null!=this.type&&this.yg();this.g&&this.g.dispose();g.T.prototype.U.call(this)};g.t(g.zN,g.T);g.k=g.zN.prototype;g.k.yq=function(){var a=this.D.getPlayerSize(),b=this.D.L(),c=this.D.getVideoData(),d=g.rt(b)&&g.nI(this.D)&&g.S(g.oH(this.D),128);this.visible=b.Ki&&240<=a.width&&!c.isAd()&&c.Ki&&!d;g.dH(this,this.visible);this.icon&&CN(this,this.icon);g.HI(this.D,this.element,this.visible&&this.J)};
g.k.gC=function(){this.g=!0;this.i=!1;this.ga(1);this.D.L().g&&TK(this.tooltip,this.element);this.D.L().l&&this.D.ka("WATCH_LATER_VIDEO_ADDED")};
g.k.EA=function(){return this.D.getVideoData().videoId};
g.k.onClick=function(){var a=this;g.GI(this.D,this.element);var b=this.D.L(),c=this.EA();b.yc?yN(this,c):this.D.app.Da?this.D.requestStorageAccess(function(){g.Im("embedsItpWatchLaterResult",{accepted:!0});Ik();AN(a,c)},function(){g.Im("embedsItpWatchLaterResult",{accepted:!1});
BN(a,"Sorry, saving failed because your cookies are blocked by the browser.")}):AN(this,c)};
g.k.lN=function(a,b){this.i=!1;var c="An error occurred. Please try again later.";b&&(c=b.errors&&b.errors.length?b.errors[0]:b.error_message);BN(this,c)};
g.k.hC=function(){this.i=this.g=!1;this.ga(2);this.D.L().l&&this.D.ka("WATCH_LATER_VIDEO_REMOVED")};
g.k.gJ=function(){this.i=this.g=!1;this.ga(2)};
g.k.ga=function(a,b){var c=this.D.L();CN(this,a);if(b)this.update({title:b,image:null});else if(c.ma){var d={USER_NAME:c.ma};this.update({title:this.g?g.UG("Added as $USER_NAME",d):g.UG("Watch later as $USER_NAME",d),image:bu(c)})}else this.update({title:"Watch later",image:null});UK(this.tooltip)};
g.k.eb=function(a){g.T.prototype.eb.call(this,a);g.HI(this.D,this.element,this.visible&&a)};g.t(DN,g.MJ);g.k=DN.prototype;g.k.rb=function(){return this.tooltip};
g.k.Yy=function(){return this.Kd};
g.k.Zi=function(a,b){b?this.jg=a:this.jg=null;this.Qe()};
g.k.gm=function(a,b){if(b)this.yi.push(a);else for(var c=this.yi.length;0<=c;c--)if(this.yi[c]===a){this.yi.splice(c,1);break}cJ(this.Lb,64,0<this.yi.length)};
g.k.Ji=function(){g.rI(this.api)&&g.sI(this.api);uI(this.api);return!!this.jg||EN(this)||g.MJ.prototype.Ji.call(this)};
g.k.Qe=function(){var a=!this.Ji(),b=a&&g.rI(this.api)&&!g.S(g.oH(this.api),2),c=this.Fm&&g.nI(this.api)&&g.S(g.oH(this.api),128);a||c?(this.iw.show(),this.jw.show()):(this.iw.hide(),this.jw.hide(),this.tooltip.gg(this.Oe.element));b?this.hg.Tb():this.hg.Na();this.Kd&&iN(this.Kd,!a);g.MJ.prototype.Qe.call(this)};
g.k.ol=function(a,b,c,d,e){a.style.left="";a.style.top="";a.style.bottom="";var f=g.Gh(a),h=d||this.Kd&&g.kf(this.Kd.sa(),b),l=d=null;null!=c&&h||(d=g.Gh(b),l=g.Ch(b,this.api.getRootNode()),null==c&&(c=l.x+d.width/2));c-=f.width/2;if(h){var m=this.Kd;b=jN(m);d=kN(m);l=g.lI(this.api).getPlayerSize().height;c=g.Be(c,b,b+d-f.width);m=l-lN(m)-f.height}else g.kf(this.Oe.element,b)?(m=g.lI(this.api).getPlayerSize().width,c=g.Be(c,12,m-f.width-12),m=this.Hc()?this.Js:this.Is,"gvn"===this.api.L().playerStyle&&
(m+=20),this.Fm&&(m-=this.Hc()?26:18)):(b=g.lI(this.api).getPlayerSize(),c=g.Be(c,12,b.width-f.width-12),l.y>(b.height-d.height)/2?m=l.y-f.height-12:m=l.y+d.height+12);a.style.top=m+(e||0)+"px";a.style.left=c+"px"};
g.k.Qf=function(a){a&&(this.tooltip.gg(this.Oe.element),this.Kd&&this.tooltip.gg(this.Kd.sa()));g.MJ.prototype.Qf.call(this,a)};
g.k.Fk=function(a,b){var c=g.lI(this.api).getPlayerSize();c=new g.jh(0,0,c.width,c.height);if(a||this.Lb.i&&!this.Ji()){if(this.api.L().Ih||b){var d=this.Hc()?this.Js:this.Is;c.top+=d;c.height-=d}this.Kd&&(c.height-=lN(this.Kd))}return c};
g.k.xh=function(a){var b=this.api.getRootNode();a?b.parentElement?(b.setAttribute("aria-label","YouTube Video Player in Fullscreen"),this.api.L().externalFullscreen||(b.parentElement.insertBefore(this.jp.element,b),b.parentElement.insertBefore(this.ip.element,b.nextSibling))):g.L(Error("Player not in DOM.")):(b.setAttribute("aria-label","YouTube Video Player"),this.jp.detach(),this.ip.detach());this.Qa();this.Eh()};
g.k.Hc=function(){return this.api.isFullscreen()||!1};
g.k.showControls=function(a){this.Po=!a;this.Qe()};
g.k.Qa=function(){var a=this.Hc();this.tooltip.scale=a?1.5:1;this.contextMenu&&g.J(this.contextMenu.element,"ytp-big-mode",a);this.Qe();if(this.he()&&this.oe)this.xe&&dL(this.oe,this.xe),this.shareButton&&dL(this.oe,this.shareButton),this.Vg&&dL(this.oe,this.Vg);else{if(this.oe){a=this.oe;for(var b=g.p(a.actionButtons),c=b.next();!c.done;c=b.next())c.value.detach();a.actionButtons=[]}this.xe&&!g.kf(this.Td.element,this.xe.element)&&this.xe.Y(this.Td.element);this.shareButton&&!g.kf(this.Td.element,
this.shareButton.element)&&this.shareButton.Y(this.Td.element);this.Vg&&!g.kf(this.Td.element,this.Vg.element)&&this.Vg.Y(this.Td.element)}this.Eh();g.MJ.prototype.Qa.call(this)};
g.k.qt=function(){if(EN(this)&&!g.nI(this.api))return!1;var a=this.api.getVideoData();return!g.rt(this.api.L())||2===this.api.getPresentingPlayerType()||!this.qy||((a=this.qy||a.Xg)?(a=a.embedPreview)?(a=a.thumbnailPreviewRenderer,a=a.videoDetails&&a.videoDetails.embeddedPlayerOverlayVideoDetailsRenderer||null):a=null:a=null,a&&a.collapsedRenderer&&a.expandedRenderer)?g.MJ.prototype.qt.call(this):!1};
g.k.Eh=function(){g.MJ.prototype.Eh.call(this);g.HI(this.api,this.title.element,!!this.og);this.nl&&this.nl.eb(!!this.og);this.channelAvatar.eb(!!this.og);this.overflowButton&&this.overflowButton.eb(this.he()&&!!this.og);this.shareButton&&this.shareButton.eb(!this.he()&&!!this.og);this.xe&&this.xe.eb(!this.he()&&!!this.og);this.Vg&&this.Vg.eb(!this.he()&&!!this.og);if(!this.og){this.tooltip.gg(this.Oe.element);for(var a=0;a<this.On.length;a++){var b=this.On[a];b.Id()&&b.Na()}}};
g.k.Lc=function(a){this.Kd&&iN(this.Kd,this.Ji());this.Qe();g.MJ.prototype.Lc.call(this,a)};
g.k.JL=function(){vI(this.api)&&cJ(this.Lb,128,!1)};
g.k.handleGlobalKeyDown=function(a,b,c,d,e,f,h){return this.oh?this.oh.handleGlobalKeyDown(a,b,c,d,e,f,h):!1};
g.k.handleGlobalKeyUp=function(a,b,c,d,e,f,h){return this.oh?this.oh.handleGlobalKeyUp(a,b,c,d,e,f,h):!1};
g.k.Zg=function(){return this.contextMenu.Ha()?(this.contextMenu.Na(),!0):this.yi.length?(this.yi[this.yi.length-1].Na(),!0):this.jg?(this.jg.Na(),!0):g.MJ.prototype.Zg.call(this)};
g.k.Nv=function(a,b){this.Ov=b;this.gm(a,b);this.ND()};
g.k.ND=function(){var a=this.Ov||this.contextMenu.Id();this.us!==a&&(this.us=a,this.api.ka("onAutonavPauseRequest",this.us))};
g.k.NF=function(){FN(this,this.api.getRootNode(),!0).focus()};
g.k.OF=function(){FN(this,this.api.getRootNode(),!1).focus()};
g.k.Ck=function(){return this.Kd&&this.Kd.g};
g.k.Ch=function(){this.Lb.Ch()};
g.k.Gp=function(){this.nb.hide()};
g.k.Yj=function(a){this.nb.Yj(!g.uB(a))};
g.k.zn=function(a,b,c,d){this.Us.zn(a,b,c,d)};
g.k.gD=function(){var a=this.api.getVideoData();a&&a.tooltipRenderer&&(this.qn||(this.qn=new iL(a.tooltipRenderer,this,this.api),g.C(this,this.qn),g.BI(this.api,this.qn.element,8)),this.qn.l(a.tooltipRenderer))};g.t(g.GN,g.MI);g.GN.prototype.Wf=function(){return!1};
g.GN.prototype.create=function(){var a=this.player.L();g.Vt(a)&&a.g?this.chrome=new g.MJ(this.player):this.chrome=new DN(this.player);g.C(this,this.chrome);this.chrome.init();g.yI(this.player,"ux")};g.t(IN,g.A);IN.prototype.J=function(){};
IN.prototype.seekTo=function(a,b,c){a=void 0===a?0:a;c=void 0===c?null:c;if(void 0===b?0:b)HN(this,a);else{b=this.api.wb();var d=b===this.l?this.o:null;LN(this,!1);this.C=a;null!=c&&this.u.start(c);b&&(this.o=d||b.getPlayerState(),gG(b),this.l=b)}};
IN.prototype.U=function(){LN(this,!1);g.PN(this);g.A.prototype.U.call(this)};g.t(RN,g.A);g.k=RN.prototype;g.k.DI=function(a){if(this.i===this.api.wb()){var b=this.B.get(a);b||g.YN(this,"e.unexpectedCueRangeTriggered");UN(this,b.target,b.nf,a)}else{b=this.g.find(function(e){return e.yf.pc===a});
var c=b.yf,d=c.target;c=c.nf;d?UN(this,d,c,a):Lja(this,b.Qb,c,a)}};
g.k.hM=function(){var a=this.F;WN(this);a&&(VN(this,a)||g.YN(this,"e.unexpectedPresentingPlayer"),this.api.wb().addCueRange(a.yf.pc))};
g.k.seekTo=function(a,b,c){a=void 0===a?0:a;c=void 0===c?null:c;if(void 0===b?0:b)QN(this,a);else{b=this.api.wb();var d=b===this.o?this.C:null;aO(this,!1);this.N=a;null!=c&&this.K.start(c);b&&(this.C=d||b.getPlayerState(),gG(b),this.o=b)}};
g.k.hf=function(a){g.zB(a,128)&&fO(this)};
g.k.U=function(){aO(this,!1);g.hO(this);g.A.prototype.U.call(this)};var Mja="MWEB TVHTML5 TVHTML5_AUDIO TVHTML5_CAST TVHTML5_KIDS TVHTML5_SIMPLY TVHTML5_SIMPLY_EMBEDDED_PLAYER TVHTML5_UNPLUGGED TVHTML5_VR TV_UNPLUGGED_CAST WEB WEB_CREATOR WEB_EMBEDDED_PLAYER WEB_EXPERIMENTS WEB_GAMING WEB_HEROES WEB_KIDS WEB_LIVE_STREAMING WEB_MUSIC WEB_MUSIC_ANALYTICS WEB_MUSIC_EMBEDDED_PLAYER WEB_REMIX WEB_UNPLUGGED WEB_UNPLUGGED_ONBOARDING WEB_UNPLUGGED_OPS WEB_UNPLUGGED_PUBLIC".split(" ");kO.prototype.getLocalMediaInfoById=function(a){return g.hh(this,function c(){return g.Aa(c,function(d){return d["return"](ofa(a))})})};
kO.prototype.getAllLocalMediaInfo=function(){return g.hh(this,function b(){return g.Aa(b,function(c){return c["return"](pfa())})})};
kO.prototype.g=function(a){if(a.ll&&2===a.status)Uv(a.videoId,2);else if(4===a.status){var b=a.videoId;Uv(b,4);Zv(b,!1)}a.Lp&&kfa(a.videoId,a.videoDuration,g.O(this.api.L().experiments,"hoffle_cache_size_secs"));g.P(this.api.L().experiments,"hoffle_api")&&this.api.ka("localmediachange",{videoId:a.videoId,status:a.status,isBackground:a.isBackground});jO(this)};g.Qka=g.Za(function(){var a=window.AudioContext||window.webkitAudioContext;try{return new a}catch(b){return b.name}});oO.prototype.click=function(a){this.elements.has(a);this.g.has(a);var b=g.Hn();b&&a.visualElement&&g.co(b,a.visualElement)};g.t(rO,g.T);
rO.prototype.setValue=function(a,b){for(var c=0;c+2<this.o.length&&this.o[c+1]<b;)c++;var d=Math.min(1,(b-this.o[c])/(this.o[c+1]-this.o[c]));if(this.i)this.i.fillStyle=this.u[c],this.i.fillRect(a*this.g,0,this.g,this.heightPx),this.i.fillStyle=this.u[c+1],this.i.fillRect(a*this.g,this.heightPx*(1-d),this.g,this.heightPx);else{var e=this.element.children[a],f=window.devicePixelRatio||1;d=Math.min(this.heightPx,Math.round(this.heightPx*d*f)/f)||0;e.style.height=d+"px";e.style.backgroundColor=this.u[c+
1];e.style.borderTop="solid "+(this.heightPx-d)+"px "+this.u[c]}};g.t(tO,g.T);g.k=tO.prototype;g.k.show=function(){g.T.prototype.show.call(this);this.ga()};
g.k.hide=function(){g.T.prototype.hide.call(this);this.delay.stop()};
g.k.stop=function(){this.delay.stop()};
g.k.start=function(){this.delay.isActive()||this.ga()};
g.k.ga=function(){var a=(0,g.M)(),b=this.u.getStatsForNerds();sO(this.g,b.bandwidth_samples);sO(this.o,b.network_activity_samples);sO(this.l,b.live_latency_samples);sO(this.i,b.buffer_health_samples);this.update(b);a=25<(0,g.M)()-a?5E3:500;this.delay.start(a)};g.t(AO,g.A);AO.create=function(a,b,c){var d=this;try{var e="string"===typeof a?a:"player"+g.Sa(a),f=kR[e];if(f){try{f.dispose()}catch(l){g.L(l)}kR[e]=null}var h=new AO(a,b,c);g.Md(h,function(){kR[e]=null;d.Ve&&d.Ve()});
return kR[e]=h}catch(l){throw g.L(l),l.stack;}};
g.k=AO.prototype;g.k.getVisibilityState=function(a,b,c,d,e,f){return this.J.getVisibilityState(a,b,c,d,e,f)};
g.k.isVideoInfoVisible=function(){return!(!this.X||!this.X.Ha())};
g.k.setIsExternalPlaylist=function(a){this.da=Q(!1,a)};
g.k.iK=function(){CO(this)||g.YO(this,5)};
g.k.TL=function(a){CO(this)||(tP(this),g.uB(a.getPlayerState())&&this.playVideo())};
g.k.canPlayType=function(a){return Zr(a)};
g.k.L=function(){return this.g};
g.k.getVideoData=function(){return this.B.getVideoData()};
g.k.getVideoLoadedFraction=function(a){a=g.U(this,a);return a?qx(a.getVideoData())?1:(a=a.i)?Ix(a):0:0};
g.k.md=function(){var a={},b=g.QI(this.o);b&&g.Ua(a,b.mH());a.fs=this.i.isFullscreen();a.volume=Math.round(this.i.getVolume());a.muted=this.i.isMuted()?1:0;a.mos=a.muted;if(g.P(this.g.experiments,"html5_enable_embedded_player_visibility_signals")&&this.g.i&&(this.Yd&&(b=this.Yd,b=null==b.i?null:Math.round(100*b.i)/100,null!=b&&(a.inview=b)),b=this.F.getPlayerSize(),0<b.height&&0<b.width)){b=[Math.round(b.height),Math.round(b.width)];var c=g.Rt();1<c&&b.push(c);a.size=b.join(":")}!yO(this,"web_player_clips_vss_killswitch")&&
this.B==this.l&&this.N&&(a.clipid=this.N.postId);return a};
g.k.setLoopRange=function(a){var b=!1;!!this.N!==!!a?b=!0:this.N&&a&&(b=this.N.startTimeMs!==a.startTimeMs||this.N.endTimeMs!==a.endTimeMs||this.N.postId!==a.postId);b&&(qA(this.l.V,"applooprange"),a?(b=new g.eu(a.startTimeMs,a.endTimeMs,{id:"looprange",namespace:"applooprange"}),this.l.addCueRange(b)):QO(this).lk=void 0,this.N=a,this.i.ka("onLoopRangeChange",a),this.B==this.l&&(this.N&&!bP(this,this.l.getCurrentTime())&&this.Cv(),g.aE(this.B.B)))};
g.k.getLoopRange=function(){return this.N};
g.k.Cv=function(){this.l.seekTo(.001*this.N.startTimeMs)};
g.k.setPlaybackRate=function(a,b){if(!isNaN(a)){var c=BO(this,a);this.l.getPlaybackRate()!=c&&(this.l.setPlaybackRate(c),b&&!this.g.i&&g.ho("yt-player-playback-rate",c),this.i.ka("onPlaybackRateChange",c))}};
g.k.getCurrentTime=function(a,b){b=void 0===b?!0:b;if(3==this.getPresentingPlayerType())return g.mI(this.o).getCurrentTime();var c=g.U(this,a);return c?b?(c=OO(this,c),dP(this,c.getCurrentTime(),c)):c.getCurrentTime():0};
g.k.getDuration=function(a,b){var c=g.U(this,a);return c?void 0===b||b?(c=g.NO(this,c),dP(this,c.getDuration(),c)):c.getDuration():0};
g.k.Ib=function(a){a=g.U(this,a);if(!a)return 0;a=g.NO(this,a);return dP(this,a.Ib(),a)};
g.k.getDebugText=function(a){var b=this.l.Ta(a);if(this.B&&this.B!=this.l&&(b=FP(b,this.B.Ta(a),"ad_"),a)){var c=b;var d={};var e=g.Oe(document,"movie_player");e&&(d.bounds=e.getBoundingClientRect(),d["class"]=e.className);e={};var f=g.Re("video-ads");f?(BP(f,e),e.html=f.outerHTML):e.missing=1;f={};var h=g.Re("videoAdUiSkipContainer"),l=g.Re("ytp-ad-skip-button-container"),m=h||l;m?(BP(m,f),f.ima=h?1:0,f.bulleit=l?1:0):f.missing=1;h={};h.player=d;h.videoAds=e;h.skipButton=f;d=JSON.stringify(h);c.ad_skipBtnDbgInfo=
d}a&&this.u&&(b["0sz"]=0==Je(this.u.Zk()),b.op=this.u.sm("opacity"),c=this.u.Zh().y+this.u.Zk().height,b.yof=0>=c,b.dis=this.u.sm("display"));(a=a?(0,g.sD)():null)&&(b.gpu=a);b.cgr=!0;b.debug_playbackQuality=this.i.getPlaybackQuality(1);b.debug_date=(new Date).toString();delete b.uga;delete b.q;(a=tI(this.o))&&(b=FP(b,a.Ta(),"fresca_"));return JSON.stringify(b,null,2)};
g.k.getFeedbackProductData=function(){var a={player_debug_info:this.getDebugText(!0),player_experiment_ids:this.L().experiments.experimentIds.join(", ")},b=g.U(this).Ta(!0).debug_error;b&&(a.player_error_code=b.errorCode,a.player_error_details=JSON.stringify(b.errorDetail));return a};
g.k.getPresentingPlayerType=function(){return 1==this.ca?1:CO(this)?3:g.U(this).getPlayerType()};
g.k.getAppState=function(){return this.ca};
g.k.rH=function(a){switch(a.type){case "loadedmetadata":wv("fvb",this.K.timerName)||this.K.tick("fvb");zv("fvb");this.tb.start();break;case "loadstart":wv("gv",this.K.timerName)||this.K.tick("gv");zv("gv");break;case "progress":case "timeupdate":!wv("l2s",this.K.timerName)&&2<=ms(a.target.Od())&&this.K.tick("l2s");break;case "playing":g.Xt&&this.tb.start();if(g.It(this.g))a=!1;else{var b=g.oI(this.o);a="none"==this.u.sm("display")||0==Je(this.u.Zk());var c=iH(this.F),d=this.B.getVideoData(),e=g.Vt(this.g)||
g.Ct(this.g);d=Fw(d);b=!c||b||e||d||this.g.Xa;a=a&&!b}a&&(this.B.Ya("hidden","1",!0),this.getVideoData().Dg||(yO(this,"html5_new_elem_on_hidden")?(this.getVideoData().Dg=1,this.GB(null),this.B.playVideo()):yP(this,"hidden",!0)))}};
g.k.gL=function(a,b){this.i.ka("onLoadProgress",b)};
g.k.RM=function(){this.i.O("playbackstalledatstart")};
g.k.sH=function(a,b){var c=OO(this,a);b=dP(this,c.getCurrentTime(),c);this.i.ka("onVideoProgress",b)};
g.k.MK=function(){this.i.ka("onDompaused")};
g.k.eM=function(){this.i.O("progresssync")};
g.k.pH=function(a){if(1==this.getPresentingPlayerType()){g.zB(a,1)&&!g.S(a.state,64)&&QO(this).ra&&this.l.isAtLiveHead()&&1<this.i.getPlaybackRate()&&this.setPlaybackRate(1,!0);g.zB(a,2)&&JO(this);if(g.S(a.state,128)){var b=a.state;lP(this,5);b=b.stateData;JSON.stringify({errorData:b,debugInfo:this.getDebugText(!0)});this.i.ka("onError",cR[b.errorCode]||5);this.i.ka("onDetailedError",{errorCode:b.errorCode,errorDetail:b.errorDetail,message:b.errorMessage,rT:b.Zs});6048E5<(0,g.M)()-this.g.Aa&&this.i.ka("onReloadRequired")}b=
{};if(a.state.sb()&&!g.vB(a.state)&&!wv("pbresume","ad_to_video")&&wv("_start","ad_to_video")){var c=this.getVideoData();b.clientPlaybackNonce=c.clientPlaybackNonce;c.videoId&&(b.videoId=c.videoId);vv(b,"ad_to_video");g.rv("pbresume",void 0,"ad_to_video")}this.i.O("applicationplayerstatechange",a)}};
g.k.fC=function(a){3!=this.getPresentingPlayerType()&&this.i.O("presentingplayerstatechange",a)};
g.k.WL=function(a){KO(this,wB(a.state));g.S(a.state,1024)&&this.i.isMutedByMutedAutoplay()&&(YH(this,{muted:!1,volume:this.R.volume},!1),ZO(this,!1))};
g.k.VL=function(a){a.state.sb()&&!g.vB(a.state)&&(UI(this.o),g.nn(this.Wd))};
g.k.gK=function(a,b,c){"newdata"==a&&gP(this);(a=c.lk)&&null!=a.startTimeMs&&null!=a.endTimeMs&&this.setLoopRange({startTimeMs:parseInt(a.startTimeMs,10),endTimeMs:parseInt(a.endTimeMs,10),postId:a.postId})};
g.k.kK=function(){this.i.ka("onPlaybackAudioChange",this.i.getAudioTrack().Ab.name)};
g.k.hN=function(a){var b=this.B.getVideoData();a==b&&this.i.ka("onPlaybackQualityChange",a.ya.xa().quality)};
g.k.ru=function(a,b,c){b==this.l&&(this.g.Gb=c.oauthToken);if(this.g.l&&this.V){if(c.Km&&px(c)){var d=c.Km;c.Km=null}else d=null;d&&this.V.g(d)}if("newdata"==a)YI(this.o,2),this.i.O("videoplayerreset",b);else{if(!this.u)return;"dataloaded"==a&&(this.B==this.l?(c.Sa.Ld(c.oC),this.l.getPlayerState().isError()||(d=CO(this),QO(this).Nb(),d&&g.YO(this,6),PO(this),d||(d=ZI(this.o))&&!d.created&&RI(this.o)&&d.create())):PO(this));1==b.getPlayerType()&&(this.g.R&&AP(this),this.getVideoData().ra&&!this.g.Zo&&
this.l.Jc("html5.unsupportedlive","DEVICE_FALLBACK",void 0,void 0),c.Nb()&&(c.pn||c.Sq||c.Tq||c.cd.focEnabled||c.cd.rmktEnabled||this.getVideoData().tx)&&(d=this.getVideoData(),jP(this,"part2viewed",1,0x8000000000000),jP(this,"engagedview",Math.max(1,1E3*d.wf),0x8000000000000),d.ra||(d=1E3*d.lengthSeconds,jP(this,"videoplaytime25",.25*d,d),jP(this,"videoplaytime50",.5*d,d),jP(this,"videoplaytime75",.75*d,d),jP(this,"videoplaytime100",d,0x8000000000000),jP(this,"conversionview",d,0x8000000000000))));
this.i.O("videodatachange",a,c,b.getPlayerType())}this.i.ka("onVideoDataChange",{type:a,playertype:b.getPlayerType()});b==this.l&&this.N&&!bP(this,this.l.getCurrentTime())&&this.Cv();a=c.clientScreenNonce;c=c.ir;a&&c?(b=this.ua,a!==g.Hn()&&(Kn(a,c),qO(b))):qO(this.ua)};
g.k.Lo=function(){TO(this,null);this.i.ka("onPlaylistUpdate")};
g.k.hB=function(a){var b=a.getId(),c=QO(this);if("part2viewed"==b)c.uC&&g.mo(c.uC),c.Sq&&CP(this,c.Sq),c.Tq&&DP(this,c.Tq);else if("conversionview"==b){var d=this.l.B;d.g&&VD(d.g)}else"engagedview"==b&&g.mo(c.pn);if(c.vC){d=c.vC;var e={label:a.getId()};if(g.P(this.g.experiments,"send_pyv_ad_mt_and_abandon_pings")){var f=1E3*this.getCurrentTime();e.ad_mt=Math.round(Math.max(0,f)).toString()}d=g.al(d,e);g.mo(d)}switch(b){case "videoplaytime25":c.lv&&CP(this,c.lv);c.ov&&DP(this,c.ov);c.xC&&g.mo(c.xC);
break;case "videoplaytime50":c.qv&&CP(this,c.qv);c.tv&&DP(this,c.tv);c.yC&&g.mo(c.yC);break;case "videoplaytime75":c.uv&&CP(this,c.uv);c.vv&&DP(this,c.vv);c.zC&&g.mo(c.zC);break;case "videoplaytime100":c.jv&&CP(this,c.jv),c.kv&&DP(this,c.kv),c.wC&&g.mo(c.wC)}(b=this.getVideoData().tx)&&kP(b,a.getId())&&kP(b,a.getId()+"gaia");this.l.removeCueRange(a)};
g.k.isAtLiveHead=function(a,b){b=void 0===b?!1:b;var c=g.U(this,a);if(!c)return!1;var d=g.NO(this,c);c=OO(this,c);return d!=c?d.isAtLiveHead(dP(this,c.getCurrentTime(),c),!0):d.isAtLiveHead(void 0,b)};
g.k.seekTo=function(a,b,c,d){b=0!=b;if(d=g.U(this,d))2==this.ca&&VO(this),this.Vb(d)?this.P?this.P.seekTo(a,b,c):this.ma.seekTo(a,b,c):d.seekTo(a,{AD:!b,BD:c})};
g.k.seekBy=function(a,b,c,d){this.seekTo(this.getCurrentTime()+a,b,c,d)};
g.k.FM=function(){this.i.ka("SEEK_COMPLETE")};
g.k.GM=function(a,b){var c=a.getVideoData();if(1==this.ca||2==this.ca)c.startSeconds=b;2==this.ca?VO(this):this.i.ka("SEEK_TO",b)};
g.k.ZJ=function(){this.i.O("airplayactivechange")};
g.k.aK=function(){this.i.O("airplayavailabilitychange")};
g.k.qK=function(){this.i.O("beginseeking")};
g.k.OK=function(){this.i.O("endseeking")};
g.k.getStoryboardFormat=function(a){return(a=g.U(this,a))?g.NO(this,a).getVideoData().getStoryboardFormat():null};
g.k.Ie=function(a){return(a=g.U(this,a))?g.NO(this,a).getVideoData().Ie():null};
g.k.Vb=function(a){if(a=a||this.B){a=a.getVideoData();if(this.P)a:{var b=this.P;if(a===b.g.getVideoData()&&b.i.length)a=!0;else{b=g.p(b.i);for(var c=b.next();!c.done;c=b.next())if(a.Bb===c.value.Bb){a=!0;break a}a=!1}}else a:if(b=this.ma,a===b.i.getVideoData()&&b.g.length)a=!0;else{b=g.p(b.g);for(c=b.next();!c.done;c=b.next())if(a.Bb===c.value.Bb){a=!0;break a}a=!1}if(a)return!0}return!1};
g.k.enqueueVideoByPlayerVars=function(a,b,c,d){c=void 0===c?Infinity:c;d=void 0===d?"":d;this.Vb();a=new g.yw(this.g,a);d&&(a.Bb=d);if(!g.P(this.g.experiments,"html5_report_dai_ad_playback_killswitch")&&2==b&&this.l&&(d=this.l.B,d.qoe)){d=d.qoe;var e=a.clientPlaybackNonce,f=a.tn||"",h=a.breakType||0;g.jD(d,g.dD(d.provider),"ad_playback",[e,f,h])}c=void 0===c?Infinity:c;b=b||this.B.getPlayerType();var l;g.P(this.g.experiments,"html5_gapless_preloading")&&(l=$O(this,b,a,!0));l||(l=zO(this,b),l.Vf(a,
(0,g.x)(this.md,this)));TN(this,l,c)};
g.k.clearQueue=function(){this.Ga.clearQueue()};
g.k.loadVideoByPlayerVars=function(a,b,c,d){var e=new g.yw(this.g,a);c||(a&&wx(a)?(Qt(this.g)&&!this.da&&(a.fetch=0),TO(this,a)):this.C&&TO(this,null),a&&this.setIsExternalPlaylist(a.external_list),Qt(this.g)&&!this.da&&UO(this));return eO(this,e,b,d)};
g.k.preloadVideoByPlayerVars=function(a,b,c,d,e){b=void 0===b?1:b;c=void 0===c?NaN:c;e=void 0===e?"":e;d=lt(a);d=b+"_"+d+"_"+e;var f;if(!(f=this.Xa.get(d))&&(f=this.B&&this.B.ca.started)){f=this.B.getPlayerType();var h=this.B.getVideoData().videoId,l=this.B.getVideoData().Bb;f=d==f+"_"+h+"_"+l}if(!f){a=new g.yw(this.g,a);e&&(a.Bb=e);e=b+"_"+a.videoId+"_"+a.Bb;a.Sj=!0;if(d=this.B)d=this.B.getPlayerType(),f=this.B.getVideoData().videoId,h=this.B.getVideoData().Bb,d=e==d+"_"+f+"_"+h;d=d?this.B:zO(this,
b);d.Vf(a,(0,g.x)(this.md,this));!g.P(this.g.experiments,"unplugged_tvhtml5_video_preload_no_dryrun")&&1==b&&Tt(this.g)||DF(d,!0);this.Xa.set(e,d,c||3600);c="prefetch_"+a.videoId;g.pv("prefetch",["pfp"],c);vv({playerInfo:{playbackType:vka[b]},videoId:a.videoId},c)}};
g.k.setMinimized=function(a){this.J.setMinimized(a);a=this.o;a=a.D.L().showMiniplayerUiWhenMinimized?a.Xb.get("miniplayer"):void 0;a&&(this.J.g?a.load():a.unload());this.i.O("minimized")};
g.k.setInline=function(a){this.J.setInline(a)};
g.k.setImmersivePreview=function(a){this.J.setImmersivePreview(a)};
g.k.CM=function(){"picture-in-picture"==this.u.sa().webkitPresentationMode?LO(this,!0):LO(this,!1)};
g.k.togglePictureInPicture=function(){var a=g.U(this);a&&a.togglePictureInPicture()};
g.k.cueVideoByPlayerVars=function(a,b){if(a&&wx(a)){this.Ca=!0;TO(this,a);var c=this.C.xa();if(c&&c.isValid())nP(this,c,b);else this.C.onReady((0,g.x)(this.Iq,this))}else b||(b=this.getPresentingPlayerType()),1==b&&this.Lo(),nP(this,new g.yw(this.g,a),b)};
g.k.cuePlaylist=function(a,b,c,d){this.Ca=!0;TO(this,PG(a,b,c,d));this.C.onReady((0,g.x)(this.Iq,this))};
g.k.loadPlaylist=function(a,b,c,d){this.Ca=!1;TO(this,PG(a,b,c,d));this.C.onReady((0,g.x)(this.Iq,this))};
g.k.Iq=function(){var a=this.C.xa();if(a){var b=this.getVideoData();b.Bi||!this.Ca?(b=b.lh,a=eO(this,a),b&&mP(this,a)):nP(this,a)}this.i.ka("onPlaylistUpdate")};
g.k.nextVideo=function(a,b){var c=this,d=this.l.getVideoData().suggestions;if(g.CI(this.i)&&d){d=(0,g.Hc)(d,function(f){return g.XG(c.g,f)});
d=d[0];var e=b?d.sy:d.xc;g.oP(this,d.xa().videoId,e,d.getPlaylistId(),b,d.Gx)}else this.da?this.i.ka("onPlaylistNext"):3==this.getPresentingPlayerType()?g.mI(this.o).nextVideo():this.C&&(Qt(this.g)&&!this.i.isFullscreen()?iP(this,"yt.www.watch.lists.next"):(this.C.hasNext(a)&&zx(this.C,xx(this.C)),this.C.loaded?(d=b&&g.P(this.g.experiments,"html5_player_autonav_logging"),eO(this,this.C.xa(void 0,b,d),1)):this.Ca=!1))};
g.k.previousVideo=function(a){this.da?this.i.ka("onPlaylistPrevious"):3==this.getPresentingPlayerType()?g.mI(this.o).Rq():this.C&&(Qt(this.g)&&!this.i.isFullscreen()?iP(this,"yt.www.watch.lists.prev"):(this.C.ng(a)&&zx(this.C,yx(this.C)),this.C.loaded?eO(this,this.C.xa(),1):this.Ca=!1))};
g.k.playVideoAt=function(a){this.da?this.i.ka("onPlaylistIndex",a):this.C&&(this.C.loaded?eO(this,this.C.xa(a),1):this.Ca=!1,zx(this.C,a))};
g.k.getPlaylist=function(){return this.C};
g.k.eK=function(a){this.i.ka("onCueRangeEnter",a.getId())};
g.k.fK=function(a){this.i.ka("onCueRangeExit",a.getId())};
g.k.jK=function(){function a(){var e=g.Hn(c);if(e){var f={cpn:b.getVideoData().clientPlaybackNonce,csn:e};if(g.P(b.g.experiments,"web_playback_associated_ve")&&null!=b.getVideoData().df){var h=g.Bn(b.getVideoData().df);g.Yn(e,h);f.playbackVe=h.getAsJson()}g.P(b.g.experiments,"kevlar_playback_associated_queue")&&b.getVideoData().queueInfo&&(f.queueInfo=b.getVideoData().queueInfo);e={};yO(b,"web_playback_associated_log_ctt")&&null!==b.getVideoData().fg&&(e.nk={token:b.getVideoData().fg,videoId:b.getVideoData().videoId});
g.Im("playbackAssociated",f,e)}}
var b=this;this.getPresentingPlayerType();this.za||(this.za=g.Un(g.Bv,this.qB,this));g.cE(this.K,this.B.getVideoData(),g.sP(this));SO(this)&&this.g.i&&"embedded"==kx(QO(this))&&this.ae&&.01>Math.random()&&g.Im("autoplayTriggered",{intentional:this.ze});this.ae=!1;var c=this.Te||(this.J.g?3:0);g.P(this.g.experiments,"screen_manager_wait_for_csn")?ija(a):a();if(yO(this,"web_player_inline_botguard")){var d=this.getVideoData().botguardData;d&&(yO(this,"web_player_botguard_inline_skip_config_killswitch")&&
(rj("BG_I",d.interpreterScript),rj("BG_IU",d.interpreterUrl),rj("BG_P",d.program)),g.St(this.g)?qk(function(){XO(b)}):XO(this))}};
g.k.YK=function(){this.i.O("internalAbandon");yO(this,"html5_ad_module_cleanup_killswitch")||fP(this)};
g.k.qB=function(a){a=a.g;if(!isNaN(a)&&0<a&&this.l){var b=this.l.B;b.qoe&&0<a&&(b.qoe.g.aft=[a.toString()])}};
g.k.dK=function(){this.g.l&&this.B?this.i.ka("onApiChange",this.B.getPlayerType()):this.i.ka("onApiChange")};
g.k.wL=function(){var a=this.u;a={volume:g.Be(Math.floor(100*a.getVolume()),0,100),muted:a.qp()};a.muted||ZO(this,!1);this.R=g.Pb(a);this.i.ka("onVolumeChange",a)};
g.k.mutedAutoplay=function(){var a=this.getVideoData().videoId;a&&(this.loadVideoByPlayerVars({video_id:a,playmuted:!0}),this.i.ka("onMutedAutoplayStarts"))};
g.k.TK=function(){var a=uP(this);MO(this,a?1:0);wP(this,!!a)};
g.k.isFullscreen=function(){return this.J.isFullscreen()};
g.k.uM=function(){0!==this.J.l&&1!==this.J.l||MO(this,uP(this)?1:0);this.g.Ae&&this.getVideoData()&&!this.getVideoData().backgroundable&&this.u&&.33>window.outerHeight*window.outerWidth/(window.screen.width*window.screen.height)&&this.u.hm()};
g.k.fL=function(a){3!=this.getPresentingPlayerType()&&this.i.O("liveviewshift",a)};
g.k.playVideo=function(a){if(a=g.U(this,a))2==this.ca?VO(this):(null!=this.X&&this.X.Ha()&&this.X.start(),g.S(a.getPlayerState(),2)?this.seekTo(0):a.playVideo())};
g.k.pauseVideo=function(a){(a=g.U(this,a))&&a.pauseVideo()};
g.k.stopVideo=function(){var a=this.l.getVideoData(),b=new g.yw(this.g,{video_id:a.Ew||a.videoId,oauth_token:a.oauthToken});b.Zf=g.Pb(a.Zf);lP(this,6);nP(this,b,1);null!=this.X&&this.X.stop()};
g.k.sendVideoStatsEngageEvent=function(a,b,c){(b=g.U(this,b))&&this.g.Te.has(a.toString())?b.sendVideoStatsEngageEvent(a,c):c&&c()};
g.k.updatePlaylist=function(){UO(this);this.i.ka("onPlaylistUpdate")};
g.k.setSizeStyle=function(a,b){this.Ue=a;this.kd=b;this.i.O("sizestylechange",a,b);this.F.resize()};
g.k.isWidescreen=function(){return this.kd};
g.k.isInline=function(){return this.J.isInline()};
g.k.getAdState=function(){if(3==this.getPresentingPlayerType())return g.mI(this.o).getAdState();if(!this.Vb()){var a=ZI(this.o);if(a)return a.getAdState()}return-1};
g.k.tM=function(a){var b=this.F.getVideoContentRect();kh(this.Zd,b)||(this.Zd=b,this.B&&bG(this.B),this.l&&this.l!=this.B&&bG(this.l),1==this.J.l&&this.Wa&&wP(this,!0));this.Ad&&g.Ie(this.Ad,a)||(this.i.O("appresize",a),this.Ad=a)};
g.k.fd=function(){return this.i.fd()};
g.k.KM=function(){2==this.getPresentingPlayerType()&&Pw(this.ma.i.getVideoData())&&!yO(this,"web_player_manifestless_ad_signature_expiration_killswitch")?fO(this.ma):yO(this,"web_player_reload_all_expirations_killswitch")&&1!=this.getPresentingPlayerType()||yP(this,"signature",void 0,!0)};
g.k.GB=function(){GO(this);FO(this)};
g.k.rM=function(a){lG(a,this.u.qq())};
g.k.mL=function(a){this.V&&this.V.g(a)};
g.k.CK=function(){this.i.ka("CONNECTION_ISSUE")};
g.k.qH=function(a){this.i.O("heartbeatparams",a)};
g.k.setBlackout=function(a){this.g.Xa=a;this.B&&(g.aE(this.B.B),this.g.R&&AP(this))};
g.k.setAccountLinkState=function(a){var b=g.U(this);b&&(b.getVideoData().Ml=a,g.aE(b.B))};
g.k.IL=function(){var a=g.U(this);if(a){var b=!vI(this.i);g.vG(a,b)}};
g.k.iL=function(){this.i.ka("onLoadedMetadata")};
g.k.NK=function(){this.i.ka("onDrmOutputRestricted")};
g.k.U=function(){this.o.dispose();this.ma.dispose();this.P&&this.P.dispose();this.l.dispose();GO(this);g.Od(g.Fb(this.Xd),this.C);Tn(this.za);this.za=0;g.A.prototype.U.call(this)};
g.k.requestStorageAccess=function(a,b){document.requestStorageAccess().then(a,b)};
g.k.setScreenLayer=function(a){this.Te=a};
g.k.cancelPendingLocalMediaById=function(a){if(this.V&&yO(this,"hoffle_api")){var b=this.V,c=iO(b,a);c===b.player?(b.player.stopVideo(),b=b.player,b.o&&WA(b.o)):c&&(c.o&&WA(c.o),Tw(c.getVideoData(),!1));a=dw(a)}else a=Promise.reject();return a};
g.k.fetchLocalMedia=function(){if(this.V&&yO(this,"hoffle_api")){var a=this.V,b=a.api.wb();b&&(b=b.getVideoData(),px(b)||(Uv(b.videoId,2),a.api.Tf(),Tw(b,!0),lO(a,b),a.api.playVideo()))}};
g.k.fetchLocalMediaById=function(a){if(this.V&&yO(this,"hoffle_api")){var b=this.V;Rv(a)||(0===Tv(2).length?mO(b,a):Uv(a,3))}};
g.k.getLocalMediaInfoById=function(a){return this.V&&yO(this,"hoffle_api")?this.V.getLocalMediaInfoById(a):Promise.reject()};
g.k.getAllLocalMediaInfo=function(){return this.V&&yO(this,"hoffle_api")?this.V.getAllLocalMediaInfo():Promise.reject()};
g.k.getStatsForNerds=function(){var a=this.i,b=g.U(this),c=a.getVideoData(),d=a.app.u,e=d.sa(),f=b.Ct(),h=b.ma,l=8*nE(h,"bandwidth")/1024,m=nE(h,"networkactivity")/1024,n=nE(h,"bufferhealth");if(b.F){var q=b.g.useInnertubeDrmService()?"IT/":"";q+=b.F.g.Pd()+"/"+Au(YF(b));q+="/"+b.F.Pd()}else q="";var r=b.getPlayerState().state.toString(16),u=d.getCurrentTime().toFixed(2),w=is(d.Od(),",",3);var B="";c.Az()&&(B+="DAI, ");c.fetchType&&(B+="vd:"+("gvi"===c.fetchType?"g":"o")+", ");B+="s:"+r+" t:"+u+" b:"+
w+" ";d.Sm()&&(B+="S");d.vi()&&(B+="P");d.pg()&&(B+="E");d=b.B;d=d.qoe?d.qoe.V:void 0;d&&(B+=" l:"+d.toFixed());d=g.Rt();r=g.pI(a).LG;u=c.wa&&!c.wa.g()?"display:none":"";if((w=c.clientPlaybackNonce)&&16==w.length){for(var z=0,D="",F=0;10>F;F++)if(z=(z<<6)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(w.charAt(F)),4==F%5){for(var H="",V=0;6>V;V++)H="0123456789ABCDEFGHJKMNPQRSTVWXYZ".charAt(z&31)+H,z>>=5;D+=H}w=D.substr(0,4)+" "+D.substr(4,4)+" "+D.substr(8,4)}else w="";
l={video_id_and_cpn:c.videoId+" / "+w,codecs:"",dims_and_frames:"",bandwidth_kbps:l.toFixed(0)+" Kbps",buffer_health_seconds:n.toFixed(2)+" s",drm_style:q?"":"display:none",drm:q,debug_info:B,bandwidth_style:u,network_activity_style:u,network_activity_bytes:m.toFixed(0)+" KB",shader_info:r,shader_info_style:r?"":"display:none",playback_categories:""};m=e.clientWidth+"x"+e.clientHeight+(1<d?"*"+d.toFixed(2):"");n="-";f.totalVideoFrames&&(n=(f.droppedVideoFrames||0)+" dropped of "+f.totalVideoFrames);
l.dims_and_frames=m+" / "+n;a=a.getVolume();f=ox(c);a=Math.round(a)+"% / "+Math.round(a*f)+"%";f=c.yn.toFixed(1);isFinite(Number(f))&&(a+=" (content loudness "+f+"dB)");l.volume=a;l.resolution=e.videoWidth+"x"+e.videoHeight;if(a=c.ya)if(e=a.video)f=e.fps,1<f&&(l.resolution+="@"+f),(f=g.OF(b))&&f.video&&(l.resolution+=" / "+f.video.width+"x"+f.video.height,1<f.video.fps&&(l.resolution+="@"+f.video.fps)),l.codecs=nO(a),!c.kc||a.audio&&a.video||(l.codecs+=" / "+nO(c.kc)),e.g||e.primaries?(a=e.g||"unknown",
"smpte2084"===a?a+=" (PQ)":"arib-std-b67"===a&&(a+=" (HLG)"),l.color=a+" / "+(e.primaries||"unknown"),l.color_style=""):l.color_style="display:none";e=c.ra;a=c.ff;l.live_mode_style=e||a?"":"display:none";l.live_latency_style=e?"":"display:none";if(a)l.live_mode="Post-Live"+(Pw(c)?" Manifestless":"");else if(e){a=nE(h,"livelatency");l.live_latency_secs=a.toFixed(2)+"s";e=Pw(c)?"Manifestless, ":"";c.Hm&&(e+="Windowed, ");f="Uncertain";if(0<=a&&120>a)if(c.latencyClass&&"UNKNOWN"!==c.latencyClass)switch(c.latencyClass){case "NORMAL":f=
"Optimized for Normal Latency";break;case "LOW":f="Optimized for Low Latency";break;case "ULTRALOW":f="Optimized for Ultra Low Latency";break;default:f="Unknown Latency Setting"}else f=c.isLowLatencyLiveStream?"Optimized for Low Latency":"Optimized for Smooth Streaming";e+=f;(a=b.getPlaylistSequenceForTime(b.getCurrentTime()))&&(e+=", seq "+a.sequence);l.live_mode=e}b.isGapless()&&(l.playback_categories+="Gapless ");l.playback_categories_style=l.playback_categories?"":"display:none";l.bandwidth_samples=
mE(h,"bandwidth");l.network_activity_samples=mE(h,"networkactivity");l.live_latency_samples=mE(h,"livelatency");l.buffer_health_samples=mE(h,"bufferhealth");Gw(c,"web_player_release_debug")?(l.release_name="youtube.player.web_20200809_0_RC0",l.release_style=""):l.release_style="display:none";return l};
g.k.getVideoUrl=function(a,b,c,d,e){return this.N&&this.N.postId?(a=this.g.getVideoUrl(a),a=Id(a,"v"),a.replace("/watch","/clip/"+this.N.postId)):this.g.getVideoUrl(a,b,c,d,e)};
var kR={};g.Ia("yt.player.Application.create",AO.create,void 0);g.Ia("yt.player.Application.createAlternate",AO.create,void 0);var lR=g.Ka("ytcsi.tick");lR&&lR("pe");var bka=/(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g;g.Va(g.HP,g.xe);g.k=g.HP.prototype;g.k.sb=function(){return 1==this.g};
g.k.Hq=function(){this.Xe("begin")};
g.k.hn=function(){this.Xe("end")};
g.k.ud=function(){this.Xe("finish")};
g.k.Xe=function(a){this.dispatchEvent(a)};var dka=g.We&&cka();g.Va(g.JP,g.A);var mR=[];g.k=g.JP.prototype;g.k.ia=function(a,b,c,d){Array.isArray(b)||(b&&(mR[0]=b.toString()),b=mR);for(var e=0;e<b.length;e++){var f=je(a,b[e],c||this.handleEvent,d||!1,this.i||this);if(!f)break;this.g[f.key]=f}return this};
g.k.ku=function(a,b,c,d){return KP(this,a,b,c,d)};
g.k.gb=function(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)this.gb(a,b[f],c,d,e);else c=c||this.handleEvent,d=g.Qa(d)?!!d.capture:!!d,e=e||this.i||this,c=ke(c),d=!!d,b=de(a)?a.pm(b,c,d,e):a?(a=me(a))?a.pm(b,c,d,e):null:null,b&&(se(b),delete this.g[b.key])};
g.k.U=function(){g.JP.oc.U.call(this);g.LP(this)};
g.k.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};})(_yt_player);
