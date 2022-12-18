function VS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var M={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),WS=Symbol.for("react.portal"),GS=Symbol.for("react.fragment"),qS=Symbol.for("react.strict_mode"),KS=Symbol.for("react.profiler"),YS=Symbol.for("react.provider"),QS=Symbol.for("react.context"),XS=Symbol.for("react.forward_ref"),JS=Symbol.for("react.suspense"),ZS=Symbol.for("react.memo"),eb=Symbol.for("react.lazy"),Sp=Symbol.iterator;function tb(e){return e===null||typeof e!="object"?null:(e=Sp&&e[Sp]||e["@@iterator"],typeof e=="function"?e:null)}var Iv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pv=Object.assign,Av={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=Av,this.updater=n||Iv}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ov(){}Ov.prototype=Yi.prototype;function yf(e,t,n){this.props=e,this.context=t,this.refs=Av,this.updater=n||Iv}var wf=yf.prototype=new Ov;wf.constructor=yf;Pv(wf,Yi.prototype);wf.isPureReactComponent=!0;var bp=Array.isArray,$v=Object.prototype.hasOwnProperty,Sf={current:null},Rv={key:!0,ref:!0,__self:!0,__source:!0};function Nv(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)$v.call(t,r)&&!Rv.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wo,type:e,key:s,ref:o,props:i,_owner:Sf.current}}function nb(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bf(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function rb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xp=/\/+/g;function Du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rb(""+e.key):t.toString(36)}function pa(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case wo:case WS:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Du(o,0):r,bp(i)?(n="",e!=null&&(n=e.replace(xp,"$&/")+"/"),pa(i,t,n,"",function(u){return u})):i!=null&&(bf(i)&&(i=nb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bp(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Du(s,l);o+=pa(s,t,n,a,i)}else if(a=tb(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Du(s,l++),o+=pa(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(e,t,n){if(e==null)return e;var r=[],i=0;return pa(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ib(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ft={current:null},ma={transition:null},sb={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:ma,ReactCurrentOwner:Sf};se.Children={map:Bo,forEach:function(e,t,n){Bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bo(e,function(){t++}),t},toArray:function(e){return Bo(e,function(t){return t})||[]},only:function(e){if(!bf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Yi;se.Fragment=GS;se.Profiler=KS;se.PureComponent=yf;se.StrictMode=qS;se.Suspense=JS;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sb;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pv({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Sf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)$v.call(t,a)&&!Rv.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:wo,type:e.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(e){return e={$$typeof:QS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:YS,_context:e},e.Consumer=e};se.createElement=Nv;se.createFactory=function(e){var t=Nv.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:XS,render:e}};se.isValidElement=bf;se.lazy=function(e){return{$$typeof:eb,_payload:{_status:-1,_result:e},_init:ib}};se.memo=function(e,t){return{$$typeof:ZS,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=ma.transition;ma.transition={};try{e()}finally{ma.transition=t}};se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};se.useCallback=function(e,t){return ft.current.useCallback(e,t)};se.useContext=function(e){return ft.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return ft.current.useDeferredValue(e)};se.useEffect=function(e,t){return ft.current.useEffect(e,t)};se.useId=function(){return ft.current.useId()};se.useImperativeHandle=function(e,t,n){return ft.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return ft.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return ft.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return ft.current.useMemo(e,t)};se.useReducer=function(e,t,n){return ft.current.useReducer(e,t,n)};se.useRef=function(e){return ft.current.useRef(e)};se.useState=function(e){return ft.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return ft.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return ft.current.useTransition()};se.version="18.2.0";(function(e){e.exports=se})(M);const Ne=HS(M.exports),Bc=VS({__proto__:null,default:Ne},[M.exports]);var Uc={},xf={exports:{}},Rt={},Lv={exports:{}},Dv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,H){var J=F.length;F.push(H);e:for(;0<J;){var ue=J-1>>>1,j=F[ue];if(0<i(j,H))F[ue]=H,F[J]=j,J=ue;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;e:for(var ue=0,j=F.length,W=j>>>1;ue<W;){var G=2*(ue+1)-1,Z=F[G],k=G+1,ie=F[k];if(0>i(Z,J))k<j&&0>i(ie,Z)?(F[ue]=ie,F[k]=J,ue=k):(F[ue]=Z,F[G]=J,ue=G);else if(k<j&&0>i(ie,J))F[ue]=ie,F[k]=J,ue=k;else break e}}return H}function i(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,f=null,d=3,g=!1,v=!1,m=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=F)r(u),H.sortIndex=H.expirationTime,t(a,H);else break;H=n(u)}}function x(F){if(m=!1,y(F),!v)if(n(a)!==null)v=!0,ye(_);else{var H=n(u);H!==null&&be(x,H.startTime-F)}}function _(F,H){v=!1,m&&(m=!1,h(P),P=-1),g=!0;var J=d;try{for(y(H),f=n(a);f!==null&&(!(f.expirationTime>H)||F&&!A());){var ue=f.callback;if(typeof ue=="function"){f.callback=null,d=f.priorityLevel;var j=ue(f.expirationTime<=H);H=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(a)&&r(a),y(H)}else r(a);f=n(a)}if(f!==null)var W=!0;else{var G=n(u);G!==null&&be(x,G.startTime-H),W=!1}return W}finally{f=null,d=J,g=!1}}var O=!1,N=null,P=-1,Y=5,$=-1;function A(){return!(e.unstable_now()-$<Y)}function D(){if(N!==null){var F=e.unstable_now();$=F;var H=!0;try{H=N(!0,F)}finally{H?X():(O=!1,N=null)}}else O=!1}var X;if(typeof p=="function")X=function(){p(D)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,oe=re.port2;re.port1.onmessage=D,X=function(){oe.postMessage(null)}}else X=function(){S(D,0)};function ye(F){N=F,O||(O=!0,X())}function be(F,H){P=S(function(){F(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,ye(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(F){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var J=d;d=H;try{return F()}finally{d=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=d;d=F;try{return H()}finally{d=J}},e.unstable_scheduleCallback=function(F,H,J){var ue=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,F){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=J+j,F={id:c++,callback:H,priorityLevel:F,startTime:J,expirationTime:j,sortIndex:-1},J>ue?(F.sortIndex=J,t(u,F),n(a)===null&&F===n(u)&&(m?(h(P),P=-1):m=!0,be(x,J-ue))):(F.sortIndex=j,t(a,F),v||g||(v=!0,ye(_))),F},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(F){var H=d;return function(){var J=d;d=H;try{return F.apply(this,arguments)}finally{d=J}}}})(Dv);(function(e){e.exports=Dv})(Lv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=M.exports,Ot=Lv.exports;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fv=new Set,js={};function Qr(e,t){Di(e,t),Di(e+"Capture",t)}function Di(e,t){for(js[e]=t,e=0;e<t.length;e++)Fv.add(t[e])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,ob=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},_p={};function ab(e){return Vc.call(_p,e)?!0:Vc.call(Ep,e)?!1:ob.test(e)?_p[e]=!0:(Ep[e]=!0,!1)}function lb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ub(e,t,n,r){if(t===null||typeof t>"u"||lb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Je[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Je[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Je[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Je[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Je[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Je[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Je[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Je[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Je[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function _f(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ef,_f);Je[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ef,_f);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ef,_f);Je[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Je[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,r){var i=Je.hasOwnProperty(t)?Je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ub(t,n,i,r)&&(n=null),r||i===null?ab(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mn=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),ci=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),If=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),kp=Symbol.iterator;function os(e){return e===null||typeof e!="object"?null:(e=kp&&e[kp]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Object.assign,Mu;function gs(e){if(Mu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mu=t&&t[1]||""}return`
`+Mu+e}var Fu=!1;function zu(e,t){if(!e||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gs(e):""}function cb(e){switch(e.tag){case 5:return gs(e.type);case 16:return gs("Lazy");case 13:return gs("Suspense");case 19:return gs("SuspenseList");case 0:case 2:case 15:return e=zu(e.type,!1),e;case 11:return e=zu(e.type.render,!1),e;case 1:return e=zu(e.type,!0),e;default:return""}}function qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case di:return"Fragment";case ci:return"Portal";case Hc:return"Profiler";case Cf:return"StrictMode";case Wc:return"Suspense";case Gc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jv:return(e.displayName||"Context")+".Consumer";case zv:return(e._context.displayName||"Context")+".Provider";case Tf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case If:return t=e.displayName||null,t!==null?t:qc(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return qc(e(t))}catch{}}return null}function db(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(t);case 8:return t===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fb(e){var t=Uv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vo(e){e._valueTracker||(e._valueTracker=fb(e))}function Vv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kc(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Cp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hv(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function Yc(e,t){Hv(e,t);var n=mr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Qc(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Qc(e,t,n){(t!=="number"||Ra(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vs=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ip(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(vs(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mr(n)}}function Wv(e,t){var n=mr(t.value),r=mr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ho,qv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _s={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hb=["Webkit","ms","Moz","O"];Object.keys(_s).forEach(function(e){hb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_s[t]=_s[e]})});function Kv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_s.hasOwnProperty(e)&&_s[e]?(""+t).trim():t+"px"}function Yv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pb=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zc(e,t){if(t){if(pb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ed(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function Pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nd=null,Ti=null,Ii=null;function Ap(e){if(e=xo(e)){if(typeof nd!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Dl(t),nd(e.stateNode,e.type,t))}}function Qv(e){Ti?Ii?Ii.push(e):Ii=[e]:Ti=e}function Xv(){if(Ti){var e=Ti,t=Ii;if(Ii=Ti=null,Ap(e),t)for(e=0;e<t.length;e++)Ap(t[e])}}function Jv(e,t){return e(t)}function Zv(){}var ju=!1;function ey(e,t,n){if(ju)return e(t,n);ju=!0;try{return Jv(e,t,n)}finally{ju=!1,(Ti!==null||Ii!==null)&&(Zv(),Xv())}}function Us(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var rd=!1;if(An)try{var as={};Object.defineProperty(as,"passive",{get:function(){rd=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{rd=!1}function mb(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ks=!1,Na=null,La=!1,id=null,gb={onError:function(e){ks=!0,Na=e}};function vb(e,t,n,r,i,s,o,l,a){ks=!1,Na=null,mb.apply(gb,arguments)}function yb(e,t,n,r,i,s,o,l,a){if(vb.apply(this,arguments),ks){if(ks){var u=Na;ks=!1,Na=null}else throw Error(L(198));La||(La=!0,id=u)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ty(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Op(e){if(Xr(e)!==e)throw Error(L(188))}function wb(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Op(i),e;if(s===r)return Op(i),t;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function ny(e){return e=wb(e),e!==null?ry(e):null}function ry(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ry(e);if(t!==null)return t;e=e.sibling}return null}var iy=Ot.unstable_scheduleCallback,$p=Ot.unstable_cancelCallback,Sb=Ot.unstable_shouldYield,bb=Ot.unstable_requestPaint,Re=Ot.unstable_now,xb=Ot.unstable_getCurrentPriorityLevel,Af=Ot.unstable_ImmediatePriority,sy=Ot.unstable_UserBlockingPriority,Da=Ot.unstable_NormalPriority,Eb=Ot.unstable_LowPriority,oy=Ot.unstable_IdlePriority,$l=null,hn=null;function _b(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot($l,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Tb,kb=Math.log,Cb=Math.LN2;function Tb(e){return e>>>=0,e===0?32:31-(kb(e)/Cb|0)|0}var Wo=64,Go=4194304;function ys(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ma(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ys(l):(s&=o,s!==0&&(r=ys(s)))}else o=n&~i,o!==0?r=ys(o):s!==0&&(r=ys(s));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tn(t),i=1<<n,r|=e[n],t&=~i;return r}function Ib(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-tn(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=Ib(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function sd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ay(){var e=Wo;return Wo<<=1,(Wo&4194240)===0&&(Wo=64),e}function Bu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function So(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function Ab(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Of(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function ly(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var uy,$f,cy,dy,fy,od=!1,qo=[],nr=null,rr=null,ir=null,Vs=new Map,Hs=new Map,Hn=[],Ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(e,t){switch(e){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Vs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(t.pointerId)}}function ls(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&$f(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $b(e,t,n,r,i){switch(t){case"focusin":return nr=ls(nr,e,t,n,r,i),!0;case"dragenter":return rr=ls(rr,e,t,n,r,i),!0;case"mouseover":return ir=ls(ir,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,ls(Vs.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hs.set(s,ls(Hs.get(s)||null,e,t,n,r,i)),!0}return!1}function hy(e){var t=Pr(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=ty(n),t!==null){e.blockedOn=t,fy(e.priority,function(){cy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ga(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ad(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);td=r,n.target.dispatchEvent(r),td=null}else return t=xo(n),t!==null&&$f(t),e.blockedOn=n,!1;t.shift()}return!0}function Np(e,t,n){ga(e)&&n.delete(t)}function Rb(){od=!1,nr!==null&&ga(nr)&&(nr=null),rr!==null&&ga(rr)&&(rr=null),ir!==null&&ga(ir)&&(ir=null),Vs.forEach(Np),Hs.forEach(Np)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,od||(od=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,Rb)))}function Ws(e){function t(i){return us(i,e)}if(0<qo.length){us(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nr!==null&&us(nr,e),rr!==null&&us(rr,e),ir!==null&&us(ir,e),Vs.forEach(t),Hs.forEach(t),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)hy(n),n.blockedOn===null&&Hn.shift()}var Pi=Mn.ReactCurrentBatchConfig,Fa=!0;function Nb(e,t,n,r){var i=me,s=Pi.transition;Pi.transition=null;try{me=1,Rf(e,t,n,r)}finally{me=i,Pi.transition=s}}function Lb(e,t,n,r){var i=me,s=Pi.transition;Pi.transition=null;try{me=4,Rf(e,t,n,r)}finally{me=i,Pi.transition=s}}function Rf(e,t,n,r){if(Fa){var i=ad(e,t,n,r);if(i===null)Xu(e,t,r,za,n),Rp(e,r);else if($b(i,e,t,n,r))r.stopPropagation();else if(Rp(e,r),t&4&&-1<Ob.indexOf(e)){for(;i!==null;){var s=xo(i);if(s!==null&&uy(s),s=ad(e,t,n,r),s===null&&Xu(e,t,r,za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xu(e,t,r,null,n)}}var za=null;function ad(e,t,n,r){if(za=null,e=Pf(r),e=Pr(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ty(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return za=e,null}function py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xb()){case Af:return 1;case sy:return 4;case Da:case Eb:return 16;case oy:return 536870912;default:return 16}default:return 16}}var Xn=null,Nf=null,va=null;function my(){if(va)return va;var e,t=Nf,n=t.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return va=i.slice(e,1<r?1-r:void 0)}function ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Lp(){return!1}function Nt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:Lp,this.isPropagationStopped=Lp,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),t}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Nt(Qi),bo=Oe({},Qi,{view:0,detail:0}),Db=Nt(bo),Uu,Vu,cs,Rl=Oe({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cs&&(cs&&e.type==="mousemove"?(Uu=e.screenX-cs.screenX,Vu=e.screenY-cs.screenY):Vu=Uu=0,cs=e),Uu)},movementY:function(e){return"movementY"in e?e.movementY:Vu}}),Dp=Nt(Rl),Mb=Oe({},Rl,{dataTransfer:0}),Fb=Nt(Mb),zb=Oe({},bo,{relatedTarget:0}),Hu=Nt(zb),jb=Oe({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),Bb=Nt(jb),Ub=Oe({},Qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vb=Nt(Ub),Hb=Oe({},Qi,{data:0}),Mp=Nt(Hb),Wb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qb[e])?!!t[e]:!1}function Df(){return Kb}var Yb=Oe({},bo,{key:function(e){if(e.key){var t=Wb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Df,charCode:function(e){return e.type==="keypress"?ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qb=Nt(Yb),Xb=Oe({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Nt(Xb),Jb=Oe({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Df}),Zb=Nt(Jb),ex=Oe({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=Nt(ex),nx=Oe({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=Nt(nx),ix=[9,13,27,32],Mf=An&&"CompositionEvent"in window,Cs=null;An&&"documentMode"in document&&(Cs=document.documentMode);var sx=An&&"TextEvent"in window&&!Cs,gy=An&&(!Mf||Cs&&8<Cs&&11>=Cs),zp=String.fromCharCode(32),jp=!1;function vy(e,t){switch(e){case"keyup":return ix.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function ox(e,t){switch(e){case"compositionend":return yy(t);case"keypress":return t.which!==32?null:(jp=!0,zp);case"textInput":return e=t.data,e===zp&&jp?null:e;default:return null}}function ax(e,t){if(fi)return e==="compositionend"||!Mf&&vy(e,t)?(e=my(),va=Nf=Xn=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gy&&t.locale!=="ko"?null:t.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lx[e.type]:t==="textarea"}function wy(e,t,n,r){Qv(r),t=ja(t,"onChange"),0<t.length&&(n=new Lf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ts=null,Gs=null;function ux(e){Ay(e,0)}function Nl(e){var t=mi(e);if(Vv(t))return e}function cx(e,t){if(e==="change")return t}var Sy=!1;if(An){var Wu;if(An){var Gu="oninput"in document;if(!Gu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Gu=typeof Up.oninput=="function"}Wu=Gu}else Wu=!1;Sy=Wu&&(!document.documentMode||9<document.documentMode)}function Vp(){Ts&&(Ts.detachEvent("onpropertychange",by),Gs=Ts=null)}function by(e){if(e.propertyName==="value"&&Nl(Gs)){var t=[];wy(t,Gs,e,Pf(e)),ey(ux,t)}}function dx(e,t,n){e==="focusin"?(Vp(),Ts=t,Gs=n,Ts.attachEvent("onpropertychange",by)):e==="focusout"&&Vp()}function fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(Gs)}function hx(e,t){if(e==="click")return Nl(t)}function px(e,t){if(e==="input"||e==="change")return Nl(t)}function mx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:mx;function qs(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(t,i)||!rn(e[i],t[i]))return!1}return!0}function Hp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,t){var n=Hp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hp(n)}}function xy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ey(){for(var e=window,t=Ra();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ra(e.document)}return t}function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gx(e){var t=Ey(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xy(n.ownerDocument.documentElement,n)){if(r!==null&&Ff(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Wp(n,s);var o=Wp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vx=An&&"documentMode"in document&&11>=document.documentMode,hi=null,ld=null,Is=null,ud=!1;function Gp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||hi==null||hi!==Ra(r)||(r=hi,"selectionStart"in r&&Ff(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Is&&qs(Is,r)||(Is=r,r=ja(ld,"onSelect"),0<r.length&&(t=new Lf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hi)))}function Yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pi={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},qu={},_y={};An&&(_y=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Ll(e){if(qu[e])return qu[e];if(!pi[e])return e;var t=pi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _y)return qu[e]=t[n];return e}var ky=Ll("animationend"),Cy=Ll("animationiteration"),Ty=Ll("animationstart"),Iy=Ll("transitionend"),Py=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(e,t){Py.set(e,t),Qr(t,[e])}for(var Ku=0;Ku<qp.length;Ku++){var Yu=qp[Ku],yx=Yu.toLowerCase(),wx=Yu[0].toUpperCase()+Yu.slice(1);wr(yx,"on"+wx)}wr(ky,"onAnimationEnd");wr(Cy,"onAnimationIteration");wr(Ty,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Iy,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function Kp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yb(r,t,void 0,e),e.currentTarget=null}function Ay(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Kp(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Kp(i,l,u),s=a}}}if(La)throw e=id,La=!1,id=null,e}function xe(e,t){var n=t[pd];n===void 0&&(n=t[pd]=new Set);var r=e+"__bubble";n.has(r)||(Oy(t,e,2,!1),n.add(r))}function Qu(e,t,n){var r=0;t&&(r|=4),Oy(n,e,r,t)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function Ks(e){if(!e[Qo]){e[Qo]=!0,Fv.forEach(function(n){n!=="selectionchange"&&(Sx.has(n)||Qu(n,!1,e),Qu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qo]||(t[Qo]=!0,Qu("selectionchange",!1,t))}}function Oy(e,t,n,r){switch(py(t)){case 1:var i=Nb;break;case 4:i=Lb;break;default:i=Rf}n=i.bind(null,t,n,e),i=void 0,!rd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xu(e,t,n,r,i){var s=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ey(function(){var u=s,c=Pf(n),f=[];e:{var d=Py.get(e);if(d!==void 0){var g=Lf,v=e;switch(e){case"keypress":if(ya(n)===0)break e;case"keydown":case"keyup":g=Qb;break;case"focusin":v="focus",g=Hu;break;case"focusout":v="blur",g=Hu;break;case"beforeblur":case"afterblur":g=Hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Fb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Zb;break;case ky:case Cy:case Ty:g=Bb;break;case Iy:g=tx;break;case"scroll":g=Db;break;case"wheel":g=rx;break;case"copy":case"cut":case"paste":g=Vb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fp}var m=(t&4)!==0,S=!m&&e==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var p=u,y;p!==null;){y=p;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Us(p,h),x!=null&&m.push(Ys(p,x,y)))),S)break;p=p.return}0<m.length&&(d=new g(d,v,null,n,c),f.push({event:d,listeners:m}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==td&&(v=n.relatedTarget||n.fromElement)&&(Pr(v)||v[On]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Pr(v):null,v!==null&&(S=Xr(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(m=Dp,x="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(m=Fp,x="onPointerLeave",h="onPointerEnter",p="pointer"),S=g==null?d:mi(g),y=v==null?d:mi(v),d=new m(x,p+"leave",g,n,c),d.target=S,d.relatedTarget=y,x=null,Pr(c)===u&&(m=new m(h,p+"enter",v,n,c),m.target=y,m.relatedTarget=S,x=m),S=x,g&&v)t:{for(m=g,h=v,p=0,y=m;y;y=ri(y))p++;for(y=0,x=h;x;x=ri(x))y++;for(;0<p-y;)m=ri(m),p--;for(;0<y-p;)h=ri(h),y--;for(;p--;){if(m===h||h!==null&&m===h.alternate)break t;m=ri(m),h=ri(h)}m=null}else m=null;g!==null&&Yp(f,d,g,m,!1),v!==null&&S!==null&&Yp(f,S,v,m,!0)}}e:{if(d=u?mi(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var _=cx;else if(Bp(d))if(Sy)_=px;else{_=fx;var O=dx}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=hx);if(_&&(_=_(e,u))){wy(f,_,n,c);break e}O&&O(e,d,u),e==="focusout"&&(O=d._wrapperState)&&O.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(O=u?mi(u):window,e){case"focusin":(Bp(O)||O.contentEditable==="true")&&(hi=O,ld=u,Is=null);break;case"focusout":Is=ld=hi=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,Gp(f,n,c);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":Gp(f,n,c)}var N;if(Mf)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else fi?vy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(gy&&n.locale!=="ko"&&(fi||P!=="onCompositionStart"?P==="onCompositionEnd"&&fi&&(N=my()):(Xn=c,Nf="value"in Xn?Xn.value:Xn.textContent,fi=!0)),O=ja(u,P),0<O.length&&(P=new Mp(P,e,null,n,c),f.push({event:P,listeners:O}),N?P.data=N:(N=yy(n),N!==null&&(P.data=N)))),(N=sx?ox(e,n):ax(e,n))&&(u=ja(u,"onBeforeInput"),0<u.length&&(c=new Mp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}Ay(f,t)})}function Ys(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ja(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Us(e,n),s!=null&&r.unshift(Ys(e,s,i)),s=Us(e,t),s!=null&&r.push(Ys(e,s,i))),e=e.return}return r}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Us(n,s),a!=null&&o.unshift(Ys(n,a,l))):i||(a=Us(n,s),a!=null&&o.push(Ys(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var bx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function Qp(e){return(typeof e=="string"?e:""+e).replace(bx,`
`).replace(xx,"")}function Xo(e,t,n){if(t=Qp(t),Qp(e)!==t&&n)throw Error(L(425))}function Ba(){}var cd=null,dd=null;function fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(e){return Xp.resolve(null).then(e).catch(kx)}:hd;function kx(e){setTimeout(function(){throw e})}function Ju(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ws(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ws(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Xi,Qs="__reactProps$"+Xi,On="__reactContainer$"+Xi,pd="__reactEvents$"+Xi,Cx="__reactListeners$"+Xi,Tx="__reactHandles$"+Xi;function Pr(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Jp(e);e!==null;){if(n=e[dn])return n;e=Jp(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[dn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Dl(e){return e[Qs]||null}var md=[],gi=-1;function Sr(e){return{current:e}}function Ee(e){0>gi||(e.current=md[gi],md[gi]=null,gi--)}function Se(e,t){gi++,md[gi]=e.current,e.current=t}var gr={},it=Sr(gr),vt=Sr(!1),Mr=gr;function Mi(e,t){var n=e.type.contextTypes;if(!n)return gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function yt(e){return e=e.childContextTypes,e!=null}function Ua(){Ee(vt),Ee(it)}function Zp(e,t,n){if(it.current!==gr)throw Error(L(168));Se(it,t),Se(vt,n)}function $y(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,db(e)||"Unknown",i));return Oe({},n,r)}function Va(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Mr=it.current,Se(it,e),Se(vt,vt.current),!0}function em(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=$y(e,t,Mr),r.__reactInternalMemoizedMergedChildContext=e,Ee(vt),Ee(it),Se(it,e)):Ee(vt),Se(vt,n)}var En=null,Ml=!1,Zu=!1;function Ry(e){En===null?En=[e]:En.push(e)}function Ix(e){Ml=!0,Ry(e)}function br(){if(!Zu&&En!==null){Zu=!0;var e=0,t=me;try{var n=En;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}En=null,Ml=!1}catch(i){throw En!==null&&(En=En.slice(e+1)),iy(Af,br),i}finally{me=t,Zu=!1}}return null}var vi=[],yi=0,Ha=null,Wa=0,Ft=[],zt=0,Fr=null,_n=1,kn="";function _r(e,t){vi[yi++]=Wa,vi[yi++]=Ha,Ha=e,Wa=t}function Ny(e,t,n){Ft[zt++]=_n,Ft[zt++]=kn,Ft[zt++]=Fr,Fr=e;var r=_n;e=kn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-tn(t)+i|n<<i|r,kn=s+e}else _n=1<<s|n<<i|r,kn=e}function zf(e){e.return!==null&&(_r(e,1),Ny(e,1,0))}function jf(e){for(;e===Ha;)Ha=vi[--yi],vi[yi]=null,Wa=vi[--yi],vi[yi]=null;for(;e===Fr;)Fr=Ft[--zt],Ft[zt]=null,kn=Ft[--zt],Ft[zt]=null,_n=Ft[--zt],Ft[zt]=null}var It=null,Tt=null,Te=!1,Xt=null;function Ly(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,It=e,Tt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,It=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fr!==null?{id:_n,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,It=e,Tt=null,!0):!1;default:return!1}}function gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vd(e){if(Te){var t=Tt;if(t){var n=t;if(!tm(e,t)){if(gd(e))throw Error(L(418));t=sr(n.nextSibling);var r=It;t&&tm(e,t)?Ly(r,n):(e.flags=e.flags&-4097|2,Te=!1,It=e)}}else{if(gd(e))throw Error(L(418));e.flags=e.flags&-4097|2,Te=!1,It=e}}}function nm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Jo(e){if(e!==It)return!1;if(!Te)return nm(e),Te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fd(e.type,e.memoizedProps)),t&&(t=Tt)){if(gd(e))throw Dy(),Error(L(418));for(;t;)Ly(e,t),t=sr(t.nextSibling)}if(nm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Tt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=It?sr(e.stateNode.nextSibling):null;return!0}function Dy(){for(var e=Tt;e;)e=sr(e.nextSibling)}function Fi(){Tt=It=null,Te=!1}function Bf(e){Xt===null?Xt=[e]:Xt.push(e)}var Px=Mn.ReactCurrentBatchConfig;function Yt(e,t){if(e&&e.defaultProps){t=Oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ga=Sr(null),qa=null,wi=null,Uf=null;function Vf(){Uf=wi=qa=null}function Hf(e){var t=Ga.current;Ee(Ga),e._currentValue=t}function yd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ai(e,t){qa=e,Uf=wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function Wt(e){var t=e._currentValue;if(Uf!==e)if(e={context:e,memoizedValue:t,next:null},wi===null){if(qa===null)throw Error(L(308));wi=e,qa.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var Ar=null;function Wf(e){Ar===null?Ar=[e]:Ar.push(e)}function My(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Wf(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vn=!1;function Gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(le&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,Wf(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function wa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Of(e,n)}}function rm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ka(e,t,n,r){var i=e.updateQueue;Vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,g=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,m=l;switch(d=t,g=n,m.tag){case 1:if(v=m.payload,typeof v=="function"){f=v.call(g,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,d=typeof v=="function"?v.call(g,f,d):v,d==null)break e;f=Oe({},f,d);break e;case 2:Vn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else g={eventTime:g,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=f):c=c.next=g,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);jr|=o,e.lanes=o,e.memoizedState=f}}function im(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var zy=new Mv.Component().refs;function wd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ct(),i=lr(e),s=Pn(r,i);s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(nn(t,e,i,r),wa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ct(),i=lr(e),s=Pn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(nn(t,e,i,r),wa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ct(),r=lr(e),i=Pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,r),t!==null&&(nn(t,e,r,n),wa(t,e,r))}};function sm(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!qs(n,r)||!qs(i,s):!0}function jy(e,t,n){var r=!1,i=gr,s=t.contextType;return typeof s=="object"&&s!==null?s=Wt(s):(i=yt(t)?Mr:it.current,r=t.contextTypes,s=(r=r!=null)?Mi(e,i):gr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function om(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function Sd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zy,Gf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Wt(s):(s=yt(t)?Mr:it.current,i.context=Mi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fl.enqueueReplaceState(i,i.state,null),Ka(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ds(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===zy&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function am(e){var t=e._init;return t(e._payload)}function By(e){function t(h,p){if(e){var y=h.deletions;y===null?(h.deletions=[p],h.flags|=16):y.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=ur(h,p),h.index=0,h.sibling=null,h}function s(h,p,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<p?(h.flags|=2,p):y):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,y,x){return p===null||p.tag!==6?(p=oc(y,h.mode,x),p.return=h,p):(p=i(p,y),p.return=h,p)}function a(h,p,y,x){var _=y.type;return _===di?c(h,p,y.props.children,x,y.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Un&&am(_)===p.type)?(x=i(p,y.props),x.ref=ds(h,p,y),x.return=h,x):(x=ka(y.type,y.key,y.props,null,h.mode,x),x.ref=ds(h,p,y),x.return=h,x)}function u(h,p,y,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ac(y,h.mode,x),p.return=h,p):(p=i(p,y.children||[]),p.return=h,p)}function c(h,p,y,x,_){return p===null||p.tag!==7?(p=Nr(y,h.mode,x,_),p.return=h,p):(p=i(p,y),p.return=h,p)}function f(h,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=oc(""+p,h.mode,y),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Uo:return y=ka(p.type,p.key,p.props,null,h.mode,y),y.ref=ds(h,null,p),y.return=h,y;case ci:return p=ac(p,h.mode,y),p.return=h,p;case Un:var x=p._init;return f(h,x(p._payload),y)}if(vs(p)||os(p))return p=Nr(p,h.mode,y,null),p.return=h,p;Zo(h,p)}return null}function d(h,p,y,x){var _=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return _!==null?null:l(h,p,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Uo:return y.key===_?a(h,p,y,x):null;case ci:return y.key===_?u(h,p,y,x):null;case Un:return _=y._init,d(h,p,_(y._payload),x)}if(vs(y)||os(y))return _!==null?null:c(h,p,y,x,null);Zo(h,y)}return null}function g(h,p,y,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,l(p,h,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Uo:return h=h.get(x.key===null?y:x.key)||null,a(p,h,x,_);case ci:return h=h.get(x.key===null?y:x.key)||null,u(p,h,x,_);case Un:var O=x._init;return g(h,p,y,O(x._payload),_)}if(vs(x)||os(x))return h=h.get(y)||null,c(p,h,x,_,null);Zo(p,x)}return null}function v(h,p,y,x){for(var _=null,O=null,N=p,P=p=0,Y=null;N!==null&&P<y.length;P++){N.index>P?(Y=N,N=null):Y=N.sibling;var $=d(h,N,y[P],x);if($===null){N===null&&(N=Y);break}e&&N&&$.alternate===null&&t(h,N),p=s($,p,P),O===null?_=$:O.sibling=$,O=$,N=Y}if(P===y.length)return n(h,N),Te&&_r(h,P),_;if(N===null){for(;P<y.length;P++)N=f(h,y[P],x),N!==null&&(p=s(N,p,P),O===null?_=N:O.sibling=N,O=N);return Te&&_r(h,P),_}for(N=r(h,N);P<y.length;P++)Y=g(N,h,P,y[P],x),Y!==null&&(e&&Y.alternate!==null&&N.delete(Y.key===null?P:Y.key),p=s(Y,p,P),O===null?_=Y:O.sibling=Y,O=Y);return e&&N.forEach(function(A){return t(h,A)}),Te&&_r(h,P),_}function m(h,p,y,x){var _=os(y);if(typeof _!="function")throw Error(L(150));if(y=_.call(y),y==null)throw Error(L(151));for(var O=_=null,N=p,P=p=0,Y=null,$=y.next();N!==null&&!$.done;P++,$=y.next()){N.index>P?(Y=N,N=null):Y=N.sibling;var A=d(h,N,$.value,x);if(A===null){N===null&&(N=Y);break}e&&N&&A.alternate===null&&t(h,N),p=s(A,p,P),O===null?_=A:O.sibling=A,O=A,N=Y}if($.done)return n(h,N),Te&&_r(h,P),_;if(N===null){for(;!$.done;P++,$=y.next())$=f(h,$.value,x),$!==null&&(p=s($,p,P),O===null?_=$:O.sibling=$,O=$);return Te&&_r(h,P),_}for(N=r(h,N);!$.done;P++,$=y.next())$=g(N,h,P,$.value,x),$!==null&&(e&&$.alternate!==null&&N.delete($.key===null?P:$.key),p=s($,p,P),O===null?_=$:O.sibling=$,O=$);return e&&N.forEach(function(D){return t(h,D)}),Te&&_r(h,P),_}function S(h,p,y,x){if(typeof y=="object"&&y!==null&&y.type===di&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Uo:e:{for(var _=y.key,O=p;O!==null;){if(O.key===_){if(_=y.type,_===di){if(O.tag===7){n(h,O.sibling),p=i(O,y.props.children),p.return=h,h=p;break e}}else if(O.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Un&&am(_)===O.type){n(h,O.sibling),p=i(O,y.props),p.ref=ds(h,O,y),p.return=h,h=p;break e}n(h,O);break}else t(h,O);O=O.sibling}y.type===di?(p=Nr(y.props.children,h.mode,x,y.key),p.return=h,h=p):(x=ka(y.type,y.key,y.props,null,h.mode,x),x.ref=ds(h,p,y),x.return=h,h=x)}return o(h);case ci:e:{for(O=y.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(h,p.sibling),p=i(p,y.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=ac(y,h.mode,x),p.return=h,h=p}return o(h);case Un:return O=y._init,S(h,p,O(y._payload),x)}if(vs(y))return v(h,p,y,x);if(os(y))return m(h,p,y,x);Zo(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,y),p.return=h,h=p):(n(h,p),p=oc(y,h.mode,x),p.return=h,h=p),o(h)):n(h,p)}return S}var zi=By(!0),Uy=By(!1),Eo={},pn=Sr(Eo),Xs=Sr(Eo),Js=Sr(Eo);function Or(e){if(e===Eo)throw Error(L(174));return e}function qf(e,t){switch(Se(Js,t),Se(Xs,e),Se(pn,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jc(t,e)}Ee(pn),Se(pn,t)}function ji(){Ee(pn),Ee(Xs),Ee(Js)}function Vy(e){Or(Js.current);var t=Or(pn.current),n=Jc(t,e.type);t!==n&&(Se(Xs,e),Se(pn,n))}function Kf(e){Xs.current===e&&(Ee(pn),Ee(Xs))}var Pe=Sr(0);function Ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ec=[];function Yf(){for(var e=0;e<ec.length;e++)ec[e]._workInProgressVersionPrimary=null;ec.length=0}var Sa=Mn.ReactCurrentDispatcher,tc=Mn.ReactCurrentBatchConfig,zr=0,Ae=null,Me=null,je=null,Qa=!1,Ps=!1,Zs=0,Ax=0;function et(){throw Error(L(321))}function Qf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rn(e[n],t[n]))return!1;return!0}function Xf(e,t,n,r,i,s){if(zr=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sa.current=e===null||e.memoizedState===null?Nx:Lx,e=n(r,i),Ps){s=0;do{if(Ps=!1,Zs=0,25<=s)throw Error(L(301));s+=1,je=Me=null,t.updateQueue=null,Sa.current=Dx,e=n(r,i)}while(Ps)}if(Sa.current=Xa,t=Me!==null&&Me.next!==null,zr=0,je=Me=Ae=null,Qa=!1,t)throw Error(L(300));return e}function Jf(){var e=Zs!==0;return Zs=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ae.memoizedState=je=e:je=je.next=e,je}function Gt(){if(Me===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=je===null?Ae.memoizedState:je.next;if(t!==null)je=t,Me=e;else{if(e===null)throw Error(L(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},je===null?Ae.memoizedState=je=e:je=je.next=e}return je}function eo(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((zr&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,Ae.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,rn(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ae.lanes|=s,jr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);rn(s,t.memoizedState)||(gt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Hy(){}function Wy(e,t){var n=Ae,r=Gt(),i=t(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Zf(Ky.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,to(9,qy.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(L(349));(zr&30)!==0||Gy(n,t,i)}return i}function Gy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qy(e,t,n,r){t.value=n,t.getSnapshot=r,Yy(t)&&Qy(e)}function Ky(e,t,n){return n(function(){Yy(t)&&Qy(e)})}function Yy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rn(e,n)}catch{return!0}}function Qy(e){var t=$n(e,1);t!==null&&nn(t,e,1,-1)}function lm(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},t.queue=e,e=e.dispatch=Rx.bind(null,Ae,e),[t.memoizedState,e]}function to(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ae.updateQueue,t===null?(t={lastEffect:null,stores:null},Ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Xy(){return Gt().memoizedState}function ba(e,t,n,r){var i=un();Ae.flags|=e,i.memoizedState=to(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var i=Gt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Qf(r,o.deps)){i.memoizedState=to(t,n,s,r);return}}Ae.flags|=e,i.memoizedState=to(1|t,n,s,r)}function um(e,t){return ba(8390656,8,e,t)}function Zf(e,t){return zl(2048,8,e,t)}function Jy(e,t){return zl(4,2,e,t)}function Zy(e,t){return zl(4,4,e,t)}function e0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function t0(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,e0.bind(null,t,e),n)}function eh(){}function n0(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function r0(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function i0(e,t,n){return(zr&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n):(rn(n,t)||(n=ay(),Ae.lanes|=n,jr|=n,e.baseState=!0),t)}function Ox(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=tc.transition;tc.transition={};try{e(!1),t()}finally{me=n,tc.transition=r}}function s0(){return Gt().memoizedState}function $x(e,t,n){var r=lr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o0(e))a0(t,n);else if(n=My(e,t,n,r),n!==null){var i=ct();nn(n,e,r,i),l0(n,t,r)}}function Rx(e,t,n){var r=lr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o0(e))a0(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,rn(l,o)){var a=t.interleaved;a===null?(i.next=i,Wf(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=My(e,t,i,r),n!==null&&(i=ct(),nn(n,e,r,i),l0(n,t,r))}}function o0(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function a0(e,t){Ps=Qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function l0(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Of(e,n)}}var Xa={readContext:Wt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Nx={readContext:Wt,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Wt,useEffect:um,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ba(4194308,4,e0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ba(4194308,4,e,t)},useInsertionEffect:function(e,t){return ba(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$x.bind(null,Ae,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:lm,useDebugValue:eh,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=lm(!1),t=e[0];return e=Ox.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ae,i=un();if(Te){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Ve===null)throw Error(L(349));(zr&30)!==0||Gy(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,um(Ky.bind(null,r,s,e),[e]),r.flags|=2048,to(9,qy.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=un(),t=Ve.identifierPrefix;if(Te){var n=kn,r=_n;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ax++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lx={readContext:Wt,useCallback:n0,useContext:Wt,useEffect:Zf,useImperativeHandle:t0,useInsertionEffect:Jy,useLayoutEffect:Zy,useMemo:r0,useReducer:nc,useRef:Xy,useState:function(){return nc(eo)},useDebugValue:eh,useDeferredValue:function(e){var t=Gt();return i0(t,Me.memoizedState,e)},useTransition:function(){var e=nc(eo)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Hy,useSyncExternalStore:Wy,useId:s0,unstable_isNewReconciler:!1},Dx={readContext:Wt,useCallback:n0,useContext:Wt,useEffect:Zf,useImperativeHandle:t0,useInsertionEffect:Jy,useLayoutEffect:Zy,useMemo:r0,useReducer:rc,useRef:Xy,useState:function(){return rc(eo)},useDebugValue:eh,useDeferredValue:function(e){var t=Gt();return Me===null?t.memoizedState=e:i0(t,Me.memoizedState,e)},useTransition:function(){var e=rc(eo)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:Hy,useSyncExternalStore:Wy,useId:s0,unstable_isNewReconciler:!1};function Bi(e,t){try{var n="",r=t;do n+=cb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ic(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function bd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function u0(e,t,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Za||(Za=!0,Od=r),bd(e,t)},n}function c0(e,t,n){n=Pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){bd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bd(e,t),typeof r!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function cm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xx.bind(null,e,t,n),t.then(e,e))}function dm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fm(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pn(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Fx=Mn.ReactCurrentOwner,gt=!1;function at(e,t,n,r){t.child=e===null?Uy(t,null,n,r):zi(t,e.child,n,r)}function hm(e,t,n,r,i){n=n.render;var s=t.ref;return Ai(t,i),r=Xf(e,t,n,r,s,i),n=Jf(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rn(e,t,i)):(Te&&n&&zf(t),t.flags|=1,at(e,t,r,i),t.child)}function pm(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,d0(e,t,s,r,i)):(e=ka(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qs,n(o,r)&&e.ref===t.ref)return Rn(e,t,i)}return t.flags|=1,e=ur(s,r),e.ref=t.ref,e.return=t,t.child=e}function d0(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(qs(s,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,Rn(e,t,i)}return xd(e,t,n,r,i)}function f0(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(bi,xt),xt|=n;else{if((n&1073741824)===0)return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(bi,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(bi,xt),xt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Se(bi,xt),xt|=r;return at(e,t,i,n),t.child}function h0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xd(e,t,n,r,i){var s=yt(n)?Mr:it.current;return s=Mi(t,s),Ai(t,i),n=Xf(e,t,n,r,s,i),r=Jf(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rn(e,t,i)):(Te&&r&&zf(t),t.flags|=1,at(e,t,n,i),t.child)}function mm(e,t,n,r,i){if(yt(n)){var s=!0;Va(t)}else s=!1;if(Ai(t,i),t.stateNode===null)xa(e,t),jy(t,n,r),Sd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Wt(u):(u=yt(n)?Mr:it.current,u=Mi(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&om(t,o,r,u),Vn=!1;var d=t.memoizedState;o.state=d,Ka(t,r,o,i),a=t.memoizedState,l!==r||d!==a||vt.current||Vn?(typeof c=="function"&&(wd(t,n,c,r),a=t.memoizedState),(l=Vn||sm(t,n,l,r,d,a,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Fy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Yt(t.type,l),o.props=u,f=t.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Wt(a):(a=yt(n)?Mr:it.current,a=Mi(t,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||d!==a)&&om(t,o,r,a),Vn=!1,d=t.memoizedState,o.state=d,Ka(t,r,o,i);var v=t.memoizedState;l!==f||d!==v||vt.current||Vn?(typeof g=="function"&&(wd(t,n,g,r),v=t.memoizedState),(u=Vn||sm(t,n,u,r,d,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Ed(e,t,n,r,s,i)}function Ed(e,t,n,r,i,s){h0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&em(t,n,!1),Rn(e,t,s);r=t.stateNode,Fx.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zi(t,e.child,null,s),t.child=zi(t,null,l,s)):at(e,t,l,s),t.memoizedState=r.state,i&&em(t,n,!0),t.child}function p0(e){var t=e.stateNode;t.pendingContext?Zp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zp(e,t.context,!1),qf(e,t.containerInfo)}function gm(e,t,n,r,i){return Fi(),Bf(i),t.flags|=256,at(e,t,n,r),t.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function kd(e){return{baseLanes:e,cachePool:null,transitions:null}}function m0(e,t,n){var r=t.pendingProps,i=Pe.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Pe,i&1),e===null)return vd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,r,0,null),e=Nr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=kd(n),t.memoizedState=_d,e):th(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zx(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ur(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ur(l,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=_d,r}return s=e.child,e=s.sibling,r=ur(s,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function th(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ea(e,t,n,r){return r!==null&&Bf(r),zi(t,e.child,null,n),e=th(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zx(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ic(Error(L(422))),ea(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,(t.mode&1)!==0&&zi(t,e.child,null,o),t.child.memoizedState=kd(o),t.memoizedState=_d,s);if((t.mode&1)===0)return ea(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=ic(s,r,void 0),ea(e,t,o,r)}if(l=(o&e.childLanes)!==0,gt||l){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(e,i),nn(r,e,i,-1))}return ah(),r=ic(Error(L(421))),ea(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Jx.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Tt=sr(i.nextSibling),It=t,Te=!0,Xt=null,e!==null&&(Ft[zt++]=_n,Ft[zt++]=kn,Ft[zt++]=Fr,_n=e.id,kn=e.overflow,Fr=t),t=th(t,r.children),t.flags|=4096,t)}function vm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yd(e.return,t,n)}function sc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function g0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(at(e,t,r.children,n),r=Pe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vm(e,n,t);else if(e.tag===19)vm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Pe,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sc(t,!0,n,null,s);break;case"together":sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xa(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jr|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=ur(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ur(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jx(e,t,n){switch(t.tag){case 3:p0(t),Fi();break;case 5:Vy(t);break;case 1:yt(t.type)&&Va(t);break;case 4:qf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Se(Ga,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?m0(e,t,n):(Se(Pe,Pe.current&1),e=Rn(e,t,n),e!==null?e.sibling:null);Se(Pe,Pe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return g0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Pe,Pe.current),r)break;return null;case 22:case 23:return t.lanes=0,f0(e,t,n)}return Rn(e,t,n)}var v0,Cd,y0,w0;v0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};y0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Or(pn.current);var s=null;switch(n){case"input":i=Kc(e,i),r=Kc(e,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Xc(e,i),r=Xc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ba)}Zc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(js.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(js.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&xe("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};w0=function(e,t,n,r){n!==r&&(t.flags|=4)};function fs(e,t){if(!Te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bx(e,t,n){var r=t.pendingProps;switch(jf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return yt(t.type)&&Ua(),tt(t),null;case 3:return r=t.stateNode,ji(),Ee(vt),Ee(it),Yf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xt!==null&&(Nd(Xt),Xt=null))),Cd(e,t),tt(t),null;case 5:Kf(t);var i=Or(Js.current);if(n=t.type,e!==null&&t.stateNode!=null)y0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return tt(t),null}if(e=Or(pn.current),Jo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[dn]=t,r[Qs]=s,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<ws.length;i++)xe(ws[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Cp(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":Ip(r,s),xe("invalid",r)}Zc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xo(r.textContent,l,e),i=["children",""+l]):js.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Vo(r),Tp(r,s,!0);break;case"textarea":Vo(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ba)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[dn]=t,e[Qs]=r,v0(e,t,!1,!1),t.stateNode=e;e:{switch(o=ed(n,r),n){case"dialog":xe("cancel",e),xe("close",e),i=r;break;case"iframe":case"object":case"embed":xe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ws.length;i++)xe(ws[i],e);i=r;break;case"source":xe("error",e),i=r;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=r;break;case"details":xe("toggle",e),i=r;break;case"input":Cp(e,r),i=Kc(e,r),xe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),xe("invalid",e);break;case"textarea":Ip(e,r),i=Xc(e,r),xe("invalid",e);break;default:i=r}Zc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Yv(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&qv(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Bs(e,a):typeof a=="number"&&Bs(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(js.hasOwnProperty(s)?a!=null&&s==="onScroll"&&xe("scroll",e):a!=null&&kf(e,s,a,o))}switch(n){case"input":Vo(e),Tp(e,r,!1);break;case"textarea":Vo(e),Pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ci(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ba)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)w0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Or(Js.current),Or(pn.current),Jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(s=r.nodeValue!==n)&&(e=It,e!==null))switch(e.tag){case 3:Xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return tt(t),null;case 13:if(Ee(Pe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&Tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Dy(),Fi(),t.flags|=98560,s=!1;else if(s=Jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(L(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[dn]=t}else Fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;tt(t),s=!1}else Xt!==null&&(Nd(Xt),Xt=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Fe===0&&(Fe=3):ah())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return ji(),Cd(e,t),e===null&&Ks(t.stateNode.containerInfo),tt(t),null;case 10:return Hf(t.type._context),tt(t),null;case 17:return yt(t.type)&&Ua(),tt(t),null;case 19:if(Ee(Pe),s=t.memoizedState,s===null)return tt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)fs(s,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Ya(e),o!==null){for(t.flags|=128,fs(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Pe,Pe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Re()>Ui&&(t.flags|=128,r=!0,fs(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ya(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return tt(t),null}else 2*Re()-s.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,fs(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Re(),t.sibling=null,n=Pe.current,Se(Pe,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return oh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(xt&1073741824)!==0&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Ux(e,t){switch(jf(t),t.tag){case 1:return yt(t.type)&&Ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(),Ee(vt),Ee(it),Yf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Kf(t),null;case 13:if(Ee(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(Pe),null;case 4:return ji(),null;case 10:return Hf(t.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var ta=!1,rt=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,K=null;function Si(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(e,t,r)}else n.current=null}function Td(e,t,n){try{n()}catch(r){$e(e,t,r)}}var ym=!1;function Hx(e,t){if(cd=Fa,e=Ey(),Ff(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:e,selectionRange:n},Fa=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,S=v.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:Yt(t.type,m),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(x){$e(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return v=ym,ym=!1,v}function As(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Td(t,n,s)}i=i.next}while(i!==r)}}function jl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Id(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function S0(e){var t=e.alternate;t!==null&&(e.alternate=null,S0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[Qs],delete t[pd],delete t[Cx],delete t[Tx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b0(e){return e.tag===5||e.tag===3||e.tag===4}function wm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ba));else if(r!==4&&(e=e.child,e!==null))for(Pd(e,t,n),e=e.sibling;e!==null;)Pd(e,t,n),e=e.sibling}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}var qe=null,Qt=!1;function jn(e,t,n){for(n=n.child;n!==null;)x0(e,t,n),n=n.sibling}function x0(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:rt||Si(n,t);case 6:var r=qe,i=Qt;qe=null,jn(e,t,n),qe=r,Qt=i,qe!==null&&(Qt?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Qt?(e=qe,n=n.stateNode,e.nodeType===8?Ju(e.parentNode,n):e.nodeType===1&&Ju(e,n),Ws(e)):Ju(qe,n.stateNode));break;case 4:r=qe,i=Qt,qe=n.stateNode.containerInfo,Qt=!0,jn(e,t,n),qe=r,Qt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Td(n,t,o),i=i.next}while(i!==r)}jn(e,t,n);break;case 1:if(!rt&&(Si(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){$e(n,t,l)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,jn(e,t,n),rt=r):jn(e,t,n);break;default:jn(e,t,n)}}function Sm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vx),t.forEach(function(r){var i=Zx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Qt=!1;break e;case 3:qe=l.stateNode.containerInfo,Qt=!0;break e;case 4:qe=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(qe===null)throw Error(L(160));x0(s,o,i),qe=null,Qt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){$e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)E0(t,e),t=t.sibling}function E0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),ln(e),r&4){try{As(3,e,e.return),jl(3,e)}catch(m){$e(e,e.return,m)}try{As(5,e,e.return)}catch(m){$e(e,e.return,m)}}break;case 1:Kt(t,e),ln(e),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Kt(t,e),ln(e),r&512&&n!==null&&Si(n,n.return),e.flags&32){var i=e.stateNode;try{Bs(i,"")}catch(m){$e(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Hv(i,s),ed(l,o);var u=ed(l,s);for(o=0;o<a.length;o+=2){var c=a[o],f=a[o+1];c==="style"?Yv(i,f):c==="dangerouslySetInnerHTML"?qv(i,f):c==="children"?Bs(i,f):kf(i,c,f,u)}switch(l){case"input":Yc(i,s);break;case"textarea":Wv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ci(i,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qs]=s}catch(m){$e(e,e.return,m)}}break;case 6:if(Kt(t,e),ln(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){$e(e,e.return,m)}}break;case 3:if(Kt(t,e),ln(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ws(t.containerInfo)}catch(m){$e(e,e.return,m)}break;case 4:Kt(t,e),ln(e);break;case 13:Kt(t,e),ln(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ih=Re())),r&4&&Sm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||c,Kt(t,e),rt=u):Kt(t,e),ln(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(K=e,c=e.child;c!==null;){for(f=K=c;K!==null;){switch(d=K,g=d.child,d.tag){case 0:case 11:case 14:case 15:As(4,d,d.return);break;case 1:Si(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(m){$e(r,n,m)}}break;case 5:Si(d,d.return);break;case 22:if(d.memoizedState!==null){xm(f);continue}}g!==null?(g.return=d,K=g):xm(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Kv("display",o))}catch(m){$e(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){$e(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kt(t,e),ln(e),r&4&&Sm(e);break;case 21:break;default:Kt(t,e),ln(e)}}function ln(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(b0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bs(i,""),r.flags&=-33);var s=wm(e);Ad(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=wm(e);Pd(e,l,o);break;default:throw Error(L(161))}}catch(a){$e(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wx(e,t,n){K=e,_0(e)}function _0(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ta;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||rt;l=ta;var u=rt;if(ta=o,(rt=a)&&!u)for(K=i;K!==null;)o=K,a=o.child,o.tag===22&&o.memoizedState!==null?Em(i):a!==null?(a.return=o,K=a):Em(i);for(;s!==null;)K=s,_0(s),s=s.sibling;K=i,ta=l,rt=u}bm(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,K=s):bm(e)}}function bm(e){for(;K!==null;){var t=K;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:rt||jl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Yt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&im(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}im(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ws(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}rt||t.flags&512&&Id(t)}catch(d){$e(t,t.return,d)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function xm(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Em(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jl(4,t)}catch(a){$e(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){$e(t,i,a)}}var s=t.return;try{Id(t)}catch(a){$e(t,s,a)}break;case 5:var o=t.return;try{Id(t)}catch(a){$e(t,o,a)}}}catch(a){$e(t,t.return,a)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var Gx=Math.ceil,Ja=Mn.ReactCurrentDispatcher,nh=Mn.ReactCurrentOwner,Ut=Mn.ReactCurrentBatchConfig,le=0,Ve=null,Le=null,Qe=0,xt=0,bi=Sr(0),Fe=0,no=null,jr=0,Bl=0,rh=0,Os=null,mt=null,ih=0,Ui=1/0,xn=null,Za=!1,Od=null,ar=null,na=!1,Jn=null,el=0,$s=0,$d=null,Ea=-1,_a=0;function ct(){return(le&6)!==0?Re():Ea!==-1?Ea:Ea=Re()}function lr(e){return(e.mode&1)===0?1:(le&2)!==0&&Qe!==0?Qe&-Qe:Px.transition!==null?(_a===0&&(_a=ay()),_a):(e=me,e!==0||(e=window.event,e=e===void 0?16:py(e.type)),e)}function nn(e,t,n,r){if(50<$s)throw $s=0,$d=null,Error(L(185));So(e,n,r),((le&2)===0||e!==Ve)&&(e===Ve&&((le&2)===0&&(Bl|=n),Fe===4&&Wn(e,Qe)),wt(e,r),n===1&&le===0&&(t.mode&1)===0&&(Ui=Re()+500,Ml&&br()))}function wt(e,t){var n=e.callbackNode;Pb(e,t);var r=Ma(e,e===Ve?Qe:0);if(r===0)n!==null&&$p(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$p(n),t===1)e.tag===0?Ix(_m.bind(null,e)):Ry(_m.bind(null,e)),_x(function(){(le&6)===0&&br()}),n=null;else{switch(ly(r)){case 1:n=Af;break;case 4:n=sy;break;case 16:n=Da;break;case 536870912:n=oy;break;default:n=Da}n=$0(n,k0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function k0(e,t){if(Ea=-1,_a=0,(le&6)!==0)throw Error(L(327));var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var r=Ma(e,e===Ve?Qe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=tl(e,r);else{t=r;var i=le;le|=2;var s=T0();(Ve!==e||Qe!==t)&&(xn=null,Ui=Re()+500,Rr(e,t));do try{Yx();break}catch(l){C0(e,l)}while(1);Vf(),Ja.current=s,le=i,Le!==null?t=0:(Ve=null,Qe=0,t=Fe)}if(t!==0){if(t===2&&(i=sd(e),i!==0&&(r=i,t=Rd(e,i))),t===1)throw n=no,Rr(e,0),Wn(e,r),wt(e,Re()),n;if(t===6)Wn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!qx(i)&&(t=tl(e,r),t===2&&(s=sd(e),s!==0&&(r=s,t=Rd(e,s))),t===1))throw n=no,Rr(e,0),Wn(e,r),wt(e,Re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:kr(e,mt,xn);break;case 3:if(Wn(e,r),(r&130023424)===r&&(t=ih+500-Re(),10<t)){if(Ma(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ct(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hd(kr.bind(null,e,mt,xn),t);break}kr(e,mt,xn);break;case 4:if(Wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gx(r/1960))-r,10<r){e.timeoutHandle=hd(kr.bind(null,e,mt,xn),r);break}kr(e,mt,xn);break;case 5:kr(e,mt,xn);break;default:throw Error(L(329))}}}return wt(e,Re()),e.callbackNode===n?k0.bind(null,e):null}function Rd(e,t){var n=Os;return e.current.memoizedState.isDehydrated&&(Rr(e,t).flags|=256),e=tl(e,t),e!==2&&(t=mt,mt=n,t!==null&&Nd(t)),e}function Nd(e){mt===null?mt=e:mt.push.apply(mt,e)}function qx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t){for(t&=~rh,t&=~Bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),r=1<<n;e[n]=-1,t&=~r}}function _m(e){if((le&6)!==0)throw Error(L(327));Oi();var t=Ma(e,0);if((t&1)===0)return wt(e,Re()),null;var n=tl(e,t);if(e.tag!==0&&n===2){var r=sd(e);r!==0&&(t=r,n=Rd(e,r))}if(n===1)throw n=no,Rr(e,0),Wn(e,t),wt(e,Re()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,mt,xn),wt(e,Re()),null}function sh(e,t){var n=le;le|=1;try{return e(t)}finally{le=n,le===0&&(Ui=Re()+500,Ml&&br())}}function Br(e){Jn!==null&&Jn.tag===0&&(le&6)===0&&Oi();var t=le;le|=1;var n=Ut.transition,r=me;try{if(Ut.transition=null,me=1,e)return e()}finally{me=r,Ut.transition=n,le=t,(le&6)===0&&br()}}function oh(){xt=bi.current,Ee(bi)}function Rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ex(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(jf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ua();break;case 3:ji(),Ee(vt),Ee(it),Yf();break;case 5:Kf(r);break;case 4:ji();break;case 13:Ee(Pe);break;case 19:Ee(Pe);break;case 10:Hf(r.type._context);break;case 22:case 23:oh()}n=n.return}if(Ve=e,Le=e=ur(e.current,null),Qe=xt=t,Fe=0,no=null,rh=Bl=jr=0,mt=Os=null,Ar!==null){for(t=0;t<Ar.length;t++)if(n=Ar[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ar=null}return e}function C0(e,t){do{var n=Le;try{if(Vf(),Sa.current=Xa,Qa){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qa=!1}if(zr=0,je=Me=Ae=null,Ps=!1,Zs=0,nh.current=null,n===null||n.return===null){Fe=1,no=t,Le=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=Qe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=dm(o);if(g!==null){g.flags&=-257,fm(g,o,l,s,t),g.mode&1&&cm(s,u,t),t=g,a=u;var v=t.updateQueue;if(v===null){var m=new Set;m.add(a),t.updateQueue=m}else v.add(a);break e}else{if((t&1)===0){cm(s,u,t),ah();break e}a=Error(L(426))}}else if(Te&&l.mode&1){var S=dm(o);if(S!==null){(S.flags&65536)===0&&(S.flags|=256),fm(S,o,l,s,t),Bf(Bi(a,l));break e}}s=a=Bi(a,l),Fe!==4&&(Fe=2),Os===null?Os=[s]:Os.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=u0(s,a,t);rm(s,h);break e;case 1:l=a;var p=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ar===null||!ar.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=c0(s,l,t);rm(s,x);break e}}s=s.return}while(s!==null)}P0(n)}catch(_){t=_,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function T0(){var e=Ja.current;return Ja.current=Xa,e===null?Xa:e}function ah(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ve===null||(jr&268435455)===0&&(Bl&268435455)===0||Wn(Ve,Qe)}function tl(e,t){var n=le;le|=2;var r=T0();(Ve!==e||Qe!==t)&&(xn=null,Rr(e,t));do try{Kx();break}catch(i){C0(e,i)}while(1);if(Vf(),le=n,Ja.current=r,Le!==null)throw Error(L(261));return Ve=null,Qe=0,Fe}function Kx(){for(;Le!==null;)I0(Le)}function Yx(){for(;Le!==null&&!Sb();)I0(Le)}function I0(e){var t=O0(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?P0(e):Le=t,nh.current=null}function P0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Bx(n,t,xt),n!==null){Le=n;return}}else{if(n=Ux(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Le=null;return}}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Fe===0&&(Fe=5)}function kr(e,t,n){var r=me,i=Ut.transition;try{Ut.transition=null,me=1,Qx(e,t,n,r)}finally{Ut.transition=i,me=r}return null}function Qx(e,t,n,r){do Oi();while(Jn!==null);if((le&6)!==0)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ab(e,s),e===Ve&&(Le=Ve=null,Qe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||na||(na=!0,$0(Da,function(){return Oi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Ut.transition,Ut.transition=null;var o=me;me=1;var l=le;le|=4,nh.current=null,Hx(e,n),E0(n,e),gx(dd),Fa=!!cd,dd=cd=null,e.current=n,Wx(n),bb(),le=l,me=o,Ut.transition=s}else e.current=n;if(na&&(na=!1,Jn=e,el=i),s=e.pendingLanes,s===0&&(ar=null),_b(n.stateNode),wt(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Za)throw Za=!1,e=Od,Od=null,e;return(el&1)!==0&&e.tag!==0&&Oi(),s=e.pendingLanes,(s&1)!==0?e===$d?$s++:($s=0,$d=e):$s=0,br(),null}function Oi(){if(Jn!==null){var e=ly(el),t=Ut.transition,n=me;try{if(Ut.transition=null,me=16>e?16:e,Jn===null)var r=!1;else{if(e=Jn,Jn=null,el=0,(le&6)!==0)throw Error(L(331));var i=le;for(le|=4,K=e.current;K!==null;){var s=K,o=s.child;if((K.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(K=u;K!==null;){var c=K;switch(c.tag){case 0:case 11:case 15:As(8,c,s)}var f=c.child;if(f!==null)f.return=c,K=f;else for(;K!==null;){c=K;var d=c.sibling,g=c.return;if(S0(c),c===u){K=null;break}if(d!==null){d.return=g,K=d;break}K=g}}}var v=s.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var S=m.sibling;m.sibling=null,m=S}while(m!==null)}}K=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:As(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,K=h;break e}K=s.return}}var p=e.current;for(K=p;K!==null;){o=K;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,K=y;else e:for(o=p;K!==null;){if(l=K,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:jl(9,l)}}catch(_){$e(l,l.return,_)}if(l===o){K=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,K=x;break e}K=l.return}}if(le=i,br(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot($l,e)}catch{}r=!0}return r}finally{me=n,Ut.transition=t}}return!1}function km(e,t,n){t=Bi(n,t),t=u0(e,t,1),e=or(e,t,1),t=ct(),e!==null&&(So(e,1,t),wt(e,t))}function $e(e,t,n){if(e.tag===3)km(e,e,n);else for(;t!==null;){if(t.tag===3){km(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){e=Bi(n,e),e=c0(t,e,1),t=or(t,e,1),e=ct(),t!==null&&(So(t,1,e),wt(t,e));break}}t=t.return}}function Xx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ct(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>Re()-ih?Rr(e,0):rh|=n),wt(e,t)}function A0(e,t){t===0&&((e.mode&1)===0?t=1:(t=Go,Go<<=1,(Go&130023424)===0&&(Go=4194304)));var n=ct();e=$n(e,t),e!==null&&(So(e,t,n),wt(e,n))}function Jx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),A0(e,n)}function Zx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),A0(e,n)}var O0;O0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return gt=!1,jx(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Te&&(t.flags&1048576)!==0&&Ny(t,Wa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xa(e,t),e=t.pendingProps;var i=Mi(t,it.current);Ai(t,n),i=Xf(null,t,r,e,i,n);var s=Jf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,yt(r)?(s=!0,Va(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gf(t),i.updater=Fl,t.stateNode=i,i._reactInternals=t,Sd(t,r,e,n),t=Ed(null,t,r,!0,s,n)):(t.tag=0,Te&&s&&zf(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=tE(r),e=Yt(r,e),i){case 0:t=xd(null,t,r,e,n);break e;case 1:t=mm(null,t,r,e,n);break e;case 11:t=hm(null,t,r,e,n);break e;case 14:t=pm(null,t,r,Yt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),xd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),mm(e,t,r,i,n);case 3:e:{if(p0(t),e===null)throw Error(L(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Fy(e,t),Ka(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Bi(Error(L(423)),t),t=gm(e,t,r,n,i);break e}else if(r!==i){i=Bi(Error(L(424)),t),t=gm(e,t,r,n,i);break e}else for(Tt=sr(t.stateNode.containerInfo.firstChild),It=t,Te=!0,Xt=null,n=Uy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){t=Rn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return Vy(t),e===null&&vd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,fd(r,i)?o=null:s!==null&&fd(r,s)&&(t.flags|=32),h0(e,t),at(e,t,o,n),t.child;case 6:return e===null&&vd(t),null;case 13:return m0(e,t,n);case 4:return qf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zi(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),hm(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Se(Ga,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!vt.current){t=Rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Pn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),yd(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yd(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ai(t,n),i=Wt(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Yt(r,t.pendingProps),i=Yt(r.type,i),pm(e,t,r,i,n);case 15:return d0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Yt(r,i),xa(e,t),t.tag=1,yt(r)?(e=!0,Va(t)):e=!1,Ai(t,n),jy(t,r,i),Sd(t,r,i,n),Ed(null,t,r,!0,e,n);case 19:return g0(e,t,n);case 22:return f0(e,t,n)}throw Error(L(156,t.tag))};function $0(e,t){return iy(e,t)}function eE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new eE(e,t,n,r)}function lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tE(e){if(typeof e=="function")return lh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tf)return 11;if(e===If)return 14}return 2}function ur(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ka(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")lh(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case di:return Nr(n.children,i,s,t);case Cf:o=8,i|=8;break;case Hc:return e=jt(12,n,t,i|2),e.elementType=Hc,e.lanes=s,e;case Wc:return e=jt(13,n,t,i),e.elementType=Wc,e.lanes=s,e;case Gc:return e=jt(19,n,t,i),e.elementType=Gc,e.lanes=s,e;case Bv:return Ul(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zv:o=10;break e;case jv:o=9;break e;case Tf:o=11;break e;case If:o=14;break e;case Un:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=jt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Nr(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=jt(22,e,r,t),e.elementType=Bv,e.lanes=n,e.stateNode={isHidden:!1},e}function oc(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function ac(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uh(e,t,n,r,i,s,o,l,a){return e=new nE(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gf(s),e}function rE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function R0(e){if(!e)return gr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(yt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(yt(n))return $y(e,n,t)}return t}function N0(e,t,n,r,i,s,o,l,a){return e=uh(n,r,!0,e,i,s,o,l,a),e.context=R0(null),n=e.current,r=ct(),i=lr(n),s=Pn(r,i),s.callback=t!=null?t:null,or(n,s,i),e.current.lanes=i,So(e,i,r),wt(e,r),e}function Vl(e,t,n,r){var i=t.current,s=ct(),o=lr(i);return n=R0(n),t.context===null?t.context=n:t.pendingContext=n,t=Pn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(i,t,o),e!==null&&(nn(e,i,o,s),wa(e,i,o)),o}function nl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ch(e,t){Cm(e,t),(e=e.alternate)&&Cm(e,t)}function iE(){return null}var L0=typeof reportError=="function"?reportError:function(e){console.error(e)};function dh(e){this._internalRoot=e}Hl.prototype.render=dh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Vl(e,t,null,null)};Hl.prototype.unmount=dh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Br(function(){Vl(null,e,null,null)}),t[On]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=dy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&hy(e)}};function fh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function sE(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=nl(o);s.call(u)}}var o=N0(t,r,e,0,null,!1,!1,"",Tm);return e._reactRootContainer=o,e[On]=o.current,Ks(e.nodeType===8?e.parentNode:e),Br(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=nl(a);l.call(u)}}var a=uh(e,0,!1,null,null,!1,!1,"",Tm);return e._reactRootContainer=a,e[On]=a.current,Ks(e.nodeType===8?e.parentNode:e),Br(function(){Vl(t,a,n,r)}),a}function Gl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=nl(o);l.call(a)}}Vl(t,o,e,i)}else o=sE(n,t,e,i,r);return nl(o)}uy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ys(t.pendingLanes);n!==0&&(Of(t,n|1),wt(t,Re()),(le&6)===0&&(Ui=Re()+500,br()))}break;case 13:Br(function(){var r=$n(e,1);if(r!==null){var i=ct();nn(r,e,1,i)}}),ch(e,1)}};$f=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=ct();nn(t,e,134217728,n)}ch(e,134217728)}};cy=function(e){if(e.tag===13){var t=lr(e),n=$n(e,t);if(n!==null){var r=ct();nn(n,e,t,r)}ch(e,t)}};dy=function(){return me};fy=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};nd=function(e,t,n){switch(t){case"input":if(Yc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dl(r);if(!i)throw Error(L(90));Vv(r),Yc(r,i)}}}break;case"textarea":Wv(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};Jv=sh;Zv=Br;var oE={usingClientEntryPoint:!1,Events:[xo,mi,Dl,Qv,Xv,sh]},hs={findFiberByHostInstance:Pr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aE={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ny(e),e===null?null:e.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||iE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{$l=ra.inject(aE),hn=ra}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oE;Rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(t))throw Error(L(200));return rE(e,t,null,n)};Rt.createRoot=function(e,t){if(!fh(e))throw Error(L(299));var n=!1,r="",i=L0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uh(e,1,!1,null,null,n,!1,r,i),e[On]=t.current,Ks(e.nodeType===8?e.parentNode:e),new dh(t)};Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=ny(t),e=e===null?null:e.stateNode,e};Rt.flushSync=function(e){return Br(e)};Rt.hydrate=function(e,t,n){if(!Wl(t))throw Error(L(200));return Gl(null,e,t,!0,n)};Rt.hydrateRoot=function(e,t,n){if(!fh(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=L0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=N0(t,null,e,1,n!=null?n:null,i,!1,s,o),e[On]=t.current,Ks(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Hl(t)};Rt.render=function(e,t,n){if(!Wl(t))throw Error(L(200));return Gl(null,e,t,!1,n)};Rt.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(L(40));return e._reactRootContainer?(Br(function(){Gl(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Rt.unstable_batchedUpdates=sh;Rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Gl(e,t,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Rt})(xf);var Im=xf.exports;Uc.createRoot=Im.createRoot,Uc.hydrateRoot=Im.hydrateRoot;var D0={exports:{}},M0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=M.exports;function lE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var uE=typeof Object.is=="function"?Object.is:lE,cE=Vi.useState,dE=Vi.useEffect,fE=Vi.useLayoutEffect,hE=Vi.useDebugValue;function pE(e,t){var n=t(),r=cE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return fE(function(){i.value=n,i.getSnapshot=t,lc(i)&&s({inst:i})},[e,n,t]),dE(function(){return lc(i)&&s({inst:i}),e(function(){lc(i)&&s({inst:i})})},[e]),hE(n),n}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!uE(e,n)}catch{return!0}}function mE(e,t){return t()}var gE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?mE:pE;M0.useSyncExternalStore=Vi.useSyncExternalStore!==void 0?Vi.useSyncExternalStore:gE;(function(e){e.exports=M0})(D0);var F0={exports:{}},z0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ql=M.exports,vE=D0.exports;function yE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wE=typeof Object.is=="function"?Object.is:yE,SE=vE.useSyncExternalStore,bE=ql.useRef,xE=ql.useEffect,EE=ql.useMemo,_E=ql.useDebugValue;z0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=bE(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=EE(function(){function a(g){if(!u){if(u=!0,c=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return f=v}return f=g}if(v=f,wE(c,g))return v;var m=r(g);return i!==void 0&&i(v,m)?v:(c=g,f=m)}var u=!1,c,f,d=n===void 0?null:n;return[function(){return a(t())},d===null?void 0:function(){return a(d())}]},[t,n,r,i]);var l=SE(e,s[0],s[1]);return xE(function(){o.hasValue=!0,o.value=l},[l]),_E(l),l};(function(e){e.exports=z0})(F0);function kE(e){e()}let j0=kE;const CE=e=>j0=e,TE=()=>j0,vr=M.exports.createContext(null);function B0(){return M.exports.useContext(vr)}const IE=()=>{throw new Error("uSES not initialized!")};let U0=IE;const PE=e=>{U0=e},AE=(e,t)=>e===t;function OE(e=vr){const t=e===vr?B0:()=>M.exports.useContext(e);return function(r,i=AE){const{store:s,subscription:o,getServerState:l}=t(),a=U0(o.addNestedSub,s.getState,l||s.getState,r,i);return M.exports.useDebugValue(a),a}}const xr=OE();var V0={exports:{}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var We=typeof Symbol=="function"&&Symbol.for,hh=We?Symbol.for("react.element"):60103,ph=We?Symbol.for("react.portal"):60106,Kl=We?Symbol.for("react.fragment"):60107,Yl=We?Symbol.for("react.strict_mode"):60108,Ql=We?Symbol.for("react.profiler"):60114,Xl=We?Symbol.for("react.provider"):60109,Jl=We?Symbol.for("react.context"):60110,mh=We?Symbol.for("react.async_mode"):60111,Zl=We?Symbol.for("react.concurrent_mode"):60111,eu=We?Symbol.for("react.forward_ref"):60112,tu=We?Symbol.for("react.suspense"):60113,$E=We?Symbol.for("react.suspense_list"):60120,nu=We?Symbol.for("react.memo"):60115,ru=We?Symbol.for("react.lazy"):60116,RE=We?Symbol.for("react.block"):60121,NE=We?Symbol.for("react.fundamental"):60117,LE=We?Symbol.for("react.responder"):60118,DE=We?Symbol.for("react.scope"):60119;function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hh:switch(e=e.type,e){case mh:case Zl:case Kl:case Ql:case Yl:case tu:return e;default:switch(e=e&&e.$$typeof,e){case Jl:case eu:case ru:case nu:case Xl:return e;default:return t}}case ph:return t}}}function H0(e){return Lt(e)===Zl}ge.AsyncMode=mh;ge.ConcurrentMode=Zl;ge.ContextConsumer=Jl;ge.ContextProvider=Xl;ge.Element=hh;ge.ForwardRef=eu;ge.Fragment=Kl;ge.Lazy=ru;ge.Memo=nu;ge.Portal=ph;ge.Profiler=Ql;ge.StrictMode=Yl;ge.Suspense=tu;ge.isAsyncMode=function(e){return H0(e)||Lt(e)===mh};ge.isConcurrentMode=H0;ge.isContextConsumer=function(e){return Lt(e)===Jl};ge.isContextProvider=function(e){return Lt(e)===Xl};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hh};ge.isForwardRef=function(e){return Lt(e)===eu};ge.isFragment=function(e){return Lt(e)===Kl};ge.isLazy=function(e){return Lt(e)===ru};ge.isMemo=function(e){return Lt(e)===nu};ge.isPortal=function(e){return Lt(e)===ph};ge.isProfiler=function(e){return Lt(e)===Ql};ge.isStrictMode=function(e){return Lt(e)===Yl};ge.isSuspense=function(e){return Lt(e)===tu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Kl||e===Zl||e===Ql||e===Yl||e===tu||e===$E||typeof e=="object"&&e!==null&&(e.$$typeof===ru||e.$$typeof===nu||e.$$typeof===Xl||e.$$typeof===Jl||e.$$typeof===eu||e.$$typeof===NE||e.$$typeof===LE||e.$$typeof===DE||e.$$typeof===RE)};ge.typeOf=Lt;(function(e){e.exports=ge})(V0);var gh=V0.exports,ME={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},FE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vh={};vh[gh.ForwardRef]=zE;vh[gh.Memo]=W0;function Pm(e){return gh.isMemo(e)?W0:vh[e.$$typeof]||ME}var jE=Object.defineProperty,BE=Object.getOwnPropertyNames,Am=Object.getOwnPropertySymbols,UE=Object.getOwnPropertyDescriptor,VE=Object.getPrototypeOf,Om=Object.prototype;function G0(e,t,n){if(typeof t!="string"){if(Om){var r=VE(t);r&&r!==Om&&G0(e,r,n)}var i=BE(t);Am&&(i=i.concat(Am(t)));for(var s=Pm(e),o=Pm(t),l=0;l<i.length;++l){var a=i[l];if(!FE[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var u=UE(t,a);try{jE(e,a,u)}catch{}}}}return e}var HE=G0,yh={exports:{}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=Symbol.for("react.element"),Sh=Symbol.for("react.portal"),iu=Symbol.for("react.fragment"),su=Symbol.for("react.strict_mode"),ou=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),lu=Symbol.for("react.context"),WE=Symbol.for("react.server_context"),uu=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),hu=Symbol.for("react.lazy"),GE=Symbol.for("react.offscreen"),q0;q0=Symbol.for("react.module.reference");function qt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case wh:switch(e=e.type,e){case iu:case ou:case su:case cu:case du:return e;default:switch(e=e&&e.$$typeof,e){case WE:case lu:case uu:case hu:case fu:case au:return e;default:return t}}case Sh:return t}}}ve.ContextConsumer=lu;ve.ContextProvider=au;ve.Element=wh;ve.ForwardRef=uu;ve.Fragment=iu;ve.Lazy=hu;ve.Memo=fu;ve.Portal=Sh;ve.Profiler=ou;ve.StrictMode=su;ve.Suspense=cu;ve.SuspenseList=du;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(e){return qt(e)===lu};ve.isContextProvider=function(e){return qt(e)===au};ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===wh};ve.isForwardRef=function(e){return qt(e)===uu};ve.isFragment=function(e){return qt(e)===iu};ve.isLazy=function(e){return qt(e)===hu};ve.isMemo=function(e){return qt(e)===fu};ve.isPortal=function(e){return qt(e)===Sh};ve.isProfiler=function(e){return qt(e)===ou};ve.isStrictMode=function(e){return qt(e)===su};ve.isSuspense=function(e){return qt(e)===cu};ve.isSuspenseList=function(e){return qt(e)===du};ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===iu||e===ou||e===su||e===cu||e===du||e===GE||typeof e=="object"&&e!==null&&(e.$$typeof===hu||e.$$typeof===fu||e.$$typeof===au||e.$$typeof===lu||e.$$typeof===uu||e.$$typeof===q0||e.getModuleId!==void 0)};ve.typeOf=qt;(function(e){e.exports=ve})(yh);function qE(){const e=TE();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:t=s,function(){!i||t===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}const $m={notify(){},get:()=>[]};function KE(e,t){let n,r=$m;function i(f){return a(),r.subscribe(f)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function l(){return Boolean(n)}function a(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=qE())}function u(){n&&(n(),n=void 0,r.clear(),r=$m)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:l,trySubscribe:a,tryUnsubscribe:u,getListeners:()=>r};return c}const YE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QE=YE?M.exports.useLayoutEffect:M.exports.useEffect;var pu={exports:{}},mu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XE=M.exports,JE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),e_=Object.prototype.hasOwnProperty,t_=XE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n_={key:!0,ref:!0,__self:!0,__source:!0};function K0(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)e_.call(t,r)&&!n_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:JE,type:e,key:s,ref:o,props:i,_owner:t_.current}}mu.Fragment=ZE;mu.jsx=K0;mu.jsxs=K0;(function(e){e.exports=mu})(pu);const Ji=pu.exports.Fragment,w=pu.exports.jsx,z=pu.exports.jsxs;function r_({store:e,context:t,children:n,serverState:r}){const i=M.exports.useMemo(()=>{const l=KE(e);return{store:e,subscription:l,getServerState:r?()=>r:void 0}},[e,r]),s=M.exports.useMemo(()=>e.getState(),[e]);return QE(()=>{const{subscription:l}=i;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==e.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[i,s]),w((t||vr).Provider,{value:i,children:n})}function Y0(e=vr){const t=e===vr?B0:()=>M.exports.useContext(e);return function(){const{store:r}=t();return r}}const i_=Y0();function s_(e=vr){const t=e===vr?i_:Y0(e);return function(){return t().dispatch}}const Jr=s_();PE(F0.exports.useSyncExternalStoreWithSelector);CE(xf.exports.unstable_batchedUpdates);/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rl.apply(this,arguments)}var Zn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zn||(Zn={}));const Rm="popstate";function o_(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ld("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Dd(i)}return l_(t,n,null,e)}function a_(){return Math.random().toString(36).substr(2,8)}function Nm(e){return{usr:e.state,key:e.key}}function Ld(e,t,n,r){return n===void 0&&(n=null),rl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zi(t):t,{state:n,key:t&&t.key||r||a_()})}function Dd(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function l_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Zn.Pop,a=null;function u(){l=Zn.Pop,a&&a({action:l,location:d.location})}function c(g,v){l=Zn.Push;let m=Ld(d.location,g,v);n&&n(m,g);let S=Nm(m),h=d.createHref(m);try{o.pushState(S,"",h)}catch{i.location.assign(h)}s&&a&&a({action:l,location:m})}function f(g,v){l=Zn.Replace;let m=Ld(d.location,g,v);n&&n(m,g);let S=Nm(m),h=d.createHref(m);o.replaceState(S,"",h),s&&a&&a({action:l,location:m})}let d={get action(){return l},get location(){return e(i,o)},listen(g){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Rm,u),a=g,()=>{i.removeEventListener(Rm,u),a=null}},createHref(g){return t(i,g)},push:c,replace:f,go(g){return o.go(g)}};return d}var Lm;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Lm||(Lm={}));function u_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zi(t):t,i=X0(r.pathname||"/",n);if(i==null)return null;let s=Q0(e);c_(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=w_(s[l],i);return o}function Q0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(ze(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let l=cr([r,o.relativePath]),a=n.concat(o);i.children&&i.children.length>0&&(ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Q0(i.children,t,a,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:v_(l,i.index),routesMeta:a})}),t}function c_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const d_=/^:\w+$/,f_=3,h_=2,p_=1,m_=10,g_=-2,Dm=e=>e==="*";function v_(e,t){let n=e.split("/"),r=n.length;return n.some(Dm)&&(r+=g_),t&&(r+=h_),n.filter(i=>!Dm(i)).reduce((i,s)=>i+(d_.test(s)?f_:s===""?p_:m_),r)}function y_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function w_(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=S_({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;s.push({params:r,pathname:cr([i,c.pathname]),pathnameBase:k_(cr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=cr([i,c.pathnameBase]))}return s}function S_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=b_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=l[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=x_(l[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:e}}function b_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),J0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,l)=>(r.push(l),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x_(e,t){try{return decodeURIComponent(e)}catch(n){return J0(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function X0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function J0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Zi(e):e;return{pathname:n?n.startsWith("/")?n:__(n,t):t,search:C_(r),hash:T_(i)}}function __(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Zi(e):(i=rl({},e),ze(!i.pathname||!i.pathname.includes("?"),uc("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),uc("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),uc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}l=f>=0?t[f]:"/"}let a=E_(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const cr=e=>e.join("/").replace(/\/\/+/g,"/"),k_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),C_=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,T_=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class I_{constructor(t,n,r){this.status=t,this.statusText=n||"",this.data=r}}function P_(e){return e instanceof I_}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Md.apply(this,arguments)}function A_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const O_=typeof Object.is=="function"?Object.is:A_,{useState:$_,useEffect:R_,useLayoutEffect:N_,useDebugValue:L_}=Bc;function D_(e,t,n){const r=t(),[{inst:i},s]=$_({inst:{value:r,getSnapshot:t}});return N_(()=>{i.value=r,i.getSnapshot=t,cc(i)&&s({inst:i})},[e,r,t]),R_(()=>(cc(i)&&s({inst:i}),e(()=>{cc(i)&&s({inst:i})})),[e]),L_(r),r}function cc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!O_(n,r)}catch{return!0}}function M_(e,t,n){return t()}const F_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z_=!F_,j_=z_?M_:D_;"useSyncExternalStore"in Bc&&(e=>e.useSyncExternalStore)(Bc);const B_=M.exports.createContext(null),U_=M.exports.createContext(null),bh=M.exports.createContext(null),xh=M.exports.createContext(null),gu=M.exports.createContext(null),es=M.exports.createContext({outlet:null,matches:[]}),ew=M.exports.createContext(null);function V_(e,t){let{relative:n}=t===void 0?{}:t;ts()||ze(!1);let{basename:r,navigator:i}=M.exports.useContext(xh),{hash:s,pathname:o,search:l}=nw(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:cr([r,o])),i.createHref({pathname:a,search:l,hash:s})}function ts(){return M.exports.useContext(gu)!=null}function vu(){return ts()||ze(!1),M.exports.useContext(gu).location}function tw(e){return e.filter((t,n)=>n===0||!t.route.index&&t.pathnameBase!==e[n-1].pathnameBase)}function yu(){ts()||ze(!1);let{basename:e,navigator:t}=M.exports.useContext(xh),{matches:n}=M.exports.useContext(es),{pathname:r}=vu(),i=JSON.stringify(tw(n).map(l=>l.pathnameBase)),s=M.exports.useRef(!1);return M.exports.useEffect(()=>{s.current=!0}),M.exports.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){t.go(l);return}let u=Z0(l,JSON.parse(i),r,a.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:cr([e,u.pathname])),(a.replace?t.replace:t.push)(u,a.state,a)},[e,t,i,r])}function H_(){let{matches:e}=M.exports.useContext(es),t=e[e.length-1];return t?t.params:{}}function nw(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=M.exports.useContext(es),{pathname:i}=vu(),s=JSON.stringify(tw(r).map(o=>o.pathnameBase));return M.exports.useMemo(()=>Z0(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function W_(e,t){ts()||ze(!1);let n=M.exports.useContext(bh),{matches:r}=M.exports.useContext(es),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let l=vu(),a;if(t){var u;let v=typeof t=="string"?Zi(t):t;o==="/"||((u=v.pathname)==null?void 0:u.startsWith(o))||ze(!1),a=v}else a=l;let c=a.pathname||"/",f=o==="/"?c:c.slice(o.length)||"/",d=u_(e,{pathname:f}),g=Y_(d&&d.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:cr([o,v.pathname]),pathnameBase:v.pathnameBase==="/"?o:cr([o,v.pathnameBase])})),r,n||void 0);return t?w(gu.Provider,{value:{location:Md({pathname:"/",search:"",hash:"",state:null,key:"default"},a),navigationType:Zn.Pop},children:g}):g}function G_(){let e=X_(),t=P_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return z(Ji,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:t}),n?w("pre",{style:i,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),z("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:s,children:"errorElement"})," props on\xA0",w("code",{style:s,children:"<Route>"})]})]})}class q_ extends M.exports.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?w(ew.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function K_(e){let{routeContext:t,match:n,children:r}=e,i=M.exports.useContext(B_);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),w(es.Provider,{value:t,children:r})}function Y_(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||ze(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w(G_,{}):null,c=()=>w(K_,{match:o,routeContext:{outlet:s,matches:t.concat(r.slice(0,l+1))},children:a?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||l===0)?w(q_,{location:n.location,component:u,error:a,children:c()}):c()},null)}var Mm;(function(e){e.UseRevalidator="useRevalidator"})(Mm||(Mm={}));var Fd;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Fd||(Fd={}));function Q_(e){let t=M.exports.useContext(bh);return t||ze(!1),t}function X_(){var e;let t=M.exports.useContext(ew),n=Q_(Fd.UseRouteError),r=M.exports.useContext(es),i=r.matches[r.matches.length-1];return t||(r||ze(!1),i.route.id||ze(!1),(e=n.errors)==null?void 0:e[i.route.id])}function rw(e){let{to:t,replace:n,state:r,relative:i}=e;ts()||ze(!1);let s=M.exports.useContext(bh),o=yu();return M.exports.useEffect(()=>{s&&s.navigation.state!=="idle"||o(t,{replace:n,state:r,relative:i})}),null}function Ke(e){ze(!1)}function J_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1}=e;ts()&&ze(!1);let l=t.replace(/^\/*/,"/"),a=M.exports.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Zi(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,v=M.exports.useMemo(()=>{let m=X0(u,l);return m==null?null:{pathname:m,search:c,hash:f,state:d,key:g}},[l,u,c,f,d,g]);return v==null?null:w(xh.Provider,{value:a,children:w(gu.Provider,{children:n,value:{location:v,navigationType:i}})})}function Eh(e){let{children:t,location:n}=e,r=M.exports.useContext(U_),i=r&&!t?r.router.routes:zd(t);return W_(i,n)}var Fm;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Fm||(Fm={}));new Promise(()=>{});function zd(e,t){t===void 0&&(t=[]);let n=[];return M.exports.Children.forEach(e,(r,i)=>{if(!M.exports.isValidElement(r))return;if(r.type===M.exports.Fragment){n.push.apply(n,zd(r.props.children,t));return}r.type!==Ke&&ze(!1),!r.props.index||!r.props.children||ze(!1);let s=[...t,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=zd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Z_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ek(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tk(e,t){return e.button===0&&(!t||t==="_self")&&!ek(e)}const nk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function rk(e){let{basename:t,children:n,window:r}=e,i=M.exports.useRef();i.current==null&&(i.current=o_({window:r,v5Compat:!0}));let s=i.current,[o,l]=M.exports.useState({action:s.action,location:s.location});return M.exports.useLayoutEffect(()=>s.listen(l),[s]),w(J_,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const Fn=M.exports.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:c}=t,f=Z_(t,nk),d=V_(u,{relative:i}),g=ik(u,{replace:o,state:l,target:a,preventScrollReset:c,relative:i});function v(m){r&&r(m),m.defaultPrevented||g(m)}return w("a",{...f,href:d,onClick:s?r:v,ref:n,target:a})});var zm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(zm||(zm={}));var jm;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jm||(jm={}));function ik(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=yu(),a=vu(),u=nw(e,{relative:o});return M.exports.useCallback(c=>{if(tk(c,n)){c.preventDefault();let f=r!==void 0?r:Dd(a)===Dd(u);l(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,e,s,o])}function sk(e){function t(j,W,G,Z,k){for(var ie=0,B=0,_e=0,ce=0,he,b,C=0,T=0,R,U=R=he=0,I=0,V=0,we=0,de=0,wn=G.length,Sn=wn-1,bt,ee="",Ie="",ni="",Lu="",zn;I<wn;){if(b=G.charCodeAt(I),I===Sn&&B+ce+_e+ie!==0&&(B!==0&&(b=B===47?10:47),ce=_e=ie=0,wn++,Sn++),B+ce+_e+ie===0){if(I===Sn&&(0<V&&(ee=ee.replace(d,"")),0<ee.trim().length)){switch(b){case 32:case 9:case 59:case 13:case 10:break;default:ee+=G.charAt(I)}b=59}switch(b){case 123:for(ee=ee.trim(),he=ee.charCodeAt(0),R=1,de=++I;I<wn;){switch(b=G.charCodeAt(I)){case 123:R++;break;case 125:R--;break;case 47:switch(b=G.charCodeAt(I+1)){case 42:case 47:e:{for(U=I+1;U<Sn;++U)switch(G.charCodeAt(U)){case 47:if(b===42&&G.charCodeAt(U-1)===42&&I+2!==U){I=U+1;break e}break;case 10:if(b===47){I=U+1;break e}}I=U}}break;case 91:b++;case 40:b++;case 34:case 39:for(;I++<Sn&&G.charCodeAt(I)!==b;);}if(R===0)break;I++}switch(R=G.substring(de,I),he===0&&(he=(ee=ee.replace(f,"").trim()).charCodeAt(0)),he){case 64:switch(0<V&&(ee=ee.replace(d,"")),b=ee.charCodeAt(1),b){case 100:case 109:case 115:case 45:V=W;break;default:V=ye}if(R=t(W,V,R,b,k+1),de=R.length,0<F&&(V=n(ye,ee,we),zn=l(3,R,V,W,X,D,de,b,k,Z),ee=V.join(""),zn!==void 0&&(de=(R=zn.trim()).length)===0&&(b=0,R="")),0<de)switch(b){case 115:ee=ee.replace(O,o);case 100:case 109:case 45:R=ee+"{"+R+"}";break;case 107:ee=ee.replace(p,"$1 $2"),R=ee+"{"+R+"}",R=oe===1||oe===2&&s("@"+R,3)?"@-webkit-"+R+"@"+R:"@"+R;break;default:R=ee+R,Z===112&&(R=(Ie+=R,""))}else R="";break;default:R=t(W,n(W,ee,we),R,Z,k+1)}ni+=R,R=we=V=U=he=0,ee="",b=G.charCodeAt(++I);break;case 125:case 59:if(ee=(0<V?ee.replace(d,""):ee).trim(),1<(de=ee.length))switch(U===0&&(he=ee.charCodeAt(0),he===45||96<he&&123>he)&&(de=(ee=ee.replace(" ",":")).length),0<F&&(zn=l(1,ee,W,j,X,D,Ie.length,Z,k,Z))!==void 0&&(de=(ee=zn.trim()).length)===0&&(ee="\0\0"),he=ee.charCodeAt(0),b=ee.charCodeAt(1),he){case 0:break;case 64:if(b===105||b===99){Lu+=ee+G.charAt(I);break}default:ee.charCodeAt(de-1)!==58&&(Ie+=i(ee,he,b,ee.charCodeAt(2)))}we=V=U=he=0,ee="",b=G.charCodeAt(++I)}}switch(b){case 13:case 10:B===47?B=0:1+he===0&&Z!==107&&0<ee.length&&(V=1,ee+="\0"),0<F*J&&l(0,ee,W,j,X,D,Ie.length,Z,k,Z),D=1,X++;break;case 59:case 125:if(B+ce+_e+ie===0){D++;break}default:switch(D++,bt=G.charAt(I),b){case 9:case 32:if(ce+ie+B===0)switch(C){case 44:case 58:case 9:case 32:bt="";break;default:b!==32&&(bt=" ")}break;case 0:bt="\\0";break;case 12:bt="\\f";break;case 11:bt="\\v";break;case 38:ce+B+ie===0&&(V=we=1,bt="\f"+bt);break;case 108:if(ce+B+ie+re===0&&0<U)switch(I-U){case 2:C===112&&G.charCodeAt(I-3)===58&&(re=C);case 8:T===111&&(re=T)}break;case 58:ce+B+ie===0&&(U=I);break;case 44:B+_e+ce+ie===0&&(V=1,bt+="\r");break;case 34:case 39:B===0&&(ce=ce===b?0:ce===0?b:ce);break;case 91:ce+B+_e===0&&ie++;break;case 93:ce+B+_e===0&&ie--;break;case 41:ce+B+ie===0&&_e--;break;case 40:if(ce+B+ie===0){if(he===0)switch(2*C+3*T){case 533:break;default:he=1}_e++}break;case 64:B+_e+ce+ie+U+R===0&&(R=1);break;case 42:case 47:if(!(0<ce+ie+_e))switch(B){case 0:switch(2*b+3*G.charCodeAt(I+1)){case 235:B=47;break;case 220:de=I,B=42}break;case 42:b===47&&C===42&&de+2!==I&&(G.charCodeAt(de+2)===33&&(Ie+=G.substring(de,I+1)),bt="",B=0)}}B===0&&(ee+=bt)}T=C,C=b,I++}if(de=Ie.length,0<de){if(V=W,0<F&&(zn=l(2,Ie,V,j,X,D,de,Z,k,Z),zn!==void 0&&(Ie=zn).length===0))return Lu+Ie+ni;if(Ie=V.join(",")+"{"+Ie+"}",oe*re!==0){switch(oe!==2||s(Ie,2)||(re=0),re){case 111:Ie=Ie.replace(x,":-moz-$1")+Ie;break;case 112:Ie=Ie.replace(y,"::-webkit-input-$1")+Ie.replace(y,"::-moz-$1")+Ie.replace(y,":-ms-input-$1")+Ie}re=0}}return Lu+Ie+ni}function n(j,W,G){var Z=W.trim().split(S);W=Z;var k=Z.length,ie=j.length;switch(ie){case 0:case 1:var B=0;for(j=ie===0?"":j[0]+" ";B<k;++B)W[B]=r(j,W[B],G).trim();break;default:var _e=B=0;for(W=[];B<k;++B)for(var ce=0;ce<ie;++ce)W[_e++]=r(j[ce]+" ",Z[B],G).trim()}return W}function r(j,W,G){var Z=W.charCodeAt(0);switch(33>Z&&(Z=(W=W.trim()).charCodeAt(0)),Z){case 38:return W.replace(h,"$1"+j.trim());case 58:return j.trim()+W.replace(h,"$1"+j.trim());default:if(0<1*G&&0<W.indexOf("\f"))return W.replace(h,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+W}function i(j,W,G,Z){var k=j+";",ie=2*W+3*G+4*Z;if(ie===944){j=k.indexOf(":",9)+1;var B=k.substring(j,k.length-1).trim();return B=k.substring(0,j).trim()+B+";",oe===1||oe===2&&s(B,1)?"-webkit-"+B+B:B}if(oe===0||oe===2&&!s(k,1))return k;switch(ie){case 1015:return k.charCodeAt(10)===97?"-webkit-"+k+k:k;case 951:return k.charCodeAt(3)===116?"-webkit-"+k+k:k;case 963:return k.charCodeAt(5)===110?"-webkit-"+k+k:k;case 1009:if(k.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+k+k;case 978:return"-webkit-"+k+"-moz-"+k+k;case 1019:case 983:return"-webkit-"+k+"-moz-"+k+"-ms-"+k+k;case 883:if(k.charCodeAt(8)===45)return"-webkit-"+k+k;if(0<k.indexOf("image-set(",11))return k.replace(A,"$1-webkit-$2")+k;break;case 932:if(k.charCodeAt(4)===45)switch(k.charCodeAt(5)){case 103:return"-webkit-box-"+k.replace("-grow","")+"-webkit-"+k+"-ms-"+k.replace("grow","positive")+k;case 115:return"-webkit-"+k+"-ms-"+k.replace("shrink","negative")+k;case 98:return"-webkit-"+k+"-ms-"+k.replace("basis","preferred-size")+k}return"-webkit-"+k+"-ms-"+k+k;case 964:return"-webkit-"+k+"-ms-flex-"+k+k;case 1023:if(k.charCodeAt(8)!==99)break;return B=k.substring(k.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+B+"-webkit-"+k+"-ms-flex-pack"+B+k;case 1005:return v.test(k)?k.replace(g,":-webkit-")+k.replace(g,":-moz-")+k:k;case 1e3:switch(B=k.substring(13).trim(),W=B.indexOf("-")+1,B.charCodeAt(0)+B.charCodeAt(W)){case 226:B=k.replace(_,"tb");break;case 232:B=k.replace(_,"tb-rl");break;case 220:B=k.replace(_,"lr");break;default:return k}return"-webkit-"+k+"-ms-"+B+k;case 1017:if(k.indexOf("sticky",9)===-1)break;case 975:switch(W=(k=j).length-10,B=(k.charCodeAt(W)===33?k.substring(0,W):k).substring(j.indexOf(":",7)+1).trim(),ie=B.charCodeAt(0)+(B.charCodeAt(7)|0)){case 203:if(111>B.charCodeAt(8))break;case 115:k=k.replace(B,"-webkit-"+B)+";"+k;break;case 207:case 102:k=k.replace(B,"-webkit-"+(102<ie?"inline-":"")+"box")+";"+k.replace(B,"-webkit-"+B)+";"+k.replace(B,"-ms-"+B+"box")+";"+k}return k+";";case 938:if(k.charCodeAt(5)===45)switch(k.charCodeAt(6)){case 105:return B=k.replace("-items",""),"-webkit-"+k+"-webkit-box-"+B+"-ms-flex-"+B+k;case 115:return"-webkit-"+k+"-ms-flex-item-"+k.replace(P,"")+k;default:return"-webkit-"+k+"-ms-flex-line-pack"+k.replace("align-content","").replace(P,"")+k}break;case 973:case 989:if(k.charCodeAt(3)!==45||k.charCodeAt(4)===122)break;case 931:case 953:if($.test(j)===!0)return(B=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?i(j.replace("stretch","fill-available"),W,G,Z).replace(":fill-available",":stretch"):k.replace(B,"-webkit-"+B)+k.replace(B,"-moz-"+B.replace("fill-",""))+k;break;case 962:if(k="-webkit-"+k+(k.charCodeAt(5)===102?"-ms-"+k:"")+k,G+Z===211&&k.charCodeAt(13)===105&&0<k.indexOf("transform",10))return k.substring(0,k.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+k}return k}function s(j,W){var G=j.indexOf(W===1?":":"{"),Z=j.substring(0,W!==3?G:10);return G=j.substring(G+1,j.length-1),H(W!==2?Z:Z.replace(Y,"$1"),G,W)}function o(j,W){var G=i(W,W.charCodeAt(0),W.charCodeAt(1),W.charCodeAt(2));return G!==W+";"?G.replace(N," or ($1)").substring(4):"("+W+")"}function l(j,W,G,Z,k,ie,B,_e,ce,he){for(var b=0,C=W,T;b<F;++b)switch(T=be[b].call(c,j,C,G,Z,k,ie,B,_e,ce,he)){case void 0:case!1:case!0:case null:break;default:C=T}if(C!==W)return C}function a(j){switch(j){case void 0:case null:F=be.length=0;break;default:if(typeof j=="function")be[F++]=j;else if(typeof j=="object")for(var W=0,G=j.length;W<G;++W)a(j[W]);else J=!!j|0}return a}function u(j){return j=j.prefix,j!==void 0&&(H=null,j?typeof j!="function"?oe=1:(oe=2,H=j):oe=0),u}function c(j,W){var G=j;if(33>G.charCodeAt(0)&&(G=G.trim()),ue=G,G=[ue],0<F){var Z=l(-1,W,G,G,X,D,0,0,0,0);Z!==void 0&&typeof Z=="string"&&(W=Z)}var k=t(ye,G,W,0,0);return 0<F&&(Z=l(-2,k,G,G,X,D,k.length,0,0,0),Z!==void 0&&(k=Z)),ue="",re=0,D=X=1,k}var f=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,v=/zoo|gra/,m=/([,: ])(transform)/g,S=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,x=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,P=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,A=/([^-])(image-set\()/,D=1,X=1,re=0,oe=1,ye=[],be=[],F=0,H=null,J=0,ue="";return c.use=a,c.set=u,e!==void 0&&u(e),c}var ok={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ak(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var lk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Bm=ak(function(e){return lk.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function Cn(){return(Cn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Um=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},jd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!yh.exports.typeOf(e)},il=Object.freeze([]),dr=Object.freeze({});function ro(e){return typeof e=="function"}function Vm(e){return e.displayName||e.name||"Component"}function _h(e){return e&&typeof e.styledComponentId=="string"}var Hi=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",kh=typeof window<"u"&&"HTMLElement"in window,uk=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1);function _o(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var ck=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&_o(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Ca=new Map,sl=new Map,Rs=1,ia=function(e){if(Ca.has(e))return Ca.get(e);for(;sl.has(Rs);)Rs++;var t=Rs++;return Ca.set(e,t),sl.set(t,e),t},dk=function(e){return sl.get(e)},fk=function(e,t){t>=Rs&&(Rs=t+1),Ca.set(e,t),sl.set(t,e)},hk="style["+Hi+'][data-styled-version="5.3.5"]',pk=new RegExp("^"+Hi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),mk=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},gk=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(pk);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(fk(u,a),mk(e,u,l[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},vk=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},iw=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var c=a[u];if(c&&c.nodeType===1&&c.hasAttribute(Hi))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Hi,"active"),r.setAttribute("data-styled-version","5.3.5");var o=vk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},yk=function(){function e(n){var r=this.element=iw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}_o(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),wk=function(){function e(n){var r=this.element=iw(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Sk=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Hm=kh,bk={isServer:!kh,useCSSOMInjection:!uk},sw=function(){function e(n,r,i){n===void 0&&(n=dr),r===void 0&&(r={}),this.options=Cn({},bk,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&kh&&Hm&&(Hm=!1,function(s){for(var o=document.querySelectorAll(hk),l=0,a=o.length;l<a;l++){var u=o[l];u&&u.getAttribute(Hi)!=="active"&&(gk(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ia(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Cn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new Sk(o):s?new yk(o):new wk(o),new ck(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ia(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ia(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ia(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=dk(o);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(o);if(a&&u&&a.size){var c=Hi+".g"+o+'[id="'+l+'"]',f="";a!==void 0&&a.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),xk=/(a)(d)/gi,Wm=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wm(t%52)+n;return(Wm(t%52)+n).replace(xk,"$1-$2")}var xi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ow=function(e){return xi(5381,e)};function Ek(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ro(n)&&!_h(n))return!1}return!0}var _k=ow("5.3.5"),kk=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ek(t),this.componentId=n,this.baseHash=xi(_k,n),this.baseStyle=r,sw.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Wi(this.rules,t,n,r).join(""),l=Bd(xi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=xi(this.baseHash,r.hash),f="",d=0;d<u;d++){var g=this.rules[d];if(typeof g=="string")f+=g;else if(g){var v=Wi(g,t,n,r),m=Array.isArray(v)?v.join(""):v;c=xi(c,m+d),f+=m}}if(f){var S=Bd(c>>>0);if(!n.hasNameForId(i,S)){var h=r(f,"."+S,void 0,i);n.insertRules(i,S,h)}s.push(S)}}return s.join(" ")},e}(),Ck=/^\s*\/\/.*$/gm,Tk=[":","[",".","#"];function Ik(e){var t,n,r,i,s=e===void 0?dr:e,o=s.options,l=o===void 0?dr:o,a=s.plugins,u=a===void 0?il:a,c=new sk(l),f=[],d=function(m){function S(h){if(h)try{m(h+"}")}catch{}}return function(h,p,y,x,_,O,N,P,Y,$){switch(h){case 1:if(Y===0&&p.charCodeAt(0)===64)return m(p+";"),"";break;case 2:if(P===0)return p+"/*|*/";break;case 3:switch(P){case 102:case 112:return m(y[0]+p),"";default:return p+($===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(S)}}}(function(m){f.push(m)}),g=function(m,S,h){return S===0&&Tk.indexOf(h[n.length])!==-1||h.match(i)?m:"."+t};function v(m,S,h,p){p===void 0&&(p="&");var y=m.replace(Ck,""),x=S&&h?h+" "+S+" { "+y+" }":y;return t=p,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(h||!S?"":S,x)}return c.use([].concat(u,[function(m,S,h){m===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,g))},d,function(m){if(m===-2){var S=f;return f=[],S}}])),v.hash=u.length?u.reduce(function(m,S){return S.name||_o(15),xi(m,S.name)},5381).toString():"",v}var aw=Ne.createContext();aw.Consumer;var lw=Ne.createContext(),Pk=(lw.Consumer,new sw),Ud=Ik();function Ak(){return M.exports.useContext(aw)||Pk}function Ok(){return M.exports.useContext(lw)||Ud}var $k=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ud);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return _o(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ud),this.name+t.hash},e}(),Rk=/([A-Z])/,Nk=/([A-Z])/g,Lk=/^ms-/,Dk=function(e){return"-"+e.toLowerCase()};function Gm(e){return Rk.test(e)?e.replace(Nk,Dk).replace(Lk,"-ms-"):e}var qm=function(e){return e==null||e===!1||e===""};function Wi(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,l=e.length;o<l;o+=1)(i=Wi(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(qm(e))return"";if(_h(e))return"."+e.styledComponentId;if(ro(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Wi(a,t,n,r)}var u;return e instanceof $k?n?(e.inject(n,r),e.getName(r)):e:jd(e)?function c(f,d){var g,v,m=[];for(var S in f)f.hasOwnProperty(S)&&!qm(f[S])&&(Array.isArray(f[S])&&f[S].isCss||ro(f[S])?m.push(Gm(S)+":",f[S],";"):jd(f[S])?m.push.apply(m,c(f[S],S)):m.push(Gm(S)+": "+(g=S,(v=f[S])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||g in ok?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(e):e.toString()}var Km=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Mk(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ro(e)||jd(e)?Km(Wi(Um(il,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Km(Wi(Um(e,n)))}var Fk=function(e,t,n){return n===void 0&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme},zk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jk=/(^-|-$)/g;function dc(e){return e.replace(zk,"-").replace(jk,"")}var Bk=function(e){return Bd(ow(e)>>>0)};function sa(e){return typeof e=="string"&&!0}var Vd=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Uk=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Vk(e,t,n){var r=e[n];Vd(t)&&Vd(r)?uw(r,t):e[n]=t}function uw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Vd(o))for(var l in o)Uk(l)&&Vk(e,o[l],l)}return e}var cw=Ne.createContext();cw.Consumer;var fc={};function dw(e,t,n){var r=_h(e),i=!sa(e),s=t.attrs,o=s===void 0?il:s,l=t.componentId,a=l===void 0?function(p,y){var x=typeof p!="string"?"sc":dc(p);fc[x]=(fc[x]||0)+1;var _=x+"-"+Bk("5.3.5"+x+fc[x]);return y?y+"-"+_:_}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(p){return sa(p)?"styled."+p:"Styled("+Vm(p)+")"}(e):u,f=t.displayName&&t.componentId?dc(t.displayName)+"-"+t.componentId:t.componentId||a,d=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(p,y,x){return e.shouldForwardProp(p,y,x)&&t.shouldForwardProp(p,y,x)}:e.shouldForwardProp);var v,m=new kk(n,f,r?e.componentStyle:void 0),S=m.isStatic&&o.length===0,h=function(p,y){return function(x,_,O,N){var P=x.attrs,Y=x.componentStyle,$=x.defaultProps,A=x.foldedComponentIds,D=x.shouldForwardProp,X=x.styledComponentId,re=x.target,oe=function(Z,k,ie){Z===void 0&&(Z=dr);var B=Cn({},k,{theme:Z}),_e={};return ie.forEach(function(ce){var he,b,C,T=ce;for(he in ro(T)&&(T=T(B)),T)B[he]=_e[he]=he==="className"?(b=_e[he],C=T[he],b&&C?b+" "+C:b||C):T[he]}),[B,_e]}(Fk(_,M.exports.useContext(cw),$)||dr,_,P),ye=oe[0],be=oe[1],F=function(Z,k,ie,B){var _e=Ak(),ce=Ok(),he=k?Z.generateAndInjectStyles(dr,_e,ce):Z.generateAndInjectStyles(ie,_e,ce);return he}(Y,N,ye),H=O,J=be.$as||_.$as||be.as||_.as||re,ue=sa(J),j=be!==_?Cn({},_,{},be):_,W={};for(var G in j)G[0]!=="$"&&G!=="as"&&(G==="forwardedAs"?W.as=j[G]:(D?D(G,Bm,J):!ue||Bm(G))&&(W[G]=j[G]));return _.style&&be.style!==_.style&&(W.style=Cn({},_.style,{},be.style)),W.className=Array.prototype.concat(A,X,F!==X?F:null,_.className,be.className).filter(Boolean).join(" "),W.ref=H,M.exports.createElement(J,W)}(v,p,y,S)};return h.displayName=c,(v=Ne.forwardRef(h)).attrs=d,v.componentStyle=m,v.displayName=c,v.shouldForwardProp=g,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):il,v.styledComponentId=f,v.target=r?e.target:e,v.withComponent=function(p){var y=t.componentId,x=function(O,N){if(O==null)return{};var P,Y,$={},A=Object.keys(O);for(Y=0;Y<A.length;Y++)P=A[Y],N.indexOf(P)>=0||($[P]=O[P]);return $}(t,["componentId"]),_=y&&y+"-"+(sa(p)?p:dc(Vm(p)));return dw(p,Cn({},x,{attrs:d,componentId:_}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?uw({},e.defaultProps,p):p}}),v.toString=function(){return"."+v.styledComponentId},i&&HE(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Hd=function(e){return function t(n,r,i){if(i===void 0&&(i=dr),!yh.exports.isValidElementType(r))return _o(1,String(r));var s=function(){return n(r,i,Mk.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Cn({},i,{},o))},s.attrs=function(o){return t(n,r,Cn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(dw,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Hd[e]=Hd(e)});const E=Hd,Hk=E.div`
  background-color: #000;
  /* height: 3rem; */
  height: 5vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Wk=E.p`
  font-size: 1rem;
  color: #fff;
`,Gk=()=>w(Hk,{children:w(Wk,{children:"Lune Design \xAE 2022"})}),Ch="/assets/Logo_LuneDesign.ff6db146.png",qk="/assets/exit_icon.d474b0d5.svg",Kk=E.div`
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
`,Yk=E.div`
  align-items: center;
  display: flex;
  margin-left: 12rem;
`,Qk=E.img`
  margin-top: 4.5rem;
  width: 11rem;

  @media screen and (max-width: 1366px) {
    width: 9.5rem;
  }
`,Xk=E.ul`
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
`,ps=E(Fn)`
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
`,Ym=E.div`
  align-items: center;
  display: flex;
  margin-right: 12rem;
`,Jk=E.p`
  margin-right: 1rem;

  a {
    color: #3772ff;
    font-size: 1.1rem;
    margin-left: 0.2rem;
  }
`,Zk=E.img`
  cursor: pointer;
  width: 2rem;

  @media (hover: hover) {
    &:hover {
    }
  }
`,Qm=E(Fn)`
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
`,eC=E.button`
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
`;function Zt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function yr(e){return!!e&&!!e[Ce]}function Nn(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===uC}(e)||Array.isArray(e)||!!e[rg]||!!(!((t=e.constructor)===null||t===void 0)&&t[rg])||Th(e)||Ih(e))}function Ur(e,t,n){n===void 0&&(n=!1),ns(e)===0?(n?Object.keys:Ri)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function ns(e){var t=e[Ce];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Th(e)?2:Ih(e)?3:0}function $i(e,t){return ns(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function tC(e,t){return ns(e)===2?e.get(t):e[t]}function fw(e,t,n){var r=ns(e);r===2?e.set(t,n):r===3?(e.delete(t),e.add(n)):e[t]=n}function hw(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Th(e){return aC&&e instanceof Map}function Ih(e){return lC&&e instanceof Set}function Cr(e){return e.o||e.t}function Ph(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=mw(e);delete t[Ce];for(var n=Ri(t),r=0;r<n.length;r++){var i=n[r],s=t[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(t[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Ah(e,t){return t===void 0&&(t=!1),Oh(e)||yr(e)||!Nn(e)||(ns(e)>1&&(e.set=e.add=e.clear=e.delete=nC),Object.freeze(e),t&&Ur(e,function(n,r){return Ah(r,!0)},!0)),e}function nC(){Zt(2)}function Oh(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function mn(e){var t=Kd[e];return t||Zt(18,e),t}function rC(e,t){Kd[e]||(Kd[e]=t)}function Wd(){return io}function hc(e,t){t&&(mn("Patches"),e.u=[],e.s=[],e.v=t)}function ol(e){Gd(e),e.p.forEach(iC),e.p=null}function Gd(e){e===io&&(io=e.l)}function Xm(e){return io={p:[],l:io,h:e,m:!0,_:0}}function iC(e){var t=e[Ce];t.i===0||t.i===1?t.j():t.O=!0}function pc(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||mn("ES5").S(t,e,r),r?(n[Ce].P&&(ol(t),Zt(4)),Nn(e)&&(e=al(t,e),t.l||ll(t,e)),t.u&&mn("Patches").M(n[Ce].t,e,t.u,t.s)):e=al(t,n,[]),ol(t),t.u&&t.v(t.u,t.s),e!==pw?e:void 0}function al(e,t,n){if(Oh(t))return t;var r=t[Ce];if(!r)return Ur(t,function(s,o){return Jm(e,r,t,s,o,n)},!0),t;if(r.A!==e)return t;if(!r.P)return ll(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=Ph(r.k):r.o;Ur(r.i===3?new Set(i):i,function(s,o){return Jm(e,r,i,s,o,n)}),ll(e,i,!1),n&&e.u&&mn("Patches").R(r,n,e.u,e.s)}return r.o}function Jm(e,t,n,r,i,s){if(yr(i)){var o=al(e,i,s&&t&&t.i!==3&&!$i(t.D,r)?s.concat(r):void 0);if(fw(n,r,o),!yr(o))return;e.m=!1}if(Nn(i)&&!Oh(i)){if(!e.h.F&&e._<1)return;al(e,i),t&&t.A.l||ll(e,i)}}function ll(e,t,n){n===void 0&&(n=!1),e.h.F&&e.m&&Ah(t,n)}function mc(e,t){var n=e[Ce];return(n?Cr(n):e)[t]}function Zm(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Gn(e){e.P||(e.P=!0,e.l&&Gn(e.l))}function gc(e){e.o||(e.o=Ph(e.t))}function qd(e,t,n){var r=Th(t)?mn("MapSet").N(t,n):Ih(t)?mn("MapSet").T(t,n):e.g?function(i,s){var o=Array.isArray(i),l={i:o?1:0,A:s?s.A:Wd(),P:!1,I:!1,D:{},l:s,t:i,k:null,o:null,j:null,C:!1},a=l,u=so;o&&(a=[l],u=Ss);var c=Proxy.revocable(a,u),f=c.revoke,d=c.proxy;return l.k=d,l.j=f,d}(t,n):mn("ES5").J(t,n);return(n?n.A:Wd()).p.push(r),r}function sC(e){return yr(e)||Zt(22,e),function t(n){if(!Nn(n))return n;var r,i=n[Ce],s=ns(n);if(i){if(!i.P&&(i.i<4||!mn("ES5").K(i)))return i.t;i.I=!0,r=eg(n,s),i.I=!1}else r=eg(n,s);return Ur(r,function(o,l){i&&tC(i.t,o)===l||fw(r,o,t(l))}),s===3?new Set(r):r}(e)}function eg(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ph(e)}function oC(){function e(s,o){var l=i[s];return l?l.enumerable=o:i[s]=l={configurable:!0,enumerable:o,get:function(){var a=this[Ce];return so.get(a,s)},set:function(a){var u=this[Ce];so.set(u,s,a)}},l}function t(s){for(var o=s.length-1;o>=0;o--){var l=s[o][Ce];if(!l.P)switch(l.i){case 5:r(l)&&Gn(l);break;case 4:n(l)&&Gn(l)}}}function n(s){for(var o=s.t,l=s.k,a=Ri(l),u=a.length-1;u>=0;u--){var c=a[u];if(c!==Ce){var f=o[c];if(f===void 0&&!$i(o,c))return!0;var d=l[c],g=d&&d[Ce];if(g?g.t!==f:!hw(d,f))return!0}}var v=!!o[Ce];return a.length!==Ri(o).length+(v?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var l=Object.getOwnPropertyDescriptor(o,o.length-1);if(l&&!l.get)return!0;for(var a=0;a<o.length;a++)if(!o.hasOwnProperty(a))return!0;return!1}var i={};rC("ES5",{J:function(s,o){var l=Array.isArray(s),a=function(c,f){if(c){for(var d=Array(f.length),g=0;g<f.length;g++)Object.defineProperty(d,""+g,e(g,!0));return d}var v=mw(f);delete v[Ce];for(var m=Ri(v),S=0;S<m.length;S++){var h=m[S];v[h]=e(h,c||!!v[h].enumerable)}return Object.create(Object.getPrototypeOf(f),v)}(l,s),u={i:l?5:4,A:o?o.A:Wd(),P:!1,I:!1,D:{},l:o,t:s,k:a,o:null,O:!1,C:!1};return Object.defineProperty(a,Ce,{value:u,writable:!0}),a},S:function(s,o,l){l?yr(o)&&o[Ce].A===s&&t(s.p):(s.u&&function a(u){if(u&&typeof u=="object"){var c=u[Ce];if(c){var f=c.t,d=c.k,g=c.D,v=c.i;if(v===4)Ur(d,function(y){y!==Ce&&(f[y]!==void 0||$i(f,y)?g[y]||a(d[y]):(g[y]=!0,Gn(c)))}),Ur(f,function(y){d[y]!==void 0||$i(d,y)||(g[y]=!1,Gn(c))});else if(v===5){if(r(c)&&(Gn(c),g.length=!0),d.length<f.length)for(var m=d.length;m<f.length;m++)g[m]=!1;else for(var S=f.length;S<d.length;S++)g[S]=!0;for(var h=Math.min(d.length,f.length),p=0;p<h;p++)d.hasOwnProperty(p)||(g[p]=!0),g[p]===void 0&&a(d[p])}}}}(s.p[0]),t(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var tg,io,$h=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",aC=typeof Map<"u",lC=typeof Set<"u",ng=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",pw=$h?Symbol.for("immer-nothing"):((tg={})["immer-nothing"]=!0,tg),rg=$h?Symbol.for("immer-draftable"):"__$immer_draftable",Ce=$h?Symbol.for("immer-state"):"__$immer_state",uC=""+Object.prototype.constructor,Ri=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,mw=Object.getOwnPropertyDescriptors||function(e){var t={};return Ri(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Kd={},so={get:function(e,t){if(t===Ce)return e;var n=Cr(e);if(!$i(n,t))return function(i,s,o){var l,a=Zm(s,o);return a?"value"in a?a.value:(l=a.get)===null||l===void 0?void 0:l.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Nn(r)?r:r===mc(e.t,t)?(gc(e),e.o[t]=qd(e.A.h,r,e)):r},has:function(e,t){return t in Cr(e)},ownKeys:function(e){return Reflect.ownKeys(Cr(e))},set:function(e,t,n){var r=Zm(Cr(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=mc(Cr(e),t),s=i==null?void 0:i[Ce];if(s&&s.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(hw(n,i)&&(n!==void 0||$i(e.t,t)))return!0;gc(e),Gn(e)}return e.o[t]===n&&typeof n!="number"&&(n!==void 0||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return mc(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,gc(e),Gn(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Cr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Zt(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Zt(12)}},Ss={};Ur(so,function(e,t){Ss[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ss.deleteProperty=function(e,t){return Ss.set.call(this,e,t,void 0)},Ss.set=function(e,t,n){return so.set.call(this,e[0],t,n,e[0])};var cC=function(){function e(n){var r=this;this.g=ng,this.F=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var l=s;s=i;var a=r;return function(m){var S=this;m===void 0&&(m=l);for(var h=arguments.length,p=Array(h>1?h-1:0),y=1;y<h;y++)p[y-1]=arguments[y];return a.produce(m,function(x){var _;return(_=s).call.apply(_,[S,x].concat(p))})}}var u;if(typeof s!="function"&&Zt(6),o!==void 0&&typeof o!="function"&&Zt(7),Nn(i)){var c=Xm(r),f=qd(r,i,void 0),d=!0;try{u=s(f),d=!1}finally{d?ol(c):Gd(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(m){return hc(c,o),pc(m,c)},function(m){throw ol(c),m}):(hc(c,o),pc(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===pw&&(u=void 0),r.F&&Ah(u,!0),o){var g=[],v=[];mn("Patches").M(i,u,g,v),o(g,v)}return u}Zt(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,f=Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];return r.produceWithPatches(u,function(g){return i.apply(void 0,[g].concat(f))})};var o,l,a=r.produce(i,s,function(u,c){o=u,l=c});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,o,l]}):[a,o,l]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Nn(n)||Zt(8),yr(n)&&(n=sC(n));var r=Xm(this),i=qd(this,n,void 0);return i[Ce].C=!0,Gd(r),i},t.finishDraft=function(n,r){var i=n&&n[Ce],s=i.A;return hc(s,r),pc(void 0,s)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!ng&&Zt(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=mn("Patches").$;return yr(n)?o(n,r):this.produce(n,function(l){return o(l,r)})},e}(),$t=new cC,gw=$t.produce;$t.produceWithPatches.bind($t);$t.setAutoFreeze.bind($t);$t.setUseProxies.bind($t);$t.applyPatches.bind($t);$t.createDraft.bind($t);$t.finishDraft.bind($t);function dC(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ig(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ig(Object(n),!0).forEach(function(r){dC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ig(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var og=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),vc=function(){return Math.random().toString(36).substring(7).split("").join(".")},ul={INIT:"@@redux/INIT"+vc(),REPLACE:"@@redux/REPLACE"+vc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+vc()}};function fC(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function vw(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(nt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(nt(1));return n(vw)(e,t)}if(typeof e!="function")throw new Error(nt(2));var i=e,s=t,o=[],l=o,a=!1;function u(){l===o&&(l=o.slice())}function c(){if(a)throw new Error(nt(3));return s}function f(m){if(typeof m!="function")throw new Error(nt(4));if(a)throw new Error(nt(5));var S=!0;return u(),l.push(m),function(){if(!!S){if(a)throw new Error(nt(6));S=!1,u();var p=l.indexOf(m);l.splice(p,1),o=null}}}function d(m){if(!fC(m))throw new Error(nt(7));if(typeof m.type>"u")throw new Error(nt(8));if(a)throw new Error(nt(9));try{a=!0,s=i(s,m)}finally{a=!1}for(var S=o=l,h=0;h<S.length;h++){var p=S[h];p()}return m}function g(m){if(typeof m!="function")throw new Error(nt(10));i=m,d({type:ul.REPLACE})}function v(){var m,S=f;return m={subscribe:function(p){if(typeof p!="object"||p===null)throw new Error(nt(11));function y(){p.next&&p.next(c())}y();var x=S(y);return{unsubscribe:x}}},m[og]=function(){return this},m}return d({type:ul.INIT}),r={dispatch:d,subscribe:f,getState:c,replaceReducer:g},r[og]=v,r}function hC(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:ul.INIT});if(typeof r>"u")throw new Error(nt(12));if(typeof n(void 0,{type:ul.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(nt(13))})}function pC(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var s=Object.keys(n),o;try{hC(n)}catch(l){o=l}return function(a,u){if(a===void 0&&(a={}),o)throw o;for(var c=!1,f={},d=0;d<s.length;d++){var g=s[d],v=n[g],m=a[g],S=v(m,u);if(typeof S>"u")throw u&&u.type,new Error(nt(14));f[g]=S,c=c||S!==m}return c=c||s.length!==Object.keys(a).length,c?f:a}}function cl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function mC(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(nt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},l=t.map(function(a){return a(o)});return s=cl.apply(void 0,l)(i.dispatch),sg(sg({},i),{},{dispatch:s})}}}function yw(e){var t=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(l){return typeof l=="function"?l(i,s,e):o(l)}}};return t}var ww=yw();ww.withExtraArgument=yw;const ag=ww;var gC=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();globalThis&&globalThis.__generator;var dl=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},vC=Object.defineProperty,lg=Object.getOwnPropertySymbols,yC=Object.prototype.hasOwnProperty,wC=Object.prototype.propertyIsEnumerable,ug=function(e,t,n){return t in e?vC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},oo=function(e,t){for(var n in t||(t={}))yC.call(t,n)&&ug(e,n,t[n]);if(lg)for(var r=0,i=lg(t);r<i.length;r++){var n=i[r];wC.call(t,n)&&ug(e,n,t[n])}return e},SC=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?cl:cl.apply(null,arguments)};function bC(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var xC=function(e){gC(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,dl([void 0],n[0].concat(this)))):new(t.bind.apply(t,dl([void 0],n.concat(this))))},t}(Array);function Yd(e){return Nn(e)?gw(e,function(){}):e}function EC(e){return typeof e=="boolean"}function _C(){return function(t){return kC(t)}}function kC(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new xC;return n&&(EC(n)?r.push(ag):r.push(ag.withExtraArgument(n.extraArgument))),r}var CC=!0;function TC(e){var t=_C(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?t():s,l=n.devTools,a=l===void 0?!0:l,u=n.preloadedState,c=u===void 0?void 0:u,f=n.enhancers,d=f===void 0?void 0:f,g;if(typeof i=="function")g=i;else if(bC(i))g=pC(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=o;typeof v=="function"&&(v=v(t));var m=mC.apply(void 0,v),S=cl;a&&(S=SC(oo({trace:!CC},typeof a=="object"&&a)));var h=[m];Array.isArray(d)?h=dl([m],d):typeof d=="function"&&(h=d(h));var p=S.apply(void 0,h);return vw(g,c,p)}function ao(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var s=t.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return oo(oo({type:e,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Sw(e){var t={},n=[],r,i={addCase:function(s,o){var l=typeof s=="string"?s:s.type;if(l in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[l]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return e(i),[t,n,r]}function IC(e){return typeof e=="function"}function PC(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Sw(t):[t,n,r],s=i[0],o=i[1],l=i[2],a;if(IC(e))a=function(){return Yd(e())};else{var u=Yd(e);a=function(){return u}}function c(f,d){f===void 0&&(f=a());var g=dl([s[d.type]],o.filter(function(v){var m=v.matcher;return m(d)}).map(function(v){var m=v.reducer;return m}));return g.filter(function(v){return!!v}).length===0&&(g=[l]),g.reduce(function(v,m){if(m)if(yr(v)){var S=v,h=m(S,d);return h===void 0?v:h}else{if(Nn(v))return gw(v,function(p){return m(p,d)});var h=m(v,d);if(h===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}return v},f)}return c.getInitialState=a,c}function AC(e,t){return e+"/"+t}function bw(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Yd(e.initialState),r=e.reducers||{},i=Object.keys(r),s={},o={},l={};i.forEach(function(c){var f=r[c],d=AC(t,c),g,v;"reducer"in f?(g=f.reducer,v=f.prepare):g=f,s[c]=g,o[d]=g,l[c]=v?ao(d,v):ao(d)});function a(){var c=typeof e.extraReducers=="function"?Sw(e.extraReducers):[e.extraReducers],f=c[0],d=f===void 0?{}:f,g=c[1],v=g===void 0?[]:g,m=c[2],S=m===void 0?void 0:m,h=oo(oo({},d),o);return PC(n,h,v,S)}var u;return{name:t,reducer:function(c,f){return u||(u=a()),u(c,f)},actions:l,caseReducers:s,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var Rh="listenerMiddleware";ao(Rh+"/add");ao(Rh+"/removeAll");ao(Rh+"/remove");oC();const xw=bw({name:"auth",initialState:{status:"checking",uid:null,email:null,name:null,direccion:null,numberPhone:null,rol:null,imagen:null,errorMessage:null},reducers:{login:(e,{payload:t})=>{e.status="authenticated",e.uid=t.uid,e.email=t.email,e.errorMessage=null},logout:(e,{payload:t})=>{e.status="not-authenticated",e.uid=null,e.email=null,e.name=null,e.direccion=null,e.numberPhone=null,e.rol=null,e.imagen=null,e.errorMessage=t==null?void 0:t.errorMessage},checkingCredentials:e=>{e.status="checking"},setDatos:(e,{payload:t})=>{e.name=t.name,e.direccion=t.direccion,e.numberPhone=t.numberPhone,e.rol=t.rol,e.imagen=t.imagen}}}),{login:Nh,logout:Ew,checkingCredentials:_w,setDatos:kw}=xw.actions;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cw=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},OC=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Tw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,c=s>>2,f=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Cw(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):OC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const g=l<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},$C=function(e){const t=Cw(e);return Tw.encodeByteArray(t,!0)},fl=function(e){return $C(e).replace(/\./g,"")},Iw=function(e){try{return Tw.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function Pw(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function NC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LC(){const e=st();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Aw(){return typeof indexedDB=="object"}function Ow(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function DC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function MC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FC=()=>MC().__FIREBASE_DEFAULTS__,zC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Iw(e[1]);return t&&JSON.parse(t)},Lh=()=>{try{return FC()||zC()||jC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$w=e=>{var t,n;return(n=(t=Lh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},BC=e=>{const t=$w(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},UC=()=>{var e;return(e=Lh())===null||e===void 0?void 0:e.config},Rw=e=>{var t;return(t=Lh())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function HC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="FirebaseError";class an extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=WC,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zr.prototype.create)}}class Zr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?GC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function GC(e,t){return e.replace(qC,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qC=/\{\$([^}]+)}/g;function KC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function lo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(cg(s)&&cg(o)){if(!lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cg(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function bs(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function xs(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function YC(e,t){const n=new QC(e,t);return n.subscribe.bind(n)}class QC{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XC(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=yc),i.error===void 0&&(i.error=yc),i.complete===void 0&&(i.complete=yc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XC(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function yc(){}/**
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
 */const JC=1e3,ZC=2,eT=4*60*60*1e3,tT=.5;function dg(e,t=JC,n=ZC){const r=t*Math.pow(n,e),i=Math.round(tT*r*(Math.random()-.5)*2);return Math.min(eT,r+i)}/**
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
 */function He(e){return e&&e._delegate?e._delegate:e}class sn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Tr="[DEFAULT]";/**
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
 */class nT{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new VC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(iT(t))try{this.getOrInitializeService({instanceIdentifier:Tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Tr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tr){return this.instances.has(t)}getOptions(t=Tr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rT(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Tr){return this.component?this.component.multipleInstances?t:Tr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rT(e){return e===Tr?void 0:e}function iT(e){return e.instantiationMode==="EAGER"}/**
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
 */class sT{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new nT(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(pe||(pe={}));const oT={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},aT=pe.INFO,lT={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},uT=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=lT[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wu{constructor(t){this.name=t,this._logLevel=aT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oT[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...t),this._logHandler(this,pe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...t),this._logHandler(this,pe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...t),this._logHandler(this,pe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...t),this._logHandler(this,pe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...t),this._logHandler(this,pe.ERROR,...t)}}const cT=(e,t)=>t.some(n=>e instanceof n);let fg,hg;function dT(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fT(){return hg||(hg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nw=new WeakMap,Qd=new WeakMap,Lw=new WeakMap,wc=new WeakMap,Dh=new WeakMap;function hT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(fr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Nw.set(n,e)}).catch(()=>{}),Dh.set(t,e),t}function pT(e){if(Qd.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Qd.set(e,t)}let Xd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Lw.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mT(e){Xd=e(Xd)}function gT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Sc(this),t,...n);return Lw.set(r,t.sort?t.sort():[t]),fr(r)}:fT().includes(e)?function(...t){return e.apply(Sc(this),t),fr(Nw.get(this))}:function(...t){return fr(e.apply(Sc(this),t))}}function vT(e){return typeof e=="function"?gT(e):(e instanceof IDBTransaction&&pT(e),cT(e,dT())?new Proxy(e,Xd):e)}function fr(e){if(e instanceof IDBRequest)return hT(e);if(wc.has(e))return wc.get(e);const t=vT(e);return t!==e&&(wc.set(e,t),Dh.set(t,e)),t}const Sc=e=>Dh.get(e);function Dw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=fr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(fr(o.result),a.oldVersion,a.newVersion,fr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const yT=["get","getKey","getAll","getAllKeys","count"],wT=["put","add","delete","clear"],bc=new Map;function pg(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(bc.get(t))return bc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=wT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yT.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return bc.set(t,s),s}mT(e=>({...e,get:(t,n,r)=>pg(t,n)||e.get(t,n,r),has:(t,n)=>!!pg(t,n)||e.has(t,n)}));/**
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
 */class ST{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bT(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jd="@firebase/app",mg="0.8.2";/**
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
 */const Vr=new wu("@firebase/app"),xT="@firebase/app-compat",ET="@firebase/analytics-compat",_T="@firebase/analytics",kT="@firebase/app-check-compat",CT="@firebase/app-check",TT="@firebase/auth",IT="@firebase/auth-compat",PT="@firebase/database",AT="@firebase/database-compat",OT="@firebase/functions",$T="@firebase/functions-compat",RT="@firebase/installations",NT="@firebase/installations-compat",LT="@firebase/messaging",DT="@firebase/messaging-compat",MT="@firebase/performance",FT="@firebase/performance-compat",zT="@firebase/remote-config",jT="@firebase/remote-config-compat",BT="@firebase/storage",UT="@firebase/storage-compat",VT="@firebase/firestore",HT="@firebase/firestore-compat",WT="firebase",GT="9.12.1";/**
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
 */const Zd="[DEFAULT]",qT={[Jd]:"fire-core",[xT]:"fire-core-compat",[_T]:"fire-analytics",[ET]:"fire-analytics-compat",[CT]:"fire-app-check",[kT]:"fire-app-check-compat",[TT]:"fire-auth",[IT]:"fire-auth-compat",[PT]:"fire-rtdb",[AT]:"fire-rtdb-compat",[OT]:"fire-fn",[$T]:"fire-fn-compat",[RT]:"fire-iid",[NT]:"fire-iid-compat",[LT]:"fire-fcm",[DT]:"fire-fcm-compat",[MT]:"fire-perf",[FT]:"fire-perf-compat",[zT]:"fire-rc",[jT]:"fire-rc-compat",[BT]:"fire-gcs",[UT]:"fire-gcs-compat",[VT]:"fire-fst",[HT]:"fire-fst-compat","fire-js":"fire-js",[WT]:"fire-js-all"};/**
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
 */const hl=new Map,ef=new Map;function KT(e,t){try{e.container.addComponent(t)}catch(n){Vr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yn(e){const t=e.name;if(ef.has(t))return Vr.debug(`There were multiple attempts to register component ${t}.`),!1;ef.set(t,e);for(const n of hl.values())KT(n,e);return!0}function ei(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const YT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hr=new Zr("app","Firebase",YT);/**
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
 */class QT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Co=GT;function Mw(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=UC()),!n)throw hr.create("no-options");const s=hl.get(i);if(s){if(lo(n,s.options)&&lo(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new sT(i);for(const a of ef.values())o.addComponent(a);const l=new QT(n,r,o);return hl.set(i,l),l}function Mh(e=Zd){const t=hl.get(e);if(!t&&e===Zd)return Mw();if(!t)throw hr.create("no-app",{appName:e});return t}function Vt(e,t,n){var r;let i=(r=qT[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vr.warn(l.join(" "));return}yn(new sn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const XT="firebase-heartbeat-database",JT=1,uo="firebase-heartbeat-store";let xc=null;function Fw(){return xc||(xc=Dw(XT,JT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(uo)}}}).catch(e=>{throw hr.create("idb-open",{originalErrorMessage:e.message})})),xc}async function ZT(e){var t;try{return(await Fw()).transaction(uo).objectStore(uo).get(zw(e))}catch(n){if(n instanceof an)Vr.warn(n.message);else{const r=hr.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Vr.warn(r.message)}}}async function gg(e,t){var n;try{const i=(await Fw()).transaction(uo,"readwrite");return await i.objectStore(uo).put(t,zw(e)),i.done}catch(r){if(r instanceof an)Vr.warn(r.message);else{const i=hr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Vr.warn(i.message)}}}function zw(e){return`${e.name}!${e.options.appId}`}/**
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
 */const eI=1024,tI=30*24*60*60*1e3;class nI{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vg(),{heartbeatsToSend:n,unsentEntries:r}=rI(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vg(){return new Date().toISOString().substring(0,10)}function rI(e,t=eI){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yg(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yg(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aw()?Ow().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gg(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yg(e){return fl(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function sI(e){yn(new sn("platform-logger",t=>new ST(t),"PRIVATE")),yn(new sn("heartbeat",t=>new nI(t),"PRIVATE")),Vt(Jd,mg,e),Vt(Jd,mg,"esm2017"),Vt("fire-js","")}sI("");function Fh(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function jw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=jw,Bw=new Zr("auth","Firebase",jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=new wu("@firebase/auth");function Ta(e,...t){wg.logLevel<=pe.ERROR&&wg.error(`Auth (${Co}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,...t){throw zh(e,...t)}function gn(e,...t){return zh(e,...t)}function aI(e,t,n){const r=Object.assign(Object.assign({},oI()),{[t]:n});return new Zr("auth","Firebase",r).create(t,{appName:e.name})}function zh(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Bw.create(e,...t)}function te(e,t,...n){if(!e)throw zh(t,...n)}function Tn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ta(t),new Error(t)}function Ln(e,t){e||Tn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Map;function In(e){Ln(e instanceof Function,"Expected a class definition");let t=Sg.get(e);return t?(Ln(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sg.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(e,t){const n=ei(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lo(s,t!=null?t:{}))return i;on(i,"already-initialized")}return n.initialize({options:t})}function uI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cI(){return bg()==="http:"||bg()==="https:"}function bg(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cI()||Pw()||"connection"in navigator)?navigator.onLine:!0}function fI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ln(n>t,"Short delay should be less than long delay!"),this.isMobile=RC()||NC()}get(){return dI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(e,t){Ln(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new To(3e4,6e4);function Io(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Po(e,t,n,r,i={}){return Vw(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const l=ko(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Uw.fetch()(Hw(e,e.config.apiHost,n,l),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))})}async function Vw(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},hI),t);try{const i=new mI(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oa(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw oa(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw oa(e,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aI(e,c,u);on(e,c)}}catch(i){if(i instanceof an)throw i;on(e,"network-request-failed")}}async function Ao(e,t,n,r,i={}){const s=await Po(e,t,n,r,i);return"mfaPendingCredential"in s&&on(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Hw(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jh(e.config,i):`${e.config.apiScheme}://${i}`}class mI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),pI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oa(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(e,t){return Po(e,"POST","/v1/accounts:delete",t)}async function vI(e,t){return Po(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function yI(e,t=!1){const n=He(e),r=await n.getIdToken(t),i=Bh(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ns(Ec(i.auth_time)),issuedAtTime:Ns(Ec(i.iat)),expirationTime:Ns(Ec(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ec(e){return Number(e)*1e3}function Bh(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Ta("JWT malformed, contained fewer than 3 sections"),null;try{const s=Iw(r);return s?JSON.parse(s):(Ta("Failed to decode base64 JWT payload"),null)}catch(s){return Ta("Caught error parsing JWT payload as JSON",(t=s)===null||t===void 0?void 0:t.toString()),null}}function wI(e){const t=Bh(e);return te(t,"internal-error"),te(typeof t.exp<"u","internal-error"),te(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof an&&SI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function SI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pl(e){var t;const n=e.auth,r=await e.getIdToken(),i=await co(e,vI(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?_I(s.providerUserInfo):[],l=EI(e.providerData,o),a=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Ww(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function xI(e){const t=He(e);await pl(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function EI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function _I(e){return e.map(t=>{var{providerId:n}=t,r=Fh(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(e,t){const n=await Vw(e,{},async()=>{const r=ko({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Hw(e,i,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){te(t.idToken,"internal-error"),te(typeof t.idToken<"u","internal-error"),te(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wI(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return te(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kI(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fo;return r&&(te(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fo,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(e,t){te(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Lr{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Fh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ww(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await co(this,this.stsTokenManager.getToken(this.auth,t));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return yI(this,t)}reload(){return xI(this)}_assign(t){this!==t&&(te(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Lr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await pl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await co(this,gI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,l,a,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:x,isAnonymous:_,providerData:O,stsTokenManager:N}=n;te(y&&N,t,"internal-error");const P=fo.fromJSON(this.name,N);te(typeof y=="string",t,"internal-error"),Bn(f,t.name),Bn(d,t.name),te(typeof x=="boolean",t,"internal-error"),te(typeof _=="boolean",t,"internal-error"),Bn(g,t.name),Bn(v,t.name),Bn(m,t.name),Bn(S,t.name),Bn(h,t.name),Bn(p,t.name);const Y=new Lr({uid:y,auth:t,email:d,emailVerified:x,displayName:f,isAnonymous:_,photoURL:v,phoneNumber:g,tenantId:m,stsTokenManager:P,createdAt:h,lastLoginAt:p});return O&&Array.isArray(O)&&(Y.providerData=O.map($=>Object.assign({},$))),S&&(Y._redirectEventId=S),Y}static async _fromIdTokenResponse(t,n,r=!1){const i=new fo;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await pl(s),s}}/**
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
 */class Gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Gw.type="NONE";const xg=Gw;/**
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
 */function Ia(e,t,n){return`firebase:${e}:${t}:${n}`}class Ni{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ia(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ia("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Lr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ni(In(xg),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||In(xg);const o=Ia(r,t.config.apiKey,t.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Lr._fromJSON(t,c);u!==s&&(l=f),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ni(s,t,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ni(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yw(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qw(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xw(t))return"Blackberry";if(Jw(t))return"Webos";if(Uh(t))return"Safari";if((t.includes("chrome/")||Kw(t))&&!t.includes("edge/"))return"Chrome";if(Qw(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qw(e=st()){return/firefox\//i.test(e)}function Uh(e=st()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kw(e=st()){return/crios\//i.test(e)}function Yw(e=st()){return/iemobile/i.test(e)}function Qw(e=st()){return/android/i.test(e)}function Xw(e=st()){return/blackberry/i.test(e)}function Jw(e=st()){return/webos/i.test(e)}function Su(e=st()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function CI(e=st()){var t;return Su(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function TI(){return LC()&&document.documentMode===10}function Zw(e=st()){return Su(e)||Qw(e)||Jw(e)||Xw(e)||/windows phone/i.test(e)||Yw(e)}function II(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(e,t=[]){let n;switch(e){case"Browser":n=Eg(st());break;case"Worker":n=`${Eg(st())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Co}/${r}`}/**
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
 */class PI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,l)=>{try{const a=t(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new PI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===l)&&(a==null?void 0:a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await pl(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?He(t):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&te(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(In(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Zr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&In(t)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return te(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Oo(e){return He(e)}class _g{constructor(t){this.auth=t,this.observer=null,this.addObserver=YC(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OI(e,t,n){const r=Oo(e);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=t1(t),{host:o,port:l}=$I(t),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RI()}function t1(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $I(e){const t=t1(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:kg(o)}}}function kg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function RI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(t){return Tn("not implemented")}_linkToIdToken(t,n){return Tn("not implemented")}_getReauthenticationResolver(t){return Tn("not implemented")}}async function NI(e,t){return Po(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(e,t){return Ao(e,"POST","/v1/accounts:signInWithPassword",Io(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(e,t){return Ao(e,"POST","/v1/accounts:signInWithEmailLink",Io(e,t))}async function MI(e,t){return Ao(e,"POST","/v1/accounts:signInWithEmailLink",Io(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho extends Vh{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ho(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ho(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return LI(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DI(t,{email:this._email,oobCode:this._password});default:on(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return NI(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MI(t,{idToken:n,email:this._email,oobCode:this._password});default:on(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e,t){return Ao(e,"POST","/v1/accounts:signInWithIdp",Io(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="http://localhost";class Hr extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Fh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Li(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Li(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Li(t,n)}buildRequest(){const t={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ko(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jI(e){const t=bs(xs(e)).link,n=t?bs(xs(t)).deep_link_id:null,r=bs(xs(e)).deep_link_id;return(r?bs(xs(r)).link:null)||r||n||t||e}class Hh{constructor(t){var n,r,i,s,o,l;const a=bs(xs(t)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,f=zI((i=a.mode)!==null&&i!==void 0?i:null);te(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(t){const n=jI(t);try{return new Hh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(t,n){return ho._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Hh.parseLink(n);return te(r,"argument-error"),ho._fromEmailAndCode(t,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $o extends n1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends $o{constructor(){super("facebook.com")}static credential(t){return Hr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qn.credentialFromTaggedObject(t)}static credentialFromError(t){return qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qn.credential(t.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends $o{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Kn.credentialFromTaggedObject(t)}static credentialFromError(t){return Kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends $o{constructor(){super("github.com")}static credential(t){return Hr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yn.credentialFromTaggedObject(t)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yn.credential(t.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends $o{constructor(){super("twitter.com")}static credential(t,n){return Hr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(e,t){return Ao(e,"POST","/v1/accounts:signUp",Io(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Lr._fromIdTokenResponse(t,r,i),o=Cg(r);return new Wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Cg(r);return new Wr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Cg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends an{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ml.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ml(t,n,r,i)}}function r1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ml._fromErrorAndOperation(e,s,t,r):s})}async function UI(e,t,n=!1){const r=await co(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wr._forOperation(e,"link",r)}/**
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
 */async function VI(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const o=await co(e,r1(i,s,t,e),n);te(o.idToken,i,"internal-error");const l=Bh(o.idToken);te(l,i,"internal-error");const{sub:a}=l;return te(e.uid===a,i,"user-mismatch"),Wr._forOperation(e,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&on(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(e,t,n=!1){const r="signIn",i=await r1(e,r,t),s=await Wr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function HI(e,t){return i1(Oo(e),t)}async function WI(e,t,n){const r=Oo(e),i=await BI(r,{returnSecureToken:!0,email:t,password:n}),s=await Wr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function GI(e,t,n){return HI(He(e),rs.credential(t,n))}function qI(e,t,n,r){return He(e).onIdTokenChanged(t,n,r)}function KI(e,t,n){return He(e).beforeAuthStateChanged(t,n)}function YI(e,t,n,r){return He(e).onAuthStateChanged(t,n,r)}const gl="__sak";/**
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
 */class s1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){const e=st();return Uh(e)||Su(e)}const XI=1e3,JI=10;class o1 extends s1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QI()&&II(),this.fallbackToPolling=Zw(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);TI()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,JI):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}o1.type="LOCAL";const ZI=o1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1 extends s1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}a1.type="SESSION";const l1=a1;/**
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
 */function eP(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new bu(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await eP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tP{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Wh("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function nP(e){vn().location.href=e}/**
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
 */function u1(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iP(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function sP(){return u1()?self:null}/**
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
 */const c1="firebaseLocalStorageDb",oP=1,vl="firebaseLocalStorage",d1="fbase_key";class Ro{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xu(e,t){return e.transaction([vl],t?"readwrite":"readonly").objectStore(vl)}function aP(){const e=indexedDB.deleteDatabase(c1);return new Ro(e).toPromise()}function nf(){const e=indexedDB.open(c1,oP);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vl,{keyPath:d1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vl)?t(r):(r.close(),await aP(),t(await nf()))})})}async function Tg(e,t,n){const r=xu(e,!0).put({[d1]:t,value:n});return new Ro(r).toPromise()}async function lP(e,t){const n=xu(e,!1).get(t),r=await new Ro(n).toPromise();return r===void 0?null:r.value}function Ig(e,t){const n=xu(e,!0).delete(t);return new Ro(n).toPromise()}const uP=800,cP=3;class f1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>cP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return u1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bu._getInstance(sP()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||iP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await nf();return await Tg(t,gl,"1"),await Ig(t,gl),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tg(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>lP(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ig(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=xu(i,!1).getAll();return new Ro(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}f1.type="LOCAL";const dP=f1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function hP(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fP().appendChild(r)})}function pP(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new To(3e4,6e4);/**
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
 */function mP(e,t){return t?In(t):(te(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Gh extends Vh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Li(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Li(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Li(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function gP(e){return i1(e.auth,new Gh(e),e.bypassAuthState)}function vP(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),VI(n,new Gh(e),e.bypassAuthState)}async function yP(e){const{auth:t,user:n}=e;return te(n,t,"internal-error"),UI(n,new Gh(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return gP;case"linkViaPopup":case"linkViaRedirect":return yP;case"reauthViaPopup":case"reauthViaRedirect":return vP;default:on(this.auth,"internal-error")}}resolve(t){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=new To(2e3,1e4);class Ei extends h1{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return te(t,this.auth,"internal-error"),t}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const t=Wh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,wP.get())};t()}}Ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="pendingRedirect",Pa=new Map;class bP extends h1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Pa.get(this.auth._key());if(!t){try{const r=await xP(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Pa.set(this.auth._key(),t)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xP(e,t){const n=kP(t),r=_P(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function EP(e,t){Pa.set(e._key(),t)}function _P(e){return In(e._redirectPersistence)}function kP(e){return Ia(SP,e.config.apiKey,e.name)}async function CP(e,t,n=!1){const r=Oo(e),i=mP(r,t),o=await new bP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP=10*60*1e3;class IP{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!PP(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!p1(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(t))}saveEventToCache(t){this.cachedEventUids.add(Pg(t)),this.lastProcessedEventTime=Date.now()}}function Pg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function p1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function PP(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p1(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(e,t={}){return Po(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$P=/^https?/;async function RP(e){if(e.config.emulator)return;const{authorizedDomains:t}=await AP(e);for(const n of t)try{if(NP(n))return}catch{}on(e,"unauthorized-domain")}function NP(e){const t=tf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$P.test(n))return!1;if(OP.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LP=new To(3e4,6e4);function Ag(){const e=vn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function DP(e){return new Promise((t,n)=>{var r,i,s;function o(){Ag(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ag(),n(gn(e,"network-request-failed"))},timeout:LP.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const l=pP("iframefcb");return vn()[l]=()=>{gapi.load?o():n(gn(e,"network-request-failed"))},hP(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(t=>{throw Aa=null,t})}let Aa=null;function MP(e){return Aa=Aa||DP(e),Aa}/**
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
 */const FP=new To(5e3,15e3),zP="__/auth/iframe",jP="emulator/auth/iframe",BP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VP(e){const t=e.config;te(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jh(t,jP):`https://${e.config.authDomain}/${zP}`,r={apiKey:t.apiKey,appName:e.name,v:Co},i=UP.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ko(r).slice(1)}`}async function HP(e){const t=await MP(e),n=vn().gapi;return te(n,e,"internal-error"),t.open({where:document.body,url:VP(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(e,"network-request-failed"),l=vn().setTimeout(()=>{s(o)},FP.get());function a(){vn().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const WP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GP=500,qP=600,KP="_blank",YP="http://localhost";class Og{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QP(e,t,n,r=GP,i=qP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},WP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=st().toLowerCase();n&&(l=Kw(u)?KP:n),qw(u)&&(t=t||YP,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(CI(u)&&l!=="_self")return XP(t||"",l),new Og(null);const f=window.open(t||"",l,c);te(f,e,"popup-blocked");try{f.focus()}catch{}return new Og(f)}function XP(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JP="__/auth/handler",ZP="emulator/auth/handler";function $g(e,t,n,r,i,s){te(e.config.authDomain,e,"auth-domain-config-required"),te(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Co,eventId:i};if(t instanceof n1){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",KC(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(t instanceof $o){const a=t.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}e.tenantId&&(o.tid=e.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${eA(e)}?${ko(l).slice(1)}`}function eA({config:e}){return e.emulator?jh(e,ZP):`https://${e.authDomain}/${JP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="webStorageSupport";class tA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l1,this._completeRedirectFn=CP,this._overrideRedirectResult=EP}async _openPopup(t,n,r,i){var s;Ln((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=$g(t,n,r,tf(),i);return QP(t,o,Wh())}async _openRedirect(t,n,r,i){return await this._originValidation(t),nP($g(t,n,r,tf(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await HP(t),r=new IP(t);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(_c,{type:_c},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_c];o!==void 0&&n(!!o),on(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RP(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zw()||Uh()||Su()}}const nA=tA;var Rg="@firebase/auth",Ng="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sA(e){yn(new sn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{te(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),te(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(e)},c=new AI(l,a,u);return uI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),yn(new sn("auth-internal",t=>{const n=Oo(t.getProvider("auth").getImmediate());return(r=>new rA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Rg,Ng,iA(e)),Vt(Rg,Ng,"esm2017")}/**
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
 */const oA=5*60,aA=Rw("authIdTokenMaxAge")||oA;let Lg=null;const lA=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aA)return;const i=n==null?void 0:n.token;Lg!==i&&(Lg=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uA(e=Mh()){const t=ei(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lI(e,{popupRedirectResolver:nA,persistence:[dP,ZI,l1]}),r=Rw("authTokenSyncURL");if(r){const s=lA(r);KI(n,s,()=>s(n.currentUser)),qI(n,o=>s(o))}const i=$w("auth");return i&&OI(n,`http://${i}`),n}sA("Browser");var cA="firebase",dA="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(cA,dA,"app");const m1="@firebase/installations",qh="0.5.15";/**
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
 */const g1=1e4,v1=`w:${qh}`,y1="FIS_v2",fA="https://firebaseinstallations.googleapis.com/v1",hA=60*60*1e3,pA="installations",mA="Installations";/**
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
 */const gA={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Gr=new Zr(pA,mA,gA);function w1(e){return e instanceof an&&e.code.includes("request-failed")}/**
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
 */function S1({projectId:e}){return`${fA}/projects/${e}/installations`}function b1(e){return{token:e.token,requestStatus:2,expiresIn:yA(e.expiresIn),creationTime:Date.now()}}async function x1(e,t){const r=(await t.json()).error;return Gr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E1({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function vA(e,{refreshToken:t}){const n=E1(e);return n.append("Authorization",wA(t)),n}async function _1(e){const t=await e();return t.status>=500&&t.status<600?e():t}function yA(e){return Number(e.replace("s","000"))}function wA(e){return`${y1} ${e}`}/**
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
 */async function SA({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=S1(e),i=E1(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:y1,appId:e.appId,sdkVersion:v1},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await _1(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:b1(u.authToken)}}else throw await x1("Create Installation",a)}/**
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
 */function k1(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function bA(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xA=/^[cdef][\w-]{21}$/,rf="";function EA(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=_A(e);return xA.test(n)?n:rf}catch{return rf}}function _A(e){return bA(e).substr(0,22)}/**
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
 */function Eu(e){return`${e.appName}!${e.appId}`}/**
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
 */const C1=new Map;function T1(e,t){const n=Eu(e);I1(n,t),kA(n,t)}function I1(e,t){const n=C1.get(e);if(!!n)for(const r of n)r(t)}function kA(e,t){const n=CA();n&&n.postMessage({key:e,fid:t}),TA()}let $r=null;function CA(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=e=>{I1(e.data.key,e.data.fid)}),$r}function TA(){C1.size===0&&$r&&($r.close(),$r=null)}/**
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
 */const IA="firebase-installations-database",PA=1,qr="firebase-installations-store";let kc=null;function Kh(){return kc||(kc=Dw(IA,PA,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qr)}}})),kc}async function yl(e,t){const n=Eu(e),i=(await Kh()).transaction(qr,"readwrite"),s=i.objectStore(qr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&T1(e,t.fid),t}async function P1(e){const t=Eu(e),r=(await Kh()).transaction(qr,"readwrite");await r.objectStore(qr).delete(t),await r.done}async function _u(e,t){const n=Eu(e),i=(await Kh()).transaction(qr,"readwrite"),s=i.objectStore(qr),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&T1(e,l.fid),l}/**
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
 */async function Yh(e){let t;const n=await _u(e.appConfig,r=>{const i=AA(r),s=OA(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===rf?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function AA(e){const t=e||{fid:EA(),registrationStatus:0};return A1(t)}function OA(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=$A(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:RA(e)}:{installationEntry:t}}async function $A(e,t){try{const n=await SA(e,t);return yl(e.appConfig,n)}catch(n){throw w1(n)&&n.customData.serverCode===409?await P1(e.appConfig):await yl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function RA(e){let t=await Dg(e.appConfig);for(;t.registrationStatus===1;)await k1(100),t=await Dg(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Yh(e);return r||n}return t}function Dg(e){return _u(e,t=>{if(!t)throw Gr.create("installation-not-found");return A1(t)})}function A1(e){return NA(e)?{fid:e.fid,registrationStatus:0}:e}function NA(e){return e.registrationStatus===1&&e.registrationTime+g1<Date.now()}/**
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
 */async function LA({appConfig:e,heartbeatServiceProvider:t},n){const r=DA(e,n),i=vA(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:v1,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await _1(()=>fetch(r,l));if(a.ok){const u=await a.json();return b1(u)}else throw await x1("Generate Auth Token",a)}function DA(e,{fid:t}){return`${S1(e)}/${t}/authTokens:generate`}/**
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
 */async function Qh(e,t=!1){let n;const r=await _u(e.appConfig,s=>{if(!O1(s))throw Gr.create("not-registered");const o=s.authToken;if(!t&&zA(o))return s;if(o.requestStatus===1)return n=MA(e,t),s;{if(!navigator.onLine)throw Gr.create("app-offline");const l=BA(s);return n=FA(e,l),l}});return n?await n:r.authToken}async function MA(e,t){let n=await Mg(e.appConfig);for(;n.authToken.requestStatus===1;)await k1(100),n=await Mg(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qh(e,t):r}function Mg(e){return _u(e,t=>{if(!O1(t))throw Gr.create("not-registered");const n=t.authToken;return UA(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function FA(e,t){try{const n=await LA(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await yl(e.appConfig,r),n}catch(n){if(w1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await P1(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await yl(e.appConfig,r)}throw n}}function O1(e){return e!==void 0&&e.registrationStatus===2}function zA(e){return e.requestStatus===2&&!jA(e)}function jA(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+hA}function BA(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function UA(e){return e.requestStatus===1&&e.requestTime+g1<Date.now()}/**
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
 */async function VA(e){const t=e,{installationEntry:n,registrationPromise:r}=await Yh(t);return r?r.catch(console.error):Qh(t).catch(console.error),n.fid}/**
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
 */async function HA(e,t=!1){const n=e;return await WA(n),(await Qh(n,t)).token}async function WA(e){const{registrationPromise:t}=await Yh(e);t&&await t}/**
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
 */function GA(e){if(!e||!e.options)throw Cc("App Configuration");if(!e.name)throw Cc("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Cc(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Cc(e){return Gr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="installations",qA="installations-internal",KA=e=>{const t=e.getProvider("app").getImmediate(),n=GA(t),r=ei(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YA=e=>{const t=e.getProvider("app").getImmediate(),n=ei(t,$1).getImmediate();return{getId:()=>VA(n),getToken:i=>HA(n,i)}};function QA(){yn(new sn($1,KA,"PUBLIC")),yn(new sn(qA,YA,"PRIVATE"))}QA();Vt(m1,qh);Vt(m1,qh,"esm2017");/**
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
 */const wl="analytics",XA="firebase_id",JA="origin",ZA=60*1e3,eO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",R1="https://www.googletagmanager.com/gtag/js";/**
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
 */const Pt=new wu("@firebase/analytics");/**
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
 */function N1(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function tO(e,t){const n=document.createElement("script");n.src=`${R1}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function nO(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function rO(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await N1(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Pt.error(l)}e("config",i,s)}async function iO(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await N1(n);for(const a of o){const u=l.find(f=>f.measurementId===a),c=u&&t[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Pt.error(s)}}function sO(e,t,n,r){async function i(s,o,l){try{s==="event"?await iO(e,t,n,o,l):s==="config"?await rO(e,t,n,r,o,l):s==="consent"?e("consent","update",l):e("set",o)}catch(a){Pt.error(a)}}return i}function oO(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=sO(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function aO(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(R1)&&n.src.includes(e))return n;return null}/**
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
 */const lO={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ht=new Zr("analytics","Analytics",lO);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO=30,cO=1e3;class dO{constructor(t={},n=cO){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const L1=new dO;function fO(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function hO(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:fO(r)},s=eO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw Ht.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function pO(e,t=L1,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ht.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ht.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new vO;return setTimeout(async()=>{l.abort()},n!==void 0?n:ZA),D1({appId:r,apiKey:i,measurementId:s},o,l,t)}async function D1(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=L1){var s,o;const{appId:l,measurementId:a}=e;try{await mO(r,t)}catch(u){if(a)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${(s=u)===null||s===void 0?void 0:s.message}]`),{appId:l,measurementId:a};throw u}try{const u=await hO(e);return i.deleteThrottleMetadata(l),u}catch(u){const c=u;if(!gO(c)){if(i.deleteThrottleMetadata(l),a)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:l,measurementId:a};throw u}const f=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?dg(n,i.intervalMillis,uO):dg(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(l,d),Pt.debug(`Calling attemptFetch again in ${f} millis`),D1(e,d,r,i)}}function mO(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Ht.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function gO(e){if(!(e instanceof an)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class vO{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function yO(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(){var e;if(Aw())try{await Ow()}catch(t){return Pt.warn(Ht.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return Pt.warn(Ht.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SO(e,t,n,r,i,s,o){var l;const a=pO(e);a.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Pt.error(g)),t.push(a);const u=wO().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([a,u]);aO(s)||tO(s,c.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[JA]="firebase",d.update=!0,f!=null&&(d[XA]=f),i("config",c.measurementId,d),c.measurementId}/**
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
 */class bO{constructor(t){this.app=t}_delete(){return delete Ls[this.app.options.appId],Promise.resolve()}}let Ls={},Fg=[];const zg={};let Tc="dataLayer",xO="gtag",jg,M1,Bg=!1;function EO(){const e=[];if(Pw()&&e.push("This is a browser extension environment."),DC()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ht.create("invalid-analytics-context",{errorInfo:t});Pt.warn(n.message)}}function _O(e,t,n){EO();const r=e.options.appId;if(!r)throw Ht.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ht.create("no-api-key");if(Ls[r]!=null)throw Ht.create("already-exists",{id:r});if(!Bg){nO(Tc);const{wrappedGtag:s,gtagCore:o}=oO(Ls,Fg,zg,Tc,xO);M1=s,jg=o,Bg=!0}return Ls[r]=SO(e,Fg,zg,t,jg,Tc,n),new bO(e)}function kO(e=Mh()){e=He(e);const t=ei(e,wl);return t.isInitialized()?t.getImmediate():CO(e)}function CO(e,t={}){const n=ei(e,wl);if(n.isInitialized()){const i=n.getImmediate();if(lo(t,n.getOptions()))return i;throw Ht.create("already-initialized")}return n.initialize({options:t})}function TO(e,t,n,r){e=He(e),yO(M1,Ls[e.app.options.appId],t,n,r).catch(i=>Pt.error(i))}const Ug="@firebase/analytics",Vg="0.8.3";function IO(){yn(new sn(wl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return _O(r,i,n)},"PUBLIC")),yn(new sn("analytics-internal",e,"PRIVATE")),Vt(Ug,Vg),Vt(Ug,Vg,"esm2017");function e(t){try{const n=t.getProvider(wl).getImmediate();return{logEvent:(r,i,s)=>TO(n,r,i,s)}}catch(n){throw Ht.create("interop-component-reg-failed",{reason:n})}}}IO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let is="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new wu("@firebase/firestore");function Sl(e,...t){if(Gi.logLevel<=pe.DEBUG){const n=t.map(Jh);Gi.debug(`Firestore (${is}): ${e}`,...n)}}function Xh(e,...t){if(Gi.logLevel<=pe.ERROR){const n=t.map(Jh);Gi.error(`Firestore (${is}): ${e}`,...n)}}function F1(e,...t){if(Gi.logLevel<=pe.WARN){const n=t.map(Jh);Gi.warn(`Firestore (${is}): ${e}`,...n)}}function Jh(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function De(e="Unexpected state"){const t=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+e;throw Xh(t),new Error(t)}function St(e,t){e||De()}function No(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="ok",PO="cancelled",Ds="unknown",fe="invalid-argument",AO="deadline-exceeded",OO="not-found",$O="permission-denied",sf="unauthenticated",RO="resource-exhausted",qi="failed-precondition",NO="aborted",LO="out-of-range",z1="unimplemented",DO="internal",MO="unavailable";class ne extends an{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class FO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class zO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jO{constructor(t){this.auth=null,t.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(St(typeof t.accessToken=="string"),new j1(t.accessToken,new pt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}}class BO{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(St(!(typeof this.t!="object"||this.t===null||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class UO{constructor(t,n,r,i){this.t=t,this.i=n,this.o=r,this.u=i}getToken(){return Promise.resolve(new BO(this.t,this.i,this.o,this.u))}start(t,n){t.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VO{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HO{constructor(t){this.m=t,this.appCheck=null,t.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(t=>t?(St(typeof t.token=="string"),new VO(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(t,n,r,i,s,o,l,a){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class po{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof po&&t.projectId===this.projectId&&t.database===this.database}}class mo{constructor(t,n,r){n===void 0?n=0:n>t.length&&De(),r===void 0?r=t.length-n:r>t.length-n&&De(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return mo.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof mo?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class Ue extends mo{construct(t,n,r){return new Ue(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new ne(fe,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const GO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends mo{construct(t,n,r){return new kt(t,n,r)}static isValidIdentifier(t){return GO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ne(fe,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new ne(fe,"Path has trailing escape character: "+t);const a=t[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new ne(fe,"Path has invalid escape sequence: "+t);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ne(fe,"Unterminated ` in path: "+t);return new kt(n)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.path=t}static fromPath(t){return new Bt(Ue.fromString(t))}static fromName(t){return new Bt(Ue.fromString(t).popFirst(5))}static empty(){return new Bt(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ue.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Ue.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Bt(new Ue(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(e,t,n){if(!n)throw new ne(fe,`Function ${e}() cannot be called with an empty ${t}.`)}function Wg(e){if(!Bt.isDocumentKey(e))throw new ne(fe,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Gg(e){if(Bt.isDocumentKey(e))throw new ne(fe,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Zh(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":De()}function ss(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ne(fe,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zh(e);throw new ne(fe,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(e){return e==null}function bl(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qg,ae;function Kg(e){if(e===void 0)return Xh("RPC_ERROR","HTTP error has no status"),Ds;switch(e){case 200:return Hg;case 400:return qi;case 401:return sf;case 403:return $O;case 404:return OO;case 409:return NO;case 416:return LO;case 429:return RO;case 499:return PO;case 500:return Ds;case 501:return z1;case 503:return MO;case 504:return AO;default:return e>=200&&e<300?Hg:e>=400&&e<500?qi:e>=500&&e<600?DO:Ds}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ae=qg||(qg={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";class YO extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.p=n+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(t,n,r,i,s){const o=this.T(t,n);Sl("RestConnection","Sending: ",o,r);const l={};return this.A(l,i,s),this.R(t,o,l,r).then(a=>(Sl("RestConnection","Received: ",a),a),a=>{throw F1("RestConnection",`${t} failed with error: `,a,"url: ",o,"request:",r),a})}P(t,n,r,i,s,o){return this.I(t,n,r,i,s)}A(t,n,r){t["X-Goog-Api-Client"]="gl-js/ fire/"+is,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>t[s]=i),r&&r.headers.forEach((i,s)=>t[s]=i)}T(t,n){const r=KO[t];return`${this.p}/v1/${n}:${r}`}}{constructor(t,n){super(t),this.V=n}N(t,n){throw new Error("Not supported by FetchConnection")}async R(t,n,r,i){const s=JSON.stringify(i);let o;try{o=await this.V(n,{method:"POST",headers:r,body:s})}catch(l){throw new ne(Kg(l.status),"Request failed with error: "+l.statusText)}if(!o.ok)throw new ne(Kg(o.status),"Request failed with error: "+o.statusText);return o.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function QO(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{static D(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=QO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function go(e,t){return e<t?-1:e>t?1:0}function U1(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ne(fe,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(fe,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new ne(fe,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ne(fe,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new At(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?go(this.nanoseconds,t.nanoseconds):go(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Yg(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Lo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,n){this.comparator=t,this.root=n||Ye.EMPTY}insert(t,n){return new xl(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new xl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new aa(this.root,t,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new aa(this.root,t,this.comparator,!0)}}class aa{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r!=null?r:Ye.RED,this.left=i!=null?i:Ye.EMPTY,this.right=s!=null?s:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Ye(t!=null?t:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw De();const t=this.left.check();if(t!==this.right.check())throw De();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw De()}get value(){throw De()}get color(){throw De()}get left(){throw De()}get right(){throw De()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.comparator=t,this.data=new xl(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qg(this.data.getIterator())}getIteratorFrom(t){return new Qg(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof El)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new El(this.comparator);return n.data=t,n}}class Qg{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t){this.fields=t,t.sort(kt.comparator)}static empty(){return new Kr([])}unionWith(t){let n=new El(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Kr(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return U1(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new Dn(n)}static fromUint8Array(t){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(t);return new Dn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return go(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Dn.EMPTY_BYTE_STRING=new Dn("");const JO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vo(e){if(St(!!e),typeof e=="string"){let t=0;const n=JO.exec(e);if(St(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Et(e.seconds),nanos:Et(e.nanos)}}function Et(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function of(e){return typeof e=="string"?Dn.fromBase64String(e):Dn.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function H1(e){const t=e.mapValue.fields.__previous_value__;return V1(t)?H1(t):t}function af(e){const t=vo(e.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}function lf(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?V1(e)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9007199254740991:10:De()}function uf(e,t){if(e===t)return!0;const n=lf(e);if(n!==lf(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return af(e).isEqual(af(t));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=vo(r.timestampValue),o=vo(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,i){return of(r.bytesValue).isEqual(of(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,i){return Et(r.geoPointValue.latitude)===Et(i.geoPointValue.latitude)&&Et(r.geoPointValue.longitude)===Et(i.geoPointValue.longitude)}(e,t);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Et(r.integerValue)===Et(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Et(r.doubleValue),o=Et(i.doubleValue);return s===o?bl(s)===bl(o):isNaN(s)&&isNaN(o)}return!1}(e,t);case 9:return U1(e.arrayValue.values||[],t.arrayValue.values||[],uf);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Yg(s)!==Yg(o))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(o[l]===void 0||!uf(s[l],o[l])))return!1;return!0}(e,t);default:return De()}}function Xg(e){return!!e&&"nullValue"in e}function Jg(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ic(e){return!!e&&"mapValue"in e}function Ms(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Lo(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ms(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ms(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ic(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ms(n)}setAll(t){let n=kt.emptyPath(),r={},i=[];t.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ms(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return uf(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Lo(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Ct(Ms(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZO{constructor(t,n=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.$=null}}function Zg(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ZO(e,t,n,r,i,s,o)}class ev{constructor(t,n){this.position=t,this.inclusive=n}}class Oa{constructor(t,n="asc"){this.field=t,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(t,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}function t$(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function n$(e){for(const t of e.filters)if(t.q())return t.field;return null}function tv(e){const t=No(e);if(t.O===null){t.O=[];const n=n$(t),r=t$(t);if(n!==null&&r===null)n.isKeyField()||t.O.push(new Oa(n)),t.O.push(new Oa(kt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.O.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.O.push(new Oa(kt.keyField(),s))}}}return t.O}function r$(e){const t=No(e);if(!t.k)if(t.limitType==="F")t.k=Zg(t.path,t.collectionGroup,tv(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of tv(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new Oa(s.field,o))}const r=t.endAt?new ev(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ev(t.startAt.position,t.startAt.inclusive):null;t.k=Zg(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.k}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i$(e,t){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!bl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(t)?function(n){return{integerValue:""+n}}(t):function(n,r){if(n.C){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bl(r)?"-0":r}}(e,t)}/**
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
 */class ku{constructor(){this._=void 0}}class s$ extends ku{}class o$ extends ku{constructor(t){super(),this.elements=t}}class a$ extends ku{constructor(t){super(),this.elements=t}}class l$ extends ku{constructor(t,n){super(),this.L=t,this.M=n}}class Dr{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Dr}static exists(t){return new Dr(void 0,t)}static updateTime(t){return new Dr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class Cu{}class W1 extends Cu{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ep extends Cu{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class G1 extends Cu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class u$ extends Cu{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),d$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class f${constructor(t,n){this.databaseId=t,this.C=n}}function cf(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function h$(e,t){return e.C?t.toBase64():t.toUint8Array()}function p$(e,t){return cf(e,t.toTimestamp())}function df(e){return St(!!e),Jt.fromTimestamp(function(t){const n=vo(t);return new At(n.seconds,n.nanos)}(e))}function tp(e,t){return function(n){return new Ue(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function _l(e,t){return tp(e.databaseId,t.path)}function ff(e,t){const n=function(i){const s=Ue.fromString(i);return St(K1(s)),s}(t);if(n.get(1)!==e.databaseId.projectId)throw new ne(fe,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ne(fe,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Bt((St((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function nv(e,t){return tp(e.databaseId,t)}function q1(e){return new Ue(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rv(e,t,n){return{name:_l(e,t),fields:n.value.mapValue.fields}}function m$(e,t){return"found"in t?function(n,r){St(!!r.found),r.found.name,r.found.updateTime;const i=ff(n,r.found.name),s=df(r.found.updateTime),o=new Ct({mapValue:{fields:r.found.fields}});return cn.newFoundDocument(i,s,o)}(e,t):"missing"in t?function(n,r){St(!!r.missing),St(!!r.readTime);const i=ff(n,r.missing),s=df(r.readTime);return cn.newNoDocument(i,s)}(e,t):De()}function g$(e,t){let n;if(t instanceof W1)n={update:rv(e,t.key,t.value)};else if(t instanceof G1)n={delete:_l(e,t.key)};else if(t instanceof ep)n={update:rv(e,t.key,t.data),updateMask:S$(t.fieldMask)};else{if(!(t instanceof u$))return De();n={verify:_l(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof s$)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof o$)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof a$)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof l$)return{fieldPath:s.field.canonicalString(),increment:o.M};throw De()}(0,r))),t.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:p$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:De()}(e,t.precondition)),n}function v$(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=nv(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=nv(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(c=>function(f){if(f.op==="=="){if(Jg(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NAN"}};if(Xg(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Jg(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NAN"}};if(Xg(f.value))return{unaryFilter:{field:ii(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(f.field),op:w$(f.op),value:f.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(c){return{field:ii(c.field),direction:y$(c.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||qO(u)?u:{value:u}}(e,t.limit);var l;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(t.endAt)),n}function y$(e){return c$[e]}function w$(e){return d$[e]}function ii(e){return{fieldPath:e.canonicalString()}}function S$(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function K1(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e){return new f$(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b$ extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.tt=r,this.L=i,this.et=!1}nt(){if(this.et)throw new ne(qi,"The client has already been terminated.")}I(t,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.tt.I(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===sf&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(Ds,i.toString())})}P(t,n,r,i){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.tt.P(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===sf&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne(Ds,s.toString())})}terminate(){this.et=!0}}async function rp(e,t){const n=No(e),r=q1(n.L)+"/documents",i={writes:t.map(s=>g$(n.L,s))};await n.I("Commit",r,i)}async function x$(e,t){const n=No(e),r=q1(n.L)+"/documents",i={documents:t.map(a=>_l(n.L,a))},s=await n.P("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach(a=>{const u=m$(n.L,a);o.set(u.key.toString(),u)});const l=[];return t.forEach(a=>{const u=o.get(a.toString());St(!!u),l.push(u)}),l}async function E$(e,t){const n=No(e),r=v$(n.L,r$(t));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,l){const a=ff(s,o.name),u=df(o.updateTime),c=new Ct({mapValue:{fields:o.fields}}),f=cn.newFoundDocument(a,u,c);return l&&f.setHasCommittedMutations(),l?f.setHasCommittedMutations():f}(n.L,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map;function Do(e){if(e._terminated)throw new ne(qi,"The client has already been terminated.");if(!Fs.has(e)){Sl("ComponentProvider","Initializing Datastore");const s=function(a){return new YO(a,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new WO(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=np(e._databaseId),l=function(a,u,c,f){return new b$(a,u,c,f)}(e._authCredentials,e._appCheckCredentials,s,o);Fs.set(e,l)}var t,n,r,i;/**
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
*/return Fs.get(e)}class iv{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new ne(fe,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new ne(fe,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(r,i,s,o){if(i===!0&&o===!0)throw new ne(fe,`${r} and ${s} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(qi,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new ne(qi,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iv(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new FO;switch(n.type){case"gapi":const r=n.client;return new UO(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new ne(fe,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Fs.get(t);n&&(Sl("ComponentProvider","Removing Datastore"),Fs.delete(t),n.terminate())}(this),Promise.resolve()}}function _$(e,t){const n=typeof e=="object"?e:Mh(),r=typeof e=="string"?e:t||"(default)",i=ei(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=BC("firestore");s&&k$(i,...s)}return i}function k$(e,t,n,r={}){var i;const s=(e=ss(e,Tu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==t&&F1("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let o,l;if(typeof r.mockUserToken=="string")o=r.mockUserToken,l=pt.MOCK_USER;else{o=HC(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const a=r.mockUserToken.sub||r.mockUserToken.user_id;if(!a)throw new ne(fe,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(a)}e._authCredentials=new zO(new j1(o,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}}class Iu{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Iu(this.firestore,t,this._query)}}class pr extends Iu{constructor(t,n,r){super(t,n,new e$(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new Bt(t))}withConverter(t){return new pr(this.firestore,t,this._path)}}function ip(e,t,...n){if(e=He(e),B1("collection","path",t),e instanceof Tu){const r=Ue.fromString(t,...n);return Gg(r),new pr(e,null,r)}{if(!(e instanceof dt||e instanceof pr))throw new ne(fe,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ue.fromString(t,...n));return Gg(r),new pr(e.firestore,null,r)}}function Mo(e,t,...n){if(e=He(e),arguments.length===1&&(t=XO.D()),B1("doc","path",t),e instanceof Tu){const r=Ue.fromString(t,...n);return Wg(r),new dt(e,null,new Bt(r))}{if(!(e instanceof dt||e instanceof pr))throw new ne(fe,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ue.fromString(t,...n));return Wg(r),new dt(e.firestore,e instanceof pr?e.converter:null,new Bt(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ki(Dn.fromBase64String(t))}catch(n){throw new ne(fe,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ki(Dn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ne(fe,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class op{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ne(fe,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ne(fe,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return go(this._lat,t._lat)||go(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$=/^__.*__$/;class T${constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ep(t,this.data,this.fieldMask,n,this.fieldTransforms):new W1(t,this.data,n,this.fieldTransforms)}}class Y1{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ep(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q1(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw De()}}class ap{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.L=r,this.ignoreUndefinedProperties=i,s===void 0&&this.rt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(t){return new ap(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.it({path:r,ut:!1});return i.ct(t),i}at(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.it({path:r,ut:!1});return i.rt(),i}ht(t){return this.it({path:void 0,ut:!0})}lt(t){return kl(t,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}rt(){if(this.path)for(let t=0;t<this.path.length;t++)this.ct(this.path.get(t))}ct(t){if(t.length===0)throw this.lt("Document fields must not be empty");if(Q1(this.st)&&C$.test(t))throw this.lt('Document fields cannot begin and end with "__"')}}class I${constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.L=r||np(t)}wt(t,n,r,i=!1){return new ap({st:t,methodName:n,dt:r,path:kt.emptyPath(),ut:!1,ft:i},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function X1(e){const t=e._freezeSettings(),n=np(e._databaseId);return new I$(e._databaseId,!!t.ignoreUndefinedProperties,n)}function P$(e,t,n,r,i,s={}){const o=e.wt(s.merge||s.mergeFields?2:0,t,n,i);lp("Data must be an object, but it was:",o,r);const l=J1(r,o);let a,u;if(s.merge)a=new Kr(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=hf(t,f,n);if(!o.contains(d))throw new ne(fe,`Field '${d}' is specified in your field mask but missing from your input data.`);eS(c,d)||c.push(d)}a=new Kr(c),u=o.fieldTransforms.filter(f=>a.covers(f.field))}else a=null,u=o.fieldTransforms;return new T$(new Ct(l),a,u)}class Au extends sp{_toFieldTransform(t){if(t.st!==2)throw t.st===1?t.lt(`${this._methodName}() can only appear at the top level of your update data`):t.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Au}}function A$(e,t,n,r){const i=e.wt(1,t,n);lp("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();Lo(r,(a,u)=>{const c=up(t,a,n);u=He(u);const f=i.at(c);if(u instanceof Au)s.push(c);else{const d=Ou(u,f);d!=null&&(s.push(c),o.set(c,d))}});const l=new Kr(s);return new Y1(o,l,i.fieldTransforms)}function O$(e,t,n,r,i,s){const o=e.wt(1,t,n),l=[hf(t,r,n)],a=[i];if(s.length%2!=0)throw new ne(fe,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)l.push(hf(t,s[d])),a.push(s[d+1]);const u=[],c=Ct.empty();for(let d=l.length-1;d>=0;--d)if(!eS(u,l[d])){const g=l[d];let v=a[d];v=He(v);const m=o.at(g);if(v instanceof Au)u.push(g);else{const S=Ou(v,m);S!=null&&(u.push(g),c.set(g,S))}}const f=new Kr(u);return new Y1(c,f,o.fieldTransforms)}function Ou(e,t){if(Z1(e=He(e)))return lp("Unsupported field value:",t,e),J1(e,t);if(e instanceof sp)return function(n,r){if(!Q1(r.st))throw r.lt(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.lt(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ut&&t.st!==4)throw t.lt("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let l=Ou(o,r.ht(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(e,t)}return function(n,r){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return i$(r.L,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=At.fromDate(n);return{timestampValue:cf(r.L,i)}}if(n instanceof At){const i=new At(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cf(r.L,i)}}if(n instanceof op)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ki)return{bytesValue:h$(r.L,n._byteString)};if(n instanceof dt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.lt(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.lt(`Unsupported field value: ${Zh(n)}`)}(e,t)}function J1(e,t){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Lo(e,(r,i)=>{const s=Ou(i,t.ot(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Z1(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof At||e instanceof op||e instanceof Ki||e instanceof dt||e instanceof sp)}function lp(e,t,n){if(!Z1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Zh(n);throw r==="an object"?t.lt(e+" a custom object"):t.lt(e+" "+r)}}function hf(e,t,n){if((t=He(t))instanceof Pu)return t._internalPath;if(typeof t=="string")return up(e,t);throw kl("Field path arguments must be of type string or ",e,!1,void 0,n)}const $$=new RegExp("[~\\*/\\[\\]]");function up(e,t,n){if(t.search($$)>=0)throw kl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Pu(...t.split("."))._internalPath}catch{throw kl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function kl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new ne(fe,l+e+a)}function eS(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(N$("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nS extends tS{data(){return super.data()}}class R${constructor(t,n){this._docs=n,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,n){this._docs.forEach(t,n)}}function N$(e,t){return typeof t=="string"?up(e,t):t instanceof Pu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function L$(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class rS extends class{convertValue(t,n="none"){switch(lf(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(of(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw De()}}convertObject(t,n){const r={};return Lo(t.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new op(Et(t.latitude),Et(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=H1(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(af(t));default:return null}}convertTimestamp(t){const n=vo(t);return new At(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Ue.fromString(t);St(K1(r));const i=new po(r.get(1),r.get(3)),s=new Bt(r.popFirst(5));return i.isEqual(n)||Xh(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ki(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function D$(e){const t=Do((e=ss(e,dt)).firestore),n=new rS(e.firestore);return x$(t,[e._key]).then(r=>{St(r.length===1);const i=r[0];return new tS(e.firestore,n,e._key,i.isFoundDocument()?i:null,e.converter)})}function iS(e){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ne(z1,"limitToLast() queries require specifying at least one orderBy() clause")})((e=ss(e,Iu))._query);const t=Do(e.firestore),n=new rS(e.firestore);return E$(t,e._query).then(r=>{const i=r.map(s=>new nS(e.firestore,n,s.key,s,e.converter));return e._query.limitType==="L"&&i.reverse(),new R$(e,i)})}function sS(e,t,n){const r=L$((e=ss(e,dt)).converter,t,n),i=P$(X1(e.firestore),"setDoc",e._key,r,e.converter!==null,n);return rp(Do(e.firestore),[i.toMutation(e._key,Dr.none())])}function M$(e,t,n,...r){const i=X1((e=ss(e,dt)).firestore);let s;return s=typeof(t=He(t))=="string"||t instanceof Pu?O$(i,"updateDoc",e._key,t,n,r):A$(i,"updateDoc",e._key,t),rp(Do(e.firestore),[s.toMutation(e._key,Dr.exists(!0))])}function F$(e){return rp(Do((e=ss(e,dt)).firestore),[new G1(e._key,Dr.none())])}(function(e){is=e})(`${Co}_lite`),yn(new sn("firestore/lite",(e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Tu(new jO(e.getProvider("auth-internal")),new HO(e.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new ne(fe,'"projectId" not provided in firebase.initializeApp.');return new po(s.options.projectId,o)}(r,t),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),Vt("firestore-lite","3.7.1",""),Vt("firestore-lite","3.7.1","esm2017");const z$={apiKey:"AIzaSyCYMmxD3Z2aLhQ3Zw8-POeefSQcKQWhjUo",authDomain:"lune-4f6b9.firebaseapp.com",projectId:"lune-4f6b9",storageBucket:"lune-4f6b9.appspot.com",messagingSenderId:"816520660926",appId:"1:816520660926:web:060595b47dd65787ea9bef"},cp=Mw(z$);kO(cp);const $u=uA(cp),ti=_$(cp),j$=async({email:e,password:t})=>{try{const n=await WI($u,e,t),{uid:r}=n.user;return{ok:!0,uid:r,email:e}}catch(n){return console.log(n),{ok:!1,errorMessage:n.message}}},B$=async({email:e,password:t})=>{try{const n=await GI($u,e,t),{uid:r}=n.user;return{ok:!0,uid:r,email:e}}catch(n){return console.log(n),{ok:!1,errorMessage:n.message}}},U$=async()=>await $u.signOut(),V$=e=>async t=>{t(_w());const n=await j$(e);if(t(H$(e,n.uid)),!n.ok)return t(dp());t(Nh(n))},H$=(e,t)=>async n=>{const{name:r,numberPhone:i,direccion:s}=e,o={name:r,numberPhone:i,direccion:s,rol:"Cliente",imagen:"https://res.cloudinary.com/dssccuwn8/image/upload/v1670099198/assets/user_img_d9ktvt.png"},l=Mo(ti,`users/${t}`);sS(l,o),n(kw(o))},W$=({email:e,password:t})=>async n=>{n(_w());const r=await B$({email:e,password:t});if(!r.ok)return n(Ew(r));n(Nh(r))},G$=e=>async t=>{const n=Mo(ti,`users/${e}`),r=await D$(n);try{t(kw(r.data()))}catch{}},dp=()=>async e=>{await U$(),e(Ew()),localStorage.clear()},q$=()=>{const e=Jr(),{status:t,name:n}=xr(i=>i.auth);return z(Kk,{children:[z(Yk,{children:[w(Qk,{src:Ch}),z(Xk,{children:[w(ps,{to:"/",children:"Inicio"}),w(ps,{to:"/tienda",children:"Tienda"}),w(ps,{to:"/",children:"Sobre mi"}),w(ps,{to:"/contacto",children:"Contacto"})]})]}),t==="authenticated"?z(Ym,{children:[z(Jk,{children:["Bienvenido, ",w(ps,{to:"profile",children:n})]}),w(eC,{onClick:()=>{e(dp())},children:w(Zk,{src:qk})})]}):z(Ym,{children:[w(Qm,{to:"/login",children:"Iniciar Sesion"}),w(Qm,{to:"/register",children:"Registrarse"})]})]})},K$=E.div`
  z-index: 10000;
  background-color: #f8bfb3;
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`,Y$=E.div`
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
`,Q$=()=>w(K$,{children:w(Y$,{})}),X$="/assets/bg_wave_contact.9706c431.svg",J$=E.div`
  background: no-repeat center/cover url(${X$});
  display: flex;
  min-height: 80vh;
  width: 100%;
`,Z$=E.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`,eR=E.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,tR=E.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`,nR=E.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 35%;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 30%;
  }
`,rR=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: 1rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,iR=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,sR=E.div`
  /* background-color: brown; */
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 3rem;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 2rem;
  }
`,oR=E.img`
  width: 3rem;

  @media screen and (max-width: 1366px) {
    width: 2rem;
  }
`,aR=E.p`
  font-size: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,oS="/assets/mail_icon.03a7a3d8.svg",lR=()=>z(J$,{children:[w(Z$,{children:w(eR,{src:Ch})}),z(tR,{children:[z(nR,{children:[w(rR,{}),w(iR,{children:"Contacto"})]}),z(sR,{children:[w(oR,{src:oS}),w(aR,{children:": mail.contacto@lialopez.com"})]})]})]}),uR="/assets/Logo-Face.f16490e5.png",cR="/assets/bg_wave_top.187b2671.svg",dR=E.div`
  background: no-repeat center/cover url(${cR});
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  width: 100%;
`,fR=E.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`,hR=E.img`
  width: 47rem;

  @media screen and (max-width: 1680px) {
    width: 35rem;
  }

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,pR=E.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`,mR=E.div`
  /* background-color: blueviolet; */
  align-items: flex-end;
  display: flex;
  height: 50%;
  width: 100%;

  h1 {
    margin: 0;
  }
`,gR=E.h1`
  display: flex;
  flex-direction: column;
`,sv=E.span`
  color: #1e1e1e;
  font-family: "Bowlby One SC", cursive;
  font-size: 6rem;

  @media screen and (max-width: 1366px) {
    font-size: 4.5rem;
  }
`,vR=E.div`
  /* background-color: brown; */
  height: 50%;
  width: 65%;
`,yR=E.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.1rem;
  }
`,wR=E.a`
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
`,SR=()=>z(dR,{children:[w(fR,{children:w(hR,{src:uR})}),z(pR,{children:[w(mR,{children:z(gR,{children:[w(sv,{children:"LUNE"}),w(sv,{children:"DESIGN"})]})}),z(vR,{children:[w(yR,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),w(wR,{children:"Saber m\xE1s"})]})]})]}),bR=E.div`
  background-color: #f8bfb3;
  min-height: 80vh;
  width: 100%;
`,xR=E.div`
  /* background-color: aqua; */
  align-items: flex-end;
  display: flex;
  height: 20%;
  width: 100%;
`,ER=E.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,_R=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,kR=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 11rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,CR=E.div`
  /* background-color: blueviolet; */
  height: 80%;
  width: 100%;
`;function ov(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function fp(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:ov(t[n])&&ov(e[n])&&Object.keys(t[n]).length>0&&fp(e[n],t[n])})}const aS={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Xe(){const e=typeof document<"u"?document:{};return fp(e,aS),e}const TR={document:aS,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ge(){const e=typeof window<"u"?window:{};return fp(e,TR),e}function IR(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(n){t.__proto__=n}})}class er extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),IR(this))}}function Fo(e=[]){const t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...Fo(n)):t.push(n)}),t}function lS(e,t){return Array.prototype.filter.call(e,t)}function PR(e){const t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function AR(e,t){if(typeof e!="string")return[e];const n=[],r=t.querySelectorAll(e);for(let i=0;i<r.length;i+=1)n.push(r[i]);return n}function q(e,t){const n=Ge(),r=Xe();let i=[];if(!t&&e instanceof er)return e;if(!e)return new er(i);if(typeof e=="string"){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let o="div";s.indexOf("<li")===0&&(o="ul"),s.indexOf("<tr")===0&&(o="tbody"),(s.indexOf("<td")===0||s.indexOf("<th")===0)&&(o="tr"),s.indexOf("<tbody")===0&&(o="table"),s.indexOf("<option")===0&&(o="select");const l=r.createElement(o);l.innerHTML=s;for(let a=0;a<l.childNodes.length;a+=1)i.push(l.childNodes[a])}else i=AR(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)i.push(e);else if(Array.isArray(e)){if(e instanceof er)return e;i=e}return new er(PR(i))}q.fn=er.prototype;function OR(...e){const t=Fo(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...t)}),this}function $R(...e){const t=Fo(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...t)}),this}function RR(...e){const t=Fo(e.map(n=>n.split(" ")));this.forEach(n=>{t.forEach(r=>{n.classList.toggle(r)})})}function NR(...e){const t=Fo(e.map(n=>n.split(" ")));return lS(this,n=>t.filter(r=>n.classList.contains(r)).length>0).length>0}function LR(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(const r in e)this[n][r]=e[r],this[n].setAttribute(r,e[r]);return this}function DR(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function MR(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function FR(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function zR(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);function s(u){const c=u.target;if(!c)return;const f=u.target.dom7EventData||[];if(f.indexOf(u)<0&&f.unshift(u),q(c).is(n))r.apply(c,f);else{const d=q(c).parents();for(let g=0;g<d.length;g+=1)q(d[g]).is(n)&&r.apply(d[g],f)}}function o(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),r.apply(this,c)}const l=t.split(" ");let a;for(let u=0;u<this.length;u+=1){const c=this[u];if(n)for(a=0;a<l.length;a+=1){const f=l[a];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[f]||(c.dom7LiveListeners[f]=[]),c.dom7LiveListeners[f].push({listener:r,proxyListener:s}),c.addEventListener(f,s,i)}else for(a=0;a<l.length;a+=1){const f=l[a];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[f]||(c.dom7Listeners[f]=[]),c.dom7Listeners[f].push({listener:r,proxyListener:o}),c.addEventListener(f,o,i)}}return this}function jR(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);const s=t.split(" ");for(let o=0;o<s.length;o+=1){const l=s[o];for(let a=0;a<this.length;a+=1){const u=this[a];let c;if(!n&&u.dom7Listeners?c=u.dom7Listeners[l]:n&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[l]),c&&c.length)for(let f=c.length-1;f>=0;f-=1){const d=c[f];r&&d.listener===r||r&&d.listener&&d.listener.dom7proxy&&d.listener.dom7proxy===r?(u.removeEventListener(l,d.proxyListener,i),c.splice(f,1)):r||(u.removeEventListener(l,d.proxyListener,i),c.splice(f,1))}}}return this}function BR(...e){const t=Ge(),n=e[0].split(" "),r=e[1];for(let i=0;i<n.length;i+=1){const s=n[i];for(let o=0;o<this.length;o+=1){const l=this[o];if(t.CustomEvent){const a=new t.CustomEvent(s,{detail:r,bubbles:!0,cancelable:!0});l.dom7EventData=e.filter((u,c)=>c>0),l.dispatchEvent(a),l.dom7EventData=[],delete l.dom7EventData}}}return this}function UR(e){const t=this;function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function VR(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function HR(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function WR(){if(this.length>0){const e=Ge(),t=Xe(),n=this[0],r=n.getBoundingClientRect(),i=t.body,s=n.clientTop||i.clientTop||0,o=n.clientLeft||i.clientLeft||0,l=n===e?e.scrollY:n.scrollTop,a=n===e?e.scrollX:n.scrollLeft;return{top:r.top+l-s,left:r.left+a-o}}return null}function GR(){const e=Ge();return this[0]?e.getComputedStyle(this[0],null):{}}function qR(e,t){const n=Ge();let r;if(arguments.length===1)if(typeof e=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(r=0;r<this.length;r+=1)for(const i in e)this[r].style[i]=e[i];return this}if(arguments.length===2&&typeof e=="string"){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function KR(e){return e?(this.forEach((t,n)=>{e.apply(t,[t,n])}),this):this}function YR(e){const t=lS(this,e);return q(t)}function QR(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function XR(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function JR(e){const t=Ge(),n=Xe(),r=this[0];let i,s;if(!r||typeof e>"u")return!1;if(typeof e=="string"){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);for(i=q(e),s=0;s<i.length;s+=1)if(i[s]===r)return!0;return!1}if(e===n)return r===n;if(e===t)return r===t;if(e.nodeType||e instanceof er){for(i=e.nodeType?[e]:e,s=0;s<i.length;s+=1)if(i[s]===r)return!0;return!1}return!1}function ZR(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function eN(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return q([]);if(e<0){const n=t+e;return n<0?q([]):q([this[n]])}return q([this[e]])}function tN(...e){let t;const n=Xe();for(let r=0;r<e.length;r+=1){t=e[r];for(let i=0;i<this.length;i+=1)if(typeof t=="string"){const s=n.createElement("div");for(s.innerHTML=t;s.firstChild;)this[i].appendChild(s.firstChild)}else if(t instanceof er)for(let s=0;s<t.length;s+=1)this[i].appendChild(t[s]);else this[i].appendChild(t)}return this}function nN(e){const t=Xe();let n,r;for(n=0;n<this.length;n+=1)if(typeof e=="string"){const i=t.createElement("div");for(i.innerHTML=e,r=i.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(i.childNodes[r],this[n].childNodes[0])}else if(e instanceof er)for(r=0;r<e.length;r+=1)this[n].insertBefore(e[r],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function rN(e){return this.length>0?e?this[0].nextElementSibling&&q(this[0].nextElementSibling).is(e)?q([this[0].nextElementSibling]):q([]):this[0].nextElementSibling?q([this[0].nextElementSibling]):q([]):q([])}function iN(e){const t=[];let n=this[0];if(!n)return q([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?q(r).is(e)&&t.push(r):t.push(r),n=r}return q(t)}function sN(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&q(t.previousElementSibling).is(e)?q([t.previousElementSibling]):q([]):t.previousElementSibling?q([t.previousElementSibling]):q([])}return q([])}function oN(e){const t=[];let n=this[0];if(!n)return q([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?q(r).is(e)&&t.push(r):t.push(r),n=r}return q(t)}function aN(e){const t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?q(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return q(t)}function lN(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?q(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return q(t)}function uN(e){let t=this;return typeof e>"u"?q([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function cN(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let i=0;i<r.length;i+=1)t.push(r[i])}return q(t)}function dN(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let i=0;i<r.length;i+=1)(!e||q(r[i]).is(e))&&t.push(r[i])}return q(t)}function fN(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const av={addClass:OR,removeClass:$R,hasClass:NR,toggleClass:RR,attr:LR,removeAttr:DR,transform:MR,transition:FR,on:zR,off:jR,trigger:BR,transitionEnd:UR,outerWidth:VR,outerHeight:HR,styles:GR,offset:WR,css:qR,each:KR,html:QR,text:XR,is:JR,index:ZR,eq:eN,append:tN,prepend:nN,next:rN,nextAll:iN,prev:sN,prevAll:oN,parent:aN,parents:lN,closest:uN,find:cN,children:dN,filter:YR,remove:fN};Object.keys(av).forEach(e=>{Object.defineProperty(q.fn,e,{value:av[e],writable:!0})});function hN(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Cl(e,t=0){return setTimeout(e,t)}function yo(){return Date.now()}function pN(e){const t=Ge();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function mN(e,t="x"){const n=Ge();let r,i,s;const o=pN(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function la(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function gN(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function _t(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const i=e[r];if(i!=null&&!gN(i)){const s=Object.keys(Object(i)).filter(o=>n.indexOf(o)<0);for(let o=0,l=s.length;o<l;o+=1){const a=s[o],u=Object.getOwnPropertyDescriptor(i,a);u!==void 0&&u.enumerable&&(la(t[a])&&la(i[a])?i[a].__swiper__?t[a]=i[a]:_t(t[a],i[a]):!la(t[a])&&la(i[a])?(t[a]={},i[a].__swiper__?t[a]=i[a]:_t(t[a],i[a])):t[a]=i[a])}}}return t}function ua(e,t,n){e.style.setProperty(t,n)}function uS({swiper:e,targetPosition:t,side:n}){const r=Ge(),i=-e.translate;let s=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const a=t>i?"next":"prev",u=(f,d)=>a==="next"&&f>=d||a==="prev"&&f<=d,c=()=>{o=new Date().getTime(),s===null&&(s=o);const f=Math.max(Math.min((o-s)/l,1),0),d=.5-Math.cos(f*Math.PI)/2;let g=i+d*(t-i);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}let Pc;function vN(){const e=Ge(),t=Xe();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let r=!1;try{const i=Object.defineProperty({},"passive",{get(){r=!0}});e.addEventListener("testPassiveListener",null,i)}catch{}return r}(),gestures:function(){return"ongesturestart"in e}()}}function cS(){return Pc||(Pc=vN()),Pc}let Ac;function yN({userAgent:e}={}){const t=cS(),n=Ge(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,a=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d=r==="Win32";let g=r==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&v.indexOf(`${o}x${l}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),a&&!d&&(s.os="android",s.android=!0),(u||f||c)&&(s.os="ios",s.ios=!0),s}function wN(e={}){return Ac||(Ac=yN(e)),Ac}let Oc;function SN(){const e=Ge();function t(){const n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function bN(){return Oc||(Oc=SN()),Oc}function xN({swiper:e,on:t,emit:n}){const r=Ge();let i=null,s=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{s=r.requestAnimationFrame(()=>{const{width:f,height:d}=e;let g=f,v=d;c.forEach(({contentBoxSize:m,contentRect:S,target:h})=>{h&&h!==e.el||(g=S?S.width:(m[0]||m).inlineSize,v=S?S.height:(m[0]||m).blockSize)}),(g!==f||v!==d)&&o()})}),i.observe(e.el))},a=()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",u)}),t("destroy",()=>{a(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",u)})}function EN({swiper:e,extendParams:t,on:n,emit:r}){const i=[],s=Ge(),o=(u,c={})=>{const f=s.MutationObserver||s.WebkitMutationObserver,d=new f(g=>{if(g.length===1){r("observerUpdate",g[0]);return}const v=function(){r("observerUpdate",g[0])};s.requestAnimationFrame?s.requestAnimationFrame(v):s.setTimeout(v,0)});d.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:typeof c.childList>"u"?!0:c.childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(d)},l=()=>{if(!!e.params.observer){if(e.params.observeParents){const u=e.$el.parents();for(let c=0;c<u.length;c+=1)o(u[c])}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1})}},a=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",a)}const _N={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...s){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(i,[o,...r])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(i,r)})}),t}};function kN(){const e=this;let t,n;const r=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r[0].clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function CN(){const e=this;function t($){return e.isHorizontal()?$:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[$]}function n($,A){return parseFloat($.getPropertyValue(t(A))||0)}const r=e.params,{$wrapperEl:i,size:s,rtlTranslate:o,wrongRTL:l}=e,a=e.virtual&&r.virtual.enabled,u=a?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),f=a?e.virtual.slides.length:c.length;let d=[];const g=[],v=[];let m=r.slidesOffsetBefore;typeof m=="function"&&(m=r.slidesOffsetBefore.call(e));let S=r.slidesOffsetAfter;typeof S=="function"&&(S=r.slidesOffsetAfter.call(e));const h=e.snapGrid.length,p=e.slidesGrid.length;let y=r.spaceBetween,x=-m,_=0,O=0;if(typeof s>"u")return;typeof y=="string"&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*s),e.virtualSize=-y,o?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(ua(e.wrapperEl,"--swiper-centered-offset-before",""),ua(e.wrapperEl,"--swiper-centered-offset-after",""));const N=r.grid&&r.grid.rows>1&&e.grid;N&&e.grid.initSlides(f);let P;const Y=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter($=>typeof r.breakpoints[$].slidesPerView<"u").length>0;for(let $=0;$<f;$+=1){P=0;const A=c.eq($);if(N&&e.grid.updateSlide($,A,f,t),A.css("display")!=="none"){if(r.slidesPerView==="auto"){Y&&(c[$].style[t("width")]="");const D=getComputedStyle(A[0]),X=A[0].style.transform,re=A[0].style.webkitTransform;if(X&&(A[0].style.transform="none"),re&&(A[0].style.webkitTransform="none"),r.roundLengths)P=e.isHorizontal()?A.outerWidth(!0):A.outerHeight(!0);else{const oe=n(D,"width"),ye=n(D,"padding-left"),be=n(D,"padding-right"),F=n(D,"margin-left"),H=n(D,"margin-right"),J=D.getPropertyValue("box-sizing");if(J&&J==="border-box")P=oe+F+H;else{const{clientWidth:ue,offsetWidth:j}=A[0];P=oe+ye+be+F+H+(j-ue)}}X&&(A[0].style.transform=X),re&&(A[0].style.webkitTransform=re),r.roundLengths&&(P=Math.floor(P))}else P=(s-(r.slidesPerView-1)*y)/r.slidesPerView,r.roundLengths&&(P=Math.floor(P)),c[$]&&(c[$].style[t("width")]=`${P}px`);c[$]&&(c[$].swiperSlideSize=P),v.push(P),r.centeredSlides?(x=x+P/2+_/2+y,_===0&&$!==0&&(x=x-s/2-y),$===0&&(x=x-s/2-y),Math.abs(x)<1/1e3&&(x=0),r.roundLengths&&(x=Math.floor(x)),O%r.slidesPerGroup===0&&d.push(x),g.push(x)):(r.roundLengths&&(x=Math.floor(x)),(O-Math.min(e.params.slidesPerGroupSkip,O))%e.params.slidesPerGroup===0&&d.push(x),g.push(x),x=x+P+y),e.virtualSize+=P+y,_=P,O+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+S,o&&l&&(r.effect==="slide"||r.effect==="coverflow")&&i.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),N&&e.grid.updateWrapperSize(P,d,t),!r.centeredSlides){const $=[];for(let A=0;A<d.length;A+=1){let D=d[A];r.roundLengths&&(D=Math.floor(D)),d[A]<=e.virtualSize-s&&$.push(D)}d=$,Math.floor(e.virtualSize-s)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-s)}if(d.length===0&&(d=[0]),r.spaceBetween!==0){const $=e.isHorizontal()&&o?"marginLeft":t("marginRight");c.filter((A,D)=>r.cssMode?D!==c.length-1:!0).css({[$]:`${y}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let $=0;v.forEach(D=>{$+=D+(r.spaceBetween?r.spaceBetween:0)}),$-=r.spaceBetween;const A=$-s;d=d.map(D=>D<0?-m:D>A?A+S:D)}if(r.centerInsufficientSlides){let $=0;if(v.forEach(A=>{$+=A+(r.spaceBetween?r.spaceBetween:0)}),$-=r.spaceBetween,$<s){const A=(s-$)/2;d.forEach((D,X)=>{d[X]=D-A}),g.forEach((D,X)=>{g[X]=D+A})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:g,slidesSizesGrid:v}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){ua(e.wrapperEl,"--swiper-centered-offset-before",`${-d[0]}px`),ua(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const $=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(D=>D+$),e.slidesGrid=e.slidesGrid.map(D=>D+A)}if(f!==u&&e.emit("slidesLengthChange"),d.length!==h&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==p&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!a&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const $=`${r.containerModifierClass}backface-hidden`,A=e.$el.hasClass($);f<=r.maxBackfaceHiddenSlides?A||e.$el.addClass($):A&&e.$el.removeClass($)}}function TN(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>r?t.slides.filter(a=>parseInt(a.getAttribute("data-swiper-slide-index"),10)===l)[0]:t.slides.eq(l)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||q([])).each(l=>{n.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!r)break;n.push(o(l))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const l=n[s].offsetHeight;i=l>i?l:i}(i||i===0)&&t.$wrapperEl.css("height",`${i}px`)}function IN(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function PN(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let l=0;l<r.length;l+=1){const a=r[l];let u=a.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-u)/(a.swiperSlideSize+n.spaceBetween),f=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-u)/(a.swiperSlideSize+n.spaceBetween),d=-(o-u),g=d+t.slidesSizesGrid[l];(d>=0&&d<t.size-1||g>1&&g<=t.size||d<=0&&g>=t.size)&&(t.visibleSlides.push(a),t.visibleSlidesIndexes.push(l),r.eq(l).addClass(n.slideVisibleClass)),a.progress=i?-c:c,a.originalProgress=i?-f:f}t.visibleSlides=q(t.visibleSlides)}function AN(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o}=t;const l=s,a=o;r===0?(i=0,s=!0,o=!0):(i=(e-t.minTranslate())/r,s=i<=0,o=i>=1),Object.assign(t,{progress:i,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!a&&t.emit("reachEnd toEdge"),(l&&!s||a&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function ON(){const e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:i,realIndex:s}=e,o=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let l;o?l=e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):l=t.eq(i),l.addClass(n.slideActiveClass),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(n.slideDuplicateActiveClass));let a=l.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&a.length===0&&(a=t.eq(0),a.addClass(n.slideNextClass));let u=l.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&u.length===0&&(u=t.eq(-1),u.addClass(n.slidePrevClass)),n.loop&&(a.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),u.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}function $N(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:i,params:s,activeIndex:o,realIndex:l,snapIndex:a}=t;let u=e,c;if(typeof u>"u"){for(let d=0;d<r.length;d+=1)typeof r[d+1]<"u"?n>=r[d]&&n<r[d+1]-(r[d+1]-r[d])/2?u=d:n>=r[d]&&n<r[d+1]&&(u=d+1):n>=r[d]&&(u=d);s.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0)}if(i.indexOf(n)>=0)c=i.indexOf(n);else{const d=Math.min(s.slidesPerGroupSkip,u);c=d+Math.floor((u-d)/s.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),u===o){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}const f=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:f,previousIndex:o,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==f&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function RN(e){const t=this,n=t.params,r=q(e).closest(`.${n.slideClass}`)[0];let i=!1,s;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){i=!0,s=o;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(q(r).attr("data-swiper-slide-index"),10):t.clickedIndex=s;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const NN={updateSize:kN,updateSlides:CN,updateAutoHeight:TN,updateSlidesOffset:IN,updateSlidesProgress:PN,updateProgress:AN,updateSlidesClasses:ON,updateActiveIndex:$N,updateClickedSlide:RN};function LN(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,$wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=mN(s[0],e);return r&&(o=-o),o||0}function DN(e,t){const n=this,{rtlTranslate:r,params:i,$wrapperEl:s,wrapperEl:o,progress:l}=n;let a=0,u=0;const c=0;n.isHorizontal()?a=r?-e:e:u=e,i.roundLengths&&(a=Math.floor(a),u=Math.floor(u)),i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-u:i.virtualTranslate||s.transform(`translate3d(${a}px, ${u}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:u;let f;const d=n.maxTranslate()-n.minTranslate();d===0?f=0:f=(e-n.minTranslate())/d,f!==l&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function MN(){return-this.snapGrid[0]}function FN(){return-this.snapGrid[this.snapGrid.length-1]}function zN(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const a=s.minTranslate(),u=s.maxTranslate();let c;if(r&&e>a?c=a:r&&e<u?c=u:c=e,s.updateProgress(c),o.cssMode){const f=s.isHorizontal();if(t===0)l[f?"scrollLeft":"scrollTop"]=-c;else{if(!s.support.smoothScroll)return uS({swiper:s,targetPosition:-c,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(c),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(d){!s||s.destroyed||d.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd))),!0}const jN={getTranslate:LN,setTranslate:DN,minTranslate:MN,maxTranslate:FN,translateTo:zN};function BN(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}function dS({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(i>s?o="next":i<s?o="prev":o="reset"),e.emit(`transition${r}`),t&&i!==s){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function UN(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),dS({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function VN(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),dS({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const HN={setTransition:BN,transitionStart:UN,transitionEnd:VN};function WN(e=0,t=this.params.speed,n=!0,r,i){if(typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const y=parseInt(e,10);if(!isFinite(y))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=y}const s=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:u,previousIndex:c,activeIndex:f,rtlTranslate:d,wrapperEl:g,enabled:v}=s;if(s.animating&&l.preventInteractionOnTransition||!v&&!r&&!i)return!1;const m=Math.min(s.params.slidesPerGroupSkip,o);let S=m+Math.floor((o-m)/s.params.slidesPerGroup);S>=a.length&&(S=a.length-1);const h=-a[S];if(l.normalizeSlideIndex)for(let y=0;y<u.length;y+=1){const x=-Math.floor(h*100),_=Math.floor(u[y]*100),O=Math.floor(u[y+1]*100);typeof u[y+1]<"u"?x>=_&&x<O-(O-_)/2?o=y:x>=_&&x<O&&(o=y+1):x>=_&&(o=y)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&h<s.translate&&h<s.minTranslate()||!s.allowSlidePrev&&h>s.translate&&h>s.maxTranslate()&&(f||0)!==o))return!1;o!==(c||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(h);let p;if(o>f?p="next":o<f?p="prev":p="reset",d&&-h===s.translate||!d&&h===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(h),p!=="reset"&&(s.transitionStart(n,p),s.transitionEnd(n,p)),!1;if(l.cssMode){const y=s.isHorizontal(),x=d?h:-h;if(t===0){const _=s.virtual&&s.params.virtual.enabled;_&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),g[y?"scrollLeft":"scrollTop"]=x,_&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1})}else{if(!s.support.smoothScroll)return uS({swiper:s,targetPosition:x,side:y?"left":"top"}),!0;g.scrollTo({[y?"left":"top"]:x,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(h),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,p),t===0?s.transitionEnd(n,p):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(x){!s||s.destroyed||x.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,p))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0}function GN(e=0,t=this.params.speed,n=!0,r){if(typeof e=="string"){const o=parseInt(e,10);if(!isFinite(o))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=o}const i=this;let s=e;return i.params.loop&&(s+=i.loopedSlides),i.slideTo(s,t,n,r)}function qN(e=this.params.speed,t=!0,n){const r=this,{animating:i,enabled:s,params:o}=r;if(!s)return r;let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<o.slidesPerGroupSkip?1:l;if(o.loop){if(i&&o.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function KN(e=this.params.speed,t=!0,n){const r=this,{params:i,animating:s,snapGrid:o,slidesGrid:l,rtlTranslate:a,enabled:u}=r;if(!u)return r;if(i.loop){if(s&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}const c=a?r.translate:-r.translate;function f(S){return S<0?-Math.floor(Math.abs(S)):Math.floor(S)}const d=f(c),g=o.map(S=>f(S));let v=o[g.indexOf(d)-1];if(typeof v>"u"&&i.cssMode){let S;o.forEach((h,p)=>{d>=h&&(S=p)}),typeof S<"u"&&(v=o[S>0?S-1:S])}let m=0;if(typeof v<"u"&&(m=l.indexOf(v),m<0&&(m=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&r.isBeginning){const S=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(S,e,t,n)}return r.slideTo(m,e,t,n)}function YN(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function QN(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const u=i.snapGrid[l],c=i.snapGrid[l+1];a-u>(c-u)*r&&(s+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],c=i.snapGrid[l];a-u<=(c-u)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function XN(){const e=this,{params:t,$wrapperEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;if(t.loop){if(e.animating)return;s=parseInt(q(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Cl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Cl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}const JN={slideTo:WN,slideToLoop:GN,slideNext:qN,slidePrev:KN,slideReset:YN,slideToClosest:QN,slideToClickedSlide:XN};function ZN(){const e=this,t=Xe(),{params:n,$wrapperEl:r}=e,i=r.children().length>0?q(r.children()[0].parentNode):r;i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let s=i.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const a=n.slidesPerGroup-s.length%n.slidesPerGroup;if(a!==n.slidesPerGroup){for(let u=0;u<a;u+=1){const c=q(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);i.append(c)}s=i.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>s.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=s.length);const o=[],l=[];s.each((a,u)=>{q(a).attr("data-swiper-slide-index",u)});for(let a=0;a<e.loopedSlides;a+=1){const u=a-Math.floor(a/s.length)*s.length;l.push(s.eq(u)[0]),o.unshift(s.eq(s.length-u-1)[0])}for(let a=0;a<l.length;a+=1)i.append(q(l[a].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let a=o.length-1;a>=0;a-=1)i.prepend(q(o[a].cloneNode(!0)).addClass(n.slideDuplicateClass))}function eL(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:s,snapGrid:o,rtlTranslate:l}=e;let a;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-o[t]-e.getTranslate();t<r?(a=n.length-r*3+t,a+=r,e.slideTo(a,0,!1,!0)&&c!==0&&e.setTranslate((l?-e.translate:e.translate)-c)):t>=n.length-r&&(a=-n.length+t+r,a+=r,e.slideTo(a,0,!1,!0)&&c!==0&&e.setTranslate((l?-e.translate:e.translate)-c)),e.allowSlidePrev=i,e.allowSlideNext=s,e.emit("loopFix")}function tL(){const e=this,{$wrapperEl:t,params:n,slides:r}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}const nL={loopCreate:ZN,loopFix:eL,loopDestroy:tL};function rL(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function iL(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const sL={setGrabCursor:rL,unsetGrabCursor:iL};function oL(e,t=this){function n(r){if(!r||r===Xe()||r===Ge())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function aL(e){const t=this,n=Xe(),r=Ge(),i=t.touchEventsData,{params:s,touches:o,enabled:l}=t;if(!l||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=e;a.originalEvent&&(a=a.originalEvent);let u=q(a.target);if(s.touchEventsTarget==="wrapper"&&!u.closest(t.wrapperEl).length||(i.isTouchEvent=a.type==="touchstart",!i.isTouchEvent&&"which"in a&&a.which===3)||!i.isTouchEvent&&"button"in a&&a.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",f=e.composedPath?e.composedPath():e.path;c&&a.target&&a.target.shadowRoot&&f&&(u=q(f[0]));const d=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,g=!!(a.target&&a.target.shadowRoot);if(s.noSwiping&&(g?oL(d,u[0]):u.closest(d)[0])){t.allowClick=!0;return}if(s.swipeHandler&&!u.closest(s.swipeHandler)[0])return;o.currentX=a.type==="touchstart"?a.targetTouches[0].pageX:a.pageX,o.currentY=a.type==="touchstart"?a.targetTouches[0].pageY:a.pageY;const v=o.currentX,m=o.currentY,S=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,h=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(S&&(v<=h||v>=r.innerWidth-h))if(S==="prevent")e.preventDefault();else return;if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=m,i.touchStartTime=yo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1),a.type!=="touchstart"){let p=!0;u.is(i.focusableElements)&&(p=!1,u[0].nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&q(n.activeElement).is(i.focusableElements)&&n.activeElement!==u[0]&&n.activeElement.blur();const y=p&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||y)&&!u[0].isContentEditable&&a.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function lL(e){const t=Xe(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:l}=n;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}if(r.isTouchEvent&&a.type!=="touchmove")return;const u=a.type==="touchmove"&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c=a.type==="touchmove"?u.pageX:a.pageX,f=a.type==="touchmove"?u.pageY:a.pageY;if(a.preventedByNestedSwiper){s.startX=c,s.startY=f;return}if(!n.allowTouchMove){q(a.target).is(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:c,startY:f,currentX:c,currentY:f}),r.touchStartTime=yo());return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<s.startY&&n.translate<=n.maxTranslate()||f>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<s.startX&&n.translate<=n.maxTranslate()||c>s.startX&&n.translate>=n.minTranslate())return}if(r.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&q(a.target).is(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;s.currentX=c,s.currentY=f;const d=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(d**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let h;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:d*d+g*g>=25&&(h=Math.atan2(Math.abs(g),Math.abs(d))*180/Math.PI,r.isScrolling=n.isHorizontal()?h>i.touchAngle:90-h>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation(),r.isMoved||(i.loop&&!i.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)),n.emit("sliderMove",a),r.isMoved=!0;let v=n.isHorizontal()?d:g;s.diff=v,v*=i.touchRatio,o&&(v=-v),n.swipeDirection=v>0?"prev":"next",r.currentTranslate=v+r.startTranslate;let m=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),v>0&&r.currentTranslate>n.minTranslate()?(m=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**S)):v<0&&r.currentTranslate<n.maxTranslate()&&(m=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**S)),m&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function uL(e){const t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:s,slidesGrid:o,enabled:l}=t;if(!l)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",a),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=yo(),c=u-n.touchStartTime;if(t.allowClick){const p=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(p&&p[0]||a.target),t.emit("tap click",a),c<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(n.lastClickTime=yo(),Cl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(r.followFinger?f=s?t.translate:-t.translate:f=-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let d=0,g=t.slidesSizesGrid[0];for(let p=0;p<o.length;p+=p<r.slidesPerGroupSkip?1:r.slidesPerGroup){const y=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof o[p+y]<"u"?f>=o[p]&&f<o[p+y]&&(d=p,g=o[p+y]-o[p]):f>=o[p]&&(d=p,g=o[o.length-1]-o[o.length-2])}let v=null,m=null;r.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(v=0));const S=(f-o[d])/g,h=d<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(c>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(S>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?v:d+h):t.slideTo(d)),t.swipeDirection==="prev"&&(S>1-r.longSwipesRatio?t.slideTo(d+h):m!==null&&S<0&&Math.abs(S)>r.longSwipesRatio?t.slideTo(m):t.slideTo(d))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(d+h):t.slideTo(d):(t.swipeDirection==="next"&&t.slideTo(v!==null?v:d+h),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:d))}}function lv(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function cL(e){const t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function dL(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let uv=!1;function fL(){}const fS=(e,t)=>{const n=Xe(),{params:r,touchEvents:i,el:s,wrapperEl:o,device:l,support:a}=e,u=!!r.nested,c=t==="on"?"addEventListener":"removeEventListener",f=t;if(!a.touch)s[c](i.start,e.onTouchStart,!1),n[c](i.move,e.onTouchMove,u),n[c](i.end,e.onTouchEnd,!1);else{const d=i.start==="touchstart"&&a.passiveListener&&r.passiveListeners?{passive:!0,capture:!1}:!1;s[c](i.start,e.onTouchStart,d),s[c](i.move,e.onTouchMove,a.passiveListener?{passive:!1,capture:u}:u),s[c](i.end,e.onTouchEnd,d),i.cancel&&s[c](i.cancel,e.onTouchEnd,d)}(r.preventClicks||r.preventClicksPropagation)&&s[c]("click",e.onClick,!0),r.cssMode&&o[c]("scroll",e.onScroll),r.updateOnWindowResize?e[f](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",lv,!0):e[f]("observerUpdate",lv,!0)};function hL(){const e=this,t=Xe(),{params:n,support:r}=e;e.onTouchStart=aL.bind(e),e.onTouchMove=lL.bind(e),e.onTouchEnd=uL.bind(e),n.cssMode&&(e.onScroll=dL.bind(e)),e.onClick=cL.bind(e),r.touch&&!uv&&(t.addEventListener("touchstart",fL),uv=!0),fS(e,"on")}function pL(){fS(this,"off")}const mL={attachEvents:hL,detachEvents:pL},cv=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function gL(){const e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:i,$el:s}=e,o=i.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const l=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const u=(l in o?o[l]:void 0)||e.originalParams,c=cv(e,i),f=cv(e,u),d=i.enabled;c&&!f?(s.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(s.addClass(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&s.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(S=>{const h=i[S]&&i[S].enabled,p=u[S]&&u[S].enabled;h&&!p&&e[S].disable(),!h&&p&&e[S].enable()});const g=u.direction&&u.direction!==i.direction,v=i.loop&&(u.slidesPerView!==i.slidesPerView||g);g&&n&&e.changeDirection(),_t(e.params,u);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!m?e.disable():!d&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",u),v&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}function vL(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=Ge(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:s*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:u}=o[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=a):u<=n.clientWidth&&(r=a)}return r||"max"}const yL={setBreakpoint:gL,getBreakpoint:vL};function wL(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function SL(){const e=this,{classNames:t,params:n,rtl:r,$el:i,device:s,support:o}=e,l=wL(["initialized",n.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()}function bL(){const e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}const xL={addClasses:SL,removeClasses:bL};function EL(e,t,n,r,i,s){const o=Ge();let l;function a(){s&&s()}!q(e).parent("picture")[0]&&(!e.complete||!i)&&t?(l=new o.Image,l.onload=a,l.onerror=a,r&&(l.sizes=r),n&&(l.srcset=n),t&&(l.src=t)):a()}function _L(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let n=0;n<e.imagesToLoad.length;n+=1){const r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}const kL={loadImage:EL,preloadImages:_L};function CL(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const TL={checkOverflow:CL},dv={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function IL(e,t){return function(r={}){const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){_t(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in s)){_t(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),_t(t,r)}}const $c={eventsEmitter:_N,update:NN,translate:jN,transition:HN,slide:JN,loop:nL,grabCursor:sL,events:mL,breakpoints:yL,checkOverflow:TL,classes:xL,images:kL},Rc={};class lt{constructor(...t){let n,r;if(t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=_t({},r),n&&!r.el&&(r.el=n),r.el&&q(r.el).length>1){const l=[];return q(r.el).each(a=>{const u=_t({},r,{el:a});l.push(new lt(u))}),l}const i=this;i.__swiper__=!0,i.support=cS(),i.device=wN({userAgent:r.userAgent}),i.browser=bN(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&i.modules.push(...r.modules);const s={};i.modules.forEach(l=>{l({swiper:i,extendParams:IL(r,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const o=_t({},dv,s);return i.params=_t({},o,Rc,r),i.originalParams=_t({},i.params),i.passedParams=_t({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach(l=>{i.on(l,i.params.on[l])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),i.$=q,Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:q(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEvents:function(){const a=["touchstart","touchmove","touchend","touchcancel"],u=["pointerdown","pointermove","pointerup"];return i.touchEventsTouch={start:a[0],move:a[1],end:a[2],cancel:a[3]},i.touchEventsDesktop={start:u[0],move:u[1],end:u[2]},i.support.touch||!i.params.simulateTouch?i.touchEventsTouch:i.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:yo(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.each(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:u}=r;let c=1;if(i.centeredSlides){let f=s[u].swiperSlideSize,d;for(let g=u+1;g<s.length;g+=1)s[g]&&!d&&(f+=s[g].swiperSlideSize,c+=1,f>a&&(d=!0));for(let g=u-1;g>=0;g-=1)s[g]&&!d&&(f+=s[g].swiperSlideSize,c+=1,f>a&&(d=!0))}else if(t==="current")for(let f=u+1;f<s.length;f+=1)(n?o[f]+l[f]-o[u]<a:o[f]-o[u]<a)&&(c+=1);else for(let f=u-1;f>=0;f-=1)o[u]-o[f]<a&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let s;t.params.freeMode&&t.params.freeMode.enabled?(i(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?s=t.slideTo(t.slides.length-1,0,!1,!0):s=t.slideTo(t.activeIndex,0,!1,!0),s||i()),r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.each(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;const r=q(t||n.params.el);if(t=r[0],!t)return!1;t.swiper=n;const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const l=q(t.shadowRoot.querySelector(i()));return l.children=a=>r.children(a),l}return r.children?r.children(i()):q(r).children(i())})();if(o.length===0&&n.params.createElements){const a=Xe().createElement("div");o=q(a),a.className=n.params.wrapperClass,r.append(a),r.children(`.${n.params.slideClass}`).each(u=>{o.append(u)})}return Object.assign(n,{$el:r,el:t,$wrapperEl:o,wrapperEl:o[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:o.css("display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t=!0,n=!0){const r=this,{params:i,$el:s,$wrapperEl:o,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s.removeAttr("style"),o.removeAttr("style"),l&&l.length&&l.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.$el[0].swiper=null,hN(r)),r.destroyed=!0),null}static extendDefaults(t){_t(Rc,t)}static get extendedDefaults(){return Rc}static get defaults(){return dv}static installModule(t){lt.prototype.__modules__||(lt.prototype.__modules__=[]);const n=lt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>lt.installModule(n)),lt):(lt.installModule(t),lt)}}Object.keys($c).forEach(e=>{Object.keys($c[e]).forEach(t=>{lt.prototype[t]=$c[e][t]})});lt.use([xN,EN]);function hS(e,t,n,r){const i=Xe();return e.params.createElements&&Object.keys(r).forEach(s=>{if(!n[s]&&n.auto===!0){let o=e.$el.children(`.${r[s]}`)[0];o||(o=i.createElement("div"),o.className=r[s],e.$el.append(o)),n[s]=o,t[s]=o}}),n}function PL({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function i(g){let v;return g&&(v=q(g),e.params.uniqueNavElements&&typeof g=="string"&&v.length>1&&e.$el.find(g).length===1&&(v=e.$el.find(g))),v}function s(g,v){const m=e.params.navigation;g&&g.length>0&&(g[v?"addClass":"removeClass"](m.disabledClass),g[0]&&g[0].tagName==="BUTTON"&&(g[0].disabled=v),e.params.watchOverflow&&e.enabled&&g[e.isLocked?"addClass":"removeClass"](m.lockClass))}function o(){if(e.params.loop)return;const{$nextEl:g,$prevEl:v}=e.navigation;s(v,e.isBeginning&&!e.params.rewind),s(g,e.isEnd&&!e.params.rewind)}function l(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function a(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const g=e.params.navigation;if(e.params.navigation=hS(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;const v=i(g.nextEl),m=i(g.prevEl);v&&v.length>0&&v.on("click",a),m&&m.length>0&&m.on("click",l),Object.assign(e.navigation,{$nextEl:v,nextEl:v&&v[0],$prevEl:m,prevEl:m&&m[0]}),e.enabled||(v&&v.addClass(g.lockClass),m&&m.addClass(g.lockClass))}function c(){const{$nextEl:g,$prevEl:v}=e.navigation;g&&g.length&&(g.off("click",a),g.removeClass(e.params.navigation.disabledClass)),v&&v.length&&(v.off("click",l),v.removeClass(e.params.navigation.disabledClass))}n("init",()=>{e.params.navigation.enabled===!1?d():(u(),o())}),n("toEdge fromEdge lock unlock",()=>{o()}),n("destroy",()=>{c()}),n("enable disable",()=>{const{$nextEl:g,$prevEl:v}=e.navigation;g&&g[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),v&&v[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),n("click",(g,v)=>{const{$nextEl:m,$prevEl:S}=e.navigation,h=v.target;if(e.params.navigation.hideOnClick&&!q(h).is(S)&&!q(h).is(m)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===h||e.pagination.el.contains(h)))return;let p;m?p=m.hasClass(e.params.navigation.hiddenClass):S&&(p=S.hasClass(e.params.navigation.hiddenClass)),r(p===!0?"navigationShow":"navigationHide"),m&&m.toggleClass(e.params.navigation.hiddenClass),S&&S.toggleClass(e.params.navigation.hiddenClass)}});const f=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),u(),o()},d=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),c()};Object.assign(e.navigation,{enable:f,disable:d,update:o,init:u,destroy:c})}function si(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function AL({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let s,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function a(m,S){const{bulletActiveClass:h}=e.params.pagination;m[S]().addClass(`${h}-${S}`)[S]().addClass(`${h}-${S}-${S}`)}function u(){const m=e.rtl,S=e.params.pagination;if(l())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.pagination.$el;let y;const x=e.params.loop?Math.ceil((h-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),y>h-1-e.loopedSlides*2&&(y-=h-e.loopedSlides*2),y>x-1&&(y-=x),y<0&&e.params.paginationType!=="bullets"&&(y=x+y)):typeof e.snapIndex<"u"?y=e.snapIndex:y=e.activeIndex||0,S.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let O,N,P;if(S.dynamicBullets&&(s=_.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),p.css(e.isHorizontal()?"width":"height",`${s*(S.dynamicMainBullets+4)}px`),S.dynamicMainBullets>1&&e.previousIndex!==void 0&&(o+=y-(e.previousIndex-e.loopedSlides||0),o>S.dynamicMainBullets-1?o=S.dynamicMainBullets-1:o<0&&(o=0)),O=Math.max(y-o,0),N=O+(Math.min(_.length,S.dynamicMainBullets)-1),P=(N+O)/2),_.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(Y=>`${S.bulletActiveClass}${Y}`).join(" ")),p.length>1)_.each(Y=>{const $=q(Y),A=$.index();A===y&&$.addClass(S.bulletActiveClass),S.dynamicBullets&&(A>=O&&A<=N&&$.addClass(`${S.bulletActiveClass}-main`),A===O&&a($,"prev"),A===N&&a($,"next"))});else{const Y=_.eq(y),$=Y.index();if(Y.addClass(S.bulletActiveClass),S.dynamicBullets){const A=_.eq(O),D=_.eq(N);for(let X=O;X<=N;X+=1)_.eq(X).addClass(`${S.bulletActiveClass}-main`);if(e.params.loop)if($>=_.length){for(let X=S.dynamicMainBullets;X>=0;X-=1)_.eq(_.length-X).addClass(`${S.bulletActiveClass}-main`);_.eq(_.length-S.dynamicMainBullets-1).addClass(`${S.bulletActiveClass}-prev`)}else a(A,"prev"),a(D,"next");else a(A,"prev"),a(D,"next")}}if(S.dynamicBullets){const Y=Math.min(_.length,S.dynamicMainBullets+4),$=(s*Y-s)/2-P*s,A=m?"right":"left";_.css(e.isHorizontal()?A:"top",`${$}px`)}}if(S.type==="fraction"&&(p.find(si(S.currentClass)).text(S.formatFractionCurrent(y+1)),p.find(si(S.totalClass)).text(S.formatFractionTotal(x))),S.type==="progressbar"){let _;S.progressbarOpposite?_=e.isHorizontal()?"vertical":"horizontal":_=e.isHorizontal()?"horizontal":"vertical";const O=(y+1)/x;let N=1,P=1;_==="horizontal"?N=O:P=O,p.find(si(S.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${N}) scaleY(${P})`).transition(e.params.speed)}S.type==="custom"&&S.renderCustom?(p.html(S.renderCustom(e,y+1,x)),r("paginationRender",p[0])):r("paginationUpdate",p[0]),e.params.watchOverflow&&e.enabled&&p[e.isLocked?"addClass":"removeClass"](S.lockClass)}function c(){const m=e.params.pagination;if(l())return;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,h=e.pagination.$el;let p="";if(m.type==="bullets"){let y=e.params.loop?Math.ceil((S-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&y>S&&(y=S);for(let x=0;x<y;x+=1)m.renderBullet?p+=m.renderBullet.call(e,x,m.bulletClass):p+=`<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`;h.html(p),e.pagination.bullets=h.find(si(m.bulletClass))}m.type==="fraction"&&(m.renderFraction?p=m.renderFraction.call(e,m.currentClass,m.totalClass):p=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`,h.html(p)),m.type==="progressbar"&&(m.renderProgressbar?p=m.renderProgressbar.call(e,m.progressbarFillClass):p=`<span class="${m.progressbarFillClass}"></span>`,h.html(p)),m.type!=="custom"&&r("paginationRender",e.pagination.$el[0])}function f(){e.params.pagination=hS(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let S=q(m.el);S.length!==0&&(e.params.uniqueNavElements&&typeof m.el=="string"&&S.length>1&&(S=e.$el.find(m.el),S.length>1&&(S=S.filter(h=>q(h).parents(".swiper")[0]===e.el))),m.type==="bullets"&&m.clickable&&S.addClass(m.clickableClass),S.addClass(m.modifierClass+m.type),S.addClass(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(S.addClass(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&S.addClass(m.progressbarOppositeClass),m.clickable&&S.on("click",si(m.bulletClass),function(p){p.preventDefault();let y=q(this).index()*e.params.slidesPerGroup;e.params.loop&&(y+=e.loopedSlides),e.slideTo(y)}),Object.assign(e.pagination,{$el:S,el:S[0]}),e.enabled||S.addClass(m.lockClass))}function d(){const m=e.params.pagination;if(l())return;const S=e.pagination.$el;S.removeClass(m.hiddenClass),S.removeClass(m.modifierClass+m.type),S.removeClass(e.isHorizontal()?m.horizontalClass:m.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(m.bulletActiveClass),m.clickable&&S.off("click",si(m.bulletClass))}n("init",()=>{e.params.pagination.enabled===!1?v():(f(),c(),u())}),n("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&u()}),n("snapIndexChange",()=>{e.params.loop||u()}),n("slidesLengthChange",()=>{e.params.loop&&(c(),u())}),n("snapGridLengthChange",()=>{e.params.loop||(c(),u())}),n("destroy",()=>{d()}),n("enable disable",()=>{const{$el:m}=e.pagination;m&&m[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),n("lock unlock",()=>{u()}),n("click",(m,S)=>{const h=S.target,{$el:p}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&p&&p.length>0&&!q(h).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&h===e.navigation.nextEl||e.navigation.prevEl&&h===e.navigation.prevEl))return;const y=p.hasClass(e.params.pagination.hiddenClass);r(y===!0?"paginationShow":"paginationHide"),p.toggleClass(e.params.pagination.hiddenClass)}});const g=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),f(),c(),u()},v=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),d()};Object.assign(e.pagination,{enable:g,disable:v,render:c,update:u,init:f,destroy:d})}function OL({swiper:e,extendParams:t,on:n,emit:r}){let i;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function s(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const m=e.slides.eq(e.activeIndex);let S=e.params.autoplay.delay;m.attr("data-swiper-autoplay")&&(S=m.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(i),i=Cl(()=>{let h;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),h=e.slidePrev(e.params.speed,!0,!0),r("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?l():(h=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),r("autoplay")):(h=e.slidePrev(e.params.speed,!0,!0),r("autoplay")):e.params.loop?(e.loopFix(),h=e.slideNext(e.params.speed,!0,!0),r("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?l():(h=e.slideTo(0,e.params.speed,!0,!0),r("autoplay")):(h=e.slideNext(e.params.speed,!0,!0),r("autoplay")),(e.params.cssMode&&e.autoplay.running||h===!1)&&s()},S)}function o(){return typeof i<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,r("autoplayStart"),s(),!0)}function l(){return!e.autoplay.running||typeof i>"u"?!1:(i&&(clearTimeout(i),i=void 0),e.autoplay.running=!1,r("autoplayStop"),!0)}function a(m){!e.autoplay.running||e.autoplay.paused||(i&&clearTimeout(i),e.autoplay.paused=!0,m===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,s()):["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].addEventListener(S,c)}))}function u(){const m=Xe();m.visibilityState==="hidden"&&e.autoplay.running&&a(),m.visibilityState==="visible"&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function c(m){!e||e.destroyed||!e.$wrapperEl||m.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(S=>{e.$wrapperEl[0].removeEventListener(S,c)}),e.autoplay.paused=!1,e.autoplay.running?s():l())}function f(){e.params.autoplay.disableOnInteraction?l():(r("autoplayPause"),a()),["transitionend","webkitTransitionEnd"].forEach(m=>{e.$wrapperEl[0].removeEventListener(m,c)})}function d(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,r("autoplayResume"),s())}function g(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",f),e.$el.on("mouseleave",d))}function v(){e.$el.off("mouseenter",f),e.$el.off("mouseleave",d)}n("init",()=>{e.params.autoplay.enabled&&(o(),Xe().addEventListener("visibilitychange",u),g())}),n("beforeTransitionStart",(m,S,h)=>{e.autoplay.running&&(h||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(S):l())}),n("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?l():a())}),n("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()}),n("destroy",()=>{v(),e.autoplay.running&&l(),Xe().removeEventListener("visibilitychange",u)}),Object.assign(e.autoplay,{pause:a,run:s,start:o,stop:l})}function Yr(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function tr(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:Yr(t[r])&&Yr(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:tr(e[r],t[r]):e[r]=t[r]})}function pS(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function mS(e={}){return e.pagination&&typeof e.pagination.el>"u"}function gS(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function vS(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}const yS=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function $L(e={},t=!0){const n={on:{}},r={},i={};tr(n,lt.defaults),tr(n,lt.extendedDefaults),n._emitClasses=!0,n.init=!1;const s={},o=yS.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(o.indexOf(a)>=0?Yr(e[a])?(n[a]={},i[a]={},tr(n[a],e[a]),tr(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:s,events:r}}function RL({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:s},o){pS(o)&&t&&n&&(s.params.navigation.nextEl=t,s.originalParams.navigation.nextEl=t,s.params.navigation.prevEl=n,s.originalParams.navigation.prevEl=n),mS(o)&&r&&(s.params.pagination.el=r,s.originalParams.pagination.el=r),gS(o)&&i&&(s.params.scrollbar.el=i,s.originalParams.scrollbar.el=i),s.init(e)}const wS=(e,t)=>{let n=t.slidesPerView;if(t.breakpoints){const i=lt.prototype.getBreakpoint(t.breakpoints),s=i in t.breakpoints?t.breakpoints[i]:void 0;s&&s.slidesPerView&&(n=s.slidesPerView)}let r=Math.ceil(parseFloat(t.loopedSlides||n,10));return r+=t.loopAdditionalSlides,r>e.length&&t.loopedSlidesLimit&&(r=e.length),r};function NL(e,t,n){const r=t.map((a,u)=>Ne.cloneElement(a,{swiper:e,"data-swiper-slide-index":u}));function i(a,u,c){return Ne.cloneElement(a,{key:`${a.key}-duplicate-${u}-${c}`,className:`${a.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const a=n.slidesPerGroup-r.length%n.slidesPerGroup;if(a!==n.slidesPerGroup)for(let u=0;u<a;u+=1){const c=w("div",{className:`${n.slideClass} ${n.slideBlankClass}`});r.push(c)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=r.length);const s=wS(r,n),o=[],l=[];for(let a=0;a<s;a+=1){const u=a-Math.floor(a/r.length)*r.length;l.push(i(r[u],a,"append")),o.unshift(i(r[r.length-u-1],a,"prepend"))}return e&&(e.loopedSlides=s),[...o,...r,...l]}function LL(e,t,n,r,i){const s=[];if(!t)return s;const o=a=>{s.indexOf(a)<0&&s.push(a)};if(n&&r){const a=r.map(i),u=n.map(i);a.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return yS.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(Yr(e[a])&&Yr(t[a])){const u=Object.keys(e[a]),c=Object.keys(t[a]);u.length!==c.length?o(a):(u.forEach(f=>{e[a][f]!==t[a][f]&&o(a)}),c.forEach(f=>{e[a][f]!==t[a][f]&&o(a)}))}else e[a]!==t[a]&&o(a)}),s}function SS(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function bS(e){const t=[];return Ne.Children.toArray(e).forEach(n=>{SS(n)?t.push(n):n.props&&n.props.children&&bS(n.props.children).forEach(r=>t.push(r))}),t}function DL(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Ne.Children.toArray(e).forEach(r=>{if(SS(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=bS(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function ML({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:s,scrollbarEl:o,paginationEl:l}){const a=r.filter(_=>_!=="children"&&_!=="direction"),{params:u,pagination:c,navigation:f,scrollbar:d,virtual:g,thumbs:v}=e;let m,S,h,p,y;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(m=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(S=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(h=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(u.scrollbar||u.scrollbar===!1)&&d&&!d.el&&(p=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||s)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(y=!0);const x=_=>{!e[_]||(e[_].destroy(),_==="navigation"?(u[_].prevEl=void 0,u[_].nextEl=void 0,e[_].prevEl=void 0,e[_].nextEl=void 0):(u[_].el=void 0,e[_].el=void 0))};a.forEach(_=>{if(Yr(u[_])&&Yr(n[_]))tr(u[_],n[_]);else{const O=n[_];(O===!0||O===!1)&&(_==="navigation"||_==="pagination"||_==="scrollbar")?O===!1&&x(_):u[_]=n[_]}}),a.includes("controller")&&!S&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&g&&u.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),m&&v.init()&&v.update(!0),S&&(e.controller.control=u.controller.control),h&&(l&&(u.pagination.el=l),c.init(),c.render(),c.update()),p&&(o&&(u.scrollbar.el=o),d.init(),d.updateSize(),d.setTranslate()),y&&(i&&(u.navigation.nextEl=i),s&&(u.navigation.prevEl=s),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function FL(e,t,n){if(!n)return null;const r=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return t.filter((i,s)=>s>=n.from&&s<=n.to).map(i=>Ne.cloneElement(i,{swiper:e,style:r}))}const zL=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function zs(e,t){return typeof window>"u"?M.exports.useEffect(e,t):M.exports.useLayoutEffect(e,t)}const jL=M.exports.createContext(null),BL=M.exports.createContext(null),xS=M.exports.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...l}=e===void 0?{}:e,a=!1;const[u,c]=M.exports.useState("swiper"),[f,d]=M.exports.useState(null),[g,v]=M.exports.useState(!1),m=M.exports.useRef(!1),S=M.exports.useRef(null),h=M.exports.useRef(null),p=M.exports.useRef(null),y=M.exports.useRef(null),x=M.exports.useRef(null),_=M.exports.useRef(null),O=M.exports.useRef(null),N=M.exports.useRef(null),{params:P,passedParams:Y,rest:$,events:A}=$L(l),{slides:D,slots:X}=DL(s),re=()=>{v(!g)};Object.assign(P.on,{_containerClasses(H,J){c(J)}});const oe=()=>{if(Object.assign(P.on,A),a=!0,h.current=new lt(P),h.current.loopCreate=()=>{},h.current.loopDestroy=()=>{},P.loop&&(h.current.loopedSlides=wS(D,P)),h.current.virtual&&h.current.params.virtual.enabled){h.current.virtual.slides=D;const H={cache:!1,slides:D,renderExternal:d,renderExternalUpdate:!1};tr(h.current.params.virtual,H),tr(h.current.originalParams.virtual,H)}};S.current||oe(),h.current&&h.current.on("_beforeBreakpoint",re);const ye=()=>{a||!A||!h.current||Object.keys(A).forEach(H=>{h.current.on(H,A[H])})},be=()=>{!A||!h.current||Object.keys(A).forEach(H=>{h.current.off(H,A[H])})};M.exports.useEffect(()=>()=>{h.current&&h.current.off("_beforeBreakpoint",re)}),M.exports.useEffect(()=>{!m.current&&h.current&&(h.current.emitSlidesClasses(),m.current=!0)}),zs(()=>{if(t&&(t.current=S.current),!!S.current)return h.current.destroyed&&oe(),RL({el:S.current,nextEl:x.current,prevEl:_.current,paginationEl:O.current,scrollbarEl:N.current,swiper:h.current},P),o&&o(h.current),()=>{h.current&&!h.current.destroyed&&h.current.destroy(!0,!1)}},[]),zs(()=>{ye();const H=LL(Y,p.current,D,y.current,J=>J.key);return p.current=Y,y.current=D,H.length&&h.current&&!h.current.destroyed&&ML({swiper:h.current,slides:D,passedParams:Y,changedParams:H,nextEl:x.current,prevEl:_.current,scrollbarEl:N.current,paginationEl:O.current}),()=>{be()}}),zs(()=>{zL(h.current)},[f]);function F(){return P.virtual?FL(h.current,D,f):!P.loop||h.current&&h.current.destroyed?D.map(H=>Ne.cloneElement(H,{swiper:h.current})):NL(h.current,D,P)}return w(r,{ref:S,className:vS(`${u}${n?` ${n}`:""}`),...$,children:z(BL.Provider,{value:h.current,children:[X["container-start"],z(i,{className:"swiper-wrapper",children:[X["wrapper-start"],F(),X["wrapper-end"]]}),pS(P)&&z(Ji,{children:[w("div",{ref:_,className:"swiper-button-prev"}),w("div",{ref:x,className:"swiper-button-next"})]}),gS(P)&&w("div",{ref:N,className:"swiper-scrollbar"}),mS(P)&&w("div",{ref:O,className:"swiper-pagination"}),X["container-end"]]})})});xS.displayName="Swiper";const ES=M.exports.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,virtualIndex:l,...a}=e===void 0?{}:e;const u=M.exports.useRef(null),[c,f]=M.exports.useState("swiper-slide");function d(m,S,h){S===u.current&&f(h)}zs(()=>{if(t&&(t.current=u.current),!(!u.current||!s)){if(s.destroyed){c!=="swiper-slide"&&f("swiper-slide");return}return s.on("_slideClass",d),()=>{!s||s.off("_slideClass",d)}}}),zs(()=>{s&&u.current&&!s.destroyed&&f(s.getSlideClasses(u.current))},[s]);const g={isActive:c.indexOf("swiper-slide-active")>=0||c.indexOf("swiper-slide-duplicate-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isDuplicate:c.indexOf("swiper-slide-duplicate")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0||c.indexOf("swiper-slide-duplicate-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0||c.indexOf("swiper-slide-duplicate-next")>=0},v=()=>typeof r=="function"?r(g):r;return w(n,{ref:u,className:vS(`${c}${i?` ${i}`:""}`),"data-swiper-slide-index":l,...a,children:w(jL.Provider,{value:g,children:o?w("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0,children:v()}):v()})})});ES.displayName="SwiperSlide";const UL=E.a`
  background: #fff;
  height: 100%;
  text-decoration: none;
  width: 100%;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`,VL=E.div`
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
`,HL=E.img`
  border-radius: 3px;
  height: 80%;
  width: 93%;
  margin-top: 3%;
`,WL=E.h3`
  font-size: 1.3rem;
  margin: 0 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,GL=E.div`
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
`,qL=E.h3`
  border-bottom: 1px solid #62a596;
  height: auto;
  margin: 1rem 1rem 0;
  padding-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`,KL=E.p`
  height: 70%;
  margin: 1.5rem;
  overflow-y: scroll;

  @media screen and (max-width: 1366px) {
    height: 45%;
  }
`,YL={slidesPerView:4,spaceBetween:30,centeredSlides:!0,loop:!0,pagination:{clickable:!0,type:"bullets"},autoplay:{delay:5e3},navigation:!0,modules:[AL,OL,PL],className:"mySwiper"},QL=()=>{const[e,t]=M.exports.useState([]);return M.exports.useEffect(()=>{(async()=>{try{const r=[];(await iS(ip(ti,"productos"))).forEach(s=>{const o={id:s.id,...s.data()};r.push(o)}),t(r)}catch{console.log("error en cargar productos")}})()},[]),w(xS,{...YL,children:e.map(n=>w(ES,{children:z(UL,{target:"_blank",href:"www.google.com",children:[z(VL,{children:[w(HL,{src:n.imagen}),w(WL,{children:n.title})]}),z(GL,{children:[w(qL,{children:n.title}),w(KL,{children:n.description})]})]})},n.id))})},XL=()=>z(bR,{children:[w(xR,{children:z(ER,{children:[w(kR,{}),w(_R,{children:"Servicios"})]})}),w(CR,{children:w(QL,{})})]}),JL=E.div`
  /* background-color: #FEF7EF; */
  min-height: 80vh;
  width: 100%;
`,ZL=E.div`
  /* background-color: aqua; */
  align-items: flex-end;
  display: flex;
  height: 20%;
  width: 100%;
`,eD=E.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,tD=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,nD=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 11rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,rD=E.div`
  /* background-color: blueviolet; */
  height: 80%;
  width: 100%;
`,iD=E.div`
  /* background-color: red; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,sD=E.div`
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
`,oD=E.div`
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
`,aD=E.div`
  /* background-color: brown; */
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`,lD=E.div`
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
`,uD=E.div`
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
`,cD=E.img`
  width: 3.5rem;

  @media screen and (max-width: 1366px) {
    width: 3rem;
  }
`,dD=E.div`
  align-items: center;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-start;
  width: 100%;
`,fD=E.p`
  margin-top: 2rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 0.85rem;
  }
`,hD=E.h3`
  font-size: 1.2rem;
  margin-top: 2.5rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`,pD=({title:e,img:t,description:n})=>{const r=`src/assets/icons/${t}.svg`;return z(oD,{children:[w(aD,{children:w(lD,{children:w(uD,{children:w(cD,{src:r})})})}),z(dD,{children:[w(hD,{children:e}),w(fD,{children:n})]})]})},mD=E.div`
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
`,gD=E.div`
  align-items: center;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: flex-end;
  width: 100%;
`,vD=E.p`
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (max-width: 1366px) {
    font-size: 0.85rem;
  }
`,yD=E.h3`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
  }
`,wD=E.div`
  /* background-color: brown; */
  display: flex;
  height: 50%;
  justify-content: center;
  width: 100%;
`,SD=E.div`
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
`,bD=E.div`
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
`,xD=E.img`
  width: 3.5rem;

  @media screen and (max-width: 1366px) {
    width: 3rem;
  }
`,ED=({title:e,img:t,description:n})=>{const r=`src/assets/icons/${t}.svg`;return z(mD,{children:[z(gD,{children:[w(vD,{children:n}),w(yD,{children:e})]}),w(wD,{children:w(SD,{children:w(bD,{children:w(xD,{src:r})})})})]})},_D=[{id:1,title:"REQUERIMIENTOS",img:"workflow_calendar",description:"Primero estableceremos una conversaci\xF3n, v\xEDa email, tel\xE9fono o como usted desee para entender la idea y poder asesorarlo, con la idea que tiene."},{id:2,title:"ELECCION DEL PLAN",img:"workflow_laptop",description:"Luego que quede claro y seguro de su idea, elegir\xE1 el plan que m\xE1s se ajuste a su presupuesto."},{id:3,title:"DESARROLLO",img:"workflow_tablet",description:"Luego de confirmar su pago o transferencia, empezar\xE9 a trabajar, en donde mantendremos el contacto de principio a fin."},{id:4,title:"OBSERVACIONES",img:"workflow_certificate",description:"Al concluir con el desarrollo de su idea, hare observaciones de si cumple con lo acordado."},{id:5,title:"ENTREGA FINAL",img:"workflow_givework",description:"Si todo est\xE1 en condiciones se le har\xE1 la entrega de su producto y toda la propiedad del mismo."}],kD=()=>z(JL,{children:[w(ZL,{children:z(eD,{children:[w(nD,{}),w(tD,{children:"Forma de Trabajo"})]})}),w(rD,{children:w(iD,{children:w(sD,{children:_D.map(e=>e.id%2!==0?w(ED,{...e},e.id):w(pD,{...e},e.id))})})})]}),Ru="/assets/pattern.a35e4376.svg",CD=E.div`
  background: fixed repeat center/2rem url(${Ru});
  display: flex;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
`,_S=()=>z(CD,{children:[w(SR,{}),w(XL,{}),w(kD,{}),w(lR,{})]}),TD=E.div`
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
`,ID=E.a`
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
`,PD=E.div`
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
`,AD=E.a`
  /* background-color: red; */
  cursor: pointer;
  font-size: 1.1rem;
  width: 90%;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,OD=E.div`
  /* background-color: green; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`,$D=E.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.3rem;
  margin-left: 1rem;
`,RD=E.div`
  /* margin-bottom: 0.2rem; */
  align-items: center;
  display: flex;
  height: 100%;
  width: auto;
`,kS=`
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
`;E.button`
  ${kS};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`;const ND=E.button`
  ${kS};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,CS="/assets/trash_carrito.4d4914c1.svg",TS=bw({name:"productoActivo",initialState:{id:null,title:null,description:null,precio:null,imagen:null,isLoading:!1},reducers:{setActiveProduct:(e,{payload:t})=>{e.id=t.id,e.title=t.title,e.description=t.description,e.precio=t.precio,e.imagen=t.imagen},clearActiveProduct:e=>{e.id=null,e.title=null,e.description=null,e.precio=null,e.imagen=null,e.isLoading=!1},setImagenNewProduct:(e,{payload:t})=>{e.imagen=t},setNewProduct:(e,{payload:t})=>{e.id=t.id,e.title=t.title,e.description=t.description,e.precio=t.precio},isLoadingImage:e=>{e.isLoading=!0},isNotLoadingImage:e=>{e.isLoading=!1}}}),{setActiveProduct:Es,clearActiveProduct:IS,setImagenNewProduct:LD,setNewProduct:DD,isLoadingImage:MD,isNotLoadingImage:FD}=TS.actions,zD=async e=>{if(!e)return console.log("No tenemos ningun archivo para subir.");const t="https://api.cloudinary.com/v1_1/dssccuwn8/upload",n=new FormData;n.append("upload_preset","lune-app"),n.append("file",e);try{const r=await fetch(t,{method:"POST",body:n});if(!r.ok)throw new Error("No se pudo subir el archivo.");return(await r.json()).secure_url}catch{console.log("No tenemos ningun archivo para subir.")}},jD=({title:e,precio:t,description:n})=>async(r,i)=>{const{imagen:s}=i().productoActivo;r(DD({title:e,precio:t,description:n}));const o="https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg",l={title:e,precio:t,description:n,imagen:s!=null?s:o},a=Mo(ip(ti,"productos"));sS(a,l)},BD=(e=[])=>async t=>{const n=await zD(e[0]);t(LD(n)),t(FD())},UD=()=>async(e,t)=>{const{id:n}=t().productoActivo;await F$(Mo(ti,`productos/${n}`)),e(IS()),location.reload()},VD=({title:e,precio:t,description:n})=>async(r,i)=>{const{imagen:s,id:o}=i().productoActivo,l="https://res.cloudinary.com/dssccuwn8/image/upload/v1670099197/assets/icon-image-not-found-free-vector_e6wezo.jpg",a={title:e,precio:t,description:n,imagen:s!=null?s:l},u=Mo(ti,`productos/${o}`);M$(u,a)},HD=TC({reducer:{auth:xw.reducer,productoActivo:TS.reducer}}),WD=()=>{const{status:e}=xr(n=>n.auth),t=Jr();return M.exports.useEffect(()=>{YI($u,async n=>{if(!n)return t(dp());const{uid:r,email:i}=n;t(Nh({uid:r,email:i})),t(G$(r))})},[]),e},hp=()=>(localStorage["@carrito"]||(localStorage["@carrito"]=JSON.stringify([])),JSON.parse(localStorage["@carrito"])),GD=e=>{const t=hp();t.push({...e}),localStorage["@carrito"]=JSON.stringify(t)},qD=e=>{let t=hp();t=t.filter(n=>n.id!==e),localStorage["@carrito"]=JSON.stringify(t)},KD=({title:e,description:t,id:n,precio:r,imagen:i})=>{const s=Jr(),o=()=>{s(Es({title:e,description:t,id:n,precio:r,imagen:i}))},l=()=>{qD(n),location.reload()};return z(TD,{children:[w(ID,{onClick:o,children:w(PD,{children:w("img",{src:i})})}),w(AD,{onClick:o,children:e}),z(OD,{children:[w($D,{children:`$ ${r}`}),w(RD,{children:w(ND,{onClick:l,children:w("img",{src:CS})})})]})]})},Nu="/assets/cuadricula_green_grey.424c84ba.svg",YD=E.div`
  background: fixed repeat center/2rem url(${Nu});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`,QD=E.div`
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
`,XD=E.div`
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
`,JD=E.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,ZD=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,e2=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`;E(Fn)`
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
`;const t2=E.div`
  /* background-color: blueviolet; */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`,n2=E.div`
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
`,r2=E.div`
  display: flex;
  height: auto;
  width: auto;
  margin-bottom: .5rem;
  margin-left: 8rem;
`,i2=E.p`
  font-size: 1.2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,s2=E.div`
  display: flex;
  height: auto;
  width: auto;
  margin-bottom: .5rem;
  margin-right: 8rem;
`,o2=E(Fn)`
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
`,a2=()=>{const[e,t]=M.exports.useState([]),n=e.map(r=>r.precio).reduce((r,i)=>r+i,0);return M.exports.useEffect(()=>{t(hp())},[]),w(YD,{children:z(QD,{children:[w(XD,{children:z(JD,{children:[w(e2,{}),w(ZD,{children:"Carrito"})]})}),w(t2,{children:e.map((r,i)=>w(KD,{...r},i))}),z(n2,{children:[w(r2,{children:z(i2,{children:["Total: $",n]})}),w(s2,{children:w(o2,{children:"Pagar"})})]})]})})},l2=E.div`
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
`,u2=E.a`
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
`,c2=E.div`
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
`,d2=E.a`
  /* background-color: red; */
  cursor: pointer;
  font-size: 1.1rem;
  width: 90%;

  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,f2=E.div`
  /* background-color: green; */
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`,h2=E.p`
  align-items: center;
  color: #1b7ced;
  display: flex;
  font-size: 1.3rem;
  margin-left: 1rem;
`,p2=E.div`
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
`,m2=E.button`
  ${pp};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,g2=E.button`
  ${pp};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,v2=E.button`
  ${pp};
  &:active {
    background-color: #6fa894;
    color: #fff;
  }
`,y2="/assets/plus_carrito.7b16cc86.svg",w2="/assets/edit_product.9c969bd4.svg",S2=({title:e,description:t,id:n,precio:r,imagen:i})=>{const s=Jr(),{rol:o}=xr(d=>d.auth),l=yu(),a=()=>{s(Es({title:e,description:t,id:n,precio:r,imagen:i}))},u=()=>{s(Es({title:e,description:t,id:n,precio:r,imagen:i})),s(UD())},c=()=>{s(Es({title:e,description:t,id:n,precio:r,imagen:i})),GD({title:e,description:t,id:n,precio:r,imagen:i})},f=()=>{l(`/modificar/${n}`),s(Es({title:e,description:t,id:n,precio:r,imagen:i}))};return z(l2,{children:[w(u2,{onClick:a,children:w(c2,{children:w("img",{src:i})})}),w(d2,{onClick:a,children:e}),z(f2,{children:[w(h2,{children:`$ ${r}`}),z(p2,{children:[w(v2,{onClick:f,children:w("img",{src:w2})}),o==="Administrador"?w(g2,{onClick:u,children:w("img",{src:CS})}):w(Ji,{}),w(m2,{onClick:c,children:w("img",{src:y2})})]})]})]})},b2=E.div`
  background: fixed repeat center/2rem url(${Nu});
  display: flex;
  justify-content: center;
  min-height: 95vh;
  width: 100%;
`,x2=E.div`
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
`,E2=E.div`
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
`,_2=E.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-bottom: 1.5rem;
  width: auto;
`,k2=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,C2=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,T2=E(Fn)`
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
`,I2=E.div`
  /* background-color: blueviolet; */
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`,P2="/assets/new_product.bcca37ce.svg",PS=()=>{const{rol:e}=xr(r=>r.auth),[t,n]=M.exports.useState([]);return M.exports.useEffect(()=>{(async()=>{try{const i=[];(await iS(ip(ti,"productos"))).forEach(o=>{const l={id:o.id,...o.data()};i.push(l)}),n(i)}catch{console.log("error en cargar productos")}})()},[]),w(b2,{children:z(x2,{children:[z(E2,{children:[z(_2,{children:[w(C2,{}),w(k2,{children:"Tienda"})]}),e==="Administrador"?w(T2,{to:"/agregar",title:"Agregar nuevo producto.",children:w("img",{src:P2})}):w(Ji,{})]}),w(I2,{children:t.map(r=>w(S2,{...r},r.id))})]})})},A2=E.div`
  align-items: center;
  background: fixed repeat center/2rem url(${Nu});
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 100%;
`,O2=E.div`
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
`,$2=E.div`
  /* background-color: aqua; */
  align-items: center;
  border-bottom: 2px solid #ddd;
  display: flex;
  height: 15%;
  width: 100%;
`,R2=E.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`,N2=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,L2=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,D2=E.div`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 85%;
  width: 100%;
`,M2=E.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 55%;
`,F2=E.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 80%;
`,Nc=E.p`
  font-size: 0.9rem;
`,fv=E.input`
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
`,z2=E.textarea`
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
`;E(Fn)`
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
`;const j2=E.div`
  /* background-color: blue; */
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
`,B2=E.img`
  border-radius: 0.5rem;
  height: 68%;
  margin-top: 2.5rem;
  width: 75%;

  @media screen and (max-width: 1366px) {
    height: 66.5%;
  }
`,hv=E.button`
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
`;var zo=e=>e.type==="checkbox",_i=e=>e instanceof Date,ut=e=>e==null;const AS=e=>typeof e=="object";var Ze=e=>!ut(e)&&!Array.isArray(e)&&AS(e)&&!_i(e),U2=e=>Ze(e)&&e.target?zo(e.target)?e.target.checked:e.target.value:e,V2=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,H2=(e,t)=>e.has(V2(t)),jo=e=>Array.isArray(e)?e.filter(Boolean):[],Be=e=>e===void 0,Q=(e,t,n)=>{if(!t||!Ze(e))return n;const r=jo(t.split(/[,[\].]+?/)).reduce((i,s)=>ut(i)?i:i[s],e);return Be(r)||r===e?Be(e[t])?n:e[t]:r};const pv={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},en={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Ne.createContext(null);var W2=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==en.all&&(t._proxyFormState[o]=!r||en.all),n&&(n[o]=!0),e[o]}});return i},Mt=e=>Ze(e)&&!Object.keys(e).length,G2=(e,t,n)=>{const{name:r,...i}=e;return Mt(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!n||en.all))},Lc=e=>Array.isArray(e)?e:[e];function q2(e){const t=Ne.useRef(e);t.current=e,Ne.useEffect(()=>{const n=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{n&&n.unsubscribe()}},[e.disabled])}var fn=e=>typeof e=="string",K2=(e,t,n,r)=>{const i=Array.isArray(e);return fn(e)?(r&&t.watch.add(e),Q(n,e)):i?e.map(s=>(r&&t.watch.add(s),Q(n,s))):(r&&(t.watchAll=!0),n)},Tl=e=>typeof e=="function",OS=e=>{for(const t in e)if(Tl(e[t]))return!0;return!1},Y2=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},mp=e=>/^\w*$/.test(e),$S=e=>jo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ke(e,t,n){let r=-1;const i=mp(t)?[t]:$S(t),s=i.length,o=s-1;for(;++r<s;){const l=i[r];let a=n;if(r!==o){const u=e[l];a=Ze(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[l]=a,e=e[l]}return e}const pf=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=Q(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Ze(o)&&pf(o,t)}}};var mv=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Q2=(e,t,n)=>{const r=jo(Q(e,n));return ke(r,"root",t[n]),ke(e,n,r),e},Il=e=>typeof e=="boolean",gp=e=>e.type==="file",$a=e=>fn(e)||Ne.isValidElement(e),vp=e=>e.type==="radio",Pl=e=>e instanceof RegExp;const gv={value:!1,isValid:!1},vv={value:!0,isValid:!0};var RS=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Be(e[0].attributes.value)?Be(e[0].value)||e[0].value===""?vv:{value:e[0].value,isValid:!0}:vv:gv}return gv};const yv={isValid:!1,value:null};var NS=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,yv):yv;function wv(e,t,n="validate"){if($a(e)||Array.isArray(e)&&e.every($a)||Il(e)&&!e)return{type:n,message:$a(e)?e:"",ref:t}}var oi=e=>Ze(e)&&!Pl(e)?e:{value:e,message:""},Sv=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:l,maxLength:a,minLength:u,min:c,max:f,pattern:d,validate:g,name:v,valueAsNumber:m,mount:S,disabled:h}=e._f;if(!S||h)return{};const p=o?o[0]:s,y=A=>{r&&p.reportValidity&&(p.setCustomValidity(Il(A)?"":A||" "),p.reportValidity())},x={},_=vp(s),O=zo(s),N=_||O,P=(m||gp(s))&&!s.value||t===""||Array.isArray(t)&&!t.length,Y=Y2.bind(null,v,n,x),$=(A,D,X,re=bn.maxLength,oe=bn.minLength)=>{const ye=A?D:X;x[v]={type:A?re:oe,message:ye,ref:s,...Y(A?re:oe,ye)}};if(i?!Array.isArray(t)||!t.length:l&&(!N&&(P||ut(t))||Il(t)&&!t||O&&!RS(o).isValid||_&&!NS(o).isValid)){const{value:A,message:D}=$a(l)?{value:!!l,message:l}:oi(l);if(A&&(x[v]={type:bn.required,message:D,ref:p,...Y(bn.required,D)},!n))return y(D),x}if(!P&&(!ut(c)||!ut(f))){let A,D;const X=oi(f),re=oi(c);if(!ut(t)&&!isNaN(t)){const oe=s.valueAsNumber||t&&+t;ut(X.value)||(A=oe>X.value),ut(re.value)||(D=oe<re.value)}else{const oe=s.valueAsDate||new Date(t),ye=H=>new Date(new Date().toDateString()+" "+H),be=s.type=="time",F=s.type=="week";fn(X.value)&&t&&(A=be?ye(t)>ye(X.value):F?t>X.value:oe>new Date(X.value)),fn(re.value)&&t&&(D=be?ye(t)<ye(re.value):F?t<re.value:oe<new Date(re.value))}if((A||D)&&($(!!A,X.message,re.message,bn.max,bn.min),!n))return y(x[v].message),x}if((a||u)&&!P&&(fn(t)||i&&Array.isArray(t))){const A=oi(a),D=oi(u),X=!ut(A.value)&&t.length>A.value,re=!ut(D.value)&&t.length<D.value;if((X||re)&&($(X,A.message,D.message),!n))return y(x[v].message),x}if(d&&!P&&fn(t)){const{value:A,message:D}=oi(d);if(Pl(A)&&!t.match(A)&&(x[v]={type:bn.pattern,message:D,ref:s,...Y(bn.pattern,D)},!n))return y(D),x}if(g){if(Tl(g)){const A=await g(t),D=wv(A,p);if(D&&(x[v]={...D,...Y(bn.validate,D.message)},!n))return y(D.message),x}else if(Ze(g)){let A={};for(const D in g){if(!Mt(A)&&!n)break;const X=wv(await g[D](t),p,D);X&&(A={...X,...Y(D,X.message)},y(X.message),n&&(x[v]=A))}if(!Mt(A)&&(x[v]={ref:p,...A},!n))return x}}return y(!0),x},X2=e=>{const t=e.constructor&&e.constructor.prototype;return Ze(t)&&t.hasOwnProperty("isPrototypeOf")},mf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ir(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(mf&&(e instanceof Blob||e instanceof FileList))&&(n||Ze(e)))if(t=n?[]:{},!Array.isArray(e)&&!X2(e))t=e;else for(const r in e)t[r]=Ir(e[r]);else return e;return t}var bv=e=>({isOnSubmit:!e||e===en.onSubmit,isOnBlur:e===en.onBlur,isOnChange:e===en.onChange,isOnAll:e===en.all,isOnTouch:e===en.onTouched});function J2(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=Be(e)?r++:e[t[r++]];return e}function Z2(e){for(const t in e)if(!Be(e[t]))return!1;return!0}function ot(e,t){const n=mp(t)?[t]:$S(t),r=n.length==1?e:J2(e,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let l=-1,a;const u=n.slice(0,-(o+1)),c=u.length-1;for(o>0&&(s=e);++l<u.length;){const f=u[l];a=a?a[f]:e[f],c===l&&(Ze(a)&&Mt(a)||Array.isArray(a)&&Z2(a))&&(s?delete s[f]:delete e[f]),s=a}}return e}function Dc(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var Al=e=>ut(e)||!AS(e);function ki(e,t){if(Al(e)||Al(t))return e===t;if(_i(e)&&_i(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(_i(s)&&_i(o)||Ze(s)&&Ze(o)||Array.isArray(s)&&Array.isArray(o)?!ki(s,o):s!==o)return!1}}return!0}var gf=e=>{const t=e?e.ownerDocument:0,n=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof n},LS=e=>e.type==="select-multiple",eM=e=>vp(e)||zo(e),Mc=e=>gf(e)&&e.isConnected;function Ol(e,t={}){const n=Array.isArray(e);if(Ze(e)||n)for(const r in e)Array.isArray(e[r])||Ze(e[r])&&!OS(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Ol(e[r],t[r])):ut(e[r])||(t[r]=!0);return t}function DS(e,t,n){const r=Array.isArray(e);if(Ze(e)||r)for(const i in e)Array.isArray(e[i])||Ze(e[i])&&!OS(e[i])?Be(t)||Al(n[i])?n[i]=Array.isArray(e[i])?Ol(e[i],[]):{...Ol(e[i])}:DS(e[i],ut(t)?{}:t[i],n[i]):n[i]=!ki(e[i],t[i]);return n}var Fc=(e,t)=>DS(e,t,Ol(t)),MS=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Be(e)?e:t?e===""?NaN:e&&+e:n&&fn(e)?new Date(e):r?r(e):e;function zc(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return gp(t)?t.files:vp(t)?NS(e.refs).value:LS(t)?[...t.selectedOptions].map(({value:n})=>n):zo(t)?RS(e.refs).value:MS(Be(t.value)?e.ref.value:t.value,e)}var tM=(e,t,n,r)=>{const i={};for(const s of e){const o=Q(t,s);o&&ke(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ms=e=>Be(e)?void 0:Pl(e)?e.source:Ze(e)?Pl(e.value)?e.value.source:e.value:e,nM=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function xv(e,t,n){const r=Q(e,n);if(r||mp(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Q(t,s),l=Q(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(l&&l.type)return{name:s,error:l};i.pop()}return{name:n}}var rM=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,iM=(e,t)=>!jo(Q(e,t)).length&&ot(e,t);const sM={mode:en.onSubmit,reValidateMode:en.onChange,shouldFocusError:!0};function oM(e={}){let t={...sM,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},r={},i=Ir(t.defaultValues)||{},s=t.shouldUnregister?{}:Ir(i),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},a,u=0,c={};const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:Dc(),array:Dc(),state:Dc()},g=bv(t.mode),v=bv(t.reValidateMode),m=t.criteriaMode===en.all,S=b=>C=>{clearTimeout(u),u=window.setTimeout(b,C)},h=async b=>{let C=!1;return f.isValid&&(C=t.resolver?Mt((await N()).errors):await Y(r,!0),!b&&C!==n.isValid&&(n.isValid=C,d.state.next({isValid:C}))),C},p=(b,C=[],T,R,U=!0,I=!0)=>{if(R&&T){if(o.action=!0,I&&Array.isArray(Q(r,b))){const V=T(Q(r,b),R.argA,R.argB);U&&ke(r,b,V)}if(f.errors&&I&&Array.isArray(Q(n.errors,b))){const V=T(Q(n.errors,b),R.argA,R.argB);U&&ke(n.errors,b,V),iM(n.errors,b)}if(f.touchedFields&&I&&Array.isArray(Q(n.touchedFields,b))){const V=T(Q(n.touchedFields,b),R.argA,R.argB);U&&ke(n.touchedFields,b,V)}f.dirtyFields&&(n.dirtyFields=Fc(i,s)),d.state.next({isDirty:A(b,C),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ke(s,b,C)},y=(b,C)=>{ke(n.errors,b,C),d.state.next({errors:n.errors})},x=(b,C,T,R)=>{const U=Q(r,b);if(U){const I=Q(s,b,Be(T)?Q(i,b):T);Be(I)||R&&R.defaultChecked||C?ke(s,b,C?I:zc(U._f)):re(b,I),o.mount&&h()}},_=(b,C,T,R,U)=>{let I=!1;const V={name:b},we=Q(n.touchedFields,b);if(f.isDirty){const de=n.isDirty;n.isDirty=V.isDirty=A(),I=de!==V.isDirty}if(f.dirtyFields&&(!T||R)){const de=Q(n.dirtyFields,b);ki(Q(i,b),C)?ot(n.dirtyFields,b):ke(n.dirtyFields,b,!0),V.dirtyFields=n.dirtyFields,I=I||de!==Q(n.dirtyFields,b)}return T&&!we&&(ke(n.touchedFields,b,T),V.touchedFields=n.touchedFields,I=I||f.touchedFields&&we!==T),I&&U&&d.state.next(V),I?V:{}},O=async(b,C,T,R)=>{const U=Q(n.errors,b),I=f.isValid&&n.isValid!==C;if(e.delayError&&T?(a=S(()=>y(b,T)),a(e.delayError)):(clearTimeout(u),a=null,T?ke(n.errors,b,T):ot(n.errors,b)),(T?!ki(U,T):U)||!Mt(R)||I){const V={...R,...I?{isValid:C}:{},errors:n.errors,name:b};n={...n,...V},d.state.next(V)}c[b]--,f.isValidating&&!Object.values(c).some(V=>V)&&(d.state.next({isValidating:!1}),c={})},N=async b=>t.resolver?await t.resolver({...s},t.context,tM(b||l.mount,r,t.criteriaMode,t.shouldUseNativeValidation)):{},P=async b=>{const{errors:C}=await N();if(b)for(const T of b){const R=Q(C,T);R?ke(n.errors,T,R):ot(n.errors,T)}else n.errors=C;return C},Y=async(b,C,T={valid:!0})=>{for(const R in b){const U=b[R];if(U){const{_f:I,...V}=U;if(I){const we=l.array.has(I.name),de=await Sv(U,Q(s,I.name),m,t.shouldUseNativeValidation,we);if(de[I.name]&&(T.valid=!1,C))break;!C&&(Q(de,I.name)?we?Q2(n.errors,de,I.name):ke(n.errors,I.name,de[I.name]):ot(n.errors,I.name))}V&&await Y(V,C,T)}}return T.valid},$=()=>{for(const b of l.unMount){const C=Q(r,b);C&&(C._f.refs?C._f.refs.every(T=>!Mc(T)):!Mc(C._f.ref))&&G(b)}l.unMount=new Set},A=(b,C)=>(b&&C&&ke(s,b,C),!ki(H(),i)),D=(b,C,T)=>{const R={...o.mount?s:Be(C)?i:fn(b)?{[b]:C}:C};return K2(b,l,R,T)},X=b=>jo(Q(o.mount?s:i,b,e.shouldUnregister?Q(i,b,[]):[])),re=(b,C,T={})=>{const R=Q(r,b);let U=C;if(R){const I=R._f;I&&(!I.disabled&&ke(s,b,MS(C,I)),U=mf&&gf(I.ref)&&ut(C)?"":C,LS(I.ref)?[...I.ref.options].forEach(V=>V.selected=U.includes(V.value)):I.refs?zo(I.ref)?I.refs.length>1?I.refs.forEach(V=>(!V.defaultChecked||!V.disabled)&&(V.checked=Array.isArray(U)?!!U.find(we=>we===V.value):U===V.value)):I.refs[0]&&(I.refs[0].checked=!!U):I.refs.forEach(V=>V.checked=V.value===U):gp(I.ref)?I.ref.value="":(I.ref.value=U,I.ref.type||d.watch.next({name:b})))}(T.shouldDirty||T.shouldTouch)&&_(b,U,T.shouldTouch,T.shouldDirty,!0),T.shouldValidate&&F(b)},oe=(b,C,T)=>{for(const R in C){const U=C[R],I=`${b}.${R}`,V=Q(r,I);(l.array.has(b)||!Al(U)||V&&!V._f)&&!_i(U)?oe(I,U,T):re(I,U,T)}},ye=(b,C,T={})=>{const R=Q(r,b),U=l.array.has(b),I=Ir(C);ke(s,b,I),U?(d.array.next({name:b,values:s}),(f.isDirty||f.dirtyFields)&&T.shouldDirty&&(n.dirtyFields=Fc(i,s),d.state.next({name:b,dirtyFields:n.dirtyFields,isDirty:A(b,I)}))):R&&!R._f&&!ut(I)?oe(b,I,T):re(b,I,T),mv(b,l)&&d.state.next({}),d.watch.next({name:b})},be=async b=>{const C=b.target;let T=C.name;const R=Q(r,T);if(R){let U,I;const V=C.type?zc(R._f):U2(b),we=b.type===pv.BLUR||b.type===pv.FOCUS_OUT,de=!nM(R._f)&&!t.resolver&&!Q(n.errors,T)&&!R._f.deps||rM(we,Q(n.touchedFields,T),n.isSubmitted,v,g),wn=mv(T,l,we);ke(s,T,V),we?(R._f.onBlur&&R._f.onBlur(b),a&&a(0)):R._f.onChange&&R._f.onChange(b);const Sn=_(T,V,we,!1),bt=!Mt(Sn)||wn;if(!we&&d.watch.next({name:T,type:b.type}),de)return bt&&d.state.next({name:T,...wn?{}:Sn});if(!we&&wn&&d.state.next({}),c[T]=(c[T],1),d.state.next({isValidating:!0}),t.resolver){const{errors:ee}=await N([T]),Ie=xv(n.errors,r,T),ni=xv(ee,r,Ie.name||T);U=ni.error,T=ni.name,I=Mt(ee)}else U=(await Sv(R,Q(s,T),m,t.shouldUseNativeValidation))[T],I=await h(!0);R._f.deps&&F(R._f.deps),O(T,I,U,Sn)}},F=async(b,C={})=>{let T,R;const U=Lc(b);if(d.state.next({isValidating:!0}),t.resolver){const I=await P(Be(b)?b:U);T=Mt(I),R=b?!U.some(V=>Q(I,V)):T}else b?(R=(await Promise.all(U.map(async I=>{const V=Q(r,I);return await Y(V&&V._f?{[I]:V}:V)}))).every(Boolean),!(!R&&!n.isValid)&&h()):R=T=await Y(r);return d.state.next({...!fn(b)||f.isValid&&T!==n.isValid?{}:{name:b},...t.resolver||!b?{isValid:T}:{},errors:n.errors,isValidating:!1}),C.shouldFocus&&!R&&pf(r,I=>I&&Q(n.errors,I),b?U:l.mount),R},H=b=>{const C={...i,...o.mount?s:{}};return Be(b)?C:fn(b)?Q(C,b):b.map(T=>Q(C,T))},J=(b,C)=>({invalid:!!Q((C||n).errors,b),isDirty:!!Q((C||n).dirtyFields,b),isTouched:!!Q((C||n).touchedFields,b),error:Q((C||n).errors,b)}),ue=b=>{b?Lc(b).forEach(C=>ot(n.errors,C)):n.errors={},d.state.next({errors:n.errors})},j=(b,C,T)=>{const R=(Q(r,b,{_f:{}})._f||{}).ref;ke(n.errors,b,{...C,ref:R}),d.state.next({name:b,errors:n.errors,isValid:!1}),T&&T.shouldFocus&&R&&R.focus&&R.focus()},W=(b,C)=>Tl(b)?d.watch.subscribe({next:T=>b(D(void 0,C),T)}):D(b,C,!0),G=(b,C={})=>{for(const T of b?Lc(b):l.mount)l.mount.delete(T),l.array.delete(T),Q(r,T)&&(C.keepValue||(ot(r,T),ot(s,T)),!C.keepError&&ot(n.errors,T),!C.keepDirty&&ot(n.dirtyFields,T),!C.keepTouched&&ot(n.touchedFields,T),!t.shouldUnregister&&!C.keepDefaultValue&&ot(i,T));d.watch.next({}),d.state.next({...n,...C.keepDirty?{isDirty:A()}:{}}),!C.keepIsValid&&h()},Z=(b,C={})=>{let T=Q(r,b);const R=Il(C.disabled);return ke(r,b,{...T||{},_f:{...T&&T._f?T._f:{ref:{name:b}},name:b,mount:!0,...C}}),l.mount.add(b),T?R&&ke(s,b,C.disabled?void 0:Q(s,b,zc(T._f))):x(b,!0,C.value),{...R?{disabled:C.disabled}:{},...t.shouldUseNativeValidation?{required:!!C.required,min:ms(C.min),max:ms(C.max),minLength:ms(C.minLength),maxLength:ms(C.maxLength),pattern:ms(C.pattern)}:{},name:b,onChange:be,onBlur:be,ref:U=>{if(U){Z(b,C),T=Q(r,b);const I=Be(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,V=eM(I),we=T._f.refs||[];if(V?we.find(de=>de===I):I===T._f.ref)return;ke(r,b,{_f:{...T._f,...V?{refs:[...we.filter(Mc),I,...Array.isArray(Q(i,b))?[{}]:[]],ref:{type:I.type,name:b}}:{ref:I}}}),x(b,!1,void 0,I)}else T=Q(r,b,{}),T._f&&(T._f.mount=!1),(t.shouldUnregister||C.shouldUnregister)&&!(H2(l.array,b)&&o.action)&&l.unMount.add(b)}}},k=()=>t.shouldFocusError&&pf(r,b=>b&&Q(n.errors,b),l.mount),ie=(b,C)=>async T=>{T&&(T.preventDefault&&T.preventDefault(),T.persist&&T.persist());let R=!0,U=Ir(s);d.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:I,values:V}=await N();n.errors=I,U=V}else await Y(r);Mt(n.errors)?(d.state.next({errors:{},isSubmitting:!0}),await b(U,T)):(C&&await C({...n.errors},T),k())}catch(I){throw R=!1,I}finally{n.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mt(n.errors)&&R,submitCount:n.submitCount+1,errors:n.errors})}},B=(b,C={})=>{Q(r,b)&&(Be(C.defaultValue)?ye(b,Q(i,b)):(ye(b,C.defaultValue),ke(i,b,C.defaultValue)),C.keepTouched||ot(n.touchedFields,b),C.keepDirty||(ot(n.dirtyFields,b),n.isDirty=C.defaultValue?A(b,Q(i,b)):A()),C.keepError||(ot(n.errors,b),f.isValid&&h()),d.state.next({...n}))},_e=(b,C={})=>{const T=b||i,R=Ir(T),U=b&&!Mt(b)?R:i;if(C.keepDefaultValues||(i=T),!C.keepValues){if(C.keepDirtyValues)for(const I of l.mount)Q(n.dirtyFields,I)?ke(U,I,Q(s,I)):ye(I,Q(U,I));else{if(mf&&Be(b))for(const I of l.mount){const V=Q(r,I);if(V&&V._f){const we=Array.isArray(V._f.refs)?V._f.refs[0]:V._f.ref;try{if(gf(we)){we.closest("form").reset();break}}catch{}}}r={}}s=e.shouldUnregister?C.keepDefaultValues?Ir(i):{}:R,d.array.next({values:U}),d.watch.next({values:U})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!f.isValid||!!C.keepIsValid,o.watch=!!e.shouldUnregister,d.state.next({submitCount:C.keepSubmitCount?n.submitCount:0,isDirty:C.keepDirty||C.keepDirtyValues?n.isDirty:!!(C.keepDefaultValues&&!ki(b,i)),isSubmitted:C.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:C.keepDirty||C.keepDirtyValues?n.dirtyFields:C.keepDefaultValues&&b?Fc(i,b):{},touchedFields:C.keepTouched?n.touchedFields:{},errors:C.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Z,unregister:G,getFieldState:J,_executeSchema:N,_focusError:k,_getWatch:D,_getDirty:A,_updateValid:h,_removeUnmounted:$,_updateFieldArray:p,_getFieldArray:X,_subjects:d,_proxyFormState:f,get _fields(){return r},get _formValues(){return s},get _stateFlags(){return o},set _stateFlags(b){o=b},get _defaultValues(){return i},get _names(){return l},set _names(b){l=b},get _formState(){return n},set _formState(b){n=b},get _options(){return t},set _options(b){t={...t,...b}}},trigger:F,register:Z,handleSubmit:ie,watch:W,setValue:ye,getValues:H,reset:(b,C)=>_e(Tl(b)?b(s):b,C),resetField:B,clearErrors:ue,unregister:G,setError:j,setFocus:(b,C={})=>{const T=Q(r,b),R=T&&T._f;if(R){const U=R.refs?R.refs[0]:R.ref;U.focus&&(U.focus(),C.shouldSelect&&U.select())}},getFieldState:J}}function yp(e={}){const t=Ne.useRef(),[n,r]=Ne.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...oM(e),formState:n});const i=t.current.control;return i._options=e,q2({subject:i._subjects.state,callback:Ne.useCallback(s=>{G2(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))},[i])}),Ne.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),Ne.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),t.current.formState=W2(n,i),t.current}const Ev=()=>{const e=Jr(),t=M.exports.useRef(),n=yu(),{id:r}=H_(),{title:i,description:s,precio:o,imagen:l,isLoading:a}=xr(h=>h.productoActivo),u="https://res.cloudinary.com/dssccuwn8/image/upload/v1670096155/productos/icon-image-not-found-free-vector_abilre.jpg",c={title:"",precio:"",description:""},{register:f,handleSubmit:d,formState:{errors:g},setValue:v}=yp({defaultValues:c}),m=({target:h})=>{h.files!==0&&(e(MD()),e(BD(h.files)))},S=h=>{r||e(jD(h)),r&&e(VD(h)),setTimeout(()=>{n("/tienda")},1e3)};return M.exports.useEffect(()=>{r||e(IS())},[]),r&&(v("title",i),v("precio",o),v("description",s)),w(A2,{children:z(O2,{children:[w($2,{children:z(R2,{children:[w(L2,{}),z(N2,{children:[r?"Modificar":"Agregar"," producto"]})]})}),z(D2,{children:[w(M2,{children:z(F2,{onSubmit:d(S),children:[w(Nc,{children:"Titulo:"}),w(fv,{type:"text",placeholder:"ej. Tarjetas, Pack fotografia",...f("title",{required:!0})}),w(Nc,{children:"Precio:"}),w(fv,{type:"number",placeholder:"ej. 590000",min:0,...f("precio",{required:!0,validate:h=>h>0,valueAsNumber:!0})}),w(Nc,{children:"Descripci\xF3n:"}),w(z2,{type:"text",placeholder:"ej. Lo que contiene ese producto es una gran cantidad de trabajo honesto.",...f("description",{required:!0})}),w(hv,{disabled:a,children:"GUARDAR"})]})}),z(j2,{children:[w(B2,{src:l!=null?l:u}),w("input",{type:"file",ref:t,style:{display:"none"},onChange:m}),w(hv,{onClick:()=>t.current.click(),disabled:a,children:"SUBIR IMAGEN"})]})]})]})})},aM=E.main`
  align-items: center;
  background: fixed repeat center/2rem url(${Nu});
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 100%;
`,lM=E.div`
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
`,uM=E.div`
  /* background-color: aqua; */
  align-items: center;
  border-bottom: 2px solid #ddd;
  display: flex;
  height: 15%;
  width: 100%;
`,cM=E.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`,dM=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,fM=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin: 0 1rem 0 5rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,hM=E.div`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 85%;
  width: 100%;
`,pM=E.div`
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 55%;
`,mM=E.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
  width: 80%;
`,ca=E.p`
  font-size: 0.9rem;
`,da=E.div`
  /* background-color: aqua; */
  position: relative;

  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  }
`,fa=E.img`
  margin: 0.55rem 0 0 0.7rem;
  position: absolute;
  width: 1.2rem;
`,ha=E.input`
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
`;E.button`
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
`;const gM=E.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  height: 100%;
  width: 45%;
`,vM=E.div`
  border-radius: 50%;
  height: 72%;
  width: 72%;
  border: 1px solid green;

  @media screen and (max-width: 1366px) {
    width: 80%;
    height: 80%;
  }
`,yM=E.img`
  /* border-radius: 50%;
  height: 72%;
  width: 72%; */
  width: 100%;
  height: 100%;
`,wp="/assets/input_user.19c197df.svg",FS="/assets/input_mail.df93a727.svg",zS="/assets/input_map.ab586e34.svg",jS="/assets/input_phone.d06f5729.svg",wM=()=>{const{name:e,email:t,direccion:n,numberPhone:r,imagen:i}=xr(s=>s.auth);return w(aM,{children:z(lM,{children:[w(uM,{children:z(cM,{children:[w(fM,{}),w(dM,{children:"Perfil"})]})}),z(hM,{children:[w(pM,{children:z(mM,{children:[w(ca,{children:"Nombre:"}),z(da,{children:[w(fa,{src:wp}),w(ha,{type:"text",placeholder:e,disabled:!0})]}),w(ca,{children:"Correo:"}),z(da,{children:[w(fa,{src:FS}),w(ha,{type:"text",placeholder:t,disabled:!0})]}),w(ca,{children:"Direcci\xF3n:"}),z(da,{children:[w(fa,{src:zS}),w(ha,{type:"text",placeholder:n,disabled:!0})]}),w(ca,{children:"Telefono:"}),z(da,{children:[w(fa,{src:jS}),w(ha,{type:"number",placeholder:r,disabled:!0})]})]})}),w(gM,{children:w(vM,{children:w(yM,{src:i})})})]})]})})},SM="/assets/bg_wave_contact_main.fa1bc45b.svg",bM=E.div`
  background: fixed repeat center/2.5rem url(${Ru});
  height: 95vh;
  width: 100%;
`,xM=E.div`
  align-self: center;
  background: no-repeat center/cover url(${SM});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,EM=E.div`
  /* background-color: violet; */
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 50%;
`,_M=E.img`
  margin-top: 10%;
  width: 35rem;

  @media screen and (max-width: 1366px) {
    width: 28rem;
  }
`,kM=E.div`
  /* background-color: aqua; */
  height: 100%;
  width: 50%;
`,CM=E.div`
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 35%;
  width: auto;
`,TM=E.span`
  background-color: #1e1e1e;
  height: 2px;
  margin-right: 1rem;
  width: 8.5rem;

  @media screen and (max-width: 1366px) {
    width: 5rem;
  }
`,IM=E.h3`
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 1.8rem;
  }
`,PM=E.div`
  /* background-color: brown; */
  align-items: center;
  display: flex;
  height: auto;
  margin-top: 3rem;
  width: auto;

  @media screen and (max-width: 1366px) {
    margin-top: 2rem;
  }
`,AM=E.img`
  width: 2.5rem;

  @media screen and (max-width: 1366px) {
    width: 2rem;
  }
`,OM=E.p`
  font-size: 2rem;

  @media screen and (max-width: 1366px) {
    font-size: 1.5rem;
  }
`,BS=()=>w(bM,{children:z(xM,{children:[w(EM,{children:w(_M,{src:Ch})}),z(kM,{children:[z(CM,{children:[w(TM,{}),w(IM,{children:"Contacto"})]}),z(PM,{children:[w(AM,{src:oS}),w(OM,{children:": mail.contacto@lialopez.com"})]})]})]})}),$M=()=>{const{rol:e}=xr(t=>t.auth);return z(Eh,{children:[w(Ke,{path:"/",element:w(_S,{})}),w(Ke,{path:"/tienda",element:w(PS,{})}),w(Ke,{path:"/contacto",element:w(BS,{})}),w(Ke,{path:"/profile",element:w(wM,{})}),w(Ke,{path:"/carrito",element:w(a2,{})}),e==="Administrador"&&z(Ji,{children:[w(Ke,{path:"/agregar",element:w(Ev,{})}),w(Ke,{path:"/modificar/:id",element:w(Ev,{})})]}),w(Ke,{path:"/*",element:w(rw,{to:"/"})})]})},US="/assets/bg_wave_sign_in_up.bec4429c.svg",RM=E.div`
  background: fixed repeat center/2.5rem url(${Ru});
  height: 95vh;
  width: 100%;
`,NM=E.div`
  align-items: center;
  background: no-repeat center/cover url(${US});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,LM=E.div`
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
`,DM=E.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 2.8rem;
  font-weight: 400;
  margin: 10% 0;

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
    margin: 2rem 0;
  }
`,MM=E.form`
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-between;
  width: 80%;

  @media screen and (max-width: 1366px) {
    height: 65%;
  }
`,_v=E.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`,kv=E.img`
  margin-left: 0.7rem;
  position: absolute;
  width: 1.2rem;
`,Cv=E.input`
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
`,Tv=E.p`
  color: #ff2400;
  font-size: 0.7rem;
  margin-left: 0.8rem;
`,FM=E.span`
  background-color: #3772ff;
  height: 1px;
  opacity: 50%;
  width: 100%;
`,zM=`
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
`,jM=E.button`
  background-color: #71c2b1;
  border: none;
  color: #fff;
  ${zM}

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`,BM=E.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,jc=E.p`
  font-size: 0.9rem;
`,UM=E(Fn)`
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
`,vf="/assets/input_padlock.390ed22b.svg",VM={email:"",password:""},HM=()=>{const{status:e}=xr(l=>l.auth),t=Jr(),{register:n,handleSubmit:r,formState:{errors:i}}=yp({defaultForm:VM}),s=M.exports.useMemo(()=>e==="checking",[e]);return w(RM,{children:w(NM,{children:z(LM,{children:[w(DM,{children:"Iniciar sesi\xF3n"}),z(MM,{onSubmit:r(l=>{t(W$(l))}),children:[w(jc,{children:"Correo:"}),z(_v,{children:[w(kv,{src:wp}),w(Cv,{type:"email",placeholder:"example@lorem.com",...n("email",{required:{value:!0,message:"Necesitas este campo"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"El formato no es correcto"}})})]}),i.email&&w(Tv,{children:i.email.message}),w(jc,{children:"Contrase\xF1a:"}),z(_v,{children:[w(kv,{src:vf}),w(Cv,{type:"password",placeholder:"********",...n("password",{required:{value:!0,message:"El campo es requerido"},minLength:{value:8,message:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."}})})]}),i.password&&w(Tv,{children:i.password.message}),w(FM,{}),w(jM,{type:"submit",disabled:s,children:"Iniciar sesi\xF3n"}),z(BM,{children:[w(jc,{children:"\xBFNo tienes cuenta?"}),w(UM,{to:"/register",children:"Crear cuenta"})]})]})]})})})},WM=E.div`
  background: fixed repeat center/2.5rem url(${Ru});
  height: 95vh;
  width: 100%;
`,GM=E.div`
  align-items: center;
  background: no-repeat center/cover url(${US});
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`,qM=E.div`
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
`,KM=E.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  height: 20%;
  justify-content: center;
  width: 100%;
`,YM=E.h2`
  border-bottom: 2px solid #f8bfb3;
  font-size: 2.5rem;
  font-weight: 400;

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
  }
`,QM=E.form`
  /* background-color: aqua; */
  display: flex;
  flex-wrap: wrap;
  height: 70%;
  width: 100%;
`,XM=E.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  margin-left: 10%;
  width: 40%;
`,JM=E.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-evenly;
  margin-right: 5%;
  width: 45%;
`,ZM=E.div`
  /* background-color: yellow; */
  align-items: center;
  border-top: 1px solid #3772ff50;
  display: flex;
  height: 20%;
  margin: 0 5rem;
  padding: 0 20rem;
  width: 100%;
`,ai=E.div`
  /* background-color: aqua; */
  position: relative;

  @media screen and (max-width: 1366px) {
    margin-bottom: 0.5rem;
  }
`,li=E.img`
  margin: 0.55rem 0 0 0.7rem;
  position: absolute;
  width: 1.2rem;
`,ui=E.input`
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
`,Dt=E.p`
  color: ${e=>e.variant==="errorColor"?"#ff2400":"#868686"};
  font-size: 0.7rem;
  margin: 0.5rem 0 0 0.8rem;
`,e3=E.button`
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
`,t3=E.div`
  /* background-color: purple; */
  align-items: flex-start;
  display: flex;
  height: 10%;
  justify-content: center;
  width: 100%;
`,n3=E.div`
  align-items: center;
  display: flex;
  justify-content: center;
`,Er=E.p`
  font-size: 0.9rem;
`,r3=E(Fn)`
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
`,i3={email:"",password:"",name:"",direccion:"",numberPhone:"",confirmPassword:""},s3=()=>{const e=Jr(),{register:t,handleSubmit:n,formState:{errors:r}}=yp({defaultValues:i3});return w(WM,{children:w(GM,{children:z(qM,{children:[w(KM,{children:w(YM,{children:"Crear cuenta"})}),z(QM,{onSubmit:n(s=>{if(s.password!==s.confirmPassword)return alert("Las contrase\xF1as deben coincidir.");e(V$(s))}),children:[z(XM,{children:[w(Er,{children:"Nombre:"}),z(ai,{children:[w(li,{src:wp}),w(ui,{type:"text",placeholder:"Nombre completo",...t("name",{required:!0})}),r.name?w(Dt,{variant:"errorColor",children:"El nombre es obligatorio."}):w(Dt,{children:"El nombre es obligatorio."})]}),w(Er,{children:"Correo:"}),z(ai,{children:[w(li,{src:FS}),w(ui,{type:"email",placeholder:"example@lorem.com",...t("email",{required:!0})}),r.email?w(Dt,{variant:"errorColor",children:"El correo debe contener un @."}):w(Dt,{children:"El correo debe contener un @."})]}),w(Er,{children:"Contrase\xF1a:"}),z(ai,{children:[w(li,{src:vf}),w(ui,{type:"password",placeholder:"********",...t("password",{required:!0,minLength:8})}),r.password?w(Dt,{variant:"errorColor",children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."}):w(Dt,{children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."})]})]}),z(JM,{children:[w(Er,{children:"Direccion:"}),z(ai,{children:[w(li,{src:zS}),w(ui,{type:"text",placeholder:"ej. Example villa sol #123",...t("direccion",{required:!0})}),r.direccion?w(Dt,{variant:"errorColor",children:"La direcci\xF3n es obligatoria."}):w(Dt,{children:"La direcci\xF3n es obligatoria."})]}),w(Er,{children:"Numero telefonico:"}),z(ai,{children:[w(li,{src:jS}),w(ui,{type:"number",placeholder:"912345678",...t("numberPhone",{required:!0})}),r.numberPhone?w(Dt,{variant:"errorColor",children:"El n\xFAmero es obligatorio."}):w(Dt,{children:"El n\xFAmero es obligatorio."})]}),w(Er,{children:"Confirmar contrase\xF1a:"}),z(ai,{children:[w(li,{src:vf}),w(ui,{type:"password",placeholder:"********",...t("confirmPassword",{required:!0,minLength:8})}),r.confirmPassword?w(Dt,{variant:"errorColor",children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."}):w(Dt,{children:"La contrase\xF1a debe tener m\xEDnimo de 8 car\xE1cteres."})]})]}),w(ZM,{children:w(e3,{type:"submit",children:"Crear cuenta"})})]}),w(t3,{children:z(n3,{children:[w(Er,{children:"\xBFYa tienes cuenta?"}),w(r3,{to:"/login",children:"Iniciar sesi\xF3n"})]})})]})})})},o3=()=>z(Eh,{children:[w(Ke,{path:"/",element:w(_S,{})}),w(Ke,{path:"/tienda",element:w(PS,{})}),w(Ke,{path:"/contacto",element:w(BS,{})}),w(Ke,{path:"/login",element:w(HM,{})}),w(Ke,{path:"/register",element:w(s3,{})}),w(Ke,{path:"/*",element:w(rw,{to:"/login"})})]}),a3=()=>{const e=WD();return e==="checking"?w(Q$,{}):w(Eh,{children:e==="authenticated"?w(Ke,{path:"/*",element:w($M,{})}):w(Ke,{path:"/*",element:w(o3,{})})})},l3=E.div`
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
`,u3=E(Fn)`
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
`,c3="/assets/carrito.2ba7b0c0.svg",d3=()=>w(l3,{children:w(u3,{to:"/carrito",children:w("img",{src:c3})})}),f3=()=>z(Ji,{children:[w(q$,{}),w(a3,{}),w(d3,{}),w(Gk,{})]});Uc.createRoot(document.getElementById("root")).render(w(Ne.StrictMode,{children:w(r_,{store:HD,children:w(rk,{children:w(f3,{})})})}));
