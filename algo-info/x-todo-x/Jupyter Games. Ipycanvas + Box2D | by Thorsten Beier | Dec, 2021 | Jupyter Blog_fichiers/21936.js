(self.webpackChunklite=self.webpackChunklite||[]).push([[21936],{92013:(e,n,i)=>{"use strict";i.d(n,{h:()=>o});var t=i(76972),a=i(27003),l=i(95482);function o(e){var n=e.hasPrefix,i=void 0!==n&&n,o=e.timestamp,d=Date.now(),r=(0,t.Z)(d,o);if(0===r)return i?"just now":"Just now";if(r>=1&&r<24)return"".concat(r," hour").concat(r>1?"s":""," ago");var m=(0,a.Z)(d,o);return m>=1&&m<7?"".concat(m," day").concat(m>1?"s":""," ago"):(0,l.E)({timestamp:o})}},22669:(e,n,i)=>{"use strict";i.d(n,{P:()=>m});var t=i(68337),a=i.n(t),l=i(67294),o=i(76134),d=i.n(o),r=i(82318),m=function(e){var n=e.children,i=e.linkifyTwitterHandles,t=void 0!==i&&i,o=e.wrapLinks,m=void 0!==o&&o;if(!n)return null;var s=a()().tlds(d());t&&s.add("@",{validate:function(e,n,i){var t=e.slice(n);return i.re.twitter||(i.re.twitter=new RegExp("^([a-zA-Z0-9_]){1,15}(?!_)(?=$|"+i.re.src_ZPCc+")")),i.re.twitter.test(t)?!(n>=2&&"@"===t[n-2])&&t.match(i.re.twitter)[0].length:0},normalize:function(e){e.url="https://twitter.com/"+e.url.replace(/^@/,"")}});var u=s.match(n);if(!u)return n;var c=0;return u.reduce((function(e,i,t){return n?(i.index>c&&e.push(n.substring(c,i.index)),e.push(l.createElement(r.r,{wrapLinks:m,disableSourceParam:!0,key:t,inline:!0,linkStyle:"OBVIOUS",href:i.url},i.text)),t===u.length-1&&i.lastIndex<n.length&&e.push(n.substring(i.lastIndex,n.length)),c=i.lastIndex,e):[]}),[])}},49486:(e,n,i)=>{"use strict";i.d(n,{Q:()=>t});var t=i(67294).createContext({openSidebarToRespondToHighlight:function(){return null}})},2022:(e,n,i)=>{"use strict";i.d(n,{S:()=>m,s:()=>r});var t=i(319),a=i.n(t),l=i(32018),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowButtonSignedOut_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_user"}}]}}].concat(a()(l.Vm.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowButtonSignedOut_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}}]}}].concat(a()(l.qU.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowButton_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButtonSignedIn_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButtonSignedOut_user"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowButtonSignedIn_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]),a()(o.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButtonSignedOut_post"}}]}}].concat(a()(d.definitions))}},82143:(e,n,i)=>{"use strict";i.d(n,{O:()=>d,r:()=>r});var t=i(319),a=i.n(t),l=i(16831),o=i(2022),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserMentionTooltip_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}}]}}].concat(a()(l.W.definitions),a()(o.s.definitions))},r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserMentionTooltipStatsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followerCount"}}]}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"lastPostCreatedAt"}}]}}]}}]}}]}}]}},41832:(e,n,i)=>{"use strict";i.d(n,{u:()=>w,K:()=>F});var t=i(46829),a=i(93022),l=i(23450),o=i.n(l),d=i(67294),r=i(36823),m=i(92013),s=i(22669),u=i(98281),c=i(31001),k=i(82143),p=i(42933),v=i(98462),S=i(37278),f=i(98024),g=i(6688),N=i(67297),x=i(92745),h=i(27390),w=function(){var e=(0,g.I)(),n=(0,x.P)();return d.createElement("div",{className:e((function(){return n}))},d.createElement(p.x,{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between",padding:"12px",width:"280px",backgroundColor:"BACKGROUND"},d.createElement(p.x,{width:"100%"},d.createElement(p.x,{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"20px"},d.createElement(p.x,{height:"20px",width:"20px",backgroundColor:"BASE_NORMAL",borderRadius:"50%",marginRight:"8px"}),d.createElement(p.x,{height:"8px",width:"82px",backgroundColor:"BASE_NORMAL"})),d.createElement(p.x,{width:"80%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),d.createElement(p.x,{width:"65%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),d.createElement(p.x,{width:"85%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),d.createElement(p.x,{width:"70%",height:"8px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}))))},F=function(e){var n,i,l=e.user,g=(0,N.v9)((function(e){return e.config.productName})),x=l.id,w=l.name,F=l.username,y=l.bio,E=l.imageId,b=l.mediumMemberAt,C=l.hasSubdomain,_=l.customDomainState,D=(0,t.useQuery)(k.r,{variables:{id:x}}).data,A=(0,r.B)(l);if("User"===(null==D||null===(n=D.userResult)||void 0===n?void 0:n.__typename)){var B=D.userResult,U=B.socialStats,T=B.viewerEdge,I=T.createdAt,R=T.lastPostCreatedAt,O=(0,h.pY)(null==U?void 0:U.followerCount);if((null==U?void 0:U.followerCount)>=100&&(i="".concat(O," Followers")),R)i=d.createElement(d.Fragment,null,"Last published ",d.createElement(m.h,{timestamp:R,hasPrefix:!0}));else if(!R&&(null==U?void 0:U.followerCount)>0)i="".concat(O," ").concat(o()("Follower",null==U?void 0:U.followerCount));else if(I){var L=(0,a.Z)(I,"LLL yyyy");i="Joined ".concat(g," ").concat(L)}else i=""}return d.createElement(p.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},d.createElement(p.x,{display:"flex",flexDirection:"row",alignItems:"center",whiteSpace:"normal"},d.createElement(u.Yt,{scale:"XS",user:{__typename:"User",mediumMemberAt:b,username:F,name:w,imageId:E,id:x,hasSubdomain:C,customDomainState:_},link:!0}),d.createElement(v.P,{href:A},d.createElement(p.x,{display:"flex",flexDirection:"column",paddingLeft:"12px"},d.createElement(S.X6,{scale:"S",clamp:2},w)))),y&&d.createElement(p.x,{paddingTop:"12px"},d.createElement(f.F,{scale:"S",color:"DARKER"},d.createElement(s.P,{wrapLinks:!0},y))),d.createElement(p.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderTop:"BASE_LIGHTER",marginTop:"10px",paddingTop:"10px"},d.createElement(f.F,{scale:"S"},i),d.createElement(c.Bv,{user:l,buttonSize:"COMPACT",susiEntry:"follow_card"})))}},92745:(e,n,i)=>{"use strict";i.d(n,{P:()=>o});var t=i(67294),a=i(99701),l={"0%":{opacity:"0.8"},"50%":{opacity:"0.5"},"100%":{opacity:"0.8"}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=(0,a.o)({shimmerKeyframesName:e}),i=n.shimmerKeyframesName;return t.useMemo((function(){return{animation:"".concat(i," 1.2s ease-in-out infinite")}}),[i])}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/21936.668e20ff.chunk.js.map