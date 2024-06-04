"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const y=require("react"),j=require("styled-components"),ti=require("react-i18next"),Vr=require("i18next");var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tr={exports:{}},dt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cn;function ri(){if(cn)return dt;cn=1;var e=y,t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(l,c,d){var m,v={},p=null,b=null;d!==void 0&&(p=""+d),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(b=c.ref);for(m in c)r.call(c,m)&&!o.hasOwnProperty(m)&&(v[m]=c[m]);if(l&&l.defaultProps)for(m in c=l.defaultProps,c)v[m]===void 0&&(v[m]=c[m]);return{$$typeof:t,type:l,key:p,ref:b,props:v,_owner:n.current}}return dt.Fragment=a,dt.jsx=s,dt.jsxs=s,dt}var ft={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var un;function ni(){return un||(un=1,process.env.NODE_ENV!=="production"&&function(){var e=y,t=Symbol.for("react.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),u=Symbol.iterator,f="@@iterator";function g(h){if(h===null||typeof h!="object")return null;var P=u&&h[u]||h[f];return typeof P=="function"?P:null}var x=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function T(h){{for(var P=arguments.length,I=new Array(P>1?P-1:0),ee=1;ee<P;ee++)I[ee-1]=arguments[ee];k("error",h,I)}}function k(h,P,I){{var ee=x.ReactDebugCurrentFrame,oe=ee.getStackAddendum();oe!==""&&(P+="%s",I=I.concat([oe]));var W=I.map(function(H){return String(H)});W.unshift("Warning: "+P),Function.prototype.apply.call(console[h],console,W)}}var E=!1,C=!1,N=!1,L=!1,Q=!1,re;re=Symbol.for("react.module.reference");function G(h){return!!(typeof h=="string"||typeof h=="function"||h===r||h===o||Q||h===n||h===d||h===m||L||h===b||E||C||N||typeof h=="object"&&h!==null&&(h.$$typeof===p||h.$$typeof===v||h.$$typeof===s||h.$$typeof===l||h.$$typeof===c||h.$$typeof===re||h.getModuleId!==void 0))}function F(h,P,I){var ee=h.displayName;if(ee)return ee;var oe=P.displayName||P.name||"";return oe!==""?I+"("+oe+")":I}function $(h){return h.displayName||"Context"}function w(h){if(h==null)return null;if(typeof h.tag=="number"&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof h=="function")return h.displayName||h.name||null;if(typeof h=="string")return h;switch(h){case r:return"Fragment";case a:return"Portal";case o:return"Profiler";case n:return"StrictMode";case d:return"Suspense";case m:return"SuspenseList"}if(typeof h=="object")switch(h.$$typeof){case l:var P=h;return $(P)+".Consumer";case s:var I=h;return $(I._context)+".Provider";case c:return F(h,h.render,"ForwardRef");case v:var ee=h.displayName||null;return ee!==null?ee:w(h.type)||"Memo";case p:{var oe=h,W=oe._payload,H=oe._init;try{return w(H(W))}catch{return null}}}return null}var O=Object.assign,D=0,R,_,z,ie,S,A,V;function Z(){}Z.__reactDisabledLog=!0;function U(){{if(D===0){R=console.log,_=console.info,z=console.warn,ie=console.error,S=console.group,A=console.groupCollapsed,V=console.groupEnd;var h={configurable:!0,enumerable:!0,value:Z,writable:!0};Object.defineProperties(console,{info:h,log:h,warn:h,error:h,group:h,groupCollapsed:h,groupEnd:h})}D++}}function X(){{if(D--,D===0){var h={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:O({},h,{value:R}),info:O({},h,{value:_}),warn:O({},h,{value:z}),error:O({},h,{value:ie}),group:O({},h,{value:S}),groupCollapsed:O({},h,{value:A}),groupEnd:O({},h,{value:V})})}D<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var K=x.ReactCurrentDispatcher,B;function J(h,P,I){{if(B===void 0)try{throw Error()}catch(oe){var ee=oe.stack.trim().match(/\n( *(at )?)/);B=ee&&ee[1]||""}return`
`+B+h}}var q=!1,te;{var fe=typeof WeakMap=="function"?WeakMap:Map;te=new fe}function M(h,P){if(!h||q)return"";{var I=te.get(h);if(I!==void 0)return I}var ee;q=!0;var oe=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var W;W=K.current,K.current=null,U();try{if(P){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(_e){ee=_e}Reflect.construct(h,[],H)}else{try{H.call()}catch(_e){ee=_e}h.call(H.prototype)}}else{try{throw Error()}catch(_e){ee=_e}h()}}catch(_e){if(_e&&ee&&typeof _e.stack=="string"){for(var Y=_e.stack.split(`
`),ue=ee.stack.split(`
`),ne=Y.length-1,he=ue.length-1;ne>=1&&he>=0&&Y[ne]!==ue[he];)he--;for(;ne>=1&&he>=0;ne--,he--)if(Y[ne]!==ue[he]){if(ne!==1||he!==1)do if(ne--,he--,he<0||Y[ne]!==ue[he]){var pe=`
`+Y[ne].replace(" at new "," at ");return h.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",h.displayName)),typeof h=="function"&&te.set(h,pe),pe}while(ne>=1&&he>=0);break}}}finally{q=!1,K.current=W,X(),Error.prepareStackTrace=oe}var Ne=h?h.displayName||h.name:"",sn=Ne?J(Ne):"";return typeof h=="function"&&te.set(h,sn),sn}function ge(h,P,I){return M(h,!1)}function ce(h){var P=h.prototype;return!!(P&&P.isReactComponent)}function we(h,P,I){if(h==null)return"";if(typeof h=="function")return M(h,ce(h));if(typeof h=="string")return J(h);switch(h){case d:return J("Suspense");case m:return J("SuspenseList")}if(typeof h=="object")switch(h.$$typeof){case c:return ge(h.render);case v:return we(h.type,P,I);case p:{var ee=h,oe=ee._payload,W=ee._init;try{return we(W(oe),P,I)}catch{}}}return""}var xe=Object.prototype.hasOwnProperty,$e={},rt=x.ReactDebugCurrentFrame;function Le(h){if(h){var P=h._owner,I=we(h.type,h._source,P?P.type:null);rt.setExtraStackFrame(I)}else rt.setExtraStackFrame(null)}function ir(h,P,I,ee,oe){{var W=Function.call.bind(xe);for(var H in h)if(W(h,H)){var Y=void 0;try{if(typeof h[H]!="function"){var ue=Error((ee||"React class")+": "+I+" type `"+H+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof h[H]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw ue.name="Invariant Violation",ue}Y=h[H](P,H,ee,I,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(ne){Y=ne}Y&&!(Y instanceof Error)&&(Le(oe),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",ee||"React class",I,H,typeof Y),Le(null)),Y instanceof Error&&!(Y.message in $e)&&($e[Y.message]=!0,Le(oe),T("Failed %s type: %s",I,Y.message),Le(null))}}}var or=Array.isArray;function nt(h){return or(h)}function Tt(h){{var P=typeof Symbol=="function"&&Symbol.toStringTag,I=P&&h[Symbol.toStringTag]||h.constructor.name||"Object";return I}}function lr(h){try{return Et(h),!1}catch{return!0}}function Et(h){return""+h}function Ot(h){if(lr(h))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Tt(h)),Et(h)}var We=x.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0},He,at,Ye;Ye={};function cr(h){if(xe.call(h,"ref")){var P=Object.getOwnPropertyDescriptor(h,"ref").get;if(P&&P.isReactWarning)return!1}return h.ref!==void 0}function Ge(h){if(xe.call(h,"key")){var P=Object.getOwnPropertyDescriptor(h,"key").get;if(P&&P.isReactWarning)return!1}return h.key!==void 0}function Dt(h,P){if(typeof h.ref=="string"&&We.current&&P&&We.current.stateNode!==P){var I=w(We.current.type);Ye[I]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',w(We.current.type),h.ref),Ye[I]=!0)}}function ur(h,P){{var I=function(){He||(He=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",P))};I.isReactWarning=!0,Object.defineProperty(h,"key",{get:I,configurable:!0})}}function _t(h,P){{var I=function(){at||(at=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",P))};I.isReactWarning=!0,Object.defineProperty(h,"ref",{get:I,configurable:!0})}}var Pt=function(h,P,I,ee,oe,W,H){var Y={$$typeof:t,type:h,key:P,ref:I,props:H,_owner:W};return Y._store={},Object.defineProperty(Y._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Y,"_self",{configurable:!1,enumerable:!1,writable:!1,value:ee}),Object.defineProperty(Y,"_source",{configurable:!1,enumerable:!1,writable:!1,value:oe}),Object.freeze&&(Object.freeze(Y.props),Object.freeze(Y)),Y};function it(h,P,I,ee,oe){{var W,H={},Y=null,ue=null;I!==void 0&&(Ot(I),Y=""+I),Ge(P)&&(Ot(P.key),Y=""+P.key),cr(P)&&(ue=P.ref,Dt(P,oe));for(W in P)xe.call(P,W)&&!sr.hasOwnProperty(W)&&(H[W]=P[W]);if(h&&h.defaultProps){var ne=h.defaultProps;for(W in ne)H[W]===void 0&&(H[W]=ne[W])}if(Y||ue){var he=typeof h=="function"?h.displayName||h.name||"Unknown":h;Y&&ur(H,he),ue&&_t(H,he)}return Pt(h,Y,ue,oe,ee,We.current,H)}}var ot=x.ReactCurrentOwner,lt=x.ReactDebugCurrentFrame;function Re(h){if(h){var P=h._owner,I=we(h.type,h._source,P?P.type:null);lt.setExtraStackFrame(I)}else lt.setExtraStackFrame(null)}var Ue;Ue=!1;function ye(h){return typeof h=="object"&&h!==null&&h.$$typeof===t}function be(){{if(ot.current){var h=w(ot.current.type);if(h)return`

Check the render method of \``+h+"`."}return""}}function Qe(h){return""}var de={};function Ce(h){{var P=be();if(!P){var I=typeof h=="string"?h:h.displayName||h.name;I&&(P=`

Check the top-level render call using <`+I+">.")}return P}}function Rt(h,P){{if(!h._store||h._store.validated||h.key!=null)return;h._store.validated=!0;var I=Ce(P);if(de[I])return;de[I]=!0;var ee="";h&&h._owner&&h._owner!==ot.current&&(ee=" It was passed a child from "+w(h._owner.type)+"."),Re(h),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',I,ee),Re(null)}}function Ze(h,P){{if(typeof h!="object")return;if(nt(h))for(var I=0;I<h.length;I++){var ee=h[I];ye(ee)&&Rt(ee,P)}else if(ye(h))h._store&&(h._store.validated=!0);else if(h){var oe=g(h);if(typeof oe=="function"&&oe!==h.entries)for(var W=oe.call(h),H;!(H=W.next()).done;)ye(H.value)&&Rt(H.value,P)}}}function Nt(h){{var P=h.type;if(P==null||typeof P=="string")return;var I;if(typeof P=="function")I=P.propTypes;else if(typeof P=="object"&&(P.$$typeof===c||P.$$typeof===v))I=P.propTypes;else return;if(I){var ee=w(P);ir(I,h.props,"prop",ee,h)}else if(P.PropTypes!==void 0&&!Ue){Ue=!0;var oe=w(P);T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",oe||"Unknown")}typeof P.getDefaultProps=="function"&&!P.getDefaultProps.isReactClassApproved&&T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function At(h){{for(var P=Object.keys(h.props),I=0;I<P.length;I++){var ee=P[I];if(ee!=="children"&&ee!=="key"){Re(h),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",ee),Re(null);break}}h.ref!==null&&(Re(h),T("Invalid attribute `ref` supplied to `React.Fragment`."),Re(null))}}function Ke(h,P,I,ee,oe,W){{var H=G(h);if(!H){var Y="";(h===void 0||typeof h=="object"&&h!==null&&Object.keys(h).length===0)&&(Y+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var ue=Qe();ue?Y+=ue:Y+=be();var ne;h===null?ne="null":nt(h)?ne="array":h!==void 0&&h.$$typeof===t?(ne="<"+(w(h.type)||"Unknown")+" />",Y=" Did you accidentally export a JSX literal instead of a component?"):ne=typeof h,T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",ne,Y)}var he=it(h,P,I,oe,W);if(he==null)return he;if(H){var pe=P.children;if(pe!==void 0)if(ee)if(nt(pe)){for(var Ne=0;Ne<pe.length;Ne++)Ze(pe[Ne],h);Object.freeze&&Object.freeze(pe)}else T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ze(pe,h)}return h===r?At(he):Nt(he),he}}function Je(h,P,I){return Ke(h,P,I,!0)}function st(h,P,I){return Ke(h,P,I,!1)}var ct=st,ut=Je;ft.Fragment=r,ft.jsx=ct,ft.jsxs=ut}()),ft}process.env.NODE_ENV==="production"?Tr.exports=ri():Tr.exports=ni();var i=Tr.exports,Ft={exports:{}},It={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn;function ai(){if(dn)return le;dn=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,u=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function k(C){if(typeof C=="object"&&C!==null){var N=C.$$typeof;switch(N){case t:switch(C=C.type,C){case c:case d:case r:case o:case n:case v:return C;default:switch(C=C&&C.$$typeof,C){case l:case m:case u:case b:case s:return C;default:return N}}case a:return N}}}function E(C){return k(C)===d}return le.AsyncMode=c,le.ConcurrentMode=d,le.ContextConsumer=l,le.ContextProvider=s,le.Element=t,le.ForwardRef=m,le.Fragment=r,le.Lazy=u,le.Memo=b,le.Portal=a,le.Profiler=o,le.StrictMode=n,le.Suspense=v,le.isAsyncMode=function(C){return E(C)||k(C)===c},le.isConcurrentMode=E,le.isContextConsumer=function(C){return k(C)===l},le.isContextProvider=function(C){return k(C)===s},le.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===t},le.isForwardRef=function(C){return k(C)===m},le.isFragment=function(C){return k(C)===r},le.isLazy=function(C){return k(C)===u},le.isMemo=function(C){return k(C)===b},le.isPortal=function(C){return k(C)===a},le.isProfiler=function(C){return k(C)===o},le.isStrictMode=function(C){return k(C)===n},le.isSuspense=function(C){return k(C)===v},le.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===r||C===d||C===o||C===n||C===v||C===p||typeof C=="object"&&C!==null&&(C.$$typeof===u||C.$$typeof===b||C.$$typeof===s||C.$$typeof===l||C.$$typeof===m||C.$$typeof===g||C.$$typeof===x||C.$$typeof===T||C.$$typeof===f)},le.typeOf=k,le}var se={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fn;function ii(){return fn||(fn=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,a=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,u=e?Symbol.for("react.lazy"):60116,f=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,x=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function k(M){return typeof M=="string"||typeof M=="function"||M===r||M===d||M===o||M===n||M===v||M===p||typeof M=="object"&&M!==null&&(M.$$typeof===u||M.$$typeof===b||M.$$typeof===s||M.$$typeof===l||M.$$typeof===m||M.$$typeof===g||M.$$typeof===x||M.$$typeof===T||M.$$typeof===f)}function E(M){if(typeof M=="object"&&M!==null){var ge=M.$$typeof;switch(ge){case t:var ce=M.type;switch(ce){case c:case d:case r:case o:case n:case v:return ce;default:var we=ce&&ce.$$typeof;switch(we){case l:case m:case u:case b:case s:return we;default:return ge}}case a:return ge}}}var C=c,N=d,L=l,Q=s,re=t,G=m,F=r,$=u,w=b,O=a,D=o,R=n,_=v,z=!1;function ie(M){return z||(z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),S(M)||E(M)===c}function S(M){return E(M)===d}function A(M){return E(M)===l}function V(M){return E(M)===s}function Z(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function U(M){return E(M)===m}function X(M){return E(M)===r}function K(M){return E(M)===u}function B(M){return E(M)===b}function J(M){return E(M)===a}function q(M){return E(M)===o}function te(M){return E(M)===n}function fe(M){return E(M)===v}se.AsyncMode=C,se.ConcurrentMode=N,se.ContextConsumer=L,se.ContextProvider=Q,se.Element=re,se.ForwardRef=G,se.Fragment=F,se.Lazy=$,se.Memo=w,se.Portal=O,se.Profiler=D,se.StrictMode=R,se.Suspense=_,se.isAsyncMode=ie,se.isConcurrentMode=S,se.isContextConsumer=A,se.isContextProvider=V,se.isElement=Z,se.isForwardRef=U,se.isFragment=X,se.isLazy=K,se.isMemo=B,se.isPortal=J,se.isProfiler=q,se.isStrictMode=te,se.isSuspense=fe,se.isValidElementType=k,se.typeOf=E}()),se}var hn;function Xn(){return hn||(hn=1,process.env.NODE_ENV==="production"?It.exports=ai():It.exports=ii()),It.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var dr,mn;function oi(){if(mn)return dr;mn=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function r(o){if(o==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(o)}function n(){try{if(!Object.assign)return!1;var o=new String("abc");if(o[5]="de",Object.getOwnPropertyNames(o)[0]==="5")return!1;for(var s={},l=0;l<10;l++)s["_"+String.fromCharCode(l)]=l;var c=Object.getOwnPropertyNames(s).map(function(m){return s[m]});if(c.join("")!=="0123456789")return!1;var d={};return"abcdefghijklmnopqrst".split("").forEach(function(m){d[m]=m}),Object.keys(Object.assign({},d)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return dr=n()?Object.assign:function(o,s){for(var l,c=r(o),d,m=1;m<arguments.length;m++){l=Object(arguments[m]);for(var v in l)t.call(l,v)&&(c[v]=l[v]);if(e){d=e(l);for(var p=0;p<d.length;p++)a.call(l,d[p])&&(c[d[p]]=l[d[p]])}}return c},dr}var fr,gn;function Hr(){if(gn)return fr;gn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fr=e,fr}var hr,vn;function qn(){return vn||(vn=1,hr=Function.call.bind(Object.prototype.hasOwnProperty)),hr}var mr,yn;function li(){if(yn)return mr;yn=1;var e=function(){};if(process.env.NODE_ENV!=="production"){var t=Hr(),a={},r=qn();e=function(o){var s="Warning: "+o;typeof console<"u"&&console.error(s);try{throw new Error(s)}catch{}}}function n(o,s,l,c,d){if(process.env.NODE_ENV!=="production"){for(var m in o)if(r(o,m)){var v;try{if(typeof o[m]!="function"){var p=Error((c||"React class")+": "+l+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}v=o[m](s,m,c,l,null,t)}catch(u){v=u}if(v&&!(v instanceof Error)&&e((c||"React class")+": type specification of "+l+" `"+m+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof v+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),v instanceof Error&&!(v.message in a)){a[v.message]=!0;var b=d?d():"";e("Failed "+l+" type: "+v.message+(b??""))}}}}return n.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(a={})},mr=n,mr}var gr,xn;function si(){if(xn)return gr;xn=1;var e=Xn(),t=oi(),a=Hr(),r=qn(),n=li(),o=function(){};process.env.NODE_ENV!=="production"&&(o=function(l){var c="Warning: "+l;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}});function s(){return null}return gr=function(l,c){var d=typeof Symbol=="function"&&Symbol.iterator,m="@@iterator";function v(S){var A=S&&(d&&S[d]||S[m]);if(typeof A=="function")return A}var p="<<anonymous>>",b={array:x("array"),bigint:x("bigint"),bool:x("boolean"),func:x("function"),number:x("number"),object:x("object"),string:x("string"),symbol:x("symbol"),any:T(),arrayOf:k,element:E(),elementType:C(),instanceOf:N,node:G(),objectOf:Q,oneOf:L,oneOfType:re,shape:$,exact:w};function u(S,A){return S===A?S!==0||1/S===1/A:S!==S&&A!==A}function f(S,A){this.message=S,this.data=A&&typeof A=="object"?A:{},this.stack=""}f.prototype=Error.prototype;function g(S){if(process.env.NODE_ENV!=="production")var A={},V=0;function Z(X,K,B,J,q,te,fe){if(J=J||p,te=te||B,fe!==a){if(c){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var ge=J+":"+B;!A[ge]&&V<3&&(o("You are manually calling a React.PropTypes validation function for the `"+te+"` prop on `"+J+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),A[ge]=!0,V++)}}return K[B]==null?X?K[B]===null?new f("The "+q+" `"+te+"` is marked as required "+("in `"+J+"`, but its value is `null`.")):new f("The "+q+" `"+te+"` is marked as required in "+("`"+J+"`, but its value is `undefined`.")):null:S(K,B,J,q,te)}var U=Z.bind(null,!1);return U.isRequired=Z.bind(null,!0),U}function x(S){function A(V,Z,U,X,K,B){var J=V[Z],q=R(J);if(q!==S){var te=_(J);return new f("Invalid "+X+" `"+K+"` of type "+("`"+te+"` supplied to `"+U+"`, expected ")+("`"+S+"`."),{expectedType:S})}return null}return g(A)}function T(){return g(s)}function k(S){function A(V,Z,U,X,K){if(typeof S!="function")return new f("Property `"+K+"` of component `"+U+"` has invalid PropType notation inside arrayOf.");var B=V[Z];if(!Array.isArray(B)){var J=R(B);return new f("Invalid "+X+" `"+K+"` of type "+("`"+J+"` supplied to `"+U+"`, expected an array."))}for(var q=0;q<B.length;q++){var te=S(B,q,U,X,K+"["+q+"]",a);if(te instanceof Error)return te}return null}return g(A)}function E(){function S(A,V,Z,U,X){var K=A[V];if(!l(K)){var B=R(K);return new f("Invalid "+U+" `"+X+"` of type "+("`"+B+"` supplied to `"+Z+"`, expected a single ReactElement."))}return null}return g(S)}function C(){function S(A,V,Z,U,X){var K=A[V];if(!e.isValidElementType(K)){var B=R(K);return new f("Invalid "+U+" `"+X+"` of type "+("`"+B+"` supplied to `"+Z+"`, expected a single ReactElement type."))}return null}return g(S)}function N(S){function A(V,Z,U,X,K){if(!(V[Z]instanceof S)){var B=S.name||p,J=ie(V[Z]);return new f("Invalid "+X+" `"+K+"` of type "+("`"+J+"` supplied to `"+U+"`, expected ")+("instance of `"+B+"`."))}return null}return g(A)}function L(S){if(!Array.isArray(S))return process.env.NODE_ENV!=="production"&&(arguments.length>1?o("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):o("Invalid argument supplied to oneOf, expected an array.")),s;function A(V,Z,U,X,K){for(var B=V[Z],J=0;J<S.length;J++)if(u(B,S[J]))return null;var q=JSON.stringify(S,function(fe,M){var ge=_(M);return ge==="symbol"?String(M):M});return new f("Invalid "+X+" `"+K+"` of value `"+String(B)+"` "+("supplied to `"+U+"`, expected one of "+q+"."))}return g(A)}function Q(S){function A(V,Z,U,X,K){if(typeof S!="function")return new f("Property `"+K+"` of component `"+U+"` has invalid PropType notation inside objectOf.");var B=V[Z],J=R(B);if(J!=="object")return new f("Invalid "+X+" `"+K+"` of type "+("`"+J+"` supplied to `"+U+"`, expected an object."));for(var q in B)if(r(B,q)){var te=S(B,q,U,X,K+"."+q,a);if(te instanceof Error)return te}return null}return g(A)}function re(S){if(!Array.isArray(S))return process.env.NODE_ENV!=="production"&&o("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var A=0;A<S.length;A++){var V=S[A];if(typeof V!="function")return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+z(V)+" at index "+A+"."),s}function Z(U,X,K,B,J){for(var q=[],te=0;te<S.length;te++){var fe=S[te],M=fe(U,X,K,B,J,a);if(M==null)return null;M.data&&r(M.data,"expectedType")&&q.push(M.data.expectedType)}var ge=q.length>0?", expected one of type ["+q.join(", ")+"]":"";return new f("Invalid "+B+" `"+J+"` supplied to "+("`"+K+"`"+ge+"."))}return g(Z)}function G(){function S(A,V,Z,U,X){return O(A[V])?null:new f("Invalid "+U+" `"+X+"` supplied to "+("`"+Z+"`, expected a ReactNode."))}return g(S)}function F(S,A,V,Z,U){return new f((S||"React class")+": "+A+" type `"+V+"."+Z+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+U+"`.")}function $(S){function A(V,Z,U,X,K){var B=V[Z],J=R(B);if(J!=="object")return new f("Invalid "+X+" `"+K+"` of type `"+J+"` "+("supplied to `"+U+"`, expected `object`."));for(var q in S){var te=S[q];if(typeof te!="function")return F(U,X,K,q,_(te));var fe=te(B,q,U,X,K+"."+q,a);if(fe)return fe}return null}return g(A)}function w(S){function A(V,Z,U,X,K){var B=V[Z],J=R(B);if(J!=="object")return new f("Invalid "+X+" `"+K+"` of type `"+J+"` "+("supplied to `"+U+"`, expected `object`."));var q=t({},V[Z],S);for(var te in q){var fe=S[te];if(r(S,te)&&typeof fe!="function")return F(U,X,K,te,_(fe));if(!fe)return new f("Invalid "+X+" `"+K+"` key `"+te+"` supplied to `"+U+"`.\nBad object: "+JSON.stringify(V[Z],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(S),null,"  "));var M=fe(B,te,U,X,K+"."+te,a);if(M)return M}return null}return g(A)}function O(S){switch(typeof S){case"number":case"string":case"undefined":return!0;case"boolean":return!S;case"object":if(Array.isArray(S))return S.every(O);if(S===null||l(S))return!0;var A=v(S);if(A){var V=A.call(S),Z;if(A!==S.entries){for(;!(Z=V.next()).done;)if(!O(Z.value))return!1}else for(;!(Z=V.next()).done;){var U=Z.value;if(U&&!O(U[1]))return!1}}else return!1;return!0;default:return!1}}function D(S,A){return S==="symbol"?!0:A?A["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&A instanceof Symbol:!1}function R(S){var A=typeof S;return Array.isArray(S)?"array":S instanceof RegExp?"object":D(A,S)?"symbol":A}function _(S){if(typeof S>"u"||S===null)return""+S;var A=R(S);if(A==="object"){if(S instanceof Date)return"date";if(S instanceof RegExp)return"regexp"}return A}function z(S){var A=_(S);switch(A){case"array":case"object":return"an "+A;case"boolean":case"date":case"regexp":return"a "+A;default:return A}}function ie(S){return!S.constructor||!S.constructor.name?p:S.constructor.name}return b.checkPropTypes=n,b.resetWarningCache=n.resetWarningCache,b.PropTypes=b,b},gr}var vr,bn;function ci(){if(bn)return vr;bn=1;var e=Hr();function t(){}function a(){}return a.resetWarningCache=t,vr=function(){function r(s,l,c,d,m,v){if(v!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function n(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:t};return o.PropTypes=o,o},vr}var pn;function ui(){if(pn)return Ft.exports;if(pn=1,process.env.NODE_ENV!=="production"){var e=Xn(),t=!0;Ft.exports=si()(e.isElement,t)}else Ft.exports=ci()();return Ft.exports}var di=function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(r,n,o){a.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:o})},a.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,n){if(1&n&&(r=a(r)),8&n||4&n&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&n&&typeof r!="string")for(var s in r)a.d(o,s,(function(l){return r[l]}).bind(null,s));return o},a.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(n,"a",n),n},a.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},a.p="",a(a.s=2)}([function(e,t){e.exports=ui()},function(e,t){e.exports=y},function(e,t,a){a.r(t);var r=a(1),n=a(0),o=function(){return(o=Object.assign||function(u){for(var f,g=1,x=arguments.length;g<x;g++)for(var T in f=arguments[g])Object.prototype.hasOwnProperty.call(f,T)&&(u[T]=f[T]);return u}).apply(this,arguments)},s=function(u,f){var g={};for(var x in u)Object.prototype.hasOwnProperty.call(u,x)&&f.indexOf(x)<0&&(g[x]=u[x]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var T=0;for(x=Object.getOwnPropertySymbols(u);T<x.length;T++)f.indexOf(x[T])<0&&Object.prototype.propertyIsEnumerable.call(u,x[T])&&(g[x[T]]=u[x[T]])}return g},l=0,c=r.forwardRef(function(u,f){var g=u.title,x=g===void 0?null:g,T=u.description,k=T===void 0?null:T,E=u.size,C=E===void 0?null:E,N=u.color,L=N===void 0?"currentColor":N,Q=u.horizontal,re=Q===void 0?null:Q,G=u.vertical,F=G===void 0?null:G,$=u.rotate,w=$===void 0?null:$,O=u.spin,D=O===void 0?null:O,R=u.style,_=R===void 0?{}:R,z=u.children,ie=s(u,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);l++;var S,A=D!==null&&D,V=r.Children.map(z,function(K){var B=K;A!==!0&&(A=(D===null?B.props.spin:D)===!0);var J=B.props.size;typeof C=="number"&&typeof B.props.size=="number"&&(J=B.props.size/C);var q={size:J,color:L===null?B.props.color:L,horizontal:re===null?B.props.horizontal:re,vertical:F===null?B.props.vertical:F,rotate:w===null?B.props.rotate:w,spin:D===null?B.props.spin:D,inStack:!0};return r.cloneElement(B,q)});C!==null&&(_.width=typeof C=="string"?C:1.5*C+"rem");var Z,U="stack_labelledby_"+l,X="stack_describedby_"+l;if(x)S=k?U+" "+X:U;else if(Z="presentation",k)throw new Error("title attribute required when description is set");return r.createElement("svg",o({ref:f,viewBox:"0 0 24 24",style:_,role:Z,"aria-labelledby":S},ie),x&&r.createElement("title",{id:U},x),k&&r.createElement("desc",{id:X},k),A&&r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),V)});c.displayName="Stack",c.propTypes={size:n.oneOfType([n.number,n.string]),color:n.string,horizontal:n.bool,vertical:n.bool,rotate:n.number,spin:n.oneOfType([n.bool,n.number]),children:n.oneOfType([n.arrayOf(n.node),n.node]).isRequired,className:n.string,style:n.object},c.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var d=c;a.d(t,"Icon",function(){return b}),a.d(t,"Stack",function(){return d});var m=function(){return(m=Object.assign||function(u){for(var f,g=1,x=arguments.length;g<x;g++)for(var T in f=arguments[g])Object.prototype.hasOwnProperty.call(f,T)&&(u[T]=f[T]);return u}).apply(this,arguments)},v=function(u,f){var g={};for(var x in u)Object.prototype.hasOwnProperty.call(u,x)&&f.indexOf(x)<0&&(g[x]=u[x]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function"){var T=0;for(x=Object.getOwnPropertySymbols(u);T<x.length;T++)f.indexOf(x[T])<0&&Object.prototype.propertyIsEnumerable.call(u,x[T])&&(g[x[T]]=u[x[T]])}return g},p=0,b=r.forwardRef(function(u,f){var g=u.path,x=u.id,T=x===void 0?++p:x,k=u.title,E=k===void 0?null:k,C=u.description,N=C===void 0?null:C,L=u.size,Q=L===void 0?null:L,re=u.color,G=re===void 0?"currentColor":re,F=u.horizontal,$=F!==void 0&&F,w=u.vertical,O=w!==void 0&&w,D=u.rotate,R=D===void 0?0:D,_=u.spin,z=_!==void 0&&_,ie=u.style,S=ie===void 0?{}:ie,A=u.inStack,V=A!==void 0&&A,Z=v(u,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),U={},X=[];Q!==null&&(V?X.push("scale("+Q+")"):(S.width=typeof Q=="string"?Q:1.5*Q+"rem",S.height=S.width)),$&&X.push("scaleX(-1)"),O&&X.push("scaleY(-1)"),R!==0&&X.push("rotate("+R+"deg)"),G!==null&&(U.fill=G);var K=r.createElement("path",m({d:g,style:U},V?Z:{})),B=K;X.length>0&&(S.transform=X.join(" "),S.transformOrigin="center",V&&(B=r.createElement("g",{style:S},K,r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var J,q=B,te=z===!0||typeof z!="number"?2:z,fe=!V&&($||O);if(te<0&&(fe=!fe),z&&(q=r.createElement("g",{style:{animation:"spin"+(fe?"-inverse":"")+" linear "+Math.abs(te)+"s infinite",transformOrigin:"center"}},B,!($||O||R!==0)&&r.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),V)return q;var M,ge="icon_labelledby_"+T,ce="icon_describedby_"+T;if(E)J=N?ge+" "+ce:ge;else if(M="presentation",N)throw new Error("title attribute required when description is set");return r.createElement("svg",m({ref:f,viewBox:"0 0 24 24",style:S,role:M,"aria-labelledby":J},Z),E&&r.createElement("title",{id:ge},E),N&&r.createElement("desc",{id:ce},N),!V&&z&&(fe?r.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):r.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),q)});b.displayName="Icon",b.propTypes={path:n.string.isRequired,size:n.oneOfType([n.number,n.string]),color:n.string,horizontal:n.bool,vertical:n.bool,rotate:n.number,spin:n.oneOfType([n.bool,n.number]),style:n.object,inStack:n.bool,className:n.string},b.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=b}]);const ae=Jn(di);var fi="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z",ea="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",hi="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z",wn="M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z",ta="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z",mi="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",gi="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",vi="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9",yi="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Yr="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",Jt="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",xi="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z",Ht="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",ra="M11 20H6.5Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20H13V12.85L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.85Z",bi="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z",pi="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",na="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",wi="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",ji="M20 9C18.69 9 17.58 9.83 17.17 11H14.82C14.4 9.84 13.3 9 12 9S9.6 9.84 9.18 11H6.83C6.42 9.83 5.31 9 4 9C2.34 9 1 10.34 1 12S2.34 15 4 15C5.31 15 6.42 14.17 6.83 13H9.18C9.6 14.16 10.7 15 12 15S14.4 14.16 14.82 13H17.17C17.58 14.17 18.69 15 20 15C21.66 15 23 13.66 23 12S21.66 9 20 9",aa="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";const Si=j.div`
    color: var(--theme-color-font, #000);
    font-weight: 400;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex: 1;
`,Ci=j.div`
    line-height: 2rem;
    min-height: 2.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1;
`,ki=j.button`
    padding: 0;
    background-color: transparent;
    border: 0;
    height: 30px;
    width: 30px;
    margin-right:5px;
    cursor: pointer;
    transition: all .4s ease 0s;
    color: var(--theme-color-font, #000);

    &:hover {
        background-color: var(--theme-color-background-aux-hover,#cacaca);
    }
`,Ti=j.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: var(--theme-color-font-empty);
`,Ei=j.div`
    cursor: pointer;
`,Oi=j.div`
    font-size: 1.5rem;
`,Di=({items:e,current:t,navigate:a})=>{const r=()=>{if(!e)return;const o=Object.keys(e);a&&a(o[o.length-1],{replace:!0})},n=()=>{const o=Object.keys(e);return o&&o.length?o.map((s,l)=>i.jsxs(Ti,{children:[i.jsx(Ei,{onClick:()=>{a&&a(s,{replace:!0})},children:e[s]}),i.jsx(ae,{path:Jt,size:1})]},l)):null};return i.jsxs(Si,{children:[i.jsx(ki,{onClick:r,children:i.jsx(ae,{path:ea,size:1})}),i.jsxs(Ci,{children:[n(),i.jsx(Oi,{children:t})]})]})},_i=j.h1`
    font-size: 1.5rem;
    color: var(--theme-color-font, #000);
    font-weight: 400;
    line-height: 2rem;
    margin: 0;

    &.uppercase {
        text-transform: uppercase;
    }
`,Pi=j.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    width: 100%;
    max-width: 100%;

    @media (min-width: 1000px) {
        margin-top: 0;
    }
`,Ri=j.div`
    flex: 1;
    width: 100%;
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;

    @media (min-width: 1000px) {
        width: auto;
    }
`,Ni=j.h3`
    height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    background-color: var(--theme-color-primary, #000);
    padding: 0 3px 0 10px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--theme-color-primary-font, #fff);
    justify-content: space-between;
`,Ai=j.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-aux, #fff);
`,Mi=({className:e,title:t,children:a})=>i.jsxs(Ri,{className:e,children:[t?i.jsx(Ni,{children:t}):null,i.jsx(Ai,{children:a})]}),Fi=j.div`
    display: flex;
    flex-direction: column;
    align-items: ${e=>e.$align?e.$align:"center"};
    justify-content: ${e=>e.$justify?e.$justify:"stretch"};

    ${e=>e.$margin?`& > * {margin: ${e.$margin};}
        & > *:last-child {margin: 0; }`:""}
`,yt=({align:e,justify:t,margin:a,children:r,...n})=>i.jsx(Fi,{$align:e,$justify:t,$margin:a,...n,children:r}),Ii=j.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: ${e=>e.align??"center"};
    justify-content: ${e=>e.justify??"stretch"};

    & > * {
        margin: ${e=>e.margin??e.mobileMargin??"0 0 20px 0"};
    }
    
    @media (min-width: 1000px) {
        flex-direction: row;
        width: auto;

        & > * {
            margin: ${e=>e.margin??e.desktopMargin??"0 20px 20px 0"};
            width: calc(100% / ${e=>e.columns??3} - ${e=>((e.columns??3)-1)*20/(e.columns??3)}px);
            min-width: calc(100% / ${e=>e.columns??3} - ${e=>((e.columns??3)-1)*20/(e.columns??3)}px);
        }
        & > *:nth-child(${e=>e.columns??3}n) {
            margin-right: 0;
        }
    }

`,$i=j.div`
    width: 100%;
    padding: ${e=>e.padding??"10px"};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${e=>e.direction??"column"};;
    align-items: ${e=>e.align??"stretch"};;
    justify-content: ${e=>e.justify??"flex-start"};;

    @media (min-width: 1000px) {
        padding: ${e=>e.padding??"30px"};
    }
`,ia=j.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: ${e=>e.$align??"center"};
    justify-content: ${e=>e.$justify??"stretch"};

    & > * {
        margin-right: ${e=>e.$margin??"0.625rem"};
    }
    & > *:last-child {
        margin-right: 0;
    }
`,Te=({align:e,justify:t,margin:a,children:r,...n})=>i.jsx(ia,{$align:e,$justify:t,$margin:a,...n,children:r}),oa=j.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${e=>e.$columnAlign??"center"};
    justify-content: ${e=>e.$columnJustify??"stretch"};

    @media (max-width: 999px) {
        ${e=>e.$columnMargin?`& > * {margin: ${e.$columnMargin};}
            & > *:last-child {margin: 0; }`:""}
    }
    
    
    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: ${e=>e.$rowAlign??"center"};
        justify-content: ${e=>e.$rowJustify??"stretch"};

        & > * {
            margin-right: ${e=>e.$rowMargin??"0.625rem"};
        }
    
        & > *:last-child {
            margin-right: 0;
        }
    }


`,la=({rowAlign:e,rowJustify:t,columnAlign:a,columnJustify:r,rowMargin:n,columnMargin:o,children:s,...l})=>i.jsx(oa,{$rowJustify:t,$rowAlign:e,$columnAlign:a,$columnJustify:r,$columnMargin:o,$rowMargin:n,...l,children:s}),Li=(e,t,a)=>Math.min(Math.max(e,t),a),Wi=e=>{var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},Bi=e=>{let t="";for(let a in e)a&&e[a]&&(t+=" "+a);return t.trim()},zi=j.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;

    &:after {
        content: '';
        height: 2.5rem;
        flex: 1;
        border-bottom: 1px solid var(--theme-color-line);
    }
`,Vi=j.div`
    height: 2.5rem;
    line-height: 2.5rem;
    word-wrap: none;
    padding: 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom:-1px;
    border: 1px solid transparent;
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 1px solid var(--theme-color-line);
    
    &:hover {
        background-color: var(--theme-color-background-aux);
    }

    &.selected {
        background-color: var(--theme-color-background-aux);
        border: 1px solid var(--theme-color-line);
        border-bottom: 1px solid transparent;
    }
`,Hi=({items:e,value:t,onChange:a})=>{const[r,n]=y.useState(),o=s=>{n(s),a(s)};return y.useEffect(()=>{n(t)},[t]),i.jsx(zi,{children:e.map((s,l)=>i.jsx(Vi,{className:Bi({selected:r===s.id}),onClick:()=>{o(s.id)},children:s.label},l))})},Yt=({path:e})=>{const{t}=ti.useTranslation();return i.jsx(i.Fragment,{children:t(e)})},Gr=e=>String(Vr.t(e)),Yi=j.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    &.spaced {
        margin: 1rem 0;
    }

    @media (min-width: 1000px) {
        &.spaced {
            margin: 0;
        }
    }
`,jn=j.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0;
    background-color: var(--theme-color-background-aux-hover);
    padding: 0;
    transition: all .4s ease 0s;
    height: 2rem;
    width: 2rem;

    &:not(.disabled):hover {
        background-color: var(--theme-color-background-aux-hover);
    }

    &:first-child {
        margin-right: 5px;
    }

    &:last-child {
        margin-left: 5px;
    }

    &.disabled {
        opacity: 0.5;
        cursor: default;
    }

    @media (min-width: 1000px) {
        background-color: transparent;
    }
`,sa=({page:e,total:t,onPageChange:a,...r})=>{const n=o=>{o>0&&o<=t&&a(o)};return i.jsxs(Yi,{...r,children:[i.jsx(jn,{className:e<=1?"disabled":"",onClick:()=>{n(e-1)},children:i.jsx(ae,{path:Yr,size:1})}),Gr("paginator.label").replace("$1",String(e)).replace("$2",String(Math.max(t,1))),i.jsx(jn,{className:e>=t?"disabled":"",onClick:()=>{n(e+1)},children:i.jsx(ae,{path:Jt,size:1})})]})},Sn=(e,t)=>{let a=Math.abs(e-t),r=Math.floor(a/60),n=a%60;return r+n/60},xt=(e,t)=>{if(e===void 0||e<0||e>1440)return;let[a,r]=[Math.floor(e/60),e%60],n="0"+a,o="0"+r;return n=n.substring(n.length-2,n.length),o=o.substring(o.length-2,o.length),`${n}h${o}`},Er=(e,t,a)=>{if(!e||isNaN(e.getTime()))return(a==null?void 0:a.noValue)??"";let r={dateStyle:"short"};return Intl.DateTimeFormat(Vr.t("locale")??"pt-BR",r).format(e)},Cn=e=>{if(!e||isNaN(e.getTime()))return"";let t={month:"long",year:"numeric"},a=Intl.DateTimeFormat(Vr.t("locale")??"pt-BR",t).format(e);return a.substring(0,1).toUpperCase()+a.substring(1)},Gi=e=>{if(!e||isNaN(e.getTime()))return"";let t="0"+(e.getMonth()+1),a="0000"+e.getFullYear();return t=t.substring(t.length-2,t.length),a=a.substring(a.length-4,a.length),`${t}/${a}`},Ui=e=>{if(!e||!e.length||e.length<10)return;let[t,a,r]=e.substring(0,10).split("/").map(n=>parseInt(n,10));return new Date(r,a-1,t,0,0,0,0)},ht=e=>!e||isNaN(e.getTime())?[0,0,0,0,0]:[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes()],Qi=j.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    height: 3rem;
`,Zi=j.div`
    width: 3rem;
    font-size: 0.8rem;
    padding: 0 0.3rem;
    color: var(--theme-color-font-weak);
    border-bottom: 1px solid var(--theme-color-line2);
`,kn=j.div`
    border-bottom: 1px dashed var(--theme-color-line2);
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    
    &:not(:first-child) {
        border-left: 1px solid var(--theme-color-line2);
    }
`,Ki=j.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    min-height: 8rem;
    width: 100%;
`,Tn=j.div`
    position: relative;
    flex: 1;

    &.today {
        border: 1px solid var(--theme-color-primary);
    }
    .time &.today {
        border-bottom: 0;
        border-top: 0;
    }
    .lasttime &.today {
        border-top: 0;
    }

    &.otherMonth {
        opacity: .3;
    }
    
    &.compact {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: stretch;
        align-items: center;
        padding-bottom: 2rem;
    }
`,Ji=j.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    width: 90%;
    position:relative;
    z-index: 10;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        outline: 1px solid white;
    }
    
    &.full {
        position: absolute;
    }
    &.compact {
        margin-top: 0.4rem;
    }

    &.waiting {
        border: 1px solid var(--theme-color-primary);
        background-color: var(--theme-color-background-aux);
    }
    &.confirmed {
        border: 1px solid var(--theme-color-primary-transparent);
        background-color: var(--theme-color-primary-transparent);
        //color: var(--theme-color-primary-font);
    }
    &.done {
        border: 1px solid var(--theme-color-green);
        background-color: var(--theme-color-green);
    }
    &.cancelled {
        border: 1px solid var(--theme-color-gray);
        background-color: var(--theme-color-gray);
    }
    &.lost {
        border: 1px solid var(--theme-color-yellow);
        background-color: var(--theme-color-yellow);
    }
`,Xi=j.div`
    flex: 1;
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;

    &.full {
    }

    &:hover {
        background-color: var(--theme-color-background-aux2);
    }
`,qi=j.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    
`,En=j.div`
    font-size:0.7rem;
    line-height:0.7rem;
    padding: 0.3rem;
`,eo=j.div`
    font-size:1rem;
    line-height:1rem;
    flex: 1;
    overflow: hidden;
`,to=({event:e,style:t,onClick:a,className:r,dragHook:n,children:o})=>{const[{isDragging:s},l]=n(()=>({type:"event",item:{...e},collect:c=>({isDragging:!!c.isDragging()})}));return i.jsx(Ji,{ref:l,style:{...t,opacity:s?.3:1},onClick:a,className:r,children:o})},On=({startDate:e,nextDate:t,hour:a,onClick:r,className:n,children:o,dropHook:s,onMoveItemFn:l})=>{const c=y.useRef(!0),[{isOver:d},m]=s(()=>({accept:"event",drop:async v=>{let p=new Date(v.date),b=new Date(e);b.setDate(b.getDate()+t),b.setHours(a??p.getHours()),b.setMinutes(0),b.setSeconds(0),b.setMilliseconds(0);let u=Object.fromEntries(Object.entries(v).filter(([g,x])=>x!=null)),f={...v};f.timeend=(a?a*60:v.time)+(v.timeend-v.time),f.time=a?a*60:v.time,await l({...u,timeend:f.timeend,time:f.time,keep_time:!a,move_to:b.toISOString()},f)},collect:v=>({isOver:!!v.isOver()})}),[e,t,a]);return y.useEffect(()=>()=>{c.current=!1},[]),i.jsx(Xi,{ref:m,onClick:r,className:n,style:d?{backgroundColor:"var(--theme-color-primary)"}:{},children:o})},Dn=({events:e,full:t,conflicts:a,dragHook:r,navigate:n})=>{const o=l=>{n(`/calendar/${l}`)};let s={};return e.length===1&&t&&(s={position:"absolute",height:(e[0].timeend-e[0].time)*100/60+"%",width:String(100-(a??0)*10)+"%",top:String(e[0].time%60*100/60)+"%",left:String((a??0)*10)+"%"}),i.jsx(i.Fragment,{children:e.map((l,c)=>i.jsxs(to,{event:l,dragHook:r,style:s,onClick:()=>{o(l.id)},className:(t?"":"compact ")+l.status.toLowerCase(),children:[i.jsxs(qi,{children:[i.jsx(En,{children:xt(l.time)}),i.jsx(En,{children:xt(l.timeend)})]}),i.jsx(eo,{children:l.event_name})]},c))})},ca=({starttime:e,endtime:t,viewmode:a,startDate:r,events:n,refDate:o,navigate:s,drag:l,drop:c,onMoveItemFn:d})=>{const[m,v]=y.useState(1),[p,b]=y.useState(1);y.useEffect(()=>{v(Math.floor(e/60))},[e]),y.useEffect(()=>{b(Math.floor(t/60))},[t]);const u=(x,T)=>{let k=new Date(x);k.setDate(k.getDate()+T),k.setHours(0),k.setMinutes(0),k.setSeconds(0),k.setMilliseconds(0);let E=new Date;E.setHours(0),E.setMinutes(0),E.setSeconds(0),E.setMilliseconds(0);let C=k.getTime()===E.getTime()?"today ":"";return a==="MONTH"&&(C+=k.getMonth()===o.getMonth()?"":"otherMonth"),C},f=(x,T)=>{let k=new Date(r);k.setDate(k.getDate()+x),s("/calendar/new",{replace:!1,state:{date:k,hour:T}})},g=(x,T)=>{let k=new Date(r);k.setDate(k.getDate()+x),k.setHours(T??0);let E=ht(k);if(T){let C=n.filter(N=>{let L=ht(new Date(N.date));return L[0]===E[0]&&L[1]===E[1]&&L[2]===E[2]&&L[3]===E[3]});if(C&&C.length){let N=[];for(let L in C){let Q=ht(new Date(C[L].date)),re=Q[3]*60+Q[4],G=n.filter(F=>{if(F.id===C[L].id)return!1;let $=ht(new Date(F.date)),w=$[3]*60+$[4],O=w+F.timeend-F.time;return $[0]===Q[0]&&$[1]===Q[1]&&$[2]===Q[2]&&re>=w&&re<O});N.push(i.jsx(Dn,{navigate:s,events:[C[L]],full:!0,dragHook:l,conflicts:G.length}))}return N}}else{let C=n.filter(N=>{let L=ht(new Date(N.date));return L[0]===E[0]&&L[1]===E[1]&&L[2]===E[2]});if(C)return i.jsx(Dn,{events:C,navigate:s,dragHook:l,full:!1})}return null};return i.jsx(i.Fragment,{children:a==="WEEK"?Array(p-m).fill(0).map((x,T)=>i.jsxs(Qi,{children:[i.jsx(Zi,{children:xt((m+T)*60)}),i.jsx(kn,{className:m+T+1===p?"lasttime":"time",children:Array(7).fill(1).map((k,E)=>i.jsxs(Tn,{className:u(r,E),children:[i.jsx(On,{onMoveItemFn:d,dropHook:c,onClick:()=>{f(E,m+T)},startDate:r,nextDate:E,hour:m+T}),g(E,m+T)]},E))})]},T)):i.jsx(Ki,{children:i.jsx(kn,{children:Array(7).fill(1).map((x,T)=>i.jsxs(Tn,{className:"compact "+u(r,T),children:[i.jsx(On,{onMoveItemFn:d,className:"full",dropHook:c,onClick:()=>{f(T)},startDate:r,nextDate:T}),g(T)]},T))})})})},ro=j.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    border-bottom: 1px solid var(--theme-color-line2);
`,no=j.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    padding: 0.3rem;

    &:not(:first-child) {
        border-left: 1px solid var(--theme-color-line2);
    }

    &.today {
        background-color: var(--theme-color-primary);
    }

    &.otherMonth {
        opacity: .3;
    }
`,ao=j.div`
    font-size: 1rem;
    width: 100%;
    text-align: left;
    opacity: .5;

    .today & {
        opacity: 1;
        color: #fff;
    }
`,io=j.div`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;

    .today & {
        color: #fff;
    }
`,oo=(e,t)=>{let a=new Date(e);return a.setDate(a.getDate()+t),a.getDate()},lo=(e,t,a,r)=>{let n=new Date(e);n.setDate(n.getDate()+t),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0);let o=new Date;o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0);let s=n.getTime()===o.getTime()?"today ":"";return r==="MONTH"&&(s+=n.getMonth()===a.getMonth()?"":"otherMonth"),s},ua=({start:e,viewmode:t,refDate:a,labelDayName:r})=>i.jsxs(ro,{children:[t==="WEEK"?i.jsx("div",{style:{width:"3rem"}}):null,Array(7).fill(1).map((n,o)=>i.jsxs(no,{className:lo(e,o,a,t),children:[i.jsx(ao,{children:oo(e,o)}),i.jsx(io,{children:r?r[o]:""})]},o))]}),so=({start:e,end:t,refDate:a,starttime:r,endtime:n,viewmode:o,events:s,drag:l,drop:c,navigate:d,onMoveItem:m})=>{const[v,p]=y.useState([]);return y.useEffect(()=>{let b=[e],u=new Date(e);if(o==="2WEEK")u.setDate(u.getDate()+7),b.push(u);else if(o==="MONTH")for(u.setDate(u.getDate()+7);u.getTime()<t.getTime();)b.push(new Date(u)),u.setDate(u.getDate()+7);p(b)},[e,o]),i.jsx(i.Fragment,{children:v.map((b,u)=>i.jsxs("div",{children:[i.jsx(ua,{start:b,viewmode:o,refDate:a}),i.jsx(ca,{navigate:d,drag:l,drop:c,onMoveItemFn:m,startDate:b,events:s,starttime:r,endtime:n,viewmode:o,refDate:a})]},u))})},co=j.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 90%;
    z-index: 2000;
    transform: translate3d(-100%, 0, 0);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow: auto;
    justify-content: flex-start;
    transition: transform .3s ease 0s;
    background-color: var(--theme-color-background-aux);
    color: var(--theme-color-font, #000);

    &.opened {
        transform: translate3d(0, 0, 0);
    }

    @media (min-width: 1000px) {
        position: absolute;
        left: 0;
        width: 300px;
        transform: none;
        z-index: 2;
    }
`,uo=j.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 2000;
    transform: translate3d(-100%, 0, 0);
    transition: opacity .3s ease 0s, transform 0s linear .3s;
    background-color: #000;
    opacity: 0;

    &.opened {
        transition: opacity .3s ease 0s, transform 0s linear 0s;
        opacity: 0.6;
        transform: translate3d(0, 0, 0);
    }

    @media (min-width: 1000px) {
        display: none;
    }
`,fo=j.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid var(--theme-color-line, #000);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1000px) {
        justify-content: center;
    }
    `,ho=j.img`
    width: calc(90% - 3rem);
    
    @media (min-width: 1000px) {
        width: 80%;
    }
`,mo=j.div`
    height: 3rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1000px) {
        display: none;
    }
`,go=j.menu`
    margin-top: 10px;
    width: 100%;
    padding: 0;
`,_n=j.li`
    width: 100%;
    height: 4rem;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    text-transform: uppercase;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 0 1.5rem;
    cursor: pointer;
    transition: all .4s ease 0s;

    &.active {
        background-color: var(--theme-color-primary, #fff);
        color: var(--theme-color-primary-font, #fff);
    }
    &.active:before {
        color: var(--theme-color-primary-font, #fff);
    }
    &:not(.active):hover {
        background-color: var(--theme-color-primary-transparent, rgba(255,255,255,0.5));
    }
`,da=j.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: var(--theme-color-font, #000);
    border-bottom: 1px solid var(--theme-color-line, #000);

    @media (min-width: 1000px) {
        top: 0;
        left: 0;
        right: 0;
        width: auto;
        height: 100px;
    }
`,fa=j.div`
    height: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1rem;

    @media screen and (min-width: 1000px) {
        padding: 2rem;
    }
`,vo=j.div`
    display: inline;
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate3d(0, -50%, 0);
    height: 40px;
    width: 50%;
    min-width: 150px;
    max-width: 250px;
    
    @media (min-width: 1000px) {
        left: 30px;
        width: 70%;
        max-width: 70%;
        height: 50px;
    }
`,yo=j.input.attrs(()=>({type:"text"}))`
    border: 1px solid var(--theme-color-line, #000);
    height: 40px;
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    background-color: var(--theme-color-background-input, #000);

    @media (min-width: 1000px) {
        height: 50px;
    }
`,xo=j.div`
    border: 1px solid var(--theme-color-line, #000);
    background-color: var(--theme-color-background-aux);
    min-height: 100px;
    max-height: 200px;
    overflow: auto;
    width: 100%;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: -1px;
    position: absolute;
    z-index: 10000;
`,bo=j.div`
    height: 1.5rem;
    padding: 0 1rem;
    text-transform: uppercase;
    background-color: var(--theme-color-background-aux2);
    color: var(--theme-color-font-empty);
    width: 100%;
`,po=j.div`
    height: 3rem;
    padding: 0 1rem;
    color: var(--theme-color-font);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux3);
    }
`;j.div`
    color: var(--theme-color-font-weak);
    display: flex;
    font-size: 0.8rem;
    line-height: 0.8rem;

    & .highlight {
        color: var(--theme-color-font);
        margin-left: 0.3rem;
    }
`;const wo=j.a`
    text-decoration: none;
    color: var(--theme-color-font);
    margin-right: 0.5rem;
    cursor: pointer;

    &:hover {
        color: var(--theme-color-primary);
    }

    @media (min-width: 1000px) {
        margin-right: 1rem;
    }
`,ha=j.a`
    text-decoration: none;
    color: var(--theme-color-font, #000);
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux3);
    }
`,Gt=j.div`
    height: 30px;
    width: 30px;
    font-size: 15px;
    color: var(--theme-color-primary-font, #000);
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
    background-color: var(--theme-color-primary, #000);
    overflow: hidden;

    &.compact {
        height: 2rem;
        width: 2rem;
        font-size: 1rem;
        margin-left: 0;
    }

    @media (min-width: 1000px) {
        height: 50px;
        width: 50px;
        font-size: 25px;
    }
`,ma=j.div`
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--theme-color-font);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
`,ga=j.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 15rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: var(--theme-color-background-aux);
    border: 1px solid var(--theme-color-background-aux4);
`,va=j.div`
    height: 30px;
    width: 30px;
    font-size: 15px;
    color: var(--theme-color-font);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    
    @media (min-width: 1000px) {
        display: none;
    }
`,jo=j.div`
    width: 90%;
    min-width: 90%;
    max-width: 90%;
    min-height: 200px;
    max-height: 90%;
    background-color: var(--theme-color-background, #dfdfdf);
    border: 1px solid var(--theme-color-background-aux2, #999);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    position: fixed;
    top: -10000%;
    left: -10000%;
    z-index: 999;
    transform: translate3d(-50%, -50%, 0);
    overflow: auto;

    &.active {
        top: 50%;
        left: 50%;
    }
    
    @media (min-width: 1000px) {
        width: auto;
        min-width: 400px;
        max-width: 90%;
    }
`,So=j.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 100%;
    right: 100%;
    background-color: rgba(0,0,0, 0.8);
    z-index: 998;

    &.active {
        bottom: 0;
        right: 0;
    }
`,Ut=j.img`
    min-width: 100%;
    min-height: 100%;
`,Co=({items:e,onClose:t,menuOpened:a,location:r,logoUrl:n,navigate:o})=>{const[s,l]=y.useState(""),c=m=>s===m?"active ":"",d=m=>{o(m),t()};return y.useEffect(()=>{let m="home";for(let v of e)if(r.pathname.startsWith(v.key)){m=v.label;break}l(m)},[r]),i.jsxs(i.Fragment,{children:[i.jsx(uo,{className:a?"opened":"",onClick:()=>t()}),i.jsxs(co,{className:a?"opened":"",children:[i.jsxs(fo,{children:[i.jsx(mo,{onClick:()=>t(),children:i.jsx(ae,{path:ea,size:1})}),i.jsx(ho,{src:n??"/img/logo.svg",alt:Gr("menu.logo")})]}),i.jsxs(go,{children:[i.jsxs(_n,{className:c("home"),onClick:()=>{d("/")},children:[i.jsx(ae,{style:{marginRight:"0.5rem"},size:1.2,path:pi}),i.jsx(Yt,{path:"menu.home"})]}),e.map((m,v)=>i.jsxs(_n,{className:c(m.label),onClick:()=>{d(m.key)},children:[i.jsx(ae,{style:{marginRight:"0.5rem"},size:1.2,path:m.icon}),i.jsx(Yt,{path:`menu.${m.label}`})]},v))]})]})]})},ko=({content:e,show:t,onClose:a})=>{const r=()=>{a&&a()};return i.jsxs(i.Fragment,{children:[i.jsx(jo,{className:t?"active":"",children:e??i.jsx(i.Fragment,{})}),i.jsx(So,{className:t?"active":"",onClick:r})]})},To=({helpLabel:e,items:t,photo:a,search:r,searchPlaceholder:n,userName:o,onSearch:s,onMenuOpen:l,onOpenHelp:c})=>{const[d,m]=y.useState(""),[v,p]=y.useState(!1),[b,u]=y.useState(!1),f=y.useRef(),g=N=>{N.preventDefault(),N.stopPropagation(),u(!0)},x=N=>{let L=N.target.value;m(L),p(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>{s&&s(L)},300)},T=N=>{N.preventDefault(),N.stopPropagation(),p(!0)},k=()=>{l&&l()},E=N=>{N.preventDefault(),N.stopPropagation(),c&&c()},C=(N,L)=>{N.preventDefault(),N.stopPropagation(),u(!1),L&&L(N)};return y.useEffect(()=>{const N=()=>{p(!1)},L=()=>{u(!1)},Q=document.querySelector("body");return Q&&(Q.addEventListener("click",N),Q.addEventListener("click",L)),()=>{const re=document.querySelector("body");re&&(re.removeEventListener("click",N),re.removeEventListener("click",L))}},[]),i.jsxs(da,{children:[i.jsx(va,{onClick:k,children:i.jsx(ae,{size:1,path:na})}),i.jsxs(vo,{children:[i.jsx(yo,{id:"topbar-search",placeholder:n??"",value:d,onClick:T,onChange:x}),v?i.jsx(xo,{children:r&&r.length?r.map(N=>N.items&&N.items.length?i.jsxs(i.Fragment,{children:[i.jsx(bo,{children:N.label},N.label),N.items.map((L,Q)=>i.jsx(po,{onClick:L.action,children:L.element},Q))]}):null):null}):null]}),i.jsxs(fa,{children:[e?i.jsx(wo,{href:"#",onClick:E,children:e}):null,b?i.jsxs(ga,{children:[i.jsxs(Te,{align:"center",justify:"flex-left",style:{padding:"0.85rem"},children:[i.jsx(ma,{children:o}),i.jsx(Gt,{className:"compact",children:a?i.jsx(Ut,{src:a}):i.jsx("span",{children:String(o??"").substring(0,1)})})]}),t&&t.length?t.filter(N=>N!=null).map((N,L)=>i.jsx(ha,{href:"#",onClick:Q=>C(Q,N.action),children:N.label},L)):null]}):i.jsx(Gt,{onClick:g,children:a?i.jsx(Ut,{src:a}):i.jsx("span",{children:String(o??"").substring(0,1)})})]})]})},Eo=({photo:e,items:t,userName:a,onMenuOpen:r})=>{const[n,o]=y.useState(!1),s=(d,m)=>{d.preventDefault(),d.stopPropagation(),o(!1),m&&m(d)},l=d=>{d.preventDefault(),d.stopPropagation(),o(!0)},c=()=>{r&&r()};return y.useEffect(()=>{var m;const d=()=>{o(!1)};return(m=document.querySelector("body"))==null||m.addEventListener("click",d),()=>{var v;(v=document.querySelector("body"))==null||v.removeEventListener("click",d)}},[]),i.jsxs(da,{children:[i.jsx(va,{onClick:c,children:i.jsx(ae,{size:1,path:na})}),i.jsx(fa,{children:n?i.jsxs(ga,{children:[i.jsxs(Te,{align:"center",justify:"flex-left",style:{padding:"0.85rem"},children:[i.jsx(ma,{children:a}),i.jsx(Gt,{className:"compact",children:e?i.jsx(Ut,{src:e}):i.jsx("span",{children:String(a??"").substring(0,1)})})]}),t&&t.length?t.filter(d=>d!=null).map((d,m)=>i.jsx(ha,{href:"#",onClick:v=>s(v,d.action),children:d.label},m)):null]}):i.jsx(Gt,{onClick:l,children:e?i.jsx(Ut,{src:e}):i.jsx("span",{children:String(a??"").substring(0,1)})})})]})},ke=j.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex: 1;
    min-height: ${e=>e.width?typeof e.width=="number"?String(e.width)+"px":e.width:"50px"};

    &.noMargin {
        margin-bottom: 0;
    }

    &.fullWidthMobile {
        width: 300px;
        
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`,Oo=j.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    margin-bottom: 10px;
    flex: 1;
    min-height: ${e=>e.width?typeof e.width=="number"?String(e.width)+"px":e.width:"50px"};
`,Do=j.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    min-height: 150px;
    height: 150px;

    &.noMargin {
        margin-bottom: 0;
    }
`,_o=j.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 50px;
    height: 50px;
    color: var(--theme-color-font, #000);
    cursor: pointer;
    margin-bottom: 10px;

    &.column {
        flex-direction: column;
    }
    
    &.row {
        flex-direction: row-reverse;
    }

    &.compact {
        height: 1rem;
        min-height: 1rem;
    }
`,Po=j.div`
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    min-height: 30px;
    color: var(--theme-color-font, #000);
    cursor: pointer;

    &.column {
        flex-direction: column;
    }
    
    &.row {
        flex-direction: row-reverse;
    }

    &.spaced-left {
        margin-left: 0.75rem;
    }
`,De=j.div`
    width: ${e=>e.width??"100%"};
    min-width: ${e=>e.width??"100%"};
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    height: 50px;
    color: var(--theme-color-font-input, #000);
    //border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
    background: var(--theme-color-background-input, #fff);
`,Ro=j(De)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`,Me=j.input.attrs(e=>({type:e.type??"text"}))`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`,No=j.textarea`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: .9rem;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`,ya=j.input`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: transparent;
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`,xa=j.input`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: transparent;
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`,Ao=j.select`
    width: 100%;
    height: ${e=>e.width?typeof e.width=="number"?String(e.width)+"px":e.width:"50px"};
    padding: 0 10px 0;
    font-size: .9rem;
    box-sizing: border-box;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`,Mo=j.div`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: 1.1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`,je=j.label`
    position: absolute;
    top: calc(100% - 1.1rem);
    right: 3px;
    text-align: right;
    font-size: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    line-height: 1rem;
    color: var(--theme-color-font-error, #f00);
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;

    &.hasIcon {
        right: 30px;
    }
    &.hasDrop {
        right: 18px;
    }
`,Se=j.div`
    position: absolute;
    top: 10px;
    right: 3px;
    width: 22px;
    height: 22px;
    background-color: var(--theme-color-font-error, #f00);
    -webkit-mask: url('/img/icon/alert.svg') no-repeat center;
    mask: url('/img/icon/alert.svg') no-repeat center;

    &.hasIcon {
        right: 30px;
    }
    &.hasDrop {
        right: 18px;
    }

    &.big {
        width: 25px;
        height: 25px;
        top: 12px;
        right: 3px;
    }

    &.hasIcon.big {
        right: 30px;
    }
`,wt=j.div`
    position: absolute;
    top: 7px;
    right: 3px;
    width: 30px;
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    opacity: 0.4;
`,Fo=j.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`,Io=j.button`
    height: 2.5rem;
    background-color: ${e=>e.color??"#999"};
    border: 1px solid transparent;
    border-radius: 3px;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 1rem;
    width: ${e=>e.size?String(e.size)===e.size?e.size:e.size+"rem":"auto"};

    &.disabled {
        cursor: default;
        opacity: 0.4;
    }

    &.border {
        background-color: transparent;
        border: 1px solid ${e=>e.color??"#999"};
        color: ${e=>e.color??"#999"};
    }

    & > .btnLabel {
        display: none;
    }
    
    @media (min-width: 1000px) {
        font-size: 1rem;

        & > .btnLabel {
            display: flex;
        }
    }
`,$o=j.div`
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--theme-color-border-input, #ddd);
    background-color: var(--theme-color-background-input, #fff);
    position: relative;

    .row & {
        margin-right: 0.625rem;
    }

    &.checked:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        background-color: var(--theme-color-font, #fff);
    }
`,Lo=j.div`
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid var(--theme-color-border-input, #ddd);
    border-radius: 5px;
    border-radius: 50%;
    background-color: var(--theme-color-background-input, #fff);
    position: relative;
    
    .row & {
        margin-right: 0.625rem;
    }
    
    &.checked:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
        border-radius: 50%;
        background-color: var(--theme-color-font, #fff);
    }
`,Wo=j.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`,Bo=j.div`
    width: 100%;
    aspect-ratio: 1;
    border: 3px dashed var(--theme-color-border-input, #ddd);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Pn=j.div`
    color: var(--theme-color-font-weak, #666);
`,zo=j.div`
    margin: 0.25rem 0;
    font-size: 0.75rem;
    color: var(--theme-color-font-empty, #999);
    text-transform: uppercase;
`,ba=j.input.attrs(()=>({type:"file"}))`
    display: none;
    visibility: hidden;
    height: 0;
    position: fixed;
    top: -10000%;
    left: -10000%;
`;j.label`
    height: 2.5rem;
    background-color: ${e=>e.color??"#999"};
    border: solid transparent 0px;
    border-radius: 3px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.75rem;
    width: 'auto';
    padding: 0 0.5rem;
    
    @media (min-width: 1000px) {
        flex-direction: row;
        font-size: 1rem;
    }
`;const Vo=j.div`
    position: absolute;
    inset: 0;
`,Ho=j.div`
    position: absolute;
    inset: 0;
    overflow: hidden;
    background-color: #000;
    
    & img {
        margin: 0 auto;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`,Yo=j.div`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,pa=j.div`
    position: fixed;
    top: -10000%;
    left: -10000%;
    z-index: 700;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-input, #fff);
    border: 1px solid var(--theme-color-border-input, #ddd);

    &.show {
        position: absolute;
        top: calc(100% - 1px);
        left: 0;
        width: 100%;
        min-width: 200px;
    }

    &.showtop {
        position: absolute;
        top: auto;
        bottom: calc(100% - 1px);
        left: 0;
        width: 100%;
        min-width: 200px;
    }
`,Go=j.div`
    position: absolute;
    top: calc(100% - 1px);
    right: 0;
    left: 0;
    z-index: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    background-color: var(--theme-color-background-input, #fff);
    border: 1px solid var(--theme-color-border-input, #ddd);
`,Rn=j.div`
    width: 50%;
    height: 120px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    -ms-overflow-style: none;
    scrollbar-width: none;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        display: none;
    }    
`,Nn=j.div`
    width: 100%;
    padding: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 1.3rem;
    cursor: pointer;
    
    :hover {
        background-color: var(--theme-color-background-aux2, "#aaa");
    }

    &:first-child {
        margin-top: 40px;
    }
    &:last-child {
        margin-bottom: 40px;
    }
    
    &.selected {
        color: var(--theme-color-primary-font);
        background-color: var(--theme-color-primary, "#999");
    }
`,Uo=j.div`
    position: absolute;
    top: calc(100% - 1px);
    right: 0;
    left: 0;
    z-index: 700;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-input, #fff);
    border: 1px solid var(--theme-color-border-input, #ddd);
`,Qo=j.div`
    width: 100%;
    padding: 0 1rem;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    &.over {
        background-color: var(--theme-color-background-aux, #999);
    }
`,Zo=j.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--theme-color-background-aux, #999);

    &.over {
        background-color: var(--theme-color-background-aux2, #999);
    }
`,Ur=j.div`
    margin-top:0.5rem;
`,Ko=j(Te)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 1000px) {
        align-items: center;
        justify-content: flex-start;
    }
`,$t=j.button`
    height: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    background-color: transparent;
    cursor: pointer;
    margin: 0 0.3rem 0 0;
    border: 0;
    color: var(--theme-color-font);
    width: calc(50% - 0.15rem);

    &:nth-child(2n) {
        margin-right: 0;
    }

    &:hover {
        background-color: var(--theme-color-background-aux2, #999);
    }

    & > span {
        margin-left:0.3rem;
        width: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
    }

    @media (min-width: 1000px) {
        width: auto;

        & > span {
            flex: 1;
        }
    }
`,Jo=j(yt)`
    width:"100%";

    @media (min-width: 1000px) {
        width:"10rem";
    }
`,Xo=j.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    margin-bottom: 1rem;
    `,qo=j.div`
    padding: 0.5rem 0;
    width: 2rem;
    box-sizing: border-box;
    background-color: var(--theme-color-background-aux3);
    color: var(--theme-color-font);
    //background-color: var(--theme-color-background-aux4, #666);
    border-right: 1px solid var(--theme-color-background-aux, #aaa);
    `,el=j.div`
    padding: 0.5rem 0;
    color: var(--theme-color-font-empty);
    `,yr=j.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    border: 0;
    color: var(--theme-color-font);

    &:not(.disabled):hover {
        background-color: var(--theme-color-background-aux2, #999);
    }

    &.disabled {
        opacity: 0.2;
        cursor: default;
    }
`,tl=j.div`
    height: 40px;
    line-height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`,Qr=j.div`
    padding: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`,rl=j.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    height: 80px;
    color: var(--theme-color-font-empty, #666);
    border: 1px solid var(--theme-color-border-input, #f00);
    background-color: var(--theme-color-background-input, #f00);
`,nl=j.div`
    padding: 0 0.5rem;
    height: 20px;
    width: 20px;
    border: 1px solid var(--theme-color-border-input, #666);
    background-color: var(--theme-color-background-input, #f00);

    &.radio {
        border-radius: 10px;
    }
`,wa=j.div`
    width: calc(75% + 20px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
`,Oe=j.div`
    height: 20px;
    width: 20px;
    border: 1px solid var(--theme-color-border-input, #666);
    background-color: var(--theme-color-background-input, #f00);
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux);
    }

    &.checked:after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: 50%;
        background-color: var(--theme-color-font);
    }
`,ja=j.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -5px;
    height: 10px;
    background: linear-gradient(270deg, var(--theme-color-primary,#fff) 0%, #000 100%);
    border: 1px solid var(--theme-color-border-input, #666);
`,mt=j.div`
    font-size: 1rem;
    flex: none;
    text-align:center;
    width:25%;
`,al=j.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    flex: 1;
    width: 100%;

    &.horizontal {
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }
`,An=j.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    border-radius: 3px;
    background-color: var(--theme-color-background-aux2);
    margin: 0.5rem 0 0 0;
    padding: 0 0.5rem;
    height: 40px;

    &.horizontal {
        margin: 0 0.5rem 0.5rem 0;
    }
`,Mn=j.div`
    margin-left: 0.5rem;
    flex: 1;
    font-size: 1rem;
`,Fn=j.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:hover {
        background-color: var(--theme-color-background-aux4)
    }
`,il=j.div`
    font-size: 1rem;
    color: var(--theme-color-font);
`,ol=j.div`
    font-size: 1rem;
    color: var(--theme-color-font-weak);
`,ll=j.div`
    font-size: 1rem;
    color: var(--theme-color-font);
    
    & p:first-child {
        margin-top: 0;
    }
    & p:last-child {
        margin-bottom: 0;
    }
`,sl=j.div`
    position: absolute;
    top: 1px;
    right: 1px;
    bottom: 1px;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--theme-color-value-blue);
    background-color: var(--theme-color-background);
    cursor: pointer;
`,Qt=({onClick:e,icon:t,color:a,border:r,size:n,title:o,hideTextOnMobile:s,disabled:l,tooltip:c,...d})=>{const m=p=>{e&&!l&&e(p)},v=()=>{var p;(p=document.querySelector("body"))==null||p.click()};return i.jsxs(Io,{color:a,size:n,title:c,style:d.style,className:(l?"disabled ":"")+(r?"border ":""),onFocus:()=>{v()},onClick:p=>m(p),children:[t?i.jsx(ae,{path:t,title:o,size:.95,style:{margin:"-2px 0 0 -2px"},color:r?a:"white"}):null,i.jsx("div",{className:s?"btnLabel":"",children:d.children??o??""})]})},cl=Fo,Zr=j.label`
    font-size: 1rem;
    flex: 1;

    &.noWrap {
        white-space: nowrap;
    }
`,Sa=({...e})=>{const[t,a]=y.useState(!1),r=()=>{let n=!t;a(n),e.onCheck&&e.onCheck(n)};return y.useEffect(()=>{a(!!e.checked)},[e.checked]),i.jsxs(_o,{style:e.style,onClick:()=>r(),className:(e.isVertical===!0?"column ":"row ")+(e.className??""),children:[i.jsx(Zr,{style:{cursor:"pointer"},className:e.noWrap?"noWrap":"",children:e.label}),i.jsx($o,{className:t?"checked":""})]})},ul=({onValidate:e,formError:t,...a})=>{const[r,n]=y.useState(""),[o,s]=y.useState(),[l,c]=y.useState(!1),[d,m]=y.useState(""),v=u=>{let f=u.target.value.replace(/[^\d]/gi,""),g=f;f.length>=5&&(g=`${f.substring(0,4)} ${f.substring(4)}`),f.length>=9&&(g=`${f.substring(0,4)} ${f.substring(4,8)} ${f.substring(8)}`),f.length>=13&&(g=`${f.substring(0,4)} ${f.substring(4,8)} ${f.substring(8,12)} ${f.substring(12)}`),f.length>=14&&(g=`${f.substring(0,4)} ${f.substring(4,10)} ${f.substring(10,14)}${f.substring(14)}`),f.length>=15&&(g=`${f.substring(0,4)} ${f.substring(4,10)} ${f.substring(10,15)}${f.substring(15)}`),f.length>=16&&(g=`${f.substring(0,4)} ${f.substring(4,8)} ${f.substring(8,12)} ${f.substring(12,16)}`),m(g),a.onChange&&(u.target.value=g,a.onChange(u))},p=u=>{var f;(f=document.querySelector("body"))==null||f.click(),a.onFocus&&a.onFocus(u),c(!0)},b=u=>{if(d.replace(/[^\d]/gi,"").length<14?m(""):(u.target.value=d??"",a.onChange&&a.onChange(u)),a.onBlur&&a.onBlur(u),e){let g=e(u.target.value)??"";n(g!==!0?String(g):"")}else n("");c(!1)};return y.useEffect(()=>{a.value!==null&&m(String(a.value))},[a.value]),y.useEffect(()=>{o&&typeof o.message=="string"?n(o.message):n((o==null?void 0:o.message[0])??"")},[o]),y.useEffect(()=>{s(t)},[t]),i.jsx(ke,{className:a.className??"",style:a.style??{},children:i.jsxs(De,{width:a.width,children:[i.jsx(Me,{type:"text",id:a.uid,value:d,onChange:v,onFocus:u=>p(u),onBlur:u=>b(u)}),i.jsx(je,{htmlFor:a.uid,className:"hasIcon",children:l?"":r}),r?i.jsx(Se,{title:r,className:l?"hasIcon big":"hasIcon"}):null]})})},dl=({uid:e,copyLabel:t,...a})=>{const[r,n]=y.useState(""),o=l=>{var c;(c=document.querySelector("body"))==null||c.click(),a.onFocus&&a.onFocus(l)},s=()=>{const l=e.replace(/\./gi,"_"),c=document.querySelector("#"+l);c&&(c.select(),c.setSelectionRange(0,99999),navigator.clipboard.writeText(c.value))};return y.useEffect(()=>{a.value!==null&&n(String(a.value))},[a.value]),i.jsx(Oo,{className:a.className??"",style:a.style??{},children:i.jsxs(Ro,{children:[i.jsx(Me,{id:e.replace(/\./gi,"_"),type:"text",readOnly:!0,value:r,onFocus:l=>o(l),style:{paddingRight:"4rem"}}),i.jsx(sl,{onClick:s,children:t})]})})},fl=({onValidate:e,formError:t,...a})=>{const[r,n]=y.useState(""),[o,s]=y.useState(),[l,c]=y.useState(!1),[d,m]=y.useState(""),v=u=>{let f=u.target.value.replace(/[^\d]/gi,""),g=f;f.length>=4&&(g=`${f.substring(0,3)}.${f.substring(3)}`),f.length>=7&&(g=`${f.substring(0,3)}.${f.substring(3,6)}.${f.substring(6)}`),f.length>=10&&(g=`${f.substring(0,3)}.${f.substring(3,6)}.${f.substring(6,9)}-${f.substring(9)}`),f.length>=11&&(g=`${f.substring(0,3)}.${f.substring(3,6)}.${f.substring(6,9)}-${f.substring(9,11)}`),m(g),a.onChange&&(u.target.value=g,a.onChange(u))},p=u=>{var f;(f=document.querySelector("body"))==null||f.click(),a.onFocus&&a.onFocus(u),c(!0)},b=u=>{if(d.replace(/[^\d]/gi,"").length!==11?m(""):(u.target.value=d??"",a.onChange&&a.onChange(u)),a.onBlur&&a.onBlur(u),e){let g=e(u.target.value)??"";n(g!==!0?String(g):"")}else n("");c(!1)};return y.useEffect(()=>{a.value!==null&&m(String(a.value))},[a.value]),y.useEffect(()=>{o&&typeof o.message=="string"?n(o.message):n((o==null?void 0:o.message[0])??"")},[o]),y.useEffect(()=>{s(t)},[t]),i.jsx(ke,{className:a.className??"",style:a.style??{},children:i.jsxs(De,{width:a.width,children:[i.jsx(Me,{type:"text",id:a.uid,value:d,onChange:v,onFocus:u=>p(u),onBlur:u=>b(u)}),i.jsx(je,{htmlFor:a.uid,children:l?"":r}),r?i.jsx(Se,{title:r,className:l?"big":""}):null]})})};function Ca(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=Ca(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function Xt(){for(var e,t,a=0,r="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=Ca(e))&&(r&&(r+=" "),r+=t);return r}const hl=(e,t,a,r)=>{if(a==="length"||a==="prototype"||a==="arguments"||a==="caller")return;const n=Object.getOwnPropertyDescriptor(e,a),o=Object.getOwnPropertyDescriptor(t,a);!ml(n,o)&&r||Object.defineProperty(e,a,o)},ml=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},gl=(e,t)=>{const a=Object.getPrototypeOf(t);a!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,a)},vl=(e,t)=>`/* Wrapped ${e}*/
${t}`,yl=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),xl=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),bl=(e,t,a)=>{const r=a===""?"":`with ${a.trim()}() `,n=vl.bind(null,r,t.toString());Object.defineProperty(n,"name",xl),Object.defineProperty(e,"toString",{...yl,value:n})},pl=(e,t,{ignoreNonConfigurable:a=!1}={})=>{const{name:r}=e;for(const n of Reflect.ownKeys(t))hl(e,t,n,a);return gl(e,t),bl(e,t,r),e};var wl=pl,Or={exports:{}},jl=()=>{const e={};return e.promise=new Promise((t,a)=>{e.resolve=t,e.reject=a}),e};(function(e,t){var a=Mt&&Mt.__awaiter||function(s,l,c,d){return new(c||(c=Promise))(function(m,v){function p(f){try{u(d.next(f))}catch(g){v(g)}}function b(f){try{u(d.throw(f))}catch(g){v(g)}}function u(f){f.done?m(f.value):new c(function(g){g(f.value)}).then(p,b)}u((d=d.apply(s,l||[])).next())})},r=Mt&&Mt.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(jl);function o(s,l="maxAge"){let c,d,m;const v=()=>a(this,void 0,void 0,function*(){if(c!==void 0)return;const u=f=>a(this,void 0,void 0,function*(){m=n.default();const g=f[1][l]-Date.now();if(g<=0){s.delete(f[0]),m.resolve();return}return c=f[0],d=setTimeout(()=>{s.delete(f[0]),m&&m.resolve()},g),typeof d.unref=="function"&&d.unref(),m.promise});try{for(const f of s)yield u(f)}catch{}c=void 0}),p=()=>{c=void 0,d!==void 0&&(clearTimeout(d),d=void 0),m!==void 0&&(m.reject(void 0),m=void 0)},b=s.set.bind(s);return s.set=(u,f)=>{s.has(u)&&s.delete(u);const g=b(u,f);return c&&c===u&&p(),v(),g},v(),s}t.default=o,e.exports=o,e.exports.default=o})(Or,Or.exports);var Sl=Or.exports;const Cl=wl,kl=Sl,xr=new WeakMap,ka=new WeakMap,Zt=(e,{cacheKey:t,cache:a=new Map,maxAge:r}={})=>{typeof r=="number"&&kl(a);const n=function(...o){const s=t?t(o):o[0],l=a.get(s);if(l)return l.data;const c=e.apply(this,o);return a.set(s,{data:c,maxAge:r?Date.now()+r:Number.POSITIVE_INFINITY}),c};return Cl(n,e,{ignoreNonConfigurable:!0}),ka.set(n,a),n};Zt.decorator=(e={})=>(t,a,r)=>{const n=t[a];if(typeof n!="function")throw new TypeError("The decorated value must be a function");delete r.value,delete r.writable,r.get=function(){if(!xr.has(this)){const o=Zt(n,e);return xr.set(this,o),o}return xr.get(this)}};Zt.clear=e=>{const t=ka.get(e);if(!t)throw new TypeError("Can't clear a function that was not memoized!");if(typeof t.clear!="function")throw new TypeError("The cache Map can't be cleared!");t.clear()};var Tl=Zt;const Ta=Jn(Tl);function El(e){return typeof e=="string"}function Ol(e,t,a){return a.indexOf(e)===t}function Dl(e){return e.toLowerCase()===e}function In(e){return e.indexOf(",")===-1?e:e.split(",")}function Dr(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],a=t===void 0?"":t;return Dr(a)}if(e.indexOf("@")!==-1){var r=e.split("@")[0],a=r===void 0?"":r;return Dr(a)}if(e.indexOf("-")===-1||!Dl(e))return e;var n=e.split("-"),o=n[0],s=n[1],l=s===void 0?"":s;return"".concat(o,"-").concat(l.toUpperCase())}function _l(e){var t=e===void 0?{}:e,a=t.useFallbackLocale,r=a===void 0?!0:a,n=t.fallbackLocale,o=n===void 0?"en-US":n,s=[];if(typeof navigator<"u"){for(var l=navigator.languages||[],c=[],d=0,m=l;d<m.length;d++){var v=m[d];c=c.concat(In(v))}var p=navigator.language,b=p&&In(p);s=s.concat(c,b)}return r&&s.push(o),s.filter(El).map(Dr).filter(Ol)}var Pl=Ta(_l,{cacheKey:JSON.stringify});function Rl(e){return Pl(e)[0]||null}var Ea=Ta(Rl,{cacheKey:JSON.stringify});function Pe(e,t,a){return function(n,o){o===void 0&&(o=a);var s=e(n)+o;return t(s)}}function jt(e){return function(a){return new Date(e(a).getTime()-1)}}function St(e,t){return function(r){return[e(r),t(r)]}}function me(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function Fe(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function qt(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function et(e){var t=me(e),a=t+(-t+1)%100,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}var Nl=Pe(me,et,-100),Oa=Pe(me,et,100),Kr=jt(Oa),Al=Pe(me,Kr,-100),Da=St(et,Kr);function Ie(e){var t=me(e),a=t+(-t+1)%10,r=new Date;return r.setFullYear(a,0,1),r.setHours(0,0,0,0),r}var _a=Pe(me,Ie,-10),Jr=Pe(me,Ie,10),er=jt(Jr),Pa=Pe(me,er,-10),Ra=St(Ie,er);function tt(e){var t=me(e),a=new Date;return a.setFullYear(t,0,1),a.setHours(0,0,0,0),a}var Na=Pe(me,tt,-1),Xr=Pe(me,tt,1),tr=jt(Xr),Aa=Pe(me,tr,-1),Ml=St(tt,tr);function qr(e,t){return function(r,n){n===void 0&&(n=t);var o=me(r),s=Fe(r)+n,l=new Date;return l.setFullYear(o,s,1),l.setHours(0,0,0,0),e(l)}}function ze(e){var t=me(e),a=Fe(e),r=new Date;return r.setFullYear(t,a,1),r.setHours(0,0,0,0),r}var Ma=qr(ze,-1),en=qr(ze,1),Ct=jt(en),Fa=qr(Ct,-1),Fl=St(ze,Ct);function Il(e,t){return function(r,n){n===void 0&&(n=t);var o=me(r),s=Fe(r),l=qt(r)+n,c=new Date;return c.setFullYear(o,s,l),c.setHours(0,0,0,0),e(c)}}function kt(e){var t=me(e),a=Fe(e),r=qt(e),n=new Date;return n.setFullYear(t,a,r),n.setHours(0,0,0,0),n}var $l=Il(kt,1),tn=jt($l),Ll=St(kt,tn);function Ia(e){return qt(Ct(e))}var gt,ve={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},Wl=(gt={},gt[ve.GREGORY]=["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],gt[ve.HEBREW]=["he","he-IL"],gt[ve.ISLAMIC]=["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"],gt),rn=[0,1,2,3,4,5,6],br=new Map;function Bl(e){return function(a,r){var n=a||Ea();br.has(n)||br.set(n,new Map);var o=br.get(n);return o.has(e)||o.set(e,new Intl.DateTimeFormat(n||void 0,e).format),o.get(e)(r)}}function zl(e){var t=new Date(e);return new Date(t.setHours(12))}function Ve(e){return function(t,a){return Bl(e)(t,zl(a))}}var Vl={day:"numeric"},Hl={day:"numeric",month:"long",year:"numeric"},Yl={month:"long"},Gl={month:"long",year:"numeric"},Ul={weekday:"short"},Ql={weekday:"long"},Zl={year:"numeric"},Kl=Ve(Vl),Jl=Ve(Hl),Xl=Ve(Yl),$a=Ve(Gl),ql=Ve(Ul),es=Ve(Ql),rr=Ve(Zl),ts=rn[0],rs=rn[5],$n=rn[6];function bt(e,t){t===void 0&&(t=ve.ISO_8601);var a=e.getDay();switch(t){case ve.ISO_8601:return(a+6)%7;case ve.ISLAMIC:return(a+1)%7;case ve.HEBREW:case ve.GREGORY:return a;default:throw new Error("Unsupported calendar type.")}}function ns(e){var t=et(e);return me(t)}function as(e){var t=Ie(e);return me(t)}function _r(e,t){t===void 0&&(t=ve.ISO_8601);var a=me(e),r=Fe(e),n=e.getDate()-bt(e,t);return new Date(a,r,n)}function is(e,t){t===void 0&&(t=ve.ISO_8601);var a=t===ve.GREGORY?ve.GREGORY:ve.ISO_8601,r=_r(e,t),n=me(e)+1,o,s;do o=new Date(n,0,a===ve.ISO_8601?4:1),s=_r(o,t),n-=1;while(e<s);return Math.round((r.getTime()-s.getTime())/(864e5*7))+1}function Be(e,t){switch(e){case"century":return et(t);case"decade":return Ie(t);case"year":return tt(t);case"month":return ze(t);case"day":return kt(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function os(e,t){switch(e){case"century":return Nl(t);case"decade":return _a(t);case"year":return Na(t);case"month":return Ma(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function La(e,t){switch(e){case"century":return Oa(t);case"decade":return Jr(t);case"year":return Xr(t);case"month":return en(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ls(e,t){switch(e){case"decade":return _a(t,-100);case"year":return Na(t,-10);case"month":return Ma(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function ss(e,t){switch(e){case"decade":return Jr(t,100);case"year":return Xr(t,10);case"month":return en(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Wa(e,t){switch(e){case"century":return Kr(t);case"decade":return er(t);case"year":return tr(t);case"month":return Ct(t);case"day":return tn(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function cs(e,t){switch(e){case"century":return Al(t);case"decade":return Pa(t);case"year":return Aa(t);case"month":return Fa(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function us(e,t){switch(e){case"decade":return Pa(t,-100);case"year":return Aa(t,-10);case"month":return Fa(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function Ln(e,t){switch(e){case"century":return Da(t);case"decade":return Ra(t);case"year":return Ml(t);case"month":return Fl(t);case"day":return Ll(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function ds(e,t,a){var r=[t,a].sort(function(n,o){return n.getTime()-o.getTime()});return[Be(e,r[0]),Wa(e,r[1])]}function Ba(e,t,a){return t===void 0&&(t=rr),a.map(function(r){return t(e,r)}).join(" – ")}function fs(e,t,a){return Ba(e,t,Da(a))}function za(e,t,a){return Ba(e,t,Ra(a))}function hs(e){return e.getDay()===new Date().getDay()}function Va(e,t){t===void 0&&(t=ve.ISO_8601);var a=e.getDay();switch(t){case ve.ISLAMIC:case ve.HEBREW:return a===rs||a===$n;case ve.ISO_8601:case ve.GREGORY:return a===$n||a===ts;default:throw new Error("Unsupported calendar type.")}}var Ee="react-calendar__navigation";function ms(e){var t=e.activeStartDate,a=e.drillUp,r=e.formatMonthYear,n=r===void 0?$a:r,o=e.formatYear,s=o===void 0?rr:o,l=e.locale,c=e.maxDate,d=e.minDate,m=e.navigationAriaLabel,v=m===void 0?"":m,p=e.navigationAriaLive,b=e.navigationLabel,u=e.next2AriaLabel,f=u===void 0?"":u,g=e.next2Label,x=g===void 0?"»":g,T=e.nextAriaLabel,k=T===void 0?"":T,E=e.nextLabel,C=E===void 0?"›":E,N=e.prev2AriaLabel,L=N===void 0?"":N,Q=e.prev2Label,re=Q===void 0?"«":Q,G=e.prevAriaLabel,F=G===void 0?"":G,$=e.prevLabel,w=$===void 0?"‹":$,O=e.setActiveStartDate,D=e.showDoubleView,R=e.view,_=e.views,z=_.indexOf(R)>0,ie=R!=="century",S=os(R,t),A=ie?ls(R,t):void 0,V=La(R,t),Z=ie?ss(R,t):void 0,U=function(){if(S.getFullYear()<0)return!0;var ce=cs(R,t);return d&&d>=ce}(),X=ie&&function(){if(A.getFullYear()<0)return!0;var ce=us(R,t);return d&&d>=ce}(),K=c&&c<V,B=ie&&c&&c<Z;function J(){O(S,"prev")}function q(){O(A,"prev2")}function te(){O(V,"next")}function fe(){O(Z,"next2")}function M(ce){var we=function(){switch(R){case"century":return fs(l,s,ce);case"decade":return za(l,s,ce);case"year":return s(l,ce);case"month":return n(l,ce);default:throw new Error("Invalid view: ".concat(R,"."))}}();return b?b({date:ce,label:we,locale:l||Ea()||void 0,view:R}):we}function ge(){var ce="".concat(Ee,"__label");return i.jsxs("button",{"aria-label":v,"aria-live":p,className:ce,disabled:!z,onClick:a,style:{flexGrow:1},type:"button",children:[i.jsx("span",{className:"".concat(ce,"__labelText ").concat(ce,"__labelText--from"),children:M(t)}),D?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"".concat(ce,"__divider"),children:" – "}),i.jsx("span",{className:"".concat(ce,"__labelText ").concat(ce,"__labelText--to"),children:M(V)})]}):null]})}return i.jsxs("div",{className:Ee,children:[re!==null&&ie?i.jsx("button",{"aria-label":L,className:"".concat(Ee,"__arrow ").concat(Ee,"__prev2-button"),disabled:X,onClick:q,type:"button",children:re}):null,w!==null&&i.jsx("button",{"aria-label":F,className:"".concat(Ee,"__arrow ").concat(Ee,"__prev-button"),disabled:U,onClick:J,type:"button",children:w}),ge(),C!==null&&i.jsx("button",{"aria-label":k,className:"".concat(Ee,"__arrow ").concat(Ee,"__next-button"),disabled:K,onClick:te,type:"button",children:C}),x!==null&&ie?i.jsx("button",{"aria-label":f,className:"".concat(Ee,"__arrow ").concat(Ee,"__next2-button"),disabled:B,onClick:fe,type:"button",children:x}):null]})}var Xe=function(){return Xe=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Xe.apply(this,arguments)},gs=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Wn(e){return"".concat(e,"%")}function nn(e){var t=e.children,a=e.className,r=e.count,n=e.direction,o=e.offset,s=e.style,l=e.wrap,c=gs(e,["children","className","count","direction","offset","style","wrap"]);return i.jsx("div",Xe({className:a,style:Xe({display:"flex",flexDirection:n,flexWrap:l?"wrap":"nowrap"},s)},c,{children:y.Children.map(t,function(d,m){var v=o&&m===0?Wn(100*o/r):null;return y.cloneElement(d,Xe(Xe({},d.props),{style:{flexBasis:Wn(100/r),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:v,marginInlineStart:v,marginInlineEnd:0}}))})}))}function vs(e,t,a){return t&&t>e?t:a&&a<e?a:e}function pt(e,t){return t[0]<=e&&t[1]>=e}function ys(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Ha(e,t){return pt(e[0],t)||pt(e[1],t)}function Bn(e,t,a){var r=Ha(t,e),n=[];if(r){n.push(a);var o=pt(e[0],t),s=pt(e[1],t);o&&n.push("".concat(a,"Start")),s&&n.push("".concat(a,"End")),o&&s&&n.push("".concat(a,"BothEnds"))}return n}function xs(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function bs(e){if(!e)throw new Error("args is required");var t=e.value,a=e.date,r=e.hover,n="react-calendar__tile",o=[n];if(!a)return o;var s=new Date,l=function(){if(Array.isArray(a))return a;var b=e.dateType;if(!b)throw new Error("dateType is required when date is not an array of two dates");return Ln(b,a)}();if(pt(s,l)&&o.push("".concat(n,"--now")),!t||!xs(t))return o;var c=function(){if(Array.isArray(t))return t;var b=e.valueType;if(!b)throw new Error("valueType is required when value is not an array of two dates");return Ln(b,t)}();ys(c,l)?o.push("".concat(n,"--active")):Ha(c,l)&&o.push("".concat(n,"--hasActive"));var d=Bn(c,l,"".concat(n,"--range"));o.push.apply(o,d);var m=Array.isArray(t)?t:[t];if(r&&m.length===1){var v=r>c[0]?[c[0],r]:[r,c[0]],p=Bn(v,l,"".concat(n,"--hover"));o.push.apply(o,p)}return o}function nr(e){for(var t=e.className,a=e.count,r=a===void 0?3:a,n=e.dateTransform,o=e.dateType,s=e.end,l=e.hover,c=e.offset,d=e.renderTile,m=e.start,v=e.step,p=v===void 0?1:v,b=e.value,u=e.valueType,f=[],g=m;g<=s;g+=p){var x=n(g);f.push(d({classes:bs({date:x,dateType:o,hover:l,value:b,valueType:u}),date:x}))}return i.jsx(nn,{className:t,count:r,offset:c,wrap:!0,children:f})}function ar(e){var t=e.activeStartDate,a=e.children,r=e.classes,n=e.date,o=e.formatAbbr,s=e.locale,l=e.maxDate,c=e.maxDateTransform,d=e.minDate,m=e.minDateTransform,v=e.onClick,p=e.onMouseOver,b=e.style,u=e.tileClassName,f=e.tileContent,g=e.tileDisabled,x=e.view,T=y.useMemo(function(){var E={activeStartDate:t,date:n,view:x};return typeof u=="function"?u(E):u},[t,n,u,x]),k=y.useMemo(function(){var E={activeStartDate:t,date:n,view:x};return typeof f=="function"?f(E):f},[t,n,f,x]);return i.jsxs("button",{className:Xt(r,T),disabled:d&&m(d)>n||l&&c(l)<n||g&&g({activeStartDate:t,date:n,view:x}),onClick:v?function(E){return v(n,E)}:void 0,onFocus:p?function(){return p(n)}:void 0,onMouseOver:p?function(){return p(n)}:void 0,style:b,type:"button",children:[o?i.jsx("abbr",{"aria-label":o(s,n),children:a}):a,k]})}var Pr=function(){return Pr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Pr.apply(this,arguments)},ps=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},pr="react-calendar__century-view__decades__decade";function ws(e){var t=e.classes,a=t===void 0?[]:t,r=e.currentCentury,n=e.formatYear,o=n===void 0?rr:n,s=ps(e,["classes","currentCentury","formatYear"]),l=s.date,c=s.locale,d=[];return a&&d.push.apply(d,a),pr&&d.push(pr),et(l).getFullYear()!==r&&d.push("".concat(pr,"--neighboringCentury")),i.jsx(ar,Pr({},s,{classes:d,maxDateTransform:er,minDateTransform:Ie,view:"century",children:za(c,o,l)}))}var Rr=function(){return Rr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Rr.apply(this,arguments)},zn=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function js(e){var t=e.activeStartDate,a=e.hover,r=e.showNeighboringCentury,n=e.value,o=e.valueType,s=zn(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),l=ns(t),c=l+(r?119:99);return i.jsx(nr,{className:"react-calendar__century-view__decades",dateTransform:Ie,dateType:"decade",end:c,hover:a,renderTile:function(d){var m=d.date,v=zn(d,["date"]);return i.jsx(ws,Rr({},s,v,{activeStartDate:t,currentCentury:l,date:m}),m.getTime())},start:l,step:10,value:n,valueType:o})}var Nr=function(){return Nr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Nr.apply(this,arguments)};function Ss(e){function t(){return i.jsx(js,Nr({},e))}return i.jsx("div",{className:"react-calendar__century-view",children:t()})}var Ar=function(){return Ar=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ar.apply(this,arguments)},Cs=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},wr="react-calendar__decade-view__years__year";function ks(e){var t=e.classes,a=t===void 0?[]:t,r=e.currentDecade,n=e.formatYear,o=n===void 0?rr:n,s=Cs(e,["classes","currentDecade","formatYear"]),l=s.date,c=s.locale,d=[];return a&&d.push.apply(d,a),wr&&d.push(wr),Ie(l).getFullYear()!==r&&d.push("".concat(wr,"--neighboringDecade")),i.jsx(ar,Ar({},s,{classes:d,maxDateTransform:tr,minDateTransform:tt,view:"decade",children:o(c,l)}))}var Mr=function(){return Mr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Mr.apply(this,arguments)},Vn=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Ts(e){var t=e.activeStartDate,a=e.hover,r=e.showNeighboringDecade,n=e.value,o=e.valueType,s=Vn(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),l=as(t),c=l+(r?11:9);return i.jsx(nr,{className:"react-calendar__decade-view__years",dateTransform:tt,dateType:"year",end:c,hover:a,renderTile:function(d){var m=d.date,v=Vn(d,["date"]);return i.jsx(ks,Mr({},s,v,{activeStartDate:t,currentDecade:l,date:m}),m.getTime())},start:l,value:n,valueType:o})}var Fr=function(){return Fr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Fr.apply(this,arguments)};function Es(e){function t(){return i.jsx(Ts,Fr({},e))}return i.jsx("div",{className:"react-calendar__decade-view",children:t()})}var Ir=function(){return Ir=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Ir.apply(this,arguments)},Os=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Hn=function(e,t,a){if(a||arguments.length===2)for(var r=0,n=t.length,o;r<n;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},Ds="react-calendar__year-view__months__month";function _s(e){var t=e.classes,a=t===void 0?[]:t,r=e.formatMonth,n=r===void 0?Xl:r,o=e.formatMonthYear,s=o===void 0?$a:o,l=Os(e,["classes","formatMonth","formatMonthYear"]),c=l.date,d=l.locale;return i.jsx(ar,Ir({},l,{classes:Hn(Hn([],a,!0),[Ds],!1),formatAbbr:s,maxDateTransform:Ct,minDateTransform:ze,view:"year",children:n(d,c)}))}var $r=function(){return $r=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},$r.apply(this,arguments)},Yn=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Ps(e){var t=e.activeStartDate,a=e.hover,r=e.value,n=e.valueType,o=Yn(e,["activeStartDate","hover","value","valueType"]),s=0,l=11,c=me(t);return i.jsx(nr,{className:"react-calendar__year-view__months",dateTransform:function(d){var m=new Date;return m.setFullYear(c,d,1),ze(m)},dateType:"month",end:l,hover:a,renderTile:function(d){var m=d.date,v=Yn(d,["date"]);return i.jsx(_s,$r({},o,v,{activeStartDate:t,date:m}),m.getTime())},start:s,value:r,valueType:n})}var Lr=function(){return Lr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Lr.apply(this,arguments)};function Rs(e){function t(){return i.jsx(Ps,Lr({},e))}return i.jsx("div",{className:"react-calendar__year-view",children:t()})}var Wr=function(){return Wr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Wr.apply(this,arguments)},Ns=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Lt="react-calendar__month-view__days__day";function As(e){var t=e.calendarType,a=e.classes,r=a===void 0?[]:a,n=e.currentMonthIndex,o=e.formatDay,s=o===void 0?Kl:o,l=e.formatLongDate,c=l===void 0?Jl:l,d=Ns(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),m=d.date,v=d.locale,p=[];return r&&p.push.apply(p,r),Lt&&p.push(Lt),Va(m,t)&&p.push("".concat(Lt,"--weekend")),m.getMonth()!==n&&p.push("".concat(Lt,"--neighboringMonth")),i.jsx(ar,Wr({},d,{classes:p,formatAbbr:c,maxDateTransform:tn,minDateTransform:kt,view:"month",children:s(v,m)}))}var Br=function(){return Br=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Br.apply(this,arguments)},Gn=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Ms(e){var t=e.activeStartDate,a=e.calendarType,r=e.hover,n=e.showFixedNumberOfWeeks,o=e.showNeighboringMonth,s=e.value,l=e.valueType,c=Gn(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),d=me(t),m=Fe(t),v=n||o,p=bt(t,a),b=v?0:p,u=(v?-p:0)+1,f=function(){if(n)return u+6*7-1;var g=Ia(t);if(o){var x=new Date;x.setFullYear(d,m,g),x.setHours(0,0,0,0);var T=7-bt(x,a)-1;return g+T}return g}();return i.jsx(nr,{className:"react-calendar__month-view__days",count:7,dateTransform:function(g){var x=new Date;return x.setFullYear(d,m,g),kt(x)},dateType:"day",hover:r,end:f,renderTile:function(g){var x=g.date,T=Gn(g,["date"]);return i.jsx(As,Br({},c,T,{activeStartDate:t,calendarType:a,currentMonthIndex:m,date:x}),x.getTime())},offset:b,start:u,value:s,valueType:l})}var Ya="react-calendar__month-view__weekdays",jr="".concat(Ya,"__weekday");function Fs(e){for(var t=e.calendarType,a=e.formatShortWeekday,r=a===void 0?ql:a,n=e.formatWeekday,o=n===void 0?es:n,s=e.locale,l=e.onMouseLeave,c=new Date,d=ze(c),m=me(d),v=Fe(d),p=[],b=1;b<=7;b+=1){var u=new Date(m,v,b-bt(d,t)),f=o(s,u);p.push(i.jsx("div",{className:Xt(jr,hs(u)&&"".concat(jr,"--current"),Va(u,t)&&"".concat(jr,"--weekend")),children:i.jsx("abbr",{"aria-label":f,title:f,children:r(s,u).replace(".","")})},b))}return i.jsx(nn,{className:Ya,count:7,onFocus:l,onMouseOver:l,children:p})}var Kt=function(){return Kt=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},Kt.apply(this,arguments)},Un=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a},Qn="react-calendar__tile";function Is(e){var t=e.onClickWeekNumber,a=e.weekNumber,r=i.jsx("span",{children:a});if(t){var n=e.date,o=e.onClickWeekNumber,s=e.weekNumber,l=Un(e,["date","onClickWeekNumber","weekNumber"]);return i.jsx("button",Kt({},l,{className:Qn,onClick:function(c){return o(s,n,c)},type:"button",children:r}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var l=Un(e,["date","onClickWeekNumber","weekNumber"]);return i.jsx("div",Kt({},l,{className:Qn,children:r}))}}function $s(e){var t=e.activeStartDate,a=e.calendarType,r=e.onClickWeekNumber,n=e.onMouseLeave,o=e.showFixedNumberOfWeeks,s=function(){if(o)return 6;var d=Ia(t),m=bt(t,a),v=d-(7-m);return 1+Math.ceil(v/7)}(),l=function(){for(var d=me(t),m=Fe(t),v=qt(t),p=[],b=0;b<s;b+=1)p.push(_r(new Date(d,m,v+b*7),a));return p}(),c=l.map(function(d){return is(d,a)});return i.jsx(nn,{className:"react-calendar__month-view__weekNumbers",count:s,direction:"column",onFocus:n,onMouseOver:n,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:c.map(function(d,m){var v=l[m];if(!v)throw new Error("date is not defined");return i.jsx(Is,{date:v,onClickWeekNumber:r,weekNumber:d},d)})})}var zr=function(){return zr=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},zr.apply(this,arguments)},Ls=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function Ws(e){if(e)for(var t=0,a=Object.entries(Wl);t<a.length;t++){var r=a[t],n=r[0],o=r[1];if(o.includes(e))return n}return ve.ISO_8601}function Bs(e){var t=e.activeStartDate,a=e.locale,r=e.onMouseLeave,n=e.showFixedNumberOfWeeks,o=e.calendarType,s=o===void 0?Ws(a):o,l=e.formatShortWeekday,c=e.formatWeekday,d=e.onClickWeekNumber,m=e.showWeekNumbers,v=Ls(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function p(){return i.jsx(Fs,{calendarType:s,formatShortWeekday:l,formatWeekday:c,locale:a,onMouseLeave:r})}function b(){return m?i.jsx($s,{activeStartDate:t,calendarType:s,onClickWeekNumber:d,onMouseLeave:r,showFixedNumberOfWeeks:n}):null}function u(){return i.jsx(Ms,zr({calendarType:s},v))}var f="react-calendar__month-view";return i.jsx("div",{className:Xt(f,m?"".concat(f,"--weekNumbers"):""),children:i.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[b(),i.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[p(),u()]})]})})}var qe=function(){return qe=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},qe.apply(this,arguments)},Wt="react-calendar",Vt=["century","decade","year","month"],zs=["decade","year","month","day"],an=new Date;an.setFullYear(1,0,1);an.setHours(0,0,0,0);var Vs=new Date(864e13);function vt(e){return e instanceof Date?e:new Date(e)}function Ga(e,t){return Vt.slice(Vt.indexOf(e),Vt.indexOf(t)+1)}function Hs(e,t,a){var r=Ga(t,a);return r.indexOf(e)!==-1}function on(e,t,a){return e&&Hs(e,t,a)?e:a}function Ua(e){var t=Vt.indexOf(e);return zs[t]}function Ys(e,t){var a=Array.isArray(e)?e[t]:e;if(!a)return null;var r=vt(a);if(isNaN(r.getTime()))throw new Error("Invalid date: ".concat(e));return r}function Qa(e,t){var a=e.value,r=e.minDate,n=e.maxDate,o=e.maxDetail,s=Ys(a,t);if(!s)return null;var l=Ua(o),c=function(){switch(t){case 0:return Be(l,s);case 1:return Wa(l,s);default:throw new Error("Invalid index value: ".concat(t))}}();return vs(c,r,n)}var ln=function(e){return Qa(e,0)},Za=function(e){return Qa(e,1)},Gs=function(e){return[ln,Za].map(function(t){return t(e)})};function Ka(e){var t=e.maxDate,a=e.maxDetail,r=e.minDate,n=e.minDetail,o=e.value,s=e.view,l=on(s,n,a),c=ln({value:o,minDate:r,maxDate:t,maxDetail:a})||new Date;return Be(l,c)}function Us(e){var t=e.activeStartDate,a=e.defaultActiveStartDate,r=e.defaultValue,n=e.defaultView,o=e.maxDate,s=e.maxDetail,l=e.minDate,c=e.minDetail,d=e.value,m=e.view,v=on(m,c,s),p=t||a;return p?Be(v,p):Ka({maxDate:o,maxDetail:s,minDate:l,minDetail:c,value:d||r,view:m||n})}function Sr(e){return e&&(!Array.isArray(e)||e.length===1)}function Bt(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var Ja=y.forwardRef(function(t,a){var r=t.activeStartDate,n=t.allowPartialRange,o=t.calendarType,s=t.className,l=t.defaultActiveStartDate,c=t.defaultValue,d=t.defaultView,m=t.formatDay,v=t.formatLongDate,p=t.formatMonth,b=t.formatMonthYear,u=t.formatShortWeekday,f=t.formatWeekday,g=t.formatYear,x=t.goToRangeStartOnSelect,T=x===void 0?!0:x,k=t.inputRef,E=t.locale,C=t.maxDate,N=C===void 0?Vs:C,L=t.maxDetail,Q=L===void 0?"month":L,re=t.minDate,G=re===void 0?an:re,F=t.minDetail,$=F===void 0?"century":F,w=t.navigationAriaLabel,O=t.navigationAriaLive,D=t.navigationLabel,R=t.next2AriaLabel,_=t.next2Label,z=t.nextAriaLabel,ie=t.nextLabel,S=t.onActiveStartDateChange,A=t.onChange,V=t.onClickDay,Z=t.onClickDecade,U=t.onClickMonth,X=t.onClickWeekNumber,K=t.onClickYear,B=t.onDrillDown,J=t.onDrillUp,q=t.onViewChange,te=t.prev2AriaLabel,fe=t.prev2Label,M=t.prevAriaLabel,ge=t.prevLabel,ce=t.returnValue,we=ce===void 0?"start":ce,xe=t.selectRange,$e=t.showDoubleView,rt=t.showFixedNumberOfWeeks,Le=t.showNavigation,ir=Le===void 0?!0:Le,or=t.showNeighboringCentury,nt=t.showNeighboringDecade,Tt=t.showNeighboringMonth,lr=Tt===void 0?!0:Tt,Et=t.showWeekNumbers,Ot=t.tileClassName,We=t.tileContent,sr=t.tileDisabled,He=t.value,at=t.view,Ye=y.useState(l),cr=Ye[0],Ge=Ye[1],Dt=y.useState(null),ur=Dt[0],_t=Dt[1],Pt=y.useState(Array.isArray(c)?c.map(function(W){return W!==null?vt(W):null}):c!=null?vt(c):null),it=Pt[0],ot=Pt[1],lt=y.useState(d),Re=lt[0],Ue=lt[1],ye=r||cr||Us({activeStartDate:r,defaultActiveStartDate:l,defaultValue:c,defaultView:d,maxDate:N,maxDetail:Q,minDate:G,minDetail:$,value:He,view:at}),be=function(){var W=function(){return xe&&Sr(it)?it:He!==void 0?He:it}();return W?Array.isArray(W)?W.map(function(H){return H!==null?vt(H):null}):W!==null?vt(W):null:null}(),Qe=Ua(Q),de=on(at||Re,$,Q),Ce=Ga($,Q),Rt=xe?ur:null,Ze=Ce.indexOf(de)<Ce.length-1,Nt=Ce.indexOf(de)>0,At=y.useCallback(function(W){var H=function(){switch(we){case"start":return ln;case"end":return Za;case"range":return Gs;default:throw new Error("Invalid returnValue.")}}();return H({maxDate:N,maxDetail:Q,minDate:G,value:W})},[N,Q,G,we]),Ke=y.useCallback(function(W,H){Ge(W);var Y={action:H,activeStartDate:W,value:be,view:de};S&&!Bt(ye,W)&&S(Y)},[ye,S,be,de]),Je=y.useCallback(function(W,H){var Y=function(){switch(de){case"century":return Z;case"decade":return K;case"year":return U;case"month":return V;default:throw new Error("Invalid view: ".concat(de,"."))}}();Y&&Y(W,H)},[V,Z,U,K,de]),st=y.useCallback(function(W,H){if(Ze){Je(W,H);var Y=Ce[Ce.indexOf(de)+1];if(!Y)throw new Error("Attempted to drill down from the lowest view.");Ge(W),Ue(Y);var ue={action:"drillDown",activeStartDate:W,value:be,view:Y};S&&!Bt(ye,W)&&S(ue),q&&de!==Y&&q(ue),B&&B(ue)}},[ye,Ze,S,Je,B,q,be,de,Ce]),ct=y.useCallback(function(){if(Nt){var W=Ce[Ce.indexOf(de)-1];if(!W)throw new Error("Attempted to drill up from the highest view.");var H=Be(W,ye);Ge(H),Ue(W);var Y={action:"drillUp",activeStartDate:H,value:be,view:W};S&&!Bt(ye,H)&&S(Y),q&&de!==W&&q(Y),J&&J(Y)}},[ye,Nt,S,J,q,be,de,Ce]),ut=y.useCallback(function(W,H){var Y=be;Je(W,H);var ue=xe&&!Sr(Y),ne;if(xe)if(ue)ne=Be(Qe,W);else{if(!Y)throw new Error("previousValue is required");if(Array.isArray(Y))throw new Error("previousValue must not be an array");ne=ds(Qe,Y,W)}else ne=At(W);var he=!xe||ue||T?Ka({maxDate:N,maxDetail:Q,minDate:G,minDetail:$,value:ne,view:de}):null;H.persist(),Ge(he),ot(ne);var pe={action:"onChange",activeStartDate:he,value:ne,view:de};if(S&&!Bt(ye,he)&&S(pe),A)if(xe){var Ne=Sr(ne);if(!Ne)A(ne||null,H);else if(n){if(Array.isArray(ne))throw new Error("value must not be an array");A([ne||null,null],H)}}else A(ne||null,H)},[ye,n,At,T,N,Q,G,$,S,A,Je,xe,be,Qe,de]);function h(W){_t(W)}function P(){_t(null)}y.useImperativeHandle(a,function(){return{activeStartDate:ye,drillDown:st,drillUp:ct,onChange:ut,setActiveStartDate:Ke,value:be,view:de}},[ye,st,ct,ut,Ke,be,de]);function I(W){var H=W?La(de,ye):Be(de,ye),Y=Ze?st:ut,ue={activeStartDate:H,hover:Rt,locale:E,maxDate:N,minDate:G,onClick:Y,onMouseOver:xe?h:void 0,tileClassName:Ot,tileContent:We,tileDisabled:sr,value:be,valueType:Qe};switch(de){case"century":return i.jsx(Ss,qe({formatYear:g,showNeighboringCentury:or},ue));case"decade":return i.jsx(Es,qe({formatYear:g,showNeighboringDecade:nt},ue));case"year":return i.jsx(Rs,qe({formatMonth:p,formatMonthYear:b},ue));case"month":return i.jsx(Bs,qe({calendarType:o,formatDay:m,formatLongDate:v,formatShortWeekday:u,formatWeekday:f,onClickWeekNumber:X,onMouseLeave:xe?P:void 0,showFixedNumberOfWeeks:typeof rt<"u"?rt:$e,showNeighboringMonth:lr,showWeekNumbers:Et},ue));default:throw new Error("Invalid view: ".concat(de,"."))}}function ee(){return ir?i.jsx(ms,{activeStartDate:ye,drillUp:ct,formatMonthYear:b,formatYear:g,locale:E,maxDate:N,minDate:G,navigationAriaLabel:w,navigationAriaLive:O,navigationLabel:D,next2AriaLabel:R,next2Label:_,nextAriaLabel:z,nextLabel:ie,prev2AriaLabel:te,prev2Label:fe,prevAriaLabel:M,prevLabel:ge,setActiveStartDate:Ke,showDoubleView:$e,view:de,views:Ce}):null}var oe=Array.isArray(be)?be:[be];return i.jsxs("div",{className:Xt(Wt,xe&&oe.length===1&&"".concat(Wt,"--selectRange"),$e&&"".concat(Wt,"--doubleView"),s),ref:k,children:[ee(),i.jsxs("div",{className:"".concat(Wt,"__viewContainer"),onBlur:xe?P:void 0,onMouseLeave:xe?P:void 0,children:[I(),$e?I(!0):null]})]})});const Qs=({uid:e,locale:t,depencencies:a,formError:r,calendar:n,minViewmode:o,onValidate:s,...l})=>{const[c,d]=y.useState(""),[m,v]=y.useState(),[p,b]=y.useState(!1),[u,f]=y.useState(""),[g,x]=y.useState(),[T,k]=y.useState(!1),[E,C]=y.useState(!1),N=y.useRef(null),L=F=>{let $=F.target.value.replace(/[^\d\/]/gi,""),[w,O,D]=$.split("/"),R=!!O,_=!!D;w.length>=2&&(O===void 0||O.length<2)&&(w=w.substring(0,2),O=R?O:w.substring(2,4),R=!0),O&&O.length>=2&&(D===void 0||D.length<4)&&(O=O.substring(0,2),D=_?D:O.substring(2,6),_=!0);let z=w.substring(0,2)+(R?"/":"")+(O?O.substring(0,2):"")+(_?"/":"")+(D?D.substring(0,4):"");z=z.substring(0,10),f(z),l.onChange&&(F.target.value=z,l.onChange(F))},Q=F=>{var $;($=document.querySelector("body"))==null||$.click(),l.onFocus&&l.onFocus(F),b(!0)},re=F=>{let[$,w,O]=(u??"").split("/").map(D=>parseInt(D));if(!$||!w||!O)f("");else{let D=new Date;D.setUTCFullYear(O),D.setUTCMonth(w-1),D.setUTCDate($),D.getUTCFullYear()===O&&D.getUTCMonth()===w-1&&D.getUTCDate()===$?l.onChange&&(F.target.value=u??"",l.onChange(F)):f("")}if(l.onBlur&&l.onBlur(F),s){let D=s(F.target.value)??"";d(D!==!0?String(D):"")}else d("");b(!1)},G=()=>{setTimeout(()=>{k(!0)},1)};return y.useEffect(()=>{if(a&&a.length&&s){let F=s(String(l.value??""))??"";d(F!==!0?String(F):"")}},a),y.useEffect(()=>{x(u?Ui(u):void 0)},[u]),y.useEffect(()=>{l.value!==null&&f(String(l.value))},[l.value]),y.useEffect(()=>{m&&typeof m.message=="string"?d(m.message):d((m==null?void 0:m.message[0])??"")},[m]),y.useEffect(()=>{v(r)},[r]),y.useEffect(()=>{setTimeout(()=>{if(N.current){let F=!Wi(N.current);C(F&&T)}},1)},[T]),y.useEffect(()=>{var $;let F=()=>{k(!1)};return($=document.querySelector("body"))==null||$.addEventListener("click",F),()=>{var w;(w=document.querySelector("body"))==null||w.removeEventListener("click",F)}},[]),i.jsxs(ke,{className:l.className??"",style:l.style??{},children:[i.jsxs(De,{width:l.width,children:[i.jsx(ya,{type:"text",id:e,value:u,onChange:L,onFocus:F=>Q(F),onBlur:F=>re(F),onClick:()=>G()}),i.jsx(je,{htmlFor:e,className:"hasIcon",children:p?"":c}),c?i.jsx(Se,{title:c,className:p?"hasIcon big":"hasIcon"}):null]}),i.jsx(wt,{children:i.jsx(ae,{size:1,path:ta})}),i.jsx(pa,{className:(T&&n!==!1?"show":"")+(E?"top":""),ref:N,onClick:F=>{F.stopPropagation()},children:i.jsx(Ja,{minDetail:o??"decade",locale:t,next2Label:null,prev2Label:null,value:g,nextLabel:i.jsx(ae,{path:Jt,size:1}),prevLabel:i.jsx(ae,{path:Yr,size:1}),onChange:F=>{if(!F||Array.isArray(F))return;if(s){let w=s(Er(F))??"";d(w!==!0?String(w):"")}else d("");const $=Er(F);if(k(!1),f($),l.onChange){let w={target:{value:""}};w.target.value=$??"",l.onChange(w)}}})})]})},Zs=({formError:e,...t})=>{const[a,r]=y.useState(""),[n,o]=y.useState(),[s,l]=y.useState(""),[c,d]=y.useState(!1),m=b=>{let u=b.target.value.replace(/\D/gi,""),f=u;if(u.length>=3&&(f=`${u.substring(0,2)}/${u.substring(2)}`),u.length>=6&&(f=`${u.substring(0,2)}/${u.substring(2,6)}`),l(f),t.onChange&&u.length===6){let[g,x]=f.split("/").map(k=>parseInt(k,10)),T=new Date(x,g-1,1,0,0,0,0);T&&!isNaN(T.getTime())&&t.onChange(T)}},v=b=>{var u;(u=document.querySelector("body"))==null||u.click(),t.onFocus&&t.onFocus(b),d(!0)},p=b=>{b.target.value.replace(/[^\d]/gi,"").length!==6?(l(""),t.onChange&&t.onChange(void 0)):t.onBlur&&t.onBlur(b),d(!1)};return y.useEffect(()=>{t.value&&l(Gi(t.value))},[t.value]),y.useEffect(()=>{n&&typeof n.message=="string"?r(n.message):r((n==null?void 0:n.message[0])??"")},[n]),y.useEffect(()=>{o(e)},[e]),i.jsx(ke,{className:t.className??"",style:t.style??{},children:i.jsxs(De,{width:t.width,children:[i.jsx(xa,{type:"text",id:t.uid,value:s,onChange:b=>m(b),onFocus:b=>v(b),onBlur:b=>p(b)}),i.jsx(je,{htmlFor:t.uid,children:c?"":a}),a?i.jsx(Se,{title:a,className:c?"big":""}):null]})})},Ae=({onValidate:e,depencencies:t,formError:a,reference:r,onKeyDown:n,...o})=>{const[s,l]=y.useState(""),[c,d]=y.useState(),[m,v]=y.useState(!1),p=g=>{o.onChange&&o.onChange(g)},b=g=>{var x;(x=document.querySelector("body"))==null||x.click(),o.onFocus&&o.onFocus(g),v(!0)},u=g=>{if(o.onBlur&&o.onBlur(g),e){let x=e(g.target.value)??"";l(x!==!0?String(x):"")}else l("");v(!1)},f=g=>{n&&n(g)};return y.useEffect(()=>{if(t&&t.length&&e){let g=e(String(o.value??""))??"";l(g!==!0?String(g):"")}},t),y.useEffect(()=>{c&&typeof c.message=="string"?l(c.message):l((c==null?void 0:c.message[0])??"")},[c]),y.useEffect(()=>{d(a)},[a]),i.jsxs(ke,{className:o.className??"",style:o.style??{},children:[i.jsx(Me,{id:o.uid,type:o.type,value:o.value,placeholder:o.placeholder??"",ref:r,onChange:p,onFocus:g=>b(g),onBlur:g=>u(g),onKeyDown:g=>f(g)}),i.jsx(je,{htmlFor:o.uid,children:m?"":s}),s?i.jsx(Se,{title:s,className:m?"big":""}):null]})},Xa=({onValidate:e,formError:t,readOnly:a,width:r,...n})=>{const[o,s]=y.useState(),[l,c]=y.useState(""),[d,m]=y.useState(!1),v=u=>{if(n.onChange&&n.onChange(u),e){let f=e(u.target.value)??"";c(f!==!0?String(f):"")}else c("")},p=u=>{var f;(f=document.querySelector("body"))==null||f.click(),n.onFocus&&n.onFocus(u),m(!0)},b=u=>{if(n.onBlur&&n.onBlur(u),e){let f=e(u.target.value)??"";c(f!==!0?String(f):"")}else c("");m(!1)};return y.useEffect(()=>{o&&typeof o.message=="string"?c(o.message):c((o==null?void 0:o.message[0])??"")},[o]),y.useEffect(()=>{s(t)},[t]),i.jsxs(ke,{className:n.className??"",width:r,children:[a?i.jsx(Mo,{children:y.Children.map(n.children,u=>y.isValidElement(u)&&u.props.value===n.value?y.cloneElement(u,{}):null)}):i.jsx(Ao,{id:n.uid,value:n.value,width:r,onChange:v,onFocus:u=>p(u),onBlur:u=>b(u),children:n.children}),i.jsx(je,{htmlFor:n.uid,className:"hasDrop",children:d?"":l}),l?i.jsx(Se,{title:l,className:"hasDrop"+(d?" big":"")}):null]})},Ks=({labelNew:e,labelText:t,labelCheck:a,labelRadio:r,labelRating:n,labelTemplate:o,labelTitle:s,labelTextArea:l,labelAnswer:c,labelNoData:d,value:m,onChange:v,templates:p,onTemplateSelect:b})=>{const[u,f]=y.useState([]),[g,x]=y.useState(""),T=w=>{if(w!=="TEXT")return w==="RATING"?Array(5).fill({id:1,label:""}).map((O,D)=>({id:D+1,label:""})):[{id:Date.now(),label:""}]},k=w=>{const O=Date.now();let D=[...u,{type:w,title:"",order:u.length+1,id:O,options:T(w)}];v(D),f(D)},E=(w,O)=>{let D=u.map(R=>R.id===O?{...R,title:w}:R);v(D),f(D)},C=w=>{let O=u.find(D=>D.id===w);return(O==null?void 0:O.title)??""},N=(w,O,D)=>{var z,ie;let R=u.find(S=>S.id===O),_=(z=R==null?void 0:R.options)==null?void 0:z.find(S=>S.id===D);if((ie=R==null?void 0:R.options)!=null&&ie.every(S=>S.id===D?!0:S.label.length>0)&&(_==null?void 0:_.label.length)===0&&w.length!==0)Q(O,D,w);else{let S=u.map(A=>A.id===O?{...A,options:(A.options??[]).map(V=>V.id===D?{id:V.id,label:w}:V)}:A);v(S),f(S)}},L=(w,O)=>{var _;let D=u.find(z=>z.id===w),R=(_=D==null?void 0:D.options)==null?void 0:_.find(z=>z.id===O);return(R==null?void 0:R.label)??""},Q=(w,O,D)=>{let R={id:Date.now(),label:""},_=u.map(z=>z.id===w?{...z,options:z.options?[...z.options.map(ie=>ie.id===O?{id:ie.id,label:D}:ie),R]:[R]}:z);v(_),f(_)},re=w=>{let O=u.filter(D=>D.id!==w).map((D,R)=>({...D,order:R+1}));v(O),f(O)},G=w=>{var R;let O=((R=u.find(_=>_.id===w))==null?void 0:R.order)??0;if(!O||O<=1)return;let D=u.map(_=>_.order===O-1?{..._,order:O}:_.order===O?{..._,order:O-1}:_).sort((_,z)=>_.order-z.order);v(D),f(D)},F=w=>{var R;let O=((R=u.find(_=>_.id===w))==null?void 0:R.order)??Number.POSITIVE_INFINITY;if(!O||O>=u.length)return;let D=u.map(_=>_.order===O+1?{..._,order:O}:_.order===O?{..._,order:O+1}:_).sort((_,z)=>_.order-z.order);v(D),f(D)},$=w=>{const O=w.target.value;x(O),b&&b(O)};return y.useEffect(()=>{f(m)},[m]),i.jsxs(Ur,{children:[i.jsxs(la,{rowJustify:"space-between",columnAlign:"stretch",columnJustify:"flex-start",style:{marginBottom:"1rem"},children:[i.jsxs(yt,{align:"flex-start",children:[i.jsx("div",{children:e}),i.jsxs(Ko,{justify:"flex-start",children:[i.jsxs($t,{onClick:()=>k("TEXT"),children:[i.jsx(ae,{path:bi,size:1}),i.jsx("span",{children:t})]}),i.jsxs($t,{onClick:()=>k("CHECK"),children:[i.jsx(ae,{path:vi,size:1}),i.jsx("span",{children:a==null?void 0:a.split(" ").map((w,O)=>i.jsx("span",{children:w},O))})]}),i.jsxs($t,{onClick:()=>k("RADIO"),children:[i.jsx(ae,{path:gi,size:1}),r==null?void 0:r.split(" ").map((w,O)=>i.jsx("span",{children:w},O))]}),i.jsxs($t,{onClick:()=>k("RATING"),children:[i.jsx(ae,{path:ji,size:1}),i.jsx("span",{children:n})]})]})]}),i.jsx(i.Fragment,{children:p&&p.length?i.jsxs(Jo,{align:"flex-start",children:[i.jsx("div",{children:o}),i.jsx(Te,{style:{width:"100%"},children:i.jsxs(Xa,{uid:"formbuilder.template",value:g,onChange:$,width:"2.5rem",children:[i.jsx("option",{value:""}),p.map(w=>i.jsx("option",{value:w.id,children:w.label},w.id))]})})]}):null})]}),u&&u.length>0?i.jsx(i.Fragment,{children:u.map(w=>{var O;return i.jsxs(Xo,{children:[i.jsxs(qo,{children:[i.jsx(tl,{children:w.order}),i.jsx(yr,{className:w.order===1?"disabled":"",onClick:()=>G(w.id),children:i.jsx(ae,{path:hi,size:1})}),i.jsx(yr,{className:w.order===u.length?"disabled":"",onClick:()=>F(w.id),children:i.jsx(ae,{path:fi,size:1})}),i.jsx(yr,{onClick:()=>re(w.id),children:i.jsx(ae,{path:aa,size:1})})]}),i.jsxs(Qr,{children:[i.jsx(Te,{align:"flex-start",justify:"stretch",children:i.jsx(Ae,{uid:"question."+w.id,value:C(w.id),placeholder:s,onChange:D=>E(D.target.value,w.id)})}),w.type==="TEXT"?i.jsx(rl,{children:l}):null,w.type==="CHECK"||w.type==="RADIO"?(O=w.options)==null?void 0:O.map(D=>i.jsxs(Te,{children:[i.jsx(nl,{className:w.type.toLocaleLowerCase()}),i.jsx(Ae,{uid:"question."+w.id+".option."+D.id,value:L(w.id,D.id),placeholder:c,style:{flex:1,marginBottom:0},onChange:R=>N(R.target.value,w.id,D.id)})]},D.id)):null,w.type==="RATING"?i.jsxs(yt,{children:[i.jsxs(Te,{justify:"space-between",children:[i.jsx(Ae,{style:{flex:"none",width:"25%"},uid:"question."+w.id+".option.1",value:L(w.id,1),onChange:D=>N(D.target.value,w.id,1)}),i.jsx(Ae,{style:{flex:"none",width:"25%"},uid:"question."+w.id+".option.3",value:L(w.id,3),onChange:D=>N(D.target.value,w.id,3)}),i.jsx(Ae,{style:{flex:"none",width:"25%"},uid:"question."+w.id+".option.5",value:L(w.id,5),onChange:D=>N(D.target.value,w.id,5)})]}),i.jsxs(wa,{children:[i.jsx(ja,{}),i.jsx(Oe,{}),i.jsx(Oe,{}),i.jsx(Oe,{}),i.jsx(Oe,{}),i.jsx(Oe,{})]}),i.jsxs(Te,{justify:"space-between",children:[i.jsx(Ae,{style:{flex:"none",width:"25%",marginTop:"0.5rem",marginLeft:"18.75%"},uid:"question."+w.id+".option.2",value:L(w.id,2),onChange:D=>N(D.target.value,w.id,2)}),i.jsx(Ae,{style:{flex:"none",width:"25%",marginTop:"0.5rem",marginRight:"18.75%"},uid:"question."+w.id+".option.4",value:L(w.id,4),onChange:D=>N(D.target.value,w.id,4)})]})]}):null]})]},w.id)})}):i.jsx(el,{children:d==null?void 0:d.split(`
`).map((w,O)=>i.jsx("div",{children:w},O))})]})},qa=({...e})=>{const[t,a]=y.useState(!1),r=()=>{a(!0),e.onCheck&&e.onCheck(!0)};return y.useEffect(()=>{a(!!e.checked)},[e.checked]),i.jsxs(Po,{onClick:()=>r(),className:(e.isVertical===!0?"column ":"row ")+(e.className??""),style:e.style,children:[i.jsx(Zr,{style:{cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},children:e.label??e.labelContent}),i.jsx(Lo,{className:t?"checked":""})]})},ei=({onValidate:e,depencencies:t,formError:a,...r})=>{const[n,o]=y.useState(""),[s,l]=y.useState(),[c,d]=y.useState(!1),m=b=>{r.onChange&&r.onChange(b)},v=b=>{var u;(u=document.querySelector("body"))==null||u.click(),r.onFocus&&r.onFocus(b),d(!0)},p=b=>{if(r.onBlur&&r.onBlur(b),e){let u=e(b.target.value)??"";o(u!==!0?String(u):"")}else o("");d(!1)};return y.useEffect(()=>{if(t&&t.length&&e){let b=e(String(r.value??""))??"";o(b!==!0?String(b):"")}},t),y.useEffect(()=>{s&&typeof s.message=="string"?o(s.message):o((s==null?void 0:s.message[0])??"")},[s]),y.useEffect(()=>{l(a)},[a]),i.jsxs(Do,{className:r.className??"",style:r.style??{},children:[i.jsx(No,{id:r.uid,value:r.value,onChange:m,onFocus:b=>v(b),onBlur:b=>p(b),placeholder:r.placeholder??""}),i.jsx(je,{htmlFor:r.uid,children:c?"":n}),n?i.jsx(Se,{title:n,className:c?"big":""}):null]})},Js=({onChange:e,form:t})=>{const[a,r]=y.useState([]),[n,o]=y.useState({});y.useEffect(()=>{r(t)},[t]);const s=(c,d)=>{const m=(v,p,b)=>{if(!p[0])return b;let u=p[0];return v[u]!==void 0?{...v,[u]:m(v[u],p.slice(1),b)}:{...v,[u]:m({},p.slice(1),b)}};o(v=>{let p=m(v,c,d);return e&&e(p),p})},l=c=>{const d=(m,v)=>{if(v&&v.length===1)return m[v[0]];let p=v[0];if(m[p]!==void 0)return d(m[p],v.slice(1))};return d(n,c)};return i.jsx(Ur,{children:a.map(c=>{var d,m;return i.jsxs(Qr,{children:[i.jsx(il,{children:c.title}),c.type==="TEXT"?i.jsx(ei,{uid:"question."+c.id,style:{height:"100px",minHeight:"100px"},value:l([String(c.id)]),onChange:v=>s([String(c.id)],v.target.value)}):null,c.type==="CHECK"?(d=c.options)==null?void 0:d.filter(v=>v.label.length>0).map(v=>i.jsx(Sa,{uid:`question.${c.id}.option.${v.id}`,label:v.label,className:"compact",checked:l([String(c.id),String(v.id)]),onCheck:p=>s([String(c.id),String(v.id)],p)},v.id)):null,c.type==="RADIO"?(m=c.options)==null?void 0:m.filter(v=>v.label.length>0).map(v=>i.jsx(qa,{uid:`question.${c.id}.option.${v.id}`,label:v.label,className:"compact",checked:l([String(c.id)])===String(v.id),onCheck:()=>s([String(c.id)],String(v.id))},v.id)):null,c.type==="RATING"?i.jsxs(yt,{children:[i.jsxs(Te,{children:[i.jsx(mt,{style:{marginRight:"12.5%"},children:c.options?c.options[0].label:""}),i.jsx(mt,{style:{marginRight:"0"},children:c.options?c.options[2].label:""}),i.jsx(mt,{style:{marginRight:"0",marginLeft:"12.5%"},children:c.options?c.options[4].label:""})]}),i.jsxs(wa,{children:[i.jsx(ja,{}),i.jsx(Oe,{className:l([String(c.id)])==="1"?"checked":"",onClick:()=>s([String(c.id)],"1")}),i.jsx(Oe,{className:l([String(c.id)])==="2"?"checked":"",onClick:()=>s([String(c.id)],"2")}),i.jsx(Oe,{className:l([String(c.id)])==="3"?"checked":"",onClick:()=>s([String(c.id)],"3")}),i.jsx(Oe,{className:l([String(c.id)])==="4"?"checked":"",onClick:()=>s([String(c.id)],"4")}),i.jsx(Oe,{className:l([String(c.id)])==="5"?"checked":"",onClick:()=>s([String(c.id)],"5")})]}),i.jsxs(Te,{children:[i.jsx(mt,{style:{marginRight:"0",marginLeft:"18.75%"},children:c.options?c.options[1].label:""}),i.jsx(mt,{style:{marginRight:"0",marginLeft:"12.5%"},children:c.options?c.options[3].label:""})]})]}):null]},c.id)})})},Xs=({value:e,form:t})=>{const a=r=>{const n=(o,s)=>{if(s&&s.length===1)return o[s[0]];let l=s[0];if(o[l]!==void 0)return n(o[l],s.slice(1))};return n(e,r)};return i.jsx(Ur,{children:t.map(r=>{var n,o,s,l,c;return i.jsxs(Qr,{children:[i.jsx(ol,{children:r.title}),i.jsxs(ll,{children:[r.type==="TEXT"?a([String(r.id)]).replace(/[\r\n]{1,}/g,`
`).split(`
`).map((d,m)=>i.jsx("p",{children:d},m)):null,r.type==="CHECK"?(n=r.options)==null?void 0:n.filter(d=>a([String(r.id),String(d.id)])).map(d=>d.label).join(", "):null,r.type==="RADIO"?(s=(o=r.options)==null?void 0:o.find(d=>a([String(r.id)])===String(d.id)))==null?void 0:s.label:null,r.type==="RATING"?(c=(l=r.options)==null?void 0:l.find(d=>a([String(r.id)])===String(d.id)))==null?void 0:c.label:null]})]},r.id)})})},qs=({onValidate:e,formError:t,min:a,max:r,...n})=>{const[o,s]=y.useState(""),[l,c]=y.useState(),[d,m]=y.useState(!1),[v,p]=y.useState(""),b=g=>{let x=g.target.value.replace(/[^\d]/gi,"");x=x.substring(0,r??1e3),p(x),n.onChange&&(g.target.value=x,n.onChange(g))},u=g=>{var x;(x=document.querySelector("body"))==null||x.click(),n.onFocus&&n.onFocus(g),m(!0)},f=g=>{let x=v.replace(/[^\d]/gi,"");if(x.length<(a??0)||x.length>(r??1e3)?p(""):(g.target.value=v??"",n.onChange&&n.onChange(g)),n.onBlur&&n.onBlur(g),e){let T=e(g.target.value)??"";s(T!==!0?String(T):"")}else s("");m(!1)};return y.useEffect(()=>{n.value!==null&&p(String(n.value))},[n.value]),y.useEffect(()=>{l&&typeof l.message=="string"?s(l.message):s((l==null?void 0:l.message[0])??"")},[l]),y.useEffect(()=>{c(t)},[t]),i.jsx(ke,{className:n.className??"",style:n.style??{},children:i.jsxs(De,{width:n.width,children:[i.jsx(Me,{type:"text",id:n.uid,value:v,onChange:b,onFocus:g=>u(g),onBlur:g=>f(g)}),i.jsx(je,{htmlFor:n.uid,children:d?"":o}),o?i.jsx(Se,{title:o,className:d?"big":""}):null]})})},Zn=(e,t,a)=>(typeof e=="string"&&(e=parseFloat(e)),new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)),ec=({onValidate:e,depencencies:t,formError:a,...r})=>{const[n,o]=y.useState(""),[s,l]=y.useState(),[c,d]=y.useState(!1),[m,v]=y.useState(""),p=f=>{let g=parseFloat(f.target.value.replace(/[^\d]/gi,""))/100,x=Zn(g);console.log(g,x),v(x),r.onChange&&r.onChange(g)},b=f=>{var g;(g=document.querySelector("body"))==null||g.click(),r.onFocus&&r.onFocus(f),d(!0)},u=f=>{if(r.onBlur&&r.onBlur(f),e){let g=e(f.target.value)??"";o(g!==!0?String(g):"")}else o("");d(!1)};return y.useEffect(()=>{if(t&&t.length&&e){let f=e(String(r.value??""))??"";o(f!==!0?String(f):"")}},t),y.useEffect(()=>{r.value!==null&&v(Zn(r.value??0))},[r.value]),y.useEffect(()=>{s&&typeof s.message=="string"?o(s.message):o((s==null?void 0:s.message[0])??"")},[s]),y.useEffect(()=>{l(a)},[a]),i.jsx(ke,{className:r.className??"",children:i.jsxs(De,{width:r.width,children:[i.jsx(Me,{id:r.uid,value:m,onChange:p,onFocus:f=>b(f),onBlur:f=>u(f)}),i.jsx(je,{htmlFor:r.uid,children:c?"":n}),n?i.jsx(Se,{title:n,className:c?"big":""}):null]})})},tc=({onValidate:e,depencencies:t,formError:a,locale:r,calendar:n,...o})=>{const[s,l]=y.useState(""),[c,d]=y.useState(),[m,v]=y.useState(!1),[p,b]=y.useState(""),[u,f]=y.useState(),[g,x]=y.useState(!1),T=E=>{var C;(C=document.querySelector("body"))==null||C.click(),setTimeout(()=>{x(!0)},1),o.onFocus&&o.onFocus(E),v(!0)},k=E=>{if(o.onBlur&&o.onBlur(E),e){let C=e(E.target.value)??"";l(C!==!0?String(C):"")}else l("");v(!1)};return y.useEffect(()=>{if(t&&t.length&&e){let E=e(String(o.value??""))??"";l(E!==!0?String(E):"")}},t),y.useEffect(()=>{o.value&&(b(Cn(o.value)),f(o.value))},[o.value]),y.useEffect(()=>{c&&typeof c.message=="string"?l(c.message):l((c==null?void 0:c.message[0])??"")},[c]),y.useEffect(()=>{d(a)},[a]),y.useEffect(()=>{var C;let E=()=>{x(!1)};return(C=document.querySelector("body"))==null||C.addEventListener("click",E),()=>{var N;(N=document.querySelector("body"))==null||N.removeEventListener("click",E)}},[]),i.jsxs(ke,{className:o.className??"",style:o.style??{},children:[i.jsxs(De,{width:o.width,children:[i.jsx(xa,{type:"text",id:o.uid,value:p,readOnly:!0,onFocus:E=>T(E),onBlur:E=>k(E),onClick:E=>E.stopPropagation()}),i.jsx(je,{htmlFor:o.uid,className:"hasIcon",children:m?"":s}),s?i.jsx(Se,{title:s,className:m?"hasIcon big":"hasIcon"}):null]}),i.jsx(wt,{children:i.jsx(ae,{size:1,path:ta})}),i.jsx(pa,{className:g&&n!==!1?"show":"",onClick:E=>{E.stopPropagation()},children:i.jsx(Ja,{minDetail:"decade",maxDetail:"year",defaultView:"year",locale:r,next2Label:null,prev2Label:null,value:u,nextLabel:i.jsx(ae,{path:Jt,size:1}),prevLabel:i.jsx(ae,{path:Yr,size:1}),tileClassName:({date:E})=>`monthcalendar-${E.getUTCMonth()}-${o.uid.replace(/\./gi,"-")}`,onChange:E=>{if(E===null||Array.isArray(E))return;E.setDate(1);const C=Er(E),N=Cn(E);if(e){let Q=e(C)??"";l(Q!==!0?String(Q):"")}else l("");x(!1),b(N);let L=document.querySelector(`.monthcalendar-11-${o.uid.replace(/\./gi,"-")}`);L&&L.focus(),o.onChange&&o.onChange(E)}})})]})},rc=({onValidate:e,depencencies:t,formError:a,...r})=>{const[n,o]=y.useState(""),[s,l]=y.useState(),[c,d]=y.useState(!1),[m,v]=y.useState(""),p=f=>{let g=f.target.value.replace(/[^\d\/]/gi,""),x="("+g;g.length>=2&&(x=`(${g.substring(0,2)}) ${g.substring(2)}`),g.length>=6&&(x=`(${g.substring(0,2)}) ${g.substring(2,6)}-${g.substring(6)}`),g.length>=11&&(x=`(${g.substring(0,2)}) ${g.substring(2,7)}-${g.substring(7)}`),g.length>=12&&(g=g.substring(0,14),x=`+${g.substring(0,g.length-11)} (${g.substring(g.length-11,g.length-9)}) ${g.substring(g.length-9,g.length-4)}-${g.substring(g.length-4,g.length)}`),v(x),r.onChange&&(f.target.value=x,r.onChange(f))},b=f=>{var g;(g=document.querySelector("body"))==null||g.click(),r.onFocus&&r.onFocus(f),d(!0)},u=f=>{let g=m.replace(/[^\d]/gi,"");if(g.length<10||g.length>14?v(""):(f.target.value=m??"",r.onChange&&r.onChange(f)),r.onBlur&&r.onBlur(f),e){let x=e(f.target.value)??"";o(x!==!0?String(x):"")}else o("");d(!1)};return y.useEffect(()=>{if(t&&t.length&&e){let f=e(String(r.value??""))??"";o(f!==!0?String(f):"")}},t),y.useEffect(()=>{r.value!==null&&v(String(r.value))},[r.value]),y.useEffect(()=>{s&&typeof s.message=="string"?o(s.message):o((s==null?void 0:s.message[0])??"")},[s]),y.useEffect(()=>{l(a)},[a]),i.jsxs(ke,{className:r.className??"",style:r.style??{},children:[i.jsxs(De,{width:r.width,children:[i.jsx(ya,{type:"text",id:r.uid,value:m,onChange:p,onFocus:f=>b(f),onBlur:f=>u(f)}),i.jsx(je,{htmlFor:r.uid,className:"hasIcon",children:c?"":n}),n?i.jsx(Se,{title:n,className:c?"hasIcon big":"hasIcon"}):null]}),i.jsx(wt,{children:i.jsx(ae,{size:1,path:wi})})]})},nc=({labelDrag:e,labelOr:t,labelMaxSize:a,labelSearch:r,value:n,...o})=>{const[s,l]=y.useState(!1),[c,d]=y.useState(""),[m,v]=y.useState(!1),p=y.useRef(null),b=function(k){k.preventDefault(),k.stopPropagation(),k.type==="dragenter"||k.type==="dragover"?l(!0):k.type==="dragleave"&&l(!1)},u=function(k){k.preventDefault(),k.stopPropagation(),l(!1),k.dataTransfer.files&&k.dataTransfer.files[0]&&g(k.dataTransfer.files)},f=function(k){k.preventDefault(),k.currentTarget.files&&k.currentTarget.files[0]&&g(k.currentTarget.files)},g=k=>{const E=new FileReader,C=k.item(0);if(v(!1),!!C){if(C.size>1048576){v(!0);return}E.onloadend=function(){d(E.result?String(E.result):"")},E.readAsDataURL(C),o.onChange&&typeof o.onChange=="function"&&o.onChange(C)}},x=()=>{const k=p.current?p.current:null;k&&k.click()},T=k=>{k.stopPropagation(),k.preventDefault(),d(""),o.onChange&&typeof o.onChange=="function"&&o.onChange(void 0)};return y.useEffect(()=>{n&&d(n)},[n]),i.jsx(Wo,{children:i.jsxs(Bo,{onDragEnter:b,children:[i.jsx(ba,{id:o.uid,accept:"image/*",ref:p,onChange:f}),c?i.jsxs(i.Fragment,{children:[i.jsx(Ho,{children:i.jsx("img",{src:c})}),i.jsx(Yo,{children:i.jsx(Qt,{icon:aa,color:"#BF0000",onClick:T})})]}):i.jsxs(i.Fragment,{children:[i.jsx(ae,{path:ra,size:3,style:{opacity:s?1:.3}}),i.jsx(Pn,{children:e}),i.jsx(zo,{children:t??"or"}),i.jsx(Qt,{color:"#0250C7",onClick:x,title:r}),i.jsx(Pn,{style:{color:m?"var(--theme-color-value-red)":"var(--theme-color-font-empty)"},children:a})]}),s?i.jsx(Vo,{onDragEnter:b,onDragLeave:b,onDragOver:b,onDrop:u}):null]})})},ac=({onValidate:e,formError:t,onClick:a,onFocus:r,...n})=>{const[o,s]=y.useState(),[l,c]=y.useState(""),[d,m]=y.useState(!1),[v,p]=y.useState(""),[b,u]=y.useState(!1),[f,g]=y.useState(),[x,T]=y.useState([]),[k,E]=y.useState(1),[C,N]=y.useState(1),L=y.useRef(),Q=R=>{let _=R.target.value;p(_),L.current&&clearInterval(L.current),L.current=setTimeout(()=>{D(1,_)},300)},re=R=>{let _=x.filter(z=>z.index===R)[0]??void 0;if(p(_==null?void 0:_.label),u(!1),n.onChange&&n.onChange({value:String(_==null?void 0:_.value),label:_==null?void 0:_.label}),e){let z=e(String(_==null?void 0:_.value))??"";c(z!==!0?String(z):"")}else c("")},G=R=>{var _;(_=document.querySelector("body"))==null||_.click(),r&&r(R),n.readOnly!==!0&&(u(!0),m(!0))},F=R=>{switch(R.key){case"ArrowUp":g(_=>{let z=(_??-1)-1;return z<0?x.length-1:z});break;case"ArrowDown":g(_=>{let z=(_??-1)+1;return z>=x.length?0:z});break;case"Enter":re(f);break}},$=R=>{if(v&&v.length>0){let _=x.filter(z=>z.label.includes(v));_.length>0&&p(_[0].label)}if(n.onBlur&&n.onBlur(R),e){let _=e(R.target.value)??"";c(_!==!0?String(_):"")}else c("");m(!1)},w=R=>{g(R)},O=()=>{g(void 0)},D=y.useCallback((R,_)=>{let z=!0;return R&&E(R),(async()=>{if(!n.loader||!n.transform)return;const ie=await n.loader(R,_??v?_??v:void 0);z&&ie.data&&ie.data.items&&(T(ie.data.items.map((S,A)=>n.transform?n.transform(S,A):void 0)),N(Math.ceil(ie.data.total/5)))})(),()=>{z=!1}},[n.transform,n.loader]);return y.useEffect(()=>{c((o==null?void 0:o.message[0])??"")},[o]),y.useEffect(()=>{t&&s(t)},[t]),y.useEffect(()=>{if(!n.value)p("");else{let R=x.find(_=>_.value===n.value);p(R?R.label:"")}},[n.value]),y.useEffect(()=>{n.labelValue?p(n.labelValue):p("")},[n.labelValue]),y.useEffect(()=>{var _;D();let R=()=>{u(!1)};return(_=document.querySelector("body"))==null||_.addEventListener("click",R),()=>{var z;(z=document.querySelector("body"))==null||z.removeEventListener("click",R)}},[]),i.jsxs(ke,{className:n.className??"",onClick:R=>R.stopPropagation(),onBlur:()=>{console.log("TRIGGER")},children:[i.jsx(Me,{id:n.uid+"--filter",value:v,autoComplete:"off",readOnly:n.readOnly||!1,onChange:Q,onFocus:G,onBlur:$,onKeyDown:F}),n.readOnly!==!0?i.jsx(wt,{style:{opacity:1},children:i.jsx(ae,{size:.8,path:yi,color:"var(--theme-color-font, #000)"})}):null,i.jsx(je,{htmlFor:n.uid,children:d?"":l}),l?i.jsx(Se,{title:l,className:d?"big":""}):null,b?i.jsxs(Uo,{onMouseLeave:O,children:[x.map((R,_)=>i.jsx(Qo,{className:f===_?"over":"",onMouseEnter:()=>w(_),onClick:()=>re(_),children:R.label},_)),i.jsx(Zo,{children:i.jsx(sa,{page:k,total:C,onPageChange:D})})]}):null]})},zt=(e,t,a)=>{for(;e.length<a;)e=t+e;return e},ic=({onValidate:e,depencencies:t,timepicker:a,formError:r,...n})=>{const[o,s]=y.useState(""),[l,c]=y.useState(),[d,m]=y.useState(!1),[v,p]=y.useState(""),[b,u]=y.useState(!1),[f,g]=y.useState(0),[x,T]=y.useState(0),k=y.useRef(null),E=y.useRef(null),C=G=>{let F=G.target.value.replace(/[^\d:]/gi,""),[$,w]=F.split(":"),O=!!w;$.length>=2&&(w===void 0||w.length<2)&&($=$.substring(0,2),w=O?w:$.substring(2,4),O=!0);let D=$.substring(0,2),R=w?w.substring(0,2):"",_=D+(O?":":"")+R;_=_.substring(0,5),p(_),g(parseInt(D,10)),T(parseInt(R,10)),n.onChange&&(G.target.value=_,n.onChange(G))},N=G=>{var F;(F=document.querySelector("body"))==null||F.click(),n.onFocus&&n.onFocus(G),m(!0)},L=G=>{let[F,$]=(v??"").split(":").map(w=>parseInt(w,10));if(!String(F)||!String($)?p(""):F<24&&$<=59?n.onChange&&(G.target.value=v??"",n.onChange(G)):p(""),n.onBlur&&n.onBlur(G),e){let w=e(G.target.value)??"";s(w!==!0?String(w):"")}else s("");m(!1)},Q=()=>{setTimeout(()=>{u(!0)},1)},re=(G,F,$)=>{let w=zt(String(G??0),"0",2)+":"+zt(String(F??0),"0",2);g(G??0),T(F??0),p(w);const O=$;if(O.target.value=w??"",n.onChange&&n.onChange(O),e){let D=e(O.target.value)??"";s(D!==!0?String(D):"")}else s("")};return y.useEffect(()=>{!b||!k.current||!E.current||(k.current.scrollTop=x*8,E.current.scrollTop=f*40)},[b,x,f]),y.useEffect(()=>{if(t&&t.length&&e){let G=e(String(n.value??""))??"";s(G!==!0?String(G):"")}},t),y.useEffect(()=>{var F;let G=()=>{u(!1)};return(F=document.querySelector("body"))==null||F.addEventListener("click",G),()=>{var $;($=document.querySelector("body"))==null||$.removeEventListener("click",G)}},[]),y.useEffect(()=>{n.value!==null&&p(String(n.value))},[n.value]),y.useEffect(()=>{l&&typeof l.message=="string"?s(l.message):s((l==null?void 0:l.message[0])??"")},[l]),y.useEffect(()=>{c(r)},[r]),i.jsxs(ke,{className:n.className??"",children:[i.jsxs(De,{width:n.width,children:[i.jsx(Me,{id:n.uid,value:v,onChange:C,onFocus:G=>N(G),onBlur:G=>L(G),onClick:()=>Q()}),i.jsx(je,{htmlFor:n.uid,className:"hasIcon",children:d?"":o}),o?i.jsx(Se,{title:o,className:d?"hasIcon big":"hasIcon"}):null]}),i.jsx(wt,{children:i.jsx(ae,{size:1,path:xi})}),b&&a!==!1?i.jsxs(Go,{children:[i.jsx(Rn,{ref:E,children:Array(24).fill(0).map((G,F)=>i.jsx(Nn,{onClick:$=>{re(F,x,$)},className:f===F?"selected":"",children:zt(String(F),"0",2)}))}),i.jsx(Rn,{ref:k,children:Array(12).fill(0).map((G,F)=>i.jsx(Nn,{onClick:$=>{re(f,F*5,$)},className:x===F*5?"selected":"",children:zt(String(F*5),"0",2)}))})]}):null]})},oc=({multiple:e,externalFiles:t,horizontal:a,labelUpload:r,...n})=>{const[o,s]=y.useState([]),[l,c]=y.useState(),d=y.useRef(null),m=function(u){u.preventDefault(),u.currentTarget.files&&u.currentTarget.files[0]&&v(u.currentTarget.files)},v=u=>{if(!u.item(0))return;const g=[];for(let x=0;x<u.length;x++)u.item(x)!==null&&g.push({id:String(Date.now())+String(x)+String(Math.ceil(Math.random()*89999+1e4)),file:u.item(x)});typeof n.onChange=="function"&&n.onChange([...o,...g]),s(x=>[...x,...g])},p=()=>{const u=d.current?d.current:null;u&&u.click()},b=(u,f)=>{const g=o.filter(x=>x.id!==u)??[];s(g),typeof n.onChange=="function"&&n.onChange(g),f===!0&&n.onRemoveFileExternal&&n.onRemoveFileExternal(u)};return y.useEffect(()=>{s(n.value)},[n.value]),y.useEffect(()=>{c(t)},[t]),i.jsxs(al,{className:(n.className??"")+(a?" horizontal":""),style:n.style??{},children:[i.jsx(ba,{id:n.uid,ref:d,onChange:m,multiple:e===!0}),i.jsx(Qt,{icon:ra,onClick:p,color:"var(--theme-color-blue)",title:r,size:9,style:{margin:a?"0 0.5rem 0.5rem 0":"0"}}),o.map(u=>i.jsxs(An,{className:a?"horizontal":"",children:[i.jsx(ae,{size:1,path:wn}),i.jsx(Mn,{children:u.file.name}),i.jsx(Fn,{onClick:()=>b(u.id,!1),children:i.jsx(ae,{size:.7,path:Ht})})]},u.id)),l==null?void 0:l.map(u=>i.jsxs(An,{children:[i.jsx(ae,{size:1,path:wn}),i.jsx(Mn,{children:u.name}),i.jsx(Fn,{onClick:()=>b(u.id,!0),children:i.jsx(ae,{size:.7,path:Ht})})]},u.id))]})},lc=j.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--theme-color-font-input, #000);
    background-color: var(--theme-color-primary, #ddd);
    color: #fff;
    height: 50px;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 0 3px 3px rgba(0,0,0,0.3);
    top: calc(100% + 20px);
    left: 50px;
    padding: 0 10px 0 40px;
    transition: all .3s ease 0s;

    &.active {
        top: calc(100% - 100px);
    }

    &:before {
        content: '';
        height: 20px;
        width: 20px;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translate3d(-50%, -50%, 0);
        border: 2px solid transparent;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        border-radius: 50%;
        animation: loading-spinner infinite forwards linear 1s;
    }
`,sc=j.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--theme-color-font-input, #000);
    background-color: var(--theme-color-primary, #ddd);
    color: #fff;
    min-height: 50px;
    min-width: 90%;
    max-width: 90%;
    box-shadow: 0 3px 3px rgba(0,0,0,0.3);
    bottom: 0;
    transform: translate3d(0, 110%, 0);
    left: 5%;
    padding: 0 10px 0 5px;
    transition: all .3s ease 0s;
    z-index: 1000;

    &.active {
        transform: translate3d(0, -50px, 0);
    }

    &.success {
        border-color: var(--theme-color-successmessage-border, #0f0);
        background-color: var(--theme-color-successmessage-background, #ddd);

        &>svg {
            color: var(--theme-color-successmessage-border, #0f0);
        }
    }

    &.error {
        border-color: var(--theme-color-errormessage-border, #0f0);
        background-color: var(--theme-color-errormessage-background, #ddd);

        &>svg {
            color: var(--theme-color-errormessage-border, #0f0);
        }
    }

    @media (min-width: 1000px) {
        min-width: 50px;
        max-width: 600px;
        left: 50px;
    }
`,cc=j.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex: 1;
    min-height: 300px;
    overflow: hidden;
`,uc=j.div`
    height: 3.5rem;
    min-height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    box-sizing: border-box;
    border-top: 1px solid var(--theme-color-line, rgba(255,255,255, 0.3));
`,dc=j.div`
    width: 3rem;
    min-width: 3rem;
    border-right: 1px solid var(--theme-color-line, rgba(255,255,255, 0.3));
`,fc=j.div`
    position: relative;
    flex: 1;
`,hc=j.div`
    position: absolute;
    background-color: var(--theme-color-primary, #863BD1);
    min-height: 1rem;
    left: 0;
    right: 3rem;
    box-shadow: 0 3px 5px rgba(0,0,0,0.3);
    padding: 0 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`,Kn=j.div`
    position: absolute;
    background-color: var(--theme-color-background-event-other, #bbb);
    left: 0;
    right: 3rem;
    box-shadow: 0 3px 5px rgba(0,0,0,0.3);
    padding: 0 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    &.conflict {
        right: 0;
        left: 2rem;
    }
`,Cr=j.div`
    font-size: 1.0rem;
    line-height: 1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--theme-color-primary-font);
    
    &.other {
        align-items: stretch;
        color: var(--theme-color-font);
        padding-top: 0.3rem;
    }
`,kr=j.div`
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 0.8rem;
`,mc=j.div`
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 0.8rem;
    color: var(--theme-color-font, "#000");
    border-right: 1px solid var(--theme-color-font, "#000");
    margin-right: 0.4rem;
    padding-right: 0.4rem;
`,gc=j.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    margin: ${e=>e.margin!==void 0?`${e.margin}`:"0"};
    padding: ${e=>e.$padding!==void 0?`${e.$padding}`:"0"};
    color: var(--theme-color-font-empty, #888);
`,vc=j.div`
    width: 100%;
    min-height: 3.5rem;
    position:absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, var(--theme-color-background-aux) 0%, var(--theme-color-primary) 100%);
`,yc=({title:e,size:t,margin:a,icon:r,padding:n})=>i.jsxs(gc,{margin:a,$padding:n,children:[i.jsx(ae,{path:r,size:t??5,style:{opacity:.4}}),i.jsx("div",{children:e})]}),xc=j.div`
    width: 100%;
    background-color: var(--theme-color-background-filter);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
`,bc=j.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 0;
    box-sizing: border-box;
`,pc=({loading:e})=>i.jsx(lc,{className:e&&e.length?"active":"",children:i.jsx(Yt,{path:"loading"})}),wc=({messages:e,onPop:t})=>{const[a,r]=y.useState(!1),[n,o]=y.useState(),[s,l]=y.useState(),c=y.useRef(),d=y.useRef(!0),m=()=>{switch(n){case"success":return mi;case"error":return Ht;default:return Ht}};return y.useEffect(()=>(e&&e.length>0&&!d.current?(r(!0),o(e[0].messageType),l(e[0].content),c.current=setTimeout(()=>{setTimeout(()=>{t&&t()},500)},5e3)):r(!1),()=>{clearTimeout(c.current)}),[e]),y.useEffect(()=>{d.current&&(d.current=!1)},[]),i.jsxs(sc,{className:(a?"active ":"")+n,children:[i.jsx(ae,{size:1,path:m()}),s]})},jc=j.div`
    padding: 0 4px;
    height: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    min-width: 4rem;
    background-color: ${e=>e.color??"#999"}
`,Sc=(e,t,a,r)=>e>=a&&e<r||t>a&&t<=r||a>=e&&a<t||r>e&&r<=t,Cc=({start:e,end:t,date:a,eventName:r,location:n,locationList:o,events:s})=>{const[l,c]=y.useState(),[d,m]=y.useState(),[v,p]=y.useState(0),[b,u]=y.useState(),f=(()=>{let x=(l??0)/60,T=(d??0)/60,k=Math.floor(x)-Math.min(x,2),E=Math.floor(T)+Math.min(24-T,2);k>19&&(k=19),E<5&&(E=5);const C=Li(E-k,5,10);return Array(C).fill(0).map((N,L)=>({time:N,hour:k+L,timestring:xt((k+L)*60)}))})(),g=(()=>{const x=l&&d?Sn(l,d):0,T=Math.min(x,5)*3.5;return{time:Math.floor((l??0)/60),offset:(l??0)%60/60*3.5+"rem",height:T+"rem",heightVal:T,conflict:!1,overflow:x>5}})();return y.useEffect(()=>{if(e){c(e??0);let x=e/60,T=Math.min(Math.floor(x)-Math.min(x,2),19);p(T)}t&&m(t??0)},[e,t]),y.useEffect(()=>{!l||!d||!a||u((s==null?void 0:s.map(x=>{var C;let T=Math.floor(x.time/60),k=x.time?(Math.min(Sn(x.time,x.timeend),5)-(v>T?v-T:0))*3.5:0;return{time:T,clock:xt(x.time),offset:(x.time??0)%60/60*3.5+"rem",height:k+"rem",heightVal:k,name:x.event_name,location:(C=o==null?void 0:o.filter(N=>N.id===x.location_id)[0])==null?void 0:C.name,conflict:Sc(x.time,x.time+120,l,d)}}))??[])},[l,d,s]),i.jsx(cc,{children:f.map((x,T)=>i.jsxs(uc,{children:[i.jsx(dc,{children:x.timestring}),i.jsxs(fc,{children:[T===0?b==null?void 0:b.filter(k=>x.hour>k.time&&x.hour<=k.time+120&&k.heightVal>0).map(k=>i.jsxs(Kn,{className:k.conflict?"conflict":"",style:{top:k.offset,height:k.height},children:[i.jsxs(Cr,{className:"other",children:[i.jsx(mc,{children:k.clock})," ",k.name]}),i.jsx(kr,{children:k.location})]})):null,b==null?void 0:b.filter(k=>x.hour===k.time).map(k=>i.jsxs(Kn,{className:k.conflict?"conflict":"",style:{top:k.offset,height:k.height},children:[i.jsx(Cr,{className:"other",children:k.name}),i.jsx(kr,{children:k.location})]})),g.time===x.hour&&l!==void 0&&d!==void 0?i.jsxs(hc,{style:{top:g.offset,height:g.height},children:[i.jsx(Cr,{children:r??""}),i.jsx(kr,{children:n??""}),g.overflow?i.jsx(vc,{}):null]}):null]})]},x.timestring))})};exports.Breadcrumb=Di;exports.Button=Qt;exports.ButtonRow=cl;exports.CPFInput=fl;exports.Card=Mi;exports.Checkbox=Sa;exports.Column=yt;exports.CopyInput=dl;exports.CreditCardInput=ul;exports.DateInput=Qs;exports.DueMonthInput=Zs;exports.EmptyState=yc;exports.FilterBar=xc;exports.FilterRow=bc;exports.FormAnswer=Js;exports.FormBuilder=Ks;exports.FormResult=Xs;exports.Grid=Ii;exports.GridTime=so;exports.GridTimeHeader=ua;exports.GridTimeTable=ca;exports.Input=Ae;exports.IntegerInput=qs;exports.Label=Zr;exports.Loading=pc;exports.Menu=Co;exports.Message=wc;exports.Modal=ko;exports.MoneyInput=ec;exports.MonthInput=tc;exports.PageContent=$i;exports.Paginator=sa;exports.PhoneInput=rc;exports.ProfilePicture=nc;exports.Radio=qa;exports.Row=Te;exports.RowElement=ia;exports.RowOrColumn=la;exports.RowOrColumnElement=oa;exports.Select=Xa;exports.SelectPaged=ac;exports.SimpleTopbar=Eo;exports.Tabs=Hi;exports.Tag=jc;exports.Textarea=ei;exports.TimeInput=ic;exports.Timecheck=Cc;exports.Title=_i;exports.TitleBar=Pi;exports.Topbar=To;exports.Translate=Yt;exports.Upload=oc;exports.i18n=Gr;
//# sourceMappingURL=index.cjs.js.map
