var s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function u(e) {
  if (e.__esModule)
    return e;
  var o = e.default;
  if (typeof o == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    t.prototype = o.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var n = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
const l = {}, f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l
}, Symbol.toStringTag, { value: "Module" })), i = /* @__PURE__ */ u(f);
export {
  s as c,
  a as g,
  i as r
};
