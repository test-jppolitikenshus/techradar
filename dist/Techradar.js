import { jsx as c } from "react/jsx-runtime";
import { useRef as f, useEffect as o } from "react";
import m from "./createTechradar.js";
const a = ({ data: r, options: e }) => {
  const t = f(null);
  return o(() => {
    m(t.current, r, e);
  }, [r, e]), /* @__PURE__ */ c("div", { ref: t });
};
export {
  a as Techradar
};
