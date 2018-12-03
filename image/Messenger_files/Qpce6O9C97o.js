if (self.CavalryLogger) { CavalryLogger.start_js(["lECC8"]); }

__d("MNCommerceActionTypes",["keyMirrorRecursive"],(function a(b,c,d,e,f,g){"use strict";var h=c("keyMirrorRecursive")({RECEIPT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},SHIPMENT:{LOADED:null,LOAD_ERROR:null,RELOAD:null},DIALOG:{SHOW:null,HIDE:null},RETAIL_ITEM:{LOADED:null,LOAD_ERROR:null,RELOAD:null},PROMOTION_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},TRANSACTION_INVOICE:{LOADED:null,LOAD_ERROR:null,RELOAD:null},BOT_REVIEW_STATE:{LOADED:null,LOAD_ERROR:null,RELOAD:null}});f.exports=h}),null);
__d("RTCCallActionTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CALL:"CALL",CALL_SUCCESS:"CALL_SUCCESS",CALL_ERROR:"CALL_ERROR",INCOMING_CALL_SUCCESS:"INCOMING_CALL_SUCCESS",INIT:"INIT",RESET:"RESET",WAIT_FOR_USER_INPUT:"WAIT_FOR_USER_INPUT",SET_CALL_SUMMARY:"SET_CALL_SUMMARY",SET_MW_CALL_TYPE:"SET_MW_CALL_TYPE",SET_LAYOUT:"SET_LAYOUT",SET_DOMINANT_SPEAKER:"SET_DOMINANT_SPEAKER",SET_PINNED_SPEAKER:"SET_PINNED_SPEAKER",SET_USE_DOMINANT_SPEAKE_VIEW:"SET_USE_DOMINANT_SPEAKE_VIEW",SET_GRID_VIEW:"SET_GRID_VIEW",SET_STRIP_VIEW:"SET_STRIP_VIEW",INIT_THREAD:"INIT_THREAD",ON_PARTICIPANT_LEFT:"ON_PARTICIPANT_LEFT",ON_PARTICIPANTS_ADDED:"ON_PARTICIPANTS_ADDED",ADD_PARTICIPANTS_TO_RING:"ADD_PARTICIPANTS_TO_RING",JOIN:"JOIN",JOIN_SUCCESS:"JOIN_SUCCESS",JOIN_ERROR:"JOIN_ERROR",HANGUP:"HANGUP",HANGUP_SUCCESS:"HANGUP_SUCCESS",HANGUP_ERROR:"HANGUP_ERROR",ON_CONFERENCE_STATE:"ON_CONFERENCE_STATE",DISMISS:"DISMISS",END_CALL:"END_CALL",ON_JOIN_REQUEST_SENT:"ON_JOIN_REQUEST_SENT",ON_JOIN_RESPONSE:"ON_JOIN_RESPONSE",ON_SERVER_MEDIA_UPDATE_SUCCESS:"ON_SERVER_MEDIA_UPDATE_SUCCESS",ON_CLIENT_MEDIA_UPDATE_RESPONSE:"ON_CLIENT_MEDIA_UPDATE_RESPONSE",INIT_LOCAL_USER:"INIT_LOCAL_USER",INIT_REMOTE_USERS:"INIT_REMOTE_USERS",ADD_REMOTE_STREAM:"ADD_REMOTE_STREAM",REMOVE_REMOTE_STREAM:"REMOVE_REMOTE_STREAM",REMOVE_ALL_REMOTE_STREAMS:"REMOVE_ALL_REMOTE_STREAMS",SET_PREFERRED_REMOTE_STREAM:"SET_PREFERRED_REMOTE_STREAM",ADD_REMOTE_TRACK:"ADD_REMOTE_TRACK",REMOVE_REMOTE_TRACK:"REMOVE_REMOTE_TRACK",AUDIO_MUTED:"AUDIO_MUTED",AUDIO_UNMUTED:"AUDIO_UNMUTED",VIDEO_MUTED:"VIDEO_MUTED",VIDEO_UNMUTED:"VIDEO_UNMUTED",REMOTE_VIDEO_MUTED:"REMOTE_VIDEO_MUTED",REMOTE_VIDEO_UNMUTED:"REMOTE_VIDEO_UNMUTED",SELF_VIEW_COLLAPSED:"SELF_VIEW_COLLAPSED",SELF_VIEW_UNCOLLAPSED:"SELF_VIEW_UNCOLLAPSED",ADD_LOCAL_STREAM:"ADD_LOCAL_STREAM",REMOVE_LOCAL_STREAM:"REMOVE_LOCAL_STREAM",REPLACE_LOCAL_STREAM:"REPLACE_LOCAL_STREAM",REMOVE_ALL_LOCAL_STREAMS:"REMOVE_ALL_LOCAL_STREAMS",SET_PREFERRED_LOCAL_STREAM:"SET_PREFERRED_LOCAL_STREAM",ADD_LOCAL_SCREEN_STREAM:"ADD_LOCAL_SCREEN_STREAM",REMOVE_LOCAL_SCREEN_STREAM:"REMOVE_LOCAL_SCREEN_STREAM",REMOVE_ALL_LOCAL_SCREEN_STREAMS:"REMOVE_ALL_LOCAL_SCREEN_STREAMS",REPLACE_LOCAL_SCREEN_STREAM:"REPLACE_LOCAL_SCREEN_STREAM",ADD_REMOTE_SCREEN_STREAM:"ADD_REMOTE_SCREEN_STREAM",REMOVE_REMOTE_SCREEN_STREAM:"REMOVE_REMOTE_SCREEN_STREAM",TOGGLE_REMOTE_STREAM:"TOGGLE_REMOTE_STREAM",SUBMIT_RATING:"SUBMIT_RATING",SUBMIT_FEEDBACK:"SUBMIT_FEEDBACK",RATING_SHOWN:"RATING_SHOWN",FEEDBACK_SHOWN:"FEEDBACK_SHOWN",SET_END_CALL_REASON:"SET_END_CALL_REASON"})}),null);
__d("RTCP2PCallActionTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({P2P_DISMISS_NUX:"P2P_DISMISS_NUX",P2P_INIT_NUX_STATE:"P2P_INIT_NUX_STATE",P2P_MARK_NUX_VIEWED:"P2P_MARK_NUX_VIEWED",P2P_PROCESS_MESSAGE:"P2P_PROCESS_MESSAGE",P2P_SET_IS_CALLER:"P2P_SET_IS_CALLER",P2P_STAR_RATING_DONE:"P2P_STAR_RATING_DONE",POP_IN_SCREEN_CONTENT:"POP_IN_SCREEN_CONTENT",POP_OUT_SCREEN_CONTENT:"POP_OUT_SCREEN_CONTENT",SET_CALL_TYPE:"SET_CALL_TYPE",SET_CONNECTION_STATUS:"SET_CONNECTION_STATUS",SET_MULTIWAY_ESCALATION_SUPPORT:"SET_MULTIWAY_ESCALATION_SUPPORT",SET_REMOTE_SIGNALING_EXPERIMENTS:"SET_REMOTE_SIGNALING_EXPERIMENTS",SET_VIDEO_QUALITY:"SET_VIDEO_QUALITY"})}),null);
__d("RTCP2PConstants",[],(function a(b,c,d,e,f,g){"use strict";var h=Object.freeze({CONNECTED:"CONNECTED",CONNECTING:"CONNECTING",CONTACTING:"CONTACTING",DISCONNECTED:"DISCONNECTED",INIT:"INIT",RECONNECTING:"RECONNECTING",RINGING:"RINGING"});f.exports={ConnectionStatus:h}}),null);
__d("MessengerRTCFunnelLogger",["RTCP2PConstants","FunnelLogger","FBRTCConstants","URI","UserAgentData","RTCCallActionTypes","FBRTCCallControlActions","RTCP2PCallActionTypes"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("RTCP2PConstants").ConnectionStatus,i=c("FBRTCConstants").SignalingProtocol,j="WEB_MESSENGER_RTC_FUNNEL",k=c("FBRTCCallControlActions").Types,l=j+"_append",m=j+"_tags",n=j+"_end",o=null;function p(z){c("FunnelLogger").startFunnel(j);r([z]);q()}function q(){var z={bn:c("UserAgentData").browserName,bv:c("UserAgentData").browserVersion,os:c("UserAgentData").platformName,dn:c("URI").getRequestURI().getDomain().split(".").slice(-2).join(".")};Object.keys(z).forEach(function(A){c("FunnelLogger").addFunnelTag(j,A+":"+(z[A]||"unknown"))})}function r(z){if(window.opener&&window.opener.postMessage&&o){window.opener.postMessage({type:m,nonce:o,tags:z},window.location.origin);return}z.forEach(function(A){c("FunnelLogger").addFunnelTag(j,A)})}function s(z,A){if(window.opener&&window.opener.postMessage&&o){window.opener.postMessage({type:j+"_append",nonce:o,action:z,actionTag:A},window.location.origin);return}if(A===undefined)c("FunnelLogger").appendActionIfNew(j,z);else c("FunnelLogger").appendActionWithTag(j,z,A)}function t(z){if(window.opener&&window.opener.postMessage&&o){window.opener.postMessage({type:j+"_end",nonce:o,action:z},window.location.origin);return}if(z)s(z);c("FunnelLogger").endFunnel(j)}function u(z){o=z}function v(z){__p&&__p();var A=function A(event){__p&&__p();if(event.origin!==window.location.origin||!event.data||event.data.nonce!==z)return;if(event.data.type===l)s(event.data.action,event.data.actionTag);else if(event.data.type===m)r(event.data.tags);else if(event.data.type===n){t(event.data.action);window.removeEventListener("message",A)}};window.addEventListener("message",A)}function w(z,A){switch(z){case k.RECEIVED_SIGNALING_MESSAGE:break;case"END_CALL":s(z,A);t();break;default:s(z,A)}}function x(z,A){__p&&__p();switch(A.type){case c("RTCCallActionTypes").ON_CONFERENCE_STATE:case c("RTCCallActionTypes").SET_CALL_SUMMARY:case c("RTCCallActionTypes").SET_DOMINANT_SPEAKER:case c("RTCCallActionTypes").ON_SERVER_MEDIA_UPDATE_SUCCESS:case c("RTCCallActionTypes").SET_GRID_VIEW:case c("RTCCallActionTypes").SET_STRIP_VIEW:case c("RTCP2PCallActionTypes").SET_REMOTE_SIGNALING_EXPERIMENTS:case c("RTCP2PCallActionTypes").SET_CALL_TYPE:case c("RTCP2PCallActionTypes").P2P_INIT_NUX_STATE:break;case c("RTCP2PCallActionTypes").P2P_PROCESS_MESSAGE:var B=[];if(A.message&&!A.message.isRemoteVideoSupported())B.push("remove_video_unsupported");if(A.message&&A.message.isFromMobile())B.push("peer_on_mobile");else B.push("peer_on_web");r(B);break;case c("RTCP2PCallActionTypes").SET_CONNECTION_STATUS:s(A.connectionStatus);break;case c("RTCCallActionTypes").SET_END_CALL_REASON:s(A.type,A.endCallReason&&A.endCallReason.toStrName(true));setTimeout(t,1e3);break;case c("RTCCallActionTypes").INIT:if(A.protocol===i.P2P)r(["p2p","v2"]);break;case c("RTCCallActionTypes").SET_LAYOUT:s(A.type,A.layout);break;case c("RTCCallActionTypes").SET_MW_CALL_TYPE:s(A.type,A.callType);break;case c("RTCCallActionTypes").END_CALL:s(A.type,A.endCallReason);break;default:s(A.type)}return z}var y={appendAction:s,addFunnelTags:r,endFunnel:t,startFunnel:p,setWindowNonce:u,listenCrossWindowAction:v,logRTCCallAction:x,logRTCP2PV1Action:w};f.exports=y}),null);
__d("FBRTCAvailability",["ChannelConstants","PresenceStatus"],(function a(b,c,d,e,f,g){"use strict";var h={isCallable:function i(j){var k=c("PresenceStatus").getCapabilities(j),l=c("ChannelConstants").CAPABILITY_VOIP_INTEROP;return!!(k&l)}};f.exports=h}),null);
__d("FBRTCCallUIWrapper",["regeneratorRuntime","Bootloader","MessengerRTCFunnelLogger","UserAgent"],(function a(b,c,d,e,f,g){__p&&__p();var h=null,i={openGroupCallUI:function j(k,l,m,n,o,p){return c("regeneratorRuntime").async(function q(r){while(1)switch(r.prev=r.next){case 0:h=this._openWindow("Group Call");c("Bootloader").loadModules(["FBRTCCallUI"],function(s){s.openGroupCallUI(k,l,m,n,o,h,p)},"FBRTCCallUIWrapper");case 2:case"end":return r.stop()}},null,this)},openGroupCallURI:function j(k,l,m,n,o,p){return c("regeneratorRuntime").async(function q(r){while(1)switch(r.prev=r.next){case 0:h=this._openWindow("Group Call");c("Bootloader").loadModules(["FBRTCCallUI"],function(s){s.openGroupCallURI({conferenceName:k,callID:l,hasVideo:m,serverInfoData:n,trigger:o,callSummary:p,callWindow:h})},"FBRTCCallUIWrapper");case 2:case"end":return r.stop()}},null,this)},openAsCaller:function j(k,l,m,n){__p&&__p();if(!h&&window.rtcCallChildWindow){h=window.rtcCallChildWindow;window.rtcCallChildWindow=null}if(this._shouldFocusCallWindow(k)){h.focus();return}if(this._shouldCloseCallWindow())h.close();h=this._openWindow("Video Call");c("Bootloader").loadModules(["FBRTCCallUI"],function(o){o.openAsCaller(k,l,m,n,h)},"FBRTCCallUIWrapper")},openAsCallee:function j(k,l,m,n,o){h=this._openWindow("Video Call");c("Bootloader").loadModules(["FBRTCCallUI"],function(p){p.openAsCallee(k,l,m,n,o,h)},"FBRTCCallUIWrapper")},_shouldFocusCallWindow:function j(k){return h&&!h.closed&&h.rtcCallInProgessWith===k},_shouldCloseCallWindow:function j(){return h&&!h.closed&&!h.rtcCallInProgessWith},_openWindow:function j(k){var l=this._windowPosition(),m=["menubar=no","location=no","scrollbars=no","status=no","personalbar=no",l.height,l.width,l.top,l.left].join(",");if(this._isSparkBrowser())m="";var h=window.open("",k,m);window.callWindow=h;if(h)c("MessengerRTCFunnelLogger").appendAction("popup_window");else c("MessengerRTCFunnelLogger").endFunnel("popup_blocked");return h},_windowPosition:function j(){__p&&__p();var k=960,l=540,m=void 0,n=void 0,o=void 0,p=void 0;if(screen&&screen.width>1280){k=1280;l=720}if(window.innerWidth!==undefined){n=window.innerWidth;m=window.innerHeight}else{n=screen.width;m=screen.height}if(window.screenLeft!==undefined){o=window.screenLeft;p=window.screenTop}else{o=window.screenX;p=window.screenY}var q=Math.floor(n/2-k/2+o),r=Math.floor(m/2-l/2+p);return{height:"height="+l.toString(),width:"width="+k.toString(),top:"top="+r.toString(),left:"left="+q.toString()}},_isSparkBrowser:function j(){return c("UserAgent").isBrowser("Chrome < 34")&&c("UserAgent").isBrowser("Chrome > 33")}};f.exports=i}),null);
__d("FBRTCScreenSharingLogger",["Log","MarauderLogger","formatDate","keyMirror"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h="webrtc_screen_sharing",i=c("keyMirror")({screen_sharing_action:null,screen_sharing_error:null}),j=c("keyMirror")({PEER_ID:null,SESSION_ID:null,CONTEXT_TYPE:null,CONTENT:null}),k=c("keyMirror")({SCREEN_SHARING_TOGGLED:null,SCREEN_SHARING_CANCELLED:null,SCREEN_SHARING_ENABLED:null,SCREEN_SHARING_DISABLED:null,SCREEN_SHARING_EXT_DIALOG:null,SCREEN_SHARING_EXT_LINK:null,SCREEN_SHARING_DIALOG_SUCCESS:null,SCREEN_SHARING_DIALOG_CANCEL:null}),l=null;m.getInstance=function(){if(!l)l=new m();return l};m.prototype.logAction=function(n,o,p,q){var r={};r[i.screen_sharing_action]=p;r[j.PEER_ID]=n;r[j.SESSION_ID]=o;r[j.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1();r[j.CONTENT]=q;this.$FBRTCScreenSharingLogger2(i.screen_sharing_action,r);this.logToConsole(n,o,p)};m.prototype.logError=function(n,o,p){var q={};q[j.PEER_ID]=n;q[j.SESSION_ID]=o;q[j.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1();q[j.CONTENT]=p;this.$FBRTCScreenSharingLogger2(i.screen_sharing_error,q);this.logToConsole(n,o,p)};m.prototype.logToConsole=function(n,o,p){};m.prototype.$FBRTCScreenSharingLogger1=function(){return"p2p_video_call"};m.prototype.$FBRTCScreenSharingLogger2=function(n,o){c("MarauderLogger").log(n,h,o)};function m(){}m.Action=k;f.exports=m}),null);
__d("FBRTCVersionDetection",["UserAgent","UserAgentData"],(function a(b,c,d,e,f,g){__p&&__p();var h={isChrome:function i(){return c("UserAgent").isBrowser("Chrome")},isFirefox:function i(){return c("UserAgent").isBrowser("Firefox")},isChromium:function i(){return!!navigator.webkitGetUserMedia},webrtcVersion:function i(){if(this.isFirefox()||this.isChrome())return c("UserAgentData").browserVersion;if(this.isChromium()){var j=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return j!=null?parseInt(j[2],10):999}return 0}};f.exports=h}),null);
__d("FBRTCScreenSharingUtils",["Promise","FBRTCScreenSharingLogger","FBRTCStruct","FBRTCVersionDetection","RTCConfig","FBRTCSupport"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=new(c("FBRTCStruct"))(["UNKNOWN","INSTALLED"]),i=h.UNKNOWN,j={RECIPIENT:"SC_CONTENT_SCRIPT",isScreenSharingSupported:function k(){return c("RTCConfig").ScreenSharingGK},isGroupCallScreenSharingSupported:function k(){return c("RTCConfig").ScreenSharingToGroupGK},isSupportedBrowser:function k(){return c("FBRTCVersionDetection").isChrome()&&c("FBRTCVersionDetection").webrtcVersion()>=34},canUserReceiveScreenSharing:function k(){return c("FBRTCSupport").isOSSupported()&&c("FBRTCVersionDetection").isChromium()&&c("FBRTCVersionDetection").webrtcVersion()>=34},canPeerReceiveScreenSharing:function k(l){return l.remoteSupport("screen_sharing")||c("RTCConfig").ScreenSharingToMobileGK&&!l.remoteSupport("www")&&!l.remoteSupport("mweb")},isExtensionInstalled:function k(){return i===h.INSTALLED},getExtensionStatus:function k(){return i},checkExtensionInstalled:function k(){__p&&__p();if(this.isExtensionInstalled())return c("Promise").resolve();var l=void 0,m=new(c("Promise"))(function(n){__p&&__p();l=function o(p){var q=p.origin,r=p.data;if(q!=window.location.origin||!r.type)return;if(r.type==="SC_EXT_INSTALLED"){window.removeEventListener("message",l);i=h.INSTALLED;n()}};window.addEventListener("message",l)});return c("Promise").race([m,this._pokeExtension()])["catch"](function(n){window.removeEventListener("message",l);return c("Promise").reject(n)})},_pokeExtension:function k(){__p&&__p();var l=arguments.length<=0||arguments[0]===undefined?13:arguments[0];return new(c("Promise"))(function(m,n){var o=setInterval(function(){setTimeout(function(){if(i===h.UNKNOWN)window.postMessage({recipient:j.RECIPIENT,type:"SC_IS_EXT_INSTALLED",text:"is extension installed"},"*")});if(l>0)l--;else{clearInterval(o);n("extension unavailable")}},200)})},logFailedAttempt:function k(l,m){c("FBRTCScreenSharingLogger").getInstance().logAction(l,m,c("FBRTCScreenSharingLogger").Action.SCREEN_SHARING_TOGGLED,"feature not available")}};f.exports=j}),null);
__d("RTCSignalingExperiments",["FBRTCScreenSharingUtils","FBRTCSupport","FBRTCVersionDetection","Set","UserAgent"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){this.$RTCSignalingExperiments2=new(c("Set"))();this.$RTCSignalingExperiments1=new(c("Set"))(h.getLocal());if(j)this.$RTCSignalingExperiments2=new(c("Set"))(j)}h.prototype.getLocal=function(){return Array.from(this.$RTCSignalingExperiments1)};h.prototype.setRemote=function(j){if(!j)return this;return new h(j)};h.prototype.getRemote=function(){return Array.from(this.$RTCSignalingExperiments2)};h.prototype.support=function(j){return this.localSupport(j)&&this.remoteSupport(j)};h.prototype.localSupport=function(j){return this.$RTCSignalingExperiments1.has(j)};h.prototype.remoteSupport=function(j){return this.$RTCSignalingExperiments2.has(j)};h.getLocal=function(){__p&&__p();var j=[];if(c("UserAgent").isBrowser("Chrome")||c("UserAgent").isBrowser("Opera")||c("UserAgent").isBrowser("Firefox >= 38"))j.push("sdp_update");if(i())j.push("multiple_streams_plan_b");if(c("FBRTCScreenSharingUtils").canUserReceiveScreenSharing())j.push("screen_sharing");if(c("FBRTCSupport").isOSSupported())j.push("www");else j.push("mweb");return j};function i(){return(c("UserAgent").isBrowser("Chrome")||c("UserAgent").isBrowser("Opera"))&&c("FBRTCVersionDetection").webrtcVersion()>=34}f.exports=h}),null);
__d("FBRTCConfig",["CurrentUser","RTCSignalingExperiments"],(function a(b,c,d,e,f,g){__p&&__p();var h=false,i=false,j=0,k={},l={setConfig:function m(n,o,p,q,r){k=n;j=o;h=q;i=r},isVCEndpointCall:function m(){return h},canPeerUseV2:function m(){return i},getPeerID:function m(){return j},statsInterpreterConfig:function m(){return{rtt_weight:2,frr_weight:800,plr_weight:500,score_threshold:1e3,bad_score_count:3}},settingsEnabled:function m(){return k.enable_settings},shouldAutoDisableVideo:function m(){return false},unsupportedBrowserUrl:function m(){if(k.troubleshooting_urls&&k.troubleshooting_urls.unsupported_browser)return k.troubleshooting_urls.unsupported_browser;if(c("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function m(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_error)return k.troubleshooting_urls.user_media_error;if(c("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function m(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_permission_error)return k.troubleshooting_urls.user_media_permission_error;if(c("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},supportedSignalingExperiments:function m(){return c("RTCSignalingExperiments").getLocal()},isMessengerDotCom:function m(){return k.is_messenger_dot_com},useMessengerCallUI:function m(){return k.messenger_call_ui},shouldCreateDataChannel:function m(){return k.data_channel},disableURLManager:function m(){return k.disable_url_manager}};f.exports=l}),null);
__d("FBRTCUtils",["AsyncRequest","CollabCallTriggerType","CurrentUser","FBIDCheck","FBRTCConfig","FBRTCConstants","RTCConfig","emptyFunction","randomInt"],(function a(b,c,d,e,f,g){__p&&__p();var h=6e3,i=window.URL||window.webkitURL,j="setSinkId"in window.HTMLMediaElement.prototype,k="srcObject"in window.HTMLMediaElement.prototype,l="mozSrcObject"in window.HTMLMediaElement.prototype,m={attachMediaStream:function n(o,p){__p&&__p();if(o==null)return;if(k){o.srcObject=p;if(p)o.play();return}if(l){o.mozSrcObject=p;if(p)o.play();return}if(o.src)i.revokeObjectURL(o.src);o.src=p?i.createObjectURL(p):""},reattachMediaStream:function n(o,p){__p&&__p();if(k){o.srcObject=p.srcObject;o.play();return}if(l){o.mozSrcObject=p.mozSrcObject;o.play();return}o.src=p.src},generateRandomInt:function n(){return c("randomInt")(0,4294967294)+1},aboutEqual:function n(o,p){return o-p<.01&&p-o<.01},getUploadLogLevel:function n(o){return Math.max(this.getLocalUploadLogLevel(),o)},getLocalUploadLogLevel:function n(){return c("CurrentUser").isEmployee()?c("FBRTCConstants").UploadLogLevel.LL_DEBUG:c("FBRTCConstants").UploadLogLevel.LL_NONE},sendServerRequest:function n(o){var p=arguments.length<=1||arguments[1]===undefined?c("emptyFunction"):arguments[1],q=arguments.length<=2||arguments[2]===undefined?c("emptyFunction"):arguments[2],r=arguments.length<=3||arguments[3]===undefined?false:arguments[3],s=arguments.length<=4||arguments[4]===undefined?h:arguments[4],t=arguments.length<=5||arguments[5]===undefined?{}:arguments[5],u=new(c("AsyncRequest"))().setURI(o).setData(t).setAllowCrossPageTransition(true).setHandler(p).setErrorHandler(q).setTimeoutHandler(s,function(){q()});if(r)u.setOption("asynchronous_DEPRECATED",false);u.send()},supportsSetSink:function n(){return j},isPeerVCEndpoint:function n(o){var p=c("FBRTCConfig").isVCEndpointCall();return p!==undefined?p:!!o&&!c("FBIDCheck").isUser_deprecated(o)&&c("RTCConfig").CollabVCEndpointsVideoCallGK},isCollabTrigger:function n(o){return o===c("CollabCallTriggerType").QUICK_DIAL||o===c("CollabCallTriggerType").MEETING_ROOM_PAGE_PROFILE}};f.exports=m}),null);
__d("FBRTCCore",["invariant","MessengerRTCFunnelLogger","Bootloader","FBRTCAvailability","FBRTCCallUIWrapper","FBRTCSupport","FBRTCUtils"],(function a(b,c,d,e,f,g,h){__p&&__p();var i=false,j={startOutgoingCall:function k(l,m,n){__p&&__p();var o=arguments.length<=3||arguments[3]===undefined?false:arguments[3];!/\D/.test(l)||h(0);if(i)return;c("MessengerRTCFunnelLogger").addFunnelTags([n?"audio_only":"video","p2p"]);i=true;setTimeout(function(){i=false},1e3);if(o&&!c("FBRTCSupport").isCollabSupported())c("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage","CollabMessengerLogger"],function(q,r){q.showForUnsupportedCollabCall();r.logBrowserNotSupported({peerID:l});c("MessengerRTCFunnelLogger").endFunnel("unsupported_browser")},"FBRTCCore");else if(!c("FBRTCSupport").isWebrtcSupported())c("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage"],function(q){q.showForOutgoingCall();c("MessengerRTCFunnelLogger").endFunnel("unsupported_browser")},"FBRTCCore");else{var p=c("FBRTCUtils").generateRandomInt();c("FBRTCCallUIWrapper").openAsCaller(l,p,m,n)}},startGroupCall:function k(l){__p&&__p();var m=l.conferenceName,n=l.hasVideo,o=l.serverInfoData,p=l.trigger,q=l.usersToRing,r=q===undefined?[]:q;if(i)return;c("MessengerRTCFunnelLogger").addFunnelTags([n?"video":"audio_only","group"]);i=true;setTimeout(function(){i=false},1e3);if(!c("FBRTCSupport").isGroupCallWebtrcSupported()){c("Bootloader").loadModules(["MessengerRTCGroupCallUnsupportedBrowserDialogController"],function(s){s.render({hasVideo:n});c("MessengerRTCFunnelLogger").endFunnel("unsupported_browser")},"FBRTCCore");return}c("FBRTCCallUIWrapper").openGroupCallUI(m,c("FBRTCUtils").generateRandomInt(),r,n,p,o)},isAvailableForWebrtcCalling:function k(l){return c("FBRTCAvailability").isCallable(l)},shouldEnableVideoCalling:function k(){return c("FBRTCSupport").isOSSupported()},startScreenSharingSession:function k(l,m){__p&&__p();!/\D/.test(l)||h(0);if(i)return;i=true;setTimeout(function(){i=false},1e3);if(!c("FBRTCSupport").isWirelessScreenSharingSupported()){c("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage","CollabMessengerLogger"],function(n,o){n.showForUnsupportedCollabScreenSharing();o.logBrowserNotSupported({peerID:l})},"FBRTCCore");return}c("Bootloader").loadModules(["RTCWirelessScreenSharingWindowHandler"],function(n){n.open(l,c("FBRTCUtils").generateRandomInt(),m)},"FBRTCCore")}};f.exports=j}),null);
__d("FBRTCLogger",["ChannelManager","FBRTCConsoleLogger","MarauderLogger","RTCConfig","VideoCallTypedLogger","pageID"],(function a(b,c,d,e,f,g){__p&&__p();var h="sent_message",i="received_message",j="send_succeeded",k="send_failed",l="info",m="call_action",n="client_event",o="client_error",p="type",q="msg_id",r="ack_msg_id",s="call_id",t="from",u="to",v="content",w="tag",x="peer_id",y="error_code",z="trigger",A="endcallstats",B="channel_session_id",C=null;D.getInstance=function(){"use strict";if(!C)C=new D();return C};D.prototype.logToConsole=function(E){"use strict";this.$FBRTCLogger1(null,null,"Console",E)};D.prototype.logReceivedMessage=function(E,F,G){"use strict";__p&&__p();var H={};H[t]=E;H[s]=F;H[p]=G.type;H[q]=G.msg_id;if(G.sdp)H[v]=G.sdp;if(G.ack_id)H[r]=G.ack_id;if(c("RTCConfig").rtc_message_logging){var I=G.type||G.msgType;new(c("VideoCallTypedLogger"))().setIsClient(true).setEvent("p2p_message_receive").setMessageType(I).setPeerID(E).setCallID(F?F.toString():null).log()}this.$FBRTCLogger2(i,H);this.$FBRTCLogger1(E,F,"Received",G.type+", "+G.msg_id)};D.prototype.logSentMessage=function(E,F,G){"use strict";__p&&__p();var H={};H[u]=E;H[s]=F;H[p]=G.type;H[q]=G.msg_id;if(G.sdp)H[v]=G.sdp;if(G.ack_id)H[r]=G.ack_id;this.$FBRTCLogger2(h,H);this.$FBRTCLogger1(E,F,"Sent",G.type+", "+G.msg_id)};D.prototype.logSentMessageSuccess=function(E,F,G,H){"use strict";var I={};I[x]=E;I[s]=F;I[p]=G;I[q]=H;this.$FBRTCLogger2(j,I)};D.prototype.logSentMessageFailure=function(E,F,G,H,I){"use strict";var J={};J[x]=E;J[s]=F;J[p]=G;J[q]=H;J[y]=I;this.$FBRTCLogger2(k,J);this.$FBRTCLogger1(E,F,"Send Failed",G+", "+I)};D.prototype.logCallAction=function(E,F,G,H,I){"use strict";__p&&__p();var J={};J[x]=E;J[s]=F;J[m]=G;J[v]=H;if(I)J[z]=I;this.$FBRTCLogger2(m,J);this.$FBRTCLogger1(E,F,"CallAction",G+", "+JSON.stringify(H))};D.prototype.logEvent=function(E,F,event){"use strict";var G={};G[x]=E;G[s]=F;G[v]=event;this.$FBRTCLogger2(n,G);this.$FBRTCLogger1(E,F,"Event",JSON.stringify(event))};D.prototype.logInfo=function(E,F,G){"use strict";var H={};H[x]=E;H[s]=F;H[v]=G;this.$FBRTCLogger2(l,H);this.$FBRTCLogger1(E,F,"Info",JSON.stringify(G))};D.prototype.logError=function(E,F,G){"use strict";var H={};H[x]=E;H[s]=F;H[v]=G;this.$FBRTCLogger2(o,H);this.$FBRTCLogger1(E,F,"Error",JSON.stringify(G))};D.prototype.logErrorWithoutID=function(E){"use strict";this.logError(null,null,E)};D.prototype.logEndCallSummary=function(E){"use strict";__p&&__p();if(!E)return;var F={};F[x]=E.peerID;F[s]=E.callID;F[w]=A;F[v]=E.toString();F[B]=c("ChannelManager").getCompleteConfig().sessionID;var G=E.getExtraInfo();for(var H in G)if(Object.prototype.hasOwnProperty.call(G,H))F[H]=G[H];this.$FBRTCLogger2(l,F);this.$FBRTCLogger1(E.peerID,E.callID,"Call Summary",JSON.stringify(F))};D.prototype.$FBRTCLogger2=function(E,F){"use strict";F.page_id=c("pageID");c("FBRTCConsoleLogger").getInstance().getLogHistory().log(E,F);c("MarauderLogger").log(E,c("FBRTCConsoleLogger").MODULE_NAME,F)};D.prototype.$FBRTCLogger1=function(E,F,G,H){"use strict";c("FBRTCConsoleLogger").getInstance().log(H,E,F,G)};function D(){"use strict"}D.CallAction={START_CALL:"start_call",RECEIVED_CALL:"received_call",ANSWER_CALL:"answer_call",END_CALL:"end_call",DENIED_PERMISSION:"denied_permission",SET_MUTE:"set_mute",SET_VIDEO_ON:"set_video_on",SET_SELF_VIEW_ON:"set_self_view_on",SET_FULLSCREEN_ON:"set_fullscreen_on",START_SKYPE:"start_skype",TRY_NEW:"try_new",OPEN_POPUP:"open_popup",POPUP_OPENED:"popup_opened",AUTO_DISABLE_VIDEO:"auto_disable_video",FAILED_GETTING_URI:"failed_getting_uri",OLD_URI:"old_uri",USER_SETTINGS_CHANGED:"user_settings_changed"};D.Trigger={ADMIN_MESSAGE:"admin_message",CHAT_TAB_ICON:"chat_tab_icon",CHAT_TAB_ICON_TOUR:"chat_tab_icon_tour",CHAT_TAB_VOICE_ICON:"chat_tab_voice_icon",SKYPE_DEPRECATION_DIALOG:"skype_deprecation_dialog",REDIAL_BUTTON:"redial_button",RETURN_CALL:"return_call",WEB_MESSENGER:"web_messenger",POPUP_CALL_START_BUTTON:"popup_start_call_button",TIMELINE_PROFILE:"timeline_profile",UNKNOWN:"unknown",RESET_CALL:"install_screen_sharing_ext_dialog",MULTIWAY_CHAT_TAB_SHEET_JOIN_CALL_BUTTON:"multiway_chat_tab_sheet_join_call_button",MULTIWAY_POPUP_START_CALL_BUTTON:"multiway_popup_start_call_button",MULTIWAY_THREAD_HEADER_AUDIO_BUTTON:"multiway_thread_header_audio_button",MULTIWAY_THREAD_HEADER_VIDEO_BUTTON:"multiway_thread_header_video_button",MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_AUDIO_BUTTON:"multiway_thread_header_join_audio_call_audio_button",MULTIWAY_THREAD_HEADER_JOIN_AUDIO_CALL_VIDEO_BUTTON:"multiway_thread_header_join_audio_call_video_button",MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_AUDIO_BUTTON:"multiway_thread_header_join_video_call_audio_button",MULTIWAY_THREAD_HEADER_JOIN_VIDEO_CALL_VIDEO_BUTTON:"multiway_thread_header_join_video_call_video_button",MULTIWAY_THREAD_LIST_JOIN_CALL_BUTTON:"multiway_thread_list_join_call_button"};D.Key={DEVICE_INFO:"device_info",RATING:"rating5",RATING_SHOWN:"rating_shown",SURVEY_CHOICE:"survey_choice",SURVEY_DETAILS:"survey_details",SURVEY_SHOWN:"survey_shown",INITIATED_BY_PAGE_ID:"initiated_by_page_id",PEER_IS_MOBILE:"peer_is_mobile",SCREEN_DURATION:"screen_duration"};f.exports=D}),null);
__d("FBRTCCallabilityActions",["keyMirror"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h=c("keyMirror")({CALLABILITY_FETCHED:null,CALLABILITY_FETCH_ERROR:null});function i(j){this.$FBRTCCallabilityActions1=j}i.prototype.callabilityFetched=function(j,k){this.$FBRTCCallabilityActions1.dispatch({type:h.CALLABILITY_FETCHED,userID:j,callability:k})};i.prototype.callabilityFetchError=function(j){this.$FBRTCCallabilityActions1.dispatch({type:h.CALLABILITY_FETCH_ERROR,userID:j})};i.Types=h;f.exports=i}),null);
__d("XRTCCallabilityController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("/rtc/callability/",{user_id:{type:"FBID",required:true}})}),null);
__d("FBRTCCallabilityDataManager",["AsyncRequest","FBRTCCallabilityActions","TimeSlice","XRTCCallabilityController"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(i){this.$FBRTCCallabilityDataManager1=new(c("FBRTCCallabilityActions"))(i)}h.prototype.fetchCallability=function(i){c("TimeSlice").guard(function(){var j=c("XRTCCallabilityController").getURIBuilder().setFBID("user_id",i).getURI(),k=this.$FBRTCCallabilityDataManager2.bind(this,i),l=this.$FBRTCCallabilityDataManager3.bind(this,i);new(c("AsyncRequest"))().setURI(j).setHandler(k).setErrorHandler(l).setAllowCrossPageTransition(true).send()}.bind(this),"Chat Tab RTC Callability Check",{propagationType:c("TimeSlice").PropagationType.ORPHAN})()};h.prototype.$FBRTCCallabilityDataManager2=function(i,j){this.$FBRTCCallabilityDataManager1.callabilityFetched(i,j.payload)};h.prototype.$FBRTCCallabilityDataManager3=function(i,j){this.$FBRTCCallabilityDataManager1.callabilityFetchError(i)};f.exports=h}),null);
__d("RTCCallabilityStore",["fbt","Cache","FBRTCCallabilityActions","FBRTCCallabilityDataManager","FluxStore","MercuryThreadInfo","RTCConfig"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j,k=.5,l=5;i=babelHelpers.inherits(m,c("FluxStore"));j=i&&i.prototype;function m(n){j.constructor.call(this,n);this.$RTCCallabilityStore2=new(c("FBRTCCallabilityDataManager"))(n);this.$RTCCallabilityStore1=new(c("Cache"))()}m.prototype.__onDispatch=function(n){var o=n.type;switch(o){case c("FBRTCCallabilityActions").Types.CALLABILITY_FETCHED:var p=n.userID,q=n.callability;this.$RTCCallabilityStore1.set(p,{callable:q.is_callable,isBlocked:q.is_blocked},null,q.is_callable?l:k);this.__emitChange();break;case c("FBRTCCallabilityActions").Types.CALLABILITY_FETCH_ERROR:this.$RTCCallabilityStore1.set(n.userID,{callable:false,isBlocked:false},null,k);this.__emitChange();break}};m.prototype.isCallable=function(n,o){var p=o?o.message_count>0&&o.folder==="inbox":false,q=this.fetchUserFromCache(n);return q&&q.callable||p};m.prototype.isBlocked=function(n,o){var p=o?c("MercuryThreadInfo").canReply(o):true,q=this.fetchUserFromCache(n);return q&&q.isBlocked||!p};m.prototype.fetchUserFromCache=function(n){if(!this.$RTCCallabilityStore1.has(n)){this.$RTCCallabilityStore2.fetchCallability(n);this.$RTCCallabilityStore1.set(n,{callable:false,isBlocked:false},null,k)}return this.$RTCCallabilityStore1.get(n)};m.prototype.callButtonTooltip=function(n,o){var p=arguments.length<=2||arguments[2]===undefined?true:arguments[2],q=arguments[3];if(!this.isBlocked(n,q)&&(p||this.isCallable(n)))return h._("D\u00e9marrez une discussion vid\u00e9o avec {shortname}",[h.param("shortname",o)]);return h._("{shortname} est actuellement indisponible pour un appel vid\u00e9o",[h.param("shortname",o)])};m.prototype.voiceCallButtonTooltip=function(n,o){var p=arguments.length<=2||arguments[2]===undefined?true:arguments[2],q=arguments[3];if(!this.isBlocked(n,q)&&(p||this.isCallable(n)))return h._("Commencer un appel vocal avec {shortname}",[h.param("shortname",o)]);return h._("{shortname} est actuellement indisponible pour un appel vocal",[h.param("shortname",o)])};f.exports=m}),null);
__d("FBRTCCallabilityStore",["FBRTCDispatcher","RTCCallabilityStore"],(function a(b,c,d,e,f,g){"use strict";f.exports=new(c("RTCCallabilityStore"))(c("FBRTCDispatcher"))}),null);
__d("RTCCallState",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NO_ONGOING_CALL:"NO_ONGOING_CALL",AUDIO_GROUP_CALL:"AUDIO_GROUP_CALL",VIDEO_GROUP_CALL:"VIDEO_GROUP_CALL"})}),null);