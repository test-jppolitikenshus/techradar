import "./transform-Dvy5dDsS.js";
import { t as E, s as $, p as D, w as S, c as x, g as q } from "./generateTechradarVizData-BBZswo1K.js";
import { s as L, T as M } from "./Tooltip-EtEXdAvm.js";
const P = {
  draw(n, l) {
    const a = $(l / D);
    n.moveTo(a, 0), n.arc(0, 0, a, 0, E);
  }
}, w = $(3), z = {
  draw(n, l) {
    const a = -$(l / (w * 3));
    n.moveTo(0, a * 2), n.lineTo(-w * a, -a), n.lineTo(w * a, -a), n.closePath();
  }
};
function B(n, l) {
  let a = null, y = S(i);
  n = typeof n == "function" ? n : x(n || P), l = typeof l == "function" ? l : x(l === void 0 ? 64 : +l);
  function i() {
    let t;
    if (a || (a = t = y()), n.apply(this, arguments).draw(a, +l.apply(this, arguments)), t)
      return a = null, t + "" || null;
  }
  return i.type = function(t) {
    return arguments.length ? (n = typeof t == "function" ? t : x(t), i) : n;
  }, i.size = function(t) {
    return arguments.length ? (l = typeof t == "function" ? t : x(+t), i) : l;
  }, i.context = function(t) {
    return arguments.length ? (a = t ?? null, i) : a;
  }, i;
}
function H(n, l) {
  const a = document.getElementById("legendItem-" + n.blipIndex);
  a && a.setAttribute("fill", l);
}
function k(n, l) {
  const a = document.getElementById("legendItem-" + n.blipIndex);
  a && a.setAttribute("fill", l);
}
function N(n, l) {
  switch (n.anchor.x) {
    case "left":
      return n.x;
    case "middle":
      return n.x - l.width / 2;
    case "right":
      return n.x - l.width;
  }
}
function O(n, l) {
  switch (n.anchor.y) {
    case "top":
      return n.y;
    case "bottom":
      return n.y - l.height;
  }
}
const j = (n, l, a) => {
  const { blipTooltipEnabled: y = !0, ...i } = a || {}, t = q(l, i), A = L(n);
  A.selectAll("*").remove();
  const p = A.append("svg").style("-webkit-user-select", "none").style("-moz-user-select", "none").style("-ms-user-select", "none").style("user-select", "none"), b = p.append("g"), I = b.append("g");
  I.selectAll("path").data(t.areas).enter().append("path").attr("fill", "transparent").attr("stroke", "gray").attr("stroke-width", "0.5").attr("d", (e) => e.path), I.selectAll("g").data(t.rings).enter().append("text").attr("y", (e) => e.y).attr("dy", t.global.radarSize / 12).attr("text-anchor", "middle").attr("opacity", 0.35).attr("font-family", "Arial, Helvetica").attr("font-size", `${t.global.radarSize / 21}px`).attr("font-weight", "bold").attr("pointer-events", "none").attr("user-select", "none").attr("fill", (e) => e.color).text((e) => e.name);
  const u = I.selectAll("g").data(t.blips).enter().append("g").attr("id", (e) => `blip-${e.blipIndex}`).style("font-size", "12").attr("transform", (e) => `translate(${e.x}, ${e.y})`);
  u.filter((e) => e.state === "stable" || e.state === void 0).append("circle").attr("r", t.global.blipRadius).attr("fill", (e) => t.rings[e.ringIndex].color), u.filter((e) => e.state === "up").append("path").attr("d", B(z).size(t.global.blipRadius * 30)).attr("fill", (e) => t.rings[e.ringIndex].color), u.filter((e) => e.state === "down").append("path").attr("d", B(z).size(t.global.blipRadius * 30)).attr("fill", (e) => t.rings[e.ringIndex].color).attr("transform", "rotate(-180)"), u.append("text").style("pointer-events", "none").attr("dy", 4).attr("class", (e) => e.icon != null ? "nf" : "").attr("font-family", "Arial, Helvetica").attr("font-size", `${t.global.blipRadius}px`).attr("pointer-events", "none").attr("user-select", "none").attr("text-anchor", "middle").attr("fill", (e) => t.rings[e.ringIndex].textColor).text((e) => e.icon ? e.icon : e.blipIndex);
  let c;
  y && (c = new M(), u.on("mouseover", (e, o) => {
    const s = (event == null ? void 0 : event.target).getBoundingClientRect();
    c.show(o.name, s.x + s.width / 2, s.y), H(o, t.rings[o.ringIndex].color);
  }).on("mouseout", (e, o) => {
    c.hide(), k(o, t.global.mainColor);
  }));
  const g = b.append("g");
  g.selectAll("g").data(t.slices).enter().append("g").attr("id", (e, o) => `slice-${o}`);
  for (let e = 0; e < t.slices.length; e++) {
    g.selectAll(`#slice-${e}`).append("text").attr("font-family", "Arial, Helvetica").style("font-size", `${t.global.blipRadius + 6}px`).attr("font-weight", "bold").attr("fill", t.global.mainColor).text(t.slices[e].name);
    const o = { x: 0, y: 30 }, s = { x: 200, y: 30 };
    let f = 0;
    for (let d = 0; d < t.rings.length; d++)
      t.blips.filter((r) => r.sliceIndex === e && r.ringIndex === d).length !== 0 && (g.selectAll(`#slice-${e}`).append("text").attr("font-family", "Arial, Helvetica").style("font-size", `${t.global.blipRadius + 1}px`).attr("font-weight", "bold").attr("fill", t.rings[d].color).attr("dx", f % 2 === 0 ? o.x : s.x).attr("dy", f % 2 === 0 ? o.y : s.y).text(t.rings[d].name), g.selectAll(`#slice-${e}`).append("g").selectAll("g").data(t.blips).enter().filter((r) => r.sliceIndex === e && r.ringIndex === d).append("a").attr("href", (r) => r.url ? r.url : "#").attr("target", (r) => r.url && (a != null && a.linksInNewTabs) ? "_blank" : null).append("text").attr("font-family", "Arial, Helvetica").style("font-size", `${t.global.blipRadius}px`).attr("id", (r) => `legendItem-${r.blipIndex}`).attr("fill", t.global.mainColor).on("mouseover", (r, h) => {
        H(h, t.rings[d].color);
        const C = document.getElementById("blip-" + h.blipIndex);
        if (!C)
          return;
        const v = C.getBoundingClientRect();
        c.show(h.name, v.x + v.width / 2, v.y);
      }).on("mouseout", (r, h) => {
        k(h, t.global.mainColor), c.hide();
      }).attr("dx", f % 2 === 0 ? o.x : s.x).attr("dy", () => f % 2 === 0 ? o.y += 15 : s.y += 15).attr("class", (r) => r.icon != null ? "nf" : "").text((r) => `${r.icon ? r.icon : r.blipIndex}. `).append("tspan").style("font-family", "Arial, Helvetica").text((r) => r.name), f % 2 === 0 ? o.y += 30 : s.y += 30, f += 1);
    const T = g.select(`#slice-${e}`).node().getBBox();
    g.select(`#slice-${e}`).attr("transform", `translate(${N(t.slices[e], T)}, ${O(t.slices[e], T)})`);
  }
  const m = p.node().getBBox();
  p.append("text").attr("transform", `translate(10, ${m.height + 20})`).text("▲ moved up     ▼ moved down").attr("xml:space", "preserve").style("font-family", "Arial, Helvetica").attr("fill", t.global.mainColor).attr("font-size", `${t.global.blipRadius}px`), p.attr("width", m.width).attr("height", m.height + 25), b.attr("transform", `translate(${Math.abs(m.x)}, ${Math.abs(m.y)})`);
  let R = !1;
  return {
    vizData: t,
    destroy: () => {
      R || (R = !0, c && c.destroy(), p.remove());
    }
  };
};
export {
  j as default
};
