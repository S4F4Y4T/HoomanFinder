function Ek(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ag(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var J1={exports:{}},mf={},Z1={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Symbol.for("react.element"),Tk=Symbol.for("react.portal"),Sk=Symbol.for("react.fragment"),Ik=Symbol.for("react.strict_mode"),xk=Symbol.for("react.profiler"),bk=Symbol.for("react.provider"),Ak=Symbol.for("react.context"),kk=Symbol.for("react.forward_ref"),Pk=Symbol.for("react.suspense"),Ck=Symbol.for("react.memo"),Rk=Symbol.for("react.lazy"),s0=Symbol.iterator;function Nk(t){return t===null||typeof t!="object"?null:(t=s0&&t[s0]||t["@@iterator"],typeof t=="function"?t:null)}var eE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tE=Object.assign,nE={};function Io(t,e,n){this.props=t,this.context=e,this.refs=nE,this.updater=n||eE}Io.prototype.isReactComponent={};Io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rE(){}rE.prototype=Io.prototype;function lg(t,e,n){this.props=t,this.context=e,this.refs=nE,this.updater=n||eE}var ug=lg.prototype=new rE;ug.constructor=lg;tE(ug,Io.prototype);ug.isPureReactComponent=!0;var o0=Array.isArray,iE=Object.prototype.hasOwnProperty,cg={current:null},sE={key:!0,ref:!0,__self:!0,__source:!0};function oE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)iE.call(e,r)&&!sE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gl,type:t,key:s,ref:o,props:i,_owner:cg.current}}function Ok(t,e){return{$$typeof:gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fg(t){return typeof t=="object"&&t!==null&&t.$$typeof===gl}function Dk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var a0=/\/+/g;function qh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dk(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gl:case Tk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qh(o,0):r,o0(i)?(n="",t!=null&&(n=t.replace(a0,"$&/")+"/"),Du(i,e,n,"",function(u){return u})):i!=null&&(fg(i)&&(i=Ok(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(a0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",o0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+qh(s,a);o+=Du(s,e,n,l,i)}else if(l=Nk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+qh(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ql(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Lk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dt={current:null},Lu={transition:null},Vk={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:Lu,ReactCurrentOwner:cg};se.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!fg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=Io;se.Fragment=Sk;se.Profiler=xk;se.PureComponent=lg;se.StrictMode=Ik;se.Suspense=Pk;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vk;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)iE.call(e,l)&&!sE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:gl,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:Ak,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bk,_context:t},t.Consumer=t};se.createElement=oE;se.createFactory=function(t){var e=oE.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:kk,render:t}};se.isValidElement=fg;se.lazy=function(t){return{$$typeof:Rk,_payload:{_status:-1,_result:t},_init:Lk}};se.memo=function(t,e){return{$$typeof:Ck,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Lu.transition;Lu.transition={};try{t()}finally{Lu.transition=e}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(t,e){return Dt.current.useCallback(t,e)};se.useContext=function(t){return Dt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return Dt.current.useDeferredValue(t)};se.useEffect=function(t,e){return Dt.current.useEffect(t,e)};se.useId=function(){return Dt.current.useId()};se.useImperativeHandle=function(t,e,n){return Dt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return Dt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return Dt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return Dt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return Dt.current.useReducer(t,e,n)};se.useRef=function(t){return Dt.current.useRef(t)};se.useState=function(t){return Dt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return Dt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return Dt.current.useTransition()};se.version="18.2.0";Z1.exports=se;var P=Z1.exports;const rn=ag(P),Mk=Ek({__proto__:null,default:rn},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fk=P,$k=Symbol.for("react.element"),jk=Symbol.for("react.fragment"),Uk=Object.prototype.hasOwnProperty,zk=Fk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bk={key:!0,ref:!0,__self:!0,__source:!0};function aE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Uk.call(e,r)&&!Bk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$k,type:t,key:s,ref:o,props:i,_owner:zk.current}}mf.Fragment=jk;mf.jsx=aE;mf.jsxs=aE;J1.exports=mf;var _=J1.exports,ap={},lE={exports:{}},Yt={},uE={exports:{}},cE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,G){var X=V.length;V.push(G);e:for(;0<X;){var Ie=X-1>>>1,Fe=V[Ie];if(0<i(Fe,G))V[Ie]=G,V[X]=Fe,X=Ie;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var G=V[0],X=V.pop();if(X!==G){V[0]=X;e:for(var Ie=0,Fe=V.length,ps=Fe>>>1;Ie<ps;){var Pn=2*(Ie+1)-1,Mo=V[Pn],dn=Pn+1,xr=V[dn];if(0>i(Mo,X))dn<Fe&&0>i(xr,Mo)?(V[Ie]=xr,V[dn]=X,Ie=dn):(V[Ie]=Mo,V[Pn]=X,Ie=Pn);else if(dn<Fe&&0>i(xr,X))V[Ie]=xr,V[dn]=X,Ie=dn;else break e}}return G}function i(V,G){var X=V.sortIndex-G.sortIndex;return X!==0?X:V.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(V){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=V)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function T(V){if(v=!1,g(V),!y)if(n(l)!==null)y=!0,dt(S);else{var G=n(u);G!==null&&Vt(T,G.startTime-V)}}function S(V,G){y=!1,v&&(v=!1,m(D),D=-1),p=!0;var X=h;try{for(g(G),f=n(l);f!==null&&(!(f.expirationTime>G)||V&&!ae());){var Ie=f.callback;if(typeof Ie=="function"){f.callback=null,h=f.priorityLevel;var Fe=Ie(f.expirationTime<=G);G=t.unstable_now(),typeof Fe=="function"?f.callback=Fe:f===n(l)&&r(l),g(G)}else r(l);f=n(l)}if(f!==null)var ps=!0;else{var Pn=n(u);Pn!==null&&Vt(T,Pn.startTime-G),ps=!1}return ps}finally{f=null,h=X,p=!1}}var k=!1,R=null,D=-1,H=5,O=-1;function ae(){return!(t.unstable_now()-O<H)}function ne(){if(R!==null){var V=t.unstable_now();O=V;var G=!0;try{G=R(!0,V)}finally{G?ee():(k=!1,R=null)}}else k=!1}var ee;if(typeof d=="function")ee=function(){d(ne)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,ht=Se.port2;Se.port1.onmessage=ne,ee=function(){ht.postMessage(null)}}else ee=function(){E(ne,0)};function dt(V){R=V,k||(k=!0,ee())}function Vt(V,G){D=E(function(){V(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,dt(S))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var X=h;h=G;try{return V()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var X=h;h=V;try{return G()}finally{h=X}},t.unstable_scheduleCallback=function(V,G,X){var Ie=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Ie+X:Ie):X=Ie,V){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=X+Fe,V={id:c++,callback:G,priorityLevel:V,startTime:X,expirationTime:Fe,sortIndex:-1},X>Ie?(V.sortIndex=X,e(u,V),n(l)===null&&V===n(u)&&(v?(m(D),D=-1):v=!0,Vt(T,X-Ie))):(V.sortIndex=Fe,e(l,V),y||p||(y=!0,dt(S))),V},t.unstable_shouldYield=ae,t.unstable_wrapCallback=function(V){var G=h;return function(){var X=h;h=G;try{return V.apply(this,arguments)}finally{h=X}}}})(cE);uE.exports=cE;var Hk=uE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=P,Kt=Hk;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hE=new Set,ba={};function is(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(ba[t]=e,t=0;t<e.length;t++)hE.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lp=Object.prototype.hasOwnProperty,Wk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,l0={},u0={};function qk(t){return lp.call(u0,t)?!0:lp.call(l0,t)?!1:Wk.test(t)?u0[t]=!0:(l0[t]=!0,!1)}function Kk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gk(t,e,n,r){if(e===null||typeof e>"u"||Kk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ft[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ft[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ft[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ft[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ft[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ft[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ft[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ft[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ft[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hg=/[\-:]([a-z])/g;function dg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hg,dg);ft[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hg,dg);ft[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hg,dg);ft[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ft[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});ft.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ft[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pg(t,e,n,r){var i=ft.hasOwnProperty(e)?ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gk(e,n,i,r)&&(n=null),r||i===null?qk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sr=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yl=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),mg=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),yg=Symbol.for("react.memo"),Rr=Symbol.for("react.lazy"),mE=Symbol.for("react.offscreen"),c0=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=c0&&t[c0]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Kh;function Xo(t){if(Kh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kh=e&&e[1]||""}return`
`+Kh+t}var Gh=!1;function Qh(t,e){if(!t||Gh)return"";Gh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function Qk(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Qh(t.type,!1),t;case 11:return t=Qh(t.type.render,!1),t;case 1:return t=Qh(t.type,!0),t;default:return""}}function hp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ss:return"Portal";case up:return"Profiler";case mg:return"StrictMode";case cp:return"Suspense";case fp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pE:return(t.displayName||"Context")+".Consumer";case dE:return(t._context.displayName||"Context")+".Provider";case gg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yg:return e=t.displayName||null,e!==null?e:hp(t.type)||"Memo";case Rr:e=t._payload,t=t._init;try{return hp(t(e))}catch{}}return null}function Yk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hp(e);case 8:return e===mg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Xk(t){var e=gE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){t._valueTracker||(t._valueTracker=Xk(t))}function yE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dp(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function f0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vE(t,e){e=e.checked,e!=null&&pg(t,"checked",e,!1)}function pp(t,e){vE(t,e);var n=li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mp(t,e.type,n):e.hasOwnProperty("defaultValue")&&mp(t,e.type,li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function h0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mp(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function d0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Jo(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:li(n)}}function _E(t,e){var n=li(e.value),r=li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function p0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jl,EE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jl=Jl||document.createElement("div"),Jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jk=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){Jk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function TE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function SE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=TE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Zk=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vp(t,e){if(e){if(Zk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function _p(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wp=null;function vg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ep=null,Bs=null,Hs=null;function m0(t){if(t=_l(t)){if(typeof Ep!="function")throw Error(C(280));var e=t.stateNode;e&&(e=wf(e),Ep(t.stateNode,t.type,e))}}function IE(t){Bs?Hs?Hs.push(t):Hs=[t]:Bs=t}function xE(){if(Bs){var t=Bs,e=Hs;if(Hs=Bs=null,m0(t),e)for(t=0;t<e.length;t++)m0(e[t])}}function bE(t,e){return t(e)}function AE(){}var Yh=!1;function kE(t,e,n){if(Yh)return t(e,n);Yh=!0;try{return bE(t,e,n)}finally{Yh=!1,(Bs!==null||Hs!==null)&&(AE(),xE())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=wf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Tp=!1;if(cr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Tp=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Tp=!1}function eP(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var la=!1,sc=null,oc=!1,Sp=null,tP={onError:function(t){la=!0,sc=t}};function nP(t,e,n,r,i,s,o,a,l){la=!1,sc=null,eP.apply(tP,arguments)}function rP(t,e,n,r,i,s,o,a,l){if(nP.apply(this,arguments),la){if(la){var u=sc;la=!1,sc=null}else throw Error(C(198));oc||(oc=!0,Sp=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function PE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g0(t){if(ss(t)!==t)throw Error(C(188))}function iP(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return g0(i),t;if(s===r)return g0(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function CE(t){return t=iP(t),t!==null?RE(t):null}function RE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=RE(t);if(e!==null)return e;t=t.sibling}return null}var NE=Kt.unstable_scheduleCallback,y0=Kt.unstable_cancelCallback,sP=Kt.unstable_shouldYield,oP=Kt.unstable_requestPaint,je=Kt.unstable_now,aP=Kt.unstable_getCurrentPriorityLevel,_g=Kt.unstable_ImmediatePriority,OE=Kt.unstable_UserBlockingPriority,ac=Kt.unstable_NormalPriority,lP=Kt.unstable_LowPriority,DE=Kt.unstable_IdlePriority,gf=null,jn=null;function uP(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(gf,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:hP,cP=Math.log,fP=Math.LN2;function hP(t){return t>>>=0,t===0?32:31-(cP(t)/fP|0)|0}var Zl=64,eu=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zo(a):(s&=o,s!==0&&(r=Zo(s)))}else o=n&~i,o!==0?r=Zo(o):s!==0&&(r=Zo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-In(e),i=1<<n,r|=t[n],e&=~i;return r}function dP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=dP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ip(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function LE(){var t=Zl;return Zl<<=1,!(Zl&4194240)&&(Zl=64),t}function Xh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function mP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-In(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function wg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-In(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function VE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ME,Eg,FE,$E,jE,xp=!1,tu=[],qr=null,Kr=null,Gr=null,Pa=new Map,Ca=new Map,Or=[],gP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function v0(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_l(e),e!==null&&Eg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function yP(t,e,n,r,i){switch(e){case"focusin":return qr=jo(qr,t,e,n,r,i),!0;case"dragenter":return Kr=jo(Kr,t,e,n,r,i),!0;case"mouseover":return Gr=jo(Gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pa.set(s,jo(Pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,jo(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function UE(t){var e=ki(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=PE(n),e!==null){t.blockedOn=e,jE(t.priority,function(){FE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);wp=r,n.target.dispatchEvent(r),wp=null}else return e=_l(n),e!==null&&Eg(e),t.blockedOn=n,!1;e.shift()}return!0}function _0(t,e,n){Vu(t)&&n.delete(e)}function vP(){xp=!1,qr!==null&&Vu(qr)&&(qr=null),Kr!==null&&Vu(Kr)&&(Kr=null),Gr!==null&&Vu(Gr)&&(Gr=null),Pa.forEach(_0),Ca.forEach(_0)}function Uo(t,e){t.blockedOn===e&&(t.blockedOn=null,xp||(xp=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,vP)))}function Ra(t){function e(i){return Uo(i,t)}if(0<tu.length){Uo(tu[0],t);for(var n=1;n<tu.length;n++){var r=tu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&Uo(qr,t),Kr!==null&&Uo(Kr,t),Gr!==null&&Uo(Gr,t),Pa.forEach(e),Ca.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)UE(n),n.blockedOn===null&&Or.shift()}var Ws=Sr.ReactCurrentBatchConfig,uc=!0;function _P(t,e,n,r){var i=fe,s=Ws.transition;Ws.transition=null;try{fe=1,Tg(t,e,n,r)}finally{fe=i,Ws.transition=s}}function wP(t,e,n,r){var i=fe,s=Ws.transition;Ws.transition=null;try{fe=4,Tg(t,e,n,r)}finally{fe=i,Ws.transition=s}}function Tg(t,e,n,r){if(uc){var i=bp(t,e,n,r);if(i===null)ad(t,e,r,cc,n),v0(t,r);else if(yP(i,t,e,n,r))r.stopPropagation();else if(v0(t,r),e&4&&-1<gP.indexOf(t)){for(;i!==null;){var s=_l(i);if(s!==null&&ME(s),s=bp(t,e,n,r),s===null&&ad(t,e,r,cc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var cc=null;function bp(t,e,n,r){if(cc=null,t=vg(r),t=ki(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=PE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function zE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aP()){case _g:return 1;case OE:return 4;case ac:case lP:return 16;case DE:return 536870912;default:return 16}default:return 16}}var jr=null,Sg=null,Mu=null;function BE(){if(Mu)return Mu;var t,e=Sg,n=e.length,r,i="value"in jr?jr.value:jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mu=i.slice(t,1<r?1-r:void 0)}function Fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nu(){return!0}function w0(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nu:w0,this.isPropagationStopped=w0,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ig=Xt(xo),vl=Ce({},xo,{view:0,detail:0}),EP=Xt(vl),Jh,Zh,zo,yf=Ce({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Jh=t.screenX-zo.screenX,Zh=t.screenY-zo.screenY):Zh=Jh=0,zo=t),Jh)},movementY:function(t){return"movementY"in t?t.movementY:Zh}}),E0=Xt(yf),TP=Ce({},yf,{dataTransfer:0}),SP=Xt(TP),IP=Ce({},vl,{relatedTarget:0}),ed=Xt(IP),xP=Ce({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),bP=Xt(xP),AP=Ce({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kP=Xt(AP),PP=Ce({},xo,{data:0}),T0=Xt(PP),CP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=NP[t])?!!e[t]:!1}function xg(){return OP}var DP=Ce({},vl,{key:function(t){if(t.key){var e=CP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xg,charCode:function(t){return t.type==="keypress"?Fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),LP=Xt(DP),VP=Ce({},yf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=Xt(VP),MP=Ce({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xg}),FP=Xt(MP),$P=Ce({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),jP=Xt($P),UP=Ce({},yf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zP=Xt(UP),BP=[9,13,27,32],bg=cr&&"CompositionEvent"in window,ua=null;cr&&"documentMode"in document&&(ua=document.documentMode);var HP=cr&&"TextEvent"in window&&!ua,HE=cr&&(!bg||ua&&8<ua&&11>=ua),I0=String.fromCharCode(32),x0=!1;function WE(t,e){switch(t){case"keyup":return BP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function WP(t,e){switch(t){case"compositionend":return qE(e);case"keypress":return e.which!==32?null:(x0=!0,I0);case"textInput":return t=e.data,t===I0&&x0?null:t;default:return null}}function qP(t,e){if(xs)return t==="compositionend"||!bg&&WE(t,e)?(t=BE(),Mu=Sg=jr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return HE&&e.locale!=="ko"?null:e.data;default:return null}}var KP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KP[t.type]:e==="textarea"}function KE(t,e,n,r){IE(r),e=fc(e,"onChange"),0<e.length&&(n=new Ig("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ca=null,Na=null;function GP(t){iT(t,0)}function vf(t){var e=ks(t);if(yE(e))return t}function QP(t,e){if(t==="change")return e}var GE=!1;if(cr){var td;if(cr){var nd="oninput"in document;if(!nd){var A0=document.createElement("div");A0.setAttribute("oninput","return;"),nd=typeof A0.oninput=="function"}td=nd}else td=!1;GE=td&&(!document.documentMode||9<document.documentMode)}function k0(){ca&&(ca.detachEvent("onpropertychange",QE),Na=ca=null)}function QE(t){if(t.propertyName==="value"&&vf(Na)){var e=[];KE(e,Na,t,vg(t)),kE(GP,e)}}function YP(t,e,n){t==="focusin"?(k0(),ca=e,Na=n,ca.attachEvent("onpropertychange",QE)):t==="focusout"&&k0()}function XP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vf(Na)}function JP(t,e){if(t==="click")return vf(e)}function ZP(t,e){if(t==="input"||t==="change")return vf(e)}function eC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var An=typeof Object.is=="function"?Object.is:eC;function Oa(t,e){if(An(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lp.call(e,i)||!An(t[i],e[i]))return!1}return!0}function P0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function C0(t,e){var n=P0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=P0(n)}}function YE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?YE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function XE(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function Ag(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function tC(t){var e=XE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&YE(n.ownerDocument.documentElement,n)){if(r!==null&&Ag(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=C0(n,s);var o=C0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var nC=cr&&"documentMode"in document&&11>=document.documentMode,bs=null,Ap=null,fa=null,kp=!1;function R0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kp||bs==null||bs!==ic(r)||(r=bs,"selectionStart"in r&&Ag(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&Oa(fa,r)||(fa=r,r=fc(Ap,"onSelect"),0<r.length&&(e=new Ig("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},rd={},JE={};cr&&(JE=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function _f(t){if(rd[t])return rd[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in JE)return rd[t]=e[n];return t}var ZE=_f("animationend"),eT=_f("animationiteration"),tT=_f("animationstart"),nT=_f("transitionend"),rT=new Map,N0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(t,e){rT.set(t,e),is(e,[t])}for(var id=0;id<N0.length;id++){var sd=N0[id],rC=sd.toLowerCase(),iC=sd[0].toUpperCase()+sd.slice(1);_i(rC,"on"+iC)}_i(ZE,"onAnimationEnd");_i(eT,"onAnimationIteration");_i(tT,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(nT,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function O0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rP(r,e,void 0,t),t.currentTarget=null}function iT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;O0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;O0(i,a,u),s=l}}}if(oc)throw t=Sp,oc=!1,Sp=null,t}function ye(t,e){var n=e[Op];n===void 0&&(n=e[Op]=new Set);var r=t+"__bubble";n.has(r)||(sT(e,t,2,!1),n.add(r))}function od(t,e,n){var r=0;e&&(r|=4),sT(n,t,r,e)}var iu="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[iu]){t[iu]=!0,hE.forEach(function(n){n!=="selectionchange"&&(sC.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[iu]||(e[iu]=!0,od("selectionchange",!1,e))}}function sT(t,e,n,r){switch(zE(e)){case 1:var i=_P;break;case 4:i=wP;break;default:i=Tg}n=i.bind(null,e,n,t),i=void 0,!Tp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ki(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kE(function(){var u=s,c=vg(n),f=[];e:{var h=rT.get(t);if(h!==void 0){var p=Ig,y=t;switch(t){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":p=LP;break;case"focusin":y="focus",p=ed;break;case"focusout":y="blur",p=ed;break;case"beforeblur":case"afterblur":p=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=SP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=FP;break;case ZE:case eT:case tT:p=bP;break;case nT:p=jP;break;case"scroll":p=EP;break;case"wheel":p=zP;break;case"copy":case"cut":case"paste":p=kP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=S0}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var d=u,g;d!==null;){g=d;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,m!==null&&(T=ka(d,m),T!=null&&v.push(La(d,T,g)))),E)break;d=d.return}0<v.length&&(h=new p(h,y,null,n,c),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==wp&&(y=n.relatedTarget||n.fromElement)&&(ki(y)||y[fr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?ki(y):null,y!==null&&(E=ss(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=E0,T="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=S0,T="onPointerLeave",m="onPointerEnter",d="pointer"),E=p==null?h:ks(p),g=y==null?h:ks(y),h=new v(T,d+"leave",p,n,c),h.target=E,h.relatedTarget=g,T=null,ki(c)===u&&(v=new v(m,d+"enter",y,n,c),v.target=g,v.relatedTarget=E,T=v),E=T,p&&y)t:{for(v=p,m=y,d=0,g=v;g;g=gs(g))d++;for(g=0,T=m;T;T=gs(T))g++;for(;0<d-g;)v=gs(v),d--;for(;0<g-d;)m=gs(m),g--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=gs(v),m=gs(m)}v=null}else v=null;p!==null&&D0(f,h,p,v,!1),y!==null&&E!==null&&D0(f,E,y,v,!0)}}e:{if(h=u?ks(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=QP;else if(b0(h))if(GE)S=ZP;else{S=XP;var k=YP}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=JP);if(S&&(S=S(t,u))){KE(f,S,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&mp(h,"number",h.value)}switch(k=u?ks(u):window,t){case"focusin":(b0(k)||k.contentEditable==="true")&&(bs=k,Ap=u,fa=null);break;case"focusout":fa=Ap=bs=null;break;case"mousedown":kp=!0;break;case"contextmenu":case"mouseup":case"dragend":kp=!1,R0(f,n,c);break;case"selectionchange":if(nC)break;case"keydown":case"keyup":R0(f,n,c)}var R;if(bg)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else xs?WE(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(HE&&n.locale!=="ko"&&(xs||D!=="onCompositionStart"?D==="onCompositionEnd"&&xs&&(R=BE()):(jr=c,Sg="value"in jr?jr.value:jr.textContent,xs=!0)),k=fc(u,D),0<k.length&&(D=new T0(D,t,null,n,c),f.push({event:D,listeners:k}),R?D.data=R:(R=qE(n),R!==null&&(D.data=R)))),(R=HP?WP(t,n):qP(t,n))&&(u=fc(u,"onBeforeInput"),0<u.length&&(c=new T0("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=R))}iT(f,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(La(t,s,i)),s=ka(t,e),s!=null&&r.push(La(t,s,i))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function D0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ka(n,s),l!=null&&o.unshift(La(n,l,a))):i||(l=ka(n,s),l!=null&&o.push(La(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oC=/\r\n?/g,aC=/\u0000|\uFFFD/g;function L0(t){return(typeof t=="string"?t:""+t).replace(oC,`
`).replace(aC,"")}function su(t,e,n){if(e=L0(e),L0(t)!==e&&n)throw Error(C(425))}function hc(){}var Pp=null,Cp=null;function Rp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Np=typeof setTimeout=="function"?setTimeout:void 0,lC=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,uC=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(cC)}:Np;function cC(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ra(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ra(e)}function Qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function M0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bo=Math.random().toString(36).slice(2),On="__reactFiber$"+bo,Va="__reactProps$"+bo,fr="__reactContainer$"+bo,Op="__reactEvents$"+bo,fC="__reactListeners$"+bo,hC="__reactHandles$"+bo;function ki(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=M0(t);t!==null;){if(n=t[On])return n;t=M0(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[On]||t[fr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function wf(t){return t[Va]||null}var Dp=[],Ps=-1;function wi(t){return{current:t}}function we(t){0>Ps||(t.current=Dp[Ps],Dp[Ps]=null,Ps--)}function ge(t,e){Ps++,Dp[Ps]=t.current,t.current=e}var ui={},xt=wi(ui),$t=wi(!1),Hi=ui;function so(t,e){var n=t.type.contextTypes;if(!n)return ui;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function dc(){we($t),we(xt)}function F0(t,e,n){if(xt.current!==ui)throw Error(C(168));ge(xt,e),ge($t,n)}function oT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Yk(t)||"Unknown",i));return Ce({},n,r)}function pc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ui,Hi=xt.current,ge(xt,t),ge($t,$t.current),!0}function $0(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=oT(t,e,Hi),r.__reactInternalMemoizedMergedChildContext=t,we($t),we(xt),ge(xt,t)):we($t),ge($t,n)}var nr=null,Ef=!1,ud=!1;function aT(t){nr===null?nr=[t]:nr.push(t)}function dC(t){Ef=!0,aT(t)}function Ei(){if(!ud&&nr!==null){ud=!0;var t=0,e=fe;try{var n=nr;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}nr=null,Ef=!1}catch(i){throw nr!==null&&(nr=nr.slice(t+1)),NE(_g,Ei),i}finally{fe=e,ud=!1}}return null}var Cs=[],Rs=0,mc=null,gc=0,tn=[],nn=0,Wi=null,ir=1,sr="";function Ii(t,e){Cs[Rs++]=gc,Cs[Rs++]=mc,mc=t,gc=e}function lT(t,e,n){tn[nn++]=ir,tn[nn++]=sr,tn[nn++]=Wi,Wi=t;var r=ir;t=sr;var i=32-In(r)-1;r&=~(1<<i),n+=1;var s=32-In(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ir=1<<32-In(e)+i|n<<i|r,sr=s+t}else ir=1<<s|n<<i|r,sr=t}function kg(t){t.return!==null&&(Ii(t,1),lT(t,1,0))}function Pg(t){for(;t===mc;)mc=Cs[--Rs],Cs[Rs]=null,gc=Cs[--Rs],Cs[Rs]=null;for(;t===Wi;)Wi=tn[--nn],tn[nn]=null,sr=tn[--nn],tn[nn]=null,ir=tn[--nn],tn[nn]=null}var qt=null,Ht=null,be=!1,vn=null;function uT(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function j0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,qt=t,Ht=Qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,qt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wi!==null?{id:ir,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,qt=t,Ht=null,!0):!1;default:return!1}}function Lp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vp(t){if(be){var e=Ht;if(e){var n=e;if(!j0(t,e)){if(Lp(t))throw Error(C(418));e=Qr(n.nextSibling);var r=qt;e&&j0(t,e)?uT(r,n):(t.flags=t.flags&-4097|2,be=!1,qt=t)}}else{if(Lp(t))throw Error(C(418));t.flags=t.flags&-4097|2,be=!1,qt=t}}}function U0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function ou(t){if(t!==qt)return!1;if(!be)return U0(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rp(t.type,t.memoizedProps)),e&&(e=Ht)){if(Lp(t))throw cT(),Error(C(418));for(;e;)uT(t,e),e=Qr(e.nextSibling)}if(U0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=qt?Qr(t.stateNode.nextSibling):null;return!0}function cT(){for(var t=Ht;t;)t=Qr(t.nextSibling)}function oo(){Ht=qt=null,be=!1}function Cg(t){vn===null?vn=[t]:vn.push(t)}var pC=Sr.ReactCurrentBatchConfig;function gn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var yc=wi(null),vc=null,Ns=null,Rg=null;function Ng(){Rg=Ns=vc=null}function Og(t){var e=yc.current;we(yc),t._currentValue=e}function Mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){vc=t,Rg=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(Rg!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(vc===null)throw Error(C(308));Ns=t,vc.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var Pi=null;function Dg(t){Pi===null?Pi=[t]:Pi.push(t)}function fT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dg(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function Lg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,Dg(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function $u(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wg(t,n)}}function z0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=Ce({},f,h);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ki|=o,t.lanes=o,t.memoizedState=f}}function B0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var dT=new fE.Component().refs;function Fp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tf={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Jr(t),s=ur(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,i),e!==null&&(xn(e,t,i,r),$u(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=Jr(t),s=ur(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,i),e!==null&&(xn(e,t,i,r),$u(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=Jr(t),i=ur(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yr(t,i,r),e!==null&&(xn(e,t,r,n),$u(e,t,r))}};function H0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,r)||!Oa(i,s):!0}function pT(t,e,n){var r=!1,i=ui,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=jt(e)?Hi:xt.current,r=e.contextTypes,s=(r=r!=null)?so(t,i):ui),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function W0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tf.enqueueReplaceState(e,e.state,null)}function $p(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=dT,Lg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=jt(e)?Hi:xt.current,i.context=so(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tf.enqueueReplaceState(i,i.state,null),_c(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===dT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function au(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function q0(t){var e=t._init;return e(t._payload)}function mT(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Zr(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,T){return d===null||d.tag!==6?(d=gd(g,m.mode,T),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,T){var S=g.type;return S===Is?c(m,d,g.props.children,T,g.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Rr&&q0(S)===d.type)?(T=i(d,g.props),T.ref=Bo(m,d,g),T.return=m,T):(T=Wu(g.type,g.key,g.props,null,m.mode,T),T.ref=Bo(m,d,g),T.return=m,T)}function u(m,d,g,T){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=yd(g,m.mode,T),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,T,S){return d===null||d.tag!==7?(d=$i(g,m.mode,T,S),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=gd(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Yl:return g=Wu(d.type,d.key,d.props,null,m.mode,g),g.ref=Bo(m,null,d),g.return=m,g;case Ss:return d=yd(d,m.mode,g),d.return=m,d;case Rr:var T=d._init;return f(m,T(d._payload),g)}if(Jo(d)||Fo(d))return d=$i(d,m.mode,g,null),d.return=m,d;au(m,d)}return null}function h(m,d,g,T){var S=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,d,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yl:return g.key===S?l(m,d,g,T):null;case Ss:return g.key===S?u(m,d,g,T):null;case Rr:return S=g._init,h(m,d,S(g._payload),T)}if(Jo(g)||Fo(g))return S!==null?null:c(m,d,g,T,null);au(m,g)}return null}function p(m,d,g,T,S){if(typeof T=="string"&&T!==""||typeof T=="number")return m=m.get(g)||null,a(d,m,""+T,S);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Yl:return m=m.get(T.key===null?g:T.key)||null,l(d,m,T,S);case Ss:return m=m.get(T.key===null?g:T.key)||null,u(d,m,T,S);case Rr:var k=T._init;return p(m,d,g,k(T._payload),S)}if(Jo(T)||Fo(T))return m=m.get(g)||null,c(d,m,T,S,null);au(d,T)}return null}function y(m,d,g,T){for(var S=null,k=null,R=d,D=d=0,H=null;R!==null&&D<g.length;D++){R.index>D?(H=R,R=null):H=R.sibling;var O=h(m,R,g[D],T);if(O===null){R===null&&(R=H);break}t&&R&&O.alternate===null&&e(m,R),d=s(O,d,D),k===null?S=O:k.sibling=O,k=O,R=H}if(D===g.length)return n(m,R),be&&Ii(m,D),S;if(R===null){for(;D<g.length;D++)R=f(m,g[D],T),R!==null&&(d=s(R,d,D),k===null?S=R:k.sibling=R,k=R);return be&&Ii(m,D),S}for(R=r(m,R);D<g.length;D++)H=p(R,m,D,g[D],T),H!==null&&(t&&H.alternate!==null&&R.delete(H.key===null?D:H.key),d=s(H,d,D),k===null?S=H:k.sibling=H,k=H);return t&&R.forEach(function(ae){return e(m,ae)}),be&&Ii(m,D),S}function v(m,d,g,T){var S=Fo(g);if(typeof S!="function")throw Error(C(150));if(g=S.call(g),g==null)throw Error(C(151));for(var k=S=null,R=d,D=d=0,H=null,O=g.next();R!==null&&!O.done;D++,O=g.next()){R.index>D?(H=R,R=null):H=R.sibling;var ae=h(m,R,O.value,T);if(ae===null){R===null&&(R=H);break}t&&R&&ae.alternate===null&&e(m,R),d=s(ae,d,D),k===null?S=ae:k.sibling=ae,k=ae,R=H}if(O.done)return n(m,R),be&&Ii(m,D),S;if(R===null){for(;!O.done;D++,O=g.next())O=f(m,O.value,T),O!==null&&(d=s(O,d,D),k===null?S=O:k.sibling=O,k=O);return be&&Ii(m,D),S}for(R=r(m,R);!O.done;D++,O=g.next())O=p(R,m,D,O.value,T),O!==null&&(t&&O.alternate!==null&&R.delete(O.key===null?D:O.key),d=s(O,d,D),k===null?S=O:k.sibling=O,k=O);return t&&R.forEach(function(ne){return e(m,ne)}),be&&Ii(m,D),S}function E(m,d,g,T){if(typeof g=="object"&&g!==null&&g.type===Is&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Yl:e:{for(var S=g.key,k=d;k!==null;){if(k.key===S){if(S=g.type,S===Is){if(k.tag===7){n(m,k.sibling),d=i(k,g.props.children),d.return=m,m=d;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Rr&&q0(S)===k.type){n(m,k.sibling),d=i(k,g.props),d.ref=Bo(m,k,g),d.return=m,m=d;break e}n(m,k);break}else e(m,k);k=k.sibling}g.type===Is?(d=$i(g.props.children,m.mode,T,g.key),d.return=m,m=d):(T=Wu(g.type,g.key,g.props,null,m.mode,T),T.ref=Bo(m,d,g),T.return=m,m=T)}return o(m);case Ss:e:{for(k=g.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=yd(g,m.mode,T),d.return=m,m=d}return o(m);case Rr:return k=g._init,E(m,d,k(g._payload),T)}if(Jo(g))return y(m,d,g,T);if(Fo(g))return v(m,d,g,T);au(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=gd(g,m.mode,T),d.return=m,m=d),o(m)):n(m,d)}return E}var ao=mT(!0),gT=mT(!1),wl={},Un=wi(wl),Ma=wi(wl),Fa=wi(wl);function Ci(t){if(t===wl)throw Error(C(174));return t}function Vg(t,e){switch(ge(Fa,e),ge(Ma,t),ge(Un,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yp(e,t)}we(Un),ge(Un,e)}function lo(){we(Un),we(Ma),we(Fa)}function yT(t){Ci(Fa.current);var e=Ci(Un.current),n=yp(e,t.type);e!==n&&(ge(Ma,t),ge(Un,n))}function Mg(t){Ma.current===t&&(we(Un),we(Ma))}var ke=wi(0);function wc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cd=[];function Fg(){for(var t=0;t<cd.length;t++)cd[t]._workInProgressVersionPrimary=null;cd.length=0}var ju=Sr.ReactCurrentDispatcher,fd=Sr.ReactCurrentBatchConfig,qi=0,Pe=null,qe=null,Ze=null,Ec=!1,ha=!1,$a=0,mC=0;function pt(){throw Error(C(321))}function $g(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!An(t[n],e[n]))return!1;return!0}function jg(t,e,n,r,i,s){if(qi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ju.current=t===null||t.memoizedState===null?_C:wC,t=n(r,i),ha){s=0;do{if(ha=!1,$a=0,25<=s)throw Error(C(301));s+=1,Ze=qe=null,e.updateQueue=null,ju.current=EC,t=n(r,i)}while(ha)}if(ju.current=Tc,e=qe!==null&&qe.next!==null,qi=0,Ze=qe=Pe=null,Ec=!1,e)throw Error(C(300));return t}function Ug(){var t=$a!==0;return $a=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function cn(){if(qe===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=Ze===null?Pe.memoizedState:Ze.next;if(e!==null)Ze=e,qe=t;else{if(t===null)throw Error(C(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function ja(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=cn(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((qi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Pe.lanes|=c,Ki|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,An(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Ki|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dd(t){var e=cn(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);An(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function vT(){}function _T(t,e){var n=Pe,r=cn(),i=e(),s=!An(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,zg(TT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Ua(9,ET.bind(null,n,r,i,e),void 0,null),et===null)throw Error(C(349));qi&30||wT(n,e,i)}return i}function wT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ET(t,e,n,r){e.value=n,e.getSnapshot=r,ST(e)&&IT(t)}function TT(t,e,n){return n(function(){ST(e)&&IT(t)})}function ST(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!An(t,n)}catch{return!0}}function IT(t){var e=hr(t,1);e!==null&&xn(e,t,1,-1)}function K0(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=vC.bind(null,Pe,t),[e.memoizedState,t]}function Ua(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xT(){return cn().memoizedState}function Uu(t,e,n,r){var i=Rn();Pe.flags|=t,i.memoizedState=Ua(1|e,n,void 0,r===void 0?null:r)}function Sf(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&$g(r,o.deps)){i.memoizedState=Ua(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Ua(1|e,n,s,r)}function G0(t,e){return Uu(8390656,8,t,e)}function zg(t,e){return Sf(2048,8,t,e)}function bT(t,e){return Sf(4,2,t,e)}function AT(t,e){return Sf(4,4,t,e)}function kT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function PT(t,e,n){return n=n!=null?n.concat([t]):null,Sf(4,4,kT.bind(null,e,t),n)}function Bg(){}function CT(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$g(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function RT(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$g(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function NT(t,e,n){return qi&21?(An(n,e)||(n=LE(),Pe.lanes|=n,Ki|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function gC(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=fd.transition;fd.transition={};try{t(!1),e()}finally{fe=n,fd.transition=r}}function OT(){return cn().memoizedState}function yC(t,e,n){var r=Jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DT(t))LT(e,n);else if(n=fT(t,e,n,r),n!==null){var i=Ot();xn(n,t,r,i),VT(n,e,r)}}function vC(t,e,n){var r=Jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DT(t))LT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,An(a,o)){var l=e.interleaved;l===null?(i.next=i,Dg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=fT(t,e,i,r),n!==null&&(i=Ot(),xn(n,t,r,i),VT(n,e,r))}}function DT(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function LT(t,e){ha=Ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function VT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,wg(t,n)}}var Tc={readContext:un,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},_C={readContext:un,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:G0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,kT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yC.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:K0,useDebugValue:Bg,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=K0(!1),e=t[0];return t=gC.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Rn();if(be){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),et===null)throw Error(C(349));qi&30||wT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,G0(TT.bind(null,r,s,t),[t]),r.flags|=2048,Ua(9,ET.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rn(),e=et.identifierPrefix;if(be){var n=sr,r=ir;n=(r&~(1<<32-In(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wC={readContext:un,useCallback:CT,useContext:un,useEffect:zg,useImperativeHandle:PT,useInsertionEffect:bT,useLayoutEffect:AT,useMemo:RT,useReducer:hd,useRef:xT,useState:function(){return hd(ja)},useDebugValue:Bg,useDeferredValue:function(t){var e=cn();return NT(e,qe.memoizedState,t)},useTransition:function(){var t=hd(ja)[0],e=cn().memoizedState;return[t,e]},useMutableSource:vT,useSyncExternalStore:_T,useId:OT,unstable_isNewReconciler:!1},EC={readContext:un,useCallback:CT,useContext:un,useEffect:zg,useImperativeHandle:PT,useInsertionEffect:bT,useLayoutEffect:AT,useMemo:RT,useReducer:dd,useRef:xT,useState:function(){return dd(ja)},useDebugValue:Bg,useDeferredValue:function(t){var e=cn();return qe===null?e.memoizedState=t:NT(e,qe.memoizedState,t)},useTransition:function(){var t=dd(ja)[0],e=cn().memoizedState;return[t,e]},useMutableSource:vT,useSyncExternalStore:_T,useId:OT,unstable_isNewReconciler:!1};function uo(t,e){try{var n="",r=e;do n+=Qk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TC=typeof WeakMap=="function"?WeakMap:Map;function MT(t,e,n){n=ur(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ic||(Ic=!0,Yp=r),jp(t,e)},n}function FT(t,e,n){n=ur(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jp(t,e),typeof r!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Q0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VC.bind(null,t,e,n),e.then(t,t))}function Y0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function X0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ur(-1,1),e.tag=2,Yr(n,e,1))),n.lanes|=1),t)}var SC=Sr.ReactCurrentOwner,Ft=!1;function Pt(t,e,n,r){e.child=t===null?gT(e,null,n,r):ao(e,t.child,n,r)}function J0(t,e,n,r,i){n=n.render;var s=e.ref;return qs(e,i),r=jg(t,e,n,r,s,i),n=Ug(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(be&&n&&kg(e),e.flags|=1,Pt(t,e,r,i),e.child)}function Z0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$T(t,e,s,r,i)):(t=Wu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,r)&&t.ref===e.ref)return dr(t,e,i)}return e.flags|=1,t=Zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function $T(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oa(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,dr(t,e,i)}return Up(t,e,n,r,i)}function jT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ds,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ds,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(Ds,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(Ds,zt),zt|=r;return Pt(t,e,i,n),e.child}function UT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Up(t,e,n,r,i){var s=jt(n)?Hi:xt.current;return s=so(e,s),qs(e,i),n=jg(t,e,n,r,s,i),r=Ug(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,dr(t,e,i)):(be&&r&&kg(e),e.flags|=1,Pt(t,e,n,i),e.child)}function e_(t,e,n,r,i){if(jt(n)){var s=!0;pc(e)}else s=!1;if(qs(e,i),e.stateNode===null)zu(t,e),pT(e,n,r),$p(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=jt(n)?Hi:xt.current,u=so(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&W0(e,o,r,u),Nr=!1;var h=e.memoizedState;o.state=h,_c(e,r,o,i),l=e.memoizedState,a!==r||h!==l||$t.current||Nr?(typeof c=="function"&&(Fp(e,n,c,r),l=e.memoizedState),(a=Nr||H0(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:gn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=jt(n)?Hi:xt.current,l=so(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&W0(e,o,r,l),Nr=!1,h=e.memoizedState,o.state=h,_c(e,r,o,i);var y=e.memoizedState;a!==f||h!==y||$t.current||Nr?(typeof p=="function"&&(Fp(e,n,p,r),y=e.memoizedState),(u=Nr||H0(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return zp(t,e,n,r,s,i)}function zp(t,e,n,r,i,s){UT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$0(e,n,!1),dr(t,e,s);r=e.stateNode,SC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ao(e,t.child,null,s),e.child=ao(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&$0(e,n,!0),e.child}function zT(t){var e=t.stateNode;e.pendingContext?F0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&F0(t,e.context,!1),Vg(t,e.containerInfo)}function t_(t,e,n,r,i){return oo(),Cg(i),e.flags|=256,Pt(t,e,n,r),e.child}var Bp={dehydrated:null,treeContext:null,retryLane:0};function Hp(t){return{baseLanes:t,cachePool:null,transitions:null}}function BT(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(ke,i&1),t===null)return Vp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bf(o,r,0,null),t=$i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hp(n),e.memoizedState=Bp,t):Hg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=$i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bp,r}return s=t.child,t=s.sibling,r=Zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hg(t,e){return e=bf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lu(t,e,n,r){return r!==null&&Cg(r),ao(e,t.child,null,n),t=Hg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(C(422))),lu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bf({mode:"visible",children:r.children},i,0,null),s=$i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ao(e,t.child,null,o),e.child.memoizedState=Hp(o),e.memoizedState=Bp,s);if(!(e.mode&1))return lu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=pd(s,r,void 0),lu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),xn(r,t,i,-1))}return Yg(),r=pd(Error(C(421))),lu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Qr(i.nextSibling),qt=e,be=!0,vn=null,t!==null&&(tn[nn++]=ir,tn[nn++]=sr,tn[nn++]=Wi,ir=t.id,sr=t.overflow,Wi=e),e=Hg(e,r.children),e.flags|=4096,e)}function n_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mp(t.return,e,n)}function md(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function HT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n_(t,n,e);else if(t.tag===19)n_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),md(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}md(e,!0,n,null,s);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ki|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=Zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xC(t,e,n){switch(e.tag){case 3:zT(e),oo();break;case 5:yT(e);break;case 1:jt(e.type)&&pc(e);break;case 4:Vg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(yc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?BT(t,e,n):(ge(ke,ke.current&1),t=dr(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return HT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,jT(t,e,n)}return dr(t,e,n)}var WT,Wp,qT,KT;WT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wp=function(){};qT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ci(Un.current);var s=null;switch(n){case"input":i=dp(t,i),r=dp(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=gp(t,i),r=gp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hc)}vp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ba.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ba.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ye("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};KT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ho(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bC(t,e,n){var r=e.pendingProps;switch(Pg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return jt(e.type)&&dc(),mt(e),null;case 3:return r=e.stateNode,lo(),we($t),we(xt),Fg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ou(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Zp(vn),vn=null))),Wp(t,e),mt(e),null;case 5:Mg(e);var i=Ci(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)qT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return mt(e),null}if(t=Ci(Un.current),ou(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Va]=s,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(i=0;i<ea.length;i++)ye(ea[i],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":f0(r,s),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ye("invalid",r);break;case"textarea":d0(r,s),ye("invalid",r)}vp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&su(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&su(r.textContent,a,t),i=["children",""+a]):ba.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Xl(r),h0(r,s,!0);break;case"textarea":Xl(r),p0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Va]=r,WT(t,e,!1,!1),e.stateNode=t;e:{switch(o=_p(n,r),n){case"dialog":ye("cancel",t),ye("close",t),i=r;break;case"iframe":case"object":case"embed":ye("load",t),i=r;break;case"video":case"audio":for(i=0;i<ea.length;i++)ye(ea[i],t);i=r;break;case"source":ye("error",t),i=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),i=r;break;case"details":ye("toggle",t),i=r;break;case"input":f0(t,r),i=dp(t,r),ye("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ye("invalid",t);break;case"textarea":d0(t,r),i=gp(t,r),ye("invalid",t);break;default:i=r}vp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?SE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&EE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Aa(t,l):typeof l=="number"&&Aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ye("scroll",t):l!=null&&pg(t,s,l,o))}switch(n){case"input":Xl(t),h0(t,r,!1);break;case"textarea":Xl(t),p0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)KT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Ci(Fa.current),Ci(Un.current),ou(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=qt,t!==null))switch(t.tag){case 3:su(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&su(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return mt(e),null;case 13:if(we(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Ht!==null&&e.mode&1&&!(e.flags&128))cT(),oo(),e.flags|=98560,s=!1;else if(s=ou(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[On]=e}else oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else vn!==null&&(Zp(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Ge===0&&(Ge=3):Yg())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return lo(),Wp(t,e),t===null&&Da(e.stateNode.containerInfo),mt(e),null;case 10:return Og(e.type._context),mt(e),null;case 17:return jt(e.type)&&dc(),mt(e),null;case 19:if(we(ke),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ho(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wc(t),o!==null){for(e.flags|=128,Ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>co&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=wc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!be)return mt(e),null}else 2*je()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Qg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function AC(t,e){switch(Pg(e),e.tag){case 1:return jt(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),we($t),we(xt),Fg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mg(e),null;case 13:if(we(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(ke),null;case 4:return lo(),null;case 10:return Og(e.type._context),null;case 22:case 23:return Qg(),null;case 24:return null;default:return null}}var uu=!1,_t=!1,kC=typeof WeakSet=="function"?WeakSet:Set,$=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function qp(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var r_=!1;function PC(t,e){if(Pp=uc,t=XE(),Ag(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cp={focusedElem:t,selectionRange:n},uc=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:gn(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(T){Oe(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return y=r_,r_=!1,y}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qp(e,n,s)}i=i.next}while(i!==r)}}function If(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Kp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function GT(t){var e=t.alternate;e!==null&&(t.alternate=null,GT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Va],delete e[Op],delete e[fC],delete e[hC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function QT(t){return t.tag===5||t.tag===3||t.tag===4}function i_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||QT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(r!==4&&(t=t.child,t!==null))for(Gp(t,e,n),t=t.sibling;t!==null;)Gp(t,e,n),t=t.sibling}function Qp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qp(t,e,n),t=t.sibling;t!==null;)Qp(t,e,n),t=t.sibling}var ot=null,yn=!1;function br(t,e,n){for(n=n.child;n!==null;)YT(t,e,n),n=n.sibling}function YT(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(gf,n)}catch{}switch(n.tag){case 5:_t||Os(n,e);case 6:var r=ot,i=yn;ot=null,br(t,e,n),ot=r,yn=i,ot!==null&&(yn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(yn?(t=ot,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),Ra(t)):ld(ot,n.stateNode));break;case 4:r=ot,i=yn,ot=n.stateNode.containerInfo,yn=!0,br(t,e,n),ot=r,yn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qp(n,e,o),i=i.next}while(i!==r)}br(t,e,n);break;case 1:if(!_t&&(Os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}br(t,e,n);break;case 21:br(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,br(t,e,n),_t=r):br(t,e,n);break;default:br(t,e,n)}}function s_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kC),e.forEach(function(r){var i=FC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,yn=!1;break e;case 3:ot=a.stateNode.containerInfo,yn=!0;break e;case 4:ot=a.stateNode.containerInfo,yn=!0;break e}a=a.return}if(ot===null)throw Error(C(160));YT(s,o,i),ot=null,yn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)XT(e,t),e=e.sibling}function XT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pn(e,t),Cn(t),r&4){try{da(3,t,t.return),If(3,t)}catch(v){Oe(t,t.return,v)}try{da(5,t,t.return)}catch(v){Oe(t,t.return,v)}}break;case 1:pn(e,t),Cn(t),r&512&&n!==null&&Os(n,n.return);break;case 5:if(pn(e,t),Cn(t),r&512&&n!==null&&Os(n,n.return),t.flags&32){var i=t.stateNode;try{Aa(i,"")}catch(v){Oe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&vE(i,s),_p(a,o);var u=_p(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?SE(i,f):c==="dangerouslySetInnerHTML"?EE(i,f):c==="children"?Aa(i,f):pg(i,c,f,u)}switch(a){case"input":pp(i,s);break;case"textarea":_E(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?zs(i,!!s.multiple,s.defaultValue,!0):zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Va]=s}catch(v){Oe(t,t.return,v)}}break;case 6:if(pn(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Oe(t,t.return,v)}}break;case 3:if(pn(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(v){Oe(t,t.return,v)}break;case 4:pn(e,t),Cn(t);break;case 13:pn(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kg=je())),r&4&&s_(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(u=_t)||c,pn(e,t),_t=u):pn(e,t),Cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(f=$=c;$!==null;){switch(h=$,p=h.child,h.tag){case 0:case 11:case 14:case 15:da(4,h,h.return);break;case 1:Os(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Oe(r,n,v)}}break;case 5:Os(h,h.return);break;case 22:if(h.memoizedState!==null){a_(f);continue}}p!==null?(p.return=h,$=p):a_(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=TE("display",o))}catch(v){Oe(t,t.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Oe(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:pn(e,t),Cn(t),r&4&&s_(t);break;case 21:break;default:pn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(QT(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Aa(i,""),r.flags&=-33);var s=i_(t);Qp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=i_(t);Gp(t,a,o);break;default:throw Error(C(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CC(t,e,n){$=t,JT(t)}function JT(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=uu;var u=_t;if(uu=o,(_t=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?l_(i):l!==null?(l.return=o,$=l):l_(i);for(;s!==null;)$=s,JT(s),s=s.sibling;$=i,uu=a,_t=u}o_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):o_(t)}}function o_(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||If(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&B0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}_t||e.flags&512&&Kp(e)}catch(h){Oe(e,e.return,h)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function a_(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function l_(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{If(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Oe(e,i,l)}}var s=e.return;try{Kp(e)}catch(l){Oe(e,s,l)}break;case 5:var o=e.return;try{Kp(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var RC=Math.ceil,Sc=Sr.ReactCurrentDispatcher,Wg=Sr.ReactCurrentOwner,ln=Sr.ReactCurrentBatchConfig,ue=0,et=null,He=null,ut=0,zt=0,Ds=wi(0),Ge=0,za=null,Ki=0,xf=0,qg=0,pa=null,Mt=null,Kg=0,co=1/0,er=null,Ic=!1,Yp=null,Xr=null,cu=!1,Ur=null,xc=0,ma=0,Xp=null,Bu=-1,Hu=0;function Ot(){return ue&6?je():Bu!==-1?Bu:Bu=je()}function Jr(t){return t.mode&1?ue&2&&ut!==0?ut&-ut:pC.transition!==null?(Hu===0&&(Hu=LE()),Hu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:zE(t.type)),t):1}function xn(t,e,n,r){if(50<ma)throw ma=0,Xp=null,Error(C(185));yl(t,n,r),(!(ue&2)||t!==et)&&(t===et&&(!(ue&2)&&(xf|=n),Ge===4&&Dr(t,ut)),Ut(t,r),n===1&&ue===0&&!(e.mode&1)&&(co=je()+500,Ef&&Ei()))}function Ut(t,e){var n=t.callbackNode;pP(t,e);var r=lc(t,t===et?ut:0);if(r===0)n!==null&&y0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&y0(n),e===1)t.tag===0?dC(u_.bind(null,t)):aT(u_.bind(null,t)),uC(function(){!(ue&6)&&Ei()}),n=null;else{switch(VE(r)){case 1:n=_g;break;case 4:n=OE;break;case 16:n=ac;break;case 536870912:n=DE;break;default:n=ac}n=oS(n,ZT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ZT(t,e){if(Bu=-1,Hu=0,ue&6)throw Error(C(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=lc(t,t===et?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bc(t,r);else{e=r;var i=ue;ue|=2;var s=tS();(et!==t||ut!==e)&&(er=null,co=je()+500,Fi(t,e));do try{DC();break}catch(a){eS(t,a)}while(1);Ng(),Sc.current=s,ue=i,He!==null?e=0:(et=null,ut=0,e=Ge)}if(e!==0){if(e===2&&(i=Ip(t),i!==0&&(r=i,e=Jp(t,i))),e===1)throw n=za,Fi(t,0),Dr(t,r),Ut(t,je()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!NC(i)&&(e=bc(t,r),e===2&&(s=Ip(t),s!==0&&(r=s,e=Jp(t,s))),e===1))throw n=za,Fi(t,0),Dr(t,r),Ut(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:xi(t,Mt,er);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=Kg+500-je(),10<e)){if(lc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Np(xi.bind(null,t,Mt,er),e);break}xi(t,Mt,er);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-In(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RC(r/1960))-r,10<r){t.timeoutHandle=Np(xi.bind(null,t,Mt,er),r);break}xi(t,Mt,er);break;case 5:xi(t,Mt,er);break;default:throw Error(C(329))}}}return Ut(t,je()),t.callbackNode===n?ZT.bind(null,t):null}function Jp(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=bc(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Zp(e)),t}function Zp(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function NC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!An(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~qg,e&=~xf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),r=1<<n;t[n]=-1,e&=~r}}function u_(t){if(ue&6)throw Error(C(327));Ks();var e=lc(t,0);if(!(e&1))return Ut(t,je()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var r=Ip(t);r!==0&&(e=r,n=Jp(t,r))}if(n===1)throw n=za,Fi(t,0),Dr(t,e),Ut(t,je()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xi(t,Mt,er),Ut(t,je()),null}function Gg(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(co=je()+500,Ef&&Ei())}}function Gi(t){Ur!==null&&Ur.tag===0&&!(ue&6)&&Ks();var e=ue;ue|=1;var n=ln.transition,r=fe;try{if(ln.transition=null,fe=1,t)return t()}finally{fe=r,ln.transition=n,ue=e,!(ue&6)&&Ei()}}function Qg(){zt=Ds.current,we(Ds)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lC(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(Pg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dc();break;case 3:lo(),we($t),we(xt),Fg();break;case 5:Mg(r);break;case 4:lo();break;case 13:we(ke);break;case 19:we(ke);break;case 10:Og(r.type._context);break;case 22:case 23:Qg()}n=n.return}if(et=t,He=t=Zr(t.current,null),ut=zt=e,Ge=0,za=null,qg=xf=Ki=0,Mt=pa=null,Pi!==null){for(e=0;e<Pi.length;e++)if(n=Pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pi=null}return t}function eS(t,e){do{var n=He;try{if(Ng(),ju.current=Tc,Ec){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ec=!1}if(qi=0,Ze=qe=Pe=null,ha=!1,$a=0,Wg.current=null,n===null||n.return===null){Ge=1,za=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Y0(o);if(p!==null){p.flags&=-257,X0(p,o,a,s,e),p.mode&1&&Q0(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Q0(s,u,e),Yg();break e}l=Error(C(426))}}else if(be&&a.mode&1){var E=Y0(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),X0(E,o,a,s,e),Cg(uo(l,a));break e}}s=l=uo(l,a),Ge!==4&&(Ge=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=MT(s,l,e);z0(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xr===null||!Xr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var T=FT(s,a,e);z0(s,T);break e}}s=s.return}while(s!==null)}rS(n)}catch(S){e=S,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function tS(){var t=Sc.current;return Sc.current=Tc,t===null?Tc:t}function Yg(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),et===null||!(Ki&268435455)&&!(xf&268435455)||Dr(et,ut)}function bc(t,e){var n=ue;ue|=2;var r=tS();(et!==t||ut!==e)&&(er=null,Fi(t,e));do try{OC();break}catch(i){eS(t,i)}while(1);if(Ng(),ue=n,Sc.current=r,He!==null)throw Error(C(261));return et=null,ut=0,Ge}function OC(){for(;He!==null;)nS(He)}function DC(){for(;He!==null&&!sP();)nS(He)}function nS(t){var e=sS(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?rS(t):He=e,Wg.current=null}function rS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AC(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,He=null;return}}else if(n=bC(n,e,zt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ge===0&&(Ge=5)}function xi(t,e,n){var r=fe,i=ln.transition;try{ln.transition=null,fe=1,LC(t,e,n,r)}finally{ln.transition=i,fe=r}return null}function LC(t,e,n,r){do Ks();while(Ur!==null);if(ue&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(mP(t,s),t===et&&(He=et=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cu||(cu=!0,oS(ac,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=fe;fe=1;var a=ue;ue|=4,Wg.current=null,PC(t,n),XT(n,t),tC(Cp),uc=!!Pp,Cp=Pp=null,t.current=n,CC(n),oP(),ue=a,fe=o,ln.transition=s}else t.current=n;if(cu&&(cu=!1,Ur=t,xc=i),s=t.pendingLanes,s===0&&(Xr=null),uP(n.stateNode),Ut(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ic)throw Ic=!1,t=Yp,Yp=null,t;return xc&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===Xp?ma++:(ma=0,Xp=t):ma=0,Ei(),null}function Ks(){if(Ur!==null){var t=VE(xc),e=ln.transition,n=fe;try{if(ln.transition=null,fe=16>t?16:t,Ur===null)var r=!1;else{if(t=Ur,Ur=null,xc=0,ue&6)throw Error(C(331));var i=ue;for(ue|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:da(8,c,s)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var h=c.sibling,p=c.return;if(GT(c),c===u){$=null;break}if(h!==null){h.return=p,$=h;break}$=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,$=m;break e}$=s.return}}var d=t.current;for($=d;$!==null;){o=$;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,$=g;else e:for(o=d;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:If(9,a)}}catch(S){Oe(a,a.return,S)}if(a===o){$=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,$=T;break e}$=a.return}}if(ue=i,Ei(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(gf,t)}catch{}r=!0}return r}finally{fe=n,ln.transition=e}}return!1}function c_(t,e,n){e=uo(n,e),e=MT(t,e,1),t=Yr(t,e,1),e=Ot(),t!==null&&(yl(t,1,e),Ut(t,e))}function Oe(t,e,n){if(t.tag===3)c_(t,t,n);else for(;e!==null;){if(e.tag===3){c_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xr===null||!Xr.has(r))){t=uo(n,t),t=FT(e,t,1),e=Yr(e,t,1),t=Ot(),e!==null&&(yl(e,1,t),Ut(e,t));break}}e=e.return}}function VC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(ut&n)===n&&(Ge===4||Ge===3&&(ut&130023424)===ut&&500>je()-Kg?Fi(t,0):qg|=n),Ut(t,e)}function iS(t,e){e===0&&(t.mode&1?(e=eu,eu<<=1,!(eu&130023424)&&(eu=4194304)):e=1);var n=Ot();t=hr(t,e),t!==null&&(yl(t,e,n),Ut(t,n))}function MC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iS(t,n)}function FC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),iS(t,n)}var sS;sS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,xC(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,be&&e.flags&1048576&&lT(e,gc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zu(t,e),t=e.pendingProps;var i=so(e,xt.current);qs(e,n),i=jg(null,e,r,t,i,n);var s=Ug();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,pc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lg(e),i.updater=Tf,e.stateNode=i,i._reactInternals=e,$p(e,r,t,n),e=zp(null,e,r,!0,s,n)):(e.tag=0,be&&s&&kg(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=jC(r),t=gn(r,t),i){case 0:e=Up(null,e,r,t,n);break e;case 1:e=e_(null,e,r,t,n);break e;case 11:e=J0(null,e,r,t,n);break e;case 14:e=Z0(null,e,r,gn(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),Up(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),e_(t,e,r,i,n);case 3:e:{if(zT(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hT(t,e),_c(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=uo(Error(C(423)),e),e=t_(t,e,r,n,i);break e}else if(r!==i){i=uo(Error(C(424)),e),e=t_(t,e,r,n,i);break e}else for(Ht=Qr(e.stateNode.containerInfo.firstChild),qt=e,be=!0,vn=null,n=gT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oo(),r===i){e=dr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return yT(e),t===null&&Vp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rp(r,i)?o=null:s!==null&&Rp(r,s)&&(e.flags|=32),UT(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Vp(e),null;case 13:return BT(t,e,n);case 4:return Vg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ao(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),J0(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(yc,r._currentValue),r._currentValue=o,s!==null)if(An(s.value,o)){if(s.children===i.children&&!$t.current){e=dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=ur(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Mp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=un(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=gn(r,e.pendingProps),i=gn(r.type,i),Z0(t,e,r,i,n);case 15:return $T(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gn(r,i),zu(t,e),e.tag=1,jt(r)?(t=!0,pc(e)):t=!1,qs(e,n),pT(e,r,i),$p(e,r,i,n),zp(null,e,r,!0,t,n);case 19:return HT(t,e,n);case 22:return jT(t,e,n)}throw Error(C(156,e.tag))};function oS(t,e){return NE(t,e)}function $C(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new $C(t,e,n,r)}function Xg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jC(t){if(typeof t=="function")return Xg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gg)return 11;if(t===yg)return 14}return 2}function Zr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return $i(n.children,i,s,e);case mg:o=8,i|=8;break;case up:return t=an(12,n,e,i|2),t.elementType=up,t.lanes=s,t;case cp:return t=an(13,n,e,i),t.elementType=cp,t.lanes=s,t;case fp:return t=an(19,n,e,i),t.elementType=fp,t.lanes=s,t;case mE:return bf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dE:o=10;break e;case pE:o=9;break e;case gg:o=11;break e;case yg:o=14;break e;case Rr:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $i(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function bf(t,e,n,r){return t=an(22,t,r,e),t.elementType=mE,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xh(0),this.expirationTimes=Xh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jg(t,e,n,r,i,s,o,a,l){return t=new UC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lg(s),t}function zC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function aS(t){if(!t)return ui;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(jt(n))return oT(t,n,e)}return e}function lS(t,e,n,r,i,s,o,a,l){return t=Jg(n,r,!0,t,i,s,o,a,l),t.context=aS(null),n=t.current,r=Ot(),i=Jr(n),s=ur(r,i),s.callback=e??null,Yr(n,s,i),t.current.lanes=i,yl(t,i,r),Ut(t,r),t}function Af(t,e,n,r){var i=e.current,s=Ot(),o=Jr(i);return n=aS(n),e.context===null?e.context=n:e.pendingContext=n,e=ur(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yr(i,e,o),t!==null&&(xn(t,i,o,s),$u(t,i,o)),o}function Ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function f_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zg(t,e){f_(t,e),(t=t.alternate)&&f_(t,e)}function BC(){return null}var uS=typeof reportError=="function"?reportError:function(t){console.error(t)};function ey(t){this._internalRoot=t}kf.prototype.render=ey.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Af(t,e,null,null)};kf.prototype.unmount=ey.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gi(function(){Af(null,t,null,null)}),e[fr]=null}};function kf(t){this._internalRoot=t}kf.prototype.unstable_scheduleHydration=function(t){if(t){var e=$E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&UE(t)}};function ty(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function h_(){}function HC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ac(o);s.call(u)}}var o=lS(e,r,t,0,null,!1,!1,"",h_);return t._reactRootContainer=o,t[fr]=o.current,Da(t.nodeType===8?t.parentNode:t),Gi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ac(l);a.call(u)}}var l=Jg(t,0,!1,null,null,!1,!1,"",h_);return t._reactRootContainer=l,t[fr]=l.current,Da(t.nodeType===8?t.parentNode:t),Gi(function(){Af(e,l,n,r)}),l}function Cf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ac(o);a.call(l)}}Af(e,o,t,i)}else o=HC(n,e,t,i,r);return Ac(o)}ME=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(wg(e,n|1),Ut(e,je()),!(ue&6)&&(co=je()+500,Ei()))}break;case 13:Gi(function(){var r=hr(t,1);if(r!==null){var i=Ot();xn(r,t,1,i)}}),Zg(t,1)}};Eg=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Ot();xn(e,t,134217728,n)}Zg(t,134217728)}};FE=function(t){if(t.tag===13){var e=Jr(t),n=hr(t,e);if(n!==null){var r=Ot();xn(n,t,e,r)}Zg(t,e)}};$E=function(){return fe};jE=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Ep=function(t,e,n){switch(e){case"input":if(pp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wf(r);if(!i)throw Error(C(90));yE(r),pp(r,i)}}}break;case"textarea":_E(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};bE=Gg;AE=Gi;var WC={usingClientEntryPoint:!1,Events:[_l,ks,wf,IE,xE,Gg]},Wo={findFiberByHostInstance:ki,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qC={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=CE(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||BC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{gf=fu.inject(qC),jn=fu}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WC;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ty(e))throw Error(C(200));return zC(t,e,null,n)};Yt.createRoot=function(t,e){if(!ty(t))throw Error(C(299));var n=!1,r="",i=uS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jg(t,1,!1,null,null,n,!1,r,i),t[fr]=e.current,Da(t.nodeType===8?t.parentNode:t),new ey(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=CE(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return Gi(t)};Yt.hydrate=function(t,e,n){if(!Pf(e))throw Error(C(200));return Cf(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!ty(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lS(e,null,t,1,n??null,i,!1,s,o),t[fr]=e.current,Da(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new kf(e)};Yt.render=function(t,e,n){if(!Pf(e))throw Error(C(200));return Cf(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!Pf(t))throw Error(C(40));return t._reactRootContainer?(Gi(function(){Cf(null,null,t,!1,function(){t._reactRootContainer=null,t[fr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Gg;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pf(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Cf(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function cS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cS)}catch(t){console.error(t)}}cS(),lE.exports=Yt;var fS=lE.exports,d_=fS;ap.createRoot=d_.createRoot,ap.hydrateRoot=d_.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}var zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zr||(zr={}));const p_="popstate";function KC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return em("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:kc(i)}return QC(e,n,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ny(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GC(){return Math.random().toString(36).substr(2,8)}function m_(t,e){return{usr:t.state,key:t.key,idx:e}}function em(t,e,n,r){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ao(e):e,{state:n,key:e&&e.key||r||GC()})}function kc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function QC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ba({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=zr.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:v.location,delta:m})}function h(E,m){a=zr.Push;let d=em(v.location,E,m);n&&n(d,E),u=c()+1;let g=m_(d,u),T=v.createHref(d);try{o.pushState(g,"",T)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(T)}s&&l&&l({action:a,location:v.location,delta:1})}function p(E,m){a=zr.Replace;let d=em(v.location,E,m);n&&n(d,E),u=c();let g=m_(d,u),T=v.createHref(d);o.replaceState(g,"",T),s&&l&&l({action:a,location:v.location,delta:0})}function y(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof E=="string"?E:kc(E);return We(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(p_,f),l=E,()=>{i.removeEventListener(p_,f),l=null}},createHref(E){return e(i,E)},createURL:y,encodeLocation(E){let m=y(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:p,go(E){return o.go(E)}};return v}var g_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(g_||(g_={}));function YC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ao(e):e,i=ry(r.pathname||"/",n);if(i==null)return null;let s=hS(t);XC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=oR(s[a],uR(i));return o}function hS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(We(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ei([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(We(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),hS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:iR(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of dS(s.path))i(s,o,l)}),e}function dS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=dS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function XC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JC=/^:\w+$/,ZC=3,eR=2,tR=1,nR=10,rR=-2,y_=t=>t==="*";function iR(t,e){let n=t.split("/"),r=n.length;return n.some(y_)&&(r+=rR),e&&(r+=eR),n.filter(i=>!y_(i)).reduce((i,s)=>i+(JC.test(s)?ZC:s===""?tR:nR),r)}function sR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oR(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=aR({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:ei([i,c.pathname]),pathnameBase:dR(ei([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=ei([i,c.pathnameBase]))}return s}function aR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=cR(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function lR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ny(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function uR(t){try{return decodeURI(t)}catch(e){return ny(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function cR(t,e){try{return decodeURIComponent(t)}catch(n){return ny(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ry(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function fR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ao(t):t;return{pathname:n?n.startsWith("/")?n:hR(n,e):e,search:pR(r),hash:mR(i)}}function hR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function vd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ao(t):(i=Ba({},t),We(!i.pathname||!i.pathname.includes("?"),vd("?","pathname","search",i)),We(!i.pathname||!i.pathname.includes("#"),vd("#","pathname","hash",i)),We(!i.search||!i.search.includes("#"),vd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=fR(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ei=t=>t.join("/").replace(/\/\/+/g,"/"),dR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),pR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,mR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function gR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gS=["post","put","patch","delete"];new Set(gS);const yR=["get",...gS];new Set(yR);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pc(){return Pc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pc.apply(this,arguments)}const iy=P.createContext(null),vR=P.createContext(null),ko=P.createContext(null),Rf=P.createContext(null),os=P.createContext({outlet:null,matches:[],isDataRoute:!1}),yS=P.createContext(null);function _R(t,e){let{relative:n}=e===void 0?{}:e;El()||We(!1);let{basename:r,navigator:i}=P.useContext(ko),{hash:s,pathname:o,search:a}=_S(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ei([r,o])),i.createHref({pathname:l,search:a,hash:s})}function El(){return P.useContext(Rf)!=null}function Nf(){return El()||We(!1),P.useContext(Rf).location}function vS(t){P.useContext(ko).static||P.useLayoutEffect(t)}function Tl(){let{isDataRoute:t}=P.useContext(os);return t?NR():wR()}function wR(){El()||We(!1);let t=P.useContext(iy),{basename:e,navigator:n}=P.useContext(ko),{matches:r}=P.useContext(os),{pathname:i}=Nf(),s=JSON.stringify(pS(r).map(l=>l.pathnameBase)),o=P.useRef(!1);return vS(()=>{o.current=!0}),P.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=mS(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:ei([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function _S(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(os),{pathname:i}=Nf(),s=JSON.stringify(pS(r).map(o=>o.pathnameBase));return P.useMemo(()=>mS(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function ER(t,e){return TR(t,e)}function TR(t,e,n){El()||We(!1);let{navigator:r}=P.useContext(ko),{matches:i}=P.useContext(os),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Nf(),u;if(e){var c;let v=typeof e=="string"?Ao(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||We(!1),u=v}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",p=YC(t,{pathname:h}),y=AR(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:ei([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:ei([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?P.createElement(Rf.Provider,{value:{location:Pc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:zr.Pop}},y):y}function SR(){let t=RR(),e=gR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,s)}const IR=P.createElement(SR,null);class xR extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(os.Provider,{value:this.props.routeContext},P.createElement(yS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bR(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(iy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(os.Provider,{value:e},r)}function AR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||We(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||IR);let h=e.concat(s.slice(0,u+1)),p=()=>{let y;return c?y=f:l.route.Component?y=P.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,P.createElement(bR,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(xR,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var wS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(wS||{}),Cc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cc||{});function kR(t){let e=P.useContext(iy);return e||We(!1),e}function PR(t){let e=P.useContext(vR);return e||We(!1),e}function CR(t){let e=P.useContext(os);return e||We(!1),e}function ES(t){let e=CR(),n=e.matches[e.matches.length-1];return n.route.id||We(!1),n.route.id}function RR(){var t;let e=P.useContext(yS),n=PR(Cc.UseRouteError),r=ES(Cc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function NR(){let{router:t}=kR(wS.UseNavigateStable),e=ES(Cc.UseNavigateStable),n=P.useRef(!1);return vS(()=>{n.current=!0}),P.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Pc({fromRouteId:e},s)))},[t,e])}function Nn(t){We(!1)}function OR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zr.Pop,navigator:s,static:o=!1}=t;El()&&We(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ao(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:p="default"}=r,y=P.useMemo(()=>{let v=ry(u,a);return v==null?null:{location:{pathname:v,search:c,hash:f,state:h,key:p},navigationType:i}},[a,u,c,f,h,p,i]);return y==null?null:P.createElement(ko.Provider,{value:l},P.createElement(Rf.Provider,{children:n,value:y}))}function TS(t){let{children:e,location:n}=t;return ER(tm(e),n)}new Promise(()=>{});function tm(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let s=[...e,i];if(r.type===P.Fragment){n.push.apply(n,tm(r.props.children,s));return}r.type!==Nn&&We(!1),!r.props.index||!r.props.children||We(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=tm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nm(){return nm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nm.apply(this,arguments)}function DR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function LR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VR(t,e){return t.button===0&&(!e||e==="_self")&&!LR(t)}const MR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],FR="startTransition",v_=Mk[FR];function $R(t){let{basename:e,children:n,future:r,window:i}=t,s=P.useRef();s.current==null&&(s.current=KC({window:i,v5Compat:!0}));let o=s.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=P.useCallback(f=>{u&&v_?v_(()=>l(f)):l(f)},[l,u]);return P.useLayoutEffect(()=>o.listen(c),[o,c]),P.createElement(OR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const jR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,f=DR(e,MR),{basename:h}=P.useContext(ko),p,y=!1;if(typeof u=="string"&&UR.test(u)&&(p=u,jR))try{let d=new URL(window.location.href),g=u.startsWith("//")?new URL(d.protocol+u):new URL(u),T=ry(g.pathname,h);g.origin===d.origin&&T!=null?u=T+g.search+g.hash:y=!0}catch{}let v=_R(u,{relative:i}),E=zR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(d){r&&r(d),d.defaultPrevented||E(d)}return P.createElement("a",nm({},f,{href:p||v,onClick:y||s?r:m,ref:n,target:l}))});var __;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(__||(__={}));var w_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(w_||(w_={}));function zR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Tl(),l=Nf(),u=_S(t,{relative:o});return P.useCallback(c=>{if(VR(c,n)){c.preventDefault();let f=r!==void 0?r:kc(l)===kc(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var SS={exports:{}},IS={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=P;function BR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var HR=typeof Object.is=="function"?Object.is:BR,WR=fo.useState,qR=fo.useEffect,KR=fo.useLayoutEffect,GR=fo.useDebugValue;function QR(t,e){var n=e(),r=WR({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return KR(function(){i.value=n,i.getSnapshot=e,_d(i)&&s({inst:i})},[t,n,e]),qR(function(){return _d(i)&&s({inst:i}),t(function(){_d(i)&&s({inst:i})})},[t]),GR(n),n}function _d(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!HR(t,n)}catch{return!0}}function YR(t,e){return e()}var XR=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?YR:QR;IS.useSyncExternalStore=fo.useSyncExternalStore!==void 0?fo.useSyncExternalStore:XR;SS.exports=IS;var JR=SS.exports,xS={exports:{}},bS={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=P,ZR=JR;function e2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var t2=typeof Object.is=="function"?Object.is:e2,n2=ZR.useSyncExternalStore,r2=Of.useRef,i2=Of.useEffect,s2=Of.useMemo,o2=Of.useDebugValue;bS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=r2(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=s2(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var y=o.value;if(i(y,p))return f=y}return f=p}if(y=f,t2(c,p))return y;var v=r(p);return i!==void 0&&i(y,v)?y:(c=p,f=v)}var u=!1,c,f,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=n2(t,s[0],s[1]);return i2(function(){o.hasValue=!0,o.value=a},[a]),o2(a),a};xS.exports=bS;var a2=xS.exports;function l2(t){t()}let AS=l2;const u2=t=>AS=t,c2=()=>AS,E_=Symbol.for("react-redux-context"),T_=typeof globalThis<"u"?globalThis:{};function f2(){var t;if(!P.createContext)return{};const e=(t=T_[E_])!=null?t:T_[E_]=new Map;let n=e.get(P.createContext);return n||(n=P.createContext(null),e.set(P.createContext,n)),n}const ci=f2();function sy(t=ci){return function(){return P.useContext(t)}}const kS=sy(),h2=()=>{throw new Error("uSES not initialized!")};let PS=h2;const d2=t=>{PS=t},p2=(t,e)=>t===e;function m2(t=ci){const e=t===ci?kS:sy(t);return function(r,i={}){const{equalityFn:s=p2,stabilityCheck:o=void 0,noopCheck:a=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:u,getServerState:c,stabilityCheck:f,noopCheck:h}=e();P.useRef(!0);const p=P.useCallback({[r.name](v){return r(v)}}[r.name],[r,f,o]),y=PS(u.addNestedSub,l.getState,c||l.getState,p,s);return P.useDebugValue(y),y}}const ti=m2();var CS={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=typeof Symbol=="function"&&Symbol.for,oy=rt?Symbol.for("react.element"):60103,ay=rt?Symbol.for("react.portal"):60106,Df=rt?Symbol.for("react.fragment"):60107,Lf=rt?Symbol.for("react.strict_mode"):60108,Vf=rt?Symbol.for("react.profiler"):60114,Mf=rt?Symbol.for("react.provider"):60109,Ff=rt?Symbol.for("react.context"):60110,ly=rt?Symbol.for("react.async_mode"):60111,$f=rt?Symbol.for("react.concurrent_mode"):60111,jf=rt?Symbol.for("react.forward_ref"):60112,Uf=rt?Symbol.for("react.suspense"):60113,g2=rt?Symbol.for("react.suspense_list"):60120,zf=rt?Symbol.for("react.memo"):60115,Bf=rt?Symbol.for("react.lazy"):60116,y2=rt?Symbol.for("react.block"):60121,v2=rt?Symbol.for("react.fundamental"):60117,_2=rt?Symbol.for("react.responder"):60118,w2=rt?Symbol.for("react.scope"):60119;function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case oy:switch(t=t.type,t){case ly:case $f:case Df:case Vf:case Lf:case Uf:return t;default:switch(t=t&&t.$$typeof,t){case Ff:case jf:case Bf:case zf:case Mf:return t;default:return e}}case ay:return e}}}function RS(t){return Jt(t)===$f}de.AsyncMode=ly;de.ConcurrentMode=$f;de.ContextConsumer=Ff;de.ContextProvider=Mf;de.Element=oy;de.ForwardRef=jf;de.Fragment=Df;de.Lazy=Bf;de.Memo=zf;de.Portal=ay;de.Profiler=Vf;de.StrictMode=Lf;de.Suspense=Uf;de.isAsyncMode=function(t){return RS(t)||Jt(t)===ly};de.isConcurrentMode=RS;de.isContextConsumer=function(t){return Jt(t)===Ff};de.isContextProvider=function(t){return Jt(t)===Mf};de.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===oy};de.isForwardRef=function(t){return Jt(t)===jf};de.isFragment=function(t){return Jt(t)===Df};de.isLazy=function(t){return Jt(t)===Bf};de.isMemo=function(t){return Jt(t)===zf};de.isPortal=function(t){return Jt(t)===ay};de.isProfiler=function(t){return Jt(t)===Vf};de.isStrictMode=function(t){return Jt(t)===Lf};de.isSuspense=function(t){return Jt(t)===Uf};de.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Df||t===$f||t===Vf||t===Lf||t===Uf||t===g2||typeof t=="object"&&t!==null&&(t.$$typeof===Bf||t.$$typeof===zf||t.$$typeof===Mf||t.$$typeof===Ff||t.$$typeof===jf||t.$$typeof===v2||t.$$typeof===_2||t.$$typeof===w2||t.$$typeof===y2)};de.typeOf=Jt;CS.exports=de;var E2=CS.exports,NS=E2,T2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},S2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},OS={};OS[NS.ForwardRef]=T2;OS[NS.Memo]=S2;var pe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=Symbol.for("react.element"),cy=Symbol.for("react.portal"),Hf=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),I2=Symbol.for("react.server_context"),Qf=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Xf=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),Zf=Symbol.for("react.lazy"),x2=Symbol.for("react.offscreen"),DS;DS=Symbol.for("react.module.reference");function hn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case uy:switch(t=t.type,t){case Hf:case qf:case Wf:case Yf:case Xf:return t;default:switch(t=t&&t.$$typeof,t){case I2:case Gf:case Qf:case Zf:case Jf:case Kf:return t;default:return e}}case cy:return e}}}pe.ContextConsumer=Gf;pe.ContextProvider=Kf;pe.Element=uy;pe.ForwardRef=Qf;pe.Fragment=Hf;pe.Lazy=Zf;pe.Memo=Jf;pe.Portal=cy;pe.Profiler=qf;pe.StrictMode=Wf;pe.Suspense=Yf;pe.SuspenseList=Xf;pe.isAsyncMode=function(){return!1};pe.isConcurrentMode=function(){return!1};pe.isContextConsumer=function(t){return hn(t)===Gf};pe.isContextProvider=function(t){return hn(t)===Kf};pe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===uy};pe.isForwardRef=function(t){return hn(t)===Qf};pe.isFragment=function(t){return hn(t)===Hf};pe.isLazy=function(t){return hn(t)===Zf};pe.isMemo=function(t){return hn(t)===Jf};pe.isPortal=function(t){return hn(t)===cy};pe.isProfiler=function(t){return hn(t)===qf};pe.isStrictMode=function(t){return hn(t)===Wf};pe.isSuspense=function(t){return hn(t)===Yf};pe.isSuspenseList=function(t){return hn(t)===Xf};pe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Hf||t===qf||t===Wf||t===Yf||t===Xf||t===x2||typeof t=="object"&&t!==null&&(t.$$typeof===Zf||t.$$typeof===Jf||t.$$typeof===Kf||t.$$typeof===Gf||t.$$typeof===Qf||t.$$typeof===DS||t.getModuleId!==void 0)};pe.typeOf=hn;function b2(){const t=c2();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const S_={notify(){},get:()=>[]};function A2(t,e){let n,r=S_;function i(f){return l(),r.subscribe(f)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=b2())}function u(){n&&(n(),n=void 0,r.clear(),r=S_)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const k2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P2=k2?P.useLayoutEffect:P.useEffect;function C2({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",noopCheck:s="once"}){const o=P.useMemo(()=>{const u=A2(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:s}},[t,r,i,s]),a=P.useMemo(()=>t.getState(),[t]);P2(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||ci;return P.createElement(l.Provider,{value:o},n)}function LS(t=ci){const e=t===ci?kS:sy(t);return function(){const{store:r}=e();return r}}const R2=LS();function N2(t=ci){const e=t===ci?R2:LS(t);return function(){return e().dispatch}}const O2=N2();d2(a2.useSyncExternalStoreWithSelector);u2(fS.unstable_batchedUpdates);function _n(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function fi(t){return!!t&&!!t[xe]}function pr(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===z2}(t)||Array.isArray(t)||!!t[C_]||!!(!((e=t.constructor)===null||e===void 0)&&e[C_])||fy(t)||hy(t))}function Qi(t,e,n){n===void 0&&(n=!1),Po(t)===0?(n?Object.keys:Qs)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Po(t){var e=t[xe];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:fy(t)?2:hy(t)?3:0}function Gs(t,e){return Po(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function D2(t,e){return Po(t)===2?t.get(e):t[e]}function VS(t,e,n){var r=Po(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function MS(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function fy(t){return j2&&t instanceof Map}function hy(t){return U2&&t instanceof Set}function bi(t){return t.o||t.t}function dy(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=$S(t);delete e[xe];for(var n=Qs(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function py(t,e){return e===void 0&&(e=!1),my(t)||fi(t)||!pr(t)||(Po(t)>1&&(t.set=t.add=t.clear=t.delete=L2),Object.freeze(t),e&&Qi(t,function(n,r){return py(r,!0)},!0)),t}function L2(){_n(2)}function my(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function zn(t){var e=om[t];return e||_n(18,t),e}function V2(t,e){om[t]||(om[t]=e)}function rm(){return Ha}function wd(t,e){e&&(zn("Patches"),t.u=[],t.s=[],t.v=e)}function Rc(t){im(t),t.p.forEach(M2),t.p=null}function im(t){t===Ha&&(Ha=t.l)}function I_(t){return Ha={p:[],l:Ha,h:t,m:!0,_:0}}function M2(t){var e=t[xe];e.i===0||e.i===1?e.j():e.g=!0}function Ed(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.O||zn("ES5").S(e,t,r),r?(n[xe].P&&(Rc(e),_n(4)),pr(t)&&(t=Nc(e,t),e.l||Oc(e,t)),e.u&&zn("Patches").M(n[xe].t,t,e.u,e.s)):t=Nc(e,n,[]),Rc(e),e.u&&e.v(e.u,e.s),t!==FS?t:void 0}function Nc(t,e,n){if(my(e))return e;var r=e[xe];if(!r)return Qi(e,function(a,l){return x_(t,r,e,a,l,n)},!0),e;if(r.A!==t)return e;if(!r.P)return Oc(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=dy(r.k):r.o,s=i,o=!1;r.i===3&&(s=new Set(i),i.clear(),o=!0),Qi(s,function(a,l){return x_(t,r,i,a,l,n,o)}),Oc(t,i,!1),n&&t.u&&zn("Patches").N(r,n,t.u,t.s)}return r.o}function x_(t,e,n,r,i,s,o){if(fi(i)){var a=Nc(t,i,s&&e&&e.i!==3&&!Gs(e.R,r)?s.concat(r):void 0);if(VS(n,r,a),!fi(a))return;t.m=!1}else o&&n.add(i);if(pr(i)&&!my(i)){if(!t.h.D&&t._<1)return;Nc(t,i),e&&e.A.l||Oc(t,i)}}function Oc(t,e,n){n===void 0&&(n=!1),!t.l&&t.h.D&&t.m&&py(e,n)}function Td(t,e){var n=t[xe];return(n?bi(n):t)[e]}function b_(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Lr(t){t.P||(t.P=!0,t.l&&Lr(t.l))}function Sd(t){t.o||(t.o=dy(t.t))}function sm(t,e,n){var r=fy(e)?zn("MapSet").F(e,n):hy(e)?zn("MapSet").T(e,n):t.O?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:rm(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=Wa;o&&(l=[a],u=ta);var c=Proxy.revocable(l,u),f=c.revoke,h=c.proxy;return a.k=h,a.j=f,h}(e,n):zn("ES5").J(e,n);return(n?n.A:rm()).p.push(r),r}function F2(t){return fi(t)||_n(22,t),function e(n){if(!pr(n))return n;var r,i=n[xe],s=Po(n);if(i){if(!i.P&&(i.i<4||!zn("ES5").K(i)))return i.t;i.I=!0,r=A_(n,s),i.I=!1}else r=A_(n,s);return Qi(r,function(o,a){i&&D2(i.t,o)===a||VS(r,o,e(a))}),s===3?new Set(r):r}(t)}function A_(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return dy(t)}function $2(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[xe];return Wa.get(l,s)},set:function(l){var u=this[xe];Wa.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][xe];if(!a.P)switch(a.i){case 5:r(a)&&Lr(a);break;case 4:n(a)&&Lr(a)}}}function n(s){for(var o=s.t,a=s.k,l=Qs(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==xe){var f=o[c];if(f===void 0&&!Gs(o,c))return!0;var h=a[c],p=h&&h[xe];if(p?p.t!==f:!MS(h,f))return!0}}var y=!!o[xe];return l.length!==Qs(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};V2("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,f){if(c){for(var h=Array(f.length),p=0;p<f.length;p++)Object.defineProperty(h,""+p,t(p,!0));return h}var y=$S(f);delete y[xe];for(var v=Qs(y),E=0;E<v.length;E++){var m=v[E];y[m]=t(m,c||!!y[m].enumerable)}return Object.create(Object.getPrototypeOf(f),y)}(a,s),u={i:a?5:4,A:o?o.A:rm(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,xe,{value:u,writable:!0}),l},S:function(s,o,a){a?fi(o)&&o[xe].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[xe];if(c){var f=c.t,h=c.k,p=c.R,y=c.i;if(y===4)Qi(h,function(g){g!==xe&&(f[g]!==void 0||Gs(f,g)?p[g]||l(h[g]):(p[g]=!0,Lr(c)))}),Qi(f,function(g){h[g]!==void 0||Gs(h,g)||(p[g]=!1,Lr(c))});else if(y===5){if(r(c)&&(Lr(c),p.length=!0),h.length<f.length)for(var v=h.length;v<f.length;v++)p[v]=!1;else for(var E=f.length;E<h.length;E++)p[E]=!0;for(var m=Math.min(h.length,f.length),d=0;d<m;d++)h.hasOwnProperty(d)||(p[d]=!0),p[d]===void 0&&l(h[d])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var k_,Ha,gy=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",j2=typeof Map<"u",U2=typeof Set<"u",P_=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",FS=gy?Symbol.for("immer-nothing"):((k_={})["immer-nothing"]=!0,k_),C_=gy?Symbol.for("immer-draftable"):"__$immer_draftable",xe=gy?Symbol.for("immer-state"):"__$immer_state",z2=""+Object.prototype.constructor,Qs=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,$S=Object.getOwnPropertyDescriptors||function(t){var e={};return Qs(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},om={},Wa={get:function(t,e){if(e===xe)return t;var n=bi(t);if(!Gs(n,e))return function(i,s,o){var a,l=b_(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!pr(r)?r:r===Td(t.t,e)?(Sd(t),t.o[e]=sm(t.A.h,r,t)):r},has:function(t,e){return e in bi(t)},ownKeys:function(t){return Reflect.ownKeys(bi(t))},set:function(t,e,n){var r=b_(bi(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=Td(bi(t),e),s=i==null?void 0:i[xe];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(MS(n,i)&&(n!==void 0||Gs(t.t,e)))return!0;Sd(t),Lr(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return Td(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,Sd(t),Lr(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=bi(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){_n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){_n(12)}},ta={};Qi(Wa,function(t,e){ta[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),ta.deleteProperty=function(t,e){return ta.set.call(this,t,e,void 0)},ta.set=function(t,e,n){return Wa.set.call(this,t[0],e,n,t[0])};var B2=function(){function t(n){var r=this;this.O=P_,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(v){var E=this;v===void 0&&(v=a);for(var m=arguments.length,d=Array(m>1?m-1:0),g=1;g<m;g++)d[g-1]=arguments[g];return l.produce(v,function(T){var S;return(S=s).call.apply(S,[E,T].concat(d))})}}var u;if(typeof s!="function"&&_n(6),o!==void 0&&typeof o!="function"&&_n(7),pr(i)){var c=I_(r),f=sm(r,i,void 0),h=!0;try{u=s(f),h=!1}finally{h?Rc(c):im(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(v){return wd(c,o),Ed(v,c)},function(v){throw Rc(c),v}):(wd(c,o),Ed(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===FS&&(u=void 0),r.D&&py(u,!0),o){var p=[],y=[];zn("Patches").M(i,u,p,y),o(p,y)}return u}_n(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),h=1;h<c;h++)f[h-1]=arguments[h];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(f))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){pr(n)||_n(8),fi(n)&&(n=F2(n));var r=I_(this),i=sm(this,n,void 0);return i[xe].C=!0,im(r),i},e.finishDraft=function(n,r){var i=n&&n[xe],s=i.A;return wd(s,r),Ed(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!P_&&_n(20),this.O=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=zn("Patches").$;return fi(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Gt=new B2,jS=Gt.produce;Gt.produceWithPatches.bind(Gt);Gt.setAutoFreeze.bind(Gt);Gt.setUseProxies.bind(Gt);Gt.applyPatches.bind(Gt);Gt.createDraft.bind(Gt);Gt.finishDraft.bind(Gt);function qa(t){"@babel/helpers - typeof";return qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qa(t)}function H2(t,e){if(qa(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(qa(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function W2(t){var e=H2(t,"string");return qa(e)==="symbol"?e:String(e)}function q2(t,e,n){return e=W2(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function R_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N_(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R_(Object(n),!0).forEach(function(r){q2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var O_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Id=function(){return Math.random().toString(36).substring(7).split("").join(".")},Dc={INIT:"@@redux/INIT"+Id(),REPLACE:"@@redux/REPLACE"+Id(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Id()}};function K2(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function US(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(yt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(yt(1));return n(US)(t,e)}if(typeof t!="function")throw new Error(yt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(yt(3));return s}function f(v){if(typeof v!="function")throw new Error(yt(4));if(l)throw new Error(yt(5));var E=!0;return u(),a.push(v),function(){if(E){if(l)throw new Error(yt(6));E=!1,u();var d=a.indexOf(v);a.splice(d,1),o=null}}}function h(v){if(!K2(v))throw new Error(yt(7));if(typeof v.type>"u")throw new Error(yt(8));if(l)throw new Error(yt(9));try{l=!0,s=i(s,v)}finally{l=!1}for(var E=o=a,m=0;m<E.length;m++){var d=E[m];d()}return v}function p(v){if(typeof v!="function")throw new Error(yt(10));i=v,h({type:Dc.REPLACE})}function y(){var v,E=f;return v={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(yt(11));function g(){d.next&&d.next(c())}g();var T=E(g);return{unsubscribe:T}}},v[O_]=function(){return this},v}return h({type:Dc.INIT}),r={dispatch:h,subscribe:f,getState:c,replaceReducer:p},r[O_]=y,r}function G2(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Dc.INIT});if(typeof r>"u")throw new Error(yt(12));if(typeof n(void 0,{type:Dc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(yt(13))})}function Q2(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{G2(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,f={},h=0;h<s.length;h++){var p=s[h],y=n[p],v=l[p],E=y(v,u);if(typeof E>"u")throw u&&u.type,new Error(yt(14));f[p]=E,c=c||E!==v}return c=c||s.length!==Object.keys(l).length,c?f:l}}function Lc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Y2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(yt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Lc.apply(void 0,a)(i.dispatch),N_(N_({},i),{},{dispatch:s})}}}function zS(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var BS=zS();BS.withExtraArgument=zS;const D_=BS;var HS=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),X2=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},ho=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},J2=Object.defineProperty,Z2=Object.defineProperties,eN=Object.getOwnPropertyDescriptors,L_=Object.getOwnPropertySymbols,tN=Object.prototype.hasOwnProperty,nN=Object.prototype.propertyIsEnumerable,V_=function(t,e,n){return e in t?J2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},ni=function(t,e){for(var n in e||(e={}))tN.call(e,n)&&V_(t,n,e[n]);if(L_)for(var r=0,i=L_(e);r<i.length;r++){var n=i[r];nN.call(e,n)&&V_(t,n,e[n])}return t},xd=function(t,e){return Z2(t,eN(e))},rN=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},iN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Lc:Lc.apply(null,arguments)};function sN(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var oN=function(t){HS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ho([void 0],n[0].concat(this)))):new(e.bind.apply(e,ho([void 0],n.concat(this))))},e}(Array),aN=function(t){HS(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,ho([void 0],n[0].concat(this)))):new(e.bind.apply(e,ho([void 0],n.concat(this))))},e}(Array);function am(t){return pr(t)?jS(t,function(){}):t}function lN(t){return typeof t=="boolean"}function uN(){return function(e){return cN(e)}}function cN(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new oN;return n&&(lN(n)?r.push(D_):r.push(D_.withExtraArgument(n.extraArgument))),r}var fN=!0;function hN(t){var e=uN(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,h=f===void 0?void 0:f,p;if(typeof i=="function")p=i;else if(sN(i))p=Q2(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(e));var v=Y2.apply(void 0,y),E=Lc;l&&(E=iN(ni({trace:!fN},typeof l=="object"&&l)));var m=new aN(v),d=m;Array.isArray(h)?d=ho([v],h):typeof h=="function"&&(d=h(m));var g=E.apply(void 0,d);return US(p,c,g)}function ri(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return ni(ni({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function WS(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function dN(t){return typeof t=="function"}function pN(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?WS(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(dN(t))l=function(){return am(t())};else{var u=am(t);l=function(){return u}}function c(f,h){f===void 0&&(f=l());var p=ho([s[h.type]],o.filter(function(y){var v=y.matcher;return v(h)}).map(function(y){var v=y.reducer;return v}));return p.filter(function(y){return!!y}).length===0&&(p=[a]),p.reduce(function(y,v){if(v)if(fi(y)){var E=y,m=v(E,h);return m===void 0?y:m}else{if(pr(y))return jS(y,function(d){return v(d,h)});var m=v(y,h);if(m===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return y},f)}return c.getInitialState=l,c}function mN(t,e){return t+"/"+e}function gN(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:am(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var f=r[c],h=mN(e,c),p,y;"reducer"in f?(p=f.reducer,y=f.prepare):p=f,s[c]=p,o[h]=p,a[c]=y?ri(h,y):ri(h)});function l(){var c=typeof t.extraReducers=="function"?WS(t.extraReducers):[t.extraReducers],f=c[0],h=f===void 0?{}:f,p=c[1],y=p===void 0?[]:p,v=c[2],E=v===void 0?void 0:v,m=ni(ni({},h),o);return pN(n,function(d){for(var g in m)d.addCase(g,m[g]);for(var T=0,S=y;T<S.length;T++){var k=S[T];d.addMatcher(k.matcher,k.reducer)}E&&d.addDefaultCase(E)})}var u;return{name:e,reducer:function(c,f){return u||(u=l()),u(c,f)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var yN="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",vN=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=yN[Math.random()*64|0];return e},_N=["name","message","stack","code"],bd=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),M_=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),wN=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=_N;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=ri(e+"/fulfilled",function(u,c,f,h){return{payload:u,meta:xd(ni({},h||{}),{arg:f,requestId:c,requestStatus:"fulfilled"})}}),s=ri(e+"/pending",function(u,c,f){return{payload:void 0,meta:xd(ni({},f||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=ri(e+"/rejected",function(u,c,f,h,p){return{payload:h,error:(r&&r.serializeError||wN)(u||"Rejected"),meta:xd(ni({},p||{}),{arg:f,requestId:c,rejectedWithValue:!!h,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,f,h){var p=r!=null&&r.idGenerator?r.idGenerator(u):vN(),y=new a,v;function E(d){v=d,y.abort()}var m=function(){return rN(this,null,function(){var d,g,T,S,k,R,D;return X2(this,function(H){switch(H.label){case 0:return H.trys.push([0,4,,5]),S=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:f,extra:h}),TN(S)?[4,S]:[3,2];case 1:S=H.sent(),H.label=2;case 2:if(S===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return k=new Promise(function(O,ae){return y.signal.addEventListener("abort",function(){return ae({name:"AbortError",message:v||"Aborted"})})}),c(s(p,u,(g=r==null?void 0:r.getPendingMeta)==null?void 0:g.call(r,{requestId:p,arg:u},{getState:f,extra:h}))),[4,Promise.race([k,Promise.resolve(n(u,{dispatch:c,getState:f,extra:h,requestId:p,signal:y.signal,abort:E,rejectWithValue:function(O,ae){return new bd(O,ae)},fulfillWithValue:function(O,ae){return new M_(O,ae)}})).then(function(O){if(O instanceof bd)throw O;return O instanceof M_?i(O.payload,p,u,O.meta):i(O,p,u)})])];case 3:return T=H.sent(),[3,5];case 4:return R=H.sent(),T=R instanceof bd?o(null,p,u,R.payload,R.meta):o(R,p,u),[3,5];case 5:return D=r&&!r.dispatchConditionRejection&&o.match(T)&&T.meta.condition,D||c(T),[2,T]}})})}();return Object.assign(m,{abort:E,requestId:p,arg:u,unwrap:function(){return m.then(EN)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function EN(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function TN(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var yy="listenerMiddleware";ri(yy+"/add");ri(yy+"/removeAll");ri(yy+"/remove");var F_;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);$2();const $_={value:{siteName:"HoomanFinder",footerText:"All Copyright @2023 HoomanFinder",themeColor:"#3E3D3C"}},qS=gN({name:"global",initialState:$_,reducers:{updateSiteName:(t,e)=>{t.value.siteName=e.payload},updateFooterText:(t,e)=>{t.value.footerText=e.payload},updateThemeColor:(t,e)=>{t.value.themeColor=e.payload},reset:t=>{t.value=$_.value}}}),{updateSiteName:SN,updateFooterText:IN,updateThemeColor:xN,reset:bN}=qS.actions,AN=qS.reducer,kN=hN({reducer:{global:AN}});/**
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
 */const KS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},GS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(KS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new CN;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RN=function(t){const e=KS(t);return GS.encodeByteArray(e,!0)},Vc=function(t){return RN(t).replace(/\./g,"")},QS=function(t){try{return GS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ON=()=>NN().__FIREBASE_DEFAULTS__,DN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&QS(t[1]);return e&&JSON.parse(e)},eh=()=>{try{return ON()||DN()||LN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YS=t=>{var e,n;return(n=(e=eh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XS=t=>{const e=YS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JS=()=>{var t;return(t=eh())===null||t===void 0?void 0:t.config},ZS=t=>{var e;return(e=eh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class VN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vc(JSON.stringify(n)),Vc(JSON.stringify(o)),a].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function FN(){var t;const e=(t=eh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $N(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UN(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zN(){try{return typeof indexedDB=="object"}catch{return!1}}function BN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const HN="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HN,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,a,r)}}function WN(t,e){return t.replace(qN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qN=/\{\$([^}]+)}/g;function KN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(j_(s)&&j_(o)){if(!Mc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j_(t){return t!==null&&typeof t=="object"}/**
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
 */function Il(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function GN(t,e){const n=new QN(t,e);return n.subscribe.bind(n)}class QN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ad),i.error===void 0&&(i.error=Ad),i.complete===void 0&&(i.complete=Ad);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ad(){}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class XN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZN(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JN(t){return t===Ai?void 0:t}function ZN(t){return t.instantiationMode==="EAGER"}/**
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
 */class eO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const tO={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},nO=oe.INFO,rO={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},iO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vy{constructor(e){this.name=e,this._logLevel=nO,this._logHandler=iO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const sO=(t,e)=>e.some(n=>t instanceof n);let U_,z_;function oO(){return U_||(U_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aO(){return z_||(z_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tI=new WeakMap,lm=new WeakMap,nI=new WeakMap,kd=new WeakMap,_y=new WeakMap;function lO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tI.set(n,t)}).catch(()=>{}),_y.set(e,t),e}function uO(t){if(lm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lm.set(t,e)}let um={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cO(t){um=t(um)}function fO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return nI.set(r,e.sort?e.sort():[e]),ii(r)}:aO().includes(t)?function(...e){return t.apply(Pd(this),e),ii(tI.get(this))}:function(...e){return ii(t.apply(Pd(this),e))}}function hO(t){return typeof t=="function"?fO(t):(t instanceof IDBTransaction&&uO(t),sO(t,oO())?new Proxy(t,um):t)}function ii(t){if(t instanceof IDBRequest)return lO(t);if(kd.has(t))return kd.get(t);const e=hO(t);return e!==t&&(kd.set(t,e),_y.set(e,t)),e}const Pd=t=>_y.get(t);function dO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ii(o.result),l.oldVersion,l.newVersion,ii(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pO=["get","getKey","getAll","getAllKeys","count"],mO=["put","add","delete","clear"],Cd=new Map;function B_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pO.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cd.set(e,s),s}cO(t=>({...t,get:(e,n,r)=>B_(e,n)||t.get(e,n,r),has:(e,n)=>!!B_(e,n)||t.has(e,n)}));/**
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
 */class gO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cm="@firebase/app",H_="0.9.18";/**
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
 */const Yi=new vy("@firebase/app"),vO="@firebase/app-compat",_O="@firebase/analytics-compat",wO="@firebase/analytics",EO="@firebase/app-check-compat",TO="@firebase/app-check",SO="@firebase/auth",IO="@firebase/auth-compat",xO="@firebase/database",bO="@firebase/database-compat",AO="@firebase/functions",kO="@firebase/functions-compat",PO="@firebase/installations",CO="@firebase/installations-compat",RO="@firebase/messaging",NO="@firebase/messaging-compat",OO="@firebase/performance",DO="@firebase/performance-compat",LO="@firebase/remote-config",VO="@firebase/remote-config-compat",MO="@firebase/storage",FO="@firebase/storage-compat",$O="@firebase/firestore",jO="@firebase/firestore-compat",UO="firebase",zO="10.3.1";/**
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
 */const fm="[DEFAULT]",BO={[cm]:"fire-core",[vO]:"fire-core-compat",[wO]:"fire-analytics",[_O]:"fire-analytics-compat",[TO]:"fire-app-check",[EO]:"fire-app-check-compat",[SO]:"fire-auth",[IO]:"fire-auth-compat",[xO]:"fire-rtdb",[bO]:"fire-rtdb-compat",[AO]:"fire-fn",[kO]:"fire-fn-compat",[PO]:"fire-iid",[CO]:"fire-iid-compat",[RO]:"fire-fcm",[NO]:"fire-fcm-compat",[OO]:"fire-perf",[DO]:"fire-perf-compat",[LO]:"fire-rc",[VO]:"fire-rc-compat",[MO]:"fire-gcs",[FO]:"fire-gcs-compat",[$O]:"fire-fst",[jO]:"fire-fst-compat","fire-js":"fire-js",[UO]:"fire-js-all"};/**
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
 */const Fc=new Map,hm=new Map;function HO(t,e){try{t.container.addComponent(e)}catch(n){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xi(t){const e=t.name;if(hm.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;hm.set(e,t);for(const n of Fc.values())HO(n,t);return!0}function th(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const WO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},si=new Sl("app","Firebase",WO);/**
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
 */class qO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const as=zO;function rI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw si.create("bad-app-name",{appName:String(i)});if(n||(n=JS()),!n)throw si.create("no-options");const s=Fc.get(i);if(s){if(Mc(n,s.options)&&Mc(r,s.config))return s;throw si.create("duplicate-app",{appName:i})}const o=new eO(i);for(const l of hm.values())o.addComponent(l);const a=new qO(n,r,o);return Fc.set(i,a),a}function wy(t=fm){const e=Fc.get(t);if(!e&&t===fm&&JS())return rI();if(!e)throw si.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let i=(r=BO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(a.join(" "));return}Xi(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const KO="firebase-heartbeat-database",GO=1,Ka="firebase-heartbeat-store";let Rd=null;function iI(){return Rd||(Rd=dO(KO,GO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ka)}}}).catch(t=>{throw si.create("idb-open",{originalErrorMessage:t.message})})),Rd}async function QO(t){try{return await(await iI()).transaction(Ka).objectStore(Ka).get(sI(t))}catch(e){if(e instanceof Jn)Yi.warn(e.message);else{const n=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(n.message)}}}async function W_(t,e){try{const r=(await iI()).transaction(Ka,"readwrite");await r.objectStore(Ka).put(e,sI(t)),await r.done}catch(n){if(n instanceof Jn)Yi.warn(n.message);else{const r=si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yi.warn(r.message)}}}function sI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YO=1024,XO=30*24*60*60*1e3;class JO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=q_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=XO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=q_(),{heartbeatsToSend:n,unsentEntries:r}=ZO(this._heartbeatsCache.heartbeats),i=Vc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function q_(){return new Date().toISOString().substring(0,10)}function ZO(t,e=YO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),K_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),K_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zN()?BN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return W_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return W_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function K_(t){return Vc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tD(t){Xi(new hi("platform-logger",e=>new gO(e),"PRIVATE")),Xi(new hi("heartbeat",e=>new JO(e),"PRIVATE")),Bn(cm,H_,t),Bn(cm,H_,"esm2017"),Bn("fire-js","")}tD("");var nD="firebase",rD="10.3.1";/**
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
 */Bn(nD,rD,"app");function Ey(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iD=oI,aI=new Sl("auth","Firebase",oI());/**
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
 */const $c=new vy("@firebase/auth");function sD(t,...e){$c.logLevel<=oe.WARN&&$c.warn(`Auth (${as}): ${t}`,...e)}function qu(t,...e){$c.logLevel<=oe.ERROR&&$c.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function Qn(t,...e){throw Ty(t,...e)}function Hn(t,...e){return Ty(t,...e)}function lI(t,e,n){const r=Object.assign(Object.assign({},iD()),{[e]:n});return new Sl("auth","Firebase",r).create(e,{appName:t.name})}function oD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qn(t,"argument-error"),lI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ty(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aI.create(t,...e)}function Z(t,e,...n){if(!t)throw Ty(e,...n)}function or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qu(e),new Error(e)}function mr(t,e){t||or(e)}/**
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
 */function dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aD(){return G_()==="http:"||G_()==="https:"}function G_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function lD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aD()||$N()||"connection"in navigator)?navigator.onLine:!0}function uD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xl{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=MN()||jN()}get(){return lD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sy(t,e){mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fD=new xl(3e4,6e4);function cI(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bl(t,e,n,r,i={}){return fI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Il(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uI.fetch()(hI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function fI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cD),e);try{const i=new dD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lI(t,c,u);Qn(t,c)}}catch(i){if(i instanceof Jn)throw i;Qn(t,"network-request-failed",{message:String(i)})}}async function hD(t,e,n,r,i={}){const s=await bl(t,e,n,r,i);return"mfaPendingCredential"in s&&Qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sy(t.config,i):`${t.config.apiScheme}://${i}`}class dD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),fD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function pD(t,e){return bl(t,"POST","/v1/accounts:delete",e)}async function mD(t,e){return bl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gD(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=Iy(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ga(Nd(i.auth_time)),issuedAtTime:ga(Nd(i.iat)),expirationTime:ga(Nd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nd(t){return Number(t)*1e3}function Iy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qu("JWT malformed, contained fewer than 3 sections"),null;try{const i=QS(n);return i?JSON.parse(i):(qu("Failed to decode base64 JWT payload"),null)}catch(i){return qu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yD(t){const e=Iy(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ga(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&vD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _D{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ga(t,mD(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TD(s.providerUserInfo):[],a=ED(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function wD(t){const e=tt(t);await jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ED(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TD(t){return t.map(e=>{var{providerId:n}=e,r=Ey(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function SD(t,e){const n=await fI(t,{},async()=>{const r=Il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await SD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Qa;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qa,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
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
 */function Ar(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ji{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ey(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _D(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ga(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gD(this,e)}reload(){return wD(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ji(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ga(this,pD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:T,isAnonymous:S,providerData:k,stsTokenManager:R}=n;Z(g&&R,e,"internal-error");const D=Qa.fromJSON(this.name,R);Z(typeof g=="string",e,"internal-error"),Ar(f,e.name),Ar(h,e.name),Z(typeof T=="boolean",e,"internal-error"),Z(typeof S=="boolean",e,"internal-error"),Ar(p,e.name),Ar(y,e.name),Ar(v,e.name),Ar(E,e.name),Ar(m,e.name),Ar(d,e.name);const H=new ji({uid:g,auth:e,email:h,emailVerified:T,displayName:f,isAnonymous:S,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:D,createdAt:m,lastLoginAt:d});return k&&Array.isArray(k)&&(H.providerData=k.map(O=>Object.assign({},O))),E&&(H._redirectEventId=E),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qa;i.updateFromServerResponse(n);const s=new ji({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jc(s),s}}/**
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
 */const Q_=new Map;function ar(t){mr(t instanceof Function,"Expected a class definition");let e=Q_.get(t);return e?(mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Q_.set(t,e),e)}/**
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
 */class pI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pI.type="NONE";const Y_=pI;/**
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
 */function Ku(t,e,n){return`firebase:${t}:${e}:${n}`}class Ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ku(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ku("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ji._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ys(ar(Y_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ar(Y_);const o=Ku(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=ji._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ys(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ys(s,e,r))}}/**
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
 */function X_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_I(e))return"Blackberry";if(wI(e))return"Webos";if(xy(e))return"Safari";if((e.includes("chrome/")||gI(e))&&!e.includes("edge/"))return"Chrome";if(vI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mI(t=bt()){return/firefox\//i.test(t)}function xy(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gI(t=bt()){return/crios\//i.test(t)}function yI(t=bt()){return/iemobile/i.test(t)}function vI(t=bt()){return/android/i.test(t)}function _I(t=bt()){return/blackberry/i.test(t)}function wI(t=bt()){return/webos/i.test(t)}function nh(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ID(t=bt()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xD(){return UN()&&document.documentMode===10}function EI(t=bt()){return nh(t)||vI(t)||wI(t)||_I(t)||/windows phone/i.test(t)||yI(t)}function bD(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function TI(t,e=[]){let n;switch(t){case"Browser":n=X_(bt());break;case"Worker":n=`${X_(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
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
 */class AD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kD(t,e={}){return bl(t,"GET","/v2/passwordPolicy",cI(t,e))}/**
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
 */const PD=6;class CD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class RD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new J_(this),this.idTokenSubscription=new J_(this),this.beforeStateQueue=new AD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kD(this),n=new CD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rh(t){return tt(t)}class J_{constructor(e){this.auth=e,this.observer=null,this.addObserver=GN(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ND(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function OD(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ND().appendChild(r)})}function DD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function LD(t,e){const n=th(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mc(s,e??{}))return i;Qn(i,"already-initialized")}return n.initialize({options:e})}function VD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MD(t,e,n){const r=rh(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=SI(e),{host:o,port:a}=FD(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$D()}function SI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FD(t){const e=SI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Z_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Z_(o)}}}function Z_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $D(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class II{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,n){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}/**
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
 */async function Xs(t,e){return hD(t,"POST","/v1/accounts:signInWithIdp",cI(t,e))}/**
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
 */const jD="http://localhost";class Ji extends II{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ey(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xs(e,n)}buildRequest(){const e={requestUri:jD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Il(n)}return e}}/**
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
 */class by{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends by{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vr extends Al{constructor(){super("facebook.com")}static credential(e){return Ji._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
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
 */class rr extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ji._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
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
 */class Mr extends Al{constructor(){super("github.com")}static credential(e){return Ji._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Fr extends Al{constructor(){super("twitter.com")}static credential(e,n){return Ji._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
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
 */class po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ji._fromIdTokenResponse(e,r,i),o=ew(r);return new po({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ew(r);return new po({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ew(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uc extends Jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uc(e,n,r,i)}}function xI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Uc._fromErrorAndOperation(t,s,e,r):s})}async function UD(t,e,n=!1){const r=await Ga(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return po._forOperation(t,"link",r)}/**
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
 */async function zD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ga(t,xI(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Iy(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),po._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qn(r,"user-mismatch"),s}}/**
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
 */async function BD(t,e,n=!1){const r="signIn",i=await xI(t,r,e),s=await po._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function HD(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function WD(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function qD(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function KD(t){return tt(t).signOut()}const zc="__sak";/**
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
 */class bI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zc,"1"),this.storage.removeItem(zc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function GD(){const t=bt();return xy(t)||nh(t)}const QD=1e3,YD=10;class AI extends bI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GD()&&bD(),this.fallbackToPolling=EI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);xD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AI.type="LOCAL";const XD=AI;/**
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
 */class kI extends bI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kI.type="SESSION";const PI=kI;/**
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
 */function JD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ih(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await JD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ih.receivers=[];/**
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
 */function Ay(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ay("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wn(){return window}function eL(t){Wn().location.href=t}/**
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
 */function CI(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function tL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rL(){return CI()?self:null}/**
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
 */const RI="firebaseLocalStorageDb",iL=1,Bc="firebaseLocalStorage",NI="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sh(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function sL(){const t=indexedDB.deleteDatabase(RI);return new kl(t).toPromise()}function pm(){const t=indexedDB.open(RI,iL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:NI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await sL(),e(await pm()))})})}async function tw(t,e,n){const r=sh(t,!0).put({[NI]:e,value:n});return new kl(r).toPromise()}async function oL(t,e){const n=sh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function nw(t,e){const n=sh(t,!0).delete(e);return new kl(n).toPromise()}const aL=800,lL=3;class OI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ih._getInstance(rL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tL(),!this.activeServiceWorker)return;this.sender=new ZD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pm();return await tw(e,zc,"1"),await nw(e,zc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OI.type="LOCAL";const uL=OI;new xl(3e4,6e4);/**
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
 */function DI(t,e){return e?ar(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ky extends II{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cL(t){return BD(t.auth,new ky(t),t.bypassAuthState)}function fL(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),zD(n,new ky(t),t.bypassAuthState)}async function hL(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),UD(n,new ky(t),t.bypassAuthState)}/**
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
 */class LI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cL;case"linkViaPopup":case"linkViaRedirect":return hL;case"reauthViaPopup":case"reauthViaRedirect":return fL;default:Qn(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dL=new xl(2e3,1e4);async function pL(t,e,n){const r=rh(t);oD(t,e,by);const i=DI(r,n);return new Ri(r,"signInViaPopup",e,i).executeNotNull()}class Ri extends LI{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Ay();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dL.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const mL="pendingRedirect",Gu=new Map;class gL extends LI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gu.get(this.auth._key());if(!e){try{const r=await yL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gu.set(this.auth._key(),e)}return this.bypassAuthState||Gu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yL(t,e){const n=wL(e),r=_L(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vL(t,e){Gu.set(t._key(),e)}function _L(t){return ar(t._redirectPersistence)}function wL(t){return Ku(mL,t.config.apiKey,t.name)}async function EL(t,e,n=!1){const r=rh(t),i=DI(r,e),o=await new gL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const TL=10*60*1e3;class SL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TL&&this.cachedEventUids.clear(),this.cachedEventUids.has(rw(e))}saveEventToCache(e){this.cachedEventUids.add(rw(e)),this.lastProcessedEventTime=Date.now()}}function rw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VI(t);default:return!1}}/**
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
 */async function xL(t,e={}){return bl(t,"GET","/v1/projects",e)}/**
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
 */const bL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AL=/^https?/;async function kL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xL(t);for(const n of e)try{if(PL(n))return}catch{}Qn(t,"unauthorized-domain")}function PL(t){const e=dm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AL.test(n))return!1;if(bL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const CL=new xl(3e4,6e4);function iw(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RL(t){return new Promise((e,n)=>{var r,i,s;function o(){iw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iw(),n(Hn(t,"network-request-failed"))},timeout:CL.get()})}if(!((i=(r=Wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wn().gapi)===null||s===void 0)&&s.load)o();else{const a=DD("iframefcb");return Wn()[a]=()=>{gapi.load?o():n(Hn(t,"network-request-failed"))},OD(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qu=null,e})}let Qu=null;function NL(t){return Qu=Qu||RL(t),Qu}/**
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
 */const OL=new xl(5e3,15e3),DL="__/auth/iframe",LL="emulator/auth/iframe",VL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ML=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FL(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sy(e,LL):`https://${t.config.authDomain}/${DL}`,r={apiKey:e.apiKey,appName:t.name,v:as},i=ML.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Il(r).slice(1)}`}async function $L(t){const e=await NL(t),n=Wn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:FL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=Wn().setTimeout(()=>{s(o)},OL.get());function l(){Wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const jL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UL=500,zL=600,BL="_blank",HL="http://localhost";class sw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WL(t,e,n,r=UL,i=zL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=bt().toLowerCase();n&&(a=gI(u)?BL:n),mI(u)&&(e=e||HL,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,y])=>`${h}${p}=${y},`,"");if(ID(u)&&a!=="_self")return qL(e||"",a),new sw(null);const f=window.open(e||"",a,c);Z(f,t,"popup-blocked");try{f.focus()}catch{}return new sw(f)}function qL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KL="__/auth/handler",GL="emulator/auth/handler",QL=encodeURIComponent("fac");async function ow(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:i};if(e instanceof by){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Al){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${QL}=${encodeURIComponent(l)}`:"";return`${YL(t)}?${Il(a).slice(1)}${u}`}function YL({config:t}){return t.emulator?Sy(t,GL):`https://${t.authDomain}/${KL}`}/**
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
 */const Od="webStorageSupport";class XL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PI,this._completeRedirectFn=EL,this._overrideRedirectResult=vL}async _openPopup(e,n,r,i){var s;mr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ow(e,n,r,dm(),i);return WL(e,o,Ay())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ow(e,n,r,dm(),i);return eL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $L(e),r=new SL(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Od,{type:Od},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Od];o!==void 0&&n(!!o),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return EI()||xy()||nh()}}const JL=XL;var aw="@firebase/auth",lw="1.3.0";/**
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
 */class ZL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tV(t){Xi(new hi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TI(t)},u=new RD(r,i,s,l);return VD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xi(new hi("auth-internal",e=>{const n=rh(e.getProvider("auth").getImmediate());return(r=>new ZL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(aw,lw,eV(t)),Bn(aw,lw,"esm2017")}/**
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
 */const nV=5*60,rV=ZS("authIdTokenMaxAge")||nV;let uw=null;const iV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rV)return;const i=n==null?void 0:n.token;uw!==i&&(uw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sV(t=wy()){const e=th(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LD(t,{popupRedirectResolver:JL,persistence:[uL,XD,PI]}),r=ZS("authTokenSyncURL");if(r){const s=iV(r);WD(n,s,()=>s(n.currentUser)),HD(n,o=>s(o))}const i=YS("auth");return i&&MD(n,`http://${i}`),n}tV("Browser");var oV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,Py=Py||{},Y=oV||self;function oh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Pl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function aV(t){return Object.prototype.hasOwnProperty.call(t,Dd)&&t[Dd]||(t[Dd]=++lV)}var Dd="closure_uid_"+(1e9*Math.random()>>>0),lV=0;function uV(t,e,n){return t.call.apply(t.bind,arguments)}function cV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=uV:Tt=cV,Tt.apply(null,arguments)}function du(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ti(){this.s=this.s,this.o=this.o}var fV=0;Ti.prototype.s=!1;Ti.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fV!=0)&&aV(this)};Ti.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const MI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(oh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};var hV=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",()=>{},e),Y.removeEventListener("test",()=>{},e)}catch{}return t}();function Ya(t){return/^[\s\xa0]*$/.test(t)}function ah(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function Dn(t){return ah().indexOf(t)!=-1}function Ry(t){return Ry[" "](t),t}Ry[" "]=function(){};function dV(t,e){var n=sM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var pV=Dn("Opera"),mo=Dn("Trident")||Dn("MSIE"),FI=Dn("Edge"),mm=FI||mo,$I=Dn("Gecko")&&!(ah().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge"))&&!(Dn("Trident")||Dn("MSIE"))&&!Dn("Edge"),mV=ah().toLowerCase().indexOf("webkit")!=-1&&!Dn("Edge");function jI(){var t=Y.document;return t?t.documentMode:void 0}var gm;e:{var Ld="",Vd=function(){var t=ah();if($I)return/rv:([^\);]+)(\)|;)/.exec(t);if(FI)return/Edge\/([\d\.]+)/.exec(t);if(mo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mV)return/WebKit\/(\S+)/.exec(t);if(pV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vd&&(Ld=Vd?Vd[1]:""),mo){var Md=jI();if(Md!=null&&Md>parseFloat(Ld)){gm=String(Md);break e}}gm=Ld}var ym;if(Y.document&&mo){var fw=jI();ym=fw||parseInt(gm,10)||void 0}else ym=void 0;var gV=ym;function Xa(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($I){e:{try{Ry(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:yV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xa.$.h.call(this)}}it(Xa,St);var yV={2:"touch",3:"pen",4:"mouse"};Xa.prototype.h=function(){Xa.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Cl="closure_listenable_"+(1e6*Math.random()|0),vV=0;function _V(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++vV,this.fa=this.ia=!1}function lh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ny(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function UI(t){const e={};for(const n in t)e[n]=t[n];return e}const hw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<hw.length;s++)n=hw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function uh(t){this.src=t,this.g={},this.h=0}uh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=_m(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new _V(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function vm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=MI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function _m(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Oy="closure_lm_"+(1e6*Math.random()|0),Fd={};function BI(t,e,n,r,i){if(r&&r.once)return WI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)BI(t,e[s],n,r,i);return null}return n=Vy(n),t&&t[Cl]?t.O(e,n,Pl(r)?!!r.capture:!!r,i):HI(t,e,n,!1,r,i)}function HI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Pl(i)?!!i.capture:!!i,a=Ly(t);if(a||(t[Oy]=a=new uh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=EV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)hV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(KI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function EV(){function t(n){return e.call(t.src,t.listener,n)}const e=TV;return t}function WI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)WI(t,e[s],n,r,i);return null}return n=Vy(n),t&&t[Cl]?t.P(e,n,Pl(r)?!!r.capture:!!r,i):HI(t,e,n,!0,r,i)}function qI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)qI(t,e[s],n,r,i);else r=Pl(r)?!!r.capture:!!r,n=Vy(n),t&&t[Cl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=_m(s,n,r,i),-1<n&&(lh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ly(t))&&(e=t.g[e.toString()],t=-1,e&&(t=_m(e,n,r,i)),(n=-1<t?e[t]:null)&&Dy(n))}function Dy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Cl])vm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(KI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ly(e))?(vm(n,t),n.h==0&&(n.src=null,e[Oy]=null)):lh(t)}}}function KI(t){return t in Fd?Fd[t]:Fd[t]="on"+t}function TV(t,e){if(t.fa)t=!0;else{e=new Xa(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Dy(t),t=n.call(r,e)}return t}function Ly(t){return t=t[Oy],t instanceof uh?t:null}var $d="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vy(t){return typeof t=="function"?t:(t[$d]||(t[$d]=function(e){return t.handleEvent(e)}),t[$d])}function nt(){Ti.call(this),this.i=new uh(this),this.S=this,this.J=null}it(nt,Ti);nt.prototype[Cl]=!0;nt.prototype.removeEventListener=function(t,e,n,r){qI(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(r,t),zI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pu(o,r,!0,e)&&i}if(o=e.g=t,i=pu(o,r,!0,e)&&i,i=pu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pu(o,r,!1,e)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lh(n[r]);delete t.g[e],t.h--}}this.J=null};nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};nt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&vm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var My=Y.JSON.stringify;class SV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function IV(){var t=Fy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xV{constructor(){this.h=this.g=null}add(e,n){const r=GI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var GI=new SV(()=>new bV,t=>t.reset());class bV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function kV(t){Y.setTimeout(()=>{throw t},0)}let Ja,Za=!1,Fy=new xV,QI=()=>{const t=Y.Promise.resolve(void 0);Ja=()=>{t.then(PV)}};var PV=()=>{for(var t;t=IV();){try{t.h.call(t.g)}catch(n){kV(n)}var e=GI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Za=!1};function ch(t,e){nt.call(this),this.h=t||1,this.g=e||Y,this.j=Tt(this.qb,this),this.l=Date.now()}it(ch,nt);L=ch.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&($y(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $y(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){ch.$.N.call(this),$y(this),delete this.g};function jy(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function YI(t){t.g=jy(()=>{t.g=null,t.i&&(t.i=!1,YI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class CV extends Ti{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:YI(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function el(t){Ti.call(this),this.h=t,this.g={}}it(el,Ti);var dw=[];function XI(t,e,n,r){Array.isArray(n)||(n&&(dw[0]=n.toString()),n=dw);for(var i=0;i<n.length;i++){var s=BI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function JI(t){Ny(t.g,function(e,n){this.g.hasOwnProperty(n)&&Dy(e)},t),t.g={}}el.prototype.N=function(){el.$.N.call(this),JI(this)};el.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fh(){this.g=!0}fh.prototype.Ea=function(){this.g=!1};function RV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function NV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+DV(t,n)+(r?" "+r:"")})}function OV(t,e){t.info(function(){return"TIMEOUT: "+e})}fh.prototype.info=function(){};function DV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return My(n)}catch{return e}}var ls={},pw=null;function hh(){return pw=pw||new nt}ls.Ta="serverreachability";function ZI(t){St.call(this,ls.Ta,t)}it(ZI,St);function tl(t){const e=hh();ct(e,new ZI(e))}ls.STAT_EVENT="statevent";function ex(t,e){St.call(this,ls.STAT_EVENT,t),this.stat=e}it(ex,St);function Nt(t){const e=hh();ct(e,new ex(e,t))}ls.Ua="timingevent";function tx(t,e){St.call(this,ls.Ua,t),this.size=e}it(tx,St);function Rl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var dh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nx={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Uy(){}Uy.prototype.h=null;function mw(t){return t.h||(t.h=t.i())}function rx(){}var Nl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zy(){St.call(this,"d")}it(zy,St);function By(){St.call(this,"c")}it(By,St);var wm;function ph(){}it(ph,Uy);ph.prototype.g=function(){return new XMLHttpRequest};ph.prototype.i=function(){return{}};wm=new ph;function Ol(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new el(this),this.P=LV,t=mm?125:void 0,this.V=new ch(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ix}function ix(){this.i=null,this.g="",this.h=!1}var LV=45e3,Em={},Hc={};L=Ol.prototype;L.setTimeout=function(t){this.P=t};function Tm(t,e,n){t.L=1,t.v=gh(gr(e)),t.s=n,t.S=!0,sx(t,null)}function sx(t,e){t.G=Date.now(),Dl(t),t.A=gr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),dx(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ix,t.g=Dx(t.l,n?e:null,!t.s),0<t.O&&(t.M=new CV(Tt(t.Pa,t,t.g),t.O)),XI(t.U,t.g,"readystatechange",t.nb),e=t.I?UI(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),tl(),RV(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Ln(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||mm||this.g&&(this.h.h||this.g.ja()||_w(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?tl(3):tl(2)),mh(this);var n=this.g.da();this.ca=n;t:if(ox(this)){var r=_w(this.g);t="";var i=r.length,s=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ni(this),ya(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,NV(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var u=a;break t}}u=null}if(n=u)Ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sm(this,n);else{this.i=!1,this.o=3,Nt(12),Ni(this),ya(this);break e}}this.S?(ax(this,c,o),mm&&this.i&&c==3&&(XI(this.U,this.V,"tick",this.mb),this.V.start())):(Ls(this.j,this.m,o,null),Sm(this,o)),c==4&&Ni(this),this.i&&!this.J&&(c==4?Cx(this.l,this):(this.i=!1,Dl(this)))}else nM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Nt(12)):(this.o=0,Nt(13)),Ni(this),ya(this)}}}catch{}finally{}};function ox(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ax(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=VV(t,n),i==Hc){e==4&&(t.o=4,Nt(14),r=!1),Ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Em){t.o=4,Nt(15),Ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ls(t.j,t.m,i,null),Sm(t,i);ox(t)&&i!=Hc&&i!=Em&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Nt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qy(e),e.M=!0,Nt(11))):(Ls(t.j,t.m,n,"[Invalid Chunked Response]"),Ni(t),ya(t))}L.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.C<e.length&&(mh(this),ax(this,t,e),this.i&&t!=4&&Dl(this))}};function VV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Hc:(n=Number(e.substring(n,r)),isNaN(n)?Em:(r+=1,r+n>e.length?Hc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,Ni(this)};function Dl(t){t.Y=Date.now()+t.P,lx(t,t.P)}function lx(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rl(Tt(t.lb,t),e)}function mh(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(OV(this.j,this.A),this.L!=2&&(tl(),Nt(17)),Ni(this),this.o=2,ya(this)):lx(this,this.Y-t)};function ya(t){t.l.H==0||t.J||Cx(t.l,t)}function Ni(t){mh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,$y(t.V),JI(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Im(n.i,t))){if(!t.K&&Im(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Kc(n),wh(n);else break e;Gy(n),Nt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Rl(Tt(n.ib,n),6e3));if(1>=gx(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Oi(n,11)}else if((t.K||n.g==t)&&Kc(n),!Ya(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Hy(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,_e(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Ox(r,r.J?r.pa:null,r.Y),o.K){yx(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(mh(a),Dl(a)),r.g=o}else kx(r);0<n.j.length&&Eh(n)}else u[0]!="stop"&&u[0]!="close"||Oi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Oi(n,7):Ky(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}tl(4)}catch{}}function MV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(oh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function FV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(oh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function ux(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(oh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=FV(t),r=MV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var cx=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $V(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ui(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ui){this.h=t.h,Wc(this,t.j),this.s=t.s,this.g=t.g,qc(this,t.m),this.l=t.l;var e=t.i,n=new nl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gw(this,n),this.o=t.o}else t&&(e=String(t).match(cx))?(this.h=!1,Wc(this,e[1]||"",!0),this.s=na(e[2]||""),this.g=na(e[3]||"",!0),qc(this,e[4]),this.l=na(e[5]||"",!0),gw(this,e[6]||"",!0),this.o=na(e[7]||"")):(this.h=!1,this.i=new nl(null,this.h))}Ui.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ra(e,yw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ra(e,yw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ra(n,n.charAt(0)=="/"?zV:UV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ra(n,HV)),t.join("")};function gr(t){return new Ui(t)}function Wc(t,e,n){t.j=n?na(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function qc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gw(t,e,n){e instanceof nl?(t.i=e,WV(t.i,t.h)):(n||(e=ra(e,BV)),t.i=new nl(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function gh(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function na(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ra(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var yw=/[#\/\?@]/g,UV=/[#\?:]/g,zV=/[#\?]/g,BV=/[#\?@]/g,HV=/#/g;function nl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Si(t){t.g||(t.g=new Map,t.h=0,t.i&&$V(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=nl.prototype;L.add=function(t,e){Si(this),this.i=null,t=Co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fx(t,e){Si(t),e=Co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function hx(t,e){return Si(t),e=Co(t,e),t.g.has(e)}L.forEach=function(t,e){Si(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){Si(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){Si(this);let e=[];if(typeof t=="string")hx(this,t)&&(e=e.concat(this.g.get(Co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return Si(this),this.i=null,t=Co(this,t),hx(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function dx(t,e,n){fx(t,e),0<n.length&&(t.i=null,t.g.set(Co(t,e),Cy(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function WV(t,e){e&&!t.j&&(Si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fx(this,r),dx(this,i,n))},t)),t.j=e}var qV=class{constructor(t,e){this.g=t,this.map=e}};function px(t){this.l=t||KV,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var KV=10;function mx(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gx(t){return t.h?1:t.g?t.g.size:0}function Im(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Hy(t,e){t.g?t.g.add(e):t.h=e}function yx(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}px.prototype.cancel=function(){if(this.i=vx(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function vx(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cy(t.i)}var GV=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function QV(){this.g=new GV}function YV(t,e,n){const r=n||"";try{ux(t,function(i,s){let o=i;Pl(i)&&(o=My(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XV(t,e){const n=new fh;if(Y.Image){const r=new Image;r.onload=du(mu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=du(mu,n,r,"TestLoadImage: error",!1,e),r.onabort=du(mu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=du(mu,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function yh(t){this.l=t.fc||null,this.j=t.ob||!1}it(yh,Uy);yh.prototype.g=function(){return new vh(this.l,this.j)};yh.prototype.i=function(t){return function(){return t}}({});function vh(t,e){nt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Wy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(vh,nt);var Wy=0;L=vh.prototype;L.open=function(t,e){if(this.readyState!=Wy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,rl(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ll(this)),this.readyState=Wy};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,rl(this)),this.g&&(this.readyState=3,rl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_x(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _x(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ll(this):rl(this),this.readyState==3&&_x(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,Ll(this))};L.Ya=function(t){this.g&&(this.response=t,Ll(this))};L.ka=function(){this.g&&Ll(this)};function Ll(t){t.readyState=4,t.l=null,t.j=null,t.A=null,rl(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function rl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JV=Y.JSON.parse;function Le(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wx,this.L=this.M=!1}it(Le,nt);var wx="",ZV=/^https?$/i,eM=["POST","PUT"];L=Le.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wm.g(),this.C=this.u?mw(this.u):mw(wm),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){vw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=MI(eM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sx(this),0<this.B&&((this.L=tM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=jy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){vw(this,s)}};function tM(t){return mo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof Py<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function vw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ex(t),_h(t)}function Ex(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),_h(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_h(this,!0)),Le.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?Tx(this):this.kb())};L.kb=function(){Tx(this)};function Tx(t){if(t.h&&typeof Py<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)jy(t.La,0,t);else if(ct(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(cx)[1]||null;!i&&Y.self&&Y.self.location&&(i=Y.self.location.protocol.slice(0,-1)),r=!ZV.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<Ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Ex(t)}}finally{_h(t)}}}}function _h(t,e){if(t.g){Sx(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function Sx(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JV(e)}};function _w(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case wx:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function nM(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ya(t[r]))continue;var n=AV(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}wV(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ix(t){let e="";return Ny(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qy(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ix(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function qo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xx(t){this.Ga=0,this.j=[],this.l=new fh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qo("baseRetryDelayMs",5e3,t),this.hb=qo("retryDelaySeedMs",1e4,t),this.eb=qo("forwardChannelMaxRetries",2,t),this.xa=qo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new px(t&&t.concurrentRequestLimit),this.Ja=new QV,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=xx.prototype;L.ra=8;L.H=1;function Ky(t){if(bx(t),t.H==3){var e=t.W++,n=gr(t.I);if(_e(n,"SID",t.K),_e(n,"RID",e),_e(n,"TYPE","terminate"),Vl(t,n),e=new Ol(t,t.l,e),e.L=2,e.v=gh(gr(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon)try{n=Y.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dx(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Dl(e)}Nx(t)}function wh(t){t.g&&(Qy(t),t.g.cancel(),t.g=null)}function bx(t){wh(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Kc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Eh(t){if(!mx(t.i)&&!t.m){t.m=!0;var e=t.Na;Ja||QI(),Za||(Ja(),Za=!0),Fy.add(e,t),t.C=0}}function rM(t,e){return gx(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Rl(Tt(t.Na,t,e),Rx(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ol(this,this.l,t);let s=this.s;if(this.U&&(s?(s=UI(s),zI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ax(this,i,e),n=gr(this.I),_e(n,"RID",t),_e(n,"CVER",22),this.F&&_e(n,"X-HTTP-Session-Id",this.F),Vl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ix(s)))+"&"+e:this.o&&qy(n,this.o,s)),Hy(this.i,i),this.bb&&_e(n,"TYPE","init"),this.P?(_e(n,"$req",e),_e(n,"SID","null"),i.aa=!0,Tm(i,n,null)):Tm(i,n,e),this.H=2}}else this.H==3&&(t?ww(this,t):this.j.length==0||mx(this.i)||ww(this))};function ww(t,e){var n;e?n=e.m:n=t.W++;const r=gr(t.I);_e(r,"SID",t.K),_e(r,"RID",n),_e(r,"AID",t.V),Vl(t,r),t.o&&t.s&&qy(r,t.o,t.s),n=new Ol(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ax(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Hy(t.i,n),Tm(n,r,e)}function Vl(t,e){t.na&&Ny(t.na,function(n,r){_e(e,r,n)}),t.h&&ux({},function(n,r){_e(e,r,n)})}function Ax(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{YV(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kx(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ja||QI(),Za||(Ja(),Za=!0),Fy.add(e,t),t.A=0}}function Gy(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Rl(Tt(t.Ma,t),Rx(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,Px(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Rl(Tt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Nt(10),wh(this),Px(this))};function Qy(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function Px(t){t.g=new Ol(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gr(t.wa);_e(e,"RID","rpc"),_e(e,"SID",t.K),_e(e,"AID",t.V),_e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&_e(e,"TO",t.qa),_e(e,"TYPE","xmlhttp"),Vl(t,e),t.o&&t.s&&qy(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=gh(gr(e)),n.s=null,n.S=!0,sx(n,t)}L.ib=function(){this.v!=null&&(this.v=null,wh(this),Gy(this),Nt(19))};function Kc(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function Cx(t,e){var n=null;if(t.g==e){Kc(t),Qy(t),t.g=null;var r=2}else if(Im(t.i,e))n=e.F,yx(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=hh(),ct(r,new tx(r,n)),Eh(t)}else kx(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&rM(t,e)||r==2&&Gy(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Oi(t,5);break;case 4:Oi(t,10);break;case 3:Oi(t,6);break;default:Oi(t,2)}}}function Rx(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Oi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Ui("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||Wc(n,"https"),gh(n)),XV(n.toString(),r)}else Nt(2);t.H=0,t.h&&t.h.za(e),Nx(t),bx(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Nt(2)):(this.l.info("Failed to ping google.com"),Nt(1))};function Nx(t){if(t.H=0,t.ma=[],t.h){const e=vx(t.i);(e.length!=0||t.j.length!=0)&&(cw(t.ma,e),cw(t.ma,t.j),t.i.i.length=0,Cy(t.j),t.j.length=0),t.h.ya()}}function Ox(t,e,n){var r=n instanceof Ui?gr(n):new Ui(n);if(r.g!="")e&&(r.g=e+"."+r.g),qc(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ui(null);r&&Wc(s,r),e&&(s.g=e),i&&qc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&_e(r,n,e),_e(r,"VER",t.ra),Vl(t,r),r}function Dx(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new yh({ob:!0})):new Le(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lx(){}L=Lx.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Gc(){if(mo&&!(10<=Number(gV)))throw Error("Environmental error: no available transport.")}Gc.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){nt.call(this),this.g=new xx(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ro(this)}it(Qt,nt);Qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Nt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ox(t,null,t.Y),Eh(t)};Qt.prototype.close=function(){Ky(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=My(t),t=n);e.j.push(new qV(e.fb++,t)),e.H==3&&Eh(e)};Qt.prototype.N=function(){this.g.h=null,delete this.j,Ky(this.g),delete this.g,Qt.$.N.call(this)};function Vx(t){zy.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(Vx,zy);function Mx(){By.call(this),this.status=1}it(Mx,By);function Ro(t){this.g=t}it(Ro,Lx);Ro.prototype.Ba=function(){ct(this.g,"a")};Ro.prototype.Aa=function(t){ct(this.g,new Vx(t))};Ro.prototype.za=function(t){ct(this.g,new Mx)};Ro.prototype.ya=function(){ct(this.g,"b")};function iM(){this.blockSize=-1}function kn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(kn,iM);kn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}kn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)jd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){jd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){jd(this,r),i=0;break}}this.h=i,this.i+=e};kn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var sM={};function Yy(t){return-128<=t&&128>t?dV(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function Vn(t){if(isNaN(t)||!isFinite(t))return Js;if(0>t)return lt(Vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=xm;return new he(e,0)}function Fx(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(Fx(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Vn(Math.pow(e,8)),r=Js,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Vn(Math.pow(e,s)),r=r.R(s).add(Vn(o))):(r=r.R(n),r=r.add(Vn(o)))}return r}var xm=4294967296,Js=Yy(0),bm=Yy(1),Ew=Yy(16777216);L=he.prototype;L.ea=function(){if(sn(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:xm+r)*e,e*=xm}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(lr(this))return"0";if(sn(this))return"-"+lt(this).toString(t);for(var e=Vn(Math.pow(t,6)),n=this,r="";;){var i=Yc(n,e).g;n=Qc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,lr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function lr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}L.X=function(t){return t=Qc(this,t),sn(t)?-1:lr(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(bm)}L.abs=function(){return sn(this)?lt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new he(n,n[n.length-1]&-2147483648?-1:0)};function Qc(t,e){return t.add(lt(e))}L.R=function(t){if(lr(this)||lr(t))return Js;if(sn(this))return sn(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(sn(t))return lt(this.R(lt(t)));if(0>this.X(Ew)&&0>t.X(Ew))return Vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,gu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,gu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,gu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,gu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function gu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ko(t,e){this.g=t,this.h=e}function Yc(t,e){if(lr(e))throw Error("division by zero");if(lr(t))return new Ko(Js,Js);if(sn(t))return e=Yc(lt(t),e),new Ko(lt(e.g),lt(e.h));if(sn(e))return e=Yc(t,lt(e)),new Ko(lt(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bm,r=e;0>=r.X(t);)n=Tw(n),r=Tw(r);var i=ys(n,1),s=ys(r,1);for(r=ys(r,2),n=ys(n,2);!lr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ys(r,1),n=ys(n,1)}return e=Qc(t,i.R(e)),new Ko(i,e)}for(i=Js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Vn(n),o=s.R(e);sn(o)||0<o.X(t);)n-=r,s=Vn(n),o=s.R(e);lr(s)&&(s=bm),i=i.add(s),t=Qc(t,o)}return new Ko(i,t)}L.gb=function(t){return Yc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function Tw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function ys(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new he(i,t.h)}Gc.prototype.createWebChannel=Gc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;dh.NO_ERROR=0;dh.TIMEOUT=8;dh.HTTP_ERROR=6;nx.COMPLETE="complete";rx.EventType=Nl;Nl.OPEN="a";Nl.CLOSE="b";Nl.ERROR="c";Nl.MESSAGE="d";nt.prototype.listen=nt.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;kn.prototype.digest=kn.prototype.l;kn.prototype.reset=kn.prototype.reset;kn.prototype.update=kn.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Vn;he.fromString=Fx;var oM=function(){return new Gc},aM=function(){return hh()},Ud=dh,lM=nx,uM=ls,Sw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yu=rx,cM=Le,fM=kn,Zs=he;const Iw="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let No="10.3.1";/**
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
 */const Zi=new vy("@firebase/firestore");function Go(){return Zi.logLevel}function U(t,...e){if(Zi.logLevel<=oe.DEBUG){const n=e.map(Xy);Zi.debug(`Firestore (${No}): ${t}`,...n)}}function yr(t,...e){if(Zi.logLevel<=oe.ERROR){const n=e.map(Xy);Zi.error(`Firestore (${No}): ${t}`,...n)}}function go(t,...e){if(Zi.logLevel<=oe.WARN){const n=e.map(Xy);Zi.warn(`Firestore (${No}): ${t}`,...n)}}function Xy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+t;throw yr(e),new Error(e)}function Te(t,e){t||Q()}function te(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class oi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $x{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class dM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pM{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new $x(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new vt(e)}}class mM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new yM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _M(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jx{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_M(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function yo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Qe(0,0))}static max(){return new J(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class il{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends il{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const wM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends il{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return wM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ae.fromString(e))}static fromName(e){return new K(Ae.fromString(e).popFirst(5))}static empty(){return new K(Ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ae(e.slice()))}}function EM(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new di(i,K.empty(),e)}function TM(t){return new di(t.readTime,t.key,-1)}class di{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new di(J.min(),K.empty(),-1)}static max(){return new di(J.max(),K.empty(),-1)}}function SM(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const IM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ml(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==IM)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Fl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Jy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Jy.ae=-1;function Th(t){return t==null}function Xc(t){return t===0&&1/t==-1/0}function bM(t){return typeof t=="number"&&Number.isInteger(t)&&!Xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function xw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ux(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vu(this.root,e,this.comparator,!0)}}class vu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bw(this.data.getIterator())}getIteratorFrom(e){return new bw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class bw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class En{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new En([])}unionWith(e){let n=new It(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new En(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class zx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new zx("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const AM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pi(t){if(Te(!!t),typeof t=="string"){let e=0;const n=AM.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
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
 */function Zy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ev(t){const e=t.mapValue.fields.__previous_value__;return Zy(e)?ev(e):e}function sl(t){const e=pi(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class kM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ol{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ol("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ol&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zy(t)?4:PM(t)?9007199254740991:10:Q()}function Yn(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sl(t).isEqual(sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pi(i.timestampValue),a=pi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return es(i.bytesValue).isEqual(es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ze(i.geoPointValue.latitude)===ze(s.geoPointValue.latitude)&&ze(i.geoPointValue.longitude)===ze(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ze(i.integerValue)===ze(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ze(i.doubleValue),a=ze(s.doubleValue);return o===a?Xc(o)===Xc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return yo(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xw(o)!==xw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Yn(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function al(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function vo(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ze(s.integerValue||s.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Aw(t.timestampValue,e.timestampValue);case 4:return Aw(sl(t),sl(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const a=es(s),l=es(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ce(a[u],l[u]);if(c!==0)return c}return ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ce(ze(s.latitude),ze(o.latitude));return a!==0?a:ce(ze(s.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=vo(a[u],l[u]);if(c)return c}return ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===_u.mapValue&&o===_u.mapValue)return 0;if(s===_u.mapValue)return 1;if(o===_u.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=ce(l[f],c[f]);if(h!==0)return h;const p=vo(a[l[f]],u[c[f]]);if(p!==0)return p}return ce(l.length,c.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Aw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=pi(t),r=pi(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function _o(t){return Am(t)}function Am(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Am(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Am(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function km(t){return!!t&&"integerValue"in t}function tv(t){return!!t&&"arrayValue"in t}function kw(t){return!!t&&"nullValue"in t}function Pw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yu(t){return!!t&&"mapValue"in t}function va(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=va(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=va(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new on(va(this.value))}}function Bx(t){const e=[];return Oo(t.fields,(n,r)=>{const i=new Et([n]);if(Yu(r)){const s=Bx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new En(e)}/**
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
 */class wt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new wt(e,0,J.min(),J.min(),J.min(),on.empty(),0)}static newFoundDocument(e,n,r,i){return new wt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new wt(e,2,n,J.min(),J.min(),on.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,J.min(),J.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jc{constructor(e,n){this.position=e,this.inclusive=n}}function Cw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=vo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _a{constructor(e,n="asc"){this.field=e,this.dir=n}}function CM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hx{}class Ke extends Hx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NM(e,n,r):n==="array-contains"?new LM(e,r):n==="in"?new VM(e,r):n==="not-in"?new MM(e,r):n==="array-contains-any"?new FM(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new OM(e,r):new DM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vo(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(vo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Xn extends Hx{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Xn(e,n)}matches(e){return Wx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Wx(t){return t.op==="and"}function qx(t){return RM(t)&&Wx(t)}function RM(t){for(const e of t.filters)if(e instanceof Xn)return!1;return!0}function Pm(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+_o(t.value);if(qx(t))return t.filters.map(e=>Pm(e)).join(",");{const e=t.filters.map(n=>Pm(n)).join(",");return`${t.op}(${e})`}}function Kx(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Yn(r.value,i.value)}(t,e):t instanceof Xn?function(r,i){return i instanceof Xn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Kx(o,i.filters[a]),!0):!1}(t,e):void Q()}function Gx(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${_o(n.value)}`}(t):t instanceof Xn?function(n){return n.op.toString()+" {"+n.getFilters().map(Gx).join(" ,")+"}"}(t):"Filter"}class NM extends Ke{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class OM extends Ke{constructor(e,n){super(e,"in",n),this.keys=Qx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DM extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=Qx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class LM extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tv(n)&&al(n.arrayValue,this.value)}}class VM extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&al(this.value.arrayValue,n)}}class MM extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(al(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!al(this.value.arrayValue,n)}}class FM extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>al(this.value.arrayValue,r))}}/**
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
 */class $M{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Nw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $M(t,e,n,r,i,s,o)}function nv(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_o(r)).join(",")),e.he=n}return e.he}function rv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rw(t.startAt,e.startAt)&&Rw(t.endAt,e.endAt)}function Cm(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Sh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jM(t,e,n,r,i,s,o,a){return new Sh(t,e,n,r,i,s,o,a)}function Yx(t){return new Sh(t)}function Ow(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function BM(t){return t.collectionGroup!==null}function wa(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=zM(e),r=UM(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new _a(n)),e.Pe.push(new _a(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new _a(Et.keyField(),s))}}}return e.Pe}function qn(t){const e=te(t);return e.Ie||(e.Ie=HM(e,wa(t))),e.Ie}function HM(t,e){if(t.limitType==="F")return Nw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _a(i.field,s)});const n=t.endAt?new Jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jc(t.startAt.position,t.startAt.inclusive):null;return Nw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rm(t,e,n){return new Sh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ih(t,e){return rv(qn(t),qn(e))&&t.limitType===e.limitType}function Xx(t){return`${nv(qn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Gx(i)).join(", ")}]`),Th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_o(i)).join(",")),`Target(${r})`}(qn(t))}; limitType=${t.limitType})`}function xh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Cw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,wa(r),i)||r.endAt&&!function(o,a,l){const u=Cw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,wa(r),i))}(t,e)}function WM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jx(t){return(e,n)=>{let r=!1;for(const i of wa(t)){const s=qM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qM(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?vo(l,u):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Do{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ux(this.inner)}size(){return this.innerSize}}/**
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
 */const KM=new Re(K.comparator);function vr(){return KM}const Zx=new Re(K.comparator);function ia(...t){let e=Zx;for(const n of t)e=e.insert(n.key,n);return e}function eb(t){let e=Zx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Di(){return Ea()}function tb(){return Ea()}function Ea(){return new Do(t=>t.toString(),(t,e)=>t.isEqual(e))}const GM=new Re(K.comparator),QM=new It(K.comparator);function ie(...t){let e=QM;for(const n of t)e=e.add(n);return e}const YM=new It(ce);function XM(){return YM}/**
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
 */function nb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(e)?"-0":e}}function rb(t){return{integerValue:""+t}}function JM(t,e){return bM(e)?rb(e):nb(t,e)}/**
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
 */class bh{constructor(){this._=void 0}}function ZM(t,e,n){return t instanceof Zc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zy(s)&&(s=ev(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ll?sb(t,e):t instanceof ul?ob(t,e):function(i,s){const o=ib(i,s),a=Dw(o)+Dw(i.Te);return km(o)&&km(i.Te)?rb(a):nb(i.serializer,a)}(t,e)}function e4(t,e,n){return t instanceof ll?sb(t,e):t instanceof ul?ob(t,e):n}function ib(t,e){return t instanceof ef?function(r){return km(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zc extends bh{}class ll extends bh{constructor(e){super(),this.elements=e}}function sb(t,e){const n=ab(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ul extends bh{constructor(e){super(),this.elements=e}}function ob(t,e){let n=ab(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class ef extends bh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Dw(t){return ze(t.integerValue||t.doubleValue)}function ab(t){return tv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ll&&i instanceof ll||r instanceof ul&&i instanceof ul?yo(r.elements,i.elements,Yn):r instanceof ef&&i instanceof ef?Yn(r.Te,i.Te):r instanceof Zc&&i instanceof Zc}(t.transform,e.transform)}class n4{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ah{}function lb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iv(t.key,Kn.none()):new $l(t.key,t.data,Kn.none());{const n=t.data,r=on.empty();let i=new It(Et.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new us(t.key,r,new En(i.toArray()),Kn.none())}}function r4(t,e,n){t instanceof $l?function(i,s,o){const a=i.value.clone(),l=Vw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof us?function(i,s,o){if(!Xu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Vw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(ub(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ta(t,e,n,r){return t instanceof $l?function(s,o,a,l){if(!Xu(s.precondition,o))return a;const u=s.value.clone(),c=Mw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(s,o,a,l){if(!Xu(s.precondition,o))return a;const u=Mw(s.fieldTransforms,l,o),c=o.data;return c.setAll(ub(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Xu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function i4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ib(r.transform,i||null);s!=null&&(n===null&&(n=on.empty()),n.set(r.field,s))}return n||null}function Lw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yo(r,i,(s,o)=>t4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $l extends Ah{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class us extends Ah{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ub(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Vw(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,e4(o,a,n[i]))}return r}function Mw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZM(s,o,e))}return r}class iv extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class s4 extends Ah{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class o4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tb();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=lb(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,(n,r)=>Lw(n,r))&&yo(this.baseMutations,e.baseMutations,(n,r)=>Lw(n,r))}}class sv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return GM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sv(e,n,r,i)}}/**
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
 */class a4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,le;function u4(t){switch(t){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function cb(t){if(t===void 0)return yr("GRPC error has no .code"),A.UNKNOWN;switch(t){case Ue.OK:return A.OK;case Ue.CANCELLED:return A.CANCELLED;case Ue.UNKNOWN:return A.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return A.INTERNAL;case Ue.UNAVAILABLE:return A.UNAVAILABLE;case Ue.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Ue.NOT_FOUND:return A.NOT_FOUND;case Ue.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Ue.ABORTED:return A.ABORTED;case Ue.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Ue.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function c4(){return new TextEncoder}/**
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
 */const f4=new Zs([4294967295,4294967295],0);function Fw(t){const e=c4().encode(t),n=new fM;return n.update(e),new Uint8Array(n.digest())}function $w(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zs([n,r],0),new Zs([i,s],0)]}class ov{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new sa(`Invalid padding: ${n}`);if(r<0)throw new sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new sa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new sa(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Zs.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Zs.fromNumber(r)));return i.compare(f4)===1&&(i=new Zs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Fw(e),[r,i]=$w(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ov(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Fw(e),[r,i]=$w(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kh(J.min(),i,new Re(ce),vr(),ie())}}class jl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jl(r,n,ie(),ie(),ie())}}/**
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
 */class Ju{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class fb{constructor(e,n){this.targetId=e,this.ye=n}}class hb{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jw{constructor(){this.we=0,this.Se=zw(),this.be=At.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ie(),n=ie(),r=ie();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new jl(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=zw()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class h4{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=vr(),this.Ue=Uw(),this.We=new Re(ce)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(Cm(s))if(r===0){const o=new K(s.path);this.je(n,o,wt.newNoDocument(o,J.min()))}else Te(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=es(r).toUint8Array()}catch(l){if(l instanceof zx)return go("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ov(o,i,s)}catch(l){return go(l instanceof sa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&Cm(a.target)){const l=new K(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,wt.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=ie();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new kh(e,n,this.We,this.$e,r);return this.$e=vr(),this.Ue=Uw(),this.We=new Re(ce),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new jw,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new It(ce),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new jw),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Uw(){return new Re(K.comparator)}function zw(){return new Re(K.comparator)}const d4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),p4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),m4=(()=>({and:"AND",or:"OR"}))();class g4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nm(t,e){return t.useProto3Json||Th(e)?e:{value:e}}function tf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function db(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function y4(t,e){return tf(t,e.toTimestamp())}function Gn(t){return Te(!!t),J.fromTimestamp(function(n){const r=pi(n);return new Qe(r.seconds,r.nanos)}(t))}function av(t,e){return function(r){return new Ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function pb(t){const e=Ae.fromString(t);return Te(vb(e)),e}function Om(t,e){return av(t.databaseId,e.path)}function zd(t,e){const n=pb(e);if(n.get(1)!==t.databaseId.projectId)throw new W(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(mb(n))}function Dm(t,e){return av(t.databaseId,e)}function v4(t){const e=pb(t);return e.length===4?Ae.emptyPath():mb(e)}function Lm(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mb(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bw(t,e,n){return{name:Om(t,e),fields:n.value.mapValue.fields}}function _4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Te(c===void 0||typeof c=="string"),At.fromBase64String(c||"")):(Te(c===void 0||c instanceof Uint8Array),At.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:cb(u.code);return new W(c,u.message||"")}(o);n=new hb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zd(t,r.document.name),s=Gn(r.document.updateTime),o=r.document.createTime?Gn(r.document.createTime):J.min(),a=new on({mapValue:{fields:r.document.fields}}),l=wt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ju(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zd(t,r.document),s=r.readTime?Gn(r.readTime):J.min(),o=wt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ju([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zd(t,r.document),s=r.removedTargetIds||[];n=new Ju([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new l4(i,s),a=r.targetId;n=new fb(a,o)}}return n}function w4(t,e){let n;if(e instanceof $l)n={update:Bw(t,e.key,e.value)};else if(e instanceof iv)n={delete:Om(t,e.key)};else if(e instanceof us)n={update:Bw(t,e.key,e.data),updateMask:P4(e.fieldMask)};else{if(!(e instanceof s4))return Q();n={verify:Om(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Zc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ll)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ef)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:y4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function E4(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gn(i.updateTime):Gn(s);return o.isEqual(J.min())&&(o=Gn(s)),new n4(o,i.transformResults||[])}(n,e))):[]}function T4(t,e){return{documents:[Dm(t,e.path)]}}function S4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Dm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return yb(Xn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Es(f.field),direction:b4(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Nm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function I4(t){let e=v4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=gb(f);return h instanceof Xn&&qx(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(y){return new _a(Ts(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,Th(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,p=f.values||[];return new Jc(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,p=f.values||[];return new Jc(p,h)}(n.endAt)),jM(e,i,o,s,a,"F",l,u)}function x4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ts(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ts(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xn.create(n.compositeFilter.filters.map(r=>gb(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function b4(t){return d4[t]}function A4(t){return p4[t]}function k4(t){return m4[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return Et.fromServerFormat(t.fieldPath)}function yb(t){return t instanceof Ke?function(n){if(n.op==="=="){if(Pw(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(kw(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pw(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(kw(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:A4(n.op),value:n.value}}}(t):t instanceof Xn?function(n){const r=n.getFilters().map(i=>yb(i));return r.length===1?r[0]:{compositeFilter:{op:k4(n.op),filters:r}}}(t):Q()}function P4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Br{constructor(e,n,r,i,s=J.min(),o=J.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class C4{constructor(e){this.ht=e}}function R4(t){const e=I4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Rm(e,e.limit,"L"):e}/**
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
 */class N4{constructor(){this.an=new O4}addToCollectionParentIndex(e,n){return this.an.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(di.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(di.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class O4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new It(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new It(Ae.comparator)).toArray()}}/**
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
 */class wo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new wo(0)}static Ln(){return new wo(-1)}}/**
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
 */class D4{constructor(){this.changes=new Do(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class L4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class V4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ta(r.mutation,i,En.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ia();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=vr();const o=Ea(),a=function(){return Ea()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof us)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ta(c.mutation,u,c.mutation.getFieldMask(),Qe.now())):o.set(u.key,En.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new L4(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ea();let i=new Re((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||En.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=tb();c.forEach(h=>{if(!s.has(h)){const p=lb(n.get(h),r.get(h));p!==null&&f.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BM(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Di());let a=-1,l=s;return o.next(u=>b.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?b.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ie())).next(c=>({batchId:a,changes:eb(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ia();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,l=>{const u=function(f,h){return new Sh(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,wt.newInvalidDocument(c)))});let a=ia();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ta(c.mutation,u,En.empty(),Qe.now()),xh(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class M4{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return b.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(i){return{name:i.name,query:R4(i.bundledQuery),readTime:Gn(i.readTime)}}(n)),b.resolve()}}/**
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
 */class F4{constructor(){this.overlays=new Re(K.comparator),this.Pr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Di();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Di(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Re((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Di(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Di(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return b.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a4(n,r));let s=this.Pr.get(n);s===void 0&&(s=ie(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
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
 */class lv{constructor(){this.Ir=new It(Je.dr),this.Tr=new It(Je.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Je(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Je(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new K(new Ae([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new K(new Ae([])),r=new Je(n,e),i=new Je(n,e+1);let s=ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return K.comparator(e.key,n.key)||ce(e.yr,n.yr)}static Er(e,n){return ce(e.yr,n.yr)||K.comparator(e.key,n.key)}}/**
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
 */class $4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new It(Je.dr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(ce);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Je(new K(s),0);let a=new It(ce);return this.Sr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.yr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return b.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Je(n,0),i=this.Sr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class j4{constructor(e){this.Fr=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=vr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():wt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=vr();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||SM(TM(c),r)<=0||(i.has(c.key)||xh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Mr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U4(this)}getSize(e){return b.resolve(this.size)}}class U4 extends D4{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class z4{constructor(e){this.persistence=e,this.Or=new Do(n=>nv(n),rv),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Nr=0,this.Br=new lv,this.targetCount=0,this.Lr=wo.Bn()}forEachTarget(e,n){return this.Or.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),b.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Qn(n),b.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class B4{constructor(e,n){this.kr={},this.overlays={},this.qr=new Jy(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new z4(this),this.indexManager=new N4,this.remoteDocumentCache=function(i){return new j4(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new C4(n),this.Ur=new M4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new $4(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new H4(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(e,n){return b.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class H4 extends xM{constructor(e){super(),this.currentSequenceNumber=e}}class uv{constructor(e){this.persistence=e,this.jr=new lv,this.Hr=null}static Jr(e){return new uv(e)}get Yr(){if(this.Hr)return this.Hr;throw Q()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),b.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Yr,r=>{const i=K.fromPath(r);return this.Zr(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return b.or([()=>b.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class cv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cv(e,n.fromCache,r,i)}}/**
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
 */class W4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class q4{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Hi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new W4;return this.Yi(e,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>s.result)}Zi(e,n,r,i){return r.documentReadCount<this.Gi?(Go()<=oe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),b.resolve()):(Go()<=oe.DEBUG&&U("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(Go()<=oe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(n))):b.resolve())}Hi(e,n){if(Ow(n))return b.resolve(null);let r=qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Rm(n,null,"F"),r=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Xi(n,a);return this.es(n,u,o,l.readTime)?this.Hi(e,Rm(n,null,"F")):this.ts(e,u,n,l)}))})))}Ji(e,n,r,i){return Ow(n)||i.isEqual(J.min())?b.resolve(null):this.ji.getDocuments(e,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?b.resolve(null):(Go()<=oe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ws(n)),this.ts(e,o,n,EM(i,-1)).next(a=>a))})}Xi(e,n){let r=new It(Jx(e));return n.forEach((i,s)=>{xh(e,s)&&(r=r.add(s))}),r}es(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(e,n,r){return Go()<=oe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",ws(n)),this.ji.getDocumentsMatchingQuery(e,n,di.min(),r)}ts(e,n,r,i){return this.ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class K4{constructor(e,n,r,i){this.persistence=e,this.ns=n,this.serializer=i,this.rs=new Re(ce),this.ss=new Do(s=>nv(s),rv),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new V4(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function G4(t,e,n,r){return new K4(t,e,n,r)}async function _b(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({cs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Q4(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let p=b.resolve();return h.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const E=u.docVersions.get(y);Te(E!==null),v.version.compareTo(E)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wb(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function Y4(t,e){const n=te(t),r=e.snapshotVersion;let i=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n._s.newChangeBuffer({trackRemovals:!0});i=n.rs;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Kr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Kr.addMatchingKeys(s,c.addedDocuments,f)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(At.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(v,E,m){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,p,c)&&a.push(n.Kr.updateTargetData(s,p))});let l=vr(),u=ie();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(X4(s,o,e.documentUpdates).next(c=>{l=c.ls,u=c.hs})),!r.isEqual(J.min())){const c=n.Kr.getLastRemoteSnapshotVersion(s).next(f=>n.Kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.rs=i,s))}function X4(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=vr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ls:o,hs:i}})}function J4(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Z4(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Kr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Kr.allocateTargetId(r).next(o=>(i=new Br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.rs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Vm(t,e,n){const r=te(t),i=r.rs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fl(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(i.target)}function Hw(t,e,n){const r=te(t);let i=J.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=te(l),h=f.ss.get(c);return h!==void 0?b.resolve(f.rs.get(h)):f.Kr.getTargetData(u,c)}(r,o,qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ie())).next(a=>(eF(r,WM(e),a),{documents:a,Ps:s})))}function eF(t,e,n){let r=t.os.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.os.set(e,r)}class Ww{constructor(){this.activeTargetIds=XM()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tF{constructor(){this.ro=new Ww,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Ww,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nF{so(e){}shutdown(){}}/**
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
 */class qw{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wu=null;function Bd(){return wu===null?wu=function(){return 268435456+Math.round(2147483648*Math.random())}():wu++,"0x"+wu.toString(16)}/**
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
 */const rF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iF{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const gt="WebChannelConnection";class sF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=Bd(),l=this.Do(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(u,s,o),this.vo(n,l,u,i).then(c=>(U("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw go("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+No}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=rF[n];return`${this.po}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,i){const s=Bd();return new Promise((o,a)=>{const l=new cM;l.setWithCredentials(!0),l.listenOnce(lM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ud.NO_ERROR:const c=l.getResponseJson();U(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ud.TIMEOUT:U(gt,`RPC '${e}' ${s} timed out`),a(new W(A.DEADLINE_EXCEEDED,"Request time out"));break;case Ud.HTTP_ERROR:const f=l.getStatus();if(U(gt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(E){const m=E.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(m)>=0?m:A.UNKNOWN}(p.status);a(new W(y,p.message))}else a(new W(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);U(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Mo(e,n,r){const i=Bd(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oM(),a=aM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");U(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,p=!1;const y=new iF({ho:E=>{p?U(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(h||(U(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),U(gt,`RPC '${e}' stream ${i} sending:`,E),f.send(E))},Po:()=>f.close()}),v=(E,m,d)=>{E.listen(m,g=>{try{d(g)}catch(T){setTimeout(()=>{throw T},0)}})};return v(f,yu.EventType.OPEN,()=>{p||U(gt,`RPC '${e}' stream ${i} transport opened.`)}),v(f,yu.EventType.CLOSE,()=>{p||(p=!0,U(gt,`RPC '${e}' stream ${i} transport closed`),y.mo())}),v(f,yu.EventType.ERROR,E=>{p||(p=!0,go(gt,`RPC '${e}' stream ${i} transport errored:`,E),y.mo(new W(A.UNAVAILABLE,"The operation could not be completed")))}),v(f,yu.EventType.MESSAGE,E=>{var m;if(!p){const d=E.data[0];Te(!!d);const g=d,T=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(T){U(gt,`RPC '${e}' stream ${i} received error:`,T);const S=T.status;let k=function(H){const O=Ue[H];if(O!==void 0)return cb(O)}(S),R=T.message;k===void 0&&(k=A.INTERNAL,R="Unknown error status: "+S+" with message "+T.message),p=!0,y.mo(new W(k,R)),f.close()}else U(gt,`RPC '${e}' stream ${i} received:`,d),y.fo(d)}}),v(a,uM.STAT_EVENT,E=>{E.stat===Sw.PROXY?U(gt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Sw.NOPROXY&&U(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Hd(){return typeof document<"u"?document:null}/**
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
 */function Ph(t){return new g4(t,!0)}/**
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
 */class Eb{constructor(e,n,r=1e3,i=1.5,s=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class Tb{constructor(e,n,r,i,s,o,a,l){this._i=e,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Eb(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(yr(n.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{e(()=>{const i=new W(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oF extends Tb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=_4(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Gn(o.readTime):J.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Lm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Cm(l)?{documents:T4(s,l)}:{query:S4(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=db(s,o.resumeToken);const u=Nm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=tf(s,o.snapshotVersion.toTimestamp());const u=Nm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=x4(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Lm(this.serializer),n.removeTarget=e,this.n_(n)}}class aF extends Tb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=E4(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.T_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Lm(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>w4(this.serializer,r))};this.n_(n)}}/**
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
 */class lF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new W(A.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(A.UNKNOWN,i.toString())})}Fo(e,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(A.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class uF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(yr(n),this.p_=!1):U("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class cF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{cs(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=te(l);u.F_.add(4),await Ul(u),u.O_.set("Unknown"),u.F_.delete(4),await Ch(u)}(this))})}),this.O_=new uF(r,i)}}async function Ch(t){if(cs(t))for(const e of t.M_)await e(!0)}async function Ul(t){for(const e of t.M_)await e(!1)}function Sb(t,e){const n=te(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),dv(n)?hv(n):Lo(n).Yo()&&fv(n,e))}function Ib(t,e){const n=te(t),r=Lo(n);n.v_.delete(e),r.Yo()&&xb(n,e),n.v_.size===0&&(r.Yo()?r.e_():cs(n)&&n.O_.set("Unknown"))}function fv(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Lo(t).l_(e)}function xb(t,e){t.N_.Le(e),Lo(t).h_(e)}function hv(t){t.N_=new h4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Lo(t).start(),t.O_.y_()}function dv(t){return cs(t)&&!Lo(t).Jo()&&t.v_.size>0}function cs(t){return te(t).F_.size===0}function bb(t){t.N_=void 0}async function fF(t){t.v_.forEach((e,n)=>{fv(t,e)})}async function hF(t,e){bb(t),dv(t)?(t.O_.b_(e),hv(t)):t.O_.set("Unknown")}async function dF(t,e,n){if(t.O_.set("Online"),e instanceof hb&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.v_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.v_.delete(a),i.N_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nf(t,r)}else if(e instanceof Ju?t.N_.Ge(e):e instanceof fb?t.N_.Xe(e):t.N_.He(e),!n.isEqual(J.min()))try{const r=await wb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.N_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.v_.get(u);c&&s.v_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.v_.get(l);if(!c)return;s.v_.set(l,c.withResumeToken(At.EMPTY_BYTE_STRING,c.snapshotVersion)),xb(s,l);const f=new Br(c.target,l,u,c.sequenceNumber);fv(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await nf(t,r)}}async function nf(t,e,n){if(!Fl(e))throw e;t.F_.add(1),await Ul(t),t.O_.set("Offline"),n||(n=()=>wb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Ch(t)})}function Ab(t,e){return e().catch(n=>nf(t,n,e))}async function Rh(t){const e=te(t),n=mi(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;pF(e);)try{const i=await J4(e.localStore,r);if(i===null){e.C_.length===0&&n.e_();break}r=i.batchId,mF(e,i)}catch(i){await nf(e,i)}kb(e)&&Pb(e)}function pF(t){return cs(t)&&t.C_.length<10}function mF(t,e){t.C_.push(e);const n=mi(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function kb(t){return cs(t)&&!mi(t).Jo()&&t.C_.length>0}function Pb(t){mi(t).start()}async function gF(t){mi(t).A_()}async function yF(t){const e=mi(t);for(const n of t.C_)e.d_(n.mutations)}async function vF(t,e,n){const r=t.C_.shift(),i=sv.from(r,e,n);await Ab(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Rh(t)}async function _F(t,e){e&&mi(t).I_&&await async function(r,i){if(function(o){return u4(o)&&o!==A.ABORTED}(i.code)){const s=r.C_.shift();mi(r).Xo(),await Ab(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rh(r)}}(t,e),kb(t)&&Pb(t)}async function Kw(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.F_.add(3),await Ul(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Ch(n)}async function wF(t,e){const n=te(t);e?(n.F_.delete(2),await Ch(n)):e||(n.F_.add(2),await Ul(n),n.O_.set("Unknown"))}function Lo(t){return t.B_||(t.B_=function(n,r,i){const s=te(n);return s.V_(),new oF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:fF.bind(null,t),Eo:hF.bind(null,t),c_:dF.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),dv(t)?hv(t):t.O_.set("Unknown")):(await t.B_.stop(),bb(t))})),t.B_}function mi(t){return t.L_||(t.L_=function(n,r,i){const s=te(n);return s.V_(),new aF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Io:gF.bind(null,t),Eo:_F.bind(null,t),E_:yF.bind(null,t),T_:vF.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Rh(t)):(await t.L_.stop(),t.C_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class pv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new pv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mv(t,e){if(yr("AsyncQueue",`${e}: ${t}`),Fl(t))return new W(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=ia(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Gw{constructor(){this.k_=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):Q():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Eo(e,n,eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class EF{constructor(){this.Q_=void 0,this.listeners=[]}}class TF{constructor(){this.queries=new Do(e=>Xx(e),Ih),this.onlineState="Unknown",this.K_=new Set}}async function SF(t,e){const n=te(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new EF),i)try{s.Q_=await n.onListen(r)}catch(o){const a=mv(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.U_(n.onlineState),s.Q_&&e.W_(s.Q_)&&gv(n)}async function IF(t,e){const n=te(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xF(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.W_(i)&&(r=!0);o.Q_=i}}r&&gv(n)}function bF(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function gv(t){t.K_.forEach(e=>{e.next()})}class AF{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class Cb{constructor(e){this.key=e}}class Rb{constructor(e){this.key=e}}class kF{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ie(),this.mutatedKeys=ie(),this.ua=Jx(e),this.ca=new eo(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Gw,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),p=xh(this.query,f)?f:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;h&&p?h.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),E=!0):this.Ia(h,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.ua(p,l)>0||u&&this.ua(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),E=!0):h&&!p&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,es:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.q_();s.sort((u,c)=>function(h,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return y(h)-y(p)}(u.type,c.type)||this.ua(u.doc,c.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,l=a!==this._a;return this._a=a,s.length!==0||l?{snapshot:new Eo(this.query,e.ca,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Gw,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ie(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Rb(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Cb(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ie();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Eo.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class PF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CF{constructor(e){this.key=e,this.ma=!1}}class RF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Do(a=>Xx(a),Ih),this.pa=new Map,this.ya=new Set,this.wa=new Re(K.comparator),this.Sa=new Map,this.ba=new lv,this.Da={},this.Ca=new Map,this.va=wo.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function NF(t,e){const n=zF(t);let r,i;const s=n.ga.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Z4(n.localStore,qn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await OF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Sb(n.remoteStore,o)}return i}async function OF(t,e,n,r,i){t.Ma=(f,h,p)=>async function(v,E,m,d){let g=E.view.ha(m);g.es&&(g=await Hw(v.localStore,E.query,!1).then(({documents:k})=>E.view.ha(k,g)));const T=d&&d.targetChanges.get(E.targetId),S=E.view.applyChanges(g,v.isPrimaryClient,T);return Yw(v,E.targetId,S.Ea),S.snapshot}(t,f,h,p);const s=await Hw(t.localStore,e,!0),o=new kF(e,s.Ps),a=o.ha(s.documents),l=jl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Yw(t,n,u.Ea);const c=new PF(e,n,o);return t.ga.set(e,c),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),u.snapshot}async function DF(t,e){const n=te(t),r=n.ga.get(e),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!Ih(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ib(n.remoteStore,r.targetId),Mm(n,r.targetId)}).catch(Ml)):(Mm(n,r.targetId),await Vm(n.localStore,r.targetId,!0))}async function LF(t,e,n){const r=BF(t);try{const i=await function(o,a){const l=te(o),u=Qe.now(),c=a.reduce((p,y)=>p.add(y.key),ie());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=vr(),v=ie();return l._s.getEntries(p,c).next(E=>{y=E,y.forEach((m,d)=>{d.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(E=>{f=E;const m=[];for(const d of a){const g=i4(d,f.get(d.key).overlayedDocument);g!=null&&m.push(new us(d.key,g,Bx(g.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(E=>{h=E;const m=E.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(p,E.batchId,m)})}).then(()=>({batchId:h.batchId,changes:eb(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Da[o.currentUser.toKey()];u||(u=new Re(ce)),u=u.insert(a,l),o.Da[o.currentUser.toKey()]=u}(r,i.batchId,n),await zl(r,i.changes),await Rh(r.remoteStore)}catch(i){const s=mv(i,"Failed to persist write");n.reject(s)}}async function Nb(t,e){const n=te(t);try{const r=await Y4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?Te(o.ma):i.removedDocuments.size>0&&(Te(o.ma),o.ma=!1))}),await zl(n,r,e)}catch(r){await Ml(r)}}function Qw(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.U_(a)&&(u=!0)}),u&&gv(l)}(r.eventManager,e),i.length&&r.fa.c_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VF(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Sa.get(e),s=i&&i.key;if(s){let o=new Re(K.comparator);o=o.insert(s,wt.newNoDocument(s,J.min()));const a=ie().add(s),l=new kh(J.min(),new Map,new Re(ce),o,a);await Nb(r,l),r.wa=r.wa.remove(s),r.Sa.delete(e),yv(r)}else await Vm(r.localStore,e,!1).then(()=>Mm(r,e,n)).catch(Ml)}async function MF(t,e){const n=te(t),r=e.batch.batchId;try{const i=await Q4(n.localStore,e);Db(n,r,null),Ob(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zl(n,i)}catch(i){await Ml(i)}}async function FF(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Te(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Db(r,e,n),Ob(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zl(r,i)}catch(i){await Ml(i)}}function Ob(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Db(t,e,n){const r=te(t);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}function Mm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Lb(t,r)})}function Lb(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Ib(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),yv(t))}function Yw(t,e,n){for(const r of n)r instanceof Cb?(t.ba.addReference(r.key,e),$F(t,r)):r instanceof Rb?(U("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Lb(t,r.key)):Q()}function $F(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(U("SyncEngine","New document in limbo: "+n),t.ya.add(r),yv(t))}function yv(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new K(Ae.fromString(e)),r=t.va.next();t.Sa.set(r,new CF(n)),t.wa=t.wa.insert(n,r),Sb(t.remoteStore,new Br(qn(Yx(n.path)),r,"TargetPurposeLimboResolution",Jy.ae))}}async function zl(t,e,n){const r=te(t),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=cv.$i(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(l,u){const c=te(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>b.forEach(u,h=>b.forEach(h.Qi,p=>c.persistence.referenceDelegate.addReference(f,h.targetId,p)).next(()=>b.forEach(h.Ki,p=>c.persistence.referenceDelegate.removeReference(f,h.targetId,p)))))}catch(f){if(!Fl(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const p=c.rs.get(h),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.rs=c.rs.insert(h,v)}}}(r.localStore,s))}async function jF(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await _b(n.localStore,e);n.currentUser=e,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new W(A.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zl(n,r.cs)}}function UF(t,e){const n=te(t),r=n.Sa.get(e);if(r&&r.ma)return ie().add(r.key);{let i=ie();const s=n.pa.get(e);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function zF(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VF.bind(null,e),e.fa.c_=xF.bind(null,e.eventManager),e.fa.xa=bF.bind(null,e.eventManager),e}function BF(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FF.bind(null,e),e}class Xw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ph(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return G4(this.persistence,new q4,e.initialUser,this.serializer)}createPersistence(e){return new B4(uv.Jr,this.serializer)}createSharedClientState(e){return new tF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jF.bind(null,this.syncEngine),await wF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TF}()}createDatastore(e){const n=Ph(e.databaseInfo.databaseId),r=function(s){return new sF(s)}(e.databaseInfo);return function(s,o,a,l){return new lF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new cF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Qw(this.syncEngine,n,0),function(){return qw.C()?new qw:new nF}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new RF(i,s,o,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);U("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ul(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class WF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):yr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=jx.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _b(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GF(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Kw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Kw(e.remoteStore,s)),t._onlineComponents=e}function KF(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function GF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KF(n))throw n;go("Error using user provided cache. Falling back to memory cache: "+n),await Wd(t,new Xw)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Wd(t,new Xw);return t._offlineComponents}async function Vb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Jw(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Jw(t,new HF))),t._onlineComponents}function QF(t){return Vb(t).then(e=>e.syncEngine)}async function YF(t){const e=await Vb(t),n=e.eventManager;return n.onListen=NF.bind(null,e.syncEngine),n.onUnlisten=DF.bind(null,e.syncEngine),n}function XF(t,e,n={}){const r=new oi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new WF({next:h=>{o.enqueueAndForget(()=>IF(s,f)),h.fromCache&&l.source==="server"?u.reject(new W(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new AF(a,c,{includeMetadataChanges:!0,Z_:!0});return SF(s,f)}(await YF(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Mb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Zw=new Map;/**
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
 */function Fb(t,e,n){if(!n)throw new W(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JF(t,e,n,r){if(e===!0&&r===!0)throw new W(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function e1(t){if(!K.isDocumentKey(t))throw new W(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function t1(t){if(K.isDocumentKey(t))throw new W(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function cl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vv(t);throw new W(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class n1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hM;switch(r.type){case"firstParty":return new gM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zw.get(n);r&&(U("ComponentProvider","Removing Datastore"),Zw.delete(n),r.terminate())}(this),Promise.resolve()}}function ZF(t,e,n,r={}){var i;const s=(t=cl(t,Nh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=vt.MOCK_USER;else{a=eI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new dM(new $x(a,l))}}/**
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
 */class Oh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oh(this.firestore,e,this._query)}}class bn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bn(this.firestore,e,this._key)}}class ai extends Oh{constructor(e,n,r){super(e,n,Yx(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bn(this.firestore,null,new K(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function $b(t,e,...n){if(t=tt(t),Fb("collection","path",e),t instanceof Nh){const r=Ae.fromString(e,...n);return t1(r),new ai(t,null,r)}{if(!(t instanceof bn||t instanceof ai))throw new W(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return t1(r),new ai(t.firestore,null,r)}}function jb(t,e,...n){if(t=tt(t),arguments.length===1&&(e=jx.V()),Fb("doc","path",e),t instanceof Nh){const r=Ae.fromString(e,...n);return e1(r),new bn(t,null,new K(r))}{if(!(t instanceof bn||t instanceof ai))throw new W(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return e1(r),new bn(t.firestore,t instanceof ai?t.converter:null,new K(r))}}/**
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
 */class e${constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Eb(this,"async_queue_retry"),this.ou=()=>{const n=Hd();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Hd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new oi;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Fl(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const i=pv.createAndSchedule(this,e,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&Q()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Dh extends Nh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new e$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zb(this),this._firestoreClient.terminate()}}function t$(t,e){const n=typeof t=="object"?t:wy(),r=typeof t=="string"?t:e||"(default)",i=th(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=XS("firestore");s&&ZF(i,...s)}return i}function Ub(t){return t._firestoreClient||zb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zb(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new kM(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Mb(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new qF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class To{constructor(e){this._byteString=e}static fromBase64String(e){try{return new To(At.fromBase64String(e))}catch(n){throw new W(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new To(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _v{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bb{constructor(e){this._methodName=e}}/**
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
 */class wv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const n$=/^__.*__$/;class r${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new $l(e,this.data,n,this.fieldTransforms)}}function Hb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Ev{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Ev(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.Vu(e),i}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return rf(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Hb(this.Tu)&&n$.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class i${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ph(e)}wu(e,n,r,i=!1){return new Ev({Tu:e,methodName:n,yu:r,path:Et.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function s$(t){const e=t._freezeSettings(),n=Ph(t._databaseId);return new i$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o$(t,e,n,r,i,s={}){const o=t.wu(s.merge||s.mergeFields?2:0,e,n,i);Gb("Data must be an object, but it was:",o,r);const a=qb(r,o);let l,u;if(s.merge)l=new En(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=a$(e,f,n);if(!o.contains(h))throw new W(A.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);u$(c,h)||c.push(h)}l=new En(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new r$(new on(a),l,u)}function Wb(t,e){if(Kb(t=tt(t)))return Gb("Unsupported field value:",e,t),qb(t,e);if(t instanceof Bb)return function(r,i){if(!Hb(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Wb(a,i.fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:tf(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tf(i.serializer,s)}}if(r instanceof wv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof To)return{bytesValue:db(i.serializer,r._byteString)};if(r instanceof bn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:av(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${vv(r)}`)}(t,e)}function qb(t,e){const n={};return Ux(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oo(t,(r,i)=>{const s=Wb(i,e.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Kb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof wv||t instanceof To||t instanceof bn||t instanceof Bb)}function Gb(t,e,n){if(!Kb(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=vv(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function a$(t,e,n){if((e=tt(e))instanceof _v)return e._internalPath;if(typeof e=="string")return Qb(t,e);throw rf("Field path arguments must be of type string or ",t,!1,void 0,n)}const l$=new RegExp("[~\\*/\\[\\]]");function Qb(t,e,n){if(e.search(l$)>=0)throw rf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _v(...e.split("."))._internalPath}catch{throw rf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(A.INVALID_ARGUMENT,a+t+l)}function u$(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Yb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c$ extends Yb{data(){return super.data()}}function Xb(t,e){return typeof e=="string"?Qb(t,e):e instanceof _v?e._internalPath:e._delegate._internalPath}/**
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
 */function f$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class h${convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Oo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new wv(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ev(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const n=pi(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);Te(vb(r));const i=new ol(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||yr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function d$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Eu{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class p$ extends Yb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xb("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zu extends p${data(e={}){return super.data(e)}}class m${constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Eu(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zu(this._firestore,this._userDataWriter,r.key,r,new Eu(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Zu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Eu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Zu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Eu(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:g$(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function g$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class y$ extends h${constructor(e){super(),this.firestore=e}convertBytes(e){return new To(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bn(this.firestore,null,n)}}function v$(t){t=cl(t,Oh);const e=cl(t.firestore,Dh),n=Ub(e),r=new y$(e);return f$(t._query),XF(n,t._query).then(i=>new m$(e,r,t,i))}function _$(t){return Jb(cl(t.firestore,Dh),[new iv(t._key,Kn.none())])}function w$(t,e){const n=cl(t.firestore,Dh),r=jb(t),i=d$(t.converter,e);return Jb(n,[o$(s$(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kn.exists(!1))]).then(()=>r)}function Jb(t,e){return function(r,i){const s=new oi;return r.asyncQueue.enqueueAndForget(async()=>LF(await QF(r),i,s)),s.promise}(Ub(t),e)}(function(e,n=!0){(function(i){No=i})(as),Xi(new hi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Dh(new pM(r.getProvider("auth-internal")),new vM(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ol(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Bn(Iw,"4.1.3",e),Bn(Iw,"4.1.3","esm2017")})();/**
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
 */const Zb="firebasestorage.googleapis.com",eA="storageBucket",E$=2*60*1e3,T$=10*60*1e3;/**
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
 */class Me extends Jn{constructor(e,n,r=0){super(qd(e),`Firebase Storage: ${n} (${qd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ve||(Ve={}));function qd(t){return"storage/"+t}function Tv(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(Ve.UNKNOWN,t)}function S$(t){return new Me(Ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function I$(t){return new Me(Ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function x$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(Ve.UNAUTHENTICATED,t)}function b$(){return new Me(Ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function A$(t){return new Me(Ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function k$(){return new Me(Ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function P$(){return new Me(Ve.CANCELED,"User canceled the upload/download.")}function C$(t){return new Me(Ve.INVALID_URL,"Invalid URL '"+t+"'.")}function R$(t){return new Me(Ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function N$(){return new Me(Ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eA+"' property when initializing the app?")}function O$(){return new Me(Ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function D$(){return new Me(Ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L$(t){return new Me(Ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fm(t){return new Me(Ve.INVALID_ARGUMENT,t)}function tA(){return new Me(Ve.APP_DELETED,"The Firebase app was deleted.")}function V$(t){return new Me(Ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sa(t,e){return new Me(Ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qo(t){throw new Me(Ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Wt.makeFromUrl(e,n)}catch{return new Wt(e,"")}if(r.path==="")return r;throw R$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(T){T.path_=decodeURIComponent(T.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),y={bucket:1,path:3},v=n===Zb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${E}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let T=0;T<g.length;T++){const S=g[T],k=S.regex.exec(e);if(k){const R=k[S.indices.bucket];let D=k[S.indices.path];D||(D=""),r=new Wt(R,D),S.postModify(r);break}}if(r==null)throw C$(e);return r}}class M${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function F$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function f(E){i=setTimeout(()=>{i=null,t(p,l())},E)}function h(){s&&clearTimeout(s)}function p(E,...m){if(u){h();return}if(E){h(),c.call(null,E,...m);return}if(l()||o){h(),c.call(null,E,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,f(g)}let y=!1;function v(E){y||(y=!0,h(),!u&&(i!==null?(E||(a=2),clearTimeout(i),f(0)):E||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function $$(t){t(!1)}/**
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
 */function j$(t){return t!==void 0}function U$(t){return typeof t=="object"&&!Array.isArray(t)}function Sv(t){return typeof t=="string"||t instanceof String}function r1(t){return Iv()&&t instanceof Blob}function Iv(){return typeof Blob<"u"&&!FN()}function i1(t,e,n,r){if(r<e)throw Fm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Lh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function nA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var zi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(zi||(zi={}));/**
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
 */function z$(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class B${constructor(e,n,r,i,s,o,a,l,u,c,f,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Tu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===zi.NO_ERROR,l=s.getStatus();if(!a||z$(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===zi.ABORT;r(!1,new Tu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Tu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());j$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Tv();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?tA():P$();o(l)}else{const l=k$();o(l)}};this.canceled_?n(!1,new Tu(!1,null,!0)):this.backoffId_=F$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function H$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function W$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function q$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function G$(t,e,n,r,i,s,o=!0){const a=nA(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return q$(u,e),H$(u,n),W$(u,s),K$(u,r),new B$(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Q$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Y$(...t){const e=Q$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Iv())return new Blob(t);throw new Me(Ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function X$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function J$(t){if(typeof atob>"u")throw L$("base-64");return atob(t)}/**
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
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kd{constructor(e,n){this.data=e,this.contentType=n||null}}function Z$(t,e){switch(t){case Mn.RAW:return new Kd(rA(e));case Mn.BASE64:case Mn.BASE64URL:return new Kd(iA(t,e));case Mn.DATA_URL:return new Kd(t3(e),n3(e))}throw Tv()}function rA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function e3(t){let e;try{e=decodeURIComponent(t)}catch{throw Sa(Mn.DATA_URL,"Malformed data URL.")}return rA(e)}function iA(t,e){switch(t){case Mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=J$(e)}catch(i){throw i.message.includes("polyfill")?i:Sa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class sA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Sa(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=r3(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function t3(t){const e=new sA(t);return e.base64?iA(Mn.BASE64,e.rest):e3(e.rest)}function n3(t){return new sA(t).contentType}function r3(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class $r{constructor(e,n){let r=0,i="";r1(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(r1(this.data_)){const r=this.data_,i=X$(r,e,n);return i===null?null:new $r(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $r(r,!0)}}static getBlob(...e){if(Iv()){const n=e.map(r=>r instanceof $r?r.data_:r);return new $r(Y$.apply(null,n))}else{const n=e.map(o=>Sv(o)?Z$(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new $r(i,!0)}}uploadData(){return this.data_}}/**
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
 */function oA(t){let e;try{e=JSON.parse(t)}catch{return null}return U$(e)?e:null}/**
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
 */function i3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function s3(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function aA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function o3(t,e){return e}class kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||o3}}let Su=null;function a3(t){return!Sv(t)||t.length<2?t:aA(t)}function lA(){if(Su)return Su;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(s,o){return a3(o)}const n=new kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kt("size");return i.xform=r,t.push(i),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),Su=t,Su}function l3(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Wt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function u3(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return l3(r,t),r}function uA(t,e,n){const r=oA(e);return r===null?null:u3(t,r,n)}function c3(t,e,n,r){const i=oA(e);if(i===null||!Sv(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,f=t.fullPath,h="/b/"+o(c)+"/o/"+o(f),p=Lh(h,n,r),y=nA({alt:"media",token:u});return p+y})[0]}function f3(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class xv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function cA(t){if(!t)throw Tv()}function h3(t,e){function n(r,i){const s=uA(t,i,e);return cA(s!==null),s}return n}function d3(t,e){function n(r,i){const s=uA(t,i,e);return cA(s!==null),c3(s,i,t.host,t._protocol)}return n}function fA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=b$():i=x$():n.getStatus()===402?i=I$(t.bucket):n.getStatus()===403?i=A$(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function hA(t){const e=fA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=S$(t.path)),s.serverResponse=i.serverResponse,s}return n}function p3(t,e,n){const r=e.fullServerUrl(),i=Lh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new xv(i,s,d3(t,n),o);return a.errorHandler=hA(e),a}function m3(t,e){const n=e.fullServerUrl(),r=Lh(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new xv(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=hA(e),a}function g3(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function y3(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=g3(null,e)),r}function v3(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let T=0;T<2;T++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=y3(e,r,i),c=f3(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",p=$r.getBlob(f,r,h);if(p===null)throw O$();const y={name:u.fullPath},v=Lh(s,t.host,t._protocol),E="POST",m=t.maxUploadRetryTime,d=new xv(v,E,h3(t,n),m);return d.urlParams=y,d.headers=o,d.body=p.uploadData(),d.errorHandler=fA(e),d}class _3{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Qo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class w3 extends _3{initXhr(){this.xhr_.responseType="text"}}function bv(){return new w3}/**
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
 */let Vh=class $m{constructor(e,n){this._service=e,n instanceof Wt?this._location=n:this._location=Wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $m(e,n)}get root(){const e=new Wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aA(this._location.path)}get storage(){return this._service}get parent(){const e=i3(this._location.path);if(e===null)return null;const n=new Wt(this._location.bucket,e);return new $m(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw V$(e)}};function E3(t,e,n){t._throwIfRoot("uploadBytes");const r=v3(t.storage,t._location,lA(),new $r(e,!0),n);return t.storage.makeRequestWithTokens(r,bv).then(i=>({metadata:i,ref:t}))}function T3(t){t._throwIfRoot("getDownloadURL");const e=p3(t.storage,t._location,lA());return t.storage.makeRequestWithTokens(e,bv).then(n=>{if(n===null)throw D$();return n})}function S3(t){t._throwIfRoot("deleteObject");const e=m3(t.storage,t._location);return t.storage.makeRequestWithTokens(e,bv)}function I3(t,e){const n=s3(t._location.path,e),r=new Wt(t._location.bucket,n);return new Vh(t.storage,r)}/**
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
 */function x3(t){return/^[A-Za-z]+:\/\//.test(t)}function b3(t,e){return new Vh(t,e)}function dA(t,e){if(t instanceof Av){const n=t;if(n._bucket==null)throw N$();const r=new Vh(n,n._bucket);return e!=null?dA(r,e):r}else return e!==void 0?I3(t,e):t}function A3(t,e){if(e&&x3(e)){if(t instanceof Av)return b3(t,e);throw Fm("To use ref(service, url), the first argument must be a Storage instance.")}else return dA(t,e)}function s1(t,e){const n=e==null?void 0:e[eA];return n==null?null:Wt.makeFromBucketSpec(n,t)}function k3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eI(i,t.app.options.projectId))}class Av{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Zb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=E$,this._maxUploadRetryTime=T$,this._requests=new Set,i!=null?this._bucket=Wt.makeFromBucketSpec(i,this._host):this._bucket=s1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Wt.makeFromBucketSpec(this._url,e):this._bucket=s1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){i1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){i1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vh(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new M$(tA());{const o=G$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const o1="@firebase/storage",a1="0.11.2";/**
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
 */const pA="storage";function P3(t,e,n){return t=tt(t),E3(t,e,n)}function C3(t){return t=tt(t),T3(t)}function R3(t){return t=tt(t),S3(t)}function kv(t,e){return t=tt(t),A3(t,e)}function N3(t=wy(),e){t=tt(t);const r=th(t,pA).getImmediate({identifier:e}),i=XS("storage");return i&&O3(r,...i),r}function O3(t,e,n,r={}){k3(t,e,n,r)}function D3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Av(n,r,i,e,as)}function L3(){Xi(new hi(pA,D3,"PUBLIC").setMultipleInstances(!0)),Bn(o1,a1,""),Bn(o1,a1,"esm2017")}L3();const V3={apiKey:"AIzaSyAmbU6oEz0bA8K_YDsf3EeOsIBiywAuYH8",authDomain:"hoomanfinder.firebaseapp.com",projectId:"hoomanfinder",storageBucket:"hoomanfinder.appspot.com",messagingSenderId:"541647056945",appId:"1:541647056945:web:83d22c65308219d28e6510"},Pv=rI(V3),_r=sV(Pv),M3=new rr,jm=t$(Pv),Cv=N3(Pv);/*! *****************************************************************************
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
***************************************************************************** */function F3(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(f){o(f)}}function l(c){try{u(r.throw(c))}catch(f){o(f)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function $3(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Vs=function(){return Vs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Vs.apply(this,arguments)},mA=function(t){return{loading:t==null,value:t}},j3=function(){return function(t,e){switch(e.type){case"error":return Vs(Vs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return mA(e.defaultValue);case"value":return Vs(Vs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},U3=function(t){var e=t?t():void 0,n=P.useReducer(j3(),mA(e)),r=n[0],i=n[1],s=P.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=P.useCallback(function(l){i({type:"error",error:l})},[]),a=P.useCallback(function(l){i({type:"value",value:l})},[]);return P.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},fs=function(t,e){var n=U3(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return P.useEffect(function(){var l=qD(t,function(u){return F3(void 0,void 0,void 0,function(){var c;return $3(this,function(f){switch(f.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return f.sent(),[3,4];case 3:return c=f.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};function z3(){const t=ti(i=>i.global.value.siteName),e=Tl(),[n]=fs(_r),r=()=>{KD(_r).then(()=>{e("/join")}).catch(i=>{})};return _.jsxs("nav",{className:"flex sm:flex-row sm:justify-between items-center py-5 xs:flex-col xs:justify-center ",children:[_.jsx("h1",{className:"text-3xl font-bold",children:t}),_.jsxs("ul",{className:"flex sm:flex-nowrap justify-between items-center py-5 nav-list tracking-wider xs:flex-wrap",children:[_.jsx(Rt,{to:"/",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"Home"})}),_.jsx(Rt,{to:"/about",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"About"})}),_.jsx(Rt,{to:"/fact",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"Fact"})}),_.jsx(Rt,{to:"/site-settings",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"Customize"})}),!n&&_.jsx(Rt,{to:"/join",className:"cta-btn",children:"Join Now"}),n&&_.jsx("button",{onClick:r,className:"cta-btn",children:"Logout"}),n&&_.jsx(Rt,{to:"/dashboard",className:"cta-btn",children:"Dashboard"})]})]})}const B3=()=>{const t=ti(n=>n.global.value.footerText),e=ti(n=>n.global.value.siteName);return _.jsxs("footer",{className:"bg-gray-800 md:mt-20 pb-8 xs:mt-10",children:[_.jsxs("div",{className:"grid md:grid-cols-3 p-8 gap-8 mb-2 xs:grid-cols-1",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-2xl font-bold mb-3",children:"Our Mission"}),_.jsx("p",{className:"md:text-lg text-gray-500 sm:text-sm",children:"Our mission is to provide a safe platform for all stray cats, ensuring their well-being, health, and a chance for loving homes."})]}),_.jsxs("ul",{className:"flex md:flex-nowrap md:flex-col text-gray-500 md:justify-between items-center font-bold xs:flex-wrap xs:flex-row xs:justify-between",children:[_.jsx("h1",{className:"text-2xl font-bold mb-3 text-white",children:"Menu"}),_.jsx(Rt,{to:"/",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"Home"})}),_.jsx(Rt,{to:"/about",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"About"})}),_.jsx(Rt,{to:"/fact",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"Fact"})}),_.jsx(Rt,{to:"/site-settings",className:"px-3 hover:tracking-widest",children:_.jsx("span",{children:"Customize"})})]}),_.jsxs("div",{className:"flex flex-col justify-center md:items-end font-bold xs:items-center",children:[_.jsx("h1",{className:"text-2xl font-bold m-3",children:"Join Now"}),_.jsx(Rt,{to:"/join",className:"cta-btn",children:"Join Now"})]})]}),_.jsxs("div",{className:"grid md:grid-cols-3 p-8 gap-8 text-gray-500 xs:grid-cols-1",children:[_.jsx("div",{children:_.jsxs("p",{className:"text-lg",children:[_.jsx("span",{className:"text-2xl font-bold",children:e})," ",t]})}),_.jsx("div",{}),_.jsxs("ul",{className:"flex justify-between items-center font-bold",children:[_.jsx("li",{children:"Facebook"}),_.jsx("li",{children:"Instagram"}),_.jsx("li",{children:"Email"})]})]})]})};function l1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?l1(Object(n),!0).forEach(function(r){Ye(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sf(t){"@babel/helpers - typeof";return sf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sf(t)}function H3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u1(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function W3(t,e,n){return e&&u1(t.prototype,e),n&&u1(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ye(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rv(t,e){return K3(t)||Q3(t,e)||gA(t,e)||X3()}function Bl(t){return q3(t)||G3(t)||gA(t)||Y3()}function q3(t){if(Array.isArray(t))return Um(t)}function K3(t){if(Array.isArray(t))return t}function G3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Q3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function gA(t,e){if(t){if(typeof t=="string")return Um(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Um(t,e)}}function Um(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c1=function(){},Nv={},yA={},vA=null,_A={mark:c1,measure:c1};try{typeof window<"u"&&(Nv=window),typeof document<"u"&&(yA=document),typeof MutationObserver<"u"&&(vA=MutationObserver),typeof performance<"u"&&(_A=performance)}catch{}var J3=Nv.navigator||{},f1=J3.userAgent,h1=f1===void 0?"":f1,gi=Nv,Ee=yA,d1=vA,Iu=_A;gi.document;var Ir=!!Ee.documentElement&&!!Ee.head&&typeof Ee.addEventListener=="function"&&typeof Ee.createElement=="function",wA=~h1.indexOf("MSIE")||~h1.indexOf("Trident/"),xu,bu,Au,ku,Pu,wr="___FONT_AWESOME___",zm=16,EA="fa",TA="svg-inline--fa",ns="data-fa-i2svg",Bm="data-fa-pseudo-element",Z3="data-fa-pseudo-element-pending",Ov="data-prefix",Dv="data-icon",p1="fontawesome-i2svg",ej="async",tj=["HTML","HEAD","STYLE","SCRIPT"],SA=function(){try{return!0}catch{return!1}}(),ve="classic",De="sharp",Lv=[ve,De];function Hl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ve]}})}var fl=Hl((xu={},Ye(xu,ve,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ye(xu,De,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xu)),hl=Hl((bu={},Ye(bu,ve,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ye(bu,De,{solid:"fass",regular:"fasr",light:"fasl"}),bu)),dl=Hl((Au={},Ye(Au,ve,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ye(Au,De,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Au)),nj=Hl((ku={},Ye(ku,ve,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ye(ku,De,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ku)),rj=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,IA="fa-layers-text",ij=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sj=Hl((Pu={},Ye(Pu,ve,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ye(Pu,De,{900:"fass",400:"fasr",300:"fasl"}),Pu)),xA=[1,2,3,4,5,6,7,8,9,10],oj=xA.concat([11,12,13,14,15,16,17,18,19,20]),aj=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Li={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},pl=new Set;Object.keys(hl[ve]).map(pl.add.bind(pl));Object.keys(hl[De]).map(pl.add.bind(pl));var lj=[].concat(Lv,Bl(pl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Li.GROUP,Li.SWAP_OPACITY,Li.PRIMARY,Li.SECONDARY]).concat(xA.map(function(t){return"".concat(t,"x")})).concat(oj.map(function(t){return"w-".concat(t)})),Ia=gi.FontAwesomeConfig||{};function uj(t){var e=Ee.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cj(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ee&&typeof Ee.querySelector=="function"){var fj=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fj.forEach(function(t){var e=Rv(t,2),n=e[0],r=e[1],i=cj(uj(n));i!=null&&(Ia[r]=i)})}var bA={styleDefault:"solid",familyDefault:"classic",cssPrefix:EA,replacementClass:TA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ia.familyPrefix&&(Ia.cssPrefix=Ia.familyPrefix);var So=F(F({},bA),Ia);So.autoReplaceSvg||(So.observeMutations=!1);var z={};Object.keys(bA).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){So[t]=n,xa.forEach(function(r){return r(z)})},get:function(){return So[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){So.cssPrefix=e,xa.forEach(function(n){return n(z)})},get:function(){return So.cssPrefix}});gi.FontAwesomeConfig=z;var xa=[];function hj(t){return xa.push(t),function(){xa.splice(xa.indexOf(t),1)}}var kr=zm,Fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dj(t){if(!(!t||!Ir)){var e=Ee.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ee.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Ee.head.insertBefore(e,r),t}}var pj="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ml(){for(var t=12,e="";t-- >0;)e+=pj[Math.random()*62|0];return e}function Vo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vv(t){return t.classList?Vo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function AA(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mj(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(AA(t[n]),'" ')},"").trim()}function Mh(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Mv(t){return t.size!==Fn.size||t.x!==Fn.x||t.y!==Fn.y||t.rotate!==Fn.rotate||t.flipX||t.flipY}function gj(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function yj(t){var e=t.transform,n=t.width,r=n===void 0?zm:n,i=t.height,s=i===void 0?zm:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&wA?l+="translate(".concat(e.x/kr-r/2,"em, ").concat(e.y/kr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/kr,"em), calc(-50% + ").concat(e.y/kr,"em)) "):l+="translate(".concat(e.x/kr,"em, ").concat(e.y/kr,"em) "),l+="scale(".concat(e.size/kr*(e.flipX?-1:1),", ").concat(e.size/kr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var vj=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kA(){var t=EA,e=TA,n=z.cssPrefix,r=z.replacementClass,i=vj;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var m1=!1;function Gd(){z.autoAddCss&&!m1&&(dj(kA()),m1=!0)}var _j={mixout:function(){return{dom:{css:kA,insertCss:Gd}}},hooks:function(){return{beforeDOMElementCreation:function(){Gd()},beforeI2svg:function(){Gd()}}}},Er=gi||{};Er[wr]||(Er[wr]={});Er[wr].styles||(Er[wr].styles={});Er[wr].hooks||(Er[wr].hooks={});Er[wr].shims||(Er[wr].shims=[]);var Tn=Er[wr],PA=[],wj=function t(){Ee.removeEventListener("DOMContentLoaded",t),of=1,PA.map(function(e){return e()})},of=!1;Ir&&(of=(Ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ee.readyState),of||Ee.addEventListener("DOMContentLoaded",wj));function Ej(t){Ir&&(of?setTimeout(t,0):PA.push(t))}function Wl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?AA(t):"<".concat(e," ").concat(mj(r),">").concat(s.map(Wl).join(""),"</").concat(e,">")}function g1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Tj=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Qd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Tj(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function Sj(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Hm(t){var e=Sj(t);return e.length===1?e[0].toString(16):null}function Ij(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function y1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Wm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=y1(e);typeof Tn.hooks.addPack=="function"&&!i?Tn.hooks.addPack(t,y1(e)):Tn.styles[t]=F(F({},Tn.styles[t]||{}),s),t==="fas"&&Wm("fa",e)}var Cu,Ru,Nu,Ms=Tn.styles,xj=Tn.shims,bj=(Cu={},Ye(Cu,ve,Object.values(dl[ve])),Ye(Cu,De,Object.values(dl[De])),Cu),Fv=null,CA={},RA={},NA={},OA={},DA={},Aj=(Ru={},Ye(Ru,ve,Object.keys(fl[ve])),Ye(Ru,De,Object.keys(fl[De])),Ru);function kj(t){return~lj.indexOf(t)}function Pj(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!kj(i)?i:null}var LA=function(){var e=function(s){return Qd(Ms,function(o,a,l){return o[l]=Qd(a,s,{}),o},{})};CA=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),RA=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),DA=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ms||z.autoFetchSvg,r=Qd(xj,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});NA=r.names,OA=r.unicodes,Fv=Fh(z.styleDefault,{family:z.familyDefault})};hj(function(t){Fv=Fh(t.styleDefault,{family:z.familyDefault})});LA();function $v(t,e){return(CA[t]||{})[e]}function Cj(t,e){return(RA[t]||{})[e]}function Vi(t,e){return(DA[t]||{})[e]}function VA(t){return NA[t]||{prefix:null,iconName:null}}function Rj(t){var e=OA[t],n=$v("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yi(){return Fv}var jv=function(){return{prefix:null,iconName:null,rest:[]}};function Fh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ve:n,i=fl[r][t],s=hl[r][t]||hl[r][i],o=t in Tn.styles?t:null;return s||o||null}var v1=(Nu={},Ye(Nu,ve,Object.keys(dl[ve])),Ye(Nu,De,Object.keys(dl[De])),Nu);function $h(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ye(e,ve,"".concat(z.cssPrefix,"-").concat(ve)),Ye(e,De,"".concat(z.cssPrefix,"-").concat(De)),e),o=null,a=ve;(t.includes(s[ve])||t.some(function(u){return v1[ve].includes(u)}))&&(a=ve),(t.includes(s[De])||t.some(function(u){return v1[De].includes(u)}))&&(a=De);var l=t.reduce(function(u,c){var f=Pj(z.cssPrefix,c);if(Ms[c]?(c=bj[a].includes(c)?nj[a][c]:c,o=c,u.prefix=c):Aj[a].indexOf(c)>-1?(o=c,u.prefix=Fh(c,{family:a})):f?u.iconName=f:c!==z.replacementClass&&c!==s[ve]&&c!==s[De]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?VA(u.iconName):{},p=Vi(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Ms.far&&Ms.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},jv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===De&&(Ms.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Vi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yi()||"fas"),l}var Nj=function(){function t(){H3(this,t),this.definitions={}}return W3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=F(F({},n.definitions[a]||{}),o[a]),Wm(a,o[a]);var l=dl[ve][a];l&&Wm(l,o[a]),LA()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),_1=[],Fs={},to={},Oj=Object.keys(to);function Dj(t,e){var n=e.mixoutsTo;return _1=t,Fs={},Object.keys(to).forEach(function(r){Oj.indexOf(r)===-1&&delete to[r]}),_1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),sf(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Fs[o]||(Fs[o]=[]),Fs[o].push(s[o])})}r.provides&&r.provides(to)}),n}function qm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Fs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function rs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Fs[t]||[];i.forEach(function(s){s.apply(null,n)})}function Tr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return to[t]?to[t].apply(null,e):void 0}function Km(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yi();if(e)return e=Vi(n,e)||e,g1(MA.definitions,n,e)||g1(Tn.styles,n,e)}var MA=new Nj,Lj=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,rs("noAuto")},Vj={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ir?(rs("beforeI2svg",e),Tr("pseudoElements2svg",e),Tr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,Ej(function(){Fj({autoReplaceSvgRoot:n}),rs("watch",e)})}},Mj={icon:function(e){if(e===null)return null;if(sf(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Vi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Fh(e[0]);return{prefix:r,iconName:Vi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(rj))){var i=$h(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||yi(),iconName:Vi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=yi();return{prefix:s,iconName:Vi(s,e)||e}}}},Zt={noAuto:Lj,config:z,dom:Vj,parse:Mj,library:MA,findIconDefinition:Km,toHtml:Wl},Fj=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Ee:n;(Object.keys(Tn.styles).length>0||z.autoFetchSvg)&&Ir&&z.autoReplaceSvg&&Zt.dom.i2svg({node:r})};function jh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Wl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Ir){var r=Ee.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function $j(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Mv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Mh(F(F({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function jj(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:o}),children:r}]}]}function Uv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,y=r.found?r:n,v=y.width,E=y.height,m=i==="fak",d=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(H){return f.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(f.classes).join(" "),g={children:[],attributes:F(F({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(E)})},T=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/E*16*.0625,"em")}:{};p&&(g.attributes[ns]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||ml())},children:[l]}),delete g.attributes.title);var S=F(F({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:F(F({},T),f.styles)}),k=r.found&&n.found?Tr("generateAbstractMask",S)||{children:[],attributes:{}}:Tr("generateAbstractIcon",S)||{children:[],attributes:{}},R=k.children,D=k.attributes;return S.children=R,S.attributes=D,a?jj(S):$j(S)}function w1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=F(F(F({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ns]="");var c=F({},o.styles);Mv(i)&&(c.transform=yj({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Mh(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Uj(t){var e=t.content,n=t.title,r=t.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Mh(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Yd=Tn.styles;function Gm(t){var e=t[0],n=t[1],r=t.slice(4),i=Rv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Li.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Li.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Li.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var zj={found:!1,width:512,height:512};function Bj(t,e){!SA&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Qm(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=yi()),new Promise(function(r,i){if(Tr("missingIconAbstract"),n==="fa"){var s=VA(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Yd[e]&&Yd[e][t]){var o=Yd[e][t];return r(Gm(o))}Bj(t,e),r(F(F({},zj),{},{icon:z.showMissingIcons&&t?Tr("missingIconAbstract")||{}:{}}))})}var E1=function(){},Ym=z.measurePerformance&&Iu&&Iu.mark&&Iu.measure?Iu:{mark:E1,measure:E1},oa='FA "6.4.2"',Hj=function(e){return Ym.mark("".concat(oa," ").concat(e," begins")),function(){return FA(e)}},FA=function(e){Ym.mark("".concat(oa," ").concat(e," ends")),Ym.measure("".concat(oa," ").concat(e),"".concat(oa," ").concat(e," begins"),"".concat(oa," ").concat(e," ends"))},zv={begin:Hj,end:FA},ec=function(){};function T1(t){var e=t.getAttribute?t.getAttribute(ns):null;return typeof e=="string"}function Wj(t){var e=t.getAttribute?t.getAttribute(Ov):null,n=t.getAttribute?t.getAttribute(Dv):null;return e&&n}function qj(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function Kj(){if(z.autoReplaceSvg===!0)return tc.replace;var t=tc[z.autoReplaceSvg];return t||tc.replace}function Gj(t){return Ee.createElementNS("http://www.w3.org/2000/svg",t)}function Qj(t){return Ee.createElement(t)}function $A(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Gj:Qj:n;if(typeof t=="string")return Ee.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild($A(o,{ceFn:r}))}),i}function Yj(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var tc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore($A(i),n)}),n.getAttribute(ns)===null&&z.keepOriginalSource){var r=Ee.createComment(Yj(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Vv(n).indexOf(z.replacementClass))return tc.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Wl(a)}).join(`
`);n.setAttribute(ns,""),n.innerHTML=o}};function S1(t){t()}function jA(t,e){var n=typeof e=="function"?e:ec;if(t.length===0)n();else{var r=S1;z.mutateApproach===ej&&(r=gi.requestAnimationFrame||S1),r(function(){var i=Kj(),s=zv.begin("mutate");t.map(i),s(),n()})}}var Bv=!1;function UA(){Bv=!0}function Xm(){Bv=!1}var af=null;function I1(t){if(d1&&z.observeMutations){var e=t.treeCallback,n=e===void 0?ec:e,r=t.nodeCallback,i=r===void 0?ec:r,s=t.pseudoElementsCallback,o=s===void 0?ec:s,a=t.observeMutationsRoot,l=a===void 0?Ee:a;af=new d1(function(u){if(!Bv){var c=yi();Vo(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!T1(f.addedNodes[0])&&(z.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&T1(f.target)&&~aj.indexOf(f.attributeName))if(f.attributeName==="class"&&Wj(f.target)){var h=$h(Vv(f.target)),p=h.prefix,y=h.iconName;f.target.setAttribute(Ov,p||c),y&&f.target.setAttribute(Dv,y)}else qj(f.target)&&i(f.target)})}}),Ir&&af.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Xj(){af&&af.disconnect()}function Jj(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function Zj(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=$h(Vv(t));return i.prefix||(i.prefix=yi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Cj(i.prefix,t.innerText)||$v(i.prefix,Hm(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function eU(t){var e=Vo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||ml()):(e["aria-hidden"]="true",e.focusable="false")),e}function tU(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function x1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zj(t),r=n.iconName,i=n.prefix,s=n.rest,o=eU(t),a=qm("parseNodeAttributes",{},t),l=e.styleParser?Jj(t):[];return F({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var nU=Tn.styles;function zA(t){var e=z.autoReplaceSvg==="nest"?x1(t,{styleParser:!1}):x1(t);return~e.extra.classes.indexOf(IA)?Tr("generateLayersText",t,e):Tr("generateSvgReplacementMutation",t,e)}var vi=new Set;Lv.map(function(t){vi.add("fa-".concat(t))});Object.keys(fl[ve]).map(vi.add.bind(vi));Object.keys(fl[De]).map(vi.add.bind(vi));vi=Bl(vi);function b1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ir)return Promise.resolve();var n=Ee.documentElement.classList,r=function(f){return n.add("".concat(p1,"-").concat(f))},i=function(f){return n.remove("".concat(p1,"-").concat(f))},s=z.autoFetchSvg?vi:Lv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(nU));s.includes("fa")||s.push("fa");var o=[".".concat(IA,":not([").concat(ns,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ns,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Vo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=zv.begin("onTree"),u=a.reduce(function(c,f){try{var h=zA(f);h&&c.push(h)}catch(p){SA||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){jA(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function rU(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zA(t).then(function(n){n&&jA([n],e)})}function iU(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Km(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Km(i||{})),t(r,F(F({},n),{},{mask:i}))}}var sU=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Fn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,v=n.classes,E=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,g=n.styles,T=g===void 0?{}:g;if(e){var S=e.prefix,k=e.iconName,R=e.icon;return jh(F({type:"icon"},e),function(){return rs("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(h?d["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(y||ml()):(d["aria-hidden"]="true",d.focusable="false")),Uv({icons:{main:Gm(R),mask:l?Gm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:k,transform:F(F({},Fn),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:d,styles:T,classes:E}})})}},oU={mixout:function(){return{icon:iU(sU)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=b1,n.nodeCallback=rU,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Ee:r,s=n.callback,o=s===void 0?function(){}:s;return b1(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,y){Promise.all([Qm(i,a),c.iconName?Qm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var E=Rv(v,2),m=E[0],d=E[1];p([n,Uv({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Mh(a);l.length>0&&(i.style=l);var u;return Mv(o)&&(u=Tr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},aU={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return jh({type:"layer"},function(){rs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Bl(s)).join(" ")},children:o}]})}}}},lU={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return jh({type:"counter",content:n},function(){return rs("beforeDOMElementCreation",{content:n,params:r}),Uj({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Bl(a))}})})}}}},uU={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Fn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return jh({type:"text",content:n},function(){return rs("beforeDOMElementCreation",{content:n,params:r}),w1({content:n,transform:F(F({},Fn),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Bl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(wA){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,w1({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},cU=new RegExp('"',"ug"),A1=[1105920,1112319];function fU(t){var e=t.replace(cU,""),n=Ij(e,0),r=n>=A1[0]&&n<=A1[1],i=e.length===2?e[0]===e[1]:!1;return{value:Hm(i?e[0]:e),isSecondary:r||i}}function k1(t,e){var n="".concat(Z3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Vo(t.children),o=s.filter(function(R){return R.getAttribute(Bm)===e})[0],a=gi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(ij),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?De:ve,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hl[h][l[2].toLowerCase()]:sj[h][u],y=fU(f),v=y.value,E=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=$v(p,v),g=d;if(m){var T=Rj(v);T.iconName&&T.prefix&&(d=T.iconName,p=T.prefix)}if(d&&!E&&(!o||o.getAttribute(Ov)!==p||o.getAttribute(Dv)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var S=tU(),k=S.extra;k.attributes[Bm]=e,Qm(d,p).then(function(R){var D=Uv(F(F({},S),{},{icons:{main:R,mask:jv()},prefix:p,iconName:g,extra:k,watchable:!0})),H=Ee.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=D.map(function(O){return Wl(O)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function hU(t){return Promise.all([k1(t,"::before"),k1(t,"::after")])}function dU(t){return t.parentNode!==document.head&&!~tj.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function P1(t){if(Ir)return new Promise(function(e,n){var r=Vo(t.querySelectorAll("*")).filter(dU).map(hU),i=zv.begin("searchPseudoElements");UA(),Promise.all(r).then(function(){i(),Xm(),e()}).catch(function(){i(),Xm(),n()})})}var pU={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=P1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Ee:r;z.searchPseudoElements&&P1(i)}}},C1=!1,mU={mixout:function(){return{dom:{unwatch:function(){UA(),C1=!0}}}},hooks:function(){return{bootstrap:function(){I1(qm("mutationObserverCallbacks",{}))},noAuto:function(){Xj()},watch:function(n){var r=n.observeMutationsRoot;C1?Xm():I1(qm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},R1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},gU={mixout:function(){return{parse:{transform:function(n){return R1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=R1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:F({},p.outer),children:[{tag:"g",attributes:F({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),p.path)}]}]}}}},Xd={x:0,y:0,width:"100%",height:"100%"};function N1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function yU(t){return t.tag==="g"?t.children:[t]}var vU={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?$h(i.split(" ").map(function(o){return o.trim()})):jv();return s.prefix||(s.prefix=yi()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,p=gj({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:F(F({},Xd),{},{fill:"white"})},v=c.children?{children:c.children.map(N1)}:{},E={tag:"g",attributes:F({},p.inner),children:[N1(F({tag:c.tag,attributes:F(F({},c.attributes),p.path)},v))]},m={tag:"g",attributes:F({},p.outer),children:[E]},d="mask-".concat(a||ml()),g="clip-".concat(a||ml()),T={tag:"mask",attributes:F(F({},Xd),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:yU(h)},T]};return r.push(S,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Xd)}),{children:r,attributes:i}}}},_U={provides:function(e){var n=!1;gi.matchMedia&&(n=gi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:F(F({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},wU={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},EU=[_j,oU,aU,lU,uU,pU,mU,gU,vU,_U,wU];Dj(EU,{mixoutsTo:Zt});Zt.noAuto;Zt.config;Zt.library;Zt.dom;var Jm=Zt.parse;Zt.findIconDefinition;Zt.toHtml;var TU=Zt.icon;Zt.layer;Zt.text;Zt.counter;var BA={exports:{}},SU="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",IU=SU,xU=IU;function HA(){}function WA(){}WA.resetWarningCache=HA;var bU=function(){function t(r,i,s,o,a,l){if(l!==xU){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:WA,resetWarningCache:HA};return n.PropTypes=n,n};BA.exports=bU();var AU=BA.exports;const re=ag(AU);function O1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Hr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?O1(Object(n),!0).forEach(function(r){$s(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lf(t){"@babel/helpers - typeof";return lf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lf(t)}function $s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kU(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PU(t,e){if(t==null)return{};var n=kU(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Zm(t){return CU(t)||RU(t)||NU(t)||OU()}function CU(t){if(Array.isArray(t))return eg(t)}function RU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function NU(t,e){if(t){if(typeof t=="string")return eg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return eg(t,e)}}function eg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function OU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function DU(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,y=t.border,v=t.listItem,E=t.flip,m=t.size,d=t.rotation,g=t.pull,T=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":y,"fa-li":v,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},$s(e,"fa-".concat(m),typeof m<"u"&&m!==null),$s(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),$s(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),$s(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(S){return T[S]?S:null}).filter(function(S){return S})}function LU(t){return t=t-0,t===t}function qA(t){return LU(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var VU=["style"];function MU(t){return t.charAt(0).toUpperCase()+t.slice(1)}function FU(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=qA(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[MU(i)]=s:e[i]=s,e},{})}function KA(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return KA(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=FU(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[qA(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=PU(n,VU);return i.attrs.style=Hr(Hr({},i.attrs.style),o),t.apply(void 0,[e.tag,Hr(Hr({},i.attrs),a)].concat(Zm(r)))}var GA=!1;try{GA=!0}catch{}function $U(){if(!GA&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function D1(t){if(t&&lf(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jm.icon)return Jm.icon(t);if(t===null)return null;if(t&&lf(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Jd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?$s({},t,e):{}}var ql=rn.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=D1(n),c=Jd("classes",[].concat(Zm(DU(t)),Zm(s.split(" ")))),f=Jd("transform",typeof t.transform=="string"?Jm.transform(t.transform):t.transform),h=Jd("mask",D1(r)),p=TU(u,Hr(Hr(Hr(Hr({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return $U("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(t).forEach(function(E){ql.defaultProps.hasOwnProperty(E)||(v[E]=t[E])}),jU(y[0],v)});ql.displayName="FontAwesomeIcon";ql.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};ql.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var jU=KA.bind(null,rn.createElement);function Zd({count:t,title:e,icon:n}){return _.jsxs("div",{className:"card",children:[_.jsx(UU,{iconName:n}),_.jsx("h3",{className:"text-2xl font-bold p-3 text-white",children:e}),_.jsx("p",{className:"text-justify text-gray-400",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloribus aut sed ut cupiditate, recusandae perspiciatis placeat soluta, ipsa incidunt qui ratione fugiat accusamus nostrum numquam, laborum nemo adipisci ducimus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit doloribus aut sed ut cupiditate, recusandae perspiciatis placeat soluta, ipsa incidunt qui ratione fugiat accusamus nostrum numquam, laborum nemo adipisci ducimus!"})]})}const UU=({iconName:t})=>_.jsx(ql,{className:"text-6xl text-white",icon:t});var zU={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"]},BU={prefix:"fas",iconName:"user-shield",icon:[640,512,[],"f505","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"]},HU={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]};const WU=()=>_.jsxs(_.Fragment,{children:[_.jsxs("section",{className:"flex justify-center gap-5 pt-0 items-center flex-col w-4/5 mx-auto p-5",children:[_.jsx("img",{src:"mars.png"}),_.jsx("h1",{className:"sm:text-6xl p-5 pt-0 font-bold xs:text-4xl",children:"Find Your Own Mars"}),_.jsx("p",{className:"sm:text-lg text-center xs:text-sm",children:"Just like us you can find your own mars. Whether you're looking to rehome a beloved pet or open your home to a new four-legged friend, our platform provides a safe and caring space to make it happen. Join us in creating a world where every pet can find the forever home they deserve."}),_.jsx(Rt,{to:"/join",className:"cta-btn",children:"Join Now"})]}),_.jsxs("section",{className:"sm:my-10 text-center sm:py-20 xs:my-10 xs:py-10",children:[_.jsx("h2",{className:"font-bold mb-5 text-4xl",children:"Why US"}),_.jsx("p",{className:"mb-8 text-lg text-gray-400",children:"Because we care about pet more than you"}),_.jsxs("div",{className:"grid lg:grid-cols-3 gap-5 sm:mt-20 xs:mt-10 xs:grid-cols-1 ",children:[_.jsx(Zd,{count:"1",title:"Safety and Trust",icon:HU}),_.jsx(Zd,{count:"2",title:"Verified User",icon:BU}),_.jsx(Zd,{count:"3",title:"Support Team",icon:zU})]})]})]}),L1=t=>{const[e,n]=P.useState(null),[r,i]=P.useState(!0),[s,o]=P.useState(null);P.useEffect(()=>{a()},[]);const a=()=>{fetch(t).then(u=>{if(!u.ok)throw new Error("Network response was not ok");return u.json()}).then(u=>{i(!1),o(null),n(u)}).catch(u=>{i(!1),o(u.message),n(null)})};return{data:e,isPending:r,error:s,reFetchFact:()=>{i(!0),o(null),n(null),a()}}},qU=()=>{const{data:t,isPending:e,error:n,reFetchFact:r}=L1("https://catfact.ninja/fact"),i=()=>{r()},{data:s,isPending:o,error:a,reFetchFact:l}=L1("https://catfact.ninja/fact"),u=()=>{l()};return _.jsx(_.Fragment,{children:_.jsx("section",{className:"flex items-center p-8 flex-col md:w-4/5 mx-auto min-h-screen xs:w-full",children:_.jsxs("div",{className:"grid md:grid-cols-2 md:divide-x-2 divide-white border-2 border-white form md:p-20 xs:grid-cols-1 xs:p-5",children:[_.jsxs("div",{className:"pr-5",children:[_.jsxs("div",{className:"mb-8 flex justify-center items-center flex-col",children:[_.jsx("h2",{className:"font-bold p-3 text-4xl",children:"Cat Facts"}),_.jsx("button",{className:"cta-btn",onClick:i,children:"Regenerate"})]}),_.jsxs("div",{className:"text-center",children:[e&&_.jsx("div",{children:"Loading..."}),n&&_.jsx("div",{children:n}),t&&_.jsx("div",{children:t.fact})]})]}),_.jsxs("div",{className:"pl-5",children:[_.jsxs("div",{className:"mb-8 flex justify-center items-center flex-col",children:[_.jsx("h2",{className:"font-bold p-3 text-4xl",children:"Another Cat Facts"}),_.jsx("button",{className:"cta-btn",onClick:u,children:"Regenerate"})]}),_.jsxs("div",{className:"text-center",children:[o&&_.jsx("div",{children:"Loading..."}),a&&_.jsx("div",{children:a}),s&&_.jsx("div",{children:s.fact})]})]})]})})})},KU=()=>_.jsx(_.Fragment,{children:_.jsxs("section",{className:"flex items-center p-8 flex-col md:w-4/5 mx-auto min-h-screen xs:w-full",children:[_.jsx("h2",{className:"font-bold p-3 text-4xl",children:"About US"}),_.jsxs("div",{className:"text-justify",children:[_.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloribus ratione, nobis dicta, rerum sint facere hic autem, voluptatem fugiat fuga! Quo accusamus nesciunt alias mollitia velit dolor tempora vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas ducimus cum, facere dolore accusantium officia velit sapiente pariatur fugit quo, optio quibusdam voluptatem voluptate placeat, totam eum vero tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel expedita voluptatibus dolore? Voluptate magni earum quasi, vero voluptatem saepe numquam odit delectus. Quaerat officiis qui architecto dolore! Harum, asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, soluta! Ex, doloremque. Nobis eaque in atque quae, eum laudantium accusamus debitis reprehenderit corrupti? Hic nesciunt quis necessitatibus magni quia dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia optio ad quod excepturi laborum quo aut, corporis repellat, quos maxime, nemo eveniet incidunt molestias? Voluptatem sed recusandae magnam facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora harum culpa officia nulla maxime illo amet expedita at, cupiditate ab reprehenderit deserunt assumenda excepturi dolor natus laborum doloribus quasi quas!"}),_.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloribus ratione, nobis dicta, rerum sint facere hic autem, voluptatem fugiat fuga! Quo accusamus nesciunt alias mollitia velit dolor tempora vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas ducimus cum, facere dolore accusantium officia velit sapiente pariatur fugit quo, optio quibusdam voluptatem voluptate placeat, totam eum vero tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel expedita voluptatibus dolore? Voluptate magni earum quasi, vero voluptatem saepe numquam odit delectus. Quaerat officiis qui architecto dolore! Harum, asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, soluta! Ex, doloremque. Nobis eaque in atque quae, eum laudantium accusamus debitis reprehenderit corrupti? Hic nesciunt quis necessitatibus magni quia dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia optio ad quod excepturi laborum quo aut, corporis repellat, quos maxime, nemo eveniet incidunt molestias? Voluptatem sed recusandae magnam facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora harum culpa officia nulla maxime illo amet expedita at, cupiditate ab reprehenderit deserunt assumenda excepturi dolor natus laborum doloribus quasi quas!"}),_.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi doloribus ratione, nobis dicta, rerum sint facere hic autem, voluptatem fugiat fuga! Quo accusamus nesciunt alias mollitia velit dolor tempora vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptas ducimus cum, facere dolore accusantium officia velit sapiente pariatur fugit quo, optio quibusdam voluptatem voluptate placeat, totam eum vero tempore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vel expedita voluptatibus dolore? Voluptate magni earum quasi, vero voluptatem saepe numquam odit delectus. Quaerat officiis qui architecto dolore! Harum, asperiores? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, soluta! Ex, doloremque. Nobis eaque in atque quae, eum laudantium accusamus debitis reprehenderit corrupti? Hic nesciunt quis necessitatibus magni quia dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia optio ad quod excepturi laborum quo aut, corporis repellat, quos maxime, nemo eveniet incidunt molestias? Voluptatem sed recusandae magnam facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora harum culpa officia nulla maxime illo amet expedita at, cupiditate ab reprehenderit deserunt assumenda excepturi dolor natus laborum doloribus quasi quas!"})]})]})}),GU=()=>{const t=ti(i=>i.global.value.siteName),e=Tl(),[n]=fs(_r);P.useEffect(()=>{n&&e("/dashboard")},[n]);const r=()=>{pL(_r,M3).then(i=>{e("/dashboard")}).catch(i=>{const s=i.message;console.log(s)})};return _.jsx(_.Fragment,{children:_.jsxs("section",{className:"flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen",children:[_.jsxs("h2",{className:"font-bold p-3 text-4xl",children:["Welcome to ",t]}),_.jsx("div",{className:"text-justify",children:_.jsx("button",{onClick:r,className:"cta-btn",children:"Sign In"})})]})})};function QU(){return _.jsxs("nav",{className:"flex flex-col md:items-start py-5 text-center xs:items-center",children:[_.jsx("h2",{className:"text-2xl",children:"Menu"}),_.jsxs("ul",{className:"flex flex-col justify-center items-start nav-list border-2 border-white form m-0 pl-3 pr-20 py-5",children:[_.jsx(Rt,{to:"",className:"px-3 font-bold text-lg",children:_.jsx("span",{children:"Dashboard"})}),_.jsx(Rt,{to:"adoption-post",className:"px-3 font-bold text-lg",children:_.jsx("span",{children:"Make Adoption"})}),_.jsx(Rt,{to:"adoption-list",className:"px-3 font-bold text-lg",children:_.jsx("span",{children:"Browse Adoption"})})]})]})}const YU=()=>{const[t]=fs(_r);return _.jsx(_.Fragment,{children:_.jsxs("section",{className:"flex flex-col items-center p-8 col-span-3 w-4/5 mx-auto min-h-screen md:order-first xs:order-last",children:[_.jsx("h2",{className:"font-bold p-3 text-4xl",children:"Dashboard"}),_.jsxs("div",{className:"text-justify",children:[_.jsx("img",{src:t==null?void 0:t.photoURL,className:"w-full"}),_.jsxs("h3",{className:"text-2xl",children:["Welcome ",t==null?void 0:t.displayName]})]})]})})};var Kl=t=>t.type==="checkbox",js=t=>t instanceof Date,Ct=t=>t==null;const QA=t=>typeof t=="object";var Xe=t=>!Ct(t)&&!Array.isArray(t)&&QA(t)&&!js(t),XU=t=>Xe(t)&&t.target?Kl(t.target)?t.target.checked:t.target.value:t,JU=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,ZU=(t,e)=>t.has(JU(e)),e5=t=>{const e=t.constructor&&t.constructor.prototype;return Xe(e)&&e.hasOwnProperty("isPrototypeOf")},Hv=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Pr(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Hv&&(t instanceof Blob||t instanceof FileList))&&(n||Xe(t)))if(e=n?[]:{},!n&&!e5(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Pr(t[r]));else return t;return e}var Gl=t=>Array.isArray(t)?t.filter(Boolean):[],Be=t=>t===void 0,j=(t,e,n)=>{if(!e||!Xe(t))return n;const r=Gl(e.split(/[,[\].]+?/)).reduce((i,s)=>Ct(i)?i:i[s],t);return Be(r)||r===t?Be(t[e])?n:t[e]:r};const V1={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},wn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Zn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};rn.createContext(null);var t5=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==wn.all&&(e._proxyFormState[o]=!r||wn.all),n&&(n[o]=!0),t[o]}});return i},en=t=>Xe(t)&&!Object.keys(t).length,n5=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return en(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||wn.all))},ep=t=>Array.isArray(t)?t:[t];function r5(t){const e=rn.useRef(t);e.current=t,rn.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var $n=t=>typeof t=="string",i5=(t,e,n,r,i)=>$n(t)?(r&&e.watch.add(t),j(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),j(n,s))):(r&&(e.watchAll=!0),n),Wv=t=>/^\w*$/.test(t),YA=t=>Gl(t.replace(/["|']|\]/g,"").split(/\.|\[/));function me(t,e,n){let r=-1;const i=Wv(e)?[e]:YA(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Xe(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var XA=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const tg=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=j(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Xe(o)&&tg(o,e)}}};var M1=t=>({isOnSubmit:!t||t===wn.onSubmit,isOnBlur:t===wn.onBlur,isOnChange:t===wn.onChange,isOnAll:t===wn.all,isOnTouch:t===wn.onTouched}),F1=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),s5=(t,e,n)=>{const r=Gl(j(t,n));return me(r,"root",e[n]),me(t,n,r),t},no=t=>typeof t=="boolean",qv=t=>t.type==="file",Wr=t=>typeof t=="function",uf=t=>{if(!Hv)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},nc=t=>$n(t),Kv=t=>t.type==="radio",cf=t=>t instanceof RegExp;const $1={value:!1,isValid:!1},j1={value:!0,isValid:!0};var JA=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Be(t[0].attributes.value)?Be(t[0].value)||t[0].value===""?j1:{value:t[0].value,isValid:!0}:j1:$1}return $1};const U1={isValid:!1,value:null};var ZA=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,U1):U1;function z1(t,e,n="validate"){if(nc(t)||Array.isArray(t)&&t.every(nc)||no(t)&&!t)return{type:n,message:nc(t)?t:"",ref:e}}var vs=t=>Xe(t)&&!cf(t)?t:{value:t,message:""},B1=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:f,pattern:h,validate:p,name:y,valueAsNumber:v,mount:E,disabled:m}=t._f,d=j(e,y);if(!E||m)return{};const g=o?o[0]:s,T=ne=>{r&&g.reportValidity&&(g.setCustomValidity(no(ne)?"":ne||""),g.reportValidity())},S={},k=Kv(s),R=Kl(s),D=k||R,H=(v||qv(s))&&Be(s.value)&&Be(d)||uf(s)&&s.value===""||d===""||Array.isArray(d)&&!d.length,O=XA.bind(null,y,n,S),ae=(ne,ee,Se,ht=Zn.maxLength,dt=Zn.minLength)=>{const Vt=ne?ee:Se;S[y]={type:ne?ht:dt,message:Vt,ref:s,...O(ne?ht:dt,Vt)}};if(i?!Array.isArray(d)||!d.length:a&&(!D&&(H||Ct(d))||no(d)&&!d||R&&!JA(o).isValid||k&&!ZA(o).isValid)){const{value:ne,message:ee}=nc(a)?{value:!!a,message:a}:vs(a);if(ne&&(S[y]={type:Zn.required,message:ee,ref:g,...O(Zn.required,ee)},!n))return T(ee),S}if(!H&&(!Ct(c)||!Ct(f))){let ne,ee;const Se=vs(f),ht=vs(c);if(!Ct(d)&&!isNaN(d)){const dt=s.valueAsNumber||d&&+d;Ct(Se.value)||(ne=dt>Se.value),Ct(ht.value)||(ee=dt<ht.value)}else{const dt=s.valueAsDate||new Date(d),Vt=X=>new Date(new Date().toDateString()+" "+X),V=s.type=="time",G=s.type=="week";$n(Se.value)&&d&&(ne=V?Vt(d)>Vt(Se.value):G?d>Se.value:dt>new Date(Se.value)),$n(ht.value)&&d&&(ee=V?Vt(d)<Vt(ht.value):G?d<ht.value:dt<new Date(ht.value))}if((ne||ee)&&(ae(!!ne,Se.message,ht.message,Zn.max,Zn.min),!n))return T(S[y].message),S}if((l||u)&&!H&&($n(d)||i&&Array.isArray(d))){const ne=vs(l),ee=vs(u),Se=!Ct(ne.value)&&d.length>+ne.value,ht=!Ct(ee.value)&&d.length<+ee.value;if((Se||ht)&&(ae(Se,ne.message,ee.message),!n))return T(S[y].message),S}if(h&&!H&&$n(d)){const{value:ne,message:ee}=vs(h);if(cf(ne)&&!d.match(ne)&&(S[y]={type:Zn.pattern,message:ee,ref:s,...O(Zn.pattern,ee)},!n))return T(ee),S}if(p){if(Wr(p)){const ne=await p(d,e),ee=z1(ne,g);if(ee&&(S[y]={...ee,...O(Zn.validate,ee.message)},!n))return T(ee.message),S}else if(Xe(p)){let ne={};for(const ee in p){if(!en(ne)&&!n)break;const Se=z1(await p[ee](d,e),g,ee);Se&&(ne={...Se,...O(ee,Se.message)},T(Se.message),n&&(S[y]=ne))}if(!en(ne)&&(S[y]={ref:g,...ne},!n))return S}}return T(!0),S};function o5(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Be(t)?r++:t[e[r++]];return t}function a5(t){for(const e in t)if(t.hasOwnProperty(e)&&!Be(t[e]))return!1;return!0}function st(t,e){const n=Array.isArray(e)?e:Wv(e)?[e]:YA(e),r=n.length===1?t:o5(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Xe(r)&&en(r)||Array.isArray(r)&&a5(r))&&st(t,n.slice(0,-1)),t}function tp(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var ff=t=>Ct(t)||!QA(t);function Mi(t,e){if(ff(t)||ff(e))return t===e;if(js(t)&&js(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(js(s)&&js(o)||Xe(s)&&Xe(o)||Array.isArray(s)&&Array.isArray(o)?!Mi(s,o):s!==o)return!1}}return!0}var ek=t=>t.type==="select-multiple",l5=t=>Kv(t)||Kl(t),np=t=>uf(t)&&t.isConnected,tk=t=>{for(const e in t)if(Wr(t[e]))return!0;return!1};function hf(t,e={}){const n=Array.isArray(t);if(Xe(t)||n)for(const r in t)Array.isArray(t[r])||Xe(t[r])&&!tk(t[r])?(e[r]=Array.isArray(t[r])?[]:{},hf(t[r],e[r])):Ct(t[r])||(e[r]=!0);return e}function nk(t,e,n){const r=Array.isArray(t);if(Xe(t)||r)for(const i in t)Array.isArray(t[i])||Xe(t[i])&&!tk(t[i])?Be(e)||ff(n[i])?n[i]=Array.isArray(t[i])?hf(t[i],[]):{...hf(t[i])}:nk(t[i],Ct(e)?{}:e[i],n[i]):n[i]=!Mi(t[i],e[i]);return n}var rp=(t,e)=>nk(t,e,hf(e)),rk=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Be(t)?t:e?t===""?NaN:t&&+t:n&&$n(t)?new Date(t):r?r(t):t;function ip(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return qv(e)?e.files:Kv(e)?ZA(t.refs).value:ek(e)?[...e.selectedOptions].map(({value:n})=>n):Kl(e)?JA(t.refs).value:rk(Be(e.value)?t.ref.value:e.value,t)}var u5=(t,e,n,r)=>{const i={};for(const s of t){const o=j(e,s);o&&me(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Yo=t=>Be(t)?t:cf(t)?t.source:Xe(t)?cf(t.value)?t.value.source:t.value:t,c5=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function H1(t,e,n){const r=j(t,n);if(r||Wv(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=j(e,s),a=j(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var f5=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,h5=(t,e)=>!Gl(j(t,e)).length&&st(t,e);const d5={mode:wn.onSubmit,reValidateMode:wn.onChange,shouldFocusError:!0};function p5(t={},e){let n={...d5,...t},r={submitCount:0,isDirty:!1,isLoading:Wr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Xe(n.defaultValues)||Xe(n.values)?Pr(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Pr(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:tp(),array:tp(),state:tp()},p=t.resetOptions&&t.resetOptions.keepDirtyValues,y=M1(n.mode),v=M1(n.reValidateMode),E=n.criteriaMode===wn.all,m=w=>I=>{clearTimeout(c),c=setTimeout(w,I)},d=async w=>{if(f.isValid||w){const I=n.resolver?en((await H()).errors):await ae(i,!0);I!==r.isValid&&h.state.next({isValid:I})}},g=w=>f.isValidating&&h.state.next({isValidating:w}),T=(w,I=[],x,B,M=!0,N=!0)=>{if(B&&x){if(a.action=!0,N&&Array.isArray(j(i,w))){const q=x(j(i,w),B.argA,B.argB);M&&me(i,w,q)}if(N&&Array.isArray(j(r.errors,w))){const q=x(j(r.errors,w),B.argA,B.argB);M&&me(r.errors,w,q),h5(r.errors,w)}if(f.touchedFields&&N&&Array.isArray(j(r.touchedFields,w))){const q=x(j(r.touchedFields,w),B.argA,B.argB);M&&me(r.touchedFields,w,q)}f.dirtyFields&&(r.dirtyFields=rp(s,o)),h.state.next({name:w,isDirty:ee(w,I),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else me(o,w,I)},S=(w,I)=>{me(r.errors,w,I),h.state.next({errors:r.errors})},k=(w,I,x,B)=>{const M=j(i,w);if(M){const N=j(o,w,Be(x)?j(s,w):x);Be(N)||B&&B.defaultChecked||I?me(o,w,I?N:ip(M._f)):dt(w,N),a.mount&&d()}},R=(w,I,x,B,M)=>{let N=!1,q=!1;const Ne={name:w};if(!x||B){f.isDirty&&(q=r.isDirty,r.isDirty=Ne.isDirty=ee(),N=q!==Ne.isDirty);const $e=Mi(j(s,w),I);q=j(r.dirtyFields,w),$e?st(r.dirtyFields,w):me(r.dirtyFields,w,!0),Ne.dirtyFields=r.dirtyFields,N=N||f.dirtyFields&&q!==!$e}if(x){const $e=j(r.touchedFields,w);$e||(me(r.touchedFields,w,x),Ne.touchedFields=r.touchedFields,N=N||f.touchedFields&&$e!==x)}return N&&M&&h.state.next(Ne),N?Ne:{}},D=(w,I,x,B)=>{const M=j(r.errors,w),N=f.isValid&&no(I)&&r.isValid!==I;if(t.delayError&&x?(u=m(()=>S(w,x)),u(t.delayError)):(clearTimeout(c),u=null,x?me(r.errors,w,x):st(r.errors,w)),(x?!Mi(M,x):M)||!en(B)||N){const q={...B,...N&&no(I)?{isValid:I}:{},errors:r.errors,name:w};r={...r,...q},h.state.next(q)}g(!1)},H=async w=>n.resolver(o,n.context,u5(w||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),O=async w=>{const{errors:I}=await H();if(w)for(const x of w){const B=j(I,x);B?me(r.errors,x,B):st(r.errors,x)}else r.errors=I;return I},ae=async(w,I,x={valid:!0})=>{for(const B in w){const M=w[B];if(M){const{_f:N,...q}=M;if(N){const Ne=l.array.has(N.name),$e=await B1(M,o,E,n.shouldUseNativeValidation&&!I,Ne);if($e[N.name]&&(x.valid=!1,I))break;!I&&(j($e,N.name)?Ne?s5(r.errors,$e,N.name):me(r.errors,N.name,$e[N.name]):st(r.errors,N.name))}q&&await ae(q,I,x)}}return x.valid},ne=()=>{for(const w of l.unMount){const I=j(i,w);I&&(I._f.refs?I._f.refs.every(x=>!np(x)):!np(I._f.ref))&&dn(w)}l.unMount=new Set},ee=(w,I)=>(w&&I&&me(o,w,I),!Mi(Ie(),s)),Se=(w,I,x)=>i5(w,l,{...a.mount?o:Be(I)?s:$n(w)?{[w]:I}:I},x,I),ht=w=>Gl(j(a.mount?o:s,w,t.shouldUnregister?j(s,w,[]):[])),dt=(w,I,x={})=>{const B=j(i,w);let M=I;if(B){const N=B._f;N&&(!N.disabled&&me(o,w,rk(I,N)),M=uf(N.ref)&&Ct(I)?"":I,ek(N.ref)?[...N.ref.options].forEach(q=>q.selected=M.includes(q.value)):N.refs?Kl(N.ref)?N.refs.length>1?N.refs.forEach(q=>(!q.defaultChecked||!q.disabled)&&(q.checked=Array.isArray(M)?!!M.find(Ne=>Ne===q.value):M===q.value)):N.refs[0]&&(N.refs[0].checked=!!M):N.refs.forEach(q=>q.checked=q.value===M):qv(N.ref)?N.ref.value="":(N.ref.value=M,N.ref.type||h.values.next({name:w,values:{...o}})))}(x.shouldDirty||x.shouldTouch)&&R(w,M,x.shouldTouch,x.shouldDirty,!0),x.shouldValidate&&X(w)},Vt=(w,I,x)=>{for(const B in I){const M=I[B],N=`${w}.${B}`,q=j(i,N);(l.array.has(w)||!ff(M)||q&&!q._f)&&!js(M)?Vt(N,M,x):dt(N,M,x)}},V=(w,I,x={})=>{const B=j(i,w),M=l.array.has(w),N=Pr(I);me(o,w,N),M?(h.array.next({name:w,values:{...o}}),(f.isDirty||f.dirtyFields)&&x.shouldDirty&&h.state.next({name:w,dirtyFields:rp(s,o),isDirty:ee(w,N)})):B&&!B._f&&!Ct(N)?Vt(w,N,x):dt(w,N,x),F1(w,l)&&h.state.next({...r}),h.values.next({name:w,values:{...o}}),!a.mount&&e()},G=async w=>{const I=w.target;let x=I.name,B=!0;const M=j(i,x),N=()=>I.type?ip(M._f):XU(w);if(M){let q,Ne;const $e=N(),ms=w.type===V1.BLUR||w.type===V1.FOCUS_OUT,vk=!c5(M._f)&&!n.resolver&&!j(r.errors,x)&&!M._f.deps||f5(ms,j(r.touchedFields,x),r.isSubmitted,v,y),Hh=F1(x,l,ms);me(o,x,$e),ms?(M._f.onBlur&&M._f.onBlur(w),u&&u(0)):M._f.onChange&&M._f.onChange(w);const Wh=R(x,$e,ms,!1),_k=!en(Wh)||Hh;if(!ms&&h.values.next({name:x,type:w.type,values:{...o}}),vk)return f.isValid&&d(),_k&&h.state.next({name:x,...Hh?{}:Wh});if(!ms&&Hh&&h.state.next({...r}),g(!0),n.resolver){const{errors:r0}=await H([x]),wk=H1(r.errors,i,x),i0=H1(r0,i,wk.name||x);q=i0.error,x=i0.name,Ne=en(r0)}else q=(await B1(M,o,E,n.shouldUseNativeValidation))[x],B=isNaN($e)||$e===j(o,x,$e),B&&(q?Ne=!1:f.isValid&&(Ne=await ae(i,!0)));B&&(M._f.deps&&X(M._f.deps),D(x,Ne,q,Wh))}},X=async(w,I={})=>{let x,B;const M=ep(w);if(g(!0),n.resolver){const N=await O(Be(w)?w:M);x=en(N),B=w?!M.some(q=>j(N,q)):x}else w?(B=(await Promise.all(M.map(async N=>{const q=j(i,N);return await ae(q&&q._f?{[N]:q}:q)}))).every(Boolean),!(!B&&!r.isValid)&&d()):B=x=await ae(i);return h.state.next({...!$n(w)||f.isValid&&x!==r.isValid?{}:{name:w},...n.resolver||!w?{isValid:x}:{},errors:r.errors,isValidating:!1}),I.shouldFocus&&!B&&tg(i,N=>N&&j(r.errors,N),w?M:l.mount),B},Ie=w=>{const I={...s,...a.mount?o:{}};return Be(w)?I:$n(w)?j(I,w):w.map(x=>j(I,x))},Fe=(w,I)=>({invalid:!!j((I||r).errors,w),isDirty:!!j((I||r).dirtyFields,w),isTouched:!!j((I||r).touchedFields,w),error:j((I||r).errors,w)}),ps=w=>{w&&ep(w).forEach(I=>st(r.errors,I)),h.state.next({errors:w?r.errors:{}})},Pn=(w,I,x)=>{const B=(j(i,w,{_f:{}})._f||{}).ref;me(r.errors,w,{...I,ref:B}),h.state.next({name:w,errors:r.errors,isValid:!1}),x&&x.shouldFocus&&B&&B.focus&&B.focus()},Mo=(w,I)=>Wr(w)?h.values.subscribe({next:x=>w(Se(void 0,I),x)}):Se(w,I,!0),dn=(w,I={})=>{for(const x of w?ep(w):l.mount)l.mount.delete(x),l.array.delete(x),I.keepValue||(st(i,x),st(o,x)),!I.keepError&&st(r.errors,x),!I.keepDirty&&st(r.dirtyFields,x),!I.keepTouched&&st(r.touchedFields,x),!n.shouldUnregister&&!I.keepDefaultValue&&st(s,x);h.values.next({values:{...o}}),h.state.next({...r,...I.keepDirty?{isDirty:ee()}:{}}),!I.keepIsValid&&d()},xr=(w,I={})=>{let x=j(i,w);const B=no(I.disabled);return me(i,w,{...x||{},_f:{...x&&x._f?x._f:{ref:{name:w}},name:w,mount:!0,...I}}),l.mount.add(w),x?B&&me(o,w,I.disabled?void 0:j(o,w,ip(x._f))):k(w,!0,I.value),{...B?{disabled:I.disabled}:{},...n.progressive?{required:!!I.required,min:Yo(I.min),max:Yo(I.max),minLength:Yo(I.minLength),maxLength:Yo(I.maxLength),pattern:Yo(I.pattern)}:{},name:w,onChange:G,onBlur:G,ref:M=>{if(M){xr(w,I),x=j(i,w);const N=Be(M.value)&&M.querySelectorAll&&M.querySelectorAll("input,select,textarea")[0]||M,q=l5(N),Ne=x._f.refs||[];if(q?Ne.find($e=>$e===N):N===x._f.ref)return;me(i,w,{_f:{...x._f,...q?{refs:[...Ne.filter(np),N,...Array.isArray(j(s,w))?[{}]:[]],ref:{type:N.type,name:w}}:{ref:N}}}),k(w,!1,void 0,N)}else x=j(i,w,{}),x._f&&(x._f.mount=!1),(n.shouldUnregister||I.shouldUnregister)&&!(ZU(l.array,w)&&a.action)&&l.unMount.add(w)}}},Zv=()=>n.shouldFocusError&&tg(i,w=>w&&j(r.errors,w),l.mount),e0=(w,I)=>async x=>{x&&(x.preventDefault&&x.preventDefault(),x.persist&&x.persist());let B=Pr(o);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:M,values:N}=await H();r.errors=M,B=N}else await ae(i);st(r.errors,"root"),en(r.errors)?(h.state.next({errors:{}}),await w(B,x)):(I&&await I({...r.errors},x),Zv(),setTimeout(Zv)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:en(r.errors),submitCount:r.submitCount+1,errors:r.errors})},yk=(w,I={})=>{j(i,w)&&(Be(I.defaultValue)?V(w,j(s,w)):(V(w,I.defaultValue),me(s,w,I.defaultValue)),I.keepTouched||st(r.touchedFields,w),I.keepDirty||(st(r.dirtyFields,w),r.isDirty=I.defaultValue?ee(w,j(s,w)):ee()),I.keepError||(st(r.errors,w),f.isValid&&d()),h.state.next({...r}))},t0=(w,I={})=>{const x=w||s,B=Pr(x),M=w&&!en(w)?B:s;if(I.keepDefaultValues||(s=x),!I.keepValues){if(I.keepDirtyValues||p)for(const N of l.mount)j(r.dirtyFields,N)?me(M,N,j(o,N)):V(N,j(M,N));else{if(Hv&&Be(w))for(const N of l.mount){const q=j(i,N);if(q&&q._f){const Ne=Array.isArray(q._f.refs)?q._f.refs[0]:q._f.ref;if(uf(Ne)){const $e=Ne.closest("form");if($e){$e.reset();break}}}}i={}}o=t.shouldUnregister?I.keepDefaultValues?Pr(s):{}:Pr(M),h.array.next({values:{...M}}),h.values.next({values:{...M}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!f.isValid||!!I.keepIsValid,a.watch=!!t.shouldUnregister,h.state.next({submitCount:I.keepSubmitCount?r.submitCount:0,isDirty:I.keepDirty?r.isDirty:!!(I.keepDefaultValues&&!Mi(w,s)),isSubmitted:I.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:I.keepDirtyValues?r.dirtyFields:I.keepDefaultValues&&w?rp(s,w):{},touchedFields:I.keepTouched?r.touchedFields:{},errors:I.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},n0=(w,I)=>t0(Wr(w)?w(o):w,I);return{control:{register:xr,unregister:dn,getFieldState:Fe,handleSubmit:e0,setError:Pn,_executeSchema:H,_getWatch:Se,_getDirty:ee,_updateValid:d,_removeUnmounted:ne,_updateFieldArray:T,_getFieldArray:ht,_reset:t0,_resetDefaultValues:()=>Wr(n.defaultValues)&&n.defaultValues().then(w=>{n0(w,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:w=>{r={...r,...w}},_subjects:h,_proxyFormState:f,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(w){a=w},get _defaultValues(){return s},get _names(){return l},set _names(w){l=w},get _formState(){return r},set _formState(w){r=w},get _options(){return n},set _options(w){n={...n,...w}}},trigger:X,register:xr,handleSubmit:e0,watch:Mo,setValue:V,getValues:Ie,reset:n0,resetField:yk,clearErrors:ps,unregister:dn,setError:Pn,setFocus:(w,I={})=>{const x=j(i,w),B=x&&x._f;if(B){const M=B.refs?B.refs[0]:B.ref;M.focus&&(M.focus(),I.shouldSelect&&M.select())}},getFieldState:Fe}}function m5(t={}){const e=rn.useRef(),n=rn.useRef(),[r,i]=rn.useState({isDirty:!1,isValidating:!1,isLoading:Wr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Wr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...p5(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,r5({subject:s._subjects.state,next:o=>{n5(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),rn.useEffect(()=>{t.values&&!Mi(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),rn.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=t5(r,s),e.current}function hs(t){this._maxSize=t,this.clear()}hs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};hs.prototype.get=function(t){return this._values[t]};hs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var g5=/[^.^\]^[]+|(?=\[\]|\.\.)/g,ik=/^\d+$/,y5=/^\d/,v5=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,_5=/^\s*(['"]?)(.*?)(\1)\s*$/,Gv=512,W1=new hs(Gv),q1=new hs(Gv),K1=new hs(Gv),Bi={Cache:hs,split:ng,normalizePath:sp,setter:function(t){var e=sp(t);return q1.get(t)||q1.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=sp(t);return K1.get(t)||K1.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Qv(n)||ik.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){w5(Array.isArray(t)?t:ng(t),e,n)}};function sp(t){return W1.get(t)||W1.set(t,ng(t).map(function(e){return e.replace(_5,"$2")}))}function ng(t){return t.match(g5)||[""]}function w5(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(S5(i)&&(i='"'+i+'"'),a=Qv(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Qv(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function E5(t){return t.match(y5)&&!t.match(ik)}function T5(t){return v5.test(t)}function S5(t){return!Qv(t)&&(E5(t)||T5(t))}const I5=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Uh=t=>t.match(I5)||[],zh=t=>t[0].toUpperCase()+t.slice(1),Yv=(t,e)=>Uh(t).join(e).toLowerCase(),sk=t=>Uh(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),x5=t=>zh(sk(t)),b5=t=>Yv(t,"_"),A5=t=>Yv(t,"-"),k5=t=>zh(Yv(t," ")),P5=t=>Uh(t).map(zh).join(" ");var op={words:Uh,upperFirst:zh,camelCase:sk,pascalCase:x5,snakeCase:b5,kebabCase:A5,sentenceCase:k5,titleCase:P5},Xv={exports:{}};Xv.exports=function(t){return ok(C5(t),t)};Xv.exports.array=ok;function ok(t,e){var n=t.length,r=new Array(n),i={},s=n,o=R5(e),a=N5(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,f){if(f.has(u)){var h;try{h=", node was:"+JSON.stringify(u)}catch{h=""}throw new Error("Cyclic dependency"+h)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var p=o.get(u)||new Set;if(p=Array.from(p),c=p.length){f.add(u);do{var y=p[--c];l(y,a.get(y),f)}while(c);f.delete(u)}r[--n]=u}}}function C5(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function R5(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function N5(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var O5=Xv.exports;const D5=ag(O5),L5=Object.prototype.toString,V5=Error.prototype.toString,M5=RegExp.prototype.toString,F5=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",$5=/^Symbol\((.*)\)(.*)$/;function j5(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function G1(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return j5(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return F5.call(t).replace($5,"Symbol($1)");const r=L5.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+V5.call(t)+"]":r==="RegExp"?M5.call(t):null}function ro(t,e){let n=G1(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=G1(this[r],e);return s!==null?s:i},2)}function ak(t){return t==null?[]:[].concat(t)}let U5=/\$\{\s*(\w+)\s*\}/g;class Bt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(U5,(i,s)=>ro(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],ak(e).forEach(s=>{Bt.isError(s)?(this.errors.push(...s.errors),this.inner=this.inner.concat(s.inner.length?s.inner:s)):this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,Bt)}}let tr={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${ro(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${ro(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${ro(n,!0)}\``+i}},mn={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Cr={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},rg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},ig={isValue:"${path} field must be ${value}"},sg={noUnknown:"${path} field has unspecified keys: ${unknown}"},z5={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:tr,string:mn,number:Cr,date:rg,object:sg,array:z5,boolean:ig});const Jv=t=>t&&t.__isYupSchema__;class df{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new df(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Jv(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Ou={context:"$",value:"."};class ds{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ou.context,this.isValue=this.key[0]===Ou.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ou.context:this.isValue?Ou.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Bi.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}ds.prototype.__isYupRef=!0;const Sn=t=>t==null;function _s(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:f,message:h,skipAbsent:p}=t;let{parent:y,context:v,abortEarly:E=o.spec.abortEarly}=i;function m(O){return ds.isRef(O)?O.getValue(n,y,v):O}function d(O={}){const ae=Object.assign({value:n,originalValue:s,label:o.spec.label,path:O.path||r,spec:o.spec},f,O.params);for(const ee of Object.keys(ae))ae[ee]=m(ae[ee]);const ne=new Bt(Bt.formatError(O.message||h,ae),n,ae.path,O.type||u);return ne.params=ae,ne}const g=E?a:l;let T={path:r,parent:y,type:u,from:i.from,createError:d,resolve:m,options:i,originalValue:s,schema:o};const S=O=>{Bt.isError(O)?g(O):O?l(null):g(d())},k=O=>{Bt.isError(O)?g(O):a(O)},R=p&&Sn(n);if(!i.sync){try{Promise.resolve(R?!0:c.call(T,n,T)).then(S,k)}catch(O){k(O)}return}let D;try{var H;if(D=R?!0:c.call(T,n,T),typeof((H=D)==null?void 0:H.then)=="function")throw new Error(`Validation test of type: "${T.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(O){k(O);return}S(D)}return e.OPTIONS=t,e}function B5(t,e,n,r=n){let i,s,o;return e?(Bi.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let f=t.type==="tuple",h=u?parseInt(c,10):0;if(t.innerType||f){if(f&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&h>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[h],t=f?t.spec.types[h]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class pf extends Set{describe(){const e=[];for(const n of this.values())e.push(ds.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new pf(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Us(t,e=new Map){if(Jv(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=Us(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,Us(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(Us(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=Us(i,e)}else throw Error(`Unable to clone ${t}`);return n}class fn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new pf,this._blacklist=new pf,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(tr.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Us(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&Sn(s))return s;let o=ro(e),a=ro(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},f=v=>{i||(i=!0,r(v,o))},h=s.length,p=[];if(!h)return f([]);let y={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const E=s[v];E(y,c,function(d){d&&(p=p.concat(d)),--h<=0&&f(p)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(f,h,p)=>this.resolve(c)._validate(u,c,h,p)}validate(e,n){let r=this.resolve(Object.assign({},n,{value:e}));return new Promise((i,s)=>r._validate(e,n,(o,a)=>{Bt.isError(o)&&(o.value=a),s(o)},(o,a)=>{o.length?s(new Bt(o,a)):i(a)}))}validateSync(e,n){let r=this.resolve(Object.assign({},n,{value:e})),i;return r._validate(e,Object.assign({},n,{sync:!0}),(s,o)=>{throw Bt.isError(s)&&(s.value=o),s},(s,o)=>{if(s.length)throw new Bt(s,e);i=o}),i}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(Bt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(Bt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):Us(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=_s({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=_s({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=tr.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=tr.notNull){return this.nullability(!1,e)}required(e=tr.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=tr.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=_s(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=ak(e).map(s=>new ds(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new df(i,n):df.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=_s({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=tr.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=_s({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=tr.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=_s({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(f=>f.name===l.name)===u)}}}fn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])fn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=B5(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])fn.prototype[t]=fn.prototype.oneOf;for(const t of["not","nope"])fn.prototype[t]=fn.prototype.notOneOf;function lk(){return new uk}class uk extends fn{constructor(){super({type:"boolean",check(e){return e instanceof Boolean&&(e=e.valueOf()),typeof e=="boolean"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(r.spec.coerce&&!r.isType(e)){if(/^(true|1)$/i.test(String(e)))return!0;if(/^(false|0)$/i.test(String(e)))return!1}return e})})}isTrue(e=ig.isValue){return this.test({message:e,name:"is-value",exclusive:!0,params:{value:"true"},test(n){return Sn(n)||n===!0}})}isFalse(e=ig.isValue){return this.test({message:e,name:"is-value",exclusive:!0,params:{value:"false"},test(n){return Sn(n)||n===!1}})}default(e){return super.default(e)}defined(e){return super.defined(e)}optional(){return super.optional()}required(e){return super.required(e)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(e){return super.nonNullable(e)}strip(e){return super.strip(e)}}lk.prototype=uk.prototype;let H5=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,W5=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,q5=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,K5=t=>Sn(t)||t===t.trim(),G5={}.toString();function og(){return new ck}class ck extends fn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===G5?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||tr.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=mn.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=mn.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=mn.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||mn.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=mn.email){return this.matches(H5,{name:"email",message:e,excludeEmptyString:!0})}url(e=mn.url){return this.matches(W5,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=mn.uuid){return this.matches(q5,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=mn.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:K5})}lowercase(e=mn.lowercase){return this.transform(n=>Sn(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Sn(n)||n===n.toLowerCase()})}uppercase(e=mn.uppercase){return this.transform(n=>Sn(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Sn(n)||n===n.toUpperCase()})}}og.prototype=ck.prototype;let Q5=t=>t!=+t;function fk(){return new hk}class hk extends fn{constructor(){super({type:"number",check(e){return e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&!Q5(e)}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce)return e;let i=e;if(typeof i=="string"){if(i=i.replace(/\s/g,""),i==="")return NaN;i=+i}return r.isType(i)||i===null?i:parseFloat(i)})})}min(e,n=Cr.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r>=this.resolve(e)}})}max(e,n=Cr.max){return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(r){return r<=this.resolve(e)}})}lessThan(e,n=Cr.lessThan){return this.test({message:n,name:"max",exclusive:!0,params:{less:e},skipAbsent:!0,test(r){return r<this.resolve(e)}})}moreThan(e,n=Cr.moreThan){return this.test({message:n,name:"min",exclusive:!0,params:{more:e},skipAbsent:!0,test(r){return r>this.resolve(e)}})}positive(e=Cr.positive){return this.moreThan(0,e)}negative(e=Cr.negative){return this.lessThan(0,e)}integer(e=Cr.integer){return this.test({name:"integer",message:e,skipAbsent:!0,test:n=>Number.isInteger(n)})}truncate(){return this.transform(e=>Sn(e)?e:e|0)}round(e){var n;let r=["ceil","floor","round","trunc"];if(e=((n=e)==null?void 0:n.toLowerCase())||"round",e==="trunc")return this.truncate();if(r.indexOf(e.toLowerCase())===-1)throw new TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(i=>Sn(i)?i:Math[e](i))}}fk.prototype=hk.prototype;var Y5=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function X5(t){var e=[1,4,5,6,7,10,11],n=0,r,i;if(i=Y5.exec(t)){for(var s=0,o;o=e[s];++s)i[o]=+i[o]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(t):NaN;return r}let J5=new Date(""),Z5=t=>Object.prototype.toString.call(t)==="[object Date]";class Bh extends fn{constructor(){super({type:"date",check(e){return Z5(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=X5(e),isNaN(e)?Bh.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(ds.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=rg.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=rg.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Bh.INVALID_DATE=J5;Bh.prototype;function e6(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Bi.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),ds.isRef(a)&&a.isSibling?s(a.path,o):Jv(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return D5.array(Array.from(r),n).reverse()}function Q1(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function dk(t){return(e,n)=>Q1(t,e)-Q1(t,n)}const t6=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function rc(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=rc(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=rc(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(rc)}):"optional"in t?t.optional():t}const n6=(t,e)=>{const n=[...Bi.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Bi.getter(Bi.join(n),!0)(t);return!!(i&&r in i)};let Y1=t=>Object.prototype.toString.call(t)==="[object Object]";function r6(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const i6=dk([]);function pk(t){return new mk(t)}class mk extends fn{constructor(e){super({type:"object",check(n){return Y1(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=i6,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(f=>!this._nodes.includes(f))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const f of a){let h=s[f],p=f in i;if(h){let y,v=i[f];u.path=(n.path?`${n.path}.`:"")+f,h=h.resolve({value:v,context:n.context,parent:l});let E=h instanceof fn?h.spec:void 0,m=E==null?void 0:E.strict;if(E!=null&&E.strip){c=c||f in i;continue}y=!n.__validating||!m?h.cast(i[f],u):i[f],y!==void 0&&(l[f]=y)}else p&&!o&&(l[f]=i[f]);(p!==f in l||l[f]!==i[f])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Y1(u)){i(l,u);return}o=o||u;let c=[];for(let f of this._nodes){let h=this.fields[f];!h||ds.isRef(h)||c.push(h.asNestedTest({options:n,key:f,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,f=>{i(f.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=e6(e,n),r._sortErrors=dk(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return rc(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(e){const n=Object.assign({},this.fields);for(const r of e)delete n[r];return this.setFields(n)}from(e,n,r){let i=Bi.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return n6(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(t6)}noUnknown(e=!0,n=sg.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=r6(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=sg.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(op.camelCase)}snakeCase(){return this.transformKeys(op.snakeCase)}constantCase(){return this.transformKeys(e=>op.snakeCase(e).toUpperCase())}describe(e){let n=super.describe(e);n.fields={};for(const[i,s]of Object.entries(this.fields)){var r;let o=e;(r=o)!=null&&r.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[i]})),n.fields[i]=s.describe(o)}return n}}pk.prototype=mk.prototype;var X1=function(t,e,n){if(t&&"reportValidity"in t){var r=j(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},gk=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?X1(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return X1(o,i,t)})};for(var r in e.fields)n(r)},s6=function(t,e){e.shouldUseNativeValidation&&gk(t,e);var n={};for(var r in t){var i=j(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(a6(e.names||Object.keys(t),r)){var o=Object.assign({},o6(j(n,r)));me(o,"root",s),me(n,r,o)}else me(n,r,s)}return n},o6=function(t){return Array.isArray(t)?t.filter(Boolean):[]},a6=function(t,e){return t.some(function(n){return n.startsWith(e+".")})};function l6(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(t[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(u){return s.shouldUseNativeValidation&&gk({},s),{values:n.raw?r:u,errors:{}}}))}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:s6((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(u,c){if(u[c.path]||(u[c.path]={message:c.message,type:c.type}),l){var f=u[c.path].types,h=f&&f[c.type];u[c.path]=XA(c.path,l,u,c.type,h?[].concat(h,c.message):c.message)}return u},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}}const u6=()=>{var u,c,f,h,p;const t=Tl(),[e]=fs(_r),n=pk().shape({name:og().required(),breed:og().required(),age:fk().required().typeError("Age must be a number"),poty_trained:lk().required()}),{register:r,handleSubmit:i,formState:{errors:s},reset:o}=m5({resolver:l6(n)}),a=$b(jm,"adoption"),l=async y=>{let v="";if(y.image[0]){v=y.image[0].name+Math.random();const m=kv(Cv,v);P3(m,y.image[0])}let E={...y,username:e==null?void 0:e.displayName,uid:e==null?void 0:e.uid,image:y.image[0]?v:""};await w$(a,E),o(),t("/dashboard/adoption-list")};return _.jsxs("form",{onSubmit:i(l),className:"m-5 flex flex-col gap-5 justify-center items-center text-white form p-20",children:[_.jsx("input",{...r("image"),className:"block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",type:"file"}),_.jsx("input",{...r("name"),className:"py-2 px-5 rounded-md text-gray-900",type:"text",placeholder:"Place your cats name",name:"name"}),_.jsx("p",{className:"text-red-800",children:(u=s.name)==null?void 0:u.message}),_.jsx("input",{...r("breed"),className:"py-2 px-5 rounded-md text-gray-900",type:"text",placeholder:"Place your cats breed",name:"breed"}),_.jsx("p",{className:"text-red-800",children:(c=s.breed)==null?void 0:c.message}),_.jsx("input",{...r("age"),className:"py-2 px-5 rounded-md text-gray-900",type:"number",placeholder:"Place your cats age",name:"age"}),_.jsx("p",{className:"text-red-800",children:(f=s.age)==null?void 0:f.message}),_.jsx("input",{...r("contact"),className:"py-2 px-5 rounded-md text-gray-900",type:"number",placeholder:"Place your contact number",name:"contact"}),_.jsx("p",{className:"text-red-800",children:(h=s.age)==null?void 0:h.contact}),_.jsxs("div",{className:"flex justify-start items-center gap-5",children:[_.jsx("label",{className:"font-bold",children:"Poty Trained?"}),_.jsx("label",{htmlFor:"yes",children:"Yes"}),_.jsx("input",{...r("poty_trained"),id:"yes",type:"radio",value:"true",name:"poty_trained"}),_.jsx("label",{htmlFor:"no",children:"No"}),_.jsx("input",{...r("poty_trained"),id:"no",type:"radio",value:"false",name:"poty_trained"})]}),_.jsx("p",{className:"text-red-800",children:(p=s.poty_trained)==null?void 0:p.message}),_.jsx("button",{type:"submit",className:"cta-btn",children:"Make Adoption"})]})},c6=()=>(fs(_r),_.jsx(_.Fragment,{children:_.jsxs("section",{className:"flex flex-col items-center p-8 col-span-3 md:w-4/5 mx-auto min-h-screen md:order-first xs:order-last xs:w-full",children:[_.jsx("h2",{className:"font-bold p-3 md:text-4xl xs:text-2xl",children:"Make A Adoption"}),_.jsx("div",{className:"text-justify",children:_.jsx(u6,{})})]})})),f6=()=>{const[t]=fs(_r),[e,n]=P.useState(null),[r,i]=P.useState(!0),s=$b(jm,"adoption");P.useEffect(()=>{a()},[r]);const o=async(l,u)=>{const c=kv(Cv,u);u&&await R3(c),await _$(jb(jm,"adoption",l)),i(f=>{})},a=async()=>{const l=await v$(s);n(l.docs.map(u=>({...u.data(),id:u.id})))};return _.jsx(_.Fragment,{children:_.jsxs("section",{className:"flex flex-col items-center p-8 col-span-3 md:w-4/5 mx-auto min-h-screen md:order-first xs:order-last xs:w-full",children:[_.jsx("h2",{className:"font-bold md:text-4xl xs:text-2xl",children:"Browse Adoption Post"}),_.jsxs("div",{className:"text-justify grid grid-cols-2 gap-5",children:[e==null?void 0:e.map(l=>_.jsxs("div",{className:"mt-5 py-5 pl-3 pr-8 border-2 border-white flex justify-center items-center flex-col rounded-lg form cursor-pointer",children:[(t==null?void 0:t.uid)===l.uid&&_.jsx("button",{onClick:()=>{o(l.id,l.image)},className:"cta-btn",children:"Adopted"}),l.image&&_.jsx(h6,{image:l.image}),_.jsx("h2",{className:"text-3xl",children:l.name}),_.jsxs("h2",{className:"text-lg",children:["Age: ",l.age]}),_.jsxs("h2",{className:"text-lg",children:["Breed: ",l.breed]}),_.jsxs("h2",{className:"text-lg",children:["Poty Tained: ",l.poty_trained?"Yes":"No"]}),_.jsxs("h2",{className:"text-lg",children:["Contact Here: ",l.contact]})]},l.id)),e!==null&&e.length===0?_.jsx("div",{className:"text-3xl mt-8 font-bold form py-3 px-20 text-red-500 w-full",children:"No adoption available yet"}):""]})]})})};function h6({image:t}){const[e,n]=P.useState("");return P.useEffect(()=>{(async()=>{try{const i=kv(Cv,t),s=await C3(i);n(s)}catch(i){console.error("Error fetching image:",i)}})()},[t]),_.jsx("img",{className:"w-80 h-40 object-cover hover:scale-75 transition delay-75 ease-in",src:e,alt:t})}const d6=()=>{const[t]=fs(_r),e=Tl();return P.useEffect(()=>{t||e("/join")},[t]),_.jsx(_.Fragment,{children:_.jsxs("div",{className:"grid md:grid-cols-4 xs:grid-cols-1",children:[_.jsxs(TS,{children:[_.jsx(Nn,{path:"/",element:_.jsx(YU,{})}),_.jsx(Nn,{path:"/adoption-post",element:_.jsx(c6,{})}),_.jsx(Nn,{path:"/adoption-list",element:_.jsx(f6,{})})]}),_.jsx(QU,{})]})})},p6=()=>{const t=ti(l=>l.global.value.siteName),e=ti(l=>l.global.value.footerText),n=ti(l=>l.global.value.themeColor),r=O2(),i=l=>{r(SN(l.target.value))},s=l=>{r(IN(l.target.value))},o=l=>{r(xN(l.target.value))},a=()=>{r(bN())};return _.jsx(_.Fragment,{children:_.jsxs("section",{className:"flex items-center p-8 flex-col w-4/5 mx-auto min-h-screen",children:[_.jsx("h2",{className:"font-bold p-3 text-4xl",children:"Settings"}),_.jsxs("form",{className:"flex flex-col gap-8 form p-20",children:[_.jsx("input",{onChange:i,value:t,placeholder:"Site Name",className:"focus:ring-2 focus:ring-white focus:outline-none rounded-md py-3 px-5 text-black",type:"text"}),_.jsx("input",{onChange:s,value:e,placeholder:"Footer Title",className:"focus:ring-2 focus:ring-white focus:outline-none rounded-md py-3 px-5 text-black",type:"text"}),_.jsx("input",{onChange:o,value:n,type:"color",className:"w-full h-10 border-gray-300 rounded p-1 cursor-pointer"}),_.jsx("button",{onClick:a,type:"reset",className:"cta-btn",children:"Reset"})]})]})})};function m6(){const t=ti(e=>e.global.value.themeColor);return _.jsx("div",{style:{backgroundColor:t},children:_.jsx("div",{className:"container mx-auto",children:_.jsxs($R,{children:[_.jsx(z3,{}),_.jsxs(TS,{children:[_.jsx(Nn,{path:"/",element:_.jsx(WU,{})}),_.jsx(Nn,{path:"/fact",element:_.jsx(qU,{})}),_.jsx(Nn,{path:"/about",element:_.jsx(KU,{})}),_.jsx(Nn,{path:"/join",element:_.jsx(GU,{})}),_.jsx(Nn,{path:"/dashboard/*",element:_.jsx(d6,{})}),_.jsx(Nn,{path:"/site-settings",element:_.jsx(p6,{})})]}),_.jsx(B3,{})]})})})}function g6(){return _.jsx(C2,{store:kN,children:_.jsx(m6,{})})}ap.createRoot(document.getElementById("root")).render(_.jsx(rn.StrictMode,{children:_.jsx(g6,{})}));
