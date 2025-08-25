(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function PT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var hp={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1;function kT(){if(g1)return Vl;g1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return Vl.Fragment=e,Vl.jsx=n,Vl.jsxs=n,Vl}var y1;function jT(){return y1||(y1=1,hp.exports=kT()),hp.exports}var g=jT(),fp={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1;function LT(){if(v1)return xe;v1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function A(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,B={};function G(D,ne,oe){this.props=D,this.context=ne,this.refs=B,this.updater=oe||P}G.prototype.isReactComponent={},G.prototype.setState=function(D,ne){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ne,"setState")},G.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function K(){}K.prototype=G.prototype;function ie(D,ne,oe){this.props=D,this.context=ne,this.refs=B,this.updater=oe||P}var te=ie.prototype=new K;te.constructor=ie,H(te,G.prototype),te.isPureReactComponent=!0;var le=Array.isArray,ue={H:null,A:null,T:null,S:null,V:null},be=Object.prototype.hasOwnProperty;function V(D,ne,oe,re,ge,Ce){return oe=Ce.ref,{$$typeof:r,type:D,key:ne,ref:oe!==void 0?oe:null,props:Ce}}function x(D,ne){return V(D.type,ne,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function O(D){var ne={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(oe){return ne[oe]})}var N=/\/+/g;function k(D,ne){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):ne.toString(36)}function I(){}function dt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(ne){D.status==="pending"&&(D.status="fulfilled",D.value=ne)},function(ne){D.status==="pending"&&(D.status="rejected",D.reason=ne)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function We(D,ne,oe,re,ge){var Ce=typeof D;(Ce==="undefined"||Ce==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(Ce){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case r:case e:we=!0;break;case b:return we=D._init,We(we(D._payload),ne,oe,re,ge)}}if(we)return ge=ge(D),we=re===""?"."+k(D,0):re,le(ge)?(oe="",we!=null&&(oe=we.replace(N,"$&/")+"/"),We(ge,ne,oe,"",function($n){return $n})):ge!=null&&(R(ge)&&(ge=x(ge,oe+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(N,"$&/")+"/")+we)),ne.push(ge)),1;we=0;var Ot=re===""?".":re+":";if(le(D))for(var Je=0;Je<D.length;Je++)re=D[Je],Ce=Ot+k(re,Je),we+=We(re,ne,oe,Ce,ge);else if(Je=A(D),typeof Je=="function")for(D=Je.call(D),Je=0;!(re=D.next()).done;)re=re.value,Ce=Ot+k(re,Je++),we+=We(re,ne,oe,Ce,ge);else if(Ce==="object"){if(typeof D.then=="function")return We(dt(D),ne,oe,re,ge);throw ne=String(D),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return we}function $(D,ne,oe){if(D==null)return D;var re=[],ge=0;return We(D,re,"","",function(Ce){return ne.call(oe,Ce,ge++)}),re}function ae(D){if(D._status===-1){var ne=D._result;ne=ne(),ne.then(function(oe){(D._status===0||D._status===-1)&&(D._status=1,D._result=oe)},function(oe){(D._status===0||D._status===-1)&&(D._status=2,D._result=oe)}),D._status===-1&&(D._status=0,D._result=ne)}if(D._status===1)return D._result.default;throw D._result}var de=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ze(){}return xe.Children={map:$,forEach:function(D,ne,oe){$(D,function(){ne.apply(this,arguments)},oe)},count:function(D){var ne=0;return $(D,function(){ne++}),ne},toArray:function(D){return $(D,function(ne){return ne})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},xe.Component=G,xe.Fragment=n,xe.Profiler=o,xe.PureComponent=ie,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ue,xe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ue.H.useMemoCache(D)}},xe.cache=function(D){return function(){return D.apply(null,arguments)}},xe.cloneElement=function(D,ne,oe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var re=H({},D.props),ge=D.key,Ce=void 0;if(ne!=null)for(we in ne.ref!==void 0&&(Ce=void 0),ne.key!==void 0&&(ge=""+ne.key),ne)!be.call(ne,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&ne.ref===void 0||(re[we]=ne[we]);var we=arguments.length-2;if(we===1)re.children=oe;else if(1<we){for(var Ot=Array(we),Je=0;Je<we;Je++)Ot[Je]=arguments[Je+2];re.children=Ot}return V(D.type,ge,void 0,void 0,Ce,re)},xe.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},xe.createElement=function(D,ne,oe){var re,ge={},Ce=null;if(ne!=null)for(re in ne.key!==void 0&&(Ce=""+ne.key),ne)be.call(ne,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ge[re]=ne[re]);var we=arguments.length-2;if(we===1)ge.children=oe;else if(1<we){for(var Ot=Array(we),Je=0;Je<we;Je++)Ot[Je]=arguments[Je+2];ge.children=Ot}if(D&&D.defaultProps)for(re in we=D.defaultProps,we)ge[re]===void 0&&(ge[re]=we[re]);return V(D,Ce,void 0,void 0,null,ge)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(D){return{$$typeof:p,render:D}},xe.isValidElement=R,xe.lazy=function(D){return{$$typeof:b,_payload:{_status:-1,_result:D},_init:ae}},xe.memo=function(D,ne){return{$$typeof:y,type:D,compare:ne===void 0?null:ne}},xe.startTransition=function(D){var ne=ue.T,oe={};ue.T=oe;try{var re=D(),ge=ue.S;ge!==null&&ge(oe,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(ze,de)}catch(Ce){de(Ce)}finally{ue.T=ne}},xe.unstable_useCacheRefresh=function(){return ue.H.useCacheRefresh()},xe.use=function(D){return ue.H.use(D)},xe.useActionState=function(D,ne,oe){return ue.H.useActionState(D,ne,oe)},xe.useCallback=function(D,ne){return ue.H.useCallback(D,ne)},xe.useContext=function(D){return ue.H.useContext(D)},xe.useDebugValue=function(){},xe.useDeferredValue=function(D,ne){return ue.H.useDeferredValue(D,ne)},xe.useEffect=function(D,ne,oe){var re=ue.H;if(typeof oe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(D,ne)},xe.useId=function(){return ue.H.useId()},xe.useImperativeHandle=function(D,ne,oe){return ue.H.useImperativeHandle(D,ne,oe)},xe.useInsertionEffect=function(D,ne){return ue.H.useInsertionEffect(D,ne)},xe.useLayoutEffect=function(D,ne){return ue.H.useLayoutEffect(D,ne)},xe.useMemo=function(D,ne){return ue.H.useMemo(D,ne)},xe.useOptimistic=function(D,ne){return ue.H.useOptimistic(D,ne)},xe.useReducer=function(D,ne,oe){return ue.H.useReducer(D,ne,oe)},xe.useRef=function(D){return ue.H.useRef(D)},xe.useState=function(D){return ue.H.useState(D)},xe.useSyncExternalStore=function(D,ne,oe){return ue.H.useSyncExternalStore(D,ne,oe)},xe.useTransition=function(){return ue.H.useTransition()},xe.version="19.1.1",xe}var _1;function am(){return _1||(_1=1,fp.exports=LT()),fp.exports}var L=am();const Qs=PT(L);var dp={exports:{}},Pl={},pp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function UT(){return E1||(E1=1,(function(r){function e($,ae){var de=$.length;$.push(ae);e:for(;0<de;){var ze=de-1>>>1,D=$[ze];if(0<o(D,ae))$[ze]=ae,$[de]=D,de=ze;else break e}}function n($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ae=$[0],de=$.pop();if(de!==ae){$[0]=de;e:for(var ze=0,D=$.length,ne=D>>>1;ze<ne;){var oe=2*(ze+1)-1,re=$[oe],ge=oe+1,Ce=$[ge];if(0>o(re,de))ge<D&&0>o(Ce,re)?($[ze]=Ce,$[ge]=de,ze=ge):($[ze]=re,$[oe]=de,ze=oe);else if(ge<D&&0>o(Ce,de))$[ze]=Ce,$[ge]=de,ze=ge;else break e}}return ae}function o($,ae){var de=$.sortIndex-ae.sortIndex;return de!==0?de:$.id-ae.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],y=[],b=1,S=null,A=3,P=!1,H=!1,B=!1,G=!1,K=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function le($){for(var ae=n(y);ae!==null;){if(ae.callback===null)s(y);else if(ae.startTime<=$)s(y),ae.sortIndex=ae.expirationTime,e(m,ae);else break;ae=n(y)}}function ue($){if(B=!1,le($),!H)if(n(m)!==null)H=!0,be||(be=!0,k());else{var ae=n(y);ae!==null&&We(ue,ae.startTime-$)}}var be=!1,V=-1,x=5,R=-1;function O(){return G?!0:!(r.unstable_now()-R<x)}function N(){if(G=!1,be){var $=r.unstable_now();R=$;var ae=!0;try{e:{H=!1,B&&(B=!1,ie(V),V=-1),P=!0;var de=A;try{t:{for(le($),S=n(m);S!==null&&!(S.expirationTime>$&&O());){var ze=S.callback;if(typeof ze=="function"){S.callback=null,A=S.priorityLevel;var D=ze(S.expirationTime<=$);if($=r.unstable_now(),typeof D=="function"){S.callback=D,le($),ae=!0;break t}S===n(m)&&s(m),le($)}else s(m);S=n(m)}if(S!==null)ae=!0;else{var ne=n(y);ne!==null&&We(ue,ne.startTime-$),ae=!1}}break e}finally{S=null,A=de,P=!1}ae=void 0}}finally{ae?k():be=!1}}}var k;if(typeof te=="function")k=function(){te(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,dt=I.port2;I.port1.onmessage=N,k=function(){dt.postMessage(null)}}else k=function(){K(N,0)};function We($,ae){V=K(function(){$(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function($){switch(A){case 1:case 2:case 3:var ae=3;break;default:ae=A}var de=A;A=ae;try{return $()}finally{A=de}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function($,ae){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var de=A;A=$;try{return ae()}finally{A=de}},r.unstable_scheduleCallback=function($,ae,de){var ze=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?ze+de:ze):de=ze,$){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=de+D,$={id:b++,callback:ae,priorityLevel:$,startTime:de,expirationTime:D,sortIndex:-1},de>ze?($.sortIndex=de,e(y,$),n(m)===null&&$===n(y)&&(B?(ie(V),V=-1):B=!0,We(ue,de-ze))):($.sortIndex=D,e(m,$),H||P||(H=!0,be||(be=!0,k()))),$},r.unstable_shouldYield=O,r.unstable_wrapCallback=function($){var ae=A;return function(){var de=A;A=ae;try{return $.apply(this,arguments)}finally{A=de}}}})(mp)),mp}var b1;function zT(){return b1||(b1=1,pp.exports=UT()),pp.exports}var gp={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1;function BT(){if(T1)return $t;T1=1;var r=am();function e(m){var y="https://react.dev/errors/"+m;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,y,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:m,containerInfo:y,implementation:b}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,y){if(m==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$t.createPortal=function(m,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(m,y,null,b)},$t.flushSync=function(m){var y=f.T,b=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=y,s.p=b,s.d.f()}},$t.preconnect=function(m,y){typeof m=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(m,y))},$t.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},$t.preinit=function(m,y){if(typeof m=="string"&&y&&typeof y.as=="string"){var b=y.as,S=p(b,y.crossOrigin),A=typeof y.integrity=="string"?y.integrity:void 0,P=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?s.d.S(m,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:A,fetchPriority:P}):b==="script"&&s.d.X(m,{crossOrigin:S,integrity:A,fetchPriority:P,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$t.preinitModule=function(m,y){if(typeof m=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=p(y.as,y.crossOrigin);s.d.M(m,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(m)},$t.preload=function(m,y){if(typeof m=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,S=p(b,y.crossOrigin);s.d.L(m,b,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$t.preloadModule=function(m,y){if(typeof m=="string")if(y){var b=p(y.as,y.crossOrigin);s.d.m(m,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(m)},$t.requestFormReset=function(m){s.d.r(m)},$t.unstable_batchedUpdates=function(m,y){return m(y)},$t.useFormState=function(m,y,b){return f.H.useFormState(m,y,b)},$t.useFormStatus=function(){return f.H.useHostTransitionStatus()},$t.version="19.1.1",$t}var w1;function qT(){if(w1)return gp.exports;w1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gp.exports=BT(),gp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1;function HT(){if(S1)return Pl;S1=1;var r=zT(),e=am(),n=qT();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),t;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var E=!1,T=h.child;T;){if(T===a){E=!0,a=h,l=d;break}if(T===l){E=!0,l=h,a=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===a){E=!0,a=d,l=h;break}if(T===l){E=!0,l=d,a=h;break}T=T.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),te=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case G:return"Profiler";case B:return"StrictMode";case ue:return"Suspense";case be:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case P:return"Portal";case te:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return i=t.displayName||null,i!==null?i:dt(t.type)||"Memo";case x:i=t._payload,t=t._init;try{return dt(t(i))}catch{}}return null}var We=Array.isArray,$=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},ze=[],D=-1;function ne(t){return{current:t}}function oe(t){0>D||(t.current=ze[D],ze[D]=null,D--)}function re(t,i){D++,ze[D]=t.current,t.current=i}var ge=ne(null),Ce=ne(null),we=ne(null),Ot=ne(null);function Je(t,i){switch(re(we,i),re(Ce,t),re(ge,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?F0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=F0(i),t=G0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oe(ge),re(ge,t)}function $n(){oe(ge),oe(Ce),oe(we)}function lr(t){t.memoizedState!==null&&re(Ot,t);var i=ge.current,a=G0(i,t.type);i!==a&&(re(Ce,t),re(ge,a))}function Ti(t){Ce.current===t&&(oe(ge),oe(Ce)),Ot.current===t&&(oe(Ot),Il._currentValue=de)}var as=Object.prototype.hasOwnProperty,os=r.unstable_scheduleCallback,ls=r.unstable_cancelCallback,xo=r.unstable_shouldYield,Sc=r.unstable_requestPaint,Tn=r.unstable_now,hf=r.unstable_getCurrentPriorityLevel,Ro=r.unstable_ImmediatePriority,aa=r.unstable_UserBlockingPriority,cs=r.unstable_NormalPriority,ff=r.unstable_LowPriority,oa=r.unstable_IdlePriority,Co=r.log,Ac=r.unstable_setDisableYieldValue,ct=null,Fe=null;function un(t){if(typeof Co=="function"&&Ac(t),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(ct,t)}catch{}}var Qt=Math.clz32?Math.clz32:us,xc=Math.log,df=Math.LN2;function us(t){return t>>>=0,t===0?32:31-(xc(t)/df|0)|0}var hs=256,fs=4194304;function jn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function la(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=jn(l):(E&=T,E!==0?h=jn(E):a||(a=T&~t,a!==0&&(h=jn(a))))):(T=l&~d,T!==0?h=jn(T):E!==0?h=jn(E):a||(a=l&~t,a!==0&&(h=jn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ds(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Io(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function No(){var t=hs;return hs<<=1,(hs&4194048)===0&&(hs=256),t}function Do(){var t=fs;return fs<<=1,(fs&62914560)===0&&(fs=4194304),t}function wi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Si(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Oo(t,i,a,l,h,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,C=t.expirationTimes,q=t.hiddenUpdates;for(a=E&~a;0<a;){var X=31-Qt(a),J=1<<X;T[X]=0,C[X]=-1;var F=q[X];if(F!==null)for(q[X]=null,X=0;X<F.length;X++){var Y=F[X];Y!==null&&(Y.lane&=-536870913)}a&=~J}l!==0&&Xn(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~i))}function Xn(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Qt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Mo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Qt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function cr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ca(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ur(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:u1(t.type))}function Rc(t,i){var a=ae.p;try{return ae.p=t,i()}finally{ae.p=a}}var rt=Math.random().toString(36).slice(2),At="__reactFiber$"+rt,vt="__reactProps$"+rt,wn="__reactContainer$"+rt,Vo="__reactEvents$"+rt,pf="__reactListeners$"+rt,hr="__reactHandles$"+rt,Cc="__reactResources$"+rt,ps="__reactMarker$"+rt;function fr(t){delete t[At],delete t[vt],delete t[Vo],delete t[pf],delete t[hr]}function Ai(t){var i=t[At];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wn]||a[At]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=$0(t);t!==null;){if(a=t[At])return a;t=$0(t)}return i}t=a,a=t.parentNode}return null}function Wn(t){if(t=t[At]||t[wn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Zn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function en(t){var i=t[Cc];return i||(i=t[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pt(t){t[ps]=!0}var Po=new Set,ua={};function Ln(t,i){xi(t,i),xi(t+"Capture",i)}function xi(t,i){for(ua[t]=i,t=0;t<i.length;t++)Po.add(i[t])}var Ic=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},ms={};function Dc(t){return as.call(ms,t)?!0:as.call(Nc,t)?!1:Ic.test(t)?ms[t]=!0:(Nc[t]=!0,!1)}function dr(t,i,a){if(Dc(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function Jn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ut(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var gs,Oc;function Ri(t){if(gs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);gs=i&&i[1]||"",Oc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gs+t+Oc}var ha=!1;function fa(t,i){if(!t||ha)return"";ha=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var F=Y}Reflect.construct(t,[],J)}else{try{J.call()}catch(Y){F=Y}t.call(J.prototype)}}else{try{throw Error()}catch(Y){F=Y}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&F&&typeof Y.stack=="string")return[Y.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var C=E.split(`
`),q=T.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===q.length)for(l=C.length-1,h=q.length-1;1<=l&&0<=h&&C[l]!==q[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==q[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==q[h]){var X=`
`+C[l].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=l&&0<=h);break}}}finally{ha=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ri(a):""}function ko(t){switch(t.tag){case 26:case 27:case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 15:return fa(t.type,!1);case 11:return fa(t.type.render,!1);case 1:return fa(t.type,!0);case 31:return Ri("Activity");default:return""}}function da(t){try{var i="";do i+=ko(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function tn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mf(t){var i=jo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pa(t){t._valueTracker||(t._valueTracker=mf(t))}function Lo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=jo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ys(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var gf=/[\n"\\]/g;function _t(t){return t.replace(gf,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(t,i,a,l,h,d,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+tn(i)):t.value!==""+tn(i)&&(t.value=""+tn(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?pr(t,E,tn(i)):a!=null?pr(t,E,tn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+tn(T):t.removeAttribute("name")}function vs(t,i,a,l,h,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+tn(a):"",i=i!=null?""+tn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function pr(t,i,a){i==="number"&&ys(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ci(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+tn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Qe(t,i,a){if(i!=null&&(i=""+tn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+tn(a):""}function _s(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(We(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=tn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Sn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Es=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mc(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Es.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Uo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Mc(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Mc(t,d,i[d])}function zo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ma(t){return vf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ii=null;function An(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ni=null,Di=null;function Bo(t){var i=Wn(t);if(i&&(t=i.stateNode)){var a=t[vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(hn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[vt]||null;if(!h)throw Error(s(90));hn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Lo(l)}break e;case"textarea":Qe(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Ci(t,!!a.multiple,i,!1)}}}var ei=!1;function Vc(t,i,a){if(ei)return t(i,a);ei=!0;try{var l=t(i);return l}finally{if(ei=!1,(Ni!==null||Di!==null)&&(Ru(),Ni&&(i=Ni,t=Di,Di=Ni=null,Bo(i),t)))for(i=0;i<t.length;i++)Bo(t[i])}}function bs(t,i){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xn=!1;if(Un)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){xn=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{xn=!1}var ti=null,mr=null,Oi=null;function qo(){if(Oi)return Oi;var t,i=mr,a=i.length,l,h="value"in ti?ti.value:ti.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===h[d-l];l++);return Oi=h.slice(t,1<l?1-l:void 0)}function ni(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ii(){return!0}function Ho(){return!1}function Mt(t){function i(a,l,h,d,E){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ii:Ho,this.isPropagationStopped=Ho,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),i}var qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ga=Mt(qe),ws=b({},qe,{view:0,detail:0}),Pc=Mt(ws),ya,va,ri,Ss=b({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ri&&(ri&&t.type==="mousemove"?(ya=t.screenX-ri.screenX,va=t.screenY-ri.screenY):va=ya=0,ri=t),ya)},movementY:function(t){return"movementY"in t?t.movementY:va}}),Rn=Mt(Ss),kc=b({},Ss,{dataTransfer:0}),_f=Mt(kc),As=b({},ws,{relatedTarget:0}),_a=Mt(As),Fo=b({},qe,{animationName:0,elapsedTime:0,pseudoElement:0}),Ea=Mt(Fo),jc=b({},qe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ba=Mt(jc),Ef=b({},qe,{data:0}),Go=Mt(Ef),xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Uc[t])?!!i[t]:!1}function Rs(){return Yo}var zc=b({},ws,{key:function(t){if(t.key){var i=xs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ni(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(t){return t.type==="keypress"?ni(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ni(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ta=Mt(zc),Bc=b({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qo=Mt(Bc),Mi=b({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),qc=Mt(Mi),Hc=b({},qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fc=Mt(Hc),Gc=b({},Ss,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wa=Mt(Gc),nn=b({},qe,{newState:0,oldState:0}),Yc=Mt(nn),Qc=[9,13,27,32],si=Un&&"CompositionEvent"in window,u=null;Un&&"documentMode"in document&&(u=document.documentMode);var v=Un&&"TextEvent"in window&&!u,_=Un&&(!si||u&&8<u&&11>=u),w=" ",U=!1;function Q(t,i){switch(t){case"keyup":return Qc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pe=!1;function xt(t,i){switch(t){case"compositionend":return se(i);case"keypress":return i.which!==32?null:(U=!0,w);case"textInput":return t=i.data,t===w&&U?null:t;default:return null}}function ke(t,i){if(Pe)return t==="compositionend"||!si&&Q(t,i)?(t=qo(),Oi=mr=ti=null,Pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Vt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Vt[t.type]:i==="textarea"}function Vi(t,i,a,l){Ni?Di?Di.push(l):Di=[l]:Ni=l,i=Mu(i,"onChange"),0<i.length&&(a=new ga("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var zt=null,ai=null;function Ko(t){U0(t,0)}function Kc(t){var i=Zn(t);if(Lo(i))return t}function ag(t,i){if(t==="change")return i}var og=!1;if(Un){var bf;if(Un){var Tf="oninput"in document;if(!Tf){var lg=document.createElement("div");lg.setAttribute("oninput","return;"),Tf=typeof lg.oninput=="function"}bf=Tf}else bf=!1;og=bf&&(!document.documentMode||9<document.documentMode)}function cg(){zt&&(zt.detachEvent("onpropertychange",ug),ai=zt=null)}function ug(t){if(t.propertyName==="value"&&Kc(ai)){var i=[];Vi(i,ai,t,An(t)),Vc(Ko,i)}}function hb(t,i,a){t==="focusin"?(cg(),zt=i,ai=a,zt.attachEvent("onpropertychange",ug)):t==="focusout"&&cg()}function fb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(ai)}function db(t,i){if(t==="click")return Kc(i)}function pb(t,i){if(t==="input"||t==="change")return Kc(i)}function mb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fn=typeof Object.is=="function"?Object.is:mb;function $o(t,i){if(fn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!as.call(i,h)||!fn(t[h],i[h]))return!1}return!0}function hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fg(t,i){var a=hg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hg(a)}}function dg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?dg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ys(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ys(t.document)}return i}function wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var gb=Un&&"documentMode"in document&&11>=document.documentMode,Sa=null,Sf=null,Xo=null,Af=!1;function mg(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Af||Sa==null||Sa!==ys(l)||(l=Sa,"selectionStart"in l&&wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xo&&$o(Xo,l)||(Xo=l,l=Mu(Sf,"onSelect"),0<l.length&&(i=new ga("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Sa)))}function Cs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Aa={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},xf={},gg={};Un&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Is(t){if(xf[t])return xf[t];if(!Aa[t])return t;var i=Aa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in gg)return xf[t]=i[a];return t}var yg=Is("animationend"),vg=Is("animationiteration"),_g=Is("animationstart"),yb=Is("transitionrun"),vb=Is("transitionstart"),_b=Is("transitioncancel"),Eg=Is("transitionend"),bg=new Map,Rf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rf.push("scrollEnd");function zn(t,i){bg.set(t,i),Ln(i,[t])}var Tg=new WeakMap;function Cn(t,i){if(typeof t=="object"&&t!==null){var a=Tg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:da(i)},Tg.set(t,i),i)}return{value:t,source:i,stack:da(i)}}var In=[],xa=0,Cf=0;function $c(){for(var t=xa,i=Cf=xa=0;i<t;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&wg(a,h,d)}}function Xc(t,i,a,l){In[xa++]=t,In[xa++]=i,In[xa++]=a,In[xa++]=l,Cf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function If(t,i,a,l){return Xc(t,i,a,l),Wc(t)}function Ra(t,i){return Xc(t,null,null,i),Wc(t)}function wg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Qt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Wc(t){if(50<bl)throw bl=0,Pd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ca={};function Eb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,i,a,l){return new Eb(t,i,a,l)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,i){var a=t.alternate;return a===null?(a=dn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zc(t,i,a,l,h,d){var E=0;if(l=t,typeof t=="function")Nf(t)&&(E=1);else if(typeof t=="string")E=TT(t,a,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=dn(31,a,i,h),t.elementType=R,t.lanes=d,t;case H:return Ns(a.children,h,d,i);case B:E=8,h|=24;break;case G:return t=dn(12,a,i,h|2),t.elementType=G,t.lanes=d,t;case ue:return t=dn(13,a,i,h),t.elementType=ue,t.lanes=d,t;case be:return t=dn(19,a,i,h),t.elementType=be,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K:case te:E=10;break e;case ie:E=9;break e;case le:E=11;break e;case V:E=14;break e;case x:E=16,l=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=dn(E,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,a,l){return t=dn(7,t,l,i),t.lanes=a,t}function Df(t,i,a){return t=dn(6,t,null,i),t.lanes=a,t}function Of(t,i,a){return i=dn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Ia=[],Na=0,Jc=null,eu=0,Nn=[],Dn=0,Ds=null,ki=1,ji="";function Os(t,i){Ia[Na++]=eu,Ia[Na++]=Jc,Jc=t,eu=i}function Ag(t,i,a){Nn[Dn++]=ki,Nn[Dn++]=ji,Nn[Dn++]=Ds,Ds=t;var l=ki;t=ji;var h=32-Qt(l)-1;l&=~(1<<h),a+=1;var d=32-Qt(i)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,ki=1<<32-Qt(i)+h|a<<h|l,ji=d+t}else ki=1<<d|a<<h|l,ji=t}function Mf(t){t.return!==null&&(Os(t,1),Ag(t,1,0))}function Vf(t){for(;t===Jc;)Jc=Ia[--Na],Ia[Na]=null,eu=Ia[--Na],Ia[Na]=null;for(;t===Ds;)Ds=Nn[--Dn],Nn[Dn]=null,ji=Nn[--Dn],Nn[Dn]=null,ki=Nn[--Dn],Nn[Dn]=null}var rn=null,ut=null,Be=!1,Ms=null,oi=!1,Pf=Error(s(519));function Vs(t){var i=Error(s(418,""));throw Jo(Cn(i,t)),Pf}function xg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[At]=t,i[vt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<wl.length;a++)De(wl[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),vs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pa(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),_s(i,l.value,l.defaultValue,l.children),pa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||H0(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=Vu),i=!0):i=!1,i||Vs(t)}function Rg(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:rn=rn.return}}function Wo(t){if(t!==rn)return!1;if(!Be)return Rg(t),Be=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wd(t.type,t.memoizedProps)),a=!a),a&&ut&&Vs(t),Rg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ut=qn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ut=null}}else i===27?(i=ut,Dr(t.type)?(t=tp,tp=null,ut=t):ut=i):ut=rn?qn(t.stateNode.nextSibling):null;return!0}function Zo(){ut=rn=null,Be=!1}function Cg(){var t=Ms;return t!==null&&(on===null?on=t:on.push.apply(on,t),Ms=null),t}function Jo(t){Ms===null?Ms=[t]:Ms.push(t)}var kf=ne(null),Ps=null,Li=null;function gr(t,i,a){re(kf,i._currentValue),i._currentValue=a}function Ui(t){t._currentValue=kf.current,oe(kf)}function jf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Lf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),jf(d.return,a,t),l||(E=null);break e}d=T.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),jf(E,a,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function el(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=h.type;fn(h.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(h===Ot.current){if(E=h.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Il):t=[Il])}h=h.return}t!==null&&Lf(i,t,a,l),i.flags|=262144}function tu(t){for(t=t.firstContext;t!==null;){if(!fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ks(t){Ps=t,Li=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return Ig(Ps,t)}function nu(t,i){return Ps===null&&ks(t),Ig(t,i)}function Ig(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Li===null){if(t===null)throw Error(s(308));Li=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Li=Li.next=i;return a}var bb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},Tb=r.unstable_scheduleCallback,wb=r.unstable_NormalPriority,Ct={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new bb,data:new Map,refCount:0}}function tl(t){t.refCount--,t.refCount===0&&Tb(wb,function(){t.controller.abort()})}var nl=null,zf=0,Da=0,Oa=null;function Sb(t,i){if(nl===null){var a=nl=[];zf=0,Da=qd(),Oa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zf++,i.then(Ng,Ng),i}function Ng(){if(--zf===0&&nl!==null){Oa!==null&&(Oa.status="fulfilled");var t=nl;nl=null,Da=0,Oa=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ab(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Dg=$.S;$.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Sb(t,i),Dg!==null&&Dg(t,i)};var js=ne(null);function Bf(){var t=js.current;return t!==null?t:et.pooledCache}function iu(t,i){i===null?re(js,js.current):re(js,i.pool)}function Og(){var t=Bf();return t===null?null:{parent:Ct._currentValue,pool:t}}var il=Error(s(460)),Mg=Error(s(474)),ru=Error(s(542)),qf={then:function(){}};function Vg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function su(){}function Pg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(su,su),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,jg(t),t;default:if(typeof i.status=="string")i.then(su,su);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,jg(t),t}throw rl=i,il}}var rl=null;function kg(){if(rl===null)throw Error(s(459));var t=rl;return rl=null,t}function jg(t){if(t===il||t===ru)throw Error(s(483))}var yr=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ff(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _r(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Wc(t),wg(t,null,a),i}return Xc(t,l,i,a),Wc(t)}function sl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Mo(t,a)}}function Gf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Yf=!1;function al(){if(Yf){var t=Oa;if(t!==null)throw t}}function ol(t,i,a,l){Yf=!1;var h=t.updateQueue;yr=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,q=C.next;C.next=null,E===null?d=q:E.next=q,E=C;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==E&&(T===null?X.firstBaseUpdate=q:T.next=q,X.lastBaseUpdate=C))}if(d!==null){var J=h.baseState;E=0,X=q=C=null,T=d;do{var F=T.lane&-536870913,Y=F!==T.lane;if(Y?(je&F)===F:(l&F)===F){F!==0&&F===Da&&(Yf=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=t,ye=T;F=i;var Xe=a;switch(ye.tag){case 1:if(Te=ye.payload,typeof Te=="function"){J=Te.call(Xe,J,F);break e}J=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=ye.payload,F=typeof Te=="function"?Te.call(Xe,J,F):Te,F==null)break e;J=b({},J,F);break e;case 2:yr=!0}}F=T.callback,F!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[F]:Y.push(F))}else Y={lane:F,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(q=X=Y,C=J):X=X.next=Y,E|=F;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;Y=T,T=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);X===null&&(C=J),h.baseState=C,h.firstBaseUpdate=q,h.lastBaseUpdate=X,d===null&&(h.shared.lanes=0),Rr|=E,t.lanes=E,t.memoizedState=J}}function Lg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Ug(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lg(a[t],i)}var Ma=ne(null),au=ne(0);function zg(t,i){t=Yi,re(au,t),re(Ma,i),Yi=t|i.baseLanes}function Qf(){re(au,Yi),re(Ma,Ma.current)}function Kf(){Yi=au.current,oe(Ma),oe(au)}var Er=0,Re=null,Ke=null,Et=null,ou=!1,Va=!1,Ls=!1,lu=0,ll=0,Pa=null,xb=0;function mt(){throw Error(s(321))}function $f(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!fn(t[a],i[a]))return!1;return!0}function Xf(t,i,a,l,h,d){return Er=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$.H=t===null||t.memoizedState===null?wy:Sy,Ls=!1,d=a(l,h),Ls=!1,Va&&(d=qg(i,a,l,h)),Bg(t),d}function Bg(t){$.H=pu;var i=Ke!==null&&Ke.next!==null;if(Er=0,Et=Ke=Re=null,ou=!1,ll=0,Pa=null,i)throw Error(s(300));t===null||Pt||(t=t.dependencies,t!==null&&tu(t)&&(Pt=!0))}function qg(t,i,a,l){Re=t;var h=0;do{if(Va&&(Pa=null),ll=0,Va=!1,25<=h)throw Error(s(301));if(h+=1,Et=Ke=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}$.H=Mb,d=i(a,l)}while(Va);return d}function Rb(){var t=$.H,i=t.useState()[0];return i=typeof i.then=="function"?cl(i):i,t=t.useState()[0],(Ke!==null?Ke.memoizedState:null)!==t&&(Re.flags|=1024),i}function Wf(){var t=lu!==0;return lu=0,t}function Zf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Jf(t){if(ou){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ou=!1}Er=0,Et=Ke=Re=null,Va=!1,ll=lu=0,Pa=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Re.memoizedState=Et=t:Et=Et.next=t,Et}function bt(){if(Ke===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var i=Et===null?Re.memoizedState:Et.next;if(i!==null)Et=i,Ke=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Et===null?Re.memoizedState=Et=t:Et=Et.next=t}return Et}function ed(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cl(t){var i=ll;return ll+=1,Pa===null&&(Pa=[]),t=Pg(Pa,t,i),i=Re,(Et===null?i.memoizedState:Et.next)===null&&(i=i.alternate,$.H=i===null||i.memoizedState===null?wy:Sy),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return cl(t);if(t.$$typeof===te)return Kt(t)}throw Error(s(438,String(t)))}function td(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ed(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function zi(t,i){return typeof i=="function"?i(t):i}function uu(t){var i=bt();return nd(i,Ke,t)}function nd(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=E=null,C=null,q=i,X=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(je&J)===J:(Er&J)===J){var F=q.revertLane;if(F===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===Da&&(X=!0);else if((Er&F)===F){q=q.next,F===Da&&(X=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(T=C=J,E=d):C=C.next=J,Re.lanes|=F,Rr|=F;J=q.action,Ls&&a(d,J),d=q.hasEagerState?q.eagerState:a(d,J)}else F={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(T=C=F,E=d):C=C.next=F,Re.lanes|=J,Rr|=J;q=q.next}while(q!==null&&q!==i);if(C===null?E=d:C.next=T,!fn(d,t.memoizedState)&&(Pt=!0,X&&(a=Oa,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function id(t){var i=bt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do d=t(d,E.action),E=E.next;while(E!==h);fn(d,i.memoizedState)||(Pt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Hg(t,i,a){var l=Re,h=bt(),d=Be;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!fn((Ke||h).memoizedState,a);E&&(h.memoizedState=a,Pt=!0),h=h.queue;var T=Yg.bind(null,l,h,t);if(ul(2048,8,T,[t]),h.getSnapshot!==i||E||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,ka(9,hu(),Gg.bind(null,l,h,a,i),null),et===null)throw Error(s(349));d||(Er&124)!==0||Fg(l,i,a)}return a}function Fg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=ed(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Gg(t,i,a,l){i.value=a,i.getSnapshot=l,Qg(i)&&Kg(t)}function Yg(t,i,a){return a(function(){Qg(i)&&Kg(t)})}function Qg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!fn(t,a)}catch{return!0}}function Kg(t){var i=Ra(t,2);i!==null&&vn(i,t,2)}function rd(t){var i=sn();if(typeof t=="function"){var a=t;if(t=a(),Ls){un(!0);try{a()}finally{un(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},i}function $g(t,i,a,l){return t.baseState=a,nd(t,Ke,typeof l=="function"?l:zi)}function Cb(t,i,a,l,h){if(du(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};$.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Xg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Xg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=$.T,E={};$.T=E;try{var T=a(h,l),C=$.S;C!==null&&C(E,T),Wg(t,i,T)}catch(q){sd(t,i,q)}finally{$.T=d}}else try{d=a(h,l),Wg(t,i,d)}catch(q){sd(t,i,q)}}function Wg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Zg(t,i,l)},function(l){return sd(t,i,l)}):Zg(t,i,a)}function Zg(t,i,a){i.status="fulfilled",i.value=a,Jg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Xg(t,a)))}function sd(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Jg(i),i=i.next;while(i!==l)}t.action=null}function Jg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ey(t,i){return i}function ty(t,i){if(Be){var a=et.formState;if(a!==null){e:{var l=Re;if(Be){if(ut){t:{for(var h=ut,d=oi;h.nodeType!==8;){if(!d){h=null;break t}if(h=qn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ut=qn(h.nextSibling),l=h.data==="F!";break e}}Vs(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ey,lastRenderedState:i},a.queue=l,a=Ey.bind(null,Re,l),l.dispatch=a,l=rd(!1),d=ud.bind(null,Re,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=Cb.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function ny(t){var i=bt();return iy(i,Ke,t)}function iy(t,i,a){if(i=nd(t,i,ey)[0],t=uu(zi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=cl(i)}catch(E){throw E===il?ru:E}else l=i;i=bt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,ka(9,hu(),Ib.bind(null,h,a),null)),[l,d,t]}function Ib(t,i){t.action=i}function ry(t){var i=bt(),a=Ke;if(a!==null)return iy(i,a,t);bt(),i=i.memoizedState,a=bt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function ka(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=ed(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function hu(){return{destroy:void 0,resource:void 0}}function sy(){return bt().memoizedState}function fu(t,i,a,l){var h=sn();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=ka(1|i,hu(),a,l)}function ul(t,i,a,l){var h=bt();l=l===void 0?null:l;var d=h.memoizedState.inst;Ke!==null&&l!==null&&$f(l,Ke.memoizedState.deps)?h.memoizedState=ka(i,d,a,l):(Re.flags|=t,h.memoizedState=ka(1|i,d,a,l))}function ay(t,i){fu(8390656,8,t,i)}function oy(t,i){ul(2048,8,t,i)}function ly(t,i){return ul(4,2,t,i)}function cy(t,i){return ul(4,4,t,i)}function uy(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function hy(t,i,a){a=a!=null?a.concat([t]):null,ul(4,4,uy.bind(null,i,t),a)}function ad(){}function fy(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&$f(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function dy(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&$f(i,l[1]))return l[0];if(l=t(),Ls){un(!0);try{t()}finally{un(!1)}}return a.memoizedState=[l,i],l}function od(t,i,a){return a===void 0||(Er&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=g0(),Re.lanes|=t,Rr|=t,a)}function py(t,i,a,l){return fn(a,i)?a:Ma.current!==null?(t=od(t,a,l),fn(t,i)||(Pt=!0),t):(Er&42)===0?(Pt=!0,t.memoizedState=a):(t=g0(),Re.lanes|=t,Rr|=t,i)}function my(t,i,a,l,h){var d=ae.p;ae.p=d!==0&&8>d?d:8;var E=$.T,T={};$.T=T,ud(t,!1,i,a);try{var C=h(),q=$.S;if(q!==null&&q(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=Ab(C,l);hl(t,i,X,yn(t))}else hl(t,i,l,yn(t))}catch(J){hl(t,i,{then:function(){},status:"rejected",reason:J},yn())}finally{ae.p=d,$.T=E}}function Nb(){}function ld(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=gy(t).queue;my(t,h,i,de,a===null?Nb:function(){return yy(t),a(l)})}function gy(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:de},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function yy(t){var i=gy(t).next.queue;hl(t,i,{},yn())}function cd(){return Kt(Il)}function vy(){return bt().memoizedState}function _y(){return bt().memoizedState}function Db(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=yn();t=vr(a);var l=_r(i,t,a);l!==null&&(vn(l,i,a),sl(l,i,a)),i={cache:Uf()},t.payload=i;return}i=i.return}}function Ob(t,i,a){var l=yn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},du(t)?by(i,a):(a=If(t,i,a,l),a!==null&&(vn(a,t,l),Ty(a,i,l)))}function Ey(t,i,a){var l=yn();hl(t,i,a,l)}function hl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(du(t))by(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,a);if(h.hasEagerState=!0,h.eagerState=T,fn(T,E))return Xc(t,i,h,0),et===null&&$c(),!1}catch{}finally{}if(a=If(t,i,h,l),a!==null)return vn(a,t,l),Ty(a,i,l),!0}return!1}function ud(t,i,a,l){if(l={lane:2,revertLane:qd(),action:l,hasEagerState:!1,eagerState:null,next:null},du(t)){if(i)throw Error(s(479))}else i=If(t,a,l,2),i!==null&&vn(i,t,2)}function du(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function by(t,i){Va=ou=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ty(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Mo(t,a)}}var pu={readContext:Kt,use:cu,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt},wy={readContext:Kt,use:cu,useCallback:function(t,i){return sn().memoizedState=[t,i===void 0?null:i],t},useContext:Kt,useEffect:ay,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,fu(4194308,4,uy.bind(null,i,t),a)},useLayoutEffect:function(t,i){return fu(4194308,4,t,i)},useInsertionEffect:function(t,i){fu(4,2,t,i)},useMemo:function(t,i){var a=sn();i=i===void 0?null:i;var l=t();if(Ls){un(!0);try{t()}finally{un(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Ls){un(!0);try{a(i)}finally{un(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Ob.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=sn();return t={current:t},i.memoizedState=t},useState:function(t){t=rd(t);var i=t.queue,a=Ey.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:ad,useDeferredValue:function(t,i){var a=sn();return od(a,t,i)},useTransition:function(){var t=rd(!1);return t=my.bind(null,Re,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=sn();if(Be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),et===null)throw Error(s(349));(je&124)!==0||Fg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ay(Yg.bind(null,l,d,t),[t]),l.flags|=2048,ka(9,hu(),Gg.bind(null,l,d,a,i),null),a},useId:function(){var t=sn(),i=et.identifierPrefix;if(Be){var a=ji,l=ki;a=(l&~(1<<32-Qt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=lu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=xb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:cd,useFormState:ty,useActionState:ty,useOptimistic:function(t){var i=sn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=ud.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:td,useCacheRefresh:function(){return sn().memoizedState=Db.bind(null,Re)}},Sy={readContext:Kt,use:cu,useCallback:fy,useContext:Kt,useEffect:oy,useImperativeHandle:hy,useInsertionEffect:ly,useLayoutEffect:cy,useMemo:dy,useReducer:uu,useRef:sy,useState:function(){return uu(zi)},useDebugValue:ad,useDeferredValue:function(t,i){var a=bt();return py(a,Ke.memoizedState,t,i)},useTransition:function(){var t=uu(zi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:cl(t),i]},useSyncExternalStore:Hg,useId:vy,useHostTransitionStatus:cd,useFormState:ny,useActionState:ny,useOptimistic:function(t,i){var a=bt();return $g(a,Ke,t,i)},useMemoCache:td,useCacheRefresh:_y},Mb={readContext:Kt,use:cu,useCallback:fy,useContext:Kt,useEffect:oy,useImperativeHandle:hy,useInsertionEffect:ly,useLayoutEffect:cy,useMemo:dy,useReducer:id,useRef:sy,useState:function(){return id(zi)},useDebugValue:ad,useDeferredValue:function(t,i){var a=bt();return Ke===null?od(a,t,i):py(a,Ke.memoizedState,t,i)},useTransition:function(){var t=id(zi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:cl(t),i]},useSyncExternalStore:Hg,useId:vy,useHostTransitionStatus:cd,useFormState:ry,useActionState:ry,useOptimistic:function(t,i){var a=bt();return Ke!==null?$g(a,Ke,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:td,useCacheRefresh:_y},ja=null,fl=0;function mu(t){var i=fl;return fl+=1,ja===null&&(ja=[]),Pg(ja,t,i)}function dl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function gu(t,i){throw i.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ay(t){var i=t._init;return i(t._payload)}function xy(t){function i(j,M){if(t){var z=j.deletions;z===null?(j.deletions=[M],j.flags|=16):z.push(M)}}function a(j,M){if(!t)return null;for(;M!==null;)i(j,M),M=M.sibling;return null}function l(j){for(var M=new Map;j!==null;)j.key!==null?M.set(j.key,j):M.set(j.index,j),j=j.sibling;return M}function h(j,M){return j=Pi(j,M),j.index=0,j.sibling=null,j}function d(j,M,z){return j.index=z,t?(z=j.alternate,z!==null?(z=z.index,z<M?(j.flags|=67108866,M):z):(j.flags|=67108866,M)):(j.flags|=1048576,M)}function E(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,M,z,W){return M===null||M.tag!==6?(M=Df(z,j.mode,W),M.return=j,M):(M=h(M,z),M.return=j,M)}function C(j,M,z,W){var fe=z.type;return fe===H?X(j,M,z.props.children,W,z.key):M!==null&&(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===x&&Ay(fe)===M.type)?(M=h(M,z.props),dl(M,z),M.return=j,M):(M=Zc(z.type,z.key,z.props,null,j.mode,W),dl(M,z),M.return=j,M)}function q(j,M,z,W){return M===null||M.tag!==4||M.stateNode.containerInfo!==z.containerInfo||M.stateNode.implementation!==z.implementation?(M=Of(z,j.mode,W),M.return=j,M):(M=h(M,z.children||[]),M.return=j,M)}function X(j,M,z,W,fe){return M===null||M.tag!==7?(M=Ns(z,j.mode,W,fe),M.return=j,M):(M=h(M,z),M.return=j,M)}function J(j,M,z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Df(""+M,j.mode,z),M.return=j,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case A:return z=Zc(M.type,M.key,M.props,null,j.mode,z),dl(z,M),z.return=j,z;case P:return M=Of(M,j.mode,z),M.return=j,M;case x:var W=M._init;return M=W(M._payload),J(j,M,z)}if(We(M)||k(M))return M=Ns(M,j.mode,z,null),M.return=j,M;if(typeof M.then=="function")return J(j,mu(M),z);if(M.$$typeof===te)return J(j,nu(j,M),z);gu(j,M)}return null}function F(j,M,z,W){var fe=M!==null?M.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:T(j,M,""+z,W);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case A:return z.key===fe?C(j,M,z,W):null;case P:return z.key===fe?q(j,M,z,W):null;case x:return fe=z._init,z=fe(z._payload),F(j,M,z,W)}if(We(z)||k(z))return fe!==null?null:X(j,M,z,W,null);if(typeof z.then=="function")return F(j,M,mu(z),W);if(z.$$typeof===te)return F(j,M,nu(j,z),W);gu(j,z)}return null}function Y(j,M,z,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return j=j.get(z)||null,T(M,j,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case A:return j=j.get(W.key===null?z:W.key)||null,C(M,j,W,fe);case P:return j=j.get(W.key===null?z:W.key)||null,q(M,j,W,fe);case x:var Ie=W._init;return W=Ie(W._payload),Y(j,M,z,W,fe)}if(We(W)||k(W))return j=j.get(z)||null,X(M,j,W,fe,null);if(typeof W.then=="function")return Y(j,M,z,mu(W),fe);if(W.$$typeof===te)return Y(j,M,z,nu(M,W),fe);gu(M,W)}return null}function Te(j,M,z,W){for(var fe=null,Ie=null,pe=M,ve=M=0,jt=null;pe!==null&&ve<z.length;ve++){pe.index>ve?(jt=pe,pe=null):jt=pe.sibling;var Ue=F(j,pe,z[ve],W);if(Ue===null){pe===null&&(pe=jt);break}t&&pe&&Ue.alternate===null&&i(j,pe),M=d(Ue,M,ve),Ie===null?fe=Ue:Ie.sibling=Ue,Ie=Ue,pe=jt}if(ve===z.length)return a(j,pe),Be&&Os(j,ve),fe;if(pe===null){for(;ve<z.length;ve++)pe=J(j,z[ve],W),pe!==null&&(M=d(pe,M,ve),Ie===null?fe=pe:Ie.sibling=pe,Ie=pe);return Be&&Os(j,ve),fe}for(pe=l(pe);ve<z.length;ve++)jt=Y(pe,j,ve,z[ve],W),jt!==null&&(t&&jt.alternate!==null&&pe.delete(jt.key===null?ve:jt.key),M=d(jt,M,ve),Ie===null?fe=jt:Ie.sibling=jt,Ie=jt);return t&&pe.forEach(function(kr){return i(j,kr)}),Be&&Os(j,ve),fe}function ye(j,M,z,W){if(z==null)throw Error(s(151));for(var fe=null,Ie=null,pe=M,ve=M=0,jt=null,Ue=z.next();pe!==null&&!Ue.done;ve++,Ue=z.next()){pe.index>ve?(jt=pe,pe=null):jt=pe.sibling;var kr=F(j,pe,Ue.value,W);if(kr===null){pe===null&&(pe=jt);break}t&&pe&&kr.alternate===null&&i(j,pe),M=d(kr,M,ve),Ie===null?fe=kr:Ie.sibling=kr,Ie=kr,pe=jt}if(Ue.done)return a(j,pe),Be&&Os(j,ve),fe;if(pe===null){for(;!Ue.done;ve++,Ue=z.next())Ue=J(j,Ue.value,W),Ue!==null&&(M=d(Ue,M,ve),Ie===null?fe=Ue:Ie.sibling=Ue,Ie=Ue);return Be&&Os(j,ve),fe}for(pe=l(pe);!Ue.done;ve++,Ue=z.next())Ue=Y(pe,j,ve,Ue.value,W),Ue!==null&&(t&&Ue.alternate!==null&&pe.delete(Ue.key===null?ve:Ue.key),M=d(Ue,M,ve),Ie===null?fe=Ue:Ie.sibling=Ue,Ie=Ue);return t&&pe.forEach(function(VT){return i(j,VT)}),Be&&Os(j,ve),fe}function Xe(j,M,z,W){if(typeof z=="object"&&z!==null&&z.type===H&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case A:e:{for(var fe=z.key;M!==null;){if(M.key===fe){if(fe=z.type,fe===H){if(M.tag===7){a(j,M.sibling),W=h(M,z.props.children),W.return=j,j=W;break e}}else if(M.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===x&&Ay(fe)===M.type){a(j,M.sibling),W=h(M,z.props),dl(W,z),W.return=j,j=W;break e}a(j,M);break}else i(j,M);M=M.sibling}z.type===H?(W=Ns(z.props.children,j.mode,W,z.key),W.return=j,j=W):(W=Zc(z.type,z.key,z.props,null,j.mode,W),dl(W,z),W.return=j,j=W)}return E(j);case P:e:{for(fe=z.key;M!==null;){if(M.key===fe)if(M.tag===4&&M.stateNode.containerInfo===z.containerInfo&&M.stateNode.implementation===z.implementation){a(j,M.sibling),W=h(M,z.children||[]),W.return=j,j=W;break e}else{a(j,M);break}else i(j,M);M=M.sibling}W=Of(z,j.mode,W),W.return=j,j=W}return E(j);case x:return fe=z._init,z=fe(z._payload),Xe(j,M,z,W)}if(We(z))return Te(j,M,z,W);if(k(z)){if(fe=k(z),typeof fe!="function")throw Error(s(150));return z=fe.call(z),ye(j,M,z,W)}if(typeof z.then=="function")return Xe(j,M,mu(z),W);if(z.$$typeof===te)return Xe(j,M,nu(j,z),W);gu(j,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,M!==null&&M.tag===6?(a(j,M.sibling),W=h(M,z),W.return=j,j=W):(a(j,M),W=Df(z,j.mode,W),W.return=j,j=W),E(j)):a(j,M)}return function(j,M,z,W){try{fl=0;var fe=Xe(j,M,z,W);return ja=null,fe}catch(pe){if(pe===il||pe===ru)throw pe;var Ie=dn(29,pe,null,j.mode);return Ie.lanes=W,Ie.return=j,Ie}finally{}}}var La=xy(!0),Ry=xy(!1),On=ne(null),li=null;function br(t){var i=t.alternate;re(It,It.current&1),re(On,t),li===null&&(i===null||Ma.current!==null||i.memoizedState!==null)&&(li=t)}function Cy(t){if(t.tag===22){if(re(It,It.current),re(On,t),li===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(li=t)}}else Tr()}function Tr(){re(It,It.current),re(On,On.current)}function Bi(t){oe(On),li===t&&(li=null),oe(It)}var It=ne(0);function yu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ep(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function hd(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:b({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var fd={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=yn(),h=vr(l);h.payload=i,a!=null&&(h.callback=a),i=_r(t,h,l),i!==null&&(vn(i,t,l),sl(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=yn(),h=vr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=_r(t,h,l),i!==null&&(vn(i,t,l),sl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=yn(),l=vr(a);l.tag=2,i!=null&&(l.callback=i),i=_r(t,l,a),i!==null&&(vn(i,t,a),sl(i,t,a))}};function Iy(t,i,a,l,h,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!$o(a,l)||!$o(h,d):!0}function Ny(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&fd.enqueueReplaceState(i,i.state,null)}function Us(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=b({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var vu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Dy(t){vu(t)}function Oy(t){console.error(t)}function My(t){vu(t)}function _u(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Vy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function dd(t,i,a){return a=vr(a),a.tag=3,a.payload={element:null},a.callback=function(){_u(t,i)},a}function Py(t){return t=vr(t),t.tag=3,t}function ky(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Vy(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Vy(i,a,l),typeof h!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Vb(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&el(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return li===null?jd():a.alternate===null&&ht===0&&(ht=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===qf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Ud(t,l,h)),!1;case 22:return a.flags|=65536,l===qf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Ud(t,l,h)),!1}throw Error(s(435,a.tag))}return Ud(t,l,h),jd(),!1}if(Be)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Pf&&(t=Error(s(422),{cause:l}),Jo(Cn(t,a)))):(l!==Pf&&(i=Error(s(423),{cause:l}),Jo(Cn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Cn(l,a),h=dd(t.stateNode,l,h),Gf(t,h),ht!==4&&(ht=2)),!1;var d=Error(s(520),{cause:l});if(d=Cn(d,a),El===null?El=[d]:El.push(d),ht!==4&&(ht=2),i===null)return!0;l=Cn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=dd(a.stateNode,l,t),Gf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Cr===null||!Cr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Py(h),ky(h,t,a,l),Gf(a,h),!1}a=a.return}while(a!==null);return!1}var jy=Error(s(461)),Pt=!1;function Bt(t,i,a,l){i.child=t===null?Ry(i,null,a,l):La(i,t.child,a,l)}function Ly(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return ks(i),l=Xf(t,i,a,E,d,h),T=Wf(),t!==null&&!Pt?(Zf(t,i,h),qi(t,i,h)):(Be&&T&&Mf(i),i.flags|=1,Bt(t,i,l,h),i.child)}function Uy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Nf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,zy(t,i,d,l,h)):(t=Zc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!bd(t,h)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(E,l)&&t.ref===i.ref)return qi(t,i,h)}return i.flags|=1,t=Pi(d,l),t.ref=i.ref,t.return=i,i.child=t}function zy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if($o(d,l)&&t.ref===i.ref)if(Pt=!1,i.pendingProps=l=d,bd(t,h))(t.flags&131072)!==0&&(Pt=!0);else return i.lanes=t.lanes,qi(t,i,h)}return pd(t,i,a,l,h)}function By(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return qy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&iu(i,d!==null?d.cachePool:null),d!==null?zg(i,d):Qf(),Cy(i);else return i.lanes=i.childLanes=536870912,qy(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(iu(i,d.cachePool),zg(i,d),Tr(),i.memoizedState=null):(t!==null&&iu(i,null),Qf(),Tr());return Bt(t,i,h,a),i.child}function qy(t,i,a,l){var h=Bf();return h=h===null?null:{parent:Ct._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&iu(i,null),Qf(),Cy(i),t!==null&&el(t,i,l,!0),null}function Eu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function pd(t,i,a,l,h){return ks(i),a=Xf(t,i,a,l,void 0,h),l=Wf(),t!==null&&!Pt?(Zf(t,i,h),qi(t,i,h)):(Be&&l&&Mf(i),i.flags|=1,Bt(t,i,a,h),i.child)}function Hy(t,i,a,l,h,d){return ks(i),i.updateQueue=null,a=qg(i,l,a,h),Bg(t),l=Wf(),t!==null&&!Pt?(Zf(t,i,d),qi(t,i,d)):(Be&&l&&Mf(i),i.flags|=1,Bt(t,i,a,d),i.child)}function Fy(t,i,a,l,h){if(ks(i),i.stateNode===null){var d=Ca,E=a.contextType;typeof E=="object"&&E!==null&&(d=Kt(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=fd,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Hf(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?Kt(E):Ca,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(hd(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&fd.enqueueReplaceState(d,d.state,null),ol(i,l,d,h),al(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,C=Us(a,T);d.props=C;var q=d.context,X=a.contextType;E=Ca,typeof X=="object"&&X!==null&&(E=Kt(X));var J=a.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||q!==E)&&Ny(i,d,l,E),yr=!1;var F=i.memoizedState;d.state=F,ol(i,l,d,h),al(),q=i.memoizedState,T||F!==q||yr?(typeof J=="function"&&(hd(i,a,J,l),q=i.memoizedState),(C=yr||Iy(i,a,C,l,F,q,E))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=q),d.props=l,d.state=q,d.context=E,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ff(t,i),E=i.memoizedProps,X=Us(a,E),d.props=X,J=i.pendingProps,F=d.context,q=a.contextType,C=Ca,typeof q=="object"&&q!==null&&(C=Kt(q)),T=a.getDerivedStateFromProps,(q=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==J||F!==C)&&Ny(i,d,l,C),yr=!1,F=i.memoizedState,d.state=F,ol(i,l,d,h),al();var Y=i.memoizedState;E!==J||F!==Y||yr||t!==null&&t.dependencies!==null&&tu(t.dependencies)?(typeof T=="function"&&(hd(i,a,T,l),Y=i.memoizedState),(X=yr||Iy(i,a,X,l,F,Y,C)||t!==null&&t.dependencies!==null&&tu(t.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Y,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Y,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&F===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&F===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),d.props=l,d.state=Y,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&F===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&F===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Eu(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=La(i,t.child,null,h),i.child=La(i,null,a,h)):Bt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=qi(t,i,h),t}function Gy(t,i,a,l){return Zo(),i.flags|=256,Bt(t,i,a,l),i.child}var md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(t){return{baseLanes:t,cachePool:Og()}}function yd(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Mn),t}function Yy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Be){if(h?br(i):Tr(),Be){var T=ut,C;if(C=T){e:{for(C=T,T=oi;C.nodeType!==8;){if(!T){T=null;break e}if(C=qn(C.nextSibling),C===null){T=null;break e}}T=C}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ds!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},C=dn(18,null,null,0),C.stateNode=T,C.return=i,i.child=C,rn=i,ut=null,C=!0):C=!1}C||Vs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ep(T)?i.lanes=32:i.lanes=536870912,null;Bi(i)}return T=l.children,l=l.fallback,h?(Tr(),h=i.mode,T=bu({mode:"hidden",children:T},h),l=Ns(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=gd(a),h.childLanes=yd(t,E,a),i.memoizedState=md,l):(br(i),vd(i,T))}if(C=t.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(br(i),i.flags&=-257,i=_d(t,i,a)):i.memoizedState!==null?(Tr(),i.child=t.child,i.flags|=128,i=null):(Tr(),h=l.fallback,T=i.mode,l=bu({mode:"visible",children:l.children},T),h=Ns(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,La(i,t.child,null,a),l=i.child,l.memoizedState=gd(a),l.childLanes=yd(t,E,a),i.memoizedState=md,i=h);else if(br(i),ep(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var q=E.dgst;E=q,l=Error(s(419)),l.stack="",l.digest=E,Jo({value:l,source:null,stack:null}),i=_d(t,i,a)}else if(Pt||el(t,i,a,!1),E=(a&t.childLanes)!==0,Pt||E){if(E=et,E!==null&&(l=a&-a,l=(l&42)!==0?1:cr(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ra(t,l),vn(E,t,l),jy;T.data==="$?"||jd(),i=_d(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,ut=qn(T.nextSibling),rn=i,Be=!0,Ms=null,oi=!1,t!==null&&(Nn[Dn++]=ki,Nn[Dn++]=ji,Nn[Dn++]=Ds,ki=t.id,ji=t.overflow,Ds=i),i=vd(i,l.children),i.flags|=4096);return i}return h?(Tr(),h=l.fallback,T=i.mode,C=t.child,q=C.sibling,l=Pi(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,q!==null?h=Pi(q,h):(h=Ns(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=gd(a):(C=T.cachePool,C!==null?(q=Ct._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=Og(),T={baseLanes:T.baseLanes|a,cachePool:C}),h.memoizedState=T,h.childLanes=yd(t,E,a),i.memoizedState=md,l):(br(i),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=a,i.memoizedState=null,a)}function vd(t,i){return i=bu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function bu(t,i){return t=dn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function _d(t,i,a){return La(i,t.child,null,a),t=vd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Qy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),jf(t.return,i,a)}function Ed(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Ky(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Bt(t,i,l.children,a),l=It.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qy(t,a,i);else if(t.tag===19)Qy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(re(It,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&yu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ed(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&yu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Ed(i,!0,a,null,d);break;case"together":Ed(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(el(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Pi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function bd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&tu(t)))}function Pb(t,i,a){switch(i.tag){case 3:Je(i,i.stateNode.containerInfo),gr(i,Ct,t.memoizedState.cache),Zo();break;case 27:case 5:lr(i);break;case 4:Je(i,i.stateNode.containerInfo);break;case 10:gr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(br(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Yy(t,i,a):(br(i),t=qi(t,i,a),t!==null?t.sibling:null);br(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(el(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Ky(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(It,It.current),l)break;return null;case 22:case 23:return i.lanes=0,By(t,i,a);case 24:gr(i,Ct,t.memoizedState.cache)}return qi(t,i,a)}function $y(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Pt=!0;else{if(!bd(t,a)&&(i.flags&128)===0)return Pt=!1,Pb(t,i,a);Pt=(t.flags&131072)!==0}else Pt=!1,Be&&(i.flags&1048576)!==0&&Ag(i,eu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Nf(l)?(t=Us(l,t),i.tag=1,i=Fy(null,i,l,t,a)):(i.tag=0,i=pd(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===le){i.tag=11,i=Ly(null,i,l,t,a);break e}else if(h===V){i.tag=14,i=Uy(null,i,l,t,a);break e}}throw i=dt(l)||l,Error(s(306,i,""))}}return i;case 0:return pd(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Us(l,i.pendingProps),Fy(t,i,l,h,a);case 3:e:{if(Je(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Ff(t,i),ol(i,l,null,a);var E=i.memoizedState;if(l=E.cache,gr(i,Ct,l),l!==d.cache&&Lf(i,[Ct],a,!0),al(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Gy(t,i,l,a);break e}else if(l!==h){h=Cn(Error(s(424)),i),Jo(h),i=Gy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ut=qn(t.firstChild),rn=i,Be=!0,Ms=null,oi=!0,a=Ry(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zo(),l===h){i=qi(t,i,a);break e}Bt(t,i,l,a)}i=i.child}return i;case 26:return Eu(t,i),t===null?(a=J0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Be||(a=i.type,t=i.pendingProps,l=Pu(we.current).createElement(a),l[At]=i,l[vt]=t,Ht(l,a,t),pt(l),i.stateNode=l):i.memoizedState=J0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return lr(i),t===null&&Be&&(l=i.stateNode=X0(i.type,i.pendingProps,we.current),rn=i,oi=!0,h=ut,Dr(i.type)?(tp=h,ut=qn(l.firstChild)):ut=h),Bt(t,i,i.pendingProps.children,a),Eu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Be&&((h=l=ut)&&(l=cT(l,i.type,i.pendingProps,oi),l!==null?(i.stateNode=l,rn=i,ut=qn(l.firstChild),oi=!1,h=!0):h=!1),h||Vs(i)),lr(i),h=i.type,d=i.pendingProps,E=t!==null?t.memoizedProps:null,l=d.children,Wd(h,d)?l=null:E!==null&&Wd(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Xf(t,i,Rb,null,null,a),Il._currentValue=h),Eu(t,i),Bt(t,i,l,a),i.child;case 6:return t===null&&Be&&((t=a=ut)&&(a=uT(a,i.pendingProps,oi),a!==null?(i.stateNode=a,rn=i,ut=null,t=!0):t=!1),t||Vs(i)),null;case 13:return Yy(t,i,a);case 4:return Je(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=La(i,null,l,a):Bt(t,i,l,a),i.child;case 11:return Ly(t,i,i.type,i.pendingProps,a);case 7:return Bt(t,i,i.pendingProps,a),i.child;case 8:return Bt(t,i,i.pendingProps.children,a),i.child;case 12:return Bt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,gr(i,i.type,l.value),Bt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ks(i),h=Kt(h),l=l(h),i.flags|=1,Bt(t,i,l,a),i.child;case 14:return Uy(t,i,i.type,i.pendingProps,a);case 15:return zy(t,i,i.type,i.pendingProps,a);case 19:return Ky(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=bu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Pi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return By(t,i,a);case 24:return ks(i),l=Kt(Ct),t===null?(h=Bf(),h===null&&(h=et,d=Uf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Hf(i),gr(i,Ct,h)):((t.lanes&a)!==0&&(Ff(t,i),ol(i,null,null,a),al()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),gr(i,Ct,l)):(l=d.cache,gr(i,Ct,l),l!==h.cache&&Lf(i,[Ct],a,!0))),Bt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Hi(t){t.flags|=4}function Xy(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!r1(i)){if(i=On.current,i!==null&&((je&4194048)===je?li!==null:(je&62914560)!==je&&(je&536870912)===0||i!==li))throw rl=qf,Mg;t.flags|=8192}}function Tu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Do():536870912,t.lanes|=i,qa|=i)}function pl(t,i){if(!Be)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function at(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function kb(t,i,a){var l=i.pendingProps;switch(Vf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(i),null;case 1:return at(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ui(Ct),$n(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wo(i)?Hi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Cg())),at(i),null;case 26:return a=i.memoizedState,t===null?(Hi(i),a!==null?(at(i),Xy(i,a)):(at(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Hi(i),at(i),Xy(i,a)):(at(i),i.flags&=-16777217):(t.memoizedProps!==l&&Hi(i),at(i),i.flags&=-16777217),null;case 27:Ti(i),a=we.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return at(i),null}t=ge.current,Wo(i)?xg(i):(t=X0(h,l,a),i.stateNode=t,Hi(i))}return at(i),null;case 5:if(Ti(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Hi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return at(i),null}if(t=ge.current,Wo(i))xg(i);else{switch(h=Pu(we.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[At]=i,t[vt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Ht(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Hi(i)}}return at(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Hi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=we.current,Wo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[At]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||H0(t.nodeValue,a)),t||Vs(i)}else t=Pu(t).createTextNode(l),t[At]=i,i.stateNode=t}return at(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Wo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[At]=i}else Zo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;at(i),h=!1}else h=Cg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Bi(i),i):(Bi(i),null)}if(Bi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Tu(i,i.updateQueue),at(i),null;case 4:return $n(),t===null&&Yd(i.stateNode.containerInfo),at(i),null;case 10:return Ui(i.type),at(i),null;case 19:if(oe(It),h=i.memoizedState,h===null)return at(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)pl(h,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=yu(t),d!==null){for(i.flags|=128,pl(h,!1),t=d.updateQueue,i.updateQueue=t,Tu(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Sg(a,t),a=a.sibling;return re(It,It.current&1|2),i.child}t=t.sibling}h.tail!==null&&Tn()>Au&&(i.flags|=128,l=!0,pl(h,!1),i.lanes=4194304)}else{if(!l)if(t=yu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Tu(i,t),pl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Be)return at(i),null}else 2*Tn()-h.renderingStartTime>Au&&a!==536870912&&(i.flags|=128,l=!0,pl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tn(),i.sibling=null,t=It.current,re(It,l?t&1|2:t&1),i):(at(i),null);case 22:case 23:return Bi(i),Kf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(at(i),i.subtreeFlags&6&&(i.flags|=8192)):at(i),a=i.updateQueue,a!==null&&Tu(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&oe(js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ui(Ct),at(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function jb(t,i){switch(Vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ui(Ct),$n(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ti(i),null;case 13:if(Bi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Zo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return oe(It),null;case 4:return $n(),null;case 10:return Ui(i.type),null;case 22:case 23:return Bi(i),Kf(),t!==null&&oe(js),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ui(Ct),null;case 25:return null;default:return null}}function Wy(t,i){switch(Vf(i),i.tag){case 3:Ui(Ct),$n();break;case 26:case 27:case 5:Ti(i);break;case 4:$n();break;case 13:Bi(i);break;case 19:oe(It);break;case 10:Ui(i.type);break;case 22:case 23:Bi(i),Kf(),t!==null&&oe(js);break;case 24:Ui(Ct)}}function ml(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==h)}}catch(T){Ze(i,i.return,T)}}function wr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,h=i;var C=a,q=T;try{q()}catch(X){Ze(h,C,X)}}}l=l.next}while(l!==d)}}catch(X){Ze(i,i.return,X)}}function Zy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Ug(i,a)}catch(l){Ze(t,t.return,l)}}}function Jy(t,i,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ze(t,i,l)}}function gl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ze(t,i,h)}}function ci(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ze(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ze(t,i,h)}else a.current=null}function e0(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ze(t,t.return,h)}}function Td(t,i,a){try{var l=t.stateNode;rT(l,t.type,a,i),l[vt]=i}catch(h){Ze(t,t.return,h)}}function t0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Dr(t.type)||t.tag===4}function wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Dr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Vu));else if(l!==4&&(l===27&&Dr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Sd(t,i,a),t=t.sibling;t!==null;)Sd(t,i,a),t=t.sibling}function wu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Dr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wu(t,i,a),t=t.sibling;t!==null;)wu(t,i,a),t=t.sibling}function n0(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ht(i,l,a),i[At]=t,i[vt]=a}catch(d){Ze(t,t.return,d)}}var Fi=!1,gt=!1,Ad=!1,i0=typeof WeakSet=="function"?WeakSet:Set,kt=null;function Lb(t,i){if(t=t.containerInfo,$d=Bu,t=pg(t),wf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,T=-1,C=-1,q=0,X=0,J=t,F=null;t:for(;;){for(var Y;J!==a||h!==0&&J.nodeType!==3||(T=E+h),J!==d||l!==0&&J.nodeType!==3||(C=E+l),J.nodeType===3&&(E+=J.nodeValue.length),(Y=J.firstChild)!==null;)F=J,J=Y;for(;;){if(J===t)break t;if(F===a&&++q===h&&(T=E),F===d&&++X===l&&(C=E),(Y=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=Y}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xd={focusedElem:t,selectionRange:a},Bu=!1,kt=i;kt!==null;)if(i=kt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,kt=t;else for(;kt!==null;){switch(i=kt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Te=Us(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Te,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ye){Ze(a,a.return,ye)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Jd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,kt=t;break}kt=i.return}}function r0(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Sr(t,a),l&4&&ml(5,a);break;case 1:if(Sr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(E){Ze(a,a.return,E)}else{var h=Us(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ze(a,a.return,E)}}l&64&&Zy(a),l&512&&gl(a,a.return);break;case 3:if(Sr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Ug(t,i)}catch(E){Ze(a,a.return,E)}}break;case 27:i===null&&l&4&&n0(a);case 26:case 5:Sr(t,a),i===null&&l&4&&e0(a),l&512&&gl(a,a.return);break;case 12:Sr(t,a);break;case 13:Sr(t,a),l&4&&o0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Qb.bind(null,a),hT(t,a))));break;case 22:if(l=a.memoizedState!==null||Fi,!l){i=i!==null&&i.memoizedState!==null||gt,h=Fi;var d=gt;Fi=l,(gt=i)&&!d?Ar(t,a,(a.subtreeFlags&8772)!==0):Sr(t,a),Fi=h,gt=d}break;case 30:break;default:Sr(t,a)}}function s0(t){var i=t.alternate;i!==null&&(t.alternate=null,s0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&fr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var st=null,an=!1;function Gi(t,i,a){for(a=a.child;a!==null;)a0(t,i,a),a=a.sibling}function a0(t,i,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:gt||ci(a,i),Gi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||ci(a,i);var l=st,h=an;Dr(a.type)&&(st=a.stateNode,an=!1),Gi(t,i,a),Al(a.stateNode),st=l,an=h;break;case 5:gt||ci(a,i);case 6:if(l=st,h=an,st=null,Gi(t,i,a),st=l,an=h,st!==null)if(an)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(a.stateNode)}catch(d){Ze(a,i,d)}else try{st.removeChild(a.stateNode)}catch(d){Ze(a,i,d)}break;case 18:st!==null&&(an?(t=st,K0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ml(t)):K0(st,a.stateNode));break;case 4:l=st,h=an,st=a.stateNode.containerInfo,an=!0,Gi(t,i,a),st=l,an=h;break;case 0:case 11:case 14:case 15:gt||wr(2,a,i),gt||wr(4,a,i),Gi(t,i,a);break;case 1:gt||(ci(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Jy(a,i,l)),Gi(t,i,a);break;case 21:Gi(t,i,a);break;case 22:gt=(l=gt)||a.memoizedState!==null,Gi(t,i,a),gt=l;break;default:Gi(t,i,a)}}function o0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ml(t)}catch(a){Ze(i,i.return,a)}}function Ub(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new i0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new i0),i;default:throw Error(s(435,t.tag))}}function xd(t,i){var a=Ub(t);i.forEach(function(l){var h=Kb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function pn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Dr(T.type)){st=T.stateNode,an=!1;break e}break;case 5:st=T.stateNode,an=!1;break e;case 3:case 4:st=T.stateNode.containerInfo,an=!0;break e}T=T.return}if(st===null)throw Error(s(160));a0(d,E,h),st=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)l0(i,t),i=i.sibling}var Bn=null;function l0(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(i,t),mn(t),l&4&&(wr(3,t,t.return),ml(3,t),wr(5,t,t.return));break;case 1:pn(i,t),mn(t),l&512&&(gt||a===null||ci(a,a.return)),l&64&&Fi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Bn;if(pn(i,t),mn(t),l&512&&(gt||a===null||ci(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ps]||d[At]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ht(d,l,a),d[At]=t,pt(d),l=d;break e;case"link":var E=n1("link","href",h).get(l+(a.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(T,1);break t}}d=h.createElement(l),Ht(d,l,a),h.head.appendChild(d);break;case"meta":if(E=n1("meta","content",h).get(l+(a.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(T,1);break t}}d=h.createElement(l),Ht(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[At]=t,pt(d),l=d}t.stateNode=l}else i1(h,t.type,t.stateNode);else t.stateNode=t1(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?i1(h,t.type,t.stateNode):t1(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Td(t,t.memoizedProps,a.memoizedProps)}break;case 27:pn(i,t),mn(t),l&512&&(gt||a===null||ci(a,a.return)),a!==null&&l&4&&Td(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pn(i,t),mn(t),l&512&&(gt||a===null||ci(a,a.return)),t.flags&32){h=t.stateNode;try{Sn(h,"")}catch(Y){Ze(t,t.return,Y)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Td(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Ad=!0);break;case 6:if(pn(i,t),mn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(Y){Ze(t,t.return,Y)}}break;case 3:if(Lu=null,h=Bn,Bn=ku(i.containerInfo),pn(i,t),Bn=h,mn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ml(i.containerInfo)}catch(Y){Ze(t,t.return,Y)}Ad&&(Ad=!1,c0(t));break;case 4:l=Bn,Bn=ku(t.stateNode.containerInfo),pn(i,t),mn(t),Bn=l;break;case 12:pn(i,t),mn(t);break;case 13:pn(i,t),mn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Od=Tn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xd(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,q=Fi,X=gt;if(Fi=q||h,gt=X||C,pn(i,t),gt=X,Fi=q,mn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||C||Fi||gt||zs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=C.stateNode;var J=C.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(Y){Ze(C,C.return,Y)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(Y){Ze(C,C.return,Y)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,xd(t,a))));break;case 19:pn(i,t),mn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,xd(t,l)));break;case 30:break;case 21:break;default:pn(i,t),mn(t)}}function mn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(t0(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=wd(t);wu(t,d,h);break;case 5:var E=a.stateNode;a.flags&32&&(Sn(E,""),a.flags&=-33);var T=wd(t);wu(t,T,E);break;case 3:case 4:var C=a.stateNode.containerInfo,q=wd(t);Sd(t,q,C);break;default:throw Error(s(161))}}catch(X){Ze(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function c0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;c0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Sr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)r0(t,i.alternate,i),i=i.sibling}function zs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),zs(i);break;case 1:ci(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Jy(i,i.return,a),zs(i);break;case 27:Al(i.stateNode);case 26:case 5:ci(i,i.return),zs(i);break;case 22:i.memoizedState===null&&zs(i);break;case 30:zs(i);break;default:zs(i)}t=t.sibling}}function Ar(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Ar(h,d,a),ml(4,d);break;case 1:if(Ar(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){Ze(l,l.return,q)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)Lg(C[h],T)}catch(q){Ze(l,l.return,q)}}a&&E&64&&Zy(d),gl(d,d.return);break;case 27:n0(d);case 26:case 5:Ar(h,d,a),a&&l===null&&E&4&&e0(d),gl(d,d.return);break;case 12:Ar(h,d,a);break;case 13:Ar(h,d,a),a&&E&4&&o0(h,d);break;case 22:d.memoizedState===null&&Ar(h,d,a),gl(d,d.return);break;case 30:break;default:Ar(h,d,a)}i=i.sibling}}function Rd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&tl(a))}function Cd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&tl(t))}function ui(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)u0(t,i,a,l),i=i.sibling}function u0(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ui(t,i,a,l),h&2048&&ml(9,i);break;case 1:ui(t,i,a,l);break;case 3:ui(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&tl(t)));break;case 12:if(h&2048){ui(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Ze(i,i.return,C)}}else ui(t,i,a,l);break;case 13:ui(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?ui(t,i,a,l):yl(t,i):d._visibility&2?ui(t,i,a,l):(d._visibility|=2,Ua(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Rd(E,i);break;case 24:ui(t,i,a,l),h&2048&&Cd(i.alternate,i);break;default:ui(t,i,a,l)}}function Ua(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,E=i,T=a,C=l,q=E.flags;switch(E.tag){case 0:case 11:case 15:Ua(d,E,T,C,h),ml(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?Ua(d,E,T,C,h):yl(d,E):(X._visibility|=2,Ua(d,E,T,C,h)),h&&q&2048&&Rd(E.alternate,E);break;case 24:Ua(d,E,T,C,h),h&&q&2048&&Cd(E.alternate,E);break;default:Ua(d,E,T,C,h)}i=i.sibling}}function yl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:yl(a,l),h&2048&&Rd(l.alternate,l);break;case 24:yl(a,l),h&2048&&Cd(l.alternate,l);break;default:yl(a,l)}i=i.sibling}}var vl=8192;function za(t){if(t.subtreeFlags&vl)for(t=t.child;t!==null;)h0(t),t=t.sibling}function h0(t){switch(t.tag){case 26:za(t),t.flags&vl&&t.memoizedState!==null&&ST(Bn,t.memoizedState,t.memoizedProps);break;case 5:za(t);break;case 3:case 4:var i=Bn;Bn=ku(t.stateNode.containerInfo),za(t),Bn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=vl,vl=16777216,za(t),vl=i):za(t));break;default:za(t)}}function f0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function _l(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,p0(l,t)}f0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d0(t),t=t.sibling}function d0(t){switch(t.tag){case 0:case 11:case 15:_l(t),t.flags&2048&&wr(9,t,t.return);break;case 3:_l(t);break;case 12:_l(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Su(t)):_l(t);break;default:_l(t)}}function Su(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];kt=l,p0(l,t)}f0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:wr(8,i,i.return),Su(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Su(i));break;default:Su(i)}t=t.sibling}}function p0(t,i){for(;kt!==null;){var a=kt;switch(a.tag){case 0:case 11:case 15:wr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,kt=l;else e:for(a=t;kt!==null;){l=kt;var h=l.sibling,d=l.return;if(s0(l),l===a){kt=null;break e}if(h!==null){h.return=d,kt=h;break e}kt=d}}}var zb={getCacheForType:function(t){var i=Kt(Ct),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},Bb=typeof WeakMap=="function"?WeakMap:Map,Ge=0,et=null,Ne=null,je=0,Ye=0,gn=null,xr=!1,Ba=!1,Id=!1,Yi=0,ht=0,Rr=0,Bs=0,Nd=0,Mn=0,qa=0,El=null,on=null,Dd=!1,Od=0,Au=1/0,xu=null,Cr=null,qt=0,Ir=null,Ha=null,Fa=0,Md=0,Vd=null,m0=null,bl=0,Pd=null;function yn(){if((Ge&2)!==0&&je!==0)return je&-je;if($.T!==null){var t=Da;return t!==0?t:qd()}return ur()}function g0(){Mn===0&&(Mn=(je&536870912)===0||Be?No():536870912);var t=On.current;return t!==null&&(t.flags|=32),Mn}function vn(t,i,a){(t===et&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)&&(Ga(t,0),Nr(t,je,Mn,!1)),Si(t,a),((Ge&2)===0||t!==et)&&(t===et&&((Ge&2)===0&&(Bs|=a),ht===4&&Nr(t,je,Mn,!1)),hi(t))}function y0(t,i,a){if((Ge&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||ds(t,i),h=l?Fb(t,i):Ld(t,i,!0),d=l;do{if(h===0){Ba&&!l&&Nr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!qb(a)){h=Ld(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=t;h=El;var C=T.current.memoizedState.isDehydrated;if(C&&(Ga(T,E).flags|=256),E=Ld(T,E,!1),E!==2){if(Id&&!C){T.errorRecoveryDisabledLanes|=d,Bs|=d,h=4;break e}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){Ga(t,0),Nr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Nr(l,i,Mn,!xr);break e;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Od+300-Tn(),10<h)){if(Nr(l,i,Mn,!xr),la(l,0,!0)!==0)break e;l.timeoutHandle=Y0(v0.bind(null,l,a,on,xu,Dd,i,Mn,Bs,qa,xr,d,2,-0,0),h);break e}v0(l,a,on,xu,Dd,i,Mn,Bs,qa,xr,d,0,-0,0)}}break}while(!0);hi(t)}function v0(t,i,a,l,h,d,E,T,C,q,X,J,F,Y){if(t.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Cl={stylesheets:null,count:0,unsuspend:wT},h0(i),J=AT(),J!==null)){t.cancelPendingCommit=J(A0.bind(null,t,i,d,a,l,h,E,T,C,X,1,F,Y)),Nr(t,d,E,!q);return}A0(t,i,d,a,l,h,E,T,C)}function qb(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!fn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(t,i,a,l){i&=~Nd,i&=~Bs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Qt(h),E=1<<d;l[d]=-1,h&=~E}a!==0&&Xn(t,a,i)}function Ru(){return(Ge&6)===0?(Tl(0),!1):!0}function kd(){if(Ne!==null){if(Ye===0)var t=Ne.return;else t=Ne,Li=Ps=null,Jf(t),ja=null,fl=0,t=Ne;for(;t!==null;)Wy(t.alternate,t),t=t.return;Ne=null}}function Ga(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,aT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),kd(),et=t,Ne=a=Pi(t.current,null),je=i,Ye=0,gn=null,xr=!1,Ba=ds(t,i),Id=!1,qa=Mn=Nd=Bs=Rr=ht=0,on=El=null,Dd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Qt(l),d=1<<h;i|=t[h],l&=~d}return Yi=i,$c(),a}function _0(t,i){Re=null,$.H=pu,i===il||i===ru?(i=kg(),Ye=3):i===Mg?(i=kg(),Ye=4):Ye=i===jy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gn=i,Ne===null&&(ht=1,_u(t,Cn(i,t.current)))}function E0(){var t=$.H;return $.H=pu,t===null?pu:t}function b0(){var t=$.A;return $.A=zb,t}function jd(){ht=4,xr||(je&4194048)!==je&&On.current!==null||(Ba=!0),(Rr&134217727)===0&&(Bs&134217727)===0||et===null||Nr(et,je,Mn,!1)}function Ld(t,i,a){var l=Ge;Ge|=2;var h=E0(),d=b0();(et!==t||je!==i)&&(xu=null,Ga(t,i)),i=!1;var E=ht;e:do try{if(Ye!==0&&Ne!==null){var T=Ne,C=gn;switch(Ye){case 8:kd(),E=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var q=Ye;if(Ye=0,gn=null,Ya(t,T,C,q),a&&Ba){E=0;break e}break;default:q=Ye,Ye=0,gn=null,Ya(t,T,C,q)}}Hb(),E=ht;break}catch(X){_0(t,X)}while(!0);return i&&t.shellSuspendCounter++,Li=Ps=null,Ge=l,$.H=h,$.A=d,Ne===null&&(et=null,je=0,$c()),E}function Hb(){for(;Ne!==null;)T0(Ne)}function Fb(t,i){var a=Ge;Ge|=2;var l=E0(),h=b0();et!==t||je!==i?(xu=null,Au=Tn()+500,Ga(t,i)):Ba=ds(t,i);e:do try{if(Ye!==0&&Ne!==null){i=Ne;var d=gn;t:switch(Ye){case 1:Ye=0,gn=null,Ya(t,i,d,1);break;case 2:case 9:if(Vg(d)){Ye=0,gn=null,w0(i);break}i=function(){Ye!==2&&Ye!==9||et!==t||(Ye=7),hi(t)},d.then(i,i);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Vg(d)?(Ye=0,gn=null,w0(i)):(Ye=0,gn=null,Ya(t,i,d,7));break;case 5:var E=null;switch(Ne.tag){case 26:E=Ne.memoizedState;case 5:case 27:var T=Ne;if(!E||r1(E)){Ye=0,gn=null;var C=T.sibling;if(C!==null)Ne=C;else{var q=T.return;q!==null?(Ne=q,Cu(q)):Ne=null}break t}}Ye=0,gn=null,Ya(t,i,d,5);break;case 6:Ye=0,gn=null,Ya(t,i,d,6);break;case 8:kd(),ht=6;break e;default:throw Error(s(462))}}Gb();break}catch(X){_0(t,X)}while(!0);return Li=Ps=null,$.H=l,$.A=h,Ge=a,Ne!==null?0:(et=null,je=0,$c(),ht)}function Gb(){for(;Ne!==null&&!xo();)T0(Ne)}function T0(t){var i=$y(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,i===null?Cu(t):Ne=i}function w0(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Hy(a,i,i.pendingProps,i.type,void 0,je);break;case 11:i=Hy(a,i,i.pendingProps,i.type.render,i.ref,je);break;case 5:Jf(i);default:Wy(a,i),i=Ne=Sg(i,Yi),i=$y(a,i,Yi)}t.memoizedProps=t.pendingProps,i===null?Cu(t):Ne=i}function Ya(t,i,a,l){Li=Ps=null,Jf(i),ja=null,fl=0;var h=i.return;try{if(Vb(t,h,i,a,je)){ht=1,_u(t,Cn(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ht=1,_u(t,Cn(a,t.current)),Ne=null;return}i.flags&32768?(Be||l===1?t=!0:Ba||(je&536870912)!==0?t=!1:(xr=t=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),S0(i,t)):Cu(i)}function Cu(t){var i=t;do{if((i.flags&32768)!==0){S0(i,xr);return}t=i.return;var a=kb(i.alternate,i,Yi);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ht===0&&(ht=5)}function S0(t,i){do{var a=jb(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ht=6,Ne=null}function A0(t,i,a,l,h,d,E,T,C){t.cancelPendingCommit=null;do Iu();while(qt!==0);if((Ge&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Cf,Oo(t,a,d,E,T,C),t===et&&(Ne=et=null,je=0),Ha=i,Ir=t,Fa=a,Md=d,Vd=h,m0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$b(cs,function(){return N0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=$.T,$.T=null,h=ae.p,ae.p=2,E=Ge,Ge|=4;try{Lb(t,i,a)}finally{Ge=E,ae.p=h,$.T=l}}qt=1,x0(),R0(),C0()}}function x0(){if(qt===1){qt=0;var t=Ir,i=Ha,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=$.T,$.T=null;var l=ae.p;ae.p=2;var h=Ge;Ge|=4;try{l0(i,t);var d=Xd,E=pg(t.containerInfo),T=d.focusedElem,C=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&dg(T.ownerDocument.documentElement,T)){if(C!==null&&wf(T)){var q=C.start,X=C.end;if(X===void 0&&(X=q),"selectionStart"in T)T.selectionStart=q,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var Y=F.getSelection(),Te=T.textContent.length,ye=Math.min(C.start,Te),Xe=C.end===void 0?ye:Math.min(C.end,Te);!Y.extend&&ye>Xe&&(E=Xe,Xe=ye,ye=E);var j=fg(T,ye),M=fg(T,Xe);if(j&&M&&(Y.rangeCount!==1||Y.anchorNode!==j.node||Y.anchorOffset!==j.offset||Y.focusNode!==M.node||Y.focusOffset!==M.offset)){var z=J.createRange();z.setStart(j.node,j.offset),Y.removeAllRanges(),ye>Xe?(Y.addRange(z),Y.extend(M.node,M.offset)):(z.setEnd(M.node,M.offset),Y.addRange(z))}}}}for(J=[],Y=T;Y=Y.parentNode;)Y.nodeType===1&&J.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Bu=!!$d,Xd=$d=null}finally{Ge=h,ae.p=l,$.T=a}}t.current=i,qt=2}}function R0(){if(qt===2){qt=0;var t=Ir,i=Ha,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=$.T,$.T=null;var l=ae.p;ae.p=2;var h=Ge;Ge|=4;try{r0(t,i.alternate,i)}finally{Ge=h,ae.p=l,$.T=a}}qt=3}}function C0(){if(qt===4||qt===3){qt=0,Sc();var t=Ir,i=Ha,a=Fa,l=m0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qt=5:(qt=0,Ha=Ir=null,I0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Cr=null),ca(a),i=i.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ct,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=$.T,h=ae.p,ae.p=2,$.T=null;try{for(var d=t.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{$.T=i,ae.p=h}}(Fa&3)!==0&&Iu(),hi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===Pd?bl++:(bl=0,Pd=t):bl=0,Tl(0)}}function I0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,tl(i)))}function Iu(t){return x0(),R0(),C0(),N0()}function N0(){if(qt!==5)return!1;var t=Ir,i=Md;Md=0;var a=ca(Fa),l=$.T,h=ae.p;try{ae.p=32>a?32:a,$.T=null,a=Vd,Vd=null;var d=Ir,E=Fa;if(qt=0,Ha=Ir=null,Fa=0,(Ge&6)!==0)throw Error(s(331));var T=Ge;if(Ge|=4,d0(d.current),u0(d,d.current,E,a),Ge=T,Tl(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ct,d)}catch{}return!0}finally{ae.p=h,$.T=l,I0(t,i)}}function D0(t,i,a){i=Cn(a,i),i=dd(t.stateNode,i,2),t=_r(t,i,2),t!==null&&(Si(t,2),hi(t))}function Ze(t,i,a){if(t.tag===3)D0(t,t,a);else for(;i!==null;){if(i.tag===3){D0(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Cr===null||!Cr.has(l))){t=Cn(a,t),a=Py(2),l=_r(i,a,2),l!==null&&(ky(a,l,i,t),Si(l,2),hi(l));break}}i=i.return}}function Ud(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Bb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Id=!0,h.add(a),t=Yb.bind(null,t,i,a),i.then(t,t))}function Yb(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,et===t&&(je&a)===a&&(ht===4||ht===3&&(je&62914560)===je&&300>Tn()-Od?(Ge&2)===0&&Ga(t,0):Nd|=a,qa===je&&(qa=0)),hi(t)}function O0(t,i){i===0&&(i=Do()),t=Ra(t,i),t!==null&&(Si(t,i),hi(t))}function Qb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),O0(t,a)}function Kb(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),O0(t,a)}function $b(t,i){return os(t,i)}var Nu=null,Qa=null,zd=!1,Du=!1,Bd=!1,qs=0;function hi(t){t!==Qa&&t.next===null&&(Qa===null?Nu=Qa=t:Qa=Qa.next=t),Du=!0,zd||(zd=!0,Wb())}function Tl(t,i){if(!Bd&&Du){Bd=!0;do for(var a=!1,l=Nu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Qt(42|t)+1)-1,d&=h&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,k0(l,d))}else d=je,d=la(l,l===et?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ds(l,d)||(a=!0,k0(l,d));l=l.next}while(a);Bd=!1}}function Xb(){M0()}function M0(){Du=zd=!1;var t=0;qs!==0&&(sT()&&(t=qs),qs=0);for(var i=Tn(),a=null,l=Nu;l!==null;){var h=l.next,d=V0(l,i);d===0?(l.next=null,a===null?Nu=h:a.next=h,h===null&&(Qa=a)):(a=l,(t!==0||(d&3)!==0)&&(Du=!0)),l=h}Tl(t)}function V0(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Qt(d),T=1<<E,C=h[E];C===-1?((T&a)===0||(T&l)!==0)&&(h[E]=Io(T,i)):C<=i&&(t.expiredLanes|=T),d&=~T}if(i=et,a=je,a=la(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ye===2||Ye===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ls(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ds(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ls(l),ca(a)){case 2:case 8:a=aa;break;case 32:a=cs;break;case 268435456:a=oa;break;default:a=cs}return l=P0.bind(null,t),a=os(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ls(l),t.callbackPriority=2,t.callbackNode=null,2}function P0(t,i){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Iu()&&t.callbackNode!==a)return null;var l=je;return l=la(t,t===et?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(y0(t,l,i),V0(t,Tn()),t.callbackNode!=null&&t.callbackNode===a?P0.bind(null,t):null)}function k0(t,i){if(Iu())return null;y0(t,i,!0)}function Wb(){oT(function(){(Ge&6)!==0?os(Ro,Xb):M0()})}function qd(){return qs===0&&(qs=No()),qs}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ma(""+t)}function L0(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Zb(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=j0((h[vt]||null).action),E=l.submitter;E&&(i=(i=E[vt]||null)?j0(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new ga("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qs!==0){var C=E?L0(h,E):new FormData(h);ld(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=E?L0(h,E):new FormData(h),ld(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var Hd=0;Hd<Rf.length;Hd++){var Fd=Rf[Hd],Jb=Fd.toLowerCase(),eT=Fd[0].toUpperCase()+Fd.slice(1);zn(Jb,"on"+eT)}zn(yg,"onAnimationEnd"),zn(vg,"onAnimationIteration"),zn(_g,"onAnimationStart"),zn("dblclick","onDoubleClick"),zn("focusin","onFocus"),zn("focusout","onBlur"),zn(yb,"onTransitionRun"),zn(vb,"onTransitionStart"),zn(_b,"onTransitionCancel"),zn(Eg,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function U0(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],C=T.instance,q=T.currentTarget;if(T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=q;try{d(h)}catch(X){vu(X)}h.currentTarget=null,d=C}else for(E=0;E<l.length;E++){if(T=l[E],C=T.instance,q=T.currentTarget,T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=q;try{d(h)}catch(X){vu(X)}h.currentTarget=null,d=C}}}}function De(t,i){var a=i[Vo];a===void 0&&(a=i[Vo]=new Set);var l=t+"__bubble";a.has(l)||(z0(i,t,2,!1),a.add(l))}function Gd(t,i,a){var l=0;i&&(l|=4),z0(a,t,l,i)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function Yd(t){if(!t[Ou]){t[Ou]=!0,Po.forEach(function(a){a!=="selectionchange"&&(tT.has(a)||Gd(a,!1,t),Gd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ou]||(i[Ou]=!0,Gd("selectionchange",!1,i))}}function z0(t,i,a,l){switch(u1(i)){case 2:var h=CT;break;case 8:h=IT;break;default:h=ap}a=h.bind(null,i,a,t),h=void 0,!xn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Qd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===h)break;if(E===4)for(E=l.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;T!==null;){if(E=Ai(T),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){l=d=E;continue e}T=T.parentNode}}l=l.return}Vc(function(){var q=d,X=An(a),J=[];e:{var F=bg.get(t);if(F!==void 0){var Y=ga,Te=t;switch(t){case"keypress":if(ni(a)===0)break e;case"keydown":case"keyup":Y=Ta;break;case"focusin":Te="focus",Y=_a;break;case"focusout":Te="blur",Y=_a;break;case"beforeblur":case"afterblur":Y=_a;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=qc;break;case yg:case vg:case _g:Y=Ea;break;case Eg:Y=Fc;break;case"scroll":case"scrollend":Y=Pc;break;case"wheel":Y=wa;break;case"copy":case"cut":case"paste":Y=ba;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Qo;break;case"toggle":case"beforetoggle":Y=Yc}var ye=(i&4)!==0,Xe=!ye&&(t==="scroll"||t==="scrollend"),j=ye?F!==null?F+"Capture":null:F;ye=[];for(var M=q,z;M!==null;){var W=M;if(z=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||z===null||j===null||(W=bs(M,j),W!=null&&ye.push(Sl(M,W,z))),Xe)break;M=M.return}0<ye.length&&(F=new Y(F,Te,null,a,X),J.push({event:F,listeners:ye}))}}if((i&7)===0){e:{if(F=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",F&&a!==Ii&&(Te=a.relatedTarget||a.fromElement)&&(Ai(Te)||Te[wn]))break e;if((Y||F)&&(F=X.window===X?X:(F=X.ownerDocument)?F.defaultView||F.parentWindow:window,Y?(Te=a.relatedTarget||a.toElement,Y=q,Te=Te?Ai(Te):null,Te!==null&&(Xe=c(Te),ye=Te.tag,Te!==Xe||ye!==5&&ye!==27&&ye!==6)&&(Te=null)):(Y=null,Te=q),Y!==Te)){if(ye=Rn,W="onMouseLeave",j="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(ye=Qo,W="onPointerLeave",j="onPointerEnter",M="pointer"),Xe=Y==null?F:Zn(Y),z=Te==null?F:Zn(Te),F=new ye(W,M+"leave",Y,a,X),F.target=Xe,F.relatedTarget=z,W=null,Ai(X)===q&&(ye=new ye(j,M+"enter",Te,a,X),ye.target=z,ye.relatedTarget=Xe,W=ye),Xe=W,Y&&Te)t:{for(ye=Y,j=Te,M=0,z=ye;z;z=Ka(z))M++;for(z=0,W=j;W;W=Ka(W))z++;for(;0<M-z;)ye=Ka(ye),M--;for(;0<z-M;)j=Ka(j),z--;for(;M--;){if(ye===j||j!==null&&ye===j.alternate)break t;ye=Ka(ye),j=Ka(j)}ye=null}else ye=null;Y!==null&&B0(J,F,Y,ye,!1),Te!==null&&Xe!==null&&B0(J,Xe,Te,ye,!0)}}e:{if(F=q?Zn(q):window,Y=F.nodeName&&F.nodeName.toLowerCase(),Y==="select"||Y==="input"&&F.type==="file")var fe=ag;else if(Rt(F))if(og)fe=pb;else{fe=fb;var Ie=hb}else Y=F.nodeName,!Y||Y.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&zo(q.elementType)&&(fe=ag):fe=db;if(fe&&(fe=fe(t,q))){Vi(J,fe,a,X);break e}Ie&&Ie(t,F,q),t==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&pr(F,"number",F.value)}switch(Ie=q?Zn(q):window,t){case"focusin":(Rt(Ie)||Ie.contentEditable==="true")&&(Sa=Ie,Sf=q,Xo=null);break;case"focusout":Xo=Sf=Sa=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,mg(J,a,X);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":mg(J,a,X)}var pe;if(si)e:{switch(t){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Pe?Q(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(_&&a.locale!=="ko"&&(Pe||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Pe&&(pe=qo()):(ti=X,mr="value"in ti?ti.value:ti.textContent,Pe=!0)),Ie=Mu(q,ve),0<Ie.length&&(ve=new Go(ve,t,null,a,X),J.push({event:ve,listeners:Ie}),pe?ve.data=pe:(pe=se(a),pe!==null&&(ve.data=pe)))),(pe=v?xt(t,a):ke(t,a))&&(ve=Mu(q,"onBeforeInput"),0<ve.length&&(Ie=new Go("onBeforeInput","beforeinput",null,a,X),J.push({event:Ie,listeners:ve}),Ie.data=pe)),Zb(J,t,q,a,X)}U0(J,i)})}function Sl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Mu(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=bs(t,a),h!=null&&l.unshift(Sl(t,h,d)),h=bs(t,i),h!=null&&l.push(Sl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Ka(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function B0(t,i,a,l,h){for(var d=i._reactName,E=[];a!==null&&a!==l;){var T=a,C=T.alternate,q=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||q===null||(C=q,h?(q=bs(a,d),q!=null&&E.unshift(Sl(a,q,C))):h||(q=bs(a,d),q!=null&&E.push(Sl(a,q,C)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var nT=/\r\n?/g,iT=/\u0000|\uFFFD/g;function q0(t){return(typeof t=="string"?t:""+t).replace(nT,`
`).replace(iT,"")}function H0(t,i){return i=q0(i),q0(t)===i}function Vu(){}function $e(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Sn(t,""+l);break;case"className":Jn(t,"class",l);break;case"tabIndex":Jn(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(t,a,l);break;case"style":Uo(t,l,d);break;case"data":if(i!=="object"){Jn(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ma(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$e(t,i,"name",h.name,h,null),$e(t,i,"formEncType",h.formEncType,h,null),$e(t,i,"formMethod",h.formMethod,h,null),$e(t,i,"formTarget",h.formTarget,h,null)):($e(t,i,"encType",h.encType,h,null),$e(t,i,"method",h.method,h,null),$e(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ma(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=Vu);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ma(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),dr(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":dr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yf.get(a)||a,dr(t,a,l))}}function Kd(t,i,a,l,h,d){switch(a){case"style":Uo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&Sn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Vu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ua.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[vt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):dr(t,a,l)}}}function Ht(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(t,i,d,E,a,null)}}h&&$e(t,i,"srcSet",a.srcSet,a,null),l&&$e(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=d=E=h=null,C=null,q=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":h=X;break;case"type":E=X;break;case"checked":C=X;break;case"defaultChecked":q=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:$e(t,i,l,X,a,null)}}vs(t,d,T,C,q,E,h,!1),pa(t);return;case"select":De("invalid",t),l=E=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:$e(t,i,h,T,a,null)}i=d,a=E,t.multiple=!!l,i!=null?Ci(t,!!l,i,!1):a!=null&&Ci(t,!!l,a,!0);return;case"textarea":De("invalid",t),d=h=l=null;for(E in a)if(a.hasOwnProperty(E)&&(T=a[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:$e(t,i,E,T,a,null)}_s(t,l,h,d),pa(t);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$e(t,i,C,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<wl.length;l++)De(wl[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(l=a[q],l!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:$e(t,i,q,l,a,null)}return;default:if(zo(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Kd(t,i,X,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&$e(t,i,T,l,a,null))}function rT(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,T=null,C=null,q=null,X=null;for(Y in a){var J=a[Y];if(a.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(Y)||$e(t,i,Y,null,l,J)}}for(var F in l){var Y=l[F];if(J=a[F],l.hasOwnProperty(F)&&(Y!=null||J!=null))switch(F){case"type":d=Y;break;case"name":h=Y;break;case"checked":q=Y;break;case"defaultChecked":X=Y;break;case"value":E=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Y!==J&&$e(t,i,F,Y,l,J)}}hn(t,E,T,C,q,X,d,h);return;case"select":Y=E=T=F=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":Y=C;default:l.hasOwnProperty(d)||$e(t,i,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":F=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==C&&$e(t,i,h,d,l,C)}i=T,a=E,l=Y,F!=null?Ci(t,!!a,F,!1):!!l!=!!a&&(i!=null?Ci(t,!!a,i,!0):Ci(t,!!a,a?[]:"",!1));return;case"textarea":Y=F=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$e(t,i,T,null,l,h)}for(E in l)if(h=l[E],d=a[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":F=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&$e(t,i,E,h,l,d)}Qe(t,F,Y);return;case"option":for(var Te in a)if(F=a[Te],a.hasOwnProperty(Te)&&F!=null&&!l.hasOwnProperty(Te))switch(Te){case"selected":t.selected=!1;break;default:$e(t,i,Te,null,l,F)}for(C in l)if(F=l[C],Y=a[C],l.hasOwnProperty(C)&&F!==Y&&(F!=null||Y!=null))switch(C){case"selected":t.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:$e(t,i,C,F,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)F=a[ye],a.hasOwnProperty(ye)&&F!=null&&!l.hasOwnProperty(ye)&&$e(t,i,ye,null,l,F);for(q in l)if(F=l[q],Y=a[q],l.hasOwnProperty(q)&&F!==Y&&(F!=null||Y!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:$e(t,i,q,F,l,Y)}return;default:if(zo(i)){for(var Xe in a)F=a[Xe],a.hasOwnProperty(Xe)&&F!==void 0&&!l.hasOwnProperty(Xe)&&Kd(t,i,Xe,void 0,l,F);for(X in l)F=l[X],Y=a[X],!l.hasOwnProperty(X)||F===Y||F===void 0&&Y===void 0||Kd(t,i,X,F,l,Y);return}}for(var j in a)F=a[j],a.hasOwnProperty(j)&&F!=null&&!l.hasOwnProperty(j)&&$e(t,i,j,null,l,F);for(J in l)F=l[J],Y=a[J],!l.hasOwnProperty(J)||F===Y||F==null&&Y==null||$e(t,i,J,F,l,Y)}var $d=null,Xd=null;function Pu(t){return t.nodeType===9?t:t.ownerDocument}function F0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function G0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Wd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zd=null;function sT(){var t=window.event;return t&&t.type==="popstate"?t===Zd?!1:(Zd=t,!0):(Zd=null,!1)}var Y0=typeof setTimeout=="function"?setTimeout:void 0,aT=typeof clearTimeout=="function"?clearTimeout:void 0,Q0=typeof Promise=="function"?Promise:void 0,oT=typeof queueMicrotask=="function"?queueMicrotask:typeof Q0<"u"?function(t){return Q0.resolve(null).then(t).catch(lT)}:Y0;function lT(t){setTimeout(function(){throw t})}function Dr(t){return t==="head"}function K0(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=t.ownerDocument;if(a&1&&Al(E.documentElement),a&2&&Al(E.body),a&4)for(a=E.head,Al(a),E=a.firstChild;E;){var T=E.nextSibling,C=E.nodeName;E[ps]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=T}}if(h===0){t.removeChild(d),Ml(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Ml(i)}function Jd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jd(a),fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cT(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ps])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=qn(t.nextSibling),t===null)break}return null}function uT(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=qn(t.nextSibling),t===null))return null;return t}function ep(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function hT(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function qn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var tp=null;function $0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function X0(t,i,a){switch(i=Pu(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Al(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);fr(t)}var Vn=new Map,W0=new Set;function ku(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Qi=ae.d;ae.d={f:fT,r:dT,D:pT,C:mT,L:gT,m:yT,X:_T,S:vT,M:ET};function fT(){var t=Qi.f(),i=Ru();return t||i}function dT(t){var i=Wn(t);i!==null&&i.tag===5&&i.type==="form"?yy(i):Qi.r(t)}var $a=typeof document>"u"?null:document;function Z0(t,i,a){var l=$a;if(l&&typeof i=="string"&&i){var h=_t(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),W0.has(h)||(W0.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ht(i,"link",t),pt(i),l.head.appendChild(i)))}}function pT(t){Qi.D(t),Z0("dns-prefetch",t,null)}function mT(t,i){Qi.C(t,i),Z0("preconnect",t,i)}function gT(t,i,a){Qi.L(t,i,a);var l=$a;if(l&&t&&i){var h='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_t(a.imageSizes)+'"]')):h+='[href="'+_t(t)+'"]';var d=h;switch(i){case"style":d=Xa(t);break;case"script":d=Wa(t)}Vn.has(d)||(t=b({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Vn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(xl(d))||i==="script"&&l.querySelector(Rl(d))||(i=l.createElement("link"),Ht(i,"link",t),pt(i),l.head.appendChild(i)))}}function yT(t,i){Qi.m(t,i);var a=$a;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Wa(t)}if(!Vn.has(d)&&(t=b({rel:"modulepreload",href:t},i),Vn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rl(d)))return}l=a.createElement("link"),Ht(l,"link",t),pt(l),a.head.appendChild(l)}}}function vT(t,i,a){Qi.S(t,i,a);var l=$a;if(l&&t){var h=en(l).hoistableStyles,d=Xa(t);i=i||"default";var E=h.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(xl(d)))T.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Vn.get(d))&&np(t,a);var C=E=l.createElement("link");pt(C),Ht(C,"link",t),C._p=new Promise(function(q,X){C.onload=q,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ju(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},h.set(d,E)}}}function _T(t,i){Qi.X(t,i);var a=$a;if(a&&t){var l=en(a).hoistableScripts,h=Wa(t),d=l.get(h);d||(d=a.querySelector(Rl(h)),d||(t=b({src:t,async:!0},i),(i=Vn.get(h))&&ip(t,i),d=a.createElement("script"),pt(d),Ht(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ET(t,i){Qi.M(t,i);var a=$a;if(a&&t){var l=en(a).hoistableScripts,h=Wa(t),d=l.get(h);d||(d=a.querySelector(Rl(h)),d||(t=b({src:t,async:!0,type:"module"},i),(i=Vn.get(h))&&ip(t,i),d=a.createElement("script"),pt(d),Ht(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function J0(t,i,a,l){var h=(h=we.current)?ku(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Xa(a.href),a=en(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xa(a.href);var d=en(h).hoistableStyles,E=d.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=h.querySelector(xl(t)))&&!d._p&&(E.instance=d,E.state.loading=5),Vn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Vn.set(t,a),d||bT(h,t,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wa(a),a=en(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xa(t){return'href="'+_t(t)+'"'}function xl(t){return'link[rel="stylesheet"]['+t+"]"}function e1(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function bT(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ht(i,"link",a),pt(i),t.head.appendChild(i))}function Wa(t){return'[src="'+_t(t)+'"]'}function Rl(t){return"script[async]"+t}function t1(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return i.instance=l,pt(l),l;var h=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pt(l),Ht(l,"style",h),ju(l,a.precedence,t),i.instance=l;case"stylesheet":h=Xa(a.href);var d=t.querySelector(xl(h));if(d)return i.state.loading|=4,i.instance=d,pt(d),d;l=e1(a),(h=Vn.get(h))&&np(l,h),d=(t.ownerDocument||t).createElement("link"),pt(d);var E=d;return E._p=new Promise(function(T,C){E.onload=T,E.onerror=C}),Ht(d,"link",l),i.state.loading|=4,ju(d,a.precedence,t),i.instance=d;case"script":return d=Wa(a.src),(h=t.querySelector(Rl(d)))?(i.instance=h,pt(h),h):(l=a,(h=Vn.get(d))&&(l=b({},a),ip(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),pt(h),Ht(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ju(l,a.precedence,t));return i.instance}function ju(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function np(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ip(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Lu=null;function n1(t,i,a){if(Lu===null){var l=new Map,h=Lu=new Map;h.set(a,l)}else h=Lu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ps]||d[At]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=t+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function i1(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function TT(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function r1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Cl=null;function wT(){}function ST(t,i,a){if(Cl===null)throw Error(s(475));var l=Cl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Xa(a.href),d=t.querySelector(xl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,pt(d);return}d=t.ownerDocument||t,a=e1(a),(h=Vn.get(h))&&np(a,h),d=d.createElement("link"),pt(d);var E=d;E._p=new Promise(function(T,C){E.onload=T,E.onerror=C}),Ht(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Uu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function AT(){if(Cl===null)throw Error(s(475));var t=Cl;return t.stylesheets&&t.count===0&&rp(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&rp(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Uu(){if(this.count--,this.count===0){if(this.stylesheets)rp(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zu=null;function rp(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,i.forEach(xT,t),zu=null,Uu.call(t))}function xT(t,i){if(!(i.state.loading&4)){var a=zu.get(t);if(a)var l=a.get(null);else{a=new Map,zu.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,h),a.set(E,h),this.count++,l=Uu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Il={$$typeof:te,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function RT(t,i,a,l,h,d,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wi(0),this.hiddenUpdates=wi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function s1(t,i,a,l,h,d,E,T,C,q,X,J){return t=new RT(t,i,a,E,T,C,q,J),i=1,d===!0&&(i|=24),d=dn(3,null,null,i),t.current=d,d.stateNode=t,i=Uf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Hf(d),t}function a1(t){return t?(t=Ca,t):Ca}function o1(t,i,a,l,h,d){h=a1(h),l.context===null?l.context=h:l.pendingContext=h,l=vr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=_r(t,l,i),a!==null&&(vn(a,t,i),sl(a,t,i))}function l1(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function sp(t,i){l1(t,i),(t=t.alternate)&&l1(t,i)}function c1(t){if(t.tag===13){var i=Ra(t,67108864);i!==null&&vn(i,t,67108864),sp(t,67108864)}}var Bu=!0;function CT(t,i,a,l){var h=$.T;$.T=null;var d=ae.p;try{ae.p=2,ap(t,i,a,l)}finally{ae.p=d,$.T=h}}function IT(t,i,a,l){var h=$.T;$.T=null;var d=ae.p;try{ae.p=8,ap(t,i,a,l)}finally{ae.p=d,$.T=h}}function ap(t,i,a,l){if(Bu){var h=op(l);if(h===null)Qd(t,i,l,qu,a),h1(t,l);else if(DT(h,t,i,a,l))l.stopPropagation();else if(h1(t,l),i&4&&-1<NT.indexOf(t)){for(;h!==null;){var d=Wn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=jn(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var C=1<<31-Qt(E);T.entanglements[1]|=C,E&=~C}hi(d),(Ge&6)===0&&(Au=Tn()+500,Tl(0))}}break;case 13:T=Ra(d,2),T!==null&&vn(T,d,2),Ru(),sp(d,2)}if(d=op(l),d===null&&Qd(t,i,l,qu,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Qd(t,i,l,null,a)}}function op(t){return t=An(t),lp(t)}var qu=null;function lp(t){if(qu=null,t=Ai(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return qu=t,null}function u1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hf()){case Ro:return 2;case aa:return 8;case cs:case ff:return 32;case oa:return 268435456;default:return 32}default:return 32}}var cp=!1,Or=null,Mr=null,Vr=null,Nl=new Map,Dl=new Map,Pr=[],NT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h1(t,i){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Nl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(i.pointerId)}}function Ol(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Wn(i),i!==null&&c1(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function DT(t,i,a,l,h){switch(i){case"focusin":return Or=Ol(Or,t,i,a,l,h),!0;case"dragenter":return Mr=Ol(Mr,t,i,a,l,h),!0;case"mouseover":return Vr=Ol(Vr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Nl.set(d,Ol(Nl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Dl.set(d,Ol(Dl.get(d)||null,t,i,a,l,h)),!0}return!1}function f1(t){var i=Ai(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Rc(t.priority,function(){if(a.tag===13){var l=yn();l=cr(l);var h=Ra(a,l);h!==null&&vn(h,a,l),sp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=op(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ii=l,a.target.dispatchEvent(l),Ii=null}else return i=Wn(a),i!==null&&c1(i),t.blockedOn=a,!1;i.shift()}return!0}function d1(t,i,a){Hu(t)&&a.delete(i)}function OT(){cp=!1,Or!==null&&Hu(Or)&&(Or=null),Mr!==null&&Hu(Mr)&&(Mr=null),Vr!==null&&Hu(Vr)&&(Vr=null),Nl.forEach(d1),Dl.forEach(d1)}function Fu(t,i){t.blockedOn===i&&(t.blockedOn=null,cp||(cp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,OT)))}var Gu=null;function p1(t){Gu!==t&&(Gu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(lp(l||a)===null)continue;break}var d=Wn(a);d!==null&&(t.splice(i,3),i-=3,ld(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ml(t){function i(C){return Fu(C,t)}Or!==null&&Fu(Or,t),Mr!==null&&Fu(Mr,t),Vr!==null&&Fu(Vr,t),Nl.forEach(i),Dl.forEach(i);for(var a=0;a<Pr.length;a++){var l=Pr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)f1(a),a.blockedOn===null&&Pr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],E=h[vt]||null;if(typeof d=="function")E||p1(a);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[vt]||null)T=E.formAction;else if(lp(h)!==null)continue}else T=E.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),p1(a)}}}function up(t){this._internalRoot=t}Yu.prototype.render=up.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=yn();o1(a,l,t,i,null,null)},Yu.prototype.unmount=up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;o1(t.current,2,null,t,null,null),Ru(),i[wn]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var i=ur();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Pr.length&&i!==0&&i<Pr[a].priority;a++);Pr.splice(a,0,t),a===0&&f1(t)}};var m1=e.version;if(m1!=="19.1.1")throw Error(s(527,m1,"19.1.1"));ae.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var MT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:$,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{ct=Qu.inject(MT),Fe=Qu}catch{}}return Pl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Dy,d=Oy,E=My,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=s1(t,1,!1,null,null,a,l,h,d,E,T,null),t[wn]=i.current,Yd(t),new up(i)},Pl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Dy,E=Oy,T=My,C=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),i=s1(t,1,!0,i,a??null,l,h,d,E,T,C,q),i.context=a1(null),a=i.current,l=yn(),l=cr(l),h=vr(l),h.callback=null,_r(a,h,l),a=l,i.current.lanes=a,Si(i,a),hi(i),t[wn]=i.current,Yd(t),new Yu(i)},Pl.version="19.1.1",Pl}var A1;function FT(){if(A1)return dp.exports;A1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),dp.exports=HT(),dp.exports}var GT=FT();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var x1="popstate";function YT(r={}){function e(s,o){let{pathname:c,search:f,hash:p}=s.location;return Dp("",{pathname:c,search:f,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Xl(o)}return KT(e,n,null,r)}function ot(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function _i(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QT(){return Math.random().toString(36).substring(2,10)}function R1(r,e){return{usr:r.state,key:r.key,idx:e}}function Dp(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?mo(e):e,state:n,key:e&&e.key||s||QT()}}function Xl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function mo(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function KT(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,f=o.history,p="POP",m=null,y=b();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function b(){return(f.state||{idx:null}).idx}function S(){p="POP";let G=b(),K=G==null?null:G-y;y=G,m&&m({action:p,location:B.location,delta:K})}function A(G,K){p="PUSH";let ie=Dp(B.location,G,K);y=b()+1;let te=R1(ie,y),le=B.createHref(ie);try{f.pushState(te,"",le)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;o.location.assign(le)}c&&m&&m({action:p,location:B.location,delta:1})}function P(G,K){p="REPLACE";let ie=Dp(B.location,G,K);y=b();let te=R1(ie,y),le=B.createHref(ie);f.replaceState(te,"",le),c&&m&&m({action:p,location:B.location,delta:0})}function H(G){return $T(G)}let B={get action(){return p},get location(){return r(o,f)},listen(G){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(x1,S),m=G,()=>{o.removeEventListener(x1,S),m=null}},createHref(G){return e(o,G)},createURL:H,encodeLocation(G){let K=H(G);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:A,replace:P,go(G){return f.go(G)}};return B}function $T(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ot(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Xl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function u_(r,e,n="/"){return XT(r,e,n,!1)}function XT(r,e,n,s){let o=typeof e=="string"?mo(e):e,c=Zi(o.pathname||"/",n);if(c==null)return null;let f=h_(r);WT(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let y=lw(c);p=aw(f[m],y,s)}return p}function h_(r,e=[],n=[],s="",o=!1){let c=(f,p,m=o,y)=>{let b={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&m)return;ot(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let S=Xi([s,b.relativePath]),A=n.concat(b);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),h_(f.children,e,A,S,m)),!(f.path==null&&!f.index)&&e.push({path:S,score:rw(S,f.index),routesMeta:A})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of f_(f.path))c(f,p,!0,m)}),e}function f_(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let f=f_(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),o&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function WT(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:sw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var ZT=/^:[\w-]+$/,JT=3,ew=2,tw=1,nw=10,iw=-2,C1=r=>r==="*";function rw(r,e){let n=r.split("/"),s=n.length;return n.some(C1)&&(s+=iw),e&&(s+=ew),n.filter(o=>!C1(o)).reduce((o,c)=>o+(ZT.test(c)?JT:c===""?tw:nw),s)}function sw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function aw(r,e,n=!1){let{routesMeta:s}=r,o={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],y=p===s.length-1,b=c==="/"?e:e.slice(c.length)||"/",S=ph({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},b),A=m.route;if(!S&&y&&n&&!s[s.length-1].route.index&&(S=ph({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:Xi([c,S.pathname]),pathnameBase:fw(Xi([c,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(c=Xi([c,S.pathnameBase]))}return f}function ph(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=ow(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((y,{paramName:b,isOptional:S},A)=>{if(b==="*"){let H=p[A]||"";f=c.slice(0,c.length-H.length).replace(/(.)\/+$/,"$1")}const P=p[A];return S&&!P?y[b]=void 0:y[b]=(P||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function ow(r,e=!1,n=!0){_i(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function lw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _i(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Zi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function cw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?mo(r):r;return{pathname:n?n.startsWith("/")?n:uw(n,e):e,search:dw(s),hash:pw(o)}}function uw(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function yp(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function d_(r){let e=hw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function p_(r,e,n,s=!1){let o;typeof r=="string"?o=mo(r):(o={...r},ot(!o.pathname||!o.pathname.includes("?"),yp("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),yp("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),yp("#","search","hash",o)));let c=r===""||o.pathname==="",f=c?"/":o.pathname,p;if(f==null)p=n;else{let S=e.length-1;if(!s&&f.startsWith("..")){let A=f.split("/");for(;A[0]==="..";)A.shift(),S-=1;o.pathname=A.join("/")}p=S>=0?e[S]:"/"}let m=cw(o,p),y=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(y||b)&&(m.pathname+="/"),m}var Xi=r=>r.join("/").replace(/\/\/+/g,"/"),fw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),dw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,pw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function mw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var m_=["POST","PUT","PATCH","DELETE"];new Set(m_);var gw=["GET",...m_];new Set(gw);var go=L.createContext(null);go.displayName="DataRouter";var jh=L.createContext(null);jh.displayName="DataRouterState";L.createContext(!1);var g_=L.createContext({isTransitioning:!1});g_.displayName="ViewTransition";var yw=L.createContext(new Map);yw.displayName="Fetchers";var vw=L.createContext(null);vw.displayName="Await";var bi=L.createContext(null);bi.displayName="Navigation";var cc=L.createContext(null);cc.displayName="Location";var ir=L.createContext({outlet:null,matches:[],isDataRoute:!1});ir.displayName="Route";var om=L.createContext(null);om.displayName="RouteError";function _w(r,{relative:e}={}){ot(uc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=L.useContext(bi),{hash:o,pathname:c,search:f}=hc(r,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:Xi([n,c])),s.createHref({pathname:p,search:f,hash:o})}function uc(){return L.useContext(cc)!=null}function na(){return ot(uc(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(cc).location}var y_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function v_(r){L.useContext(bi).static||L.useLayoutEffect(r)}function yo(){let{isDataRoute:r}=L.useContext(ir);return r?Ow():Ew()}function Ew(){ot(uc(),"useNavigate() may be used only in the context of a <Router> component.");let r=L.useContext(go),{basename:e,navigator:n}=L.useContext(bi),{matches:s}=L.useContext(ir),{pathname:o}=na(),c=JSON.stringify(d_(s)),f=L.useRef(!1);return v_(()=>{f.current=!0}),L.useCallback((m,y={})=>{if(_i(f.current,y_),!f.current)return;if(typeof m=="number"){n.go(m);return}let b=p_(m,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:Xi([e,b.pathname])),(y.replace?n.replace:n.push)(b,y.state,y)},[e,n,c,o,r])}L.createContext(null);function hc(r,{relative:e}={}){let{matches:n}=L.useContext(ir),{pathname:s}=na(),o=JSON.stringify(d_(n));return L.useMemo(()=>p_(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function bw(r,e){return __(r,e)}function __(r,e,n,s){ot(uc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=L.useContext(bi),{matches:c}=L.useContext(ir),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",y=f?f.pathnameBase:"/",b=f&&f.route;{let K=b&&b.path||"";E_(m,!b||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let S=na(),A;if(e){let K=typeof e=="string"?mo(e):e;ot(y==="/"||K.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${K.pathname}" was given in the \`location\` prop.`),A=K}else A=S;let P=A.pathname||"/",H=P;if(y!=="/"){let K=y.replace(/^\//,"").split("/");H="/"+P.replace(/^\//,"").split("/").slice(K.length).join("/")}let B=u_(r,{pathname:H});_i(b||B!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),_i(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=xw(B&&B.map(K=>Object.assign({},K,{params:Object.assign({},p,K.params),pathname:Xi([y,o.encodeLocation?o.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?y:Xi([y,o.encodeLocation?o.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),c,n,s);return e&&G?L.createElement(cc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},G):G}function Tw(){let r=Dw(),e=mw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:c},"ErrorBoundary")," or"," ",L.createElement("code",{style:c},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:o},n):null,f)}var ww=L.createElement(Tw,null),Sw=class extends L.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?L.createElement(ir.Provider,{value:this.props.routeContext},L.createElement(om.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Aw({routeContext:r,match:e,children:n}){let s=L.useContext(go);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),L.createElement(ir.Provider,{value:r},n)}function xw(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,c=n?.errors;if(c!=null){let m=o.findIndex(y=>y.route.id&&c?.[y.route.id]!==void 0);ot(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,p=-1;if(n)for(let m=0;m<o.length;m++){let y=o[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=m),y.route.id){let{loaderData:b,errors:S}=n,A=y.route.loader&&!b.hasOwnProperty(y.route.id)&&(!S||S[y.route.id]===void 0);if(y.route.lazy||A){f=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,y,b)=>{let S,A=!1,P=null,H=null;n&&(S=c&&y.route.id?c[y.route.id]:void 0,P=y.route.errorElement||ww,f&&(p<0&&b===0?(E_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,H=null):p===b&&(A=!0,H=y.route.hydrateFallbackElement||null)));let B=e.concat(o.slice(0,b+1)),G=()=>{let K;return S?K=P:A?K=H:y.route.Component?K=L.createElement(y.route.Component,null):y.route.element?K=y.route.element:K=m,L.createElement(Aw,{match:y,routeContext:{outlet:m,matches:B,isDataRoute:n!=null},children:K})};return n&&(y.route.ErrorBoundary||y.route.errorElement||b===0)?L.createElement(Sw,{location:n.location,revalidation:n.revalidation,component:P,error:S,children:G(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):G()},null)}function lm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rw(r){let e=L.useContext(go);return ot(e,lm(r)),e}function Cw(r){let e=L.useContext(jh);return ot(e,lm(r)),e}function Iw(r){let e=L.useContext(ir);return ot(e,lm(r)),e}function cm(r){let e=Iw(r),n=e.matches[e.matches.length-1];return ot(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function Nw(){return cm("useRouteId")}function Dw(){let r=L.useContext(om),e=Cw("useRouteError"),n=cm("useRouteError");return r!==void 0?r:e.errors?.[n]}function Ow(){let{router:r}=Rw("useNavigate"),e=cm("useNavigate"),n=L.useRef(!1);return v_(()=>{n.current=!0}),L.useCallback(async(o,c={})=>{_i(n.current,y_),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var I1={};function E_(r,e,n){!e&&!I1[r]&&(I1[r]=!0,_i(!1,n))}L.memo(Mw);function Mw({routes:r,future:e,state:n}){return __(r,void 0,n,e)}function Lr(r){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vw({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:c=!1}){ot(!uc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=L.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=mo(n));let{pathname:m="/",search:y="",hash:b="",state:S=null,key:A="default"}=n,P=L.useMemo(()=>{let H=Zi(m,f);return H==null?null:{location:{pathname:H,search:y,hash:b,state:S,key:A},navigationType:s}},[f,m,y,b,S,A,s]);return _i(P!=null,`<Router basename="${f}"> is not able to match the URL "${m}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:L.createElement(bi.Provider,{value:p},L.createElement(cc.Provider,{children:e,value:P}))}function Pw({children:r,location:e}){return bw(Op(r),e)}function Op(r,e=[]){let n=[];return L.Children.forEach(r,(s,o)=>{if(!L.isValidElement(s))return;let c=[...e,o];if(s.type===L.Fragment){n.push.apply(n,Op(s.props.children,c));return}ot(s.type===Lr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Op(s.props.children,c)),n.push(f)}),n}var nh="get",ih="application/x-www-form-urlencoded";function Lh(r){return r!=null&&typeof r.tagName=="string"}function kw(r){return Lh(r)&&r.tagName.toLowerCase()==="button"}function jw(r){return Lh(r)&&r.tagName.toLowerCase()==="form"}function Lw(r){return Lh(r)&&r.tagName.toLowerCase()==="input"}function Uw(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function zw(r,e){return r.button===0&&(!e||e==="_self")&&!Uw(r)}var Ku=null;function Bw(){if(Ku===null)try{new FormData(document.createElement("form"),0),Ku=!1}catch{Ku=!0}return Ku}var qw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vp(r){return r!=null&&!qw.has(r)?(_i(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ih}"`),null):r}function Hw(r,e){let n,s,o,c,f;if(jw(r)){let p=r.getAttribute("action");s=p?Zi(p,e):null,n=r.getAttribute("method")||nh,o=vp(r.getAttribute("enctype"))||ih,c=new FormData(r)}else if(kw(r)||Lw(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?Zi(m,e):null,n=r.getAttribute("formmethod")||p.getAttribute("method")||nh,o=vp(r.getAttribute("formenctype"))||vp(p.getAttribute("enctype"))||ih,c=new FormData(p,r),!Bw()){let{name:y,type:b,value:S}=r;if(b==="image"){let A=y?`${y}.`:"";c.append(`${A}x`,"0"),c.append(`${A}y`,"0")}else y&&c.append(y,S)}}else{if(Lh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=nh,s=null,o=ih,f=r}return c&&o==="text/plain"&&(f=c,c=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function um(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Fw(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&Zi(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function Gw(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yw(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Qw(r,e,n){let s=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await Gw(c,n);return f.links?f.links():[]}return[]}));return Ww(s.flat(1).filter(Yw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function N1(r,e,n,s,o,c){let f=(m,y)=>n[y]?m.route.id!==n[y].route.id:!0,p=(m,y)=>n[y].pathname!==m.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,y)=>f(m,y)||p(m,y)):c==="data"?e.filter((m,y)=>{let b=s.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(f(m,y)||p(m,y))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Kw(r,e,{includeHydrateFallback:n}={}){return $w(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function $w(r){return[...new Set(r)]}function Xw(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function Ww(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let c=JSON.stringify(Xw(o));return n.has(c)||(n.add(c),s.push({key:c,link:o})),s},[])}function b_(){let r=L.useContext(go);return um(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Zw(){let r=L.useContext(jh);return um(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var hm=L.createContext(void 0);hm.displayName="FrameworkContext";function T_(){let r=L.useContext(hm);return um(r,"You must render this element inside a <HydratedRouter> element"),r}function Jw(r,e){let n=L.useContext(hm),[s,o]=L.useState(!1),[c,f]=L.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:y,onMouseLeave:b,onTouchStart:S}=e,A=L.useRef(null);L.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let B=K=>{K.forEach(ie=>{f(ie.isIntersecting)})},G=new IntersectionObserver(B,{threshold:.5});return A.current&&G.observe(A.current),()=>{G.disconnect()}}},[r]),L.useEffect(()=>{if(s){let B=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(B)}}},[s]);let P=()=>{o(!0)},H=()=>{o(!1),f(!1)};return n?r!=="intent"?[c,A,{}]:[c,A,{onFocus:kl(p,P),onBlur:kl(m,H),onMouseEnter:kl(y,P),onMouseLeave:kl(b,H),onTouchStart:kl(S,P)}]:[!1,A,{}]}function kl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function eS({page:r,...e}){let{router:n}=b_(),s=L.useMemo(()=>u_(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?L.createElement(nS,{page:r,matches:s,...e}):null}function tS(r){let{manifest:e,routeModules:n}=T_(),[s,o]=L.useState([]);return L.useEffect(()=>{let c=!1;return Qw(r,e,n).then(f=>{c||o(f)}),()=>{c=!0}},[r,e,n]),s}function nS({page:r,matches:e,...n}){let s=na(),{manifest:o,routeModules:c}=T_(),{basename:f}=b_(),{loaderData:p,matches:m}=Zw(),y=L.useMemo(()=>N1(r,e,m,o,s,"data"),[r,e,m,o,s]),b=L.useMemo(()=>N1(r,e,m,o,s,"assets"),[r,e,m,o,s]),S=L.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let H=new Set,B=!1;if(e.forEach(K=>{let ie=o.routes[K.route.id];!ie||!ie.hasLoader||(!y.some(te=>te.route.id===K.route.id)&&K.route.id in p&&c[K.route.id]?.shouldRevalidate||ie.hasClientLoader?B=!0:H.add(K.route.id))}),H.size===0)return[];let G=Fw(r,f,"data");return B&&H.size>0&&G.searchParams.set("_routes",e.filter(K=>H.has(K.route.id)).map(K=>K.route.id).join(",")),[G.pathname+G.search]},[f,p,s,o,y,e,r,c]),A=L.useMemo(()=>Kw(b,o),[b,o]),P=tS(b);return L.createElement(L.Fragment,null,S.map(H=>L.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...n})),A.map(H=>L.createElement("link",{key:H,rel:"modulepreload",href:H,...n})),P.map(({key:H,link:B})=>L.createElement("link",{key:H,nonce:n.nonce,...B})))}function iS(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var w_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w_&&(window.__reactRouterVersion="7.8.1")}catch{}function rS({basename:r,children:e,window:n}){let s=L.useRef();s.current==null&&(s.current=YT({window:n,v5Compat:!0}));let o=s.current,[c,f]=L.useState({action:o.action,location:o.location}),p=L.useCallback(m=>{L.startTransition(()=>f(m))},[f]);return L.useLayoutEffect(()=>o.listen(p),[o,p]),L.createElement(Vw,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var S_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,is=L.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:c,replace:f,state:p,target:m,to:y,preventScrollReset:b,viewTransition:S,...A},P){let{basename:H}=L.useContext(bi),B=typeof y=="string"&&S_.test(y),G,K=!1;if(typeof y=="string"&&B&&(G=y,w_))try{let R=new URL(window.location.href),O=y.startsWith("//")?new URL(R.protocol+y):new URL(y),N=Zi(O.pathname,H);O.origin===R.origin&&N!=null?y=N+O.search+O.hash:K=!0}catch{_i(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ie=_w(y,{relative:o}),[te,le,ue]=Jw(s,A),be=lS(y,{replace:f,state:p,target:m,preventScrollReset:b,relative:o,viewTransition:S});function V(R){e&&e(R),R.defaultPrevented||be(R)}let x=L.createElement("a",{...A,...ue,href:G||ie,onClick:K||c?e:V,ref:iS(P,le),target:m,"data-discover":!B&&n==="render"?"true":void 0});return te&&!B?L.createElement(L.Fragment,null,x,L.createElement(eS,{page:ie})):x});is.displayName="Link";var sS=L.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:c,to:f,viewTransition:p,children:m,...y},b){let S=hc(f,{relative:y.relative}),A=na(),P=L.useContext(jh),{navigator:H,basename:B}=L.useContext(bi),G=P!=null&&dS(S)&&p===!0,K=H.encodeLocation?H.encodeLocation(S).pathname:S.pathname,ie=A.pathname,te=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;n||(ie=ie.toLowerCase(),te=te?te.toLowerCase():null,K=K.toLowerCase()),te&&B&&(te=Zi(te,B)||te);const le=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ue=ie===K||!o&&ie.startsWith(K)&&ie.charAt(le)==="/",be=te!=null&&(te===K||!o&&te.startsWith(K)&&te.charAt(K.length)==="/"),V={isActive:ue,isPending:be,isTransitioning:G},x=ue?e:void 0,R;typeof s=="function"?R=s(V):R=[s,ue?"active":null,be?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let O=typeof c=="function"?c(V):c;return L.createElement(is,{...y,"aria-current":x,className:R,ref:b,style:O,to:f,viewTransition:p},typeof m=="function"?m(V):m)});sS.displayName="NavLink";var aS=L.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:c,method:f=nh,action:p,onSubmit:m,relative:y,preventScrollReset:b,viewTransition:S,...A},P)=>{let H=hS(),B=fS(p,{relative:y}),G=f.toLowerCase()==="get"?"get":"post",K=typeof p=="string"&&S_.test(p),ie=te=>{if(m&&m(te),te.defaultPrevented)return;te.preventDefault();let le=te.nativeEvent.submitter,ue=le?.getAttribute("formmethod")||f;H(le||te.currentTarget,{fetcherKey:e,method:ue,navigate:n,replace:o,state:c,relative:y,preventScrollReset:b,viewTransition:S})};return L.createElement("form",{ref:P,method:G,action:B,onSubmit:s?m:ie,...A,"data-discover":!K&&r==="render"?"true":void 0})});aS.displayName="Form";function oS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A_(r){let e=L.useContext(go);return ot(e,oS(r)),e}function lS(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:c,viewTransition:f}={}){let p=yo(),m=na(),y=hc(r,{relative:c});return L.useCallback(b=>{if(zw(b,e)){b.preventDefault();let S=n!==void 0?n:Xl(m)===Xl(y);p(r,{replace:S,state:s,preventScrollReset:o,relative:c,viewTransition:f})}},[m,p,y,n,s,e,r,o,c,f])}var cS=0,uS=()=>`__${String(++cS)}__`;function hS(){let{router:r}=A_("useSubmit"),{basename:e}=L.useContext(bi),n=Nw();return L.useCallback(async(s,o={})=>{let{action:c,method:f,encType:p,formData:m,body:y}=Hw(s,e);if(o.navigate===!1){let b=o.fetcherKey||uS();await r.fetch(b,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function fS(r,{relative:e}={}){let{basename:n}=L.useContext(bi),s=L.useContext(ir);ot(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...hc(r||".",{relative:e})},f=na();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(b=>b==="")){p.delete("index"),m.filter(S=>S).forEach(S=>p.append("index",S));let b=p.toString();c.search=b?`?${b}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Xi([n,c.pathname])),Xl(c)}function dS(r,{relative:e}={}){let n=L.useContext(g_);ot(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=A_("useViewTransitionState"),o=hc(r,{relative:e});if(!n.isTransitioning)return!1;let c=Zi(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=Zi(n.nextLocation.pathname,s)||n.nextLocation.pathname;return ph(o.pathname,f)!=null||ph(o.pathname,c)!=null}function fm(){return L.useEffect(()=>{const r=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),s=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=f=>{e.classList.contains("active")&&!e.contains(f.target)&&!r.contains(f.target)&&e.classList.remove("active")};return r.addEventListener("click",s),n.addEventListener("click",o),document.addEventListener("click",c),()=>{r.removeEventListener("click",s),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),g.jsx("div",{className:"header",children:g.jsxs("nav",{className:"navbar",children:[g.jsx("h1",{children:"Gold Corps Inc"}),g.jsxs("div",{className:"hamburger",id:"hamburger",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]}),g.jsxs("div",{className:"nav-links",id:"nav-links",children:[g.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),g.jsx("div",{className:"search-container",children:g.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),g.jsx("a",{className:"a",href:"#",children:"Home"}),g.jsx("a",{className:"a",href:"#about",children:"About us"}),g.jsx("a",{className:"a",href:"#contact",children:"Contact us"}),g.jsx("a",{className:"a",href:"#services",children:"Our services"}),g.jsx(is,{to:"/stock",children:g.jsx("a",{className:"a",href:"#stock",children:"Stock prices"})}),g.jsx("a",{className:"a",href:"#team",children:"Our team"}),g.jsx("a",{href:"#testimonial",children:"Testimonial"})]})]})})}const pS="/GoldcCorps/assets/image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",mS="/GoldcCorps/assets/image-2-BqTb_Qtz.jpeg",gS="/GoldcCorps/assets/image-3-Mfy9IzQb.jpeg",yS="/GoldcCorps/assets/image-4-BooAjJhm.jpeg";function vS(){const r=[pS,mS,gS,yS],[e,n]=L.useState(0);return L.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%r.length)},5e3);return()=>clearInterval(s)},[r.length]),g.jsxs("div",{className:"hero",children:[g.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${r[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),g.jsxs("div",{className:"hero-overlay",children:[g.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),g.jsx("p",{children:"Empowering you to grow wealth with confidence."}),g.jsx(is,{to:"/signup",children:g.jsx("button",{className:"btn btn1",children:"signup"})}),g.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var x_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},D1=Qs.createContext&&Qs.createContext(x_),_S=["attr","size","title"];function ES(r,e){if(r==null)return{};var n=bS(r,e),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function bS(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function mh(){return mh=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},mh.apply(this,arguments)}function O1(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,s)}return n}function gh(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O1(Object(n),!0).forEach(function(s){TS(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):O1(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function TS(r,e,n){return e=wS(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function wS(r){var e=SS(r,"string");return typeof e=="symbol"?e:e+""}function SS(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function R_(r){return r&&r.map((e,n)=>Qs.createElement(e.tag,gh({key:n},e.attr),R_(e.child)))}function nt(r){return e=>Qs.createElement(AS,mh({attr:gh({},r.attr)},e),R_(r.child))}function AS(r){var e=n=>{var{attr:s,size:o,title:c}=r,f=ES(r,_S),p=o||n.size||"1em",m;return n.className&&(m=n.className),r.className&&(m=(m?m+" ":"")+r.className),Qs.createElement("svg",mh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,f,{className:m,style:gh(gh({color:r.color||n.color},n.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&Qs.createElement("title",null,c),r.children)};return D1!==void 0?Qs.createElement(D1.Consumer,null,n=>e(n)):e(x_)}function xS(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(r)}function RS(r){return nt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function CS(r){return nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function IS(r){return nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function NS(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(r)}function Wl(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function Hl(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function DS(r){return nt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function OS(r){return nt({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function MS(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function VS(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(r)}function C_(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function PS(r){return nt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(r)}function I_(r){return nt({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function kS(r){return nt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function jS(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(r)}function N_(r){return nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(r)}function LS(r){return nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function D_(r){return nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function US(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function zS(r){return nt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function BS(r){return nt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function qS(r){return nt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function Uh(r){return nt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(r)}function HS(r){return nt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function FS(){return g.jsx("section",{id:"about",className:"about-section",children:g.jsxs("div",{className:"about-container",children:[g.jsxs("div",{className:"about-block",children:[g.jsx(xS,{className:"about-icon"}),g.jsx("h2",{children:"Our Business"}),g.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",g.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",g.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",g.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),g.jsxs("div",{className:"about-block",children:[g.jsx(Wl,{className:"about-icon"}),g.jsx("h2",{children:"Our Strategy"}),g.jsxs("p",{children:["We think beyond quarters — ",g.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",g.jsx("strong",{children:"exploring new mining frontiers"}),"to ",g.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",g.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),g.jsxs("div",{className:"about-block",children:[g.jsx(Uh,{className:"about-icon"}),g.jsx("h2",{children:"Our Purpose"}),g.jsxs("p",{children:["Gold Corps is on a mission to become ",g.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),g.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const GS=[{icon:g.jsx(Uh,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:g.jsx(IS,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:g.jsx(PS,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:g.jsx(Wl,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function YS(){return L.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let s=0;const o=()=>{const c=n/60;s<n?(s+=c,e.innerText=Math.ceil(s)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),g.jsxs("section",{className:"stats-section",id:"services",children:[g.jsxs("div",{className:"stats-header",children:[g.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),g.jsxs("p",{className:"stats-intro",children:["At ",g.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),g.jsx("div",{className:"stats-container",children:GS.map((r,e)=>g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon",children:r.icon}),g.jsx("h2",{className:"stat-value shimmer","data-target":r.value,"data-percent":r.label==="Growth"?"true":"",children:"0"}),g.jsx("p",{className:"stat-label",children:r.label}),g.jsx("span",{className:"stat-sub",children:r.sub}),g.jsx("p",{className:"stat-desc",children:r.desc})]},e))})]})}const QS=[{icon:g.jsx(Uh,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Goldfinance for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:g.jsx(Wl,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:g.jsx(I_,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:g.jsx(Wl,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],KS=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],Hs=[{quote:"Goldfinance helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Goldfinance delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Goldfinance for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function $S(r=".stat-value",e=1200){L.useEffect(()=>{const n=document.querySelectorAll(r);n.length&&n.forEach(s=>{const o=parseFloat(s.getAttribute("data-target"))||0,c=s.getAttribute("data-suffix")||"",f=performance.now(),p=m=>{const y=Math.min((m-f)/e,1),b=Math.floor(y*o);s.textContent=`${b.toLocaleString()}${c}`,y<1?requestAnimationFrame(p):s.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(p)})},[r,e])}function XS(){const[r,e]=L.useState(0);L.useEffect(()=>{const c=setInterval(()=>e(f=>(f+1)%Hs.length),6e3);return()=>clearInterval(c)},[]),$S(".stat-value",1200);const[n,s]=L.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),s("")};return g.jsxs("main",{className:"gold-landing",children:[g.jsx("header",{className:"hero-section",children:g.jsxs("div",{className:"hero-inner",children:[g.jsx("h1",{className:"hero-title",id:"team",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),g.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),g.jsxs("div",{className:"hero-cta",children:[g.jsx(is,{to:"/signup",children:g.jsx("button",{className:"btn btn-primary",children:" Get Started"})}),g.jsxs("button",{className:"btn btn-outline",children:[g.jsx(LS,{})," Watch Overview"]})]}),g.jsxs("div",{className:"hero-stats",children:[g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"6+"}),g.jsx("span",{className:"label",children:"Countries"})]}),g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"3,000+"}),g.jsx("span",{className:"label",children:"Investors"})]}),g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"80%"}),g.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),g.jsx("section",{className:"partners-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(RS,{className:"icon"})," Partner Companies & Recognitions"]}),g.jsx("p",{className:"muted",children:"Goldfinance is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),g.jsx("ul",{className:"partner-list",children:KS.map((c,f)=>g.jsxs("li",{className:"partner-item",children:[g.jsx("span",{className:"dot"})," ",c]},f))})]})}),g.jsx("section",{className:"why-section",children:g.jsxs("div",{className:"container split",children:[g.jsxs("div",{className:"col",children:[g.jsxs("h2",{children:[g.jsx(kS,{className:"icon"})," Why Choose Goldfinance"]}),g.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),g.jsxs("div",{className:"features-grid",children:[g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Tailored Solutions"}),g.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Long-term Partnership"}),g.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Active Opportunity Sourcing"}),g.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"24/7 Investor Support"}),g.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),g.jsxs("aside",{className:"col panel",children:[g.jsx("h3",{children:"Tailored for You"}),g.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),g.jsxs("div",{className:"panel-list",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"In Your Corner"}),g.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"We Do the Work"}),g.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Round-the-clock"}),g.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),g.jsx("section",{className:"how-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(Wl,{className:"icon"})," How It Works — Simple, Transparent, Profitable"]}),g.jsxs("ol",{className:"steps",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Refer & Qualify"})," — Invite new investors who deposit $100 or more."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Acquisition"})," — Our affiliate & media teams deploy targeted campaigns ($20–$40 per qualified lead)."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Profit Split"})," — A properly qualified referral generates $60–$80 in net value; volume scales returns."]})]}),g.jsxs("div",{className:"mini-case",children:[g.jsx("strong",{children:"Example (25 referrals)"}),g.jsxs("div",{className:"case-grid",children:[g.jsxs("div",{children:[g.jsx("span",{className:"case-number",children:"$2,000"}),g.jsx("div",{className:"case-label",children:"Estimated Expense"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"case-number",children:"$6,000–$8,000"}),g.jsx("div",{className:"case-label",children:"Projected Profit"})]})]})]}),g.jsx("p",{className:"muted small",children:"Affiliate success requires marketing expertise, a tested funnel and an operating budget — all of which we provide through our partners and proven teams."})]})}),g.jsx("section",{className:"stats-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(I_,{className:"icon"})," Key Metrics & Performance"]}),g.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),g.jsx("div",{className:"stats-grid",children:QS.map((c,f)=>g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon",children:c.icon}),g.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),g.jsx("div",{className:"stat-label",children:c.label}),g.jsx("div",{className:"stat-sub",children:c.sub}),g.jsx("div",{className:"stat-desc muted",children:c.desc})]},f))})]})}),g.jsx("section",{className:"miners-section",children:g.jsxs("div",{className:"container split",children:[g.jsxs("div",{className:"col",children:[g.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),g.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites. With five years of on-the-ground experience in asset development and day-to-day operations, our teams are trained for safe, high-quality production."}),g.jsxs("ul",{className:"miner-list",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),g.jsxs("aside",{className:"col panel",children:[g.jsx("h3",{children:"Geographic Reach"}),g.jsxs("div",{className:"geo-grid",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"Latham"}),g.jsx("span",{className:"muted",children:" — Headquarters"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Africa"}),g.jsx("span",{className:"muted",children:" — Resource operations"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Asia"}),g.jsx("span",{className:"muted",children:" — Development & trading"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Europe"}),g.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"CIS"}),g.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),g.jsx("section",{className:"testimonials-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(Uh,{className:"icon",id:"testimonial"})," Investor Testimonials"]}),g.jsxs("div",{className:"test-carousel",children:[g.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+Hs.length)%Hs.length),"aria-label":"Previous testimonial",children:g.jsx(DS,{})}),g.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[g.jsxs("blockquote",{children:["“",Hs[r].quote,"”"]}),g.jsxs("cite",{children:["— ",Hs[r].name,", ",g.jsx("span",{className:"muted",children:Hs[r].title})]})]}),g.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%Hs.length),"aria-label":"Next testimonial",children:g.jsx(OS,{})})]})]})}),g.jsx("section",{className:"cta-section",id:"contact",children:g.jsxs("div",{className:"container cta-panel",children:[g.jsxs("div",{children:[g.jsx("h2",{children:"Let's Work Together"}),g.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),g.jsxs("form",{className:"cta-form",onSubmit:o,children:[g.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),g.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>s(c.target.value)}),g.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),g.jsxs("footer",{className:"site-footer",children:[g.jsxs("div",{className:"container footer-grid",children:[g.jsxs("div",{children:[g.jsx("h4",{children:"Goldfinance"}),g.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),g.jsxs("div",{children:[g.jsx("h5",{children:"Company"}),g.jsxs("ul",{children:[g.jsx("li",{children:"About"}),g.jsx("li",{children:"Leadership"}),g.jsx("li",{children:"Careers"}),g.jsx("li",{children:"Contact"})]})]}),g.jsxs("div",{children:[g.jsx("h5",{children:"Resources"}),g.jsxs("ul",{children:[g.jsx("li",{children:"FAQ"}),g.jsx("li",{children:"Pricing Plans"}),g.jsx("li",{children:"Legal Notice"}),g.jsx("li",{children:"Privacy Policy"})]})]})]}),g.jsx("div",{className:"footer-bottom",children:g.jsxs("small",{children:["© ",new Date().getFullYear()," Goldfinance. All rights reserved."]})})]})]})}const WS=()=>{};var M1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},ZS=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],p=r[n++],m=((o&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return e.join("")},M_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,p=f?r[o+1]:0,m=o+2<r.length,y=m?r[o+2]:0,b=c>>2,S=(c&3)<<4|p>>4;let A=(p&15)<<2|y>>6,P=y&63;m||(P=64,f||(A=64)),s.push(n[b],n[S],n[A],n[P])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(O_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ZS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||p==null||y==null||S==null)throw new JS;const A=c<<2|p>>4;if(s.push(A),y!==64){const P=p<<4&240|y>>2;if(s.push(P),S!==64){const H=y<<6&192|S;s.push(H)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class JS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e4=function(r){const e=O_(r);return M_.encodeByteArray(e,!0)},yh=function(r){return e4(r).replace(/\./g,"")},V_=function(r){try{return M_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=()=>t4().__FIREBASE_DEFAULTS__,i4=()=>{if(typeof process>"u"||typeof M1>"u")return;const r=M1.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},r4=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&V_(r[1]);return e&&JSON.parse(e)},zh=()=>{try{return WS()||n4()||i4()||r4()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},P_=r=>zh()?.emulatorHosts?.[r],s4=r=>{const e=P_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},k_=()=>zh()?.config,j_=r=>zh()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function L_(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[yh(JSON.stringify(n)),yh(JSON.stringify(f)),""].join(".")}const Fl={};function l4(){const r={prod:[],emulator:[]};for(const e of Object.keys(Fl))Fl[e]?r.emulator.push(e):r.prod.push(e);return r}function c4(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let V1=!1;function U_(r,e){if(typeof window>"u"||typeof document>"u"||!vo(window.location.host)||Fl[r]===e||Fl[r]||V1)return;Fl[r]=e;function n(A){return`__firebase__banner__${A}`}const s="__firebase__banner",c=l4().prod.length>0;function f(){const A=document.getElementById(s);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function m(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{V1=!0,f()},A}function b(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function S(){const A=c4(s),P=n("text"),H=document.getElementById(P)||document.createElement("span"),B=n("learnmore"),G=document.getElementById(B)||document.createElement("a"),K=n("preprendIcon"),ie=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const te=A.element;p(te),b(G,B);const le=y();m(ie,K),te.append(ie,H,G,le),document.body.appendChild(te)}c?(H.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,H.innerText="Preview backend running in this workspace."),H.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function h4(){const r=zh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function f4(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d4(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function p4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m4(){const r=Jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function g4(){return!h4()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function y4(){try{return typeof indexedDB=="object"}catch{return!1}}function v4(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4="FirebaseError";class rr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_4,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],f=c?E4(c,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new rr(o,p,s)}}function E4(r,e){return r.replace(b4,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const b4=/\{\$([^}]+)}/g;function T4(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $s(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=e[o];if(P1(c)&&P1(f)){if(!$s(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function P1(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Ll(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function w4(r,e){const n=new S4(r,e);return n.subscribe.bind(n)}class S4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");A4(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=_p),o.error===void 0&&(o.error=_p),o.complete===void 0&&(o.complete=_p);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function A4(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function _p(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r){return r&&r._delegate?r._delegate:r}class Xs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new a4;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(C4(e))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=Fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fs){return this.instances.has(e)}getOptions(e=Fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:R4(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fs){return this.component?this.component.multipleInstances?e:Fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function R4(r){return r===Fs?void 0:r}function C4(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const N4={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},D4=Oe.INFO,O4={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},M4=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=O4[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dm{constructor(e){this.name=e,this._logLevel=D4,this._logHandler=M4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?N4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const V4=(r,e)=>e.some(n=>r instanceof n);let k1,j1;function P4(){return k1||(k1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function k4(){return j1||(j1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z_=new WeakMap,Mp=new WeakMap,B_=new WeakMap,Ep=new WeakMap,pm=new WeakMap;function j4(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Hr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&z_.set(n,r)}).catch(()=>{}),pm.set(e,r),e}function L4(r){if(Mp.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Mp.set(r,e)}let Vp={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Mp.get(r);if(e==="objectStoreNames")return r.objectStoreNames||B_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function U4(r){Vp=r(Vp)}function z4(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(bp(this),e,...n);return B_.set(s,e.sort?e.sort():[e]),Hr(s)}:k4().includes(r)?function(...e){return r.apply(bp(this),e),Hr(z_.get(this))}:function(...e){return Hr(r.apply(bp(this),e))}}function B4(r){return typeof r=="function"?z4(r):(r instanceof IDBTransaction&&L4(r),V4(r,P4())?new Proxy(r,Vp):r)}function Hr(r){if(r instanceof IDBRequest)return j4(r);if(Ep.has(r))return Ep.get(r);const e=B4(r);return e!==r&&(Ep.set(r,e),pm.set(e,r)),e}const bp=r=>pm.get(r);function q4(r,e,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,e),p=Hr(f);return s&&f.addEventListener("upgradeneeded",m=>{s(Hr(f.result),m.oldVersion,m.newVersion,Hr(f.transaction),m)}),n&&f.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const H4=["get","getKey","getAll","getAllKeys","count"],F4=["put","add","delete","clear"],Tp=new Map;function L1(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Tp.get(e))return Tp.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=F4.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||H4.includes(n)))return;const c=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),o&&m.done]))[0]};return Tp.set(e,c),c}U4(r=>({...r,get:(e,n,s)=>L1(e,n)||r.get(e,n,s),has:(e,n)=>!!L1(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Y4(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Y4(r){return r.getComponent()?.type==="VERSION"}const Pp="@firebase/app",U1="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new dm("@firebase/app"),Q4="@firebase/app-compat",K4="@firebase/analytics-compat",$4="@firebase/analytics",X4="@firebase/app-check-compat",W4="@firebase/app-check",Z4="@firebase/auth",J4="@firebase/auth-compat",eA="@firebase/database",tA="@firebase/data-connect",nA="@firebase/database-compat",iA="@firebase/functions",rA="@firebase/functions-compat",sA="@firebase/installations",aA="@firebase/installations-compat",oA="@firebase/messaging",lA="@firebase/messaging-compat",cA="@firebase/performance",uA="@firebase/performance-compat",hA="@firebase/remote-config",fA="@firebase/remote-config-compat",dA="@firebase/storage",pA="@firebase/storage-compat",mA="@firebase/firestore",gA="@firebase/ai",yA="@firebase/firestore-compat",vA="firebase",_A="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="[DEFAULT]",EA={[Pp]:"fire-core",[Q4]:"fire-core-compat",[$4]:"fire-analytics",[K4]:"fire-analytics-compat",[W4]:"fire-app-check",[X4]:"fire-app-check-compat",[Z4]:"fire-auth",[J4]:"fire-auth-compat",[eA]:"fire-rtdb",[tA]:"fire-data-connect",[nA]:"fire-rtdb-compat",[iA]:"fire-fn",[rA]:"fire-fn-compat",[sA]:"fire-iid",[aA]:"fire-iid-compat",[oA]:"fire-fcm",[lA]:"fire-fcm-compat",[cA]:"fire-perf",[uA]:"fire-perf-compat",[hA]:"fire-rc",[fA]:"fire-rc-compat",[dA]:"fire-gcs",[pA]:"fire-gcs-compat",[mA]:"fire-fst",[yA]:"fire-fst-compat",[gA]:"fire-vertex","fire-js":"fire-js",[vA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new Map,bA=new Map,jp=new Map;function z1(r,e){try{r.container.addComponent(e)}catch(n){Ji.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function oo(r){const e=r.name;if(jp.has(e))return Ji.debug(`There were multiple attempts to register component ${e}.`),!1;jp.set(e,r);for(const n of vh.values())z1(n,r);for(const n of bA.values())z1(n,r);return!0}function mm(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new fc("app","Firebase",TA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=_A;function q_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:kp,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Fr.create("bad-app-name",{appName:String(o)});if(n||(n=k_()),!n)throw Fr.create("no-options");const c=vh.get(o);if(c){if($s(n,c.options)&&$s(s,c.config))return c;throw Fr.create("duplicate-app",{appName:o})}const f=new I4(o);for(const m of jp.values())f.addComponent(m);const p=new wA(n,s,f);return vh.set(o,p),p}function H_(r=kp){const e=vh.get(r);if(!e&&r===kp&&k_())return q_();if(!e)throw Fr.create("no-app",{appName:r});return e}function Gr(r,e,n){let s=EA[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ji.warn(f.join(" "));return}oo(new Xs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="firebase-heartbeat-database",AA=1,Zl="firebase-heartbeat-store";let wp=null;function F_(){return wp||(wp=q4(SA,AA,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Fr.create("idb-open",{originalErrorMessage:r.message})})),wp}async function xA(r){try{const n=(await F_()).transaction(Zl),s=await n.objectStore(Zl).get(G_(r));return await n.done,s}catch(e){if(e instanceof rr)Ji.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e?.message});Ji.warn(n.message)}}}async function B1(r,e){try{const s=(await F_()).transaction(Zl,"readwrite");await s.objectStore(Zl).put(e,G_(r)),await s.done}catch(n){if(n instanceof rr)Ji.warn(n.message);else{const s=Fr.create("idb-set",{originalErrorMessage:n?.message});Ji.warn(s.message)}}}function G_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=1024,CA=30;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=q1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>CA){const o=OA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ji.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=q1(),{heartbeatsToSend:n,unsentEntries:s}=NA(this._heartbeatsCache.heartbeats),o=yh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ji.warn(e),""}}}function q1(){return new Date().toISOString().substring(0,10)}function NA(r,e=RA){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),H1(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),H1(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return y4()?v4().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xA(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return B1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return B1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function H1(r){return yh(JSON.stringify({version:2,heartbeats:r})).length}function OA(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(r){oo(new Xs("platform-logger",e=>new G4(e),"PRIVATE")),oo(new Xs("heartbeat",e=>new IA(e),"PRIVATE")),Gr(Pp,U1,r),Gr(Pp,U1,"esm2020"),Gr("fire-js","")}MA("");function Y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VA=Y_,Q_=new fc("auth","Firebase",Y_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new dm("@firebase/auth");function PA(r,...e){_h.logLevel<=Oe.WARN&&_h.warn(`Auth (${_o}): ${r}`,...e)}function rh(r,...e){_h.logLevel<=Oe.ERROR&&_h.error(`Auth (${_o}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(r,...e){throw ym(r,...e)}function Fn(r,...e){return ym(r,...e)}function gm(r,e,n){const s={...VA(),[e]:n};return new fc("auth","Firebase",s).create(e,{appName:r.name})}function Wi(r){return gm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kA(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&kn(r,"argument-error"),gm(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ym(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Q_.create(r,...e)}function _e(r,e,...n){if(!r)throw ym(e,...n)}function Ki(r){const e="INTERNAL ASSERTION FAILED: "+r;throw rh(e),new Error(e)}function er(r,e){r||Ki(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(){return typeof self<"u"&&self.location?.href||""}function jA(){return F1()==="http:"||F1()==="https:"}function F1(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jA()||d4()||"connection"in navigator)?navigator.onLine:!0}function UA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=u4()||p4()}get(){return LA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(r,e){er(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qA=new pc(3e4,6e4);function sr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ar(r,e,n,s,o={}){return $_(r,o,async()=>{let c={},f={};s&&(e==="GET"?f=s:c={body:JSON.stringify(s)});const p=dc({key:r.config.apiKey,...f}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:m,...c};return f4()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&vo(r.emulatorConfig.host)&&(y.credentials="include"),K_.fetch()(await X_(r,r.config.apiHost,n,p),y)})}async function $_(r,e,n){r._canInitEmulator=!1;const s={...zA,...e};try{const o=new FA(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw $u(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(r,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw $u(r,"email-already-in-use",f);if(m==="USER_DISABLED")throw $u(r,"user-disabled",f);const b=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw gm(r,b,y);kn(r,b)}}catch(o){if(o instanceof rr)throw o;kn(r,"network-request-failed",{message:String(o)})}}async function mc(r,e,n,s,o={}){const c=await ar(r,e,n,s,o);return"mfaPendingCredential"in c&&kn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function X_(r,e,n,s){const o=`${e}${n}?${s}`,c=r,f=c.config.emulator?vm(r.config,o):`${r.config.apiScheme}://${o}`;return BA.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function HA(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),qA.get())})}}function $u(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Fn(r,e,s);return o.customData._tokenResponse=n,o}function G1(r){return r!==void 0&&r.enterprise!==void 0}class GA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return HA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function YA(r,e){return ar(r,"GET","/v2/recaptchaConfig",sr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(r,e){return ar(r,"POST","/v1/accounts:delete",e)}async function Eh(r,e){return ar(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KA(r,e=!1){const n=Dt(r),s=await n.getIdToken(e),o=_m(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:Gl(Sp(o.auth_time)),issuedAtTime:Gl(Sp(o.iat)),expirationTime:Gl(Sp(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Sp(r){return Number(r)*1e3}function _m(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return rh("JWT malformed, contained fewer than 3 sections"),null;try{const o=V_(n);return o?JSON.parse(o):(rh("Failed to decode base64 JWT payload"),null)}catch(o){return rh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Y1(r){const e=_m(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof rr&&$A(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function $A({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gl(this.lastLoginAt),this.creationTime=Gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(r){const e=r.auth,n=await r.getIdToken(),s=await Jl(r,Eh(e,{idToken:n}));_e(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?W_(o.providerUserInfo):[],f=ZA(r.providerData,c),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!f?.length,y=p?m:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Up(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,b)}async function WA(r){const e=Dt(r);await bh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZA(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function W_(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(r,e){const n=await $_(r,{},async()=>{const s=dc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await X_(r,o,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&vo(r.emulatorConfig.host)&&(m.credentials="include"),K_.fetch()(f,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ex(r,e){return ar(r,"POST","/v2/accounts:revokeToken",sr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Y1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Y1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await JA(e,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new no;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),c&&(_e(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new no,this.toJSON())}_performRefresh(){return Ki("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new XA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Up(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return KA(this,e)}reload(){return WA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Wi(this.auth));const e=await this.getIdToken();return await Jl(this,QA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,y=n.createdAt??void 0,b=n.lastLoginAt??void 0,{uid:S,emailVerified:A,isAnonymous:P,providerData:H,stsTokenManager:B}=n;_e(S&&B,e,"internal-error");const G=no.fromJSON(this.name,B);_e(typeof S=="string",e,"internal-error"),jr(s,e.name),jr(o,e.name),_e(typeof A=="boolean",e,"internal-error"),_e(typeof P=="boolean",e,"internal-error"),jr(c,e.name),jr(f,e.name),jr(p,e.name),jr(m,e.name),jr(y,e.name),jr(b,e.name);const K=new Hn({uid:S,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:P,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:G,createdAt:y,lastLoginAt:b});return H&&Array.isArray(H)&&(K.providerData=H.map(ie=>({...ie}))),m&&(K._redirectEventId=m),K}static async _fromIdTokenResponse(e,n,s=!1){const o=new no;o.updateFromServerResponse(n);const c=new Hn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await bh(c),c}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?W_(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,p=new no;p.updateFromIdToken(s);const m=new Hn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Up(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new Map;function $i(r){er(r instanceof Function,"Expected a class definition");let e=Q1.get(r);return e?(er(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Q1.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Z_.type="NONE";const K1=Z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(r,e,n){return`firebase:${r}:${e}:${n}`}class io{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=sh(this.userKey,o.apiKey,c),this.fullPersistenceKey=sh("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Eh(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new io($i(K1),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||$i(K1);const f=sh(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const b=await y._get(f);if(b){let S;if(typeof b=="string"){const A=await Eh(e,{idToken:b}).catch(()=>{});if(!A)break;S=await Hn._fromGetAccountInfoResponse(e,A,b)}else S=Hn._fromJSON(e,b);y!==c&&(p=S),c=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new io(c,e,s):(c=m[0],p&&await c._set(f,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new io(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r2(e))return"Blackberry";if(s2(e))return"Webos";if(e2(e))return"Safari";if((e.includes("chrome/")||t2(e))&&!e.includes("edge/"))return"Chrome";if(i2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function J_(r=Jt()){return/firefox\//i.test(r)}function e2(r=Jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t2(r=Jt()){return/crios\//i.test(r)}function n2(r=Jt()){return/iemobile/i.test(r)}function i2(r=Jt()){return/android/i.test(r)}function r2(r=Jt()){return/blackberry/i.test(r)}function s2(r=Jt()){return/webos/i.test(r)}function Em(r=Jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function tx(r=Jt()){return Em(r)&&!!window.navigator?.standalone}function nx(){return m4()&&document.documentMode===10}function a2(r=Jt()){return Em(r)||i2(r)||s2(r)||r2(r)||/windows phone/i.test(r)||n2(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(r,e=[]){let n;switch(r){case"Browser":n=$1(Jt());break;case"Worker":n=`${$1(Jt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((f,p)=>{try{const m=e(c);f(m)}catch(m){p(m)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(r,e={}){return ar(r,"GET","/v2/passwordPolicy",sr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=6;class ax{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X1(this),this.idTokenSubscription=new X1(this),this.beforeStateQueue=new ix(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$i(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await io.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eh(this,{idToken:e}),s=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(_n(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&p?.user&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Wi(this));const n=e?Dt(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($i(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rx(this),n=new ax(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ex(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$i(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await io.create(this,[$i(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,o);return()=>{f=!0,m()}}else{const m=e.addObserver(n);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&PA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function or(r){return Dt(r)}class X1{constructor(e){this.auth=e,this.observer=null,this.addObserver=w4(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lx(r){Bh=r}function l2(r){return Bh.loadJS(r)}function cx(){return Bh.recaptchaEnterpriseScript}function ux(){return Bh.gapiScript}function hx(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class fx{constructor(){this.enterprise=new dx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class dx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const px="recaptcha-enterprise",c2="NO_RECAPTCHA";class mx{constructor(e){this.type=px,this.auth=or(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{YA(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new GA(m);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,f(y.siteKey)}}).catch(m=>{p(m)})})}function o(c,f,p){const m=window.grecaptcha;G1(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(y=>{f(y)}).catch(()=>{f(c2)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fx().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{s(this.auth).then(p=>{if(!n&&G1(window.grecaptcha))o(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=cx();m.length!==0&&(m+=p),l2(m).then(()=>{o(p,c,f)}).catch(y=>{f(y)})}}).catch(p=>{f(p)})})}}async function W1(r,e,n,s=!1,o=!1){const c=new mx(r);let f;if(o)f=c2;else try{f=await c.verify(n)}catch{f=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Th(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await W1(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await W1(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(r,e){const n=mm(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if($s(c,e??{}))return o;kn(o,"already-initialized")}return n.initialize({options:e})}function yx(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map($i);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function vx(r,e,n){const s=or(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=u2(e),{host:f,port:p}=_x(e),m=p===null?"":`:${p}`,y={url:`${c}//${f}${m}/`},b=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e($s(y,s.config.emulator)&&$s(b,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=b,s.settings.appVerificationDisabledForTesting=!0,vo(f)?(L_(`${c}//${f}${m}`),U_("Auth",!0)):Ex()}function u2(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function _x(r){const e=u2(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:Z1(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:Z1(f)}}}function Z1(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Ex(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ki("not implemented")}_getIdTokenResponse(e){return Ki("not implemented")}_linkToIdToken(e,n){return Ki("not implemented")}_getReauthenticationResolver(e){return Ki("not implemented")}}async function bx(r,e){return ar(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(r,e){return mc(r,"POST","/v1/accounts:signInWithPassword",sr(r,e))}async function wx(r,e){return ar(r,"POST","/v1/accounts:sendOobCode",sr(r,e))}async function Sx(r,e){return wx(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(r,e){return mc(r,"POST","/v1/accounts:signInWithEmailLink",sr(r,e))}async function xx(r,e){return mc(r,"POST","/v1/accounts:signInWithEmailLink",sr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec extends bm{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ec(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ec(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,n,"signInWithPassword",Tx);case"emailLink":return Ax(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,s,"signUpPassword",bx);case"emailLink":return xx(e,{idToken:n,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(r,e){return mc(r,"POST","/v1/accounts:signInWithIdp",sr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="http://localhost";class Ws extends bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const f=new Ws(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ro(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:Rx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ix(r){const e=jl(Ll(r)).link,n=e?jl(Ll(e)).deep_link_id:null,s=jl(Ll(r)).deep_link_id;return(s?jl(Ll(s)).link:null)||s||n||e||r}class Tm{constructor(e){const n=jl(Ll(e)),s=n.apiKey??null,o=n.oobCode??null,c=Cx(n.mode??null);_e(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ix(e);try{return new Tm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,n){return ec._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Tm.parseLink(n);return _e(s,"argument-error"),ec._fromEmailAndCode(e,s.code,s.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends gc{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends gc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return di.credential(n,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends gc{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends gc{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Br.credential(n,s)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(r,e){return mc(r,"POST","/v1/accounts:signUp",sr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const c=await Hn._fromIdTokenResponse(e,s,o),f=J1(s);return new Zs({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=J1(s);return new Zs({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function J1(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh extends rr{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,wh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new wh(e,n,s,o)}}function h2(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?wh._fromErrorAndOperation(r,c,e,s):c})}async function Dx(r,e,n=!1){const s=await Jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(r,e,n=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(Wi(s));const o="reauthenticate";try{const c=await Jl(r,h2(s,o,e,r),n);_e(c.idToken,s,"internal-error");const f=_m(c.idToken);_e(f,s,"internal-error");const{sub:p}=f;return _e(r.uid===p,s,"user-mismatch"),Zs._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&kn(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f2(r,e,n=!1){if(_n(r.app))return Promise.reject(Wi(r));const s="signIn",o=await h2(r,s,e),c=await Zs._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}async function Mx(r,e){return f2(or(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(r){const e=or(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vx(r,e,n){const s=or(r);await Th(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Sx)}async function Px(r,e,n){if(_n(r.app))return Promise.reject(Wi(r));const s=or(r),f=await Th(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nx).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&d2(r),m}),p=await Zs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function kx(r,e,n){return _n(r.app)?Promise.reject(Wi(r)):Mx(Dt(r),Eo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&d2(r),s})}function jx(r,e,n,s){return Dt(r).onIdTokenChanged(e,n,s)}function Lx(r,e,n){return Dt(r).beforeAuthStateChanged(e,n)}function p2(r,e,n,s){return Dt(r).onAuthStateChanged(e,n,s)}function Ux(r){return Dt(r).signOut()}const Sh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sh,"1"),this.storage.removeItem(Sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=1e3,Bx=10;class g2 extends m2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=a2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);nx()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Bx):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}g2.type="LOCAL";const qx=g2;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2 extends m2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}y2.type="SESSION";const v2=y2;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hx(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new qh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async y=>y(n.origin,c)),m=await Hx(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((p,m)=>{const y=Sm("",20);o.port1.start();const b=setTimeout(()=>{m(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(A.data.response);break;default:clearTimeout(b),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return window}function Gx(r){pi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(){return typeof pi().WorkerGlobalScope<"u"&&typeof pi().importScripts=="function"}async function Yx(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qx(){return navigator?.serviceWorker?.controller||null}function Kx(){return _2()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="firebaseLocalStorageDb",$x=1,Ah="firebaseLocalStorage",b2="fbase_key";class yc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hh(r,e){return r.transaction([Ah],e?"readwrite":"readonly").objectStore(Ah)}function Xx(){const r=indexedDB.deleteDatabase(E2);return new yc(r).toPromise()}function zp(){const r=indexedDB.open(E2,$x);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ah,{keyPath:b2})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ah)?e(s):(s.close(),await Xx(),e(await zp()))})})}async function ev(r,e,n){const s=Hh(r,!0).put({[b2]:e,value:n});return new yc(s).toPromise()}async function Wx(r,e){const n=Hh(r,!1).get(e),s=await new yc(n).toPromise();return s===void 0?null:s.value}function tv(r,e){const n=Hh(r,!0).delete(e);return new yc(n).toPromise()}const Zx=800,Jx=3;class T2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Jx)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qh._getInstance(Kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Yx(),!this.activeServiceWorker)return;this.sender=new Fx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zp();return await ev(e,Sh,"1"),await tv(e,Sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ev(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Wx(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Hh(o,!1).getAll();return new yc(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T2.type="LOCAL";const e6=T2;new pc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(r,e){return e?$i(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am extends bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t6(r){return f2(r.auth,new Am(r),r.bypassAuthState)}function n6(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),Ox(n,new Am(r),r.bypassAuthState)}async function i6(r){const{auth:e,user:n}=r;return _e(n,e,"internal-error"),Dx(n,new Am(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:p}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t6;case"linkViaPopup":case"linkViaRedirect":return i6;case"reauthViaPopup":case"reauthViaRedirect":return n6;default:kn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r6=new pc(2e3,1e4);async function A2(r,e,n){if(_n(r.app))return Promise.reject(Fn(r,"operation-not-supported-in-this-environment"));const s=or(r);kA(r,e,wm);const o=w2(s,n);return new Gs(s,"signInViaPopup",e,o).executeNotNull()}class Gs extends S2{constructor(e,n,s,o,c){super(e,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=Sm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r6.get())};e()}}Gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s6="pendingRedirect",ah=new Map;class a6 extends S2{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ah.get(this.auth._key());if(!e){try{const s=await o6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ah.set(this.auth._key(),e)}return this.bypassAuthState||ah.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o6(r,e){const n=u6(e),s=c6(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function l6(r,e){ah.set(r._key(),e)}function c6(r){return $i(r._redirectPersistence)}function u6(r){return sh(s6,r.config.apiKey,r.name)}async function h6(r,e,n=!1){if(_n(r.app))return Promise.reject(Wi(r));const s=or(r),o=w2(s,e),f=await new a6(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6=600*1e3;class d6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!p6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!x2(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f6&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function x2({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function p6(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x2(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m6(r,e={}){return ar(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y6=/^https?/;async function v6(r){if(r.config.emulator)return;const{authorizedDomains:e}=await m6(r);for(const n of e)try{if(_6(n))return}catch{}kn(r,"unauthorized-domain")}function _6(r){const e=Lp(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!y6.test(n))return!1;if(g6.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E6=new pc(3e4,6e4);function iv(){const r=pi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function b6(r){return new Promise((e,n)=>{function s(){iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iv(),n(Fn(r,"network-request-failed"))},timeout:E6.get()})}if(pi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(pi().gapi?.load)s();else{const o=hx("iframefcb");return pi()[o]=()=>{gapi.load?s():n(Fn(r,"network-request-failed"))},l2(`${ux()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw oh=null,e})}let oh=null;function T6(r){return oh=oh||b6(r),oh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=new pc(5e3,15e3),S6="__/auth/iframe",A6="emulator/auth/iframe",x6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C6(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?vm(e,A6):`https://${r.config.authDomain}/${S6}`,s={apiKey:e.apiKey,appName:r.name,v:_o},o=R6.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${dc(s).slice(1)}`}async function I6(r){const e=await T6(r),n=pi().gapi;return _e(n,r,"internal-error"),e.open({where:document.body,url:C6(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x6,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=Fn(r,"network-request-failed"),p=pi().setTimeout(()=>{c(f)},w6.get());function m(){pi().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{c(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D6=500,O6=600,M6="_blank",V6="http://localhost";class rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P6(r,e,n,s=D6,o=O6){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...N6,width:s.toString(),height:o.toString(),top:c,left:f},y=Jt().toLowerCase();n&&(p=t2(y)?M6:n),J_(y)&&(e=e||V6,m.scrollbars="yes");const b=Object.entries(m).reduce((A,[P,H])=>`${A}${P}=${H},`,"");if(tx(y)&&p!=="_self")return k6(e||"",p),new rv(null);const S=window.open(e||"",p,b);_e(S,r,"popup-blocked");try{S.focus()}catch{}return new rv(S)}function k6(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j6="__/auth/handler",L6="emulator/auth/handler",U6=encodeURIComponent("fac");async function sv(r,e,n,s,o,c){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:_o,eventId:o};if(e instanceof wm){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",T4(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,S]of Object.entries({}))f[b]=S}if(e instanceof gc){const b=e.getScopes().filter(S=>S!=="");b.length>0&&(f.scopes=b.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const m=await r._getAppCheckToken(),y=m?`#${U6}=${encodeURIComponent(m)}`:"";return`${z6(r)}?${dc(p).slice(1)}${y}`}function z6({config:r}){return r.emulator?vm(r,L6):`https://${r.authDomain}/${j6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="webStorageSupport";class B6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v2,this._completeRedirectFn=h6,this._overrideRedirectResult=l6}async _openPopup(e,n,s,o){er(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await sv(e,n,s,Lp(),o);return P6(e,c,Sm())}async _openRedirect(e,n,s,o){await this._originValidation(e);const c=await sv(e,n,s,Lp(),o);return Gx(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(er(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await I6(e),s=new d6(e);return n.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ap,{type:Ap},o=>{const c=o?.[0]?.[Ap];c!==void 0&&n(!!c),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return a2()||e2()||Em()}}const q6=B6;var av="@firebase/auth",ov="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F6(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G6(r){oo(new Xs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o2(r)},y=new ox(s,o,c,m);return yx(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),oo(new Xs("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(s=>new H6(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(av,ov,F6(r)),Gr(av,ov,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y6=300,Q6=j_("authIdTokenMaxAge")||Y6;let lv=null;const K6=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Q6)return;const o=n?.token;lv!==o&&(lv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $6(r=H_()){const e=mm(r,"auth");if(e.isInitialized())return e.getImmediate();const n=gx(r,{popupRedirectResolver:q6,persistence:[e6,qx,v2]}),s=j_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=K6(c.toString());Lx(n,f,()=>f(n.currentUser)),jx(n,p=>f(p))}}const o=P_("auth");return o&&vx(n,`http://${o}`),n}function X6(){return document.getElementsByTagName("head")?.[0]??document}lx({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const c=Fn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",X6().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G6("Browser");var cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,R2;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,x){function R(){}R.prototype=x.prototype,V.D=x.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(O,N,k){for(var I=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)I[dt-2]=arguments[dt];return x.prototype[N].apply(O,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,x,R){R||(R=0);var O=Array(16);if(typeof x=="string")for(var N=0;16>N;++N)O[N]=x.charCodeAt(R++)|x.charCodeAt(R++)<<8|x.charCodeAt(R++)<<16|x.charCodeAt(R++)<<24;else for(N=0;16>N;++N)O[N]=x[R++]|x[R++]<<8|x[R++]<<16|x[R++]<<24;x=V.g[0],R=V.g[1],N=V.g[2];var k=V.g[3],I=x+(k^R&(N^k))+O[0]+3614090360&4294967295;x=R+(I<<7&4294967295|I>>>25),I=k+(N^x&(R^N))+O[1]+3905402710&4294967295,k=x+(I<<12&4294967295|I>>>20),I=N+(R^k&(x^R))+O[2]+606105819&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(x^N&(k^x))+O[3]+3250441966&4294967295,R=N+(I<<22&4294967295|I>>>10),I=x+(k^R&(N^k))+O[4]+4118548399&4294967295,x=R+(I<<7&4294967295|I>>>25),I=k+(N^x&(R^N))+O[5]+1200080426&4294967295,k=x+(I<<12&4294967295|I>>>20),I=N+(R^k&(x^R))+O[6]+2821735955&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(x^N&(k^x))+O[7]+4249261313&4294967295,R=N+(I<<22&4294967295|I>>>10),I=x+(k^R&(N^k))+O[8]+1770035416&4294967295,x=R+(I<<7&4294967295|I>>>25),I=k+(N^x&(R^N))+O[9]+2336552879&4294967295,k=x+(I<<12&4294967295|I>>>20),I=N+(R^k&(x^R))+O[10]+4294925233&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(x^N&(k^x))+O[11]+2304563134&4294967295,R=N+(I<<22&4294967295|I>>>10),I=x+(k^R&(N^k))+O[12]+1804603682&4294967295,x=R+(I<<7&4294967295|I>>>25),I=k+(N^x&(R^N))+O[13]+4254626195&4294967295,k=x+(I<<12&4294967295|I>>>20),I=N+(R^k&(x^R))+O[14]+2792965006&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(x^N&(k^x))+O[15]+1236535329&4294967295,R=N+(I<<22&4294967295|I>>>10),I=x+(N^k&(R^N))+O[1]+4129170786&4294967295,x=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(x^R))+O[6]+3225465664&4294967295,k=x+(I<<9&4294967295|I>>>23),I=N+(x^R&(k^x))+O[11]+643717713&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^x&(N^k))+O[0]+3921069994&4294967295,R=N+(I<<20&4294967295|I>>>12),I=x+(N^k&(R^N))+O[5]+3593408605&4294967295,x=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(x^R))+O[10]+38016083&4294967295,k=x+(I<<9&4294967295|I>>>23),I=N+(x^R&(k^x))+O[15]+3634488961&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^x&(N^k))+O[4]+3889429448&4294967295,R=N+(I<<20&4294967295|I>>>12),I=x+(N^k&(R^N))+O[9]+568446438&4294967295,x=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(x^R))+O[14]+3275163606&4294967295,k=x+(I<<9&4294967295|I>>>23),I=N+(x^R&(k^x))+O[3]+4107603335&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^x&(N^k))+O[8]+1163531501&4294967295,R=N+(I<<20&4294967295|I>>>12),I=x+(N^k&(R^N))+O[13]+2850285829&4294967295,x=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(x^R))+O[2]+4243563512&4294967295,k=x+(I<<9&4294967295|I>>>23),I=N+(x^R&(k^x))+O[7]+1735328473&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^x&(N^k))+O[12]+2368359562&4294967295,R=N+(I<<20&4294967295|I>>>12),I=x+(R^N^k)+O[5]+4294588738&4294967295,x=R+(I<<4&4294967295|I>>>28),I=k+(x^R^N)+O[8]+2272392833&4294967295,k=x+(I<<11&4294967295|I>>>21),I=N+(k^x^R)+O[11]+1839030562&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^x)+O[14]+4259657740&4294967295,R=N+(I<<23&4294967295|I>>>9),I=x+(R^N^k)+O[1]+2763975236&4294967295,x=R+(I<<4&4294967295|I>>>28),I=k+(x^R^N)+O[4]+1272893353&4294967295,k=x+(I<<11&4294967295|I>>>21),I=N+(k^x^R)+O[7]+4139469664&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^x)+O[10]+3200236656&4294967295,R=N+(I<<23&4294967295|I>>>9),I=x+(R^N^k)+O[13]+681279174&4294967295,x=R+(I<<4&4294967295|I>>>28),I=k+(x^R^N)+O[0]+3936430074&4294967295,k=x+(I<<11&4294967295|I>>>21),I=N+(k^x^R)+O[3]+3572445317&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^x)+O[6]+76029189&4294967295,R=N+(I<<23&4294967295|I>>>9),I=x+(R^N^k)+O[9]+3654602809&4294967295,x=R+(I<<4&4294967295|I>>>28),I=k+(x^R^N)+O[12]+3873151461&4294967295,k=x+(I<<11&4294967295|I>>>21),I=N+(k^x^R)+O[15]+530742520&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^x)+O[2]+3299628645&4294967295,R=N+(I<<23&4294967295|I>>>9),I=x+(N^(R|~k))+O[0]+4096336452&4294967295,x=R+(I<<6&4294967295|I>>>26),I=k+(R^(x|~N))+O[7]+1126891415&4294967295,k=x+(I<<10&4294967295|I>>>22),I=N+(x^(k|~R))+O[14]+2878612391&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~x))+O[5]+4237533241&4294967295,R=N+(I<<21&4294967295|I>>>11),I=x+(N^(R|~k))+O[12]+1700485571&4294967295,x=R+(I<<6&4294967295|I>>>26),I=k+(R^(x|~N))+O[3]+2399980690&4294967295,k=x+(I<<10&4294967295|I>>>22),I=N+(x^(k|~R))+O[10]+4293915773&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~x))+O[1]+2240044497&4294967295,R=N+(I<<21&4294967295|I>>>11),I=x+(N^(R|~k))+O[8]+1873313359&4294967295,x=R+(I<<6&4294967295|I>>>26),I=k+(R^(x|~N))+O[15]+4264355552&4294967295,k=x+(I<<10&4294967295|I>>>22),I=N+(x^(k|~R))+O[6]+2734768916&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~x))+O[13]+1309151649&4294967295,R=N+(I<<21&4294967295|I>>>11),I=x+(N^(R|~k))+O[4]+4149444226&4294967295,x=R+(I<<6&4294967295|I>>>26),I=k+(R^(x|~N))+O[11]+3174756917&4294967295,k=x+(I<<10&4294967295|I>>>22),I=N+(x^(k|~R))+O[2]+718787259&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~x))+O[9]+3951481745&4294967295,V.g[0]=V.g[0]+x&4294967295,V.g[1]=V.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,V.g[2]=V.g[2]+N&4294967295,V.g[3]=V.g[3]+k&4294967295}s.prototype.u=function(V,x){x===void 0&&(x=V.length);for(var R=x-this.blockSize,O=this.B,N=this.h,k=0;k<x;){if(N==0)for(;k<=R;)o(this,V,k),k+=this.blockSize;if(typeof V=="string"){for(;k<x;)if(O[N++]=V.charCodeAt(k++),N==this.blockSize){o(this,O),N=0;break}}else for(;k<x;)if(O[N++]=V[k++],N==this.blockSize){o(this,O),N=0;break}}this.h=N,this.o+=x},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var x=1;x<V.length-8;++x)V[x]=0;var R=8*this.o;for(x=V.length-8;x<V.length;++x)V[x]=R&255,R/=256;for(this.u(V),V=Array(16),x=R=0;4>x;++x)for(var O=0;32>O;O+=8)V[R++]=this.g[x]>>>O&255;return V};function c(V,x){var R=p;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=x(V)}function f(V,x){this.h=x;for(var R=[],O=!0,N=V.length-1;0<=N;N--){var k=V[N]|0;O&&k==x||(R[N]=k,O=!1)}this.g=R}var p={};function m(V){return-128<=V&&128>V?c(V,function(x){return new f([x|0],0>x?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return S;if(0>V)return G(y(-V));for(var x=[],R=1,O=0;V>=R;O++)x[O]=V/R|0,R*=4294967296;return new f(x,0)}function b(V,x){if(V.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(V.charAt(0)=="-")return G(b(V.substring(1),x));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(x,8)),O=S,N=0;N<V.length;N+=8){var k=Math.min(8,V.length-N),I=parseInt(V.substring(N,N+k),x);8>k?(k=y(Math.pow(x,k)),O=O.j(k).add(y(I))):(O=O.j(R),O=O.add(y(I)))}return O}var S=m(0),A=m(1),P=m(16777216);r=f.prototype,r.m=function(){if(B(this))return-G(this).m();for(var V=0,x=1,R=0;R<this.g.length;R++){var O=this.i(R);V+=(0<=O?O:4294967296+O)*x,x*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(H(this))return"0";if(B(this))return"-"+G(this).toString(V);for(var x=y(Math.pow(V,6)),R=this,O="";;){var N=le(R,x).g;R=K(R,N.j(x));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=N,H(R))return k+O;for(;6>k.length;)k="0"+k;O=k+O}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function H(V){if(V.h!=0)return!1;for(var x=0;x<V.g.length;x++)if(V.g[x]!=0)return!1;return!0}function B(V){return V.h==-1}r.l=function(V){return V=K(this,V),B(V)?-1:H(V)?0:1};function G(V){for(var x=V.g.length,R=[],O=0;O<x;O++)R[O]=~V.g[O];return new f(R,~V.h).add(A)}r.abs=function(){return B(this)?G(this):this},r.add=function(V){for(var x=Math.max(this.g.length,V.g.length),R=[],O=0,N=0;N<=x;N++){var k=O+(this.i(N)&65535)+(V.i(N)&65535),I=(k>>>16)+(this.i(N)>>>16)+(V.i(N)>>>16);O=I>>>16,k&=65535,I&=65535,R[N]=I<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function K(V,x){return V.add(G(x))}r.j=function(V){if(H(this)||H(V))return S;if(B(this))return B(V)?G(this).j(G(V)):G(G(this).j(V));if(B(V))return G(this.j(G(V)));if(0>this.l(P)&&0>V.l(P))return y(this.m()*V.m());for(var x=this.g.length+V.g.length,R=[],O=0;O<2*x;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var N=0;N<V.g.length;N++){var k=this.i(O)>>>16,I=this.i(O)&65535,dt=V.i(N)>>>16,We=V.i(N)&65535;R[2*O+2*N]+=I*We,ie(R,2*O+2*N),R[2*O+2*N+1]+=k*We,ie(R,2*O+2*N+1),R[2*O+2*N+1]+=I*dt,ie(R,2*O+2*N+1),R[2*O+2*N+2]+=k*dt,ie(R,2*O+2*N+2)}for(O=0;O<x;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=x;O<2*x;O++)R[O]=0;return new f(R,0)};function ie(V,x){for(;(V[x]&65535)!=V[x];)V[x+1]+=V[x]>>>16,V[x]&=65535,x++}function te(V,x){this.g=V,this.h=x}function le(V,x){if(H(x))throw Error("division by zero");if(H(V))return new te(S,S);if(B(V))return x=le(G(V),x),new te(G(x.g),G(x.h));if(B(x))return x=le(V,G(x)),new te(G(x.g),x.h);if(30<V.g.length){if(B(V)||B(x))throw Error("slowDivide_ only works with positive integers.");for(var R=A,O=x;0>=O.l(V);)R=ue(R),O=ue(O);var N=be(R,1),k=be(O,1);for(O=be(O,2),R=be(R,2);!H(O);){var I=k.add(O);0>=I.l(V)&&(N=N.add(R),k=I),O=be(O,1),R=be(R,1)}return x=K(V,N.j(x)),new te(N,x)}for(N=S;0<=V.l(x);){for(R=Math.max(1,Math.floor(V.m()/x.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),k=y(R),I=k.j(x);B(I)||0<I.l(V);)R-=O,k=y(R),I=k.j(x);H(k)&&(k=A),N=N.add(k),V=K(V,I)}return new te(N,V)}r.A=function(V){return le(this,V).h},r.and=function(V){for(var x=Math.max(this.g.length,V.g.length),R=[],O=0;O<x;O++)R[O]=this.i(O)&V.i(O);return new f(R,this.h&V.h)},r.or=function(V){for(var x=Math.max(this.g.length,V.g.length),R=[],O=0;O<x;O++)R[O]=this.i(O)|V.i(O);return new f(R,this.h|V.h)},r.xor=function(V){for(var x=Math.max(this.g.length,V.g.length),R=[],O=0;O<x;O++)R[O]=this.i(O)^V.i(O);return new f(R,this.h^V.h)};function ue(V){for(var x=V.g.length+1,R=[],O=0;O<x;O++)R[O]=V.i(O)<<1|V.i(O-1)>>>31;return new f(R,V.h)}function be(V,x){var R=x>>5;x%=32;for(var O=V.g.length-R,N=[],k=0;k<O;k++)N[k]=0<x?V.i(k+R)>>>x|V.i(k+R+1)<<32-x:V.i(k+R);return new f(N,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,R2=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=b,Yr=f}).apply(typeof cv<"u"?cv:typeof self<"u"?self:typeof window<"u"?window:{});var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var C2,Ul,I2,lh,Bp,N2,D2,O2;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,v,_){return u==Array.prototype||u==Object.prototype||(u[v]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xu=="object"&&Xu];for(var v=0;v<u.length;++v){var _=u[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,v){if(v)e:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var U=u[w];if(!(U in _))break e;_=_[U]}u=u[u.length-1],w=_[u],v=v(w),v!=w&&v!=null&&e(_,u,{configurable:!0,writable:!0,value:v})}}function c(u,v){u instanceof String&&(u+="");var _=0,w=!1,U={next:function(){if(!w&&_<u.length){var Q=_++;return{value:v(Q,u[Q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(u){return u||function(){return c(this,function(v,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(u){var v=typeof u;return v=v!="object"?v:u?Array.isArray(u)?"array":v:"null",v=="array"||v=="object"&&typeof u.length=="number"}function y(u){var v=typeof u;return v=="object"&&u!=null||v=="function"}function b(u,v,_){return u.call.apply(u.bind,arguments)}function S(u,v,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,w),u.apply(v,U)}}return function(){return u.apply(v,arguments)}}function A(u,v,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:S,A.apply(null,arguments)}function P(u,v){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function H(u,v){function _(){}_.prototype=v.prototype,u.aa=v.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,U,Q){for(var se=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)se[Pe-2]=arguments[Pe];return v.prototype[U].apply(w,se)}}function B(u){const v=u.length;if(0<v){const _=Array(v);for(let w=0;w<v;w++)_[w]=u[w];return _}return[]}function G(u,v){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(m(w)){const U=u.length||0,Q=w.length||0;u.length=U+Q;for(let se=0;se<Q;se++)u[U+se]=w[se]}else u.push(w)}}class K{constructor(v,_){this.i=v,this.j=_,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function ie(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function le(u){return le[" "](u),u}le[" "]=function(){};var ue=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function be(u,v,_){for(const w in u)v.call(_,u[w],w,u)}function V(u,v){for(const _ in u)v.call(void 0,u[_],_,u)}function x(u){const v={};for(const _ in u)v[_]=u[_];return v}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,v){let _,w;for(let U=1;U<arguments.length;U++){w=arguments[U];for(_ in w)u[_]=w[_];for(let Q=0;Q<R.length;Q++)_=R[Q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function N(u){var v=1;u=u.split(":");const _=[];for(;0<v&&u.length;)_.push(u.shift()),v--;return u.length&&_.push(u.join(":")),_}function k(u){p.setTimeout(()=>{throw u},0)}function I(){var u=ze;let v=null;return u.g&&(v=u.g,u.g=u.g.next,u.g||(u.h=null),v.next=null),v}class dt{constructor(){this.h=this.g=null}add(v,_){const w=We.get();w.set(v,_),this.h?this.h.next=w:this.g=w,this.h=w}}var We=new K(()=>new $,u=>u.reset());class ${constructor(){this.next=this.g=this.h=null}set(v,_){this.h=v,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,de=!1,ze=new dt,D=()=>{const u=p.Promise.resolve(void 0);ae=()=>{u.then(ne)}};var ne=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){k(_)}var v=We;v.j(u),100>v.h&&(v.h++,u.next=v.g,v.g=u)}de=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(u,v){this.type=u,this.g=this.target=v,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ge=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,v=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};p.addEventListener("test",_,v),p.removeEventListener("test",_,v)}catch{}return u})();function Ce(u,v){if(re.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=v,v=u.relatedTarget){if(ue){e:{try{le(v.nodeName);var U=!0;break e}catch{}U=!1}U||(v=null)}}else _=="mouseover"?v=u.fromElement:_=="mouseout"&&(v=u.toElement);this.relatedTarget=v,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:we[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}H(Ce,re);var we={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),Je=0;function $n(u,v,_,w,U){this.listener=u,this.proxy=null,this.src=v,this.type=_,this.capture=!!w,this.ha=U,this.key=++Je,this.da=this.fa=!1}function lr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ti(u){this.src=u,this.g={},this.h=0}Ti.prototype.add=function(u,v,_,w,U){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var se=os(u,v,w,U);return-1<se?(v=u[se],_||(v.fa=!1)):(v=new $n(v,this.src,Q,!!w,U),v.fa=_,u.push(v)),v};function as(u,v){var _=v.type;if(_ in u.g){var w=u.g[_],U=Array.prototype.indexOf.call(w,v,void 0),Q;(Q=0<=U)&&Array.prototype.splice.call(w,U,1),Q&&(lr(v),u.g[_].length==0&&(delete u.g[_],u.h--))}}function os(u,v,_,w){for(var U=0;U<u.length;++U){var Q=u[U];if(!Q.da&&Q.listener==v&&Q.capture==!!_&&Q.ha==w)return U}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),xo={};function Sc(u,v,_,w,U){if(Array.isArray(v)){for(var Q=0;Q<v.length;Q++)Sc(u,v[Q],_,w,U);return null}return _=Ac(_),u&&u[Ot]?u.K(v,_,y(w)?!!w.capture:!1,U):Tn(u,v,_,!1,w,U)}function Tn(u,v,_,w,U,Q){if(!v)throw Error("Invalid event type");var se=y(U)?!!U.capture:!!U,Pe=oa(u);if(Pe||(u[ls]=Pe=new Ti(u)),_=Pe.add(v,_,w,se,Q),_.proxy)return _;if(w=hf(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)ge||(U=se),U===void 0&&(U=!1),u.addEventListener(v.toString(),w,U);else if(u.attachEvent)u.attachEvent(cs(v.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function hf(){function u(_){return v.call(u.src,u.listener,_)}const v=ff;return u}function Ro(u,v,_,w,U){if(Array.isArray(v))for(var Q=0;Q<v.length;Q++)Ro(u,v[Q],_,w,U);else w=y(w)?!!w.capture:!!w,_=Ac(_),u&&u[Ot]?(u=u.i,v=String(v).toString(),v in u.g&&(Q=u.g[v],_=os(Q,_,w,U),-1<_&&(lr(Q[_]),Array.prototype.splice.call(Q,_,1),Q.length==0&&(delete u.g[v],u.h--)))):u&&(u=oa(u))&&(v=u.g[v.toString()],u=-1,v&&(u=os(v,_,w,U)),(_=-1<u?v[u]:null)&&aa(_))}function aa(u){if(typeof u!="number"&&u&&!u.da){var v=u.src;if(v&&v[Ot])as(v.i,u);else{var _=u.type,w=u.proxy;v.removeEventListener?v.removeEventListener(_,w,u.capture):v.detachEvent?v.detachEvent(cs(_),w):v.addListener&&v.removeListener&&v.removeListener(w),(_=oa(v))?(as(_,u),_.h==0&&(_.src=null,v[ls]=null)):lr(u)}}}function cs(u){return u in xo?xo[u]:xo[u]="on"+u}function ff(u,v){if(u.da)u=!0;else{v=new Ce(v,this);var _=u.listener,w=u.ha||u.src;u.fa&&aa(u),u=_.call(w,v)}return u}function oa(u){return u=u[ls],u instanceof Ti?u:null}var Co="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ac(u){return typeof u=="function"?u:(u[Co]||(u[Co]=function(v){return u.handleEvent(v)}),u[Co])}function ct(){oe.call(this),this.i=new Ti(this),this.M=this,this.F=null}H(ct,oe),ct.prototype[Ot]=!0,ct.prototype.removeEventListener=function(u,v,_,w){Ro(this,u,v,_,w)};function Fe(u,v){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=v.type||v,typeof v=="string")v=new re(v,u);else if(v instanceof re)v.target=v.target||u;else{var U=v;v=new re(w,u),O(v,U)}if(U=!0,_)for(var Q=_.length-1;0<=Q;Q--){var se=v.g=_[Q];U=un(se,w,!0,v)&&U}if(se=v.g=u,U=un(se,w,!0,v)&&U,U=un(se,w,!1,v)&&U,_)for(Q=0;Q<_.length;Q++)se=v.g=_[Q],U=un(se,w,!1,v)&&U}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,v;for(v in u.g){for(var _=u.g[v],w=0;w<_.length;w++)lr(_[w]);delete u.g[v],u.h--}}this.F=null},ct.prototype.K=function(u,v,_,w){return this.i.add(String(u),v,!1,_,w)},ct.prototype.L=function(u,v,_,w){return this.i.add(String(u),v,!0,_,w)};function un(u,v,_,w){if(v=u.i.g[String(v)],!v)return!0;v=v.concat();for(var U=!0,Q=0;Q<v.length;++Q){var se=v[Q];if(se&&!se.da&&se.capture==_){var Pe=se.listener,xt=se.ha||se.src;se.fa&&as(u.i,se),U=Pe.call(xt,w)!==!1&&U}}return U&&!w.defaultPrevented}function Qt(u,v,_){if(typeof u=="function")_&&(u=A(u,_));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:p.setTimeout(u,v||0)}function xc(u){u.g=Qt(()=>{u.g=null,u.i&&(u.i=!1,xc(u))},u.l);const v=u.h;u.h=null,u.m.apply(null,v)}class df extends oe{constructor(v,_){super(),this.m=v,this.l=_,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:xc(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(u){oe.call(this),this.h=u,this.g={}}H(us,oe);var hs=[];function fs(u){be(u.g,function(v,_){this.g.hasOwnProperty(_)&&aa(v)},u),u.g={}}us.prototype.N=function(){us.aa.N.call(this),fs(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jn=p.JSON.stringify,la=p.JSON.parse,ds=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Io(){}Io.prototype.h=null;function No(u){return u.h||(u.h=u.i())}function Do(){}var wi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Si(){re.call(this,"d")}H(Si,re);function Oo(){re.call(this,"c")}H(Oo,re);var Xn={},Mo=null;function cr(){return Mo=Mo||new ct}Xn.La="serverreachability";function ca(u){re.call(this,Xn.La,u)}H(ca,re);function ur(u){const v=cr();Fe(v,new ca(v))}Xn.STAT_EVENT="statevent";function Rc(u,v){re.call(this,Xn.STAT_EVENT,u),this.stat=v}H(Rc,re);function rt(u){const v=cr();Fe(v,new Rc(v,u))}Xn.Ma="timingevent";function At(u,v){re.call(this,Xn.Ma,u),this.size=v}H(At,re);function vt(u,v){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},v)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Vo(u,v,_,w,U,Q){u.info(function(){if(u.g)if(Q)for(var se="",Pe=Q.split("&"),xt=0;xt<Pe.length;xt++){var ke=Pe[xt].split("=");if(1<ke.length){var Vt=ke[0];ke=ke[1];var Rt=Vt.split("_");se=2<=Rt.length&&Rt[1]=="type"?se+(Vt+"="+ke+"&"):se+(Vt+"=redacted&")}}else se=null;else se=Q;return"XMLHTTP REQ ("+w+") [attempt "+U+"]: "+v+`
`+_+`
`+se})}function pf(u,v,_,w,U,Q,se){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+U+"]: "+v+`
`+_+`
`+Q+" "+se})}function hr(u,v,_,w){u.info(function(){return"XMLHTTP TEXT ("+v+"): "+ps(u,_)+(w?" "+w:"")})}function Cc(u,v){u.info(function(){return"TIMEOUT: "+v})}wn.prototype.info=function(){};function ps(u,v){if(!u.g)return v;if(!v)return null;try{var _=JSON.parse(v);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var U=w[1];if(Array.isArray(U)&&!(1>U.length)){var Q=U[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return jn(_)}catch{return v}}var fr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ai={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wn;function Zn(){}H(Zn,Io),Zn.prototype.g=function(){return new XMLHttpRequest},Zn.prototype.i=function(){return{}},Wn=new Zn;function en(u,v,_,w){this.j=u,this.i=v,this.l=_,this.R=w||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var Po={},ua={};function Ln(u,v,_){u.L=1,u.v=_s(hn(v)),u.m=_,u.P=!0,xi(u,null)}function xi(u,v){u.F=Date.now(),ms(u),u.A=hn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Bo(_.i,"t",w),u.C=0,_=u.j.J,u.h=new pt,u.g=Fc(u.j,_?v:null,!u.m),0<u.O&&(u.M=new df(A(u.Y,u,u.g),u.O)),v=u.U,_=u.g,w=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(hs[0]=U.toString()),U=hs);for(var Q=0;Q<U.length;Q++){var se=Sc(_,U[Q],w||v.handleEvent,!1,v.h||v);if(!se)break;v.g[se.key]=se}v=u.H?x(u.H):{},u.m?(u.u||(u.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,v)):(u.u="GET",u.g.ea(u.A,u.u,null,v)),ur(),Vo(u.i,u.u,u.A,u.l,u.R,u.m)}en.prototype.ca=function(u){u=u.target;const v=this.M;v&&Rn(u)==3?v.j():this.Y(u)},en.prototype.Y=function(u){try{if(u==this.g)e:{const Rt=Rn(this.g);var v=this.g.Ba();const Vi=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||kc(this.g)))){this.J||Rt!=4||v==7||(v==8||0>=Vi?ur(3):ur(2)),dr(this);var _=this.g.Z();this.X=_;t:if(Ic(this)){var w=kc(this.g);u="";var U=w.length,Q=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Jn(this);var se="";break t}this.h.i=new p.TextDecoder}for(v=0;v<U;v++)this.h.h=!0,u+=this.h.i.decode(w[v],{stream:!(Q&&v==U-1)});w.length=0,this.h.g+=u,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,pf(this.i,this.u,this.A,this.l,this.R,Rt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,xt=this.g;if((Pe=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Pe)){var ke=Pe;break t}}ke=null}if(_=ke)hr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,_);else{this.o=!1,this.s=3,rt(12),Ut(this),Jn(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<se.length;)if(zt=Nc(this,se),zt==ua){Rt==4&&(this.s=4,rt(14),_=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Po){this.s=4,rt(15),hr(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else hr(this.i,this.l,zt,null),gs(this,zt);if(Ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||se.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)hr(this.i,this.l,se,"[Invalid Chunked Response]"),Ut(this),Jn(this);else if(0<se.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Rs(Vt),Vt.M=!0,rt(11))}}else hr(this.i,this.l,se,null),gs(this,se);Rt==4&&Ut(this),this.o&&!this.J&&(Rt==4?Bc(this.j,this):(this.o=!1,ms(this)))}else _f(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Ut(this),Jn(this)}}}catch{}finally{}};function Ic(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Nc(u,v){var _=u.C,w=v.indexOf(`
`,_);return w==-1?ua:(_=Number(v.substring(_,w)),isNaN(_)?Po:(w+=1,w+_>v.length?ua:(v=v.slice(w,w+_),u.C=w+_,v)))}en.prototype.cancel=function(){this.J=!0,Ut(this)};function ms(u){u.S=Date.now()+u.I,Dc(u,u.I)}function Dc(u,v){if(u.B!=null)throw Error("WatchDog timer not null");u.B=vt(A(u.ba,u),v)}function dr(u){u.B&&(p.clearTimeout(u.B),u.B=null)}en.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Cc(this.i,this.A),this.L!=2&&(ur(),rt(17)),Ut(this),this.s=2,Jn(this)):Dc(this,this.S-u)};function Jn(u){u.j.G==0||u.J||Bc(u.j,u)}function Ut(u){dr(u);var v=u.M;v&&typeof v.ma=="function"&&v.ma(),u.M=null,fs(u.U),u.g&&(v=u.g,u.g=null,v.abort(),v.ma())}function gs(u,v){try{var _=u.j;if(_.G!=0&&(_.g==u||ko(_.h,u))){if(!u.K&&ko(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(v)}catch{w=null}if(Array.isArray(w)&&w.length==3){var U=w;if(U[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Ta(_),Ea(_);else break e;Yo(_),rt(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=vt(A(_.Za,_),6e3));if(1>=fa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Mi(_,11)}else if((u.K||_.g==u)&&Ta(_),!ie(v))for(U=_.Da.g.parse(v),v=0;v<U.length;v++){let ke=U[v];if(_.T=ke[0],ke=ke[1],_.G==2)if(ke[0]=="c"){_.K=ke[1],_.ia=ke[2];const Vt=ke[3];Vt!=null&&(_.la=Vt,_.j.info("VER="+_.la));const Rt=ke[4];Rt!=null&&(_.Aa=Rt,_.j.info("SVER="+_.Aa));const Vi=ke[5];Vi!=null&&typeof Vi=="number"&&0<Vi&&(w=1.5*Vi,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const zt=u.g;if(zt){const ai=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var Q=w.h;Q.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(da(Q,Q.h),Q.h=null))}if(w.D){const Ko=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ko&&(w.ya=Ko,Qe(w.I,w.D,Ko))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var se=u;if(w.qa=Hc(w,w.J?w.ia:null,w.W),se.K){tn(w.h,se);var Pe=se,xt=w.L;xt&&(Pe.I=xt),Pe.B&&(dr(Pe),ms(Pe)),w.g=se}else Uc(w);0<_.i.length&&ba(_)}else ke[0]!="stop"&&ke[0]!="close"||Mi(_,7);else _.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Mi(_,7):Fo(_):ke[0]!="noop"&&_.l&&_.l.ta(ke),_.v=0)}}ur(4)}catch{}}var Oc=class{constructor(u,v){this.g=u,this.map=v}};function Ri(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ha(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function fa(u){return u.h?1:u.g?u.g.size:0}function ko(u,v){return u.h?u.h==v:u.g?u.g.has(v):!1}function da(u,v){u.g?u.g.add(v):u.h=v}function tn(u,v){u.h&&u.h==v?u.h=null:u.g&&u.g.has(v)&&u.g.delete(v)}Ri.prototype.cancel=function(){if(this.i=jo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function jo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let v=u.i;for(const _ of u.g.values())v=v.concat(_.D);return v}return B(u.i)}function mf(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var v=[],_=u.length,w=0;w<_;w++)v.push(u[w]);return v}v=[],_=0;for(w in u)v[_++]=u[w];return v}function pa(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var v=[];u=u.length;for(var _=0;_<u;_++)v.push(_);return v}v=[],_=0;for(const w in u)v[_++]=w;return v}}}function Lo(u,v){if(u.forEach&&typeof u.forEach=="function")u.forEach(v,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,v,void 0);else for(var _=pa(u),w=mf(u),U=w.length,Q=0;Q<U;Q++)v.call(void 0,w[Q],_&&_[Q],u)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gf(u,v){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),U=null;if(0<=w){var Q=u[_].substring(0,w);U=u[_].substring(w+1)}else Q=u[_];v(Q,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function _t(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _t){this.h=u.h,vs(this,u.j),this.o=u.o,this.g=u.g,pr(this,u.s),this.l=u.l;var v=u.i,_=new Ii;_.i=v.i,v.g&&(_.g=new Map(v.g),_.h=v.h),Ci(this,_),this.m=u.m}else u&&(v=String(u).match(ys))?(this.h=!1,vs(this,v[1]||"",!0),this.o=Sn(v[2]||""),this.g=Sn(v[3]||"",!0),pr(this,v[4]),this.l=Sn(v[5]||"",!0),Ci(this,v[6]||"",!0),this.m=Sn(v[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}_t.prototype.toString=function(){var u=[],v=this.j;v&&u.push(Es(v,Uo,!0),":");var _=this.g;return(_||v=="file")&&(u.push("//"),(v=this.o)&&u.push(Es(v,Uo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Es(_,_.charAt(0)=="/"?yf:zo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Es(_,ma)),u.join("")};function hn(u){return new _t(u)}function vs(u,v,_){u.j=_?Sn(v,!0):v,u.j&&(u.j=u.j.replace(/:$/,""))}function pr(u,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);u.s=v}else u.s=null}function Ci(u,v,_){v instanceof Ii?(u.i=v,Vc(u.i,u.h)):(_||(v=Es(v,vf)),u.i=new Ii(v,u.h))}function Qe(u,v,_){u.i.set(v,_)}function _s(u){return Qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sn(u,v){return u?v?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Es(u,v,_){return typeof u=="string"?(u=encodeURI(u).replace(v,Mc),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Mc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Uo=/[#\/\?@]/g,zo=/[#\?:]/g,yf=/[#\?]/g,vf=/[#\?@]/g,ma=/#/g;function Ii(u,v){this.h=this.g=null,this.i=u||null,this.j=!!v}function An(u){u.g||(u.g=new Map,u.h=0,u.i&&gf(u.i,function(v,_){u.add(decodeURIComponent(v.replace(/\+/g," ")),_)}))}r=Ii.prototype,r.add=function(u,v){An(this),this.i=null,u=ei(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(v),this.h+=1,this};function Ni(u,v){An(u),v=ei(u,v),u.g.has(v)&&(u.i=null,u.h-=u.g.get(v).length,u.g.delete(v))}function Di(u,v){return An(u),v=ei(u,v),u.g.has(v)}r.forEach=function(u,v){An(this),this.g.forEach(function(_,w){_.forEach(function(U){u.call(v,U,w,this)},this)},this)},r.na=function(){An(this);const u=Array.from(this.g.values()),v=Array.from(this.g.keys()),_=[];for(let w=0;w<v.length;w++){const U=u[w];for(let Q=0;Q<U.length;Q++)_.push(v[w])}return _},r.V=function(u){An(this);let v=[];if(typeof u=="string")Di(this,u)&&(v=v.concat(this.g.get(ei(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)v=v.concat(u[_])}return v},r.set=function(u,v){return An(this),this.i=null,u=ei(this,u),Di(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[v]),this.h+=1,this},r.get=function(u,v){return u?(u=this.V(u),0<u.length?String(u[0]):v):v};function Bo(u,v,_){Ni(u,v),0<_.length&&(u.i=null,u.g.set(ei(u,v),B(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],v=Array.from(this.g.keys());for(var _=0;_<v.length;_++){var w=v[_];const Q=encodeURIComponent(String(w)),se=this.V(w);for(w=0;w<se.length;w++){var U=Q;se[w]!==""&&(U+="="+encodeURIComponent(String(se[w]))),u.push(U)}}return this.i=u.join("&")};function ei(u,v){return v=String(v),u.j&&(v=v.toLowerCase()),v}function Vc(u,v){v&&!u.j&&(An(u),u.i=null,u.g.forEach(function(_,w){var U=w.toLowerCase();w!=U&&(Ni(this,w),Bo(this,U,_))},u)),u.j=v}function bs(u,v){const _=new wn;if(p.Image){const w=new Image;w.onload=P(xn,_,"TestLoadImage: loaded",!0,v,w),w.onerror=P(xn,_,"TestLoadImage: error",!1,v,w),w.onabort=P(xn,_,"TestLoadImage: abort",!1,v,w),w.ontimeout=P(xn,_,"TestLoadImage: timeout",!1,v,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else v(!1)}function Un(u,v){const _=new wn,w=new AbortController,U=setTimeout(()=>{w.abort(),xn(_,"TestPingServer: timeout",!1,v)},1e4);fetch(u,{signal:w.signal}).then(Q=>{clearTimeout(U),Q.ok?xn(_,"TestPingServer: ok",!0,v):xn(_,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(U),xn(_,"TestPingServer: error",!1,v)})}function xn(u,v,_,w,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),w(_)}catch{}}function Ts(){this.g=new ds}function ti(u,v,_){const w=_||"";try{Lo(u,function(U,Q){let se=U;y(U)&&(se=jn(U)),v.push(w+Q+"="+encodeURIComponent(se))})}catch(U){throw v.push(w+"type="+encodeURIComponent("_badmap")),U}}function mr(u){this.l=u.Ub||null,this.j=u.eb||!1}H(mr,Io),mr.prototype.g=function(){return new Oi(this.l,this.j)},mr.prototype.i=(function(u){return function(){return u}})({});function Oi(u,v){ct.call(this),this.D=u,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}H(Oi,ct),r=Oi.prototype,r.open=function(u,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=v,this.readyState=1,ii(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(v.body=u),(this.D||p).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function qo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var v=u.value?u.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!u.done}))&&(this.response=this.responseText+=v)}u.done?ni(this):ii(this),this.readyState==3&&qo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,ni(this))},r.Qa=function(u){this.g&&(this.response=u,ni(this))},r.ga=function(){this.g&&ni(this)};function ni(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ii(u)}r.setRequestHeader=function(u,v){this.u.append(u,v)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],v=this.h.entries();for(var _=v.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=v.next();return u.join(`\r
`)};function ii(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ho(u){let v="";return be(u,function(_,w){v+=w,v+=":",v+=_,v+=`\r
`}),v}function Mt(u,v,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Ho(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Qe(u,v,_))}function qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}H(qe,ct);var ga=/^https?$/i,ws=["POST","PUT"];r=qe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,v,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);v=v?v.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wn.g(),this.v=this.o?No(this.o):No(Wn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(v,String(u),!0),this.B=!1}catch(Q){Pc(this,Q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var U in w)_.set(U,w[U]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Q of w.keys())_.set(Q,w.get(Q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),U=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ws,v,void 0))||w||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,se]of _)this.g.setRequestHeader(Q,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){Pc(this,Q)}};function Pc(u,v){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=v,u.m=5,ya(u),ri(u)}function ya(u){u.A||(u.A=!0,Fe(u,"complete"),Fe(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Fe(this,"complete"),Fe(this,"abort"),ri(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ri(this,!0)),qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},r.bb=function(){va(this)};function va(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)Qt(u.Ea,0,u);else if(Fe(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const se=u.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var _;if(!(_=v)){var w;if(w=se===0){var U=String(u.D).match(ys)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),w=!ga.test(U?U.toLowerCase():"")}_=w}if(_)Fe(u,"complete"),Fe(u,"success");else{u.m=6;try{var Q=2<Rn(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",ya(u)}}finally{ri(u)}}}}function ri(u,v){if(u.g){Ss(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,v||Fe(u,"ready");try{_.onreadystatechange=w}catch{}}}function Ss(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var v=this.g.responseText;return u&&v.indexOf(u)==0&&(v=v.substring(u.length)),la(v)}};function kc(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function _f(u){const v={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ie(u[w]))continue;var _=N(u[w]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=v[U]||[];v[U]=Q,Q.push(_)}V(v,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(u,v,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||v}function _a(u){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,u),this.cb=As("retryDelaySeedMs",1e4,u),this.Wa=As("forwardChannelMaxRetries",2,u),this.wa=As("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(u&&u.concurrentRequestLimit),this.Da=new Ts,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=_a.prototype,r.la=8,r.G=1,r.connect=function(u,v,_,w){rt(0),this.W=u,this.H=v||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Hc(this,null,this.W),ba(this)};function Fo(u){if(jc(u),u.G==3){var v=u.U++,_=hn(u.I);if(Qe(_,"SID",u.K),Qe(_,"RID",v),Qe(_,"TYPE","terminate"),xs(u,_),v=new en(u,u.j,v),v.L=2,v.v=_s(hn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(v.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=v.v,_=!0),_||(v.g=Fc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),ms(v)}qc(u)}function Ea(u){u.g&&(Rs(u),u.g.cancel(),u.g=null)}function jc(u){Ea(u),u.u&&(p.clearTimeout(u.u),u.u=null),Ta(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function ba(u){if(!ha(u.h)&&!u.s){u.s=!0;var v=u.Ga;ae||D(),de||(ae(),de=!0),ze.add(v,u),u.B=0}}function Ef(u,v){return fa(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=v.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=vt(A(u.Ga,u,v),Qo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new en(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=x(Q),O(Q,this.S)):Q=this.S),this.m!==null||this.O||(U.H=Q,Q=null),this.P)e:{for(var v=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(v+=w,4096<v){v=_;break e}if(v===4096||_===this.i.length-1){v=_+1;break e}}v=1e3}else v=1e3;v=Lc(this,U,v),_=hn(this.I),Qe(_,"RID",u),Qe(_,"CVER",22),this.D&&Qe(_,"X-HTTP-Session-Id",this.D),xs(this,_),Q&&(this.O?v="headers="+encodeURIComponent(String(Ho(Q)))+"&"+v:this.m&&Mt(_,this.m,Q)),da(this.h,U),this.Ua&&Qe(_,"TYPE","init"),this.P?(Qe(_,"$req",v),Qe(_,"SID","null"),U.T=!0,Ln(U,_,null)):Ln(U,_,v),this.G=2}}else this.G==3&&(u?Go(this,u):this.i.length==0||ha(this.h)||Go(this))};function Go(u,v){var _;v?_=v.l:_=u.U++;const w=hn(u.I);Qe(w,"SID",u.K),Qe(w,"RID",_),Qe(w,"AID",u.T),xs(u,w),u.m&&u.o&&Mt(w,u.m,u.o),_=new en(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),v&&(u.i=v.D.concat(u.i)),v=Lc(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),da(u.h,_),Ln(_,w,v)}function xs(u,v){u.H&&be(u.H,function(_,w){Qe(v,w,_)}),u.l&&Lo({},function(_,w){Qe(v,w,_)})}function Lc(u,v,_){_=Math.min(u.i.length,_);var w=u.l?A(u.l.Na,u.l,u):null;e:{var U=u.i;let Q=-1;for(;;){const se=["count="+_];Q==-1?0<_?(Q=U[0].g,se.push("ofs="+Q)):Q=0:se.push("ofs="+Q);let Pe=!0;for(let xt=0;xt<_;xt++){let ke=U[xt].g;const Vt=U[xt].map;if(ke-=Q,0>ke)Q=Math.max(0,U[xt].g-100),Pe=!1;else try{ti(Vt,se,"req"+ke+"_")}catch{w&&w(Vt)}}if(Pe){w=se.join("&");break e}}}return u=u.i.splice(0,_),v.D=u,w}function Uc(u){if(!u.g&&!u.u){u.Y=1;var v=u.Fa;ae||D(),de||(ae(),de=!0),ze.add(v,u),u.v=0}}function Yo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=vt(A(u.Fa,u),Qo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=vt(A(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Ea(this),zc(this))};function Rs(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function zc(u){u.g=new en(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var v=hn(u.qa);Qe(v,"RID","rpc"),Qe(v,"SID",u.K),Qe(v,"AID",u.T),Qe(v,"CI",u.F?"0":"1"),!u.F&&u.ja&&Qe(v,"TO",u.ja),Qe(v,"TYPE","xmlhttp"),xs(u,v),u.m&&u.o&&Mt(v,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=_s(hn(v)),_.m=null,_.P=!0,xi(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Ea(this),Yo(this),rt(19))};function Ta(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Bc(u,v){var _=null;if(u.g==v){Ta(u),Rs(u),u.g=null;var w=2}else if(ko(u.h,v))_=v.D,tn(u.h,v),w=1;else return;if(u.G!=0){if(v.o)if(w==1){_=v.m?v.m.length:0,v=Date.now()-v.F;var U=u.B;w=cr(),Fe(w,new At(w,_)),ba(u)}else Uc(u);else if(U=v.s,U==3||U==0&&0<v.X||!(w==1&&Ef(u,v)||w==2&&Yo(u)))switch(_&&0<_.length&&(v=u.h,v.i=v.i.concat(_)),U){case 1:Mi(u,5);break;case 4:Mi(u,10);break;case 3:Mi(u,6);break;default:Mi(u,2)}}}function Qo(u,v){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*v}function Mi(u,v){if(u.j.info("Error code "+v),v==2){var _=A(u.fb,u),w=u.Xa;const U=!w;w=new _t(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||vs(w,"https"),_s(w),U?bs(w.toString(),_):Un(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(v),qc(u),jc(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function qc(u){if(u.G=0,u.ka=[],u.l){const v=jo(u.h);(v.length!=0||u.i.length!=0)&&(G(u.ka,v),G(u.ka,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.ra()}}function Hc(u,v,_){var w=_ instanceof _t?hn(_):new _t(_);if(w.g!="")v&&(w.g=v+"."+w.g),pr(w,w.s);else{var U=p.location;w=U.protocol,v=v?v+"."+U.hostname:U.hostname,U=+U.port;var Q=new _t(null);w&&vs(Q,w),v&&(Q.g=v),U&&pr(Q,U),_&&(Q.l=_),w=Q}return _=u.D,v=u.ya,_&&v&&Qe(w,_,v),Qe(w,"VER",u.la),xs(u,w),w}function Fc(u,v,_){if(v&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=u.Ca&&!u.pa?new qe(new mr({eb:_})):new qe(u.pa),v.Ha(u.J),v}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gc(){}r=Gc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function wa(){}wa.prototype.g=function(u,v){return new nn(u,v)};function nn(u,v){ct.call(this),this.g=new _a(v),this.l=u,this.h=v&&v.messageUrlParams||null,u=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(u?u["X-WebChannel-Content-Type"]=v.messageContentType:u={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(u?u["X-WebChannel-Client-Profile"]=v.va:u={"X-WebChannel-Client-Profile":v.va}),this.g.S=u,(u=v&&v.Sb)&&!ie(u)&&(this.g.m=u),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!ie(v)&&(this.g.D=v,u=this.h,u!==null&&v in u&&(u=this.h,v in u&&delete u[v])),this.j=new si(this)}H(nn,ct),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Fo(this.g)},nn.prototype.o=function(u){var v=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=jn(u),u=_);v.i.push(new Oc(v.Ya++,u)),v.G==3&&ba(v)},nn.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,nn.aa.N.call(this)};function Yc(u){Si.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var v=u.__sm__;if(v){e:{for(const _ in v){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,v=v!==null&&u in v?v[u]:void 0),this.data=v}else this.data=u}H(Yc,Si);function Qc(){Oo.call(this),this.status=1}H(Qc,Oo);function si(u){this.g=u}H(si,Gc),si.prototype.ua=function(){Fe(this.g,"a")},si.prototype.ta=function(u){Fe(this.g,new Yc(u))},si.prototype.sa=function(u){Fe(this.g,new Qc)},si.prototype.ra=function(){Fe(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,O2=function(){return new wa},D2=function(){return cr()},N2=Xn,Bp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fr.NO_ERROR=0,fr.TIMEOUT=8,fr.HTTP_ERROR=6,lh=fr,Ai.COMPLETE="complete",I2=Ai,Do.EventType=wi,wi.OPEN="a",wi.CLOSE="b",wi.ERROR="c",wi.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ul=Do,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,C2=qe}).apply(typeof Xu<"u"?Xu:typeof self<"u"?self:typeof window<"u"?window:{});const uv="@firebase/firestore",hv="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new dm("@firebase/firestore");function Za(){return Js.logLevel}function he(r,...e){if(Js.logLevel<=Oe.DEBUG){const n=e.map(xm);Js.debug(`Firestore (${bo}): ${r}`,...n)}}function tr(r,...e){if(Js.logLevel<=Oe.ERROR){const n=e.map(xm);Js.error(`Firestore (${bo}): ${r}`,...n)}}function lo(r,...e){if(Js.logLevel<=Oe.WARN){const n=e.map(xm);Js.warn(`Firestore (${bo}): ${r}`,...n)}}function xm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,M2(r,s,n)}function M2(r,e,n){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw tr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||M2(e,o,s)}function Ae(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Wt.UNAUTHENTICATED)))}shutdown(){}}class Z6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class J6{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,n(m)):Promise.resolve();let c=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Qr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const m=c;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Qr)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new V2(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class e3{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class t3{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new e3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,he("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=i3(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=e.charAt(o[c]%62))}return s}}function Me(r,e){return r<e?-1:r>e?1:0}function qp(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=e.charAt(s);if(o!==c)return xp(o)===xp(c)?Me(o,c):xp(o)?1:-1}return Me(r.length,e.length)}const r3=55296,s3=57343;function xp(r){const e=r.charCodeAt(0);return e>=r3&&e<=s3}function co(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="__name__";class fi{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ee(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ee(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const c=fi.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return Me(e.length,n.length)}static compareSegments(e,n){const s=fi.isNumericId(e),o=fi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?fi.extractNumericId(e).compare(fi.extractNumericId(n)):qp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class tt extends fi{construct(e,n,s){return new tt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new tt(n)}static emptyPath(){return new tt([])}}const a3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends fi{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return a3.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dv}static keyField(){return new Gt([dv])}static fromServerFormat(e){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ce(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ce(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(c(),o++)}if(c(),f)throw new ce(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.path=e}static fromPath(e){return new me(tt.fromString(e))}static fromName(e){return new me(tt.fromString(e).popFirst(5))}static empty(){return new me(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new me(new tt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(r,e,n){if(!n)throw new ce(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function o3(r,e,n,s){if(e===!0&&s===!0)throw new ce(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function pv(r){if(!me.isDocumentKey(r))throw new ce(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function mv(r){if(me.isDocumentKey(r))throw new ce(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function k2(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Fh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee(12329,{type:typeof r})}function Gn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ce(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fh(r);throw new ce(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(r,e){const n={typeString:r};return e&&(n.value=e),n}function vc(r,e){if(!k2(r))throw new ce(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ce(Z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=-62135596800,yv=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*yv);return new it(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gv)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yv}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vc(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:St("string",it._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new it(0,0))}static max(){return new Se(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=-1;function l3(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new $r(o,me.empty(),e)}function c3(r){return new $r(r.readTime,r.key,tc)}class $r{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new $r(Se.min(),me.empty(),tc)}static max(){return new $r(Se.max(),me.empty(),tc)}}function u3(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=me.comparator(r.documentKey,e.documentKey),n!==0?n:Me(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class f3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==h3)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee(((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.reject(n)}static resolve(e){return new ee(((n,s)=>{n(e)}))}static reject(e){return new ee(((n,s)=>{s(e)}))}static waitFor(e){return new ee(((n,s)=>{let o=0,c=0,f=!1;e.forEach((p=>{++o,p.next((()=>{++c,f&&c===o&&n()}),(m=>s(m)))})),f=!0,c===o&&n()}))}static or(e){let n=ee.resolve(!1);for(const s of e)n=n.next((o=>o?ee.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,c)=>{s.push(n.call(this,o,c))})),this.waitFor(s)}static mapArray(e,n){return new ee(((s,o)=>{const c=e.length,f=new Array(c);let p=0;for(let m=0;m<c;m++){const y=m;n(e[y]).next((b=>{f[y]=b,++p,p===c&&s(f)}),(b=>o(b)))}}))}static doWhile(e,n){return new ee(((s,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):s()};c()}))}}function d3(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Gh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=-1;function Yh(r){return r==null}function xh(r){return r===0&&1/r==-1/0}function p3(r){return typeof r=="number"&&Number.isInteger(r)&&!xh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="";function m3(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=vv(e)),e=g3(r.get(n),e);return vv(e)}function g3(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case j2:n+="";break;default:n+=c}}return n}function vv(r){return r+j2+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function rs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function L2(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Ft.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}}class Wu{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ft{constructor(e,n,s,o,c){this.key=e,this.value=n,this.color=s??Ft.RED,this.left=o??Ft.EMPTY,this.right=c??Ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,c){return new Ft(e??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const c=s(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Ft.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ee(27949);return e+(this.isRed()?0:1)}}Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee(57766)}get value(){throw Ee(16141)}get color(){throw Ee(16727)}get left(){throw Ee(29726)}get right(){throw Ee(36894)}copy(e,n,s,o,c){return this}insert(e,n,s){return new Ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ev(this.data.getIterator())}getIteratorFrom(e){return new Ev(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class Ev{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new En([])}unionWith(e){let n=new Nt(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return co(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new U2("Invalid base64 string: "+c):c}})(e);return new Yt(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c})(e);return new Yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const y3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=y3.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:yt(r.seconds),nanos:yt(r.nanos)}}function yt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Wr(r){return typeof r=="string"?Yt.fromBase64String(r):Yt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2="server_timestamp",B2="__type__",q2="__previous_value__",H2="__local_write_time__";function Im(r){return(r?.mapValue?.fields||{})[B2]?.stringValue===z2}function Qh(r){const e=r.mapValue.fields[q2];return Im(e)?Qh(e):e}function nc(r){const e=Xr(r.mapValue.fields[H2].timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(e,n,s,o,c,f,p,m,y,b){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=b}}const Rh="(default)";class ic{constructor(e,n){this.projectId=e,this.database=n||Rh}static empty(){return new ic("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(e){return e instanceof ic&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2="__type__",_3="__max__",Zu={mapValue:{}},G2="__vector__",Ch="value";function Zr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Im(r)?4:b3(r)?9007199254740991:E3(r)?10:11:Ee(28295,{value:r})}function Ei(r,e){if(r===e)return!0;const n=Zr(r);if(n!==Zr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return nc(r).isEqual(nc(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Xr(o.timestampValue),p=Xr(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,c){return Wr(o.bytesValue).isEqual(Wr(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,c){return yt(o.geoPointValue.latitude)===yt(c.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(c.geoPointValue.longitude)})(r,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return yt(o.integerValue)===yt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=yt(o.doubleValue),p=yt(c.doubleValue);return f===p?xh(f)===xh(p):isNaN(f)&&isNaN(p)}return!1})(r,e);case 9:return co(r.arrayValue.values||[],e.arrayValue.values||[],Ei);case 10:case 11:return(function(o,c){const f=o.mapValue.fields||{},p=c.mapValue.fields||{};if(_v(f)!==_v(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!Ei(f[m],p[m])))return!1;return!0})(r,e);default:return Ee(52216,{left:r})}}function rc(r,e){return(r.values||[]).find((n=>Ei(n,e)))!==void 0}function uo(r,e){if(r===e)return 0;const n=Zr(r),s=Zr(e);if(n!==s)return Me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(r.booleanValue,e.booleanValue);case 2:return(function(c,f){const p=yt(c.integerValue||c.doubleValue),m=yt(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(r,e);case 3:return bv(r.timestampValue,e.timestampValue);case 4:return bv(nc(r),nc(e));case 5:return qp(r.stringValue,e.stringValue);case 6:return(function(c,f){const p=Wr(c),m=Wr(f);return p.compareTo(m)})(r.bytesValue,e.bytesValue);case 7:return(function(c,f){const p=c.split("/"),m=f.split("/");for(let y=0;y<p.length&&y<m.length;y++){const b=Me(p[y],m[y]);if(b!==0)return b}return Me(p.length,m.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,f){const p=Me(yt(c.latitude),yt(f.latitude));return p!==0?p:Me(yt(c.longitude),yt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Tv(r.arrayValue,e.arrayValue);case 10:return(function(c,f){const p=c.fields||{},m=f.fields||{},y=p[Ch]?.arrayValue,b=m[Ch]?.arrayValue,S=Me(y?.values?.length||0,b?.values?.length||0);return S!==0?S:Tv(y,b)})(r.mapValue,e.mapValue);case 11:return(function(c,f){if(c===Zu.mapValue&&f===Zu.mapValue)return 0;if(c===Zu.mapValue)return 1;if(f===Zu.mapValue)return-1;const p=c.fields||{},m=Object.keys(p),y=f.fields||{},b=Object.keys(y);m.sort(),b.sort();for(let S=0;S<m.length&&S<b.length;++S){const A=qp(m[S],b[S]);if(A!==0)return A;const P=uo(p[m[S]],y[b[S]]);if(P!==0)return P}return Me(m.length,b.length)})(r.mapValue,e.mapValue);default:throw Ee(23264,{he:n})}}function bv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Me(r,e);const n=Xr(r),s=Xr(e),o=Me(n.seconds,s.seconds);return o!==0?o:Me(n.nanos,s.nanos)}function Tv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=uo(n[o],s[o]);if(c)return c}return Me(n.length,s.length)}function ho(r){return Hp(r)}function Hp(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Xr(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Wr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return me.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=Hp(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${Hp(n.fields[f])}`;return o+"}"})(r.mapValue):Ee(61005,{value:r})}function ch(r){switch(Zr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qh(r);return e?16+ch(e):16;case 5:return 2*r.stringValue.length;case 6:return Wr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,c)=>o+ch(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return rs(s.fields,((c,f)=>{o+=c.length+ch(f)})),o})(r.mapValue);default:throw Ee(13486,{value:r})}}function wv(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Fp(r){return!!r&&"integerValue"in r}function Nm(r){return!!r&&"arrayValue"in r}function Sv(r){return!!r&&"nullValue"in r}function Av(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function uh(r){return!!r&&"mapValue"in r}function E3(r){return(r?.mapValue?.fields||{})[F2]?.stringValue===G2}function Yl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return rs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Yl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yl(r.arrayValue.values[n]);return e}return{...r}}function b3(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===_3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!uh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yl(n)}setAll(e){let n=Gt.emptyPath(),s={},o=[];e.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const m=this.getFieldsMap(n);this.applyChanges(m,s,o),s={},o=[],n=p.popLast()}f?s[p.lastSegment()]=Yl(f):o.push(p.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(e){const n=this.field(e.popLast());uh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ei(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];uh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){rs(n,((o,c)=>e[o]=c));for(const o of s)delete e[o]}clone(){return new cn(Yl(this.value))}}function Y2(r){const e=[];return rs(r.fields,((n,s)=>{const o=new Gt([n]);if(uh(s)){const c=Y2(s.mapValue).fields;if(c.length===0)e.push(o);else for(const f of c)e.push(o.child(f))}else e.push(o)})),new En(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s,o,c,f,p){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(e){return new Zt(e,0,Se.min(),Se.min(),Se.min(),cn.empty(),0)}static newFoundDocument(e,n,s,o){return new Zt(e,1,n,Se.min(),s,o,0)}static newNoDocument(e,n){return new Zt(e,2,n,Se.min(),Se.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,Se.min(),Se.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,n){this.position=e,this.inclusive=n}}function xv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const c=e[o],f=r.position[o];if(c.field.isKeyField()?s=me.comparator(me.fromName(f.referenceValue),n.key):s=uo(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Rv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ei(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function T3(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{}class wt extends Q2{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new S3(e,n,s):n==="array-contains"?new R3(e,s):n==="in"?new C3(e,s):n==="not-in"?new I3(e,s):n==="array-contains-any"?new N3(e,s):new wt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new A3(e,s):new x3(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(uo(n,this.value)):n!==null&&Zr(this.value)===Zr(n)&&this.matchesComparison(uo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends Q2{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Qn(e,n)}matches(e){return K2(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function K2(r){return r.op==="and"}function $2(r){return w3(r)&&K2(r)}function w3(r){for(const e of r.filters)if(e instanceof Qn)return!1;return!0}function Gp(r){if(r instanceof wt)return r.field.canonicalString()+r.op.toString()+ho(r.value);if($2(r))return r.filters.map((e=>Gp(e))).join(",");{const e=r.filters.map((n=>Gp(n))).join(",");return`${r.op}(${e})`}}function X2(r,e){return r instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&Ei(s.value,o.value)})(r,e):r instanceof Qn?(function(s,o){return o instanceof Qn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((c,f,p)=>c&&X2(f,o.filters[p])),!0):!1})(r,e):void Ee(19439)}function W2(r){return r instanceof wt?(function(n){return`${n.field.canonicalString()} ${n.op} ${ho(n.value)}`})(r):r instanceof Qn?(function(n){return n.op.toString()+" {"+n.getFilters().map(W2).join(" ,")+"}"})(r):"Filter"}class S3 extends wt{constructor(e,n,s){super(e,n,s),this.key=me.fromName(s.referenceValue)}matches(e){const n=me.comparator(e.key,this.key);return this.matchesComparison(n)}}class A3 extends wt{constructor(e,n){super(e,"in",n),this.keys=Z2("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class x3 extends wt{constructor(e,n){super(e,"not-in",n),this.keys=Z2("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Z2(r,e){return(e.arrayValue?.values||[]).map((n=>me.fromName(n.referenceValue)))}class R3 extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nm(n)&&rc(n.arrayValue,this.value)}}class C3 extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rc(this.value.arrayValue,n)}}class I3 extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!rc(this.value.arrayValue,n)}}class N3 extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>rc(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e,n=null,s=[],o=[],c=null,f=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=p,this.Te=null}}function Cv(r,e=null,n=[],s=[],o=null,c=null,f=null){return new D3(r,e,n,s,o,c,f)}function Dm(r){const e=Ae(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Gp(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),Yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>ho(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>ho(s))).join(",")),e.Te=n}return e.Te}function Om(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!T3(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!X2(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Rv(r.startAt,e.startAt)&&Rv(r.endAt,e.endAt)}function Yp(r){return me.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n=null,s=[],o=[],c=null,f="F",p=null,m=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function O3(r,e,n,s,o,c,f,p){return new So(r,e,n,s,o,c,f,p)}function Kh(r){return new So(r)}function Iv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function J2(r){return r.collectionGroup!==null}function Ql(r){const e=Ae(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Nt(Gt.comparator);return f.filters.forEach((m=>{m.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new sc(c,s))})),n.has(Gt.keyField().canonicalString())||e.Ie.push(new sc(Gt.keyField(),s))}return e.Ie}function mi(r){const e=Ae(r);return e.Ee||(e.Ee=M3(e,Ql(r))),e.Ee}function M3(r,e){if(r.limitType==="F")return Cv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new sc(o.field,c)}));const n=r.endAt?new Ih(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ih(r.startAt.position,r.startAt.inclusive):null;return Cv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Qp(r,e){const n=r.filters.concat([e]);return new So(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Kp(r,e,n){return new So(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function $h(r,e){return Om(mi(r),mi(e))&&r.limitType===e.limitType}function eE(r){return`${Dm(mi(r))}|lt:${r.limitType}`}function Ja(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>W2(o))).join(", ")}]`),Yh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>ho(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>ho(o))).join(",")),`Target(${s})`})(mi(r))}; limitType=${r.limitType})`}function Xh(r,e){return e.isFoundDocument()&&(function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):me.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,o){for(const c of Ql(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,p,m){const y=xv(f,p,m);return f.inclusive?y<=0:y<0})(s.startAt,Ql(s),o)||s.endAt&&!(function(f,p,m){const y=xv(f,p,m);return f.inclusive?y>=0:y>0})(s.endAt,Ql(s),o))})(r,e)}function V3(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function tE(r){return(e,n)=>{let s=!1;for(const o of Ql(r)){const c=P3(o,e,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function P3(r,e,n){const s=r.field.isKeyField()?me.comparator(e.key,n.key):(function(c,f,p){const m=f.data.field(c),y=p.data.field(c);return m!==null&&y!==null?uo(m,y):Ee(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,((n,s)=>{for(const[o,c]of s)e(o,c)}))}isEmpty(){return L2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3=new lt(me.comparator);function nr(){return k3}const nE=new lt(me.comparator);function zl(...r){let e=nE;for(const n of r)e=e.insert(n.key,n);return e}function iE(r){let e=nE;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ys(){return Kl()}function rE(){return Kl()}function Kl(){return new ia((r=>r.toString()),((r,e)=>r.isEqual(e)))}const j3=new lt(me.comparator),L3=new Nt(me.comparator);function Ve(...r){let e=L3;for(const n of r)e=e.add(n);return e}const U3=new Nt(Me);function z3(){return U3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xh(e)?"-0":e}}function sE(r){return{integerValue:""+r}}function B3(r,e){return p3(e)?sE(e):Mm(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this._=void 0}}function q3(r,e,n){return r instanceof ac?(function(o,c){const f={fields:{[B2]:{stringValue:z2},[H2]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Im(c)&&(c=Qh(c)),c&&(f.fields[q2]=c),{mapValue:f}})(n,e):r instanceof oc?oE(r,e):r instanceof lc?lE(r,e):(function(o,c){const f=aE(o,c),p=Nv(f)+Nv(o.Ae);return Fp(f)&&Fp(o.Ae)?sE(p):Mm(o.serializer,p)})(r,e)}function H3(r,e,n){return r instanceof oc?oE(r,e):r instanceof lc?lE(r,e):n}function aE(r,e){return r instanceof Nh?(function(s){return Fp(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class ac extends Wh{}class oc extends Wh{constructor(e){super(),this.elements=e}}function oE(r,e){const n=cE(e);for(const s of r.elements)n.some((o=>Ei(o,s)))||n.push(s);return{arrayValue:{values:n}}}class lc extends Wh{constructor(e){super(),this.elements=e}}function lE(r,e){let n=cE(e);for(const s of r.elements)n=n.filter((o=>!Ei(o,s)));return{arrayValue:{values:n}}}class Nh extends Wh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Nv(r){return yt(r.integerValue||r.doubleValue)}function cE(r){return Nm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F3{constructor(e,n){this.field=e,this.transform=n}}function G3(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof oc&&o instanceof oc||s instanceof lc&&o instanceof lc?co(s.elements,o.elements,Ei):s instanceof Nh&&o instanceof Nh?Ei(s.Ae,o.Ae):s instanceof ac&&o instanceof ac})(r.transform,e.transform)}class Y3{constructor(e,n){this.version=e,this.transformResults=n}}class Yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Zh{}function uE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new fE(r.key,Yn.none()):new _c(r.key,r.data,Yn.none());{const n=r.data,s=cn.empty();let o=new Nt(Gt.comparator);for(let c of e.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new ss(r.key,s,new En(o.toArray()),Yn.none())}}function Q3(r,e,n){r instanceof _c?(function(o,c,f){const p=o.value.clone(),m=Ov(o.fieldTransforms,c,f.transformResults);p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):r instanceof ss?(function(o,c,f){if(!hh(o.precondition,c))return void c.convertToUnknownDocument(f.version);const p=Ov(o.fieldTransforms,c,f.transformResults),m=c.data;m.setAll(hE(o)),m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):(function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function $l(r,e,n,s){return r instanceof _c?(function(c,f,p,m){if(!hh(c.precondition,f))return p;const y=c.value.clone(),b=Mv(c.fieldTransforms,m,f);return y.setAll(b),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof ss?(function(c,f,p,m){if(!hh(c.precondition,f))return p;const y=Mv(c.fieldTransforms,m,f),b=f.data;return b.setAll(hE(c)),b.setAll(y),f.convertToFoundDocument(f.version,b).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((S=>S.field)))})(r,e,n,s):(function(c,f,p){return hh(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(r,e,n)}function K3(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),c=aE(s.transform,o||null);c!=null&&(n===null&&(n=cn.empty()),n.set(s.field,c))}return n||null}function Dv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&co(s,o,((c,f)=>G3(c,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class _c extends Zh{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ss extends Zh{constructor(e,n,s,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function hE(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function Ov(r,e,n){const s=new Map;He(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,p=e.data.field(c.field);s.set(c.field,H3(f,p,n[o]))}return s}function Mv(r,e,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,q3(c,f,e))}return s}class fE extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $3 extends Zh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X3{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&Q3(c,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=rE();return this.mutations.forEach((o=>{const c=e.get(o.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=n.has(o.key)?null:p;const m=uE(f,p);m!==null&&s.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ve())}isEqual(e){return this.batchId===e.batchId&&co(this.mutations,e.mutations,((n,s)=>Dv(n,s)))&&co(this.baseMutations,e.baseMutations,((n,s)=>Dv(n,s)))}}class Vm{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return j3})();const c=e.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new Vm(e,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt,Le;function J3(r){switch(r){case Z.OK:return Ee(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Ee(15467,{code:r})}}function dE(r){if(r===void 0)return tr("GRPC error has no .code"),Z.UNKNOWN;switch(r){case Tt.OK:return Z.OK;case Tt.CANCELLED:return Z.CANCELLED;case Tt.UNKNOWN:return Z.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return Z.INTERNAL;case Tt.UNAVAILABLE:return Z.UNAVAILABLE;case Tt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Tt.NOT_FOUND:return Z.NOT_FOUND;case Tt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Tt.ABORTED:return Z.ABORTED;case Tt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Tt.DATA_LOSS:return Z.DATA_LOSS;default:return Ee(39323,{code:r})}}(Le=Tt||(Tt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new Yr([4294967295,4294967295],0);function Vv(r){const e=eR().encode(r),n=new R2;return n.update(e),new Uint8Array(n.digest())}function Pv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Yr([n,s],0),new Yr([o,c],0)]}class Pm{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Bl(`Invalid padding: ${n}`);if(s<0)throw new Bl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Bl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Bl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(Yr.fromNumber(s)));return o.compare(tR)===1&&(o=new Yr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Vv(e),[s,o]=Pv(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),f=new Pm(c,o,n);return s.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const n=Vv(e),[s,o]=Pv(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Bl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,n,s,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Ec.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Jh(Se.min(),o,new lt(Me),nr(),Ve())}}class Ec{constructor(e,n,s,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ec(s,n,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class pE{constructor(e,n){this.targetId=e,this.Ce=n}}class mE{constructor(e,n,s=Yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class kv{constructor(){this.ve=0,this.Fe=jv(),this.Me=Yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ve(),n=Ve(),s=Ve();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ee(38017,{changeType:c})}})),new Ec(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=jv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nR{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=Ju(),this.He=Ju(),this.Ye=new lt(Me)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if(Yp(c))if(s===0){const f=new me(c.path);this.et(n,f,Zt.newNoDocument(f,Se.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const p=this.ut(e),m=p?this.ct(p,e,f):1;if(m!==0){this.it(n);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,p;try{f=Wr(s).toUint8Array()}catch(m){if(m instanceof U2)return lo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Pm(f,o,c)}catch(m){return lo(m instanceof Bl?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((c=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,f)=>{const p=this.ot(f);if(p){if(c.current&&Yp(p.target)){const m=new me(p.target.path);this.It(m).has(f)||this.Et(f,m)||this.et(f,m,Zt.newNoDocument(m,e))}c.Be&&(n.set(f,c.ke()),c.qe())}}));let s=Ve();this.He.forEach(((c,f)=>{let p=!0;f.forEachWhile((m=>{const y=this.ot(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(c))})),this.je.forEach(((c,f)=>f.setReadTime(e)));const o=new Jh(e,n,this.Ye,this.je,s);return this.je=nr(),this.Je=Ju(),this.He=Ju(),this.Ye=new lt(Me),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new kv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Nt(Me),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Nt(Me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kv),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ju(){return new lt(me.comparator)}function jv(){return new lt(me.comparator)}const iR={asc:"ASCENDING",desc:"DESCENDING"},rR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sR={and:"AND",or:"OR"};class aR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $p(r,e){return r.useProto3Json||Yh(e)?e:{value:e}}function Dh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function oR(r,e){return Dh(r,e.toTimestamp())}function gi(r){return He(!!r,49232),Se.fromTimestamp((function(n){const s=Xr(n);return new it(s.seconds,s.nanos)})(r))}function km(r,e){return Xp(r,e).canonicalString()}function Xp(r,e){const n=(function(o){return new tt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function yE(r){const e=tt.fromString(r);return He(TE(e),10190,{key:e.toString()}),e}function Wp(r,e){return km(r.databaseId,e.path)}function Rp(r,e){const n=yE(e);if(n.get(1)!==r.databaseId.projectId)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ce(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new me(_E(n))}function vE(r,e){return km(r.databaseId,e)}function lR(r){const e=yE(r);return e.length===4?tt.emptyPath():_E(e)}function Zp(r){return new tt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function _E(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Lv(r,e,n){return{name:Wp(r,e),fields:n.value.mapValue.fields}}function cR(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(y,b){return y.useProto3Json?(He(b===void 0||typeof b=="string",58123),Yt.fromBase64String(b||"")):(He(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),Yt.fromUint8Array(b||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(y){const b=y.code===void 0?Z.UNKNOWN:dE(y.code);return new ce(b,y.message||"")})(f);n=new mE(s,o,c,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Rp(r,s.document.name),c=gi(s.document.updateTime),f=s.document.createTime?gi(s.document.createTime):Se.min(),p=new cn({mapValue:{fields:s.document.fields}}),m=Zt.newFoundDocument(o,c,f,p),y=s.targetIds||[],b=s.removedTargetIds||[];n=new fh(y,b,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Rp(r,s.document),c=s.readTime?gi(s.readTime):Se.min(),f=Zt.newNoDocument(o,c),p=s.removedTargetIds||[];n=new fh([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Rp(r,s.document),c=s.removedTargetIds||[];n=new fh([],c,o,null)}else{if(!("filter"in e))return Ee(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new Z3(o,c),p=s.targetId;n=new pE(p,f)}}return n}function uR(r,e){let n;if(e instanceof _c)n={update:Lv(r,e.key,e.value)};else if(e instanceof fE)n={delete:Wp(r,e.key)};else if(e instanceof ss)n={update:Lv(r,e.key,e.data),updateMask:_R(e.fieldMask)};else{if(!(e instanceof $3))return Ee(16599,{Vt:e.type});n={verify:Wp(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,f){const p=f.transform;if(p instanceof ac)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof oc)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof lc)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Nh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw Ee(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:oR(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ee(27497)})(r,e.precondition)),n}function hR(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,c){let f=o.updateTime?gi(o.updateTime):gi(c);return f.isEqual(Se.min())&&(f=gi(c)),new Y3(f,o.transformResults||[])})(n,e)))):[]}function fR(r,e){return{documents:[vE(r,e.path)]}}function dR(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=vE(r,o);const c=(function(y){if(y.length!==0)return bE(Qn.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const f=(function(y){if(y.length!==0)return y.map((b=>(function(A){return{field:eo(A.field),direction:gR(A.dir)}})(b)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const p=$p(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function pR(r){let e=lR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const b=n.from[0];b.allDescendants?o=b.collectionId:e=e.child(b.collectionId)}let c=[];n.where&&(c=(function(S){const A=EE(S);return A instanceof Qn&&$2(A)?A.getFilters():[A]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((A=>(function(H){return new sc(to(H.field),(function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(H.direction))})(A)))})(n.orderBy));let p=null;n.limit&&(p=(function(S){let A;return A=typeof S=="object"?S.value:S,Yh(A)?null:A})(n.limit));let m=null;n.startAt&&(m=(function(S){const A=!!S.before,P=S.values||[];return new Ih(P,A)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const A=!S.before,P=S.values||[];return new Ih(P,A)})(n.endAt)),O3(e,o,f,c,p,"F",m,y)}function mR(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function EE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=to(n.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=to(n.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=to(n.unaryFilter.field);return wt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=to(n.unaryFilter.field);return wt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ee(61313);default:return Ee(60726)}})(r):r.fieldFilter!==void 0?(function(n){return wt.create(to(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ee(58110);default:return Ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return Qn.create(n.compositeFilter.filters.map((s=>EE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee(1026)}})(n.compositeFilter.op))})(r):Ee(30097,{filter:r})}function gR(r){return iR[r]}function yR(r){return rR[r]}function vR(r){return sR[r]}function eo(r){return{fieldPath:r.canonicalString()}}function to(r){return Gt.fromServerFormat(r.fieldPath)}function bE(r){return r instanceof wt?(function(n){if(n.op==="=="){if(Av(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(Sv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Av(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(Sv(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:yR(n.op),value:n.value}}})(r):r instanceof Qn?(function(n){const s=n.getFilters().map((o=>bE(o)));return s.length===1?s[0]:{compositeFilter:{op:vR(n.op),filters:s}}})(r):Ee(54877,{filter:r})}function _R(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function TE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,s,o,c=Se.min(),f=Se.min(),p=Yt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.yt=e}}function bR(r){const e=pR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Kp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.Cn=new wR}addToCollectionParentIndex(e,n){return this.Cn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve($r.min())}updateCollectionGroup(e,n,s){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class wR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Nt(tt.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(tt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wE=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(wE,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fo(0)}static cr(){return new fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="LruGarbageCollector",SR=1048576;function Bv([r,e],[n,s]){const o=Me(r,n);return o===0?Me(e,s):o}class AR{constructor(e){this.Ir=e,this.buffer=new Nt(Bv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Bv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(zv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wo(n)?he(zv,"Ignoring IndexedDB error during garbage collection: ",n):await To(n)}await this.Vr(3e5)}))}}class RR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(Gh.ce);const s=new AR(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Uv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uv):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,c,f,p,m,y;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o)))).next((S=>(s=S,p=Date.now(),this.removeTargets(e,s,n)))).next((S=>(c=S,m=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(y=Date.now(),Za()<=Oe.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-b}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${c} targets in `+(m-p)+`ms
	Removed ${S} documents in `+(y-m)+`ms
Total Duration: ${y-b}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:S}))))}}function CR(r,e){return new RR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.changes=new ia((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ee.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&$l(s.mutation,o,En.empty(),it.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Ve()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Ve()){const o=Ys();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((c=>{let f=zl();return c.forEach(((p,m)=>{f=f.insert(p,m.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Ve())))}populateOverlays(e,n,s){const o=[];return s.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(e,n,s,o){let c=nr();const f=Kl(),p=(function(){return Kl()})();return n.forEach(((m,y)=>{const b=s.get(y.key);o.has(y.key)&&(b===void 0||b.mutation instanceof ss)?c=c.insert(y.key,y):b!==void 0?(f.set(y.key,b.mutation.getFieldMask()),$l(b.mutation,y,b.mutation.getFieldMask(),it.now())):f.set(y.key,En.empty())})),this.recalculateAndSaveOverlays(e,c).next((m=>(m.forEach(((y,b)=>f.set(y,b))),n.forEach(((y,b)=>p.set(y,new NR(b,f.get(y)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=Kl();let o=new lt(((f,p)=>f-p)),c=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const p of f)p.keys().forEach((m=>{const y=n.get(m);if(y===null)return;let b=s.get(m)||En.empty();b=p.applyToLocalView(y,b),s.set(m,b);const S=(o.get(p.batchId)||Ve()).add(m);o=o.insert(p.batchId,S)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),y=m.key,b=m.value,S=rE();b.forEach((A=>{if(!c.has(A)){const P=uE(n.get(A),s.get(A));P!==null&&S.set(A,P),c=c.add(A)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,S))}return ee.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return me.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-c.size):ee.resolve(Ys());let p=tc,m=c;return f.next((y=>ee.forEach(y,((b,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),c.get(b)?ee.resolve():this.remoteDocumentCache.getEntry(e,b).next((A=>{m=m.insert(b,A)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,m,y,Ve()))).next((b=>({batchId:p,changes:iE(b)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new me(n)).next((s=>{let o=zl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const c=n.collectionGroup;let f=zl();return this.indexManager.getCollectionParents(e,c).next((p=>ee.forEach(p,(m=>{const y=(function(S,A){return new So(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,m.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((b=>{b.forEach(((S,A)=>{f=f.insert(S,A)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,o)))).next((f=>{c.forEach(((m,y)=>{const b=y.getKey();f.get(b)===null&&(f=f.insert(b,Zt.newInvalidDocument(b)))}));let p=zl();return f.forEach(((m,y)=>{const b=c.get(m);b!==void 0&&$l(b.mutation,y,En.empty(),it.now()),Xh(n,y)&&(p=p.insert(m,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}})(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:bR(o.bundledQuery),readTime:gi(o.readTime)}})(n)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(){this.overlays=new lt(me.comparator),this.qr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return ee.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&s.set(o,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,c)=>{this.St(e,n,c)})),ee.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,n,s){const o=Ys(),c=n.length+1,f=new me(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,y=m.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let c=new lt(((y,b)=>y-b));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let b=c.get(y.largestBatchId);b===null&&(b=Ys(),c=c.insert(y.largestBatchId,b)),b.set(y.getKey(),y)}}const p=Ys(),m=c.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((y,b)=>p.set(y,b))),!(p.size()>=o)););return ee.resolve(p)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new W3(n,s));let c=this.qr.get(n);c===void 0&&(c=Ve(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Qr=new Nt(Lt.$r),this.Ur=new Nt(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Lt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new me(new tt([])),s=new Lt(n,e),o=new Lt(n,e+1),c=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),c.push(f.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new me(new tt([])),s=new Lt(n,e),o=new Lt(n,e+1);let c=Ve();return this.Ur.forEachInRange([s,o],(f=>{c=c.add(f.key)})),c}containsKey(e){const n=new Lt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return me.comparator(e.key,n.key)||Me(e.Yr,n.Yr)}static Kr(e,n){return Me(e.Yr,n.Yr)||me.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Nt(Lt.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new X3(c,n,s,o);this.mutationQueue.push(f);for(const p of o)this.Zr=this.Zr.add(new Lt(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ee.resolve(f)}lookupMutationBatch(e,n){return ee.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return ee.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Cm:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),o=new Lt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],(f=>{const p=this.Xr(f.Yr);c.push(p)})),ee.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Nt(Me);return n.forEach((o=>{const c=new Lt(o,0),f=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],(p=>{s=s.add(p.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let c=s;me.isDocumentKey(c)||(c=c.child(""));const f=new Lt(new me(c),0);let p=new Nt(Me);return this.Zr.forEachWhile((m=>{const y=m.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(p=p.add(m.Yr)),!0)}),f),ee.resolve(this.ti(p))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(n.mutations,(o=>{const c=new Lt(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Lt(n,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.ri=e,this.docs=(function(){return new lt(me.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ee.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let s=nr();return n.forEach((o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Zt.newInvalidDocument(o))})),ee.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let c=nr();const f=n.path,p=new me(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:y,value:{document:b}}=m.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||u3(c3(b),s)<=0||(o.has(b.key)||Xh(n,b))&&(c=c.insert(b.key,b.mutableCopy()))}return ee.resolve(c)}getAllFromCollectionGroup(e,n,s,o){Ee(9500)}ii(e,n){return ee.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new jR(this)}getSize(e){return ee.resolve(this.size)}}class jR extends IR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ee.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.persistence=e,this.si=new ia((n=>Dm(n)),Om),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.oi=0,this._i=new jm,this.targetCount=0,this.ai=fo.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ee.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.Pr(n),ee.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,s){let o=0;const c=[];return this.si.forEach(((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),ee.waitFor(c).next((()=>o))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ee.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ee.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((f=>{c.push(o.markPotentiallyOrphaned(e,f))})),ee.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ee.resolve(s)}containsKey(e,n){return ee.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Gh(0),this.li=!1,this.li=!0,this.hi=new VR,this.referenceDelegate=e(this),this.Pi=new LR(this),this.indexManager=new TR,this.remoteDocumentCache=(function(o){return new kR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new ER(n),this.Ii=new OR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new PR(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){he("MemoryPersistence","Starting transaction:",e);const o=new UR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class UR extends f3{constructor(e){super(),this.currentSequenceNumber=e}}class Lm{constructor(e){this.persistence=e,this.Ri=new jm,this.Vi=null}static mi(e){return new Lm(e)}get fi(){if(this.Vi)return this.Vi;throw Ee(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const o=me.fromPath(s);return this.gi(e,o).next((c=>{c||n.removeEntry(o,Se.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Oh{constructor(e,n){this.persistence=e,this.pi=new ia((s=>m3(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=CR(this,n)}static mi(e,n){return new Oh(e,n)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ee.forEach(this.pi,((s,o)=>this.br(e,s,o).next((c=>c?ee.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((p=>{p||(s++,c.removeEntry(f,Se.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ch(e.data.value)),n}br(e,n,s){return ee.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Ve(),o=Ve();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Um(e,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return g4()?8:d3(Jt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const c={result:null};return this.ys(e,n).next((f=>{c.result=f})).next((()=>{if(!c.result)return this.ws(e,n,o,s).next((f=>{c.result=f}))})).next((()=>{if(c.result)return;const f=new zR;return this.Ss(e,n,f).next((p=>{if(c.result=p,this.Vs)return this.bs(e,n,f,p.size)}))})).next((()=>c.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(Za()<=Oe.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Za()<=Oe.DEBUG&&he("QueryEngine","Query:",Ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Za()<=Oe.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mi(n))):ee.resolve())}ys(e,n){if(Iv(n))return ee.resolve(null);let s=mi(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Kp(n,null,"F"),s=mi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const f=Ve(...c);return this.ps.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,s).next((m=>{const y=this.Ds(n,p);return this.Cs(n,y,f,m.readTime)?this.ys(e,Kp(n,null,"F")):this.vs(e,y,n,m)}))))})))))}ws(e,n,s,o){return Iv(n)||o.isEqual(Se.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((c=>{const f=this.Ds(n,c);return this.Cs(n,f,s,o)?ee.resolve(null):(Za()<=Oe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ja(n)),this.vs(e,f,n,l3(o,tc)).next((p=>p)))}))}Ds(e,n){let s=new Nt(tE(e));return n.forEach(((o,c)=>{Xh(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,s){return Za()<=Oe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Ja(n)),this.ps.getDocumentsMatchingQuery(e,n,$r.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((c=>(n.forEach((f=>{c=c.insert(f.key,f)})),c)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="LocalStore",qR=3e8;class HR{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new lt(Me),this.xs=new ia((c=>Dm(c)),Om),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function FR(r,e,n,s){return new HR(r,e,n,s)}async function AE(r,e){const n=Ae(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const f=[],p=[];let m=Ve();for(const y of o){f.push(y.batchId);for(const b of y.mutations)m=m.add(b.key)}for(const y of c){p.push(y.batchId);for(const b of y.mutations)m=m.add(b.key)}return n.localDocuments.getDocuments(s,m).next((y=>({Ls:y,removedBatchIds:f,addedBatchIds:p})))}))}))}function GR(r,e){const n=Ae(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,y,b){const S=y.batch,A=S.keys();let P=ee.resolve();return A.forEach((H=>{P=P.next((()=>b.getEntry(m,H))).next((B=>{const G=y.docVersions.get(H);He(G!==null,48541),B.version.compareTo(G)<0&&(S.applyToRemoteDocument(B,y),B.isValidDocument()&&(B.setReadTime(y.commitVersion),b.addEntry(B)))}))})),P.next((()=>p.mutationQueue.removeMutationBatch(m,S)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let m=Ve();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(m=m.add(p.batch.mutations[y].key));return m})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function xE(r){const e=Ae(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function YR(r,e){const n=Ae(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];e.targetChanges.forEach(((b,S)=>{const A=o.get(S);if(!A)return;p.push(n.Pi.removeMatchingKeys(c,b.removedDocuments,S).next((()=>n.Pi.addMatchingKeys(c,b.addedDocuments,S))));let P=A.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(S)!==null?P=P.withResumeToken(Yt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):b.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(b.resumeToken,s)),o=o.insert(S,P),(function(B,G,K){return B.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=qR?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(A,P,b)&&p.push(n.Pi.updateTargetData(c,P))}));let m=nr(),y=Ve();if(e.documentUpdates.forEach((b=>{e.resolvedLimboDocuments.has(b)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,b))})),p.push(QR(c,f,e.documentUpdates).next((b=>{m=b.ks,y=b.qs}))),!s.isEqual(Se.min())){const b=n.Pi.getLastRemoteSnapshotVersion(c).next((S=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));p.push(b)}return ee.waitFor(p).next((()=>f.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,m,y))).next((()=>m))})).then((c=>(n.Ms=o,c)))}function QR(r,e,n){let s=Ve(),o=Ve();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let f=nr();return n.forEach(((p,m)=>{const y=c.get(p);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Se.min())?(e.removeEntry(p,m.readTime),f=f.insert(p,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),f=f.insert(p,m)):he(zm,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",m.version)})),{ks:f,qs:o}}))}function KR(r,e){const n=Ae(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Cm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function $R(r,e){const n=Ae(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((c=>c?(o=c,ee.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new qr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function Jp(r,e,n){const s=Ae(r),o=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!wo(f))throw f;he(zm,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function qv(r,e,n){const s=Ae(r);let o=Se.min(),c=Ve();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(m,y,b){const S=Ae(m),A=S.xs.get(b);return A!==void 0?ee.resolve(S.Ms.get(A)):S.Pi.getTargetData(y,b)})(s,f,mi(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,p.targetId).next((m=>{c=m}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Se.min(),n?c:Ve()))).next((p=>(XR(s,V3(e),p),{documents:p,Qs:c})))))}function XR(r,e,n){let s=r.Os.get(e)||Se.min();n.forEach(((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class Hv{constructor(){this.activeTargetIds=z3()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WR{constructor(){this.Mo=new Hv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Hv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="ConnectivityMonitor";class Gv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(Fv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(Fv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh=null;function em(){return eh===null?eh=(function(){return 268435456+Math.round(2147483648*Math.random())})():eh++,"0x"+eh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="RestConnection",JR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class e5{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Rh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,c){const f=em(),p=this.zo(e,n.toUriEncodedString());he(Cp,`Sending RPC '${e}' ${f}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,c);const{host:y}=new URL(p),b=vo(y);return this.Jo(e,p,m,s,b).then((S=>(he(Cp,`Received RPC '${e}' ${f}: `,S),S)),(S=>{throw lo(Cp,`RPC '${e}' ${f} failed with error: `,S,"url: ",p,"request:",s),S}))}Ho(e,n,s,o,c,f){return this.Go(e,n,s,o,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),s&&s.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const s=JR[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection";class n5 extends e5{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,c){const f=em();return new Promise(((p,m)=>{const y=new C2;y.setWithCredentials(!0),y.listenOnce(I2.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case lh.NO_ERROR:const S=y.getResponseJson();he(Xt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),p(S);break;case lh.TIMEOUT:he(Xt,`RPC '${e}' ${f} timed out`),m(new ce(Z.DEADLINE_EXCEEDED,"Request time out"));break;case lh.HTTP_ERROR:const A=y.getStatus();if(he(Xt,`RPC '${e}' ${f} failed with status:`,A,"response text:",y.getResponseText()),A>0){let P=y.getResponseJson();Array.isArray(P)&&(P=P[0]);const H=P?.error;if(H&&H.status&&H.message){const B=(function(K){const ie=K.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN})(H.status);m(new ce(B,H.message))}else m(new ce(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ce(Z.UNAVAILABLE,"Connection failed."));break;default:Ee(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he(Xt,`RPC '${e}' ${f} completed.`)}}));const b=JSON.stringify(o);he(Xt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",b,s,15)}))}T_(e,n,s){const o=em(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=O2(),p=D2(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,n,s),m.encodeInitMessageHeaders=!0;const b=c.join("");he(Xt,`Creating RPC '${e}' stream ${o}: ${b}`,m);const S=f.createWebChannel(b,m);this.I_(S);let A=!1,P=!1;const H=new t5({Yo:G=>{P?he(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(A||(he(Xt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),he(Xt,`RPC '${e}' stream ${o} sending:`,G),S.send(G))},Zo:()=>S.close()}),B=(G,K,ie)=>{G.listen(K,(te=>{try{ie(te)}catch(le){setTimeout((()=>{throw le}),0)}}))};return B(S,Ul.EventType.OPEN,(()=>{P||(he(Xt,`RPC '${e}' stream ${o} transport opened.`),H.o_())})),B(S,Ul.EventType.CLOSE,(()=>{P||(P=!0,he(Xt,`RPC '${e}' stream ${o} transport closed`),H.a_(),this.E_(S))})),B(S,Ul.EventType.ERROR,(G=>{P||(P=!0,lo(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,G.name,"Message:",G.message),H.a_(new ce(Z.UNAVAILABLE,"The operation could not be completed")))})),B(S,Ul.EventType.MESSAGE,(G=>{if(!P){const K=G.data[0];He(!!K,16349);const ie=K,te=ie?.error||ie[0]?.error;if(te){he(Xt,`RPC '${e}' stream ${o} received error:`,te);const le=te.status;let ue=(function(x){const R=Tt[x];if(R!==void 0)return dE(R)})(le),be=te.message;ue===void 0&&(ue=Z.INTERNAL,be="Unknown error status: "+le+" with message "+te.message),P=!0,H.a_(new ce(ue,be)),S.close()}else he(Xt,`RPC '${e}' stream ${o} received:`,K),H.u_(K)}})),B(p,N2.STAT_EVENT,(G=>{G.stat===Bp.PROXY?he(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):G.stat===Bp.NOPROXY&&he(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{H.__()}),0),H}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Ip(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(r){return new aR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv="PersistentStream";class CE{constructor(e,n,s,o,c,f,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new RE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ce(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(Yv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(he(Yv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class i5 extends CE{constructor(e,n,s,o,c,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cR(this.serializer,e),s=(function(c){if(!("targetChange"in c))return Se.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Se.min():f.readTime?gi(f.readTime):Se.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Zp(this.serializer),n.addTarget=(function(c,f){let p;const m=f.target;if(p=Yp(m)?{documents:fR(c,m)}:{query:dR(c,m).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=gE(c,f.resumeToken);const y=$p(c,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(Se.min())>0){p.readTime=Dh(c,f.snapshotVersion.toTimestamp());const y=$p(c,f.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=mR(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Zp(this.serializer),n.removeTarget=e,this.q_(n)}}class r5 extends CE{constructor(e,n,s,o,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hR(e.writeResults,e.commitTime),s=gi(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Zp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>uR(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{}class a5 extends s5{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Go(e,Xp(n,s),o,c,f))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(Z.UNKNOWN,c.toString())}))}Ho(e,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.Ho(e,Xp(n,s),o,f,p,c))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ce(Z.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class o5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(tr(n),this.aa=!1):he("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="RemoteStore";class l5{constructor(e,n,s,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{ra(this)&&(he(ea,"Restarting streams for network reachability change."),await(async function(m){const y=Ae(m);y.Ea.add(4),await bc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await tf(y)})(this))}))})),this.Ra=new o5(s,o)}}async function tf(r){if(ra(r))for(const e of r.da)await e(!0)}async function bc(r){for(const e of r.da)await e(!1)}function IE(r,e){const n=Ae(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Fm(n)?Hm(n):Ao(n).O_()&&qm(n,e))}function Bm(r,e){const n=Ae(r),s=Ao(n);n.Ia.delete(e),s.O_()&&NE(n,e),n.Ia.size===0&&(s.O_()?s.L_():ra(n)&&n.Ra.set("Unknown"))}function qm(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(r).Y_(e)}function NE(r,e){r.Va.Ue(e),Ao(r).Z_(e)}function Hm(r){r.Va=new nR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ao(r).start(),r.Ra.ua()}function Fm(r){return ra(r)&&!Ao(r).x_()&&r.Ia.size>0}function ra(r){return Ae(r).Ea.size===0}function DE(r){r.Va=void 0}async function c5(r){r.Ra.set("Online")}async function u5(r){r.Ia.forEach(((e,n)=>{qm(r,e)}))}async function h5(r,e){DE(r),Fm(r)?(r.Ra.ha(e),Hm(r)):r.Ra.set("Unknown")}async function f5(r,e,n){if(r.Ra.set("Online"),e instanceof mE&&e.state===2&&e.cause)try{await(async function(o,c){const f=c.cause;for(const p of c.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.Va.removeTarget(p))})(r,e)}catch(s){he(ea,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mh(r,s)}else if(e instanceof fh?r.Va.Ze(e):e instanceof pE?r.Va.st(e):r.Va.tt(e),!n.isEqual(Se.min()))try{const s=await xE(r.localStore);n.compareTo(s)>=0&&await(function(c,f){const p=c.Va.Tt(f);return p.targetChanges.forEach(((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const b=c.Ia.get(y);b&&c.Ia.set(y,b.withResumeToken(m.resumeToken,f))}})),p.targetMismatches.forEach(((m,y)=>{const b=c.Ia.get(m);if(!b)return;c.Ia.set(m,b.withResumeToken(Yt.EMPTY_BYTE_STRING,b.snapshotVersion)),NE(c,m);const S=new qr(b.target,m,y,b.sequenceNumber);qm(c,S)})),c.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){he(ea,"Failed to raise snapshot:",s),await Mh(r,s)}}async function Mh(r,e,n){if(!wo(e))throw e;r.Ea.add(1),await bc(r),r.Ra.set("Offline"),n||(n=()=>xE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{he(ea,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await tf(r)}))}function OE(r,e){return e().catch((n=>Mh(r,n,e)))}async function nf(r){const e=Ae(r),n=Jr(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Cm;for(;d5(e);)try{const o=await KR(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,p5(e,o)}catch(o){await Mh(e,o)}ME(e)&&VE(e)}function d5(r){return ra(r)&&r.Ta.length<10}function p5(r,e){r.Ta.push(e);const n=Jr(r);n.O_()&&n.X_&&n.ea(e.mutations)}function ME(r){return ra(r)&&!Jr(r).x_()&&r.Ta.length>0}function VE(r){Jr(r).start()}async function m5(r){Jr(r).ra()}async function g5(r){const e=Jr(r);for(const n of r.Ta)e.ea(n.mutations)}async function y5(r,e,n){const s=r.Ta.shift(),o=Vm.from(s,e,n);await OE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await nf(r)}async function v5(r,e){e&&Jr(r).X_&&await(async function(s,o){if((function(f){return J3(f)&&f!==Z.ABORTED})(o.code)){const c=s.Ta.shift();Jr(s).B_(),await OE(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o))),await nf(s)}})(r,e),ME(r)&&VE(r)}async function Qv(r,e){const n=Ae(r);n.asyncQueue.verifyOperationInProgress(),he(ea,"RemoteStore received new credentials");const s=ra(n);n.Ea.add(3),await bc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tf(n)}async function _5(r,e){const n=Ae(r);e?(n.Ea.delete(2),await tf(n)):e||(n.Ea.add(2),await bc(n),n.Ra.set("Unknown"))}function Ao(r){return r.ma||(r.ma=(function(n,s,o){const c=Ae(n);return c.sa(),new i5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:c5.bind(null,r),t_:u5.bind(null,r),r_:h5.bind(null,r),H_:f5.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Fm(r)?Hm(r):r.Ra.set("Unknown")):(await r.ma.stop(),DE(r))}))),r.ma}function Jr(r){return r.fa||(r.fa=(function(n,s,o){const c=Ae(n);return c.sa(),new r5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:m5.bind(null,r),r_:v5.bind(null,r),ta:g5.bind(null,r),na:y5.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await nf(r)):(await r.fa.stop(),r.Ta.length>0&&(he(ea,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,n,s,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,c){const f=Date.now()+s,p=new Gm(e,n,f,o,c);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ym(r,e){if(tr("AsyncQueue",`${e}: ${r}`),wo(r))return new ce(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{static emptySet(e){return new so(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||me.comparator(n.key,s.key):(n,s)=>me.comparator(n.key,s.key),this.keyedMap=zl(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new so;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.ga=new lt(me.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ee(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class po{constructor(e,n,s,o,c,f,p,m,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,c){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new po(e,n,so.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$h(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class b5{constructor(){this.queries=$v(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Ae(n),c=o.queries;o.queries=$v(),c.forEach(((f,p)=>{for(const m of p.Sa)m.onError(s)}))})(this,new ce(Z.ABORTED,"Firestore shutting down"))}}function $v(){return new ia((r=>eE(r)),$h)}async function PE(r,e){const n=Ae(r);let s=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(s=2):(c=new E5,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Ym(f,`Initialization of query '${Ja(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&Qm(n)}async function kE(r,e){const n=Ae(r),s=e.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(e);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function T5(r,e){const n=Ae(r);let s=!1;for(const o of e){const c=o.query,f=n.queries.get(c);if(f){for(const p of f.Sa)p.Fa(o)&&(s=!0);f.wa=o}}s&&Qm(n)}function w5(r,e,n){const s=Ae(r),o=s.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(e)}function Qm(r){r.Ca.forEach((e=>{e.next()}))}var tm,Xv;(Xv=tm||(tm={})).Ma="default",Xv.Cache="cache";class jE{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==tm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.key=e}}class UE{constructor(e){this.key=e}}class S5{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ve(),this.mutatedKeys=Ve(),this.eu=tE(e),this.tu=new so(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Kv,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((b,S)=>{const A=o.get(b),P=Xh(this.query,S)?S:null,H=!!A&&this.mutatedKeys.has(A.key),B=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let G=!1;A&&P?A.data.isEqual(P.data)?H!==B&&(s.track({type:3,doc:P}),G=!0):this.su(A,P)||(s.track({type:2,doc:P}),G=!0,(m&&this.eu(P,m)>0||y&&this.eu(P,y)<0)&&(p=!0)):!A&&P?(s.track({type:0,doc:P}),G=!0):A&&!P&&(s.track({type:1,doc:A}),G=!0,(m||y)&&(p=!0)),G&&(P?(f=f.add(P),c=B?c.add(b):c.delete(b)):(f=f.delete(b),c=c.delete(b)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const b=this.query.limitType==="F"?f.last():f.first();f=f.delete(b.key),c=c.delete(b.key),s.track({type:1,doc:b})}return{tu:f,iu:s,Cs:p,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((b,S)=>(function(P,H){const B=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee(20277,{Rt:G})}};return B(P)-B(H)})(b.type,S.type)||this.eu(b.doc,S.doc))),this.ou(s),o=o??!1;const p=n&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,y=m!==this.Za;return this.Za=m,f.length!==0||y?{snapshot:new po(this.query,e.tu,c,f,e.mutatedKeys,m===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Kv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ve(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new UE(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new LE(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Ve();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Km="SyncEngine";class A5{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class x5{constructor(e){this.key=e,this.hu=!1}}class R5{constructor(e,n,s,o,c,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ia((p=>eE(p)),$h),this.Iu=new Map,this.Eu=new Set,this.du=new lt(me.comparator),this.Au=new Map,this.Ru=new jm,this.Vu={},this.mu=new Map,this.fu=fo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function C5(r,e,n=!0){const s=GE(r);let o;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await zE(s,e,n,!0),o}async function I5(r,e){const n=GE(r);await zE(n,e,!0,!1)}async function zE(r,e,n,s){const o=await $R(r.localStore,mi(e)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await N5(r,e,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&IE(r.remoteStore,o),p}async function N5(r,e,n,s,o){r.pu=(S,A,P)=>(async function(B,G,K,ie){let te=G.view.ru(K);te.Cs&&(te=await qv(B.localStore,G.query,!1).then((({documents:V})=>G.view.ru(V,te))));const le=ie&&ie.targetChanges.get(G.targetId),ue=ie&&ie.targetMismatches.get(G.targetId)!=null,be=G.view.applyChanges(te,B.isPrimaryClient,le,ue);return Zv(B,G.targetId,be.au),be.snapshot})(r,S,A,P);const c=await qv(r.localStore,e,!0),f=new S5(e,c.Qs),p=f.ru(c.documents),m=Ec.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(p,r.isPrimaryClient,m);Zv(r,n,y.au);const b=new A5(e,n,f);return r.Tu.set(e,b),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function D5(r,e,n){const s=Ae(r),o=s.Tu.get(e),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter((f=>!$h(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Jp(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Bm(s.remoteStore,o.targetId),nm(s,o.targetId)})).catch(To)):(nm(s,o.targetId),await Jp(s.localStore,o.targetId,!0))}async function O5(r,e){const n=Ae(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Bm(n.remoteStore,s.targetId))}async function M5(r,e,n){const s=z5(r);try{const o=await(function(f,p){const m=Ae(f),y=it.now(),b=p.reduce(((P,H)=>P.add(H.key)),Ve());let S,A;return m.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let H=nr(),B=Ve();return m.Ns.getEntries(P,b).next((G=>{H=G,H.forEach(((K,ie)=>{ie.isValidDocument()||(B=B.add(K))}))})).next((()=>m.localDocuments.getOverlayedDocuments(P,H))).next((G=>{S=G;const K=[];for(const ie of p){const te=K3(ie,S.get(ie.key).overlayedDocument);te!=null&&K.push(new ss(ie.key,te,Y2(te.value.mapValue),Yn.exists(!0)))}return m.mutationQueue.addMutationBatch(P,y,K,p)})).next((G=>{A=G;const K=G.applyToLocalDocumentSet(S,B);return m.documentOverlayCache.saveOverlays(P,G.batchId,K)}))})).then((()=>({batchId:A.batchId,changes:iE(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,p,m){let y=f.Vu[f.currentUser.toKey()];y||(y=new lt(Me)),y=y.insert(p,m),f.Vu[f.currentUser.toKey()]=y})(s,o.batchId,n),await Tc(s,o.changes),await nf(s.remoteStore)}catch(o){const c=Ym(o,"Failed to persist write");n.reject(c)}}async function BE(r,e){const n=Ae(r);try{const s=await YR(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const f=n.Au.get(c);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?He(f.hu,14607):o.removedDocuments.size>0&&(He(f.hu,42227),f.hu=!1))})),await Tc(n,s,e)}catch(s){await To(s)}}function Wv(r,e,n){const s=Ae(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((c,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const m=Ae(f);m.onlineState=p;let y=!1;m.queries.forEach(((b,S)=>{for(const A of S.Sa)A.va(p)&&(y=!0)})),y&&Qm(m)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function V5(r,e,n){const s=Ae(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),c=o&&o.key;if(c){let f=new lt(me.comparator);f=f.insert(c,Zt.newNoDocument(c,Se.min()));const p=Ve().add(c),m=new Jh(Se.min(),new Map,new lt(Me),f,p);await BE(s,m),s.du=s.du.remove(c),s.Au.delete(e),$m(s)}else await Jp(s.localStore,e,!1).then((()=>nm(s,e,n))).catch(To)}async function P5(r,e){const n=Ae(r),s=e.batch.batchId;try{const o=await GR(n.localStore,e);HE(n,s,null),qE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Tc(n,o)}catch(o){await To(o)}}async function k5(r,e,n){const s=Ae(r);try{const o=await(function(f,p){const m=Ae(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let b;return m.mutationQueue.lookupMutationBatch(y,p).next((S=>(He(S!==null,37113),b=S.keys(),m.mutationQueue.removeMutationBatch(y,S)))).next((()=>m.mutationQueue.performConsistencyCheck(y))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(y,b,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,b))).next((()=>m.localDocuments.getDocuments(y,b)))}))})(s.localStore,e);HE(s,e,n),qE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Tc(s,o)}catch(o){await To(o)}}function qE(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function HE(r,e,n){const s=Ae(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function nm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||FE(r,s)}))}function FE(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Bm(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),$m(r))}function Zv(r,e,n){for(const s of n)s instanceof LE?(r.Ru.addReference(s.key,e),j5(r,s)):s instanceof UE?(he(Km,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||FE(r,s.key)):Ee(19791,{wu:s})}function j5(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(he(Km,"New document in limbo: "+n),r.Eu.add(s),$m(r))}function $m(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new me(tt.fromString(e)),s=r.fu.next();r.Au.set(s,new x5(n)),r.du=r.du.insert(n,s),IE(r.remoteStore,new qr(mi(Kh(n.path)),s,"TargetPurposeLimboResolution",Gh.ce))}}async function Tc(r,e,n){const s=Ae(r),o=[],c=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,m)=>{f.push(s.pu(m,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:n?.targetChanges.get(m.targetId)?.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Um.As(m.targetId,y);c.push(b)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(m,y){const b=Ae(m);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>ee.forEach(y,(A=>ee.forEach(A.Es,(P=>b.persistence.referenceDelegate.addReference(S,A.targetId,P))).next((()=>ee.forEach(A.ds,(P=>b.persistence.referenceDelegate.removeReference(S,A.targetId,P)))))))))}catch(S){if(!wo(S))throw S;he(zm,"Failed to update sequence numbers: "+S)}for(const S of y){const A=S.targetId;if(!S.fromCache){const P=b.Ms.get(A),H=P.snapshotVersion,B=P.withLastLimboFreeSnapshotVersion(H);b.Ms=b.Ms.insert(A,B)}}})(s.localStore,c))}async function L5(r,e){const n=Ae(r);if(!n.currentUser.isEqual(e)){he(Km,"User change. New user:",e.toKey());const s=await AE(n.localStore,e);n.currentUser=e,(function(c,f){c.mu.forEach((p=>{p.forEach((m=>{m.reject(new ce(Z.CANCELLED,f))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Tc(n,s.Ls)}}function U5(r,e){const n=Ae(r),s=n.Au.get(e);if(s&&s.hu)return Ve().add(s.key);{let o=Ve();const c=n.Iu.get(e);if(!c)return o;for(const f of c){const p=n.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function GE(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=BE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V5.bind(null,e),e.Pu.H_=T5.bind(null,e.eventManager),e.Pu.yu=w5.bind(null,e.eventManager),e}function z5(r){const e=Ae(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k5.bind(null,e),e}class Vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ef(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return FR(this.persistence,new BR,e.initialUser,this.serializer)}Cu(e){return new SE(Lm.mi,this.serializer)}Du(e){return new WR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vh.provider={build:()=>new Vh};class B5 extends Vh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Oh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new xR(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new SE((s=>Oh.mi(s,n)),this.serializer)}}class im{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=L5.bind(null,this.syncEngine),await _5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new b5})()}createDatastore(e){const n=ef(e.databaseInfo.databaseId),s=(function(c){return new n5(c)})(e.databaseInfo);return(function(c,f,p,m){return new a5(c,f,p,m)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,c,f,p){return new l5(s,o,c,f,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>Wv(this.syncEngine,n,0)),(function(){return Gv.v()?new Gv:new ZR})())}createSyncEngine(e,n){return(function(o,c,f,p,m,y,b){const S=new R5(o,c,f,p,m,y);return b&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=Ae(n);he(ea,"RemoteStore shutting down."),s.Ea.add(5),await bc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}im.provider={build:()=>new im};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class q5{constructor(e,n,s,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=Rm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async f=>{he(es,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(he(es,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ym(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Np(r,e){r.asyncQueue.verifyOperationInProgress(),he(es,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await AE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Jv(r,e){r.asyncQueue.verifyOperationInProgress();const n=await H5(r);he(es,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Qv(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Qv(e.remoteStore,o))),r._onlineComponents=e}async function H5(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he(es,"Using user provided OfflineComponentProvider");try{await Np(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await Np(r,new Vh)}}else he(es,"Using default OfflineComponentProvider"),await Np(r,new B5(void 0));return r._offlineComponents}async function QE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he(es,"Using user provided OnlineComponentProvider"),await Jv(r,r._uninitializedComponentsProvider._online)):(he(es,"Using default OnlineComponentProvider"),await Jv(r,new im))),r._onlineComponents}function F5(r){return QE(r).then((e=>e.syncEngine))}async function rm(r){const e=await QE(r),n=e.eventManager;return n.onListen=C5.bind(null,e.syncEngine),n.onUnlisten=D5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=I5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=O5.bind(null,e.syncEngine),n}function G5(r,e,n={}){const s=new Qr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,f,p,m,y){const b=new YE({next:A=>{b.Nu(),f.enqueueAndForget((()=>kE(c,S)));const P=A.docs.has(p);!P&&A.fromCache?y.reject(new ce(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&m&&m.source==="server"?y.reject(new ce(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(A)},error:A=>y.reject(A)}),S=new jE(Kh(p.path),b,{includeMetadataChanges:!0,qa:!0});return PE(c,S)})(await rm(r),r.asyncQueue,e,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="firestore.googleapis.com",t_=!0;class n_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ce(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$E,this.ssl=t_}else this.host=e.host,this.ssl=e.ssl??t_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SR)throw new ce(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=KE(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rf{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new W6;switch(s.type){case"firstParty":return new t3(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=e_.get(n);s&&(he("ComponentProvider","Removing Datastore"),e_.delete(n),s.terminate())})(this),Promise.resolve()}}function Y5(r,e,n,s={}){r=Gn(r,rf);const o=vo(e),c=r._getSettings(),f={...c,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;o&&(L_(`https://${p}`),U_("Firestore",!0)),c.host!==$E&&c.host!==p&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...c,host:p,ssl:o,emulatorOptions:s};if(!$s(m,f)&&(r._setSettings(m),s.mockUserToken)){let y,b;if(typeof s.mockUserToken=="string")y=s.mockUserToken,b=Wt.MOCK_USER;else{y=o4(s.mockUserToken,r._app?.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ce(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Wt(S)}r._authCredentials=new Z6(new V2(y,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new sa(this.firestore,e,this._query)}}class ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(vc(n,ft._jsonSchema))return new ft(e,s||null,new me(tt.fromString(n.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:St("string",ft._jsonSchemaVersion),referencePath:St("string")};class Kr extends sa{constructor(e,n,s){super(e,n,Kh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new me(e))}withConverter(e){return new Kr(this.firestore,e,this._path)}}function Xm(r,e,...n){if(r=Dt(r),P2("collection","path",e),r instanceof rf){const s=tt.fromString(e,...n);return mv(s),new Kr(r,null,s)}{if(!(r instanceof ft||r instanceof Kr))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(tt.fromString(e,...n));return mv(s),new Kr(r.firestore,null,s)}}function Kn(r,e,...n){if(r=Dt(r),arguments.length===1&&(e=Rm.newId()),P2("doc","path",e),r instanceof rf){const s=tt.fromString(e,...n);return pv(s),new ft(r,null,new me(s))}{if(!(r instanceof ft||r instanceof Kr))throw new ce(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(tt.fromString(e,...n));return pv(s),new ft(r.firestore,r instanceof Kr?r.converter:null,new me(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="AsyncQueue";class r_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new RE(this,"async_queue_retry"),this._c=()=>{const s=Ip();s&&he(i_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Ip();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ip();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Qr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wo(e))throw e;he(i_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,tr("INTERNAL UNHANDLED ERROR: ",s_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Gm.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&Ee(47125,{Pc:s_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function s_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1})(r,["next","error","complete"])}class ta extends rf{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new r_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r_(e),this._firestoreClient=void 0,await e}}}function Q5(r,e){const n=typeof r=="object"?r:H_(),s=typeof r=="string"?r:Rh,o=mm(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=s4("firestore");c&&Y5(o,...c)}return o}function Wm(r){if(r._terminated)throw new ce(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||K5(r),r._firestoreClient}function K5(r){const e=r._freezeSettings(),n=(function(o,c,f,p){return new v3(o,c,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,KE(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new q5(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Yt.fromBase64String(e))}catch(n){throw new ce(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vc(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:St("string",Pn._jsonSchemaVersion),bytes:St("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yi._jsonSchemaVersion}}static fromJSON(e){if(vc(e,yi._jsonSchema))return new yi(e.latitude,e.longitude)}}yi._jsonSchemaVersion="firestore/geoPoint/1.0",yi._jsonSchema={type:St("string",yi._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vc(e,vi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new vi(e.vectorValues);throw new ce(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vi._jsonSchemaVersion="firestore/vectorValue/1.0",vi._jsonSchema={type:St("string",vi._jsonSchemaVersion),vectorValues:St("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $5=/^__.*__$/;class X5{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new _c(e,this.data,n,this.fieldTransforms)}}class XE{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function WE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee(40011,{Ac:r})}}class Zm{constructor(e,n,s,o,c,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Zm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ph(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(WE(this.Ac)&&$5.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class W5{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ef(e)}Cc(e,n,s,o=!1){return new Zm({Ac:e,methodName:n,Dc:s,path:Gt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function of(r){const e=r._freezeSettings(),n=ef(r._databaseId);return new W5(r._databaseId,!!e.ignoreUndefinedProperties,n)}function ZE(r,e,n,s,o,c={}){const f=r.Cc(c.merge||c.mergeFields?2:0,e,n,o);eg("Data must be an object, but it was:",f,s);const p=JE(s,f);let m,y;if(c.merge)m=new En(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const b=[];for(const S of c.mergeFields){const A=sm(e,S,n);if(!f.contains(A))throw new ce(Z.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);tb(b,A)||b.push(A)}m=new En(b),y=f.fieldTransforms.filter((S=>m.covers(S.field)))}else m=null,y=f.fieldTransforms;return new X5(new cn(p),m,y)}class lf extends af{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lf}}class Jm extends af{_toFieldTransform(e){return new F3(e.path,new ac)}isEqual(e){return e instanceof Jm}}function Z5(r,e,n,s){const o=r.Cc(1,e,n);eg("Data must be an object, but it was:",o,s);const c=[],f=cn.empty();rs(s,((m,y)=>{const b=tg(e,m,n);y=Dt(y);const S=o.yc(b);if(y instanceof lf)c.push(b);else{const A=wc(y,S);A!=null&&(c.push(b),f.set(b,A))}}));const p=new En(c);return new XE(f,p,o.fieldTransforms)}function J5(r,e,n,s,o,c){const f=r.Cc(1,e,n),p=[sm(e,s,n)],m=[o];if(c.length%2!=0)throw new ce(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<c.length;A+=2)p.push(sm(e,c[A])),m.push(c[A+1]);const y=[],b=cn.empty();for(let A=p.length-1;A>=0;--A)if(!tb(y,p[A])){const P=p[A];let H=m[A];H=Dt(H);const B=f.yc(P);if(H instanceof lf)y.push(P);else{const G=wc(H,B);G!=null&&(y.push(P),b.set(P,G))}}const S=new En(y);return new XE(b,S,f.fieldTransforms)}function eC(r,e,n,s=!1){return wc(n,r.Cc(s?4:3,e))}function wc(r,e){if(eb(r=Dt(r)))return eg("Unsupported field value:",e,r),JE(r,e);if(r instanceof af)return(function(s,o){if(!WE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const c=[];let f=0;for(const p of s){let m=wc(p,o.wc(f));m==null&&(m={nullValue:"NULL_VALUE"}),c.push(m),f++}return{arrayValue:{values:c}}})(r,e)}return(function(s,o){if((s=Dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return B3(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=it.fromDate(s);return{timestampValue:Dh(o.serializer,c)}}if(s instanceof it){const c=new it(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Dh(o.serializer,c)}}if(s instanceof yi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:gE(o.serializer,s._byteString)};if(s instanceof ft){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:km(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof vi)return(function(f,p){return{mapValue:{fields:{[F2]:{stringValue:G2},[Ch]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return Mm(p.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Fh(s)}`)})(r,e)}function JE(r,e){const n={};return L2(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(r,((s,o)=>{const c=wc(o,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function eb(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof yi||r instanceof Pn||r instanceof ft||r instanceof af||r instanceof vi)}function eg(r,e,n){if(!eb(n)||!k2(n)){const s=Fh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function sm(r,e,n){if((e=Dt(e))instanceof sf)return e._internalPath;if(typeof e=="string")return tg(r,e);throw Ph("Field path arguments must be of type string or ",r,!1,void 0,n)}const tC=new RegExp("[~\\*/\\[\\]]");function tg(r,e,n){if(e.search(tC)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new sf(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Ph(r,e,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(c||f)&&(m+=" (found",c&&(m+=` in field ${s}`),f&&(m+=` in document ${o}`),m+=")"),new ce(Z.INVALID_ARGUMENT,p+r+m)}function tb(r,e){return r.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,s,o,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nC extends nb{data(){return super.data()}}function cf(r,e){return typeof e=="string"?tg(r,e):e instanceof sf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ce(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ng{}class ib extends ng{}function rC(r,e,...n){let s=[];e instanceof ng&&s.push(e),s=s.concat(n),(function(c){const f=c.filter((m=>m instanceof ig)).length,p=c.filter((m=>m instanceof uf)).length;if(f>1||f>0&&p>0)throw new ce(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class uf extends ib{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new uf(e,n,s)}_apply(e){const n=this._parse(e);return rb(e._query,n),new sa(e.firestore,e.converter,Qp(e._query,n))}_parse(e){const n=of(e.firestore);return(function(c,f,p,m,y,b,S){let A;if(y.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){l_(S,b);const H=[];for(const B of S)H.push(o_(m,c,B));A={arrayValue:{values:H}}}else A=o_(m,c,S)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||l_(S,b),A=eC(p,f,S,b==="in"||b==="not-in");return wt.create(y,b,A)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function sC(r,e,n){const s=e,o=cf("where",r);return uf._create(o,s,n)}class ig extends ng{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ig(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let f=o;const p=c.getFlattenedFilters();for(const m of p)rb(f,m),f=Qp(f,m)})(e._query,n),new sa(e.firestore,e.converter,Qp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class rg extends ib{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new rg(e,n)}_apply(e){const n=(function(o,c,f){if(o.startAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ce(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sc(c,f)})(e._query,this._field,this._direction);return new sa(e.firestore,e.converter,(function(o,c){const f=o.explicitOrderBy.concat([c]);return new So(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function aC(r,e="asc"){const n=e,s=cf("orderBy",r);return rg._create(s,n)}function o_(r,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new ce(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!J2(e)&&n.indexOf("/")!==-1)throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(tt.fromString(n));if(!me.isDocumentKey(s))throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wv(r,new me(s))}if(n instanceof ft)return wv(r,n._key);throw new ce(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fh(n)}.`)}function l_(r,e){if(!Array.isArray(r)||r.length===0)throw new ce(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rb(r,e){const n=(function(o,c){for(const f of o)for(const p of f.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class oC{convertValue(e,n="none"){switch(Zr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return rs(e,((o,c)=>{s[o]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[Ch].arrayValue?.values?.map((s=>yt(s.doubleValue)));return new vi(n)}convertGeoPoint(e){return new yi(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Qh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=tt.fromString(e);He(TE(s),9688,{name:e});const o=new ic(s.get(1),s.get(3)),c=new me(s.popFirst(5));return o.isEqual(n)||tr(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class ql{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ks extends nb{constructor(e,n,s,o,c,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ks._jsonSchema={type:St("string",Ks._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class dh extends Ks{data(e={}){return super.data(e)}}class ao{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new ql(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new dh(this._firestore,this._userDataWriter,s.key,s,new ql(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const m=new dh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ql(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const m=new dh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new ql(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,b=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),b=f.indexOf(p.doc.key)),{type:lC(p.type),doc:m,oldIndex:y,newIndex:b}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(r){r=Gn(r,ft);const e=Gn(r.firestore,ta);return G5(Wm(e),r._key).then((n=>cb(e,r,n)))}ao._jsonSchemaVersion="firestore/querySnapshot/1.0",ao._jsonSchema={type:St("string",ao._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class ab extends oC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function kh(r,e,n){r=Gn(r,ft);const s=Gn(r.firestore,ta),o=sb(r.converter,e,n);return sg(s,[ZE(of(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Yn.none())])}function ob(r,e,n,...s){r=Gn(r,ft);const o=Gn(r.firestore,ta),c=of(o);let f;return f=typeof(e=Dt(e))=="string"||e instanceof sf?J5(c,"updateDoc",r._key,e,n,s):Z5(c,"updateDoc",r._key,e),sg(o,[f.toMutation(r._key,Yn.exists(!0))])}function lb(r,e){const n=Gn(r.firestore,ta),s=Kn(r),o=sb(r.converter,e);return sg(n,[ZE(of(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Yn.exists(!1))]).then((()=>s))}function cC(r,...e){r=Dt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||a_(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(a_(e[s])){const m=e[s];e[s]=m.next?.bind(m),e[s+1]=m.error?.bind(m),e[s+2]=m.complete?.bind(m)}let c,f,p;if(r instanceof ft)f=Gn(r.firestore,ta),p=Kh(r._key.path),c={next:m=>{e[s]&&e[s](cb(f,r,m))},error:e[s+1],complete:e[s+2]};else{const m=Gn(r,sa);f=Gn(m.firestore,ta),p=m._query;const y=new ab(f);c={next:b=>{e[s]&&e[s](new ao(f,y,m,b))},error:e[s+1],complete:e[s+2]},iC(r._query)}return(function(y,b,S,A){const P=new YE(A),H=new jE(b,P,S);return y.asyncQueue.enqueueAndForget((async()=>PE(await rm(y),H))),()=>{P.Nu(),y.asyncQueue.enqueueAndForget((async()=>kE(await rm(y),H)))}})(Wm(f),p,o,c)}function sg(r,e){return(function(s,o){const c=new Qr;return s.asyncQueue.enqueueAndForget((async()=>M5(await F5(s),o,c))),c.promise})(Wm(r),e)}function cb(r,e,n){const s=n.docs.get(e._key),o=new ab(r);return new Ks(r,o,e._key,s,new ql(n.hasPendingWrites,n.fromCache),e.converter)}function c_(){return new Jm("serverTimestamp")}(function(e,n=!0){(function(o){bo=o})(_o),oo(new Xs("firestore",((s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),p=new ta(new J6(s.getProvider("auth-internal")),new n3(f,s.getProvider("app-check-internal")),(function(y,b){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ic(y.options.projectId,b)})(f,o),f);return c={useFetchStreams:n,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),Gr(uv,hv,e),Gr(uv,hv,"esm2020")})();var uC="firebase",hC="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gr(uC,hC,"app");const fC={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},dC=q_(fC),ns=$6(),bn=Q5(dC),pC=[{id:1,name:"BEGINNERS PLAN",percentProfit:"5%",price:19900,duration:"7 days",intrest:"$200",description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",percentProfit:"30%",duration:"14 days",price:999999,intrest:"$20,000",description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",percentProfit:"50%",price:1e6,intrest:"Unlimited for 30 days",description:"For serious investors building a substantial portfolio"}],mC="T9zZ4oxBJNiNxaVF2sdjLrjE4KeZkqzkiv",gC=({user:r})=>{const e=yo(),[n,s]=L.useState({}),[o,c]=L.useState(!0);return L.useEffect(()=>{(async()=>{if(r){const p=Kn(bn,"users",r.uid),m=await ts(p);m.exists()&&s(m.data())}c(!1)})()},[r]),o?g.jsx("div",{className:"loading",children:"Loading profile..."}):g.jsxs("div",{className:"profile-container",children:[g.jsx("h2",{className:"section-title",children:"User Profile"}),g.jsxs("div",{className:"profile-grid",children:[g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Full Name:"})," ",g.jsx("span",{children:n.fullName||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Email:"})," ",g.jsx("span",{children:r.email})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Username:"})," ",g.jsx("span",{children:n.username||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Phone:"})," ",g.jsx("span",{children:n.phone||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Location:"})," ",g.jsx("span",{children:n.location||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Occupation:"})," ",g.jsx("span",{children:n.occupation||"N/A"})]})]}),g.jsxs("div",{className:"bio-card",children:[g.jsx("strong",{children:"Bio:"}),g.jsx("p",{children:n.bio||"No bio provided."})]}),g.jsxs("div",{className:"wallet-info",children:[g.jsx("h3",{children:"Wallet Addresses"}),n.wallets&&n.wallets.length>0?g.jsx("ul",{className:"wallet-list",children:n.wallets.map((f,p)=>g.jsxs("li",{children:[g.jsxs("strong",{children:[f.type.toUpperCase(),":"]})," ",f.address]},p))}):g.jsxs("p",{children:["No wallet addresses saved."," ",g.jsx("span",{className:"link",onClick:()=>e("/profile"),children:"Add them now."})]})]})]})},yC=({user:r})=>{const[e,n]=L.useState(null),[s,o]=L.useState(!1),c=async()=>{if(!r||!r.email){n("error");return}o(!0),n(null);try{await Vx(ns,r.email),n("success")}catch(f){console.error("Password reset error:",f),n("error")}finally{o(!1)}};return g.jsxs("div",{className:"settings-container",children:[g.jsxs("div",{className:"settings-card",children:[g.jsx("h2",{className:"section-title",children:"Account Settings"}),g.jsxs("div",{className:"setting-item",children:[g.jsx("h3",{children:"Password & Security"}),g.jsx("p",{children:"Request a password reset link to be sent to your email."}),g.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Sending...":"Reset Password"}),e==="success"&&g.jsxs("span",{className:"success-message",children:[g.jsx(Hl,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&g.jsxs("span",{className:"error-message",children:[g.jsx(C_,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),g.jsxs("div",{className:"settings-card",children:[g.jsx("h2",{className:"section-title",children:"Other Settings"}),g.jsxs("div",{className:"setting-item",children:[g.jsx("p",{children:"Customize your account preferences here."}),g.jsx("button",{className:"btn-secondary",onClick:()=>alert("This feature is coming soon!"),children:"Update Notifications"})]})]})]})},vC=({user:r,updateBalance:e})=>{const[n,s]=L.useState(null),[o,c]=L.useState(!1),[f,p]=L.useState(!1),[m,y]=L.useState(null),[b,S]=L.useState(!1),A=B=>{s(B),c(!1),p(!1),y(null)},P=()=>{c(!0)},H=async()=>{if(n){S(!0);try{const B=new Date,G={userId:r.uid,type:"deposit",amount:n.price,percentProfit:n.percentProfit,plan:n.name,intrest:n.intrest,duration:n.duration,description:n.description,status:"completed",timestamp:B};await lb(Xm(bn,"transactions"),G);const K=Kn(bn,"users",r.uid),ie=await ts(K);if(ie.exists()){const te=ie.data().balance||0,le=ie.data().goldBalance||0,ue=parseFloat(n.percentProfit);await ob(K,{balance:te+n.price,goldBalance:le+ue}),e(te+n.price,le+ue)}y({plan:n.name,amount:n.price,date:B.toLocaleDateString(),time:B.toLocaleTimeString(),status:"Successful"}),p(!0),s(null),c(!1)}catch{alert("There was an error processing your transaction. Please try again.")}finally{S(!1)}}};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Purchase Gold"}),f&&m?g.jsxs("div",{children:[g.jsx("h3",{children:"Transaction Successful!"}),g.jsxs("div",{className:"receipt-container",children:[g.jsx("h4",{children:"Receipt"}),g.jsxs("p",{children:[g.jsx("strong",{children:"Plan:"})," ",m.plan]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Amount Deposited:"})," $",m.amount]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Date:"})," ",m.date]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Time:"})," ",m.time]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Status:"})," ",g.jsx("span",{className:"status-success",children:m.status})]})]})]}):n?o?g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Confirm Deposit"}),g.jsx("p",{children:"Click the button below to complete your transaction and generate your receipt."}),g.jsx("button",{className:"btn-primary",onClick:H,disabled:b,children:b?"Processing...":"Complete Transaction"})]}):g.jsxs(g.Fragment,{children:[g.jsxs("h3",{children:["Selected Plan: ",n.name]}),g.jsxs("p",{children:["Please send exactly ",g.jsxs("strong",{children:["$",n.price," USDT"]})," to the following address:"]}),g.jsxs("div",{className:"deposit-address",children:[g.jsx("p",{children:g.jsx("strong",{children:"USDT Address (TRC20):"})}),g.jsx("p",{children:mC}),g.jsx("p",{children:g.jsx("small",{children:"Network: TRON (TRC20)"})})]}),g.jsx("p",{children:"After completing your transfer, click the button below to confirm and generate your receipt."}),g.jsx("button",{className:"btn-primary",onClick:P,disabled:b,children:"I've Sent the Payment"}),g.jsx("button",{className:"btn-secondary",onClick:()=>s(null),children:"Choose Different Plan"})]}):g.jsxs(g.Fragment,{children:[g.jsx("p",{children:"Select a gold plan to purchase:"}),g.jsx("div",{className:"gold-plans-container",children:pC.map(B=>g.jsxs("div",{className:`gold-plan-card ${n?.id===B.id?"selected-plan":""}`,onClick:()=>A(B),children:[g.jsx(VS,{size:36,color:"#D4AF37"}),g.jsx("h3",{className:"plan-title",children:B.name}),g.jsxs("p",{className:"plan-price",children:["$",B.price," USD"]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Profit:"})," ",B.percentProfit," of Pure Gold"]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Interest:"})," ",B.intrest]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Duration:"})," ",B.duration]}),g.jsx("p",{className:"plan-description",children:B.description})]},B.id))})]})]})},_C=({user:r,balance:e,goldBalance:n,updateBalance:s})=>{const[o,c]=L.useState(""),[f,p]=L.useState("usd"),[m,y]=L.useState(""),[b,S]=L.useState(!1),[A,P]=L.useState({text:"",type:""}),H=async()=>{if(!o||!m){P({text:"Please fill all fields",type:"error"});return}const B=parseFloat(o);if(isNaN(B)||B<=0){P({text:"Please enter a valid amount",type:"error"});return}if(f==="usd"&&B>e){P({text:"Insufficient USD balance",type:"error"});return}if(f==="gold"&&B>n){P({text:"Insufficient gold balance",type:"error"});return}S(!0);try{const G={userId:r.uid,type:"withdrawal",amount:f==="usd"?B:B*300,percentProfit:f==="gold"?`${B}g`:"0g",status:"pending",destinationAddress:m,timestamp:new Date};await lb(Xm(bn,"transactions"),G);const K=Kn(bn,"users",r.uid),ie=await ts(K);if(ie.exists()){const te=ie.data().balance||0,le=ie.data().goldBalance||0;await ob(K,{balance:f==="usd"?te-B:te,goldBalance:f==="gold"?le-B:le}),s(f==="usd"?te-B:te,f==="gold"?le-B:le)}P({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),c(""),y("")}catch(G){console.error("Error processing withdrawal:",G),P({text:"There was an error processing your withdrawal. Please try again.",type:"error"})}finally{S(!1)}};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),g.jsx("div",{className:"balance-info",children:g.jsxs("p",{children:["Available Balance: ",g.jsxs("strong",{children:["$",e," USD"]})," | ",g.jsxs("strong",{children:[n,"g Gold"]})]})}),g.jsxs("div",{className:"withdraw-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),g.jsxs("select",{id:"withdraw-type",value:f,onChange:B=>p(B.target.value),children:[g.jsx("option",{value:"usd",children:"USD"}),g.jsx("option",{value:"gold",children:"Gold"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",f==="gold"?"(in grams)":"",":"]}),g.jsx("input",{id:"withdraw-amount",type:"number",value:o,onChange:B=>c(B.target.value),placeholder:f==="usd"?"Enter USD amount":"Enter gold amount in grams"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"destination-address",children:"Destination Address:"}),g.jsx("input",{id:"destination-address",type:"text",value:m,onChange:B=>y(B.target.value),placeholder:"Enter your wallet address"})]}),A.text&&g.jsxs("div",{className:A.type==="success"?"success-message":"error-message",children:[A.type==="success"?g.jsx(Hl,{style:{marginRight:"5px"}}):g.jsx(C_,{style:{marginRight:"5px"}}),A.text]}),g.jsx("button",{className:"btn-primary",onClick:H,disabled:b,children:b?"Processing...":"Request Withdrawal"})]}),g.jsxs("div",{className:"withdrawal-info",children:[g.jsx("h4",{children:"Withdrawal Information:"}),g.jsxs("ul",{children:[g.jsx("li",{children:"USD withdrawals are processed within 24 hours"}),g.jsx("li",{children:"Gold withdrawals are converted to USD at current market rates"}),g.jsx("li",{children:"Minimum withdrawal amount: $50 USD or 1g Gold"}),g.jsx("li",{children:"Network fees may apply"})]})]})]})},EC=({user:r})=>{const[e,n]=L.useState([]),[s,o]=L.useState(!0);L.useEffect(()=>{if(!r)return;const f=rC(Xm(bn,"transactions"),sC("userId","==",r.uid),aC("timestamp","desc")),p=cC(f,m=>{const y=[];m.forEach(b=>{y.push({id:b.id,...b.data()})}),n(y),o(!1)});return()=>p()},[r]);const c=f=>{switch(f){case"completed":return"status-completed";case"processing":return"status-processing";default:return"status-pending"}};return s?g.jsx("div",{className:"section-card",children:"Loading transaction history..."}):g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?g.jsx("p",{children:"No transactions yet."}):g.jsx("div",{className:"table-container",children:g.jsxs("table",{className:"transactions-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Type"}),g.jsx("th",{children:"Amount"}),g.jsx("th",{children:"Gold"}),g.jsx("th",{children:"Date"}),g.jsx("th",{children:"Status"})]})}),g.jsx("tbody",{children:e.map(f=>g.jsxs("tr",{children:[g.jsxs("td",{children:[f.type==="deposit"?g.jsx(D_,{className:"icon-deposit"}):g.jsx(N_,{className:"icon-withdraw"}),f.type,f.plan&&` (${f.plan})`]}),g.jsxs("td",{children:["$",f.amount]}),g.jsx("td",{children:f.percentProfit||"N/A"}),g.jsx("td",{children:f.timestamp?.toDate().toLocaleDateString()}),g.jsx("td",{children:g.jsx("span",{className:`status-indicator ${c(f.status)}`,children:f.status})})]},f.id))})]})})]})},bC=()=>g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Referral Program"}),g.jsx("p",{children:"Refer your friends and earn rewards! Share your unique referral link below."}),g.jsxs("div",{className:"referral-container",children:[g.jsx("strong",{children:"Your Referral Link:"}),g.jsx("p",{className:"referral-link",children:"https://yourwebsite.com/refer/YOUR-UNIQUE-CODE"}),g.jsx("button",{className:"btn-primary",onClick:()=>navigator.clipboard.writeText("https://yourwebsite.com/refer/YOUR-UNIQUE-CODE"),children:"Copy Link"})]})]}),TC=()=>{const r=yo(),[e,n]=L.useState(null),[s,o]=L.useState(null),[c,f]=L.useState("dashboard"),[p,m]=L.useState(0),[y,b]=L.useState(0),[S,A]=L.useState(!1);L.useEffect(()=>{const G=p2(ns,async K=>{if(K){n(K);const ie=Kn(bn,"users",K.uid),te=await ts(ie);if(te.exists()){const le=te.data();o(le),m(le.balance||0),b(le.goldBalance||0)}}else r("/login")});return()=>G()},[r]);const P=(G,K)=>{m(G),b(K)},H=async()=>{try{await Ux(ns),r("/login")}catch(G){console.error("Logout error:",G.message)}};if(!e||!s)return g.jsx("div",{className:"loading",children:"Loading..."});const B=()=>{switch(c){case"dashboard":return g.jsxs("div",{className:"overview-container",children:[g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Account Balance"}),g.jsxs("p",{className:"metric",children:["$",p.toLocaleString()]}),g.jsx("p",{className:"subtext",children:"Available USD"})]}),g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Gold Holdings"}),g.jsxs("p",{className:"metric",children:[y,"g"]}),g.jsx("p",{className:"subtext",children:"Pure Gold"})]}),g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Total Value"}),g.jsxs("p",{className:"metric",children:["$",(p+y*300).toLocaleString()]}),g.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Recent Activity"}),g.jsxs("ul",{className:"activity-list",children:[g.jsxs("li",{children:[g.jsx(Hl,{className:"activity-icon"})," Account created ",g.jsx("span",{className:"activity-time",children:"1 week ago"})]}),p>0&&g.jsxs("li",{children:[g.jsx(Hl,{className:"activity-icon"})," Deposit of $",p," ",g.jsx("span",{className:"activity-time",children:"Recently"})]}),y>0&&g.jsxs("li",{children:[g.jsx(Hl,{className:"activity-icon"})," Purchased ",y,"g of gold ",g.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return g.jsx(vC,{user:e,updateBalance:P});case"withdraw":return g.jsx(_C,{user:e,balance:p,goldBalance:y,updateBalance:P});case"history":return g.jsx(EC,{user:e});case"referral":return g.jsx(bC,{});case"profile":return g.jsx(gC,{user:e});case"settings":return g.jsx(yC,{user:e});default:return null}};return g.jsxs("div",{className:"dashboard-container",children:[g.jsxs("div",{className:`sidebar ${S?"mobile-open":""}`,children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx(HS,{size:24,className:"sidebar-icon"}),g.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),g.jsx("button",{className:"mobile-close-btn",onClick:()=>A(!1),children:g.jsx(zS,{})}),g.jsxs("ul",{className:"nav-list",children:[g.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{f("dashboard"),A(!1)},children:[g.jsx(NS,{})," ",g.jsx("span",{children:"Dashboard"})]}),g.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{f("deposit"),A(!1)},children:[g.jsx(D_,{})," ",g.jsx("span",{children:"Buy Gold"})]}),g.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{f("withdraw"),A(!1)},children:[g.jsx(N_,{})," ",g.jsx("span",{children:"Withdraw"})]}),g.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{f("history"),A(!1)},children:[g.jsx(jS,{})," ",g.jsx("span",{children:"History"})]}),g.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{f("referral"),A(!1)},children:[g.jsx(BS,{})," ",g.jsx("span",{children:"Referral"})]}),g.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{f("profile"),A(!1)},children:[g.jsx(qS,{})," ",g.jsx("span",{children:"Profile"})]}),g.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{f("settings"),A(!1)},children:[g.jsx(MS,{})," ",g.jsx("span",{children:"Settings"})]})]}),g.jsxs("div",{className:"logout-btn",onClick:H,children:[g.jsx(US,{})," ",g.jsx("span",{children:"Logout"})]})]}),g.jsxs("div",{className:"main-content",children:[g.jsxs("div",{className:"header",children:[g.jsxs("div",{className:"header-left",children:[g.jsx("button",{className:"mobile-menu-btn",onClick:()=>A(!0),children:g.jsx(CS,{})}),g.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),g.jsxs("span",{className:"user-info",children:["Balance: ",g.jsxs("strong",{children:["$",p]})," | Gold: ",g.jsxs("strong",{children:[y,"g"]})]})]}),g.jsx("div",{className:"content-area",children:B()})]}),g.jsx("style",{jsx:!0,children:`
      /* Dashboard Styles */
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #2c3e50 0%, #1a2530 100%);
  color: #ecf0f1;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 15px rgba(0,0,0,0.1);
  position: relative;
  z-index: 100;
  overflow: hidden;
}

.sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 25px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  background: rgba(0,0,0,0.1);
}

.sidebar-icon {
  margin-right: 12px;
  font-size: 24px;
  color: #FFD700;
}

.gold-text {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: goldShimmer 3s ease infinite;
  letter-spacing: 0.5px;
}

@keyframes goldShimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.nav-list {
  list-style: none;
  padding: 20px 0;
  margin: 0;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 14px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 4px 10px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: #FFD700;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-item:hover {
  background: rgba(255,255,255,0.05);
  transform: translateX(5px);
}

.nav-item:hover::before {
  opacity: 1;
}

.nav-item-active {
  background: linear-gradient(90deg, rgba(255,215,0,0.15) 0%, transparent 100%);
  color: #FFD700;
}

.nav-item-active::before {
  opacity: 1;
}

.nav-item svg {
  margin-right: 12px;
  font-size: 18px;
  min-width: 20px;
  transition: transform 0.3s ease;
}

.nav-item:hover svg {
  transform: scale(1.1);
}

.logout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  cursor: pointer;
  background: linear-gradient(90deg, #e74c3c 0%, #c0392b 100%);
  margin: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
}

.logout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
}

.logout-btn svg {
  margin-right: 10px;
  font-size: 18px;
}

/* Mobile Menu */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #2c3e50;
  cursor: pointer;
  margin-right: 15px;
  padding: 8px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 1001;
}

.mobile-close-btn {
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  background: rgba(0,0,0,0.2);
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: white;
  box-shadow: 0 2px 15px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 90;
}

.header-left {
  display: flex;
  align-items: center;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.user-info {
  font-size: 14px;
  font-weight: 500;
  color: #7f8c8d;
  background: #f8f9fa;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #e9ecef;
}

.content-area {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

/* Cards and Layout */
.overview-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.metric {
  font-size: 32px;
  font-weight: 800;
  color: #2c3e50;
  margin: 15px 0;
  background: linear-gradient(90deg, #2c3e50 0%, #4a6580 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtext {
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 500;
}

.section-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.06);
  margin-bottom: 30px;
  border: 1px solid #f1f3f4;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #2c3e50;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #FFD700, #DAA520);
  border-radius: 3px;
}

/* Profile Section */
.profile-container {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.06);
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.profile-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #3498db;
}

.bio-card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #27ae60;
  margin-bottom: 25px;
}

.wallet-info {
  padding: 25px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 1px solid #e9ecef;
}

.wallet-list {
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
}

.wallet-list li {
  margin-bottom: 12px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.link {
  color: #3498db;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.link:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* Settings Section */
.settings-container {
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.settings-card {
  padding: 25px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border: 1px solid #f1f3f4;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Buttons */
.btn-primary {
  padding: 12px 24px;
  background: linear-gradient(90deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.btn-secondary {
  padding: 12px 24px;
  background: white;
  color: #2c3e50;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
}

.btn-secondary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Messages */
.success-message {
  color: #27ae60;
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 10px 15px;
  background: #d4edda;
  border-radius: 8px;
  border: 1px solid #c3e6cb;
}

.error-message {
  color: #e74c3c;
  display: flex;
  align-items: center;
  margin-top: 12px;
  padding: 10px 15px;
  background: #f8d7da;
  border-radius: 8px;
  border: 1px solid #f5c6cb;
}

/* Gold Plans */
.gold-plans-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
}

.gold-plan-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 30px 25px;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.08);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.gold-plan-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
}

.gold-plan-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: #FFD700;
}

.selected-plan {
  border-color: #D4AF37;
  background: linear-gradient(135deg, #FFF9C4 0%, #FFFDE7 100%);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.2);
}

.plan-title {
  font-size: 20px;
  font-weight: 700;
  color: #D4AF37;
  margin: 15px 0;
}

.plan-price {
  font-size: 28px;
  font-weight: 800;
  color: #2c3e50;
  margin: 15px 0;
}

.plan-description {
  color: #7f8c8d;
  margin: 12px 0;
  line-height: 1.5;
}

/* Deposit Section */
.deposit-address {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  margin: 20px 0;
  text-align: center;
  word-break: break-all;
  font-family: 'Courier New', monospace;
}

.receipt-container {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 16px;
  margin: 25px 0;
  border: 1px solid #e9ecef;
}

.status-success {
  color: #27ae60;
  font-weight: 600;
}

/* Withdraw Section */
.balance-info {
  margin-bottom: 25px;
  padding: 15px 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.withdraw-form {
  display: grid;
  gap: 20px;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.form-group input, .form-group select {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus, .form-group select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.withdrawal-info {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.withdrawal-info ul {
  margin: 15px 0 0 0;
  padding-left: 20px;
}

.withdrawal-info li {
  margin-bottom: 8px;
  color: #7f8c8d;
}

/* History Section */
.table-container {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-top: 20px;
}

.transactions-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.transactions-table th {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 1px solid #e9ecef;
}

.transactions-table td {
  padding: 16px;
  border-bottom: 1px solid #f1f3f4;
  color: #2c3e50;
}

.transactions-table tr:last-child td {
  border-bottom: none;
}

.transactions-table tr:hover {
  background: #f8f9fa;
}

.icon-deposit {
  color: #27ae60;
  margin-right: 8px;
  font-size: 16px;
}

.icon-withdraw {
  color: #e74c3c;
  margin-right: 8px;
  font-size: 16px;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.status-pending {
  background: #FFF3CD;
  color: #856404;
}

.status-completed {
  background: #D4EDDA;
  color: #155724;
}

.status-processing {
  background: #CCE5FF;
  color: #004085;
}

/* Referral Section */
.referral-container {
  padding: 25px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  border: 1px dashed #bdc3c7;
  margin-top: 25px;
  text-align: center;
}

.referral-link {
  overflow-wrap: break-word;
  margin: 15px 0;
  color: #3498db;
  font-family: 'Courier New', monospace;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

/* Activity List */
.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-list li {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #f1f3f4;
  transition: background 0.3s ease;
}

.activity-list li:hover {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
}

.activity-icon {
  margin-right: 12px;
  color: #27ae60;
  font-size: 16px;
}

.activity-time {
  font-size: 12px;
  color: #95a5a6;
  margin-left: auto;
  background: #f1f3f4;
  padding: 4px 8px;
  border-radius: 12px;
}

/* Loading */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 16px;
  color: #7f8c8d;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .sidebar {
    width: 250px;
  }
  
  .content-area {
    padding: 25px;
  }
}

@media (max-width: 992px) {
  .sidebar {
    width: 220px;
  }
  
  .gold-text {
    font-size: 22px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .overview-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .dashboard-container {
    position: relative;
  }
  
  .sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;
    width: 85%;
    max-width: 320px;
    z-index: 1000;
    transition: left 0.3s ease;
    box-shadow: 5px 0 25px rgba(0,0,0,0.2);
  }
  
  .sidebar.mobile-open {
    left: 0;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-close-btn {
    display: block;
  }
  
  .header {
    padding: 15px 20px;
  }
  
  .content-area {
    padding: 20px;
  }
  
  .overview-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .settings-container {
    grid-template-columns: 1fr;
  }
  
  .gold-plans-container {
    grid-template-columns: 1fr;
  }
  
  .profile-grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 22px;
  }
  
  .user-info {
    font-size: 13px;
    padding: 6px 12px;
  }
}

@media (max-width: 576px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .header-left {
    width: 100%;
  }
  
  .content-area {
    padding: 15px;
  }
  
  .card, .section-card, .profile-container, .settings-container {
    padding: 20px;
  }
  
  .metric {
    font-size: 28px;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .gold-plan-card {
    padding: 20px 15px;
  }
  
  .plan-title {
    font-size: 18px;
  }
  
  .plan-price {
    font-size: 24px;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    margin: 5px 0;
  }
  
  .transactions-table {
    font-size: 14px;
  }
  
  .transactions-table th,
  .transactions-table td {
    padding: 12px 8px;
  }
}

/* Animation for page transitions */
.content-area > * {
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scrollbar styling */
.content-area::-webkit-scrollbar {
  width: 8px;
}

.content-area::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.content-area::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.content-area::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
      `})]})};function ub(r){return nt({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}const wC=()=>{const[r,e]=L.useState(""),[n,s]=L.useState(""),[o,c]=L.useState(""),f=yo(),p=S=>S&&typeof S.fullName=="string"&&S.fullName.trim().length>1&&Array.isArray(S.wallets)&&S.wallets.length>0,m=async S=>{const A=Kn(bn,"users",S.uid),P=await ts(A),H=P.exists()?P.data():{};p(H)?f("/dashboard"):f("/profile")},y=async S=>{S.preventDefault();try{const P=(await kx(ns,n,o)).user;await m(P)}catch(A){console.error("Login error:",A.message),e("Login failed. Check your credentials.")}},b=async()=>{const S=new di;try{const P=(await A2(ns,S)).user,H=Kn(bn,"users",P.uid);(await ts(H)).exists()||await kh(H,{fullName:P.displayName||"",email:P.email,createdAt:new Date,wallets:[]}),await m(P)}catch(A){console.error("Google login error:",A.message),e("Google login failed. Try again.")}};return g.jsxs("div",{className:"body",children:[g.jsx(fm,{}),g.jsxs("div",{className:"page",children:[g.jsx("h1",{className:"h1",children:"Login"}),g.jsxs("form",{onSubmit:y,className:"login-form",children:[g.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:S=>s(S.target.value),placeholder:"Enter your email"}),g.jsx("input",{className:"input",required:!0,type:"password",value:o,onChange:S=>c(S.target.value),placeholder:"Enter your password"}),g.jsx("button",{type:"submit",className:"btn btn1",children:"Login"}),g.jsxs("button",{type:"button",className:"google-btn",onClick:b,children:[g.jsx(ub,{className:"google-icon"})," Login with Google"]}),g.jsxs("p",{children:["Don't have an account? ",g.jsx(is,{to:"/signup",children:"Signup"})]}),r&&g.jsx("span",{className:"error-text",children:r})]})]})]})},SC=()=>{const[r,e]=L.useState(""),[n,s]=L.useState(""),[o,c]=L.useState(""),[f,p]=L.useState(""),m=yo(),y=async S=>{if(S.preventDefault(),f.length<6){e("Password must be at least 6 characters");return}try{const P=(await Px(ns,n,f)).user;await kh(Kn(bn,"users",P.uid),{fullName:o,email:n,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),m("/profile")}catch(A){console.error("Signup error:",A.message),e("Signup failed. Try again.")}},b=async()=>{const S=new di;try{const P=(await A2(ns,S)).user;await kh(Kn(bn,"users",P.uid),{fullName:P.displayName||"",email:P.email,createdAt:new Date,wallets:[]},{merge:!0}),sessionStorage.setItem("newSignup","true"),m("/profile")}catch(A){console.error("Google signup error:",A.message),e("Google signup failed. Try again.")}};return g.jsxs("div",{className:"body",children:[g.jsx(fm,{}),g.jsxs("div",{className:"page",children:[g.jsx("h1",{className:"h1",children:"Signup"}),g.jsxs("form",{onSubmit:y,className:"signup-form",children:[g.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:S=>s(S.target.value),placeholder:"Enter your email"}),g.jsx("input",{className:"input",required:!0,type:"text",value:o,onChange:S=>c(S.target.value),placeholder:"Enter your name"}),g.jsx("input",{className:"input",required:!0,type:"password",value:f,onChange:S=>p(S.target.value),placeholder:"Enter your password"}),g.jsx("button",{type:"submit",className:"btn btn1",children:"Sign Up"}),g.jsxs("button",{type:"button",className:"google-btn",onClick:b,children:[g.jsx(ub,{className:"google-icon"})," Signup with Google"]}),g.jsxs("p",{children:["Already have an account? ",g.jsx(is,{to:"/login",children:"Login"})]}),r&&g.jsx("span",{className:"error-text",children:r})]})]})]})},AC=()=>{const[r,e]=L.useState(0),[n,s]=L.useState(0),[o,c]=L.useState(!0),[f,p]=L.useState(null),[m,y]=L.useState("USD"),[b,S]=L.useState(3e4),[A,P]=L.useState([]),[H,B]=L.useState(!1),[G,K]=L.useState(5),[ie,te]=L.useState(new Date),le=L.useRef(),ue=L.useRef(),be=async()=>{try{c(!0),p(null);const N=1950+(Math.random()*50-25),k=parseFloat(N.toFixed(2));le.current&&(le.current.classList.add("price-updating"),setTimeout(()=>{s(r),e(k),te(new Date),le.current&&le.current.classList.remove("price-updating")},500)),P(I=>[...I,{price:k,timestamp:new Date}].slice(-20))}catch(N){p("Failed to fetch gold prices. Please try again later."),console.error("Error fetching gold price:",N)}finally{c(!1)}};L.useEffect(()=>{n&&Math.abs(r-n)>G&&H&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Gold Price Alert",{body:`Gold price has ${r>n?"increased":"decreased"} by $${Math.abs(r-n).toFixed(2)}.`}),le.current&&(le.current.classList.add("price-alert"),setTimeout(()=>{le.current&&le.current.classList.remove("price-alert")},2e3)))},[r,n,G,H]),L.useEffect(()=>{be();const N=setInterval(()=>{be()},b);return()=>clearInterval(N)},[b,m]);const V=()=>{"Notification"in window&&Notification.requestPermission().then(N=>{B(N==="granted")})},x=()=>n?((r-n)/n*100).toFixed(2):0,R=N=>new Intl.NumberFormat("en-US",{style:"currency",currency:m,minimumFractionDigits:2}).format(N),O=()=>{if(A.length<2)return null;const N=A.map(We=>We.price),k=Math.max(...N),I=Math.min(...N),dt=k-I;return g.jsx("div",{className:"mini-chart",ref:ue,children:A.map((We,$)=>{if($===0)return null;const ae=dt>0?(We.price-I)/dt*40:20,de=We.price>A[$-1].price;return g.jsx("div",{className:`chart-bar ${de?"chart-bar-up":"chart-bar-down"}`,style:{height:`${ae}px`}},$)})})};return g.jsxs("div",{className:"gold-price-tracker",children:[g.jsxs("div",{className:"tracker-header",children:[g.jsxs("h2",{children:[g.jsx("span",{className:"gold-icon",children:"🥇"}),"Gold Price Tracker"]}),g.jsxs("div",{className:"last-updated",children:["Last updated: ",ie.toLocaleTimeString()]})]}),o&&g.jsxs("div",{className:"loading-state",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading current gold price..."})]}),f&&g.jsxs("div",{className:"error-state",children:[g.jsx("div",{className:"error-icon",children:"⚠️"}),g.jsx("p",{children:f}),g.jsx("button",{onClick:be,className:"retry-btn",children:"Retry"})]}),!o&&!f&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"price-display",children:[g.jsxs("div",{ref:le,className:"current-price",children:[R(r),n&&g.jsxs("span",{className:`price-change ${r>=n?"positive":"negative"}`,children:[r>=n?"↗":"↘",R(Math.abs(r-n)),"(",x(),"%)"]})]}),O()]}),g.jsxs("div",{className:"price-history",children:[g.jsx("h3",{children:"Recent Trends"}),g.jsx("div",{className:"history-bars",children:A.slice(-6).map((N,k)=>g.jsxs("div",{className:"history-bar",children:[g.jsx("div",{className:"bar-time",children:N.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),g.jsx("div",{className:"bar-price",children:R(N.price)})]},k))})]})]}),g.jsxs("div",{className:"tracker-controls",children:[g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Currency:"}),g.jsxs("select",{value:m,onChange:N=>y(N.target.value),className:"control-select",children:[g.jsx("option",{value:"USD",children:"USD"}),g.jsx("option",{value:"EUR",children:"EUR"}),g.jsx("option",{value:"GBP",children:"GBP"}),g.jsx("option",{value:"JPY",children:"JPY"})]})]}),g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Refresh every:"}),g.jsxs("select",{value:b,onChange:N=>S(Number(N.target.value)),className:"control-select",children:[g.jsx("option",{value:1e4,children:"10 seconds"}),g.jsx("option",{value:3e4,children:"30 seconds"}),g.jsx("option",{value:6e4,children:"1 minute"}),g.jsx("option",{value:3e5,children:"5 minutes"})]})]}),g.jsx("div",{className:"control-group",children:g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",checked:H,onChange:V}),"Price alerts"]})}),H&&g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Alert threshold:"}),g.jsxs("select",{value:G,onChange:N=>K(Number(N.target.value)),className:"control-select",children:[g.jsx("option",{value:1,children:"$1.00"}),g.jsx("option",{value:5,children:"$5.00"}),g.jsx("option",{value:10,children:"$10.00"}),g.jsx("option",{value:25,children:"$25.00"})]})]})]}),g.jsx("style",{jsx:!0,children:`
        /* Gold Price Tracker Styles */
        .gold-price-tracker {
          background: linear-gradient(135deg, #1a2a3a 0%, #2c3e50 100%);
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          color: white;
          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }
        
        .gold-price-tracker::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520, #B8860B);
        }
        
        .tracker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .tracker-header h2 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .gold-icon {
          font-size: 1.8rem;
        }
        
        .last-updated {
          font-size: 0.85rem;
          color: #a0aec0;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
        }
        
        .spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(255, 215, 0, 0.3);
          border-top: 3px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-state {
          background: rgba(220, 53, 69, 0.15);
          border: 1px solid rgba(220, 53, 69, 0.2);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
        }
        
        .error-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        
        .retry-btn {
          background: #dc3545;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          margin-top: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
          background: #bb2d3b;
          transform: translateY(-2px);
        }
        
        .price-display {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          margin: 20px 0;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        .current-price {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
          transition: all 0.5s ease;
          background: linear-gradient(90deg, #FFD700, #DAA520, #FFD700);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShine 3s ease infinite;
        }
        
        @keyframes goldShine {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .price-updating {
          animation: pulseUpdate 0.5s ease;
        }
        
        @keyframes pulseUpdate {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .price-alert {
          animation: alertFlash 0.5s ease 4;
        }
        
        @keyframes alertFlash {
          0%, 100% { background-color: transparent; }
          50% { background-color: rgba(255, 215, 0, 0.2); }
        }
        
        .price-change {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 8px;
        }
        
        .price-change.positive {
          color: #48bb78;
        }
        
        .price-change.negative {
          color: #f56565;
        }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          height: 50px;
          gap: 4px;
          margin-top: 20px;
        }
        
        .chart-bar {
          width: 8px;
          border-radius: 3px 3px 0 0;
          transition: height 0.5s ease;
        }
        
        .chart-bar-up {
          background: linear-gradient(to top, #48bb78, #68d391);
        }
        
        .chart-bar-down {
          background: linear-gradient(to top, #f56565, #fc8181);
        }
        
        .price-history {
          margin: 24px 0;
        }
        
        .price-history h3 {
          font-size: 1.1rem;
          margin-bottom: 12px;
          color: #a0aec0;
        }
        
        .history-bars {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        
        .history-bar {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 10px;
          text-align: center;
          flex: 1;
          min-width: 0;
          transition: transform 0.3s ease;
        }
        
        .history-bar:hover {
          transform: translateY(-5px);
          background: rgba(255, 215, 0, 0.1);
        }
        
        .bar-time {
          font-size: 0.75rem;
          color: #a0aec0;
          margin-bottom: 4px;
        }
        
        .bar-price {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .tracker-controls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 24px;
        }
        
        .control-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .control-group label {
          font-size: 0.9rem;
          color: #a0aec0;
          font-weight: 500;
        }
        
        .control-select {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          padding: 8px 12px;
          color: white;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        
        .control-select:focus {
          outline: none;
          border-color: #FFD700;
          box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
        }
        
        .control-group:last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }
        
        /* Responsive Design */
        @media (max-width: 600px) {
          .gold-price-tracker {
            padding: 20px;
            border-radius: 12px;
          }
          
          .tracker-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .last-updated {
            font-size: 0.8rem;
          }
          
          .current-price {
            font-size: 2.5rem;
          }
          
          .tracker-controls {
            grid-template-columns: 1fr;
          }
          
          .history-bars {
            overflow-x: auto;
            padding-bottom: 10px;
          }
          
          .history-bar {
            min-width: 80px;
          }
        }
        
        @media (max-width: 400px) {
          .current-price {
            font-size: 2rem;
          }
          
          .price-change {
            font-size: 0.9rem;
          }
        }
        
        /* Dark mode support */
        @media (prefers-color-scheme: light) {
          .gold-price-tracker {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            color: #2d3748;
          }
          
          .last-updated {
            color: #718096;
          }
          
          .price-display {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.05);
          }
          
          .error-state {
            background: rgba(220, 53, 69, 0.05);
            border: 1px solid rgba(220, 53, 69, 0.1);
          }
          
          .history-bar {
            background: rgba(0, 0, 0, 0.03);
          }
          
          .control-select {
            background: rgba(0, 0, 0, 0.03);
            border: 1px solid rgba(0, 0, 0, 0.1);
            color: #2d3748;
          }
          
          .price-history h3 {
            color: #718096;
          }
          
          .bar-time {
            color: #718096;
          }
        }
      `})]})},xC=()=>{const r=yo(),[e,n]=L.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[s,o]=L.useState(!0),[c,f]=L.useState(!1),[p,m]=L.useState(""),[y,b]=L.useState(""),[S,A]=L.useState(null),[P,H]=L.useState(!1),B=ie=>{const{name:te,value:le}=ie.target;n(ue=>({...ue,[te]:le}))};L.useEffect(()=>{H(!0);const ie=p2(ns,async te=>{if(!te){r("/login");return}A(te);try{const le=Kn(bn,"users",te.uid),ue=await ts(le);if(ue.exists()){const be=ue.data(),V=be.wallets&&be.wallets.find(O=>O.type==="btc")?.address||"",x=be.wallets&&be.wallets.find(O=>O.type==="eth")?.address||"",R=be.wallets&&be.wallets.find(O=>O.type==="usdt")?.address||"";n(O=>({...O,...be,btcWallet:V,ethWallet:x,usdtWallet:R}))}}catch(le){console.error("Failed to load profile:",le),m("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>ie()},[r]);const G=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,K=async ie=>{if(ie.preventDefault(),!!S){if(!G()){m("Please fill in all required fields.");return}f(!0),m(""),b("");try{const te=Kn(bn,"users",S.uid),le=[];e.btcWallet&&le.push({type:"btc",address:e.btcWallet}),e.ethWallet&&le.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&le.push({type:"usdt",address:e.usdtWallet});const ue={...e,email:S.email,wallets:le,updatedAt:c_()};delete ue.btcWallet,delete ue.ethWallet,delete ue.usdtWallet,(await ts(te)).data()?.createdAt||(ue.createdAt=c_()),await kh(te,ue,{merge:!0}),b("Profile updated successfully!"),setTimeout(()=>r("/dashboard"),1200)}catch(te){console.error("Save failed:",te),m("Could not save profile. Please try again.")}finally{f(!1)}}};return s?g.jsxs("div",{className:"loader-container",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading Profile..."})]}):g.jsxs("div",{className:"profile-page",children:[g.jsxs("div",{className:`profile-container ${P?"mounted":""}`,children:[g.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),g.jsx("form",{onSubmit:K,className:"profile-form",children:g.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((ie,te)=>g.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${te*.1}s`},children:g.jsx("input",{name:ie,type:"text",placeholder:ie==="fullName"?"Full Name *":"Username *",value:e[ie],onChange:B,required:!0,className:"form-input"})},ie)),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:g.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:B,className:"form-input"})}),g.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[g.jsx("label",{className:"input-label",children:"Date of Birth *"}),g.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:B,className:"form-input",required:!0})]}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:g.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:B,required:!0,className:"form-input"})}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:g.jsxs("select",{name:"gender",value:e.gender,onChange:B,className:"form-select",children:[g.jsx("option",{value:"",children:"Select Gender"}),g.jsx("option",{value:"Male",children:"Male"}),g.jsx("option",{value:"Female",children:"Female"}),g.jsx("option",{value:"Other",children:"Other"})]})}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:g.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:B,className:"form-input"})}),g.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:g.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:B,rows:3,className:"form-textarea"})}),g.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[g.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((ie,te)=>g.jsx("div",{className:"form-group",children:g.jsx("input",{name:ie,type:"text",placeholder:ie==="btcWallet"?"BTC Wallet Address":ie==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[ie],onChange:B,className:"form-input"})},ie))]}),p&&g.jsx("div",{className:"error-message full-width animated-item",children:p}),y&&g.jsx("div",{className:"success-message full-width animated-item",children:y}),g.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[g.jsx("button",{type:"button",onClick:()=>r("/dashboard"),className:"btn-secondary",children:"Cancel"}),g.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!G(),children:c?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),g.jsx("style",{jsx:!0,children:`
        /* Profile Page Styles */
        .profile-page {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
          padding: 16px;
          padding-top: 60px;
        }

        .profile-container {
          background: white;
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }

        .profile-container.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        .profile-title {
          text-align: center;
          margin-bottom: 24px;
          font-weight: 700;
          font-size: 24px;
          color: #2c3e50;
          position: relative;
          padding-bottom: 12px;
        }

        .profile-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 4px;
          background: linear-gradient(90deg, #FFD700, #DAA520);
          border-radius: 2px;
        }

        .profile-form {
          width: 100%;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards;
        }

        .animated-item {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .full-width {
          width: 100%;
        }

        .input-label {
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .form-input, .form-select, .form-textarea {
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid #e1e5e9;
          background: #f8f9fa;
          font-size: 16px;
          transition: all 0.3s ease;
          font-family: inherit;
          width: 100%;
          box-sizing: border-box;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: #3498db;
          background: white;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
          transform: translateY(-2px);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .wallet-section {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e5e9;
        }

        .wallet-title {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 12px;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e1e5e9;
        }

        .btn-primary {
          padding: 12px 24px;
          background: linear-gradient(90deg, #FFD700 0%, #DAA520 100%);
          color: #2c3e50;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 120px;
          justify-content: center;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid #2c3e50;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .btn-secondary {
          padding: 12px 24px;
          background: white;
          color: #2c3e50;
          border: 1px solid #bdc3c7;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .error-message {
          padding: 12px 16px;
          background: #f8d7da;
          color: #721c24;
          border-radius: 8px;
          border: 1px solid #f5c6cb;
          text-align: center;
          margin: 8px 0;
          animation: shake 0.5s ease;
        }

        .success-message {
          padding: 12px 16px;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          border: 1px solid #c3e6cb;
          text-align: center;
          margin: 8px 0;
          animation: pulse 0.5s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        /* Responsive Styles */
        @media (max-width: 640px) {
          .profile-page {
            padding: 12px;
            padding-top: 40px;
            align-items: flex-start;
          }

          .profile-container {
            padding: 20px;
            border-radius: 16px;
          }

          .profile-title {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .form-grid {
            gap: 12px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 10px 14px;
            font-size: 16px; /* Prevents zoom on iOS */
          }

          .form-actions {
            flex-direction: column-reverse;
            gap: 10px;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            text-align: center;
            padding: 14px;
          }

          .wallet-section {
            margin-top: 12px;
            padding-top: 12px;
          }
        }

        @media (max-width: 400px) {
          .profile-container {
            padding: 16px;
          }

          .profile-title {
            font-size: 20px;
          }

          .form-input, .form-select, .form-textarea {
            padding: 12px; /* Larger touch targets */
          }
        }

        /* Prevent zoom on iOS input focus */
        @media screen and (max-width: 767px) {
          input, select, textarea {
            font-size: 16px !important;
          }
        }

        /* Height adjustments for very small screens */
        @media (max-height: 600px) {
          .profile-page {
            padding-top: 20px;
            padding-bottom: 20px;
          }
        }
      `})]})},RC=()=>g.jsxs("div",{style:th.container,children:[g.jsx("h1",{style:th.heading,children:"404 - Page Not Found"}),g.jsx("p",{style:th.text,children:"The page you are looking for doesn't exist."}),g.jsx(is,{to:"/",style:th.button,children:"Go Home"})]}),th={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}};function CC(){return g.jsxs(g.Fragment,{children:[g.jsx(fm,{}),g.jsx(vS,{}),g.jsx(FS,{}),g.jsx(YS,{}),g.jsx(XS,{})]})}function IC(){return g.jsx(rS,{basename:"/GoldcCorps",children:g.jsxs(Pw,{children:[g.jsx(Lr,{path:"/",element:g.jsx(CC,{})}),g.jsx(Lr,{path:"/login",element:g.jsx(wC,{})}),g.jsx(Lr,{path:"/signup",element:g.jsx(SC,{})}),g.jsx(Lr,{path:"/dashboard",element:g.jsx(TC,{})}),g.jsx(Lr,{path:"/profile",element:g.jsx(xC,{})}),g.jsx(Lr,{path:"/stock",element:g.jsx(AC,{})}),g.jsx(Lr,{path:"*",element:g.jsx(RC,{})})," "]})})}GT.createRoot(document.getElementById("root")).render(g.jsx(L.StrictMode,{children:g.jsx(IC,{})}));
