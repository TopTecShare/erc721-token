(this["webpackJsonp@fluuuid/nft-marketplace"]=this["webpackJsonp@fluuuid/nft-marketplace"]||[]).push([[0],{157:function(e,t){},184:function(e,t,n){"use strict";n.r(t);var r,a,c=n(1),o=n.n(c),i=n(130),s=n.n(i),u=n(198),l=n(194),d=n(140),h=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,683)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},b=n(46),f=n(4),j=n.n(f),p=n(26),x=n(29),v=n(195),g=n(196),O=n(88),m=n(113),w=n(134),k=n(92),y=Object(w.a)((function(e,t){return{isAuthenticated:!1,contract:void 0,user:void 0,tokensOnSale:[],ethPrice:"0.0",activatingConnector:void 0,transaction:void 0,setAuthenticated:function(t){return e({isAuthenticated:t})},setContract:function(){var t=Object(p.a)(j.a.mark((function t(n,r){var a,c,o,i,s,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n){t.next=3;break}throw new Error("No Web3 Found");case 3:if(a=function(e){switch(e){case 1337:return 5777;default:return e}},c=m.networks[String(a(r))]){t.next=7;break}throw new Error("The network you selected is no supported yet.");case 7:return o=c.address,i=new k.a(o,m.abi,n.getSigner()),t.next=11,i.name();case 11:return s=t.sent,t.next=14,i.symbol();case 14:u=t.sent,e({library:n,contract:i,contractDetails:{name:s,symbol:u,address:o}}),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e,n){return t.apply(this,arguments)}}(),setUser:function(){var n=Object(p.a)(j.a.mark((function n(r){var a,c,o,i,s,u,l;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a=t(),c=a.contract,o=a.user,i=a.library,s=a.getUserTokens,i){n.next=4;break}throw new Error("No Web3 Found");case 4:if(c){n.next=6;break}throw new Error("No contract found");case 6:if(o||r){n.next=8;break}throw new Error("No user found");case 8:return n.t0=v.b,n.next=11,i.getBalance(r||(null===o||void 0===o?void 0:o.address)||"");case 11:return n.t1=n.sent,u=n.t0.formatEther.call(n.t0,n.t1),n.next=15,s(r||(null===o||void 0===o?void 0:o.address));case 15:l=n.sent,e({isAuthenticated:!0,user:{address:r||(null===o||void 0===o?void 0:o.address)||"",balance:u,ownedTokens:l}}),n.next=22;break;case 19:n.prev=19,n.t2=n.catch(0),console.log(n.t2);case 22:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(e){return n.apply(this,arguments)}}(),setTokensOnSale:function(t){return e({tokensOnSale:t})},setEthPrice:function(t){return e({ethPrice:t})},setActivatingConnector:function(t){return e({activatingConnector:t})},setTransaction:function(t){return e({transaction:t})},getUserTokens:function(){var e=Object(p.a)(j.a.mark((function e(n){var r,a,c,o,i,s,u,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=t(),a=r.contract,c=r.library,o=r.user,c){e.next=4;break}throw new Error("No Web3 Found");case 4:if(a){e.next=6;break}throw new Error("No contract found");case 6:if((null===o||void 0===o?void 0:o.address)||n){e.next=8;break}throw new Error("No user found");case 8:return i=(null===o||void 0===o?void 0:o.address)||n,s=a.filters.Transfer(null,i),e.next=12,a.queryFilter(s,0,"latest");case 12:return u=e.sent,l=new Map,e.next=16,Promise.all(u.map(function(){var e=Object(p.a)(j.a.mark((function e(t){var n,r,c,o,s,u,d,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.ownerOf(null===(n=t.args)||void 0===n?void 0:n.tokenId);case 2:if(e.sent!==i){e.next=14;break}return e.next=6,a.tokenMeta(null===(r=t.args)||void 0===r?void 0:r.tokenId);case 6:return o=e.sent,s=o.id,u=o.name,d=o.price,e.next=12,a.tokenURI(null===(c=t.args)||void 0===c?void 0:c.tokenId);case 12:h=e.sent,l.set(h,{id:s,name:u,price:d,uri:h});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 16:return e.abrupt("return",Array.from(l).map((function(e){var t=Object(x.a)(e,2);t[0];return t[1]})));case 19:return e.prev=19,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t){return e.apply(this,arguments)}}(),buyToken:function(){var e=Object(p.a)(j.a.mark((function e(n,r){var a,c,o,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t(),c=a.setTransaction,o=a.contract){e.next=4;break}throw new Error("No contract found");case 4:return e.next=6,o.purchaseToken(n,{value:r});case 6:i=e.sent,c(i),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("on buy",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),updateTokensOnSale:function(){var e=Object(p.a)(j.a.mark((function e(){var n,r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t(),r=n.contract,a=n.setTokensOnSale,r){e.next=4;break}throw new Error("No contract found");case 4:return e.next=6,r.getAllOnSale();case 6:return c=e.sent.reduce((function(e,t){return""!==t.uri&&e.push({id:t.id,price:t.price,name:t.name,uri:t.uri}),e}),[]),a(c),e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),setTokenSale:function(){var e=Object(p.a)(j.a.mark((function e(n,r){var a,c,o,i,s,u,l=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>2&&void 0!==l[2]&&l[2],e.prev=1,c=t(),o=c.contract,i=c.user,s=c.setTransaction,o){e.next=5;break}throw new Error("No contract found");case 5:if(i){e.next=7;break}throw new Error("No user found");case 7:return e.next=9,o.setTokenSale(n,a,r,{from:i.address});case 9:return u=e.sent,s(u),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n){return e.apply(this,arguments)}}(),transferToken:function(){var e=Object(p.a)(j.a.mark((function e(n,r){var a,c,o,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=t(),c=a.contract,o=a.user,i=a.setTransaction,c){e.next=4;break}throw new Error("No contract found");case 4:if(o){e.next=6;break}throw new Error("No user found");case 6:return e.next=8,c["safeTransferFrom(address,address,uint256)"](o.address,r,n,{from:o.address});case 8:s=e.sent,i(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}()}})),S=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,r,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=y.getState(),r=n.setEthPrice,e.next=4,fetch(t);case 4:return e.next=6,e.sent.json();case 6:a=e.sent,c=a.result.ethusd,r(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{error:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=y.getState(),r=n.contract){e.next=4;break}throw new Error("Contract not found");case 4:return e.next=6,null===r||void 0===r?void 0:r.ownerOf(t);case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{error:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.round(e.length/t);return"".concat(e.substr(0,n),"...").concat(e.substr(e.length-n,e.length))},F="".concat("","/ethusd"),A=n(6),W=function(e){var t=e.token,n=e.isOnSale,r=e.onTransfer,a=e.onBuy,o=e.onSale,i=Object(c.useState)(!1),s=Object(x.a)(i,2),u=s[0],l=s[1],d=Object(c.useState)(!1),h=Object(x.a)(d,2),b=h[0],f=h[1],m=Object(c.useState)(""),w=Object(x.a)(m,2),k=w[0],S=w[1],F=Object(c.useState)(""),W=Object(x.a)(F,2),P=W[0],R=W[1],I=y(),U=I.user,z=I.ethPrice,N=I.contractDetails,_=I.transferToken,M=I.buyToken,H=I.setTokenSale,D=function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r&&v.b.isAddress(k)&&(_(t.id,k),l(!1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,H(t.id,v.b.parseEther(P),!0);case 6:f(!1),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(3),new Error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),L=Object(O.a)(t.id,E).data,q=Object(O.a)("".concat("","/token/").concat(t.id),C).data,G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return new Intl.NumberFormat("us-GB",{style:"currency",currency:"USD"}).format(Number(v.b.formatEther(e))*Number(t))}(t.price,z);return q?q.name?Object(A.jsxs)(g.c,{variant:"nft",children:[Object(A.jsx)(g.i,{sx:{width:"100%",bg:"white",borderBottom:"1px solid black"},src:q.image}),Object(A.jsxs)(g.a,{p:3,pt:2,children:[Object(A.jsx)(g.h,{as:"h2",children:q.name}),Object(A.jsx)(g.e,{variant:"divider.nft"}),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(g.n,{sx:{color:"lightBlue",fontSize:1,fontWeight:"bold"},children:"Price"}),Object(A.jsxs)(g.h,{as:"h3",sx:{color:"green",m:0,fontWeight:"bold"},children:[v.a.EtherSymbol," ",Number(v.b.formatEther(t.price)).toFixed(2)," ",Object(A.jsxs)(g.n,{sx:{color:"navy"},as:"span",variant:"text.body",children:["(",G,")"]})]}),L&&"string"===typeof L&&!r&&Object(A.jsxs)(g.a,{mt:2,children:[Object(A.jsx)(g.n,{as:"p",sx:{color:"lightBlue",fontSize:1,fontWeight:"bold"},children:"Owner"}),Object(A.jsx)(g.l,{target:"_blank",href:"https://rinkeby.etherscan.io/address/".concat(L),variant:"owner",style:{textOverflow:"ellipsis",width:"100%",position:"relative",overflow:"hidden"},children:T(L)})]}),Object(A.jsx)(g.a,{mt:2,children:Object(A.jsx)(g.l,{target:"_blank",href:"https://testnets.opensea.io/assets/".concat(null===N||void 0===N?void 0:N.address,"/").concat(t.id),variant:"openSea",children:"View on Opensea.io"})})]}),r&&Object(A.jsxs)(g.f,{mt:3,sx:{justifyContent:"center"},children:[u&&Object(A.jsxs)(g.a,{sx:{width:"100%"},children:[Object(A.jsx)(g.f,{onSubmit:D,sx:{width:"100%",flexDirection:"column"},as:"form",children:Object(A.jsx)(g.j,{onChange:function(e){return S(e.currentTarget.value)},placeholder:"ETH Address 0x0..."})}),Object(A.jsxs)(g.f,{mt:2,children:[Object(A.jsx)(g.b,{sx:{bg:"green"},onClick:D,variant:"quartiary",children:"Confirm"}),Object(A.jsx)(g.b,{sx:{bg:"red"},ml:2,onClick:function(){return l(!1)},variant:"quartiary",children:"Cancel"})]})]}),b&&Object(A.jsxs)(g.a,{sx:{width:"100%"},children:[Object(A.jsx)(g.f,{onSubmit:D,sx:{width:"100%",flexDirection:"column"},as:"form",children:Object(A.jsx)(g.j,{onChange:function(e){return R(e.currentTarget.value)},placeholder:"Token Price in ETH"})}),Object(A.jsxs)(g.f,{mt:2,children:[Object(A.jsx)(g.b,{sx:{bg:"green"},onClick:B,variant:"quartiary",children:"Confirm"}),Object(A.jsx)(g.b,{sx:{bg:"red"},ml:2,onClick:function(){return f(!1)},variant:"quartiary",children:"Cancel"})]})]}),!u&&!b&&Object(A.jsxs)(g.f,{sx:{flexDirection:"column",width:"100%",justifyContent:"center"},children:[Object(A.jsx)(g.b,{onClick:function(){return l(!u)},variant:"tertiary",children:"Transfer"}),n?Object(A.jsx)(g.b,{mt:2,onClick:function(){return o&&H(t.id,t.price,!1)},variant:"tertiary",children:"Remove from Sale"}):Object(A.jsx)(g.b,{mt:2,onClick:function(){return f(!b)},variant:"tertiary",children:"Put Token for Sale"})]})]}),a&&Object(A.jsx)(g.f,{mt:3,sx:{justifyContent:"center",width:"100%"},children:Object(A.jsx)(g.b,{sx:{opacity:(null===U||void 0===U?void 0:U.ownedTokens.find((function(e){return v.b.formatUnits(e.id)===v.b.formatUnits(t.id)})))?.5:1,pointerEvents:(null===U||void 0===U?void 0:U.ownedTokens.find((function(e){return v.b.formatUnits(e.id)===v.b.formatUnits(t.id)})))?"none":"visible"},onClick:function(e){e.preventDefault(),a&&M(t.id,t.price)},variant:"quartiary",children:"Buy Token"})})]})]}):null:Object(A.jsx)(g.c,{variant:"nft",children:Object(A.jsx)(g.m,{})})},P=n(20),R=function(){var e=Object(P.g)(),t=Object(P.h)(),n=y(),r=n.user,a=n.isAuthenticated;return Object(A.jsxs)(g.a,{bg:"black",children:[Object(A.jsxs)(g.f,{sx:{alignItems:"center",p:3},as:"nav",children:[Object(A.jsx)(g.i,{onClick:function(){e.push("/")},sx:{width:50,cursor:"pointer"},src:"/static/logo.png"}),Object(A.jsxs)(g.h,{sx:{ml:[1,2],color:"white"},as:"h4",children:["ERC721 Marketplace"," ",Object(A.jsx)(g.n,{sx:{display:["none","block"]},children:"+ OpenSea.io on Rinkeby Network"})]}),Object(A.jsx)(N,{})]}),a&&r&&Object(A.jsxs)(g.f,{bg:"midGray",py:3,sx:{justifyContent:"center"},children:[Object(A.jsx)(g.l,{sx:{pointerEvents:"/"===t.pathname?"none":"visible",color:"/"===t.pathname?"green":"white"},onClick:function(){return e.push("/")},children:"Marketplace"}),Object(A.jsx)(g.a,{sx:{width:50}}),Object(A.jsx)(g.l,{sx:{pointerEvents:"/profile"===t.pathname?"none":"visible",color:"/profile"===t.pathname?"green":"white"},onClick:function(){return e.push("/profile")},children:"Profile"})]})]})},I=n(18),U=function(){var e=y(),t=e.user,n=e.tokensOnSale,r=y(Object(c.useCallback)((function(e){return e.updateTokensOnSale}),[])),a=Object(c.useState)("alpha"),o=Object(x.a)(a,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){r()}),[r]),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(g.h,{as:"h1",children:"Marketplace"}),Object(A.jsxs)(g.f,{sx:{alignItems:"center"},mb:3,children:[Object(A.jsx)(g.h,{as:"h3",sx:{color:"lightGray"},children:"Order:"}),Object(A.jsxs)(g.f,{ml:3,children:[Object(A.jsx)(g.b,{mr:2,onClick:function(){return s("alpha")},variant:"filter",disabled:"alpha"===i,children:"Alphabetically"}),Object(A.jsx)(g.b,{onClick:function(){return s("price")},variant:"filter",disabled:"price"===i,children:"Price"})]})]}),Object(A.jsx)(g.g,{gap:4,columns:["1fr 1fr","1fr 1fr","1fr 1fr 1fr"],children:null===n||void 0===n?void 0:n.sort((function(e,t){return"alpha"===i?I.a.from(e.id).toString().localeCompare(I.a.from(t.id).toString(),void 0,{numeric:!0}):Number(v.b.formatEther(e.price.sub(t.price)))})).map((function(e,n){return Object(A.jsx)(W,{onBuy:!(null===t||void 0===t?void 0:t.ownedTokens.find((function(t){return t.id===e.id}))),token:e},n)}))})]})},z=n(126),N=function(){var e=y(),t=e.user,n=e.isAuthenticated,r=Object(P.g)();return Object(A.jsx)(g.f,{sx:{ml:"auto",justifySelf:"flex-end"},children:n&&t&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(g.a,{sx:{display:["none","block"]},children:[Object(A.jsx)(g.h,{sx:{p:0,color:"white"},as:"h4",children:T(t.address)}),Object(A.jsxs)(g.h,{sx:{p:0,mt:1,textAlign:"right",color:"white"},as:"h5",children:[z.a,t.balance]})]}),Object(A.jsx)(g.a,{onClick:function(){r.push("/profile")},sx:{cursor:"pointer",ml:[0,3],height:30,width:30,borderRadius:"100%"},children:Object(A.jsx)(B,{size:30,address:t.address})})]})})},_=n(11),M=function(e){var t=e.component,n=e.path,r=y().isAuthenticated;return Object(A.jsx)(P.b,{path:n,render:function(e){return r?Object(A.jsx)(t,Object(_.a)({},e)):Object(A.jsx)(P.a,{to:"/"})}})},H=n(138),D=n.n(H),B=function(e){var t=e.address,n=e.size,r=void 0===n?16:n,a=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(a.current)try{a.current.innerHTML="",a.current.appendChild(D()(r,parseInt(t.slice(2,10),16)))}catch(e){console.log(e)}}),[t,r]),Object(A.jsx)(g.f,{ref:a,sx:{justifyContent:"center",width:r+2}})},L=function(){var e=y(Object(c.useCallback)((function(e){return{setTransaction:e.setTransaction,setUser:e.setUser,updateTokensOnSale:e.updateTokensOnSale}}),[])),t=e.setTransaction,n=e.setUser,r=e.updateTokensOnSale,a=Object(c.useRef)(y.getState().transaction),o=Object(c.useState)(!1),i=Object(x.a)(o,2),s=i[0],u=i[1],l=Object(c.useCallback)(Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t(void 0),r(),u(!1);case 5:case"end":return e.stop()}}),e)}))),[t,n,r]);return Object(c.useEffect)((function(){return y.subscribe(function(){var e=Object(p.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.transaction,e.prev=1,a.current=n,n){e.next=5;break}return e.abrupt("return");case 5:return u(!0),e.next=8,n.wait();case 8:e.sent.confirmations>=1&&l(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("transaction",e.t0),u(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()),function(){y.destroy()}}),[l]),s?Object(A.jsx)(g.c,{variant:"transaction",children:Object(A.jsxs)(g.f,{sx:{alignItems:"center"},children:[Object(A.jsx)(g.m,{size:20,color:"white",sx:{mr:2}})," Transaction:"," ",T(a.current.hash)]})}):null},q=n(37),G=n(87),V=n(100);!function(e){e.Metamask="Metamask",e.WalletConnect="WalletConnect"}(a||(a={}));var Y,K=new G.a({supportedChainIds:[5777,1337,4]}),J=new V.b({qrcode:!0,pollingInterval:12e3,infuraId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_RPC_URL_4:"",REACT_APP_RPC_URL_1:"",REACT_APP_SERVICE_URL:""}).REACT_APP_INFURA_ID,rpc:{4:""},chainId:4,supportedChainIds:[4]}),X=(r={},Object(q.a)(r,a.Metamask,K),Object(q.a)(r,a.WalletConnect,J),r),Q=(Y={},Object(q.a)(Y,a.Metamask,"https://docs.metamask.io/metamask-fox.svg"),Object(q.a)(Y,a.WalletConnect,"https://walletconnect.org/walletconnect-logo.svg"),Y),Z=function(){var e=y(),t=e.activatingConnector,n=e.setActivatingConnector,r=Object(b.c)(),a=r.connector,c=r.activate;return Object(A.jsx)(g.f,{sx:{justifyContent:"center"},children:Object.keys(X).map((function(e){var r=X[e],o=r===t,i=r===a;return Object(A.jsxs)(g.b,{mt:2,mr:2,variant:"connect",sx:{borderColor:o?"orange":i?"green":"unset",position:"relative",maxWidth:250},onClick:function(){n(r),c(X[e])},children:[Q[e]&&Object(A.jsx)(g.i,{sx:{width:35,height:35},mr:3,src:Q[e]}),e,o&&Object(A.jsx)(g.m,{size:20,color:"white",sx:{ml:3}})]},e)}))})},$=function(){var e=y().user,t=Object(b.c)().active;return Object(A.jsxs)(A.Fragment,{children:[!e&&Object(A.jsx)(Z,{}),e&&t&&Object(A.jsx)(U,{})]})},ee=n(109),te=n(197);function ne(e){var t=new te.a(e);return t.pollingInterval=12e3,t}var re=function(){return Object(A.jsxs)(ee.a,{basename:"",children:[Object(A.jsx)(R,{}),Object(A.jsx)(b.b,{getLibrary:ne,children:Object(A.jsx)(oe,{children:Object(A.jsxs)(g.d,{children:[Object(A.jsxs)(P.d,{children:[Object(A.jsx)(M,{path:"/profile",component:ae}),Object(A.jsx)(P.b,{exact:!0,path:"/",component:$})]}),Object(A.jsx)(L,{})]})})})]})},ae=function(){var e=y(),t=e.user,n=e.tokensOnSale;if(!t)return null;var r=t.address,a=t.balance,c=t.ownedTokens;return Object(A.jsxs)(g.a,{children:[Object(A.jsx)(g.h,{as:"h1",children:"My Profile"}),Object(A.jsxs)(g.g,{columns:["1fr","1fr 1fr"],sx:{overflow:"hidden",gap:"0 20px"},children:[Object(A.jsxs)(g.a,{children:[Object(A.jsx)(g.h,{as:"h4",sx:{color:"green"},children:"Address"}),Object(A.jsx)(g.n,{children:r})]}),Object(A.jsxs)(g.a,{children:[Object(A.jsx)(g.h,{as:"h4",sx:{color:"green"},children:"Balance"}),Object(A.jsxs)(g.n,{children:["\u039e ",a]})]})]}),Object(A.jsx)(g.e,{variant:"divider.nft",sx:{my:7}}),Object(A.jsx)(g.a,{my:5,children:c&&c.length>0?Object(A.jsxs)(g.a,{children:[Object(A.jsxs)(g.h,{as:"h2",children:["My items"," ",Object(A.jsxs)(g.n,{variant:"text.body",as:"span",children:["(",c.length," item)"]})]}),Object(A.jsx)(g.g,{gap:4,columns:["1fr 1fr","1fr 1fr 1fr"],children:c.map((function(e,t){return Object(A.jsx)(W,{isOnSale:!!(null===n||void 0===n?void 0:n.find((function(t){return v.b.formatUnits(t.id)===v.b.formatUnits(e.id)}))),onSale:!0,onTransfer:!0,token:e},t)}))})]}):c&&Object(A.jsx)(g.a,{children:Object(A.jsx)(g.h,{as:"h2",children:"You don't own any NFT tokens"})})})]})};function ce(e){return console.log(e),e instanceof G.b?"No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.":e instanceof b.a?"You're connected to an unsupported network. Please connect to Rinkeby network":e instanceof G.c||e instanceof V.a?"Please authorize this website to access your Ethereum account.":(console.error(e),"An unknown error occurred. Check the console for more details.")}var oe=function(e){var t=e.children,n=y().activatingConnector,r=Object(b.c)(),a=r.library,o=r.chainId,i=r.account,s=r.error,u=y(Object(c.useCallback)((function(e){return{setContract:e.setContract,setUser:e.setUser}}),[])),l=u.setContract,d=u.setUser;return Object(O.a)(F,S),Object(c.useEffect)((function(){o&&i&&a&&function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(a,o);case 3:d(i),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()()}),[o,i,a,l,d]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(b.c)(),n=t.active,r=t.error;Object(c.useEffect)((function(){var e=window.ethereum;e&&(e.autoRefreshOnNetworkChange=!0)}),[n,r,e])}(!function(){var e=Object(b.c)(),t=e.activate,n=e.active,r=e.connector,a=Object(c.useState)(!1),o=Object(x.a)(a,2),i=o[0],s=o[1];return Object(c.useEffect)((function(){r===K&&K.isAuthorized().then((function(e){e?t(K,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[t,r]),Object(c.useEffect)((function(){!i&&n&&s(!0)}),[i,n]),i}()||!!n),Object(A.jsx)(A.Fragment,{children:s?Object(A.jsxs)(g.d,{children:[Object(A.jsx)(g.h,{as:"h2",children:"\u274c Something is not right"}),Object(A.jsx)(g.n,{sx:{mt:3},children:ce(s)})]}):t})},ie={breakpoints:["40em","52em","64em"],space:[0,4,10,16,20,30,42,56,78,125,150],fontSizes:[10,12,16,26,36,50,75],fonts:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',heading:"inherit"},layout:{container:{py:4,px:3,pb:10}},sizes:Object(_.a)({},{header:60,container:1020,button:[100,250],logo:60,sidemenu:240,chart:950}),cards:{nft:{bg:"background",border:"1px solid",borderColor:"muted",textAlign:"left"},transaction:{bg:"amber",position:"fixed",top:50,right:20,p:4,borderRadius:10}},links:{nav:{color:"white",cursor:"pointer",transition:"all .2s ease-out","&:hover":{opacity:.5,color:"white"}},openSea:{color:"green",fontSize:1,opacity:.5,"&:after":{content:"url(\"data:image/svg+xml,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.262 0l2.529 2.524L0 6.314 1.685 8l3.79-3.79L8 6.732V0z' fill='rgb(99, 255, 203)' fill-rule='nonzero' /%3E%3C/svg%3E\")",ml:1},transition:"all .2s ease-out","&:hover":{opacity:1,color:"green"}},owner:{color:"white",fontSize:1,opacity:.5,transition:"all .2s ease-out","&:hover":{opacity:1,color:"white"},"&:after":{content:"url(\"data:image/svg+xml,%3Csvg width='8' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.262 0l2.529 2.524L0 6.314 1.685 8l3.79-3.79L8 6.732V0z' fill='white' fill-rule='nonzero' /%3E%3C/svg%3E\")",ml:1}}},buttons:{primary:Object(_.a)(Object(_.a)({},{border:0,fontFamily:"body",fontWeight:"normal",lineHeight:"body",fontSize:[1,2],paddingX:3,paddingY:2,outline:"none",whiteSpace:"nowrap",cursor:"pointer",transition:"all 0.1s ease-out","&:hover":{opacity:.7}}),{},{fontWeight:"bold",minWidth:"button",bg:"primary",color:"white",textAlign:"center",display:"flex",width:"100%",alignItems:"center",justifyContent:"center"}),secondary:{cursor:"pointer",variant:"buttons.primary",bg:"secondary",fontWeight:"body"},tertiary:{variant:"buttons.secondary",color:"white",bg:"primary"},quartiary:{variant:"buttons.tertiary",bg:"green",color:"black",minWidth:"auto",py:2},filter:{variant:"buttons.tertiary",bg:"lightGreen",color:"black",minWidth:"auto",py:1,fontSize:1,"&:disabled":{pointerEvents:"none",opacity:.5}},connect:{variant:"buttons.tertiary",py:4,px:5}},fontWeights:{heading:300,body:400,bold:700},lineHeights:{body:1.333333333,heading:1.066666667,subheading:2},colors:Object(_.a)({},{text:"#FFF",white:"#fff",background:"#333",primary:"#111",secondary:"#333",gray:"#F7F9FA",lightGray:"#e0e0e0",midGray:"#222",lightBlue:"#EFF7FF",navy:"#e0e0e0",green:"rgb(99, 255, 203)",amber:"#D58408",lightGreen:"#AEC",red:"#999",muted:"#999",transparent:"transparent",white20:"rgba(255, 255, 255, .2)",black66:"rgba(0, 0, 0, .66)"}),divider:{nft:{color:"muted",height:1,my:2}},forms:{input:{paddingX:2,paddingY:2,borderRadius:"5px",bg:"white",color:"primary"}},text:{body:{fontFamily:"body",fontWeight:"body",lineHeight:"body",fontSize:1},heading:{py:2},bold:{fontWeight:"bold"},paragraph:{fontFamily:"body",fontWeight:"body",lineHeight:2,fontSize:2,letterSpacing:.44,color:"white"},h1:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:6,letterSpacing:-.44},h2:{fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5,letterSpacing:-.44},h3:{fontFamily:"heading",lineHeight:"subheading",fontWeight:"heading",fontSize:3},h4:{fontFamily:"heading",lineHeight:"subheading",fontWeight:"bold",fontSize:[1,2]},h5:{fontFamily:"heading",fontWeight:"bold",lineHeight:1.6,fontSize:0,letterSpacing:1.5}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body"},a:{color:"primary","&:hover":{color:"inherit"}},hr:{height:1,opacity:.5,bg:"black",color:"black",my:6}}};l.a({dsn:"https://06951a956c7a4a6db2f776b1bc697efd@o72860.ingest.sentry.io/5842491",integrations:[new d.a.BrowserTracing],enabled:!0,tracesSampleRate:1}),s.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(u.a,{theme:ie,children:Object(A.jsx)(re,{})})}),document.getElementById("root")),h()}},[[184,1,3]]]);
//# sourceMappingURL=main.ab4bf971.chunk.js.map