(self.webpackChunklite=self.webpackChunklite||[]).push([[37801],{84033:(e,t,n)=>{"use strict";n.d(t,{MA:()=>l,Zh:()=>u,jM:()=>c});var o=n(63038),r=n.n(o),i=n(67294),s={mutedAuthorIds:[],setMutedAuthorIds:function(){},mutedPubIds:[],setMutedPubIds:function(){},dismissedPostIds:[],setDismissedPostIds:function(){},isMutingFromHomeFeed:!0,seeLessPostIds:[],setSeeLessPostIds:function(){}},l=function(e,t,n,o,r){return e.filter((function(e){var i,s,l,d,u,c;return!(t.indexOf(null===(i=e.post)||void 0===i||null===(s=i.creator)||void 0===s?void 0:s.id)>-1||n.indexOf(null===(l=e.post)||void 0===l||null===(d=l.collection)||void 0===d?void 0:d.id)>-1||o.indexOf(null===(u=e.post)||void 0===u?void 0:u.id)>-1||r.indexOf(null===(c=e.post)||void 0===c?void 0:c.id)>-1)}))},d=i.createContext(s),u=function(e){var t=e.children,n=i.useState(s.mutedAuthorIds),o=r()(n,2),l=o[0],u=o[1],c=i.useState(s.mutedPubIds),a=r()(c,2),m=a[0],v=a[1],p=i.useState(s.dismissedPostIds),f=r()(p,2),I=f[0],E=f[1],h=i.useState(s.seeLessPostIds),P=r()(h,2),g=P[0],w=P[1],b=s.isMutingFromHomeFeed;return i.createElement(d.Provider,{value:{mutedAuthorIds:l,setMutedAuthorIds:u,mutedPubIds:m,setMutedPubIds:v,dismissedPostIds:I,setDismissedPostIds:E,isMutingFromHomeFeed:b,seeLessPostIds:g,setSeeLessPostIds:w}},t)},c=function(){return i.useContext(d)}},37801:(e,t,n)=>{"use strict";n.d(t,{t:()=>z});var o=n(67294),r=n(75341),i=n(60519),s=n(76532),l=n(73891),d=n(68421),u=n(19464),c=n(14391),a=n(319),m=n.n(a),v=n(59713),p=n.n(v),f=n(63038),I=n.n(f),E=n(5977),h=n(84033),P=n(97292),g=n(30570),w=n(36511),b=n(32262),S=n(29169),x=n(42933),A=n(82318),k=n(80362),M=n(95760),O=n(51512),y=n(85277),F=n(8403),j=n(67297),C=n(93394);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var U=o.createElement("path",{d:"M6.2 16.8A7.5 7.5 0 1 0 16.8 6.2 7.5 7.5 0 0 0 6.2 16.8z",stroke:"#000",strokeWidth:2,strokeLinecap:"round"}),L=o.createElement("path",{d:"M6 6l11 11",stroke:"#000",strokeWidth:2});const _=function(e){return o.createElement("svg",D({width:19,height:19,viewBox:"0 0 23 23",fill:"none"},e),U,L)};var B=n(46829),T=n(64235),H=n(32589),K=function(e){var t=e.creatorId,n=e.viewerId,r=e.muteAuthor,i=e.hidePopover,s=e.eventData,l=e.isActiveExpandedPost,d=(0,O.pK)(),u=(0,M.Av)(),c={id:t||""},a=(0,H.Pd)(c).viewerEdge,v=!(null==a||!a.isFollowing),p=!(null==a||!a.isMuting),f=(0,g.sK)().clearExpandedState,P=(0,E.k6)(),w=(0,h.jM)(),S=w.mutedAuthorIds,x=w.setMutedAuthorIds,k=w.isMutingFromHomeFeed,y=o.useCallback((function(e){x([].concat(m()(S),[e]))}),[S]),F=(0,B.useMutation)(T.g,{variables:{targetUserId:t||""},optimisticResponse:{unfollowUser:{__typename:"User",id:t||"",viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(t,"-viewerId:").concat(n),isFollowing:!1}}}}),j=I()(F,1)[0];return t?v?o.createElement(b.Sl,null,o.createElement(A.r,{onClick:function(){u.event("user.unfollowed",{targetUserId:t,source:d}),j(),i()}},"Unfollow this author")):p?null:o.createElement(b.Sl,null,o.createElement(A.r,{onClick:function(){u.event("user.muted",s),r(),k&&(y(t),l&&(f(),P.goBack())),i()}},"Mute this author")):null},R=n(84783),G=function(e){var t=e.collectionId,n=e.viewerId,r=e.hidePopover,i=e.mutePub,s=e.eventData,d=e.isActiveExpandedPost,u=(0,M.Av)(),c=(0,O.pK)(),a={id:t||""},v=(0,l.gY)(a).viewerEdge,p=!(null==v||!v.isFollowing),f=!(null==v||!v.isMuting),I=(0,R.MT)(t||"",n),P=(0,h.jM)(),w=P.mutedPubIds,S=P.setMutedPubIds,x=P.isMutingFromHomeFeed,k=(0,g.sK)().clearExpandedState,y=(0,E.k6)(),F=o.useCallback((function(e){S([].concat(m()(w),[e]))}),[w]);return t?p?o.createElement(b.Sl,null,o.createElement(A.r,{onClick:function(){u.event("collection.unfollowed",{collectionId:t,followSource:c}),I(),r()}},"Unfollow this publication")):f?null:o.createElement(b.Sl,null,o.createElement(A.r,{onClick:function(){u.event("collection.muted",s),i(),x&&(F(t),d&&(k(),y.goBack())),r()}},"Mute this publication")):null};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){p()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=e.postId,n=e.creatorId,r=e.collectionId,i=e.isActiveExpandedPost,s=e.setDismissedPostId,l=(0,w.r)().viewerId,d=o.useState(!1),u=I()(d,2),c=u[0],a=u[1],v=(0,P.l)(n,r),p=v.muteAuthor,f=v.mutePub,D=(0,g.sK)().clearExpandedState,U=(0,E.k6)(),L=(0,h.jM)(),B=L.seeLessPostIds,T=L.setSeeLessPostIds,H=L.isMutingFromHomeFeed,R=(0,y.w)(),N=(0,M.Av)(),Z=(0,O.pK)(),z=(0,F.PM)(),W=(0,j.v9)((function(e){return e.navigation.referrer})),Y=(0,j.v9)((function(e){return e.navigation.currentLocation})),J={postId:t,location:Y,referrer:W,source:Z,referrerSource:z},X=o.useRef(null),q=function(){null!==X.current&&window.clearTimeout(X.current)},Q=function(){X.current=window.setTimeout((function(){N.event("post.see_less",V({userId:l,collection:r},J))}),5e3),H&&(T([].concat(m()(B),[t])),i&&(D(),U.goBack()),s&&s(t)),R({toastStyle:"USER_NEGATIVE_SIGNAL",extraParams:{onClickUndo:q}}),a(!1)},$=o.useCallback((function(){return o.createElement(b.mX,null,o.createElement(x.x,{borderBottom:"BASE_LIGHTER",paddingBottom:"4px",marginBottom:"4px"},o.createElement(b.Sl,null,o.createElement(A.r,{onClick:Q,"aria-label":"Show less like this"},o.createElement(x.x,{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:void 0,ariaHidden:"true"},o.createElement(x.x,{marginRight:"4px"},o.createElement(_,null)),o.createElement(x.x,null,"Show less like this"))))),o.createElement(K,{creatorId:n,viewerId:l,muteAuthor:p,isActiveExpandedPost:i,hidePopover:function(){return a(!1)},eventData:V({targetUserId:n},J)}),r&&o.createElement(G,{collectionId:r,viewerId:l,mutePub:f,isActiveExpandedPost:i,hidePopover:function(){return a(!1)},eventData:V({collection:r},J)}),o.createElement(S.z,{postId:t,viewerId:l,targetUserId:n||"",shouldShowShortenedCopy:!0,hidePopover:function(){return a(!1)}}))}),[c,B]);return n?o.createElement(k.J,{isVisible:c,hide:function(){return a(!1)},popoverRenderFn:$},o.createElement(A.r,{onClick:function(){return a(!0)},"aria-label":"More options"},o.createElement(C.Z,null))):null},z=function(e){var t=e.post,n=e.index,a=e.isActiveExpandedPost,m=e.setDismissedPostId,v=t.creator,p=t.collection,f=(0,s.H)().value,I=(0,l.gY)(p).viewerEdge,E=!(null==I||!I.isEditor),h=(null==f?void 0:f.id)===(null==v?void 0:v.id),P=!(0,r.SK)()||(null==f?void 0:f.dismissableFlags.includes(c.T3.BETA_FIRST_USE_CTA));return v?E||h?o.createElement(u.B,null,(function(e){var n=e.show;return o.createElement(i.Z,{post:t,creator:v,collection:p,showLoadingIndicator:n})})):0===n&&P?o.createElement(d.o,{flag:c.T3.USER_SIGNAL_MENU,text:"Improve your recommendations by telling us which stories you're not interested in.",dismissText:"OK",placement:"top"},o.createElement(Z,{postId:t.id,creatorId:v.id,collectionId:null==p?void 0:p.id,isActiveExpandedPost:a,setDismissedPostId:m})):o.createElement(Z,{postId:t.id,creatorId:v.id,collectionId:null==p?void 0:p.id,isActiveExpandedPost:a,setDismissedPostId:m}):null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/37801.4dbfc059.chunk.js.map