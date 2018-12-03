if (self.CavalryLogger) { CavalryLogger.start_js(["1F6Il"]); }

__d("CreditCardTypeEnum",[],(function a(b,c,d,e,f,g){f.exports={DINERSCLUB:64,AMERICANEXPRESS:65,DISCOVER:68,JCB:74,MASTERCARD:77,CUP:80,UNKNOWN:85,VISA:86}}),null);
__d("FacebookAppIDs",[],(function a(b,c,d,e,f,g){f.exports={FACEBOOK_FOR_ANDROID:74769995908,FACEBOOK_FOR_EMERGING_MARKET_ANDROID:275254692598279,TURDUCKEN:400954310366822,FACEBOOK_MEDIA_EFFECTS:1779302845618373,MOST_RECENT_FEED:608920319153834,SAVED_FOR_LATER:586254444758776,TRANSLATIONS:4329892722,MESSENGERDOTCOM:772021112871879,WWW:256281040558,FBPAGES:2530096808,ADS_PAYMENT:123097351040126,EVENTS:2344061033,BUSINESS_ACCOUNTS:436761779744620,WORKPLACE_BILLING:1350397358363828,WORKPLACE_FOR_EVERY_PHONE:1263749867021676,WORKPLACE_DESKTOP:267999183646265,CHATPROXY_WEB:229895473858072}}),null);
__d("FeedPlaceHolderStory.react",["cx","Locale","React","XUICard.react","joinClasses"],(function a(b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(k,c("React").Component);j=i&&i.prototype;k.prototype.render=function(){"use strict";return c("React").createElement(c("XUICard.react"),{className:c("joinClasses")("_2iwp",this.props.className)},c("React").createElement("div",{className:(c("Locale").isRTL()?"direction_rtl":"")+" _2iwo"},c("React").createElement("div",{className:"_2iwq"},c("React").createElement("div",{className:"_2iwr"}),c("React").createElement("div",{className:"_2iws"}),c("React").createElement("div",{className:"_2iwt"}),c("React").createElement("div",{className:"_2iwu"}),c("React").createElement("div",{className:"_2iwv"}),c("React").createElement("div",{className:"_2iww"}),c("React").createElement("div",{className:"_2iwx"}),c("React").createElement("div",{className:"_2iwy"}),c("React").createElement("div",{className:"_2iwz"}),c("React").createElement("div",{className:"_2iw-"}),c("React").createElement("div",{className:"_2iw_"}),c("React").createElement("div",{className:"_2ix0"}))))};function k(){"use strict";i.apply(this,arguments)}f.exports=k}),null);
__d("MessengerMessageRequestsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(){this.clear()}h.prototype.log=function(){c("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$MessengerMessageRequestsTypedLogger1,c("Banzai").BASIC)};h.prototype.logVital=function(){c("GeneratedLoggerUtils").log("logger:MessengerMessageRequestsLoggerConfig",this.$MessengerMessageRequestsTypedLogger1,c("Banzai").VITAL)};h.prototype.clear=function(){this.$MessengerMessageRequestsTypedLogger1={};return this};h.prototype.updateData=function(j){this.$MessengerMessageRequestsTypedLogger1=babelHelpers["extends"]({},this.$MessengerMessageRequestsTypedLogger1,j);return this};h.prototype.setAction=function(j){this.$MessengerMessageRequestsTypedLogger1.action=j;return this};h.prototype.setAppID=function(j){this.$MessengerMessageRequestsTypedLogger1.appid=j;return this};h.prototype.setAppversion=function(j){this.$MessengerMessageRequestsTypedLogger1.appversion=j;return this};h.prototype.setClienttime=function(j){this.$MessengerMessageRequestsTypedLogger1.clienttime=j;return this};h.prototype.setContainermodule=function(j){this.$MessengerMessageRequestsTypedLogger1.containermodule=j;return this};h.prototype.setCountry=function(j){this.$MessengerMessageRequestsTypedLogger1.country=j;return this};h.prototype.setEntryPoint=function(j){this.$MessengerMessageRequestsTypedLogger1.entry_point=j;return this};h.prototype.setExtraClientData=function(j){this.$MessengerMessageRequestsTypedLogger1.extra_client_data=j;return this};h.prototype.setFolderType=function(j){this.$MessengerMessageRequestsTypedLogger1.folder_type=j;return this};h.prototype.setName=function(j){this.$MessengerMessageRequestsTypedLogger1.name=j;return this};h.prototype.setSurface=function(j){this.$MessengerMessageRequestsTypedLogger1.surface=j;return this};h.prototype.setThreadID=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_id=j;return this};h.prototype.setThreadKey=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_key=j;return this};h.prototype.setThreadKeyList=function(j){this.$MessengerMessageRequestsTypedLogger1.thread_key_list=j;return this};h.prototype.setVC=function(j){this.$MessengerMessageRequestsTypedLogger1.vc=j;return this};h.prototype.updateExtraData=function(j){j=c("nullthrows")(c("GeneratedLoggerUtils").serializeMap(j));c("GeneratedLoggerUtils").checkExtraDataFieldNames(j,i);this.$MessengerMessageRequestsTypedLogger1=babelHelpers["extends"]({},this.$MessengerMessageRequestsTypedLogger1,j);return this};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l)};var i={action:true,appid:true,appversion:true,clienttime:true,containermodule:true,country:true,entry_point:true,extra_client_data:true,folder_type:true,name:true,surface:true,thread_id:true,thread_key:true,thread_key_list:true,vc:true};f.exports=h}),null);
__d("messengerIterateEmoji",["MessengerSupportedEmoji"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j,k,l){__p&&__p();var m=String(i);while(m){var n=c("MessengerSupportedEmoji").getEmojiMatchObj(m);if(n){var o=n.offset+n.length,p=m.substr(0,n.is_supported?n.offset:o);k(p);if(n.is_supported)j(n.emoji_str,n.emoji_key,l);var q=m.substr(o);m=q}else break}k(m)}f.exports=h}),null);
__d("messengerIterateEmoticons",["EmoticonEmojiList"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i,j,k,l){__p&&__p();var m,n,o,p,q,r=String(i);while(r){var s=c("EmoticonEmojiList").regexp.exec(r);if(s){m=s.index+s[1].length;n=r.substr(0,m);o=s[2];p=r.substr(m+o.length);q=c("EmoticonEmojiList").names[o];k(n);j(o,q,l);r=p}else break}k(r)}f.exports=h}),null);
__d("MessengerTextWithEmoticons.react",["cx","fbt","BaseTextWithDecoration.react","EmojiImageURL","EmoticonEmojiList","Image.react","React","messengerIterateEmoji","messengerIterateEmoticons"],(function a(b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k,l=c("React").PropTypes;function m(q,r,s){var t=s?128:16,u=c("EmojiImageURL").getMessengerURL(r,t),v=s?"_1ift _5m3a":"_1ift _2560";return c("React").createElement(c("Image.react"),{alt:q,className:v,src:u})}function n(q,r,s){var t=s?128:16,u=c("EmoticonEmojiList").emote2emojis[r],v=u?c("EmojiImageURL").getMessengerURL(u,t):null;if(v){var w=String.fromCodePoint(parseInt(u,t)),x=s?"_1ift _5m3a":"_1ift _2560";return c("React").createElement(c("Image.react"),{alt:w,className:x,src:v})}var y=i._("\u00e9motic\u00f4ne {emoticonName}",[i.param("emoticonName",r)]);return c("React").createElement("span",{"aria-label":y},q)}function o(q,r,s){return function(t,u,v){var w=function w(x,y,s){u(r(x,y,s))};q(String(t),w,v,s)}}j=babelHelpers.inherits(p,c("React").Component);k=j&&j.prototype;p.prototype.shouldComponentUpdate=function(q){return q.text!==this.props.text};p.prototype.render=function(){var q=[o(c("messengerIterateEmoji"),m,this.props.customSize),o(c("messengerIterateEmoticons"),n,this.props.customSize)];return c("React").createElement(c("BaseTextWithDecoration.react"),babelHelpers["extends"]({},this.props,{text:this.props.text,decorators:q}))};function p(){j.apply(this,arguments)}p.propTypes={text:l.string,customSize:l.bool};f.exports=p}),null);
__d("MercuryThreadTitle.react",["fbt","MercuryIDs","MessengerTextWithEmoticons.react","MercuryParticipantListRenderer","MercuryParticipants","React","TextWithEmoticons.react"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i=c("React").PropTypes,j=c("React").createClass({displayName:"MercuryThreadTitle",propTypes:{isNewThread:i.bool,maxTitle:i.number,thread:i.object.isRequired,viewer:i.string.isRequired,showUnreadCount:i.bool,useShortName:i.bool,useAndSeparator:i.bool},getDefaultProps:function k(){return{isNewThread:false,showUnreadCount:false,useShortName:false,useAndSeparator:false}},getInitialState:function k(){return{participantNames:""}},componentDidMount:function k(){this._renderParticipantsList(this.props)},componentWillReceiveProps:function k(l){this._renderParticipantsList(l)},render:function k(){return c("React").createElement("span",{className:this.props.className},this.props.thread.name?this._renderThreadTitle():this.state.participantNames,this.props.children)},getTitle:function k(){return this.state.participantNames},_renderThreadTitle:function k(){var l=this.props.thread,m=this.props.maxTitle?this.props.maxTitle<l.name.length?l.name.slice(0,this.props.maxTitle)+"...":l.name:l.name,n=c("React").createElement(c("MessengerTextWithEmoticons.react"),{renderEmoticons:true,renderEmoji:true,text:m});if(!l.unread_count||!this.props.showUnreadCount)return n;return this._renderTitleWithUnreadCount(n,l.unread_count)},_renderParticipantsList:function k(l){__p&&__p();if(l.thread.name)return;this.setState({participantNames:""});var m=c("MercuryIDs").getParticipantIDFromUserID(l.viewer),n=l.thread.participants||[];if(n.length>1)n=n.filter(function(o){return o!=m});c("MercuryParticipants").getMulti(n,function(o){if(!this.isMounted())return;var p=n.map(function(s){return o[s]}),q=l.thread.custom_nickname?{}:null,r=c("MessengerTextWithEmoticons.react");if(q)for(var s in l.thread.custom_nickname)q[s]=c("React").createElement(r,{renderEmoticons:true,renderEmoji:true,text:l.thread.custom_nickname[s]});var t=new(c("MercuryParticipantListRenderer"))().setUseShortName(l.useShortName).setUseAndSeparator(l.useAndSeparator).setIsNewThread(l.isNewThread).setNickname(q).renderParticipantList(p),u=l.showUnreadCount&&l.thread.unread_count?this._renderTitleWithUnreadCount(t,l.thread.unread_count):t;this.setState({participantNames:u})}.bind(this))},_renderTitleWithUnreadCount:function k(l,m){return h._("{conversation-title} ({unread-count})",[h.param("conversation-title",l),h.param("unread-count",m)])}});f.exports=j}),null);
__d("resolveWindow",[],(function a(b,c,d,e,f,g){__p&&__p();function h(i){__p&&__p();var j=window,k=i.split(".");try{for(var l=0;l<k.length;l++){var m=k[l],n=/^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(m);if(n)j=j.frames[n[1]];else if(m==="opener"||m==="parent"||m==="top")j=j[m];else return null}}catch(o){return null}return j}f.exports=h}),null);
__d("XD",["Arbiter","DOM","DOMDimensions","Log","PHPQuerySerializer","URI","Queue","isFacebookURI","isInIframe","resolveWindow"],(function a(b,c,d,e,f,g){__p&&__p();var h="fb_xdm_frame_"+location.protocol.replace(":",""),i={_callbacks:[],_opts:{autoResize:false,allowShrink:true,channelUrl:null,hideOverflow:false,resizeTimeout:1e3,resizeWidth:false,expectResizeAck:false,resizeAckTimeout:6e3},_lastResizeAckId:0,_resizeCount:0,_resizeTimestamp:0,_shrinker:null,init:function k(l){this._opts=babelHelpers["extends"]({},this._opts,l);if(this._opts.autoResize)this._startResizeMonitor();c("Arbiter").subscribe("Connect.Unsafe.resize.ack",function(m,n){if(!n.id)n.id=this._resizeCount;if(n.id>this._lastResizeAckId)this._lastResizeAckId=n.id}.bind(this))},getQueue:function k(){if(!this._queue)this._queue=new(c("Queue"))();return this._queue},setChannelUrl:function k(l){this.getQueue().start(function(m){return this.send(m,l)}.bind(this))},send:function k(l,m){__p&&__p();m=m||this._opts.channelUrl;if(!m){this.getQueue().enqueue(l);return}var n={},o=new(c("URI"))(m);Object.assign(n,l,c("PHPQuerySerializer").deserialize(o.getFragment()));var p=new(c("URI"))(n.origin).getOrigin(),q=c("resolveWindow")(n.relation.replace(/^parent\./,"")),r=50,s=function s(){var t=q.frames[h];try{t.proxyMessage(c("PHPQuerySerializer").serialize(n),p)}catch(u){if(--r)setTimeout(s,100);else c("Log").warn('No such frame "'+h+'" to proxyMessage to')}};s()},_computeSize:function k(){__p&&__p();var l=c("DOMDimensions").getDocumentDimensions(),m=0;if(this._opts.resizeWidth){var n=document.body;if(n.clientWidth<n.scrollWidth)m=l.width;else{var o=n.childNodes;for(var p=0;p<o.length;p++){var q=o[p],r=q.offsetLeft+q.offsetWidth;if(r>m)m=r}}m=Math.max(m,i.forced_min_width)}l.width=m;if(this._opts.allowShrink){if(!this._shrinker)this._shrinker=c("DOM").create("div");c("DOM").appendContent(document.body,this._shrinker);l.height=Math.max(this._shrinker.offsetTop,0)}return l},_startResizeMonitor:function k(){__p&&__p();var l,m=document.documentElement;if(this._opts.hideOverflow){m.style.overflow="hidden";document.body.style.overflow="hidden"}var n=function(){__p&&__p();var o=this._computeSize(),p=Date.now(),q=this._lastResizeAckId<this._resizeCount&&p-this._resizeTimestamp>this._opts.resizeAckTimeout;if(!l||this._opts.expectResizeAck&&q||this._opts.allowShrink&&l.width!=o.width||!this._opts.allowShrink&&l.width<o.width||this._opts.allowShrink&&l.height!=o.height||!this._opts.allowShrink&&l.height<o.height){l=o;this._resizeCount++;this._resizeTimestamp=p;var r={type:"resize",height:o.height,ackData:{id:this._resizeCount}};if(o.width&&o.width!=0)r.width=o.width;try{if(c("isFacebookURI")(new(c("URI"))(document.referrer))&&c("isInIframe")()&&window.name&&window.parent.location&&window.parent.location.toString&&c("isFacebookURI")(new(c("URI"))(window.parent.location))){var s=window.parent.document.getElementsByTagName("iframe");for(var t=0;t<s.length;t=t+1)if(s[t].name==window.name){if(this._opts.resizeWidth)s[t].style.width=r.width+"px";s[t].style.height=r.height+"px"}}this.send(r)}catch(u){this.send(r)}}}.bind(this);n();setInterval(n,this._opts.resizeTimeout)}},j=babelHelpers["extends"]({},i);f.exports.UnverifiedXD=j;f.exports.XD=i;b.UnverifiedXD=j;b.XD=i}),null);
__d("UnverifiedXD",["XD"],(function a(b,c,d,e,f,g){var h=c("XD").UnverifiedXD;f.exports=h}),null);
__d("ShareDialogAudienceTypes",["getObjectValues","ShareModeConst"],(function a(b,c,d,e,f,g){__p&&__p();var h={OWN:c("ShareModeConst").SELF_POST,PERSON:c("ShareModeConst").FRIEND,GROUP:c("ShareModeConst").GROUP,EVENT:c("ShareModeConst").EVENT,PAGE:c("ShareModeConst").PAGE,FUNDRAISER:c("ShareModeConst").FUNDRAISER,MESSAGE:c("ShareModeConst").MESSAGE,SILENT_DISCO:c("ShareModeConst").SILENT_DISCO},i=c("getObjectValues")(h);function j(k){return i.some(function(l){return l===k})}f.exports=h;f.exports.ALL=i;f.exports.isValid=j;f.exports.propType=function(k,l){if(!j(k[l]))throw new Error("Invalid audience "+k[l])}}),null);
__d("getNormalizedClientRect",["getDocumentScrollElement"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){__p&&__p();var j=i.getBoundingClientRect(),k=0,l=0,m=c("getDocumentScrollElement")(i.ownerDocument),n=m.getBoundingClientRect();if(n.left>0)k=-n.left;else{var o=m.scrollWidth+n.left,p=n.width;if(p>o)k=p-o}if(n.top>0)l=-n.top;return{bottom:j.bottom+l,height:j.height,left:j.left+k,right:j.right+k,top:j.top+l,width:j.width}}f.exports=h}),null);
__d("StickyArea",["cx","CSS","DOM","DOMQuery","Event","Run","Style","ViewportBounds","getNormalizedClientRect","getOverlayZIndex","getStyleProperty","removeFromArray","throttle"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=[],j=null,k=null,l=c("throttle").acrossTransitions(o,1e3),m="$$StickyArea_scrollListener",n="$$StickyArea_scrollListenerCount";function o(){i.sort(function(u,v){var w=u.getNode(),x=v.getNode();if(w.compareDocumentPosition)return 3-(w.compareDocumentPosition(x)&6);else return w.sourceIndex-x.sourceIndex})}function p(u,v,w){var x=u.getPlaceholder(),y=u.getNode(),z=c("Style").get(y,"float"),A=u.getData();if(A.placeholderWidth!==v||A.placeholderHeight!==w||A.placeholderFloat!==z){c("Style").apply(x,{"float":z,height:w+"px",width:v+"px"});A.placeholderHeight=w;A.placeholderWidth=v}if(y.nextSibling!==x)c("DOM").insertAfter(y,x)}function q(u,v){var w=u.getData();if(w.fixed!==v){c("Style").apply(u.getNode(),w.styles);c("CSS").conditionShow(u.getPlaceholder(),v);c("CSS").conditionClass(u.getNode(),"_1a1e",v);c("Event").fire(u.getNode(),"change");w.fixed=v}}function r(u,v){if(!u)return 0;else if(v.right<=u.rect.left||v.left>=u.rect.right)return r(u.prev,v);else return u.bottom}function s(){__p&&__p();var u=0,v=i.length,w=100,x=null;function y(z,A){__p&&__p();var B=w;while(u<v){var C=i[u],D=C.getNode(),E=C._scrollTarget;if(A&&!c("DOMQuery").contains(A,D))break;w=Math.max(B,C.getZIndex());var F=C.getData(),G=D.parentNode,H=F.styles;if(G==null){u++;continue}for(var I in H)H[I]="";q(C,false);var J=D.offsetHeight,K=parseFloat(c("getStyleProperty")(D,"width"))||D.offsetWidth,L=E!==window?E.getBoundingClientRect().top:0,M=c("getNormalizedClientRect")(D),N=r(z||(E===window?x:null),M)+C.getOffset(),O=M.top-L;if(O<=N){H.width=K+"px";var P=parseInt(c("Style").get(G,"padding-bottom"),10),Q=c("getNormalizedClientRect")(G);if(Q.bottom-P>N+J||!C.getIsBoundToContainer()){var R=parseInt(c("Style").get(D,"margin-left"),10);H.position="fixed";H.bottom="auto";H.top=N+L+"px";H.left=M.left-R+"px"}else{if(!F.parent||G!==F.parent){if(c("Style").get(G,"position")==="static")c("Style").set(G,"position","relative");F.parent=G}H.position="absolute";H.top="auto";H.bottom=P+"px";var S=parseInt(c("Style").get(G,"border-left-width"),10);H.left=M.left-Q.left-S+"px"}p(C,K,J);q(C,true)}u++;var T={bottom:N+J,prev:z,rect:M},U=0;if(!C.getIsBoundToContainer()){x=T;U=100}y(T,G);var V=C.getZIndexOverride()||w+++U;c("Style").set(D,"z-index",V)}}y(null,null)}function t(u,v,w){__p&&__p();var x=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];"use strict";this._isDestroyed=false;this._node=u;this._data={fixed:false,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}};this._offset=w;this._boundToContainer=x.boundToContainer!==false;if(x.stickTo===t.stickTo.SCROLL_PARENT)this._scrollTarget=c("Style").getScrollParent(u.parentNode)||window;else this._scrollTarget=window;this._zIndexOverride=x.zIndexOverride;c("CSS").addClass(u,"_k");if(!v)c("Run").onLeave(this.destroy.bind(this));if(!this._scrollTarget[m]){this._scrollTarget[m]=c("Event").listen(this._scrollTarget,"scroll",function(){l();s()});this._scrollTarget[n]=1}else this._scrollTarget[n]++;if(!i.length){j=c("Event").listen(window,"resize",function(){l();s()});k=c("ViewportBounds").subscribe("change",function(){l();s()})}i.push(this);t.reflow()}t.prototype.destroy=function(){"use strict";__p&&__p();if(this._isDestroyed)return;c("removeFromArray")(i,this);this._scrollTarget[n]--;if(this._scrollTarget[n]===0){this._scrollTarget[m].remove();this._scrollTarget[m]=null}if(!i.length){j.remove();j=null;k.unsubscribe();k=null}if(this._placeholder)c("DOM").remove(this._placeholder);var u=0;for(var v in this._data.styles){this._data.styles[v]="";u++}if(u)c("Style").apply(this._node,this._data.styles);this._isDestroyed=true};t.prototype.getData=function(){"use strict";return this._data};t.prototype.getNode=function(){"use strict";return this._node};t.prototype.getOffset=function(){"use strict";return this._offset||0};t.prototype.getPlaceholder=function(){"use strict";if(!this._placeholder)this._placeholder=c("DOM").create("div");return this._placeholder};t.prototype.getIsBoundToContainer=function(){"use strict";return this._boundToContainer};t.prototype.getZIndexOverride=function(){"use strict";return this._zIndexOverride};t.prototype.getZIndex=function(){"use strict";if(!this._zIndex)this._zIndex=c("getOverlayZIndex")(this._node);return this._zIndex};t.prototype.setOffset=function(u){"use strict";this._offset=u};t.reflow=c("throttle").acrossTransitions(function(){o();s()},100);t.stickTo={SCROLL_PARENT:"SCROLL_PARENT",WINDOW:"WINDOW"};f.exports=t}),null);
__d("ContextualLayerHideOnScrollOut",["Event","SubscriptionsHandler"],(function a(b,c,d,e,f,g){__p&&__p();function h(i){"use strict";this.$ContextualLayerHideOnScrollOut1=i}h.prototype.enable=function(){"use strict";if(!this.$ContextualLayerHideOnScrollOut2){this.$ContextualLayerHideOnScrollOut2=new(c("SubscriptionsHandler"))();this.$ContextualLayerHideOnScrollOut2.addSubscriptions(this.$ContextualLayerHideOnScrollOut1.subscribe("contextchange",this.$ContextualLayerHideOnScrollOut3.bind(this)),this.$ContextualLayerHideOnScrollOut1.subscribe("show",this.$ContextualLayerHideOnScrollOut4.bind(this)),this.$ContextualLayerHideOnScrollOut1.subscribe("hide",this.$ContextualLayerHideOnScrollOut5.bind(this)))}};h.prototype.disable=function(){"use strict";if(this.$ContextualLayerHideOnScrollOut2){this.$ContextualLayerHideOnScrollOut2.release();this.$ContextualLayerHideOnScrollOut2=undefined}this.$ContextualLayerHideOnScrollOut5()};h.prototype.$ContextualLayerHideOnScrollOut4=function(){"use strict";if(!this.$ContextualLayerHideOnScrollOut6){this.$ContextualLayerHideOnScrollOut7=this.$ContextualLayerHideOnScrollOut1.getContextScrollParent();if(this.$ContextualLayerHideOnScrollOut7===window)return;this.$ContextualLayerHideOnScrollOut6=c("Event").listen(this.$ContextualLayerHideOnScrollOut7,"scroll",this.$ContextualLayerHideOnScrollOut8.bind(this))}};h.prototype.$ContextualLayerHideOnScrollOut5=function(){"use strict";if(this.$ContextualLayerHideOnScrollOut6){this.$ContextualLayerHideOnScrollOut6.remove();this.$ContextualLayerHideOnScrollOut6=undefined;this.$ContextualLayerHideOnScrollOut7=undefined}};h.prototype.$ContextualLayerHideOnScrollOut8=function(){"use strict";var i=this.$ContextualLayerHideOnScrollOut1.getContent().getBoundingClientRect(),j=this.$ContextualLayerHideOnScrollOut7.getBoundingClientRect(),k=i.bottom<=j.top||i.top>=j.bottom,l=i.right<=j.left||i.left>=j.right;if(k||l)this.$ContextualLayerHideOnScrollOut1.hide()};h.prototype.$ContextualLayerHideOnScrollOut3=function(){"use strict";this.detach();if(this.$ContextualLayerHideOnScrollOut1.isShown())this.attach()};f.exports=h}),null);
__d("CreditCardFormParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ACCOUNT_ID:"account_id",ACCOUNT_COUNTRY_CODE:"account_country_code",APP_ID:"app_id",CARD_EXPIRATION:"exp",CARD_FBID:"cc_fbid",CARD_ID:"cc_id",CARD_TYPE:"cardType",CITY:"city",CONTEXT_ID:"context_id",COUNTRY:"country",CSC_LENGTH:"csc_length",EMAIL:"email",FIRST_NAME:"firstName",TRACKING_ID:"tracking_id",JSFAIL_SOURCE:"jsfail_source",KEYPRESS_TIMES:"kpts",LAST_NAME:"lastName",MONTH:"month",STATE:"state",STREET:"street",STREET_2:"street2",VALIDATE_ADDRESS:"validate_address",VALIDATE_NAME:"validate_name",VALIDATE_ZIP:"validate_zip",YEAR:"year",ZIP:"zip",VALIDATOR_CHECKS:"checks",CARD_NUMBER:"creditCardNumber",CSC:"csc",CARD_NUMBER_FIRST_6:"creditCardNumber_first6",CARD_NUMBER_LAST_4:"creditCardNumber_last4",CARD_NUMBER_TOKEN:"creditCardNumber_token",CSC_TOKEN:"csc_token",AUTH_LEVEL_FLAG:"auth_level",AUTH_AMOUNT:"auth_amount",AUTH_CURRENCY:"auth_currency",AUTO_EXPAND_AUTH_LEVEL_FLAG:"auto_expand_auth_level",PAYMENT_ITEM_TYPE:"payment_item_type",COMBINED_PAYMENT_TYPE:"combined_payment_type",RECEIVER_ID:"receiver_id",CREDENTIAL_ID:"credential_id",IS_STORED_BALANCE:"is_stored_balance",IS_CHECKOUT_ELIGIBLE:"is_checkout_eligible",CHECKOUT_SAVE_CC_WITH_AUTH:"checkout_save_cc_with_auth",CHECKOUT_FUND_AMOUNT:"checkout_fund_amount",FLOW_PLACEMENT:"flow_placement",FLOW_TYPE:"flow_type",STORED_BALANCE_STATUS:"stored_balance_status",SESSION_ID:"session_id"})}),null);
__d("CreditCardTypeField",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({UNKNOWN:"unknown",VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"american_express",JCB:"jcb",DINERS_CLUB:"diners_club",CUP:"cup"})}),null);
__d("HintsObjectiveTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SAFE:"safe",UNSAFE:"unsafe",UNSUPPORTED:"unsupported"})}),null);
__d("XPaymentsCreditCardMutationType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CREATE:"create",UPDATE:"update",CACHE_CVV:"cache_cvv"})}),null);
__d("XPaymentsCreditCardMutatorParam",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({AUTH_LOG_ID:"auth_log_id",MUTATION_TYPE:"mutation_type",CARD_FBID:"cc_fbid",CACHE_TOKEN:"cache_token",ERRORS:"errors",GENERAL_ERROR:"general",FIELD_ERRORS:"fields",ERROR_CODE:"code",ERROR_MSG:"message",ERROR_TITLE:"title"})}),null);
__d("MessengerLightweightActionUtils",["MercuryAttachmentType"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(l){return!!(l&&l.attach_type===c("MercuryAttachmentType").SHARE&&l.share&&l.share.target&&l.share.target.lwa_type)}function i(l){var m=l.attachments;return!!(m&&m.length===1&&h(m[0]))}function j(l){return l.attachments[0].share.title}function k(l){return l[0].share.title}f.exports={isLWAMessage:i,isLWAAttachment:h,getCollapsedLWAText:j,getLWASnippetText:k}}),null);
__d("PaymentMethodUtils",["fbt","ix","CreditCardTypeEnum","CreditCardTypeField"],(function a(b,c,d,e,f,g,h,i){__p&&__p();var j=16,k=4,l=[{pattern:/^5[1-5]|^2(2(2[1-9]|[3-9])|[3-6]|7([01]|20))/,name:"mc",cscDigits:3,digits:16,supported:true,code:77,type:c("CreditCardTypeField").MASTERCARD},{pattern:/^4/,name:"visa",cscDigits:3,digits:16,supported:true,code:86,type:c("CreditCardTypeField").VISA},{pattern:/^3[47]/,name:"amex",cscDigits:4,digits:15,supported:true,code:65,type:c("CreditCardTypeField").AMERICAN_EXPRESS},{pattern:/^35(2[8-9]|[3-8])/,name:"jcb",cscDigits:3,digits:16,supported:true,code:74,type:c("CreditCardTypeField").JCB},{pattern:/^62/,name:"cup",cscDigits:3,digits:16,supported:true,code:80,type:"china_union_pay"},{pattern:/^(6011|65|64[4-9])/,name:"disc",cscDigits:3,digits:16,supported:true,code:68,type:c("CreditCardTypeField").DISCOVER},{pattern:/^30[0-5]/,name:"diners",digits:14,cscDigits:3,supported:false,code:64,type:c("CreditCardTypeField").DINERS_CLUB},{name:"unknown",pattern:null,digits:16,cscDigits:3,supported:false,code:85,type:c("CreditCardTypeField").UNKNOWN}],m=function m(o){return o.replace(/[iIl]/g,"1").replace(/[Oo]/g,"0").replace(/[^\d]/gi,"")},n={getCardType:function o(p){p=m(p);p=p.substr(0,6);for(var q=0;q<l.length;q++)if(l[q].pattern&&p.match(l[q].pattern))return l[q];return l[l.length-1]},getCardTypeFromFieldType:function o(p){var q=l.find(function(q){return p===q.type})||l[l.length-1];return q},getCardTypeFromCode:function o(p){for(var q=0;q<l.length;q++)if(p==l[q].code)return l[q];return null},isValidCCNumber:function o(p){p=m(p);var q=n.getCardType(p);if(q.digits!==p.length)return false;if(!q.supported)return false;return n.isValidLuhn(p)},isValidLuhn:function o(p){__p&&__p();p=m(p);var q=p.split("").reverse(),r="";for(var s=0;s<q.length;s++){var t=parseInt(q[s],10);if(s%2!==0)t=t*2;r=r+t}var u=0;for(s=0;s<r.length;s++)u=u+parseInt(r.charAt(s),10);return!!(u!==0&&u%10===0)},getMaxCardLength:function o(p){return j},getMaxCSCLength:function o(){return k},getImageForCard:function o(p){return this.getImageForCardType(p.name)},getImageForCardType:function o(p){switch(p){case"visa":return i("95533");case"mc":return i("95531");case"amex":return i("95528");case"disc":return i("95529");case"jcb":return i("95530");default:return i("95526")}},getImageForPayPal:function o(){return i("95532")},getCreditCardString:function o(p){switch(p){case c("CreditCardTypeEnum").VISA:return h._("Visa");case c("CreditCardTypeEnum").MASTERCARD:return h._("Mastercard");case c("CreditCardTypeEnum").DISCOVER:return h._("Discover");case c("CreditCardTypeEnum").AMERICANEXPRESS:return h._("Amex");case c("CreditCardTypeEnum").JCB:return h._("JCB");case c("CreditCardTypeEnum").DINERSCLUB:return h._("Diners");default:return h._("Carte de cr\u00e9dit")}}};f.exports=n}),null);
__d("PaymentTokenProxyUtils",["CurrentEnvironment","URI"],(function a(b,c,d,e,f,g){__p&&__p();var h={getURI:function i(j){__p&&__p();var k=arguments.length<=1||arguments[1]===undefined?null:arguments[1],l=new(c("URI"))("/ajax/payment/token_proxy.php").setDomain(window.location.hostname).setProtocol("https").addQueryData(j),m=l.getDomain().split(".");if(m.indexOf("secure")<0){m.splice(1,0,"secure");if(k==="www"||k==="secure"){if(m[0]!=="secure")m.shift()}else if(k!==null)if(m[0]==="secure")m.splice(0,0,k);else m[0]=k;else if(m[0]=="www")m.shift();l.setDomain(m.join("."))}if(c("CurrentEnvironment").messengerdotcom){var n=l.getDomain();n=n.replace("messenger.com","facebook.com");l.setDomain(n)}return l}};f.exports=h}),null);
__d("XPaymentsCreditCardMutatorController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/payments/credit_card/mutator/{mutation_type}/",{mutation_type:{type:"Enum",enumType:1}})}),null);
__d("XShareDialogSubmitController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/share/dialog/submit/",{post_id:{type:"Int"},share_type:{type:"Int"},url:{type:"String"},audience_type:{type:"String"},owner_id:{type:"Int"},app_id:{type:"Int"},message:{type:"String"},shared_ad_id:{type:"Int"},sharer_id:{type:"Int"},source:{type:"String"},composer_session_id:{type:"String"},audience_targets:{type:"IntVector"},album_id:{type:"Int"},ephemeral_ttl_mode:{type:"Int"},tagged_people:{type:"IntVector"},tagged_place:{type:"Int"},tagged_action:{type:"Int"},tagged_object:{type:"Int"},tagged_object_str:{type:"String"},tagged_action_icon:{type:"Int"},tagged_feed_topics:{type:"StringVector"},attribution:{type:"Int"},privacy:{type:"String"},messaging_tags:{type:"StringVector"},ft:{type:"HackType"},internalextra:{type:"StringToStringMap"},internal_preview_image_id:{type:"Int"},share_now:{type:"Bool",defaultValue:false},is_forced_reshare_of_post:{type:"Bool",defaultValue:false},is_throwback_post:{type:"Bool",defaultValue:false},targeted_privacy_data:{type:"HackType"},unpublished_content_type:{type:"Enum",enumType:0},branded_content_repost_root:{type:"Int"},share_to_group_as_page:{type:"Bool",defaultValue:false},shared_to_group_id:{type:"Int"},civic_product_source:{type:"String"},holiday_card_source:{type:"Enum",enumType:1},shared_from_post_id:{type:"Int"},silent_disco_friends:{type:"IntVector"},silent_disco_audience_id:{type:"Int"},silent_disco_audience_type:{type:"Enum",enumType:1}})}),null);