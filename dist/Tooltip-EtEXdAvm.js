var n = Object.defineProperty;
var y = (t, o, e) => o in t ? n(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var s = (t, o, e) => (y(t, typeof o != "symbol" ? o + "" : o, e), e);
import { S as p, r as a } from "./transform-Dvy5dDsS.js";
function r(t) {
  return typeof t == "string" ? new p([[document.querySelector(t)]], [document.documentElement]) : new p([[t]], a);
}
class h {
  constructor() {
    // TODO
    s(this, "tooltip");
    s(this, "tooltipSpan");
    s(this, "show", (o, e, l) => {
      this.tooltipSpan.text(o);
      const i = this.tooltip.node();
      this.tooltip.style("opacity", 1).style("left", e - (i ? i.offsetWidth : 0) / 2 + "px").style("top", l - (i ? i.offsetHeight : 0) - 10 + "px");
    });
    s(this, "hide", () => {
      this.tooltip.style("opacity", 0), this.tooltipSpan.text("");
    });
    s(this, "destroy", () => {
      this.tooltip.remove();
    });
    this.tooltip = r("body").append("div").style("font-size", "12px").style("color", "white").style("opacity", 0).style("position", "fixed").style("pointer-events", "none").style("border-radius", "3px").style("background-color", "black").style("padding", "5px 8px"), this.tooltipSpan = this.tooltip.append("span").style("white-space", "nowrap"), this.tooltip.append("div").text("▼").style("color", "black").style("position", "absolute").style("margin-top", "-3px").style("top", "100%").style("left", 0).style("width", "100%").style("text-align", "center");
  }
}
export {
  h as T,
  r as s
};
