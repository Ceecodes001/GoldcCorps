(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function nw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var vm={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function iw(){if(R1)return jl;R1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return jl.Fragment=e,jl.jsx=n,jl.jsxs=n,jl}var C1;function rw(){return C1||(C1=1,vm.exports=iw()),vm.exports}var g=rw(),_m={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function sw(){if(I1)return Ae;I1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function H(M,te,le){this.props=M,this.context=te,this.refs=z,this.updater=le||D}H.prototype.isReactComponent={},H.prototype.setState=function(M,te){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,te,"setState")},H.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function $(){}$.prototype=H.prototype;function ie(M,te,le){this.props=M,this.context=te,this.refs=z,this.updater=le||D}var ne=ie.prototype=new $;ne.constructor=ie,j(ne,H.prototype),ne.isPureReactComponent=!0;var ce=Array.isArray,oe={H:null,A:null,T:null,S:null,V:null},pe=Object.prototype.hasOwnProperty;function V(M,te,le,re,ye,Ce){return le=Ce.ref,{$$typeof:r,type:M,key:te,ref:le!==void 0?le:null,props:Ce}}function A(M,te){return V(M.type,te,void 0,void 0,void 0,M.props)}function R(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function O(M){var te={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(le){return te[le]})}var N=/\/+/g;function k(M,te){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):te.toString(36)}function I(){}function rt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(I,I):(M.status="pending",M.then(function(te){M.status==="pending"&&(M.status="fulfilled",M.value=te)},function(te){M.status==="pending"&&(M.status="rejected",M.reason=te)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Be(M,te,le,re,ye){var Ce=typeof M;(Ce==="undefined"||Ce==="boolean")&&(M=null);var we=!1;if(M===null)we=!0;else switch(Ce){case"bigint":case"string":case"number":we=!0;break;case"object":switch(M.$$typeof){case r:case e:we=!0;break;case b:return we=M._init,Be(we(M._payload),te,le,re,ye)}}if(we)return ye=ye(M),we=re===""?"."+k(M,0):re,ce(ye)?(le="",we!=null&&(le=we.replace(N,"$&/")+"/"),Be(ye,te,le,"",function(Zn){return Zn})):ye!=null&&(R(ye)&&(ye=A(ye,le+(ye.key==null||M&&M.key===ye.key?"":(""+ye.key).replace(N,"$&/")+"/")+we)),te.push(ye)),1;we=0;var Ot=re===""?".":re+":";if(ce(M))for(var et=0;et<M.length;et++)re=M[et],Ce=Ot+k(re,et),we+=Be(re,te,le,Ce,ye);else if(et=S(M),typeof et=="function")for(M=et.call(M),et=0;!(re=M.next()).done;)re=re.value,Ce=Ot+k(re,et++),we+=Be(re,te,le,Ce,ye);else if(Ce==="object"){if(typeof M.then=="function")return Be(rt(M),te,le,re,ye);throw te=String(M),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return we}function Q(M,te,le){if(M==null)return M;var re=[],ye=0;return Be(M,re,"","",function(Ce){return te.call(le,Ce,ye++)}),re}function se(M){if(M._status===-1){var te=M._result;te=te(),te.then(function(le){(M._status===0||M._status===-1)&&(M._status=1,M._result=le)},function(le){(M._status===0||M._status===-1)&&(M._status=2,M._result=le)}),M._status===-1&&(M._status=0,M._result=te)}if(M._status===1)return M._result.default;throw M._result}var de=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function Oe(){}return Ae.Children={map:Q,forEach:function(M,te,le){Q(M,function(){te.apply(this,arguments)},le)},count:function(M){var te=0;return Q(M,function(){te++}),te},toArray:function(M){return Q(M,function(te){return te})||[]},only:function(M){if(!R(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ae.Component=H,Ae.Fragment=n,Ae.Profiler=o,Ae.PureComponent=ie,Ae.StrictMode=s,Ae.Suspense=p,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(M){return oe.H.useMemoCache(M)}},Ae.cache=function(M){return function(){return M.apply(null,arguments)}},Ae.cloneElement=function(M,te,le){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var re=j({},M.props),ye=M.key,Ce=void 0;if(te!=null)for(we in te.ref!==void 0&&(Ce=void 0),te.key!==void 0&&(ye=""+te.key),te)!pe.call(te,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&te.ref===void 0||(re[we]=te[we]);var we=arguments.length-2;if(we===1)re.children=le;else if(1<we){for(var Ot=Array(we),et=0;et<we;et++)Ot[et]=arguments[et+2];re.children=Ot}return V(M.type,ye,void 0,void 0,Ce,re)},Ae.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},Ae.createElement=function(M,te,le){var re,ye={},Ce=null;if(te!=null)for(re in te.key!==void 0&&(Ce=""+te.key),te)pe.call(te,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ye[re]=te[re]);var we=arguments.length-2;if(we===1)ye.children=le;else if(1<we){for(var Ot=Array(we),et=0;et<we;et++)Ot[et]=arguments[et+2];ye.children=Ot}if(M&&M.defaultProps)for(re in we=M.defaultProps,we)ye[re]===void 0&&(ye[re]=we[re]);return V(M,Ce,void 0,void 0,null,ye)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(M){return{$$typeof:m,render:M}},Ae.isValidElement=R,Ae.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:se}},Ae.memo=function(M,te){return{$$typeof:y,type:M,compare:te===void 0?null:te}},Ae.startTransition=function(M){var te=oe.T,le={};oe.T=le;try{var re=M(),ye=oe.S;ye!==null&&ye(le,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(Oe,de)}catch(Ce){de(Ce)}finally{oe.T=te}},Ae.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},Ae.use=function(M){return oe.H.use(M)},Ae.useActionState=function(M,te,le){return oe.H.useActionState(M,te,le)},Ae.useCallback=function(M,te){return oe.H.useCallback(M,te)},Ae.useContext=function(M){return oe.H.useContext(M)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(M,te){return oe.H.useDeferredValue(M,te)},Ae.useEffect=function(M,te,le){var re=oe.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(M,te)},Ae.useId=function(){return oe.H.useId()},Ae.useImperativeHandle=function(M,te,le){return oe.H.useImperativeHandle(M,te,le)},Ae.useInsertionEffect=function(M,te){return oe.H.useInsertionEffect(M,te)},Ae.useLayoutEffect=function(M,te){return oe.H.useLayoutEffect(M,te)},Ae.useMemo=function(M,te){return oe.H.useMemo(M,te)},Ae.useOptimistic=function(M,te){return oe.H.useOptimistic(M,te)},Ae.useReducer=function(M,te,le){return oe.H.useReducer(M,te,le)},Ae.useRef=function(M){return oe.H.useRef(M)},Ae.useState=function(M){return oe.H.useState(M)},Ae.useSyncExternalStore=function(M,te,le){return oe.H.useSyncExternalStore(M,te,le)},Ae.useTransition=function(){return oe.H.useTransition()},Ae.version="19.1.1",Ae}var N1;function mp(){return N1||(N1=1,_m.exports=sw()),_m.exports}var L=mp();const er=nw(L);var Em={exports:{}},Ll={},bm={exports:{}},Tm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1;function aw(){return D1||(D1=1,(function(r){function e(Q,se){var de=Q.length;Q.push(se);e:for(;0<de;){var Oe=de-1>>>1,M=Q[Oe];if(0<o(M,se))Q[Oe]=se,Q[de]=M,de=Oe;else break e}}function n(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var se=Q[0],de=Q.pop();if(de!==se){Q[0]=de;e:for(var Oe=0,M=Q.length,te=M>>>1;Oe<te;){var le=2*(Oe+1)-1,re=Q[le],ye=le+1,Ce=Q[ye];if(0>o(re,de))ye<M&&0>o(Ce,re)?(Q[Oe]=Ce,Q[ye]=de,Oe=ye):(Q[Oe]=re,Q[le]=de,Oe=le);else if(ye<M&&0>o(Ce,de))Q[Oe]=Ce,Q[ye]=de,Oe=ye;else break e}}return se}function o(Q,se){var de=Q.sortIndex-se.sortIndex;return de!==0?de:Q.id-se.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],b=1,x=null,S=3,D=!1,j=!1,z=!1,H=!1,$=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function ce(Q){for(var se=n(y);se!==null;){if(se.callback===null)s(y);else if(se.startTime<=Q)s(y),se.sortIndex=se.expirationTime,e(p,se);else break;se=n(y)}}function oe(Q){if(z=!1,ce(Q),!j)if(n(p)!==null)j=!0,pe||(pe=!0,k());else{var se=n(y);se!==null&&Be(oe,se.startTime-Q)}}var pe=!1,V=-1,A=5,R=-1;function O(){return H?!0:!(r.unstable_now()-R<A)}function N(){if(H=!1,pe){var Q=r.unstable_now();R=Q;var se=!0;try{e:{j=!1,z&&(z=!1,ie(V),V=-1),D=!0;var de=S;try{t:{for(ce(Q),x=n(p);x!==null&&!(x.expirationTime>Q&&O());){var Oe=x.callback;if(typeof Oe=="function"){x.callback=null,S=x.priorityLevel;var M=Oe(x.expirationTime<=Q);if(Q=r.unstable_now(),typeof M=="function"){x.callback=M,ce(Q),se=!0;break t}x===n(p)&&s(p),ce(Q)}else s(p);x=n(p)}if(x!==null)se=!0;else{var te=n(y);te!==null&&Be(oe,te.startTime-Q),se=!1}}break e}finally{x=null,S=de,D=!1}se=void 0}}finally{se?k():pe=!1}}}var k;if(typeof ne=="function")k=function(){ne(N)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,rt=I.port2;I.port1.onmessage=N,k=function(){rt.postMessage(null)}}else k=function(){$(N,0)};function Be(Q,se){V=$(function(){Q(r.unstable_now())},se)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Q){Q.callback=null},r.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(Q){switch(S){case 1:case 2:case 3:var se=3;break;default:se=S}var de=S;S=se;try{return Q()}finally{S=de}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(Q,se){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var de=S;S=Q;try{return se()}finally{S=de}},r.unstable_scheduleCallback=function(Q,se,de){var Oe=r.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?Oe+de:Oe):de=Oe,Q){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=de+M,Q={id:b++,callback:se,priorityLevel:Q,startTime:de,expirationTime:M,sortIndex:-1},de>Oe?(Q.sortIndex=de,e(y,Q),n(p)===null&&Q===n(y)&&(z?(ie(V),V=-1):z=!0,Be(oe,de-Oe))):(Q.sortIndex=M,e(p,Q),j||D||(j=!0,pe||(pe=!0,k()))),Q},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(Q){var se=S;return function(){var de=S;S=se;try{return Q.apply(this,arguments)}finally{S=de}}}})(Tm)),Tm}var O1;function ow(){return O1||(O1=1,bm.exports=aw()),bm.exports}var wm={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1;function lw(){if(M1)return $t;M1=1;var r=mp();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,y,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:p,containerInfo:y,implementation:b}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,$t.createPortal=function(p,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return c(p,y,null,b)},$t.flushSync=function(p){var y=f.T,b=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=b,s.d.f()}},$t.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},$t.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},$t.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var b=y.as,x=m(b,y.crossOrigin),S=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:D}):b==="script"&&s.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$t.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},$t.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,x=m(b,y.crossOrigin);s.d.L(p,b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$t.preloadModule=function(p,y){if(typeof p=="string")if(y){var b=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},$t.requestFormReset=function(p){s.d.r(p)},$t.unstable_batchedUpdates=function(p,y){return p(y)},$t.useFormState=function(p,y,b){return f.H.useFormState(p,y,b)},$t.useFormStatus=function(){return f.H.useHostTransitionStatus()},$t.version="19.1.1",$t}var k1;function cw(){if(k1)return wm.exports;k1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wm.exports=lw(),wm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function uw(){if(P1)return Ll;P1=1;var r=ow(),e=mp(),n=cw();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var E=!1,T=h.child;T;){if(T===a){E=!0,a=h,l=d;break}if(T===l){E=!0,l=h,a=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===a){E=!0,a=d,l=h;break}if(T===l){E=!0,l=d,a=h;break}T=T.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var b=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case H:return"Profiler";case z:return"StrictMode";case oe:return"Suspense";case pe:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case ne:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return i=t.displayName||null,i!==null?i:rt(t.type)||"Memo";case A:i=t._payload,t=t._init;try{return rt(t(i))}catch{}}return null}var Be=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},Oe=[],M=-1;function te(t){return{current:t}}function le(t){0>M||(t.current=Oe[M],Oe[M]=null,M--)}function re(t,i){M++,Oe[M]=t.current,t.current=i}var ye=te(null),Ce=te(null),we=te(null),Ot=te(null);function et(t,i){switch(re(we,i),re(Ce,t),re(ye,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?t1(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=t1(i),t=n1(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}le(ye),re(ye,t)}function Zn(){le(ye),le(Ce),le(we)}function hr(t){t.memoizedState!==null&&re(Ot,t);var i=ye.current,a=n1(i,t.type);i!==a&&(re(Ce,t),re(ye,a))}function Ai(t){Ce.current===t&&(le(ye),le(Ce)),Ot.current===t&&(le(Ot),Ol._currentValue=de)}var as=Object.prototype.hasOwnProperty,os=r.unstable_scheduleCallback,ls=r.unstable_cancelCallback,Io=r.unstable_shouldYield,Rc=r.unstable_requestPaint,Tn=r.unstable_now,vf=r.unstable_getCurrentPriorityLevel,No=r.unstable_ImmediatePriority,oa=r.unstable_UserBlockingPriority,cs=r.unstable_NormalPriority,_f=r.unstable_LowPriority,la=r.unstable_IdlePriority,Do=r.log,Cc=r.unstable_setDisableYieldValue,ut=null,Ge=null;function hn(t){if(typeof Do=="function"&&Cc(t),Ge&&typeof Ge.setStrictMode=="function")try{Ge.setStrictMode(ut,t)}catch{}}var Kt=Math.clz32?Math.clz32:us,Ic=Math.log,Ef=Math.LN2;function us(t){return t>>>=0,t===0?32:31-(Ic(t)/Ef|0)|0}var hs=256,fs=4194304;function Ln(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ca(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Ln(l):(E&=T,E!==0?h=Ln(E):a||(a=T&~t,a!==0&&(h=Ln(a))))):(T=l&~d,T!==0?h=Ln(T):E!==0?h=Ln(E):a||(a=l&~t,a!==0&&(h=Ln(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function ds(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Oo(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mo(){var t=hs;return hs<<=1,(hs&4194048)===0&&(hs=256),t}function ko(){var t=fs;return fs<<=1,(fs&62914560)===0&&(fs=4194304),t}function Ri(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Ci(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Po(t,i,a,l,h,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,C=t.expirationTimes,F=t.hiddenUpdates;for(a=E&~a;0<a;){var X=31-Kt(a),J=1<<X;T[X]=0,C[X]=-1;var G=F[X];if(G!==null)for(F[X]=null,X=0;X<G.length;X++){var Y=G[X];Y!==null&&(Y.lane&=-536870913)}a&=~J}l!==0&&Jn(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~i))}function Jn(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Kt(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Vo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Kt(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function fr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ua(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function dr(){var t=se.p;return t!==0?t:(t=window.event,t===void 0?32:b1(t.type))}function Nc(t,i){var a=se.p;try{return se.p=t,i()}finally{se.p=a}}var st=Math.random().toString(36).slice(2),xt="__reactFiber$"+st,vt="__reactProps$"+st,wn="__reactContainer$"+st,jo="__reactEvents$"+st,bf="__reactListeners$"+st,mr="__reactHandles$"+st,Dc="__reactResources$"+st,ms="__reactMarker$"+st;function pr(t){delete t[xt],delete t[vt],delete t[jo],delete t[bf],delete t[mr]}function Ii(t){var i=t[xt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[wn]||a[xt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=a1(t);t!==null;){if(a=t[xt])return a;t=a1(t)}return i}t=a,a=t.parentNode}return null}function ei(t){if(t=t[xt]||t[wn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function ti(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function en(t){var i=t[Dc];return i||(i=t[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function mt(t){t[ms]=!0}var Lo=new Set,ha={};function Un(t,i){Ni(t,i),Ni(t+"Capture",i)}function Ni(t,i){for(ha[t]=i,t=0;t<i.length;t++)Lo.add(i[t])}var Oc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mc={},ps={};function kc(t){return as.call(ps,t)?!0:as.call(Mc,t)?!1:Oc.test(t)?ps[t]=!0:(Mc[t]=!0,!1)}function gr(t,i,a){if(kc(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function ni(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Ut(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var gs,Pc;function Di(t){if(gs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);gs=i&&i[1]||"",Pc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gs+t+Pc}var fa=!1;function da(t,i){if(!t||fa)return"";fa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(Y){var G=Y}Reflect.construct(t,[],J)}else{try{J.call()}catch(Y){G=Y}t.call(J.prototype)}}else{try{throw Error()}catch(Y){G=Y}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(Y){if(Y&&G&&typeof Y.stack=="string")return[Y.stack,G.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var C=E.split(`
`),F=T.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<F.length&&!F[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===F.length)for(l=C.length-1,h=F.length-1;1<=l&&0<=h&&C[l]!==F[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==F[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==F[h]){var X=`
`+C[l].replace(" at new "," at ");return t.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",t.displayName)),X}while(1<=l&&0<=h);break}}}finally{fa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Di(a):""}function Uo(t){switch(t.tag){case 26:case 27:case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 15:return da(t.type,!1);case 11:return da(t.type.render,!1);case 1:return da(t.type,!0);case 31:return Di("Activity");default:return""}}function ma(t){try{var i="";do i+=Uo(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function tn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zo(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Tf(t){var i=zo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pa(t){t._valueTracker||(t._valueTracker=Tf(t))}function Bo(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=zo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ys(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wf=/[\n"\\]/g;function _t(t){return t.replace(wf,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function fn(t,i,a,l,h,d,E,T){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+tn(i)):t.value!==""+tn(i)&&(t.value=""+tn(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?yr(t,E,tn(i)):a!=null?yr(t,E,tn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+tn(T):t.removeAttribute("name")}function vs(t,i,a,l,h,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+tn(a):"",i=i!=null?""+tn(i):a,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function yr(t,i,a){i==="number"&&ys(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Oi(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+tn(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Qe(t,i,a){if(i!=null&&(i=""+tn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+tn(a):""}function _s(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Be(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=tn(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Sn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Es=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vc(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||Es.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function qo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Vc(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Vc(t,d,i[d])}function Fo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ga(t){return xf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Mi=null;function xn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ki=null,Pi=null;function Ho(t){var i=ei(t);if(i&&(t=i.stateNode)){var a=t[vt]||null;e:switch(t=i.stateNode,i.type){case"input":if(fn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_t(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[vt]||null;if(!h)throw Error(s(90));fn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&Bo(l)}break e;case"textarea":Qe(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Oi(t,!!a.multiple,i,!1)}}}var ii=!1;function jc(t,i,a){if(ii)return t(i,a);ii=!0;try{var l=t(i);return l}finally{if(ii=!1,(ki!==null||Pi!==null)&&(Nu(),ki&&(i=ki,t=Pi,Pi=ki=null,Ho(i),t)))for(i=0;i<t.length;i++)Ho(t[i])}}function bs(t,i){var a=t.stateNode;if(a===null)return null;var l=a[vt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(zn)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){An=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{An=!1}var ri=null,vr=null,Vi=null;function Go(){if(Vi)return Vi;var t,i=vr,a=i.length,l,h="value"in ri?ri.value:ri.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===h[d-l];l++);return Vi=h.slice(t,1<l?1-l:void 0)}function si(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ai(){return!0}function Yo(){return!1}function Mt(t){function i(a,l,h,d,E){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ai:Yo,this.isPropagationStopped=Yo,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),i}var Fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Mt(Fe),ws=b({},Fe,{view:0,detail:0}),Lc=Mt(ws),va,_a,oi,Ss=b({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(va=t.screenX-oi.screenX,_a=t.screenY-oi.screenY):_a=va=0,oi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:_a}}),Rn=Mt(Ss),Uc=b({},Ss,{dataTransfer:0}),Af=Mt(Uc),xs=b({},ws,{relatedTarget:0}),Ea=Mt(xs),Ko=b({},Fe,{animationName:0,elapsedTime:0,pseudoElement:0}),ba=Mt(Ko),zc=b({},Fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ta=Mt(zc),Rf=b({},Fe,{data:0}),Qo=Mt(Rf),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $o(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qc[t])?!!i[t]:!1}function Rs(){return $o}var Fc=b({},ws,{key:function(t){if(t.key){var i=As[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=si(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bc[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(t){return t.type==="keypress"?si(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?si(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wa=Mt(Fc),Hc=b({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xo=Mt(Hc),ji=b({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),Gc=Mt(ji),Yc=b({},Fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kc=Mt(Yc),Qc=b({},Ss,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sa=Mt(Qc),nn=b({},Fe,{newState:0,oldState:0}),$c=Mt(nn),Xc=[9,13,27,32],li=zn&&"CompositionEvent"in window,u=null;zn&&"documentMode"in document&&(u=document.documentMode);var v=zn&&"TextEvent"in window&&!u,_=zn&&(!li||u&&8<u&&11>=u),w=" ",B=!1;function K(t,i){switch(t){case"keyup":return Xc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ve=!1;function At(t,i){switch(t){case"compositionend":return ae(i);case"keypress":return i.which!==32?null:(B=!0,w);case"textInput":return t=i.data,t===w&&B?null:t;default:return null}}function je(t,i){if(Ve)return t==="compositionend"||!li&&K(t,i)?(t=Go(),Vi=vr=ri=null,Ve=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var kt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rt(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!kt[t.type]:i==="textarea"}function Li(t,i,a,l){ki?Pi?Pi.push(l):Pi=[l]:ki=l,i=Vu(i,"onChange"),0<i.length&&(a=new ya("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var zt=null,ci=null;function Wo(t){X0(t,0)}function Wc(t){var i=ti(t);if(Bo(i))return t}function yg(t,i){if(t==="change")return i}var vg=!1;if(zn){var Cf;if(zn){var If="oninput"in document;if(!If){var _g=document.createElement("div");_g.setAttribute("oninput","return;"),If=typeof _g.oninput=="function"}Cf=If}else Cf=!1;vg=Cf&&(!document.documentMode||9<document.documentMode)}function Eg(){zt&&(zt.detachEvent("onpropertychange",bg),ci=zt=null)}function bg(t){if(t.propertyName==="value"&&Wc(ci)){var i=[];Li(i,ci,t,xn(t)),jc(Wo,i)}}function Ob(t,i,a){t==="focusin"?(Eg(),zt=i,ci=a,zt.attachEvent("onpropertychange",bg)):t==="focusout"&&Eg()}function Mb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wc(ci)}function kb(t,i){if(t==="click")return Wc(i)}function Pb(t,i){if(t==="input"||t==="change")return Wc(i)}function Vb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var dn=typeof Object.is=="function"?Object.is:Vb;function Zo(t,i){if(dn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!as.call(i,h)||!dn(t[h],i[h]))return!1}return!0}function Tg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wg(t,i){var a=Tg(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tg(a)}}function Sg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Sg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function xg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ys(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ys(t.document)}return i}function Nf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var jb=zn&&"documentMode"in document&&11>=document.documentMode,xa=null,Df=null,Jo=null,Of=!1;function Ag(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Of||xa==null||xa!==ys(l)||(l=xa,"selectionStart"in l&&Nf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Jo&&Zo(Jo,l)||(Jo=l,l=Vu(Df,"onSelect"),0<l.length&&(i=new ya("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=xa)))}function Cs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Aa={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Mf={},Rg={};zn&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Is(t){if(Mf[t])return Mf[t];if(!Aa[t])return t;var i=Aa[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Rg)return Mf[t]=i[a];return t}var Cg=Is("animationend"),Ig=Is("animationiteration"),Ng=Is("animationstart"),Lb=Is("transitionrun"),Ub=Is("transitionstart"),zb=Is("transitioncancel"),Dg=Is("transitionend"),Og=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kf.push("scrollEnd");function Bn(t,i){Og.set(t,i),Un(i,[t])}var Mg=new WeakMap;function Cn(t,i){if(typeof t=="object"&&t!==null){var a=Mg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:ma(i)},Mg.set(t,i),i)}return{value:t,source:i,stack:ma(i)}}var In=[],Ra=0,Pf=0;function Zc(){for(var t=Ra,i=Pf=Ra=0;i<t;){var a=In[i];In[i++]=null;var l=In[i];In[i++]=null;var h=In[i];In[i++]=null;var d=In[i];if(In[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}d!==0&&kg(a,h,d)}}function Jc(t,i,a,l){In[Ra++]=t,In[Ra++]=i,In[Ra++]=a,In[Ra++]=l,Pf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vf(t,i,a,l){return Jc(t,i,a,l),eu(t)}function Ca(t,i){return Jc(t,null,null,i),eu(t)}function kg(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-Kt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function eu(t){if(50<Sl)throw Sl=0,qd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ia={};function Bb(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,i,a,l){return new Bb(t,i,a,l)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ui(t,i){var a=t.alternate;return a===null?(a=mn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Pg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function tu(t,i,a,l,h,d){var E=0;if(l=t,typeof t=="function")jf(t)&&(E=1);else if(typeof t=="string")E=FT(t,a,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=mn(31,a,i,h),t.elementType=R,t.lanes=d,t;case j:return Ns(a.children,h,d,i);case z:E=8,h|=24;break;case H:return t=mn(12,a,i,h|2),t.elementType=H,t.lanes=d,t;case oe:return t=mn(13,a,i,h),t.elementType=oe,t.lanes=d,t;case pe:return t=mn(19,a,i,h),t.elementType=pe,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $:case ne:E=10;break e;case ie:E=9;break e;case ce:E=11;break e;case V:E=14;break e;case A:E=16,l=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=mn(E,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,a,l){return t=mn(7,t,l,i),t.lanes=a,t}function Lf(t,i,a){return t=mn(6,t,null,i),t.lanes=a,t}function Uf(t,i,a){return i=mn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Na=[],Da=0,nu=null,iu=0,Nn=[],Dn=0,Ds=null,zi=1,Bi="";function Os(t,i){Na[Da++]=iu,Na[Da++]=nu,nu=t,iu=i}function Vg(t,i,a){Nn[Dn++]=zi,Nn[Dn++]=Bi,Nn[Dn++]=Ds,Ds=t;var l=zi;t=Bi;var h=32-Kt(l)-1;l&=~(1<<h),a+=1;var d=32-Kt(i)+h;if(30<d){var E=h-h%5;d=(l&(1<<E)-1).toString(32),l>>=E,h-=E,zi=1<<32-Kt(i)+h|a<<h|l,Bi=d+t}else zi=1<<d|a<<h|l,Bi=t}function zf(t){t.return!==null&&(Os(t,1),Vg(t,1,0))}function Bf(t){for(;t===nu;)nu=Na[--Da],Na[Da]=null,iu=Na[--Da],Na[Da]=null;for(;t===Ds;)Ds=Nn[--Dn],Nn[Dn]=null,Bi=Nn[--Dn],Nn[Dn]=null,zi=Nn[--Dn],Nn[Dn]=null}var rn=null,ht=null,qe=!1,Ms=null,ui=!1,qf=Error(s(519));function ks(t){var i=Error(s(418,""));throw nl(Cn(i,t)),qf}function jg(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[xt]=t,i[vt]=l,a){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(a=0;a<Al.length;a++)De(Al[a],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":De("invalid",i),vs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pa(i);break;case"select":De("invalid",i);break;case"textarea":De("invalid",i),_s(i,l.value,l.defaultValue,l.children),pa(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||e1(i.textContent,a)?(l.popover!=null&&(De("beforetoggle",i),De("toggle",i)),l.onScroll!=null&&De("scroll",i),l.onScrollEnd!=null&&De("scrollend",i),l.onClick!=null&&(i.onclick=ju),i=!0):i=!1,i||ks(t)}function Lg(t){for(rn=t.return;rn;)switch(rn.tag){case 5:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:rn=rn.return}}function el(t){if(t!==rn)return!1;if(!qe)return Lg(t),qe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||rm(t.type,t.memoizedProps)),a=!a),a&&ht&&ks(t),Lg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){ht=Fn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}ht=null}}else i===27?(i=ht,kr(t.type)?(t=lm,lm=null,ht=t):ht=i):ht=rn?Fn(t.stateNode.nextSibling):null;return!0}function tl(){ht=rn=null,qe=!1}function Ug(){var t=Ms;return t!==null&&(on===null?on=t:on.push.apply(on,t),Ms=null),t}function nl(t){Ms===null?Ms=[t]:Ms.push(t)}var Ff=te(null),Ps=null,qi=null;function _r(t,i,a){re(Ff,i._currentValue),i._currentValue=a}function Fi(t){t._currentValue=Ff.current,le(Ff)}function Hf(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Gf(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var E=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var C=0;C<i.length;C++)if(T.context===i[C]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Hf(d.return,a,t),l||(E=null);break e}d=T.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Hf(E,a,t),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===t){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function il(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=h.type;dn(h.pendingProps.value,E.value)||(t!==null?t.push(T):t=[T])}}else if(h===Ot.current){if(E=h.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Ol):t=[Ol])}h=h.return}t!==null&&Gf(i,t,a,l),i.flags|=262144}function ru(t){for(t=t.firstContext;t!==null;){if(!dn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vs(t){Ps=t,qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return zg(Ps,t)}function su(t,i){return Ps===null&&Vs(t),zg(t,i)}function zg(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},qi===null){if(t===null)throw Error(s(308));qi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else qi=qi.next=i;return a}var qb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},Fb=r.unstable_scheduleCallback,Hb=r.unstable_NormalPriority,Ct={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new qb,data:new Map,refCount:0}}function rl(t){t.refCount--,t.refCount===0&&Fb(Hb,function(){t.controller.abort()})}var sl=null,Kf=0,Oa=0,Ma=null;function Gb(t,i){if(sl===null){var a=sl=[];Kf=0,Oa=$d(),Ma={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Kf++,i.then(Bg,Bg),i}function Bg(){if(--Kf===0&&sl!==null){Ma!==null&&(Ma.status="fulfilled");var t=sl;sl=null,Oa=0,Ma=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Yb(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var qg=Q.S;Q.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Gb(t,i),qg!==null&&qg(t,i)};var js=te(null);function Qf(){var t=js.current;return t!==null?t:tt.pooledCache}function au(t,i){i===null?re(js,js.current):re(js,i.pool)}function Fg(){var t=Qf();return t===null?null:{parent:Ct._currentValue,pool:t}}var al=Error(s(460)),Hg=Error(s(474)),ou=Error(s(542)),$f={then:function(){}};function Gg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lu(){}function Yg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(lu,lu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Qg(t),t;default:if(typeof i.status=="string")i.then(lu,lu);else{if(t=tt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Qg(t),t}throw ol=i,al}}var ol=null;function Kg(){if(ol===null)throw Error(s(459));var t=ol;return ol=null,t}function Qg(t){if(t===al||t===ou)throw Error(s(483))}var Er=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function br(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Tr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=eu(t),kg(t,null,a),i}return Jc(t,l,i,a),eu(t)}function ll(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Vo(t,a)}}function Zf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Jf=!1;function cl(){if(Jf){var t=Ma;if(t!==null)throw t}}function ul(t,i,a,l){Jf=!1;var h=t.updateQueue;Er=!1;var d=h.firstBaseUpdate,E=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var C=T,F=C.next;C.next=null,E===null?d=F:E.next=F,E=C;var X=t.alternate;X!==null&&(X=X.updateQueue,T=X.lastBaseUpdate,T!==E&&(T===null?X.firstBaseUpdate=F:T.next=F,X.lastBaseUpdate=C))}if(d!==null){var J=h.baseState;E=0,X=F=C=null,T=d;do{var G=T.lane&-536870913,Y=G!==T.lane;if(Y?(Le&G)===G:(l&G)===G){G!==0&&G===Oa&&(Jf=!0),X!==null&&(X=X.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Te=t,ve=T;G=i;var We=a;switch(ve.tag){case 1:if(Te=ve.payload,typeof Te=="function"){J=Te.call(We,J,G);break e}J=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=ve.payload,G=typeof Te=="function"?Te.call(We,J,G):Te,G==null)break e;J=b({},J,G);break e;case 2:Er=!0}}G=T.callback,G!==null&&(t.flags|=64,Y&&(t.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[G]:Y.push(G))}else Y={lane:G,tag:T.tag,payload:T.payload,callback:T.callback,next:null},X===null?(F=X=Y,C=J):X=X.next=Y,E|=G;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;Y=T,T=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);X===null&&(C=J),h.baseState=C,h.firstBaseUpdate=F,h.lastBaseUpdate=X,d===null&&(h.shared.lanes=0),Nr|=E,t.lanes=E,t.memoizedState=J}}function $g(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function Xg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$g(a[t],i)}var ka=te(null),cu=te(0);function Wg(t,i){t=Xi,re(cu,t),re(ka,i),Xi=t|i.baseLanes}function ed(){re(cu,Xi),re(ka,ka.current)}function td(){Xi=cu.current,le(ka),le(cu)}var wr=0,Re=null,$e=null,Et=null,uu=!1,Pa=!1,Ls=!1,hu=0,hl=0,Va=null,Kb=0;function pt(){throw Error(s(321))}function nd(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!dn(t[a],i[a]))return!1;return!0}function id(t,i,a,l,h,d){return wr=d,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Q.H=t===null||t.memoizedState===null?ky:Py,Ls=!1,d=a(l,h),Ls=!1,Pa&&(d=Jg(i,a,l,h)),Zg(t),d}function Zg(t){Q.H=yu;var i=$e!==null&&$e.next!==null;if(wr=0,Et=$e=Re=null,uu=!1,hl=0,Va=null,i)throw Error(s(300));t===null||Pt||(t=t.dependencies,t!==null&&ru(t)&&(Pt=!0))}function Jg(t,i,a,l){Re=t;var h=0;do{if(Pa&&(Va=null),hl=0,Pa=!1,25<=h)throw Error(s(301));if(h+=1,Et=$e=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Q.H=eT,d=i(a,l)}while(Pa);return d}function Qb(){var t=Q.H,i=t.useState()[0];return i=typeof i.then=="function"?fl(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(Re.flags|=1024),i}function rd(){var t=hu!==0;return hu=0,t}function sd(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function ad(t){if(uu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}uu=!1}wr=0,Et=$e=Re=null,Pa=!1,hl=hu=0,Va=null}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Re.memoizedState=Et=t:Et=Et.next=t,Et}function bt(){if($e===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=Et===null?Re.memoizedState:Et.next;if(i!==null)Et=i,$e=t;else{if(t===null)throw Re.alternate===null?Error(s(467)):Error(s(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Et===null?Re.memoizedState=Et=t:Et=Et.next=t}return Et}function od(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(t){var i=hl;return hl+=1,Va===null&&(Va=[]),t=Yg(Va,t,i),i=Re,(Et===null?i.memoizedState:Et.next)===null&&(i=i.alternate,Q.H=i===null||i.memoizedState===null?ky:Py),t}function fu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return fl(t);if(t.$$typeof===ne)return Qt(t)}throw Error(s(438,String(t)))}function ld(t){var i=null,a=Re.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=od(),Re.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=O;return i.index++,a}function Hi(t,i){return typeof i=="function"?i(t):i}function du(t){var i=bt();return cd(i,$e,t)}function cd(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var E=h.next;h.next=d.next,d.next=E}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var T=E=null,C=null,F=i,X=!1;do{var J=F.lane&-536870913;if(J!==F.lane?(Le&J)===J:(wr&J)===J){var G=F.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),J===Oa&&(X=!0);else if((wr&G)===G){F=F.next,G===Oa&&(X=!0);continue}else J={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(T=C=J,E=d):C=C.next=J,Re.lanes|=G,Nr|=G;J=F.action,Ls&&a(d,J),d=F.hasEagerState?F.eagerState:a(d,J)}else G={lane:J,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},C===null?(T=C=G,E=d):C=C.next=G,Re.lanes|=J,Nr|=J;F=F.next}while(F!==null&&F!==i);if(C===null?E=d:C.next=T,!dn(d,t.memoizedState)&&(Pt=!0,X&&(a=Ma,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=C,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function ud(t){var i=bt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do d=t(d,E.action),E=E.next;while(E!==h);dn(d,i.memoizedState)||(Pt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function ey(t,i,a){var l=Re,h=bt(),d=qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!dn(($e||h).memoizedState,a);E&&(h.memoizedState=a,Pt=!0),h=h.queue;var T=iy.bind(null,l,h,t);if(dl(2048,8,T,[t]),h.getSnapshot!==i||E||Et!==null&&Et.memoizedState.tag&1){if(l.flags|=2048,ja(9,mu(),ny.bind(null,l,h,a,i),null),tt===null)throw Error(s(349));d||(wr&124)!==0||ty(l,i,a)}return a}function ty(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Re.updateQueue,i===null?(i=od(),Re.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function ny(t,i,a,l){i.value=a,i.getSnapshot=l,ry(i)&&sy(t)}function iy(t,i,a){return a(function(){ry(i)&&sy(t)})}function ry(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!dn(t,a)}catch{return!0}}function sy(t){var i=Ca(t,2);i!==null&&_n(i,t,2)}function hd(t){var i=sn();if(typeof t=="function"){var a=t;if(t=a(),Ls){hn(!0);try{a()}finally{hn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},i}function ay(t,i,a,l){return t.baseState=a,cd(t,$e,typeof l=="function"?l:Hi)}function $b(t,i,a,l,h){if(gu(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};Q.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,oy(i,d)):(d.next=a.next,i.pending=a.next=d)}}function oy(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=Q.T,E={};Q.T=E;try{var T=a(h,l),C=Q.S;C!==null&&C(E,T),ly(t,i,T)}catch(F){fd(t,i,F)}finally{Q.T=d}}else try{d=a(h,l),ly(t,i,d)}catch(F){fd(t,i,F)}}function ly(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){cy(t,i,l)},function(l){return fd(t,i,l)}):cy(t,i,a)}function cy(t,i,a){i.status="fulfilled",i.value=a,uy(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,oy(t,a)))}function fd(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,uy(i),i=i.next;while(i!==l)}t.action=null}function uy(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function hy(t,i){return i}function fy(t,i){if(qe){var a=tt.formState;if(a!==null){e:{var l=Re;if(qe){if(ht){t:{for(var h=ht,d=ui;h.nodeType!==8;){if(!d){h=null;break t}if(h=Fn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ht=Fn(h.nextSibling),l=h.data==="F!";break e}}ks(l)}l=!1}l&&(i=a[0])}}return a=sn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hy,lastRenderedState:i},a.queue=l,a=Dy.bind(null,Re,l),l.dispatch=a,l=hd(!1),d=yd.bind(null,Re,!1,l.queue),l=sn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=$b.bind(null,Re,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function dy(t){var i=bt();return my(i,$e,t)}function my(t,i,a){if(i=cd(t,i,hy)[0],t=du(Hi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=fl(i)}catch(E){throw E===al?ou:E}else l=i;i=bt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Re.flags|=2048,ja(9,mu(),Xb.bind(null,h,a),null)),[l,d,t]}function Xb(t,i){t.action=i}function py(t){var i=bt(),a=$e;if(a!==null)return my(i,a,t);bt(),i=i.memoizedState,a=bt();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function ja(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Re.updateQueue,i===null&&(i=od(),Re.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function mu(){return{destroy:void 0,resource:void 0}}function gy(){return bt().memoizedState}function pu(t,i,a,l){var h=sn();l=l===void 0?null:l,Re.flags|=t,h.memoizedState=ja(1|i,mu(),a,l)}function dl(t,i,a,l){var h=bt();l=l===void 0?null:l;var d=h.memoizedState.inst;$e!==null&&l!==null&&nd(l,$e.memoizedState.deps)?h.memoizedState=ja(i,d,a,l):(Re.flags|=t,h.memoizedState=ja(1|i,d,a,l))}function yy(t,i){pu(8390656,8,t,i)}function vy(t,i){dl(2048,8,t,i)}function _y(t,i){return dl(4,2,t,i)}function Ey(t,i){return dl(4,4,t,i)}function by(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ty(t,i,a){a=a!=null?a.concat([t]):null,dl(4,4,by.bind(null,i,t),a)}function dd(){}function wy(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&nd(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Sy(t,i){var a=bt();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&nd(i,l[1]))return l[0];if(l=t(),Ls){hn(!0);try{t()}finally{hn(!1)}}return a.memoizedState=[l,i],l}function md(t,i,a){return a===void 0||(wr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=R0(),Re.lanes|=t,Nr|=t,a)}function xy(t,i,a,l){return dn(a,i)?a:ka.current!==null?(t=md(t,a,l),dn(t,i)||(Pt=!0),t):(wr&42)===0?(Pt=!0,t.memoizedState=a):(t=R0(),Re.lanes|=t,Nr|=t,i)}function Ay(t,i,a,l,h){var d=se.p;se.p=d!==0&&8>d?d:8;var E=Q.T,T={};Q.T=T,yd(t,!1,i,a);try{var C=h(),F=Q.S;if(F!==null&&F(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=Yb(C,l);ml(t,i,X,vn(t))}else ml(t,i,l,vn(t))}catch(J){ml(t,i,{then:function(){},status:"rejected",reason:J},vn())}finally{se.p=d,Q.T=E}}function Wb(){}function pd(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=Ry(t).queue;Ay(t,h,i,de,a===null?Wb:function(){return Cy(t),a(l)})}function Ry(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:de},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Cy(t){var i=Ry(t).next.queue;ml(t,i,{},vn())}function gd(){return Qt(Ol)}function Iy(){return bt().memoizedState}function Ny(){return bt().memoizedState}function Zb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=vn();t=br(a);var l=Tr(i,t,a);l!==null&&(_n(l,i,a),ll(l,i,a)),i={cache:Yf()},t.payload=i;return}i=i.return}}function Jb(t,i,a){var l=vn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},gu(t)?Oy(i,a):(a=Vf(t,i,a,l),a!==null&&(_n(a,t,l),My(a,i,l)))}function Dy(t,i,a){var l=vn();ml(t,i,a,l)}function ml(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(gu(t))Oy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,a);if(h.hasEagerState=!0,h.eagerState=T,dn(T,E))return Jc(t,i,h,0),tt===null&&Zc(),!1}catch{}finally{}if(a=Vf(t,i,h,l),a!==null)return _n(a,t,l),My(a,i,l),!0}return!1}function yd(t,i,a,l){if(l={lane:2,revertLane:$d(),action:l,hasEagerState:!1,eagerState:null,next:null},gu(t)){if(i)throw Error(s(479))}else i=Vf(t,a,l,2),i!==null&&_n(i,t,2)}function gu(t){var i=t.alternate;return t===Re||i!==null&&i===Re}function Oy(t,i){Pa=uu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function My(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Vo(t,a)}}var yu={readContext:Qt,use:fu,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt},ky={readContext:Qt,use:fu,useCallback:function(t,i){return sn().memoizedState=[t,i===void 0?null:i],t},useContext:Qt,useEffect:yy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,pu(4194308,4,by.bind(null,i,t),a)},useLayoutEffect:function(t,i){return pu(4194308,4,t,i)},useInsertionEffect:function(t,i){pu(4,2,t,i)},useMemo:function(t,i){var a=sn();i=i===void 0?null:i;var l=t();if(Ls){hn(!0);try{t()}finally{hn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=sn();if(a!==void 0){var h=a(i);if(Ls){hn(!0);try{a(i)}finally{hn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Jb.bind(null,Re,t),[l.memoizedState,t]},useRef:function(t){var i=sn();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,a=Dy.bind(null,Re,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:dd,useDeferredValue:function(t,i){var a=sn();return md(a,t,i)},useTransition:function(){var t=hd(!1);return t=Ay.bind(null,Re,t.queue,!0,!1),sn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Re,h=sn();if(qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),tt===null)throw Error(s(349));(Le&124)!==0||ty(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,yy(iy.bind(null,l,d,t),[t]),l.flags|=2048,ja(9,mu(),ny.bind(null,l,d,a,i),null),a},useId:function(){var t=sn(),i=tt.identifierPrefix;if(qe){var a=Bi,l=zi;a=(l&~(1<<32-Kt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=hu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=Kb++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:gd,useFormState:fy,useActionState:fy,useOptimistic:function(t){var i=sn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=yd.bind(null,Re,!0,a),a.dispatch=i,[t,i]},useMemoCache:ld,useCacheRefresh:function(){return sn().memoizedState=Zb.bind(null,Re)}},Py={readContext:Qt,use:fu,useCallback:wy,useContext:Qt,useEffect:vy,useImperativeHandle:Ty,useInsertionEffect:_y,useLayoutEffect:Ey,useMemo:Sy,useReducer:du,useRef:gy,useState:function(){return du(Hi)},useDebugValue:dd,useDeferredValue:function(t,i){var a=bt();return xy(a,$e.memoizedState,t,i)},useTransition:function(){var t=du(Hi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:fl(t),i]},useSyncExternalStore:ey,useId:Iy,useHostTransitionStatus:gd,useFormState:dy,useActionState:dy,useOptimistic:function(t,i){var a=bt();return ay(a,$e,t,i)},useMemoCache:ld,useCacheRefresh:Ny},eT={readContext:Qt,use:fu,useCallback:wy,useContext:Qt,useEffect:vy,useImperativeHandle:Ty,useInsertionEffect:_y,useLayoutEffect:Ey,useMemo:Sy,useReducer:ud,useRef:gy,useState:function(){return ud(Hi)},useDebugValue:dd,useDeferredValue:function(t,i){var a=bt();return $e===null?md(a,t,i):xy(a,$e.memoizedState,t,i)},useTransition:function(){var t=ud(Hi)[0],i=bt().memoizedState;return[typeof t=="boolean"?t:fl(t),i]},useSyncExternalStore:ey,useId:Iy,useHostTransitionStatus:gd,useFormState:py,useActionState:py,useOptimistic:function(t,i){var a=bt();return $e!==null?ay(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ld,useCacheRefresh:Ny},La=null,pl=0;function vu(t){var i=pl;return pl+=1,La===null&&(La=[]),Yg(La,t,i)}function gl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function _u(t,i){throw i.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Vy(t){var i=t._init;return i(t._payload)}function jy(t){function i(U,P){if(t){var q=U.deletions;q===null?(U.deletions=[P],U.flags|=16):q.push(P)}}function a(U,P){if(!t)return null;for(;P!==null;)i(U,P),P=P.sibling;return null}function l(U){for(var P=new Map;U!==null;)U.key!==null?P.set(U.key,U):P.set(U.index,U),U=U.sibling;return P}function h(U,P){return U=Ui(U,P),U.index=0,U.sibling=null,U}function d(U,P,q){return U.index=q,t?(q=U.alternate,q!==null?(q=q.index,q<P?(U.flags|=67108866,P):q):(U.flags|=67108866,P)):(U.flags|=1048576,P)}function E(U){return t&&U.alternate===null&&(U.flags|=67108866),U}function T(U,P,q,W){return P===null||P.tag!==6?(P=Lf(q,U.mode,W),P.return=U,P):(P=h(P,q),P.return=U,P)}function C(U,P,q,W){var fe=q.type;return fe===j?X(U,P,q.props.children,W,q.key):P!==null&&(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===A&&Vy(fe)===P.type)?(P=h(P,q.props),gl(P,q),P.return=U,P):(P=tu(q.type,q.key,q.props,null,U.mode,W),gl(P,q),P.return=U,P)}function F(U,P,q,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==q.containerInfo||P.stateNode.implementation!==q.implementation?(P=Uf(q,U.mode,W),P.return=U,P):(P=h(P,q.children||[]),P.return=U,P)}function X(U,P,q,W,fe){return P===null||P.tag!==7?(P=Ns(q,U.mode,W,fe),P.return=U,P):(P=h(P,q),P.return=U,P)}function J(U,P,q){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Lf(""+P,U.mode,q),P.return=U,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case S:return q=tu(P.type,P.key,P.props,null,U.mode,q),gl(q,P),q.return=U,q;case D:return P=Uf(P,U.mode,q),P.return=U,P;case A:var W=P._init;return P=W(P._payload),J(U,P,q)}if(Be(P)||k(P))return P=Ns(P,U.mode,q,null),P.return=U,P;if(typeof P.then=="function")return J(U,vu(P),q);if(P.$$typeof===ne)return J(U,su(U,P),q);_u(U,P)}return null}function G(U,P,q,W){var fe=P!==null?P.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return fe!==null?null:T(U,P,""+q,W);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case S:return q.key===fe?C(U,P,q,W):null;case D:return q.key===fe?F(U,P,q,W):null;case A:return fe=q._init,q=fe(q._payload),G(U,P,q,W)}if(Be(q)||k(q))return fe!==null?null:X(U,P,q,W,null);if(typeof q.then=="function")return G(U,P,vu(q),W);if(q.$$typeof===ne)return G(U,P,su(U,q),W);_u(U,q)}return null}function Y(U,P,q,W,fe){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return U=U.get(q)||null,T(P,U,""+W,fe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return U=U.get(W.key===null?q:W.key)||null,C(P,U,W,fe);case D:return U=U.get(W.key===null?q:W.key)||null,F(P,U,W,fe);case A:var Ie=W._init;return W=Ie(W._payload),Y(U,P,q,W,fe)}if(Be(W)||k(W))return U=U.get(q)||null,X(P,U,W,fe,null);if(typeof W.then=="function")return Y(U,P,q,vu(W),fe);if(W.$$typeof===ne)return Y(U,P,q,su(P,W),fe);_u(P,W)}return null}function Te(U,P,q,W){for(var fe=null,Ie=null,me=P,_e=P=0,jt=null;me!==null&&_e<q.length;_e++){me.index>_e?(jt=me,me=null):jt=me.sibling;var ze=G(U,me,q[_e],W);if(ze===null){me===null&&(me=jt);break}t&&me&&ze.alternate===null&&i(U,me),P=d(ze,P,_e),Ie===null?fe=ze:Ie.sibling=ze,Ie=ze,me=jt}if(_e===q.length)return a(U,me),qe&&Os(U,_e),fe;if(me===null){for(;_e<q.length;_e++)me=J(U,q[_e],W),me!==null&&(P=d(me,P,_e),Ie===null?fe=me:Ie.sibling=me,Ie=me);return qe&&Os(U,_e),fe}for(me=l(me);_e<q.length;_e++)jt=Y(me,U,_e,q[_e],W),jt!==null&&(t&&jt.alternate!==null&&me.delete(jt.key===null?_e:jt.key),P=d(jt,P,_e),Ie===null?fe=jt:Ie.sibling=jt,Ie=jt);return t&&me.forEach(function(Ur){return i(U,Ur)}),qe&&Os(U,_e),fe}function ve(U,P,q,W){if(q==null)throw Error(s(151));for(var fe=null,Ie=null,me=P,_e=P=0,jt=null,ze=q.next();me!==null&&!ze.done;_e++,ze=q.next()){me.index>_e?(jt=me,me=null):jt=me.sibling;var Ur=G(U,me,ze.value,W);if(Ur===null){me===null&&(me=jt);break}t&&me&&Ur.alternate===null&&i(U,me),P=d(Ur,P,_e),Ie===null?fe=Ur:Ie.sibling=Ur,Ie=Ur,me=jt}if(ze.done)return a(U,me),qe&&Os(U,_e),fe;if(me===null){for(;!ze.done;_e++,ze=q.next())ze=J(U,ze.value,W),ze!==null&&(P=d(ze,P,_e),Ie===null?fe=ze:Ie.sibling=ze,Ie=ze);return qe&&Os(U,_e),fe}for(me=l(me);!ze.done;_e++,ze=q.next())ze=Y(me,U,_e,ze.value,W),ze!==null&&(t&&ze.alternate!==null&&me.delete(ze.key===null?_e:ze.key),P=d(ze,P,_e),Ie===null?fe=ze:Ie.sibling=ze,Ie=ze);return t&&me.forEach(function(tw){return i(U,tw)}),qe&&Os(U,_e),fe}function We(U,P,q,W){if(typeof q=="object"&&q!==null&&q.type===j&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case S:e:{for(var fe=q.key;P!==null;){if(P.key===fe){if(fe=q.type,fe===j){if(P.tag===7){a(U,P.sibling),W=h(P,q.props.children),W.return=U,U=W;break e}}else if(P.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===A&&Vy(fe)===P.type){a(U,P.sibling),W=h(P,q.props),gl(W,q),W.return=U,U=W;break e}a(U,P);break}else i(U,P);P=P.sibling}q.type===j?(W=Ns(q.props.children,U.mode,W,q.key),W.return=U,U=W):(W=tu(q.type,q.key,q.props,null,U.mode,W),gl(W,q),W.return=U,U=W)}return E(U);case D:e:{for(fe=q.key;P!==null;){if(P.key===fe)if(P.tag===4&&P.stateNode.containerInfo===q.containerInfo&&P.stateNode.implementation===q.implementation){a(U,P.sibling),W=h(P,q.children||[]),W.return=U,U=W;break e}else{a(U,P);break}else i(U,P);P=P.sibling}W=Uf(q,U.mode,W),W.return=U,U=W}return E(U);case A:return fe=q._init,q=fe(q._payload),We(U,P,q,W)}if(Be(q))return Te(U,P,q,W);if(k(q)){if(fe=k(q),typeof fe!="function")throw Error(s(150));return q=fe.call(q),ve(U,P,q,W)}if(typeof q.then=="function")return We(U,P,vu(q),W);if(q.$$typeof===ne)return We(U,P,su(U,q),W);_u(U,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,P!==null&&P.tag===6?(a(U,P.sibling),W=h(P,q),W.return=U,U=W):(a(U,P),W=Lf(q,U.mode,W),W.return=U,U=W),E(U)):a(U,P)}return function(U,P,q,W){try{pl=0;var fe=We(U,P,q,W);return La=null,fe}catch(me){if(me===al||me===ou)throw me;var Ie=mn(29,me,null,U.mode);return Ie.lanes=W,Ie.return=U,Ie}finally{}}}var Ua=jy(!0),Ly=jy(!1),On=te(null),hi=null;function Sr(t){var i=t.alternate;re(It,It.current&1),re(On,t),hi===null&&(i===null||ka.current!==null||i.memoizedState!==null)&&(hi=t)}function Uy(t){if(t.tag===22){if(re(It,It.current),re(On,t),hi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(hi=t)}}else xr()}function xr(){re(It,It.current),re(On,On.current)}function Gi(t){le(On),hi===t&&(hi=null),le(It)}var It=te(0);function Eu(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||om(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function vd(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:b({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var _d={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=vn(),h=br(l);h.payload=i,a!=null&&(h.callback=a),i=Tr(t,h,l),i!==null&&(_n(i,t,l),ll(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=vn(),h=br(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Tr(t,h,l),i!==null&&(_n(i,t,l),ll(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=vn(),l=br(a);l.tag=2,i!=null&&(l.callback=i),i=Tr(t,l,a),i!==null&&(_n(i,t,a),ll(i,t,a))}};function zy(t,i,a,l,h,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!Zo(a,l)||!Zo(h,d):!0}function By(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&_d.enqueueReplaceState(i,i.state,null)}function Us(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=b({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var bu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function qy(t){bu(t)}function Fy(t){console.error(t)}function Hy(t){bu(t)}function Tu(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Gy(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Ed(t,i,a){return a=br(a),a.tag=3,a.payload={element:null},a.callback=function(){Tu(t,i)},a}function Yy(t){return t=br(t),t.tag=3,t}function Ky(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Gy(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Gy(i,a,l),typeof h!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function tT(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&il(i,a,h,!0),a=On.current,a!==null){switch(a.tag){case 13:return hi===null?Hd():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$f?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Yd(t,l,h)),!1;case 22:return a.flags|=65536,l===$f?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Yd(t,l,h)),!1}throw Error(s(435,a.tag))}return Yd(t,l,h),Hd(),!1}if(qe)return i=On.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==qf&&(t=Error(s(422),{cause:l}),nl(Cn(t,a)))):(l!==qf&&(i=Error(s(423),{cause:l}),nl(Cn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Cn(l,a),h=Ed(t.stateNode,l,h),Zf(t,h),ft!==4&&(ft=2)),!1;var d=Error(s(520),{cause:l});if(d=Cn(d,a),wl===null?wl=[d]:wl.push(d),ft!==4&&(ft=2),i===null)return!0;l=Cn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Ed(a.stateNode,l,t),Zf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Yy(h),Ky(h,t,a,l),Zf(a,h),!1}a=a.return}while(a!==null);return!1}var Qy=Error(s(461)),Pt=!1;function Bt(t,i,a,l){i.child=t===null?Ly(i,null,a,l):Ua(i,t.child,a,l)}function $y(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return Vs(i),l=id(t,i,a,E,d,h),T=rd(),t!==null&&!Pt?(sd(t,i,h),Yi(t,i,h)):(qe&&T&&zf(i),i.flags|=1,Bt(t,i,l,h),i.child)}function Xy(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!jf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Wy(t,i,d,l,h)):(t=tu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Cd(t,h)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:Zo,a(E,l)&&t.ref===i.ref)return Yi(t,i,h)}return i.flags|=1,t=Ui(d,l),t.ref=i.ref,t.return=i,i.child=t}function Wy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(Zo(d,l)&&t.ref===i.ref)if(Pt=!1,i.pendingProps=l=d,Cd(t,h))(t.flags&131072)!==0&&(Pt=!0);else return i.lanes=t.lanes,Yi(t,i,h)}return bd(t,i,a,l,h)}function Zy(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Jy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&au(i,d!==null?d.cachePool:null),d!==null?Wg(i,d):ed(),Uy(i);else return i.lanes=i.childLanes=536870912,Jy(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(au(i,d.cachePool),Wg(i,d),xr(),i.memoizedState=null):(t!==null&&au(i,null),ed(),xr());return Bt(t,i,h,a),i.child}function Jy(t,i,a,l){var h=Qf();return h=h===null?null:{parent:Ct._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&au(i,null),ed(),Uy(i),t!==null&&il(t,i,l,!0),null}function wu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function bd(t,i,a,l,h){return Vs(i),a=id(t,i,a,l,void 0,h),l=rd(),t!==null&&!Pt?(sd(t,i,h),Yi(t,i,h)):(qe&&l&&zf(i),i.flags|=1,Bt(t,i,a,h),i.child)}function e0(t,i,a,l,h,d){return Vs(i),i.updateQueue=null,a=Jg(i,l,a,h),Zg(t),l=rd(),t!==null&&!Pt?(sd(t,i,d),Yi(t,i,d)):(qe&&l&&zf(i),i.flags|=1,Bt(t,i,a,d),i.child)}function t0(t,i,a,l,h){if(Vs(i),i.stateNode===null){var d=Ia,E=a.contextType;typeof E=="object"&&E!==null&&(d=Qt(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=_d,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xf(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?Qt(E):Ia,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(vd(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&_d.enqueueReplaceState(d,d.state,null),ul(i,l,d,h),cl(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var T=i.memoizedProps,C=Us(a,T);d.props=C;var F=d.context,X=a.contextType;E=Ia,typeof X=="object"&&X!==null&&(E=Qt(X));var J=a.getDerivedStateFromProps;X=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,X||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||F!==E)&&By(i,d,l,E),Er=!1;var G=i.memoizedState;d.state=G,ul(i,l,d,h),cl(),F=i.memoizedState,T||G!==F||Er?(typeof J=="function"&&(vd(i,a,J,l),F=i.memoizedState),(C=Er||zy(i,a,C,l,G,F,E))?(X||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=E,l=C):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wf(t,i),E=i.memoizedProps,X=Us(a,E),d.props=X,J=i.pendingProps,G=d.context,F=a.contextType,C=Ia,typeof F=="object"&&F!==null&&(C=Qt(F)),T=a.getDerivedStateFromProps,(F=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==J||G!==C)&&By(i,d,l,C),Er=!1,G=i.memoizedState,d.state=G,ul(i,l,d,h),cl();var Y=i.memoizedState;E!==J||G!==Y||Er||t!==null&&t.dependencies!==null&&ru(t.dependencies)?(typeof T=="function"&&(vd(i,a,T,l),Y=i.memoizedState),(X=Er||zy(i,a,X,l,G,Y,C)||t!==null&&t.dependencies!==null&&ru(t.dependencies))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Y,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Y,C)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Y),d.props=l,d.state=Y,d.context=C,l=X):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&G===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,wu(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ua(i,t.child,null,h),i.child=Ua(i,null,a,h)):Bt(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Yi(t,i,h),t}function n0(t,i,a,l){return tl(),i.flags|=256,Bt(t,i,a,l),i.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(t){return{baseLanes:t,cachePool:Fg()}}function Sd(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=Mn),t}function i0(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(qe){if(h?Sr(i):xr(),qe){var T=ht,C;if(C=T){e:{for(C=T,T=ui;C.nodeType!==8;){if(!T){T=null;break e}if(C=Fn(C.nextSibling),C===null){T=null;break e}}T=C}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ds!==null?{id:zi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},C=mn(18,null,null,0),C.stateNode=T,C.return=i,i.child=C,rn=i,ht=null,C=!0):C=!1}C||ks(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return om(T)?i.lanes=32:i.lanes=536870912,null;Gi(i)}return T=l.children,l=l.fallback,h?(xr(),h=i.mode,T=Su({mode:"hidden",children:T},h),l=Ns(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=wd(a),h.childLanes=Sd(t,E,a),i.memoizedState=Td,l):(Sr(i),xd(i,T))}if(C=t.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)i.flags&256?(Sr(i),i.flags&=-257,i=Ad(t,i,a)):i.memoizedState!==null?(xr(),i.child=t.child,i.flags|=128,i=null):(xr(),h=l.fallback,T=i.mode,l=Su({mode:"visible",children:l.children},T),h=Ns(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ua(i,t.child,null,a),l=i.child,l.memoizedState=wd(a),l.childLanes=Sd(t,E,a),i.memoizedState=Td,i=h);else if(Sr(i),om(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var F=E.dgst;E=F,l=Error(s(419)),l.stack="",l.digest=E,nl({value:l,source:null,stack:null}),i=Ad(t,i,a)}else if(Pt||il(t,i,a,!1),E=(a&t.childLanes)!==0,Pt||E){if(E=tt,E!==null&&(l=a&-a,l=(l&42)!==0?1:fr(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==C.retryLane))throw C.retryLane=l,Ca(t,l),_n(E,t,l),Qy;T.data==="$?"||Hd(),i=Ad(t,i,a)}else T.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=C.treeContext,ht=Fn(T.nextSibling),rn=i,qe=!0,Ms=null,ui=!1,t!==null&&(Nn[Dn++]=zi,Nn[Dn++]=Bi,Nn[Dn++]=Ds,zi=t.id,Bi=t.overflow,Ds=i),i=xd(i,l.children),i.flags|=4096);return i}return h?(xr(),h=l.fallback,T=i.mode,C=t.child,F=C.sibling,l=Ui(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,F!==null?h=Ui(F,h):(h=Ns(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T===null?T=wd(a):(C=T.cachePool,C!==null?(F=Ct._currentValue,C=C.parent!==F?{parent:F,pool:F}:C):C=Fg(),T={baseLanes:T.baseLanes|a,cachePool:C}),h.memoizedState=T,h.childLanes=Sd(t,E,a),i.memoizedState=Td,l):(Sr(i),a=t.child,t=a.sibling,a=Ui(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=a,i.memoizedState=null,a)}function xd(t,i){return i=Su({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Su(t,i){return t=mn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ad(t,i,a){return Ua(i,t.child,null,a),t=xd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function r0(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Hf(t.return,i,a)}function Rd(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function s0(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Bt(t,i,l.children,a),l=It.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,a,i);else if(t.tag===19)r0(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(re(It,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Eu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Rd(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Eu(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Rd(i,!0,a,null,d);break;case"together":Rd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(il(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Ui(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Ui(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Cd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&ru(t)))}function nT(t,i,a){switch(i.tag){case 3:et(i,i.stateNode.containerInfo),_r(i,Ct,t.memoizedState.cache),tl();break;case 27:case 5:hr(i);break;case 4:et(i,i.stateNode.containerInfo);break;case 10:_r(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Sr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?i0(t,i,a):(Sr(i),t=Yi(t,i,a),t!==null?t.sibling:null);Sr(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(il(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return s0(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(It,It.current),l)break;return null;case 22:case 23:return i.lanes=0,Zy(t,i,a);case 24:_r(i,Ct,t.memoizedState.cache)}return Yi(t,i,a)}function a0(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Pt=!0;else{if(!Cd(t,a)&&(i.flags&128)===0)return Pt=!1,nT(t,i,a);Pt=(t.flags&131072)!==0}else Pt=!1,qe&&(i.flags&1048576)!==0&&Vg(i,iu,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")jf(l)?(t=Us(l,t),i.tag=1,i=t0(null,i,l,t,a)):(i.tag=0,i=bd(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===ce){i.tag=11,i=$y(null,i,l,t,a);break e}else if(h===V){i.tag=14,i=Xy(null,i,l,t,a);break e}}throw i=rt(l)||l,Error(s(306,i,""))}}return i;case 0:return bd(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Us(l,i.pendingProps),t0(t,i,l,h,a);case 3:e:{if(et(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Wf(t,i),ul(i,l,null,a);var E=i.memoizedState;if(l=E.cache,_r(i,Ct,l),l!==d.cache&&Gf(i,[Ct],a,!0),cl(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=n0(t,i,l,a);break e}else if(l!==h){h=Cn(Error(s(424)),i),nl(h),i=n0(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ht=Fn(t.firstChild),rn=i,qe=!0,Ms=null,ui=!0,a=Ly(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(tl(),l===h){i=Yi(t,i,a);break e}Bt(t,i,l,a)}i=i.child}return i;case 26:return wu(t,i),t===null?(a=u1(i.type,null,i.pendingProps,null))?i.memoizedState=a:qe||(a=i.type,t=i.pendingProps,l=Lu(we.current).createElement(a),l[xt]=i,l[vt]=t,Ft(l,a,t),mt(l),i.stateNode=l):i.memoizedState=u1(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return hr(i),t===null&&qe&&(l=i.stateNode=o1(i.type,i.pendingProps,we.current),rn=i,ui=!0,h=ht,kr(i.type)?(lm=h,ht=Fn(l.firstChild)):ht=h),Bt(t,i,i.pendingProps.children,a),wu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&qe&&((h=l=ht)&&(l=NT(l,i.type,i.pendingProps,ui),l!==null?(i.stateNode=l,rn=i,ht=Fn(l.firstChild),ui=!1,h=!0):h=!1),h||ks(i)),hr(i),h=i.type,d=i.pendingProps,E=t!==null?t.memoizedProps:null,l=d.children,rm(h,d)?l=null:E!==null&&rm(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=id(t,i,Qb,null,null,a),Ol._currentValue=h),wu(t,i),Bt(t,i,l,a),i.child;case 6:return t===null&&qe&&((t=a=ht)&&(a=DT(a,i.pendingProps,ui),a!==null?(i.stateNode=a,rn=i,ht=null,t=!0):t=!1),t||ks(i)),null;case 13:return i0(t,i,a);case 4:return et(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ua(i,null,l,a):Bt(t,i,l,a),i.child;case 11:return $y(t,i,i.type,i.pendingProps,a);case 7:return Bt(t,i,i.pendingProps,a),i.child;case 8:return Bt(t,i,i.pendingProps.children,a),i.child;case 12:return Bt(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,_r(i,i.type,l.value),Bt(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Vs(i),h=Qt(h),l=l(h),i.flags|=1,Bt(t,i,l,a),i.child;case 14:return Xy(t,i,i.type,i.pendingProps,a);case 15:return Wy(t,i,i.type,i.pendingProps,a);case 19:return s0(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Su(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ui(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Zy(t,i,a);case 24:return Vs(i),l=Qt(Ct),t===null?(h=Qf(),h===null&&(h=tt,d=Yf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Xf(i),_r(i,Ct,h)):((t.lanes&a)!==0&&(Wf(t,i),ul(i,null,null,a),cl()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),_r(i,Ct,l)):(l=d.cache,_r(i,Ct,l),l!==h.cache&&Gf(i,[Ct],a,!0))),Bt(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ki(t){t.flags|=4}function o0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p1(i)){if(i=On.current,i!==null&&((Le&4194048)===Le?hi!==null:(Le&62914560)!==Le&&(Le&536870912)===0||i!==hi))throw ol=$f,Hg;t.flags|=8192}}function xu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?ko():536870912,t.lanes|=i,Fa|=i)}function yl(t,i){if(!qe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ot(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function iT(t,i,a){var l=i.pendingProps;switch(Bf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(i),null;case 1:return ot(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Fi(Ct),Zn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(el(i)?Ki(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ug())),ot(i),null;case 26:return a=i.memoizedState,t===null?(Ki(i),a!==null?(ot(i),o0(i,a)):(ot(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Ki(i),ot(i),o0(i,a)):(ot(i),i.flags&=-16777217):(t.memoizedProps!==l&&Ki(i),ot(i),i.flags&=-16777217),null;case 27:Ai(i),a=we.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ot(i),null}t=ye.current,el(i)?jg(i):(t=o1(h,l,a),i.stateNode=t,Ki(i))}return ot(i),null;case 5:if(Ai(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ot(i),null}if(t=ye.current,el(i))jg(i);else{switch(h=Lu(we.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[xt]=i,t[vt]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Ft(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ki(i)}}return ot(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=we.current,el(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=rn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[xt]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||e1(t.nodeValue,a)),t||ks(i)}else t=Lu(t).createTextNode(l),t[xt]=i,i.stateNode=t}return ot(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=el(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[xt]=i}else tl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ot(i),h=!1}else h=Ug(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Gi(i),i):(Gi(i),null)}if(Gi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),xu(i,i.updateQueue),ot(i),null;case 4:return Zn(),t===null&&Jd(i.stateNode.containerInfo),ot(i),null;case 10:return Fi(i.type),ot(i),null;case 19:if(le(It),h=i.memoizedState,h===null)return ot(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)yl(h,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Eu(t),d!==null){for(i.flags|=128,yl(h,!1),t=d.updateQueue,i.updateQueue=t,xu(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Pg(a,t),a=a.sibling;return re(It,It.current&1|2),i.child}t=t.sibling}h.tail!==null&&Tn()>Cu&&(i.flags|=128,l=!0,yl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Eu(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,xu(i,t),yl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!qe)return ot(i),null}else 2*Tn()-h.renderingStartTime>Cu&&a!==536870912&&(i.flags|=128,l=!0,yl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Tn(),i.sibling=null,t=It.current,re(It,l?t&1|2:t&1),i):(ot(i),null);case 22:case 23:return Gi(i),td(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ot(i),i.subtreeFlags&6&&(i.flags|=8192)):ot(i),a=i.updateQueue,a!==null&&xu(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&le(js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Fi(Ct),ot(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function rT(t,i){switch(Bf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Fi(Ct),Zn(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Ai(i),null;case 13:if(Gi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));tl()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return le(It),null;case 4:return Zn(),null;case 10:return Fi(i.type),null;case 22:case 23:return Gi(i),td(),t!==null&&le(js),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Fi(Ct),null;case 25:return null;default:return null}}function l0(t,i){switch(Bf(i),i.tag){case 3:Fi(Ct),Zn();break;case 26:case 27:case 5:Ai(i);break;case 4:Zn();break;case 13:Gi(i);break;case 19:le(It);break;case 10:Fi(i.type);break;case 22:case 23:Gi(i),td(),t!==null&&le(js);break;case 24:Fi(Ct)}}function vl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==h)}}catch(T){Ze(i,i.return,T)}}function Ar(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,h=i;var C=a,F=T;try{F()}catch(X){Ze(h,C,X)}}}l=l.next}while(l!==d)}}catch(X){Ze(i,i.return,X)}}function c0(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{Xg(i,a)}catch(l){Ze(t,t.return,l)}}}function u0(t,i,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){Ze(t,i,l)}}function _l(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){Ze(t,i,h)}}function fi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Ze(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ze(t,i,h)}else a.current=null}function h0(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Ze(t,t.return,h)}}function Id(t,i,a){try{var l=t.stateNode;xT(l,t.type,a,i),l[vt]=i}catch(h){Ze(t,t.return,h)}}function f0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&kr(t.type)||t.tag===4}function Nd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&kr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ju));else if(l!==4&&(l===27&&kr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Dd(t,i,a),t=t.sibling;t!==null;)Dd(t,i,a),t=t.sibling}function Au(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&kr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Au(t,i,a),t=t.sibling;t!==null;)Au(t,i,a),t=t.sibling}function d0(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,l,a),i[xt]=t,i[vt]=a}catch(d){Ze(t,t.return,d)}}var Qi=!1,gt=!1,Od=!1,m0=typeof WeakSet=="function"?WeakSet:Set,Vt=null;function sT(t,i){if(t=t.containerInfo,nm=Hu,t=xg(t),Nf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,T=-1,C=-1,F=0,X=0,J=t,G=null;t:for(;;){for(var Y;J!==a||h!==0&&J.nodeType!==3||(T=E+h),J!==d||l!==0&&J.nodeType!==3||(C=E+l),J.nodeType===3&&(E+=J.nodeValue.length),(Y=J.firstChild)!==null;)G=J,J=Y;for(;;){if(J===t)break t;if(G===a&&++F===h&&(T=E),G===d&&++X===l&&(C=E),(Y=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=Y}a=T===-1||C===-1?null:{start:T,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(im={focusedElem:t,selectionRange:a},Hu=!1,Vt=i;Vt!==null;)if(i=Vt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Vt=t;else for(;Vt!==null;){switch(i=Vt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Te=Us(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Te,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(ve){Ze(a,a.return,ve)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)am(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":am(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Vt=t;break}Vt=i.return}}function p0(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Rr(t,a),l&4&&vl(5,a);break;case 1:if(Rr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(E){Ze(a,a.return,E)}else{var h=Us(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ze(a,a.return,E)}}l&64&&c0(a),l&512&&_l(a,a.return);break;case 3:if(Rr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Xg(t,i)}catch(E){Ze(a,a.return,E)}}break;case 27:i===null&&l&4&&d0(a);case 26:case 5:Rr(t,a),i===null&&l&4&&h0(a),l&512&&_l(a,a.return);break;case 12:Rr(t,a);break;case 13:Rr(t,a),l&4&&v0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mT.bind(null,a),OT(t,a))));break;case 22:if(l=a.memoizedState!==null||Qi,!l){i=i!==null&&i.memoizedState!==null||gt,h=Qi;var d=gt;Qi=l,(gt=i)&&!d?Cr(t,a,(a.subtreeFlags&8772)!==0):Rr(t,a),Qi=h,gt=d}break;case 30:break;default:Rr(t,a)}}function g0(t){var i=t.alternate;i!==null&&(t.alternate=null,g0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&pr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var at=null,an=!1;function $i(t,i,a){for(a=a.child;a!==null;)y0(t,i,a),a=a.sibling}function y0(t,i,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:gt||fi(a,i),$i(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gt||fi(a,i);var l=at,h=an;kr(a.type)&&(at=a.stateNode,an=!1),$i(t,i,a),Cl(a.stateNode),at=l,an=h;break;case 5:gt||fi(a,i);case 6:if(l=at,h=an,at=null,$i(t,i,a),at=l,an=h,at!==null)if(an)try{(at.nodeType===9?at.body:at.nodeName==="HTML"?at.ownerDocument.body:at).removeChild(a.stateNode)}catch(d){Ze(a,i,d)}else try{at.removeChild(a.stateNode)}catch(d){Ze(a,i,d)}break;case 18:at!==null&&(an?(t=at,s1(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Vl(t)):s1(at,a.stateNode));break;case 4:l=at,h=an,at=a.stateNode.containerInfo,an=!0,$i(t,i,a),at=l,an=h;break;case 0:case 11:case 14:case 15:gt||Ar(2,a,i),gt||Ar(4,a,i),$i(t,i,a);break;case 1:gt||(fi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&u0(a,i,l)),$i(t,i,a);break;case 21:$i(t,i,a);break;case 22:gt=(l=gt)||a.memoizedState!==null,$i(t,i,a),gt=l;break;default:$i(t,i,a)}}function v0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vl(t)}catch(a){Ze(i,i.return,a)}}function aT(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new m0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new m0),i;default:throw Error(s(435,t.tag))}}function Md(t,i){var a=aT(t);i.forEach(function(l){var h=pT.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function pn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(kr(T.type)){at=T.stateNode,an=!1;break e}break;case 5:at=T.stateNode,an=!1;break e;case 3:case 4:at=T.stateNode.containerInfo,an=!0;break e}T=T.return}if(at===null)throw Error(s(160));y0(d,E,h),at=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)_0(i,t),i=i.sibling}var qn=null;function _0(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(i,t),gn(t),l&4&&(Ar(3,t,t.return),vl(3,t),Ar(5,t,t.return));break;case 1:pn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),l&64&&Qi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=qn;if(pn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ms]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Ft(d,l,a),d[xt]=t,mt(d),l=d;break e;case"link":var E=d1("link","href",h).get(l+(a.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(T,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;case"meta":if(E=d1("meta","content",h).get(l+(a.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(T,1);break t}}d=h.createElement(l),Ft(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[xt]=t,mt(d),l=d}t.stateNode=l}else m1(h,t.type,t.stateNode);else t.stateNode=f1(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?m1(h,t.type,t.stateNode):f1(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Id(t,t.memoizedProps,a.memoizedProps)}break;case 27:pn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),a!==null&&l&4&&Id(t,t.memoizedProps,a.memoizedProps);break;case 5:if(pn(i,t),gn(t),l&512&&(gt||a===null||fi(a,a.return)),t.flags&32){h=t.stateNode;try{Sn(h,"")}catch(Y){Ze(t,t.return,Y)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Id(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Od=!0);break;case 6:if(pn(i,t),gn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(Y){Ze(t,t.return,Y)}}break;case 3:if(Bu=null,h=qn,qn=Uu(i.containerInfo),pn(i,t),qn=h,gn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Vl(i.containerInfo)}catch(Y){Ze(t,t.return,Y)}Od&&(Od=!1,E0(t));break;case 4:l=qn,qn=Uu(t.stateNode.containerInfo),pn(i,t),gn(t),qn=l;break;case 12:pn(i,t),gn(t);break;case 13:pn(i,t),gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ud=Tn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Md(t,l)));break;case 22:h=t.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,F=Qi,X=gt;if(Qi=F||h,gt=X||C,pn(i,t),gt=X,Qi=F,gn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||C||Qi||gt||zs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){C=a=i;try{if(d=C.stateNode,h)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=C.stateNode;var J=C.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Y){Ze(C,C.return,Y)}}}else if(i.tag===6){if(a===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(Y){Ze(C,C.return,Y)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Md(t,a))));break;case 19:pn(i,t),gn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Md(t,l)));break;case 30:break;case 21:break;default:pn(i,t),gn(t)}}function gn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(f0(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Nd(t);Au(t,d,h);break;case 5:var E=a.stateNode;a.flags&32&&(Sn(E,""),a.flags&=-33);var T=Nd(t);Au(t,T,E);break;case 3:case 4:var C=a.stateNode.containerInfo,F=Nd(t);Dd(t,F,C);break;default:throw Error(s(161))}}catch(X){Ze(t,t.return,X)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function E0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;E0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Rr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)p0(t,i.alternate,i),i=i.sibling}function zs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ar(4,i,i.return),zs(i);break;case 1:fi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&u0(i,i.return,a),zs(i);break;case 27:Cl(i.stateNode);case 26:case 5:fi(i,i.return),zs(i);break;case 22:i.memoizedState===null&&zs(i);break;case 30:zs(i);break;default:zs(i)}t=t.sibling}}function Cr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Cr(h,d,a),vl(4,d);break;case 1:if(Cr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(F){Ze(l,l.return,F)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)$g(C[h],T)}catch(F){Ze(l,l.return,F)}}a&&E&64&&c0(d),_l(d,d.return);break;case 27:d0(d);case 26:case 5:Cr(h,d,a),a&&l===null&&E&4&&h0(d),_l(d,d.return);break;case 12:Cr(h,d,a);break;case 13:Cr(h,d,a),a&&E&4&&v0(h,d);break;case 22:d.memoizedState===null&&Cr(h,d,a),_l(d,d.return);break;case 30:break;default:Cr(h,d,a)}i=i.sibling}}function kd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&rl(a))}function Pd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&rl(t))}function di(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)b0(t,i,a,l),i=i.sibling}function b0(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:di(t,i,a,l),h&2048&&vl(9,i);break;case 1:di(t,i,a,l);break;case 3:di(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&rl(t)));break;case 12:if(h&2048){di(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(C){Ze(i,i.return,C)}}else di(t,i,a,l);break;case 13:di(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?di(t,i,a,l):El(t,i):d._visibility&2?di(t,i,a,l):(d._visibility|=2,za(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&kd(E,i);break;case 24:di(t,i,a,l),h&2048&&Pd(i.alternate,i);break;default:di(t,i,a,l)}}function za(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,E=i,T=a,C=l,F=E.flags;switch(E.tag){case 0:case 11:case 15:za(d,E,T,C,h),vl(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&2?za(d,E,T,C,h):El(d,E):(X._visibility|=2,za(d,E,T,C,h)),h&&F&2048&&kd(E.alternate,E);break;case 24:za(d,E,T,C,h),h&&F&2048&&Pd(E.alternate,E);break;default:za(d,E,T,C,h)}i=i.sibling}}function El(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:El(a,l),h&2048&&kd(l.alternate,l);break;case 24:El(a,l),h&2048&&Pd(l.alternate,l);break;default:El(a,l)}i=i.sibling}}var bl=8192;function Ba(t){if(t.subtreeFlags&bl)for(t=t.child;t!==null;)T0(t),t=t.sibling}function T0(t){switch(t.tag){case 26:Ba(t),t.flags&bl&&t.memoizedState!==null&&GT(qn,t.memoizedState,t.memoizedProps);break;case 5:Ba(t);break;case 3:case 4:var i=qn;qn=Uu(t.stateNode.containerInfo),Ba(t),qn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=bl,bl=16777216,Ba(t),bl=i):Ba(t));break;default:Ba(t)}}function w0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Tl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,x0(l,t)}w0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)S0(t),t=t.sibling}function S0(t){switch(t.tag){case 0:case 11:case 15:Tl(t),t.flags&2048&&Ar(9,t,t.return);break;case 3:Tl(t);break;case 12:Tl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Ru(t)):Tl(t);break;default:Tl(t)}}function Ru(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Vt=l,x0(l,t)}w0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ar(8,i,i.return),Ru(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Ru(i));break;default:Ru(i)}t=t.sibling}}function x0(t,i){for(;Vt!==null;){var a=Vt;switch(a.tag){case 0:case 11:case 15:Ar(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:rl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Vt=l;else e:for(a=t;Vt!==null;){l=Vt;var h=l.sibling,d=l.return;if(g0(l),l===a){Vt=null;break e}if(h!==null){h.return=d,Vt=h;break e}Vt=d}}}var oT={getCacheForType:function(t){var i=Qt(Ct),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},lT=typeof WeakMap=="function"?WeakMap:Map,Ye=0,tt=null,Ne=null,Le=0,Ke=0,yn=null,Ir=!1,qa=!1,Vd=!1,Xi=0,ft=0,Nr=0,Bs=0,jd=0,Mn=0,Fa=0,wl=null,on=null,Ld=!1,Ud=0,Cu=1/0,Iu=null,Dr=null,qt=0,Or=null,Ha=null,Ga=0,zd=0,Bd=null,A0=null,Sl=0,qd=null;function vn(){if((Ye&2)!==0&&Le!==0)return Le&-Le;if(Q.T!==null){var t=Oa;return t!==0?t:$d()}return dr()}function R0(){Mn===0&&(Mn=(Le&536870912)===0||qe?Mo():536870912);var t=On.current;return t!==null&&(t.flags|=32),Mn}function _n(t,i,a){(t===tt&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)&&(Ya(t,0),Mr(t,Le,Mn,!1)),Ci(t,a),((Ye&2)===0||t!==tt)&&(t===tt&&((Ye&2)===0&&(Bs|=a),ft===4&&Mr(t,Le,Mn,!1)),mi(t))}function C0(t,i,a){if((Ye&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||ds(t,i),h=l?hT(t,i):Gd(t,i,!0),d=l;do{if(h===0){qa&&!l&&Mr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!cT(a)){h=Gd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=t;h=wl;var C=T.current.memoizedState.isDehydrated;if(C&&(Ya(T,E).flags|=256),E=Gd(T,E,!1),E!==2){if(Vd&&!C){T.errorRecoveryDisabledLanes|=d,Bs|=d,h=4;break e}d=on,on=h,d!==null&&(on===null?on=d:on.push.apply(on,d))}h=E}if(d=!1,h!==2)continue}}if(h===1){Ya(t,0),Mr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Mr(l,i,Mn,!Ir);break e;case 2:on=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Ud+300-Tn(),10<h)){if(Mr(l,i,Mn,!Ir),ca(l,0,!0)!==0)break e;l.timeoutHandle=i1(I0.bind(null,l,a,on,Iu,Ld,i,Mn,Bs,Fa,Ir,d,2,-0,0),h);break e}I0(l,a,on,Iu,Ld,i,Mn,Bs,Fa,Ir,d,0,-0,0)}}break}while(!0);mi(t)}function I0(t,i,a,l,h,d,E,T,C,F,X,J,G,Y){if(t.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Dl={stylesheets:null,count:0,unsuspend:HT},T0(i),J=YT(),J!==null)){t.cancelPendingCommit=J(V0.bind(null,t,i,d,a,l,h,E,T,C,X,1,G,Y)),Mr(t,d,E,!F);return}V0(t,i,d,a,l,h,E,T,C)}function cT(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!dn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(t,i,a,l){i&=~jd,i&=~Bs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-Kt(h),E=1<<d;l[d]=-1,h&=~E}a!==0&&Jn(t,a,i)}function Nu(){return(Ye&6)===0?(xl(0),!1):!0}function Fd(){if(Ne!==null){if(Ke===0)var t=Ne.return;else t=Ne,qi=Ps=null,ad(t),La=null,pl=0,t=Ne;for(;t!==null;)l0(t.alternate,t),t=t.return;Ne=null}}function Ya(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,RT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Fd(),tt=t,Ne=a=Ui(t.current,null),Le=i,Ke=0,yn=null,Ir=!1,qa=ds(t,i),Vd=!1,Fa=Mn=jd=Bs=Nr=ft=0,on=wl=null,Ld=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-Kt(l),d=1<<h;i|=t[h],l&=~d}return Xi=i,Zc(),a}function N0(t,i){Re=null,Q.H=yu,i===al||i===ou?(i=Kg(),Ke=3):i===Hg?(i=Kg(),Ke=4):Ke=i===Qy?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yn=i,Ne===null&&(ft=1,Tu(t,Cn(i,t.current)))}function D0(){var t=Q.H;return Q.H=yu,t===null?yu:t}function O0(){var t=Q.A;return Q.A=oT,t}function Hd(){ft=4,Ir||(Le&4194048)!==Le&&On.current!==null||(qa=!0),(Nr&134217727)===0&&(Bs&134217727)===0||tt===null||Mr(tt,Le,Mn,!1)}function Gd(t,i,a){var l=Ye;Ye|=2;var h=D0(),d=O0();(tt!==t||Le!==i)&&(Iu=null,Ya(t,i)),i=!1;var E=ft;e:do try{if(Ke!==0&&Ne!==null){var T=Ne,C=yn;switch(Ke){case 8:Fd(),E=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(i=!0);var F=Ke;if(Ke=0,yn=null,Ka(t,T,C,F),a&&qa){E=0;break e}break;default:F=Ke,Ke=0,yn=null,Ka(t,T,C,F)}}uT(),E=ft;break}catch(X){N0(t,X)}while(!0);return i&&t.shellSuspendCounter++,qi=Ps=null,Ye=l,Q.H=h,Q.A=d,Ne===null&&(tt=null,Le=0,Zc()),E}function uT(){for(;Ne!==null;)M0(Ne)}function hT(t,i){var a=Ye;Ye|=2;var l=D0(),h=O0();tt!==t||Le!==i?(Iu=null,Cu=Tn()+500,Ya(t,i)):qa=ds(t,i);e:do try{if(Ke!==0&&Ne!==null){i=Ne;var d=yn;t:switch(Ke){case 1:Ke=0,yn=null,Ka(t,i,d,1);break;case 2:case 9:if(Gg(d)){Ke=0,yn=null,k0(i);break}i=function(){Ke!==2&&Ke!==9||tt!==t||(Ke=7),mi(t)},d.then(i,i);break e;case 3:Ke=7;break e;case 4:Ke=5;break e;case 7:Gg(d)?(Ke=0,yn=null,k0(i)):(Ke=0,yn=null,Ka(t,i,d,7));break;case 5:var E=null;switch(Ne.tag){case 26:E=Ne.memoizedState;case 5:case 27:var T=Ne;if(!E||p1(E)){Ke=0,yn=null;var C=T.sibling;if(C!==null)Ne=C;else{var F=T.return;F!==null?(Ne=F,Du(F)):Ne=null}break t}}Ke=0,yn=null,Ka(t,i,d,5);break;case 6:Ke=0,yn=null,Ka(t,i,d,6);break;case 8:Fd(),ft=6;break e;default:throw Error(s(462))}}fT();break}catch(X){N0(t,X)}while(!0);return qi=Ps=null,Q.H=l,Q.A=h,Ye=a,Ne!==null?0:(tt=null,Le=0,Zc(),ft)}function fT(){for(;Ne!==null&&!Io();)M0(Ne)}function M0(t){var i=a0(t.alternate,t,Xi);t.memoizedProps=t.pendingProps,i===null?Du(t):Ne=i}function k0(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=e0(a,i,i.pendingProps,i.type,void 0,Le);break;case 11:i=e0(a,i,i.pendingProps,i.type.render,i.ref,Le);break;case 5:ad(i);default:l0(a,i),i=Ne=Pg(i,Xi),i=a0(a,i,Xi)}t.memoizedProps=t.pendingProps,i===null?Du(t):Ne=i}function Ka(t,i,a,l){qi=Ps=null,ad(i),La=null,pl=0;var h=i.return;try{if(tT(t,h,i,a,Le)){ft=1,Tu(t,Cn(a,t.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;ft=1,Tu(t,Cn(a,t.current)),Ne=null;return}i.flags&32768?(qe||l===1?t=!0:qa||(Le&536870912)!==0?t=!1:(Ir=t=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),P0(i,t)):Du(i)}function Du(t){var i=t;do{if((i.flags&32768)!==0){P0(i,Ir);return}t=i.return;var a=iT(i.alternate,i,Xi);if(a!==null){Ne=a;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=t}while(i!==null);ft===0&&(ft=5)}function P0(t,i){do{var a=rT(t.alternate,t);if(a!==null){a.flags&=32767,Ne=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ne=t;return}Ne=t=a}while(t!==null);ft=6,Ne=null}function V0(t,i,a,l,h,d,E,T,C){t.cancelPendingCommit=null;do Ou();while(qt!==0);if((Ye&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Pf,Po(t,a,d,E,T,C),t===tt&&(Ne=tt=null,Le=0),Ha=i,Or=t,Ga=a,zd=d,Bd=h,A0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gT(cs,function(){return B0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Q.T,Q.T=null,h=se.p,se.p=2,E=Ye,Ye|=4;try{sT(t,i,a)}finally{Ye=E,se.p=h,Q.T=l}}qt=1,j0(),L0(),U0()}}function j0(){if(qt===1){qt=0;var t=Or,i=Ha,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Q.T,Q.T=null;var l=se.p;se.p=2;var h=Ye;Ye|=4;try{_0(i,t);var d=im,E=xg(t.containerInfo),T=d.focusedElem,C=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Sg(T.ownerDocument.documentElement,T)){if(C!==null&&Nf(T)){var F=C.start,X=C.end;if(X===void 0&&(X=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(X,T.value.length);else{var J=T.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var Y=G.getSelection(),Te=T.textContent.length,ve=Math.min(C.start,Te),We=C.end===void 0?ve:Math.min(C.end,Te);!Y.extend&&ve>We&&(E=We,We=ve,ve=E);var U=wg(T,ve),P=wg(T,We);if(U&&P&&(Y.rangeCount!==1||Y.anchorNode!==U.node||Y.anchorOffset!==U.offset||Y.focusNode!==P.node||Y.focusOffset!==P.offset)){var q=J.createRange();q.setStart(U.node,U.offset),Y.removeAllRanges(),ve>We?(Y.addRange(q),Y.extend(P.node,P.offset)):(q.setEnd(P.node,P.offset),Y.addRange(q))}}}}for(J=[],Y=T;Y=Y.parentNode;)Y.nodeType===1&&J.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Hu=!!nm,im=nm=null}finally{Ye=h,se.p=l,Q.T=a}}t.current=i,qt=2}}function L0(){if(qt===2){qt=0;var t=Or,i=Ha,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Q.T,Q.T=null;var l=se.p;se.p=2;var h=Ye;Ye|=4;try{p0(t,i.alternate,i)}finally{Ye=h,se.p=l,Q.T=a}}qt=3}}function U0(){if(qt===4||qt===3){qt=0,Rc();var t=Or,i=Ha,a=Ga,l=A0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?qt=5:(qt=0,Ha=Or=null,z0(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Dr=null),ua(a),i=i.stateNode,Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Q.T,h=se.p,se.p=2,Q.T=null;try{for(var d=t.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{Q.T=i,se.p=h}}(Ga&3)!==0&&Ou(),mi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===qd?Sl++:(Sl=0,qd=t):Sl=0,xl(0)}}function z0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,rl(i)))}function Ou(t){return j0(),L0(),U0(),B0()}function B0(){if(qt!==5)return!1;var t=Or,i=zd;zd=0;var a=ua(Ga),l=Q.T,h=se.p;try{se.p=32>a?32:a,Q.T=null,a=Bd,Bd=null;var d=Or,E=Ga;if(qt=0,Ha=Or=null,Ga=0,(Ye&6)!==0)throw Error(s(331));var T=Ye;if(Ye|=4,S0(d.current),b0(d,d.current,E,a),Ye=T,xl(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ut,d)}catch{}return!0}finally{se.p=h,Q.T=l,z0(t,i)}}function q0(t,i,a){i=Cn(a,i),i=Ed(t.stateNode,i,2),t=Tr(t,i,2),t!==null&&(Ci(t,2),mi(t))}function Ze(t,i,a){if(t.tag===3)q0(t,t,a);else for(;i!==null;){if(i.tag===3){q0(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){t=Cn(a,t),a=Yy(2),l=Tr(i,a,2),l!==null&&(Ky(a,l,i,t),Ci(l,2),mi(l));break}}i=i.return}}function Yd(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new lT;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Vd=!0,h.add(a),t=dT.bind(null,t,i,a),i.then(t,t))}function dT(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,tt===t&&(Le&a)===a&&(ft===4||ft===3&&(Le&62914560)===Le&&300>Tn()-Ud?(Ye&2)===0&&Ya(t,0):jd|=a,Fa===Le&&(Fa=0)),mi(t)}function F0(t,i){i===0&&(i=ko()),t=Ca(t,i),t!==null&&(Ci(t,i),mi(t))}function mT(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),F0(t,a)}function pT(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),F0(t,a)}function gT(t,i){return os(t,i)}var Mu=null,Qa=null,Kd=!1,ku=!1,Qd=!1,qs=0;function mi(t){t!==Qa&&t.next===null&&(Qa===null?Mu=Qa=t:Qa=Qa.next=t),ku=!0,Kd||(Kd=!0,vT())}function xl(t,i){if(!Qd&&ku){Qd=!0;do for(var a=!1,l=Mu;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Kt(42|t)+1)-1,d&=h&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,K0(l,d))}else d=Le,d=ca(l,l===tt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ds(l,d)||(a=!0,K0(l,d));l=l.next}while(a);Qd=!1}}function yT(){H0()}function H0(){ku=Kd=!1;var t=0;qs!==0&&(AT()&&(t=qs),qs=0);for(var i=Tn(),a=null,l=Mu;l!==null;){var h=l.next,d=G0(l,i);d===0?(l.next=null,a===null?Mu=h:a.next=h,h===null&&(Qa=a)):(a=l,(t!==0||(d&3)!==0)&&(ku=!0)),l=h}xl(t)}function G0(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Kt(d),T=1<<E,C=h[E];C===-1?((T&a)===0||(T&l)!==0)&&(h[E]=Oo(T,i)):C<=i&&(t.expiredLanes|=T),d&=~T}if(i=tt,a=Le,a=ca(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ke===2||Ke===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ls(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ds(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&ls(l),ua(a)){case 2:case 8:a=oa;break;case 32:a=cs;break;case 268435456:a=la;break;default:a=cs}return l=Y0.bind(null,t),a=os(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&ls(l),t.callbackPriority=2,t.callbackNode=null,2}function Y0(t,i){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ou()&&t.callbackNode!==a)return null;var l=Le;return l=ca(t,t===tt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(C0(t,l,i),G0(t,Tn()),t.callbackNode!=null&&t.callbackNode===a?Y0.bind(null,t):null)}function K0(t,i){if(Ou())return null;C0(t,i,!0)}function vT(){CT(function(){(Ye&6)!==0?os(No,yT):H0()})}function $d(){return qs===0&&(qs=Mo()),qs}function Q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ga(""+t)}function $0(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function _T(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Q0((h[vt]||null).action),E=l.submitter;E&&(i=(i=E[vt]||null)?Q0(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new ya("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qs!==0){var C=E?$0(h,E):new FormData(h);pd(a,{pending:!0,data:C,method:h.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=E?$0(h,E):new FormData(h),pd(a,{pending:!0,data:C,method:h.method,action:d},d,C))},currentTarget:h}]})}}for(var Xd=0;Xd<kf.length;Xd++){var Wd=kf[Xd],ET=Wd.toLowerCase(),bT=Wd[0].toUpperCase()+Wd.slice(1);Bn(ET,"on"+bT)}Bn(Cg,"onAnimationEnd"),Bn(Ig,"onAnimationIteration"),Bn(Ng,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(Lb,"onTransitionRun"),Bn(Ub,"onTransitionStart"),Bn(zb,"onTransitionCancel"),Bn(Dg,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Un("onBeforeInput",["compositionend","keypress","textInput","paste"]),Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function X0(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],C=T.instance,F=T.currentTarget;if(T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=F;try{d(h)}catch(X){bu(X)}h.currentTarget=null,d=C}else for(E=0;E<l.length;E++){if(T=l[E],C=T.instance,F=T.currentTarget,T=T.listener,C!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=F;try{d(h)}catch(X){bu(X)}h.currentTarget=null,d=C}}}}function De(t,i){var a=i[jo];a===void 0&&(a=i[jo]=new Set);var l=t+"__bubble";a.has(l)||(W0(i,t,2,!1),a.add(l))}function Zd(t,i,a){var l=0;i&&(l|=4),W0(a,t,l,i)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function Jd(t){if(!t[Pu]){t[Pu]=!0,Lo.forEach(function(a){a!=="selectionchange"&&(TT.has(a)||Zd(a,!1,t),Zd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Pu]||(i[Pu]=!0,Zd("selectionchange",!1,i))}}function W0(t,i,a,l){switch(b1(i)){case 2:var h=$T;break;case 8:h=XT;break;default:h=dm}a=h.bind(null,i,a,t),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function em(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===h)break;if(E===4)for(E=l.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;T!==null;){if(E=Ii(T),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){l=d=E;continue e}T=T.parentNode}}l=l.return}jc(function(){var F=d,X=xn(a),J=[];e:{var G=Og.get(t);if(G!==void 0){var Y=ya,Te=t;switch(t){case"keypress":if(si(a)===0)break e;case"keydown":case"keyup":Y=wa;break;case"focusin":Te="focus",Y=Ea;break;case"focusout":Te="blur",Y=Ea;break;case"beforeblur":case"afterblur":Y=Ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Gc;break;case Cg:case Ig:case Ng:Y=ba;break;case Dg:Y=Kc;break;case"scroll":case"scrollend":Y=Lc;break;case"wheel":Y=Sa;break;case"copy":case"cut":case"paste":Y=Ta;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Xo;break;case"toggle":case"beforetoggle":Y=$c}var ve=(i&4)!==0,We=!ve&&(t==="scroll"||t==="scrollend"),U=ve?G!==null?G+"Capture":null:G;ve=[];for(var P=F,q;P!==null;){var W=P;if(q=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||q===null||U===null||(W=bs(P,U),W!=null&&ve.push(Rl(P,W,q))),We)break;P=P.return}0<ve.length&&(G=new Y(G,Te,null,a,X),J.push({event:G,listeners:ve}))}}if((i&7)===0){e:{if(G=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",G&&a!==Mi&&(Te=a.relatedTarget||a.fromElement)&&(Ii(Te)||Te[wn]))break e;if((Y||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,Y?(Te=a.relatedTarget||a.toElement,Y=F,Te=Te?Ii(Te):null,Te!==null&&(We=c(Te),ve=Te.tag,Te!==We||ve!==5&&ve!==27&&ve!==6)&&(Te=null)):(Y=null,Te=F),Y!==Te)){if(ve=Rn,W="onMouseLeave",U="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(ve=Xo,W="onPointerLeave",U="onPointerEnter",P="pointer"),We=Y==null?G:ti(Y),q=Te==null?G:ti(Te),G=new ve(W,P+"leave",Y,a,X),G.target=We,G.relatedTarget=q,W=null,Ii(X)===F&&(ve=new ve(U,P+"enter",Te,a,X),ve.target=q,ve.relatedTarget=We,W=ve),We=W,Y&&Te)t:{for(ve=Y,U=Te,P=0,q=ve;q;q=$a(q))P++;for(q=0,W=U;W;W=$a(W))q++;for(;0<P-q;)ve=$a(ve),P--;for(;0<q-P;)U=$a(U),q--;for(;P--;){if(ve===U||U!==null&&ve===U.alternate)break t;ve=$a(ve),U=$a(U)}ve=null}else ve=null;Y!==null&&Z0(J,G,Y,ve,!1),Te!==null&&We!==null&&Z0(J,We,Te,ve,!0)}}e:{if(G=F?ti(F):window,Y=G.nodeName&&G.nodeName.toLowerCase(),Y==="select"||Y==="input"&&G.type==="file")var fe=yg;else if(Rt(G))if(vg)fe=Pb;else{fe=Mb;var Ie=Ob}else Y=G.nodeName,!Y||Y.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?F&&Fo(F.elementType)&&(fe=yg):fe=kb;if(fe&&(fe=fe(t,F))){Li(J,fe,a,X);break e}Ie&&Ie(t,G,F),t==="focusout"&&F&&G.type==="number"&&F.memoizedProps.value!=null&&yr(G,"number",G.value)}switch(Ie=F?ti(F):window,t){case"focusin":(Rt(Ie)||Ie.contentEditable==="true")&&(xa=Ie,Df=F,Jo=null);break;case"focusout":Jo=Df=xa=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,Ag(J,a,X);break;case"selectionchange":if(jb)break;case"keydown":case"keyup":Ag(J,a,X)}var me;if(li)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ve?K(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(_&&a.locale!=="ko"&&(Ve||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ve&&(me=Go()):(ri=X,vr="value"in ri?ri.value:ri.textContent,Ve=!0)),Ie=Vu(F,_e),0<Ie.length&&(_e=new Qo(_e,t,null,a,X),J.push({event:_e,listeners:Ie}),me?_e.data=me:(me=ae(a),me!==null&&(_e.data=me)))),(me=v?At(t,a):je(t,a))&&(_e=Vu(F,"onBeforeInput"),0<_e.length&&(Ie=new Qo("onBeforeInput","beforeinput",null,a,X),J.push({event:Ie,listeners:_e}),Ie.data=me)),_T(J,t,F,a,X)}X0(J,i)})}function Rl(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Vu(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=bs(t,a),h!=null&&l.unshift(Rl(t,h,d)),h=bs(t,i),h!=null&&l.push(Rl(t,h,d))),t.tag===3)return l;t=t.return}return[]}function $a(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z0(t,i,a,l,h){for(var d=i._reactName,E=[];a!==null&&a!==l;){var T=a,C=T.alternate,F=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||F===null||(C=F,h?(F=bs(a,d),F!=null&&E.unshift(Rl(a,F,C))):h||(F=bs(a,d),F!=null&&E.push(Rl(a,F,C)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var wT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(wT,`
`).replace(ST,"")}function e1(t,i){return i=J0(i),J0(t)===i}function ju(){}function Xe(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Sn(t,""+l);break;case"className":ni(t,"class",l);break;case"tabIndex":ni(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(t,a,l);break;case"style":qo(t,l,d);break;case"data":if(i!=="object"){ni(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ga(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ga(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=ju);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ga(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":De("beforetoggle",t),De("toggle",t),gr(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sf.get(a)||a,gr(t,a,l))}}function tm(t,i,a,l,h,d){switch(a){case"style":qo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Sn(t,l):(typeof l=="number"||typeof l=="bigint")&&Sn(t,""+l);break;case"onScroll":l!=null&&De("scroll",t);break;case"onScrollEnd":l!=null&&De("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[vt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):gr(t,a,l)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",t),De("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,d,E,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),l&&Xe(t,i,"src",a.src,a,null);return;case"input":De("invalid",t);var T=d=E=h=null,C=null,F=null;for(l in a)if(a.hasOwnProperty(l)){var X=a[l];if(X!=null)switch(l){case"name":h=X;break;case"type":E=X;break;case"checked":C=X;break;case"defaultChecked":F=X;break;case"value":d=X;break;case"defaultValue":T=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(s(137,i));break;default:Xe(t,i,l,X,a,null)}}vs(t,d,T,C,F,E,h,!1),pa(t);return;case"select":De("invalid",t),l=E=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:Xe(t,i,h,T,a,null)}i=d,a=E,t.multiple=!!l,i!=null?Oi(t,!!l,i,!1):a!=null&&Oi(t,!!l,a,!0);return;case"textarea":De("invalid",t),d=h=l=null;for(E in a)if(a.hasOwnProperty(E)&&(T=a[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,i,E,T,a,null)}_s(t,l,h,d),pa(t);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xe(t,i,C,l,a,null)}return;case"dialog":De("beforetoggle",t),De("toggle",t),De("cancel",t),De("close",t);break;case"iframe":case"object":De("load",t);break;case"video":case"audio":for(l=0;l<Al.length;l++)De(Al[l],t);break;case"image":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"embed":case"source":case"link":De("error",t),De("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(l=a[F],l!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,F,l,a,null)}return;default:if(Fo(i)){for(X in a)a.hasOwnProperty(X)&&(l=a[X],l!==void 0&&tm(t,i,X,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xe(t,i,T,l,a,null))}function xT(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,E=null,T=null,C=null,F=null,X=null;for(Y in a){var J=a[Y];if(a.hasOwnProperty(Y)&&J!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(Y)||Xe(t,i,Y,null,l,J)}}for(var G in l){var Y=l[G];if(J=a[G],l.hasOwnProperty(G)&&(Y!=null||J!=null))switch(G){case"type":d=Y;break;case"name":h=Y;break;case"checked":F=Y;break;case"defaultChecked":X=Y;break;case"value":E=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,i));break;default:Y!==J&&Xe(t,i,G,Y,l,J)}}fn(t,E,T,C,F,X,d,h);return;case"select":Y=E=T=G=null;for(d in a)if(C=a[d],a.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":Y=C;default:l.hasOwnProperty(d)||Xe(t,i,d,null,l,C)}for(h in l)if(d=l[h],C=a[h],l.hasOwnProperty(h)&&(d!=null||C!=null))switch(h){case"value":G=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==C&&Xe(t,i,h,d,l,C)}i=T,a=E,l=Y,G!=null?Oi(t,!!a,G,!1):!!l!=!!a&&(i!=null?Oi(t,!!a,i,!0):Oi(t,!!a,a?[]:"",!1));return;case"textarea":Y=G=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,i,T,null,l,h)}for(E in l)if(h=l[E],d=a[E],l.hasOwnProperty(E)&&(h!=null||d!=null))switch(E){case"value":G=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,i,E,h,l,d)}Qe(t,G,Y);return;case"option":for(var Te in a)if(G=a[Te],a.hasOwnProperty(Te)&&G!=null&&!l.hasOwnProperty(Te))switch(Te){case"selected":t.selected=!1;break;default:Xe(t,i,Te,null,l,G)}for(C in l)if(G=l[C],Y=a[C],l.hasOwnProperty(C)&&G!==Y&&(G!=null||Y!=null))switch(C){case"selected":t.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Xe(t,i,C,G,l,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in a)G=a[ve],a.hasOwnProperty(ve)&&G!=null&&!l.hasOwnProperty(ve)&&Xe(t,i,ve,null,l,G);for(F in l)if(G=l[F],Y=a[F],l.hasOwnProperty(F)&&G!==Y&&(G!=null||Y!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xe(t,i,F,G,l,Y)}return;default:if(Fo(i)){for(var We in a)G=a[We],a.hasOwnProperty(We)&&G!==void 0&&!l.hasOwnProperty(We)&&tm(t,i,We,void 0,l,G);for(X in l)G=l[X],Y=a[X],!l.hasOwnProperty(X)||G===Y||G===void 0&&Y===void 0||tm(t,i,X,G,l,Y);return}}for(var U in a)G=a[U],a.hasOwnProperty(U)&&G!=null&&!l.hasOwnProperty(U)&&Xe(t,i,U,null,l,G);for(J in l)G=l[J],Y=a[J],!l.hasOwnProperty(J)||G===Y||G==null&&Y==null||Xe(t,i,J,G,l,Y)}var nm=null,im=null;function Lu(t){return t.nodeType===9?t:t.ownerDocument}function t1(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n1(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function rm(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sm=null;function AT(){var t=window.event;return t&&t.type==="popstate"?t===sm?!1:(sm=t,!0):(sm=null,!1)}var i1=typeof setTimeout=="function"?setTimeout:void 0,RT=typeof clearTimeout=="function"?clearTimeout:void 0,r1=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof r1<"u"?function(t){return r1.resolve(null).then(t).catch(IT)}:i1;function IT(t){setTimeout(function(){throw t})}function kr(t){return t==="head"}function s1(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=t.ownerDocument;if(a&1&&Cl(E.documentElement),a&2&&Cl(E.body),a&4)for(a=E.head,Cl(a),E=a.firstChild;E;){var T=E.nextSibling,C=E.nodeName;E[ms]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=T}}if(h===0){t.removeChild(d),Vl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Vl(i)}function am(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":am(a),pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function NT(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ms])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Fn(t.nextSibling),t===null)break}return null}function DT(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Fn(t.nextSibling),t===null))return null;return t}function om(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function OT(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Fn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var lm=null;function a1(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function o1(t,i,a){switch(i=Lu(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Cl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);pr(t)}var kn=new Map,l1=new Set;function Uu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wi=se.d;se.d={f:MT,r:kT,D:PT,C:VT,L:jT,m:LT,X:zT,S:UT,M:BT};function MT(){var t=Wi.f(),i=Nu();return t||i}function kT(t){var i=ei(t);i!==null&&i.tag===5&&i.type==="form"?Cy(i):Wi.r(t)}var Xa=typeof document>"u"?null:document;function c1(t,i,a){var l=Xa;if(l&&typeof i=="string"&&i){var h=_t(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),l1.has(h)||(l1.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Ft(i,"link",t),mt(i),l.head.appendChild(i)))}}function PT(t){Wi.D(t),c1("dns-prefetch",t,null)}function VT(t,i){Wi.C(t,i),c1("preconnect",t,i)}function jT(t,i,a){Wi.L(t,i,a);var l=Xa;if(l&&t&&i){var h='link[rel="preload"][as="'+_t(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_t(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_t(a.imageSizes)+'"]')):h+='[href="'+_t(t)+'"]';var d=h;switch(i){case"style":d=Wa(t);break;case"script":d=Za(t)}kn.has(d)||(t=b({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),kn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Il(d))||i==="script"&&l.querySelector(Nl(d))||(i=l.createElement("link"),Ft(i,"link",t),mt(i),l.head.appendChild(i)))}}function LT(t,i){Wi.m(t,i);var a=Xa;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Za(t)}if(!kn.has(d)&&(t=b({rel:"modulepreload",href:t},i),kn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Nl(d)))return}l=a.createElement("link"),Ft(l,"link",t),mt(l),a.head.appendChild(l)}}}function UT(t,i,a){Wi.S(t,i,a);var l=Xa;if(l&&t){var h=en(l).hoistableStyles,d=Wa(t);i=i||"default";var E=h.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(Il(d)))T.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":i},a),(a=kn.get(d))&&cm(t,a);var C=E=l.createElement("link");mt(C),Ft(C,"link",t),C._p=new Promise(function(F,X){C.onload=F,C.onerror=X}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zu(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},h.set(d,E)}}}function zT(t,i){Wi.X(t,i);var a=Xa;if(a&&t){var l=en(a).hoistableScripts,h=Za(t),d=l.get(h);d||(d=a.querySelector(Nl(h)),d||(t=b({src:t,async:!0},i),(i=kn.get(h))&&um(t,i),d=a.createElement("script"),mt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function BT(t,i){Wi.M(t,i);var a=Xa;if(a&&t){var l=en(a).hoistableScripts,h=Za(t),d=l.get(h);d||(d=a.querySelector(Nl(h)),d||(t=b({src:t,async:!0,type:"module"},i),(i=kn.get(h))&&um(t,i),d=a.createElement("script"),mt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function u1(t,i,a,l){var h=(h=we.current)?Uu(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Wa(a.href),a=en(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wa(a.href);var d=en(h).hoistableStyles,E=d.get(t);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=h.querySelector(Il(t)))&&!d._p&&(E.instance=d,E.state.loading=5),kn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(t,a),d||qT(h,t,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Za(a),a=en(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Wa(t){return'href="'+_t(t)+'"'}function Il(t){return'link[rel="stylesheet"]['+t+"]"}function h1(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function qT(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ft(i,"link",a),mt(i),t.head.appendChild(i))}function Za(t){return'[src="'+_t(t)+'"]'}function Nl(t){return"script[async]"+t}function f1(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+_t(a.href)+'"]');if(l)return i.instance=l,mt(l),l;var h=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),mt(l),Ft(l,"style",h),zu(l,a.precedence,t),i.instance=l;case"stylesheet":h=Wa(a.href);var d=t.querySelector(Il(h));if(d)return i.state.loading|=4,i.instance=d,mt(d),d;l=h1(a),(h=kn.get(h))&&cm(l,h),d=(t.ownerDocument||t).createElement("link"),mt(d);var E=d;return E._p=new Promise(function(T,C){E.onload=T,E.onerror=C}),Ft(d,"link",l),i.state.loading|=4,zu(d,a.precedence,t),i.instance=d;case"script":return d=Za(a.src),(h=t.querySelector(Nl(d)))?(i.instance=h,mt(h),h):(l=a,(h=kn.get(d))&&(l=b({},a),um(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),mt(h),Ft(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,zu(l,a.precedence,t));return i.instance}function zu(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function cm(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function um(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Bu=null;function d1(t,i,a){if(Bu===null){var l=new Map,h=Bu=new Map;h.set(a,l)}else h=Bu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ms]||d[xt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=t+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function m1(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function FT(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function p1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Dl=null;function HT(){}function GT(t,i,a){if(Dl===null)throw Error(s(475));var l=Dl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Wa(a.href),d=t.querySelector(Il(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=qu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,mt(d);return}d=t.ownerDocument||t,a=h1(a),(h=kn.get(h))&&cm(a,h),d=d.createElement("link"),mt(d);var E=d;E._p=new Promise(function(T,C){E.onload=T,E.onerror=C}),Ft(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=qu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function YT(){if(Dl===null)throw Error(s(475));var t=Dl;return t.stylesheets&&t.count===0&&hm(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&hm(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function qu(){if(this.count--,this.count===0){if(this.stylesheets)hm(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Fu=null;function hm(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Fu=new Map,i.forEach(KT,t),Fu=null,qu.call(t))}function KT(t,i){if(!(i.state.loading&4)){var a=Fu.get(t);if(a)var l=a.get(null);else{a=new Map,Fu.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var E=h[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,h),a.set(E,h),this.count++,l=qu.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Ol={$$typeof:ne,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function QT(t,i,a,l,h,d,E,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.hiddenUpdates=Ri(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function g1(t,i,a,l,h,d,E,T,C,F,X,J){return t=new QT(t,i,a,E,T,C,F,J),i=1,d===!0&&(i|=24),d=mn(3,null,null,i),t.current=d,d.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Xf(d),t}function y1(t){return t?(t=Ia,t):Ia}function v1(t,i,a,l,h,d){h=y1(h),l.context===null?l.context=h:l.pendingContext=h,l=br(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Tr(t,l,i),a!==null&&(_n(a,t,i),ll(a,t,i))}function _1(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function fm(t,i){_1(t,i),(t=t.alternate)&&_1(t,i)}function E1(t){if(t.tag===13){var i=Ca(t,67108864);i!==null&&_n(i,t,67108864),fm(t,67108864)}}var Hu=!0;function $T(t,i,a,l){var h=Q.T;Q.T=null;var d=se.p;try{se.p=2,dm(t,i,a,l)}finally{se.p=d,Q.T=h}}function XT(t,i,a,l){var h=Q.T;Q.T=null;var d=se.p;try{se.p=8,dm(t,i,a,l)}finally{se.p=d,Q.T=h}}function dm(t,i,a,l){if(Hu){var h=mm(l);if(h===null)em(t,i,l,Gu,a),T1(t,l);else if(ZT(h,t,i,a,l))l.stopPropagation();else if(T1(t,l),i&4&&-1<WT.indexOf(t)){for(;h!==null;){var d=ei(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Ln(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var C=1<<31-Kt(E);T.entanglements[1]|=C,E&=~C}mi(d),(Ye&6)===0&&(Cu=Tn()+500,xl(0))}}break;case 13:T=Ca(d,2),T!==null&&_n(T,d,2),Nu(),fm(d,2)}if(d=mm(l),d===null&&em(t,i,l,Gu,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else em(t,i,l,null,a)}}function mm(t){return t=xn(t),pm(t)}var Gu=null;function pm(t){if(Gu=null,t=Ii(t),t!==null){var i=c(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Gu=t,null}function b1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vf()){case No:return 2;case oa:return 8;case cs:case _f:return 32;case la:return 268435456;default:return 32}default:return 32}}var gm=!1,Pr=null,Vr=null,jr=null,Ml=new Map,kl=new Map,Lr=[],WT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T1(t,i){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(i.pointerId)}}function Pl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ei(i),i!==null&&E1(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function ZT(t,i,a,l,h){switch(i){case"focusin":return Pr=Pl(Pr,t,i,a,l,h),!0;case"dragenter":return Vr=Pl(Vr,t,i,a,l,h),!0;case"mouseover":return jr=Pl(jr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Ml.set(d,Pl(Ml.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,kl.set(d,Pl(kl.get(d)||null,t,i,a,l,h)),!0}return!1}function w1(t){var i=Ii(t.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Nc(t.priority,function(){if(a.tag===13){var l=vn();l=fr(l);var h=Ca(a,l);h!==null&&_n(h,a,l),fm(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=mm(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Mi=l,a.target.dispatchEvent(l),Mi=null}else return i=ei(a),i!==null&&E1(i),t.blockedOn=a,!1;i.shift()}return!0}function S1(t,i,a){Yu(t)&&a.delete(i)}function JT(){gm=!1,Pr!==null&&Yu(Pr)&&(Pr=null),Vr!==null&&Yu(Vr)&&(Vr=null),jr!==null&&Yu(jr)&&(jr=null),Ml.forEach(S1),kl.forEach(S1)}function Ku(t,i){t.blockedOn===i&&(t.blockedOn=null,gm||(gm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,JT)))}var Qu=null;function x1(t){Qu!==t&&(Qu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(pm(l||a)===null)continue;break}var d=ei(a);d!==null&&(t.splice(i,3),i-=3,pd(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Vl(t){function i(C){return Ku(C,t)}Pr!==null&&Ku(Pr,t),Vr!==null&&Ku(Vr,t),jr!==null&&Ku(jr,t),Ml.forEach(i),kl.forEach(i);for(var a=0;a<Lr.length;a++){var l=Lr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Lr.length&&(a=Lr[0],a.blockedOn===null);)w1(a),a.blockedOn===null&&Lr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],E=h[vt]||null;if(typeof d=="function")E||x1(a);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,E=d[vt]||null)T=E.formAction;else if(pm(h)!==null)continue}else T=E.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),x1(a)}}}function ym(t){this._internalRoot=t}$u.prototype.render=ym.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=vn();v1(a,l,t,i,null,null)},$u.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;v1(t.current,2,null,t,null,null),Nu(),i[wn]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var i=dr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Lr.length&&i!==0&&i<Lr[a].priority;a++);Lr.splice(a,0,t),a===0&&w1(t)}};var A1=e.version;if(A1!=="19.1.1")throw Error(s(527,A1,"19.1.1"));se.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var ew={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{ut=Xu.inject(ew),Ge=Xu}catch{}}return Ll.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=qy,d=Fy,E=Hy,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=g1(t,1,!1,null,null,a,l,h,d,E,T,null),t[wn]=i.current,Jd(t),new ym(i)},Ll.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=qy,E=Fy,T=Hy,C=null,F=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(C=a.unstable_transitionCallbacks),a.formState!==void 0&&(F=a.formState)),i=g1(t,1,!0,i,a??null,l,h,d,E,T,C,F),i.context=y1(null),a=i.current,l=vn(),l=fr(l),h=br(l),h.callback=null,Tr(a,h,l),a=l,i.current.lanes=a,Ci(i,a),mi(i),t[wn]=i.current,Jd(t),new $u(i)},Ll.version="19.1.1",Ll}var V1;function hw(){if(V1)return Em.exports;V1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Em.exports=uw(),Em.exports}var fw=hw();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var j1="popstate";function dw(r={}){function e(o,c){let{pathname:f="/",search:m="",hash:p=""}=na(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Lm("",{pathname:f,search:m,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let f=o.document.querySelector("base"),m="";if(f&&f.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");m=y===-1?p:p.slice(0,y)}return m+"#"+(typeof c=="string"?c:Jl(c))}function s(o,c){Qn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return pw(e,n,s,r)}function lt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Qn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mw(){return Math.random().toString(36).substring(2,10)}function L1(r,e){return{usr:r.state,key:r.key,idx:e}}function Lm(r,e,n=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?na(e):e,state:n,key:e&&e.key||s||mw()}}function Jl({pathname:r="/",search:e="",hash:n=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function na(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substring(n),r=r.substring(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function pw(r,e,n,s={}){let{window:o=document.defaultView,v5Compat:c=!1}=s,f=o.history,m="POP",p=null,y=b();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function b(){return(f.state||{idx:null}).idx}function x(){m="POP";let H=b(),$=H==null?null:H-y;y=H,p&&p({action:m,location:z.location,delta:$})}function S(H,$){m="PUSH";let ie=Lm(z.location,H,$);n&&n(ie,H),y=b()+1;let ne=L1(ie,y),ce=z.createHref(ie);try{f.pushState(ne,"",ce)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;o.location.assign(ce)}c&&p&&p({action:m,location:z.location,delta:1})}function D(H,$){m="REPLACE";let ie=Lm(z.location,H,$);n&&n(ie,H),y=b();let ne=L1(ie,y),ce=z.createHref(ie);f.replaceState(ne,"",ce),c&&p&&p({action:m,location:z.location,delta:0})}function j(H){return gw(H)}let z={get action(){return m},get location(){return r(o,f)},listen(H){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(j1,x),p=H,()=>{o.removeEventListener(j1,x),p=null}},createHref(H){return e(o,H)},createURL:j,encodeLocation(H){let $=j(H);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:D,go(H){return f.go(H)}};return z}function gw(r,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),lt(n,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Jl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=n+s),new URL(s,n)}function w_(r,e,n="/"){return yw(r,e,n,!1)}function yw(r,e,n,s){let o=typeof e=="string"?na(e):e,c=nr(o.pathname||"/",n);if(c==null)return null;let f=S_(r);vw(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let y=Iw(c);m=Rw(f[p],y,s)}return m}function S_(r,e=[],n=[],s="",o=!1){let c=(f,m,p=o,y)=>{let b={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(s)&&p)return;lt(b.relativePath.startsWith(s),`Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(s.length)}let x=tr([s,b.relativePath]),S=n.concat(b);f.children&&f.children.length>0&&(lt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),S_(f.children,e,S,x,p)),!(f.path==null&&!f.index)&&e.push({path:x,score:xw(x,f.index),routesMeta:S})};return r.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))c(f,m);else for(let p of x_(f.path))c(f,m,!0,p)}),e}function x_(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let f=x_(s.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function vw(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Aw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var _w=/^:[\w-]+$/,Ew=3,bw=2,Tw=1,ww=10,Sw=-2,U1=r=>r==="*";function xw(r,e){let n=r.split("/"),s=n.length;return n.some(U1)&&(s+=Sw),e&&(s+=bw),n.filter(o=>!U1(o)).reduce((o,c)=>o+(_w.test(c)?Ew:c===""?Tw:ww),s)}function Aw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Rw(r,e,n=!1){let{routesMeta:s}=r,o={},c="/",f=[];for(let m=0;m<s.length;++m){let p=s[m],y=m===s.length-1,b=c==="/"?e:e.slice(c.length)||"/",x=vh({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},b),S=p.route;if(!x&&y&&n&&!s[s.length-1].route.index&&(x=vh({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},b)),!x)return null;Object.assign(o,x.params),f.push({params:o,pathname:tr([c,x.pathname]),pathnameBase:Mw(tr([c,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(c=tr([c,x.pathnameBase]))}return f}function vh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Cw(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],f=c.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:s.reduce((y,{paramName:b,isOptional:x},S)=>{if(b==="*"){let j=m[S]||"";f=c.slice(0,c.length-j.length).replace(/(.)\/+$/,"$1")}const D=m[S];return x&&!D?y[b]=void 0:y[b]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:f,pattern:r}}function Cw(r,e=!1,n=!0){Qn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(s.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Iw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function nr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function Nw(r,e="/"){let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?na(r):r;return{pathname:n?n.startsWith("/")?n:Dw(n,e):e,search:kw(s),hash:Pw(o)}}function Dw(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Sm(r,e,n,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ow(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function A_(r){let e=Ow(r);return e.map((n,s)=>s===e.length-1?n.pathname:n.pathnameBase)}function R_(r,e,n,s=!1){let o;typeof r=="string"?o=na(r):(o={...r},lt(!o.pathname||!o.pathname.includes("?"),Sm("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),Sm("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),Sm("#","search","hash",o)));let c=r===""||o.pathname==="",f=c?"/":o.pathname,m;if(f==null)m=n;else{let x=e.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),x-=1;o.pathname=S.join("/")}m=x>=0?e[x]:"/"}let p=Nw(o,m),y=f&&f!=="/"&&f.endsWith("/"),b=(c||f===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||b)&&(p.pathname+="/"),p}var tr=r=>r.join("/").replace(/\/\/+/g,"/"),Mw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),kw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Pw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Vw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var C_=["POST","PUT","PATCH","DELETE"];new Set(C_);var jw=["GET",...C_];new Set(jw);var _o=L.createContext(null);_o.displayName="DataRouter";var Fh=L.createContext(null);Fh.displayName="DataRouterState";L.createContext(!1);var I_=L.createContext({isTransitioning:!1});I_.displayName="ViewTransition";var Lw=L.createContext(new Map);Lw.displayName="Fetchers";var Uw=L.createContext(null);Uw.displayName="Await";var xi=L.createContext(null);xi.displayName="Navigation";var fc=L.createContext(null);fc.displayName="Location";var or=L.createContext({outlet:null,matches:[],isDataRoute:!1});or.displayName="Route";var pp=L.createContext(null);pp.displayName="RouteError";function zw(r,{relative:e}={}){lt(dc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=L.useContext(xi),{hash:o,pathname:c,search:f}=mc(r,{relative:e}),m=c;return n!=="/"&&(m=c==="/"?n:tr([n,c])),s.createHref({pathname:m,search:f,hash:o})}function dc(){return L.useContext(fc)!=null}function ia(){return lt(dc(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(fc).location}var N_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function D_(r){L.useContext(xi).static||L.useLayoutEffect(r)}function Eo(){let{isDataRoute:r}=L.useContext(or);return r?Jw():Bw()}function Bw(){lt(dc(),"useNavigate() may be used only in the context of a <Router> component.");let r=L.useContext(_o),{basename:e,navigator:n}=L.useContext(xi),{matches:s}=L.useContext(or),{pathname:o}=ia(),c=JSON.stringify(A_(s)),f=L.useRef(!1);return D_(()=>{f.current=!0}),L.useCallback((p,y={})=>{if(Qn(f.current,N_),!f.current)return;if(typeof p=="number"){n.go(p);return}let b=R_(p,JSON.parse(c),o,y.relative==="path");r==null&&e!=="/"&&(b.pathname=b.pathname==="/"?e:tr([e,b.pathname])),(y.replace?n.replace:n.push)(b,y.state,y)},[e,n,c,o,r])}L.createContext(null);function mc(r,{relative:e}={}){let{matches:n}=L.useContext(or),{pathname:s}=ia(),o=JSON.stringify(A_(n));return L.useMemo(()=>R_(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function qw(r,e){return O_(r,e)}function O_(r,e,n,s){lt(dc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=L.useContext(xi),{matches:c}=L.useContext(or),f=c[c.length-1],m=f?f.params:{},p=f?f.pathname:"/",y=f?f.pathnameBase:"/",b=f&&f.route;{let $=b&&b.path||"";M_(p,!b||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let x=ia(),S;if(e){let $=typeof e=="string"?na(e):e;lt(y==="/"||$.pathname?.startsWith(y),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),S=$}else S=x;let D=S.pathname||"/",j=D;if(y!=="/"){let $=y.replace(/^\//,"").split("/");j="/"+D.replace(/^\//,"").split("/").slice($.length).join("/")}let z=w_(r,{pathname:j});Qn(b||z!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Qn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Kw(z&&z.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:tr([y,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:tr([y,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),c,n,s);return e&&H?L.createElement(fc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function Fw(){let r=Zw(),e=Vw(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:c},"ErrorBoundary")," or"," ",L.createElement("code",{style:c},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:o},n):null,f)}var Hw=L.createElement(Fw,null),Gw=class extends L.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?L.createElement(or.Provider,{value:this.props.routeContext},L.createElement(pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Yw({routeContext:r,match:e,children:n}){let s=L.useContext(_o);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),L.createElement(or.Provider,{value:r},n)}function Kw(r,e=[],n=null,s=null){if(r==null){if(!n)return null;if(n.errors)r=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let o=r,c=n?.errors;if(c!=null){let p=o.findIndex(y=>y.route.id&&c?.[y.route.id]!==void 0);lt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let f=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:b,errors:x}=n,S=y.route.loader&&!b.hasOwnProperty(y.route.id)&&(!x||x[y.route.id]===void 0);if(y.route.lazy||S){f=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,y,b)=>{let x,S=!1,D=null,j=null;n&&(x=c&&y.route.id?c[y.route.id]:void 0,D=y.route.errorElement||Hw,f&&(m<0&&b===0?(M_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,j=null):m===b&&(S=!0,j=y.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,b+1)),H=()=>{let $;return x?$=D:S?$=j:y.route.Component?$=L.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=p,L.createElement(Yw,{match:y,routeContext:{outlet:p,matches:z,isDataRoute:n!=null},children:$})};return n&&(y.route.ErrorBoundary||y.route.errorElement||b===0)?L.createElement(Gw,{location:n.location,revalidation:n.revalidation,component:D,error:x,children:H(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):H()},null)}function gp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qw(r){let e=L.useContext(_o);return lt(e,gp(r)),e}function $w(r){let e=L.useContext(Fh);return lt(e,gp(r)),e}function Xw(r){let e=L.useContext(or);return lt(e,gp(r)),e}function yp(r){let e=Xw(r),n=e.matches[e.matches.length-1];return lt(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function Ww(){return yp("useRouteId")}function Zw(){let r=L.useContext(pp),e=$w("useRouteError"),n=yp("useRouteError");return r!==void 0?r:e.errors?.[n]}function Jw(){let{router:r}=Qw("useNavigate"),e=yp("useNavigate"),n=L.useRef(!1);return D_(()=>{n.current=!0}),L.useCallback(async(o,c={})=>{Qn(n.current,N_),n.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...c}))},[r,e])}var z1={};function M_(r,e,n){!e&&!z1[r]&&(z1[r]=!0,Qn(!1,n))}L.memo(e4);function e4({routes:r,future:e,state:n}){return O_(r,void 0,n,e)}function Br(r){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function t4({basename:r="/",children:e=null,location:n,navigationType:s="POP",navigator:o,static:c=!1}){lt(!dc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),m=L.useMemo(()=>({basename:f,navigator:o,static:c,future:{}}),[f,o,c]);typeof n=="string"&&(n=na(n));let{pathname:p="/",search:y="",hash:b="",state:x=null,key:S="default"}=n,D=L.useMemo(()=>{let j=nr(p,f);return j==null?null:{location:{pathname:j,search:y,hash:b,state:x,key:S},navigationType:s}},[f,p,y,b,x,S,s]);return Qn(D!=null,`<Router basename="${f}"> is not able to match the URL "${p}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:L.createElement(xi.Provider,{value:m},L.createElement(fc.Provider,{children:e,value:D}))}function n4({children:r,location:e}){return qw(Um(r),e)}function Um(r,e=[]){let n=[];return L.Children.forEach(r,(s,o)=>{if(!L.isValidElement(s))return;let c=[...e,o];if(s.type===L.Fragment){n.push.apply(n,Um(s.props.children,c));return}lt(s.type===Br,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Um(s.props.children,c)),n.push(f)}),n}var sh="get",ah="application/x-www-form-urlencoded";function Hh(r){return r!=null&&typeof r.tagName=="string"}function i4(r){return Hh(r)&&r.tagName.toLowerCase()==="button"}function r4(r){return Hh(r)&&r.tagName.toLowerCase()==="form"}function s4(r){return Hh(r)&&r.tagName.toLowerCase()==="input"}function a4(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function o4(r,e){return r.button===0&&(!e||e==="_self")&&!a4(r)}var Wu=null;function l4(){if(Wu===null)try{new FormData(document.createElement("form"),0),Wu=!1}catch{Wu=!0}return Wu}var c4=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xm(r){return r!=null&&!c4.has(r)?(Qn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ah}"`),null):r}function u4(r,e){let n,s,o,c,f;if(r4(r)){let m=r.getAttribute("action");s=m?nr(m,e):null,n=r.getAttribute("method")||sh,o=xm(r.getAttribute("enctype"))||ah,c=new FormData(r)}else if(i4(r)||s4(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(s=p?nr(p,e):null,n=r.getAttribute("formmethod")||m.getAttribute("method")||sh,o=xm(r.getAttribute("formenctype"))||xm(m.getAttribute("enctype"))||ah,c=new FormData(m,r),!l4()){let{name:y,type:b,value:x}=r;if(b==="image"){let S=y?`${y}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else y&&c.append(y,x)}}else{if(Hh(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=sh,s=null,o=ah,f=r}return c&&o==="text/plain"&&(f=c,c=void 0),{action:s,method:n.toLowerCase(),encType:o,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function h4(r,e,n){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${n}`:e&&nr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${n}`,s}async function f4(r,e){if(r.id in e)return e[r.id];try{let n=await import(r.module);return e[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function d4(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function m4(r,e,n){let s=await Promise.all(r.map(async o=>{let c=e.routes[o.route.id];if(c){let f=await f4(c,n);return f.links?f.links():[]}return[]}));return v4(s.flat(1).filter(d4).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function B1(r,e,n,s,o,c){let f=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>n[y].pathname!==p.pathname||n[y].route.path?.endsWith("*")&&n[y].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,y)=>f(p,y)||m(p,y)):c==="data"?e.filter((p,y)=>{let b=s.routes[p.route.id];if(!b||!b.hasLoader)return!1;if(f(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function p4(r,e,{includeHydrateFallback:n}={}){return g4(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function g4(r){return[...new Set(r)]}function y4(r){let e={},n=Object.keys(r).sort();for(let s of n)e[s]=r[s];return e}function v4(r,e){let n=new Set;return new Set(e),r.reduce((s,o)=>{let c=JSON.stringify(y4(o));return n.has(c)||(n.add(c),s.push({key:c,link:o})),s},[])}function k_(){let r=L.useContext(_o);return vp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function _4(){let r=L.useContext(Fh);return vp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var _p=L.createContext(void 0);_p.displayName="FrameworkContext";function P_(){let r=L.useContext(_p);return vp(r,"You must render this element inside a <HydratedRouter> element"),r}function E4(r,e){let n=L.useContext(_p),[s,o]=L.useState(!1),[c,f]=L.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:b,onTouchStart:x}=e,S=L.useRef(null);L.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let z=$=>{$.forEach(ie=>{f(ie.isIntersecting)})},H=new IntersectionObserver(z,{threshold:.5});return S.current&&H.observe(S.current),()=>{H.disconnect()}}},[r]),L.useEffect(()=>{if(s){let z=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(z)}}},[s]);let D=()=>{o(!0)},j=()=>{o(!1),f(!1)};return n?r!=="intent"?[c,S,{}]:[c,S,{onFocus:Ul(m,D),onBlur:Ul(p,j),onMouseEnter:Ul(y,D),onMouseLeave:Ul(b,j),onTouchStart:Ul(x,D)}]:[!1,S,{}]}function Ul(r,e){return n=>{r&&r(n),n.defaultPrevented||e(n)}}function b4({page:r,...e}){let{router:n}=k_(),s=L.useMemo(()=>w_(n.routes,r,n.basename),[n.routes,r,n.basename]);return s?L.createElement(w4,{page:r,matches:s,...e}):null}function T4(r){let{manifest:e,routeModules:n}=P_(),[s,o]=L.useState([]);return L.useEffect(()=>{let c=!1;return m4(r,e,n).then(f=>{c||o(f)}),()=>{c=!0}},[r,e,n]),s}function w4({page:r,matches:e,...n}){let s=ia(),{manifest:o,routeModules:c}=P_(),{basename:f}=k_(),{loaderData:m,matches:p}=_4(),y=L.useMemo(()=>B1(r,e,p,o,s,"data"),[r,e,p,o,s]),b=L.useMemo(()=>B1(r,e,p,o,s,"assets"),[r,e,p,o,s]),x=L.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let j=new Set,z=!1;if(e.forEach($=>{let ie=o.routes[$.route.id];!ie||!ie.hasLoader||(!y.some(ne=>ne.route.id===$.route.id)&&$.route.id in m&&c[$.route.id]?.shouldRevalidate||ie.hasClientLoader?z=!0:j.add($.route.id))}),j.size===0)return[];let H=h4(r,f,"data");return z&&j.size>0&&H.searchParams.set("_routes",e.filter($=>j.has($.route.id)).map($=>$.route.id).join(",")),[H.pathname+H.search]},[f,m,s,o,y,e,r,c]),S=L.useMemo(()=>p4(b,o),[b,o]),D=T4(b);return L.createElement(L.Fragment,null,x.map(j=>L.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...n})),S.map(j=>L.createElement("link",{key:j,rel:"modulepreload",href:j,...n})),D.map(({key:j,link:z})=>L.createElement("link",{key:j,nonce:n.nonce,...z})))}function S4(...r){return e=>{r.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var V_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{V_&&(window.__reactRouterVersion="7.8.1")}catch{}function x4({basename:r,children:e,window:n}){let s=L.useRef();s.current==null&&(s.current=dw({window:n,v5Compat:!0}));let o=s.current,[c,f]=L.useState({action:o.action,location:o.location}),m=L.useCallback(p=>{L.startTransition(()=>f(p))},[f]);return L.useLayoutEffect(()=>o.listen(m),[o,m]),L.createElement(t4,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:o})}var j_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wi=L.forwardRef(function({onClick:e,discover:n="render",prefetch:s="none",relative:o,reloadDocument:c,replace:f,state:m,target:p,to:y,preventScrollReset:b,viewTransition:x,...S},D){let{basename:j}=L.useContext(xi),z=typeof y=="string"&&j_.test(y),H,$=!1;if(typeof y=="string"&&z&&(H=y,V_))try{let R=new URL(window.location.href),O=y.startsWith("//")?new URL(R.protocol+y):new URL(y),N=nr(O.pathname,j);O.origin===R.origin&&N!=null?y=N+O.search+O.hash:$=!0}catch{Qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let ie=zw(y,{relative:o}),[ne,ce,oe]=E4(s,S),pe=C4(y,{replace:f,state:m,target:p,preventScrollReset:b,relative:o,viewTransition:x});function V(R){e&&e(R),R.defaultPrevented||pe(R)}let A=L.createElement("a",{...S,...oe,href:H||ie,onClick:$||c?e:V,ref:S4(D,ce),target:p,"data-discover":!z&&n==="render"?"true":void 0});return ne&&!z?L.createElement(L.Fragment,null,A,L.createElement(b4,{page:ie})):A});wi.displayName="Link";var Ep=L.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:s="",end:o=!1,style:c,to:f,viewTransition:m,children:p,...y},b){let x=mc(f,{relative:y.relative}),S=ia(),D=L.useContext(Fh),{navigator:j,basename:z}=L.useContext(xi),H=D!=null&&M4(x)&&m===!0,$=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,ie=S.pathname,ne=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;n||(ie=ie.toLowerCase(),ne=ne?ne.toLowerCase():null,$=$.toLowerCase()),ne&&z&&(ne=nr(ne,z)||ne);const ce=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let oe=ie===$||!o&&ie.startsWith($)&&ie.charAt(ce)==="/",pe=ne!=null&&(ne===$||!o&&ne.startsWith($)&&ne.charAt($.length)==="/"),V={isActive:oe,isPending:pe,isTransitioning:H},A=oe?e:void 0,R;typeof s=="function"?R=s(V):R=[s,oe?"active":null,pe?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let O=typeof c=="function"?c(V):c;return L.createElement(wi,{...y,"aria-current":A,className:R,ref:b,style:O,to:f,viewTransition:m},typeof p=="function"?p(V):p)});Ep.displayName="NavLink";var A4=L.forwardRef(({discover:r="render",fetcherKey:e,navigate:n,reloadDocument:s,replace:o,state:c,method:f=sh,action:m,onSubmit:p,relative:y,preventScrollReset:b,viewTransition:x,...S},D)=>{let j=D4(),z=O4(m,{relative:y}),H=f.toLowerCase()==="get"?"get":"post",$=typeof m=="string"&&j_.test(m),ie=ne=>{if(p&&p(ne),ne.defaultPrevented)return;ne.preventDefault();let ce=ne.nativeEvent.submitter,oe=ce?.getAttribute("formmethod")||f;j(ce||ne.currentTarget,{fetcherKey:e,method:oe,navigate:n,replace:o,state:c,relative:y,preventScrollReset:b,viewTransition:x})};return L.createElement("form",{ref:D,method:H,action:z,onSubmit:s?p:ie,...S,"data-discover":!$&&r==="render"?"true":void 0})});A4.displayName="Form";function R4(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L_(r){let e=L.useContext(_o);return lt(e,R4(r)),e}function C4(r,{target:e,replace:n,state:s,preventScrollReset:o,relative:c,viewTransition:f}={}){let m=Eo(),p=ia(),y=mc(r,{relative:c});return L.useCallback(b=>{if(o4(b,e)){b.preventDefault();let x=n!==void 0?n:Jl(p)===Jl(y);m(r,{replace:x,state:s,preventScrollReset:o,relative:c,viewTransition:f})}},[p,m,y,n,s,e,r,o,c,f])}var I4=0,N4=()=>`__${String(++I4)}__`;function D4(){let{router:r}=L_("useSubmit"),{basename:e}=L.useContext(xi),n=Ww();return L.useCallback(async(s,o={})=>{let{action:c,method:f,encType:m,formData:p,body:y}=u4(s,e);if(o.navigate===!1){let b=o.fetcherKey||N4();await r.fetch(b,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||f,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,n])}function O4(r,{relative:e}={}){let{basename:n}=L.useContext(xi),s=L.useContext(or);lt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),c={...mc(r||".",{relative:e})},f=ia();if(r==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(b=>b==="")){m.delete("index"),p.filter(x=>x).forEach(x=>m.append("index",x));let b=m.toString();c.search=b?`?${b}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:tr([n,c.pathname])),Jl(c)}function M4(r,{relative:e}={}){let n=L.useContext(I_);lt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=L_("useViewTransitionState"),o=mc(r,{relative:e});if(!n.isTransitioning)return!1;let c=nr(n.currentLocation.pathname,s)||n.currentLocation.pathname,f=nr(n.nextLocation.pathname,s)||n.nextLocation.pathname;return vh(o.pathname,f)!=null||vh(o.pathname,c)!=null}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zm=function(){return zm=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},zm.apply(this,arguments)};function k4(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}var ro="",Yl=null,oh=null,U_=null;function bp(){ro="",Yl!==null&&Yl.disconnect(),oh!==null&&(window.clearTimeout(oh),oh=null)}function q1(r){var e=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return e.includes(r.tagName)&&!r.hasAttribute("disabled")||n.includes(r.tagName)&&r.hasAttribute("href")}function F1(){var r=null;if(ro==="#")r=document.body;else{var e=ro.replace("#","");r=document.getElementById(e),r===null&&ro==="#top"&&(r=document.body)}if(r!==null){U_(r);var n=r.getAttribute("tabindex");return n===null&&!q1(r)&&r.setAttribute("tabindex",-1),r.focus({preventScroll:!0}),n===null&&!q1(r)&&(r.blur(),r.removeAttribute("tabindex")),bp(),!0}return!1}function P4(r){window.setTimeout(function(){F1()===!1&&(Yl===null&&(Yl=new MutationObserver(F1)),Yl.observe(document,{attributes:!0,childList:!0,subtree:!0}),oh=window.setTimeout(function(){bp()},r||1e4))},0)}function z_(r){return er.forwardRef(function(e,n){var s="";typeof e.to=="string"&&e.to.includes("#")?s="#"+e.to.split("#").slice(1).join("#"):typeof e.to=="object"&&typeof e.to.hash=="string"&&(s=e.to.hash);var o={};r===Ep&&(o.isActive=function(m,p){return m&&m.isExact&&p.hash===s});function c(m){bp(),ro=e.elementId?"#"+e.elementId:s,e.onClick&&e.onClick(m),ro!==""&&!m.defaultPrevented&&m.button===0&&(!e.target||e.target==="_self")&&!(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey)&&(U_=e.scroll||(function(p){return e.smooth?p.scrollIntoView({behavior:"smooth"}):p.scrollIntoView()}),P4(e.timeout))}var f=k4(e,["scroll","smooth","timeout","elementId"]);return er.createElement(r,zm({},o,f,{onClick:c,ref:n}),e.children)})}var Ja=z_(wi);z_(Ep);function Tp(){return L.useEffect(()=>{const r=document.getElementById("hamburger"),e=document.getElementById("nav-links"),n=document.getElementById("close-btn"),s=()=>e.classList.add("active"),o=()=>e.classList.remove("active"),c=f=>{e.classList.contains("active")&&!e.contains(f.target)&&!r.contains(f.target)&&e.classList.remove("active")};return r.addEventListener("click",s),n.addEventListener("click",o),document.addEventListener("click",c),()=>{r.removeEventListener("click",s),n.removeEventListener("click",o),document.removeEventListener("click",c)}},[]),g.jsx("div",{className:"header",children:g.jsxs("nav",{className:"navbar",children:[g.jsx("h1",{children:"Gold Corps Inc"}),g.jsxs("div",{className:"hamburger",id:"hamburger",children:[g.jsx("span",{}),g.jsx("span",{}),g.jsx("span",{})]}),g.jsxs("div",{className:"nav-links",id:"nav-links",children:[g.jsx("button",{className:"close-btn",id:"close-btn",children:"×"}),g.jsx("div",{className:"search-container",children:g.jsx("input",{placeholder:"Search...",className:"search-bar",type:"search"})}),g.jsx(Ja,{smooth:!0,to:"/#",children:"Home"}),g.jsx(Ja,{smooth:!0,to:"/#about",children:"About us"}),g.jsx(Ja,{smooth:!0,to:"/#contact",children:"Contact us"}),g.jsx(Ja,{smooth:!0,to:"/#services",children:"Our services"}),g.jsx(Ja,{smooth:!0,to:"/#team",children:"Our team"}),g.jsx(Ja,{smooth:!0,to:"/#testimonial",children:"Testimonial"}),g.jsx(wi,{to:"/stock",children:"Stock prices"})]})]})})}const V4="/GoldcCorps/assets/image-1-Picsart-AiImageEnhancer-BcMqKlvr.jpeg",j4="/GoldcCorps/assets/image-2-BqTb_Qtz.jpeg",L4="/GoldcCorps/assets/image-3-Mfy9IzQb.jpeg",U4="/GoldcCorps/assets/image-4-BooAjJhm.jpeg";function z4(){const r=[V4,j4,L4,U4],[e,n]=L.useState(0);return L.useEffect(()=>{const s=setInterval(()=>{n(o=>(o+1)%r.length)},5e3);return()=>clearInterval(s)},[r.length]),g.jsxs("div",{className:"hero",children:[g.jsx("div",{className:"hero-slide active",style:{backgroundImage:`url(${r[e]})`,backgroundSize:"cover",backgroundPosition:"center",transition:"background-image 1s ease-in-out"}}),g.jsxs("div",{className:"hero-overlay",children:[g.jsx("h2",{children:"Gold Corps - Your Premium Investment Partner"}),g.jsx("p",{children:"Empowering you to grow wealth with confidence."}),g.jsx(wi,{to:"/signup",children:g.jsx("button",{className:"btn btn1",children:"signup"})}),g.jsx("button",{className:"btn",children:"Subscribe to our newsletter"})]})]})}var B_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},H1=er.createContext&&er.createContext(B_),B4=["attr","size","title"];function q4(r,e){if(r==null)return{};var n=F4(r,e),s,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(o=0;o<c.length;o++)s=c[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(n[s]=r[s])}return n}function F4(r,e){if(r==null)return{};var n={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;n[s]=r[s]}return n}function _h(){return _h=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},_h.apply(this,arguments)}function G1(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,s)}return n}function Eh(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?G1(Object(n),!0).forEach(function(s){H4(r,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):G1(Object(n)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))})}return r}function H4(r,e,n){return e=G4(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function G4(r){var e=Y4(r,"string");return typeof e=="symbol"?e:e+""}function Y4(r,e){if(typeof r!="object"||!r)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var s=n.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function q_(r){return r&&r.map((e,n)=>er.createElement(e.tag,Eh({key:n},e.attr),q_(e.child)))}function Je(r){return e=>er.createElement(K4,_h({attr:Eh({},r.attr)},e),q_(r.child))}function K4(r){var e=n=>{var{attr:s,size:o,title:c}=r,f=q4(r,B4),m=o||n.size||"1em",p;return n.className&&(p=n.className),r.className&&(p=(p?p+" ":"")+r.className),er.createElement("svg",_h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,f,{className:p,style:Eh(Eh({color:r.color||n.color},n.style),r.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&er.createElement("title",null,c),r.children)};return H1!==void 0?er.createElement(H1.Consumer,null,n=>e(n)):e(B_)}function Q4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M341.28 22.78L254 123.75l63.156-33.656 4.438-2.375 4.437 2.405 18.314 9.938-3.063-77.282zM129.814 46.563l24.375 130.407 88.718-47.282-113.094-83.125zM321.53 108.97L83.345 235.905 192.156 293.5l237.47-125.75-108.095-58.78zm42.75 44.686l25.595 13.03-197.313 103.94-66.875-35.688 25.344-13.407 41.532 22.19 171.72-90.064zm92.19 18.22l9.092 24.03 26.22-22.656-35.313-1.375zm-15.783 11.155L199.47 310.78l-5.782 83.376L465.75 249.344l-25.063-66.313zm-334.562 19.564L16.562 226.78l36.876 19.564 6.093-16.28 1.25-3.314 3.126-1.656 42.22-22.5zm-34.438 48.312l-28.812 77 131.844 70.156 6.155-89.375-109.188-57.78zm335.344 50.875l-174.25 92.75 54.907 103.44L325.5 358.093l142.47 26.625-60.94-82.94zm-300.717 81.064l-19.438 44.812L144 402.876l-37.688-20.032z"},child:[]}]})(r)}function $4(r){return Je({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function X4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(r)}function W4(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function Z4(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(r)}function ec(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function so(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(r)}function J4(r){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(r)}function eS(r){return Je({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(r)}function tS(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(r)}function Y1(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"},child:[]}]})(r)}function nS(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"},child:[]}]})(r)}function wp(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(r)}function iS(r){return Je({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(r)}function F_(r){return Je({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(r)}function rS(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(r)}function sS(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(r)}function H_(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z"},child:[]}]})(r)}function aS(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function G_(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"},child:[]}]})(r)}function oS(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function lS(r){return Je({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function cS(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function uS(r){return Je({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}function Gh(r){return Je({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(r)}function hS(r){return Je({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"},child:[]}]})(r)}function fS(){return g.jsx("section",{id:"about",className:"about-section",children:g.jsxs("div",{className:"about-container",children:[g.jsxs("div",{className:"about-block",children:[g.jsx(Q4,{className:"about-icon"}),g.jsx("h2",{children:"Our Business"}),g.jsxs("p",{children:["Gold Corps stands at the pinnacle of global investment, bridging ",g.jsx("strong",{children:"gold, copper, agriculture, and cryptocurrency"})," into one unmatched portfolio. We operate in the world’s most lucrative and resource-rich regions, strategically positioned for ",g.jsx("strong",{children:"maximum profitability and sustainable impact"}),". Our assets are not just high-margin — they are ",g.jsx("strong",{children:"legacy-grade"}),", designed to deliver value for decades."]})]}),g.jsxs("div",{className:"about-block",children:[g.jsx(ec,{className:"about-icon"}),g.jsx("h2",{children:"Our Strategy"}),g.jsxs("p",{children:["We think beyond quarters — ",g.jsx("strong",{children:"we think in generations"}),". Every move is backed by deep market intelligence, cutting-edge technology, and a relentless pursuit of excellence. From ",g.jsx("strong",{children:"exploring new mining frontiers"}),"to ",g.jsx("strong",{children:"pioneering next-generation crypto opportunities"}),", Goldvest invests where innovation meets stability. We build wealth that lasts, while ensuring our growth model is ",g.jsx("strong",{children:"ethical, sustainable, and future-proof"}),"."]})]}),g.jsxs("div",{className:"about-block",children:[g.jsx(Gh,{className:"about-icon"}),g.jsx("h2",{children:"Our Purpose"}),g.jsxs("p",{children:["Gold Corps is on a mission to become ",g.jsx("strong",{children:"the world’s most respected investment powerhouse"})," — measured not just by profits, but by the trust and prosperity we bring to our stakeholders. We are led by visionaries, powered by innovators, and grounded in principles that protect both people and the planet."]}),g.jsx("blockquote",{children:"Own the finest assets. Employ the brightest minds. Deliver unmatched returns. Leave a legacy worth its weight in gold."})]})]})})}const dS=[{icon:g.jsx(Gh,{}),label:"Trusted Users",value:3e3,sub:"Investors Worldwide",desc:"Thousands of satisfied clients entrust us with their gold, copper, and diversified investments every day."},{icon:g.jsx(W4,{}),label:"Employees",value:5e3,sub:"Global Workforce",desc:"Our dedicated professionals operate at the highest standards, driving innovation and performance."},{icon:g.jsx(iS,{}),label:"Countries",value:6,sub:"Active Markets",desc:"A truly global footprint, giving investors exposure to the world’s most lucrative mining and trading hubs."},{icon:g.jsx(ec,{}),label:"Growth",value:80,sub:"Annual Increase (%)",desc:"Sustained double-digit growth powered by strategic expansion and long-term asset value creation."}];function mS(){return L.useEffect(()=>{document.querySelectorAll(".stat-value").forEach(e=>{const n=+e.getAttribute("data-target");let s=0;const o=()=>{const c=n/60;s<n?(s+=c,e.innerText=Math.ceil(s)+(e.dataset.percent?"%":"+"),setTimeout(o,20)):e.innerText=n+(e.dataset.percent?"%":"+")};o()})},[]),g.jsxs("section",{className:"stats-section",id:"services",children:[g.jsxs("div",{className:"stats-header",children:[g.jsx("h1",{className:"stats-title",children:"A Legacy of Trust. A Future of Growth."}),g.jsxs("p",{className:"stats-intro",children:["At ",g.jsx("span",{className:"gold-text",children:"Gold Corps"}),", we don’t just invest — we shape industries. From precious metals and global commodities to cutting-edge crypto and sustainable agriculture, we are redefining wealth creation on a global scale. Our unmatched portfolio and elite team ensure exceptional returns for investors while building lasting value for communities worldwide."]})]}),g.jsx("div",{className:"stats-container",children:dS.map((r,e)=>g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon",children:r.icon}),g.jsx("h2",{className:"stat-value shimmer","data-target":r.value,"data-percent":r.label==="Growth"?"true":"",children:"0"}),g.jsx("p",{className:"stat-label",children:r.label}),g.jsx("span",{className:"stat-sub",children:r.sub}),g.jsx("p",{className:"stat-desc",children:r.desc})]},e))})]})}const pS=[{icon:g.jsx(Gh,{}),label:"Trusted Investors",value:3e3,suffix:"+",sub:"Global investor community placing trust in our strategy",desc:"Thousands of investors choose Gold corps for long-term capital growth, risk-controlled exposure, and diversified access across assets."},{icon:g.jsx(ec,{}),label:"Employees",value:5e3,suffix:"",sub:"Experienced professionals powering global operations",desc:"A world-class team of geologists, traders, engineers and compliance experts committed to delivering measurable results."},{icon:g.jsx(F_,{}),label:"Countries",value:6,suffix:"+",sub:"Strategic, jurisdiction-diverse footprint",desc:"Operations and partnerships across high-potential regions to capture premium resources and market access."},{icon:g.jsx(ec,{}),label:"Annual Growth",value:80,suffix:"%",sub:"Sustained expansion through disciplined execution",desc:"Strong historical performance driven by portfolio quality and careful capital allocation."}],gS=["Global Mining Consortium","Frontier Capital Partners","AgriGrowth International","CryptoBridge Labs","Sustainable Resources Alliance"],Fs=[{quote:"Gold corps helped me diversify into real assets and crypto with clarity and confidence. Their team is responsive and deeply knowledgeable.",name:"Maria J. Finck",title:"Business Owner"},{quote:"From first contact to steady returns, Gold corps delivered tangible results. Their approach is conservative where it must be, bold where it counts.",name:"Hajime Omuro",title:"Operations Manager"},{quote:"I recommend Gold corps for any investor looking to combine sustainability with performance—transparent and trustworthy.",name:"James G. Wyatt",title:"Entrepreneur"}];function yS(r=".stat-value",e=1200){L.useEffect(()=>{const n=document.querySelectorAll(r);n.length&&n.forEach(s=>{const o=parseFloat(s.getAttribute("data-target"))||0,c=s.getAttribute("data-suffix")||"",f=performance.now(),m=p=>{const y=Math.min((p-f)/e,1),b=Math.floor(y*o);s.textContent=`${b.toLocaleString()}${c}`,y<1?requestAnimationFrame(m):s.textContent=`${o.toLocaleString()}${c}`};requestAnimationFrame(m)})},[r,e])}function vS(){const[r,e]=L.useState(0);L.useEffect(()=>{const c=setInterval(()=>e(f=>(f+1)%Fs.length),6e3);return()=>clearInterval(c)},[]),yS(".stat-value",1200);const[n,s]=L.useState(""),o=c=>{c.preventDefault(),alert(`Thanks — we'll reach out to ${n}`),s("")};return g.jsxs("main",{className:"gold-landing",children:[g.jsx("header",{className:"hero-section",children:g.jsxs("div",{className:"hero-inner",children:[g.jsx("h1",{className:"hero-title",id:"team",children:"Gold Corps — Building Enduring Wealth Across Gold, Copper, Agriculture & Crypto"}),g.jsx("p",{className:"hero-sub",children:"Trusted by thousands across six countries, we blend resource expertise, trading precision, and sustainable practices to generate high-quality, long-term returns."}),g.jsxs("div",{className:"hero-cta",children:[g.jsx(wi,{to:"/signup",children:g.jsx("button",{className:"btn btn-primary",children:" Get Started"})}),g.jsxs("button",{className:"btn btn-outline",children:[g.jsx(aS,{})," Watch Overview"]})]}),g.jsxs("div",{className:"hero-stats",children:[g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"6+"}),g.jsx("span",{className:"label",children:"Countries"})]}),g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"3,000+"}),g.jsx("span",{className:"label",children:"Investors"})]}),g.jsxs("div",{className:"stat-inline",children:[g.jsx("span",{className:"big",children:"80%"}),g.jsx("span",{className:"label",children:"Recent Growth"})]})]})]})}),g.jsx("section",{className:"partners-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx($4,{className:"icon"})," Partner Companies & Recognitions"]}),g.jsx("p",{className:"muted",children:"Gold corps is recognized for innovation, transparency, and bridging traditional finance with the digital future. Our partners and award bodies span investment, sustainability and technology sectors."}),g.jsx("ul",{className:"partner-list",children:gS.map((c,f)=>g.jsxs("li",{className:"partner-item",children:[g.jsx("span",{className:"dot"})," ",c]},f))})]})}),g.jsx("section",{className:"why-section",children:g.jsxs("div",{className:"container split",children:[g.jsxs("div",{className:"col",children:[g.jsxs("h2",{children:[g.jsx(rS,{className:"icon"})," Why Choose Gold corps"]}),g.jsx("p",{className:"muted",children:"We combine disciplined capital allocation, deep technical knowledge, and a relentless focus on risk management — all aimed at creating durable capital appreciation and measurable social benefit."}),g.jsxs("div",{className:"features-grid",children:[g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Tailored Solutions"}),g.jsx("p",{children:"Personalised investment strategies aligned with your objectives and timeline."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Long-term Partnership"}),g.jsx("p",{children:"We invest alongside our clients and prioritize stability through cycles."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"Active Opportunity Sourcing"}),g.jsx("p",{children:"Proprietary pipelines and global partnerships deliver differentiated deal flow."})]}),g.jsxs("div",{className:"feature",children:[g.jsx("h3",{children:"24/7 Investor Support"}),g.jsx("p",{children:"Dedicated teams that act decisively whenever the market presents opportunity or risk."})]})]})]}),g.jsxs("aside",{className:"col panel",children:[g.jsx("h3",{children:"Tailored for You"}),g.jsx("p",{children:"The deeper we understand your goals and constraints, the smarter we can allocate capital on your behalf — harvesting superior returns while managing downside exposure."}),g.jsxs("div",{className:"panel-list",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"In Your Corner"}),g.jsx("p",{children:"We stand with investors through market cycles — protection and growth combined."})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"We Do the Work"}),g.jsx("p",{children:"Expert media buying and deal execution so your capital works efficiently."})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Round-the-clock"}),g.jsx("p",{children:"Support across timezones and fast response for critical needs."})]})]})]})]})}),g.jsx("section",{className:"how-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(ec,{className:"icon",id:"FAQ"})," How It Works — Simple, Transparent, Profitable"]}),g.jsxs("ol",{className:"steps",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Refer & Qualify"})," — Invite new investors who deposit $100 or more."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Acquisition"})," — Our affiliate & media teams deploy targeted campaigns ($20–$40 per qualified lead)."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Profit Split"})," — A properly qualified referral generates $60–$80 in net value; volume scales returns."]})]}),g.jsxs("div",{className:"mini-case",children:[g.jsx("strong",{children:"Example (25 referrals)"}),g.jsxs("div",{className:"case-grid",children:[g.jsxs("div",{children:[g.jsx("span",{className:"case-number",children:"$2,000"}),g.jsx("div",{className:"case-label",children:"Estimated Expense"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"case-number",children:"$6,000–$8,000"}),g.jsx("div",{className:"case-label",children:"Projected Profit"})]})]})]}),g.jsx("p",{className:"muted small",children:"Affiliate success requires marketing expertise, a tested funnel and an operating budget — all of which we provide through our partners and proven teams."})]})}),g.jsx("section",{className:"stats-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(F_,{className:"icon"})," Key Metrics & Performance"]}),g.jsx("p",{className:"muted",children:"Performance that proves our strategy — clear metrics, transparent reporting."}),g.jsx("div",{className:"stats-grid",children:pS.map((c,f)=>g.jsxs("div",{className:"stat-card",children:[g.jsx("div",{className:"stat-icon",children:c.icon}),g.jsx("div",{className:"stat-value shimmer","data-target":c.value,"data-suffix":c.suffix,"aria-label":`${c.value}${c.suffix}`,children:"0"}),g.jsx("div",{className:"stat-label",children:c.label}),g.jsx("div",{className:"stat-sub",children:c.sub}),g.jsx("div",{className:"stat-desc muted",children:c.desc})]},f))})]})}),g.jsx("section",{className:"miners-section",children:g.jsxs("div",{className:"container split",children:[g.jsxs("div",{className:"col",children:[g.jsx("h2",{children:"Our Miners — Reliability & Consistency"}),g.jsx("p",{className:"muted",children:"Since 2022, our mining and operations teams have consistently met investor obligations and optimized output across multiple sites. With five years of on-the-ground experience in asset development and day-to-day operations, our teams are trained for safe, high-quality production."}),g.jsxs("ul",{className:"miner-list",children:[g.jsxs("li",{children:[g.jsx("strong",{children:"Operational Excellence"})," — Rigid maintenance and safety regimes ensure uptime and reliability."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Local Partnerships"})," — Working with communities and regulators to ensure sustainable outcomes."]}),g.jsxs("li",{children:[g.jsx("strong",{children:"Transparent Payments"})," — Reliable payouts and investor reporting are built into our processes."]})]})]}),g.jsxs("aside",{className:"col panel",children:[g.jsx("h3",{children:"Geographic Reach"}),g.jsxs("div",{className:"geo-grid",children:[g.jsxs("div",{children:[g.jsx("strong",{children:"Latham"}),g.jsx("span",{className:"muted",children:" — Headquarters"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Africa"}),g.jsx("span",{className:"muted",children:" — Resource operations"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Asia"}),g.jsx("span",{className:"muted",children:" — Development & trading"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"Europe"}),g.jsx("span",{className:"muted",children:" — Finance & compliance"})]}),g.jsxs("div",{children:[g.jsx("strong",{children:"CIS"}),g.jsx("span",{className:"muted",children:" — Strategic partnerships"})]})]})]})]})}),g.jsx("section",{className:"testimonials-section",children:g.jsxs("div",{className:"container",children:[g.jsxs("h2",{children:[g.jsx(Gh,{className:"icon",id:"testimonial"})," Investor Testimonials"]}),g.jsxs("div",{className:"test-carousel",children:[g.jsx("button",{className:"carousel-arrow left",onClick:()=>e(c=>(c-1+Fs.length)%Fs.length),"aria-label":"Previous testimonial",children:g.jsx(J4,{})}),g.jsxs("article",{className:"testimonial-card","aria-live":"polite",children:[g.jsxs("blockquote",{children:["“",Fs[r].quote,"”"]}),g.jsxs("cite",{children:["— ",Fs[r].name,", ",g.jsx("span",{className:"muted",children:Fs[r].title})]})]}),g.jsx("button",{className:"carousel-arrow right",onClick:()=>e(c=>(c+1)%Fs.length),"aria-label":"Next testimonial",children:g.jsx(eS,{})})]})]})}),g.jsx("section",{className:"cta-section",id:"contact",children:g.jsxs("div",{className:"container cta-panel",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"lets-work",children:"Let's Work Together"}),g.jsx("p",{className:"muted",children:"Our sustainability-driven business plan blends responsible mining, ethical trading, and long-term investor value. Join a select group of investors building something that lasts."})]}),g.jsxs("form",{className:"cta-form",onSubmit:o,children:[g.jsx("label",{htmlFor:"email",className:"visually-hidden",children:"Email address"}),g.jsx("input",{id:"email",type:"email",placeholder:"Enter your email",value:n,required:!0,onChange:c=>s(c.target.value)}),g.jsx("button",{className:"btn btn-primary",type:"submit",children:"Get a Quote"})]})]})}),g.jsxs("footer",{className:"site-footer",children:[g.jsxs("div",{className:"container footer-grid",children:[g.jsxs("div",{children:[g.jsx("h4",{children:"Gold corps"}),g.jsx("p",{className:"muted small",children:"Multi-asset investing across gold, copper, agriculture & crypto."})]}),g.jsxs("div",{className:"footer-links",children:[g.jsxs("h5",{children:[g.jsx("a",{className:"footer-links",href:"#",children:"Company"})," "]}),g.jsxs("ul",{children:[g.jsx("li",{children:g.jsx("a",{className:"footer-links",href:"#about",children:"About"})}),g.jsx("li",{children:g.jsx("a",{className:"footer-links",href:"#contact",children:"Contact us"})}),g.jsx("li",{children:g.jsx("a",{className:"footer-links",href:"#testimonial",children:"Our testimonial"})})]})]}),g.jsxs("div",{children:[g.jsx("h5",{children:"Resources"}),g.jsxs("ul",{children:[g.jsx("li",{className:"footer-links",children:g.jsx("a",{className:"footer-links",href:"#FAQ",children:"FAQ"})}),g.jsx("li",{className:"footer-links",children:g.jsx(wi,{to:"/signup",className:"footer-links",children:"Pricing Plans"})})]})]})]}),g.jsx("div",{className:"footer-bottom",children:g.jsxs("small",{children:["© ",new Date().getFullYear()," Gold corps. All rights reserved."]})})]})]})}const _S=()=>{};var K1={};/**
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
 */const Y_=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},ES=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=r[n++];e[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(c&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const c=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|f&63)}}return e.join("")},K_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const c=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,b=c>>2,x=(c&3)<<4|m>>4;let S=(m&15)<<2|y>>6,D=y&63;p||(D=64,f||(S=64)),s.push(n[b],n[x],n[S],n[D])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Y_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ES(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const c=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const x=o<r.length?n[r.charAt(o)]:64;if(++o,c==null||m==null||y==null||x==null)throw new bS;const S=c<<2|m>>4;if(s.push(S),y!==64){const D=m<<4&240|y>>2;if(s.push(D),x!==64){const j=y<<6&192|x;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TS=function(r){const e=Y_(r);return K_.encodeByteArray(e,!0)},bh=function(r){return TS(r).replace(/\./g,"")},Q_=function(r){try{return K_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SS=()=>wS().__FIREBASE_DEFAULTS__,xS=()=>{if(typeof process>"u"||typeof K1>"u")return;const r=K1.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},AS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Q_(r[1]);return e&&JSON.parse(e)},Yh=()=>{try{return _S()||SS()||xS()||AS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},$_=r=>Yh()?.emulatorHosts?.[r],RS=r=>{const e=$_(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},X_=()=>Yh()?.config,W_=r=>Yh()?.[`_${r}`];/**
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
 */class CS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function bo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Z_(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function IS(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[bh(JSON.stringify(n)),bh(JSON.stringify(f)),""].join(".")}const Kl={};function NS(){const r={prod:[],emulator:[]};for(const e of Object.keys(Kl))Kl[e]?r.emulator.push(e):r.prod.push(e);return r}function DS(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let Q1=!1;function J_(r,e){if(typeof window>"u"||typeof document>"u"||!bo(window.location.host)||Kl[r]===e||Kl[r]||Q1)return;Kl[r]=e;function n(S){return`__firebase__banner__${S}`}const s="__firebase__banner",c=NS().prod.length>0;function f(){const S=document.getElementById(s);S&&S.remove()}function m(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function p(S,D){S.setAttribute("width","24"),S.setAttribute("id",D),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function y(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{Q1=!0,f()},S}function b(S,D){S.setAttribute("id",D),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function x(){const S=DS(s),D=n("text"),j=document.getElementById(D)||document.createElement("span"),z=n("learnmore"),H=document.getElementById(z)||document.createElement("a"),$=n("preprendIcon"),ie=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const ne=S.element;m(ne),b(H,z);const ce=y();p(ie,$),ne.append(ie,j,H,ce),document.body.appendChild(ne)}c?(j.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Jt())}function MS(){const r=Yh()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function PS(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function VS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jS(){const r=Jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function LS(){return!MS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function US(){try{return typeof indexedDB=="object"}catch{return!1}}function zS(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const BS="FirebaseError";class lr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=BS,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pc.prototype.create)}}class pc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,c=this.errors[e],f=c?qS(c,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new lr(o,m,s)}}function qS(r,e){return r.replace(FS,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const FS=/\{\$([^}]+)}/g;function HS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Qs(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const c=r[o],f=e[o];if($1(c)&&$1(f)){if(!Qs(c,f))return!1}else if(c!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function $1(r){return r!==null&&typeof r=="object"}/**
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
 */function gc(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function zl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,c]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(c)}}),e}function Bl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function GS(r,e){const n=new YS(r,e);return n.subscribe.bind(n)}class YS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");KS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Am),o.error===void 0&&(o.error=Am),o.complete===void 0&&(o.complete=Am);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KS(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Am(){}/**
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
 */const Hs="[DEFAULT]";/**
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
 */class QS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new CS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XS(e))try{this.getOrInitializeService({instanceIdentifier:Hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(e=Hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hs){return this.instances.has(e)}getOptions(e=Hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&e(c,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$S(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hs){return this.component?this.component.multipleInstances?e:Hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $S(r){return r===Hs?void 0:r}function XS(r){return r.instantiationMode==="EAGER"}/**
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
 */class WS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const ZS={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},JS=Me.INFO,ex={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},tx=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=ex[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sp{constructor(e){this.name=e,this._logLevel=JS,this._logHandler=tx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const nx=(r,e)=>e.some(n=>r instanceof n);let X1,W1;function ix(){return X1||(X1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rx(){return W1||(W1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e2=new WeakMap,Bm=new WeakMap,t2=new WeakMap,Rm=new WeakMap,xp=new WeakMap;function sx(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",c),r.removeEventListener("error",f)},c=()=>{n(Yr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",c),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&e2.set(n,r)}).catch(()=>{}),xp.set(e,r),e}function ax(r){if(Bm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",f),r.removeEventListener("abort",f)},c=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",c),r.addEventListener("error",f),r.addEventListener("abort",f)});Bm.set(r,e)}let qm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Bm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||t2.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ox(r){qm=r(qm)}function lx(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(Cm(this),e,...n);return t2.set(s,e.sort?e.sort():[e]),Yr(s)}:rx().includes(r)?function(...e){return r.apply(Cm(this),e),Yr(e2.get(this))}:function(...e){return Yr(r.apply(Cm(this),e))}}function cx(r){return typeof r=="function"?lx(r):(r instanceof IDBTransaction&&ax(r),nx(r,ix())?new Proxy(r,qm):r)}function Yr(r){if(r instanceof IDBRequest)return sx(r);if(Rm.has(r))return Rm.get(r);const e=cx(r);return e!==r&&(Rm.set(r,e),xp.set(e,r)),e}const Cm=r=>xp.get(r);function ux(r,e,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const f=indexedDB.open(r,e),m=Yr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Yr(f.result),p.oldVersion,p.newVersion,Yr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{c&&p.addEventListener("close",()=>c()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const hx=["get","getKey","getAll","getAllKeys","count"],fx=["put","add","delete","clear"],Im=new Map;function Z1(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Im.get(e))return Im.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=fx.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||hx.includes(n)))return;const c=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Im.set(e,c),c}ox(r=>({...r,get:(e,n,s)=>Z1(e,n)||r.get(e,n,s),has:(e,n)=>!!Z1(e,n)||r.has(e,n)}));/**
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
 */class dx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mx(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mx(r){return r.getComponent()?.type==="VERSION"}const Fm="@firebase/app",J1="0.14.1";/**
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
 */const ir=new Sp("@firebase/app"),px="@firebase/app-compat",gx="@firebase/analytics-compat",yx="@firebase/analytics",vx="@firebase/app-check-compat",_x="@firebase/app-check",Ex="@firebase/auth",bx="@firebase/auth-compat",Tx="@firebase/database",wx="@firebase/data-connect",Sx="@firebase/database-compat",xx="@firebase/functions",Ax="@firebase/functions-compat",Rx="@firebase/installations",Cx="@firebase/installations-compat",Ix="@firebase/messaging",Nx="@firebase/messaging-compat",Dx="@firebase/performance",Ox="@firebase/performance-compat",Mx="@firebase/remote-config",kx="@firebase/remote-config-compat",Px="@firebase/storage",Vx="@firebase/storage-compat",jx="@firebase/firestore",Lx="@firebase/ai",Ux="@firebase/firestore-compat",zx="firebase",Bx="12.1.0";/**
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
 */const Hm="[DEFAULT]",qx={[Fm]:"fire-core",[px]:"fire-core-compat",[yx]:"fire-analytics",[gx]:"fire-analytics-compat",[_x]:"fire-app-check",[vx]:"fire-app-check-compat",[Ex]:"fire-auth",[bx]:"fire-auth-compat",[Tx]:"fire-rtdb",[wx]:"fire-data-connect",[Sx]:"fire-rtdb-compat",[xx]:"fire-fn",[Ax]:"fire-fn-compat",[Rx]:"fire-iid",[Cx]:"fire-iid-compat",[Ix]:"fire-fcm",[Nx]:"fire-fcm-compat",[Dx]:"fire-perf",[Ox]:"fire-perf-compat",[Mx]:"fire-rc",[kx]:"fire-rc-compat",[Px]:"fire-gcs",[Vx]:"fire-gcs-compat",[jx]:"fire-fst",[Ux]:"fire-fst-compat",[Lx]:"fire-vertex","fire-js":"fire-js",[zx]:"fire-js-all"};/**
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
 */const Th=new Map,Fx=new Map,Gm=new Map;function ev(r,e){try{r.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function ho(r){const e=r.name;if(Gm.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Gm.set(e,r);for(const n of Th.values())ev(n,r);for(const n of Fx.values())ev(n,r);return!0}function Ap(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function cn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Hx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new pc("app","Firebase",Hx);/**
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
 */class Gx{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
 */const To=Bx;function n2(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Hm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Kr.create("bad-app-name",{appName:String(o)});if(n||(n=X_()),!n)throw Kr.create("no-options");const c=Th.get(o);if(c){if(Qs(n,c.options)&&Qs(s,c.config))return c;throw Kr.create("duplicate-app",{appName:o})}const f=new WS(o);for(const p of Gm.values())f.addComponent(p);const m=new Gx(n,s,f);return Th.set(o,m),m}function i2(r=Hm){const e=Th.get(r);if(!e&&r===Hm&&X_())return n2();if(!e)throw Kr.create("no-app",{appName:r});return e}function Qr(r,e,n){let s=qx[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(f.join(" "));return}ho(new $s(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Yx="firebase-heartbeat-database",Kx=1,tc="firebase-heartbeat-store";let Nm=null;function r2(){return Nm||(Nm=ux(Yx,Kx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(tc)}catch(n){console.warn(n)}}}}).catch(r=>{throw Kr.create("idb-open",{originalErrorMessage:r.message})})),Nm}async function Qx(r){try{const n=(await r2()).transaction(tc),s=await n.objectStore(tc).get(s2(r));return await n.done,s}catch(e){if(e instanceof lr)ir.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e?.message});ir.warn(n.message)}}}async function tv(r,e){try{const s=(await r2()).transaction(tc,"readwrite");await s.objectStore(tc).put(e,s2(r)),await s.done}catch(n){if(n instanceof lr)ir.warn(n.message);else{const s=Kr.create("idb-set",{originalErrorMessage:n?.message});ir.warn(s.message)}}}function s2(r){return`${r.name}!${r.options.appId}`}/**
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
 */const $x=1024,Xx=30;class Wx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jx(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nv();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Xx){const o=eA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ir.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nv(),{heartbeatsToSend:n,unsentEntries:s}=Zx(this._heartbeatsCache.heartbeats),o=bh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return ir.warn(e),""}}}function nv(){return new Date().toISOString().substring(0,10)}function Zx(r,e=$x){const n=[];let s=r.slice();for(const o of r){const c=n.find(f=>f.agent===o.agent);if(c){if(c.dates.push(o.date),iv(n)>e){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),iv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return US()?zS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qx(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return tv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function iv(r){return bh(JSON.stringify({version:2,heartbeats:r})).length}function eA(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function tA(r){ho(new $s("platform-logger",e=>new dx(e),"PRIVATE")),ho(new $s("heartbeat",e=>new Wx(e),"PRIVATE")),Qr(Fm,J1,r),Qr(Fm,J1,"esm2020"),Qr("fire-js","")}tA("");function a2(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nA=a2,o2=new pc("auth","Firebase",a2());/**
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
 */const wh=new Sp("@firebase/auth");function iA(r,...e){wh.logLevel<=Me.WARN&&wh.warn(`Auth (${To}): ${r}`,...e)}function lh(r,...e){wh.logLevel<=Me.ERROR&&wh.error(`Auth (${To}): ${r}`,...e)}/**
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
 */function jn(r,...e){throw Cp(r,...e)}function Gn(r,...e){return Cp(r,...e)}function Rp(r,e,n){const s={...nA(),[e]:n};return new pc("auth","Firebase",s).create(e,{appName:r.name})}function yi(r){return Rp(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function l2(r,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&jn(r,"argument-error"),Rp(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return o2.create(r,...e)}function Ee(r,e,...n){if(!r)throw Cp(e,...n)}function Zi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw lh(e),new Error(e)}function rr(r,e){r||Zi(e)}/**
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
 */function Ym(){return typeof self<"u"&&self.location?.href||""}function rA(){return rv()==="http:"||rv()==="https:"}function rv(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function sA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rA()||PS()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class yc{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=OS()||VS()}get(){return sA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ip(r,e){rr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class c2{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],cA=new yc(3e4,6e4);function cr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ur(r,e,n,s,o={}){return u2(r,o,async()=>{let c={},f={};s&&(e==="GET"?f=s:c={body:JSON.stringify(s)});const m=gc({key:r.config.apiKey,...f}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y={method:e,headers:p,...c};return kS()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&bo(r.emulatorConfig.host)&&(y.credentials="include"),c2.fetch()(await h2(r,r.config.apiHost,n,m),y)})}async function u2(r,e,n){r._canInitEmulator=!1;const s={...oA,...e};try{const o=new hA(r),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await c.json();if("needConfirmation"in f)throw Zu(r,"account-exists-with-different-credential",f);if(c.ok&&!("errorMessage"in f))return f;{const m=c.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Zu(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Zu(r,"user-disabled",f);const b=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Rp(r,b,y);jn(r,b)}}catch(o){if(o instanceof lr)throw o;jn(r,"network-request-failed",{message:String(o)})}}async function vc(r,e,n,s,o={}){const c=await ur(r,e,n,s,o);return"mfaPendingCredential"in c&&jn(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function h2(r,e,n,s){const o=`${e}${n}?${s}`,c=r,f=c.config.emulator?Ip(r.config,o):`${r.config.apiScheme}://${o}`;return lA.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(f).toString():f}function uA(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),cA.get())})}}function Zu(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Gn(r,e,s);return o.customData._tokenResponse=n,o}function sv(r){return r!==void 0&&r.enterprise!==void 0}class fA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dA(r,e){return ur(r,"GET","/v2/recaptchaConfig",cr(r,e))}/**
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
 */async function mA(r,e){return ur(r,"POST","/v1/accounts:delete",e)}async function Sh(r,e){return ur(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ql(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pA(r,e=!1){const n=Dt(r),s=await n.getIdToken(e),o=Np(s);Ee(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,f=c?.sign_in_provider;return{claims:o,token:s,authTime:Ql(Dm(o.auth_time)),issuedAtTime:Ql(Dm(o.iat)),expirationTime:Ql(Dm(o.exp)),signInProvider:f||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Dm(r){return Number(r)*1e3}function Np(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return lh("JWT malformed, contained fewer than 3 sections"),null;try{const o=Q_(n);return o?JSON.parse(o):(lh("Failed to decode base64 JWT payload"),null)}catch(o){return lh("Caught error parsing JWT payload as JSON",o?.toString()),null}}function av(r){const e=Np(r);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nc(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof lr&&gA(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function gA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class yA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Km{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ql(this.lastLoginAt),this.creationTime=Ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xh(r){const e=r.auth,n=await r.getIdToken(),s=await nc(r,Sh(e,{idToken:n}));Ee(s?.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const c=o.providerUserInfo?.length?f2(o.providerUserInfo):[],f=_A(r.providerData,c),m=r.isAnonymous,p=!(r.email&&o.passwordHash)&&!f?.length,y=m?p:!1,b={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Km(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(r,b)}async function vA(r){const e=Dt(r);await xh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _A(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function f2(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function EA(r,e){const n=await u2(r,{},async()=>{const s=gc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:c}=r.config,f=await h2(r,o,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return r.emulatorConfig&&bo(r.emulatorConfig.host)&&(p.credentials="include"),c2.fetch()(f,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bA(r,e){return ur(r,"POST","/v2/accounts:revokeToken",cr(r,e))}/**
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
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):av(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const n=av(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await EA(e,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,f=new ao;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),c&&(Ee(typeof c=="number","internal-error",{appName:e}),f.expirationTime=c),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Zi("not implemented")}}/**
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
 */function zr(r,e){Ee(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new yA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Km(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await nc(this,this.stsTokenManager.getToken(this.auth,e));return Ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pA(this,e)}reload(){return vA(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await xh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(yi(this.auth));const e=await this.getIdToken();return await nc(this,mA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,p=n._redirectEventId??void 0,y=n.createdAt??void 0,b=n.lastLoginAt??void 0,{uid:x,emailVerified:S,isAnonymous:D,providerData:j,stsTokenManager:z}=n;Ee(x&&z,e,"internal-error");const H=ao.fromJSON(this.name,z);Ee(typeof x=="string",e,"internal-error"),zr(s,e.name),zr(o,e.name),Ee(typeof S=="boolean",e,"internal-error"),Ee(typeof D=="boolean",e,"internal-error"),zr(c,e.name),zr(f,e.name),zr(m,e.name),zr(p,e.name),zr(y,e.name),zr(b,e.name);const $=new Hn({uid:x,auth:e,email:o,emailVerified:S,displayName:s,isAnonymous:D,photoURL:f,phoneNumber:c,tenantId:m,stsTokenManager:H,createdAt:y,lastLoginAt:b});return j&&Array.isArray(j)&&($.providerData=j.map(ie=>({...ie}))),p&&($._redirectEventId=p),$}static async _fromIdTokenResponse(e,n,s=!1){const o=new ao;o.updateFromServerResponse(n);const c=new Hn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await xh(c),c}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ee(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?f2(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!c?.length,m=new ao;m.updateFromIdToken(s);const p=new Hn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Km(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!c?.length};return Object.assign(p,y),p}}/**
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
 */const ov=new Map;function Ji(r){rr(r instanceof Function,"Expected a class definition");let e=ov.get(r);return e?(rr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ov.set(r,e),e)}/**
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
 */class d2{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}d2.type="NONE";const lv=d2;/**
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
 */function ch(r,e,n){return`firebase:${r}:${e}:${n}`}class oo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=ch(this.userKey,o.apiKey,c),this.fullPersistenceKey=ch("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Sh(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new oo(Ji(lv),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let c=o[0]||Ji(lv);const f=ch(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const b=await y._get(f);if(b){let x;if(typeof b=="string"){const S=await Sh(e,{idToken:b}).catch(()=>{});if(!S)break;x=await Hn._fromGetAccountInfoResponse(e,S,b)}else x=Hn._fromJSON(e,b);y!==c&&(m=x),c=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!c._shouldAllowMigration||!p.length?new oo(c,e,s):(c=p[0],m&&await c._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==c)try{await y._remove(f)}catch{}})),new oo(c,e,s))}}/**
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
 */function cv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y2(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m2(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_2(e))return"Blackberry";if(E2(e))return"Webos";if(p2(e))return"Safari";if((e.includes("chrome/")||g2(e))&&!e.includes("edge/"))return"Chrome";if(v2(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function m2(r=Jt()){return/firefox\//i.test(r)}function p2(r=Jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g2(r=Jt()){return/crios\//i.test(r)}function y2(r=Jt()){return/iemobile/i.test(r)}function v2(r=Jt()){return/android/i.test(r)}function _2(r=Jt()){return/blackberry/i.test(r)}function E2(r=Jt()){return/webos/i.test(r)}function Dp(r=Jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function TA(r=Jt()){return Dp(r)&&!!window.navigator?.standalone}function wA(){return jS()&&document.documentMode===10}function b2(r=Jt()){return Dp(r)||v2(r)||E2(r)||_2(r)||/windows phone/i.test(r)||y2(r)}/**
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
 */function T2(r,e=[]){let n;switch(r){case"Browser":n=cv(Jt());break;case"Worker":n=`${cv(Jt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${To}/${s}`}/**
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
 */class SA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((f,m)=>{try{const p=e(c);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function xA(r,e={}){return ur(r,"GET","/v2/passwordPolicy",cr(r,e))}/**
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
 */const AA=6;class RA{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??AA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
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
 */class CA{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new SA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o2,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ji(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await oo.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sh(this,{idToken:e}),s=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(cn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,f=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&m?.user&&(s=m.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xh(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(yi(this));const n=e?Dt(e):null;return n&&Ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(yi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(yi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ji(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xA(this),n=new RA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pc("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ji(e)||this._popupRedirectResolver;Ee(n,this,"argument-error"),this.redirectPersistenceManager=await oo.create(this,[Ji(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{f||c(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T2(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(cn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&iA(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Wn(r){return Dt(r)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=GS(n=>this.observer=n)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IA(r){Kh=r}function w2(r){return Kh.loadJS(r)}function NA(){return Kh.recaptchaEnterpriseScript}function DA(){return Kh.gapiScript}function OA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class MA{constructor(){this.enterprise=new kA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PA="recaptcha-enterprise",S2="NO_RECAPTCHA";class VA{constructor(e){this.type=PA,this.auth=Wn(e)}async verify(e="verify",n=!1){async function s(c){if(!n){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(f,m)=>{dA(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new fA(p);return c.tenantId==null?c._agentRecaptchaConfig=y:c._tenantRecaptchaConfigs[c.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(c,f,m){const p=window.grecaptcha;sv(p)?p.enterprise.ready(()=>{p.enterprise.execute(c,{action:e}).then(y=>{f(y)}).catch(()=>{f(S2)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MA().execute("siteKey",{action:"verify"}):new Promise((c,f)=>{s(this.auth).then(m=>{if(!n&&sv(window.grecaptcha))o(m,c,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=NA();p.length!==0&&(p+=m),w2(p).then(()=>{o(m,c,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function hv(r,e,n,s=!1,o=!1){const c=new VA(r);let f;if(o)f=S2;else try{f=await c.verify(n)}catch{f=await c.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Ah(r,e,n,s,o){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await hv(r,e,n,n==="getOobCode");return s(r,c)}else return s(r,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await hv(r,e,n,n==="getOobCode");return s(r,f)}else return Promise.reject(c)})}/**
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
 */function jA(r,e){const n=Ap(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(Qs(c,e??{}))return o;jn(o,"already-initialized")}return n.initialize({options:e})}function LA(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Ji);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function UA(r,e,n){const s=Wn(r);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,c=x2(e),{host:f,port:m}=zA(e),p=m===null?"":`:${m}`,y={url:`${c}//${f}${p}/`},b=Object.freeze({host:f,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(Qs(y,s.config.emulator)&&Qs(b,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=b,s.settings.appVerificationDisabledForTesting=!0,bo(f)?(Z_(`${c}//${f}${p}`),J_("Auth",!0)):BA()}function x2(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function zA(r){const e=x2(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:fv(s.substr(c.length+1))}}else{const[c,f]=s.split(":");return{host:c,port:fv(f)}}}function fv(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function BA(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zi("not implemented")}_getIdTokenResponse(e){return Zi("not implemented")}_linkToIdToken(e,n){return Zi("not implemented")}_getReauthenticationResolver(e){return Zi("not implemented")}}async function qA(r,e){return ur(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function FA(r,e){return vc(r,"POST","/v1/accounts:signInWithPassword",cr(r,e))}async function HA(r,e){return ur(r,"POST","/v1/accounts:sendOobCode",cr(r,e))}async function GA(r,e){return HA(r,e)}/**
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
 */async function YA(r,e){return vc(r,"POST","/v1/accounts:signInWithEmailLink",cr(r,e))}async function KA(r,e){return vc(r,"POST","/v1/accounts:signInWithEmailLink",cr(r,e))}/**
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
 */class ic extends Op{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new ic(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ic(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ah(e,n,"signInWithPassword",FA);case"emailLink":return YA(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ah(e,s,"signUpPassword",qA);case"emailLink":return KA(e,{idToken:n,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lo(r,e){return vc(r,"POST","/v1/accounts:signInWithIdp",cr(r,e))}/**
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
 */const QA="http://localhost";class Xs extends Op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const f=new Xs(s,o);return f.idToken=c.idToken||void 0,f.accessToken=c.accessToken||void 0,f.secret=c.secret,f.nonce=c.nonce,f.pendingToken=c.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return lo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,lo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,lo(e,n)}buildRequest(){const e={requestUri:QA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=gc(n)}return e}}/**
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
 */function $A(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XA(r){const e=zl(Bl(r)).link,n=e?zl(Bl(e)).deep_link_id:null,s=zl(Bl(r)).deep_link_id;return(s?zl(Bl(s)).link:null)||s||n||e||r}class Mp{constructor(e){const n=zl(Bl(e)),s=n.apiKey??null,o=n.oobCode??null,c=$A(n.mode??null);Ee(s&&o&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=XA(e);try{return new Mp(n)}catch{return null}}}/**
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
 */class wo{constructor(){this.providerId=wo.PROVIDER_ID}static credential(e,n){return ic._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Mp.parseLink(n);return Ee(s,"argument-error"),ic._fromEmailAndCode(e,s.code,s.tenantId)}}wo.PROVIDER_ID="password";wo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _c extends Qh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qr extends _c{constructor(){super("facebook.com")}static credential(e){return Xs._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
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
 */class gi extends _c{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gi.credential(n,s)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
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
 */class Fr extends _c{constructor(){super("github.com")}static credential(e){return Xs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com";Fr.PROVIDER_ID="github.com";/**
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
 */class Hr extends _c{constructor(){super("twitter.com")}static credential(e,n){return Xs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Hr.credential(n,s)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */async function WA(r,e){return vc(r,"POST","/v1/accounts:signUp",cr(r,e))}/**
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
 */class Ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const c=await Hn._fromIdTokenResponse(e,s,o),f=dv(s);return new Ws({user:c,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=dv(s);return new Ws({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function dv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Rh extends lr{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Rh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new Rh(e,n,s,o)}}function A2(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Rh._fromErrorAndOperation(r,c,e,s):c})}async function ZA(r,e,n=!1){const s=await nc(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ws._forOperation(r,"link",s)}/**
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
 */async function JA(r,e,n=!1){const{auth:s}=r;if(cn(s.app))return Promise.reject(yi(s));const o="reauthenticate";try{const c=await nc(r,A2(s,o,e,r),n);Ee(c.idToken,s,"internal-error");const f=Np(c.idToken);Ee(f,s,"internal-error");const{sub:m}=f;return Ee(r.uid===m,s,"user-mismatch"),Ws._forOperation(r,o,c)}catch(c){throw c?.code==="auth/user-not-found"&&jn(s,"user-mismatch"),c}}/**
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
 */async function R2(r,e,n=!1){if(cn(r.app))return Promise.reject(yi(r));const s="signIn",o=await A2(r,s,e),c=await Ws._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(c.user),c}async function e6(r,e){return R2(Wn(r),e)}/**
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
 */async function C2(r){const e=Wn(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function t6(r,e,n){const s=Wn(r);await Ah(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",GA)}async function n6(r,e,n){if(cn(r.app))return Promise.reject(yi(r));const s=Wn(r),f=await Ah(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&C2(r),p}),m=await Ws._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function i6(r,e,n){return cn(r.app)?Promise.reject(yi(r)):e6(Dt(r),wo.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&C2(r),s})}function r6(r,e,n,s){return Dt(r).onIdTokenChanged(e,n,s)}function s6(r,e,n){return Dt(r).beforeAuthStateChanged(e,n)}function I2(r,e,n,s){return Dt(r).onAuthStateChanged(e,n,s)}function a6(r){return Dt(r).signOut()}const Ch="__sak";/**
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
 */class N2{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ch,"1"),this.storage.removeItem(Ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const o6=1e3,l6=10;class D2 extends N2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b2(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},c=this.storage.getItem(s);wA()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,l6):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},o6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D2.type="LOCAL";const c6=D2;/**
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
 */class O2 extends N2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O2.type="SESSION";const M2=O2;/**
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
 */function u6(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new $h(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:c}=n.data,f=this.handlersMap[o];if(!f?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,c)),p=await u6(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$h.receivers=[];/**
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
 */function kp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class h6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,f;return new Promise((m,p)=>{const y=kp("",20);o.port1.start();const b=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(x){const S=x;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(b),c=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(S.data.response);break;default:clearTimeout(b),clearTimeout(c),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function vi(){return window}function f6(r){vi().location.href=r}/**
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
 */function k2(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function d6(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m6(){return navigator?.serviceWorker?.controller||null}function p6(){return k2()?self:null}/**
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
 */const P2="firebaseLocalStorageDb",g6=1,Ih="firebaseLocalStorage",V2="fbase_key";class Ec{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xh(r,e){return r.transaction([Ih],e?"readwrite":"readonly").objectStore(Ih)}function y6(){const r=indexedDB.deleteDatabase(P2);return new Ec(r).toPromise()}function Qm(){const r=indexedDB.open(P2,g6);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ih,{keyPath:V2})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ih)?e(s):(s.close(),await y6(),e(await Qm()))})})}async function mv(r,e,n){const s=Xh(r,!0).put({[V2]:e,value:n});return new Ec(s).toPromise()}async function v6(r,e){const n=Xh(r,!1).get(e),s=await new Ec(n).toPromise();return s===void 0?null:s.value}function pv(r,e){const n=Xh(r,!0).delete(e);return new Ec(n).toPromise()}const _6=800,E6=3;class j2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>E6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$h._getInstance(p6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await d6(),!this.activeServiceWorker)return;this.sender=new h6(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qm();return await mv(e,Ch,"1"),await pv(e,Ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>mv(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>v6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const c=Xh(o,!1).getAll();return new Ec(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:c}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j2.type="LOCAL";const b6=j2;new yc(3e4,6e4);/**
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
 */function Pp(r,e){return e?Ji(e):(Ee(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Vp extends Op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return lo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function T6(r){return R2(r.auth,new Vp(r),r.bypassAuthState)}function w6(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),JA(n,new Vp(r),r.bypassAuthState)}async function S6(r){const{auth:e,user:n}=r;return Ee(n,e,"internal-error"),ZA(n,new Vp(r),r.bypassAuthState)}/**
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
 */class L2{constructor(e,n,s,o,c=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T6;case"linkViaPopup":case"linkViaRedirect":return S6;case"reauthViaPopup":case"reauthViaRedirect":return w6;default:jn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const x6=new yc(2e3,1e4);async function U2(r,e,n){if(cn(r.app))return Promise.reject(Gn(r,"operation-not-supported-in-this-environment"));const s=Wn(r);l2(r,e,Qh);const o=Pp(s,n);return new Gs(s,"signInViaPopup",e,o).executeNotNull()}class Gs extends L2{constructor(e,n,s,o,c){super(e,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,x6.get())};e()}}Gs.currentPopupAction=null;/**
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
 */const A6="pendingRedirect",uh=new Map;class R6 extends L2{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=uh.get(this.auth._key());if(!e){try{const s=await C6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}uh.set(this.auth._key(),e)}return this.bypassAuthState||uh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C6(r,e){const n=B2(e),s=z2(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}async function I6(r,e){return z2(r)._set(B2(e),"true")}function N6(r,e){uh.set(r._key(),e)}function z2(r){return Ji(r._redirectPersistence)}function B2(r){return ch(A6,r.config.apiKey,r.name)}/**
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
 */function q2(r,e,n){return D6(r,e,n)}async function D6(r,e,n){if(cn(r.app))return Promise.reject(yi(r));const s=Wn(r);l2(r,e,Qh),await s._initializationPromise;const o=Pp(s,n);return await I6(o,s),o._openRedirect(s,e,"signInViaRedirect")}async function F2(r,e){return await Wn(r)._initializationPromise,H2(r,e,!1)}async function H2(r,e,n=!1){if(cn(r.app))return Promise.reject(yi(r));const s=Wn(r),o=Pp(s,e),f=await new R6(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const O6=600*1e3;class M6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!G2(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Gn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=O6&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function G2({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function k6(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G2(r);default:return!1}}/**
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
 */async function P6(r,e={}){return ur(r,"GET","/v1/projects",e)}/**
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
 */const V6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,j6=/^https?/;async function L6(r){if(r.config.emulator)return;const{authorizedDomains:e}=await P6(r);for(const n of e)try{if(U6(n))return}catch{}jn(r,"unauthorized-domain")}function U6(r){const e=Ym(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!j6.test(n))return!1;if(V6.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const z6=new yc(3e4,6e4);function yv(){const r=vi().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function B6(r){return new Promise((e,n)=>{function s(){yv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yv(),n(Gn(r,"network-request-failed"))},timeout:z6.get()})}if(vi().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(vi().gapi?.load)s();else{const o=OA("iframefcb");return vi()[o]=()=>{gapi.load?s():n(Gn(r,"network-request-failed"))},w2(`${DA()}?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw hh=null,e})}let hh=null;function q6(r){return hh=hh||B6(r),hh}/**
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
 */const F6=new yc(5e3,15e3),H6="__/auth/iframe",G6="emulator/auth/iframe",Y6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},K6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q6(r){const e=r.config;Ee(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Ip(e,G6):`https://${r.config.authDomain}/${H6}`,s={apiKey:e.apiKey,appName:r.name,v:To},o=K6.get(r.config.apiHost);o&&(s.eid=o);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${gc(s).slice(1)}`}async function $6(r){const e=await q6(r),n=vi().gapi;return Ee(n,r,"internal-error"),e.open({where:document.body,url:Q6(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Y6,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const f=Gn(r,"network-request-failed"),m=vi().setTimeout(()=>{c(f)},F6.get());function p(){vi().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{c(f)})}))}/**
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
 */const X6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W6=500,Z6=600,J6="_blank",e3="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function t3(r,e,n,s=W6,o=Z6){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...X6,width:s.toString(),height:o.toString(),top:c,left:f},y=Jt().toLowerCase();n&&(m=g2(y)?J6:n),m2(y)&&(e=e||e3,p.scrollbars="yes");const b=Object.entries(p).reduce((S,[D,j])=>`${S}${D}=${j},`,"");if(TA(y)&&m!=="_self")return n3(e||"",m),new vv(null);const x=window.open(e||"",m,b);Ee(x,r,"popup-blocked");try{x.focus()}catch{}return new vv(x)}function n3(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const i3="__/auth/handler",r3="emulator/auth/handler",s3=encodeURIComponent("fac");async function _v(r,e,n,s,o,c){Ee(r.config.authDomain,r,"auth-domain-config-required"),Ee(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:To,eventId:o};if(e instanceof Qh){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",HS(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,x]of Object.entries({}))f[b]=x}if(e instanceof _c){const b=e.getScopes().filter(x=>x!=="");b.length>0&&(f.scopes=b.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const b of Object.keys(m))m[b]===void 0&&delete m[b];const p=await r._getAppCheckToken(),y=p?`#${s3}=${encodeURIComponent(p)}`:"";return`${a3(r)}?${gc(m).slice(1)}${y}`}function a3({config:r}){return r.emulator?Ip(r,r3):`https://${r.authDomain}/${i3}`}/**
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
 */const Om="webStorageSupport";class o3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M2,this._completeRedirectFn=H2,this._overrideRedirectResult=N6}async _openPopup(e,n,s,o){rr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await _v(e,n,s,Ym(),o);return t3(e,c,kp())}async _openRedirect(e,n,s,o){await this._originValidation(e);const c=await _v(e,n,s,Ym(),o);return f6(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(rr(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $6(e),s=new M6(e);return n.register("authEvent",o=>(Ee(o?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Om,{type:Om},o=>{const c=o?.[0]?.[Om];c!==void 0&&n(!!c),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b2()||p2()||Dp()}}const l3=o3;var Ev="@firebase/auth",bv="1.11.0";/**
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
 */class c3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function u3(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h3(r){ho(new $s("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Ee(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T2(r)},y=new CA(s,o,c,p);return LA(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ho(new $s("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(s=>new c3(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qr(Ev,bv,u3(r)),Qr(Ev,bv,"esm2020")}/**
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
 */const f3=300,d3=W_("authIdTokenMaxAge")||f3;let Tv=null;const m3=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>d3)return;const o=n?.token;Tv!==o&&(Tv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function p3(r=i2()){const e=Ap(r,"auth");if(e.isInitialized())return e.getImmediate();const n=jA(r,{popupRedirectResolver:l3,persistence:[b6,c6,M2]}),s=W_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const f=m3(c.toString());s6(n,f,()=>f(n.currentUser)),r6(n,m=>f(m))}}const o=$_("auth");return o&&UA(n,`http://${o}`),n}function g3(){return document.getElementsByTagName("head")?.[0]??document}IA({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const c=Gn("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",g3().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h3("Browser");var wv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,Y2;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,A){function R(){}R.prototype=A.prototype,V.D=A.prototype,V.prototype=new R,V.prototype.constructor=V,V.C=function(O,N,k){for(var I=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)I[rt-2]=arguments[rt];return A.prototype[N].apply(O,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,A,R){R||(R=0);var O=Array(16);if(typeof A=="string")for(var N=0;16>N;++N)O[N]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(N=0;16>N;++N)O[N]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=V.g[0],R=V.g[1],N=V.g[2];var k=V.g[3],I=A+(k^R&(N^k))+O[0]+3614090360&4294967295;A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[1]+3905402710&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[2]+606105819&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[3]+3250441966&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(k^R&(N^k))+O[4]+4118548399&4294967295,A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[5]+1200080426&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[6]+2821735955&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[7]+4249261313&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(k^R&(N^k))+O[8]+1770035416&4294967295,A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[9]+2336552879&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[10]+4294925233&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[11]+2304563134&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(k^R&(N^k))+O[12]+1804603682&4294967295,A=R+(I<<7&4294967295|I>>>25),I=k+(N^A&(R^N))+O[13]+4254626195&4294967295,k=A+(I<<12&4294967295|I>>>20),I=N+(R^k&(A^R))+O[14]+2792965006&4294967295,N=k+(I<<17&4294967295|I>>>15),I=R+(A^N&(k^A))+O[15]+1236535329&4294967295,R=N+(I<<22&4294967295|I>>>10),I=A+(N^k&(R^N))+O[1]+4129170786&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[6]+3225465664&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[11]+643717713&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[0]+3921069994&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(N^k&(R^N))+O[5]+3593408605&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[10]+38016083&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[15]+3634488961&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[4]+3889429448&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(N^k&(R^N))+O[9]+568446438&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[14]+3275163606&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[3]+4107603335&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[8]+1163531501&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(N^k&(R^N))+O[13]+2850285829&4294967295,A=R+(I<<5&4294967295|I>>>27),I=k+(R^N&(A^R))+O[2]+4243563512&4294967295,k=A+(I<<9&4294967295|I>>>23),I=N+(A^R&(k^A))+O[7]+1735328473&4294967295,N=k+(I<<14&4294967295|I>>>18),I=R+(k^A&(N^k))+O[12]+2368359562&4294967295,R=N+(I<<20&4294967295|I>>>12),I=A+(R^N^k)+O[5]+4294588738&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[8]+2272392833&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[11]+1839030562&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[14]+4259657740&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(R^N^k)+O[1]+2763975236&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[4]+1272893353&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[7]+4139469664&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[10]+3200236656&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(R^N^k)+O[13]+681279174&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[0]+3936430074&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[3]+3572445317&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[6]+76029189&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(R^N^k)+O[9]+3654602809&4294967295,A=R+(I<<4&4294967295|I>>>28),I=k+(A^R^N)+O[12]+3873151461&4294967295,k=A+(I<<11&4294967295|I>>>21),I=N+(k^A^R)+O[15]+530742520&4294967295,N=k+(I<<16&4294967295|I>>>16),I=R+(N^k^A)+O[2]+3299628645&4294967295,R=N+(I<<23&4294967295|I>>>9),I=A+(N^(R|~k))+O[0]+4096336452&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[7]+1126891415&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[14]+2878612391&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[5]+4237533241&4294967295,R=N+(I<<21&4294967295|I>>>11),I=A+(N^(R|~k))+O[12]+1700485571&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[3]+2399980690&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[10]+4293915773&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[1]+2240044497&4294967295,R=N+(I<<21&4294967295|I>>>11),I=A+(N^(R|~k))+O[8]+1873313359&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[15]+4264355552&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[6]+2734768916&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[13]+1309151649&4294967295,R=N+(I<<21&4294967295|I>>>11),I=A+(N^(R|~k))+O[4]+4149444226&4294967295,A=R+(I<<6&4294967295|I>>>26),I=k+(R^(A|~N))+O[11]+3174756917&4294967295,k=A+(I<<10&4294967295|I>>>22),I=N+(A^(k|~R))+O[2]+718787259&4294967295,N=k+(I<<15&4294967295|I>>>17),I=R+(k^(N|~A))+O[9]+3951481745&4294967295,V.g[0]=V.g[0]+A&4294967295,V.g[1]=V.g[1]+(N+(I<<21&4294967295|I>>>11))&4294967295,V.g[2]=V.g[2]+N&4294967295,V.g[3]=V.g[3]+k&4294967295}s.prototype.u=function(V,A){A===void 0&&(A=V.length);for(var R=A-this.blockSize,O=this.B,N=this.h,k=0;k<A;){if(N==0)for(;k<=R;)o(this,V,k),k+=this.blockSize;if(typeof V=="string"){for(;k<A;)if(O[N++]=V.charCodeAt(k++),N==this.blockSize){o(this,O),N=0;break}}else for(;k<A;)if(O[N++]=V[k++],N==this.blockSize){o(this,O),N=0;break}}this.h=N,this.o+=A},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var A=1;A<V.length-8;++A)V[A]=0;var R=8*this.o;for(A=V.length-8;A<V.length;++A)V[A]=R&255,R/=256;for(this.u(V),V=Array(16),A=R=0;4>A;++A)for(var O=0;32>O;O+=8)V[R++]=this.g[A]>>>O&255;return V};function c(V,A){var R=m;return Object.prototype.hasOwnProperty.call(R,V)?R[V]:R[V]=A(V)}function f(V,A){this.h=A;for(var R=[],O=!0,N=V.length-1;0<=N;N--){var k=V[N]|0;O&&k==A||(R[N]=k,O=!1)}this.g=R}var m={};function p(V){return-128<=V&&128>V?c(V,function(A){return new f([A|0],0>A?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return x;if(0>V)return H(y(-V));for(var A=[],R=1,O=0;V>=R;O++)A[O]=V/R|0,R*=4294967296;return new f(A,0)}function b(V,A){if(V.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V.charAt(0)=="-")return H(b(V.substring(1),A));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(A,8)),O=x,N=0;N<V.length;N+=8){var k=Math.min(8,V.length-N),I=parseInt(V.substring(N,N+k),A);8>k?(k=y(Math.pow(A,k)),O=O.j(k).add(y(I))):(O=O.j(R),O=O.add(y(I)))}return O}var x=p(0),S=p(1),D=p(16777216);r=f.prototype,r.m=function(){if(z(this))return-H(this).m();for(var V=0,A=1,R=0;R<this.g.length;R++){var O=this.i(R);V+=(0<=O?O:4294967296+O)*A,A*=4294967296}return V},r.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(j(this))return"0";if(z(this))return"-"+H(this).toString(V);for(var A=y(Math.pow(V,6)),R=this,O="";;){var N=ce(R,A).g;R=$(R,N.j(A));var k=((0<R.g.length?R.g[0]:R.h)>>>0).toString(V);if(R=N,j(R))return k+O;for(;6>k.length;)k="0"+k;O=k+O}},r.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function j(V){if(V.h!=0)return!1;for(var A=0;A<V.g.length;A++)if(V.g[A]!=0)return!1;return!0}function z(V){return V.h==-1}r.l=function(V){return V=$(this,V),z(V)?-1:j(V)?0:1};function H(V){for(var A=V.g.length,R=[],O=0;O<A;O++)R[O]=~V.g[O];return new f(R,~V.h).add(S)}r.abs=function(){return z(this)?H(this):this},r.add=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0,N=0;N<=A;N++){var k=O+(this.i(N)&65535)+(V.i(N)&65535),I=(k>>>16)+(this.i(N)>>>16)+(V.i(N)>>>16);O=I>>>16,k&=65535,I&=65535,R[N]=I<<16|k}return new f(R,R[R.length-1]&-2147483648?-1:0)};function $(V,A){return V.add(H(A))}r.j=function(V){if(j(this)||j(V))return x;if(z(this))return z(V)?H(this).j(H(V)):H(H(this).j(V));if(z(V))return H(this.j(H(V)));if(0>this.l(D)&&0>V.l(D))return y(this.m()*V.m());for(var A=this.g.length+V.g.length,R=[],O=0;O<2*A;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var N=0;N<V.g.length;N++){var k=this.i(O)>>>16,I=this.i(O)&65535,rt=V.i(N)>>>16,Be=V.i(N)&65535;R[2*O+2*N]+=I*Be,ie(R,2*O+2*N),R[2*O+2*N+1]+=k*Be,ie(R,2*O+2*N+1),R[2*O+2*N+1]+=I*rt,ie(R,2*O+2*N+1),R[2*O+2*N+2]+=k*rt,ie(R,2*O+2*N+2)}for(O=0;O<A;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=A;O<2*A;O++)R[O]=0;return new f(R,0)};function ie(V,A){for(;(V[A]&65535)!=V[A];)V[A+1]+=V[A]>>>16,V[A]&=65535,A++}function ne(V,A){this.g=V,this.h=A}function ce(V,A){if(j(A))throw Error("division by zero");if(j(V))return new ne(x,x);if(z(V))return A=ce(H(V),A),new ne(H(A.g),H(A.h));if(z(A))return A=ce(V,H(A)),new ne(H(A.g),A.h);if(30<V.g.length){if(z(V)||z(A))throw Error("slowDivide_ only works with positive integers.");for(var R=S,O=A;0>=O.l(V);)R=oe(R),O=oe(O);var N=pe(R,1),k=pe(O,1);for(O=pe(O,2),R=pe(R,2);!j(O);){var I=k.add(O);0>=I.l(V)&&(N=N.add(R),k=I),O=pe(O,1),R=pe(R,1)}return A=$(V,N.j(A)),new ne(N,A)}for(N=x;0<=V.l(A);){for(R=Math.max(1,Math.floor(V.m()/A.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),k=y(R),I=k.j(A);z(I)||0<I.l(V);)R-=O,k=y(R),I=k.j(A);j(k)&&(k=S),N=N.add(k),V=$(V,I)}return new ne(N,V)}r.A=function(V){return ce(this,V).h},r.and=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0;O<A;O++)R[O]=this.i(O)&V.i(O);return new f(R,this.h&V.h)},r.or=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0;O<A;O++)R[O]=this.i(O)|V.i(O);return new f(R,this.h|V.h)},r.xor=function(V){for(var A=Math.max(this.g.length,V.g.length),R=[],O=0;O<A;O++)R[O]=this.i(O)^V.i(O);return new f(R,this.h^V.h)};function oe(V){for(var A=V.g.length+1,R=[],O=0;O<A;O++)R[O]=V.i(O)<<1|V.i(O-1)>>>31;return new f(R,V.h)}function pe(V,A){var R=A>>5;A%=32;for(var O=V.g.length-R,N=[],k=0;k<O;k++)N[k]=0<A?V.i(k+R)>>>A|V.i(k+R+1)<<32-A:V.i(k+R);return new f(N,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Y2=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=b,$r=f}).apply(typeof wv<"u"?wv:typeof self<"u"?self:typeof window<"u"?window:{});var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var K2,ql,Q2,fh,$m,$2,X2,W2;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,v,_){return u==Array.prototype||u==Object.prototype||(u[v]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ju=="object"&&Ju];for(var v=0;v<u.length;++v){var _=u[v];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(u,v){if(v)e:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var B=u[w];if(!(B in _))break e;_=_[B]}u=u[u.length-1],w=_[u],v=v(w),v!=w&&v!=null&&e(_,u,{configurable:!0,writable:!0,value:v})}}function c(u,v){u instanceof String&&(u+="");var _=0,w=!1,B={next:function(){if(!w&&_<u.length){var K=_++;return{value:v(K,u[K]),done:!1}}return w=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(u){return u||function(){return c(this,function(v,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(u){var v=typeof u;return v=v!="object"?v:u?Array.isArray(u)?"array":v:"null",v=="array"||v=="object"&&typeof u.length=="number"}function y(u){var v=typeof u;return v=="object"&&u!=null||v=="function"}function b(u,v,_){return u.call.apply(u.bind,arguments)}function x(u,v,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,w),u.apply(v,B)}}return function(){return u.apply(v,arguments)}}function S(u,v,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:x,S.apply(null,arguments)}function D(u,v){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function j(u,v){function _(){}_.prototype=v.prototype,u.aa=v.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,B,K){for(var ae=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ae[Ve-2]=arguments[Ve];return v.prototype[B].apply(w,ae)}}function z(u){const v=u.length;if(0<v){const _=Array(v);for(let w=0;w<v;w++)_[w]=u[w];return _}return[]}function H(u,v){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const B=u.length||0,K=w.length||0;u.length=B+K;for(let ae=0;ae<K;ae++)u[B+ae]=w[ae]}else u.push(w)}}class ${constructor(v,_){this.i=v,this.j=_,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function ie(u){return/^[\s\xa0]*$/.test(u)}function ne(){var u=m.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var oe=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function pe(u,v,_){for(const w in u)v.call(_,u[w],w,u)}function V(u,v){for(const _ in u)v.call(void 0,u[_],_,u)}function A(u){const v={};for(const _ in u)v[_]=u[_];return v}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(u,v){let _,w;for(let B=1;B<arguments.length;B++){w=arguments[B];for(_ in w)u[_]=w[_];for(let K=0;K<R.length;K++)_=R[K],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function N(u){var v=1;u=u.split(":");const _=[];for(;0<v&&u.length;)_.push(u.shift()),v--;return u.length&&_.push(u.join(":")),_}function k(u){m.setTimeout(()=>{throw u},0)}function I(){var u=Oe;let v=null;return u.g&&(v=u.g,u.g=u.g.next,u.g||(u.h=null),v.next=null),v}class rt{constructor(){this.h=this.g=null}add(v,_){const w=Be.get();w.set(v,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Be=new $(()=>new Q,u=>u.reset());class Q{constructor(){this.next=this.g=this.h=null}set(v,_){this.h=v,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let se,de=!1,Oe=new rt,M=()=>{const u=m.Promise.resolve(void 0);se=()=>{u.then(te)}};var te=()=>{for(var u;u=I();){try{u.h.call(u.g)}catch(_){k(_)}var v=Be;v.j(u),100>v.h&&(v.h++,u.next=v.g,v.g=u)}de=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(u,v){this.type=u,this.g=this.target=v,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ye=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var u=!1,v=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};m.addEventListener("test",_,v),m.removeEventListener("test",_,v)}catch{}return u})();function Ce(u,v){if(re.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=v,v=u.relatedTarget){if(oe){e:{try{ce(v.nodeName);var B=!0;break e}catch{}B=!1}B||(v=null)}}else _=="mouseover"?v=u.fromElement:_=="mouseout"&&(v=u.toElement);this.relatedTarget=v,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:we[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}j(Ce,re);var we={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ot="closure_listenable_"+(1e6*Math.random()|0),et=0;function Zn(u,v,_,w,B){this.listener=u,this.proxy=null,this.src=v,this.type=_,this.capture=!!w,this.ha=B,this.key=++et,this.da=this.fa=!1}function hr(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ai(u){this.src=u,this.g={},this.h=0}Ai.prototype.add=function(u,v,_,w,B){var K=u.toString();u=this.g[K],u||(u=this.g[K]=[],this.h++);var ae=os(u,v,w,B);return-1<ae?(v=u[ae],_||(v.fa=!1)):(v=new Zn(v,this.src,K,!!w,B),v.fa=_,u.push(v)),v};function as(u,v){var _=v.type;if(_ in u.g){var w=u.g[_],B=Array.prototype.indexOf.call(w,v,void 0),K;(K=0<=B)&&Array.prototype.splice.call(w,B,1),K&&(hr(v),u.g[_].length==0&&(delete u.g[_],u.h--))}}function os(u,v,_,w){for(var B=0;B<u.length;++B){var K=u[B];if(!K.da&&K.listener==v&&K.capture==!!_&&K.ha==w)return B}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),Io={};function Rc(u,v,_,w,B){if(Array.isArray(v)){for(var K=0;K<v.length;K++)Rc(u,v[K],_,w,B);return null}return _=Cc(_),u&&u[Ot]?u.K(v,_,y(w)?!!w.capture:!1,B):Tn(u,v,_,!1,w,B)}function Tn(u,v,_,w,B,K){if(!v)throw Error("Invalid event type");var ae=y(B)?!!B.capture:!!B,Ve=la(u);if(Ve||(u[ls]=Ve=new Ai(u)),_=Ve.add(v,_,w,ae,K),_.proxy)return _;if(w=vf(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)ye||(B=ae),B===void 0&&(B=!1),u.addEventListener(v.toString(),w,B);else if(u.attachEvent)u.attachEvent(cs(v.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function vf(){function u(_){return v.call(u.src,u.listener,_)}const v=_f;return u}function No(u,v,_,w,B){if(Array.isArray(v))for(var K=0;K<v.length;K++)No(u,v[K],_,w,B);else w=y(w)?!!w.capture:!!w,_=Cc(_),u&&u[Ot]?(u=u.i,v=String(v).toString(),v in u.g&&(K=u.g[v],_=os(K,_,w,B),-1<_&&(hr(K[_]),Array.prototype.splice.call(K,_,1),K.length==0&&(delete u.g[v],u.h--)))):u&&(u=la(u))&&(v=u.g[v.toString()],u=-1,v&&(u=os(v,_,w,B)),(_=-1<u?v[u]:null)&&oa(_))}function oa(u){if(typeof u!="number"&&u&&!u.da){var v=u.src;if(v&&v[Ot])as(v.i,u);else{var _=u.type,w=u.proxy;v.removeEventListener?v.removeEventListener(_,w,u.capture):v.detachEvent?v.detachEvent(cs(_),w):v.addListener&&v.removeListener&&v.removeListener(w),(_=la(v))?(as(_,u),_.h==0&&(_.src=null,v[ls]=null)):hr(u)}}}function cs(u){return u in Io?Io[u]:Io[u]="on"+u}function _f(u,v){if(u.da)u=!0;else{v=new Ce(v,this);var _=u.listener,w=u.ha||u.src;u.fa&&oa(u),u=_.call(w,v)}return u}function la(u){return u=u[ls],u instanceof Ai?u:null}var Do="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cc(u){return typeof u=="function"?u:(u[Do]||(u[Do]=function(v){return u.handleEvent(v)}),u[Do])}function ut(){le.call(this),this.i=new Ai(this),this.M=this,this.F=null}j(ut,le),ut.prototype[Ot]=!0,ut.prototype.removeEventListener=function(u,v,_,w){No(this,u,v,_,w)};function Ge(u,v){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=v.type||v,typeof v=="string")v=new re(v,u);else if(v instanceof re)v.target=v.target||u;else{var B=v;v=new re(w,u),O(v,B)}if(B=!0,_)for(var K=_.length-1;0<=K;K--){var ae=v.g=_[K];B=hn(ae,w,!0,v)&&B}if(ae=v.g=u,B=hn(ae,w,!0,v)&&B,B=hn(ae,w,!1,v)&&B,_)for(K=0;K<_.length;K++)ae=v.g=_[K],B=hn(ae,w,!1,v)&&B}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,v;for(v in u.g){for(var _=u.g[v],w=0;w<_.length;w++)hr(_[w]);delete u.g[v],u.h--}}this.F=null},ut.prototype.K=function(u,v,_,w){return this.i.add(String(u),v,!1,_,w)},ut.prototype.L=function(u,v,_,w){return this.i.add(String(u),v,!0,_,w)};function hn(u,v,_,w){if(v=u.i.g[String(v)],!v)return!0;v=v.concat();for(var B=!0,K=0;K<v.length;++K){var ae=v[K];if(ae&&!ae.da&&ae.capture==_){var Ve=ae.listener,At=ae.ha||ae.src;ae.fa&&as(u.i,ae),B=Ve.call(At,w)!==!1&&B}}return B&&!w.defaultPrevented}function Kt(u,v,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:m.setTimeout(u,v||0)}function Ic(u){u.g=Kt(()=>{u.g=null,u.i&&(u.i=!1,Ic(u))},u.l);const v=u.h;u.h=null,u.m.apply(null,v)}class Ef extends le{constructor(v,_){super(),this.m=v,this.l=_,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:Ic(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(u){le.call(this),this.h=u,this.g={}}j(us,le);var hs=[];function fs(u){pe(u.g,function(v,_){this.g.hasOwnProperty(_)&&oa(v)},u),u.g={}}us.prototype.N=function(){us.aa.N.call(this),fs(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ln=m.JSON.stringify,ca=m.JSON.parse,ds=class{stringify(u){return m.JSON.stringify(u,void 0)}parse(u){return m.JSON.parse(u,void 0)}};function Oo(){}Oo.prototype.h=null;function Mo(u){return u.h||(u.h=u.i())}function ko(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ci(){re.call(this,"d")}j(Ci,re);function Po(){re.call(this,"c")}j(Po,re);var Jn={},Vo=null;function fr(){return Vo=Vo||new ut}Jn.La="serverreachability";function ua(u){re.call(this,Jn.La,u)}j(ua,re);function dr(u){const v=fr();Ge(v,new ua(v))}Jn.STAT_EVENT="statevent";function Nc(u,v){re.call(this,Jn.STAT_EVENT,u),this.stat=v}j(Nc,re);function st(u){const v=fr();Ge(v,new Nc(v,u))}Jn.Ma="timingevent";function xt(u,v){re.call(this,Jn.Ma,u),this.size=v}j(xt,re);function vt(u,v){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){u()},v)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function jo(u,v,_,w,B,K){u.info(function(){if(u.g)if(K)for(var ae="",Ve=K.split("&"),At=0;At<Ve.length;At++){var je=Ve[At].split("=");if(1<je.length){var kt=je[0];je=je[1];var Rt=kt.split("_");ae=2<=Rt.length&&Rt[1]=="type"?ae+(kt+"="+je+"&"):ae+(kt+"=redacted&")}}else ae=null;else ae=K;return"XMLHTTP REQ ("+w+") [attempt "+B+"]: "+v+`
`+_+`
`+ae})}function bf(u,v,_,w,B,K,ae){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+B+"]: "+v+`
`+_+`
`+K+" "+ae})}function mr(u,v,_,w){u.info(function(){return"XMLHTTP TEXT ("+v+"): "+ms(u,_)+(w?" "+w:"")})}function Dc(u,v){u.info(function(){return"TIMEOUT: "+v})}wn.prototype.info=function(){};function ms(u,v){if(!u.g)return v;if(!v)return null;try{var _=JSON.parse(v);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var B=w[1];if(Array.isArray(B)&&!(1>B.length)){var K=B[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ae=1;ae<B.length;ae++)B[ae]=""}}}}return Ln(_)}catch{return v}}var pr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ii={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ei;function ti(){}j(ti,Oo),ti.prototype.g=function(){return new XMLHttpRequest},ti.prototype.i=function(){return{}},ei=new ti;function en(u,v,_,w){this.j=u,this.i=v,this.l=_,this.R=w||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mt}function mt(){this.i=null,this.g="",this.h=!1}var Lo={},ha={};function Un(u,v,_){u.L=1,u.v=_s(fn(v)),u.m=_,u.P=!0,Ni(u,null)}function Ni(u,v){u.F=Date.now(),ps(u),u.A=fn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Ho(_.i,"t",w),u.C=0,_=u.j.J,u.h=new mt,u.g=Kc(u.j,_?v:null,!u.m),0<u.O&&(u.M=new Ef(S(u.Y,u,u.g),u.O)),v=u.U,_=u.g,w=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(hs[0]=B.toString()),B=hs);for(var K=0;K<B.length;K++){var ae=Rc(_,B[K],w||v.handleEvent,!1,v.h||v);if(!ae)break;v.g[ae.key]=ae}v=u.H?A(u.H):{},u.m?(u.u||(u.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,v)):(u.u="GET",u.g.ea(u.A,u.u,null,v)),dr(),jo(u.i,u.u,u.A,u.l,u.R,u.m)}en.prototype.ca=function(u){u=u.target;const v=this.M;v&&Rn(u)==3?v.j():this.Y(u)},en.prototype.Y=function(u){try{if(u==this.g)e:{const Rt=Rn(this.g);var v=this.g.Ba();const Li=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Uc(this.g)))){this.J||Rt!=4||v==7||(v==8||0>=Li?dr(3):dr(2)),gr(this);var _=this.g.Z();this.X=_;t:if(Oc(this)){var w=Uc(this.g);u="";var B=w.length,K=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),ni(this);var ae="";break t}this.h.i=new m.TextDecoder}for(v=0;v<B;v++)this.h.h=!0,u+=this.h.i.decode(w[v],{stream:!(K&&v==B-1)});w.length=0,this.h.g+=u,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=_==200,bf(this.i,this.u,this.A,this.l,this.R,Rt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,At=this.g;if((Ve=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Ve)){var je=Ve;break t}}je=null}if(_=je)mr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gs(this,_);else{this.o=!1,this.s=3,st(12),Ut(this),ni(this);break e}}if(this.P){_=!0;let zt;for(;!this.J&&this.C<ae.length;)if(zt=Mc(this,ae),zt==ha){Rt==4&&(this.s=4,st(14),_=!1),mr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Lo){this.s=4,st(15),mr(this.i,this.l,ae,"[Invalid Chunk]"),_=!1;break}else mr(this.i,this.l,zt,null),gs(this,zt);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||ae.length!=0||this.h.h||(this.s=1,st(16),_=!1),this.o=this.o&&_,!_)mr(this.i,this.l,ae,"[Invalid Chunked Response]"),Ut(this),ni(this);else if(0<ae.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Rs(kt),kt.M=!0,st(11))}}else mr(this.i,this.l,ae,null),gs(this,ae);Rt==4&&Ut(this),this.o&&!this.J&&(Rt==4?Hc(this.j,this):(this.o=!1,ps(this)))}else Af(this.g),_==400&&0<ae.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Ut(this),ni(this)}}}catch{}finally{}};function Oc(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Mc(u,v){var _=u.C,w=v.indexOf(`
`,_);return w==-1?ha:(_=Number(v.substring(_,w)),isNaN(_)?Lo:(w+=1,w+_>v.length?ha:(v=v.slice(w,w+_),u.C=w+_,v)))}en.prototype.cancel=function(){this.J=!0,Ut(this)};function ps(u){u.S=Date.now()+u.I,kc(u,u.I)}function kc(u,v){if(u.B!=null)throw Error("WatchDog timer not null");u.B=vt(S(u.ba,u),v)}function gr(u){u.B&&(m.clearTimeout(u.B),u.B=null)}en.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Dc(this.i,this.A),this.L!=2&&(dr(),st(17)),Ut(this),this.s=2,ni(this)):kc(this,this.S-u)};function ni(u){u.j.G==0||u.J||Hc(u.j,u)}function Ut(u){gr(u);var v=u.M;v&&typeof v.ma=="function"&&v.ma(),u.M=null,fs(u.U),u.g&&(v=u.g,u.g=null,v.abort(),v.ma())}function gs(u,v){try{var _=u.j;if(_.G!=0&&(_.g==u||Uo(_.h,u))){if(!u.K&&Uo(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(v)}catch{w=null}if(Array.isArray(w)&&w.length==3){var B=w;if(B[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)wa(_),ba(_);else break e;$o(_),st(18)}}else _.za=B[1],0<_.za-_.T&&37500>B[2]&&_.F&&_.v==0&&!_.C&&(_.C=vt(S(_.Za,_),6e3));if(1>=da(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else ji(_,11)}else if((u.K||_.g==u)&&wa(_),!ie(v))for(B=_.Da.g.parse(v),v=0;v<B.length;v++){let je=B[v];if(_.T=je[0],je=je[1],_.G==2)if(je[0]=="c"){_.K=je[1],_.ia=je[2];const kt=je[3];kt!=null&&(_.la=kt,_.j.info("VER="+_.la));const Rt=je[4];Rt!=null&&(_.Aa=Rt,_.j.info("SVER="+_.Aa));const Li=je[5];Li!=null&&typeof Li=="number"&&0<Li&&(w=1.5*Li,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const zt=u.g;if(zt){const ci=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ci){var K=w.h;K.g||ci.indexOf("spdy")==-1&&ci.indexOf("quic")==-1&&ci.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(ma(K,K.h),K.h=null))}if(w.D){const Wo=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wo&&(w.ya=Wo,Qe(w.I,w.D,Wo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ae=u;if(w.qa=Yc(w,w.J?w.ia:null,w.W),ae.K){tn(w.h,ae);var Ve=ae,At=w.L;At&&(Ve.I=At),Ve.B&&(gr(Ve),ps(Ve)),w.g=ae}else qc(w);0<_.i.length&&Ta(_)}else je[0]!="stop"&&je[0]!="close"||ji(_,7);else _.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?ji(_,7):Ko(_):je[0]!="noop"&&_.l&&_.l.ta(je),_.v=0)}}dr(4)}catch{}}var Pc=class{constructor(u,v){this.g=u,this.map=v}};function Di(u){this.l=u||10,m.PerformanceNavigationTiming?(u=m.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function da(u){return u.h?1:u.g?u.g.size:0}function Uo(u,v){return u.h?u.h==v:u.g?u.g.has(v):!1}function ma(u,v){u.g?u.g.add(v):u.h=v}function tn(u,v){u.h&&u.h==v?u.h=null:u.g&&u.g.has(v)&&u.g.delete(v)}Di.prototype.cancel=function(){if(this.i=zo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function zo(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let v=u.i;for(const _ of u.g.values())v=v.concat(_.D);return v}return z(u.i)}function Tf(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var v=[],_=u.length,w=0;w<_;w++)v.push(u[w]);return v}v=[],_=0;for(w in u)v[_++]=u[w];return v}function pa(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var v=[];u=u.length;for(var _=0;_<u;_++)v.push(_);return v}v=[],_=0;for(const w in u)v[_++]=w;return v}}}function Bo(u,v){if(u.forEach&&typeof u.forEach=="function")u.forEach(v,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,v,void 0);else for(var _=pa(u),w=Tf(u),B=w.length,K=0;K<B;K++)v.call(void 0,w[K],_&&_[K],u)}var ys=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wf(u,v){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),B=null;if(0<=w){var K=u[_].substring(0,w);B=u[_].substring(w+1)}else K=u[_];v(K,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function _t(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _t){this.h=u.h,vs(this,u.j),this.o=u.o,this.g=u.g,yr(this,u.s),this.l=u.l;var v=u.i,_=new Mi;_.i=v.i,v.g&&(_.g=new Map(v.g),_.h=v.h),Oi(this,_),this.m=u.m}else u&&(v=String(u).match(ys))?(this.h=!1,vs(this,v[1]||"",!0),this.o=Sn(v[2]||""),this.g=Sn(v[3]||"",!0),yr(this,v[4]),this.l=Sn(v[5]||"",!0),Oi(this,v[6]||"",!0),this.m=Sn(v[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}_t.prototype.toString=function(){var u=[],v=this.j;v&&u.push(Es(v,qo,!0),":");var _=this.g;return(_||v=="file")&&(u.push("//"),(v=this.o)&&u.push(Es(v,qo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Es(_,_.charAt(0)=="/"?Sf:Fo,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Es(_,ga)),u.join("")};function fn(u){return new _t(u)}function vs(u,v,_){u.j=_?Sn(v,!0):v,u.j&&(u.j=u.j.replace(/:$/,""))}function yr(u,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);u.s=v}else u.s=null}function Oi(u,v,_){v instanceof Mi?(u.i=v,jc(u.i,u.h)):(_||(v=Es(v,xf)),u.i=new Mi(v,u.h))}function Qe(u,v,_){u.i.set(v,_)}function _s(u){return Qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Sn(u,v){return u?v?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Es(u,v,_){return typeof u=="string"?(u=encodeURI(u).replace(v,Vc),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Vc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var qo=/[#\/\?@]/g,Fo=/[#\?:]/g,Sf=/[#\?]/g,xf=/[#\?@]/g,ga=/#/g;function Mi(u,v){this.h=this.g=null,this.i=u||null,this.j=!!v}function xn(u){u.g||(u.g=new Map,u.h=0,u.i&&wf(u.i,function(v,_){u.add(decodeURIComponent(v.replace(/\+/g," ")),_)}))}r=Mi.prototype,r.add=function(u,v){xn(this),this.i=null,u=ii(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(v),this.h+=1,this};function ki(u,v){xn(u),v=ii(u,v),u.g.has(v)&&(u.i=null,u.h-=u.g.get(v).length,u.g.delete(v))}function Pi(u,v){return xn(u),v=ii(u,v),u.g.has(v)}r.forEach=function(u,v){xn(this),this.g.forEach(function(_,w){_.forEach(function(B){u.call(v,B,w,this)},this)},this)},r.na=function(){xn(this);const u=Array.from(this.g.values()),v=Array.from(this.g.keys()),_=[];for(let w=0;w<v.length;w++){const B=u[w];for(let K=0;K<B.length;K++)_.push(v[w])}return _},r.V=function(u){xn(this);let v=[];if(typeof u=="string")Pi(this,u)&&(v=v.concat(this.g.get(ii(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)v=v.concat(u[_])}return v},r.set=function(u,v){return xn(this),this.i=null,u=ii(this,u),Pi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[v]),this.h+=1,this},r.get=function(u,v){return u?(u=this.V(u),0<u.length?String(u[0]):v):v};function Ho(u,v,_){ki(u,v),0<_.length&&(u.i=null,u.g.set(ii(u,v),z(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],v=Array.from(this.g.keys());for(var _=0;_<v.length;_++){var w=v[_];const K=encodeURIComponent(String(w)),ae=this.V(w);for(w=0;w<ae.length;w++){var B=K;ae[w]!==""&&(B+="="+encodeURIComponent(String(ae[w]))),u.push(B)}}return this.i=u.join("&")};function ii(u,v){return v=String(v),u.j&&(v=v.toLowerCase()),v}function jc(u,v){v&&!u.j&&(xn(u),u.i=null,u.g.forEach(function(_,w){var B=w.toLowerCase();w!=B&&(ki(this,w),Ho(this,B,_))},u)),u.j=v}function bs(u,v){const _=new wn;if(m.Image){const w=new Image;w.onload=D(An,_,"TestLoadImage: loaded",!0,v,w),w.onerror=D(An,_,"TestLoadImage: error",!1,v,w),w.onabort=D(An,_,"TestLoadImage: abort",!1,v,w),w.ontimeout=D(An,_,"TestLoadImage: timeout",!1,v,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else v(!1)}function zn(u,v){const _=new wn,w=new AbortController,B=setTimeout(()=>{w.abort(),An(_,"TestPingServer: timeout",!1,v)},1e4);fetch(u,{signal:w.signal}).then(K=>{clearTimeout(B),K.ok?An(_,"TestPingServer: ok",!0,v):An(_,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(B),An(_,"TestPingServer: error",!1,v)})}function An(u,v,_,w,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),w(_)}catch{}}function Ts(){this.g=new ds}function ri(u,v,_){const w=_||"";try{Bo(u,function(B,K){let ae=B;y(B)&&(ae=Ln(B)),v.push(w+K+"="+encodeURIComponent(ae))})}catch(B){throw v.push(w+"type="+encodeURIComponent("_badmap")),B}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}j(vr,Oo),vr.prototype.g=function(){return new Vi(this.l,this.j)},vr.prototype.i=(function(u){return function(){return u}})({});function Vi(u,v){ut.call(this),this.D=u,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Vi,ut),r=Vi.prototype,r.open=function(u,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=v,this.readyState=1,ai(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(v.body=u),(this.D||m).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Go(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Go(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var v=u.value?u.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!u.done}))&&(this.response=this.responseText+=v)}u.done?si(this):ai(this),this.readyState==3&&Go(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,si(this))},r.Qa=function(u){this.g&&(this.response=u,si(this))},r.ga=function(){this.g&&si(this)};function si(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ai(u)}r.setRequestHeader=function(u,v){this.u.append(u,v)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],v=this.h.entries();for(var _=v.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=v.next();return u.join(`\r
`)};function ai(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Vi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Yo(u){let v="";return pe(u,function(_,w){v+=w,v+=":",v+=_,v+=`\r
`}),v}function Mt(u,v,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Yo(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Qe(u,v,_))}function Fe(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Fe,ut);var ya=/^https?$/i,ws=["POST","PUT"];r=Fe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,v,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);v=v?v.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ei.g(),this.v=this.o?Mo(this.o):Mo(ei),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(v,String(u),!0),this.B=!1}catch(K){Lc(this,K);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var B in w)_.set(B,w[B]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const K of w.keys())_.set(K,w.get(K));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(K=>K.toLowerCase()=="content-type"),B=m.FormData&&u instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ws,v,void 0))||w||B||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ae]of _)this.g.setRequestHeader(K,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(u),this.u=!1}catch(K){Lc(this,K)}};function Lc(u,v){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=v,u.m=5,va(u),oi(u)}function va(u){u.A||(u.A=!0,Ge(u,"complete"),Ge(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ge(this,"complete"),Ge(this,"abort"),oi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),oi(this,!0)),Fe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},r.bb=function(){_a(this)};function _a(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Rn(u)!=4||u.Z()!=2)){if(u.u&&Rn(u)==4)Kt(u.Ea,0,u);else if(Ge(u,"readystatechange"),Rn(u)==4){u.h=!1;try{const ae=u.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break e;default:v=!1}var _;if(!(_=v)){var w;if(w=ae===0){var B=String(u.D).match(ys)[1]||null;!B&&m.self&&m.self.location&&(B=m.self.location.protocol.slice(0,-1)),w=!ya.test(B?B.toLowerCase():"")}_=w}if(_)Ge(u,"complete"),Ge(u,"success");else{u.m=6;try{var K=2<Rn(u)?u.g.statusText:""}catch{K=""}u.l=K+" ["+u.Z()+"]",va(u)}}finally{oi(u)}}}}function oi(u,v){if(u.g){Ss(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,v||Ge(u,"ready");try{_.onreadystatechange=w}catch{}}}function Ss(u){u.I&&(m.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Rn(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var v=this.g.responseText;return u&&v.indexOf(u)==0&&(v=v.substring(u.length)),ca(v)}};function Uc(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Af(u){const v={};u=(u.g&&2<=Rn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ie(u[w]))continue;var _=N(u[w]);const B=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const K=v[B]||[];v[B]=K,K.push(_)}V(v,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(u,v,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||v}function Ea(u){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,u),this.cb=xs("retryDelaySeedMs",1e4,u),this.Wa=xs("forwardChannelMaxRetries",2,u),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(u&&u.concurrentRequestLimit),this.Da=new Ts,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ea.prototype,r.la=8,r.G=1,r.connect=function(u,v,_,w){st(0),this.W=u,this.H=v||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Yc(this,null,this.W),Ta(this)};function Ko(u){if(zc(u),u.G==3){var v=u.U++,_=fn(u.I);if(Qe(_,"SID",u.K),Qe(_,"RID",v),Qe(_,"TYPE","terminate"),As(u,_),v=new en(u,u.j,v),v.L=2,v.v=_s(fn(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(v.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=v.v,_=!0),_||(v.g=Kc(v.j,null),v.g.ea(v.v)),v.F=Date.now(),ps(v)}Gc(u)}function ba(u){u.g&&(Rs(u),u.g.cancel(),u.g=null)}function zc(u){ba(u),u.u&&(m.clearTimeout(u.u),u.u=null),wa(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&m.clearTimeout(u.s),u.s=null)}function Ta(u){if(!fa(u.h)&&!u.s){u.s=!0;var v=u.Ga;se||M(),de||(se(),de=!0),Oe.add(v,u),u.B=0}}function Rf(u,v){return da(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=v.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=vt(S(u.Ga,u,v),Xo(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new en(this,this.j,u);let K=this.o;if(this.S&&(K?(K=A(K),O(K,this.S)):K=this.S),this.m!==null||this.O||(B.H=K,K=null),this.P)e:{for(var v=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(v+=w,4096<v){v=_;break e}if(v===4096||_===this.i.length-1){v=_+1;break e}}v=1e3}else v=1e3;v=Bc(this,B,v),_=fn(this.I),Qe(_,"RID",u),Qe(_,"CVER",22),this.D&&Qe(_,"X-HTTP-Session-Id",this.D),As(this,_),K&&(this.O?v="headers="+encodeURIComponent(String(Yo(K)))+"&"+v:this.m&&Mt(_,this.m,K)),ma(this.h,B),this.Ua&&Qe(_,"TYPE","init"),this.P?(Qe(_,"$req",v),Qe(_,"SID","null"),B.T=!0,Un(B,_,null)):Un(B,_,v),this.G=2}}else this.G==3&&(u?Qo(this,u):this.i.length==0||fa(this.h)||Qo(this))};function Qo(u,v){var _;v?_=v.l:_=u.U++;const w=fn(u.I);Qe(w,"SID",u.K),Qe(w,"RID",_),Qe(w,"AID",u.T),As(u,w),u.m&&u.o&&Mt(w,u.m,u.o),_=new en(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),v&&(u.i=v.D.concat(u.i)),v=Bc(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ma(u.h,_),Un(_,w,v)}function As(u,v){u.H&&pe(u.H,function(_,w){Qe(v,w,_)}),u.l&&Bo({},function(_,w){Qe(v,w,_)})}function Bc(u,v,_){_=Math.min(u.i.length,_);var w=u.l?S(u.l.Na,u.l,u):null;e:{var B=u.i;let K=-1;for(;;){const ae=["count="+_];K==-1?0<_?(K=B[0].g,ae.push("ofs="+K)):K=0:ae.push("ofs="+K);let Ve=!0;for(let At=0;At<_;At++){let je=B[At].g;const kt=B[At].map;if(je-=K,0>je)K=Math.max(0,B[At].g-100),Ve=!1;else try{ri(kt,ae,"req"+je+"_")}catch{w&&w(kt)}}if(Ve){w=ae.join("&");break e}}}return u=u.i.splice(0,_),v.D=u,w}function qc(u){if(!u.g&&!u.u){u.Y=1;var v=u.Fa;se||M(),de||(se(),de=!0),Oe.add(v,u),u.v=0}}function $o(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=vt(S(u.Fa,u),Xo(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=vt(S(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),ba(this),Fc(this))};function Rs(u){u.A!=null&&(m.clearTimeout(u.A),u.A=null)}function Fc(u){u.g=new en(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var v=fn(u.qa);Qe(v,"RID","rpc"),Qe(v,"SID",u.K),Qe(v,"AID",u.T),Qe(v,"CI",u.F?"0":"1"),!u.F&&u.ja&&Qe(v,"TO",u.ja),Qe(v,"TYPE","xmlhttp"),As(u,v),u.m&&u.o&&Mt(v,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=_s(fn(v)),_.m=null,_.P=!0,Ni(_,u)}r.Za=function(){this.C!=null&&(this.C=null,ba(this),$o(this),st(19))};function wa(u){u.C!=null&&(m.clearTimeout(u.C),u.C=null)}function Hc(u,v){var _=null;if(u.g==v){wa(u),Rs(u),u.g=null;var w=2}else if(Uo(u.h,v))_=v.D,tn(u.h,v),w=1;else return;if(u.G!=0){if(v.o)if(w==1){_=v.m?v.m.length:0,v=Date.now()-v.F;var B=u.B;w=fr(),Ge(w,new xt(w,_)),Ta(u)}else qc(u);else if(B=v.s,B==3||B==0&&0<v.X||!(w==1&&Rf(u,v)||w==2&&$o(u)))switch(_&&0<_.length&&(v=u.h,v.i=v.i.concat(_)),B){case 1:ji(u,5);break;case 4:ji(u,10);break;case 3:ji(u,6);break;default:ji(u,2)}}}function Xo(u,v){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*v}function ji(u,v){if(u.j.info("Error code "+v),v==2){var _=S(u.fb,u),w=u.Xa;const B=!w;w=new _t(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||vs(w,"https"),_s(w),B?bs(w.toString(),_):zn(w.toString(),_)}else st(2);u.G=0,u.l&&u.l.sa(v),Gc(u),zc(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Gc(u){if(u.G=0,u.ka=[],u.l){const v=zo(u.h);(v.length!=0||u.i.length!=0)&&(H(u.ka,v),H(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function Yc(u,v,_){var w=_ instanceof _t?fn(_):new _t(_);if(w.g!="")v&&(w.g=v+"."+w.g),yr(w,w.s);else{var B=m.location;w=B.protocol,v=v?v+"."+B.hostname:B.hostname,B=+B.port;var K=new _t(null);w&&vs(K,w),v&&(K.g=v),B&&yr(K,B),_&&(K.l=_),w=K}return _=u.D,v=u.ya,_&&v&&Qe(w,_,v),Qe(w,"VER",u.la),As(u,w),w}function Kc(u,v,_){if(v&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=u.Ca&&!u.pa?new Fe(new vr({eb:_})):new Fe(u.pa),v.Ha(u.J),v}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qc(){}r=Qc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Sa(){}Sa.prototype.g=function(u,v){return new nn(u,v)};function nn(u,v){ut.call(this),this.g=new Ea(v),this.l=u,this.h=v&&v.messageUrlParams||null,u=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(u?u["X-WebChannel-Content-Type"]=v.messageContentType:u={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(u?u["X-WebChannel-Client-Profile"]=v.va:u={"X-WebChannel-Client-Profile":v.va}),this.g.S=u,(u=v&&v.Sb)&&!ie(u)&&(this.g.m=u),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!ie(v)&&(this.g.D=v,u=this.h,u!==null&&v in u&&(u=this.h,v in u&&delete u[v])),this.j=new li(this)}j(nn,ut),nn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nn.prototype.close=function(){Ko(this.g)},nn.prototype.o=function(u){var v=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ln(u),u=_);v.i.push(new Pc(v.Ya++,u)),v.G==3&&Ta(v)},nn.prototype.N=function(){this.g.l=null,delete this.j,Ko(this.g),delete this.g,nn.aa.N.call(this)};function $c(u){Ci.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var v=u.__sm__;if(v){e:{for(const _ in v){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,v=v!==null&&u in v?v[u]:void 0),this.data=v}else this.data=u}j($c,Ci);function Xc(){Po.call(this),this.status=1}j(Xc,Po);function li(u){this.g=u}j(li,Qc),li.prototype.ua=function(){Ge(this.g,"a")},li.prototype.ta=function(u){Ge(this.g,new $c(u))},li.prototype.sa=function(u){Ge(this.g,new Xc)},li.prototype.ra=function(){Ge(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,nn.prototype.send=nn.prototype.o,nn.prototype.open=nn.prototype.m,nn.prototype.close=nn.prototype.close,W2=function(){return new Sa},X2=function(){return fr()},$2=Jn,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pr.NO_ERROR=0,pr.TIMEOUT=8,pr.HTTP_ERROR=6,fh=pr,Ii.COMPLETE="complete",Q2=Ii,ko.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",ut.prototype.listen=ut.prototype.K,ql=ko,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,K2=Fe}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});const Sv="@firebase/firestore",xv="4.9.0";/**
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
 */let So="12.0.0";/**
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
 */const Zs=new Sp("@firebase/firestore");function eo(){return Zs.logLevel}function he(r,...e){if(Zs.logLevel<=Me.DEBUG){const n=e.map(jp);Zs.debug(`Firestore (${So}): ${r}`,...n)}}function sr(r,...e){if(Zs.logLevel<=Me.ERROR){const n=e.map(jp);Zs.error(`Firestore (${So}): ${r}`,...n)}}function fo(r,...e){if(Zs.logLevel<=Me.WARN){const n=e.map(jp);Zs.warn(`Firestore (${So}): ${r}`,...n)}}function jp(r){if(typeof r=="string")return r;try{/**
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
 */function be(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,Z2(r,s,n)}function Z2(r,e,n){let s=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw sr(s),new Error(s)}function He(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||Z2(e,o,s)}function xe(r,e){return r}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class J2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Wt.UNAUTHENTICATED)))}shutdown(){}}class v3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class _3{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let c=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Xr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=c;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Xr)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(He(typeof s.accessToken=="string",31837,{l:s}),new J2(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class E3{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class b3{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new E3(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Av{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T3{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,cn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const s=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const f=c.token!==this.m;return this.m=c.token,he("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>s(c)))};const o=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Av(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Av(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function w3(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Lp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=w3(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=e.charAt(o[c]%62))}return s}}function ke(r,e){return r<e?-1:r>e?1:0}function Xm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),c=e.charAt(s);if(o!==c)return Mm(o)===Mm(c)?ke(o,c):Mm(o)?1:-1}return ke(r.length,e.length)}const S3=55296,x3=57343;function Mm(r){const e=r.charCodeAt(0);return e>=S3&&e<=x3}function mo(r,e,n){return r.length===e.length&&r.every(((s,o)=>n(s,e[o])))}/**
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
 */const Rv="__name__";class pi{constructor(e,n,s){n===void 0?n=0:n>e.length&&be(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&be(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof pi?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const c=pi.compareSegments(e.get(o),n.get(o));if(c!==0)return c}return ke(e.length,n.length)}static compareSegments(e,n){const s=pi.isNumericId(e),o=pi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?pi.extractNumericId(e).compare(pi.extractNumericId(n)):Xm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $r.fromString(e.substring(4,e.length-2))}}class nt extends pi{construct(e,n,s){return new nt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new nt(n)}static emptyPath(){return new nt([])}}const A3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Gt extends pi{construct(e,n,s){return new Gt(e,n,s)}static isValidIdentifier(e){return A3.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rv}static keyField(){return new Gt([Rv])}static fromServerFormat(e){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ue(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(c(),o++)}if(c(),f)throw new ue(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Gt(n)}static emptyPath(){return new Gt([])}}/**
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
 */function eE(r,e,n){if(!n)throw new ue(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function R3(r,e,n,s){if(e===!0&&s===!0)throw new ue(Z.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Cv(r){if(!ge.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Iv(r){if(ge.isDocumentKey(r))throw new ue(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function tE(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Wh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":be(12329,{type:typeof r})}function Yn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ue(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wh(r);throw new ue(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function St(r,e){const n={typeString:r};return e&&(n.value=e),n}function bc(r,e){if(!tE(r))throw new ue(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&f!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new ue(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const Nv=-62135596800,Dv=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*Dv);return new it(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Nv)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dv}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bc(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Nv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:St("string",it._jsonSchemaVersion),seconds:St("number"),nanoseconds:St("number")};/**
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
 */const rc=-1;function C3(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new Zr(o,ge.empty(),e)}function I3(r){return new Zr(r.readTime,r.key,rc)}class Zr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Zr(Se.min(),ge.empty(),rc)}static max(){return new Zr(Se.max(),ge.empty(),rc)}}function N3(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ge.comparator(r.documentKey,e.documentKey),n!==0?n:ke(r.largestBatchId,e.largestBatchId))}/**
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
 */const D3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class O3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function xo(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==D3)throw r;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee(((s,o)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,o)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,o)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):ee.reject(n)}static resolve(e){return new ee(((n,s)=>{n(e)}))}static reject(e){return new ee(((n,s)=>{s(e)}))}static waitFor(e){return new ee(((n,s)=>{let o=0,c=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++c,f&&c===o&&n()}),(p=>s(p)))})),f=!0,c===o&&n()}))}static or(e){let n=ee.resolve(!1);for(const s of e)n=n.next((o=>o?ee.resolve(o):s()));return n}static forEach(e,n){const s=[];return e.forEach(((o,c)=>{s.push(n.call(this,o,c))})),this.waitFor(s)}static mapArray(e,n){return new ee(((s,o)=>{const c=e.length,f=new Array(c);let m=0;for(let p=0;p<c;p++){const y=p;n(e[y]).next((b=>{f[y]=b,++m,m===c&&s(f)}),(b=>o(b)))}}))}static doWhile(e,n){return new ee(((s,o)=>{const c=()=>{e()===!0?n().next((()=>{c()}),o):s()};c()}))}}function M3(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Zh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zh.ce=-1;/**
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
 */const Up=-1;function Jh(r){return r==null}function Nh(r){return r===0&&1/r==-1/0}function k3(r){return typeof r=="number"&&Number.isInteger(r)&&!Nh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const nE="";function P3(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Ov(e)),e=V3(r.get(n),e);return Ov(e)}function V3(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const c=r.charAt(o);switch(c){case"\0":n+="";break;case nE:n+="";break;default:n+=c}}return n}function Ov(r){return r+nE+""}/**
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
 */function Mv(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function rs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function iE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eh(this.root,e,this.comparator,!1)}getReverseIterator(){return new eh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eh(this.root,e,this.comparator,!0)}}class eh{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&o&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,s,o,c){this.key=e,this.value=n,this.color=s??Ht.RED,this.left=o??Ht.EMPTY,this.right=c??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,c){return new Ht(e??this.key,n??this.value,s??this.color,o??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const c=s(e,o.key);return o=c<0?o.copy(null,null,null,o.left.insert(e,n,s),null):c===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Ht.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,n,s,o,c){return this}insert(e,n,s){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(e){return new kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(this.comparator(o,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(Gt.comparator)}static empty(){return new En([])}unionWith(e){let n=new Nt(Gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class rE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new rE("Invalid base64 string: "+c):c}})(e);return new Yt(n)}static fromUint8Array(e){const n=(function(o){let c="";for(let f=0;f<o.length;++f)c+=String.fromCharCode(o[f]);return c})(e);return new Yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const j3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(r){if(He(!!r,39018),typeof r=="string"){let e=0;const n=j3.exec(r);if(He(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:yt(r.seconds),nanos:yt(r.nanos)}}function yt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function es(r){return typeof r=="string"?Yt.fromBase64String(r):Yt.fromUint8Array(r)}/**
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
 */const sE="server_timestamp",aE="__type__",oE="__previous_value__",lE="__local_write_time__";function zp(r){return(r?.mapValue?.fields||{})[aE]?.stringValue===sE}function ef(r){const e=r.mapValue.fields[oE];return zp(e)?ef(e):e}function sc(r){const e=Jr(r.mapValue.fields[lE].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class L3{constructor(e,n,s,o,c,f,m,p,y,b){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=c,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=b}}const Dh="(default)";class ac{constructor(e,n){this.projectId=e,this.database=n||Dh}static empty(){return new ac("","")}get isDefaultDatabase(){return this.database===Dh}isEqual(e){return e instanceof ac&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cE="__type__",U3="__max__",th={mapValue:{}},uE="__vector__",Oh="value";function ts(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?zp(r)?4:B3(r)?9007199254740991:z3(r)?10:11:be(28295,{value:r})}function Si(r,e){if(r===e)return!0;const n=ts(r);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return sc(r).isEqual(sc(e));case 3:return(function(o,c){if(typeof o.timestampValue=="string"&&typeof c.timestampValue=="string"&&o.timestampValue.length===c.timestampValue.length)return o.timestampValue===c.timestampValue;const f=Jr(o.timestampValue),m=Jr(c.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,c){return es(o.bytesValue).isEqual(es(c.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,c){return yt(o.geoPointValue.latitude)===yt(c.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(c.geoPointValue.longitude)})(r,e);case 2:return(function(o,c){if("integerValue"in o&&"integerValue"in c)return yt(o.integerValue)===yt(c.integerValue);if("doubleValue"in o&&"doubleValue"in c){const f=yt(o.doubleValue),m=yt(c.doubleValue);return f===m?Nh(f)===Nh(m):isNaN(f)&&isNaN(m)}return!1})(r,e);case 9:return mo(r.arrayValue.values||[],e.arrayValue.values||[],Si);case 10:case 11:return(function(o,c){const f=o.mapValue.fields||{},m=c.mapValue.fields||{};if(Mv(f)!==Mv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!Si(f[p],m[p])))return!1;return!0})(r,e);default:return be(52216,{left:r})}}function oc(r,e){return(r.values||[]).find((n=>Si(n,e)))!==void 0}function po(r,e){if(r===e)return 0;const n=ts(r),s=ts(e);if(n!==s)return ke(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(r.booleanValue,e.booleanValue);case 2:return(function(c,f){const m=yt(c.integerValue||c.doubleValue),p=yt(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(r,e);case 3:return Pv(r.timestampValue,e.timestampValue);case 4:return Pv(sc(r),sc(e));case 5:return Xm(r.stringValue,e.stringValue);case 6:return(function(c,f){const m=es(c),p=es(f);return m.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(c,f){const m=c.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const b=ke(m[y],p[y]);if(b!==0)return b}return ke(m.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(c,f){const m=ke(yt(c.latitude),yt(f.latitude));return m!==0?m:ke(yt(c.longitude),yt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Vv(r.arrayValue,e.arrayValue);case 10:return(function(c,f){const m=c.fields||{},p=f.fields||{},y=m[Oh]?.arrayValue,b=p[Oh]?.arrayValue,x=ke(y?.values?.length||0,b?.values?.length||0);return x!==0?x:Vv(y,b)})(r.mapValue,e.mapValue);case 11:return(function(c,f){if(c===th.mapValue&&f===th.mapValue)return 0;if(c===th.mapValue)return 1;if(f===th.mapValue)return-1;const m=c.fields||{},p=Object.keys(m),y=f.fields||{},b=Object.keys(y);p.sort(),b.sort();for(let x=0;x<p.length&&x<b.length;++x){const S=Xm(p[x],b[x]);if(S!==0)return S;const D=po(m[p[x]],y[b[x]]);if(D!==0)return D}return ke(p.length,b.length)})(r.mapValue,e.mapValue);default:throw be(23264,{he:n})}}function Pv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return ke(r,e);const n=Jr(r),s=Jr(e),o=ke(n.seconds,s.seconds);return o!==0?o:ke(n.nanos,s.nanos)}function Vv(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const c=po(n[o],s[o]);if(c)return c}return ke(n.length,s.length)}function go(r){return Wm(r)}function Wm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=Jr(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return es(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ge.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",o=!0;for(const c of n.values||[])o?o=!1:s+=",",s+=Wm(c);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let o="{",c=!0;for(const f of s)c?c=!1:o+=",",o+=`${f}:${Wm(n.fields[f])}`;return o+"}"})(r.mapValue):be(61005,{value:r})}function dh(r){switch(ts(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ef(r);return e?16+dh(e):16;case 5:return 2*r.stringValue.length;case 6:return es(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,c)=>o+dh(c)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return rs(s.fields,((c,f)=>{o+=c.length+dh(f)})),o})(r.mapValue);default:throw be(13486,{value:r})}}function jv(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Zm(r){return!!r&&"integerValue"in r}function Bp(r){return!!r&&"arrayValue"in r}function Lv(r){return!!r&&"nullValue"in r}function Uv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function mh(r){return!!r&&"mapValue"in r}function z3(r){return(r?.mapValue?.fields||{})[cE]?.stringValue===uE}function $l(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return rs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=$l(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$l(r.arrayValue.values[n]);return e}return{...r}}function B3(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===U3}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$l(n)}setAll(e){let n=Gt.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=$l(f):o.push(m.lastSegment())}));const c=this.getFieldsMap(n);this.applyChanges(c,s,o)}delete(e){const n=this.field(e.popLast());mh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Si(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];mh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){rs(n,((o,c)=>e[o]=c));for(const o of s)delete e[o]}clone(){return new un($l(this.value))}}function hE(r){const e=[];return rs(r.fields,((n,s)=>{const o=new Gt([n]);if(mh(s)){const c=hE(s.mapValue).fields;if(c.length===0)e.push(o);else for(const f of c)e.push(o.child(f))}else e.push(o)})),new En(e)}/**
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
 */class Zt{constructor(e,n,s,o,c,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=c,this.data=f,this.documentState=m}static newInvalidDocument(e){return new Zt(e,0,Se.min(),Se.min(),Se.min(),un.empty(),0)}static newFoundDocument(e,n,s,o){return new Zt(e,1,n,Se.min(),s,o,0)}static newNoDocument(e,n){return new Zt(e,2,n,Se.min(),Se.min(),un.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,Se.min(),Se.min(),un.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Mh{constructor(e,n){this.position=e,this.inclusive=n}}function zv(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const c=e[o],f=r.position[o];if(c.field.isKeyField()?s=ge.comparator(ge.fromName(f.referenceValue),n.key):s=po(f,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Si(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class lc{constructor(e,n="asc"){this.field=e,this.dir=n}}function q3(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class fE{}class wt extends fE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new H3(e,n,s):n==="array-contains"?new K3(e,s):n==="in"?new Q3(e,s):n==="not-in"?new $3(e,s):n==="array-contains-any"?new X3(e,s):new wt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new G3(e,s):new Y3(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(po(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(po(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends fE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new $n(e,n)}matches(e){return dE(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function dE(r){return r.op==="and"}function mE(r){return F3(r)&&dE(r)}function F3(r){for(const e of r.filters)if(e instanceof $n)return!1;return!0}function Jm(r){if(r instanceof wt)return r.field.canonicalString()+r.op.toString()+go(r.value);if(mE(r))return r.filters.map((e=>Jm(e))).join(",");{const e=r.filters.map((n=>Jm(n))).join(",");return`${r.op}(${e})`}}function pE(r,e){return r instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&Si(s.value,o.value)})(r,e):r instanceof $n?(function(s,o){return o instanceof $n&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((c,f,m)=>c&&pE(f,o.filters[m])),!0):!1})(r,e):void be(19439)}function gE(r){return r instanceof wt?(function(n){return`${n.field.canonicalString()} ${n.op} ${go(n.value)}`})(r):r instanceof $n?(function(n){return n.op.toString()+" {"+n.getFilters().map(gE).join(" ,")+"}"})(r):"Filter"}class H3 extends wt{constructor(e,n,s){super(e,n,s),this.key=ge.fromName(s.referenceValue)}matches(e){const n=ge.comparator(e.key,this.key);return this.matchesComparison(n)}}class G3 extends wt{constructor(e,n){super(e,"in",n),this.keys=yE("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Y3 extends wt{constructor(e,n){super(e,"not-in",n),this.keys=yE("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function yE(r,e){return(e.arrayValue?.values||[]).map((n=>ge.fromName(n.referenceValue)))}class K3 extends wt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bp(n)&&oc(n.arrayValue,this.value)}}class Q3 extends wt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oc(this.value.arrayValue,n)}}class $3 extends wt{constructor(e,n){super(e,"not-in",n)}matches(e){if(oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!oc(this.value.arrayValue,n)}}class X3 extends wt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>oc(this.value.arrayValue,s)))}}/**
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
 */class W3{constructor(e,n=null,s=[],o=[],c=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=c,this.startAt=f,this.endAt=m,this.Te=null}}function qv(r,e=null,n=[],s=[],o=null,c=null,f=null){return new W3(r,e,n,s,o,c,f)}function qp(r){const e=xe(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Jm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(c){return c.field.canonicalString()+c.dir})(s))).join(","),Jh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>go(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>go(s))).join(",")),e.Te=n}return e.Te}function Fp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!q3(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!pE(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Bv(r.startAt,e.startAt)&&Bv(r.endAt,e.endAt)}function ep(r){return ge.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ro{constructor(e,n=null,s=[],o=[],c=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Z3(r,e,n,s,o,c,f,m){return new Ro(r,e,n,s,o,c,f,m)}function tf(r){return new Ro(r)}function Fv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function vE(r){return r.collectionGroup!==null}function Xl(r){const e=xe(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const c of e.explicitOrderBy)e.Ie.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Nt(Gt.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((c=>{n.has(c.canonicalString())||c.isKeyField()||e.Ie.push(new lc(c,s))})),n.has(Gt.keyField().canonicalString())||e.Ie.push(new lc(Gt.keyField(),s))}return e.Ie}function _i(r){const e=xe(r);return e.Ee||(e.Ee=J3(e,Xl(r))),e.Ee}function J3(r,e){if(r.limitType==="F")return qv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const c=o.dir==="desc"?"asc":"desc";return new lc(o.field,c)}));const n=r.endAt?new Mh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Mh(r.startAt.position,r.startAt.inclusive):null;return qv(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function tp(r,e){const n=r.filters.concat([e]);return new Ro(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function np(r,e,n){return new Ro(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function nf(r,e){return Fp(_i(r),_i(e))&&r.limitType===e.limitType}function _E(r){return`${qp(_i(r))}|lt:${r.limitType}`}function to(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((o=>gE(o))).join(", ")}]`),Jh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((o=>go(o))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((o=>go(o))).join(",")),`Target(${s})`})(_i(r))}; limitType=${r.limitType})`}function rf(r,e){return e.isFoundDocument()&&(function(s,o){const c=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):ge.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)})(r,e)&&(function(s,o){for(const c of Xl(s))if(!c.field.isKeyField()&&o.data.field(c.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const c of s.filters)if(!c.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=zv(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,Xl(s),o)||s.endAt&&!(function(f,m,p){const y=zv(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,Xl(s),o))})(r,e)}function eR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function EE(r){return(e,n)=>{let s=!1;for(const o of Xl(r)){const c=tR(o,e,n);if(c!==0)return c;s=s||o.field.isKeyField()}return 0}}function tR(r,e,n){const s=r.field.isKeyField()?ge.comparator(e.key,n.key):(function(c,f,m){const p=f.data.field(c),y=m.data.field(c);return p!==null&&y!==null?po(p,y):be(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return be(19790,{direction:r.dir})}}/**
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
 */class ra{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,c]of s)if(this.equalsFn(o,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<o.length;c++)if(this.equalsFn(o[c][0],e))return void(o[c]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,((n,s)=>{for(const[o,c]of s)e(o,c)}))}isEmpty(){return iE(this.inner)}size(){return this.innerSize}}/**
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
 */const nR=new ct(ge.comparator);function ar(){return nR}const bE=new ct(ge.comparator);function Fl(...r){let e=bE;for(const n of r)e=e.insert(n.key,n);return e}function TE(r){let e=bE;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ys(){return Wl()}function wE(){return Wl()}function Wl(){return new ra((r=>r.toString()),((r,e)=>r.isEqual(e)))}const iR=new ct(ge.comparator),rR=new Nt(ge.comparator);function Pe(...r){let e=rR;for(const n of r)e=e.add(n);return e}const sR=new Nt(ke);function aR(){return sR}/**
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
 */function Hp(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nh(e)?"-0":e}}function SE(r){return{integerValue:""+r}}function oR(r,e){return k3(e)?SE(e):Hp(r,e)}/**
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
 */class sf{constructor(){this._=void 0}}function lR(r,e,n){return r instanceof cc?(function(o,c){const f={fields:{[aE]:{stringValue:sE},[lE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return c&&zp(c)&&(c=ef(c)),c&&(f.fields[oE]=c),{mapValue:f}})(n,e):r instanceof uc?AE(r,e):r instanceof hc?RE(r,e):(function(o,c){const f=xE(o,c),m=Hv(f)+Hv(o.Ae);return Zm(f)&&Zm(o.Ae)?SE(m):Hp(o.serializer,m)})(r,e)}function cR(r,e,n){return r instanceof uc?AE(r,e):r instanceof hc?RE(r,e):n}function xE(r,e){return r instanceof kh?(function(s){return Zm(s)||(function(c){return!!c&&"doubleValue"in c})(s)})(e)?e:{integerValue:0}:null}class cc extends sf{}class uc extends sf{constructor(e){super(),this.elements=e}}function AE(r,e){const n=CE(e);for(const s of r.elements)n.some((o=>Si(o,s)))||n.push(s);return{arrayValue:{values:n}}}class hc extends sf{constructor(e){super(),this.elements=e}}function RE(r,e){let n=CE(e);for(const s of r.elements)n=n.filter((o=>!Si(o,s)));return{arrayValue:{values:n}}}class kh extends sf{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Hv(r){return yt(r.integerValue||r.doubleValue)}function CE(r){return Bp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class uR{constructor(e,n){this.field=e,this.transform=n}}function hR(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof uc&&o instanceof uc||s instanceof hc&&o instanceof hc?mo(s.elements,o.elements,Si):s instanceof kh&&o instanceof kh?Si(s.Ae,o.Ae):s instanceof cc&&o instanceof cc})(r.transform,e.transform)}class fR{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ph(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class af{}function IE(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new DE(r.key,Kn.none()):new Tc(r.key,r.data,Kn.none());{const n=r.data,s=un.empty();let o=new Nt(Gt.comparator);for(let c of e.fields)if(!o.has(c)){let f=n.field(c);f===null&&c.length>1&&(c=c.popLast(),f=n.field(c)),f===null?s.delete(c):s.set(c,f),o=o.add(c)}return new ss(r.key,s,new En(o.toArray()),Kn.none())}}function dR(r,e,n){r instanceof Tc?(function(o,c,f){const m=o.value.clone(),p=Yv(o.fieldTransforms,c,f.transformResults);m.setAll(p),c.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(r,e,n):r instanceof ss?(function(o,c,f){if(!ph(o.precondition,c))return void c.convertToUnknownDocument(f.version);const m=Yv(o.fieldTransforms,c,f.transformResults),p=c.data;p.setAll(NE(o)),p.setAll(m),c.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):(function(o,c,f){c.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function Zl(r,e,n,s){return r instanceof Tc?(function(c,f,m,p){if(!ph(c.precondition,f))return m;const y=c.value.clone(),b=Kv(c.fieldTransforms,p,f);return y.setAll(b),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,e,n,s):r instanceof ss?(function(c,f,m,p){if(!ph(c.precondition,f))return m;const y=Kv(c.fieldTransforms,p,f),b=f.data;return b.setAll(NE(c)),b.setAll(y),f.convertToFoundDocument(f.version,b).setHasLocalMutations(),m===null?null:m.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map((x=>x.field)))})(r,e,n,s):(function(c,f,m){return ph(c.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(r,e,n)}function mR(r,e){let n=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),c=xE(s.transform,o||null);c!=null&&(n===null&&(n=un.empty()),n.set(s.field,c))}return n||null}function Gv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&mo(s,o,((c,f)=>hR(c,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Tc extends af{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ss extends af{constructor(e,n,s,o,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function NE(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function Yv(r,e,n){const s=new Map;He(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const c=r[o],f=c.transform,m=e.data.field(c.field);s.set(c.field,cR(f,m,n[o]))}return s}function Kv(r,e,n){const s=new Map;for(const o of r){const c=o.transform,f=n.data.field(o.field);s.set(o.field,lR(c,f,e))}return s}class DE extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pR extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gR{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const c=this.mutations[o];c.key.isEqual(e.key)&&dR(c,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Zl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Zl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=wE();return this.mutations.forEach((o=>{const c=e.get(o.key),f=c.overlayedDocument;let m=this.applyToLocalView(f,c.mutatedFields);m=n.has(o.key)?null:m;const p=IE(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,((n,s)=>Gv(n,s)))&&mo(this.baseMutations,e.baseMutations,((n,s)=>Gv(n,s)))}}class Gp{constructor(e,n,s,o){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(e,n,s){He(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return iR})();const c=e.mutations;for(let f=0;f<c.length;f++)o=o.insert(c[f].key,s[f].version);return new Gp(e,n,s,o)}}/**
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
 */class yR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Tt,Ue;function _R(r){switch(r){case Z.OK:return be(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return be(15467,{code:r})}}function OE(r){if(r===void 0)return sr("GRPC error has no .code"),Z.UNKNOWN;switch(r){case Tt.OK:return Z.OK;case Tt.CANCELLED:return Z.CANCELLED;case Tt.UNKNOWN:return Z.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return Z.INTERNAL;case Tt.UNAVAILABLE:return Z.UNAVAILABLE;case Tt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Tt.NOT_FOUND:return Z.NOT_FOUND;case Tt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Tt.ABORTED:return Z.ABORTED;case Tt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Tt.DATA_LOSS:return Z.DATA_LOSS;default:return be(39323,{code:r})}}(Ue=Tt||(Tt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ER(){return new TextEncoder}/**
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
 */const bR=new $r([4294967295,4294967295],0);function Qv(r){const e=ER().encode(r),n=new Y2;return n.update(e),new Uint8Array(n.digest())}function $v(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),c=e.getUint32(12,!0);return[new $r([n,s],0),new $r([o,c],0)]}class Yp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Hl(`Invalid padding: ${n}`);if(s<0)throw new Hl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Hl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Hl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=$r.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply($r.fromNumber(s)));return o.compare(bR)===1&&(o=new $r([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qv(e),[s,o]=$v(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,c=new Uint8Array(Math.ceil(e/8)),f=new Yp(c,o,n);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const n=Qv(e),[s,o]=$v(n);for(let c=0;c<this.hashCount;c++){const f=this.ye(s,o,c);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Hl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class of{constructor(e,n,s,o,c){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=c}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new of(Se.min(),o,new ct(ke),ar(),Pe())}}class wc{constructor(e,n,s,o,c){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=c}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new wc(s,n,Pe(),Pe(),Pe())}}/**
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
 */class gh{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class ME{constructor(e,n){this.targetId=e,this.Ce=n}}class kE{constructor(e,n,s=Yt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Xv{constructor(){this.ve=0,this.Fe=Wv(),this.Me=Yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),n=Pe(),s=Pe();return this.Fe.forEach(((o,c)=>{switch(c){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:be(38017,{changeType:c})}})),new wc(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=Wv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,He(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class TR{constructor(e){this.Ge=e,this.ze=new Map,this.je=ar(),this.Je=nh(),this.He=nh(),this.Ye=new ct(ke)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:be(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,o)=>{this.rt(o)&&n(o)}))}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const c=o.target;if(ep(c))if(s===0){const f=new ge(c.path);this.et(n,f,Zt.newNoDocument(f,Se.min()))}else He(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:c=0}=n;let f,m;try{f=es(s).toUint8Array()}catch(p){if(p instanceof rE)return fo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Yp(f,o,c)}catch(p){return fo(p instanceof Hl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach((c=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${c.path.canonicalString()}`;e.mightContain(m)||(this.et(n,c,null),o++)})),o}Tt(e){const n=new Map;this.ze.forEach(((c,f)=>{const m=this.ot(f);if(m){if(c.current&&ep(m.target)){const p=new ge(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,Zt.newNoDocument(p,e))}c.Be&&(n.set(f,c.ke()),c.qe())}}));let s=Pe();this.He.forEach(((c,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(c))})),this.je.forEach(((c,f)=>f.setReadTime(e)));const o=new of(e,n,this.Ye,this.je,s);return this.je=ar(),this.Je=nh(),this.He=nh(),this.Ye=new ct(ke),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Xv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Nt(ke),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Nt(ke),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xv),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function nh(){return new ct(ge.comparator)}function Wv(){return new ct(ge.comparator)}const wR={asc:"ASCENDING",desc:"DESCENDING"},SR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xR={and:"AND",or:"OR"};class AR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ip(r,e){return r.useProto3Json||Jh(e)?e:{value:e}}function Ph(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PE(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function RR(r,e){return Ph(r,e.toTimestamp())}function Ei(r){return He(!!r,49232),Se.fromTimestamp((function(n){const s=Jr(n);return new it(s.seconds,s.nanos)})(r))}function Kp(r,e){return rp(r,e).canonicalString()}function rp(r,e){const n=(function(o){return new nt(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?n:n.child(e)}function VE(r){const e=nt.fromString(r);return He(BE(e),10190,{key:e.toString()}),e}function sp(r,e){return Kp(r.databaseId,e.path)}function km(r,e){const n=VE(e);if(n.get(1)!==r.databaseId.projectId)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ue(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ge(LE(n))}function jE(r,e){return Kp(r.databaseId,e)}function CR(r){const e=VE(r);return e.length===4?nt.emptyPath():LE(e)}function ap(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function LE(r){return He(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Zv(r,e,n){return{name:sp(r,e),fields:n.value.mapValue.fields}}function IR(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:be(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],c=(function(y,b){return y.useProto3Json?(He(b===void 0||typeof b=="string",58123),Yt.fromBase64String(b||"")):(He(b===void 0||b instanceof Buffer||b instanceof Uint8Array,16193),Yt.fromUint8Array(b||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(y){const b=y.code===void 0?Z.UNKNOWN:OE(y.code);return new ue(b,y.message||"")})(f);n=new kE(s,o,c,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=km(r,s.document.name),c=Ei(s.document.updateTime),f=s.document.createTime?Ei(s.document.createTime):Se.min(),m=new un({mapValue:{fields:s.document.fields}}),p=Zt.newFoundDocument(o,c,f,m),y=s.targetIds||[],b=s.removedTargetIds||[];n=new gh(y,b,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=km(r,s.document),c=s.readTime?Ei(s.readTime):Se.min(),f=Zt.newNoDocument(o,c),m=s.removedTargetIds||[];n=new gh([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=km(r,s.document),c=s.removedTargetIds||[];n=new gh([],c,o,null)}else{if(!("filter"in e))return be(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:c}=s,f=new vR(o,c),m=s.targetId;n=new ME(m,f)}}return n}function NR(r,e){let n;if(e instanceof Tc)n={update:Zv(r,e.key,e.value)};else if(e instanceof DE)n={delete:sp(r,e.key)};else if(e instanceof ss)n={update:Zv(r,e.key,e.data),updateMask:UR(e.fieldMask)};else{if(!(e instanceof pR))return be(16599,{Vt:e.type});n={verify:sp(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(c,f){const m=f.transform;if(m instanceof cc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof uc)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof hc)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof kh)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw be(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(o,c){return c.updateTime!==void 0?{updateTime:RR(o,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:be(27497)})(r,e.precondition)),n}function DR(r,e){return r&&r.length>0?(He(e!==void 0,14353),r.map((n=>(function(o,c){let f=o.updateTime?Ei(o.updateTime):Ei(c);return f.isEqual(Se.min())&&(f=Ei(c)),new fR(f,o.transformResults||[])})(n,e)))):[]}function OR(r,e){return{documents:[jE(r,e.path)]}}function MR(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=jE(r,o);const c=(function(y){if(y.length!==0)return zE($n.create(y,"and"))})(e.filters);c&&(n.structuredQuery.where=c);const f=(function(y){if(y.length!==0)return y.map((b=>(function(S){return{field:no(S.field),direction:VR(S.dir)}})(b)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=ip(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:n,parent:o}}function kR(r){let e=CR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){He(s===1,65062);const b=n.from[0];b.allDescendants?o=b.collectionId:e=e.child(b.collectionId)}let c=[];n.where&&(c=(function(x){const S=UE(x);return S instanceof $n&&mE(S)?S.getFilters():[S]})(n.where));let f=[];n.orderBy&&(f=(function(x){return x.map((S=>(function(j){return new lc(io(j.field),(function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(j.direction))})(S)))})(n.orderBy));let m=null;n.limit&&(m=(function(x){let S;return S=typeof x=="object"?x.value:x,Jh(S)?null:S})(n.limit));let p=null;n.startAt&&(p=(function(x){const S=!!x.before,D=x.values||[];return new Mh(D,S)})(n.startAt));let y=null;return n.endAt&&(y=(function(x){const S=!x.before,D=x.values||[];return new Mh(D,S)})(n.endAt)),Z3(e,o,f,c,m,"F",p,y)}function PR(r,e){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:o})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UE(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=io(n.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=io(n.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=io(n.unaryFilter.field);return wt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=io(n.unaryFilter.field);return wt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}})(r):r.fieldFilter!==void 0?(function(n){return wt.create(io(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return $n.create(n.compositeFilter.filters.map((s=>UE(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return be(1026)}})(n.compositeFilter.op))})(r):be(30097,{filter:r})}function VR(r){return wR[r]}function jR(r){return SR[r]}function LR(r){return xR[r]}function no(r){return{fieldPath:r.canonicalString()}}function io(r){return Gt.fromServerFormat(r.fieldPath)}function zE(r){return r instanceof wt?(function(n){if(n.op==="=="){if(Uv(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NAN"}};if(Lv(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uv(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NOT_NAN"}};if(Lv(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(n.field),op:jR(n.op),value:n.value}}})(r):r instanceof $n?(function(n){const s=n.getFilters().map((o=>zE(o)));return s.length===1?s[0]:{compositeFilter:{op:LR(n.op),filters:s}}})(r):be(54877,{filter:r})}function UR(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function BE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Gr{constructor(e,n,s,o,c=Se.min(),f=Se.min(),m=Yt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=c,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new Gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zR{constructor(e){this.yt=e}}function BR(r){const e=kR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?np(e,e.limit,"L"):e}/**
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
 */class qR{constructor(){this.Cn=new FR}addToCollectionParentIndex(e,n){return this.Cn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(Zr.min())}updateCollectionGroup(e,n,s){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Nt(nt.comparator),c=!o.has(s);return this.index[n]=o.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Nt(nt.comparator)).toArray()}}/**
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
 */const Jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qE=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(qE,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
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
 */class yo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yo(0)}static cr(){return new yo(-1)}}/**
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
 */const e_="LruGarbageCollector",HR=1048576;function t_([r,e],[n,s]){const o=ke(r,n);return o===0?ke(e,s):o}class GR{constructor(e){this.Ir=e,this.buffer=new Nt(t_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();t_(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YR{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){he(e_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?he(e_,"Ignoring IndexedDB error during garbage collection: ",n):await xo(n)}await this.Vr(3e5)}))}}class KR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(Zh.ce);const s=new GR(n);return this.mr.forEachTarget(e,(o=>s.Ar(o.sequenceNumber))).next((()=>this.mr.pr(e,(o=>s.Ar(o))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Jv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jv):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,c,f,m,p,y;const b=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),o=this.params.maximumSequenceNumbersToCollect):o=x,f=Date.now(),this.nthSequenceNumber(e,o)))).next((x=>(s=x,m=Date.now(),this.removeTargets(e,s,n)))).next((x=>(c=x,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((x=>(y=Date.now(),eo()<=Me.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-b}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${c} targets in `+(p-m)+`ms
	Removed ${x} documents in `+(y-p)+`ms
Total Duration: ${y-b}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:c,documentsRemoved:x}))))}}function QR(r,e){return new KR(r,e)}/**
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
 */class $R{constructor(){this.changes=new ra((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?ee.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WR{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,n)))).next((o=>(s!==null&&Zl(s.mutation,o,En.empty(),it.now()),o)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=Pe()){const o=Ys();return this.populateOverlays(e,o,n).next((()=>this.computeViews(e,n,o,s).next((c=>{let f=Fl();return c.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,Pe())))}populateOverlays(e,n,s){const o=[];return s.forEach((c=>{n.has(c)||o.push(c)})),this.documentOverlayCache.getOverlays(e,o).next((c=>{c.forEach(((f,m)=>{n.set(f,m)}))}))}computeViews(e,n,s,o){let c=ar();const f=Wl(),m=(function(){return Wl()})();return n.forEach(((p,y)=>{const b=s.get(y.key);o.has(y.key)&&(b===void 0||b.mutation instanceof ss)?c=c.insert(y.key,y):b!==void 0?(f.set(y.key,b.mutation.getFieldMask()),Zl(b.mutation,y,b.mutation.getFieldMask(),it.now())):f.set(y.key,En.empty())})),this.recalculateAndSaveOverlays(e,c).next((p=>(p.forEach(((y,b)=>f.set(y,b))),n.forEach(((y,b)=>m.set(y,new XR(b,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,n){const s=Wl();let o=new ct(((f,m)=>f-m)),c=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=n.get(p);if(y===null)return;let b=s.get(p)||En.empty();b=m.applyToLocalView(y,b),s.set(p,b);const x=(o.get(m.batchId)||Pe()).add(p);o=o.insert(m.batchId,x)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,b=p.value,x=wE();b.forEach((S=>{if(!c.has(S)){const D=IE(n.get(S),s.get(S));D!==null&&x.set(S,D),c=c.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,x))}return ee.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,o){return(function(f){return ge.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next((c=>{const f=o-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-c.size):ee.resolve(Ys());let m=rc,p=c;return f.next((y=>ee.forEach(y,((b,x)=>(m<x.largestBatchId&&(m=x.largestBatchId),c.get(b)?ee.resolve():this.remoteDocumentCache.getEntry(e,b).next((S=>{p=p.insert(b,S)}))))).next((()=>this.populateOverlays(e,y,c))).next((()=>this.computeViews(e,p,y,Pe()))).next((b=>({batchId:m,changes:TE(b)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ge(n)).next((s=>{let o=Fl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const c=n.collectionGroup;let f=Fl();return this.indexManager.getCollectionParents(e,c).next((m=>ee.forEach(m,(p=>{const y=(function(x,S){return new Ro(S,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(n,p.child(c));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((b=>{b.forEach(((x,S)=>{f=f.insert(x,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,o){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(c=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,o)))).next((f=>{c.forEach(((p,y)=>{const b=y.getKey();f.get(b)===null&&(f=f.insert(b,Zt.newInvalidDocument(b)))}));let m=Fl();return f.forEach(((p,y)=>{const b=c.get(p);b!==void 0&&Zl(b.mutation,y,En.empty(),it.now()),rf(n,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class ZR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return ee.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Ei(o.createTime)}})(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:BR(o.bundledQuery),readTime:Ei(o.readTime)}})(n)),ee.resolve()}}/**
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
 */class JR{constructor(){this.overlays=new ct(ge.comparator),this.qr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return ee.forEach(n,(o=>this.getOverlay(e,o).next((c=>{c!==null&&s.set(o,c)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((o,c)=>{this.St(e,n,c)})),ee.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach((c=>this.overlays=this.overlays.remove(c))),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,n,s){const o=Ys(),c=n.length+1,f=new ge(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===c&&p.largestBatchId>s&&o.set(p.getKey(),p)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let c=new ct(((y,b)=>y-b));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let b=c.get(y.largestBatchId);b===null&&(b=Ys(),c=c.insert(y.largestBatchId,b)),b.set(y.getKey(),y)}}const m=Ys(),p=c.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,b)=>m.set(y,b))),!(m.size()>=o)););return ee.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new yR(n,s));let c=this.qr.get(n);c===void 0&&(c=Pe(),this.qr.set(n,c)),this.qr.set(n,c.add(s.key))}}/**
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
 */class e5{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class Qp{constructor(){this.Qr=new Nt(Lt.$r),this.Ur=new Nt(Lt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Lt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Gr(new Lt(e,n))}zr(e,n){e.forEach((s=>this.removeReference(s,n)))}jr(e){const n=new ge(new nt([])),s=new Lt(n,e),o=new Lt(n,e+1),c=[];return this.Ur.forEachInRange([s,o],(f=>{this.Gr(f),c.push(f.key)})),c}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ge(new nt([])),s=new Lt(n,e),o=new Lt(n,e+1);let c=Pe();return this.Ur.forEachInRange([s,o],(f=>{c=c.add(f.key)})),c}containsKey(e){const n=new Lt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Lt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ge.comparator(e.key,n.key)||ke(e.Yr,n.Yr)}static Kr(e,n){return ke(e.Yr,n.Yr)||ge.comparator(e.key,n.key)}}/**
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
 */class t5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Nt(Lt.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const c=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new gR(c,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Lt(m.key,c)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ee.resolve(f)}lookupMutationBatch(e,n){return ee.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),c=o<0?0:o;return ee.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Up:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Lt(n,0),o=new Lt(n,Number.POSITIVE_INFINITY),c=[];return this.Zr.forEachInRange([s,o],(f=>{const m=this.Xr(f.Yr);c.push(m)})),ee.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Nt(ke);return n.forEach((o=>{const c=new Lt(o,0),f=new Lt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([c,f],(m=>{s=s.add(m.Yr)}))})),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let c=s;ge.isDocumentKey(c)||(c=c.child(""));const f=new Lt(new ge(c),0);let m=new Nt(ke);return this.Zr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Yr)),!0)}),f),ee.resolve(this.ti(m))}ti(e){const n=[];return e.forEach((s=>{const o=this.Xr(s);o!==null&&n.push(o)})),n}removeMutationBatch(e,n){He(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(n.mutations,(o=>{const c=new Lt(o.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Zr=s}))}ir(e){}containsKey(e,n){const s=new Lt(n,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class n5{constructor(e){this.ri=e,this.docs=(function(){return new ct(ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),c=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return ee.resolve(s?s.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let s=ar();return n.forEach((o=>{const c=this.docs.get(o);s=s.insert(o,c?c.document.mutableCopy():Zt.newInvalidDocument(o))})),ee.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let c=ar();const f=n.path,m=new ge(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:b}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||N3(I3(b),s)<=0||(o.has(b.key)||rf(n,b))&&(c=c.insert(b.key,b.mutableCopy()))}return ee.resolve(c)}getAllFromCollectionGroup(e,n,s,o){be(9500)}ii(e,n){return ee.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new i5(this)}getSize(e){return ee.resolve(this.size)}}class i5 extends $R{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)})),ee.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class r5{constructor(e){this.persistence=e,this.si=new ra((n=>qp(n)),Fp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.oi=0,this._i=new Qp,this.targetCount=0,this.ai=yo.ur()}forEachTarget(e,n){return this.si.forEach(((s,o)=>n(o))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),ee.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new yo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.Pr(n),ee.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,s){let o=0;const c=[];return this.si.forEach(((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),c.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),ee.waitFor(c).next((()=>o))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return ee.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),ee.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,c=[];return o&&n.forEach((f=>{c.push(o.markPotentiallyOrphaned(e,f))})),ee.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return ee.resolve(s)}containsKey(e,n){return ee.resolve(this._i.containsKey(n))}}/**
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
 */class FE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Zh(0),this.li=!1,this.li=!0,this.hi=new e5,this.referenceDelegate=e(this),this.Pi=new r5(this),this.indexManager=new qR,this.remoteDocumentCache=(function(o){return new n5(o)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new zR(n),this.Ii=new ZR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new t5(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){he("MemoryPersistence","Starting transaction:",e);const o=new s5(this.ci.next());return this.referenceDelegate.Ei(),s(o).next((c=>this.referenceDelegate.di(o).next((()=>c)))).toPromise().then((c=>(o.raiseOnCommittedEvent(),c)))}Ai(e,n){return ee.or(Object.values(this.ui).map((s=>()=>s.containsKey(e,n))))}}class s5 extends O3{constructor(e){super(),this.currentSequenceNumber=e}}class $p{constructor(e){this.persistence=e,this.Ri=new Qp,this.Vi=null}static mi(e){return new $p(e)}get fi(){if(this.Vi)return this.Vi;throw be(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((o=>{o.forEach((c=>this.fi.add(c.toString())))})).next((()=>s.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,(s=>{const o=ge.fromPath(s);return this.gi(e,o).next((c=>{c||n.removeEntry(o,Se.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Vh{constructor(e,n){this.persistence=e,this.pi=new ra((s=>P3(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=QR(this,n)}static mi(e,n){return new Vh(e,n)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((o=>s+o))))}wr(e){let n=0;return this.pr(e,(s=>{n++})).next((()=>n))}pr(e,n){return ee.forEach(this.pi,((s,o)=>this.br(e,s,o).next((c=>c?ee.resolve():n(o)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),c=o.newChangeBuffer();return o.ii(e,(f=>this.br(e,f,n).next((m=>{m||(s++,c.removeEntry(f,Se.min()))})))).next((()=>c.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),ee.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dh(e.data.value)),n}br(e,n,s){return ee.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Pe(),o=Pe();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:o=o.add(c.doc.key)}return new Xp(e,n.fromCache,s,o)}}/**
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
 */class a5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class o5{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return LS()?8:M3(Jt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const c={result:null};return this.ys(e,n).next((f=>{c.result=f})).next((()=>{if(!c.result)return this.ws(e,n,o,s).next((f=>{c.result=f}))})).next((()=>{if(c.result)return;const f=new a5;return this.Ss(e,n,f).next((m=>{if(c.result=m,this.Vs)return this.bs(e,n,f,m.size)}))})).next((()=>c.result))}bs(e,n,s,o){return s.documentReadCount<this.fs?(eo()<=Me.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",to(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(eo()<=Me.DEBUG&&he("QueryEngine","Query:",to(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(eo()<=Me.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",to(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_i(n))):ee.resolve())}ys(e,n){if(Fv(n))return ee.resolve(null);let s=_i(n);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=np(n,null,"F"),s=_i(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((c=>{const f=Pe(...c);return this.ps.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.Ds(n,m);return this.Cs(n,y,f,p.readTime)?this.ys(e,np(n,null,"F")):this.vs(e,y,n,p)}))))})))))}ws(e,n,s,o){return Fv(n)||o.isEqual(Se.min())?ee.resolve(null):this.ps.getDocuments(e,s).next((c=>{const f=this.Ds(n,c);return this.Cs(n,f,s,o)?ee.resolve(null):(eo()<=Me.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),to(n)),this.vs(e,f,n,C3(o,rc)).next((m=>m)))}))}Ds(e,n){let s=new Nt(EE(e));return n.forEach(((o,c)=>{rf(e,c)&&(s=s.add(c))})),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(o)>0)}Ss(e,n,s){return eo()<=Me.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",to(n)),this.ps.getDocumentsMatchingQuery(e,n,Zr.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next((c=>(n.forEach((f=>{c=c.insert(f.key,f)})),c)))}}/**
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
 */const Wp="LocalStore",l5=3e8;class c5{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new ct(ke),this.xs=new ra((c=>qp(c)),Fp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function u5(r,e,n,s){return new c5(r,e,n,s)}async function HE(r,e){const n=xe(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next((c=>(o=c,n.Bs(e),n.mutationQueue.getAllMutationBatches(s)))).next((c=>{const f=[],m=[];let p=Pe();for(const y of o){f.push(y.batchId);for(const b of y.mutations)p=p.add(b.key)}for(const y of c){m.push(y.batchId);for(const b of y.mutations)p=p.add(b.key)}return n.localDocuments.getDocuments(s,p).next((y=>({Ls:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function h5(r,e){const n=xe(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),c=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(m,p,y,b){const x=y.batch,S=x.keys();let D=ee.resolve();return S.forEach((j=>{D=D.next((()=>b.getEntry(p,j))).next((z=>{const H=y.docVersions.get(j);He(H!==null,48541),z.version.compareTo(H)<0&&(x.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),b.addEntry(z)))}))})),D.next((()=>m.mutationQueue.removeMutationBatch(p,x)))})(n,s,e,c).next((()=>c.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Pe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p})(e)))).next((()=>n.localDocuments.getDocuments(s,o)))}))}function GE(r){const e=xe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function f5(r,e){const n=xe(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(c=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach(((b,x)=>{const S=o.get(x);if(!S)return;m.push(n.Pi.removeMatchingKeys(c,b.removedDocuments,x).next((()=>n.Pi.addMatchingKeys(c,b.addedDocuments,x))));let D=S.withSequenceNumber(c.currentSequenceNumber);e.targetMismatches.get(x)!==null?D=D.withResumeToken(Yt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):b.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(b.resumeToken,s)),o=o.insert(x,D),(function(z,H,$){return z.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=l5?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(S,D,b)&&m.push(n.Pi.updateTargetData(c,D))}));let p=ar(),y=Pe();if(e.documentUpdates.forEach((b=>{e.resolvedLimboDocuments.has(b)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(c,b))})),m.push(d5(c,f,e.documentUpdates).next((b=>{p=b.ks,y=b.qs}))),!s.isEqual(Se.min())){const b=n.Pi.getLastRemoteSnapshotVersion(c).next((x=>n.Pi.setTargetsMetadata(c,c.currentSequenceNumber,s)));m.push(b)}return ee.waitFor(m).next((()=>f.apply(c))).next((()=>n.localDocuments.getLocalViewOfDocuments(c,p,y))).next((()=>p))})).then((c=>(n.Ms=o,c)))}function d5(r,e,n){let s=Pe(),o=Pe();return n.forEach((c=>s=s.add(c))),e.getEntries(r,s).next((c=>{let f=ar();return n.forEach(((m,p)=>{const y=c.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):he(Wp,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{ks:f,qs:o}}))}function m5(r,e){const n=xe(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Up),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function p5(r,e){const n=xe(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return n.Pi.getTargetData(s,e).next((c=>c?(o=c,ee.resolve(o)):n.Pi.allocateTargetId(s).next((f=>(o=new Gr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s}))}async function op(r,e,n){const s=xe(r),o=s.Ms.get(e),c=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",c,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Ao(f))throw f;he(Wp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function n_(r,e,n){const s=xe(r);let o=Se.min(),c=Pe();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,b){const x=xe(p),S=x.xs.get(b);return S!==void 0?ee.resolve(x.Ms.get(S)):x.Pi.getTargetData(y,b)})(s,f,_i(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next((p=>{c=p}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Se.min(),n?c:Pe()))).next((m=>(g5(s,eR(e),m),{documents:m,Qs:c})))))}function g5(r,e,n){let s=r.Os.get(e)||Se.min();n.forEach(((o,c)=>{c.readTime.compareTo(s)>0&&(s=c.readTime)})),r.Os.set(e,s)}class i_{constructor(){this.activeTargetIds=aR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class y5{constructor(){this.Mo=new i_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new i_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v5{Oo(e){}shutdown(){}}/**
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
 */const r_="ConnectivityMonitor";class s_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){he(r_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){he(r_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ih=null;function lp(){return ih===null?ih=(function(){return 268435456+Math.round(2147483648*Math.random())})():ih++,"0x"+ih.toString(16)}/**
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
 */const Pm="RestConnection",_5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class E5{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Dh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,c){const f=lp(),m=this.zo(e,n.toUriEncodedString());he(Pm,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(p,o,c);const{host:y}=new URL(m),b=bo(y);return this.Jo(e,m,p,s,b).then((x=>(he(Pm,`Received RPC '${e}' ${f}: `,x),x)),(x=>{throw fo(Pm,`RPC '${e}' ${f} failed with error: `,x,"url: ",m,"request:",s),x}))}Ho(e,n,s,o,c,f){return this.Go(e,n,s,o,c)}jo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+So})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,c)=>e[c]=o)),s&&s.headers.forEach(((o,c)=>e[c]=o))}zo(e,n){const s=_5[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class b5{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Xt="WebChannelConnection";class T5 extends E5{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,c){const f=lp();return new Promise(((m,p)=>{const y=new K2;y.setWithCredentials(!0),y.listenOnce(Q2.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case fh.NO_ERROR:const x=y.getResponseJson();he(Xt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(x)),m(x);break;case fh.TIMEOUT:he(Xt,`RPC '${e}' ${f} timed out`),p(new ue(Z.DEADLINE_EXCEEDED,"Request time out"));break;case fh.HTTP_ERROR:const S=y.getStatus();if(he(Xt,`RPC '${e}' ${f} failed with status:`,S,"response text:",y.getResponseText()),S>0){let D=y.getResponseJson();Array.isArray(D)&&(D=D[0]);const j=D?.error;if(j&&j.status&&j.message){const z=(function($){const ie=$.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(ie)>=0?ie:Z.UNKNOWN})(j.status);p(new ue(z,j.message))}else p(new ue(Z.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new ue(Z.UNAVAILABLE,"Connection failed."));break;default:be(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{he(Xt,`RPC '${e}' ${f} completed.`)}}));const b=JSON.stringify(o);he(Xt,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",b,s,15)}))}T_(e,n,s){const o=lp(),c=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=W2(),m=X2(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.jo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const b=c.join("");he(Xt,`Creating RPC '${e}' stream ${o}: ${b}`,p);const x=f.createWebChannel(b,p);this.I_(x);let S=!1,D=!1;const j=new b5({Yo:H=>{D?he(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,H):(S||(he(Xt,`Opening RPC '${e}' stream ${o} transport.`),x.open(),S=!0),he(Xt,`RPC '${e}' stream ${o} sending:`,H),x.send(H))},Zo:()=>x.close()}),z=(H,$,ie)=>{H.listen($,(ne=>{try{ie(ne)}catch(ce){setTimeout((()=>{throw ce}),0)}}))};return z(x,ql.EventType.OPEN,(()=>{D||(he(Xt,`RPC '${e}' stream ${o} transport opened.`),j.o_())})),z(x,ql.EventType.CLOSE,(()=>{D||(D=!0,he(Xt,`RPC '${e}' stream ${o} transport closed`),j.a_(),this.E_(x))})),z(x,ql.EventType.ERROR,(H=>{D||(D=!0,fo(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,H.name,"Message:",H.message),j.a_(new ue(Z.UNAVAILABLE,"The operation could not be completed")))})),z(x,ql.EventType.MESSAGE,(H=>{if(!D){const $=H.data[0];He(!!$,16349);const ie=$,ne=ie?.error||ie[0]?.error;if(ne){he(Xt,`RPC '${e}' stream ${o} received error:`,ne);const ce=ne.status;let oe=(function(A){const R=Tt[A];if(R!==void 0)return OE(R)})(ce),pe=ne.message;oe===void 0&&(oe=Z.INTERNAL,pe="Unknown error status: "+ce+" with message "+ne.message),D=!0,j.a_(new ue(oe,pe)),x.close()}else he(Xt,`RPC '${e}' stream ${o} received:`,$),j.u_($)}})),z(m,$2.STAT_EVENT,(H=>{H.stat===$m.PROXY?he(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):H.stat===$m.NOPROXY&&he(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{j.__()}),0),j}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Vm(){return typeof document<"u"?document:null}/**
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
 */function lf(r){return new AR(r,!0)}/**
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
 */class YE{constructor(e,n,s=1e3,o=1.5,c=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const a_="PersistentStream";class KE{constructor(e,n,s,o,c,f,m,p){this.Mi=e,this.S_=s,this.b_=o,this.connection=c,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new YE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===n&&this.G_(s,o)}),(s=>{e((()=>{const o=new ue(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return he(a_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(he(a_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class w5 extends KE{constructor(e,n,s,o,c,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=IR(this.serializer,e),s=(function(c){if(!("targetChange"in c))return Se.min();const f=c.targetChange;return f.targetIds&&f.targetIds.length?Se.min():f.readTime?Ei(f.readTime):Se.min()})(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=ap(this.serializer),n.addTarget=(function(c,f){let m;const p=f.target;if(m=ep(p)?{documents:OR(c,p)}:{query:MR(c,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=PE(c,f.resumeToken);const y=ip(c,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Se.min())>0){m.readTime=Ph(c,f.snapshotVersion.toTimestamp());const y=ip(c,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=PR(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=ap(this.serializer),n.removeTarget=e,this.q_(n)}}class S5 extends KE{constructor(e,n,s,o,c,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=c}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=DR(e.writeResults,e.commitTime),s=Ei(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=ap(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>NR(this.serializer,s)))};this.q_(n)}}/**
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
 */class x5{}class A5 extends x5{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Go(e,rp(n,s),o,c,f))).catch((c=>{throw c.name==="FirebaseError"?(c.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(Z.UNKNOWN,c.toString())}))}Ho(e,n,s,o,c){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.Ho(e,rp(n,s),o,f,m,c))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ue(Z.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class R5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(n),this.aa=!1):he("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Js="RemoteStore";class C5{constructor(e,n,s,o,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=c,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{sa(this)&&(he(Js,"Restarting streams for network reachability change."),await(async function(p){const y=xe(p);y.Ea.add(4),await Sc(y),y.Ra.set("Unknown"),y.Ea.delete(4),await cf(y)})(this))}))})),this.Ra=new R5(s,o)}}async function cf(r){if(sa(r))for(const e of r.da)await e(!0)}async function Sc(r){for(const e of r.da)await e(!1)}function QE(r,e){const n=xe(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),tg(n)?eg(n):Co(n).O_()&&Jp(n,e))}function Zp(r,e){const n=xe(r),s=Co(n);n.Ia.delete(e),s.O_()&&$E(n,e),n.Ia.size===0&&(s.O_()?s.L_():sa(n)&&n.Ra.set("Unknown"))}function Jp(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Co(r).Y_(e)}function $E(r,e){r.Va.Ue(e),Co(r).Z_(e)}function eg(r){r.Va=new TR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),Co(r).start(),r.Ra.ua()}function tg(r){return sa(r)&&!Co(r).x_()&&r.Ia.size>0}function sa(r){return xe(r).Ea.size===0}function XE(r){r.Va=void 0}async function I5(r){r.Ra.set("Online")}async function N5(r){r.Ia.forEach(((e,n)=>{Jp(r,e)}))}async function D5(r,e){XE(r),tg(r)?(r.Ra.ha(e),eg(r)):r.Ra.set("Unknown")}async function O5(r,e,n){if(r.Ra.set("Online"),e instanceof kE&&e.state===2&&e.cause)try{await(async function(o,c){const f=c.cause;for(const m of c.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))})(r,e)}catch(s){he(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await jh(r,s)}else if(e instanceof gh?r.Va.Ze(e):e instanceof ME?r.Va.st(e):r.Va.tt(e),!n.isEqual(Se.min()))try{const s=await GE(r.localStore);n.compareTo(s)>=0&&await(function(c,f){const m=c.Va.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const b=c.Ia.get(y);b&&c.Ia.set(y,b.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const b=c.Ia.get(p);if(!b)return;c.Ia.set(p,b.withResumeToken(Yt.EMPTY_BYTE_STRING,b.snapshotVersion)),$E(c,p);const x=new Gr(b.target,p,y,b.sequenceNumber);Jp(c,x)})),c.remoteSyncer.applyRemoteEvent(m)})(r,n)}catch(s){he(Js,"Failed to raise snapshot:",s),await jh(r,s)}}async function jh(r,e,n){if(!Ao(e))throw e;r.Ea.add(1),await Sc(r),r.Ra.set("Offline"),n||(n=()=>GE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{he(Js,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await cf(r)}))}function WE(r,e){return e().catch((n=>jh(r,n,e)))}async function uf(r){const e=xe(r),n=ns(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Up;for(;M5(e);)try{const o=await m5(e.localStore,s);if(o===null){e.Ta.length===0&&n.L_();break}s=o.batchId,k5(e,o)}catch(o){await jh(e,o)}ZE(e)&&JE(e)}function M5(r){return sa(r)&&r.Ta.length<10}function k5(r,e){r.Ta.push(e);const n=ns(r);n.O_()&&n.X_&&n.ea(e.mutations)}function ZE(r){return sa(r)&&!ns(r).x_()&&r.Ta.length>0}function JE(r){ns(r).start()}async function P5(r){ns(r).ra()}async function V5(r){const e=ns(r);for(const n of r.Ta)e.ea(n.mutations)}async function j5(r,e,n){const s=r.Ta.shift(),o=Gp.from(s,e,n);await WE(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await uf(r)}async function L5(r,e){e&&ns(r).X_&&await(async function(s,o){if((function(f){return _R(f)&&f!==Z.ABORTED})(o.code)){const c=s.Ta.shift();ns(s).B_(),await WE(s,(()=>s.remoteSyncer.rejectFailedWrite(c.batchId,o))),await uf(s)}})(r,e),ZE(r)&&JE(r)}async function o_(r,e){const n=xe(r);n.asyncQueue.verifyOperationInProgress(),he(Js,"RemoteStore received new credentials");const s=sa(n);n.Ea.add(3),await Sc(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await cf(n)}async function U5(r,e){const n=xe(r);e?(n.Ea.delete(2),await cf(n)):e||(n.Ea.add(2),await Sc(n),n.Ra.set("Unknown"))}function Co(r){return r.ma||(r.ma=(function(n,s,o){const c=xe(n);return c.sa(),new w5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:I5.bind(null,r),t_:N5.bind(null,r),r_:D5.bind(null,r),H_:O5.bind(null,r)}),r.da.push((async e=>{e?(r.ma.B_(),tg(r)?eg(r):r.Ra.set("Unknown")):(await r.ma.stop(),XE(r))}))),r.ma}function ns(r){return r.fa||(r.fa=(function(n,s,o){const c=xe(n);return c.sa(),new S5(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,o)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:P5.bind(null,r),r_:L5.bind(null,r),ta:V5.bind(null,r),na:j5.bind(null,r)}),r.da.push((async e=>{e?(r.fa.B_(),await uf(r)):(await r.fa.stop(),r.Ta.length>0&&(he(Js,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class ng{constructor(e,n,s,o,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,c){const f=Date.now()+s,m=new ng(e,n,f,o,c);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ig(r,e){if(sr("AsyncQueue",`${e}: ${r}`),Ao(r))return new ue(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class co{static emptySet(e){return new co(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ge.comparator(n.key,s.key):(n,s)=>ge.comparator(n.key,s.key),this.keyedMap=Fl(),this.sortedSet=new ct(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof co)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,c=s.getNext().key;if(!o.isEqual(c))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new co;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class l_{constructor(){this.ga=new ct(ge.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):be(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class vo{constructor(e,n,s,o,c,f,m,p,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=c,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,c){const f=[];return n.forEach((m=>{f.push({type:0,doc:m})})),new vo(e,n,co.emptySet(n),f,s,o,!0,!1,c)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class z5{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class B5{constructor(){this.queries=c_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=xe(n),c=o.queries;o.queries=c_(),c.forEach(((f,m)=>{for(const p of m.Sa)p.onError(s)}))})(this,new ue(Z.ABORTED,"Firestore shutting down"))}}function c_(){return new ra((r=>_E(r)),nf)}async function eb(r,e){const n=xe(r);let s=3;const o=e.query;let c=n.queries.get(o);c?!c.ba()&&e.Da()&&(s=2):(c=new z5,s=e.Da()?0:1);try{switch(s){case 0:c.wa=await n.onListen(o,!0);break;case 1:c.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=ig(f,`Initialization of query '${to(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,c),c.Sa.push(e),e.va(n.onlineState),c.wa&&e.Fa(c.wa)&&rg(n)}async function tb(r,e){const n=xe(r),s=e.query;let o=3;const c=n.queries.get(s);if(c){const f=c.Sa.indexOf(e);f>=0&&(c.Sa.splice(f,1),c.Sa.length===0?o=e.Da()?0:1:!c.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function q5(r,e){const n=xe(r);let s=!1;for(const o of e){const c=o.query,f=n.queries.get(c);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&rg(n)}function F5(r,e,n){const s=xe(r),o=s.queries.get(e);if(o)for(const c of o.Sa)c.onError(n);s.queries.delete(e)}function rg(r){r.Ca.forEach((e=>{e.next()}))}var cp,u_;(u_=cp||(cp={})).Ma="default",u_.Cache="cache";class nb{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==cp.Cache}}/**
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
 */class ib{constructor(e){this.key=e}}class rb{constructor(e){this.key=e}}class H5{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Pe(),this.mutatedKeys=Pe(),this.eu=EE(e),this.tu=new co(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new l_,o=n?n.tu:this.tu;let c=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((b,x)=>{const S=o.get(b),D=rf(this.query,x)?x:null,j=!!S&&this.mutatedKeys.has(S.key),z=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let H=!1;S&&D?S.data.isEqual(D.data)?j!==z&&(s.track({type:3,doc:D}),H=!0):this.su(S,D)||(s.track({type:2,doc:D}),H=!0,(p&&this.eu(D,p)>0||y&&this.eu(D,y)<0)&&(m=!0)):!S&&D?(s.track({type:0,doc:D}),H=!0):S&&!D&&(s.track({type:1,doc:S}),H=!0,(p||y)&&(m=!0)),H&&(D?(f=f.add(D),c=z?c.add(b):c.delete(b)):(f=f.delete(b),c=c.delete(b)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const b=this.query.limitType==="F"?f.last():f.first();f=f.delete(b.key),c=c.delete(b.key),s.track({type:1,doc:b})}return{tu:f,iu:s,Cs:m,mutatedKeys:c}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const c=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((b,x)=>(function(D,j){const z=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Rt:H})}};return z(D)-z(j)})(b.type,x.type)||this.eu(b.doc,x.doc))),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],p=this.Xa.size===0&&this.current&&!o?1:0,y=p!==this.Za;return this.Za=p,f.length!==0||y?{snapshot:new vo(this.query,e.tu,c,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new l_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return e.forEach((s=>{this.Xa.has(s)||n.push(new rb(s))})),this.Xa.forEach((s=>{e.has(s)||n.push(new ib(s))})),n}cu(e){this.Ya=e.Qs,this.Xa=Pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const sg="SyncEngine";class G5{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Y5{constructor(e){this.key=e,this.hu=!1}}class K5{constructor(e,n,s,o,c,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=c,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ra((m=>_E(m)),nf),this.Iu=new Map,this.Eu=new Set,this.du=new ct(ge.comparator),this.Au=new Map,this.Ru=new Qp,this.Vu={},this.mu=new Map,this.fu=yo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Q5(r,e,n=!0){const s=ub(r);let o;const c=s.Tu.get(e);return c?(s.sharedClientState.addLocalQueryTarget(c.targetId),o=c.view.lu()):o=await sb(s,e,n,!0),o}async function $5(r,e){const n=ub(r);await sb(n,e,!0,!1)}async function sb(r,e,n,s){const o=await p5(r.localStore,_i(e)),c=o.targetId,f=r.sharedClientState.addLocalQueryTarget(c,n);let m;return s&&(m=await X5(r,e,c,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&QE(r.remoteStore,o),m}async function X5(r,e,n,s,o){r.pu=(x,S,D)=>(async function(z,H,$,ie){let ne=H.view.ru($);ne.Cs&&(ne=await n_(z.localStore,H.query,!1).then((({documents:V})=>H.view.ru(V,ne))));const ce=ie&&ie.targetChanges.get(H.targetId),oe=ie&&ie.targetMismatches.get(H.targetId)!=null,pe=H.view.applyChanges(ne,z.isPrimaryClient,ce,oe);return f_(z,H.targetId,pe.au),pe.snapshot})(r,x,S,D);const c=await n_(r.localStore,e,!0),f=new H5(e,c.Qs),m=f.ru(c.documents),p=wc.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);f_(r,n,y.au);const b=new G5(e,n,f);return r.Tu.set(e,b),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),y.snapshot}async function W5(r,e,n){const s=xe(r),o=s.Tu.get(e),c=s.Iu.get(o.targetId);if(c.length>1)return s.Iu.set(o.targetId,c.filter((f=>!nf(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await op(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Zp(s.remoteStore,o.targetId),up(s,o.targetId)})).catch(xo)):(up(s,o.targetId),await op(s.localStore,o.targetId,!0))}async function Z5(r,e){const n=xe(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Zp(n.remoteStore,s.targetId))}async function J5(r,e,n){const s=aC(r);try{const o=await(function(f,m){const p=xe(f),y=it.now(),b=m.reduce(((D,j)=>D.add(j.key)),Pe());let x,S;return p.persistence.runTransaction("Locally write mutations","readwrite",(D=>{let j=ar(),z=Pe();return p.Ns.getEntries(D,b).next((H=>{j=H,j.forEach((($,ie)=>{ie.isValidDocument()||(z=z.add($))}))})).next((()=>p.localDocuments.getOverlayedDocuments(D,j))).next((H=>{x=H;const $=[];for(const ie of m){const ne=mR(ie,x.get(ie.key).overlayedDocument);ne!=null&&$.push(new ss(ie.key,ne,hE(ne.value.mapValue),Kn.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,$,m)})).next((H=>{S=H;const $=H.applyToLocalDocumentSet(x,z);return p.documentOverlayCache.saveOverlays(D,H.batchId,$)}))})).then((()=>({batchId:S.batchId,changes:TE(x)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let y=f.Vu[f.currentUser.toKey()];y||(y=new ct(ke)),y=y.insert(m,p),f.Vu[f.currentUser.toKey()]=y})(s,o.batchId,n),await xc(s,o.changes),await uf(s.remoteStore)}catch(o){const c=ig(o,"Failed to persist write");n.reject(c)}}async function ab(r,e){const n=xe(r);try{const s=await f5(n.localStore,e);e.targetChanges.forEach(((o,c)=>{const f=n.Au.get(c);f&&(He(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?He(f.hu,14607):o.removedDocuments.size>0&&(He(f.hu,42227),f.hu=!1))})),await xc(n,s,e)}catch(s){await xo(s)}}function h_(r,e,n){const s=xe(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach(((c,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=xe(f);p.onlineState=m;let y=!1;p.queries.forEach(((b,x)=>{for(const S of x.Sa)S.va(m)&&(y=!0)})),y&&rg(p)})(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function eC(r,e,n){const s=xe(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),c=o&&o.key;if(c){let f=new ct(ge.comparator);f=f.insert(c,Zt.newNoDocument(c,Se.min()));const m=Pe().add(c),p=new of(Se.min(),new Map,new ct(ke),f,m);await ab(s,p),s.du=s.du.remove(c),s.Au.delete(e),ag(s)}else await op(s.localStore,e,!1).then((()=>up(s,e,n))).catch(xo)}async function tC(r,e){const n=xe(r),s=e.batch.batchId;try{const o=await h5(n.localStore,e);lb(n,s,null),ob(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await xc(n,o)}catch(o){await xo(o)}}async function nC(r,e,n){const s=xe(r);try{const o=await(function(f,m){const p=xe(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let b;return p.mutationQueue.lookupMutationBatch(y,m).next((x=>(He(x!==null,37113),b=x.keys(),p.mutationQueue.removeMutationBatch(y,x)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,b,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,b))).next((()=>p.localDocuments.getDocuments(y,b)))}))})(s.localStore,e);lb(s,e,n),ob(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await xc(s,o)}catch(o){await xo(o)}}function ob(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function lb(r,e,n){const s=xe(r);let o=s.Vu[s.currentUser.toKey()];if(o){const c=o.get(e);c&&(n?c.reject(n):c.resolve(),o=o.remove(e)),s.Vu[s.currentUser.toKey()]=o}}function up(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach((s=>{r.Ru.containsKey(s)||cb(r,s)}))}function cb(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Zp(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),ag(r))}function f_(r,e,n){for(const s of n)s instanceof ib?(r.Ru.addReference(s.key,e),iC(r,s)):s instanceof rb?(he(sg,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||cb(r,s.key)):be(19791,{wu:s})}function iC(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(he(sg,"New document in limbo: "+n),r.Eu.add(s),ag(r))}function ag(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new ge(nt.fromString(e)),s=r.fu.next();r.Au.set(s,new Y5(n)),r.du=r.du.insert(n,s),QE(r.remoteStore,new Gr(_i(tf(n.path)),s,"TargetPurposeLimboResolution",Zh.ce))}}async function xc(r,e,n){const s=xe(r),o=[],c=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,n).then((y=>{if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:n?.targetChanges.get(p.targetId)?.current;s.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Xp.As(p.targetId,y);c.push(b)}})))})),await Promise.all(f),s.Pu.H_(o),await(async function(p,y){const b=xe(p);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>ee.forEach(y,(S=>ee.forEach(S.Es,(D=>b.persistence.referenceDelegate.addReference(x,S.targetId,D))).next((()=>ee.forEach(S.ds,(D=>b.persistence.referenceDelegate.removeReference(x,S.targetId,D)))))))))}catch(x){if(!Ao(x))throw x;he(Wp,"Failed to update sequence numbers: "+x)}for(const x of y){const S=x.targetId;if(!x.fromCache){const D=b.Ms.get(S),j=D.snapshotVersion,z=D.withLastLimboFreeSnapshotVersion(j);b.Ms=b.Ms.insert(S,z)}}})(s.localStore,c))}async function rC(r,e){const n=xe(r);if(!n.currentUser.isEqual(e)){he(sg,"User change. New user:",e.toKey());const s=await HE(n.localStore,e);n.currentUser=e,(function(c,f){c.mu.forEach((m=>{m.forEach((p=>{p.reject(new ue(Z.CANCELLED,f))}))})),c.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xc(n,s.Ls)}}function sC(r,e){const n=xe(r),s=n.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const c=n.Iu.get(e);if(!c)return o;for(const f of c){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function ub(r){const e=xe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eC.bind(null,e),e.Pu.H_=q5.bind(null,e.eventManager),e.Pu.yu=F5.bind(null,e.eventManager),e}function aC(r){const e=xe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nC.bind(null,e),e}class Lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return u5(this.persistence,new o5,e.initialUser,this.serializer)}Cu(e){return new FE($p.mi,this.serializer)}Du(e){return new y5}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lh.provider={build:()=>new Lh};class oC extends Lh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){He(this.persistence.referenceDelegate instanceof Vh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new YR(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new FE((s=>Vh.mi(s,n)),this.serializer)}}class hp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>h_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rC.bind(null,this.syncEngine),await U5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new B5})()}createDatastore(e){const n=lf(e.databaseInfo.databaseId),s=(function(c){return new T5(c)})(e.databaseInfo);return(function(c,f,m,p){return new A5(c,f,m,p)})(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,o,c,f,m){return new C5(s,o,c,f,m)})(this.localStore,this.datastore,e.asyncQueue,(n=>h_(this.syncEngine,n,0)),(function(){return s_.v()?new s_:new v5})())}createSyncEngine(e,n){return(function(o,c,f,m,p,y,b){const x=new K5(o,c,f,m,p,y);return b&&(x.gu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const s=xe(n);he(Js,"RemoteStore shutting down."),s.Ea.add(5),await Sc(s),s.Aa.shutdown(),s.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}hp.provider={build:()=>new hp};/**
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
 */class hb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const is="FirestoreClient";class lC{constructor(e,n,s,o,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Wt.UNAUTHENTICATED,this.clientId=Lp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,(async f=>{he(is,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(he(is,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ig(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function jm(r,e){r.asyncQueue.verifyOperationInProgress(),he(is,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await HE(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function d_(r,e){r.asyncQueue.verifyOperationInProgress();const n=await cC(r);he(is,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>o_(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>o_(e.remoteStore,o))),r._onlineComponents=e}async function cC(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){he(is,"Using user provided OfflineComponentProvider");try{await jm(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;fo("Error using user provided cache. Falling back to memory cache: "+n),await jm(r,new Lh)}}else he(is,"Using default OfflineComponentProvider"),await jm(r,new oC(void 0));return r._offlineComponents}async function fb(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(he(is,"Using user provided OnlineComponentProvider"),await d_(r,r._uninitializedComponentsProvider._online)):(he(is,"Using default OnlineComponentProvider"),await d_(r,new hp))),r._onlineComponents}function uC(r){return fb(r).then((e=>e.syncEngine))}async function fp(r){const e=await fb(r),n=e.eventManager;return n.onListen=Q5.bind(null,e.syncEngine),n.onUnlisten=W5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Z5.bind(null,e.syncEngine),n}function hC(r,e,n={}){const s=new Xr;return r.asyncQueue.enqueueAndForget((async()=>(function(c,f,m,p,y){const b=new hb({next:S=>{b.Nu(),f.enqueueAndForget((()=>tb(c,x)));const D=S.docs.has(m);!D&&S.fromCache?y.reject(new ue(Z.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&p&&p.source==="server"?y.reject(new ue(Z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),x=new nb(tf(m.path),b,{includeMetadataChanges:!0,qa:!0});return eb(c,x)})(await fp(r),r.asyncQueue,e,n,s))),s.promise}/**
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
 */function db(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const m_=new Map;/**
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
 */const mb="firestore.googleapis.com",p_=!0;class g_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ue(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mb,this.ssl=p_}else this.host=e.host,this.ssl=e.ssl??p_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HR)throw new ue(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=db(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hf{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new y3;switch(s.type){case"firstParty":return new b3(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=m_.get(n);s&&(he("ComponentProvider","Removing Datastore"),m_.delete(n),s.terminate())})(this),Promise.resolve()}}function fC(r,e,n,s={}){r=Yn(r,hf);const o=bo(e),c=r._getSettings(),f={...c,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&(Z_(`https://${m}`),J_("Firestore",!0)),c.host!==mb&&c.host!==m&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...c,host:m,ssl:o,emulatorOptions:s};if(!Qs(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,b;if(typeof s.mockUserToken=="string")y=s.mockUserToken,b=Wt.MOCK_USER;else{y=IS(s.mockUserToken,r._app?.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ue(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Wt(x)}r._authCredentials=new v3(new J2(y,b))}}/**
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
 */class aa{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new aa(this.firestore,e,this._query)}}class dt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}toJSON(){return{type:dt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(bc(n,dt._jsonSchema))return new dt(e,s||null,new ge(nt.fromString(n.referencePath)))}}dt._jsonSchemaVersion="firestore/documentReference/1.0",dt._jsonSchema={type:St("string",dt._jsonSchemaVersion),referencePath:St("string")};class Wr extends aa{constructor(e,n,s){super(e,n,tf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new ge(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function og(r,e,...n){if(r=Dt(r),eE("collection","path",e),r instanceof hf){const s=nt.fromString(e,...n);return Iv(s),new Wr(r,null,s)}{if(!(r instanceof dt||r instanceof Wr))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...n));return Iv(s),new Wr(r.firestore,null,s)}}function Xn(r,e,...n){if(r=Dt(r),arguments.length===1&&(e=Lp.newId()),eE("doc","path",e),r instanceof hf){const s=nt.fromString(e,...n);return Cv(s),new dt(r,null,new ge(s))}{if(!(r instanceof dt||r instanceof Wr))throw new ue(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(nt.fromString(e,...n));return Cv(s),new dt(r.firestore,r instanceof Wr?r.converter:null,new ge(s))}}/**
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
 */const y_="AsyncQueue";class v_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new YE(this,"async_queue_retry"),this._c=()=>{const s=Vm();s&&he(y_,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Vm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Vm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Xr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;he(y_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,sr("INTERNAL UNHANDLED ERROR: ",__(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=ng.createAndSchedule(this,e,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&be(47125,{Pc:__(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function __(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
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
 */function E_(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const c of s)if(c in o&&typeof o[c]=="function")return!0;return!1})(r,["next","error","complete"])}class ea extends hf{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new v_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new v_(e),this._firestoreClient=void 0,await e}}}function dC(r,e){const n=typeof r=="object"?r:i2(),s=typeof r=="string"?r:Dh,o=Ap(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=RS("firestore");c&&fC(o,...c)}return o}function lg(r){if(r._terminated)throw new ue(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||mC(r),r._firestoreClient}function mC(r){const e=r._freezeSettings(),n=(function(o,c,f,m){return new L3(o,c,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,db(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(r._databaseId,r._app?.options.appId||"",r._persistenceKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new lC(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(o){const c=o?._online.build();return{_offline:o?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(Yt.fromBase64String(e))}catch(n){throw new ue(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bc(e,Pn._jsonSchema))return Pn.fromBase64String(e.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:St("string",Pn._jsonSchemaVersion),bytes:St("string")};/**
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
 */class ff{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class df{constructor(e){this._methodName=e}}/**
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
 */class bi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bi._jsonSchemaVersion}}static fromJSON(e){if(bc(e,bi._jsonSchema))return new bi(e.latitude,e.longitude)}}bi._jsonSchemaVersion="firestore/geoPoint/1.0",bi._jsonSchema={type:St("string",bi._jsonSchemaVersion),latitude:St("number"),longitude:St("number")};/**
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
 */class Ti{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ti._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bc(e,Ti._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Ti(e.vectorValues);throw new ue(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ti._jsonSchemaVersion="firestore/vectorValue/1.0",Ti._jsonSchema={type:St("string",Ti._jsonSchemaVersion),vectorValues:St("object")};/**
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
 */const pC=/^__.*__$/;class gC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new Tc(e,this.data,n,this.fieldTransforms)}}class pb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ss(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gb(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ac:r})}}class cg{constructor(e,n,s,o,c,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,c===void 0&&this.Rc(),this.fieldTransforms=c||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new cg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){const n=this.path?.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Uh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(gb(this.Ac)&&pC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class yC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||lf(e)}Cc(e,n,s,o=!1){return new cg({Ac:e,methodName:n,Dc:s,path:Gt.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(r){const e=r._freezeSettings(),n=lf(r._databaseId);return new yC(r._databaseId,!!e.ignoreUndefinedProperties,n)}function yb(r,e,n,s,o,c={}){const f=r.Cc(c.merge||c.mergeFields?2:0,e,n,o);hg("Data must be an object, but it was:",f,s);const m=vb(s,f);let p,y;if(c.merge)p=new En(f.fieldMask),y=f.fieldTransforms;else if(c.mergeFields){const b=[];for(const x of c.mergeFields){const S=dp(e,x,n);if(!f.contains(S))throw new ue(Z.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Eb(b,S)||b.push(S)}p=new En(b),y=f.fieldTransforms.filter((x=>p.covers(x.field)))}else p=null,y=f.fieldTransforms;return new gC(new un(m),p,y)}class pf extends df{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pf}}class ug extends df{_toFieldTransform(e){return new uR(e.path,new cc)}isEqual(e){return e instanceof ug}}function vC(r,e,n,s){const o=r.Cc(1,e,n);hg("Data must be an object, but it was:",o,s);const c=[],f=un.empty();rs(s,((p,y)=>{const b=fg(e,p,n);y=Dt(y);const x=o.yc(b);if(y instanceof pf)c.push(b);else{const S=Ac(y,x);S!=null&&(c.push(b),f.set(b,S))}}));const m=new En(c);return new pb(f,m,o.fieldTransforms)}function _C(r,e,n,s,o,c){const f=r.Cc(1,e,n),m=[dp(e,s,n)],p=[o];if(c.length%2!=0)throw new ue(Z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<c.length;S+=2)m.push(dp(e,c[S])),p.push(c[S+1]);const y=[],b=un.empty();for(let S=m.length-1;S>=0;--S)if(!Eb(y,m[S])){const D=m[S];let j=p[S];j=Dt(j);const z=f.yc(D);if(j instanceof pf)y.push(D);else{const H=Ac(j,z);H!=null&&(y.push(D),b.set(D,H))}}const x=new En(y);return new pb(b,x,f.fieldTransforms)}function EC(r,e,n,s=!1){return Ac(n,r.Cc(s?4:3,e))}function Ac(r,e){if(_b(r=Dt(r)))return hg("Unsupported field value:",e,r),vb(r,e);if(r instanceof df)return(function(s,o){if(!gb(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(o);c&&o.fieldTransforms.push(c)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(s,o){const c=[];let f=0;for(const m of s){let p=Ac(m,o.wc(f));p==null&&(p={nullValue:"NULL_VALUE"}),c.push(p),f++}return{arrayValue:{values:c}}})(r,e)}return(function(s,o){if((s=Dt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=it.fromDate(s);return{timestampValue:Ph(o.serializer,c)}}if(s instanceof it){const c=new it(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ph(o.serializer,c)}}if(s instanceof bi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pn)return{bytesValue:PE(o.serializer,s._byteString)};if(s instanceof dt){const c=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(c))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:Kp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ti)return(function(f,m){return{mapValue:{fields:{[cE]:{stringValue:uE},[Oh]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return Hp(m.serializer,y)}))}}}}}})(s,o);throw o.Sc(`Unsupported field value: ${Wh(s)}`)})(r,e)}function vb(r,e){const n={};return iE(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(r,((s,o)=>{const c=Ac(o,e.mc(s));c!=null&&(n[s]=c)})),{mapValue:{fields:n}}}function _b(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof bi||r instanceof Pn||r instanceof dt||r instanceof df||r instanceof Ti)}function hg(r,e,n){if(!_b(n)||!tE(n)){const s=Wh(n);throw s==="an object"?e.Sc(r+" a custom object"):e.Sc(r+" "+s)}}function dp(r,e,n){if((e=Dt(e))instanceof ff)return e._internalPath;if(typeof e=="string")return fg(r,e);throw Uh("Field path arguments must be of type string or ",r,!1,void 0,n)}const bC=new RegExp("[~\\*/\\[\\]]");function fg(r,e,n){if(e.search(bC)>=0)throw Uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new ff(...e.split("."))._internalPath}catch{throw Uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Uh(r,e,n,s,o){const c=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(c||f)&&(p+=" (found",c&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ue(Z.INVALID_ARGUMENT,m+r+p)}function Eb(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class bb{constructor(e,n,s,o,c){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TC extends bb{data(){return super.data()}}function gf(r,e){return typeof e=="string"?fg(r,e):e instanceof ff?e._internalPath:e._delegate._internalPath}/**
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
 */function wC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ue(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dg{}class Tb extends dg{}function SC(r,e,...n){let s=[];e instanceof dg&&s.push(e),s=s.concat(n),(function(c){const f=c.filter((p=>p instanceof mg)).length,m=c.filter((p=>p instanceof yf)).length;if(f>1||f>0&&m>0)throw new ue(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class yf extends Tb{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new yf(e,n,s)}_apply(e){const n=this._parse(e);return wb(e._query,n),new aa(e.firestore,e.converter,tp(e._query,n))}_parse(e){const n=mf(e.firestore);return(function(c,f,m,p,y,b,x){let S;if(y.isKeyField()){if(b==="array-contains"||b==="array-contains-any")throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${b}' queries on documentId().`);if(b==="in"||b==="not-in"){T_(x,b);const j=[];for(const z of x)j.push(b_(p,c,z));S={arrayValue:{values:j}}}else S=b_(p,c,x)}else b!=="in"&&b!=="not-in"&&b!=="array-contains-any"||T_(x,b),S=EC(m,f,x,b==="in"||b==="not-in");return wt.create(y,b,S)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xC(r,e,n){const s=e,o=gf("where",r);return yf._create(o,s,n)}class mg extends dg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new mg(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(o,c){let f=o;const m=c.getFlattenedFilters();for(const p of m)wb(f,p),f=tp(f,p)})(e._query,n),new aa(e.firestore,e.converter,tp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pg extends Tb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pg(e,n)}_apply(e){const n=(function(o,c,f){if(o.startAt!==null)throw new ue(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new lc(c,f)})(e._query,this._field,this._direction);return new aa(e.firestore,e.converter,(function(o,c){const f=o.explicitOrderBy.concat([c]);return new Ro(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(e._query,n))}}function AC(r,e="asc"){const n=e,s=gf("orderBy",r);return pg._create(s,n)}function b_(r,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new ue(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vE(e)&&n.indexOf("/")!==-1)throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(nt.fromString(n));if(!ge.isDocumentKey(s))throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return jv(r,new ge(s))}if(n instanceof dt)return jv(r,n._key);throw new ue(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wh(n)}.`)}function T_(r,e){if(!Array.isArray(r)||r.length===0)throw new ue(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wb(r,e){const n=(function(o,c){for(const f of o)for(const m of f.getFlattenedFilters())if(c.indexOf(m.op)>=0)return m.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class RC{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return rs(e,((o,c)=>{s[o]=this.convertValue(c,n)})),s}convertVectorValue(e){const n=e.fields?.[Oh].arrayValue?.values?.map((s=>yt(s.doubleValue)));return new Ti(n)}convertGeoPoint(e){return new bi(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ef(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(sc(e));default:return null}}convertTimestamp(e){const n=Jr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=nt.fromString(e);He(BE(s),9688,{name:e});const o=new ac(s.get(1),s.get(3)),c=new ge(s.popFirst(5));return o.isEqual(n)||sr(`Document ${c} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),c}}/**
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
 */function Sb(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}class Gl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ks extends bb{constructor(e,n,s,o,c,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ks._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ks._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ks._jsonSchema={type:St("string",Ks._jsonSchemaVersion),bundleSource:St("string","DocumentSnapshot"),bundleName:St("string"),bundle:St("string")};class yh extends Ks{data(e={}){return super.data(e)}}class uo{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Gl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new yh(this._firestore,this._userDataWriter,s.key,s,new Gl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Gl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>c||m.type!==3)).map((m=>{const p=new yh(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Gl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,b=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),b=f.indexOf(m.doc.key)),{type:CC(m.type),doc:p,oldIndex:y,newIndex:b}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ue(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:r})}}/**
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
 */function ta(r){r=Yn(r,dt);const e=Yn(r.firestore,ea);return hC(lg(e),r._key).then((n=>Ib(e,r,n)))}uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:St("string",uo._jsonSchemaVersion),bundleSource:St("string","QuerySnapshot"),bundleName:St("string"),bundle:St("string")};class xb extends RC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function zh(r,e,n){r=Yn(r,dt);const s=Yn(r.firestore,ea),o=Sb(r.converter,e,n);return gg(s,[yb(mf(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,Kn.none())])}function Ab(r,e,n,...s){r=Yn(r,dt);const o=Yn(r.firestore,ea),c=mf(o);let f;return f=typeof(e=Dt(e))=="string"||e instanceof ff?_C(c,"updateDoc",r._key,e,n,s):vC(c,"updateDoc",r._key,e),gg(o,[f.toMutation(r._key,Kn.exists(!0))])}function Rb(r,e){const n=Yn(r.firestore,ea),s=Xn(r),o=Sb(r.converter,e);return gg(n,[yb(mf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Kn.exists(!1))]).then((()=>s))}function Cb(r,...e){r=Dt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||E_(e[s])||(n=e[s++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(E_(e[s])){const p=e[s];e[s]=p.next?.bind(p),e[s+1]=p.error?.bind(p),e[s+2]=p.complete?.bind(p)}let c,f,m;if(r instanceof dt)f=Yn(r.firestore,ea),m=tf(r._key.path),c={next:p=>{e[s]&&e[s](Ib(f,r,p))},error:e[s+1],complete:e[s+2]};else{const p=Yn(r,aa);f=Yn(p.firestore,ea),m=p._query;const y=new xb(f);c={next:b=>{e[s]&&e[s](new uo(f,y,p,b))},error:e[s+1],complete:e[s+2]},wC(r._query)}return(function(y,b,x,S){const D=new hb(S),j=new nb(b,D,x);return y.asyncQueue.enqueueAndForget((async()=>eb(await fp(y),j))),()=>{D.Nu(),y.asyncQueue.enqueueAndForget((async()=>tb(await fp(y),j)))}})(lg(f),m,o,c)}function gg(r,e){return(function(s,o){const c=new Xr;return s.asyncQueue.enqueueAndForget((async()=>J5(await uC(s),o,c))),c.promise})(lg(r),e)}function Ib(r,e,n){const s=n.docs.get(e._key),o=new xb(r);return new Ks(r,o,e._key,s,new Gl(n.hasPendingWrites,n.fromCache),e.converter)}function Bh(){return new ug("serverTimestamp")}(function(e,n=!0){(function(o){So=o})(To),ho(new $s("firestore",((s,{instanceIdentifier:o,options:c})=>{const f=s.getProvider("app").getImmediate(),m=new ea(new _3(s.getProvider("auth-internal")),new T3(f,s.getProvider("app-check-internal")),(function(y,b){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ac(y.options.projectId,b)})(f,o),f);return c={useFetchStreams:n,...c},m._setSettings(c),m}),"PUBLIC").setMultipleInstances(!0)),Qr(Sv,xv,e),Qr(Sv,xv,"esm2020")})();var IC="firebase",NC="12.1.0";/**
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
 */Qr(IC,NC,"app");const DC={apiKey:"AIzaSyAwNVpI9pwh7lCsh1C53JH8w991gmeUbKI",authDomain:"goldinc-7ed2f.firebaseapp.com",projectId:"goldinc-7ed2f",storageBucket:"goldinc-7ed2f.firebasestorage.app",messagingSenderId:"336738370359",appId:"1:336738370359:web:27be8e3965dac5215dd0b2"},OC=n2(DC),Vn=p3(),bn=dC(OC),qh=300,MC=[{id:1,name:"BEGINNERS PLAN",profitPercent:5,min:200,max:19900,duration:"7 days",description:"Perfect for beginners starting with gold investment"},{id:2,name:"MASTERS PLAN",profitPercent:30,min:2e4,max:99999,duration:"14 days",description:"Ideal for consistent wealth accumulation"},{id:3,name:"PREMIUM PLAN",profitPercent:50,min:1e6,max:1/0,duration:"30 days",description:"For premium investors building a substantial portfolio"}],Nb=[{type:"USDT (ERC20)",address:"0x2F549207342b44ADF00d25893580b23902f3137B"},{type:"TRON",address:"TNyKcnXh9GhANHaCgQyRdnXGmMc72ykQFC"},{type:"DOGECOIN",address:"D7whXjWwZzsXqnfZdy3rSkBtvTbyefr4d4"}],kC=({user:r})=>{const e=Eo(),[n,s]=L.useState({}),[o,c]=L.useState(!0),[f,m]=L.useState(null);return L.useEffect(()=>{(async()=>{if(r)try{const y=Xn(bn,"users",r.uid),b=await ta(y);b.exists()?s(b.data()):m("Profile data not found.")}catch(y){m("Failed to fetch profile data."),console.error(y)}c(!1)})()},[r]),o?g.jsx("div",{className:"loading",children:"Loading profile..."}):f?g.jsx("div",{className:"error-message",children:f}):g.jsxs("div",{className:"profile-container",children:[g.jsx("h2",{className:"section-title",children:"User Profile"}),g.jsxs("div",{className:"profile-grid",children:[g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Full Name:"})," ",g.jsx("span",{children:n.fullName||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Email:"})," ",g.jsx("span",{children:r.email})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Username:"})," ",g.jsx("span",{children:n.username||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Phone:"})," ",g.jsx("span",{children:n.phone||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Location:"})," ",g.jsx("span",{children:n.location||"N/A"})]}),g.jsxs("div",{className:"profile-card",children:[g.jsx("strong",{children:"Occupation:"})," ",g.jsx("span",{children:n.occupation||"N/A"})]})]}),g.jsxs("div",{className:"bio-card",children:[g.jsx("strong",{children:"Bio:"}),g.jsx("p",{children:n.bio||"No bio provided."})]}),g.jsx("button",{className:"btn-primary",onClick:()=>e("/edit-profile"),children:"Edit Profile"})]})},PC=({user:r})=>{const[e,n]=L.useState(null),[s,o]=L.useState(!1),c=async()=>{if(!r||!r.email){n("error");return}o(!0),n(null);try{await t6(Vn,r.email),n("success")}catch(f){console.error("Password reset error:",f),n("error")}finally{o(!1)}};return g.jsxs("div",{className:"settings-container",children:[g.jsxs("div",{className:"settings-card",children:[g.jsx("h2",{className:"section-title",children:"Account Settings"}),g.jsxs("div",{className:"setting-item",children:[g.jsx("h3",{children:"Password & Security"}),g.jsx("p",{children:"Request a password reset link to be sent to your email."}),g.jsx("button",{className:"btn-primary",onClick:c,disabled:s,children:s?"Sending...":"Reset Password"}),e==="success"&&g.jsxs("span",{className:"success-message",children:[g.jsx(so,{style:{marginRight:"5px"}})," Password reset email sent! Check your inbox."]}),e==="error"&&g.jsxs("span",{className:"error-message",children:[g.jsx(wp,{style:{marginRight:"5px"}})," Failed to send reset email. Please try again."]})]})]}),g.jsxs("div",{className:"settings-card",children:[g.jsx("h2",{className:"section-title",children:"Notification Preferences"}),g.jsxs("div",{className:"setting-item",children:[g.jsx("p",{children:"Manage how you receive updates and alerts."}),g.jsx("button",{className:"btn-secondary",onClick:()=>alert("Notification settings update coming soon!"),children:"Configure Notifications"})]})]})]})},VC=({user:r,updateBalance:e})=>{const[n,s]=L.useState(null),[o,c]=L.useState(""),[f,m]=L.useState(null),[p,y]=L.useState(!1),[b,x]=L.useState(!1),[S,D]=L.useState(!1),[j,z]=L.useState(null),[H,$]=L.useState(0),[ie,ne]=L.useState(!1),ce=N=>{s(N),c(""),m(null),y(!1),x(!1),D(!1),z(null),$(1)},oe=()=>{const N=parseFloat(o);if(isNaN(N)||N<=0){z("Please enter a valid amount greater than 0");return}if(N<n.min||n.max!==1/0&&N>n.max){z(`Please enter a valid amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`);return}z(null),$(2)},pe=N=>{m(N),$(3)},V=()=>{y(!0),$(4)},A=async()=>{if(!(!n||!o)){z(null);try{const N=parseFloat(o),k=n.profitPercent,I=(N*k/100).toFixed(0),rt={userId:r.uid,type:"deposit",amount:N,profitPercent:`${k}%`,plan:n.name,interest:`$${I}`,duration:n.duration,description:n.description,status:"completed",timestamp:Bh()};await Rb(og(bn,"transactions"),rt);const Be=Xn(bn,"users",r.uid),Q=await ta(Be);if(Q.exists()){const se=Q.data().balance||0,de=Q.data().goldBalance||0,Oe=parseFloat(I)/qh;await Ab(Be,{balance:se+N,goldBalance:de+Oe}),e(se+N,de+Oe)}D(!0),$(0),s(null),y(!1),x(!1)}catch(N){z("Failed to process transaction. Please try again."),console.error(N)}}},R=async N=>{N.target.files[0]&&(x(!0),await A())},O=()=>{f?.address&&(navigator.clipboard.writeText(f.address),ne(!0),setTimeout(()=>ne(!1),2e3))};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Purchase Gold"}),j&&g.jsxs("span",{className:"error-message",children:[g.jsx(wp,{style:{marginRight:"5px"}})," ",j]}),S?g.jsxs("div",{children:[g.jsx("h3",{children:"Transaction Successful!"}),g.jsxs("span",{className:"success-message",children:[g.jsx(so,{style:{marginRight:"5px"}})," Your deposit has been processed successfully!"]}),g.jsx("button",{className:"btn-secondary",onClick:()=>D(!1),children:"Back to Plans"})]}):H===0?g.jsxs(g.Fragment,{children:[g.jsx("p",{children:"Select a gold plan to purchase:"}),g.jsx("div",{className:"gold-plans-container",children:MC.map(N=>g.jsxs("div",{className:`gold-plan-card ${n?.id===N.id?"selected-plan":""}`,onClick:()=>ce(N),children:[g.jsx(Y1,{size:36,color:"#D4AF37"}),g.jsx("h3",{className:"plan-title",children:N.name}),g.jsxs("p",{className:"plan-price",children:["$",N.min,"  - ",N.max===1/0?"and above":N.max," USD"]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Profit:"})," ",N.profitPercent,"%"]}),g.jsxs("p",{className:"plan-description",children:[g.jsx("strong",{children:"Duration:"})," ",N.duration]}),g.jsx("p",{className:"plan-description",children:N.description})]},N.id))})]}):H===1?g.jsxs(g.Fragment,{children:[g.jsxs("h3",{children:["Selected Plan: ",n.name]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"deposit-amount",children:"Enter Deposit Amount:"}),g.jsx("input",{id:"deposit-amount",type:"number",value:o,onChange:N=>c(N.target.value),placeholder:`Enter amount between $${n.min} and $${n.max===1/0?"unlimited":n.max}`})]}),g.jsx("button",{className:"btn-primary",onClick:oe,children:"Proceed"}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(0),children:"Back"})]}):H===2?g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Select a Wallet"}),g.jsx("div",{className:"gold-plans-container",children:Nb.map((N,k)=>g.jsxs("div",{className:`gold-plan-card ${f?.type===N.type?"selected-plan":""}`,onClick:()=>pe(N),children:[g.jsx(Y1,{size:36,color:"#D4AF37"}),g.jsx("h3",{className:"plan-title",children:N.type})]},k))}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(1),children:"Back"})]}):H===3?g.jsxs(g.Fragment,{children:[g.jsxs("h3",{children:["Selected Plan: ",n.name]}),g.jsxs("p",{children:["Amount: $",o]}),g.jsxs("p",{children:["Please send exactly ",g.jsxs("strong",{children:["$",o]})," to the following address:"]}),g.jsxs("div",{className:"deposit-address",children:[g.jsx("p",{children:g.jsxs("strong",{children:[f.type," Address:"]})}),g.jsx("p",{children:f.address}),g.jsxs("button",{className:"btn-secondary",onClick:O,children:[ie?"Copied!":"Copy Address"," ",g.jsx(nS,{style:{marginLeft:"5px"}})]})]}),g.jsx("p",{children:"After completing your transfer, click the button below to confirm."}),g.jsx("button",{className:"btn-primary",onClick:V,children:"I've Sent the Payment"}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(2),children:"Choose Different Wallet"})]}):H===4?g.jsxs(g.Fragment,{children:[g.jsx("h3",{children:"Confirm Deposit"}),g.jsx("p",{children:"Upload a screenshot of the transaction (for verification, not stored):"}),g.jsx("input",{type:"file",accept:"image/*",onChange:R}),g.jsx("button",{className:"btn-secondary",onClick:()=>$(3),children:"Back"})]}):null]})},jC=({user:r,balance:e,goldBalance:n,updateBalance:s})=>{const[o,c]=L.useState(""),[f,m]=L.useState("usd"),[p,y]=L.useState(""),[b,x]=L.useState(!1),[S,D]=L.useState({text:"",type:""}),j=async()=>{if(D({text:"",type:""}),!o||!p){D({text:"Please select a wallet and enter an amount",type:"error"});return}const z=parseFloat(o);if(isNaN(z)||z<=0){D({text:"Please enter a valid amount",type:"error"});return}const H=f==="usd"?50:1;if(z<H){D({text:`Minimum withdrawal is $${H} USD or ${H}g Gold`,type:"error"});return}if(f==="usd"&&z>e){D({text:"Insufficient USD balance",type:"error"});return}if(f==="gold"&&z>n){D({text:"Insufficient gold balance",type:"error"});return}x(!0);try{const $=f==="usd"?z:z*qh,ie={userId:r.uid,type:"withdrawal",amount:$,profitPercent:f==="gold"?`${z}g`:"0g",status:"pending",walletType:p,timestamp:Bh()};await Rb(og(bn,"transactions"),ie);const ne=Xn(bn,"users",r.uid),ce=await ta(ne);if(ce.exists()){const oe=ce.data().balance||0,pe=ce.data().goldBalance||0;await Ab(ne,{balance:f==="usd"?oe-z:oe,goldBalance:f==="gold"?pe-z:pe}),s(f==="usd"?oe-z:oe,f==="gold"?pe-z:pe)}D({text:"Withdrawal request submitted successfully! It will be processed within 24 hours.",type:"success"}),c(""),y("")}catch($){console.error("Error processing withdrawal:",$),D({text:"Failed to process withdrawal. Please try again.",type:"error"})}finally{x(!1)}};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Withdraw Funds"}),g.jsx("div",{className:"balance-info",children:g.jsxs("p",{children:["Available Balance: ",g.jsxs("strong",{children:["$",e.toLocaleString()," USD"]})," | ",g.jsxs("strong",{children:[n.toFixed(2),"g Gold"]})]})}),g.jsxs("div",{className:"withdraw-form",children:[g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"withdraw-type",children:"Withdraw Type:"}),g.jsxs("select",{id:"withdraw-type",value:f,onChange:z=>{m(z.target.value),c(""),y("")},children:[g.jsx("option",{value:"usd",children:"USD"}),g.jsx("option",{value:"gold",children:"Gold"})]})]}),g.jsxs("div",{className:"form-group",children:[g.jsxs("label",{htmlFor:"withdraw-amount",children:["Amount to Withdraw ",f==="gold"?"(in grams)":"(in USD)",":"]}),g.jsx("input",{id:"withdraw-amount",type:"number",value:o,onChange:z=>c(z.target.value),placeholder:f==="usd"?"Enter USD amount":"Enter gold amount in grams"})]}),g.jsxs("div",{className:"form-group",children:[g.jsx("label",{htmlFor:"destination-wallet",children:"Destination Wallet:"}),g.jsxs("select",{id:"destination-wallet",value:p,onChange:z=>y(z.target.value),children:[g.jsx("option",{value:"",children:"Select a wallet"}),Nb.map((z,H)=>g.jsx("option",{value:z.type,children:z.type},H))]})]}),S.text&&g.jsxs("div",{className:S.type==="success"?"success-message":"error-message",children:[S.type==="success"?g.jsx(so,{style:{marginRight:"5px"}}):g.jsx(wp,{style:{marginRight:"5px"}}),S.text]}),g.jsx("button",{className:"btn-primary",onClick:j,disabled:b||!o||!p,children:b?"Processing...":"Request Withdrawal"})]}),g.jsxs("div",{className:"withdrawal-info",children:[g.jsx("h4",{children:"Withdrawal Information:"}),g.jsxs("ul",{children:[g.jsx("li",{children:"Withdrawals are processed within 24 hours"}),g.jsxs("li",{children:["Gold withdrawals are converted to USD at ~$",qh,"/g"]}),g.jsx("li",{children:"Minimum withdrawal: $50 USD or 1g Gold"}),g.jsx("li",{children:"Network fees may apply"})]})]})]})},LC=({user:r})=>{const[e,n]=L.useState([]),[s,o]=L.useState(!0),[c,f]=L.useState(null);L.useEffect(()=>{if(!r)return;const p=SC(og(bn,"transactions"),xC("userId","==",r.uid),AC("timestamp","desc")),y=Cb(p,b=>{const x=[];b.forEach(S=>{x.push({id:S.id,...S.data()})}),n(x),o(!1)},b=>{f("Failed to load transaction history."),console.error(b),o(!1)});return()=>y()},[r]);const m=p=>{switch(p){case"completed":return"status-completed";case"processing":return"status-processing";default:return"status-pending"}};return s?g.jsx("div",{className:"section-card",children:"Loading transaction history..."}):c?g.jsx("div",{className:"section-card error-message",children:c}):g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Transaction History"}),e.length===0?g.jsx("p",{children:"No transactions yet."}):g.jsx("div",{className:"table-container",children:g.jsxs("table",{className:"transactions-table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"Type"}),g.jsx("th",{children:"Amount"}),g.jsx("th",{children:"Profit/Output"}),g.jsx("th",{children:"Date"}),g.jsx("th",{children:"Status"})]})}),g.jsx("tbody",{children:e.map(p=>g.jsxs("tr",{children:[g.jsxs("td",{children:[p.type==="deposit"?g.jsx(G_,{className:"icon-deposit"}):g.jsx(H_,{className:"icon-withdraw"}),p.type.charAt(0).toUpperCase()+p.type.slice(1),p.plan&&` (${p.plan})`]}),g.jsxs("td",{children:["$",p.amount.toLocaleString()]}),g.jsx("td",{children:p.interest?`${p.interest} (${p.profitPercent})`:p.profitPercent||"N/A"}),g.jsx("td",{children:p.timestamp?.toDate().toLocaleString()}),g.jsx("td",{children:g.jsx("span",{className:`status-indicator ${m(p.status)}`,children:p.status.charAt(0).toUpperCase()+p.status.slice(1)})})]},p.id))})]})})]})},UC=({user:r})=>{const e=`https://yourwebsite.com/refer/${r.uid}`,[n,s]=L.useState(!1),o=()=>{navigator.clipboard.writeText(e),s(!0),setTimeout(()=>s(!1),2e3)};return g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Referral Program"}),g.jsx("p",{children:"Invite friends and earn rewards! Share your unique referral link."}),g.jsxs("div",{className:"referral-container",children:[g.jsx("strong",{children:"Your Referral Link:"}),g.jsx("p",{className:"referral-link",children:e}),g.jsx("button",{className:"btn-primary",onClick:o,children:n?"Copied!":"Copy Link"})]}),g.jsxs("div",{className:"referral-info",children:[g.jsx("h4",{children:"How It Works:"}),g.jsxs("ul",{children:[g.jsx("li",{children:"Share your link with friends"}),g.jsx("li",{children:"Earn 5% bonus on their first deposit"}),g.jsx("li",{children:"Track your referrals in your dashboard"})]})]})]})},zC=()=>{const r=Eo(),[e,n]=L.useState(null),[s,o]=L.useState(null),[c,f]=L.useState("dashboard"),[m,p]=L.useState(0),[y,b]=L.useState(0),[x,S]=L.useState(!1),[D,j]=L.useState(!0),[z,H]=L.useState(null);L.useEffect(()=>{const ce=I2(Vn,oe=>{if(oe){n(oe);const pe=Xn(bn,"users",oe.uid),V=Cb(pe,A=>{if(A.exists()){const R=A.data();o(R),p(R.balance||0),b(R.goldBalance||0),j(!1)}else H("User data not found."),j(!1)},A=>{H("Failed to load user data."),console.error(A),j(!1)});return()=>V()}else r("/login")});return()=>ce()},[r]);const $=(ce,oe)=>{p(ce),b(oe)},ie=async()=>{try{await a6(Vn),r("/login")}catch(ce){console.error("Logout error:",ce.message),H("Failed to logout. Please try again.")}};if(D)return g.jsx("div",{className:"loading",children:"Loading..."});if(z||!e||!s)return g.jsx("div",{className:"error-message",children:z||"Failed to load dashboard."});const ne=()=>{switch(c){case"dashboard":return g.jsxs("div",{className:"overview-container",children:[g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Account Balance"}),g.jsxs("p",{className:"metric",children:["$",m.toLocaleString()]}),g.jsx("p",{className:"subtext",children:"Available USD"})]}),g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Gold Holdings"}),g.jsxs("p",{className:"metric",children:[y.toFixed(2),"g"]}),g.jsx("p",{className:"subtext",children:"Pure Gold"})]}),g.jsxs("div",{className:"card",children:[g.jsx("h3",{children:"Total Value"}),g.jsxs("p",{className:"metric",children:["$",(m+y*qh).toLocaleString()]}),g.jsx("p",{className:"subtext",children:"Based on current gold prices"})]}),g.jsxs("div",{className:"section-card",children:[g.jsx("h2",{className:"section-title",children:"Recent Activity"}),g.jsxs("ul",{className:"activity-list",children:[g.jsxs("li",{children:[g.jsx(so,{className:"activity-icon"})," Account created ",g.jsx("span",{className:"activity-time",children:"1 week ago"})]}),m>0&&g.jsxs("li",{children:[g.jsx(so,{className:"activity-icon"})," Deposit of $",m.toLocaleString()," ",g.jsx("span",{className:"activity-time",children:"Recently"})]}),y>0&&g.jsxs("li",{children:[g.jsx(so,{className:"activity-icon"})," Purchased ",y.toFixed(2),"g of gold ",g.jsx("span",{className:"activity-time",children:"Recently"})]})]})]})]});case"deposit":return g.jsx(VC,{user:e,updateBalance:$});case"withdraw":return g.jsx(jC,{user:e,balance:m,goldBalance:y,updateBalance:$});case"history":return g.jsx(LC,{user:e});case"referral":return g.jsx(UC,{user:e});case"profile":return g.jsx(kC,{user:e});case"settings":return g.jsx(PC,{user:e});default:return null}};return g.jsxs("div",{className:"dashboard-container",children:[g.jsxs("div",{className:`sidebar ${x?"mobile-open":""}`,children:[g.jsxs("div",{className:"sidebar-header",children:[g.jsx(hS,{size:24,className:"sidebar-icon"}),g.jsx("h2",{className:"gold-text",children:"MyWallet"})]}),g.jsx("button",{className:"mobile-close-btn",onClick:()=>S(!1),children:g.jsx(lS,{})}),g.jsxs("ul",{className:"nav-list",children:[g.jsxs("li",{className:`nav-item ${c==="dashboard"?"nav-item-active":""}`,onClick:()=>{f("dashboard"),S(!1)},children:[g.jsx(Z4,{})," ",g.jsx("span",{children:"Dashboard"})]}),g.jsxs("li",{className:`nav-item ${c==="deposit"?"nav-item-active":""}`,onClick:()=>{f("deposit"),S(!1)},children:[g.jsx(G_,{})," ",g.jsx("span",{children:"Buy Gold"})]}),g.jsxs("li",{className:`nav-item ${c==="withdraw"?"nav-item-active":""}`,onClick:()=>{f("withdraw"),S(!1)},children:[g.jsx(H_,{})," ",g.jsx("span",{children:"Withdraw"})]}),g.jsxs("li",{className:`nav-item ${c==="history"?"nav-item-active":""}`,onClick:()=>{f("history"),S(!1)},children:[g.jsx(sS,{})," ",g.jsx("span",{children:"History"})]}),g.jsxs("li",{className:`nav-item ${c==="referral"?"nav-item-active":""}`,onClick:()=>{f("referral"),S(!1)},children:[g.jsx(cS,{})," ",g.jsx("span",{children:"Referral"})]}),g.jsxs("li",{className:`nav-item ${c==="profile"?"nav-item-active":""}`,onClick:()=>{f("profile"),S(!1)},children:[g.jsx(uS,{})," ",g.jsx("span",{children:"Profile"})]}),g.jsxs("li",{className:`nav-item ${c==="settings"?"nav-item-active":""}`,onClick:()=>{f("settings"),S(!1)},children:[g.jsx(tS,{})," ",g.jsx("span",{children:"Settings"})]})]}),g.jsxs("div",{className:"logout-btn",onClick:ie,children:[g.jsx(oS,{})," ",g.jsx("span",{children:"Logout"})]})]}),g.jsxs("div",{className:"main-content",children:[g.jsxs("div",{className:"header",children:[g.jsxs("div",{className:"header-left",children:[g.jsx("button",{className:"mobile-menu-btn",onClick:()=>S(!0),children:g.jsx(X4,{})}),g.jsx("h1",{className:"title",children:c==="dashboard"?"Dashboard":c==="deposit"?"Buy Gold":c.charAt(0).toUpperCase()+c.slice(1)})]}),g.jsxs("span",{className:"user-info",children:["Balance: ",g.jsxs("strong",{children:["$",m.toLocaleString()]})," | Gold: ",g.jsxs("strong",{children:[y.toFixed(2),"g"]})]})]}),g.jsx("div",{className:"content-area",children:ne()})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]})};function Db(r){return Je({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(r)}const BC=()=>{const[r,e]=L.useState(""),[n,s]=L.useState(""),[o,c]=L.useState(""),f=Eo(),m=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),p=D=>D&&typeof D.fullName=="string"&&D.fullName.trim().length>1&&Array.isArray(D.wallets)&&D.wallets.length>0,y=async D=>{try{const j=Xn(bn,"users",D.uid),z=await ta(j),H=z.exists()?z.data():{};p(H)?f("/dashboard"):f("/profile")}catch(j){console.error("Redirect error:",j.message),e("Failed to process user data. Try again.")}},b=async D=>{D.preventDefault();try{const z=(await i6(Vn,n,o)).user;await y(z)}catch(j){console.error("Login error:",j.code,j.message),e("Login failed. Check your credentials.")}},x=async()=>{const D=new gi;try{if(m)await q2(Vn,D);else{const z=(await U2(Vn,D)).user;await S(z)}}catch(j){console.error("Google login error:",j.code,j.message),e("Google login failed. Try again.")}},S=async D=>{try{const j=Xn(bn,"users",D.uid);(await ta(j)).exists()||await zh(j,{fullName:D.displayName||"",email:D.email,createdAt:new Date,wallets:[]}),await y(D)}catch(j){console.error("Google user processing error:",j.message),e("Failed to process Google login. Try again.")}};return L.useEffect(()=>{(async()=>{try{const j=await F2(Vn);if(j){const z=j.user;await S(z)}}catch(j){console.error("Redirect result error:",j.code,j.message),e("Google login failed. Try again.")}})()},[]),g.jsxs("div",{className:"body",children:[g.jsx(Tp,{}),g.jsxs("div",{className:"page",children:[g.jsx("h1",{className:"h1",children:"Login"}),g.jsxs("form",{onSubmit:b,className:"login-form",children:[g.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:D=>s(D.target.value),placeholder:"Enter your email"}),g.jsx("input",{className:"input",required:!0,type:"password",value:o,onChange:D=>c(D.target.value),placeholder:"Enter your password"}),g.jsx("button",{type:"submit",className:"btn btn1",children:"Login"}),g.jsxs("button",{type:"button",className:"google-btn",onClick:x,children:[g.jsx(Db,{className:"google-icon"})," Login with Google"]}),g.jsxs("p",{className:"signintxt",children:["Don't have an account? ",g.jsx(wi,{to:"/signup",className:"Link",children:"Signup"})]}),r&&g.jsx("span",{className:"error-text",children:r})]})]})]})},qC=()=>{const[r,e]=L.useState(""),[n,s]=L.useState(""),[o,c]=L.useState(""),[f,m]=L.useState(""),p=Eo(),y=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),b=async D=>{if(D.preventDefault(),f.length<6){e("Password must be at least 6 characters");return}try{const z=(await n6(Vn,n,f)).user;await zh(Xn(bn,"users",z.uid),{fullName:o,email:n,createdAt:new Date,wallets:[]}),sessionStorage.setItem("newSignup","true"),p("/profile")}catch(j){console.error("Signup error:",j.code,j.message),e("Signup failed. Try again.")}},x=async()=>{const D=new gi;try{if(y)await q2(Vn,D);else{const z=(await U2(Vn,D)).user;await S(z)}}catch(j){console.error("Google signup error:",j.code,j.message),e("Google signup failed. Try again.")}},S=async D=>{try{await zh(Xn(bn,"users",D.uid),{fullName:D.displayName||"",email:D.email,createdAt:new Date,wallets:[]},{merge:!0}),sessionStorage.setItem("newSignup","true"),p("/profile")}catch(j){console.error("Google user processing error:",j.message),e("Failed to process Google signup. Try again.")}};return L.useEffect(()=>{(async()=>{try{const j=await F2(Vn);if(j){const z=j.user;await S(z)}}catch(j){console.error("Redirect result error:",j.code,j.message),e("Google signup failed. Try again.")}})()},[]),g.jsxs("div",{className:"body",children:[g.jsx(Tp,{}),g.jsxs("div",{className:"page",children:[g.jsx("h1",{className:"h1",children:"Signup"}),g.jsxs("form",{onSubmit:b,className:"signup-form",children:[g.jsx("input",{className:"input",required:!0,type:"email",value:n,onChange:D=>s(D.target.value),placeholder:"Enter your email"}),g.jsx("input",{className:"input",required:!0,type:"text",value:o,onChange:D=>c(D.target.value),placeholder:"Enter your name"}),g.jsx("input",{className:"input",required:!0,type:"password",value:f,onChange:D=>m(D.target.value),placeholder:"Enter your password"}),g.jsx("button",{type:"submit",className:"btn btn1",children:"Sign Up"}),g.jsxs("button",{type:"button",className:"google-btn",onClick:x,children:[g.jsx(Db,{className:"google-icon"})," Signup with Google"]}),g.jsxs("p",{className:"signintxt",children:["Already have an account? ",g.jsx(wi,{to:"/login",className:"Link",children:"Login"})]}),r&&g.jsx("span",{className:"error-text",children:r})]})]})]})},FC=()=>{const[r,e]=L.useState(0),[n,s]=L.useState(0),[o,c]=L.useState(!0),[f,m]=L.useState(null),[p,y]=L.useState("USD"),[b,x]=L.useState(3e4),[S,D]=L.useState([]),[j,z]=L.useState(!1),[H,$]=L.useState(5),[ie,ne]=L.useState(new Date),ce=L.useRef(),oe=L.useRef(),pe="5d24fc1ffdddc88c283d59bad4fb57ce",V=async()=>{try{c(!0),m(null);const k=await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${pe}&base=${p}&currencies=XAU`);if(!k.ok)throw new Error("Network response was not ok");const I=await k.json();if(!I.success)throw new Error("API request failed");const rt=`${p}XAU`,Be=I.rates[rt]||1/I.rates.XAU;ce.current&&(ce.current.classList.add("price-updating"),setTimeout(()=>{s(r),e(Be),ne(new Date),ce.current&&ce.current.classList.remove("price-updating")},500)),D(Q=>[...Q,{price:Be,timestamp:new Date}].slice(-20))}catch(k){m("Failed to fetch gold prices. Please try again later."),console.error("Error fetching gold price:",k)}finally{c(!1)}};L.useEffect(()=>{n&&Math.abs(r-n)>H&&j&&("Notification"in window&&Notification.permission==="granted"&&new Notification("Gold Price Alert",{body:`Gold price has ${r>n?"increased":"decreased"} by $${Math.abs(r-n).toFixed(2)}.`}),ce.current&&(ce.current.classList.add("price-alert"),setTimeout(()=>{ce.current&&ce.current.classList.remove("price-alert")},2e3)))},[r,n,H,j]),L.useEffect(()=>{V();const k=setInterval(()=>{V()},b);return()=>clearInterval(k)},[b,p]);const A=()=>{"Notification"in window&&Notification.requestPermission().then(k=>{z(k==="granted")})},R=()=>n?((r-n)/n*100).toFixed(2):0,O=k=>new Intl.NumberFormat("en-US",{style:"currency",currency:p,minimumFractionDigits:2}).format(k),N=()=>{if(S.length<2)return null;const k=S.map(Q=>Q.price),I=Math.max(...k),rt=Math.min(...k),Be=I-rt;return g.jsx("div",{className:"mini-chart",ref:oe,children:S.map((Q,se)=>{if(se===0)return null;const de=Be>0?(Q.price-rt)/Be*40:20,Oe=Q.price>S[se-1].price;return g.jsx("div",{className:`chart-bar ${Oe?"chart-bar-up":"chart-bar-down"}`,style:{height:`${de}px`}},se)})})};return g.jsxs("div",{className:"gold-price-tracker",children:[g.jsxs("div",{className:"tracker-header",children:[g.jsxs("h2",{children:[g.jsx("span",{className:"gold-icon",children:"🥇"}),"Gold Price Tracker"]}),g.jsxs("div",{className:"last-updated",children:["Last updated: ",ie.toLocaleTimeString()]})]}),o&&g.jsxs("div",{className:"loading-state",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading current gold price..."})]}),f&&g.jsxs("div",{className:"error-state",children:[g.jsx("div",{className:"error-icon",children:"⚠️"}),g.jsx("p",{children:f}),g.jsx("button",{onClick:V,className:"retry-btn",children:"Retry"})]}),!o&&!f&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"price-display",children:[g.jsxs("div",{ref:ce,className:"current-price",children:[O(r),n&&g.jsxs("span",{className:`price-change ${r>=n?"positive":"negative"}`,children:[r>=n?"↗":"↘",O(Math.abs(r-n)),"(",R(),"%)"]})]}),N()]}),g.jsxs("div",{className:"price-history",children:[g.jsx("h3",{children:"Recent Trends"}),g.jsx("div",{className:"history-bars",children:S.slice(-6).map((k,I)=>g.jsxs("div",{className:"history-bar",children:[g.jsx("div",{className:"bar-time",children:k.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),g.jsx("div",{className:"bar-price",children:O(k.price)})]},I))})]})]}),g.jsxs("div",{className:"tracker-controls",children:[g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Currency:"}),g.jsxs("select",{value:p,onChange:k=>y(k.target.value),className:"control-select",children:[g.jsx("option",{value:"USD",children:"USD"}),g.jsx("option",{value:"EUR",children:"EUR"}),g.jsx("option",{value:"GBP",children:"GBP"}),g.jsx("option",{value:"JPY",children:"JPY"})]})]}),g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Refresh every:"}),g.jsxs("select",{value:b,onChange:k=>x(Number(k.target.value)),className:"control-select",children:[g.jsx("option",{value:1e4,children:"10 seconds"}),g.jsx("option",{value:3e4,children:"30 seconds"}),g.jsx("option",{value:6e4,children:"1 minute"}),g.jsx("option",{value:3e5,children:"5 minutes"})]})]}),g.jsx("div",{className:"control-group",children:g.jsxs("label",{children:[g.jsx("input",{type:"checkbox",checked:j,onChange:A}),"Price alerts"]})}),j&&g.jsxs("div",{className:"control-group",children:[g.jsx("label",{children:"Alert threshold:"}),g.jsxs("select",{value:H,onChange:k=>$(Number(k.target.value)),className:"control-select",children:[g.jsx("option",{value:1,children:"$1.00"}),g.jsx("option",{value:5,children:"$5.00"}),g.jsx("option",{value:10,children:"$10.00"}),g.jsx("option",{value:25,children:"$25.00"})]})]})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]})},HC=()=>{const r=Eo(),[e,n]=L.useState({fullName:"",username:"",location:"",dob:"",phone:"",gender:"",occupation:"",bio:"",btcWallet:"",ethWallet:"",usdtWallet:""}),[s,o]=L.useState(!0),[c,f]=L.useState(!1),[m,p]=L.useState(""),[y,b]=L.useState(""),[x,S]=L.useState(null),[D,j]=L.useState(!1),z=ie=>{const{name:ne,value:ce}=ie.target;n(oe=>({...oe,[ne]:ce}))};L.useEffect(()=>{j(!0);const ie=I2(Vn,async ne=>{if(!ne){r("/login");return}S(ne);try{const ce=Xn(bn,"users",ne.uid),oe=await ta(ce);if(oe.exists()){const pe=oe.data(),V=pe.wallets&&pe.wallets.find(O=>O.type==="btc")?.address||"",A=pe.wallets&&pe.wallets.find(O=>O.type==="eth")?.address||"",R=pe.wallets&&pe.wallets.find(O=>O.type==="usdt")?.address||"";n(O=>({...O,...pe,btcWallet:V,ethWallet:A,usdtWallet:R}))}}catch(ce){console.error("Failed to load profile:",ce),p("Failed to load profile. Please try again.")}finally{o(!1)}});return()=>ie()},[r]);const H=()=>e.fullName.trim().length>1&&e.username.trim().length>1&&e.phone.trim().length>=10&&e.dob,$=async ie=>{if(ie.preventDefault(),!!x){if(!H()){p("Please fill in all required fields.");return}f(!0),p(""),b("");try{const ne=Xn(bn,"users",x.uid),ce=[];e.btcWallet&&ce.push({type:"btc",address:e.btcWallet}),e.ethWallet&&ce.push({type:"eth",address:e.ethWallet}),e.usdtWallet&&ce.push({type:"usdt",address:e.usdtWallet});const oe={...e,email:x.email,wallets:ce,updatedAt:Bh()};delete oe.btcWallet,delete oe.ethWallet,delete oe.usdtWallet,(await ta(ne)).data()?.createdAt||(oe.createdAt=Bh()),await zh(ne,oe,{merge:!0}),b("Profile updated successfully!"),setTimeout(()=>r("/dashboard"),1200)}catch(ne){console.error("Save failed:",ne),p("Could not save profile. Please try again.")}finally{f(!1)}}};return s?g.jsxs("div",{className:"loader-container",children:[g.jsx("div",{className:"spinner"}),g.jsx("p",{children:"Loading Profile..."})]}):g.jsxs("div",{className:"profile-page",children:[g.jsxs("div",{className:`profile-container ${D?"mounted":""}`,children:[g.jsx("h1",{className:"profile-title",children:"Complete Your Profile"}),g.jsx("form",{onSubmit:$,className:"profile-form",children:g.jsxs("div",{className:"form-grid",children:[["fullName","username"].map((ie,ne)=>g.jsx("div",{className:"form-group animated-item",style:{animationDelay:`${ne*.1}s`},children:g.jsx("input",{name:ie,type:"text",placeholder:ie==="fullName"?"Full Name *":"Username *",value:e[ie],onChange:z,required:!0,className:"form-input"})},ie)),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.2s"},children:g.jsx("input",{name:"location",type:"text",placeholder:"Location",value:e.location,onChange:z,className:"form-input"})}),g.jsxs("div",{className:"form-group animated-item",style:{animationDelay:"0.3s"},children:[g.jsx("label",{className:"input-label",children:"Date of Birth *"}),g.jsx("input",{name:"dob",type:"date",value:e.dob,onChange:z,className:"form-input",required:!0})]}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.4s"},children:g.jsx("input",{name:"phone",type:"tel",placeholder:"Phone Number *",value:e.phone,onChange:z,required:!0,className:"form-input"})}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.5s"},children:g.jsxs("select",{name:"gender",value:e.gender,onChange:z,className:"form-select",children:[g.jsx("option",{value:"",children:"Select Gender"}),g.jsx("option",{value:"Male",children:"Male"}),g.jsx("option",{value:"Female",children:"Female"}),g.jsx("option",{value:"Other",children:"Other"})]})}),g.jsx("div",{className:"form-group animated-item",style:{animationDelay:"0.6s"},children:g.jsx("input",{name:"occupation",type:"text",placeholder:"Occupation",value:e.occupation,onChange:z,className:"form-input"})}),g.jsx("div",{className:"form-group full-width animated-item",style:{animationDelay:"0.7s"},children:g.jsx("textarea",{name:"bio",placeholder:"Bio (Tell us about yourself)",value:e.bio,onChange:z,rows:3,className:"form-textarea"})}),g.jsxs("div",{className:"wallet-section full-width animated-item",style:{animationDelay:"0.8s"},children:[g.jsx("h3",{className:"wallet-title",children:"Wallet Addresses"}),["btcWallet","ethWallet","usdtWallet"].map((ie,ne)=>g.jsx("div",{className:"form-group",children:g.jsx("input",{name:ie,type:"text",placeholder:ie==="btcWallet"?"BTC Wallet Address":ie==="ethWallet"?"ETH Wallet Address":"USDT Wallet Address",value:e[ie],onChange:z,className:"form-input"})},ie))]}),m&&g.jsx("div",{className:"error-message full-width animated-item",children:m}),y&&g.jsx("div",{className:"success-message full-width animated-item",children:y}),g.jsxs("div",{className:"form-actions full-width animated-item",style:{animationDelay:"0.9s"},children:[g.jsx("button",{type:"button",onClick:()=>r("/dashboard"),className:"btn-secondary",children:"Cancel"}),g.jsx("button",{type:"submit",className:"btn-primary",disabled:c||!H(),children:c?g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"btn-spinner"}),"Saving..."]}):"Save Profile"})]})]})})]}),g.jsx("style",{jsx:!0,children:`
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
      `})]})},GC=()=>g.jsxs("div",{style:rh.container,children:[g.jsx("h1",{style:rh.heading,children:"404 - Page Not Found"}),g.jsx("p",{style:rh.text,children:"The page you are looking for doesn't exist."}),g.jsx(wi,{to:"/",style:rh.button,children:"Go Home"})]}),rh={container:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#f8f9fa",color:"#333",textAlign:"center"},heading:{fontSize:"2.5rem",marginBottom:"10px"},text:{fontSize:"1.2rem",marginBottom:"20px"},button:{padding:"10px 20px",background:"#007bff",color:"#fff",borderRadius:"5px",textDecoration:"none",fontWeight:"bold"}};function YC(){return g.jsxs(g.Fragment,{children:[g.jsx(Tp,{}),g.jsx(z4,{}),g.jsx(fS,{}),g.jsx(mS,{}),g.jsx(vS,{})]})}function KC(){return g.jsxs(n4,{children:[g.jsx(Br,{path:"/",element:g.jsx(YC,{})}),g.jsx(Br,{path:"/login",element:g.jsx(BC,{})}),g.jsx(Br,{path:"/signup",element:g.jsx(qC,{})}),g.jsx(Br,{path:"/dashboard",element:g.jsx(zC,{})}),g.jsx(Br,{path:"/profile",element:g.jsx(HC,{})}),g.jsx(Br,{path:"/stock",element:g.jsx(FC,{})}),g.jsx(Br,{path:"*",element:g.jsx(GC,{})})," "]})}fw.createRoot(document.getElementById("root")).render(g.jsx(L.StrictMode,{children:g.jsx(x4,{children:g.jsx(KC,{})})}));
