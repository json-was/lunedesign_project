function JS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ZS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var D={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),eb=Symbol.for("react.portal"),tb=Symbol.for("react.fragment"),nb=Symbol.for("react.strict_mode"),rb=Symbol.for("react.profiler"),ib=Symbol.for("react.provider"),sb=Symbol.for("react.context"),ob=Symbol.for("react.forward_ref"),ab=Symbol.for("react.suspense"),lb=Symbol.for("react.memo"),ub=Symbol.for("react.lazy"),Sp=Symbol.iterator;function cb(e){return e===null||typeof e!="object"?null:(e=Sp&&e[Sp]||e["@@iterator"],typeof e=="function"?e:null)}var Pv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Av=Object.assign,Ov={};function Ji(e,t,n){this.props=e,this.context=t,this.refs=Ov,this.updater=n||Pv}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $v(){}$v.prototype=Ji.prototype;function yf(e,t,n){this.props=e,this.context=t,this.refs=Ov,this.updater=n||Pv}var wf=yf.prototype=new $v;wf.constructor=yf;Av(wf,Ji.prototype);wf.isPureReactComponent=!0;var bp=Array.isArray,Rv=Object.prototype.hasOwnProperty,Sf={current:null},Nv={key:!0,ref:!0,__self:!0,__source:!0};function Lv(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Rv.call(t,r)&&!Nv.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:bo,type:e,key:s,ref:o,props:i,_owner:Sf.current}}function db(e,t){return{$$typeof:bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bf(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function fb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xp=/\/+/g;function Du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fb(""+e.key):t.toString(36)}function va(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case bo:case eb:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Du(o,0):r,bp(i)?(n="",e!=null&&(n=e.replace(xp,"$&/")+"/"),va(i,t,n,"",function(u){return u})):i!=null&&(bf(i)&&(i=db(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bp(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Du(s,l);o+=va(s,t,n,a,i)}else if(a=cb(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Du(s,l++),o+=va(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ho(e,t,n){if(e==null)return e;var r=[],i=0;return va(e,r,"","",function(s){return t.call(n,s,i++)}),r}function hb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},ya={transition:null},pb={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Sf};se.Children={map:Ho,forEach:function(e,t,n){Ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ho(e,function(){t++}),t},toArray:function(e){return Ho(e,function(t){return t})||[]},only:function(e){if(!bf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Ji;se.Fragment=tb;se.Profiler=rb;se.PureComponent=yf;se.StrictMode=nb;se.Suspense=ab;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pb;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Av({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Sf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Rv.call(t,a)&&!Nv.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:bo,type:e.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(e){return e={$$typeof:sb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ib,_context:e},e.Consumer=e};se.createElement=Lv;se.createFactory=function(e){var t=Lv.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:ob,render:e}};se.isValidElement=bf;se.lazy=function(e){return{$$typeof:ub,_payload:{_status:-1,_result:e},_init:hb}};se.memo=function(e,t){return{$$typeof:lb,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=ya.transition;ya.transition={};try{e()}finally{ya.transition=t}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,t){return ft.current.useCallback(e,t)};se.useContext=function(e){return ft.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};se.useEffect=function(e,t){return ft.current.useEffect(e,t)};se.useId=function(){return ft.current.useId()};se.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return ft.current.useMemo(e,t)};se.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};se.useRef=function(e){return ft.current.useRef(e)};se.useState=function(e){return ft.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return ft.current.useTransition()};se.version="18.2.0";(function(e){e.exports=se})(D);const Le=ZS(D.exports),Bc=JS({__proto__:null,default:Le},[D.exports]);var Uc={},xf={exports:{}},Rt={},Dv={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var J=F.length;F.push(H);e:for(;0<J;){var ue=J-1>>>1,j=F[ue];if(0<i(j,H))F[ue]=H,F[J]=j,J=ue;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;e:for(var ue=0,j=F.length,W=j>>>1;ue<W;){var G=2*(ue+1)-1,Z=F[G],k=G+1,ie=F[k];if(0>i(Z,J))k<j&&0>i(ie,Z)?(F[ue]=ie,F[k]=J,ue=k):(F[ue]=Z,F[G]=J,ue=G);else if(k<j&&0>i(ie,J))F[ue]=ie,F[k]=J,ue=k;else break e}}return H}function i(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,f=null,d=3,g=!1,y=!1,m=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=F)r(u),H.sortIndex=H.expirationTime,t(a,H);else break;H=n(u)}}function E(F){if(m=!1,w(F),!y)if(n(a)!==null)y=!0,ye(_);else{var H=n(u);H!==null&&be(E,H.startTime-F)}}function _(F,H){y=!1,m&&(m=!1,h(P),P=-1),g=!0;var J=d;try{for(w(H),f=n(a);f!==null&&(!(f.expirationTime>H)||F&&!A());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,d=f.priorityLevel;var j=ue(f.expirationTime<=H);H=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(a)&&r(a),w(H)}else r(a);f=n(a)}if(f!==null)var W=!0;else{var G=n(u);G!==null&&be(E,G.startTime-H),W=!1}return W}finally{f=null,d=J,g=!1}}var O=!1,N=null,P=-1,Y=5,$=-1;function A(){return!(e.unstable_now()-$<Y)}function M(){if(N!==null){var F=e.unstable_now();$=F;var H=!0;try{H=N(!0,F)}finally{H?X():(O=!1,N=null)}}else O=!1}var X;if(typeof p=="function")X=function(){p(M)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,oe=re.port2;re.port1.onmessage=M,X=function(){oe.postMessage(null)}}else X=function(){S(M,0)};function ye(F){N=F,O||(O=!0,X())}function be(F,H){P=S(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,ye(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var J=d;d=H;try{return F()}finally{d=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=d;d=F;try{return H()}finally{d=J}},e.unstable_scheduleCallback=function(F,H,J){var ue=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,F){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=J+j,F={id:c++,callback:H,priorityLevel:F,startTime:J,expirationTime:j,sortIndex:-1},J>ue?(F.sortIndex=J,t(u,F),n(a)===null&&F===n(u)&&(m?(h(P),P=-1):m=!0,be(E,J-ue))):(F.sortIndex=j,t(a,F),y||g||(y=!0,ye(_))),F},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(F){var H=d;return function(){var J=d;d=H;try{return F.apply(this,arguments)}finally{d=J}}}})(Mv);(function(e){e.exports=Mv})(Dv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=D.exports,Ot=Dv.exports;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zv=new Set,Us={};function ti(e,t){zi(e,t),zi(e+"Capture",t)}function zi(e,t){for(Us[e]=t,e=0;e<t.length;e++)zv.add(t[e])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,mb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},_p={};function gb(e){return Vc.call(_p,e)?!0:Vc.call(Ep,e)?!1:mb.test(e)?_p[e]=!0:(Ep[e]=!0,!1)}function vb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function yb(e,t,n,r){if(t===null||typeof t>"u"||vb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function _f(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ef,_f);Je[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ef,_f);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ef,_f);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(yb(t,n,i,r)&&(n=null),r||i===null?gb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zn=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),hi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),jv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),Uv=Symbol.for("react.offscreen"),kp=Symbol.iterator;function us(e){return e===null||typeof e!="object"?null:(e=kp&&e[kp]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,Mu;function ws(e){if(Mu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mu=t&&t[1]||""}return`
`+Mu+e}var Fu=!1;function zu(e,t){if(!e||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ws(e):""}function wb(e){switch(e.tag){case 5:return ws(e.type);case 16:return ws("Lazy");case 13:return ws("Suspense");case 19:return ws("SuspenseList");case 0:case 2:case 15:return e=zu(e.type,!1),e;case 11:return e=zu(e.type.render,!1),e;case 1:return e=zu(e.type,!0),e;default:return""}}function qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pi:return"Fragment";case hi:return"Portal";case Hc:return"Profiler";case Cf:return"StrictMode";case Wc:return"Suspense";case Gc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bv:return(e.displayName||"Context")+".Consumer";case jv:return(e._context.displayName||"Context")+".Provider";case Tf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case If:return t=e.displayName||null,t!==null?t:qc(e.type)||"Memo";case Wn:t=e._payload,e=e._init;try{return qc(e(t))}catch{}}return null}function Sb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(t);case 8:return t===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bb(e){var t=Vv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){e._valueTracker||(e._valueTracker=bb(e))}function Hv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kc(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Cp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wv(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function Yc(e,t){Wv(e,t);var n=yr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qc(e,t.type,yr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qc(e,t,n){(t!=="number"||Da(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ss=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ip(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Ss(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yr(n)}}function Gv(e,t){var n=yr(t.value),r=yr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qo,Kv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xb=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(e){xb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cs[t]=Cs[e]})});function Yv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cs.hasOwnProperty(e)&&Cs[e]?(""+t).trim():t+"px"}function Qv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Eb=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(e,t){if(t){if(Eb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ed(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function Pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nd=null,Ai=null,Oi=null;function Ap(e){if(e=_o(e)){if(typeof nd!="function")throw Error(L(280));var t=e.stateNode;t&&(t=zl(t),nd(e.stateNode,e.type,t))}}function Xv(e){Ai?Oi?Oi.push(e):Oi=[e]:Ai=e}function Jv(){if(Ai){var e=Ai,t=Oi;if(Oi=Ai=null,Ap(e),t)for(e=0;e<t.length;e++)Ap(t[e])}}function Zv(e,t){return e(t)}function ey(){}var ju=!1;function ty(e,t,n){if(ju)return e(t,n);ju=!0;try{return Zv(e,t,n)}finally{ju=!1,(Ai!==null||Oi!==null)&&(ey(),Jv())}}function Hs(e,t){var n=e.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var rd=!1;if($n)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){rd=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{rd=!1}function _b(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ts=!1,Ma=null,Fa=!1,id=null,kb={onError:function(e){Ts=!0,Ma=e}};function Cb(e,t,n,r,i,s,o,l,a){Ts=!1,Ma=null,_b.apply(kb,arguments)}function Tb(e,t,n,r,i,s,o,l,a){if(Cb.apply(this,arguments),Ts){if(Ts){var u=Ma;Ts=!1,Ma=null}else throw Error(L(198));Fa||(Fa=!0,id=u)}}function ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ny(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Op(e){if(ni(e)!==e)throw Error(L(188))}function Ib(e){var t=e.alternate;if(!t){if(t=ni(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Op(i),e;if(s===r)return Op(i),t;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function ry(e){return e=Ib(e),e!==null?iy(e):null}function iy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iy(e);if(t!==null)return t;e=e.sibling}return null}var sy=Ot.unstable_scheduleCallback,$p=Ot.unstable_cancelCallback,Pb=Ot.unstable_shouldYield,Ab=Ot.unstable_requestPaint,Ne=Ot.unstable_now,Ob=Ot.unstable_getCurrentPriorityLevel,Af=Ot.unstable_ImmediatePriority,oy=Ot.unstable_UserBlockingPriority,za=Ot.unstable_NormalPriority,$b=Ot.unstable_LowPriority,ay=Ot.unstable_IdlePriority,Ll=null,hn=null;function Rb(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Db,Nb=Math.log,Lb=Math.LN2;function Db(e){return e>>>=0,e===0?32:31-(Nb(e)/Lb|0)|0}var Ko=64,Yo=4194304;function bs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ja(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=bs(l):(s&=o,s!==0&&(r=bs(s)))}else o=n&~i,o!==0?r=bs(o):s!==0&&(r=bs(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tn(t),i=1<<n,r|=e[n],t&=~i;return r}function Mb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-tn(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=Mb(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function sd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ly(){var e=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),e}function Bu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function zb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Of(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function uy(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cy,$f,dy,fy,hy,od=!1,Qo=[],sr=null,or=null,ar=null,Ws=new Map,Gs=new Map,qn=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ws.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(t.pointerId)}}function ds(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=_o(t),t!==null&&$f(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Bb(e,t,n,r,i){switch(t){case"focusin":return sr=ds(sr,e,t,n,r,i),!0;case"dragenter":return or=ds(or,e,t,n,r,i),!0;case"mouseover":return ar=ds(ar,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ws.set(s,ds(Ws.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Gs.set(s,ds(Gs.get(s)||null,e,t,n,r,i)),!0}return!1}function py(e){var t=$r(e.target);if(t!==null){var n=ni(t);if(n!==null){if(t=n.tag,t===13){if(t=ny(n),t!==null){e.blockedOn=t,hy(e.priority,function(){dy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ad(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);td=r,n.target.dispatchEvent(r),td=null}else return t=_o(n),t!==null&&$f(t),e.blockedOn=n,!1;t.shift()}return!0}function Np(e,t,n){wa(e)&&n.delete(t)}function Ub(){od=!1,sr!==null&&wa(sr)&&(sr=null),or!==null&&wa(or)&&(or=null),ar!==null&&wa(ar)&&(ar=null),Ws.forEach(Np),Gs.forEach(Np)}function fs(e,t){e.blockedOn===t&&(e.blockedOn=null,od||(od=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Ub)))}function qs(e){function t(i){return fs(i,e)}if(0<Qo.length){fs(Qo[0],e);for(var n=1;n<Qo.length;n++){var r=Qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&fs(sr,e),or!==null&&fs(or,e),ar!==null&&fs(ar,e),Ws.forEach(t),Gs.forEach(t),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)py(n),n.blockedOn===null&&qn.shift()}var $i=zn.ReactCurrentBatchConfig,Ba=!0;function Vb(e,t,n,r){var i=me,s=$i.transition;$i.transition=null;try{me=1,Rf(e,t,n,r)}finally{me=i,$i.transition=s}}function Hb(e,t,n,r){var i=me,s=$i.transition;$i.transition=null;try{me=4,Rf(e,t,n,r)}finally{me=i,$i.transition=s}}function Rf(e,t,n,r){if(Ba){var i=ad(e,t,n,r);if(i===null)Xu(e,t,r,Ua,n),Rp(e,r);else if(Bb(i,e,t,n,r))r.stopPropagation();else if(Rp(e,r),t&4&&-1<jb.indexOf(e)){for(;i!==null;){var s=_o(i);if(s!==null&&cy(s),s=ad(e,t,n,r),s===null&&Xu(e,t,r,Ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xu(e,t,r,null,n)}}var Ua=null;function ad(e,t,n,r){if(Ua=null,e=Pf(r),e=$r(e),e!==null)if(t=ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ny(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ua=e,null}function my(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ob()){case Af:return 1;case oy:return 4;case za:case $b:return 16;case ay:return 536870912;default:return 16}default:return 16}}var er=null,Nf=null,Sa=null;function gy(){if(Sa)return Sa;var e,t=Nf,n=t.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Sa=i.slice(e,1<r?1-r:void 0)}function ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xo(){return!0}function Lp(){return!1}function Nt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Lp,this.isPropagationStopped=Lp,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),t}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Nt(Zi),Eo=Oe({},Zi,{view:0,detail:0}),Wb=Nt(Eo),Uu,Vu,hs,Dl=Oe({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hs&&(hs&&e.type==="mousemove"?(Uu=e.screenX-hs.screenX,Vu=e.screenY-hs.screenY):Vu=Uu=0,hs=e),Uu)},movementY:function(e){return"movementY"in e?e.movementY:Vu}}),Dp=Nt(Dl),Gb=Oe({},Dl,{dataTransfer:0}),qb=Nt(Gb),Kb=Oe({},Eo,{relatedTarget:0}),Hu=Nt(Kb),Yb=Oe({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),Qb=Nt(Yb),Xb=Oe({},Zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jb=Nt(Xb),Zb=Oe({},Zi,{data:0}),Mp=Nt(Zb),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nx[e])?!!t[e]:!1}function Df(){return rx}var ix=Oe({},Eo,{key:function(e){if(e.key){var t=ex[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=Nt(ix),ox=Oe({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Nt(ox),ax=Oe({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),lx=Nt(ax),ux=Oe({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Nt(ux),dx=Oe({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=Nt(dx),hx=[9,13,27,32],Mf=$n&&"CompositionEvent"in window,Is=null;$n&&"documentMode"in document&&(Is=document.documentMode);var px=$n&&"TextEvent"in window&&!Is,vy=$n&&(!Mf||Is&&8<Is&&11>=Is),zp=String.fromCharCode(32),jp=!1;function yy(e,t){switch(e){case"keyup":return hx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mi=!1;function mx(e,t){switch(e){case"compositionend":return wy(t);case"keypress":return t.which!==32?null:(jp=!0,zp);case"textInput":return e=t.data,e===zp&&jp?null:e;default:return null}}function gx(e,t){if(mi)return e==="compositionend"||!Mf&&yy(e,t)?(e=gy(),Sa=Nf=er=null,mi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vy&&t.locale!=="ko"?null:t.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vx[e.type]:t==="textarea"}function Sy(e,t,n,r){Xv(r),t=Va(t,"onChange"),0<t.length&&(n=new Lf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ps=null,Ks=null;function yx(e){Oy(e,0)}function Ml(e){var t=yi(e);if(Hv(t))return e}function wx(e,t){if(e==="change")return t}var by=!1;if($n){var Wu;if($n){var Gu="oninput"in document;if(!Gu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Gu=typeof Up.oninput=="function"}Wu=Gu}else Wu=!1;by=Wu&&(!document.documentMode||9<document.documentMode)}function Vp(){Ps&&(Ps.detachEvent("onpropertychange",xy),Ks=Ps=null)}function xy(e){if(e.propertyName==="value"&&Ml(Ks)){var t=[];Sy(t,Ks,e,Pf(e)),ty(yx,t)}}function Sx(e,t,n){e==="focusin"?(Vp(),Ps=t,Ks=n,Ps.attachEvent("onpropertychange",xy)):e==="focusout"&&Vp()}function bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(Ks)}function xx(e,t){if(e==="click")return Ml(t)}function Ex(e,t){if(e==="input"||e==="change")return Ml(t)}function _x(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:_x;function Ys(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(t,i)||!rn(e[i],t[i]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,t){var n=Hp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function Ey(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ey(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _y(){for(var e=window,t=Da();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Da(e.document)}return t}function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kx(e){var t=_y(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ey(n.ownerDocument.documentElement,n)){if(r!==null&&Ff(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Wp(n,s);var o=Wp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cx=$n&&"documentMode"in document&&11>=document.documentMode,gi=null,ld=null,As=null,ud=!1;function Gp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||gi==null||gi!==Da(r)||(r=gi,"selectionStart"in r&&Ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),As&&Ys(As,r)||(As=r,r=Va(ld,"onSelect"),0<r.length&&(t=new Lf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Jo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vi={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},qu={},ky={};$n&&(ky=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Fl(e){if(qu[e])return qu[e];if(!vi[e])return e;var t=vi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ky)return qu[e]=t[n];return e}var Cy=Fl("animationend"),Ty=Fl("animationiteration"),Iy=Fl("animationstart"),Py=Fl("transitionend"),Ay=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){Ay.set(e,t),ti(t,[e])}for(var Ku=0;Ku<qp.length;Ku++){var Yu=qp[Ku],Tx=Yu.toLowerCase(),Ix=Yu[0].toUpperCase()+Yu.slice(1);xr(Tx,"on"+Ix)}xr(Cy,"onAnimationEnd");xr(Ty,"onAnimationIteration");xr(Iy,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Py,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));function Kp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Tb(r,t,void 0,e),e.currentTarget=null}function Oy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Kp(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Kp(i,l,u),s=a}}}if(Fa)throw e=id,Fa=!1,id=null,e}function xe(e,t){var n=t[pd];n===void 0&&(n=t[pd]=new Set);var r=e+"__bubble";n.has(r)||($y(t,e,2,!1),n.add(r))}function Qu(e,t,n){var r=0;t&&(r|=4),$y(n,e,r,t)}var Zo="_reactListening"+Math.random().toString(36).slice(2);function Qs(e){if(!e[Zo]){e[Zo]=!0,zv.forEach(function(n){n!=="selectionchange"&&(Px.has(n)||Qu(n,!1,e),Qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zo]||(t[Zo]=!0,Qu("selectionchange",!1,t))}}function $y(e,t,n,r){switch(my(t)){case 1:var i=Vb;break;case 4:i=Hb;break;default:i=Rf}n=i.bind(null,t,n,e),i=void 0,!rd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xu(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ty(function(){var u=s,c=Pf(n),f=[];e:{var d=Ay.get(e);if(d!==void 0){var g=Lf,y=e;switch(e){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":g=sx;break;case"focusin":y="focus",g=Hu;break;case"focusout":y="blur",g=Hu;break;case"beforeblur":case"afterblur":g=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lx;break;case Cy:case Ty:case Iy:g=Qb;break;case Py:g=cx;break;case"scroll":g=Wb;break;case"wheel":g=fx;break;case"copy":case"cut":case"paste":g=Jb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fp}var m=(t&4)!==0,S=!m&&e==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,w;p!==null;){w=p;var E=w.stateNode;if(w.tag===5&&E!==null&&(w=E,h!==null&&(E=Hs(p,h),E!=null&&m.push(Xs(p,E,w)))),S)break;p=p.return}0<m.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:m}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==td&&(y=n.relatedTarget||n.fromElement)&&($r(y)||y[Rn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?$r(y):null,y!==null&&(S=ni(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(m=Dp,E="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=Fp,E="onPointerLeave",h="onPointerEnter",p="pointer"),S=g==null?d:yi(g),w=y==null?d:yi(y),d=new m(E,p+"leave",g,n,c),d.target=S,d.relatedTarget=w,E=null,$r(c)===u&&(m=new m(h,p+"enter",y,n,c),m.target=w,m.relatedTarget=S,E=m),S=E,g&&y)t:{for(m=g,h=y,p=0,w=m;w;w=oi(w))p++;for(w=0,E=h;E;E=oi(E))w++;for(;0<p-w;)m=oi(m),p--;for(;0<w-p;)h=oi(h),w--;for(;p--;){if(m===h||h!==null&&m===h.alternate)break t;m=oi(m),h=oi(h)}m=null}else m=null;g!==null&&Yp(f,d,g,m,!1),y!==null&&S!==null&&Yp(f,S,y,m,!0)}}e:{if(d=u?yi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var _=wx;else if(Bp(d))if(by)_=Ex;else{_=bx;var O=Sx}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=xx);if(_&&(_=_(e,u))){Sy(f,_,n,c);break e}O&&O(e,d,u),e==="focusout"&&(O=d._wrapperState)&&O.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(O=u?yi(u):window,e){case"focusin":(Bp(O)||O.contentEditable==="true")&&(gi=O,ld=u,As=null);break;case"focusout":As=ld=gi=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,Gp(f,n,c);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Gp(f,n,c)}var N;if(Mf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else mi?yy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(vy&&n.locale!=="ko"&&(mi||P!=="onCompositionStart"?P==="onCompositionEnd"&&mi&&(N=gy()):(er=c,Nf="value"in er?er.value:er.textContent,mi=!0)),O=Va(u,P),0<O.length&&(P=new Mp(P,e,null,n,c),f.push({event:P,listeners:O}),N?P.data=N:(N=wy(n),N!==null&&(P.data=N)))),(N=px?mx(e,n):gx(e,n))&&(u=Va(u,"onBeforeInput"),0<u.length&&(c=new Mp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}Oy(f,t)})}function Xs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Hs(e,n),s!=null&&r.unshift(Xs(e,s,i)),s=Hs(e,t),s!=null&&r.push(Xs(e,s,i))),e=e.return}return r}function oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Hs(n,s),a!=null&&o.unshift(Xs(n,a,l))):i||(a=Hs(n,s),a!=null&&o.push(Xs(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ax=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Qp(e){return(typeof e=="string"?e:""+e).replace(Ax,`
`).replace(Ox,"")}function ea(e,t,n){if(t=Qp(t),Qp(e)!==t&&n)throw Error(L(425))}function Ha(){}var cd=null,dd=null;function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,Rx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(e){return Xp.resolve(null).then(e).catch(Nx)}:hd;function Nx(e){setTimeout(function(){throw e})}function Ju(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),qs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);qs(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var es=Math.random().toString(36).slice(2),dn="__reactFiber$"+es,Js="__reactProps$"+es,Rn="__reactContainer$"+es,pd="__reactEvents$"+es,Lx="__reactListeners$"+es,Dx="__reactHandles$"+es;function $r(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rn]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jp(e);e!==null;){if(n=e[dn])return n;e=Jp(e)}return t}e=n,n=e.parentNode}return null}function _o(e){return e=e[dn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function zl(e){return e[Js]||null}var md=[],wi=-1;function Er(e){return{current:e}}function Ee(e){0>wi||(e.current=md[wi],md[wi]=null,wi--)}function Se(e,t){wi++,md[wi]=e.current,e.current=t}var wr={},it=Er(wr),vt=Er(!1),Br=wr;function ji(e,t){var n=e.type.contextTypes;if(!n)return wr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function Wa(){Ee(vt),Ee(it)}function Zp(e,t,n){if(it.current!==wr)throw Error(L(168));Se(it,t),Se(vt,n)}function Ry(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Sb(e)||"Unknown",i));return Oe({},n,r)}function Ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wr,Br=it.current,Se(it,e),Se(vt,vt.current),!0}function em(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Ry(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,Ee(vt),Ee(it),Se(it,e)):Ee(vt),Se(vt,n)}var kn=null,jl=!1,Zu=!1;function Ny(e){kn===null?kn=[e]:kn.push(e)}function Mx(e){jl=!0,Ny(e)}function _r(){if(!Zu&&kn!==null){Zu=!0;var e=0,t=me;try{var n=kn;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kn=null,jl=!1}catch(i){throw kn!==null&&(kn=kn.slice(e+1)),sy(Af,_r),i}finally{me=t,Zu=!1}}return null}var Si=[],bi=0,qa=null,Ka=0,Ft=[],zt=0,Ur=null,Cn=1,Tn="";function Tr(e,t){Si[bi++]=Ka,Si[bi++]=qa,qa=e,Ka=t}function Ly(e,t,n){Ft[zt++]=Cn,Ft[zt++]=Tn,Ft[zt++]=Ur,Ur=e;var r=Cn;e=Tn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Cn=1<<32-tn(t)+i|n<<i|r,Tn=s+e}else Cn=1<<s|n<<i|r,Tn=e}function zf(e){e.return!==null&&(Tr(e,1),Ly(e,1,0))}function jf(e){for(;e===qa;)qa=Si[--bi],Si[bi]=null,Ka=Si[--bi],Si[bi]=null;for(;e===Ur;)Ur=Ft[--zt],Ft[zt]=null,Tn=Ft[--zt],Ft[zt]=null,Cn=Ft[--zt],Ft[zt]=null}var It=null,Tt=null,Te=!1,Xt=null;function Dy(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Tt=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ur!==null?{id:Cn,overflow:Tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Tt=null,!0):!1;default:return!1}}function gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vd(e){if(Te){var t=Tt;if(t){var n=t;if(!tm(e,t)){if(gd(e))throw Error(L(418));t=lr(n.nextSibling);var r=It;t&&tm(e,t)?Dy(r,n):(e.flags=e.flags&-4097|2,Te=!1,It=e)}}else{if(gd(e))throw Error(L(418));e.flags=e.flags&-4097|2,Te=!1,It=e}}}function nm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function ta(e){if(e!==It)return!1;if(!Te)return nm(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fd(e.type,e.memoizedProps)),t&&(t=Tt)){if(gd(e))throw My(),Error(L(418));for(;t;)Dy(e,t),t=lr(t.nextSibling)}if(nm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Tt=lr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=It?lr(e.stateNode.nextSibling):null;return!0}function My(){for(var e=Tt;e;)e=lr(e.nextSibling)}function Bi(){Tt=It=null,Te=!1}function Bf(e){Xt===null?Xt=[e]:Xt.push(e)}var Fx=zn.ReactCurrentBatchConfig;function Yt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ya=Er(null),Qa=null,xi=null,Uf=null;function Vf(){Uf=xi=Qa=null}function Hf(e){var t=Ya.current;Ee(Ya),e._currentValue=t}function yd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ri(e,t){Qa=e,Uf=xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(Uf!==e)if(e={context:e,memoizedValue:t,next:null},xi===null){if(Qa===null)throw Error(L(308));xi=e,Qa.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var Rr=null;function Wf(e){Rr===null?Rr=[e]:Rr.push(e)}function Fy(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wf(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nn(e,r)}function Nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gn=!1;function Gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Wf(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nn(e,n)}function xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Of(e,n)}}function rm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xa(e,t,n,r){var i=e.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,m=l;switch(d=t,g=n,m.tag){case 1:if(y=m.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=Oe({},f,d);break e;case 2:Gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=f):c=c.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Hr|=o,e.lanes=o,e.memoizedState=f}}function im(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var jy=new Fv.Component().refs;function wd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bl={isMounted:function(e){return(e=e._reactInternals)?ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),i=dr(e),s=On(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(nn(t,e,i,r),xa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),i=dr(e),s=On(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(nn(t,e,i,r),xa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=dr(e),i=On(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(nn(t,e,r,n),xa(t,e,r))}};function sm(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ys(n,r)||!Ys(i,s):!0}function By(e,t,n){var r=!1,i=wr,s=t.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=yt(t)?Br:it.current,r=t.contextTypes,s=(r=r!=null)?ji(e,i):wr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function om(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bl.enqueueReplaceState(t,t.state,null)}function Sd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=jy,Gf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=yt(t)?Br:it.current,i.context=ji(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bl.enqueueReplaceState(i,i.state,null),Xa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ps(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===jy&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function na(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function am(e){var t=e._init;return t(e._payload)}function Uy(e){function t(h,p){if(e){var w=h.deletions;w===null?(h.deletions=[p],h.flags|=16):w.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=fr(h,p),h.index=0,h.sibling=null,h}function s(h,p,w){return h.index=w,e?(w=h.alternate,w!==null?(w=w.index,w<p?(h.flags|=2,p):w):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,w,E){return p===null||p.tag!==6?(p=oc(w,h.mode,E),p.return=h,p):(p=i(p,w),p.return=h,p)}function a(h,p,w,E){var _=w.type;return _===pi?c(h,p,w.props.children,E,w.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Wn&&am(_)===p.type)?(E=i(p,w.props),E.ref=ps(h,p,w),E.return=h,E):(E=Ia(w.type,w.key,w.props,null,h.mode,E),E.ref=ps(h,p,w),E.return=h,E)}function u(h,p,w,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=ac(w,h.mode,E),p.return=h,p):(p=i(p,w.children||[]),p.return=h,p)}function c(h,p,w,E,_){return p===null||p.tag!==7?(p=Fr(w,h.mode,E,_),p.return=h,p):(p=i(p,w),p.return=h,p)}function f(h,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=oc(""+p,h.mode,w),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wo:return w=Ia(p.type,p.key,p.props,null,h.mode,w),w.ref=ps(h,null,p),w.return=h,w;case hi:return p=ac(p,h.mode,w),p.return=h,p;case Wn:var E=p._init;return f(h,E(p._payload),w)}if(Ss(p)||us(p))return p=Fr(p,h.mode,w,null),p.return=h,p;na(h,p)}return null}function d(h,p,w,E){var _=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return _!==null?null:l(h,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:return w.key===_?a(h,p,w,E):null;case hi:return w.key===_?u(h,p,w,E):null;case Wn:return _=w._init,d(h,p,_(w._payload),E)}if(Ss(w)||us(w))return _!==null?null:c(h,p,w,E,null);na(h,w)}return null}function g(h,p,w,E,_){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(w)||null,l(p,h,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Wo:return h=h.get(E.key===null?w:E.key)||null,a(p,h,E,_);case hi:return h=h.get(E.key===null?w:E.key)||null,u(p,h,E,_);case Wn:var O=E._init;return g(h,p,w,O(E._payload),_)}if(Ss(E)||us(E))return h=h.get(w)||null,c(p,h,E,_,null);na(p,E)}return null}function y(h,p,w,E){for(var _=null,O=null,N=p,P=p=0,Y=null;N!==null&&P<w.length;P++){N.index>P?(Y=N,N=null):Y=N.sibling;var $=d(h,N,w[P],E);if($===null){N===null&&(N=Y);break}e&&N&&$.alternate===null&&t(h,N),p=s($,p,P),O===null?_=$:O.sibling=$,O=$,N=Y}if(P===w.length)return n(h,N),Te&&Tr(h,P),_;if(N===null){for(;P<w.length;P++)N=f(h,w[P],E),N!==null&&(p=s(N,p,P),O===null?_=N:O.sibling=N,O=N);return Te&&Tr(h,P),_}for(N=r(h,N);P<w.length;P++)Y=g(N,h,P,w[P],E),Y!==null&&(e&&Y.alternate!==null&&N.delete(Y.key===null?P:Y.key),p=s(Y,p,P),O===null?_=Y:O.sibling=Y,O=Y);return e&&N.forEach(function(A){return t(h,A)}),Te&&Tr(h,P),_}function m(h,p,w,E){var _=us(w);if(typeof _!="function")throw Error(L(150));if(w=_.call(w),w==null)throw Error(L(151));for(var O=_=null,N=p,P=p=0,Y=null,$=w.next();N!==null&&!$.done;P++,$=w.next()){N.index>P?(Y=N,N=null):Y=N.sibling;var A=d(h,N,$.value,E);if(A===null){N===null&&(N=Y);break}e&&N&&A.alternate===null&&t(h,N),p=s(A,p,P),O===null?_=A:O.sibling=A,O=A,N=Y}if($.done)return n(h,N),Te&&Tr(h,P),_;if(N===null){for(;!$.done;P++,$=w.next())$=f(h,$.value,E),$!==null&&(p=s($,p,P),O===null?_=$:O.sibling=$,O=$);return Te&&Tr(h,P),_}for(N=r(h,N);!$.done;P++,$=w.next())$=g(N,h,P,$.value,E),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?P:$.key),p=s($,p,P),O===null?_=$:O.sibling=$,O=$);return e&&N.forEach(function(M){return t(h,M)}),Te&&Tr(h,P),_}function S(h,p,w,E){if(typeof w=="object"&&w!==null&&w.type===pi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Wo:e:{for(var _=w.key,O=p;O!==null;){if(O.key===_){if(_=w.type,_===pi){if(O.tag===7){n(h,O.sibling),p=i(O,w.props.children),p.return=h,h=p;break e}}else if(O.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Wn&&am(_)===O.type){n(h,O.sibling),p=i(O,w.props),p.ref=ps(h,O,w),p.return=h,h=p;break e}n(h,O);break}else t(h,O);O=O.sibling}w.type===pi?(p=Fr(w.props.children,h.mode,E,w.key),p.return=h,h=p):(E=Ia(w.type,w.key,w.props,null,h.mode,E),E.ref=ps(h,p,w),E.return=h,h=E)}return o(h);case hi:e:{for(O=w.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(h,p.sibling),p=i(p,w.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ac(w,h.mode,E),p.return=h,h=p}return o(h);case Wn:return O=w._init,S(h,p,O(w._payload),E)}if(Ss(w))return y(h,p,w,E);if(us(w))return m(h,p,w,E);na(h,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,w),p.return=h,h=p):(n(h,p),p=oc(w,h.mode,E),p.return=h,h=p),o(h)):n(h,p)}return S}var Ui=Uy(!0),Vy=Uy(!1),ko={},pn=Er(ko),Zs=Er(ko),eo=Er(ko);function Nr(e){if(e===ko)throw Error(L(174));return e}function qf(e,t){switch(Se(eo,t),Se(Zs,e),Se(pn,ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jc(t,e)}Ee(pn),Se(pn,t)}function Vi(){Ee(pn),Ee(Zs),Ee(eo)}function Hy(e){Nr(eo.current);var t=Nr(pn.current),n=Jc(t,e.type);t!==n&&(Se(Zs,e),Se(pn,n))}function Kf(e){Zs.current===e&&(Ee(pn),Ee(Zs))}var Pe=Er(0);function Ja(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ec=[];function Yf(){for(var e=0;e<ec.length;e++)ec[e]._workInProgressVersionPrimary=null;ec.length=0}var Ea=zn.ReactCurrentDispatcher,tc=zn.ReactCurrentBatchConfig,Vr=0,Ae=null,Fe=null,Be=null,Za=!1,Os=!1,to=0,zx=0;function et(){throw Error(L(321))}function Qf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function Xf(e,t,n,r,i,s){if(Vr=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ea.current=e===null||e.memoizedState===null?Vx:Hx,e=n(r,i),Os){s=0;do{if(Os=!1,to=0,25<=s)throw Error(L(301));s+=1,Be=Fe=null,t.updateQueue=null,Ea.current=Wx,e=n(r,i)}while(Os)}if(Ea.current=el,t=Fe!==null&&Fe.next!==null,Vr=0,Be=Fe=Ae=null,Za=!1,t)throw Error(L(300));return e}function Jf(){var e=to!==0;return to=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=e:Be=Be.next=e,Be}function Gt(){if(Fe===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Be===null?Ae.memoizedState:Be.next;if(t!==null)Be=t,Fe=e;else{if(e===null)throw Error(L(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Be===null?Ae.memoizedState=Be=e:Be=Be.next=e}return Be}function no(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Vr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,Ae.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,rn(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ae.lanes|=s,Hr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);rn(s,t.memoizedState)||(gt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Wy(){}function Gy(e,t){var n=Ae,r=Gt(),i=t(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Zf(Yy.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ro(9,Ky.bind(null,n,r,i,t),void 0,null),He===null)throw Error(L(349));(Vr&30)!==0||qy(n,t,i)}return i}function qy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ky(e,t,n,r){t.value=n,t.getSnapshot=r,Qy(t)&&Xy(e)}function Yy(e,t,n){return n(function(){Qy(t)&&Xy(e)})}function Qy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function Xy(e){var t=Nn(e,1);t!==null&&nn(t,e,1,-1)}function lm(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=Ux.bind(null,Ae,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jy(){return Gt().memoizedState}function _a(e,t,n,r){var i=un();Ae.flags|=e,i.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function Ul(e,t,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Qf(r,o.deps)){i.memoizedState=ro(t,n,s,r);return}}Ae.flags|=e,i.memoizedState=ro(1|t,n,s,r)}function um(e,t){return _a(8390656,8,e,t)}function Zf(e,t){return Ul(2048,8,e,t)}function Zy(e,t){return Ul(4,2,e,t)}function e0(e,t){return Ul(4,4,e,t)}function t0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function n0(e,t,n){return n=n!=null?n.concat([e]):null,Ul(4,4,t0.bind(null,t,e),n)}function eh(){}function r0(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function i0(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function s0(e,t,n){return(Vr&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n):(rn(n,t)||(n=ly(),Ae.lanes|=n,Hr|=n,e.baseState=!0),t)}function jx(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=tc.transition;tc.transition={};try{e(!1),t()}finally{me=n,tc.transition=r}}function o0(){return Gt().memoizedState}function Bx(e,t,n){var r=dr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},a0(e))l0(t,n);else if(n=Fy(e,t,n,r),n!==null){var i=ct();nn(n,e,r,i),u0(n,t,r)}}function Ux(e,t,n){var r=dr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(a0(e))l0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,rn(l,o)){var a=t.interleaved;a===null?(i.next=i,Wf(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Fy(e,t,i,r),n!==null&&(i=ct(),nn(n,e,r,i),u0(n,t,r))}}function a0(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function l0(e,t){Os=Za=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function u0(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Of(e,n)}}var el={readContext:Wt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Vx={readContext:Wt,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:um,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_a(4194308,4,t0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _a(4194308,4,e,t)},useInsertionEffect:function(e,t){return _a(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bx.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:lm,useDebugValue:eh,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=lm(!1),t=e[0];return e=jx.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=un();if(Te){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),He===null)throw Error(L(349));(Vr&30)!==0||qy(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,um(Yy.bind(null,r,s,e),[e]),r.flags|=2048,ro(9,Ky.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=un(),t=He.identifierPrefix;if(Te){var n=Tn,r=Cn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Hx={readContext:Wt,useCallback:r0,useContext:Wt,useEffect:Zf,useImperativeHandle:n0,useInsertionEffect:Zy,useLayoutEffect:e0,useMemo:i0,useReducer:nc,useRef:Jy,useState:function(){return nc(no)},useDebugValue:eh,useDeferredValue:function(e){var t=Gt();return s0(t,Fe.memoizedState,e)},useTransition:function(){var e=nc(no)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Wy,useSyncExternalStore:Gy,useId:o0,unstable_isNewReconciler:!1},Wx={readContext:Wt,useCallback:r0,useContext:Wt,useEffect:Zf,useImperativeHandle:n0,useInsertionEffect:Zy,useLayoutEffect:e0,useMemo:i0,useReducer:rc,useRef:Jy,useState:function(){return rc(no)},useDebugValue:eh,useDeferredValue:function(e){var t=Gt();return Fe===null?t.memoizedState=e:s0(t,Fe.memoizedState,e)},useTransition:function(){var e=rc(no)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Wy,useSyncExternalStore:Gy,useId:o0,unstable_isNewReconciler:!1};function Hi(e,t){try{var n="",r=t;do n+=wb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ic(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gx=typeof WeakMap=="function"?WeakMap:Map;function c0(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,Od=r),bd(e,t)},n}function d0(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function cm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=oE.bind(null,e,t,n),t.then(e,e))}function dm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fm(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var qx=zn.ReactCurrentOwner,gt=!1;function at(e,t,n,r){t.child=e===null?Vy(t,null,n,r):Ui(t,e.child,n,r)}function hm(e,t,n,r,i){n=n.render;var s=t.ref;return Ri(t,i),r=Xf(e,t,n,r,s,i),n=Jf(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(Te&&n&&zf(t),t.flags|=1,at(e,t,r,i),t.child)}function pm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,f0(e,t,s,r,i)):(e=Ia(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ys,n(o,r)&&e.ref===t.ref)return Ln(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function f0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ys(s,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,Ln(e,t,i)}return xd(e,t,n,r,i)}function h0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(_i,xt),xt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(_i,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(_i,xt),xt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Se(_i,xt),xt|=r;return at(e,t,i,n),t.child}function p0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xd(e,t,n,r,i){var s=yt(n)?Br:it.current;return s=ji(t,s),Ri(t,i),n=Xf(e,t,n,r,s,i),r=Jf(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ln(e,t,i)):(Te&&r&&zf(t),t.flags|=1,at(e,t,n,i),t.child)}function mm(e,t,n,r,i){if(yt(n)){var s=!0;Ga(t)}else s=!1;if(Ri(t,i),t.stateNode===null)ka(e,t),By(t,n,r),Sd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=yt(n)?Br:it.current,u=ji(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&om(t,o,r,u),Gn=!1;var d=t.memoizedState;o.state=d,Xa(t,r,o,i),a=t.memoizedState,l!==r||d!==a||vt.current||Gn?(typeof c=="function"&&(wd(t,n,c,r),a=t.memoizedState),(l=Gn||sm(t,n,l,r,d,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,zy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Yt(t.type,l),o.props=u,f=t.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Wt(a):(a=yt(n)?Br:it.current,a=ji(t,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||d!==a)&&om(t,o,r,a),Gn=!1,d=t.memoizedState,o.state=d,Xa(t,r,o,i);var y=t.memoizedState;l!==f||d!==y||vt.current||Gn?(typeof g=="function"&&(wd(t,n,g,r),y=t.memoizedState),(u=Gn||sm(t,n,u,r,d,y,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ed(e,t,n,r,s,i)}function Ed(e,t,n,r,i,s){p0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&em(t,n,!1),Ln(e,t,s);r=t.stateNode,qx.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ui(t,e.child,null,s),t.child=Ui(t,null,l,s)):at(e,t,l,s),t.memoizedState=r.state,i&&em(t,n,!0),t.child}function m0(e){var t=e.stateNode;t.pendingContext?Zp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zp(e,t.context,!1),qf(e,t.containerInfo)}function gm(e,t,n,r,i){return Bi(),Bf(i),t.flags|=256,at(e,t,n,r),t.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function kd(e){return{baseLanes:e,cachePool:null,transitions:null}}function g0(e,t,n){var r=t.pendingProps,i=Pe.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Pe,i&1),e===null)return vd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wl(o,r,0,null),e=Fr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=kd(n),t.memoizedState=_d,e):th(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Kx(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=fr(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Fr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=_d,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function th(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ra(e,t,n,r){return r!==null&&Bf(r),Ui(t,e.child,null,n),e=th(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kx(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ic(Error(L(422))),ra(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Wl({mode:"visible",children:r.children},i,0,null),s=Fr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&Ui(t,e.child,null,o),t.child.memoizedState=kd(o),t.memoizedState=_d,s);if((t.mode&1)===0)return ra(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=ic(s,r,void 0),ra(e,t,o,r)}if(l=(o&e.childLanes)!==0,gt||l){if(r=He,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(e,i),nn(r,e,i,-1))}return ah(),r=ic(Error(L(421))),ra(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=aE.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Tt=lr(i.nextSibling),It=t,Te=!0,Xt=null,e!==null&&(Ft[zt++]=Cn,Ft[zt++]=Tn,Ft[zt++]=Ur,Cn=e.id,Tn=e.overflow,Ur=t),t=th(t,r.children),t.flags|=4096,t)}function vm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yd(e.return,t,n)}function sc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function v0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(at(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,n,t);else if(e.tag===19)vm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ja(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ja(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sc(t,!0,n,null,s);break;case"together":sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ka(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yx(e,t,n){switch(t.tag){case 3:m0(t),Bi();break;case 5:Hy(t);break;case 1:yt(t.type)&&Ga(t);break;case 4:qf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Se(Ya,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?g0(e,t,n):(Se(Pe,Pe.current&1),e=Ln(e,t,n),e!==null?e.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return v0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,h0(e,t,n)}return Ln(e,t,n)}var y0,Cd,w0,S0;y0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};w0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nr(pn.current);var s=null;switch(n){case"input":i=Kc(e,i),r=Kc(e,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Xc(e,i),r=Xc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ha)}Zc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Us.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&xe("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};S0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ms(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qx(e,t,n){var r=t.pendingProps;switch(jf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return yt(t.type)&&Wa(),tt(t),null;case 3:return r=t.stateNode,Vi(),Ee(vt),Ee(it),Yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ta(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xt!==null&&(Nd(Xt),Xt=null))),Cd(e,t),tt(t),null;case 5:Kf(t);var i=Nr(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)w0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return tt(t),null}if(e=Nr(pn.current),ta(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[dn]=t,r[Js]=s,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<xs.length;i++)xe(xs[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Cp(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":Ip(r,s),xe("invalid",r)}Zc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ea(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ea(r.textContent,l,e),i=["children",""+l]):Us.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Go(r),Tp(r,s,!0);break;case"textarea":Go(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ha)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[dn]=t,e[Js]=r,y0(e,t,!1,!1),t.stateNode=e;e:{switch(o=ed(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<xs.length;i++)xe(xs[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Cp(e,r),i=Kc(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Ip(e,r),i=Xc(e,r),xe("invalid",e);break;default:i=r}Zc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Qv(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Kv(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Vs(e,a):typeof a=="number"&&Vs(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Us.hasOwnProperty(s)?a!=null&&s==="onScroll"&&xe("scroll",e):a!=null&&kf(e,s,a,o))}switch(n){case"input":Go(e),Tp(e,r,!1);break;case"textarea":Go(e),Pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Pi(e,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)S0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Nr(eo.current),Nr(pn.current),ta(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(s=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:ea(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ea(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return tt(t),null;case 13:if(Ee(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&Tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)My(),Bi(),t.flags|=98560,s=!1;else if(s=ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(L(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[dn]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),s=!1}else Xt!==null&&(Nd(Xt),Xt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?ze===0&&(ze=3):ah())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return Vi(),Cd(e,t),e===null&&Qs(t.stateNode.containerInfo),tt(t),null;case 10:return Hf(t.type._context),tt(t),null;case 17:return yt(t.type)&&Wa(),tt(t),null;case 19:if(Ee(Pe),s=t.memoizedState,s===null)return tt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ms(s,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Ja(e),o!==null){for(t.flags|=128,ms(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Pe,Pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ne()>Wi&&(t.flags|=128,r=!0,ms(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ja(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return tt(t),null}else 2*Ne()-s.renderingStartTime>Wi&&n!==1073741824&&(t.flags|=128,r=!0,ms(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ne(),t.sibling=null,n=Pe.current,Se(Pe,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return oh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(xt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Xx(e,t){switch(jf(t),t.tag){case 1:return yt(t.type)&&Wa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vi(),Ee(vt),Ee(it),Yf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Kf(t),null;case 13:if(Ee(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Pe),null;case 4:return Vi(),null;case 10:return Hf(t.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var ia=!1,rt=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function Td(e,t,n){try{n()}catch(r){$e(e,t,r)}}var ym=!1;function Zx(e,t){if(cd=Ba,e=_y(),Ff(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:e,selectionRange:n},Ba=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,S=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Yt(t.type,m),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(E){$e(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return y=ym,ym=!1,y}function $s(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Td(t,n,s)}i=i.next}while(i!==r)}}function Vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Id(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function b0(e){var t=e.alternate;t!==null&&(e.alternate=null,b0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[Js],delete t[pd],delete t[Lx],delete t[Dx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function x0(e){return e.tag===5||e.tag===3||e.tag===4}function wm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||x0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ha));else if(r!==4&&(e=e.child,e!==null))for(Pd(e,t,n),e=e.sibling;e!==null;)Pd(e,t,n),e=e.sibling}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}var Ke=null,Qt=!1;function Vn(e,t,n){for(n=n.child;n!==null;)E0(e,t,n),n=n.sibling}function E0(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:rt||Ei(n,t);case 6:var r=Ke,i=Qt;Ke=null,Vn(e,t,n),Ke=r,Qt=i,Ke!==null&&(Qt?(e=Ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Qt?(e=Ke,n=n.stateNode,e.nodeType===8?Ju(e.parentNode,n):e.nodeType===1&&Ju(e,n),qs(e)):Ju(Ke,n.stateNode));break;case 4:r=Ke,i=Qt,Ke=n.stateNode.containerInfo,Qt=!0,Vn(e,t,n),Ke=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Td(n,t,o),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!rt&&(Ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$e(n,t,l)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Vn(e,t,n),rt=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function Sm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jx),t.forEach(function(r){var i=lE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Qt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Qt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Ke===null)throw Error(L(160));E0(s,o,i),Ke=null,Qt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){$e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_0(t,e),t=t.sibling}function _0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),ln(e),r&4){try{$s(3,e,e.return),Vl(3,e)}catch(m){$e(e,e.return,m)}try{$s(5,e,e.return)}catch(m){$e(e,e.return,m)}}break;case 1:Kt(t,e),ln(e),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(Kt(t,e),ln(e),r&512&&n!==null&&Ei(n,n.return),e.flags&32){var i=e.stateNode;try{Vs(i,"")}catch(m){$e(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Wv(i,s),ed(l,o);var u=ed(l,s);for(o=0;o<a.length;o+=2){var c=a[o],f=a[o+1];c==="style"?Qv(i,f):c==="dangerouslySetInnerHTML"?Kv(i,f):c==="children"?Vs(i,f):kf(i,c,f,u)}switch(l){case"input":Yc(i,s);break;case"textarea":Gv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Pi(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Js]=s}catch(m){$e(e,e.return,m)}}break;case 6:if(Kt(t,e),ln(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){$e(e,e.return,m)}}break;case 3:if(Kt(t,e),ln(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qs(t.containerInfo)}catch(m){$e(e,e.return,m)}break;case 4:Kt(t,e),ln(e);break;case 13:Kt(t,e),ln(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ih=Ne())),r&4&&Sm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||c,Kt(t,e),rt=u):Kt(t,e),ln(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(K=e,c=e.child;c!==null;){for(f=K=c;K!==null;){switch(d=K,g=d.child,d.tag){case 0:case 11:case 14:case 15:$s(4,d,d.return);break;case 1:Ei(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(m){$e(r,n,m)}}break;case 5:Ei(d,d.return);break;case 22:if(d.memoizedState!==null){xm(f);continue}}g!==null?(g.return=d,K=g):xm(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Yv("display",o))}catch(m){$e(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){$e(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kt(t,e),ln(e),r&4&&Sm(e);break;case 21:break;default:Kt(t,e),ln(e)}}function ln(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(x0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vs(i,""),r.flags&=-33);var s=wm(e);Ad(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wm(e);Pd(e,l,o);break;default:throw Error(L(161))}}catch(a){$e(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eE(e,t,n){K=e,k0(e)}function k0(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ia;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||rt;l=ia;var u=rt;if(ia=o,(rt=a)&&!u)for(K=i;K!==null;)o=K,a=o.child,o.tag===22&&o.memoizedState!==null?Em(i):a!==null?(a.return=o,K=a):Em(i);for(;s!==null;)K=s,k0(s),s=s.sibling;K=i,ia=l,rt=u}bm(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,K=s):bm(e)}}function bm(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:rt||Vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&im(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}im(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&qs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}rt||t.flags&512&&Id(t)}catch(d){$e(t,t.return,d)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function xm(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Em(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vl(4,t)}catch(a){$e(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){$e(t,i,a)}}var s=t.return;try{Id(t)}catch(a){$e(t,s,a)}break;case 5:var o=t.return;try{Id(t)}catch(a){$e(t,o,a)}}}catch(a){$e(t,t.return,a)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var tE=Math.ceil,tl=zn.ReactCurrentDispatcher,nh=zn.ReactCurrentOwner,Ut=zn.ReactCurrentBatchConfig,le=0,He=null,De=null,Qe=0,xt=0,_i=Er(0),ze=0,io=null,Hr=0,Hl=0,rh=0,Rs=null,mt=null,ih=0,Wi=1/0,_n=null,nl=!1,Od=null,cr=null,sa=!1,tr=null,rl=0,Ns=0,$d=null,Ca=-1,Ta=0;function ct(){return(le&6)!==0?Ne():Ca!==-1?Ca:Ca=Ne()}function dr(e){return(e.mode&1)===0?1:(le&2)!==0&&Qe!==0?Qe&-Qe:Fx.transition!==null?(Ta===0&&(Ta=ly()),Ta):(e=me,e!==0||(e=window.event,e=e===void 0?16:my(e.type)),e)}function nn(e,t,n,r){if(50<Ns)throw Ns=0,$d=null,Error(L(185));xo(e,n,r),((le&2)===0||e!==He)&&(e===He&&((le&2)===0&&(Hl|=n),ze===4&&Kn(e,Qe)),wt(e,r),n===1&&le===0&&(t.mode&1)===0&&(Wi=Ne()+500,jl&&_r()))}function wt(e,t){var n=e.callbackNode;Fb(e,t);var r=ja(e,e===He?Qe:0);if(r===0)n!==null&&$p(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$p(n),t===1)e.tag===0?Mx(_m.bind(null,e)):Ny(_m.bind(null,e)),Rx(function(){(le&6)===0&&_r()}),n=null;else{switch(uy(r)){case 1:n=Af;break;case 4:n=oy;break;case 16:n=za;break;case 536870912:n=ay;break;default:n=za}n=R0(n,C0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function C0(e,t){if(Ca=-1,Ta=0,(le&6)!==0)throw Error(L(327));var n=e.callbackNode;if(Ni()&&e.callbackNode!==n)return null;var r=ja(e,e===He?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=il(e,r);else{t=r;var i=le;le|=2;var s=I0();(He!==e||Qe!==t)&&(_n=null,Wi=Ne()+500,Mr(e,t));do try{iE();break}catch(l){T0(e,l)}while(1);Vf(),tl.current=s,le=i,De!==null?t=0:(He=null,Qe=0,t=ze)}if(t!==0){if(t===2&&(i=sd(e),i!==0&&(r=i,t=Rd(e,i))),t===1)throw n=io,Mr(e,0),Kn(e,r),wt(e,Ne()),n;if(t===6)Kn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!nE(i)&&(t=il(e,r),t===2&&(s=sd(e),s!==0&&(r=s,t=Rd(e,s))),t===1))throw n=io,Mr(e,0),Kn(e,r),wt(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:Ir(e,mt,_n);break;case 3:if(Kn(e,r),(r&130023424)===r&&(t=ih+500-Ne(),10<t)){if(ja(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hd(Ir.bind(null,e,mt,_n),t);break}Ir(e,mt,_n);break;case 4:if(Kn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tE(r/1960))-r,10<r){e.timeoutHandle=hd(Ir.bind(null,e,mt,_n),r);break}Ir(e,mt,_n);break;case 5:Ir(e,mt,_n);break;default:throw Error(L(329))}}}return wt(e,Ne()),e.callbackNode===n?C0.bind(null,e):null}function Rd(e,t){var n=Rs;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=il(e,t),e!==2&&(t=mt,mt=n,t!==null&&Nd(t)),e}function Nd(e){mt===null?mt=e:mt.push.apply(mt,e)}function nE(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t){for(t&=~rh,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),r=1<<n;e[n]=-1,t&=~r}}function _m(e){if((le&6)!==0)throw Error(L(327));Ni();var t=ja(e,0);if((t&1)===0)return wt(e,Ne()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=sd(e);r!==0&&(t=r,n=Rd(e,r))}if(n===1)throw n=io,Mr(e,0),Kn(e,t),wt(e,Ne()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,mt,_n),wt(e,Ne()),null}function sh(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Wi=Ne()+500,jl&&_r())}}function Wr(e){tr!==null&&tr.tag===0&&(le&6)===0&&Ni();var t=le;le|=1;var n=Ut.transition,r=me;try{if(Ut.transition=null,me=1,e)return e()}finally{me=r,Ut.transition=n,le=t,(le&6)===0&&_r()}}function oh(){xt=_i.current,Ee(_i)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$x(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wa();break;case 3:Vi(),Ee(vt),Ee(it),Yf();break;case 5:Kf(r);break;case 4:Vi();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Hf(r.type._context);break;case 22:case 23:oh()}n=n.return}if(He=e,De=e=fr(e.current,null),Qe=xt=t,ze=0,io=null,rh=Hl=Hr=0,mt=Rs=null,Rr!==null){for(t=0;t<Rr.length;t++)if(n=Rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rr=null}return e}function T0(e,t){do{var n=De;try{if(Vf(),Ea.current=el,Za){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Za=!1}if(Vr=0,Be=Fe=Ae=null,Os=!1,to=0,nh.current=null,n===null||n.return===null){ze=1,io=t,De=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=Qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=dm(o);if(g!==null){g.flags&=-257,fm(g,o,l,s,t),g.mode&1&&cm(s,u,t),t=g,a=u;var y=t.updateQueue;if(y===null){var m=new Set;m.add(a),t.updateQueue=m}else y.add(a);break e}else{if((t&1)===0){cm(s,u,t),ah();break e}a=Error(L(426))}}else if(Te&&l.mode&1){var S=dm(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),fm(S,o,l,s,t),Bf(Hi(a,l));break e}}s=a=Hi(a,l),ze!==4&&(ze=2),Rs===null?Rs=[s]:Rs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=c0(s,a,t);rm(s,h);break e;case 1:l=a;var p=s.type,w=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(cr===null||!cr.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=d0(s,l,t);rm(s,E);break e}}s=s.return}while(s!==null)}A0(n)}catch(_){t=_,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function I0(){var e=tl.current;return tl.current=el,e===null?el:e}function ah(){(ze===0||ze===3||ze===2)&&(ze=4),He===null||(Hr&268435455)===0&&(Hl&268435455)===0||Kn(He,Qe)}function il(e,t){var n=le;le|=2;var r=I0();(He!==e||Qe!==t)&&(_n=null,Mr(e,t));do try{rE();break}catch(i){T0(e,i)}while(1);if(Vf(),le=n,tl.current=r,De!==null)throw Error(L(261));return He=null,Qe=0,ze}function rE(){for(;De!==null;)P0(De)}function iE(){for(;De!==null&&!Pb();)P0(De)}function P0(e){var t=$0(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?A0(e):De=t,nh.current=null}function A0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Qx(n,t,xt),n!==null){De=n;return}}else{if(n=Xx(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);ze===0&&(ze=5)}function Ir(e,t,n){var r=me,i=Ut.transition;try{Ut.transition=null,me=1,sE(e,t,n,r)}finally{Ut.transition=i,me=r}return null}function sE(e,t,n,r){do Ni();while(tr!==null);if((le&6)!==0)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(zb(e,s),e===He&&(De=He=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||sa||(sa=!0,R0(za,function(){return Ni(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ut.transition,Ut.transition=null;var o=me;me=1;var l=le;le|=4,nh.current=null,Zx(e,n),_0(n,e),kx(dd),Ba=!!cd,dd=cd=null,e.current=n,eE(n),Ab(),le=l,me=o,Ut.transition=s}else e.current=n;if(sa&&(sa=!1,tr=e,rl=i),s=e.pendingLanes,s===0&&(cr=null),Rb(n.stateNode),wt(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=Od,Od=null,e;return(rl&1)!==0&&e.tag!==0&&Ni(),s=e.pendingLanes,(s&1)!==0?e===$d?Ns++:(Ns=0,$d=e):Ns=0,_r(),null}function Ni(){if(tr!==null){var e=uy(rl),t=Ut.transition,n=me;try{if(Ut.transition=null,me=16>e?16:e,tr===null)var r=!1;else{if(e=tr,tr=null,rl=0,(le&6)!==0)throw Error(L(331));var i=le;for(le|=4,K=e.current;K!==null;){var s=K,o=s.child;if((K.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:$s(8,c,s)}var f=c.child;if(f!==null)f.return=c,K=f;else for(;K!==null;){c=K;var d=c.sibling,g=c.return;if(b0(c),c===u){K=null;break}if(d!==null){d.return=g,K=d;break}K=g}}}var y=s.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var S=m.sibling;m.sibling=null,m=S}while(m!==null)}}K=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,K=h;break e}K=s.return}}var p=e.current;for(K=p;K!==null;){o=K;var w=o.child;if((o.subtreeFlags&2064)!==0&&w!==null)w.return=o,K=w;else e:for(o=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Vl(9,l)}}catch(_){$e(l,l.return,_)}if(l===o){K=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,K=E;break e}K=l.return}}if(le=i,_r(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{me=n,Ut.transition=t}}return!1}function km(e,t,n){t=Hi(n,t),t=c0(e,t,1),e=ur(e,t,1),t=ct(),e!==null&&(xo(e,1,t),wt(e,t))}function $e(e,t,n){if(e.tag===3)km(e,e,n);else for(;t!==null;){if(t.tag===3){km(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Hi(n,e),e=d0(t,e,1),t=ur(t,e,1),e=ct(),t!==null&&(xo(t,1,e),wt(t,e));break}}t=t.return}}function oE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Qe&n)===n&&(ze===4||ze===3&&(Qe&130023424)===Qe&&500>Ne()-ih?Mr(e,0):rh|=n),wt(e,t)}function O0(e,t){t===0&&((e.mode&1)===0?t=1:(t=Yo,Yo<<=1,(Yo&130023424)===0&&(Yo=4194304)));var n=ct();e=Nn(e,t),e!==null&&(xo(e,t,n),wt(e,n))}function aE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),O0(e,n)}function lE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),O0(e,n)}var $0;$0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return gt=!1,Yx(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Te&&(t.flags&1048576)!==0&&Ly(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ka(e,t),e=t.pendingProps;var i=ji(t,it.current);Ri(t,n),i=Xf(null,t,r,e,i,n);var s=Jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(r)?(s=!0,Ga(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gf(t),i.updater=Bl,t.stateNode=i,i._reactInternals=t,Sd(t,r,e,n),t=Ed(null,t,r,!0,s,n)):(t.tag=0,Te&&s&&zf(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ka(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cE(r),e=Yt(r,e),i){case 0:t=xd(null,t,r,e,n);break e;case 1:t=mm(null,t,r,e,n);break e;case 11:t=hm(null,t,r,e,n);break e;case 14:t=pm(null,t,r,Yt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),xd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),mm(e,t,r,i,n);case 3:e:{if(m0(t),e===null)throw Error(L(387));r=t.pendingProps,s=t.memoizedState,i=s.element,zy(e,t),Xa(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Hi(Error(L(423)),t),t=gm(e,t,r,n,i);break e}else if(r!==i){i=Hi(Error(L(424)),t),t=gm(e,t,r,n,i);break e}else for(Tt=lr(t.stateNode.containerInfo.firstChild),It=t,Te=!0,Xt=null,n=Vy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){t=Ln(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Hy(t),e===null&&vd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,fd(r,i)?o=null:s!==null&&fd(r,s)&&(t.flags|=32),p0(e,t),at(e,t,o,n),t.child;case 6:return e===null&&vd(t),null;case 13:return g0(e,t,n);case 4:return qf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ui(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),hm(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Se(Ya,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!vt.current){t=Ln(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=On(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),yd(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yd(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ri(t,n),i=Wt(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Yt(r,t.pendingProps),i=Yt(r.type,i),pm(e,t,r,i,n);case 15:return f0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),ka(e,t),t.tag=1,yt(r)?(e=!0,Ga(t)):e=!1,Ri(t,n),By(t,r,i),Sd(t,r,i,n),Ed(null,t,r,!0,e,n);case 19:return v0(e,t,n);case 22:return h0(e,t,n)}throw Error(L(156,t.tag))};function R0(e,t){return sy(e,t)}function uE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new uE(e,t,n,r)}function lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cE(e){if(typeof e=="function")return lh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tf)return 11;if(e===If)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ia(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")lh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pi:return Fr(n.children,i,s,t);case Cf:o=8,i|=8;break;case Hc:return e=jt(12,n,t,i|2),e.elementType=Hc,e.lanes=s,e;case Wc:return e=jt(13,n,t,i),e.elementType=Wc,e.lanes=s,e;case Gc:return e=jt(19,n,t,i),e.elementType=Gc,e.lanes=s,e;case Uv:return Wl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jv:o=10;break e;case Bv:o=9;break e;case Tf:o=11;break e;case If:o=14;break e;case Wn:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=jt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Fr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=Uv,e.lanes=n,e.stateNode={isHidden:!1},e}function oc(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function ac(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uh(e,t,n,r,i,s,o,l,a){return e=new dE(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),e}function fE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function N0(e){if(!e)return wr;e=e._reactInternals;e:{if(ni(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(yt(n))return Ry(e,n,t)}return t}function L0(e,t,n,r,i,s,o,l,a){return e=uh(n,r,!0,e,i,s,o,l,a),e.context=N0(null),n=e.current,r=ct(),i=dr(n),s=On(r,i),s.callback=t!=null?t:null,ur(n,s,i),e.current.lanes=i,xo(e,i,r),wt(e,r),e}function Gl(e,t,n,r){var i=t.current,s=ct(),o=dr(i);return n=N0(n),t.context===null?t.context=n:t.pendingContext=n,t=On(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,o),e!==null&&(nn(e,i,o,s),xa(e,i,o)),o}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ch(e,t){Cm(e,t),(e=e.alternate)&&Cm(e,t)}function hE(){return null}var D0=typeof reportError=="function"?reportError:function(e){console.error(e)};function dh(e){this._internalRoot=e}ql.prototype.render=dh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Gl(e,t,null,null)};ql.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wr(function(){Gl(null,e,null,null)}),t[Rn]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=fy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<qn.length&&t!==0&&t<qn[n].priority;n++);qn.splice(n,0,e),n===0&&py(e)}};function fh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function pE(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sl(o);s.call(u)}}var o=L0(t,r,e,0,null,!1,!1,"",Tm);return e._reactRootContainer=o,e[Rn]=o.current,Qs(e.nodeType===8?e.parentNode:e),Wr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=sl(a);l.call(u)}}var a=uh(e,0,!1,null,null,!1,!1,"",Tm);return e._reactRootContainer=a,e[Rn]=a.current,Qs(e.nodeType===8?e.parentNode:e),Wr(function(){Gl(t,a,n,r)}),a}function Yl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=sl(o);l.call(a)}}Gl(t,o,e,i)}else o=pE(n,t,e,i,r);return sl(o)}cy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bs(t.pendingLanes);n!==0&&(Of(t,n|1),wt(t,Ne()),(le&6)===0&&(Wi=Ne()+500,_r()))}break;case 13:Wr(function(){var r=Nn(e,1);if(r!==null){var i=ct();nn(r,e,1,i)}}),ch(e,1)}};$f=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var n=ct();nn(t,e,134217728,n)}ch(e,134217728)}};dy=function(e){if(e.tag===13){var t=dr(e),n=Nn(e,t);if(n!==null){var r=ct();nn(n,e,t,r)}ch(e,t)}};fy=function(){return me};hy=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};nd=function(e,t,n){switch(t){case"input":if(Yc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zl(r);if(!i)throw Error(L(90));Hv(r),Yc(r,i)}}}break;case"textarea":Gv(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};Zv=sh;ey=Wr;var mE={usingClientEntryPoint:!1,Events:[_o,yi,zl,Xv,Jv,sh]},gs={findFiberByHostInstance:$r,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gE={bundleType:gs.bundleType,version:gs.version,rendererPackageName:gs.rendererPackageName,rendererConfig:gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ry(e),e===null?null:e.stateNode},findFiberByHostInstance:gs.findFiberByHostInstance||hE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{Ll=oa.inject(gE),hn=oa}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mE;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(t))throw Error(L(200));return fE(e,t,null,n)};Rt.createRoot=function(e,t){if(!fh(e))throw Error(L(299));var n=!1,r="",i=D0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uh(e,1,!1,null,null,n,!1,r,i),e[Rn]=t.current,Qs(e.nodeType===8?e.parentNode:e),new dh(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=ry(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Wr(e)};Rt.hydrate=function(e,t,n){if(!Kl(t))throw Error(L(200));return Yl(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!fh(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=D0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=L0(t,null,e,1,n!=null?n:null,i,!1,s,o),e[Rn]=t.current,Qs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ql(t)};Rt.render=function(e,t,n){if(!Kl(t))throw Error(L(200));return Yl(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(L(40));return e._reactRootContainer?(Wr(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Rt.unstable_batchedUpdates=sh;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Yl(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Rt})(xf);var Im=xf.exports;Uc.createRoot=Im.createRoot,Uc.hydrateRoot=Im.hydrateRoot;var M0={exports:{}},F0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=D.exports;function vE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yE=typeof Object.is=="function"?Object.is:vE,wE=Gi.useState,SE=Gi.useEffect,bE=Gi.useLayoutEffect,xE=Gi.useDebugValue;function EE(e,t){var n=t(),r=wE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return bE(function(){i.value=n,i.getSnapshot=t,lc(i)&&s({inst:i})},[e,n,t]),SE(function(){return lc(i)&&s({inst:i}),e(function(){lc(i)&&s({inst:i})})},[e]),xE(n),n}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yE(e,n)}catch{return!0}}function _E(e,t){return t()}var kE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_E:EE;F0.useSyncExternalStore=Gi.useSyncExternalStore!==void 0?Gi.useSyncExternalStore:kE;(function(e){e.exports=F0})(M0);var z0={exports:{}},j0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ql=D.exports,CE=M0.exports;function TE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var IE=typeof Object.is=="function"?Object.is:TE,PE=CE.useSyncExternalStore,AE=Ql.useRef,OE=Ql.useEffect,$E=Ql.useMemo,RE=Ql.useDebugValue;j0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=AE(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=$E(function(){function a(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var y=o.value;if(i(y,g))return f=y}return f=g}if(y=f,IE(c,g))return y;var m=r(g);return i!==void 0&&i(y,m)?y:(c=g,f=m)}var u=!1,c,f,d=n===void 0?null:n;return[function(){return a(t())},d===null?void 0:function(){return a(d())}]},[t,n,r,i]);var l=PE(e,s[0],s[1]);return OE(function(){o.hasValue=!0,o.value=l},[l]),RE(l),l};(function(e){e.exports=j0})(z0);function NE(e){e()}let B0=NE;const LE=e=>B0=e,DE=()=>B0,Sr=D.exports.createContext(null);function U0(){return D.exports.useContext(Sr)}const ME=()=>{throw new Error("uSES not initialized!")};let V0=ME;const FE=e=>{V0=e},zE=(e,t)=>e===t;function jE(e=Sr){const t=e===Sr?U0:()=>D.exports.useContext(e);return function(r,i=zE){const{store:s,subscription:o,getServerState:l}=t(),a=V0(o.addNestedSub,s.getState,l||s.getState,r,i);return D.exports.useDebugValue(a),a}}const wn=jE();var H0={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,hh=Ge?Symbol.for("react.element"):60103,ph=Ge?Symbol.for("react.portal"):60106,Xl=Ge?Symbol.for("react.fragment"):60107,Jl=Ge?Symbol.for("react.strict_mode"):60108,Zl=Ge?Symbol.for("react.profiler"):60114,eu=Ge?Symbol.for("react.provider"):60109,tu=Ge?Symbol.for("react.context"):60110,mh=Ge?Symbol.for("react.async_mode"):60111,nu=Ge?Symbol.for("react.concurrent_mode"):60111,ru=Ge?Symbol.for("react.forward_ref"):60112,iu=Ge?Symbol.for("react.suspense"):60113,BE=Ge?Symbol.for("react.suspense_list"):60120,su=Ge?Symbol.for("react.memo"):60115,ou=Ge?Symbol.for("react.lazy"):60116,UE=Ge?Symbol.for("react.block"):60121,VE=Ge?Symbol.for("react.fundamental"):60117,HE=Ge?Symbol.for("react.responder"):60118,WE=Ge?Symbol.for("react.scope"):60119;function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hh:switch(e=e.type,e){case mh:case nu:case Xl:case Zl:case Jl:case iu:return e;default:switch(e=e&&e.$$typeof,e){case tu:case ru:case ou:case su:case eu:return e;default:return t}}case ph:return t}}}function W0(e){return Lt(e)===nu}ge.AsyncMode=mh;ge.ConcurrentMode=nu;ge.ContextConsumer=tu;ge.ContextProvider=eu;ge.Element=hh;ge.ForwardRef=ru;ge.Fragment=Xl;ge.Lazy=ou;ge.Memo=su;ge.Portal=ph;ge.Profiler=Zl;ge.StrictMode=Jl;ge.Suspense=iu;ge.isAsyncMode=function(e){return W0(e)||Lt(e)===mh};ge.isConcurrentMode=W0;ge.isContextConsumer=function(e){return Lt(e)===tu};ge.isContextProvider=function(e){return Lt(e)===eu};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hh};ge.isForwardRef=function(e){return Lt(e)===ru};ge.isFragment=function(e){return Lt(e)===Xl};ge.isLazy=function(e){return Lt(e)===ou};ge.isMemo=function(e){return Lt(e)===su};ge.isPortal=function(e){return Lt(e)===ph};ge.isProfiler=function(e){return Lt(e)===Zl};ge.isStrictMode=function(e){return Lt(e)===Jl};ge.isSuspense=function(e){return Lt(e)===iu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Xl||e===nu||e===Zl||e===Jl||e===iu||e===BE||typeof e=="object"&&e!==null&&(e.$$typeof===ou||e.$$typeof===su||e.$$typeof===eu||e.$$typeof===tu||e.$$typeof===ru||e.$$typeof===VE||e.$$typeof===HE||e.$$typeof===WE||e.$$typeof===UE)};ge.typeOf=Lt;(function(e){e.exports=ge})(H0);var gh=H0.exports,GE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},G0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vh={};vh[gh.ForwardRef]=KE;vh[gh.Memo]=G0;function Pm(e){return gh.isMemo(e)?G0:vh[e.$$typeof]||GE}var YE=Object.defineProperty,QE=Object.getOwnPropertyNames,Am=Object.getOwnPropertySymbols,XE=Object.getOwnPropertyDescriptor,JE=Object.getPrototypeOf,Om=Object.prototype;function q0(e,t,n){if(typeof t!="string"){if(Om){var r=JE(t);r&&r!==Om&&q0(e,r,n)}var i=QE(t);Am&&(i=i.concat(Am(t)));for(var s=Pm(e),o=Pm(t),l=0;l<i.length;++l){var a=i[l];if(!qE[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var u=XE(t,a);try{YE(e,a,u)}catch{}}}}return e}var ZE=q0,yh={exports:{}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=Symbol.for("react.element"),Sh=Symbol.for("react.portal"),au=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),cu=Symbol.for("react.provider"),du=Symbol.for("react.context"),e_=Symbol.for("react.server_context"),fu=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),mu=Symbol.for("react.memo"),gu=Symbol.for("react.lazy"),t_=Symbol.for("react.offscreen"),K0;K0=Symbol.for("react.module.reference");function qt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wh:switch(e=e.type,e){case au:case uu:case lu:case hu:case pu:return e;default:switch(e=e&&e.$$typeof,e){case e_:case du:case fu:case gu:case mu:case cu:return e;default:return t}}case Sh:return t}}}ve.ContextConsumer=du;ve.ContextProvider=cu;ve.Element=wh;ve.ForwardRef=fu;ve.Fragment=au;ve.Lazy=gu;ve.Memo=mu;ve.Portal=Sh;ve.Profiler=uu;ve.StrictMode=lu;ve.Suspense=hu;ve.SuspenseList=pu;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(e){return qt(e)===du};ve.isContextProvider=function(e){return qt(e)===cu};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wh};ve.isForwardRef=function(e){return qt(e)===fu};ve.isFragment=function(e){return qt(e)===au};ve.isLazy=function(e){return qt(e)===gu};ve.isMemo=function(e){return qt(e)===mu};ve.isPortal=function(e){return qt(e)===Sh};ve.isProfiler=function(e){return qt(e)===uu};ve.isStrictMode=function(e){return qt(e)===lu};ve.isSuspense=function(e){return qt(e)===hu};ve.isSuspenseList=function(e){return qt(e)===pu};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===au||e===uu||e===lu||e===hu||e===pu||e===t_||typeof e=="object"&&e!==null&&(e.$$typeof===gu||e.$$typeof===mu||e.$$typeof===cu||e.$$typeof===du||e.$$typeof===fu||e.$$typeof===K0||e.getModuleId!==void 0)};ve.typeOf=qt;(function(e){e.exports=ve})(yh);function n_(){const e=DE();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const $m={notify(){},get:()=>[]};function r_(e,t){let n,r=$m;function i(f){return a(),r.subscribe(f)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function l(){return Boolean(n)}function a(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=n_())}function u(){n&&(n(),n=void 0,r.clear(),r=$m)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:l,trySubscribe:a,tryUnsubscribe:u,getListeners:()=>r};return c}const i_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s_=i_?D.exports.useLayoutEffect:D.exports.useEffect;var vu={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_=D.exports,a_=Symbol.for("react.element"),l_=Symbol.for("react.fragment"),u_=Object.prototype.hasOwnProperty,c_=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d_={key:!0,ref:!0,__self:!0,__source:!0};function Y0(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)u_.call(t,r)&&!d_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:a_,type:e,key:s,ref:o,props:i,_owner:c_.current}}yu.Fragment=l_;yu.jsx=Y0;yu.jsxs=Y0;(function(e){e.exports=yu})(vu);const Gr=vu.exports.Fragment,v=vu.exports.jsx,z=vu.exports.jsxs;function f_({store:e,context:t,children:n,serverState:r}){const i=D.exports.useMemo(()=>{const l=r_(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),s=D.exports.useMemo(()=>e.getState(),[e]);return s_(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,s]),v((t||Sr).Provider,{value:i,children:n})}function Q0(e=Sr){const t=e===Sr?U0:()=>D.exports.useContext(e);return function(){const{store:r}=t();return r}}const h_=Q0();function p_(e=Sr){const t=e===Sr?h_:Q0(e);return function(){return t().dispatch}}const Sn=p_();FE(z0.exports.useSyncExternalStoreWithSelector);LE(xf.exports.unstable_batchedUpdates);/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ol.apply(this,arguments)}var nr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nr||(nr={}));const Rm="popstate";function m_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ld("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dd(i)}return v_(t,n,null,e)}function g_(){return Math.random().toString(36).substr(2,8)}function Nm(e){return{usr:e.state,key:e.key}}function Ld(e,t,n,r){return n===void 0&&(n=null),ol({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ts(t):t,{state:n,key:t&&t.key||r||g_()})}function Dd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ts(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=nr.Pop,a=null;function u(){l=nr.Pop,a&&a({action:l,location:d.location})}function c(g,y){l=nr.Push;let m=Ld(d.location,g,y);n&&n(m,g);let S=Nm(m),h=d.createHref(m);try{o.pushState(S,"",h)}catch{i.location.assign(h)}s&&a&&a({action:l,location:m})}function f(g,y){l=nr.Replace;let m=Ld(d.location,g,y);n&&n(m,g);let S=Nm(m),h=d.createHref(m);o.replaceState(S,"",h),s&&a&&a({action:l,location:m})}let d={get action(){return l},get location(){return e(i,o)},listen(g){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Rm,u),a=g,()=>{i.removeEventListener(Rm,u),a=null}},createHref(g){return t(i,g)},push:c,replace:f,go(g){return o.go(g)}};return d}var Lm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lm||(Lm={}));function y_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ts(t):t,i=J0(r.pathname||"/",n);if(i==null)return null;let s=X0(e);w_(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=I_(s[l],i);return o}function X0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(je(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=hr([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),X0(i.children,t,a,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:C_(l,i.index),routesMeta:a})}),t}function w_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:T_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S_=/^:\w+$/,b_=3,x_=2,E_=1,__=10,k_=-2,Dm=e=>e==="*";function C_(e,t){let n=e.split("/"),r=n.length;return n.some(Dm)&&(r+=k_),t&&(r+=x_),n.filter(i=>!Dm(i)).reduce((i,s)=>i+(S_.test(s)?b_:s===""?E_:__),r)}function T_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function I_(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=P_({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;s.push({params:r,pathname:hr([i,c.pathname]),pathnameBase:N_(hr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=hr([i,c.pathnameBase]))}return s}function P_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=l[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=O_(l[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function A_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Z0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function O_(e,t){try{return decodeURIComponent(e)}catch(n){return Z0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function J0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Z0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ts(e):e;return{pathname:n?n.startsWith("/")?n:R_(n,t):t,search:L_(r),hash:D_(i)}}function R_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ew(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ts(e):(i=ol({},e),je(!i.pathname||!i.pathname.includes("?"),uc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),uc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),uc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}l=f>=0?t[f]:"/"}let a=$_(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const hr=e=>e.join("/").replace(/\/\/+/g,"/"),N_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,D_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class M_{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function F_(e){return e instanceof M_}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Md.apply(this,arguments)}function z_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const j_=typeof Object.is=="function"?Object.is:z_,{useState:B_,useEffect:U_,useLayoutEffect:V_,useDebugValue:H_}=Bc;function W_(e,t,n){const r=t(),[{inst:i},s]=B_({inst:{value:r,getSnapshot:t}});return V_(()=>{i.value=r,i.getSnapshot=t,cc(i)&&s({inst:i})},[e,r,t]),U_(()=>(cc(i)&&s({inst:i}),e(()=>{cc(i)&&s({inst:i})})),[e]),H_(r),r}function cc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!j_(n,r)}catch{return!0}}function G_(e,t,n){return t()}const q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K_=!q_,Y_=K_?G_:W_;"useSyncExternalStore"in Bc&&(e=>e.useSyncExternalStore)(Bc);const Q_=D.exports.createContext(null),X_=D.exports.createContext(null),bh=D.exports.createContext(null),xh=D.exports.createContext(null),wu=D.exports.createContext(null),ns=D.exports.createContext({outlet:null,matches:[]}),tw=D.exports.createContext(null);function J_(e,t){let{relative:n}=t===void 0?{}:t;rs()||je(!1);let{basename:r,navigator:i}=D.exports.useContext(xh),{hash:s,pathname:o,search:l}=iw(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:hr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function rs(){return D.exports.useContext(wu)!=null}function Su(){return rs()||je(!1),D.exports.useContext(wu).location}function nw(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function jn(){rs()||je(!1);let{basename:e,navigator:t}=D.exports.useContext(xh),{matches:n}=D.exports.useContext(ns),{pathname:r}=Su(),i=JSON.stringify(nw(n).map(l=>l.pathnameBase)),s=D.exports.useRef(!1);return D.exports.useEffect(()=>{s.current=!0}),D.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){t.go(l);return}let u=ew(l,JSON.parse(i),r,a.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:hr([e,u.pathname])),(a.replace?t.replace:t.push)(u,a.state,a)},[e,t,i,r])}function rw(){let{matches:e}=D.exports.useContext(ns),t=e[e.length-1];return t?t.params:{}}function iw(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=D.exports.useContext(ns),{pathname:i}=Su(),s=JSON.stringify(nw(r).map(o=>o.pathnameBase));return D.exports.useMemo(()=>ew(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function Z_(e,t){rs()||je(!1);let n=D.exports.useContext(bh),{matches:r}=D.exports.useContext(ns),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=Su(),a;if(t){var u;let y=typeof t=="string"?ts(t):t;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||je(!1),a=y}else a=l;let c=a.pathname||"/",f=o==="/"?c:c.slice(o.length)||"/",d=y_(e,{pathname:f}),g=rk(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:hr([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:hr([o,y.pathnameBase])})),r,n||void 0);return t?v(wu.Provider,{value:{location:Md({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:nr.Pop},children:g}):g}function ek(){let e=sk(),t=F_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return z(Gr,{children:[v("h2",{children:"Unhandled Thrown Error!"}),v("h3",{style:{fontStyle:"italic"},children:t}),n?v("pre",{style:i,children:n}):null,v("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),z("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",v("code",{style:s,children:"errorElement"})," props on\xA0",v("code",{style:s,children:"<Route>"})]})]})}class tk extends D.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?v(tw.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function nk(e){let{routeContext:t,match:n,children:r}=e,i=D.exports.useContext(Q_);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),v(ns.Provider,{value:t,children:r})}function rk(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||je(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||v(ek,{}):null,c=()=>v(nk,{match:o,routeContext:{outlet:s,matches:t.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?v(tk,{location:n.location,component:u,error:a,children:c()}):c()},null)}var Mm;(function(e){e.UseRevalidator="useRevalidator"})(Mm||(Mm={}));var Fd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Fd||(Fd={}));function ik(e){let t=D.exports.useContext(bh);return t||je(!1),t}function sk(){var e;let t=D.exports.useContext(tw),n=ik(Fd.UseRouteError),r=D.exports.useContext(ns),i=r.matches[r.matches.length-1];return t||(r||je(!1),i.route.id||je(!1),(e=n.errors)==null?void 0:e[i.route.id])}function sw(e){let{to:t,replace:n,state:r,relative:i}=e;rs()||je(!1);let s=D.exports.useContext(bh),o=jn();return D.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function Re(e){je(!1)}function ok(e){let{basename:t="/",children:n=null,location:r,navigationType:i=nr.Pop,navigator:s,static:o=!1}=e;rs()&&je(!1);let l=t.replace(/^\/*/,"/"),a=D.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=ts(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,y=D.exports.useMemo(()=>{let m=J0(u,l);return m==null?null:{pathname:m,search:c,hash:f,state:d,key:g}},[l,u,c,f,d,g]);return y==null?null:v(xh.Provider,{value:a,children:v(wu.Provider,{children:n,value:{location:y,navigationType:i}})})}function Eh(e){let{children:t,location:n}=e,r=D.exports.useContext(X_),i=r&&!t?r.router.routes:zd(t);return Z_(i,n)}var Fm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fm||(Fm={}));new Promise(()=>{});function zd(e,t){t===void 0&&(t=[]);let n=[];return D.exports.Children.forEach(e,(r,i)=>{if(!D.exports.isValidElement(r))return;if(r.type===D.exports.Fragment){n.push.apply(n,zd(r.props.children,t));return}r.type!==Re&&je(!1),!r.props.index||!r.props.children||je(!1);let s=[...t,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=zd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ak(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function lk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function uk(e,t){return e.button===0&&(!t||t==="_self")&&!lk(e)}const ck=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function dk(e){let{basename:t,children:n,window:r}=e,i=D.exports.useRef();i.current==null&&(i.current=m_({window:r,v5Compat:!0}));let s=i.current,[o,l]=D.exports.useState({action:s.action,location:s.location});return D.exports.useLayoutEffect(()=>s.listen(l),[s]),v(ok,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const Bn=D.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=t,f=ak(t,ck),d=J_(u,{relative:i}),g=fk(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function y(m){r&&r(m),m.defaultPrevented||g(m)}return v("a",{...f,href:d,onClick:s?r:y,ref:n,target:a})});var zm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(zm||(zm={}));var jm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jm||(jm={}));function fk(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=jn(),a=Su(),u=iw(e,{relative:o});return D.exports.useCallback(c=>{if(uk(c,n)){c.preventDefault();let f=r!==void 0?r:Dd(a)===Dd(u);l(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,e,s,o])}function hk(e){function t(j,W,G,Z,k){for(var ie=0,B=0,_e=0,ce=0,he,b,C=0,T=0,R,U=R=he=0,I=0,V=0,we=0,de=0,bn=G.length,xn=bn-1,bt,ee="",Ie="",si="",Lu="",Un;I<bn;){if(b=G.charCodeAt(I),I===xn&&B+ce+_e+ie!==0&&(B!==0&&(b=B===47?10:47),ce=_e=ie=0,bn++,xn++),B+ce+_e+ie===0){if(I===xn&&(0<V&&(ee=ee.replace(d,"")),0<ee.trim().length)){switch(b){case 32:case 9:case 59:case 13:case 10:break;default:ee+=G.charAt(I)}b=59}switch(b){case 123:for(ee=ee.trim(),he=ee.charCodeAt(0),R=1,de=++I;I<bn;){switch(b=G.charCodeAt(I)){case 123:R++;break;case 125:R--;break;case 47:switch(b=G.charCodeAt(I+1)){case 42:case 47:e:{for(U=I+1;U<xn;++U)switch(G.charCodeAt(U)){case 47:if(b===42&&G.charCodeAt(U-1)===42&&I+2!==U){I=U+1;break e}break;case 10:if(b===47){I=U+1;break e}}I=U}}break;case 91:b++;case 40:b++;case 34:case 39:for(;I++<xn&&G.charCodeAt(I)!==b;);}if(R===0)break;I++}switch(R=G.substring(de,I),he===0&&(he=(ee=ee.replace(f,"").trim()).charCodeAt(0)),he){case 64:switch(0<V&&(ee=ee.replace(d,"")),b=ee.charCodeAt(1),b){case 100:case 109:case 115:case 45:V=W;break;default:V=ye}if(R=t(W,V,R,b,k+1),de=R.length,0<F&&(V=n(ye,ee,we),Un=l(3,R,V,W,X,M,de,b,k,Z),ee=V.join(""),Un!==void 0&&(de=(R=Un.trim()).length)===0&&(b=0,R="")),0<de)switch(b){case 115:ee=ee.replace(O,o);case 100:case 109:case 45:R=ee+"{"+R+"}";break;case 107:ee=ee.replace(p,"$1 $2"),R=ee+"{"+R+"}",R=oe===1||oe===2&&s("@"+R,3)?"@-webkit-"+R+"@"+R:"@"+R;break;default:R=ee+R,Z===112&&(R=(Ie+=R,""))}else R="";break;default:R=t(W,n(W,ee,we),R,Z,k+1)}si+=R,R=we=V=U=he=0,ee="",b=G.charCodeAt(++I);break;case 125:case 59:if(ee=(0<V?ee.replace(d,""):ee).trim(),1<(de=ee.length))switch(U===0&&(he=ee.charCodeAt(0),he===45||96<he&&123>he)&&(de=(ee=ee.replace(" ",":")).length),0<F&&(Un=l(1,ee,W,j,X,M,Ie.length,Z,k,Z))!==void 0&&(de=(ee=Un.trim()).length)===0&&(ee="\0\0"),he=ee.charCodeAt(0),b=ee.charCodeAt(1),he){case 0:break;case 64:if(b===105||b===99){Lu+=ee+G.charAt(I);break}default:ee.charCodeAt(de-1)!==58&&(Ie+=i(ee,he,b,ee.charCodeAt(2)))}we=V=U=he=0,ee="",b=G.charCodeAt(++I)}}switch(b){case 13:case 10:B===47?B=0:1+he===0&&Z!==107&&0<ee.length&&(V=1,ee+="\0"),0<F*J&&l(0,ee,W,j,X,M,Ie.length,Z,k,Z),M=1,X++;break;case 59:case 125:if(B+ce+_e+ie===0){M++;break}default:switch(M++,bt=G.charAt(I),b){case 9:case 32:if(ce+ie+B===0)switch(C){case 44:case 58:case 9:case 32:bt="";break;default:b!==32&&(bt=" ")}break;case 0:bt="\\0";break;case 12:bt="\\f";break;case 11:bt="\\v";break;case 38:ce+B+ie===0&&(V=we=1,bt="\f"+bt);break;case 108:if(ce+B+ie+re===0&&0<U)switch(I-U){case 2:C===112&&G.charCodeAt(I-3)===58&&(re=C);case 8:T===111&&(re=T)}break;case 58:ce+B+ie===0&&(U=I);break;case 44:B+_e+ce+ie===0&&(V=1,bt+="\r");break;case 34:case 39:B===0&&(ce=ce===b?0:ce===0?b:ce);break;case 91:ce+B+_e===0&&ie++;break;case 93:ce+B+_e===0&&ie--;break;case 41:ce+B+ie===0&&_e--;break;case 40:if(ce+B+ie===0){if(he===0)switch(2*C+3*T){case 533:break;default:he=1}_e++}break;case 64:B+_e+ce+ie+U+R===0&&(R=1);break;case 42:case 47:if(!(0<ce+ie+_e))switch(B){case 0:switch(2*b+3*G.charCodeAt(I+1)){case 235:B=47;break;case 220:de=I,B=42}break;case 42:b===47&&C===42&&de+2!==I&&(G.charCodeAt(de+2)===33&&(Ie+=G.substring(de,I+1)),bt="",B=0)}}B===0&&(ee+=bt)}T=C,C=b,I++}if(de=Ie.length,0<de){if(V=W,0<F&&(Un=l(2,Ie,V,j,X,M,de,Z,k,Z),Un!==void 0&&(Ie=Un).length===0))return Lu+Ie+si;if(Ie=V.join(",")+"{"+Ie+"}",oe*re!==0){switch(oe!==2||s(Ie,2)||(re=0),re){case 111:Ie=Ie.replace(E,":-moz-$1")+Ie;break;case 112:Ie=Ie.replace(w,"::-webkit-input-$1")+Ie.replace(w,"::-moz-$1")+Ie.replace(w,":-ms-input-$1")+Ie}re=0}}return Lu+Ie+si}function n(j,W,G){var Z=W.trim().split(S);W=Z;var k=Z.length,ie=j.length;switch(ie){case 0:case 1:var B=0;for(j=ie===0?"":j[0]+" ";B<k;++B)W[B]=r(j,W[B],G).trim();break;default:var _e=B=0;for(W=[];B<k;++B)for(var ce=0;ce<ie;++ce)W[_e++]=r(j[ce]+" ",Z[B],G).trim()}return W}function r(j,W,G){var Z=W.charCodeAt(0);switch(33>Z&&(Z=(W=W.trim()).charCodeAt(0)),Z){case 38:return W.replace(h,"$1"+j.trim());case 58:return j.trim()+W.replace(h,"$1"+j.trim());default:if(0<1*G&&0<W.indexOf("\f"))return W.replace(h,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+W}function i(j,W,G,Z){var k=j+";",ie=2*W+3*G+4*Z;if(ie===944){j=k.indexOf(":",9)+1;var B=k.substring(j,k.length-1).trim();return B=k.substring(0,j).trim()+B+";",oe===1||oe===2&&s(B,1)?"-webkit-"+B+B:B}if(oe===0||oe===2&&!s(k,1))return k;switch(ie){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(A,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return B=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+B+"-webkit-"+k+"-ms-flex-pack"+B+k;case 1005:return y.test(k)?k.replace(g,":-webkit-")+k.replace(g,":-moz-")+k:k;case 1e3:switch(B=k.substring(13).trim(),W=B.indexOf("-")+1,B.charCodeAt(0)+B.charCodeAt(W)){case 226:B=k.replace(_,"tb");break;case 232:B=k.replace(_,"tb-rl");break;case 220:B=k.replace(_,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+B+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(W=(k=j).length-10,B=(k.charCodeAt(W)===33?k.substring(0,W):k).substring(j.indexOf(":",7)+1).trim(),ie=B.charCodeAt(0)+(B.charCodeAt(7)|0)){case 203:if(111>B.charCodeAt(8))break;case 115:k=k.replace(B,"-webkit-"+B)+";"+k;break;case 207:case 102:k=k.replace(B,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+k.replace(B,"-webkit-"+B)+";"+k.replace(B,"-ms-"+B+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return B=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+B+"-ms-flex-"+B+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(P,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(P,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if($.test(j)===!0)return(B=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?i(j.replace("stretch","fill-available"),W,G,Z).replace(":fill-available",":stretch"):k.replace(B,"-webkit-"+B)+k.replace(B,"-moz-"+B.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,G+Z===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+k}return k}function s(j,W){var G=j.indexOf(W===1?":":"{"),Z=j.substring(0,W!==3?G:10);return G=j.substring(G+1,j.length-1),H(W!==2?Z:Z.replace(Y,"$1"),G,W)}function o(j,W){var G=i(W,W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2));return G!==W+";"?G.replace(N," or ($1)").substring(4):"("+W+")"}function l(j,W,G,Z,k,ie,B,_e,ce,he){for(var b=0,C=W,T;b<F;++b)switch(T=be[b].call(c,j,C,G,Z,k,ie,B,_e,ce,he)){case void 0:case!1:case!0:case null:break;default:C=T}if(C!==W)return C}function a(j){switch(j){case void 0:case null:F=be.length=0;break;default:if(typeof j=="function")be[F++]=j;else if(typeof j=="object")for(var W=0,G=j.length;W<G;++W)a(j[W]);else J=!!j|0}return a}function u(j){return j=j.prefix,j!==void 0&&(H=null,j?typeof j!="function"?oe=1:(oe=2,H=j):oe=0),u}function c(j,W){var G=j;if(33>G.charCodeAt(0)&&(G=G.trim()),ue=G,G=[ue],0<F){var Z=l(-1,W,G,G,X,M,0,0,0,0);Z!==void 0&&typeof Z=="string"&&(W=Z)}var k=t(ye,G,W,0,0);return 0<F&&(Z=l(-2,k,G,G,X,M,k.length,0,0,0),Z!==void 0&&(k=Z)),ue="",re=0,M=X=1,k}var f=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,y=/zoo|gra/,m=/([,: ])(transform)/g,S=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,E=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,P=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,M=1,X=1,re=0,oe=1,ye=[],be=[],F=0,H=null,J=0,ue="";return c.use=a,c.set=u,e!==void 0&&u(e),c}var pk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function mk(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var gk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bm=mk(function(e){return gk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function In(){return(In=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Um=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},jd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!yh.exports.typeOf(e)},al=Object.freeze([]),pr=Object.freeze({});function so(e){return typeof e=="function"}function Vm(e){return e.displayName||e.name||"Component"}function _h(e){return e&&typeof e.styledComponentId=="string"}var qi=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",kh=typeof window<"u"&&"HTMLElement"in window,vk=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function Co(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var yk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Co(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Pa=new Map,ll=new Map,Ls=1,aa=function(e){if(Pa.has(e))return Pa.get(e);for(;ll.has(Ls);)Ls++;var t=Ls++;return Pa.set(e,t),ll.set(t,e),t},wk=function(e){return ll.get(e)},Sk=function(e,t){t>=Ls&&(Ls=t+1),Pa.set(e,t),ll.set(t,e)},bk="style["+qi+'][data-styled-version="5.3.5"]',xk=new RegExp("^"+qi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ek=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},_k=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(xk);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(Sk(u,a),Ek(e,u,l[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},kk=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},ow=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var c=a[u];if(c&&c.nodeType===1&&c.hasAttribute(qi))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(qi,"active"),r.setAttribute("data-styled-version","5.3.5");var o=kk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Ck=function(){function e(n){var r=this.element=ow(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}Co(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Tk=function(){function e(n){var r=this.element=ow(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Ik=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Hm=kh,Pk={isServer:!kh,useCSSOMInjection:!vk},aw=function(){function e(n,r,i){n===void 0&&(n=pr),r===void 0&&(r={}),this.options=In({},Pk,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&kh&&Hm&&(Hm=!1,function(s){for(var o=document.querySelectorAll(bk),l=0,a=o.length;l<a;l++){var u=o[l];u&&u.getAttribute(qi)!=="active"&&(_k(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return aa(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(In({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new Ik(o):s?new Ck(o):new Tk(o),new yk(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(aa(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(aa(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(aa(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=wk(o);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(o);if(a&&u&&a.size){var c=qi+".g"+o+'[id="'+l+'"]',f="";a!==void 0&&a.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),Ak=/(a)(d)/gi,Wm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wm(t%52)+n;return(Wm(t%52)+n).replace(Ak,"$1-$2")}var ki=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lw=function(e){return ki(5381,e)};function Ok(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(so(n)&&!_h(n))return!1}return!0}var $k=lw("5.3.5"),Rk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ok(t),this.componentId=n,this.baseHash=ki($k,n),this.baseStyle=r,aw.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ki(this.rules,t,n,r).join(""),l=Bd(ki(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=ki(this.baseHash,r.hash),f="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")f+=g;else if(g){var y=Ki(g,t,n,r),m=Array.isArray(y)?y.join(""):y;c=ki(c,m+d),f+=m}}if(f){var S=Bd(c>>>0);if(!n.hasNameForId(i,S)){var h=r(f,"."+S,void 0,i);n.insertRules(i,S,h)}s.push(S)}}return s.join(" ")},e}(),Nk=/^\s*\/\/.*$/gm,Lk=[":","[",".","#"];function Dk(e){var t,n,r,i,s=e===void 0?pr:e,o=s.options,l=o===void 0?pr:o,a=s.plugins,u=a===void 0?al:a,c=new hk(l),f=[],d=function(m){function S(h){if(h)try{m(h+"}")}catch{}}return function(h,p,w,E,_,O,N,P,Y,$){switch(h){case 1:if(Y===0&&p.charCodeAt(0)===64)return m(p+";"),"";break;case 2:if(P===0)return p+"/*|*/";break;case 3:switch(P){case 102:case 112:return m(w[0]+p),"";default:return p+($===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(S)}}}(function(m){f.push(m)}),g=function(m,S,h){return S===0&&Lk.indexOf(h[n.length])!==-1||h.match(i)?m:"."+t};function y(m,S,h,p){p===void 0&&(p="&");var w=m.replace(Nk,""),E=S&&h?h+" "+S+" { "+w+" }":w;return t=p,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(h||!S?"":S,E)}return c.use([].concat(u,[function(m,S,h){m===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,g))},d,function(m){if(m===-2){var S=f;return f=[],S}}])),y.hash=u.length?u.reduce(function(m,S){return S.name||Co(15),ki(m,S.name)},5381).toString():"",y}var uw=Le.createContext();uw.Consumer;var cw=Le.createContext(),Mk=(cw.Consumer,new aw),Ud=Dk();function Fk(){return D.exports.useContext(uw)||Mk}function zk(){return D.exports.useContext(cw)||Ud}var jk=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ud);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Co(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ud),this.name+t.hash},e}(),Bk=/([A-Z])/,Uk=/([A-Z])/g,Vk=/^ms-/,Hk=function(e){return"-"+e.toLowerCase()};function Gm(e){return Bk.test(e)?e.replace(Uk,Hk).replace(Vk,"-ms-"):e}var qm=function(e){return e==null||e===!1||e===""};function Ki(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,l=e.length;o<l;o+=1)(i=Ki(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(qm(e))return"";if(_h(e))return"."+e.styledComponentId;if(so(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Ki(a,t,n,r)}var u;return e instanceof jk?n?(e.inject(n,r),e.getName(r)):e:jd(e)?function c(f,d){var g,y,m=[];for(var S in f)f.hasOwnProperty(S)&&!qm(f[S])&&(Array.isArray(f[S])&&f[S].isCss||so(f[S])?m.push(Gm(S)+":",f[S],";"):jd(f[S])?m.push.apply(m,c(f[S],S)):m.push(Gm(S)+": "+(g=S,(y=f[S])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||g in pk?String(y).trim():y+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(e):e.toString()}var Km=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Wk(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return so(e)||jd(e)?Km(Ki(Um(al,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Km(Ki(Um(e,n)))}var Gk=function(e,t,n){return n===void 0&&(n=pr),e.theme!==n.theme&&e.theme||t||n.theme},qk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kk=/(^-|-$)/g;function dc(e){return e.replace(qk,"-").replace(Kk,"")}var Yk=function(e){return Bd(lw(e)>>>0)};function la(e){return typeof e=="string"&&!0}var Vd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Qk=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Xk(e,t,n){var r=e[n];Vd(t)&&Vd(r)?dw(r,t):e[n]=t}function dw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Vd(o))for(var l in o)Qk(l)&&Xk(e,o[l],l)}return e}var fw=Le.createContext();fw.Consumer;var fc={};function hw(e,t,n){var r=_h(e),i=!la(e),s=t.attrs,o=s===void 0?al:s,l=t.componentId,a=l===void 0?function(p,w){var E=typeof p!="string"?"sc":dc(p);fc[E]=(fc[E]||0)+1;var _=E+"-"+Yk("5.3.5"+E+fc[E]);return w?w+"-"+_:_}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return la(p)?"styled."+p:"Styled("+Vm(p)+")"}(e):u,f=t.displayName&&t.componentId?dc(t.displayName)+"-"+t.componentId:t.componentId||a,d=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(p,w,E){return e.shouldForwardProp(p,w,E)&&t.shouldForwardProp(p,w,E)}:e.shouldForwardProp);var y,m=new Rk(n,f,r?e.componentStyle:void 0),S=m.isStatic&&o.length===0,h=function(p,w){return function(E,_,O,N){var P=E.attrs,Y=E.componentStyle,$=E.defaultProps,A=E.foldedComponentIds,M=E.shouldForwardProp,X=E.styledComponentId,re=E.target,oe=function(Z,k,ie){Z===void 0&&(Z=pr);var B=In({},k,{theme:Z}),_e={};return ie.forEach(function(ce){var he,b,C,T=ce;for(he in so(T)&&(T=T(B)),T)B[he]=_e[he]=he==="className"?(b=_e[he],C=T[he],b&&C?b+" "+C:b||C):T[he]}),[B,_e]}(Gk(_,D.exports.useContext(fw),$)||pr,_,P),ye=oe[0],be=oe[1],F=function(Z,k,ie,B){var _e=Fk(),ce=zk(),he=k?Z.generateAndInjectStyles(pr,_e,ce):Z.generateAndInjectStyles(ie,_e,ce);return he}(Y,N,ye),H=O,J=be.$as||_.$as||be.as||_.as||re,ue=la(J),j=be!==_?In({},_,{},be):_,W={};for(var G in j)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?W.as=j[G]:(M?M(G,Bm,J):!ue||Bm(G))&&(W[G]=j[G]));return _.style&&be.style!==_.style&&(W.style=In({},_.style,{},be.style)),W.className=Array.prototype.concat(A,X,F!==X?F:null,_.className,be.className).filter(Boolean).join(" "),W.ref=H,D.exports.createElement(J,W)}(y,p,w,S)};return h.displayName=c,(y=Le.forwardRef(h)).attrs=d,y.componentStyle=m,y.displayName=c,y.shouldForwardProp=g,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):al,y.styledComponentId=f,y.target=r?e.target:e,y.withComponent=function(p){var w=t.componentId,E=function(O,N){if(O==null)return{};var P,Y,$={},A=Object.keys(O);for(Y=0;Y<A.length;Y++)P=A[Y],N.indexOf(P)>=0||($[P]=O[P]);return $}(t,["componentId"]),_=w&&w+"-"+(la(p)?p:dc(Vm(p)));return hw(p,In({},E,{attrs:d,componentId:_}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?dw({},e.defaultProps,p):p}}),y.toString=function(){return"."+y.styledComponentId},i&&ZE(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var Hd=function(e){return function t(n,r,i){if(i===void 0&&(i=pr),!yh.exports.isValidElementType(r))return Co(1,String(r));var s=function(){return n(r,i,Wk.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,In({},i,{},o))},s.attrs=function(o){return t(n,r,In({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(hw,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Hd[e]=Hd(e)});const x=Hd,Jk=x.div`
  background-color: #000;
  /* height: 3rem; */
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Zk=x.p`
  font-size: 1rem;
  color: #fff;
`,eC=()=>v(Jk,{children:v(Zk,{children:"Lune Design \xAE 2022"})}),Ch="/assets/Logo_LuneDesign.ff6db146.png",tC="/assets/exit_icon.d474b0d5.svg",nC=x.div`
  background: rgb(250, 178, 169);
  background: linear-gradient(
    90deg,
    rgba(250, 178, 169, 1) 0%,
    rgba(248, 191, 179, 1) 10%,
    rgba(248, 191, 179, 1) 90%,
    rgba(250, 178, 169, 1) 100%
  );
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  display: flex;
  font-size: 1rem;
  height: 6rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1000;

  @media screen and (max-width: 1366px) {
    height: 4.5rem;
  }
`,rC=x.div`
  align-items: center;
  display: flex;
  margin-left: 12rem;
`,iC=x.img`
  margin-top: 4.5rem;
  width: 11rem;

  @media screen and (max-width: 1366px) {
    width: 9.5rem;
  }
`,sC=x.ul`
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
`,vs=x(Bn)`
  cursor: pointer;
  list-style: none;
  margin-right: 1rem;
  text-decoration: none;

  &:active {
    color: #6b6b6b;
  }

  @media (hover: hover) {
    &:hover {
      color: #6b6b6b;
    }
  }
`,Ym=x.div`
  align-items: center;
  display: flex;
  margin-right: 12rem;
`,oC=x.p`
  margin-right: 1rem;

  a {
    color: #3772ff;
    font-size: 1.1rem;
    margin-left: 0.2rem;
  }
`,aC=x.img`
  cursor: pointer;
  width: 2rem;

  @media (hover: hover) {
    &:hover {
    }
  }
`,Qm=x(Bn)`
  background-color: #71c2b1;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0.6rem 0.8rem;
  text-decoration: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
    }
  }
`,lC=x.button`
  align-items: center;
  background-color: transparent;
  border-radius: none;
  border: none;
  display: flex;
  justify-content: center;
  margin-left: 0.5rem;
  text-decoration: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
    }
  }
`;function Zt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function br(e){return!!e&&!!e[Ce]}function Dn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===vC}(e)||Array.isArray(e)||!!e[rg]||!!(!((t=e.constructor)===null||t===void 0)&&t[rg])||Th(e)||Ih(e))}function qr(e,t,n){n===void 0&&(n=!1),is(e)===0?(n?Object.keys:Di)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function is(e){var t=e[Ce];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Th(e)?2:Ih(e)?3:0}function Li(e,t){return is(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function uC(e,t){return is(e)===2?e.get(t):e[t]}function pw(e,t,n){var r=is(e);r===2?e.set(t,n):r===3?(e.delete(t),e.add(n)):e[t]=n}function mw(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Th(e){return mC&&e instanceof Map}function Ih(e){return gC&&e instanceof Set}function Pr(e){return e.o||e.t}function Ph(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=vw(e);delete t[Ce];for(var n=Di(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ah(e,t){return t===void 0&&(t=!1),Oh(e)||br(e)||!Dn(e)||(is(e)>1&&(e.set=e.add=e.clear=e.delete=cC),Object.freeze(e),t&&qr(e,function(n,r){return Ah(r,!0)},!0)),e}function cC(){Zt(2)}function Oh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function mn(e){var t=Kd[e];return t||Zt(18,e),t}function dC(e,t){Kd[e]||(Kd[e]=t)}function Wd(){return oo}function hc(e,t){t&&(mn("Patches"),e.u=[],e.s=[],e.v=t)}function ul(e){Gd(e),e.p.forEach(fC),e.p=null}function Gd(e){e===oo&&(oo=e.l)}function Xm(e){return oo={p:[],l:oo,h:e,m:!0,_:0}}function fC(e){var t=e[Ce];t.i===0||t.i===1?t.j():t.O=!0}function pc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||mn("ES5").S(t,e,r),r?(n[Ce].P&&(ul(t),Zt(4)),Dn(e)&&(e=cl(t,e),t.l||dl(t,e)),t.u&&mn("Patches").M(n[Ce].t,e,t.u,t.s)):e=cl(t,n,[]),ul(t),t.u&&t.v(t.u,t.s),e!==gw?e:void 0}function cl(e,t,n){if(Oh(t))return t;var r=t[Ce];if(!r)return qr(t,function(s,o){return Jm(e,r,t,s,o,n)},!0),t;if(r.A!==e)return t;if(!r.P)return dl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Ph(r.k):r.o;qr(r.i===3?new Set(i):i,function(s,o){return Jm(e,r,i,s,o,n)}),dl(e,i,!1),n&&e.u&&mn("Patches").R(r,n,e.u,e.s)}return r.o}function Jm(e,t,n,r,i,s){if(br(i)){var o=cl(e,i,s&&t&&t.i!==3&&!Li(t.D,r)?s.concat(r):void 0);if(pw(n,r,o),!br(o))return;e.m=!1}if(Dn(i)&&!Oh(i)){if(!e.h.F&&e._<1)return;cl(e,i),t&&t.A.l||dl(e,i)}}function dl(e,t,n){n===void 0&&(n=!1),e.h.F&&e.m&&Ah(t,n)}function mc(e,t){var n=e[Ce];return(n?Pr(n):e)[t]}function Zm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Yn(e){e.P||(e.P=!0,e.l&&Yn(e.l))}function gc(e){e.o||(e.o=Ph(e.t))}function qd(e,t,n){var r=Th(t)?mn("MapSet").N(t,n):Ih(t)?mn("MapSet").T(t,n):e.g?function(i,s){var o=Array.isArray(i),l={i:o?1:0,A:s?s.A:Wd(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},a=l,u=ao;o&&(a=[l],u=Es);var c=Proxy.revocable(a,u),f=c.revoke,d=c.proxy;return l.k=d,l.j=f,d}(t,n):mn("ES5").J(t,n);return(n?n.A:Wd()).p.push(r),r}function hC(e){return br(e)||Zt(22,e),function t(n){if(!Dn(n))return n;var r,i=n[Ce],s=is(n);if(i){if(!i.P&&(i.i<4||!mn("ES5").K(i)))return i.t;i.I=!0,r=eg(n,s),i.I=!1}else r=eg(n,s);return qr(r,function(o,l){i&&uC(i.t,o)===l||pw(r,o,t(l))}),s===3?new Set(r):r}(e)}function eg(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ph(e)}function pC(){function e(s,o){var l=i[s];return l?l.enumerable=o:i[s]=l={configurable:!0,enumerable:o,get:function(){var a=this[Ce];return ao.get(a,s)},set:function(a){var u=this[Ce];ao.set(u,s,a)}},l}function t(s){for(var o=s.length-1;o>=0;o--){var l=s[o][Ce];if(!l.P)switch(l.i){case 5:r(l)&&Yn(l);break;case 4:n(l)&&Yn(l)}}}function n(s){for(var o=s.t,l=s.k,a=Di(l),u=a.length-1;u>=0;u--){var c=a[u];if(c!==Ce){var f=o[c];if(f===void 0&&!Li(o,c))return!0;var d=l[c],g=d&&d[Ce];if(g?g.t!==f:!mw(d,f))return!0}}var y=!!o[Ce];return a.length!==Di(o).length+(y?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var l=Object.getOwnPropertyDescriptor(o,o.length-1);if(l&&!l.get)return!0;for(var a=0;a<o.length;a++)if(!o.hasOwnProperty(a))return!0;return!1}var i={};dC("ES5",{J:function(s,o){var l=Array.isArray(s),a=function(c,f){if(c){for(var d=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(d,""+g,e(g,!0));return d}var y=vw(f);delete y[Ce];for(var m=Di(y),S=0;S<m.length;S++){var h=m[S];y[h]=e(h,c||!!y[h].enumerable)}return Object.create(Object.getPrototypeOf(f),y)}(l,s),u={i:l?5:4,A:o?o.A:Wd(),P:!1,I:!1,D:{},l:o,t:s,k:a,o:null,O:!1,C:!1};return Object.defineProperty(a,Ce,{value:u,writable:!0}),a},S:function(s,o,l){l?br(o)&&o[Ce].A===s&&t(s.p):(s.u&&function a(u){if(u&&typeof u=="object"){var c=u[Ce];if(c){var f=c.t,d=c.k,g=c.D,y=c.i;if(y===4)qr(d,function(w){w!==Ce&&(f[w]!==void 0||Li(f,w)?g[w]||a(d[w]):(g[w]=!0,Yn(c)))}),qr(f,function(w){d[w]!==void 0||Li(d,w)||(g[w]=!1,Yn(c))});else if(y===5){if(r(c)&&(Yn(c),g.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)g[m]=!1;else for(var S=f.length;S<d.length;S++)g[S]=!0;for(var h=Math.min(d.length,f.length),p=0;p<h;p++)d.hasOwnProperty(p)||(g[p]=!0),g[p]===void 0&&a(d[p])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var tg,oo,$h=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",mC=typeof Map<"u",gC=typeof Set<"u",ng=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",gw=$h?Symbol.for("immer-nothing"):((tg={})["immer-nothing"]=!0,tg),rg=$h?Symbol.for("immer-draftable"):"__$immer_draftable",Ce=$h?Symbol.for("immer-state"):"__$immer_state",vC=""+Object.prototype.constructor,Di=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,vw=Object.getOwnPropertyDescriptors||function(e){var t={};return Di(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Kd={},ao={get:function(e,t){if(t===Ce)return e;var n=Pr(e);if(!Li(n,t))return function(i,s,o){var l,a=Zm(s,o);return a?"value"in a?a.value:(l=a.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Dn(r)?r:r===mc(e.t,t)?(gc(e),e.o[t]=qd(e.A.h,r,e)):r},has:function(e,t){return t in Pr(e)},ownKeys:function(e){return Reflect.ownKeys(Pr(e))},set:function(e,t,n){var r=Zm(Pr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=mc(Pr(e),t),s=i==null?void 0:i[Ce];if(s&&s.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(mw(n,i)&&(n!==void 0||Li(e.t,t)))return!0;gc(e),Yn(e)}return e.o[t]===n&&typeof n!="number"&&(n!==void 0||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return mc(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,gc(e),Yn(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Pr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Zt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Zt(12)}},Es={};qr(ao,function(e,t){Es[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Es.deleteProperty=function(e,t){return Es.set.call(this,e,t,void 0)},Es.set=function(e,t,n){return ao.set.call(this,e[0],t,n,e[0])};var yC=function(){function e(n){var r=this;this.g=ng,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var l=s;s=i;var a=r;return function(m){var S=this;m===void 0&&(m=l);for(var h=arguments.length,p=Array(h>1?h-1:0),w=1;w<h;w++)p[w-1]=arguments[w];return a.produce(m,function(E){var _;return(_=s).call.apply(_,[S,E].concat(p))})}}var u;if(typeof s!="function"&&Zt(6),o!==void 0&&typeof o!="function"&&Zt(7),Dn(i)){var c=Xm(r),f=qd(r,i,void 0),d=!0;try{u=s(f),d=!1}finally{d?ul(c):Gd(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return hc(c,o),pc(m,c)},function(m){throw ul(c),m}):(hc(c,o),pc(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===gw&&(u=void 0),r.F&&Ah(u,!0),o){var g=[],y=[];mn("Patches").M(i,u,g,y),o(g,y)}return u}Zt(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(f))})};var o,l,a=r.produce(i,s,function(u,c){o=u,l=c});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,o,l]}):[a,o,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Dn(n)||Zt(8),br(n)&&(n=hC(n));var r=Xm(this),i=qd(this,n,void 0);return i[Ce].C=!0,Gd(r),i},t.finishDraft=function(n,r){var i=n&&n[Ce],s=i.A;return hc(s,r),pc(void 0,s)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!ng&&Zt(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=mn("Patches").$;return br(n)?o(n,r):this.produce(n,function(l){return o(l,r)})},e}(),$t=new yC,yw=$t.produce;$t.produceWithPatches.bind($t);$t.setAutoFreeze.bind($t);$t.setUseProxies.bind($t);$t.applyPatches.bind($t);$t.createDraft.bind($t);$t.finishDraft.bind($t);function wC(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ig(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ig(Object(n),!0).forEach(function(r){wC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ig(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var og=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),vc=function(){return Math.random().toString(36).substring(7).split("").join(".")},fl={INIT:"@@redux/INIT"+vc(),REPLACE:"@@redux/REPLACE"+vc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+vc()}};function SC(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ww(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(nt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(nt(1));return n(ww)(e,t)}if(typeof e!="function")throw new Error(nt(2));var i=e,s=t,o=[],l=o,a=!1;function u(){l===o&&(l=o.slice())}function c(){if(a)throw new Error(nt(3));return s}function f(m){if(typeof m!="function")throw new Error(nt(4));if(a)throw new Error(nt(5));var S=!0;return u(),l.push(m),function(){if(!!S){if(a)throw new Error(nt(6));S=!1,u();var p=l.indexOf(m);l.splice(p,1),o=null}}}function d(m){if(!SC(m))throw new Error(nt(7));if(typeof m.type>"u")throw new Error(nt(8));if(a)throw new Error(nt(9));try{a=!0,s=i(s,m)}finally{a=!1}for(var S=o=l,h=0;h<S.length;h++){var p=S[h];p()}return m}function g(m){if(typeof m!="function")throw new Error(nt(10));i=m,d({type:fl.REPLACE})}function y(){var m,S=f;return m={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(nt(11));function w(){p.next&&p.next(c())}w();var E=S(w);return{unsubscribe:E}}},m[og]=function(){return this},m}return d({type:fl.INIT}),r={dispatch:d,subscribe:f,getState:c,replaceReducer:g},r[og]=y,r}function bC(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:fl.INIT});if(typeof r>"u")throw new Error(nt(12));if(typeof n(void 0,{type:fl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(nt(13))})}function xC(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{bC(n)}catch(l){o=l}return function(a,u){if(a===void 0&&(a={}),o)throw o;for(var c=!1,f={},d=0;d<s.length;d++){var g=s[d],y=n[g],m=a[g],S=y(m,u);if(typeof S>"u")throw u&&u.type,new Error(nt(14));f[g]=S,c=c||S!==m}return c=c||s.length!==Object.keys(a).length,c?f:a}}function hl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function EC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(nt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},l=t.map(function(a){return a(o)});return s=hl.apply(void 0,l)(i.dispatch),sg(sg({},i),{},{dispatch:s})}}}function Sw(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(l){return typeof l=="function"?l(i,s,e):o(l)}}};return t}var bw=Sw();bw.withExtraArgument=Sw;const ag=bw;var _C=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var pl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},kC=Object.defineProperty,lg=Object.getOwnPropertySymbols,CC=Object.prototype.hasOwnProperty,TC=Object.prototype.propertyIsEnumerable,ug=function(e,t,n){return t in e?kC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},lo=function(e,t){for(var n in t||(t={}))CC.call(t,n)&&ug(e,n,t[n]);if(lg)for(var r=0,i=lg(t);r<i.length;r++){var n=i[r];TC.call(t,n)&&ug(e,n,t[n])}return e},IC=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?hl:hl.apply(null,arguments)};function PC(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var AC=function(e){_C(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,pl([void 0],n[0].concat(this)))):new(t.bind.apply(t,pl([void 0],n.concat(this))))},t}(Array);function Yd(e){return Dn(e)?yw(e,function(){}):e}function OC(e){return typeof e=="boolean"}function $C(){return function(t){return RC(t)}}function RC(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new AC;return n&&(OC(n)?r.push(ag):r.push(ag.withExtraArgument(n.extraArgument))),r}var NC=!0;function LC(e){var t=$C(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,l=n.devTools,a=l===void 0?!0:l,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,d=f===void 0?void 0:f,g;if(typeof i=="function")g=i;else if(PC(i))g=xC(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=o;typeof y=="function"&&(y=y(t));var m=EC.apply(void 0,y),S=hl;a&&(S=IC(lo({trace:!NC},typeof a=="object"&&a)));var h=[m];Array.isArray(d)?h=pl([m],d):typeof d=="function"&&(h=d(h));var p=S.apply(void 0,h);return ww(g,c,p)}function uo(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return lo(lo({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function xw(e){var t={},n=[],r,i={addCase:function(s,o){var l=typeof s=="string"?s:s.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function DC(e){return typeof e=="function"}function MC(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?xw(t):[t,n,r],s=i[0],o=i[1],l=i[2],a;if(DC(e))a=function(){return Yd(e())};else{var u=Yd(e);a=function(){return u}}function c(f,d){f===void 0&&(f=a());var g=pl([s[d.type]],o.filter(function(y){var m=y.matcher;return m(d)}).map(function(y){var m=y.reducer;return m}));return g.filter(function(y){return!!y}).length===0&&(g=[l]),g.reduce(function(y,m){if(m)if(br(y)){var S=y,h=m(S,d);return h===void 0?y:h}else{if(Dn(y))return yw(y,function(p){return m(p,d)});var h=m(y,d);if(h===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return y},f)}return c.getInitialState=a,c}function FC(e,t){return e+"/"+t}function Ew(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Yd(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},l={};i.forEach(function(c){var f=r[c],d=FC(t,c),g,y;"reducer"in f?(g=f.reducer,y=f.prepare):g=f,s[c]=g,o[d]=g,l[c]=y?uo(d,y):uo(d)});function a(){var c=typeof e.extraReducers=="function"?xw(e.extraReducers):[e.extraReducers],f=c[0],d=f===void 0?{}:f,g=c[1],y=g===void 0?[]:g,m=c[2],S=m===void 0?void 0:m,h=lo(lo({},d),o);return MC(n,h,y,S)}var u;return{name:t,reducer:function(c,f){return u||(u=a()),u(c,f)},actions:l,caseReducers:s,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var Rh="listenerMiddleware";uo(Rh+"/add");uo(Rh+"/removeAll");uo(Rh+"/remove");pC();const _w=Ew({name:"auth",initialState:{status:"checking",uid:null,email:null,name:null,direccion:null,numberPhone:null,rol:null,imagen:null,errorMessage:null},reducers:{login:(e,{payload:t})=>{e.status="authenticated",e.uid=t.uid,e.email=t.email,e.errorMessage=null},logout:(e,{payload:t})=>{e.status="not-authenticated",e.uid=null,e.email=null,e.name=null,e.direccion=null,e.numberPhone=null,e.rol=null,e.imagen=null,e.errorMessage=t==null?void 0:t.errorMessage},checkingCredentials:e=>{e.status="checking"},setDatos:(e,{payload:t})=>{e.name=t.name,e.direccion=t.direccion,e.numberPhone=t.numberPhone,e.rol=t.rol,e.imagen=t.imagen}}}),{login:Nh,logout:kw,checkingCredentials:Cw,setDatos:Tw}=_w.actions;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Iw=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},zC=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,c=s>>2,f=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Iw(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):zC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},jC=function(e){const t=Iw(e);return Pw.encodeByteArray(t,!0)},ml=function(e){return jC(e).replace(/\./g,"")},Aw=function(e){try{return Pw.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Ow(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function UC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VC(){const e=st();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $w(){return typeof indexedDB=="object"}function Rw(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function HC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function WC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GC=()=>WC().__FIREBASE_DEFAULTS__,qC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},KC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Aw(e[1]);return t&&JSON.parse(t)},Lh=()=>{try{return GC()||qC()||KC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Nw=e=>{var t,n;return(n=(t=Lh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},YC=e=>{const t=Nw(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},QC=()=>{var e;return(e=Lh())===null||e===void 0?void 0:e.config},Lw=e=>{var t;return(t=Lh())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function JC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[ml(JSON.stringify(n)),ml(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="FirebaseError";class an extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ZC,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?eT(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function eT(e,t){return e.replace(tT,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const tT=/\{\$([^}]+)}/g;function nT(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function co(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(cg(s)&&cg(o)){if(!co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _s(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ks(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function rT(e,t){const n=new iT(e,t);return n.subscribe.bind(n)}class iT{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sT(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function yc(){}/**
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
 */const oT=1e3,aT=2,lT=4*60*60*1e3,uT=.5;function dg(e,t=oT,n=aT){const r=t*Math.pow(n,e),i=Math.round(uT*r*(Math.random()-.5)*2);return Math.min(lT,r+i)}/**
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
 */function We(e){return e&&e._delegate?e._delegate:e}class sn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class cT{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new XC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fT(t))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ar){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ar){return this.instances.has(t)}getOptions(t=Ar){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dT(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ar){return this.component?this.component.multipleInstances?t:Ar:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dT(e){return e===Ar?void 0:e}function fT(e){return e.instantiationMode==="EAGER"}/**
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
 */class hT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cT(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(pe||(pe={}));const pT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},mT=pe.INFO,gT={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},vT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=gT[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bu{constructor(t){this.name=t,this._logLevel=mT,this._logHandler=vT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...t),this._logHandler(this,pe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...t),this._logHandler(this,pe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...t),this._logHandler(this,pe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...t),this._logHandler(this,pe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...t),this._logHandler(this,pe.ERROR,...t)}}const yT=(e,t)=>t.some(n=>e instanceof n);let fg,hg;function wT(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ST(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dw=new WeakMap,Qd=new WeakMap,Mw=new WeakMap,wc=new WeakMap,Dh=new WeakMap;function bT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(mr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Dw.set(n,e)}).catch(()=>{}),Dh.set(t,e),t}function xT(e){if(Qd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Qd.set(e,t)}let Xd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Mw.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ET(e){Xd=e(Xd)}function _T(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Sc(this),t,...n);return Mw.set(r,t.sort?t.sort():[t]),mr(r)}:ST().includes(e)?function(...t){return e.apply(Sc(this),t),mr(Dw.get(this))}:function(...t){return mr(e.apply(Sc(this),t))}}function kT(e){return typeof e=="function"?_T(e):(e instanceof IDBTransaction&&xT(e),yT(e,wT())?new Proxy(e,Xd):e)}function mr(e){if(e instanceof IDBRequest)return bT(e);if(wc.has(e))return wc.get(e);const t=kT(e);return t!==e&&(wc.set(e,t),Dh.set(t,e)),t}const Sc=e=>Dh.get(e);function Fw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=mr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(mr(o.result),a.oldVersion,a.newVersion,mr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const CT=["get","getKey","getAll","getAllKeys","count"],TT=["put","add","delete","clear"],bc=new Map;function pg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bc.get(t))return bc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=TT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||CT.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return bc.set(t,s),s}ET(e=>({...e,get:(t,n,r)=>pg(t,n)||e.get(t,n,r),has:(t,n)=>!!pg(t,n)||e.has(t,n)}));/**
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
 */class IT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jd="@firebase/app",mg="0.8.2";/**
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
 */const Kr=new bu("@firebase/app"),AT="@firebase/app-compat",OT="@firebase/analytics-compat",$T="@firebase/analytics",RT="@firebase/app-check-compat",NT="@firebase/app-check",LT="@firebase/auth",DT="@firebase/auth-compat",MT="@firebase/database",FT="@firebase/database-compat",zT="@firebase/functions",jT="@firebase/functions-compat",BT="@firebase/installations",UT="@firebase/installations-compat",VT="@firebase/messaging",HT="@firebase/messaging-compat",WT="@firebase/performance",GT="@firebase/performance-compat",qT="@firebase/remote-config",KT="@firebase/remote-config-compat",YT="@firebase/storage",QT="@firebase/storage-compat",XT="@firebase/firestore",JT="@firebase/firestore-compat",ZT="firebase",eI="9.12.1";/**
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
 */const Zd="[DEFAULT]",tI={[Jd]:"fire-core",[AT]:"fire-core-compat",[$T]:"fire-analytics",[OT]:"fire-analytics-compat",[NT]:"fire-app-check",[RT]:"fire-app-check-compat",[LT]:"fire-auth",[DT]:"fire-auth-compat",[MT]:"fire-rtdb",[FT]:"fire-rtdb-compat",[zT]:"fire-fn",[jT]:"fire-fn-compat",[BT]:"fire-iid",[UT]:"fire-iid-compat",[VT]:"fire-fcm",[HT]:"fire-fcm-compat",[WT]:"fire-perf",[GT]:"fire-perf-compat",[qT]:"fire-rc",[KT]:"fire-rc-compat",[YT]:"fire-gcs",[QT]:"fire-gcs-compat",[XT]:"fire-fst",[JT]:"fire-fst-compat","fire-js":"fire-js",[ZT]:"fire-js-all"};/**
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
 */const gl=new Map,ef=new Map;function nI(e,t){try{e.container.addComponent(t)}catch(n){Kr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yn(e){const t=e.name;if(ef.has(t))return Kr.debug(`There were multiple attempts to register component ${t}.`),!1;ef.set(t,e);for(const n of gl.values())nI(n,e);return!0}function ii(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const rI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gr=new ri("app","Firebase",rI);/**
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
 */class iI{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const Io=eI;function zw(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=QC()),!n)throw gr.create("no-options");const s=gl.get(i);if(s){if(co(n,s.options)&&co(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new hT(i);for(const a of ef.values())o.addComponent(a);const l=new iI(n,r,o);return gl.set(i,l),l}function Mh(e=Zd){const t=gl.get(e);if(!t&&e===Zd)return zw();if(!t)throw gr.create("no-app",{appName:e});return t}function Vt(e,t,n){var r;let i=(r=tI[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Kr.warn(l.join(" "));return}yn(new sn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const sI="firebase-heartbeat-database",oI=1,fo="firebase-heartbeat-store";let xc=null;function jw(){return xc||(xc=Fw(sI,oI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fo)}}}).catch(e=>{throw gr.create("idb-open",{originalErrorMessage:e.message})})),xc}async function aI(e){var t;try{return(await jw()).transaction(fo).objectStore(fo).get(Bw(e))}catch(n){if(n instanceof an)Kr.warn(n.message);else{const r=gr.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Kr.warn(r.message)}}}async function gg(e,t){var n;try{const i=(await jw()).transaction(fo,"readwrite");return await i.objectStore(fo).put(t,Bw(e)),i.done}catch(r){if(r instanceof an)Kr.warn(r.message);else{const i=gr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Kr.warn(i.message)}}}function Bw(e){return`${e.name}!${e.options.appId}`}/**
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
 */const lI=1024,uI=30*24*60*60*1e3;class cI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=uI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vg(),{heartbeatsToSend:n,unsentEntries:r}=dI(this._heartbeatsCache.heartbeats),i=ml(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vg(){return new Date().toISOString().substring(0,10)}function dI(e,t=lI){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $w()?Rw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yg(e){return ml(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function hI(e){yn(new sn("platform-logger",t=>new IT(t),"PRIVATE")),yn(new sn("heartbeat",t=>new cI(t),"PRIVATE")),Vt(Jd,mg,e),Vt(Jd,mg,"esm2017"),Vt("fire-js","")}hI("");function Fh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Uw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pI=Uw,Vw=new ri("auth","Firebase",Uw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new bu("@firebase/auth");function Aa(e,...t){wg.logLevel<=pe.ERROR&&wg.error(`Auth (${Io}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,...t){throw zh(e,...t)}function gn(e,...t){return zh(e,...t)}function mI(e,t,n){const r=Object.assign(Object.assign({},pI()),{[t]:n});return new ri("auth","Firebase",r).create(t,{appName:e.name})}function zh(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Vw.create(e,...t)}function te(e,t,...n){if(!e)throw zh(t,...n)}function Pn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Aa(t),new Error(t)}function Mn(e,t){e||Pn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Map;function An(e){Mn(e instanceof Function,"Expected a class definition");let t=Sg.get(e);return t?(Mn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sg.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(e,t){const n=ii(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(co(s,t!=null?t:{}))return i;on(i,"already-initialized")}return n.initialize({options:t})}function vI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function yI(){return bg()==="http:"||bg()==="https:"}function bg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yI()||Ow()||"connection"in navigator)?navigator.onLine:!0}function SI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,n){this.shortDelay=t,this.longDelay=n,Mn(n>t,"Short delay should be less than long delay!"),this.isMobile=BC()||UC()}get(){return wI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(e,t){Mn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=new Po(3e4,6e4);function Ao(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Oo(e,t,n,r,i={}){return Ww(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=To(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Hw.fetch()(Gw(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function Ww(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},bI),t);try{const i=new EI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ua(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ua(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw ua(e,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw mI(e,c,u);on(e,c)}}catch(i){if(i instanceof an)throw i;on(e,"network-request-failed")}}async function $o(e,t,n,r,i={}){const s=await Oo(e,t,n,r,i);return"mfaPendingCredential"in s&&on(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Gw(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jh(e.config,i):`${e.config.apiScheme}://${i}`}class EI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),xI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(e,t){return Oo(e,"POST","/v1/accounts:delete",t)}async function kI(e,t){return Oo(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function CI(e,t=!1){const n=We(e),r=await n.getIdToken(t),i=Bh(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ds(Ec(i.auth_time)),issuedAtTime:Ds(Ec(i.iat)),expirationTime:Ds(Ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ec(e){return Number(e)*1e3}function Bh(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Aw(r);return s?JSON.parse(s):(Aa("Failed to decode base64 JWT payload"),null)}catch(s){return Aa("Caught error parsing JWT payload as JSON",(t=s)===null||t===void 0?void 0:t.toString()),null}}function TI(e){const t=Bh(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof an&&II(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function II({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ds(this.lastLoginAt),this.creationTime=Ds(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ho(e,kI(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?$I(s.providerUserInfo):[],l=OI(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new qw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function AI(e){const t=We(e);await vl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function OI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function $I(e){return e.map(t=>{var{providerId:n}=t,r=Fh(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(e,t){const n=await Ww(e,{},async()=>{const r=To({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Gw(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):TI(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return te(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new po;return r&&(te(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class zr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Fh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ho(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return CI(this,t)}reload(){return AI(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new zr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ho(this,_I(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:E,isAnonymous:_,providerData:O,stsTokenManager:N}=n;te(w&&N,t,"internal-error");const P=po.fromJSON(this.name,N);te(typeof w=="string",t,"internal-error"),Hn(f,t.name),Hn(d,t.name),te(typeof E=="boolean",t,"internal-error"),te(typeof _=="boolean",t,"internal-error"),Hn(g,t.name),Hn(y,t.name),Hn(m,t.name),Hn(S,t.name),Hn(h,t.name),Hn(p,t.name);const Y=new zr({uid:w,auth:t,email:d,emailVerified:E,displayName:f,isAnonymous:_,photoURL:y,phoneNumber:g,tenantId:m,stsTokenManager:P,createdAt:h,lastLoginAt:p});return O&&Array.isArray(O)&&(Y.providerData=O.map($=>Object.assign({},$))),S&&(Y._redirectEventId=S),Y}static async _fromIdTokenResponse(t,n,r=!1){const i=new po;i.updateFromServerResponse(n);const s=new zr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await vl(s),s}}/**
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
 */class Kw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Kw.type="NONE";const xg=Kw;/**
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
 */function Oa(e,t,n){return`firebase:${e}:${t}:${n}`}class Mi{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?zr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Mi(An(xg),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||An(xg);const o=Oa(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const f=zr._fromJSON(t,c);u!==s&&(l=f),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Mi(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mi(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xw(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yw(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zw(t))return"Blackberry";if(e1(t))return"Webos";if(Uh(t))return"Safari";if((t.includes("chrome/")||Qw(t))&&!t.includes("edge/"))return"Chrome";if(Jw(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yw(e=st()){return/firefox\//i.test(e)}function Uh(e=st()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qw(e=st()){return/crios\//i.test(e)}function Xw(e=st()){return/iemobile/i.test(e)}function Jw(e=st()){return/android/i.test(e)}function Zw(e=st()){return/blackberry/i.test(e)}function e1(e=st()){return/webos/i.test(e)}function xu(e=st()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function NI(e=st()){var t;return xu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function LI(){return VC()&&document.documentMode===10}function t1(e=st()){return xu(e)||Jw(e)||e1(e)||Zw(e)||/windows phone/i.test(e)||Xw(e)}function DI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(e,t=[]){let n;switch(e){case"Browser":n=Eg(st());break;case"Worker":n=`${Eg(st())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Io}/${r}`}/**
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
 */class MI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new MI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await vl(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=SI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?We(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ri("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&An(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=n1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ro(e){return We(e)}class _g{constructor(t){this.auth=t,this.observer=null,this.addObserver=rT(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function zI(e,t,n){const r=Ro(e);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=r1(t),{host:o,port:l}=jI(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||BI()}function r1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function jI(e){const t=r1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kg(o)}}}function kg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function BI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(t){return Pn("not implemented")}_linkToIdToken(t,n){return Pn("not implemented")}_getReauthenticationResolver(t){return Pn("not implemented")}}async function UI(e,t){return Oo(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(e,t){return $o(e,"POST","/v1/accounts:signInWithPassword",Ao(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(e,t){return $o(e,"POST","/v1/accounts:signInWithEmailLink",Ao(e,t))}async function WI(e,t){return $o(e,"POST","/v1/accounts:signInWithEmailLink",Ao(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo extends Vh{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new mo(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new mo(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return VI(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HI(t,{email:this._email,oobCode:this._password});default:on(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return UI(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return WI(t,{idToken:n,email:this._email,oobCode:this._password});default:on(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(e,t){return $o(e,"POST","/v1/accounts:signInWithIdp",Ao(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="http://localhost";class Yr extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Yr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Fh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Fi(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Fi(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Fi(t,n)}buildRequest(){const t={requestUri:GI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=To(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KI(e){const t=_s(ks(e)).link,n=t?_s(ks(t)).deep_link_id:null,r=_s(ks(e)).deep_link_id;return(r?_s(ks(r)).link:null)||r||n||t||e}class Hh{constructor(t){var n,r,i,s,o,l;const a=_s(ks(t)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,f=qI((i=a.mode)!==null&&i!==void 0?i:null);te(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=KI(t);try{return new Hh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(t,n){return mo._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Hh.parseLink(n);return te(r,"argument-error"),mo._fromEmailAndCode(t,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class No extends i1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends No{constructor(){super("facebook.com")}static credential(t){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qn.credential(t.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Yr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends No{constructor(){super("github.com")}static credential(t){return Yr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends No{constructor(){super("twitter.com")}static credential(t,n){return Yr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(e,t){return $o(e,"POST","/v1/accounts:signUp",Ao(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await zr._fromIdTokenResponse(t,r,i),o=Cg(r);return new Qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Cg(r);return new Qr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Cg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends an{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new yl(t,n,r,i)}}function s1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(e,s,t,r):s})}async function QI(e,t,n=!1){const r=await ho(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qr._forOperation(e,"link",r)}/**
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
 */async function XI(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const o=await ho(e,s1(i,s,t,e),n);te(o.idToken,i,"internal-error");const l=Bh(o.idToken);te(l,i,"internal-error");const{sub:a}=l;return te(e.uid===a,i,"user-mismatch"),Qr._forOperation(e,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&on(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(e,t,n=!1){const r="signIn",i=await s1(e,r,t),s=await Qr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function JI(e,t){return o1(Ro(e),t)}async function ZI(e,t,n){const r=Ro(e),i=await YI(r,{returnSecureToken:!0,email:t,password:n}),s=await Qr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function eP(e,t,n){return JI(We(e),ss.credential(t,n))}function tP(e,t,n,r){return We(e).onIdTokenChanged(t,n,r)}function nP(e,t,n){return We(e).beforeAuthStateChanged(t,n)}function rP(e,t,n,r){return We(e).onAuthStateChanged(t,n,r)}const wl="__sak";/**
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
 */class a1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(){const e=st();return Uh(e)||xu(e)}const sP=1e3,oP=10;class l1 extends a1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iP()&&DI(),this.fallbackToPolling=t1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,oP):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}l1.type="LOCAL";const aP=l1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends a1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}u1.type="SESSION";const c1=u1;/**
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
 */function lP(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Eu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Eu(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await lP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class uP{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Wh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function cP(e){vn().location.href=e}/**
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
 */function d1(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function dP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fP(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function hP(){return d1()?self:null}/**
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
 */const f1="firebaseLocalStorageDb",pP=1,Sl="firebaseLocalStorage",h1="fbase_key";class Lo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _u(e,t){return e.transaction([Sl],t?"readwrite":"readonly").objectStore(Sl)}function mP(){const e=indexedDB.deleteDatabase(f1);return new Lo(e).toPromise()}function nf(){const e=indexedDB.open(f1,pP);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Sl,{keyPath:h1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Sl)?t(r):(r.close(),await mP(),t(await nf()))})})}async function Tg(e,t,n){const r=_u(e,!0).put({[h1]:t,value:n});return new Lo(r).toPromise()}async function gP(e,t){const n=_u(e,!1).get(t),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Ig(e,t){const n=_u(e,!0).delete(t);return new Lo(n).toPromise()}const vP=800,yP=3;class p1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>yP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return d1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eu._getInstance(hP()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await dP(),!this.activeServiceWorker)return;this.sender=new uP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||fP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await nf();return await Tg(t,wl,"1"),await Ig(t,wl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>gP(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ig(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=_u(i,!1).getAll();return new Lo(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p1.type="LOCAL";const wP=p1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function bP(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",SP().appendChild(r)})}function xP(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Po(3e4,6e4);/**
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
 */function EP(e,t){return t?An(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Gh extends Vh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Fi(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Fi(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Fi(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function _P(e){return o1(e.auth,new Gh(e),e.bypassAuthState)}function kP(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),XI(n,new Gh(e),e.bypassAuthState)}async function CP(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),QI(n,new Gh(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _P;case"linkViaPopup":case"linkViaRedirect":return CP;case"reauthViaPopup":case"reauthViaRedirect":return kP;default:on(this.auth,"internal-error")}}resolve(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=new Po(2e3,1e4);class Ci extends m1{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ci.currentPopupAction&&Ci.currentPopupAction.cancel(),Ci.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const t=Wh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ci.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,TP.get())};t()}}Ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="pendingRedirect",$a=new Map;class PP extends m1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=$a.get(this.auth._key());if(!t){try{const r=await AP(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}$a.set(this.auth._key(),t)}return this.bypassAuthState||$a.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AP(e,t){const n=RP(t),r=$P(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function OP(e,t){$a.set(e._key(),t)}function $P(e){return An(e._redirectPersistence)}function RP(e){return Oa(IP,e.config.apiKey,e.name)}async function NP(e,t,n=!1){const r=Ro(e),i=EP(r,t),o=await new PP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=10*60*1e3;class DP{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!MP(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!g1(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=LP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(t))}saveEventToCache(t){this.cachedEventUids.add(Pg(t)),this.lastProcessedEventTime=Date.now()}}function Pg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function g1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function MP(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g1(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(e,t={}){return Oo(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jP=/^https?/;async function BP(e){if(e.config.emulator)return;const{authorizedDomains:t}=await FP(e);for(const n of t)try{if(UP(n))return}catch{}on(e,"unauthorized-domain")}function UP(e){const t=tf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jP.test(n))return!1;if(zP.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const VP=new Po(3e4,6e4);function Ag(){const e=vn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function HP(e){return new Promise((t,n)=>{var r,i,s;function o(){Ag(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ag(),n(gn(e,"network-request-failed"))},timeout:VP.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const l=xP("iframefcb");return vn()[l]=()=>{gapi.load?o():n(gn(e,"network-request-failed"))},bP(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Ra=null,t})}let Ra=null;function WP(e){return Ra=Ra||HP(e),Ra}/**
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
 */const GP=new Po(5e3,15e3),qP="__/auth/iframe",KP="emulator/auth/iframe",YP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XP(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jh(t,KP):`https://${e.config.authDomain}/${qP}`,r={apiKey:t.apiKey,appName:e.name,v:Io},i=QP.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${To(r).slice(1)}`}async function JP(e){const t=await WP(e),n=vn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:XP(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(e,"network-request-failed"),l=vn().setTimeout(()=>{s(o)},GP.get());function a(){vn().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const ZP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eA=500,tA=600,nA="_blank",rA="http://localhost";class Og{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iA(e,t,n,r=eA,i=tA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},ZP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=st().toLowerCase();n&&(l=Qw(u)?nA:n),Yw(u)&&(t=t||rA,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(NI(u)&&l!=="_self")return sA(t||"",l),new Og(null);const f=window.open(t||"",l,c);te(f,e,"popup-blocked");try{f.focus()}catch{}return new Og(f)}function sA(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oA="__/auth/handler",aA="emulator/auth/handler";function $g(e,t,n,r,i,s){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Io,eventId:i};if(t instanceof i1){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",nT(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(t instanceof No){const a=t.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${lA(e)}?${To(l).slice(1)}`}function lA({config:e}){return e.emulator?jh(e,aA):`https://${e.authDomain}/${oA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="webStorageSupport";class uA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c1,this._completeRedirectFn=NP,this._overrideRedirectResult=OP}async _openPopup(t,n,r,i){var s;Mn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=$g(t,n,r,tf(),i);return iA(t,o,Wh())}async _openRedirect(t,n,r,i){return await this._originValidation(t),cP($g(t,n,r,tf(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await JP(t),r=new DP(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_c,{type:_c},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_c];o!==void 0&&n(!!o),on(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BP(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return t1()||Uh()||xu()}}const cA=uA;var Rg="@firebase/auth",Ng="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hA(e){yn(new sn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{te(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n1(e)},c=new FI(l,a,u);return vI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),yn(new sn("auth-internal",t=>{const n=Ro(t.getProvider("auth").getImmediate());return(r=>new dA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Rg,Ng,fA(e)),Vt(Rg,Ng,"esm2017")}/**
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
 */const pA=5*60,mA=Lw("authIdTokenMaxAge")||pA;let Lg=null;const gA=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mA)return;const i=n==null?void 0:n.token;Lg!==i&&(Lg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vA(e=Mh()){const t=ii(e,"auth");if(t.isInitialized())return t.getImmediate();const n=gI(e,{popupRedirectResolver:cA,persistence:[wP,aP,c1]}),r=Lw("authTokenSyncURL");if(r){const s=gA(r);nP(n,s,()=>s(n.currentUser)),tP(n,o=>s(o))}const i=Nw("auth");return i&&zI(n,`http://${i}`),n}hA("Browser");var yA="firebase",wA="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(yA,wA,"app");const v1="@firebase/installations",qh="0.5.15";/**
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
 */const y1=1e4,w1=`w:${qh}`,S1="FIS_v2",SA="https://firebaseinstallations.googleapis.com/v1",bA=60*60*1e3,xA="installations",EA="Installations";/**
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
 */const _A={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xr=new ri(xA,EA,_A);function b1(e){return e instanceof an&&e.code.includes("request-failed")}/**
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
 */function x1({projectId:e}){return`${SA}/projects/${e}/installations`}function E1(e){return{token:e.token,requestStatus:2,expiresIn:CA(e.expiresIn),creationTime:Date.now()}}async function _1(e,t){const r=(await t.json()).error;return Xr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function k1({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function kA(e,{refreshToken:t}){const n=k1(e);return n.append("Authorization",TA(t)),n}async function C1(e){const t=await e();return t.status>=500&&t.status<600?e():t}function CA(e){return Number(e.replace("s","000"))}function TA(e){return`${S1} ${e}`}/**
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
 */async function IA({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=x1(e),i=k1(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:S1,appId:e.appId,sdkVersion:w1},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await C1(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:E1(u.authToken)}}else throw await _1("Create Installation",a)}/**
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
 */function T1(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function PA(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const AA=/^[cdef][\w-]{21}$/,rf="";function OA(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=$A(e);return AA.test(n)?n:rf}catch{return rf}}function $A(e){return PA(e).substr(0,22)}/**
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
 */function ku(e){return`${e.appName}!${e.appId}`}/**
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
 */const I1=new Map;function P1(e,t){const n=ku(e);A1(n,t),RA(n,t)}function A1(e,t){const n=I1.get(e);if(!!n)for(const r of n)r(t)}function RA(e,t){const n=NA();n&&n.postMessage({key:e,fid:t}),LA()}let Lr=null;function NA(){return!Lr&&"BroadcastChannel"in self&&(Lr=new BroadcastChannel("[Firebase] FID Change"),Lr.onmessage=e=>{A1(e.data.key,e.data.fid)}),Lr}function LA(){I1.size===0&&Lr&&(Lr.close(),Lr=null)}/**
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
 */const DA="firebase-installations-database",MA=1,Jr="firebase-installations-store";let kc=null;function Kh(){return kc||(kc=Fw(DA,MA,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jr)}}})),kc}async function bl(e,t){const n=ku(e),i=(await Kh()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&P1(e,t.fid),t}async function O1(e){const t=ku(e),r=(await Kh()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(t),await r.done}async function Cu(e,t){const n=ku(e),i=(await Kh()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&P1(e,l.fid),l}/**
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
 */async function Yh(e){let t;const n=await Cu(e.appConfig,r=>{const i=FA(r),s=zA(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function FA(e){const t=e||{fid:OA(),registrationStatus:0};return $1(t)}function zA(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=jA(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:BA(e)}:{installationEntry:t}}async function jA(e,t){try{const n=await IA(e,t);return bl(e.appConfig,n)}catch(n){throw b1(n)&&n.customData.serverCode===409?await O1(e.appConfig):await bl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function BA(e){let t=await Dg(e.appConfig);for(;t.registrationStatus===1;)await T1(100),t=await Dg(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yh(e);return r||n}return t}function Dg(e){return Cu(e,t=>{if(!t)throw Xr.create("installation-not-found");return $1(t)})}function $1(e){return UA(e)?{fid:e.fid,registrationStatus:0}:e}function UA(e){return e.registrationStatus===1&&e.registrationTime+y1<Date.now()}/**
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
 */async function VA({appConfig:e,heartbeatServiceProvider:t},n){const r=HA(e,n),i=kA(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:w1,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await C1(()=>fetch(r,l));if(a.ok){const u=await a.json();return E1(u)}else throw await _1("Generate Auth Token",a)}function HA(e,{fid:t}){return`${x1(e)}/${t}/authTokens:generate`}/**
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
 */async function Qh(e,t=!1){let n;const r=await Cu(e.appConfig,s=>{if(!R1(s))throw Xr.create("not-registered");const o=s.authToken;if(!t&&qA(o))return s;if(o.requestStatus===1)return n=WA(e,t),s;{if(!navigator.onLine)throw Xr.create("app-offline");const l=YA(s);return n=GA(e,l),l}});return n?await n:r.authToken}async function WA(e,t){let n=await Mg(e.appConfig);for(;n.authToken.requestStatus===1;)await T1(100),n=await Mg(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qh(e,t):r}function Mg(e){return Cu(e,t=>{if(!R1(t))throw Xr.create("not-registered");const n=t.authToken;return QA(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function GA(e,t){try{const n=await VA(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await bl(e.appConfig,r),n}catch(n){if(b1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await O1(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await bl(e.appConfig,r)}throw n}}function R1(e){return e!==void 0&&e.registrationStatus===2}function qA(e){return e.requestStatus===2&&!KA(e)}function KA(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+bA}function YA(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function QA(e){return e.requestStatus===1&&e.requestTime+y1<Date.now()}/**
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
 */async function XA(e){const t=e,{installationEntry:n,registrationPromise:r}=await Yh(t);return r?r.catch(console.error):Qh(t).catch(console.error),n.fid}/**
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
 */async function JA(e,t=!1){const n=e;return await ZA(n),(await Qh(n,t)).token}async function ZA(e){const{registrationPromise:t}=await Yh(e);t&&await t}/**
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
 */function eO(e){if(!e||!e.options)throw Cc("App Configuration");if(!e.name)throw Cc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Cc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Cc(e){return Xr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="installations",tO="installations-internal",nO=e=>{const t=e.getProvider("app").getImmediate(),n=eO(t),r=ii(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rO=e=>{const t=e.getProvider("app").getImmediate(),n=ii(t,N1).getImmediate();return{getId:()=>XA(n),getToken:i=>JA(n,i)}};function iO(){yn(new sn(N1,nO,"PUBLIC")),yn(new sn(tO,rO,"PRIVATE"))}iO();Vt(v1,qh);Vt(v1,qh,"esm2017");/**
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
 */const xl="analytics",sO="firebase_id",oO="origin",aO=60*1e3,lO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",L1="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pt=new bu("@firebase/analytics");/**
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
 */function D1(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function uO(e,t){const n=document.createElement("script");n.src=`${L1}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function cO(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function dO(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await D1(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Pt.error(l)}e("config",i,s)}async function fO(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await D1(n);for(const a of o){const u=l.find(f=>f.measurementId===a),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Pt.error(s)}}function hO(e,t,n,r){async function i(s,o,l){try{s==="event"?await fO(e,t,n,o,l):s==="config"?await dO(e,t,n,r,o,l):s==="consent"?e("consent","update",l):e("set",o)}catch(a){Pt.error(a)}}return i}function pO(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=hO(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function mO(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(L1)&&n.src.includes(e))return n;return null}/**
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
 */const gO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ht=new ri("analytics","Analytics",gO);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=30,yO=1e3;class wO{constructor(t={},n=yO){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const M1=new wO;function SO(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function bO(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:SO(r)},s=lO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function xO(e,t=M1,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ht.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new kO;return setTimeout(async()=>{l.abort()},n!==void 0?n:aO),F1({appId:r,apiKey:i,measurementId:s},o,l,t)}async function F1(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=M1){var s,o;const{appId:l,measurementId:a}=e;try{await EO(r,t)}catch(u){if(a)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:l,measurementId:a};throw u}try{const u=await bO(e);return i.deleteThrottleMetadata(l),u}catch(u){const c=u;if(!_O(c)){if(i.deleteThrottleMetadata(l),a)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:l,measurementId:a};throw u}const f=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?dg(n,i.intervalMillis,vO):dg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(l,d),Pt.debug(`Calling attemptFetch again in ${f} millis`),F1(e,d,r,i)}}function EO(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function _O(e){if(!(e instanceof an)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class kO{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function CO(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TO(){var e;if($w())try{await Rw()}catch(t){return Pt.warn(Ht.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return Pt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IO(e,t,n,r,i,s,o){var l;const a=xO(e);a.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Pt.error(g)),t.push(a);const u=TO().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([a,u]);mO(s)||uO(s,c.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[oO]="firebase",d.update=!0,f!=null&&(d[sO]=f),i("config",c.measurementId,d),c.measurementId}/**
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
 */class PO{constructor(t){this.app=t}_delete(){return delete Ms[this.app.options.appId],Promise.resolve()}}let Ms={},Fg=[];const zg={};let Tc="dataLayer",AO="gtag",jg,z1,Bg=!1;function OO(){const e=[];if(Ow()&&e.push("This is a browser extension environment."),HC()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:t});Pt.warn(n.message)}}function $O(e,t,n){OO();const r=e.options.appId;if(!r)throw Ht.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(Ms[r]!=null)throw Ht.create("already-exists",{id:r});if(!Bg){cO(Tc);const{wrappedGtag:s,gtagCore:o}=pO(Ms,Fg,zg,Tc,AO);z1=s,jg=o,Bg=!0}return Ms[r]=IO(e,Fg,zg,t,jg,Tc,n),new PO(e)}function RO(e=Mh()){e=We(e);const t=ii(e,xl);return t.isInitialized()?t.getImmediate():NO(e)}function NO(e,t={}){const n=ii(e,xl);if(n.isInitialized()){const i=n.getImmediate();if(co(t,n.getOptions()))return i;throw Ht.create("already-initialized")}return n.initialize({options:t})}function LO(e,t,n,r){e=We(e),CO(z1,Ms[e.app.options.appId],t,n,r).catch(i=>Pt.error(i))}const Ug="@firebase/analytics",Vg="0.8.3";function DO(){yn(new sn(xl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return $O(r,i,n)},"PUBLIC")),yn(new sn("analytics-internal",e,"PRIVATE")),Vt(Ug,Vg),Vt(Ug,Vg,"esm2017");function e(t){try{const n=t.getProvider(xl).getImmediate();return{logEvent:(r,i,s)=>LO(n,r,i,s)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}DO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new bu("@firebase/firestore");function El(e,...t){if(Yi.logLevel<=pe.DEBUG){const n=t.map(Jh);Yi.debug(`Firestore (${os}): ${e}`,...n)}}function Xh(e,...t){if(Yi.logLevel<=pe.ERROR){const n=t.map(Jh);Yi.error(`Firestore (${os}): ${e}`,...n)}}function j1(e,...t){if(Yi.logLevel<=pe.WARN){const n=t.map(Jh);Yi.warn(`Firestore (${os}): ${e}`,...n)}}function Jh(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e="Unexpected state"){const t=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+e;throw Xh(t),new Error(t)}function St(e,t){e||Me()}function Do(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="ok",MO="cancelled",Fs="unknown",fe="invalid-argument",FO="deadline-exceeded",zO="not-found",jO="permission-denied",sf="unauthenticated",BO="resource-exhausted",Qi="failed-precondition",UO="aborted",VO="out-of-range",B1="unimplemented",HO="internal",WO="unavailable";class ne extends an{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class GO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class qO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KO{constructor(t){this.auth=null,t.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(St(typeof t.accessToken=="string"),new U1(t.accessToken,new pt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}}class YO{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(St(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class QO{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new YO(this.t,this.i,this.o,this.u))}start(t,n){t.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XO{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JO{constructor(t){this.m=t,this.appCheck=null,t.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(St(typeof t.token=="string"),new XO(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(t,n,r,i,s,o,l,a){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class go{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new go("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof go&&t.projectId===this.projectId&&t.database===this.database}}class vo{constructor(t,n,r){n===void 0?n=0:n>t.length&&Me(),r===void 0?r=t.length-n:r>t.length-n&&Me(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return vo.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof vo?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ve extends vo{construct(t,n,r){return new Ve(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ne(fe,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ve(n)}static emptyPath(){return new Ve([])}}const e$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends vo{construct(t,n,r){return new kt(t,n,r)}static isValidIdentifier(t){return e$.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ne(fe,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new ne(fe,"Path has trailing escape character: "+t);const a=t[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new ne(fe,"Path has invalid escape sequence: "+t);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ne(fe,"Unterminated ` in path: "+t);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.path=t}static fromPath(t){return new Bt(Ve.fromString(t))}static fromName(t){return new Bt(Ve.fromString(t).popFirst(5))}static empty(){return new Bt(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ve.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ve.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bt(new Ve(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(e,t,n){if(!n)throw new ne(fe,`Function ${e}() cannot be called with an empty ${t}.`)}function Wg(e){if(!Bt.isDocumentKey(e))throw new ne(fe,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Gg(e){if(Bt.isDocumentKey(e))throw new ne(fe,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Zh(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Me()}function as(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ne(fe,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zh(e);throw new ne(fe,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t$(e){return e==null}function _l(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qg,ae;function Kg(e){if(e===void 0)return Xh("RPC_ERROR","HTTP error has no status"),Fs;switch(e){case 200:return Hg;case 400:return Qi;case 401:return sf;case 403:return jO;case 404:return zO;case 409:return UO;case 416:return VO;case 429:return BO;case 499:return MO;case 500:return Fs;case 501:return B1;case 503:return WO;case 504:return FO;default:return e>=200&&e<300?Hg:e>=400&&e<500?Qi:e>=500&&e<600?HO:Fs}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ae=qg||(qg={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";class r$ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.p=n+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(t,n,r,i,s){const o=this.T(t,n);El("RestConnection","Sending: ",o,r);const l={};return this.A(l,i,s),this.R(t,o,l,r).then(a=>(El("RestConnection","Received: ",a),a),a=>{throw j1("RestConnection",`${t} failed with error: `,a,"url: ",o,"request:",r),a})}P(t,n,r,i,s,o){return this.I(t,n,r,i,s)}A(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+os,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}T(t,n){const r=n$[t];return`${this.p}/v1/${n}:${r}`}}{constructor(t,n){super(t),this.V=n}N(t,n){throw new Error("Not supported by FetchConnection")}async R(t,n,r,i){const s=JSON.stringify(i);let o;try{o=await this.V(n,{method:"POST",headers:r,body:s})}catch(l){throw new ne(Kg(l.status),"Request failed with error: "+l.statusText)}if(!o.ok)throw new ne(Kg(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i$(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${static D(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=i$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function yo(e,t){return e<t?-1:e>t?1:0}function H1(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ne(fe,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(fe,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new ne(fe,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ne(fe,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new At(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?yo(this.nanoseconds,t.nanoseconds):yo(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Jt(t)}static min(){return new Jt(new At(0,0))}static max(){return new Jt(new At(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Mo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,n){this.comparator=t,this.root=n||Ye.EMPTY}insert(t,n){return new kl(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new kl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ca(this.root,t,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ca(this.root,t,this.comparator,!0)}}class ca{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:Ye.EMPTY,this.right=s!=null?s:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Ye(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Me();const t=this.left.check();if(t!==this.right.check())throw Me();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Me()}get value(){throw Me()}get color(){throw Me()}get left(){throw Me()}get right(){throw Me()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t){this.comparator=t,this.data=new kl(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qg(this.data.getIterator())}getIteratorFrom(t){return new Qg(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Cl)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Cl(this.comparator);return n.data=t,n}}class Qg{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new Zr([])}unionWith(t){let n=new Cl(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Zr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return H1(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Fn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Fn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fn.EMPTY_BYTE_STRING=new Fn("");const o$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wo(e){if(St(!!e),typeof e=="string"){let t=0;const n=o$.exec(e);if(St(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Et(e.seconds),nanos:Et(e.nanos)}}function Et(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function of(e){return typeof e=="string"?Fn.fromBase64String(e):Fn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function G1(e){const t=e.mapValue.fields.__previous_value__;return W1(t)?G1(t):t}function af(e){const t=wo(e.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}function lf(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?W1(e)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9007199254740991:10:Me()}function uf(e,t){if(e===t)return!0;const n=lf(e);if(n!==lf(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return af(e).isEqual(af(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=wo(r.timestampValue),o=wo(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return of(r.bytesValue).isEqual(of(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Et(r.geoPointValue.latitude)===Et(i.geoPointValue.latitude)&&Et(r.geoPointValue.longitude)===Et(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Et(r.integerValue)===Et(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Et(r.doubleValue),o=Et(i.doubleValue);return s===o?_l(s)===_l(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return H1(e.arrayValue.values||[],t.arrayValue.values||[],uf);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Yg(s)!==Yg(o))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(o[l]===void 0||!uf(s[l],o[l])))return!1;return!0}(e,t);default:return Me()}}function Xg(e){return!!e&&"nullValue"in e}function Jg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ic(e){return!!e&&"mapValue"in e}function zs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Mo(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=zs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=zs(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ic(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=zs(n)}setAll(t){let n=kt.emptyPath(),r={},i=[];t.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=zs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return uf(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Mo(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ct(zs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,n,r,i,s,o){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new cn(t,0,Jt.min(),Jt.min(),Ct.empty(),0)}static newFoundDocument(t,n,r){return new cn(t,1,n,Jt.min(),r,0)}static newNoDocument(t,n){return new cn(t,2,n,Jt.min(),Ct.empty(),0)}static newUnknownDocument(t,n){return new cn(t,3,n,Jt.min(),Ct.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Jt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof cn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class a${constructor(t,n=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.$=null}}function Zg(e,t=null,n=[],r=[],i=null,s=null,o=null){return new a$(e,t,n,r,i,s,o)}class ev{constructor(t,n){this.position=t,this.inclusive=n}}class Na{constructor(t,n="asc"){this.field=t,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l${constructor(t,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}function u$(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function c$(e){for(const t of e.filters)if(t.q())return t.field;return null}function tv(e){const t=Do(e);if(t.O===null){t.O=[];const n=c$(t),r=u$(t);if(n!==null&&r===null)n.isKeyField()||t.O.push(new Na(n)),t.O.push(new Na(kt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.O.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.O.push(new Na(kt.keyField(),s))}}}return t.O}function d$(e){const t=Do(e);if(!t.k)if(t.limitType==="F")t.k=Zg(t.path,t.collectionGroup,tv(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of tv(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Na(s.field,o))}const r=t.endAt?new ev(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ev(t.startAt.position,t.startAt.inclusive):null;t.k=Zg(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.k}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f$(e,t){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!_l(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(t)?function(n){return{integerValue:""+n}}(t):function(n,r){if(n.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_l(r)?"-0":r}}(e,t)}/**
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
 */class Tu{constructor(){this._=void 0}}class h$ extends Tu{}class p$ extends Tu{constructor(t){super(),this.elements=t}}class m$ extends Tu{constructor(t){super(),this.elements=t}}class g$ extends Tu{constructor(t,n){super(),this.L=t,this.M=n}}class jr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new jr}static exists(t){return new jr(void 0,t)}static updateTime(t){return new jr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class Iu{}class q1 extends Iu{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ep extends Iu{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class K1 extends Iu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v$ extends Iu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class S${constructor(t,n){this.databaseId=t,this.C=n}}function cf(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function b$(e,t){return e.C?t.toBase64():t.toUint8Array()}function x$(e,t){return cf(e,t.toTimestamp())}function df(e){return St(!!e),Jt.fromTimestamp(function(t){const n=wo(t);return new At(n.seconds,n.nanos)}(e))}function tp(e,t){return function(n){return new Ve(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Tl(e,t){return tp(e.databaseId,t.path)}function ff(e,t){const n=function(i){const s=Ve.fromString(i);return St(Q1(s)),s}(t);if(n.get(1)!==e.databaseId.projectId)throw new ne(fe,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ne(fe,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Bt((St((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function nv(e,t){return tp(e.databaseId,t)}function Y1(e){return new Ve(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rv(e,t,n){return{name:Tl(e,t),fields:n.value.mapValue.fields}}function E$(e,t){return"found"in t?function(n,r){St(!!r.found),r.found.name,r.found.updateTime;const i=ff(n,r.found.name),s=df(r.found.updateTime),o=new Ct({mapValue:{fields:r.found.fields}});return cn.newFoundDocument(i,s,o)}(e,t):"missing"in t?function(n,r){St(!!r.missing),St(!!r.readTime);const i=ff(n,r.missing),s=df(r.readTime);return cn.newNoDocument(i,s)}(e,t):Me()}function _$(e,t){let n;if(t instanceof q1)n={update:rv(e,t.key,t.value)};else if(t instanceof K1)n={delete:Tl(e,t.key)};else if(t instanceof ep)n={update:rv(e,t.key,t.data),updateMask:I$(t.fieldMask)};else{if(!(t instanceof v$))return Me();n={verify:Tl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof h$)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof p$)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof m$)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof g$)return{fieldPath:s.field.canonicalString(),increment:o.M};throw Me()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:x$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Me()}(e,t.precondition)),n}function k$(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=nv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=nv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(c=>function(f){if(f.op==="=="){if(Jg(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NAN"}};if(Xg(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Jg(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NOT_NAN"}};if(Xg(f.value))return{unaryFilter:{field:ai(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(f.field),op:T$(f.op),value:f.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(c){return{field:ai(c.field),direction:C$(c.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||t$(u)?u:{value:u}}(e,t.limit);var l;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(t.endAt)),n}function C$(e){return y$[e]}function T$(e){return w$[e]}function ai(e){return{fieldPath:e.canonicalString()}}function I$(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Q1(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e){return new S$(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P$ extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.tt=r,this.L=i,this.et=!1}nt(){if(this.et)throw new ne(Qi,"The client has already been terminated.")}I(t,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.tt.I(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===sf&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(Fs,i.toString())})}P(t,n,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.tt.P(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===sf&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne(Fs,s.toString())})}terminate(){this.et=!0}}async function rp(e,t){const n=Do(e),r=Y1(n.L)+"/documents",i={writes:t.map(s=>_$(n.L,s))};await n.I("Commit",r,i)}async function A$(e,t){const n=Do(e),r=Y1(n.L)+"/documents",i={documents:t.map(a=>Tl(n.L,a))},s=await n.P("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(a=>{const u=E$(n.L,a);o.set(u.key.toString(),u)});const l=[];return t.forEach(a=>{const u=o.get(a.toString());St(!!u),l.push(u)}),l}async function O$(e,t){const n=Do(e),r=k$(n.L,d$(t));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,l){const a=ff(s,o.name),u=df(o.updateTime),c=new Ct({mapValue:{fields:o.fields}}),f=cn.newFoundDocument(a,u,c);return l&&f.setHasCommittedMutations(),l?f.setHasCommittedMutations():f}(n.L,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new Map;function Fo(e){if(e._terminated)throw new ne(Qi,"The client has already been terminated.");if(!js.has(e)){El("ComponentProvider","Initializing Datastore");const s=function(a){return new r$(a,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new ZO(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=np(e._databaseId),l=function(a,u,c,f){return new P$(a,u,c,f)}(e._authCredentials,e._appCheckCredentials,s,o);js.set(e,l)}var t,n,r,i;/**
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
*/return js.get(e)}class iv{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new ne(fe,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ne(fe,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new ne(fe,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(Qi,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ne(Qi,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iv(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GO;switch(n.type){case"gapi":const r=n.client;return new QO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(fe,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=js.get(t);n&&(El("ComponentProvider","Removing Datastore"),js.delete(t),n.terminate())}(this),Promise.resolve()}}function $$(e,t){const n=typeof e=="object"?e:Mh(),r=typeof e=="string"?e:t||"(default)",i=ii(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=YC("firestore");s&&R$(i,...s)}return i}function R$(e,t,n,r={}){var i;const s=(e=as(e,Pu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&j1("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=pt.MOCK_USER;else{o=JC(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new ne(fe,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(a)}e._authCredentials=new qO(new U1(o,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}}class Au{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Au(this.firestore,t,this._query)}}class vr extends Au{constructor(t,n,r){super(t,n,new l$(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new Bt(t))}withConverter(t){return new vr(this.firestore,t,this._path)}}function ip(e,t,...n){if(e=We(e),V1("collection","path",t),e instanceof Pu){const r=Ve.fromString(t,...n);return Gg(r),new vr(e,null,r)}{if(!(e instanceof dt||e instanceof vr))throw new ne(fe,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ve.fromString(t,...n));return Gg(r),new vr(e.firestore,null,r)}}function ls(e,t,...n){if(e=We(e),arguments.length===1&&(t=s$.D()),V1("doc","path",t),e instanceof Pu){const r=Ve.fromString(t,...n);return Wg(r),new dt(e,null,new Bt(r))}{if(!(e instanceof dt||e instanceof vr))throw new ne(fe,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ve.fromString(t,...n));return Wg(r),new dt(e.firestore,e instanceof vr?e.converter:null,new Bt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xi(Fn.fromBase64String(t))}catch(n){throw new ne(fe,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Xi(Fn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ne(fe,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ne(fe,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ne(fe,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return yo(this._lat,t._lat)||yo(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$=/^__.*__$/;class L${constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ep(t,this.data,this.fieldMask,n,this.fieldTransforms):new q1(t,this.data,n,this.fieldTransforms)}}class X1{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ep(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function J1(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Me()}}class ap{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.L=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(t){return new ap(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.it({path:r,ut:!1});return i.ct(t),i}at(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.it({path:r,ut:!1});return i.rt(),i}ht(t){return this.it({path:void 0,ut:!0})}lt(t){return Il(t,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let t=0;t<this.path.length;t++)this.ct(this.path.get(t))}ct(t){if(t.length===0)throw this.lt("Document fields must not be empty");if(J1(this.st)&&N$.test(t))throw this.lt('Document fields cannot begin and end with "__"')}}class D${constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.L=r||np(t)}wt(t,n,r,i=!1){return new ap({st:t,methodName:n,dt:r,path:kt.emptyPath(),ut:!1,ft:i},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function Z1(e){const t=e._freezeSettings(),n=np(e._databaseId);return new D$(e._databaseId,!!t.ignoreUndefinedProperties,n)}function M$(e,t,n,r,i,s={}){const o=e.wt(s.merge||s.mergeFields?2:0,t,n,i);lp("Data must be an object, but it was:",o,r);const l=eS(r,o);let a,u;if(s.merge)a=new Zr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=hf(t,f,n);if(!o.contains(d))throw new ne(fe,`Field '${d}' is specified in your field mask but missing from your input data.`);nS(c,d)||c.push(d)}a=new Zr(c),u=o.fieldTransforms.filter(f=>a.covers(f.field))}else a=null,u=o.fieldTransforms;return new L$(new Ct(l),a,u)}class $u extends sp{_toFieldTransform(t){if(t.st!==2)throw t.st===1?t.lt(`${this._methodName}() can only appear at the top level of your update data`):t.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $u}}function F$(e,t,n,r){const i=e.wt(1,t,n);lp("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();Mo(r,(a,u)=>{const c=up(t,a,n);u=We(u);const f=i.at(c);if(u instanceof $u)s.push(c);else{const d=Ru(u,f);d!=null&&(s.push(c),o.set(c,d))}});const l=new Zr(s);return new X1(o,l,i.fieldTransforms)}function z$(e,t,n,r,i,s){const o=e.wt(1,t,n),l=[hf(t,r,n)],a=[i];if(s.length%2!=0)throw new ne(fe,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)l.push(hf(t,s[d])),a.push(s[d+1]);const u=[],c=Ct.empty();for(let d=l.length-1;d>=0;--d)if(!nS(u,l[d])){const g=l[d];let y=a[d];y=We(y);const m=o.at(g);if(y instanceof $u)u.push(g);else{const S=Ru(y,m);S!=null&&(u.push(g),c.set(g,S))}}const f=new Zr(u);return new X1(c,f,o.fieldTransforms)}function Ru(e,t){if(tS(e=We(e)))return lp("Unsupported field value:",t,e),eS(e,t);if(e instanceof sp)return function(n,r){if(!J1(r.st))throw r.lt(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ut&&t.st!==4)throw t.lt("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let l=Ru(o,r.ht(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=We(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return f$(r.L,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=At.fromDate(n);return{timestampValue:cf(r.L,i)}}if(n instanceof At){const i=new At(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cf(r.L,i)}}if(n instanceof op)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xi)return{bytesValue:b$(r.L,n._byteString)};if(n instanceof dt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.lt(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.lt(`Unsupported field value: ${Zh(n)}`)}(e,t)}function eS(e,t){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Mo(e,(r,i)=>{const s=Ru(i,t.ot(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tS(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof At||e instanceof op||e instanceof Xi||e instanceof dt||e instanceof sp)}function lp(e,t,n){if(!tS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zh(n);throw r==="an object"?t.lt(e+" a custom object"):t.lt(e+" "+r)}}function hf(e,t,n){if((t=We(t))instanceof Ou)return t._internalPath;if(typeof t=="string")return up(e,t);throw Il("Field path arguments must be of type string or ",e,!1,void 0,n)}const j$=new RegExp("[~\\*/\\[\\]]");function up(e,t,n){if(t.search(j$)>=0)throw Il(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ou(...t.split("."))._internalPath}catch{throw Il(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Il(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new ne(fe,l+e+a)}function nS(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(U$("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iS extends rS{data(){return super.data()}}class B${constructor(t,n){this._docs=n,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,n){this._docs.forEach(t,n)}}function U$(e,t){return typeof t=="string"?up(e,t):t instanceof Ou?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V$(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class sS extends class{convertValue(t,n="none"){switch(lf(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(of(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Me()}}convertObject(t,n){const r={};return Mo(t.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new op(Et(t.latitude),Et(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=G1(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(af(t));default:return null}}convertTimestamp(t){const n=wo(t);return new At(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ve.fromString(t);St(Q1(r));const i=new go(r.get(1),r.get(3)),s=new Bt(r.popFirst(5));return i.isEqual(n)||Xh(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xi(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function oS(e){const t=Fo((e=as(e,dt)).firestore),n=new sS(e.firestore);return A$(t,[e._key]).then(r=>{St(r.length===1);const i=r[0];return new rS(e.firestore,n,e._key,i.isFoundDocument()?i:null,e.converter)})}function aS(e){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(B1,"limitToLast() queries require specifying at least one orderBy() clause")})((e=as(e,Au))._query);const t=Fo(e.firestore),n=new sS(e.firestore);return O$(t,e._query).then(r=>{const i=r.map(s=>new iS(e.firestore,n,s.key,s,e.converter));return e._query.limitType==="L"&&i.reverse(),new B$(e,i)})}function lS(e,t,n){const r=V$((e=as(e,dt)).converter,t,n),i=M$(Z1(e.firestore),"setDoc",e._key,r,e.converter!==null,n);return rp(Fo(e.firestore),[i.toMutation(e._key,jr.none())])}function H$(e,t,n,...r){const i=Z1((e=as(e,dt)).firestore);let s;return s=typeof(t=We(t))=="string"||t instanceof Ou?z$(i,"updateDoc",e._key,t,n,r):F$(i,"updateDoc",e._key,t),rp(Fo(e.firestore),[s.toMutation(e._key,jr.exists(!0))])}function W$(e){return rp(Fo((e=as(e,dt)).firestore),[new K1(e._key,jr.none())])}(function(e){os=e})(`${Io}_lite`),yn(new sn("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Pu(new KO(e.getProvider("auth-internal")),new JO(e.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ne(fe,'"projectId" not provided in firebase.initializeApp.');return new go(s.options.projectId,o)}(r,t),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),Vt("firestore-lite","3.7.1",""),Vt("firestore-lite","3.7.1","esm2017");const G$={apiKey:"AIzaSyCYMmxD3Z2aLhQ3Zw8-POeefSQcKQWhjUo",authDomain:"lune-4f6b9.firebaseapp.com",projectId:"lune-4f6b9",storageBucket:"lune-4f6b9.appspot.com",messagingSenderId:"816520660926",appId:"1:816520660926:web:060595b47dd65787ea9bef"},cp=zw(G$);RO(cp);const Nu=vA(cp),kr=$$(cp),q$=async({email:e,password:t})=>{try{const n=await ZI(Nu,e,t),{uid:r}=n.user;return{ok:!0,uid:r,email:e}}catch(n){return console.log(n),{ok:!1,errorMessage:n.message}}},K$=async({email:e,password:t})=>{try{const n=await eP(Nu,e,t),{uid:r}=n.user;return{ok:!0,uid:r,email:e}}catch(n){return console.log(n),{ok:!1,errorMessage:n.message}}},Y$=async()=>await Nu.signOut(),Q$=e=>async t=>{t(Cw());const n=await q$(e);if(t(X$(e,n.uid)),!n.ok)return t(dp());t(Nh(n))},X$=(e,t)=>async n=>{const{name:r,numberPhone:i,direccion:s}=e,o={name:r,numberPhone:i,direccion:s,rol:"Cliente",imagen:"https://res.cloudinary.com/dssccuwn8/image/upload/v1670099198/assets/user_img_d9ktvt.png"},l=ls(kr,`users/${t}`);lS(l,o),n(Tw(o))},J$=({email:e,password:t})=>async n=>{n(Cw());const r=await K$({email:e,password:t});if(!r.ok)return n(kw(r));n(Nh(r))},Z$=e=>async t=>{const n=ls(kr,`users/${e}`),r=await oS(n);try{t(Tw(r.data()))}catch{}},dp=()=>async e=>{await Y$(),e(kw()),localStorage.clear()},eR=()=>{const e=Sn(),{status:t,name:n}=wn(i=>i.auth);return z(nC,{children:[z(rC,{children:[v(iC,{src:Ch}),z(sC,{children:[v(vs,{to:"/",children:"Inicio"}),v(vs,{to:"/tienda",children:"Tienda"}),v(vs,{to:"/sobreMi",children:"Sobre mi"}),v(vs,{to:"/contacto",children:"Contacto"})]})]}),t==="authenticated"?z(Ym,{children:[z(oC,{children:["Bienvenido, ",v(vs,{to:"profile",children:n})]}),v(lC,{onClick:()=>{e(dp())},children:v(aC,{src:tC})})]}):z(Ym,{children:[v(Qm,{to:"/login",children:"Iniciar Sesion"}),v(Qm,{to:"/register",children:"Registrarse"})]})]})},tR=x.div`
  z-index: 10000;
  background-color: #f8bfb3;
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`,nR=x.div`
  border: 0.5rem solid #fff;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border-left-color: #71c2b1;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,uS=()=>v(tR,{children:v(nR,{})}),rR="/assets/bg_wave_contact.9706c431.svg",iR=x.div`
  background: no-repeat center/cover url(${rR});
  display: flex;
  min-height: 80vh;
  width: 100%;
`,sR=x.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`,oR=x.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,aR=x.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`,lR=x.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 35%;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 30%;
  }
`,uR=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: 1rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,cR=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,dR=x.div`
  /* background-color: brown; */
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 3rem;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 2rem;
  }
`,fR=x.img`
  width: 3rem;

  @media screen and (max-width: 1366px) {
    width: 2rem;
  }
`,hR=x.p`
  font-size: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,cS="/assets/mail_icon.03a7a3d8.svg",pR=()=>z(iR,{children:[v(sR,{children:v(oR,{src:Ch})}),z(aR,{children:[z(lR,{children:[v(uR,{}),v(cR,{children:"Contacto"})]}),z(dR,{children:[v(fR,{src:cS}),v(hR,{children:": mail.contacto@lunedesign.com"})]})]})]}),mR="/assets/Logo-Face.f16490e5.png",gR="/assets/bg_wave_top.187b2671.svg",vR=x.div`
  background: no-repeat center/cover url(${gR});
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
`,yR=x.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`,wR=x.img`
  width: 47rem;

  @media screen and (max-width: 1680px) {
    width: 35rem;
  }

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,SR=x.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`,bR=x.div`
  /* background-color: blueviolet; */
  align-items: flex-end;
  display: flex;
  height: 50%;
  width: 100%;

  h1 {
    margin: 0;
  }
`,xR=x.h1`
  display: flex;
  flex-direction: column;
`,sv=x.span`
  color: #1e1e1e;
  font-family: "Bowlby One SC", cursive;
  font-size: 6rem;

  @media screen and (max-width: 1366px) {
    font-size: 4.5rem;
  }
`,ER=x.div`
  /* background-color: brown; */
  height: 50%;
  width: 65%;
`,_R=x.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.1rem;
  }
`,kR=x.a`
  background-color: #71c2b1;
  border-radius: 2rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  font-size: 1rem;
  padding: 0.7rem 5rem;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1366px) {
    padding: 0.6rem 3.5rem;
  }
`,CR=()=>{const e=jn();return z(vR,{children:[v(yR,{children:v(wR,{src:mR})}),z(SR,{children:[v(bR,{children:z(xR,{children:[v(sv,{children:"LUNE"}),v(sv,{children:"DESIGN"})]})}),z(ER,{children:[v(_R,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),v(kR,{onClick:()=>e("/sobreMi"),children:"Saber m\xE1s"})]})]})]})},TR=x.div`
  background-color: #f8bfb3;
  min-height: 80vh;
  width: 100%;
`,IR=x.div`
  /* background-color: aqua; */
  align-items: flex-end;
  display: flex;
  height: 20%;
  width: 100%;
`,PR=x.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,AR=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,OR=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 11rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,$R=x.div`
  /* background-color: blueviolet; */
  height: 80%;
  width: 100%;
`,RR=x.a`
  background: #fff;
  height: 100%;
  text-decoration: none;
  width: 100%;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`,NR=x.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  position: absolute;

  justify-content: center;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`,LR=x.img`
  border-radius: 3px;
  height: 80%;
  width: 93%;
  margin-top: 3%;
`,DR=x.h3`
  font-size: 1.3rem;
  margin: 0 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,MR=x.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s ease 0s;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`,FR=x.h3`
  border-bottom: 1px solid #62a596;
  height: auto;
  margin: 1rem 1rem 0;
  padding-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`,zR=x.p`
  height: 70%;
  margin: 1.5rem;
  overflow-y: scroll;

  @media screen and (max-width: 1366px) {
    height: 45%;
  }
`,dS=Ew({name:"productoActivo",initialState:{id:null,title:null,description:null,precio:null,imagen:null,isLoading:!1},reducers:{setActiveProduct:(e,{payload:t})=>{e.id=t.id,e.title=t.title,e.description=t.description,e.precio=t.precio,e.imagen=t.imagen},clearActiveProduct:e=>{e.id=null,e.title=null,e.description=null,e.precio=null,e.imagen=null,e.isLoading=!1},setImagenNewProduct:(e,{payload:t})=>{e.imagen=t},setNewProduct:(e,{payload:t})=>{e.id=t.id,e.title=t.title,e.description=t.description,e.precio=t.precio},isLoadingImage:e=>{e.isLoading=!0},isNotLoadingImage:e=>{e.isLoading=!1}}}),{setActiveProduct:Dr,clearActiveProduct:fS,setImagenNewProduct:jR,setNewProduct:BR,isLoadingImage:hS,isNotLoadingImage:pS}=dS.actions,UR=async e=>{if(!e)return console.log("No tenemos ningun archivo para subir.");const t="https://api.cloudinary.com/v1_1/dssccuwn8/upload",n=new FormData;n.append("upload_preset","lune-app"),n.append("file",e);try{const r=await fetch(t,{method:"POST",body:n});if(!r.ok)throw new Error("No se pudo subir el archivo.");return(await r.json()).secure_url}catch{console.log("No tenemos ningun archivo para subir.")}},VR=({title:e,precio:t,description:n})=>async(r,i)=>{const{imagen:s}=i().productoActivo;r(BR({title:e,precio:t,description:n}));const o="https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg",l={title:e,precio:t,description:n,imagen:s!=null?s:o},a=ls(ip(kr,"productos"));lS(a,l)},HR=(e=[])=>async t=>{const n=await UR(e[0]);t(jR(n)),t(pS())},WR=()=>async(e,t)=>{const{id:n}=t().productoActivo;await W$(ls(kr,`productos/${n}`)),e(fS()),location.reload()},GR=({title:e,precio:t,description:n})=>async(r,i)=>{const{imagen:s,id:o}=i().productoActivo,l="https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg",a={title:e,precio:t,description:n,imagen:s!=null?s:l},u=ls(kr,`productos/${o}`);H$(u,a)},qR=({title:e,description:t,id:n,precio:r,imagen:i})=>{const s=jn(),o=Sn();return z(RR,{onClick:()=>{o(Dr({title:e,description:t,id:n,precio:r,imagen:i})),s(`/producto/${n}`)},children:[z(NR,{children:[v(LR,{src:i}),v(DR,{children:e})]}),z(MR,{children:[v(FR,{children:e}),v(zR,{children:t})]})]})};function ov(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function fp(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:ov(t[n])&&ov(e[n])&&Object.keys(t[n]).length>0&&fp(e[n],t[n])})}const mS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Xe(){const e=typeof document<"u"?document:{};return fp(e,mS),e}const KR={document:mS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function qe(){const e=typeof window<"u"?window:{};return fp(e,KR),e}function YR(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(n){t.__proto__=n}})}class rr extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),YR(this))}}function zo(e=[]){const t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...zo(n)):t.push(n)}),t}function gS(e,t){return Array.prototype.filter.call(e,t)}function QR(e){const t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function XR(e,t){if(typeof e!="string")return[e];const n=[],r=t.querySelectorAll(e);for(let i=0;i<r.length;i+=1)n.push(r[i]);return n}function q(e,t){const n=qe(),r=Xe();let i=[];if(!t&&e instanceof rr)return e;if(!e)return new rr(i);if(typeof e=="string"){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let o="div";s.indexOf("<li")===0&&(o="ul"),s.indexOf("<tr")===0&&(o="tbody"),(s.indexOf("<td")===0||s.indexOf("<th")===0)&&(o="tr"),s.indexOf("<tbody")===0&&(o="table"),s.indexOf("<option")===0&&(o="select");const l=r.createElement(o);l.innerHTML=s;for(let a=0;a<l.childNodes.length;a+=1)i.push(l.childNodes[a])}else i=XR(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)i.push(e);else if(Array.isArray(e)){if(e instanceof rr)return e;i=e}return new rr(QR(i))}q.fn=rr.prototype;function JR(...e){const t=zo(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...t)}),this}function ZR(...e){const t=zo(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...t)}),this}function eN(...e){const t=zo(e.map(n=>n.split(" ")));this.forEach(n=>{t.forEach(r=>{n.classList.toggle(r)})})}function tN(...e){const t=zo(e.map(n=>n.split(" ")));return gS(this,n=>t.filter(r=>n.classList.contains(r)).length>0).length>0}function nN(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(const r in e)this[n][r]=e[r],this[n].setAttribute(r,e[r]);return this}function rN(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function iN(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function sN(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function oN(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);function s(u){const c=u.target;if(!c)return;const f=u.target.dom7EventData||[];if(f.indexOf(u)<0&&f.unshift(u),q(c).is(n))r.apply(c,f);else{const d=q(c).parents();for(let g=0;g<d.length;g+=1)q(d[g]).is(n)&&r.apply(d[g],f)}}function o(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),r.apply(this,c)}const l=t.split(" ");let a;for(let u=0;u<this.length;u+=1){const c=this[u];if(n)for(a=0;a<l.length;a+=1){const f=l[a];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[f]||(c.dom7LiveListeners[f]=[]),c.dom7LiveListeners[f].push({listener:r,proxyListener:s}),c.addEventListener(f,s,i)}else for(a=0;a<l.length;a+=1){const f=l[a];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[f]||(c.dom7Listeners[f]=[]),c.dom7Listeners[f].push({listener:r,proxyListener:o}),c.addEventListener(f,o,i)}}return this}function aN(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);const s=t.split(" ");for(let o=0;o<s.length;o+=1){const l=s[o];for(let a=0;a<this.length;a+=1){const u=this[a];let c;if(!n&&u.dom7Listeners?c=u.dom7Listeners[l]:n&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[l]),c&&c.length)for(let f=c.length-1;f>=0;f-=1){const d=c[f];r&&d.listener===r||r&&d.listener&&d.listener.dom7proxy&&d.listener.dom7proxy===r?(u.removeEventListener(l,d.proxyListener,i),c.splice(f,1)):r||(u.removeEventListener(l,d.proxyListener,i),c.splice(f,1))}}}return this}function lN(...e){const t=qe(),n=e[0].split(" "),r=e[1];for(let i=0;i<n.length;i+=1){const s=n[i];for(let o=0;o<this.length;o+=1){const l=this[o];if(t.CustomEvent){const a=new t.CustomEvent(s,{detail:r,bubbles:!0,cancelable:!0});l.dom7EventData=e.filter((u,c)=>c>0),l.dispatchEvent(a),l.dom7EventData=[],delete l.dom7EventData}}}return this}function uN(e){const t=this;function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function cN(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function dN(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function fN(){if(this.length>0){const e=qe(),t=Xe(),n=this[0],r=n.getBoundingClientRect(),i=t.body,s=n.clientTop||i.clientTop||0,o=n.clientLeft||i.clientLeft||0,l=n===e?e.scrollY:n.scrollTop,a=n===e?e.scrollX:n.scrollLeft;return{top:r.top+l-s,left:r.left+a-o}}return null}function hN(){const e=qe();return this[0]?e.getComputedStyle(this[0],null):{}}function pN(e,t){const n=qe();let r;if(arguments.length===1)if(typeof e=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(r=0;r<this.length;r+=1)for(const i in e)this[r].style[i]=e[i];return this}if(arguments.length===2&&typeof e=="string"){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function mN(e){return e?(this.forEach((t,n)=>{e.apply(t,[t,n])}),this):this}function gN(e){const t=gS(this,e);return q(t)}function vN(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function yN(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function wN(e){const t=qe(),n=Xe(),r=this[0];let i,s;if(!r||typeof e>"u")return!1;if(typeof e=="string"){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);for(i=q(e),s=0;s<i.length;s+=1)if(i[s]===r)return!0;return!1}if(e===n)return r===n;if(e===t)return r===t;if(e.nodeType||e instanceof rr){for(i=e.nodeType?[e]:e,s=0;s<i.length;s+=1)if(i[s]===r)return!0;return!1}return!1}function SN(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function bN(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return q([]);if(e<0){const n=t+e;return n<0?q([]):q([this[n]])}return q([this[e]])}function xN(...e){let t;const n=Xe();for(let r=0;r<e.length;r+=1){t=e[r];for(let i=0;i<this.length;i+=1)if(typeof t=="string"){const s=n.createElement("div");for(s.innerHTML=t;s.firstChild;)this[i].appendChild(s.firstChild)}else if(t instanceof rr)for(let s=0;s<t.length;s+=1)this[i].appendChild(t[s]);else this[i].appendChild(t)}return this}function EN(e){const t=Xe();let n,r;for(n=0;n<this.length;n+=1)if(typeof e=="string"){const i=t.createElement("div");for(i.innerHTML=e,r=i.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(i.childNodes[r],this[n].childNodes[0])}else if(e instanceof rr)for(r=0;r<e.length;r+=1)this[n].insertBefore(e[r],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function _N(e){return this.length>0?e?this[0].nextElementSibling&&q(this[0].nextElementSibling).is(e)?q([this[0].nextElementSibling]):q([]):this[0].nextElementSibling?q([this[0].nextElementSibling]):q([]):q([])}function kN(e){const t=[];let n=this[0];if(!n)return q([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?q(r).is(e)&&t.push(r):t.push(r),n=r}return q(t)}function CN(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&q(t.previousElementSibling).is(e)?q([t.previousElementSibling]):q([]):t.previousElementSibling?q([t.previousElementSibling]):q([])}return q([])}function TN(e){const t=[];let n=this[0];if(!n)return q([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?q(r).is(e)&&t.push(r):t.push(r),n=r}return q(t)}function IN(e){const t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?q(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return q(t)}function PN(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?q(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return q(t)}function AN(e){let t=this;return typeof e>"u"?q([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function ON(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let i=0;i<r.length;i+=1)t.push(r[i])}return q(t)}function $N(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let i=0;i<r.length;i+=1)(!e||q(r[i]).is(e))&&t.push(r[i])}return q(t)}function RN(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const av={addClass:JR,removeClass:ZR,hasClass:tN,toggleClass:eN,attr:nN,removeAttr:rN,transform:iN,transition:sN,on:oN,off:aN,trigger:lN,transitionEnd:uN,outerWidth:cN,outerHeight:dN,styles:hN,offset:fN,css:pN,each:mN,html:vN,text:yN,is:wN,index:SN,eq:bN,append:xN,prepend:EN,next:_N,nextAll:kN,prev:CN,prevAll:TN,parent:IN,parents:PN,closest:AN,find:ON,children:$N,filter:gN,remove:RN};Object.keys(av).forEach(e=>{Object.defineProperty(q.fn,e,{value:av[e],writable:!0})});function NN(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Pl(e,t=0){return setTimeout(e,t)}function So(){return Date.now()}function LN(e){const t=qe();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function DN(e,t="x"){const n=qe();let r,i,s;const o=LN(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function da(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function MN(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function _t(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const i=e[r];if(i!=null&&!MN(i)){const s=Object.keys(Object(i)).filter(o=>n.indexOf(o)<0);for(let o=0,l=s.length;o<l;o+=1){const a=s[o],u=Object.getOwnPropertyDescriptor(i,a);u!==void 0&&u.enumerable&&(da(t[a])&&da(i[a])?i[a].__swiper__?t[a]=i[a]:_t(t[a],i[a]):!da(t[a])&&da(i[a])?(t[a]={},i[a].__swiper__?t[a]=i[a]:_t(t[a],i[a])):t[a]=i[a])}}}return t}function fa(e,t,n){e.style.setProperty(t,n)}function vS({swiper:e,targetPosition:t,side:n}){const r=qe(),i=-e.translate;let s=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const a=t>i?"next":"prev",u=(f,d)=>a==="next"&&f>=d||a==="prev"&&f<=d,c=()=>{o=new Date().getTime(),s===null&&(s=o);const f=Math.max(Math.min((o-s)/l,1),0),d=.5-Math.cos(f*Math.PI)/2;let g=i+d*(t-i);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}let Pc;function FN(){const e=qe(),t=Xe();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let r=!1;try{const i=Object.defineProperty({},"passive",{get(){r=!0}});e.addEventListener("testPassiveListener",null,i)}catch{}return r}(),gestures:function(){return"ongesturestart"in e}()}}function yS(){return Pc||(Pc=FN()),Pc}let Ac;function zN({userAgent:e}={}){const t=yS(),n=qe(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,a=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d=r==="Win32";let g=r==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&y.indexOf(`${o}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),a&&!d&&(s.os="android",s.android=!0),(u||f||c)&&(s.os="ios",s.ios=!0),s}function jN(e={}){return Ac||(Ac=zN(e)),Ac}let Oc;function BN(){const e=qe();function t(){const n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function UN(){return Oc||(Oc=BN()),Oc}function VN({swiper:e,on:t,emit:n}){const r=qe();let i=null,s=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{s=r.requestAnimationFrame(()=>{const{width:f,height:d}=e;let g=f,y=d;c.forEach(({contentBoxSize:m,contentRect:S,target:h})=>{h&&h!==e.el||(g=S?S.width:(m[0]||m).inlineSize,y=S?S.height:(m[0]||m).blockSize)}),(g!==f||y!==d)&&o()})}),i.observe(e.el))},a=()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",u)}),t("destroy",()=>{a(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",u)})}function HN({swiper:e,extendParams:t,on:n,emit:r}){const i=[],s=qe(),o=(u,c={})=>{const f=s.MutationObserver||s.WebkitMutationObserver,d=new f(g=>{if(g.length===1){r("observerUpdate",g[0]);return}const y=function(){r("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(y):s.setTimeout(y,0)});d.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:typeof c.childList>"u"?!0:c.childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(d)},l=()=>{if(!!e.params.observer){if(e.params.observeParents){const u=e.$el.parents();for(let c=0;c<u.length;c+=1)o(u[c])}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1})}},a=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",a)}const WN={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...s){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[o,...r])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(i,r)})}),t}};function GN(){const e=this;let t,n;const r=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r[0].clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function qN(){const e=this;function t($){return e.isHorizontal()?$:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[$]}function n($,A){return parseFloat($.getPropertyValue(t(A))||0)}const r=e.params,{$wrapperEl:i,size:s,rtlTranslate:o,wrongRTL:l}=e,a=e.virtual&&r.virtual.enabled,u=a?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),f=a?e.virtual.slides.length:c.length;let d=[];const g=[],y=[];let m=r.slidesOffsetBefore;typeof m=="function"&&(m=r.slidesOffsetBefore.call(e));let S=r.slidesOffsetAfter;typeof S=="function"&&(S=r.slidesOffsetAfter.call(e));const h=e.snapGrid.length,p=e.slidesGrid.length;let w=r.spaceBetween,E=-m,_=0,O=0;if(typeof s>"u")return;typeof w=="string"&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),e.virtualSize=-w,o?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(fa(e.wrapperEl,"--swiper-centered-offset-before",""),fa(e.wrapperEl,"--swiper-centered-offset-after",""));const N=r.grid&&r.grid.rows>1&&e.grid;N&&e.grid.initSlides(f);let P;const Y=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter($=>typeof r.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<f;$+=1){P=0;const A=c.eq($);if(N&&e.grid.updateSlide($,A,f,t),A.css("display")!=="none"){if(r.slidesPerView==="auto"){Y&&(c[$].style[t("width")]="");const M=getComputedStyle(A[0]),X=A[0].style.transform,re=A[0].style.webkitTransform;if(X&&(A[0].style.transform="none"),re&&(A[0].style.webkitTransform="none"),r.roundLengths)P=e.isHorizontal()?A.outerWidth(!0):A.outerHeight(!0);else{const oe=n(M,"width"),ye=n(M,"padding-left"),be=n(M,"padding-right"),F=n(M,"margin-left"),H=n(M,"margin-right"),J=M.getPropertyValue("box-sizing");if(J&&J==="border-box")P=oe+F+H;else{const{clientWidth:ue,offsetWidth:j}=A[0];P=oe+ye+be+F+H+(j-ue)}}X&&(A[0].style.transform=X),re&&(A[0].style.webkitTransform=re),r.roundLengths&&(P=Math.floor(P))}else P=(s-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(P=Math.floor(P)),c[$]&&(c[$].style[t("width")]=`${P}px`);c[$]&&(c[$].swiperSlideSize=P),y.push(P),r.centeredSlides?(E=E+P/2+_/2+w,_===0&&$!==0&&(E=E-s/2-w),$===0&&(E=E-s/2-w),Math.abs(E)<1/1e3&&(E=0),r.roundLengths&&(E=Math.floor(E)),O%r.slidesPerGroup===0&&d.push(E),g.push(E)):(r.roundLengths&&(E=Math.floor(E)),(O-Math.min(e.params.slidesPerGroupSkip,O))%e.params.slidesPerGroup===0&&d.push(E),g.push(E),E=E+P+w),e.virtualSize+=P+w,_=P,O+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+S,o&&l&&(r.effect==="slide"||r.effect==="coverflow")&&i.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),N&&e.grid.updateWrapperSize(P,d,t),!r.centeredSlides){const $=[];for(let A=0;A<d.length;A+=1){let M=d[A];r.roundLengths&&(M=Math.floor(M)),d[A]<=e.virtualSize-s&&$.push(M)}d=$,Math.floor(e.virtualSize-s)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-s)}if(d.length===0&&(d=[0]),r.spaceBetween!==0){const $=e.isHorizontal()&&o?"marginLeft":t("marginRight");c.filter((A,M)=>r.cssMode?M!==c.length-1:!0).css({[$]:`${w}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let $=0;y.forEach(M=>{$+=M+(r.spaceBetween?r.spaceBetween:0)}),$-=r.spaceBetween;const A=$-s;d=d.map(M=>M<0?-m:M>A?A+S:M)}if(r.centerInsufficientSlides){let $=0;if(y.forEach(A=>{$+=A+(r.spaceBetween?r.spaceBetween:0)}),$-=r.spaceBetween,$<s){const A=(s-$)/2;d.forEach((M,X)=>{d[X]=M-A}),g.forEach((M,X)=>{g[X]=M+A})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:g,slidesSizesGrid:y}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){fa(e.wrapperEl,"--swiper-centered-offset-before",`${-d[0]}px`),fa(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const $=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(M=>M+$),e.slidesGrid=e.slidesGrid.map(M=>M+A)}if(f!==u&&e.emit("slidesLengthChange"),d.length!==h&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==p&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!a&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const $=`${r.containerModifierClass}backface-hidden`,A=e.$el.hasClass($);f<=r.maxBackfaceHiddenSlides?A||e.$el.addClass($):A&&e.$el.removeClass($)}}function KN(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>r?t.slides.filter(a=>parseInt(a.getAttribute("data-swiper-slide-index"),10)===l)[0]:t.slides.eq(l)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||q([])).each(l=>{n.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!r)break;n.push(o(l))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const l=n[s].offsetHeight;i=l>i?l:i}(i||i===0)&&t.$wrapperEl.css("height",`${i}px`)}function YN(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function QN(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let l=0;l<r.length;l+=1){const a=r[l];let u=a.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-u)/(a.swiperSlideSize+n.spaceBetween),f=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-u)/(a.swiperSlideSize+n.spaceBetween),d=-(o-u),g=d+t.slidesSizesGrid[l];(d>=0&&d<t.size-1||g>1&&g<=t.size||d<=0&&g>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(l),r.eq(l).addClass(n.slideVisibleClass)),a.progress=i?-c:c,a.originalProgress=i?-f:f}t.visibleSlides=q(t.visibleSlides)}function XN(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o}=t;const l=s,a=o;r===0?(i=0,s=!0,o=!0):(i=(e-t.minTranslate())/r,s=i<=0,o=i>=1),Object.assign(t,{progress:i,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!a&&t.emit("reachEnd toEdge"),(l&&!s||a&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function JN(){const e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:i,realIndex:s}=e,o=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let l;o?l=e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):l=t.eq(i),l.addClass(n.slideActiveClass),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));let a=l.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&a.length===0&&(a=t.eq(0),a.addClass(n.slideNextClass));let u=l.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&u.length===0&&(u=t.eq(-1),u.addClass(n.slidePrevClass)),n.loop&&(a.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),u.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}function ZN(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:i,params:s,activeIndex:o,realIndex:l,snapIndex:a}=t;let u=e,c;if(typeof u>"u"){for(let d=0;d<r.length;d+=1)typeof r[d+1]<"u"?n>=r[d]&&n<r[d+1]-(r[d+1]-r[d])/2?u=d:n>=r[d]&&n<r[d+1]&&(u=d+1):n>=r[d]&&(u=d);s.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0)}if(i.indexOf(n)>=0)c=i.indexOf(n);else{const d=Math.min(s.slidesPerGroupSkip,u);c=d+Math.floor((u-d)/s.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),u===o){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}const f=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:f,previousIndex:o,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==f&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function eL(e){const t=this,n=t.params,r=q(e).closest(`.${n.slideClass}`)[0];let i=!1,s;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){i=!0,s=o;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(q(r).attr("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const tL={updateSize:GN,updateSlides:qN,updateAutoHeight:KN,updateSlidesOffset:YN,updateSlidesProgress:QN,updateProgress:XN,updateSlidesClasses:JN,updateActiveIndex:ZN,updateClickedSlide:eL};function nL(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,$wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=DN(s[0],e);return r&&(o=-o),o||0}function rL(e,t){const n=this,{rtlTranslate:r,params:i,$wrapperEl:s,wrapperEl:o,progress:l}=n;let a=0,u=0;const c=0;n.isHorizontal()?a=r?-e:e:u=e,i.roundLengths&&(a=Math.floor(a),u=Math.floor(u)),i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-u:i.virtualTranslate||s.transform(`translate3d(${a}px, ${u}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:u;let f;const d=n.maxTranslate()-n.minTranslate();d===0?f=0:f=(e-n.minTranslate())/d,f!==l&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function iL(){return-this.snapGrid[0]}function sL(){return-this.snapGrid[this.snapGrid.length-1]}function oL(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const a=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>a?c=a:r&&e<u?c=u:c=e,s.updateProgress(c),o.cssMode){const f=s.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return vS({swiper:s,targetPosition:-c,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(d){!s||s.destroyed||d.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd))),!0}const aL={getTranslate:nL,setTranslate:rL,minTranslate:iL,maxTranslate:sL,translateTo:oL};function lL(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}function wS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(i>s?o="next":i<s?o="prev":o="reset"),e.emit(`transition${r}`),t&&i!==s){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function uL(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),wS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function cL(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),wS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const dL={setTransition:lL,transitionStart:uL,transitionEnd:cL};function fL(e=0,t=this.params.speed,n=!0,r,i){if(typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const w=parseInt(e,10);if(!isFinite(w))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=w}const s=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:u,previousIndex:c,activeIndex:f,rtlTranslate:d,wrapperEl:g,enabled:y}=s;if(s.animating&&l.preventInteractionOnTransition||!y&&!r&&!i)return!1;const m=Math.min(s.params.slidesPerGroupSkip,o);let S=m+Math.floor((o-m)/s.params.slidesPerGroup);S>=a.length&&(S=a.length-1);const h=-a[S];if(l.normalizeSlideIndex)for(let w=0;w<u.length;w+=1){const E=-Math.floor(h*100),_=Math.floor(u[w]*100),O=Math.floor(u[w+1]*100);typeof u[w+1]<"u"?E>=_&&E<O-(O-_)/2?o=w:E>=_&&E<O&&(o=w+1):E>=_&&(o=w)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&h<s.translate&&h<s.minTranslate()||!s.allowSlidePrev&&h>s.translate&&h>s.maxTranslate()&&(f||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(h);let p;if(o>f?p="next":o<f?p="prev":p="reset",d&&-h===s.translate||!d&&h===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(h),p!=="reset"&&(s.transitionStart(n,p),s.transitionEnd(n,p)),!1;if(l.cssMode){const w=s.isHorizontal(),E=d?h:-h;if(t===0){const _=s.virtual&&s.params.virtual.enabled;_&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),g[w?"scrollLeft":"scrollTop"]=E,_&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1})}else{if(!s.support.smoothScroll)return vS({swiper:s,targetPosition:E,side:w?"left":"top"}),!0;g.scrollTo({[w?"left":"top"]:E,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(h),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,p),t===0?s.transitionEnd(n,p):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(E){!s||s.destroyed||E.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,p))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0}function hL(e=0,t=this.params.speed,n=!0,r){if(typeof e=="string"){const o=parseInt(e,10);if(!isFinite(o))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=o}const i=this;let s=e;return i.params.loop&&(s+=i.loopedSlides),i.slideTo(s,t,n,r)}function pL(e=this.params.speed,t=!0,n){const r=this,{animating:i,enabled:s,params:o}=r;if(!s)return r;let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<o.slidesPerGroupSkip?1:l;if(o.loop){if(i&&o.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function mL(e=this.params.speed,t=!0,n){const r=this,{params:i,animating:s,snapGrid:o,slidesGrid:l,rtlTranslate:a,enabled:u}=r;if(!u)return r;if(i.loop){if(s&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}const c=a?r.translate:-r.translate;function f(S){return S<0?-Math.floor(Math.abs(S)):Math.floor(S)}const d=f(c),g=o.map(S=>f(S));let y=o[g.indexOf(d)-1];if(typeof y>"u"&&i.cssMode){let S;o.forEach((h,p)=>{d>=h&&(S=p)}),typeof S<"u"&&(y=o[S>0?S-1:S])}let m=0;if(typeof y<"u"&&(m=l.indexOf(y),m<0&&(m=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&r.isBeginning){const S=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(S,e,t,n)}return r.slideTo(m,e,t,n)}function gL(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function vL(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];a-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];a-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function yL(){const e=this,{params:t,$wrapperEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;if(t.loop){if(e.animating)return;s=parseInt(q(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Pl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Pl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}const wL={slideTo:fL,slideToLoop:hL,slideNext:pL,slidePrev:mL,slideReset:gL,slideToClosest:vL,slideToClickedSlide:yL};function SL(){const e=this,t=Xe(),{params:n,$wrapperEl:r}=e,i=r.children().length>0?q(r.children()[0].parentNode):r;i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let s=i.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const a=n.slidesPerGroup-s.length%n.slidesPerGroup;if(a!==n.slidesPerGroup){for(let u=0;u<a;u+=1){const c=q(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);i.append(c)}s=i.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>s.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=s.length);const o=[],l=[];s.each((a,u)=>{q(a).attr("data-swiper-slide-index",u)});for(let a=0;a<e.loopedSlides;a+=1){const u=a-Math.floor(a/s.length)*s.length;l.push(s.eq(u)[0]),o.unshift(s.eq(s.length-u-1)[0])}for(let a=0;a<l.length;a+=1)i.append(q(l[a].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let a=o.length-1;a>=0;a-=1)i.prepend(q(o[a].cloneNode(!0)).addClass(n.slideDuplicateClass))}function bL(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:s,snapGrid:o,rtlTranslate:l}=e;let a;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-o[t]-e.getTranslate();t<r?(a=n.length-r*3+t,a+=r,e.slideTo(a,0,!1,!0)&&c!==0&&e.setTranslate((l?-e.translate:e.translate)-c)):t>=n.length-r&&(a=-n.length+t+r,a+=r,e.slideTo(a,0,!1,!0)&&c!==0&&e.setTranslate((l?-e.translate:e.translate)-c)),e.allowSlidePrev=i,e.allowSlideNext=s,e.emit("loopFix")}function xL(){const e=this,{$wrapperEl:t,params:n,slides:r}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}const EL={loopCreate:SL,loopFix:bL,loopDestroy:xL};function _L(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function kL(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const CL={setGrabCursor:_L,unsetGrabCursor:kL};function TL(e,t=this){function n(r){if(!r||r===Xe()||r===qe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function IL(e){const t=this,n=Xe(),r=qe(),i=t.touchEventsData,{params:s,touches:o,enabled:l}=t;if(!l||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=e;a.originalEvent&&(a=a.originalEvent);let u=q(a.target);if(s.touchEventsTarget==="wrapper"&&!u.closest(t.wrapperEl).length||(i.isTouchEvent=a.type==="touchstart",!i.isTouchEvent&&"which"in a&&a.which===3)||!i.isTouchEvent&&"button"in a&&a.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",f=e.composedPath?e.composedPath():e.path;c&&a.target&&a.target.shadowRoot&&f&&(u=q(f[0]));const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(a.target&&a.target.shadowRoot);if(s.noSwiping&&(g?TL(d,u[0]):u.closest(d)[0])){t.allowClick=!0;return}if(s.swipeHandler&&!u.closest(s.swipeHandler)[0])return;o.currentX=a.type==="touchstart"?a.targetTouches[0].pageX:a.pageX,o.currentY=a.type==="touchstart"?a.targetTouches[0].pageY:a.pageY;const y=o.currentX,m=o.currentY,S=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,h=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(S&&(y<=h||y>=r.innerWidth-h))if(S==="prevent")e.preventDefault();else return;if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=y,o.startY=m,i.touchStartTime=So(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1),a.type!=="touchstart"){let p=!0;u.is(i.focusableElements)&&(p=!1,u[0].nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&q(n.activeElement).is(i.focusableElements)&&n.activeElement!==u[0]&&n.activeElement.blur();const w=p&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||w)&&!u[0].isContentEditable&&a.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function PL(e){const t=Xe(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:l}=n;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}if(r.isTouchEvent&&a.type!=="touchmove")return;const u=a.type==="touchmove"&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c=a.type==="touchmove"?u.pageX:a.pageX,f=a.type==="touchmove"?u.pageY:a.pageY;if(a.preventedByNestedSwiper){s.startX=c,s.startY=f;return}if(!n.allowTouchMove){q(a.target).is(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:f,currentX:c,currentY:f}),r.touchStartTime=So());return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<s.startY&&n.translate<=n.maxTranslate()||f>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(r.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&q(a.target).is(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;s.currentX=c,s.currentY=f;const d=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(d**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let h;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:d*d+g*g>=25&&(h=Math.atan2(Math.abs(g),Math.abs(d))*180/Math.PI,r.isScrolling=n.isHorizontal()?h>i.touchAngle:90-h>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation(),r.isMoved||(i.loop&&!i.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)),n.emit("sliderMove",a),r.isMoved=!0;let y=n.isHorizontal()?d:g;s.diff=y,y*=i.touchRatio,o&&(y=-y),n.swipeDirection=y>0?"prev":"next",r.currentTranslate=y+r.startTranslate;let m=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),y>0&&r.currentTranslate>n.minTranslate()?(m=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**S)):y<0&&r.currentTranslate<n.maxTranslate()&&(m=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**S)),m&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function AL(e){const t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:s,slidesGrid:o,enabled:l}=t;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",a),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=So(),c=u-n.touchStartTime;if(t.allowClick){const p=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(p&&p[0]||a.target),t.emit("tap click",a),c<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(n.lastClickTime=So(),Pl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(r.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let d=0,g=t.slidesSizesGrid[0];for(let p=0;p<o.length;p+=p<r.slidesPerGroupSkip?1:r.slidesPerGroup){const w=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof o[p+w]<"u"?f>=o[p]&&f<o[p+w]&&(d=p,g=o[p+w]-o[p]):f>=o[p]&&(d=p,g=o[o.length-1]-o[o.length-2])}let y=null,m=null;r.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const S=(f-o[d])/g,h=d<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(c>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(S>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?y:d+h):t.slideTo(d)),t.swipeDirection==="prev"&&(S>1-r.longSwipesRatio?t.slideTo(d+h):m!==null&&S<0&&Math.abs(S)>r.longSwipesRatio?t.slideTo(m):t.slideTo(d))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(d+h):t.slideTo(d):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:d+h),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:d))}}function lv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function OL(e){const t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function $L(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let uv=!1;function RL(){}const SS=(e,t)=>{const n=Xe(),{params:r,touchEvents:i,el:s,wrapperEl:o,device:l,support:a}=e,u=!!r.nested,c=t==="on"?"addEventListener":"removeEventListener",f=t;if(!a.touch)s[c](i.start,e.onTouchStart,!1),n[c](i.move,e.onTouchMove,u),n[c](i.end,e.onTouchEnd,!1);else{const d=i.start==="touchstart"&&a.passiveListener&&r.passiveListeners?{passive:!0,capture:!1}:!1;s[c](i.start,e.onTouchStart,d),s[c](i.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:u}:u),s[c](i.end,e.onTouchEnd,d),i.cancel&&s[c](i.cancel,e.onTouchEnd,d)}(r.preventClicks||r.preventClicksPropagation)&&s[c]("click",e.onClick,!0),r.cssMode&&o[c]("scroll",e.onScroll),r.updateOnWindowResize?e[f](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",lv,!0):e[f]("observerUpdate",lv,!0)};function NL(){const e=this,t=Xe(),{params:n,support:r}=e;e.onTouchStart=IL.bind(e),e.onTouchMove=PL.bind(e),e.onTouchEnd=AL.bind(e),n.cssMode&&(e.onScroll=$L.bind(e)),e.onClick=OL.bind(e),r.touch&&!uv&&(t.addEventListener("touchstart",RL),uv=!0),SS(e,"on")}function LL(){SS(this,"off")}const DL={attachEvents:NL,detachEvents:LL},cv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ML(){const e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:i,$el:s}=e,o=i.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const u=(l in o?o[l]:void 0)||e.originalParams,c=cv(e,i),f=cv(e,u),d=i.enabled;c&&!f?(s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(s.addClass(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&s.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(S=>{const h=i[S]&&i[S].enabled,p=u[S]&&u[S].enabled;h&&!p&&e[S].disable(),!h&&p&&e[S].enable()});const g=u.direction&&u.direction!==i.direction,y=i.loop&&(u.slidesPerView!==i.slidesPerView||g);g&&n&&e.changeDirection(),_t(e.params,u);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!m?e.disable():!d&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",u),y&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}function FL(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=qe(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:s*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:u}=o[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=a):u<=n.clientWidth&&(r=a)}return r||"max"}const zL={setBreakpoint:ML,getBreakpoint:FL};function jL(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function BL(){const e=this,{classNames:t,params:n,rtl:r,$el:i,device:s,support:o}=e,l=jL(["initialized",n.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()}function UL(){const e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}const VL={addClasses:BL,removeClasses:UL};function HL(e,t,n,r,i,s){const o=qe();let l;function a(){s&&s()}!q(e).parent("picture")[0]&&(!e.complete||!i)&&t?(l=new o.Image,l.onload=a,l.onerror=a,r&&(l.sizes=r),n&&(l.srcset=n),t&&(l.src=t)):a()}function WL(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let n=0;n<e.imagesToLoad.length;n+=1){const r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}const GL={loadImage:HL,preloadImages:WL};function qL(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const KL={checkOverflow:qL},dv={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function YL(e,t){return function(r={}){const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){_t(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in s)){_t(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),_t(t,r)}}const $c={eventsEmitter:WN,update:tL,translate:aL,transition:dL,slide:wL,loop:EL,grabCursor:CL,events:DL,breakpoints:zL,checkOverflow:KL,classes:VL,images:GL},Rc={};class lt{constructor(...t){let n,r;if(t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=_t({},r),n&&!r.el&&(r.el=n),r.el&&q(r.el).length>1){const l=[];return q(r.el).each(a=>{const u=_t({},r,{el:a});l.push(new lt(u))}),l}const i=this;i.__swiper__=!0,i.support=yS(),i.device=jN({userAgent:r.userAgent}),i.browser=UN(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&i.modules.push(...r.modules);const s={};i.modules.forEach(l=>{l({swiper:i,extendParams:YL(r,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const o=_t({},dv,s);return i.params=_t({},o,Rc,r),i.originalParams=_t({},i.params),i.passedParams=_t({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach(l=>{i.on(l,i.params.on[l])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),i.$=q,Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:q(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEvents:function(){const a=["touchstart","touchmove","touchend","touchcancel"],u=["pointerdown","pointermove","pointerup"];return i.touchEventsTouch={start:a[0],move:a[1],end:a[2],cancel:a[3]},i.touchEventsDesktop={start:u[0],move:u[1],end:u[2]},i.support.touch||!i.params.simulateTouch?i.touchEventsTouch:i.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:So(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.each(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:u}=r;let c=1;if(i.centeredSlides){let f=s[u].swiperSlideSize,d;for(let g=u+1;g<s.length;g+=1)s[g]&&!d&&(f+=s[g].swiperSlideSize,c+=1,f>a&&(d=!0));for(let g=u-1;g>=0;g-=1)s[g]&&!d&&(f+=s[g].swiperSlideSize,c+=1,f>a&&(d=!0))}else if(t==="current")for(let f=u+1;f<s.length;f+=1)(n?o[f]+l[f]-o[u]<a:o[f]-o[u]<a)&&(c+=1);else for(let f=u-1;f>=0;f-=1)o[u]-o[f]<a&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let s;t.params.freeMode&&t.params.freeMode.enabled?(i(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?s=t.slideTo(t.slides.length-1,0,!1,!0):s=t.slideTo(t.activeIndex,0,!1,!0),s||i()),r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.each(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;const r=q(t||n.params.el);if(t=r[0],!t)return!1;t.swiper=n;const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const l=q(t.shadowRoot.querySelector(i()));return l.children=a=>r.children(a),l}return r.children?r.children(i()):q(r).children(i())})();if(o.length===0&&n.params.createElements){const a=Xe().createElement("div");o=q(a),a.className=n.params.wrapperClass,r.append(a),r.children(`.${n.params.slideClass}`).each(u=>{o.append(u)})}return Object.assign(n,{$el:r,el:t,$wrapperEl:o,wrapperEl:o[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:o.css("display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t=!0,n=!0){const r=this,{params:i,$el:s,$wrapperEl:o,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttr("style"),o.removeAttr("style"),l&&l.length&&l.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.$el[0].swiper=null,NN(r)),r.destroyed=!0),null}static extendDefaults(t){_t(Rc,t)}static get extendedDefaults(){return Rc}static get defaults(){return dv}static installModule(t){lt.prototype.__modules__||(lt.prototype.__modules__=[]);const n=lt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>lt.installModule(n)),lt):(lt.installModule(t),lt)}}Object.keys($c).forEach(e=>{Object.keys($c[e]).forEach(t=>{lt.prototype[t]=$c[e][t]})});lt.use([VN,HN]);function bS(e,t,n,r){const i=Xe();return e.params.createElements&&Object.keys(r).forEach(s=>{if(!n[s]&&n.auto===!0){let o=e.$el.children(`.${r[s]}`)[0];o||(o=i.createElement("div"),o.className=r[s],e.$el.append(o)),n[s]=o,t[s]=o}}),n}function QL({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function i(g){let y;return g&&(y=q(g),e.params.uniqueNavElements&&typeof g=="string"&&y.length>1&&e.$el.find(g).length===1&&(y=e.$el.find(g))),y}function s(g,y){const m=e.params.navigation;g&&g.length>0&&(g[y?"addClass":"removeClass"](m.disabledClass),g[0]&&g[0].tagName==="BUTTON"&&(g[0].disabled=y),e.params.watchOverflow&&e.enabled&&g[e.isLocked?"addClass":"removeClass"](m.lockClass))}function o(){if(e.params.loop)return;const{$nextEl:g,$prevEl:y}=e.navigation;s(y,e.isBeginning&&!e.params.rewind),s(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function a(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const g=e.params.navigation;if(e.params.navigation=bS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;const y=i(g.nextEl),m=i(g.prevEl);y&&y.length>0&&y.on("click",a),m&&m.length>0&&m.on("click",l),Object.assign(e.navigation,{$nextEl:y,nextEl:y&&y[0],$prevEl:m,prevEl:m&&m[0]}),e.enabled||(y&&y.addClass(g.lockClass),m&&m.addClass(g.lockClass))}function c(){const{$nextEl:g,$prevEl:y}=e.navigation;g&&g.length&&(g.off("click",a),g.removeClass(e.params.navigation.disabledClass)),y&&y.length&&(y.off("click",l),y.removeClass(e.params.navigation.disabledClass))}n("init",()=>{e.params.navigation.enabled===!1?d():(u(),o())}),n("toEdge fromEdge lock unlock",()=>{o()}),n("destroy",()=>{c()}),n("enable disable",()=>{const{$nextEl:g,$prevEl:y}=e.navigation;g&&g[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),y&&y[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),n("click",(g,y)=>{const{$nextEl:m,$prevEl:S}=e.navigation,h=y.target;if(e.params.navigation.hideOnClick&&!q(h).is(S)&&!q(h).is(m)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let p;m?p=m.hasClass(e.params.navigation.hiddenClass):S&&(p=S.hasClass(e.params.navigation.hiddenClass)),r(p===!0?"navigationShow":"navigationHide"),m&&m.toggleClass(e.params.navigation.hiddenClass),S&&S.toggleClass(e.params.navigation.hiddenClass)}});const f=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),u(),o()},d=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),c()};Object.assign(e.navigation,{enable:f,disable:d,update:o,init:u,destroy:c})}function li(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function XL({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let s,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function a(m,S){const{bulletActiveClass:h}=e.params.pagination;m[S]().addClass(`${h}-${S}`)[S]().addClass(`${h}-${S}-${S}`)}function u(){const m=e.rtl,S=e.params.pagination;if(l())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.pagination.$el;let w;const E=e.params.loop?Math.ceil((h-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(w=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),w>h-1-e.loopedSlides*2&&(w-=h-e.loopedSlides*2),w>E-1&&(w-=E),w<0&&e.params.paginationType!=="bullets"&&(w=E+w)):typeof e.snapIndex<"u"?w=e.snapIndex:w=e.activeIndex||0,S.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let O,N,P;if(S.dynamicBullets&&(s=_.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),p.css(e.isHorizontal()?"width":"height",`${s*(S.dynamicMainBullets+4)}px`),S.dynamicMainBullets>1&&e.previousIndex!==void 0&&(o+=w-(e.previousIndex-e.loopedSlides||0),o>S.dynamicMainBullets-1?o=S.dynamicMainBullets-1:o<0&&(o=0)),O=Math.max(w-o,0),N=O+(Math.min(_.length,S.dynamicMainBullets)-1),P=(N+O)/2),_.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(Y=>`${S.bulletActiveClass}${Y}`).join(" ")),p.length>1)_.each(Y=>{const $=q(Y),A=$.index();A===w&&$.addClass(S.bulletActiveClass),S.dynamicBullets&&(A>=O&&A<=N&&$.addClass(`${S.bulletActiveClass}-main`),A===O&&a($,"prev"),A===N&&a($,"next"))});else{const Y=_.eq(w),$=Y.index();if(Y.addClass(S.bulletActiveClass),S.dynamicBullets){const A=_.eq(O),M=_.eq(N);for(let X=O;X<=N;X+=1)_.eq(X).addClass(`${S.bulletActiveClass}-main`);if(e.params.loop)if($>=_.length){for(let X=S.dynamicMainBullets;X>=0;X-=1)_.eq(_.length-X).addClass(`${S.bulletActiveClass}-main`);_.eq(_.length-S.dynamicMainBullets-1).addClass(`${S.bulletActiveClass}-prev`)}else a(A,"prev"),a(M,"next");else a(A,"prev"),a(M,"next")}}if(S.dynamicBullets){const Y=Math.min(_.length,S.dynamicMainBullets+4),$=(s*Y-s)/2-P*s,A=m?"right":"left";_.css(e.isHorizontal()?A:"top",`${$}px`)}}if(S.type==="fraction"&&(p.find(li(S.currentClass)).text(S.formatFractionCurrent(w+1)),p.find(li(S.totalClass)).text(S.formatFractionTotal(E))),S.type==="progressbar"){let _;S.progressbarOpposite?_=e.isHorizontal()?"vertical":"horizontal":_=e.isHorizontal()?"horizontal":"vertical";const O=(w+1)/E;let N=1,P=1;_==="horizontal"?N=O:P=O,p.find(li(S.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${N}) scaleY(${P})`).transition(e.params.speed)}S.type==="custom"&&S.renderCustom?(p.html(S.renderCustom(e,w+1,E)),r("paginationRender",p[0])):r("paginationUpdate",p[0]),e.params.watchOverflow&&e.enabled&&p[e.isLocked?"addClass":"removeClass"](S.lockClass)}function c(){const m=e.params.pagination;if(l())return;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,h=e.pagination.$el;let p="";if(m.type==="bullets"){let w=e.params.loop?Math.ceil((S-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&w>S&&(w=S);for(let E=0;E<w;E+=1)m.renderBullet?p+=m.renderBullet.call(e,E,m.bulletClass):p+=`<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`;h.html(p),e.pagination.bullets=h.find(li(m.bulletClass))}m.type==="fraction"&&(m.renderFraction?p=m.renderFraction.call(e,m.currentClass,m.totalClass):p=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`,h.html(p)),m.type==="progressbar"&&(m.renderProgressbar?p=m.renderProgressbar.call(e,m.progressbarFillClass):p=`<span class="${m.progressbarFillClass}"></span>`,h.html(p)),m.type!=="custom"&&r("paginationRender",e.pagination.$el[0])}function f(){e.params.pagination=bS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let S=q(m.el);S.length!==0&&(e.params.uniqueNavElements&&typeof m.el=="string"&&S.length>1&&(S=e.$el.find(m.el),S.length>1&&(S=S.filter(h=>q(h).parents(".swiper")[0]===e.el))),m.type==="bullets"&&m.clickable&&S.addClass(m.clickableClass),S.addClass(m.modifierClass+m.type),S.addClass(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(S.addClass(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&S.addClass(m.progressbarOppositeClass),m.clickable&&S.on("click",li(m.bulletClass),function(p){p.preventDefault();let w=q(this).index()*e.params.slidesPerGroup;e.params.loop&&(w+=e.loopedSlides),e.slideTo(w)}),Object.assign(e.pagination,{$el:S,el:S[0]}),e.enabled||S.addClass(m.lockClass))}function d(){const m=e.params.pagination;if(l())return;const S=e.pagination.$el;S.removeClass(m.hiddenClass),S.removeClass(m.modifierClass+m.type),S.removeClass(e.isHorizontal()?m.horizontalClass:m.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(m.bulletActiveClass),m.clickable&&S.off("click",li(m.bulletClass))}n("init",()=>{e.params.pagination.enabled===!1?y():(f(),c(),u())}),n("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&u()}),n("snapIndexChange",()=>{e.params.loop||u()}),n("slidesLengthChange",()=>{e.params.loop&&(c(),u())}),n("snapGridLengthChange",()=>{e.params.loop||(c(),u())}),n("destroy",()=>{d()}),n("enable disable",()=>{const{$el:m}=e.pagination;m&&m[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),n("lock unlock",()=>{u()}),n("click",(m,S)=>{const h=S.target,{$el:p}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&p&&p.length>0&&!q(h).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&h===e.navigation.nextEl||e.navigation.prevEl&&h===e.navigation.prevEl))return;const w=p.hasClass(e.params.pagination.hiddenClass);r(w===!0?"paginationShow":"paginationHide"),p.toggleClass(e.params.pagination.hiddenClass)}});const g=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),f(),c(),u()},y=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),d()};Object.assign(e.pagination,{enable:g,disable:y,render:c,update:u,init:f,destroy:d})}function JL({swiper:e,extendParams:t,on:n,emit:r}){let i;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const m=e.slides.eq(e.activeIndex);let S=e.params.autoplay.delay;m.attr("data-swiper-autoplay")&&(S=m.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(i),i=Pl(()=>{let h;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),h=e.slidePrev(e.params.speed,!0,!0),r("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?l():(h=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),r("autoplay")):(h=e.slidePrev(e.params.speed,!0,!0),r("autoplay")):e.params.loop?(e.loopFix(),h=e.slideNext(e.params.speed,!0,!0),r("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?l():(h=e.slideTo(0,e.params.speed,!0,!0),r("autoplay")):(h=e.slideNext(e.params.speed,!0,!0),r("autoplay")),(e.params.cssMode&&e.autoplay.running||h===!1)&&s()},S)}function o(){return typeof i<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,r("autoplayStart"),s(),!0)}function l(){return!e.autoplay.running||typeof i>"u"?!1:(i&&(clearTimeout(i),i=void 0),e.autoplay.running=!1,r("autoplayStop"),!0)}function a(m){!e.autoplay.running||e.autoplay.paused||(i&&clearTimeout(i),e.autoplay.paused=!0,m===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].addEventListener(S,c)}))}function u(){const m=Xe();m.visibilityState==="hidden"&&e.autoplay.running&&a(),m.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function c(m){!e||e.destroyed||!e.$wrapperEl||m.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].removeEventListener(S,c)}),e.autoplay.paused=!1,e.autoplay.running?s():l())}function f(){e.params.autoplay.disableOnInteraction?l():(r("autoplayPause"),a()),["transitionend","webkitTransitionEnd"].forEach(m=>{e.$wrapperEl[0].removeEventListener(m,c)})}function d(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,r("autoplayResume"),s())}function g(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",f),e.$el.on("mouseleave",d))}function y(){e.$el.off("mouseenter",f),e.$el.off("mouseleave",d)}n("init",()=>{e.params.autoplay.enabled&&(o(),Xe().addEventListener("visibilitychange",u),g())}),n("beforeTransitionStart",(m,S,h)=>{e.autoplay.running&&(h||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(S):l())}),n("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?l():a())}),n("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),n("destroy",()=>{y(),e.autoplay.running&&l(),Xe().removeEventListener("visibilitychange",u)}),Object.assign(e.autoplay,{pause:a,run:s,start:o,stop:l})}function ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function ir(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:ei(t[r])&&ei(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:ir(e[r],t[r]):e[r]=t[r]})}function xS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function ES(e={}){return e.pagination&&typeof e.pagination.el>"u"}function _S(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function kS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}const CS=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function ZL(e={},t=!0){const n={on:{}},r={},i={};ir(n,lt.defaults),ir(n,lt.extendedDefaults),n._emitClasses=!0,n.init=!1;const s={},o=CS.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(o.indexOf(a)>=0?ei(e[a])?(n[a]={},i[a]={},ir(n[a],e[a]),ir(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:s,events:r}}function e2({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:s},o){xS(o)&&t&&n&&(s.params.navigation.nextEl=t,s.originalParams.navigation.nextEl=t,s.params.navigation.prevEl=n,s.originalParams.navigation.prevEl=n),ES(o)&&r&&(s.params.pagination.el=r,s.originalParams.pagination.el=r),_S(o)&&i&&(s.params.scrollbar.el=i,s.originalParams.scrollbar.el=i),s.init(e)}const TS=(e,t)=>{let n=t.slidesPerView;if(t.breakpoints){const i=lt.prototype.getBreakpoint(t.breakpoints),s=i in t.breakpoints?t.breakpoints[i]:void 0;s&&s.slidesPerView&&(n=s.slidesPerView)}let r=Math.ceil(parseFloat(t.loopedSlides||n,10));return r+=t.loopAdditionalSlides,r>e.length&&t.loopedSlidesLimit&&(r=e.length),r};function t2(e,t,n){const r=t.map((a,u)=>Le.cloneElement(a,{swiper:e,"data-swiper-slide-index":u}));function i(a,u,c){return Le.cloneElement(a,{key:`${a.key}-duplicate-${u}-${c}`,className:`${a.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const a=n.slidesPerGroup-r.length%n.slidesPerGroup;if(a!==n.slidesPerGroup)for(let u=0;u<a;u+=1){const c=v("div",{className:`${n.slideClass} ${n.slideBlankClass}`});r.push(c)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=r.length);const s=TS(r,n),o=[],l=[];for(let a=0;a<s;a+=1){const u=a-Math.floor(a/r.length)*r.length;l.push(i(r[u],a,"append")),o.unshift(i(r[r.length-u-1],a,"prepend"))}return e&&(e.loopedSlides=s),[...o,...r,...l]}function n2(e,t,n,r,i){const s=[];if(!t)return s;const o=a=>{s.indexOf(a)<0&&s.push(a)};if(n&&r){const a=r.map(i),u=n.map(i);a.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return CS.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(ei(e[a])&&ei(t[a])){const u=Object.keys(e[a]),c=Object.keys(t[a]);u.length!==c.length?o(a):(u.forEach(f=>{e[a][f]!==t[a][f]&&o(a)}),c.forEach(f=>{e[a][f]!==t[a][f]&&o(a)}))}else e[a]!==t[a]&&o(a)}),s}function IS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function PS(e){const t=[];return Le.Children.toArray(e).forEach(n=>{IS(n)?t.push(n):n.props&&n.props.children&&PS(n.props.children).forEach(r=>t.push(r))}),t}function r2(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Le.Children.toArray(e).forEach(r=>{if(IS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=PS(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function i2({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:s,scrollbarEl:o,paginationEl:l}){const a=r.filter(_=>_!=="children"&&_!=="direction"),{params:u,pagination:c,navigation:f,scrollbar:d,virtual:g,thumbs:y}=e;let m,S,h,p,w;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(m=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(u.scrollbar||u.scrollbar===!1)&&d&&!d.el&&(p=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||s)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(w=!0);const E=_=>{!e[_]||(e[_].destroy(),_==="navigation"?(u[_].prevEl=void 0,u[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(u[_].el=void 0,e[_].el=void 0))};a.forEach(_=>{if(ei(u[_])&&ei(n[_]))ir(u[_],n[_]);else{const O=n[_];(O===!0||O===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?O===!1&&E(_):u[_]=n[_]}}),a.includes("controller")&&!S&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&g&&u.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),m&&y.init()&&y.update(!0),S&&(e.controller.control=u.controller.control),h&&(l&&(u.pagination.el=l),c.init(),c.render(),c.update()),p&&(o&&(u.scrollbar.el=o),d.init(),d.updateSize(),d.setTranslate()),w&&(i&&(u.navigation.nextEl=i),s&&(u.navigation.prevEl=s),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function s2(e,t,n){if(!n)return null;const r=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return t.filter((i,s)=>s>=n.from&&s<=n.to).map(i=>Le.cloneElement(i,{swiper:e,style:r}))}const o2=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Bs(e,t){return typeof window>"u"?D.exports.useEffect(e,t):D.exports.useLayoutEffect(e,t)}const a2=D.exports.createContext(null),l2=D.exports.createContext(null),AS=D.exports.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...l}=e===void 0?{}:e,a=!1;const[u,c]=D.exports.useState("swiper"),[f,d]=D.exports.useState(null),[g,y]=D.exports.useState(!1),m=D.exports.useRef(!1),S=D.exports.useRef(null),h=D.exports.useRef(null),p=D.exports.useRef(null),w=D.exports.useRef(null),E=D.exports.useRef(null),_=D.exports.useRef(null),O=D.exports.useRef(null),N=D.exports.useRef(null),{params:P,passedParams:Y,rest:$,events:A}=ZL(l),{slides:M,slots:X}=r2(s),re=()=>{y(!g)};Object.assign(P.on,{_containerClasses(H,J){c(J)}});const oe=()=>{if(Object.assign(P.on,A),a=!0,h.current=new lt(P),h.current.loopCreate=()=>{},h.current.loopDestroy=()=>{},P.loop&&(h.current.loopedSlides=TS(M,P)),h.current.virtual&&h.current.params.virtual.enabled){h.current.virtual.slides=M;const H={cache:!1,slides:M,renderExternal:d,renderExternalUpdate:!1};ir(h.current.params.virtual,H),ir(h.current.originalParams.virtual,H)}};S.current||oe(),h.current&&h.current.on("_beforeBreakpoint",re);const ye=()=>{a||!A||!h.current||Object.keys(A).forEach(H=>{h.current.on(H,A[H])})},be=()=>{!A||!h.current||Object.keys(A).forEach(H=>{h.current.off(H,A[H])})};D.exports.useEffect(()=>()=>{h.current&&h.current.off("_beforeBreakpoint",re)}),D.exports.useEffect(()=>{!m.current&&h.current&&(h.current.emitSlidesClasses(),m.current=!0)}),Bs(()=>{if(t&&(t.current=S.current),!!S.current)return h.current.destroyed&&oe(),e2({el:S.current,nextEl:E.current,prevEl:_.current,paginationEl:O.current,scrollbarEl:N.current,swiper:h.current},P),o&&o(h.current),()=>{h.current&&!h.current.destroyed&&h.current.destroy(!0,!1)}},[]),Bs(()=>{ye();const H=n2(Y,p.current,M,w.current,J=>J.key);return p.current=Y,w.current=M,H.length&&h.current&&!h.current.destroyed&&i2({swiper:h.current,slides:M,passedParams:Y,changedParams:H,nextEl:E.current,prevEl:_.current,scrollbarEl:N.current,paginationEl:O.current}),()=>{be()}}),Bs(()=>{o2(h.current)},[f]);function F(){return P.virtual?s2(h.current,M,f):!P.loop||h.current&&h.current.destroyed?M.map(H=>Le.cloneElement(H,{swiper:h.current})):t2(h.current,M,P)}return v(r,{ref:S,className:kS(`${u}${n?` ${n}`:""}`),...$,children:z(l2.Provider,{value:h.current,children:[X["container-start"],z(i,{className:"swiper-wrapper",children:[X["wrapper-start"],F(),X["wrapper-end"]]}),xS(P)&&z(Gr,{children:[v("div",{ref:_,className:"swiper-button-prev"}),v("div",{ref:E,className:"swiper-button-next"})]}),_S(P)&&v("div",{ref:N,className:"swiper-scrollbar"}),ES(P)&&v("div",{ref:O,className:"swiper-pagination"}),X["container-end"]]})})});AS.displayName="Swiper";const OS=D.exports.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,virtualIndex:l,...a}=e===void 0?{}:e;const u=D.exports.useRef(null),[c,f]=D.exports.useState("swiper-slide");function d(m,S,h){S===u.current&&f(h)}Bs(()=>{if(t&&(t.current=u.current),!(!u.current||!s)){if(s.destroyed){c!=="swiper-slide"&&f("swiper-slide");return}return s.on("_slideClass",d),()=>{!s||s.off("_slideClass",d)}}}),Bs(()=>{s&&u.current&&!s.destroyed&&f(s.getSlideClasses(u.current))},[s]);const g={isActive:c.indexOf("swiper-slide-active")>=0||c.indexOf("swiper-slide-duplicate-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isDuplicate:c.indexOf("swiper-slide-duplicate")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0||c.indexOf("swiper-slide-duplicate-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0||c.indexOf("swiper-slide-duplicate-next")>=0},y=()=>typeof r=="function"?r(g):r;return v(n,{ref:u,className:kS(`${c}${i?` ${i}`:""}`),"data-swiper-slide-index":l,...a,children:v(a2.Provider,{value:g,children:o?v("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0,children:y()}):y()})})});OS.displayName="SwiperSlide";const u2={slidesPerView:4,spaceBetween:30,centeredSlides:!0,loop:!0,pagination:{clickable:!0,type:"bullets"},autoplay:{delay:5e3},navigation:!0,modules:[XL,JL,QL],className:"mySwiper"},c2=()=>{const[e,t]=D.exports.useState([]);return D.exports.useEffect(()=>{(async()=>{try{const r=[];(await aS(ip(kr,"productos"))).forEach(s=>{const o={id:s.id,...s.data()};r.push(o)}),t(r)}catch{console.log("error en cargar productos")}})()},[]),z(TR,{children:[v(IR,{children:z(PR,{children:[v(OR,{}),v(AR,{children:"Servicios"})]})}),v($R,{children:v(AS,{...u2,children:e.map(n=>v(OS,{children:v(qR,{...n})},n.id))})})]})},d2=x.div`
  /* background-color: #FEF7EF; */
  min-height: 80vh;
  width: 100%;
`,f2=x.div`
  /* background-color: aqua; */
  align-items: flex-end;
  display: flex;
  height: 20%;
  width: 100%;
`,h2=x.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,p2=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,m2=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 11rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,g2=x.div`
  /* background-color: blueviolet; */
  height: 80%;
  width: 100%;
`,v2=x.div`
  /* background-color: red; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,y2=x.div`
  /* background-color: blue; */
  align-items: center;
  background-color: #71c2b1;
  box-shadow: 0px 1px 3px #1e1e1e;
  display: flex;
  height: 2.2rem;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1366px) {
    height: 1.7rem;
  }
`,w2=x.div`
  /* background-color: green; */
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 18rem;

  @media (hover: hover) {
    &:hover {
      p {
        color: #d14b44;
      }
      h3 {
        color: #d14b44;
        font-size: 1.5rem;
      }
      img {
        width: 4rem;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    height: 21rem;
    width: 13rem;

    @media (hover: hover) {
      &:hover {
        h3 {
          font-size: 1.3rem;
        }
        img {
          width: 3.5rem;
        }
      }
    }
  }
`,S2=x.div`
  /* background-color: brown; */
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`,b2=x.div`
  align-items: center;
  /* background-color: blue; */
  background-color: #71c2b1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 0.8rem;

  @media screen and (max-width: 1366px) {
    width: 0.7rem;
  }
`,x2=x.div`
  align-items: center;
  /* background-color: blue; */
  background-color: #71c2b1;
  border-radius: 50%;
  display: flex;
  height: 6rem;
  justify-content: center;
  width: 6rem;

  @media screen and (max-width: 1366px) {
    height: 5.5rem;
    width: 5.5rem;
  }
`,E2=x.img`
  width: 3.5rem;

  @media screen and (max-width: 1366px) {
    width: 3rem;
  }
`,_2=x.div`
  align-items: center;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-start;
  width: 100%;
`,k2=x.p`
  margin-top: 2rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 0.85rem;
  }
`,C2=x.h3`
  font-size: 1.2rem;
  margin-top: 2.5rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`,T2=({title:e,img:t,description:n})=>z(w2,{children:[v(S2,{children:v(b2,{children:v(x2,{children:v(E2,{src:t})})})}),z(_2,{children:[v(C2,{children:e}),v(k2,{children:n})]})]}),I2=x.div`
  /* background-color: green; */
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 18rem;

  @media (hover: hover) {
    &:hover {
      p {
        color: #d14b44;
      }
      h3 {
        color: #d14b44;
        font-size: 1.5rem;
      }
      img {
        width: 4rem;
      }
    }
  }

  @media screen and (max-width: 1366px) {
    height: 21rem;
    width: 13rem;

    @media (hover: hover) {
      &:hover {
        h3 {
          font-size: 1.3rem;
        }
        img {
          width: 3.5rem;
        }
      }
    }
  }
`,P2=x.div`
  align-items: center;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-end;
  width: 100%;
`,A2=x.p`
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 0.85rem;
  }
`,O2=x.h3`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`,$2=x.div`
  /* background-color: brown; */
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`,R2=x.div`
  align-items: center;
  /* background-color: blue; */
  background-color: #71c2b1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 0.8rem;

  @media screen and (max-width: 1366px) {
    width: 0.7rem;
  }
`,N2=x.div`
  /* background-color: blue; */
  align-items: center;
  background-color: #71c2b1;
  border-radius: 50%;
  box-shadow: 0px 1px 3px #1e1e1e;
  display: flex;
  height: 6rem;
  justify-content: center;
  width: 6rem;

  @media screen and (max-width: 1366px) {
    height: 5.5rem;
    width: 5.5rem;
  }
`,L2=x.img`
  width: 3.5rem;

  @media screen and (max-width: 1366px) {
    width: 3rem;
  }
`,D2=({title:e,img:t,description:n})=>z(I2,{children:[z(P2,{children:[v(A2,{children:n}),v(O2,{children:e})]}),v($2,{children:v(R2,{children:v(N2,{children:v(L2,{src:t})})})})]}),M2=[{id:1,title:"REQUERIMIENTOS",img:"https://res.cloudinary.com/dssccuwn8/image/upload/v1671403925/assets/workflow_calendar_dyyp1v.svg",description:"Primero estableceremos una conversaci\xF3n, v\xEDa email, tel\xE9fono o como usted desee para entender la idea y poder asesorarlo, con la idea que tiene."},{id:2,title:"ELECCION DEL PLAN",img:"https://res.cloudinary.com/dssccuwn8/image/upload/v1671403925/assets/workflow_laptop_abib8i.svg",description:"Luego que quede claro y seguro de su idea, elegir\xE1 el plan que m\xE1s se ajuste a su presupuesto."},{id:3,title:"DESARROLLO",img:"https://res.cloudinary.com/dssccuwn8/image/upload/v1671403925/assets/workflow_tablet_yza5aq.svg",description:"Luego de confirmar su pago o transferencia, empezar\xE9 a trabajar, en donde mantendremos el contacto de principio a fin."},{id:4,title:"OBSERVACIONES",img:"https://res.cloudinary.com/dssccuwn8/image/upload/v1671403925/assets/workflow_certificate_mu9sms.svg",description:"Al concluir con el desarrollo de su idea, hare observaciones de si cumple con lo acordado."},{id:5,title:"ENTREGA FINAL",img:"https://res.cloudinary.com/dssccuwn8/image/upload/v1671403925/assets/workflow_givework_jbs3bk.svg",description:"Si todo est\xE1 en condiciones se le har\xE1 la entrega de su producto y toda la propiedad del mismo."}],F2=()=>z(d2,{children:[v(f2,{children:z(h2,{children:[v(m2,{}),v(p2,{children:"Forma de Trabajo"})]})}),v(g2,{children:v(v2,{children:v(y2,{children:M2.map(e=>e.id%2!==0?v(D2,{...e},e.id):v(T2,{...e},e.id))})})})]}),jo="/assets/pattern.a35e4376.svg",z2=x.div`
  background: fixed repeat center/2rem url(${jo});
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
`,$S=()=>z(z2,{children:[v(CR,{}),v(c2,{}),v(F2,{}),v(pR,{})]}),j2=x.div`
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  height: 25rem;
  justify-content: space-between;
  margin: 0.8rem;
  width: 20rem;
`,B2=x.a`
  /* background-color: #bbb; */
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 75%;
  justify-content: center;
  width: 100%;

  /* img {
    border-radius: 3px;
    height: 93%;
    margin-top: 3%;
    width: 92%;
    border: 1px solid red;

  } */
`,U2=x.div`
  /* background-color: red; */
  /* align-items: center; */
  /* cursor: pointer; */
  /* display: flex; */
  height: 90%;
  /* justify-content: center; */
  width: 90%;

  img {
    height: 100%;
    width: 100%;
    /* border: 1px solid green; */

  }
`,V2=x.a`
  /* background-color: red; */
  cursor: pointer;
  font-size: 1.1rem;
  width: 90%;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,H2=x.div`
  /* background-color: green; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`,W2=x.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.3rem;
  margin-left: 1rem;
`,G2=x.div`
  /* margin-bottom: 0.2rem; */
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
`,RS=`
  cursor: pointer;
  margin-right: 0.5rem;
  width: 1.8rem;
  border: none;
  background: none;
  border-radius: 20%;

  @media (hover: hover) {
    &:hover {
      background-color: #8CBFAE;
      color: #fff;
    }
  }
`;x.button`
  ${RS};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`;const q2=x.button`
  ${RS};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,NS="/assets/trash_carrito.4d4914c1.svg",K2=LC({reducer:{auth:_w.reducer,productoActivo:dS.reducer}}),Y2=()=>{const{status:e}=wn(n=>n.auth),t=Sn();return D.exports.useEffect(()=>{rP(Nu,async n=>{if(!n)return t(dp());const{uid:r,email:i}=n;t(Nh({uid:r,email:i})),t(Z$(r))})},[]),e},hp=()=>(localStorage["@carrito"]||(localStorage["@carrito"]=JSON.stringify([])),JSON.parse(localStorage["@carrito"])),LS=e=>{const t=hp();t.push({...e}),localStorage["@carrito"]=JSON.stringify(t)},Q2=e=>{let t=hp();t=t.filter(n=>n.id!==e),localStorage["@carrito"]=JSON.stringify(t)},X2=()=>{localStorage["@carrito"]=JSON.stringify([])},J2=({title:e,description:t,id:n,precio:r,imagen:i})=>{const s=Sn(),o=jn(),l=()=>{o(`/producto/${n}`),s(Dr({title:e,description:t,id:n,precio:r,imagen:i}))},a=()=>{Q2(n),o(0)};return z(j2,{children:[v(B2,{onClick:l,children:v(U2,{children:v("img",{src:i})})}),v(V2,{onClick:l,children:e}),z(H2,{children:[v(W2,{children:`$ ${r}`}),v(G2,{children:v(q2,{onClick:a,children:v("img",{src:NS})})})]})]})},Bo="/assets/cuadricula_green_grey.424c84ba.svg",Z2=x.div`
  background: fixed repeat center/2rem url(${Bo});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`,eD=x.div`
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: auto;
  margin: 12rem 0 5rem 0;
  padding-bottom: 2rem;
  width: 85%;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`,tD=x.div`
  /* background-color: aqua; */
  align-items: flex-end;
  background-color: #fcfcfc;
  border-bottom: 1px solid #3772ff50;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`,nD=x.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,rD=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,iD=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`;x(Bn)`
  align-items: center;
  border-radius: 10%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 2rem 1.4rem 0;
  width: 2.5rem;

  img {
    width: 100%;
  }

  &:active {
    background-color: #6fa894;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #8cbfae;
    }
  }
`;const sD=x.div`
  /* background-color: blueviolet; */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`,oD=x.div`
  /* background-color: aqua; */
  align-items: flex-end;
  background-color: #fcfcfc;
  border-top: 1px solid #3772ff50;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  /* margin-bottom: 1rem; */
  width: 100%;
`,aD=x.div`
  display: flex;
  height: auto;
  width: auto;
  margin-bottom: .5rem;
  margin-left: 8rem;
`,lD=x.p`
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,uD=x.div`
  display: flex;
  height: auto;
  width: auto;
  margin-bottom: .5rem;
  margin-right: 8rem;
`,cD=x(Bn)`
  background-color: #71c2b1;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0.6rem 0.8rem;
  text-decoration: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
    }
  }
`,dD=()=>{const e=Sn(),t=jn(),{isLoading:n,id:r}=wn(a=>a.productoActivo),[i,s]=D.exports.useState([]),o=i.map(a=>a.precio).reduce((a,u)=>a+u,0);D.exports.useEffect(()=>{s(hp())},[]);const l=()=>{e(hS()),setTimeout(()=>{e(pS()),X2(),t("/")},3e3)};return n===!0?v(uS,{}):v(Z2,{children:z(eD,{children:[v(tD,{children:z(nD,{children:[v(iD,{}),v(rD,{children:"Carrito"})]})}),v(sD,{children:i.map((a,u)=>v(J2,{...a},u))}),z(oD,{children:[v(aD,{children:z(lD,{children:["Total: $",o]})}),v(uD,{children:v(cD,{onClick:l,children:"Pagar"})})]})]})})},fD=x.div`
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  height: 25rem;
  justify-content: space-between;
  margin: 0.8rem;
  width: 20rem;
`,hD=x.a`
  /* background-color: #bbb; */
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 75%;
  justify-content: center;
  width: 100%;

  /* img {
    border-radius: 3px;
    height: 93%;
    margin-top: 3%;
    width: 92%;
    border: 1px solid red;

  } */
`,pD=x.div`
  /* background-color: red; */
  /* align-items: center; */
  /* cursor: pointer; */
  /* display: flex; */
  height: 90%;
  /* justify-content: center; */
  width: 90%;

  img {
    height: 100%;
    width: 100%;
    /* border: 1px solid green; */

  }
`,mD=x.a`
  /* background-color: red; */
  cursor: pointer;
  font-size: 1.1rem;
  width: 90%;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,gD=x.div`
  /* background-color: green; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`,vD=x.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.3rem;
  margin-left: 1rem;
`,yD=x.div`
  /* margin-bottom: 0.2rem; */
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
`,pp=`
  cursor: pointer;
  margin-right: 0.5rem;
  width: 1.8rem;
  border: none;
  background: none;
  border-radius: 20%;

  @media (hover: hover) {
    &:hover {
      background-color: #8CBFAE;
      color: #fff;
    }
  }
`,wD=x.button`
  ${pp};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,SD=x.button`
  ${pp};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,bD=x.button`
  ${pp};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,xD="/assets/plus_carrito.7b16cc86.svg",ED="/assets/edit_product.9c969bd4.svg",_D=({title:e,description:t,id:n,precio:r,imagen:i})=>{const s=Sn(),{rol:o,status:l}=wn(g=>g.auth),a=jn(),u=()=>{a(`/producto/${n}`),s(Dr({title:e,description:t,id:n,precio:r,imagen:i}))},c=()=>{s(Dr({title:e,description:t,id:n,precio:r,imagen:i})),s(WR())},f=()=>{s(Dr({title:e,description:t,id:n,precio:r,imagen:i})),LS({title:e,description:t,id:n,precio:r,imagen:i})},d=()=>{a(`/modificar/${n}`),s(Dr({title:e,description:t,id:n,precio:r,imagen:i}))};return z(fD,{children:[v(hD,{onClick:u,children:v(pD,{children:v("img",{src:i})})}),v(mD,{onClick:u,children:e}),z(gD,{children:[v(vD,{children:`$ ${r}`}),z(yD,{children:[o==="Administrador"?z(Gr,{children:[v(bD,{onClick:d,children:v("img",{src:ED})}),v(SD,{onClick:c,children:v("img",{src:NS})})]}):v(Gr,{}),l==="authenticated"&&v(wD,{onClick:f,children:v("img",{src:xD})})]})]})]})},kD=x.div`
  background: fixed repeat center/2rem url(${Bo});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`,CD=x.div`
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  height: auto;
  margin: 12rem 0 5rem 0;
  padding-bottom: 2rem;
  width: 85%;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`,TD=x.div`
  /* background-color: aqua; */
  align-items: flex-end;
  background-color: #fcfcfc;
  border-bottom: 1px solid #3772ff50;
  border-radius: 1rem 1rem 0 0;
  display: flex;
  height: 6rem;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`,ID=x.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,PD=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,AD=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,OD=x(Bn)`
  align-items: center;
  border-radius: 10%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 2rem 1.4rem 0;
  width: 2.5rem;

  img {
    width: 100%;
  }

  &:active {
    background-color: #6fa894;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #8cbfae;
    }
  }
`,$D=x.div`
  /* background-color: blueviolet; */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`,RD="/assets/new_product.bcca37ce.svg",DS=()=>{const{rol:e}=wn(r=>r.auth),[t,n]=D.exports.useState([]);return D.exports.useEffect(()=>{(async()=>{try{const i=[];(await aS(ip(kr,"productos"))).forEach(o=>{const l={id:o.id,...o.data()};i.push(l)}),n(i)}catch{console.log("error en cargar productos")}})()},[]),v(kD,{children:z(CD,{children:[z(TD,{children:[z(ID,{children:[v(AD,{}),v(PD,{children:"Tienda"})]}),e==="Administrador"?v(OD,{to:"/agregar",title:"Agregar nuevo producto.",children:v("img",{src:RD})}):v(Gr,{})]}),v($D,{children:t.map(r=>v(_D,{...r},r.id))})]})})},ND=x.div`
  align-items: center;
  background: fixed repeat center/2rem url(${Bo});
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 100%;
`,LD=x.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  height: 40rem;
  margin-top: 6rem;
  width: 65%;

  @media screen and (max-width: 1366px) {
    height: 29rem;
    margin-top: 4.5rem;
  }
`,DD=x.div`
  /* background-color: aqua; */
  align-items: center;
  border-bottom: 2px solid #ddd;
  display: flex;
  height: 15%;
  width: 100%;
`,MD=x.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`,FD=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,zD=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,jD=x.div`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 85%;
  width: 100%;
`,BD=x.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 55%;
`,UD=x.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 80%;
`,Nc=x.p`
  font-size: 0.9rem;
`,fv=x.input`
  background-color: #fff;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 2%;
  width: 89%;

  &:focus {
    border: 1px solid #f8bfb3;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`,VD=x.textarea`
  background-color: #fff;
  border-radius: 0.2rem;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1.1rem;
  height: 7.7rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0 0.5rem 2%;
  resize: none;
  width: 89%;

  &:focus {
    border: 1px solid #f8bfb3;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    height: 5.5rem;
  }
`;x(Bn)`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  width: 25%;
  margin-top: 0.5rem;
  text-decoration: none;
  text-align: center;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }
`;const HD=x.div`
  /* background-color: blue; */
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
`,WD=x.img`
  border-radius: 0.5rem;
  height: 68%;
  margin-top: 2.5rem;
  width: 75%;

  @media screen and (max-width: 1366px) {
    height: 66.5%;
  }
`,hv=x.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  /* height: 2.5rem; */
  width: 40%;
  margin-top: 0.5rem;

  &:disabled {
    background-color: #6b968d;
    cursor: not-allowed;
    pointer-events:none;
  }

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }
`;var Uo=e=>e.type==="checkbox",Ti=e=>e instanceof Date,ut=e=>e==null;const MS=e=>typeof e=="object";var Ze=e=>!ut(e)&&!Array.isArray(e)&&MS(e)&&!Ti(e),GD=e=>Ze(e)&&e.target?Uo(e.target)?e.target.checked:e.target.value:e,qD=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,KD=(e,t)=>e.has(qD(t)),Vo=e=>Array.isArray(e)?e.filter(Boolean):[],Ue=e=>e===void 0,Q=(e,t,n)=>{if(!t||!Ze(e))return n;const r=Vo(t.split(/[,[\].]+?/)).reduce((i,s)=>ut(i)?i:i[s],e);return Ue(r)||r===e?Ue(e[t])?n:e[t]:r};const pv={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},en={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},En={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Le.createContext(null);var YD=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==en.all&&(t._proxyFormState[o]=!r||en.all),n&&(n[o]=!0),e[o]}});return i},Mt=e=>Ze(e)&&!Object.keys(e).length,QD=(e,t,n)=>{const{name:r,...i}=e;return Mt(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!n||en.all))},Lc=e=>Array.isArray(e)?e:[e];function XD(e){const t=Le.useRef(e);t.current=e,Le.useEffect(()=>{const n=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{n&&n.unsubscribe()}},[e.disabled])}var fn=e=>typeof e=="string",JD=(e,t,n,r)=>{const i=Array.isArray(e);return fn(e)?(r&&t.watch.add(e),Q(n,e)):i?e.map(s=>(r&&t.watch.add(s),Q(n,s))):(r&&(t.watchAll=!0),n)},Al=e=>typeof e=="function",FS=e=>{for(const t in e)if(Al(e[t]))return!0;return!1},ZD=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},mp=e=>/^\w*$/.test(e),zS=e=>Vo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(e,t,n){let r=-1;const i=mp(t)?[t]:zS(t),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=e[l];a=Ze(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}const pf=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=Q(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Ze(o)&&pf(o,t)}}};var mv=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),eM=(e,t,n)=>{const r=Vo(Q(e,n));return ke(r,"root",t[n]),ke(e,n,r),e},Ol=e=>typeof e=="boolean",gp=e=>e.type==="file",La=e=>fn(e)||Le.isValidElement(e),vp=e=>e.type==="radio",$l=e=>e instanceof RegExp;const gv={value:!1,isValid:!1},vv={value:!0,isValid:!0};var jS=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Ue(e[0].attributes.value)?Ue(e[0].value)||e[0].value===""?vv:{value:e[0].value,isValid:!0}:vv:gv}return gv};const yv={isValid:!1,value:null};var BS=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,yv):yv;function wv(e,t,n="validate"){if(La(e)||Array.isArray(e)&&e.every(La)||Ol(e)&&!e)return{type:n,message:La(e)?e:"",ref:t}}var ui=e=>Ze(e)&&!$l(e)?e:{value:e,message:""},Sv=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:c,max:f,pattern:d,validate:g,name:y,valueAsNumber:m,mount:S,disabled:h}=e._f;if(!S||h)return{};const p=o?o[0]:s,w=A=>{r&&p.reportValidity&&(p.setCustomValidity(Ol(A)?"":A||" "),p.reportValidity())},E={},_=vp(s),O=Uo(s),N=_||O,P=(m||gp(s))&&!s.value||t===""||Array.isArray(t)&&!t.length,Y=ZD.bind(null,y,n,E),$=(A,M,X,re=En.maxLength,oe=En.minLength)=>{const ye=A?M:X;E[y]={type:A?re:oe,message:ye,ref:s,...Y(A?re:oe,ye)}};if(i?!Array.isArray(t)||!t.length:l&&(!N&&(P||ut(t))||Ol(t)&&!t||O&&!jS(o).isValid||_&&!BS(o).isValid)){const{value:A,message:M}=La(l)?{value:!!l,message:l}:ui(l);if(A&&(E[y]={type:En.required,message:M,ref:p,...Y(En.required,M)},!n))return w(M),E}if(!P&&(!ut(c)||!ut(f))){let A,M;const X=ui(f),re=ui(c);if(!ut(t)&&!isNaN(t)){const oe=s.valueAsNumber||t&&+t;ut(X.value)||(A=oe>X.value),ut(re.value)||(M=oe<re.value)}else{const oe=s.valueAsDate||new Date(t),ye=H=>new Date(new Date().toDateString()+" "+H),be=s.type=="time",F=s.type=="week";fn(X.value)&&t&&(A=be?ye(t)>ye(X.value):F?t>X.value:oe>new Date(X.value)),fn(re.value)&&t&&(M=be?ye(t)<ye(re.value):F?t<re.value:oe<new Date(re.value))}if((A||M)&&($(!!A,X.message,re.message,En.max,En.min),!n))return w(E[y].message),E}if((a||u)&&!P&&(fn(t)||i&&Array.isArray(t))){const A=ui(a),M=ui(u),X=!ut(A.value)&&t.length>A.value,re=!ut(M.value)&&t.length<M.value;if((X||re)&&($(X,A.message,M.message),!n))return w(E[y].message),E}if(d&&!P&&fn(t)){const{value:A,message:M}=ui(d);if($l(A)&&!t.match(A)&&(E[y]={type:En.pattern,message:M,ref:s,...Y(En.pattern,M)},!n))return w(M),E}if(g){if(Al(g)){const A=await g(t),M=wv(A,p);if(M&&(E[y]={...M,...Y(En.validate,M.message)},!n))return w(M.message),E}else if(Ze(g)){let A={};for(const M in g){if(!Mt(A)&&!n)break;const X=wv(await g[M](t),p,M);X&&(A={...X,...Y(M,X.message)},w(X.message),n&&(E[y]=A))}if(!Mt(A)&&(E[y]={ref:p,...A},!n))return E}}return w(!0),E},tM=e=>{const t=e.constructor&&e.constructor.prototype;return Ze(t)&&t.hasOwnProperty("isPrototypeOf")},mf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Or(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(mf&&(e instanceof Blob||e instanceof FileList))&&(n||Ze(e)))if(t=n?[]:{},!Array.isArray(e)&&!tM(e))t=e;else for(const r in e)t[r]=Or(e[r]);else return e;return t}var bv=e=>({isOnSubmit:!e||e===en.onSubmit,isOnBlur:e===en.onBlur,isOnChange:e===en.onChange,isOnAll:e===en.all,isOnTouch:e===en.onTouched});function nM(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Ue(e)?r++:e[t[r++]];return e}function rM(e){for(const t in e)if(!Ue(e[t]))return!1;return!0}function ot(e,t){const n=mp(t)?[t]:zS(t),r=n.length==1?e:nM(e,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let l=-1,a;const u=n.slice(0,-(o+1)),c=u.length-1;for(o>0&&(s=e);++l<u.length;){const f=u[l];a=a?a[f]:e[f],c===l&&(Ze(a)&&Mt(a)||Array.isArray(a)&&rM(a))&&(s?delete s[f]:delete e[f]),s=a}}return e}function Dc(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var Rl=e=>ut(e)||!MS(e);function Ii(e,t){if(Rl(e)||Rl(t))return e===t;if(Ti(e)&&Ti(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(Ti(s)&&Ti(o)||Ze(s)&&Ze(o)||Array.isArray(s)&&Array.isArray(o)?!Ii(s,o):s!==o)return!1}}return!0}var gf=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},US=e=>e.type==="select-multiple",iM=e=>vp(e)||Uo(e),Mc=e=>gf(e)&&e.isConnected;function Nl(e,t={}){const n=Array.isArray(e);if(Ze(e)||n)for(const r in e)Array.isArray(e[r])||Ze(e[r])&&!FS(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Nl(e[r],t[r])):ut(e[r])||(t[r]=!0);return t}function VS(e,t,n){const r=Array.isArray(e);if(Ze(e)||r)for(const i in e)Array.isArray(e[i])||Ze(e[i])&&!FS(e[i])?Ue(t)||Rl(n[i])?n[i]=Array.isArray(e[i])?Nl(e[i],[]):{...Nl(e[i])}:VS(e[i],ut(t)?{}:t[i],n[i]):n[i]=!Ii(e[i],t[i]);return n}var Fc=(e,t)=>VS(e,t,Nl(t)),HS=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ue(e)?e:t?e===""?NaN:e&&+e:n&&fn(e)?new Date(e):r?r(e):e;function zc(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return gp(t)?t.files:vp(t)?BS(e.refs).value:US(t)?[...t.selectedOptions].map(({value:n})=>n):Uo(t)?jS(e.refs).value:HS(Ue(t.value)?e.ref.value:t.value,e)}var sM=(e,t,n,r)=>{const i={};for(const s of e){const o=Q(t,s);o&&ke(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ys=e=>Ue(e)?void 0:$l(e)?e.source:Ze(e)?$l(e.value)?e.value.source:e.value:e,oM=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function xv(e,t,n){const r=Q(e,n);if(r||mp(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Q(t,s),l=Q(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var aM=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,lM=(e,t)=>!Vo(Q(e,t)).length&&ot(e,t);const uM={mode:en.onSubmit,reValidateMode:en.onChange,shouldFocusError:!0};function cM(e={}){let t={...uM,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Or(t.defaultValues)||{},s=t.shouldUnregister?{}:Or(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},a,u=0,c={};const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Dc(),array:Dc(),state:Dc()},g=bv(t.mode),y=bv(t.reValidateMode),m=t.criteriaMode===en.all,S=b=>C=>{clearTimeout(u),u=window.setTimeout(b,C)},h=async b=>{let C=!1;return f.isValid&&(C=t.resolver?Mt((await N()).errors):await Y(r,!0),!b&&C!==n.isValid&&(n.isValid=C,d.state.next({isValid:C}))),C},p=(b,C=[],T,R,U=!0,I=!0)=>{if(R&&T){if(o.action=!0,I&&Array.isArray(Q(r,b))){const V=T(Q(r,b),R.argA,R.argB);U&&ke(r,b,V)}if(f.errors&&I&&Array.isArray(Q(n.errors,b))){const V=T(Q(n.errors,b),R.argA,R.argB);U&&ke(n.errors,b,V),lM(n.errors,b)}if(f.touchedFields&&I&&Array.isArray(Q(n.touchedFields,b))){const V=T(Q(n.touchedFields,b),R.argA,R.argB);U&&ke(n.touchedFields,b,V)}f.dirtyFields&&(n.dirtyFields=Fc(i,s)),d.state.next({isDirty:A(b,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ke(s,b,C)},w=(b,C)=>{ke(n.errors,b,C),d.state.next({errors:n.errors})},E=(b,C,T,R)=>{const U=Q(r,b);if(U){const I=Q(s,b,Ue(T)?Q(i,b):T);Ue(I)||R&&R.defaultChecked||C?ke(s,b,C?I:zc(U._f)):re(b,I),o.mount&&h()}},_=(b,C,T,R,U)=>{let I=!1;const V={name:b},we=Q(n.touchedFields,b);if(f.isDirty){const de=n.isDirty;n.isDirty=V.isDirty=A(),I=de!==V.isDirty}if(f.dirtyFields&&(!T||R)){const de=Q(n.dirtyFields,b);Ii(Q(i,b),C)?ot(n.dirtyFields,b):ke(n.dirtyFields,b,!0),V.dirtyFields=n.dirtyFields,I=I||de!==Q(n.dirtyFields,b)}return T&&!we&&(ke(n.touchedFields,b,T),V.touchedFields=n.touchedFields,I=I||f.touchedFields&&we!==T),I&&U&&d.state.next(V),I?V:{}},O=async(b,C,T,R)=>{const U=Q(n.errors,b),I=f.isValid&&n.isValid!==C;if(e.delayError&&T?(a=S(()=>w(b,T)),a(e.delayError)):(clearTimeout(u),a=null,T?ke(n.errors,b,T):ot(n.errors,b)),(T?!Ii(U,T):U)||!Mt(R)||I){const V={...R,...I?{isValid:C}:{},errors:n.errors,name:b};n={...n,...V},d.state.next(V)}c[b]--,f.isValidating&&!Object.values(c).some(V=>V)&&(d.state.next({isValidating:!1}),c={})},N=async b=>t.resolver?await t.resolver({...s},t.context,sM(b||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation)):{},P=async b=>{const{errors:C}=await N();if(b)for(const T of b){const R=Q(C,T);R?ke(n.errors,T,R):ot(n.errors,T)}else n.errors=C;return C},Y=async(b,C,T={valid:!0})=>{for(const R in b){const U=b[R];if(U){const{_f:I,...V}=U;if(I){const we=l.array.has(I.name),de=await Sv(U,Q(s,I.name),m,t.shouldUseNativeValidation,we);if(de[I.name]&&(T.valid=!1,C))break;!C&&(Q(de,I.name)?we?eM(n.errors,de,I.name):ke(n.errors,I.name,de[I.name]):ot(n.errors,I.name))}V&&await Y(V,C,T)}}return T.valid},$=()=>{for(const b of l.unMount){const C=Q(r,b);C&&(C._f.refs?C._f.refs.every(T=>!Mc(T)):!Mc(C._f.ref))&&G(b)}l.unMount=new Set},A=(b,C)=>(b&&C&&ke(s,b,C),!Ii(H(),i)),M=(b,C,T)=>{const R={...o.mount?s:Ue(C)?i:fn(b)?{[b]:C}:C};return JD(b,l,R,T)},X=b=>Vo(Q(o.mount?s:i,b,e.shouldUnregister?Q(i,b,[]):[])),re=(b,C,T={})=>{const R=Q(r,b);let U=C;if(R){const I=R._f;I&&(!I.disabled&&ke(s,b,HS(C,I)),U=mf&&gf(I.ref)&&ut(C)?"":C,US(I.ref)?[...I.ref.options].forEach(V=>V.selected=U.includes(V.value)):I.refs?Uo(I.ref)?I.refs.length>1?I.refs.forEach(V=>(!V.defaultChecked||!V.disabled)&&(V.checked=Array.isArray(U)?!!U.find(we=>we===V.value):U===V.value)):I.refs[0]&&(I.refs[0].checked=!!U):I.refs.forEach(V=>V.checked=V.value===U):gp(I.ref)?I.ref.value="":(I.ref.value=U,I.ref.type||d.watch.next({name:b})))}(T.shouldDirty||T.shouldTouch)&&_(b,U,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&F(b)},oe=(b,C,T)=>{for(const R in C){const U=C[R],I=`${b}.${R}`,V=Q(r,I);(l.array.has(b)||!Rl(U)||V&&!V._f)&&!Ti(U)?oe(I,U,T):re(I,U,T)}},ye=(b,C,T={})=>{const R=Q(r,b),U=l.array.has(b),I=Or(C);ke(s,b,I),U?(d.array.next({name:b,values:s}),(f.isDirty||f.dirtyFields)&&T.shouldDirty&&(n.dirtyFields=Fc(i,s),d.state.next({name:b,dirtyFields:n.dirtyFields,isDirty:A(b,I)}))):R&&!R._f&&!ut(I)?oe(b,I,T):re(b,I,T),mv(b,l)&&d.state.next({}),d.watch.next({name:b})},be=async b=>{const C=b.target;let T=C.name;const R=Q(r,T);if(R){let U,I;const V=C.type?zc(R._f):GD(b),we=b.type===pv.BLUR||b.type===pv.FOCUS_OUT,de=!oM(R._f)&&!t.resolver&&!Q(n.errors,T)&&!R._f.deps||aM(we,Q(n.touchedFields,T),n.isSubmitted,y,g),bn=mv(T,l,we);ke(s,T,V),we?(R._f.onBlur&&R._f.onBlur(b),a&&a(0)):R._f.onChange&&R._f.onChange(b);const xn=_(T,V,we,!1),bt=!Mt(xn)||bn;if(!we&&d.watch.next({name:T,type:b.type}),de)return bt&&d.state.next({name:T,...bn?{}:xn});if(!we&&bn&&d.state.next({}),c[T]=(c[T],1),d.state.next({isValidating:!0}),t.resolver){const{errors:ee}=await N([T]),Ie=xv(n.errors,r,T),si=xv(ee,r,Ie.name||T);U=si.error,T=si.name,I=Mt(ee)}else U=(await Sv(R,Q(s,T),m,t.shouldUseNativeValidation))[T],I=await h(!0);R._f.deps&&F(R._f.deps),O(T,I,U,xn)}},F=async(b,C={})=>{let T,R;const U=Lc(b);if(d.state.next({isValidating:!0}),t.resolver){const I=await P(Ue(b)?b:U);T=Mt(I),R=b?!U.some(V=>Q(I,V)):T}else b?(R=(await Promise.all(U.map(async I=>{const V=Q(r,I);return await Y(V&&V._f?{[I]:V}:V)}))).every(Boolean),!(!R&&!n.isValid)&&h()):R=T=await Y(r);return d.state.next({...!fn(b)||f.isValid&&T!==n.isValid?{}:{name:b},...t.resolver||!b?{isValid:T}:{},errors:n.errors,isValidating:!1}),C.shouldFocus&&!R&&pf(r,I=>I&&Q(n.errors,I),b?U:l.mount),R},H=b=>{const C={...i,...o.mount?s:{}};return Ue(b)?C:fn(b)?Q(C,b):b.map(T=>Q(C,T))},J=(b,C)=>({invalid:!!Q((C||n).errors,b),isDirty:!!Q((C||n).dirtyFields,b),isTouched:!!Q((C||n).touchedFields,b),error:Q((C||n).errors,b)}),ue=b=>{b?Lc(b).forEach(C=>ot(n.errors,C)):n.errors={},d.state.next({errors:n.errors})},j=(b,C,T)=>{const R=(Q(r,b,{_f:{}})._f||{}).ref;ke(n.errors,b,{...C,ref:R}),d.state.next({name:b,errors:n.errors,isValid:!1}),T&&T.shouldFocus&&R&&R.focus&&R.focus()},W=(b,C)=>Al(b)?d.watch.subscribe({next:T=>b(M(void 0,C),T)}):M(b,C,!0),G=(b,C={})=>{for(const T of b?Lc(b):l.mount)l.mount.delete(T),l.array.delete(T),Q(r,T)&&(C.keepValue||(ot(r,T),ot(s,T)),!C.keepError&&ot(n.errors,T),!C.keepDirty&&ot(n.dirtyFields,T),!C.keepTouched&&ot(n.touchedFields,T),!t.shouldUnregister&&!C.keepDefaultValue&&ot(i,T));d.watch.next({}),d.state.next({...n,...C.keepDirty?{isDirty:A()}:{}}),!C.keepIsValid&&h()},Z=(b,C={})=>{let T=Q(r,b);const R=Ol(C.disabled);return ke(r,b,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:b}},name:b,mount:!0,...C}}),l.mount.add(b),T?R&&ke(s,b,C.disabled?void 0:Q(s,b,zc(T._f))):E(b,!0,C.value),{...R?{disabled:C.disabled}:{},...t.shouldUseNativeValidation?{required:!!C.required,min:ys(C.min),max:ys(C.max),minLength:ys(C.minLength),maxLength:ys(C.maxLength),pattern:ys(C.pattern)}:{},name:b,onChange:be,onBlur:be,ref:U=>{if(U){Z(b,C),T=Q(r,b);const I=Ue(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,V=iM(I),we=T._f.refs||[];if(V?we.find(de=>de===I):I===T._f.ref)return;ke(r,b,{_f:{...T._f,...V?{refs:[...we.filter(Mc),I,...Array.isArray(Q(i,b))?[{}]:[]],ref:{type:I.type,name:b}}:{ref:I}}}),E(b,!1,void 0,I)}else T=Q(r,b,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||C.shouldUnregister)&&!(KD(l.array,b)&&o.action)&&l.unMount.add(b)}}},k=()=>t.shouldFocusError&&pf(r,b=>b&&Q(n.errors,b),l.mount),ie=(b,C)=>async T=>{T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let R=!0,U=Or(s);d.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:I,values:V}=await N();n.errors=I,U=V}else await Y(r);Mt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await b(U,T)):(C&&await C({...n.errors},T),k())}catch(I){throw R=!1,I}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mt(n.errors)&&R,submitCount:n.submitCount+1,errors:n.errors})}},B=(b,C={})=>{Q(r,b)&&(Ue(C.defaultValue)?ye(b,Q(i,b)):(ye(b,C.defaultValue),ke(i,b,C.defaultValue)),C.keepTouched||ot(n.touchedFields,b),C.keepDirty||(ot(n.dirtyFields,b),n.isDirty=C.defaultValue?A(b,Q(i,b)):A()),C.keepError||(ot(n.errors,b),f.isValid&&h()),d.state.next({...n}))},_e=(b,C={})=>{const T=b||i,R=Or(T),U=b&&!Mt(b)?R:i;if(C.keepDefaultValues||(i=T),!C.keepValues){if(C.keepDirtyValues)for(const I of l.mount)Q(n.dirtyFields,I)?ke(U,I,Q(s,I)):ye(I,Q(U,I));else{if(mf&&Ue(b))for(const I of l.mount){const V=Q(r,I);if(V&&V._f){const we=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;try{if(gf(we)){we.closest("form").reset();break}}catch{}}}r={}}s=e.shouldUnregister?C.keepDefaultValues?Or(i):{}:R,d.array.next({values:U}),d.watch.next({values:U})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!f.isValid||!!C.keepIsValid,o.watch=!!e.shouldUnregister,d.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:C.keepDirty||C.keepDirtyValues?n.isDirty:!!(C.keepDefaultValues&&!Ii(b,i)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:C.keepDirty||C.keepDirtyValues?n.dirtyFields:C.keepDefaultValues&&b?Fc(i,b):{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Z,unregister:G,getFieldState:J,_executeSchema:N,_focusError:k,_getWatch:M,_getDirty:A,_updateValid:h,_removeUnmounted:$,_updateFieldArray:p,_getFieldArray:X,_subjects:d,_proxyFormState:f,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(b){o=b},get _defaultValues(){return i},get _names(){return l},set _names(b){l=b},get _formState(){return n},set _formState(b){n=b},get _options(){return t},set _options(b){t={...t,...b}}},trigger:F,register:Z,handleSubmit:ie,watch:W,setValue:ye,getValues:H,reset:(b,C)=>_e(Al(b)?b(s):b,C),resetField:B,clearErrors:ue,unregister:G,setError:j,setFocus:(b,C={})=>{const T=Q(r,b),R=T&&T._f;if(R){const U=R.refs?R.refs[0]:R.ref;U.focus&&(U.focus(),C.shouldSelect&&U.select())}},getFieldState:J}}function yp(e={}){const t=Le.useRef(),[n,r]=Le.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...cM(e),formState:n});const i=t.current.control;return i._options=e,XD({subject:i._subjects.state,callback:Le.useCallback(s=>{QD(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))},[i])}),Le.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),Le.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),t.current.formState=YD(n,i),t.current}const Ev=()=>{const e=Sn(),t=D.exports.useRef(),n=jn(),{id:r}=rw(),{title:i,description:s,precio:o,imagen:l,isLoading:a}=wn(h=>h.productoActivo),u="https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg",c={title:"",precio:"",description:""},{register:f,handleSubmit:d,formState:{errors:g},setValue:y}=yp({defaultValues:c}),m=({target:h})=>{h.files!==0&&(e(hS()),e(HR(h.files)))},S=h=>{r||e(VR(h)),r&&e(GR(h)),setTimeout(()=>{n("/tienda")},1e3)};return D.exports.useEffect(()=>{r||e(fS())},[]),r&&(y("title",i),y("precio",o),y("description",s)),v(ND,{children:z(LD,{children:[v(DD,{children:z(MD,{children:[v(zD,{}),z(FD,{children:[r?"Modificar":"Agregar"," producto"]})]})}),z(jD,{children:[v(BD,{children:z(UD,{onSubmit:d(S),children:[v(Nc,{children:"Titulo:"}),v(fv,{type:"text",placeholder:"ej. Tarjetas, Pack fotografia",...f("title",{required:!0})}),v(Nc,{children:"Precio:"}),v(fv,{type:"number",placeholder:"ej. 590000",min:0,...f("precio",{required:!0,validate:h=>h>0,valueAsNumber:!0})}),v(Nc,{children:"Descripci\xF3n:"}),v(VD,{type:"text",placeholder:"ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto.",...f("description",{required:!0})}),v(hv,{disabled:a,children:"GUARDAR"})]})}),z(HD,{children:[v(WD,{src:l!=null?l:u}),v("input",{type:"file",ref:t,style:{display:"none"},onChange:m}),v(hv,{onClick:()=>t.current.click(),disabled:a,children:"SUBIR IMAGEN"})]})]})]})})},dM=x.main`
  align-items: center;
  background: fixed repeat center/2rem url(${Bo});
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 100%;
`,fM=x.div`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  height: 40rem;
  margin-top: 6rem;
  width: 65%;

  @media screen and (max-width: 1366px) {
    height: 28rem;
    margin-top: 4.5rem;
  }
`,hM=x.div`
  /* background-color: aqua; */
  align-items: center;
  border-bottom: 2px solid #ddd;
  display: flex;
  height: 15%;
  width: 100%;
`,pM=x.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`,mM=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,gM=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,vM=x.div`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 85%;
  width: 100%;
`,yM=x.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 55%;
`,wM=x.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 80%;
`,ha=x.p`
  font-size: 0.9rem;
`,pa=x.div`
  /* background-color: aqua; */
  position: relative;

  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  }
`,ma=x.img`
  margin: 0.55rem 0 0 0.7rem;
  position: absolute;
  width: 1.2rem;
`,ga=x.input`
  background-color: #fff;
  border: 1px solid #c8c8c8;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 8%;
  width: 80%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 10%;
  }
`;x.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  width: 35%;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }
`;const SM=x.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  height: 100%;
  width: 45%;
`,bM=x.div`
  border-radius: 50%;
  height: 72%;
  width: 72%;
  border: 1px solid green;

  @media screen and (max-width: 1366px) {
    width: 80%;
    height: 80%;
  }
`,xM=x.img`
  /* border-radius: 50%;
  height: 72%;
  width: 72%; */
  width: 100%;
  height: 100%;
`,wp="/assets/input_user.19c197df.svg",WS="/assets/input_mail.df93a727.svg",GS="/assets/input_map.ab586e34.svg",qS="/assets/input_phone.d06f5729.svg",EM=()=>{const{name:e,email:t,direccion:n,numberPhone:r,imagen:i}=wn(s=>s.auth);return v(dM,{children:z(fM,{children:[v(hM,{children:z(pM,{children:[v(gM,{}),v(mM,{children:"Perfil"})]})}),z(vM,{children:[v(yM,{children:z(wM,{children:[v(ha,{children:"Nombre:"}),z(pa,{children:[v(ma,{src:wp}),v(ga,{type:"text",placeholder:e,disabled:!0})]}),v(ha,{children:"Correo:"}),z(pa,{children:[v(ma,{src:WS}),v(ga,{type:"text",placeholder:t,disabled:!0})]}),v(ha,{children:"Direcci\xF3n:"}),z(pa,{children:[v(ma,{src:GS}),v(ga,{type:"text",placeholder:n,disabled:!0})]}),v(ha,{children:"Telefono:"}),z(pa,{children:[v(ma,{src:qS}),v(ga,{type:"number",placeholder:r,disabled:!0})]})]})}),v(SM,{children:v(bM,{children:v(xM,{src:i})})})]})]})})},_M="/assets/bg_wave_contact_main.fa1bc45b.svg",kM=x.div`
  background: fixed repeat center/2.5rem url(${jo});
  height: 95vh;
  width: 100%;
`,CM=x.div`
  align-self: center;
  background: no-repeat center/cover url(${_M});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,TM=x.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`,IM=x.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,PM=x.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`,AM=x.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 35%;
  width: auto;
`,OM=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: 1rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,$M=x.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,RM=x.div`
  /* background-color: brown; */
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 3rem;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 2rem;
  }
`,NM=x.img`
  width: 2.5rem;

  @media screen and (max-width: 1366px) {
    width: 2rem;
  }
`,LM=x.p`
  font-size: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,KS=()=>v(kM,{children:z(CM,{children:[v(TM,{children:v(IM,{src:Ch})}),z(PM,{children:[z(AM,{children:[v(OM,{}),v($M,{children:"Contacto"})]}),z(RM,{children:[v(NM,{src:cS}),v(LM,{children:": mail.contacto@lunedesign.com"})]})]})]})}),DM=x.div`
  background: fixed repeat center/2rem url(${Bo});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`,MM=x.div`
  background-color: #f9f9f9;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 12rem 0 5rem 0;
  width: 70%;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`,FM=x.div`
  /* background-color: aqua; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`,zM=x.img`
  /* background-color: aqua; */
  width: 80%;
  height: 80%;
  /* padding-right: 2rem; */
  border-radius: 1rem;
`,jM=x.div`
  /* background-color: red; */
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`,BM=x.div`
  /* background-color: cyan; */
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`,UM=x.p`
  padding-left: 1rem;
  font-size: 1.8rem;
  margin-left: 1rem;
  border-bottom: 1px solid blue;
`,VM=x.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.7rem;
  margin-left: 1.5rem;
`,HM=x.p`
  font-size: 1.5rem;
  margin-left: 1.5rem;
`,WM=x.button`
  background-color: #71c2b1;
  border-radius: 2rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  font-size: 1rem;
  padding: 0.7rem 5rem;
  margin-left: 1rem;
  border: none;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1366px) {
    padding: 0.6rem 3.5rem;
  }
`,YS=()=>{const e=jn(),t=Sn(),{id:n}=rw(),[r,i]=D.exports.useState({});D.exports.useEffect(()=>{(async()=>{try{const f=await oS(ls(kr,`productos/${n}`)),d={id:f.id,...f.data()};i(d),t(Dr(d))}catch{console.log("error en cargar productos")}})()},[]);const{title:s,description:o,precio:l,imagen:a}=wn(c=>c.productoActivo);return v(DM,{children:z(MM,{children:[v(FM,{children:v(zM,{src:a})}),v(jM,{children:z(BM,{children:[v(UM,{children:s}),v(HM,{children:o}),z(VM,{children:["Precio: $",l]}),v(WM,{onClick:()=>{LS({title:s,description:o,id:n,precio:l,imagen:a}),e("/carrito")},children:"Agregar al carrito"})]})})]})})},GM=x.div`
  /* background-color: #f9f9f9; */
  border-radius: 1rem;
  height: auto;
  margin: 10rem 0 5rem 0;
  width: 87%;

  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1366px) {
    margin: 8rem 0 3rem 0;
  }
`,qM=x.div`
  background: fixed repeat center/2rem url(${jo});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`,KM=x.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,YM=x.div`
  /* background-color: grey; */
  align-items: center;
  display: flex;
  height: 10%;
  width: 100%;
`,QM=x.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: -0.4rem;
  width: 6rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,_v=x.p`
  font-size: 1.35rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.1rem;
  }
`,XM=x.h3`
  font-size: 1.8rem;
  font-weight: 400;
  margin-left: 10%;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,JM=x.div`
  /* background-color: blue; */
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,ZM=x.div`
   /* background-color: brown; */
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  text-align: right;

`,e3=x.div`
  /* background-color: red; */
  width: 33.33%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`,t3=x.div`
    /* background-color: brown; */
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  margin-right: 2rem;

`,n3=x.div`
  /* background-color: green; */
  width: 33.33%;
  height: 100%;
`,r3="/assets/Imagen_Cara.e1221d75.png",QS=()=>v(qM,{children:z(GM,{children:[z(e3,{children:[z(YM,{children:[v(QM,{}),v(XM,{children:"Sobre Mi"})]}),v(t3,{children:v(_v,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem hic voluptate tempore! Facere, nisi deserunt officiis recusandae consequuntur, expedita ab autem obcaecati molestiae incidunt dolorum. Asperiores accusantium suscipit officia? Tempora nesciunt esse enim facere necessitatibus inventore eius ab"})})]}),v(n3,{children:v(KM,{src:r3})}),v(JM,{children:v(ZM,{children:v(_v,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem hic voluptate tempore! Facere, nisi deserunt officiis recusandae consequuntur, expedita ab autem obcaecati molestiae incidunt dolorum. Asperiores accusantium suscipit officia? Tempora nesciunt esse enim facere necessitatibus inventore eius ab"})})})]})}),i3=()=>{const{rol:e}=wn(t=>t.auth);return z(Eh,{children:[v(Re,{path:"/",element:v($S,{})}),v(Re,{path:"/tienda",element:v(DS,{})}),v(Re,{path:"/contacto",element:v(KS,{})}),v(Re,{path:"/profile",element:v(EM,{})}),v(Re,{path:"/sobreMi",element:v(QS,{})}),v(Re,{path:"/carrito",element:v(dD,{})}),v(Re,{path:"/producto/:id",element:v(YS,{})}),e==="Administrador"&&z(Gr,{children:[v(Re,{path:"/agregar",element:v(Ev,{})}),v(Re,{path:"/modificar/:id",element:v(Ev,{})})]}),v(Re,{path:"/*",element:v(sw,{to:"/"})})]})},XS="/assets/bg_wave_sign_in_up.bec4429c.svg",s3=x.div`
  background: fixed repeat center/2.5rem url(${jo});
  height: 95vh;
  width: 100%;
`,o3=x.div`
  align-items: center;
  background: no-repeat center/cover url(${XS});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,a3=x.div`
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid #f8bfb3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  height: 30rem;
  width: 30rem;

  @media screen and (max-width: 1366px) {
    height: 25rem;
    margin-top: 4.5rem;
    width: 25rem;
  }
`,l3=x.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 2.8rem;
  font-weight: 400;
  margin: 10% 0;

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
    margin: 2rem 0;
  }
`,u3=x.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 1366px) {
    height: 65%;
  }
`,kv=x.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`,Cv=x.img`
  margin-left: 0.7rem;
  position: absolute;
  width: 1.2rem;
`,Tv=x.input`
  background-color: #fff;
  border: 1px solid #f8bfb3;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 10%;
  width: 91.5%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 12%;
  }
`,Iv=x.p`
  color: #ff2400;
  font-size: 0.7rem;
  margin-left: 0.8rem;
`,c3=x.span`
  background-color: #3772ff;
  height: 1px;
  opacity: 50%;
  width: 100%;
`,d3=`
  font-size: 1rem;
  width: 100%;
  padding: 0.5rem 0;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }
`,f3=x.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  ${d3}

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`,h3=x.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,jc=x.p`
  font-size: 0.9rem;
`,p3=x(Bn)`
  color: #3772ff;
  font-size: 0.9rem;
  margin-left: 0.3rem;
  text-decoration: none;

  &:active {
    color: #94b3fc;
  }

  @media (hover: hover) {
    &:hover {
      color: #94b3fc;
      cursor: pointer;
    }
  }
`,vf="/assets/input_padlock.390ed22b.svg",m3={email:"",password:""},g3=()=>{const{status:e}=wn(l=>l.auth),t=Sn(),{register:n,handleSubmit:r,formState:{errors:i}}=yp({defaultForm:m3}),s=D.exports.useMemo(()=>e==="checking",[e]);return v(s3,{children:v(o3,{children:z(a3,{children:[v(l3,{children:"Iniciar sesi\xF3n"}),z(u3,{onSubmit:r(l=>{t(J$(l))}),children:[v(jc,{children:"Correo:"}),z(kv,{children:[v(Cv,{src:wp}),v(Tv,{type:"email",placeholder:"example@lorem.com",...n("email",{required:{value:!0,message:"Necesitas este campo"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"El formato no es correcto"}})})]}),i.email&&v(Iv,{children:i.email.message}),v(jc,{children:"Contrase\xF1a:"}),z(kv,{children:[v(Cv,{src:vf}),v(Tv,{type:"password",placeholder:"********",...n("password",{required:{value:!0,message:"El campo es requerido"},minLength:{value:8,message:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."}})})]}),i.password&&v(Iv,{children:i.password.message}),v(c3,{}),v(f3,{type:"submit",disabled:s,children:"Iniciar sesi\xF3n"}),z(h3,{children:[v(jc,{children:"\xBFNo tienes cuenta?"}),v(p3,{to:"/register",children:"Crear cuenta"})]})]})]})})})},v3=x.div`
  background: fixed repeat center/2.5rem url(${jo});
  height: 95vh;
  width: 100%;
`,y3=x.div`
  align-items: center;
  background: no-repeat center/cover url(${XS});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,w3=x.div`
  background-color: #fff;
  border-radius: 1rem;
  border: 1px solid #f8bfb3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 6rem;
  height: 40rem;
  width: 70rem;

  @media screen and (max-width: 1366px) {
    height: 28rem;
    margin-top: 4.5rem;
    width: 60rem;
  }
`,S3=x.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  height: 20%;
  justify-content: center;
  width: 100%;
`,b3=x.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 2.5rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
  }
`,x3=x.form`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 100%;
`,E3=x.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  margin-left: 10%;
  width: 40%;
`,_3=x.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  margin-right: 5%;
  width: 45%;
`,k3=x.div`
  /* background-color: yellow; */
  align-items: center;
  border-top: 1px solid #3772ff50;
  display: flex;
  height: 20%;
  margin: 0 5rem;
  padding: 0 20rem;
  width: 100%;
`,ci=x.div`
  /* background-color: aqua; */
  position: relative;

  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  }
`,di=x.img`
  margin: 0.55rem 0 0 0.7rem;
  position: absolute;
  width: 1.2rem;
`,fi=x.input`
  background-color: #fff;
  border: 1px solid #f8bfb3;
  color: #1e1e1e;
  font-size: 1.1rem;
  padding: 0.5rem 0 0.5rem 8%;
  width: 80%;

  &:focus {
    border: 1px solid #71c2b1;
    outline: none;
  }

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 10%;
  }
`,Dt=x.p`
  color: ${e=>e.variant==="errorColor"?"#ff2400":"#868686"};
  font-size: 0.7rem;
  margin: 0.5rem 0 0 0.8rem;
`,C3=x.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  font-size: 1rem;
  height: 2.5rem;
  width: 100%;

  &:active {
    background-color: #65b1a0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #65b1a0;
      cursor: pointer;
    }
  }
`,T3=x.div`
  /* background-color: purple; */
  align-items: flex-start;
  display: flex;
  height: 10%;
  justify-content: center;
  width: 100%;
`,I3=x.div`
  align-items: center;
  display: flex;
  justify-content: center;
`,Cr=x.p`
  font-size: 0.9rem;
`,P3=x(Bn)`
  color: #3772ff;
  font-size: 0.9rem;
  margin-left: 0.3rem;
  text-decoration: none;

  &:active {
    color: #94b3fc;
  }

  @media (hover: hover) {
    &:hover {
      color: #94b3fc;
      cursor: pointer;
    }
  }
`,A3={email:"",password:"",name:"",direccion:"",numberPhone:"",confirmPassword:""},O3=()=>{const e=Sn(),{register:t,handleSubmit:n,formState:{errors:r}}=yp({defaultValues:A3});return v(v3,{children:v(y3,{children:z(w3,{children:[v(S3,{children:v(b3,{children:"Crear cuenta"})}),z(x3,{onSubmit:n(s=>{if(s.password!==s.confirmPassword)return alert("Las contrase\xF1as deben coincidir.");e(Q$(s))}),children:[z(E3,{children:[v(Cr,{children:"Nombre:"}),z(ci,{children:[v(di,{src:wp}),v(fi,{type:"text",placeholder:"Nombre completo",...t("name",{required:!0})}),r.name?v(Dt,{variant:"errorColor",children:"El nombre es obligatorio."}):v(Dt,{children:"El nombre es obligatorio."})]}),v(Cr,{children:"Correo:"}),z(ci,{children:[v(di,{src:WS}),v(fi,{type:"email",placeholder:"example@lorem.com",...t("email",{required:!0})}),r.email?v(Dt,{variant:"errorColor",children:"El correo debe contener un @."}):v(Dt,{children:"El correo debe contener un @."})]}),v(Cr,{children:"Contrase\xF1a:"}),z(ci,{children:[v(di,{src:vf}),v(fi,{type:"password",placeholder:"********",...t("password",{required:!0,minLength:8})}),r.password?v(Dt,{variant:"errorColor",children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."}):v(Dt,{children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."})]})]}),z(_3,{children:[v(Cr,{children:"Direccion:"}),z(ci,{children:[v(di,{src:GS}),v(fi,{type:"text",placeholder:"ej. Example villa sol #123",...t("direccion",{required:!0})}),r.direccion?v(Dt,{variant:"errorColor",children:"La direcci\xF3n es obligatoria."}):v(Dt,{children:"La direcci\xF3n es obligatoria."})]}),v(Cr,{children:"Numero telefonico:"}),z(ci,{children:[v(di,{src:qS}),v(fi,{type:"number",placeholder:"912345678",...t("numberPhone",{required:!0})}),r.numberPhone?v(Dt,{variant:"errorColor",children:"El n\xFAmero es obligatorio."}):v(Dt,{children:"El n\xFAmero es obligatorio."})]}),v(Cr,{children:"Confirmar contrase\xF1a:"}),z(ci,{children:[v(di,{src:vf}),v(fi,{type:"password",placeholder:"********",...t("confirmPassword",{required:!0,minLength:8})}),r.confirmPassword?v(Dt,{variant:"errorColor",children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."}):v(Dt,{children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."})]})]}),v(k3,{children:v(C3,{type:"submit",children:"Crear cuenta"})})]}),v(T3,{children:z(I3,{children:[v(Cr,{children:"\xBFYa tienes cuenta?"}),v(P3,{to:"/login",children:"Iniciar sesi\xF3n"})]})})]})})})},$3=()=>z(Eh,{children:[v(Re,{path:"/",element:v($S,{})}),v(Re,{path:"/tienda",element:v(DS,{})}),v(Re,{path:"/contacto",element:v(KS,{})}),v(Re,{path:"/login",element:v(g3,{})}),v(Re,{path:"/register",element:v(O3,{})}),v(Re,{path:"/sobreMi",element:v(QS,{})}),v(Re,{path:"/producto/:id",element:v(YS,{})}),v(Re,{path:"/*",element:v(sw,{to:"/login"})})]}),R3=()=>{const e=Y2();return e==="checking"?v(uS,{}):v(Eh,{children:e==="authenticated"?v(Re,{path:"/*",element:v(i3,{})}):v(Re,{path:"/*",element:v($3,{})})})},N3=x.div`
  /* background-color: cyan; */
  bottom: 0;
  height: 85px;
  position: fixed;
  right: 0;
  width: 90px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
`,L3=x(Bn)`
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
  background-color: #71c2b1;
  border: 2px solid #1e1e1e;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`,D3="/assets/carrito.2ba7b0c0.svg",M3=()=>v(N3,{children:v(L3,{to:"/carrito",children:v("img",{src:D3})})}),F3=()=>z(Gr,{children:[v(eR,{}),v(R3,{}),v(M3,{}),v(eC,{})]});Uc.createRoot(document.getElementById("root")).render(v(Le.StrictMode,{children:v(f_,{store:K2,children:v(dk,{children:v(F3,{})})})}));
