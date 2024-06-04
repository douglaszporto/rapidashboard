import Ur, { useState as R, useEffect as I, useRef as _e, Children as ea, cloneElement as ta, useMemo as dn, forwardRef as Xa, useCallback as Ve, useImperativeHandle as qa, isValidElement as ei } from "react";
import w from "styled-components";
import { useTranslation as ti } from "react-i18next";
import Gr from "i18next";
var $t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Or = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function ri() {
  if (fn)
    return mt;
  fn = 1;
  var e = Ur, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, c, d) {
    var m, v = {}, b = null, x = null;
    d !== void 0 && (b = "" + d), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (x = c.ref);
    for (m in c)
      r.call(c, m) && !o.hasOwnProperty(m) && (v[m] = c[m]);
    if (l && l.defaultProps)
      for (m in c = l.defaultProps, c)
        v[m] === void 0 && (v[m] = c[m]);
    return { $$typeof: t, type: l, key: b, ref: x, props: v, _owner: n.current };
  }
  return mt.Fragment = a, mt.jsx = s, mt.jsxs = s, mt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function ni() {
  return hn || (hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ur, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), u = Symbol.iterator, f = "@@iterator";
    function g(h) {
      if (h === null || typeof h != "object")
        return null;
      var _ = u && h[u] || h[f];
      return typeof _ == "function" ? _ : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(h) {
      {
        for (var _ = arguments.length, $ = new Array(_ > 1 ? _ - 1 : 0), te = 1; te < _; te++)
          $[te - 1] = arguments[te];
        C("error", h, $);
      }
    }
    function C(h, _, $) {
      {
        var te = y.ReactDebugCurrentFrame, le = te.getStackAddendum();
        le !== "" && (_ += "%s", $ = $.concat([le]));
        var z = $.map(function(Y) {
          return String(Y);
        });
        z.unshift("Warning: " + _), Function.prototype.apply.call(console[h], console, z);
      }
    }
    var T = !1, k = !1, N = !1, W = !1, Z = !1, ne;
    ne = Symbol.for("react.module.reference");
    function G(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === o || Z || h === n || h === d || h === m || W || h === x || T || k || N || typeof h == "object" && h !== null && (h.$$typeof === b || h.$$typeof === v || h.$$typeof === s || h.$$typeof === l || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === ne || h.getModuleId !== void 0));
    }
    function F(h, _, $) {
      var te = h.displayName;
      if (te)
        return te;
      var le = _.displayName || _.name || "";
      return le !== "" ? $ + "(" + le + ")" : $;
    }
    function L(h) {
      return h.displayName || "Context";
    }
    function p(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case a:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case d:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case l:
            var _ = h;
            return L(_) + ".Consumer";
          case s:
            var $ = h;
            return L($._context) + ".Provider";
          case c:
            return F(h, h.render, "ForwardRef");
          case v:
            var te = h.displayName || null;
            return te !== null ? te : p(h.type) || "Memo";
          case b: {
            var le = h, z = le._payload, Y = le._init;
            try {
              return p(Y(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, P, E, V, oe, j, A, H;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function Q() {
      {
        if (D === 0) {
          P = console.log, E = console.info, V = console.warn, oe = console.error, j = console.group, A = console.groupCollapsed, H = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        D++;
      }
    }
    function q() {
      {
        if (D--, D === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, h, {
              value: P
            }),
            info: O({}, h, {
              value: E
            }),
            warn: O({}, h, {
              value: V
            }),
            error: O({}, h, {
              value: oe
            }),
            group: O({}, h, {
              value: j
            }),
            groupCollapsed: O({}, h, {
              value: A
            }),
            groupEnd: O({}, h, {
              value: H
            })
          });
        }
        D < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = y.ReactCurrentDispatcher, B;
    function X(h, _, $) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (le) {
            var te = le.stack.trim().match(/\n( *(at )?)/);
            B = te && te[1] || "";
          }
        return `
` + B + h;
      }
    }
    var ee = !1, re;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      re = new he();
    }
    function M(h, _) {
      if (!h || ee)
        return "";
      {
        var $ = re.get(h);
        if ($ !== void 0)
          return $;
      }
      var te;
      ee = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = J.current, J.current = null, Q();
      try {
        if (_) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (Re) {
              te = Re;
            }
            Reflect.construct(h, [], Y);
          } else {
            try {
              Y.call();
            } catch (Re) {
              te = Re;
            }
            h.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            te = Re;
          }
          h();
        }
      } catch (Re) {
        if (Re && te && typeof Re.stack == "string") {
          for (var U = Re.stack.split(`
`), de = te.stack.split(`
`), ae = U.length - 1, me = de.length - 1; ae >= 1 && me >= 0 && U[ae] !== de[me]; )
            me--;
          for (; ae >= 1 && me >= 0; ae--, me--)
            if (U[ae] !== de[me]) {
              if (ae !== 1 || me !== 1)
                do
                  if (ae--, me--, me < 0 || U[ae] !== de[me]) {
                    var we = `
` + U[ae].replace(" at new ", " at ");
                    return h.displayName && we.includes("<anonymous>") && (we = we.replace("<anonymous>", h.displayName)), typeof h == "function" && re.set(h, we), we;
                  }
                while (ae >= 1 && me >= 0);
              break;
            }
        }
      } finally {
        ee = !1, J.current = z, q(), Error.prepareStackTrace = le;
      }
      var Me = h ? h.displayName || h.name : "", un = Me ? X(Me) : "";
      return typeof h == "function" && re.set(h, un), un;
    }
    function ve(h, _, $) {
      return M(h, !1);
    }
    function ue(h) {
      var _ = h.prototype;
      return !!(_ && _.isReactComponent);
    }
    function je(h, _, $) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return M(h, ue(h));
      if (typeof h == "string")
        return X(h);
      switch (h) {
        case d:
          return X("Suspense");
        case m:
          return X("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return ve(h.render);
          case v:
            return je(h.type, _, $);
          case b: {
            var te = h, le = te._payload, z = te._init;
            try {
              return je(z(le), _, $);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, Le = {}, it = y.ReactDebugCurrentFrame;
    function We(h) {
      if (h) {
        var _ = h._owner, $ = je(h.type, h._source, _ ? _.type : null);
        it.setExtraStackFrame($);
      } else
        it.setExtraStackFrame(null);
    }
    function or(h, _, $, te, le) {
      {
        var z = Function.call.bind(be);
        for (var Y in h)
          if (z(h, Y)) {
            var U = void 0;
            try {
              if (typeof h[Y] != "function") {
                var de = Error((te || "React class") + ": " + $ + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              U = h[Y](_, Y, te, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ae) {
              U = ae;
            }
            U && !(U instanceof Error) && (We(le), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", $, Y, typeof U), We(null)), U instanceof Error && !(U.message in Le) && (Le[U.message] = !0, We(le), S("Failed %s type: %s", $, U.message), We(null));
          }
      }
    }
    var lr = Array.isArray;
    function ot(h) {
      return lr(h);
    }
    function Dt(h) {
      {
        var _ = typeof Symbol == "function" && Symbol.toStringTag, $ = _ && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return $;
      }
    }
    function sr(h) {
      try {
        return Et(h), !1;
      } catch {
        return !0;
      }
    }
    function Et(h) {
      return "" + h;
    }
    function _t(h) {
      if (sr(h))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(h)), Et(h);
    }
    var ze = y.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ge, lt, Qe;
    Qe = {};
    function ur(h) {
      if (be.call(h, "ref")) {
        var _ = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function Ze(h) {
      if (be.call(h, "key")) {
        var _ = Object.getOwnPropertyDescriptor(h, "key").get;
        if (_ && _.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function Pt(h, _) {
      if (typeof h.ref == "string" && ze.current && _ && ze.current.stateNode !== _) {
        var $ = p(ze.current.type);
        Qe[$] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(ze.current.type), h.ref), Qe[$] = !0);
      }
    }
    function dr(h, _) {
      {
        var $ = function() {
          Ge || (Ge = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        $.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: $,
          configurable: !0
        });
      }
    }
    function Rt(h, _) {
      {
        var $ = function() {
          lt || (lt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", _));
        };
        $.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: $,
          configurable: !0
        });
      }
    }
    var Nt = function(h, _, $, te, le, z, Y) {
      var U = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: _,
        ref: $,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return U._store = {}, Object.defineProperty(U._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(U, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(U, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(U.props), Object.freeze(U)), U;
    };
    function st(h, _, $, te, le) {
      {
        var z, Y = {}, U = null, de = null;
        $ !== void 0 && (_t($), U = "" + $), Ze(_) && (_t(_.key), U = "" + _.key), ur(_) && (de = _.ref, Pt(_, le));
        for (z in _)
          be.call(_, z) && !cr.hasOwnProperty(z) && (Y[z] = _[z]);
        if (h && h.defaultProps) {
          var ae = h.defaultProps;
          for (z in ae)
            Y[z] === void 0 && (Y[z] = ae[z]);
        }
        if (U || de) {
          var me = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          U && dr(Y, me), de && Rt(Y, me);
        }
        return Nt(h, U, de, le, te, ze.current, Y);
      }
    }
    var ct = y.ReactCurrentOwner, ut = y.ReactDebugCurrentFrame;
    function Ae(h) {
      if (h) {
        var _ = h._owner, $ = je(h.type, h._source, _ ? _.type : null);
        ut.setExtraStackFrame($);
      } else
        ut.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function xe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function pe() {
      {
        if (ct.current) {
          var h = p(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function Je(h) {
      return "";
    }
    var fe = {};
    function Se(h) {
      {
        var _ = pe();
        if (!_) {
          var $ = typeof h == "string" ? h : h.displayName || h.name;
          $ && (_ = `

Check the top-level render call using <` + $ + ">.");
        }
        return _;
      }
    }
    function At(h, _) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var $ = Se(_);
        if (fe[$])
          return;
        fe[$] = !0;
        var te = "";
        h && h._owner && h._owner !== ct.current && (te = " It was passed a child from " + p(h._owner.type) + "."), Ae(h), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, te), Ae(null);
      }
    }
    function Xe(h, _) {
      {
        if (typeof h != "object")
          return;
        if (ot(h))
          for (var $ = 0; $ < h.length; $++) {
            var te = h[$];
            xe(te) && At(te, _);
          }
        else if (xe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var le = g(h);
          if (typeof le == "function" && le !== h.entries)
            for (var z = le.call(h), Y; !(Y = z.next()).done; )
              xe(Y.value) && At(Y.value, _);
        }
      }
    }
    function Mt(h) {
      {
        var _ = h.type;
        if (_ == null || typeof _ == "string")
          return;
        var $;
        if (typeof _ == "function")
          $ = _.propTypes;
        else if (typeof _ == "object" && (_.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        _.$$typeof === v))
          $ = _.propTypes;
        else
          return;
        if ($) {
          var te = p(_);
          or($, h.props, "prop", te, h);
        } else if (_.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var le = p(_);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof _.getDefaultProps == "function" && !_.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(h) {
      {
        for (var _ = Object.keys(h.props), $ = 0; $ < _.length; $++) {
          var te = _[$];
          if (te !== "children" && te !== "key") {
            Ae(h), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), Ae(null);
            break;
          }
        }
        h.ref !== null && (Ae(h), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    function qe(h, _, $, te, le, z) {
      {
        var Y = G(h);
        if (!Y) {
          var U = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (U += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Je();
          de ? U += de : U += pe();
          var ae;
          h === null ? ae = "null" : ot(h) ? ae = "array" : h !== void 0 && h.$$typeof === t ? (ae = "<" + (p(h.type) || "Unknown") + " />", U = " Did you accidentally export a JSX literal instead of a component?") : ae = typeof h, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ae, U);
        }
        var me = st(h, _, $, le, z);
        if (me == null)
          return me;
        if (Y) {
          var we = _.children;
          if (we !== void 0)
            if (te)
              if (ot(we)) {
                for (var Me = 0; Me < we.length; Me++)
                  Xe(we[Me], h);
                Object.freeze && Object.freeze(we);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(we, h);
        }
        return h === r ? Ft(me) : Mt(me), me;
      }
    }
    function et(h, _, $) {
      return qe(h, _, $, !0);
    }
    function dt(h, _, $) {
      return qe(h, _, $, !1);
    }
    var ft = dt, ht = et;
    gt.Fragment = r, gt.jsx = ft, gt.jsxs = ht;
  }()), gt;
}
process.env.NODE_ENV === "production" ? Or.exports = ri() : Or.exports = ni();
var i = Or.exports, It = { exports: {} }, Lt = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function ai() {
  if (mn)
    return se;
  mn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function C(k) {
    if (typeof k == "object" && k !== null) {
      var N = k.$$typeof;
      switch (N) {
        case t:
          switch (k = k.type, k) {
            case c:
            case d:
            case r:
            case o:
            case n:
            case v:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case l:
                case m:
                case u:
                case x:
                case s:
                  return k;
                default:
                  return N;
              }
          }
        case a:
          return N;
      }
    }
  }
  function T(k) {
    return C(k) === d;
  }
  return se.AsyncMode = c, se.ConcurrentMode = d, se.ContextConsumer = l, se.ContextProvider = s, se.Element = t, se.ForwardRef = m, se.Fragment = r, se.Lazy = u, se.Memo = x, se.Portal = a, se.Profiler = o, se.StrictMode = n, se.Suspense = v, se.isAsyncMode = function(k) {
    return T(k) || C(k) === c;
  }, se.isConcurrentMode = T, se.isContextConsumer = function(k) {
    return C(k) === l;
  }, se.isContextProvider = function(k) {
    return C(k) === s;
  }, se.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, se.isForwardRef = function(k) {
    return C(k) === m;
  }, se.isFragment = function(k) {
    return C(k) === r;
  }, se.isLazy = function(k) {
    return C(k) === u;
  }, se.isMemo = function(k) {
    return C(k) === x;
  }, se.isPortal = function(k) {
    return C(k) === a;
  }, se.isProfiler = function(k) {
    return C(k) === o;
  }, se.isStrictMode = function(k) {
    return C(k) === n;
  }, se.isSuspense = function(k) {
    return C(k) === v;
  }, se.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === d || k === o || k === n || k === v || k === b || typeof k == "object" && k !== null && (k.$$typeof === u || k.$$typeof === x || k.$$typeof === s || k.$$typeof === l || k.$$typeof === m || k.$$typeof === g || k.$$typeof === y || k.$$typeof === S || k.$$typeof === f);
  }, se.typeOf = C, se;
}
var ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function ii() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, a = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, u = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function C(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === d || M === o || M === n || M === v || M === b || typeof M == "object" && M !== null && (M.$$typeof === u || M.$$typeof === x || M.$$typeof === s || M.$$typeof === l || M.$$typeof === m || M.$$typeof === g || M.$$typeof === y || M.$$typeof === S || M.$$typeof === f);
    }
    function T(M) {
      if (typeof M == "object" && M !== null) {
        var ve = M.$$typeof;
        switch (ve) {
          case t:
            var ue = M.type;
            switch (ue) {
              case c:
              case d:
              case r:
              case o:
              case n:
              case v:
                return ue;
              default:
                var je = ue && ue.$$typeof;
                switch (je) {
                  case l:
                  case m:
                  case u:
                  case x:
                  case s:
                    return je;
                  default:
                    return ve;
                }
            }
          case a:
            return ve;
        }
      }
    }
    var k = c, N = d, W = l, Z = s, ne = t, G = m, F = r, L = u, p = x, O = a, D = o, P = n, E = v, V = !1;
    function oe(M) {
      return V || (V = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(M) || T(M) === c;
    }
    function j(M) {
      return T(M) === d;
    }
    function A(M) {
      return T(M) === l;
    }
    function H(M) {
      return T(M) === s;
    }
    function K(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function Q(M) {
      return T(M) === m;
    }
    function q(M) {
      return T(M) === r;
    }
    function J(M) {
      return T(M) === u;
    }
    function B(M) {
      return T(M) === x;
    }
    function X(M) {
      return T(M) === a;
    }
    function ee(M) {
      return T(M) === o;
    }
    function re(M) {
      return T(M) === n;
    }
    function he(M) {
      return T(M) === v;
    }
    ce.AsyncMode = k, ce.ConcurrentMode = N, ce.ContextConsumer = W, ce.ContextProvider = Z, ce.Element = ne, ce.ForwardRef = G, ce.Fragment = F, ce.Lazy = L, ce.Memo = p, ce.Portal = O, ce.Profiler = D, ce.StrictMode = P, ce.Suspense = E, ce.isAsyncMode = oe, ce.isConcurrentMode = j, ce.isContextConsumer = A, ce.isContextProvider = H, ce.isElement = K, ce.isForwardRef = Q, ce.isFragment = q, ce.isLazy = J, ce.isMemo = B, ce.isPortal = X, ce.isProfiler = ee, ce.isStrictMode = re, ce.isSuspense = he, ce.isValidElementType = C, ce.typeOf = T;
  }()), ce;
}
var vn;
function na() {
  return vn || (vn = 1, process.env.NODE_ENV === "production" ? Lt.exports = ai() : Lt.exports = ii()), Lt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fr, yn;
function oi() {
  if (yn)
    return fr;
  yn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function n() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fr = n() ? Object.assign : function(o, s) {
    for (var l, c = r(o), d, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var v in l)
        t.call(l, v) && (c[v] = l[v]);
      if (e) {
        d = e(l);
        for (var b = 0; b < d.length; b++)
          a.call(l, d[b]) && (c[d[b]] = l[d[b]]);
      }
    }
    return c;
  }, fr;
}
var hr, xn;
function Qr() {
  if (xn)
    return hr;
  xn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hr = e, hr;
}
var mr, bn;
function aa() {
  return bn || (bn = 1, mr = Function.call.bind(Object.prototype.hasOwnProperty)), mr;
}
var gr, pn;
function li() {
  if (pn)
    return gr;
  pn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qr(), a = {}, r = aa();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function n(o, s, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in o)
        if (r(o, m)) {
          var v;
          try {
            if (typeof o[m] != "function") {
              var b = Error(
                (c || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            v = o[m](s, m, c, l, null, t);
          } catch (u) {
            v = u;
          }
          if (v && !(v instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof v + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), v instanceof Error && !(v.message in a)) {
            a[v.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + l + " type: " + v.message + (x ?? "")
            );
          }
        }
    }
  }
  return n.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (a = {});
  }, gr = n, gr;
}
var vr, wn;
function si() {
  if (wn)
    return vr;
  wn = 1;
  var e = na(), t = oi(), a = Qr(), r = aa(), n = li(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return vr = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function v(j) {
      var A = j && (d && j[d] || j[m]);
      if (typeof A == "function")
        return A;
    }
    var b = "<<anonymous>>", x = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: S(),
      arrayOf: C,
      element: T(),
      elementType: k(),
      instanceOf: N,
      node: G(),
      objectOf: Z,
      oneOf: W,
      oneOfType: ne,
      shape: L,
      exact: p
    };
    function u(j, A) {
      return j === A ? j !== 0 || 1 / j === 1 / A : j !== j && A !== A;
    }
    function f(j, A) {
      this.message = j, this.data = A && typeof A == "object" ? A : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function g(j) {
      if (process.env.NODE_ENV !== "production")
        var A = {}, H = 0;
      function K(q, J, B, X, ee, re, he) {
        if (X = X || b, re = re || B, he !== a) {
          if (c) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = X + ":" + B;
            !A[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            H < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + re + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), A[ve] = !0, H++);
          }
        }
        return J[B] == null ? q ? J[B] === null ? new f("The " + ee + " `" + re + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new f("The " + ee + " `" + re + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : j(J, B, X, ee, re);
      }
      var Q = K.bind(null, !1);
      return Q.isRequired = K.bind(null, !0), Q;
    }
    function y(j) {
      function A(H, K, Q, q, J, B) {
        var X = H[K], ee = P(X);
        if (ee !== j) {
          var re = E(X);
          return new f(
            "Invalid " + q + " `" + J + "` of type " + ("`" + re + "` supplied to `" + Q + "`, expected ") + ("`" + j + "`."),
            { expectedType: j }
          );
        }
        return null;
      }
      return g(A);
    }
    function S() {
      return g(s);
    }
    function C(j) {
      function A(H, K, Q, q, J) {
        if (typeof j != "function")
          return new f("Property `" + J + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var B = H[K];
        if (!Array.isArray(B)) {
          var X = P(B);
          return new f("Invalid " + q + " `" + J + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var ee = 0; ee < B.length; ee++) {
          var re = j(B, ee, Q, q, J + "[" + ee + "]", a);
          if (re instanceof Error)
            return re;
        }
        return null;
      }
      return g(A);
    }
    function T() {
      function j(A, H, K, Q, q) {
        var J = A[H];
        if (!l(J)) {
          var B = P(J);
          return new f("Invalid " + Q + " `" + q + "` of type " + ("`" + B + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(j);
    }
    function k() {
      function j(A, H, K, Q, q) {
        var J = A[H];
        if (!e.isValidElementType(J)) {
          var B = P(J);
          return new f("Invalid " + Q + " `" + q + "` of type " + ("`" + B + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(j);
    }
    function N(j) {
      function A(H, K, Q, q, J) {
        if (!(H[K] instanceof j)) {
          var B = j.name || b, X = oe(H[K]);
          return new f("Invalid " + q + " `" + J + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return g(A);
    }
    function W(j) {
      if (!Array.isArray(j))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function A(H, K, Q, q, J) {
        for (var B = H[K], X = 0; X < j.length; X++)
          if (u(B, j[X]))
            return null;
        var ee = JSON.stringify(j, function(he, M) {
          var ve = E(M);
          return ve === "symbol" ? String(M) : M;
        });
        return new f("Invalid " + q + " `" + J + "` of value `" + String(B) + "` " + ("supplied to `" + Q + "`, expected one of " + ee + "."));
      }
      return g(A);
    }
    function Z(j) {
      function A(H, K, Q, q, J) {
        if (typeof j != "function")
          return new f("Property `" + J + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var B = H[K], X = P(B);
        if (X !== "object")
          return new f("Invalid " + q + " `" + J + "` of type " + ("`" + X + "` supplied to `" + Q + "`, expected an object."));
        for (var ee in B)
          if (r(B, ee)) {
            var re = j(B, ee, Q, q, J + "." + ee, a);
            if (re instanceof Error)
              return re;
          }
        return null;
      }
      return g(A);
    }
    function ne(j) {
      if (!Array.isArray(j))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var A = 0; A < j.length; A++) {
        var H = j[A];
        if (typeof H != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + V(H) + " at index " + A + "."
          ), s;
      }
      function K(Q, q, J, B, X) {
        for (var ee = [], re = 0; re < j.length; re++) {
          var he = j[re], M = he(Q, q, J, B, X, a);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && ee.push(M.data.expectedType);
        }
        var ve = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new f("Invalid " + B + " `" + X + "` supplied to " + ("`" + J + "`" + ve + "."));
      }
      return g(K);
    }
    function G() {
      function j(A, H, K, Q, q) {
        return O(A[H]) ? null : new f("Invalid " + Q + " `" + q + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return g(j);
    }
    function F(j, A, H, K, Q) {
      return new f(
        (j || "React class") + ": " + A + " type `" + H + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function L(j) {
      function A(H, K, Q, q, J) {
        var B = H[K], X = P(B);
        if (X !== "object")
          return new f("Invalid " + q + " `" + J + "` of type `" + X + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var ee in j) {
          var re = j[ee];
          if (typeof re != "function")
            return F(Q, q, J, ee, E(re));
          var he = re(B, ee, Q, q, J + "." + ee, a);
          if (he)
            return he;
        }
        return null;
      }
      return g(A);
    }
    function p(j) {
      function A(H, K, Q, q, J) {
        var B = H[K], X = P(B);
        if (X !== "object")
          return new f("Invalid " + q + " `" + J + "` of type `" + X + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var ee = t({}, H[K], j);
        for (var re in ee) {
          var he = j[re];
          if (r(j, re) && typeof he != "function")
            return F(Q, q, J, re, E(he));
          if (!he)
            return new f(
              "Invalid " + q + " `" + J + "` key `" + re + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(H[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(j), null, "  ")
            );
          var M = he(B, re, Q, q, J + "." + re, a);
          if (M)
            return M;
        }
        return null;
      }
      return g(A);
    }
    function O(j) {
      switch (typeof j) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !j;
        case "object":
          if (Array.isArray(j))
            return j.every(O);
          if (j === null || l(j))
            return !0;
          var A = v(j);
          if (A) {
            var H = A.call(j), K;
            if (A !== j.entries) {
              for (; !(K = H.next()).done; )
                if (!O(K.value))
                  return !1;
            } else
              for (; !(K = H.next()).done; ) {
                var Q = K.value;
                if (Q && !O(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(j, A) {
      return j === "symbol" ? !0 : A ? A["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && A instanceof Symbol : !1;
    }
    function P(j) {
      var A = typeof j;
      return Array.isArray(j) ? "array" : j instanceof RegExp ? "object" : D(A, j) ? "symbol" : A;
    }
    function E(j) {
      if (typeof j > "u" || j === null)
        return "" + j;
      var A = P(j);
      if (A === "object") {
        if (j instanceof Date)
          return "date";
        if (j instanceof RegExp)
          return "regexp";
      }
      return A;
    }
    function V(j) {
      var A = E(j);
      switch (A) {
        case "array":
        case "object":
          return "an " + A;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + A;
        default:
          return A;
      }
    }
    function oe(j) {
      return !j.constructor || !j.constructor.name ? b : j.constructor.name;
    }
    return x.checkPropTypes = n, x.resetWarningCache = n.resetWarningCache, x.PropTypes = x, x;
  }, vr;
}
var yr, jn;
function ci() {
  if (jn)
    return yr;
  jn = 1;
  var e = Qr();
  function t() {
  }
  function a() {
  }
  return a.resetWarningCache = t, yr = function() {
    function r(s, l, c, d, m, v) {
      if (v !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
      }
    }
    r.isRequired = r;
    function n() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: n,
      element: r,
      elementType: r,
      instanceOf: n,
      node: r,
      objectOf: n,
      oneOf: n,
      oneOfType: n,
      shape: n,
      exact: n,
      checkPropTypes: a,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, yr;
}
var kn;
function ui() {
  if (kn)
    return It.exports;
  if (kn = 1, process.env.NODE_ENV !== "production") {
    var e = na(), t = !0;
    It.exports = si()(e.isElement, t);
  } else
    It.exports = ci()();
  return It.exports;
}
var di = function(e) {
  var t = {};
  function a(r) {
    if (t[r])
      return t[r].exports;
    var n = t[r] = { i: r, l: !1, exports: {} };
    return e[r].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }
  return a.m = e, a.c = t, a.d = function(r, n, o) {
    a.o(r, n) || Object.defineProperty(r, n, { enumerable: !0, get: o });
  }, a.r = function(r) {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
  }, a.t = function(r, n) {
    if (1 & n && (r = a(r)), 8 & n || 4 & n && typeof r == "object" && r && r.__esModule)
      return r;
    var o = /* @__PURE__ */ Object.create(null);
    if (a.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: r }), 2 & n && typeof r != "string")
      for (var s in r)
        a.d(o, s, (function(l) {
          return r[l];
        }).bind(null, s));
    return o;
  }, a.n = function(r) {
    var n = r && r.__esModule ? function() {
      return r.default;
    } : function() {
      return r;
    };
    return a.d(n, "a", n), n;
  }, a.o = function(r, n) {
    return Object.prototype.hasOwnProperty.call(r, n);
  }, a.p = "", a(a.s = 2);
}([function(e, t) {
  e.exports = ui();
}, function(e, t) {
  e.exports = Ur;
}, function(e, t, a) {
  a.r(t);
  var r = a(1), n = a(0), o = function() {
    return (o = Object.assign || function(u) {
      for (var f, g = 1, y = arguments.length; g < y; g++)
        for (var S in f = arguments[g])
          Object.prototype.hasOwnProperty.call(f, S) && (u[S] = f[S]);
      return u;
    }).apply(this, arguments);
  }, s = function(u, f) {
    var g = {};
    for (var y in u)
      Object.prototype.hasOwnProperty.call(u, y) && f.indexOf(y) < 0 && (g[y] = u[y]);
    if (u != null && typeof Object.getOwnPropertySymbols == "function") {
      var S = 0;
      for (y = Object.getOwnPropertySymbols(u); S < y.length; S++)
        f.indexOf(y[S]) < 0 && Object.prototype.propertyIsEnumerable.call(u, y[S]) && (g[y[S]] = u[y[S]]);
    }
    return g;
  }, l = 0, c = r.forwardRef(function(u, f) {
    var g = u.title, y = g === void 0 ? null : g, S = u.description, C = S === void 0 ? null : S, T = u.size, k = T === void 0 ? null : T, N = u.color, W = N === void 0 ? "currentColor" : N, Z = u.horizontal, ne = Z === void 0 ? null : Z, G = u.vertical, F = G === void 0 ? null : G, L = u.rotate, p = L === void 0 ? null : L, O = u.spin, D = O === void 0 ? null : O, P = u.style, E = P === void 0 ? {} : P, V = u.children, oe = s(u, ["title", "description", "size", "color", "horizontal", "vertical", "rotate", "spin", "style", "children"]);
    l++;
    var j, A = D !== null && D, H = r.Children.map(V, function(J) {
      var B = J;
      A !== !0 && (A = (D === null ? B.props.spin : D) === !0);
      var X = B.props.size;
      typeof k == "number" && typeof B.props.size == "number" && (X = B.props.size / k);
      var ee = { size: X, color: W === null ? B.props.color : W, horizontal: ne === null ? B.props.horizontal : ne, vertical: F === null ? B.props.vertical : F, rotate: p === null ? B.props.rotate : p, spin: D === null ? B.props.spin : D, inStack: !0 };
      return r.cloneElement(B, ee);
    });
    k !== null && (E.width = typeof k == "string" ? k : 1.5 * k + "rem");
    var K, Q = "stack_labelledby_" + l, q = "stack_describedby_" + l;
    if (y)
      j = C ? Q + " " + q : Q;
    else if (K = "presentation", C)
      throw new Error("title attribute required when description is set");
    return r.createElement("svg", o({ ref: f, viewBox: "0 0 24 24", style: E, role: K, "aria-labelledby": j }, oe), y && r.createElement("title", { id: Q }, y), C && r.createElement("desc", { id: q }, C), A && r.createElement("style", null, "@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }", "@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"), H);
  });
  c.displayName = "Stack", c.propTypes = { size: n.oneOfType([n.number, n.string]), color: n.string, horizontal: n.bool, vertical: n.bool, rotate: n.number, spin: n.oneOfType([n.bool, n.number]), children: n.oneOfType([n.arrayOf(n.node), n.node]).isRequired, className: n.string, style: n.object }, c.defaultProps = { size: null, color: null, horizontal: null, vertical: null, rotate: null, spin: null };
  var d = c;
  a.d(t, "Icon", function() {
    return x;
  }), a.d(t, "Stack", function() {
    return d;
  });
  var m = function() {
    return (m = Object.assign || function(u) {
      for (var f, g = 1, y = arguments.length; g < y; g++)
        for (var S in f = arguments[g])
          Object.prototype.hasOwnProperty.call(f, S) && (u[S] = f[S]);
      return u;
    }).apply(this, arguments);
  }, v = function(u, f) {
    var g = {};
    for (var y in u)
      Object.prototype.hasOwnProperty.call(u, y) && f.indexOf(y) < 0 && (g[y] = u[y]);
    if (u != null && typeof Object.getOwnPropertySymbols == "function") {
      var S = 0;
      for (y = Object.getOwnPropertySymbols(u); S < y.length; S++)
        f.indexOf(y[S]) < 0 && Object.prototype.propertyIsEnumerable.call(u, y[S]) && (g[y[S]] = u[y[S]]);
    }
    return g;
  }, b = 0, x = r.forwardRef(function(u, f) {
    var g = u.path, y = u.id, S = y === void 0 ? ++b : y, C = u.title, T = C === void 0 ? null : C, k = u.description, N = k === void 0 ? null : k, W = u.size, Z = W === void 0 ? null : W, ne = u.color, G = ne === void 0 ? "currentColor" : ne, F = u.horizontal, L = F !== void 0 && F, p = u.vertical, O = p !== void 0 && p, D = u.rotate, P = D === void 0 ? 0 : D, E = u.spin, V = E !== void 0 && E, oe = u.style, j = oe === void 0 ? {} : oe, A = u.inStack, H = A !== void 0 && A, K = v(u, ["path", "id", "title", "description", "size", "color", "horizontal", "vertical", "rotate", "spin", "style", "inStack"]), Q = {}, q = [];
    Z !== null && (H ? q.push("scale(" + Z + ")") : (j.width = typeof Z == "string" ? Z : 1.5 * Z + "rem", j.height = j.width)), L && q.push("scaleX(-1)"), O && q.push("scaleY(-1)"), P !== 0 && q.push("rotate(" + P + "deg)"), G !== null && (Q.fill = G);
    var J = r.createElement("path", m({ d: g, style: Q }, H ? K : {})), B = J;
    q.length > 0 && (j.transform = q.join(" "), j.transformOrigin = "center", H && (B = r.createElement("g", { style: j }, J, r.createElement("rect", { width: "24", height: "24", fill: "transparent" }))));
    var X, ee = B, re = V === !0 || typeof V != "number" ? 2 : V, he = !H && (L || O);
    if (re < 0 && (he = !he), V && (ee = r.createElement("g", { style: { animation: "spin" + (he ? "-inverse" : "") + " linear " + Math.abs(re) + "s infinite", transformOrigin: "center" } }, B, !(L || O || P !== 0) && r.createElement("rect", { width: "24", height: "24", fill: "transparent" }))), H)
      return ee;
    var M, ve = "icon_labelledby_" + S, ue = "icon_describedby_" + S;
    if (T)
      X = N ? ve + " " + ue : ve;
    else if (M = "presentation", N)
      throw new Error("title attribute required when description is set");
    return r.createElement("svg", m({ ref: f, viewBox: "0 0 24 24", style: j, role: M, "aria-labelledby": X }, K), T && r.createElement("title", { id: ve }, T), N && r.createElement("desc", { id: ue }, N), !H && V && (he ? r.createElement("style", null, "@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }") : r.createElement("style", null, "@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")), ee);
  });
  x.displayName = "Icon", x.propTypes = { path: n.string.isRequired, size: n.oneOfType([n.number, n.string]), color: n.string, horizontal: n.bool, vertical: n.bool, rotate: n.number, spin: n.oneOfType([n.bool, n.number]), style: n.object, inStack: n.bool, className: n.string }, x.defaultProps = { size: null, color: "currentColor", horizontal: !1, vertical: !1, rotate: 0, spin: !1 }, t.default = x;
}]);
const ie = /* @__PURE__ */ ra(di);
var fi = "M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z", ia = "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z", hi = "M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z", Cn = "M7.5,18A5.5,5.5 0 0,1 2,12.5A5.5,5.5 0 0,1 7.5,7H18A4,4 0 0,1 22,11A4,4 0 0,1 18,15H9.5A2.5,2.5 0 0,1 7,12.5A2.5,2.5 0 0,1 9.5,10H17V11.5H9.5A1,1 0 0,0 8.5,12.5A1,1 0 0,0 9.5,13.5H18A2.5,2.5 0 0,0 20.5,11A2.5,2.5 0 0,0 18,8.5H7.5A4,4 0 0,0 3.5,12.5A4,4 0 0,0 7.5,16.5H17V18H7.5Z", oa = "M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z", mi = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", gi = "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z", vi = "M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,5V19H5V5H19M10,17L6,13L7.41,11.58L10,14.17L16.59,7.58L18,9", yi = "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z", Zr = "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z", Xt = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", xi = "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z", Ut = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", la = "M11 20H6.5Q4.22 20 2.61 18.43 1 16.85 1 14.58 1 12.63 2.17 11.1 3.35 9.57 5.25 9.15 5.88 6.85 7.75 5.43 9.63 4 12 4 14.93 4 16.96 6.04 19 8.07 19 11 20.73 11.2 21.86 12.5 23 13.78 23 15.5 23 17.38 21.69 18.69 20.38 20 18.5 20H13V12.85L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.85Z", bi = "M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M5,5V7H19V5H5M5,9V11H13V9H5M5,13V15H15V13H5Z", pi = "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z", sa = "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z", wi = "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z", ji = "M20 9C18.69 9 17.58 9.83 17.17 11H14.82C14.4 9.84 13.3 9 12 9S9.6 9.84 9.18 11H6.83C6.42 9.83 5.31 9 4 9C2.34 9 1 10.34 1 12S2.34 15 4 15C5.31 15 6.42 14.17 6.83 13H9.18C9.6 14.16 10.7 15 12 15S14.4 14.16 14.82 13H17.17C17.58 14.17 18.69 15 20 15C21.66 15 23 13.66 23 12S21.66 9 20 9", ca = "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z";
const ki = w.div`
    color: var(--theme-color-font, #000);
    font-weight: 400;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex: 1;
`, Ci = w.div`
    line-height: 2rem;
    min-height: 2.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1;
`, Si = w.button`
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
`, Ti = w.div`
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    color: var(--theme-color-font-empty);
`, Oi = w.div`
    cursor: pointer;
`, Di = w.div`
    font-size: 1.5rem;
`, nc = ({ items: e, current: t, navigate: a }) => {
  const r = () => {
    if (!e)
      return;
    const o = Object.keys(e);
    a && a(o[o.length - 1], { replace: !0 });
  }, n = () => {
    const o = Object.keys(e);
    return o && o.length ? o.map((s, l) => /* @__PURE__ */ i.jsxs(Ti, { children: [
      /* @__PURE__ */ i.jsx(Oi, { onClick: () => {
        a && a(s, { replace: !0 });
      }, children: e[s] }),
      /* @__PURE__ */ i.jsx(ie, { path: Xt, size: 1 })
    ] }, l)) : null;
  };
  return /* @__PURE__ */ i.jsxs(ki, { children: [
    /* @__PURE__ */ i.jsx(Si, { onClick: r, children: /* @__PURE__ */ i.jsx(ie, { path: ia, size: 1 }) }),
    /* @__PURE__ */ i.jsxs(Ci, { children: [
      n(),
      /* @__PURE__ */ i.jsx(Di, { children: t })
    ] })
  ] });
}, ac = w.h1`
    font-size: 1.5rem;
    color: var(--theme-color-font, #000);
    font-weight: 400;
    line-height: 2rem;
    margin: 0;

    &.uppercase {
        text-transform: uppercase;
    }
`, ic = w.div`
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
`, Ei = w.div`
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
`, _i = w.h3`
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
`, Pi = w.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    background-color: var(--theme-color-background-aux, #fff);
`, oc = ({ className: e, title: t, children: a }) => /* @__PURE__ */ i.jsxs(Ei, { className: e, children: [
  t ? /* @__PURE__ */ i.jsx(_i, { children: t }) : null,
  /* @__PURE__ */ i.jsx(Pi, { children: a })
] }), Ri = w.div`
    display: flex;
    flex-direction: column;
    align-items: ${(e) => e.$align ? e.$align : "center"};
    justify-content: ${(e) => e.$justify ? e.$justify : "stretch"};

    ${(e) => e.$margin ? `& > * {margin: ${e.$margin};}
        & > *:last-child {margin: 0; }` : ""}
`, Gt = ({ align: e, justify: t, margin: a, children: r, ...n }) => /* @__PURE__ */ i.jsx(Ri, { $align: e, $justify: t, $margin: a, ...n, children: r }), lc = w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: ${(e) => e.align ?? "center"};
    justify-content: ${(e) => e.justify ?? "stretch"};

    & > * {
        margin: ${(e) => e.margin ?? e.mobileMargin ?? "0 0 20px 0"};
    }
    
    @media (min-width: 1000px) {
        flex-direction: row;
        width: auto;

        & > * {
            margin: ${(e) => e.margin ?? e.desktopMargin ?? "0 20px 20px 0"};
            width: calc(100% / ${(e) => e.columns ?? 3} - ${(e) => ((e.columns ?? 3) - 1) * 20 / (e.columns ?? 3)}px);
            min-width: calc(100% / ${(e) => e.columns ?? 3} - ${(e) => ((e.columns ?? 3) - 1) * 20 / (e.columns ?? 3)}px);
        }
        & > *:nth-child(${(e) => e.columns ?? 3}n) {
            margin-right: 0;
        }
    }

`, sc = w.div`
    width: 100%;
    padding: ${(e) => e.padding ?? "10px"};
    box-sizing: border-box;
    display: flex;
    flex-direction: ${(e) => e.direction ?? "column"};;
    align-items: ${(e) => e.align ?? "stretch"};;
    justify-content: ${(e) => e.justify ?? "flex-start"};;

    @media (min-width: 1000px) {
        padding: ${(e) => e.padding ?? "30px"};
    }
`, Ni = w.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: ${(e) => e.$align ?? "center"};
    justify-content: ${(e) => e.$justify ?? "stretch"};

    & > * {
        margin-right: ${(e) => e.$margin ?? "0.625rem"};
    }
    & > *:last-child {
        margin-right: 0;
    }
`, De = ({ align: e, justify: t, margin: a, children: r, ...n }) => /* @__PURE__ */ i.jsx(Ni, { $align: e, $justify: t, $margin: a, ...n, children: r }), Ai = w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${(e) => e.$columnAlign ?? "center"};
    justify-content: ${(e) => e.$columnJustify ?? "stretch"};

    @media (max-width: 999px) {
        ${(e) => e.$columnMargin ? `& > * {margin: ${e.$columnMargin};}
            & > *:last-child {margin: 0; }` : ""}
    }
    
    
    @media (min-width: 1000px) {
        flex-direction: row;
        align-items: ${(e) => e.$rowAlign ?? "center"};
        justify-content: ${(e) => e.$rowJustify ?? "stretch"};

        & > * {
            margin-right: ${(e) => e.$rowMargin ?? "0.625rem"};
        }
    
        & > *:last-child {
            margin-right: 0;
        }
    }


`, Mi = ({ rowAlign: e, rowJustify: t, columnAlign: a, columnJustify: r, rowMargin: n, columnMargin: o, children: s, ...l }) => /* @__PURE__ */ i.jsx(Ai, { $rowJustify: t, $rowAlign: e, $columnAlign: a, $columnJustify: r, $columnMargin: o, $rowMargin: n, ...l, children: s }), Fi = (e, t, a) => Math.min(Math.max(e, t), a), $i = (e) => {
  var t = e.getBoundingClientRect();
  return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth);
}, Ii = (e) => {
  let t = "";
  for (let a in e)
    a && e[a] && (t += " " + a);
  return t.trim();
}, Li = w.div`
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
`, Wi = w.div`
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
`, cc = ({ items: e, value: t, onChange: a }) => {
  const [r, n] = R(), o = (s) => {
    n(s), a(s);
  };
  return I(() => {
    n(t);
  }, [t]), /* @__PURE__ */ i.jsx(Li, { children: e.map((s, l) => /* @__PURE__ */ i.jsx(Wi, { className: Ii({ selected: r === s.id }), onClick: () => {
    o(s.id);
  }, children: s.label }, l)) });
}, Dr = ({ path: e }) => {
  const { t } = ti();
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: t(e) });
}, ua = (e) => String(Gr.t(e)), zi = w.div`
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
`, Sn = w.button`
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
`, Bi = ({ page: e, total: t, onPageChange: a, ...r }) => {
  const n = (o) => {
    o > 0 && o <= t && a(o);
  };
  return /* @__PURE__ */ i.jsxs(zi, { ...r, children: [
    /* @__PURE__ */ i.jsx(Sn, { className: e <= 1 ? "disabled" : "", onClick: () => {
      n(e - 1);
    }, children: /* @__PURE__ */ i.jsx(ie, { path: Zr, size: 1 }) }),
    ua("paginator.label").replace("$1", String(e)).replace("$2", String(Math.max(t, 1))),
    /* @__PURE__ */ i.jsx(Sn, { className: e >= t ? "disabled" : "", onClick: () => {
      n(e + 1);
    }, children: /* @__PURE__ */ i.jsx(ie, { path: Xt, size: 1 }) })
  ] });
}, Tn = (e, t) => {
  let a = Math.abs(e - t), r = Math.floor(a / 60), n = a % 60;
  return r + n / 60;
}, pt = (e, t) => {
  if (e === void 0 || e < 0 || e > 1440)
    return;
  let [a, r] = [Math.floor(e / 60), e % 60], n = "0" + a, o = "0" + r;
  return n = n.substring(n.length - 2, n.length), o = o.substring(o.length - 2, o.length), `${n}h${o}`;
}, Er = (e, t, a) => {
  if (!e || isNaN(e.getTime()))
    return (a == null ? void 0 : a.noValue) ?? "";
  let r = {
    dateStyle: "short"
  };
  return Intl.DateTimeFormat(Gr.t("locale") ?? "pt-BR", r).format(e);
}, On = (e) => {
  if (!e || isNaN(e.getTime()))
    return "";
  let t = {
    month: "long",
    year: "numeric"
  }, a = Intl.DateTimeFormat(Gr.t("locale") ?? "pt-BR", t).format(e);
  return a.substring(0, 1).toUpperCase() + a.substring(1);
}, Vi = (e) => {
  if (!e || isNaN(e.getTime()))
    return "";
  let t = "0" + (e.getMonth() + 1), a = "0000" + e.getFullYear();
  return t = t.substring(t.length - 2, t.length), a = a.substring(a.length - 4, a.length), `${t}/${a}`;
}, Hi = (e) => {
  if (!e || !e.length || e.length < 10)
    return;
  let [t, a, r] = e.substring(0, 10).split("/").map((n) => parseInt(n, 10));
  return new Date(r, a - 1, t, 0, 0, 0, 0);
}, vt = (e) => !e || isNaN(e.getTime()) ? [0, 0, 0, 0, 0] : [
  e.getFullYear(),
  e.getMonth() + 1,
  e.getDate(),
  e.getHours(),
  e.getMinutes()
], Yi = w.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    height: 3rem;
`, Ui = w.div`
    width: 3rem;
    font-size: 0.8rem;
    padding: 0 0.3rem;
    color: var(--theme-color-font-weak);
    border-bottom: 1px solid var(--theme-color-line2);
`, Dn = w.div`
    border-bottom: 1px dashed var(--theme-color-line2);
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    
    &:not(:first-child) {
        border-left: 1px solid var(--theme-color-line2);
    }
`, Gi = w.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    min-height: 8rem;
    width: 100%;
`, En = w.div`
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
`, Qi = w.div`
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
`, Zi = w.div`
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
`, Ki = w.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    
`, _n = w.div`
    font-size:0.7rem;
    line-height:0.7rem;
    padding: 0.3rem;
`, Ji = w.div`
    font-size:1rem;
    line-height:1rem;
    flex: 1;
    overflow: hidden;
`, Xi = ({ event: e, style: t, onClick: a, className: r, dragHook: n, children: o }) => {
  const [{ isDragging: s }, l] = n(() => ({
    type: "event",
    item: { ...e },
    collect: (c) => ({
      isDragging: !!c.isDragging()
    })
  }));
  return /* @__PURE__ */ i.jsx(Qi, { ref: l, style: { ...t, opacity: s ? 0.3 : 1 }, onClick: a, className: r, children: o });
}, Pn = ({ startDate: e, nextDate: t, hour: a, onClick: r, className: n, children: o, dropHook: s, onMoveItemFn: l }) => {
  const c = _e(!0), [{ isOver: d }, m] = s(() => ({
    accept: "event",
    drop: async (v) => {
      let b = new Date(v.date), x = new Date(e);
      x.setDate(x.getDate() + t), x.setHours(a ?? b.getHours()), x.setMinutes(0), x.setSeconds(0), x.setMilliseconds(0);
      let u = Object.fromEntries(Object.entries(v).filter(([g, y]) => y != null)), f = { ...v };
      f.timeend = (a ? a * 60 : v.time) + (v.timeend - v.time), f.time = a ? a * 60 : v.time, await l({ ...u, timeend: f.timeend, time: f.time, keep_time: !a, move_to: x.toISOString() }, f);
    },
    collect: (v) => ({
      isOver: !!v.isOver()
    })
  }), [e, t, a]);
  return I(() => () => {
    c.current = !1;
  }, []), /* @__PURE__ */ i.jsx(Zi, { ref: m, onClick: r, className: n, style: d ? { backgroundColor: "var(--theme-color-primary)" } : {}, children: o });
}, Rn = ({ events: e, full: t, conflicts: a, dragHook: r, navigate: n }) => {
  const o = (l) => {
    n(`/calendar/${l}`);
  };
  let s = {};
  return e.length === 1 && t && (s = {
    position: "absolute",
    height: (e[0].timeend - e[0].time) * 100 / 60 + "%",
    width: String(100 - (a ?? 0) * 10) + "%",
    top: String(e[0].time % 60 * 100 / 60) + "%",
    left: String((a ?? 0) * 10) + "%"
  }), /* @__PURE__ */ i.jsx(i.Fragment, { children: e.map((l, c) => /* @__PURE__ */ i.jsxs(Xi, { event: l, dragHook: r, style: s, onClick: () => {
    o(l.id);
  }, className: (t ? "" : "compact ") + l.status.toLowerCase(), children: [
    /* @__PURE__ */ i.jsxs(Ki, { children: [
      /* @__PURE__ */ i.jsx(_n, { children: pt(l.time) }),
      /* @__PURE__ */ i.jsx(_n, { children: pt(l.timeend) })
    ] }),
    /* @__PURE__ */ i.jsx(Ji, { children: l.event_name })
  ] }, c)) });
}, qi = ({ starttime: e, endtime: t, viewmode: a, startDate: r, events: n, refDate: o, navigate: s, drag: l, drop: c, onMoveItemFn: d }) => {
  const [m, v] = R(1), [b, x] = R(1);
  I(() => {
    v(Math.floor(e / 60));
  }, [e]), I(() => {
    x(Math.floor(t / 60));
  }, [t]);
  const u = (y, S) => {
    let C = new Date(y);
    C.setDate(C.getDate() + S), C.setHours(0), C.setMinutes(0), C.setSeconds(0), C.setMilliseconds(0);
    let T = /* @__PURE__ */ new Date();
    T.setHours(0), T.setMinutes(0), T.setSeconds(0), T.setMilliseconds(0);
    let k = C.getTime() === T.getTime() ? "today " : "";
    return a === "MONTH" && (k += C.getMonth() === o.getMonth() ? "" : "otherMonth"), k;
  }, f = (y, S) => {
    let C = new Date(r);
    C.setDate(C.getDate() + y), s("/calendar/new", { replace: !1, state: { date: C, hour: S } });
  }, g = (y, S) => {
    let C = new Date(r);
    C.setDate(C.getDate() + y), C.setHours(S ?? 0);
    let T = vt(C);
    if (S) {
      let k = n.filter((N) => {
        let W = vt(new Date(N.date));
        return W[0] === T[0] && W[1] === T[1] && W[2] === T[2] && W[3] === T[3];
      });
      if (k && k.length) {
        let N = [];
        for (let W in k) {
          let Z = vt(new Date(k[W].date)), ne = Z[3] * 60 + Z[4], G = n.filter((F) => {
            if (F.id === k[W].id)
              return !1;
            let L = vt(new Date(F.date)), p = L[3] * 60 + L[4], O = p + F.timeend - F.time;
            return L[0] === Z[0] && L[1] === Z[1] && L[2] === Z[2] && ne >= p && ne < O;
          });
          N.push(/* @__PURE__ */ i.jsx(Rn, { navigate: s, events: [k[W]], full: !0, dragHook: l, conflicts: G.length }));
        }
        return N;
      }
    } else {
      let k = n.filter((N) => {
        let W = vt(new Date(N.date));
        return W[0] === T[0] && W[1] === T[1] && W[2] === T[2];
      });
      if (k)
        return /* @__PURE__ */ i.jsx(Rn, { events: k, navigate: s, dragHook: l, full: !1 });
    }
    return null;
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: a === "WEEK" ? Array(b - m).fill(0).map((y, S) => /* @__PURE__ */ i.jsxs(Yi, { children: [
    /* @__PURE__ */ i.jsx(Ui, { children: pt((m + S) * 60) }),
    /* @__PURE__ */ i.jsx(Dn, { className: m + S + 1 === b ? "lasttime" : "time", children: Array(7).fill(1).map((C, T) => /* @__PURE__ */ i.jsxs(En, { className: u(r, T), children: [
      /* @__PURE__ */ i.jsx(Pn, { onMoveItemFn: d, dropHook: c, onClick: () => {
        f(T, m + S);
      }, startDate: r, nextDate: T, hour: m + S }),
      g(T, m + S)
    ] }, T)) })
  ] }, S)) : /* @__PURE__ */ i.jsx(Gi, { children: /* @__PURE__ */ i.jsx(Dn, { children: Array(7).fill(1).map((y, S) => /* @__PURE__ */ i.jsxs(En, { className: "compact " + u(r, S), children: [
    /* @__PURE__ */ i.jsx(Pn, { onMoveItemFn: d, className: "full", dropHook: c, onClick: () => {
      f(S);
    }, startDate: r, nextDate: S }),
    g(S)
  ] }, S)) }) }) });
}, eo = w.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    border-bottom: 1px solid var(--theme-color-line2);
`, to = w.div`
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
`, ro = w.div`
    font-size: 1rem;
    width: 100%;
    text-align: left;
    opacity: .5;

    .today & {
        opacity: 1;
        color: #fff;
    }
`, no = w.div`
    font-size: 1.3rem;
    width: 100%;
    text-align: center;

    .today & {
        color: #fff;
    }
`, ao = (e, t) => {
  let a = new Date(e);
  return a.setDate(a.getDate() + t), a.getDate();
}, io = (e, t, a, r) => {
  let n = new Date(e);
  n.setDate(n.getDate() + t), n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0);
  let o = /* @__PURE__ */ new Date();
  o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0);
  let s = n.getTime() === o.getTime() ? "today " : "";
  return r === "MONTH" && (s += n.getMonth() === a.getMonth() ? "" : "otherMonth"), s;
}, oo = ({ start: e, viewmode: t, refDate: a, labelDayName: r }) => /* @__PURE__ */ i.jsxs(eo, { children: [
  t === "WEEK" ? /* @__PURE__ */ i.jsx("div", { style: { width: "3rem" } }) : null,
  Array(7).fill(1).map((n, o) => /* @__PURE__ */ i.jsxs(to, { className: io(e, o, a, t), children: [
    /* @__PURE__ */ i.jsx(ro, { children: ao(e, o) }),
    /* @__PURE__ */ i.jsx(no, { children: r ? r[o] : "" })
  ] }, o))
] }), uc = ({ start: e, end: t, refDate: a, starttime: r, endtime: n, viewmode: o, events: s, drag: l, drop: c, navigate: d, onMoveItem: m }) => {
  const [v, b] = R([]);
  return I(() => {
    let x = [e], u = new Date(e);
    if (o === "2WEEK")
      u.setDate(u.getDate() + 7), x.push(u);
    else if (o === "MONTH")
      for (u.setDate(u.getDate() + 7); u.getTime() < t.getTime(); )
        x.push(new Date(u)), u.setDate(u.getDate() + 7);
    b(x);
  }, [e, o]), /* @__PURE__ */ i.jsx(i.Fragment, { children: v.map((x, u) => /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx(oo, { start: x, viewmode: o, refDate: a }),
    /* @__PURE__ */ i.jsx(qi, { navigate: d, drag: l, drop: c, onMoveItemFn: m, startDate: x, events: s, starttime: r, endtime: n, viewmode: o, refDate: a })
  ] }, u)) });
}, lo = w.div`
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
`, so = w.div`
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
`, co = w.div`
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
    `, uo = w.img`
    width: calc(90% - 3rem);
    
    @media (min-width: 1000px) {
        width: 80%;
    }
`, fo = w.div`
    height: 3rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1000px) {
        display: none;
    }
`, ho = w.menu`
    margin-top: 10px;
    width: 100%;
    padding: 0;
`, Nn = w.li`
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
`, da = w.div`
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
`, fa = w.div`
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
`, mo = w.div`
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
`, go = w.input.attrs(() => ({
  type: "text"
}))`
    border: 1px solid var(--theme-color-line, #000);
    height: 40px;
    width: 100%;
    padding: 0 10px;
    font-size: 16px;
    background-color: var(--theme-color-background-input, #000);

    @media (min-width: 1000px) {
        height: 50px;
    }
`, vo = w.div`
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
`, yo = w.div`
    height: 1.5rem;
    padding: 0 1rem;
    text-transform: uppercase;
    background-color: var(--theme-color-background-aux2);
    color: var(--theme-color-font-empty);
    width: 100%;
`, xo = w.div`
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
`;
w.div`
    color: var(--theme-color-font-weak);
    display: flex;
    font-size: 0.8rem;
    line-height: 0.8rem;

    & .highlight {
        color: var(--theme-color-font);
        margin-left: 0.3rem;
    }
`;
const bo = w.a`
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
`, ha = w.a`
    text-decoration: none;
    color: var(--theme-color-font, #000);
    padding: 1rem;
    cursor: pointer;

    &:hover {
        background-color: var(--theme-color-background-aux3);
    }
`, Qt = w.div`
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
`, ma = w.div`
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: var(--theme-color-font);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
`, ga = w.div`
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
`, va = w.div`
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
`, po = w.div`
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
`, wo = w.div`
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
`, Zt = w.img`
    min-width: 100%;
    min-height: 100%;
`, dc = ({ items: e, onClose: t, menuOpened: a, location: r, logoUrl: n, navigate: o }) => {
  const [s, l] = R(""), c = (m) => s === m ? "active " : "", d = (m) => {
    o(m), t();
  };
  return I(() => {
    let m = "home";
    for (let v of e)
      if (r.pathname.startsWith(v.key)) {
        m = v.label;
        break;
      }
    l(m);
  }, [r]), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(so, { className: a ? "opened" : "", onClick: () => t() }),
    /* @__PURE__ */ i.jsxs(lo, { className: a ? "opened" : "", children: [
      /* @__PURE__ */ i.jsxs(co, { children: [
        /* @__PURE__ */ i.jsx(fo, { onClick: () => t(), children: /* @__PURE__ */ i.jsx(ie, { path: ia, size: 1 }) }),
        /* @__PURE__ */ i.jsx(uo, { src: n ?? "/img/logo.svg", alt: ua("menu.logo") })
      ] }),
      /* @__PURE__ */ i.jsxs(ho, { children: [
        /* @__PURE__ */ i.jsxs(Nn, { className: c("home"), onClick: () => {
          d("/");
        }, children: [
          /* @__PURE__ */ i.jsx(ie, { style: { marginRight: "0.5rem" }, size: 1.2, path: pi }),
          /* @__PURE__ */ i.jsx(Dr, { path: "menu.home" })
        ] }),
        e.map((m, v) => /* @__PURE__ */ i.jsxs(Nn, { className: c(m.label), onClick: () => {
          d(m.key);
        }, children: [
          /* @__PURE__ */ i.jsx(ie, { style: { marginRight: "0.5rem" }, size: 1.2, path: m.icon }),
          /* @__PURE__ */ i.jsx(Dr, { path: `menu.${m.label}` })
        ] }, v))
      ] })
    ] })
  ] });
}, fc = ({ content: e, show: t, onClose: a }) => {
  const r = () => {
    a && a();
  };
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(po, { className: t ? "active" : "", children: e ?? /* @__PURE__ */ i.jsx(i.Fragment, {}) }),
    /* @__PURE__ */ i.jsx(wo, { className: t ? "active" : "", onClick: r })
  ] });
}, hc = ({ helpLabel: e, items: t, photo: a, search: r, searchPlaceholder: n, userName: o, onSearch: s, onMenuOpen: l, onOpenHelp: c }) => {
  const [d, m] = R(""), [v, b] = R(!1), [x, u] = R(!1), f = _e(), g = (N) => {
    N.preventDefault(), N.stopPropagation(), u(!0);
  }, y = (N) => {
    let W = N.target.value;
    m(W), b(!0), f.current && clearTimeout(f.current), f.current = setTimeout(() => {
      s && s(W);
    }, 300);
  }, S = (N) => {
    N.preventDefault(), N.stopPropagation(), b(!0);
  }, C = () => {
    l && l();
  }, T = (N) => {
    N.preventDefault(), N.stopPropagation(), c && c();
  }, k = (N, W) => {
    N.preventDefault(), N.stopPropagation(), u(!1), W && W(N);
  };
  return I(() => {
    const N = () => {
      b(!1);
    }, W = () => {
      u(!1);
    }, Z = document.querySelector("body");
    return Z && (Z.addEventListener("click", N), Z.addEventListener("click", W)), () => {
      const ne = document.querySelector("body");
      ne && (ne.removeEventListener("click", N), ne.removeEventListener("click", W));
    };
  }, []), /* @__PURE__ */ i.jsxs(da, { children: [
    /* @__PURE__ */ i.jsx(va, { onClick: C, children: /* @__PURE__ */ i.jsx(ie, { size: 1, path: sa }) }),
    /* @__PURE__ */ i.jsxs(mo, { children: [
      /* @__PURE__ */ i.jsx(
        go,
        {
          id: "topbar-search",
          placeholder: n ?? "",
          value: d,
          onClick: S,
          onChange: y
        }
      ),
      v ? /* @__PURE__ */ i.jsx(vo, { children: r && r.length ? r.map((N) => N.items && N.items.length ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(yo, { children: N.label }, N.label),
        N.items.map((W, Z) => /* @__PURE__ */ i.jsx(xo, { onClick: W.action, children: W.element }, Z))
      ] }) : null) : null }) : null
    ] }),
    /* @__PURE__ */ i.jsxs(fa, { children: [
      e ? /* @__PURE__ */ i.jsx(bo, { href: "#", onClick: T, children: e }) : null,
      x ? /* @__PURE__ */ i.jsxs(ga, { children: [
        /* @__PURE__ */ i.jsxs(De, { align: "center", justify: "flex-left", style: { padding: "0.85rem" }, children: [
          /* @__PURE__ */ i.jsx(ma, { children: o }),
          /* @__PURE__ */ i.jsx(Qt, { className: "compact", children: a ? /* @__PURE__ */ i.jsx(Zt, { src: a }) : /* @__PURE__ */ i.jsx("span", { children: String(o ?? "").substring(0, 1) }) })
        ] }),
        t && t.length ? t.filter((N) => N != null).map((N, W) => /* @__PURE__ */ i.jsx(ha, { href: "#", onClick: (Z) => k(Z, N.action), children: N.label }, W)) : null
      ] }) : /* @__PURE__ */ i.jsx(Qt, { onClick: g, children: a ? /* @__PURE__ */ i.jsx(Zt, { src: a }) : /* @__PURE__ */ i.jsx("span", { children: String(o ?? "").substring(0, 1) }) })
    ] })
  ] });
}, mc = ({ photo: e, items: t, userName: a, onMenuOpen: r }) => {
  const [n, o] = R(!1), s = (d, m) => {
    d.preventDefault(), d.stopPropagation(), o(!1), m && m(d);
  }, l = (d) => {
    d.preventDefault(), d.stopPropagation(), o(!0);
  }, c = () => {
    r && r();
  };
  return I(() => {
    var m;
    const d = () => {
      o(!1);
    };
    return (m = document.querySelector("body")) == null || m.addEventListener("click", d), () => {
      var v;
      (v = document.querySelector("body")) == null || v.removeEventListener("click", d);
    };
  }, []), /* @__PURE__ */ i.jsxs(da, { children: [
    /* @__PURE__ */ i.jsx(va, { onClick: c, children: /* @__PURE__ */ i.jsx(ie, { size: 1, path: sa }) }),
    /* @__PURE__ */ i.jsx(fa, { children: n ? /* @__PURE__ */ i.jsxs(ga, { children: [
      /* @__PURE__ */ i.jsxs(De, { align: "center", justify: "flex-left", style: { padding: "0.85rem" }, children: [
        /* @__PURE__ */ i.jsx(ma, { children: a }),
        /* @__PURE__ */ i.jsx(Qt, { className: "compact", children: e ? /* @__PURE__ */ i.jsx(Zt, { src: e }) : /* @__PURE__ */ i.jsx("span", { children: String(a ?? "").substring(0, 1) }) })
      ] }),
      t && t.length ? t.filter((d) => d != null).map((d, m) => /* @__PURE__ */ i.jsx(ha, { href: "#", onClick: (v) => s(v, d.action), children: d.label }, m)) : null
    ] }) : /* @__PURE__ */ i.jsx(Qt, { onClick: l, children: e ? /* @__PURE__ */ i.jsx(Zt, { src: e }) : /* @__PURE__ */ i.jsx("span", { children: String(a ?? "").substring(0, 1) }) }) })
  ] });
}, Te = w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex: 1;
    min-height: ${(e) => e.width ? typeof e.width == "number" ? String(e.width) + "px" : e.width : "50px"};

    &.noMargin {
        margin-bottom: 0;
    }

    &.fullWidthMobile {
        width: 300px;
        
        @media (max-width: 1000px) {
            width: 100%;
        }
    }
`, jo = w.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    margin-bottom: 10px;
    flex: 1;
    min-height: ${(e) => e.width ? typeof e.width == "number" ? String(e.width) + "px" : e.width : "50px"};
`, ko = w.div`
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
`, Co = w.div`
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
`, So = w.div`
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
`, Pe = w.div`
    width: ${(e) => e.width ?? "100%"};
    min-width: ${(e) => e.width ?? "100%"};
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    height: 50px;
    color: var(--theme-color-font-input, #000);
    //border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
    background: var(--theme-color-background-input, #fff);
`, To = w(Pe)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
`, Fe = w.input.attrs((e) => ({
  type: e.type ?? "text"
}))`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`, Oo = w.textarea`
    width: 100%;
    height: 100%;
    padding: 10px;
    font-size: .9rem;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`, ya = w.input`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: transparent;
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`, xa = w.input`
    width: 100%;
    height: 50px;
    padding: 0 10px 0;
    font-size: .9rem;
    background: transparent;
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`, Do = w.select`
    width: 100%;
    height: ${(e) => e.width ? typeof e.width == "number" ? String(e.width) + "px" : e.width : "50px"};
    padding: 0 10px 0;
    font-size: .9rem;
    box-sizing: border-box;
    background: var(--theme-color-background-input, #fff);
    color: var(--theme-color-font-input, #000);
    border: 1px solid var(--theme-color-border-input, #ddd);;
    border-radius: 5px;
`, Eo = w.div`
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
`, ke = w.label`
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
`, Ce = w.div`
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
`, kt = w.div`
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
`, _o = w.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    & > *:not(:last-child) {
        margin-right: 10px;
    }
`, Po = w.button`
    height: 2.5rem;
    background-color: ${(e) => e.color ?? "#999"};
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
    width: ${(e) => e.size ? String(e.size) === e.size ? e.size : e.size + "rem" : "auto"};

    &.disabled {
        cursor: default;
        opacity: 0.4;
    }

    &.border {
        background-color: transparent;
        border: 1px solid ${(e) => e.color ?? "#999"};
        color: ${(e) => e.color ?? "#999"};
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
`, Ro = w.div`
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
`, No = w.div`
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
`, Ao = w.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`, Mo = w.div`
    width: 100%;
    aspect-ratio: 1;
    border: 3px dashed var(--theme-color-border-input, #ddd);
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`, An = w.div`
    color: var(--theme-color-font-weak, #666);
`, Fo = w.div`
    margin: 0.25rem 0;
    font-size: 0.75rem;
    color: var(--theme-color-font-empty, #999);
    text-transform: uppercase;
`, ba = w.input.attrs(() => ({
  type: "file"
}))`
    display: none;
    visibility: hidden;
    height: 0;
    position: fixed;
    top: -10000%;
    left: -10000%;
`;
w.label`
    height: 2.5rem;
    background-color: ${(e) => e.color ?? "#999"};
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
`;
const $o = w.div`
    position: absolute;
    inset: 0;
`, Io = w.div`
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
`, Lo = w.div`
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`, pa = w.div`
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
`, Wo = w.div`
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
`, Mn = w.div`
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
`, Fn = w.div`
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
`, zo = w.div`
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
`, Bo = w.div`
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
`, Vo = w.div`
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
`, Kr = w.div`
    margin-top:0.5rem;
`, Ho = w(De)`
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
`, Wt = w.button`
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
`, Yo = w(Gt)`
    width:"100%";

    @media (min-width: 1000px) {
        width:"10rem";
    }
`, Uo = w.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    margin-bottom: 1rem;
    `, Go = w.div`
    padding: 0.5rem 0;
    width: 2rem;
    box-sizing: border-box;
    background-color: var(--theme-color-background-aux3);
    color: var(--theme-color-font);
    //background-color: var(--theme-color-background-aux4, #666);
    border-right: 1px solid var(--theme-color-background-aux, #aaa);
    `, Qo = w.div`
    padding: 0.5rem 0;
    color: var(--theme-color-font-empty);
    `, xr = w.button`
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
`, Zo = w.div`
    height: 40px;
    line-height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`, Jr = w.div`
    padding: 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`, Ko = w.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    height: 80px;
    color: var(--theme-color-font-empty, #666);
    border: 1px solid var(--theme-color-border-input, #f00);
    background-color: var(--theme-color-background-input, #f00);
`, Jo = w.div`
    padding: 0 0.5rem;
    height: 20px;
    width: 20px;
    border: 1px solid var(--theme-color-border-input, #666);
    background-color: var(--theme-color-background-input, #f00);

    &.radio {
        border-radius: 10px;
    }
`, wa = w.div`
    width: calc(75% + 20px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
`, Ee = w.div`
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
`, ja = w.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -5px;
    height: 10px;
    background: linear-gradient(270deg, var(--theme-color-primary,#fff) 0%, #000 100%);
    border: 1px solid var(--theme-color-border-input, #666);
`, yt = w.div`
    font-size: 1rem;
    flex: none;
    text-align:center;
    width:25%;
`, Xo = w.div`
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
`, $n = w.div`
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
`, In = w.div`
    margin-left: 0.5rem;
    flex: 1;
    font-size: 1rem;
`, Ln = w.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;

    &:hover {
        background-color: var(--theme-color-background-aux4)
    }
`, qo = w.div`
    font-size: 1rem;
    color: var(--theme-color-font);
`, el = w.div`
    font-size: 1rem;
    color: var(--theme-color-font-weak);
`, tl = w.div`
    font-size: 1rem;
    color: var(--theme-color-font);
    
    & p:first-child {
        margin-top: 0;
    }
    & p:last-child {
        margin-bottom: 0;
    }
`, rl = w.div`
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
`, _r = ({ onClick: e, icon: t, color: a, border: r, size: n, title: o, hideTextOnMobile: s, disabled: l, tooltip: c, ...d }) => {
  const m = (b) => {
    e && !l && e(b);
  }, v = () => {
    var b;
    (b = document.querySelector("body")) == null || b.click();
  };
  return /* @__PURE__ */ i.jsxs(
    Po,
    {
      color: a,
      size: n,
      title: c,
      style: d.style,
      className: (l ? "disabled " : "") + (r ? "border " : ""),
      onFocus: () => {
        v();
      },
      onClick: (b) => m(b),
      children: [
        t ? /* @__PURE__ */ i.jsx(
          ie,
          {
            path: t,
            title: o,
            size: 0.95,
            style: { margin: "-2px 0 0 -2px" },
            color: r ? a : "white"
          }
        ) : null,
        /* @__PURE__ */ i.jsx("div", { className: s ? "btnLabel" : "", children: d.children ?? o ?? "" })
      ]
    }
  );
}, gc = _o, ka = w.label`
    font-size: 1rem;
    flex: 1;

    &.noWrap {
        white-space: nowrap;
    }
`, nl = ({ ...e }) => {
  const [t, a] = R(!1), r = () => {
    let n = !t;
    a(n), e.onCheck && e.onCheck(n);
  };
  return I(() => {
    a(!!e.checked);
  }, [e.checked]), /* @__PURE__ */ i.jsxs(
    Co,
    {
      style: e.style,
      onClick: () => r(),
      className: (e.isVertical === !0 ? "column " : "row ") + (e.className ?? ""),
      children: [
        /* @__PURE__ */ i.jsx(ka, { style: { cursor: "pointer" }, className: e.noWrap ? "noWrap" : "", children: e.label }),
        /* @__PURE__ */ i.jsx(Ro, { className: t ? "checked" : "" })
      ]
    }
  );
}, vc = ({ onValidate: e, formError: t, ...a }) => {
  const [r, n] = R(""), [o, s] = R(), [l, c] = R(!1), [d, m] = R(""), v = (u) => {
    let f = u.target.value.replace(/[^\d]/gi, ""), g = f;
    f.length >= 5 && (g = `${f.substring(0, 4)} ${f.substring(4)}`), f.length >= 9 && (g = `${f.substring(0, 4)} ${f.substring(4, 8)} ${f.substring(8)}`), f.length >= 13 && (g = `${f.substring(0, 4)} ${f.substring(4, 8)} ${f.substring(8, 12)} ${f.substring(12)}`), f.length >= 14 && (g = `${f.substring(0, 4)} ${f.substring(4, 10)} ${f.substring(10, 14)}${f.substring(14)}`), f.length >= 15 && (g = `${f.substring(0, 4)} ${f.substring(4, 10)} ${f.substring(10, 15)}${f.substring(15)}`), f.length >= 16 && (g = `${f.substring(0, 4)} ${f.substring(4, 8)} ${f.substring(8, 12)} ${f.substring(12, 16)}`), m(g), a.onChange && (u.target.value = g, a.onChange(u));
  }, b = (u) => {
    var f;
    (f = document.querySelector("body")) == null || f.click(), a.onFocus && a.onFocus(u), c(!0);
  }, x = (u) => {
    if (d.replace(/[^\d]/gi, "").length < 14 ? m("") : (u.target.value = d ?? "", a.onChange && a.onChange(u)), a.onBlur && a.onBlur(u), e) {
      let g = e(u.target.value) ?? "";
      n(g !== !0 ? String(g) : "");
    } else
      n("");
    c(!1);
  };
  return I(() => {
    a.value !== null && m(String(a.value));
  }, [a.value]), I(() => {
    o && typeof o.message == "string" ? n(o.message) : n((o == null ? void 0 : o.message[0]) ?? "");
  }, [o]), I(() => {
    s(t);
  }, [t]), /* @__PURE__ */ i.jsx(Te, { className: a.className ?? "", style: a.style ?? {}, children: /* @__PURE__ */ i.jsxs(Pe, { width: a.width, children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        type: "text",
        id: a.uid,
        value: d,
        onChange: v,
        onFocus: (u) => b(u),
        onBlur: (u) => x(u)
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: a.uid, className: "hasIcon", children: l ? "" : r }),
    r ? /* @__PURE__ */ i.jsx(Ce, { title: r, className: l ? "hasIcon big" : "hasIcon" }) : null
  ] }) });
}, yc = ({ uid: e, copyLabel: t, ...a }) => {
  const [r, n] = R(""), o = (l) => {
    var c;
    (c = document.querySelector("body")) == null || c.click(), a.onFocus && a.onFocus(l);
  }, s = () => {
    const l = e.replace(/\./gi, "_"), c = document.querySelector("#" + l);
    c && (c.select(), c.setSelectionRange(0, 99999), navigator.clipboard.writeText(c.value));
  };
  return I(() => {
    a.value !== null && n(String(a.value));
  }, [a.value]), /* @__PURE__ */ i.jsx(jo, { className: a.className ?? "", style: a.style ?? {}, children: /* @__PURE__ */ i.jsxs(To, { children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        id: e.replace(/\./gi, "_"),
        type: "text",
        readOnly: !0,
        value: r,
        onFocus: (l) => o(l),
        style: { paddingRight: "4rem" }
      }
    ),
    /* @__PURE__ */ i.jsx(rl, { onClick: s, children: t })
  ] }) });
}, xc = ({ onValidate: e, formError: t, ...a }) => {
  const [r, n] = R(""), [o, s] = R(), [l, c] = R(!1), [d, m] = R(""), v = (u) => {
    let f = u.target.value.replace(/[^\d]/gi, ""), g = f;
    f.length >= 4 && (g = `${f.substring(0, 3)}.${f.substring(3)}`), f.length >= 7 && (g = `${f.substring(0, 3)}.${f.substring(3, 6)}.${f.substring(6)}`), f.length >= 10 && (g = `${f.substring(0, 3)}.${f.substring(3, 6)}.${f.substring(6, 9)}-${f.substring(9)}`), f.length >= 11 && (g = `${f.substring(0, 3)}.${f.substring(3, 6)}.${f.substring(6, 9)}-${f.substring(9, 11)}`), m(g), a.onChange && (u.target.value = g, a.onChange(u));
  }, b = (u) => {
    var f;
    (f = document.querySelector("body")) == null || f.click(), a.onFocus && a.onFocus(u), c(!0);
  }, x = (u) => {
    if (d.replace(/[^\d]/gi, "").length !== 11 ? m("") : (u.target.value = d ?? "", a.onChange && a.onChange(u)), a.onBlur && a.onBlur(u), e) {
      let g = e(u.target.value) ?? "";
      n(g !== !0 ? String(g) : "");
    } else
      n("");
    c(!1);
  };
  return I(() => {
    a.value !== null && m(String(a.value));
  }, [a.value]), I(() => {
    o && typeof o.message == "string" ? n(o.message) : n((o == null ? void 0 : o.message[0]) ?? "");
  }, [o]), I(() => {
    s(t);
  }, [t]), /* @__PURE__ */ i.jsx(Te, { className: a.className ?? "", style: a.style ?? {}, children: /* @__PURE__ */ i.jsxs(Pe, { width: a.width, children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        type: "text",
        id: a.uid,
        value: d,
        onChange: v,
        onFocus: (u) => b(u),
        onBlur: (u) => x(u)
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: a.uid, children: l ? "" : r }),
    r ? /* @__PURE__ */ i.jsx(Ce, { title: r, className: l ? "big" : "" }) : null
  ] }) });
};
function Ca(e) {
  var t, a, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (t = 0; t < n; t++)
        e[t] && (a = Ca(e[t])) && (r && (r += " "), r += a);
    } else
      for (a in e)
        e[a] && (r && (r += " "), r += a);
  return r;
}
function qt() {
  for (var e, t, a = 0, r = "", n = arguments.length; a < n; a++)
    (e = arguments[a]) && (t = Ca(e)) && (r && (r += " "), r += t);
  return r;
}
const al = (e, t, a, r) => {
  if (a === "length" || a === "prototype" || a === "arguments" || a === "caller")
    return;
  const n = Object.getOwnPropertyDescriptor(e, a), o = Object.getOwnPropertyDescriptor(t, a);
  !il(n, o) && r || Object.defineProperty(e, a, o);
}, il = function(e, t) {
  return e === void 0 || e.configurable || e.writable === t.writable && e.enumerable === t.enumerable && e.configurable === t.configurable && (e.writable || e.value === t.value);
}, ol = (e, t) => {
  const a = Object.getPrototypeOf(t);
  a !== Object.getPrototypeOf(e) && Object.setPrototypeOf(e, a);
}, ll = (e, t) => `/* Wrapped ${e}*/
${t}`, sl = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), cl = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), ul = (e, t, a) => {
  const r = a === "" ? "" : `with ${a.trim()}() `, n = ll.bind(null, r, t.toString());
  Object.defineProperty(n, "name", cl), Object.defineProperty(e, "toString", { ...sl, value: n });
}, dl = (e, t, { ignoreNonConfigurable: a = !1 } = {}) => {
  const { name: r } = e;
  for (const n of Reflect.ownKeys(t))
    al(e, t, n, a);
  return ol(e, t), ul(e, t, r), e;
};
var fl = dl, Pr = { exports: {} }, hl = () => {
  const e = {};
  return e.promise = new Promise((t, a) => {
    e.resolve = t, e.reject = a;
  }), e;
};
(function(e, t) {
  var a = $t && $t.__awaiter || function(s, l, c, d) {
    return new (c || (c = Promise))(function(m, v) {
      function b(f) {
        try {
          u(d.next(f));
        } catch (g) {
          v(g);
        }
      }
      function x(f) {
        try {
          u(d.throw(f));
        } catch (g) {
          v(g);
        }
      }
      function u(f) {
        f.done ? m(f.value) : new c(function(g) {
          g(f.value);
        }).then(b, x);
      }
      u((d = d.apply(s, l || [])).next());
    });
  }, r = $t && $t.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(t, "__esModule", { value: !0 });
  const n = r(hl);
  function o(s, l = "maxAge") {
    let c, d, m;
    const v = () => a(this, void 0, void 0, function* () {
      if (c !== void 0)
        return;
      const u = (f) => a(this, void 0, void 0, function* () {
        m = n.default();
        const g = f[1][l] - Date.now();
        if (g <= 0) {
          s.delete(f[0]), m.resolve();
          return;
        }
        return c = f[0], d = setTimeout(() => {
          s.delete(f[0]), m && m.resolve();
        }, g), typeof d.unref == "function" && d.unref(), m.promise;
      });
      try {
        for (const f of s)
          yield u(f);
      } catch {
      }
      c = void 0;
    }), b = () => {
      c = void 0, d !== void 0 && (clearTimeout(d), d = void 0), m !== void 0 && (m.reject(void 0), m = void 0);
    }, x = s.set.bind(s);
    return s.set = (u, f) => {
      s.has(u) && s.delete(u);
      const g = x(u, f);
      return c && c === u && b(), v(), g;
    }, v(), s;
  }
  t.default = o, e.exports = o, e.exports.default = o;
})(Pr, Pr.exports);
var ml = Pr.exports;
const gl = fl, vl = ml, br = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Kt = (e, { cacheKey: t, cache: a = /* @__PURE__ */ new Map(), maxAge: r } = {}) => {
  typeof r == "number" && vl(a);
  const n = function(...o) {
    const s = t ? t(o) : o[0], l = a.get(s);
    if (l)
      return l.data;
    const c = e.apply(this, o);
    return a.set(s, {
      data: c,
      maxAge: r ? Date.now() + r : Number.POSITIVE_INFINITY
    }), c;
  };
  return gl(n, e, {
    ignoreNonConfigurable: !0
  }), Sa.set(n, a), n;
};
Kt.decorator = (e = {}) => (t, a, r) => {
  const n = t[a];
  if (typeof n != "function")
    throw new TypeError("The decorated value must be a function");
  delete r.value, delete r.writable, r.get = function() {
    if (!br.has(this)) {
      const o = Kt(n, e);
      return br.set(this, o), o;
    }
    return br.get(this);
  };
};
Kt.clear = (e) => {
  const t = Sa.get(e);
  if (!t)
    throw new TypeError("Can't clear a function that was not memoized!");
  if (typeof t.clear != "function")
    throw new TypeError("The cache Map can't be cleared!");
  t.clear();
};
var yl = Kt;
const Ta = /* @__PURE__ */ ra(yl);
function xl(e) {
  return typeof e == "string";
}
function bl(e, t, a) {
  return a.indexOf(e) === t;
}
function pl(e) {
  return e.toLowerCase() === e;
}
function Wn(e) {
  return e.indexOf(",") === -1 ? e : e.split(",");
}
function Rr(e) {
  if (!e)
    return e;
  if (e === "C" || e === "posix" || e === "POSIX")
    return "en-US";
  if (e.indexOf(".") !== -1) {
    var t = e.split(".")[0], a = t === void 0 ? "" : t;
    return Rr(a);
  }
  if (e.indexOf("@") !== -1) {
    var r = e.split("@")[0], a = r === void 0 ? "" : r;
    return Rr(a);
  }
  if (e.indexOf("-") === -1 || !pl(e))
    return e;
  var n = e.split("-"), o = n[0], s = n[1], l = s === void 0 ? "" : s;
  return "".concat(o, "-").concat(l.toUpperCase());
}
function wl(e) {
  var t = e === void 0 ? {} : e, a = t.useFallbackLocale, r = a === void 0 ? !0 : a, n = t.fallbackLocale, o = n === void 0 ? "en-US" : n, s = [];
  if (typeof navigator < "u") {
    for (var l = navigator.languages || [], c = [], d = 0, m = l; d < m.length; d++) {
      var v = m[d];
      c = c.concat(Wn(v));
    }
    var b = navigator.language, x = b && Wn(b);
    s = s.concat(c, x);
  }
  return r && s.push(o), s.filter(xl).map(Rr).filter(bl);
}
var jl = Ta(wl, { cacheKey: JSON.stringify });
function kl(e) {
  return jl(e)[0] || null;
}
var Oa = Ta(kl, { cacheKey: JSON.stringify });
function Ne(e, t, a) {
  return function(n, o) {
    o === void 0 && (o = a);
    var s = e(n) + o;
    return t(s);
  };
}
function Ct(e) {
  return function(a) {
    return new Date(e(a).getTime() - 1);
  };
}
function St(e, t) {
  return function(r) {
    return [e(r), t(r)];
  };
}
function ge(e) {
  if (e instanceof Date)
    return e.getFullYear();
  if (typeof e == "number")
    return e;
  var t = parseInt(e, 10);
  if (typeof e == "string" && !isNaN(t))
    return t;
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function $e(e) {
  if (e instanceof Date)
    return e.getMonth();
  throw new Error("Failed to get month from date: ".concat(e, "."));
}
function er(e) {
  if (e instanceof Date)
    return e.getDate();
  throw new Error("Failed to get year from date: ".concat(e, "."));
}
function nt(e) {
  var t = ge(e), a = t + (-t + 1) % 100, r = /* @__PURE__ */ new Date();
  return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var Cl = Ne(ge, nt, -100), Da = Ne(ge, nt, 100), Xr = Ct(Da), Sl = Ne(ge, Xr, -100), Ea = St(nt, Xr);
function Ie(e) {
  var t = ge(e), a = t + (-t + 1) % 10, r = /* @__PURE__ */ new Date();
  return r.setFullYear(a, 0, 1), r.setHours(0, 0, 0, 0), r;
}
var _a = Ne(ge, Ie, -10), qr = Ne(ge, Ie, 10), tr = Ct(qr), Pa = Ne(ge, tr, -10), Ra = St(Ie, tr);
function at(e) {
  var t = ge(e), a = /* @__PURE__ */ new Date();
  return a.setFullYear(t, 0, 1), a.setHours(0, 0, 0, 0), a;
}
var Na = Ne(ge, at, -1), en = Ne(ge, at, 1), rr = Ct(en), Aa = Ne(ge, rr, -1), Tl = St(at, rr);
function tn(e, t) {
  return function(r, n) {
    n === void 0 && (n = t);
    var o = ge(r), s = $e(r) + n, l = /* @__PURE__ */ new Date();
    return l.setFullYear(o, s, 1), l.setHours(0, 0, 0, 0), e(l);
  };
}
function Ye(e) {
  var t = ge(e), a = $e(e), r = /* @__PURE__ */ new Date();
  return r.setFullYear(t, a, 1), r.setHours(0, 0, 0, 0), r;
}
var Ma = tn(Ye, -1), rn = tn(Ye, 1), Tt = Ct(rn), Fa = tn(Tt, -1), Ol = St(Ye, Tt);
function Dl(e, t) {
  return function(r, n) {
    n === void 0 && (n = t);
    var o = ge(r), s = $e(r), l = er(r) + n, c = /* @__PURE__ */ new Date();
    return c.setFullYear(o, s, l), c.setHours(0, 0, 0, 0), e(c);
  };
}
function Ot(e) {
  var t = ge(e), a = $e(e), r = er(e), n = /* @__PURE__ */ new Date();
  return n.setFullYear(t, a, r), n.setHours(0, 0, 0, 0), n;
}
var El = Dl(Ot, 1), nn = Ct(El), _l = St(Ot, nn);
function $a(e) {
  return er(Tt(e));
}
var xt, ye = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
}, Pl = (xt = {}, xt[ye.GREGORY] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], xt[ye.HEBREW] = ["he", "he-IL"], xt[ye.ISLAMIC] = [
  // ar-LB, ar-MA intentionally missing
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], xt), an = [0, 1, 2, 3, 4, 5, 6], pr = /* @__PURE__ */ new Map();
function Rl(e) {
  return function(a, r) {
    var n = a || Oa();
    pr.has(n) || pr.set(n, /* @__PURE__ */ new Map());
    var o = pr.get(n);
    return o.has(e) || o.set(e, new Intl.DateTimeFormat(n || void 0, e).format), o.get(e)(r);
  };
}
function Nl(e) {
  var t = new Date(e);
  return new Date(t.setHours(12));
}
function Ue(e) {
  return function(t, a) {
    return Rl(e)(t, Nl(a));
  };
}
var Al = { day: "numeric" }, Ml = {
  day: "numeric",
  month: "long",
  year: "numeric"
}, Fl = { month: "long" }, $l = {
  month: "long",
  year: "numeric"
}, Il = { weekday: "short" }, Ll = { weekday: "long" }, Wl = { year: "numeric" }, zl = Ue(Al), Bl = Ue(Ml), Vl = Ue(Fl), Ia = Ue($l), Hl = Ue(Il), Yl = Ue(Ll), nr = Ue(Wl), Ul = an[0], Gl = an[5], zn = an[6];
function wt(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var a = e.getDay();
  switch (t) {
    case ye.ISO_8601:
      return (a + 6) % 7;
    case ye.ISLAMIC:
      return (a + 1) % 7;
    case ye.HEBREW:
    case ye.GREGORY:
      return a;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function Ql(e) {
  var t = nt(e);
  return ge(t);
}
function Zl(e) {
  var t = Ie(e);
  return ge(t);
}
function Nr(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var a = ge(e), r = $e(e), n = e.getDate() - wt(e, t);
  return new Date(a, r, n);
}
function Kl(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var a = t === ye.GREGORY ? ye.GREGORY : ye.ISO_8601, r = Nr(e, t), n = ge(e) + 1, o, s;
  do
    o = new Date(n, 0, a === ye.ISO_8601 ? 4 : 1), s = Nr(o, t), n -= 1;
  while (e < s);
  return Math.round((r.getTime() - s.getTime()) / (864e5 * 7)) + 1;
}
function He(e, t) {
  switch (e) {
    case "century":
      return nt(t);
    case "decade":
      return Ie(t);
    case "year":
      return at(t);
    case "month":
      return Ye(t);
    case "day":
      return Ot(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Jl(e, t) {
  switch (e) {
    case "century":
      return Cl(t);
    case "decade":
      return _a(t);
    case "year":
      return Na(t);
    case "month":
      return Ma(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function La(e, t) {
  switch (e) {
    case "century":
      return Da(t);
    case "decade":
      return qr(t);
    case "year":
      return en(t);
    case "month":
      return rn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Xl(e, t) {
  switch (e) {
    case "decade":
      return _a(t, -100);
    case "year":
      return Na(t, -10);
    case "month":
      return Ma(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ql(e, t) {
  switch (e) {
    case "decade":
      return qr(t, 100);
    case "year":
      return en(t, 10);
    case "month":
      return rn(t, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Wa(e, t) {
  switch (e) {
    case "century":
      return Xr(t);
    case "decade":
      return tr(t);
    case "year":
      return rr(t);
    case "month":
      return Tt(t);
    case "day":
      return nn(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function es(e, t) {
  switch (e) {
    case "century":
      return Sl(t);
    case "decade":
      return Pa(t);
    case "year":
      return Aa(t);
    case "month":
      return Fa(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function ts(e, t) {
  switch (e) {
    case "decade":
      return Pa(t, -100);
    case "year":
      return Aa(t, -10);
    case "month":
      return Fa(t, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function Bn(e, t) {
  switch (e) {
    case "century":
      return Ea(t);
    case "decade":
      return Ra(t);
    case "year":
      return Tl(t);
    case "month":
      return Ol(t);
    case "day":
      return _l(t);
    default:
      throw new Error("Invalid rangeType: ".concat(e));
  }
}
function rs(e, t, a) {
  var r = [t, a].sort(function(n, o) {
    return n.getTime() - o.getTime();
  });
  return [He(e, r[0]), Wa(e, r[1])];
}
function za(e, t, a) {
  return t === void 0 && (t = nr), a.map(function(r) {
    return t(e, r);
  }).join(" – ");
}
function ns(e, t, a) {
  return za(e, t, Ea(a));
}
function Ba(e, t, a) {
  return za(e, t, Ra(a));
}
function as(e) {
  return e.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function Va(e, t) {
  t === void 0 && (t = ye.ISO_8601);
  var a = e.getDay();
  switch (t) {
    case ye.ISLAMIC:
    case ye.HEBREW:
      return a === Gl || a === zn;
    case ye.ISO_8601:
    case ye.GREGORY:
      return a === zn || a === Ul;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
var Oe = "react-calendar__navigation";
function is(e) {
  var t = e.activeStartDate, a = e.drillUp, r = e.formatMonthYear, n = r === void 0 ? Ia : r, o = e.formatYear, s = o === void 0 ? nr : o, l = e.locale, c = e.maxDate, d = e.minDate, m = e.navigationAriaLabel, v = m === void 0 ? "" : m, b = e.navigationAriaLive, x = e.navigationLabel, u = e.next2AriaLabel, f = u === void 0 ? "" : u, g = e.next2Label, y = g === void 0 ? "»" : g, S = e.nextAriaLabel, C = S === void 0 ? "" : S, T = e.nextLabel, k = T === void 0 ? "›" : T, N = e.prev2AriaLabel, W = N === void 0 ? "" : N, Z = e.prev2Label, ne = Z === void 0 ? "«" : Z, G = e.prevAriaLabel, F = G === void 0 ? "" : G, L = e.prevLabel, p = L === void 0 ? "‹" : L, O = e.setActiveStartDate, D = e.showDoubleView, P = e.view, E = e.views, V = E.indexOf(P) > 0, oe = P !== "century", j = Jl(P, t), A = oe ? Xl(P, t) : void 0, H = La(P, t), K = oe ? ql(P, t) : void 0, Q = function() {
    if (j.getFullYear() < 0)
      return !0;
    var ue = es(P, t);
    return d && d >= ue;
  }(), q = oe && function() {
    if (A.getFullYear() < 0)
      return !0;
    var ue = ts(P, t);
    return d && d >= ue;
  }(), J = c && c < H, B = oe && c && c < K;
  function X() {
    O(j, "prev");
  }
  function ee() {
    O(A, "prev2");
  }
  function re() {
    O(H, "next");
  }
  function he() {
    O(K, "next2");
  }
  function M(ue) {
    var je = function() {
      switch (P) {
        case "century":
          return ns(l, s, ue);
        case "decade":
          return Ba(l, s, ue);
        case "year":
          return s(l, ue);
        case "month":
          return n(l, ue);
        default:
          throw new Error("Invalid view: ".concat(P, "."));
      }
    }();
    return x ? x({
      date: ue,
      label: je,
      locale: l || Oa() || void 0,
      view: P
    }) : je;
  }
  function ve() {
    var ue = "".concat(Oe, "__label");
    return i.jsxs("button", { "aria-label": v, "aria-live": b, className: ue, disabled: !V, onClick: a, style: { flexGrow: 1 }, type: "button", children: [i.jsx("span", { className: "".concat(ue, "__labelText ").concat(ue, "__labelText--from"), children: M(t) }), D ? i.jsxs(i.Fragment, { children: [i.jsx("span", { className: "".concat(ue, "__divider"), children: " – " }), i.jsx("span", { className: "".concat(ue, "__labelText ").concat(ue, "__labelText--to"), children: M(H) })] }) : null] });
  }
  return i.jsxs("div", { className: Oe, children: [ne !== null && oe ? i.jsx("button", { "aria-label": W, className: "".concat(Oe, "__arrow ").concat(Oe, "__prev2-button"), disabled: q, onClick: ee, type: "button", children: ne }) : null, p !== null && i.jsx("button", { "aria-label": F, className: "".concat(Oe, "__arrow ").concat(Oe, "__prev-button"), disabled: Q, onClick: X, type: "button", children: p }), ve(), k !== null && i.jsx("button", { "aria-label": C, className: "".concat(Oe, "__arrow ").concat(Oe, "__next-button"), disabled: J, onClick: re, type: "button", children: k }), y !== null && oe ? i.jsx("button", { "aria-label": f, className: "".concat(Oe, "__arrow ").concat(Oe, "__next2-button"), disabled: B, onClick: he, type: "button", children: y }) : null] });
}
var tt = function() {
  return tt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, tt.apply(this, arguments);
}, os = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function Vn(e) {
  return "".concat(e, "%");
}
function on(e) {
  var t = e.children, a = e.className, r = e.count, n = e.direction, o = e.offset, s = e.style, l = e.wrap, c = os(e, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return i.jsx("div", tt({ className: a, style: tt({ display: "flex", flexDirection: n, flexWrap: l ? "wrap" : "nowrap" }, s) }, c, { children: ea.map(t, function(d, m) {
    var v = o && m === 0 ? Vn(100 * o / r) : null;
    return ta(d, tt(tt({}, d.props), { style: {
      flexBasis: Vn(100 / r),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: v,
      marginInlineStart: v,
      marginInlineEnd: 0
    } }));
  }) }));
}
function ls(e, t, a) {
  return t && t > e ? t : a && a < e ? a : e;
}
function jt(e, t) {
  return t[0] <= e && t[1] >= e;
}
function ss(e, t) {
  return e[0] <= t[0] && e[1] >= t[1];
}
function Ha(e, t) {
  return jt(e[0], t) || jt(e[1], t);
}
function Hn(e, t, a) {
  var r = Ha(t, e), n = [];
  if (r) {
    n.push(a);
    var o = jt(e[0], t), s = jt(e[1], t);
    o && n.push("".concat(a, "Start")), s && n.push("".concat(a, "End")), o && s && n.push("".concat(a, "BothEnds"));
  }
  return n;
}
function cs(e) {
  return Array.isArray(e) ? e[0] !== null && e[1] !== null : e !== null;
}
function us(e) {
  if (!e)
    throw new Error("args is required");
  var t = e.value, a = e.date, r = e.hover, n = "react-calendar__tile", o = [n];
  if (!a)
    return o;
  var s = /* @__PURE__ */ new Date(), l = function() {
    if (Array.isArray(a))
      return a;
    var x = e.dateType;
    if (!x)
      throw new Error("dateType is required when date is not an array of two dates");
    return Bn(x, a);
  }();
  if (jt(s, l) && o.push("".concat(n, "--now")), !t || !cs(t))
    return o;
  var c = function() {
    if (Array.isArray(t))
      return t;
    var x = e.valueType;
    if (!x)
      throw new Error("valueType is required when value is not an array of two dates");
    return Bn(x, t);
  }();
  ss(c, l) ? o.push("".concat(n, "--active")) : Ha(c, l) && o.push("".concat(n, "--hasActive"));
  var d = Hn(c, l, "".concat(n, "--range"));
  o.push.apply(o, d);
  var m = Array.isArray(t) ? t : [t];
  if (r && m.length === 1) {
    var v = r > c[0] ? [c[0], r] : [r, c[0]], b = Hn(v, l, "".concat(n, "--hover"));
    o.push.apply(o, b);
  }
  return o;
}
function ar(e) {
  for (var t = e.className, a = e.count, r = a === void 0 ? 3 : a, n = e.dateTransform, o = e.dateType, s = e.end, l = e.hover, c = e.offset, d = e.renderTile, m = e.start, v = e.step, b = v === void 0 ? 1 : v, x = e.value, u = e.valueType, f = [], g = m; g <= s; g += b) {
    var y = n(g);
    f.push(d({
      classes: us({
        date: y,
        dateType: o,
        hover: l,
        value: x,
        valueType: u
      }),
      date: y
    }));
  }
  return i.jsx(on, { className: t, count: r, offset: c, wrap: !0, children: f });
}
function ir(e) {
  var t = e.activeStartDate, a = e.children, r = e.classes, n = e.date, o = e.formatAbbr, s = e.locale, l = e.maxDate, c = e.maxDateTransform, d = e.minDate, m = e.minDateTransform, v = e.onClick, b = e.onMouseOver, x = e.style, u = e.tileClassName, f = e.tileContent, g = e.tileDisabled, y = e.view, S = dn(function() {
    var T = { activeStartDate: t, date: n, view: y };
    return typeof u == "function" ? u(T) : u;
  }, [t, n, u, y]), C = dn(function() {
    var T = { activeStartDate: t, date: n, view: y };
    return typeof f == "function" ? f(T) : f;
  }, [t, n, f, y]);
  return i.jsxs("button", { className: qt(r, S), disabled: d && m(d) > n || l && c(l) < n || g && g({ activeStartDate: t, date: n, view: y }), onClick: v ? function(T) {
    return v(n, T);
  } : void 0, onFocus: b ? function() {
    return b(n);
  } : void 0, onMouseOver: b ? function() {
    return b(n);
  } : void 0, style: x, type: "button", children: [o ? i.jsx("abbr", { "aria-label": o(s, n), children: a }) : a, C] });
}
var Ar = function() {
  return Ar = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ar.apply(this, arguments);
}, ds = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, wr = "react-calendar__century-view__decades__decade";
function fs(e) {
  var t = e.classes, a = t === void 0 ? [] : t, r = e.currentCentury, n = e.formatYear, o = n === void 0 ? nr : n, s = ds(e, ["classes", "currentCentury", "formatYear"]), l = s.date, c = s.locale, d = [];
  return a && d.push.apply(d, a), wr && d.push(wr), nt(l).getFullYear() !== r && d.push("".concat(wr, "--neighboringCentury")), i.jsx(ir, Ar({}, s, { classes: d, maxDateTransform: tr, minDateTransform: Ie, view: "century", children: Ba(c, o, l) }));
}
var Mr = function() {
  return Mr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Mr.apply(this, arguments);
}, Yn = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function hs(e) {
  var t = e.activeStartDate, a = e.hover, r = e.showNeighboringCentury, n = e.value, o = e.valueType, s = Yn(e, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]), l = Ql(t), c = l + (r ? 119 : 99);
  return i.jsx(ar, { className: "react-calendar__century-view__decades", dateTransform: Ie, dateType: "decade", end: c, hover: a, renderTile: function(d) {
    var m = d.date, v = Yn(d, ["date"]);
    return i.jsx(fs, Mr({}, s, v, { activeStartDate: t, currentCentury: l, date: m }), m.getTime());
  }, start: l, step: 10, value: n, valueType: o });
}
var Fr = function() {
  return Fr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Fr.apply(this, arguments);
};
function ms(e) {
  function t() {
    return i.jsx(hs, Fr({}, e));
  }
  return i.jsx("div", { className: "react-calendar__century-view", children: t() });
}
var $r = function() {
  return $r = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, $r.apply(this, arguments);
}, gs = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, jr = "react-calendar__decade-view__years__year";
function vs(e) {
  var t = e.classes, a = t === void 0 ? [] : t, r = e.currentDecade, n = e.formatYear, o = n === void 0 ? nr : n, s = gs(e, ["classes", "currentDecade", "formatYear"]), l = s.date, c = s.locale, d = [];
  return a && d.push.apply(d, a), jr && d.push(jr), Ie(l).getFullYear() !== r && d.push("".concat(jr, "--neighboringDecade")), i.jsx(ir, $r({}, s, { classes: d, maxDateTransform: rr, minDateTransform: at, view: "decade", children: o(c, l) }));
}
var Ir = function() {
  return Ir = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ir.apply(this, arguments);
}, Un = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function ys(e) {
  var t = e.activeStartDate, a = e.hover, r = e.showNeighboringDecade, n = e.value, o = e.valueType, s = Un(e, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]), l = Zl(t), c = l + (r ? 11 : 9);
  return i.jsx(ar, { className: "react-calendar__decade-view__years", dateTransform: at, dateType: "year", end: c, hover: a, renderTile: function(d) {
    var m = d.date, v = Un(d, ["date"]);
    return i.jsx(vs, Ir({}, s, v, { activeStartDate: t, currentDecade: l, date: m }), m.getTime());
  }, start: l, value: n, valueType: o });
}
var Lr = function() {
  return Lr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Lr.apply(this, arguments);
};
function xs(e) {
  function t() {
    return i.jsx(ys, Lr({}, e));
  }
  return i.jsx("div", { className: "react-calendar__decade-view", children: t() });
}
var Wr = function() {
  return Wr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Wr.apply(this, arguments);
}, bs = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, Gn = function(e, t, a) {
  if (a || arguments.length === 2)
    for (var r = 0, n = t.length, o; r < n; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}, ps = "react-calendar__year-view__months__month";
function ws(e) {
  var t = e.classes, a = t === void 0 ? [] : t, r = e.formatMonth, n = r === void 0 ? Vl : r, o = e.formatMonthYear, s = o === void 0 ? Ia : o, l = bs(e, ["classes", "formatMonth", "formatMonthYear"]), c = l.date, d = l.locale;
  return i.jsx(ir, Wr({}, l, { classes: Gn(Gn([], a, !0), [ps], !1), formatAbbr: s, maxDateTransform: Tt, minDateTransform: Ye, view: "year", children: n(d, c) }));
}
var zr = function() {
  return zr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, zr.apply(this, arguments);
}, Qn = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function js(e) {
  var t = e.activeStartDate, a = e.hover, r = e.value, n = e.valueType, o = Qn(e, ["activeStartDate", "hover", "value", "valueType"]), s = 0, l = 11, c = ge(t);
  return i.jsx(ar, { className: "react-calendar__year-view__months", dateTransform: function(d) {
    var m = /* @__PURE__ */ new Date();
    return m.setFullYear(c, d, 1), Ye(m);
  }, dateType: "month", end: l, hover: a, renderTile: function(d) {
    var m = d.date, v = Qn(d, ["date"]);
    return i.jsx(ws, zr({}, o, v, { activeStartDate: t, date: m }), m.getTime());
  }, start: s, value: r, valueType: n });
}
var Br = function() {
  return Br = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Br.apply(this, arguments);
};
function ks(e) {
  function t() {
    return i.jsx(js, Br({}, e));
  }
  return i.jsx("div", { className: "react-calendar__year-view", children: t() });
}
var Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Vr.apply(this, arguments);
}, Cs = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, zt = "react-calendar__month-view__days__day";
function Ss(e) {
  var t = e.calendarType, a = e.classes, r = a === void 0 ? [] : a, n = e.currentMonthIndex, o = e.formatDay, s = o === void 0 ? zl : o, l = e.formatLongDate, c = l === void 0 ? Bl : l, d = Cs(e, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]), m = d.date, v = d.locale, b = [];
  return r && b.push.apply(b, r), zt && b.push(zt), Va(m, t) && b.push("".concat(zt, "--weekend")), m.getMonth() !== n && b.push("".concat(zt, "--neighboringMonth")), i.jsx(ir, Vr({}, d, { classes: b, formatAbbr: c, maxDateTransform: nn, minDateTransform: Ot, view: "month", children: s(v, m) }));
}
var Hr = function() {
  return Hr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Hr.apply(this, arguments);
}, Zn = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function Ts(e) {
  var t = e.activeStartDate, a = e.calendarType, r = e.hover, n = e.showFixedNumberOfWeeks, o = e.showNeighboringMonth, s = e.value, l = e.valueType, c = Zn(e, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]), d = ge(t), m = $e(t), v = n || o, b = wt(t, a), x = v ? 0 : b, u = (v ? -b : 0) + 1, f = function() {
    if (n)
      return u + 6 * 7 - 1;
    var g = $a(t);
    if (o) {
      var y = /* @__PURE__ */ new Date();
      y.setFullYear(d, m, g), y.setHours(0, 0, 0, 0);
      var S = 7 - wt(y, a) - 1;
      return g + S;
    }
    return g;
  }();
  return i.jsx(ar, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(g) {
    var y = /* @__PURE__ */ new Date();
    return y.setFullYear(d, m, g), Ot(y);
  }, dateType: "day", hover: r, end: f, renderTile: function(g) {
    var y = g.date, S = Zn(g, ["date"]);
    return i.jsx(Ss, Hr({}, c, S, { activeStartDate: t, calendarType: a, currentMonthIndex: m, date: y }), y.getTime());
  }, offset: x, start: u, value: s, valueType: l });
}
var Ya = "react-calendar__month-view__weekdays", kr = "".concat(Ya, "__weekday");
function Os(e) {
  for (var t = e.calendarType, a = e.formatShortWeekday, r = a === void 0 ? Hl : a, n = e.formatWeekday, o = n === void 0 ? Yl : n, s = e.locale, l = e.onMouseLeave, c = /* @__PURE__ */ new Date(), d = Ye(c), m = ge(d), v = $e(d), b = [], x = 1; x <= 7; x += 1) {
    var u = new Date(m, v, x - wt(d, t)), f = o(s, u);
    b.push(i.jsx("div", { className: qt(kr, as(u) && "".concat(kr, "--current"), Va(u, t) && "".concat(kr, "--weekend")), children: i.jsx("abbr", { "aria-label": f, title: f, children: r(s, u).replace(".", "") }) }, x));
  }
  return i.jsx(on, { className: Ya, count: 7, onFocus: l, onMouseOver: l, children: b });
}
var Jt = function() {
  return Jt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Jt.apply(this, arguments);
}, Kn = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
}, Jn = "react-calendar__tile";
function Ds(e) {
  var t = e.onClickWeekNumber, a = e.weekNumber, r = i.jsx("span", { children: a });
  if (t) {
    var n = e.date, o = e.onClickWeekNumber, s = e.weekNumber, l = Kn(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return i.jsx("button", Jt({}, l, { className: Jn, onClick: function(c) {
      return o(s, n, c);
    }, type: "button", children: r }));
  } else {
    e.date, e.onClickWeekNumber, e.weekNumber;
    var l = Kn(e, ["date", "onClickWeekNumber", "weekNumber"]);
    return i.jsx("div", Jt({}, l, { className: Jn, children: r }));
  }
}
function Es(e) {
  var t = e.activeStartDate, a = e.calendarType, r = e.onClickWeekNumber, n = e.onMouseLeave, o = e.showFixedNumberOfWeeks, s = function() {
    if (o)
      return 6;
    var d = $a(t), m = wt(t, a), v = d - (7 - m);
    return 1 + Math.ceil(v / 7);
  }(), l = function() {
    for (var d = ge(t), m = $e(t), v = er(t), b = [], x = 0; x < s; x += 1)
      b.push(Nr(new Date(d, m, v + x * 7), a));
    return b;
  }(), c = l.map(function(d) {
    return Kl(d, a);
  });
  return i.jsx(on, { className: "react-calendar__month-view__weekNumbers", count: s, direction: "column", onFocus: n, onMouseOver: n, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 }, children: c.map(function(d, m) {
    var v = l[m];
    if (!v)
      throw new Error("date is not defined");
    return i.jsx(Ds, { date: v, onClickWeekNumber: r, weekNumber: d }, d);
  }) });
}
var Yr = function() {
  return Yr = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Yr.apply(this, arguments);
}, _s = function(e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++)
      t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (a[r[n]] = e[r[n]]);
  return a;
};
function Ps(e) {
  if (e)
    for (var t = 0, a = Object.entries(Pl); t < a.length; t++) {
      var r = a[t], n = r[0], o = r[1];
      if (o.includes(e))
        return n;
    }
  return ye.ISO_8601;
}
function Rs(e) {
  var t = e.activeStartDate, a = e.locale, r = e.onMouseLeave, n = e.showFixedNumberOfWeeks, o = e.calendarType, s = o === void 0 ? Ps(a) : o, l = e.formatShortWeekday, c = e.formatWeekday, d = e.onClickWeekNumber, m = e.showWeekNumbers, v = _s(e, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function b() {
    return i.jsx(Os, { calendarType: s, formatShortWeekday: l, formatWeekday: c, locale: a, onMouseLeave: r });
  }
  function x() {
    return m ? i.jsx(Es, { activeStartDate: t, calendarType: s, onClickWeekNumber: d, onMouseLeave: r, showFixedNumberOfWeeks: n }) : null;
  }
  function u() {
    return i.jsx(Ts, Yr({ calendarType: s }, v));
  }
  var f = "react-calendar__month-view";
  return i.jsx("div", { className: qt(f, m ? "".concat(f, "--weekNumbers") : ""), children: i.jsxs("div", { style: {
    display: "flex",
    alignItems: "flex-end"
  }, children: [x(), i.jsxs("div", { style: {
    flexGrow: 1,
    width: "100%"
  }, children: [b(), u()] })] }) });
}
var rt = function() {
  return rt = Object.assign || function(e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      t = arguments[a];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, rt.apply(this, arguments);
}, Bt = "react-calendar", Yt = ["century", "decade", "year", "month"], Ns = ["decade", "year", "month", "day"], ln = /* @__PURE__ */ new Date();
ln.setFullYear(1, 0, 1);
ln.setHours(0, 0, 0, 0);
var As = /* @__PURE__ */ new Date(864e13);
function bt(e) {
  return e instanceof Date ? e : new Date(e);
}
function Ua(e, t) {
  return Yt.slice(Yt.indexOf(e), Yt.indexOf(t) + 1);
}
function Ms(e, t, a) {
  var r = Ua(t, a);
  return r.indexOf(e) !== -1;
}
function sn(e, t, a) {
  return e && Ms(e, t, a) ? e : a;
}
function Ga(e) {
  var t = Yt.indexOf(e);
  return Ns[t];
}
function Fs(e, t) {
  var a = Array.isArray(e) ? e[t] : e;
  if (!a)
    return null;
  var r = bt(a);
  if (isNaN(r.getTime()))
    throw new Error("Invalid date: ".concat(e));
  return r;
}
function Qa(e, t) {
  var a = e.value, r = e.minDate, n = e.maxDate, o = e.maxDetail, s = Fs(a, t);
  if (!s)
    return null;
  var l = Ga(o), c = function() {
    switch (t) {
      case 0:
        return He(l, s);
      case 1:
        return Wa(l, s);
      default:
        throw new Error("Invalid index value: ".concat(t));
    }
  }();
  return ls(c, r, n);
}
var cn = function(e) {
  return Qa(e, 0);
}, Za = function(e) {
  return Qa(e, 1);
}, $s = function(e) {
  return [cn, Za].map(function(t) {
    return t(e);
  });
};
function Ka(e) {
  var t = e.maxDate, a = e.maxDetail, r = e.minDate, n = e.minDetail, o = e.value, s = e.view, l = sn(s, n, a), c = cn({
    value: o,
    minDate: r,
    maxDate: t,
    maxDetail: a
  }) || /* @__PURE__ */ new Date();
  return He(l, c);
}
function Is(e) {
  var t = e.activeStartDate, a = e.defaultActiveStartDate, r = e.defaultValue, n = e.defaultView, o = e.maxDate, s = e.maxDetail, l = e.minDate, c = e.minDetail, d = e.value, m = e.view, v = sn(m, c, s), b = t || a;
  return b ? He(v, b) : Ka({
    maxDate: o,
    maxDetail: s,
    minDate: l,
    minDetail: c,
    value: d || r,
    view: m || n
  });
}
function Cr(e) {
  return e && (!Array.isArray(e) || e.length === 1);
}
function Vt(e, t) {
  return e instanceof Date && t instanceof Date && e.getTime() === t.getTime();
}
var Ja = Xa(function(t, a) {
  var r = t.activeStartDate, n = t.allowPartialRange, o = t.calendarType, s = t.className, l = t.defaultActiveStartDate, c = t.defaultValue, d = t.defaultView, m = t.formatDay, v = t.formatLongDate, b = t.formatMonth, x = t.formatMonthYear, u = t.formatShortWeekday, f = t.formatWeekday, g = t.formatYear, y = t.goToRangeStartOnSelect, S = y === void 0 ? !0 : y, C = t.inputRef, T = t.locale, k = t.maxDate, N = k === void 0 ? As : k, W = t.maxDetail, Z = W === void 0 ? "month" : W, ne = t.minDate, G = ne === void 0 ? ln : ne, F = t.minDetail, L = F === void 0 ? "century" : F, p = t.navigationAriaLabel, O = t.navigationAriaLive, D = t.navigationLabel, P = t.next2AriaLabel, E = t.next2Label, V = t.nextAriaLabel, oe = t.nextLabel, j = t.onActiveStartDateChange, A = t.onChange, H = t.onClickDay, K = t.onClickDecade, Q = t.onClickMonth, q = t.onClickWeekNumber, J = t.onClickYear, B = t.onDrillDown, X = t.onDrillUp, ee = t.onViewChange, re = t.prev2AriaLabel, he = t.prev2Label, M = t.prevAriaLabel, ve = t.prevLabel, ue = t.returnValue, je = ue === void 0 ? "start" : ue, be = t.selectRange, Le = t.showDoubleView, it = t.showFixedNumberOfWeeks, We = t.showNavigation, or = We === void 0 ? !0 : We, lr = t.showNeighboringCentury, ot = t.showNeighboringDecade, Dt = t.showNeighboringMonth, sr = Dt === void 0 ? !0 : Dt, Et = t.showWeekNumbers, _t = t.tileClassName, ze = t.tileContent, cr = t.tileDisabled, Ge = t.value, lt = t.view, Qe = R(l), ur = Qe[0], Ze = Qe[1], Pt = R(null), dr = Pt[0], Rt = Pt[1], Nt = R(Array.isArray(c) ? c.map(function(z) {
    return z !== null ? bt(z) : null;
  }) : c != null ? bt(c) : null), st = Nt[0], ct = Nt[1], ut = R(d), Ae = ut[0], Ke = ut[1], xe = r || ur || Is({
    activeStartDate: r,
    defaultActiveStartDate: l,
    defaultValue: c,
    defaultView: d,
    maxDate: N,
    maxDetail: Z,
    minDate: G,
    minDetail: L,
    value: Ge,
    view: lt
  }), pe = function() {
    var z = function() {
      return be && Cr(st) ? st : Ge !== void 0 ? Ge : st;
    }();
    return z ? Array.isArray(z) ? z.map(function(Y) {
      return Y !== null ? bt(Y) : null;
    }) : z !== null ? bt(z) : null : null;
  }(), Je = Ga(Z), fe = sn(lt || Ae, L, Z), Se = Ua(L, Z), At = be ? dr : null, Xe = Se.indexOf(fe) < Se.length - 1, Mt = Se.indexOf(fe) > 0, Ft = Ve(function(z) {
    var Y = function() {
      switch (je) {
        case "start":
          return cn;
        case "end":
          return Za;
        case "range":
          return $s;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return Y({
      maxDate: N,
      maxDetail: Z,
      minDate: G,
      value: z
    });
  }, [N, Z, G, je]), qe = Ve(function(z, Y) {
    Ze(z);
    var U = {
      action: Y,
      activeStartDate: z,
      value: pe,
      view: fe
    };
    j && !Vt(xe, z) && j(U);
  }, [xe, j, pe, fe]), et = Ve(function(z, Y) {
    var U = function() {
      switch (fe) {
        case "century":
          return K;
        case "decade":
          return J;
        case "year":
          return Q;
        case "month":
          return H;
        default:
          throw new Error("Invalid view: ".concat(fe, "."));
      }
    }();
    U && U(z, Y);
  }, [H, K, Q, J, fe]), dt = Ve(function(z, Y) {
    if (Xe) {
      et(z, Y);
      var U = Se[Se.indexOf(fe) + 1];
      if (!U)
        throw new Error("Attempted to drill down from the lowest view.");
      Ze(z), Ke(U);
      var de = {
        action: "drillDown",
        activeStartDate: z,
        value: pe,
        view: U
      };
      j && !Vt(xe, z) && j(de), ee && fe !== U && ee(de), B && B(de);
    }
  }, [
    xe,
    Xe,
    j,
    et,
    B,
    ee,
    pe,
    fe,
    Se
  ]), ft = Ve(function() {
    if (Mt) {
      var z = Se[Se.indexOf(fe) - 1];
      if (!z)
        throw new Error("Attempted to drill up from the highest view.");
      var Y = He(z, xe);
      Ze(Y), Ke(z);
      var U = {
        action: "drillUp",
        activeStartDate: Y,
        value: pe,
        view: z
      };
      j && !Vt(xe, Y) && j(U), ee && fe !== z && ee(U), X && X(U);
    }
  }, [
    xe,
    Mt,
    j,
    X,
    ee,
    pe,
    fe,
    Se
  ]), ht = Ve(function(z, Y) {
    var U = pe;
    et(z, Y);
    var de = be && !Cr(U), ae;
    if (be)
      if (de)
        ae = He(Je, z);
      else {
        if (!U)
          throw new Error("previousValue is required");
        if (Array.isArray(U))
          throw new Error("previousValue must not be an array");
        ae = rs(Je, U, z);
      }
    else
      ae = Ft(z);
    var me = (
      // Range selection turned off
      !be || // Range selection turned on, first value
      de || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
      S ? Ka({
        maxDate: N,
        maxDetail: Z,
        minDate: G,
        minDetail: L,
        value: ae,
        view: fe
      }) : null
    );
    Y.persist(), Ze(me), ct(ae);
    var we = {
      action: "onChange",
      activeStartDate: me,
      value: ae,
      view: fe
    };
    if (j && !Vt(xe, me) && j(we), A)
      if (be) {
        var Me = Cr(ae);
        if (!Me)
          A(ae || null, Y);
        else if (n) {
          if (Array.isArray(ae))
            throw new Error("value must not be an array");
          A([ae || null, null], Y);
        }
      } else
        A(ae || null, Y);
  }, [
    xe,
    n,
    Ft,
    S,
    N,
    Z,
    G,
    L,
    j,
    A,
    et,
    be,
    pe,
    Je,
    fe
  ]);
  function h(z) {
    Rt(z);
  }
  function _() {
    Rt(null);
  }
  qa(a, function() {
    return {
      activeStartDate: xe,
      drillDown: dt,
      drillUp: ft,
      onChange: ht,
      setActiveStartDate: qe,
      value: pe,
      view: fe
    };
  }, [xe, dt, ft, ht, qe, pe, fe]);
  function $(z) {
    var Y = z ? La(fe, xe) : He(fe, xe), U = Xe ? dt : ht, de = {
      activeStartDate: Y,
      hover: At,
      locale: T,
      maxDate: N,
      minDate: G,
      onClick: U,
      onMouseOver: be ? h : void 0,
      tileClassName: _t,
      tileContent: ze,
      tileDisabled: cr,
      value: pe,
      valueType: Je
    };
    switch (fe) {
      case "century":
        return i.jsx(ms, rt({ formatYear: g, showNeighboringCentury: lr }, de));
      case "decade":
        return i.jsx(xs, rt({ formatYear: g, showNeighboringDecade: ot }, de));
      case "year":
        return i.jsx(ks, rt({ formatMonth: b, formatMonthYear: x }, de));
      case "month":
        return i.jsx(Rs, rt({ calendarType: o, formatDay: m, formatLongDate: v, formatShortWeekday: u, formatWeekday: f, onClickWeekNumber: q, onMouseLeave: be ? _ : void 0, showFixedNumberOfWeeks: typeof it < "u" ? it : Le, showNeighboringMonth: sr, showWeekNumbers: Et }, de));
      default:
        throw new Error("Invalid view: ".concat(fe, "."));
    }
  }
  function te() {
    return or ? i.jsx(is, { activeStartDate: xe, drillUp: ft, formatMonthYear: x, formatYear: g, locale: T, maxDate: N, minDate: G, navigationAriaLabel: p, navigationAriaLive: O, navigationLabel: D, next2AriaLabel: P, next2Label: E, nextAriaLabel: V, nextLabel: oe, prev2AriaLabel: re, prev2Label: he, prevAriaLabel: M, prevLabel: ve, setActiveStartDate: qe, showDoubleView: Le, view: fe, views: Se }) : null;
  }
  var le = Array.isArray(pe) ? pe : [pe];
  return i.jsxs("div", { className: qt(Bt, be && le.length === 1 && "".concat(Bt, "--selectRange"), Le && "".concat(Bt, "--doubleView"), s), ref: C, children: [te(), i.jsxs("div", { className: "".concat(Bt, "__viewContainer"), onBlur: be ? _ : void 0, onMouseLeave: be ? _ : void 0, children: [$(), Le ? $(!0) : null] })] });
});
const bc = ({ uid: e, locale: t, depencencies: a, formError: r, calendar: n, minViewmode: o, onValidate: s, ...l }) => {
  const [c, d] = R(""), [m, v] = R(), [b, x] = R(!1), [u, f] = R(""), [g, y] = R(), [S, C] = R(!1), [T, k] = R(!1), N = _e(null), W = (F) => {
    let L = F.target.value.replace(/[^\d\/]/gi, ""), [p, O, D] = L.split("/"), P = !!O, E = !!D;
    p.length >= 2 && (O === void 0 || O.length < 2) && (p = p.substring(0, 2), O = P ? O : p.substring(2, 4), P = !0), O && O.length >= 2 && (D === void 0 || D.length < 4) && (O = O.substring(0, 2), D = E ? D : O.substring(2, 6), E = !0);
    let V = p.substring(0, 2) + (P ? "/" : "") + (O ? O.substring(0, 2) : "") + (E ? "/" : "") + (D ? D.substring(0, 4) : "");
    V = V.substring(0, 10), f(V), l.onChange && (F.target.value = V, l.onChange(F));
  }, Z = (F) => {
    var L;
    (L = document.querySelector("body")) == null || L.click(), l.onFocus && l.onFocus(F), x(!0);
  }, ne = (F) => {
    let [L, p, O] = (u ?? "").split("/").map((D) => parseInt(D));
    if (!L || !p || !O)
      f("");
    else {
      let D = /* @__PURE__ */ new Date();
      D.setUTCFullYear(O), D.setUTCMonth(p - 1), D.setUTCDate(L), D.getUTCFullYear() === O && D.getUTCMonth() === p - 1 && D.getUTCDate() === L ? l.onChange && (F.target.value = u ?? "", l.onChange(F)) : f("");
    }
    if (l.onBlur && l.onBlur(F), s) {
      let D = s(F.target.value) ?? "";
      d(D !== !0 ? String(D) : "");
    } else
      d("");
    x(!1);
  }, G = () => {
    setTimeout(() => {
      C(!0);
    }, 1);
  };
  return I(() => {
    if (a && a.length && s) {
      let F = s(String(l.value ?? "")) ?? "";
      d(F !== !0 ? String(F) : "");
    }
  }, a), I(() => {
    y(u ? Hi(u) : void 0);
  }, [u]), I(() => {
    l.value !== null && f(String(l.value));
  }, [l.value]), I(() => {
    m && typeof m.message == "string" ? d(m.message) : d((m == null ? void 0 : m.message[0]) ?? "");
  }, [m]), I(() => {
    v(r);
  }, [r]), I(() => {
    setTimeout(() => {
      if (N.current) {
        let F = !$i(N.current);
        k(F && S);
      }
    }, 1);
  }, [S]), I(() => {
    var L;
    let F = () => {
      C(!1);
    };
    return (L = document.querySelector("body")) == null || L.addEventListener("click", F), () => {
      var p;
      (p = document.querySelector("body")) == null || p.removeEventListener("click", F);
    };
  }, []), /* @__PURE__ */ i.jsxs(Te, { className: l.className ?? "", style: l.style ?? {}, children: [
    /* @__PURE__ */ i.jsxs(Pe, { width: l.width, children: [
      /* @__PURE__ */ i.jsx(
        ya,
        {
          type: "text",
          id: e,
          value: u,
          onChange: W,
          onFocus: (F) => Z(F),
          onBlur: (F) => ne(F),
          onClick: () => G()
        }
      ),
      /* @__PURE__ */ i.jsx(ke, { htmlFor: e, className: "hasIcon", children: b ? "" : c }),
      c ? /* @__PURE__ */ i.jsx(Ce, { title: c, className: b ? "hasIcon big" : "hasIcon" }) : null
    ] }),
    /* @__PURE__ */ i.jsx(kt, { children: /* @__PURE__ */ i.jsx(ie, { size: 1, path: oa }) }),
    /* @__PURE__ */ i.jsx(pa, { className: (S && n !== !1 ? "show" : "") + (T ? "top" : ""), ref: N, onClick: (F) => {
      F.stopPropagation();
    }, children: /* @__PURE__ */ i.jsx(
      Ja,
      {
        minDetail: o ?? "decade",
        locale: t,
        next2Label: null,
        prev2Label: null,
        value: g,
        nextLabel: /* @__PURE__ */ i.jsx(ie, { path: Xt, size: 1 }),
        prevLabel: /* @__PURE__ */ i.jsx(ie, { path: Zr, size: 1 }),
        onChange: (F) => {
          if (!F || Array.isArray(F))
            return;
          if (s) {
            let p = s(Er(F)) ?? "";
            d(p !== !0 ? String(p) : "");
          } else
            d("");
          const L = Er(F);
          if (C(!1), f(L), l.onChange) {
            let p = { target: { value: "" } };
            p.target.value = L ?? "", l.onChange(p);
          }
        }
      }
    ) })
  ] });
}, pc = ({ formError: e, ...t }) => {
  const [a, r] = R(""), [n, o] = R(), [s, l] = R(""), [c, d] = R(!1), m = (x) => {
    let u = x.target.value.replace(/\D/gi, ""), f = u;
    if (u.length >= 3 && (f = `${u.substring(0, 2)}/${u.substring(2)}`), u.length >= 6 && (f = `${u.substring(0, 2)}/${u.substring(2, 6)}`), l(f), t.onChange && u.length === 6) {
      let [g, y] = f.split("/").map((C) => parseInt(C, 10)), S = new Date(y, g - 1, 1, 0, 0, 0, 0);
      S && !isNaN(S.getTime()) && t.onChange(S);
    }
  }, v = (x) => {
    var u;
    (u = document.querySelector("body")) == null || u.click(), t.onFocus && t.onFocus(x), d(!0);
  }, b = (x) => {
    x.target.value.replace(/[^\d]/gi, "").length !== 6 ? (l(""), t.onChange && t.onChange(void 0)) : t.onBlur && t.onBlur(x), d(!1);
  };
  return I(() => {
    t.value && l(Vi(t.value));
  }, [t.value]), I(() => {
    n && typeof n.message == "string" ? r(n.message) : r((n == null ? void 0 : n.message[0]) ?? "");
  }, [n]), I(() => {
    o(e);
  }, [e]), /* @__PURE__ */ i.jsx(Te, { className: t.className ?? "", style: t.style ?? {}, children: /* @__PURE__ */ i.jsxs(Pe, { width: t.width, children: [
    /* @__PURE__ */ i.jsx(
      xa,
      {
        type: "text",
        id: t.uid,
        value: s,
        onChange: (x) => m(x),
        onFocus: (x) => v(x),
        onBlur: (x) => b(x)
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: t.uid, children: c ? "" : a }),
    a ? /* @__PURE__ */ i.jsx(Ce, { title: a, className: c ? "big" : "" }) : null
  ] }) });
}, Be = ({ onValidate: e, depencencies: t, formError: a, reference: r, onKeyDown: n, ...o }) => {
  const [s, l] = R(""), [c, d] = R(), [m, v] = R(!1), b = (g) => {
    o.onChange && o.onChange(g);
  }, x = (g) => {
    var y;
    (y = document.querySelector("body")) == null || y.click(), o.onFocus && o.onFocus(g), v(!0);
  }, u = (g) => {
    if (o.onBlur && o.onBlur(g), e) {
      let y = e(g.target.value) ?? "";
      l(y !== !0 ? String(y) : "");
    } else
      l("");
    v(!1);
  }, f = (g) => {
    n && n(g);
  };
  return I(() => {
    if (t && t.length && e) {
      let g = e(String(o.value ?? "")) ?? "";
      l(g !== !0 ? String(g) : "");
    }
  }, t), I(() => {
    c && typeof c.message == "string" ? l(c.message) : l((c == null ? void 0 : c.message[0]) ?? "");
  }, [c]), I(() => {
    d(a);
  }, [a]), /* @__PURE__ */ i.jsxs(Te, { className: o.className ?? "", style: o.style ?? {}, children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        id: o.uid,
        type: o.type,
        value: o.value,
        placeholder: o.placeholder ?? "",
        ref: r,
        onChange: b,
        onFocus: (g) => x(g),
        onBlur: (g) => u(g),
        onKeyDown: (g) => f(g)
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: o.uid, children: m ? "" : s }),
    s ? /* @__PURE__ */ i.jsx(Ce, { title: s, className: m ? "big" : "" }) : null
  ] });
}, Ls = ({ onValidate: e, formError: t, readOnly: a, width: r, ...n }) => {
  const [o, s] = R(), [l, c] = R(""), [d, m] = R(!1), v = (u) => {
    if (n.onChange && n.onChange(u), e) {
      let f = e(u.target.value) ?? "";
      c(f !== !0 ? String(f) : "");
    } else
      c("");
  }, b = (u) => {
    var f;
    (f = document.querySelector("body")) == null || f.click(), n.onFocus && n.onFocus(u), m(!0);
  }, x = (u) => {
    if (n.onBlur && n.onBlur(u), e) {
      let f = e(u.target.value) ?? "";
      c(f !== !0 ? String(f) : "");
    } else
      c("");
    m(!1);
  };
  return I(() => {
    o && typeof o.message == "string" ? c(o.message) : c((o == null ? void 0 : o.message[0]) ?? "");
  }, [o]), I(() => {
    s(t);
  }, [t]), /* @__PURE__ */ i.jsxs(Te, { className: n.className ?? "", width: r, children: [
    a ? /* @__PURE__ */ i.jsx(Eo, { children: ea.map(n.children, (u) => ei(u) && u.props.value === n.value ? ta(u, {}) : null) }) : /* @__PURE__ */ i.jsx(
      Do,
      {
        id: n.uid,
        value: n.value,
        width: r,
        onChange: v,
        onFocus: (u) => b(u),
        onBlur: (u) => x(u),
        children: n.children
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: n.uid, className: "hasDrop", children: d ? "" : l }),
    l ? /* @__PURE__ */ i.jsx(Ce, { title: l, className: "hasDrop" + (d ? " big" : "") }) : null
  ] });
}, wc = ({ labelNew: e, labelText: t, labelCheck: a, labelRadio: r, labelRating: n, labelTemplate: o, labelTitle: s, labelTextArea: l, labelAnswer: c, labelNoData: d, value: m, onChange: v, templates: b, onTemplateSelect: x }) => {
  const [u, f] = R([]), [g, y] = R(""), S = (p) => {
    if (p !== "TEXT")
      return p === "RATING" ? Array(5).fill({ id: 1, label: "" }).map((O, D) => ({ id: D + 1, label: "" })) : [{
        id: Date.now(),
        label: ""
      }];
  }, C = (p) => {
    const O = Date.now();
    let D = [...u, {
      type: p,
      title: "",
      order: u.length + 1,
      id: O,
      options: S(p)
    }];
    v(D), f(D);
  }, T = (p, O) => {
    let D = u.map((P) => P.id === O ? {
      ...P,
      title: p
    } : P);
    v(D), f(D);
  }, k = (p) => {
    let O = u.find((D) => D.id === p);
    return (O == null ? void 0 : O.title) ?? "";
  }, N = (p, O, D) => {
    var V, oe;
    let P = u.find((j) => j.id === O), E = (V = P == null ? void 0 : P.options) == null ? void 0 : V.find((j) => j.id === D);
    if ((oe = P == null ? void 0 : P.options) != null && oe.every((j) => j.id === D ? !0 : j.label.length > 0) && (E == null ? void 0 : E.label.length) === 0 && p.length !== 0)
      Z(O, D, p);
    else {
      let j = u.map((A) => A.id === O ? {
        ...A,
        options: (A.options ?? []).map((H) => H.id === D ? {
          id: H.id,
          label: p
        } : H)
      } : A);
      v(j), f(j);
    }
  }, W = (p, O) => {
    var E;
    let D = u.find((V) => V.id === p), P = (E = D == null ? void 0 : D.options) == null ? void 0 : E.find((V) => V.id === O);
    return (P == null ? void 0 : P.label) ?? "";
  }, Z = (p, O, D) => {
    let P = { id: Date.now(), label: "" }, E = u.map((V) => V.id === p ? {
      ...V,
      options: V.options ? [...V.options.map((oe) => oe.id === O ? {
        id: oe.id,
        label: D
      } : oe), P] : [P]
    } : V);
    v(E), f(E);
  }, ne = (p) => {
    let O = u.filter((D) => D.id !== p).map((D, P) => ({ ...D, order: P + 1 }));
    v(O), f(O);
  }, G = (p) => {
    var P;
    let O = ((P = u.find((E) => E.id === p)) == null ? void 0 : P.order) ?? 0;
    if (!O || O <= 1)
      return;
    let D = u.map((E) => E.order === O - 1 ? { ...E, order: O } : E.order === O ? { ...E, order: O - 1 } : E).sort((E, V) => E.order - V.order);
    v(D), f(D);
  }, F = (p) => {
    var P;
    let O = ((P = u.find((E) => E.id === p)) == null ? void 0 : P.order) ?? Number.POSITIVE_INFINITY;
    if (!O || O >= u.length)
      return;
    let D = u.map((E) => E.order === O + 1 ? { ...E, order: O } : E.order === O ? { ...E, order: O + 1 } : E).sort((E, V) => E.order - V.order);
    v(D), f(D);
  }, L = (p) => {
    const O = p.target.value;
    y(O), x && x(O);
  };
  return I(() => {
    f(m);
  }, [m]), /* @__PURE__ */ i.jsxs(Kr, { children: [
    /* @__PURE__ */ i.jsxs(Mi, { rowJustify: "space-between", columnAlign: "stretch", columnJustify: "flex-start", style: { marginBottom: "1rem" }, children: [
      /* @__PURE__ */ i.jsxs(Gt, { align: "flex-start", children: [
        /* @__PURE__ */ i.jsx("div", { children: e }),
        /* @__PURE__ */ i.jsxs(Ho, { justify: "flex-start", children: [
          /* @__PURE__ */ i.jsxs(Wt, { onClick: () => C("TEXT"), children: [
            /* @__PURE__ */ i.jsx(ie, { path: bi, size: 1 }),
            /* @__PURE__ */ i.jsx("span", { children: t })
          ] }),
          /* @__PURE__ */ i.jsxs(Wt, { onClick: () => C("CHECK"), children: [
            /* @__PURE__ */ i.jsx(ie, { path: vi, size: 1 }),
            /* @__PURE__ */ i.jsx("span", { children: a == null ? void 0 : a.split(" ").map((p, O) => /* @__PURE__ */ i.jsx("span", { children: p }, O)) })
          ] }),
          /* @__PURE__ */ i.jsxs(Wt, { onClick: () => C("RADIO"), children: [
            /* @__PURE__ */ i.jsx(ie, { path: gi, size: 1 }),
            r == null ? void 0 : r.split(" ").map((p, O) => /* @__PURE__ */ i.jsx("span", { children: p }, O))
          ] }),
          /* @__PURE__ */ i.jsxs(Wt, { onClick: () => C("RATING"), children: [
            /* @__PURE__ */ i.jsx(ie, { path: ji, size: 1 }),
            /* @__PURE__ */ i.jsx("span", { children: n })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(i.Fragment, { children: b && b.length ? /* @__PURE__ */ i.jsxs(Yo, { align: "flex-start", children: [
        /* @__PURE__ */ i.jsx("div", { children: o }),
        /* @__PURE__ */ i.jsx(De, { style: { width: "100%" }, children: /* @__PURE__ */ i.jsxs(Ls, { uid: "formbuilder.template", value: g, onChange: L, width: "2.5rem", children: [
          /* @__PURE__ */ i.jsx("option", { value: "" }),
          b.map((p) => /* @__PURE__ */ i.jsx("option", { value: p.id, children: p.label }, p.id))
        ] }) })
      ] }) : null })
    ] }),
    u && u.length > 0 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: u.map((p) => {
      var O;
      return /* @__PURE__ */ i.jsxs(Uo, { children: [
        /* @__PURE__ */ i.jsxs(Go, { children: [
          /* @__PURE__ */ i.jsx(Zo, { children: p.order }),
          /* @__PURE__ */ i.jsx(xr, { className: p.order === 1 ? "disabled" : "", onClick: () => G(p.id), children: /* @__PURE__ */ i.jsx(ie, { path: hi, size: 1 }) }),
          /* @__PURE__ */ i.jsx(xr, { className: p.order === u.length ? "disabled" : "", onClick: () => F(p.id), children: /* @__PURE__ */ i.jsx(ie, { path: fi, size: 1 }) }),
          /* @__PURE__ */ i.jsx(xr, { onClick: () => ne(p.id), children: /* @__PURE__ */ i.jsx(ie, { path: ca, size: 1 }) })
        ] }),
        /* @__PURE__ */ i.jsxs(Jr, { children: [
          /* @__PURE__ */ i.jsx(De, { align: "flex-start", justify: "stretch", children: /* @__PURE__ */ i.jsx(
            Be,
            {
              uid: "question." + p.id,
              value: k(p.id),
              placeholder: s,
              onChange: (D) => T(D.target.value, p.id)
            }
          ) }),
          p.type === "TEXT" ? /* @__PURE__ */ i.jsx(Ko, { children: l }) : null,
          p.type === "CHECK" || p.type === "RADIO" ? (O = p.options) == null ? void 0 : O.map((D) => /* @__PURE__ */ i.jsxs(De, { children: [
            /* @__PURE__ */ i.jsx(Jo, { className: p.type.toLocaleLowerCase() }),
            /* @__PURE__ */ i.jsx(
              Be,
              {
                uid: "question." + p.id + ".option." + D.id,
                value: W(p.id, D.id),
                placeholder: c,
                style: { flex: 1, marginBottom: 0 },
                onChange: (P) => N(P.target.value, p.id, D.id)
              }
            )
          ] }, D.id)) : null,
          p.type === "RATING" ? /* @__PURE__ */ i.jsxs(Gt, { children: [
            /* @__PURE__ */ i.jsxs(De, { justify: "space-between", children: [
              /* @__PURE__ */ i.jsx(Be, { style: { flex: "none", width: "25%" }, uid: "question." + p.id + ".option.1", value: W(p.id, 1), onChange: (D) => N(D.target.value, p.id, 1) }),
              /* @__PURE__ */ i.jsx(Be, { style: { flex: "none", width: "25%" }, uid: "question." + p.id + ".option.3", value: W(p.id, 3), onChange: (D) => N(D.target.value, p.id, 3) }),
              /* @__PURE__ */ i.jsx(Be, { style: { flex: "none", width: "25%" }, uid: "question." + p.id + ".option.5", value: W(p.id, 5), onChange: (D) => N(D.target.value, p.id, 5) })
            ] }),
            /* @__PURE__ */ i.jsxs(wa, { children: [
              /* @__PURE__ */ i.jsx(ja, {}),
              /* @__PURE__ */ i.jsx(Ee, {}),
              /* @__PURE__ */ i.jsx(Ee, {}),
              /* @__PURE__ */ i.jsx(Ee, {}),
              /* @__PURE__ */ i.jsx(Ee, {}),
              /* @__PURE__ */ i.jsx(Ee, {})
            ] }),
            /* @__PURE__ */ i.jsxs(De, { justify: "space-between", children: [
              /* @__PURE__ */ i.jsx(Be, { style: { flex: "none", width: "25%", marginTop: "0.5rem", marginLeft: "18.75%" }, uid: "question." + p.id + ".option.2", value: W(p.id, 2), onChange: (D) => N(D.target.value, p.id, 2) }),
              /* @__PURE__ */ i.jsx(Be, { style: { flex: "none", width: "25%", marginTop: "0.5rem", marginRight: "18.75%" }, uid: "question." + p.id + ".option.4", value: W(p.id, 4), onChange: (D) => N(D.target.value, p.id, 4) })
            ] })
          ] }) : null
        ] })
      ] }, p.id);
    }) }) : /* @__PURE__ */ i.jsx(Qo, { children: d == null ? void 0 : d.split(`
`).map((p, O) => /* @__PURE__ */ i.jsx("div", { children: p }, O)) })
  ] });
}, Ws = ({ ...e }) => {
  const [t, a] = R(!1), r = () => {
    a(!0), e.onCheck && e.onCheck(!0);
  };
  return I(() => {
    a(!!e.checked);
  }, [e.checked]), /* @__PURE__ */ i.jsxs(
    So,
    {
      onClick: () => r(),
      className: (e.isVertical === !0 ? "column " : "row ") + (e.className ?? ""),
      style: e.style,
      children: [
        /* @__PURE__ */ i.jsx(ka, { style: { cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }, children: e.label ?? e.labelContent }),
        /* @__PURE__ */ i.jsx(No, { className: t ? "checked" : "" })
      ]
    }
  );
}, zs = ({ onValidate: e, depencencies: t, formError: a, ...r }) => {
  const [n, o] = R(""), [s, l] = R(), [c, d] = R(!1), m = (x) => {
    r.onChange && r.onChange(x);
  }, v = (x) => {
    var u;
    (u = document.querySelector("body")) == null || u.click(), r.onFocus && r.onFocus(x), d(!0);
  }, b = (x) => {
    if (r.onBlur && r.onBlur(x), e) {
      let u = e(x.target.value) ?? "";
      o(u !== !0 ? String(u) : "");
    } else
      o("");
    d(!1);
  };
  return I(() => {
    if (t && t.length && e) {
      let x = e(String(r.value ?? "")) ?? "";
      o(x !== !0 ? String(x) : "");
    }
  }, t), I(() => {
    s && typeof s.message == "string" ? o(s.message) : o((s == null ? void 0 : s.message[0]) ?? "");
  }, [s]), I(() => {
    l(a);
  }, [a]), /* @__PURE__ */ i.jsxs(ko, { className: r.className ?? "", style: r.style ?? {}, children: [
    /* @__PURE__ */ i.jsx(
      Oo,
      {
        id: r.uid,
        value: r.value,
        onChange: m,
        onFocus: (x) => v(x),
        onBlur: (x) => b(x),
        placeholder: r.placeholder ?? ""
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: r.uid, children: c ? "" : n }),
    n ? /* @__PURE__ */ i.jsx(Ce, { title: n, className: c ? "big" : "" }) : null
  ] });
}, jc = ({ onChange: e, form: t }) => {
  const [a, r] = R([]), [n, o] = R({});
  I(() => {
    r(t);
  }, [t]);
  const s = (c, d) => {
    const m = (v, b, x) => {
      if (!b[0])
        return x;
      let u = b[0];
      return v[u] !== void 0 ? { ...v, [u]: m(v[u], b.slice(1), x) } : { ...v, [u]: m({}, b.slice(1), x) };
    };
    o((v) => {
      let b = m(v, c, d);
      return e && e(b), b;
    });
  }, l = (c) => {
    const d = (m, v) => {
      if (v && v.length === 1)
        return m[v[0]];
      let b = v[0];
      if (m[b] !== void 0)
        return d(m[b], v.slice(1));
    };
    return d(n, c);
  };
  return /* @__PURE__ */ i.jsx(Kr, { children: a.map((c) => {
    var d, m;
    return /* @__PURE__ */ i.jsxs(Jr, { children: [
      /* @__PURE__ */ i.jsx(qo, { children: c.title }),
      c.type === "TEXT" ? /* @__PURE__ */ i.jsx(
        zs,
        {
          uid: "question." + c.id,
          style: { height: "100px", minHeight: "100px" },
          value: l([String(c.id)]),
          onChange: (v) => s([String(c.id)], v.target.value)
        }
      ) : null,
      c.type === "CHECK" ? (d = c.options) == null ? void 0 : d.filter((v) => v.label.length > 0).map((v) => /* @__PURE__ */ i.jsx(
        nl,
        {
          uid: `question.${c.id}.option.${v.id}`,
          label: v.label,
          className: "compact",
          checked: l([String(c.id), String(v.id)]),
          onCheck: (b) => s([String(c.id), String(v.id)], b)
        },
        v.id
      )) : null,
      c.type === "RADIO" ? (m = c.options) == null ? void 0 : m.filter((v) => v.label.length > 0).map((v) => /* @__PURE__ */ i.jsx(
        Ws,
        {
          uid: `question.${c.id}.option.${v.id}`,
          label: v.label,
          className: "compact",
          checked: l([String(c.id)]) === String(v.id),
          onCheck: () => s([String(c.id)], String(v.id))
        },
        v.id
      )) : null,
      c.type === "RATING" ? /* @__PURE__ */ i.jsxs(Gt, { children: [
        /* @__PURE__ */ i.jsxs(De, { children: [
          /* @__PURE__ */ i.jsx(yt, { style: { marginRight: "12.5%" }, children: c.options ? c.options[0].label : "" }),
          /* @__PURE__ */ i.jsx(yt, { style: { marginRight: "0" }, children: c.options ? c.options[2].label : "" }),
          /* @__PURE__ */ i.jsx(yt, { style: { marginRight: "0", marginLeft: "12.5%" }, children: c.options ? c.options[4].label : "" })
        ] }),
        /* @__PURE__ */ i.jsxs(wa, { children: [
          /* @__PURE__ */ i.jsx(ja, {}),
          /* @__PURE__ */ i.jsx(Ee, { className: l([String(c.id)]) === "1" ? "checked" : "", onClick: () => s([String(c.id)], "1") }),
          /* @__PURE__ */ i.jsx(Ee, { className: l([String(c.id)]) === "2" ? "checked" : "", onClick: () => s([String(c.id)], "2") }),
          /* @__PURE__ */ i.jsx(Ee, { className: l([String(c.id)]) === "3" ? "checked" : "", onClick: () => s([String(c.id)], "3") }),
          /* @__PURE__ */ i.jsx(Ee, { className: l([String(c.id)]) === "4" ? "checked" : "", onClick: () => s([String(c.id)], "4") }),
          /* @__PURE__ */ i.jsx(Ee, { className: l([String(c.id)]) === "5" ? "checked" : "", onClick: () => s([String(c.id)], "5") })
        ] }),
        /* @__PURE__ */ i.jsxs(De, { children: [
          /* @__PURE__ */ i.jsx(yt, { style: { marginRight: "0", marginLeft: "18.75%" }, children: c.options ? c.options[1].label : "" }),
          /* @__PURE__ */ i.jsx(yt, { style: { marginRight: "0", marginLeft: "12.5%" }, children: c.options ? c.options[3].label : "" })
        ] })
      ] }) : null
    ] }, c.id);
  }) });
}, kc = ({ value: e, form: t }) => {
  const a = (r) => {
    const n = (o, s) => {
      if (s && s.length === 1)
        return o[s[0]];
      let l = s[0];
      if (o[l] !== void 0)
        return n(o[l], s.slice(1));
    };
    return n(e, r);
  };
  return /* @__PURE__ */ i.jsx(Kr, { children: t.map((r) => {
    var n, o, s, l, c;
    return /* @__PURE__ */ i.jsxs(Jr, { children: [
      /* @__PURE__ */ i.jsx(el, { children: r.title }),
      /* @__PURE__ */ i.jsxs(tl, { children: [
        r.type === "TEXT" ? a([String(r.id)]).replace(/[\r\n]{1,}/g, `
`).split(`
`).map((d, m) => /* @__PURE__ */ i.jsx("p", { children: d }, m)) : null,
        r.type === "CHECK" ? (n = r.options) == null ? void 0 : n.filter((d) => a([String(r.id), String(d.id)])).map((d) => d.label).join(", ") : null,
        r.type === "RADIO" ? (s = (o = r.options) == null ? void 0 : o.find((d) => a([String(r.id)]) === String(d.id))) == null ? void 0 : s.label : null,
        r.type === "RATING" ? (c = (l = r.options) == null ? void 0 : l.find((d) => a([String(r.id)]) === String(d.id))) == null ? void 0 : c.label : null
      ] })
    ] }, r.id);
  }) });
}, Cc = ({ onValidate: e, formError: t, min: a, max: r, ...n }) => {
  const [o, s] = R(""), [l, c] = R(), [d, m] = R(!1), [v, b] = R(""), x = (g) => {
    let y = g.target.value.replace(/[^\d]/gi, "");
    y = y.substring(0, r ?? 1e3), b(y), n.onChange && (g.target.value = y, n.onChange(g));
  }, u = (g) => {
    var y;
    (y = document.querySelector("body")) == null || y.click(), n.onFocus && n.onFocus(g), m(!0);
  }, f = (g) => {
    let y = v.replace(/[^\d]/gi, "");
    if (y.length < (a ?? 0) || y.length > (r ?? 1e3) ? b("") : (g.target.value = v ?? "", n.onChange && n.onChange(g)), n.onBlur && n.onBlur(g), e) {
      let S = e(g.target.value) ?? "";
      s(S !== !0 ? String(S) : "");
    } else
      s("");
    m(!1);
  };
  return I(() => {
    n.value !== null && b(String(n.value));
  }, [n.value]), I(() => {
    l && typeof l.message == "string" ? s(l.message) : s((l == null ? void 0 : l.message[0]) ?? "");
  }, [l]), I(() => {
    c(t);
  }, [t]), /* @__PURE__ */ i.jsx(Te, { className: n.className ?? "", style: n.style ?? {}, children: /* @__PURE__ */ i.jsxs(Pe, { width: n.width, children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        type: "text",
        id: n.uid,
        value: v,
        onChange: x,
        onFocus: (g) => u(g),
        onBlur: (g) => f(g)
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: n.uid, children: d ? "" : o }),
    o ? /* @__PURE__ */ i.jsx(Ce, { title: o, className: d ? "big" : "" }) : null
  ] }) });
}, Xn = (e, t, a) => (typeof e == "string" && (e = parseFloat(e)), new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
}).format(e)), Sc = ({ onValidate: e, depencencies: t, formError: a, ...r }) => {
  const [n, o] = R(""), [s, l] = R(), [c, d] = R(!1), [m, v] = R(""), b = (f) => {
    let g = parseFloat(f.target.value.replace(/[^\d]/gi, "")) / 100, y = Xn(g);
    console.log(g, y), v(y), r.onChange && r.onChange(g);
  }, x = (f) => {
    var g;
    (g = document.querySelector("body")) == null || g.click(), r.onFocus && r.onFocus(f), d(!0);
  }, u = (f) => {
    if (r.onBlur && r.onBlur(f), e) {
      let g = e(f.target.value) ?? "";
      o(g !== !0 ? String(g) : "");
    } else
      o("");
    d(!1);
  };
  return I(() => {
    if (t && t.length && e) {
      let f = e(String(r.value ?? "")) ?? "";
      o(f !== !0 ? String(f) : "");
    }
  }, t), I(() => {
    r.value !== null && v(Xn(r.value ?? 0));
  }, [r.value]), I(() => {
    s && typeof s.message == "string" ? o(s.message) : o((s == null ? void 0 : s.message[0]) ?? "");
  }, [s]), I(() => {
    l(a);
  }, [a]), /* @__PURE__ */ i.jsx(Te, { className: r.className ?? "", children: /* @__PURE__ */ i.jsxs(Pe, { width: r.width, children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        id: r.uid,
        value: m,
        onChange: b,
        onFocus: (f) => x(f),
        onBlur: (f) => u(f)
      }
    ),
    /* @__PURE__ */ i.jsx(ke, { htmlFor: r.uid, children: c ? "" : n }),
    n ? /* @__PURE__ */ i.jsx(Ce, { title: n, className: c ? "big" : "" }) : null
  ] }) });
}, Tc = ({ onValidate: e, depencencies: t, formError: a, locale: r, calendar: n, ...o }) => {
  const [s, l] = R(""), [c, d] = R(), [m, v] = R(!1), [b, x] = R(""), [u, f] = R(), [g, y] = R(!1), S = (T) => {
    var k;
    (k = document.querySelector("body")) == null || k.click(), setTimeout(() => {
      y(!0);
    }, 1), o.onFocus && o.onFocus(T), v(!0);
  }, C = (T) => {
    if (o.onBlur && o.onBlur(T), e) {
      let k = e(T.target.value) ?? "";
      l(k !== !0 ? String(k) : "");
    } else
      l("");
    v(!1);
  };
  return I(() => {
    if (t && t.length && e) {
      let T = e(String(o.value ?? "")) ?? "";
      l(T !== !0 ? String(T) : "");
    }
  }, t), I(() => {
    o.value && (x(On(o.value)), f(o.value));
  }, [o.value]), I(() => {
    c && typeof c.message == "string" ? l(c.message) : l((c == null ? void 0 : c.message[0]) ?? "");
  }, [c]), I(() => {
    d(a);
  }, [a]), I(() => {
    var k;
    let T = () => {
      y(!1);
    };
    return (k = document.querySelector("body")) == null || k.addEventListener("click", T), () => {
      var N;
      (N = document.querySelector("body")) == null || N.removeEventListener("click", T);
    };
  }, []), /* @__PURE__ */ i.jsxs(Te, { className: o.className ?? "", style: o.style ?? {}, children: [
    /* @__PURE__ */ i.jsxs(Pe, { width: o.width, children: [
      /* @__PURE__ */ i.jsx(
        xa,
        {
          type: "text",
          id: o.uid,
          value: b,
          readOnly: !0,
          onFocus: (T) => S(T),
          onBlur: (T) => C(T),
          onClick: (T) => T.stopPropagation()
        }
      ),
      /* @__PURE__ */ i.jsx(ke, { htmlFor: o.uid, className: "hasIcon", children: m ? "" : s }),
      s ? /* @__PURE__ */ i.jsx(Ce, { title: s, className: m ? "hasIcon big" : "hasIcon" }) : null
    ] }),
    /* @__PURE__ */ i.jsx(kt, { children: /* @__PURE__ */ i.jsx(ie, { size: 1, path: oa }) }),
    /* @__PURE__ */ i.jsx(pa, { className: g && n !== !1 ? "show" : "", onClick: (T) => {
      T.stopPropagation();
    }, children: /* @__PURE__ */ i.jsx(
      Ja,
      {
        minDetail: "decade",
        maxDetail: "year",
        defaultView: "year",
        locale: r,
        next2Label: null,
        prev2Label: null,
        value: u,
        nextLabel: /* @__PURE__ */ i.jsx(ie, { path: Xt, size: 1 }),
        prevLabel: /* @__PURE__ */ i.jsx(ie, { path: Zr, size: 1 }),
        tileClassName: ({ date: T }) => `monthcalendar-${T.getUTCMonth()}-${o.uid.replace(/\./gi, "-")}`,
        onChange: (T) => {
          if (T === null || Array.isArray(T))
            return;
          T.setDate(1);
          const k = Er(T), N = On(T);
          if (e) {
            let Z = e(k) ?? "";
            l(Z !== !0 ? String(Z) : "");
          } else
            l("");
          y(!1), x(N);
          let W = document.querySelector(`.monthcalendar-11-${o.uid.replace(/\./gi, "-")}`);
          W && W.focus(), o.onChange && o.onChange(T);
        }
      }
    ) })
  ] });
}, Oc = ({ onValidate: e, depencencies: t, formError: a, ...r }) => {
  const [n, o] = R(""), [s, l] = R(), [c, d] = R(!1), [m, v] = R(""), b = (f) => {
    let g = f.target.value.replace(/[^\d\/]/gi, ""), y = "(" + g;
    g.length >= 2 && (y = `(${g.substring(0, 2)}) ${g.substring(2)}`), g.length >= 6 && (y = `(${g.substring(0, 2)}) ${g.substring(2, 6)}-${g.substring(6)}`), g.length >= 11 && (y = `(${g.substring(0, 2)}) ${g.substring(2, 7)}-${g.substring(7)}`), g.length >= 12 && (g = g.substring(0, 14), y = `+${g.substring(0, g.length - 11)} (${g.substring(g.length - 11, g.length - 9)}) ${g.substring(g.length - 9, g.length - 4)}-${g.substring(g.length - 4, g.length)}`), v(y), r.onChange && (f.target.value = y, r.onChange(f));
  }, x = (f) => {
    var g;
    (g = document.querySelector("body")) == null || g.click(), r.onFocus && r.onFocus(f), d(!0);
  }, u = (f) => {
    let g = m.replace(/[^\d]/gi, "");
    if (g.length < 10 || g.length > 14 ? v("") : (f.target.value = m ?? "", r.onChange && r.onChange(f)), r.onBlur && r.onBlur(f), e) {
      let y = e(f.target.value) ?? "";
      o(y !== !0 ? String(y) : "");
    } else
      o("");
    d(!1);
  };
  return I(() => {
    if (t && t.length && e) {
      let f = e(String(r.value ?? "")) ?? "";
      o(f !== !0 ? String(f) : "");
    }
  }, t), I(() => {
    r.value !== null && v(String(r.value));
  }, [r.value]), I(() => {
    s && typeof s.message == "string" ? o(s.message) : o((s == null ? void 0 : s.message[0]) ?? "");
  }, [s]), I(() => {
    l(a);
  }, [a]), /* @__PURE__ */ i.jsxs(Te, { className: r.className ?? "", style: r.style ?? {}, children: [
    /* @__PURE__ */ i.jsxs(Pe, { width: r.width, children: [
      /* @__PURE__ */ i.jsx(
        ya,
        {
          type: "text",
          id: r.uid,
          value: m,
          onChange: b,
          onFocus: (f) => x(f),
          onBlur: (f) => u(f)
        }
      ),
      /* @__PURE__ */ i.jsx(ke, { htmlFor: r.uid, className: "hasIcon", children: c ? "" : n }),
      n ? /* @__PURE__ */ i.jsx(Ce, { title: n, className: c ? "hasIcon big" : "hasIcon" }) : null
    ] }),
    /* @__PURE__ */ i.jsx(kt, { children: /* @__PURE__ */ i.jsx(ie, { size: 1, path: wi }) })
  ] });
}, Dc = ({ labelDrag: e, labelOr: t, labelMaxSize: a, labelSearch: r, value: n, ...o }) => {
  const [s, l] = R(!1), [c, d] = R(""), [m, v] = R(!1), b = _e(null), x = function(C) {
    C.preventDefault(), C.stopPropagation(), C.type === "dragenter" || C.type === "dragover" ? l(!0) : C.type === "dragleave" && l(!1);
  }, u = function(C) {
    C.preventDefault(), C.stopPropagation(), l(!1), C.dataTransfer.files && C.dataTransfer.files[0] && g(C.dataTransfer.files);
  }, f = function(C) {
    C.preventDefault(), C.currentTarget.files && C.currentTarget.files[0] && g(C.currentTarget.files);
  }, g = (C) => {
    const T = new FileReader(), k = C.item(0);
    if (v(!1), !!k) {
      if (k.size > 1048576) {
        v(!0);
        return;
      }
      T.onloadend = function() {
        d(T.result ? String(T.result) : "");
      }, T.readAsDataURL(k), o.onChange && typeof o.onChange == "function" && o.onChange(k);
    }
  }, y = () => {
    const C = b.current ? b.current : null;
    C && C.click();
  }, S = (C) => {
    C.stopPropagation(), C.preventDefault(), d(""), o.onChange && typeof o.onChange == "function" && o.onChange(void 0);
  };
  return I(() => {
    n && d(n);
  }, [n]), /* @__PURE__ */ i.jsx(Ao, { children: /* @__PURE__ */ i.jsxs(Mo, { onDragEnter: x, children: [
    /* @__PURE__ */ i.jsx(ba, { id: o.uid, accept: "image/*", ref: b, onChange: f }),
    c ? /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(Io, { children: /* @__PURE__ */ i.jsx("img", { src: c }) }),
      /* @__PURE__ */ i.jsx(Lo, { children: /* @__PURE__ */ i.jsx(_r, { icon: ca, color: "#BF0000", onClick: S }) })
    ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(ie, { path: la, size: 3, style: { opacity: s ? 1 : 0.3 } }),
      /* @__PURE__ */ i.jsx(An, { children: e }),
      /* @__PURE__ */ i.jsx(Fo, { children: t ?? "or" }),
      /* @__PURE__ */ i.jsx(_r, { color: "#0250C7", onClick: y, title: r }),
      /* @__PURE__ */ i.jsx(An, { style: { color: m ? "var(--theme-color-value-red)" : "var(--theme-color-font-empty)" }, children: a })
    ] }),
    s ? /* @__PURE__ */ i.jsx($o, { onDragEnter: x, onDragLeave: x, onDragOver: x, onDrop: u }) : null
  ] }) });
}, Ec = ({ onValidate: e, formError: t, onClick: a, onFocus: r, ...n }) => {
  const [o, s] = R(), [l, c] = R(""), [d, m] = R(!1), [v, b] = R(""), [x, u] = R(!1), [f, g] = R(), [y, S] = R([]), [C, T] = R(1), [k, N] = R(1), W = _e(), Z = (P) => {
    let E = P.target.value;
    b(E), W.current && clearInterval(W.current), W.current = setTimeout(() => {
      D(1, E);
    }, 300);
  }, ne = (P) => {
    let E = y.filter((V) => V.index === P)[0] ?? void 0;
    if (b(E == null ? void 0 : E.label), u(!1), n.onChange && n.onChange({ value: String(E == null ? void 0 : E.value), label: E == null ? void 0 : E.label }), e) {
      let V = e(String(E == null ? void 0 : E.value)) ?? "";
      c(V !== !0 ? String(V) : "");
    } else
      c("");
  }, G = (P) => {
    var E;
    (E = document.querySelector("body")) == null || E.click(), r && r(P), n.readOnly !== !0 && (u(!0), m(!0));
  }, F = (P) => {
    switch (P.key) {
      case "ArrowUp":
        g((E) => {
          let V = (E ?? -1) - 1;
          return V < 0 ? y.length - 1 : V;
        });
        break;
      case "ArrowDown":
        g((E) => {
          let V = (E ?? -1) + 1;
          return V >= y.length ? 0 : V;
        });
        break;
      case "Enter":
        ne(f);
        break;
    }
  }, L = (P) => {
    if (v && v.length > 0) {
      let E = y.filter((V) => V.label.includes(v));
      E.length > 0 && b(E[0].label);
    }
    if (n.onBlur && n.onBlur(P), e) {
      let E = e(P.target.value) ?? "";
      c(E !== !0 ? String(E) : "");
    } else
      c("");
    m(!1);
  }, p = (P) => {
    g(P);
  }, O = () => {
    g(void 0);
  }, D = Ve((P, E) => {
    let V = !0;
    return P && T(P), (async () => {
      if (!n.loader || !n.transform)
        return;
      const oe = await n.loader(P, E ?? v ? E ?? v : void 0);
      V && oe.data && oe.data.items && (S(oe.data.items.map((j, A) => n.transform ? n.transform(j, A) : void 0)), N(Math.ceil(oe.data.total / 5)));
    })(), () => {
      V = !1;
    };
  }, [n.transform, n.loader]);
  return I(() => {
    c((o == null ? void 0 : o.message[0]) ?? "");
  }, [o]), I(() => {
    t && s(t);
  }, [t]), I(() => {
    if (!n.value)
      b("");
    else {
      let P = y.find((E) => E.value === n.value);
      b(P ? P.label : "");
    }
  }, [n.value]), I(() => {
    n.labelValue ? b(n.labelValue) : b("");
  }, [n.labelValue]), I(() => {
    var E;
    D();
    let P = () => {
      u(!1);
    };
    return (E = document.querySelector("body")) == null || E.addEventListener("click", P), () => {
      var V;
      (V = document.querySelector("body")) == null || V.removeEventListener("click", P);
    };
  }, []), /* @__PURE__ */ i.jsxs(Te, { className: n.className ?? "", onClick: (P) => P.stopPropagation(), onBlur: () => {
    console.log("TRIGGER");
  }, children: [
    /* @__PURE__ */ i.jsx(
      Fe,
      {
        id: n.uid + "--filter",
        value: v,
        autoComplete: "off",
        readOnly: n.readOnly || !1,
        onChange: Z,
        onFocus: G,
        onBlur: L,
        onKeyDown: F
      }
    ),
    n.readOnly !== !0 ? /* @__PURE__ */ i.jsx(kt, { style: { opacity: 1 }, children: /* @__PURE__ */ i.jsx(ie, { size: 0.8, path: yi, color: "var(--theme-color-font, #000)" }) }) : null,
    /* @__PURE__ */ i.jsx(ke, { htmlFor: n.uid, children: d ? "" : l }),
    l ? /* @__PURE__ */ i.jsx(Ce, { title: l, className: d ? "big" : "" }) : null,
    x ? /* @__PURE__ */ i.jsxs(zo, { onMouseLeave: O, children: [
      y.map((P, E) => /* @__PURE__ */ i.jsx(Bo, { className: f === E ? "over" : "", onMouseEnter: () => p(E), onClick: () => ne(E), children: P.label }, E)),
      /* @__PURE__ */ i.jsx(Vo, { children: /* @__PURE__ */ i.jsx(Bi, { page: C, total: k, onPageChange: D }) })
    ] }) : null
  ] });
}, Ht = (e, t, a) => {
  for (; e.length < a; )
    e = t + e;
  return e;
}, _c = ({ onValidate: e, depencencies: t, timepicker: a, formError: r, ...n }) => {
  const [o, s] = R(""), [l, c] = R(), [d, m] = R(!1), [v, b] = R(""), [x, u] = R(!1), [f, g] = R(0), [y, S] = R(0), C = _e(null), T = _e(null), k = (G) => {
    let F = G.target.value.replace(/[^\d:]/gi, ""), [L, p] = F.split(":"), O = !!p;
    L.length >= 2 && (p === void 0 || p.length < 2) && (L = L.substring(0, 2), p = O ? p : L.substring(2, 4), O = !0);
    let D = L.substring(0, 2), P = p ? p.substring(0, 2) : "", E = D + (O ? ":" : "") + P;
    E = E.substring(0, 5), b(E), g(parseInt(D, 10)), S(parseInt(P, 10)), n.onChange && (G.target.value = E, n.onChange(G));
  }, N = (G) => {
    var F;
    (F = document.querySelector("body")) == null || F.click(), n.onFocus && n.onFocus(G), m(!0);
  }, W = (G) => {
    let [F, L] = (v ?? "").split(":").map((p) => parseInt(p, 10));
    if (!String(F) || !String(L) ? b("") : F < 24 && L <= 59 ? n.onChange && (G.target.value = v ?? "", n.onChange(G)) : b(""), n.onBlur && n.onBlur(G), e) {
      let p = e(G.target.value) ?? "";
      s(p !== !0 ? String(p) : "");
    } else
      s("");
    m(!1);
  }, Z = () => {
    setTimeout(() => {
      u(!0);
    }, 1);
  }, ne = (G, F, L) => {
    let p = Ht(String(G ?? 0), "0", 2) + ":" + Ht(String(F ?? 0), "0", 2);
    g(G ?? 0), S(F ?? 0), b(p);
    const O = L;
    if (O.target.value = p ?? "", n.onChange && n.onChange(O), e) {
      let D = e(O.target.value) ?? "";
      s(D !== !0 ? String(D) : "");
    } else
      s("");
  };
  return I(() => {
    !x || !C.current || !T.current || (C.current.scrollTop = y * 8, T.current.scrollTop = f * 40);
  }, [x, y, f]), I(() => {
    if (t && t.length && e) {
      let G = e(String(n.value ?? "")) ?? "";
      s(G !== !0 ? String(G) : "");
    }
  }, t), I(() => {
    var F;
    let G = () => {
      u(!1);
    };
    return (F = document.querySelector("body")) == null || F.addEventListener("click", G), () => {
      var L;
      (L = document.querySelector("body")) == null || L.removeEventListener("click", G);
    };
  }, []), I(() => {
    n.value !== null && b(String(n.value));
  }, [n.value]), I(() => {
    l && typeof l.message == "string" ? s(l.message) : s((l == null ? void 0 : l.message[0]) ?? "");
  }, [l]), I(() => {
    c(r);
  }, [r]), /* @__PURE__ */ i.jsxs(Te, { className: n.className ?? "", children: [
    /* @__PURE__ */ i.jsxs(Pe, { width: n.width, children: [
      /* @__PURE__ */ i.jsx(
        Fe,
        {
          id: n.uid,
          value: v,
          onChange: k,
          onFocus: (G) => N(G),
          onBlur: (G) => W(G),
          onClick: () => Z()
        }
      ),
      /* @__PURE__ */ i.jsx(ke, { htmlFor: n.uid, className: "hasIcon", children: d ? "" : o }),
      o ? /* @__PURE__ */ i.jsx(Ce, { title: o, className: d ? "hasIcon big" : "hasIcon" }) : null
    ] }),
    /* @__PURE__ */ i.jsx(kt, { children: /* @__PURE__ */ i.jsx(ie, { size: 1, path: xi }) }),
    x && a !== !1 ? /* @__PURE__ */ i.jsxs(Wo, { children: [
      /* @__PURE__ */ i.jsx(Mn, { ref: T, children: Array(24).fill(0).map((G, F) => /* @__PURE__ */ i.jsx(Fn, { onClick: (L) => {
        ne(F, y, L);
      }, className: f === F ? "selected" : "", children: Ht(String(F), "0", 2) })) }),
      /* @__PURE__ */ i.jsx(Mn, { ref: C, children: Array(12).fill(0).map((G, F) => /* @__PURE__ */ i.jsx(Fn, { onClick: (L) => {
        ne(f, F * 5, L);
      }, className: y === F * 5 ? "selected" : "", children: Ht(String(F * 5), "0", 2) })) })
    ] }) : null
  ] });
}, Pc = ({ multiple: e, externalFiles: t, horizontal: a, labelUpload: r, ...n }) => {
  const [o, s] = R([]), [l, c] = R(), d = _e(null), m = function(u) {
    u.preventDefault(), u.currentTarget.files && u.currentTarget.files[0] && v(u.currentTarget.files);
  }, v = (u) => {
    if (!u.item(0))
      return;
    const g = [];
    for (let y = 0; y < u.length; y++)
      u.item(y) !== null && g.push({
        id: String(Date.now()) + String(y) + String(Math.ceil(Math.random() * 89999 + 1e4)),
        file: u.item(y)
      });
    typeof n.onChange == "function" && n.onChange([...o, ...g]), s((y) => [...y, ...g]);
  }, b = () => {
    const u = d.current ? d.current : null;
    u && u.click();
  }, x = (u, f) => {
    const g = o.filter((y) => y.id !== u) ?? [];
    s(g), typeof n.onChange == "function" && n.onChange(g), f === !0 && n.onRemoveFileExternal && n.onRemoveFileExternal(u);
  };
  return I(() => {
    s(n.value);
  }, [n.value]), I(() => {
    c(t);
  }, [t]), /* @__PURE__ */ i.jsxs(Xo, { className: (n.className ?? "") + (a ? " horizontal" : ""), style: n.style ?? {}, children: [
    /* @__PURE__ */ i.jsx(ba, { id: n.uid, ref: d, onChange: m, multiple: e === !0 }),
    /* @__PURE__ */ i.jsx(
      _r,
      {
        icon: la,
        onClick: b,
        color: "var(--theme-color-blue)",
        title: r,
        size: 9,
        style: { margin: a ? "0 0.5rem 0.5rem 0" : "0" }
      }
    ),
    o.map((u) => /* @__PURE__ */ i.jsxs($n, { className: a ? "horizontal" : "", children: [
      /* @__PURE__ */ i.jsx(ie, { size: 1, path: Cn }),
      /* @__PURE__ */ i.jsx(In, { children: u.file.name }),
      /* @__PURE__ */ i.jsx(Ln, { onClick: () => x(u.id, !1), children: /* @__PURE__ */ i.jsx(ie, { size: 0.7, path: Ut }) })
    ] }, u.id)),
    l == null ? void 0 : l.map((u) => /* @__PURE__ */ i.jsxs($n, { children: [
      /* @__PURE__ */ i.jsx(ie, { size: 1, path: Cn }),
      /* @__PURE__ */ i.jsx(In, { children: u.name }),
      /* @__PURE__ */ i.jsx(Ln, { onClick: () => x(u.id, !0), children: /* @__PURE__ */ i.jsx(ie, { size: 0.7, path: Ut }) })
    ] }, u.id))
  ] });
}, Bs = w.div`
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
`, Vs = w.div`
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
`, Hs = w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 10px;
    flex: 1;
    min-height: 300px;
    overflow: hidden;
`, Ys = w.div`
    height: 3.5rem;
    min-height: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    box-sizing: border-box;
    border-top: 1px solid var(--theme-color-line, rgba(255,255,255, 0.3));
`, Us = w.div`
    width: 3rem;
    min-width: 3rem;
    border-right: 1px solid var(--theme-color-line, rgba(255,255,255, 0.3));
`, Gs = w.div`
    position: relative;
    flex: 1;
`, Qs = w.div`
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
`, qn = w.div`
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
`, Sr = w.div`
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
`, Tr = w.div`
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 0.8rem;
`, Zs = w.div`
    font-size: 0.8rem;
    opacity: 0.7;
    line-height: 0.8rem;
    color: var(--theme-color-font, "#000");
    border-right: 1px solid var(--theme-color-font, "#000");
    margin-right: 0.4rem;
    padding-right: 0.4rem;
`, Ks = w.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    margin: ${(e) => e.margin !== void 0 ? `${e.margin}` : "0"};
    padding: ${(e) => e.$padding !== void 0 ? `${e.$padding}` : "0"};
    color: var(--theme-color-font-empty, #888);
`, Js = w.div`
    width: 100%;
    min-height: 3.5rem;
    position:absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, var(--theme-color-background-aux) 0%, var(--theme-color-primary) 100%);
`, Rc = ({ title: e, size: t, margin: a, icon: r, padding: n }) => /* @__PURE__ */ i.jsxs(Ks, { margin: a, $padding: n, children: [
  /* @__PURE__ */ i.jsx(ie, { path: r, size: t ?? 5, style: { opacity: 0.4 } }),
  /* @__PURE__ */ i.jsx("div", { children: e })
] }), Nc = w.div`
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
`, Ac = w.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    padding: 0;
    box-sizing: border-box;
`, Mc = ({ loading: e }) => /* @__PURE__ */ i.jsx(Bs, { className: e && e.length ? "active" : "", children: /* @__PURE__ */ i.jsx(Dr, { path: "loading" }) }), Fc = ({ messages: e, onPop: t }) => {
  const [a, r] = R(!1), [n, o] = R(), [s, l] = R(), c = _e(), d = _e(!0), m = () => {
    switch (n) {
      case "success":
        return mi;
      case "error":
        return Ut;
      default:
        return Ut;
    }
  };
  return I(() => (e && e.length > 0 && !d.current ? (r(!0), o(e[0].messageType), l(e[0].content), c.current = setTimeout(() => {
    setTimeout(() => {
      t && t();
    }, 500);
  }, 5e3)) : r(!1), () => {
    clearTimeout(c.current);
  }), [e]), I(() => {
    d.current && (d.current = !1);
  }, []), /* @__PURE__ */ i.jsxs(Vs, { className: (a ? "active " : "") + n, children: [
    /* @__PURE__ */ i.jsx(ie, { size: 1, path: m() }),
    s
  ] });
}, $c = w.div`
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
    background-color: ${(e) => e.color ?? "#999"}
`, Xs = (e, t, a, r) => e >= a && e < r || t > a && t <= r || a >= e && a < t || r > e && r <= t, Ic = ({ start: e, end: t, date: a, eventName: r, location: n, locationList: o, events: s }) => {
  const [l, c] = R(), [d, m] = R(), [v, b] = R(0), [x, u] = R(), f = (() => {
    let y = (l ?? 0) / 60, S = (d ?? 0) / 60, C = Math.floor(y) - Math.min(y, 2), T = Math.floor(S) + Math.min(24 - S, 2);
    C > 19 && (C = 19), T < 5 && (T = 5);
    const k = Fi(T - C, 5, 10);
    return Array(k).fill(0).map((N, W) => ({
      time: N,
      hour: C + W,
      timestring: pt((C + W) * 60)
    }));
  })(), g = (() => {
    const y = l && d ? Tn(l, d) : 0, S = Math.min(y, 5) * 3.5;
    return {
      time: Math.floor((l ?? 0) / 60),
      offset: (l ?? 0) % 60 / 60 * 3.5 + "rem",
      height: S + "rem",
      heightVal: S,
      conflict: !1,
      overflow: y > 5
    };
  })();
  return I(() => {
    if (e) {
      c(e ?? 0);
      let y = e / 60, S = Math.min(Math.floor(y) - Math.min(y, 2), 19);
      b(S);
    }
    t && m(t ?? 0);
  }, [e, t]), I(() => {
    !l || !d || !a || u((s == null ? void 0 : s.map((y) => {
      var k;
      let S = Math.floor(y.time / 60), C = y.time ? (Math.min(Tn(y.time, y.timeend), 5) - (v > S ? v - S : 0)) * 3.5 : 0;
      return {
        time: S,
        clock: pt(y.time),
        offset: (y.time ?? 0) % 60 / 60 * 3.5 + "rem",
        height: C + "rem",
        heightVal: C,
        name: y.event_name,
        location: (k = o == null ? void 0 : o.filter((N) => N.id === y.location_id)[0]) == null ? void 0 : k.name,
        conflict: Xs(y.time, y.time + 120, l, d)
      };
    })) ?? []);
  }, [l, d, s]), /* @__PURE__ */ i.jsx(Hs, { children: f.map((y, S) => /* @__PURE__ */ i.jsxs(Ys, { children: [
    /* @__PURE__ */ i.jsx(Us, { children: y.timestring }),
    /* @__PURE__ */ i.jsxs(Gs, { children: [
      S === 0 ? x == null ? void 0 : x.filter((C) => y.hour > C.time && y.hour <= C.time + 120 && C.heightVal > 0).map(
        (C) => /* @__PURE__ */ i.jsxs(
          qn,
          {
            className: C.conflict ? "conflict" : "",
            style: {
              top: C.offset,
              height: C.height
            },
            children: [
              /* @__PURE__ */ i.jsxs(Sr, { className: "other", children: [
                /* @__PURE__ */ i.jsx(Zs, { children: C.clock }),
                " ",
                C.name
              ] }),
              /* @__PURE__ */ i.jsx(Tr, { children: C.location })
            ]
          }
        )
      ) : null,
      x == null ? void 0 : x.filter((C) => y.hour === C.time).map(
        (C) => /* @__PURE__ */ i.jsxs(
          qn,
          {
            className: C.conflict ? "conflict" : "",
            style: {
              top: C.offset,
              height: C.height
            },
            children: [
              /* @__PURE__ */ i.jsx(Sr, { className: "other", children: C.name }),
              /* @__PURE__ */ i.jsx(Tr, { children: C.location })
            ]
          }
        )
      ),
      g.time === y.hour && l !== void 0 && d !== void 0 ? /* @__PURE__ */ i.jsxs(
        Qs,
        {
          style: {
            top: g.offset,
            height: g.height
          },
          children: [
            /* @__PURE__ */ i.jsx(Sr, { children: r ?? "" }),
            /* @__PURE__ */ i.jsx(Tr, { children: n ?? "" }),
            g.overflow ? /* @__PURE__ */ i.jsx(Js, {}) : null
          ]
        }
      ) : null
    ] })
  ] }, y.timestring)) });
};
export {
  nc as Breadcrumb,
  _r as Button,
  gc as ButtonRow,
  xc as CPFInput,
  oc as Card,
  nl as Checkbox,
  Gt as Column,
  yc as CopyInput,
  vc as CreditCardInput,
  bc as DateInput,
  pc as DueMonthInput,
  Rc as EmptyState,
  Nc as FilterBar,
  Ac as FilterRow,
  jc as FormAnswer,
  wc as FormBuilder,
  kc as FormResult,
  lc as Grid,
  uc as GridTime,
  oo as GridTimeHeader,
  qi as GridTimeTable,
  Be as Input,
  Cc as IntegerInput,
  ka as Label,
  Mc as Loading,
  dc as Menu,
  Fc as Message,
  fc as Modal,
  Sc as MoneyInput,
  Tc as MonthInput,
  sc as PageContent,
  Bi as Paginator,
  Oc as PhoneInput,
  Dc as ProfilePicture,
  Ws as Radio,
  De as Row,
  Ni as RowElement,
  Mi as RowOrColumn,
  Ai as RowOrColumnElement,
  Ls as Select,
  Ec as SelectPaged,
  mc as SimpleTopbar,
  cc as Tabs,
  $c as Tag,
  zs as Textarea,
  _c as TimeInput,
  Ic as Timecheck,
  ac as Title,
  ic as TitleBar,
  hc as Topbar,
  Dr as Translate,
  Pc as Upload,
  ua as i18n
};
//# sourceMappingURL=index.es.js.map
