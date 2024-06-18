import { R as Kn, a as ht, d as gt, e as pt, C as mt, b as Xn, c as Ln, f as xt, i as $n, g as In, h as Bn, j as dt, n as hn, k as yt } from "./transform-Dvy5dDsS.js";
import { c as H, r as vt, g as Mt } from "./___vite-browser-external_commonjs-proxy-CWEl3h-z.js";
function gn(n, t) {
  return n == null || t == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function wt(n, t) {
  return n == null || t == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function nt(n) {
  let t, i, o;
  n.length !== 2 ? (t = gn, i = (a, r) => gn(n(a), r), o = (a, r) => n(a) - r) : (t = n === gn || n === wt ? n : $t, i = n, o = n);
  function f(a, r, e = 0, c = a.length) {
    if (e < c) {
      if (t(r, r) !== 0)
        return c;
      do {
        const u = e + c >>> 1;
        i(a[u], r) < 0 ? e = u + 1 : c = u;
      } while (e < c);
    }
    return e;
  }
  function h(a, r, e = 0, c = a.length) {
    if (e < c) {
      if (t(r, r) !== 0)
        return c;
      do {
        const u = e + c >>> 1;
        i(a[u], r) <= 0 ? e = u + 1 : c = u;
      } while (e < c);
    }
    return e;
  }
  function l(a, r, e = 0, c = a.length) {
    const u = f(a, r, e, c - 1);
    return u > e && o(a[u - 1], r) > -o(a[u], r) ? u - 1 : u;
  }
  return { left: f, center: l, right: h };
}
function $t() {
  return 0;
}
function bt(n) {
  return n === null ? NaN : +n;
}
const At = nt(gn), Nt = At.right;
nt(bt).center;
const kt = Math.sqrt(50), _t = Math.sqrt(10), St = Math.sqrt(2);
function mn(n, t, i) {
  const o = (t - n) / Math.max(0, i), f = Math.floor(Math.log10(o)), h = o / Math.pow(10, f), l = h >= kt ? 10 : h >= _t ? 5 : h >= St ? 2 : 1;
  let a, r, e;
  return f < 0 ? (e = Math.pow(10, -f) / l, a = Math.round(n * e), r = Math.round(t * e), a / e < n && ++a, r / e > t && --r, e = -e) : (e = Math.pow(10, f) * l, a = Math.round(n / e), r = Math.round(t / e), a * e < n && ++a, r * e > t && --r), r < a && 0.5 <= i && i < 2 ? mn(n, t, i * 2) : [a, r, e];
}
function Rt(n, t, i) {
  if (t = +t, n = +n, i = +i, !(i > 0))
    return [];
  if (n === t)
    return [n];
  const o = t < n, [f, h, l] = o ? mn(t, n, i) : mn(n, t, i);
  if (!(h >= f))
    return [];
  const a = h - f + 1, r = new Array(a);
  if (o)
    if (l < 0)
      for (let e = 0; e < a; ++e)
        r[e] = (h - e) / -l;
    else
      for (let e = 0; e < a; ++e)
        r[e] = (h - e) * l;
  else if (l < 0)
    for (let e = 0; e < a; ++e)
      r[e] = (f + e) / -l;
  else
    for (let e = 0; e < a; ++e)
      r[e] = (f + e) * l;
  return r;
}
function bn(n, t, i) {
  return t = +t, n = +n, i = +i, mn(n, t, i)[2];
}
function Ct(n, t, i) {
  t = +t, n = +n, i = +i;
  const o = t < n, f = o ? bn(t, n, i) : bn(n, t, i);
  return (o ? -1 : 1) * (f < 0 ? 1 / -f : f);
}
const Pt = Math.PI / 180, jt = 180 / Math.PI;
var tt = -0.14861, Sn = 1.78277, Rn = -0.29227, vn = -0.90649, un = 1.97294, Gn = un * vn, Fn = un * Sn, Vn = Sn * Rn - vn * tt;
function zt(n) {
  if (n instanceof Y)
    return new Y(n.h, n.s, n.l, n.opacity);
  n instanceof Kn || (n = ht(n));
  var t = n.r / 255, i = n.g / 255, o = n.b / 255, f = (Vn * o + Gn * t - Fn * i) / (Vn + Gn - Fn), h = o - f, l = (un * (i - f) - Rn * h) / vn, a = Math.sqrt(l * l + h * h) / (un * f * (1 - f)), r = a ? Math.atan2(l, h) * jt - 120 : NaN;
  return new Y(r < 0 ? r + 360 : r, a, f, n.opacity);
}
function Z(n, t, i, o) {
  return arguments.length === 1 ? zt(n) : new Y(n, t, i, o ?? 1);
}
function Y(n, t, i, o) {
  this.h = +n, this.s = +t, this.l = +i, this.opacity = +o;
}
gt(Y, Z, pt(mt, {
  brighter(n) {
    return n = n == null ? Xn : Math.pow(Xn, n), new Y(this.h, this.s, this.l * n, this.opacity);
  },
  darker(n) {
    return n = n == null ? Ln : Math.pow(Ln, n), new Y(this.h, this.s, this.l * n, this.opacity);
  },
  rgb() {
    var n = isNaN(this.h) ? 0 : (this.h + 120) * Pt, t = +this.l, i = isNaN(this.s) ? 0 : this.s * t * (1 - t), o = Math.cos(n), f = Math.sin(n);
    return new Kn(
      255 * (t + i * (tt * o + Sn * f)),
      255 * (t + i * (Rn * o + vn * f)),
      255 * (t + i * (un * o)),
      this.opacity
    );
  }
}));
function Dt(n, t) {
  t || (t = []);
  var i = n ? Math.min(t.length, n.length) : 0, o = t.slice(), f;
  return function(h) {
    for (f = 0; f < i; ++f)
      o[f] = n[f] * (1 - h) + t[f] * h;
    return o;
  };
}
function Et(n) {
  return ArrayBuffer.isView(n) && !(n instanceof DataView);
}
function Tt(n, t) {
  var i = t ? t.length : 0, o = n ? Math.min(i, n.length) : 0, f = new Array(o), h = new Array(i), l;
  for (l = 0; l < o; ++l)
    f[l] = Mn(n[l], t[l]);
  for (; l < i; ++l)
    h[l] = t[l];
  return function(a) {
    for (l = 0; l < o; ++l)
      h[l] = f[l](a);
    return h;
  };
}
function qt(n, t) {
  var i = /* @__PURE__ */ new Date();
  return n = +n, t = +t, function(o) {
    return i.setTime(n * (1 - o) + t * o), i;
  };
}
function Xt(n, t) {
  var i = {}, o = {}, f;
  (n === null || typeof n != "object") && (n = {}), (t === null || typeof t != "object") && (t = {});
  for (f in t)
    f in n ? i[f] = Mn(n[f], t[f]) : o[f] = t[f];
  return function(h) {
    for (f in i)
      o[f] = i[f](h);
    return o;
  };
}
function Mn(n, t) {
  var i = typeof t, o;
  return t == null || i === "boolean" ? xt(t) : (i === "number" ? $n : i === "string" ? (o = In(t)) ? (t = o, Bn) : dt : t instanceof In ? Bn : t instanceof Date ? qt : Et(t) ? Dt : Array.isArray(t) ? Tt : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Xt : $n)(n, t);
}
function rt(n, t) {
  return n = +n, t = +t, function(i) {
    return Math.round(n * (1 - i) + t * i);
  };
}
function et(n) {
  return function t(i) {
    i = +i;
    function o(f, h) {
      var l = n((f = Z(f)).h, (h = Z(h)).h), a = hn(f.s, h.s), r = hn(f.l, h.l), e = hn(f.opacity, h.opacity);
      return function(c) {
        return f.h = l(c), f.s = a(c), f.l = r(Math.pow(c, i)), f.opacity = e(c), f + "";
      };
    }
    return o.gamma = t, o;
  }(1);
}
et(yt);
var it = et(hn);
const An = Math.PI, Nn = 2 * An, W = 1e-6, Lt = Nn - W;
function at(n) {
  this._ += n[0];
  for (let t = 1, i = n.length; t < i; ++t)
    this._ += arguments[t] + n[t];
}
function It(n) {
  let t = Math.floor(n);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${n}`);
  if (t > 15)
    return at;
  const i = 10 ** t;
  return function(o) {
    this._ += o[0];
    for (let f = 1, h = o.length; f < h; ++f)
      this._ += Math.round(arguments[f] * i) / i + o[f];
  };
}
class Bt {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? at : It(t);
  }
  moveTo(t, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +i}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, i) {
    this._append`L${this._x1 = +t},${this._y1 = +i}`;
  }
  quadraticCurveTo(t, i, o, f) {
    this._append`Q${+t},${+i},${this._x1 = +o},${this._y1 = +f}`;
  }
  bezierCurveTo(t, i, o, f, h, l) {
    this._append`C${+t},${+i},${+o},${+f},${this._x1 = +h},${this._y1 = +l}`;
  }
  arcTo(t, i, o, f, h) {
    if (t = +t, i = +i, o = +o, f = +f, h = +h, h < 0)
      throw new Error(`negative radius: ${h}`);
    let l = this._x1, a = this._y1, r = o - t, e = f - i, c = l - t, u = a - i, s = c * c + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = i}`;
    else if (s > W)
      if (!(Math.abs(u * r - e * c) > W) || !h)
        this._append`L${this._x1 = t},${this._y1 = i}`;
      else {
        let g = o - l, p = f - a, v = r * r + e * e, $ = g * g + p * p, x = Math.sqrt(v), A = Math.sqrt(s), b = h * Math.tan((An - Math.acos((v + s - $) / (2 * x * A))) / 2), M = b / A, d = b / x;
        Math.abs(M - 1) > W && this._append`L${t + M * c},${i + M * u}`, this._append`A${h},${h},0,0,${+(u * g > c * p)},${this._x1 = t + d * r},${this._y1 = i + d * e}`;
      }
  }
  arc(t, i, o, f, h, l) {
    if (t = +t, i = +i, o = +o, l = !!l, o < 0)
      throw new Error(`negative radius: ${o}`);
    let a = o * Math.cos(f), r = o * Math.sin(f), e = t + a, c = i + r, u = 1 ^ l, s = l ? f - h : h - f;
    this._x1 === null ? this._append`M${e},${c}` : (Math.abs(this._x1 - e) > W || Math.abs(this._y1 - c) > W) && this._append`L${e},${c}`, o && (s < 0 && (s = s % Nn + Nn), s > Lt ? this._append`A${o},${o},0,1,${u},${t - a},${i - r}A${o},${o},0,1,${u},${this._x1 = e},${this._y1 = c}` : s > W && this._append`A${o},${o},0,${+(s >= An)},${u},${this._x1 = t + o * Math.cos(h)},${this._y1 = i + o * Math.sin(h)}`);
  }
  rect(t, i, o, f) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +i}h${o = +o}v${+f}h${-o}Z`;
  }
  toString() {
    return this._;
  }
}
function Gt(n) {
  return Math.abs(n = Math.round(n)) >= 1e21 ? n.toLocaleString("en").replace(/,/g, "") : n.toString(10);
}
function xn(n, t) {
  if ((i = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0)
    return null;
  var i, o = n.slice(0, i);
  return [
    o.length > 1 ? o[0] + o.slice(2) : o,
    +n.slice(i + 1)
  ];
}
function an(n) {
  return n = xn(Math.abs(n)), n ? n[1] : NaN;
}
function Ft(n, t) {
  return function(i, o) {
    for (var f = i.length, h = [], l = 0, a = n[0], r = 0; f > 0 && a > 0 && (r + a + 1 > o && (a = Math.max(1, o - r)), h.push(i.substring(f -= a, f + a)), !((r += a + 1) > o)); )
      a = n[l = (l + 1) % n.length];
    return h.reverse().join(t);
  };
}
function Vt(n) {
  return function(t) {
    return t.replace(/[0-9]/g, function(i) {
      return n[+i];
    });
  };
}
var Ot = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function dn(n) {
  if (!(t = Ot.exec(n)))
    throw new Error("invalid format: " + n);
  var t;
  return new Cn({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
dn.prototype = Cn.prototype;
function Cn(n) {
  this.fill = n.fill === void 0 ? " " : n.fill + "", this.align = n.align === void 0 ? ">" : n.align + "", this.sign = n.sign === void 0 ? "-" : n.sign + "", this.symbol = n.symbol === void 0 ? "" : n.symbol + "", this.zero = !!n.zero, this.width = n.width === void 0 ? void 0 : +n.width, this.comma = !!n.comma, this.precision = n.precision === void 0 ? void 0 : +n.precision, this.trim = !!n.trim, this.type = n.type === void 0 ? "" : n.type + "";
}
Cn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Zt(n) {
  n:
    for (var t = n.length, i = 1, o = -1, f; i < t; ++i)
      switch (n[i]) {
        case ".":
          o = f = i;
          break;
        case "0":
          o === 0 && (o = i), f = i;
          break;
        default:
          if (!+n[i])
            break n;
          o > 0 && (o = 0);
          break;
      }
  return o > 0 ? n.slice(0, o) + n.slice(f + 1) : n;
}
var ot;
function Ut(n, t) {
  var i = xn(n, t);
  if (!i)
    return n + "";
  var o = i[0], f = i[1], h = f - (ot = Math.max(-8, Math.min(8, Math.floor(f / 3))) * 3) + 1, l = o.length;
  return h === l ? o : h > l ? o + new Array(h - l + 1).join("0") : h > 0 ? o.slice(0, h) + "." + o.slice(h) : "0." + new Array(1 - h).join("0") + xn(n, Math.max(0, t + h - 1))[0];
}
function On(n, t) {
  var i = xn(n, t);
  if (!i)
    return n + "";
  var o = i[0], f = i[1];
  return f < 0 ? "0." + new Array(-f).join("0") + o : o.length > f + 1 ? o.slice(0, f + 1) + "." + o.slice(f + 1) : o + new Array(f - o.length + 2).join("0");
}
const Zn = {
  "%": (n, t) => (n * 100).toFixed(t),
  b: (n) => Math.round(n).toString(2),
  c: (n) => n + "",
  d: Gt,
  e: (n, t) => n.toExponential(t),
  f: (n, t) => n.toFixed(t),
  g: (n, t) => n.toPrecision(t),
  o: (n) => Math.round(n).toString(8),
  p: (n, t) => On(n * 100, t),
  r: On,
  s: Ut,
  X: (n) => Math.round(n).toString(16).toUpperCase(),
  x: (n) => Math.round(n).toString(16)
};
function Un(n) {
  return n;
}
var Qn = Array.prototype.map, Wn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Qt(n) {
  var t = n.grouping === void 0 || n.thousands === void 0 ? Un : Ft(Qn.call(n.grouping, Number), n.thousands + ""), i = n.currency === void 0 ? "" : n.currency[0] + "", o = n.currency === void 0 ? "" : n.currency[1] + "", f = n.decimal === void 0 ? "." : n.decimal + "", h = n.numerals === void 0 ? Un : Vt(Qn.call(n.numerals, String)), l = n.percent === void 0 ? "%" : n.percent + "", a = n.minus === void 0 ? "−" : n.minus + "", r = n.nan === void 0 ? "NaN" : n.nan + "";
  function e(u) {
    u = dn(u);
    var s = u.fill, g = u.align, p = u.sign, v = u.symbol, $ = u.zero, x = u.width, A = u.comma, b = u.precision, M = u.trim, d = u.type;
    d === "n" ? (A = !0, d = "g") : Zn[d] || (b === void 0 && (b = 12), M = !0, d = "g"), ($ || s === "0" && g === "=") && ($ = !0, s = "0", g = "=");
    var _ = v === "$" ? i : v === "#" && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", S = v === "$" ? o : /[%p]/.test(d) ? l : "", N = Zn[d], C = /[defgprs%]/.test(d);
    b = b === void 0 ? 6 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function R(y) {
      var k = _, m = S, w, P, j;
      if (d === "c")
        m = N(y) + m, y = "";
      else {
        y = +y;
        var L = y < 0 || 1 / y < 0;
        if (y = isNaN(y) ? r : N(Math.abs(y), b), M && (y = Zt(y)), L && +y == 0 && p !== "+" && (L = !1), k = (L ? p === "(" ? p : a : p === "-" || p === "(" ? "" : p) + k, m = (d === "s" ? Wn[8 + ot / 3] : "") + m + (L && p === "(" ? ")" : ""), C) {
          for (w = -1, P = y.length; ++w < P; )
            if (j = y.charCodeAt(w), 48 > j || j > 57) {
              m = (j === 46 ? f + y.slice(w + 1) : y.slice(w)) + m, y = y.slice(0, w);
              break;
            }
        }
      }
      A && !$ && (y = t(y, 1 / 0));
      var E = k.length + y.length + m.length, z = E < x ? new Array(x - E + 1).join(s) : "";
      switch (A && $ && (y = t(z + y, z.length ? x - m.length : 1 / 0), z = ""), g) {
        case "<":
          y = k + y + m + z;
          break;
        case "=":
          y = k + z + y + m;
          break;
        case "^":
          y = z.slice(0, E = z.length >> 1) + k + y + m + z.slice(E);
          break;
        default:
          y = z + k + y + m;
          break;
      }
      return h(y);
    }
    return R.toString = function() {
      return u + "";
    }, R;
  }
  function c(u, s) {
    var g = e((u = dn(u), u.type = "f", u)), p = Math.max(-8, Math.min(8, Math.floor(an(s) / 3))) * 3, v = Math.pow(10, -p), $ = Wn[8 + p / 3];
    return function(x) {
      return g(v * x) + $;
    };
  }
  return {
    format: e,
    formatPrefix: c
  };
}
var cn, ut, st;
Wt({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Wt(n) {
  return cn = Qt(n), ut = cn.format, st = cn.formatPrefix, cn;
}
function Yt(n) {
  return Math.max(0, -an(Math.abs(n)));
}
function Ht(n, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(an(t) / 3))) * 3 - an(Math.abs(n)));
}
function Jt(n, t) {
  return n = Math.abs(n), t = Math.abs(t) - n, Math.max(0, an(t) - an(n)) + 1;
}
function Kt(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(n);
      break;
    default:
      this.range(t).domain(n);
      break;
  }
  return this;
}
function nr(n, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof n == "function" ? this.interpolator(n) : this.range(n);
      break;
    }
    default: {
      this.domain(n), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
function tr(n) {
  return function() {
    return n;
  };
}
function rr(n) {
  return +n;
}
var Yn = [0, 1];
function O(n) {
  return n;
}
function kn(n, t) {
  return (t -= n = +n) ? function(i) {
    return (i - n) / t;
  } : tr(isNaN(t) ? NaN : 0.5);
}
function er(n, t) {
  var i;
  return n > t && (i = n, n = t, t = i), function(o) {
    return Math.max(n, Math.min(t, o));
  };
}
function ir(n, t, i) {
  var o = n[0], f = n[1], h = t[0], l = t[1];
  return f < o ? (o = kn(f, o), h = i(l, h)) : (o = kn(o, f), h = i(h, l)), function(a) {
    return h(o(a));
  };
}
function ar(n, t, i) {
  var o = Math.min(n.length, t.length) - 1, f = new Array(o), h = new Array(o), l = -1;
  for (n[o] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++l < o; )
    f[l] = kn(n[l], n[l + 1]), h[l] = i(t[l], t[l + 1]);
  return function(a) {
    var r = Nt(n, a, 1, o) - 1;
    return h[r](f[r](a));
  };
}
function or(n, t) {
  return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
}
function ur() {
  var n = Yn, t = Yn, i = Mn, o, f, h, l = O, a, r, e;
  function c() {
    var s = Math.min(n.length, t.length);
    return l !== O && (l = er(n[0], n[s - 1])), a = s > 2 ? ar : ir, r = e = null, u;
  }
  function u(s) {
    return s == null || isNaN(s = +s) ? h : (r || (r = a(n.map(o), t, i)))(o(l(s)));
  }
  return u.invert = function(s) {
    return l(f((e || (e = a(t, n.map(o), $n)))(s)));
  }, u.domain = function(s) {
    return arguments.length ? (n = Array.from(s, rr), c()) : n.slice();
  }, u.range = function(s) {
    return arguments.length ? (t = Array.from(s), c()) : t.slice();
  }, u.rangeRound = function(s) {
    return t = Array.from(s), i = rt, c();
  }, u.clamp = function(s) {
    return arguments.length ? (l = s ? !0 : O, c()) : l !== O;
  }, u.interpolate = function(s) {
    return arguments.length ? (i = s, c()) : i;
  }, u.unknown = function(s) {
    return arguments.length ? (h = s, u) : h;
  }, function(s, g) {
    return o = s, f = g, c();
  };
}
function sr() {
  return ur()(O, O);
}
function cr(n, t, i, o) {
  var f = Ct(n, t, i), h;
  switch (o = dn(o ?? ",f"), o.type) {
    case "s": {
      var l = Math.max(Math.abs(n), Math.abs(t));
      return o.precision == null && !isNaN(h = Ht(f, l)) && (o.precision = h), st(o, l);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      o.precision == null && !isNaN(h = Jt(f, Math.max(Math.abs(n), Math.abs(t)))) && (o.precision = h - (o.type === "e"));
      break;
    }
    case "f":
    case "%": {
      o.precision == null && !isNaN(h = Yt(f)) && (o.precision = h - (o.type === "%") * 2);
      break;
    }
  }
  return ut(o);
}
function ct(n) {
  var t = n.domain;
  return n.ticks = function(i) {
    var o = t();
    return Rt(o[0], o[o.length - 1], i ?? 10);
  }, n.tickFormat = function(i, o) {
    var f = t();
    return cr(f[0], f[f.length - 1], i ?? 10, o);
  }, n.nice = function(i) {
    i == null && (i = 10);
    var o = t(), f = 0, h = o.length - 1, l = o[f], a = o[h], r, e, c = 10;
    for (a < l && (e = l, l = a, a = e, e = f, f = h, h = e); c-- > 0; ) {
      if (e = bn(l, a, i), e === r)
        return o[f] = l, o[h] = a, t(o);
      if (e > 0)
        l = Math.floor(l / e) * e, a = Math.ceil(a / e) * e;
      else if (e < 0)
        l = Math.ceil(l * e) / e, a = Math.floor(a * e) / e;
      else
        break;
      r = e;
    }
    return n;
  }, n;
}
function _n() {
  var n = sr();
  return n.copy = function() {
    return or(n, _n());
  }, Kt.apply(n, arguments), ct(n);
}
function fr() {
  var n = 0, t = 1, i, o, f, h, l = O, a = !1, r;
  function e(u) {
    return u == null || isNaN(u = +u) ? r : l(f === 0 ? 0.5 : (u = (h(u) - i) * f, a ? Math.max(0, Math.min(1, u)) : u));
  }
  e.domain = function(u) {
    return arguments.length ? ([n, t] = u, i = h(n = +n), o = h(t = +t), f = i === o ? 0 : 1 / (o - i), e) : [n, t];
  }, e.clamp = function(u) {
    return arguments.length ? (a = !!u, e) : a;
  }, e.interpolator = function(u) {
    return arguments.length ? (l = u, e) : l;
  };
  function c(u) {
    return function(s) {
      var g, p;
      return arguments.length ? ([g, p] = s, l = u(g, p), e) : [l(0), l(1)];
    };
  }
  return e.range = c(Mn), e.rangeRound = c(rt), e.unknown = function(u) {
    return arguments.length ? (r = u, e) : r;
  }, function(u) {
    return h = u, i = u(n), o = u(t), f = i === o ? 0 : 1 / (o - i), e;
  };
}
function lr(n, t) {
  return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
}
function ft() {
  var n = ct(fr()(O));
  return n.copy = function() {
    return lr(n, ft());
  }, nr.apply(n, arguments);
}
it(Z(-100, 0.75, 0.35), Z(80, 1.5, 0.8));
it(Z(260, 0.75, 0.35), Z(80, 1.5, 0.8));
var fn = Z();
function hr(n) {
  (n < 0 || n > 1) && (n -= Math.floor(n));
  var t = Math.abs(n - 0.5);
  return fn.h = 360 * n - 100, fn.s = 1.5 - 1.5 * t, fn.l = 0.8 - 0.9 * t, fn + "";
}
function q(n) {
  return function() {
    return n;
  };
}
const Hn = Math.abs, D = Math.atan2, Q = Math.cos, gr = Math.max, wn = Math.min, V = Math.sin, en = Math.sqrt, X = 1e-12, sn = Math.PI, yn = sn / 2, pn = 2 * sn;
function pr(n) {
  return n > 1 ? 0 : n < -1 ? sn : Math.acos(n);
}
function Jn(n) {
  return n >= 1 ? yn : n <= -1 ? -yn : Math.asin(n);
}
function mr(n) {
  let t = 3;
  return n.digits = function(i) {
    if (!arguments.length)
      return t;
    if (i == null)
      t = null;
    else {
      const o = Math.floor(i);
      if (!(o >= 0))
        throw new RangeError(`invalid digits: ${i}`);
      t = o;
    }
    return n;
  }, () => new Bt(t);
}
function xr(n) {
  return n.innerRadius;
}
function dr(n) {
  return n.outerRadius;
}
function yr(n) {
  return n.startAngle;
}
function vr(n) {
  return n.endAngle;
}
function Mr(n) {
  return n && n.padAngle;
}
function wr(n, t, i, o, f, h, l, a) {
  var r = i - n, e = o - t, c = l - f, u = a - h, s = u * r - c * e;
  if (!(s * s < X))
    return s = (c * (t - h) - u * (n - f)) / s, [n + s * r, t + s * e];
}
function ln(n, t, i, o, f, h, l) {
  var a = n - i, r = t - o, e = (l ? h : -h) / en(a * a + r * r), c = e * r, u = -e * a, s = n + c, g = t + u, p = i + c, v = o + u, $ = (s + p) / 2, x = (g + v) / 2, A = p - s, b = v - g, M = A * A + b * b, d = f - h, _ = s * v - p * g, S = (b < 0 ? -1 : 1) * en(gr(0, d * d * M - _ * _)), N = (_ * b - A * S) / M, C = (-_ * A - b * S) / M, R = (_ * b + A * S) / M, y = (-_ * A + b * S) / M, k = N - $, m = C - x, w = R - $, P = y - x;
  return k * k + m * m > w * w + P * P && (N = R, C = y), {
    cx: N,
    cy: C,
    x01: -c,
    y01: -u,
    x11: N * (f / d - 1),
    y11: C * (f / d - 1)
  };
}
function $r() {
  var n = xr, t = dr, i = q(0), o = null, f = yr, h = vr, l = Mr, a = null, r = mr(e);
  function e() {
    var c, u, s = +n.apply(this, arguments), g = +t.apply(this, arguments), p = f.apply(this, arguments) - yn, v = h.apply(this, arguments) - yn, $ = Hn(v - p), x = v > p;
    if (a || (a = c = r()), g < s && (u = g, g = s, s = u), !(g > X))
      a.moveTo(0, 0);
    else if ($ > pn - X)
      a.moveTo(g * Q(p), g * V(p)), a.arc(0, 0, g, p, v, !x), s > X && (a.moveTo(s * Q(v), s * V(v)), a.arc(0, 0, s, v, p, x));
    else {
      var A = p, b = v, M = p, d = v, _ = $, S = $, N = l.apply(this, arguments) / 2, C = N > X && (o ? +o.apply(this, arguments) : en(s * s + g * g)), R = wn(Hn(g - s) / 2, +i.apply(this, arguments)), y = R, k = R, m, w;
      if (C > X) {
        var P = Jn(C / s * V(N)), j = Jn(C / g * V(N));
        (_ -= P * 2) > X ? (P *= x ? 1 : -1, M += P, d -= P) : (_ = 0, M = d = (p + v) / 2), (S -= j * 2) > X ? (j *= x ? 1 : -1, A += j, b -= j) : (S = 0, A = b = (p + v) / 2);
      }
      var L = g * Q(A), E = g * V(A), z = s * Q(d), B = s * V(d);
      if (R > X) {
        var I = g * Q(b), T = g * V(b), F = s * Q(M), K = s * V(M), G;
        if ($ < sn)
          if (G = wr(L, E, F, K, I, T, z, B)) {
            var nn = L - G[0], U = E - G[1], tn = I - G[0], rn = T - G[1], on = 1 / V(pr((nn * tn + U * rn) / (en(nn * nn + U * U) * en(tn * tn + rn * rn))) / 2), qn = en(G[0] * G[0] + G[1] * G[1]);
            y = wn(R, (s - qn) / (on - 1)), k = wn(R, (g - qn) / (on + 1));
          } else
            y = k = 0;
      }
      S > X ? k > X ? (m = ln(F, K, L, E, g, k, x), w = ln(I, T, z, B, g, k, x), a.moveTo(m.cx + m.x01, m.cy + m.y01), k < R ? a.arc(m.cx, m.cy, k, D(m.y01, m.x01), D(w.y01, w.x01), !x) : (a.arc(m.cx, m.cy, k, D(m.y01, m.x01), D(m.y11, m.x11), !x), a.arc(0, 0, g, D(m.cy + m.y11, m.cx + m.x11), D(w.cy + w.y11, w.cx + w.x11), !x), a.arc(w.cx, w.cy, k, D(w.y11, w.x11), D(w.y01, w.x01), !x))) : (a.moveTo(L, E), a.arc(0, 0, g, A, b, !x)) : a.moveTo(L, E), !(s > X) || !(_ > X) ? a.lineTo(z, B) : y > X ? (m = ln(z, B, I, T, s, -y, x), w = ln(L, E, F, K, s, -y, x), a.lineTo(m.cx + m.x01, m.cy + m.y01), y < R ? a.arc(m.cx, m.cy, y, D(m.y01, m.x01), D(w.y01, w.x01), !x) : (a.arc(m.cx, m.cy, y, D(m.y01, m.x01), D(m.y11, m.x11), !x), a.arc(0, 0, s, D(m.cy + m.y11, m.cx + m.x11), D(w.cy + w.y11, w.cx + w.x11), x), a.arc(w.cx, w.cy, y, D(w.y11, w.x11), D(w.y01, w.x01), !x))) : a.arc(0, 0, s, d, M, x);
    }
    if (a.closePath(), c)
      return a = null, c + "" || null;
  }
  return e.centroid = function() {
    var c = (+n.apply(this, arguments) + +t.apply(this, arguments)) / 2, u = (+f.apply(this, arguments) + +h.apply(this, arguments)) / 2 - sn / 2;
    return [Q(u) * c, V(u) * c];
  }, e.innerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : q(+c), e) : n;
  }, e.outerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : q(+c), e) : t;
  }, e.cornerRadius = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : q(+c), e) : i;
  }, e.padRadius = function(c) {
    return arguments.length ? (o = c == null ? null : typeof c == "function" ? c : q(+c), e) : o;
  }, e.startAngle = function(c) {
    return arguments.length ? (f = typeof c == "function" ? c : q(+c), e) : f;
  }, e.endAngle = function(c) {
    return arguments.length ? (h = typeof c == "function" ? c : q(+c), e) : h;
  }, e.padAngle = function(c) {
    return arguments.length ? (l = typeof c == "function" ? c : q(+c), e) : l;
  }, e.context = function(c) {
    return arguments.length ? (a = c ?? null, e) : a;
  }, e;
}
function br(n) {
  return typeof n == "object" && "length" in n ? n : Array.from(n);
}
function Ar(n, t) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Nr(n) {
  return n;
}
function kr() {
  var n = Nr, t = Ar, i = null, o = q(0), f = q(pn), h = q(0);
  function l(a) {
    var r, e = (a = br(a)).length, c, u, s = 0, g = new Array(e), p = new Array(e), v = +o.apply(this, arguments), $ = Math.min(pn, Math.max(-pn, f.apply(this, arguments) - v)), x, A = Math.min(Math.abs($) / e, h.apply(this, arguments)), b = A * ($ < 0 ? -1 : 1), M;
    for (r = 0; r < e; ++r)
      (M = p[g[r] = r] = +n(a[r], r, a)) > 0 && (s += M);
    for (t != null ? g.sort(function(d, _) {
      return t(p[d], p[_]);
    }) : i != null && g.sort(function(d, _) {
      return i(a[d], a[_]);
    }), r = 0, u = s ? ($ - e * b) / s : 0; r < e; ++r, v = x)
      c = g[r], M = p[c], x = v + (M > 0 ? M * u : 0) + b, p[c] = {
        data: a[c],
        index: r,
        value: M,
        startAngle: v,
        endAngle: x,
        padAngle: A
      };
    return p;
  }
  return l.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : q(+a), l) : n;
  }, l.sortValues = function(a) {
    return arguments.length ? (t = a, i = null, l) : t;
  }, l.sort = function(a) {
    return arguments.length ? (i = a, t = null, l) : i;
  }, l.startAngle = function(a) {
    return arguments.length ? (o = typeof a == "function" ? a : q(+a), l) : o;
  }, l.endAngle = function(a) {
    return arguments.length ? (f = typeof a == "function" ? a : q(+a), l) : f;
  }, l.padAngle = function(a) {
    return arguments.length ? (h = typeof a == "function" ? a : q(+a), l) : h;
  }, l;
}
var Pn = { exports: {} };
Pn.exports;
(function(n) {
  (function(t, i, o) {
    function f(r) {
      var e = this, c = a();
      e.next = function() {
        var u = 2091639 * e.s0 + e.c * 23283064365386963e-26;
        return e.s0 = e.s1, e.s1 = e.s2, e.s2 = u - (e.c = u | 0);
      }, e.c = 1, e.s0 = c(" "), e.s1 = c(" "), e.s2 = c(" "), e.s0 -= c(r), e.s0 < 0 && (e.s0 += 1), e.s1 -= c(r), e.s1 < 0 && (e.s1 += 1), e.s2 -= c(r), e.s2 < 0 && (e.s2 += 1), c = null;
    }
    function h(r, e) {
      return e.c = r.c, e.s0 = r.s0, e.s1 = r.s1, e.s2 = r.s2, e;
    }
    function l(r, e) {
      var c = new f(r), u = e && e.state, s = c.next;
      return s.int32 = function() {
        return c.next() * 4294967296 | 0;
      }, s.double = function() {
        return s() + (s() * 2097152 | 0) * 11102230246251565e-32;
      }, s.quick = s, u && (typeof u == "object" && h(u, c), s.state = function() {
        return h(c, {});
      }), s;
    }
    function a() {
      var r = 4022871197, e = function(c) {
        c = String(c);
        for (var u = 0; u < c.length; u++) {
          r += c.charCodeAt(u);
          var s = 0.02519603282416938 * r;
          r = s >>> 0, s -= r, s *= r, r = s >>> 0, s -= r, r += s * 4294967296;
        }
        return (r >>> 0) * 23283064365386963e-26;
      };
      return e;
    }
    i && i.exports ? i.exports = l : this.alea = l;
  })(
    H,
    n
  );
})(Pn);
var _r = Pn.exports, jn = { exports: {} };
jn.exports;
(function(n) {
  (function(t, i, o) {
    function f(a) {
      var r = this, e = "";
      r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.next = function() {
        var u = r.x ^ r.x << 11;
        return r.x = r.y, r.y = r.z, r.z = r.w, r.w ^= r.w >>> 19 ^ u ^ u >>> 8;
      }, a === (a | 0) ? r.x = a : e += a;
      for (var c = 0; c < e.length + 64; c++)
        r.x ^= e.charCodeAt(c) | 0, r.next();
    }
    function h(a, r) {
      return r.x = a.x, r.y = a.y, r.z = a.z, r.w = a.w, r;
    }
    function l(a, r) {
      var e = new f(a), c = r && r.state, u = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return u.double = function() {
        do
          var s = e.next() >>> 11, g = (e.next() >>> 0) / 4294967296, p = (s + g) / (1 << 21);
        while (p === 0);
        return p;
      }, u.int32 = e.next, u.quick = u, c && (typeof c == "object" && h(c, e), u.state = function() {
        return h(e, {});
      }), u;
    }
    i && i.exports ? i.exports = l : this.xor128 = l;
  })(
    H,
    n
  );
})(jn);
var Sr = jn.exports, zn = { exports: {} };
zn.exports;
(function(n) {
  (function(t, i, o) {
    function f(a) {
      var r = this, e = "";
      r.next = function() {
        var u = r.x ^ r.x >>> 2;
        return r.x = r.y, r.y = r.z, r.z = r.w, r.w = r.v, (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (u ^ u << 1)) | 0;
      }, r.x = 0, r.y = 0, r.z = 0, r.w = 0, r.v = 0, a === (a | 0) ? r.x = a : e += a;
      for (var c = 0; c < e.length + 64; c++)
        r.x ^= e.charCodeAt(c) | 0, c == e.length && (r.d = r.x << 10 ^ r.x >>> 4), r.next();
    }
    function h(a, r) {
      return r.x = a.x, r.y = a.y, r.z = a.z, r.w = a.w, r.v = a.v, r.d = a.d, r;
    }
    function l(a, r) {
      var e = new f(a), c = r && r.state, u = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return u.double = function() {
        do
          var s = e.next() >>> 11, g = (e.next() >>> 0) / 4294967296, p = (s + g) / (1 << 21);
        while (p === 0);
        return p;
      }, u.int32 = e.next, u.quick = u, c && (typeof c == "object" && h(c, e), u.state = function() {
        return h(e, {});
      }), u;
    }
    i && i.exports ? i.exports = l : this.xorwow = l;
  })(
    H,
    n
  );
})(zn);
var Rr = zn.exports, Dn = { exports: {} };
Dn.exports;
(function(n) {
  (function(t, i, o) {
    function f(a) {
      var r = this;
      r.next = function() {
        var c = r.x, u = r.i, s, g;
        return s = c[u], s ^= s >>> 7, g = s ^ s << 24, s = c[u + 1 & 7], g ^= s ^ s >>> 10, s = c[u + 3 & 7], g ^= s ^ s >>> 3, s = c[u + 4 & 7], g ^= s ^ s << 7, s = c[u + 7 & 7], s = s ^ s << 13, g ^= s ^ s << 9, c[u] = g, r.i = u + 1 & 7, g;
      };
      function e(c, u) {
        var s, g = [];
        if (u === (u | 0))
          g[0] = u;
        else
          for (u = "" + u, s = 0; s < u.length; ++s)
            g[s & 7] = g[s & 7] << 15 ^ u.charCodeAt(s) + g[s + 1 & 7] << 13;
        for (; g.length < 8; )
          g.push(0);
        for (s = 0; s < 8 && g[s] === 0; ++s)
          ;
        for (s == 8 ? g[7] = -1 : g[s], c.x = g, c.i = 0, s = 256; s > 0; --s)
          c.next();
      }
      e(r, a);
    }
    function h(a, r) {
      return r.x = a.x.slice(), r.i = a.i, r;
    }
    function l(a, r) {
      a == null && (a = +/* @__PURE__ */ new Date());
      var e = new f(a), c = r && r.state, u = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return u.double = function() {
        do
          var s = e.next() >>> 11, g = (e.next() >>> 0) / 4294967296, p = (s + g) / (1 << 21);
        while (p === 0);
        return p;
      }, u.int32 = e.next, u.quick = u, c && (c.x && h(c, e), u.state = function() {
        return h(e, {});
      }), u;
    }
    i && i.exports ? i.exports = l : this.xorshift7 = l;
  })(
    H,
    n
  );
})(Dn);
var Cr = Dn.exports, En = { exports: {} };
En.exports;
(function(n) {
  (function(t, i, o) {
    function f(a) {
      var r = this;
      r.next = function() {
        var c = r.w, u = r.X, s = r.i, g, p;
        return r.w = c = c + 1640531527 | 0, p = u[s + 34 & 127], g = u[s = s + 1 & 127], p ^= p << 13, g ^= g << 17, p ^= p >>> 15, g ^= g >>> 12, p = u[s] = p ^ g, r.i = s, p + (c ^ c >>> 16) | 0;
      };
      function e(c, u) {
        var s, g, p, v, $, x = [], A = 128;
        for (u === (u | 0) ? (g = u, u = null) : (u = u + "\0", g = 0, A = Math.max(A, u.length)), p = 0, v = -32; v < A; ++v)
          u && (g ^= u.charCodeAt((v + 32) % u.length)), v === 0 && ($ = g), g ^= g << 10, g ^= g >>> 15, g ^= g << 4, g ^= g >>> 13, v >= 0 && ($ = $ + 1640531527 | 0, s = x[v & 127] ^= g + $, p = s == 0 ? p + 1 : 0);
        for (p >= 128 && (x[(u && u.length || 0) & 127] = -1), p = 127, v = 4 * 128; v > 0; --v)
          g = x[p + 34 & 127], s = x[p = p + 1 & 127], g ^= g << 13, s ^= s << 17, g ^= g >>> 15, s ^= s >>> 12, x[p] = g ^ s;
        c.w = $, c.X = x, c.i = p;
      }
      e(r, a);
    }
    function h(a, r) {
      return r.i = a.i, r.w = a.w, r.X = a.X.slice(), r;
    }
    function l(a, r) {
      a == null && (a = +/* @__PURE__ */ new Date());
      var e = new f(a), c = r && r.state, u = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return u.double = function() {
        do
          var s = e.next() >>> 11, g = (e.next() >>> 0) / 4294967296, p = (s + g) / (1 << 21);
        while (p === 0);
        return p;
      }, u.int32 = e.next, u.quick = u, c && (c.X && h(c, e), u.state = function() {
        return h(e, {});
      }), u;
    }
    i && i.exports ? i.exports = l : this.xor4096 = l;
  })(
    H,
    // window object or global
    n
  );
})(En);
var Pr = En.exports, Tn = { exports: {} };
Tn.exports;
(function(n) {
  (function(t, i, o) {
    function f(a) {
      var r = this, e = "";
      r.next = function() {
        var u = r.b, s = r.c, g = r.d, p = r.a;
        return u = u << 25 ^ u >>> 7 ^ s, s = s - g | 0, g = g << 24 ^ g >>> 8 ^ p, p = p - u | 0, r.b = u = u << 20 ^ u >>> 12 ^ s, r.c = s = s - g | 0, r.d = g << 16 ^ s >>> 16 ^ p, r.a = p - u | 0;
      }, r.a = 0, r.b = 0, r.c = -1640531527, r.d = 1367130551, a === Math.floor(a) ? (r.a = a / 4294967296 | 0, r.b = a | 0) : e += a;
      for (var c = 0; c < e.length + 20; c++)
        r.b ^= e.charCodeAt(c) | 0, r.next();
    }
    function h(a, r) {
      return r.a = a.a, r.b = a.b, r.c = a.c, r.d = a.d, r;
    }
    function l(a, r) {
      var e = new f(a), c = r && r.state, u = function() {
        return (e.next() >>> 0) / 4294967296;
      };
      return u.double = function() {
        do
          var s = e.next() >>> 11, g = (e.next() >>> 0) / 4294967296, p = (s + g) / (1 << 21);
        while (p === 0);
        return p;
      }, u.int32 = e.next, u.quick = u, c && (typeof c == "object" && h(c, e), u.state = function() {
        return h(e, {});
      }), u;
    }
    i && i.exports ? i.exports = l : this.tychei = l;
  })(
    H,
    n
  );
})(Tn);
var jr = Tn.exports, lt = { exports: {} };
(function(n) {
  (function(t, i, o) {
    var f = 256, h = 6, l = 52, a = "random", r = o.pow(f, h), e = o.pow(2, l), c = e * 2, u = f - 1, s;
    function g(M, d, _) {
      var S = [];
      d = d == !0 ? { entropy: !0 } : d || {};
      var N = x($(
        d.entropy ? [M, b(i)] : M ?? A(),
        3
      ), S), C = new p(S), R = function() {
        for (var y = C.g(h), k = r, m = 0; y < e; )
          y = (y + m) * f, k *= f, m = C.g(1);
        for (; y >= c; )
          y /= 2, k /= 2, m >>>= 1;
        return (y + m) / k;
      };
      return R.int32 = function() {
        return C.g(4) | 0;
      }, R.quick = function() {
        return C.g(4) / 4294967296;
      }, R.double = R, x(b(C.S), i), (d.pass || _ || function(y, k, m, w) {
        return w && (w.S && v(w, C), y.state = function() {
          return v(C, {});
        }), m ? (o[a] = y, k) : y;
      })(
        R,
        N,
        "global" in d ? d.global : this == o,
        d.state
      );
    }
    function p(M) {
      var d, _ = M.length, S = this, N = 0, C = S.i = S.j = 0, R = S.S = [];
      for (_ || (M = [_++]); N < f; )
        R[N] = N++;
      for (N = 0; N < f; N++)
        R[N] = R[C = u & C + M[N % _] + (d = R[N])], R[C] = d;
      (S.g = function(y) {
        for (var k, m = 0, w = S.i, P = S.j, j = S.S; y--; )
          k = j[w = u & w + 1], m = m * f + j[u & (j[w] = j[P = u & P + k]) + (j[P] = k)];
        return S.i = w, S.j = P, m;
      })(f);
    }
    function v(M, d) {
      return d.i = M.i, d.j = M.j, d.S = M.S.slice(), d;
    }
    function $(M, d) {
      var _ = [], S = typeof M, N;
      if (d && S == "object")
        for (N in M)
          try {
            _.push($(M[N], d - 1));
          } catch {
          }
      return _.length ? _ : S == "string" ? M : M + "\0";
    }
    function x(M, d) {
      for (var _ = M + "", S, N = 0; N < _.length; )
        d[u & N] = u & (S ^= d[u & N] * 19) + _.charCodeAt(N++);
      return b(d);
    }
    function A() {
      try {
        var M;
        return s && (M = s.randomBytes) ? M = M(f) : (M = new Uint8Array(f), (t.crypto || t.msCrypto).getRandomValues(M)), b(M);
      } catch {
        var d = t.navigator, _ = d && d.plugins;
        return [+/* @__PURE__ */ new Date(), t, _, t.screen, b(i)];
      }
    }
    function b(M) {
      return String.fromCharCode.apply(0, M);
    }
    if (x(o.random(), i), n.exports) {
      n.exports = g;
      try {
        s = vt;
      } catch {
      }
    } else
      o["seed" + a] = g;
  })(
    // global: `self` in browsers (including strict mode and web workers),
    // otherwise `this` in Node and other environments
    typeof self < "u" ? self : H,
    [],
    // pool: entropy pool starts empty
    Math
    // math: package containing random, pow, and seedrandom
  );
})(lt);
var zr = lt.exports, Dr = _r, Er = Sr, Tr = Rr, qr = Cr, Xr = Pr, Lr = jr, J = zr;
J.alea = Dr;
J.xor128 = Er;
J.xorwow = Tr;
J.xorshift7 = qr;
J.xor4096 = Xr;
J.tychei = Lr;
var Ir = J;
const Br = /* @__PURE__ */ Mt(Ir), Vr = (n, t) => {
  const { radarSize: i = 900, blipRadius: o = 12, colorScheme: f = "white" } = t || {}, h = f === "white" ? "black" : "white", l = ft().domain([0, n.rings.length]).interpolator(hr), a = (v) => {
    let $ = i / (2 * (n.rings.length + 0.5)) * v;
    return v > 0 && ($ += i / (2 * (n.rings.length + 1)) / 2), $;
  }, r = (v) => 360 / n.slices.length * v, e = (v, $) => {
    const x = { x: "left", y: "top" };
    return v < -10 ? x.x = "right" : v > 10 ? x.x = "left" : x.x = "middle", $ < -10 ? x.y = "bottom" : x.y = "top", x;
  }, c = kr().value(1)(n.slices.map((v, $) => $)).sort(), u = Br("seed"), s = n.rings.reduce(
    (v, $, x) => {
      const A = a(x), b = a(x + 1), M = $r().innerRadius(A).outerRadius(b), d = {
        y: -b,
        color: $.color ? $.color : l(x),
        textColor: "white",
        ...$
      };
      return v.rings.push(d), v.pathInfoList.push({
        blipDistanceScale: _n().range([
          A + o,
          b - o
        ]),
        generator: M
      }), v;
    },
    {
      rings: [],
      pathInfoList: []
    }
  ), g = o * 2.2, p = n.slices.reduce(
    (v, $, x) => {
      const A = c[x], { blipsByRing: b, ...M } = $, d = r(x) + 0.5 * (r(x + 1) - r(x)), S = 180 - 90 - d, N = i + 50, C = N / 2 * Math.sin(d * Math.PI / 180), R = -1 * (N / 2) * Math.sin(S * Math.PI / 180), y = {
        ...M,
        x: C,
        y: R,
        anchor: e(C, R)
        // startAngle: radius(sliceIndex),
        // endAngle: radius(sliceIndex + 1),
      }, k = n.rings.reduce(
        (m, w, P) => {
          const j = s.pathInfoList[P], L = {
            sliceIndex: x,
            ringIndex: P,
            path: j.generator(A)
          };
          m.areas.push(L);
          const E = b[w.id];
          if (!E)
            return m;
          const z = E.reduce((B) => {
            for (let I = 1; ; I++) {
              const T = j.blipDistanceScale(u()), F = Math.asin(o / T), K = A.startAngle + F, G = A.endAngle - F, nn = _n().range([K, G]), U = G > K ? nn(u()) : nn(0.5), tn = T * Math.cos(U - Math.PI / 2), rn = T * Math.sin(U - Math.PI / 2);
              if (!(I < 10 && B.some(
                (on) => Math.hypot(on.x - tn, on.y - rn) < g
              )))
                return B.concat({
                  angle: U,
                  distance: T,
                  x: tn,
                  y: rn
                });
            }
          }, []);
          return z.sort(function(B, I) {
            const T = B.angle - I.angle, F = B.distance - I.distance;
            return Math.abs(
              Math.sin(T) * (I.distance + F / 2)
            ) > Math.abs(F) ? T : F;
          }), m.blips = m.blips.concat(
            E.map((B, I) => {
              const T = z[I];
              return {
                ...B,
                sliceIndex: x,
                ringIndex: P,
                blipIndex: 0,
                // INFO: dummy value, is overriden below
                x: T.x,
                y: T.y
              };
            })
          ), m;
        },
        {
          areas: [],
          blips: []
        }
      );
      return {
        areas: v.areas.concat(k.areas),
        blips: v.blips.concat(k.blips).map((m, w) => ({ ...m, blipIndex: w + 1 })),
        slices: v.slices.concat(y)
      };
    },
    {
      areas: [],
      blips: [],
      slices: []
    }
  );
  return {
    global: {
      radarSize: i,
      blipRadius: o,
      mainColor: h
    },
    rings: s.rings,
    ...p
  };
};
export {
  q as c,
  Vr as g,
  sn as p,
  en as s,
  pn as t,
  mr as w
};
