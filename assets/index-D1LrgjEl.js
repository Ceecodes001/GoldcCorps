(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function GT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var pp={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function YT(){if(E1)return Pl;E1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var p in o)p!=="key"&&(c[p]=o[p])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return Pl.Fragment=e,Pl.jsx=n,Pl.jsxs=n,Pl}var b1;function QT(){return b1||(b1=1,pp.exports=YT()),pp.exports}var g=QT(),mp={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T1;function KT(){if(T1)return Ae;T1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function H(M,te,le){this.props=M,this.context=te,this.refs=z,this.updater=le||D}H.prototype.isReactComponent={},H.prototype.setState=function(M,te){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,te,"setState")},H.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function $(){}$.prototype=H.prototype;function ie(M,te,le){this.props=M,this.context=te,this.refs=z,this.updater=le||D}var ne=ie.prototype=new $;ne.constructor=ie,j(ne,H.prototype),ne.isPureReactComponent=!0;var ce=Array.isArray,oe={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function V(M,te,le,re,ye,Ce){return le=Ce.ref,{$$typeof:r,type:M,key:te,ref:le!==void 0?le:null,props:Ce}}function A(M,te){return V(M.type,te,void 0,void 0,void 0,M.props)}function R(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function O(M){var te={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(le){return te[le]})}var N=/\/+/g;function k(M,te){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):te.toString(36)}function I(){}function rt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(I,I):(M.status="pending",M.then(function(te){M.status==="pending"&&(M.status="fulfilled",M.value=te)},function(te){M.status==="pending"&&(M.status="rejected",M.reason=te)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Be(M,te,le,re,ye){var Ce=typeof M;(Ce==="undefined"||Ce==="boolean")&&(M=null);var we=!1;if(M===null)we=!0;else switch(Ce){case"bigint":case"string":case"number":we=!0;break;case"object":switch(M.$$typeof){case r:case e:we=!0;break;case b:return we=M._init,Be(we(M._payload),te,le,re,ye)}}if(we)return ye=ye(M),we=re===""?"."+k(M,0):re,ce(ye)?(le="",we!=null&&(le=we.replace(N,"$&/")+"/"),Be(ye,te,le,"",function(Zn){return Zn})):ye!=null&&(R(ye)&&(ye=A(ye,le+(ye.key==null||M&&M.key===ye.key?"":(""+ye.key).replace(N,"$&/")+"/")+we)),te.push(ye)),1;we=0;var Ot=re===""?".":re+":";if(ce(M))for(var et=0;et<M.length;et++)re=M[et],Ce=Ot+k(re,et),we+=Be(re,te,le,Ce,ye);else if(et=S(M),typeof et=="function")for(M=et.call(M),et=0;!(re=M.next()).done;)re=re.value,Ce=Ot+k(re,et++),we+=Be(re,te,le,Ce,ye);else if(Ce==="object"){if(typeof M.then=="function")return Be(rt(M),te,le,re,ye);throw te=String(M),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return we}function K(M,te,le){if(M==null)return M;var re=[],ye=0;return Be(M,re,"","",function(Ce){return te.call(le,Ce,ye++)}),re}function se(M){if(M._status===-1){var te=M._result;te=te(),te.then(function(le){(M._status===0||M._status===-1)&&(M._status=1,M._result=le)},function(le){(M._status===0||M._status===-1)&&(M._status=2,M._result=le)}),M._status===-1&&(M._status=0,M._result=te)}if(M._status===1)return M._result.default;throw M._result}var de=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function Oe(){}return Ae.Children={map:K,forEach:function(M,te,le){K(M,function(){te.apply(this,arguments)},le)},count:function(M){var te=0;return K(M,function(){te++}),te},toArray:function(M){return K(M,function(te){return te})||[]},only:function(M){if(!R(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ae.Component=H,Ae.Fragment=n,Ae.Profiler=o,Ae.PureComponent=ie,Ae.StrictMode=s,Ae.Suspense=m,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(M){return oe.H.useMemoCache(M)}},Ae.cache=function(M){return function(){return M.apply(null,arguments)}},Ae.cloneElement=function(M,te,le){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var re=j({},M.props),ye=M.key,Ce=void 0;if(te!=null)for(we in te.ref!==void 0&&(Ce=void 0),te.key!==void 0&&(ye=""+te.key),te)!me.call(te,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&te.ref===void 0||(re[we]=te[we]);var we=arguments.length-2;if(we===1)re.children=le;else if(1<we){for(var Ot=Array(we),et=0;et<we;et++)Ot[et]=arguments[et+2];re.children=Ot}return V(M.type,ye,void 0,void 0,Ce,re)},Ae.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},Ae.createElement=function(M,te,le){var re,ye={},Ce=null;if(te!=null)for(re in te.key!==void 0&&(Ce=""+te.key),te)me.call(te,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ye[re]=te[re]);var we=arguments.length-2;if(we===1)ye.children=le;else if(1<we){for(var Ot=Array(we),et=0;et<we;et++)Ot[et]=arguments[et+2];ye.children=Ot}if(M&&M.defaultProps)for(re in we=M.defaultProps,we)ye[re]===void 0&&(ye[re]=we[re]);return V(M,Ce,void 0,void 0,null,ye)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(M){return{$$typeof:p,render:M}},Ae.isValidElement=R,Ae.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:se}},Ae.memo=function(M,te){return{$$typeof:y,type:M,compare:te===void 0?null:te}},Ae.startTransition=function(M){var te=oe.T,le={};oe.T=le;try{var re=M(),ye=oe.S;ye!==null&&ye(le,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(Oe,de)}catch(Ce){de(Ce)}finally{oe.T=te}},Ae.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},Ae.use=function(M){return oe.H.use(M)},Ae.useActionState=function(M,te,le){return oe.H.useActionState(M,te,le)},Ae.useCallback=function(M,te){return oe.H.useCallback(M,te)},Ae.useContext=function(M){return oe.H.useContext(M)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(M,te){return oe.H.useDeferredValue(M,te)},Ae.useEffect=function(M,te,le){var re=oe.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(M,te)},Ae.useId=function(){return oe.H.useId()},Ae.useImperativeHandle=function(M,te,le){return oe.H.useImperativeHandle(M,te,le)},Ae.useInsertionEffect=function(M,te){return oe.H.useInsertionEffect(M,te)},Ae.useLayoutEffect=function(M,te){return oe.H.useLayoutEffect(M,te)},Ae.useMemo=function(M,te){return oe.H.useMemo(M,te)},Ae.useOptimistic=function(M,te){return oe.H.useOptimistic(M,te)},Ae.useReducer=function(M,te,le){return oe.H.useReducer(M,te,le)},Ae.useRef=function(M){return oe.H.useRef(M)},Ae.useState=function(M){return oe.H.useState(M)},Ae.useSyncExternalStore=function(M,te,le){return oe.H.useSyncExternalStore(M,te,le)},Ae.useTransition=function(){return oe.H.useTransition()},Ae.version="19.1.1",Ae}var w1;function cm(){return w1||(w1=1,mp.exports=KT()),mp.exports}var L=cm();const Ys=GT(L);var gp={exports:{}},Vl={},yp={exports:{}},vp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1;function $T(){return S1||(S1=1,(function(r){function e(K,se){var de=K.length;K.push(se);e:for(;0<de;){var Oe=de-1>>>1,M=K[Oe];if(0<o(M,se))K[Oe]=se,K[de]=M,de=Oe;else break e}}function n(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var se=K[0],de=K.pop();if(de!==se){K[0]=de;e:for(var Oe=0,M=K.length,te=M>>>1;Oe<te;){var le=2*(Oe+1)-1,re=K[le],ye=le+1,Ce=K[ye];if(0>o(re,de))ye<M&&0>o(Ce,re)?(K[Oe]=Ce,K[ye]=de,Oe=ye):(K[Oe]=re,K[le]=de,Oe=le);else if(ye<M&&0>o(Ce,de))K[Oe]=Ce,K[ye]=de,Oe=ye;else break e}}return se}function o(K,se){var de=K.sortIndex-se.sortIndex;return de!==0?de:K.id-se.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],y=[],b=1,x=null,S=3,D=!1,j=!1,z=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function ce(K){for(var se=n(y);se!==null;){if(se.callback===null)s(y);else if(se.startTime<=K)s(y),se.sortIndex=se.expirationTime,e(m,se);else break;se=n(y)}}function oe(K){if(z=!1,ce(K),!j)if(n(m)!==null)j=!0,me||(me=!0,k());else{var se=n(y);se!==null&&Be(oe,se.startTime-K)}}var me=!1,V=-1,A=5,R=-1;function O(){return H?!0:!(r.unstable_now()-R<A)}function N(){if(H=!1,me){var K=r.unstable_now();R=K;var se=!0;try{e:{j=!1,z&&(z=!1,ie(V),V=-1),D=!0;var de=S;try{t:{for(ce(K),x=n(m);x!==null&&!(x.expirationTime>K&&O());){var Oe=x.callback;if(typeof Oe=="function"){x.callback=null,S=x.priorityLevel;var M=Oe(x.expirationTime<=K);if(K=r.unstable_now(),typeof M=="function"){x.callback=M,ce(K),se=!0;break t}x===n(m)&&s(m),ce(K)}else s(m);x=n(m)}if(x!==null)se=!0;else{var te=n(y);te!==null&&Be(oe,te.startTime-K),se=!1}}break e}finally{x=null,S=de,D=!1}se=void 0}}finally{se?k():me=!1}}}var k;if(typeof ne=="function")k=function(){ne(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,rt=I.port2;I.port1.onmessage=N,k=function(){rt.postMessage(null)}}else k=function(){$(N,0)};function Be(K,se){V=$(function(){K(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(K){K.callback=null},r.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(K){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var de=S;S=se;try{return K()}finally{S=de}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var de=S;S=K;try{return se()}finally{S=de}},r.unstable_scheduleCallback=function(K,se,de){var Oe=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Oe+de:Oe):de=Oe,K){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=de+M,K={id:b++,callback:se,priorityLevel:K,startTime:de,expirationTime:M,sortIndex:-1},de>Oe?(K.sortIndex=de,e(y,K),n(m)===null&&K===n(y)&&(z?(ie(V),V=-1):z=!0,Be(oe,de-Oe))):(K.sortIndex=M,e(m,K),j||D||(j=!0,me||(me=!0,k()))),K},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(K){var se=S;return function(){var de=S;S=se;try{return K.apply(this,arguments)}finally{S=de}}}})(vp)),vp}var x1;function XT(){return x1||(x1=1,yp.exports=$T()),yp.exports}var _p={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1;function WT(){if(A1)return $t;A1=1;var r=cm();function e(m){var y="https://react.dev/errors/"+m;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,y,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:y,implementation:b}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,y){if(m==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$t.createPortal=function(m,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(m,y,null,b)},$t.flushSync=function(m){var y=f.T,b=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=y,s.p=b,s.d.f()}},$t.preconnect=function(m,y){typeof m=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(m,y))},$t.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},$t.preinit=function(m,y){if(typeof m=="string"&&y&&typeof y.as=="string"){var b=y.as,x=p(b,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?s.d.S(m,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:D}):b==="script"&&s.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$t.preinitModule=function(m,y){if(typeof m=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=p(y.as,y.crossOrigin);s.d.M(m,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(m)},$t.preload=function(m,y){if(typeof m=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,x=p(b,y.crossOrigin);s.d.L(m,b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$t.preloadModule=function(m,y){if(typeof m=="string")if(y){var b=p(y.as,y.crossOrigin);s.d.m(m,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(m)},$t.requestFormReset=function(m){s.d.r(m)},$t.unstable_batchedUpdates=function(m,y){return m(y)},$t.useFormState=function(m,y,b){return f.H.useFormState(m,y,b)},$t.useFormStatus=function(){return f.H.useHostTransitionStatus()},$t.version="19.1.1",$t}var R1;function ZT(){if(R1)return _p.exports;R1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),_p.exports=WT(),_p.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1;function JT(){if(C1)return Vl;C1=1;var r=XT(),e=cm(),n=ZT();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),t;if(d===l)return p(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var E=!1,T=h.child;T;){if(T===a){E=!0,a=h,l=d;break}if(T===l){E=!0,l=h,a=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===a){E=!0,a=d,l=h;break}if(T===l){E=!0,l=d,a=h;break}T=T.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case H:return"Profiler";case z:return"StrictMode";case oe:return"Suspense";case me:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case ne:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return i=t.displayName||null,i!==null?i:rt(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return rt(t(i))}catch{}}return null}var Be=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Oe=[],M=-1;function te(t){return{current:t}}function le(t){0>M||(t.current=Oe[M],Oe[M]=null,M--)}function re(t,i){M++,Oe[M]=t.current,t.current=i}var ye=te(null),Ce=te(null),we=te(null),Ot=te(null);function et(t,i){switch(re(we,i),re(Ce,t),re(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?K0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=K0(i),t=$0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}le(ye),re(ye,t)}function Zn(){le(ye),le(Ce),le(we)}function ur(t){t.memoizedState!==null&&re(Ot,t);var i=ye.current,a=$0(i,t.type);i!==a&&(re(Ce,t),re(ye,a))}function xi(t){Ce.current===t&&(le(ye),le(Ce)),Ot.current===t&&(le(Ot),Nl._currentValue=de)}var ss=Object.prototype.hasOwnProperty,as=r.unstable_scheduleCallback,os=r.unstable_cancelCallback,Ro=r.unstable_shouldYield,Sc=r.unstable_requestPaint,Tn=r.unstable_now,pf=r.unstable_getCurrentPriorityLevel,Co=r.unstable_ImmediatePriority,oa=r.unstable_UserBlockingPriority,ls=r.unstable_NormalPriority,mf=r.unstable_LowPriority,la=r.unstable_IdlePriority,Io=r.log,xc=r.unstable_setDisableYieldValue,ut=null,Ge=null;function hn(t){if(typeof Io=="function"&&xc(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ut,t)}catch{}}var Qt=Math.clz32?Math.clz32:cs,Ac=Math.log,gf=Math.LN2;function cs(t){return t>>>=0,t===0?32:31-(Ac(t)/gf|0)|0}var us=256,hs=4194304;function Ln(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ca(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Ln(l):(E&=T,E!==0?h=Ln(E):a||(a=T&~t,a!==0&&(h=Ln(a))))):(T=l&~d,T!==0?h=Ln(T):E!==0?h=Ln(E):a||(a=l&~t,a!==0&&(h=Ln(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function fs(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function No(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Do(){var t=us;return us<<=1,(us&4194048)===0&&(us=256),t}function Oo(){var t=hs;return hs<<=1,(hs&62914560)===0&&(hs=4194304),t}function Ai(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Ri(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mo(t,i,a,l,h,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,C=t.expirationTimes,F=t.hiddenUpdates;for(a=E&~a;0<a;){var X=31-Qt(a),J=1<<X;T[X]=0,C[X]=-1;var G=F[X];if(G!==null)for(F[X]=null,X=0;X<G.length;X++){var Y=G[X];Y!==null&&(Y.lane&=-536870913)}a&=~J}l!==0&&Jn(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~i))}function Jn(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Qt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function ko(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Qt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function hr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ua(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fr(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:p1(t.type))}function Rc(t,i){var a=se.p;try{return se.p=t,i()}finally{se.p=a}}var st=Math.random().toString(36).slice(2),xt="__reactFiber$"+st,vt="__reactProps$"+st,wn="__reactContainer$"+st,Po="__reactEvents$"+st,yf="__reactListeners$"+st,dr="__reactHandles$"+st,Cc="__reactResources$"+st,ds="__reactMarker$"+st;function pr(t){delete t[xt],delete t[vt],delete t[Po],delete t[yf],delete t[dr]}function Ci(t){var i=t[xt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wn]||a[xt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=J0(t);t!==null;){if(a=t[xt])return a;t=J0(t)}return i}t=a,a=t.parentNode}return null}function ei(t){if(t=t[xt]||t[wn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ti(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function en(t){var i=t[Cc];return i||(i=t[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function pt(t){t[ds]=!0}var Vo=new Set,ha={};function Un(t,i){Ii(t,i),Ii(t+"Capture",i)}function Ii(t,i){for(ha[t]=i,t=0;t<i.length;t++)Vo.add(i[t])}var Ic=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},ps={};function Dc(t){return ss.call(ps,t)?!0:ss.call(Nc,t)?!1:Ic.test(t)?ps[t]=!0:(Nc[t]=!0,!1)}function mr(t,i,a){if(Dc(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function ni(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ut(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var ms,Oc;function Ni(t){if(ms===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ms=i&&i[1]||"",Oc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ms+t+Oc}var fa=!1;function da(t,i){if(!t||fa)return"";fa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var G=Y}Reflect.construct(t,[],J)}else{try{J.call()}catch(Y){G=Y}t.call(J.prototype)}}else{try{throw Error()}catch(Y){G=Y}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var C=E.split(`
`),F=T.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<F.length&&!F[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===F.length)for(l=C.length-1,h=F.length-1;1<=l&&0<=h&&C[l]!==F[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==F[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==F[h]){var X=`
`+C[l].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=l&&0<=h);break}}}finally{fa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ni(a):""}function jo(t){switch(t.tag){case 26:case 27:case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return da(t.type,!1);case 11:return da(t.type.render,!1);case 1:return da(t.type,!0);case 31:return Ni("Activity");default:return""}}function pa(t){try{var i="";do i+=jo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function tn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vf(t){var i=Lo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ma(t){t._valueTracker||(t._valueTracker=vf(t))}function Uo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Lo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function gs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _f=/[\n"\\]/g;function _t(t){return t.replace(_f,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function fn(t,i,a,l,h,d,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+tn(i)):t.value!==""+tn(i)&&(t.value=""+tn(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?gr(t,E,tn(i)):a!=null?gr(t,E,tn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+tn(T):t.removeAttribute("name")}function ys(t,i,a,l,h,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+tn(a):"",i=i!=null?""+tn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function gr(t,i,a){i==="number"&&gs(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Di(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+tn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Ke(t,i,a){if(i!=null&&(i=""+tn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+tn(a):""}function vs(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Be(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=tn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Sn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var _s=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mc(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||_s.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function zo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Mc(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Mc(t,d,i[d])}function Bo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ef=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ga(t){return bf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Oi=null;function xn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mi=null,ki=null;function qo(t){var i=ei(t);if(i&&(t=i.stateNode)){var a=t[vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(fn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[vt]||null;if(!h)throw Error(s(90));fn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Uo(l)}break e;case"textarea":Ke(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Di(t,!!a.multiple,i,!1)}}}var ii=!1;function kc(t,i,a){if(ii)return t(i,a);ii=!0;try{var l=t(i);return l}finally{if(ii=!1,(Mi!==null||ki!==null)&&(Ru(),Mi&&(i=Mi,t=ki,ki=Mi=null,qo(i),t)))for(i=0;i<t.length;i++)qo(t[i])}}function Es(t,i){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(zn)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){An=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{An=!1}var ri=null,yr=null,Pi=null;function Fo(){if(Pi)return Pi;var t,i=yr,a=i.length,l,h="value"in ri?ri.value:ri.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===h[d-l];l++);return Pi=h.slice(t,1<l?1-l:void 0)}function si(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ai(){return!0}function Ho(){return!1}function Mt(t){function i(a,l,h,d,E){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ai:Ho,this.isPropagationStopped=Ho,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Mt(Fe),Ts=b({},Fe,{view:0,detail:0}),Pc=Mt(Ts),va,_a,oi,ws=b({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:As,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(va=t.screenX-oi.screenX,_a=t.screenY-oi.screenY):_a=va=0,oi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:_a}}),Rn=Mt(ws),Vc=b({},ws,{dataTransfer:0}),Tf=Mt(Vc),Ss=b({},Ts,{relatedTarget:0}),Ea=Mt(Ss),Go=b({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),ba=Mt(Go),jc=b({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ta=Mt(jc),wf=b({},Fe,{data:0}),Yo=Mt(wf),xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Uc[t])?!!i[t]:!1}function As(){return Qo}var zc=b({},Ts,{key:function(t){if(t.key){var i=xs[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=si(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Lc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:As,charCode:function(t){return t.type==="keypress"?si(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?si(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wa=Mt(zc),Bc=b({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Mt(Bc),Vi=b({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:As}),qc=Mt(Vi),Fc=b({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hc=Mt(Fc),Gc=b({},ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sa=Mt(Gc),nn=b({},Fe,{newState:0,oldState:0}),Yc=Mt(nn),Qc=[9,13,27,32],li=zn&&"CompositionEvent"in window,u=null;zn&&"documentMode"in document&&(u=document.documentMode);var v=zn&&"TextEvent"in window&&!u,_=zn&&(!li||u&&8<u&&11>=u),w=" ",B=!1;function Q(t,i){switch(t){case"keyup":return Qc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ve=!1;function At(t,i){switch(t){case"compositionend":return ae(i);case"keypress":return i.which!==32?null:(B=!0,w);case"textInput":return t=i.data,t===w&&B?null:t;default:return null}}function je(t,i){if(Ve)return t==="compositionend"||!li&&Q(t,i)?(t=Fo(),Pi=yr=ri=null,Ve=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var kt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kt[t.type]:i==="textarea"}function ji(t,i,a,l){Mi?ki?ki.push(l):ki=[l]:Mi=l,i=Mu(i,"onChange"),0<i.length&&(a=new ya("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var zt=null,ci=null;function $o(t){F0(t,0)}function Kc(t){var i=ti(t);if(Uo(i))return t}function ug(t,i){if(t==="change")return i}var hg=!1;if(zn){var Sf;if(zn){var xf="oninput"in document;if(!xf){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),xf=typeof fg.oninput=="function"}Sf=xf}else Sf=!1;hg=Sf&&(!document.documentMode||9<document.documentMode)}function dg(){zt&&(zt.detachEvent("onpropertychange",pg),ci=zt=null)}function pg(t){if(t.propertyName==="value"&&Kc(ci)){var i=[];ji(i,ci,t,xn(t)),kc($o,i)}}function bb(t,i,a){t==="focusin"?(dg(),zt=i,ci=a,zt.attachEvent("onpropertychange",pg)):t==="focusout"&&dg()}function Tb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(ci)}function wb(t,i){if(t==="click")return Kc(i)}function Sb(t,i){if(t==="input"||t==="change")return Kc(i)}function xb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var dn=typeof Object.is=="function"?Object.is:xb;function Xo(t,i){if(dn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ss.call(i,h)||!dn(t[h],i[h]))return!1}return!0}function mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gg(t,i){var a=mg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mg(a)}}function yg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?yg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function vg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=gs(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=gs(t.document)}return i}function Af(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ab=zn&&"documentMode"in document&&11>=document.documentMode,xa=null,Rf=null,Wo=null,Cf=!1;function _g(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cf||xa==null||xa!==gs(l)||(l=xa,"selectionStart"in l&&Af(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Wo&&Xo(Wo,l)||(Wo=l,l=Mu(Rf,"onSelect"),0<l.length&&(i=new ya("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=xa)))}function Rs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Aa={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionrun:Rs("Transition","TransitionRun"),transitionstart:Rs("Transition","TransitionStart"),transitioncancel:Rs("Transition","TransitionCancel"),transitionend:Rs("Transition","TransitionEnd")},If={},Eg={};zn&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Cs(t){if(If[t])return If[t];if(!Aa[t])return t;var i=Aa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eg)return If[t]=i[a];return t}var bg=Cs("animationend"),Tg=Cs("animationiteration"),wg=Cs("animationstart"),Rb=Cs("transitionrun"),Cb=Cs("transitionstart"),Ib=Cs("transitioncancel"),Sg=Cs("transitionend"),xg=new Map,Nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nf.push("scrollEnd");function Bn(t,i){xg.set(t,i),Un(i,[t])}var Ag=new WeakMap;function Cn(t,i){if(typeof t=="object"&&t!==null){var a=Ag.get(t);return a!==void 0?a:(i={value:t,source:i,stack:pa(i)},Ag.set(t,i),i)}return{value:t,source:i,stack:pa(i)}}var In=[],Ra=0,Df=0;function $c(){for(var t=Ra,i=Df=Ra=0;i<t;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&Rg(a,h,d)}}function Xc(t,i,a,l){In[Ra++]=t,In[Ra++]=i,In[Ra++]=a,In[Ra++]=l,Df|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Of(t,i,a,l){return Xc(t,i,a,l),Wc(t)}function Ca(t,i){return Xc(t,null,null,i),Wc(t)}function Rg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Qt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Wc(t){if(50<Tl)throw Tl=0,Ld=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ia={};function Nb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,i,a,l){return new Nb(t,i,a,l)}function Mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,i){var a=t.alternate;return a===null?(a=pn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Cg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Zc(t,i,a,l,h,d){var E=0;if(l=t,typeof t=="function")Mf(t)&&(E=1);else if(typeof t=="string")E=OT(t,a,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=pn(31,a,i,h),t.elementType=R,t.lanes=d,t;case j:return Is(a.children,h,d,i);case z:E=8,h|=24;break;case H:return t=pn(12,a,i,h|2),t.elementType=H,t.lanes=d,t;case oe:return t=pn(13,a,i,h),t.elementType=oe,t.lanes=d,t;case me:return t=pn(19,a,i,h),t.elementType=me,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $:case ne:E=10;break e;case ie:E=9;break e;case ce:E=11;break e;case V:E=14;break e;case A:E=16,l=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=pn(E,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Is(t,i,a,l){return t=pn(7,t,l,i),t.lanes=a,t}function kf(t,i,a){return t=pn(6,t,null,i),t.lanes=a,t}function Pf(t,i,a){return i=pn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Na=[],Da=0,Jc=null,eu=0,Nn=[],Dn=0,Ns=null,Ui=1,zi="";function Ds(t,i){Na[Da++]=eu,Na[Da++]=Jc,Jc=t,eu=i}function Ig(t,i,a){Nn[Dn++]=Ui,Nn[Dn++]=zi,Nn[Dn++]=Ns,Ns=t;var l=Ui;t=zi;var h=32-Qt(l)-1;l&=~(1<<h),a+=1;var d=32-Qt(i)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Ui=1<<32-Qt(i)+h|a<<h|l,zi=d+t}else Ui=1<<d|a<<h|l,zi=t}function Vf(t){t.return!==null&&(Ds(t,1),Ig(t,1,0))}function jf(t){for(;t===Jc;)Jc=Na[--Da],Na[Da]=null,eu=Na[--Da],Na[Da]=null;for(;t===Ns;)Ns=Nn[--Dn],Nn[Dn]=null,zi=Nn[--Dn],Nn[Dn]=null,Ui=Nn[--Dn],Nn[Dn]=null}var rn=null,ht=null,qe=!1,Os=null,ui=!1,Lf=Error(s(519));function Ms(t){var i=Error(s(418,""));throw el(Cn(i,t)),Lf}function Ng(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[xt]=t,i[vt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<Sl.length;a++)De(Sl[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),ys(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ma(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),vs(i,l.value,l.defaultValue,l.children),ma(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Q0(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=ku),i=!0):i=!1,i||Ms(t)}function Dg(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:rn=rn.return}}function Zo(t){if(t!==rn)return!1;if(!qe)return Dg(t),qe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ep(t.type,t.memoizedProps)),a=!a),a&&ht&&Ms(t),Dg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ht=Fn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ht=null}}else i===27?(i=ht,Mr(t.type)?(t=rp,rp=null,ht=t):ht=i):ht=rn?Fn(t.stateNode.nextSibling):null;return!0}function Jo(){ht=rn=null,qe=!1}function Og(){var t=Os;return t!==null&&(on===null?on=t:on.push.apply(on,t),Os=null),t}function el(t){Os===null?Os=[t]:Os.push(t)}var Uf=te(null),ks=null,Bi=null;function vr(t,i,a){re(Uf,i._currentValue),i._currentValue=a}function qi(t){t._currentValue=Uf.current,le(Uf)}function zf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Bf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),zf(d.return,a,t),l||(E=null);break e}d=T.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),zf(E,a,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function tl(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=h.type;dn(h.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(h===Ot.current){if(E=h.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Nl):t=[Nl])}h=h.return}t!==null&&Bf(i,t,a,l),i.flags|=262144}function tu(t){for(t=t.firstContext;t!==null;){if(!dn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ps(t){ks=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kt(t){return Mg(ks,t)}function nu(t,i){return ks===null&&Ps(t),Mg(t,i)}function Mg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(s(308));Bi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Bi=Bi.next=i;return a}var Db=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},Ob=r.unstable_scheduleCallback,Mb=r.unstable_NormalPriority,Ct={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qf(){return{controller:new Db,data:new Map,refCount:0}}function nl(t){t.refCount--,t.refCount===0&&Ob(Mb,function(){t.controller.abort()})}var il=null,Ff=0,Oa=0,Ma=null;function kb(t,i){if(il===null){var a=il=[];Ff=0,Oa=Gd(),Ma={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ff++,i.then(kg,kg),i}function kg(){if(--Ff===0&&il!==null){Ma!==null&&(Ma.status="fulfilled");var t=il;il=null,Oa=0,Ma=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Pb(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Pg=K.S;K.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&kb(t,i),Pg!==null&&Pg(t,i)};var Vs=te(null);function Hf(){var t=Vs.current;return t!==null?t:tt.pooledCache}function iu(t,i){i===null?re(Vs,Vs.current):re(Vs,i.pool)}function Vg(){var t=Hf();return t===null?null:{parent:Ct._currentValue,pool:t}}var rl=Error(s(460)),jg=Error(s(474)),ru=Error(s(542)),Gf={then:function(){}};function Lg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function su(){}function Ug(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(su,su),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Bg(t),t;default:if(typeof i.status=="string")i.then(su,su);else{if(t=tt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Bg(t),t}throw sl=i,rl}}var sl=null;function zg(){if(sl===null)throw Error(s(459));var t=sl;return sl=null,t}function Bg(t){if(t===rl||t===ru)throw Error(s(483))}var _r=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Qf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function br(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Wc(t),Rg(t,null,a),i}return Xc(t,l,i,a),Wc(t)}function al(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,ko(t,a)}}function Kf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var $f=!1;function ol(){if($f){var t=Ma;if(t!==null)throw t}}function ll(t,i,a,l){$f=!1;var h=t.updateQueue;_r=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,F=C.next;C.next=null,E===null?d=F:E.next=F,E=C;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==E&&(T===null?X.firstBaseUpdate=F:T.next=F,X.lastBaseUpdate=C))}if(d!==null){var J=h.baseState;E=0,X=F=C=null,T=d;do{var G=T.lane&-536870913,Y=G!==T.lane;if(Y?(Le&G)===G:(l&G)===G){G!==0&&G===Oa&&($f=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=t,ve=T;G=i;var We=a;switch(ve.tag){case 1:if(Te=ve.payload,typeof Te=="function"){J=Te.call(We,J,G);break e}J=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=ve.payload,G=typeof Te=="function"?Te.call(We,J,G):Te,G==null)break e;J=b({},J,G);break e;case 2:_r=!0}}G=T.callback,G!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(F=X=Y,C=J):X=X.next=Y,E|=G;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;Y=T,T=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);X===null&&(C=J),h.baseState=C,h.firstBaseUpdate=F,h.lastBaseUpdate=X,d===null&&(h.shared.lanes=0),Ir|=E,t.lanes=E,t.memoizedState=J}}function qg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Fg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qg(a[t],i)}var ka=te(null),au=te(0);function Hg(t,i){t=$i,re(au,t),re(ka,i),$i=t|i.baseLanes}function Xf(){re(au,$i),re(ka,ka.current)}function Wf(){$i=au.current,le(ka),le(au)}var Tr=0,Re=null,$e=null,Et=null,ou=!1,Pa=!1,js=!1,lu=0,cl=0,Va=null,Vb=0;function mt(){throw Error(s(321))}function Zf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!dn(t[a],i[a]))return!1;return!0}function Jf(t,i,a,l,h,d){return Tr=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,K.H=t===null||t.memoizedState===null?Ry:Cy,js=!1,d=a(l,h),js=!1,Pa&&(d=Yg(i,a,l,h)),Gg(t),d}function Gg(t){K.H=pu;var i=$e!==null&&$e.next!==null;if(Tr=0,Et=$e=Re=null,ou=!1,cl=0,Va=null,i)throw Error(s(300));t===null||Pt||(t=t.dependencies,t!==null&&tu(t)&&(Pt=!0))}function Yg(t,i,a,l){Re=t;var h=0;do{if(Pa&&(Va=null),cl=0,Pa=!1,25<=h)throw Error(s(301));if(h+=1,Et=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}K.H=Fb,d=i(a,l)}while(Pa);return d}function jb(){var t=K.H,i=t.useState()[0];return i=typeof i.then=="function"?ul(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Re.flags|=1024),i}function ed(){var t=lu!==0;return lu=0,t}function td(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function nd(t){if(ou){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}ou=!1}Tr=0,Et=$e=Re=null,Pa=!1,cl=lu=0,Va=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Re.memoizedState=Et=t:Et=Et.next=t,Et}function bt(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=Et===null?Re.memoizedState:Et.next;if(i!==null)Et=i,$e=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Et===null?Re.memoizedState=Et=t:Et=Et.next=t}return Et}function id(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(t){var i=cl;return cl+=1,Va===null&&(Va=[]),t=Ug(Va,t,i),i=Re,(Et===null?i.memoizedState:Et.next)===null&&(i=i.alternate,K.H=i===null||i.memoizedState===null?Ry:Cy),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ul(t);if(t.$$typeof===ne)return Kt(t)}throw Error(s(438,String(t)))}function rd(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=id(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function Fi(t,i){return typeof i=="function"?i(t):i}function uu(t){var i=bt();return sd(i,$e,t)}function sd(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=E=null,C=null,F=i,X=!1;do{var J=F.lane&-536870913;if(J!==F.lane?(Le&J)===J:(Tr&J)===J){var G=F.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),J===Oa&&(X=!0);else if((Tr&G)===G){F=F.next,G===Oa&&(X=!0);continue}else J={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(T=C=J,E=d):C=C.next=J,Re.lanes|=G,Ir|=G;J=F.action,js&&a(d,J),d=F.hasEagerState?F.eagerState:a(d,J)}else G={lane:J,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(T=C=G,E=d):C=C.next=G,Re.lanes|=J,Ir|=J;F=F.next}while(F!==null&&F!==i);if(C===null?E=d:C.next=T,!dn(d,t.memoizedState)&&(Pt=!0,X&&(a=Ma,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ad(t){var i=bt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do d=t(d,E.action),E=E.next;while(E!==h);dn(d,i.memoizedState)||(Pt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Qg(t,i,a){var l=Re,h=bt(),d=qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!dn(($e||h).memoizedState,a);E&&(h.memoizedState=a,Pt=!0),h=h.queue;var T=Xg.bind(null,l,h,t);if(hl(2048,8,T,[t]),h.getSnapshot!==i||E||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,ja(9,hu(),$g.bind(null,l,h,a,i),null),tt===null)throw Error(s(349));d||(Tr&124)!==0||Kg(l,i,a)}return a}function Kg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=id(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function $g(t,i,a,l){i.value=a,i.getSnapshot=l,Wg(i)&&Zg(t)}function Xg(t,i,a){return a(function(){Wg(i)&&Zg(t)})}function Wg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!dn(t,a)}catch{return!0}}function Zg(t){var i=Ca(t,2);i!==null&&_n(i,t,2)}function od(t){var i=sn();if(typeof t=="function"){var a=t;if(t=a(),js){hn(!0);try{a()}finally{hn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:t},i}function Jg(t,i,a,l){return t.baseState=a,sd(t,$e,typeof l=="function"?l:Fi)}function Lb(t,i,a,l,h){if(du(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};K.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,ey(i,d)):(d.next=a.next,i.pending=a.next=d)}}function ey(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=K.T,E={};K.T=E;try{var T=a(h,l),C=K.S;C!==null&&C(E,T),ty(t,i,T)}catch(F){ld(t,i,F)}finally{K.T=d}}else try{d=a(h,l),ty(t,i,d)}catch(F){ld(t,i,F)}}function ty(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ny(t,i,l)},function(l){return ld(t,i,l)}):ny(t,i,a)}function ny(t,i,a){i.status="fulfilled",i.value=a,iy(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,ey(t,a)))}function ld(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,iy(i),i=i.next;while(i!==l)}t.action=null}function iy(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ry(t,i){return i}function sy(t,i){if(qe){var a=tt.formState;if(a!==null){e:{var l=Re;if(qe){if(ht){t:{for(var h=ht,d=ui;h.nodeType!==8;){if(!d){h=null;break t}if(h=Fn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ht=Fn(h.nextSibling),l=h.data==="F!";break e}}Ms(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ry,lastRenderedState:i},a.queue=l,a=Sy.bind(null,Re,l),l.dispatch=a,l=od(!1),d=dd.bind(null,Re,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=Lb.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function ay(t){var i=bt();return oy(i,$e,t)}function oy(t,i,a){if(i=sd(t,i,ry)[0],t=uu(Fi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ul(i)}catch(E){throw E===rl?ru:E}else l=i;i=bt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,ja(9,hu(),Ub.bind(null,h,a),null)),[l,d,t]}function Ub(t,i){t.action=i}function ly(t){var i=bt(),a=$e;if(a!==null)return oy(i,a,t);bt(),i=i.memoizedState,a=bt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function ja(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=id(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function hu(){return{destroy:void 0,resource:void 0}}function cy(){return bt().memoizedState}function fu(t,i,a,l){var h=sn();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=ja(1|i,hu(),a,l)}function hl(t,i,a,l){var h=bt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&Zf(l,$e.memoizedState.deps)?h.memoizedState=ja(i,d,a,l):(Re.flags|=t,h.memoizedState=ja(1|i,d,a,l))}function uy(t,i){fu(8390656,8,t,i)}function hy(t,i){hl(2048,8,t,i)}function fy(t,i){return hl(4,2,t,i)}function dy(t,i){return hl(4,4,t,i)}function py(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function my(t,i,a){a=a!=null?a.concat([t]):null,hl(4,4,py.bind(null,i,t),a)}function cd(){}function gy(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Zf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function yy(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Zf(i,l[1]))return l[0];if(l=t(),js){hn(!0);try{t()}finally{hn(!1)}}return a.memoizedState=[l,i],l}function ud(t,i,a){return a===void 0||(Tr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=E0(),Re.lanes|=t,Ir|=t,a)}function vy(t,i,a,l){return dn(a,i)?a:ka.current!==null?(t=ud(t,a,l),dn(t,i)||(Pt=!0),t):(Tr&42)===0?(Pt=!0,t.memoizedState=a):(t=E0(),Re.lanes|=t,Ir|=t,i)}function _y(t,i,a,l,h){var d=se.p;se.p=d!==0&&8>d?d:8;var E=K.T,T={};K.T=T,dd(t,!1,i,a);try{var C=h(),F=K.S;if(F!==null&&F(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=Pb(C,l);fl(t,i,X,vn(t))}else fl(t,i,l,vn(t))}catch(J){fl(t,i,{then:function(){},status:"rejected",reason:J},vn())}finally{se.p=d,K.T=E}}function zb(){}function hd(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Ey(t).queue;_y(t,h,i,de,a===null?zb:function(){return by(t),a(l)})}function Ey(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:de},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function by(t){var i=Ey(t).next.queue;fl(t,i,{},vn())}function fd(){return Kt(Nl)}function Ty(){return bt().memoizedState}function wy(){return bt().memoizedState}function Bb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=vn();t=Er(a);var l=br(i,t,a);l!==null&&(_n(l,i,a),al(l,i,a)),i={cache:qf()},t.payload=i;return}i=i.return}}function qb(t,i,a){var l=vn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},du(t)?xy(i,a):(a=Of(t,i,a,l),a!==null&&(_n(a,t,l),Ay(a,i,l)))}function Sy(t,i,a){var l=vn();fl(t,i,a,l)}function fl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(du(t))xy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,a);if(h.hasEagerState=!0,h.eagerState=T,dn(T,E))return Xc(t,i,h,0),tt===null&&$c(),!1}catch{}finally{}if(a=Of(t,i,h,l),a!==null)return _n(a,t,l),Ay(a,i,l),!0}return!1}function dd(t,i,a,l){if(l={lane:2,revertLane:Gd(),action:l,hasEagerState:!1,eagerState:null,next:null},du(t)){if(i)throw Error(s(479))}else i=Of(t,a,l,2),i!==null&&_n(i,t,2)}function du(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function xy(t,i){Pa=ou=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ay(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,ko(t,a)}}var pu={readContext:Kt,use:cu,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt},Ry={readContext:Kt,use:cu,useCallback:function(t,i){return sn().memoizedState=[t,i===void 0?null:i],t},useContext:Kt,useEffect:uy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,fu(4194308,4,py.bind(null,i,t),a)},useLayoutEffect:function(t,i){return fu(4194308,4,t,i)},useInsertionEffect:function(t,i){fu(4,2,t,i)},useMemo:function(t,i){var a=sn();i=i===void 0?null:i;var l=t();if(js){hn(!0);try{t()}finally{hn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=sn();if(a!==void 0){var h=a(i);if(js){hn(!0);try{a(i)}finally{hn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=qb.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=sn();return t={current:t},i.memoizedState=t},useState:function(t){t=od(t);var i=t.queue,a=Sy.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:cd,useDeferredValue:function(t,i){var a=sn();return ud(a,t,i)},useTransition:function(){var t=od(!1);return t=_y.bind(null,Re,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=sn();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),tt===null)throw Error(s(349));(Le&124)!==0||Kg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,uy(Xg.bind(null,l,d,t),[t]),l.flags|=2048,ja(9,hu(),$g.bind(null,l,d,a,i),null),a},useId:function(){var t=sn(),i=tt.identifierPrefix;if(qe){var a=zi,l=Ui;a=(l&~(1<<32-Qt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=lu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Vb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:fd,useFormState:sy,useActionState:sy,useOptimistic:function(t){var i=sn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=dd.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:rd,useCacheRefresh:function(){return sn().memoizedState=Bb.bind(null,Re)}},Cy={readContext:Kt,use:cu,useCallback:gy,useContext:Kt,useEffect:hy,useImperativeHandle:my,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:yy,useReducer:uu,useRef:cy,useState:function(){return uu(Fi)},useDebugValue:cd,useDeferredValue:function(t,i){var a=bt();return vy(a,$e.memoizedState,t,i)},useTransition:function(){var t=uu(Fi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:ul(t),i]},useSyncExternalStore:Qg,useId:Ty,useHostTransitionStatus:fd,useFormState:ay,useActionState:ay,useOptimistic:function(t,i){var a=bt();return Jg(a,$e,t,i)},useMemoCache:rd,useCacheRefresh:wy},Fb={readContext:Kt,use:cu,useCallback:gy,useContext:Kt,useEffect:hy,useImperativeHandle:my,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:yy,useReducer:ad,useRef:cy,useState:function(){return ad(Fi)},useDebugValue:cd,useDeferredValue:function(t,i){var a=bt();return $e===null?ud(a,t,i):vy(a,$e.memoizedState,t,i)},useTransition:function(){var t=ad(Fi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:ul(t),i]},useSyncExternalStore:Qg,useId:Ty,useHostTransitionStatus:fd,useFormState:ly,useActionState:ly,useOptimistic:function(t,i){var a=bt();return $e!==null?Jg(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:rd,useCacheRefresh:wy},La=null,dl=0;function mu(t){var i=dl;return dl+=1,La===null&&(La=[]),Ug(La,t,i)}function pl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function gu(t,i){throw i.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Iy(t){var i=t._init;return i(t._payload)}function Ny(t){function i(U,P){if(t){var q=U.deletions;q===null?(U.deletions=[P],U.flags|=16):q.push(P)}}function a(U,P){if(!t)return null;for(;P!==null;)i(U,P),P=P.sibling;return null}function l(U){for(var P=new Map;U!==null;)U.key!==null?P.set(U.key,U):P.set(U.index,U),U=U.sibling;return P}function h(U,P){return U=Li(U,P),U.index=0,U.sibling=null,U}function d(U,P,q){return U.index=q,t?(q=U.alternate,q!==null?(q=q.index,q<P?(U.flags|=67108866,P):q):(U.flags|=67108866,P)):(U.flags|=1048576,P)}function E(U){return t&&U.alternate===null&&(U.flags|=67108866),U}function T(U,P,q,W){return P===null||P.tag!==6?(P=kf(q,U.mode,W),P.return=U,P):(P=h(P,q),P.return=U,P)}function C(U,P,q,W){var fe=q.type;return fe===j?X(U,P,q.props.children,W,q.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===A&&Iy(fe)===P.type)?(P=h(P,q.props),pl(P,q),P.return=U,P):(P=Zc(q.type,q.key,q.props,null,U.mode,W),pl(P,q),P.return=U,P)}function F(U,P,q,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==q.containerInfo||P.stateNode.implementation!==q.implementation?(P=Pf(q,U.mode,W),P.return=U,P):(P=h(P,q.children||[]),P.return=U,P)}function X(U,P,q,W,fe){return P===null||P.tag!==7?(P=Is(q,U.mode,W,fe),P.return=U,P):(P=h(P,q),P.return=U,P)}function J(U,P,q){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=kf(""+P,U.mode,q),P.return=U,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return q=Zc(P.type,P.key,P.props,null,U.mode,q),pl(q,P),q.return=U,q;case D:return P=Pf(P,U.mode,q),P.return=U,P;case A:var W=P._init;return P=W(P._payload),J(U,P,q)}if(Be(P)||k(P))return P=Is(P,U.mode,q,null),P.return=U,P;if(typeof P.then=="function")return J(U,mu(P),q);if(P.$$typeof===ne)return J(U,nu(U,P),q);gu(U,P)}return null}function G(U,P,q,W){var fe=P!==null?P.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return fe!==null?null:T(U,P,""+q,W);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return q.key===fe?C(U,P,q,W):null;case D:return q.key===fe?F(U,P,q,W):null;case A:return fe=q._init,q=fe(q._payload),G(U,P,q,W)}if(Be(q)||k(q))return fe!==null?null:X(U,P,q,W,null);if(typeof q.then=="function")return G(U,P,mu(q),W);if(q.$$typeof===ne)return G(U,P,nu(U,q),W);gu(U,q)}return null}function Y(U,P,q,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return U=U.get(q)||null,T(P,U,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return U=U.get(W.key===null?q:W.key)||null,C(P,U,W,fe);case D:return U=U.get(W.key===null?q:W.key)||null,F(P,U,W,fe);case A:var Ie=W._init;return W=Ie(W._payload),Y(U,P,q,W,fe)}if(Be(W)||k(W))return U=U.get(q)||null,X(P,U,W,fe,null);if(typeof W.then=="function")return Y(U,P,q,mu(W),fe);if(W.$$typeof===ne)return Y(U,P,q,nu(P,W),fe);gu(P,W)}return null}function Te(U,P,q,W){for(var fe=null,Ie=null,pe=P,_e=P=0,jt=null;pe!==null&&_e<q.length;_e++){pe.index>_e?(jt=pe,pe=null):jt=pe.sibling;var ze=G(U,pe,q[_e],W);if(ze===null){pe===null&&(pe=jt);break}t&&pe&&ze.alternate===null&&i(U,pe),P=d(ze,P,_e),Ie===null?fe=ze:Ie.sibling=ze,Ie=ze,pe=jt}if(_e===q.length)return a(U,pe),qe&&Ds(U,_e),fe;if(pe===null){for(;_e<q.length;_e++)pe=J(U,q[_e],W),pe!==null&&(P=d(pe,P,_e),Ie===null?fe=pe:Ie.sibling=pe,Ie=pe);return qe&&Ds(U,_e),fe}for(pe=l(pe);_e<q.length;_e++)jt=Y(pe,U,_e,q[_e],W),jt!==null&&(t&&jt.alternate!==null&&pe.delete(jt.key===null?_e:jt.key),P=d(jt,P,_e),Ie===null?fe=jt:Ie.sibling=jt,Ie=jt);return t&&pe.forEach(function(Lr){return i(U,Lr)}),qe&&Ds(U,_e),fe}function ve(U,P,q,W){if(q==null)throw Error(s(151));for(var fe=null,Ie=null,pe=P,_e=P=0,jt=null,ze=q.next();pe!==null&&!ze.done;_e++,ze=q.next()){pe.index>_e?(jt=pe,pe=null):jt=pe.sibling;var Lr=G(U,pe,ze.value,W);if(Lr===null){pe===null&&(pe=jt);break}t&&pe&&Lr.alternate===null&&i(U,pe),P=d(Lr,P,_e),Ie===null?fe=Lr:Ie.sibling=Lr,Ie=Lr,pe=jt}if(ze.done)return a(U,pe),qe&&Ds(U,_e),fe;if(pe===null){for(;!ze.done;_e++,ze=q.next())ze=J(U,ze.value,W),ze!==null&&(P=d(ze,P,_e),Ie===null?fe=ze:Ie.sibling=ze,Ie=ze);return qe&&Ds(U,_e),fe}for(pe=l(pe);!ze.done;_e++,ze=q.next())ze=Y(pe,U,_e,ze.value,W),ze!==null&&(t&&ze.alternate!==null&&pe.delete(ze.key===null?_e:ze.key),P=d(ze,P,_e),Ie===null?fe=ze:Ie.sibling=ze,Ie=ze);return t&&pe.forEach(function(HT){return i(U,HT)}),qe&&Ds(U,_e),fe}function We(U,P,q,W){if(typeof q=="object"&&q!==null&&q.type===j&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case S:e:{for(var fe=q.key;P!==null;){if(P.key===fe){if(fe=q.type,fe===j){if(P.tag===7){a(U,P.sibling),W=h(P,q.props.children),W.return=U,U=W;break e}}else if(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===A&&Iy(fe)===P.type){a(U,P.sibling),W=h(P,q.props),pl(W,q),W.return=U,U=W;break e}a(U,P);break}else i(U,P);P=P.sibling}q.type===j?(W=Is(q.props.children,U.mode,W,q.key),W.return=U,U=W):(W=Zc(q.type,q.key,q.props,null,U.mode,W),pl(W,q),W.return=U,U=W)}return E(U);case D:e:{for(fe=q.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===q.containerInfo&&P.stateNode.implementation===q.implementation){a(U,P.sibling),W=h(P,q.children||[]),W.return=U,U=W;break e}else{a(U,P);break}else i(U,P);P=P.sibling}W=Pf(q,U.mode,W),W.return=U,U=W}return E(U);case A:return fe=q._init,q=fe(q._payload),We(U,P,q,W)}if(Be(q))return Te(U,P,q,W);if(k(q)){if(fe=k(q),typeof fe!="function")throw Error(s(150));return q=fe.call(q),ve(U,P,q,W)}if(typeof q.then=="function")return We(U,P,mu(q),W);if(q.$$typeof===ne)return We(U,P,nu(U,q),W);gu(U,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,P!==null&&P.tag===6?(a(U,P.sibling),W=h(P,q),W.return=U,U=W):(a(U,P),W=kf(q,U.mode,W),W.return=U,U=W),E(U)):a(U,P)}return function(U,P,q,W){try{dl=0;var fe=We(U,P,q,W);return La=null,fe}catch(pe){if(pe===rl||pe===ru)throw pe;var Ie=pn(29,pe,null,U.mode);return Ie.lanes=W,Ie.return=U,Ie}finally{}}}var Ua=Ny(!0),Dy=Ny(!1),On=te(null),hi=null;function wr(t){var i=t.alternate;re(It,It.current&1),re(On,t),hi===null&&(i===null||ka.current!==null||i.memoizedState!==null)&&(hi=t)}function Oy(t){if(t.tag===22){if(re(It,It.current),re(On,t),hi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(hi=t)}}else Sr()}function Sr(){re(It,It.current),re(On,On.current)}function Hi(t){le(On),hi===t&&(hi=null),le(It)}var It=te(0);function yu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ip(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function pd(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:b({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var md={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),h=Er(l);h.payload=i,a!=null&&(h.callback=a),i=br(t,h,l),i!==null&&(_n(i,t,l),al(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),h=Er(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=br(t,h,l),i!==null&&(_n(i,t,l),al(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=Er(a);l.tag=2,i!=null&&(l.callback=i),i=br(t,l,a),i!==null&&(_n(i,t,a),al(i,t,a))}};function My(t,i,a,l,h,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Xo(a,l)||!Xo(h,d):!0}function ky(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&md.enqueueReplaceState(i,i.state,null)}function Ls(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=b({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var vu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Py(t){vu(t)}function Vy(t){console.error(t)}function jy(t){vu(t)}function _u(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ly(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function gd(t,i,a){return a=Er(a),a.tag=3,a.payload={element:null},a.callback=function(){_u(t,i)},a}function Uy(t){return t=Er(t),t.tag=3,t}function zy(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Ly(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Ly(i,a,l),typeof h!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Hb(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&tl(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return hi===null?zd():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Gf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),qd(t,l,h)),!1;case 22:return a.flags|=65536,l===Gf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),qd(t,l,h)),!1}throw Error(s(435,a.tag))}return qd(t,l,h),zd(),!1}if(qe)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Lf&&(t=Error(s(422),{cause:l}),el(Cn(t,a)))):(l!==Lf&&(i=Error(s(423),{cause:l}),el(Cn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Cn(l,a),h=gd(t.stateNode,l,h),Kf(t,h),ft!==4&&(ft=2)),!1;var d=Error(s(520),{cause:l});if(d=Cn(d,a),bl===null?bl=[d]:bl.push(d),ft!==4&&(ft=2),i===null)return!0;l=Cn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=gd(a.stateNode,l,t),Kf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Nr===null||!Nr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Uy(h),zy(h,t,a,l),Kf(a,h),!1}a=a.return}while(a!==null);return!1}var By=Error(s(461)),Pt=!1;function Bt(t,i,a,l){i.child=t===null?Dy(i,null,a,l):Ua(i,t.child,a,l)}function qy(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return Ps(i),l=Jf(t,i,a,E,d,h),T=ed(),t!==null&&!Pt?(td(t,i,h),Gi(t,i,h)):(qe&&T&&Vf(i),i.flags|=1,Bt(t,i,l,h),i.child)}function Fy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Mf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Hy(t,i,d,l,h)):(t=Zc(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Sd(t,h)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(E,l)&&t.ref===i.ref)return Gi(t,i,h)}return i.flags|=1,t=Li(d,l),t.ref=i.ref,t.return=i,i.child=t}function Hy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Xo(d,l)&&t.ref===i.ref)if(Pt=!1,i.pendingProps=l=d,Sd(t,h))(t.flags&131072)!==0&&(Pt=!0);else return i.lanes=t.lanes,Gi(t,i,h)}return yd(t,i,a,l,h)}function Gy(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Yy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&iu(i,d!==null?d.cachePool:null),d!==null?Hg(i,d):Xf(),Oy(i);else return i.lanes=i.childLanes=536870912,Yy(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(iu(i,d.cachePool),Hg(i,d),Sr(),i.memoizedState=null):(t!==null&&iu(i,null),Xf(),Sr());return Bt(t,i,h,a),i.child}function Yy(t,i,a,l){var h=Hf();return h=h===null?null:{parent:Ct._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&iu(i,null),Xf(),Oy(i),t!==null&&tl(t,i,l,!0),null}function Eu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function yd(t,i,a,l,h){return Ps(i),a=Jf(t,i,a,l,void 0,h),l=ed(),t!==null&&!Pt?(td(t,i,h),Gi(t,i,h)):(qe&&l&&Vf(i),i.flags|=1,Bt(t,i,a,h),i.child)}function Qy(t,i,a,l,h,d){return Ps(i),i.updateQueue=null,a=Yg(i,l,a,h),Gg(t),l=ed(),t!==null&&!Pt?(td(t,i,d),Gi(t,i,d)):(qe&&l&&Vf(i),i.flags|=1,Bt(t,i,a,d),i.child)}function Ky(t,i,a,l,h){if(Ps(i),i.stateNode===null){var d=Ia,E=a.contextType;typeof E=="object"&&E!==null&&(d=Kt(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=md,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Yf(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?Kt(E):Ia,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(pd(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&md.enqueueReplaceState(d,d.state,null),ll(i,l,d,h),ol(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,C=Ls(a,T);d.props=C;var F=d.context,X=a.contextType;E=Ia,typeof X=="object"&&X!==null&&(E=Kt(X));var J=a.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||F!==E)&&ky(i,d,l,E),_r=!1;var G=i.memoizedState;d.state=G,ll(i,l,d,h),ol(),F=i.memoizedState,T||G!==F||_r?(typeof J=="function"&&(pd(i,a,J,l),F=i.memoizedState),(C=_r||My(i,a,C,l,G,F,E))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=E,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Qf(t,i),E=i.memoizedProps,X=Ls(a,E),d.props=X,J=i.pendingProps,G=d.context,F=a.contextType,C=Ia,typeof F=="object"&&F!==null&&(C=Kt(F)),T=a.getDerivedStateFromProps,(F=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==J||G!==C)&&ky(i,d,l,C),_r=!1,G=i.memoizedState,d.state=G,ll(i,l,d,h),ol();var Y=i.memoizedState;E!==J||G!==Y||_r||t!==null&&t.dependencies!==null&&tu(t.dependencies)?(typeof T=="function"&&(pd(i,a,T,l),Y=i.memoizedState),(X=_r||My(i,a,X,l,G,Y,C)||t!==null&&t.dependencies!==null&&tu(t.dependencies))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Y,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Y,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),d.props=l,d.state=Y,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Eu(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ua(i,t.child,null,h),i.child=Ua(i,null,a,h)):Bt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Gi(t,i,h),t}function $y(t,i,a,l){return Jo(),i.flags|=256,Bt(t,i,a,l),i.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _d(t){return{baseLanes:t,cachePool:Vg()}}function Ed(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Mn),t}function Xy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(qe){if(h?wr(i):Sr(),qe){var T=ht,C;if(C=T){e:{for(C=T,T=ui;C.nodeType!==8;){if(!T){T=null;break e}if(C=Fn(C.nextSibling),C===null){T=null;break e}}T=C}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ns!==null?{id:Ui,overflow:zi}:null,retryLane:536870912,hydrationErrors:null},C=pn(18,null,null,0),C.stateNode=T,C.return=i,i.child=C,rn=i,ht=null,C=!0):C=!1}C||Ms(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ip(T)?i.lanes=32:i.lanes=536870912,null;Hi(i)}return T=l.children,l=l.fallback,h?(Sr(),h=i.mode,T=bu({mode:"hidden",children:T},h),l=Is(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=_d(a),h.childLanes=Ed(t,E,a),i.memoizedState=vd,l):(wr(i),bd(i,T))}if(C=t.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(wr(i),i.flags&=-257,i=Td(t,i,a)):i.memoizedState!==null?(Sr(),i.child=t.child,i.flags|=128,i=null):(Sr(),h=l.fallback,T=i.mode,l=bu({mode:"visible",children:l.children},T),h=Is(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ua(i,t.child,null,a),l=i.child,l.memoizedState=_d(a),l.childLanes=Ed(t,E,a),i.memoizedState=vd,i=h);else if(wr(i),ip(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var F=E.dgst;E=F,l=Error(s(419)),l.stack="",l.digest=E,el({value:l,source:null,stack:null}),i=Td(t,i,a)}else if(Pt||tl(t,i,a,!1),E=(a&t.childLanes)!==0,Pt||E){if(E=tt,E!==null&&(l=a&-a,l=(l&42)!==0?1:hr(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ca(t,l),_n(E,t,l),By;T.data==="$?"||zd(),i=Td(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,ht=Fn(T.nextSibling),rn=i,qe=!0,Os=null,ui=!1,t!==null&&(Nn[Dn++]=Ui,Nn[Dn++]=zi,Nn[Dn++]=Ns,Ui=t.id,zi=t.overflow,Ns=i),i=bd(i,l.children),i.flags|=4096);return i}return h?(Sr(),h=l.fallback,T=i.mode,C=t.child,F=C.sibling,l=Li(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,F!==null?h=Li(F,h):(h=Is(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=_d(a):(C=T.cachePool,C!==null?(F=Ct._currentValue,C=C.parent!==F?{parent:F,pool:F}:C):C=Vg(),T={baseLanes:T.baseLanes|a,cachePool:C}),h.memoizedState=T,h.childLanes=Ed(t,E,a),i.memoizedState=vd,l):(wr(i),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=a,i.memoizedState=null,a)}function bd(t,i){return i=bu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function bu(t,i){return t=pn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Td(t,i,a){return Ua(i,t.child,null,a),t=bd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Wy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),zf(t.return,i,a)}function wd(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Zy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Bt(t,i,l.children,a),l=It.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wy(t,a,i);else if(t.tag===19)Wy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(re(It,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&yu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),wd(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&yu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}wd(i,!0,a,null,d);break;case"together":wd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(tl(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Li(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Sd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&tu(t)))}function Gb(t,i,a){switch(i.tag){case 3:et(i,i.stateNode.containerInfo),vr(i,Ct,t.memoizedState.cache),Jo();break;case 27:case 5:ur(i);break;case 4:et(i,i.stateNode.containerInfo);break;case 10:vr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Xy(t,i,a):(wr(i),t=Gi(t,i,a),t!==null?t.sibling:null);wr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(tl(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Zy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(It,It.current),l)break;return null;case 22:case 23:return i.lanes=0,Gy(t,i,a);case 24:vr(i,Ct,t.memoizedState.cache)}return Gi(t,i,a)}function Jy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Pt=!0;else{if(!Sd(t,a)&&(i.flags&128)===0)return Pt=!1,Gb(t,i,a);Pt=(t.flags&131072)!==0}else Pt=!1,qe&&(i.flags&1048576)!==0&&Ig(i,eu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Mf(l)?(t=Ls(l,t),i.tag=1,i=Ky(null,i,l,t,a)):(i.tag=0,i=yd(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===ce){i.tag=11,i=qy(null,i,l,t,a);break e}else if(h===V){i.tag=14,i=Fy(null,i,l,t,a);break e}}throw i=rt(l)||l,Error(s(306,i,""))}}return i;case 0:return yd(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ls(l,i.pendingProps),Ky(t,i,l,h,a);case 3:e:{if(et(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Qf(t,i),ll(i,l,null,a);var E=i.memoizedState;if(l=E.cache,vr(i,Ct,l),l!==d.cache&&Bf(i,[Ct],a,!0),ol(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=$y(t,i,l,a);break e}else if(l!==h){h=Cn(Error(s(424)),i),el(h),i=$y(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=Fn(t.firstChild),rn=i,qe=!0,Os=null,ui=!0,a=Dy(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jo(),l===h){i=Gi(t,i,a);break e}Bt(t,i,l,a)}i=i.child}return i;case 26:return Eu(t,i),t===null?(a=i1(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,t=i.pendingProps,l=Pu(we.current).createElement(a),l[xt]=i,l[vt]=t,Ft(l,a,t),pt(l),i.stateNode=l):i.memoizedState=i1(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ur(i),t===null&&qe&&(l=i.stateNode=e1(i.type,i.pendingProps,we.current),rn=i,ui=!0,h=ht,Mr(i.type)?(rp=h,ht=Fn(l.firstChild)):ht=h),Bt(t,i,i.pendingProps.children,a),Eu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&qe&&((h=l=ht)&&(l=_T(l,i.type,i.pendingProps,ui),l!==null?(i.stateNode=l,rn=i,ht=Fn(l.firstChild),ui=!1,h=!0):h=!1),h||Ms(i)),ur(i),h=i.type,d=i.pendingProps,E=t!==null?t.memoizedProps:null,l=d.children,ep(h,d)?l=null:E!==null&&ep(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Jf(t,i,jb,null,null,a),Nl._currentValue=h),Eu(t,i),Bt(t,i,l,a),i.child;case 6:return t===null&&qe&&((t=a=ht)&&(a=ET(a,i.pendingProps,ui),a!==null?(i.stateNode=a,rn=i,ht=null,t=!0):t=!1),t||Ms(i)),null;case 13:return Xy(t,i,a);case 4:return et(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ua(i,null,l,a):Bt(t,i,l,a),i.child;case 11:return qy(t,i,i.type,i.pendingProps,a);case 7:return Bt(t,i,i.pendingProps,a),i.child;case 8:return Bt(t,i,i.pendingProps.children,a),i.child;case 12:return Bt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,vr(i,i.type,l.value),Bt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Ps(i),h=Kt(h),l=l(h),i.flags|=1,Bt(t,i,l,a),i.child;case 14:return Fy(t,i,i.type,i.pendingProps,a);case 15:return Hy(t,i,i.type,i.pendingProps,a);case 19:return Zy(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=bu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Li(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Gy(t,i,a);case 24:return Ps(i),l=Kt(Ct),t===null?(h=Hf(),h===null&&(h=tt,d=qf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Yf(i),vr(i,Ct,h)):((t.lanes&a)!==0&&(Qf(t,i),ll(i,null,null,a),ol()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),vr(i,Ct,l)):(l=d.cache,vr(i,Ct,l),l!==h.cache&&Bf(i,[Ct],a,!0))),Bt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Yi(t){t.flags|=4}function e0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!l1(i)){if(i=On.current,i!==null&&((Le&4194048)===Le?hi!==null:(Le&62914560)!==Le&&(Le&536870912)===0||i!==hi))throw sl=Gf,jg;t.flags|=8192}}function Tu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Oo():536870912,t.lanes|=i,Fa|=i)}function ml(t,i){if(!qe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Yb(t,i,a){var l=i.pendingProps;switch(jf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return ot(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),qi(Ct),Zn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zo(i)?Yi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Og())),ot(i),null;case 26:return a=i.memoizedState,t===null?(Yi(i),a!==null?(ot(i),e0(i,a)):(ot(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Yi(i),ot(i),e0(i,a)):(ot(i),i.flags&=-16777217):(t.memoizedProps!==l&&Yi(i),ot(i),i.flags&=-16777217),null;case 27:xi(i),a=we.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ot(i),null}t=ye.current,Zo(i)?Ng(i):(t=e1(h,l,a),i.stateNode=t,Yi(i))}return ot(i),null;case 5:if(xi(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ot(i),null}if(t=ye.current,Zo(i))Ng(i);else{switch(h=Pu(we.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[xt]=i,t[vt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Ft(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Yi(i)}}return ot(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Yi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=we.current,Zo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[xt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Q0(t.nodeValue,a)),t||Ms(i)}else t=Pu(t).createTextNode(l),t[xt]=i,i.stateNode=t}return ot(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Zo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[xt]=i}else Jo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else h=Og(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Hi(i),i):(Hi(i),null)}if(Hi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Tu(i,i.updateQueue),ot(i),null;case 4:return Zn(),t===null&&$d(i.stateNode.containerInfo),ot(i),null;case 10:return qi(i.type),ot(i),null;case 19:if(le(It),h=i.memoizedState,h===null)return ot(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)ml(h,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=yu(t),d!==null){for(i.flags|=128,ml(h,!1),t=d.updateQueue,i.updateQueue=t,Tu(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Cg(a,t),a=a.sibling;return re(It,It.current&1|2),i.child}t=t.sibling}h.tail!==null&&Tn()>xu&&(i.flags|=128,l=!0,ml(h,!1),i.lanes=4194304)}else{if(!l)if(t=yu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Tu(i,t),ml(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qe)return ot(i),null}else 2*Tn()-h.renderingStartTime>xu&&a!==536870912&&(i.flags|=128,l=!0,ml(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tn(),i.sibling=null,t=It.current,re(It,l?t&1|2:t&1),i):(ot(i),null);case 22:case 23:return Hi(i),Wf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),a=i.updateQueue,a!==null&&Tu(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&le(Vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),qi(Ct),ot(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function Qb(t,i){switch(jf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return qi(Ct),Zn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return xi(i),null;case 13:if(Hi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Jo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return le(It),null;case 4:return Zn(),null;case 10:return qi(i.type),null;case 22:case 23:return Hi(i),Wf(),t!==null&&le(Vs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return qi(Ct),null;case 25:return null;default:return null}}function t0(t,i){switch(jf(i),i.tag){case 3:qi(Ct),Zn();break;case 26:case 27:case 5:xi(i);break;case 4:Zn();break;case 13:Hi(i);break;case 19:le(It);break;case 10:qi(i.type);break;case 22:case 23:Hi(i),Wf(),t!==null&&le(Vs);break;case 24:qi(Ct)}}function gl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==h)}}catch(T){Ze(i,i.return,T)}}function xr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,h=i;var C=a,F=T;try{F()}catch(X){Ze(h,C,X)}}}l=l.next}while(l!==d)}}catch(X){Ze(i,i.return,X)}}function n0(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Fg(i,a)}catch(l){Ze(t,t.return,l)}}}function i0(t,i,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ze(t,i,l)}}function yl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ze(t,i,h)}}function fi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ze(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ze(t,i,h)}else a.current=null}function r0(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ze(t,t.return,h)}}function xd(t,i,a){try{var l=t.stateNode;pT(l,t.type,a,i),l[vt]=i}catch(h){Ze(t,t.return,h)}}function s0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mr(t.type)||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ku));else if(l!==4&&(l===27&&Mr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Rd(t,i,a),t=t.sibling;t!==null;)Rd(t,i,a),t=t.sibling}function wu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Mr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(wu(t,i,a),t=t.sibling;t!==null;)wu(t,i,a),t=t.sibling}function a0(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,l,a),i[xt]=t,i[vt]=a}catch(d){Ze(t,t.return,d)}}var Qi=!1,gt=!1,Cd=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function Kb(t,i){if(t=t.containerInfo,Zd=Bu,t=vg(t),Af(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,T=-1,C=-1,F=0,X=0,J=t,G=null;t:for(;;){for(var Y;J!==a||h!==0&&J.nodeType!==3||(T=E+h),J!==d||l!==0&&J.nodeType!==3||(C=E+l),J.nodeType===3&&(E+=J.nodeValue.length),(Y=J.firstChild)!==null;)G=J,J=Y;for(;;){if(J===t)break t;if(G===a&&++F===h&&(T=E),G===d&&++X===l&&(C=E),(Y=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=Y}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jd={focusedElem:t,selectionRange:a},Bu=!1,Vt=i;Vt!==null;)if(i=Vt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Vt=t;else for(;Vt!==null;){switch(i=Vt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Te=Ls(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Te,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ve){Ze(a,a.return,ve)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)np(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":np(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Vt=t;break}Vt=i.return}}function l0(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ar(t,a),l&4&&gl(5,a);break;case 1:if(Ar(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(E){Ze(a,a.return,E)}else{var h=Ls(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ze(a,a.return,E)}}l&64&&n0(a),l&512&&yl(a,a.return);break;case 3:if(Ar(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Fg(t,i)}catch(E){Ze(a,a.return,E)}}break;case 27:i===null&&l&4&&a0(a);case 26:case 5:Ar(t,a),i===null&&l&4&&r0(a),l&512&&yl(a,a.return);break;case 12:Ar(t,a);break;case 13:Ar(t,a),l&4&&h0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=iT.bind(null,a),bT(t,a))));break;case 22:if(l=a.memoizedState!==null||Qi,!l){i=i!==null&&i.memoizedState!==null||gt,h=Qi;var d=gt;Qi=l,(gt=i)&&!d?Rr(t,a,(a.subtreeFlags&8772)!==0):Ar(t,a),Qi=h,gt=d}break;case 30:break;default:Ar(t,a)}}function c0(t){var i=t.alternate;i!==null&&(t.alternate=null,c0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&pr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var at=null,an=!1;function Ki(t,i,a){for(a=a.child;a!==null;)u0(t,i,a),a=a.sibling}function u0(t,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:gt||fi(a,i),Ki(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||fi(a,i);var l=at,h=an;Mr(a.type)&&(at=a.stateNode,an=!1),Ki(t,i,a),Al(a.stateNode),at=l,an=h;break;case 5:gt||fi(a,i);case 6:if(l=at,h=an,at=null,Ki(t,i,a),at=l,an=h,at!==null)if(an)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(a.stateNode)}catch(d){Ze(a,i,d)}else try{at.removeChild(a.stateNode)}catch(d){Ze(a,i,d)}break;case 18:at!==null&&(an?(t=at,Z0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),kl(t)):Z0(at,a.stateNode));break;case 4:l=at,h=an,at=a.stateNode.containerInfo,an=!0,Ki(t,i,a),at=l,an=h;break;case 0:case 11:case 14:case 15:gt||xr(2,a,i),gt||xr(4,a,i),Ki(t,i,a);break;case 1:gt||(fi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&i0(a,i,l)),Ki(t,i,a);break;case 21:Ki(t,i,a);break;case 22:gt=(l=gt)||a.memoizedState!==null,Ki(t,i,a),gt=l;break;default:Ki(t,i,a)}}function h0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{kl(t)}catch(a){Ze(i,i.return,a)}}function $b(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new o0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new o0),i;default:throw Error(s(435,t.tag))}}function Id(t,i){var a=$b(t);i.forEach(function(l){var h=rT.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function mn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(Mr(T.type)){at=T.stateNode,an=!1;break e}break;case 5:at=T.stateNode,an=!1;break e;case 3:case 4:at=T.stateNode.containerInfo,an=!0;break e}T=T.return}if(at===null)throw Error(s(160));u0(d,E,h),at=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)f0(i,t),i=i.sibling}var qn=null;function f0(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:mn(i,t),gn(t),l&4&&(xr(3,t,t.return),gl(3,t),xr(5,t,t.return));break;case 1:mn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),l&64&&Qi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=qn;if(mn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ds]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ft(d,l,a),d[xt]=t,pt(d),l=d;break e;case"link":var E=a1("link","href",h).get(l+(a.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(T,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;case"meta":if(E=a1("meta","content",h).get(l+(a.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(T,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[xt]=t,pt(d),l=d}t.stateNode=l}else o1(h,t.type,t.stateNode);else t.stateNode=s1(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?o1(h,t.type,t.stateNode):s1(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&xd(t,t.memoizedProps,a.memoizedProps)}break;case 27:mn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),a!==null&&l&4&&xd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(mn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),t.flags&32){h=t.stateNode;try{Sn(h,"")}catch(Y){Ze(t,t.return,Y)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,xd(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Cd=!0);break;case 6:if(mn(i,t),gn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(Y){Ze(t,t.return,Y)}}break;case 3:if(Lu=null,h=qn,qn=Vu(i.containerInfo),mn(i,t),qn=h,gn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{kl(i.containerInfo)}catch(Y){Ze(t,t.return,Y)}Cd&&(Cd=!1,d0(t));break;case 4:l=qn,qn=Vu(t.stateNode.containerInfo),mn(i,t),gn(t),qn=l;break;case 12:mn(i,t),gn(t);break;case 13:mn(i,t),gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pd=Tn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Id(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,F=Qi,X=gt;if(Qi=F||h,gt=X||C,mn(i,t),gt=X,Qi=F,gn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||C||Qi||gt||Us(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=C.stateNode;var J=C.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Y){Ze(C,C.return,Y)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(Y){Ze(C,C.return,Y)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Id(t,a))));break;case 19:mn(i,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Id(t,l)));break;case 30:break;case 21:break;default:mn(i,t),gn(t)}}function gn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(s0(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Ad(t);wu(t,d,h);break;case 5:var E=a.stateNode;a.flags&32&&(Sn(E,""),a.flags&=-33);var T=Ad(t);wu(t,T,E);break;case 3:case 4:var C=a.stateNode.containerInfo,F=Ad(t);Rd(t,F,C);break;default:throw Error(s(161))}}catch(X){Ze(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function d0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;d0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ar(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)l0(t,i.alternate,i),i=i.sibling}function Us(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:xr(4,i,i.return),Us(i);break;case 1:fi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&i0(i,i.return,a),Us(i);break;case 27:Al(i.stateNode);case 26:case 5:fi(i,i.return),Us(i);break;case 22:i.memoizedState===null&&Us(i);break;case 30:Us(i);break;default:Us(i)}t=t.sibling}}function Rr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Rr(h,d,a),gl(4,d);break;case 1:if(Rr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(F){Ze(l,l.return,F)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)qg(C[h],T)}catch(F){Ze(l,l.return,F)}}a&&E&64&&n0(d),yl(d,d.return);break;case 27:a0(d);case 26:case 5:Rr(h,d,a),a&&l===null&&E&4&&r0(d),yl(d,d.return);break;case 12:Rr(h,d,a);break;case 13:Rr(h,d,a),a&&E&4&&h0(h,d);break;case 22:d.memoizedState===null&&Rr(h,d,a),yl(d,d.return);break;case 30:break;default:Rr(h,d,a)}i=i.sibling}}function Nd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&nl(a))}function Dd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&nl(t))}function di(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)p0(t,i,a,l),i=i.sibling}function p0(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:di(t,i,a,l),h&2048&&gl(9,i);break;case 1:di(t,i,a,l);break;case 3:di(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&nl(t)));break;case 12:if(h&2048){di(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Ze(i,i.return,C)}}else di(t,i,a,l);break;case 13:di(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?di(t,i,a,l):vl(t,i):d._visibility&2?di(t,i,a,l):(d._visibility|=2,za(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Nd(E,i);break;case 24:di(t,i,a,l),h&2048&&Dd(i.alternate,i);break;default:di(t,i,a,l)}}function za(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,E=i,T=a,C=l,F=E.flags;switch(E.tag){case 0:case 11:case 15:za(d,E,T,C,h),gl(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?za(d,E,T,C,h):vl(d,E):(X._visibility|=2,za(d,E,T,C,h)),h&&F&2048&&Nd(E.alternate,E);break;case 24:za(d,E,T,C,h),h&&F&2048&&Dd(E.alternate,E);break;default:za(d,E,T,C,h)}i=i.sibling}}function vl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:vl(a,l),h&2048&&Nd(l.alternate,l);break;case 24:vl(a,l),h&2048&&Dd(l.alternate,l);break;default:vl(a,l)}i=i.sibling}}var _l=8192;function Ba(t){if(t.subtreeFlags&_l)for(t=t.child;t!==null;)m0(t),t=t.sibling}function m0(t){switch(t.tag){case 26:Ba(t),t.flags&_l&&t.memoizedState!==null&&kT(qn,t.memoizedState,t.memoizedProps);break;case 5:Ba(t);break;case 3:case 4:var i=qn;qn=Vu(t.stateNode.containerInfo),Ba(t),qn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=_l,_l=16777216,Ba(t),_l=i):Ba(t));break;default:Ba(t)}}function g0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function El(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,v0(l,t)}g0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)y0(t),t=t.sibling}function y0(t){switch(t.tag){case 0:case 11:case 15:El(t),t.flags&2048&&xr(9,t,t.return);break;case 3:El(t);break;case 12:El(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Su(t)):El(t);break;default:El(t)}}function Su(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,v0(l,t)}g0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:xr(8,i,i.return),Su(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Su(i));break;default:Su(i)}t=t.sibling}}function v0(t,i){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:xr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:nl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Vt=l;else e:for(a=t;Vt!==null;){l=Vt;var h=l.sibling,d=l.return;if(c0(l),l===a){Vt=null;break e}if(h!==null){h.return=d,Vt=h;break e}Vt=d}}}var Xb={getCacheForType:function(t){var i=Kt(Ct),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},Wb=typeof WeakMap=="function"?WeakMap:Map,Ye=0,tt=null,Ne=null,Le=0,Qe=0,yn=null,Cr=!1,qa=!1,Od=!1,$i=0,ft=0,Ir=0,zs=0,Md=0,Mn=0,Fa=0,bl=null,on=null,kd=!1,Pd=0,xu=1/0,Au=null,Nr=null,qt=0,Dr=null,Ha=null,Ga=0,Vd=0,jd=null,_0=null,Tl=0,Ld=null;function vn(){if((Ye&2)!==0&&Le!==0)return Le&-Le;if(K.T!==null){var t=Oa;return t!==0?t:Gd()}return fr()}function E0(){Mn===0&&(Mn=(Le&536870912)===0||qe?Do():536870912);var t=On.current;return t!==null&&(t.flags|=32),Mn}function _n(t,i,a){(t===tt&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)&&(Ya(t,0),Or(t,Le,Mn,!1)),Ri(t,a),((Ye&2)===0||t!==tt)&&(t===tt&&((Ye&2)===0&&(zs|=a),ft===4&&Or(t,Le,Mn,!1)),pi(t))}function b0(t,i,a){if((Ye&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||fs(t,i),h=l?eT(t,i):Bd(t,i,!0),d=l;do{if(h===0){qa&&!l&&Or(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!Zb(a)){h=Bd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=t;h=bl;var C=T.current.memoizedState.isDehydrated;if(C&&(Ya(T,E).flags|=256),E=Bd(T,E,!1),E!==2){if(Od&&!C){T.errorRecoveryDisabledLanes|=d,zs|=d,h=4;break e}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){Ya(t,0),Or(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Or(l,i,Mn,!Cr);break e;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Pd+300-Tn(),10<h)){if(Or(l,i,Mn,!Cr),ca(l,0,!0)!==0)break e;l.timeoutHandle=X0(T0.bind(null,l,a,on,Au,kd,i,Mn,zs,Fa,Cr,d,2,-0,0),h);break e}T0(l,a,on,Au,kd,i,Mn,zs,Fa,Cr,d,0,-0,0)}}break}while(!0);pi(t)}function T0(t,i,a,l,h,d,E,T,C,F,X,J,G,Y){if(t.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Il={stylesheets:null,count:0,unsuspend:MT},m0(i),J=PT(),J!==null)){t.cancelPendingCommit=J(I0.bind(null,t,i,d,a,l,h,E,T,C,X,1,G,Y)),Or(t,d,E,!F);return}I0(t,i,d,a,l,h,E,T,C)}function Zb(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!dn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Or(t,i,a,l){i&=~Md,i&=~zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Qt(h),E=1<<d;l[d]=-1,h&=~E}a!==0&&Jn(t,a,i)}function Ru(){return(Ye&6)===0?(wl(0),!1):!0}function Ud(){if(Ne!==null){if(Qe===0)var t=Ne.return;else t=Ne,Bi=ks=null,nd(t),La=null,dl=0,t=Ne;for(;t!==null;)t0(t.alternate,t),t=t.return;Ne=null}}function Ya(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ud(),tt=t,Ne=a=Li(t.current,null),Le=i,Qe=0,yn=null,Cr=!1,qa=fs(t,i),Od=!1,Fa=Mn=Md=zs=Ir=ft=0,on=bl=null,kd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Qt(l),d=1<<h;i|=t[h],l&=~d}return $i=i,$c(),a}function w0(t,i){Re=null,K.H=pu,i===rl||i===ru?(i=zg(),Qe=3):i===jg?(i=zg(),Qe=4):Qe=i===By?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yn=i,Ne===null&&(ft=1,_u(t,Cn(i,t.current)))}function S0(){var t=K.H;return K.H=pu,t===null?pu:t}function x0(){var t=K.A;return K.A=Xb,t}function zd(){ft=4,Cr||(Le&4194048)!==Le&&On.current!==null||(qa=!0),(Ir&134217727)===0&&(zs&134217727)===0||tt===null||Or(tt,Le,Mn,!1)}function Bd(t,i,a){var l=Ye;Ye|=2;var h=S0(),d=x0();(tt!==t||Le!==i)&&(Au=null,Ya(t,i)),i=!1;var E=ft;e:do try{if(Qe!==0&&Ne!==null){var T=Ne,C=yn;switch(Qe){case 8:Ud(),E=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var F=Qe;if(Qe=0,yn=null,Qa(t,T,C,F),a&&qa){E=0;break e}break;default:F=Qe,Qe=0,yn=null,Qa(t,T,C,F)}}Jb(),E=ft;break}catch(X){w0(t,X)}while(!0);return i&&t.shellSuspendCounter++,Bi=ks=null,Ye=l,K.H=h,K.A=d,Ne===null&&(tt=null,Le=0,$c()),E}function Jb(){for(;Ne!==null;)A0(Ne)}function eT(t,i){var a=Ye;Ye|=2;var l=S0(),h=x0();tt!==t||Le!==i?(Au=null,xu=Tn()+500,Ya(t,i)):qa=fs(t,i);e:do try{if(Qe!==0&&Ne!==null){i=Ne;var d=yn;t:switch(Qe){case 1:Qe=0,yn=null,Qa(t,i,d,1);break;case 2:case 9:if(Lg(d)){Qe=0,yn=null,R0(i);break}i=function(){Qe!==2&&Qe!==9||tt!==t||(Qe=7),pi(t)},d.then(i,i);break e;case 3:Qe=7;break e;case 4:Qe=5;break e;case 7:Lg(d)?(Qe=0,yn=null,R0(i)):(Qe=0,yn=null,Qa(t,i,d,7));break;case 5:var E=null;switch(Ne.tag){case 26:E=Ne.memoizedState;case 5:case 27:var T=Ne;if(!E||l1(E)){Qe=0,yn=null;var C=T.sibling;if(C!==null)Ne=C;else{var F=T.return;F!==null?(Ne=F,Cu(F)):Ne=null}break t}}Qe=0,yn=null,Qa(t,i,d,5);break;case 6:Qe=0,yn=null,Qa(t,i,d,6);break;case 8:Ud(),ft=6;break e;default:throw Error(s(462))}}tT();break}catch(X){w0(t,X)}while(!0);return Bi=ks=null,K.H=l,K.A=h,Ye=a,Ne!==null?0:(tt=null,Le=0,$c(),ft)}function tT(){for(;Ne!==null&&!Ro();)A0(Ne)}function A0(t){var i=Jy(t.alternate,t,$i);t.memoizedProps=t.pendingProps,i===null?Cu(t):Ne=i}function R0(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Qy(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=Qy(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:nd(i);default:t0(a,i),i=Ne=Cg(i,$i),i=Jy(a,i,$i)}t.memoizedProps=t.pendingProps,i===null?Cu(t):Ne=i}function Qa(t,i,a,l){Bi=ks=null,nd(i),La=null,dl=0;var h=i.return;try{if(Hb(t,h,i,a,Le)){ft=1,_u(t,Cn(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ft=1,_u(t,Cn(a,t.current)),Ne=null;return}i.flags&32768?(qe||l===1?t=!0:qa||(Le&536870912)!==0?t=!1:(Cr=t=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),C0(i,t)):Cu(i)}function Cu(t){var i=t;do{if((i.flags&32768)!==0){C0(i,Cr);return}t=i.return;var a=Yb(i.alternate,i,$i);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ft===0&&(ft=5)}function C0(t,i){do{var a=Qb(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ft=6,Ne=null}function I0(t,i,a,l,h,d,E,T,C){t.cancelPendingCommit=null;do Iu();while(qt!==0);if((Ye&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Df,Mo(t,a,d,E,T,C),t===tt&&(Ne=tt=null,Le=0),Ha=i,Dr=t,Ga=a,Vd=d,jd=h,_0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sT(ls,function(){return k0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=K.T,K.T=null,h=se.p,se.p=2,E=Ye,Ye|=4;try{Kb(t,i,a)}finally{Ye=E,se.p=h,K.T=l}}qt=1,N0(),D0(),O0()}}function N0(){if(qt===1){qt=0;var t=Dr,i=Ha,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=K.T,K.T=null;var l=se.p;se.p=2;var h=Ye;Ye|=4;try{f0(i,t);var d=Jd,E=vg(t.containerInfo),T=d.focusedElem,C=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&yg(T.ownerDocument.documentElement,T)){if(C!==null&&Af(T)){var F=C.start,X=C.end;if(X===void 0&&(X=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var Y=G.getSelection(),Te=T.textContent.length,ve=Math.min(C.start,Te),We=C.end===void 0?ve:Math.min(C.end,Te);!Y.extend&&ve>We&&(E=We,We=ve,ve=E);var U=gg(T,ve),P=gg(T,We);if(U&&P&&(Y.rangeCount!==1||Y.anchorNode!==U.node||Y.anchorOffset!==U.offset||Y.focusNode!==P.node||Y.focusOffset!==P.offset)){var q=J.createRange();q.setStart(U.node,U.offset),Y.removeAllRanges(),ve>We?(Y.addRange(q),Y.extend(P.node,P.offset)):(q.setEnd(P.node,P.offset),Y.addRange(q))}}}}for(J=[],Y=T;Y=Y.parentNode;)Y.nodeType===1&&J.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Bu=!!Zd,Jd=Zd=null}finally{Ye=h,se.p=l,K.T=a}}t.current=i,qt=2}}function D0(){if(qt===2){qt=0;var t=Dr,i=Ha,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=K.T,K.T=null;var l=se.p;se.p=2;var h=Ye;Ye|=4;try{l0(t,i.alternate,i)}finally{Ye=h,se.p=l,K.T=a}}qt=3}}function O0(){if(qt===4||qt===3){qt=0,Sc();var t=Dr,i=Ha,a=Ga,l=_0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qt=5:(qt=0,Ha=Dr=null,M0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Nr=null),ua(a),i=i.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=K.T,h=se.p,se.p=2,K.T=null;try{for(var d=t.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{K.T=i,se.p=h}}(Ga&3)!==0&&Iu(),pi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===Ld?Tl++:(Tl=0,Ld=t):Tl=0,wl(0)}}function M0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,nl(i)))}function Iu(t){return N0(),D0(),O0(),k0()}function k0(){if(qt!==5)return!1;var t=Dr,i=Vd;Vd=0;var a=ua(Ga),l=K.T,h=se.p;try{se.p=32>a?32:a,K.T=null,a=jd,jd=null;var d=Dr,E=Ga;if(qt=0,Ha=Dr=null,Ga=0,(Ye&6)!==0)throw Error(s(331));var T=Ye;if(Ye|=4,y0(d.current),p0(d,d.current,E,a),Ye=T,wl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ut,d)}catch{}return!0}finally{se.p=h,K.T=l,M0(t,i)}}function P0(t,i,a){i=Cn(a,i),i=gd(t.stateNode,i,2),t=br(t,i,2),t!==null&&(Ri(t,2),pi(t))}function Ze(t,i,a){if(t.tag===3)P0(t,t,a);else for(;i!==null;){if(i.tag===3){P0(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Nr===null||!Nr.has(l))){t=Cn(a,t),a=Uy(2),l=br(i,a,2),l!==null&&(zy(a,l,i,t),Ri(l,2),pi(l));break}}i=i.return}}function qd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Wb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Od=!0,h.add(a),t=nT.bind(null,t,i,a),i.then(t,t))}function nT(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tt===t&&(Le&a)===a&&(ft===4||ft===3&&(Le&62914560)===Le&&300>Tn()-Pd?(Ye&2)===0&&Ya(t,0):Md|=a,Fa===Le&&(Fa=0)),pi(t)}function V0(t,i){i===0&&(i=Oo()),t=Ca(t,i),t!==null&&(Ri(t,i),pi(t))}function iT(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),V0(t,a)}function rT(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),V0(t,a)}function sT(t,i){return as(t,i)}var Nu=null,Ka=null,Fd=!1,Du=!1,Hd=!1,Bs=0;function pi(t){t!==Ka&&t.next===null&&(Ka===null?Nu=Ka=t:Ka=Ka.next=t),Du=!0,Fd||(Fd=!0,oT())}function wl(t,i){if(!Hd&&Du){Hd=!0;do for(var a=!1,l=Nu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Qt(42|t)+1)-1,d&=h&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,z0(l,d))}else d=Le,d=ca(l,l===tt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||fs(l,d)||(a=!0,z0(l,d));l=l.next}while(a);Hd=!1}}function aT(){j0()}function j0(){Du=Fd=!1;var t=0;Bs!==0&&(mT()&&(t=Bs),Bs=0);for(var i=Tn(),a=null,l=Nu;l!==null;){var h=l.next,d=L0(l,i);d===0?(l.next=null,a===null?Nu=h:a.next=h,h===null&&(Ka=a)):(a=l,(t!==0||(d&3)!==0)&&(Du=!0)),l=h}wl(t)}function L0(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Qt(d),T=1<<E,C=h[E];C===-1?((T&a)===0||(T&l)!==0)&&(h[E]=No(T,i)):C<=i&&(t.expiredLanes|=T),d&=~T}if(i=tt,a=Le,a=ca(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Qe===2||Qe===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&os(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||fs(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&os(l),ua(a)){case 2:case 8:a=oa;break;case 32:a=ls;break;case 268435456:a=la;break;default:a=ls}return l=U0.bind(null,t),a=as(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&os(l),t.callbackPriority=2,t.callbackNode=null,2}function U0(t,i){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Iu()&&t.callbackNode!==a)return null;var l=Le;return l=ca(t,t===tt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(b0(t,l,i),L0(t,Tn()),t.callbackNode!=null&&t.callbackNode===a?U0.bind(null,t):null)}function z0(t,i){if(Iu())return null;b0(t,i,!0)}function oT(){yT(function(){(Ye&6)!==0?as(Co,aT):j0()})}function Gd(){return Bs===0&&(Bs=Do()),Bs}function B0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ga(""+t)}function q0(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function lT(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=B0((h[vt]||null).action),E=l.submitter;E&&(i=(i=E[vt]||null)?B0(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new ya("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Bs!==0){var C=E?q0(h,E):new FormData(h);hd(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=E?q0(h,E):new FormData(h),hd(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var Yd=0;Yd<Nf.length;Yd++){var Qd=Nf[Yd],cT=Qd.toLowerCase(),uT=Qd[0].toUpperCase()+Qd.slice(1);Bn(cT,"on"+uT)}Bn(bg,"onAnimationEnd"),Bn(Tg,"onAnimationIteration"),Bn(wg,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Rb,"onTransitionRun"),Bn(Cb,"onTransitionStart"),Bn(Ib,"onTransitionCancel"),Bn(Sg,"onTransitionEnd"),Ii("onMouseEnter",["mouseout","mouseover"]),Ii("onMouseLeave",["mouseout","mouseover"]),Ii("onPointerEnter",["pointerout","pointerover"]),Ii("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sl));function F0(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=F;try{d(h)}catch(X){vu(X)}h.currentTarget=null,d=C}else for(E=0;E<l.length;E++){if(T=l[E],C=T.instance,F=T.currentTarget,T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=F;try{d(h)}catch(X){vu(X)}h.currentTarget=null,d=C}}}}function De(t,i){var a=i[Po];a===void 0&&(a=i[Po]=new Set);var l=t+"__bubble";a.has(l)||(H0(i,t,2,!1),a.add(l))}function Kd(t,i,a){var l=0;i&&(l|=4),H0(a,t,l,i)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function $d(t){if(!t[Ou]){t[Ou]=!0,Vo.forEach(function(a){a!=="selectionchange"&&(hT.has(a)||Kd(a,!1,t),Kd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ou]||(i[Ou]=!0,Kd("selectionchange",!1,i))}}function H0(t,i,a,l){switch(p1(i)){case 2:var h=LT;break;case 8:h=UT;break;default:h=cp}a=h.bind(null,i,a,t),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Xd(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===h)break;if(E===4)for(E=l.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;T!==null;){if(E=Ci(T),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){l=d=E;continue e}T=T.parentNode}}l=l.return}kc(function(){var F=d,X=xn(a),J=[];e:{var G=xg.get(t);if(G!==void 0){var Y=ya,Te=t;switch(t){case"keypress":if(si(a)===0)break e;case"keydown":case"keyup":Y=wa;break;case"focusin":Te="focus",Y=Ea;break;case"focusout":Te="blur",Y=Ea;break;case"beforeblur":case"afterblur":Y=Ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Tf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=qc;break;case bg:case Tg:case wg:Y=ba;break;case Sg:Y=Hc;break;case"scroll":case"scrollend":Y=Pc;break;case"wheel":Y=Sa;break;case"copy":case"cut":case"paste":Y=Ta;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Ko;break;case"toggle":case"beforetoggle":Y=Yc}var ve=(i&4)!==0,We=!ve&&(t==="scroll"||t==="scrollend"),U=ve?G!==null?G+"Capture":null:G;ve=[];for(var P=F,q;P!==null;){var W=P;if(q=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||q===null||U===null||(W=Es(P,U),W!=null&&ve.push(xl(P,W,q))),We)break;P=P.return}0<ve.length&&(G=new Y(G,Te,null,a,X),J.push({event:G,listeners:ve}))}}if((i&7)===0){e:{if(G=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",G&&a!==Oi&&(Te=a.relatedTarget||a.fromElement)&&(Ci(Te)||Te[wn]))break e;if((Y||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(Te=a.relatedTarget||a.toElement,Y=F,Te=Te?Ci(Te):null,Te!==null&&(We=c(Te),ve=Te.tag,Te!==We||ve!==5&&ve!==27&&ve!==6)&&(Te=null)):(Y=null,Te=F),Y!==Te)){if(ve=Rn,W="onMouseLeave",U="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(ve=Ko,W="onPointerLeave",U="onPointerEnter",P="pointer"),We=Y==null?G:ti(Y),q=Te==null?G:ti(Te),G=new ve(W,P+"leave",Y,a,X),G.target=We,G.relatedTarget=q,W=null,Ci(X)===F&&(ve=new ve(U,P+"enter",Te,a,X),ve.target=q,ve.relatedTarget=We,W=ve),We=W,Y&&Te)t:{for(ve=Y,U=Te,P=0,q=ve;q;q=$a(q))P++;for(q=0,W=U;W;W=$a(W))q++;for(;0<P-q;)ve=$a(ve),P--;for(;0<q-P;)U=$a(U),q--;for(;P--;){if(ve===U||U!==null&&ve===U.alternate)break t;ve=$a(ve),U=$a(U)}ve=null}else ve=null;Y!==null&&G0(J,G,Y,ve,!1),Te!==null&&We!==null&&G0(J,We,Te,ve,!0)}}e:{if(G=F?ti(F):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var fe=ug;else if(Rt(G))if(hg)fe=Sb;else{fe=Tb;var Ie=bb}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?F&&Bo(F.elementType)&&(fe=ug):fe=wb;if(fe&&(fe=fe(t,F))){ji(J,fe,a,X);break e}Ie&&Ie(t,G,F),t==="focusout"&&F&&G.type==="number"&&F.memoizedProps.value!=null&&gr(G,"number",G.value)}switch(Ie=F?ti(F):window,t){case"focusin":(Rt(Ie)||Ie.contentEditable==="true")&&(xa=Ie,Rf=F,Wo=null);break;case"focusout":Wo=Rf=xa=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,_g(J,a,X);break;case"selectionchange":if(Ab)break;case"keydown":case"keyup":_g(J,a,X)}var pe;if(li)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ve?Q(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_&&a.locale!=="ko"&&(Ve||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ve&&(pe=Fo()):(ri=X,yr="value"in ri?ri.value:ri.textContent,Ve=!0)),Ie=Mu(F,_e),0<Ie.length&&(_e=new Yo(_e,t,null,a,X),J.push({event:_e,listeners:Ie}),pe?_e.data=pe:(pe=ae(a),pe!==null&&(_e.data=pe)))),(pe=v?At(t,a):je(t,a))&&(_e=Mu(F,"onBeforeInput"),0<_e.length&&(Ie=new Yo("onBeforeInput","beforeinput",null,a,X),J.push({event:Ie,listeners:_e}),Ie.data=pe)),lT(J,t,F,a,X)}F0(J,i)})}function xl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Mu(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Es(t,a),h!=null&&l.unshift(xl(t,h,d)),h=Es(t,i),h!=null&&l.push(xl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function $a(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function G0(t,i,a,l,h){for(var d=i._reactName,E=[];a!==null&&a!==l;){var T=a,C=T.alternate,F=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||F===null||(C=F,h?(F=Es(a,d),F!=null&&E.unshift(xl(a,F,C))):h||(F=Es(a,d),F!=null&&E.push(xl(a,F,C)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var fT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(fT,`
`).replace(dT,"")}function Q0(t,i){return i=Y0(i),Y0(t)===i}function ku(){}function Xe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Sn(t,""+l);break;case"className":ni(t,"class",l);break;case"tabIndex":ni(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,l);break;case"style":zo(t,l,d);break;case"data":if(i!=="object"){ni(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ga(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ga(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ku);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ga(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),mr(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ef.get(a)||a,mr(t,a,l))}}function Wd(t,i,a,l,h,d){switch(a){case"style":zo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&Sn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ku);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[vt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):mr(t,a,l)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,d,E,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),l&&Xe(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=d=E=h=null,C=null,F=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":h=X;break;case"type":E=X;break;case"checked":C=X;break;case"defaultChecked":F=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:Xe(t,i,l,X,a,null)}}ys(t,d,T,C,F,E,h,!1),ma(t);return;case"select":De("invalid",t),l=E=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:Xe(t,i,h,T,a,null)}i=d,a=E,t.multiple=!!l,i!=null?Di(t,!!l,i,!1):a!=null&&Di(t,!!l,a,!0);return;case"textarea":De("invalid",t),d=h=l=null;for(E in a)if(a.hasOwnProperty(E)&&(T=a[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,i,E,T,a,null)}vs(t,l,h,d),ma(t);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,i,C,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<Sl.length;l++)De(Sl[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(l=a[F],l!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,F,l,a,null)}return;default:if(Bo(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&Wd(t,i,X,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xe(t,i,T,l,a,null))}function pT(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,T=null,C=null,F=null,X=null;for(Y in a){var J=a[Y];if(a.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(Y)||Xe(t,i,Y,null,l,J)}}for(var G in l){var Y=l[G];if(J=a[G],l.hasOwnProperty(G)&&(Y!=null||J!=null))switch(G){case"type":d=Y;break;case"name":h=Y;break;case"checked":F=Y;break;case"defaultChecked":X=Y;break;case"value":E=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Y!==J&&Xe(t,i,G,Y,l,J)}}fn(t,E,T,C,F,X,d,h);return;case"select":Y=E=T=G=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":Y=C;default:l.hasOwnProperty(d)||Xe(t,i,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":G=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==C&&Xe(t,i,h,d,l,C)}i=T,a=E,l=Y,G!=null?Di(t,!!a,G,!1):!!l!=!!a&&(i!=null?Di(t,!!a,i,!0):Di(t,!!a,a?[]:"",!1));return;case"textarea":Y=G=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,i,T,null,l,h)}for(E in l)if(h=l[E],d=a[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,i,E,h,l,d)}Ke(t,G,Y);return;case"option":for(var Te in a)if(G=a[Te],a.hasOwnProperty(Te)&&G!=null&&!l.hasOwnProperty(Te))switch(Te){case"selected":t.selected=!1;break;default:Xe(t,i,Te,null,l,G)}for(C in l)if(G=l[C],Y=a[C],l.hasOwnProperty(C)&&G!==Y&&(G!=null||Y!=null))switch(C){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Xe(t,i,C,G,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)G=a[ve],a.hasOwnProperty(ve)&&G!=null&&!l.hasOwnProperty(ve)&&Xe(t,i,ve,null,l,G);for(F in l)if(G=l[F],Y=a[F],l.hasOwnProperty(F)&&G!==Y&&(G!=null||Y!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xe(t,i,F,G,l,Y)}return;default:if(Bo(i)){for(var We in a)G=a[We],a.hasOwnProperty(We)&&G!==void 0&&!l.hasOwnProperty(We)&&Wd(t,i,We,void 0,l,G);for(X in l)G=l[X],Y=a[X],!l.hasOwnProperty(X)||G===Y||G===void 0&&Y===void 0||Wd(t,i,X,G,l,Y);return}}for(var U in a)G=a[U],a.hasOwnProperty(U)&&G!=null&&!l.hasOwnProperty(U)&&Xe(t,i,U,null,l,G);for(J in l)G=l[J],Y=a[J],!l.hasOwnProperty(J)||G===Y||G==null&&Y==null||Xe(t,i,J,G,l,Y)}var Zd=null,Jd=null;function Pu(t){return t.nodeType===9?t:t.ownerDocument}function K0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function ep(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tp=null;function mT(){var t=window.event;return t&&t.type==="popstate"?t===tp?!1:(tp=t,!0):(tp=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(t){return W0.resolve(null).then(t).catch(vT)}:X0;function vT(t){setTimeout(function(){throw t})}function Mr(t){return t==="head"}function Z0(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=t.ownerDocument;if(a&1&&Al(E.documentElement),a&2&&Al(E.body),a&4)for(a=E.head,Al(a),E=a.firstChild;E;){var T=E.nextSibling,C=E.nodeName;E[ds]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=T}}if(h===0){t.removeChild(d),kl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);kl(i)}function np(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":np(a),pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _T(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ds])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function ET(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fn(t.nextSibling),t===null))return null;return t}function ip(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function bT(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var rp=null;function J0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function e1(t,i,a){switch(i=Pu(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Al(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pr(t)}var kn=new Map,t1=new Set;function Vu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Xi=se.d;se.d={f:TT,r:wT,D:ST,C:xT,L:AT,m:RT,X:IT,S:CT,M:NT};function TT(){var t=Xi.f(),i=Ru();return t||i}function wT(t){var i=ei(t);i!==null&&i.tag===5&&i.type==="form"?by(i):Xi.r(t)}var Xa=typeof document>"u"?null:document;function n1(t,i,a){var l=Xa;if(l&&typeof i=="string"&&i){var h=_t(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),t1.has(h)||(t1.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ft(i,"link",t),pt(i),l.head.appendChild(i)))}}function ST(t){Xi.D(t),n1("dns-prefetch",t,null)}function xT(t,i){Xi.C(t,i),n1("preconnect",t,i)}function AT(t,i,a){Xi.L(t,i,a);var l=Xa;if(l&&t&&i){var h='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_t(a.imageSizes)+'"]')):h+='[href="'+_t(t)+'"]';var d=h;switch(i){case"style":d=Wa(t);break;case"script":d=Za(t)}kn.has(d)||(t=b({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),kn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Rl(d))||i==="script"&&l.querySelector(Cl(d))||(i=l.createElement("link"),Ft(i,"link",t),pt(i),l.head.appendChild(i)))}}function RT(t,i){Xi.m(t,i);var a=Xa;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Za(t)}if(!kn.has(d)&&(t=b({rel:"modulepreload",href:t},i),kn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Cl(d)))return}l=a.createElement("link"),Ft(l,"link",t),pt(l),a.head.appendChild(l)}}}function CT(t,i,a){Xi.S(t,i,a);var l=Xa;if(l&&t){var h=en(l).hoistableStyles,d=Wa(t);i=i||"default";var E=h.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(Rl(d)))T.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":i},a),(a=kn.get(d))&&sp(t,a);var C=E=l.createElement("link");pt(C),Ft(C,"link",t),C._p=new Promise(function(F,X){C.onload=F,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ju(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},h.set(d,E)}}}function IT(t,i){Xi.X(t,i);var a=Xa;if(a&&t){var l=en(a).hoistableScripts,h=Za(t),d=l.get(h);d||(d=a.querySelector(Cl(h)),d||(t=b({src:t,async:!0},i),(i=kn.get(h))&&ap(t,i),d=a.createElement("script"),pt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function NT(t,i){Xi.M(t,i);var a=Xa;if(a&&t){var l=en(a).hoistableScripts,h=Za(t),d=l.get(h);d||(d=a.querySelector(Cl(h)),d||(t=b({src:t,async:!0,type:"module"},i),(i=kn.get(h))&&ap(t,i),d=a.createElement("script"),pt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function i1(t,i,a,l){var h=(h=we.current)?Vu(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Wa(a.href),a=en(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wa(a.href);var d=en(h).hoistableStyles,E=d.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=h.querySelector(Rl(t)))&&!d._p&&(E.instance=d,E.state.loading=5),kn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(t,a),d||DT(h,t,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Za(a),a=en(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Wa(t){return'href="'+_t(t)+'"'}function Rl(t){return'link[rel="stylesheet"]['+t+"]"}function r1(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function DT(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),pt(i),t.head.appendChild(i))}function Za(t){return'[src="'+_t(t)+'"]'}function Cl(t){return"script[async]"+t}function s1(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return i.instance=l,pt(l),l;var h=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pt(l),Ft(l,"style",h),ju(l,a.precedence,t),i.instance=l;case"stylesheet":h=Wa(a.href);var d=t.querySelector(Rl(h));if(d)return i.state.loading|=4,i.instance=d,pt(d),d;l=r1(a),(h=kn.get(h))&&sp(l,h),d=(t.ownerDocument||t).createElement("link"),pt(d);var E=d;return E._p=new Promise(function(T,C){E.onload=T,E.onerror=C}),Ft(d,"link",l),i.state.loading|=4,ju(d,a.precedence,t),i.instance=d;case"script":return d=Za(a.src),(h=t.querySelector(Cl(d)))?(i.instance=h,pt(h),h):(l=a,(h=kn.get(d))&&(l=b({},a),ap(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),pt(h),Ft(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,ju(l,a.precedence,t));return i.instance}function ju(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function sp(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ap(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Lu=null;function a1(t,i,a){if(Lu===null){var l=new Map,h=Lu=new Map;h.set(a,l)}else h=Lu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ds]||d[xt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=t+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function o1(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function OT(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function l1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Il=null;function MT(){}function kT(t,i,a){if(Il===null)throw Error(s(475));var l=Il;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Wa(a.href),d=t.querySelector(Rl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,pt(d);return}d=t.ownerDocument||t,a=r1(a),(h=kn.get(h))&&sp(a,h),d=d.createElement("link"),pt(d);var E=d;E._p=new Promise(function(T,C){E.onload=T,E.onerror=C}),Ft(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Uu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function PT(){if(Il===null)throw Error(s(475));var t=Il;return t.stylesheets&&t.count===0&&op(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&op(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Uu(){if(this.count--,this.count===0){if(this.stylesheets)op(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zu=null;function op(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zu=new Map,i.forEach(VT,t),zu=null,Uu.call(t))}function VT(t,i){if(!(i.state.loading&4)){var a=zu.get(t);if(a)var l=a.get(null);else{a=new Map,zu.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,h),a.set(E,h),this.count++,l=Uu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Nl={$$typeof:ne,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function jT(t,i,a,l,h,d,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ai(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ai(0),this.hiddenUpdates=Ai(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function c1(t,i,a,l,h,d,E,T,C,F,X,J){return t=new jT(t,i,a,E,T,C,F,J),i=1,d===!0&&(i|=24),d=pn(3,null,null,i),t.current=d,d.stateNode=t,i=qf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Yf(d),t}function u1(t){return t?(t=Ia,t):Ia}function h1(t,i,a,l,h,d){h=u1(h),l.context===null?l.context=h:l.pendingContext=h,l=Er(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=br(t,l,i),a!==null&&(_n(a,t,i),al(a,t,i))}function f1(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function lp(t,i){f1(t,i),(t=t.alternate)&&f1(t,i)}function d1(t){if(t.tag===13){var i=Ca(t,67108864);i!==null&&_n(i,t,67108864),lp(t,67108864)}}var Bu=!0;function LT(t,i,a,l){var h=K.T;K.T=null;var d=se.p;try{se.p=2,cp(t,i,a,l)}finally{se.p=d,K.T=h}}function UT(t,i,a,l){var h=K.T;K.T=null;var d=se.p;try{se.p=8,cp(t,i,a,l)}finally{se.p=d,K.T=h}}function cp(t,i,a,l){if(Bu){var h=up(l);if(h===null)Xd(t,i,l,qu,a),m1(t,l);else if(BT(h,t,i,a,l))l.stopPropagation();else if(m1(t,l),i&4&&-1<zT.indexOf(t)){for(;h!==null;){var d=ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Ln(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var C=1<<31-Qt(E);T.entanglements[1]|=C,E&=~C}pi(d),(Ye&6)===0&&(xu=Tn()+500,wl(0))}}break;case 13:T=Ca(d,2),T!==null&&_n(T,d,2),Ru(),lp(d,2)}if(d=up(l),d===null&&Xd(t,i,l,qu,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Xd(t,i,l,null,a)}}function up(t){return t=xn(t),hp(t)}var qu=null;function hp(t){if(qu=null,t=Ci(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return qu=t,null}function p1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pf()){case Co:return 2;case oa:return 8;case ls:case mf:return 32;case la:return 268435456;default:return 32}default:return 32}}var fp=!1,kr=null,Pr=null,Vr=null,Dl=new Map,Ol=new Map,jr=[],zT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m1(t,i){switch(t){case"focusin":case"focusout":kr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":Dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(i.pointerId)}}function Ml(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ei(i),i!==null&&d1(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function BT(t,i,a,l,h){switch(i){case"focusin":return kr=Ml(kr,t,i,a,l,h),!0;case"dragenter":return Pr=Ml(Pr,t,i,a,l,h),!0;case"mouseover":return Vr=Ml(Vr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Dl.set(d,Ml(Dl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Ol.set(d,Ml(Ol.get(d)||null,t,i,a,l,h)),!0}return!1}function g1(t){var i=Ci(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Rc(t.priority,function(){if(a.tag===13){var l=vn();l=hr(l);var h=Ca(a,l);h!==null&&_n(h,a,l),lp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=up(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Oi=l,a.target.dispatchEvent(l),Oi=null}else return i=ei(a),i!==null&&d1(i),t.blockedOn=a,!1;i.shift()}return!0}function y1(t,i,a){Fu(t)&&a.delete(i)}function qT(){fp=!1,kr!==null&&Fu(kr)&&(kr=null),Pr!==null&&Fu(Pr)&&(Pr=null),Vr!==null&&Fu(Vr)&&(Vr=null),Dl.forEach(y1),Ol.forEach(y1)}function Hu(t,i){t.blockedOn===i&&(t.blockedOn=null,fp||(fp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,qT)))}var Gu=null;function v1(t){Gu!==t&&(Gu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(hp(l||a)===null)continue;break}var d=ei(a);d!==null&&(t.splice(i,3),i-=3,hd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function kl(t){function i(C){return Hu(C,t)}kr!==null&&Hu(kr,t),Pr!==null&&Hu(Pr,t),Vr!==null&&Hu(Vr,t),Dl.forEach(i),Ol.forEach(i);for(var a=0;a<jr.length;a++){var l=jr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<jr.length&&(a=jr[0],a.blockedOn===null);)g1(a),a.blockedOn===null&&jr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],E=h[vt]||null;if(typeof d=="function")E||v1(a);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[vt]||null)T=E.formAction;else if(hp(h)!==null)continue}else T=E.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),v1(a)}}}function dp(t){this._internalRoot=t}Yu.prototype.render=dp.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=vn();h1(a,l,t,i,null,null)},Yu.prototype.unmount=dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;h1(t.current,2,null,t,null,null),Ru(),i[wn]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var i=fr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<jr.length&&i!==0&&i<jr[a].priority;a++);jr.splice(a,0,t),a===0&&g1(t)}};var _1=e.version;if(_1!=="19.1.1")throw Error(s(527,_1,"19.1.1"));se.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var FT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{ut=Qu.inject(FT),Ge=Qu}catch{}}return Vl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=Py,d=Vy,E=jy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=c1(t,1,!1,null,null,a,l,h,d,E,T,null),t[wn]=i.current,$d(t),new dp(i)},Vl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=Py,E=Vy,T=jy,C=null,F=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(F=a.formState)),i=c1(t,1,!0,i,a??null,l,h,d,E,T,C,F),i.context=u1(null),a=i.current,l=vn(),l=hr(l),h=Er(l),h.callback=null,br(a,h,l),a=l,i.current.lanes=a,Ri(i,a),pi(i),t[wn]=i.current,$d(t),new Yu(i)},Vl.version="19.1.1",Vl}var I1;function ew(){if(I1)return gp.exports;I1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gp.exports=JT(),gp.exports}var tw=ew();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var N1="popstate";function nw(r={}){function e(o,c){let{pathname:f="/",search:p="",hash:m=""}=na(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),kp("",{pathname:f,search:p,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let f=o.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let m=o.location.href,y=m.indexOf("#");p=y===-1?m:m.slice(0,y)}return p+"#"+(typeof c=="string"?c:Xl(c))}function s(o,c){Kn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return rw(e,n,s,r)}function lt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Kn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iw(){return Math.random().toString(36).substring(2,10)}function D1(r,e){return{usr:r.state,key:r.key,idx:e}}function kp(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?na(e):e,state:n,key:e&&e.key||s||iw()}}function Xl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function na(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function rw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,f=o.history,p="POP",m=null,y=b();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function b(){return(f.state||{idx:null}).idx}function x(){p="POP";let H=b(),$=H==null?null:H-y;y=H,m&&m({action:p,location:z.location,delta:$})}function S(H,$){p="PUSH";let ie=kp(z.location,H,$);n&&n(ie,H),y=b()+1;let ne=D1(ie,y),ce=z.createHref(ie);try{f.pushState(ne,"",ce)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;o.location.assign(ce)}c&&m&&m({action:p,location:z.location,delta:1})}function D(H,$){p="REPLACE";let ie=kp(z.location,H,$);n&&n(ie,H),y=b();let ne=D1(ie,y),ce=z.createHref(ie);f.replaceState(ne,"",ce),c&&m&&m({action:p,location:z.location,delta:0})}function j(H){return sw(H)}let z={get action(){return p},get location(){return r(o,f)},listen(H){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(N1,x),m=H,()=>{o.removeEventListener(N1,x),m=null}},createHref(H){return e(o,H)},createURL:j,encodeLocation(H){let $=j(H);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:D,go(H){return f.go(H)}};return z}function sw(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),lt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Xl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function p_(r,e,n="/"){return aw(r,e,n,!1)}function aw(r,e,n,s){let o=typeof e=="string"?na(e):e,c=er(o.pathname||"/",n);if(c==null)return null;let f=m_(r);ow(f);let p=null;for(let m=0;p==null&&m<f.length;++m){let y=vw(c);p=gw(f[m],y,s)}return p}function m_(r,e=[],n=[],s="",o=!1){let c=(f,p,m=o,y)=>{let b={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&m)return;lt(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let x=Ji([s,b.relativePath]),S=n.concat(b);f.children&&f.children.length>0&&(lt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),m_(f.children,e,S,x,m)),!(f.path==null&&!f.index)&&e.push({path:x,score:pw(x,f.index),routesMeta:S})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let m of g_(f.path))c(f,p,!0,m)}),e}function g_(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let f=g_(s.join("/")),p=[];return p.push(...f.map(m=>m===""?c:[c,m].join("/"))),o&&p.push(...f),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function ow(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:mw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var lw=/^:[\w-]+$/,cw=3,uw=2,hw=1,fw=10,dw=-2,O1=r=>r==="*";function pw(r,e){let n=r.split("/"),s=n.length;return n.some(O1)&&(s+=dw),e&&(s+=uw),n.filter(o=>!O1(o)).reduce((o,c)=>o+(lw.test(c)?cw:c===""?hw:fw),s)}function mw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function gw(r,e,n=!1){let{routesMeta:s}=r,o={},c="/",f=[];for(let p=0;p<s.length;++p){let m=s[p],y=p===s.length-1,b=c==="/"?e:e.slice(c.length)||"/",x=ph({path:m.relativePath,caseSensitive:m.caseSensitive,end:y},b),S=m.route;if(!x&&y&&n&&!s[s.length-1].route.index&&(x=ph({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!x)return null;Object.assign(o,x.params),f.push({params:o,pathname:Ji([c,x.pathname]),pathnameBase:Tw(Ji([c,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(c=Ji([c,x.pathnameBase]))}return f}function ph(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=yw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((y,{paramName:b,isOptional:x},S)=>{if(b==="*"){let j=p[S]||"";f=c.slice(0,c.length-j.length).replace(/(.)\/+$/,"$1")}const D=p[S];return x&&!D?y[b]=void 0:y[b]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function yw(r,e=!1,n=!0){Kn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function vw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function er(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function _w(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?na(r):r;return{pathname:n?n.startsWith("/")?n:Ew(n,e):e,search:ww(s),hash:Sw(o)}}function Ew(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ep(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function y_(r){let e=bw(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function v_(r,e,n,s=!1){let o;typeof r=="string"?o=na(r):(o={...r},lt(!o.pathname||!o.pathname.includes("?"),Ep("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Ep("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Ep("#","search","hash",o)));let c=r===""||o.pathname==="",f=c?"/":o.pathname,p;if(f==null)p=n;else{let x=e.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),x-=1;o.pathname=S.join("/")}p=x>=0?e[x]:"/"}let m=_w(o,p),y=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(y||b)&&(m.pathname+="/"),m}var Ji=r=>r.join("/").replace(/\/\/+/g,"/"),Tw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ww=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Sw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function xw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var __=["POST","PUT","PATCH","DELETE"];new Set(__);var Aw=["GET",...__];new Set(Aw);var yo=L.createContext(null);yo.displayName="DataRouter";var Uh=L.createContext(null);Uh.displayName="DataRouterState";L.createContext(!1);var E_=L.createContext({isTransitioning:!1});E_.displayName="ViewTransition";var Rw=L.createContext(new Map);Rw.displayName="Fetchers";var Cw=L.createContext(null);Cw.displayName="Await";var Si=L.createContext(null);Si.displayName="Navigation";var cc=L.createContext(null);cc.displayName="Location";var ar=L.createContext({outlet:null,matches:[],isDataRoute:!1});ar.displayName="Route";var um=L.createContext(null);um.displayName="RouteError";function Iw(r,{relative:e}={}){lt(uc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=L.useContext(Si),{hash:o,pathname:c,search:f}=hc(r,{relative:e}),p=c;return n!=="/"&&(p=c==="/"?n:Ji([n,c])),s.createHref({pathname:p,search:f,hash:o})}function uc(){return L.useContext(cc)!=null}function ia(){return lt(uc(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(cc).location}var b_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function T_(r){L.useContext(Si).static||L.useLayoutEffect(r)}function vo(){let{isDataRoute:r}=L.useContext(ar);return r?qw():Nw()}function Nw(){lt(uc(),"useNavigate() may be used only in the context of a <Router> component.");let r=L.useContext(yo),{basename:e,navigator:n}=L.useContext(Si),{matches:s}=L.useContext(ar),{pathname:o}=ia(),c=JSON.stringify(y_(s)),f=L.useRef(!1);return T_(()=>{f.current=!0}),L.useCallback((m,y={})=>{if(Kn(f.current,b_),!f.current)return;if(typeof m=="number"){n.go(m);return}let b=v_(m,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:Ji([e,b.pathname])),(y.replace?n.replace:n.push)(b,y.state,y)},[e,n,c,o,r])}L.createContext(null);function hc(r,{relative:e}={}){let{matches:n}=L.useContext(ar),{pathname:s}=ia(),o=JSON.stringify(y_(n));return L.useMemo(()=>v_(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Dw(r,e){return w_(r,e)}function w_(r,e,n,s){lt(uc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=L.useContext(Si),{matches:c}=L.useContext(ar),f=c[c.length-1],p=f?f.params:{},m=f?f.pathname:"/",y=f?f.pathnameBase:"/",b=f&&f.route;{let $=b&&b.path||"";S_(m,!b||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let x=ia(),S;if(e){let $=typeof e=="string"?na(e):e;lt(y==="/"||$.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),S=$}else S=x;let D=S.pathname||"/",j=D;if(y!=="/"){let $=y.replace(/^\//,"").split("/");j="/"+D.replace(/^\//,"").split("/").slice($.length).join("/")}let z=p_(r,{pathname:j});Kn(b||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Kn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Vw(z&&z.map($=>Object.assign({},$,{params:Object.assign({},p,$.params),pathname:Ji([y,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:Ji([y,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),c,n,s);return e&&H?L.createElement(cc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function Ow(){let r=Bw(),e=xw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:c},"ErrorBoundary")," or"," ",L.createElement("code",{style:c},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:o},n):null,f)}var Mw=L.createElement(Ow,null),kw=class extends L.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?L.createElement(ar.Provider,{value:this.props.routeContext},L.createElement(um.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pw({routeContext:r,match:e,children:n}){let s=L.useContext(yo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),L.createElement(ar.Provider,{value:r},n)}function Vw(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,c=n?.errors;if(c!=null){let m=o.findIndex(y=>y.route.id&&c?.[y.route.id]!==void 0);lt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let f=!1,p=-1;if(n)for(let m=0;m<o.length;m++){let y=o[m];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=m),y.route.id){let{loaderData:b,errors:x}=n,S=y.route.loader&&!b.hasOwnProperty(y.route.id)&&(!x||x[y.route.id]===void 0);if(y.route.lazy||S){f=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,y,b)=>{let x,S=!1,D=null,j=null;n&&(x=c&&y.route.id?c[y.route.id]:void 0,D=y.route.errorElement||Mw,f&&(p<0&&b===0?(S_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,j=null):p===b&&(S=!0,j=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,b+1)),H=()=>{let $;return x?$=D:S?$=j:y.route.Component?$=L.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=m,L.createElement(Pw,{match:y,routeContext:{outlet:m,matches:z,isDataRoute:n!=null},children:$})};return n&&(y.route.ErrorBoundary||y.route.errorElement||b===0)?L.createElement(kw,{location:n.location,revalidation:n.revalidation,component:D,error:x,children:H(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):H()},null)}function hm(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jw(r){let e=L.useContext(yo);return lt(e,hm(r)),e}function Lw(r){let e=L.useContext(Uh);return lt(e,hm(r)),e}function Uw(r){let e=L.useContext(ar);return lt(e,hm(r)),e}function fm(r){let e=Uw(r),n=e.matches[e.matches.length-1];return lt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function zw(){return fm("useRouteId")}function Bw(){let r=L.useContext(um),e=Lw("useRouteError"),n=fm("useRouteError");return r!==void 0?r:e.errors?.[n]}function qw(){let{router:r}=jw("useNavigate"),e=fm("useNavigate"),n=L.useRef(!1);return T_(()=>{n.current=!0}),L.useCallback(async(o,c={})=>{Kn(n.current,b_),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var M1={};function S_(r,e,n){!e&&!M1[r]&&(M1[r]=!0,Kn(!1,n))}L.memo(Fw);function Fw({routes:r,future:e,state:n}){return w_(r,void 0,n,e)}function zr(r){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Hw({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:c=!1}){lt(!uc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),p=L.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=na(n));let{pathname:m="/",search:y="",hash:b="",state:x=null,key:S="default"}=n,D=L.useMemo(()=>{let j=er(m,f);return j==null?null:{location:{pathname:j,search:y,hash:b,state:x,key:S},navigationType:s}},[f,m,y,b,x,S,s]);return Kn(D!=null,`<Router basename="${f}"> is not able to match the URL "${m}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:L.createElement(Si.Provider,{value:p},L.createElement(cc.Provider,{children:e,value:D}))}function Gw({children:r,location:e}){return Dw(Pp(r),e)}function Pp(r,e=[]){let n=[];return L.Children.forEach(r,(s,o)=>{if(!L.isValidElement(s))return;let c=[...e,o];if(s.type===L.Fragment){n.push.apply(n,Pp(s.props.children,c));return}lt(s.type===zr,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Pp(s.props.children,c)),n.push(f)}),n}var nh="get",ih="application/x-www-form-urlencoded";function zh(r){return r!=null&&typeof r.tagName=="string"}function Yw(r){return zh(r)&&r.tagName.toLowerCase()==="button"}function Qw(r){return zh(r)&&r.tagName.toLowerCase()==="form"}function Kw(r){return zh(r)&&r.tagName.toLowerCase()==="input"}function $w(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Xw(r,e){return r.button===0&&(!e||e==="_self")&&!$w(r)}var Ku=null;function Ww(){if(Ku===null)try{new FormData(document.createElement("form"),0),Ku=!1}catch{Ku=!0}return Ku}var Zw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bp(r){return r!=null&&!Zw.has(r)?(Kn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ih}"`),null):r}function Jw(r,e){let n,s,o,c,f;if(Qw(r)){let p=r.getAttribute("action");s=p?er(p,e):null,n=r.getAttribute("method")||nh,o=bp(r.getAttribute("enctype"))||ih,c=new FormData(r)}else if(Yw(r)||Kw(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?er(m,e):null,n=r.getAttribute("formmethod")||p.getAttribute("method")||nh,o=bp(r.getAttribute("formenctype"))||bp(p.getAttribute("enctype"))||ih,c=new FormData(p,r),!Ww()){let{name:y,type:b,value:x}=r;if(b==="image"){let S=y?`${y}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else y&&c.append(y,x)}}else{if(zh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=nh,s=null,o=ih,f=r}return c&&o==="text/plain"&&(f=c,c=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function dm(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function e4(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&er(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function t4(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function n4(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function i4(r,e,n){let s=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await t4(c,n);return f.links?f.links():[]}return[]}));return o4(s.flat(1).filter(n4).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function k1(r,e,n,s,o,c){let f=(m,y)=>n[y]?m.route.id!==n[y].route.id:!0,p=(m,y)=>n[y].pathname!==m.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,y)=>f(m,y)||p(m,y)):c==="data"?e.filter((m,y)=>{let b=s.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(f(m,y)||p(m,y))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function r4(r,e,{includeHydrateFallback:n}={}){return s4(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function s4(r){return[...new Set(r)]}function a4(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function o4(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let c=JSON.stringify(a4(o));return n.has(c)||(n.add(c),s.push({key:c,link:o})),s},[])}function x_(){let r=L.useContext(yo);return dm(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function l4(){let r=L.useContext(Uh);return dm(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var pm=L.createContext(void 0);pm.displayName="FrameworkContext";function A_(){let r=L.useContext(pm);return dm(r,"You must render this element inside a <HydratedRouter> element"),r}function c4(r,e){let n=L.useContext(pm),[s,o]=L.useState(!1),[c,f]=L.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:y,onMouseLeave:b,onTouchStart:x}=e,S=L.useRef(null);L.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let z=$=>{$.forEach(ie=>{f(ie.isIntersecting)})},H=new IntersectionObserver(z,{threshold:.5});return S.current&&H.observe(S.current),()=>{H.disconnect()}}},[r]),L.useEffect(()=>{if(s){let z=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(z)}}},[s]);let D=()=>{o(!0)},j=()=>{o(!1),f(!1)};return n?r!=="intent"?[c,S,{}]:[c,S,{onFocus:jl(p,D),onBlur:jl(m,j),onMouseEnter:jl(y,D),onMouseLeave:jl(b,j),onTouchStart:jl(x,D)}]:[!1,S,{}]}function jl(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function u4({page:r,...e}){let{router:n}=x_(),s=L.useMemo(()=>p_(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?L.createElement(f4,{page:r,matches:s,...e}):null}function h4(r){let{manifest:e,routeModules:n}=A_(),[s,o]=L.useState([]);return L.useEffect(()=>{let c=!1;return i4(r,e,n).then(f=>{c||o(f)}),()=>{c=!0}},[r,e,n]),s}function f4({page:r,matches:e,...n}){let s=ia(),{manifest:o,routeModules:c}=A_(),{basename:f}=x_(),{loaderData:p,matches:m}=l4(),y=L.useMemo(()=>k1(r,e,m,o,s,"data"),[r,e,m,o,s]),b=L.useMemo(()=>k1(r,e,m,o,s,"assets"),[r,e,m,o,s]),x=L.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let j=new Set,z=!1;if(e.forEach($=>{let ie=o.routes[$.route.id];!ie||!ie.hasLoader||(!y.some(ne=>ne.route.id===$.route.id)&&$.route.id in p&&c[$.route.id]?.shouldRevalidate||ie.hasClientLoader?z=!0:j.add($.route.id))}),j.size===0)return[];let H=e4(r,f,"data");return z&&j.size>0&&H.searchParams.set("_routes",e.filter($=>j.has($.route.id)).map($=>$.route.id).join(",")),[H.pathname+H.search]},[f,p,s,o,y,e,r,c]),S=L.useMemo(()=>r4(b,o),[b,o]),D=h4(b);return L.createElement(L.Fragment,null,x.map(j=>L.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...n})),S.map(j=>L.createElement("link",{key:j,rel:"modulepreload",href:j,...n})),D.map(({key:j,link:z})=>L.createElement("link",{key:j,nonce:n.nonce,...z})))}function d4(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.8.1")}catch{}function p4({basename:r,children:e,window:n}){let s=L.useRef();s.current==null&&(s.current=nw({window:n,v5Compat:!0}));let o=s.current,[c,f]=L.useState({action:o.action,location:o.location}),p=L.useCallback(m=>{L.startTransition(()=>f(m))},[f]);return L.useLayoutEffect(()=>o.listen(p),[o,p]),L.createElement(Hw,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=L.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:c,replace:f,state:p,target:m,to:y,preventScrollReset:b,viewTransition:x,...S},D){let{basename:j}=L.useContext(Si),z=typeof y=="string"&&C_.test(y),H,$=!1;if(typeof y=="string"&&z&&(H=y,R_))try{let R=new URL(window.location.href),O=y.startsWith("//")?new URL(R.protocol+y):new URL(y),N=er(O.pathname,j);O.origin===R.origin&&N!=null?y=N+O.search+O.hash:$=!0}catch{Kn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ie=Iw(y,{relative:o}),[ne,ce,oe]=c4(s,S),me=v4(y,{replace:f,state:p,target:m,preventScrollReset:b,relative:o,viewTransition:x});function V(R){e&&e(R),R.defaultPrevented||me(R)}let A=L.createElement("a",{...S,...oe,href:H||ie,onClick:$||c?e:V,ref:d4(D,ce),target:m,"data-discover":!z&&n==="render"?"true":void 0});return ne&&!z?L.createElement(L.Fragment,null,A,L.createElement(u4,{page:ie})):A});tr.displayName="Link";var m4=L.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:c,to:f,viewTransition:p,children:m,...y},b){let x=hc(f,{relative:y.relative}),S=ia(),D=L.useContext(Uh),{navigator:j,basename:z}=L.useContext(Si),H=D!=null&&w4(x)&&p===!0,$=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,ie=S.pathname,ne=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;n||(ie=ie.toLowerCase(),ne=ne?ne.toLowerCase():null,$=$.toLowerCase()),ne&&z&&(ne=er(ne,z)||ne);const ce=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let oe=ie===$||!o&&ie.startsWith($)&&ie.charAt(ce)==="/",me=ne!=null&&(ne===$||!o&&ne.startsWith($)&&ne.charAt($.length)==="/"),V={isActive:oe,isPending:me,isTransitioning:H},A=oe?e:void 0,R;typeof s=="function"?R=s(V):R=[s,oe?"active":null,me?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let O=typeof c=="function"?c(V):c;return L.createElement(tr,{...y,"aria-current":A,className:R,ref:b,style:O,to:f,viewTransition:p},typeof m=="function"?m(V):m)});m4.displayName="NavLink";var g4=L.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:c,method:f=nh,action:p,onSubmit:m,relative:y,preventScrollReset:b,viewTransition:x,...S},D)=>{let j=b4(),z=T4(p,{relative:y}),H=f.toLowerCase()==="get"?"get":"post",$=typeof p=="string"&&C_.test(p),ie=ne=>{if(m&&m(ne),ne.defaultPrevented)return;ne.preventDefault();let ce=ne.nativeEvent.submitter,oe=ce?.getAttribute("formmethod")||f;j(ce||ne.currentTarget,{fetcherKey:e,method:oe,navigate:n,replace:o,state:c,relative:y,preventScrollReset:b,viewTransition:x})};return L.createElement("form",{ref:D,method:H,action:z,onSubmit:s?m:ie,...S,"data-discover":!$&&r==="render"?"true":void 0})});g4.displayName="Form";function y4(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function I_(r){let e=L.useContext(yo);return lt(e,y4(r)),e}function v4(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:c,viewTransition:f}={}){let p=vo(),m=ia(),y=hc(r,{relative:c});return L.useCallback(b=>{if(Xw(b,e)){b.preventDefault();let x=n!==void 0?n:Xl(m)===Xl(y);p(r,{replace:x,state:s,preventScrollReset:o,relative:c,viewTransition:f})}},[m,p,y,n,s,e,r,o,c,f])}var _4=0,E4=()=>`__${String(++_4)}__`;function b4(){let{router:r}=I_("useSubmit"),{basename:e}=L.useContext(Si),n=zw();return L.useCallback(async(s,o={})=>{let{action:c,method:f,encType:p,formData:m,body:y}=Jw(s,e);if(o.navigate===!1){let b=o.fetcherKey||E4();await r.fetch(b,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||f,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:y,formMethod:o.method||f,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function T4(r,{relative:e}={}){let{basename:n}=L.useContext(Si),s=L.useContext(ar);lt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...hc(r||".",{relative:e})},f=ia();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),m=p.getAll("index");if(m.some(b=>b==="")){p.delete("index"),m.filter(x=>x).forEach(x=>p.append("index",x));let b=p.toString();c.search=b?`?${b}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:Ji([n,c.pathname])),Xl(c)}function w4(r,{relative:e}={}){let n=L.useContext(E_);lt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=I_("useViewTransitionState"),o=hc(r,{relative:e});if(!n.isTransitioning)return!1;let c=er(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=er(n.nextLocation.pathname,s)||n.nextLocation.pathname;return ph(o.pathname,f)!=null||ph(o.pathname,c)!=null}function mm(){return L.useEffect(()=>{const r=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),s=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=f=>{e.classList.contains("active")&&!e.contains(f.target)&&!r.contains(f.target)&&e.classList.remove("active")};return r.addEventListener("click",s),n.addEventListener("click",o),document.addEventListener("click",c),()=>{r.removeEventListener("click",s),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),g.jsx("div",{className:"header",children:g.jsxs("nav",{className:"navbar",children:[g.jsx("h1",{children:"Gold Corps Inc"}),g.jsxs("div",{className:"hamburger",id:"hamburger",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]}),g.jsxs("div",{className:"nav-links",id:"nav-links",children:[g.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),g.jsx("div",{className:"search-container",children:g.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),g.jsx("a",{className:"a",href:"#",children:"Home"}),g.jsx("a",{className:"a",href:"#about",children:"About us"}),g.jsx("a",{className:"a",href:"#contact",children:"Contact us"}),g.jsx("a",{className:"a",href:"#services",children:"Our services"}),g.jsx(tr,{to:"/stock",children:g.jsx("a",{className:"a",href:"#stock",children:"Stock prices"})}),g.jsx("a",{className:"a",href:"#team",children:"Our team"}),g.jsx("a",{href:"#testimonial",children:"Testimonial"})]})]})})}const S4="/GoldcCorps/assets/image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",x4="/GoldcCorps/assets/image-2-BqTb_Qtz.jpeg",A4="/GoldcCorps/assets/image-3-Mfy9IzQb.jpeg",R4="/GoldcCorps/assets/image-4-BooAjJhm.jpeg";function C4(){const r=[S4,x4,A4,R4],[e,n]=L.useState(0);return L.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%r.length)},5e3);return()=>clearInterval(s)},[r.length]),g.jsxs("div",{className:"hero",children:[g.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${r[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),g.jsxs("div",{className:"hero-overlay",children:[g.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),g.jsx("p",{children:"Empowering you to grow wealth with confidence."}),g.jsx(tr,{to:"/signup",children:g.jsx("button",{className:"btn btn1",children:"signup"})}),g.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var N_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},P1=Ys.createContext&&Ys.createContext(N_),I4=["attr","size","title"];function N4(r,e){if(r==null)return{};var n=D4(r,e),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function D4(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function mh(){return mh=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},mh.apply(this,arguments)}function V1(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,s)}return n}function gh(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?V1(Object(n),!0).forEach(function(s){O4(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):V1(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function O4(r,e,n){return e=M4(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function M4(r){var e=k4(r,"string");return typeof e=="symbol"?e:e+""}function k4(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function D_(r){return r&&r.map((e,n)=>Ys.createElement(e.tag,gh({key:n},e.attr),D_(e.child)))}function Je(r){return e=>Ys.createElement(P4,mh({attr:gh({},r.attr)},e),D_(r.child))}function P4(r){var e=n=>{var{attr:s,size:o,title:c}=r,f=N4(r,I4),p=o||n.size||"1em",m;return n.className&&(m=n.className),r.className&&(m=(m?m+" ":"")+r.className),Ys.createElement("svg",mh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,f,{className:m,style:gh(gh({color:r.color||n.color},n.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&Ys.createElement("title",null,c),r.children)};return P1!==void 0?Ys.createElement(P1.Consumer,null,n=>e(n)):e(N_)}function V4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(r)}function j4(r){return Je({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function L4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function U4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function z4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(r)}function Wl(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function io(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function B4(r){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function q4(r){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function F4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function j1(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(r)}function H4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(r)}function gm(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function G4(r){return Je({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(r)}function O_(r){return Je({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function Y4(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function Q4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(r)}function M_(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(r)}function K4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function k_(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function $4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function X4(r){return Je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function W4(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function Z4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function Bh(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(r)}function J4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function eS(){return g.jsx("section",{id:"about",className:"about-section",children:g.jsxs("div",{className:"about-container",children:[g.jsxs("div",{className:"about-block",children:[g.jsx(V4,{className:"about-icon"}),g.jsx("h2",{children:"Our Business"}),g.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",g.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",g.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",g.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),g.jsxs("div",{className:"about-block",children:[g.jsx(Wl,{className:"about-icon"}),g.jsx("h2",{children:"Our Strategy"}),g.jsxs("p",{children:["We think beyond quarters — ",g.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",g.jsx("strong",{children:"exploring new mining frontiers"}),"to ",g.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",g.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),g.jsxs("div",{className:"about-block",children:[g.jsx(Bh,{className:"about-icon"}),g.jsx("h2",{children:"Our Purpose"}),g.jsxs("p",{children:["Gold Corps is on a mission to become ",g.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),g.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const tS=[{icon:g.jsx(Bh,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:g.jsx(U4,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:g.jsx(G4,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:g.jsx(Wl,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function nS(){return L.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let s=0;const o=()=>{const c=n/60;s<n?(s+=c,e.innerText=Math.ceil(s)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),g.jsxs("section",{className:"stats-section",id:"services",children:[g.jsxs("div",{className:"stats-header",children:[g.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),g.jsxs("p",{className:"stats-intro",children:["At ",g.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),g.jsx("div",{className:"stats-container",children:tS.map((r,e)=>g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon",children:r.icon}),g.jsx("h2",{className:"stat-value shimmer","data-target":r.value,"data-percent":r.label==="Growth"?"true":"",children:"0"}),g.jsx("p",{className:"stat-label",children:r.label}),g.jsx("span",{className:"stat-sub",children:r.sub}),g.jsx("p",{className:"stat-desc",children:r.desc})]},e))})]})}const iS=[{icon:g.jsx(Bh,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Gold corps for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:g.jsx(Wl,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:g.jsx(O_,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:g.jsx(Wl,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],rS=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],qs=[{quote:"Gold corps helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Gold corps delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Gold corps for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function sS(r=".stat-value",e=1200){L.useEffect(()=>{const n=document.querySelectorAll(r);n.length&&n.forEach(s=>{const o=parseFloat(s.getAttribute("data-target"))||0,c=s.getAttribute("data-suffix")||"",f=performance.now(),p=m=>{const y=Math.min((m-f)/e,1),b=Math.floor(y*o);s.textContent=`${b.toLocaleString()}${c}`,y<1?requestAnimationFrame(p):s.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(p)})},[r,e])}function aS(){const[r,e]=L.useState(0);L.useEffect(()=>{const c=setInterval(()=>e(f=>(f+1)%qs.length),6e3);return()=>clearInterval(c)},[]),sS(".stat-value",1200);const[n,s]=L.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),s("")};return g.jsxs("main",{className:"gold-landing",children:[g.jsx("header",{className:"hero-section",children:g.jsxs("div",{className:"hero-inner",children:[g.jsx("h1",{className:"hero-title",id:"team",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),g.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),g.jsxs("div",{className:"hero-cta",children:[g.jsx(tr,{to:"/signup",children:g.jsx("button",{className:"btn btn-primary",children:" Get Started"})}),g.jsxs("button",{className:"btn btn-outline",children:[g.jsx(K4,{})," Watch Overview"]})]}),g.jsxs("div",{className:"hero-stats",children:[g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"6+"}),g.jsx("span",{className:"label",children:"Countries"})]}),g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"3,000+"}),g.jsx("span",{className:"label",children:"Investors"})]}),g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"80%"}),g.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),g.jsx("section",{className:"partners-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(j4,{className:"icon"})," Partner Companies & Recognitions"]}),g.jsx("p",{className:"muted",children:"Gold corps is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),g.jsx("ul",{className:"partner-list",children:rS.map((c,f)=>g.jsxs("li",{className:"partner-item",children:[g.jsx("span",{className:"dot"})," ",c]},f))})]})}),g.jsx("section",{className:"why-section",children:g.jsxs("div",{className:"container split",children:[g.jsxs("div",{className:"col",children:[g.jsxs("h2",{children:[g.jsx(Y4,{className:"icon"})," Why Choose Gold corps"]}),g.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),g.jsxs("div",{className:"features-grid",children:[g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Tailored Solutions"}),g.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Long-term Partnership"}),g.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Active Opportunity Sourcing"}),g.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"24/7 Investor Support"}),g.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),g.jsxs("aside",{className:"col panel",children:[g.jsx("h3",{children:"Tailored for You"}),g.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),g.jsxs("div",{className:"panel-list",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"In Your Corner"}),g.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"We Do the Work"}),g.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Round-the-clock"}),g.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),g.jsx("section",{className:"how-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(Wl,{className:"icon",id:"FAQ"})," How It Works — Simple, Transparent, Profitable"]}),g.jsxs("ol",{className:"steps",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Refer & Qualify"})," — Invite new investors who deposit $100 or more."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Acquisition"})," — Our affiliate & media teams deploy targeted campaigns ($20–$40 per qualified lead)."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Profit Split"})," — A properly qualified referral generates $60–$80 in net value; volume scales returns."]})]}),g.jsxs("div",{className:"mini-case",children:[g.jsx("strong",{children:"Example (25 referrals)"}),g.jsxs("div",{className:"case-grid",children:[g.jsxs("div",{children:[g.jsx("span",{className:"case-number",children:"$2,000"}),g.jsx("div",{className:"case-label",children:"Estimated Expense"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"case-number",children:"$6,000–$8,000"}),g.jsx("div",{className:"case-label",children:"Projected Profit"})]})]})]}),g.jsx("p",{className:"muted small",children:"Affiliate success requires marketing expertise, a tested funnel and an operating budget — all of which we provide through our partners and proven teams."})]})}),g.jsx("section",{className:"stats-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(O_,{className:"icon"})," Key Metrics & Performance"]}),g.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),g.jsx("div",{className:"stats-grid",children:iS.map((c,f)=>g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon",children:c.icon}),g.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),g.jsx("div",{className:"stat-label",children:c.label}),g.jsx("div",{className:"stat-sub",children:c.sub}),g.jsx("div",{className:"stat-desc muted",children:c.desc})]},f))})]})}),g.jsx("section",{className:"miners-section",children:g.jsxs("div",{className:"container split",children:[g.jsxs("div",{className:"col",children:[g.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),g.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites. With five years of on-the-ground experience in asset development and day-to-day operations, our teams are trained for safe, high-quality production."}),g.jsxs("ul",{className:"miner-list",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),g.jsxs("aside",{className:"col panel",children:[g.jsx("h3",{children:"Geographic Reach"}),g.jsxs("div",{className:"geo-grid",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"Latham"}),g.jsx("span",{className:"muted",children:" — Headquarters"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Africa"}),g.jsx("span",{className:"muted",children:" — Resource operations"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Asia"}),g.jsx("span",{className:"muted",children:" — Development & trading"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Europe"}),g.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"CIS"}),g.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),g.jsx("section",{className:"testimonials-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(Bh,{className:"icon",id:"testimonial"})," Investor Testimonials"]}),g.jsxs("div",{className:"test-carousel",children:[g.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+qs.length)%qs.length),"aria-label":"Previous testimonial",children:g.jsx(B4,{})}),g.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[g.jsxs("blockquote",{children:["“",qs[r].quote,"”"]}),g.jsxs("cite",{children:["— ",qs[r].name,", ",g.jsx("span",{className:"muted",children:qs[r].title})]})]}),g.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%qs.length),"aria-label":"Next testimonial",children:g.jsx(q4,{})})]})]})}),g.jsx("section",{className:"cta-section",id:"contact",children:g.jsxs("div",{className:"container cta-panel",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"lets-work",children:"Let's Work Together"}),g.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),g.jsxs("form",{className:"cta-form",onSubmit:o,children:[g.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),g.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>s(c.target.value)}),g.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),g.jsxs("footer",{className:"site-footer",children:[g.jsxs("div",{className:"container footer-grid",children:[g.jsxs("div",{children:[g.jsx("h4",{children:"Gold corps"}),g.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),g.jsxs("div",{className:"footer-links",children:[g.jsxs("h5",{children:[g.jsx("a",{className:"footer-links",href:"#",children:"Company"})," "]}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{className:"footer-links",href:"#about",children:"About"})}),g.jsx("li",{children:g.jsx("a",{className:"footer-links",href:"#contact",children:"Contact us"})}),g.jsx("li",{children:g.jsx("a",{className:"footer-links",href:"#testimonial",children:"Our testimonial"})})]})]}),g.jsxs("div",{children:[g.jsx("h5",{children:"Resources"}),g.jsxs("ul",{children:[g.jsx("li",{className:"footer-links",children:g.jsx("a",{className:"footer-links",href:"#FAQ",children:"FAQ"})}),g.jsx("li",{className:"footer-links",children:g.jsx(tr,{to:"/signup",className:"footer-links",children:"Pricing Plans"})})]})]})]}),g.jsx("div",{className:"footer-bottom",children:g.jsxs("small",{children:["© ",new Date().getFullYear()," Gold corps. All rights reserved."]})})]})]})}const oS=()=>{};var L1={};/**
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
 */const P_=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},lS=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],p=r[n++],m=((o&7)<<18|(c&63)<<12|(f&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const c=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return e.join("")},V_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,p=f?r[o+1]:0,m=o+2<r.length,y=m?r[o+2]:0,b=c>>2,x=(c&3)<<4|p>>4;let S=(p&15)<<2|y>>6,D=y&63;m||(D=64,f||(S=64)),s.push(n[b],n[x],n[S],n[D])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(P_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):lS(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],p=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const x=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||p==null||y==null||x==null)throw new cS;const S=c<<2|p>>4;if(s.push(S),y!==64){const D=p<<4&240|y>>2;if(s.push(D),x!==64){const j=y<<6&192|x;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class cS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uS=function(r){const e=P_(r);return V_.encodeByteArray(e,!0)},yh=function(r){return uS(r).replace(/\./g,"")},j_=function(r){try{return V_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fS=()=>hS().__FIREBASE_DEFAULTS__,dS=()=>{if(typeof process>"u"||typeof L1>"u")return;const r=L1.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},pS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&j_(r[1]);return e&&JSON.parse(e)},qh=()=>{try{return oS()||fS()||dS()||pS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},L_=r=>qh()?.emulatorHosts?.[r],mS=r=>{const e=L_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},U_=()=>qh()?.config,z_=r=>qh()?.[`_${r}`];/**
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
 */class gS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function _o(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function B_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function yS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[yh(JSON.stringify(n)),yh(JSON.stringify(f)),""].join(".")}const Hl={};function vS(){const r={prod:[],emulator:[]};for(const e of Object.keys(Hl))Hl[e]?r.emulator.push(e):r.prod.push(e);return r}function _S(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let U1=!1;function q_(r,e){if(typeof window>"u"||typeof document>"u"||!_o(window.location.host)||Hl[r]===e||Hl[r]||U1)return;Hl[r]=e;function n(S){return`__firebase__banner__${S}`}const s="__firebase__banner",c=vS().prod.length>0;function f(){const S=document.getElementById(s);S&&S.remove()}function p(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function m(S,D){S.setAttribute("width","24"),S.setAttribute("id",D),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{U1=!0,f()},S}function b(S,D){S.setAttribute("id",D),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function x(){const S=_S(s),D=n("text"),j=document.getElementById(D)||document.createElement("span"),z=n("learnmore"),H=document.getElementById(z)||document.createElement("a"),$=n("preprendIcon"),ie=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;p(ne),b(H,z);const ce=y();m(ie,$),ne.append(ie,j,H,ce),document.body.appendChild(ne)}c?(j.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,j.innerText="Preview backend running in this workspace."),j.setAttribute("id",D)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ES(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function bS(){const r=qh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function TS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function SS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xS(){const r=Jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function AS(){return!bS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function CS(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const IS="FirebaseError";class or extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=IS,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fc.prototype.create)}}class fc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],f=c?NS(c,s):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new or(o,p,s)}}function NS(r,e){return r.replace(DS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const DS=/\{\$([^}]+)}/g;function OS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ks(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=e[o];if(z1(c)&&z1(f)){if(!Ks(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function z1(r){return r!==null&&typeof r=="object"}/**
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
 */function dc(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ll(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Ul(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function MS(r,e){const n=new kS(r,e);return n.subscribe.bind(n)}class kS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");PS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Tp),o.error===void 0&&(o.error=Tp),o.complete===void 0&&(o.complete=Tp);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Tp(){}/**
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
 */function Dt(r){return r&&r._delegate?r._delegate:r}class $s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class VS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LS(e))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=Fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fs){return this.instances.has(e)}getOptions(e=Fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);s===p&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fs){return this.component?this.component.multipleInstances?e:Fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jS(r){return r===Fs?void 0:r}function LS(r){return r.instantiationMode==="EAGER"}/**
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
 */class US{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const zS={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},BS=Me.INFO,qS={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},FS=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=qS[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ym{constructor(e){this.name=e,this._logLevel=BS,this._logHandler=FS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const HS=(r,e)=>e.some(n=>r instanceof n);let B1,q1;function GS(){return B1||(B1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YS(){return q1||(q1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,Vp=new WeakMap,H_=new WeakMap,wp=new WeakMap,vm=new WeakMap;function QS(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Gr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&F_.set(n,r)}).catch(()=>{}),vm.set(e,r),e}function KS(r){if(Vp.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Vp.set(r,e)}let jp={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Vp.get(r);if(e==="objectStoreNames")return r.objectStoreNames||H_.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function $S(r){jp=r(jp)}function XS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Sp(this),e,...n);return H_.set(s,e.sort?e.sort():[e]),Gr(s)}:YS().includes(r)?function(...e){return r.apply(Sp(this),e),Gr(F_.get(this))}:function(...e){return Gr(r.apply(Sp(this),e))}}function WS(r){return typeof r=="function"?XS(r):(r instanceof IDBTransaction&&KS(r),HS(r,GS())?new Proxy(r,jp):r)}function Gr(r){if(r instanceof IDBRequest)return QS(r);if(wp.has(r))return wp.get(r);const e=WS(r);return e!==r&&(wp.set(r,e),vm.set(e,r)),e}const Sp=r=>vm.get(r);function ZS(r,e,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,e),p=Gr(f);return s&&f.addEventListener("upgradeneeded",m=>{s(Gr(f.result),m.oldVersion,m.newVersion,Gr(f.transaction),m)}),n&&f.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{c&&m.addEventListener("close",()=>c()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const JS=["get","getKey","getAll","getAllKeys","count"],ex=["put","add","delete","clear"],xp=new Map;function F1(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(xp.get(e))return xp.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=ex.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||JS.includes(n)))return;const c=async function(f,...p){const m=this.transaction(f,o?"readwrite":"readonly");let y=m.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),o&&m.done]))[0]};return xp.set(e,c),c}$S(r=>({...r,get:(e,n,s)=>F1(e,n)||r.get(e,n,s),has:(e,n)=>!!F1(e,n)||r.has(e,n)}));/**
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
 */class tx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nx(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nx(r){return r.getComponent()?.type==="VERSION"}const Lp="@firebase/app",H1="0.14.1";/**
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
 */const nr=new ym("@firebase/app"),ix="@firebase/app-compat",rx="@firebase/analytics-compat",sx="@firebase/analytics",ax="@firebase/app-check-compat",ox="@firebase/app-check",lx="@firebase/auth",cx="@firebase/auth-compat",ux="@firebase/database",hx="@firebase/data-connect",fx="@firebase/database-compat",dx="@firebase/functions",px="@firebase/functions-compat",mx="@firebase/installations",gx="@firebase/installations-compat",yx="@firebase/messaging",vx="@firebase/messaging-compat",_x="@firebase/performance",Ex="@firebase/performance-compat",bx="@firebase/remote-config",Tx="@firebase/remote-config-compat",wx="@firebase/storage",Sx="@firebase/storage-compat",xx="@firebase/firestore",Ax="@firebase/ai",Rx="@firebase/firestore-compat",Cx="firebase",Ix="12.1.0";/**
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
 */const Up="[DEFAULT]",Nx={[Lp]:"fire-core",[ix]:"fire-core-compat",[sx]:"fire-analytics",[rx]:"fire-analytics-compat",[ox]:"fire-app-check",[ax]:"fire-app-check-compat",[lx]:"fire-auth",[cx]:"fire-auth-compat",[ux]:"fire-rtdb",[hx]:"fire-data-connect",[fx]:"fire-rtdb-compat",[dx]:"fire-fn",[px]:"fire-fn-compat",[mx]:"fire-iid",[gx]:"fire-iid-compat",[yx]:"fire-fcm",[vx]:"fire-fcm-compat",[_x]:"fire-perf",[Ex]:"fire-perf-compat",[bx]:"fire-rc",[Tx]:"fire-rc-compat",[wx]:"fire-gcs",[Sx]:"fire-gcs-compat",[xx]:"fire-fst",[Rx]:"fire-fst-compat",[Ax]:"fire-vertex","fire-js":"fire-js",[Cx]:"fire-js-all"};/**
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
 */const vh=new Map,Dx=new Map,zp=new Map;function G1(r,e){try{r.container.addComponent(e)}catch(n){nr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function co(r){const e=r.name;if(zp.has(e))return nr.debug(`There were multiple attempts to register component ${e}.`),!1;zp.set(e,r);for(const n of vh.values())G1(n,r);for(const n of Dx.values())G1(n,r);return!0}function _m(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function cn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Ox={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new fc("app","Firebase",Ox);/**
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
 */class Mx{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=Ix;function G_(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Up,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Yr.create("bad-app-name",{appName:String(o)});if(n||(n=U_()),!n)throw Yr.create("no-options");const c=vh.get(o);if(c){if(Ks(n,c.options)&&Ks(s,c.config))return c;throw Yr.create("duplicate-app",{appName:o})}const f=new US(o);for(const m of zp.values())f.addComponent(m);const p=new Mx(n,s,f);return vh.set(o,p),p}function Y_(r=Up){const e=vh.get(r);if(!e&&r===Up&&U_())return G_();if(!e)throw Yr.create("no-app",{appName:r});return e}function Qr(r,e,n){let s=Nx[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nr.warn(f.join(" "));return}co(new $s(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kx="firebase-heartbeat-database",Px=1,Zl="firebase-heartbeat-store";let Ap=null;function Q_(){return Ap||(Ap=ZS(kx,Px,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Yr.create("idb-open",{originalErrorMessage:r.message})})),Ap}async function Vx(r){try{const n=(await Q_()).transaction(Zl),s=await n.objectStore(Zl).get(K_(r));return await n.done,s}catch(e){if(e instanceof or)nr.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e?.message});nr.warn(n.message)}}}async function Y1(r,e){try{const s=(await Q_()).transaction(Zl,"readwrite");await s.objectStore(Zl).put(e,K_(r)),await s.done}catch(n){if(n instanceof or)nr.warn(n.message);else{const s=Yr.create("idb-set",{originalErrorMessage:n?.message});nr.warn(s.message)}}}function K_(r){return`${r.name}!${r.options.appId}`}/**
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
 */const jx=1024,Lx=30;class Ux{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bx(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Q1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Lx){const o=qx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){nr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Q1(),{heartbeatsToSend:n,unsentEntries:s}=zx(this._heartbeatsCache.heartbeats),o=yh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return nr.warn(e),""}}}function Q1(){return new Date().toISOString().substring(0,10)}function zx(r,e=jx){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),K1(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),K1(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Bx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?CS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Y1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Y1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function K1(r){return yh(JSON.stringify({version:2,heartbeats:r})).length}function qx(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function Fx(r){co(new $s("platform-logger",e=>new tx(e),"PRIVATE")),co(new $s("heartbeat",e=>new Ux(e),"PRIVATE")),Qr(Lp,H1,r),Qr(Lp,H1,"esm2020"),Qr("fire-js","")}Fx("");function $_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hx=$_,X_=new fc("auth","Firebase",$_());/**
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
 */const _h=new ym("@firebase/auth");function Gx(r,...e){_h.logLevel<=Me.WARN&&_h.warn(`Auth (${Eo}): ${r}`,...e)}function rh(r,...e){_h.logLevel<=Me.ERROR&&_h.error(`Auth (${Eo}): ${r}`,...e)}/**
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
 */function jn(r,...e){throw bm(r,...e)}function Gn(r,...e){return bm(r,...e)}function Em(r,e,n){const s={...Hx(),[e]:n};return new fc("auth","Firebase",s).create(e,{appName:r.name})}function yi(r){return Em(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function W_(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&jn(r,"argument-error"),Em(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bm(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return X_.create(r,...e)}function Ee(r,e,...n){if(!r)throw bm(e,...n)}function Wi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw rh(e),new Error(e)}function ir(r,e){r||Wi(e)}/**
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
 */function Bp(){return typeof self<"u"&&self.location?.href||""}function Yx(){return $1()==="http:"||$1()==="https:"}function $1(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Qx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yx()||wS()||"connection"in navigator)?navigator.onLine:!0}function Kx(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class pc{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=ES()||SS()}get(){return Qx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tm(r,e){ir(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Z_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wx=new pc(3e4,6e4);function lr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function cr(r,e,n,s,o={}){return J_(r,o,async()=>{let c={},f={};s&&(e==="GET"?f=s:c={body:JSON.stringify(s)});const p=dc({key:r.config.apiKey,...f}).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:m,...c};return TS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&_o(r.emulatorConfig.host)&&(y.credentials="include"),Z_.fetch()(await e2(r,r.config.apiHost,n,p),y)})}async function J_(r,e,n){r._canInitEmulator=!1;const s={...$x,...e};try{const o=new Jx(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw $u(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const p=c.ok?f.errorMessage:f.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw $u(r,"credential-already-in-use",f);if(m==="EMAIL_EXISTS")throw $u(r,"email-already-in-use",f);if(m==="USER_DISABLED")throw $u(r,"user-disabled",f);const b=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Em(r,b,y);jn(r,b)}}catch(o){if(o instanceof or)throw o;jn(r,"network-request-failed",{message:String(o)})}}async function mc(r,e,n,s,o={}){const c=await cr(r,e,n,s,o);return"mfaPendingCredential"in c&&jn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function e2(r,e,n,s){const o=`${e}${n}?${s}`,c=r,f=c.config.emulator?Tm(r.config,o):`${r.config.apiScheme}://${o}`;return Xx.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function Zx(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),Wx.get())})}}function $u(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Gn(r,e,s);return o.customData._tokenResponse=n,o}function X1(r){return r!==void 0&&r.enterprise!==void 0}class eA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Zx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tA(r,e){return cr(r,"GET","/v2/recaptchaConfig",lr(r,e))}/**
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
 */async function nA(r,e){return cr(r,"POST","/v1/accounts:delete",e)}async function Eh(r,e){return cr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iA(r,e=!1){const n=Dt(r),s=await n.getIdToken(e),o=wm(s);Ee(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:Gl(Rp(o.auth_time)),issuedAtTime:Gl(Rp(o.iat)),expirationTime:Gl(Rp(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Rp(r){return Number(r)*1e3}function wm(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return rh("JWT malformed, contained fewer than 3 sections"),null;try{const o=j_(n);return o?JSON.parse(o):(rh("Failed to decode base64 JWT payload"),null)}catch(o){return rh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function W1(r){const e=wm(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Jl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof or&&rA(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function rA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class sA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gl(this.lastLoginAt),this.creationTime=Gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bh(r){const e=r.auth,n=await r.getIdToken(),s=await Jl(r,Eh(e,{idToken:n}));Ee(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?t2(o.providerUserInfo):[],f=oA(r.providerData,c),p=r.isAnonymous,m=!(r.email&&o.passwordHash)&&!f?.length,y=p?m:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new qp(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,b)}async function aA(r){const e=Dt(r);await bh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function t2(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function lA(r,e){const n=await J_(r,{},async()=>{const s=dc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await e2(r,o,"/v1/token",`key=${c}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:p,body:s};return r.emulatorConfig&&_o(r.emulatorConfig.host)&&(m.credentials="include"),Z_.fetch()(f,m)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cA(r,e){return cr(r,"POST","/v2/accounts:revokeToken",lr(r,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):W1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=W1(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await lA(e,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new ro;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),c&&(Ee(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return Wi("not implemented")}}/**
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
 */function Ur(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new sA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new qp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iA(this,e)}reload(){return aA(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await Jl(this,nA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,m=n._redirectEventId??void 0,y=n.createdAt??void 0,b=n.lastLoginAt??void 0,{uid:x,emailVerified:S,isAnonymous:D,providerData:j,stsTokenManager:z}=n;Ee(x&&z,e,"internal-error");const H=ro.fromJSON(this.name,z);Ee(typeof x=="string",e,"internal-error"),Ur(s,e.name),Ur(o,e.name),Ee(typeof S=="boolean",e,"internal-error"),Ee(typeof D=="boolean",e,"internal-error"),Ur(c,e.name),Ur(f,e.name),Ur(p,e.name),Ur(m,e.name),Ur(y,e.name),Ur(b,e.name);const $=new Hn({uid:x,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:D,photoURL:f,phoneNumber:c,tenantId:p,stsTokenManager:H,createdAt:y,lastLoginAt:b});return j&&Array.isArray(j)&&($.providerData=j.map(ie=>({...ie}))),m&&($._redirectEventId=m),$}static async _fromIdTokenResponse(e,n,s=!1){const o=new ro;o.updateFromServerResponse(n);const c=new Hn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await bh(c),c}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ee(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?t2(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,p=new ro;p.updateFromIdToken(s);const m=new Hn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new qp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(m,y),m}}/**
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
 */const Z1=new Map;function Zi(r){ir(r instanceof Function,"Expected a class definition");let e=Z1.get(r);return e?(ir(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Z1.set(r,e),e)}/**
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
 */class n2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n2.type="NONE";const J1=n2;/**
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
 */function sh(r,e,n){return`firebase:${r}:${e}:${n}`}class so{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=sh(this.userKey,o.apiKey,c),this.fullPersistenceKey=sh("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Eh(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new so(Zi(J1),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Zi(J1);const f=sh(s,e.config.apiKey,e.name);let p=null;for(const y of n)try{const b=await y._get(f);if(b){let x;if(typeof b=="string"){const S=await Eh(e,{idToken:b}).catch(()=>{});if(!S)break;x=await Hn._fromGetAccountInfoResponse(e,S,b)}else x=Hn._fromJSON(e,b);y!==c&&(p=x),c=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!m.length?new so(c,e,s):(c=m[0],p&&await c._set(f,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new so(c,e,s))}}/**
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
 */function ev(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(a2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(i2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l2(e))return"Blackberry";if(c2(e))return"Webos";if(r2(e))return"Safari";if((e.includes("chrome/")||s2(e))&&!e.includes("edge/"))return"Chrome";if(o2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function i2(r=Jt()){return/firefox\//i.test(r)}function r2(r=Jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s2(r=Jt()){return/crios\//i.test(r)}function a2(r=Jt()){return/iemobile/i.test(r)}function o2(r=Jt()){return/android/i.test(r)}function l2(r=Jt()){return/blackberry/i.test(r)}function c2(r=Jt()){return/webos/i.test(r)}function Sm(r=Jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function uA(r=Jt()){return Sm(r)&&!!window.navigator?.standalone}function hA(){return xS()&&document.documentMode===10}function u2(r=Jt()){return Sm(r)||o2(r)||c2(r)||l2(r)||/windows phone/i.test(r)||a2(r)}/**
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
 */function h2(r,e=[]){let n;switch(r){case"Browser":n=ev(Jt());break;case"Worker":n=`${ev(Jt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Eo}/${s}`}/**
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
 */class fA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((f,p)=>{try{const m=e(c);f(m)}catch(m){p(m)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function dA(r,e={}){return cr(r,"GET","/v2/passwordPolicy",lr(r,e))}/**
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
 */const pA=6;class mA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??pA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class gA{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tv(this),this.idTokenSubscription=new tv(this),this.beforeStateQueue=new fA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zi(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await so.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eh(this,{idToken:e}),s=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(cn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=s?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&p?.user&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(yi(this));const n=e?Dt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),n=new mA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fc("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await cA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zi(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Zi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(p,this,"internal-error"),p.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,o);return()=>{f=!0,m()}}else{const m=e.addObserver(n);return()=>{f=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Gx(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Wn(r){return Dt(r)}class tv{constructor(e){this.auth=e,this.observer=null,this.addObserver=MS(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yA(r){Fh=r}function f2(r){return Fh.loadJS(r)}function vA(){return Fh.recaptchaEnterpriseScript}function _A(){return Fh.gapiScript}function EA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class bA{constructor(){this.enterprise=new TA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wA="recaptcha-enterprise",d2="NO_RECAPTCHA";class SA{constructor(e){this.type=wA,this.auth=Wn(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,p)=>{tA(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new eA(m);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,f(y.siteKey)}}).catch(m=>{p(m)})})}function o(c,f,p){const m=window.grecaptcha;X1(m)?m.enterprise.ready(()=>{m.enterprise.execute(c,{action:e}).then(y=>{f(y)}).catch(()=>{f(d2)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bA().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{s(this.auth).then(p=>{if(!n&&X1(window.grecaptcha))o(p,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let m=vA();m.length!==0&&(m+=p),f2(m).then(()=>{o(p,c,f)}).catch(y=>{f(y)})}}).catch(p=>{f(p)})})}}async function nv(r,e,n,s=!1,o=!1){const c=new SA(r);let f;if(o)f=d2;else try{f=await c.verify(n)}catch{f=await c.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Th(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await nv(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await nv(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
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
 */function xA(r,e){const n=_m(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Ks(c,e??{}))return o;jn(o,"already-initialized")}return n.initialize({options:e})}function AA(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Zi);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function RA(r,e,n){const s=Wn(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=p2(e),{host:f,port:p}=CA(e),m=p===null?"":`:${p}`,y={url:`${c}//${f}${m}/`},b=Object.freeze({host:f,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(Ks(y,s.config.emulator)&&Ks(b,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=b,s.settings.appVerificationDisabledForTesting=!0,_o(f)?(B_(`${c}//${f}${m}`),q_("Auth",!0)):IA()}function p2(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function CA(r){const e=p2(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:iv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:iv(f)}}}function iv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function IA(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class xm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wi("not implemented")}_getIdTokenResponse(e){return Wi("not implemented")}_linkToIdToken(e,n){return Wi("not implemented")}_getReauthenticationResolver(e){return Wi("not implemented")}}async function NA(r,e){return cr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function DA(r,e){return mc(r,"POST","/v1/accounts:signInWithPassword",lr(r,e))}async function OA(r,e){return cr(r,"POST","/v1/accounts:sendOobCode",lr(r,e))}async function MA(r,e){return OA(r,e)}/**
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
 */async function kA(r,e){return mc(r,"POST","/v1/accounts:signInWithEmailLink",lr(r,e))}async function PA(r,e){return mc(r,"POST","/v1/accounts:signInWithEmailLink",lr(r,e))}/**
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
 */class ec extends xm{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ec(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ec(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,n,"signInWithPassword",DA);case"emailLink":return kA(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,s,"signUpPassword",NA);case"emailLink":return PA(e,{idToken:n,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ao(r,e){return mc(r,"POST","/v1/accounts:signInWithIdp",lr(r,e))}/**
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
 */const VA="http://localhost";class Xs extends xm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const f=new Xs(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ao(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:VA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dc(n)}return e}}/**
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
 */function jA(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LA(r){const e=Ll(Ul(r)).link,n=e?Ll(Ul(e)).deep_link_id:null,s=Ll(Ul(r)).deep_link_id;return(s?Ll(Ul(s)).link:null)||s||n||e||r}class Am{constructor(e){const n=Ll(Ul(e)),s=n.apiKey??null,o=n.oobCode??null,c=jA(n.mode??null);Ee(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=LA(e);try{return new Am(n)}catch{return null}}}/**
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
 */class bo{constructor(){this.providerId=bo.PROVIDER_ID}static credential(e,n){return ec._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Am.parseLink(n);return Ee(s,"argument-error"),ec._fromEmailAndCode(e,s.code,s.tenantId)}}bo.PROVIDER_ID="password";bo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gc extends Hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Br extends gc{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
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
 */class gi extends gc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gi.credential(n,s)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
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
 */class qr extends gc{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class Fr extends gc{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Fr.credential(n,s)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
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
 */async function UA(r,e){return mc(r,"POST","/v1/accounts:signUp",lr(r,e))}/**
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
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const c=await Hn._fromIdTokenResponse(e,s,o),f=rv(s);return new Ws({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=rv(s);return new Ws({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function rv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class wh extends or{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,wh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new wh(e,n,s,o)}}function m2(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?wh._fromErrorAndOperation(r,c,e,s):c})}async function zA(r,e,n=!1){const s=await Jl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ws._forOperation(r,"link",s)}/**
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
 */async function BA(r,e,n=!1){const{auth:s}=r;if(cn(s.app))return Promise.reject(yi(s));const o="reauthenticate";try{const c=await Jl(r,m2(s,o,e,r),n);Ee(c.idToken,s,"internal-error");const f=wm(c.idToken);Ee(f,s,"internal-error");const{sub:p}=f;return Ee(r.uid===p,s,"user-mismatch"),Ws._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&jn(s,"user-mismatch"),c}}/**
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
 */async function g2(r,e,n=!1){if(cn(r.app))return Promise.reject(yi(r));const s="signIn",o=await m2(r,s,e),c=await Ws._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}async function qA(r,e){return g2(Wn(r),e)}/**
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
 */async function y2(r){const e=Wn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FA(r,e,n){const s=Wn(r);await Th(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",MA)}async function HA(r,e,n){if(cn(r.app))return Promise.reject(yi(r));const s=Wn(r),f=await Th(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UA).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&y2(r),m}),p=await Ws._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function GA(r,e,n){return cn(r.app)?Promise.reject(yi(r)):qA(Dt(r),bo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&y2(r),s})}function YA(r,e,n,s){return Dt(r).onIdTokenChanged(e,n,s)}function QA(r,e,n){return Dt(r).beforeAuthStateChanged(e,n)}function v2(r,e,n,s){return Dt(r).onAuthStateChanged(e,n,s)}function KA(r){return Dt(r).signOut()}const Sh="__sak";/**
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
 */class _2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sh,"1"),this.storage.removeItem(Sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const $A=1e3,XA=10;class E2 extends _2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=u2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,p,m)=>{this.notifyListeners(f,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);hA()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XA):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E2.type="LOCAL";const WA=E2;/**
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
 */class b2 extends _2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b2.type="SESSION";const T2=b2;/**
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
 */function ZA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Gh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(f).map(async y=>y(n.origin,c)),m=await ZA(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
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
 */function Rm(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class JA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((p,m)=>{const y=Rm("",20);o.port1.start();const b=setTimeout(()=>{m(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(x){const S=x;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(S.data.response);break;default:clearTimeout(b),clearTimeout(c),m(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function vi(){return window}function e6(r){vi().location.href=r}/**
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
 */function w2(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function t6(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function n6(){return navigator?.serviceWorker?.controller||null}function i6(){return w2()?self:null}/**
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
 */const S2="firebaseLocalStorageDb",r6=1,xh="firebaseLocalStorage",x2="fbase_key";class yc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yh(r,e){return r.transaction([xh],e?"readwrite":"readonly").objectStore(xh)}function s6(){const r=indexedDB.deleteDatabase(S2);return new yc(r).toPromise()}function Fp(){const r=indexedDB.open(S2,r6);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(xh,{keyPath:x2})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(xh)?e(s):(s.close(),await s6(),e(await Fp()))})})}async function sv(r,e,n){const s=Yh(r,!0).put({[x2]:e,value:n});return new yc(s).toPromise()}async function a6(r,e){const n=Yh(r,!1).get(e),s=await new yc(n).toPromise();return s===void 0?null:s.value}function av(r,e){const n=Yh(r,!0).delete(e);return new yc(n).toPromise()}const o6=800,l6=3;class A2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>l6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(i6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await t6(),!this.activeServiceWorker)return;this.sender=new JA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||n6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fp();return await sv(e,Sh,"1"),await av(e,Sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>a6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>av(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Yh(o,!1).getAll();return new yc(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}A2.type="LOCAL";const c6=A2;new pc(3e4,6e4);/**
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
 */function Cm(r,e){return e?Zi(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Im extends xm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function u6(r){return g2(r.auth,new Im(r),r.bypassAuthState)}function h6(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),BA(n,new Im(r),r.bypassAuthState)}async function f6(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),zA(n,new Im(r),r.bypassAuthState)}/**
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
 */class R2{constructor(e,n,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:p}=e;if(f){this.reject(f);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return u6;case"linkViaPopup":case"linkViaRedirect":return f6;case"reauthViaPopup":case"reauthViaRedirect":return h6;default:jn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const d6=new pc(2e3,1e4);async function C2(r,e,n){if(cn(r.app))return Promise.reject(Gn(r,"operation-not-supported-in-this-environment"));const s=Wn(r);W_(r,e,Hh);const o=Cm(s,n);return new Hs(s,"signInViaPopup",e,o).executeNotNull()}class Hs extends R2{constructor(e,n,s,o,c){super(e,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Rm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,d6.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const p6="pendingRedirect",ah=new Map;class m6 extends R2{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ah.get(this.auth._key());if(!e){try{const s=await g6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ah.set(this.auth._key(),e)}return this.bypassAuthState||ah.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function g6(r,e){const n=N2(e),s=I2(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}async function y6(r,e){return I2(r)._set(N2(e),"true")}function v6(r,e){ah.set(r._key(),e)}function I2(r){return Zi(r._redirectPersistence)}function N2(r){return sh(p6,r.config.apiKey,r.name)}/**
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
 */function D2(r,e,n){return _6(r,e,n)}async function _6(r,e,n){if(cn(r.app))return Promise.reject(yi(r));const s=Wn(r);W_(r,e,Hh),await s._initializationPromise;const o=Cm(s,n);return await y6(o,s),o._openRedirect(s,e,"signInViaRedirect")}async function O2(r,e){return await Wn(r)._initializationPromise,M2(r,e,!1)}async function M2(r,e,n=!1){if(cn(r.app))return Promise.reject(yi(r));const s=Wn(r),o=Cm(s,e),f=await new m6(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const E6=600*1e3;class b6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!k2(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E6&&this.cachedEventUids.clear(),this.cachedEventUids.has(ov(e))}saveEventToCache(e){this.cachedEventUids.add(ov(e)),this.lastProcessedEventTime=Date.now()}}function ov(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function k2({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function T6(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k2(r);default:return!1}}/**
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
 */async function w6(r,e={}){return cr(r,"GET","/v1/projects",e)}/**
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
 */const S6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x6=/^https?/;async function A6(r){if(r.config.emulator)return;const{authorizedDomains:e}=await w6(r);for(const n of e)try{if(R6(n))return}catch{}jn(r,"unauthorized-domain")}function R6(r){const e=Bp(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!x6.test(n))return!1;if(S6.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const C6=new pc(3e4,6e4);function lv(){const r=vi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function I6(r){return new Promise((e,n)=>{function s(){lv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lv(),n(Gn(r,"network-request-failed"))},timeout:C6.get()})}if(vi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(vi().gapi?.load)s();else{const o=EA("iframefcb");return vi()[o]=()=>{gapi.load?s():n(Gn(r,"network-request-failed"))},f2(`${_A()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw oh=null,e})}let oh=null;function N6(r){return oh=oh||I6(r),oh}/**
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
 */const D6=new pc(5e3,15e3),O6="__/auth/iframe",M6="emulator/auth/iframe",k6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},P6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function V6(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Tm(e,M6):`https://${r.config.authDomain}/${O6}`,s={apiKey:e.apiKey,appName:r.name,v:Eo},o=P6.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${dc(s).slice(1)}`}async function j6(r){const e=await N6(r),n=vi().gapi;return Ee(n,r,"internal-error"),e.open({where:document.body,url:V6(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:k6,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=Gn(r,"network-request-failed"),p=vi().setTimeout(()=>{c(f)},D6.get());function m(){vi().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{c(f)})}))}/**
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
 */const L6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U6=500,z6=600,B6="_blank",q6="http://localhost";class cv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function F6(r,e,n,s=U6,o=z6){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m={...L6,width:s.toString(),height:o.toString(),top:c,left:f},y=Jt().toLowerCase();n&&(p=s2(y)?B6:n),i2(y)&&(e=e||q6,m.scrollbars="yes");const b=Object.entries(m).reduce((S,[D,j])=>`${S}${D}=${j},`,"");if(uA(y)&&p!=="_self")return H6(e||"",p),new cv(null);const x=window.open(e||"",p,b);Ee(x,r,"popup-blocked");try{x.focus()}catch{}return new cv(x)}function H6(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const G6="__/auth/handler",Y6="emulator/auth/handler",Q6=encodeURIComponent("fac");async function uv(r,e,n,s,o,c){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Eo,eventId:o};if(e instanceof Hh){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",OS(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,x]of Object.entries({}))f[b]=x}if(e instanceof gc){const b=e.getScopes().filter(x=>x!=="");b.length>0&&(f.scopes=b.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const m=await r._getAppCheckToken(),y=m?`#${Q6}=${encodeURIComponent(m)}`:"";return`${K6(r)}?${dc(p).slice(1)}${y}`}function K6({config:r}){return r.emulator?Tm(r,Y6):`https://${r.authDomain}/${G6}`}/**
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
 */const Cp="webStorageSupport";class $6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T2,this._completeRedirectFn=M2,this._overrideRedirectResult=v6}async _openPopup(e,n,s,o){ir(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await uv(e,n,s,Bp(),o);return F6(e,c,Rm())}async _openRedirect(e,n,s,o){await this._originValidation(e);const c=await uv(e,n,s,Bp(),o);return e6(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(ir(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await j6(e),s=new b6(e);return n.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cp,{type:Cp},o=>{const c=o?.[0]?.[Cp];c!==void 0&&n(!!c),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=A6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return u2()||r2()||Sm()}}const X6=$6;var hv="@firebase/auth",fv="1.11.0";/**
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
 */class W6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Z6(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J6(r){co(new $s("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;Ee(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h2(r)},y=new gA(s,o,c,m);return AA(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),co(new $s("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(s=>new W6(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qr(hv,fv,Z6(r)),Qr(hv,fv,"esm2020")}/**
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
 */const e3=300,t3=z_("authIdTokenMaxAge")||e3;let dv=null;const n3=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>t3)return;const o=n?.token;dv!==o&&(dv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function i3(r=Y_()){const e=_m(r,"auth");if(e.isInitialized())return e.getImmediate();const n=xA(r,{popupRedirectResolver:X6,persistence:[c6,WA,T2]}),s=z_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=n3(c.toString());QA(n,f,()=>f(n.currentUser)),YA(n,p=>f(p))}}const o=L_("auth");return o&&RA(n,`http://${o}`),n}function r3(){return document.getElementsByTagName("head")?.[0]??document}yA({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const c=Gn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",r3().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J6("Browser");var pv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,P2;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,A){function R(){}R.prototype=A.prototype,V.D=A.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(O,N,k){for(var I=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)I[rt-2]=arguments[rt];return A.prototype[N].apply(O,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,A,R){R||(R=0);var O=Array(16);if(typeof A=="string")for(var N=0;16>N;++N)O[N]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(N=0;16>N;++N)O[N]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=V.g[0],R=V.g[1],N=V.g[2];var k=V.g[3],I=A+(k^R&(N^k))+O[0]+3614090360&4294967295;A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[1]+3905402710&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[2]+606105819&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[3]+3250441966&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(k^R&(N^k))+O[4]+4118548399&4294967295,A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[5]+1200080426&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[6]+2821735955&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[7]+4249261313&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(k^R&(N^k))+O[8]+1770035416&4294967295,A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[9]+2336552879&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[10]+4294925233&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[11]+2304563134&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(k^R&(N^k))+O[12]+1804603682&4294967295,A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[13]+4254626195&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[14]+2792965006&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[15]+1236535329&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(N^k&(R^N))+O[1]+4129170786&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[6]+3225465664&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[11]+643717713&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[0]+3921069994&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(N^k&(R^N))+O[5]+3593408605&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[10]+38016083&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[15]+3634488961&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[4]+3889429448&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(N^k&(R^N))+O[9]+568446438&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[14]+3275163606&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[3]+4107603335&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[8]+1163531501&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(N^k&(R^N))+O[13]+2850285829&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[2]+4243563512&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[7]+1735328473&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[12]+2368359562&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(R^N^k)+O[5]+4294588738&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[8]+2272392833&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[11]+1839030562&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[14]+4259657740&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(R^N^k)+O[1]+2763975236&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[4]+1272893353&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[7]+4139469664&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[10]+3200236656&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(R^N^k)+O[13]+681279174&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[0]+3936430074&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[3]+3572445317&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[6]+76029189&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(R^N^k)+O[9]+3654602809&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[12]+3873151461&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[15]+530742520&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[2]+3299628645&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(N^(R|~k))+O[0]+4096336452&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[7]+1126891415&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[14]+2878612391&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[5]+4237533241&4294967295,R=N+(I<<21&4294967295|I>>>11),I=A+(N^(R|~k))+O[12]+1700485571&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[3]+2399980690&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[10]+4293915773&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[1]+2240044497&4294967295,R=N+(I<<21&4294967295|I>>>11),I=A+(N^(R|~k))+O[8]+1873313359&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[15]+4264355552&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[6]+2734768916&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[13]+1309151649&4294967295,R=N+(I<<21&4294967295|I>>>11),I=A+(N^(R|~k))+O[4]+4149444226&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[11]+3174756917&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[2]+718787259&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[9]+3951481745&4294967295,V.g[0]=V.g[0]+A&4294967295,V.g[1]=V.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,V.g[2]=V.g[2]+N&4294967295,V.g[3]=V.g[3]+k&4294967295}s.prototype.u=function(V,A){A===void 0&&(A=V.length);for(var R=A-this.blockSize,O=this.B,N=this.h,k=0;k<A;){if(N==0)for(;k<=R;)o(this,V,k),k+=this.blockSize;if(typeof V=="string"){for(;k<A;)if(O[N++]=V.charCodeAt(k++),N==this.blockSize){o(this,O),N=0;break}}else for(;k<A;)if(O[N++]=V[k++],N==this.blockSize){o(this,O),N=0;break}}this.h=N,this.o+=A},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var A=1;A<V.length-8;++A)V[A]=0;var R=8*this.o;for(A=V.length-8;A<V.length;++A)V[A]=R&255,R/=256;for(this.u(V),V=Array(16),A=R=0;4>A;++A)for(var O=0;32>O;O+=8)V[R++]=this.g[A]>>>O&255;return V};function c(V,A){var R=p;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=A(V)}function f(V,A){this.h=A;for(var R=[],O=!0,N=V.length-1;0<=N;N--){var k=V[N]|0;O&&k==A||(R[N]=k,O=!1)}this.g=R}var p={};function m(V){return-128<=V&&128>V?c(V,function(A){return new f([A|0],0>A?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return x;if(0>V)return H(y(-V));for(var A=[],R=1,O=0;V>=R;O++)A[O]=V/R|0,R*=4294967296;return new f(A,0)}function b(V,A){if(V.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V.charAt(0)=="-")return H(b(V.substring(1),A));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(A,8)),O=x,N=0;N<V.length;N+=8){var k=Math.min(8,V.length-N),I=parseInt(V.substring(N,N+k),A);8>k?(k=y(Math.pow(A,k)),O=O.j(k).add(y(I))):(O=O.j(R),O=O.add(y(I)))}return O}var x=m(0),S=m(1),D=m(16777216);r=f.prototype,r.m=function(){if(z(this))return-H(this).m();for(var V=0,A=1,R=0;R<this.g.length;R++){var O=this.i(R);V+=(0<=O?O:4294967296+O)*A,A*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(j(this))return"0";if(z(this))return"-"+H(this).toString(V);for(var A=y(Math.pow(V,6)),R=this,O="";;){var N=ce(R,A).g;R=$(R,N.j(A));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=N,j(R))return k+O;for(;6>k.length;)k="0"+k;O=k+O}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function j(V){if(V.h!=0)return!1;for(var A=0;A<V.g.length;A++)if(V.g[A]!=0)return!1;return!0}function z(V){return V.h==-1}r.l=function(V){return V=$(this,V),z(V)?-1:j(V)?0:1};function H(V){for(var A=V.g.length,R=[],O=0;O<A;O++)R[O]=~V.g[O];return new f(R,~V.h).add(S)}r.abs=function(){return z(this)?H(this):this},r.add=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0,N=0;N<=A;N++){var k=O+(this.i(N)&65535)+(V.i(N)&65535),I=(k>>>16)+(this.i(N)>>>16)+(V.i(N)>>>16);O=I>>>16,k&=65535,I&=65535,R[N]=I<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function $(V,A){return V.add(H(A))}r.j=function(V){if(j(this)||j(V))return x;if(z(this))return z(V)?H(this).j(H(V)):H(H(this).j(V));if(z(V))return H(this.j(H(V)));if(0>this.l(D)&&0>V.l(D))return y(this.m()*V.m());for(var A=this.g.length+V.g.length,R=[],O=0;O<2*A;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var N=0;N<V.g.length;N++){var k=this.i(O)>>>16,I=this.i(O)&65535,rt=V.i(N)>>>16,Be=V.i(N)&65535;R[2*O+2*N]+=I*Be,ie(R,2*O+2*N),R[2*O+2*N+1]+=k*Be,ie(R,2*O+2*N+1),R[2*O+2*N+1]+=I*rt,ie(R,2*O+2*N+1),R[2*O+2*N+2]+=k*rt,ie(R,2*O+2*N+2)}for(O=0;O<A;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=A;O<2*A;O++)R[O]=0;return new f(R,0)};function ie(V,A){for(;(V[A]&65535)!=V[A];)V[A+1]+=V[A]>>>16,V[A]&=65535,A++}function ne(V,A){this.g=V,this.h=A}function ce(V,A){if(j(A))throw Error("division by zero");if(j(V))return new ne(x,x);if(z(V))return A=ce(H(V),A),new ne(H(A.g),H(A.h));if(z(A))return A=ce(V,H(A)),new ne(H(A.g),A.h);if(30<V.g.length){if(z(V)||z(A))throw Error("slowDivide_ only works with positive integers.");for(var R=S,O=A;0>=O.l(V);)R=oe(R),O=oe(O);var N=me(R,1),k=me(O,1);for(O=me(O,2),R=me(R,2);!j(O);){var I=k.add(O);0>=I.l(V)&&(N=N.add(R),k=I),O=me(O,1),R=me(R,1)}return A=$(V,N.j(A)),new ne(N,A)}for(N=x;0<=V.l(A);){for(R=Math.max(1,Math.floor(V.m()/A.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),k=y(R),I=k.j(A);z(I)||0<I.l(V);)R-=O,k=y(R),I=k.j(A);j(k)&&(k=S),N=N.add(k),V=$(V,I)}return new ne(N,V)}r.A=function(V){return ce(this,V).h},r.and=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0;O<A;O++)R[O]=this.i(O)&V.i(O);return new f(R,this.h&V.h)},r.or=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0;O<A;O++)R[O]=this.i(O)|V.i(O);return new f(R,this.h|V.h)},r.xor=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0;O<A;O++)R[O]=this.i(O)^V.i(O);return new f(R,this.h^V.h)};function oe(V){for(var A=V.g.length+1,R=[],O=0;O<A;O++)R[O]=V.i(O)<<1|V.i(O-1)>>>31;return new f(R,V.h)}function me(V,A){var R=A>>5;A%=32;for(var O=V.g.length-R,N=[],k=0;k<O;k++)N[k]=0<A?V.i(k+R)>>>A|V.i(k+R+1)<<32-A:V.i(k+R);return new f(N,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,P2=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=b,Kr=f}).apply(typeof pv<"u"?pv:typeof self<"u"?self:typeof window<"u"?window:{});var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var V2,zl,j2,lh,Hp,L2,U2,z2;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,v,_){return u==Array.prototype||u==Object.prototype||(u[v]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xu=="object"&&Xu];for(var v=0;v<u.length;++v){var _=u[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,v){if(v)e:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var B=u[w];if(!(B in _))break e;_=_[B]}u=u[u.length-1],w=_[u],v=v(w),v!=w&&v!=null&&e(_,u,{configurable:!0,writable:!0,value:v})}}function c(u,v){u instanceof String&&(u+="");var _=0,w=!1,B={next:function(){if(!w&&_<u.length){var Q=_++;return{value:v(Q,u[Q]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(u){return u||function(){return c(this,function(v,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},p=this||self;function m(u){var v=typeof u;return v=v!="object"?v:u?Array.isArray(u)?"array":v:"null",v=="array"||v=="object"&&typeof u.length=="number"}function y(u){var v=typeof u;return v=="object"&&u!=null||v=="function"}function b(u,v,_){return u.call.apply(u.bind,arguments)}function x(u,v,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,w),u.apply(v,B)}}return function(){return u.apply(v,arguments)}}function S(u,v,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:x,S.apply(null,arguments)}function D(u,v){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function j(u,v){function _(){}_.prototype=v.prototype,u.aa=v.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,B,Q){for(var ae=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ae[Ve-2]=arguments[Ve];return v.prototype[B].apply(w,ae)}}function z(u){const v=u.length;if(0<v){const _=Array(v);for(let w=0;w<v;w++)_[w]=u[w];return _}return[]}function H(u,v){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(m(w)){const B=u.length||0,Q=w.length||0;u.length=B+Q;for(let ae=0;ae<Q;ae++)u[B+ae]=w[ae]}else u.push(w)}}class ${constructor(v,_){this.i=v,this.j=_,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function ie(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var oe=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function me(u,v,_){for(const w in u)v.call(_,u[w],w,u)}function V(u,v){for(const _ in u)v.call(void 0,u[_],_,u)}function A(u){const v={};for(const _ in u)v[_]=u[_];return v}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,v){let _,w;for(let B=1;B<arguments.length;B++){w=arguments[B];for(_ in w)u[_]=w[_];for(let Q=0;Q<R.length;Q++)_=R[Q],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function N(u){var v=1;u=u.split(":");const _=[];for(;0<v&&u.length;)_.push(u.shift()),v--;return u.length&&_.push(u.join(":")),_}function k(u){p.setTimeout(()=>{throw u},0)}function I(){var u=Oe;let v=null;return u.g&&(v=u.g,u.g=u.g.next,u.g||(u.h=null),v.next=null),v}class rt{constructor(){this.h=this.g=null}add(v,_){const w=Be.get();w.set(v,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Be=new $(()=>new K,u=>u.reset());class K{constructor(){this.next=this.g=this.h=null}set(v,_){this.h=v,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let se,de=!1,Oe=new rt,M=()=>{const u=p.Promise.resolve(void 0);se=()=>{u.then(te)}};var te=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){k(_)}var v=Be;v.j(u),100>v.h&&(v.h++,u.next=v.g,v.g=u)}de=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(u,v){this.type=u,this.g=this.target=v,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ye=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,v=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};p.addEventListener("test",_,v),p.removeEventListener("test",_,v)}catch{}return u})();function Ce(u,v){if(re.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=v,v=u.relatedTarget){if(oe){e:{try{ce(v.nodeName);var B=!0;break e}catch{}B=!1}B||(v=null)}}else _=="mouseover"?v=u.fromElement:_=="mouseout"&&(v=u.toElement);this.relatedTarget=v,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:we[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}j(Ce,re);var we={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),et=0;function Zn(u,v,_,w,B){this.listener=u,this.proxy=null,this.src=v,this.type=_,this.capture=!!w,this.ha=B,this.key=++et,this.da=this.fa=!1}function ur(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function xi(u){this.src=u,this.g={},this.h=0}xi.prototype.add=function(u,v,_,w,B){var Q=u.toString();u=this.g[Q],u||(u=this.g[Q]=[],this.h++);var ae=as(u,v,w,B);return-1<ae?(v=u[ae],_||(v.fa=!1)):(v=new Zn(v,this.src,Q,!!w,B),v.fa=_,u.push(v)),v};function ss(u,v){var _=v.type;if(_ in u.g){var w=u.g[_],B=Array.prototype.indexOf.call(w,v,void 0),Q;(Q=0<=B)&&Array.prototype.splice.call(w,B,1),Q&&(ur(v),u.g[_].length==0&&(delete u.g[_],u.h--))}}function as(u,v,_,w){for(var B=0;B<u.length;++B){var Q=u[B];if(!Q.da&&Q.listener==v&&Q.capture==!!_&&Q.ha==w)return B}return-1}var os="closure_lm_"+(1e6*Math.random()|0),Ro={};function Sc(u,v,_,w,B){if(Array.isArray(v)){for(var Q=0;Q<v.length;Q++)Sc(u,v[Q],_,w,B);return null}return _=xc(_),u&&u[Ot]?u.K(v,_,y(w)?!!w.capture:!1,B):Tn(u,v,_,!1,w,B)}function Tn(u,v,_,w,B,Q){if(!v)throw Error("Invalid event type");var ae=y(B)?!!B.capture:!!B,Ve=la(u);if(Ve||(u[os]=Ve=new xi(u)),_=Ve.add(v,_,w,ae,Q),_.proxy)return _;if(w=pf(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)ye||(B=ae),B===void 0&&(B=!1),u.addEventListener(v.toString(),w,B);else if(u.attachEvent)u.attachEvent(ls(v.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function pf(){function u(_){return v.call(u.src,u.listener,_)}const v=mf;return u}function Co(u,v,_,w,B){if(Array.isArray(v))for(var Q=0;Q<v.length;Q++)Co(u,v[Q],_,w,B);else w=y(w)?!!w.capture:!!w,_=xc(_),u&&u[Ot]?(u=u.i,v=String(v).toString(),v in u.g&&(Q=u.g[v],_=as(Q,_,w,B),-1<_&&(ur(Q[_]),Array.prototype.splice.call(Q,_,1),Q.length==0&&(delete u.g[v],u.h--)))):u&&(u=la(u))&&(v=u.g[v.toString()],u=-1,v&&(u=as(v,_,w,B)),(_=-1<u?v[u]:null)&&oa(_))}function oa(u){if(typeof u!="number"&&u&&!u.da){var v=u.src;if(v&&v[Ot])ss(v.i,u);else{var _=u.type,w=u.proxy;v.removeEventListener?v.removeEventListener(_,w,u.capture):v.detachEvent?v.detachEvent(ls(_),w):v.addListener&&v.removeListener&&v.removeListener(w),(_=la(v))?(ss(_,u),_.h==0&&(_.src=null,v[os]=null)):ur(u)}}}function ls(u){return u in Ro?Ro[u]:Ro[u]="on"+u}function mf(u,v){if(u.da)u=!0;else{v=new Ce(v,this);var _=u.listener,w=u.ha||u.src;u.fa&&oa(u),u=_.call(w,v)}return u}function la(u){return u=u[os],u instanceof xi?u:null}var Io="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(u){return typeof u=="function"?u:(u[Io]||(u[Io]=function(v){return u.handleEvent(v)}),u[Io])}function ut(){le.call(this),this.i=new xi(this),this.M=this,this.F=null}j(ut,le),ut.prototype[Ot]=!0,ut.prototype.removeEventListener=function(u,v,_,w){Co(this,u,v,_,w)};function Ge(u,v){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=v.type||v,typeof v=="string")v=new re(v,u);else if(v instanceof re)v.target=v.target||u;else{var B=v;v=new re(w,u),O(v,B)}if(B=!0,_)for(var Q=_.length-1;0<=Q;Q--){var ae=v.g=_[Q];B=hn(ae,w,!0,v)&&B}if(ae=v.g=u,B=hn(ae,w,!0,v)&&B,B=hn(ae,w,!1,v)&&B,_)for(Q=0;Q<_.length;Q++)ae=v.g=_[Q],B=hn(ae,w,!1,v)&&B}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,v;for(v in u.g){for(var _=u.g[v],w=0;w<_.length;w++)ur(_[w]);delete u.g[v],u.h--}}this.F=null},ut.prototype.K=function(u,v,_,w){return this.i.add(String(u),v,!1,_,w)},ut.prototype.L=function(u,v,_,w){return this.i.add(String(u),v,!0,_,w)};function hn(u,v,_,w){if(v=u.i.g[String(v)],!v)return!0;v=v.concat();for(var B=!0,Q=0;Q<v.length;++Q){var ae=v[Q];if(ae&&!ae.da&&ae.capture==_){var Ve=ae.listener,At=ae.ha||ae.src;ae.fa&&ss(u.i,ae),B=Ve.call(At,w)!==!1&&B}}return B&&!w.defaultPrevented}function Qt(u,v,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:p.setTimeout(u,v||0)}function Ac(u){u.g=Qt(()=>{u.g=null,u.i&&(u.i=!1,Ac(u))},u.l);const v=u.h;u.h=null,u.m.apply(null,v)}class gf extends le{constructor(v,_){super(),this.m=v,this.l=_,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Ac(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(u){le.call(this),this.h=u,this.g={}}j(cs,le);var us=[];function hs(u){me(u.g,function(v,_){this.g.hasOwnProperty(_)&&oa(v)},u),u.g={}}cs.prototype.N=function(){cs.aa.N.call(this),hs(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ln=p.JSON.stringify,ca=p.JSON.parse,fs=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function No(){}No.prototype.h=null;function Do(u){return u.h||(u.h=u.i())}function Oo(){}var Ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ri(){re.call(this,"d")}j(Ri,re);function Mo(){re.call(this,"c")}j(Mo,re);var Jn={},ko=null;function hr(){return ko=ko||new ut}Jn.La="serverreachability";function ua(u){re.call(this,Jn.La,u)}j(ua,re);function fr(u){const v=hr();Ge(v,new ua(v))}Jn.STAT_EVENT="statevent";function Rc(u,v){re.call(this,Jn.STAT_EVENT,u),this.stat=v}j(Rc,re);function st(u){const v=hr();Ge(v,new Rc(v,u))}Jn.Ma="timingevent";function xt(u,v){re.call(this,Jn.Ma,u),this.size=v}j(xt,re);function vt(u,v){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},v)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Po(u,v,_,w,B,Q){u.info(function(){if(u.g)if(Q)for(var ae="",Ve=Q.split("&"),At=0;At<Ve.length;At++){var je=Ve[At].split("=");if(1<je.length){var kt=je[0];je=je[1];var Rt=kt.split("_");ae=2<=Rt.length&&Rt[1]=="type"?ae+(kt+"="+je+"&"):ae+(kt+"=redacted&")}}else ae=null;else ae=Q;return"XMLHTTP REQ ("+w+") [attempt "+B+"]: "+v+`
`+_+`
`+ae})}function yf(u,v,_,w,B,Q,ae){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+B+"]: "+v+`
`+_+`
`+Q+" "+ae})}function dr(u,v,_,w){u.info(function(){return"XMLHTTP TEXT ("+v+"): "+ds(u,_)+(w?" "+w:"")})}function Cc(u,v){u.info(function(){return"TIMEOUT: "+v})}wn.prototype.info=function(){};function ds(u,v){if(!u.g)return v;if(!v)return null;try{var _=JSON.parse(v);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var B=w[1];if(Array.isArray(B)&&!(1>B.length)){var Q=B[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ae=1;ae<B.length;ae++)B[ae]=""}}}}return Ln(_)}catch{return v}}var pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ei;function ti(){}j(ti,No),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},ei=new ti;function en(u,v,_,w){this.j=u,this.i=v,this.l=_,this.R=w||1,this.U=new cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pt}function pt(){this.i=null,this.g="",this.h=!1}var Vo={},ha={};function Un(u,v,_){u.L=1,u.v=vs(fn(v)),u.m=_,u.P=!0,Ii(u,null)}function Ii(u,v){u.F=Date.now(),ps(u),u.A=fn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),qo(_.i,"t",w),u.C=0,_=u.j.J,u.h=new pt,u.g=Hc(u.j,_?v:null,!u.m),0<u.O&&(u.M=new gf(S(u.Y,u,u.g),u.O)),v=u.U,_=u.g,w=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(us[0]=B.toString()),B=us);for(var Q=0;Q<B.length;Q++){var ae=Sc(_,B[Q],w||v.handleEvent,!1,v.h||v);if(!ae)break;v.g[ae.key]=ae}v=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,v)):(u.u="GET",u.g.ea(u.A,u.u,null,v)),fr(),Po(u.i,u.u,u.A,u.l,u.R,u.m)}en.prototype.ca=function(u){u=u.target;const v=this.M;v&&Rn(u)==3?v.j():this.Y(u)},en.prototype.Y=function(u){try{if(u==this.g)e:{const Rt=Rn(this.g);var v=this.g.Ba();const ji=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Vc(this.g)))){this.J||Rt!=4||v==7||(v==8||0>=ji?fr(3):fr(2)),mr(this);var _=this.g.Z();this.X=_;t:if(Ic(this)){var w=Vc(this.g);u="";var B=w.length,Q=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),ni(this);var ae="";break t}this.h.i=new p.TextDecoder}for(v=0;v<B;v++)this.h.h=!0,u+=this.h.i.decode(w[v],{stream:!(Q&&v==B-1)});w.length=0,this.h.g+=u,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=_==200,yf(this.i,this.u,this.A,this.l,this.R,Rt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,At=this.g;if((Ve=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Ve)){var je=Ve;break t}}je=null}if(_=je)dr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ms(this,_);else{this.o=!1,this.s=3,st(12),Ut(this),ni(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<ae.length;)if(zt=Nc(this,ae),zt==ha){Rt==4&&(this.s=4,st(14),_=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Vo){this.s=4,st(15),dr(this.i,this.l,ae,"[Invalid Chunk]"),_=!1;break}else dr(this.i,this.l,zt,null),ms(this,zt);if(Ic(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||ae.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)dr(this.i,this.l,ae,"[Invalid Chunked Response]"),Ut(this),ni(this);else if(0<ae.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),As(kt),kt.M=!0,st(11))}}else dr(this.i,this.l,ae,null),ms(this,ae);Rt==4&&Ut(this),this.o&&!this.J&&(Rt==4?Bc(this.j,this):(this.o=!1,ps(this)))}else Tf(this.g),_==400&&0<ae.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Ut(this),ni(this)}}}catch{}finally{}};function Ic(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Nc(u,v){var _=u.C,w=v.indexOf(`
`,_);return w==-1?ha:(_=Number(v.substring(_,w)),isNaN(_)?Vo:(w+=1,w+_>v.length?ha:(v=v.slice(w,w+_),u.C=w+_,v)))}en.prototype.cancel=function(){this.J=!0,Ut(this)};function ps(u){u.S=Date.now()+u.I,Dc(u,u.I)}function Dc(u,v){if(u.B!=null)throw Error("WatchDog timer not null");u.B=vt(S(u.ba,u),v)}function mr(u){u.B&&(p.clearTimeout(u.B),u.B=null)}en.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Cc(this.i,this.A),this.L!=2&&(fr(),st(17)),Ut(this),this.s=2,ni(this)):Dc(this,this.S-u)};function ni(u){u.j.G==0||u.J||Bc(u.j,u)}function Ut(u){mr(u);var v=u.M;v&&typeof v.ma=="function"&&v.ma(),u.M=null,hs(u.U),u.g&&(v=u.g,u.g=null,v.abort(),v.ma())}function ms(u,v){try{var _=u.j;if(_.G!=0&&(_.g==u||jo(_.h,u))){if(!u.K&&jo(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(v)}catch{w=null}if(Array.isArray(w)&&w.length==3){var B=w;if(B[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)wa(_),ba(_);else break e;Qo(_),st(18)}}else _.za=B[1],0<_.za-_.T&&37500>B[2]&&_.F&&_.v==0&&!_.C&&(_.C=vt(S(_.Za,_),6e3));if(1>=da(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Vi(_,11)}else if((u.K||_.g==u)&&wa(_),!ie(v))for(B=_.Da.g.parse(v),v=0;v<B.length;v++){let je=B[v];if(_.T=je[0],je=je[1],_.G==2)if(je[0]=="c"){_.K=je[1],_.ia=je[2];const kt=je[3];kt!=null&&(_.la=kt,_.j.info("VER="+_.la));const Rt=je[4];Rt!=null&&(_.Aa=Rt,_.j.info("SVER="+_.Aa));const ji=je[5];ji!=null&&typeof ji=="number"&&0<ji&&(w=1.5*ji,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const zt=u.g;if(zt){const ci=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var Q=w.h;Q.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(pa(Q,Q.h),Q.h=null))}if(w.D){const $o=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(w.ya=$o,Ke(w.I,w.D,$o))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ae=u;if(w.qa=Fc(w,w.J?w.ia:null,w.W),ae.K){tn(w.h,ae);var Ve=ae,At=w.L;At&&(Ve.I=At),Ve.B&&(mr(Ve),ps(Ve)),w.g=ae}else Uc(w);0<_.i.length&&Ta(_)}else je[0]!="stop"&&je[0]!="close"||Vi(_,7);else _.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Vi(_,7):Go(_):je[0]!="noop"&&_.l&&_.l.ta(je),_.v=0)}}fr(4)}catch{}}var Oc=class{constructor(u,v){this.g=u,this.map=v}};function Ni(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function da(u){return u.h?1:u.g?u.g.size:0}function jo(u,v){return u.h?u.h==v:u.g?u.g.has(v):!1}function pa(u,v){u.g?u.g.add(v):u.h=v}function tn(u,v){u.h&&u.h==v?u.h=null:u.g&&u.g.has(v)&&u.g.delete(v)}Ni.prototype.cancel=function(){if(this.i=Lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Lo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let v=u.i;for(const _ of u.g.values())v=v.concat(_.D);return v}return z(u.i)}function vf(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var v=[],_=u.length,w=0;w<_;w++)v.push(u[w]);return v}v=[],_=0;for(w in u)v[_++]=u[w];return v}function ma(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var v=[];u=u.length;for(var _=0;_<u;_++)v.push(_);return v}v=[],_=0;for(const w in u)v[_++]=w;return v}}}function Uo(u,v){if(u.forEach&&typeof u.forEach=="function")u.forEach(v,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,v,void 0);else for(var _=ma(u),w=vf(u),B=w.length,Q=0;Q<B;Q++)v.call(void 0,w[Q],_&&_[Q],u)}var gs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _f(u,v){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),B=null;if(0<=w){var Q=u[_].substring(0,w);B=u[_].substring(w+1)}else Q=u[_];v(Q,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function _t(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _t){this.h=u.h,ys(this,u.j),this.o=u.o,this.g=u.g,gr(this,u.s),this.l=u.l;var v=u.i,_=new Oi;_.i=v.i,v.g&&(_.g=new Map(v.g),_.h=v.h),Di(this,_),this.m=u.m}else u&&(v=String(u).match(gs))?(this.h=!1,ys(this,v[1]||"",!0),this.o=Sn(v[2]||""),this.g=Sn(v[3]||"",!0),gr(this,v[4]),this.l=Sn(v[5]||"",!0),Di(this,v[6]||"",!0),this.m=Sn(v[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}_t.prototype.toString=function(){var u=[],v=this.j;v&&u.push(_s(v,zo,!0),":");var _=this.g;return(_||v=="file")&&(u.push("//"),(v=this.o)&&u.push(_s(v,zo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(_s(_,_.charAt(0)=="/"?Ef:Bo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",_s(_,ga)),u.join("")};function fn(u){return new _t(u)}function ys(u,v,_){u.j=_?Sn(v,!0):v,u.j&&(u.j=u.j.replace(/:$/,""))}function gr(u,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);u.s=v}else u.s=null}function Di(u,v,_){v instanceof Oi?(u.i=v,kc(u.i,u.h)):(_||(v=_s(v,bf)),u.i=new Oi(v,u.h))}function Ke(u,v,_){u.i.set(v,_)}function vs(u){return Ke(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sn(u,v){return u?v?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function _s(u,v,_){return typeof u=="string"?(u=encodeURI(u).replace(v,Mc),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Mc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zo=/[#\/\?@]/g,Bo=/[#\?:]/g,Ef=/[#\?]/g,bf=/[#\?@]/g,ga=/#/g;function Oi(u,v){this.h=this.g=null,this.i=u||null,this.j=!!v}function xn(u){u.g||(u.g=new Map,u.h=0,u.i&&_f(u.i,function(v,_){u.add(decodeURIComponent(v.replace(/\+/g," ")),_)}))}r=Oi.prototype,r.add=function(u,v){xn(this),this.i=null,u=ii(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(v),this.h+=1,this};function Mi(u,v){xn(u),v=ii(u,v),u.g.has(v)&&(u.i=null,u.h-=u.g.get(v).length,u.g.delete(v))}function ki(u,v){return xn(u),v=ii(u,v),u.g.has(v)}r.forEach=function(u,v){xn(this),this.g.forEach(function(_,w){_.forEach(function(B){u.call(v,B,w,this)},this)},this)},r.na=function(){xn(this);const u=Array.from(this.g.values()),v=Array.from(this.g.keys()),_=[];for(let w=0;w<v.length;w++){const B=u[w];for(let Q=0;Q<B.length;Q++)_.push(v[w])}return _},r.V=function(u){xn(this);let v=[];if(typeof u=="string")ki(this,u)&&(v=v.concat(this.g.get(ii(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)v=v.concat(u[_])}return v},r.set=function(u,v){return xn(this),this.i=null,u=ii(this,u),ki(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[v]),this.h+=1,this},r.get=function(u,v){return u?(u=this.V(u),0<u.length?String(u[0]):v):v};function qo(u,v,_){Mi(u,v),0<_.length&&(u.i=null,u.g.set(ii(u,v),z(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],v=Array.from(this.g.keys());for(var _=0;_<v.length;_++){var w=v[_];const Q=encodeURIComponent(String(w)),ae=this.V(w);for(w=0;w<ae.length;w++){var B=Q;ae[w]!==""&&(B+="="+encodeURIComponent(String(ae[w]))),u.push(B)}}return this.i=u.join("&")};function ii(u,v){return v=String(v),u.j&&(v=v.toLowerCase()),v}function kc(u,v){v&&!u.j&&(xn(u),u.i=null,u.g.forEach(function(_,w){var B=w.toLowerCase();w!=B&&(Mi(this,w),qo(this,B,_))},u)),u.j=v}function Es(u,v){const _=new wn;if(p.Image){const w=new Image;w.onload=D(An,_,"TestLoadImage: loaded",!0,v,w),w.onerror=D(An,_,"TestLoadImage: error",!1,v,w),w.onabort=D(An,_,"TestLoadImage: abort",!1,v,w),w.ontimeout=D(An,_,"TestLoadImage: timeout",!1,v,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else v(!1)}function zn(u,v){const _=new wn,w=new AbortController,B=setTimeout(()=>{w.abort(),An(_,"TestPingServer: timeout",!1,v)},1e4);fetch(u,{signal:w.signal}).then(Q=>{clearTimeout(B),Q.ok?An(_,"TestPingServer: ok",!0,v):An(_,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(B),An(_,"TestPingServer: error",!1,v)})}function An(u,v,_,w,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),w(_)}catch{}}function bs(){this.g=new fs}function ri(u,v,_){const w=_||"";try{Uo(u,function(B,Q){let ae=B;y(B)&&(ae=Ln(B)),v.push(w+Q+"="+encodeURIComponent(ae))})}catch(B){throw v.push(w+"type="+encodeURIComponent("_badmap")),B}}function yr(u){this.l=u.Ub||null,this.j=u.eb||!1}j(yr,No),yr.prototype.g=function(){return new Pi(this.l,this.j)},yr.prototype.i=(function(u){return function(){return u}})({});function Pi(u,v){ut.call(this),this.D=u,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Pi,ut),r=Pi.prototype,r.open=function(u,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=v,this.readyState=1,ai(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(v.body=u),(this.D||p).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fo(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fo(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var v=u.value?u.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!u.done}))&&(this.response=this.responseText+=v)}u.done?si(this):ai(this),this.readyState==3&&Fo(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,si(this))},r.Qa=function(u){this.g&&(this.response=u,si(this))},r.ga=function(){this.g&&si(this)};function si(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ai(u)}r.setRequestHeader=function(u,v){this.u.append(u,v)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],v=this.h.entries();for(var _=v.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=v.next();return u.join(`\r
`)};function ai(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ho(u){let v="";return me(u,function(_,w){v+=w,v+=":",v+=_,v+=`\r
`}),v}function Mt(u,v,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Ho(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Ke(u,v,_))}function Fe(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Fe,ut);var ya=/^https?$/i,Ts=["POST","PUT"];r=Fe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,v,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);v=v?v.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ei.g(),this.v=this.o?Do(this.o):Do(ei),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(v,String(u),!0),this.B=!1}catch(Q){Pc(this,Q);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var B in w)_.set(B,w[B]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const Q of w.keys())_.set(Q,w.get(Q));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(Q=>Q.toLowerCase()=="content-type"),B=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ts,v,void 0))||w||B||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ae]of _)this.g.setRequestHeader(Q,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ws(this),this.u=!0,this.g.send(u),this.u=!1}catch(Q){Pc(this,Q)}};function Pc(u,v){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=v,u.m=5,va(u),oi(u)}function va(u){u.A||(u.A=!0,Ge(u,"complete"),Ge(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ge(this,"complete"),Ge(this,"abort"),oi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},r.bb=function(){_a(this)};function _a(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)Qt(u.Ea,0,u);else if(Ge(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const ae=u.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var _;if(!(_=v)){var w;if(w=ae===0){var B=String(u.D).match(gs)[1]||null;!B&&p.self&&p.self.location&&(B=p.self.location.protocol.slice(0,-1)),w=!ya.test(B?B.toLowerCase():"")}_=w}if(_)Ge(u,"complete"),Ge(u,"success");else{u.m=6;try{var Q=2<Rn(u)?u.g.statusText:""}catch{Q=""}u.l=Q+" ["+u.Z()+"]",va(u)}}finally{oi(u)}}}}function oi(u,v){if(u.g){ws(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,v||Ge(u,"ready");try{_.onreadystatechange=w}catch{}}}function ws(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var v=this.g.responseText;return u&&v.indexOf(u)==0&&(v=v.substring(u.length)),ca(v)}};function Vc(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Tf(u){const v={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ie(u[w]))continue;var _=N(u[w]);const B=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const Q=v[B]||[];v[B]=Q,Q.push(_)}V(v,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(u,v,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||v}function Ea(u){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,u),this.cb=Ss("retryDelaySeedMs",1e4,u),this.Wa=Ss("forwardChannelMaxRetries",2,u),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(u&&u.concurrentRequestLimit),this.Da=new bs,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ea.prototype,r.la=8,r.G=1,r.connect=function(u,v,_,w){st(0),this.W=u,this.H=v||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Fc(this,null,this.W),Ta(this)};function Go(u){if(jc(u),u.G==3){var v=u.U++,_=fn(u.I);if(Ke(_,"SID",u.K),Ke(_,"RID",v),Ke(_,"TYPE","terminate"),xs(u,_),v=new en(u,u.j,v),v.L=2,v.v=vs(fn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(v.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=v.v,_=!0),_||(v.g=Hc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),ps(v)}qc(u)}function ba(u){u.g&&(As(u),u.g.cancel(),u.g=null)}function jc(u){ba(u),u.u&&(p.clearTimeout(u.u),u.u=null),wa(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Ta(u){if(!fa(u.h)&&!u.s){u.s=!0;var v=u.Ga;se||M(),de||(se(),de=!0),Oe.add(v,u),u.B=0}}function wf(u,v){return da(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=v.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=vt(S(u.Ga,u,v),Ko(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new en(this,this.j,u);let Q=this.o;if(this.S&&(Q?(Q=A(Q),O(Q,this.S)):Q=this.S),this.m!==null||this.O||(B.H=Q,Q=null),this.P)e:{for(var v=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(v+=w,4096<v){v=_;break e}if(v===4096||_===this.i.length-1){v=_+1;break e}}v=1e3}else v=1e3;v=Lc(this,B,v),_=fn(this.I),Ke(_,"RID",u),Ke(_,"CVER",22),this.D&&Ke(_,"X-HTTP-Session-Id",this.D),xs(this,_),Q&&(this.O?v="headers="+encodeURIComponent(String(Ho(Q)))+"&"+v:this.m&&Mt(_,this.m,Q)),pa(this.h,B),this.Ua&&Ke(_,"TYPE","init"),this.P?(Ke(_,"$req",v),Ke(_,"SID","null"),B.T=!0,Un(B,_,null)):Un(B,_,v),this.G=2}}else this.G==3&&(u?Yo(this,u):this.i.length==0||fa(this.h)||Yo(this))};function Yo(u,v){var _;v?_=v.l:_=u.U++;const w=fn(u.I);Ke(w,"SID",u.K),Ke(w,"RID",_),Ke(w,"AID",u.T),xs(u,w),u.m&&u.o&&Mt(w,u.m,u.o),_=new en(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),v&&(u.i=v.D.concat(u.i)),v=Lc(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),pa(u.h,_),Un(_,w,v)}function xs(u,v){u.H&&me(u.H,function(_,w){Ke(v,w,_)}),u.l&&Uo({},function(_,w){Ke(v,w,_)})}function Lc(u,v,_){_=Math.min(u.i.length,_);var w=u.l?S(u.l.Na,u.l,u):null;e:{var B=u.i;let Q=-1;for(;;){const ae=["count="+_];Q==-1?0<_?(Q=B[0].g,ae.push("ofs="+Q)):Q=0:ae.push("ofs="+Q);let Ve=!0;for(let At=0;At<_;At++){let je=B[At].g;const kt=B[At].map;if(je-=Q,0>je)Q=Math.max(0,B[At].g-100),Ve=!1;else try{ri(kt,ae,"req"+je+"_")}catch{w&&w(kt)}}if(Ve){w=ae.join("&");break e}}}return u=u.i.splice(0,_),v.D=u,w}function Uc(u){if(!u.g&&!u.u){u.Y=1;var v=u.Fa;se||M(),de||(se(),de=!0),Oe.add(v,u),u.v=0}}function Qo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=vt(S(u.Fa,u),Ko(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=vt(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),ba(this),zc(this))};function As(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function zc(u){u.g=new en(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var v=fn(u.qa);Ke(v,"RID","rpc"),Ke(v,"SID",u.K),Ke(v,"AID",u.T),Ke(v,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ke(v,"TO",u.ja),Ke(v,"TYPE","xmlhttp"),xs(u,v),u.m&&u.o&&Mt(v,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=vs(fn(v)),_.m=null,_.P=!0,Ii(_,u)}r.Za=function(){this.C!=null&&(this.C=null,ba(this),Qo(this),st(19))};function wa(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Bc(u,v){var _=null;if(u.g==v){wa(u),As(u),u.g=null;var w=2}else if(jo(u.h,v))_=v.D,tn(u.h,v),w=1;else return;if(u.G!=0){if(v.o)if(w==1){_=v.m?v.m.length:0,v=Date.now()-v.F;var B=u.B;w=hr(),Ge(w,new xt(w,_)),Ta(u)}else Uc(u);else if(B=v.s,B==3||B==0&&0<v.X||!(w==1&&wf(u,v)||w==2&&Qo(u)))switch(_&&0<_.length&&(v=u.h,v.i=v.i.concat(_)),B){case 1:Vi(u,5);break;case 4:Vi(u,10);break;case 3:Vi(u,6);break;default:Vi(u,2)}}}function Ko(u,v){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*v}function Vi(u,v){if(u.j.info("Error code "+v),v==2){var _=S(u.fb,u),w=u.Xa;const B=!w;w=new _t(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||ys(w,"https"),vs(w),B?Es(w.toString(),_):zn(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(v),qc(u),jc(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function qc(u){if(u.G=0,u.ka=[],u.l){const v=Lo(u.h);(v.length!=0||u.i.length!=0)&&(H(u.ka,v),H(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Fc(u,v,_){var w=_ instanceof _t?fn(_):new _t(_);if(w.g!="")v&&(w.g=v+"."+w.g),gr(w,w.s);else{var B=p.location;w=B.protocol,v=v?v+"."+B.hostname:B.hostname,B=+B.port;var Q=new _t(null);w&&ys(Q,w),v&&(Q.g=v),B&&gr(Q,B),_&&(Q.l=_),w=Q}return _=u.D,v=u.ya,_&&v&&Ke(w,_,v),Ke(w,"VER",u.la),xs(u,w),w}function Hc(u,v,_){if(v&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=u.Ca&&!u.pa?new Fe(new yr({eb:_})):new Fe(u.pa),v.Ha(u.J),v}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gc(){}r=Gc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Sa(){}Sa.prototype.g=function(u,v){return new nn(u,v)};function nn(u,v){ut.call(this),this.g=new Ea(v),this.l=u,this.h=v&&v.messageUrlParams||null,u=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(u?u["X-WebChannel-Content-Type"]=v.messageContentType:u={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(u?u["X-WebChannel-Client-Profile"]=v.va:u={"X-WebChannel-Client-Profile":v.va}),this.g.S=u,(u=v&&v.Sb)&&!ie(u)&&(this.g.m=u),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!ie(v)&&(this.g.D=v,u=this.h,u!==null&&v in u&&(u=this.h,v in u&&delete u[v])),this.j=new li(this)}j(nn,ut),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Go(this.g)},nn.prototype.o=function(u){var v=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ln(u),u=_);v.i.push(new Oc(v.Ya++,u)),v.G==3&&Ta(v)},nn.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,nn.aa.N.call(this)};function Yc(u){Ri.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var v=u.__sm__;if(v){e:{for(const _ in v){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,v=v!==null&&u in v?v[u]:void 0),this.data=v}else this.data=u}j(Yc,Ri);function Qc(){Mo.call(this),this.status=1}j(Qc,Mo);function li(u){this.g=u}j(li,Gc),li.prototype.ua=function(){Ge(this.g,"a")},li.prototype.ta=function(u){Ge(this.g,new Yc(u))},li.prototype.sa=function(u){Ge(this.g,new Qc)},li.prototype.ra=function(){Ge(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,z2=function(){return new Sa},U2=function(){return hr()},L2=Jn,Hp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,lh=pr,Ci.COMPLETE="complete",j2=Ci,Oo.EventType=Ai,Ai.OPEN="a",Ai.CLOSE="b",Ai.ERROR="c",Ai.MESSAGE="d",ut.prototype.listen=ut.prototype.K,zl=Oo,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,V2=Fe}).apply(typeof Xu<"u"?Xu:typeof self<"u"?self:typeof window<"u"?window:{});const mv="@firebase/firestore",gv="4.9.0";/**
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
 */let To="12.0.0";/**
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
 */const Zs=new ym("@firebase/firestore");function Ja(){return Zs.logLevel}function he(r,...e){if(Zs.logLevel<=Me.DEBUG){const n=e.map(Nm);Zs.debug(`Firestore (${To}): ${r}`,...n)}}function rr(r,...e){if(Zs.logLevel<=Me.ERROR){const n=e.map(Nm);Zs.error(`Firestore (${To}): ${r}`,...n)}}function uo(r,...e){if(Zs.logLevel<=Me.WARN){const n=e.map(Nm);Zs.warn(`Firestore (${To}): ${r}`,...n)}}function Nm(r){if(typeof r=="string")return r;try{/**
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
 */function be(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,B2(r,s,n)}function B2(r,e,n){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw rr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||B2(e,o,s)}function xe(r,e){return r}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends or{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $r{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class q2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Wt.UNAUTHENTICATED)))}shutdown(){}}class a3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class o3{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,n(m)):Promise.resolve();let c=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new $r,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const m=c;e.enqueueRetryable((async()=>{await m.promise,await o(this.currentUser)}))},p=m=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((m=>p(m))),setTimeout((()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new $r)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new q2(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class l3{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class c3{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new l3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class yv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,he("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new yv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function h3(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=h3(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=e.charAt(o[c]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function Gp(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=e.charAt(s);if(o!==c)return Ip(o)===Ip(c)?ke(o,c):Ip(o)?1:-1}return ke(r.length,e.length)}const f3=55296,d3=57343;function Ip(r){const e=r.charCodeAt(0);return e>=f3&&e<=d3}function ho(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const vv="__name__";class mi{constructor(e,n,s){n===void 0?n=0:n>e.length&&be(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&be(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return mi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mi?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const c=mi.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return ke(e.length,n.length)}static compareSegments(e,n){const s=mi.isNumericId(e),o=mi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?mi.extractNumericId(e).compare(mi.extractNumericId(n)):Gp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kr.fromString(e.substring(4,e.length-2))}}class nt extends mi{construct(e,n,s){return new nt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new nt(n)}static emptyPath(){return new nt([])}}const p3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends mi{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return p3.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vv}static keyField(){return new Gt([vv])}static fromServerFormat(e){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ue(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new ue(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(s+=p,o++):(c(),o++)}if(c(),f)throw new ue(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
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
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(nt.fromString(e))}static fromName(e){return new ge(nt.fromString(e).popFirst(5))}static empty(){return new ge(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new nt(e.slice()))}}/**
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
 */function F2(r,e,n){if(!n)throw new ue(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function m3(r,e,n,s){if(e===!0&&s===!0)throw new ue(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function _v(r){if(!ge.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ev(r){if(ge.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function H2(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Qh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":be(12329,{type:typeof r})}function Yn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qh(r);throw new ue(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function St(r,e){const n={typeString:r};return e&&(n.value=e),n}function vc(r,e){if(!H2(r))throw new ue(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ue(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const bv=-62135596800,Tv=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Tv);return new it(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<bv)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Tv}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vc(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:St("string",it._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */const tc=-1;function g3(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new Wr(o,ge.empty(),e)}function y3(r){return new Wr(r.readTime,r.key,tc)}class Wr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Wr(Se.min(),ge.empty(),tc)}static max(){return new Wr(Se.max(),ge.empty(),tc)}}function v3(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(r.documentKey,e.documentKey),n!==0?n:ke(r.largestBatchId,e.largestBatchId))}/**
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
 */const _3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function wo(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==_3)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee(((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.reject(n)}static resolve(e){return new ee(((n,s)=>{n(e)}))}static reject(e){return new ee(((n,s)=>{s(e)}))}static waitFor(e){return new ee(((n,s)=>{let o=0,c=0,f=!1;e.forEach((p=>{++o,p.next((()=>{++c,f&&c===o&&n()}),(m=>s(m)))})),f=!0,c===o&&n()}))}static or(e){let n=ee.resolve(!1);for(const s of e)n=n.next((o=>o?ee.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,c)=>{s.push(n.call(this,o,c))})),this.waitFor(s)}static mapArray(e,n){return new ee(((s,o)=>{const c=e.length,f=new Array(c);let p=0;for(let m=0;m<c;m++){const y=m;n(e[y]).next((b=>{f[y]=b,++p,p===c&&s(f)}),(b=>o(b)))}}))}static doWhile(e,n){return new ee(((s,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):s()};c()}))}}function b3(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function So(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Kh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kh.ce=-1;/**
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
 */const Om=-1;function $h(r){return r==null}function Ah(r){return r===0&&1/r==-1/0}function T3(r){return typeof r=="number"&&Number.isInteger(r)&&!Ah(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const G2="";function w3(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=wv(e)),e=S3(r.get(n),e);return wv(e)}function S3(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case G2:n+="";break;default:n+=c}}return n}function wv(r){return r+G2+""}/**
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
 */function Sv(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function is(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function Y2(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wu(this.root,e,this.comparator,!0)}}class Wu{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,s,o,c){this.key=e,this.value=n,this.color=s??Ht.RED,this.left=o??Ht.EMPTY,this.right=c??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,c){return new Ht(e??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const c=s(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Ht.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,n,s,o,c){return this}insert(e,n,s){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xv(this.data.getIterator())}getIteratorFrom(e){return new xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new En([])}unionWith(e){let n=new Nt(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class Q2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Q2("Invalid base64 string: "+c):c}})(e);return new Yt(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c})(e);return new Yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const x3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zr(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=x3.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:yt(r.seconds),nanos:yt(r.nanos)}}function yt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jr(r){return typeof r=="string"?Yt.fromBase64String(r):Yt.fromUint8Array(r)}/**
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
 */const K2="server_timestamp",$2="__type__",X2="__previous_value__",W2="__local_write_time__";function Mm(r){return(r?.mapValue?.fields||{})[$2]?.stringValue===K2}function Xh(r){const e=r.mapValue.fields[X2];return Mm(e)?Xh(e):e}function nc(r){const e=Zr(r.mapValue.fields[W2].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class A3{constructor(e,n,s,o,c,f,p,m,y,b){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=b}}const Rh="(default)";class ic{constructor(e,n){this.projectId=e,this.database=n||Rh}static empty(){return new ic("","")}get isDefaultDatabase(){return this.database===Rh}isEqual(e){return e instanceof ic&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Z2="__type__",R3="__max__",Zu={mapValue:{}},J2="__vector__",Ch="value";function es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Mm(r)?4:I3(r)?9007199254740991:C3(r)?10:11:be(28295,{value:r})}function wi(r,e){if(r===e)return!0;const n=es(r);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return nc(r).isEqual(nc(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Zr(o.timestampValue),p=Zr(c.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,c){return Jr(o.bytesValue).isEqual(Jr(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,c){return yt(o.geoPointValue.latitude)===yt(c.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(c.geoPointValue.longitude)})(r,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return yt(o.integerValue)===yt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=yt(o.doubleValue),p=yt(c.doubleValue);return f===p?Ah(f)===Ah(p):isNaN(f)&&isNaN(p)}return!1})(r,e);case 9:return ho(r.arrayValue.values||[],e.arrayValue.values||[],wi);case 10:case 11:return(function(o,c){const f=o.mapValue.fields||{},p=c.mapValue.fields||{};if(Sv(f)!==Sv(p))return!1;for(const m in f)if(f.hasOwnProperty(m)&&(p[m]===void 0||!wi(f[m],p[m])))return!1;return!0})(r,e);default:return be(52216,{left:r})}}function rc(r,e){return(r.values||[]).find((n=>wi(n,e)))!==void 0}function fo(r,e){if(r===e)return 0;const n=es(r),s=es(e);if(n!==s)return ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return(function(c,f){const p=yt(c.integerValue||c.doubleValue),m=yt(f.integerValue||f.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(r,e);case 3:return Av(r.timestampValue,e.timestampValue);case 4:return Av(nc(r),nc(e));case 5:return Gp(r.stringValue,e.stringValue);case 6:return(function(c,f){const p=Jr(c),m=Jr(f);return p.compareTo(m)})(r.bytesValue,e.bytesValue);case 7:return(function(c,f){const p=c.split("/"),m=f.split("/");for(let y=0;y<p.length&&y<m.length;y++){const b=ke(p[y],m[y]);if(b!==0)return b}return ke(p.length,m.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,f){const p=ke(yt(c.latitude),yt(f.latitude));return p!==0?p:ke(yt(c.longitude),yt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Rv(r.arrayValue,e.arrayValue);case 10:return(function(c,f){const p=c.fields||{},m=f.fields||{},y=p[Ch]?.arrayValue,b=m[Ch]?.arrayValue,x=ke(y?.values?.length||0,b?.values?.length||0);return x!==0?x:Rv(y,b)})(r.mapValue,e.mapValue);case 11:return(function(c,f){if(c===Zu.mapValue&&f===Zu.mapValue)return 0;if(c===Zu.mapValue)return 1;if(f===Zu.mapValue)return-1;const p=c.fields||{},m=Object.keys(p),y=f.fields||{},b=Object.keys(y);m.sort(),b.sort();for(let x=0;x<m.length&&x<b.length;++x){const S=Gp(m[x],b[x]);if(S!==0)return S;const D=fo(p[m[x]],y[b[x]]);if(D!==0)return D}return ke(m.length,b.length)})(r.mapValue,e.mapValue);default:throw be(23264,{he:n})}}function Av(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const n=Zr(r),s=Zr(e),o=ke(n.seconds,s.seconds);return o!==0?o:ke(n.nanos,s.nanos)}function Rv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=fo(n[o],s[o]);if(c)return c}return ke(n.length,s.length)}function po(r){return Yp(r)}function Yp(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Zr(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return Jr(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ge.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=Yp(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${Yp(n.fields[f])}`;return o+"}"})(r.mapValue):be(61005,{value:r})}function ch(r){switch(es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(r);return e?16+ch(e):16;case 5:return 2*r.stringValue.length;case 6:return Jr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,c)=>o+ch(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return is(s.fields,((c,f)=>{o+=c.length+ch(f)})),o})(r.mapValue);default:throw be(13486,{value:r})}}function Cv(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Qp(r){return!!r&&"integerValue"in r}function km(r){return!!r&&"arrayValue"in r}function Iv(r){return!!r&&"nullValue"in r}function Nv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function uh(r){return!!r&&"mapValue"in r}function C3(r){return(r?.mapValue?.fields||{})[Z2]?.stringValue===J2}function Yl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return is(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=Yl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yl(r.arrayValue.values[n]);return e}return{...r}}function I3(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===R3}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!uh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yl(n)}setAll(e){let n=Gt.emptyPath(),s={},o=[];e.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const m=this.getFieldsMap(n);this.applyChanges(m,s,o),s={},o=[],n=p.popLast()}f?s[p.lastSegment()]=Yl(f):o.push(p.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(e){const n=this.field(e.popLast());uh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];uh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){is(n,((o,c)=>e[o]=c));for(const o of s)delete e[o]}clone(){return new un(Yl(this.value))}}function eE(r){const e=[];return is(r.fields,((n,s)=>{const o=new Gt([n]);if(uh(s)){const c=eE(s.mapValue).fields;if(c.length===0)e.push(o);else for(const f of c)e.push(o.child(f))}else e.push(o)})),new En(e)}/**
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
 */class Zt{constructor(e,n,s,o,c,f,p){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=p}static newInvalidDocument(e){return new Zt(e,0,Se.min(),Se.min(),Se.min(),un.empty(),0)}static newFoundDocument(e,n,s,o){return new Zt(e,1,n,Se.min(),s,o,0)}static newNoDocument(e,n){return new Zt(e,2,n,Se.min(),Se.min(),un.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,Se.min(),Se.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ih{constructor(e,n){this.position=e,this.inclusive=n}}function Dv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const c=e[o],f=r.position[o];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=fo(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ov(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!wi(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class sc{constructor(e,n="asc"){this.field=e,this.dir=n}}function N3(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class tE{}class wt extends tE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new O3(e,n,s):n==="array-contains"?new P3(e,s):n==="in"?new V3(e,s):n==="not-in"?new j3(e,s):n==="array-contains-any"?new L3(e,s):new wt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new M3(e,s):new k3(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fo(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(fo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends tE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new $n(e,n)}matches(e){return nE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function nE(r){return r.op==="and"}function iE(r){return D3(r)&&nE(r)}function D3(r){for(const e of r.filters)if(e instanceof $n)return!1;return!0}function Kp(r){if(r instanceof wt)return r.field.canonicalString()+r.op.toString()+po(r.value);if(iE(r))return r.filters.map((e=>Kp(e))).join(",");{const e=r.filters.map((n=>Kp(n))).join(",");return`${r.op}(${e})`}}function rE(r,e){return r instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&wi(s.value,o.value)})(r,e):r instanceof $n?(function(s,o){return o instanceof $n&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((c,f,p)=>c&&rE(f,o.filters[p])),!0):!1})(r,e):void be(19439)}function sE(r){return r instanceof wt?(function(n){return`${n.field.canonicalString()} ${n.op} ${po(n.value)}`})(r):r instanceof $n?(function(n){return n.op.toString()+" {"+n.getFilters().map(sE).join(" ,")+"}"})(r):"Filter"}class O3 extends wt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class M3 extends wt{constructor(e,n){super(e,"in",n),this.keys=aE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class k3 extends wt{constructor(e,n){super(e,"not-in",n),this.keys=aE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function aE(r,e){return(e.arrayValue?.values||[]).map((n=>ge.fromName(n.referenceValue)))}class P3 extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return km(n)&&rc(n.arrayValue,this.value)}}class V3 extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&rc(this.value.arrayValue,n)}}class j3 extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!rc(this.value.arrayValue,n)}}class L3 extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!km(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>rc(this.value.arrayValue,s)))}}/**
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
 */class U3{constructor(e,n=null,s=[],o=[],c=null,f=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=p,this.Te=null}}function Mv(r,e=null,n=[],s=[],o=null,c=null,f=null){return new U3(r,e,n,s,o,c,f)}function Pm(r){const e=xe(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Kp(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),$h(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>po(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>po(s))).join(",")),e.Te=n}return e.Te}function Vm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!N3(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!rE(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Ov(r.startAt,e.startAt)&&Ov(r.endAt,e.endAt)}function $p(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class xo{constructor(e,n=null,s=[],o=[],c=null,f="F",p=null,m=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=p,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function z3(r,e,n,s,o,c,f,p){return new xo(r,e,n,s,o,c,f,p)}function Wh(r){return new xo(r)}function kv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function oE(r){return r.collectionGroup!==null}function Ql(r){const e=xe(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Nt(Gt.comparator);return f.filters.forEach((m=>{m.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new sc(c,s))})),n.has(Gt.keyField().canonicalString())||e.Ie.push(new sc(Gt.keyField(),s))}return e.Ie}function _i(r){const e=xe(r);return e.Ee||(e.Ee=B3(e,Ql(r))),e.Ee}function B3(r,e){if(r.limitType==="F")return Mv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new sc(o.field,c)}));const n=r.endAt?new Ih(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Ih(r.startAt.position,r.startAt.inclusive):null;return Mv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Xp(r,e){const n=r.filters.concat([e]);return new xo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function Wp(r,e,n){return new xo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Zh(r,e){return Vm(_i(r),_i(e))&&r.limitType===e.limitType}function lE(r){return`${Pm(_i(r))}|lt:${r.limitType}`}function eo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>sE(o))).join(", ")}]`),$h(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>po(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>po(o))).join(",")),`Target(${s})`})(_i(r))}; limitType=${r.limitType})`}function Jh(r,e){return e.isFoundDocument()&&(function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,o){for(const c of Ql(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,p,m){const y=Dv(f,p,m);return f.inclusive?y<=0:y<0})(s.startAt,Ql(s),o)||s.endAt&&!(function(f,p,m){const y=Dv(f,p,m);return f.inclusive?y>=0:y>0})(s.endAt,Ql(s),o))})(r,e)}function q3(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cE(r){return(e,n)=>{let s=!1;for(const o of Ql(r)){const c=F3(o,e,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function F3(r,e,n){const s=r.field.isKeyField()?ge.comparator(e.key,n.key):(function(c,f,p){const m=f.data.field(c),y=p.data.field(c);return m!==null&&y!==null?fo(m,y):be(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return be(19790,{direction:r.dir})}}/**
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
 */class ra{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,((n,s)=>{for(const[o,c]of s)e(o,c)}))}isEmpty(){return Y2(this.inner)}size(){return this.innerSize}}/**
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
 */const H3=new ct(ge.comparator);function sr(){return H3}const uE=new ct(ge.comparator);function Bl(...r){let e=uE;for(const n of r)e=e.insert(n.key,n);return e}function hE(r){let e=uE;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Gs(){return Kl()}function fE(){return Kl()}function Kl(){return new ra((r=>r.toString()),((r,e)=>r.isEqual(e)))}const G3=new ct(ge.comparator),Y3=new Nt(ge.comparator);function Pe(...r){let e=Y3;for(const n of r)e=e.add(n);return e}const Q3=new Nt(ke);function K3(){return Q3}/**
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
 */function jm(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ah(e)?"-0":e}}function dE(r){return{integerValue:""+r}}function $3(r,e){return T3(e)?dE(e):jm(r,e)}/**
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
 */class ef{constructor(){this._=void 0}}function X3(r,e,n){return r instanceof ac?(function(o,c){const f={fields:{[$2]:{stringValue:K2},[W2]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&Mm(c)&&(c=Xh(c)),c&&(f.fields[X2]=c),{mapValue:f}})(n,e):r instanceof oc?mE(r,e):r instanceof lc?gE(r,e):(function(o,c){const f=pE(o,c),p=Pv(f)+Pv(o.Ae);return Qp(f)&&Qp(o.Ae)?dE(p):jm(o.serializer,p)})(r,e)}function W3(r,e,n){return r instanceof oc?mE(r,e):r instanceof lc?gE(r,e):n}function pE(r,e){return r instanceof Nh?(function(s){return Qp(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class ac extends ef{}class oc extends ef{constructor(e){super(),this.elements=e}}function mE(r,e){const n=yE(e);for(const s of r.elements)n.some((o=>wi(o,s)))||n.push(s);return{arrayValue:{values:n}}}class lc extends ef{constructor(e){super(),this.elements=e}}function gE(r,e){let n=yE(e);for(const s of r.elements)n=n.filter((o=>!wi(o,s)));return{arrayValue:{values:n}}}class Nh extends ef{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Pv(r){return yt(r.integerValue||r.doubleValue)}function yE(r){return km(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Z3{constructor(e,n){this.field=e,this.transform=n}}function J3(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof oc&&o instanceof oc||s instanceof lc&&o instanceof lc?ho(s.elements,o.elements,wi):s instanceof Nh&&o instanceof Nh?wi(s.Ae,o.Ae):s instanceof ac&&o instanceof ac})(r.transform,e.transform)}class eR{constructor(e,n){this.version=e,this.transformResults=n}}class Qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class tf{}function vE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new EE(r.key,Qn.none()):new _c(r.key,r.data,Qn.none());{const n=r.data,s=un.empty();let o=new Nt(Gt.comparator);for(let c of e.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new rs(r.key,s,new En(o.toArray()),Qn.none())}}function tR(r,e,n){r instanceof _c?(function(o,c,f){const p=o.value.clone(),m=jv(o.fieldTransforms,c,f.transformResults);p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):r instanceof rs?(function(o,c,f){if(!hh(o.precondition,c))return void c.convertToUnknownDocument(f.version);const p=jv(o.fieldTransforms,c,f.transformResults),m=c.data;m.setAll(_E(o)),m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):(function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function $l(r,e,n,s){return r instanceof _c?(function(c,f,p,m){if(!hh(c.precondition,f))return p;const y=c.value.clone(),b=Lv(c.fieldTransforms,m,f);return y.setAll(b),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof rs?(function(c,f,p,m){if(!hh(c.precondition,f))return p;const y=Lv(c.fieldTransforms,m,f),b=f.data;return b.setAll(_E(c)),b.setAll(y),f.convertToFoundDocument(f.version,b).setHasLocalMutations(),p===null?null:p.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((x=>x.field)))})(r,e,n,s):(function(c,f,p){return hh(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(r,e,n)}function nR(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),c=pE(s.transform,o||null);c!=null&&(n===null&&(n=un.empty()),n.set(s.field,c))}return n||null}function Vv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ho(s,o,((c,f)=>J3(c,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class _c extends tf{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class rs extends tf{constructor(e,n,s,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function _E(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function jv(r,e,n){const s=new Map;He(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,p=e.data.field(c.field);s.set(c.field,W3(f,p,n[o]))}return s}function Lv(r,e,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,X3(c,f,e))}return s}class EE extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iR extends tf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rR{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&tR(c,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=$l(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=fE();return this.mutations.forEach((o=>{const c=e.get(o.key),f=c.overlayedDocument;let p=this.applyToLocalView(f,c.mutatedFields);p=n.has(o.key)?null:p;const m=vE(f,p);m!==null&&s.set(o.key,m),f.isValidDocument()||f.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,((n,s)=>Vv(n,s)))&&ho(this.baseMutations,e.baseMutations,((n,s)=>Vv(n,s)))}}class Lm{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return G3})();const c=e.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new Lm(e,n,s,o)}}/**
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
 */class sR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Ue;function oR(r){switch(r){case Z.OK:return be(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return be(15467,{code:r})}}function bE(r){if(r===void 0)return rr("GRPC error has no .code"),Z.UNKNOWN;switch(r){case Tt.OK:return Z.OK;case Tt.CANCELLED:return Z.CANCELLED;case Tt.UNKNOWN:return Z.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return Z.INTERNAL;case Tt.UNAVAILABLE:return Z.UNAVAILABLE;case Tt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Tt.NOT_FOUND:return Z.NOT_FOUND;case Tt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Tt.ABORTED:return Z.ABORTED;case Tt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Tt.DATA_LOSS:return Z.DATA_LOSS;default:return be(39323,{code:r})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function lR(){return new TextEncoder}/**
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
 */const cR=new Kr([4294967295,4294967295],0);function Uv(r){const e=lR().encode(r),n=new P2;return n.update(e),new Uint8Array(n.digest())}function zv(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new Kr([n,s],0),new Kr([o,c],0)]}class Um{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new ql(`Invalid padding: ${n}`);if(s<0)throw new ql(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new ql(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new ql(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Kr.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(Kr.fromNumber(s)));return o.compare(cR)===1&&(o=new Kr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Uv(e),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),f=new Um(c,o,n);return s.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const n=Uv(e),[s,o]=zv(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class ql extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nf{constructor(e,n,s,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Ec.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new nf(Se.min(),o,new ct(ke),sr(),Pe())}}class Ec{constructor(e,n,s,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ec(s,n,Pe(),Pe(),Pe())}}/**
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
 */class fh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class TE{constructor(e,n){this.targetId=e,this.Ce=n}}class wE{constructor(e,n,s=Yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Bv{constructor(){this.ve=0,this.Fe=qv(),this.Me=Yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),n=Pe(),s=Pe();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:be(38017,{changeType:c})}})),new Ec(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=qv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class uR{constructor(e){this.Ge=e,this.ze=new Map,this.je=sr(),this.Je=Ju(),this.He=Ju(),this.Ye=new ct(ke)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:be(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if($p(c))if(s===0){const f=new ge(c.path);this.et(n,f,Zt.newNoDocument(f,Se.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const p=this.ut(e),m=p?this.ct(p,e,f):1;if(m!==0){this.it(n);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,p;try{f=Jr(s).toUint8Array()}catch(m){if(m instanceof Q2)return uo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Um(f,o,c)}catch(m){return uo(m instanceof ql?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((c=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;e.mightContain(p)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,f)=>{const p=this.ot(f);if(p){if(c.current&&$p(p.target)){const m=new ge(p.target.path);this.It(m).has(f)||this.Et(f,m)||this.et(f,m,Zt.newNoDocument(m,e))}c.Be&&(n.set(f,c.ke()),c.qe())}}));let s=Pe();this.He.forEach(((c,f)=>{let p=!0;f.forEachWhile((m=>{const y=this.ot(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(c))})),this.je.forEach(((c,f)=>f.setReadTime(e)));const o=new nf(e,n,this.Ye,this.je,s);return this.je=sr(),this.Je=Ju(),this.He=Ju(),this.Ye=new ct(ke),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Bv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Nt(ke),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Nt(ke),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Bv),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ju(){return new ct(ge.comparator)}function qv(){return new ct(ge.comparator)}const hR={asc:"ASCENDING",desc:"DESCENDING"},fR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dR={and:"AND",or:"OR"};class pR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zp(r,e){return r.useProto3Json||$h(e)?e:{value:e}}function Dh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function mR(r,e){return Dh(r,e.toTimestamp())}function Ei(r){return He(!!r,49232),Se.fromTimestamp((function(n){const s=Zr(n);return new it(s.seconds,s.nanos)})(r))}function zm(r,e){return Jp(r,e).canonicalString()}function Jp(r,e){const n=(function(o){return new nt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function xE(r){const e=nt.fromString(r);return He(NE(e),10190,{key:e.toString()}),e}function em(r,e){return zm(r.databaseId,e.path)}function Np(r,e){const n=xE(e);if(n.get(1)!==r.databaseId.projectId)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ge(RE(n))}function AE(r,e){return zm(r.databaseId,e)}function gR(r){const e=xE(r);return e.length===4?nt.emptyPath():RE(e)}function tm(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function RE(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Fv(r,e,n){return{name:em(r,e),fields:n.value.mapValue.fields}}function yR(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:be(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(y,b){return y.useProto3Json?(He(b===void 0||typeof b=="string",58123),Yt.fromBase64String(b||"")):(He(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),Yt.fromUint8Array(b||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(y){const b=y.code===void 0?Z.UNKNOWN:bE(y.code);return new ue(b,y.message||"")})(f);n=new wE(s,o,c,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Np(r,s.document.name),c=Ei(s.document.updateTime),f=s.document.createTime?Ei(s.document.createTime):Se.min(),p=new un({mapValue:{fields:s.document.fields}}),m=Zt.newFoundDocument(o,c,f,p),y=s.targetIds||[],b=s.removedTargetIds||[];n=new fh(y,b,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Np(r,s.document),c=s.readTime?Ei(s.readTime):Se.min(),f=Zt.newNoDocument(o,c),p=s.removedTargetIds||[];n=new fh([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Np(r,s.document),c=s.removedTargetIds||[];n=new fh([],c,o,null)}else{if(!("filter"in e))return be(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new aR(o,c),p=s.targetId;n=new TE(p,f)}}return n}function vR(r,e){let n;if(e instanceof _c)n={update:Fv(r,e.key,e.value)};else if(e instanceof EE)n={delete:em(r,e.key)};else if(e instanceof rs)n={update:Fv(r,e.key,e.data),updateMask:RR(e.fieldMask)};else{if(!(e instanceof iR))return be(16599,{Vt:e.type});n={verify:em(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,f){const p=f.transform;if(p instanceof ac)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof oc)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof lc)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Nh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw be(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:mR(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:be(27497)})(r,e.precondition)),n}function _R(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,c){let f=o.updateTime?Ei(o.updateTime):Ei(c);return f.isEqual(Se.min())&&(f=Ei(c)),new eR(f,o.transformResults||[])})(n,e)))):[]}function ER(r,e){return{documents:[AE(r,e.path)]}}function bR(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=AE(r,o);const c=(function(y){if(y.length!==0)return IE($n.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const f=(function(y){if(y.length!==0)return y.map((b=>(function(S){return{field:to(S.field),direction:SR(S.dir)}})(b)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const p=Zp(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function TR(r){let e=gR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const b=n.from[0];b.allDescendants?o=b.collectionId:e=e.child(b.collectionId)}let c=[];n.where&&(c=(function(x){const S=CE(x);return S instanceof $n&&iE(S)?S.getFilters():[S]})(n.where));let f=[];n.orderBy&&(f=(function(x){return x.map((S=>(function(j){return new sc(no(j.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(S)))})(n.orderBy));let p=null;n.limit&&(p=(function(x){let S;return S=typeof x=="object"?x.value:x,$h(S)?null:S})(n.limit));let m=null;n.startAt&&(m=(function(x){const S=!!x.before,D=x.values||[];return new Ih(D,S)})(n.startAt));let y=null;return n.endAt&&(y=(function(x){const S=!x.before,D=x.values||[];return new Ih(D,S)})(n.endAt)),z3(e,o,f,c,p,"F",m,y)}function wR(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function CE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=no(n.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(n.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=no(n.unaryFilter.field);return wt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=no(n.unaryFilter.field);return wt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}})(r):r.fieldFilter!==void 0?(function(n){return wt.create(no(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return $n.create(n.compositeFilter.filters.map((s=>CE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return be(1026)}})(n.compositeFilter.op))})(r):be(30097,{filter:r})}function SR(r){return hR[r]}function xR(r){return fR[r]}function AR(r){return dR[r]}function to(r){return{fieldPath:r.canonicalString()}}function no(r){return Gt.fromServerFormat(r.fieldPath)}function IE(r){return r instanceof wt?(function(n){if(n.op==="=="){if(Nv(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(Iv(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Nv(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(Iv(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:xR(n.op),value:n.value}}})(r):r instanceof $n?(function(n){const s=n.getFilters().map((o=>IE(o)));return s.length===1?s[0]:{compositeFilter:{op:AR(n.op),filters:s}}})(r):be(54877,{filter:r})}function RR(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function NE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Hr{constructor(e,n,s,o,c=Se.min(),f=Se.min(),p=Yt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class CR{constructor(e){this.yt=e}}function IR(r){const e=TR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Wp(e,e.limit,"L"):e}/**
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
 */class NR{constructor(){this.Cn=new DR}addToCollectionParentIndex(e,n){return this.Cn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(Wr.min())}updateCollectionGroup(e,n,s){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class DR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Nt(nt.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(nt.comparator)).toArray()}}/**
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
 */const Hv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DE=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(DE,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class mo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new mo(0)}static cr(){return new mo(-1)}}/**
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
 */const Gv="LruGarbageCollector",OR=1048576;function Yv([r,e],[n,s]){const o=ke(r,n);return o===0?ke(e,s):o}class MR{constructor(e){this.Ir=e,this.buffer=new Nt(Yv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Yv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(Gv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){So(n)?he(Gv,"Ignoring IndexedDB error during garbage collection: ",n):await wo(n)}await this.Vr(3e5)}))}}class PR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(Kh.ce);const s=new MR(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Hv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hv):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,c,f,p,m,y;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,f=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(s=x,p=Date.now(),this.removeTargets(e,s,n)))).next((x=>(c=x,m=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(y=Date.now(),Ja()<=Me.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-b}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${c} targets in `+(m-p)+`ms
	Removed ${x} documents in `+(y-m)+`ms
Total Duration: ${y-b}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:x}))))}}function VR(r,e){return new PR(r,e)}/**
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
 */class jR{constructor(){this.changes=new ra((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ee.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class UR{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&$l(s.mutation,o,En.empty(),it.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Pe()){const o=Gs();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((c=>{let f=Bl();return c.forEach(((p,m)=>{f=f.insert(p,m.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Gs();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Pe())))}populateOverlays(e,n,s){const o=[];return s.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(e,n,s,o){let c=sr();const f=Kl(),p=(function(){return Kl()})();return n.forEach(((m,y)=>{const b=s.get(y.key);o.has(y.key)&&(b===void 0||b.mutation instanceof rs)?c=c.insert(y.key,y):b!==void 0?(f.set(y.key,b.mutation.getFieldMask()),$l(b.mutation,y,b.mutation.getFieldMask(),it.now())):f.set(y.key,En.empty())})),this.recalculateAndSaveOverlays(e,c).next((m=>(m.forEach(((y,b)=>f.set(y,b))),n.forEach(((y,b)=>p.set(y,new LR(b,f.get(y)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=Kl();let o=new ct(((f,p)=>f-p)),c=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const p of f)p.keys().forEach((m=>{const y=n.get(m);if(y===null)return;let b=s.get(m)||En.empty();b=p.applyToLocalView(y,b),s.set(m,b);const x=(o.get(p.batchId)||Pe()).add(m);o=o.insert(p.batchId,x)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),y=m.key,b=m.value,x=fE();b.forEach((S=>{if(!c.has(S)){const D=vE(n.get(S),s.get(S));D!==null&&x.set(S,D),c=c.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,x))}return ee.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-c.size):ee.resolve(Gs());let p=tc,m=c;return f.next((y=>ee.forEach(y,((b,x)=>(p<x.largestBatchId&&(p=x.largestBatchId),c.get(b)?ee.resolve():this.remoteDocumentCache.getEntry(e,b).next((S=>{m=m.insert(b,S)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,m,y,Pe()))).next((b=>({batchId:p,changes:hE(b)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next((s=>{let o=Bl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const c=n.collectionGroup;let f=Bl();return this.indexManager.getCollectionParents(e,c).next((p=>ee.forEach(p,(m=>{const y=(function(x,S){return new xo(S,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(n,m.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((b=>{b.forEach(((x,S)=>{f=f.insert(x,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,o)))).next((f=>{c.forEach(((m,y)=>{const b=y.getKey();f.get(b)===null&&(f=f.insert(b,Zt.newInvalidDocument(b)))}));let p=Bl();return f.forEach(((m,y)=>{const b=c.get(m);b!==void 0&&$l(b.mutation,y,En.empty(),it.now()),Jh(n,y)&&(p=p.insert(m,y))})),p}))}}/**
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
 */class zR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Ei(o.createTime)}})(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:IR(o.bundledQuery),readTime:Ei(o.readTime)}})(n)),ee.resolve()}}/**
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
 */class BR{constructor(){this.overlays=new ct(ge.comparator),this.qr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gs();return ee.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&s.set(o,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,c)=>{this.St(e,n,c)})),ee.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,n,s){const o=Gs(),c=n.length+1,f=new ge(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const m=p.getNext().value,y=m.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let c=new ct(((y,b)=>y-b));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let b=c.get(y.largestBatchId);b===null&&(b=Gs(),c=c.insert(y.largestBatchId,b)),b.set(y.getKey(),y)}}const p=Gs(),m=c.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach(((y,b)=>p.set(y,b))),!(p.size()>=o)););return ee.resolve(p)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new sR(n,s));let c=this.qr.get(n);c===void 0&&(c=Pe(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
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
 */class qR{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class Bm{constructor(){this.Qr=new Nt(Lt.$r),this.Ur=new Nt(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Lt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ge(new nt([])),s=new Lt(n,e),o=new Lt(n,e+1),c=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),c.push(f.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new nt([])),s=new Lt(n,e),o=new Lt(n,e+1);let c=Pe();return this.Ur.forEachInRange([s,o],(f=>{c=c.add(f.key)})),c}containsKey(e){const n=new Lt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||ke(e.Yr,n.Yr)}static Kr(e,n){return ke(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
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
 */class FR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Nt(Lt.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new rR(c,n,s,o);this.mutationQueue.push(f);for(const p of o)this.Zr=this.Zr.add(new Lt(p.key,c)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ee.resolve(f)}lookupMutationBatch(e,n){return ee.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return ee.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Om:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),o=new Lt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],(f=>{const p=this.Xr(f.Yr);c.push(p)})),ee.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Nt(ke);return n.forEach((o=>{const c=new Lt(o,0),f=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],(p=>{s=s.add(p.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const f=new Lt(new ge(c),0);let p=new Nt(ke);return this.Zr.forEachWhile((m=>{const y=m.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(p=p.add(m.Yr)),!0)}),f),ee.resolve(this.ti(p))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(n.mutations,(o=>{const c=new Lt(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Lt(n,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HR{constructor(e){this.ri=e,this.docs=(function(){return new ct(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ee.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let s=sr();return n.forEach((o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Zt.newInvalidDocument(o))})),ee.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let c=sr();const f=n.path,p=new ge(f.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:y,value:{document:b}}=m.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||v3(y3(b),s)<=0||(o.has(b.key)||Jh(n,b))&&(c=c.insert(b.key,b.mutableCopy()))}return ee.resolve(c)}getAllFromCollectionGroup(e,n,s,o){be(9500)}ii(e,n){return ee.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new GR(this)}getSize(e){return ee.resolve(this.size)}}class GR extends jR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ee.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class YR{constructor(e){this.persistence=e,this.si=new ra((n=>Pm(n)),Vm),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.oi=0,this._i=new Bm,this.targetCount=0,this.ai=mo.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ee.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new mo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.Pr(n),ee.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,s){let o=0;const c=[];return this.si.forEach(((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),ee.waitFor(c).next((()=>o))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ee.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ee.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((f=>{c.push(o.markPotentiallyOrphaned(e,f))})),ee.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ee.resolve(s)}containsKey(e,n){return ee.resolve(this._i.containsKey(n))}}/**
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
 */class OE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Kh(0),this.li=!1,this.li=!0,this.hi=new qR,this.referenceDelegate=e(this),this.Pi=new YR(this),this.indexManager=new NR,this.remoteDocumentCache=(function(o){return new HR(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new CR(n),this.Ii=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new FR(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){he("MemoryPersistence","Starting transaction:",e);const o=new QR(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class QR extends E3{constructor(e){super(),this.currentSequenceNumber=e}}class qm{constructor(e){this.persistence=e,this.Ri=new Bm,this.Vi=null}static mi(e){return new qm(e)}get fi(){if(this.Vi)return this.Vi;throw be(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const o=ge.fromPath(s);return this.gi(e,o).next((c=>{c||n.removeEntry(o,Se.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Oh{constructor(e,n){this.persistence=e,this.pi=new ra((s=>w3(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=VR(this,n)}static mi(e,n){return new Oh(e,n)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ee.forEach(this.pi,((s,o)=>this.br(e,s,o).next((c=>c?ee.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((p=>{p||(s++,c.removeEntry(f,Se.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ch(e.data.value)),n}br(e,n,s){return ee.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Fm{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Pe(),o=Pe();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Fm(e,n.fromCache,s,o)}}/**
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
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $R{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return AS()?8:b3(Jt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const c={result:null};return this.ys(e,n).next((f=>{c.result=f})).next((()=>{if(!c.result)return this.ws(e,n,o,s).next((f=>{c.result=f}))})).next((()=>{if(c.result)return;const f=new KR;return this.Ss(e,n,f).next((p=>{if(c.result=p,this.Vs)return this.bs(e,n,f,p.size)}))})).next((()=>c.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(Ja()<=Me.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Ja()<=Me.DEBUG&&he("QueryEngine","Query:",eo(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ja()<=Me.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(n))):ee.resolve())}ys(e,n){if(kv(n))return ee.resolve(null);let s=_i(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=Wp(n,null,"F"),s=_i(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const f=Pe(...c);return this.ps.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,s).next((m=>{const y=this.Ds(n,p);return this.Cs(n,y,f,m.readTime)?this.ys(e,Wp(n,null,"F")):this.vs(e,y,n,m)}))))})))))}ws(e,n,s,o){return kv(n)||o.isEqual(Se.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((c=>{const f=this.Ds(n,c);return this.Cs(n,f,s,o)?ee.resolve(null):(Ja()<=Me.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(n)),this.vs(e,f,n,g3(o,tc)).next((p=>p)))}))}Ds(e,n){let s=new Nt(cE(e));return n.forEach(((o,c)=>{Jh(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,s){return Ja()<=Me.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",eo(n)),this.ps.getDocumentsMatchingQuery(e,n,Wr.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((c=>(n.forEach((f=>{c=c.insert(f.key,f)})),c)))}}/**
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
 */const Hm="LocalStore",XR=3e8;class WR{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ct(ke),this.xs=new ra((c=>Pm(c)),Vm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function ZR(r,e,n,s){return new WR(r,e,n,s)}async function ME(r,e){const n=xe(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const f=[],p=[];let m=Pe();for(const y of o){f.push(y.batchId);for(const b of y.mutations)m=m.add(b.key)}for(const y of c){p.push(y.batchId);for(const b of y.mutations)m=m.add(b.key)}return n.localDocuments.getDocuments(s,m).next((y=>({Ls:y,removedBatchIds:f,addedBatchIds:p})))}))}))}function JR(r,e){const n=xe(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,m,y,b){const x=y.batch,S=x.keys();let D=ee.resolve();return S.forEach((j=>{D=D.next((()=>b.getEntry(m,j))).next((z=>{const H=y.docVersions.get(j);He(H!==null,48541),z.version.compareTo(H)<0&&(x.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),b.addEntry(z)))}))})),D.next((()=>p.mutationQueue.removeMutationBatch(m,x)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let m=Pe();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(m=m.add(p.batch.mutations[y].key));return m})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function kE(r){const e=xe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function e5(r,e){const n=xe(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];e.targetChanges.forEach(((b,x)=>{const S=o.get(x);if(!S)return;p.push(n.Pi.removeMatchingKeys(c,b.removedDocuments,x).next((()=>n.Pi.addMatchingKeys(c,b.addedDocuments,x))));let D=S.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(x)!==null?D=D.withResumeToken(Yt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):b.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(b.resumeToken,s)),o=o.insert(x,D),(function(z,H,$){return z.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=XR?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(S,D,b)&&p.push(n.Pi.updateTargetData(c,D))}));let m=sr(),y=Pe();if(e.documentUpdates.forEach((b=>{e.resolvedLimboDocuments.has(b)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(c,b))})),p.push(t5(c,f,e.documentUpdates).next((b=>{m=b.ks,y=b.qs}))),!s.isEqual(Se.min())){const b=n.Pi.getLastRemoteSnapshotVersion(c).next((x=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));p.push(b)}return ee.waitFor(p).next((()=>f.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,m,y))).next((()=>m))})).then((c=>(n.Ms=o,c)))}function t5(r,e,n){let s=Pe(),o=Pe();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let f=sr();return n.forEach(((p,m)=>{const y=c.get(p);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Se.min())?(e.removeEntry(p,m.readTime),f=f.insert(p,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),f=f.insert(p,m)):he(Hm,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",m.version)})),{ks:f,qs:o}}))}function n5(r,e){const n=xe(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Om),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function i5(r,e){const n=xe(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((c=>c?(o=c,ee.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Hr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function nm(r,e,n){const s=xe(r),o=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!So(f))throw f;he(Hm,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function Qv(r,e,n){const s=xe(r);let o=Se.min(),c=Pe();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(m,y,b){const x=xe(m),S=x.xs.get(b);return S!==void 0?ee.resolve(x.Ms.get(S)):x.Pi.getTargetData(y,b)})(s,f,_i(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,p.targetId).next((m=>{c=m}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Se.min(),n?c:Pe()))).next((p=>(r5(s,q3(e),p),{documents:p,Qs:c})))))}function r5(r,e,n){let s=r.Os.get(e)||Se.min();n.forEach(((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class Kv{constructor(){this.activeTargetIds=K3()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class s5{constructor(){this.Mo=new Kv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Kv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class a5{Oo(e){}shutdown(){}}/**
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
 */const $v="ConnectivityMonitor";class Xv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he($v,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he($v,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eh=null;function im(){return eh===null?eh=(function(){return 268435456+Math.round(2147483648*Math.random())})():eh++,"0x"+eh.toString(16)}/**
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
 */const Dp="RestConnection",o5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class l5{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Rh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,c){const f=im(),p=this.zo(e,n.toUriEncodedString());he(Dp,`Sending RPC '${e}' ${f}:`,p,s);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,o,c);const{host:y}=new URL(p),b=_o(y);return this.Jo(e,p,m,s,b).then((x=>(he(Dp,`Received RPC '${e}' ${f}: `,x),x)),(x=>{throw uo(Dp,`RPC '${e}' ${f} failed with error: `,x,"url: ",p,"request:",s),x}))}Ho(e,n,s,o,c,f){return this.Go(e,n,s,o,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),s&&s.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const s=o5[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class c5{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Xt="WebChannelConnection";class u5 extends l5{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,c){const f=im();return new Promise(((p,m)=>{const y=new V2;y.setWithCredentials(!0),y.listenOnce(j2.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case lh.NO_ERROR:const x=y.getResponseJson();he(Xt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(x)),p(x);break;case lh.TIMEOUT:he(Xt,`RPC '${e}' ${f} timed out`),m(new ue(Z.DEADLINE_EXCEEDED,"Request time out"));break;case lh.HTTP_ERROR:const S=y.getStatus();if(he(Xt,`RPC '${e}' ${f} failed with status:`,S,"response text:",y.getResponseText()),S>0){let D=y.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D?.error;if(j&&j.status&&j.message){const z=(function($){const ie=$.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN})(j.status);m(new ue(z,j.message))}else m(new ue(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ue(Z.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he(Xt,`RPC '${e}' ${f} completed.`)}}));const b=JSON.stringify(o);he(Xt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",b,s,15)}))}T_(e,n,s){const o=im(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=z2(),p=U2(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,n,s),m.encodeInitMessageHeaders=!0;const b=c.join("");he(Xt,`Creating RPC '${e}' stream ${o}: ${b}`,m);const x=f.createWebChannel(b,m);this.I_(x);let S=!1,D=!1;const j=new c5({Yo:H=>{D?he(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(S||(he(Xt,`Opening RPC '${e}' stream ${o} transport.`),x.open(),S=!0),he(Xt,`RPC '${e}' stream ${o} sending:`,H),x.send(H))},Zo:()=>x.close()}),z=(H,$,ie)=>{H.listen($,(ne=>{try{ie(ne)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return z(x,zl.EventType.OPEN,(()=>{D||(he(Xt,`RPC '${e}' stream ${o} transport opened.`),j.o_())})),z(x,zl.EventType.CLOSE,(()=>{D||(D=!0,he(Xt,`RPC '${e}' stream ${o} transport closed`),j.a_(),this.E_(x))})),z(x,zl.EventType.ERROR,(H=>{D||(D=!0,uo(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),j.a_(new ue(Z.UNAVAILABLE,"The operation could not be completed")))})),z(x,zl.EventType.MESSAGE,(H=>{if(!D){const $=H.data[0];He(!!$,16349);const ie=$,ne=ie?.error||ie[0]?.error;if(ne){he(Xt,`RPC '${e}' stream ${o} received error:`,ne);const ce=ne.status;let oe=(function(A){const R=Tt[A];if(R!==void 0)return bE(R)})(ce),me=ne.message;oe===void 0&&(oe=Z.INTERNAL,me="Unknown error status: "+ce+" with message "+ne.message),D=!0,j.a_(new ue(oe,me)),x.close()}else he(Xt,`RPC '${e}' stream ${o} received:`,$),j.u_($)}})),z(p,L2.STAT_EVENT,(H=>{H.stat===Hp.PROXY?he(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===Hp.NOPROXY&&he(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.__()}),0),j}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Op(){return typeof document<"u"?document:null}/**
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
 */function rf(r){return new pR(r,!0)}/**
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
 */class PE{constructor(e,n,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wv="PersistentStream";class VE{constructor(e,n,s,o,c,f,p,m){this.Mi=e,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new PE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ue(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(Wv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(he(Wv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class h5 extends VE{constructor(e,n,s,o,c,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=yR(this.serializer,e),s=(function(c){if(!("targetChange"in c))return Se.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Se.min():f.readTime?Ei(f.readTime):Se.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=tm(this.serializer),n.addTarget=(function(c,f){let p;const m=f.target;if(p=$p(m)?{documents:ER(c,m)}:{query:bR(c,m).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=SE(c,f.resumeToken);const y=Zp(c,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(Se.min())>0){p.readTime=Dh(c,f.snapshotVersion.toTimestamp());const y=Zp(c,f.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=wR(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=tm(this.serializer),n.removeTarget=e,this.q_(n)}}class f5 extends VE{constructor(e,n,s,o,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=_R(e.writeResults,e.commitTime),s=Ei(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=tm(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>vR(this.serializer,s)))};this.q_(n)}}/**
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
 */class d5{}class p5 extends d5{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Go(e,Jp(n,s),o,c,f))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Z.UNKNOWN,c.toString())}))}Ho(e,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.Ho(e,Jp(n,s),o,f,p,c))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ue(Z.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class m5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rr(n),this.aa=!1):he("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Js="RemoteStore";class g5{constructor(e,n,s,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{sa(this)&&(he(Js,"Restarting streams for network reachability change."),await(async function(m){const y=xe(m);y.Ea.add(4),await bc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await sf(y)})(this))}))})),this.Ra=new m5(s,o)}}async function sf(r){if(sa(r))for(const e of r.da)await e(!0)}async function bc(r){for(const e of r.da)await e(!1)}function jE(r,e){const n=xe(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Km(n)?Qm(n):Ao(n).O_()&&Ym(n,e))}function Gm(r,e){const n=xe(r),s=Ao(n);n.Ia.delete(e),s.O_()&&LE(n,e),n.Ia.size===0&&(s.O_()?s.L_():sa(n)&&n.Ra.set("Unknown"))}function Ym(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(r).Y_(e)}function LE(r,e){r.Va.Ue(e),Ao(r).Z_(e)}function Qm(r){r.Va=new uR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Ao(r).start(),r.Ra.ua()}function Km(r){return sa(r)&&!Ao(r).x_()&&r.Ia.size>0}function sa(r){return xe(r).Ea.size===0}function UE(r){r.Va=void 0}async function y5(r){r.Ra.set("Online")}async function v5(r){r.Ia.forEach(((e,n)=>{Ym(r,e)}))}async function _5(r,e){UE(r),Km(r)?(r.Ra.ha(e),Qm(r)):r.Ra.set("Unknown")}async function E5(r,e,n){if(r.Ra.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await(async function(o,c){const f=c.cause;for(const p of c.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.Va.removeTarget(p))})(r,e)}catch(s){he(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mh(r,s)}else if(e instanceof fh?r.Va.Ze(e):e instanceof TE?r.Va.st(e):r.Va.tt(e),!n.isEqual(Se.min()))try{const s=await kE(r.localStore);n.compareTo(s)>=0&&await(function(c,f){const p=c.Va.Tt(f);return p.targetChanges.forEach(((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const b=c.Ia.get(y);b&&c.Ia.set(y,b.withResumeToken(m.resumeToken,f))}})),p.targetMismatches.forEach(((m,y)=>{const b=c.Ia.get(m);if(!b)return;c.Ia.set(m,b.withResumeToken(Yt.EMPTY_BYTE_STRING,b.snapshotVersion)),LE(c,m);const x=new Hr(b.target,m,y,b.sequenceNumber);Ym(c,x)})),c.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){he(Js,"Failed to raise snapshot:",s),await Mh(r,s)}}async function Mh(r,e,n){if(!So(e))throw e;r.Ea.add(1),await bc(r),r.Ra.set("Offline"),n||(n=()=>kE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{he(Js,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await sf(r)}))}function zE(r,e){return e().catch((n=>Mh(r,n,e)))}async function af(r){const e=xe(r),n=ts(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Om;for(;b5(e);)try{const o=await n5(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,T5(e,o)}catch(o){await Mh(e,o)}BE(e)&&qE(e)}function b5(r){return sa(r)&&r.Ta.length<10}function T5(r,e){r.Ta.push(e);const n=ts(r);n.O_()&&n.X_&&n.ea(e.mutations)}function BE(r){return sa(r)&&!ts(r).x_()&&r.Ta.length>0}function qE(r){ts(r).start()}async function w5(r){ts(r).ra()}async function S5(r){const e=ts(r);for(const n of r.Ta)e.ea(n.mutations)}async function x5(r,e,n){const s=r.Ta.shift(),o=Lm.from(s,e,n);await zE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await af(r)}async function A5(r,e){e&&ts(r).X_&&await(async function(s,o){if((function(f){return oR(f)&&f!==Z.ABORTED})(o.code)){const c=s.Ta.shift();ts(s).B_(),await zE(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o))),await af(s)}})(r,e),BE(r)&&qE(r)}async function Zv(r,e){const n=xe(r);n.asyncQueue.verifyOperationInProgress(),he(Js,"RemoteStore received new credentials");const s=sa(n);n.Ea.add(3),await bc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await sf(n)}async function R5(r,e){const n=xe(r);e?(n.Ea.delete(2),await sf(n)):e||(n.Ea.add(2),await bc(n),n.Ra.set("Unknown"))}function Ao(r){return r.ma||(r.ma=(function(n,s,o){const c=xe(n);return c.sa(),new h5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:y5.bind(null,r),t_:v5.bind(null,r),r_:_5.bind(null,r),H_:E5.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),Km(r)?Qm(r):r.Ra.set("Unknown")):(await r.ma.stop(),UE(r))}))),r.ma}function ts(r){return r.fa||(r.fa=(function(n,s,o){const c=xe(n);return c.sa(),new f5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:w5.bind(null,r),r_:A5.bind(null,r),ta:S5.bind(null,r),na:x5.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await af(r)):(await r.fa.stop(),r.Ta.length>0&&(he(Js,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class $m{constructor(e,n,s,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,c){const f=Date.now()+s,p=new $m(e,n,f,o,c);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(r,e){if(rr("AsyncQueue",`${e}: ${r}`),So(r))return new ue(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Bl(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Jv{constructor(){this.ga=new ct(ge.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):be(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class go{constructor(e,n,s,o,c,f,p,m,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,c){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new go(e,n,oo.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class C5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class I5{constructor(){this.queries=e_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=xe(n),c=o.queries;o.queries=e_(),c.forEach(((f,p)=>{for(const m of p.Sa)m.onError(s)}))})(this,new ue(Z.ABORTED,"Firestore shutting down"))}}function e_(){return new ra((r=>lE(r)),Zh)}async function FE(r,e){const n=xe(r);let s=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(s=2):(c=new C5,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=Xm(f,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(p)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&Wm(n)}async function HE(r,e){const n=xe(r),s=e.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(e);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function N5(r,e){const n=xe(r);let s=!1;for(const o of e){const c=o.query,f=n.queries.get(c);if(f){for(const p of f.Sa)p.Fa(o)&&(s=!0);f.wa=o}}s&&Wm(n)}function D5(r,e,n){const s=xe(r),o=s.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(e)}function Wm(r){r.Ca.forEach((e=>{e.next()}))}var rm,t_;(t_=rm||(rm={})).Ma="default",t_.Cache="cache";class GE{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==rm.Cache}}/**
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
 */class YE{constructor(e){this.key=e}}class QE{constructor(e){this.key=e}}class O5{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=cE(e),this.tu=new oo(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Jv,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((b,x)=>{const S=o.get(b),D=Jh(this.query,x)?x:null,j=!!S&&this.mutatedKeys.has(S.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let H=!1;S&&D?S.data.isEqual(D.data)?j!==z&&(s.track({type:3,doc:D}),H=!0):this.su(S,D)||(s.track({type:2,doc:D}),H=!0,(m&&this.eu(D,m)>0||y&&this.eu(D,y)<0)&&(p=!0)):!S&&D?(s.track({type:0,doc:D}),H=!0):S&&!D&&(s.track({type:1,doc:S}),H=!0,(m||y)&&(p=!0)),H&&(D?(f=f.add(D),c=z?c.add(b):c.delete(b)):(f=f.delete(b),c=c.delete(b)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const b=this.query.limitType==="F"?f.last():f.first();f=f.delete(b.key),c=c.delete(b.key),s.track({type:1,doc:b})}return{tu:f,iu:s,Cs:p,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((b,x)=>(function(D,j){const z=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Rt:H})}};return z(D)-z(j)})(b.type,x.type)||this.eu(b.doc,x.doc))),this.ou(s),o=o??!1;const p=n&&!o?this._u():[],m=this.Xa.size===0&&this.current&&!o?1:0,y=m!==this.Za;return this.Za=m,f.length!==0||y?{snapshot:new go(this.query,e.tu,c,f,e.mutatedKeys,m===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new QE(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new YE(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return go.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zm="SyncEngine";class M5{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class k5{constructor(e){this.key=e,this.hu=!1}}class P5{constructor(e,n,s,o,c,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ra((p=>lE(p)),Zh),this.Iu=new Map,this.Eu=new Set,this.du=new ct(ge.comparator),this.Au=new Map,this.Ru=new Bm,this.Vu={},this.mu=new Map,this.fu=mo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function V5(r,e,n=!0){const s=JE(r);let o;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await KE(s,e,n,!0),o}async function j5(r,e){const n=JE(r);await KE(n,e,!0,!1)}async function KE(r,e,n,s){const o=await i5(r.localStore,_i(e)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let p;return s&&(p=await L5(r,e,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&jE(r.remoteStore,o),p}async function L5(r,e,n,s,o){r.pu=(x,S,D)=>(async function(z,H,$,ie){let ne=H.view.ru($);ne.Cs&&(ne=await Qv(z.localStore,H.query,!1).then((({documents:V})=>H.view.ru(V,ne))));const ce=ie&&ie.targetChanges.get(H.targetId),oe=ie&&ie.targetMismatches.get(H.targetId)!=null,me=H.view.applyChanges(ne,z.isPrimaryClient,ce,oe);return i_(z,H.targetId,me.au),me.snapshot})(r,x,S,D);const c=await Qv(r.localStore,e,!0),f=new O5(e,c.Qs),p=f.ru(c.documents),m=Ec.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(p,r.isPrimaryClient,m);i_(r,n,y.au);const b=new M5(e,n,f);return r.Tu.set(e,b),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function U5(r,e,n){const s=xe(r),o=s.Tu.get(e),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter((f=>!Zh(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await nm(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Gm(s.remoteStore,o.targetId),sm(s,o.targetId)})).catch(wo)):(sm(s,o.targetId),await nm(s.localStore,o.targetId,!0))}async function z5(r,e){const n=xe(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Gm(n.remoteStore,s.targetId))}async function B5(r,e,n){const s=K5(r);try{const o=await(function(f,p){const m=xe(f),y=it.now(),b=p.reduce(((D,j)=>D.add(j.key)),Pe());let x,S;return m.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let j=sr(),z=Pe();return m.Ns.getEntries(D,b).next((H=>{j=H,j.forEach((($,ie)=>{ie.isValidDocument()||(z=z.add($))}))})).next((()=>m.localDocuments.getOverlayedDocuments(D,j))).next((H=>{x=H;const $=[];for(const ie of p){const ne=nR(ie,x.get(ie.key).overlayedDocument);ne!=null&&$.push(new rs(ie.key,ne,eE(ne.value.mapValue),Qn.exists(!0)))}return m.mutationQueue.addMutationBatch(D,y,$,p)})).next((H=>{S=H;const $=H.applyToLocalDocumentSet(x,z);return m.documentOverlayCache.saveOverlays(D,H.batchId,$)}))})).then((()=>({batchId:S.batchId,changes:hE(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,p,m){let y=f.Vu[f.currentUser.toKey()];y||(y=new ct(ke)),y=y.insert(p,m),f.Vu[f.currentUser.toKey()]=y})(s,o.batchId,n),await Tc(s,o.changes),await af(s.remoteStore)}catch(o){const c=Xm(o,"Failed to persist write");n.reject(c)}}async function $E(r,e){const n=xe(r);try{const s=await e5(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const f=n.Au.get(c);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?He(f.hu,14607):o.removedDocuments.size>0&&(He(f.hu,42227),f.hu=!1))})),await Tc(n,s,e)}catch(s){await wo(s)}}function n_(r,e,n){const s=xe(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((c,f)=>{const p=f.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const m=xe(f);m.onlineState=p;let y=!1;m.queries.forEach(((b,x)=>{for(const S of x.Sa)S.va(p)&&(y=!0)})),y&&Wm(m)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function q5(r,e,n){const s=xe(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),c=o&&o.key;if(c){let f=new ct(ge.comparator);f=f.insert(c,Zt.newNoDocument(c,Se.min()));const p=Pe().add(c),m=new nf(Se.min(),new Map,new ct(ke),f,p);await $E(s,m),s.du=s.du.remove(c),s.Au.delete(e),Jm(s)}else await nm(s.localStore,e,!1).then((()=>sm(s,e,n))).catch(wo)}async function F5(r,e){const n=xe(r),s=e.batch.batchId;try{const o=await JR(n.localStore,e);WE(n,s,null),XE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Tc(n,o)}catch(o){await wo(o)}}async function H5(r,e,n){const s=xe(r);try{const o=await(function(f,p){const m=xe(f);return m.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let b;return m.mutationQueue.lookupMutationBatch(y,p).next((x=>(He(x!==null,37113),b=x.keys(),m.mutationQueue.removeMutationBatch(y,x)))).next((()=>m.mutationQueue.performConsistencyCheck(y))).next((()=>m.documentOverlayCache.removeOverlaysForBatchId(y,b,p))).next((()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,b))).next((()=>m.localDocuments.getDocuments(y,b)))}))})(s.localStore,e);WE(s,e,n),XE(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Tc(s,o)}catch(o){await wo(o)}}function XE(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function WE(r,e,n){const s=xe(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function sm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||ZE(r,s)}))}function ZE(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Gm(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),Jm(r))}function i_(r,e,n){for(const s of n)s instanceof YE?(r.Ru.addReference(s.key,e),G5(r,s)):s instanceof QE?(he(Zm,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||ZE(r,s.key)):be(19791,{wu:s})}function G5(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(he(Zm,"New document in limbo: "+n),r.Eu.add(s),Jm(r))}function Jm(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new ge(nt.fromString(e)),s=r.fu.next();r.Au.set(s,new k5(n)),r.du=r.du.insert(n,s),jE(r.remoteStore,new Hr(_i(Wh(n.path)),s,"TargetPurposeLimboResolution",Kh.ce))}}async function Tc(r,e,n){const s=xe(r),o=[],c=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,m)=>{f.push(s.pu(m,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:n?.targetChanges.get(m.targetId)?.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Fm.As(m.targetId,y);c.push(b)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(m,y){const b=xe(m);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>ee.forEach(y,(S=>ee.forEach(S.Es,(D=>b.persistence.referenceDelegate.addReference(x,S.targetId,D))).next((()=>ee.forEach(S.ds,(D=>b.persistence.referenceDelegate.removeReference(x,S.targetId,D)))))))))}catch(x){if(!So(x))throw x;he(Hm,"Failed to update sequence numbers: "+x)}for(const x of y){const S=x.targetId;if(!x.fromCache){const D=b.Ms.get(S),j=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(j);b.Ms=b.Ms.insert(S,z)}}})(s.localStore,c))}async function Y5(r,e){const n=xe(r);if(!n.currentUser.isEqual(e)){he(Zm,"User change. New user:",e.toKey());const s=await ME(n.localStore,e);n.currentUser=e,(function(c,f){c.mu.forEach((p=>{p.forEach((m=>{m.reject(new ue(Z.CANCELLED,f))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Tc(n,s.Ls)}}function Q5(r,e){const n=xe(r),s=n.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const c=n.Iu.get(e);if(!c)return o;for(const f of c){const p=n.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function JE(r){const e=xe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=$E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=q5.bind(null,e),e.Pu.H_=N5.bind(null,e.eventManager),e.Pu.yu=D5.bind(null,e.eventManager),e}function K5(r){const e=xe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=F5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=H5.bind(null,e),e}class kh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return ZR(this.persistence,new $R,e.initialUser,this.serializer)}Cu(e){return new OE(qm.mi,this.serializer)}Du(e){return new s5}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kh.provider={build:()=>new kh};class $5 extends kh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Oh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new kR(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new OE((s=>Oh.mi(s,n)),this.serializer)}}class am{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>n_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Y5.bind(null,this.syncEngine),await R5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new I5})()}createDatastore(e){const n=rf(e.databaseInfo.databaseId),s=(function(c){return new u5(c)})(e.databaseInfo);return(function(c,f,p,m){return new p5(c,f,p,m)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,c,f,p){return new g5(s,o,c,f,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>n_(this.syncEngine,n,0)),(function(){return Xv.v()?new Xv:new a5})())}createSyncEngine(e,n){return(function(o,c,f,p,m,y,b){const x=new P5(o,c,f,p,m,y);return b&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=xe(n);he(Js,"RemoteStore shutting down."),s.Ea.add(5),await bc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}am.provider={build:()=>new am};/**
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
 */class eb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ns="FirestoreClient";class X5{constructor(e,n,s,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async f=>{he(ns,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(he(ns,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Xm(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Mp(r,e){r.asyncQueue.verifyOperationInProgress(),he(ns,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await ME(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function r_(r,e){r.asyncQueue.verifyOperationInProgress();const n=await W5(r);he(ns,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>Zv(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>Zv(e.remoteStore,o))),r._onlineComponents=e}async function W5(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he(ns,"Using user provided OfflineComponentProvider");try{await Mp(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;uo("Error using user provided cache. Falling back to memory cache: "+n),await Mp(r,new kh)}}else he(ns,"Using default OfflineComponentProvider"),await Mp(r,new $5(void 0));return r._offlineComponents}async function tb(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he(ns,"Using user provided OnlineComponentProvider"),await r_(r,r._uninitializedComponentsProvider._online)):(he(ns,"Using default OnlineComponentProvider"),await r_(r,new am))),r._onlineComponents}function Z5(r){return tb(r).then((e=>e.syncEngine))}async function om(r){const e=await tb(r),n=e.eventManager;return n.onListen=V5.bind(null,e.syncEngine),n.onUnlisten=U5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=j5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=z5.bind(null,e.syncEngine),n}function J5(r,e,n={}){const s=new $r;return r.asyncQueue.enqueueAndForget((async()=>(function(c,f,p,m,y){const b=new eb({next:S=>{b.Nu(),f.enqueueAndForget((()=>HE(c,x)));const D=S.docs.has(p);!D&&S.fromCache?y.reject(new ue(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&m&&m.source==="server"?y.reject(new ue(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),x=new GE(Wh(p.path),b,{includeMetadataChanges:!0,qa:!0});return FE(c,x)})(await om(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function nb(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const s_=new Map;/**
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
 */const ib="firestore.googleapis.com",a_=!0;class o_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ib,this.ssl=a_}else this.host=e.host,this.ssl=e.ssl??a_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OR)throw new ue(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}m3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nb(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new o_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new o_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new s3;switch(s.type){case"firstParty":return new c3(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=s_.get(n);s&&(he("ComponentProvider","Removing Datastore"),s_.delete(n),s.terminate())})(this),Promise.resolve()}}function eC(r,e,n,s={}){r=Yn(r,of);const o=_o(e),c=r._getSettings(),f={...c,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;o&&(B_(`https://${p}`),q_("Firestore",!0)),c.host!==ib&&c.host!==p&&uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...c,host:p,ssl:o,emulatorOptions:s};if(!Ks(m,f)&&(r._setSettings(m),s.mockUserToken)){let y,b;if(typeof s.mockUserToken=="string")y=s.mockUserToken,b=Wt.MOCK_USER;else{y=yS(s.mockUserToken,r._app?.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ue(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Wt(x)}r._authCredentials=new a3(new q2(y,b))}}/**
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
 */class aa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new aa(this.firestore,e,this._query)}}class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(vc(n,dt._jsonSchema))return new dt(e,s||null,new ge(nt.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:St("string",dt._jsonSchemaVersion),referencePath:St("string")};class Xr extends aa{constructor(e,n,s){super(e,n,Wh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new ge(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function eg(r,e,...n){if(r=Dt(r),F2("collection","path",e),r instanceof of){const s=nt.fromString(e,...n);return Ev(s),new Xr(r,null,s)}{if(!(r instanceof dt||r instanceof Xr))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...n));return Ev(s),new Xr(r.firestore,null,s)}}function Xn(r,e,...n){if(r=Dt(r),arguments.length===1&&(e=Dm.newId()),F2("doc","path",e),r instanceof of){const s=nt.fromString(e,...n);return _v(s),new dt(r,null,new ge(s))}{if(!(r instanceof dt||r instanceof Xr))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...n));return _v(s),new dt(r.firestore,r instanceof Xr?r.converter:null,new ge(s))}}/**
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
 */const l_="AsyncQueue";class c_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new PE(this,"async_queue_retry"),this._c=()=>{const s=Op();s&&he(l_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Op();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Op();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new $r;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!So(e))throw e;he(l_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,rr("INTERNAL UNHANDLED ERROR: ",u_(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=$m.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&be(47125,{Pc:u_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function u_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function h_(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1})(r,["next","error","complete"])}class ea extends of{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new c_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new c_(e),this._firestoreClient=void 0,await e}}}function tC(r,e){const n=typeof r=="object"?r:Y_(),s=typeof r=="string"?r:Rh,o=_m(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=mS("firestore");c&&eC(o,...c)}return o}function tg(r){if(r._terminated)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||nC(r),r._firestoreClient}function nC(r){const e=r._freezeSettings(),n=(function(o,c,f,p){return new A3(o,c,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,nb(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new X5(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Yt.fromBase64String(e))}catch(n){throw new ue(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vc(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:St("string",Pn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class lf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cf{constructor(e){this._methodName=e}}/**
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
 */class bi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bi._jsonSchemaVersion}}static fromJSON(e){if(vc(e,bi._jsonSchema))return new bi(e.latitude,e.longitude)}}bi._jsonSchemaVersion="firestore/geoPoint/1.0",bi._jsonSchema={type:St("string",bi._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Ti{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ti._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vc(e,Ti._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ti(e.vectorValues);throw new ue(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ti._jsonSchemaVersion="firestore/vectorValue/1.0",Ti._jsonSchema={type:St("string",Ti._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const iC=/^__.*__$/;class rC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new _c(e,this.data,n,this.fieldTransforms)}}class rb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sb(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ac:r})}}class ng{constructor(e,n,s,o,c,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ng({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ph(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(sb(this.Ac)&&iC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||rf(e)}Cc(e,n,s,o=!1){return new ng({Ac:e,methodName:n,Dc:s,path:Gt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(r){const e=r._freezeSettings(),n=rf(r._databaseId);return new sC(r._databaseId,!!e.ignoreUndefinedProperties,n)}function ab(r,e,n,s,o,c={}){const f=r.Cc(c.merge||c.mergeFields?2:0,e,n,o);rg("Data must be an object, but it was:",f,s);const p=ob(s,f);let m,y;if(c.merge)m=new En(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const b=[];for(const x of c.mergeFields){const S=lm(e,x,n);if(!f.contains(S))throw new ue(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);cb(b,S)||b.push(S)}m=new En(b),y=f.fieldTransforms.filter((x=>m.covers(x.field)))}else m=null,y=f.fieldTransforms;return new rC(new un(p),m,y)}class hf extends cf{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hf}}class ig extends cf{_toFieldTransform(e){return new Z3(e.path,new ac)}isEqual(e){return e instanceof ig}}function aC(r,e,n,s){const o=r.Cc(1,e,n);rg("Data must be an object, but it was:",o,s);const c=[],f=un.empty();is(s,((m,y)=>{const b=sg(e,m,n);y=Dt(y);const x=o.yc(b);if(y instanceof hf)c.push(b);else{const S=wc(y,x);S!=null&&(c.push(b),f.set(b,S))}}));const p=new En(c);return new rb(f,p,o.fieldTransforms)}function oC(r,e,n,s,o,c){const f=r.Cc(1,e,n),p=[lm(e,s,n)],m=[o];if(c.length%2!=0)throw new ue(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<c.length;S+=2)p.push(lm(e,c[S])),m.push(c[S+1]);const y=[],b=un.empty();for(let S=p.length-1;S>=0;--S)if(!cb(y,p[S])){const D=p[S];let j=m[S];j=Dt(j);const z=f.yc(D);if(j instanceof hf)y.push(D);else{const H=wc(j,z);H!=null&&(y.push(D),b.set(D,H))}}const x=new En(y);return new rb(b,x,f.fieldTransforms)}function lC(r,e,n,s=!1){return wc(n,r.Cc(s?4:3,e))}function wc(r,e){if(lb(r=Dt(r)))return rg("Unsupported field value:",e,r),ob(r,e);if(r instanceof cf)return(function(s,o){if(!sb(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const c=[];let f=0;for(const p of s){let m=wc(p,o.wc(f));m==null&&(m={nullValue:"NULL_VALUE"}),c.push(m),f++}return{arrayValue:{values:c}}})(r,e)}return(function(s,o){if((s=Dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return $3(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=it.fromDate(s);return{timestampValue:Dh(o.serializer,c)}}if(s instanceof it){const c=new it(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Dh(o.serializer,c)}}if(s instanceof bi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:SE(o.serializer,s._byteString)};if(s instanceof dt){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:zm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ti)return(function(f,p){return{mapValue:{fields:{[Z2]:{stringValue:J2},[Ch]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return jm(p.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Qh(s)}`)})(r,e)}function ob(r,e){const n={};return Y2(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(r,((s,o)=>{const c=wc(o,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function lb(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof bi||r instanceof Pn||r instanceof dt||r instanceof cf||r instanceof Ti)}function rg(r,e,n){if(!lb(n)||!H2(n)){const s=Qh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function lm(r,e,n){if((e=Dt(e))instanceof lf)return e._internalPath;if(typeof e=="string")return sg(r,e);throw Ph("Field path arguments must be of type string or ",r,!1,void 0,n)}const cC=new RegExp("[~\\*/\\[\\]]");function sg(r,e,n){if(e.search(cC)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new lf(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Ph(r,e,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(c||f)&&(m+=" (found",c&&(m+=` in field ${s}`),f&&(m+=` in document ${o}`),m+=")"),new ue(Z.INVALID_ARGUMENT,p+r+m)}function cb(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class ub{constructor(e,n,s,o,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ff("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uC extends ub{data(){return super.data()}}function ff(r,e){return typeof e=="string"?sg(r,e):e instanceof lf?e._internalPath:e._delegate._internalPath}/**
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
 */function hC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ag{}class hb extends ag{}function fC(r,e,...n){let s=[];e instanceof ag&&s.push(e),s=s.concat(n),(function(c){const f=c.filter((m=>m instanceof og)).length,p=c.filter((m=>m instanceof df)).length;if(f>1||f>0&&p>0)throw new ue(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class df extends hb{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new df(e,n,s)}_apply(e){const n=this._parse(e);return fb(e._query,n),new aa(e.firestore,e.converter,Xp(e._query,n))}_parse(e){const n=uf(e.firestore);return(function(c,f,p,m,y,b,x){let S;if(y.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){d_(x,b);const j=[];for(const z of x)j.push(f_(m,c,z));S={arrayValue:{values:j}}}else S=f_(m,c,x)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||d_(x,b),S=lC(p,f,x,b==="in"||b==="not-in");return wt.create(y,b,S)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function dC(r,e,n){const s=e,o=ff("where",r);return df._create(o,s,n)}class og extends ag{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new og(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let f=o;const p=c.getFlattenedFilters();for(const m of p)fb(f,m),f=Xp(f,m)})(e._query,n),new aa(e.firestore,e.converter,Xp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lg extends hb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lg(e,n)}_apply(e){const n=(function(o,c,f){if(o.startAt!==null)throw new ue(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sc(c,f)})(e._query,this._field,this._direction);return new aa(e.firestore,e.converter,(function(o,c){const f=o.explicitOrderBy.concat([c]);return new xo(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function pC(r,e="asc"){const n=e,s=ff("orderBy",r);return lg._create(s,n)}function f_(r,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new ue(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oE(e)&&n.indexOf("/")!==-1)throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(nt.fromString(n));if(!ge.isDocumentKey(s))throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Cv(r,new ge(s))}if(n instanceof dt)return Cv(r,n._key);throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qh(n)}.`)}function d_(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fb(r,e){const n=(function(o,c){for(const f of o)for(const p of f.getFlattenedFilters())if(c.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mC{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return is(e,((o,c)=>{s[o]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[Ch].arrayValue?.values?.map((s=>yt(s.doubleValue)));return new Ti(n)}convertGeoPoint(e){return new bi(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(nc(e));default:return null}}convertTimestamp(e){const n=Zr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=nt.fromString(e);He(NE(s),9688,{name:e});const o=new ic(s.get(1),s.get(3)),c=new ge(s.popFirst(5));return o.isEqual(n)||rr(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function db(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class Fl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qs extends ub{constructor(e,n,s,o,c,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ff("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:St("string",Qs._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class dh extends Qs{data(e={}){return super.data(e)}}class lo{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Fl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new dh(this._firestore,this._userDataWriter,s.key,s,new Fl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const m=new dh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Fl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const m=new dh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Fl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,b=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),b=f.indexOf(p.doc.key)),{type:gC(p.type),doc:m,oldIndex:y,newIndex:b}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:r})}}/**
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
 */function ta(r){r=Yn(r,dt);const e=Yn(r.firestore,ea);return J5(tg(e),r._key).then((n=>vb(e,r,n)))}lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:St("string",lo._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class pb extends mC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function Vh(r,e,n){r=Yn(r,dt);const s=Yn(r.firestore,ea),o=db(r.converter,e,n);return cg(s,[ab(uf(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Qn.none())])}function mb(r,e,n,...s){r=Yn(r,dt);const o=Yn(r.firestore,ea),c=uf(o);let f;return f=typeof(e=Dt(e))=="string"||e instanceof lf?oC(c,"updateDoc",r._key,e,n,s):aC(c,"updateDoc",r._key,e),cg(o,[f.toMutation(r._key,Qn.exists(!0))])}function gb(r,e){const n=Yn(r.firestore,ea),s=Xn(r),o=db(r.converter,e);return cg(n,[ab(uf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Qn.exists(!1))]).then((()=>s))}function yb(r,...e){r=Dt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||h_(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(h_(e[s])){const m=e[s];e[s]=m.next?.bind(m),e[s+1]=m.error?.bind(m),e[s+2]=m.complete?.bind(m)}let c,f,p;if(r instanceof dt)f=Yn(r.firestore,ea),p=Wh(r._key.path),c={next:m=>{e[s]&&e[s](vb(f,r,m))},error:e[s+1],complete:e[s+2]};else{const m=Yn(r,aa);f=Yn(m.firestore,ea),p=m._query;const y=new pb(f);c={next:b=>{e[s]&&e[s](new lo(f,y,m,b))},error:e[s+1],complete:e[s+2]},hC(r._query)}return(function(y,b,x,S){const D=new eb(S),j=new GE(b,D,x);return y.asyncQueue.enqueueAndForget((async()=>FE(await om(y),j))),()=>{D.Nu(),y.asyncQueue.enqueueAndForget((async()=>HE(await om(y),j)))}})(tg(f),p,o,c)}function cg(r,e){return(function(s,o){const c=new $r;return s.asyncQueue.enqueueAndForget((async()=>B5(await Z5(s),o,c))),c.promise})(tg(r),e)}function vb(r,e,n){const s=n.docs.get(e._key),o=new pb(r);return new Qs(r,o,e._key,s,new Fl(n.hasPendingWrites,n.fromCache),e.converter)}function jh(){return new ig("serverTimestamp")}(function(e,n=!0){(function(o){To=o})(Eo),co(new $s("firestore",((s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),p=new ea(new o3(s.getProvider("auth-internal")),new u3(f,s.getProvider("app-check-internal")),(function(y,b){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ic(y.options.projectId,b)})(f,o),f);return c={useFetchStreams:n,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),Qr(mv,gv,e),Qr(mv,gv,"esm2020")})();var yC="firebase",vC="12.1.0";/**
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
 */Qr(yC,vC,"app");const _C={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},EC=G_(_C),Vn=i3(),bn=tC(EC),Lh=300,bC=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:"7 days",description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:99999,duration:"14 days",description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e5,max:1/0,duration:"30 days",description:"For premium investors building a substantial portfolio"}],_b=[{type:"USDT (TRC20)",address:"T9zZ4oxBJNiNxaVF2sdjLrjE4KeZkqzkiv"},{type:"TRON",address:"TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC"},{type:"DODGECOIN",address:"D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4"}],TC=({user:r})=>{const e=vo(),[n,s]=L.useState({}),[o,c]=L.useState(!0),[f,p]=L.useState(null);return L.useEffect(()=>{(async()=>{if(r)try{const y=Xn(bn,"users",r.uid),b=await ta(y);b.exists()?s(b.data()):p("Profile data not found.")}catch(y){p("Failed to fetch profile data."),console.error(y)}c(!1)})()},[r]),o?g.jsx("div",{className:"loading",children:"Loading profile..."}):f?g.jsx("div",{className:"error-message",children:f}):g.jsxs("div",{className:"profile-container",children:[g.jsx("h2",{className:"section-title",children:"User Profile"}),g.jsxs("div",{className:"profile-grid",children:[g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Full Name:"})," ",g.jsx("span",{children:n.fullName||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Email:"})," ",g.jsx("span",{children:r.email})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Username:"})," ",g.jsx("span",{children:n.username||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Phone:"})," ",g.jsx("span",{children:n.phone||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Location:"})," ",g.jsx("span",{children:n.location||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Occupation:"})," ",g.jsx("span",{children:n.occupation||"N/A"})]})]}),g.jsxs("div",{className:"bio-card",children:[g.jsx("strong",{children:"Bio:"}),g.jsx("p",{children:n.bio||"No bio provided."})]}),g.jsx("button",{className:"btn-primary",onClick:()=>e("/edit-profile"),children:"Edit Profile"})]})},wC=({user:r})=>{const[e,n]=L.useState(null),[s,o]=L.useState(!1),c=async()=>{if(!r||!r.email){n("error");return}o(!0),n(null);try{await FA(Vn,r.email),n("success")}catch(f){console.error("Password reset error:",f),n("error")}finally{o(!1)}};return g.jsxs("div",{className:"settings-container",children:[g.jsxs("div",{className:"settings-card",children:[g.jsx("h2",{className:"section-title",children:"Account Settings"}),g.jsxs("div",{className:"setting-item",children:[g.jsx("h3",{children:"Password & Security"}),g.jsx("p",{children:"Request a password reset link to be sent to your email."}),g.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Sending...":"Reset Password"}),e==="success"&&g.jsxs("span",{className:"success-message",children:[g.jsx(io,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&g.jsxs("span",{className:"error-message",children:[g.jsx(gm,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),g.jsxs("div",{className:"settings-card",children:[g.jsx("h2",{className:"section-title",children:"Notification Preferences"}),g.jsxs("div",{className:"setting-item",children:[g.jsx("p",{children:"Manage how you receive updates and alerts."}),g.jsx("button",{className:"btn-secondary",onClick:()=>alert("Notification settings update coming soon!"),children:"Configure Notifications"})]})]})]})},SC=({user:r,updateBalance:e})=>{const[n,s]=L.useState(null),[o,c]=L.useState(""),[f,p]=L.useState(null),[m,y]=L.useState(!1),[b,x]=L.useState(!1),[S,D]=L.useState(!1),[j,z]=L.useState(null),[H,$]=L.useState(0),[ie,ne]=L.useState(!1),ce=N=>{s(N),c(""),p(null),y(!1),x(!1),D(!1),z(null),$(1)},oe=()=>{const N=parseFloat(o);if(isNaN(N)||N<=0){z("Please enter a valid amount greater than 0");return}if(N<n.min||n.max!==1/0&&N>n.max){z(`Please enter a valid amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`);return}z(null),$(2)},me=N=>{p(N),$(3)},V=()=>{y(!0),$(4)},A=async()=>{if(!(!n||!o)){z(null);try{const N=parseFloat(o),k=n.profitPercent,I=(N*k/100).toFixed(0),rt={userId:r.uid,type:"deposit",amount:N,profitPercent:`${k}%`,plan:n.name,interest:`$${I}`,duration:n.duration,description:n.description,status:"completed",timestamp:jh()};await gb(eg(bn,"transactions"),rt);const Be=Xn(bn,"users",r.uid),K=await ta(Be);if(K.exists()){const se=K.data().balance||0,de=K.data().goldBalance||0,Oe=parseFloat(I)/Lh;await mb(Be,{balance:se+N,goldBalance:de+Oe}),e(se+N,de+Oe)}D(!0),$(0),s(null),y(!1),x(!1)}catch(N){z("Failed to process transaction. Please try again."),console.error(N)}}},R=async N=>{N.target.files[0]&&(x(!0),await A())},O=()=>{f?.address&&(navigator.clipboard.writeText(f.address),ne(!0),setTimeout(()=>ne(!1),2e3))};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Purchase Gold"}),j&&g.jsxs("span",{className:"error-message",children:[g.jsx(gm,{style:{marginRight:"5px"}})," ",j]}),S?g.jsxs("div",{children:[g.jsx("h3",{children:"Transaction Successful!"}),g.jsxs("span",{className:"success-message",children:[g.jsx(io,{style:{marginRight:"5px"}})," Your deposit has been processed successfully!"]}),g.jsx("button",{className:"btn-secondary",onClick:()=>D(!1),children:"Back to Plans"})]}):H===0?g.jsxs(g.Fragment,{children:[g.jsx("p",{children:"Select a gold plan to purchase:"}),g.jsx("div",{className:"gold-plans-container",children:bC.map(N=>g.jsxs("div",{className:`gold-plan-card ${n?.id===N.id?"selected-plan":""}`,onClick:()=>ce(N),children:[g.jsx(j1,{size:36,color:"#D4AF37"}),g.jsx("h3",{className:"plan-title",children:N.name}),g.jsxs("p",{className:"plan-price",children:["$",N.min,"  - ",N.max===1/0?"and above":N.max," USD"]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Profit:"})," ",N.profitPercent,"%"]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Duration:"})," ",N.duration]}),g.jsx("p",{className:"plan-description",children:N.description})]},N.id))})]}):H===1?g.jsxs(g.Fragment,{children:[g.jsxs("h3",{children:["Selected Plan: ",n.name]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"deposit-amount",children:"Enter Deposit Amount:"}),g.jsx("input",{id:"deposit-amount",type:"number",value:o,onChange:N=>c(N.target.value),placeholder:`Enter amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`})]}),g.jsx("button",{className:"btn-primary",onClick:oe,children:"Proceed"}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(0),children:"Back"})]}):H===2?g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Select a Wallet"}),g.jsx("div",{className:"gold-plans-container",children:_b.map((N,k)=>g.jsxs("div",{className:`gold-plan-card ${f?.type===N.type?"selected-plan":""}`,onClick:()=>me(N),children:[g.jsx(j1,{size:36,color:"#D4AF37"}),g.jsx("h3",{className:"plan-title",children:N.type})]},k))}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(1),children:"Back"})]}):H===3?g.jsxs(g.Fragment,{children:[g.jsxs("h3",{children:["Selected Plan: ",n.name]}),g.jsxs("p",{children:["Amount: $",o]}),g.jsxs("p",{children:["Please send exactly ",g.jsxs("strong",{children:["$",o]})," to the following address:"]}),g.jsxs("div",{className:"deposit-address",children:[g.jsx("p",{children:g.jsxs("strong",{children:[f.type," Address:"]})}),g.jsx("p",{children:f.address}),g.jsxs("button",{className:"btn-secondary",onClick:O,children:[ie?"Copied!":"Copy Address"," ",g.jsx(H4,{style:{marginLeft:"5px"}})]})]}),g.jsx("p",{children:"After completing your transfer, click the button below to confirm."}),g.jsx("button",{className:"btn-primary",onClick:V,children:"I've Sent the Payment"}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(2),children:"Choose Different Wallet"})]}):H===4?g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Confirm Deposit"}),g.jsx("p",{children:"Upload a screenshot of the transaction (for verification, not stored):"}),g.jsx("input",{type:"file",accept:"image/*",onChange:R}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(3),children:"Back"})]}):null]})},xC=({user:r,balance:e,goldBalance:n,updateBalance:s})=>{const[o,c]=L.useState(""),[f,p]=L.useState("usd"),[m,y]=L.useState(""),[b,x]=L.useState(!1),[S,D]=L.useState({text:"",type:""}),j=async()=>{if(D({text:"",type:""}),!o||!m){D({text:"Please select a wallet and enter an amount",type:"error"});return}const z=parseFloat(o);if(isNaN(z)||z<=0){D({text:"Please enter a valid amount",type:"error"});return}const H=f==="usd"?50:1;if(z<H){D({text:`Minimum withdrawal is $${H} USD or ${H}g Gold`,type:"error"});return}if(f==="usd"&&z>e){D({text:"Insufficient USD balance",type:"error"});return}if(f==="gold"&&z>n){D({text:"Insufficient gold balance",type:"error"});return}x(!0);try{const $=f==="usd"?z:z*Lh,ie={userId:r.uid,type:"withdrawal",amount:$,profitPercent:f==="gold"?`${z}g`:"0g",status:"pending",walletType:m,timestamp:jh()};await gb(eg(bn,"transactions"),ie);const ne=Xn(bn,"users",r.uid),ce=await ta(ne);if(ce.exists()){const oe=ce.data().balance||0,me=ce.data().goldBalance||0;await mb(ne,{balance:f==="usd"?oe-z:oe,goldBalance:f==="gold"?me-z:me}),s(f==="usd"?oe-z:oe,f==="gold"?me-z:me)}D({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),c(""),y("")}catch($){console.error("Error processing withdrawal:",$),D({text:"Failed to process withdrawal. Please try again.",type:"error"})}finally{x(!1)}};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),g.jsx("div",{className:"balance-info",children:g.jsxs("p",{children:["Available Balance: ",g.jsxs("strong",{children:["$",e.toLocaleString()," USD"]})," | ",g.jsxs("strong",{children:[n.toFixed(2),"g Gold"]})]})}),g.jsxs("div",{className:"withdraw-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),g.jsxs("select",{id:"withdraw-type",value:f,onChange:z=>{p(z.target.value),c(""),y("")},children:[g.jsx("option",{value:"usd",children:"USD"}),g.jsx("option",{value:"gold",children:"Gold"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",f==="gold"?"(in grams)":"(in USD)",":"]}),g.jsx("input",{id:"withdraw-amount",type:"number",value:o,onChange:z=>c(z.target.value),placeholder:f==="usd"?"Enter USD amount":"Enter gold amount in grams"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"destination-wallet",children:"Destination Wallet:"}),g.jsxs("select",{id:"destination-wallet",value:m,onChange:z=>y(z.target.value),children:[g.jsx("option",{value:"",children:"Select a wallet"}),_b.map((z,H)=>g.jsx("option",{value:z.type,children:z.type},H))]})]}),S.text&&g.jsxs("div",{className:S.type==="success"?"success-message":"error-message",children:[S.type==="success"?g.jsx(io,{style:{marginRight:"5px"}}):g.jsx(gm,{style:{marginRight:"5px"}}),S.text]}),g.jsx("button",{className:"btn-primary",onClick:j,disabled:b||!o||!m,children:b?"Processing...":"Request Withdrawal"})]}),g.jsxs("div",{className:"withdrawal-info",children:[g.jsx("h4",{children:"Withdrawal Information:"}),g.jsxs("ul",{children:[g.jsx("li",{children:"Withdrawals are processed within 24 hours"}),g.jsxs("li",{children:["Gold withdrawals are converted to USD at ~$",Lh,"/g"]}),g.jsx("li",{children:"Minimum withdrawal: $50 USD or 1g Gold"}),g.jsx("li",{children:"Network fees may apply"})]})]})]})},AC=({user:r})=>{const[e,n]=L.useState([]),[s,o]=L.useState(!0),[c,f]=L.useState(null);L.useEffect(()=>{if(!r)return;const m=fC(eg(bn,"transactions"),dC("userId","==",r.uid),pC("timestamp","desc")),y=yb(m,b=>{const x=[];b.forEach(S=>{x.push({id:S.id,...S.data()})}),n(x),o(!1)},b=>{f("Failed to load transaction history."),console.error(b),o(!1)});return()=>y()},[r]);const p=m=>{switch(m){case"completed":return"status-completed";case"processing":return"status-processing";default:return"status-pending"}};return s?g.jsx("div",{className:"section-card",children:"Loading transaction history..."}):c?g.jsx("div",{className:"section-card error-message",children:c}):g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?g.jsx("p",{children:"No transactions yet."}):g.jsx("div",{className:"table-container",children:g.jsxs("table",{className:"transactions-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Type"}),g.jsx("th",{children:"Amount"}),g.jsx("th",{children:"Profit/Output"}),g.jsx("th",{children:"Date"}),g.jsx("th",{children:"Status"})]})}),g.jsx("tbody",{children:e.map(m=>g.jsxs("tr",{children:[g.jsxs("td",{children:[m.type==="deposit"?g.jsx(k_,{className:"icon-deposit"}):g.jsx(M_,{className:"icon-withdraw"}),m.type.charAt(0).toUpperCase()+m.type.slice(1),m.plan&&` (${m.plan})`]}),g.jsxs("td",{children:["$",m.amount.toLocaleString()]}),g.jsx("td",{children:m.interest?`${m.interest} (${m.profitPercent})`:m.profitPercent||"N/A"}),g.jsx("td",{children:m.timestamp?.toDate().toLocaleString()}),g.jsx("td",{children:g.jsx("span",{className:`status-indicator ${p(m.status)}`,children:m.status.charAt(0).toUpperCase()+m.status.slice(1)})})]},m.id))})]})})]})},RC=({user:r})=>{const e=`https://yourwebsite.com/refer/${r.uid}`,[n,s]=L.useState(!1),o=()=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Referral Program"}),g.jsx("p",{children:"Invite friends and earn rewards! Share your unique referral link."}),g.jsxs("div",{className:"referral-container",children:[g.jsx("strong",{children:"Your Referral Link:"}),g.jsx("p",{className:"referral-link",children:e}),g.jsx("button",{className:"btn-primary",onClick:o,children:n?"Copied!":"Copy Link"})]}),g.jsxs("div",{className:"referral-info",children:[g.jsx("h4",{children:"How It Works:"}),g.jsxs("ul",{children:[g.jsx("li",{children:"Share your link with friends"}),g.jsx("li",{children:"Earn 5% bonus on their first deposit"}),g.jsx("li",{children:"Track your referrals in your dashboard"})]})]})]})},CC=()=>{const r=vo(),[e,n]=L.useState(null),[s,o]=L.useState(null),[c,f]=L.useState("dashboard"),[p,m]=L.useState(0),[y,b]=L.useState(0),[x,S]=L.useState(!1),[D,j]=L.useState(!0),[z,H]=L.useState(null);L.useEffect(()=>{const ce=v2(Vn,oe=>{if(oe){n(oe);const me=Xn(bn,"users",oe.uid),V=yb(me,A=>{if(A.exists()){const R=A.data();o(R),m(R.balance||0),b(R.goldBalance||0),j(!1)}else H("User data not found."),j(!1)},A=>{H("Failed to load user data."),console.error(A),j(!1)});return()=>V()}else r("/login")});return()=>ce()},[r]);const $=(ce,oe)=>{m(ce),b(oe)},ie=async()=>{try{await KA(Vn),r("/login")}catch(ce){console.error("Logout error:",ce.message),H("Failed to logout. Please try again.")}};if(D)return g.jsx("div",{className:"loading",children:"Loading..."});if(z||!e||!s)return g.jsx("div",{className:"error-message",children:z||"Failed to load dashboard."});const ne=()=>{switch(c){case"dashboard":return g.jsxs("div",{className:"overview-container",children:[g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Account Balance"}),g.jsxs("p",{className:"metric",children:["$",p.toLocaleString()]}),g.jsx("p",{className:"subtext",children:"Available USD"})]}),g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Gold Holdings"}),g.jsxs("p",{className:"metric",children:[y.toFixed(2),"g"]}),g.jsx("p",{className:"subtext",children:"Pure Gold"})]}),g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Total Value"}),g.jsxs("p",{className:"metric",children:["$",(p+y*Lh).toLocaleString()]}),g.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Recent Activity"}),g.jsxs("ul",{className:"activity-list",children:[g.jsxs("li",{children:[g.jsx(io,{className:"activity-icon"})," Account created ",g.jsx("span",{className:"activity-time",children:"1 week ago"})]}),p>0&&g.jsxs("li",{children:[g.jsx(io,{className:"activity-icon"})," Deposit of $",p.toLocaleString()," ",g.jsx("span",{className:"activity-time",children:"Recently"})]}),y>0&&g.jsxs("li",{children:[g.jsx(io,{className:"activity-icon"})," Purchased ",y.toFixed(2),"g of gold ",g.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return g.jsx(SC,{user:e,updateBalance:$});case"withdraw":return g.jsx(xC,{user:e,balance:p,goldBalance:y,updateBalance:$});case"history":return g.jsx(AC,{user:e});case"referral":return g.jsx(RC,{user:e});case"profile":return g.jsx(TC,{user:e});case"settings":return g.jsx(wC,{user:e});default:return null}};return g.jsxs("div",{className:"dashboard-container",children:[g.jsxs("div",{className:`sidebar ${x?"mobile-open":""}`,children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx(J4,{size:24,className:"sidebar-icon"}),g.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),g.jsx("button",{className:"mobile-close-btn",onClick:()=>S(!1),children:g.jsx(X4,{})}),g.jsxs("ul",{className:"nav-list",children:[g.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{f("dashboard"),S(!1)},children:[g.jsx(z4,{})," ",g.jsx("span",{children:"Dashboard"})]}),g.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{f("deposit"),S(!1)},children:[g.jsx(k_,{})," ",g.jsx("span",{children:"Buy Gold"})]}),g.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{f("withdraw"),S(!1)},children:[g.jsx(M_,{})," ",g.jsx("span",{children:"Withdraw"})]}),g.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{f("history"),S(!1)},children:[g.jsx(Q4,{})," ",g.jsx("span",{children:"History"})]}),g.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{f("referral"),S(!1)},children:[g.jsx(W4,{})," ",g.jsx("span",{children:"Referral"})]}),g.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{f("profile"),S(!1)},children:[g.jsx(Z4,{})," ",g.jsx("span",{children:"Profile"})]}),g.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{f("settings"),S(!1)},children:[g.jsx(F4,{})," ",g.jsx("span",{children:"Settings"})]})]}),g.jsxs("div",{className:"logout-btn",onClick:ie,children:[g.jsx($4,{})," ",g.jsx("span",{children:"Logout"})]})]}),g.jsxs("div",{className:"main-content",children:[g.jsxs("div",{className:"header",children:[g.jsxs("div",{className:"header-left",children:[g.jsx("button",{className:"mobile-menu-btn",onClick:()=>S(!0),children:g.jsx(L4,{})}),g.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),g.jsxs("span",{className:"user-info",children:["Balance: ",g.jsxs("strong",{children:["$",p.toLocaleString()]})," | Gold: ",g.jsxs("strong",{children:[y.toFixed(2),"g"]})]})]}),g.jsx("div",{className:"content-area",children:ne()})]}),g.jsx("style",{jsx:!0,children:`
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

.btn-primary:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
  box-shadow: none;
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

.deposit-address button {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.referral-info {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px solid #e9ecef;
}

.referral-info ul {
  margin: 15px 0 0 0;
  padding-left: 20px;
}

.referral-info li {
  margin-bottom: 8px;
  color: #7f8c8d;
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
      `})]})};function Eb(r){return Je({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}const IC=()=>{const[r,e]=L.useState(""),[n,s]=L.useState(""),[o,c]=L.useState(""),f=vo(),p=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),m=D=>D&&typeof D.fullName=="string"&&D.fullName.trim().length>1&&Array.isArray(D.wallets)&&D.wallets.length>0,y=async D=>{try{const j=Xn(bn,"users",D.uid),z=await ta(j),H=z.exists()?z.data():{};m(H)?f("/dashboard"):f("/profile")}catch(j){console.error("Redirect error:",j.message),e("Failed to process user data. Try again.")}},b=async D=>{D.preventDefault();try{const z=(await GA(Vn,n,o)).user;await y(z)}catch(j){console.error("Login error:",j.code,j.message),e("Login failed. Check your credentials.")}},x=async()=>{const D=new gi;try{if(p)await D2(Vn,D);else{const z=(await C2(Vn,D)).user;await S(z)}}catch(j){console.error("Google login error:",j.code,j.message),e("Google login failed. Try again.")}},S=async D=>{try{const j=Xn(bn,"users",D.uid);(await ta(j)).exists()||await Vh(j,{fullName:D.displayName||"",email:D.email,createdAt:new Date,wallets:[]}),await y(D)}catch(j){console.error("Google user processing error:",j.message),e("Failed to process Google login. Try again.")}};return L.useEffect(()=>{(async()=>{try{const j=await O2(Vn);if(j){const z=j.user;await S(z)}}catch(j){console.error("Redirect result error:",j.code,j.message),e("Google login failed. Try again.")}})()},[]),g.jsxs("div",{className:"body",children:[g.jsx(mm,{}),g.jsxs("div",{className:"page",children:[g.jsx("h1",{className:"h1",children:"Login"}),g.jsxs("form",{onSubmit:b,className:"login-form",children:[g.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:D=>s(D.target.value),placeholder:"Enter your email"}),g.jsx("input",{className:"input",required:!0,type:"password",value:o,onChange:D=>c(D.target.value),placeholder:"Enter your password"}),g.jsx("button",{type:"submit",className:"btn btn1",children:"Login"}),g.jsxs("button",{type:"button",className:"google-btn",onClick:x,children:[g.jsx(Eb,{className:"google-icon"})," Login with Google"]}),g.jsxs("p",{className:"signintxt",children:["Don't have an account? ",g.jsx(tr,{to:"/signup",className:"Link",children:"Signup"})]}),r&&g.jsx("span",{className:"error-text",children:r})]})]})]})},NC=()=>{const[r,e]=L.useState(""),[n,s]=L.useState(""),[o,c]=L.useState(""),[f,p]=L.useState(""),m=vo(),y=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),b=async D=>{if(D.preventDefault(),f.length<6){e("Password must be at least 6 characters");return}try{const z=(await HA(Vn,n,f)).user;await Vh(Xn(bn,"users",z.uid),{fullName:o,email:n,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),m("/profile")}catch(j){console.error("Signup error:",j.code,j.message),e("Signup failed. Try again.")}},x=async()=>{const D=new gi;try{if(y)await D2(Vn,D);else{const z=(await C2(Vn,D)).user;await S(z)}}catch(j){console.error("Google signup error:",j.code,j.message),e("Google signup failed. Try again.")}},S=async D=>{try{await Vh(Xn(bn,"users",D.uid),{fullName:D.displayName||"",email:D.email,createdAt:new Date,wallets:[]},{merge:!0}),sessionStorage.setItem("newSignup","true"),m("/profile")}catch(j){console.error("Google user processing error:",j.message),e("Failed to process Google signup. Try again.")}};return L.useEffect(()=>{(async()=>{try{const j=await O2(Vn);if(j){const z=j.user;await S(z)}}catch(j){console.error("Redirect result error:",j.code,j.message),e("Google signup failed. Try again.")}})()},[]),g.jsxs("div",{className:"body",children:[g.jsx(mm,{}),g.jsxs("div",{className:"page",children:[g.jsx("h1",{className:"h1",children:"Signup"}),g.jsxs("form",{onSubmit:b,className:"signup-form",children:[g.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:D=>s(D.target.value),placeholder:"Enter your email"}),g.jsx("input",{className:"input",required:!0,type:"text",value:o,onChange:D=>c(D.target.value),placeholder:"Enter your name"}),g.jsx("input",{className:"input",required:!0,type:"password",value:f,onChange:D=>p(D.target.value),placeholder:"Enter your password"}),g.jsx("button",{type:"submit",className:"btn btn1",children:"Sign Up"}),g.jsxs("button",{type:"button",className:"google-btn",onClick:x,children:[g.jsx(Eb,{className:"google-icon"})," Signup with Google"]}),g.jsxs("p",{className:"signintxt",children:["Already have an account? ",g.jsx(tr,{to:"/login",className:"Link",children:"Login"})]}),r&&g.jsx("span",{className:"error-text",children:r})]})]})]})},DC=()=>{const[r,e]=L.useState(0),[n,s]=L.useState(0),[o,c]=L.useState(!0),[f,p]=L.useState(null),[m,y]=L.useState("USD"),[b,x]=L.useState(3e4),[S,D]=L.useState([]),[j,z]=L.useState(!1),[H,$]=L.useState(5),[ie,ne]=L.useState(new Date),ce=L.useRef(),oe=L.useRef(),me="5d24fc1ffdddc88c283d59bad4fb57ce",V=async()=>{try{c(!0),p(null);const k=await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${me}&base=${m}&currencies=XAU`);if(!k.ok)throw new Error("Network response was not ok");const I=await k.json();if(!I.success)throw new Error("API request failed");const rt=`${m}XAU`,Be=I.rates[rt]||1/I.rates.XAU;ce.current&&(ce.current.classList.add("price-updating"),setTimeout(()=>{s(r),e(Be),ne(new Date),ce.current&&ce.current.classList.remove("price-updating")},500)),D(K=>[...K,{price:Be,timestamp:new Date}].slice(-20))}catch(k){p("Failed to fetch gold prices. Please try again later."),console.error("Error fetching gold price:",k)}finally{c(!1)}};L.useEffect(()=>{n&&Math.abs(r-n)>H&&j&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Gold Price Alert",{body:`Gold price has ${r>n?"increased":"decreased"} by $${Math.abs(r-n).toFixed(2)}.`}),ce.current&&(ce.current.classList.add("price-alert"),setTimeout(()=>{ce.current&&ce.current.classList.remove("price-alert")},2e3)))},[r,n,H,j]),L.useEffect(()=>{V();const k=setInterval(()=>{V()},b);return()=>clearInterval(k)},[b,m]);const A=()=>{"Notification"in window&&Notification.requestPermission().then(k=>{z(k==="granted")})},R=()=>n?((r-n)/n*100).toFixed(2):0,O=k=>new Intl.NumberFormat("en-US",{style:"currency",currency:m,minimumFractionDigits:2}).format(k),N=()=>{if(S.length<2)return null;const k=S.map(K=>K.price),I=Math.max(...k),rt=Math.min(...k),Be=I-rt;return g.jsx("div",{className:"mini-chart",ref:oe,children:S.map((K,se)=>{if(se===0)return null;const de=Be>0?(K.price-rt)/Be*40:20,Oe=K.price>S[se-1].price;return g.jsx("div",{className:`chart-bar ${Oe?"chart-bar-up":"chart-bar-down"}`,style:{height:`${de}px`}},se)})})};return g.jsxs("div",{className:"gold-price-tracker",children:[g.jsxs("div",{className:"tracker-header",children:[g.jsxs("h2",{children:[g.jsx("span",{className:"gold-icon",children:"🥇"}),"Gold Price Tracker"]}),g.jsxs("div",{className:"last-updated",children:["Last updated: ",ie.toLocaleTimeString()]})]}),o&&g.jsxs("div",{className:"loading-state",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading current gold price..."})]}),f&&g.jsxs("div",{className:"error-state",children:[g.jsx("div",{className:"error-icon",children:"⚠️"}),g.jsx("p",{children:f}),g.jsx("button",{onClick:V,className:"retry-btn",children:"Retry"})]}),!o&&!f&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"price-display",children:[g.jsxs("div",{ref:ce,className:"current-price",children:[O(r),n&&g.jsxs("span",{className:`price-change ${r>=n?"positive":"negative"}`,children:[r>=n?"↗":"↘",O(Math.abs(r-n)),"(",R(),"%)"]})]}),N()]}),g.jsxs("div",{className:"price-history",children:[g.jsx("h3",{children:"Recent Trends"}),g.jsx("div",{className:"history-bars",children:S.slice(-6).map((k,I)=>g.jsxs("div",{className:"history-bar",children:[g.jsx("div",{className:"bar-time",children:k.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),g.jsx("div",{className:"bar-price",children:O(k.price)})]},I))})]})]}),g.jsxs("div",{className:"tracker-controls",children:[g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Currency:"}),g.jsxs("select",{value:m,onChange:k=>y(k.target.value),className:"control-select",children:[g.jsx("option",{value:"USD",children:"USD"}),g.jsx("option",{value:"EUR",children:"EUR"}),g.jsx("option",{value:"GBP",children:"GBP"}),g.jsx("option",{value:"JPY",children:"JPY"})]})]}),g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Refresh every:"}),g.jsxs("select",{value:b,onChange:k=>x(Number(k.target.value)),className:"control-select",children:[g.jsx("option",{value:1e4,children:"10 seconds"}),g.jsx("option",{value:3e4,children:"30 seconds"}),g.jsx("option",{value:6e4,children:"1 minute"}),g.jsx("option",{value:3e5,children:"5 minutes"})]})]}),g.jsx("div",{className:"control-group",children:g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",checked:j,onChange:A}),"Price alerts"]})}),j&&g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Alert threshold:"}),g.jsxs("select",{value:H,onChange:k=>$(Number(k.target.value)),className:"control-select",children:[g.jsx("option",{value:1,children:"$1.00"}),g.jsx("option",{value:5,children:"$5.00"}),g.jsx("option",{value:10,children:"$10.00"}),g.jsx("option",{value:25,children:"$25.00"})]})]})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]})},OC=()=>{const r=vo(),[e,n]=L.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[s,o]=L.useState(!0),[c,f]=L.useState(!1),[p,m]=L.useState(""),[y,b]=L.useState(""),[x,S]=L.useState(null),[D,j]=L.useState(!1),z=ie=>{const{name:ne,value:ce}=ie.target;n(oe=>({...oe,[ne]:ce}))};L.useEffect(()=>{j(!0);const ie=v2(Vn,async ne=>{if(!ne){r("/login");return}S(ne);try{const ce=Xn(bn,"users",ne.uid),oe=await ta(ce);if(oe.exists()){const me=oe.data(),V=me.wallets&&me.wallets.find(O=>O.type==="btc")?.address||"",A=me.wallets&&me.wallets.find(O=>O.type==="eth")?.address||"",R=me.wallets&&me.wallets.find(O=>O.type==="usdt")?.address||"";n(O=>({...O,...me,btcWallet:V,ethWallet:A,usdtWallet:R}))}}catch(ce){console.error("Failed to load profile:",ce),m("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>ie()},[r]);const H=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,$=async ie=>{if(ie.preventDefault(),!!x){if(!H()){m("Please fill in all required fields.");return}f(!0),m(""),b("");try{const ne=Xn(bn,"users",x.uid),ce=[];e.btcWallet&&ce.push({type:"btc",address:e.btcWallet}),e.ethWallet&&ce.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&ce.push({type:"usdt",address:e.usdtWallet});const oe={...e,email:x.email,wallets:ce,updatedAt:jh()};delete oe.btcWallet,delete oe.ethWallet,delete oe.usdtWallet,(await ta(ne)).data()?.createdAt||(oe.createdAt=jh()),await Vh(ne,oe,{merge:!0}),b("Profile updated successfully!"),setTimeout(()=>r("/dashboard"),1200)}catch(ne){console.error("Save failed:",ne),m("Could not save profile. Please try again.")}finally{f(!1)}}};return s?g.jsxs("div",{className:"loader-container",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading Profile..."})]}):g.jsxs("div",{className:"profile-page",children:[g.jsxs("div",{className:`profile-container ${D?"mounted":""}`,children:[g.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),g.jsx("form",{onSubmit:$,className:"profile-form",children:g.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((ie,ne)=>g.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${ne*.1}s`},children:g.jsx("input",{name:ie,type:"text",placeholder:ie==="fullName"?"Full Name *":"Username *",value:e[ie],onChange:z,required:!0,className:"form-input"})},ie)),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:g.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:z,className:"form-input"})}),g.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[g.jsx("label",{className:"input-label",children:"Date of Birth *"}),g.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:z,className:"form-input",required:!0})]}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:g.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:z,required:!0,className:"form-input"})}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:g.jsxs("select",{name:"gender",value:e.gender,onChange:z,className:"form-select",children:[g.jsx("option",{value:"",children:"Select Gender"}),g.jsx("option",{value:"Male",children:"Male"}),g.jsx("option",{value:"Female",children:"Female"}),g.jsx("option",{value:"Other",children:"Other"})]})}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:g.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:z,className:"form-input"})}),g.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:g.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:z,rows:3,className:"form-textarea"})}),g.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[g.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((ie,ne)=>g.jsx("div",{className:"form-group",children:g.jsx("input",{name:ie,type:"text",placeholder:ie==="btcWallet"?"BTC Wallet Address":ie==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[ie],onChange:z,className:"form-input"})},ie))]}),p&&g.jsx("div",{className:"error-message full-width animated-item",children:p}),y&&g.jsx("div",{className:"success-message full-width animated-item",children:y}),g.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[g.jsx("button",{type:"button",onClick:()=>r("/dashboard"),className:"btn-secondary",children:"Cancel"}),g.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!H(),children:c?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]})},MC=()=>g.jsxs("div",{style:th.container,children:[g.jsx("h1",{style:th.heading,children:"404 - Page Not Found"}),g.jsx("p",{style:th.text,children:"The page you are looking for doesn't exist."}),g.jsx(tr,{to:"/",style:th.button,children:"Go Home"})]}),th={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}};function kC(){return g.jsxs(g.Fragment,{children:[g.jsx(mm,{}),g.jsx(C4,{}),g.jsx(eS,{}),g.jsx(nS,{}),g.jsx(aS,{})]})}function PC(){return g.jsxs(Gw,{children:[g.jsx(zr,{path:"/",element:g.jsx(kC,{})}),g.jsx(zr,{path:"/login",element:g.jsx(IC,{})}),g.jsx(zr,{path:"/signup",element:g.jsx(NC,{})}),g.jsx(zr,{path:"/dashboard",element:g.jsx(CC,{})}),g.jsx(zr,{path:"/profile",element:g.jsx(OC,{})}),g.jsx(zr,{path:"/stock",element:g.jsx(DC,{})}),g.jsx(zr,{path:"*",element:g.jsx(MC,{})})," "]})}tw.createRoot(document.getElementById("root")).render(g.jsx(L.StrictMode,{children:g.jsx(p4,{children:g.jsx(PC,{})})}));
