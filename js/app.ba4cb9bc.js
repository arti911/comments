(function(e){function t(t){for(var a,i,l=t[0],r=t[1],c=t[2],m=0,u=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&u.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var r=n[l];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/comments/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("380f");var a=n("f64c"),s=(n("b3a4"),n("dfae")),o=(n("0c1d"),n("8592")),i=(n("06ea"),n("fe2b")),l=(n("e1f5"),n("5efb")),r=(n("c721"),n("3af3")),c=(n("805a"),n("0c63")),d=(n("9e39"),n("f933")),m=(n("2d44"),n("40a7")),u=(n("0ece"),n("27fd")),f=(n("a71a"),n("b558")),p=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a-comment",[n("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"},slot:"avatar"}),n("div",{attrs:{slot:"content"},slot:"content"},[n("a-form-item",[n("a-textarea",{attrs:{rows:4,value:e.value},on:{change:e.handleChange}})],1),n("a-form-item",[n("a-button",{attrs:{"html-type":"submit",loading:e.submitting,type:"primary"},on:{click:e.handleSubmit}},[e._v(" Add Comment ")])],1)],1)],1),e.loading?n("a-spin",{staticClass:"spinner"}):n("List",{attrs:{comments:e.comments,"loading:":e.loading,loadingMore:e.loadingMore,showLoadingMore:e.showLoadingMore},on:{like:e.like,dislike:e.dislike,reply:e.reply,spoiler:e.spoiler,handleReplyChange:e.handleReplyChange,handleReplySubmit:e.handleReplySubmit,onLoadMore:e.onLoadMore}})],1)},j=[],h=(n("99af"),n("d81d"),n("fb6a"),n("d3b7"),n("2909")),y=n("5530"),g=(n("96cf"),n("1da1")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.comments.length?n("a-list",{attrs:{loading:e.loading,"data-source":e.comments,"item-layout":"horizontal"},scopedSlots:e._u([{key:"renderItem",fn:function(t){return n("a-list-item",{},[n("a-comment",{class:t.spoiler?"blur":"",attrs:{author:t.email,avatar:t.avatar,content:t.body,datetime:t.datetime}},[n("template",{slot:"actions"},[n("span",{key:"comment-basic-like"},[n("a-tooltip",{attrs:{title:"Like"}},[n("a-icon",{attrs:{type:"like",theme:"liked"===t.action?"filled":"outlined"},on:{click:function(n){return e.like(t)}}})],1),n("span",{staticStyle:{"padding-left":"'8px'",cursor:"'auto'"}},[e._v(" "+e._s(t.likes)+" ")])],1),n("span",{key:"comment-basic-dislike"},[n("a-tooltip",{attrs:{title:"Dislike"}},[n("a-icon",{attrs:{type:"dislike",theme:"disliked"===t.action?"filled":"outlined"},on:{click:function(n){return e.dislike(t)}}})],1),n("span",{staticStyle:{"padding-left":"'8px'",cursor:"'auto'"}},[e._v(" "+e._s(t.dislikes)+" ")])],1),n("span",{key:"comment-basic-reply-to",on:{click:function(n){return e.reply(t)}}},[e._v("Reply to")]),n("span",{key:"comment-basic-complain",on:{click:function(n){return e.info(t)}}},[e._v(" Complain ")]),t.spoiler?n("span",{key:"comment-basic-eye",on:{click:function(n){return e.spoiler(t)}}},[n("a-icon",{attrs:{type:"eye-invisible"}})],1):n("span",{on:{click:function(n){return e.spoiler(t)}}},[n("a-icon",{attrs:{type:"eye"}})],1)]),t.comments.length?n("a-collapse",{attrs:{bordered:!1},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[n("a-collapse-panel",{key:"1",attrs:{header:e.activeKey.length?"hide comments "+t.comments.length:"more comments "+t.comments.length}},[n("List",{attrs:{comments:t.comments},on:{like:e.like,dislike:e.dislike,reply:e.reply,spoiler:e.spoiler,handleReplyChange:e.handleReplyChange,handleReplySubmit:e.handleReplySubmit}})],1)],1):e._e(),t.reply?n("a-comment",[n("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"},slot:"avatar"}),n("div",{attrs:{slot:"content"},slot:"content"},[n("a-form-item",[n("a-textarea",{attrs:{rows:4,value:t.replyValue},on:{change:function(n){return e.handleReplyChange(n,t)}}})],1),n("a-form-item",[n("a-button",{attrs:{"html-type":"submit",type:"primary",loading:t.replySubmitting},on:{click:function(n){return e.handleReplySubmit(t)}}},[e._v(" Add Comment ")])],1)],1)],1):e._e()],2)],1)}}],null,!1,257464759)},[e.showLoadingMore?n("div",{style:{textAlign:"center",marginTop:"12px",height:"32px",lineHeight:"32px"},attrs:{slot:"loadMore"},slot:"loadMore"},[e.loadingMore?n("a-spin"):n("a-button",{on:{click:e.onLoadMore}},[e._v(" loading more ")])],1):e._e()]):e._e()},v=[],x={name:"List",props:["comments","loading","loadingMore","showLoadingMore"],data:function(){return{activeKey:[]}},methods:{like:function(e){this.$emit("like",e)},dislike:function(e){this.$emit("dislike",e)},reply:function(e){this.$emit("reply",e)},spoiler:function(e){this.$emit("spoiler",e)},handleReplyChange:function(e,t){this.$emit("handleReplyChange",e,t)},handleReplySubmit:function(e){this.$emit("handleReplySubmit",e)},onLoadMore:function(){this.$emit("onLoadMore")},info:function(e){this.$message.info("We are already processing your comment complaint ".concat(e.email))}}},w=x,z=n("2877"),S=Object(z["a"])(w,k,v,!1,null,null,null),O=S.exports,C=n("c1df"),M=n.n(C),_={name:"App",components:{List:O},mounted:function(){var e=this;this.getComments().then((function(t){e.setComments(t),e.loading=!1,e.showLoadingMore=e.comments.length<t.length}))},data:function(){return{comments:[],submitting:!1,value:"",loading:!0,loadingMore:!1,showLoadingMore:!0,moment:M.a}},methods:{onLoadMore:function(){var e=this;this.loadingMore=!0,this.getComments().then((function(t){e.setComments(t),e.loadingMore=!1,e.showLoadingMore=e.comments.length<t.length}))},setComments:function(e){this.comments=this.comments.concat(e.slice(this.comments.length,this.comments.length+12))},getComments:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://jsonplaceholder.typicode.com",e.next=3,fetch("".concat(t,"/comments"));case 3:if(n=e.sent,!n.ok){e.next=10;break}return e.next=7,n.json();case 7:return a=e.sent,s=a.map((function(e,t){return e=t%2===0?Object(y["a"])({avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",datetime:M()().fromNow(),likes:0,dislikes:0,action:null,reply:!1,comments:[],replyValue:"",replySubmitting:!1,spoiler:!0},e):Object(y["a"])({avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",datetime:M()().fromNow(),likes:0,dislikes:0,action:null,reply:!1,comments:[],replyValue:"",replySubmitting:!1,spoiler:!1},e),e})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),like:function(e){e.likes=1,e.dislikes=0,e.action="liked"},dislike:function(e){e.likes=0,e.dislikes=1,e.action="disliked"},reply:function(e){e.reply?(e.reply=!1,e.replyValue=""):e.reply=!0},spoiler:function(e){e.spoiler?e.spoiler=!1:e.spoiler=!0},handleSubmit:function(){var e=this;this.value&&(this.submitting=!0,setTimeout((function(){e.submitting=!1,e.comments=[{email:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",body:e.value,datetime:M()().fromNow(),likes:0,dislikes:0,action:null,reply:!1,comments:[],replyValue:"",replySubmitting:!1,spoiler:!1}].concat(Object(h["a"])(e.comments)),e.value=""}),1e3))},handleChange:function(e){this.value=e.target.value},handleReplySubmit:function(e){e.replyValue&&(e.replySubmitting=!0,setTimeout((function(){e.replySubmitting=!1,e.comments=[{email:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",body:e.replyValue,datetime:M()().fromNow(),likes:0,dislikes:0,action:null,reply:!1,comments:[],replyValue:"",replySubmitting:!1,spoiler:!1}].concat(Object(h["a"])(e.comments)),e.replyValue="",e.reply=!1}),1e3))},handleReplyChange:function(e,t){t.replyValue=e.target.value}}},L=_,R=(n("5c0b"),Object(z["a"])(L,b,j,!1,null,null,null)),V=R.exports,T=(n("202f"),f["a"].TextArea);p["a"].use(u["a"]),p["a"].use(m["a"]),p["a"].use(d["a"]),p["a"].use(c["a"]),p["a"].use(r["a"]),p["a"].use(l["a"]),p["a"].use(f["a"]),p["a"].use(i["b"]),p["a"].use(o["a"]),p["a"].use(s["a"]),p["a"].use(T),p["a"].config.productionTip=!1,p["a"].prototype.$message=a["a"],new p["a"]({render:function(e){return e(V)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ba4cb9bc.js.map