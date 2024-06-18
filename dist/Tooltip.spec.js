var Ea = Object.defineProperty;
var Sa = (e, t, n) => t in e ? Ea(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var oe = (e, t, n) => (Sa(e, typeof t != "symbol" ? t + "" : t, n), n);
import { T as Ta } from "./Tooltip-EtEXdAvm.js";
import { r as xa, c as er, g as Oa } from "./___vite-browser-external_commonjs-proxy-CWEl3h-z.js";
function ze(e, t, n) {
  const s = typeof e;
  if (!n.includes(s))
    throw new TypeError(`${t} value must be ${n.join(" or ")}, received "${s}"`);
}
function yr(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function Aa(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function hn(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function Ma(e, t) {
  const n = typeof t == "function" ? t : (s) => t.add(s);
  Object.getOwnPropertyNames(e).forEach(n), Object.getOwnPropertySymbols(e).forEach(n);
}
function Os(e) {
  const t = /* @__PURE__ */ new Set();
  return Aa(e) ? [] : (Ma(e, t), Array.from(t));
}
const As = { forceWritable: !1 };
function Lr(e, t = As) {
  return tr(e, /* @__PURE__ */ new WeakMap(), t);
}
function tr(e, t, n = As) {
  let s, r;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    for (r = Array(s = e.length), t.set(e, r); s--; )
      r[s] = tr(e[s], t, n);
    return r;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    r = Object.create(Object.getPrototypeOf(e)), t.set(e, r);
    const o = Os(e);
    for (const i of o) {
      const a = Object.getOwnPropertyDescriptor(e, i);
      if (!a)
        continue;
      const c = tr(e[i], t, n);
      "get" in a ? Object.defineProperty(r, i, {
        ...a,
        get() {
          return c;
        }
      }) : Object.defineProperty(r, i, {
        ...a,
        writable: n.forceWritable ? !0 : a.writable,
        value: c
      });
    }
    return r;
  }
  return e;
}
function Pa(e, t, n = void 0) {
  const s = t.replace(/\[(\d+)\]/g, ".$1").split(".");
  let r = e;
  for (const o of s)
    if (r = Object(r)[o], r === void 0)
      return n;
  return r;
}
function zr() {
  let e = null, t = null;
  const n = new Promise((s, r) => {
    e = s, t = r;
  });
  return n.resolve = e, n.reject = t, n;
}
var tt = {}, gr = { exports: {} };
gr.exports;
(function(e) {
  const n = (o = 0) => (i) => `\x1B[${38 + o};5;${i}m`, s = (o = 0) => (i, a, c) => `\x1B[${38 + o};2;${i};${a};${c}m`;
  function r() {
    const o = /* @__PURE__ */ new Map(), i = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
    for (const [a, c] of Object.entries(i)) {
      for (const [l, h] of Object.entries(c))
        i[l] = {
          open: `\x1B[${h[0]}m`,
          close: `\x1B[${h[1]}m`
        }, c[l] = i[l], o.set(h[0], h[1]);
      Object.defineProperty(i, a, {
        value: c,
        enumerable: !1
      });
    }
    return Object.defineProperty(i, "codes", {
      value: o,
      enumerable: !1
    }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = n(), i.color.ansi16m = s(), i.bgColor.ansi256 = n(10), i.bgColor.ansi16m = s(10), Object.defineProperties(i, {
      rgbToAnsi256: {
        value: (a, c, l) => a === c && c === l ? a < 8 ? 16 : a > 248 ? 231 : Math.round((a - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(a / 255 * 5) + 6 * Math.round(c / 255 * 5) + Math.round(l / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (a) => {
          const c = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(a.toString(16));
          if (!c)
            return [0, 0, 0];
          let { colorString: l } = c.groups;
          l.length === 3 && (l = l.split("").map((u) => u + u).join(""));
          const h = Number.parseInt(l, 16);
          return [
            h >> 16 & 255,
            h >> 8 & 255,
            h & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (a) => i.rgbToAnsi256(...i.hexToRgb(a)),
        enumerable: !1
      }
    }), i;
  }
  Object.defineProperty(e, "exports", {
    enumerable: !0,
    get: r
  });
})(gr);
var $a = gr.exports, Ke = {};
Object.defineProperty(Ke, "__esModule", {
  value: !0
});
Ke.printIteratorEntries = Ca;
Ke.printIteratorValues = Ia;
Ke.printListItems = ka;
Ke.printObjectProperties = Na;
const _a = (e, t) => {
  const n = Object.keys(e), s = t !== null ? n.sort(t) : n;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((r) => {
    Object.getOwnPropertyDescriptor(e, r).enumerable && s.push(r);
  }), s;
};
function Ca(e, t, n, s, r, o, i = ": ") {
  let a = "", c = 0, l = e.next();
  if (!l.done) {
    a += t.spacingOuter;
    const h = n + t.indent;
    for (; !l.done; ) {
      if (a += h, c++ === t.maxWidth) {
        a += "…";
        break;
      }
      const u = o(
        l.value[0],
        t,
        h,
        s,
        r
      ), f = o(
        l.value[1],
        t,
        h,
        s,
        r
      );
      a += u + i + f, l = e.next(), l.done ? t.min || (a += ",") : a += `,${t.spacingInner}`;
    }
    a += t.spacingOuter + n;
  }
  return a;
}
function Ia(e, t, n, s, r, o) {
  let i = "", a = 0, c = e.next();
  if (!c.done) {
    i += t.spacingOuter;
    const l = n + t.indent;
    for (; !c.done; ) {
      if (i += l, a++ === t.maxWidth) {
        i += "…";
        break;
      }
      i += o(c.value, t, l, s, r), c = e.next(), c.done ? t.min || (i += ",") : i += `,${t.spacingInner}`;
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function ka(e, t, n, s, r, o) {
  let i = "";
  if (e.length) {
    i += t.spacingOuter;
    const a = n + t.indent;
    for (let c = 0; c < e.length; c++) {
      if (i += a, c === t.maxWidth) {
        i += "…";
        break;
      }
      c in e && (i += o(e[c], t, a, s, r)), c < e.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
function Na(e, t, n, s, r, o) {
  let i = "";
  const a = _a(e, t.compareKeys);
  if (a.length) {
    i += t.spacingOuter;
    const c = n + t.indent;
    for (let l = 0; l < a.length; l++) {
      const h = a[l], u = o(h, t, c, s, r), f = o(e[h], t, c, s, r);
      i += `${c + u}: ${f}`, l < a.length - 1 ? i += `,${t.spacingInner}` : t.min || (i += ",");
    }
    i += t.spacingOuter + n;
  }
  return i;
}
var Je = {};
Object.defineProperty(Je, "__esModule", {
  value: !0
});
Je.test = Je.serialize = Je.default = void 0;
var Vr = Ke, Cn = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const ja = typeof Cn == "function" && Cn.for ? Cn.for("jest.asymmetricMatcher") : 1267621, Zt = " ", Ms = (e, t, n, s, r, o) => {
  const i = e.toString();
  if (i === "ArrayContaining" || i === "ArrayNotContaining")
    return ++s > t.maxDepth ? `[${i}]` : `${i + Zt}[${(0, Vr.printListItems)(
      e.sample,
      t,
      n,
      s,
      r,
      o
    )}]`;
  if (i === "ObjectContaining" || i === "ObjectNotContaining")
    return ++s > t.maxDepth ? `[${i}]` : `${i + Zt}{${(0, Vr.printObjectProperties)(
      e.sample,
      t,
      n,
      s,
      r,
      o
    )}}`;
  if (i === "StringMatching" || i === "StringNotMatching" || i === "StringContaining" || i === "StringNotContaining")
    return i + Zt + o(e.sample, t, n, s, r);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return e.toAsymmetricMatcher();
};
Je.serialize = Ms;
const Ps = (e) => e && e.$$typeof === ja;
Je.test = Ps;
const Fa = {
  serialize: Ms,
  test: Ps
};
var Ra = Fa;
Je.default = Ra;
var He = {};
Object.defineProperty(He, "__esModule", {
  value: !0
});
He.test = He.serialize = He.default = void 0;
var Wr = Ke;
const Da = " ", $s = ["DOMStringMap", "NamedNodeMap"], Ba = /^(HTML\w*Collection|NodeList)$/, qa = (e) => $s.indexOf(e) !== -1 || Ba.test(e), _s = (e) => e && e.constructor && !!e.constructor.name && qa(e.constructor.name);
He.test = _s;
const La = (e) => e.constructor.name === "NamedNodeMap", Cs = (e, t, n, s, r, o) => {
  const i = e.constructor.name;
  return ++s > t.maxDepth ? `[${i}]` : (t.min ? "" : i + Da) + ($s.indexOf(i) !== -1 ? `{${(0, Wr.printObjectProperties)(
    La(e) ? Array.from(e).reduce((a, c) => (a[c.name] = c.value, a), {}) : {
      ...e
    },
    t,
    n,
    s,
    r,
    o
  )}}` : `[${(0, Wr.printListItems)(
    Array.from(e),
    t,
    n,
    s,
    r,
    o
  )}]`);
};
He.serialize = Cs;
const za = {
  serialize: Cs,
  test: _s
};
var Va = za;
He.default = Va;
var Xe = {}, Pe = {}, br = {};
Object.defineProperty(br, "__esModule", {
  value: !0
});
br.default = Wa;
function Wa(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
Pe.printText = Pe.printProps = Pe.printElementAsLeaf = Pe.printElement = Pe.printComment = Pe.printChildren = void 0;
var Is = Ua(br);
function Ua(e) {
  return e && e.__esModule ? e : { default: e };
}
const Ka = (e, t, n, s, r, o, i) => {
  const a = s + n.indent, c = n.colors;
  return e.map((l) => {
    const h = t[l];
    let u = i(h, n, a, r, o);
    return typeof h != "string" && (u.indexOf(`
`) !== -1 && (u = n.spacingOuter + a + u + n.spacingOuter + s), u = `{${u}}`), `${n.spacingInner + s + c.prop.open + l + c.prop.close}=${c.value.open}${u}${c.value.close}`;
  }).join("");
};
Pe.printProps = Ka;
const Ga = (e, t, n, s, r, o) => e.map(
  (i) => t.spacingOuter + n + (typeof i == "string" ? ks(i, t) : o(i, t, n, s, r))
).join("");
Pe.printChildren = Ga;
const ks = (e, t) => {
  const n = t.colors.content;
  return n.open + (0, Is.default)(e) + n.close;
};
Pe.printText = ks;
const Ya = (e, t) => {
  const n = t.colors.comment;
  return `${n.open}<!--${(0, Is.default)(e)}-->${n.close}`;
};
Pe.printComment = Ya;
const Ja = (e, t, n, s, r) => {
  const o = s.colors.tag;
  return `${o.open}<${e}${t && o.close + t + s.spacingOuter + r + o.open}${n ? `>${o.close}${n}${s.spacingOuter}${r}${o.open}</${e}` : `${t && !s.min ? "" : " "}/`}>${o.close}`;
};
Pe.printElement = Ja;
const Ha = (e, t) => {
  const n = t.colors.tag;
  return `${n.open}<${e}${n.close} …${n.open} />${n.close}`;
};
Pe.printElementAsLeaf = Ha;
Object.defineProperty(Xe, "__esModule", {
  value: !0
});
Xe.test = Xe.serialize = Xe.default = void 0;
var mt = Pe;
const Xa = 1, Ns = 3, js = 8, Fs = 11, Qa = /^((HTML|SVG)\w*)?Element$/, Za = (e) => {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}, ec = (e) => {
  const t = e.constructor.name, { nodeType: n, tagName: s } = e, r = typeof s == "string" && s.includes("-") || Za(e);
  return n === Xa && (Qa.test(t) || r) || n === Ns && t === "Text" || n === js && t === "Comment" || n === Fs && t === "DocumentFragment";
}, Rs = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) && ec(e);
};
Xe.test = Rs;
function tc(e) {
  return e.nodeType === Ns;
}
function nc(e) {
  return e.nodeType === js;
}
function In(e) {
  return e.nodeType === Fs;
}
const Ds = (e, t, n, s, r, o) => {
  if (tc(e))
    return (0, mt.printText)(e.data, t);
  if (nc(e))
    return (0, mt.printComment)(e.data, t);
  const i = In(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++s > t.maxDepth ? (0, mt.printElementAsLeaf)(i, t) : (0, mt.printElement)(
    i,
    (0, mt.printProps)(
      In(e) ? [] : Array.from(e.attributes, (a) => a.name).sort(),
      In(e) ? {} : Array.from(e.attributes).reduce((a, c) => (a[c.name] = c.value, a), {}),
      t,
      n + t.indent,
      s,
      r,
      o
    ),
    (0, mt.printChildren)(
      Array.prototype.slice.call(e.childNodes || e.children),
      t,
      n + t.indent,
      s,
      r,
      o
    ),
    t,
    n
  );
};
Xe.serialize = Ds;
const rc = {
  serialize: Ds,
  test: Rs
};
var oc = rc;
Xe.default = oc;
var Qe = {};
Object.defineProperty(Qe, "__esModule", {
  value: !0
});
Qe.test = Qe.serialize = Qe.default = void 0;
var Lt = Ke;
const sc = "@@__IMMUTABLE_ITERABLE__@@", ic = "@@__IMMUTABLE_LIST__@@", ac = "@@__IMMUTABLE_KEYED__@@", cc = "@@__IMMUTABLE_MAP__@@", Ur = "@@__IMMUTABLE_ORDERED__@@", uc = "@@__IMMUTABLE_RECORD__@@", lc = "@@__IMMUTABLE_SEQ__@@", fc = "@@__IMMUTABLE_SET__@@", hc = "@@__IMMUTABLE_STACK__@@", St = (e) => `Immutable.${e}`, wn = (e) => `[${e}]`, zt = " ", Kr = "…", pc = (e, t, n, s, r, o, i) => ++s > t.maxDepth ? wn(St(i)) : `${St(i) + zt}{${(0, Lt.printIteratorEntries)(
  e.entries(),
  t,
  n,
  s,
  r,
  o
)}}`;
function dc(e) {
  let t = 0;
  return {
    next() {
      if (t < e._keys.length) {
        const n = e._keys[t++];
        return {
          done: !1,
          value: [n, e.get(n)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const mc = (e, t, n, s, r, o) => {
  const i = St(e._name || "Record");
  return ++s > t.maxDepth ? wn(i) : `${i + zt}{${(0, Lt.printIteratorEntries)(
    dc(e),
    t,
    n,
    s,
    r,
    o
  )}}`;
}, yc = (e, t, n, s, r, o) => {
  const i = St("Seq");
  return ++s > t.maxDepth ? wn(i) : e[ac] ? `${i + zt}{${// from Immutable collection of entries or from ECMAScript object
  e._iter || e._object ? (0, Lt.printIteratorEntries)(
    e.entries(),
    t,
    n,
    s,
    r,
    o
  ) : Kr}}` : `${i + zt}[${e._iter || // from Immutable collection of values
  e._array || // from ECMAScript array
  e._collection || // from ECMAScript collection in immutable v4
  e._iterable ? (0, Lt.printIteratorValues)(
    e.values(),
    t,
    n,
    s,
    r,
    o
  ) : Kr}]`;
}, kn = (e, t, n, s, r, o, i) => ++s > t.maxDepth ? wn(St(i)) : `${St(i) + zt}[${(0, Lt.printIteratorValues)(
  e.values(),
  t,
  n,
  s,
  r,
  o
)}]`, Bs = (e, t, n, s, r, o) => e[cc] ? pc(
  e,
  t,
  n,
  s,
  r,
  o,
  e[Ur] ? "OrderedMap" : "Map"
) : e[ic] ? kn(
  e,
  t,
  n,
  s,
  r,
  o,
  "List"
) : e[fc] ? kn(
  e,
  t,
  n,
  s,
  r,
  o,
  e[Ur] ? "OrderedSet" : "Set"
) : e[hc] ? kn(
  e,
  t,
  n,
  s,
  r,
  o,
  "Stack"
) : e[lc] ? yc(e, t, n, s, r, o) : mc(e, t, n, s, r, o);
Qe.serialize = Bs;
const qs = (e) => e && (e[sc] === !0 || e[uc] === !0);
Qe.test = qs;
const gc = {
  serialize: Bs,
  test: qs
};
var bc = gc;
Qe.default = bc;
var Ze = {}, nr = { exports: {} }, ae = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function wc() {
  if (Gr)
    return ae;
  Gr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function E(g) {
    if (typeof g == "object" && g !== null) {
      var M = g.$$typeof;
      switch (M) {
        case e:
          switch (g = g.type, g) {
            case n:
            case r:
            case s:
            case l:
            case h:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case i:
                case c:
                case f:
                case u:
                case o:
                  return g;
                default:
                  return M;
              }
          }
        case t:
          return M;
      }
    }
  }
  return ae.ContextConsumer = i, ae.ContextProvider = o, ae.Element = e, ae.ForwardRef = c, ae.Fragment = n, ae.Lazy = f, ae.Memo = u, ae.Portal = t, ae.Profiler = r, ae.StrictMode = s, ae.Suspense = l, ae.SuspenseList = h, ae.isAsyncMode = function() {
    return !1;
  }, ae.isConcurrentMode = function() {
    return !1;
  }, ae.isContextConsumer = function(g) {
    return E(g) === i;
  }, ae.isContextProvider = function(g) {
    return E(g) === o;
  }, ae.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ae.isForwardRef = function(g) {
    return E(g) === c;
  }, ae.isFragment = function(g) {
    return E(g) === n;
  }, ae.isLazy = function(g) {
    return E(g) === f;
  }, ae.isMemo = function(g) {
    return E(g) === u;
  }, ae.isPortal = function(g) {
    return E(g) === t;
  }, ae.isProfiler = function(g) {
    return E(g) === r;
  }, ae.isStrictMode = function(g) {
    return E(g) === s;
  }, ae.isSuspense = function(g) {
    return E(g) === l;
  }, ae.isSuspenseList = function(g) {
    return E(g) === h;
  }, ae.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === r || g === s || g === l || g === h || g === w || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === u || g.$$typeof === o || g.$$typeof === i || g.$$typeof === c || g.$$typeof === b || g.getModuleId !== void 0);
  }, ae.typeOf = E, ae;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function vc() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), i = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), b = !1, E = !1, g = !1, M = !1, P = !1, F;
    F = Symbol.for("react.module.reference");
    function k(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === r || P || D === s || D === l || D === h || M || D === w || b || E || g || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === u || D.$$typeof === o || D.$$typeof === i || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === F || D.getModuleId !== void 0));
    }
    function N(D) {
      if (typeof D == "object" && D !== null) {
        var de = D.$$typeof;
        switch (de) {
          case e:
            var le = D.type;
            switch (le) {
              case n:
              case r:
              case s:
              case l:
              case h:
                return le;
              default:
                var me = le && le.$$typeof;
                switch (me) {
                  case a:
                  case i:
                  case c:
                  case f:
                  case u:
                  case o:
                    return me;
                  default:
                    return de;
                }
            }
          case t:
            return de;
        }
      }
    }
    var U = i, B = o, G = e, ie = c, W = n, Se = f, we = u, Te = t, Oe = r, _e = s, Ae = l, $e = h, ke = !1, p = !1;
    function T(D) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function x(D) {
      return p || (p = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(D) {
      return N(D) === i;
    }
    function I(D) {
      return N(D) === o;
    }
    function R(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function _(D) {
      return N(D) === c;
    }
    function O(D) {
      return N(D) === n;
    }
    function L(D) {
      return N(D) === f;
    }
    function K(D) {
      return N(D) === u;
    }
    function J(D) {
      return N(D) === t;
    }
    function ne(D) {
      return N(D) === r;
    }
    function te(D) {
      return N(D) === s;
    }
    function H(D) {
      return N(D) === l;
    }
    function re(D) {
      return N(D) === h;
    }
    ce.ContextConsumer = U, ce.ContextProvider = B, ce.Element = G, ce.ForwardRef = ie, ce.Fragment = W, ce.Lazy = Se, ce.Memo = we, ce.Portal = Te, ce.Profiler = Oe, ce.StrictMode = _e, ce.Suspense = Ae, ce.SuspenseList = $e, ce.isAsyncMode = T, ce.isConcurrentMode = x, ce.isContextConsumer = $, ce.isContextProvider = I, ce.isElement = R, ce.isForwardRef = _, ce.isFragment = O, ce.isLazy = L, ce.isMemo = K, ce.isPortal = J, ce.isProfiler = ne, ce.isStrictMode = te, ce.isSuspense = H, ce.isSuspenseList = re, ce.isValidElementType = k, ce.typeOf = N;
  }()), ce;
}
process.env.NODE_ENV === "production" ? nr.exports = wc() : nr.exports = vc();
var Ec = nr.exports;
Object.defineProperty(Ze, "__esModule", {
  value: !0
});
Ze.test = Ze.serialize = Ze.default = void 0;
var at = Sc(Ec), en = Pe;
function Ls(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  return (Ls = function(s) {
    return s ? n : t;
  })(e);
}
function Sc(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var n = Ls(t);
  if (n && n.has(e))
    return n.get(e);
  var s = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(s, o, i) : s[o] = e[o];
    }
  return s.default = e, n && n.set(e, s), s;
}
const zs = (e, t = []) => (Array.isArray(e) ? e.forEach((n) => {
  zs(n, t);
}) : e != null && e !== !1 && t.push(e), t), Jr = (e) => {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (at.isFragment(e))
    return "React.Fragment";
  if (at.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (at.isContextProvider(e))
      return "Context.Provider";
    if (at.isContextConsumer(e))
      return "Context.Consumer";
    if (at.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const n = t.render.displayName || t.render.name || "";
      return n !== "" ? `ForwardRef(${n})` : "ForwardRef";
    }
    if (at.isMemo(e)) {
      const n = t.displayName || t.type.displayName || t.type.name || "";
      return n !== "" ? `Memo(${n})` : "Memo";
    }
  }
  return "UNDEFINED";
}, Tc = (e) => {
  const { props: t } = e;
  return Object.keys(t).filter((n) => n !== "children" && t[n] !== void 0).sort();
}, Vs = (e, t, n, s, r, o) => ++s > t.maxDepth ? (0, en.printElementAsLeaf)(Jr(e), t) : (0, en.printElement)(
  Jr(e),
  (0, en.printProps)(
    Tc(e),
    e.props,
    t,
    n + t.indent,
    s,
    r,
    o
  ),
  (0, en.printChildren)(
    zs(e.props.children),
    t,
    n + t.indent,
    s,
    r,
    o
  ),
  t,
  n
);
Ze.serialize = Vs;
const Ws = (e) => e != null && at.isElement(e);
Ze.test = Ws;
const xc = {
  serialize: Vs,
  test: Ws
};
var Oc = xc;
Ze.default = Oc;
var et = {};
Object.defineProperty(et, "__esModule", {
  value: !0
});
et.test = et.serialize = et.default = void 0;
var tn = Pe, Nn = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const Ac = typeof Nn == "function" && Nn.for ? Nn.for("react.test.json") : 245830487, Mc = (e) => {
  const { props: t } = e;
  return t ? Object.keys(t).filter((n) => t[n] !== void 0).sort() : [];
}, Us = (e, t, n, s, r, o) => ++s > t.maxDepth ? (0, tn.printElementAsLeaf)(e.type, t) : (0, tn.printElement)(
  e.type,
  e.props ? (0, tn.printProps)(
    Mc(e),
    e.props,
    t,
    n + t.indent,
    s,
    r,
    o
  ) : "",
  e.children ? (0, tn.printChildren)(
    e.children,
    t,
    n + t.indent,
    s,
    r,
    o
  ) : "",
  t,
  n
);
et.serialize = Us;
const Ks = (e) => e && e.$$typeof === Ac;
et.test = Ks;
const Pc = {
  serialize: Us,
  test: Ks
};
var $c = Pc;
et.default = $c;
Object.defineProperty(tt, "__esModule", {
  value: !0
});
tt.default = tt.DEFAULT_OPTIONS = void 0;
var Be = tt.format = ri, vn = tt.plugins = void 0, _c = lt($a), Ct = Ke, Cc = lt(
  Je
), Ic = lt(He), kc = lt(Xe), Nc = lt(Qe), jc = lt(Ze), Fc = lt(
  et
);
function lt(e) {
  return e && e.__esModule ? e : { default: e };
}
const Gs = Object.prototype.toString, Rc = Date.prototype.toISOString, Dc = Error.prototype.toString, Hr = RegExp.prototype.toString, jn = (e) => typeof e.constructor == "function" && e.constructor.name || "Object", Bc = (e) => typeof window < "u" && e === window, qc = /^Symbol\((.*)\)(.*)$/, Lc = /\n/gi;
class Ys extends Error {
  constructor(t, n) {
    super(t), this.stack = n, this.name = this.constructor.name;
  }
}
function zc(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Vc(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Wc(e) {
  return `${e}n`;
}
function Xr(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function Qr(e) {
  return String(e).replace(qc, "Symbol($1)");
}
function Zr(e) {
  return `[${Dc.call(e)}]`;
}
function Js(e, t, n, s) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const r = typeof e;
  if (r === "number")
    return Vc(e);
  if (r === "bigint")
    return Wc(e);
  if (r === "string")
    return s ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (r === "function")
    return Xr(e, t);
  if (r === "symbol")
    return Qr(e);
  const o = Gs.call(e);
  return o === "[object WeakMap]" ? "WeakMap {}" : o === "[object WeakSet]" ? "WeakSet {}" : o === "[object Function]" || o === "[object GeneratorFunction]" ? Xr(e, t) : o === "[object Symbol]" ? Qr(e) : o === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : Rc.call(e) : o === "[object Error]" ? Zr(e) : o === "[object RegExp]" ? n ? Hr.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Hr.call(e) : e instanceof Error ? Zr(e) : null;
}
function Hs(e, t, n, s, r, o) {
  if (r.indexOf(e) !== -1)
    return "[Circular]";
  r = r.slice(), r.push(e);
  const i = ++s > t.maxDepth, a = t.min;
  if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == "function" && !o)
    return Ye(e.toJSON(), t, n, s, r, !0);
  const c = Gs.call(e);
  return c === "[object Arguments]" ? i ? "[Arguments]" : `${a ? "" : "Arguments "}[${(0, Ct.printListItems)(
    e,
    t,
    n,
    s,
    r,
    Ye
  )}]` : zc(c) ? i ? `[${e.constructor.name}]` : `${a || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, Ct.printListItems)(
    e,
    t,
    n,
    s,
    r,
    Ye
  )}]` : c === "[object Map]" ? i ? "[Map]" : `Map {${(0, Ct.printIteratorEntries)(
    e.entries(),
    t,
    n,
    s,
    r,
    Ye,
    " => "
  )}}` : c === "[object Set]" ? i ? "[Set]" : `Set {${(0, Ct.printIteratorValues)(
    e.values(),
    t,
    n,
    s,
    r,
    Ye
  )}}` : i || Bc(e) ? `[${jn(e)}]` : `${a || !t.printBasicPrototype && jn(e) === "Object" ? "" : `${jn(e)} `}{${(0, Ct.printObjectProperties)(
    e,
    t,
    n,
    s,
    r,
    Ye
  )}}`;
}
function Uc(e) {
  return e.serialize != null;
}
function Xs(e, t, n, s, r, o) {
  let i;
  try {
    i = Uc(e) ? e.serialize(t, n, s, r, o, Ye) : e.print(
      t,
      (a) => Ye(a, n, s, r, o),
      (a) => {
        const c = s + n.indent;
        return c + a.replace(Lc, `
${c}`);
      },
      {
        edgeSpacing: n.spacingOuter,
        min: n.min,
        spacing: n.spacingInner
      },
      n.colors
    );
  } catch (a) {
    throw new Ys(a.message, a.stack);
  }
  if (typeof i != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`
    );
  return i;
}
function Qs(e, t) {
  for (let n = 0; n < e.length; n++)
    try {
      if (e[n].test(t))
        return e[n];
    } catch (s) {
      throw new Ys(s.message, s.stack);
    }
  return null;
}
function Ye(e, t, n, s, r, o) {
  const i = Qs(t.plugins, e);
  if (i !== null)
    return Xs(i, e, t, n, s, r);
  const a = Js(
    e,
    t.printFunctionName,
    t.escapeRegex,
    t.escapeString
  );
  return a !== null ? a : Hs(
    e,
    t,
    n,
    s,
    r,
    o
  );
}
const wr = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, Zs = Object.keys(wr), Kc = (e) => e, Re = Kc({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: wr
});
tt.DEFAULT_OPTIONS = Re;
function Gc(e) {
  if (Object.keys(e).forEach((t) => {
    if (!Object.prototype.hasOwnProperty.call(Re, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  }), e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const Yc = (e) => Zs.reduce((t, n) => {
  const s = e.theme && e.theme[n] !== void 0 ? e.theme[n] : wr[n], r = s && _c.default[s];
  if (r && typeof r.close == "string" && typeof r.open == "string")
    t[n] = r;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${n}" whose value "${s}" is undefined in ansi-styles.`
    );
  return t;
}, /* @__PURE__ */ Object.create(null)), Jc = () => Zs.reduce((e, t) => (e[t] = {
  close: "",
  open: ""
}, e), /* @__PURE__ */ Object.create(null)), ei = (e) => (e == null ? void 0 : e.printFunctionName) ?? Re.printFunctionName, ti = (e) => (e == null ? void 0 : e.escapeRegex) ?? Re.escapeRegex, ni = (e) => (e == null ? void 0 : e.escapeString) ?? Re.escapeString, eo = (e) => ({
  callToJSON: (e == null ? void 0 : e.callToJSON) ?? Re.callToJSON,
  colors: e != null && e.highlight ? Yc(e) : Jc(),
  compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : Re.compareKeys,
  escapeRegex: ti(e),
  escapeString: ni(e),
  indent: e != null && e.min ? "" : Hc((e == null ? void 0 : e.indent) ?? Re.indent),
  maxDepth: (e == null ? void 0 : e.maxDepth) ?? Re.maxDepth,
  maxWidth: (e == null ? void 0 : e.maxWidth) ?? Re.maxWidth,
  min: (e == null ? void 0 : e.min) ?? Re.min,
  plugins: (e == null ? void 0 : e.plugins) ?? Re.plugins,
  printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
  printFunctionName: ei(e),
  spacingInner: e != null && e.min ? " " : `
`,
  spacingOuter: e != null && e.min ? "" : `
`
});
function Hc(e) {
  return new Array(e + 1).join(" ");
}
function ri(e, t) {
  if (t && (Gc(t), t.plugins)) {
    const s = Qs(t.plugins, e);
    if (s !== null)
      return Xs(s, e, eo(t), "", 0, []);
  }
  const n = Js(
    e,
    ei(t),
    ti(t),
    ni(t)
  );
  return n !== null ? n : Hs(e, eo(t), "", 0, []);
}
const Xc = {
  AsymmetricMatcher: Cc.default,
  DOMCollection: Ic.default,
  DOMElement: kc.default,
  Immutable: Nc.default,
  ReactElement: jc.default,
  ReactTestComponent: Fc.default
};
vn = tt.plugins = Xc;
var Qc = ri;
tt.default = Qc;
var rr = { exports: {} };
(function(e, t) {
  (function(n, s) {
    s(t);
  })(er, function(n) {
    function s(d) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? s = function(y) {
        return typeof y;
      } : s = function(y) {
        return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
      }, s(d);
    }
    function r(d, y) {
      return o(d) || i(d, y) || a(d, y) || l();
    }
    function o(d) {
      if (Array.isArray(d))
        return d;
    }
    function i(d, y) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(d)))) {
        var A = [], q = !0, z = !1, Z = void 0;
        try {
          for (var se = d[Symbol.iterator](), fe; !(q = (fe = se.next()).done) && (A.push(fe.value), !(y && A.length === y)); q = !0)
            ;
        } catch (xe) {
          z = !0, Z = xe;
        } finally {
          try {
            !q && se.return != null && se.return();
          } finally {
            if (z)
              throw Z;
          }
        }
        return A;
      }
    }
    function a(d, y) {
      if (d) {
        if (typeof d == "string")
          return c(d, y);
        var A = Object.prototype.toString.call(d).slice(8, -1);
        if (A === "Object" && d.constructor && (A = d.constructor.name), A === "Map" || A === "Set")
          return Array.from(d);
        if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))
          return c(d, y);
      }
    }
    function c(d, y) {
      (y == null || y > d.length) && (y = d.length);
      for (var A = 0, q = new Array(y); A < y; A++)
        q[A] = d[A];
      return q;
    }
    function l() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var h = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    }, u = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    }, f = "…";
    function w(d, y) {
      var A = h[u[y]] || h[y];
      return A ? "\x1B[".concat(A[0], "m").concat(String(d), "\x1B[").concat(A[1], "m") : String(d);
    }
    function b() {
      var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, y = d.showHidden, A = y === void 0 ? !1 : y, q = d.depth, z = q === void 0 ? 2 : q, Z = d.colors, se = Z === void 0 ? !1 : Z, fe = d.customInspect, xe = fe === void 0 ? !0 : fe, be = d.showProxy, Fe = be === void 0 ? !1 : be, st = d.maxArrayLength, $n = st === void 0 ? 1 / 0 : st, $t = d.breakLength, dt = $t === void 0 ? 1 / 0 : $t, _t = d.seen, ba = _t === void 0 ? [] : _t, Br = d.truncate, wa = Br === void 0 ? 1 / 0 : Br, qr = d.stylize, va = qr === void 0 ? String : qr, _n = {
        showHidden: !!A,
        depth: Number(z),
        colors: !!se,
        customInspect: !!xe,
        showProxy: !!Fe,
        maxArrayLength: Number($n),
        breakLength: Number(dt),
        truncate: Number(wa),
        seen: ba,
        stylize: va
      };
      return _n.colors && (_n.stylize = w), _n;
    }
    function E(d, y) {
      var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : f;
      d = String(d);
      var q = A.length, z = d.length;
      return q > y && z > q ? A : z > y && z > q ? "".concat(d.slice(0, y - q)).concat(A) : d;
    }
    function g(d, y, A) {
      var q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
      A = A || y.inspect;
      var z = d.length;
      if (z === 0)
        return "";
      for (var Z = y.truncate, se = "", fe = "", xe = "", be = 0; be < z; be += 1) {
        var Fe = be + 1 === d.length, st = be + 2 === d.length;
        xe = "".concat(f, "(").concat(d.length - be, ")");
        var $n = d[be];
        y.truncate = Z - se.length - (Fe ? 0 : q.length);
        var $t = fe || A($n, y) + (Fe ? "" : q), dt = se.length + $t.length, _t = dt + xe.length;
        if (Fe && dt > Z && se.length + xe.length <= Z || !Fe && !st && _t > Z || (fe = Fe ? "" : A(d[be + 1], y) + (st ? "" : q), !Fe && st && _t > Z && dt + fe.length > Z))
          break;
        if (se += $t, !Fe && !st && dt + fe.length >= Z) {
          xe = "".concat(f, "(").concat(d.length - be - 1, ")");
          break;
        }
        xe = "";
      }
      return "".concat(se).concat(xe);
    }
    function M(d) {
      return d.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? d : JSON.stringify(d).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    }
    function P(d, y) {
      var A = r(d, 2), q = A[0], z = A[1];
      return y.truncate -= 2, typeof q == "string" ? q = M(q) : typeof q != "number" && (q = "[".concat(y.inspect(q, y), "]")), y.truncate -= q.length, z = y.inspect(z, y), "".concat(q, ": ").concat(z);
    }
    function F(d, y) {
      var A = Object.keys(d).slice(d.length);
      if (!d.length && !A.length)
        return "[]";
      y.truncate -= 4;
      var q = g(d, y);
      y.truncate -= q.length;
      var z = "";
      return A.length && (z = g(A.map(function(Z) {
        return [Z, d[Z]];
      }), y, P)), "[ ".concat(q).concat(z ? ", ".concat(z) : "", " ]");
    }
    var k = Function.prototype.toString, N = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, U = 512;
    function B(d) {
      if (typeof d != "function")
        return null;
      var y = "";
      if (typeof Function.prototype.name > "u" && typeof d.name > "u") {
        var A = k.call(d);
        if (A.indexOf("(") > U)
          return y;
        var q = A.match(N);
        q && (y = q[1]);
      } else
        y = d.name;
      return y;
    }
    var G = B, ie = function(y) {
      return typeof Buffer == "function" && y instanceof Buffer ? "Buffer" : y[Symbol.toStringTag] ? y[Symbol.toStringTag] : G(y.constructor);
    };
    function W(d, y) {
      var A = ie(d);
      y.truncate -= A.length + 4;
      var q = Object.keys(d).slice(d.length);
      if (!d.length && !q.length)
        return "".concat(A, "[]");
      for (var z = "", Z = 0; Z < d.length; Z++) {
        var se = "".concat(y.stylize(E(d[Z], y.truncate), "number")).concat(Z === d.length - 1 ? "" : ", ");
        if (y.truncate -= se.length, d[Z] !== d.length && y.truncate <= 3) {
          z += "".concat(f, "(").concat(d.length - d[Z] + 1, ")");
          break;
        }
        z += se;
      }
      var fe = "";
      return q.length && (fe = g(q.map(function(xe) {
        return [xe, d[xe]];
      }), y, P)), "".concat(A, "[ ").concat(z).concat(fe ? ", ".concat(fe) : "", " ]");
    }
    function Se(d, y) {
      var A = d.toJSON();
      if (A === null)
        return "Invalid Date";
      var q = A.split("T"), z = q[0];
      return y.stylize("".concat(z, "T").concat(E(q[1], y.truncate - z.length - 1)), "date");
    }
    function we(d, y) {
      var A = G(d);
      return A ? y.stylize("[Function ".concat(E(A, y.truncate - 11), "]"), "special") : y.stylize("[Function]", "special");
    }
    function Te(d, y) {
      var A = r(d, 2), q = A[0], z = A[1];
      return y.truncate -= 4, q = y.inspect(q, y), y.truncate -= q.length, z = y.inspect(z, y), "".concat(q, " => ").concat(z);
    }
    function Oe(d) {
      var y = [];
      return d.forEach(function(A, q) {
        y.push([q, A]);
      }), y;
    }
    function _e(d, y) {
      var A = d.size - 1;
      return A <= 0 ? "Map{}" : (y.truncate -= 7, "Map{ ".concat(g(Oe(d), y, Te), " }"));
    }
    var Ae = Number.isNaN || function(d) {
      return d !== d;
    };
    function $e(d, y) {
      return Ae(d) ? y.stylize("NaN", "number") : d === 1 / 0 ? y.stylize("Infinity", "number") : d === -1 / 0 ? y.stylize("-Infinity", "number") : d === 0 ? y.stylize(1 / d === 1 / 0 ? "+0" : "-0", "number") : y.stylize(E(d, y.truncate), "number");
    }
    function ke(d, y) {
      var A = E(d.toString(), y.truncate - 1);
      return A !== f && (A += "n"), y.stylize(A, "bigint");
    }
    function p(d, y) {
      var A = d.toString().split("/")[2], q = y.truncate - (2 + A.length), z = d.source;
      return y.stylize("/".concat(E(z, q), "/").concat(A), "regexp");
    }
    function T(d) {
      var y = [];
      return d.forEach(function(A) {
        y.push(A);
      }), y;
    }
    function x(d, y) {
      return d.size === 0 ? "Set{}" : (y.truncate -= 7, "Set{ ".concat(g(T(d), y), " }"));
    }
    var $ = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), I = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    }, R = 16, _ = 4;
    function O(d) {
      return I[d] || "\\u".concat("0000".concat(d.charCodeAt(0).toString(R)).slice(-_));
    }
    function L(d, y) {
      return $.test(d) && (d = d.replace($, O)), y.stylize("'".concat(E(d, y.truncate - 2), "'"), "string");
    }
    function K(d) {
      return "description" in Symbol.prototype ? d.description ? "Symbol(".concat(d.description, ")") : "Symbol()" : d.toString();
    }
    var J = function() {
      return "Promise{…}";
    };
    try {
      var ne = process.binding("util"), te = ne.getPromiseDetails, H = ne.kPending, re = ne.kRejected;
      Array.isArray(te(Promise.resolve())) && (J = function(y, A) {
        var q = te(y), z = r(q, 2), Z = z[0], se = z[1];
        return Z === H ? "Promise{<pending>}" : "Promise".concat(Z === re ? "!" : "", "{").concat(A.inspect(se, A), "}");
      });
    } catch {
    }
    var D = J;
    function de(d, y) {
      var A = Object.getOwnPropertyNames(d), q = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(d) : [];
      if (A.length === 0 && q.length === 0)
        return "{}";
      if (y.truncate -= 4, y.seen = y.seen || [], y.seen.indexOf(d) >= 0)
        return "[Circular]";
      y.seen.push(d);
      var z = g(A.map(function(fe) {
        return [fe, d[fe]];
      }), y, P), Z = g(q.map(function(fe) {
        return [fe, d[fe]];
      }), y, P);
      y.seen.pop();
      var se = "";
      return z && Z && (se = ", "), "{ ".concat(z).concat(se).concat(Z, " }");
    }
    var le = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
    function me(d, y) {
      var A = "";
      return le && le in d && (A = d[le]), A = A || G(d.constructor), (!A || A === "_class") && (A = "<Anonymous Class>"), y.truncate -= A.length, "".concat(A).concat(de(d, y));
    }
    function Ne(d, y) {
      return d.length === 0 ? "Arguments[]" : (y.truncate -= 13, "Arguments[ ".concat(g(d, y), " ]"));
    }
    var Pn = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
    function v(d, y) {
      var A = Object.getOwnPropertyNames(d).filter(function(se) {
        return Pn.indexOf(se) === -1;
      }), q = d.name;
      y.truncate -= q.length;
      var z = "";
      typeof d.message == "string" ? z = E(d.message, y.truncate) : A.unshift("message"), z = z ? ": ".concat(z) : "", y.truncate -= z.length + 5;
      var Z = g(A.map(function(se) {
        return [se, d[se]];
      }), y, P);
      return "".concat(q).concat(z).concat(Z ? " { ".concat(Z, " }") : "");
    }
    function S(d, y) {
      var A = r(d, 2), q = A[0], z = A[1];
      return y.truncate -= 3, z ? "".concat(y.stylize(q, "yellow"), "=").concat(y.stylize('"'.concat(z, '"'), "string")) : "".concat(y.stylize(q, "yellow"));
    }
    function C(d, y) {
      return g(d, y, j, `
`);
    }
    function j(d, y) {
      var A = d.getAttributeNames(), q = d.tagName.toLowerCase(), z = y.stylize("<".concat(q), "special"), Z = y.stylize(">", "special"), se = y.stylize("</".concat(q, ">"), "special");
      y.truncate -= q.length * 2 + 5;
      var fe = "";
      A.length > 0 && (fe += " ", fe += g(A.map(function(Fe) {
        return [Fe, d.getAttribute(Fe)];
      }), y, S, " ")), y.truncate -= fe.length;
      var xe = y.truncate, be = C(d.children, y);
      return be && be.length > xe && (be = "".concat(f, "(").concat(d.children.length, ")")), "".concat(z).concat(fe).concat(Z).concat(be).concat(se);
    }
    var m = typeof Symbol == "function" && typeof Symbol.for == "function", X = m ? Symbol.for("chai/inspect") : "@@chai/inspect", ye = !1;
    try {
      var ge = xa;
      ye = ge.inspect ? ge.inspect.custom : !1;
    } catch {
      ye = !1;
    }
    function Ce() {
      this.key = "chai/loupe__" + Math.random() + Date.now();
    }
    Ce.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function(y) {
        return y[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function(y) {
        return this.key in y;
      },
      // eslint-disable-next-line object-shorthand
      set: function(y, A) {
        Object.isExtensible(y) && Object.defineProperty(y, this.key, {
          // eslint-disable-next-line object-shorthand
          value: A,
          configurable: !0
        });
      }
    };
    var Y = new (typeof WeakMap == "function" ? WeakMap : Ce)(), V = {}, Q = {
      undefined: function(y, A) {
        return A.stylize("undefined", "undefined");
      },
      null: function(y, A) {
        return A.stylize(null, "null");
      },
      boolean: function(y, A) {
        return A.stylize(y, "boolean");
      },
      Boolean: function(y, A) {
        return A.stylize(y, "boolean");
      },
      number: $e,
      Number: $e,
      bigint: ke,
      BigInt: ke,
      string: L,
      String: L,
      function: we,
      Function: we,
      symbol: K,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: K,
      Array: F,
      Date: Se,
      Map: _e,
      Set: x,
      RegExp: p,
      Promise: D,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: function(y, A) {
        return A.stylize("WeakSet{…}", "special");
      },
      WeakMap: function(y, A) {
        return A.stylize("WeakMap{…}", "special");
      },
      Arguments: Ne,
      Int8Array: W,
      Uint8Array: W,
      Uint8ClampedArray: W,
      Int16Array: W,
      Uint16Array: W,
      Int32Array: W,
      Uint32Array: W,
      Float32Array: W,
      Float64Array: W,
      Generator: function() {
        return "";
      },
      DataView: function() {
        return "";
      },
      ArrayBuffer: function() {
        return "";
      },
      Error: v,
      HTMLCollection: C,
      NodeList: C
    }, ee = function(y, A, q) {
      return X in y && typeof y[X] == "function" ? y[X](A) : ye && ye in y && typeof y[ye] == "function" ? y[ye](A.depth, A) : "inspect" in y && typeof y.inspect == "function" ? y.inspect(A.depth, A) : "constructor" in y && Y.has(y.constructor) ? Y.get(y.constructor)(y, A) : V[q] ? V[q](y, A) : "";
    }, pe = Object.prototype.toString;
    function ve(d, y) {
      y = b(y), y.inspect = ve;
      var A = y, q = A.customInspect, z = d === null ? "null" : s(d);
      if (z === "object" && (z = pe.call(d).slice(8, -1)), Q[z])
        return Q[z](d, y);
      if (q && d) {
        var Z = ee(d, y, z);
        if (Z)
          return typeof Z == "string" ? Z : ve(Z, y);
      }
      var se = d ? Object.getPrototypeOf(d) : !1;
      return se === Object.prototype || se === null ? de(d, y) : d && typeof HTMLElement == "function" && d instanceof HTMLElement ? j(d, y) : "constructor" in d ? d.constructor !== Object ? me(d, y) : de(d, y) : d === Object(d) ? de(d, y) : y.stylize(String(d), z);
    }
    function Ge(d, y) {
      return Y.has(d) ? !1 : (Y.set(d, y), !0);
    }
    function pt(d, y) {
      return d in V ? !1 : (V[d] = y, !0);
    }
    var je = X;
    n.custom = je, n.default = ve, n.inspect = ve, n.registerConstructor = Ge, n.registerStringTag = pt, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(rr, rr.exports);
var oi = rr.exports;
const {
  AsymmetricMatcher: Zc,
  DOMCollection: eu,
  DOMElement: tu,
  Immutable: nu,
  ReactElement: ru,
  ReactTestComponent: ou
} = vn, to = [
  ou,
  ru,
  tu,
  eu,
  nu,
  Zc
];
function Ve(e, t = 10, { maxLength: n, ...s } = {}) {
  const r = n ?? 1e4;
  let o;
  try {
    o = Be(e, {
      maxDepth: t,
      escapeString: !1,
      // min: true,
      plugins: to,
      ...s
    });
  } catch {
    o = Be(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      // min: true,
      plugins: to,
      ...s
    });
  }
  return o.length >= r && t > 1 ? Ve(e, Math.floor(t / 2)) : o;
}
const su = /%[sdjifoOcj%]/g;
function si(...e) {
  if (typeof e[0] != "string") {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(yt(e[i], { depth: 0, colors: !1, compact: 3 }));
    return o.join(" ");
  }
  const t = e.length;
  let n = 1;
  const s = e[0];
  let r = String(s).replace(su, (o) => {
    if (o === "%%")
      return "%";
    if (n >= t)
      return o;
    switch (o) {
      case "%s": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : typeof i == "number" && i === 0 && 1 / i < 0 ? "-0" : typeof i == "object" && i !== null ? yt(i, { depth: 0, colors: !1, compact: 3 }) : String(i);
      }
      case "%d": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number(i).toString();
      }
      case "%i": {
        const i = e[n++];
        return typeof i == "bigint" ? `${i.toString()}n` : Number.parseInt(String(i)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e[n++])).toString();
      case "%o":
        return yt(e[n++], { showHidden: !0, showProxy: !0 });
      case "%O":
        return yt(e[n++]);
      case "%c":
        return n++, "";
      case "%j":
        try {
          return JSON.stringify(e[n++]);
        } catch (i) {
          const a = i.message;
          if (
            // chromium
            a.includes("circular structure") || a.includes("cyclic structures") || a.includes("cyclic object")
          )
            return "[Circular]";
          throw i;
        }
      default:
        return o;
    }
  });
  for (let o = e[n]; n < t; o = e[++n])
    o === null || typeof o != "object" ? r += ` ${o}` : r += ` ${yt(o)}`;
  return r;
}
function yt(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), oi.inspect(e, t);
}
function iu(e, t = {}) {
  typeof t.truncate > "u" && (t.truncate = 40);
  const n = yt(e, t), s = Object.prototype.toString.call(e);
  if (t.truncate && n.length >= t.truncate)
    if (s === "[object Function]") {
      const r = e;
      return !r.name || r.name === "" ? "[Function]" : `[Function: ${r.name}]`;
    } else {
      if (s === "[object Array]")
        return `[ Array(${e.length}) ]`;
      if (s === "[object Object]") {
        const r = Object.keys(e);
        return `{ Object (${r.length > 2 ? `${r.splice(0, 2).join(", ")}, ...` : r.join(", ")}) }`;
      } else
        return n;
    }
  return n;
}
const no = Symbol("vitest:SAFE_TIMERS"), au = Symbol("vitest:SAFE_COLORS"), cu = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
}, uu = Object.entries(cu);
function vr(e) {
  return String(e);
}
vr.open = "";
vr.close = "";
const lu = /* @__PURE__ */ uu.reduce((e, [t]) => (e[t] = vr, e), { isColorSupported: !1 });
function Er() {
  return globalThis[au] || lu;
}
function En() {
  const {
    setTimeout: e,
    setInterval: t,
    clearInterval: n,
    clearTimeout: s,
    setImmediate: r,
    clearImmediate: o
  } = globalThis[no] || globalThis, {
    nextTick: i
  } = globalThis[no] || globalThis.process || { nextTick: (a) => a() };
  return {
    nextTick: i,
    setTimeout: e,
    setInterval: t,
    clearInterval: n,
    clearTimeout: s,
    setImmediate: r,
    clearImmediate: o
  };
}
function fu(e) {
  const { message: t = "error", stackTraceLimit: n = 1 } = e || {}, s = Error.stackTraceLimit, r = Error.prepareStackTrace;
  Error.stackTraceLimit = n, Error.prepareStackTrace = (a) => a.stack;
  const i = new Error(t).stack || "";
  return Error.prepareStackTrace = r, Error.stackTraceLimit = s, i;
}
var ii;
ii = /\r?\n|[\r\u2028\u2029]/y;
RegExp(ii.source);
var ai = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(ai.keyword);
new Set(ai.strict);
var ci = {};
Object.defineProperty(ci, "__esModule", {
  value: !0
});
var ro = ci.default = mu;
const Rt = "diff-sequences", Me = 0, Vt = (e, t, n, s, r) => {
  let o = 0;
  for (; e < t && n < s && r(e, n); )
    e += 1, n += 1, o += 1;
  return o;
}, Wt = (e, t, n, s, r) => {
  let o = 0;
  for (; e <= t && n <= s && r(t, s); )
    t -= 1, s -= 1, o += 1;
  return o;
}, Fn = (e, t, n, s, r, o, i) => {
  let a = 0, c = -e, l = o[a], h = l;
  o[a] += Vt(
    l + 1,
    t,
    s + l - c + 1,
    n,
    r
  );
  const u = e < i ? e : i;
  for (a += 1, c += 2; a <= u; a += 1, c += 2) {
    if (a !== e && h < o[a])
      l = o[a];
    else if (l = h + 1, t <= l)
      return a - 1;
    h = o[a], o[a] = l + Vt(l + 1, t, s + l - c + 1, n, r);
  }
  return i;
}, oo = (e, t, n, s, r, o, i) => {
  let a = 0, c = e, l = o[a], h = l;
  o[a] -= Wt(
    t,
    l - 1,
    n,
    s + l - c - 1,
    r
  );
  const u = e < i ? e : i;
  for (a += 1, c -= 2; a <= u; a += 1, c -= 2) {
    if (a !== e && o[a] < h)
      l = o[a];
    else if (l = h - 1, l < t)
      return a - 1;
    h = o[a], o[a] = l - Wt(
      t,
      l - 1,
      n,
      s + l - c - 1,
      r
    );
  }
  return i;
}, hu = (e, t, n, s, r, o, i, a, c, l, h) => {
  const u = s - t, f = n - t, b = r - s - f, E = -b - (e - 1), g = -b + (e - 1);
  let M = Me;
  const P = e < a ? e : a;
  for (let F = 0, k = -e; F <= P; F += 1, k += 2) {
    const N = F === 0 || F !== e && M < i[F], U = N ? i[F] : M, B = N ? U : U + 1, G = u + B - k, ie = Vt(
      B + 1,
      n,
      G + 1,
      r,
      o
    ), W = B + ie;
    if (M = i[F], i[F] = W, E <= k && k <= g) {
      const Se = (e - 1 - (k + b)) / 2;
      if (Se <= l && c[Se] - 1 <= W) {
        const we = u + U - (N ? k + 1 : k - 1), Te = Wt(
          t,
          U,
          s,
          we,
          o
        ), Oe = U - Te, _e = we - Te, Ae = Oe + 1, $e = _e + 1;
        h.nChangePreceding = e - 1, e - 1 === Ae + $e - t - s ? (h.aEndPreceding = t, h.bEndPreceding = s) : (h.aEndPreceding = Ae, h.bEndPreceding = $e), h.nCommonPreceding = Te, Te !== 0 && (h.aCommonPreceding = Ae, h.bCommonPreceding = $e), h.nCommonFollowing = ie, ie !== 0 && (h.aCommonFollowing = B + 1, h.bCommonFollowing = G + 1);
        const ke = W + 1, p = G + ie + 1;
        return h.nChangeFollowing = e - 1, e - 1 === n + r - ke - p ? (h.aStartFollowing = n, h.bStartFollowing = r) : (h.aStartFollowing = ke, h.bStartFollowing = p), !0;
      }
    }
  }
  return !1;
}, pu = (e, t, n, s, r, o, i, a, c, l, h) => {
  const u = r - n, f = n - t, b = r - s - f, E = b - e, g = b + e;
  let M = Me;
  const P = e < l ? e : l;
  for (let F = 0, k = e; F <= P; F += 1, k -= 2) {
    const N = F === 0 || F !== e && c[F] < M, U = N ? c[F] : M, B = N ? U : U - 1, G = u + B - k, ie = Wt(
      t,
      B - 1,
      s,
      G - 1,
      o
    ), W = B - ie;
    if (M = c[F], c[F] = W, E <= k && k <= g) {
      const Se = (e + (k - b)) / 2;
      if (Se <= a && W - 1 <= i[Se]) {
        const we = G - ie;
        if (h.nChangePreceding = e, e === W + we - t - s ? (h.aEndPreceding = t, h.bEndPreceding = s) : (h.aEndPreceding = W, h.bEndPreceding = we), h.nCommonPreceding = ie, ie !== 0 && (h.aCommonPreceding = W, h.bCommonPreceding = we), h.nChangeFollowing = e - 1, e === 1)
          h.nCommonFollowing = 0, h.aStartFollowing = n, h.bStartFollowing = r;
        else {
          const Te = u + U - (N ? k - 1 : k + 1), Oe = Vt(
            U,
            n,
            Te,
            r,
            o
          );
          h.nCommonFollowing = Oe, Oe !== 0 && (h.aCommonFollowing = U, h.bCommonFollowing = Te);
          const _e = U + Oe, Ae = Te + Oe;
          e - 1 === n + r - _e - Ae ? (h.aStartFollowing = n, h.bStartFollowing = r) : (h.aStartFollowing = _e, h.bStartFollowing = Ae);
        }
        return !0;
      }
    }
  }
  return !1;
}, du = (e, t, n, s, r, o, i, a, c) => {
  const l = s - t, h = r - n, u = n - t, f = r - s, w = f - u;
  let b = u, E = u;
  if (i[0] = t - 1, a[0] = n, w % 2 === 0) {
    const g = (e || w) / 2, M = (u + f) / 2;
    for (let P = 1; P <= M; P += 1)
      if (b = Fn(P, n, r, l, o, i, b), P < g)
        E = oo(P, t, s, h, o, a, E);
      else if (
        // If a reverse path overlaps a forward path in the same diagonal,
        // return a division of the index intervals at the middle change.
        pu(
          P,
          t,
          n,
          s,
          r,
          o,
          i,
          b,
          a,
          E,
          c
        )
      )
        return;
  } else {
    const g = ((e || w) + 1) / 2, M = (u + f + 1) / 2;
    let P = 1;
    for (b = Fn(P, n, r, l, o, i, b), P += 1; P <= M; P += 1)
      if (E = oo(
        P - 1,
        t,
        s,
        h,
        o,
        a,
        E
      ), P < g)
        b = Fn(P, n, r, l, o, i, b);
      else if (
        // If a forward path overlaps a reverse path in the same diagonal,
        // return a division of the index intervals at the middle change.
        hu(
          P,
          t,
          n,
          s,
          r,
          o,
          i,
          b,
          a,
          E,
          c
        )
      )
        return;
  }
  throw new Error(
    `${Rt}: no overlap aStart=${t} aEnd=${n} bStart=${s} bEnd=${r}`
  );
}, or = (e, t, n, s, r, o, i, a, c, l) => {
  if (r - s < n - t) {
    if (o = !o, o && i.length === 1) {
      const { foundSubsequence: W, isCommon: Se } = i[0];
      i[1] = {
        foundSubsequence: (we, Te, Oe) => {
          W(we, Oe, Te);
        },
        isCommon: (we, Te) => Se(Te, we)
      };
    }
    const G = t, ie = n;
    t = s, n = r, s = G, r = ie;
  }
  const { foundSubsequence: h, isCommon: u } = i[o ? 1 : 0];
  du(
    e,
    t,
    n,
    s,
    r,
    u,
    a,
    c,
    l
  );
  const {
    nChangePreceding: f,
    aEndPreceding: w,
    bEndPreceding: b,
    nCommonPreceding: E,
    aCommonPreceding: g,
    bCommonPreceding: M,
    nCommonFollowing: P,
    aCommonFollowing: F,
    bCommonFollowing: k,
    nChangeFollowing: N,
    aStartFollowing: U,
    bStartFollowing: B
  } = l;
  t < w && s < b && or(
    f,
    t,
    w,
    s,
    b,
    o,
    i,
    a,
    c,
    l
  ), E !== 0 && h(E, g, M), P !== 0 && h(P, F, k), U < n && B < r && or(
    N,
    U,
    n,
    B,
    r,
    o,
    i,
    a,
    c,
    l
  );
}, so = (e, t) => {
  if (typeof t != "number")
    throw new TypeError(`${Rt}: ${e} typeof ${typeof t} is not a number`);
  if (!Number.isSafeInteger(t))
    throw new RangeError(`${Rt}: ${e} value ${t} is not a safe integer`);
  if (t < 0)
    throw new RangeError(`${Rt}: ${e} value ${t} is a negative integer`);
}, io = (e, t) => {
  const n = typeof t;
  if (n !== "function")
    throw new TypeError(`${Rt}: ${e} typeof ${n} is not a function`);
};
function mu(e, t, n, s) {
  so("aLength", e), so("bLength", t), io("isCommon", n), io("foundSubsequence", s);
  const r = Vt(0, e, 0, t, n);
  if (r !== 0 && s(r, 0, 0), e !== r || t !== r) {
    const o = r, i = r, a = Wt(
      o,
      e - 1,
      i,
      t - 1,
      n
    ), c = e - a, l = t - a, h = r + a;
    e !== h && t !== h && or(
      0,
      o,
      c,
      i,
      l,
      !1,
      [
        {
          foundSubsequence: s,
          isCommon: n
        }
      ],
      [Me],
      [Me],
      {
        aCommonFollowing: Me,
        aCommonPreceding: Me,
        aEndPreceding: Me,
        aStartFollowing: Me,
        bCommonFollowing: Me,
        bCommonPreceding: Me,
        bEndPreceding: Me,
        bStartFollowing: Me,
        nChangeFollowing: Me,
        nChangePreceding: Me,
        nCommonFollowing: Me,
        nCommonPreceding: Me
      }
    ), a !== 0 && s(a, c, l);
  }
}
function ao(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  if (Array.isArray(e))
    return "array";
  if (typeof e == "boolean")
    return "boolean";
  if (typeof e == "function")
    return "function";
  if (typeof e == "number")
    return "number";
  if (typeof e == "string")
    return "string";
  if (typeof e == "bigint")
    return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp)
        return "regexp";
      if (e.constructor === Map)
        return "map";
      if (e.constructor === Set)
        return "set";
      if (e.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
const Tt = -1, xt = 1, an = 0;
class It {
  constructor(t, n) {
    oe(this, 0);
    oe(this, 1);
    this[0] = t, this[1] = n;
  }
}
const ui = "Compared values have no visual difference.", yu = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function gu(e, t) {
  return e.replace(/\s+$/, (n) => t(n));
}
function Sr(e, t, n, s, r, o) {
  return e.length !== 0 ? n(
    `${s} ${gu(e, r)}`
  ) : s !== " " ? n(s) : t && o.length !== 0 ? n(`${s} ${o}`) : "";
}
function li(e, t, {
  aColor: n,
  aIndicator: s,
  changeLineTrailingSpaceColor: r,
  emptyFirstOrLastLinePlaceholder: o
}) {
  return Sr(
    e,
    t,
    n,
    s,
    r,
    o
  );
}
function fi(e, t, {
  bColor: n,
  bIndicator: s,
  changeLineTrailingSpaceColor: r,
  emptyFirstOrLastLinePlaceholder: o
}) {
  return Sr(
    e,
    t,
    n,
    s,
    r,
    o
  );
}
function hi(e, t, {
  commonColor: n,
  commonIndicator: s,
  commonLineTrailingSpaceColor: r,
  emptyFirstOrLastLinePlaceholder: o
}) {
  return Sr(
    e,
    t,
    n,
    s,
    r,
    o
  );
}
function co(e, t, n, s, { patchColor: r }) {
  return r(
    `@@ -${e + 1},${t - e} +${n + 1},${s - n} @@`
  );
}
function bu(e, t) {
  const n = e.length, s = t.contextLines, r = s + s;
  let o = n, i = !1, a = 0, c = 0;
  for (; c !== n; ) {
    const k = c;
    for (; c !== n && e[c][0] === an; )
      c += 1;
    if (k !== c)
      if (k === 0)
        c > s && (o -= c - s, i = !0);
      else if (c === n) {
        const N = c - k;
        N > s && (o -= N - s, i = !0);
      } else {
        const N = c - k;
        N > r && (o -= N - r, a += 1);
      }
    for (; c !== n && e[c][0] !== an; )
      c += 1;
  }
  const l = a !== 0 || i;
  a !== 0 ? o += a + 1 : i && (o += 1);
  const h = o - 1, u = [];
  let f = 0;
  l && u.push("");
  let w = 0, b = 0, E = 0, g = 0;
  const M = (k) => {
    const N = u.length;
    u.push(hi(k, N === 0 || N === h, t)), E += 1, g += 1;
  }, P = (k) => {
    const N = u.length;
    u.push(li(k, N === 0 || N === h, t)), E += 1;
  }, F = (k) => {
    const N = u.length;
    u.push(fi(k, N === 0 || N === h, t)), g += 1;
  };
  for (c = 0; c !== n; ) {
    let k = c;
    for (; c !== n && e[c][0] === an; )
      c += 1;
    if (k !== c)
      if (k === 0) {
        c > s && (k = c - s, w = k, b = k, E = w, g = b);
        for (let N = k; N !== c; N += 1)
          M(e[N][1]);
      } else if (c === n) {
        const N = c - k > s ? k + s : c;
        for (let U = k; U !== N; U += 1)
          M(e[U][1]);
      } else {
        const N = c - k;
        if (N > r) {
          const U = k + s;
          for (let G = k; G !== U; G += 1)
            M(e[G][1]);
          u[f] = co(
            w,
            E,
            b,
            g,
            t
          ), f = u.length, u.push("");
          const B = N - r;
          w = E + B, b = g + B, E = w, g = b;
          for (let G = c - s; G !== c; G += 1)
            M(e[G][1]);
        } else
          for (let U = k; U !== c; U += 1)
            M(e[U][1]);
      }
    for (; c !== n && e[c][0] === Tt; )
      P(e[c][1]), c += 1;
    for (; c !== n && e[c][0] === xt; )
      F(e[c][1]), c += 1;
  }
  return l && (u[f] = co(w, E, b, g, t)), u.join(`
`);
}
function wu(e, t) {
  return e.map((n, s, r) => {
    const o = n[1], i = s === 0 || s === r.length - 1;
    switch (n[0]) {
      case Tt:
        return li(o, i, t);
      case xt:
        return fi(o, i, t);
      default:
        return hi(o, i, t);
    }
  }).join(`
`);
}
const uo = (e) => e, pi = 5;
function vu() {
  const e = Er();
  return {
    aAnnotation: "Expected",
    aColor: e.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: e.red,
    bIndicator: "+",
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: uo,
    commonColor: e.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: uo,
    compareKeys: void 0,
    contextLines: pi,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow
  };
}
function Eu(e) {
  return e && typeof e == "function" ? e : void 0;
}
function Su(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : pi;
}
function Gt(e = {}) {
  return {
    ...vu(),
    ...e,
    compareKeys: Eu(e.compareKeys),
    contextLines: Su(e.contextLines)
  };
}
function bt(e) {
  return e.length === 1 && e[0].length === 0;
}
function Tu(e) {
  let t = 0, n = 0;
  return e.forEach((s) => {
    switch (s[0]) {
      case Tt:
        t += 1;
        break;
      case xt:
        n += 1;
        break;
    }
  }), { a: t, b: n };
}
function xu({
  aAnnotation: e,
  aColor: t,
  aIndicator: n,
  bAnnotation: s,
  bColor: r,
  bIndicator: o,
  includeChangeCounts: i,
  omitAnnotationLines: a
}, c) {
  if (a)
    return "";
  let l = "", h = "";
  if (i) {
    const w = String(c.a), b = String(c.b), E = s.length - e.length, g = " ".repeat(Math.max(0, E)), M = " ".repeat(Math.max(0, -E)), P = b.length - w.length, F = " ".repeat(Math.max(0, P)), k = " ".repeat(Math.max(0, -P));
    l = `${g}  ${n} ${F}${w}`, h = `${M}  ${o} ${k}${b}`;
  }
  const u = `${n} ${e}${l}`, f = `${o} ${s}${h}`;
  return `${t(u)}
${r(f)}

`;
}
function di(e, t) {
  return xu(t, Tu(e)) + (t.expand ? wu(e, t) : bu(e, t));
}
function Tr(e, t, n) {
  return di(
    mi(
      bt(e) ? [] : e,
      bt(t) ? [] : t
    ),
    Gt(n)
  );
}
function Ou(e, t, n, s, r) {
  if (bt(e) && bt(n) && (e = [], n = []), bt(t) && bt(s) && (t = [], s = []), e.length !== n.length || t.length !== s.length)
    return Tr(e, t, r);
  const o = mi(n, s);
  let i = 0, a = 0;
  return o.forEach((c) => {
    switch (c[0]) {
      case Tt:
        c[1] = e[i], i += 1;
        break;
      case xt:
        c[1] = t[a], a += 1;
        break;
      default:
        c[1] = t[a], i += 1, a += 1;
    }
  }), di(o, Gt(r));
}
function mi(e, t) {
  const n = e.length, s = t.length, r = (h, u) => e[h] === t[u], o = [];
  let i = 0, a = 0;
  const c = (h, u, f) => {
    for (; i !== u; i += 1)
      o.push(new It(Tt, e[i]));
    for (; a !== f; a += 1)
      o.push(new It(xt, t[a]));
    for (; h !== 0; h -= 1, i += 1, a += 1)
      o.push(new It(an, t[a]));
  };
  for ((ro.default || ro)(n, s, r, c); i !== n; i += 1)
    o.push(new It(Tt, e[i]));
  for (; a !== s; a += 1)
    o.push(new It(xt, t[a]));
  return o;
}
function sr(e, t) {
  const { commonColor: n } = Gt(t);
  return n(e);
}
const {
  AsymmetricMatcher: Au,
  DOMCollection: Mu,
  DOMElement: Pu,
  Immutable: $u,
  ReactElement: _u,
  ReactTestComponent: Cu
} = vn, yi = [
  Cu,
  _u,
  Pu,
  Mu,
  $u,
  Au
], ir = {
  plugins: yi
}, gi = {
  callToJSON: !1,
  maxDepth: 10,
  plugins: yi
};
function Ut(e, t, n) {
  if (Object.is(e, t))
    return "";
  const s = ao(e);
  let r = s, o = !1;
  if (s === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function")
      return null;
    r = e.getExpectedType(), o = r === "string";
  }
  if (r !== ao(t)) {
    const { aAnnotation: i, aColor: a, aIndicator: c, bAnnotation: l, bColor: h, bIndicator: u } = Gt(n), f = ar(gi, n), w = Be(e, f), b = Be(t, f), E = `${a(`${c} ${i}:`)} 
${w}`, g = `${h(`${u} ${l}:`)} 
${b}`;
    return `${E}

${g}`;
  }
  if (o)
    return null;
  switch (s) {
    case "string":
      return Tr(e.split(`
`), t.split(`
`), n);
    case "boolean":
    case "number":
      return Iu(e, t, n);
    case "map":
      return Rn(lo(e), lo(t), n);
    case "set":
      return Rn(fo(e), fo(t), n);
    default:
      return Rn(e, t, n);
  }
}
function Iu(e, t, n) {
  const s = Be(e, ir), r = Be(t, ir);
  return s === r ? "" : Tr(s.split(`
`), r.split(`
`), n);
}
function lo(e) {
  return new Map(Array.from(e.entries()).sort());
}
function fo(e) {
  return new Set(Array.from(e.values()).sort());
}
function Rn(e, t, n) {
  let s, r = !1;
  try {
    const i = ar(ir, n);
    s = ho(e, t, i, n);
  } catch {
    r = !0;
  }
  const o = sr(ui, n);
  if (s === void 0 || s === o) {
    const i = ar(gi, n);
    s = ho(e, t, i, n), s !== o && !r && (s = `${sr(
      yu,
      n
    )}

${s}`);
  }
  return s;
}
function ar(e, t) {
  const { compareKeys: n } = Gt(t);
  return {
    ...e,
    compareKeys: n
  };
}
function ho(e, t, n, s) {
  const r = { ...n, indent: 0 }, o = Be(e, r), i = Be(t, r);
  if (o === i)
    return sr(ui, s);
  {
    const a = Be(e, n), c = Be(t, n);
    return Ou(
      a.split(`
`),
      c.split(`
`),
      o.split(`
`),
      i.split(`
`),
      s
    );
  }
}
const ku = "@@__IMMUTABLE_RECORD__@@", Nu = "@@__IMMUTABLE_ITERABLE__@@";
function ju(e) {
  return e && (e[Nu] || e[ku]);
}
const Fu = Object.getPrototypeOf({});
function po(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function Dt(e, t = /* @__PURE__ */ new WeakMap()) {
  if (!e || typeof e == "string")
    return e;
  if (typeof e == "function")
    return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol")
    return e.toString();
  if (typeof e != "object")
    return e;
  if (ju(e))
    return Dt(e.toJSON(), t);
  if (e instanceof Promise || e.constructor && e.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e instanceof Element)
    return e.tagName;
  if (typeof e.asymmetricMatch == "function")
    return `${e.toString()} ${si(e.sample)}`;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    const n = new Array(e.length);
    return t.set(e, n), e.forEach((s, r) => {
      try {
        n[r] = Dt(s, t);
      } catch (o) {
        n[r] = po(o);
      }
    }), n;
  } else {
    const n = /* @__PURE__ */ Object.create(null);
    t.set(e, n);
    let s = e;
    for (; s && s !== Fu; )
      Object.getOwnPropertyNames(s).forEach((r) => {
        if (!(r in n))
          try {
            n[r] = Dt(e[r], t);
          } catch (o) {
            delete n[r], n[r] = po(o);
          }
      }), s = Object.getPrototypeOf(s);
    return n;
  }
}
function mo(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function Ru(e, t) {
  if (!e || typeof e != "object")
    return { message: e };
  if (e.stack && (e.stackStr = String(e.stack)), e.name && (e.nameStr = String(e.name)), e.showDiff || e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0) {
    const n = Lr(e.actual, { forceWritable: !0 }), s = Lr(e.expected, { forceWritable: !0 }), { replacedActual: r, replacedExpected: o } = bi(n, s);
    e.diff = Ut(o, r, { ...t, ...e.diffOptions });
  }
  typeof e.expected != "string" && (e.expected = Ve(e.expected, 10)), typeof e.actual != "string" && (e.actual = Ve(e.actual, 10));
  try {
    typeof e.message == "string" && (e.message = mo(e.message)), typeof e.cause == "object" && typeof e.cause.message == "string" && (e.cause.message = mo(e.cause.message));
  } catch {
  }
  try {
    return Dt(e);
  } catch (n) {
    return Dt(new Error(`Failed to fully serialize error: ${n == null ? void 0 : n.message}
Inner error message: ${e == null ? void 0 : e.message}`));
  }
}
function yo(e) {
  return hn(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function go(e, t) {
  const n = hn(e), s = hn(t);
  return n === s && (n === "Object" || n === "Array");
}
function bi(e, t, n = /* @__PURE__ */ new WeakSet(), s = /* @__PURE__ */ new WeakSet()) {
  return go(e, t) ? n.has(e) || s.has(t) ? { replacedActual: e, replacedExpected: t } : (n.add(e), s.add(t), Os(t).forEach((r) => {
    const o = t[r], i = e[r];
    if (yo(o))
      o.asymmetricMatch(i) && (e[r] = o);
    else if (yo(i))
      i.asymmetricMatch(o) && (t[r] = i);
    else if (go(i, o)) {
      const a = bi(
        i,
        o,
        n,
        s
      );
      e[r] = a.replacedActual, t[r] = a.replacedExpected;
    }
  }), {
    replacedActual: e,
    replacedExpected: t
  }) : { replacedActual: e, replacedExpected: t };
}
function wi(e, t) {
  function n(r) {
    const o = function(...i) {
      return t.apply(r, i);
    };
    Object.assign(o, t), o.withContext = () => o.bind(r), o.setContext = (i, a) => {
      r[i] = a;
    }, o.mergeContext = (i) => {
      Object.assign(r, i);
    };
    for (const i of e)
      Object.defineProperty(o, i, {
        get() {
          return n({ ...r, [i]: !0 });
        }
      });
    return o;
  }
  const s = n({});
  return s.fn = t, s;
}
function Du(e) {
  const t = [e.name];
  let n = e;
  for (; n != null && n.suite || n != null && n.file; )
    n = n.suite || n.file, n != null && n.name && t.unshift(n.name);
  return t;
}
const Bu = /^[A-Za-z]:\//;
function qu(e = "") {
  return e && e.replace(/\\/g, "/").replace(Bu, (t) => t.toUpperCase());
}
const Lu = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function zu() {
  return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const Vu = function(...e) {
  e = e.map((s) => qu(s));
  let t = "", n = !1;
  for (let s = e.length - 1; s >= -1 && !n; s--) {
    const r = s >= 0 ? e[s] : zu();
    !r || r.length === 0 || (t = `${r}/${t}`, n = bo(r));
  }
  return t = Wu(t, !n), n && !bo(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Wu(e, t) {
  let n = "", s = 0, r = -1, o = 0, i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e[a];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(r === a - 1 || o === 1))
        if (o === 2) {
          if (n.length < 2 || s !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
            if (n.length > 2) {
              const c = n.lastIndexOf("/");
              c === -1 ? (n = "", s = 0) : (n = n.slice(0, c), s = n.length - 1 - n.lastIndexOf("/")), r = a, o = 0;
              continue;
            } else if (n.length > 0) {
              n = "", s = 0, r = a, o = 0;
              continue;
            }
          }
          t && (n += n.length > 0 ? "/.." : "..", s = 2);
        } else
          n.length > 0 ? n += `/${e.slice(r + 1, a)}` : n = e.slice(r + 1, a), s = a - r - 1;
      r = a, o = 0;
    } else
      i === "." && o !== -1 ? ++o : o = -1;
  }
  return n;
}
const bo = function(e) {
  return Lu.test(e);
}, Uu = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), Ei = /* @__PURE__ */ new WeakMap();
function Ku(e, t) {
  Uu.set(e, t);
}
function Gu(e, t) {
  vi.set(e, t);
}
function Yu(e) {
  return vi.get(e);
}
function Ju(e, t) {
  Ei.set(e, t);
}
function Hu(e) {
  return Ei.get(e);
}
class Xu extends Error {
  constructor(n, s) {
    super(n);
    oe(this, "code", "VITEST_PENDING");
    oe(this, "taskId");
    this.message = n, this.taskId = s.id;
  }
}
const Bt = {
  tasks: [],
  currentSuite: null
};
function Qu(e) {
  var t;
  (t = Bt.currentSuite) == null || t.tasks.push(e);
}
async function Zu(e, t) {
  const n = Bt.currentSuite;
  Bt.currentSuite = e, await t(), Bt.currentSuite = n;
}
function xr(e, t, n = !1) {
  if (t <= 0 || t === Number.POSITIVE_INFINITY)
    return e;
  const { setTimeout: s, clearTimeout: r } = En();
  return (...o) => Promise.race([e(...o), new Promise((i, a) => {
    var c;
    const l = s(() => {
      r(l), a(new Error(tl(n, t)));
    }, t);
    (c = l.unref) == null || c.call(l);
  })]);
}
function el(e, t) {
  var n;
  const s = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  return s.task = e, s.skip = () => {
    throw e.pending = !0, new Xu("test is skipped; abort execution", e);
  }, s.onTestFailed = (r) => {
    e.onFailed || (e.onFailed = []), e.onFailed.push(r);
  }, s.onTestFinished = (r) => {
    e.onFinished || (e.onFinished = []), e.onFinished.push(r);
  }, ((n = t.extendTaskContext) == null ? void 0 : n.call(t, s)) || s;
}
function tl(e, t) {
  return `${e ? "Hook" : "Test"} timed out in ${t}ms.
If this is a long-running ${e ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${e ? "hookTimeout" : "testTimeout"}".`;
}
function nl(e, t = {}) {
  const n = ["auto"], s = Object.entries(e).map(([r, o]) => {
    const i = { value: o };
    return Array.isArray(o) && o.length >= 2 && yr(o[1]) && Object.keys(o[1]).some((a) => n.includes(a)) && (Object.assign(i, o[1]), i.value = o[0]), i.prop = r, i.isFn = typeof i.value == "function", i;
  });
  return Array.isArray(t.fixtures) ? t.fixtures = t.fixtures.concat(s) : t.fixtures = s, s.forEach((r) => {
    if (r.isFn) {
      const o = Ti(r.value);
      o.length && (r.deps = t.fixtures.filter(({ prop: i }) => i !== r.prop && o.includes(i)));
    }
  }), t;
}
const Dn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map();
function Or(e, t) {
  return (n) => {
    const s = n || t;
    if (!s)
      return e({});
    const r = Yu(s);
    if (!(r != null && r.length))
      return e(s);
    const o = Ti(e), i = r.some(({ auto: f }) => f);
    if (!o.length && !i)
      return e(s);
    Dn.get(s) || Dn.set(s, /* @__PURE__ */ new Map());
    const a = Dn.get(s);
    Bn.has(s) || Bn.set(s, []);
    const c = Bn.get(s), l = r.filter(({ prop: f, auto: w }) => w || o.includes(f)), h = Si(l);
    if (!h.length)
      return e(s);
    async function u() {
      for (const f of h) {
        if (a.has(f))
          continue;
        const w = f.isFn ? await rl(f.value, s, c) : f.value;
        s[f.prop] = w, a.set(f, w), c.unshift(() => {
          a.delete(f);
        });
      }
    }
    return u().then(() => e(s));
  };
}
async function rl(e, t, n) {
  const s = zr();
  let r = !1;
  const o = e(t, async (i) => {
    r = !0, s.resolve(i);
    const a = zr();
    n.push(async () => {
      a.resolve(), await o;
    }), await a;
  }).catch((i) => {
    if (!r) {
      s.reject(i);
      return;
    }
    throw i;
  });
  return s;
}
function Si(e, t = /* @__PURE__ */ new Set(), n = []) {
  return e.forEach((s) => {
    if (!n.includes(s)) {
      if (!s.isFn || !s.deps) {
        n.push(s);
        return;
      }
      if (t.has(s))
        throw new Error(`Circular fixture dependency detected: ${s.prop} <- ${[...t].reverse().map((r) => r.prop).join(" <- ")}`);
      t.add(s), Si(s.deps, t, n), n.push(s), t.clear();
    }
  }), n;
}
function Ti(e) {
  const t = e.toString().match(/[^(]*\(([^)]*)/);
  if (!t)
    return [];
  const n = wo(t[1]);
  if (!n.length)
    return [];
  const s = n[0];
  if (!(s.startsWith("{") && s.endsWith("}")))
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${s}".`);
  const r = s.slice(1, -1).replace(/\s/g, ""), o = wo(r).map((a) => a.replace(/\:.*|\=.*/g, "")), i = o.at(-1);
  if (i && i.startsWith("..."))
    throw new Error(`Rest parameters are not supported in fixtures, received "${i}".`);
  return o;
}
function wo(e) {
  const t = [], n = [];
  let s = 0;
  for (let o = 0; o < e.length; o++)
    if (e[o] === "{" || e[o] === "[")
      n.push(e[o] === "{" ? "}" : "]");
    else if (e[o] === n[n.length - 1])
      n.pop();
    else if (!n.length && e[o] === ",") {
      const i = e.substring(s, o).trim();
      i && t.push(i), s = o + 1;
    }
  const r = e.substring(s).trim();
  return r && t.push(r), t;
}
const jt = ll(), ol = Ar(
  function(e, t, n) {
    Yt().test.fn.call(this, Ot(e), t, n);
  }
), sl = jt, nn = ol;
let Ft, il;
function al() {
  return Ft;
}
function Yt() {
  return Bt.currentSuite || il;
}
function cl() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function pn(e, t) {
  let n = {}, s = () => {
  };
  if (typeof t == "object") {
    if (typeof e == "object")
      throw new TypeError("Cannot use two objects as arguments. Please provide options and a function callback in that order.");
    n = t;
  } else
    typeof t == "number" ? n = { timeout: t } : typeof e == "object" && (n = e);
  if (typeof e == "function") {
    if (typeof t == "function")
      throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
    s = e;
  } else
    typeof t == "function" && (s = t);
  return {
    options: n,
    handler: s
  };
}
function ul(e, t = () => {
}, n, s, r, o) {
  const i = [], a = [];
  let c;
  w();
  const l = function(g = "", M = {}) {
    const P = {
      id: "",
      name: g,
      suite: void 0,
      each: M.each,
      fails: M.fails,
      context: void 0,
      type: "custom",
      retry: M.retry ?? Ft.config.retry,
      repeats: M.repeats,
      mode: M.only ? "only" : M.skip ? "skip" : M.todo ? "todo" : "run",
      meta: M.meta ?? /* @__PURE__ */ Object.create(null)
    }, F = M.handler;
    (M.concurrent || !M.sequential && Ft.config.sequence.concurrent) && (P.concurrent = !0), s && (P.shuffle = !0);
    const k = el(P, Ft);
    return Object.defineProperty(P, "context", {
      value: k,
      enumerable: !1
    }), Gu(k, M.fixtures), F && Ku(P, xr(
      Or(F, k),
      (M == null ? void 0 : M.timeout) ?? Ft.config.testTimeout
    )), i.push(P), P;
  }, h = Ar(function(g, M, P) {
    let { options: F, handler: k } = pn(
      M,
      P
    );
    typeof o == "object" && (F = Object.assign({}, o, F)), F.concurrent = this.concurrent || !this.sequential && (F == null ? void 0 : F.concurrent), F.sequential = this.sequential || !this.concurrent && (F == null ? void 0 : F.sequential);
    const N = l(
      Ot(g),
      { ...this, ...F, handler: k }
    );
    N.type = "test";
  }), u = {
    type: "collector",
    name: e,
    mode: n,
    options: o,
    test: h,
    tasks: i,
    collect: E,
    task: l,
    clear: b,
    on: f
  };
  function f(g, ...M) {
    Hu(c)[g].push(...M);
  }
  function w() {
    typeof o == "number" && (o = { timeout: o }), c = {
      id: "",
      type: "suite",
      name: e,
      mode: n,
      each: r,
      shuffle: s,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      projectName: ""
    }, Ju(c, cl());
  }
  function b() {
    i.length = 0, a.length = 0, w();
  }
  async function E(g) {
    a.length = 0, t && await Zu(u, () => t(h));
    const M = [];
    for (const P of [...a, ...i])
      M.push(P.type === "collector" ? await P.collect(g) : P);
    return c.file = g, c.tasks = M, M.forEach((P) => {
      P.suite = c, g && (P.file = g);
    }), c;
  }
  return Qu(u), u;
}
function ll() {
  function e(t, n, s = {}) {
    const r = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run", o = Yt();
    let { options: i, handler: a } = pn(
      n,
      s
    );
    return o != null && o.options && (i = { ...o.options, ...i }), i.concurrent = this.concurrent || !this.sequential && (i == null ? void 0 : i.concurrent), i.sequential = this.sequential || !this.concurrent && (i == null ? void 0 : i.sequential), ul(Ot(t), a, r, this.shuffle, this.each, i);
  }
  return e.each = function(t, ...n) {
    const s = this.withContext();
    return this.setContext("each", !0), Array.isArray(t) && n.length && (t = xi(t, n)), (r, o, i) => {
      const a = Ot(r), c = t.every(Array.isArray), { options: l, handler: h } = pn(
        o,
        i
      );
      t.forEach((u, f) => {
        const w = Array.isArray(u) ? u : [u];
        c ? s(dn(a, w, f), l, () => h(...w)) : s(dn(a, w, f), l, () => h(u));
      }), this.setContext("each", void 0);
    };
  }, e.skipIf = (t) => t ? jt.skip : jt, e.runIf = (t) => t ? jt : jt.skip, wi(
    ["concurrent", "sequential", "shuffle", "skip", "only", "todo"],
    e
  );
}
function fl(e, t) {
  const n = e;
  n.each = function(r, ...o) {
    const i = this.withContext();
    return this.setContext("each", !0), Array.isArray(r) && o.length && (r = xi(r, o)), (a, c, l) => {
      const h = Ot(a), u = r.every(Array.isArray), { options: f, handler: w } = pn(
        c,
        l
      );
      r.forEach((b, E) => {
        const g = Array.isArray(b) ? b : [b];
        u ? i(dn(h, g, E), f, () => w(...g)) : i(dn(h, g, E), f, () => w(b));
      }), this.setContext("each", void 0);
    };
  }, n.skipIf = function(r) {
    return r ? this.skip : this;
  }, n.runIf = function(r) {
    return r ? this : this.skip;
  }, n.extend = function(r) {
    const o = nl(r, t);
    return Ar(function(a, c, l) {
      Yt().test.fn.call(this, Ot(a), c, l);
    }, o);
  };
  const s = wi(
    ["concurrent", "sequential", "skip", "only", "todo", "fails"],
    n
  );
  return t && s.mergeContext(t), s;
}
function Ar(e, t) {
  return fl(e, t);
}
function Ot(e) {
  return typeof e == "string" ? e : e instanceof Function ? e.name || "<anonymous>" : String(e);
}
function dn(e, t, n) {
  e.includes("%#") && (e = e.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${n}`).replace(/__vitest_escaped_%__/g, "%%"));
  const s = e.split("%").length - 1;
  let r = si(e, ...t.slice(0, s));
  return yr(t[0]) && (r = r.replace(
    /\$([$\w_.]+)/g,
    // https://github.com/chaijs/chai/pull/1490
    (o, i) => {
      var a, c;
      return iu(Pa(t[0], i), { truncate: (c = (a = void 0) == null ? void 0 : a.chaiConfig) == null ? void 0 : c.truncateThreshold });
    }
  )), r;
}
function xi(e, t) {
  const n = e.join("").trim().replace(/ /g, "").split(`
`).map((r) => r.split("|"))[0], s = [];
  for (let r = 0; r < Math.floor(t.length / n.length); r++) {
    const o = {};
    for (let i = 0; i < n.length; i++)
      o[n[i]] = t[r * n.length + i];
    s.push(o);
  }
  return s;
}
function Oi() {
  return al().config.hookTimeout;
}
function hl(e, t) {
  return Yt().on("beforeEach", xr(Or(e), Oi(), !0));
}
function pl(e, t) {
  return Yt().on("afterEach", xr(Or(e), Oi(), !0));
}
function Mr() {
  const e = globalThis.__vitest_worker__;
  if (!e) {
    const t = `Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`;
    throw new Error(t);
  }
  return e;
}
function dl() {
  const e = Mr();
  return e == null ? void 0 : e.environment.name;
}
var qn = {};
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function Ai() {
  var e = [].slice.call(arguments);
  function t(n, s) {
    Object.keys(s).forEach(function(r) {
      ~e.indexOf(r) || (n[r] = s[r]);
    });
  }
  return function() {
    for (var s = [].slice.call(arguments), r = 0, o = {}; r < s.length; r++)
      t(o, s[r]);
    return o;
  };
}
/*!
 * Primary Exports
 */
var Mi = ut;
function ut(e, t, n) {
  var s = Ai("name", "message", "stack", "constructor", "toJSON"), r = s(t || {});
  this.message = e || "Unspecified AssertionError", this.showDiff = !1;
  for (var o in r)
    this[o] = r[o];
  if (n = n || ut, Error.captureStackTrace)
    Error.captureStackTrace(this, n);
  else
    try {
      throw new Error();
    } catch (i) {
      this.stack = i.stack;
    }
}
/*!
 * Inherit from Error.prototype
 */
ut.prototype = Object.create(Error.prototype);
/*!
 * Statically set name
 */
ut.prototype.name = "AssertionError";
/*!
 * Ensure correct constructor
 */
ut.prototype.constructor = ut;
ut.prototype.toJSON = function(e) {
  var t = Ai("constructor", "toJSON", "stack"), n = t({ name: this.name }, this);
  return e !== !1 && this.stack && (n.stack = this.stack), n;
};
var ue = {};
function Pi(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
function $i(e) {
  var t = e.replace(/([^\\])\[/g, "$1.["), n = t.match(/(\\\.|[^.]+?)+/g);
  return n.map(function(r) {
    if (r === "constructor" || r === "__proto__" || r === "prototype")
      return {};
    var o = /^\[(\d+)\]$/, i = o.exec(r), a = null;
    return i ? a = { i: parseFloat(i[1]) } : a = { p: r.replace(/\\([.[\]])/g, "$1") }, a;
  });
}
function vo(e, t, n) {
  var s = e, r = null;
  n = typeof n > "u" ? t.length : n;
  for (var o = 0; o < n; o++) {
    var i = t[o];
    s && (typeof i.p > "u" ? s = s[i.i] : s = s[i.p], o === n - 1 && (r = s));
  }
  return r;
}
function ml(e, t, n) {
  for (var s = e, r = n.length, o = null, i = 0; i < r; i++) {
    var a = null, c = null;
    if (o = n[i], i === r - 1)
      a = typeof o.p > "u" ? o.i : o.p, s[a] = t;
    else if (typeof o.p < "u" && s[o.p])
      s = s[o.p];
    else if (typeof o.i < "u" && s[o.i])
      s = s[o.i];
    else {
      var l = n[i + 1];
      a = typeof o.p > "u" ? o.i : o.p, c = typeof l.p > "u" ? [] : {}, s[a] = c, s = s[a];
    }
  }
}
function _i(e, t) {
  var n = $i(t), s = n[n.length - 1], r = {
    parent: n.length > 1 ? vo(e, n, n.length - 1) : e,
    name: s.p || s.i,
    value: vo(e, n)
  };
  return r.exists = Pi(r.parent, r.name), r;
}
function yl(e, t) {
  var n = _i(e, t);
  return n.value;
}
function gl(e, t, n) {
  var s = $i(t);
  return ml(e, n, s), e;
}
var bl = {
  hasProperty: Pi,
  getPathInfo: _i,
  getPathValue: yl,
  setPathValue: gl
};
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Le = function(t, n, s) {
  var r = t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    r[n] = s;
  else
    return r[n];
};
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var wl = Le, vl = function(t, n) {
  var s = wl(t, "negate"), r = n[0];
  return s ? !r : r;
}, Ci = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(er, function() {
    var n = typeof Promise == "function", s = typeof self == "object" ? self : er, r = typeof Symbol < "u", o = typeof Map < "u", i = typeof Set < "u", a = typeof WeakMap < "u", c = typeof WeakSet < "u", l = typeof DataView < "u", h = r && typeof Symbol.iterator < "u", u = r && typeof Symbol.toStringTag < "u", f = i && typeof Set.prototype.entries == "function", w = o && typeof Map.prototype.entries == "function", b = f && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), E = w && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), g = h && typeof Array.prototype[Symbol.iterator] == "function", M = g && Object.getPrototypeOf([][Symbol.iterator]()), P = h && typeof String.prototype[Symbol.iterator] == "function", F = P && Object.getPrototypeOf(""[Symbol.iterator]()), k = 8, N = -1;
    function U(B) {
      var G = typeof B;
      if (G !== "object")
        return G;
      if (B === null)
        return "null";
      if (B === s)
        return "global";
      if (Array.isArray(B) && (u === !1 || !(Symbol.toStringTag in B)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && B === window.location)
          return "Location";
        if (typeof window.document == "object" && B === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && B === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && B === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && B instanceof window.HTMLElement) {
          if (B.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (B.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (B.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var ie = u && B[Symbol.toStringTag];
      if (typeof ie == "string")
        return ie;
      var W = Object.getPrototypeOf(B);
      return W === RegExp.prototype ? "RegExp" : W === Date.prototype ? "Date" : n && W === Promise.prototype ? "Promise" : i && W === Set.prototype ? "Set" : o && W === Map.prototype ? "Map" : c && W === WeakSet.prototype ? "WeakSet" : a && W === WeakMap.prototype ? "WeakMap" : l && W === DataView.prototype ? "DataView" : o && W === E ? "Map Iterator" : i && W === b ? "Set Iterator" : g && W === M ? "Array Iterator" : P && W === F ? "String Iterator" : W === null ? "Object" : Object.prototype.toString.call(B).slice(k, N);
    }
    return U;
  });
})(Ci);
var Sn = Ci.exports;
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var El = Mi, Ln = Le, Sl = Sn, Tl = function(t, n) {
  var s = Ln(t, "message"), r = Ln(t, "ssfi");
  s = s ? s + ": " : "", t = Ln(t, "object"), n = n.map(function(a) {
    return a.toLowerCase();
  }), n.sort();
  var o = n.map(function(a, c) {
    var l = ~["a", "e", "i", "o", "u"].indexOf(a.charAt(0)) ? "an" : "a", h = n.length > 1 && c === n.length - 1 ? "or " : "";
    return h + l + " " + a;
  }).join(", "), i = Sl(t).toLowerCase();
  if (!n.some(function(a) {
    return i === a;
  }))
    throw new El(
      s + "object tested must be " + o + ", but " + i + " given",
      void 0,
      r
    );
};
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ii = function(t, n) {
  return n.length > 4 ? n[4] : t._obj;
}, xl = Function.prototype.toString, Ol = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, Al = 512;
function Ml(e) {
  if (typeof e != "function")
    return null;
  var t = "";
  if (typeof Function.prototype.name > "u" && typeof e.name > "u") {
    var n = xl.call(e);
    if (n.indexOf("(") > Al)
      return t;
    var s = n.match(Ol);
    s && (t = s[1]);
  } else
    t = e.name;
  return t;
}
var ki = Ml, Mt = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *        return chai.util.eql(expected, actual, {
   *           comparator: (expected, actual) => {
   *              // for non number comparison, use the default behavior
   *              if(typeof expected !== 'number') return null;
   *              // allow a difference of 10 between compared numbers
   *              return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *           }
   *        })
   *     };
   *
   * @param {Function}
   * @api public
   */
  deepEqual: null
}, Pl = oi, Eo = Mt, Pr = $l;
function $l(e, t, n, s) {
  var r = {
    colors: s,
    depth: typeof n > "u" ? 2 : n,
    showHidden: t,
    truncate: Eo.truncateThreshold ? Eo.truncateThreshold : 1 / 0
  };
  return Pl.inspect(e, r);
}
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var _l = Pr, So = Mt, Ni = function(t) {
  var n = _l(t), s = Object.prototype.toString.call(t);
  if (So.truncateThreshold && n.length >= So.truncateThreshold) {
    if (s === "[object Function]")
      return !t.name || t.name === "" ? "[Function]" : "[Function: " + t.name + "]";
    if (s === "[object Array]")
      return "[ Array(" + t.length + ") ]";
    if (s === "[object Object]") {
      var r = Object.keys(t), o = r.length > 2 ? r.splice(0, 2).join(", ") + ", ..." : r.join(", ");
      return "{ Object (" + o + ") }";
    } else
      return n;
  } else
    return n;
};
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var zn = Le, Cl = Ii, Vn = Ni, Il = function(t, n) {
  var s = zn(t, "negate"), r = zn(t, "object"), o = n[3], i = Cl(t, n), a = s ? n[2] : n[1], c = zn(t, "message");
  return typeof a == "function" && (a = a()), a = a || "", a = a.replace(/#\{this\}/g, function() {
    return Vn(r);
  }).replace(/#\{act\}/g, function() {
    return Vn(i);
  }).replace(/#\{exp\}/g, function() {
    return Vn(o);
  }), c ? c + ": " + a : a;
};
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ft = function(t, n, s) {
  var r = t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null));
  n.__flags || (n.__flags = /* @__PURE__ */ Object.create(null)), s = arguments.length === 3 ? s : !0;
  for (var o in r)
    (s || o !== "object" && o !== "ssfi" && o !== "lockSsfi" && o != "message") && (n.__flags[o] = r[o]);
}, $r = { exports: {} };
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var To = Sn;
function ji() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
ji.prototype = {
  get: function(t) {
    return t[this._key];
  },
  set: function(t, n) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: n,
      configurable: !0
    });
  }
};
var _r = typeof WeakMap == "function" ? WeakMap : ji;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function xo(e, t, n) {
  if (!n || At(e) || At(t))
    return null;
  var s = n.get(e);
  if (s) {
    var r = s.get(t);
    if (typeof r == "boolean")
      return r;
  }
  return null;
}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function rn(e, t, n, s) {
  if (!(!n || At(e) || At(t))) {
    var r = n.get(e);
    r ? r.set(t, s) : (r = new _r(), r.set(t, s), n.set(e, r));
  }
}
/*!
 * Primary Export
 */
$r.exports = Tn;
$r.exports.MemoizeMap = _r;
function Tn(e, t, n) {
  if (n && n.comparator)
    return Oo(e, t, n);
  var s = Fi(e, t);
  return s !== null ? s : Oo(e, t, n);
}
function Fi(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : At(e) || At(t) ? !1 : null;
}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function Oo(e, t, n) {
  n = n || {}, n.memoize = n.memoize === !1 ? !1 : n.memoize || new _r();
  var s = n && n.comparator, r = xo(e, t, n.memoize);
  if (r !== null)
    return r;
  var o = xo(t, e, n.memoize);
  if (o !== null)
    return o;
  if (s) {
    var i = s(e, t);
    if (i === !1 || i === !0)
      return rn(e, t, n.memoize, i), i;
    var a = Fi(e, t);
    if (a !== null)
      return a;
  }
  var c = To(e);
  if (c !== To(t))
    return rn(e, t, n.memoize, !1), !1;
  rn(e, t, n.memoize, !0);
  var l = kl(e, t, c, n);
  return rn(e, t, n.memoize, l), l;
}
function kl(e, t, n, s) {
  switch (n) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return Tn(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return Ri(e, t, ["name", "message", "code"], s);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return ct(e, t, s);
    case "RegExp":
      return Nl(e, t);
    case "Generator":
      return jl(e, t, s);
    case "DataView":
      return ct(new Uint8Array(e.buffer), new Uint8Array(t.buffer), s);
    case "ArrayBuffer":
      return ct(new Uint8Array(e), new Uint8Array(t), s);
    case "Set":
      return Ao(e, t, s);
    case "Map":
      return Ao(e, t, s);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return Rl(e, t, s);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function Nl(e, t) {
  return e.toString() === t.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Ao(e, t, n) {
  if (e.size !== t.size)
    return !1;
  if (e.size === 0)
    return !0;
  var s = [], r = [];
  return e.forEach(function(i, a) {
    s.push([i, a]);
  }), t.forEach(function(i, a) {
    r.push([i, a]);
  }), ct(s.sort(), r.sort(), n);
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function ct(e, t, n) {
  var s = e.length;
  if (s !== t.length)
    return !1;
  if (s === 0)
    return !0;
  for (var r = -1; ++r < s; )
    if (Tn(e[r], t[r], n) === !1)
      return !1;
  return !0;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function jl(e, t, n) {
  return ct(cr(e), cr(t), n);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function Fl(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function Mo(e) {
  if (Fl(e))
    try {
      return cr(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function cr(e) {
  for (var t = e.next(), n = [t.value]; t.done === !1; )
    t = e.next(), n.push(t.value);
  return n;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function Po(e) {
  var t = [];
  for (var n in e)
    t.push(n);
  return t;
}
function $o(e) {
  for (var t = [], n = Object.getOwnPropertySymbols(e), s = 0; s < n.length; s += 1) {
    var r = n[s];
    Object.getOwnPropertyDescriptor(e, r).enumerable && t.push(r);
  }
  return t;
}
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Ri(e, t, n, s) {
  var r = n.length;
  if (r === 0)
    return !0;
  for (var o = 0; o < r; o += 1)
    if (Tn(e[n[o]], t[n[o]], s) === !1)
      return !1;
  return !0;
}
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Rl(e, t, n) {
  var s = Po(e), r = Po(t), o = $o(e), i = $o(t);
  if (s = s.concat(o), r = r.concat(i), s.length && s.length === r.length)
    return ct(_o(s).sort(), _o(r).sort()) === !1 ? !1 : Ri(e, t, s, n);
  var a = Mo(e), c = Mo(t);
  return a.length && a.length === c.length ? (a.sort(), c.sort(), ct(a, c, n)) : s.length === 0 && a.length === 0 && r.length === 0 && c.length === 0;
}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function At(e) {
  return e === null || typeof e != "object";
}
function _o(e) {
  return e.map(function(n) {
    return typeof n == "symbol" ? n.toString() : n;
  });
}
var Dl = $r.exports, Bl = Mt;
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var xn = function() {
  return Bl.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
};
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Wn, Co;
function ql() {
  if (Co)
    return Wn;
  Co = 1;
  var e = ht(), t = Le, n = xn, s = ft;
  return Wn = function(o, i, a) {
    a = a === void 0 ? function() {
    } : a, Object.defineProperty(
      o,
      i,
      {
        get: function c() {
          !n() && !t(this, "lockSsfi") && t(this, "ssfi", c);
          var l = a.call(this);
          if (l !== void 0)
            return l;
          var h = new e.Assertion();
          return s(this, h), h;
        },
        configurable: !0
      }
    );
  }, Wn;
}
var Ll = Object.getOwnPropertyDescriptor(function() {
}, "length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var On = function(t, n, s) {
  return Ll.configurable && Object.defineProperty(t, "length", {
    get: function() {
      throw Error(s ? "Invalid Chai property: " + n + '.length. Due to a compatibility issue, "length" cannot directly follow "' + n + '". Use "' + n + '.lengthOf" instead.' : "Invalid Chai property: " + n + '.length. See docs for proper usage of "' + n + '".');
    }
  }), t;
};
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var zl = function(t) {
  var n = Object.getOwnPropertyNames(t);
  function s(o) {
    n.indexOf(o) === -1 && n.push(o);
  }
  for (var r = Object.getPrototypeOf(t); r !== null; )
    Object.getOwnPropertyNames(r).forEach(s), r = Object.getPrototypeOf(r);
  return n;
}, Vl = Mt, Io = Le, Wl = zl, Ul = xn;
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ko = ["__flags", "__methods", "_obj", "assert"], An = function(t, n) {
  return Ul() ? new Proxy(t, {
    get: function s(r, o) {
      if (typeof o == "string" && Vl.proxyExcludedKeys.indexOf(o) === -1 && !Reflect.has(r, o)) {
        if (n)
          throw Error("Invalid Chai property: " + n + "." + o + '. See docs for proper usage of "' + n + '".');
        var i = null, a = 4;
        throw Wl(r).forEach(function(c) {
          if (!Object.prototype.hasOwnProperty(c) && ko.indexOf(c) === -1) {
            var l = Kl(
              o,
              c,
              a
            );
            l < a && (i = c, a = l);
          }
        }), Error(i !== null ? "Invalid Chai property: " + o + '. Did you mean "' + i + '"?' : "Invalid Chai property: " + o);
      }
      return ko.indexOf(o) === -1 && !Io(r, "lockSsfi") && Io(r, "ssfi", s), Reflect.get(r, o);
    }
  }) : t;
};
function Kl(e, t, n) {
  if (Math.abs(e.length - t.length) >= n)
    return n;
  for (var s = [], r = 0; r <= e.length; r++)
    s[r] = Array(t.length + 1).fill(0), s[r][0] = r;
  for (var o = 0; o < t.length; o++)
    s[0][o] = o;
  for (var r = 1; r <= e.length; r++)
    for (var i = e.charCodeAt(r - 1), o = 1; o <= t.length; o++) {
      if (Math.abs(r - o) >= n) {
        s[r][o] = n;
        continue;
      }
      s[r][o] = Math.min(
        s[r - 1][o] + 1,
        s[r][o - 1] + 1,
        s[r - 1][o - 1] + (i === t.charCodeAt(o - 1) ? 0 : 1)
      );
    }
  return s[e.length][t.length];
}
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Un, No;
function Gl() {
  if (No)
    return Un;
  No = 1;
  var e = On, t = ht(), n = Le, s = An, r = ft;
  return Un = function(i, a, c) {
    var l = function() {
      n(this, "lockSsfi") || n(this, "ssfi", l);
      var h = c.apply(this, arguments);
      if (h !== void 0)
        return h;
      var u = new t.Assertion();
      return r(this, u), u;
    };
    e(l, a, !1), i[a] = s(l, a);
  }, Un;
}
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Kn, jo;
function Yl() {
  if (jo)
    return Kn;
  jo = 1;
  var e = ht(), t = Le, n = xn, s = ft;
  return Kn = function(o, i, a) {
    var c = Object.getOwnPropertyDescriptor(o, i), l = function() {
    };
    c && typeof c.get == "function" && (l = c.get), Object.defineProperty(
      o,
      i,
      {
        get: function h() {
          !n() && !t(this, "lockSsfi") && t(this, "ssfi", h);
          var u = t(this, "lockSsfi");
          t(this, "lockSsfi", !0);
          var f = a(l).call(this);
          if (t(this, "lockSsfi", u), f !== void 0)
            return f;
          var w = new e.Assertion();
          return s(this, w), w;
        },
        configurable: !0
      }
    );
  }, Kn;
}
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Gn, Fo;
function Jl() {
  if (Fo)
    return Gn;
  Fo = 1;
  var e = On, t = ht(), n = Le, s = An, r = ft;
  return Gn = function(i, a, c) {
    var l = i[a], h = function() {
      throw new Error(a + " is not a function");
    };
    l && typeof l == "function" && (h = l);
    var u = function() {
      n(this, "lockSsfi") || n(this, "ssfi", u);
      var f = n(this, "lockSsfi");
      n(this, "lockSsfi", !0);
      var w = c(h).apply(this, arguments);
      if (n(this, "lockSsfi", f), w !== void 0)
        return w;
      var b = new t.Assertion();
      return r(this, b), b;
    };
    e(u, a, !1), i[a] = s(u, a);
  }, Gn;
}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Yn, Ro;
function Hl() {
  if (Ro)
    return Yn;
  Ro = 1;
  /*!
   * Module dependencies
   */
  var e = On, t = ht(), n = Le, s = An, r = ft;
  /*!
   * Module variables
   */
  var o = typeof Object.setPrototypeOf == "function", i = function() {
  }, a = Object.getOwnPropertyNames(i).filter(function(h) {
    var u = Object.getOwnPropertyDescriptor(i, h);
    return typeof u != "object" ? !0 : !u.configurable;
  }), c = Function.prototype.call, l = Function.prototype.apply;
  return Yn = function(u, f, w, b) {
    typeof b != "function" && (b = function() {
    });
    var E = {
      method: w,
      chainingBehavior: b
    };
    u.__methods || (u.__methods = {}), u.__methods[f] = E, Object.defineProperty(
      u,
      f,
      {
        get: function() {
          E.chainingBehavior.call(this);
          var M = function() {
            n(this, "lockSsfi") || n(this, "ssfi", M);
            var k = E.method.apply(this, arguments);
            if (k !== void 0)
              return k;
            var N = new t.Assertion();
            return r(this, N), N;
          };
          if (e(M, f, !0), o) {
            var P = Object.create(this);
            P.call = c, P.apply = l, Object.setPrototypeOf(M, P);
          } else {
            var F = Object.getOwnPropertyNames(u);
            F.forEach(function(k) {
              if (a.indexOf(k) === -1) {
                var N = Object.getOwnPropertyDescriptor(u, k);
                Object.defineProperty(M, k, N);
              }
            });
          }
          return r(this, M), s(M);
        },
        configurable: !0
      }
    );
  }, Yn;
}
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Jn, Do;
function Xl() {
  if (Do)
    return Jn;
  Do = 1;
  var e = ht(), t = ft;
  return Jn = function(s, r, o, i) {
    var a = s.__methods[r], c = a.chainingBehavior;
    a.chainingBehavior = function() {
      var u = i(c).call(this);
      if (u !== void 0)
        return u;
      var f = new e.Assertion();
      return t(this, f), f;
    };
    var l = a.method;
    a.method = function() {
      var u = o(l).apply(this, arguments);
      if (u !== void 0)
        return u;
      var f = new e.Assertion();
      return t(this, f), f;
    };
  }, Jn;
}
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Bo = Pr, Ql = function(t, n) {
  return Bo(t) < Bo(n) ? -1 : 1;
};
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Di = function(t) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(t).filter(function(n) {
    return Object.getOwnPropertyDescriptor(t, n).enumerable;
  });
};
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Zl = Di, ef = function(t) {
  return Object.keys(t).concat(Zl(t));
}, Hn = ki;
function tf(e, t) {
  return t instanceof Error && e === t;
}
function nf(e, t) {
  return t instanceof Error ? e.constructor === t.constructor || e instanceof t.constructor : t.prototype instanceof Error || t === Error ? e.constructor === t || e instanceof t : !1;
}
function rf(e, t) {
  var n = typeof e == "string" ? e : e.message;
  return t instanceof RegExp ? t.test(n) : typeof t == "string" ? n.indexOf(t) !== -1 : !1;
}
function of(e) {
  var t = e;
  if (e instanceof Error)
    t = Hn(e.constructor);
  else if (typeof e == "function" && (t = Hn(e), t === "")) {
    var n = Hn(new e());
    t = n || t;
  }
  return t;
}
function sf(e) {
  var t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
var af = {
  compatibleInstance: tf,
  compatibleConstructor: nf,
  compatibleMessage: rf,
  getMessage: sf,
  getConstructorName: of
};
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function cf(e) {
  return e !== e;
}
var uf = Number.isNaN || cf, lf = Sn, qo = Le;
function ff(e) {
  var t = lf(e), n = ["Array", "Object", "function"];
  return n.indexOf(t) !== -1;
}
var hf = function(t, n) {
  var s = qo(t, "operator"), r = qo(t, "negate"), o = n[3], i = r ? n[2] : n[1];
  if (s)
    return s;
  if (typeof i == "function" && (i = i()), i = i || "", !!i && !/\shave\s/.test(i)) {
    var a = ff(o);
    return /\snot\s/.test(i) ? a ? "notDeepStrictEqual" : "notStrictEqual" : a ? "deepStrictEqual" : "strictEqual";
  }
};
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Lo;
function pf() {
  if (Lo)
    return ue;
  Lo = 1;
  /*!
   * Dependencies that are used for multiple exports are required here only once
   */
  var e = bl;
  /*!
   * test utility
   */
  ue.test = vl;
  /*!
   * type utility
   */
  ue.type = Sn;
  /*!
   * expectTypes utility
   */
  ue.expectTypes = Tl;
  /*!
   * message utility
   */
  ue.getMessage = Il;
  /*!
   * actual utility
   */
  ue.getActual = Ii;
  /*!
   * Inspect util
   */
  ue.inspect = Pr;
  /*!
   * Object Display util
   */
  ue.objDisplay = Ni;
  /*!
   * Flag utility
   */
  ue.flag = Le;
  /*!
   * Flag transferring utility
   */
  ue.transferFlags = ft;
  /*!
   * Deep equal utility
   */
  ue.eql = Dl;
  /*!
   * Deep path info
   */
  ue.getPathInfo = e.getPathInfo;
  /*!
   * Check if a property exists
   */
  ue.hasProperty = e.hasProperty;
  /*!
   * Function name
   */
  ue.getName = ki;
  /*!
   * add Property
   */
  ue.addProperty = ql();
  /*!
   * add Method
   */
  ue.addMethod = Gl();
  /*!
   * overwrite Property
   */
  ue.overwriteProperty = Yl();
  /*!
   * overwrite Method
   */
  ue.overwriteMethod = Jl();
  /*!
   * Add a chainable method
   */
  ue.addChainableMethod = Hl();
  /*!
   * Overwrite chainable method
   */
  ue.overwriteChainableMethod = Xl();
  /*!
   * Compare by inspect method
   */
  ue.compareByInspect = Ql;
  /*!
   * Get own enumerable property symbols method
   */
  ue.getOwnEnumerablePropertySymbols = Di;
  /*!
   * Get own enumerable properties method
   */
  ue.getOwnEnumerableProperties = ef;
  /*!
   * Checks error against a given set of criteria
   */
  ue.checkError = af;
  /*!
   * Proxify util
   */
  ue.proxify = An;
  /*!
   * addLengthGuard util
   */
  ue.addLengthGuard = On;
  /*!
   * isProxyEnabled helper
   */
  ue.isProxyEnabled = xn;
  /*!
   * isNaN method
   */
  ue.isNaN = uf;
  /*!
   * getOperator method
   */
  return ue.getOperator = hf, ue;
}
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var it = Mt, df = function(e, t) {
  /*!
   * Module dependencies.
   */
  var n = e.AssertionError, s = t.flag;
  /*!
   * Module export.
   */
  e.Assertion = r;
  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * - `eql`: This flag contains the deepEqual function to be used by the assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
  function r(o, i, a, c) {
    return s(this, "ssfi", a || r), s(this, "lockSsfi", c), s(this, "object", o), s(this, "message", i), s(this, "eql", it.deepEqual || t.eql), t.proxify(this);
  }
  Object.defineProperty(r, "includeStack", {
    get: function() {
      return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), it.includeStack;
    },
    set: function(o) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), it.includeStack = o;
    }
  }), Object.defineProperty(r, "showDiff", {
    get: function() {
      return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), it.showDiff;
    },
    set: function(o) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), it.showDiff = o;
    }
  }), r.addProperty = function(o, i) {
    t.addProperty(this.prototype, o, i);
  }, r.addMethod = function(o, i) {
    t.addMethod(this.prototype, o, i);
  }, r.addChainableMethod = function(o, i, a) {
    t.addChainableMethod(this.prototype, o, i, a);
  }, r.overwriteProperty = function(o, i) {
    t.overwriteProperty(this.prototype, o, i);
  }, r.overwriteMethod = function(o, i) {
    t.overwriteMethod(this.prototype, o, i);
  }, r.overwriteChainableMethod = function(o, i, a) {
    t.overwriteChainableMethod(this.prototype, o, i, a);
  }, r.prototype.assert = function(o, i, a, c, l, h) {
    var u = t.test(this, arguments);
    if (h !== !1 && (h = !0), c === void 0 && l === void 0 && (h = !1), it.showDiff !== !0 && (h = !1), !u) {
      i = t.getMessage(this, arguments);
      var f = t.getActual(this, arguments), w = {
        actual: f,
        expected: c,
        showDiff: h
      }, b = t.getOperator(this, arguments);
      throw b && (w.operator = b), new n(
        i,
        w,
        it.includeStack ? this.assert : s(this, "ssfi")
      );
    }
  };
  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
  Object.defineProperty(
    r.prototype,
    "_obj",
    {
      get: function() {
        return s(this, "object");
      },
      set: function(o) {
        s(this, "object", o);
      }
    }
  );
};
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var mf = function(e, t) {
  var n = e.Assertion, s = e.AssertionError, r = t.flag;
  [
    "to",
    "be",
    "been",
    "is",
    "and",
    "has",
    "have",
    "with",
    "that",
    "which",
    "at",
    "of",
    "same",
    "but",
    "does",
    "still",
    "also"
  ].forEach(function(p) {
    n.addProperty(p);
  }), n.addProperty("not", function() {
    r(this, "negate", !0);
  }), n.addProperty("deep", function() {
    r(this, "deep", !0);
  }), n.addProperty("nested", function() {
    r(this, "nested", !0);
  }), n.addProperty("own", function() {
    r(this, "own", !0);
  }), n.addProperty("ordered", function() {
    r(this, "ordered", !0);
  }), n.addProperty("any", function() {
    r(this, "any", !0), r(this, "all", !1);
  }), n.addProperty("all", function() {
    r(this, "all", !0), r(this, "any", !1);
  });
  function o(p, T) {
    T && r(this, "message", T), p = p.toLowerCase();
    var x = r(this, "object"), $ = ~["a", "e", "i", "o", "u"].indexOf(p.charAt(0)) ? "an " : "a ";
    this.assert(
      p === t.type(x).toLowerCase(),
      "expected #{this} to be " + $ + p,
      "expected #{this} not to be " + $ + p
    );
  }
  n.addChainableMethod("an", o), n.addChainableMethod("a", o);
  function i(p, T) {
    return t.isNaN(p) && t.isNaN(T) || p === T;
  }
  function a() {
    r(this, "contains", !0);
  }
  function c(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = t.type(x).toLowerCase(), I = r(this, "message"), R = r(this, "negate"), _ = r(this, "ssfi"), O = r(this, "deep"), L = O ? "deep " : "", K = O ? r(this, "eql") : i;
    I = I ? I + ": " : "";
    var J = !1;
    switch ($) {
      case "string":
        J = x.indexOf(p) !== -1;
        break;
      case "weakset":
        if (O)
          throw new s(
            I + "unable to use .deep.include with WeakSet",
            void 0,
            _
          );
        J = x.has(p);
        break;
      case "map":
        x.forEach(function(re) {
          J = J || K(re, p);
        });
        break;
      case "set":
        O ? x.forEach(function(re) {
          J = J || K(re, p);
        }) : J = x.has(p);
        break;
      case "array":
        O ? J = x.some(function(re) {
          return K(re, p);
        }) : J = x.indexOf(p) !== -1;
        break;
      default:
        if (p !== Object(p))
          throw new s(
            I + "the given combination of arguments (" + $ + " and " + t.type(p).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + t.type(p).toLowerCase(),
            void 0,
            _
          );
        var ne = Object.keys(p), te = null, H = 0;
        if (ne.forEach(function(re) {
          var D = new n(x);
          if (t.transferFlags(this, D, !0), r(D, "lockSsfi", !0), !R || ne.length === 1) {
            D.property(re, p[re]);
            return;
          }
          try {
            D.property(re, p[re]);
          } catch (de) {
            if (!t.checkError.compatibleConstructor(de, s))
              throw de;
            te === null && (te = de), H++;
          }
        }, this), R && ne.length > 1 && H === ne.length)
          throw te;
        return;
    }
    this.assert(
      J,
      "expected #{this} to " + L + "include " + t.inspect(p),
      "expected #{this} to not " + L + "include " + t.inspect(p)
    );
  }
  n.addChainableMethod("include", c, a), n.addChainableMethod("contain", c, a), n.addChainableMethod("contains", c, a), n.addChainableMethod("includes", c, a), n.addProperty("ok", function() {
    this.assert(
      r(this, "object"),
      "expected #{this} to be truthy",
      "expected #{this} to be falsy"
    );
  }), n.addProperty("true", function() {
    this.assert(
      r(this, "object") === !0,
      "expected #{this} to be true",
      "expected #{this} to be false",
      !r(this, "negate")
    );
  }), n.addProperty("false", function() {
    this.assert(
      r(this, "object") === !1,
      "expected #{this} to be false",
      "expected #{this} to be true",
      !!r(this, "negate")
    );
  }), n.addProperty("null", function() {
    this.assert(
      r(this, "object") === null,
      "expected #{this} to be null",
      "expected #{this} not to be null"
    );
  }), n.addProperty("undefined", function() {
    this.assert(
      r(this, "object") === void 0,
      "expected #{this} to be undefined",
      "expected #{this} not to be undefined"
    );
  }), n.addProperty("NaN", function() {
    this.assert(
      t.isNaN(r(this, "object")),
      "expected #{this} to be NaN",
      "expected #{this} not to be NaN"
    );
  });
  function l() {
    var p = r(this, "object");
    this.assert(
      p != null,
      "expected #{this} to exist",
      "expected #{this} to not exist"
    );
  }
  n.addProperty("exist", l), n.addProperty("exists", l), n.addProperty("empty", function() {
    var p = r(this, "object"), T = r(this, "ssfi"), x = r(this, "message"), $;
    switch (x = x ? x + ": " : "", t.type(p).toLowerCase()) {
      case "array":
      case "string":
        $ = p.length;
        break;
      case "map":
      case "set":
        $ = p.size;
        break;
      case "weakmap":
      case "weakset":
        throw new s(
          x + ".empty was passed a weak collection",
          void 0,
          T
        );
      case "function":
        var I = x + ".empty was passed a function " + t.getName(p);
        throw new s(I.trim(), void 0, T);
      default:
        if (p !== Object(p))
          throw new s(
            x + ".empty was passed non-string primitive " + t.inspect(p),
            void 0,
            T
          );
        $ = Object.keys(p).length;
    }
    this.assert(
      $ === 0,
      "expected #{this} to be empty",
      "expected #{this} not to be empty"
    );
  });
  function h() {
    var p = r(this, "object"), T = t.type(p);
    this.assert(
      T === "Arguments",
      "expected #{this} to be arguments but got " + T,
      "expected #{this} to not be arguments"
    );
  }
  n.addProperty("arguments", h), n.addProperty("Arguments", h);
  function u(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object");
    if (r(this, "deep")) {
      var $ = r(this, "lockSsfi");
      r(this, "lockSsfi", !0), this.eql(p), r(this, "lockSsfi", $);
    } else
      this.assert(
        p === x,
        "expected #{this} to equal #{exp}",
        "expected #{this} to not equal #{exp}",
        p,
        this._obj,
        !0
      );
  }
  n.addMethod("equal", u), n.addMethod("equals", u), n.addMethod("eq", u);
  function f(p, T) {
    T && r(this, "message", T);
    var x = r(this, "eql");
    this.assert(
      x(p, r(this, "object")),
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      p,
      this._obj,
      !0
    );
  }
  n.addMethod("eql", f), n.addMethod("eqls", f);
  function w(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "doLength"), I = r(this, "message"), R = I ? I + ": " : "", _ = r(this, "ssfi"), O = t.type(x).toLowerCase(), L = t.type(p).toLowerCase(), K, J = !0;
    if ($ && O !== "map" && O !== "set" && new n(x, I, _, !0).to.have.property("length"), !$ && O === "date" && L !== "date")
      K = R + "the argument to above must be a date";
    else if (L !== "number" && ($ || O === "number"))
      K = R + "the argument to above must be a number";
    else if (!$ && O !== "date" && O !== "number") {
      var ne = O === "string" ? "'" + x + "'" : x;
      K = R + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new s(K, void 0, _);
    if ($) {
      var te = "length", H;
      O === "map" || O === "set" ? (te = "size", H = x.size) : H = x.length, this.assert(
        H > p,
        "expected #{this} to have a " + te + " above #{exp} but got #{act}",
        "expected #{this} to not have a " + te + " above #{exp}",
        p,
        H
      );
    } else
      this.assert(
        x > p,
        "expected #{this} to be above #{exp}",
        "expected #{this} to be at most #{exp}",
        p
      );
  }
  n.addMethod("above", w), n.addMethod("gt", w), n.addMethod("greaterThan", w);
  function b(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "doLength"), I = r(this, "message"), R = I ? I + ": " : "", _ = r(this, "ssfi"), O = t.type(x).toLowerCase(), L = t.type(p).toLowerCase(), K, J = !0;
    if ($ && O !== "map" && O !== "set" && new n(x, I, _, !0).to.have.property("length"), !$ && O === "date" && L !== "date")
      K = R + "the argument to least must be a date";
    else if (L !== "number" && ($ || O === "number"))
      K = R + "the argument to least must be a number";
    else if (!$ && O !== "date" && O !== "number") {
      var ne = O === "string" ? "'" + x + "'" : x;
      K = R + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new s(K, void 0, _);
    if ($) {
      var te = "length", H;
      O === "map" || O === "set" ? (te = "size", H = x.size) : H = x.length, this.assert(
        H >= p,
        "expected #{this} to have a " + te + " at least #{exp} but got #{act}",
        "expected #{this} to have a " + te + " below #{exp}",
        p,
        H
      );
    } else
      this.assert(
        x >= p,
        "expected #{this} to be at least #{exp}",
        "expected #{this} to be below #{exp}",
        p
      );
  }
  n.addMethod("least", b), n.addMethod("gte", b), n.addMethod("greaterThanOrEqual", b);
  function E(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "doLength"), I = r(this, "message"), R = I ? I + ": " : "", _ = r(this, "ssfi"), O = t.type(x).toLowerCase(), L = t.type(p).toLowerCase(), K, J = !0;
    if ($ && O !== "map" && O !== "set" && new n(x, I, _, !0).to.have.property("length"), !$ && O === "date" && L !== "date")
      K = R + "the argument to below must be a date";
    else if (L !== "number" && ($ || O === "number"))
      K = R + "the argument to below must be a number";
    else if (!$ && O !== "date" && O !== "number") {
      var ne = O === "string" ? "'" + x + "'" : x;
      K = R + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new s(K, void 0, _);
    if ($) {
      var te = "length", H;
      O === "map" || O === "set" ? (te = "size", H = x.size) : H = x.length, this.assert(
        H < p,
        "expected #{this} to have a " + te + " below #{exp} but got #{act}",
        "expected #{this} to not have a " + te + " below #{exp}",
        p,
        H
      );
    } else
      this.assert(
        x < p,
        "expected #{this} to be below #{exp}",
        "expected #{this} to be at least #{exp}",
        p
      );
  }
  n.addMethod("below", E), n.addMethod("lt", E), n.addMethod("lessThan", E);
  function g(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "doLength"), I = r(this, "message"), R = I ? I + ": " : "", _ = r(this, "ssfi"), O = t.type(x).toLowerCase(), L = t.type(p).toLowerCase(), K, J = !0;
    if ($ && O !== "map" && O !== "set" && new n(x, I, _, !0).to.have.property("length"), !$ && O === "date" && L !== "date")
      K = R + "the argument to most must be a date";
    else if (L !== "number" && ($ || O === "number"))
      K = R + "the argument to most must be a number";
    else if (!$ && O !== "date" && O !== "number") {
      var ne = O === "string" ? "'" + x + "'" : x;
      K = R + "expected " + ne + " to be a number or a date";
    } else
      J = !1;
    if (J)
      throw new s(K, void 0, _);
    if ($) {
      var te = "length", H;
      O === "map" || O === "set" ? (te = "size", H = x.size) : H = x.length, this.assert(
        H <= p,
        "expected #{this} to have a " + te + " at most #{exp} but got #{act}",
        "expected #{this} to have a " + te + " above #{exp}",
        p,
        H
      );
    } else
      this.assert(
        x <= p,
        "expected #{this} to be at most #{exp}",
        "expected #{this} to be above #{exp}",
        p
      );
  }
  n.addMethod("most", g), n.addMethod("lte", g), n.addMethod("lessThanOrEqual", g), n.addMethod("within", function(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "object"), I = r(this, "doLength"), R = r(this, "message"), _ = R ? R + ": " : "", O = r(this, "ssfi"), L = t.type($).toLowerCase(), K = t.type(p).toLowerCase(), J = t.type(T).toLowerCase(), ne, te = !0, H = K === "date" && J === "date" ? p.toISOString() + ".." + T.toISOString() : p + ".." + T;
    if (I && L !== "map" && L !== "set" && new n($, R, O, !0).to.have.property("length"), !I && L === "date" && (K !== "date" || J !== "date"))
      ne = _ + "the arguments to within must be dates";
    else if ((K !== "number" || J !== "number") && (I || L === "number"))
      ne = _ + "the arguments to within must be numbers";
    else if (!I && L !== "date" && L !== "number") {
      var re = L === "string" ? "'" + $ + "'" : $;
      ne = _ + "expected " + re + " to be a number or a date";
    } else
      te = !1;
    if (te)
      throw new s(ne, void 0, O);
    if (I) {
      var D = "length", de;
      L === "map" || L === "set" ? (D = "size", de = $.size) : de = $.length, this.assert(
        de >= p && de <= T,
        "expected #{this} to have a " + D + " within " + H,
        "expected #{this} to not have a " + D + " within " + H
      );
    } else
      this.assert(
        $ >= p && $ <= T,
        "expected #{this} to be within " + H,
        "expected #{this} to not be within " + H
      );
  });
  function M(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "ssfi"), I = r(this, "message");
    try {
      var R = x instanceof p;
    } catch (O) {
      throw O instanceof TypeError ? (I = I ? I + ": " : "", new s(
        I + "The instanceof assertion needs a constructor but " + t.type(p) + " was given.",
        void 0,
        $
      )) : O;
    }
    var _ = t.getName(p);
    _ === null && (_ = "an unnamed constructor"), this.assert(
      R,
      "expected #{this} to be an instance of " + _,
      "expected #{this} to not be an instance of " + _
    );
  }
  n.addMethod("instanceof", M), n.addMethod("instanceOf", M);
  function P(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "nested"), I = r(this, "own"), R = r(this, "message"), _ = r(this, "object"), O = r(this, "ssfi"), L = typeof p;
    if (R = R ? R + ": " : "", $) {
      if (L !== "string")
        throw new s(
          R + "the argument to property must be a string when using nested syntax",
          void 0,
          O
        );
    } else if (L !== "string" && L !== "number" && L !== "symbol")
      throw new s(
        R + "the argument to property must be a string, number, or symbol",
        void 0,
        O
      );
    if ($ && I)
      throw new s(
        R + 'The "nested" and "own" flags cannot be combined.',
        void 0,
        O
      );
    if (_ == null)
      throw new s(
        R + "Target cannot be null or undefined.",
        void 0,
        O
      );
    var K = r(this, "deep"), J = r(this, "negate"), ne = $ ? t.getPathInfo(_, p) : null, te = $ ? ne.value : _[p], H = K ? r(this, "eql") : (de, le) => de === le, re = "";
    K && (re += "deep "), I && (re += "own "), $ && (re += "nested "), re += "property ";
    var D;
    I ? D = Object.prototype.hasOwnProperty.call(_, p) : $ ? D = ne.exists : D = t.hasProperty(_, p), (!J || arguments.length === 1) && this.assert(
      D,
      "expected #{this} to have " + re + t.inspect(p),
      "expected #{this} to not have " + re + t.inspect(p)
    ), arguments.length > 1 && this.assert(
      D && H(T, te),
      "expected #{this} to have " + re + t.inspect(p) + " of #{exp}, but got #{act}",
      "expected #{this} to not have " + re + t.inspect(p) + " of #{act}",
      T,
      te
    ), r(this, "object", te);
  }
  n.addMethod("property", P);
  function F(p, T, x) {
    r(this, "own", !0), P.apply(this, arguments);
  }
  n.addMethod("ownProperty", F), n.addMethod("haveOwnProperty", F);
  function k(p, T, x) {
    typeof T == "string" && (x = T, T = null), x && r(this, "message", x);
    var $ = r(this, "object"), I = Object.getOwnPropertyDescriptor(Object($), p), R = r(this, "eql");
    I && T ? this.assert(
      R(T, I),
      "expected the own property descriptor for " + t.inspect(p) + " on #{this} to match " + t.inspect(T) + ", got " + t.inspect(I),
      "expected the own property descriptor for " + t.inspect(p) + " on #{this} to not match " + t.inspect(T),
      T,
      I,
      !0
    ) : this.assert(
      I,
      "expected #{this} to have an own property descriptor for " + t.inspect(p),
      "expected #{this} to not have an own property descriptor for " + t.inspect(p)
    ), r(this, "object", I);
  }
  n.addMethod("ownPropertyDescriptor", k), n.addMethod("haveOwnPropertyDescriptor", k);
  function N() {
    r(this, "doLength", !0);
  }
  function U(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = t.type(x).toLowerCase(), I = r(this, "message"), R = r(this, "ssfi"), _ = "length", O;
    switch ($) {
      case "map":
      case "set":
        _ = "size", O = x.size;
        break;
      default:
        new n(x, I, R, !0).to.have.property("length"), O = x.length;
    }
    this.assert(
      O == p,
      "expected #{this} to have a " + _ + " of #{exp} but got #{act}",
      "expected #{this} to not have a " + _ + " of #{act}",
      p,
      O
    );
  }
  n.addChainableMethod("length", U, N), n.addChainableMethod("lengthOf", U, N);
  function B(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object");
    this.assert(
      p.exec(x),
      "expected #{this} to match " + p,
      "expected #{this} not to match " + p
    );
  }
  n.addMethod("match", B), n.addMethod("matches", B), n.addMethod("string", function(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "message"), I = r(this, "ssfi");
    new n(x, $, I, !0).is.a("string"), this.assert(
      ~x.indexOf(p),
      "expected #{this} to contain " + t.inspect(p),
      "expected #{this} to not contain " + t.inspect(p)
    );
  });
  function G(p) {
    var T = r(this, "object"), x = t.type(T), $ = t.type(p), I = r(this, "ssfi"), R = r(this, "deep"), _, O = "", L, K = !0, J = r(this, "message");
    J = J ? J + ": " : "";
    var ne = J + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
    if (x === "Map" || x === "Set")
      O = R ? "deeply " : "", L = [], T.forEach(function(me, Ne) {
        L.push(Ne);
      }), $ !== "Array" && (p = Array.prototype.slice.call(arguments));
    else {
      switch (L = t.getOwnEnumerableProperties(T), $) {
        case "Array":
          if (arguments.length > 1)
            throw new s(ne, void 0, I);
          break;
        case "Object":
          if (arguments.length > 1)
            throw new s(ne, void 0, I);
          p = Object.keys(p);
          break;
        default:
          p = Array.prototype.slice.call(arguments);
      }
      p = p.map(function(me) {
        return typeof me == "symbol" ? me : String(me);
      });
    }
    if (!p.length)
      throw new s(J + "keys required", void 0, I);
    var te = p.length, H = r(this, "any"), re = r(this, "all"), D = p, de = R ? r(this, "eql") : (me, Ne) => me === Ne;
    if (!H && !re && (re = !0), H && (K = D.some(function(me) {
      return L.some(function(Ne) {
        return de(me, Ne);
      });
    })), re && (K = D.every(function(me) {
      return L.some(function(Ne) {
        return de(me, Ne);
      });
    }), r(this, "contains") || (K = K && p.length == L.length)), te > 1) {
      p = p.map(function(me) {
        return t.inspect(me);
      });
      var le = p.pop();
      re && (_ = p.join(", ") + ", and " + le), H && (_ = p.join(", ") + ", or " + le);
    } else
      _ = t.inspect(p[0]);
    _ = (te > 1 ? "keys " : "key ") + _, _ = (r(this, "contains") ? "contain " : "have ") + _, this.assert(
      K,
      "expected #{this} to " + O + _,
      "expected #{this} to not " + O + _,
      D.slice(0).sort(t.compareByInspect),
      L.sort(t.compareByInspect),
      !0
    );
  }
  n.addMethod("keys", G), n.addMethod("key", G);
  function ie(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "object"), I = r(this, "ssfi"), R = r(this, "message"), _ = r(this, "negate") || !1;
    new n($, R, I, !0).is.a("function"), (p instanceof RegExp || typeof p == "string") && (T = p, p = null);
    var O;
    try {
      $();
    } catch (le) {
      O = le;
    }
    var L = p === void 0 && T === void 0, K = !!(p && T), J = !1, ne = !1;
    if (L || !L && !_) {
      var te = "an error";
      p instanceof Error ? te = "#{exp}" : p && (te = t.checkError.getConstructorName(p)), this.assert(
        O,
        "expected #{this} to throw " + te,
        "expected #{this} to not throw an error but #{act} was thrown",
        p && p.toString(),
        O instanceof Error ? O.toString() : typeof O == "string" ? O : O && t.checkError.getConstructorName(O)
      );
    }
    if (p && O) {
      if (p instanceof Error) {
        var H = t.checkError.compatibleInstance(O, p);
        H === _ && (K && _ ? J = !0 : this.assert(
          _,
          "expected #{this} to throw #{exp} but #{act} was thrown",
          "expected #{this} to not throw #{exp}" + (O && !_ ? " but #{act} was thrown" : ""),
          p.toString(),
          O.toString()
        ));
      }
      var re = t.checkError.compatibleConstructor(O, p);
      re === _ && (K && _ ? J = !0 : this.assert(
        _,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (O ? " but #{act} was thrown" : ""),
        p instanceof Error ? p.toString() : p && t.checkError.getConstructorName(p),
        O instanceof Error ? O.toString() : O && t.checkError.getConstructorName(O)
      ));
    }
    if (O && T !== void 0 && T !== null) {
      var D = "including";
      T instanceof RegExp && (D = "matching");
      var de = t.checkError.compatibleMessage(O, T);
      de === _ && (K && _ ? ne = !0 : this.assert(
        _,
        "expected #{this} to throw error " + D + " #{exp} but got #{act}",
        "expected #{this} to throw error not " + D + " #{exp}",
        T,
        t.checkError.getMessage(O)
      ));
    }
    J && ne && this.assert(
      _,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (O ? " but #{act} was thrown" : ""),
      p instanceof Error ? p.toString() : p && t.checkError.getConstructorName(p),
      O instanceof Error ? O.toString() : O && t.checkError.getConstructorName(O)
    ), r(this, "object", O);
  }
  n.addMethod("throw", ie), n.addMethod("throws", ie), n.addMethod("Throw", ie);
  function W(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "itself"), I = typeof x == "function" && !$ ? x.prototype[p] : x[p];
    this.assert(
      typeof I == "function",
      "expected #{this} to respond to " + t.inspect(p),
      "expected #{this} to not respond to " + t.inspect(p)
    );
  }
  n.addMethod("respondTo", W), n.addMethod("respondsTo", W), n.addProperty("itself", function() {
    r(this, "itself", !0);
  });
  function Se(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = p(x);
    this.assert(
      $,
      "expected #{this} to satisfy " + t.objDisplay(p),
      "expected #{this} to not satisfy" + t.objDisplay(p),
      !r(this, "negate"),
      $
    );
  }
  n.addMethod("satisfy", Se), n.addMethod("satisfies", Se);
  function we(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "object"), I = r(this, "message"), R = r(this, "ssfi");
    if (new n($, I, R, !0).is.a("number"), typeof p != "number" || typeof T != "number") {
      I = I ? I + ": " : "";
      var _ = T === void 0 ? ", and a delta is required" : "";
      throw new s(
        I + "the arguments to closeTo or approximately must be numbers" + _,
        void 0,
        R
      );
    }
    this.assert(
      Math.abs($ - p) <= T,
      "expected #{this} to be close to " + p + " +/- " + T,
      "expected #{this} not to be close to " + p + " +/- " + T
    );
  }
  n.addMethod("closeTo", we), n.addMethod("approximately", we);
  function Te(p, T, x, $, I) {
    if (!$) {
      if (p.length !== T.length)
        return !1;
      T = T.slice();
    }
    return p.every(function(R, _) {
      if (I)
        return x ? x(R, T[_]) : R === T[_];
      if (!x) {
        var O = T.indexOf(R);
        return O === -1 ? !1 : ($ || T.splice(O, 1), !0);
      }
      return T.some(function(L, K) {
        return x(R, L) ? ($ || T.splice(K, 1), !0) : !1;
      });
    });
  }
  n.addMethod("members", function(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "message"), I = r(this, "ssfi");
    new n(x, $, I, !0).to.be.an("array"), new n(p, $, I, !0).to.be.an("array");
    var R = r(this, "contains"), _ = r(this, "ordered"), O, L, K;
    R ? (O = _ ? "an ordered superset" : "a superset", L = "expected #{this} to be " + O + " of #{exp}", K = "expected #{this} to not be " + O + " of #{exp}") : (O = _ ? "ordered members" : "members", L = "expected #{this} to have the same " + O + " as #{exp}", K = "expected #{this} to not have the same " + O + " as #{exp}");
    var J = r(this, "deep") ? r(this, "eql") : void 0;
    this.assert(
      Te(p, x, J, R, _),
      L,
      K,
      p,
      x,
      !0
    );
  });
  function Oe(p, T) {
    T && r(this, "message", T);
    var x = r(this, "object"), $ = r(this, "message"), I = r(this, "ssfi"), R = r(this, "contains"), _ = r(this, "deep"), O = r(this, "eql");
    new n(p, $, I, !0).to.be.an("array"), R ? this.assert(
      p.some(function(L) {
        return x.indexOf(L) > -1;
      }),
      "expected #{this} to contain one of #{exp}",
      "expected #{this} to not contain one of #{exp}",
      p,
      x
    ) : _ ? this.assert(
      p.some(function(L) {
        return O(x, L);
      }),
      "expected #{this} to deeply equal one of #{exp}",
      "expected #{this} to deeply equal one of #{exp}",
      p,
      x
    ) : this.assert(
      p.indexOf(x) > -1,
      "expected #{this} to be one of #{exp}",
      "expected #{this} to not be one of #{exp}",
      p,
      x
    );
  }
  n.addMethod("oneOf", Oe);
  function _e(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "object"), I = r(this, "message"), R = r(this, "ssfi");
    new n($, I, R, !0).is.a("function");
    var _;
    T ? (new n(p, I, R, !0).to.have.property(T), _ = p[T]) : (new n(p, I, R, !0).is.a("function"), _ = p()), $();
    var O = T == null ? p() : p[T], L = T == null ? _ : "." + T;
    r(this, "deltaMsgObj", L), r(this, "initialDeltaValue", _), r(this, "finalDeltaValue", O), r(this, "deltaBehavior", "change"), r(this, "realDelta", O !== _), this.assert(
      _ !== O,
      "expected " + L + " to change",
      "expected " + L + " to not change"
    );
  }
  n.addMethod("change", _e), n.addMethod("changes", _e);
  function Ae(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "object"), I = r(this, "message"), R = r(this, "ssfi");
    new n($, I, R, !0).is.a("function");
    var _;
    T ? (new n(p, I, R, !0).to.have.property(T), _ = p[T]) : (new n(p, I, R, !0).is.a("function"), _ = p()), new n(_, I, R, !0).is.a("number"), $();
    var O = T == null ? p() : p[T], L = T == null ? _ : "." + T;
    r(this, "deltaMsgObj", L), r(this, "initialDeltaValue", _), r(this, "finalDeltaValue", O), r(this, "deltaBehavior", "increase"), r(this, "realDelta", O - _), this.assert(
      O - _ > 0,
      "expected " + L + " to increase",
      "expected " + L + " to not increase"
    );
  }
  n.addMethod("increase", Ae), n.addMethod("increases", Ae);
  function $e(p, T, x) {
    x && r(this, "message", x);
    var $ = r(this, "object"), I = r(this, "message"), R = r(this, "ssfi");
    new n($, I, R, !0).is.a("function");
    var _;
    T ? (new n(p, I, R, !0).to.have.property(T), _ = p[T]) : (new n(p, I, R, !0).is.a("function"), _ = p()), new n(_, I, R, !0).is.a("number"), $();
    var O = T == null ? p() : p[T], L = T == null ? _ : "." + T;
    r(this, "deltaMsgObj", L), r(this, "initialDeltaValue", _), r(this, "finalDeltaValue", O), r(this, "deltaBehavior", "decrease"), r(this, "realDelta", _ - O), this.assert(
      O - _ < 0,
      "expected " + L + " to decrease",
      "expected " + L + " to not decrease"
    );
  }
  n.addMethod("decrease", $e), n.addMethod("decreases", $e);
  function ke(p, T) {
    T && r(this, "message", T);
    var x = r(this, "deltaMsgObj"), $ = r(this, "initialDeltaValue"), I = r(this, "finalDeltaValue"), R = r(this, "deltaBehavior"), _ = r(this, "realDelta"), O;
    R === "change" ? O = Math.abs(I - $) === Math.abs(p) : O = _ === Math.abs(p), this.assert(
      O,
      "expected " + x + " to " + R + " by " + p,
      "expected " + x + " to not " + R + " by " + p
    );
  }
  n.addMethod("by", ke), n.addProperty("extensible", function() {
    var p = r(this, "object"), T = p === Object(p) && Object.isExtensible(p);
    this.assert(
      T,
      "expected #{this} to be extensible",
      "expected #{this} to not be extensible"
    );
  }), n.addProperty("sealed", function() {
    var p = r(this, "object"), T = p === Object(p) ? Object.isSealed(p) : !0;
    this.assert(
      T,
      "expected #{this} to be sealed",
      "expected #{this} to not be sealed"
    );
  }), n.addProperty("frozen", function() {
    var p = r(this, "object"), T = p === Object(p) ? Object.isFrozen(p) : !0;
    this.assert(
      T,
      "expected #{this} to be frozen",
      "expected #{this} to not be frozen"
    );
  }), n.addProperty("finite", function(p) {
    var T = r(this, "object");
    this.assert(
      typeof T == "number" && isFinite(T),
      "expected #{this} to be a finite number",
      "expected #{this} to not be a finite number"
    );
  });
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var yf = function(e, t) {
  e.expect = function(n, s) {
    return new e.Assertion(n, s);
  }, e.expect.fail = function(n, s, r, o) {
    throw arguments.length < 2 && (r = n, n = void 0), r = r || "expect.fail()", new e.AssertionError(r, {
      actual: n,
      expected: s,
      operator: o
    }, e.expect.fail);
  };
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var gf = function(e, t) {
  var n = e.Assertion;
  function s() {
    function r() {
      return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new n(this.valueOf(), null, r) : new n(this, null, r);
    }
    function o(a) {
      Object.defineProperty(this, "should", {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      });
    }
    Object.defineProperty(Object.prototype, "should", {
      set: o,
      get: r,
      configurable: !0
    });
    var i = {};
    return i.fail = function(a, c, l, h) {
      throw arguments.length < 2 && (l = a, a = void 0), l = l || "should.fail()", new e.AssertionError(l, {
        actual: a,
        expected: c,
        operator: h
      }, i.fail);
    }, i.equal = function(a, c, l) {
      new n(a, l).to.equal(c);
    }, i.Throw = function(a, c, l, h) {
      new n(a, h).to.Throw(c, l);
    }, i.exist = function(a, c) {
      new n(a, c).to.exist;
    }, i.not = {}, i.not.equal = function(a, c, l) {
      new n(a, l).to.not.equal(c);
    }, i.not.Throw = function(a, c, l, h) {
      new n(a, h).to.not.Throw(c, l);
    }, i.not.exist = function(a, c) {
      new n(a, c).to.not.exist;
    }, i.throw = i.Throw, i.not.throw = i.not.Throw, i;
  }
  e.should = s, e.Should = s;
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var bf = function(e, t) {
  /*!
   * Chai dependencies.
   */
  var n = e.Assertion, s = t.flag;
  /*!
   * Module export.
   */
  var r = e.assert = function(o, i) {
    var a = new n(null, null, e.assert, !0);
    a.assert(
      o,
      i,
      "[ negation message unavailable ]"
    );
  };
  r.fail = function(o, i, a, c) {
    throw arguments.length < 2 && (a = o, o = void 0), a = a || "assert.fail()", new e.AssertionError(a, {
      actual: o,
      expected: i,
      operator: c
    }, r.fail);
  }, r.isOk = function(o, i) {
    new n(o, i, r.isOk, !0).is.ok;
  }, r.isNotOk = function(o, i) {
    new n(o, i, r.isNotOk, !0).is.not.ok;
  }, r.equal = function(o, i, a) {
    var c = new n(o, a, r.equal, !0);
    c.assert(
      i == s(c, "object"),
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{act}",
      i,
      o,
      !0
    );
  }, r.notEqual = function(o, i, a) {
    var c = new n(o, a, r.notEqual, !0);
    c.assert(
      i != s(c, "object"),
      "expected #{this} to not equal #{exp}",
      "expected #{this} to equal #{act}",
      i,
      o,
      !0
    );
  }, r.strictEqual = function(o, i, a) {
    new n(o, a, r.strictEqual, !0).to.equal(i);
  }, r.notStrictEqual = function(o, i, a) {
    new n(o, a, r.notStrictEqual, !0).to.not.equal(i);
  }, r.deepEqual = r.deepStrictEqual = function(o, i, a) {
    new n(o, a, r.deepEqual, !0).to.eql(i);
  }, r.notDeepEqual = function(o, i, a) {
    new n(o, a, r.notDeepEqual, !0).to.not.eql(i);
  }, r.isAbove = function(o, i, a) {
    new n(o, a, r.isAbove, !0).to.be.above(i);
  }, r.isAtLeast = function(o, i, a) {
    new n(o, a, r.isAtLeast, !0).to.be.least(i);
  }, r.isBelow = function(o, i, a) {
    new n(o, a, r.isBelow, !0).to.be.below(i);
  }, r.isAtMost = function(o, i, a) {
    new n(o, a, r.isAtMost, !0).to.be.most(i);
  }, r.isTrue = function(o, i) {
    new n(o, i, r.isTrue, !0).is.true;
  }, r.isNotTrue = function(o, i) {
    new n(o, i, r.isNotTrue, !0).to.not.equal(!0);
  }, r.isFalse = function(o, i) {
    new n(o, i, r.isFalse, !0).is.false;
  }, r.isNotFalse = function(o, i) {
    new n(o, i, r.isNotFalse, !0).to.not.equal(!1);
  }, r.isNull = function(o, i) {
    new n(o, i, r.isNull, !0).to.equal(null);
  }, r.isNotNull = function(o, i) {
    new n(o, i, r.isNotNull, !0).to.not.equal(null);
  }, r.isNaN = function(o, i) {
    new n(o, i, r.isNaN, !0).to.be.NaN;
  }, r.isNotNaN = function(o, i) {
    new n(o, i, r.isNotNaN, !0).not.to.be.NaN;
  }, r.exists = function(o, i) {
    new n(o, i, r.exists, !0).to.exist;
  }, r.notExists = function(o, i) {
    new n(o, i, r.notExists, !0).to.not.exist;
  }, r.isUndefined = function(o, i) {
    new n(o, i, r.isUndefined, !0).to.equal(void 0);
  }, r.isDefined = function(o, i) {
    new n(o, i, r.isDefined, !0).to.not.equal(void 0);
  }, r.isFunction = function(o, i) {
    new n(o, i, r.isFunction, !0).to.be.a("function");
  }, r.isNotFunction = function(o, i) {
    new n(o, i, r.isNotFunction, !0).to.not.be.a("function");
  }, r.isObject = function(o, i) {
    new n(o, i, r.isObject, !0).to.be.a("object");
  }, r.isNotObject = function(o, i) {
    new n(o, i, r.isNotObject, !0).to.not.be.a("object");
  }, r.isArray = function(o, i) {
    new n(o, i, r.isArray, !0).to.be.an("array");
  }, r.isNotArray = function(o, i) {
    new n(o, i, r.isNotArray, !0).to.not.be.an("array");
  }, r.isString = function(o, i) {
    new n(o, i, r.isString, !0).to.be.a("string");
  }, r.isNotString = function(o, i) {
    new n(o, i, r.isNotString, !0).to.not.be.a("string");
  }, r.isNumber = function(o, i) {
    new n(o, i, r.isNumber, !0).to.be.a("number");
  }, r.isNotNumber = function(o, i) {
    new n(o, i, r.isNotNumber, !0).to.not.be.a("number");
  }, r.isFinite = function(o, i) {
    new n(o, i, r.isFinite, !0).to.be.finite;
  }, r.isBoolean = function(o, i) {
    new n(o, i, r.isBoolean, !0).to.be.a("boolean");
  }, r.isNotBoolean = function(o, i) {
    new n(o, i, r.isNotBoolean, !0).to.not.be.a("boolean");
  }, r.typeOf = function(o, i, a) {
    new n(o, a, r.typeOf, !0).to.be.a(i);
  }, r.notTypeOf = function(o, i, a) {
    new n(o, a, r.notTypeOf, !0).to.not.be.a(i);
  }, r.instanceOf = function(o, i, a) {
    new n(o, a, r.instanceOf, !0).to.be.instanceOf(i);
  }, r.notInstanceOf = function(o, i, a) {
    new n(o, a, r.notInstanceOf, !0).to.not.be.instanceOf(i);
  }, r.include = function(o, i, a) {
    new n(o, a, r.include, !0).include(i);
  }, r.notInclude = function(o, i, a) {
    new n(o, a, r.notInclude, !0).not.include(i);
  }, r.deepInclude = function(o, i, a) {
    new n(o, a, r.deepInclude, !0).deep.include(i);
  }, r.notDeepInclude = function(o, i, a) {
    new n(o, a, r.notDeepInclude, !0).not.deep.include(i);
  }, r.nestedInclude = function(o, i, a) {
    new n(o, a, r.nestedInclude, !0).nested.include(i);
  }, r.notNestedInclude = function(o, i, a) {
    new n(o, a, r.notNestedInclude, !0).not.nested.include(i);
  }, r.deepNestedInclude = function(o, i, a) {
    new n(o, a, r.deepNestedInclude, !0).deep.nested.include(i);
  }, r.notDeepNestedInclude = function(o, i, a) {
    new n(o, a, r.notDeepNestedInclude, !0).not.deep.nested.include(i);
  }, r.ownInclude = function(o, i, a) {
    new n(o, a, r.ownInclude, !0).own.include(i);
  }, r.notOwnInclude = function(o, i, a) {
    new n(o, a, r.notOwnInclude, !0).not.own.include(i);
  }, r.deepOwnInclude = function(o, i, a) {
    new n(o, a, r.deepOwnInclude, !0).deep.own.include(i);
  }, r.notDeepOwnInclude = function(o, i, a) {
    new n(o, a, r.notDeepOwnInclude, !0).not.deep.own.include(i);
  }, r.match = function(o, i, a) {
    new n(o, a, r.match, !0).to.match(i);
  }, r.notMatch = function(o, i, a) {
    new n(o, a, r.notMatch, !0).to.not.match(i);
  }, r.property = function(o, i, a) {
    new n(o, a, r.property, !0).to.have.property(i);
  }, r.notProperty = function(o, i, a) {
    new n(o, a, r.notProperty, !0).to.not.have.property(i);
  }, r.propertyVal = function(o, i, a, c) {
    new n(o, c, r.propertyVal, !0).to.have.property(i, a);
  }, r.notPropertyVal = function(o, i, a, c) {
    new n(o, c, r.notPropertyVal, !0).to.not.have.property(i, a);
  }, r.deepPropertyVal = function(o, i, a, c) {
    new n(o, c, r.deepPropertyVal, !0).to.have.deep.property(i, a);
  }, r.notDeepPropertyVal = function(o, i, a, c) {
    new n(o, c, r.notDeepPropertyVal, !0).to.not.have.deep.property(i, a);
  }, r.ownProperty = function(o, i, a) {
    new n(o, a, r.ownProperty, !0).to.have.own.property(i);
  }, r.notOwnProperty = function(o, i, a) {
    new n(o, a, r.notOwnProperty, !0).to.not.have.own.property(i);
  }, r.ownPropertyVal = function(o, i, a, c) {
    new n(o, c, r.ownPropertyVal, !0).to.have.own.property(i, a);
  }, r.notOwnPropertyVal = function(o, i, a, c) {
    new n(o, c, r.notOwnPropertyVal, !0).to.not.have.own.property(i, a);
  }, r.deepOwnPropertyVal = function(o, i, a, c) {
    new n(o, c, r.deepOwnPropertyVal, !0).to.have.deep.own.property(i, a);
  }, r.notDeepOwnPropertyVal = function(o, i, a, c) {
    new n(o, c, r.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(i, a);
  }, r.nestedProperty = function(o, i, a) {
    new n(o, a, r.nestedProperty, !0).to.have.nested.property(i);
  }, r.notNestedProperty = function(o, i, a) {
    new n(o, a, r.notNestedProperty, !0).to.not.have.nested.property(i);
  }, r.nestedPropertyVal = function(o, i, a, c) {
    new n(o, c, r.nestedPropertyVal, !0).to.have.nested.property(i, a);
  }, r.notNestedPropertyVal = function(o, i, a, c) {
    new n(o, c, r.notNestedPropertyVal, !0).to.not.have.nested.property(i, a);
  }, r.deepNestedPropertyVal = function(o, i, a, c) {
    new n(o, c, r.deepNestedPropertyVal, !0).to.have.deep.nested.property(i, a);
  }, r.notDeepNestedPropertyVal = function(o, i, a, c) {
    new n(o, c, r.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(i, a);
  }, r.lengthOf = function(o, i, a) {
    new n(o, a, r.lengthOf, !0).to.have.lengthOf(i);
  }, r.hasAnyKeys = function(o, i, a) {
    new n(o, a, r.hasAnyKeys, !0).to.have.any.keys(i);
  }, r.hasAllKeys = function(o, i, a) {
    new n(o, a, r.hasAllKeys, !0).to.have.all.keys(i);
  }, r.containsAllKeys = function(o, i, a) {
    new n(o, a, r.containsAllKeys, !0).to.contain.all.keys(i);
  }, r.doesNotHaveAnyKeys = function(o, i, a) {
    new n(o, a, r.doesNotHaveAnyKeys, !0).to.not.have.any.keys(i);
  }, r.doesNotHaveAllKeys = function(o, i, a) {
    new n(o, a, r.doesNotHaveAllKeys, !0).to.not.have.all.keys(i);
  }, r.hasAnyDeepKeys = function(o, i, a) {
    new n(o, a, r.hasAnyDeepKeys, !0).to.have.any.deep.keys(i);
  }, r.hasAllDeepKeys = function(o, i, a) {
    new n(o, a, r.hasAllDeepKeys, !0).to.have.all.deep.keys(i);
  }, r.containsAllDeepKeys = function(o, i, a) {
    new n(o, a, r.containsAllDeepKeys, !0).to.contain.all.deep.keys(i);
  }, r.doesNotHaveAnyDeepKeys = function(o, i, a) {
    new n(o, a, r.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(i);
  }, r.doesNotHaveAllDeepKeys = function(o, i, a) {
    new n(o, a, r.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(i);
  }, r.throws = function(o, i, a, c) {
    (typeof i == "string" || i instanceof RegExp) && (a = i, i = null);
    var l = new n(o, c, r.throws, !0).to.throw(i, a);
    return s(l, "object");
  }, r.doesNotThrow = function(o, i, a, c) {
    (typeof i == "string" || i instanceof RegExp) && (a = i, i = null), new n(o, c, r.doesNotThrow, !0).to.not.throw(i, a);
  }, r.operator = function(o, i, a, c) {
    var l;
    switch (i) {
      case "==":
        l = o == a;
        break;
      case "===":
        l = o === a;
        break;
      case ">":
        l = o > a;
        break;
      case ">=":
        l = o >= a;
        break;
      case "<":
        l = o < a;
        break;
      case "<=":
        l = o <= a;
        break;
      case "!=":
        l = o != a;
        break;
      case "!==":
        l = o !== a;
        break;
      default:
        throw c = c && c + ": ", new e.AssertionError(
          c + 'Invalid operator "' + i + '"',
          void 0,
          r.operator
        );
    }
    var h = new n(l, c, r.operator, !0);
    h.assert(
      s(h, "object") === !0,
      "expected " + t.inspect(o) + " to be " + i + " " + t.inspect(a),
      "expected " + t.inspect(o) + " to not be " + i + " " + t.inspect(a)
    );
  }, r.closeTo = function(o, i, a, c) {
    new n(o, c, r.closeTo, !0).to.be.closeTo(i, a);
  }, r.approximately = function(o, i, a, c) {
    new n(o, c, r.approximately, !0).to.be.approximately(i, a);
  }, r.sameMembers = function(o, i, a) {
    new n(o, a, r.sameMembers, !0).to.have.same.members(i);
  }, r.notSameMembers = function(o, i, a) {
    new n(o, a, r.notSameMembers, !0).to.not.have.same.members(i);
  }, r.sameDeepMembers = function(o, i, a) {
    new n(o, a, r.sameDeepMembers, !0).to.have.same.deep.members(i);
  }, r.notSameDeepMembers = function(o, i, a) {
    new n(o, a, r.notSameDeepMembers, !0).to.not.have.same.deep.members(i);
  }, r.sameOrderedMembers = function(o, i, a) {
    new n(o, a, r.sameOrderedMembers, !0).to.have.same.ordered.members(i);
  }, r.notSameOrderedMembers = function(o, i, a) {
    new n(o, a, r.notSameOrderedMembers, !0).to.not.have.same.ordered.members(i);
  }, r.sameDeepOrderedMembers = function(o, i, a) {
    new n(o, a, r.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(i);
  }, r.notSameDeepOrderedMembers = function(o, i, a) {
    new n(o, a, r.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(i);
  }, r.includeMembers = function(o, i, a) {
    new n(o, a, r.includeMembers, !0).to.include.members(i);
  }, r.notIncludeMembers = function(o, i, a) {
    new n(o, a, r.notIncludeMembers, !0).to.not.include.members(i);
  }, r.includeDeepMembers = function(o, i, a) {
    new n(o, a, r.includeDeepMembers, !0).to.include.deep.members(i);
  }, r.notIncludeDeepMembers = function(o, i, a) {
    new n(o, a, r.notIncludeDeepMembers, !0).to.not.include.deep.members(i);
  }, r.includeOrderedMembers = function(o, i, a) {
    new n(o, a, r.includeOrderedMembers, !0).to.include.ordered.members(i);
  }, r.notIncludeOrderedMembers = function(o, i, a) {
    new n(o, a, r.notIncludeOrderedMembers, !0).to.not.include.ordered.members(i);
  }, r.includeDeepOrderedMembers = function(o, i, a) {
    new n(o, a, r.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(i);
  }, r.notIncludeDeepOrderedMembers = function(o, i, a) {
    new n(o, a, r.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(i);
  }, r.oneOf = function(o, i, a) {
    new n(o, a, r.oneOf, !0).to.be.oneOf(i);
  }, r.changes = function(o, i, a, c) {
    arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(o, c, r.changes, !0).to.change(i, a);
  }, r.changesBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(o, l, r.changesBy, !0).to.change(i, a).by(c);
  }, r.doesNotChange = function(o, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(o, c, r.doesNotChange, !0).to.not.change(i, a);
  }, r.changesButNotBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(o, l, r.changesButNotBy, !0).to.change(i, a).but.not.by(c);
  }, r.increases = function(o, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(o, c, r.increases, !0).to.increase(i, a);
  }, r.increasesBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(o, l, r.increasesBy, !0).to.increase(i, a).by(c);
  }, r.doesNotIncrease = function(o, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(o, c, r.doesNotIncrease, !0).to.not.increase(i, a);
  }, r.increasesButNotBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(o, l, r.increasesButNotBy, !0).to.increase(i, a).but.not.by(c);
  }, r.decreases = function(o, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(o, c, r.decreases, !0).to.decrease(i, a);
  }, r.decreasesBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(o, l, r.decreasesBy, !0).to.decrease(i, a).by(c);
  }, r.doesNotDecrease = function(o, i, a, c) {
    return arguments.length === 3 && typeof i == "function" && (c = a, a = null), new n(o, c, r.doesNotDecrease, !0).to.not.decrease(i, a);
  }, r.doesNotDecreaseBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    return new n(o, l, r.doesNotDecreaseBy, !0).to.not.decrease(i, a).by(c);
  }, r.decreasesButNotBy = function(o, i, a, c, l) {
    if (arguments.length === 4 && typeof i == "function") {
      var h = c;
      c = a, l = h;
    } else
      arguments.length === 3 && (c = a, a = null);
    new n(o, l, r.decreasesButNotBy, !0).to.decrease(i, a).but.not.by(c);
  };
  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
  r.ifError = function(o) {
    if (o)
      throw o;
  }, r.isExtensible = function(o, i) {
    new n(o, i, r.isExtensible, !0).to.be.extensible;
  }, r.isNotExtensible = function(o, i) {
    new n(o, i, r.isNotExtensible, !0).to.not.be.extensible;
  }, r.isSealed = function(o, i) {
    new n(o, i, r.isSealed, !0).to.be.sealed;
  }, r.isNotSealed = function(o, i) {
    new n(o, i, r.isNotSealed, !0).to.not.be.sealed;
  }, r.isFrozen = function(o, i) {
    new n(o, i, r.isFrozen, !0).to.be.frozen;
  }, r.isNotFrozen = function(o, i) {
    new n(o, i, r.isNotFrozen, !0).to.not.be.frozen;
  }, r.isEmpty = function(o, i) {
    new n(o, i, r.isEmpty, !0).to.be.empty;
  }, r.isNotEmpty = function(o, i) {
    new n(o, i, r.isNotEmpty, !0).to.not.be.empty;
  };
  /*!
   * Aliases.
   */
  (function o(i, a) {
    return r[a] = r[i], o;
  })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var zo;
function ht() {
  return zo || (zo = 1, function(e) {
    var t = [];
    /*!
     * Chai version
     */
    e.version = "4.3.8";
    /*!
     * Assertion Error
     */
    e.AssertionError = Mi;
    /*!
     * Utils for plugins (not exported)
     */
    var n = pf();
    e.use = function(l) {
      return ~t.indexOf(l) || (l(e, n), t.push(l)), e;
    };
    /*!
     * Utility Functions
     */
    e.util = n;
    /*!
     * Configuration
     */
    var s = Mt;
    e.config = s;
    /*!
     * Primary `Assertion` prototype
     */
    var r = df;
    e.use(r);
    /*!
     * Core Assertions
     */
    var o = mf;
    e.use(o);
    /*!
     * Expect interface
     */
    var i = yf;
    e.use(i);
    /*!
     * Should interface
     */
    var a = gf;
    e.use(a);
    /*!
     * Assert interface
     */
    var c = bf;
    e.use(c);
  }(qn)), qn;
}
var wf = ht();
const We = /* @__PURE__ */ Oa(wf), Xn = We.expect;
We.version;
We.Assertion;
We.AssertionError;
const mn = We.util;
We.config;
const Jt = We.use;
We.should;
const vf = We.assert;
We.core;
var Kt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ef(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function cn(e, t) {
  if (!e)
    throw new Error(t);
}
function wt(e, t) {
  return typeof t === e;
}
function Sf(e) {
  return e instanceof Promise;
}
function ur(e, t, n) {
  Object.defineProperty(e, t, n);
}
function vt(e, t, n) {
  Object.defineProperty(e, t, { value: n });
}
var qt = Symbol.for("tinyspy:spy"), Tf = /* @__PURE__ */ new Set(), xf = (e) => {
  e.called = !1, e.callCount = 0, e.calls = [], e.results = [], e.next = [];
}, Of = (e) => (ur(e, qt, { value: { reset: () => xf(e[qt]) } }), e[qt]), lr = (e) => e[qt] || Of(e);
function Af(e) {
  cn(wt("function", e) || wt("undefined", e), "cannot spy on a non-function value");
  let t = function(...s) {
    let r = lr(t);
    r.called = !0, r.callCount++, r.calls.push(s);
    let o = r.next.shift();
    if (o) {
      r.results.push(o);
      let [l, h] = o;
      if (l === "ok")
        return h;
      throw h;
    }
    let i, a = "ok";
    if (r.impl)
      try {
        new.target ? i = Reflect.construct(r.impl, s, new.target) : i = r.impl.apply(this, s), a = "ok";
      } catch (l) {
        throw i = l, a = "error", r.results.push([a, l]), l;
      }
    let c = [a, i];
    if (Sf(i)) {
      let l = i.then((h) => c[1] = h).catch((h) => {
        throw c[0] = "error", c[1] = h, h;
      });
      Object.assign(l, i), i = l;
    }
    return r.results.push(c), i;
  };
  vt(t, "_isMockFunction", !0), vt(t, "length", e ? e.length : 0), vt(t, "name", e && e.name || "spy");
  let n = lr(t);
  return n.reset(), n.impl = e, t;
}
var Vo = (e, t) => Object.getOwnPropertyDescriptor(e, t), Wo = (e, t) => {
  t != null && typeof t == "function" && t.prototype != null && Object.setPrototypeOf(e.prototype, t.prototype);
};
function Bi(e, t, n) {
  cn(!wt("undefined", e), "spyOn could not find an object to spy upon"), cn(wt("object", e) || wt("function", e), "cannot spyOn on a primitive value");
  let [s, r] = (() => {
    if (!wt("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  })(), o = Vo(e, s), i = Object.getPrototypeOf(e), a = i && Vo(i, s), c = o || a;
  cn(c || s in e, `${String(s)} does not exist`);
  let l = !1;
  r === "value" && c && !c.value && c.get && (r = "get", l = !0, n = c.get());
  let h;
  c ? h = c[r] : r !== "value" ? h = () => e[s] : h = e[s], n || (n = h);
  let u = Af(n);
  r === "value" && Wo(u, h);
  let f = (E) => {
    let { value: g, ...M } = c || {
      configurable: !0,
      writable: !0
    };
    r !== "value" && delete M.writable, M[r] = E, ur(e, s, M);
  }, w = () => c ? ur(e, s, c) : f(h), b = u[qt];
  return vt(b, "restore", w), vt(b, "getOriginal", () => l ? h() : h), vt(b, "willCall", (E) => (b.impl = E, u)), f(l ? () => (Wo(u, n), u) : u), Tf.add(u), u;
}
const un = /* @__PURE__ */ new Set();
function qi(e) {
  return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction;
}
function Mf(e, t, n) {
  const r = n ? { [{
    get: "getter",
    set: "setter"
  }[n]]: t } : t, o = Bi(e, r);
  return Li(o);
}
let Pf = 0;
function Li(e) {
  const t = e;
  let n, s = [], r = [];
  const o = lr(e), i = {
    get calls() {
      return o.calls;
    },
    get instances() {
      return s;
    },
    get invocationCallOrder() {
      return r;
    },
    get results() {
      return o.results.map(([f, w]) => ({ type: f === "error" ? "throw" : "return", value: w }));
    },
    get lastCall() {
      return o.calls[o.calls.length - 1];
    }
  };
  let a = [], c = !1;
  function l(...f) {
    return s.push(this), r.push(++Pf), (c ? n : a.shift() || n || o.getOriginal() || (() => {
    })).apply(this, f);
  }
  let h = t.name;
  t.getMockName = () => h || "vi.fn()", t.mockName = (f) => (h = f, t), t.mockClear = () => (o.reset(), s = [], r = [], t), t.mockReset = () => (t.mockClear(), n = () => {
  }, a = [], t), t.mockRestore = () => (t.mockReset(), o.restore(), n = void 0, t), t.getMockImplementation = () => n, t.mockImplementation = (f) => (n = f, o.willCall(l), t), t.mockImplementationOnce = (f) => (a.push(f), t);
  function u(f, w) {
    const b = n;
    n = f, o.willCall(l), c = !0;
    const E = () => {
      n = b, c = !1;
    }, g = w();
    return g instanceof Promise ? g.then(() => (E(), t)) : (E(), t);
  }
  return t.withImplementation = u, t.mockReturnThis = () => t.mockImplementation(function() {
    return this;
  }), t.mockReturnValue = (f) => t.mockImplementation(() => f), t.mockReturnValueOnce = (f) => t.mockImplementationOnce(() => f), t.mockResolvedValue = (f) => t.mockImplementation(() => Promise.resolve(f)), t.mockResolvedValueOnce = (f) => t.mockImplementationOnce(() => Promise.resolve(f)), t.mockRejectedValue = (f) => t.mockImplementation(() => Promise.reject(f)), t.mockRejectedValueOnce = (f) => t.mockImplementationOnce(() => Promise.reject(f)), Object.defineProperty(t, "mock", {
    get: () => i
  }), o.willCall(l), un.add(t), t;
}
function $f(e) {
  const t = Li(Bi({ spy: e || (() => {
  }) }, "spy"));
  return e && t.mockImplementation(e), t;
}
const yn = Symbol.for("matchers-object"), Ht = Symbol.for("$$jest-matchers-object"), Xt = Symbol.for("expect-global"), Cr = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, yn)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), n = [], s = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, yn, {
    get: () => e
  }), Object.defineProperty(globalThis, Ht, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[Xt]),
      matchers: t,
      customEqualityTesters: n
    })
  }), Object.defineProperty(globalThis, Cr, {
    get: () => s
  });
}
function Et(e) {
  return globalThis[yn].get(e);
}
function Qn(e, t) {
  const n = globalThis[yn], s = n.get(t) || {};
  Object.assign(s, e), n.set(t, s);
}
function zi() {
  const e = () => Er(), t = e().green, n = e().red, s = e().inverse, r = e().bold, o = e().dim;
  function i(u, f = "received", w = "expected", b = {}) {
    const {
      comment: E = "",
      isDirectExpectCall: g = !1,
      // seems redundant with received === ''
      isNot: M = !1,
      promise: P = "",
      secondArgument: F = "",
      expectedColor: k = t,
      receivedColor: N = n,
      secondArgumentColor: U = t
    } = b;
    let B = "", G = "expect";
    return !g && f !== "" && (B += o(`${G}(`) + N(f), G = ")"), P !== "" && (B += o(`${G}.`) + P, G = ""), M && (B += `${o(`${G}.`)}not`, G = ""), u.includes(".") ? G += u : (B += o(`${G}.`) + u, G = ""), w === "" ? G += "()" : (B += o(`${G}(`) + k(w), F && (B += o(", ") + U(F)), G = ")"), E !== "" && (G += ` // ${E}`), G !== "" && (B += o(G)), B;
  }
  const a = "·", c = (u) => u.replace(/\s+$/gm, (f) => a.repeat(f.length));
  return {
    EXPECTED_COLOR: t,
    RECEIVED_COLOR: n,
    INVERTED_COLOR: s,
    BOLD_WEIGHT: r,
    DIM_COLOR: o,
    matcherHint: i,
    printReceived: (u) => n(c(Ve(u))),
    printExpected: (u) => t(c(Ve(u)))
  };
}
function _f(e) {
  if (!Array.isArray(e))
    throw new TypeError(
      `expect.customEqualityTesters: Must be set to an array of Testers. Was given "${hn(
        e
      )}"`
    );
  globalThis[Ht].customEqualityTesters.push(
    ...e
  );
}
function Ir() {
  return globalThis[Ht].customEqualityTesters;
}
function he(e, t, n, s) {
  return n = n || [], Vi(e, t, [], [], n, s ? Wi : If);
}
function Uo(e) {
  return !!e && typeof e == "object" && "asymmetricMatch" in e && qe("Function", e.asymmetricMatch);
}
function Cf(e, t) {
  const n = Uo(e), s = Uo(t);
  if (!(n && s)) {
    if (n)
      return e.asymmetricMatch(t);
    if (s)
      return t.asymmetricMatch(e);
  }
}
function Vi(e, t, n, s, r, o) {
  let i = !0;
  const a = Cf(e, t);
  if (a !== void 0)
    return a;
  const c = { equals: he };
  for (let b = 0; b < r.length; b++) {
    const E = r[b].call(c, e, t, r);
    if (E !== void 0)
      return E;
  }
  if (e instanceof Error && t instanceof Error)
    return e.message === t.message;
  if (typeof URL == "function" && e instanceof URL && t instanceof URL)
    return e.href === t.href;
  if (Object.is(e, t))
    return !0;
  if (e === null || t === null)
    return e === t;
  const l = Object.prototype.toString.call(e);
  if (l !== Object.prototype.toString.call(t))
    return !1;
  switch (l) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof e != typeof t ? !1 : typeof e != "object" && typeof t != "object" ? Object.is(e, t) : Object.is(e.valueOf(), t.valueOf());
    case "[object Date]": {
      const b = +e, E = +t;
      return b === E || Number.isNaN(b) && Number.isNaN(E);
    }
    case "[object RegExp]":
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != "object" || typeof t != "object")
    return !1;
  if (Go(e) && Go(t))
    return e.isEqualNode(t);
  let h = n.length;
  for (; h--; ) {
    if (n[h] === e)
      return s[h] === t;
    if (s[h] === t)
      return !1;
  }
  if (n.push(e), s.push(t), l === "[object Array]" && e.length !== t.length)
    return !1;
  const u = Ko(e, o);
  let f, w = u.length;
  if (Ko(t, o).length !== w)
    return !1;
  for (; w--; )
    if (f = u[w], i = o(t, f) && Vi(e[f], t[f], n, s, r, o), !i)
      return !1;
  return n.pop(), s.pop(), i;
}
function Ko(e, t) {
  const n = [];
  for (const s in e)
    t(e, s) && n.push(s);
  return n.concat(
    Object.getOwnPropertySymbols(e).filter(
      (s) => Object.getOwnPropertyDescriptor(e, s).enumerable
    )
  );
}
function If(e, t) {
  return Wi(e, t) && e[t] !== void 0;
}
function Wi(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function qe(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function Go(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number" && "nodeName" in e && typeof e.nodeName == "string" && "isEqualNode" in e && typeof e.isEqualNode == "function";
}
const kf = "@@__IMMUTABLE_KEYED__@@", Nf = "@@__IMMUTABLE_SET__@@", Ui = "@@__IMMUTABLE_ORDERED__@@";
function jf(e) {
  return !!(e && e[kf] && !e[Ui]);
}
function Ff(e) {
  return !!(e && e[Nf] && !e[Ui]);
}
const Ki = Symbol.iterator;
function Yo(e) {
  return !!(e != null && e[Ki]);
}
function Ie(e, t, n = [], s = [], r = []) {
  if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !Yo(e) || !Yo(t))
    return;
  if (e.constructor !== t.constructor)
    return !1;
  let o = s.length;
  for (; o--; )
    if (s[o] === e)
      return r[o] === t;
  s.push(e), r.push(t);
  const i = [
    ...n.filter((l) => l !== Ie),
    a
  ];
  function a(l, h) {
    return Ie(
      l,
      h,
      [...i],
      [...s],
      [...r]
    );
  }
  if (e.size !== void 0) {
    if (e.size !== t.size)
      return !1;
    if (qe("Set", e) || Ff(e)) {
      let l = !0;
      for (const h of e)
        if (!t.has(h)) {
          let u = !1;
          for (const f of t)
            he(h, f, i) === !0 && (u = !0);
          if (u === !1) {
            l = !1;
            break;
          }
        }
      return s.pop(), r.pop(), l;
    } else if (qe("Map", e) || jf(e)) {
      let l = !0;
      for (const h of e)
        if (!t.has(h[0]) || !he(h[1], t.get(h[0]), i)) {
          let u = !1;
          for (const f of t) {
            const w = he(h[0], f[0], i);
            let b = !1;
            w === !0 && (b = he(h[1], f[1], i)), b === !0 && (u = !0);
          }
          if (u === !1) {
            l = !1;
            break;
          }
        }
      return s.pop(), r.pop(), l;
    }
  }
  const c = t[Ki]();
  for (const l of e) {
    const h = c.next();
    if (h.done || !he(l, h.value, i))
      return !1;
  }
  return c.next().done ? (s.pop(), r.pop(), !0) : !1;
}
function Gi(e, t) {
  return !e || typeof e != "object" || e === Object.prototype ? !1 : Object.prototype.hasOwnProperty.call(e, t) || Gi(Object.getPrototypeOf(e), t);
}
function Jo(e) {
  return yr(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function Qt(e, t, n = []) {
  const s = n.filter((o) => o !== Qt), r = (o = /* @__PURE__ */ new WeakMap()) => (i, a) => {
    if (Jo(a))
      return Object.keys(a).every((c) => {
        if (Jo(a[c])) {
          if (o.has(a[c]))
            return he(i[c], a[c], s);
          o.set(a[c], !0);
        }
        const l = i != null && Gi(i, c) && he(i[c], a[c], [
          ...s,
          r(o)
        ]);
        return o.delete(a[c]), l;
      });
  };
  return r()(e, t);
}
function Ho(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor))
    return !1;
}
function Xo(e, t) {
  let n = e, s = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer))
      return;
    try {
      n = new DataView(e), s = new DataView(t);
    } catch {
      return;
    }
  }
  if (n.byteLength !== s.byteLength)
    return !1;
  for (let r = 0; r < n.byteLength; r++)
    if (n.getUint8(r) !== s.getUint8(r))
      return !1;
  return !0;
}
function fr(e, t, n = []) {
  if (!Array.isArray(e) || !Array.isArray(t))
    return;
  const s = Object.keys(e), r = Object.keys(t), o = n.filter((i) => i !== fr);
  return he(e, t, o, !0) && he(s, r);
}
function Rf(e, t = "#{this}", n = "#{exp}") {
  const s = `expected ${t} to be ${n} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(e) ? `${s}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
` : s;
}
function Df(e, t) {
  return `${t} ${e}${t === 1 ? "" : "s"}`;
}
let ot = class {
  constructor(t, n = !1) {
    // should have "jest" to be compatible with its ecosystem
    oe(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
    this.sample = t, this.inverse = n;
  }
  getMatcherContext(t) {
    return {
      ...Et(t || globalThis[Xt]),
      equals: he,
      isNot: this.inverse,
      customTesters: Ir(),
      utils: {
        ...zi(),
        diff: Ut,
        stringify: Ve,
        iterableEquality: Ie,
        subsetEquality: Qt
      }
    };
  }
  // implement custom chai/loupe inspect for better AssertionError.message formatting
  // https://github.com/chaijs/loupe/blob/9b8a6deabcd50adc056a64fb705896194710c5c6/src/index.ts#L29
  [Symbol.for("chai/inspect")](t) {
    const n = Ve(this, t.depth, { min: !0 });
    return n.length <= t.truncate ? n : `${this.toString()}{…}`;
  }
};
class Qo extends ot {
  constructor(t, n = !1) {
    if (!qe("String", t))
      throw new Error("Expected is not a string");
    super(t, n);
  }
  asymmetricMatch(t) {
    const n = qe("String", t) && t.includes(this.sample);
    return this.inverse ? !n : n;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class Bf extends ot {
  asymmetricMatch(t) {
    return t != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class Zo extends ot {
  constructor(t, n = !1) {
    super(t, n);
  }
  getPrototype(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.constructor.prototype === t ? null : t.constructor.prototype;
  }
  hasProperty(t, n) {
    return t ? Object.prototype.hasOwnProperty.call(t, n) ? !0 : this.hasProperty(this.getPrototype(t), n) : !1;
  }
  asymmetricMatch(t) {
    if (typeof this.sample != "object")
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    let n = !0;
    const s = this.getMatcherContext();
    for (const r in this.sample)
      if (!this.hasProperty(t, r) || !he(this.sample[r], t[r], s.customTesters)) {
        n = !1;
        break;
      }
    return this.inverse ? !n : n;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class es extends ot {
  constructor(t, n = !1) {
    super(t, n);
  }
  asymmetricMatch(t) {
    if (!Array.isArray(this.sample))
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    const n = this.getMatcherContext(), s = this.sample.length === 0 || Array.isArray(t) && this.sample.every(
      (r) => t.some((o) => he(r, o, n.customTesters))
    );
    return this.inverse ? !s : s;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class qf extends ot {
  constructor(t) {
    if (typeof t > "u")
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    super(t);
  }
  fnNameFor(t) {
    if (t.name)
      return t.name;
    const s = Function.prototype.toString.call(t).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return s ? s[1] : "<anonymous>";
  }
  asymmetricMatch(t) {
    return this.sample === String ? typeof t == "string" || t instanceof String : this.sample === Number ? typeof t == "number" || t instanceof Number : this.sample === Function ? typeof t == "function" || t instanceof Function : this.sample === Boolean ? typeof t == "boolean" || t instanceof Boolean : this.sample === BigInt ? typeof t == "bigint" || t instanceof BigInt : this.sample === Symbol ? typeof t == "symbol" || t instanceof Symbol : this.sample === Object ? typeof t == "object" : t instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class ts extends ot {
  constructor(t, n = !1) {
    if (!qe("String", t) && !qe("RegExp", t))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(t), n);
  }
  asymmetricMatch(t) {
    const n = qe("String", t) && this.sample.test(t);
    return this.inverse ? !n : n;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
class ns extends ot {
  constructor(n, s = 2, r = !1) {
    if (!qe("Number", n))
      throw new Error("Expected is not a Number");
    if (!qe("Number", s))
      throw new Error("Precision is not a Number");
    super(n);
    oe(this, "precision");
    this.inverse = r, this.precision = s;
  }
  asymmetricMatch(n) {
    if (!qe("Number", n))
      return !1;
    let s = !1;
    return n === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? s = !0 : s = Math.abs(this.sample - n) < 10 ** -this.precision / 2, this.inverse ? !s : s;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${Df("digit", this.precision)})`
    ].join(" ");
  }
}
const Lf = (e, t) => {
  t.addMethod(
    e.expect,
    "anything",
    () => new Bf()
  ), t.addMethod(
    e.expect,
    "any",
    (n) => new qf(n)
  ), t.addMethod(
    e.expect,
    "stringContaining",
    (n) => new Qo(n)
  ), t.addMethod(
    e.expect,
    "objectContaining",
    (n) => new Zo(n)
  ), t.addMethod(
    e.expect,
    "arrayContaining",
    (n) => new es(n)
  ), t.addMethod(
    e.expect,
    "stringMatching",
    (n) => new ts(n)
  ), t.addMethod(
    e.expect,
    "closeTo",
    (n, s) => new ns(n, s)
  ), e.expect.not = {
    stringContaining: (n) => new Qo(n, !0),
    objectContaining: (n) => new Zo(n, !0),
    arrayContaining: (n) => new es(n, !0),
    stringMatching: (n) => new ts(n, !0),
    closeTo: (n, s) => new ns(n, s, !0)
  };
};
function rs(e, t) {
  return e && t instanceof Promise && (t = t.finally(() => {
    const n = e.promises.indexOf(t);
    n !== -1 && e.promises.splice(n, 1);
  }), e.promises || (e.promises = []), e.promises.push(t)), t;
}
function Yi(e, t) {
  return function(...n) {
    var s;
    const r = e.flag(this, "vitest-test");
    if (!(r != null && r.context._local ? r.context.expect.getState() : Et(globalThis[Xt])).soft)
      return t.apply(this, n);
    if (!r)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      return t.apply(this, n);
    } catch (i) {
      r.result || (r.result = { state: "fail" }), r.result.state = "fail", (s = r.result).errors || (s.errors = []), r.result.errors.push(Ru(i));
    }
  };
}
const zf = (e, t) => {
  const { AssertionError: n } = e, s = () => Er(), r = Ir();
  function o(u, f) {
    const w = (b) => {
      const E = Yi(t, f);
      t.addMethod(e.Assertion.prototype, b, E), t.addMethod(globalThis[Ht].matchers, b, E);
    };
    Array.isArray(u) ? u.forEach((b) => w(b)) : w(u);
  }
  ["throw", "throws", "Throw"].forEach((u) => {
    t.overwriteMethod(e.Assertion.prototype, u, (f) => function(...w) {
      const b = t.flag(this, "promise"), E = t.flag(this, "object"), g = t.flag(this, "negate");
      if (b === "rejects")
        t.flag(this, "object", () => {
          throw E;
        });
      else if (b === "resolves" && typeof E != "function") {
        if (g)
          return;
        {
          const M = t.flag(this, "message") || "expected promise to throw an error, but it didn't", P = {
            showDiff: !1
          };
          throw new n(M, P, t.flag(this, "ssfi"));
        }
      }
      f.apply(this, w);
    });
  }), o("withTest", function(u) {
    return t.flag(this, "vitest-test", u), this;
  }), o("toEqual", function(u) {
    const f = t.flag(this, "object"), w = he(
      f,
      u,
      [...r, Ie]
    );
    return this.assert(
      w,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      u,
      f
    );
  }), o("toStrictEqual", function(u) {
    const f = t.flag(this, "object"), w = he(
      f,
      u,
      [
        ...r,
        Ie,
        Ho,
        fr,
        Xo
      ],
      !0
    );
    return this.assert(
      w,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      u,
      f
    );
  }), o("toBe", function(u) {
    const f = this._obj, w = Object.is(f, u);
    let b = "";
    return w || (he(
      f,
      u,
      [
        ...r,
        Ie,
        Ho,
        fr,
        Xo
      ],
      !0
    ) ? b = "toStrictEqual" : he(
      f,
      u,
      [...r, Ie]
    ) && (b = "toEqual")), this.assert(
      w,
      Rf(b),
      "expected #{this} not to be #{exp} // Object.is equality",
      u,
      f
    );
  }), o("toMatchObject", function(u) {
    const f = this._obj;
    return this.assert(
      he(f, u, [...r, Ie, Qt]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      u,
      f
    );
  }), o("toMatch", function(u) {
    return typeof u == "string" ? this.include(u) : this.match(u);
  }), o("toContain", function(u) {
    const f = this._obj;
    if (typeof Node < "u" && f instanceof Node) {
      if (!(u instanceof Node))
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof u}`);
      return this.assert(
        f.contains(u),
        "expected #{this} to contain element #{exp}",
        "expected #{this} not to contain element #{exp}",
        u,
        f
      );
    }
    if (typeof DOMTokenList < "u" && f instanceof DOMTokenList) {
      ze(u, "class name", ["string"]);
      const b = t.flag(this, "negate") ? f.value.replace(u, "").trim() : `${f.value} ${u}`;
      return this.assert(
        f.contains(u),
        `expected "${f.value}" to contain "${u}"`,
        `expected "${f.value}" not to contain "${u}"`,
        b,
        f.value
      );
    }
    return f != null && typeof f != "string" && t.flag(this, "object", Array.from(f)), this.contain(u);
  }), o("toContainEqual", function(u) {
    const f = t.flag(this, "object"), w = Array.from(f).findIndex((b) => he(b, u, r));
    this.assert(
      w !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      u
    );
  }), o("toBeTruthy", function() {
    const u = t.flag(this, "object");
    this.assert(
      !!u,
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      u,
      !1
    );
  }), o("toBeFalsy", function() {
    const u = t.flag(this, "object");
    this.assert(
      !u,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      u,
      !1
    );
  }), o("toBeGreaterThan", function(u) {
    const f = this._obj;
    return ze(f, "actual", ["number", "bigint"]), ze(u, "expected", ["number", "bigint"]), this.assert(
      f > u,
      `expected ${f} to be greater than ${u}`,
      `expected ${f} to be not greater than ${u}`,
      f,
      u,
      !1
    );
  }), o("toBeGreaterThanOrEqual", function(u) {
    const f = this._obj;
    return ze(f, "actual", ["number", "bigint"]), ze(u, "expected", ["number", "bigint"]), this.assert(
      f >= u,
      `expected ${f} to be greater than or equal to ${u}`,
      `expected ${f} to be not greater than or equal to ${u}`,
      f,
      u,
      !1
    );
  }), o("toBeLessThan", function(u) {
    const f = this._obj;
    return ze(f, "actual", ["number", "bigint"]), ze(u, "expected", ["number", "bigint"]), this.assert(
      f < u,
      `expected ${f} to be less than ${u}`,
      `expected ${f} to be not less than ${u}`,
      f,
      u,
      !1
    );
  }), o("toBeLessThanOrEqual", function(u) {
    const f = this._obj;
    return ze(f, "actual", ["number", "bigint"]), ze(u, "expected", ["number", "bigint"]), this.assert(
      f <= u,
      `expected ${f} to be less than or equal to ${u}`,
      `expected ${f} to be not less than or equal to ${u}`,
      f,
      u,
      !1
    );
  }), o("toBeNaN", function() {
    return this.be.NaN;
  }), o("toBeUndefined", function() {
    return this.be.undefined;
  }), o("toBeNull", function() {
    return this.be.null;
  }), o("toBeDefined", function() {
    const u = t.flag(this, "negate");
    return t.flag(this, "negate", !1), u ? this.be.undefined : this.not.be.undefined;
  }), o("toBeTypeOf", function(u) {
    const f = typeof this._obj, w = u === f;
    return this.assert(
      w,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      u,
      f
    );
  }), o("toBeInstanceOf", function(u) {
    return this.instanceOf(u);
  }), o("toHaveLength", function(u) {
    return this.have.length(u);
  }), o("toHaveProperty", function(...u) {
    Array.isArray(u[0]) && (u[0] = u[0].map((k) => String(k).replace(/([.[\]])/g, "\\$1")).join("."));
    const f = this._obj, [w, b] = u, E = () => Object.prototype.hasOwnProperty.call(f, w) ? { value: f[w], exists: !0 } : t.getPathInfo(f, w), { value: g, exists: M } = E(), P = M && (u.length === 1 || he(b, g, r)), F = u.length === 1 ? "" : ` with value ${t.objDisplay(b)}`;
    return this.assert(
      P,
      `expected #{this} to have property "${w}"${F}`,
      `expected #{this} to not have property "${w}"${F}`,
      b,
      M ? g : void 0
    );
  }), o("toBeCloseTo", function(u, f = 2) {
    const w = this._obj;
    let b = !1, E = 0, g = 0;
    return u === Number.POSITIVE_INFINITY && w === Number.POSITIVE_INFINITY || u === Number.NEGATIVE_INFINITY && w === Number.NEGATIVE_INFINITY ? b = !0 : (E = 10 ** -f / 2, g = Math.abs(w - u), b = g < E), this.assert(
      b,
      `expected #{this} to be close to #{exp}, received difference is ${g}, but expected ${E}`,
      `expected #{this} to not be close to #{exp}, received difference is ${g}, but expected ${E}`,
      u,
      w,
      !1
    );
  });
  const i = (u) => {
    if (!qi(u._obj))
      throw new TypeError(`${t.inspect(u._obj)} is not a spy or a call to a spy!`);
  }, a = (u) => (i(u), u._obj), c = (u) => {
    const f = u % 10, w = u % 100;
    return f === 1 && w !== 11 ? `${u}st` : f === 2 && w !== 12 ? `${u}nd` : f === 3 && w !== 13 ? `${u}rd` : `${u}th`;
  }, l = (u, f, w) => (u.mock.calls && (f += s().gray(`

Received: 

${u.mock.calls.map((b, E) => {
    let g = s().bold(`  ${c(E + 1)} ${u.getMockName()} call:

`);
    return w ? g += Ut(w, b, { omitAnnotationLines: !0 }) : g += Ve(b).split(`
`).map((M) => `    ${M}`).join(`
`), g += `
`, g;
  }).join(`
`)}`)), f += s().gray(`

Number of calls: ${s().bold(u.mock.calls.length)}
`), f), h = (u, f, w) => (f += s().gray(`

Received: 

${u.mock.results.map((b, E) => {
    let g = s().bold(`  ${c(E + 1)} ${u.getMockName()} call return:

`);
    return w ? g += Ut(w, b.value, { omitAnnotationLines: !0 }) : g += Ve(b).split(`
`).map((M) => `    ${M}`).join(`
`), g += `
`, g;
  }).join(`
`)}`), f += s().gray(`

Number of calls: ${s().bold(u.mock.calls.length)}
`), f);
  o(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(u) {
    const f = a(this), w = f.getMockName(), b = f.mock.calls.length;
    return this.assert(
      b === u,
      `expected "${w}" to be called #{exp} times, but got ${b} times`,
      `expected "${w}" to not be called #{exp} times`,
      u,
      b,
      !1
    );
  }), o("toHaveBeenCalledOnce", function() {
    const u = a(this), f = u.getMockName(), w = u.mock.calls.length;
    return this.assert(
      w === 1,
      `expected "${f}" to be called once, but got ${w} times`,
      `expected "${f}" to not be called once`,
      1,
      w,
      !1
    );
  }), o(["toHaveBeenCalled", "toBeCalled"], function() {
    const u = a(this), f = u.getMockName(), w = u.mock.calls.length, b = w > 0, E = t.flag(this, "negate");
    let g = t.getMessage(
      this,
      [
        b,
        `expected "${f}" to be called at least once`,
        `expected "${f}" to not be called at all, but actually been called ${w} times`,
        !0,
        b
      ]
    );
    if (b && E && (g = l(u, g)), b && E || !b && !E)
      throw new n(g);
  }), o(["toHaveBeenCalledWith", "toBeCalledWith"], function(...u) {
    const f = a(this), w = f.getMockName(), b = f.mock.calls.some((M) => he(M, u, [...r, Ie])), E = t.flag(this, "negate"), g = t.getMessage(
      this,
      [
        b,
        `expected "${w}" to be called with arguments: #{exp}`,
        `expected "${w}" to not be called with arguments: #{exp}`,
        u
      ]
    );
    if (b && E || !b && !E)
      throw new n(l(f, g, u));
  }), o(["toHaveBeenNthCalledWith", "nthCalledWith"], function(u, ...f) {
    const w = a(this), b = w.getMockName(), E = w.mock.calls[u - 1];
    this.assert(
      he(E, f, [...r, Ie]),
      `expected ${c(u)} "${b}" call to have been called with #{exp}`,
      `expected ${c(u)} "${b}" call to not have been called with #{exp}`,
      f,
      E
    );
  }), o(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...u) {
    const f = a(this), w = f.getMockName(), b = f.mock.calls[f.mock.calls.length - 1];
    this.assert(
      he(b, u, [...r, Ie]),
      `expected last "${w}" call to have been called with #{exp}`,
      `expected last "${w}" call to not have been called with #{exp}`,
      u,
      b
    );
  }), o(["toThrow", "toThrowError"], function(u) {
    if (typeof u == "string" || typeof u > "u" || u instanceof RegExp)
      return this.throws(u);
    const f = this._obj, w = t.flag(this, "promise"), b = t.flag(this, "negate");
    let E = null;
    if (w === "rejects")
      E = f;
    else if (w === "resolves" && typeof f != "function") {
      if (b)
        return;
      {
        const g = t.flag(this, "message") || "expected promise to throw an error, but it didn't", M = {
          showDiff: !1
        };
        throw new n(g, M, t.flag(this, "ssfi"));
      }
    } else {
      let g = !1;
      try {
        f();
      } catch (M) {
        g = !0, E = M;
      }
      if (!g && !b) {
        const M = t.flag(this, "message") || "expected function to throw an error, but it didn't", P = {
          showDiff: !1
        };
        throw new n(M, P, t.flag(this, "ssfi"));
      }
    }
    if (typeof u == "function") {
      const g = u.name || u.prototype.constructor.name;
      return this.assert(
        E && E instanceof u,
        `expected error to be instance of ${g}`,
        `expected error not to be instance of ${g}`,
        u,
        E
      );
    }
    if (u instanceof Error)
      return this.assert(
        E && u.message === E.message,
        `expected error to have message: ${u.message}`,
        `expected error not to have message: ${u.message}`,
        u.message,
        E && E.message
      );
    if (typeof u == "object" && "asymmetricMatch" in u && typeof u.asymmetricMatch == "function") {
      const g = u;
      return this.assert(
        E && g.asymmetricMatch(E),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        g,
        E
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof u}"`);
  }), o(["toHaveReturned", "toReturn"], function() {
    const u = a(this), f = u.getMockName(), w = u.mock.calls.length > 0 && u.mock.results.some(({ type: b }) => b !== "throw");
    this.assert(
      w,
      `expected "${f}" to be successfully called at least once`,
      `expected "${f}" to not be successfully called`,
      w,
      !w,
      !1
    );
  }), o(["toHaveReturnedTimes", "toReturnTimes"], function(u) {
    const f = a(this), w = f.getMockName(), b = f.mock.results.reduce((E, { type: g }) => g === "throw" ? E : ++E, 0);
    this.assert(
      b === u,
      `expected "${w}" to be successfully called ${u} times`,
      `expected "${w}" to not be successfully called ${u} times`,
      `expected number of returns: ${u}`,
      `received number of returns: ${b}`,
      !1
    );
  }), o(["toHaveReturnedWith", "toReturnWith"], function(u) {
    const f = a(this), w = f.getMockName(), b = f.mock.results.some(({ type: M, value: P }) => M === "return" && he(u, P)), E = t.flag(this, "negate"), g = t.getMessage(
      this,
      [
        b,
        `expected "${w}" to return with: #{exp} at least once`,
        `expected "${w}" to not return with: #{exp}`,
        u
      ]
    );
    if (b && E || !b && !E)
      throw new n(h(f, g, u));
  }), o(["toHaveLastReturnedWith", "lastReturnedWith"], function(u) {
    const f = a(this), w = f.getMockName(), { value: b } = f.mock.results[f.mock.results.length - 1], E = he(b, u);
    this.assert(
      E,
      `expected last "${w}" call to return #{exp}`,
      `expected last "${w}" call to not return #{exp}`,
      u,
      b
    );
  }), o(["toHaveNthReturnedWith", "nthReturnedWith"], function(u, f) {
    const w = a(this), b = w.getMockName(), E = t.flag(this, "negate"), { type: g, value: M } = w.mock.results[u - 1], P = `${c(u)} call`;
    !E && g === "throw" && e.assert.fail(`expected ${P} to return #{exp}, but instead it threw an error`);
    const F = he(M, f);
    this.assert(
      F,
      `expected ${P} "${b}" call to return #{exp}`,
      `expected ${P} "${b}" call to not return #{exp}`,
      f,
      M
    );
  }), o("toSatisfy", function(u, f) {
    return this.be.satisfy(u, f);
  }), t.addProperty(e.Assertion.prototype, "resolves", function() {
    const f = new Error("resolves");
    t.flag(this, "promise", "resolves"), t.flag(this, "error", f);
    const w = t.flag(this, "vitest-test"), b = t.flag(this, "object");
    if (typeof (b == null ? void 0 : b.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof b}'.`);
    const E = new Proxy(this, {
      get: (g, M, P) => {
        const F = Reflect.get(g, M, P);
        return typeof F != "function" ? F instanceof e.Assertion ? E : F : async (...k) => {
          const N = b.then(
            (U) => (t.flag(this, "object", U), F.call(this, ...k)),
            (U) => {
              const B = new n(
                `promise rejected "${t.inspect(U)}" instead of resolving`,
                { showDiff: !1 }
              );
              throw B.cause = U, B.stack = f.stack.replace(f.message, B.message), B;
            }
          );
          return rs(w, N);
        };
      }
    });
    return E;
  }), t.addProperty(e.Assertion.prototype, "rejects", function() {
    const f = new Error("rejects");
    t.flag(this, "promise", "rejects"), t.flag(this, "error", f);
    const w = t.flag(this, "vitest-test"), b = t.flag(this, "object"), E = typeof b == "function" ? b() : b;
    if (typeof (E == null ? void 0 : E.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof E}'.`);
    const g = new Proxy(this, {
      get: (M, P, F) => {
        const k = Reflect.get(M, P, F);
        return typeof k != "function" ? k instanceof e.Assertion ? g : k : async (...N) => {
          const U = E.then(
            (B) => {
              const G = new n(
                `promise resolved "${t.inspect(B)}" instead of rejecting`,
                { showDiff: !0, expected: new Error("rejected promise"), actual: B }
              );
              throw G.stack = f.stack.replace(f.message, G.message), G;
            },
            (B) => (t.flag(this, "object", B), k.call(this, ...N))
          );
          return rs(w, U);
        };
      }
    });
    return g;
  });
};
function Vf(e, t) {
  const n = e._obj, s = mn.flag(e, "negate"), r = mn.flag(e, "promise") || "", o = {
    ...zi(),
    diff: Ut,
    stringify: Ve,
    iterableEquality: Ie,
    subsetEquality: Qt
  };
  return {
    state: {
      ...Et(t),
      customTesters: Ir(),
      isNot: s,
      utils: o,
      promise: r,
      equals: he,
      // needed for built-in jest-snapshots, but we don't use it
      suppressedErrors: []
    },
    isNot: s,
    obj: n
  };
}
class os extends Error {
  constructor(t, n, s) {
    super(t), this.actual = n, this.expected = s;
  }
}
function Wf(e, t) {
  return (n, s) => {
    Object.entries(t).forEach(([r, o]) => {
      function i(...h) {
        const { state: u, isNot: f, obj: w } = Vf(this, e), b = o.call(u, w, ...h);
        if (b && typeof b == "object" && b instanceof Promise)
          return b.then(({ pass: F, message: k, actual: N, expected: U }) => {
            if (F && f || !F && !f)
              throw new os(k(), N, U);
          });
        const { pass: E, message: g, actual: M, expected: P } = b;
        if (E && f || !E && !f)
          throw new os(g(), M, P);
      }
      const a = Yi(s, i);
      s.addMethod(globalThis[Ht].matchers, r, a), s.addMethod(n.Assertion.prototype, r, a);
      class c extends ot {
        constructor(u = !1, ...f) {
          super(f, u);
        }
        asymmetricMatch(u) {
          const { pass: f } = o.call(
            this.getMatcherContext(e),
            u,
            ...this.sample
          );
          return this.inverse ? !f : f;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${r}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      const l = (...h) => new c(!1, ...h);
      Object.defineProperty(e, r, {
        configurable: !0,
        enumerable: !0,
        value: l,
        writable: !0
      }), Object.defineProperty(e.not, r, {
        configurable: !0,
        enumerable: !0,
        value: (...h) => new c(!0, ...h),
        writable: !0
      }), Object.defineProperty(globalThis[Cr], r, {
        configurable: !0,
        enumerable: !0,
        value: l,
        writable: !0
      });
    });
  };
}
const Uf = (e, t) => {
  t.addMethod(e.expect, "extend", (n, s) => {
    e.use(Wf(n, s));
  });
};
function Kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ji = { exports: {} };
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
var ss = function(e, t) {
  var n, s, r = 1, o = 0, i = 0, a = String.alphabet;
  function c(l, h, u) {
    if (u) {
      for (n = h; u = c(l, n), u < 76 && u > 65; )
        ++n;
      return +l.slice(h - 1, n);
    }
    return u = a && a.indexOf(l.charAt(h)), u > -1 ? u + 76 : (u = l.charCodeAt(h) || 0, u < 45 || u > 127 ? u : u < 46 ? 65 : u < 48 ? u - 1 : u < 58 ? u + 18 : u < 65 ? u - 11 : u < 91 ? u + 11 : u < 97 ? u - 37 : u < 123 ? u + 5 : u - 63);
  }
  if ((e += "") != (t += "")) {
    for (; r; )
      if (s = c(e, o++), r = c(t, i++), s < 76 && r < 76 && s > 66 && r > 66 && (s = c(e, o, o), r = c(t, i, o = n), i = n), s != r)
        return s < r ? -1 : 1;
  }
  return 0;
};
try {
  Ji.exports = ss;
} catch {
  String.naturalCompare = ss;
}
var Gf = Ji.exports, Yf = /* @__PURE__ */ Kf(Gf);
function Hi(e) {
  return e != null;
}
function Jf(e) {
  return e === null || typeof e != "function" && typeof e != "object";
}
function ln(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function Hf(e) {
  let t = -1, n = null, s = 0, r = 0, o = null;
  for (; t <= e.length; ) {
    o = e[t], t++;
    const i = e[t];
    if ((i === '"' || i === "'" || i === "`") && o !== "\\" && (n === i ? n = null : n || (n = i)), n || (i === "(" && s++, i === ")" && r++), s && r && s === r)
      return t;
  }
  return null;
}
let Xf = () => "Promise{…}";
try {
  const { getPromiseDetails: e, kPending: t, kRejected: n } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (Xf = (s, r) => {
    const [o, i] = e(s);
    return o === t ? "Promise{<pending>}" : `Promise${o === n ? "!" : ""}{${r.inspect(i, r)}}`;
  });
} catch {
}
let is = !1;
try {
  const e = require("util");
  is = e.inspect ? e.inspect.custom : !1;
} catch {
  is = !1;
}
const kr = /\r?\n/;
function Qf(e, t, n) {
  const s = e.split(kr), r = /\r\n/.test(e) ? 2 : 1;
  let o = 0;
  if (t > s.length)
    return e.length;
  for (let i = 0; i < t - 1; i++)
    o += s[i].length + r;
  return o + n;
}
function Zf(e, t) {
  if (t > e.length)
    throw new Error(
      `offset is longer than source length! offset ${t} > length ${e.length}`
    );
  const n = e.split(kr), s = /\r\n/.test(e) ? 2 : 1;
  let r = 0, o = 0;
  for (; o < n.length; o++) {
    const i = n[o].length + s;
    if (r + i >= t)
      break;
    r += i;
  }
  return o + 1;
}
var Xi;
Xi = /\r?\n|[\r\u2028\u2029]/y;
RegExp(Xi.source);
var Qi = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(Qi.keyword);
new Set(Qi.strict);
const eh = (e, t, n, s, r, o) => {
  const i = e.getMockName(), a = i === "vi.fn()" ? "" : ` ${i}`;
  let c = "";
  if (e.mock.calls.length !== 0) {
    const l = n + t.indent;
    c = ` {${t.spacingOuter}${l}"calls": ${o(e.mock.calls, t, l, s, r)}${t.min ? ", " : ","}${t.spacingOuter}${l}"results": ${o(e.mock.results, t, l, s, r)}${t.min ? "" : ","}${t.spacingOuter}${n}}`;
  }
  return `[MockFunction${a}]${c}`;
}, th = (e) => e && !!e._isMockFunction, nh = { serialize: eh, test: th }, {
  DOMCollection: rh,
  DOMElement: oh,
  Immutable: sh,
  ReactElement: ih,
  ReactTestComponent: ah,
  AsymmetricMatcher: ch
} = vn;
let hr = [
  ah,
  ih,
  oh,
  rh,
  sh,
  ch,
  nh
];
function uh(e) {
  hr = [e].concat(hr);
}
function lh() {
  return hr;
}
function fh(e, t) {
  return `${e} ${t}`;
}
function hh(e) {
  if (!/ \d+$/.test(e))
    throw new Error("Snapshot keys must end with a number.");
  return e.replace(/ \d+$/, "");
}
function ph(e, t) {
  const n = t.updateSnapshot, s = /* @__PURE__ */ Object.create(null);
  let r = "", o = !1;
  if (e != null)
    try {
      r = e, new Function("exports", r)(s);
    } catch {
    }
  return (n === "all" || n === "new") && r && (o = !0), { data: s, dirty: o };
}
function dh(e) {
  return e.includes(`
`) ? `
${e}
` : e;
}
function as(e) {
  return e.length > 2 && e.startsWith(`
`) && e.endsWith(`
`) ? e.slice(1, -1) : e;
}
const mh = !0, yh = !1;
function gh(e, t = 2, n = {}) {
  return Nr(
    Be(e, {
      escapeRegex: mh,
      indent: t,
      plugins: lh(),
      printFunctionName: yh,
      ...n
    })
  );
}
function bh(e) {
  return e.replace(/`|\\|\${/g, "\\$&");
}
function cs(e) {
  return `\`${bh(e)}\``;
}
function Nr(e) {
  return e.replace(/\r\n|\r/g, `
`);
}
async function wh(e, t, n) {
  const s = Object.keys(t).sort(Yf).map(
    (a) => `exports[${cs(a)}] = ${cs(Nr(t[a]))};`
  ), r = `${e.getHeader()}

${s.join(`

`)}
`, o = await e.readSnapshotFile(n);
  o != null && o === r || await e.saveSnapshotFile(
    n,
    r
  );
}
function us(e) {
  function t() {
    var r, o;
    const i = /^( +)}\s+$/m.exec(e || ""), a = (r = i == null ? void 0 : i[1]) == null ? void 0 : r.length;
    if (a)
      return a;
    const c = /^\n( +)"/.exec(e || "");
    return ((o = c == null ? void 0 : c[1]) == null ? void 0 : o.length) || 0;
  }
  const n = t();
  let s = e == null ? void 0 : e.trim();
  return n && (s = s == null ? void 0 : s.replace(new RegExp(`^${" ".repeat(n)}`, "gm"), "").replace(/ +}$/, "}")), s;
}
function pr(e = [], t = []) {
  const n = Array.from(e);
  return t.forEach((s, r) => {
    const o = n[r];
    Array.isArray(e[r]) ? n[r] = pr(e[r], s) : ln(o) ? n[r] = jr(e[r], s) : n[r] = s;
  }), n;
}
function jr(e, t) {
  if (ln(e) && ln(t)) {
    const n = { ...e };
    return Object.keys(t).forEach((s) => {
      ln(t[s]) && !t[s].$$typeof ? s in e ? n[s] = jr(e[s], t[s]) : Object.assign(n, { [s]: t[s] }) : Array.isArray(t[s]) ? n[s] = pr(e[s], t[s]) : Object.assign(n, { [s]: t[s] });
    }), n;
  } else if (Array.isArray(e) && Array.isArray(t))
    return pr(e, t);
  return e;
}
const vh = 44, ls = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Eh = new Uint8Array(64), Zi = new Uint8Array(128);
for (let e = 0; e < ls.length; e++) {
  const t = ls.charCodeAt(e);
  Eh[e] = t, Zi[t] = e;
}
function Sh(e) {
  const t = new Int32Array(5), n = [];
  let s = 0;
  do {
    const r = Th(e, s), o = [];
    let i = !0, a = 0;
    t[0] = 0;
    for (let c = s; c < r; c++) {
      let l;
      c = kt(e, c, t, 0);
      const h = t[0];
      h < a && (i = !1), a = h, fs(e, c, r) ? (c = kt(e, c, t, 1), c = kt(e, c, t, 2), c = kt(e, c, t, 3), fs(e, c, r) ? (c = kt(e, c, t, 4), l = [h, t[1], t[2], t[3], t[4]]) : l = [h, t[1], t[2], t[3]]) : l = [h], o.push(l);
    }
    i || xh(o), n.push(o), s = r + 1;
  } while (s <= e.length);
  return n;
}
function Th(e, t) {
  const n = e.indexOf(";", t);
  return n === -1 ? e.length : n;
}
function kt(e, t, n, s) {
  let r = 0, o = 0, i = 0;
  do {
    const c = e.charCodeAt(t++);
    i = Zi[c], r |= (i & 31) << o, o += 5;
  } while (i & 32);
  const a = r & 1;
  return r >>>= 1, a && (r = -2147483648 | -r), n[s] += r, t;
}
function fs(e, t, n) {
  return t >= n ? !1 : e.charCodeAt(t) !== vh;
}
function xh(e) {
  e.sort(Oh);
}
function Oh(e, t) {
  return e[0] - t[0];
}
const Ah = /^[\w+.-]+:\/\//, Mh = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, Ph = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var Ee;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(Ee || (Ee = {}));
function $h(e) {
  return Ah.test(e);
}
function _h(e) {
  return e.startsWith("//");
}
function ea(e) {
  return e.startsWith("/");
}
function Ch(e) {
  return e.startsWith("file:");
}
function hs(e) {
  return /^[.?#]/.test(e);
}
function on(e) {
  const t = Mh.exec(e);
  return ta(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "");
}
function Ih(e) {
  const t = Ph.exec(e), n = t[2];
  return ta("file:", "", t[1] || "", "", ea(n) ? n : "/" + n, t[3] || "", t[4] || "");
}
function ta(e, t, n, s, r, o, i) {
  return {
    scheme: e,
    user: t,
    host: n,
    port: s,
    path: r,
    query: o,
    hash: i,
    type: Ee.Absolute
  };
}
function ps(e) {
  if (_h(e)) {
    const n = on("http:" + e);
    return n.scheme = "", n.type = Ee.SchemeRelative, n;
  }
  if (ea(e)) {
    const n = on("http://foo.com" + e);
    return n.scheme = "", n.host = "", n.type = Ee.AbsolutePath, n;
  }
  if (Ch(e))
    return Ih(e);
  if ($h(e))
    return on(e);
  const t = on("http://foo.com/" + e);
  return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? Ee.Query : e.startsWith("#") ? Ee.Hash : Ee.RelativePath : Ee.Empty, t;
}
function kh(e) {
  if (e.endsWith("/.."))
    return e;
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
function Nh(e, t) {
  na(t, t.type), e.path === "/" ? e.path = t.path : e.path = kh(t.path) + e.path;
}
function na(e, t) {
  const n = t <= Ee.RelativePath, s = e.path.split("/");
  let r = 1, o = 0, i = !1;
  for (let c = 1; c < s.length; c++) {
    const l = s[c];
    if (!l) {
      i = !0;
      continue;
    }
    if (i = !1, l !== ".") {
      if (l === "..") {
        o ? (i = !0, o--, r--) : n && (s[r++] = l);
        continue;
      }
      s[r++] = l, o++;
    }
  }
  let a = "";
  for (let c = 1; c < r; c++)
    a += "/" + s[c];
  (!a || i && !a.endsWith("/..")) && (a += "/"), e.path = a;
}
function jh(e, t) {
  if (!e && !t)
    return "";
  const n = ps(e);
  let s = n.type;
  if (t && s !== Ee.Absolute) {
    const o = ps(t), i = o.type;
    switch (s) {
      case Ee.Empty:
        n.hash = o.hash;
      case Ee.Hash:
        n.query = o.query;
      case Ee.Query:
      case Ee.RelativePath:
        Nh(n, o);
      case Ee.AbsolutePath:
        n.user = o.user, n.host = o.host, n.port = o.port;
      case Ee.SchemeRelative:
        n.scheme = o.scheme;
    }
    i > s && (s = i);
  }
  na(n, s);
  const r = n.query + n.hash;
  switch (s) {
    case Ee.Hash:
    case Ee.Query:
      return r;
    case Ee.RelativePath: {
      const o = n.path.slice(1);
      return o ? hs(t || e) && !hs(o) ? "./" + o + r : o + r : r || ".";
    }
    case Ee.AbsolutePath:
      return n.path + r;
    default:
      return n.scheme + "//" + n.user + n.host + n.port + n.path + r;
  }
}
function ds(e, t) {
  return t && !t.endsWith("/") && (t += "/"), jh(e, t);
}
function Fh(e) {
  if (!e)
    return "";
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
const nt = 0, Rh = 1, Dh = 2, Bh = 3, qh = 4;
function Lh(e, t) {
  const n = ms(e, 0);
  if (n === e.length)
    return e;
  t || (e = e.slice());
  for (let s = n; s < e.length; s = ms(e, s + 1))
    e[s] = Vh(e[s], t);
  return e;
}
function ms(e, t) {
  for (let n = t; n < e.length; n++)
    if (!zh(e[n]))
      return n;
  return e.length;
}
function zh(e) {
  for (let t = 1; t < e.length; t++)
    if (e[t][nt] < e[t - 1][nt])
      return !1;
  return !0;
}
function Vh(e, t) {
  return t || (e = e.slice()), e.sort(Wh);
}
function Wh(e, t) {
  return e[nt] - t[nt];
}
let gn = !1;
function Uh(e, t, n, s) {
  for (; n <= s; ) {
    const r = n + (s - n >> 1), o = e[r][nt] - t;
    if (o === 0)
      return gn = !0, r;
    o < 0 ? n = r + 1 : s = r - 1;
  }
  return gn = !1, n - 1;
}
function Kh(e, t, n) {
  for (let s = n + 1; s < e.length && e[s][nt] === t; n = s++)
    ;
  return n;
}
function Gh(e, t, n) {
  for (let s = n - 1; s >= 0 && e[s][nt] === t; n = s--)
    ;
  return n;
}
function Yh() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function Jh(e, t, n, s) {
  const { lastKey: r, lastNeedle: o, lastIndex: i } = n;
  let a = 0, c = e.length - 1;
  if (s === r) {
    if (t === o)
      return gn = i !== -1 && e[i][nt] === t, i;
    t >= o ? a = i === -1 ? 0 : i : c = i;
  }
  return n.lastKey = s, n.lastNeedle = t, n.lastIndex = Uh(e, t, a, c);
}
const Hh = "`line` must be greater than 0 (lines start at line 1)", Xh = "`column` must be greater than or equal to 0 (columns start at column 0)", ys = -1, Qh = 1;
let gs, ra;
class Zh {
  constructor(t, n) {
    const s = typeof t == "string";
    if (!s && t._decodedMemo)
      return t;
    const r = s ? JSON.parse(t) : t, { version: o, file: i, names: a, sourceRoot: c, sources: l, sourcesContent: h } = r;
    this.version = o, this.file = i, this.names = a || [], this.sourceRoot = c, this.sources = l, this.sourcesContent = h;
    const u = ds(c || "", Fh(n));
    this.resolvedSources = l.map((w) => ds(w || "", u));
    const { mappings: f } = r;
    typeof f == "string" ? (this._encoded = f, this._decoded = void 0) : (this._encoded = void 0, this._decoded = Lh(f, s)), this._decodedMemo = Yh(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
}
gs = (e) => e._decoded || (e._decoded = Sh(e._encoded)), ra = (e, { line: t, column: n, bias: s }) => {
  if (t--, t < 0)
    throw new Error(Hh);
  if (n < 0)
    throw new Error(Xh);
  const r = gs(e);
  if (t >= r.length)
    return sn(null, null, null, null);
  const o = r[t], i = ep(o, e._decodedMemo, t, n, s || Qh);
  if (i === -1)
    return sn(null, null, null, null);
  const a = o[i];
  if (a.length === 1)
    return sn(null, null, null, null);
  const { names: c, resolvedSources: l } = e;
  return sn(l[a[Rh]], a[Dh] + 1, a[Bh], a.length === 5 ? c[a[qh]] : null);
};
function sn(e, t, n, s) {
  return { source: e, line: t, column: n, name: s };
}
function ep(e, t, n, s, r) {
  let o = Jh(e, s, t, n);
  return gn ? o = (r === ys ? Kh : Gh)(e, s, o) : r === ys && o++, o === -1 || o === e.length ? -1 : o;
}
const oa = /^\s*at .*(\S+:\d+|\(native\))/m, tp = /^(eval@)?(\[native code])?$/, np = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chai.js",
  /__vitest_browser__/
];
function sa(e) {
  if (!e.includes(":"))
    return [e];
  const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!n)
    return [e];
  let s = n[1];
  return (s.startsWith("http:") || s.startsWith("https:")) && (s = new URL(s).pathname), s.startsWith("/@fs/") && (s = s.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [s, n[2] || void 0, n[3] || void 0];
}
function rp(e) {
  let t = e.trim();
  if (tp.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const n = /((.*".+"[^@]*)?[^@]*)(?:@)/, s = t.match(n), r = s && s[1] ? s[1] : void 0, [o, i, a] = sa(t.replace(n, ""));
  return !o || !i || !a ? null : {
    file: o,
    method: r || "",
    line: Number.parseInt(i),
    column: Number.parseInt(a)
  };
}
function op(e) {
  let t = e.trim();
  if (!oa.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const s = n.match(/ (\(.+\)$)/);
  n = s ? n.replace(s[0], "") : n;
  const [r, o, i] = sa(s ? s[1] : n);
  let a = s && n || "", c = r && ["eval", "<anonymous>"].includes(r) ? void 0 : r;
  return !c || !o || !i ? null : (a.startsWith("async ") && (a = a.slice(6)), c.startsWith("file://") && (c = c.slice(7)), c = Vu(c), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: c,
    line: Number.parseInt(o),
    column: Number.parseInt(i)
  });
}
function sp(e, t = {}) {
  const { ignoreStackEntries: n = np } = t;
  let s = oa.test(e) ? ap(e) : ip(e);
  return n.length && (s = s.filter((r) => !n.some((o) => r.file.match(o)))), s.map((r) => {
    var o;
    const i = (o = t.getSourceMap) == null ? void 0 : o.call(t, r.file);
    if (!i || typeof i != "object" || !i.version)
      return r;
    const a = new Zh(i), { line: c, column: l } = ra(a, r);
    return c != null && l != null ? { ...r, line: c, column: l } : r;
  });
}
function ip(e) {
  return e.split(`
`).map((t) => rp(t)).filter(Hi);
}
function ap(e) {
  return e.split(`
`).map((t) => op(t)).filter(Hi);
}
function cp(e, t = {}) {
  if (!e || Jf(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const n = e.stack || e.stackStr || "";
  let s = sp(n, t);
  return t.frameFilter && (s = s.filter((r) => t.frameFilter(e, r) !== !1)), e.stacks = s, s;
}
async function up(e, t) {
  const n = (await import("./magic-string.es-CyBQ0NXd.js")).default, s = new Set(t.map((r) => r.file));
  await Promise.all(Array.from(s).map(async (r) => {
    const o = t.filter((l) => l.file === r), i = await e.readSnapshotFile(r), a = new n(i);
    for (const l of o) {
      const h = Qf(i, l.line, l.column);
      dp(i, a, h, l.snapshot);
    }
    const c = a.toString();
    c !== i && await e.saveSnapshotFile(r, c);
  }));
}
const lp = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function fp(e, t, n, s) {
  let r = e.slice(n);
  const o = lp.exec(r);
  if (!o)
    return !1;
  r = r.slice(o.index);
  let i = Hf(r);
  if (i === null)
    return !1;
  i += n + o.index;
  const a = n + o.index + o[0].length, c = hp(e, a), l = `, ${ia(s, e, n)}`;
  return c === i ? t.appendLeft(i, l) : t.overwrite(c, i, l), !0;
}
function hp(e, t) {
  let n = 1, s = 0;
  for (; n !== s && t < e.length; ) {
    const r = e[t++];
    r === "{" ? n++ : r === "}" && s++;
  }
  return t;
}
function ia(e, t, n) {
  const s = Zf(t, n), o = t.split(kr)[s - 1].match(/^\s*/)[0] || "", i = o.includes("	") ? `${o}	` : `${o}  `, a = e.trim().replace(/\\/g, "\\\\").split(/\n/g), c = a.length <= 1, l = "`";
  return c ? `${l}${a.join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}${l}` : `${l}
${a.map((h) => h ? i + h : "").join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${o}${l}`;
}
const pp = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function dp(e, t, n, s) {
  const r = e.slice(n), o = pp.exec(r), i = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(r);
  if (!o || o.index !== (i == null ? void 0 : i.index))
    return fp(e, t, n, s);
  const a = o[1], c = n + o.index + o[0].length, l = ia(s, e, n);
  if (a === ")")
    return t.appendRight(c - 1, l), !0;
  const u = new RegExp(`(?:^|[^\\\\])${a}`).exec(e.slice(c));
  if (!u)
    return !1;
  const f = c + u.index + u[0].length;
  return t.overwrite(c - 1, f, l), !0;
}
const mp = /^([^\S\n]*)\S/m;
function bs(e) {
  const t = e.match(mp);
  if (!t || !t[1])
    return e;
  const n = t[1], s = e.split(/\n/g);
  if (s.length <= 2 || s[0].trim() !== "" || s[s.length - 1].trim() !== "")
    return e;
  for (let r = 1; r < s.length - 1; r++)
    if (s[r] !== "") {
      if (s[r].indexOf(n) !== 0)
        return e;
      s[r] = s[r].substring(n.length);
    }
  return s[s.length - 1] = "", e = s.join(`
`), e;
}
async function yp(e, t) {
  await Promise.all(t.map(async (n) => {
    n.readonly || await e.saveSnapshotFile(n.file, n.snapshot);
  }));
}
class Fr {
  constructor(t, n, s, r) {
    oe(this, "_counters");
    oe(this, "_dirty");
    oe(this, "_updateSnapshot");
    oe(this, "_snapshotData");
    oe(this, "_initialData");
    oe(this, "_inlineSnapshots");
    oe(this, "_rawSnapshots");
    oe(this, "_uncheckedKeys");
    oe(this, "_snapshotFormat");
    oe(this, "_environment");
    oe(this, "_fileExists");
    oe(this, "added");
    oe(this, "expand");
    oe(this, "matched");
    oe(this, "unmatched");
    oe(this, "updated");
    this.testFilePath = t, this.snapshotPath = n;
    const { data: o, dirty: i } = ph(
      s,
      r
    );
    this._fileExists = s != null, this._initialData = o, this._snapshotData = o, this._dirty = i, this._inlineSnapshots = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this._counters = /* @__PURE__ */ new Map(), this.expand = r.expand || !1, this.added = 0, this.matched = 0, this.unmatched = 0, this._updateSnapshot = r.updateSnapshot, this.updated = 0, this._snapshotFormat = {
      printBasicPrototype: !1,
      escapeString: !1,
      ...r.snapshotFormat
    }, this._environment = r.snapshotEnvironment;
  }
  static async create(t, n) {
    const s = await n.snapshotEnvironment.resolvePath(t), r = await n.snapshotEnvironment.readSnapshotFile(s);
    return new Fr(t, s, r, n);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(t) {
    this._uncheckedKeys.forEach((n) => {
      hh(n) === t && this._uncheckedKeys.delete(n);
    });
  }
  _inferInlineSnapshotStack(t) {
    const n = t.findIndex((r) => r.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (n !== -1)
      return t[n + 3];
    const s = t.findIndex((r) => r.method.includes("__INLINE_SNAPSHOT__"));
    return s !== -1 ? t[s + 2] : null;
  }
  _addSnapshot(t, n, s) {
    if (this._dirty = !0, s.isInline) {
      const r = cp(s.error || new Error("snapshot"), { ignoreStackEntries: [] }), o = this._inferInlineSnapshotStack(r);
      if (!o)
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(r)}`
        );
      o.column--, this._inlineSnapshots.push({
        snapshot: n,
        ...o
      });
    } else
      s.rawSnapshot ? this._rawSnapshots.push({
        ...s.rawSnapshot,
        snapshot: n
      }) : this._snapshotData[t] = n;
  }
  clear() {
    this._snapshotData = this._initialData, this._counters = /* @__PURE__ */ new Map(), this.added = 0, this.matched = 0, this.unmatched = 0, this.updated = 0, this._dirty = !1;
  }
  async save() {
    const t = Object.keys(this._snapshotData).length, n = this._inlineSnapshots.length, s = this._rawSnapshots.length, r = !t && !n && !s, o = {
      deleted: !1,
      saved: !1
    };
    return (this._dirty || this._uncheckedKeys.size) && !r ? (t && (await wh(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = !0), n && await up(this._environment, this._inlineSnapshots), s && await yp(this._environment, this._rawSnapshots), o.saved = !0) : !t && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = !1), o.deleted = !0), o;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = !0, this._uncheckedKeys.forEach((t) => delete this._snapshotData[t]), this._uncheckedKeys.clear());
  }
  match({
    testName: t,
    received: n,
    key: s,
    inlineSnapshot: r,
    isInline: o,
    error: i,
    rawSnapshot: a
  }) {
    this._counters.set(t, (this._counters.get(t) || 0) + 1);
    const c = Number(this._counters.get(t));
    s || (s = fh(t, c)), o && this._snapshotData[s] !== void 0 || this._uncheckedKeys.delete(s);
    let l = a && typeof n == "string" ? n : gh(n, void 0, this._snapshotFormat);
    a || (l = dh(l)), a && a.content && a.content.match(/\r\n/) && !l.match(/\r\n/) && (a.content = Nr(a.content));
    const h = o ? r : a ? a.content : this._snapshotData[s], u = us(h), f = u === us(l), w = h !== void 0, b = o || this._fileExists || a && a.content != null;
    return f && !o && !a && (this._snapshotData[s] = l), w && this._updateSnapshot === "all" || (!w || !b) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? f ? this.matched++ : (w ? this.updated++ : this.added++, this._addSnapshot(s, l, { error: i, isInline: o, rawSnapshot: a })) : (this._addSnapshot(s, l, { error: i, isInline: o, rawSnapshot: a }), this.added++), {
      actual: "",
      count: c,
      expected: "",
      key: s,
      pass: !0
    }) : f ? (this.matched++, {
      actual: "",
      count: c,
      expected: "",
      key: s,
      pass: !0
    }) : (this.unmatched++, {
      actual: as(l),
      count: c,
      expected: u !== void 0 ? as(u) : void 0,
      key: s,
      pass: !1
    });
  }
  async pack() {
    const t = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: !1,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    }, n = this.getUncheckedCount(), s = this.getUncheckedKeys();
    n && this.removeUncheckedKeys();
    const r = await this.save();
    return t.fileDeleted = r.deleted, t.added = this.added, t.matched = this.matched, t.unmatched = this.unmatched, t.updated = this.updated, t.unchecked = r.deleted ? 0 : n, t.uncheckedKeys = Array.from(s), t;
  }
}
function ws(e, t, n, s) {
  const r = new Error(e);
  return Object.defineProperty(r, "actual", {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(r, "expected", {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(r, "diffOptions", { value: { expand: t } }), r;
}
class gp {
  constructor(t = {}) {
    oe(this, "filepath");
    oe(this, "name");
    oe(this, "snapshotState");
    oe(this, "snapshotStateMap", /* @__PURE__ */ new Map());
    this.options = t;
  }
  async startCurrentRun(t, n, s) {
    var r;
    this.filepath = t, this.name = n, ((r = this.snapshotState) == null ? void 0 : r.testFilePath) !== t && (await this.finishCurrentRun(), this.getSnapshotState(t) || this.snapshotStateMap.set(
      t,
      await Fr.create(
        t,
        s
      )
    ), this.snapshotState = this.getSnapshotState(t));
  }
  getSnapshotState(t) {
    return this.snapshotStateMap.get(t);
  }
  clearTest() {
    this.filepath = void 0, this.name = void 0;
  }
  skipTestSnapshots(t) {
    var n;
    (n = this.snapshotState) == null || n.markSnapshotsAsCheckedForTest(t);
  }
  assert(t) {
    var n, s, r, o;
    const {
      filepath: i = this.filepath,
      name: a = this.name,
      message: c,
      isInline: l = !1,
      properties: h,
      inlineSnapshot: u,
      error: f,
      errorMessage: w,
      rawSnapshot: b
    } = t;
    let { received: E } = t;
    if (!i)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof h == "object") {
      if (typeof E != "object" || !E)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        if (((s = (n = this.options).isEqual) == null ? void 0 : s.call(n, E, h)) ?? !1)
          E = jr(E, h);
        else
          throw ws("Snapshot properties mismatched", (r = this.snapshotState) == null ? void 0 : r.expand, E, h);
      } catch (U) {
        throw U.message = w || "Snapshot mismatched", U;
      }
    }
    const g = [
      a,
      ...c ? [c] : []
    ].join(" > "), M = this.getSnapshotState(i), { actual: P, expected: F, key: k, pass: N } = M.match({
      testName: g,
      received: E,
      isInline: l,
      error: f,
      inlineSnapshot: u,
      rawSnapshot: b
    });
    if (!N)
      throw ws(`Snapshot \`${k || "unknown"}\` mismatched`, (o = this.snapshotState) == null ? void 0 : o.expand, P == null ? void 0 : P.trim(), F == null ? void 0 : F.trim());
  }
  async assertRaw(t) {
    if (!t.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath: n = this.filepath,
      rawSnapshot: s
    } = t;
    if (s.content == null) {
      if (!n)
        throw new Error("Snapshot cannot be used outside of test");
      const r = this.getSnapshotState(n);
      t.filepath || (t.filepath = n), s.file = await r.environment.resolveRawPath(n, s.file), s.content = await r.environment.readSnapshotFile(s.file) || void 0;
    }
    return this.assert(t);
  }
  async finishCurrentRun() {
    if (!this.snapshotState)
      return null;
    const t = await this.snapshotState.pack();
    return this.snapshotState = void 0, t;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
function bp(e = "") {
  return !e || !e.includes("\\") ? e : e.replace(/\\/g, "/");
}
const wp = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function vp() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const Ep = function(...e) {
  e = e.map((s) => bp(s));
  let t = "", n = !1;
  for (let s = e.length - 1; s >= -1 && !n; s--) {
    const r = s >= 0 ? e[s] : vp();
    !r || r.length === 0 || (t = `${r}/${t}`, n = vs(r));
  }
  return t = Sp(t, !n), n && !vs(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function Sp(e, t) {
  let n = "", s = 0, r = -1, o = 0, i = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      i = e[a];
    else {
      if (i === "/")
        break;
      i = "/";
    }
    if (i === "/") {
      if (!(r === a - 1 || o === 1))
        if (o === 2) {
          if (n.length < 2 || s !== 2 || n[n.length - 1] !== "." || n[n.length - 2] !== ".") {
            if (n.length > 2) {
              const c = n.lastIndexOf("/");
              c === -1 ? (n = "", s = 0) : (n = n.slice(0, c), s = n.length - 1 - n.lastIndexOf("/")), r = a, o = 0;
              continue;
            } else if (n.length > 0) {
              n = "", s = 0, r = a, o = 0;
              continue;
            }
          }
          t && (n += n.length > 0 ? "/.." : "..", s = 2);
        } else
          n.length > 0 ? n += `/${e.slice(r + 1, a)}` : n = e.slice(r + 1, a), s = a - r - 1;
      r = a, o = 0;
    } else
      i === "." && o !== -1 ? ++o : o = -1;
  }
  return n;
}
const vs = function(e) {
  return wp.test(e);
}, Es = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tp = new Uint8Array(64), xp = new Uint8Array(128);
for (let e = 0; e < Es.length; e++) {
  const t = Es.charCodeAt(e);
  Tp[e] = t, xp[t] = e;
}
var Ss;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(Ss || (Ss = {}));
const aa = /^\s*at .*(\S+:\d+|\(native\))/m, Op = /^(eval@)?(\[native code])?$/;
function ca(e) {
  if (!e.includes(":"))
    return [e];
  const n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!n)
    return [e];
  let s = n[1];
  return (s.startsWith("http:") || s.startsWith("https:")) && (s = new URL(s).pathname), s.startsWith("/@fs/") && (s = s.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [s, n[2] || void 0, n[3] || void 0];
}
function Ap(e) {
  let t = e.trim();
  if (Op.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const n = /((.*".+"[^@]*)?[^@]*)(?:@)/, s = t.match(n), r = s && s[1] ? s[1] : void 0, [o, i, a] = ca(t.replace(n, ""));
  return !o || !i || !a ? null : {
    file: o,
    method: r || "",
    line: Number.parseInt(i),
    column: Number.parseInt(a)
  };
}
function Mp(e) {
  const t = e.trim();
  return aa.test(t) ? Pp(t) : Ap(t);
}
function Pp(e) {
  let t = e.trim();
  if (!aa.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const s = n.match(/ (\(.+\)$)/);
  n = s ? n.replace(s[0], "") : n;
  const [r, o, i] = ca(s ? s[1] : n);
  let a = s && n || "", c = r && ["eval", "<anonymous>"].includes(r) ? void 0 : r;
  return !c || !o || !i ? null : (a.startsWith("async ") && (a = a.slice(6)), c.startsWith("file://") && (c = c.slice(7)), c = Ep(c), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: c,
    line: Number.parseInt(o),
    column: Number.parseInt(i)
  });
}
function ua() {
  return typeof process < "u" && !!process.send;
}
const De = Date;
let dr = null;
class rt extends De {
  constructor(t, n, s, r, o, i, a) {
    super();
    let c;
    switch (arguments.length) {
      case 0:
        dr !== null ? c = new De(dr.valueOf()) : c = new De();
        break;
      case 1:
        c = new De(t);
        break;
      default:
        s = typeof s > "u" ? 1 : s, r = r || 0, o = o || 0, i = i || 0, a = a || 0, c = new De(t, n, s, r, o, i, a);
        break;
    }
    return Object.setPrototypeOf(c, rt.prototype), c;
  }
}
rt.UTC = De.UTC;
rt.now = function() {
  return new rt().valueOf();
};
rt.parse = function(e) {
  return De.parse(e);
};
rt.toString = function() {
  return De.toString();
};
function $p(e) {
  const t = new De(e.valueOf());
  if (Number.isNaN(t.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${e}`);
  globalThis.Date = rt, dr = t.valueOf();
}
function _p() {
  globalThis.Date = De;
}
function Cp(e, t = !1) {
  const n = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...t ? [] : [/^mock:/]
  ];
  e.forEach((s, r) => {
    n.some((o) => o.test(r)) || e.invalidateModule(s);
  });
}
function Ip() {
  const { setTimeout: e } = En();
  return new Promise((t) => e(t, 0));
}
async function la() {
  await Ip();
  const e = Mr(), t = [];
  let n = 0;
  for (const s of e.moduleCache.values())
    s.promise && !s.evaluated && t.push(s.promise), s.resolving && n++;
  !t.length && !n || (await Promise.allSettled(t), await la());
}
function kp(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fa = { exports: {} };
(function(e, t) {
  (function() {
    (function(n) {
      return typeof kp == "function" ? e.exports = n : chai.use(n);
    })(function(n, s) {
      var r = n.Assertion, o = r.prototype;
      r.addMethod("containSubset", function(a) {
        var c = s.flag(this, "object"), l = n.config.showDiff;
        o.assert.call(
          this,
          i(a, c),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          a,
          c,
          l
        );
      }), n.assert.containSubset = function(a, c, l) {
        new n.Assertion(a, l).to.be.containSubset(c);
      };
      function i(a, c) {
        if (a === c)
          return !0;
        if (typeof c != typeof a)
          return !1;
        if (typeof a != "object" || a === null)
          return a === c;
        if (a && !c)
          return !1;
        if (Array.isArray(a)) {
          if (typeof c.length != "number")
            return !1;
          var l = Array.prototype.slice.call(c);
          return a.every(function(h) {
            return l.some(function(u) {
              return i(h, u);
            });
          });
        }
        return a instanceof Date ? c instanceof Date ? a.getTime() === c.getTime() : !1 : Object.keys(a).every(function(h) {
          var u = a[h], f = c[h];
          return typeof u == "object" && u !== null && f !== null ? i(u, f) : typeof u == "function" ? u(f) : f === u;
        });
      }
    });
  }).call(Kt);
})(fa);
var Np = fa.exports, jp = /* @__PURE__ */ Ef(Np);
const Ts = Symbol.for("matchers-object"), Fp = Symbol.for("$$jest-matchers-object"), Rp = Symbol.for("expect-global"), Dp = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, Ts)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), n = [], s = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, Ts, {
    get: () => e
  }), Object.defineProperty(globalThis, Fp, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[Rp]),
      matchers: t,
      customEqualityTesters: n
    })
  }), Object.defineProperty(globalThis, Dp, {
    get: () => s
  });
}
function Bp(e, t) {
  return e && t instanceof Promise && (t = t.finally(() => {
    const n = e.promises.indexOf(t);
    n !== -1 && e.promises.splice(n, 1);
  }), e.promises || (e.promises = []), e.promises.push(t)), t;
}
let Zn;
function Nt() {
  return Zn || (Zn = new gp({
    isEqual: (e, t) => he(e, t, [Ie, Qt])
  })), Zn;
}
function xs(e, t) {
  if (typeof e != "function") {
    if (!t)
      throw new Error(`expected must be a function, received ${typeof e}`);
    return e;
  }
  try {
    e();
  } catch (n) {
    return n;
  }
  throw new Error("snapshot function didn't throw");
}
const qp = (e, t) => {
  const n = (s) => {
    var r;
    return s ? {
      filepath: (r = s.file) == null ? void 0 : r.filepath,
      name: Du(s).slice(1).join(" > ")
    } : {};
  };
  for (const s of ["matchSnapshot", "toMatchSnapshot"])
    t.addMethod(
      e.Assertion.prototype,
      s,
      function(r, o) {
        const i = t.flag(this, "object"), a = t.flag(this, "vitest-test");
        typeof r == "string" && typeof o > "u" && (o = r, r = void 0);
        const c = t.flag(this, "message");
        Nt().assert({
          received: i,
          message: o,
          isInline: !1,
          properties: r,
          errorMessage: c,
          ...n(a)
        });
      }
    );
  t.addMethod(
    e.Assertion.prototype,
    "toMatchFileSnapshot",
    function(s, r) {
      const o = t.flag(this, "object"), i = t.flag(this, "vitest-test"), a = t.flag(this, "message"), c = Nt().assertRaw({
        received: o,
        message: r,
        isInline: !1,
        rawSnapshot: {
          file: s
        },
        errorMessage: a,
        ...n(i)
      });
      return Bp(i, c);
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toMatchInlineSnapshot",
    function(r, o, i) {
      var a;
      const c = t.flag(this, "vitest-test");
      if (c && (c.each || ((a = c.suite) == null ? void 0 : a.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const h = t.flag(this, "object"), u = t.flag(this, "error");
      typeof r == "string" && (i = o, o = r, r = void 0), o && (o = bs(o));
      const f = t.flag(this, "message");
      Nt().assert({
        received: h,
        message: i,
        isInline: !0,
        properties: r,
        inlineSnapshot: o,
        error: u,
        errorMessage: f,
        ...n(c)
      });
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(s) {
      const r = t.flag(this, "object"), o = t.flag(this, "vitest-test"), i = t.flag(this, "promise"), a = t.flag(this, "message");
      Nt().assert({
        received: xs(r, i),
        message: s,
        errorMessage: a,
        ...n(o)
      });
    }
  ), t.addMethod(
    e.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function(r, o) {
      var i;
      const a = t.flag(this, "vitest-test");
      if (a && (a.each || ((i = a.suite) == null ? void 0 : i.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const l = t.flag(this, "object"), h = t.flag(this, "error"), u = t.flag(this, "promise"), f = t.flag(this, "message");
      r && (r = bs(r)), Nt().assert({
        received: xs(l, u),
        message: o,
        inlineSnapshot: r,
        isInline: !0,
        error: h,
        errorMessage: f,
        ...n(a)
      });
    }
  ), t.addMethod(
    e.expect,
    "addSnapshotSerializer",
    uh
  );
};
Jt(Uf);
Jt(zf);
Jt(jp);
Jt(qp);
Jt(Lf);
function Lp(e) {
  const t = (o, i) => {
    const { assertionCalls: a } = Et(t);
    return Qn({ assertionCalls: a + 1, soft: !1 }, t), Xn(o, i);
  };
  Object.assign(t, Xn), Object.assign(t, globalThis[Cr]), t.getState = () => Et(t), t.setState = (o) => Qn(o, t);
  const n = Et(globalThis[Xt]) || {};
  Qn({
    // this should also add "snapshotState" that is added conditionally
    ...n,
    assertionCalls: 0,
    isExpectingAssertions: !1,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: dl(),
    testPath: n.testPath,
    currentTestName: n.currentTestName
  }, t), t.extend = (o) => Xn.extend(t, o), t.addEqualityTesters = (o) => _f(o), t.soft = (...o) => {
    const i = t(...o);
    return t.setState({
      soft: !0
    }), i;
  }, t.unreachable = (o) => {
    vf.fail(`expected${o ? ` "${o}" ` : " "}not to be reached`);
  };
  function s(o) {
    const i = () => new Error(`expected number of assertions to be ${o}, but got ${t.getState().assertionCalls}`);
    Error.captureStackTrace && Error.captureStackTrace(i(), s), t.setState({
      expectedAssertionsNumber: o,
      expectedAssertionsNumberErrorGen: i
    });
  }
  function r() {
    const o = new Error("expected any number of assertion, but got none");
    Error.captureStackTrace && Error.captureStackTrace(o, r), t.setState({
      isExpectingAssertions: !0,
      isExpectingAssertionsError: o
    });
  }
  return mn.addMethod(t, "assertions", s), mn.addMethod(t, "hasAssertions", r), t;
}
const Ue = Lp();
Object.defineProperty(globalThis, Xt, {
  value: Ue,
  writable: !0,
  configurable: !0
});
var fn;
typeof Kt < "u" ? fn = Kt : typeof window < "u" ? fn = window : fn = self;
var zp = fn;
let mr;
try {
  ({}).__proto__, mr = !1;
} catch {
  mr = !0;
}
var Vp = mr, Wp = Function.call, Up = Vp, ha = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
Up && ha.push("__proto__");
var Pt = function(t) {
  return Object.getOwnPropertyNames(t).reduce(
    function(n, s) {
      return ha.includes(s) || typeof t[s] != "function" || (n[s] = Wp.bind(t[s])), n;
    },
    /* @__PURE__ */ Object.create(null)
  );
}, Kp = Pt, Mn = Kp(Array.prototype), Gp = Mn.every;
function Yp(e, t) {
  return e[t.id] === void 0 && (e[t.id] = 0), e[t.id] < t.callCount;
}
function Jp(e, t, n, s) {
  var r = !0;
  return n !== s.length - 1 && (r = t.calledBefore(s[n + 1])), Yp(e, t) && r ? (e[t.id] += 1, !0) : !1;
}
function Hp(e) {
  var t = {}, n = arguments.length > 1 ? arguments : e;
  return Gp(n, Jp.bind(null, t));
}
var Xp = Hp, pa = function(t) {
  if (!t)
    return "";
  try {
    return t.displayName || t.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(t).match(/function ([^\s(]+)/) || [])[1];
  } catch {
    return "";
  }
}, Qp = pa;
function Zp(e) {
  return e.constructor && e.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof e.constructor == "function" && /* istanbul ignore next */
  Qp(e.constructor) || null;
}
var ed = Zp, da = {};
(function(e) {
  e.wrap = function(t, n) {
    var s = function() {
      return e.printWarning(n), t.apply(this, arguments);
    };
    return t.prototype && (s.prototype = t.prototype), s;
  }, e.defaultMsg = function(t, n) {
    return `${t}.${n} is deprecated and will be removed from the public API in a future version of ${t}.`;
  }, e.printWarning = function(t) {
    typeof process == "object" && process.emitWarning ? process.emitWarning(t) : console.info ? console.info(t) : console.log(t);
  };
})(da);
var td = function(t, n) {
  var s = !0;
  try {
    t.forEach(function() {
      if (!n.apply(this, arguments))
        throw new Error();
    });
  } catch {
    s = !1;
  }
  return s;
}, nd = Mn.sort, rd = Mn.slice;
function od(e, t) {
  var n = e.getCall(0), s = t.getCall(0), r = n && n.callId || -1, o = s && s.callId || -1;
  return r < o ? -1 : 1;
}
function sd(e) {
  return nd(rd(e), od);
}
var id = sd, ad = Pt, cd = ad(Function.prototype), ud = Pt, ld = ud(Map.prototype), fd = Pt, hd = fd(Object.prototype), pd = Pt, dd = pd(Set.prototype), md = Pt, yd = md(String.prototype), gd = {
  array: Mn,
  function: cd,
  map: ld,
  object: hd,
  set: dd,
  string: yd
}, ma = { exports: {} };
(function(e, t) {
  (function(n, s) {
    e.exports = s();
  })(Kt, function() {
    var n = typeof Promise == "function", s = typeof self == "object" ? self : Kt, r = typeof Symbol < "u", o = typeof Map < "u", i = typeof Set < "u", a = typeof WeakMap < "u", c = typeof WeakSet < "u", l = typeof DataView < "u", h = r && typeof Symbol.iterator < "u", u = r && typeof Symbol.toStringTag < "u", f = i && typeof Set.prototype.entries == "function", w = o && typeof Map.prototype.entries == "function", b = f && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), E = w && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), g = h && typeof Array.prototype[Symbol.iterator] == "function", M = g && Object.getPrototypeOf([][Symbol.iterator]()), P = h && typeof String.prototype[Symbol.iterator] == "function", F = P && Object.getPrototypeOf(""[Symbol.iterator]()), k = 8, N = -1;
    function U(B) {
      var G = typeof B;
      if (G !== "object")
        return G;
      if (B === null)
        return "null";
      if (B === s)
        return "global";
      if (Array.isArray(B) && (u === !1 || !(Symbol.toStringTag in B)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && B === window.location)
          return "Location";
        if (typeof window.document == "object" && B === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && B === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && B === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && B instanceof window.HTMLElement) {
          if (B.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (B.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (B.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var ie = u && B[Symbol.toStringTag];
      if (typeof ie == "string")
        return ie;
      var W = Object.getPrototypeOf(B);
      return W === RegExp.prototype ? "RegExp" : W === Date.prototype ? "Date" : n && W === Promise.prototype ? "Promise" : i && W === Set.prototype ? "Set" : o && W === Map.prototype ? "Map" : c && W === WeakSet.prototype ? "WeakSet" : a && W === WeakMap.prototype ? "WeakMap" : l && W === DataView.prototype ? "DataView" : o && W === E ? "Map Iterator" : i && W === b ? "Set Iterator" : g && W === M ? "Array Iterator" : P && W === F ? "String Iterator" : W === null ? "Object" : Object.prototype.toString.call(B).slice(k, N);
    }
    return U;
  });
})(ma);
var bd = ma.exports, wd = bd, vd = function(t) {
  return wd(t).toLowerCase();
};
function Ed(e) {
  return e && e.toString ? e.toString() : String(e);
}
var Sd = Ed, Td = {
  global: zp,
  calledInOrder: Xp,
  className: ed,
  deprecated: da,
  every: td,
  functionName: pa,
  orderByFirstCall: id,
  prototypes: gd,
  typeOf: vd,
  valueToString: Sd
};
const ya = Td.global;
let gt;
if (typeof __vitest_required__ < "u")
  try {
    gt = __vitest_required__.timers;
  } catch {
  }
function Rr(e) {
  const t = Math.pow(2, 31) - 1, n = 1e12, s = function() {
  }, r = function() {
    return [];
  }, o = e.setTimeout(s, 0), i = typeof o == "object", a = e.process && typeof e.process.hrtime == "function", c = a && typeof e.process.hrtime.bigint == "function", l = e.process && typeof e.process.nextTick == "function", h = e.process && e.__vitest_required__ && e.__vitest_required__.util.promisify, u = e.performance && typeof e.performance.now == "function", f = e.Performance && (typeof e.Performance).match(/^(function|object)$/), w = e.performance && e.performance.constructor && e.performance.constructor.prototype, b = e.hasOwnProperty("queueMicrotask"), E = e.requestAnimationFrame && typeof e.requestAnimationFrame == "function", g = e.cancelAnimationFrame && typeof e.cancelAnimationFrame == "function", M = e.requestIdleCallback && typeof e.requestIdleCallback == "function", P = e.cancelIdleCallback && typeof e.cancelIdleCallback == "function", F = e.setImmediate && typeof e.setImmediate == "function", k = e.Intl && typeof e.Intl == "object";
  e.clearTimeout(o);
  const N = e.Date, U = e.Intl;
  let B = n;
  function G(v) {
    return Number.isFinite ? Number.isFinite(v) : isFinite(v);
  }
  let ie = !1;
  function W(v, S) {
    v.loopLimit && S === v.loopLimit - 1 && (ie = !0);
  }
  function Se() {
    ie = !1;
  }
  function we(v) {
    if (!v)
      return 0;
    const S = v.split(":"), C = S.length;
    let j = C, m = 0, X;
    if (C > 3 || !/^(\d\d:){0,2}\d\d?$/.test(v))
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    for (; j--; ) {
      if (X = parseInt(S[j], 10), X >= 60)
        throw new Error(`Invalid time ${v}`);
      m += X * Math.pow(60, C - j - 1);
    }
    return m * 1e3;
  }
  function Te(v) {
    const C = v * 1e6 % 1e6, j = C < 0 ? C + 1e6 : C;
    return Math.floor(j);
  }
  function Oe(v) {
    if (!v)
      return 0;
    if (typeof v.getTime == "function")
      return v.getTime();
    if (typeof v == "number")
      return v;
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function _e(v, S, C) {
    return C && C.callAt >= v && C.callAt <= S;
  }
  function Ae(v, S) {
    const C = new Error(
      `Aborting after running ${v.loopLimit} timers, assuming an infinite loop!`
    );
    if (!S.error)
      return C;
    const j = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let m = new RegExp(
      String(Object.keys(v).join("|"))
    );
    i && (m = new RegExp(
      `\\s+at (Object\\.)?(?:${Object.keys(v).join("|")})\\s+`
    ));
    let X = -1;
    S.error.stack.split(`
`).some(function(ge, Ce) {
      return ge.match(j) ? (X = Ce, !0) : ge.match(m) ? (X = Ce, !1) : X >= 0;
    });
    const ye = `${C}
${S.type || "Microtask"} - ${S.func.name || "anonymous"}
${S.error.stack.split(`
`).slice(X + 1).join(`
`)}`;
    try {
      Object.defineProperty(C, "stack", {
        value: ye
      });
    } catch {
    }
    return C;
  }
  function $e(v, S) {
    let C;
    for (C in S)
      S.hasOwnProperty(C) && (v[C] = S[C]);
    return S.now ? v.now = function() {
      return v.clock.now;
    } : delete v.now, S.toSource ? v.toSource = function() {
      return S.toSource();
    } : delete v.toSource, v.toString = function() {
      return S.toString();
    }, v.prototype = S.prototype, v.parse = S.parse, v.UTC = S.UTC, v.prototype.toUTCString = S.prototype.toUTCString, v.isFake = !0, v;
  }
  function ke() {
    function v(S, C, j, m, X, ye, ge) {
      if (!(this instanceof v))
        return new N(v.clock.now).toString();
      switch (arguments.length) {
        case 0:
          return new N(v.clock.now);
        case 1:
          return new N(S);
        case 2:
          return new N(S, C);
        case 3:
          return new N(S, C, j);
        case 4:
          return new N(S, C, j, m);
        case 5:
          return new N(S, C, j, m, X);
        case 6:
          return new N(
            S,
            C,
            j,
            m,
            X,
            ye
          );
        default:
          return new N(
            S,
            C,
            j,
            m,
            X,
            ye,
            ge
          );
      }
    }
    return $e(v, N);
  }
  function p() {
    const v = { ...U };
    return v.DateTimeFormat = function(...S) {
      const C = new U.DateTimeFormat(...S), j = {};
      return ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
        (m) => {
          j[m] = C[m].bind(C);
        }
      ), ["format", "formatToParts"].forEach((m) => {
        j[m] = function(X) {
          return C[m](X || v.clock.now);
        };
      }), j;
    }, v.DateTimeFormat.prototype = Object.create(
      U.DateTimeFormat.prototype
    ), v.DateTimeFormat.supportedLocalesOf = U.DateTimeFormat.supportedLocalesOf, v;
  }
  function T(v, S) {
    v.jobs || (v.jobs = []), v.jobs.push(S);
  }
  function x(v) {
    if (v.jobs) {
      for (let S = 0; S < v.jobs.length; S++) {
        const C = v.jobs[S];
        if (C.func.apply(null, C.args), W(v, S), v.loopLimit && S > v.loopLimit)
          throw Ae(v, C);
      }
      Se(), v.jobs = [];
    }
  }
  function $(v, S) {
    if (S.func === void 0)
      throw new Error("Callback must be provided to timer calls");
    if (i && typeof S.func != "function")
      throw new TypeError(
        `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${S.func} of type ${typeof S.func}`
      );
    if (ie && (S.error = new Error()), S.type = S.immediate ? "Immediate" : "Timeout", S.hasOwnProperty("delay") && (typeof S.delay != "number" && (S.delay = parseInt(S.delay, 10)), G(S.delay) || (S.delay = 0), S.delay = S.delay > t ? 1 : S.delay, S.delay = Math.max(0, S.delay)), S.hasOwnProperty("interval") && (S.type = "Interval", S.interval = S.interval > t ? 1 : S.interval), S.hasOwnProperty("animation") && (S.type = "AnimationFrame", S.animation = !0), S.hasOwnProperty("idleCallback") && (S.type = "IdleCallback", S.idleCallback = !0), v.timers || (v.timers = {}), S.id = B++, S.createdAt = v.now, S.callAt = v.now + (parseInt(S.delay) || (v.duringTick ? 1 : 0)), v.timers[S.id] = S, i) {
      const C = {
        refed: !0,
        ref: function() {
          return this.refed = !0, C;
        },
        unref: function() {
          return this.refed = !1, C;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          return S.callAt = v.now + (parseInt(S.delay) || (v.duringTick ? 1 : 0)), v.timers[S.id] = S, C;
        },
        [Symbol.toPrimitive]: function() {
          return S.id;
        }
      };
      return C;
    }
    return S.id;
  }
  function I(v, S) {
    if (v.callAt < S.callAt)
      return -1;
    if (v.callAt > S.callAt)
      return 1;
    if (v.immediate && !S.immediate)
      return -1;
    if (!v.immediate && S.immediate)
      return 1;
    if (v.createdAt < S.createdAt)
      return -1;
    if (v.createdAt > S.createdAt)
      return 1;
    if (v.id < S.id)
      return -1;
    if (v.id > S.id)
      return 1;
  }
  function R(v, S, C) {
    const j = v.timers;
    let m = null, X, ye;
    for (X in j)
      j.hasOwnProperty(X) && (ye = _e(S, C, j[X]), ye && (!m || I(m, j[X]) === 1) && (m = j[X]));
    return m;
  }
  function _(v) {
    const S = v.timers;
    let C = null, j;
    for (j in S)
      S.hasOwnProperty(j) && (!C || I(C, S[j]) === 1) && (C = S[j]);
    return C;
  }
  function O(v) {
    const S = v.timers;
    let C = null, j;
    for (j in S)
      S.hasOwnProperty(j) && (!C || I(C, S[j]) === -1) && (C = S[j]);
    return C;
  }
  function L(v, S) {
    if (typeof S.interval == "number" ? v.timers[S.id].callAt += S.interval : delete v.timers[S.id], typeof S.func == "function")
      S.func.apply(null, S.args);
    else {
      const C = eval;
      (function() {
        C(S.func);
      })();
    }
  }
  function K(v) {
    return v === "IdleCallback" || v === "AnimationFrame" ? `cancel${v}` : `clear${v}`;
  }
  function J(v) {
    return v === "IdleCallback" || v === "AnimationFrame" ? `request${v}` : `set${v}`;
  }
  function ne() {
    let v = 0;
    return function(S) {
      !v++ && console.warn(S);
    };
  }
  const te = ne();
  function H(v, S, C) {
    if (!S)
      return;
    v.timers || (v.timers = {});
    const j = Number(S);
    if (Number.isNaN(j) || j < n) {
      const m = K(C);
      if (v.shouldClearNativeTimers === !0) {
        const X = v[`_${m}`];
        return typeof X == "function" ? X(S) : void 0;
      }
      te(
        `FakeTimers: ${m} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (v.timers.hasOwnProperty(j)) {
      const m = v.timers[j];
      if (m.type === C || m.type === "Timeout" && C === "Interval" || m.type === "Interval" && C === "Timeout")
        delete v.timers[j];
      else {
        const X = K(C), ye = J(m.type);
        throw new Error(
          `Cannot clear timer: timer created with ${ye}() but cleared with ${X}()`
        );
      }
    }
  }
  function re(v, S) {
    let C, j, m;
    const X = "_hrtime", ye = "_nextTick";
    for (j = 0, m = v.methods.length; j < m; j++) {
      if (C = v.methods[j], C === "hrtime" && e.process)
        e.process.hrtime = v[X];
      else if (C === "nextTick" && e.process)
        e.process.nextTick = v[ye];
      else if (C === "performance") {
        const ge = Object.getOwnPropertyDescriptor(
          v,
          `_${C}`
        );
        ge && ge.get && !ge.set ? Object.defineProperty(
          e,
          C,
          ge
        ) : ge.configurable && (e[C] = v[`_${C}`]);
      } else if (e[C] && e[C].hadOwnProperty)
        e[C] = v[`_${C}`];
      else
        try {
          delete e[C];
        } catch {
        }
      if (v.timersModuleMethods !== void 0)
        for (let ge = 0; ge < v.timersModuleMethods.length; ge++) {
          const Ce = v.timersModuleMethods[ge];
          gt[Ce.methodName] = Ce.original;
        }
    }
    return S.shouldAdvanceTime === !0 && e.clearInterval(v.attachedInterval), v.methods = [], v.timers ? Object.keys(v.timers).map(function(Ce) {
      return v.timers[Ce];
    }) : [];
  }
  function D(v, S, C) {
    if (C[S].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      v,
      S
    ), C[`_${S}`] = v[S], S === "Date") {
      const j = $e(C[S], v[S]);
      v[S] = j;
    } else if (S === "Intl")
      v[S] = C[S];
    else if (S === "performance") {
      const j = Object.getOwnPropertyDescriptor(
        v,
        S
      );
      if (j && j.get && !j.set) {
        Object.defineProperty(
          C,
          `_${S}`,
          j
        );
        const m = Object.getOwnPropertyDescriptor(
          C,
          S
        );
        Object.defineProperty(v, S, m);
      } else
        v[S] = C[S];
    } else
      v[S] = function() {
        return C[S].apply(C, arguments);
      }, Object.defineProperties(
        v[S],
        Object.getOwnPropertyDescriptors(C[S])
      );
    v[S].clock = C;
  }
  function de(v, S) {
    v.tick(S);
  }
  const le = {
    setTimeout: e.setTimeout,
    clearTimeout: e.clearTimeout,
    setInterval: e.setInterval,
    clearInterval: e.clearInterval,
    Date: e.Date
  };
  F && (le.setImmediate = e.setImmediate, le.clearImmediate = e.clearImmediate), a && (le.hrtime = e.process.hrtime), l && (le.nextTick = e.process.nextTick), u && (le.performance = e.performance), E && (le.requestAnimationFrame = e.requestAnimationFrame), b && (le.queueMicrotask = !0), g && (le.cancelAnimationFrame = e.cancelAnimationFrame), M && (le.requestIdleCallback = e.requestIdleCallback), P && (le.cancelIdleCallback = e.cancelIdleCallback), k && (le.Intl = e.Intl);
  const me = e.setImmediate || e.setTimeout;
  function Ne(v, S) {
    v = Math.floor(Oe(v)), S = S || 1e3;
    let C = 0;
    const j = [0, 0];
    if (N === void 0)
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    const m = {
      now: v,
      Date: ke(),
      loopLimit: S
    };
    m.Date.clock = m;
    function X() {
      return 16 - (m.now - v) % 16;
    }
    function ye(Y) {
      const V = m.now - j[0] - v, Q = Math.floor(V / 1e3), ee = (V - Q * 1e3) * 1e6 + C - j[1];
      if (Array.isArray(Y)) {
        if (Y[1] > 1e9)
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        const pe = Y[0];
        let ve = ee - Y[1], Ge = Q - pe;
        return ve < 0 && (ve += 1e9, Ge -= 1), [Ge, ve];
      }
      return [Q, ee];
    }
    function ge() {
      const Y = ye();
      return Y[0] * 1e3 + Y[1] / 1e6;
    }
    c && (ye.bigint = function() {
      const Y = ye();
      return BigInt(Y[0]) * BigInt(1e9) + BigInt(Y[1]);
    }), k && (m.Intl = p(), m.Intl.clock = m), m.requestIdleCallback = function(V, Q) {
      let ee = 0;
      m.countTimers() > 0 && (ee = 50);
      const pe = $(m, {
        func: V,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof Q > "u" ? ee : Math.min(Q, ee),
        idleCallback: !0
      });
      return Number(pe);
    }, m.cancelIdleCallback = function(V) {
      return H(m, V, "IdleCallback");
    }, m.setTimeout = function(V, Q) {
      return $(m, {
        func: V,
        args: Array.prototype.slice.call(arguments, 2),
        delay: Q
      });
    }, typeof e.Promise < "u" && h && (m.setTimeout[h.custom] = function(V, Q) {
      return new e.Promise(function(pe) {
        $(m, {
          func: pe,
          args: [Q],
          delay: V
        });
      });
    }), m.clearTimeout = function(V) {
      return H(m, V, "Timeout");
    }, m.nextTick = function(V) {
      return T(m, {
        func: V,
        args: Array.prototype.slice.call(arguments, 1),
        error: ie ? new Error() : null
      });
    }, m.queueMicrotask = function(V) {
      return m.nextTick(V);
    }, m.setInterval = function(V, Q) {
      return Q = parseInt(Q, 10), $(m, {
        func: V,
        args: Array.prototype.slice.call(arguments, 2),
        delay: Q,
        interval: Q
      });
    }, m.clearInterval = function(V) {
      return H(m, V, "Interval");
    }, F && (m.setImmediate = function(V) {
      return $(m, {
        func: V,
        args: Array.prototype.slice.call(arguments, 1),
        immediate: !0
      });
    }, typeof e.Promise < "u" && h && (m.setImmediate[h.custom] = function(V) {
      return new e.Promise(
        function(ee) {
          $(m, {
            func: ee,
            args: [V],
            immediate: !0
          });
        }
      );
    }), m.clearImmediate = function(V) {
      return H(m, V, "Immediate");
    }), m.countTimers = function() {
      return Object.keys(m.timers || {}).length + (m.jobs || []).length;
    }, m.requestAnimationFrame = function(V) {
      const Q = $(m, {
        func: V,
        delay: X(),
        get args() {
          return [ge()];
        },
        animation: !0
      });
      return Number(Q);
    }, m.cancelAnimationFrame = function(V) {
      return H(m, V, "AnimationFrame");
    }, m.runMicrotasks = function() {
      x(m);
    };
    function Ce(Y, V, Q, ee) {
      const pe = typeof Y == "number" ? Y : we(Y), ve = Math.floor(pe), Ge = Te(pe);
      let pt = C + Ge, je = m.now + ve;
      if (pe < 0)
        throw new TypeError("Negative ticks are not supported");
      pt >= 1e6 && (je += 1, pt -= 1e6), C = pt;
      let d = m.now, y = m.now, A, q, z, Z, se, fe;
      m.duringTick = !0, z = m.now, x(m), z !== m.now && (d += m.now - z, je += m.now - z);
      function xe() {
        for (A = R(m, d, je); A && d <= je; ) {
          if (m.timers[A.id]) {
            d = A.callAt, m.now = A.callAt, z = m.now;
            try {
              x(m), L(m, A);
            } catch (be) {
              q = q || be;
            }
            if (V) {
              me(Z);
              return;
            }
            se();
          }
          fe();
        }
        if (z = m.now, x(m), z !== m.now && (d += m.now - z, je += m.now - z), m.duringTick = !1, A = R(m, d, je), A)
          try {
            m.tick(je - m.now);
          } catch (be) {
            q = q || be;
          }
        else
          m.now = je, C = pt;
        if (q)
          throw q;
        if (V)
          Q(m.now);
        else
          return m.now;
      }
      return Z = V && function() {
        try {
          se(), fe(), xe();
        } catch (be) {
          ee(be);
        }
      }, se = function() {
        z !== m.now && (d += m.now - z, je += m.now - z, y += m.now - z);
      }, fe = function() {
        A = R(m, y, je), y = d;
      }, xe();
    }
    return m.tick = function(V) {
      return Ce(V, !1);
    }, typeof e.Promise < "u" && (m.tickAsync = function(V) {
      return new e.Promise(function(Q, ee) {
        me(function() {
          try {
            Ce(V, !0, Q, ee);
          } catch (pe) {
            ee(pe);
          }
        });
      });
    }), m.next = function() {
      x(m);
      const V = _(m);
      if (!V)
        return m.now;
      m.duringTick = !0;
      try {
        return m.now = V.callAt, L(m, V), x(m), m.now;
      } finally {
        m.duringTick = !1;
      }
    }, typeof e.Promise < "u" && (m.nextAsync = function() {
      return new e.Promise(function(V, Q) {
        me(function() {
          try {
            const ee = _(m);
            if (!ee) {
              V(m.now);
              return;
            }
            let pe;
            m.duringTick = !0, m.now = ee.callAt;
            try {
              L(m, ee);
            } catch (ve) {
              pe = ve;
            }
            m.duringTick = !1, me(function() {
              pe ? Q(pe) : V(m.now);
            });
          } catch (ee) {
            Q(ee);
          }
        });
      });
    }), m.runAll = function() {
      let V, Q;
      for (x(m), Q = 0; Q < m.loopLimit; Q++) {
        if (!m.timers || (V = Object.keys(m.timers).length, V === 0))
          return Se(), m.now;
        m.next(), W(m, Q);
      }
      const ee = _(m);
      throw Ae(m, ee);
    }, m.runToFrame = function() {
      return m.tick(X());
    }, typeof e.Promise < "u" && (m.runAllAsync = function() {
      return new e.Promise(function(V, Q) {
        let ee = 0;
        function pe() {
          me(function() {
            try {
              let ve;
              if (ee < m.loopLimit) {
                if (!m.timers) {
                  Se(), V(m.now);
                  return;
                }
                if (ve = Object.keys(
                  m.timers
                ).length, ve === 0) {
                  Se(), V(m.now);
                  return;
                }
                m.next(), ee++, pe(), W(m, ee);
                return;
              }
              const Ge = _(m);
              Q(Ae(m, Ge));
            } catch (ve) {
              Q(ve);
            }
          });
        }
        pe();
      });
    }), m.runToLast = function() {
      const V = O(m);
      return V ? m.tick(V.callAt - m.now) : (x(m), m.now);
    }, typeof e.Promise < "u" && (m.runToLastAsync = function() {
      return new e.Promise(function(V, Q) {
        me(function() {
          try {
            const ee = O(m);
            ee || V(m.now), V(m.tickAsync(ee.callAt - m.now));
          } catch (ee) {
            Q(ee);
          }
        });
      });
    }), m.reset = function() {
      C = 0, m.timers = {}, m.jobs = [], m.now = v;
    }, m.setSystemTime = function(V) {
      const Q = Oe(V), ee = Q - m.now;
      let pe, ve;
      j[0] = j[0] + ee, j[1] = j[1] + C, m.now = Q, C = 0;
      for (pe in m.timers)
        m.timers.hasOwnProperty(pe) && (ve = m.timers[pe], ve.createdAt += ee, ve.callAt += ee);
    }, m.jump = function(V) {
      const Q = typeof V == "number" ? V : we(V), ee = Math.floor(Q);
      for (const pe of Object.values(m.timers))
        m.now + ee > pe.callAt && (pe.callAt = m.now + ee);
      m.tick(ee);
    }, u && (m.performance = /* @__PURE__ */ Object.create(null), m.performance.now = ge), a && (m.hrtime = ye), m;
  }
  function Pn(v) {
    if (arguments.length > 1 || v instanceof Date || Array.isArray(v) || typeof v == "number")
      throw new TypeError(
        `FakeTimers.install called with ${String(
          v
        )} install requires an object parameter`
      );
    if (e.Date.isFake === !0)
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    if (v = typeof v < "u" ? v : {}, v.shouldAdvanceTime = v.shouldAdvanceTime || !1, v.advanceTimeDelta = v.advanceTimeDelta || 20, v.shouldClearNativeTimers = v.shouldClearNativeTimers || !1, v.target)
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    let S, C;
    const j = Ne(v.now, v.loopLimit);
    if (j.shouldClearNativeTimers = v.shouldClearNativeTimers, j.uninstall = function() {
      return re(j, v);
    }, j.methods = v.toFake || [], j.methods.length === 0 && (j.methods = Object.keys(le).filter(function(m) {
      return m !== "nextTick" && m !== "queueMicrotask";
    })), v.shouldAdvanceTime === !0) {
      const m = de.bind(
        null,
        j,
        v.advanceTimeDelta
      ), X = e.setInterval(
        m,
        v.advanceTimeDelta
      );
      j.attachedInterval = X;
    }
    if (j.methods.includes("performance")) {
      const m = (() => {
        if (w)
          return e.performance.constructor.prototype;
        if (f)
          return e.Performance.prototype;
      })();
      if (m)
        Object.getOwnPropertyNames(m).forEach(function(X) {
          X !== "now" && (j.performance[X] = X.indexOf("getEntries") === 0 ? r : s);
        });
      else if ((v.toFake || []).includes("performance"))
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
    }
    for (e === ya && gt && (j.timersModuleMethods = []), S = 0, C = j.methods.length; S < C; S++) {
      const m = j.methods[S];
      if (m === "hrtime" ? e.process && typeof e.process.hrtime == "function" && D(e.process, m, j) : m === "nextTick" ? e.process && typeof e.process.nextTick == "function" && D(e.process, m, j) : D(e, m, j), j.timersModuleMethods !== void 0 && gt[m]) {
        const X = gt[m];
        j.timersModuleMethods.push({
          methodName: m,
          original: X
        }), gt[m] = e[m];
      }
    }
    return j;
  }
  return {
    timers: le,
    createClock: Ne,
    install: Pn,
    withGlobal: Rr
  };
}
const Dr = Rr(ya);
Dr.timers;
Dr.createClock;
Dr.install;
var xd = Rr;
class Od {
  constructor({
    global: t,
    config: n
  }) {
    oe(this, "_global");
    oe(this, "_clock");
    oe(this, "_fakingTime");
    oe(this, "_fakingDate");
    oe(this, "_fakeTimers");
    oe(this, "_userConfig");
    oe(this, "_now", De.now);
    this._userConfig = n, this._fakingDate = !1, this._fakingTime = !1, this._fakeTimers = xd(t), this._global = t;
  }
  clearAllTimers() {
    this._fakingTime && this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    this._checkFakeTimers() && this._clock.runAll();
  }
  async runAllTimersAsync() {
    this._checkFakeTimers() && await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    this._checkFakeTimers() && this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    this._checkFakeTimers() && await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(t = 1) {
    if (this._checkFakeTimers())
      for (let n = t; n > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); n--)
        ;
  }
  async advanceTimersToNextTimerAsync(t = 1) {
    if (this._checkFakeTimers())
      for (let n = t; n > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); n--)
        ;
  }
  advanceTimersByTime(t) {
    this._checkFakeTimers() && this._clock.tick(t);
  }
  async advanceTimersByTimeAsync(t) {
    this._checkFakeTimers() && await this._clock.tickAsync(t);
  }
  runAllTicks() {
    this._checkFakeTimers() && this._clock.runMicrotasks();
  }
  useRealTimers() {
    this._fakingDate && (_p(), this._fakingDate = !1), this._fakingTime && (this._clock.uninstall(), this._fakingTime = !1);
  }
  useFakeTimers() {
    var t, n, s;
    if (this._fakingDate)
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    if (!this._fakingTime) {
      const r = Object.keys(this._fakeTimers.timers).filter((i) => i !== "nextTick");
      if ((n = (t = this._userConfig) == null ? void 0 : t.toFake) != null && n.includes("nextTick") && ua())
        throw new Error("process.nextTick cannot be mocked inside child_process");
      const o = (((s = this._userConfig) == null ? void 0 : s.toFake) || r).filter((i) => {
        switch (i) {
          case "setImmediate":
          case "clearImmediate":
            return i in this._global && this._global[i];
          default:
            return !0;
        }
      });
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        ...this._userConfig,
        toFake: o
      }), this._fakingTime = !0;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: t } = this._clock;
      this._clock.reset(), this._clock.setSystemTime(t);
    }
  }
  setSystemTime(t) {
    this._fakingTime ? this._clock.setSystemTime(t) : ($p(t ?? this.getRealSystemTime()), this._fakingDate = !0);
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    return this._checkFakeTimers() ? this._clock.countTimers() : 0;
  }
  configure(t) {
    this._userConfig = t;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime)
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    return this._fakingTime;
  }
}
function ga(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function Ad(e, t = {}) {
  const { setTimeout: n, setInterval: s, clearTimeout: r, clearInterval: o } = En(), { interval: i = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, c = new Error("STACK_TRACE_ERROR");
  return new Promise((l, h) => {
    let u, f = "idle", w, b;
    const E = (P) => {
      w && r(w), b && o(b), l(P);
    }, g = () => {
      let P = u;
      P || (P = ga(new Error("Timed out in waitFor!"), c)), h(P);
    }, M = () => {
      if (bn.isFakeTimers() && bn.advanceTimersByTime(i), f !== "pending")
        try {
          const P = e();
          if (P !== null && typeof P == "object" && typeof P.then == "function") {
            const F = P;
            f = "pending", F.then(
              (k) => {
                f = "resolved", E(k);
              },
              (k) => {
                f = "rejected", u = k;
              }
            );
          } else
            return E(P), !0;
        } catch (P) {
          u = P;
        }
    };
    M() !== !0 && (w = n(g, a), b = s(M, i));
  });
}
function Md(e, t = {}) {
  const { setTimeout: n, setInterval: s, clearTimeout: r, clearInterval: o } = En(), { interval: i = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, c = new Error("STACK_TRACE_ERROR");
  return new Promise((l, h) => {
    let u = "idle", f, w;
    const b = (M) => {
      M || (M = ga(new Error("Timed out in waitUntil!"), c)), h(M);
    }, E = (M) => {
      if (M)
        return f && r(f), w && o(w), l(M), !0;
    }, g = () => {
      if (bn.isFakeTimers() && bn.advanceTimersByTime(i), u !== "pending")
        try {
          const M = e();
          if (M !== null && typeof M == "object" && typeof M.then == "function") {
            const P = M;
            u = "pending", P.then(
              (F) => {
                u = "resolved", E(F);
              },
              (F) => {
                u = "rejected", b(F);
              }
            );
          } else
            return E(M);
        } catch (M) {
          b(M);
        }
    };
    g() !== !0 && (f = n(b, a), w = s(g, i));
  });
}
function Pd() {
  const e = typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, {
    get(l, h) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${String(h)}() is forbidden.`
      );
    }
  });
  let t = null, n = null;
  const s = Mr(), r = new Od({
    global: globalThis,
    config: s.config.fakeTimers
  }), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = () => {
    const h = fu({ stackTraceLimit: 4 }).split(`
`)[4], u = Mp(h);
    return (u == null ? void 0 : u.file) || "";
  }, c = {
    useFakeTimers(l) {
      var h, u, f, w;
      if (ua() && ((h = l == null ? void 0 : l.toFake) != null && h.includes("nextTick") || (w = (f = (u = s.config) == null ? void 0 : u.fakeTimers) == null ? void 0 : f.toFake) != null && w.includes("nextTick")))
        throw new Error(
          'vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.'
        );
      return l ? r.configure({ ...s.config.fakeTimers, ...l }) : r.configure(s.config.fakeTimers), r.useFakeTimers(), c;
    },
    isFakeTimers() {
      return r.isFakeTimers();
    },
    useRealTimers() {
      return r.useRealTimers(), t = null, c;
    },
    runOnlyPendingTimers() {
      return r.runOnlyPendingTimers(), c;
    },
    async runOnlyPendingTimersAsync() {
      return await r.runOnlyPendingTimersAsync(), c;
    },
    runAllTimers() {
      return r.runAllTimers(), c;
    },
    async runAllTimersAsync() {
      return await r.runAllTimersAsync(), c;
    },
    runAllTicks() {
      return r.runAllTicks(), c;
    },
    advanceTimersByTime(l) {
      return r.advanceTimersByTime(l), c;
    },
    async advanceTimersByTimeAsync(l) {
      return await r.advanceTimersByTimeAsync(l), c;
    },
    advanceTimersToNextTimer() {
      return r.advanceTimersToNextTimer(), c;
    },
    async advanceTimersToNextTimerAsync() {
      return await r.advanceTimersToNextTimerAsync(), c;
    },
    getTimerCount() {
      return r.getTimerCount();
    },
    setSystemTime(l) {
      const h = l instanceof Date ? l : new Date(l);
      return t = h, r.setSystemTime(h), c;
    },
    getMockedSystemTime() {
      return t;
    },
    getRealSystemTime() {
      return r.getRealSystemTime();
    },
    clearAllTimers() {
      return r.clearAllTimers(), c;
    },
    // mocks
    spyOn: Mf,
    fn: $f,
    waitFor: Ad,
    waitUntil: Md,
    hoisted(l) {
      return ze(l, '"vi.hoisted" factory', ["function"]), l();
    },
    mock(l, h) {
      const u = a();
      e.queueMock(
        l,
        u,
        h ? () => h(() => e.importActual(l, u, e.getMockContext().callstack)) : void 0,
        !0
      );
    },
    unmock(l) {
      e.queueUnmock(l, a());
    },
    doMock(l, h) {
      const u = a();
      e.queueMock(
        l,
        u,
        h ? () => h(() => e.importActual(l, u, e.getMockContext().callstack)) : void 0,
        !1
      );
    },
    doUnmock(l) {
      e.queueUnmock(l, a());
    },
    async importActual(l) {
      return e.importActual(
        l,
        a(),
        e.getMockContext().callstack
      );
    },
    async importMock(l) {
      return e.importMock(l, a());
    },
    // this is typed in the interface so it's not necessary to type it here
    mocked(l, h = {}) {
      return l;
    },
    isMockFunction(l) {
      return qi(l);
    },
    clearAllMocks() {
      return un.forEach((l) => l.mockClear()), c;
    },
    resetAllMocks() {
      return un.forEach((l) => l.mockReset()), c;
    },
    restoreAllMocks() {
      return un.forEach((l) => l.mockRestore()), c;
    },
    stubGlobal(l, h) {
      return o.has(l) || o.set(l, Object.getOwnPropertyDescriptor(globalThis, l)), Object.defineProperty(globalThis, l, {
        value: h,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }), c;
    },
    stubEnv(l, h) {
      return i.has(l) || i.set(l, process.env[l]), process.env[l] = h, c;
    },
    unstubAllGlobals() {
      return o.forEach((l, h) => {
        l ? Object.defineProperty(globalThis, h, l) : Reflect.deleteProperty(globalThis, h);
      }), o.clear(), c;
    },
    unstubAllEnvs() {
      return i.forEach((l, h) => {
        l === void 0 ? delete process.env[h] : process.env[h] = l;
      }), i.clear(), c;
    },
    resetModules() {
      return Cp(s.moduleCache), c;
    },
    async dynamicImportSettled() {
      return la();
    },
    setConfig(l) {
      n || (n = { ...s.config }), Object.assign(s.config, l);
    },
    resetConfig() {
      n && Object.assign(s.config, n);
    }
  };
  return c;
}
const $d = Pd(), bn = $d;
sl("Tooltip", () => {
  let e;
  const t = "Hello!";
  hl(() => {
    e = new Ta();
  }), pl(() => {
    document.body.innerHTML = "";
  }), nn("should inject a hidden div into the body when created", () => {
    const r = document.querySelector("body > div");
    Ue(r.style.getPropertyValue("opacity")).toEqual("0"), Ue(r).toMatchSnapshot();
  }), nn("should make tooltip visible with specified text, on top of a certain anchor point, after calling .show()", () => {
    e.show(t, 500, 1e3);
    const r = document.querySelector("body > div");
    Ue(r.style.getPropertyValue("opacity")).toEqual("1");
    const o = 500 - r.offsetWidth / 2 + "px";
    Ue(r.style.getPropertyValue("left")).toEqual(o);
    const i = 1e3 - r.offsetHeight - 10 + "px";
    Ue(r.style.getPropertyValue("top")).toEqual(i);
    const a = r.querySelector("span");
    Ue(a == null ? void 0 : a.textContent).toBe(t);
  }), nn("should hide the tooltip, after calling .show() and then .hide()", () => {
    e.show(t, 500, 1e3), e.hide();
    const r = document.querySelector("body > div");
    Ue(r.style.getPropertyValue("opacity")).toEqual("0");
  }), nn("should remove the tooltip, after calling .destroy()", () => {
    e.destroy();
    const r = document.querySelector("body > div");
    Ue(r).toBeNull();
  });
});
